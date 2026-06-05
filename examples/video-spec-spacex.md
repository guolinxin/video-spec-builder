Please generate a video according to the following script. Below is the script and detailed breakdown for this video.


## 1. Video Fundamentals

- Title: Turning Rockets into Taxis · 22 Years of SpaceX
- Purpose: Explainer · Give space enthusiasts a knowing smile and something worth forwarding to colleagues
- Audience: Bilibili space enthusiasts (the Kurzgesagt / Veritasium / Johnny Harris / Wendover crowd—they know the terminology)
- Viewer familiarity: Falcon / Starship / orbit / recovery / reuse / Mechazilla—all understood. Professional designators (LC-39A / B1021 / CRS-8 / ORBCOMM-2) need only on-screen labels; no deep dives
- Platform & duration: Bilibili · 180 seconds
- Visual spec: 16:9 · 30fps · Must be mute-friendly (Bilibili viewers often scroll with sound off; word-by-word subtitles + on-screen labels must carry the story without audio)
- Output: mp4 · high quality
- Core message: Turning rockets into taxis (8 characters)
- Information density: Tutorial-style, ~20 shots, deliberately uneven pacing—hook beats ~5s per shot to grab attention, narrative beats 8–12s, climax cuts down to 2–7s
- Tone: Kurzgesagt / Johnny Harris style · documentary narration · rational and calm + a touch of restrained humor · Avoid: hype / inspirational fluff / "the future is bright"


## 2. Narrative Structure

- Narrative beats: 8 narrative beats, each split into 2–4 shot-level Scenes (20 shots total)

      [hook]     0–8%    (0–15s)     Cold open with Mechazilla catching the rocket, rewind 22 years, pose the "taxi" thesis
      [foundation] 8–17%   (15–30s)    2008 Falcon 1—the taxi rolls off the line
      [recovery]  17–31%  (30–55s)    2015 first recovery—the car drives back to the station
      [reuse]     31–42%  (55–75s)    2017 first reuse—the same vehicle runs a second fare
      [economics] 42–56%  (75–100s)   How reuse rewrote launch economics
      [climax]    56–72%  (100–130s)  2024 Mechazilla—the car drives itself back and gets clamped at the station
      [paradigm]  72–89%  (130–160s)  The paradigm shift behind "no landing legs"
      [close]     89–100% (160–180s)  22-year timeline + takeaway hero type

- Emotional arc: Suspense (cold open) → contrast (2008 on the brink of bankruptcy) → momentum (recovery + reuse) → insight (economics rewritten) → breath-held awe (hover → catch) → resonant conviction (close)
- Audio-visual relationship: BGM is atmospheric (Minimal Tech Ambient—bed only, does not drive plot; plot is driven by narration and real footage). One deliberate audio-visual mismatch—the climax "hover" beat (from 117s) nearly drains narration, leaving only BGM bump-up + hover timer ticks so the picture speaks; at the chopstick catch instant (~127s), one thump + 0.3s full silence
- Anti-pattern examples:
  - Visual: No black-red "tech clickbait" palette / no countdown bars / no Vsauce-style rapid-cut question cards / annotation layer must not become a game HUD
  - Narrative: No "legend of Musk" hype narrative / no "the future is bright" inspirational close / do not deify Elon
  - Pacing: Even tutorial-style must not break the 1.5s lower limit / no single speed throughout / no evenly distributed effort across beats


## 3. Expression Toolkit

- Scene type mix: Big-type poster (hook + close) + A-roll subtitle highlight over real footage (main narrative) + data-driven (Scene 12) + abstract fallback (taxi analogy + paradigm contrast)
- On-screen annotation layer (core information layer for this film): Pop-in labels over real footage—values, part tags, leader lines pointing to specific locations in frame (Johnny Harris / Veritasium style). When discussing rocket dimensions, speed, altitude, parts, or timecodes, corresponding labels "grow" from the frame with leader lines to the real object. Use `aroll.keyword-sticker`; max 3 on screen at once, hold ≤ 3s then fade out—never stack into a HUD
- Subtitle presentation: Karaoke word-by-word highlight (space fans on Bilibili scroll muted often; subtitles must carry the story without sound)
- Keyword emphasis: marker sweep accent highlight (Kurzgesagt-style keywords swept with one accent stroke). No scribble / burst / circle—too distracting
- Text animation: Typewriter only in Scene 09 (when the B1021 reuse timeline types on); nowhere else; no dynamic weight changes
- 3D: Not needed—all beats use real video; authenticity wins; 3D would be gratuitous here
- Transition style: ~80% hard cuts + 15% crossfade (between narrative beats) + 5% fade-out (final shot only)
- Pacing baseline: ~9s average per shot, but deliberately uneven—hook ~5s/shot to grab attention, narrative 8–12s, climax "return → hover → catch → hold" cuts to 2–7s, hover beat deliberately sparse. Narration ~560 words (English); climax deliberately drains narration so the picture speaks


## 4. Visual Guidelines

