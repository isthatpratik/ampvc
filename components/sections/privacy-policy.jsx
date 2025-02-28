import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen text-black">
      <motion.main
        className="mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:px-10 px-5 pt-6 grid gap-4">
          <Button
            onClick={onBack}
            className="shadow-none hover:bg-black/5 transition-all duration-300 w-fit rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
          >
            <ArrowLeft className="" /> Back
          </Button>
        </div>
        <div className="mb-10 lg:px-10 px-5 pt-6 flex flex-col space-y-8">
          <h1 className="font-semibold lg:text-h3 text-h4 text-center lg:text-start">Privacy Policy</h1>
          <div className="flex flex-col space-y-4 text-center lg:text-start">
            <p className="lg:text-body-1 text-body-3">Effective Date: 20/02/25</p>

            <p className="lg:text-body-1 text-body-3">
              Ampersand values your privacy and is committed to protecting your
              personal information. This Privacy Policy outlines how we collect,
              use, share, and safeguard your data when you visit our website and
              use our services.
            </p>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-5">
          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FFADDF] rounded-full" />
              <div className="grid lg:ml-10 ml-5">
                <h2 className="mb-2 lg:text-h5 text-h6 font-semibold">
                  Information We Collect
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    Personal Information: When you register, contact us, or use
                    our services, we collect information such as your name,
                    email, phone number, and company details.
                  </p>
                  <p>
                    Usage Data: We gather data on how you interact with our
                    website, such as pages visited, time spent, and clicks,
                    using cookies and analytics tools
                  </p>
                  <p>
                    AI Interaction Data: Information generated through your
                    interactions with our AI tools, such as matching preferences
                    or CRM usage patterns.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FCEC3B] rounded-full" />
              <div className="grid lg:ml-10 ml-5">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    To provide and improve our services, including AI-powered
                    matching and CRM functionalities.
                  </p>
                  <p>
                    To communicate with you about updates, offers, and service
                    enhancements.
                  </p>
                  <p>
                    To conduct analytics and research to improve user
                    experience.
                  </p>
                  <p>To maintain security and prevent fraud.</p>
                  <p>To comply with legal obligations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#9BDCE1] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text=h6 lg:text-h5 font-semibold">
                  How We Share Your Information
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    Robust Protection: We implement end-to-end encryption and
                    secure data storage to protect user information from
                    unauthorized access.
                  </p>
                  <p>
                    Privacy by Design: Our AI tools comply with global standards
                    such as GDPR, ensuring user data is handled with care and
                    consent.
                  </p>
                  <p>
                    Confidentiality Assurance: We never share proprietary data
                    without explicit permission and use anonymized datasets for
                    model training.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#4E7E71] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Data Security</h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    We use encryption, firewalls, and secure servers to protect
                    your personal information.
                  </p>
                  <p>
                    Access to your data is restricted to authorized personnel
                    only.
                  </p>
                  <p>
                    We regularly audit our systems for vulnerabilities and
                    security breaches.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#818CF8] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Your Rights</h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    Access and Correction: You can access and update your
                    personal information at any time.
                  </p>
                  <p>
                    Data Deletion: You may request that we delete your personal
                    data.
                  </p>
                  <p>Opt-Out: You can opt out of marketing communications.</p>
                  <p>
                    Consent Withdrawal: You may withdraw consent for data
                    processing where applicable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FA8016] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    We use cookies to enhance your experience and analyze site
                    traffic.
                  </p>
                  <p>
                    You can manage cookie preferences through your browser
                    settings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#DD55A6] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  International Data Transfers
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    If your information is transferred outside your country, we
                    ensure appropriate safeguards are in place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#7AD0D7] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Children’s Privacy
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    Our services are not intended for children under 13, and we
                    do not knowingly collect data from minors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#636FE9] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of significant changes by posting the updated
                    policy on our website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#20463C] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Contact Us</h2>
                <div className="space-y-4 lg:text-body-2 text-body-3 text-[#616B68] lg:text-black">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p>Email: hello@ampvc.co</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <p className="text-body-3 lg:text-body-1 py-6 px-5 lg:px-10">
          By using our website and services, you agree to the terms outlined in
          this Privacy Policy.
        </p>
      </motion.main>
    </div>
  );
}
