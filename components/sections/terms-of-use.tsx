import Link from "next/link"
import { Menu } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold">
          &
        </Link>
        <button className="text-white">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <h1 className="mb-4 text-2xl font-bold">Terms of Use</h1>
        <p className="mb-8 text-gray-400">Effective Date: 20/02/25</p>

        <p className="mb-12">
          Welcome to Ampersand. By accessing or using our website and services, you agree to comply with these Terms of
          Use. Please read them carefully.
        </p>

        <div className="space-y-12">
          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500" />
            <h2 className="mb-4 text-xl font-semibold">Acceptance of Terms</h2>
            <p className="text-gray-300">
              By using our services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not
              agree, you must discontinue use immediately.
            </p>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500" />
            <h2 className="mb-4 text-xl font-semibold">Use of Services</h2>
            <div className="space-y-4 text-gray-300">
              <p>Eligibility: You must be at least 18 years old to use our services.</p>
              <p>
                Permitted Use: You may use our services only for lawful purposes and in accordance with these Terms.
              </p>
              <p>
                Account Security: You are responsible for maintaining the confidentiality of your account credentials
                and for all activities under your account.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                All content on our website, including text, graphics, logos, and software, is owned by Ampersand or its
                licensors and is protected by intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, or create derivative works from our content without written
                permission.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-500" />
            <h2 className="mb-4 text-xl font-semibold">AI Tools and CRM Usage</h2>
            <div className="space-y-4 text-gray-300">
              <p>Our AI matching tool and CRM are provided for business purposes only.</p>
              <p>You agree not to misuse or attempt to reverse-engineer our AI models or software.</p>
              <p>We reserve the right to modify or discontinue these tools without notice.</p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />
            <h2 className="mb-4 text-xl font-semibold">Prohibited Conduct</h2>
            <div className="space-y-4 text-gray-300">
              <p>You agree not to:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Use the services for any illegal or unauthorized purpose.</li>
                <li>Violate any applicable laws or regulations.</li>
                <li>Interfere with or disrupt the security of the services.</li>
                <li>Attempt to gain unauthorized access to any portion of our systems.</li>
              </ul>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-500" />
            <h2 className="mb-4 text-xl font-semibold">Disclaimers and Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>No Warranty: Our services are provided "as is" without warranties of any kind, express or implied.</p>
              <p>No Guarantee: We do not guarantee outcomes from the use of our AI matching tool or CRM.</p>
              <p>
                Limitation of Liability: Ampersand shall not be liable for any indirect, incidental, or consequential
                damages arising from your use of these Terms or misuse of our services.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Indemnification</h2>
            <div className="space-y-4 text-gray-300">
              <p>
              You agree to indemnify and hold Ampersand, its affiliates, and employees harmless from any claims, losses, or damages resulting from your breach of these Terms or misuse of our services.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Modifications to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
              We reserve the right to update or modify these Terms of Use at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
              We may suspend or terminate your access to our services if you violate these Terms.
              </p>
              <p>
              You may stop using our services at any time.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-300">
              <p>
              These Terms are governed by the laws of These Terms are governed by the laws of India, with the courts of Pune having exclusive jurisdiction over all matters.
              </p>
              <p>
              Disputes will be resolved through binding arbitration or mediation in [Insert Location].
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-500" />
            <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have questions about these Terms of Use, please contact us at:</p>
              <p>Email: [Insert Email]</p>
              <p>Phone: [Insert Phone Number]</p>
              <p>Address: [Insert Address]</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}