import ExitStrategy from "./exit-strategy";
import PortfolioPulse from './portfolio-pulse';
import LiquidityMove from './liquidity-move';

export default function SolutionDetails({ solution, onBack }) {
  switch (solution.title) {
    case "Exit Strategy":
      return <ExitStrategy onBack={onBack} />;
    case "Portfolio Pulse":
      return <PortfolioPulse onBack={onBack} />;
    case "Liquidity Move":
      return <LiquidityMove onBack={onBack} />;
    default:
      return null;
  }
}
