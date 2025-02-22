import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitStrategy({ onBack }) {
  return (
    <div className="py-14 px-10 mx-auto">
      <div className="grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2 mb-4"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className="text-h2 text-balance">
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
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 px-12 text-[#181A1A] font-semibold">
              What <br /> We Do
            </h2>
          </div>
          <ServiceCard
            imageSrc="/images/solutions/toxic-asset-disposal.svg"
            title="Toxic Asset Disposal"
            description="Offload the dead weight, clean your books, and regain liquidity—fast."
          />
          <ServiceCard
            imageSrc="/images/solutions/legal-financial-maneuvers.svg"
            title="Legal & Financial Maneuvers"
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
      <section className="space-y-12 mb-12">
        <div className="grid grid-cols-3">
          <div className="mr-6 flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 px-12 text-[#181A1A] font-semibold">
              Why <br /> Choose Us
            </h2>
          </div>
          <div className="border-r-[0.5px] border-b-[0.5px] p-6 text-center text-balance space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Sharp Focus on Distressed Exits
            </h3>
            <p className="text-body-3 font-normal">
              Experience with turning losses into opportunities.
            </p>
          </div>
          <div className="border-b-[0.5px] border-l-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Powerful Network
            </h3>
            <p className="text-body-3 font-normal">
              Buyers, secondaries, and strategic connections—lined up for you.
            </p>
          </div>
          <div></div>
          <div className="border-t-[0.5px] border-r-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              End-to-End Solutions
            </h3>
            <p className="text-body-3 font-normal">
              From valuation to handshake, we've got it covered.
            </p>
          </div>
          <div className="border-l-[0.5px] border-t-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
              Discreet & Swift
            </h3>
            <p className="text-body-3 font-normal">
              Efficiency with full confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border border-[#AFB6B4] rounded-sm grid grid-cols-2 items-center justify-between gap-6">
        <div className="space-y-2 p-14">
          <h3 className="text-2xl font-bold">
            Ready to clear your books and reclaim your capital?
          </h3>
          <p className="text-gray-600">Let's make your exit count.</p>
        </div>
        <div className="flex border-l border-[#AFB6B4] items-center h-full p-0 justify-center bg-[url('/images/solutions/solutions-grid-bg.jpg')] bg-center bg-no-repeat bg-cover">
          <Button className="bg-black text-white hover:bg-black/90 px-6 py-6 text-lg rounded-full">
            Get Connected
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="border rounded-[4px] flex flex-col p-4 h-full items-center justify-start space-y-4">
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
