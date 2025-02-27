"use client";

import Navbar from "./navbar";
import HeroSection from "../sections/hero-section";
import ServicesGrid from "../sections/services-grid";
import AIMatchingBanner from "../sections/ai-matching-banner";
import SolutionsGrid from "../sections/solutions-grid";
import Footer from "./footer";
import ServiceDetails from "../sections/service-details";
import { motion } from "framer-motion";
import SolutionDetails from "../sections/solution-details";
import AboutUs from "../sections/about-us";
import { useState } from "react";
import TermsOfUse from "../sections/terms-of-use";
import PrivacyPolicy from "../sections/privacy-policy";
import ResponsibleAI from "../sections/responsible-ai";
import PreRegisterMobile from "../ui/pre-register-mobile";
import FinyxChat from "./finyx-chat";

export default function LeftSection({
  selectedService,
  setSelectedService,
  selectedSolution,
  setSelectedSolution,
  selectedAboutUs,
  setSelectedAboutUs,
}) {
  const [selectedStaticPage, setSelectedStaticPage] = useState(null);
  const [selectedResponsibleAI, setSelectedResponsibleAI] = useState(false);
  const [showFinyxChat, setShowFinyxChat] = useState(false);

  return (
    <div className="min-h-screen relative flex-1 bg-white flex flex-col">
      <div className="flex-1 pt-8 2xl:pt-14 overflow-y-auto">
        <div>
          <motion.div
            initial={{ y: "-50px", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 25,
              },
            }}
            className="sticky top-0"
          >
            <Navbar
              setSelectedService={setSelectedService}
              setSelectedSolution={setSelectedSolution}
              setSelectedAboutUs={setSelectedAboutUs}
            />
          </motion.div>

          {/* Conditional Rendering for Service or Solution Details */}
          {showFinyxChat ? (
            <FinyxChat />
          ) : selectedService ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <ServiceDetails
                service={selectedService}
                onBack={() => setSelectedService(null)}
              />
            </motion.div>
          ) : selectedSolution ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <SolutionDetails
                solution={selectedSolution}
                onBack={() => setSelectedSolution(null)}
              />
            </motion.div>
          ) : selectedAboutUs ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <AboutUs onBack={() => setSelectedAboutUs(false)} />
            </motion.div>
          ) : selectedStaticPage === "terms-of-use" ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <TermsOfUse onBack={() => setSelectedStaticPage(null)} />
            </motion.div>
          ) : selectedStaticPage === "privacy-policy" ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <PrivacyPolicy onBack={() => setSelectedStaticPage(null)} />
            </motion.div>
          ) : selectedResponsibleAI ? (
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                },
              }}
            >
              <ResponsibleAI onBack={() => setSelectedResponsibleAI(false)} />
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  },
                }}
              >
                <HeroSection />
              </motion.div>

              <motion.div
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
                <ServicesGrid setSelectedService={setSelectedService} />
              </motion.div>

              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  },
                }}
              >
                <AIMatchingBanner setShowFinyxChat={setShowFinyxChat} /> 
                <PreRegisterMobile />
              </motion.div>

              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  },
                }}
              >
                <SolutionsGrid setSelectedSolution={setSelectedSolution} />
              </motion.div>
            </>
          )}
        </div>
      </div>

      <motion.div
        initial={{ y: "50px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.6,
            type: "spring",
            stiffness: 100,
            damping: 25,
          },
        }}
      >
        <Footer
          onServiceSelect={setSelectedService}
          onSolutionSelect={setSelectedSolution}
          onStaticPageSelect={setSelectedStaticPage}
          onResponsibleAISelect={setSelectedResponsibleAI}
          onAboutUsSelect={setSelectedAboutUs}
        />
      </motion.div>
    </div>
  );
}
