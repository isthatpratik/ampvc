import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
}

export function ServiceCard({ title, subtitle, icon }: ServiceCardProps) {
  return (
    <Link href={'/'}>
      <div className="group relative flex flex-col items-center justify-center rounded-sm bg-transparent border-[#E4E8E8] border-[1.18px] py-6 px-2 transition-all duration-300 ease-in-out hover:bg-white">
        
        {/* SVG Image */}
        <div className="flex h-16 w-16 items-center justify-center">
          <Image 
            src={icon} 
            alt={title} 
            width={60} 
            height={60} 
            priority
            className="w-full h-auto"
          />
        </div>

        <h3 className="mb-2 text-label-1 font-semibold pt-[14px]">{title}</h3>
        <p className="text-center text-caption text-[#C4C4C4] pb-[14px]">{subtitle}</p>

        <div className="mt-4 flex w-11 h-11 bg-white items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#F2F3F3]">
          <ArrowRight className="w-7 h-7" />
        </div>
      </div>
    </Link>
  );
}
