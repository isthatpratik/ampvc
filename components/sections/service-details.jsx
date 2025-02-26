import VisionCrafting from "./vision-crafting";
import ScalingFuel from './scaling-fuel'
import ExitBreakthrough from "./exit-breakthrough";

export default function ServiceDetails({ service, onBack }) {
  switch (service.title) {
    case "Vision Crafting":
      return <VisionCrafting onBack={onBack} />;
    case "Exit Breakthrough":
      return <ExitBreakthrough onBack={onBack} />;
    case "Scaling Fuel":
      return <ScalingFuel onBack={onBack} />;
    default:
      return null;
  }
}
