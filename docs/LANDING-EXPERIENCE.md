# Landing experience

The home route is a complete replacement for the previous feature-led landing page.
It is a single progressive product story rather than a set of interchangeable
marketing sections.

## Narrative

1. Position Veil as a place where people define how they work.
2. Accumulate messages, tasks, conversations, announcements, questions, meetings,
   and files until attention becomes the central problem.
3. Resolve that fragmentation into the principle that the tool should fit the work.
4. Assemble a Space from a deliberately small example into a richer team context.
5. Show communication, threads, calls, Whiteboard, and Todo as one connected flow.
6. Reduce raw activity into the four Inbox items that need attention.
7. Separate People, Global Search, and personal Keep by the questions they answer.
8. Explain private-message encryption and its boundaries precisely.
9. Summarize the product in a varied bento composition, then answer implementation-
   grounded questions before the closing CTA.

## Product boundaries

- Private conversations are represented as Space-scoped; the page does not claim a
  global private-conversation model.
- Global Search shows People, Spaces, channels, Todo, and Keep. It explicitly does
  not claim server-side full-text search of private messages, Q&A, or announcements.
- Keep is personal and is never shown as a Space capability.
- People is a deduplicated reachability directory with shared-Space context and
  favorites, not a friend graph, search replacement, or recent-messages view.
- Private messages use per-device encrypted envelopes. Attachments use keys delivered
  through those envelopes. Space channels use shared channel keys and are not described
  as the same E2EE model. Calls are described as encrypted in transit.
- Operational metadata is acknowledged because the service needs it for routing and
  synchronization.

## Visual and interaction system

The page uses Veil's Noto Sans typography, vermilion intent color, paper/ink palette,
four-pixel geometry, and raised/inset/plate depth model. Product demonstrations reuse
the message presentation adapter derived from the main application. Marketing-only
scenes use lightweight wrappers and do not connect to production application state.

The desktop fragmentation scene is sticky and spatial. At compact widths it becomes
a static reading sequence. Native details/summary controls power the FAQ. The Space
example is the only stateful product demonstration. All animation is removed under
`prefers-reduced-motion: reduce`.

## Verification targets

- Desktop, tablet, and 415px mobile layouts
- Light and dark themes without scroll-position loss
- Mobile menu, Space mode switch, and FAQ keyboard semantics
- Reduced motion
- `/`, `/terms-of-service`, `/privacy-policy`, and the not-found route
- `pnpm lint` and `pnpm build`
