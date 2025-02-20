import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
}

export function CircularCard({
  title,
  subtitle,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="w-full h-full gap-4 group relative flex flex-col items-center justify-start rounded-full border-[1px] bg-transparent border-[#D5DEDE] p-6 transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
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

        <div className="grid space-y-2">
          <h3 className="mb-2 text-center text-body-1 text-balance">
            {title}
          </h3>
          <p className="text-center text-body-3 text-[#616B68] text-balance">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
