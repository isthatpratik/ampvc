import { ServiceCard } from "@/components/ui/service-card";

const services = [
  { title: "Vision Crafting", subtitle: "[ Strategic Advisory ]", icon: "/images/icons/vision-crafting.svg", href: "/" },
  { title: "Breakthrough to Exit", subtitle: "[ Fast Exit ]", icon: "/images/icons/exit.svg", href: "/" },
  { title: "Scaling Fuel", subtitle: "[ Growth Capital ]", icon: "/images/icons/scaling.svg", href: "/" },
];

export default function ServicesGrid({ setSelectedService }) {
  return (
    <div className="px-[40px] grid gap-2 md:grid-cols-3">
      {services.map((service) => (
        <button key={service.title} onClick={() => setSelectedService(service)}>
          <ServiceCard {...service} />
        </button>
      ))}
    </div>
  );
}