- Visual theme: Shadow Cut (dark and sharp · film-noir feel, best fit for "calm historical narration")
- Accent color: #FF6B3D (orange, echoing SpaceX flame red—warmer than Shadow Cut default blood red, more "taxi")
- Decoration density: medium—hairline borders + corner cross corners + tick row bottom bar. Annotation leader lines also use hairline + accent color, same visual language as theme decoration. No dot grid (too busy)
- Component selection: aroll / broll-hero / broll-charts / broll-abstract only; no lottie, three-js (no 3D needed, no looping motion graphics)


## 5. Asset Inventory

### Existing Assets

| Type | Name | Path / Notes |
|---|---|---|
| Narration script | script.txt | See each Scene's "Narration copy" field in § 6 shot list; ~560 words total |
| Annotation data | inline | All on-screen label values (rocket dimensions / speed / altitude / timecodes / serial numbers) are inline in each Scene's visual description |

### Assets to Generate

| Type | Generation method | Output |
|---|---|---|
| TTS narration | Local TTS on render side, male voice / slightly deep / documentary narration feel / 1.0x rate (specific voice ID per render-side docs) | audio/narration.wav |
| Subtitle transcript | Generate word-level timestamps from narration.wav via transcribe | transcript.json |

### Assets to Source

- Source platform: SpaceX official YouTube / NASA / Pexels
  Keywords: "SpaceX Starship Flight 5 Mechazilla chopstick catch October 2024"
  Use: Scene 01 cold open + Scenes 13–16 climax (most important visuals in the film, reused)
  Acceptance criteria: ≥ 1080p · must include full sequence of "liftoff + return + hover + slide + chopstick catch" · at least 20s editable · this segment is the film's core footage

- Source platform: NASA Image and Video Library (images.nasa.gov)
  Keywords: "SpaceX Falcon 1 launch September 2008 Kwajalein"
  Use: Scenes 04–05 background video (Falcon 1 fourth flight liftoff + orbit)
  Acceptance criteria: ≥ 1080p · at least 8s usable clip · no watermark · public domain

- Source platform: SpaceX official Flickr (flickr.com/photos/spacex)
  Keywords: "Falcon 9 Landing Zone 1 ORBCOMM-2 December 2015"
  Use: Scenes 06–07 main video (Falcon 9 liftoff + first land landing raw footage)
  Acceptance criteria: ≥ 1080p · separate clips for landing moment + liftoff + satellite deploy · CC0

- Source platform: SpaceX official YouTube / Pixabay
  Keywords: "Falcon 9 SES-10 launch March 30 2017 reused booster"
  Use: Scenes 09–10 video (B1021 second flight)
  Acceptance criteria: ≥ 1080p · at least 10s · includes booster re-ignition footage

- Source platform: Pexels / Pixabay / SpaceX Flickr
  Keywords: "Falcon 9 launch montage rocket landing"
  Use: Scene 02 three-rocket comparison + Scene 11 reuse economics background (rapid montage of multiple recovery shots)
  Acceptance criteria: ≥ 1080p · multiple clips (≥4) editable · CC0

