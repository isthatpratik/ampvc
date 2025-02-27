import Image from "next/image";
import AnimatedButtonTwo from "../ui/animated-button-2";

interface AIMatchingBannerProps {
  setShowFinyxChat: (value: boolean) => void;
}

export default function AIMatchingBanner({ setShowFinyxChat }: AIMatchingBannerProps) {
  return (
    <div className="mt-10 px-[40px] lg:block hidden md:hidden xl:block 2xl:hidden">
      <div className="relative flex items-center justify-between xl:gap-6 gap-4 rounded-sm xl:p-8 p-6 text-white overflow-hidden bg-[#1D1D1D]">
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
          Find the right investors effortlessly with{" "}
          <span className="bg-gradient-to-r from-[#99DBE0] from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
            AI-powered matching.
          </span>
        </h2>

        <AnimatedButtonTwo onClick={() => setShowFinyxChat(true)}>Discover Matches</AnimatedButtonTwo>
      </div>
    </div>
  );
}
