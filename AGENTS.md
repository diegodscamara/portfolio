# Agent guidelines

## Issue tracking: Tracker

This project tracks work in **Tracker** (https://tracker-two-gamma-34.vercel.app), team `POR` (see `.tracker.json`). Do **not** use Linear or GitHub Issues for this project, and don't suggest them.

- Find work: `next_issue` / `list_issues { assignee: "me", cycle: "current" }` (MCP server `tracker`), or `trk next` / `trk issues --mine --cycle current`.
- Start an issue: set status `in_progress`, use `branch_name` (`trk branch POR-12`) for the branch.
- PR titles must contain the issue id (`POR-12: …`). The Tracker GitHub App moves the issue to In Review when the PR opens and Done when it merges, so don't set those by hand.
- Comment progress and the PR link on the issue with `add_comment` (`trk comment POR-12 "…"`).
- Found an out-of-scope bug or TODO? Don't fix it inline. File it with `create_issue` and `related_to: <current issue>` (`trk create "…" --team POR --related-to POR-12`).
- Issue ids look like `KEY-N` (for example `POR-12`). Every CLI command takes `--json`.
