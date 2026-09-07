import type { ProductionControlStage } from "./types";

export const driftMonitoringStages: ProductionControlStage[] = [
  {
    name: "Baseline capture",
    purpose: "Store the current behavior of the workflow so later changes can be compared.",
    inputs: ["baseline traces", "baseline scores", "baseline prompts"],
    outputs: ["baseline snapshot", "expected ranges"],
  },
  {
    name: "Regression check",
    purpose: "Re-run the same eval set when prompts, models, or tools change.",
    inputs: ["new build", "baseline snapshot", "comparison rules"],
    outputs: ["delta report", "regression flags"],
  },
  {
    name: "Production signal",
    purpose: "Watch live traces for changes in score, latency, and failure patterns.",
    inputs: ["live traces", "SLIs", "thresholds"],
    outputs: ["drift alerts", "incident candidates"],
  },
];
