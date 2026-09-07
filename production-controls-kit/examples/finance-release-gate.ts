import { driftMonitoringStages, evalHarnessStages, guardrailRules } from "../src";

export const financeReleaseGateExample = {
  title: "Finance release-gate seed",
  harness: evalHarnessStages,
  driftMonitoring: driftMonitoringStages,
  guardrails: guardrailRules,
};
