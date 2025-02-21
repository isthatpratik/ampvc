import { CircularCard } from "../ui/circular-grid"

const solutions = [
  { title: "Exit Strategy", subtitle: "Portfolio Exit", href: "/exit-strategy", icon: "/images/icons/exit-strategy.svg" },
  { title: "Portfolio Pulse", subtitle: "Monitoring & Reporting", href: "/portfolio", icon: "/images/icons/portfolio-pulse.svg" },
  { title: "Liquidity Move", subtitle: "Secondary Buyouts", href: "/liquidity", icon: "/images/icons/liquidity-move.svg" },
]

export default function SolutionsGrid() {
  return (
    <div className="px-10 py-14 flex flex-col flex-grow flex-1 space-y-6">
      <h2 className="text-h3 text-balance">
        Smart solutions for VCs,
        Family Offices & Funds.
      </h2>

      <p className="text-body-2 font-medium">
      Fueling startup success with expert guidance, strategic insights, and powerful connections. Turning bold ideas into thriving businesses with tailored support and investor-ready strategies. Empowering founders to scale faster, smarter, and stronger—because their growth drives your returns.
      </p>

      <div className="flex flex-nowrap gap-2 justify-between items-center w-full">
  {solutions.map((solution) => (
    <CircularCard key={solution.title} {...solution} />
  ))}
</div>

    </div>
  )
}

