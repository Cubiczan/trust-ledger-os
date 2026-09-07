MANIFEST = {
    "product": {
        "name": "Trust Ledger OS",
        "description": "A trust and risk control plane for AI teams.",
        "tagline": "Every high-impact change is reviewed, traced, and recorded before it reaches customers or cash.",
    },
    "mirrors": ["icohangar-ops/trust-ledger-os", "Cubiczan/trust-ledger-os"],
}

PHASE_CATALOG = [
    {
        "id": "foundation",
        "title": "Foundation kit",
        "summary": "Shared agent glossary, decision tree, model/tool matrix, and prompt skeletons.",
        "package_root": "foundation-kit/",
        "route": "/foundation",
    },
    {
        "id": "framework-benchmark",
        "title": "Framework benchmark suite",
        "summary": "Framework profiles, comparison cases, and scoring rubric.",
        "package_root": "framework-benchmark-suite/",
        "route": "/framework-benchmark",
    },
    {
        "id": "research-reasoning",
        "title": "Research and reasoning kit",
        "summary": "Planner, researcher, validator, synthesizer, and reusable reasoning patterns.",
        "package_root": "research-reasoning-kit/",
        "route": "/research-reasoning",
    },
    {
        "id": "production-controls",
        "title": "Production controls kit",
        "summary": "Eval harness, drift monitor, guardrails, and release gate.",
        "package_root": "production-controls-kit/",
        "route": "/production-controls",
    },
]

ROUTE_CATALOG = [
    {"path": "/", "label": "Landing page"},
    {"path": "/foundation", "label": "Foundation scaffold"},
    {"path": "/framework-benchmark", "label": "Framework benchmark scaffold"},
    {"path": "/research-reasoning", "label": "Research and reasoning scaffold"},
    {"path": "/production-controls", "label": "Production controls scaffold"},
]

PACKAGE_CATALOG = [
    {
        "kind": "npm",
        "name": "@cubiczan/trust-ledger-os",
        "root": "packages/npm/",
        "exports": ["manifest", "phase catalog", "route catalog"],
    },
    {
        "kind": "pypi",
        "name": "trust-ledger-os",
        "root": "packages/python/",
        "exports": ["manifest", "phases", "route map"],
    },
    {
        "kind": "mcp",
        "name": "trust-ledger-os-mcp",
        "root": "packages/mcp/",
        "exports": ["tool catalog", "resource catalog", "prompting guidance"],
    },
]
