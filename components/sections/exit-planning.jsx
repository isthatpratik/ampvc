import React from "react"
import { ArrowRight, Box, DollarSign, Eye, GitCommit, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* What We Do Section */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Box className="w-12 h-12 text-sky-400" />}
            title="Toxic Asset Disposal"
            description="Offload the dead weight, clean your books, and regain liquidity—fast."
          />
          <ServiceCard
            icon={<DollarSign className="w-12 h-12 text-yellow-400" />}
            title="Legal & Financial Maneuvers"
            description="Cutting through the red tape with expert deal structuring and seamless transactions."
          />
          <ServiceCard
            icon={<GitCommit className="w-12 h-12 text-pink-400" />}
            title="Tailored Exit Roadmaps"
            description="Whether through secondaries, acquisitions, or asset sales, we design the sharpest route to your exit."
          />
          <ServiceCard
            icon={<Target className="w-12 h-12 text-emerald-400" />}
            title="Buyer Hunting & Deal Matching"
            description="Tapping into our global network to connect you with the right buyers, partners, or acquirers."
          />
          <ServiceCard
            icon={<Eye className="w-12 h-12 text-blue-400" />}
            title="Portfolio Autopsy & Asset Valuation"
            description="We dissect your underperforming investments to uncover potential exit paths and salvage value."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="Sharp Focus on Distressed Exits"
            description="Experience with turning losses into opportunities"
          />
          <FeatureCard
            title="Powerful Network"
            description="Buyers, secondaries, and strategic connections—lined up for you."
          />
          <FeatureCard title="End-to-End Solutions" description="From valuation to handshake, we've got it covered." />
          <FeatureCard title="Discreet & Swift" description="Efficiency with full confidentiality." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Ready to clear your books and reclaim your capital?</h3>
          <p className="text-gray-600">Let's make your exit count.</p>
        </div>
        <Button className="bg-black text-white hover:bg-black/90 px-6 py-6 text-lg rounded-full">
          Get Connected
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="border rounded-xl p-6 space-y-4">
      <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="border rounded-xl p-6 space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

