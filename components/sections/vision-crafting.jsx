import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function VisionCrafting({ onBack }) {
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
        Amplify your growth with serial entrepreneurs by your side.
      </h2>
      <h3 className="px-[40px] text-body-1 mb-6">
        We've successfully scaled businesses like yours, understanding your
        constraints. Let's collaborate on tailored strategies to drive
        sustainable growth, leveraging our expertise and hands-on approach for
        mutual success.
      </h3>

      {/* Dynamic Content */}
      <div className="relative">
        {/* First Row */}
        <div className="flex">
          <div className="w-[40px] bg-[url('/images/services/pattern.png') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4]" />
          <div className="grid grid-cols-6 ">
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Partnerships that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
            <div className="col-span-2 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-[40px] border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10" />
        </div>

        {/* Second Row */}
        <div className="flex">
          <div className="w-[40px] border-t-2 border-[#AFB6B4] bg-primary/10" />

          <div className="grid grid-cols-6 ">
            <div className="col-span-2 border-t-2 border-l-2 border-r-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Partnerships that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
          </div>
          <div className="w-[40px] bg-[url('/images/services/pattern.png') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="flex">
          <div className="w-[40px] bg-[url('/images/services/pattern.png') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4]" />
          <div className="grid grid-cols-6 ">
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Partnerships that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
            <div className="col-span-2 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-[40px] border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10" />
        </div>

        {/* Fourth Row */}
        <div className="flex">
          <div className="w-[40px] border-t-2 border-b-2 border-[#AFB6B4] bg-primary/10" />

          <div className="grid grid-cols-6 ">
            <div className="col-span-2 border-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="col-span-4 bg-transparent py-24 px-10 border-t-2 border-b-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Partnerships that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
          </div>
          <div className="w-[40px] bg-[url('/images/services/pattern.png') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-b-2 border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}
