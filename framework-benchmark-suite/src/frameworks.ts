import type { FrameworkBenchmarkFramework } from "./types";

export const benchmarkFrameworks: FrameworkBenchmarkFramework[] = [
  {
    name: "LangGraph",
    bestFor: "Explicit orchestration and graph-based finance workflows",
    tradeoff: "More setup, but strong control over multi-step flows.",
    notes: "Good for deterministic routing and stateful pipelines.",
  },
  {
    name: "OpenAI Agents SDK",
    bestFor: "Tool-heavy agent flows with clean SDK ergonomics",
    tradeoff: "Tied to a vendor model stack.",
    notes: "Strong baseline for a single-agent or leader-follower build.",
  },
  {
    name: "AutoGen",
    bestFor: "Conversational multi-agent collaboration",
    tradeoff: "Less explicit than graph-first orchestration.",
    notes: "Useful when debate and handoff are core to the workflow.",
  },
  {
    name: "PydanticAI",
    bestFor: "Structured outputs and type-safe agent contracts",
    tradeoff: "Smaller surface area than orchestration-first frameworks.",
    notes: "Strong for schema-bound finance outputs.",
  },
  {
    name: "LlamaIndex",
    bestFor: "Retrieval-heavy finance tasks and agentic RAG",
    tradeoff: "Best when the core problem is data access and synthesis.",
    notes: "Natural fit for document-grounded analysis.",
  },
];
