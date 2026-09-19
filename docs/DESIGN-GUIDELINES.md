# Design guidelines

These rules are shared by `veil`, `veilmobile`, `veil-admin`, and `veil-landing`. The [design system](DESIGN-SYSTEM.md) defines their tokens.

## Density and space

Message history, lists, tables, boards, and files favor useful density. Authentication, settings, confirmations, onboarding, empty states, and meeting stages favor _ma_: one clear idea or action with room to understand it.

## Restraint

- Use shared semantic depth and neutral tokens.
- Controls and structural surfaces use solid fills, never gradients.
- Use one restrained accent for intent; pair status color with text or icons.
- Gradients are allowed only inside marketing artwork, demo canvases, fades, or data visualizations—not buttons, cards, dialogs, navigation, or page chrome.

## Content and accessibility

Use platform line breaking rather than character counts. Test long CJK text, missing data, loading, empty, and error states. Every control needs a name, role/state, sufficient contrast, and visible focus on web. Mobile touch targets are at least 48pt. Support keyboard navigation, screen readers, text scaling, high contrast, and reduced motion.

## Motion

Motion explains origin, destination, or state change. Keep it subtle, reuse shared transitions, and honor reduced-motion preferences.

## Review checklist

1. Is the surface intentionally dense or spacious?
2. Does it use the shared palette, 4px surface radius, and semantic depth?
3. Are gradients absent from controls and structural surfaces?
4. Are light and dark themes complete?
5. Does it work with accessibility services, 200% text, and long content?
6. Are loading, empty, error, and reduced-motion states covered?
