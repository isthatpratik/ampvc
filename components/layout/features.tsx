import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
  imageUrl: string;
  borderColor: string;
}

const titleColors: Record<string, string> = {
  "01": "#9E2E71", 
  "02": "#2F959D",
  "03": "#2B5C4F", 
  "04": "#CFC339", 
};

export function FeaturePanel({
  number,
  title,
  description,
  color,
  isActive,
  onClick,
  imageUrl,
  borderColor,
}: FeatureProps) {
  const textColor = titleColors[number] || "#000"; 
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-t-8",
        isActive ? "w-full md:w-[65%]" : "w-20 md:w-32",
        borderColor // Apply dynamic border color
      )}
      onClick={onClick}
    >
      <div className={cn("h-full p-6 transition-colors", color)}>
        <div className="flex flex-col items-start gap-4">
          {/* Number & Title with Proper Spacing */}
          <div className="flex items-start gap-2">
            <span
              className={cn(
                "font-bold leading-none flex-shrink-0",
                isActive ? "text-h5 opacity-100" : "text-h2 opacity-70"
              )}
              style={{ color: textColor }} 
            >
              {number}
            </span>
            {isActive && (
              <h3 className="text-h5 font-semibold leading-none" style={{ color: textColor }}>{title}</h3>
              
            )}

          </div>
          

          {/* Description & Image */}
          <div className="grid grid-cols-12 mt-4 gap-0">
            
            <div
              className={cn(
                "transition-opacity duration-300 col-span-7",
                isActive ? "opacity-100" : "opacity-0"
              )}
            >
               <p className="text-body-3 max-w-2xl text-balance">{description}</p>
            </div>
            
            {/* Image Section */}
            <div
              className={cn(
                "absolute transition-all duration-300",
                isActive
                  ? "right-0 bottom-6 col-span-4" // Active: Normal position
                  : "bottom-0 left-1 transform -translate-x-2 scale-90" // Inactive: Bottom-centered & smaller
              )}
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt=""
                width={140}
                height={140}
                className={cn(
                  "transition-all duration-300",
                  isActive
                    ? "xl:w-fit 2xl:w-60 h-auto object-contain grayscale-0 opacity-100" // Active: Full size
                    : "w-48 h-48 translate-y-12 object-cover opacity-50" // Inactive: Smaller & blended
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
