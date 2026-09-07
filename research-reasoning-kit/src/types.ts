export type ResearchReasoningStage = {
  name: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
};

export type ReasoningPattern = {
  name: string;
  whenToUse: string;
  financeUse: string;
  guardrail: string;
};

export type ResearchReasoningUseCase = {
  scenario: string;
  whyItMatters: string;
  outputs: string[];
};

export type ResearchReasoningScaffoldFile = {
  path: string;
  purpose: string;
};
