# Trust Ledger OS

**A trust and risk control plane for AI teams. Every high-impact change is reviewed, traced, and recorded before it reaches customers or cash.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PRISMtrace](https://img.shields.io/badge/Observability-PRISMtrace-black)](https://blockconvey.com)

## Problem

AI teams are shipping code, spend, and agent actions faster than humans can review them. Existing tools catch bugs or logs, but not product policy drift, runtime risk, and approval history in one place.

Trust Ledger OS closes that gap by making every high-impact change reviewed, traced, and recorded before it reaches customers or cash.

## What It Does

1. Capture a code change, spend request, or agent action.
2. Review it against product policy and trust rules.
3. Attach a PRISM trace to the runtime decision.
4. Produce an approve / deny / counter outcome.
5. Store the decision in a ledger future runs can reuse.

## Why It Fits BuilderBase

- It reduces operational risk from AI-written code and autonomous spend.
- It gives product, finance, and engineering one shared approval trail.
- It shows how teams can ship fast without losing control.

## Tool Roles

- **PRISM**: runtime observability for agent calls, approvals, and latency.
- **Prelint**: pre-merge product review for policy drift, bad defaults, and risky logic.
- **GIDE**: secure offline editing and emergency fixes when the network is not trusted.

## Demo

The 2-minute video plan and FFmpeg render command are in [`docs/TRUST_LEDGER_OS_VIDEO.md`](docs/TRUST_LEDGER_OS_VIDEO.md).

Generated assets live in [`public/demo`](public/demo):

- `trust-ledger-os-demo.mp4`
- `01-hero-desktop.png`
- `02-how-it-works.png`
- `03-tool-stack.png`
- `04-builderbase-fit.png`
- `05-demo-deliverables.png`
- `06-hero-mobile.png`

## Build

```bash
npm install
npm run dev
```

## Repo Layout

```text
trust-ledger-os/
├── app/
├── docs/
├── package.json
├── README.md
└── tsconfig.json
```
