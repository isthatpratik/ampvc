"use client";

import { useState } from "react";
import LeftSection from "@/components/layout/left-section";
import RightSection from "@/components/layout/right-section";
import SplitLayout from "@/components/layout/split-layout";
import { motion } from "framer-motion";
import FinyxChat from "@/components/layout/finyx-chat";

export default function Home() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    subtitle: string;
    href: string;
  } | null>(null);

  return (
    <div className="mx-auto max-w-full min-h-screen flex items-center justify-center">
      <main>
        <SplitLayout>
          {/* Adjust the flex width dynamically */}
          <motion.div
            className="flex transition-all duration-100"
            animate={{
              flex: selectedService ? 3.6 : 3.6,
              opacity: 1,
              transition: {
                default: { type: "spring" },
                opacity: { ease: "linear" },
              },
            }}
          >
            <LeftSection
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          </motion.div>

            <motion.div
              className="flex sticky top-0 transition-all duration-500 overflow-hidden"
              animate={{
                flex: selectedService ? 2.8 : 2.8, // Shrinks to 0 when service is selected
                opacity: selectedService ? 1 : 1,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <FinyxChat />
            </motion.div>


          <motion.div
            className="flex transition-all duration-500"
            animate={{
              flex: 3.6, 
            }}
          >
            <RightSection />
          </motion.div>

        </SplitLayout>
      </main>
    </div>
  );
}
