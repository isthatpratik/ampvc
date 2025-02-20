import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ScalingFuel({ onBack }) {
  return (
    <motion.div
      className="py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <div className="px-[40px] grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none w-fit hover:bg-black/5 transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2 mb-4"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className=" text-h2 text-balance">
        From Seed to Series A and Beyond
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
        We believe in the transformative power of early-stage ventures, and we're committed to fueling your journey from Day One with capital, strategic guidance, and unparalleled support.
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
              Collaboration
              </h3>
              <p className="text-body-2">
              While we handle the heavy lifting, remember - this is your dream. We believe in active founder involvement to ensure alignment and success.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/collaboration.svg"}
                alt="strategic guidance icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
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
                src={"/images/services/focus-growth.svg"}
                alt="network access icon"
                width={400}
                height={400}
                className="h-full object-contain relative left-0 bottom-0"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Focus on <br />Growth
              </h3>
              <p className="text-body-2">
                Leverage our extensive network of strategic buyers, private equity firms, and investors for optimal exit opportunities.
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
              Bridging the <br />Gap, Seamlessly
              </h3>
              <p className="text-body-2">
              Navigate temporary funding needs with tailored bridge solutions designed to seamlessly connect you to your next major funding round.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/bridging-the-gap.svg"}
                alt="market insight icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
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
                src={"/images/services/not-profit.svg"}
                alt="transaction management icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain "
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-b border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Partnership,<br /> Not Profit
              </h3>
              <p className="text-body-2">
              We believe in shared success. We have no retainers, and investors trust us for bringing high-impact startups that meet our stringent 360° Investment Criteria.
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-b border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}