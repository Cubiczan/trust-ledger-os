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
} as const;

export const trustLedgerOSPhaseData = {
  foundation: {
    useCases: [
      {
        scenario: "Market data lookup with one deterministic source",
        decision: "non-agent",
        rationale: "A single query and schema-checked response are enough; agent loops only add latency.",
        starterArtifacts: ["typed query wrapper", "response schema", "retry policy"],
      },
      {
        scenario: "Company research across filings, news, and ratios",
        decision: "agent",
        rationale: "The task needs planning, source selection, validation, and synthesis across multiple steps.",
        starterArtifacts: ["planner", "researcher", "validator", "synthesizer"],
      },
      {
        scenario: "Policy-sensitive spend approval",
        decision: "hybrid",
        rationale: "Rules should handle deterministic checks while a human approves the final action.",
        starterArtifacts: ["policy checker", "approval gate", "audit record"],
      },
    ],
    decisionRules: [
      "Use a non-agent path when the task is deterministic and single-step.",
      "Use an agent when the task must plan, inspect, or validate across multiple sources.",
      "Use a hybrid path when the workflow is sensitive, regulated, or requires approval.",
    ],
    modelToolMatrix: [
      {
        modelFamily: "Closed-source reasoning model",
        bestFor: "Complex synthesis and planning",
        toolAccess: "Controlled tool use with explicit approvals",
        guardrail: "Require source citations and schema validation on outputs.",
      },
      {
        modelFamily: "Open-source general model",
        bestFor: "Low-cost experiments and local iteration",
        toolAccess: "Narrow tool set with deterministic inputs",
        guardrail: "Keep retrieval and tool boundaries explicit.",
      },
      {
        modelFamily: "Specialized finance model",
        bestFor: "Finance-specific summarization and classification",
        toolAccess: "Read-only data access for analysis",
        guardrail: "Never let the model invent unsupported numbers.",
      },
    ],
    promptSkeletons: [
      {
        role: "Planner",
        job: "Break a finance request into source-specific sub-questions.",
        sections: ["Goal", "Inputs", "Constraints", "Deliverables"],
      },
      {
        role: "Researcher",
        job: "Gather supporting evidence from filings, docs, and news.",
        sections: ["Search strategy", "Evidence log", "Open questions"],
      },
      {
        role: "Validator",
        job: "Check whether the gathered evidence actually supports the claim.",
        sections: ["Claim", "Evidence", "Gap analysis", "Decision"],
      },
      {
        role: "Synthesizer",
        job: "Turn validated evidence into an executive-ready brief.",
        sections: ["Headline", "Key points", "Risks", "Next actions"],
      },
    ],
    scaffold: [
      { path: "foundation-kit/README.md", purpose: "Package overview and intended use." },
      { path: "foundation-kit/src/types.ts", purpose: "Shared types for the phase." },
      { path: "foundation-kit/src/decision-tree.ts", purpose: "Rules for deciding when to use an agent." },
      { path: "foundation-kit/src/model-tool-matrix.ts", purpose: "Model and tool selection matrix." },
      { path: "foundation-kit/src/prompts.ts", purpose: "Prompt skeletons for planner/researcher/validator/synthesizer roles." },
      { path: "foundation-kit/examples/non-agentic-vs-agentic.ts", purpose: "A concrete example comparing deterministic and agentic flows." },
    ],
    acceptanceCriteria: [
      "A developer can import the shared types and arrays without touching the page code.",
      "The decision tree clearly separates non-agent, agent, and hybrid cases.",
      "The model/tool matrix is explicit enough to support future benchmarks.",
      "The prompt skeletons are reusable across finance use cases.",
    ],
  },
  frameworkBenchmark: {
    frameworks: [
      { name: "LangGraph", bestFor: "Explicit orchestration and graph-based finance workflows", tradeoff: "More setup, but strong control over multi-step flows.", notes: "Good for deterministic routing and stateful pipelines." },
      { name: "OpenAI Agents SDK", bestFor: "Tool-heavy agent flows with clean SDK ergonomics", tradeoff: "Tied to a vendor model stack.", notes: "Strong baseline for a single-agent or leader-follower build." },
      { name: "AutoGen", bestFor: "Conversational multi-agent collaboration", tradeoff: "Less explicit than graph-first orchestration.", notes: "Useful when debate and handoff are core to the workflow." },
      { name: "PydanticAI", bestFor: "Structured outputs and type-safe agent contracts", tradeoff: "Smaller surface area than orchestration-first frameworks.", notes: "Strong for schema-bound finance outputs." },
      { name: "LlamaIndex", bestFor: "Retrieval-heavy finance tasks and agentic RAG", tradeoff: "Best when the core problem is data access and synthesis.", notes: "Natural fit for document-grounded analysis." },
    ],
    cases: [
      { scenario: "Summarize a public company from filings, ratios, and news", whyItMatters: "Exercises orchestration, retrieval, synthesis, and output control in one flow.", expectedOutput: "A structured investment memo with sources and caveats.", goodFitFrameworks: ["LangGraph", "OpenAI Agents SDK", "LlamaIndex"] },
      { scenario: "Produce a regulator-friendly KYC decision with audit trail", whyItMatters: "Tests type safety, schema validation, and compliance-friendly traceability.", expectedOutput: "A decision object with reason codes and a traceable review path.", goodFitFrameworks: ["PydanticAI", "LangGraph", "OpenAI Agents SDK"] },
      { scenario: "Run an adversarial investment debate with bull, bear, and judge", whyItMatters: "Highlights multi-agent collaboration and managed disagreement.", expectedOutput: "A final recommendation that records the debate outcome.", goodFitFrameworks: ["AutoGen", "LangGraph"] },
    ],
    scoring: [
      { dimension: "quality", whatToScore: "Does the framework produce the correct finance answer and keep evidence grounded?", howToMeasure: "Human review plus schema checks and reference-based evals." },
      { dimension: "latency", whatToScore: "How long does the same task take end to end?", howToMeasure: "Wall-clock time per run and per tool call." },
      { dimension: "cost", whatToScore: "How much spend does the task require under the same workload?", howToMeasure: "Token and tool usage per completed run." },
      { dimension: "control", whatToScore: "How well can the team inspect, govern, and reproduce the workflow?", howToMeasure: "Trace completeness, branching clarity, and config transparency." },
    ],
    scaffold: [
      { path: "framework-benchmark-suite/README.md", purpose: "Package overview and benchmark intent." },
      { path: "framework-benchmark-suite/src/types.ts", purpose: "Shared benchmark types." },
      { path: "framework-benchmark-suite/src/frameworks.ts", purpose: "Framework characteristics and tradeoffs." },
      { path: "framework-benchmark-suite/src/benchmark-cases.ts", purpose: "Reusable finance scenarios for comparison runs." },
      { path: "framework-benchmark-suite/src/scoring.ts", purpose: "Scoring rubric and acceptance criteria." },
      { path: "framework-benchmark-suite/examples/framework-comparison.ts", purpose: "Concrete comparison input the team can expand into a harness." },
    ],
    acceptanceCriteria: [
      "The same finance task can be executed across at least three frameworks.",
      "Every run records quality, latency, cost, and control observations.",
      "The output includes a short decision memo that recommends a default framework.",
      "Future phases can reuse the benchmark inputs as regression fixtures.",
    ],
  },
  researchReasoning: {
    pipeline: [
      { name: "Planner", purpose: "Break a finance question into source-specific sub-questions and research steps.", inputs: ["user question", "scope", "constraints"], outputs: ["research plan", "evidence checklist", "open questions"] },
      { name: "Researcher", purpose: "Collect filings, news, market data, and internal docs with citations.", inputs: ["research plan", "tool access", "source list"], outputs: ["evidence log", "source notes", "candidate claims"] },
      { name: "Validator", purpose: "Check whether the evidence supports each claim before anything is synthesized.", inputs: ["evidence log", "candidate claims", "schema"], outputs: ["validated claims", "gaps", "rejections"] },
      { name: "Synthesizer", purpose: "Turn validated findings into an executive-ready brief or memo.", inputs: ["validated claims", "audience", "required format"], outputs: ["brief", "risks", "next actions"] },
    ],
    reasoningPatterns: [
      { name: "Self-refine", whenToUse: "When the first pass is likely incomplete or too rough.", financeUse: "Tighten an investment thesis before it reaches a committee.", guardrail: "Keep refinement grounded in the original evidence set." },
      { name: "Self-consistency", whenToUse: "When multiple reasoning paths should converge before a decision.", financeUse: "Compare several stock views and aggregate into one recommendation.", guardrail: "Do not treat majority vote as truth without evidence checks." },
      { name: "ReAct", whenToUse: "When the agent must alternate between thinking and using tools.", financeUse: "Fetch market data, inspect filings, then revise the answer.", guardrail: "Make tool outputs explicit instead of blending them into the answer." },
      { name: "Reflection", whenToUse: "When a second pass should critique the first pass.", financeUse: "Review whether a memo overstates unsupported upside.", guardrail: "Require the critique to cite the evidence it is challenging." },
      { name: "Tree-of-thoughts", whenToUse: "When the problem benefits from branching and pruning ideas.", financeUse: "Explore multiple pre-earnings hedge scenarios before choosing one.", guardrail: "Prune branches using explicit criteria, not model intuition alone." },
      { name: "Language Agent Tree Search", whenToUse: "When the system should search, evaluate, and backpropagate signals across paths.", financeUse: "Test a portfolio trim decision across multiple evidence paths.", guardrail: "Keep scoring and backpropagation auditable." },
    ],
    scaffold: [
      { path: "research-reasoning-kit/README.md", purpose: "Package overview and intended use." },
      { path: "research-reasoning-kit/src/types.ts", purpose: "Shared types for the phase." },
      { path: "research-reasoning-kit/src/research-pipeline.ts", purpose: "Planner, researcher, validator, and synthesizer stages." },
      { path: "research-reasoning-kit/src/reasoning-patterns.ts", purpose: "Reusable reasoning paradigms for finance workflows." },
      { path: "research-reasoning-kit/src/scaffold.ts", purpose: "File map and acceptance criteria." },
      { path: "research-reasoning-kit/examples/earnings-week.ts", purpose: "Concrete example for research plus reasoning in a busy finance week." },
    ],
    useCases: [
      { scenario: "Fundamental analysis for a public company", whyItMatters: "Exercises data extraction, synthesis, and decision framing in one loop.", outputs: ["financial summary", "valuation notes", "risk flags"] },
      { scenario: "Analyst-grade deep search on a complex finance question", whyItMatters: "Needs planning, multi-source research, validation, and grounded synthesis.", outputs: ["research memo", "evidence trail", "open questions"] },
      { scenario: "Earnings-week reasoning under time pressure", whyItMatters: "Tests whether the system can revise its reasoning as new evidence arrives.", outputs: ["refined thesis", "decision rationale", "follow-up checklist"] },
    ],
    acceptanceCriteria: [
      "A developer can reuse the research pipeline stages as a stable contract.",
      "The reasoning patterns are separated from the finance use case code.",
      "The package is ready to back a later harness or notebook implementation.",
      "The example shows how reasoning changes as evidence accumulates.",
    ],
  },
  productionControls: {
    evalHarness: [
      { name: "Dataset builder", purpose: "Collect labeled examples, edge cases, and regression fixtures for finance workflows.", inputs: ["production traces", "human labels", "failure taxonomy"], outputs: ["versioned eval dataset", "sample weights", "gold labels"] },
      { name: "Harness runner", purpose: "Run the same workflow across model or prompt versions and capture the trace.", inputs: ["eval dataset", "workflow version", "runtime config"], outputs: ["run results", "trace log", "scorecard"] },
      { name: "Judge calibration", purpose: "Compare LLM judge outputs against human labels and tighten the rubric.", inputs: ["model outputs", "human labels", "judge prompt"], outputs: ["calibration report", "agreement score", "judge adjustments"] },
      { name: "Release gate", purpose: "Block or allow a model, prompt, or workflow change based on the scorecard.", inputs: ["scorecard", "thresholds", "approval policy"], outputs: ["release decision", "audit record", "next actions"] },
    ],
    metrics: [
      { name: "Output quality", whyItMatters: "Shows whether the answer is correct and evidence-grounded.", howToMeasure: "Reference comparison plus schema validation and human review." },
      { name: "Trajectory quality", whyItMatters: "Shows whether the agent took the right path, not just the right answer.", howToMeasure: "Trace assertions against the expected workflow steps." },
      { name: "Safety and compliance", whyItMatters: "Captures policy, PII, and fairness failures before release.", howToMeasure: "Red-team tests, rule checks, and manual review." },
      { name: "Efficiency", whyItMatters: "Shows if the workflow is affordable and fast enough for production.", howToMeasure: "Tokens, tool calls, latency, and cost per run." },
    ],
    driftMonitoring: [
      { name: "Baseline capture", purpose: "Store the current behavior of the workflow so later changes can be compared.", inputs: ["baseline traces", "baseline scores", "baseline prompts"], outputs: ["baseline snapshot", "expected ranges"] },
      { name: "Regression check", purpose: "Re-run the same eval set when prompts, models, or tools change.", inputs: ["new build", "baseline snapshot", "comparison rules"], outputs: ["delta report", "regression flags"] },
      { name: "Production signal", purpose: "Watch live traces for changes in score, latency, and failure patterns.", inputs: ["live traces", "SLIs", "thresholds"], outputs: ["drift alerts", "incident candidates"] },
    ],
    guardrails: [
      { name: "Input validation", whenItRuns: "Before any tool call or model request.", action: "Reject malformed, unsafe, or out-of-scope requests." },
      { name: "Tool-output filtering", whenItRuns: "After a tool returns data to the workflow.", action: "Redact secrets, PII, and unsupported fields before model access." },
      { name: "Output policy check", whenItRuns: "Right before the result is shown or written back.", action: "Block disallowed financial claims, missing citations, or unsafe actions." },
      { name: "Human approval gate", whenItRuns: "For high-risk or high-impact actions.", action: "Pause the run until an approver accepts, counters, or rejects it." },
    ],
    scaffold: [
      { path: "production-controls-kit/README.md", purpose: "Package overview and production-control intent." },
      { path: "production-controls-kit/src/types.ts", purpose: "Shared types for the phase." },
      { path: "production-controls-kit/src/eval-harness.ts", purpose: "Eval harness stages and metrics." },
      { path: "production-controls-kit/src/drift-monitor.ts", purpose: "Baseline, regression, and live drift stages." },
      { path: "production-controls-kit/src/guardrails.ts", purpose: "Guardrail rules for input, tool output, output, and approval." },
      { path: "production-controls-kit/examples/finance-release-gate.ts", purpose: "Concrete release-gate example for future implementation." },
    ],
    acceptanceCriteria: [
      "The eval harness can run a finance workflow against a versioned dataset.",
      "The drift monitor can compare a new run to a baseline snapshot.",
      "The guardrail rules are explicit enough to wire into a runtime later.",
      "The package boundary is reusable by all earlier phases.",
    ],
  },
} as const;

