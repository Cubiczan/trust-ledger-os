import type { FrameworkBenchmarkScaffoldFile } from "./types";

export const frameworkBenchmarkScaffold: FrameworkBenchmarkScaffoldFile[] = [
  {
    path: "framework-benchmark-suite/README.md",
    purpose: "Package overview and benchmark intent.",
  },
  {
    path: "framework-benchmark-suite/src/types.ts",
    purpose: "Shared types for benchmark dimensions and cases.",
  },
  {
    path: "framework-benchmark-suite/src/frameworks.ts",
    purpose: "Framework characteristics and tradeoffs.",
  },
  {
    path: "framework-benchmark-suite/src/benchmark-cases.ts",
    purpose: "Reusable finance scenarios for comparison runs.",
  },
  {
    path: "framework-benchmark-suite/src/scoring.ts",
    purpose: "Scoring rubric and acceptance criteria.",
  },
  {
    path: "framework-benchmark-suite/examples/framework-comparison.ts",
    purpose: "Concrete comparison input the team can expand into a harness.",
  },
];
