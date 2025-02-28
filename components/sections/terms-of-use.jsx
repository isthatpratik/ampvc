import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function TermsOfUse({ onBack }) {
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
        <div className="mb-10 px-5 lg:px-10 pt-6 flex flex-col space-y-4 lg:space-y-8 text-center lg:text-left">
          <h1 className="font-semibold text-h4 6lg:text-h3 text-center lg:text-start">Terms of Use</h1>
          <div className="flex flex-col space-y-4 text-center lg:text-start">
            <p className="text-body-1">Effective Date: 20/02/25</p>

            <p className="text-body-1">
              Welcome to Ampersand. By accessing or using our website and
              services, you agree to comply with these Terms of Use. Please read
              them carefully.
            </p>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-5">
          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FFADDF] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Acceptance of Terms
                </h2>
                <p className="lg:text-body-1 text-body-3">
                  By using our services, you agree to be bound by these Terms of
                  Use and our Privacy Policy. If you do not agree, you must
                  discontinue use immediately.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FCEC3B] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Use of Services</h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    Eligibility: You must be at least 18 years old to use our
                    services.
                  </p>
                  <p>
                    Permitted Use: You may use our services only for lawful
                    purposes and in accordance with these Terms.
                  </p>
                  <p>
                    Account Security: You are responsible for maintaining the
                    confidentiality of your account credentials and for all
                    activities under your account.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#9BDCE1] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    Eligibility: You must be at least 18 years old to use our
                    services.
                  </p>
                  <p>
                    Permitted Use: You may use our services only for lawful
                    purposes and in accordance with these Terms.
                  </p>
                  <p>
                    Account Security: You are responsible for maintaining the
                    confidentiality of your account credentials and for all
                    activities under your account.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#4E7E71] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  AI Tools and CRM Usage
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    Our AI matching tool and CRM are provided for business
                    purposes only.
                  </p>
                  <p>
                    You agree not to misuse or attempt to reverse-engineer our
                    AI models or software.
                  </p>
                  <p>
                    We reserve the right to modify or discontinue these tools
                    without notice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#818CF8] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Prohibited Conduct
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>You agree not to:</p>
                  <p>
                    Use the services for any illegal or unauthorized purpose.
                  </p>
                  <p>Violate any applicable laws or regulations.</p>
                  <p>Interfere with or disrupt the security of the services.</p>
                  <p>
                    Attempt to gain unauthorized access to any portion of our
                    systems.
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
                  Disclaimers and Limitation of Liability
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    No Warranty: Our services are provided "as is" without
                    warranties of any kind, express or implied.
                  </p>
                  <p>
                    No Guarantee: We do not guarantee outcomes from the use of
                    our AI matching tool or CRM.
                  </p>
                  <p>
                    Limitation of Liability: Ampersand shall not be liable for
                    any indirect, incidental, or consequential damages arising
                    from your use of our services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#DD55A6] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Indemnification</h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    You agree to indemnify and hold Ampersand, its affiliates,
                    and employees harmless from any claims, losses, or damages
                    resulting from your breach of these Terms or misuse of our
                    services.
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
                  Modifications to Terms
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    We reserve the right to update or modify these Terms of Use
                    at any time. Changes will be effective upon posting on our
                    website. Continued use of our services constitutes
                    acceptance of the revised terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#636FE9] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">Termination</h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                    We may suspend or terminate your access to our services if
                    you violate these Terms.
                  </p>
                  <p>You may stop using our services at any time.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#20463C] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Governing Law and Dispute Resolution
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                  These terms will be governed by and construed in accordance with the laws of India, and its jurisdiction lies in Pune, Maharashtra.
                  </p>
                  <p>
                  Any dispute arising out from these terms shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, and both the parties will nominate one neutral arbitrator after the consent obtained by both the parties on the choice of the arbitrator. Arbitration Body located in Pune, Maharashtra.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#CFC339] rounded-full" />
              <div className="grid ml-5 lg:ml-10">
                <h2 className="mb-2 text-h6 lg:text-h5 font-semibold">
                  Contact Information
                </h2>
                <div className="space-y-4 lg:text-body-1 text-body-3">
                  <p>
                  If you have questions about these Terms of Use, please contact us at:
                  </p>
                  <p>Email: hello@ampvc.co</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <p className="text-body-3 lg:text-body-1 py-6 px-5 lg:px-10">
          By using Ampersand's website and services, you acknowledge that you
          have read, understood, and agreed to these Terms of Use.
        </p>
      </motion.main>
    </div>
  );
}
