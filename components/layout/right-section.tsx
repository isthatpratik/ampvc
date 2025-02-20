"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/animated-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RightSection() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col bg-[#181A1A] text-white overflow-hidden">
      {/* Logo Animation */}
      <motion.div
        className="px-[40px] pt-14"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-h4">
              Meet Fynar{" "}
              <span className="bg-gradient-to-r from-[#99DBE0] from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
                AI
              </span>
            </h2>
            <div className="w-auto h-fit">

            <Image
              src="/images/logo/fynar-logo.svg"
              alt="FynarAI Logo"
              width={162}
              height={48}
              className="object-contain w-auto h-10"
              priority
              quality={75}
            />
            </div>
          </div>
          <h2 className="text-h2">
            <span className="bg-gradient-to-r from-[#99DBE0] text-balance from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
              The Simple, Intuitive CRM That Gets Things Done
            </span>
          </h2>
        </div>
        <div>
          <div className="w-full h-[1px] bg-white/20 mt-5"></div>
        </div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="relative flex-1 overflow-visible h-0 min-h-0 flex justify-start items-start"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1.2,
          transition: {
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <Image
          src="/images/fynar-dashboard-default.png"
          alt="Platform Interface"
          fill
          quality={100}
          priority
          className="w-auto h-auto max-h-[50vh] object-contain px-[40px] py-[54px]"
        />
      </motion.div>

      <motion.div
        className="h-fit grid grid-cols-2 px-[40px] gap-2 pb-6"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1.4,
          transition: {
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <div className="grid border h-full border-[#E4E8E8]/10 p-5 rounded-sm text-body-3">
          <h3>For Investors</h3>
          <p className="text-[#807E7E] text-caption">
            Streamline deal flow with AI-driven insights, quickly evaluating
            investments and making smarter decisions, all in one seamless
            platform.
          </p>
        </div>
        <div>
          <div className="grid border h-full border-[#E4E8E8]/10 p-5 rounded-sm text-body-3">
            <h3>For Startups</h3>
            <p className="text-[#807E7E] text-caption">
              Manage sales with ease—track deals, generate reports, and monitor
              progress without the unnecessary complexity of traditional CRMs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Description and Buttons Animation */}
      <motion.div
        className="pb-14 px-[40px]"
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1.6,
          transition: {
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <p className="mb-6 text-body-1 text-[#AFB6B4]">
          Fynar AI is built for those who want simplicity, efficiency, and
          results. Less hassle, more success.
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
