import type { ModelToolMatrixRow } from "./types";

export const modelToolMatrix: ModelToolMatrixRow[] = [
  {
    modelFamily: "Closed-source reasoning model",
    bestFor: "Complex synthesis and planning",
    toolAccess: "Controlled tool use with explicit approvals",
    guardrail: "Require source citations and schema validation on outputs.",
  },
  {
    modelFamily: "Open-source general model",
    bestFor: "Low-cost experiments and local iteration",
    toolAccess: "Narrow tool set with deterministic inputs",
    guardrail: "Keep retrieval and tool boundaries explicit.",
  },
  {
    modelFamily: "Specialized finance model",
    bestFor: "Finance-specific summarization and classification",
    toolAccess: "Read-only data access for analysis",
    guardrail: "Never let the model invent unsupported numbers.",
  },
];
