"use client"

import { useState } from "react"
import { FeaturePanel } from "@/components/layout/features"

const features = [
  {
    number: "01",
    title: "Strategic Growth Consultation",
    description:
      "Interim Funding Solutions bridges financial gaps during growth, restructuring, or market shifts, providing short-term financing to sustain momentum and stability while securing long-term funding.",
    color: "bg-pink-50",
    imageUrl: "/images/features/Features-0301.svg",
    borderColor: "border-[#FFAFDF]", // Pink border
  },
  {
    number: "02",
    title: "In-Depth Analysis",
    description:
      "We provide bridge loans, mezzanine financing, and tailored short-term capital solutions, ensuring minimal risk and maximum flexibility to meet your financial needs.",
    color: "bg-cyan-50",
    imageUrl: "/images/features/Features-0302.svg",
    borderColor: "border-[#99DBE0]", // Cyan border
  },
  {
    number: "03",
    title: "Customized Growth Plan",
    description:
      "We assess your financial status, cash flow, and funding goals, then connect you with lenders and investors eager to support high-growth businesses. This ensures competitive terms, swift approval, and timely access to strategic opportunities.",
    color: "bg-emerald-50",
    imageUrl: "/images/features/Features-0303.svg",
    borderColor: "border-[#2B5C4F]", // Dark Green border
  },
  {
    number: "04",
    title: "Best Practices & Technology",
    description:
      "We provide advisory services for effective interim funding management, including financial planning, risk assessment, and repayment strategies, ensuring stability and confident decision-making.",
    color: "bg-yellow-50",
    imageUrl: "/images/features/Features-0304.svg",
    borderColor: "border-[#FCEC3B]", // Yellow border
  },
]

export function FeaturesSection3() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 px-10 max-w-10xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Driving Success with Cutting-Edge Smart Features</h2>

      <div className="flex flex-col md:flex-row gap-3 max-w-fit mx-auto h-[400px]">
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