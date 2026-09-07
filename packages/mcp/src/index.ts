import {
  trustLedgerOSManifest,
  trustLedgerOSPackageCatalog,
  trustLedgerOSPhaseCatalog,
  trustLedgerOSRouteCatalog,
} from "../../../lib/trust-ledger-os-manifest";

export const mcpToolCatalog = [
  {
    name: "get_manifest",
    description: "Return the full Trust Ledger OS manifest.",
  },
  {
    name: "list_phases",
    description: "List the four roadmap phases and their package roots.",
  },
  {
    name: "get_phase",
    description: "Fetch one phase by id.",
  },
  {
    name: "list_routes",
    description: "List the live app routes for the roadmap.",
  },
  {
    name: "list_packages",
    description: "List the npm, PyPI, and MCP package surfaces.",
  },
] as const;

export const mcpResourceCatalog = {
  manifest: trustLedgerOSManifest,
  phases: trustLedgerOSPhaseCatalog,
  routes: trustLedgerOSRouteCatalog,
  packages: trustLedgerOSPackageCatalog,
};

export function getPhase(id: string) {
  return trustLedgerOSPhaseCatalog.find((phase) => phase.id === id);
}

export function getRoute(path: string) {
  return trustLedgerOSRouteCatalog.find((route) => route.path === path);
}
