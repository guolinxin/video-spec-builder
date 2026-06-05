#!/usr/bin/env node
/* ----------------------------------------------------------------
   validate-spec.js [path-to-video-spec.md]
   Checks a video-spec.md against the template contract:
     - opens with the "Please generate a video..." instruction line;
     - all nine top-level sections (## 1. .. ## 9.) are present;
     - the shot-list heading is exactly "## 6. Shot List";
     - every shot uses a singular "- Component:" (never plural);
     - each Component value is a real ID from components-catalog.md;
     - no template placeholder text leaks through.
   Defaults to examples/video-spec-spacex.md when no path is given.
   Exits non-zero with a list of problems so CI / `npm run verify`
   can gate on it.
   ---------------------------------------------------------------- */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const specPath = path.resolve(
  ROOT,
  process.argv[2] || 'examples/video-spec-spacex.md',
);
const catalogPath = path.join(ROOT, 'references/components-catalog.md');

function fail(list) {
  console.error(`spec check FAILED — ${specPath}`);
  list.forEach((m) => console.error(`  - ${m}`));
  process.exit(1);
}

if (!fs.existsSync(specPath)) fail(['file does not exist']);
if (!fs.existsSync(catalogPath)) fail(['references/components-catalog.md not found']);

// Catalog IDs look like `[namespace.component-id]` at line start.
const catalog = new Set(
  [...fs.readFileSync(catalogPath, 'utf8').matchAll(/^\[([a-z0-9-]+\.[a-z0-9-]+)\]/gm)]
    .map((m) => m[1]),
);

const text = fs.readFileSync(specPath, 'utf8');
const lines = text.split(/\r?\n/);
const errors = [];

// 1. Opening instruction line.
const firstBody = lines.find((l) => l.trim().length > 0) || '';
if (!/^Please generate a video according to the following script/.test(firstBody.trim())) {
  errors.push('first non-empty line must be the "Please generate a video..." instruction');
}

// 2. All nine sections present.
for (let n = 1; n <= 9; n += 1) {
  const re = new RegExp(`^##\\s+${n}\\.\\s`, 'm');
  if (!re.test(text)) errors.push(`missing top-level section "## ${n}."`);
}

// 3. Shot-list heading is exact.
if (!/^##\s+6\.\s+Shot List\s*$/m.test(text)) {
  errors.push('section 6 heading must be exactly "## 6. Shot List"');
}

// 4. No plural Components.
lines.forEach((line, i) => {
  if (/^-\s*Components\s*:/.test(line)) {
    errors.push(`line ${i + 1}: plural "- Components:" — use singular "- Component:"`);
  }
});

// 5. Each Component value is a single, real catalog ID.
const componentLines = lines
  .map((line, i) => ({ line, i }))
  .filter(({ line }) => /^-\s*Component\s*:/.test(line));

if (componentLines.length === 0) {
  errors.push('no "- Component:" fields found in the shot list');
}

componentLines.forEach(({ line, i }) => {
  const raw = line.replace(/^-\s*Component\s*:/, '').trim();
  // Drop any trailing parenthetical note, e.g. "(echoes Scene 03)".
  const id = raw.replace(/\(.*$/, '').trim().split(/\s+/)[0];
  if (!id) {
    errors.push(`line ${i + 1}: empty Component`);
  } else if (!catalog.has(id)) {
    errors.push(`line ${i + 1}: "${id}" is not a catalog component ID`);
  }
});

// 6. No leftover template placeholders.
const placeholderHits = [
  '[component ID from components-catalog.md]',
  '[video title]',
  '[placeholder]',
].filter((p) => text.includes(p));
placeholderHits.forEach((p) => errors.push(`unreplaced template placeholder: "${p}"`));

if (errors.length > 0) fail(errors);

console.log(
  `spec check OK — ${path.relative(ROOT, specPath)}: ` +
  `${componentLines.length} shots, all component IDs valid.`,
);
