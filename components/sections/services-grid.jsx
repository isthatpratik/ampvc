import { ServiceCard } from "@/components/ui/service-card";
import Image from "next/image";

const services = [
  { 
    title: "Vision Crafting", 
    subtitle: "[ Strategic Advisory ]", 
    defaultIcon: "/images/icons/vision-crafting.svg", 
    hoverIcon: "/images/icons/vision-crafting-hover.svg" 
  },
  { 
    title: "Exit Breakthrough", 
    subtitle: "[ Fast Exit ]", 
    defaultIcon: "/images/icons/exit.svg", 
    hoverIcon: "/images/icons/exit-breakthrough-hover.svg" 
  },
  { 
    title: "Scaling Fuel", 
    subtitle: "[ Growth Capital ]", 
    defaultIcon: "/images/icons/scaling.svg", 
    hoverIcon: "/images/icons/scaling-fuel-hover.svg" 
  },
];

export default function ServicesGrid({ setSelectedService }) {
  return (
    <div className="lg:px-10 px-5 grid gap-2 md:grid-cols-3 lg:grid-cols-3">
      {services.map((service) => (
        <button 
          key={service.title} 
          onClick={() => setSelectedService(service)} 
          className="flex h-full w-full focus:outline-none"
        >
          <ServiceCard
            title={service.title}
            subtitle={service.subtitle}
            defaultIcon={
              <Image 
                src={service.defaultIcon} 
                alt={service.title} 
                width={60} 
                height={60} 
                className="w-full h-auto"
                priority
              />
            }
            hoverIcon={
              <Image 
                src={service.hoverIcon} 
                alt={`${service.title} Hover`} 
                width={60} 
                height={60} 
                className="w-full h-auto"
                priority
              />
            }
          />
        </button>
      ))}
    </div>
  );
}
