"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCard {
  id: string;
  number: string;
  title: string;
  description: string;
  borderColor: string;
  imageUrl: string;
}

export default function FeatureCards03() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const featureCards: FeatureCard[] = [
    {
      id: "strategic-growth",
      number: "01",
      title: "Bridging Financial Gaps",
      description:
        "Interim Funding Solutions bridges financial gaps during growth, restructuring, or market shifts, providing short-term financing to sustain momentum and stability while securing long-term funding.",
      imageUrl: "/images/features/Features-0301.svg",
      borderColor: "border-[#FFAFDF]",
    },
    {
      id: "in-depth-analysis",
      number: "02",
      title: "Specialized Short-Term Funds",
      description:
        "We provide bridge loans, mezzanine financing, and tailored short-term capital solutions, ensuring minimal risk and maximum flexibility to meet your financial needs.",
      imageUrl: "/images/features/Features-0302.svg",
      borderColor: "border-[#99DBE0]",
    },
    {
      id: "customized-growth-plan",
      number: "03",
      title: "Experienced Team",
      description:
        "We assess your financial status, cash flow, and funding goals, then connect you with lenders and investors eager to support high-growth businesses. This ensures competitive terms, swift approval, and timely access to strategic opportunities.",
      imageUrl: "/images/features/Features-0303.svg",
      borderColor: "border-[#2B5C4F]",
    },
    {
      id: "best-practices",
      number: "04",
      title: "Advisory Services",
      description:
        "We provide advisory services for effective interim funding management, including financial planning, risk assessment, and repayment strategies, ensuring stability and confident decision-making.",
      imageUrl: "/images/features/Features-0304.svg",
      borderColor: "border-[#FCEC3B]",
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featureCards.length);
  }, [featureCards.length]);

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + featureCards.length) % featureCards.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="max-w-sm w-screen h-full mx-auto block md:hidden py-10 px-5 overflow-hidden">
      <h1 className="text-h5 font-bold text-center mb-8">
        Driving Success with Cutting-Edge Smart Features
      </h1>

      {/* Only show on small screens */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden h-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {featureCards.map((card, index) => (
              <div
                key={card.id}
                className="w-full flex-shrink-0 bg-gray-50 rounded-md overflow-hidden"
              >
                <div className={`h-2 w-full ${card.borderColor}`}></div>
                <div className="p-6">
                  <div
                    className="text-5xl font-semibold mb-2"
                    style={{
                      color:
                        index === 0
                          ? "#be185d"
                          : index === 1
                          ? "#0d9488"
                          : index === 2
                          ? "#065f46"
                          : "#eab308",
                    }}
                  >
                    {card.number}
                  </div>
                  <h2
                    className="text-h6 font-semibold mb-4"
                    style={{
                      color:
                        index === 0
                          ? "#be185d"
                          : index === 1
                          ? "#0d9488"
                          : index === 2
                          ? "#065f46"
                          : "#eab308",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-gray-800 mb-4 text-body-3">
                    {card.description}
                  </p>
                  <div className="w-full h-32 flex justify-center">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                  : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
