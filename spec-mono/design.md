---
name: Spec Mono
colors:
  primary: "#000000"        # Pure black background
  on-primary: "#FFFFFF"     # Pure white foreground
  surface: "#0A0A0A"        # Card surface
  accent: "#FFFFFF"         # Single accent · default pure white (Grok mono) · can be overridden to any hex
typography:
  hero:
    fontFamily: Barlow Semi Condensed
    fontSize: 8rem
    fontWeight: 700
    letterSpacing: -0.03em
    textTransform: uppercase
  stat:
    fontFamily: Barlow Semi Condensed
    fontSize: 9rem
    fontWeight: 700
    letterSpacing: -0.04em
  body:
    fontFamily: Space Grotesk
    fontSize: 1.1rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: JetBrains Mono
    fontSize: 0.7rem
    fontWeight: 500
    letterSpacing: 0.22em
    textTransform: uppercase
  quote:
    fontFamily: Instrument Serif
    fontSize: 4rem
    fontWeight: 400
    fontStyle: italic
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
motion:
  energy: moderate
  easing:
    entry: "expo.out"
    exit: "power4.in"
    ambient: "sine.inOut"
  duration:
    entrance: 0.7
    hold: 2.5
    transition: 0.6
  atmosphere:
    - dot-grid
    - hairline-rules
    - registration-marks
  transition: cinematic-zoom
---

# Spec Mono

Visual language draws from **SpaceX launch pages × xAI/Grok × X (Twitter)**. Derived from a design system produced by Claude Design (original output archived in `assets/`).

Companion files:
- `tokens.css` —— Reusable CSS (variables + spec-sheet decorative classes + entrance keyframes); copy directly when writing shots.
- `spec-mono-components.md` —— Per-component specs for all 69 components; consult when building specific shots.

## Overview

Like a mission control console, not a slide deck. Cool, sharp, engineering-grade. Information speaks through **weight cliffs, white space, 1px hairlines, and mono-caps footnotes** —— not color stacking, glow/shadow, or decorative illustration.

**Best for**: technical tutorials, product demos, AI / developer-facing, data-dense content.
**Not for**: casual / warm / playful mass-market content —— switch themes for those; don't force-fit.

## Colors

Pure black-and-white base with 21:1 contrast (WCAG AAA).

- `primary #000000` —— Pure black scene background.
- `on-primary #FFFFFF` —— Pure white primary text. Secondary text uses reduced white opacity: secondary 66%, caption 42%, very faint 18%. **Hierarchy via opacity, not new colors.**
- `surface #0A0A0A` —— Card / panel surface. Next elevation level uses `#141414`.
- `accent` —— **The only color variable in the entire system**. Default pure white (Grok-style pure mono). Can be overridden to any hex (e.g. SpaceX instrument green `#00E07A`); whatever the value, **only one accent may appear on screen at a time**.
- Hairline borders: `rgba(255,255,255,0.08)` default / `0.16` strong / `0.28` strongest.
- Status colors for data charts only: green `#00E07A`, red `#FF3333`, yellow `#FFC700`. Never used in body copy, headings, or decoration.

## Typography

| Role | Font | Use |
|---|---|---|
| hero | Barlow Semi Condensed 700 | Poster-scale type · chapter headings |
| stat | Barlow Semi Condensed 700 | Large numbers (tabular-nums) |
| body | Space Grotesk 400 | Body copy · Chinese/English headings |
| label | JetBrains Mono 500 | Index numbers · timecodes · mission codes · footnotes |
| quote | Instrument Serif 400 italic | Italic emphasis · pull quotes · equation operators |

- Chinese uses **Source Han Sans SC**, weights 400 / 700 / 900.
  (Note: HyperFrames font rules disallow Noto Sans Latin families; Source Han Sans SC = Noto Sans SC Chinese variant — this theme deliberately selects it as the CJK font; keep it.)
- **Weight cliff**: use only `400 / 600 / 700 / 800`, **skip 500**. Adjacent tiers intentionally skip two steps apart.
- **Letter-spacing**: hero / stat large type `-0.03 ~ -0.04em`; body `-0.025em → 0`; label mono caps `0.18 ~ 0.22em`; mission strings (`SCN-03` / `T-MINUS`) `0.32em`.
- **Line height**: headings `0.86 ~ 1.0`, body `1.55 ~ 1.7`.
- **Signature move**: pick **one keyword** in a geometric sans line and swap to `quote` italic serif + accent color for emphasis. Full-line italic only for pull quotes.

## Elevation

**Flat throughout —— 0 shadow.** No element uses box-shadow / drop-shadow.

Depth comes from only two things: **1px hairline borders** + **surface elevation steps** (`#000000` → `#0A0A0A` → `#141414`).
Emphasis via color swap and size cliffs — never glow / drop shadow.

## Components

Below is a summary of common patterns. **Exact per-component specs (stroke width, proportions, layout) live in `spec-mono-components.md`** —— consult that when building specific shots. Reusable CSS in `tokens.css`.

- **Cards / panels**: `{surface}` background + 1px hairline border + `rounded.lg (8px)`. Optional corner registration crosses (`.cross`, 12px arms · 1px stroke). Padding uses `spacing.xl`.
- **Subtitle highlight**: word-by-word subtitles, default 42% white, spoken word switches to `{accent}` + 3px accent underline sweep-in, spoken words return to pure white. No background block.
- **Big numbers**: Barlow Semi Condensed · `{accent}` · tabular-nums; unit scaled to 0.32em, pure white, shifted up.
- **Pull quote**: Instrument Serif italic; one keyword switches to `{accent}`; giant left quote mark at opacity 0.18 as decoration.
- **Inversion flash**: `{primary}` ↔ pure white via `steps(1)` instant cut, 6–12 frames, **≤ 2 times per video**.
- **Atmosphere layer**: scene background — pick one of `dot-grid` / `hairline-rules` / `scan-lines`, max 1 per scene; corners use `registration-marks` (cross hairs) + mono-caps mission index. Decoration reads as engineering drawing, not ornament — don't stack.
- **Icons**: Lucide icon set, default 1.5px stroke (matches hairline weight), color `on-primary` 66%, accent only when emphasized.

## Do's and Don'ts

**Do**
- Pure black background + pure white text; hierarchy via opacity and size cliffs.
- One accent per screen —— it always means "the current focal point."
- 1px hairlines, `rounded.sm (2px)` default radius, 8-pt spacing grid.
- Numbers always use `font-variant-numeric: tabular-nums`.
- Entrance uses `expo.out`, 8–16px displacement, every element animates in from invisible.

**Don't**
- ❌ No shadows / glow / drop shadow (0 shadow is non-negotiable).
- ❌ No gradients —— sole exception: area chart fill `accent 42% → 0%`.
- ❌ No decorative illustration / hand-drawn figures (chapter cover illustrations excepted).
- ❌ No second accent color on screen.
- ❌ No 2px strokes, no pill/full-round corners, no non–8-pt spacing like 32/48/56.
- ❌ No bounce easing —— sole exception: sticker-style label pop-in.
- ❌ Don't use weight 500 (breaks the contrast cliff).
