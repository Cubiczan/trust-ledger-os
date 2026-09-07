import {
  foundationAcceptanceCriteria,
  foundationDecisionRules,
  foundationUseCases,
  modelToolMatrix,
  promptSkeletons,
  scaffoldFiles as foundationScaffold,
} from "../foundation-kit/src";
import {
  benchmarkAcceptanceCriteria,
  benchmarkCases,
  benchmarkFrameworks,
  frameworkBenchmarkScaffold,
  scoringRows,
} from "../framework-benchmark-suite/src";
import {
  researchPipelineStages,
  researchReasoningAcceptanceCriteria,
  researchReasoningScaffold,
  researchReasoningUseCases,
  reasoningPatterns,
} from "../research-reasoning-kit/src";
import {
  driftMonitoringStages,
  evalHarnessStages,
  evalMetrics,
  guardrailRules,
  productionControlAcceptanceCriteria,
  productionControlScaffold,
} from "../production-controls-kit/src";

export const trustLedgerOSManifest = {
  product: {
    name: "Trust Ledger OS",
    description: "A trust and risk control plane for AI teams.",
    tagline: "Every high-impact change is reviewed, traced, and recorded before it reaches customers or cash.",
  },
  mirrors: ["icohangar-ops/trust-ledger-os", "Cubiczan/trust-ledger-os"],
  routes: [
    { path: "/", label: "Landing page" },
    { path: "/foundation", label: "Foundation scaffold" },
    { path: "/framework-benchmark", label: "Framework benchmark scaffold" },
    { path: "/research-reasoning", label: "Research and reasoning scaffold" },
    { path: "/production-controls", label: "Production controls scaffold" },
  ],
  phases: [
    {
      id: "foundation",
      title: "Foundation kit",
      summary: "Shared agent glossary, decision tree, model/tool matrix, and prompt skeletons.",
      packageRoot: "foundation-kit/",
      route: "/foundation",
    },
    {
      id: "framework-benchmark",
      title: "Framework benchmark suite",
      summary: "Framework profiles, comparison cases, and scoring rubric.",
      packageRoot: "framework-benchmark-suite/",
      route: "/framework-benchmark",
    },
    {
      id: "research-reasoning",
      title: "Research and reasoning kit",
      summary: "Planner, researcher, validator, synthesizer, and reusable reasoning patterns.",
      packageRoot: "research-reasoning-kit/",
      route: "/research-reasoning",
    },
    {
      id: "production-controls",
      title: "Production controls kit",
      summary: "Eval harness, drift monitor, guardrails, and release gate.",
      packageRoot: "production-controls-kit/",
      route: "/production-controls",
    },
  ],
  packageCatalog: [
    {
      kind: "npm",
      name: "@cubiczan/trust-ledger-os",
      root: "packages/npm/",
      exports: ["manifest", "phase catalog", "route catalog"],
    },
    {
      kind: "pypi",
      name: "trust-ledger-os",
      root: "packages/python/",
      exports: ["manifest", "phases", "route map"],
    },
    {
      kind: "mcp",
      name: "trust-ledger-os-mcp",
      root: "packages/mcp/",
      exports: ["tool catalog", "resource catalog", "prompting guidance"],
    },
  ],
  phaseData: {
    foundation: {
      useCases: foundationUseCases,
      decisionRules: foundationDecisionRules,
      modelToolMatrix,
      promptSkeletons,
      scaffold: foundationScaffold,
      acceptanceCriteria: foundationAcceptanceCriteria,
    },
    frameworkBenchmark: {
      frameworks: benchmarkFrameworks,
      cases: benchmarkCases,
      scoring: scoringRows,
      scaffold: frameworkBenchmarkScaffold,
      acceptanceCriteria: benchmarkAcceptanceCriteria,
    },
    researchReasoning: {
      pipeline: researchPipelineStages,
      reasoningPatterns,
      scaffold: researchReasoningScaffold,
      useCases: researchReasoningUseCases,
      acceptanceCriteria: researchReasoningAcceptanceCriteria,
    },
    productionControls: {
      evalHarness: evalHarnessStages,
      metrics: evalMetrics,
      driftMonitoring: driftMonitoringStages,
      guardrails: guardrailRules,
      scaffold: productionControlScaffold,
      acceptanceCriteria: productionControlAcceptanceCriteria,
    },
  },
} as const;

export type TrustLedgerOSManifest = typeof trustLedgerOSManifest;

export const trustLedgerOSPhaseCatalog = trustLedgerOSManifest.phases;
export const trustLedgerOSRouteCatalog = trustLedgerOSManifest.routes;
export const trustLedgerOSPackageCatalog = trustLedgerOSManifest.packageCatalog;
