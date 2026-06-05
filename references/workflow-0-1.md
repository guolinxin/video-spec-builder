---
name: workflow-0-1
description: 0-to-1 mode workflow. Full process from the user's first video request to generating video-spec.md.
---

# 0-to-1 Mode Workflow

[When to use]
    No video-spec.md in the project; the user is expressing a video idea for the first time.

[Workflow]
    Phase 1 Video fundamentals → Phase 2 Asset inventory → Phase 3 Expression toolkit →
    Phase 4 Visual theme → Phase 5 References & counter-examples → Sufficiency check → Shot breakdown → Output spec

[Top-level rules]
    - Each Phase must meet its [hard criteria] before moving on
    - Progressive intake is allowed — if the user's answer already covers an item, absorb it; don't re-ask mechanically
    - Adjectives are never acceptable answers
    - Failing to proactively surface capabilities is negligence — users usually don't know what's possible
    - Use natural transitions between Phases; don't announce "entering Phase N"

---

## Phase 1 · Video Fundamentals

[Goal]
    Converge the user's video intent into concrete decisions — purpose / audience / platform / duration / core message / pacing / tone.
    Order matters: don't lead with hard criteria; let the user empty their head first.

[Opening action · listen to the user's open description]
    At initialization you already asked "what kind of video do you want to make?"
    The initial description may include: purpose / audience / platform / duration / core message / assets on hand / style lean / reference videos, etc.

    First step is "listen + extract":
    - Pull out dimensions already expressed in the open description
    - Don't make the user repeat what they already said
    - Paraphrase and confirm what you captured so they can correct you

    Example:
    User says "I want a 3-minute video about SpaceX history for Bilibili, aimed at space fans"
    You should extract: purpose (explainer), audience (space fans), platform (Bilibili), duration (3 minutes)
    You should follow up on: one-line core message / information density / tone / viewer familiarity / etc.

[Early standalone question · do you have a script?]
    Mid Phase 1 (after purpose/audience/platform/duration are known, around core message), ask once about the script:

    "Do you have a full script, or should I draft one?"

    This branches the rest:
    - User has a script → later questions focus on shot pacing / text presentation / visual style, etc.
    - User has no script → after Phase 1 completes and before Phase 3, offer to draft from what they've answered and have them review

    Don't bundle the script question with audio options (e.g. "TTS vs live recording + do you have a script?").
    Script is the highest-priority content asset question — ask it alone.

[Hard criteria]
    - Video purpose is clear (pick dominant: explainer / marketing / tutorial / product demo / brand / documentary)
    - Target audience has a concrete profile (age / role / viewing context)
    - Platform & spec quad answered (platform / duration to the second / aspect ratio / frame rate)
    - Core message one line ≤ 12 characters (or equivalent brevity in English)
    - Information density picked (hook / tutorial / documentary)
    - Tone of voice has a reference voice (e.g. "Karpathy style", "Apple keynote style")
    - Viewer familiarity has boundaries (which terms they know / don't know)

[Fences]
    - Reject "young people", "everyone", "people in the industry" — push to a concrete profile
    - Reject "go viral", "premium feel", "look professional" — those are outcomes, not purpose
    - Reject core messages longer than ~12 characters — cut them down
    - Reject "you decide", "medium pacing" — require absolute values
    - No pleasantries like "sure, I'll help you make a video"

[Detailed questions]
    → `references/question-bank.md` Phase 1

[Transition copy after completion]
    Use natural bridging language, not "entering Phase N".

    × "Phase 1 locked → entering Phase 2"
    ✓ "Got it — your fundamentals are clear: [one-line core message recap]. Let's see what assets you have."

---

## Phase 2 · Asset Inventory

[Goal]
    Clarify status for each asset category (have / to generate / not needed) and list items to search for.

[Phase 2 prerequisite · script handling]
    Script was asked once in late Phase 1.

    - If user has a script → skip the script dimension; go straight to audio/video/graphics/data
    - If user needs you to draft → draft now (from Phase 1 answers), user reviews, then continue Phase 2

[Hard criteria]
    - Status clear for all 6 categories (content / audio / video / graphics / 3D / search)
    - Every "none" was evaluated for whether you can generate it or it goes on the search list
    - Each search item has all 4 fields (source platform / keywords / use / acceptance)

[Fences]
    - Don't pretend assets exist — mark gaps as [to be filled]
    - Don't download assets; only list them
    - Chinese keywords must be translated to English search terms
    - If no script, ask whether you should draft; don't silently write one
    - If a user-provided path doesn't exist, say so; don't pretend it's usable

[Detailed questions]
    → `references/question-bank.md` Phase 2

[Transition copy after completion]
    ✓ "Asset inventory done — you'll supply the script; I listed 4 B-roll items to search. Next we'll nail how the video tells the story and which visual tools to use."

---

## Phase 3 · Expression Toolkit

[Goal]
    Proactively surface available capabilities so the user chooses with full context.

[Hard criteria]
    - Scene type mix chosen (2–4 types)
    - Text presentation chosen (persistent subtitles / keyword highlight / karaoke / typewriter / text markers / dynamic font weight, etc.)
    - Motion language set (transition density / types / audio-reactive or not)
    - Pacing baseline pinned to average seconds per shot (read `references/pacing-rules.md` before pinning seconds;
      use video type / platform tiers — no guessing from memory)
    - Narrative beat curve (hook / development / climax / CTA time ranges)
    - Emotional arc (3 emotion words: opening / middle / closing)
    - Audio-visual relationship clear (narrative vs atmospheric + at least 1 mismatch point)

[Fences]
    - Don't dump the full capability table — pick 1–2 relevant capabilities the user didn't mention
    - Reject fully synchronized audio-visual throughout (at least 1 mismatch)
    - Reject "you decide" pacing — must pin to seconds
    - Don't promise capabilities the renderer can't deliver — offer alternatives

[Detailed questions]
    → `references/question-bank.md` Phase 3

[Transition copy after completion]
    ✓ "Expression toolkit is set — ~2.4s average per shot, hook packed in the first 5s, one mid-video mismatch with ambience over narration. Next we'll pick the overall visual tone."

---

## Phase 4 · Visual Theme Selection

[Goal]
    Choose a theme (one of two paths) + tune adjustable dimensions within that theme.

[Hard criteria]
    - Theme chosen (one of 8 HyperFrames presets by name, or custom theme = design.md at project root)
    - Accent color clear (default / hex)
    - Decoration density chosen (minimal / medium / heavy)
    - Component allowlist / blocklist clear (may be empty)

[Fences]
    - After theme is chosen, don't re-ask font / size / weight locked by the theme
    - Reject "whatever / up to you" — recommend 2–3 presets from Phase 1 video type and make them pick
    - If user insists on custom while being vague → description-generation path; require three adjectives
    - No "we'll adjust the theme after we see a cut" — theme must be chosen first

[Detailed questions]
    → `references/question-bank.md` Phase 4
    Before asking about component allow/block lists, read `references/components-catalog.md`
    so you have the full component list when asking "any components you want or must avoid?"

[Transition copy after completion]
    ✓ "Tone locked — Shadow Cut theme, orange accent, medium decoration. Add a couple of concrete references and counter-examples and we're ready to break into shots."

---

## Phase 5 · References & Counter-examples

[Goal]
    Calibrate direction with concrete references + remove ambiguity with counter-examples.

[Hard criteria]
    - At least 1 concrete reference + 1 "90% like it, 10% different" differentiation point
    - At least 3 "absolutely not" counter-examples (1 each: visual / narrative / pacing)

[Fences]
    - Reject "a video that looked good" — must be a specific work / link / screenshot
    - Reject "don't be tacky" — must be specific ("no X palette / Y trope / Z pattern")
    - Counter-examples are often more precise than positive refs — use them to drive visual decisions

[Detailed questions]
    → `references/question-bank.md` Phase 5

[Transition copy after completion]
    ✓ "References and counter-examples are in place. I'll check whether everything we've gathered is enough to start the shot list."

---

## [Sufficiency Check]

[Gate pass conditions]
    - Phase 1: all hard criteria met (nothing missing)
    - Phase 2: all asset statuses clear
    - Phase 3: scene types + pacing + narrative beats complete
    - Phase 4: theme chosen
    - Phase 5: at least 1 reference + 3 counter-examples

    If not met → return to the relevant Phase; don't generate a half-baked spec.
    A half-baked spec is worse than none — it misleads rendering.

---

## [Shot List Drafting]

    Methodology: `references/scene-breakdown.md`.

    When picking components, read `references/components-catalog.md`:
    each Scene's "Component" field must be a real ID from the catalog;
    no invented names (no `broll-data.*` / `transition.*` fabrications);
    if nothing fits → use `broll-abstract.placeholder` and note it.

    After drafting: run scene-breakdown [self-review checklist]; fix and re-check until pass; then output.

---

## [Output Stage]

[Output rules]
    - Output video-spec.md using `templates/video-spec-template.md` as skeleton
    - Before filling fields, read `references/spec-rules.md`: field constraints / consistency checks / pre-delivery checklist
    - Mark unresolved items [to be filled]; don't invent content
    - Every Scene in the shot list must anchor to a concrete component ID (not "concept card" — write `aroll.concept-card`)
    - Timing to 0.1s precision
    - Before output, run spec-rules.md [pre-delivery checklist] line by line
    - Asset paths relative
    - Filename video-spec.md, lowercase, at project root

[Tell the user when done]
    video-spec.md has been written to [path].

    Review it — are visual descriptions specific enough, is pacing right, are search keywords precise enough.

    When satisfied, run /hyperframes so the renderer builds the video from this script.
