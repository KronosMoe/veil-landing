# Design system

This project follows the shared Veil visual contract. The web app is the reference implementation; web, native, admin, and marketing surfaces adapt the same semantics to their platform.

## Foundation

- Flat, minimal skeuomorphism: raised, pressed, inset, tray, plate, and header.
- Vermilion accent: `500 #c94b2c`, `600 #ae3821`, `700 #8f2f1d`.
- Paper/ink neutrals: `gray-50 #f5f5f3`, `gray-100 #ececea`, `gray-900 #242320`, `gray-950 #1a1917`; dark canvas `#131312`.
- Semantic colors: success `#5d7f6a`, warning `#b98a32`, error `#c3544f`, info `#6d86b8`.
- Default surface radius: 4px (`rounded-sm` / `radius.sm`).
- Noto Sans on web; system fonts on native for Dynamic Type and script fallback.
- Body text is 14px/pt and spacing follows a 4/8px rhythm.

## Depth mapping

| Meaning | Web             | Native               | Use                     |
| ------- | --------------- | -------------------- | ----------------------- |
| Raised  | `skeuo-raised`  | `elevation.raised`   | Buttons, cards, tiles   |
| Pressed | `skeuo-pressed` | pressed fill/inset   | Active controls         |
| Inset   | `skeuo-inset`   | `surfaceSunken`      | Inputs, wells           |
| Tray    | `skeuo-tray`    | `surfacePressed`     | Selected rows, segments |
| Plate   | `skeuo-plate`   | `elevation.floating` | Dialogs, menus, sheets  |
| Header  | `skeuo-header`  | raised header        | Toolbars                |

`rounded-full` / `radius.pill` is reserved for chips, toggles, slider thumbs, progress tracks, dots, and circular icon controls.

## Component contract

Buttons provide raised/default, inset, and blend behavior. Cards provide default, muted, outline, and ghost surfaces. Inputs are inset. Menus/dialogs are plates. Tabs place a selected segment in a tray. Web controls expose keyboard focus; mobile controls have at least a 48pt touch target.

## Source map

| Project        | Tokens                                      | Components                         |
| -------------- | ------------------------------------------- | ---------------------------------- |
| `veil`         | `src/themes/root.css`, `src/global.css`     | `src/components/ui`                |
| `veil-admin`   | `src/themes/root.css`, `src/global.css`     | `src/components/ui`                |
| `veil-landing` | `src/styles/root.css`, `src/global.css`     | `src/components/ui`, editorial CSS |
| `veilmobile`   | `src/theme/tokens.ts`, `src/theme/theme.ts` | `src/components/ui`                |

When a shared token changes, update all four implementations and verify both themes. Reusable components must not invent raw colors, radii, or shadows.
