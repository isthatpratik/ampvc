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

export default function FeatureCards02() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const featureCards: FeatureCard[] = [
    {
      id: "strategic-growth",
      number: "01",
      title: "Maximizing Early-Stage Value",
      description:
        "Strategic Growth Consultation provides expert advisory services to accelerate business growth. Our seasoned professionals identify opportunities, optimize operations, and implement strategies to enhance performance.",
      imageUrl: "/images/features/Features-0201.svg",
      borderColor: "border-[#FFAFDF]",
    },
    {
      id: "in-depth-analysis",
      number: "02",
      title: "Thorough Analysis",
    description:
      "We analyze your company's valuation, market position, and growth potential to determine the best timing and structure for a secondary exit. Our services cover preparation, buyer identification, negotiation, and transaction management.",
    imageUrl: "/images/features/Features-0202.svg",
    borderColor: "border-[#99DBE0]", // Cyan border
    },
    {
      id: "customized-growth-plan",
      number: "03",
    title: "Customized Growth Plan",
    description:
      "This plan includes detailed strategies for market expansion, product development, revenue enhancement, and cost management. Our services also encompass identifying potential barriers to growth and devising solutions to overcome them.",
    imageUrl: "/images/features/Features-0203.svg",
    borderColor: "border-[#2B5C4F]",
    },
    {
      id: "best-practices",
      number: "04",
      title: "Best Practices & Technology",
      description:
        "We offer expert guidance on scaling operations, enhancing customer acquisition and retention, and utilizing technology to gain a competitive edge.",
      borderColor: "bg-yellow-400",
      imageUrl: "/images/features/Features-0104.svg",
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
                    <Image src={card.imageUrl} alt={card.title} className="w-full h-full object-contain" width={100} height={100}/>
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
