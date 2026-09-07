# Trust Ledger OS npm package

TypeScript package surface for the Trust Ledger OS manifest.

## Publish

- Build: `npm --prefix packages/npm run build`
- Package name: `@cubiczan/trust-ledger-os`
- Public registry target: npm
- Release path: `.github/workflows/release.yml`

## Exports

- `trustLedgerOSManifest`
- `trustLedgerOSPhaseCatalog`
- `trustLedgerOSRouteCatalog`
- `trustLedgerOSPackageCatalog`
- `getPhase(id)`
- `getRoute(path)`

## Goal

Provide a clean npm-friendly entrypoint for automation, docs generators, and future SDK consumers.
