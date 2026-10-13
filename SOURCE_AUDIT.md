# Fable source audit

Reference: `https://yourfable.webflow.io/` and the supplied screen recording. Keep this list current before describing the local replica as complete.

## Shared role pages

| Section | Source behavior and assets | Local status |
| --- | --- | --- |
| Logo strip | 20 circular 80px logos, source order `5,23,17,22,2,24,13,19,20,16,7,15,10,8,11,9,1,6,18,14` | Matched; `logo-10.avif` recovered from the supplied Investors files |
| Problem | Four gold bordered cards in a scroll driven stack; service providers uses left copy and right stack | Shared component implemented for Founders, Investors, and Service Providers |
| Timeline | Alternating image and copy, gray center line, sticky yellow progress from viewport top to midpoint, markers change as progress passes | Matched interaction and orientation across all role pages |
| Statement | Left aligned, 48px heading; each word changes from 25% to full opacity through scroll | Shared word reveal implemented |
| Our Model | `model-vetting.jpg`, `model-content.jpg`, `event-07.avif`; hovered card expands from a 50:50:50 basis to 70:50:50, body appears, other captions fade | Matched asset order and hover geometry; also supports focus and touch |
| Our Event Types | Images `event-26.avif`, `event-09.avif`, `event-29.avif`; selected tab expands its copy and changes photo | Matched image order and selection behavior |
| Whitelist / sponsorship callout | `event-12.avif` background on all three role pages; Founders callout before Model, Investors after Event Types, Service Providers after Sponsorship Tiers with `I'm Interested` button | Corrected shared asset, placement, and provider label |

## Timeline image map

- Founders: `event-01.avif`, `timeline-interview.avif` (user supplied source `IMG_9282 1.avif`), `event-15.avif`.
- Investors: `event-01.avif`, `event-06.avif`, `event-28.avif`, `event-15.avif`.
- Service Providers: `event-06.avif`, `model-content.jpg`, `event-01.avif`.

## Verification performed

- The production Next.js build passed after implementation.
- Browser checks confirmed the yellow timeline line pins at the top of the viewport with a 360px height at a 720px viewport, the first photo sits left of its copy, and marker state changes after scrolling.
- Browser checks confirmed statement words advance from opacity `.25` to `1` during scrolling.
- Browser checks confirmed hover expansion settles at approximately `434px / 319px / 319px` and reveals the selected card body.
- The three role pages rendered 20 logos and no broken loaded images in the browser check.
- Event Types tab selection changed both its selected state and the image.
- The user-supplied Founders interview photo was copied byte-for-byte, rendered at its native 4096px width, and compared side by side with the Webflow timeline at the same heading. The local page reported no broken images and still rendered all 20 logos.
- After the rebuild, the yellow timeline progress remained pinned at `top: 0` with a 360px height in a 720px viewport; the statement showed a mix of `0.25`, intermediate, and `1` word opacities during scroll; the selected Model card expanded to about `434px` while the other two settled at about `319px`.
- Source comparison exposed a shared header offset: the Webflow header occupies its own 72px row, with the role hero starting below it. The local header now occupies a 70px row. On Founders, the rebuilt hero starts at `y=70`, is 720px high, and its H1 starts at `y=239.5`; the source H1 starts at `y=239.6`.
- At a 375px content width, Home, Founders, Investors, Service Providers, About, Startup Speedrun, Attend, and Media Consent had no horizontal overflow or broken loaded images after the final build.
- A dummy Founders hero email submission showed the local success state and appeared in `public.fable_leads` with `form_type=whitelist` and `source=founders-hero`. The dummy row was deleted and a readback confirmed zero QA rows remaining. Speedrun and Media Consent submissions were not sent in this check.

The 390px viewport override applied to one browser QA tab (375px content width), which was reused for the final eight-route narrow-layout check.

## About page follow-up

- Matched the full-height mosaic hero, source wording and scroll-driven word reveal in the introduction, square core-team headshot variants, core-team copy, advisor bios, and proof paragraph.
- The source core-team panels also display five client logo files beneath the biography. Those exact files were not found in the supplied local folders and are not yet reproduced. Continue the About page visual audit before describing it as a full 1:1 match.
