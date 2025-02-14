import Image from "next/image";
import AnimatedButtonTwo from "../ui/animated-button-2";

export default function AIMatchingBanner() {
  return (
    <div className="my-10 px-[72px]">
      <div className="relative flex items-center justify-between gap-6 rounded-sm p-8 text-white overflow-hidden bg-[#1D1D1D]">
        
        {/* Background Image */}
        <Image
          src="/images/background/ai-matching-bg.svg"
          alt="AI Matching Background"
          width={500}
          height={300}
          className="absolute top-0 right-0 object-contain z-0"
        />

        {/* Content */}
        <h2 className="text-h6 font-normal z-50">
          Find the right investors effortlessly
          <br />
          with AI-powered matching.
        </h2>
        
        <AnimatedButtonTwo>Launch Your Vision</AnimatedButtonTwo>
      </div>
    </div>
  );
}
