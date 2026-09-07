import type { ScaffoldFile } from "./types";

export const scaffoldFiles: ScaffoldFile[] = [
  {
    path: "foundation-kit/README.md",
    purpose: "Package overview and intended use.",
  },
  {
    path: "foundation-kit/src/types.ts",
    purpose: "Shared types for the phase.",
  },
  {
    path: "foundation-kit/src/decision-tree.ts",
    purpose: "Rules for deciding when to use an agent.",
  },
  {
    path: "foundation-kit/src/model-tool-matrix.ts",
    purpose: "Model and tool selection matrix.",
  },
  {
    path: "foundation-kit/src/prompts.ts",
    purpose: "Prompt skeletons for planner/researcher/validator/synthesizer roles.",
  },
  {
    path: "foundation-kit/examples/non-agentic-vs-agentic.ts",
    purpose: "A concrete example comparing deterministic and agentic flows.",
  },
];

export const foundationAcceptanceCriteria = [
  "A developer can import the shared types and arrays without touching the page code.",
  "The decision tree clearly separates non-agent, agent, and hybrid cases.",
  "The model/tool matrix is explicit enough to support future benchmarks.",
  "The prompt skeletons are reusable across finance use cases.",
];
