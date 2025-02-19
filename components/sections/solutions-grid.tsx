import { CircularCard } from "../ui/circular-grid"

const solutions = [
  { title: "Exit Strategy", subtitle: "Portfolio Exit", href: "/exit-strategy", icon: "/images/icons/exit-strategy.svg" },
  { title: "Portfolio Pulse", subtitle: "Monitoring & Reporting", href: "/portfolio", icon: "/images/icons/portfolio-pulse.svg" },
  { title: "Liquidity Move", subtitle: "Secondary Buyouts", href: "/liquidity", icon: "/images/icons/liquidity-move.svg" },
]

export default function SolutionsGrid() {
  return (
    <div className="px-[40px] py-[56px] grid space-y-6">
      <h2 className="text-h3">
        Smart solutions for VCs,
        <br />
        Family Offices & Funds.
      </h2>

      <div className="grid gap-2 md:grid-cols-3">
        {solutions.map((solution) => (
          <CircularCard key={solution.title} {...solution} />
        ))}
      </div>
    </div>
  )
}

