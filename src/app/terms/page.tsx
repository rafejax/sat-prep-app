import Link from "next/link";

export const metadata = { title: "Terms of Use – SATisfied" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#040410] px-4 py-12 text-slate-300">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300">
          ← Back to SATisfied
        </Link>

        <h1 className="mb-2 text-3xl font-black text-white">Terms of Use</h1>
        <p className="mb-8 text-sm text-slate-500">Effective date: June 14, 2026</p>

        <div className="space-y-6 text-sm leading-7">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using SATisfied ("the App"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the App. We reserve the right to update these terms at any time; continued use of the App constitutes acceptance of any changes.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">2. Educational Purpose Only</h2>
            <p>SATisfied is an independent educational practice tool designed to help students prepare for the PSAT and SAT examinations. It is not affiliated with, endorsed by, or associated with the College Board or any official testing organization. Results and scores within the App do not predict or guarantee performance on official exams.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">3. Eligibility</h2>
            <p>The App is intended for users of all ages. Users under 13 must have parental or guardian consent before creating an account or submitting any personal information. Paid subscriptions require a valid payment method and may only be purchased by individuals aged 18 or older, or by a parent or guardian on behalf of a minor.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">4. User Accounts</h2>
            <p>You may optionally create an account using an email address and password. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use. Passwords are hashed using industry-standard cryptographic methods and are never stored in plain text.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">5. Subscription and Billing</h2>
            <p>Access to SATisfied's full feature set — including PSAT/SAT daily boards and leaderboards — requires an active paid subscription at <strong className="text-white">$1.99 per month</strong>. New subscribers receive a <strong className="text-white">7-day free trial</strong>; no charge is made until the trial ends.</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Subscriptions renew automatically each billing period until canceled.</li>
              <li>You may cancel at any time through your subscription management page or the Stripe billing portal; access continues until the end of the current paid period.</li>
              <li>All payments are processed by <strong className="text-white">Stripe, Inc.</strong> We do not store or have access to your card number or payment credentials.</li>
              <li>Refunds are not provided for partial billing periods. If you believe you were charged in error, contact us within 30 days.</li>
              <li>We reserve the right to change pricing with 30 days' advance notice to registered users.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">6. Acceptable Use</h2>
            <p>You agree not to: (a) use the App for any unlawful purpose; (b) attempt to gain unauthorized access to any part of the App or its systems; (c) submit false, misleading, or offensive content; (d) interfere with the App's operation, including through automated scripts or bots on the leaderboard; or (e) reverse-engineer or resell any part of the App.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">7. Leaderboard</h2>
            <p>Scores and display names submitted to the leaderboard are publicly visible. We reserve the right to remove any entry that we determine, in our sole discretion, to be fraudulent, offensive, or otherwise in violation of these terms. Weekly leaderboards reset each Monday at midnight Eastern Time (ET). Daily questions rotate at midnight ET.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">8. Intellectual Property</h2>
            <p>All original content, including curated question text, explanations, code, and design, is the property of SATisfied's creators and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">9. Disclaimer of Warranties</h2>
            <p>The App is provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be error-free or uninterrupted.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, SATisfied and its creators shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of, or inability to use, the App.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">11. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Florida.</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">12. Contact</h2>
            <p>For questions about these Terms, billing disputes, or data requests, please contact us at <span className="text-blue-400">support@satisfied.app</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
