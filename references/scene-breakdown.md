---
name: scene-breakdown
description: Methodology for breaking down full script / selling-point list → shot list.
---

# Scene Breakdown Methodology

[When to use]
    - 0-1 mode: after Phase 1-5 questions complete, enter shot-list drafting stage
    - Iteration mode: adding new scenes / major reordering

[Core concept]
    Scene breakdown = translating script into executable visuals + motion — not just cutting paragraphs.
    Every Scene must answer 4 questions:
    1. Information load — what should the viewer get from this shot?
    2. Component ID — which component from components-catalog carries it?
    3. Duration — how many seconds?
    4. Transition — how in, how out?

---

## [Input]

[Input formats]

    1. Full script (ideal)
        Complete narration text, split by sentence / semantic unit

    2. Selling-point list
        3-7 key points, each needing its own shot

    3. Outline
        Three-act structure (open-middle-close), each act with rough points

    4. None of the above
        Draft from core message + audience + duration (prerequisite: Phase 1 five dimensions complete)

[Input validation]
    Every input format must be able to answer:
    - Total duration (from Phase 1)
    - Information density tier (hook / tutorial / documentary)
    - Core message (≤ 12 characters)
    - Narrative structure (from Phase 3.5 / 3.6 / 3.7):
      Beat curve + emotional arc + audio-visual relationship + category cliché anti-patterns
      → Must read video-spec.md [Narrative Structure] section before breaking down shots
      → Every Scene must land on a segment of the beat curve

---

## [Six-Step Method]

### [Step 1 · Content segmentation]

    [Full script]
        1. Split by sentence → candidate shot list
        2. Merge consecutive short sentences (< 8 chars) → rhythm shot
            Example: "Here. Look at this. This is the answer." → merge into 1 shot, but keep 3 motion layers
        3. Long sentences (> 30 chars) split into multiple shots
            Split points: conjunctions (but / because / so) / turn markers / data appearance
        4. Parallel / list sentences → independent shot per item (visual "sequence feel")

    [Selling-point list]
        Each selling point splits into:
        - 1 core shot (state the selling point)
        - 0-2 supporting shots (evidence / data / demo)
        - Total control: 3-7 selling points × avg 2 shots = 6-14 Scenes

    [Outline]
        Three-part allocation:
        - Open (hook): 1-3 shots, 15-20% (30s video → within 5-6s / 60s → within 10-12s)
        - Middle (core): 5-15 shots, 60-70% (main information density zone, fast-slow alternation)
        - Close (CTA / wrap): 1-2 shots, 10-15% (wrap up core message + optional CTA)

    [None of the above]
        Draft outline from Phase 1 five dimensions:
        - Estimate total shot count (pacing type × total duration → rough shot count)
        - Draft three-part outline
        - Must get user confirmation on outline before breaking down further
        - Don't jump from zero to full script — outline calibration in between

