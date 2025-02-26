import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import TeamSection from "@/components/sections/team-section";

export default function AboutUs({ onBack }) {
  return (
    <motion.div
      className="lg:py-14 py-12 lg:px-10 px-5 mx-auto"
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
        <div className="flex lg:flex-row flex-col lg:mb-12 w-full">
          <div className="lg:w-3/5 mb-12 flex flex-col gap-2">
            <h2 className="text-h3 text-balance text-center lg:text-left">
              Redefining Possibilities, Empowering Growth
            </h2>
            <h3 className="text-body-3 lg:text-body-2 text-balance text-center lg:text-left">
              At Ampersand, we bridge the gap between vision and execution. We
              empower startups and businesses with solutions, insights, and
              tools that drive growth and maximize impact. Our mission is to
              simplify complexity and create pathways to success.
            </h3>
          </div>
          <div className="lg:w-2/5 min-h-52 lg:py-6 grid justify-center flex-grow items-center bg-center bg-cover bg-[url('/images/about/about-grid.png')] bg-no-repeat">
            <Image
              src="/images/about/about-hero.svg"
              alt=""
              width={300}
              height={200}
              priority
              quality={75}
              className="object-contain w-auto lg:min-h-52 "
            />
          </div>
        </div>

        <div className="flex py-12 space-y-4 lg:my-6 flex-col w-full bg-[url('/images/about/about-middle-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <h2 className="text-h5 lg:text-h4 text-balance text-center lg:max-w-md mx-auto">
            Innovation, Collaboration, and Purpose-Driven Impact
          </h2>
          <h3 className="text-body-1 lg:text-body-2 text-center mx-auto lg:max-w-xl max-w-xs">
            We thrive on curiosity, creativity, and collaboration. Our culture
            is built on the foundation of innovation, where ideas turn into
            solutions that make a difference. We believe in ownership,
            transparency, and a shared vision for growth—both for our clients
            and ourselves. At Ampersand, every challenge is an opportunity, and
            every success is a collective win.
          </h3>
        </div>

        <div className="grid gap-4">
            <h3 className="text-[24px] lg:text-[40px] py-6 xl:py-10 text-center lg:text-start font-semibold text-[#202222]">Meet our Team</h3>
            <TeamSection />
        </div>
      </div>
    </motion.div>
  );
}
