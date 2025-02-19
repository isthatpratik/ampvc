"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/animated-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RightSection() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#181A1A] text-white lg:w-full overflow-hidden">
      {/* Logo Animation */}
      <motion.div
        className="px-[40px] pt-[116px]"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <div>
          <h2 className="mb-4 text-h2">The Future of Deal Flow</h2>
          <div className="text-h3">
            <span className="text-[#FFADDF]">Simple. </span>
            <span className="text-[#FDF16C]">Intuitive. </span>
            <span className="text-[#7AD0D7]">Efficient.</span>
          </div>
          <div className="w-full h-[1px] bg-white/20 my-5"></div>
        </div>
        <Image
          src="/images/logo/fynar-logo.png"
          alt="FynarAI Logo"
          width={162}
          height={48}
          className="object-contain"
          priority
          quality={75}
        />
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="relative  overflow-visible px-[40px] py-[54px] h-fit"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <Image
          src="/images/fynar-dashboard-default.png"
          alt="Platform Interface"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="w-fit h-auto object-contain object-center overflow-hidden"
        />
      </motion.div>

      {/* Description and Buttons Animation */}
      <motion.div
        className="pb-14 px-[40px]"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <p className="mb-6 text-body-1 text-[#AFB6B4]">
          Fynar AI redefines investor workflows—automating deal flow, tracking
          portfolios, and delivering AI-driven insights, so you can invest
          smarter and scale faster
        </p>

        <div className="flex gap-2">
          <AnimatedButton>Get Started</AnimatedButton>

          <Button className="group relative flex items-center overflow-hidden bg-transparent text-body-2 border-white/20 border rounded-full px-14 py-4 h-full hover:bg-transparent hover:border-white transition-all duration-500">
            {/* Login text moves slightly left */}
            <span className="relative transition-transform duration-300 group-hover:-translate-x-2 z-999 text-body-2">
              Login
            </span>

            {/* Arrow slides in from right */}
            <span className="absolute opacity-0 transition-all duration-300 right-1/4 transform  group-hover:opacity-100">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
