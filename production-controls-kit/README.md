# Production Controls Kit

Phase 4 scaffold for Trust Ledger OS.

## Contents

- `src/types.ts` - shared types for the phase.
- `src/eval-harness.ts` - eval harness stages and metrics.
- `src/drift-monitor.ts` - baseline, regression, and live monitoring stages.
- `src/guardrails.ts` - input, tool-output, output, and approval guardrails.
- `src/scaffold.ts` - package boundary and acceptance criteria.
- `examples/finance-release-gate.ts` - seed input for a later production gate.

## Goal

Make evaluation and production controls a reusable layer that every finance agent can inherit.
