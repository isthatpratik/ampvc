"use client";

import Image from "next/image";
import { useState } from "react";

import AnimatedButton from "../ui/animated-button";
import { motion } from "framer-motion";
import Preregister from "../forms/pre-register";

export default function RightSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 flex h-screen justify-between w-full flex-col bg-[#181A1A] text-white overflow-hidden">
      {/* Logo Animation */}
      <motion.div
        className="px-10 pt-8 2xl:pt-14"
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
          <h2 className="text-h4">
            <span className="bg-gradient-to-r from-[#99DBE0] text-balance from-10% via-[#FFAFDF] via-55% to-[#FCEC3B] to-98% bg-clip-text text-transparent">
              The Simple, Intuitive CRM That Gets Things Done
            </span>
          </h2>
        </div>
        <div></div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="relative flex-1 overflow-visible h-0 min-h-0 flex justify-start items-start aspect-[4/3]"
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
          className="w-full hidden 2xl:block h-full object-cover object-left py-10"
        />
        <Image
          src="/images/fynar-dashboard-default.png"
          alt="Platform Interface"
          fill
          quality={100}
          priority
          className="w-full h-full block 2xl:hidden object-contain py-10"
        />
      </motion.div>

      <motion.div
        className="h-fit hidden 2xl:grid grid-cols-2 px-[40px] gap-2 pb-6"
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
        <div className="flex flex-col gap-2 border h-full border-[#E4E8E8]/10 p-5  rounded-sm text-body-3">
          <h3 className="text-body-3 font-semibold">For Investors</h3>
          <p className="text-[#807E7E] 2xl:text-body-3 xl:text-caption">
            Streamline deal flow with AI insights, evaluating investments and
            making smarter decisions in one platform.
          </p>
        </div>

        <div className="flex flex-col gap-2 border h-full border-[#E4E8E8]/10 p-5 rounded-sm text-body-3">
          <h3 className="text-body-3 font-semibold">For Startups</h3>
          <p className="text-[#807E7E] 2xl:text-body-3 xl:text-caption">
            Track deals, generate reports, and monitor progress without the
            complexity of traditional CRMs.
          </p>
        </div>
      </motion.div>

      {/* Description and Buttons Animation */}
      <motion.div
        className="2xl:pb-14 pb-8 px-[40px]"
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
          <AnimatedButton onClick={() => setOpen(true)}>
            Pre-Register Now
          </AnimatedButton>
        </div>
      </motion.div>
      <Preregister open={open} setOpen={setOpen} />
    </div>
  );
}
