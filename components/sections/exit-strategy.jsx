import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import { useState } from "react";

export default function ExitStrategy({ onBack }) {
  const [openContactForm, setOpenContactForm] = useState(false);

  return (
    <motion.div className="pb-14 pt-6 px-5 lg:px-10 mx-auto"
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
        <h2 className="text-h3 lg:max-w-lg">
          Exit Strategy Services for VCs and Investors
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
          Turn Deadweight into Opportunity – We help you break free from dormant
          or toxic portfolio assets and reclaim your capital with strategic,
          results-driven exits. Whether it’s a silent startup or a sinking
          venture, we craft smart exit solutions that transform setbacks into
          fresh opportunities.
        </h3>
      </div>

      {/* What We Do Section */}
      <section className="flex">
        <div className="grid grid-cols-3 gap-4 lg:gap-6">
          <div className="flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 xl:px-10 lg:px-6 text-[#181A1A] font-semibold">
              What <br /> We Do
            </h2>
          </div>
          <ServiceCard
            imageSrc="/images/solutions/toxic-asset-disposal.svg"
            title="Underperforming Asset Disposal"
            description="Offload the dead weight, clean your books, and regain liquidity—fast."
          />
          <ServiceCard
            imageSrc="/images/solutions/legal-financial-maneuvers.svg"
            title="Legal & Financial Manoeuvres"
            description="Cutting through the red tape with expert deal structuring and seamless transactions."
          />
          <ServiceCard
            imageSrc="/images/solutions/tailored-exit-roadmaps.svg"
            title="Tailored Exit Roadmaps"
            description="Whether through secondaries, acquisitions, or asset sales, we design the sharpest route to your exit."
          />
          <ServiceCard
            imageSrc="/images/solutions/buyer-hunting.svg"
            title="Buyer Hunting & Deal Matching"
            description="Tapping into our global network to connect you with the right buyers, partners, or acquirers."
          />
          <ServiceCard
            imageSrc="/images/solutions/portfolio-autopsy.svg"
            title="Portfolio Autopsy & Asset Valuation"
            description="We dissect your underperforming investments to uncover potential exit paths and salvage value."
          />
        </div>
      </section>

      <div className="my-12 w-full h-[1px] bg-[#B9BFBE]"></div>

      {/* Why Choose Us Section */}
      <section className="space-y-12 mb-6 lg:mb-12">
        <div className="grid lg:grid-cols-3">
          <div className="lg:mr-6 flex items-center justify-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 text-center xl:px-10 lg:px-6 text-[#181A1A] font-semibold">
              Why <br /> Choose Us
            </h2>
          </div>
          <div className="lg:border-r-[0.5px] lg:border-b-[0.5px] p-8 text-center text-balance space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
            Distressed Exits
            </h3>
            <p className="text-body-3 font-normal text-balance">
              Experience with turning losses into opportunities.
            </p>
          </div>
          <div className="lg:border-b-[0.5px] lg:border-l-[0.5px] text-balance text-center p-8 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Powerful Network
            </h3>
            <p className="text-body-3 font-normal text-balance">
              Buyers, secondaries, and strategic connections—lined up for you.
            </p>
          </div>
          <div className="hidden lg:block"></div>
          <div className="lg:border-t-[0.5px] lg:border-r-[0.5px] text-balance text-center p-8 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              End-to-End Solutions
            </h3>
            <p className="text-body-3 font-norma text-balance">
              From valuation to handshake, we've got it covered.
            </p>
          </div>
          <div className="lg:border-l-[0.5px] lg:border-t-[0.5px] text-balance text-center p-8 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Discreet & Swift
            </h3>
            <p className="text-body-3 mx-auto max-w-[70%] font-normal text-balance">
              Efficiency with full confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border border-[#AFB6B4] grid grid-cols-2 items-center justify-between gap-6">
        <div className="space-y-4 p-14">
          <h3 className="text-h6 font-semibold text-[#181A1A]">
            Ready to clear your books and reclaim your capital?
          </h3>
          <p className="text-[#181A1A]">Let's make your exit count.</p>
        </div>
        <div className="flex border-l border-[#AFB6B4] items-center h-full p-0 justify-center bg-[url('/images/solutions/solutions-grid-bg.jpg')] bg-top bg-no-repeat bg-cover">
          <Button className="bg-black text-white hover:bg-black/90 px-6 py-6 text-lg rounded-full">
            Get Connected
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </motion.div>
  );
}

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="border border-[#AFB6B4] rounded-[4px] flex flex-col px-4 py-8 h-full items-center justify-start space-y-4">
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
