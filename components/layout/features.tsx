import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  isActive: boolean;
  onClick: () => void;
  imageUrl?: string;
}

export function FeaturePanel({
  number,
  title,
  description,
  color,
  borderColor,
  isActive,
  onClick,
  imageUrl,
}: FeatureProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${borderColor}",
        isActive ? "w-full md:w-[60%]" : "w-16 md:w-24"
      )}
      onClick={onClick}
      style={{ borderTop: `2px solid ${borderColor}` }}
    >
      <div
        className={cn(
          "h-full p-6 transition-colors",
          isActive ? "bg-[#F7F8F8]" : color
        )}
      >
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "text-4xl md:text-6xl font-bold",
              isActive ? "opacity-100" : "opacity-70"
            )}
          >
            {number}
          </span>

          <div
            className={cn(
              "transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-0"
            )}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-sm md:text-base max-w-2xl">{description}</p>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 w-32 h-32">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt=""
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}