# Project Improvement Review - 2026-06-05

## Scope

Reviewed the full tracked project: root skill metadata, README files, templates, examples, reference documents, Spec Mono theme files, and the bundled `Full Code/` React/CSS component-library sample.

This is a review artifact only. No source behavior was changed.

## Executive Summary

`video-spec-builder` has a strong editorial direction and unusually detailed workflow references. The main risk is not concept quality; it is project drift. The public README, the skill rules, the template, the example spec, and the bundled implementation code do not all describe the same contract. That drift will make the skill harder to install, validate, and trust as it grows.

The highest-value improvements are:

1. Add packaging and verification metadata so installation claims can be tested.
2. Bring the example spec back into exact alignment with the current template and spec rules.
3. Fix the bundled component-library sample so its controls and documented theme rules are internally consistent.
4. Add lightweight automated checks for component IDs, required spec fields, markdown links, and file layout.
5. Clarify whether this repository is a skill package, a theme library, a demo code export, or all three.

## Validation Summary (2026-06-05)

Every finding below was re-checked against the current tracked files. All issues are confirmed. Two findings are stronger or more nuanced than originally written; details are in the per-finding `Validation` notes.

| # | Finding | Status | Verification |
|---|---|---|---|
| P0 | Installability not verifiable | Confirmed | No `package.json`, `.github/`, skill manifest, or config file found in repo scan. |
| P1 | Example spec ≠ template contract | Confirmed (stronger) | All 20 scenes use plural `- Components:` and `## 6. Storyboard`; template, `spec-rules.md`, and `workflow-0-1.md` all require singular `- Component:` and `## 6. Shot List`. |
| P1 | `TweakSection` prop mismatch | Confirmed | `app.jsx` passes `title=`; `tweaks-panel.jsx` reads `label` → empty headings. |
| P1 | Unused tweak state | Confirmed | `density` only appears in defaults/comments; `showDeco` is wired to a toggle but applied nowhere. |
| P1 | README overpromises localization | Confirmed | `README.zh.md` contains only an English maintenance note. |
| P2 | README placeholder/external assets | Confirmed | Placeholder comment + external user-attachment links present; no local `spec-mono/preview.png`. |
| P2 | Font guidance inconsistent | Confirmed (nuance) | `design.md:101` already documents the Source Han = Noto mapping; CSS/foundation are not aligned and add a weight contradiction. |
| P2 | `dangerouslySetInnerHTML` boundary | Confirmed | Present at `app.jsx:73`, `app.jsx:98`, `aroll.jsx:260`. |
| P2 | Validation rules manual only | Confirmed | No test/lint/validation/CI config; `workflow-0-1.md` requires manual checklist + real IDs + 0.1s timing. |
| P3 | Repository roles mixed | Confirmed | README tree omits `Full Code/` despite referencing it earlier. |

## Resolution Status (2026-06-05)

All findings were addressed in source after validation. Summary of changes:

| # | Finding | Resolution | Files changed |
|---|---|---|---|
| P0 | Installability not verifiable | Added `package.json` with an `npm run verify` script plus two checkers; README now documents the verify path and repo layout. | `package.json`, `scripts/validate-repo.js`, `scripts/validate-spec.js`, `README.md` |
| P1 | Example spec ≠ template contract | Heading changed to `## 6. Shot List`; all 20 shots now use a singular `- Component:` with one real catalog ID; `§4`/`§8` headings aligned to the template. Now passes the new spec validator. | `examples/video-spec-spacex.md` |
| P1 | `TweakSection` prop mismatch | Call sites switched to `label=`; `TweakSection` also accepts `title` as an alias for resilience. | `Full Code/app.jsx`, `Full Code/tweaks-panel.jsx` |
| P1 | Unused tweak state | Removed `density`; wired `showDeco` to a `.shell--no-deco` class with CSS that hides the decoration layer. | `Full Code/app.jsx`, `Full Code/styles.css` |
| P1 | README overpromises localization | Link relabeled to "中文说明 (this project is maintained in English)". | `README.md` |
| P2 | README placeholder/external assets | Dead `preview.png` placeholder comment removed; added a text description of Spec Mono so the preview is useful even if the attachment 404s. | `README.md` |
| P2 | Font guidance inconsistent | CJK labels aligned to the canonical `Noto Sans SC` family (Source Han equivalence noted); weight ramps reconciled to `400 / 600 / 700 / 800` across `design.md` and `foundation.jsx`; removed stray 500 usages. | `spec-mono/design.md`, `Full Code/sections/foundation.jsx` |
| P2 | `dangerouslySetInnerHTML` boundary | Added a documented `trustedHTML()` trusted-input boundary helper and routed all three call sites through it. | `Full Code/app.jsx`, `Full Code/sections/aroll.jsx` |
| P2 | Validation rules manual only | Added executable `validate-repo` and `validate-spec` checkers behind `npm run verify`. | `scripts/`, `package.json` |
| P3 | Repository roles mixed | Added `Full Code/` to the README tree and a "Repository roles" section classifying every part of the repo. | `README.md` |

