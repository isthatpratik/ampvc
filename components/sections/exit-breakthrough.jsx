import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { FeaturesSection2 } from "./features-section-02";

export default function ExitBreakthrough({ onBack }) {
  return (
    <motion.div
      className="pt-6 pb-14"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}

      {/* Title & Subtitle */}
      <div className="lg:px-10 pb-10 px-5 grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 transition-all duration-300 w-fit rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className="text-h4 lg:text-h3 text-balance lg:text-start text-center">
          Maximizing Returns on Your Investment.
        </h2>
        <h3 className="text-body-3 lg:text-body-1 text-balance lg:text-start text-center">
          Services are designed to help early-stage investors and stakeholders
          achieve liquidity and maximize value before a company's Series A or B
          funding rounds. Our comprehensive approach ensures that your exit
          strategy aligns with your financial goals and the company’s growth
          trajectory.
        </h3>
      </div>

      {/* Dynamic Content */}
      <div className="relative md:space-y-0 lg:grid space-y-4">
        {/* First Row */}
        <div className="grid lg:grid-cols-24 md:p-0 px-4 gap-0">
          <div className="hidden lg:block col-span-1 bg-[url('/images/services/pattern-left.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-22 flex md:flex-row flex-col">
            <div className="md:w-3/5 bg-transparent md:py-24 py-5 md:px-10 px-5 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
                Strategic <br />
                Exit Planning
              </h3>
              <p className="text-body-2 text-balance">
                We develop personalized exit strategies to maximize returns and
                align with your investment goals.
              </p>
            </div>
            <div className="md:w-2/5 border-t border-l border-b border-r md:border-l-0 md:border-b-0 md:border-r-0 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/exit-planning.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain 2xl:px-8 md:px-0 px-10 aspect-[4/3]"
              />
            </div>
          </div>
          <div className="hidden lg:block col-span-1 border-t border-l border-[#AFB6B4] bg-transparent" />
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-24 md:p-0 px-4 gap-0">
          <div className="hidden lg:block col-span-1 border-t border-[#AFB6B4] bg-transparent" />
          <div className="col-span-22 flex md:flex-row flex-col">
            <div className="md:w-2/5 md:order-1 order-2 border-t border-l border-r border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/network-access.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain 2xl:px-8 md:px-0 px-10 aspect-[4/3]"
              />
            </div>
            <div className="md:w-3/5 md:order-2 order-1 bg-transparent md:py-24 py-5 md:px-10 px-5 border-t border-l border-r md:border-x-0 border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
                Robust Network Access
              </h3>
              <p className="text-body-2 text-balance">
                Leverage our extensive network of strategic buyers, private
                equity firms, and investors for optimal exit opportunities.
              </p>
            </div>
          </div>
          <div className="hidden lg:block col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="grid lg:grid-cols-24 md:p-0 px-4 gap-0">
          <div className="hidden lg:block col-span-1 bg-[url('/images/services/pattern-left.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-22 flex md:flex-row flex-col">
            <div className="md:w-3/5 bg-transparent md:py-24 py-5 md:px-10 px-5 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
                Market <br />
                Insight
              </h3>
              <p className="text-body-2 text-balance">
                We provide in-depth market analysis to identify the best
                divestiture candidates and timing.
              </p>
            </div>
            <div className="md:w-2/5 border-t border-l border-r border-b md:border-x-0 md:border-b-0 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/market-insight.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain 2xl:px-8 md:px-0 px-10 aspect-[4/3]"
              />
            </div>
          </div>
          <div className="hidden lg:block col-span-1 border-t border-l border-[#AFB6B4] bg-transparent" />
        </div>

        {/* Fourth Row */}
        <div className="grid lg:grid-cols-24 md:p-0 px-4 gap-0">
          <div className="hidden lg:block col-span-1 border-t border-b border-[#AFB6B4] bg-transparent" />
          <div className="col-span-22 flex md:flex-row flex-col">
            <div className="md:w-2/5 md:order-1 order-2 border border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/transaction-management.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain 2xl:px-8 md:px-0 px-10 aspect-[4/3]"
              />
            </div>
            <div className="md:w-3/5 bg-transparent md:py-24 py-5 md:px-10 px-5 border-t border-b border-x md:border-x-0 border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
                Seamless <br />
                Transaction Management
              </h3>
              <p className="text-body-2 text-balance"> 
                We ensure smooth execution of transactions, handling
                negotiations, legal considerations, and closing processes
                efficiently.
              </p>
            </div>
          </div>
          <div className="hidden lg:block bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-b border-[#AFB6B4]" />
        </div>
      </div>
      <FeaturesSection2 />
    </motion.div>
  );
}
