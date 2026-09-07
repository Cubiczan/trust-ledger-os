import type { EvalMetric, ProductionControlStage } from "./types";

export const evalHarnessStages: ProductionControlStage[] = [
  {
    name: "Dataset builder",
    purpose: "Collect labeled examples, edge cases, and regression fixtures for finance workflows.",
    inputs: ["production traces", "human labels", "failure taxonomy"],
    outputs: ["versioned eval dataset", "sample weights", "gold labels"],
  },
  {
    name: "Harness runner",
    purpose: "Run the same workflow across model or prompt versions and capture the trace.",
    inputs: ["eval dataset", "workflow version", "runtime config"],
    outputs: ["run results", "trace log", "scorecard"],
  },
  {
    name: "Judge calibration",
    purpose: "Compare LLM judge outputs against human labels and tighten the rubric.",
    inputs: ["model outputs", "human labels", "judge prompt"],
    outputs: ["calibration report", "agreement score", "judge adjustments"],
  },
  {
    name: "Release gate",
    purpose: "Block or allow a model, prompt, or workflow change based on the scorecard.",
    inputs: ["scorecard", "thresholds", "approval policy"],
    outputs: ["release decision", "audit record", "next actions"],
  },
];

export const evalMetrics: EvalMetric[] = [
  {
    name: "Output quality",
    whyItMatters: "Shows whether the answer is correct and evidence-grounded.",
    howToMeasure: "Reference comparison plus schema validation and human review.",
  },
  {
    name: "Trajectory quality",
    whyItMatters: "Shows whether the agent took the right path, not just the right answer.",
    howToMeasure: "Trace assertions against the expected workflow steps.",
  },
  {
    name: "Safety and compliance",
    whyItMatters: "Captures policy, PII, and fairness failures before release.",
    howToMeasure: "Red-team tests, rule checks, and manual review.",
  },
  {
    name: "Efficiency",
    whyItMatters: "Shows if the workflow is affordable and fast enough for production.",
    howToMeasure: "Tokens, tool calls, latency, and cost per run.",
  },
];
