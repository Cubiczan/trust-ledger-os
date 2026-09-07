from __future__ import annotations

import json
from typing import Iterable

from .manifest import MANIFEST, PACKAGE_CATALOG, PHASE_CATALOG, ROUTE_CATALOG


def _response(status: str, payload: object) -> tuple[str, list[tuple[str, str]], bytes]:
    body = json.dumps(payload, indent=2, sort_keys=True).encode("utf-8")
    headers = [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Content-Length", str(len(body))),
    ]
    return status, headers, body


def app(environ, start_response):
    path = environ.get("PATH_INFO", "/")

    if path == "/":
        status, headers, body = _response(
            "200 OK",
            {
                "name": MANIFEST["product"]["name"],
                "description": MANIFEST["product"]["description"],
                "routes": ROUTE_CATALOG,
                "phases": PHASE_CATALOG,
                "packages": PACKAGE_CATALOG,
            },
        )
    else:
        status, headers, body = _response("404 Not Found", {"error": "not found", "path": path})

    start_response(status, headers)
    return [body]