Verification: `npm run verify` passes (`repo check OK — all 16 required files present`; `spec check OK — examples/video-spec-spacex.md: 20 shots, all component IDs valid`). A negative test confirmed the spec checker flags the old `## 6. Storyboard` heading, plural `- Components:`, and unknown IDs.

## Findings

### P0 - Installability Is Not Verifiable From This Repository

The README claims installation through `npx skills add guolinxin/video-spec-builder` and project/global skill installation paths, but the repository has no visible package manifest or skills package metadata beyond `SKILL.md`.

Evidence:

- `README.md:63-78` documents `npx skills add` installation.
- `README.md:187-211` describes repository contents but omits any package manifest or release metadata.
- Repository scan found no `package.json`, skill manifest, CI config, or test script.

Impact:

Users may follow the README and fail, or maintainers may change files without knowing whether the published skill artifact still contains the expected folders. This is the highest risk because installation is the first user experience.

Validation (2026-06-05): Confirmed. A repository scan found no `package.json`, no `.github/` directory, and no skill manifest or CI/test config of any kind. The only metadata file is `SKILL.md` (YAML frontmatter for the skill itself, not a distribution manifest). The README install commands at `README.md` and the contents description remain unbacked by any verifiable artifact.

Recommended improvement:

- Add the minimum metadata required by the actual distribution channel.
- Add a local `verify` script that checks required files exist: `SKILL.md`, `templates/video-spec-template.md`, all referenced `references/*.md`, `examples/video-spec-spacex.md`, and `spec-mono/design.md`.
- Document the exact supported install path and the expected result after install.

### P1 - Example Spec Does Not Match The Current Template Contract

The current template requires one block per shot with a singular `- Component:` field. The example uses `## 6. Storyboard`, plural `- Components:`, and sometimes values that are not catalog IDs, such as "Real footage full-screen + aroll.keyword-sticker".

Evidence:

- `templates/video-spec-template.md:77-92` requires `## 6. Shot List` and `- Component: [component ID from components-catalog.md]`.
- `references/spec-rules.md:12-14` and `references/spec-rules.md:64-78` require each shot to use a real catalog component ID.
- `examples/video-spec-spacex.md:113-119` uses `## 6. Storyboard` and `- Components: Real footage full-screen + aroll.keyword-sticker`.
- `examples/video-spec-spacex.md:147-148` uses a valid catalog ID, showing the example is mixed rather than consistently old.

Impact:

The example is likely what users and agents copy. If it diverges from the template, future generated specs will be inconsistent and hard to validate.

Validation (2026-06-05): Confirmed, and stronger than originally stated. The section heading is `## 6. Storyboard` (example line 113), not the template's `## 6. Shot List`. Every one of the 20 scenes uses plural `- Components:` — there are zero singular `- Component:` fields in the example. The template (`templates/video-spec-template.md`), `references/spec-rules.md`, and `references/workflow-0-1.md` all require the singular `- Component:` field with a real catalog ID. Roughly half the scenes pair a non-catalog phrase with a catalog ID (e.g. Scene 01: "Real footage full-screen + aroll.keyword-sticker"), while others use a clean catalog ID (e.g. Scene 03: `broll-hero.big-type`), so the file is internally mixed rather than uniformly old.

Recommended improvement:

- Rewrite the example to match the current template exactly.
- Use exactly one primary `- Component:` ID per scene.
- Put secondary visual layers such as real footage, subtitle overlays, labels, and annotations into `Visual description`, `Asset dependencies`, or a clearly named optional field only if the template adds that field.
- Add a validator that fails when a scene has no component, has plural `Components`, or references an ID not present in `references/components-catalog.md`.

### P1 - Bundled Full Code Has A Confirmed Prop Mismatch

The app passes `title` into `TweakSection`, but `TweakSection` accepts `label`. The visible section headings inside the tweak panel will render empty.

Evidence:

- `Full Code/app.jsx:163-177` calls `<TweakSection title="Accent">` and `<TweakSection title="Layout">`.
- `Full Code/tweaks-panel.jsx:316-323` defines `function TweakSection({ label, children })`.

