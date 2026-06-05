# Spec Mono · Per-Component Specs

`design.md` is the theme's brand contract (colors / typography / global rules). This file is its **companion detail** ——
exact rendering specs for all 69 components under Spec Mono, extracted from the original design system (`assets/v2/sections/`).

When building a specific shot, look up the matching entry and write HTML/CSS/GSAP accordingly so the output matches design intent.
Global rules (0 shadow / 0 gradient / single accent / 1px stroke / skip weight 500) always apply; see `design.md`.

Component IDs and "content expectations" fields are in `.claude/skills/video-spec-builder/references/components-catalog.md`.

---

## aroll · On-Camera Overlay

- **subtitle-highlight**: Source Han Sans SC 800 · clamp 28–56px. Default `fg 42%`, spoken word accent, spoken words pure white. Emphasis is **accent underline only, 3px** (`scaleX` entrance), no background block. Bottom 14% / left-right 8% padding.
- **keyword-sticker**: Inverted (white bg / black text) or card (`surface` bg / 1px strong hairline border), pick one. Padding 14/22px · radius 6px · tilt ±1.5°. Entrance `scale .92→1` + tilt to zero · 320ms spring. **≤ 3 per screen, spacing ≥ 200px.**
- **concept-card**: `surface` bg · 1px hairline + 4 corner registration crosses · radius 8px · padding 32/36px · ~50% frame width. Title cn 38/800 (one character swapped to serif italic) + 28×2px accent short divider + body cn 16/400. Bottom hairline separates source footnote. **0 shadow, one card one concept, body ≤ 3 lines.** Entrance 700ms ease-out.

## broll-hero · Heavy Hitters

- **big-type**: Barlow Semi Condensed 800 · 180–220px at 4K. One character swapped to Instrument Serif italic + accent. Chrome = top-left idx + top-right rule + bottom tick ruler + timecode. Main type entrance 1100ms, corner marks delayed 280ms.
- **big-number**: Condensed numerals · 280–360px · accent · tabular-nums. Unit 0.32em · pure white · shifted up 0.6em. Caption 28/800 + 32×2px accent short bar. Chrome = left finding / right method / bottom dashed connector.
- **pull-quote**: Instrument Serif italic · 76px. One keyword accent, weakened clause `fg 66%`. Giant left quote mark opacity 0.18 as decoration. Byline = mono caps + 36px short bar.
- **inversion-flash**: Black ↔ white via `steps(1)` instant cut. 6–12 frames (200–400ms). **≤ 2 times per video, not consecutive.**

## broll-charts · Data Charts

Axes 1px `rgba(255,255,255,.06)` hairline. Numbers always mono + tabular-nums.

- **line**: Line 3px accent · round join; endpoints 8px, regular points 4px; label value at end.
- **multi-line**: Primary accent 3px / secondary 70% white 2px / tertiary 35% white 2px. **Max 3 lines.**
- **bar**: Default bars 18% white, peak accent; bar gap 24px; value at bar top, 2px top radius.
- **h-bar**: Label / bar / value three columns; descending order, first place accent; bar height 18px; 5% white base track.
- **stacked**: Primary accent anchored at bottom / secondary 55% white / tertiary 22% white; cumulative value at bar top.
- **area**: Fill `accent 42% → 0%` (**sole gradient allowed system-wide**); top line 3px accent.
- **donut**: Ring 36px stroke · radius 140; center number mono 800 · 56px · accent; right column three-column legend. **≤ 4 segments.**
- **scatter**: Dual-axis corner labels LOW/HIGH; point size maps third dimension; primary point accent, others 14% white fill.
- **heatmap**: Stepped fill < 70 grayscale, ≥ 70 accent; cell gap 4px; row/column labels mono caps 14px.
- **gauge**: 220° sweep (-200°→20°); stroke 22px round, base 10% white; number 72px mono 800 accent.
- **sparkline**: Card 1px hairline · padding 22px · radius 6px; main number mono 30/800 + 14px delta; mini line 2.5px, color maps trend (green good / orange bad).
- **sankey**: Nodes 18px wide rectangles (accent / 62% white); flow ribbons bezier, width maps flow, accent 32% / white 42% opacity.

## broll-flows · Flow Diagrams

Common: nodes with hairline borders, hot segments filled accent; arrows 1px line + 7px triangle.

- **complex**: Nodes 170×108 · mono sub + semantic label; dual dashed guide rails; hot segment lights tick / latency together; key segment dashed box + inverted label callout.
- **branching**: Decision diamond + center question; YES/NO labeled at line midpoint mono caps; primary path accent.
- **decision-tree**: Root → decision diamond → leaf rectangle; recommended leaf accent; recommended path fully accent.
- **state-machine**: Circular nodes + mono caps names; event names above arrows; self-loops use arcs.
- **sequence**: Actors as top rectangles + hanging dashed lifelines; solid = sync, dashed = response/async; key calls accent.
- **swimlane**: Horizontal lanes, left mono index + role name; cross-lane arrows = handoff.
- **fork-join**: Fork/join use 6×20 solid accent bars; workers stacked side by side, count = concurrency.
- **loop**: 4 nodes in ring layout (not linear); arc closes loop; center shows ∞ + exit condition.

## broll-structure / structures2 · Structure Diagrams

