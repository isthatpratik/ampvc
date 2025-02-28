"use client"

import { useState } from "react"
import { FeaturePanel } from "@/components/layout/features"

const features = [
  {
    number: "01",
    title: "Strategic Growth Consultation",
    description:
      "Strategic Growth Consultation offers expert advisory services to accelerate your business. Our seasoned professionals identify opportunities, optimize operations, and implement strategies to drive performance and success.",
    color: "bg-pink-50",
    imageUrl: "/images/features/Features-0101.svg",
    borderColor: "border-[#FFAFDF]", // Pink border
  },
  {
    number: "02",
    title: "In-Depth Analysis",
    description:
      "We start with a deep analysis of your market position, operations, and competition. Our experts then work with your leadership to craft a tailored growth plan that aligns with your goals and vision.",
    color: "bg-cyan-50",
    imageUrl: "/images/features/Features-0102.svg",
    borderColor: "border-[#99DBE0]", // Cyan border
  },
  {
    number: "03",
    title: "Customized Growth Plan",
    description:
      "The plan outlines strategies for market expansion, product development, revenue growth, and cost management. We also identify potential obstacles and provide solutions to ensure sustainable success.",
    color: "bg-emerald-50",
    imageUrl: "/images/features/Features-0103.svg",
    borderColor: "border-[#2B5C4F]", // Dark Green border
  },
  {
    number: "04",
    title: "Best Practices & Technology",
    description:
      "We offer expert guidance on scaling operations, enhancing customer acquisition and retention, and utilizing technology to gain a competitive edge.",
    color: "bg-yellow-50",
    imageUrl: "/images/features/Features-0104.svg",
    borderColor: "border-[#FCEC3B]", // Yellow border
  },
]

export function FeaturesSection1() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="hidden md:block py-16 px-10 max-w-10xl mx-auto">
      <h2 className="text-h4 font-semibold text-center mb-12">Driving Success with Cutting-Edge Smart Features</h2>

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