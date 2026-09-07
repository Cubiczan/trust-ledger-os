from .manifest import PHASE_CATALOG

PHASE_DATA = {
    "foundation": {
        "summary": "Shared agent glossary, decision tree, model/tool matrix, and prompt skeletons.",
    },
    "framework-benchmark": {
        "summary": "Framework profiles, comparison cases, and scoring rubric.",
    },
    "research-reasoning": {
        "summary": "Planner, researcher, validator, synthesizer, and reusable reasoning patterns.",
    },
    "production-controls": {
        "summary": "Eval harness, drift monitor, guardrails, and release gate.",
    },
}

__all__ = ["PHASE_CATALOG", "PHASE_DATA"]
