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
      <div className="group relative flex flex-col items-center justify-center rounded-[350px] border bg-transparent border-[#E4E8E8] py-6 px-2 transition-all duration-300 ease-in-out hover:bg-white">
        
        {/* SVG Image */}
        <div className="flex h-16 w-16 items-center justify-center">
          <Image 
            src={icon} 
            alt={title} 
            width={60} 
            height={60} 
            className="w-full h-auto"
          />
        </div>

        <h3 className="mb-2 text-body-1 pt-4">{title}</h3>
        <p className="text-center text-body-2 text-[#B6B6B6] pb-4">{subtitle}</p>

      </div>
    </Link>
  );
}
