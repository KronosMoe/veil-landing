# Landing redesign

English-first marketing redesign for the Veil workspace. Scope: landing repository only.

## Design direction

Reference: https://www.utsubo.com/blog/japanese-web-design-style-guide

Adapt the guide's global-facing craft approach: deliberate space, restrained color, typographic hierarchy and paced interaction. English remains the reading language throughout. Numbered editorial sections establish rhythm; working product previews supply detail. Warm neutral page surfaces, orange controls, inset wells and thin highlights connect the site to Veil's existing interface. Light and dark themes are supported.

The homepage enters immediately with a staged hero reveal. There is no loading screen, entry gate, body scroll lock or delayed access to content. A native-scroll timeline follows a team through a conversation, a shared idea and a next step. Pinned product scenes crossfade, translate and rotate as the story progresses; reduced motion renders those same chapters as a static sequence. The six-button tour remains available for direct exploration. Product views use illustrative HTML replicas with existing app surface classes, not customer screenshots.

A shared site shell carries the navigation, theme controls, footer and reading progress across the homepage, privacy notice, terms and 404 route. The legal layout adds section navigation, summaries and readable document typography; the original legal copy and effective dates are unchanged. The 404 page uses an animated Veil mascot and return-home controls. Decorative and entrance animations honor the system reduced-motion preference.

## Product evidence checked

Paths below are relative to the parent workspace.

| Marketing content                       | Product evidence                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Six channel types and shared workspace  | `veil/src/types/domain/space.ts`, `veil/src/pages/space/`, `veil/src/constants/space-license.ts`                   |
| Encryption for messages and attachments | `veil/src/lib/e2ee/primitives.ts`, `veil/src/lib/upload/encryptedAttachment.ts`                                    |
| Whiteboard channels                     | `veil/src/pages/space/Whiteboard.tsx`, `veil-microservice/services/core/src/whiteboard/whiteboard.service.ts`      |
| Task boards, announcements and Q&A      | `veil/src/pages/space/TaskBoard.tsx`, `veil/src/pages/space/Announcements.tsx`, `veil/src/pages/space/QA.tsx`      |
| Free plan and planned paid capabilities | `veil/src/constants/space-license.ts`, `veil-microservice/services/api-gateway/src/space/space-license.service.ts` |
| Visual language and typography          | `veil/src/global.css`, `veil-landing/src/lib/app-surfaces.ts`                                                      |

Paid billing is explicitly described as not live. SSO, audit export, branding and priority support are marked planned. No invented prices, customers, testimonials or performance metrics are used. Call encryption is distinguished from end-to-end message encryption; necessary account and workspace metadata are acknowledged. Self-hosting is an enquiry, not a promise that planned enterprise capabilities are already shipped.

The bundled Noto Sans font is copied from the main app with its OFL licence; the landing no longer requests Google Fonts.

## Validation

- Production TypeScript/Vite build, repository ESLint and Prettier.
- Browser inspection confirmed the redesigned homepage and privacy layout. Supporting-page browser capture was intermittently unavailable.
- Local DOM regression checks exercise immediate entry, reduced-motion story content, all six showcase selectors, legal section retention, 404 and cross-route navigation.
- Preview: `pnpm preview --host 127.0.0.1` on port 8000. Port 3000 was already occupied, so no second development server was started there.

## Showcase UI synchronization

Product previews now follow `veil` commit `30602b0` (the flat Japanese-inspired UI redesign). `src/styles/app-preview.css` scopes the app's exact light/dark palette and depth tokens to product replicas. The marketing page keeps its own visual treatment.

Updated the browser menubar, global search, workspace rail, channel categories, profile footer, 44px channel headers, chat utilities and single-row composer. All six demos now use small-radius flat surfaces. Q&A uses All/Open/Answered filters, announcements include follow/create/sort/view controls, and the whiteboard includes a canvas tool tray. Regular channel previews no longer fabricate a persistent encryption badge where the app does not show one.

Validation: production build, ESLint, Prettier, whitespace checks, and local DOM regression checks for six showcase controls and full-motion rendering passed. Browser accessibility inspection confirmed updated preview content; visual capture was interrupted before a complete scene-by-scene review.

## Group workflow positioning update

The home page now leads with communication and coordination for small and medium-sized groups. One showcase tells a continuous story: discuss a signup problem, sketch a shorter flow, then create an assigned task. The duplicate hero app preview and separate six-panel product tour have been removed from the page. Task creation is described as a group action, not automatic message conversion.

The story is followed by privacy and security, then a clearly labeled future direction: attach files from NAS storage and connect self-hosted applications across operating-system ecosystems. The concept diagram and FAQ explicitly state these integrations are not yet available and distinguish them from self-hosting Veil itself. No entry loading screen is present.

Validation: TypeScript/production build and ESLint pass. A local DOM check verifies one showcase with three app previews, no duplicate tour, future-capability labeling, all section anchors, retained legal sections, and 404/return-home routing.
