"use client"

import { useState } from "react"
import { FeaturePanel } from "@/components/layout/features"

const features = [
  {
    number: "01",
    title: "Maximizing Early-Stage Value",
    description:
      "Strategic Growth Consultation provides expert advisory services to accelerate business growth. Our seasoned professionals identify opportunities, optimize operations, and implement strategies to enhance performance.",
    color: "bg-pink-50",
    imageUrl: "/images/features/Features-0201.svg",
    borderColor: "border-[#FFAFDF]", // Pink border
  },
  {
    number: "02",
    title: "In-Depth Analysis",
    description:
      "We analyze your company's valuation, market position, and growth potential to determine the best timing and structure for a secondary exit. Our services cover preparation, buyer identification, negotiation, and transaction management.",
    color: "bg-cyan-50",
    imageUrl: "/images/features/Features-0202.svg",
    borderColor: "border-[#99DBE0]", // Cyan border
  },
  {
    number: "03",
    title: "Customized Growth Plan",
    description:
      "This plan includes detailed strategies for market expansion, product development, revenue enhancement, and cost management. Our services also encompass identifying potential barriers to growth and devising solutions to overcome them.",
    color: "bg-emerald-50",
    imageUrl: "/images/features/Features-0203.svg",
    borderColor: "border-[#2B5C4F]", // Dark Green border
  },
  {
    number: "04",
    title: "Best Practices & Technology",
    description:
      "Beyond transaction management, we offer advisory services for secondary exits, covering tax planning, legal aspects, and post-transaction support to align with your financial and strategic goals.",
    color: "bg-yellow-50",
    imageUrl: "/images/features/Features-0204.svg",
    borderColor: "border-[#FCEC3B]", // Yellow border
  },
]

export function FeaturesSection2() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="hidden md:block py-16 px-10 max-w-10xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Driving Success with Cutting-Edge Smart Features</h2>

      <div className="flex flex-col md:flex-row gap-3 max-w-fit mx-auto h-[300px]">
        {features.map((feature, index) => (
          <FeaturePanel
            key={feature.number}
            {...feature}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}