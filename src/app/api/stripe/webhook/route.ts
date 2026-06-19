import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  if (!stripe) return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) return NextResponse.json({ error: "Webhook secret not set" }, { status: 503 });

  const rawBody = await req.text();
  const sig     = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const admin = supabaseUrl && serviceKey ? createClient(supabaseUrl, serviceKey) : null;

  if (!admin) return NextResponse.json({ received: true }); // no DB to update

  async function updateByCustomer(customerId: string, status: string, endAt?: number) {
    const update: Record<string, unknown> = { subscription_status: status, updated_at: new Date().toISOString() };
    if (endAt) update.subscription_end_at = new Date(endAt * 1000).toISOString();
    await admin!.from("profiles").update(update).eq("stripe_customer_id", customerId);
  }

  // Helper to extract period end — location changed in newer Stripe SDK versions
  function periodEnd(sub: Stripe.Subscription): number | undefined {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (sub as any).current_period_end ?? sub.items?.data?.[0]?.current_period_end;
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      await updateByCustomer(sub.customer as string, sub.status, periodEnd(sub));
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      await updateByCustomer(sub.customer as string, "canceled");
      break;
    }
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode === "subscription" && session.customer) {
        const sub = await stripe.subscriptions.retrieve(session.subscription as string);
        await updateByCustomer(session.customer as string, sub.status, periodEnd(sub));
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
