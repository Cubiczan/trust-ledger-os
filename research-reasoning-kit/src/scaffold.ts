import type { ResearchReasoningScaffoldFile } from "./types";

export const researchReasoningScaffold: ResearchReasoningScaffoldFile[] = [
  {
    path: "research-reasoning-kit/README.md",
    purpose: "Package overview and intended use.",
  },
  {
    path: "research-reasoning-kit/src/types.ts",
    purpose: "Shared types for the phase.",
  },
  {
    path: "research-reasoning-kit/src/research-pipeline.ts",
    purpose: "Planner, researcher, validator, and synthesizer stages.",
  },
  {
    path: "research-reasoning-kit/src/reasoning-patterns.ts",
    purpose: "Reusable reasoning paradigms for finance workflows.",
  },
  {
    path: "research-reasoning-kit/src/scaffold.ts",
    purpose: "File map and acceptance criteria.",
  },
  {
    path: "research-reasoning-kit/examples/earnings-week.ts",
    purpose: "Concrete example for research plus reasoning in a busy finance week.",
  },
];

export const researchReasoningAcceptanceCriteria = [
  "A developer can reuse the research pipeline stages as a stable contract.",
  "The reasoning patterns are separated from the finance use case code.",
  "The package is ready to back a later harness or notebook implementation.",
  "The example shows how reasoning changes as evidence accumulates.",
];
