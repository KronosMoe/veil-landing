# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues. Use the `gh` CLI from this repository so it infers the project from `git remote -v`.

## Operations

- Create: `gh issue create --title "..." --body "..."`
- Read: `gh issue view <number> --comments`
- List: `gh issue list --state open --json number,title,body,labels,assignees`
- Comment: `gh issue comment <number> --body "..."`
- Label: `gh issue edit <number> --add-label "..."`; remove with `--remove-label`.
- Close: `gh issue close <number> --comment "..."`

Pull requests are not a triage request surface.

## Skill conventions

When a skill says to publish to the issue tracker, create a GitHub issue. When it says to fetch a ticket, run `gh issue view <number> --comments`.

## Wayfinding operations

- **Map:** create one issue labelled `wayfinder:map`; its body holds Destination, Notes, Decisions so far, Not yet specified, and Out of scope.
- **Child ticket:** link an issue to the map as a GitHub sub-issue and label it `wayfinder:<type>` (`research`, `prototype`, `grilling`, or `task`). If sub-issues are unavailable, add it to the map's task list and start its body with `Part of #<map>`.
- **Blocking:** prefer GitHub's native issue dependency API. If unavailable, put `Blocked by: #<number>` at the top of the child's body.
- **Frontier:** list the map's open children and select the first with no open blocker and no assignee.
- **Claim:** run `gh issue edit <number> --add-assignee @me` before doing ticket work.
- **Resolve:** comment with the answer, close the ticket, then append its linked one-line gist to the map's Decisions so far.
