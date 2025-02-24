import Link from "next/link"
import { Menu } from "lucide-react"

export default function PrivacyPage() {
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
        <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-gray-400">Effective Date: 20/02/25</p>

        <p className="mb-12">
          Ampersand values your privacy and is committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, share, and safeguard your data when you visit our website and use our services.
        </p>

        <div className="space-y-12">
          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500" />
            <h2 className="mb-4 text-xl font-semibold">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Personal Information: When you register, contact us, or use our services, we collect information such as
                your name, email, phone number, and company details.
              </p>
              <p>
                Usage Data: We gather data on how you interact with our website, such as pages visited, time spent, and
                clicks, using cookies and analytics tools.
              </p>
              <p>
                AI Interaction Data: Information generated through your interactions with our AI tools, such as matching
                preferences or CRM usage patterns.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500" />
            <h2 className="mb-4 text-xl font-semibold">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>To provide and improve our services, including AI-powered matching and CRM functionalities.</p>
              <p>To communicate with you about updates, offers, and service enhancements.</p>
              <p>To conduct analytics and research to improve user experience.</p>
              <p>To maintain security and prevent fraud.</p>
              <p>To comply with legal obligations.</p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">How We Share Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Robust Security: We implement end-to-end encryption and secure data storage to protect user information
                from unauthorized access.
              </p>
              <p>
                Privacy by Design: Our AI tools comply with global standards such as GDPR, ensuring user data is handled
                with care and consent.
              </p>
              <p>
                Confidentiality Assurance: We never share proprietary data without explicit permission and use
                anonymized datasets for model training.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-500" />
            <h2 className="mb-4 text-xl font-semibold">Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use encryption, firewalls, and secure servers to protect your personal information.</p>
              <p>Access to your data is restricted to authorized personnel only.</p>
              <p>We regularly audit our systems for vulnerabilities and security breaches.</p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>Access and Correction: You can access and update your personal information at any time.</p>
              <p>Data Deletion: You may request that we delete your personal data.</p>
              <p>Opt-Out: You can opt out of marketing communications.</p>
              <p>Consent Withdrawal: You may withdraw consent for data processing where applicable.</p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />
            <h2 className="mb-4 text-xl font-semibold">Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies to enhance your experience and analyze site traffic.</p>
              <p>You can manage cookie preferences through your browser settings.</p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500" />
            <h2 className="mb-4 text-xl font-semibold">International Data Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                If your information is transferred outside your country, we ensure appropriate safeguards are in place.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-500" />
            <h2 className="mb-4 text-xl font-semibold">Children&apos;s Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services are not intended for children under 13, and we do not knowingly collect data from minors.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-500" />
            <h2 className="mb-4 text-xl font-semibold">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by
                posting the updated policy on our website.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>Email: [Insert Email]</p>
              <p>Phone: [Insert Phone Number]</p>
              <p>Address: [Insert Address]</p>
            </div>
          </section>
        </div>

        <p className="mt-12 text-gray-400">
          By using our website and services, you agree to the terms outlined in this Privacy Policy.
        </p>
      </main>
    </div>
  )
}

