import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import TeamSection from "@/components/sections/team-section";

export default function AboutUs({ onBack }) {
  return (
    <motion.div
      className="py-14 px-10 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-4">
        <Button
          onClick={onBack}
          className="shadow-none hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2 mb-4"
        >
          <ArrowLeft className="" /> Back
        </Button>
        <div className="flex lg:mb-12">
          <div className="w-7/12 grid space-y-2">
            <h2 className="text-h3 text-balance">
              Redefining Possibilities, Empowering Growth
            </h2>
            <h3 className="text-body-2 max-w-xl text-balance">
              At Ampersand, we bridge the gap between vision and execution. We
              empower startups and businesses with solutions, insights, and
              tools that drive growth and maximize impact. Our mission is to
              simplify complexity and create pathways to success.
            </h3>
          </div>
          <div className="w-5/12 h-full grid justify-center items-center bg-center bg-cover bg-[url('/images/about/about-grid.png')] bg-no-repeat">
            <Image
              src="/images/about/about-hero.svg"
              alt=""
              width={300}
              height={200}
              priority
              quality={75}
              className="object-contain w-auto h-full items-center justify-center self-center"
            />
          </div>
        </div>

        <div className="flex py-12 space-y-4 lg:my-6 flex-col w-full bg-[url('/images/about/about-middle-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <h2 className="text-h4 text-balance text-center lg:max-w-md mx-auto">
            Innovation, Collaboration, and Purpose-Driven Impact
          </h2>
          <h3 className="text-body-2 text-center mx-auto max-w-xl">
            We thrive on curiosity, creativity, and collaboration. Our culture
            is built on the foundation of innovation, where ideas turn into
            solutions that make a difference. We believe in ownership,
            transparency, and a shared vision for growth—both for our clients
            and ourselves. At Ampersand, every challenge is an opportunity, and
            every success is a collective win.
          </h3>
        </div>

        <div className="grid gap-4">
            <h3 className="text-h3 font-semibold text-[#202222]">Meet our Team</h3>
            <TeamSection />
        </div>
      </div>
    </motion.div>
  );
}