Impact:

The sample code has a visible UI defect and signals that the exported implementation is not being exercised after changes.

Validation (2026-06-05): Confirmed. `Full Code/app.jsx` calls `<TweakSection title="Accent">` and `<TweakSection title="Layout">`. `Full Code/tweaks-panel.jsx` defines `function TweakSection({ label, children })` and renders `<div className="twk-sect">{label}</div>`. Because no `label` prop is passed, both section headings render empty. The panel's own usage example and its internal `TweakSection label="Deck"` call both use `label`, confirming `label` is the intended prop.

Recommended improvement:

- Change the app calls to `label="Accent"` and `label="Layout"`, or make `TweakSection` accept both `label` and `title`.
- Add a simple smoke harness or screenshot check for the component-library sample if it is intended to remain part of the repo.

### P1 - Tweak Defaults Include Unused State

`density` and `showDeco` are part of `TWEAK_DEFAULTS`, but review found no implementation applying either value to the rendered component library. The toggle is exposed in the panel, but changing it does not appear to affect layout or decoration.

Evidence:

- `Full Code/app.jsx:21-26` defines `accent`, `density`, and `showDeco`.
- `Full Code/app.jsx:123-126` only applies `accent` to CSS variables.
- `Full Code/app.jsx:171-176` exposes `showDeco` as a toggle.
- Search results show no other use of `density` or `showDeco` in `Full Code/`.

Impact:

Controls that do nothing are costly in a theme/design system repo because they reduce confidence in all exposed knobs.

Validation (2026-06-05): Confirmed. A search across `Full Code/` shows `density` appears only in `app.jsx` `TWEAK_DEFAULTS` and in commented usage examples in `tweaks-panel.jsx` — it is never read or applied, and it is not even exposed as a control. `showDeco` is exposed via `TweakToggle` (`app.jsx:171-177`) and stored in state, but its value is never applied to any class or style; the only thing wired to CSS is `accent` (via `document.documentElement.style.setProperty('--accent', ...)`). The `tokens.css` decorative utilities are annotated "showDeco" in comments but nothing toggles them.

Recommended improvement:

- Remove unused tweak fields, or wire them into CSS classes on `.shell`.
- If `showDeco` remains, define a single class-based mechanism that hides decorative utilities consistently.

### P1 - Documentation Overpromises Localization

The root README links to a Chinese README, but `README.zh.md` only says the project is maintained in English.

Evidence:

- `README.md:3` labels the link as "Chinese README path".
- `README.zh.md:1-3` contains no Chinese project documentation.

Impact:

This creates a poor first impression for Chinese readers and looks like unfinished documentation.

Validation (2026-06-05): Confirmed. `README.zh.md` is three lines and contains only: "This project is now maintained in English. See README.md." The root `README.md` labels the link "Chinese README path", which sets an expectation of Chinese documentation that the target file does not deliver.

Recommended improvement:

- Either translate the README meaningfully, or relabel the link as "中文说明: this project is maintained in English" so expectations are accurate.

### P2 - README References Placeholder And External Assets Instead Of Repository Assets

The Spec Mono preview is still a commented placeholder, while the visible preview depends on GitHub user-attachment URLs.

Evidence:

- `README.md:169-170` contains a placeholder for `spec-mono/preview.png`.
- `README.md:172-173` embeds an external user-attachment PDF/image.

Impact:

The project presentation depends on external attachment availability, and the theme folder lacks a stable local preview image.

Validation (2026-06-05): Confirmed. `README.md` contains an HTML comment placeholder instructing the maintainer to drop a preview at `spec-mono/preview.png` and uncomment the image line; that file does not exist in the repo. The visible Spec Mono preview is a `github.com/user-attachments` PDF link plus a `user-attachments/assets` image, both external. The masthead image at the top of the README is also an external user-attachment.

Recommended improvement:

- Add `spec-mono/preview.png` or remove the placeholder.
- Prefer stable repository assets for previews when possible.
- If external PDFs are necessary, mirror their purpose in text so the README remains useful if an attachment disappears.

### P2 - Theme Font Guidance Is Inconsistent Across Files

`spec-mono/design.md` says Chinese uses Source Han Sans SC and notes HyperFrames font constraints, while CSS files use Noto Sans SC as the primary CJK family.

Evidence:

