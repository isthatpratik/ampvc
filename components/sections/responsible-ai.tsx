import Link from "next/link"
import { Menu } from "lucide-react"

export default function ResponsibleAIPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold">
          &
        </Link>
        <button className="text-white">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <h1 className="mb-4 text-2xl font-bold">Responsible AI</h1>

        <p className="mb-12 text-gray-300">
          At Ampersand, we are dedicated to building and deploying AI solutions that drive growth for startups and
          investors while maintaining the highest standards of ethics, transparency, and fairness. Our commitment to
          Responsible AI is deeply embedded in our technology, services, and decision-making processes.
        </p>

        <div className="space-y-12">
          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500" />
            <h2 className="mb-4 text-xl font-semibold">Ethical AI Matching for Startups & Investors</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">Bias-Free Recommendations:</span> Our AI matching tool connects
                startups with the most suitable investors using objective criteria such as industry focus, growth stage,
                and funding history. We regularly audit our algorithms to identify and eliminate any biases.
              </p>
              <p>
                <span className="font-medium text-white">Inclusive Opportunities:</span> We ensure that startups from
                diverse backgrounds have equitable access to funding opportunities by maintaining a wide and inclusive
                investor database.
              </p>
              <p>
                <span className="font-medium text-white">Explainable AI:</span> Our matching tool provides clear
                insights into how connections are made, ensuring transparency for both startups and investors.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500" />
            <h2 className="mb-4 text-xl font-semibold">Transparent Decision-Making in Deal Flow Management</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">AI-Assisted Insights:</span> Ampersand CRM leverages AI to help
                startups manage their sales pipelines and investors manage deal flow, providing real-time insights and
                forecasts.
              </p>
              <p>
                <span className="font-medium text-white">Interpretability:</span> Users can easily understand how
                AI-driven predictions are generated, fostering trust in our technology.
              </p>
              <p>
                <span className="font-medium text-white">User Empowerment:</span> Our CRM allows users to customize AI
                models according to their preferences, keeping them in control of their business processes.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Data Security & Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">Robust Protection:</span> We implement end-to-end encryption
                and secure data storage to protect user information from unauthorized access.
              </p>
              <p>
                <span className="font-medium text-white">Privacy by Design:</span> Our AI tools comply with global
                standards such as GDPR, ensuring user data is handled with care and consent.
              </p>
              <p>
                <span className="font-medium text-white">Confidentiality Assurance:</span> We never share proprietary
                data without explicit permission and use anonymized datasets for model training.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-500" />
            <h2 className="mb-4 text-xl font-semibold">Fairness in Growth Capital and Secondary Buyouts</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">Objective Analysis:</span> Our AI evaluates Growth Capital and
                Secondary Buyout opportunities using clear, data-driven methodologies.
              </p>
              <p>
                <span className="font-medium text-white">No Conflicts of Interest:</span> Our advisory services maintain
                neutrality and ensure fairness in every recommendation.
              </p>
              <p>
                <span className="font-medium text-white">Equal Opportunity:</span> We use unbiased data models to ensure
                every startup, regardless of size or background, has equal access to capital opportunities.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
            <h2 className="mb-4 text-xl font-semibold">Accountability & Continuous Improvement</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">Human Oversight:</span> Our expert advisory team continuously
                reviews AI outputs to ensure accuracy and alignment with business goals.
              </p>
              <p>
                <span className="font-medium text-white">Ongoing Audits:</span> We regularly test and update our models
                to mitigate risks such as model drift or discriminatory outcomes.
              </p>
              <p>
                <span className="font-medium text-white">Feedback Loops:</span> Our AI systems learn from user
                interactions and feedback, driving continuous improvement and relevance.
              </p>
            </div>
          </section>

          <section className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />
            <h2 className="mb-4 text-xl font-semibold">Sustainable and Responsible Innovation</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-white">Green AI Practices:</span> We aim to minimize the environmental
                impact of our AI operations by optimizing computing resources and adopting energy-efficient
                technologies.
              </p>
              <p>
                <span className="font-medium text-white">Social Impact:</span> Our solutions are designed to promote
                financial inclusion and support sustainable business growth.
              </p>
              <p>
                <span className="font-medium text-white">Responsible Deployment:</span> We carefully evaluate potential
                impacts before launching new AI features to ensure they align with our ethical standards.
              </p>
            </div>
          </section>
        </div>

        <p className="mt-12 text-gray-300">
          At Ampersand, Responsible AI is not just a commitment—it is a core principle driving innovation, trust, and
          value creation for startups and investors alike.
        </p>
      </main>
    </div>
  )
}

