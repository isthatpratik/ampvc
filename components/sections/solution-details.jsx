import ExitStrategy from "./exit-strategy";

export default function SolutionDetails({ solution, onBack }) {
  switch (solution.title) {
    case "Exit Strategy":
      return <ExitStrategy onBack={onBack} />;
    // case "Breakthrough to Exit":
    //   return <BreakthroughExit onBack={onBack} />;
    // case "Scaling Fuel":
    //   return <ScalingFuel onBack={onBack} />;
    default:
      return null;
  }
}
