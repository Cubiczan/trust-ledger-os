export type ProductionControlStage = {
  name: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
};

export type EvalMetric = {
  name: string;
  whyItMatters: string;
  howToMeasure: string;
};

export type GuardrailRule = {
  name: string;
  whenItRuns: string;
  action: string;
};

export type ProductionControlScaffoldFile = {
  path: string;
  purpose: string;
};
