# Change: Streamable HTTP + Vercel remote for Trust Ledger OS MCP

## Why

`packages/mcp` is stdio-only (NDJSON on stdout) so Glama can wrap it with
mcp-proxy. Glama **connectors** need a public HTTPS endpoint that speaks
**streamable-http**. Without that surface, the catalog tools exist but cannot
be listed as a hosted connector.

The Python Vercel app (`packages/python`, https://python-nine-pi.vercel.app)
is a catalog HTTP API, not an MCP connector. Do not overload it.

## What Changes

- Keep the stdio server (`trust-ledger-os-mcp` / `npm start`) unchanged for
  Glama server-registry / Dockerfile installs.
- Extract shared JSON-RPC catalog handling so stdio and HTTP call the same
  tools and resources.
- Add a stateless Streamable HTTP handler (`POST /mcp`) with optional Bearer
  auth (`MCP_BEARER_TOKEN`).
- Add a dedicated Vercel Fluid Compute entry under `packages/mcp` (`api/` +
  `vercel.json`). New Vercel project; Root Directory is `packages/mcp`.
- `/health` (and `/healthz`) return 200 JSON liveness without auth.
- Smoke script + README curl examples. Never hardcode a Vercel hostname.

## Impact

- New modules under `packages/mcp/src/` (`protocol`, `auth`, `web-handler`, `http`).
- `packages/mcp/api/index.mjs` and `packages/mcp/vercel.json`.
- README / env sample / smoke script.
- OpenSpec change for this capability only (brownfield: no whole-repo spec).

## Non-goals

- Changing catalog tool names or stdio framing.
- Hosting or inventing a production hostname from this change.
- Overloading `packages/python` or the Next.js app at repo root.
- OAuth 2.1 / dynamic client registration (Bearer is enough for Glama API Key).