- Source platform: Pixabay Music
  Keywords: Selected Minimal Tech Ambient (Main) (https://pixabay.com/music/upbeat-minimal-tech-ambient-main-9899/)
  Use: Full-film BGM, atmospheric bed
  Acceptance criteria: ≥ 180s or loopable · CC0 · track selected

- Source platform: Freesound / Pixabay SFX
  Keywords: "soft UI blip pop" / "data tick" / "low thump impact" / "deep boom rise"
  Use: blip for label pop-ins (reused film-wide) + Scene 12 data pop + Scene 16 chopstick catch thump + Scene 13 climax boom
  Acceptance criteria: < 1s/clip (boom may be 2s) · crisp highs · CC0


## 6. Shot List

### Scene 01 · 0.0s–5.0s · hook · Cold open

- Type: B-roll · real footage dominant
- Component: aroll.keyword-sticker
- Narration copy: "October 2024. A 122-meter tower used two mechanical arms to catch a 70-meter rocket—in midair."
- On-screen copy: No subtitle bar. On-screen labels: leader from tower body "Launch tower · 122 m", leader from booster "Super Heavy · 70 m", top-right timecode "2024.10"
- Expected content: No explanation, no setup—drop the film's most stunning image (Mechazilla catching the booster) straight on the viewer
- Expected effect: Space fans recognize Mechazilla within 0.5s, "whoa, this video is going to be serious" → glued to the screen
- Visual description: Black 0.5s → hard cut to Starship IFT-5 chopstick catch of Super Heavy instant (real footage, 0.8x slow). Shadow Cut dark grade overlay. Two hairline leaders from tower and booster in frame to labels, accent color. Camera static—let the picture speak
- Motion notes: Black HARD CUT into real footage + two leaders DRAWS out (tower first, then booster, staggered 0.3s) + label values POP IN
- SFX description: At 0.5s real footage entry, one low boom (~0.5s · volume 0.5) + blip per label pop (~1.2s / 1.6s · volume 0.25)
- Transition in: Opening (black 0.5s)
- Transition out: Hard cut → Scene 02
- Asset dependencies: narration.wav 0.0–5.0s · Starship IFT-5 catch clip · BGM from 0.0s fade in to 0.12 (hook segment ducked) · boom.wav · blip.wav

### Scene 02 · 5.0s–10.0s · hook · Rewind 22 years

- Type: B-roll · real footage rapid montage + labels
- Component: aroll.keyword-sticker
- Narration copy: "Twenty-two years ago, the company that built this rocket couldn't even keep one alive long enough to reach the sky."
- On-screen copy: Three rockets in sequence with labels "Falcon 1 · 2008 · 21 m" → "Falcon 9 · 2015 · 70 m" → "Starship · 2024 · 121 m"
- Expected content: Use the three-rocket size ladder to establish "how far 22 years went" in half a second
- Expected effect: Space fans see three rockets side by side + dimension labels, feel generational scale intuitively → want to know what happened in those 22 years
- Visual description: Three real footage rapid cuts (Falcon 1 / Falcon 9 / Starship liftoff ~1.5s each), or three rockets in proportional silhouette side by side. Each cut, hairline leader pulls year + height label. Shadow Cut dark background
- Motion notes: Three clips HARD CUT montage + label POP IN per rocket + leaders DRAWS
- SFX description: Blip per rocket label pop (~5.6s / 7.1s / 8.6s · volume 0.25)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 03
- Asset dependencies: narration.wav 5.0–10.0s · three-rocket liftoff assets · BGM 0.12 · blip.wav

### Scene 03 · 10.0s–15.0s · hook · Pose the thesis

- Type: B-roll · big-type poster
- Component: broll-hero.big-type
- Narration copy: "In those 22 years, SpaceX really did one thing—turn rockets into taxis."
- On-screen copy: Hero type "Turning rockets into taxis"; "taxis" in accent color
- Expected content: Establish the film's core metaphor as the title, the yardstick for the next 6 beats
- Expected effect: Space fans pause at the counterintuitive "taxi" metaphor, curious → how will this frame hold together
- Visual description: Shadow Cut dark background + hero type centered + top-left chapter number "01 / 08" + bottom tick row + corner cross corners
- Motion notes: Hero type SLAMS in + "taxis" PULSES once + bottom tick row WHIPS sweep
- SFX description: Hero slam with light thump (~10.2s · volume 0.4)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 04
- Asset dependencies: narration.wav 10.0–15.0s · BGM lifts from 0.12 to 0.18 (narrative beat begins)

### Scene 04 · 15.0s–23.0s · foundation · Falcon 1 fourth flight

- Type: B-roll + A-roll subtitle overlay + labels
- Component: aroll.subtitle-highlight
- Narration copy: "September 28, 2008, Falcon 1's fourth test flight. The first three—all blew up. The money in the company's account—burned through."
- On-screen copy: Karaoke word-by-word highlight on full narration; on-screen labels: top-left timestamp "2008.09.28 · Kwajalein", mid-frame "Flight 4" pop next to rocket, "First 3 ✗ ✗ ✗" three red X stamps
- Expected content: Establish 2008 = SpaceX's "taxi rolls off the line day"—and that it almost didn't survive (three failures + money gone)
- Expected effect: Space fans jolt at "first three all blew up / money burned through"—they know the data, but threaded through the "taxi rollout" metaphor it still feels fresh
- Visual description: Falcon 1 fourth flight real liftoff video (NASA / SpaceX official) 50% opacity over dark background + karaoke subtitles in lower 14% zone word-by-word lit + "9 minutes 31 seconds" "burned through" two keywords marker sweep highlight. "First 3 ✗ ✗ ✗" stamps pop in triple on "first three all blew up" narration line
- Motion notes: Subtitle token CASCADE + keyword marker sweep + "Flight 4" label POP IN + three red X STAMPS slam in one by one
- SFX description: Dull thud per red X slam (~19.0s / 19.4s / 19.8s · volume 0.3) + label pop blip (~16.5s · volume 0.25)
- Transition in: Hard cut
- Transition out: Crossfade (short) → Scene 05
- Asset dependencies: narration.wav 15.0–23.0s · BGM 0.18 · Falcon 1 fourth flight video (NASA / to source) · blip.wav · dull thud SFX

### Scene 05 · 23.0s–30.0s · foundation · The orbit moment

- Type: B-roll + labels
- Component: aroll.keyword-sticker
- Narration copy: "Nine minutes and thirty-one seconds later, it reached orbit. SpaceX became the first private company to put a liquid rocket into space. But that was only the day the taxi rolled off the line."
- On-screen copy: Large timer label pops upper-center "T+09:31 · Orbit"; smaller label below "First private liquid rocket to orbit"
- Expected content: Anchor the historical "orbit success" moment with a specific timecode (9 minutes 31 seconds)
- Expected effect: Space fans see "T+09:31" timer label lock in, feel relief of "it worked" → then gently pulled by "only rollout day", expect what comes next
- Visual description: Falcon 1 second-stage orbit view / Earth arc real footage + dark grade. "T+09:31 · Orbit" timer label on "nine minutes thirty-one seconds" narration line COUNTS UP rolls to 09:31 locks, accent color. "First" label fades in after
- Motion notes: Timer label digits COUNTS UP roll to 09:31 + lock PULSES once + "First" label FADES in
- SFX description: Fine tick string during timer roll, blip closure at lock (~25.5s · volume 0.3)
- Transition in: Crossfade (short)
- Transition out: Hard cut → Scene 06
- Asset dependencies: narration.wav 23.0–30.0s · BGM 0.18 · Falcon 1 orbit / Earth assets · tick.wav · blip.wav

### Scene 06 · 30.0s–40.0s · recovery · Seven years and the 2015 launch

- Type: B-roll + A-roll subtitle overlay + labels
- Component: aroll.subtitle-highlight
- Narration copy: "For the next seven years, SpaceX worked on something everyone said was impossible—making the first stage fly home after the job. December 21, 2015, Falcon 9 delivered eleven Orbcomm satellites to orbit."
- On-screen copy: Karaoke subtitles; on-screen labels: top-left timestamp "2015.12.21", payload label "11 × ORBCOMM" on Falcon 9 fairing position
- Expected content: Set up the 2015 recovery mission—specific date + payload, establish expectation "this launch is coming home"
- Expected effect: Space fans see "11 × ORBCOMM" label precisely on fairing, feel "they did their homework" → enter the recovery event
- Visual description: Falcon 9 ORBCOMM-2 liftoff real footage 50% transparent over dark background + karaoke subtitles + "seven years" "impossible" keywords marker sweep. "11 × ORBCOMM" label hairline leader to fairing
- Motion notes: Subtitle CASCADE + keyword marker sweep + payload label POP IN + leader DRAWS
- SFX description: Label pop blip (~36.5s · volume 0.25)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 07
- Asset dependencies: narration.wav 30.0–40.0s · BGM 0.18 · Falcon 9 ORBCOMM-2 liftoff assets (SpaceX Flickr / to source) · blip.wav

### Scene 07 · 40.0s–48.0s · recovery · Back down at Landing Zone 1

- Type: B-roll · real footage dominant + labels
- Component: aroll.keyword-sticker
- Narration copy: "Then the first stage turned around and settled back onto Landing Zone 1."
- On-screen copy: On-screen labels: descent speed readout decreases with footage "Speed ↓ 320 → 0 km/h", leader to ground landing point "Landing Zone 1" tag, at touchdown "First land recovery" stamp
- Expected content: Pair the counterintuitive "rocket flies back and lands" image with speed readout so viewers feel controlled deceleration
- Expected effect: Space fans watch speed readout drop to 0, rocket sits down cleanly, "oh—so that's how it works", counterintuition proven
- Visual description: Falcon 9 first stage return, attitude adjust, burn, sit-down at Landing Zone 1 real video (SpaceX Flickr), near full-screen. Descent speed label on side syncs down with footage; "Landing Zone 1" tag leader to ground pad; slight frame shake at touchdown + "First land recovery" stamp slams in
- Motion notes: Speed readout COUNTS DOWN syncs with footage + "Landing Zone 1" leader DRAWS + frame SHAKES at touchdown + "First land recovery" stamp STAMPS in
- SFX description: Fine tick during speed roll + thump at touchdown (~46.5s · volume 0.5) + stamp blip
- Transition in: Hard cut
- Transition out: Crossfade (short) → Scene 08
- Asset dependencies: narration.wav 40.0–48.0s · BGM 0.18 · Falcon 9 LZ-1 landing video (SpaceX Flickr / NASA / to source) · tick.wav · thump.wav · blip.wav

### Scene 08 · 48.0s–55.0s · recovery · Musk quote

- Type: B-roll · pull quote block
- Component: broll-hero.pull-quote
- Narration copy: "Musk shouted it on the spot—no one had ever brought an orbital-class booster back intact."
- On-screen copy: Pull-quote block "No one has ever brought an orbital class booster back intact." — Elon Musk, 2015
- Expected content: Use Musk's original English line to underscore the historical weight of the moment
- Expected effect: Most space fans have seen this quote; the citation closes distance, confirms "yes, that was the reaction"
- Visual description: Dark background + serif italic quote type (Shadow Cut theme font) + large decorative quote mark left + byline "— Elon Musk, 2015". Frame quiet—let text carry alone
- Motion notes: Pull-quote FADES in + quote decoration SLIDES in left + Musk name TYPES on
- SFX description: None (let quote visual impact carry alone)
- Transition in: Crossfade (short)
- Transition out: Hard cut → Scene 09
- Asset dependencies: narration.wav 48.0–55.0s · BGM 0.18

### Scene 09 · 55.0s–67.0s · reuse · B1021 refurbished and flown again

- Type: B-roll + A-roll subtitle overlay + typewriter + labels
- Component: aroll.subtitle-highlight
- Narration copy: "But getting it back was only the first half. The real milestone came March 30, 2017. Booster B1021—it had flown CRS-8 in 2016—this time refurbished, refueled, re-ignited, and sent SES-10 to orbit."
- On-screen copy: Karaoke subtitles; ~61s typewriter prints reuse timeline "B1021 · 2016 CRS-8 ──→ 2017 SES-10"; "B1021" label leader on booster body in frame
- Expected content: Clarify "the same physical rocket ran two fares"—B1021 serial + timeline of two missions
- Expected effect: Space fans smile at B1021 / CRS-8 internal numbers—insider detail invoked this way signals serious production
- Visual description: Falcon 9 SES-10 liftoff video (B1021 reflight) as background + karaoke subtitles. "B1021" label hairline leader to lower booster body. ~61s lower-right typewriter types "B1021 · 2016 CRS-8 ──→ 2017 SES-10", etch size
- Motion notes: Subtitle CASCADE + "B1021" label POP IN + leader DRAWS + timeline TYPES on (typewriter) + "refurbished" "re-ignited" keywords marker sweep
- SFX description: Fine tick per typewriter character (~61.0–63.0s · volume 0.3) + "B1021" label blip
- Transition in: Hard cut
- Transition out: Hard cut → Scene 10
- Asset dependencies: narration.wav 55.0–67.0s · BGM 0.18 · Falcon 9 SES-10 video (SpaceX YouTube / to source) · tick.wav · blip.wav

### Scene 10 · 67.0s–75.0s · reuse · The same rocket (emphasis pause)

- Type: B-roll · big-type emphasis
- Component: broll-hero.big-type
- Narration copy: "The same rocket. A second fare."
- On-screen copy: Hero type lands in two beats "The same rocket" → "2nd flight", "2nd" in accent color
- Expected content: Isolate the film's "reuse" pivot in one emphasis shot
- Expected effect: Very short narration + breathing room on screen; space fans pause half a beat to digest what reuse really means → deliberate deceleration in pacing
- Visual description: Shadow Cut dark background + hero type. First "The same rocket", after narration pause "2nd flight" slams in, accent emphasis. Minimal background—deliberate emphasis pause shot
- Motion notes: "The same rocket" SLIDES in + pause + "2nd flight" SLAMS in + PULSES once
- SFX description: "2nd flight" slam with thump (~71.5s · volume 0.45)
- Transition in: Hard cut
- Transition out: Crossfade (short) → Scene 11
- Asset dependencies: narration.wav 67.0–75.0s · BGM 0.18

### Scene 11 · 75.0s–88.0s · economics · Expendable rockets and the taxi analogy

- Type: B-roll · abstract analogy
- Component: broll-abstract.analogy
- Narration copy: "That flight rewrote launch economics. For sixty years, every rocket was single-use. Picture this: you hail a cab, the driver drops you off, then drives the whole car into the river and blows it up."
- On-screen copy: Analogy diagram—left "rocket" icon + right "taxi" icon linked by equals; on "drives into the river and blows up" taxi icon falls below waterline, bursts
- Expected content: Use the absurd "cab into the river" analogy so viewers instantly grasp how wasteful expendable rockets are
- Expected effect: Space fans laugh—the analogy is vivid; laugh then immediately get reuse's economic meaning
- Visual description: Shadow Cut dark background + analogy two columns: left "Traditional rocket = single-use", right "Taxi ride = single-use". On "into the river and blows up", right taxi icon arcs down, hits waterline, accent burst
- Motion notes: Two columns SLIDES in + equals FADES in + taxi icon ARCS down + water hit BURSTS (accent shatter)
- SFX description: Descending tone on taxi fall + dull pop on water hit/burst (~85.5s · volume 0.45)
- Transition in: Crossfade (short)
- Transition out: Hard cut → Scene 12
- Asset dependencies: narration.wav 75.0–88.0s · BGM 0.18

### Scene 12 · 88.0s–100.0s · economics · Data reveal

- Type: B-roll · data-driven
- Component: broll-charts.bar-chart
- Narration copy: "After reuse, Falcon 9 launch cost dropped by more than half. Today SpaceX launches over a hundred times a year—most of global commercial launch."
- On-screen copy: Bar chart—left group "Traditional rocket · expendable" vs "Falcon 9 · reusable" cost bars (latter half height); right group "SpaceX annual launches 2010 → 2024", 2 to 100+; bottom-right source "SpaceX official launch records · 2010–2024"
- Expected content: Land "reuse = economic disruption" with real bar chart data
- Expected effect: Space fans see cost bar halved + launch count spike to 100+, "those numbers are insane" shock
- Visual description: Shadow Cut dark background + bar chart. Left cost comparison (reuse bar half height, accent bar top), right annual launch bars ascending. "100+" endpoint largest, accent emphasis
- Motion notes: Bars GROW UP in + digits COUNTS UP roll + "100+" PULSES once
- SFX description: Fine tick per bar pop + pop at "100+" lock (~96.5s · volume 0.5)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 13 (hard cut to Mechazilla real footage, maximum visual contrast)
- Asset dependencies: narration.wav 88.0–100.0s · BGM 0.18 · data inline · tick.wav · pop.wav

### Scene 13 · 100.0s–108.0s · climax · More than landing

- Type: B-roll + A-roll subtitle overlay + labels
- Component: aroll.subtitle-highlight
- Narration copy: "But Musk wasn't satisfied with 'fly up, come back down.' He wanted—fly up, catch it directly. October 13, 2024, Starship's fifth test flight."
- On-screen copy: Karaoke subtitles; "catch it directly" four characters marker sweep heavy; top-left timestamp "2024.10.13 · Starship IFT-5"
- Expected content: Establish climax thesis—"landing" isn't enough, target is "catch"
- Expected effect: Space fans realize Mechazilla is next, adrenaline rising
- Visual description: Starship IFT-5 ignition liftoff real footage near full-screen + karaoke subtitles. "Catch it directly" marker sweep one heavy accent stroke. Frame brighter, fuller than narrative beats
- Motion notes: Subtitle CASCADE + "catch it directly" marker sweep (faster/heavier than usual) + timestamp FADES in
- SFX description: BGM starts slow lift here (0.18 → 0.22) + low boom bed (~100.2s · volume 0.4)
- Transition in: Hard cut (from data bars slam to flame liftoff)
- Transition out: Hard cut → Scene 14
- Asset dependencies: narration.wav 100.0–108.0s · BGM 0.18→0.22 · Starship IFT-5 liftoff clip · boom.wav

### Scene 14 · 108.0s–117.0s · climax · Super Heavy return

- Type: B-roll · real footage dominant + labels
- Component: aroll.keyword-sticker
- Narration copy: "Super Heavy lifted off, went around Earth, then turned back toward Starbase's launch tower. Note—it has no landing legs."
- On-screen copy: On-screen labels: altitude readout "Altitude ↓", speed readout sync decrease; on "Note—it has no landing legs", leader to where landing legs would be on booster bottom, pop label "No landing legs"
- Expected content: Establish spatial "it's flying back toward the tower", hook with "no landing legs" label—it must be caught, no other out
- Expected effect: Space fans see "no landing legs" leader on empty booster bottom, think "then how does it land?" → breath held
- Visual description: Super Heavy return real footage—flip, reentry, grid fin control, approach tower, near full-screen. Altitude / speed labels on side sync down with footage. On "no landing legs", hairline leader from booster bottom "No landing legs" label, accent color
- Motion notes: Altitude / speed readouts COUNTS DOWN sync footage + "No landing legs" leader DRAWS (slow, emphasis) + label POP IN
- SFX description: Fine tick on readout roll + slightly heavier blip on "no landing legs" label pop (~114.5s · volume 0.3)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 15
- Asset dependencies: narration.wav 108.0–117.0s · BGM 0.22 · Starship IFT-5 Super Heavy return clip · tick.wav · blip.wav

### Scene 15 · 117.0s–124.0s · climax · Seven seconds hover (negative space)

- Type: B-roll · real footage dominant + labels (deliberately sparse shot)
- Component: aroll.keyword-sticker
- Narration copy: "Hover. Seven seconds."
- On-screen copy: Minimal hover timer slightly below center, "01" to "07", one tick per second, accent color
- Expected content: Push film tension to peak—via "nearly drained narration + one ticking timer" breath-held effect
- Expected effect: Narration down to four words, frame quiet; space fans hold breath second by second with timer → emotional apex of the film
- Visual description: Super Heavy hovering beside tower real footage, camera almost static. Hover timer "01…07" one tick per second slightly below center. No other labels—frame deliberately clean, quiet. Deliberate slow, sparse shot
- Motion notes: Timer digits TICK once per second + booster barely floats in frame, everything else still
- SFX description: BGM bumps to 0.32 here; after "seven seconds" narration drains; only crisp tick per timer step (117–124s, 7 ticks · volume 0.35)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 16
- Asset dependencies: narration.wav 117.0–124.0s (narration only early segment) · BGM 0.22→0.32 · Starship IFT-5 hover clip · tick.wav

### Scene 16 · 124.0s–130.0s · climax · Chopsticks close (impact + hold)

- Type: B-roll · real footage dominant + labels
- Component: aroll.keyword-sticker
- Narration copy: "The tower's two mechanical arms—closed."
- On-screen copy: At close instant center frame "Caught" stamp slams in; during hold quiet corner float "Super Heavy · Caught"
- Expected content: Pay off all setup—chopsticks close, catch booster, "taxi drives itself back to the station" metaphor lands here
- Expected effect: Space fans have seen it countless times, but with 15 shots of setup + hover breath-hold, this "caught" hits insight-level release
- Visual description: Chopsticks slide horizontal, close, clamp Super Heavy real footage, 0.7x slow. At close instant "Caught" stamp accent slams center. Then 2s static on clamped booster, "Super Heavy · Caught" label quietly floats in
- Motion notes: Real footage slow drives + "Caught" stamp SLAMS in (close frame) + hold segment "Caught" label FADES in
- SFX description: Low thump at close instant + 0.3s full silence immediately after (~127.0s · volume 0.7); after silence BGM gently returns to 0.18
- Transition in: Hard cut
- Transition out: Hard cut → Scene 17
- Asset dependencies: narration.wav 124.0–130.0s · BGM 0.32→silence→0.18 · Starship IFT-5 close + hold clip · thump.wav

### Scene 17 · 130.0s–145.0s · paradigm · Why no landing legs

- Type: B-roll · abstract contrast + labels
- Component: broll-abstract.versus
- Narration copy: "Why no landing legs? With wheels, it's a car; without them, it's just a rocket. Musk never wanted a recoverable rocket—he wanted a machine that refuels and flies again like an airliner."
- On-screen copy: Versus card first half—left "Recoverable rocket", right "Refuel-and-fly-again machine"; on "with wheels it's a car" pop contrast label
- Expected content: Translate climax visual shock into an idea—Musk pursued not recovery but "airline-grade refly"
- Expected effect: Space fans think "right, I hadn't framed it that way" → concept refreshed
- Visual description: Shadow Cut dark background + versus contrast card. Left gray "Recoverable rocket", right accent "Refuel-and-fly-again machine". Center serif italic "vs". "With wheels it's a car" with light diagram label
- Motion notes: Left card SLIDES in left + right card SLIDES in right + "vs" FADES in + right card PULSES once
- SFX description: Label pop blip (~134.0s · volume 0.25)
- Transition in: Hard cut
- Transition out: Hard cut → Scene 18
- Asset dependencies: narration.wav 130.0–145.0s · BGM 0.18

### Scene 18 · 145.0s–160.0s · paradigm · Two paradigms

- Type: B-roll · abstract contrast
- Component: broll-abstract.versus
- Narration copy: "Falcon 9 is a taxi that ran two fares. Starship is a taxi that drove itself back to the station. These are two completely different paradigms."
- On-screen copy: Versus card final state—left "Falcon 9" + sub "Taxi, two fares" (gray), right "Starship" + sub "Drives itself back to the station" (accent), center "vs"
- Expected content: Use versus component to show "Falcon 9 and Starship are two paradigms, not iteration" at a glance
- Expected effect: Space fans realize Starship isn't Falcon upgraded—it's something else → concept upgraded, closes hook "taxi" frame loop
- Visual description: Continues Scene 17 versus card, left/right cards filled with Falcon 9 / Starship final subs. Left gray, right accent. Card hairline stroke, echoes theme decoration
- Motion notes: Both card subs TYPES on + Starship card PULSES once emphasis
- SFX description: None (let contrast visual carry alone)
- Transition in: Crossfade (short)
- Transition out: Crossfade (short) → Scene 19
- Asset dependencies: narration.wav 145.0–160.0s · BGM 0.18

### Scene 19 · 160.0s–172.0s · close · 22-year timeline

- Type: B-roll · real footage rapid montage + labels
- Component: aroll.keyword-sticker
- Narration copy: "2002 to 2024, twenty-two years. From a small rocket that could barely reach orbit, to a tower that can catch a booster in midair."
- On-screen copy: Bottom timeline "2002 ●········● 2024", 4 nodes (2008 / 2015 / 2017 / 2024) light in sequence with narration, small label pop per node
- Expected content: Collapse film's 4 nodes into one 22-year timeline, structural memory anchor
- Expected effect: Space fans see 4 timeline nodes light up, "yeah, this video really tracked that thread" → structural satisfaction
- Visual description: 4 node representative clips rapid montage (Falcon 1 / LZ-1 landing / SES-10 / Mechazilla ~2.5s each) semi-transparent over dark background + bottom timeline lights nodes with narration, year label pop per node
- Motion notes: 4 clips soft CROSSFADE between + timeline nodes left to right LIGHT UP one by one + year labels POP IN
- SFX description: Blip per node light (~162 / 165 / 168 / 171s · volume 0.25)
- Transition in: Crossfade (short)
- Transition out: Crossfade (short) → Scene 20
- Asset dependencies: narration.wav 160.0–172.0s · BGM 0.18 · 4 node representative assets · blip.wav

### Scene 20 · 172.0s–180.0s · close · Hero type echo

- Type: B-roll · big-type poster
- Component: broll-hero.big-type (echoes Scene 03)
- Narration copy: "SpaceX didn't invent the rocket. It simply—turned rockets into taxis."
- On-screen copy: Hero type "Turning rockets into taxis", this time "taxis" largest, dominant; above timeline "2002 ········· 2024" (22 dots); bottom small type #SpaceX
- Expected content: Close with hero type echoing hook + 22-dot timeline, nail core message as one screenshot-worthy line
- Expected effect: Space fans see opening/closing hero echo, screenshot/share urge, remember "turning rockets into taxis"
- Visual description: Shadow Cut dark background + "Turning rockets into taxis" hero centered, "taxis" accent + above 22-dot timeline + bottom #SpaceX small type + final 2s full fade-out to black (film's only permitted exit animation)
- Motion notes: Hero type SLAMS in + accent word PULSES once + 22 dots left to right CASCADE light + final 2s full FADE OUT to black
- SFX description: BGM fade-out to 0 in final 3s
- Transition in: Crossfade (short)
- Transition out: Fade-out to black (film's only exit animation, compliant)
- Asset dependencies: narration.wav 172.0–179.0s · BGM 0.18 → 0 fade out in final 3s


## 7. Audio Timeline

- Narration (narration.wav): 0.0–179.0s, TTS generated (male / steady / documentary narration / 1.0x). Note two deliberate negative spaces—Scene 15 hover (~119–124s) narration drains after "seven seconds", Scene 16 close instant (~127s) 0.3s full silence. Narration pacing must follow visuals, not uniform read-through
- Background music (Minimal Tech Ambient · Pixabay, atmospheric bed, act-level dynamics):
  - 0.0–3.0s: fade-in to volume 0.12 (hook deliberately ducked so cold-open footage and boom stand out)
  - 3.0–15.0s: hold 0.12
  - 15.0–100.0s: lift to 0.18, steady narrative bed
  - 100.0–117.0s: slow rise 0.18 → 0.22 (enter climax)
  - 117.0–124.0s: bump to 0.32 (hover beat, narration drained, music carries tension)
  - ~127.0s: 0.3s full silence at close instant
  - 127.0–160.0s: return to 0.18
  - 160.0–177.0s: hold 0.18
  - 177.0–180.0s: fade-out to 0
- Sound effects (SFX):
  - blip.wav (label pop, reused film-wide, ~14 instances) · triggers on each on-screen label POP IN, see per-Scene SFX · volume 0.25–0.30
  - tick.wav (readout / timer / type roll, reused film-wide) · see Scenes 05 / 07 / 09 / 12 / 14 / 15 SFX · volume 0.30–0.35
  - 0.5s · boom.wav (Scene 01 cold-open real footage entry) · volume 0.5
  - 19.0 / 19.4 / 19.8s · dull thud ×3 (Scene 04 "First 3" red X triple slam) · volume 0.3
  - 46.5s · thump.wav (Scene 07 Falcon 9 touchdown) · volume 0.5
  - 71.5s · thump.wav (Scene 10 "2nd flight" hero slam) · volume 0.45
  - 85.5s · pop.wav (Scene 11 taxi water hit burst) · volume 0.45
  - 96.5s · pop.wav (Scene 12 data "100+" lock) · volume 0.5
  - 100.2s · boom.wav (Scene 13 climax start, low bed) · volume 0.4
  - 127.0s · thump.wav (Scene 16 chopstick close, followed by 0.3s full silence) · volume 0.7


## 8. References & Counter-examples

- Positive references:
  - Johnny Harris (YouTube)—9/10 like his "real footage + on-screen annotation layer + leaders to specific locations" information layering. 1/10 different: labels more restrained, not full-screen HUD, max 3 on screen at once
  - Kurzgesagt – In a Nutshell (YouTube)—9/10 like "pacing density + distilled information + one core metaphor through the film". 1/10 different: not Kurzgesagt high-saturation illustration; use real NASA / SpaceX video instead
  - Wendover Productions (YouTube)—9/10 like "calm documentary narration + data-driven". 1/10 different: not Wendover's 19-minute length; 3-minute extreme compression
- Static references:
  - Stripe Press web typography—Shadow Cut theme dark sharp + hairline decoration fits; annotation leaders use same hairline language
  - Apple Keynote hero type—Scene 03 / Scene 20 hero echo style
- Anti-patterns (never):
  - Visual: No black-red "tech clickbait" palette / no countdown bars / no Vsauce-style question cards / annotation layer must not become game HUD or flying numbers everywhere
  - Narrative: No "legend of Musk" hype / no "the future is bright" inspirational close / do not deify or demonize Elon
  - Pacing: Tutorial-style must not break 1.5s lower limit / no single speed throughout / no evenly distributed effort / do not pack narration into climax hover beat


## 9. Open Questions

- Scene 01 / 13–16 Starship IFT-5 video: Film's core footage, reused for cold open and full climax. SpaceX official YouTube has full 4K; before render confirm editable local copy with full "liftoff + return + hover + close + hold" sequence
- Scenes 04–05 Falcon 1 fourth flight video: Does NASA public archive have 1080p+? If only low quality, confirm before render, or consider SpaceX later commemorative remaster
- On-screen label value verification: Per-Scene label values (122m tower / 70m booster / Falcon 9 landing speed range / SpaceX annual launch count) must be checked against latest public data before render—wrong annotation numbers hurt credibility more than no labels
- Speed / altitude readouts: Scene 07 / 14 live readouts must align with chosen footage descent curve; if render side lacks telemetry, use "range labels" (e.g. "≈ 300 → 0 km/h") not frame-precise values
- Voice ID: Tone described as "male / slightly deep / documentary narration"; specific voice ID per render-side docs, try 2–3 and pick best fit
- SFX files: blip / tick / pop / thump / boom to source from Freesound / Pixabay SFX, keywords listed in § 5 Assets to Source
- BGM length fit: Confirm Pixabay Minimal Tech Ambient (Main) original length ≥ 180s; if short, stitch multiple versions of same track
