import { CircularCard } from "../ui/circular-grid";
import Image from "next/image";

const solutions = [
  { 
    title: "Exit Strategy", 
    subtitle: "Portfolio Exit", 
    defaultIcon: "/images/icons/exit-strategy.svg", 
    hoverIcon: "/images/icons/exit-strategy-hover.svg" 
  },
  { 
    title: "Portfolio Pulse", 
    subtitle: "Monitoring & Reporting", 
    defaultIcon: "/images/icons/portfolio-pulse.svg", 
    hoverIcon: "/images/icons/portfolio-pulse-hover.svg" 
  },
  { 
    title: "Liquidity Move", 
    subtitle: "Secondary Buyouts", 
    defaultIcon: "/images/icons/liquidity-move.svg", 
    hoverIcon: "/images/icons/liquidity-move-hover.svg" 
  },
];

export default function SolutionsGrid({ setSelectedSolution }) {
  return (
    <div className="h-full px-5 lg:px-10 pb-6 lg:py-14 flex flex-col flex-grow flex-1 space-y-6">
      <h2 className="text-h4 lg:text-h3 text-balance">
        Smart solutions for VCs, Family Offices & Funds.
      </h2>

      <p className="text-body-2 text-[#798682] lg:text-black font-medium">
        Fueling startup success with expert guidance, strategic insights, and powerful connections.
        Turning bold ideas into thriving businesses with tailored support and investor-ready strategies.
        Empowering founders to scale faster, smarter, and stronger—because their growth drives your returns.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2 justify-between items-center w-full h-full">
        {solutions.map((solution) => (
          <button 
            key={solution.title} 
            onClick={() => setSelectedSolution(solution)} 
            className="w-full focus:outline-none"
          >
            <CircularCard
              title={solution.title}
              subtitle={solution.subtitle}
              defaultIcon={
                <Image 
                  src={solution.defaultIcon} 
                  alt={solution.title} 
                  width={60} 
                  height={60} 
                  className="w-full h-auto"
                  priority
                />
              }
              hoverIcon={
                <Image 
                  src={solution.hoverIcon} 
                  alt={`${solution.title} Hover`} 
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
    </div>
  );
}
