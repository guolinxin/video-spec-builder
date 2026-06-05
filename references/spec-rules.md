---
name: spec-rules
description: Field constraints, spec consistency checks, and pre-delivery self-review checklist when filling out the video-spec.md template. Use with templates/video-spec-template.md — the template is the skeleton; this file is "how to fill it correctly." Read before drafting or iterating on a spec.
---

# Video Spec Filling Rules

`templates/video-spec-template.md` is the skeleton to fill in; this file defines constraints per field, spec consistency checks, and a pre-output self-review checklist.

General principles:

- Author the spec in English by default — section headings, field values, visual descriptions, motion notes, asset notes, open questions. Narration copy and on-screen text are the only fields that may be non-English: they hold the literal words in the finished video, so they follow the video's display language (see SKILL.md [Output Language]). Override only if the user explicitly asks for the whole spec in another language.
- Time precision unified to 0.1s
- Each shot's `component` ID must be a real ID registered in `components-catalog.md` — no inventing your own
- Only write into the spec what the user explicitly stated; inferred content tagged `[Pending user confirmation]`, pure gaps tagged `[Pending]`, don't fill in from nothing

---

## Spec Consistency Checks

If any item in § 1 Video Fundamentals and § 4 Visual Spec conflicts → error out and fix before output.

- Platform is YouTube Shorts / Douyin / TikTok / Xiaohongshu / WeChat Channels → aspect ratio must be 9:16
- Platform is YouTube long-form / Bilibili / keynote screen → aspect ratio must be 16:9
- Platform is X / LinkedIn → aspect ratio 1:1 or 16:9
- Platform is product site / demo / internal → usually 16:9
- Duration matches information density: hook-style default ≤ 60s / tutorial-style 30s–5min / documentary-style ≥ 60s
- Visual theme required, pick one of two (preset or custom), cannot be empty
- accent color: don't override default; if changing, give concrete hex — don't accept "brand color" or "same as logo"
- Quality: draft / review stage fill `standard`, final delivery fill `high` (high render time roughly doubles)

---

## Section Field Constraints

### § 1 Video Fundamentals
- Purpose / audience / core message — no vague adjectives allowed
- Audience familiarity must define terminology boundaries — don't accept "everyone will understand"
- Tone of voice needs concrete reference personas — don't accept "professional / premium"
- Core message ≤ 12 characters, must work as a big-type poster headline

### § 2 Narrative Structure
- Narrative beat segment time ranges must sum to total video duration
- Emotional arc's 3 words must show directional change — don't accept "nice / worth it"
- Audio-visual relationship needs at least 1 misalignment point — don't accept "fully synchronized throughout"
- Category cliché anti-patterns: at least 3 items (visual / narrative / pacing, one each)

### § 3 Expression Toolkit
- Scene types: 3–5 kinds, listed in order of appearance
- Social short-form (YouTube Shorts / Douyin / TikTok / Xiaohongshu / WeChat Channels): karaoke word-by-word subtitles default required
- 3D / shader / audio-reactive — each must be explicit yes/no; if yes, must have description
- Pacing baseline consistent with information density

### § 4 Visual Spec
- Only adjust 4 dimensions: accent color / decoration density / component whitelist / component blacklist
- Theme-locked dimensions (background / type scale / fonts / weights / motion curves / radius spacing) not overridden here — change theme to change those
- Don't write concrete px / ms / font-size values

### § 5 Asset Inventory
- Existing assets must have concrete paths; if path doesn't exist, say so — don't pretend it works
- Assets to be generated must specify generation method (voice ID / rate / source file)
- Assets to search: all 4 fields required (source platform / keywords / purpose / acceptance criteria)
- Keywords must be concretely searchable; translate vague Chinese terms to English — don't write "nice-looking / premium feel"

### § 6 Shot List (focus)

Field constraints:

- **Time**: start/end seconds, 0.1s precision — no "about 3 seconds / brief pause"
- **Type**: A-roll (main narration) / B-roll (supporting footage) / transition (standalone transition shot like inversion flash)
- **Component**: must be ID registered in components-catalog.md; if not found → `broll-abstract.placeholder` + register in § 9
- **Narration vs on-screen text**: write separately even if content is identical (one is heard, one is seen)
- **Expected content**: concrete information this shot conveys (data / concept / emotion / action) — no empty filler
- **Expected effect**: audience reaction — no "nice-looking / premium"
- **Visual description**: what's in frame, layout, 3D or not, 9:16 vs 16:9 adaptation — all visual dimensions must land here
- **Motion notes**: verb-level (SLAMS / CASCADE / FLOATS / DRAWS), no ms / ease parameters
- **SFX description**: every Scene must have one — write `none` if no SFX
- **Transitions**: enter + exit both required; "hard cut" is a valid transition and must be written explicitly
- **Asset dependencies**: list all assets this Scene uses

Special rules:

- Inversion flash ≤ 2 times per video, interval ≥ 8s between uses; from 2nd use onward note in visual description "Nth inversion flash (N remaining)"
- Final shot is the only Scene allowed exit animation (fade-out to black); other Scenes only write entrance
- 9:16 vertical layout: three columns become three rows / subtitle area moves up / max width narrows / big type narrows to 60% frame width — visual description must account for this
- A-roll must have complete narration text (word-by-word subtitle highlight — ellipsis not allowed)
- Same component used ≥ 4 times across video → visual monotony warning, consider swapping components
- Bridge shots ≤ 15% of total
- Hook shot must land within first 3s of video (at least 1)

### § 7 Audio Timeline
- TTS narration: specify "generate with [voice ID] at [Nx rate] from [script file]"
- BGM volume usually 0.15–0.25; duck to 0.1–0.15 when narration present
- SFX timecodes must map to trigger points in § 6 shot list
- BGM start/end time = total video duration

### § 8 References & Anti-patterns
- At least 1 positive reference + 1 differentiation point
- At least 1 anti-pattern + 3 "absolutely not" items (visual / narrative / pacing, one each)
- Don't accept "all look good / none are similar"

### § 9 Open Questions
- Field path format: `Section name / sub-item` — top level uses section title (no numbering), second level uses field name, Scenes use `Scene NN` zero-padded
- Examples: `Video Fundamentals / Core message` · `Scene 03 / Visual description` · `Audio Timeline / Background music`
- If no open questions: write "None — spec is complete"

---

## Pre-Delivery Self-Review Checklist

Before outputting video-spec.md, go through each item:

- [ ] Spec authored in English (headings / field values / descriptions / motion / asset notes); only narration & on-screen copy may be non-English, matching the video's display language
- [ ] First line of body is "Please generate a video according to the following script…"
- [ ] § 1 Video Fundamentals fields all filled; unknowns written as `[Pending]`, no blanks
- [ ] Spec consistency checks all pass (see above)
- [ ] Audience persona specific to role + pain point; core message ≤ 12 characters
- [ ] § 6 every Scene has all 12 fields; visual description / SFX description / expected content / expected effect none omitted
- [ ] Every Scene time precision 0.1s; component IDs real, none invented
- [ ] Every Scene transition enter + exit written; "hard cut" also explicit
- [ ] Motion fields verb-only, no ms / ease parameters
- [ ] Narration and on-screen text written separately even if identical
- [ ] Inversion flash ≤ 2 times, interval ≥ 8s; final shot is only Scene with exit animation
- [ ] 9:16 vertical layout differences reflected in every Scene's visual description
- [ ] § 7 SFX timecodes findable in § 6; BGM start/end = total video duration
- [ ] Pacing tier matches information density; total duration error ≤ ±0.5s (see `pacing-rules.md`)
