"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCard {
  id: string
  number: string
  title: string
  description: string
  borderColor: string
  illustration: React.ReactNode
}

export default function FeatureCardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const featureCards: FeatureCard[] = [
    {
      id: "strategic-growth",
      number: "01",
      title: "Strategic Growth Consultation",
      description:
        "Strategic Growth Consultation offers expert advisory services to accelerate your business. Our seasoned professionals identify opportunities, optimize operations, and implement strategies to drive performance and success.",
      borderColor: "bg-pink-400",
      illustration: (
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-300 rotate-45 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-12 h-12 bg-pink-300 absolute top-8"></div>
              <div className="w-14 h-14 bg-emerald-800 absolute top-16"></div>
              <div className="w-8 h-8 bg-white border border-gray-300 absolute bottom-4 left-[-20px]"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full absolute top-0 left-8"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full absolute right-0 top-12"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "in-depth-analysis",
      number: "02",
      title: "In-Depth Analysis",
      description:
        "We start with a deep analysis of your market position, operations, and competition. Our experts then work with your leadership to craft a tailored growth plan that aligns with your goals and vision.",
      borderColor: "bg-teal-500",
      illustration: (
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-14 h-14 bg-white border border-gray-300 absolute top-0"></div>
              <div className="w-14 h-14 bg-emerald-800 absolute top-8 left-4"></div>
              <div className="w-14 h-14 bg-teal-300 absolute top-16 left-[-10px]"></div>
              <div className="w-16 h-16 flex items-center justify-center absolute top-0 left-0">
                <div className="w-10 h-6 border-2 border-gray-500 rounded-full relative">
                  <div className="w-6 h-6 bg-pink-300 rounded-full absolute left-2 top-0"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full absolute left-3.5 top-1.5"></div>
                </div>
              </div>
              <div className="w-2 h-2 bg-yellow-300 rounded-full absolute left-[-20px] top-12"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full absolute right-[-10px] top-0"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "customized-growth-plan",
      number: "03",
      title: "Customized Growth Plan",
      description:
        "The plan outlines strategies for market expansion, product development, revenue growth, and cost management. We also identify potential obstacles and provide solutions to ensure sustainable success.",
      borderColor: "bg-emerald-800",
      illustration: (
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-300 absolute top-0 left-8 transform -rotate-12">
                <div className="w-16 h-16 bg-yellow-300 absolute top-0 left-0 border-2 border-yellow-400"></div>
              </div>
              <div className="w-14 h-14 bg-emerald-800 absolute top-8"></div>
              <div className="w-14 h-14 bg-gray-200 absolute top-16 left-8"></div>
              <div className="w-8 h-8 bg-white border border-gray-300 absolute top-0 left-[-20px]"></div>
              <div className="w-2 h-2 bg-teal-300 rounded-full absolute left-[-10px] top-12"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full absolute right-[-10px] top-8"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full absolute bottom-[-10px] left-16"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "best-practices",
      number: "04",
      title: "Best Practices & Technology",
      description:
        "We offer expert guidance on scaling operations, enhancing customer acquisition and retention, and utilizing technology to gain a competitive edge.",
      borderColor: "bg-yellow-400",
      illustration: (
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-24 h-24 bg-pink-300 rounded-full absolute top-0"></div>
              <div className="w-8 h-8 bg-teal-300 absolute top-0 left-[-30px]"></div>
              <div className="w-8 h-8 bg-yellow-300 absolute bottom-8 right-[-20px]"></div>
              <div className="border-dashed border-2 border-gray-400 w-40 h-20 rounded-full absolute top-12 left-[-20px] transform -rotate-12"></div>
              <div className="w-2 h-2 bg-emerald-800 rounded-full absolute top-12 left-0"></div>
              <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-16 left-[-40px]"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full absolute right-0 top-8"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full absolute bottom-[-10px] right-8"></div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featureCards.length)
  }, [featureCards.length])

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + featureCards.length) % featureCards.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    // Auto slide every 5 seconds if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, nextSlide])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className="w-full max-w-md mx-auto block md:hidden">
      <h1 className="text-4xl font-bold text-center mb-8">Driving Success with Cutting-Edge Smart Features</h1>

      {/* Only show on small screens */}
      <div className="relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {featureCards.map((card, index) => (
              <div key={card.id} className="w-full flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                <div className={`h-2 w-full ${card.borderColor}`}></div>
                <div className="p-6">
                  <div
                    className="text-5xl font-semibold mb-2"
                    style={{
                      color: index === 0 ? "#be185d" : index === 1 ? "#0d9488" : index === 2 ? "#065f46" : "#eab308",
                    }}
                  >
                    {card.number}
                  </div>
                  <h2
                    className="text-3xl font-semibold mb-4"
                    style={{
                      color: index === 0 ? "#be185d" : index === 1 ? "#0d9488" : index === 2 ? "#065f46" : "#eab308",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-gray-800 mb-6 text-lg">{card.description}</p>
                  {card.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {featureCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? index === 0
                    ? "bg-pink-500 w-4"
                    : index === 1
                      ? "bg-teal-500 w-4"
                      : index === 2
                        ? "bg-emerald-800 w-4"
                        : "bg-yellow-400 w-4"
                  : "bg-gray-300",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}