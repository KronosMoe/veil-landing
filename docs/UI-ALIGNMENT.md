# UI alignment with Veil

Audit reference: `veil/src/themes/root.css`, `veil/src/global.css`, and
`veil/src/components/ui`.

## Findings

The landing site used the former bright-orange and neutral ramps, gradient-faced
shared buttons/surfaces, larger reusable-control radii, and stronger shadows.
Those shared-control differences were accidental. The editorial layout itself is
allowed to differ from an application workspace.

## Alignment completed

- Primary, neutral, background, and semantic token values now match `veil`.
- Shared depth utilities and reusable buttons use the same flat surface model.
- The active editorial call-to-action and structural palette now use shared Veil
  colors, 4px control radius, and pressed/raised semantics.
- Editorial cards, stages, legal summaries, and other non-circular surfaces now
  use the same 4px surface radius.
- Product-preview tokens already used the current vermilion palette.

## Deliberate exceptions

Marketing artwork, demo canvases, background grids, fades, and illustrative
diagrams may use gradients or larger shapes. Interactive controls, cards,
navigation, dialogs, and page chrome may not use that exception. This keeps the
brand expressive without making the product controls look unrelated.
