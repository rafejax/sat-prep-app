import Link from "next/link";

export const metadata = { title: "Privacy Policy – SATisfied" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#040410] px-4 py-12 text-slate-300">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to SATisfied
        </Link>

        <h1 className="mb-2 text-3xl font-black text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-slate-500">Effective date: June 14, 2026</p>

        <div className="space-y-6 text-sm leading-7">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">1. Overview</h2>
            <p>SATisfied ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights. This policy complies with the Florida Digital Bill of Rights (FDBR), the Children's Online Privacy Protection Act (COPPA), and other applicable U.S. privacy laws.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">2. Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Display Name / Username:</strong> When you submit a score or create an account, we store your chosen display name.</li>
              <li><strong className="text-white">Email Address:</strong> Required for account creation, authentication, billing, and account-related communications.</li>
              <li><strong className="text-white">Password:</strong> Never stored in plain text. Securely hashed by our authentication provider, Supabase (bcrypt).</li>
              <li><strong className="text-white">Billing Information:</strong> We do not collect or store card numbers or payment credentials. Payment is processed by Stripe, Inc. We receive only a customer ID and subscription status from Stripe to manage your access.</li>
              <li><strong className="text-white">Uploaded Files:</strong> When you use the Custom Boards feature, the text content of your uploaded file is sent to our AI provider (Anthropic) to generate quiz questions. Files are not permanently stored on our servers; extracted text is retained only transiently during processing. See Section 7 for details.</li>
              <li><strong className="text-white">Game Data:</strong> Practice scores, modes (PSAT/SAT), and submission dates are stored to display on public leaderboards.</li>
              <li><strong className="text-white">Local Storage:</strong> In-progress game state (name, score, answered questions, saved custom boards) is stored in your browser's localStorage and never transmitted to our servers except when a final score is submitted.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">3. How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To provide access to the App and authenticate your account.</li>
              <li>To process and manage your subscription through Stripe.</li>
              <li>To display your score on the public leaderboard using only your chosen display name.</li>
              <li>To generate AI-based quiz questions from files you upload.</li>
              <li>To send transactional emails (subscription receipts, billing alerts).</li>
              <li>We do not sell, rent, or share your personal information with third parties for marketing or advertising purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">4. Children's Privacy (COPPA)</h2>
            <p>SATisfied is designed for students, including minors. We do not knowingly collect personal information from children under 13 without verified parental consent. If you are under 13, please have a parent or guardian create an account and manage your subscription on your behalf, or use the guest (no-account) mode. If we discover we have inadvertently collected personal data from a child under 13 without consent, we will delete it promptly. Parents may contact us at <span className="text-blue-400">support@satisfied.app</span> to request deletion.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">5. Florida Digital Bill of Rights</h2>
            <p>If you are a Florida resident, you have the following rights under the FDBR:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>The right to know what personal data we collect and how it is used.</li>
              <li>The right to access and obtain a copy of your personal data.</li>
              <li>The right to correct inaccurate personal data.</li>
              <li>The right to delete personal data we hold about you.</li>
              <li>The right to opt out of the sale or sharing of your personal data (we do not sell data).</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <span className="text-blue-400">support@satisfied.app</span>. We will respond within 45 days.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">6. Stripe Payment Processing</h2>
            <p>Subscription payments are handled by <strong className="text-white">Stripe, Inc.</strong> (stripe.com). When you subscribe, you are directed to a Stripe-hosted checkout page. Stripe collects and processes your payment information directly; we never see or store your card number, CVV, or billing address. We receive a Stripe customer ID and subscription status which we store to manage your account access. Stripe's privacy practices are governed by their own <a href="https://stripe.com/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">7. AI-Powered Custom Boards</h2>
            <p>When you use the Custom Boards feature:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Text extracted from your uploaded file is sent to <strong className="text-white">Anthropic, PBC</strong> (anthropic.com), the company that powers our AI question generator (Claude).</li>
              <li>Uploaded files are processed server-side and are not permanently stored. Extracted text (up to 12,000 characters) is transmitted to Anthropic to generate questions and is subject to Anthropic's <a href="https://www.anthropic.com/legal/privacy" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</li>
              <li>Generated questions and saved custom boards are stored only in your browser's localStorage; they are not sent to our servers.</li>
              <li>Do not upload files containing sensitive personal information, confidential business data, or content belonging to others without permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">8. Data Retention</h2>
            <p>Leaderboard scores are retained indefinitely to support all-time rankings. Account and profile data is retained until you request deletion. Subscription status is retained while your account exists. Files uploaded for custom board generation are not retained after processing. In-browser localStorage data (game progress, custom boards) persists until you clear your browser data or we clear it automatically on a new day.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">9. Third-Party Services</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong className="text-white">Supabase</strong> (supabase.com) — database and authentication.</li>
              <li><strong className="text-white">Stripe, Inc.</strong> (stripe.com) — payment processing and subscription management.</li>
              <li><strong className="text-white">Anthropic, PBC</strong> (anthropic.com) — AI question generation for Custom Boards.</li>
            </ul>
            <p className="mt-2">We do not use advertising networks, analytics trackers, or social media pixels.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">10. Security</h2>
            <p>We take reasonable technical and organizational measures to protect your data, including encrypted transmission (HTTPS), secure password hashing, and restricted access controls. Webhook communications from Stripe are verified using cryptographic signatures. No system is completely secure; we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify registered users by email and update the effective date above. Continued use of the App after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">12. Contact Us</h2>
            <p>For privacy questions, data requests, or concerns, contact us at:<br />
            <span className="text-blue-400">support@satisfied.app</span></p>
          </section>
        </div>
      </div>
    </div>
  );
}
