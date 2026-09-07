import type { ProductionControlScaffoldFile } from "./types";

export const productionControlScaffold: ProductionControlScaffoldFile[] = [
  {
    path: "production-controls-kit/README.md",
    purpose: "Package overview and production-control intent.",
  },
  {
    path: "production-controls-kit/src/types.ts",
    purpose: "Shared types for the phase.",
  },
  {
    path: "production-controls-kit/src/eval-harness.ts",
    purpose: "Eval harness stages and metrics.",
  },
  {
    path: "production-controls-kit/src/drift-monitor.ts",
    purpose: "Baseline, regression, and live drift stages.",
  },
  {
    path: "production-controls-kit/src/guardrails.ts",
    purpose: "Guardrail rules for input, tool output, output, and approval.",
  },
  {
    path: "production-controls-kit/examples/finance-release-gate.ts",
    purpose: "Concrete release-gate example for future implementation.",
  },
];

export const productionControlAcceptanceCriteria = [
  "The eval harness can run a finance workflow against a versioned dataset.",
  "The drift monitor can compare a new run to a baseline snapshot.",
  "The guardrail rules are explicit enough to wire into a runtime later.",
  "The package boundary is reusable by all earlier phases.",
];
