import { foundationUseCases } from "../src/decision-tree";

export const nonAgenticVsAgenticExample = {
  title: "Non-agentic vs agentic finance workflow",
  cases: foundationUseCases,
  outputShape: ["decision", "rationale", "starterArtifacts"],
};
