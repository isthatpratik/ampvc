import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function VisionCrafting({ onBack }) {
  return (
    <motion.div
      className="pt-6 pb-14"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <div className="px-[40px] grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <h2 className=" text-h3 text-balance">
        Amplify your growth with serial entrepreneurs by your side.
        </h2>
        <h3 className="text-body-1 pb-12 text-balance">
        We've successfully scaled businesses like yours, understanding your constraints. Let's collaborate on tailored strategies to drive sustainable growth, leveraging our expertise and hands-on approach for mutual success.
        </h3>
      </div>

      {/* Dynamic Content */}
      <div className="relative">
        {/* First Row */}
        <div className="grid grid-cols-24 gap-0">
          <div className="col-span-1 bg-[url('/images/services/pattern-left.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-22 flex">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
                Partnerships <br />that Matter
              </h3>
              <p className="text-body-2">
                We identify strategic collaborations and partnerships that bring
                synergy, optimize resources, and accelerate your journey.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/partnership.svg"}
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
        <div className="grid grid-cols-24 gap-0">
          <div className="col-span-1 border-t border-[#AFB6B4] bg-transparent" />
          <div className="col-span-22 flex">
            <div className="w-2/5 border-t border-l border-r border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/honest-guidance.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
              Honest <br />Guidance
              </h3>
              <p className="text-body-2">
              We're transparent about our capabilities. We only take on projects when we believe we can add significant value and propel your growth beyond expectations.
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-[#AFB6B4]" />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-24 gap-0">
          <div className="col-span-1 bg-[url('/images/services/pattern-left.svg')] bg-cover bg-center bg-no-repeat border-t border-[#AFB6B4]" />
          <div className="col-span-22 flex">
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-l border-r border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
              Beyond <br />Vanity Metrics
              </h3>
              <p className="text-body-2">
              We don't believe in vanity metrics. We help you identify the right KPIs for your unique stage and industry, crafting a compelling narrative that resonates with investors.
              </p>
            </div>
            <div className="w-2/5 border-t border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/vanity-metrics.svg"}
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
        <div className="grid grid-cols-24 gap-0">
          <div className="col-span-1 border-t border-b border-[#AFB6B4] bg-transparent" />
          <div className="col-span-22 flex">
            <div className="w-2/5 border border-[#AFB6B4] bg-[url('/images/services/service-icon-bg.jpg')] bg-no-repeat bg-cover bg-center p-4 flex items-center justify-center">
              <Image
                src={"/images/services/amplified-vision.svg"}
                alt="partnership icon"
                width={400}
                height={400}
                className="w-full h-auto object-contain aspect-[4/3]"
              />
            </div>
            <div className="w-3/5 bg-transparent py-24 px-10 border-t border-b border-[#AFB6B4]">
              <h3 className="text-h4 font-semibold mb-2">
              Amplified <br /> Vision
              </h3>
              <p className="text-body-2">
              We help you articulate your vision with laser focus, translate it into concrete actions, and showcase your achievements in a way that attracts the right capital.
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-[url('/images/services/pattern.svg')] bg-cover bg-center bg-no-repeat border-t border-l border-b border-[#AFB6B4]" />
        </div>
      </div>
    </motion.div>
  );
}