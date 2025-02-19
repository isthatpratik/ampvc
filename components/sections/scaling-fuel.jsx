import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
      <button
        onClick={onBack}
        className="px-[40px] flex items-center text-gray-600 mb-6"
      >
        <ArrowLeft className="mr-2" /> Back to Services
      </button>

      {/* Title & Subtitle */}
      <h2 className="px-[40px] text-h2 text-balance mb-4">
      From Seed toSeries A and Beyond
      </h2>
      <h3 className="px-[40px] text-body-1 mb-6">
      We believe in the transformative power of early-stage ventures, and we're committed to fueling your journey from Day One with capital, strategic guidance, and unparalleled support.
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
                width={300}
                height={300}
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
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Robust 
              Network Access
              </h3>
              <p className="text-body-2">
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
              Bridging the Gap, Seamlessly
              </h3>
              <p className="text-body-2">
              Navigate temporary funding needs with tailored bridge solutions designed to seamlessly connect you to your next major funding round.
              </p>
            </div>
            <div className="col-span-2 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/bridging-the-gap.svg"}
                alt="partnership icon"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-10 border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10" />
        </div>

        {/* Fourth Row */}
        <div className="flex w-full">
          <div className="w-10 border-t-2 border-b-2 border-[#AFB6B4] bg-primary/10" />

          <div className="grid grid-cols-6 ">
            <div className="col-span-2 border-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/not-profit.svg"}
                alt="partnership icon"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-b-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
              Partnership, Not Profit
              </h3>
              <p className="text-body-2">
              We believe in shared success. We have no retainers, and investors trust us for bringing high-impact startups that meet our stringent 360° Investment Criteria.
              </p>
            </div>
          </div>
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-b-2 border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}
