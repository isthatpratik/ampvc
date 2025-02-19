"use client";

import { motion } from "framer-motion";
import FinyxChat from "@/components/layout/finyx-chat";
import RightSection from "@/components/layout/right-section";

interface CombinedSectionProps {
  selectedService: {
    title: string;
    subtitle: string;
    href: string;
  } | null;
}

export default function CombinedSection({ selectedService }: CombinedSectionProps) {
  return (
    <div className="flex w-full h-screen">
      {/* FinyxChat: Shrinks when a service is selected */}
      <motion.div
        className="flex transition-all duration-500 overflow-hidden"
        animate={{
          flex: selectedService ? 0 : 3, // Shrinks when service is selected
          opacity: selectedService ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <FinyxChat />
      </motion.div>

      {/* RightSection: Always visible */}
      <motion.div
        className="flex transition-all duration-500"
        animate={{
          flex: 4, // Right Section always takes this space
        }}
      >
        <RightSection />
      </motion.div>
    </div>
  );
}
