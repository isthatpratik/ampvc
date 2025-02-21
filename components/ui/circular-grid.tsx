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
    <Link href={href} className="h-full w-full">
      <div className="w-full h-full gap-4 p-6 group relative flex flex-col flex-grow items-center justify-start rounded-full border-[1px] bg-transparent border-[#D5DEDE] transition-all duration-300 ease-in-out hover:bg-[#F7F8F8]">
        {/* SVG Image */}
        <div className="flex h-16 w-16 items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            priority
            className="w-full h-full aspect-[1/1]"
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
      </div>
    </Link>
  );
}
