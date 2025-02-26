import { ServiceCard } from "@/components/ui/service-card";

const services = [
  { title: "Vision Crafting", subtitle: "[ Strategic Advisory ]", icon: "/images/icons/vision-crafting.svg", href: "" },
  { title: "Exit Breakthrough", subtitle: "[ Fast Exit ]", icon: "/images/icons/exit.svg", href: "" },
  { title: "Scaling Fuel", subtitle: "[ Growth Capital ]", icon: "/images/icons/scaling.svg", href: "" },
];

export default function ServicesGrid({ setSelectedService }) {
  return (
    <div className="lg:px-10 px-5 grid gap-2 lg:grid-cols-3">
      {services.map((service) => (
        <button key={service.title} onClick={() => setSelectedService(service)} className="flex h-full w-full">
          <ServiceCard {...service} />
        </button>
      ))}
    </div>
  );
}
