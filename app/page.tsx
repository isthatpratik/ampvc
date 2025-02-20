"use client";

import { useState, useEffect } from "react";
import LeftSection from "@/components/layout/left-section";
import RightSection from "@/components/layout/right-section";
import { motion } from "framer-motion";
import FinyxChat from "@/components/layout/finyx-chat";

export default function Home() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    subtitle: string;
    href: string;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mx-auto max-w-full min-h-screen flex items-center justify-center">
      <main className="flex w-full">
        {/* Left Section */}
        <div
          className={`relative flex transition-all duration-500 scrollbar-left overflow-y-auto no-scrollbar ${
            isMobile ? (selectedService ? "flex-[6]" : "flex-[5]") : "flex-[3.6]"
          }`}
        >
          {/* Black Overlay */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black z-50"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring", stiffness: 70, damping: 20 }}
          />
          <LeftSection selectedService={selectedService} setSelectedService={setSelectedService} />
        </div>

        {/* Finyx Chat (Hidden on Mobile) */}
        {!isMobile && (
          <div className="relative flex flex-[2.8]">
            {/* Black Overlay */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black z-50"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ delay: 0.5, duration: 1.2, type: "spring", stiffness: 70, damping: 20 }}
            />
            <FinyxChat />
          </div>
        )}

        {/* Right Section */}
        <div
          className={`relative flex transition-all duration-500 ${
            isMobile ? (selectedService ? "flex-[4]" : "flex-[5]") : "flex-[3.6]"
          }`}
        >
          {/* Black Overlay */}
          <motion.div
            className="absolute top-0 w-full h-full bg-black z-50"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 0.7, duration: 1.2, type: "spring", stiffness: 70, damping: 20 }}
          />
          <RightSection />
        </div>
      </main>
    </div>
  );
}
