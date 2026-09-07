import type { ResearchReasoningStage, ResearchReasoningUseCase } from "./types";

export const researchPipelineStages: ResearchReasoningStage[] = [
  {
    name: "Planner",
    purpose: "Break a finance question into source-specific sub-questions and research steps.",
    inputs: ["user question", "scope", "constraints"],
    outputs: ["research plan", "evidence checklist", "open questions"],
  },
  {
    name: "Researcher",
    purpose: "Collect filings, news, market data, and internal docs with citations.",
    inputs: ["research plan", "tool access", "source list"],
    outputs: ["evidence log", "source notes", "candidate claims"],
  },
  {
    name: "Validator",
    purpose: "Check whether the evidence supports each claim before anything is synthesized.",
    inputs: ["evidence log", "candidate claims", "schema"],
    outputs: ["validated claims", "gaps", "rejections"],
  },
  {
    name: "Synthesizer",
    purpose: "Turn validated findings into an executive-ready brief or memo.",
    inputs: ["validated claims", "audience", "required format"],
    outputs: ["brief", "risks", "next actions"],
  },
];

export const researchReasoningUseCases: ResearchReasoningUseCase[] = [
  {
    scenario: "Fundamental analysis for a public company",
    whyItMatters: "Exercises data extraction, synthesis, and decision framing in one loop.",
    outputs: ["financial summary", "valuation notes", "risk flags"],
  },
  {
    scenario: "Analyst-grade deep search on a complex finance question",
    whyItMatters: "Needs planning, multi-source research, validation, and grounded synthesis.",
    outputs: ["research memo", "evidence trail", "open questions"],
  },
  {
    scenario: "Earnings-week reasoning under time pressure",
    whyItMatters: "Tests whether the system can revise its reasoning as new evidence arrives.",
    outputs: ["refined thesis", "decision rationale", "follow-up checklist"],
  },
];
