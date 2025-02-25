import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
}

export function ServiceCard({ title, subtitle, icon }: ServiceCardProps) {
  return (
    <Link href={"/"} className="w-full h-full">
      <div className="group h-full flex flex-col items-center justify-between rounded-sm bg-transparent border-[#E4E8E8] border-[1px] p-6 transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
        {/* SVG Image */}
        <div className="flex h-16 w-16 items-center justify-center aspect-square">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            priority
            className="w-full h-auto aspect-square"
          />
        </div>

        {/* Force text area to take equal height */}
        <div className="flex-1 flex flex-col justify-center text-center py-[14px]">
          <h3 className="mb-2 text-label-1 font-medium">{title}</h3>
          <p className="text-caption text-[#C4C4C4] transition-all duration-300 group-hover:text-[#B6B6B6]">
            {subtitle}
          </p>
        </div>

        {/* Arrow button stays at bottom */}
        <div className="mt-4 flex w-11 h-11 bg-[#F2F3F3] items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#181A1A]">
          <ArrowRight className="w-5 h-5 group-hover:text-white transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </Link>
  );
}