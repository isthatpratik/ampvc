import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function ResponsibleAI({ onBack }) {
  return (
    <div className="min-h-screen text-black">
      <motion.main
        className="mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-[40px] pt-6 grid gap-4">
          <Button
            onClick={onBack}
            className="shadow-none hover:bg-black/5 transition-all duration-300 w-fit rounded-full bg-transparent border border-black/20 px-6 py-1 flex items-center text-body-2"
          >
            <ArrowLeft className="" /> Back
          </Button>
        </div>
        <div className="mb-10 px-10 pt-6 flex flex-col space-y-8">
          <h1 className="font-semibold text-h3">Responsible AI</h1>
          <div className="flex flex-col">
            <p className="text-body-1">
              At Ampersand, we are dedicated to building and deploying AI
              solutions that drive growth for startups and investors while
              maintaining the highest standards of ethics, transparency, and
              fairness. Our commitment to Responsible AI is deeply embedded in
              our technology, services, and decision-making processes.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FFADDF] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Ethical AI Matching for Startups & Investors
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    Bias-Free Recommendations: Our AI matching tool connects
                    startups with the most suitable investors using objective
                    criteria such as industry focus, growth stage, and funding
                    history. We regularly audit our algorithms to identify and
                    eliminate any biases.
                  </p>
                  <p>
                    Inclusive Opportunities: We ensure that startups from
                    diverse backgrounds have equitable access to funding
                    opportunities by maintaining a wide and inclusive investor
                    database.
                  </p>
                  <p>
                    Explainable AI: Our matching tool provides clear insights
                    into how connections are made, ensuring transparency for
                    both startups and investors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FCEC3B] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Transparent Decision-Making in Deal Flow Management
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    AI-Assisted Insights: Ampersand CRM leverages AI to help
                    startups manage their sales pipelines and investors manage
                    deal flow, providing real-time insights and forecasts.
                  </p>
                  <p>
                    Interpretability: Users can easily understand how AI-driven
                    predictions are generated, fostering trust in our
                    technology.
                  </p>
                  <p>
                    User Empowerment: Our CRM allows users to customize AI
                    models according to their preferences, keeping them in
                    control of their business processes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#9BDCE1] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Data Security & Privacy
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    Robust Protection: We implement end-to-end encryption and
                    secure data storage to protect user information from
                    unauthorized access.
                  </p>
                  <p>
                    Privacy by Design: Our AI tools comply with global standards
                    such as GDPR, ensuring user data is handled with care and
                    consent.
                  </p>
                  <p>
                    Confidentiality Assurance: We never share proprietary data
                    without explicit permission and use anonymized datasets for
                    model training.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#4E7E71] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Fairness in Growth Capital and Secondary Buyouts
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    Objective Analysis: Our AI evaluates Growth Capital and
                    Secondary Buyout opportunities using clear, data-driven
                    methodologies.
                  </p>
                  <p>
                    No Conflicts of Interest: Our advisory services maintain
                    neutrality and ensure fairness in every recommendation.
                  </p>
                  <p>
                    Equal Opportunity: We use unbiased data models to ensure
                    every startup, regardless of size or background, has equal
                    access to capital opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#F7F8F8]">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#818CF8] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Accountability & Continuous Improvement
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    Human Oversight: Our expert advisory team continuously
                    reviews AI outputs to ensure accuracy and alignment with
                    business goals.
                  </p>
                  <p>
                    Ongoing Audits: We regularly test and update our models to
                    mitigate risks such as model drift or discriminatory
                    outcomes.
                  </p>
                  <p>
                    Feedback Loops: Our AI systems learn from user interactions
                    and feedback, driving continuous improvement and relevance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="flex p-6 pr-10 items-center">
              <div className="absolute h-[80%] w-1 bg-[#FA8016] rounded-full" />
              <div className="grid ml-10">
                <h2 className="mb-2 text-h5 font-semibold">
                  Sustainable and Responsible Innovation
                </h2>
                <div className="space-y-4 text-body-2">
                  <p>
                    Green AI Practices: We aim to minimize the environmental
                    impact of our AI operations by optimizing computing
                    resources and adopting energy-efficient technologies.
                  </p>
                  <p>
                    Social Impact: Our solutions are designed to promote
                    financial inclusion and support sustainable business growth.
                  </p>
                  <p>
                    Responsible Deployment: We carefully evaluate potential
                    impacts before launching new AI features to ensure they
                    align with our ethical standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <p className="text-body-1 py-6 px-10">
          At Ampersand, Responsible AI is not just a commitment—it is a core
          principle driving innovation, trust, and value creation for startups
          and investors alike.
        </p>
      </motion.main>
    </div>
  );
}
