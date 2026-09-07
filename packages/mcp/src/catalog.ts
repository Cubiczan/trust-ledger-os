export const mcpManifest = {
  product: {
    name: "Trust Ledger OS",
    description: "A trust and risk control plane for AI teams.",
    tagline: "Every high-impact change is reviewed, traced, and recorded before it reaches customers or cash.",
  },
  routes: ["/", "/foundation", "/framework-benchmark", "/research-reasoning", "/production-controls"],
  phases: ["foundation", "framework-benchmark", "research-reasoning", "production-controls"],
  packages: ["@cubiczan/trust-ledger-os", "trust-ledger-os", "trust-ledger-os-mcp"],
} as const;

export const mcpToolCatalog = [
  {
    name: "get_manifest",
    description: "Return the Trust Ledger OS manifest.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_phases",
    description: "List the roadmap phases.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_phase",
    description: "Fetch one roadmap phase by id.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"],
      additionalProperties: false,
    },
  },
  {
    name: "list_routes",
    description: "List the live app routes.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_packages",
    description: "List the npm, PyPI, and MCP package surfaces.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
] as const;

export const mcpResourceCatalog = [
  { uri: "trust-ledger-os://manifest", name: "manifest", description: "Full Trust Ledger OS manifest" },
  { uri: "trust-ledger-os://phases", name: "phases", description: "Phase catalog" },
  { uri: "trust-ledger-os://routes", name: "routes", description: "Route catalog" },
  { uri: "trust-ledger-os://packages", name: "packages", description: "Package catalog" },
] as const;

export const mcpResources = {
  "trust-ledger-os://manifest": mcpManifest,
  "trust-ledger-os://phases": mcpManifest.phases,
  "trust-ledger-os://routes": mcpManifest.routes,
  "trust-ledger-os://packages": mcpManifest.packages,
} as const;
