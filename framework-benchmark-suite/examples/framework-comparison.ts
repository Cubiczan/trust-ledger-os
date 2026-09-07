import { benchmarkCases, benchmarkFrameworks } from "../src";

export const frameworkComparisonExample = {
  title: "Finance framework comparison seed",
  frameworks: benchmarkFrameworks,
  cases: benchmarkCases,
  outputShape: ["quality", "latency", "cost", "control"],
};
