import type { ReasoningPattern } from "./types";

export const reasoningPatterns: ReasoningPattern[] = [
  {
    name: "Self-refine",
    whenToUse: "When the first pass is likely incomplete or too rough.",
    financeUse: "Tighten an investment thesis before it reaches a committee.",
    guardrail: "Keep refinement grounded in the original evidence set.",
  },
  {
    name: "Self-consistency",
    whenToUse: "When multiple reasoning paths should converge before a decision.",
    financeUse: "Compare several stock views and aggregate into one recommendation.",
    guardrail: "Do not treat majority vote as truth without evidence checks.",
  },
  {
    name: "ReAct",
    whenToUse: "When the agent must alternate between thinking and using tools.",
    financeUse: "Fetch market data, inspect filings, then revise the answer.",
    guardrail: "Make tool outputs explicit instead of blending them into the answer.",
  },
  {
    name: "Reflection",
    whenToUse: "When a second pass should critique the first pass.",
    financeUse: "Review whether a memo overstates unsupported upside.",
    guardrail: "Require the critique to cite the evidence it is challenging.",
  },
  {
    name: "Tree-of-thoughts",
    whenToUse: "When the problem benefits from branching and pruning ideas.",
    financeUse: "Explore multiple pre-earnings hedge scenarios before choosing one.",
    guardrail: "Prune branches using explicit criteria, not model intuition alone.",
  },
  {
    name: "Language Agent Tree Search",
    whenToUse: "When the system should search, evaluate, and backpropagate signals across paths.",
    financeUse: "Test a portfolio trim decision across multiple evidence paths.",
    guardrail: "Keep scoring and backpropagation auditable.",
  },
];
