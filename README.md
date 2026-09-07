# Trust Ledger OS

Trust Ledger OS is a trust and risk control plane for AI teams. Every high-impact change is reviewed, traced, and recorded before it reaches customers or cash.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PRISMtrace](https://img.shields.io/badge/Observability-PRISMtrace-black)](https://blockconvey.com)

## Overview

The repo combines a public landing page with four scaffolded implementation phases. The same roadmap is mirrored into reusable package boundaries so the app, docs, and future library work stay aligned.

Mirrors:

- `icohangar-ops/trust-ledger-os`
- `Cubiczan/trust-ledger-os`

## Core Roles

- PRISM: runtime observability for agent calls, approvals, and latency.
- Prelint: pre-merge product review for policy drift, bad defaults, and risky logic.
- GIDE: secure offline editing and emergency fixes when the network is not trusted.

## What It Does

1. Capture a code change, spend request, or agent action.
2. Review it against product policy and trust rules.
3. Attach a PRISM trace to the runtime decision.
4. Produce an approve, deny, or counter outcome.
5. Store the decision in a ledger future runs can reuse.

## Live Routes

- `/` landing page and roadmap
- `/foundation` phase 1 scaffold
- `/framework-benchmark` phase 2 scaffold
- `/research-reasoning` phase 3 scaffold
- `/production-controls` phase 4 scaffold

## Phase Packages

- `foundation-kit/`: shared agent glossary, decision tree, model/tool matrix, and prompt skeletons.
- `framework-benchmark-suite/`: framework profiles, comparison cases, and scoring rubric.
- `research-reasoning-kit/`: research pipeline stages and reusable reasoning patterns.
- `production-controls-kit/`: eval harness, drift monitoring, guardrails, and release gate scaffold.

## Demo Assets

The 2-minute video plan and FFmpeg render command are in [`docs/TRUST_LEDGER_OS_VIDEO.md`](docs/TRUST_LEDGER_OS_VIDEO.md).

Generated assets live in [`public/demo`](public/demo):

- `trust-ledger-os-demo.mp4`
- `01-hero-desktop.png`
- `02-how-it-works.png`
- `03-tool-stack.png`
- `04-builderbase-fit.png`
- `05-demo-deliverables.png`
- `06-hero-mobile.png`

## Implementation Roadmap

1. Foundation kit: shared agent glossary, model/tool matrix, and when-to-use-an-agent guidance.
2. Framework benchmark: compare LangGraph, OpenAI Agents SDK, AutoGen, PydanticAI, and LlamaIndex.
3. Research and reasoning: fundamental analysis, deep search, and reusable reasoning templates.
4. Production controls: eval harnesses, drift checks, tracing, guardrails, and approval gates.

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Development Notes

- Keep shared data in the package folders, not in the page components.
- Import from each package `src/` entry until the package exports are formalized.
- Add new phase work as reusable types and data first, then wire routes and docs.
- Treat `README.md` and `docs/TRUST_LEDGER_OS.md` as the roadmap source of truth.

## Repo Layout

```text
trust-ledger-os/
├── app/
├── docs/
├── foundation-kit/
├── framework-benchmark-suite/
├── production-controls-kit/
├── research-reasoning-kit/
├── package.json
├── README.md
└── tsconfig.json
```
