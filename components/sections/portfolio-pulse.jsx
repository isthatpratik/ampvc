import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import ContactUs from "../forms/contact-us";

export default function PortfolioPulse({ onBack }) {
  const [openContactForm, setOpenContactForm] = useState(false);

  return (
    <>
      <motion.div
        className="pt-6 pb-14 px-10 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-4">
          <Button
            onClick={onBack}
            className="shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
          >
            <ArrowLeft className="" /> Back
          </Button>
          <h2 className="text-h5 lg:text-h3 text-center lg:text-start lg:max-w-lg">
            Board Representation & Portfolio Monitoring Services
          </h2>
          <h3 className="text-body-3 lg:text-body-1 text-center lg:text-start pb-12 text-balance">
            Your Eyes and Ears at the Boardroom Table – We represent your
            interests on the board, ensuring your portfolio companies stay on
            track, compliant, and aligned with your investment goals. Our
            hands-on approach keeps you informed and in control without the
            day-to-day hassle.
          </h3>
        </div>

        {/* What We Do Section */}
        <section className="flex">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex items-center justify-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
              <h2 className="text-h4 xl:px-10 lg:px-6 text-[#181A1A] text-center lg:text-start font-semibold">
                Our Services <br /> Include
              </h2>
            </div>
            <ServiceCard
              imageSrc="/images/solutions/board-representation.svg"
              title="Board Representation"
              description="Acting as your voice in board meetings, advocating for your interests, and driving value creation."
            />
            <ServiceCard
              imageSrc="/images/solutions/portfolio-performance-reviews.svg"
              title="Portfolio Performance Reviews"
              description="Regular assessments to ensure startups meet milestones and business goals."
            />
            <ServiceCard
              imageSrc="/images/solutions/compliance-monitoring.svg"
              title="Compliance Monitoring"
              description="Overseeing regulatory and contractual compliance to safeguard your investment."
            />
            <ServiceCard
              imageSrc="/images/solutions/startup-health-reports.svg"
              title="Startup Health Reports"
              description="Delivering detailed, data-driven reports on financial performance, market progress, and risks."
            />
            <ServiceCard
              imageSrc="/images/solutions/risk-management.svg"
              title="Risk Management & Early Alerts"
              description="Identifying potential issues before they become problems and suggesting corrective actions."
            />
          </div>
        </section>

        <div className="my-12 w-full h-[1px] bg-[#B9BFBE]"></div>

        {/* Why Choose Us Section */}
        <section className="space-y-6 lg:space-y-12 mb-6 lg:mb-12">
          <div className="grid lg:grid-cols-3">
            <div className="lg:mr-6 flex items-center justify-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
              <h2 className="text-h4 text-center xl:px-10 lg:px-6 text-[#181A1A] font-semibold">
                Why Partner With Us
              </h2>
            </div>
            <div className="lg:border-r-[0.5px] lg:border-b-[0.5px] border-b p-4 lg:p-8 text-center text-balance space-y-4">
              <h3 className="text-h6 font-semibold text-[#181A1A]">
                Expert Oversight
              </h3>
              <p className="text-body-3 font-normal text-balance">
                Experienced professionals representing your interests at every
                board meeting.
              </p>
            </div>
            <div className="lg:border-b-[0.5px] border-b p-4 lg:p-8 text-center text-balance space-y-4">
              <h3 className="text-h6 font-semibold text-[#181A1A]">
                Proactive Monitoring
              </h3>
              <p className="text-body-3 font-normal text-balance">
                Early detection of risks and course correction strategies.
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div className="lg:border-r-[0.5px] lg:border-b-0 border-b p-4 lg:p-8 text-center text-balance space-y-4">
              <h3 className="text-h6 font-semibold text-[#181A1A]">
                Transparent Reporting
              </h3>
              <p className="text-body-3 font-normal text-balance">
                Clear, concise, and data-backed performance insights.
              </p>
            </div>
            <div className="border-b lg:border-b-0 p-4 lg:p-8 text-center text-balance space-y-4">
              <h3 className="text-h6 font-semibold text-[#181A1A]">
                Compliance Certainty
              </h3>
              <p className="text-body-3 font-normal mx-auto max-w-[80%]">
                Regular audits and adherence checks.
              </p>
            </div>
          </div>
        </section>

        <section className="border border-[#AFB6B4] grid lg:grid-cols-2 items-center justify-between gap-6">
          <div className="space-y-4 p-6 lg:p-14">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Ready to clear your books and reclaim your capital?
            </h3>
            <p className="text-[#181A1A]">Let's make your exit count.</p>
          </div>
          <div className="flex border-l border-[#AFB6B4] border-t lg:border-t-0 items-center h-full py-12 lg:p-0 justify-center bg-[url('/images/solutions/solutions-grid-bg.jpg')] bg-top bg-no-repeat bg-cover">
            <Button
              onClick={() => {
                setOpenContactForm(true);
                setOpen(false);
              }}
              className="bg-black text-white hover:bg-black/90 px-6 py-6 text-lg rounded-full"
            >
              Get Connected
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </motion.div>
      {openContactForm && (
        <ContactUs open={openContactForm} setOpen={setOpenContactForm} />
      )}
    </>
  );
}

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="border border-[#AFB6B4] rounded-[4px] flex flex-col p-4 lg:px-4 lg:py-8 h-full items-center justify-start space-y-4">
      <div className="w-16 h-16 rounded-lg flex items-center justify-center">
        <Image src={imageSrc} alt={title} width={64} height={64} />
      </div>
      <h3 className="mx-auto text-h6 max-w-[70%] text-[#181A1A] text-center text-balance font-semibold">
        {title}
      </h3>
      <p className="text-[#798682] max-w-[80%] text-center text-balance text-body-3">
        {description}
      </p>
    </div>
  );
}
