---
name: video-spec-builder
displayName: Video Spec Builder
description: Works like a video director. Interrogates a fuzzy video idea through Socratic questioning until it becomes a shot-by-shot, second-timed video-spec.md that HyperFrames can render into a real video.
keywords:
  - video
  - video spec
  - storyboard
  - shot list
  - script
  - scene breakdown
  - pacing
  - subtitles
  - voiceover
  - transitions
  - HyperFrames
  - product demo
  - promo
  - explainer
  - animation
  - Spec Mono theme
---

# Video Spec Builder

A director-in-a-box. You say "I want to make a video," and it grills you with direct questions until the fuzzy idea in your head becomes a script you can actually shoot: a shot-by-shot `video-spec.md`, timed to the second, with every shot written out. Hand that file to HyperFrames and it renders into a finished video.

The hard part of making a video isn't the rendering, it's figuring out what you actually want. This power lives entirely in that gap. It won't shoot the video and it won't invent the idea. It does one thing: push you, and stay with you, until the idea is something that can be built.

## What it helps with

- You know the feeling you want but can't describe the picture. It refuses words like "premium" or "high-impact" and keeps after you until you can name real shots and real motion.
- You have an idea but never thought parts of it through, the opening and ending but not the middle, or you never considered captions or beat-synced motion. It surfaces those.
- You have raw material but no order, a script, selling points, a pile of assets. It cuts that into individual shots and sequences them.
- You proactively learn what the rendering layer can do (TTS voiceover, word-level subtitles, 3D, audio-reactive motion, shader transitions). Users usually don't know what's possible, so it tells them.

## When to use it

Activate this power when the user wants to:

- Make a video, promo, product demo, explainer, animated short, or TikTok/YouTube content from scratch.
- Revise an existing `video-spec.md`: swap shots, change pacing, adjust subtitles or voiceover, tweak transitions, or change colors.
- Break a script, set of selling points, or pile of assets into a timed shot list.

If the user already knows the exact file and edit they want and it has nothing to do with planning a video, this power is not the right tool.

## How it works

The power runs in one of two modes, decided by a startup scan of the project directory for an existing spec (`video-spec.md`, `*video-spec*.md`, `*storyboard*.md`, or 分镜 filenames).

**0-to-1 mode** (no spec found): a five-phase conversation that never announces its phases out loud.

1. Video fundamentals: purpose, audience, platform, duration, core message, information density, tone, viewer familiarity.
2. Asset inventory: status of script, audio, video, graphics, data, and 3D, plus a list of items to search for.
3. Expression toolkit: scene type mix, text presentation, motion language, pacing baseline, narrative beats, emotional arc, audio-visual relationship.
4. Visual theme: one of 8 HyperFrames presets or a custom `design.md`, plus accent color, decoration density, and component allow/deny lists.
5. References and counter-examples: at least one concrete reference and three "absolutely not" counter-examples.

After a sufficiency check, it breaks the script into a shot list (each shot anchored to a real component ID) and writes `video-spec.md`.

**Iteration mode** (spec found): no opening spiel. It reads the existing spec, catches the change request, gauges its depth (minor / medium / major), probes only as far as the change requires, checks for conflicts with the rest of the spec, then edits the file in place.

## The deliverable

The output is a single `video-spec.md` at the project root, authored in English by default (narration and on-screen text use the video's display language). It follows a fixed 9-section contract:

1. Video Fundamentals
2. Narrative Structure
3. Expression Toolkit
4. Visual Guidelines
5. Asset Inventory
6. Shot List (one block per shot, each with a singular `- Component:` ID, narration, on-screen text, expected content/effect, visual description, motion notes, SFX, transitions, and asset dependencies)
7. Audio Timeline
8. References & Counter-examples
9. Open Questions

Shots are timed to 0.1s precision and every `Component` must be a real ID from the component catalog.

## The rendering layer (HyperFrames)

This power sits upstream of HyperFrames, which renders video from HTML. That one fact defines the boundaries, and the spec must respect them.

- Good at: title animation, captions, word-by-word highlighting, layout, transitions, charts, UI mockups, geometric and kinetic motion, anything code can draw.
- Cannot do: hand-drawn illustrations, live-action footage, photorealistic images, composing background music. AI voiceover is possible but sounds machine-toned.

HyperFrames is an assembly tool, not a creation tool. Output quality comes down to the material fed in. The spec should never promise something the renderer can't draw.

## Bundled theme: Spec Mono

The repo ships a ready-made custom theme, **Spec Mono**: pure black-and-white, geometric, restrained, a SpaceX × Grok engineered look. To use it, copy `spec-mono/design.md` into the video project root and bring `tokens.css` along. It is already in HyperFrames' format and renders as-is.

## Operating principles

- Never accept adjectives. "Premium," "techy," and "high-end feel" all fail; they must become concrete visual and motion decisions.
- Never decide core content for the user. Selling points, audience, and platform are theirs.
- Never re-debate settled design details. Once a theme is locked, color, type, weight, and motion are not open topics.
- Never pretend the renderer can do what it can't.
- Push every requirement to shot granularity, and only write what the user explicitly said into the spec. Inferred content is tagged `[Pending user confirmation]`, never silently filled in.

## What's in this power

- `SKILL.md`: the runtime instructions the agent reads and follows at conversation time.
- `references/`: workflow guides loaded on demand (0-to-1 and iteration workflows, question bank, scene breakdown, component catalog, pacing rules, spec rules, dialogue style).
- `templates/video-spec-template.md`: the 9-section skeleton the deliverable fills in.
- `examples/video-spec-spacex.md`: a complete, contract-conformant sample spec.
- `spec-mono/`: the optional Spec Mono theme (`design.md`, `tokens.css`, per-component spec).
- `Full Code/`: a non-runtime React/CSS reference export of the v2 component library.
- `package.json` + `scripts/`: structure verification via `npm run verify`.

## Workflow position

```
You: "I want to make a video"
        │
        ▼
  Video Spec Builder   asks, breaks it into shots
        │
        ▼
   video-spec.md       shot-by-shot script, timed
        │
        ▼  /hyperframes
   HyperFrames         renders from the script
        │
        ▼
  finished video
```
