"use client";

import { useState } from "react";
import LeftSection from "@/components/layout/left-section";
import RightSection from "@/components/layout/right-section";
import SplitLayout from "@/components/layout/split-layout";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedService, setSelectedService] = useState<{ title: string; subtitle: string; href: string } | null>(null);

  return (
    <div className="mx-auto max-w-[1440px] min-h-screen flex items-center justify-center">
      <main>
        <SplitLayout>
          {/* Adjust the flex width dynamically */}
          <motion.div
            className="flex transition-all"
            animate={{
              flex: selectedService ? 3 : 2, // Expand when service is selected
            }}
          >
            <LeftSection
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </motion.div>
          
          <motion.div
            className="flex transition-all"
            animate={{
              flex: selectedService ? 2 : 2, // Shrink when service is selected
            }}
          >
            <RightSection />
          </motion.div>
        </SplitLayout>
      </main>
    </div>
  );
}
