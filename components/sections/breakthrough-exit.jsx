import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function BreakthroughExit({ onBack }) {
  return (
    <motion.div
      className="py-14"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}

      {/* Title & Subtitle */}
      <div className="px-[40px] grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 transition-all duration-300 w-fit rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2 mb-4"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className=" text-h2 text-balance">
          Maximizing Returns on Your Investment.
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
          Services are designed to help early-stage investors and stakeholders
          achieve liquidity and maximize value before a company's Series A or B
          funding rounds. Our comprehensive approach ensures that your exit
          strategy aligns with your financial goals and the company’s growth
          trajectory.
        </h3>
      </div>

      {/* Dynamic Content */}
      <div className="relative">
        {/* First Row */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-10 flex">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Strategic <br />
                Exit Planning
              </h3>
              <p className="text-body-2 text-balance">
                We develop personalized exit strategies to maximize returns and
                align with your investment goals.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/exit-planning.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
          </div>
          <div className="col-span-1 border-t border-l border-[#AFB6B4] bg-transparent" />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-1 border-t border-[#AFB6B4] bg-transparent" />
          <div className="col-span-10 flex">
            <div className="w-2/5 border-t border-l border-r border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/network-access.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Robust Network Access
              </h3>
              <p className="text-body-2 text-balance">
                Leverage our extensive network of strategic buyers, private
                equity firms, and investors for optimal exit opportunities.
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-10 flex">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Market <br />
                Insight
              </h3>
              <p className="text-body-2 text-balance">
                We provide in-depth market analysis to identify the best
                divestiture candidates and timing.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/market-insight.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
          </div>
          <div className="col-span-1 border-t border-l border-[#AFB6B4] bg-transparent" />
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-1 border-t border-b border-[#AFB6B4] bg-transparent" />
          <div className="col-span-10 flex">
            <div className="w-2/5 border border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/transaction-management.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-b border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
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
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-b border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}
