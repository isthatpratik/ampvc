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
import CareersSection from "../sections/careers";
import Image from "next/image";

export default function LeftSection({
  selectedService,
  setSelectedService,
  selectedSolution,
  setSelectedSolution,
  selectedAboutUs,
  setSelectedAboutUs,
  selectedCareers,
  setSelectedCareers
}) {
  const [selectedStaticPage, setSelectedStaticPage] = useState(null);
  const [selectedResponsibleAI, setSelectedResponsibleAI] = useState(false);
  const [showFinyxChat, setShowFinyxChat] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  const toggleFinyxChat = () => {
    setShowFinyxChat((prev) => !prev);
  };

  const handleServiceSelect = (value) => {
    setShowFinyxChat(false);
    setSelectedService(value);
  };

  const handleSolutionSelect = (value) => {
    setShowFinyxChat(false);
    setSelectedSolution(value);
  };

  const handleAboutUsSelect = (value) => {
    setShowFinyxChat(false);
    setSelectedAboutUs(value);
  };

  const handleStaticPageSelect = (value) => {
    setShowFinyxChat(false);
    setSelectedStaticPage(value);
  };

  const handleResponsibleAISelect = (value) => {
    setShowFinyxChat(false);
    setSelectedResponsibleAI(value);
  };

  const handleCareersSelect = (value) => {
    setShowFinyxChat(false);
    setSelectedCareers(value);
  };

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
              setSelectedService={handleServiceSelect}
              setSelectedSolution={handleSolutionSelect}
              setSelectedAboutUs={handleAboutUsSelect}
              setSelectedCareers={handleCareersSelect}
            />
          </motion.div>

          {/* Conditional Rendering for Service or Solution Details */}
          {showFinyxChat ? (
            <FinyxChat onBack={() => setShowFinyxChat(false)}/>
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
                onBack={() => handleServiceSelect(null)}
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
                onBack={() => handleSolutionSelect(null)}
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
              <AboutUs onBack={() => handleAboutUsSelect(false)} />
            </motion.div>
          ) : selectedCareers ? (
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
              <CareersSection onBack={() => handleCareersSelect(false)} />
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
              <TermsOfUse onBack={() => handleStaticPageSelect(null)} />
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
              <PrivacyPolicy onBack={() => handleStaticPageSelect(null)} />
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
              <ResponsibleAI onBack={() => handleResponsibleAISelect(false)} />
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
                <ServicesGrid setSelectedService={handleServiceSelect} />
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
                <SolutionsGrid setSelectedSolution={handleSolutionSelect} />
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
          onServiceSelect={handleServiceSelect}
          onSolutionSelect={handleSolutionSelect}
          onStaticPageSelect={handleStaticPageSelect}
          onResponsibleAISelect={handleResponsibleAISelect}
          onAboutUsSelect={handleAboutUsSelect}
          onCareersSelect={handleCareersSelect}
        />
      </motion.div>

      {!showFinyxChat && ( <motion.button
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
        onClick={toggleFinyxChat}
        className="fixed bottom-0 right-0 lg:hidden items-center justify-center"
      >
        <Image src="/images/finyx-chat/ai-chat-blob.svg" alt="Chat" width={100} height={100} className="w-auto h-auto object-contain" />
      </motion.button> )}
    </div>
  );
}
