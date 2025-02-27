"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  defaultIcon: React.ReactNode;
  hoverIcon: React.ReactNode;
}

export function ServiceCard({ title, subtitle, defaultIcon, hoverIcon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={"/"}
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group h-full flex lg:flex-col items-center justify-between rounded-sm bg-transparent border-[#D5DEDE] border-[1px] py-6 px-4 lg:p-8 transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
        
        {/* SVG Animation */}
        <div className="relative flex h-16 w-16 items-center justify-center aspect-square">
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
        <div className="flex-1 flex flex-col justify-center text-center py-[14px]">
          <h3 className="mb-2 text-label-2 lg:text-label-1 font-medium">{title}</h3>
          <p className="text-body-3 text-[#798682] transition-all duration-300">
            {subtitle}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="lg:mt-4 flex w-11 h-11 bg-[#F2F3F3] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#181A1A]">
          <ArrowRight className="w-4 h-4 group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </Link>
  );
}
