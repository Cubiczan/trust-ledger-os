import type { GuardrailRule } from "./types";

export const guardrailRules: GuardrailRule[] = [
  {
    name: "Input validation",
    whenItRuns: "Before any tool call or model request.",
    action: "Reject malformed, unsafe, or out-of-scope requests.",
  },
  {
    name: "Tool-output filtering",
    whenItRuns: "After a tool returns data to the workflow.",
    action: "Redact secrets, PII, and unsupported fields before model access.",
  },
  {
    name: "Output policy check",
    whenItRuns: "Right before the result is shown or written back.",
    action: "Block disallowed financial claims, missing citations, or unsafe actions.",
  },
  {
    name: "Human approval gate",
    whenItRuns: "For high-risk or high-impact actions.",
    action: "Pause the run until an approver accepts, counters, or rejects it.",
  },
];
