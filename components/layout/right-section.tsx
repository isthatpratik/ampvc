import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/animated-button";

export default function RightSection() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#181A1A] text-white lg:w-1/2 overflow-hidden">
      <div className="px-[72px] py-[56px]">
        <Image
          src="/images/logo/fynar-logo.png"
          alt="FynarAI Logo"
          width={162}
          height={48}
          className="mb-14"
        />
        <h2 className="mb-4 text-h2">The Future of Deal Flow</h2>
        <div className="text-h3">
          <span className="text-[#FFADDF]">Simple. </span>
          <span className="text-[#FDF16C]">Intuitive. </span>
          <span className="text-[#7AD0D7]">Efficient.</span>
        </div>
      </div>

      <div className="relative flex-1 overflow-visible pl-[72px] xl:-right-2 2xl:right-0">
        <Image
          src="/images/fynar-dashboard.png"
          alt="Platform Interface"
          width="1100"
          height="1200"
          quality={100}
          priority
          className="object-contain object-right -right-20 w-full h-fit overflow-hidden"
        />
      </div>

      <div className="py-14 px-[72px]">
        <p className="mb-6 text-body-1 text-[#AFB6B4]">
          Fynar AI redefines investor workflows—automating deal flow, tracking
          portfolios, and delivering AI-driven insights, so you can invest
          smarter and scale faster
        </p>

        <div className="flex gap-2">
          <AnimatedButton>Get Started</AnimatedButton>
          <Button className="group relative flex items-center justify-start overflow-hidden bg-transparent text-body-2 border-white/20 border rounded-full px-14 py-4 h-full group-hover:bg-transparent hover:border-white transition-all duration-500">
            <span className="group relative transition-transform duration-500 group-hover:translate-x-full">
              Login
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
