"use client";

import Navbar from "./navbar";
import HeroSection from "../sections/hero-section";
import ServicesGrid from "../sections/services-grid";
import AIMatchingBanner from "../sections/ai-matching-banner";
import SolutionsGrid from "../sections/solutions-grid";
import Footer from "./footer";
import ServiceDetails from "../sections/service-details";
import { motion } from "framer-motion";

export default function LeftSection({ selectedService, setSelectedService }) {
  return (
    <div className="min-h-screen relative flex-1 bg-[#F7F8F8] flex flex-col">
      <div className="flex-1 pt-14 h-screen overflow-y-auto">
        <div className="">
          {/* Animate Navbar */}
          <motion.div
            initial={{ y: "-50px", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.4, type: "spring", stiffness: 100, damping: 25 },
            }}
          >
            <Navbar />
          </motion.div>

          {/* Animate Content Sections */}
          {selectedService ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.6, type: "spring", stiffness: 100, damping: 25 },
              }}
            >
              <ServiceDetails service={selectedService} onBack={() => setSelectedService(null)} />
            </motion.div>
          ) : (
            <>
              {/* Animate HeroSection */}
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.8, type: "spring", stiffness: 100, damping: 25 },
                }}
              >
                <HeroSection />
              </motion.div>

              {/* Animate ServicesGrid */}
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, type: "spring", stiffness: 100, damping: 25 },
                }}
              >
                <ServicesGrid setSelectedService={setSelectedService} />
              </motion.div>

              {/* Animate AIMatchingBanner */}
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 25 },
                }}
              >
                <AIMatchingBanner />
              </motion.div>

              {/* Animate SolutionsGrid */}
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1.4, type: "spring", stiffness: 100, damping: 25 },
                }}
              >
                <SolutionsGrid />
              </motion.div>
            </>
          )}
        </div>
      </div>
      {/* Footer Animation */}
      <motion.div
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 1.6, type: "spring", stiffness: 100, damping: 25 },
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
