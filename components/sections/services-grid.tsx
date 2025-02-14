import { ServiceCard } from "@/components/ui/service-card"

const services = [
  { title: "Vision Crafting", subtitle: "[ Strategic Advisory ]", icon: "/images/icons/vision-crafting.svg", href: "/vision-crafting" },
  { title: "Breakthrough to Exit", subtitle: "[ Fast Exit ]",icon: "/images/icons/exit.svg", href: "/exit" },
  { title: "Scaling Fuel", subtitle: "[ Growth Capital ]", icon: "/images/icons/scaling.svg", href: "/scaling" },
]

export default function ServicesGrid() {
  return (
    <div className="px-[40px] grid gap-2 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  )
}

