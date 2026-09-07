import type { FrameworkBenchmarkCase } from "./types";

export const benchmarkCases: FrameworkBenchmarkCase[] = [
  {
    scenario: "Summarize a public company from filings, ratios, and news",
    whyItMatters: "Exercises orchestration, retrieval, synthesis, and output control in one flow.",
    expectedOutput: "A structured investment memo with sources and caveats.",
    goodFitFrameworks: ["LangGraph", "OpenAI Agents SDK", "LlamaIndex"],
  },
  {
    scenario: "Produce a regulator-friendly KYC decision with audit trail",
    whyItMatters: "Tests type safety, schema validation, and compliance-friendly traceability.",
    expectedOutput: "A decision object with reason codes and a traceable review path.",
    goodFitFrameworks: ["PydanticAI", "LangGraph", "OpenAI Agents SDK"],
  },
  {
    scenario: "Run an adversarial investment debate with bull, bear, and judge",
    whyItMatters: "Highlights multi-agent collaboration and managed disagreement.",
    expectedOutput: "A final recommendation that records the debate outcome.",
    goodFitFrameworks: ["AutoGen", "LangGraph"],
  },
];
