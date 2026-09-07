export type FoundationDecision = "agent" | "non-agent" | "hybrid";

export type FoundationUseCase = {
  scenario: string;
  decision: FoundationDecision;
  rationale: string;
  starterArtifacts: string[];
};

export type ModelToolMatrixRow = {
  modelFamily: string;
  bestFor: string;
  toolAccess: string;
  guardrail: string;
};

export type ScaffoldFile = {
  path: string;
  purpose: string;
};

export type PromptSkeleton = {
  role: string;
  job: string;
  sections: string[];
};
