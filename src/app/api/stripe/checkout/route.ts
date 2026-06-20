import { NextRequest, NextResponse } from "next/server";
import { stripe, PRICE_ID, APP_URL } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  if (!stripe || !PRICE_ID) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const { userId, email, displayName } = await req.json();

  if (!userId || !email) {
    return NextResponse.json({ error: "userId and email required" }, { status: 400 });
  }

  // Find or create Stripe customer
  const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey   = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseAdmin = supabaseUrl && serviceKey
    ? createClient(supabaseUrl, serviceKey)
    : null;

  let customerId: string | undefined;

  if (supabaseAdmin) {
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single();

    customerId = profile?.stripe_customer_id ?? undefined;
  }

  // If we have a stored customer ID, verify it's valid in the current mode (test vs live)
  if (customerId) {
    try {
      await stripe.customers.retrieve(customerId);
    } catch {
      // Customer doesn't exist in this mode — create a fresh one
      customerId = undefined;
    }
  }

  if (!customerId) {
    const customer = await stripe.customers.create({
      email,
      name: displayName ?? email,
      metadata: { supabase_user_id: userId },
    });
    customerId = customer.id;

    if (supabaseAdmin) {
      await supabaseAdmin
        .from("profiles")
        .upsert({ id: userId, stripe_customer_id: customerId }, { onConflict: "id" });
    }
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: PRICE_ID, quantity: 1 }],
    success_url: `${APP_URL}/subscription?success=true`,
    cancel_url:  `${APP_URL}/subscription?canceled=true`,
    allow_promotion_codes: true,
    subscription_data: { trial_period_days: 7 },
  });

  return NextResponse.json({ url: session.url });
}
