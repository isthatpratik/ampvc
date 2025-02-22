import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiquidityMove({ onBack }) {
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
        Secondary Buyout Services for Investors
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
        Quick Liquidity. Clean Cap Tables. Smart Exits. – We help investors unlock value from their portfolio companies through secondary buyouts, providing fast liquidity options and streamlined ownership structures. Whether you’re looking to exit or restructure, we make the process efficient and rewarding.
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
            imageSrc="/images/solutions/secondary-buyout-solutions.svg"
            title="Secondary Buyout Solutions"
            description="Facilitating the sale of your equity stake to new investors or existing shareholders."
          />
          <ServiceCard
            imageSrc="/images/solutions/captable-optimization.svg"
            title="Cap Table Optimization"
            description=" Helping you clean up ownership structures for smoother future fundraising and operations."
          />
          <ServiceCard
            imageSrc="/images/solutions/investor-buyer-matching.svg"
            title="Investor & Buyer Matching"
            description="Leveraging our network to connect you with credible buyers for quick exits."
          />
          <ServiceCard
            imageSrc="/images/solutions/deal-structuring.svg"
            title="Deal Structuring & Negotiation"
            description="Handling legal, financial, and compliance aspects for seamless transactions."
          />
          <ServiceCard
            imageSrc="/images/solutions/liquidity-planning.svg"
            title="Liquidity Planning"
            description=" Designing strategies to release capital while maximizing returns."
          />
        </div>
      </section>

      <div className="my-12 w-full h-[1px] bg-[#B9BFBE]"></div>

      {/* Why Choose Us Section */}
      <section className="space-y-12">
        <div className="grid grid-cols-3">
          <div className="mr-6 flex items-center bg-[url('/images/background/solutions-grid.png')] bg-center bg-cover bg-no-repeat">
            <h2 className="text-h4 px-12 text-[#181A1A] font-semibold text-balance">
            Why 
            Choose Us
            </h2>
          </div>
          <div className="border-r-[0.5px] border-b-[0.5px] p-6 text-center text-balance space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
            Swift Liquidity
            </h3>
            <p className="text-body-3 font-normal">
            Fast-track exits without disrupting operations.
            </p>
          </div>
          <div className="border-b-[0.5px] border-l-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
            Extensive Buyer Network
            </h3>
            <p className="text-body-3 font-normal">
            Connect with qualified investors and secondary market players.
            </p>
          </div>
          <div></div>
          <div className="border-t-[0.5px] border-r-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
            Cap Table Expertise
            </h3>
            <p className="text-body-3 font-normal">
            Reduce complexity and prepare for future growth.
            </p>
          </div>
          <div className="border-l-[0.5px] border-t-[0.5px] text-balance text-center p-6 space-y-4">
            <h3 className="text-h6 font-semibold text-[#181A1A]">
            Confidential & Smooth Process
            </h3>
            <p className="text-body-3 font-normal">
            Secure, discreet, and efficient transactions.
            </p>
          </div>
        </div>
      </section>
    </div>
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
