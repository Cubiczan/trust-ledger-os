import type { FoundationUseCase } from "./types";

export const foundationUseCases: FoundationUseCase[] = [
  {
    scenario: "Market data lookup with one deterministic source",
    decision: "non-agent",
    rationale: "A single query and schema-checked response are enough; agent loops only add latency.",
    starterArtifacts: ["typed query wrapper", "response schema", "retry policy"],
  },
  {
    scenario: "Company research across filings, news, and ratios",
    decision: "agent",
    rationale: "The task needs planning, source selection, validation, and synthesis across multiple steps.",
    starterArtifacts: ["planner", "researcher", "validator", "synthesizer"],
  },
  {
    scenario: "Policy-sensitive spend approval",
    decision: "hybrid",
    rationale: "Rules should handle deterministic checks while a human approves the final action.",
    starterArtifacts: ["policy checker", "approval gate", "audit record"],
  },
];

export const foundationDecisionRules = [
  "Use a non-agent path when the task is deterministic and single-step.",
  "Use an agent when the task must plan, inspect, or validate across multiple sources.",
  "Use a hybrid path when the workflow is sensitive, regulated, or requires approval.",
];
