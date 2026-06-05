#!/usr/bin/env node
/* ----------------------------------------------------------------
   validate-repo.js
   Confirms the skill package contains every file the README and
   SKILL.md promise. Exits non-zero (and lists what is missing) so
   `npm run verify` can gate a release or CI run.
   ---------------------------------------------------------------- */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Files the skill cannot function without.
const REQUIRED = [
  'SKILL.md',
  'agents/openai.yaml',
  'README.md',
  'LICENSE',
  'templates/video-spec-template.md',
  'examples/video-spec-spacex.md',
  'references/workflow-0-1.md',
  'references/workflow-iteration.md',
  'references/question-bank.md',
  'references/scene-breakdown.md',
  'references/components-catalog.md',
  'references/pacing-rules.md',
  'references/spec-rules.md',
  'references/dialogue-style.md',
  'spec-mono/design.md',
  'spec-mono/tokens.css',
  'spec-mono/spec-mono-components.md',
];

const missing = REQUIRED.filter((rel) => !fs.existsSync(path.join(ROOT, rel)));

if (missing.length > 0) {
  console.error('repo check FAILED — missing required files:');
  missing.forEach((rel) => console.error(`  - ${rel}`));
  process.exit(1);
}

console.log(`repo check OK — all ${REQUIRED.length} required files present.`);
