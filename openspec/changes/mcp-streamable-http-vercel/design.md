# Design: Streamable HTTP MCP on Vercel

## Decision

Thin HTTP wrapper around the existing catalog JSON-RPC handler. Extract
`handleJsonRpc()` so stdio and HTTP share tools/resources. HTTP is **stateless**
JSON request/response (no `Mcp-Session-Id`, no long-lived `GET /mcp` SSE).

## Why not the Python Vercel app

`packages/python` is already a Vercel project (Root Directory `packages/python`)
serving a WSGI catalog. Mixing MCP into that app would break Glama connector
discovery and the existing Python listing. MCP HTTP is a **new** Node project.

## Why Root Directory is `packages/mcp`

Repo root is the Next.js landing app. Putting `vercel.json` + `api/` there
would collide with that project. `packages/mcp` already has its own
`package.json`, so a dedicated Vercel project with Root Directory
`packages/mcp` is the isolated surface.

Recommended project name: `trust-ledger-os-mcp`.

Public URLs come from Vercel (`$VERCEL_PROJECT_PRODUCTION_URL`), never from
this repo.

## Auth

- `MCP_BEARER_TOKEN` optional locally (stdio and local HTTP listen).
- When the token is set, `/mcp` is fail-closed: missing or invalid Bearer →
  HTTP 401 + `WWW-Authenticate`. Same body for both cases.
- On Vercel (`VERCEL` / `VERCEL_ENV` set), `/mcp` is fail-closed even if the
  token env is missing — public Glama connector profile requires the secret.
- `/health` is always unauthenticated liveness. Never echo secrets.

## Hosting

`vercel.json` enables Fluid Compute and rewrites `/mcp` + `/health` to
`api/index.mjs` (`export default { fetch }`). `maxDuration` is 60s.

JSON responses are the default so proxies that buffer SSE do not break
`initialize` / `tools/list`. `GET /mcp` and `DELETE /mcp` return 405.
