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

export default function CareersSection({ onBack }) {
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="sticky top-0 flex flex-col space-y-4 lg:w-full overflow-hidden justify-start py-14 px-5 lg:px-10 overflow-y-auto h-full">
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
            <Button
              onClick={onBack}
              className="shadow-none 2xl:hidden mb-6 hover:bg-black/5 w-fit transition-all duration-300 rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
            >
              <ArrowLeft className="" /> Back
            </Button>
            <div className="flex flex-col gap-4 border-b border-[#B9BFBE] pb-4">
              <h3 className="text-h4 lg:text-h3 text-center lg:text-start">
                Join our Team
              </h3>
              <p className="text-body-3 lg:text-body-1 text-balance text-center lg:text-start">
                At Ampersand, we are committed to driving business growth
                through strategic financial solutions. If you're passionate
                about finance, strategy, and helping businesses thrive, we’d
                love to have you on board.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="h-fit flex flex-col 2xl:gap-16 justify-between py-6 lg:py-12"
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
              <h3 className="text-h4 text-balance">Current Openings</h3>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="venture-analyst">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Venture Analyst
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div>
                      <h4 className="text-body-2 font-semibold mb-2">
                        Responsibilities:
                      </h4>
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
                    </div>
                    <div className="mt-4">
                      <h4 className="text-body-2 font-semibold mb-2">
                        Qualifications and Experience:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Bachelor's degree in Finance, Business, Economics, or
                          a related field.
                        </li>
                        <li>
                          1-3 years of experience in venture capital, investment
                          banking, consulting, or startup analysis.
                        </li>
                        <li>
                          Strong understanding of financial statements, market
                          research, and due diligence.
                        </li>
                        <li>
                          Proficiency in financial modeling and valuation
                          techniques.
                        </li>
                        <li>
                          Excellent analytical, communication, and presentation
                          skills.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="m&a-specialist">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    M&A Specialist (Mergers & Acquisitions)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div>
                      <h4 className="text-body-2 font-semibold mb-2">
                        Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2 font-normal">
                        <li>
                          Identify and manage M&amp;A opportunities for clients.
                        </li>
                        <li>
                          Assist in structuring deals and legal compliance.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-body-2 font-semibold mb-2">
                        Qualifications and Experience:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Bachelor's or Master's degree in Finance, Business,
                          Law, or a related field.
                        </li>
                        <li>
                          3-5 years of experience in M&A, investment banking,
                          corporate finance, or private equity.
                        </li>
                        <li>
                          Proven experience structuring and managing M&A
                          transactions.
                        </li>
                        <li>
                          Strong knowledge of financial modeling, valuation, and
                          legal compliance.
                        </li>
                        <li>
                          Excellent negotiation and stakeholder management
                          skills.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-ml-engineer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI/ML Engineer (platoX CRM Development)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div>
                      <h4 className="text-body-2 font-semibold mb-2">
                        Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Build and refine AI-powered features for
                          investor-startup matching.
                        </li>
                        <li>
                          Develop predictive analytics for deal flow and
                          portfolio health.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-body-2 font-semibold mb-2">
                        Qualifications and Experience:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Bachelor's or Master’s degree in Computer Science, AI,
                          Machine Learning, or a related field.
                        </li>
                        <li>
                          3+ years of experience in AI/ML development,
                          preferably in fintech, CRM, or investment analytics.
                        </li>
                        <li>
                          Strong programming skills in Python, TensorFlow,
                          PyTorch, or similar frameworks.
                        </li>
                        <li>
                          Experience with predictive modeling, NLP, and
                          recommender systems.
                        </li>
                        <li>
                          Understanding of venture capital or startup funding
                          ecosystems is a plus.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="full-stack-developer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Full Stack Developer (CRM & Website)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div>
                      <h4 className="text-body-2 font-semibold mb-2">
                        Responsibilities:
                      </h4>
                    </div>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>Maintain and enhance the AI-powered CRM.</li>
                      <li>Optimize website performance and functionality.</li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="text-body-2 font-semibold mb-2">
                        Qualifications and Experience:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Bachelor's or Master’s degree in Computer Science, AI,
                          Machine Learning, or a related field.
                        </li>
                        <li>
                          3+ years of experience in AI/ML development,
                          preferably in fintech, CRM, or investment analytics.
                        </li>
                        <li>
                          Strong programming skills in Python, TensorFlow,
                          PyTorch, or similar frameworks.
                        </li>
                        <li>
                          Experience with predictive modeling, NLP, and
                          recommender systems.
                        </li>
                        <li>
                          Understanding of venture capital or startup funding
                          ecosystems is a plus.
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="growth-marketer">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    Growth Marketer – Investor & Startup Outreach
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-4">
                    <div>
                      <h4 className="text-body-2 font-semibold mb-2">
                        Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                        <li>
                          Develop and execute marketing strategies to attract
                          investors and startups.
                        </li>
                        <li>
                          Optimize digital campaigns across SEO, paid ads, email
                          marketing, and social media.
                        </li>
                        <li>
                          Collaborate with the team to position Ampersand as a
                          leader in venture capital.
                        </li>
                        <li>
                          Analyze marketing performance metrics and continuously
                          improve outreach efforts.
                        </li>
                      </ul>
                    </div>
                    <h4 className="text-body-2 font-semibold">
                      Qualifications & Experience:
                    </h4>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Bachelor's degree in Marketing, Business,
                        Communications, or a related field.
                      </li>
                      <li>
                        3+ years of experience in growth marketing, digital
                        marketing, or investor relations.
                      </li>
                      <li>
                        Expertise in SEO, paid advertising, email marketing, and
                        social media strategy.
                      </li>
                      <li>
                        Strong understanding of startup ecosystems, venture
                        capital, and investment trends.
                      </li>
                      <li>
                        Ability to analyze marketing performance and optimize
                        campaigns based on data.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-ml-intern">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI/ML Intern – platoX CRM Development
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-4">
                    <h4 className="text-body-2 font-semibold">
                      Minimum Requirements:
                    </h4>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Currently pursuing or recently completed a
                        Bachelor's/Master’s degree in Computer Science, AI,
                        Machine Learning, or a related field.
                      </li>
                      <li>
                        Strong programming skills in Python and experience with
                        AI/ML frameworks such as TensorFlow, PyTorch, or
                        Scikit-learn.
                      </li>
                      <li>
                        Basic understanding of data preprocessing, predictive
                        modeling, and natural language processing (NLP).
                      </li>
                      <li>
                        Experience with data visualization tools (Matplotlib,
                        Seaborn, Power BI, etc.) is a plus.
                      </li>
                      <li>
                        Familiarity with SQL and NoSQL databases for data
                        management.
                      </li>
                      <li>
                        Strong analytical skills with a problem-solving mindset.
                      </li>
                      <li>
                        Passion for startups, venture capital, and AI-driven
                        solutions.
                      </li>
                    </ul>
                    <h4 className="text-body-2 font-semibold">
                      Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Assist in training and fine-tuning AI/ML models for
                        investor-startup matching.
                      </li>
                      <li>
                        Support the development of predictive analytics for deal
                        flow insights.
                      </li>
                      <li>
                        Work with structured and unstructured data to extract
                        valuable insights.
                      </li>
                      <li>
                        Optimize AI pipelines to improve efficiency and
                        accuracy.
                      </li>
                      <li>
                        Collaborate with developers and product teams to
                        integrate AI features into platoX CRM.
                      </li>
                      <li>
                        Research and implement cutting-edge ML techniques
                        applicable to investment analytics.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-research-intern">
                  <AccordionTrigger className="text-h6 border-b-[1px] border-b-[#B9BFBE] pb-2">
                    AI Research Intern – VC & Startup Intelligence
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-4">
                    <h4 className="text-body-2 font-semibold">
                      Minimum Requirements:
                    </h4>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Currently pursuing a Master’s/PhD in AI, Machine
                        Learning, Data Science, or a related field.
                      </li>
                      <li>
                        Experience with deep learning models, reinforcement
                        learning, and AI research methodologies.
                      </li>
                      <li>
                        Strong background in statistical analysis, data
                        modeling, and feature engineering.
                      </li>
                      <li>
                        Familiarity with venture capital trends, financial
                        markets, or startup ecosystems is a plus.
                      </li>
                      <li>
                        Proficiency in Python, R, and AI libraries such as
                        Keras, OpenAI Gym, or Hugging Face.
                      </li>
                      <li>
                        Ability to write research papers, whitepapers, or
                        technical documentation.
                      </li>
                    </ul>
                    <h4 className="text-body-2 font-semibold">
                      Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5 text-body-3 text-black/60 space-y-2">
                      <li>
                        Conduct AI-driven market research and investment
                        intelligence.
                      </li>
                      <li>
                        Develop prototypes of AI models for startup evaluation
                        and investor insights.
                      </li>
                      <li>
                        Work on financial forecasting models for venture capital
                        portfolios.
                      </li>
                      <li>
                        Analyze real-world startup data to enhance
                        decision-making algorithms.
                      </li>
                      <li>
                        Present findings through reports, data visualizations,
                        and presentations.
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
