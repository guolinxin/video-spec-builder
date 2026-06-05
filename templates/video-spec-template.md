---
name: video-spec-template
description: Skeleton template for video-spec.md. Copy the full text, replace each [placeholder] with real content, and you have a complete video generation script you can hand to the rendering AI — 9 script sections, no frontmatter. Field constraints, spec validation, and pre-delivery checklist → references/spec-rules.md.
---

# Video Spec Template

Copy the entire code block below and save it as `video-spec.md` in the project root. Each `[bracket]` is a placeholder — replace the brackets and the instructional text inside with your actual content.

Write the spec in English by default. Narration copy and on-screen text are the exception: they hold the literal words in the finished video, so write them in the video's display language (see SKILL.md [Output Language]).

Reference docs while filling in:

- Field constraints / spec consistency checks / pre-delivery checklist → `references/spec-rules.md`
- Which component ID to use in the shot list → `references/components-catalog.md`
- How to break a script or selling points into shots → `references/scene-breakdown.md`

---

```
Please generate a video according to the following script. Below is the script and detailed breakdown for this video.


## 1. Video Fundamentals

- Title: [video title]
- Purpose: [what this video should achieve — who should remember what, what they should do after watching]
- Audience: [who the target viewer is — role, pain points or interests, viewing context]
- Viewer familiarity: [terms the audience already knows, and terms you should not assume they know]
- Platform & duration: [where it will be published, total runtime]
- Visual spec: [aspect ratio, frame rate, whether it must work without sound]
- Output: [file format, quality]
- Core message: [one-line takeaway, short enough to be a poster headline]
- Information density: [fast-paced attention-grabbing, steady explanatory, or slow immersive — one sentence]
- Tone: [how it should sound, one or two concrete reference voices; and styles to avoid]


## 2. Narrative Structure

- Narrative beats: [how the video is divided — time per segment and each segment's role]
- Emotional arc: [opening, middle, and closing emotions, with direction of change]
- Audio-visual relationship: [whether BGM is narrative or atmospheric; mark at least one deliberate audio-visual mismatch]
- Homogeneity counter-examples: [what this video should NOT look/sound/feel like in visual, narrative, and pacing terms]


## 3. Expression Toolkit

- Scene type mix: [which visual approaches this video uses, in order of appearance]
- Subtitle presentation: [how subtitles appear — full sentence, keyword highlight, or karaoke word-by-word]
- Keyword emphasis: [circles, highlights, hand-drawn markers, etc.; write "not needed" if none]
- Text animation: [typewriter, dynamic font weight, etc.]
- 3D: [whether 3D is needed; if yes, where and where models come from]
- Transition style: [overall approach — mostly hard cuts vs. fancy transitions, approximate ratio]
- Special visuals: [shader transitions, audio-reactive visualization, path animation, etc.; specify where if used]
- Pacing baseline: [average seconds per shot, approximate total narration word count]


## 4. Visual Guidelines

- Visual theme: [preset name (e.g. Swiss Pulse), or for custom theme write "design.md (project root)"]
- Accent color: [emphasis color; leave default or provide a specific value]
- Decoration density: [more or fewer decorative elements on screen]
- Component preferences: [components you especially want or absolutely avoid; write "none" if not applicable]


## 5. Asset Inventory

### Existing assets

[List each asset you already have — narration script, video clips, on-camera talent, images, data, logos, fonts, 3D models, etc., with concrete file paths]

### Assets to generate

[Assets to produce on the fly — e.g. TTS narration, subtitles, matting — with how to generate each and output file path]

### Assets to search for

[Items to find on stock/asset sites; for each: platform, English search keywords, where used, acceptance criteria. Write "no search assets needed" if none]


## 6. Shot List

One block per shot, numbered from Scene 01 with zero-padding. Each shot uses the fields below:

### Scene 01 · [start sec]–[end sec] · [this shot's narrative role]

- Type: [main explainer, supporting, or pure transition]
- Component: [component ID from components-catalog.md]
- Narration: [full narration text for this shot; write "none" if no narration]
- On-screen text: [text shown on screen, may differ from narration; write "none" if none]
- Expected content: [what this shot conveys — data, concept, emotion, or action]
- Expected effect: [what the viewer should feel — awe, understanding, recall, resonance]
- Visual description: [what's in frame, layout, 3D or not, 9:16 vs 16:9 adaptation, key visual elements]
- Motion notes: [how the frame moves, described with verbs; no millisecond or easing values]
- Sound effects: [SFX if any — what, when, volume; write "none" if none]
- Transition in: [how this shot enters]
- Transition out: [how this shot exits]
- Asset dependencies: [specific assets used in this shot]

### Scene 02 · ……

[Repeat the same fields for each subsequent shot]


## 7. Audio Timeline

- Narration: [start/end time per segment, source, volume]
- Background music: [BGM start/end, file, volume, fade in/out; duck level when narration plays]
- Sound effects: [timestamp, description, file, volume per SFX]


## 8. References & Counter-examples

- Positive references: [one to three concrete reference works, each with what to emulate and what to do differently]
- Static references: [posters, screenshots, etc., with what specific aspect to borrow]
- Counter-examples: [what you explicitly do NOT want — specific videos or competitors and what you dislike]


## 9. Open Questions

[Points not yet decided, needing input or user confirmation; list each. If everything is settled, write "none — spec is complete"]
```
