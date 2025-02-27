"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import JobForm from "./job-form";
import { ArrowLeft } from "lucide-react";

export default function CareersSection() {
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="sticky top-0 flex flex-col space-y-4 lg:w-full overflow-hidden justify-start py-14 px-10 min-h-screen overflow-y-auto h-full">
      {!showJobForm ? ( // Conditionally render job listings or job form
        <>
          <motion.div
            className="h-fit flex flex-col 2xl:gap-12 justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
          >
            <div className="flex flex-col gap-4 border-b border-[#B9BFBE] pb-4">
              <h3 className="text-h3 text-balance">Join our Team</h3>
              <p className="text-body-1">
                At Ampersand, we are committed to driving business growth
                through strategic financial solutions. If you're passionate
                about finance, strategy, and helping businesses thrive, we’d
                love to have you on board.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="h-fit flex flex-col 2xl:gap-16 justify-between py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
          >
            <div className="flex flex-col gap-8">
              <h3 className="text-h5 text-balance">Current Openings</h3>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="venture-analyst">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Venture Analyst
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2 font-normal">
                      <li>
                        Conduct market research and evaluate startup business
                        models.
                      </li>
                      <li>
                        Analyze financial statements and investment
                        opportunities.
                      </li>
                      <li>Assist in due diligence for VC clients</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m&a-specialist">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    M&A Specialist (Mergers & Acquisitions)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Identify and manage M&A opportunities for clients.
                      </li>
                      <li>Assist in structuring deals and legal compliance.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-ml-engineer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI/ML Engineer (Fynar CRM Development)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Build and refine AI-powered features for
                        investor-startup matching
                      </li>
                      <li>
                        Develop predictive analytics for deal flow and portfolio
                        health.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="full-stack-developer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Full Stack Developer (CRM & Website)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>Maintain and enhance the AI-powered CRM.</li>
                      <li>Optimize website performance and functionality.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="growth-marketer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Growth Marketer – Investor & Startup Outreach
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Develop marketing strategies to attract startups and
                        investors.
                      </li>
                      <li>
                        Manage digital marketing, events, and branding efforts.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-ml-intern">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI/ML Intern – Fynar CRM Development
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Develop and optimize AI/ML models for investor-startup
                        matching and deal insights.
                      </li>
                      <li>
                        Collaborate on integrating AI features into Fynar CRM,
                        improving data efficiency and accuracy.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-research-intern">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI Research Intern – VC & Startup Intelligence
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Conduct AI-driven research and develop models for
                        startup evaluation and financial forecasting.
                      </li>
                      <li>
                        Analyze data and present insights through reports and
                        visualizations to support decision-making.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>

          <motion.div
            className="h-fit flex gap-6 mb-6 justify-between self-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.3,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
          >
            <div className="flex items-center gap-2 bg-white rounded-sm border-[#C8CDCC] border">
              <div className="flex flex-col justify-between gap-4 p-5">
                <h5 className="text-h6">
                  Kick start your career with ambition
                </h5>
                <Button
                  className="w-fit py-6 px-8 bg-black text-white rounded-full"
                  onClick={() => setShowJobForm(true)}
                >
                  Apply Now
                </Button>
              </div>
              <div className="w-fit h-ful p-1l">
                <Image
                  src={"/images/careers/apply-banner.svg"}
                  alt="apply-banner"
                  width={100}
                  height={100}
                  className="w-auto h-full"
                />
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <JobForm onClose={() => setShowJobForm(false)} />
      )}
    </div>
  );
}
