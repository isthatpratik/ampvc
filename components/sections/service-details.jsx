import VisionCrafting from "./vision-crafting";
// import ExitStrategyLayout from "./ExitStrategyLayout";
// import ScalingFuelLayout from "./ScalingFuelLayout";

export default function ServiceDetails({ service, onBack }) {
  switch (service.title) {
    case "Vision Crafting":
      return <VisionCrafting onBack={onBack} />;
    // case "Breakthrough to Exit":
    //   return <ExitStrategyLayout onBack={onBack} />;
    // case "Scaling Fuel":
    //   return <ScalingFuelLayout onBack={onBack} />;
    default:
      return null;
  }
}
