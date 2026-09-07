from __future__ import annotations

import argparse
import json
from typing import Iterable

from .manifest import PACKAGE_CATALOG, MANIFEST, PHASE_CATALOG
from .phases import PHASE_DATA


def _print_json(value: object) -> None:
    print(json.dumps(value, indent=2, sort_keys=True))


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="trust-ledger-os")
    parser.add_argument("--manifest", action="store_true", help="print the manifest")
    parser.add_argument("--phases", action="store_true", help="print the phase catalog")
    parser.add_argument("--packages", action="store_true", help="print the package catalog")
    parser.add_argument("--phase", choices=[phase["id"] for phase in PHASE_CATALOG], help="print one phase block")
    return parser


def main(argv: Iterable[str] | None = None) -> None:
    args = build_parser().parse_args(list(argv) if argv is not None else None)

    if args.manifest:
        _print_json(MANIFEST)
        return

    if args.phases:
        _print_json(PHASE_CATALOG)
        return

    if args.packages:
        _print_json(PACKAGE_CATALOG)
        return

    if args.phase:
        _print_json(PHASE_DATA[args.phase])
        return

    _print_json({"manifest": MANIFEST, "phases": PHASE_CATALOG})


if __name__ == "__main__":
    main()
