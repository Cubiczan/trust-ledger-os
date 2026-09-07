import type { PromptSkeleton } from "./types";

export const promptSkeletons: PromptSkeleton[] = [
  {
    role: "Planner",
    job: "Break a finance request into source-specific sub-questions.",
    sections: ["Goal", "Inputs", "Constraints", "Deliverables"],
  },
  {
    role: "Researcher",
    job: "Gather supporting evidence from filings, docs, and news.",
    sections: ["Search strategy", "Evidence log", "Open questions"],
  },
  {
    role: "Validator",
    job: "Check whether the gathered evidence actually supports the claim.",
    sections: ["Claim", "Evidence", "Gap analysis", "Decision"],
  },
  {
    role: "Synthesizer",
    job: "Turn validated evidence into an executive-ready brief.",
    sections: ["Headline", "Key points", "Risks", "Next actions"],
  },
];
