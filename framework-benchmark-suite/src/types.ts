export type FrameworkBenchmarkDimension = "quality" | "latency" | "cost" | "control";

export type FrameworkBenchmarkFramework = {
  name: string;
  bestFor: string;
  tradeoff: string;
  notes: string;
};

export type FrameworkBenchmarkCase = {
  scenario: string;
  whyItMatters: string;
  expectedOutput: string;
  goodFitFrameworks: string[];
};

export type FrameworkBenchmarkScoringRow = {
  dimension: FrameworkBenchmarkDimension;
  whatToScore: string;
  howToMeasure: string;
};

export type FrameworkBenchmarkScaffoldFile = {
  path: string;
  purpose: string;
};
