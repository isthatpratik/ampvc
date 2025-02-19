import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function BreakthroughExit({ onBack }) {
  return (
    <motion.div
      className="py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="px-[40px] flex items-center text-gray-600 mb-6"
      >
        <ArrowLeft className="mr-2" /> Back to Services
      </button>

      {/* Title & Subtitle */}
      <h2 className="px-[40px] text-h2 text-balance mb-4">
      Maximizing Returns onYour Investment.
      </h2>
      <h3 className="px-[40px] text-body-1 mb-6">
      Services are designed to help early-stage investors and stakeholders achieve liquidity and maximize value before a company's Series A or B funding rounds. Our comprehensive approach ensures that your exit strategy aligns with your financial goals and the company’s growth trajectory.
      </h3>

      {/* Dynamic Content */}
      <div className="relative">
        {/* First Row */}
        <div className="w-full flex justify-between">
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4]" />
          <div className="grid grid-cols-6 ">
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Strategic
              </h3>
              <p className="text-body-2">
              We develop personalized exit strategies to maximize returns and align with your investment goals.
              </p>
            </div>
            <div className="col-span-2 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/exit-planning.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-10 border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10" />
        </div>

        {/* Second Row */}
        <div className="flex">
          <div className="w-10 border-t-2 border-[#AFB6B4] bg-primary/10" />

          <div className="grid grid-cols-6 ">
            <div className="col-span-2 border-t-2 border-l-2 border-r-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/network-access.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Robust 
              Network Access
              </h3>
              <p className="text-body-2 mx-auto max-w-md">
              Leverage our extensive network of strategic buyers, private equity firms, and investors for optimal exit opportunities.
              </p>
            </div>
          </div>
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="flex">
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4]" />
          <div className="grid grid-cols-6 ">
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Beyond Vanity Metrics
              </h3>
              <p className="text-body-2 mx-auto max-w-md">
              We don't believe in vanity metrics. We help you identify the right KPIs for your unique stage and industry, crafting a compelling narrative that resonates with investors.
              </p>
            </div>
            <div className="col-span-2 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/market-insight.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-10 border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10" />
        </div>

        {/* Fourth Row */}
        <div className="flex">
          <div className="w-10 border-t-2 border-b-2 border-[#AFB6B4] bg-primary/10" />

          <div className="grid grid-cols-6 ">
            <div className="col-span-2 border-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/transaction-management.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-b-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Amplified Vision
              </h3>
              <p className="text-body-2">
              We help you articulate your vision with laser focus, translate it into concrete actions, and showcase your achievements in a way that attracts the right capital.
              </p>
            </div>
          </div>
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-b-2 border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}
