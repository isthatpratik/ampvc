"use client";

import Navbar from "./navbar";
import HeroSection from "../sections/hero-section";
import ServicesGrid from "../sections/services-grid";
import AIMatchingBanner from "../sections/ai-matching-banner";
import SolutionsGrid from "../sections/solutions-grid";
import Footer from "./footer";
import ServiceDetails from "../sections/service-details";
import { motion } from "framer-motion";
import SolutionDetails from '../sections/solution-details'

export default function LeftSection({
  selectedService,
  setSelectedService,
  selectedSolution,
  setSelectedSolution,
}) {
  return (
    <div className="min-h-screen relative flex-1 bg-white flex flex-col">
      <div className="flex-1 pt-14 min-h-screen overflow-y-auto">
        <div>
          <motion.div
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.4, type: "spring", stiffness: 100, damping: 25 } }}
          >
            <Navbar />
          </motion.div>

          {/* Conditional Rendering for Service or Solution Details */}
          {selectedService ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.6, type: "spring", stiffness: 100, damping: 25 } }}
            >
              <ServiceDetails service={selectedService} onBack={() => setSelectedService(null)} />
            </motion.div>
          ) : selectedSolution ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.6, type: "spring", stiffness: 100, damping: 25 } }}
            >
              <SolutionDetails solution={selectedSolution} onBack={() => setSelectedSolution(null)} />
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.8, type: "spring", stiffness: 100, damping: 25 } }}
              >
                <HeroSection />
              </motion.div>

              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1, type: "spring", stiffness: 100, damping: 25 } }}
              >
                <ServicesGrid setSelectedService={setSelectedService} />
              </motion.div>

              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1.2, type: "spring", stiffness: 100, damping: 25 } }}
              >
                <AIMatchingBanner />
              </motion.div>

              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1.4, type: "spring", stiffness: 100, damping: 25 } }}
              >
                <SolutionsGrid setSelectedSolution={setSelectedSolution} />
              </motion.div>
            </>
          )}
        </div>
      </div>

      <motion.div
        initial={{ y: "50px", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.6, type: "spring", stiffness: 100, damping: 25 } }}
      >
        <Footer onServiceSelect={setSelectedService} onSolutionSelect={setSelectedSolution} />
      </motion.div>
    </div>
  );
}