### [Step 2 · Rhythm allocation]

    [Duration baseline by pacing type]

        - Hook-style (0.8-2s main per shot, key shots 2-3s)
        - Tutorial-style (2-5s main per shot, key explanations 5-7s)
        - Documentary-style (3-8s main per shot, emphasis shots 6-10s)

        See pacing-rules.md for detailed allocation.

    [Total duration validation]
        - All shot durations + transition durations (rough) ≈ user-set total duration
        - Transition rough estimate 0.2-0.5s per transition (precise values set at render time)
        - ±0.5s error allowed

    [Rhythm curve discipline]
        - No "constant speed throughout" — causes viewer fatigue
        - Recommended rhythm curve: fast-fast-slow-fast-slow-slow-fast close
        - Shot before key information can speed up (create contrast, highlight key shot's "pause feel")

### [Step 3 · Shot tagging]

    [Tag set (multiple tags per shot allowed)]

        - `[hook]` Grab attention (opening / major turn / contrast impact)
        - `[data]` Data / statistics / ranking
        - `[concept]` Concept / definition / abstract explanation
        - `[emotion]` Emotion / values / story feel
        - `[demo]` Demo / operation / product feature
        - `[versus]` Comparison / contrast / A vs B
        - `[structure]` Structure / hierarchy / classification
        - `[flow]` Process / steps / sequence
        - `[cta]` Call to action / guide action
        - `[bridge]` Transition / bridge (no main information, but connects two segments)
        - `[summary]` Summary / wrap / restate core message

    [Tagging discipline]
        - Every Scene at least 1 primary tag + 0-2 secondary tags
        - `[bridge]` share ≤ 15% (too many bridges dilutes information density)
        - `[hook]` tagged shots must land within first 3s of video (at least 1)
        - Scene with both `[data] + [concept]` → warning "high information compound — watch for overload"

### [Step 4 · Component matching]

    [Pick component from components-catalog by tag + content nature]

    | Tag | Priority match |
    |------|---------|
    | hook | broll-hero.big-type / broll-hero.inversion-flash / aroll.subtitle-highlight |
    | data | broll-charts.* / broll-hero.big-number |
    | concept | broll-abstract.* / aroll.concept-card |
    | emotion | broll-hero.pull-quote |
    | demo | broll-ui.* / live action + aroll |
    | versus | broll-abstract.versus / broll-abstract.spectrum |
    | structure | broll-structure.* / broll-structures2.* |
    | flow | broll-flows.* |
    | cta | broll-hero.big-type |
    | bridge | broll-hero.inversion-flash (note ≤2 times) |
    | summary | broll-hero.pull-quote / aroll.subtitle-highlight |

    [Component matching discipline]
        - No "inventing components" — must map to existing components-catalog IDs
        - No suitable component for a Scene → rewrite copy / change tags, don't invent component
        - Same component used ≥ 4 times across video → warning "visual monotony"
        - Same component class (e.g. broll-charts.*) used ≥ 5 times → warning "chart overload"

    [Detailed list]
        See components-catalog.md (includes each component's use cases / when not to use / content expectations).

### [Step 5 · Transition decisions]

    Every Scene must specify "transition in" and "transition out" — type only, no parameters.
    Jump cuts not allowed.

    Transition types (4 coarse-grain):
    - Hard cut — default, instant switch
    - Soft cut (crossfade) — gentle transition
    - Inversion flash — hard rule: ≤ 2 times/video, interval ≥ 8s
    - Shader transition — only write "shader transition", specific effect chosen later

    Specific ease / duration / shader ID decided in visual enrichment stage.

### [Step 6 · Asset binding]

    [Assets every shot must bind]

        - Narration copy
            - Extract from corresponding script paragraph
            - If no script, you supplement from Scene theme + on-screen copy
            - Using TTS → mark in asset dependencies "voice/scene-XX.mp3"

        - On-screen copy
            - Keywords from narration (not full text!)
            - Core sentence ≤ 12 characters
            - Highlight words marked separately

        - Asset dependencies
            Mark needed: images (path) / video (path + duration + start offset) /
            data file (data.json) / Lottie / 3D model (path + camera params) / non-default fonts

        - Shots missing assets
            Mark `[Pending asset]` + fallback plan
            Example: `[Pending asset] live product demo video; fallback: simulate product UI with broll-ui.browser`

    [Asset binding discipline]
        - No "overly optimistic" — if no asset, mark pending, don't assume you can generate
        - Asset paths use relative paths (./assets/xxx)
        - Same asset reused across Scenes → explicitly mark "reused from Scene XX"

---

## [Output Format]

[Required fields per shot]
    Strictly align with templates/video-spec-template.md "Script · Shot list" section fields, order unchanged:

    Title line: Scene NN · [start]s – [end]s · [beat tag, e.g. hook / contrast / data / climax / CTA]

    11 content fields:
        1.  Type (A-roll / B-roll / transition)
        2.  Component (real ID from components-catalog.md)
        3.  Narration copy (full original / —)
        4.  On-screen copy (text displayed on screen / —)
        5.  Expected content (what this shot conveys: content / data / concept / emotion)
        6.  Expected effect (audience reaction: awe / understanding / remember / laugh / resonance)
        7.  Visual description (what's in frame, layout, 3D or not, key visual elements)
        8.  Motion notes (verb-level, e.g. SLAMS / CASCADE / floats)
        9.  SFX description (no SFX write `none`; if yes, specific type + timing)
        10. Transition in + transition out (type-level: hard cut / crossfade / shader / inversion flash)
        11. Asset dependencies (narration.wav segment / bgm.mp3 / pending search X / existing asset Y)

[Scene layout]

```
Scene XX  [start-end / duration]  · [beat tag]
├─ Type: A-roll / B-roll / transition
├─ Component ID: broll-hero.big-number
├─ Narration copy: …
├─ On-screen copy: … (with highlight word markers)
├─ [Expected content]: concrete content this shot conveys (data/concept/emotion/action)
├─ [Expected effect]: audience reaction this shot should produce (awe/understanding/remember/laugh/resonance)
├─ Visual description: (frame composition / layout / 3D or not / decoration layer)
├─ Motion notes: (key entrance / exit / internal motion, verb-level)
├─ SFX description: (none / specific type + timing, e.g. "3.0s · short click, volume 0.3")
├─ Transition in ← / Transition out →
└─ Asset dependencies: (path / [Pending asset])
```

[Expected content] and [Expected effect] are product requirements — render adjusts visual intensity, rhythm, decoration layer per these fields.
[SFX description] field cannot be omitted; write `none` explicitly if no SFX, to avoid omission at output.

[Motion notes]
    Verb-level only (choreography verbs), no specific motion parameters.
    Common verbs: SLAMS / CASCADE / FLOATS / WHIPS / DISSOLVES / PULSES / SPIRALS / SCRATCHES.

    Good: "title SLAMS in + subtitle CASCADE staggered"
    Bad: "y 30→0, 700ms ease power3.out" (that's visual enrichment's job)

    Specific ease / duration / physics parameters written in enrichment stage.

---

## [Self-Review Checklist]

[Check item by item after output]

```
□ Every Scene anchored to component ID in components-catalog (none invented)
□ Total duration = all Scene durations + transition durations (error ±0.5s)
□ Inversion flash ≤ 2 times (hard cap per video)
□ Shader transition frequency ≤ 1/3 of Scenes
□ Every Scene has explicit transition in and out
□ No jump cuts (no transition between cuts)
□ A-roll subtitle highlight shots have complete narration text
□ Data chart Scenes marked with data source (data.json or inline)
□ Scenes using live-action component marked with video path and whether matting needed
□ Each component's "when not to use" principles not violated (see components-catalog)
□ Hook shot lands within first 3s of video
□ Same component used ≤ 4 times across video (visual variety guarantee)
□ [bridge] tagged shots ≤ 15%
□ Rhythm curve not constant speed (has fast-slow contrast)
□ Closing shot has explicit end treatment (fade-out / hold frame / CTA dwell)
□ Scenes missing assets marked [Pending asset] with fallback plan
□ Total narration word count matches total duration (~3-4 chars/sec estimate)
□ All on-screen copy ≤ 12 chars (hero sentence) or ≤ 8 chars (keywords)
□ Every Scene has information load (no empty frames)
□ Every Scene has explicit [Expected content] (concrete information to convey)
□ Every Scene has explicit [Expected effect] (audience reaction)
□ Every Scene has explicit [Visual description] (layout + 3D or not)
□ Every Scene has explicit [SFX description] (write `none` if no SFX — cannot omit)
□ Motion notes verb-level only (SLAMS / CASCADE / FLOATS etc.), no GSAP parameters
□ Transition fields type-only (hard cut / soft cut / inversion flash / shader), no duration / ease
```

---

## [Example]

[Input]
    Project type: Science explainer video
    Platform: YouTube / 30s / 16:9 / 30fps
    Audience: AI engineers with 3-5 years experience
    Core message: Model is compiler, not oracle
    Information density: Tutorial-style (medium information density, digestion time)
    Scene combination: [Big-type poster + Data-driven + Abstract concept + UI demo]
    Decoration layer: hairline grid + corner crosses
    Accent color: #FF6B3D (default)

[Script (30 seconds)]

    > "Let's talk about context engineering. It's not prompt magic. Models aren't lacking intelligence — they're lacking material. Between pure memorization and pure retrieval, RAG leans toward the latter. 87% of developers believe prompt engineering will be replaced by context engineering. Conclusion: the model is a compiler, not an oracle."

[8-Scene complete breakdown]

```
─────────────────────────────────────────
Scene 01  [0.0s - 2.5s / 2.5s]  · [hook] [concept]
├─ Type: B-roll
├─ Component ID: broll-hero.big-type
├─ Narration copy: Let's talk about context engineering.
├─ On-screen copy: Context Engineering
│   Highlight: 「Context Engineering」as full-sentence hero emphasis
├─ [Expected content]: Introduce video's core theme term "context engineering"
├─ [Expected effect]: Viewer hears theme term → wants to know how it differs from "prompting" → willing to keep watching
├─ Visual description: Theme primary color background, hero big type centered.
│   Accent color hairline as lower-left decoration.
│   Corner cross decoration layer default.
│   16:9 landscape, no 3D.
├─ Motion notes:
│   - hero big type SLAMS in
│   - accent bottom line WHIPS sweep
│   - overall holds static close
├─ SFX description: none (let narration carry opening alone)
├─ Transition in ← video start (no prior shot, pure entrance)
├─ Transition out → hard cut
└─ Asset dependencies: none (pure component render)
                                                          
─────────────────────────────────────────
Scene 02  [2.5s - 5.5s / 3.0s]  · [concept] [versus]
├─ Type: B-roll
├─ Component ID: broll-abstract.versus
├─ Narration copy: It's not prompt magic.
├─ On-screen copy: Left 「Prompt Magic」(struck through)  vs  Right 「Material Engineering」
│   Highlight: 「Prompt Magic」with sketchout strike-through
├─ [Expected content]: Establish contrast "reject old belief vs introduce new frame" — context engineering ≠ prompt magic
├─ [Expected effect]: Viewer's prior belief broken → curiosity "then what is it?" → ready to receive new concept
├─ Visual description:
│   - Left-right split layout, left 50% right 50%
│   - Left grayscale muted "Prompt Magic" label
│   - Right accent highlighted "Material Engineering" label
│   - Hairline vertical divider in middle
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - left and right SLIDE in from opposite sides
│   - "Prompt Magic" SCRATCHES struck through
│   - "Material Engineering" PULSES highlighted
├─ SFX description: 3.2s · short click (on strike-through, volume 0.3)
├─ Transition in ← hard cut
├─ Transition out → soft cut (same broll-abstract → broll-abstract)
└─ Asset dependencies: none

─────────────────────────────────────────
Scene 03  [5.5s - 9.0s / 3.5s]  · [concept] [emotion]
├─ Type: B-roll
├─ Component ID: broll-hero.pull-quote
├─ Narration copy: Models aren't lacking intelligence — they're lacking material.
├─ On-screen copy: 「Models aren't lacking intelligence — they're lacking material」
│   Highlight: 「lacking material」accent color + marker sweep highlight
├─ [Expected content]: Reveal core thesis — model capability bottleneck isn't intelligence, but context material fed to it
├─ [Expected effect]: Viewer thinks "that makes sense" → reframes "model doesn't work" as "I didn't give enough material" → cognitive reversal
├─ Visual description:
│   - Pull quote centered layout, large side margins
│   - Quote area uses serif italic emphasis (per theme type scale)
│   - Left oversized quotation mark decoration (accent color)
│   - Full quote in primary color slightly muted
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - quotation marks FLOAT in (before text)
│   - text CASCADE staggered word-by-word
│   - 「lacking material」WHIPS marker sweep highlight
├─ SFX description: none (pull-quote shot lets narration and subtitle pause carry alone)
├─ Transition in ← soft cut
├─ Transition out → hard cut
└─ Asset dependencies: none

─────────────────────────────────────────
Scene 04  [9.0s - 13.0s / 4.0s]  · [concept] [structure]
├─ Type: B-roll
├─ Component ID: broll-abstract.spectrum
├─ Narration copy: Between pure memorization and pure retrieval, RAG leans toward the latter.
├─ On-screen copy: Left end 「Pure Memorization」 ── midpoint ── Right end 「Pure Retrieval」
│   Cursor position: leaning right at 70%, labeled "RAG"
│   Highlight: 「RAG」label in accent color circular chip
├─ [Expected content]: Spatialize abstract concept "RAG leans retrieval" on one axis, position RAG at 70% retrieval side
├─ [Expected effect]: Viewer forms spatial mental model (a ruler, a position) → abstract concept becomes memorable image
├─ Visual description:
│   - Horizontal spectrum bar spans 70% screen width
│   - Spectrum gradient primary to accent (left primary, right accent)
│   - End labels caption tier (Chinese semantic font)
│   - Cursor accent color dot + "RAG" label above
│   - Upper margin for optional caption
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - spectrum bar DRAWS outward from center
│   - end labels CASCADE in after
│   - cursor SLIDES to 70% position
│   - "RAG" label FLOATS up from below cursor
├─ SFX description: 12.0s · short tick (when cursor lands, reinforce positioning, volume 0.25)
├─ Transition in ← hard cut
├─ Transition out → inversion flash (1/2, leading into upcoming data climax)
└─ Asset dependencies: none

─────────────────────────────────────────
Scene 05  [13.0s - 17.5s / 4.5s]  · [data] [hook]
├─ Type: B-roll
├─ Component ID: broll-hero.big-number
├─ Narration copy: 87% of developers believe prompt engineering will be replaced by context engineering.
├─ On-screen copy:
│   Main number: 「87%」(display tier main digit, accent color)
│   Subhead: 「Developers believe prompt engineering will be replaced by context engineering」
│   Highlight: 「prompt engineering」「context engineering」with hairline underline
├─ [Expected content]: Use 87% concrete number to confirm "context engineering replacing prompt engineering" is industry consensus
├─ [Expected effect]: Viewer awed by number (87% not minority) → urgency "I need to keep up" → upgrades concept from "heard about it" to "must learn"
├─ Visual description:
│   - Main number large size, centered-left
│   - Subhead body tier primary slightly muted, multi-line right side
│   - Lower-left small text "Source: [fictional placeholder / data.json]"
│   - Decoration: upper-right corner crosses retained, lower-left accent short line
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - 87% main number COUNTS UP from 0 to 87
│   - "%" symbol SLAMS in
│   - subhead CASCADE in line by line
│   - keyword 「context engineering」WHIPS hairline sweep in
├─ SFX description: 13.0s · swoosh (with inversion flash entry, volume 0.6) + 13.4s · low thump (when 87% lands, volume 0.3)
├─ Transition in ← inversion flash (2/2, quota used, creating data climax)
├─ Transition out → soft cut
└─ Asset dependencies: data.json (87% source metadata, or spec note [Pending asset - data source])

─────────────────────────────────────────
Scene 06  [17.5s - 21.0s / 3.5s]  · [demo] [structure]
├─ Type: B-roll
├─ Component ID: broll-ui.terminal
├─ Narration copy: (no narration, pure demo)
├─ On-screen copy: Terminal window content (typing effect):
│   ```
│   $ context.load("docs/*.md")
│     loading 142 files... done
│   $ context.compose()
│     → 23k tokens ready
│   ```
├─ [Expected content]: Instantiate abstract "context engineering" as executable code action (load 142 files → 23k tokens)
├─ [Expected effect]: Viewer "oh that's how it's done" → concept goes from abstract to concrete actionable → confidence "I can do this too"
├─ Visual description:
│   - Terminal window centered, dark panel background + primary text inverted
│   - Top title bar macOS-style three dots decoration
│   - Terminal area monospace font (per theme tier)
│   - Command prompt $ in accent color
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - terminal window FLOATS in
│   - first command line types on
│   - second line loading output CASCADE after
│   - "done" PULSES accent highlight flash
│   - third command line types on
│   - "23k tokens" PULSES accent bold emphasis
├─ SFX description: from 17.8s · very light typewriter tick (with each types on, volume 0.2) + 19.5s · short pop ("done" PULSES, volume 0.3)
├─ Transition in ← soft cut
├─ Transition out → shader transition
└─ Asset dependencies: none (pure component + text)

─────────────────────────────────────────
Scene 07  [21.0s - 25.0s / 4.0s]  · [summary] [emotion]
├─ Type: A-roll (if live-action asset) / B-roll fallback
├─ Component ID: aroll.subtitle-highlight (with live action) / broll-hero.pull-quote (fallback)
├─ Narration copy: Conclusion:
├─ On-screen copy:
│   Main: 「Conclusion」(accent marker sweep)
│   Sub: (none, white space for next shot to release core message)
│   Highlight: 「Conclusion」full line accent highlight
├─ [Expected content]: Create semantic beat of "pause + turn" — tell viewer next line is takeaway, pay attention
├─ [Expected effect]: Viewer leans in, stops multitasking → treats "conclusion shot" as must-remember key node → ready to receive core sentence
├─ Visual description:
│   - If live action: talking head centered, bottom subtitle highlighting keywords
│   - If no live action: theme primary background + hero big type 「Conclusion」(serif italic emphasis)
│   - Large upper white space (70%), emphasize lower "Conclusion" subject
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - "Conclusion" SLAMS in
│   - accent marker WHIPS sweep highlight
│   - overall holds static (set expectation "core sentence coming")
├─ SFX description: 21.0s · BGM brief dip 1 beat (audio-visual misalignment emphasis, viewer holds breath); no separate SFX
├─ Transition in ← shader transition (continuing from Scene 06)
├─ Transition out → hard cut
└─ Asset dependencies:
│   - If A-roll: live 4.0s clip (path: ./assets/talking-head.mp4) + u2net matting
│   - If none: mark [Pending asset] live clip; fallback pull-quote

─────────────────────────────────────────
Scene 08  [25.0s - 30.0s / 5.0s]  · [summary] [cta] [hook]
├─ Type: B-roll
├─ Component ID: broll-hero.big-type
├─ Narration copy: The model is a compiler, not an oracle.
├─ On-screen copy:
│   Main sentence (two-line layout):
│     Line 1: 「The model is a compiler,」
│     Line 2: 「not an oracle.」
│   Highlight: 「compiler」accent color, 「oracle」primary muted struck through
├─ [Expected content]: Seal with strongest takeaway within 12 chars — "model is compiler, not oracle", condense whole piece into one shareable sentence
├─ [Expected effect]: Viewer remembers this line, can repeat when explaining to others → video's core message successfully "ships as meme"
├─ Visual description:
│   - Two-line hero type scale layout
│   - Line 1 primary solid, 「compiler」accent color
│   - Line 2 primary muted, 「oracle」sketchout struck through
│   - Centered layout, corner crosses + hairline bottom decoration
│   - Bottom small CTA (optional): "Learn more → context-eng.dev"
│   - 16:9 landscape, no 3D
├─ Motion notes:
│   - line 1 CASCADE word-by-word in
│   - 「compiler」WHIPS accent marker sweep highlight
│   - line 2 CASCADE word-by-word after
│   - 「oracle」SCRATCHES struck through
│   - overall holds for viewer to digest core message
│   - close DISSOLVES hinting end
├─ SFX description: 29.0s · BGM fade-out close
├─ Transition in ← hard cut
├─ Transition out → fade-out (final shot exit)
└─ Asset dependencies: none

─────────────────────────────────────────
```

[Example stats self-review]
    - Total duration: 2.5+3.0+3.5+4.0+4.5+3.5+4.0+5.0 = 30.0s ✅
    - Inversion flash: 2 times (Scene 04→05 entry + Scene 05) ✅ quota used
    - Shader transition: 1 time (Scene 06→07) ✅ < 1/3 limit
    - Hook shot: Scene 01 within first 2.5s ✅
    - Component diversity: broll-hero ×3 / broll-abstract ×2 / big-number ×1 / terminal ×1 / aroll ×1 ✅
    - Every Scene has information load + explicit transitions + no jump cuts ✅
    - Rhythm curve: 2.5-3.0-3.5-4.0-4.5-3.5-4.0-5.0 (fast front, slow back) ✅

---

## [Common Pitfalls]

[Pitfall 1 · Splitting by sentence equals done]
    Problem: Sentence boundary ≠ visual cut point
    Fix: Second pass — which short sentences merge, which long sentences split

[Pitfall 2 · Every Scene uses hero big type]
    Problem: Visual monotony, viewer fatigue
    Fix: Component diversity self-review — same component ≤ 4 times

[Pitfall 3 · Transition field has specific params / all same type]
    Problem: Writing "crossfade 300ms ease-out" → out of scope
    Fix: Type only (hard cut / soft cut / inversion flash / shader)

[Pitfall 4 · Inversion flash on every Scene]
    Problem: Violates hard rule (≤ 2 times)
    Fix: Reserve for two most critical turning points (usually hook entry + data climax)

[Pitfall 5 · Constant speed throughout]
    Problem: No memory points, all shots same length
    Fix: Check rhythm curve — must have fast-slow contrast

[Pitfall 6 · Every Scene packed with information]
    Problem: Information overload, viewer can't digest
    Fix: Intersperse [bridge] or [emotion] shots for breathing room (but share ≤ 15%)

[Pitfall 7 · Forgot to mark data source on data Scenes]
    Problem: No data available at render
    Fix: Data Scenes must mark data.json path or inline data

[Pitfall 8 · A-roll Scene narration incomplete]
    Problem: Subtitle highlight can't sync precisely
    Fix: A-roll must have complete narration text (no ellipsis)
