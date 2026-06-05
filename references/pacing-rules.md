---
name: pacing-rules
description: Video pacing and duration standards.
---

# Pacing Rules

[When to use]
    - After selecting information density (Phase 1.5)
    - When allocating each Scene's duration
    - When deciding transition density
    - When validating total duration
    - When judging whether a hook shot qualifies

[Core proposition]
    Pacing isn't a "feeling" — it's math about how much information each second carries.
    - High density = one information point per second
    - Low density = one information point every 5–8 seconds + emotional fill in between
    - Pacing ↔ platform constrain each other (Douyin doesn't allow slow pacing; keynotes don't allow hook-style)

---

## [Three Pacing Tiers]

Per dominant pacing tier: shot duration / shots per minute / major transition frequency / negative space ratio.

```
[Hook-style · High density]
    Use for: short-form openings / Douyin / ads / product launches
    Per shot: 0.8 - 2.0s
    Shots per minute: 30 - 60
    Major transition frequency: every 4-6s
    Negative space: < 5%
    Narration word count: ≈ 1.5-2 chars/sec (60s ≈ 90-130 Chinese chars)
    Typical use: YouTube Shorts 30s · TikTok 15s · feed ads 6s
    Audio: BGM must have strong beat; each shot cut aligns to a beat

[Tutorial-style · Medium density]
    Use for: explainer / tutorial / product demo / Bilibili knowledge content
    Per shot: 2.0 - 5.0s
    Shots per minute: 15 - 30
    Major transition frequency: every 10-15s
    Negative space: 10-15%
    Narration word count: ≈ 2-3 chars/sec (3min ≈ 400-550 Chinese chars)
    Typical use: Bilibili knowledge 3-5min · tutorial videos · product demo 60-90s
    Audio: softer BGM, narration primary, breathing room at key beats

[Documentary-style · Slow pacing]
    Use for: vlog / documentary / brand film / slow narrative
    Per shot: 3.0 - 8.0s
    Shots per minute: 8 - 15
    Major transition frequency: every 20-30s
    Negative space: 20-30%
    Narration word count: ≈ 1.5-2.5 chars/sec (90s ≈ 140-220 Chinese chars; long stretches without narration OK)
    Typical use: brand film 90s · documentary 5min+ · movie trailer 60-120s
    Audio: ambient / emotional sound / slow narration / negative space
```

[Rhythm naming]
    Specific rhythm patterns (e.g. fast-fast-SLOW / hook-PUNCH-hold-CTA) are decided in the visual enrichment stage.
    This file only governs duration baselines + total duration validation.

---

## [Total Duration Validation]

Reverse-engineer shot count + transition density from target duration.

| Duration | Shots | Major transitions | Inversion flash | Hook timing | Typical scenario |
|---|---|---|---|---|---|
| < 3s | — | — | — | — | Reject (insufficient information load) |
| 3-5s | 1-2 | 0 | 0 | Entire shot is hook | Micro-video cover / ultra-short ad |
| 5-10s | 3-7 | 0-1 | ≤ 1 | Entire piece is hook | Douyin cover / Twitter / Story |
| 15-20s | 8-15 | 1-3 | ≤ 1 | First 3s | Douyin single / feed ad |
| 30s | 12-25 | 2-4 | ≤ 2 | First 3-5s + ending 2-3s CTA | Douyin extended / product promo |
| 60-90s | 18-40 | 3-6 | ≤ 2 | Mid-section allows mini chapter switches | Keynote opener / brand film / vlog |
| 3-5min | 50-150 | 6-12 | Chapter card separators | Rhythm reset every 30-45s | YouTube / Bilibili knowledge |
| 5-10min | 90-300 | 12-30 | Chapter card separators | Independent hook per chapter | YouTube long-form / Bilibili deep dive |
| 10-30min | Split spec | — | — | Independent hook per episode | Split into 2-4 independent specs |
| ≥ 30min | Split series | — | — | — | Outside single-spec scope |

[Platform reference]

| Platform | Pacing type | Per-shot duration | Hook timing | Aspect ratio |
|---|---|---|---|---|
| Douyin / TikTok | Hook-style | 0.8-2s | First 3s (subtitles mandatory) | 9:16 |
| YouTube Shorts | Hook-style | 1-2.5s | First 3s | 9:16 |
| YouTube main channel | Tutorial-style | 2.5-5s | First 15s (chapter markers) | 16:9 |
| Bilibili knowledge | Tutorial-style | 2-4s | First 10s (chapter cards) | 16:9 |
| Keynote screen | Documentary-style | 3-8s | First 5s (establish mood) | 16:9 |
| Brand site hero | Loop-friendly | 5-15s | First/last frame similar | 16:9 |

