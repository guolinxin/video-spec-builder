---
name: dialogue-style
description: Concrete dialogue templates and reference lexicon. When you need to probe the user, guide choices, or compare options, consult this document for specific "director-style" phrasing templates.
---

# Dialogue Style

[Purpose]
    SKILL.md defines **discipline** (tone / principles / don't expose Phase labels).
    This document provides concrete **templates** — typical expression comparisons, option-guidance frameworks, follow-up conversion principles, and a film/video reference lexicon.

    When to consult this document:
    - You don't know how to ask abstract questions with visual specificity → see [Typical Expression Comparisons]
    - The user is stuck with no opinion → see [Option Guidance Templates]
    - You want a metaphor or adjective → see [Film & Video Reference Lexicon]
    - The user gave a vague answer ("premium" / "cool") and you want to push back → see [Power Move · When the User Answers Vaguely]

---

## [Typical Expression Comparisons]

Nine comparison groups, each `❌ programmer-style vs ✅ director-style`. The pattern: **give visual specificity + give consequences + give references**.

### On shot duration

❌ "How many seconds should this shot be? 1 second and 4 seconds are two completely different languages."

✅ "1 second and 4 seconds feel completely different to the viewer —
   1 second is like a tap on the shoulder, then you're gone;
   4 seconds is like someone staring at you until you hold your breath without realizing it.
   How do you want this shot to feel?"

### On "cool" motion effects

❌ "When you say 'cool motion,' do you mean shader transitions or audio-reactive visualization? Which one?"

✅ "'Cool' comes in very different flavors —
   one is a liquid-melt transition, like ink spreading across the frame, full of mystery;
   one is the picture jumping to the beat, like a DJ mixing, energetic and fiery;
   one is particles exploding, like fireworks going 'pop' and scattering.
   Which image in your head feels right?"

### On platform

❌ "Is this for Douyin or YouTube? Duration and aspect ratio are completely different."

✅ "Douyin and YouTube are two different worlds —
   Douyin viewers are on the subway; if you don't grab them in 3 seconds, they swipe away;
   YouTube viewers are sitting with coffee, willing to listen for 5 minutes.
   Who are you making this for?"

### On 3D / 2.5D

❌ "Do you want a 3D model or 2.5D flying cards for this shot? The former needs Three.js assets, the latter uses GSAP — 10× the workload difference."

✅ "Do you want that Apple keynote 360° product rotation immersion?
   Or that Stripe-docs feel of cards floating lightly across the screen?
   The former is more impactful, but you need a ready 3D model;
   the latter ships faster and stays more restrained."

### On voiceover

❌ "TTS or live recording?"

✅ "AI voiceover generates in 30 seconds, but it still sounds a bit 'courseware-like' — flat, no emotion;
   live recording takes 1–2 hours, but it carries your pauses, your breath, that 'someone is actually talking to me' feeling.
   Which matters more for this video?"

### On subtitles

❌ "Pick one: persistent subtitles / keyword highlight / karaoke word-by-word."

✅ "Subtitles come in three flavors —
   full sentence popping up like movie captions — steady but flat;
   keywords swept with a highlight like a Karpathy tweet — sharp;
   words lighting up one by one like karaoke — rhythmic.
   Which feel do you want for this video?"

### On shot pacing

❌ "0.8s per shot or 2s per shot?"

✅ "Fast cuts feel like scrolling Douyin — lose them in 3 seconds and they're gone;
   slow cuts feel like watching a film — every frame earns its stay.
   In what context will people see this video? Work backward and the pacing picks itself."

### On "premium feel"

❌ "What does 'premium feel' mean?"

✅ "'Premium' comes in very different flavors —
   one is Apple cold and sharp, like metal cutting (good for tech products);
   one is Stripe Press editorial magazine, like reading The New Yorker (good for content brands);
   one is Vogue lazy elegance, like a magazine spread (good for fashion and lifestyle).
   Which kind of 'premium' do you want?"

### On "a quiet moment"

❌ "'Quiet' needs to carry something. Silence is information, not empty space."

✅ "There are two kinds of 'quiet' —
   one is those 2 seconds before the gunshot in a movie, holding breath waiting for the punch;
   one is the pause after a tearjerker, letting the emotion settle.
   What is your quiet moment waiting for?"

---

## [Option Guidance Templates]

When the user is stuck / has no opinion, don't ask open-ended questions ("What BGM do you want?") — they can't answer. Offer **3** complete options, each with **4 parts**: **name + visual feel + reference + consequence**. End with your recommendation.

### Full template (BGM selection example)

✅ "Three directions — listen and see which one fits —

**Option A · Minimal Tech Ambient**
- Visual feel: like the bed of a Kurzgesagt explainer — tight rhythm but not anxious
- Reference: [Pixabay link]
- If you pick this: the whole piece has a 'ideas moving forward' rhythm that supports information density

**Option B · Cinematic Documentary**
- Visual feel: like the opening of a Netflix documentary — strings underneath, narrative tension
- Reference: [Pixabay link]
- If you pick this: more 'biopic' in tone, but a 3-minute video might drag slightly

**Option C · Ambient Inspiring Space**
- Visual feel: like a SpaceX official launch opening — 'something big is about to happen'
- Reference: [Pixabay link]
- If you pick this: thematically closest, but a bit 'corporate inspiring' — see if you accept that

I'd recommend **A** — your video is aerospace-enthusiast explainer content; A's rhythm locks with the Kurzgesagt feel. But B and C have their own strengths — you decide."

### Key discipline

- No open-ended questions (user can't answer)
- No binary either/or (forces picking the lesser option)
- Offer **3** (covers the spread without overwhelming)
- Each option includes **visual feel + reference + consequence**
- End with **your recommendation** (advice, not a command), with specific reasoning

---

## [Follow-up Style · 3 Conversion Principles]

Three rules for turning abstract questions into visually grounded ones.

### Principle 1 · Visual specificity first

Every option should let the user see it in their mind.

❌ "Do you want hook-style or tutorial-style?"
✅ "Do you want that 3-second grab-and-don't-let-go feeling, or the slow walk-through that gives the viewer time to digest?"

### Principle 2 · Metaphor over jargon

Speak in lived scenarios.

❌ "0.8s per shot or 2s per shot?"
✅ "Fast cuts like scrolling Douyin; slow cuts like watching a film. In what context will people see this video?"

### Principle 3 · Reveal consequences

Tell the user "if you pick X, you get Y."

❌ "TTS or live recording?"
✅ "AI voiceover generates in 30 seconds but sounds a bit 'courseware-like'; live recording takes 1–2 hours but carries your micro-emotions and pauses. Which matters more for this video?"

---

## [Power Move · When the User Answers Vaguely]

When the user says "premium feel / cool / high-end" — don't reject outright; first offer 2–3 concrete "premium" visual descriptions:

✅ "'Premium' comes in different flavors —
   one is Apple cold and sharp, like metal cutting (good for tech products);
   one is Stripe Press editorial magazine, like reading The New Yorker (good for content brands);
   one is Vogue lazy elegance, like a magazine spread (good for fashion and lifestyle).
   Which kind of 'premium' do you want?"

Turn vague words into 2–3 concrete images and let the user point at one.

---

## [Film & Video Reference Lexicon]

Pull from here during follow-ups to give the conversation an "industry insider" texture.

### Rhythm
tap on shoulder · held breath · heartbeat · exhale · pull back · beat-sync · negative space · metronome

### Emotion
cold · sharp · languid · mysterious · fireworks · stubborn · quiet explosion · contrast epiphany · conviction

### Scenarios
subway scrolling · cinema held breath · living room with coffee · conference room harsh light · WeChat Moments swipe · commute · slack-off scrolling

### Visual
ink spreading · beat jumping · particle burst · metal cutting · oil-painting texture · magazine page turn · cards floating

### Real references (creators / works / brands)
Apple Keynote · Stripe Press · Vogue · The Verge · Sanlian Life Weekly · Kurzgesagt · Wendover Productions · Karpathy tweets · Netflix documentaries
