"use client";

import { useState, useEffect } from "react";
import LeftSection from "@/components/layout/left-section";
import RightSection from "@/components/layout/right-section";
import { motion } from "framer-motion";
import FinyxChat from "@/components/layout/finyx-chat";
import ContactSection from "@/components/layout/contact-section";

export default function Home() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    subtitle: string;
    href: string;
  } | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  const [selectedSolution, setSelectedSolution] = useState<{
    title: string;
    subtitle: string;
    href: string;
  } | null>(null);

  const [selectedAboutUs, setSelectedAboutUs] = useState(false);
  const [selectedCareers, setSelectedCareers] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      if (selectedService || selectedSolution || selectedAboutUs || selectedCareers) {
        event.preventDefault(); 
        setSelectedService(null);
        setSelectedSolution(null);
        setSelectedAboutUs(false);
        setSelectedCareers(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Allow default back button behavior (closing tab or navigating away)
        window.history.back();
      }
    };

    window.history.pushState(null, "", window.location.href); // Push state to history

    window.addEventListener("popstate", handleBackButton); // Listen for back button

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [selectedService, selectedSolution, selectedAboutUs, selectedCareers]);


  return (
    <div className="relative mx-auto max-w-full min-h-screen flex items-center justify-center">
      <main className="flex w-full">
        {/* Left Section */}
        <div
          className={`relative flex transition-all duration-500 scrollbar-left overflow-y-auto no-scrollbar ${
            isMobile ? (selectedService ? "flex-[6]" : "flex-[5]") : "flex-[5]"
          }`}
        >
          {/* Black Overlay */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black z-50"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
          />
          <LeftSection
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            selectedSolution={selectedSolution}
            setSelectedSolution={setSelectedSolution}
            selectedAboutUs={selectedAboutUs}
            setSelectedAboutUs={setSelectedAboutUs}
            selectedCareers={selectedCareers}
            setSelectedCareers={setSelectedCareers}
          />
        </div>

        {/* Middle Section: Finyx Chat or Contact Section */}
        {!isMobile && (
          <div className="relative hidden lg:flex flex-[2] transition-all duration-500">
            {/* Black Overlay */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black z-50"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
            />
            {selectedAboutUs ? (
              <FinyxChat onBack={() => {}}/>
            ) : selectedService || selectedSolution ? (
              <ContactSection
                selectedService={selectedService}
                selectedSolution={selectedSolution}
              />
            ) : (
              <FinyxChat onBack={() => {}}/>
            )}
          </div>
        )}

        {/* Right Section */}
        <div
          className={`relative hidden lg:flex transition-all duration-500 ${
            isMobile
              ? selectedService || selectedSolution || selectedAboutUs
                ? "flex-[3]"
                : "flex-[5]"
              : "flex-[3]"
          }`}
        >
          {/* Black Overlay */}
          <motion.div
            className="absolute top-0 w-full h-full bg-black z-50"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              delay: 0.7,
              duration: 1.2,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
          />
          <RightSection />
        </div>
      </main>
    </div>
  );
}