[Duration estimation formula]
    Shot count N = total duration T ÷ average shot duration
    Total transition time ≈ N × 0.2-0.5s (rough estimate)
    Actual shot total duration = T − total transition time
    ±0.5s error allowed.

    Examples:
    - Hook-style 30s → N ≈ 30/1.5 ≈ 20 shots, transitions take 2-3s
    - Tutorial-style 3min → N ≈ 180/3.5 ≈ 51 shots, transitions take 8-10s
    - Documentary-style 90s → N ≈ 90/5 ≈ 18 shots, transitions take 5-8s

---

## [Hook Shots]

The first shot decides whether the user stays or swipes — it's the most expensive shot in the entire video.

```
[First shot is make-or-break]
    - Must establish "reason to keep watching" within 0-3s
    - Hook shot duration ≤ 2s (short and punchy)
    - Must have strong visual stimulus: big type / number / high contrast / transition flash
    - First shot cannot be a "quiet title card"
    - Logo alone cannot occupy first shot (logo belongs at end, not as hook)
    - "Black screen + fade-in text" cannot exceed 1s (unless extreme slow narrative)

[Recommended hook components]
    1. broll-hero.big-type        Text hook
    2. broll-hero.big-number      Data hook
    3. broll-hero.inversion-flash Visual entry
    4. aroll.subtitle-highlight   Spoken hook
    5. broll-charts.bar-chart     Data contrast hook

[Hook anti-patterns]
    × First shot: brand logo fade-in for 3 seconds
    × First shot: black screen + "The story begins on a night..."
    × First shot: host self-introduction
    × First shot: quiet product image (unless luxury film)
```

---

## [Transition Density]

Transitions aren't decoration — they're breathing marks in the rhythm. Wrong use causes dizziness; too few feels flat.

```
[Hard cut / soft transition / major transition ratio]
    - 80% hard cuts (instant switch between scenes)
    - 15% soft transitions (between B-roll shots)
    - 5% major transitions (inversion flash / shader / wipe — chapter switches only)
    Specific crossfade / shader duration decided in visual enrichment stage.

[Inversion flash discipline]
    - ≤ 2 times per video (hard rule)
    - No consecutive use (interval ≥ 8s)
    - For "chapter switch" or "rhetorical pause" — not daily switching
    - No content during flash instant (pure white screen is fine)

[Same-component consecutive cuts]
    Example: 3 consecutive broll-charts.bar-chart showing quarterly data
    - Use soft cut + component's built-in stagger so data changes feel continuous
    - Don't "introduce a brand new chart" every time
    - Keep component frame stable, update internal data — like dashboard switching

[Shader transition discipline]
    - Only for major rhythm turning points (hook → body / body → climax / climax → close)
    - ≤ 1 time per video (under 30s) or ≤ 2 times (60s+)
    - Shader style must match video tone (liquid/pixel/fractal vs minimal conflict)
    - Specific shader ID decided in visual enrichment stage
```

---

## [Information Density]

Core criterion for whether each Scene can exist.

```
[Information load per Scene]
    - Hook-style: 1 core information point + 0 supporting points (single focused hit)
    - Tutorial-style: 1 core information point + 1-2 supporting points (headline + 1-2 details)
    - Documentary-style: 1 core information point + 0-1 atmospheric point

[No empty frames]
    - Every Scene must carry at least 1 information point
    - No "transition black screen for 3 seconds" (unless pre-hook suspense, max 0.5s)
    - Negative space must carry "breathing room" not "waiting"
    - User says "quiet moment here" → probe "what should the quiet carry? Silence is information, not blank space"

[Text density]
    - On-screen text ≤ 12 Chinese characters or ≤ 8 English words
    - Pull-quote exception: up to 30 Chinese characters / 20 English words
    - Data chart labels excepted
    - Over limit → split into two shots + crossfade

[Data density]
    - Single screen ≤ 3 numbers (hook shot ≤ 1 big number)
    - Chart axis labels ≤ 7
    - Table ≤ 5 rows × 4 columns (beyond that, split into multiple shots)
```

---

## [Micro-Video Strategy · ≤ 10s]

Douyin covers, Twitter short posts, Story / Reels covers, feed hover previews, etc.
Ultra-short duration means information load must converge to 1-2 points — otherwise viewers can't digest.