export const trustLedgerOSPhaseCatalog = [
  { id: "foundation", title: "Foundation kit", summary: "Shared agent glossary, decision tree, model/tool matrix, and prompt skeletons.", packageRoot: "foundation-kit/", route: "/foundation" },
  { id: "framework-benchmark", title: "Framework benchmark suite", summary: "Framework profiles, comparison cases, and scoring rubric.", packageRoot: "framework-benchmark-suite/", route: "/framework-benchmark" },
  { id: "research-reasoning", title: "Research and reasoning kit", summary: "Planner, researcher, validator, synthesizer, and reusable reasoning patterns.", packageRoot: "research-reasoning-kit/", route: "/research-reasoning" },
  { id: "production-controls", title: "Production controls kit", summary: "Eval harness, drift monitor, guardrails, and release gate.", packageRoot: "production-controls-kit/", route: "/production-controls" },
] as const;

export const trustLedgerOSRouteCatalog = trustLedgerOSManifest.routes;
export const trustLedgerOSPackageCatalog = trustLedgerOSManifest.packageCatalog;

export function getPhase(id: string) {
  return trustLedgerOSPhaseCatalog.find((phase) => phase.id === id);
}

export function getRoute(path: string) {
  return trustLedgerOSRouteCatalog.find((route) => route.path === path);
}

export function getPackage(kind: string) {
  return trustLedgerOSPackageCatalog.find((item) => item.kind === kind);
}
