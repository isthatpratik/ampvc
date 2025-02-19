import VisionCrafting from "./vision-crafting";
import BreakthroughExit from './breakthrough-exit'
import ScalingFuel from './scaling-fuel'

export default function ServiceDetails({ service, onBack }) {
  switch (service.title) {
    case "Vision Crafting":
      return <VisionCrafting onBack={onBack} />;
    case "Breakthrough to Exit":
      return <BreakthroughExit onBack={onBack} />;
    case "Scaling Fuel":
      return <ScalingFuel onBack={onBack} />;
    default:
      return null;
  }
}
