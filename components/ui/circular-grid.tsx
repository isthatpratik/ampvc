"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CircularCardProps {
  title: string;
  subtitle: string;
  defaultIcon: React.ReactNode;
  hoverIcon: React.ReactNode;
}

export function CircularCard({ title, subtitle, defaultIcon, hoverIcon }: CircularCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex w-full md:aspect-square items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full lg:gap-4 py-6 px-4 lg:p-6 group relative flex md:flex-col items-center justify-center md:rounded-full border-[1px] bg-transparent border-[#D5DEDE] transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
        
        {/* SVG Animation */}
        <div className="relative flex w-16 h-16 items-center justify-center">
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", stiffness: 100 }}
            className="absolute"
          >
            {defaultIcon}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", stiffness: 100 }}
            className="absolute"
          >
            {hoverIcon}
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col space-y-2 w-full">
          <h3 className="mb-2 text-center text-body-1 text-balance">
            {title}
          </h3>
          <p className="text-center text-body-3 text-[#616B68] text-balance">
            {subtitle}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="flex-shrink-0 lg:hidden lg:mt-4 flex w-11 h-11 bg-[#F2F3F3] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#181A1A]">
          <ArrowRight className="w-4 h-4 group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