```
[Duration decisions]
    - < 3s: Reject. Tell user to use a static image or extend to 5s+
    - 3-5s: Single or dual shot, 2-3s each. Pure hero big type / data impact. Hook is everything
    - 5-10s: Hook-style, 0.8-1.5s per shot, 3-7 shots. Hook + brief expansion + closing big type

[Additional requirements]
    - Structure = hook + CTA (or hook + hero takeaway) — no separate "expansion/climax"
    - Inversion flash ≤ 1 time (2 times in 5s is too dense — hard on the eyes)
    - Text density ≤ 8 chars per screen (short dwell time — over 8 chars unreadable)
    - Narration control:
        - ≤ 5s: No narration, pure visual + big type
        - 5-10s: ≤ 25 chars narration, or subtitles only without narration
    - Must be mute-friendly (viewers on silent must still get the message)
    - Must have strong visual stimulus (big type / big number / high contrast / inversion flash — pick 1)

[Anti-patterns]
    × 5s video with 3 narration segments → narration unfinished, user already swiped
    × 8s video with 4 shots at 1.5s each telling 4 things → information overload, remembers none
    × 3s video with fade in/out → transition eats 1s, wastes 1/3 of duration
```

---

## [Long-Form Strategy · ≥ 5min]

Long videos split into episodes (chapters) — don't write one monolithic spec.
Chapter splits bring: independent hook per chapter (re-grab audience) + rhythm reset points (fast-slow alternation more visible) + render failure can redo independently.

```
[Duration decisions]
    - ≤ 5min: Single spec covers fully
    - 5-10min: Single spec, shot list must divide into 3-5 chapters (each with independent beat + climax)
    - 10-30min: Split into 2-4 independent specs (each 5-10min), linked with episode info
        - Each spec notes in § 1 Video Fundamentals: "episode 1/4 · series name <series-name>"
        - Each episode independently renderable, but shared theme / accent / component whitelist
    - ≥ 30min: Recommend splitting into series (outside single-spec scope) — do trailer + episode 1 first

[Additional requirements]
    - Independent hook per chapter (re-grab every 60-90s or attention drains)
    - Rhythm reset point per chapter (fast-slow alternation within chapter more visible — no same-speed entire chapter)
    - Between chapters: shader transition or inversion flash as chapter card separator (chapter number + title inside card)
    - Total shots = 60-180 (5-10min range), estimate at 2-4s/shot average
    - Between chapters use timeline-row or chapter-marker for "current progress" (mandatory for high-information scenarios)
    - BGM must have 2-3 motif switches (can't loop same track 30 times over 5min)

[Recommended chapter structure]
    - Overview hook (5-10%): pose the problem the whole piece solves
    - Chapter 1 (25%): first argument + evidence + mini climax
    - Chapter 2 (25%): second argument + evidence + mini climax
    - Chapter 3 (25%): third argument / twist / synthesis
    - Close CTA (10-15%): restate core takeaway + call to action

[Anti-patterns]
    × 8min video with no chapter cards → viewer zones out at 3min
    × All chapters same rhythm (3s/shot) → no reset points, viewer fatigue
    × BGM one track looped start to finish → auditory monotony
```

---

## [Pacing Validation Self-Review]

Must pass before generating video-spec.md.

```
□ First shot within 2s (hook-style) / 5s (tutorial-style) / 8s (documentary-style)
□ Total shot count matches pacing tier baseline
□ Inversion flash ≤ 2 times and not consecutive
□ Shader transitions ≤ 2 times
□ No empty frames (except < 0.5s suspense)
□ Text density ≤ 12 chars/screen
□ Every Scene carries at least 1 information point
□ Transition ratio: 80% hard cut / 15% soft / 5% major
□ Total duration = Σ shot durations + Σ transition durations (error ±0.5s)
□ Pacing type matches platform (Douyin doesn't allow slow pacing; keynotes don't allow hook-style)
□ Hook shot has strong visual stimulus
□ CTA shot duration 2-3s (not more, not less)
□ Mid/long video (≥ 60s) has rhythm reset points
```

---

## [Common Errors]

```
[Slow first shot]
    Diagnosis: First shot exceeds 2s without visual impact
    Fix: Swap to one of recommended hook components, or change pacing from hook to slow (only when not social platform)

[Consecutive inversion flashes]
    Diagnosis: Two inversion flashes interval < 8s
    Fix: Keep one, change the other to hard cut or crossfade

[Total duration mismatch]
    Diagnosis: Σ shot durations + Σ transition durations ≠ target duration
    Fix: Adjust shot durations, prioritize compressing non-critical mid-section shots

[Zero information density]
    Diagnosis: A Scene ≥ 3s with no concrete information load
    Fix: Cut it, or add content (text / data / visual detail)

[Too many transitions]
    Diagnosis: 30s video used 5 inversion flashes
    Fix: Keep 2 (chapter switch + climax), change rest to hard cuts

[Pacing-platform mismatch]
    Diagnosis: Douyin video with slow pacing; keynote with hook-style fast cuts
    Fix: Align pacing to platform baseline
```
