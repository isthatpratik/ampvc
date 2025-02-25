import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function PortfolioPulse({ onBack }) {
  return (
    <motion.div className="pt-6 pb-14 px-10 mx-auto"
    initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}>
      <div className="grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className="text-h3 text-balance">
          Board Representation & Portfolio Monitoring Services
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
          Your Eyes and Ears at the Boardroom Table – We represent your
          interests on the board, ensuring your portfolio companies stay on
          track, compliant, and aligned with your investment goals. Our hands-on
          approach keeps you informed and in control without the day-to-day
          hassle.
        </h3>
      </div>

      {/* What We Do Section */}
      <section className="flex">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 px-12 text-[#181A1A] font-semibold">
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
      <section className="space-y-12">
        <div className="grid grid-cols-3">
          <div className="mr-6 flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 px-12 text-[#181A1A] font-semibold">
              Why
              Partner With Us
            </h2>
          </div>
          <div className="border-r-[0.5px] border-b-[0.5px] p-6 text-center text-balance space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Expert Oversight
            </h3>
            <p className="text-body-3 font-normal">
              Experienced professionals representing your interests at every
              board meeting.
            </p>
          </div>
          <div className="border-b-[0.5px] border-l-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Proactive Monitoring
            </h3>
            <p className="text-body-3 font-normal">
              Early detection of risks and course correction strategies.
            </p>
          </div>
          <div></div>
          <div className="border-t-[0.5px] border-r-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Transparent Reporting
            </h3>
            <p className="text-body-3 font-normal">
              Clear, concise, and data-backed performance insights.
            </p>
          </div>
          <div className="border-l-[0.5px] border-t-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Compliance Assurance
            </h3>
            <p className="text-body-3 font-normal">
              Regular audits and adherence checks.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="border rounded-[4px] flex flex-col p-6 h-full items-center justify-start space-y-4">
      <div className="w-16 h-16 rounded-lg flex items-center justify-center">
        <Image src={imageSrc} alt={title} width={64} height={64} />
      </div>
      <h3 className="text-h6 max-w-[80%] text-[#181A1A] text-center text-balance font-semibold">
        {title}
      </h3>
      <p className="text-[#798682] text-center text-balance text-body-3">
        {description}
      </p>
    </div>
  );
}
