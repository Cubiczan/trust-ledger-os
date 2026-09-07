# Trust Ledger OS

## Problem Statement
AI teams can ship code, spend, and agent actions faster than humans can review them. Existing tools catch bugs or logs, but not product policy drift, runtime risk, and approval history in one place. Trust Ledger OS closes that gap by making every high-impact change reviewed, traced, and recorded before it reaches customers or cash.

## Concept

Trust Ledger OS is a trust and risk control plane for AI systems.

It combines:
- PRISM runtime observability
- Prelint product review
- GIDE offline-safe editing

## MVP

1. Capture a risky change.
2. Review it against policy.
3. Trace it.
4. Record the outcome.

## Implementation Roadmap

1. Foundation kit: shared agent glossary, model/tool matrix, and when-to-use-an-agent guidance.
2. Framework benchmark: compare LangGraph, OpenAI Agents SDK, AutoGen, PydanticAI, and LlamaIndex.
3. Research and reasoning: fundamental analysis, deep search, and reusable reasoning templates.
4. Production controls: eval harnesses, drift checks, tracing, guardrails, and approval gates.

Phase 2 is now scaffolded at `/framework-benchmark` with a package boundary in `framework-benchmark-suite/`.

Phase 3 is now scaffolded at `/research-reasoning` with a package boundary in `research-reasoning-kit/`.

Phase 4 is now scaffolded at `/production-controls` with a package boundary in `production-controls-kit/`.
