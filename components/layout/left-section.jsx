"use client";

import { useState } from "react";
import Navbar from "./navbar";
import HeroSection from "../sections/hero-section";
import ServicesGrid from "../sections/services-grid";
import AIMatchingBanner from "../sections/ai-matching-banner";
import SolutionsGrid from "../sections/solutions-grid";
import Footer from "./footer";
import ServiceDetails from "../sections/service-details";

export default function LeftSection({ selectedService, setSelectedService }) {
  return (
    <div className="min-h-screen relative flex-1 bg-[#F7F8F8] flex flex-col">
      <div className="flex-1 pt-14 h-screen overflow-y-auto">
        <div className="flex-1">
          <Navbar />
          {selectedService ? (
            <ServiceDetails service={selectedService} onBack={() => setSelectedService(null)} />
          ) : (
            <>
              <HeroSection />
              <ServicesGrid setSelectedService={setSelectedService} />
              <AIMatchingBanner />
              <SolutionsGrid />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