- `spec-mono/design.md:100-101` specifies Source Han Sans SC.
- `spec-mono/tokens.css:40-43` and `Full Code/tokens.css:32-35` use `Noto Sans SC` in the font stack.
- `Full Code/sections/foundation.jsx:86` and `Full Code/sections/foundation.jsx:113` label the CJK stack as Source Han Sans.

Impact:

Theme consumers may not know which font assets to provide, and rendered output may differ from the documented design contract.

Validation (2026-06-05): Confirmed, with two refinements. First, `spec-mono/design.md:101` already documents the mapping the review's recommendation asks for: it states "Source Han Sans SC = Noto Sans SC Chinese variant — this theme deliberately selects it as the CJK font; keep it." So the conflict is not a missing decision; it is that the CSS variables/comments (`--f-cn: "Noto Sans SC" ...` in both `tokens.css` files) and `foundation.jsx` labels ("CJK · Source Han Sans", "Source Han Sans → PingFang → HarmonyOS") never reference that mapping, so a reader of the CSS alone has no way to connect the two names. Second, there is an additional unflagged inconsistency in the weight ramps: `design.md` says 400 / 700 / 900, `foundation.jsx:89` says 400 / 500 / 700 / 900 (which includes the 500 weight that `tokens.css` explicitly says to skip), and `tokens.css` defines 400 / 600 / 700 / 800. These three weight lists should be reconciled alongside the font-name alignment.

Recommended improvement:

- Pick one canonical CJK font naming strategy.
- If Source Han and Noto are intentionally equivalent in this context, document the mapping once and align CSS comments/variables with it.

### P2 - `dangerouslySetInnerHTML` Is Used In Sample Code Without A Clear Boundary

The sample code renders HTML strings directly for section descriptions, parameter values, and at least one body field. Current call sites may use internal strings, but the boundary is not documented and could become unsafe if future data becomes user-provided.

Evidence:

- `Full Code/app.jsx:73` renders `desc` with `dangerouslySetInnerHTML`.
- `Full Code/app.jsx:98` renders parameter values with `dangerouslySetInnerHTML`.
- `Full Code/sections/aroll.jsx:260` performs string replacement and renders HTML.

Impact:

If this code is copied into a generated video project and pointed at user content, it creates an avoidable injection risk.

Validation (2026-06-05): Confirmed. `dangerouslySetInnerHTML` is used at three sites: `Full Code/app.jsx:73` (section `desc`), `Full Code/app.jsx:98` (param value `r.v`), and `Full Code/sections/aroll.jsx:260`, where `body` is run through a regex `.replace` that injects inline styles into `<em>` tags before being rendered as raw HTML. All current call sites pass internal literal strings, so there is no live vulnerability today, but no comment or helper marks the trusted-input boundary.

Recommended improvement:

- Prefer structured React nodes for emphasis.
- If HTML strings are intentional, add a small helper with a documented trusted-input boundary and keep all raw HTML construction local.

### P2 - Validation Rules Are Strong, But Manual Only

The reference docs contain detailed checklists for timing, component IDs, required fields, and consistency. None of those checks are executable today.

Evidence:

- `references/spec-rules.md:108-124` provides a pre-delivery checklist.
- `references/workflow-0-1.md:219-229` requires output using the template, real component IDs, 0.1s timing, and checklist review.
- Repository scan found no test, lint, validation, or CI configuration.

Impact:

The most valuable quality rules depend on the model remembering and obeying them. Drift has already appeared in the example spec.

Validation (2026-06-05): Confirmed. `references/workflow-0-1.md` requires output via the template, real catalog component IDs (the doc itself calls the field "Component", singular), 0.1s timing, and a line-by-line pre-delivery checklist; `references/spec-rules.md` carries the detailed checklist. None of these are executable — the repo scan found no test, lint, validator, or CI config. The example-spec drift documented in the P1 finding above is concrete evidence that the manual rules are not being enforced.

Recommended improvement:

- Add a small validator that checks:
  - required top-level sections are present;
  - each scene has required fields;
  - `Component` is singular and present;
  - component IDs exist in `components-catalog.md`;
  - scene times are monotonic and total duration matches the stated duration within tolerance;
  - no `[placeholder]` remains in generated examples.

### P3 - Repository Roles Are Mixed

The repo currently contains a skill, a theme, a long-form example, a reference system, and a full React/CSS implementation export. Those are related, but the README does not clearly define which files are installed, which are examples, and which are source-of-truth implementation assets.

Evidence:

- `README.md:175-185` describes Spec Mono as distilled while pointing to `Full Code/` for full implementation.
- `README.md:187-211` omits `Full Code/` from the tree despite referencing it earlier.
- `SKILL.md:74-103` describes installed runtime file structure for a video project, not necessarily this repository's package layout.

