import type { FrameworkBenchmarkScoringRow } from "./types";

export const scoringRows: FrameworkBenchmarkScoringRow[] = [
  {
    dimension: "quality",
    whatToScore: "Does the framework produce the correct finance answer and keep evidence grounded?",
    howToMeasure: "Human review plus schema checks and reference-based evals.",
  },
  {
    dimension: "latency",
    whatToScore: "How long does the same task take end to end?",
    howToMeasure: "Wall-clock time per run and per tool call.",
  },
  {
    dimension: "cost",
    whatToScore: "How much spend does the task require under the same workload?",
    howToMeasure: "Token and tool usage per completed run.",
  },
  {
    dimension: "control",
    whatToScore: "How well can the team inspect, govern, and reproduce the workflow?",
    howToMeasure: "Trace completeness, branching clarity, and config transparency.",
  },
];

export const benchmarkAcceptanceCriteria = [
  "The same finance task can be executed across at least three frameworks.",
  "Every run records quality, latency, cost, and control observations.",
  "The output includes a short decision memo that recommends a default framework.",
  "Future phases can reuse the benchmark inputs as regression fixtures.",
];
