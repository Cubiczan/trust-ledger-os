# mcp-streamable-http

## ADDED Requirements

### Requirement: Stdio transport remains NDJSON

The MCP package SHALL keep a stdio entry that writes one JSON-RPC object per
stdout line and SHALL NOT log to stdout. Glama mcp-proxy / Dockerfile installs
MUST keep working without HTTP.

#### Scenario: Stdio initialize still works

- **WHEN** a client writes an `initialize` JSON-RPC request as an NDJSON line
  on stdin
- **THEN** the server writes an `initialize` result as a single NDJSON line on
  stdout

### Requirement: Shared catalog over Streamable HTTP

The HTTP surface SHALL expose the same tools (`get_manifest`, `list_phases`,
`get_phase`, `list_routes`, `list_packages`) and resources as stdio. The MCP
endpoint path SHALL be `/mcp`. Requests SHALL be stateless JSON-RPC (no
session id, new handling per POST).

#### Scenario: Authenticated initialize lists the catalog

- **WHEN** a client POSTs `initialize` then `tools/list` to `/mcp` with a valid
  Bearer token (when auth is required)
- **THEN** the server returns JSON-RPC results that include the five catalog
  tools

### Requirement: Optional Bearer auth, fail-closed when configured

When `MCP_BEARER_TOKEN` is set, every `/mcp` request except CORS preflight
SHALL require `Authorization: Bearer <token>`. Missing or invalid credentials
SHALL return HTTP 401 and SHALL NOT list tools. Local HTTP MAY run without a
token. On Vercel, `/mcp` SHALL fail closed if the token is missing.

#### Scenario: Missing Bearer is rejected when token is set

- **WHEN** `MCP_BEARER_TOKEN` is configured and a client POSTs to `/mcp`
  without a Bearer header
- **THEN** the server returns HTTP 401 with `WWW-Authenticate: Bearer` and
  does not execute tools

### Requirement: Unauthenticated health

`GET /health` and `GET /healthz` SHALL return HTTP 200 JSON liveness
(`ok`, `name`, `version`, `transport: streamable-http`, `mode: stateless`)
without Authorization. The payload SHALL NOT include secrets.

#### Scenario: Health without auth

- **WHEN** a client GETs `/health` with no Authorization header
- **THEN** the server returns HTTP 200 JSON with `ok: true` and
  `transport: streamable-http`

### Requirement: Dedicated Vercel project

The Streamable HTTP function SHALL live under `packages/mcp` as its own
Vercel project (Root Directory `packages/mcp`). It SHALL NOT be added to the
Python Vercel app or the Next.js repo-root app. Rewrites SHALL map `/mcp` and
`/health` to the Fluid Compute fetch handler. The repo SHALL NOT hardcode a
Vercel hostname.

#### Scenario: Deploy settings are documented

- **WHEN** an operator creates the Vercel project
- **THEN** docs specify project name `trust-ledger-os-mcp`, Root Directory
  `packages/mcp`, env `MCP_BEARER_TOKEN`, and URLs derived from
  `$VERCEL_PROJECT_PRODUCTION_URL`
