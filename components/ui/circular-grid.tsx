import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: string; 
}

export function CircularCard({ title, subtitle, href, icon }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group relative flex flex-col items-center justify-center rounded-full border-[1.18px] bg-transparent border-[#D5DEDE] py-6 px-2 transition-all duration-300 ease-in-out hover:bg-white">
        
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

        <h3 className="mb-2 text-body-1 pt-4">{title}</h3>
        <p className="text-center text-body-3 text-[#616B68] pb-4">{subtitle}</p>

      </div>
    </Link>
  );
}