Impact:

Maintainers and users may modify the wrong artifact or assume generated code is runtime-critical when it is actually a reference export.

Validation (2026-06-05): Confirmed. The README "Heads up" note points readers to `Full Code/` for the full implementation, but the "What's in this repo" tree lists only `SKILL.md`, `README.md`, `LICENSE`, `references/`, `templates/`, `examples/`, and `spec-mono/` — `Full Code/` is absent. The directory also uses a space in its name, and `SKILL.md` documents an installed-project file layout (`.claude/skills/...`) that differs from this repository's own layout, compounding the role ambiguity.

Recommended improvement:

- Add a short "Repository roles" section:
  - skill runtime files;
  - authoring references;
  - examples;
  - optional Spec Mono theme assets;
  - non-runtime full-code reference export.
- Decide whether `Full Code/` should be shipped, moved under `examples/`, or renamed to avoid spaces and clarify it is a reference.

## Recommended Roadmap

### First Pass (done 2026-06-05)

1. [x] Fix the `TweakSection` prop mismatch.
2. [x] Remove or wire `density` and `showDeco`.
3. [x] Rewrite `examples/video-spec-spacex.md` to match the current template.
4. [x] Update README tree to include or intentionally exclude `Full Code/`.
5. [x] Replace the Chinese README link wording or add a real Chinese README.

### Second Pass

1. [x] Add a `scripts/validate-spec.js` checker for examples and generated specs.
2. [x] Add a `scripts/validate-repo.js` checker for required package files and reference links.
3. [x] Add a minimal package or skill metadata file matching the distribution channel (`package.json`).
4. [ ] Add CI that runs the validators.

### Third Pass

1. [x] Convert raw HTML string rendering in `Full Code/` to a documented trusted-input boundary (`trustedHTML`); full structured-JSX conversion remains optional.
2. [ ] Add a local Spec Mono preview asset (`spec-mono/preview.png`).
3. [x] Normalize font naming across `design.md`, `tokens.css`, and the full-code export.
4. [ ] Split runtime docs from design-system docs if the repo keeps growing.

## Suggested Validation Commands

Once validation scripts exist, expose one command for maintainers, for example:

```bash
npm run verify
```

That command should check repository structure, markdown links, component catalog integrity, example spec validity, and any bundled UI sample smoke tests.

## Verification Performed For This Review

- Read repository file list and line counts.
- Reviewed root docs, skill instructions, template, example spec, reference workflow/spec rules, Spec Mono theme files, and bundled React/CSS sample.
- Ran a mechanical catalog scan confirming `references/components-catalog.md` declares 69 component IDs (verified by counting `namespace.id` headings).
- Attempted to parse example scene component IDs using the current `- Component:` contract; the parser found none because the example uses plural `- Components:` instead.

## Validation Pass (2026-06-05)

Each finding above was independently re-validated against the current tracked files:

- Confirmed no `package.json`, `.github/`, skill manifest, or CI/test config exists (filesystem scan).
- Confirmed all 20 example scenes use plural `- Components:` under a `## 6. Storyboard` heading, contradicting the singular `- Component:` / `## 6. Shot List` contract in the template, `spec-rules.md`, and `workflow-0-1.md`.
- Confirmed the `TweakSection` `title` vs `label` prop mismatch in `app.jsx` against `tweaks-panel.jsx`.
- Confirmed `density` is never applied and `showDeco` is wired to a control but applied nowhere; only `accent` reaches the DOM.
- Confirmed `README.zh.md` carries only an English maintenance note.
- Confirmed the `spec-mono/preview.png` placeholder, the external-attachment previews, and the absence of a local preview asset.
- Confirmed the font-name split between `design.md`/`foundation.jsx` (Source Han Sans) and the `tokens.css` files (Noto Sans SC); noted that `design.md:101` already documents the mapping and that the weight ramps additionally disagree (400/700/900 vs 400/500/700/900 vs 400/600/700/800).
- Confirmed `dangerouslySetInnerHTML` at `app.jsx:73`, `app.jsx:98`, and `aroll.jsx:260`.
- Confirmed the validation rules are documentation-only with no executable checks.
- Confirmed the README tree omits `Full Code/`.

All ten findings hold. No finding was overturned; P1 (example spec) is stronger than first written, and P2 (fonts) carries the noted nuance.

## Final Check

All recommendations above trace to observed files in this repository. No unrelated source cleanup was included.
