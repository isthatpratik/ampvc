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
        <div className="w-full flex justify-between">
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4] overflow-clip" />
          <div className="flex">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Partnerships <br />that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
            <div className="w-2/5 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
          </div>
          <div className="w-10 border-t-2 border-l-2 border-[#AFB6B4] bg-primary/10 overflow-clip" />
        </div>

        {/* Second Row */}
        <div className="flex">
          <div className="w-10 border-t-2 border-[#AFB6B4] bg-primary/10" />

          <div className="flex">
            <div className="w-2/5 border-t-2 border-l-2 border-r-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/honest-guidance.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]" 
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Honest <br /> Guidance
              </h3>
              <p className="text-body-2 mx-auto text-balance">
              We're transparent about our capabilities. We only take on projects when we believe we can add significant value and propel your growth beyond expectations.
              </p>
            </div>
          </div>
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-l-2 border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="flex">
          <div className="w-10 bg-[url('/images/services/pattern.svg') bg-cover bg-center bg-no-repeat border-t-2 border-[#AFB6B4]" />
          <div className="flex ">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t-2 border-l-2 border-r-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Beyond <br /> Vanity Metrics
              </h3>
              <p className="text-body-2 mx-auto text-balance">
              We don't believe in vanity metrics. We help you identify the right KPIs for your unique stage and industry, crafting a compelling narrative that resonates with investors.
              </p>
            </div>
            <div className="w-2/5 border-t-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/vanity-metrics.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
          </div>
          <div className="w-10 border-t-2 border-l-2 border-[#AFB6B4] bg-transparent" />
        </div>

        {/* Fourth Row */}
        <div className="flex">
          <div className="w-10 border-t-2 border-b-2 border-[#AFB6B4] bg-transparent" />

          <div className="flex ">
            <div className="w-2/5 border-2 border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/amplified-vision.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t-2 border-b-2 border-[#AFB6B4]">
              <h3 className="text-h2 font-semibold mb-2">
                Amplified <br /> Vision
              </h3>
              <p className="text-body-2 text-balance">
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
