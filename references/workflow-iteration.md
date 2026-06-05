---
name: workflow-iteration
description: Iteration mode workflow. Used when the user modifies an existing video-spec.md.
---

# Iteration Mode Workflow

[Trigger]
    User requests a change / addition / adjustment / replacement / style shift in a project that already has video-spec.md.

[Workflow]
    Catch the request → assess change depth → probe by depth → conflict check → update spec → tell user

[Top-level rules]
    - Seamless handoff — no opening spiel, don't re-run Phase 1–5
    - Read existing spec, catch the request, probe by change depth
    - Don't interrupt the user's workflow
    - Combined changes (multiple layers at once) → handle at the heaviest depth

---

## Major Change

[Trigger]
    Phase 1 must-ask items change / overall pacing type changes / audience or core message changes.

[Hard criteria]
    Can answer "how does this change affect the whole video" — why change / which scenes affected / how overall pacing shifts / can original assets still be used / does core message need to change.

[Fences]
    - Reject "redo everything" — that's 0-to-1 mode; archive the old spec instead
    - Must confirm twice (produce a "expected change overview" for user OK before touching the spec file)

[Transition copy after completion]
    ✓ "Here's the change overview first — [affected Scenes + overall pacing shift + asset add/remove]. I'll update the spec file once you confirm."

---

## Medium Change

[Trigger]
    Add scene / delete scene / replace component / large reorder.

[Hard criteria]
    Can answer "exactly what it becomes + how it connects to neighbors" — which Scene / which component / copy / duration / whether transitions need updating.

[Fences]
    - Don't silently change other Scenes (only what the user specified)
    - If duration changes, re-check total runtime against pacing tier
    - If user is stuck, offer 2–3 concrete options with pros/cons — no open-ended questions

[Transition copy after completion]
    ✓ "Scene 3 becomes `aroll.timeline-card`, duration 2s → 3s, previous shot transition to fade-in. Total +1s. I'll update the file if that works."

---

## Minor Change

[Trigger]
    Adjust narration / on-screen copy / accent color / decoration layer / duration ±0.5s.

[Hard criteria]
    Confirm understanding — what to change / change to what.

[Fences]
    - Don't "improve" copy the user already approved (unless they ask)
    - Don't change markdown structure

[Transition copy after completion]
    ✓ "Accent color #FF6A00 → #FF8C42; everything else unchanged."

---

## [Conflict Detection]

Load existing video-spec.md. If the new request conflicts with existing content, call it out and offer options.

[Common conflict types]
    - Pacing conflict (total duration over / under)
    - Component conflict (doesn't match chosen scene type mix)
    - Asset conflict (dependency not in original spec)
    - Transition conflict (hard rules, e.g. inversion flash ≤ 2, shader transition ≤ 1 per 3 Scenes)
    - Core message conflict (new content dilutes takeaway)

[Stop probing when]
    - You can edit video-spec.md directly without guessing
    - After the edit, the user won't say "that's not what I meant"

---

## [Update Document]

[Discipline]
    - Edit the original spec precisely (don't save a new file)
    - Keep the spec's existing authoring language; for new content default to English (see SKILL.md [Output Language]) unless the spec is already written in another language
    - Don't change markdown structure (heading levels / list style)
    - Don't delete user comments / notes
    - If shot list changed → re-run `references/spec-rules.md` field constraints and [pre-delivery checklist]
      (component ID validity / total duration error / inversion flash budget / transition fields complete)

---

## [Tell user when done]

    video-spec.md updated.
    - Change overview: [which Scenes / how total duration changed / new assets]
    - If rendering is affected, run /hyperframes to regenerate the video
