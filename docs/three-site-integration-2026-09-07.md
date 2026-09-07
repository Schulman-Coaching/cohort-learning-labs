# Three-site integration — 7 September 2026

The user requested that yishhe.org be improved, made consistent with, and integrated with cohortlearninglabs.org and elieschulman.com, following authorization to publish the website improvements.

## Public relationship

- YishHeh: contemporary individual practice before prayer, beginning with motivation.
- elieschulman.com: writing, Torah, and books on language, judgment, and learning.
- Cohort Learning Labs: facilitated groups exploring how people respond when their understandings differ.

The shared description is “noticing, language, and learning.” Reciprocal links explain each destination. YishHeh entry links go to /practice/motivation. Cohort links go to /cohorts and carry explicit UTM source, medium, campaign, and optional content values. These are referral tags, not a new analytics service or automatic CRM integration.

The cohort remains four weekly 90-minute sessions, 6–8 participants, $500 USD total per person. This release does not change dates, availability, booking, payments, or the Tuesday timing-to-confirm decision. YishHeh does not inherit the cohort price or enrollment requirement. YishHeh Circles remains proposed and separate from Cohort Learning Labs.

## YishHeh governance and propagation check

Controlling records reviewed: YishHeh Project Hub, Website Design and Content Propagation Rules, and the Canonical Source Packet / Visual Direction Record. Private source references and hosting identifiers remain in the existing project hub.

Canonical sequence remains Motivation → Describing → Learning to Notice → Practice. The homepage displays these existing cards earlier and retains the full appearance vocabulary and exercises. Navigation order, page titles, practice instructions, Hebrew, and working translation are preserved. Source and translation labels are clearer, and the existing contemporary-name and no-promised-outcome boundaries are explicit near the hero.

This is an integration and presentation revision of Version 02. It does not claim implementation of the complete future Version 03 visual system. No teaching sequence, source interpretation, or practice pedagogy changes. Course, journal, navigation sheet, and eBooks therefore require no substantive teaching rewrite. The Hub records the integration and deployment; the website draft and handoff receive a concise presentation/integration addendum to prevent public descriptions drifting.

## Technical changes and recovery

YishHeh adds responsive navigation with current-page indication, keyboard focus styling, shared related-work footer, route-specific canonicals, sitemap and robots metadata. Next.js 14.2.21 is patched to 14.2.35 following https://nextjs.org/blog/security-update-2025-12-11. No major framework migration or calendar/API feature changes.

Hosting follows the existing GitHub-to-Vercel integration. Branch builds are previews; production follows merge. The rollback baseline for this repository is commit `2679a324831eb2032f57dc3efd4792ff19e47e1a`. The private project hub retains the complete deployment and recovery record.

All three production builds pass. The existing CLL structure/lint and personal static-site gates pass. Final preview and production verification are recorded in the pull requests and YishHeh Project Hub. Mobile CSS is reviewed; the browser environment does not expose mobile viewport emulation. No outreach sent and no private source documents published.
