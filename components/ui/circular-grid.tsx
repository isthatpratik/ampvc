import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
}

export function CircularCard({
  title,
  subtitle,
  icon,
}: ServiceCardProps) {
  return (
    <div className="flex flex-1 aspect-square items-center justify-center">
      <div className="w-full h-full lg:gap-4 py-6 px-4 lg:p-6 group relative flex lg:flex-col flex-grow items-center justify-center lg:rounded-full border-[1px] bg-transparent border-[#D5DEDE] transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
        {/* SVG Image */}
        <div className="flex w-15 h-15 items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            priority
            className="w-full h-full aspect-square"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <h3 className="mb-2 text-center text-body-1 text-balance">
            {title}
          </h3>
          <p className="text-center text-body-3 text-[#616B68] text-balance">
            {subtitle}
          </p>
        </div>

        <div className="flex-shrink-0 lg:hidden lg:mt-4 flex w-11 h-11 bg-[#F2F3F3] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#181A1A]">
          <ArrowRight className="w-4 h-4 group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
