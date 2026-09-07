# Trust Ledger OS MCP package

MCP-ready package surface for Trust Ledger OS.

Published version: `trust-ledger-os-mcp@0.1.2`

## Publish

- Build: `npm --prefix packages/mcp run build`
- Server run: `npm --prefix packages/mcp start`
- Package name: `trust-ledger-os-mcp`
- Release path: `.github/workflows/release.yml`

## Tool catalog

- `list_phases`
- `get_phase`
- `list_routes`
- `list_packages`
- `get_manifest`

## Goal

Expose the roadmap and distribution metadata in an agent-friendly shape that can be wired into any MCP runtime later.
