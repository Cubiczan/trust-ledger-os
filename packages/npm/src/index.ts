import {
  trustLedgerOSManifest,
  trustLedgerOSPackageCatalog,
  trustLedgerOSPhaseCatalog,
  trustLedgerOSRouteCatalog,
} from "../../../lib/trust-ledger-os-manifest";

export {
  trustLedgerOSManifest,
  trustLedgerOSPackageCatalog,
  trustLedgerOSPhaseCatalog,
  trustLedgerOSRouteCatalog,
};

export function getPhase(id: string) {
  return trustLedgerOSPhaseCatalog.find((phase) => phase.id === id);
}

export function getRoute(path: string) {
  return trustLedgerOSRouteCatalog.find((route) => route.path === path);
}
