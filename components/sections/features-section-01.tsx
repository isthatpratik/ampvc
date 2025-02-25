"use client"

import { useState } from "react"
import { FeaturePanel } from "../layout/features"

const features = [
  {
    number: "01",
    title: "Strategic Growth Consultation",
    description:
      "Strategic Growth Consultation offers expert advisory services to accelerate your business. Our seasoned professionals identify opportunities, optimize operations, and implement strategies to drive performance and success.",
    color: "bg-pink-50",
    borderColor: "border-pink-500",
    imageUrl: "",
  },
  {
    number: "02",
    title: "In-Depth Analysis",
    description:
      "We start with a deep analysis of your market position, operations, and competition. Our experts then work with your leadership to craft a tailored growth plan that aligns with your goals and vision.",
    color: "bg-cyan-50",
    borderColor: "border-pink-500",
    imageUrl: "",
  },
  {
    number: "03",
    title: "Customized Growth Plan",
    description:
      "The plan outlines strategies for market expansion, product development, revenue growth, and cost management. We also identify potential obstacles and provide solutions to ensure sustainable success.",
    color: "bg-emerald-50",
    borderColor: "border-pink-500",
    imageUrl: "",
  },
  {
    number: "04",
    title: "Best Practices & Technology",
    description:
      "We offer expert guidance on scaling operations, enhancing customer acquisition and retention, and utilizing technology to gain a competitive edge.",
    color: "bg-yellow-50",
    borderColor: "border-t-pink-500",
    imageUrl: "",
  },
]

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Features</h2>

      <div className="flex flex-col md:flex-row gap-2 max-w-7xl mx-auto h-[400px] ${borderColor}">
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

