import Stripe from "stripe";

export const stripe =
  process.env.STRIPE_SECRET_KEY
    ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" })
    : null;

export const PRICE_ID   = process.env.STRIPE_PRICE_ID   ?? "";
export const APP_URL    = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