- **flow-chart**: Nodes hairline → hot solid accent; arrows 1px + 7px triangle; advance 900ms/step; past lines turn accent, future opacity 0.5.
- **pyramid**: Three tiers width 32/52/72% (golden ratio), tier gap 8px no overlap; top tier label accent.
- **funnel**: Four tiers width 80→58→40→22%; bottom tier accent border; right column mono numbers right-aligned.
- **concentric**: Radii 60/120/180/240; labels top-right of ring mono+cn two lines; core fill surface + accent stroke.
- **node-graph**: Edges 1px strong hairline, no arrow styling; nodes radius 6px, padding 8/14; hot node accent stroke + surface fill.
- **spectrum(structure)**: Axis 1px strong hairline full width; poles 7px circle `fg 66%`; marker 14px circle accent.
- **tree**: Three tiers top-down (root→class→instance); straight connectors, main branch accent; deeper tiers smaller rectangles.
- **mind-map**: Center solid accent circle, topic text inverted; tier-1 text 800, tier-2 14px; main branches evenly radial.
- **matrix-2x2**: Cross hairline axes + quadrant names in four corners; points = color block + label, key item accent+800; ideal quadrant corner gets ★.
- **venn**: Circles semi-transparent fill + hairline stroke; primary circle accent 18%, others white 6%; intersection center ★ + key noun.
- **layered-stack**: Narrow-top-wide-bottom illusion (equal height); left L index mono descending top to bottom; focus layer accent border.
- **hub-spoke**: Center solid accent circle 80px, always centered; 6 spokes, key links solid, others dashed.
- **grid-map**: 12×6 cells, gap 8px; color maps state (active accent / idle 16% white / error red); active cell breathing pulse, staggered delay.

## broll-thinking · Thinking & Organization

- **compare-table**: Header left mono caps dimension, right cn 800 candidate names; best row item accent + ★ prefix; hairline row separators, **no vertical lines**.
- **swot**: 2×2 equal width; S/O use accent (positive), W/T neutral; letter mono 800 · 56px as visual anchor; items use 8px horizontal bars (not bullets).
- **fishbone**: Spine horizontal, fish head = problem on right, tail left; 6 cause categories angled in, primary cause accent; sub-causes horizontal 14px.
- **timeline-row**: Horizontal hairline axis evenly spaced; event cards alternate above/below; key event accent large dot.
- **gantt**: Left column task names + right week bars; bar height 26px · 2px radius, key milestones accent; header W1–W10 mono caps.
- **kanban**: 4 equal columns, current column accent header; card top mono label / bottom task title; column header shows count.
- **card-grid**: 4×2 equal width and height, 16px gap; card top-left index + bottom-left title + subtitle; recommended item full surface fill + accent border.

## broll-ui · UI Mock

- **terminal**: Mono font (~30px on screen); `surface` bg + hairline border; cursor 10×18 solid block · 1s blink · accent; typing 60ms/char; footer tokens/latency/cost notes at `fg 42%`.
- **chat-thread**: User bubble right-aligned · accent stroke · transparent bg; AI bubble left-aligned · surface fill · no border; max width 70%; streaming cursor ▍ at end.
- **browser**: Three dots + tab row + URL bar all hairline; URL in mono, hide `https://`; CTA uses square accent button; no favicon.
- **code-editor**: keyword=accent / string=`fg 66%` / comment=`fg 42%` italic; line numbers mono `fg 42%` right-aligned; current explained line 2px accent left bar; file tree optional 32px wide.
- **api-call**: Left request / center latency / right response three columns; POST=accent, 200=green, error=red; keys `fg 42%`, values pure white/accent; center shows real milliseconds.
- **dashboard**: KPI card = large number + unit + label; focus card top-left accent corner mark; sparkline hairline + single accent highlight point; top-right accent dot + LIVE caps.

## broll-abstract · Abstract Fallback

- **analogy**: Left=unknown / right=familiar, two fully symmetric hairline cards; connector ≈ in serif italic 76px accent; "just like" as bottom semantic cue; left card accent label reinforces distinction.
- **black-box**: Box uses **dashed accent stroke** (distinct from hairline) + corner brackets; `?` 84px cond accent; arrows hairline + sharp triangle strongest hairline.
- **equation**: Horizontally centered equal spacing; operators serif italic 56px accent; key terms accent border; top EQ + hairline annotation bar (textbook feel).
- **spectrum(abstract)**: Axis 0–1 · 11 ticks (5n major); marker inverted triangle accent + mono label above; left pole pure white / right pole accent meta.
- **iceberg**: Waterline accent dashed + WATERLINE label; above water solid · accent · labeled "10%"; below water dashed + light fill · grayscale · labeled "90%".
- **versus**: Left-right equal width + center vertical line + `vs` serif; same-order key-value rows aligned; left label `fg 42%` / right label accent.
- **placeholder**: 45° diagonal stripe bg (4% white) + 1px strong hairline border + corner brackets; `[ DROP HERE ]` mono caps accent; annotate dimensions/duration/codec.

## icons · Icons

- Use Lucide icon set (48 curated picks in catalog).
- Stroke weight: **default 1.5px** (visually matches hairline); 2px when icon itself is emphasized. Don't mix more than 3 tiers on screen.
- Color: default `fg 66%`, accent on hover/emphasis only. **Don't color icons proactively.**

## illustrations · Chapter Cover Illustrations

- 6 Open Peeps–style scene illustrations, **chapter covers only** (one per chapter).
- Sole exemption to the "0 decorative illustration" rule —— illustrations only on chapter covers, never in body shots.
- Note: illustrations are **content assets, not theme styling** —— this theme only defines how and when to use them. When theme doesn't match, fall back to `broll-hero.big-type`.
