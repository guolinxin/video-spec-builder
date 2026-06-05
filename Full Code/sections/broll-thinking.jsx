/* ================================================================
   sections/broll-thinking.jsx — 09 · Category D · Structured Thinking (7 variants)
   compare-table · swot · fishbone · timeline · gantt · kanban · card-grid
   ================================================================ */

function ThinkingSection() {
  return (
    <Section id="thinking" num="09" title="B-roll · Structured Thinking"
      desc="Use when covering <b>comparison · analysis · time · tasks</b>. Shared syntax: <em>grid + hairline borders + mono headers</em>. Most template-ready → plug in data directly.">
      <CompareTable /><SWOT /><Fishbone /><TimelineRow />
      <Gantt /><KanbanBoard /><CardGrid />
    </Section>
  );
}

/* ── D1 · Comparison Table ── */
function CompareTable() {
  const rows = [
    { k: 'Context window',  vals: ['200K', '128K', '1M'],     winIdx: 2 },
    { k: 'Price / 1M',      vals: ['$3.00', '$2.50', '$1.25'], winIdx: 2 },
    { k: 'Chinese performance', vals: ['★★★★★', '★★★★☆', '★★★★☆'], winIdx: 0 },
    { k: 'Function calling', vals: ['Native', 'Native', 'Native'], winIdx: null },
    { k: 'Vision understanding', vals: ['Supported', 'Supported', 'Supported'], winIdx: null },
    { k: 'Free tier',       vals: ['—',    '—',    '✓'],        winIdx: 2 },
  ];
  const cols = ['Claude 3.5', 'GPT-4o', 'Gemini 1.5'];
  return (
    <SubSec name="D1 · Comparison Table" tag="A VS B VS C">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D1">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>MODEL COMPARISON · 6 DIMENSIONS</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 6% 6% 6%' }}>
          {/* header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', borderBottom: '1px solid var(--line-2)', paddingBottom: 14, marginBottom: 14 }}>
            <div className="meta" style={{ color: 'var(--fg-3)' }}>DIMENSION</div>
            {cols.map((c, i) => (
              <div key={i} className="cn" style={{ fontSize: 20, fontWeight: 800, color: 'var(--fg)' }}>{c}</div>
            ))}
          </div>
          {/* rows */}
          {rows.map((r, ri) => (
            <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
              <div className="cn" style={{ fontSize: 18, color: 'var(--fg-2)' }}>{r.k}</div>
              {r.vals.map((v, vi) => (
                <div key={vi} className="mono" style={{ fontSize: 18, fontWeight: vi === r.winIdx ? 800 : 400, color: vi === r.winIdx ? 'var(--accent)' : 'var(--fg)' }}>
                  {vi === r.winIdx && <span style={{ marginRight: 6, color: 'var(--accent)' }}>★</span>}
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'HEADER', v: 'Left: mono caps dimension · Right: cn 800 candidate name' },
        { k: 'WIN', v: 'Best in row: accent + ★ prefix' },
        { k: 'ROW', v: 'Hairline separators · no vertical lines' },
      ]} />
    </SubSec>
  );
}

/* ── D2 · SWOT ── */
function SWOT() {
  const quads = [
    { k: 'S', name: 'STRENGTHS',     cn: 'Strengths', tone: 'accent', items: ['Industry-leading model quality', 'Rich Chinese-language corpus', 'Strong safety alignment'] },
    { k: 'W', name: 'WEAKNESSES',    cn: 'Weaknesses', tone: 'fg',     items: ['Higher inference cost', 'Shorter context than competitors'] },
    { k: 'O', name: 'OPPORTUNITIES', cn: 'Opportunities', tone: 'accent', items: ['Enterprise RAG market', 'Agent standardization', 'On-device inference'] },
    { k: 'T', name: 'THREATS',       cn: 'Threats', tone: 'fg',     items: ['Open-source catch-up pace', 'Price wars', 'Regulatory uncertainty'] },
  ];
  return (
    <SubSec name="D2 · SWOT · Four Quadrants" tag="STRATEGIC ANALYSIS">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D2">
        <div style={{ position: 'absolute', inset: '6%', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16 }}>
          {quads.map((q, i) => (
            <div key={i} style={{
              border: '1px solid',
              borderColor: q.tone === 'accent' ? 'var(--accent)' : 'var(--line-2)',
              background: q.tone === 'accent' ? 'rgba(255,107,61,.04)' : 'transparent',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, borderBottom: '1px solid var(--line)', paddingBottom: 14 }}>
                <div className="mono" style={{ fontSize: 56, fontWeight: 800, color: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)', lineHeight: 1 }}>{q.k}</div>
                <div>
                  <div className="meta" style={{ color: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)' }}>{q.name}</div>
                  <div className="cn" style={{ fontSize: 24, fontWeight: 800 }}>{q.cn}</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.items.map((it, ii) => (
                  <li key={ii} className="cn" style={{ fontSize: 17, color: 'var(--fg-2)', position: 'relative', paddingLeft: 18 }}>
                    <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 1, background: q.tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)' }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'QUAD', v: '2×2 equal width · S/O same color (positive) · W/T neutral' },
        { k: 'LETTER', v: 'mono 800 · 56px · visual anchor for each quadrant' },
        { k: 'ITEM', v: '8px dash + text item (no bullet dots)' },
      ]} />
    </SubSec>
  );
}

/* ── D3 · Fishbone ── */
function Fishbone() {
  const causes = [
    { side: 'top',    x: 220, l: 'People',    items: ['Insufficient experience', 'Poor communication'] },
    { side: 'top',    x: 460, l: 'Methods',   items: ['Missing process', 'Review skipped'], hot: true },
    { side: 'top',    x: 700, l: 'Tools',     items: ['No monitoring'] },
    { side: 'bottom', x: 340, l: 'Environment', items: ['Code freeze period'] },
    { side: 'bottom', x: 580, l: 'Data',      items: ['Skewed training set', 'Cold start'] },
    { side: 'bottom', x: 820, l: 'Feedback',  items: ['Excessive latency'], hot: true },
  ];
  return (
    <SubSec name="D3 · Fishbone" tag="ROOT CAUSE ANALYSIS">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D3">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* spine */}
          <line x1="80" y1="260" x2="1040" y2="260" stroke="var(--line-2)" strokeWidth="2" />
          <polygon points="1040,260 1028,252 1028,268" fill="var(--accent)" />
          {/* head */}
          <rect x="1040" y="220" width="120" height="80" rx="6" fill="var(--accent)" />
          <text x="1100" y="248" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="rgba(0,0,0,.55)">PROBLEM</text>
          <text x="1100" y="276" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="18" fontWeight="800" fill="var(--bg)">Production incident</text>
          {/* bones */}
          {causes.map((c, i) => {
            const yEnd = c.side === 'top' ? 80 : 440;
            const y0 = 260;
            const c0 = c.hot ? 'var(--accent)' : 'var(--line-2)';
            return (
              <g key={i}>
                <line x1={c.x} y1={y0} x2={c.x - (c.side === 'top' ? 80 : -80)} y2={yEnd} stroke={c0} strokeWidth="1.5" />
                <text x={c.x - (c.side === 'top' ? 90 : -90)} y={yEnd + (c.side === 'top' ? -8 : 18)} textAnchor={c.side === 'top' ? 'end' : 'start'} fontFamily="var(--f-cn)" fontSize="18" fontWeight="800" fill={c.hot ? 'var(--accent)' : 'var(--fg)'}>{c.l}</text>
                {c.items.map((it, ii) => {
                  const dy = c.side === 'top' ? -50 - ii * 32 : 50 + ii * 32;
                  const xMid = c.x + (c.side === 'top' ? -40 : 40) - (c.side === 'top' ? 80 : -80) * (Math.abs(dy) / 180);
                  return (
                    <g key={ii}>
                      <line x1={xMid} y1={y0 + dy} x2={xMid + (c.side === 'top' ? -30 : 30)} y2={y0 + dy} stroke="var(--line-3)" strokeWidth="1" />
                      <text x={xMid + (c.side === 'top' ? -38 : 38)} y={y0 + dy + 5} textAnchor={c.side === 'top' ? 'end' : 'start'} fontFamily="var(--f-cn)" fontSize="14" fill="var(--fg-2)">{it}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'SPINE', v: 'Horizontal spine · head is the problem · tail points left' },
        { k: 'BONES', v: '6 cause categories angled in · primary causes in accent' },
        { k: 'SUB', v: 'Horizontal sub-branches · 14px detail factors' },
      ]} />
    </SubSec>
  );
}

/* ── D4 · Timeline ── */
function TimelineRow() {
  const events = [
    { d: '2017',  l: 'Attention Is All You Need', s: 'TRANSFORMER' },
    { d: '2020',  l: 'GPT-3 · 175B parameters',   s: 'SCALING LAW', hot: true },
    { d: '2022',  l: 'ChatGPT launch',            s: 'PUBLIC AI', hot: true },
    { d: '2023',  l: 'GPT-4 · multimodal',        s: 'MULTIMODAL' },
    { d: '2024',  l: 'Claude 3.5 · Agent',        s: 'TOOL USE', hot: true },
    { d: '2025+', l: '?',                          s: 'AGI?' },
  ];
  return (
    <SubSec name="D4 · Timeline" tag="HISTORICAL EVOLUTION">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D4">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>LLM HISTORY · 8 YEARS</div>
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, marginTop: 4 }}>From Transformer to Agent</div>
        </div>
        <div style={{ position: 'absolute', inset: '36% 4% 14% 4%' }}>
          {/* line */}
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--line-2)' }} />
          {/* events */}
          <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${events.length}, 1fr)` }}>
            {events.map((e, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* dot */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: e.hot ? 18 : 10, height: e.hot ? 18 : 10, borderRadius: '50%', background: e.hot ? 'var(--accent)' : 'var(--fg-2)', border: '2px solid var(--bg)' }} />
                {/* upper card */}
                {i % 2 === 0 && (
                  <div style={{ position: 'absolute', bottom: 'calc(50% + 24px)', textAlign: 'center', width: '90%' }}>
                    <div className="meta" style={{ color: e.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{e.s}</div>
                    <div className="cn" style={{ fontSize: 18, fontWeight: 800, marginTop: 4, color: e.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{e.l}</div>
                  </div>
                )}
                {/* date */}
                <div className="mono" style={{ position: 'absolute', top: 'calc(50% + 20px)', fontSize: 22, fontWeight: 800, color: e.hot ? 'var(--accent)' : 'var(--fg-2)' }}>{e.d}</div>
                {/* lower card */}
                {i % 2 === 1 && (
                  <div style={{ position: 'absolute', top: 'calc(50% + 56px)', textAlign: 'center', width: '90%' }}>
                    <div className="meta" style={{ color: e.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{e.s}</div>
                    <div className="cn" style={{ fontSize: 18, fontWeight: 800, marginTop: 4, color: e.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{e.l}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: 'Horizontal hairline · evenly spaced' },
        { k: 'EVENT', v: 'Alternating upper/lower cards · reduces crowding' },
        { k: 'DOT', v: 'Key events: accent + larger size' },
      ]} />
    </SubSec>
  );
}

/* ── D5 · Gantt ── */
function Gantt() {
  const tasks = [
    { l: 'Requirements review', start: 0,  dur: 1, color: 'fg-2' },
    { l: 'Architecture design', start: 1,  dur: 2, color: 'fg-2' },
    { l: 'Model training',      start: 2,  dur: 4, color: 'accent' },
    { l: 'Integration testing', start: 5,  dur: 2, color: 'fg-2' },
    { l: 'Gradual rollout',     start: 7,  dur: 1, color: 'accent' },
    { l: 'Post-mortem',         start: 8,  dur: 1, color: 'fg-2' },
  ];
  const weeks = 10;
  return (
    <SubSec name="D5 · Gantt" tag="PROJECT TIMELINE">
      <Stage pattern="grid" label="● B-ROLL · THINK" labelR="09.D5">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>RAG V2 · Q1 ROADMAP</div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 6% 4%' }}>
          {/* week header */}
          <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${weeks}, 1fr)`, borderBottom: '1px solid var(--line-2)', paddingBottom: 10, marginBottom: 14 }}>
            <div />
            {Array.from({ length: weeks }, (_, i) => (
              <div key={i} className="meta" style={{ textAlign: 'center', color: 'var(--fg-3)' }}>W{i + 1}</div>
            ))}
          </div>
          {/* rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {tasks.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: `200px repeat(${weeks}, 1fr)`, alignItems: 'center', gap: 0 }}>
                <div className="cn" style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)' }}>{t.l}</div>
                {Array.from({ length: weeks }, (_, ci) => {
                  const active = ci >= t.start && ci < t.start + t.dur;
                  return (
                    <div key={ci} style={{
                      height: 26,
                      margin: '0 2px',
                      background: active ? (t.color === 'accent' ? 'var(--accent)' : 'rgba(255,255,255,.22)') : 'transparent',
                      borderRadius: 2,
                    }} />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: 'Left column: task name · Right: weekly bars' },
        { k: 'BAR', v: 'Height 26px · 2px radius · key milestones in accent' },
        { k: 'HEADER', v: 'W1–W10 mono caps · hairline separator' },
      ]} />
    </SubSec>
  );
}

/* ── D6 · Kanban ── */
function KanbanBoard() {
  const cols = [
    { l: 'BACKLOG',     cn: 'To Do',  items: [
      { t: 'Research Embedding v3', tag: 'RESEARCH' },
      { t: 'Fix cache TTL', tag: 'BUG' },
      { t: 'Update documentation', tag: 'DOC' },
    ] },
    { l: 'IN PROGRESS', cn: 'In Progress', hot: true, items: [
      { t: 'Reranker training', tag: 'ML', hot: true },
      { t: 'Agent tool integration', tag: 'FEATURE', hot: true },
    ] },
    { l: 'REVIEW',      cn: 'Review',  items: [
      { t: 'Prompt template library', tag: 'DESIGN' },
    ] },
    { l: 'DONE',        cn: 'Done',  items: [
      { t: 'Shipped v2.3', tag: 'RELEASE' },
      { t: 'Performance baseline established', tag: 'INFRA' },
      { t: 'Team training', tag: 'OPS' },
    ] },
  ];
  return (
    <SubSec name="D6 · Kanban Board" tag="STATUS COLUMNS">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D6">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>TEAM SPRINT · WEEK 24</div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 6% 4%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {cols.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ paddingBottom: 12, borderBottom: '1px solid', borderColor: c.hot ? 'var(--accent)' : 'var(--line-2)' }}>
                <div className="meta" style={{ color: c.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{c.l} · {c.items.length}</div>
                <div className="cn" style={{ fontSize: 20, fontWeight: 800, marginTop: 4, color: c.hot ? 'var(--accent)' : 'var(--fg)' }}>{c.cn}</div>
              </div>
              {c.items.map((it, ii) => (
                <div key={ii} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: it.hot ? 'var(--accent)' : 'var(--line)',
                  borderRadius: 6,
                  padding: 16,
                }}>
                  <div className="meta" style={{ marginBottom: 8, color: it.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{it.tag}</div>
                  <div className="cn" style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg)' }}>{it.t}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'COL', v: '4 equal columns · active column accent header' },
        { k: 'CARD', v: 'Top: mono tag · Bottom: task title' },
        { k: 'COUNT', v: 'Column header shows count · workload at a glance' },
      ]} />
    </SubSec>
  );
}

/* ── D7 · Card Grid ── */
function CardGrid() {
  const items = [
    { n: '01', l: 'Chain-of-Thought', s: 'Step-by-step reasoning' },
    { n: '02', l: 'Few-Shot', s: 'Example-guided formatting', hot: true },
    { n: '03', l: 'ReAct', s: 'Think + act loop' },
    { n: '04', l: 'Self-Consistency', s: 'Sample multiple times, take majority' },
    { n: '05', l: 'Tree of Thoughts', s: 'Search-based reasoning tree' },
    { n: '06', l: 'Reflexion', s: 'Self-reflection after failure', hot: true },
    { n: '07', l: 'RAG', s: 'Retrieval-augmented generation' },
    { n: '08', l: 'Function Call', s: 'Structured tool invocation' },
  ];
  return (
    <SubSec name="D7 · Card Grid" tag="CONCEPT GALLERY">
      <Stage pattern="dot" label="● B-ROLL · THINK" labelR="09.D7">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>PROMPTING TECHNIQUES · 8 PATTERNS</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 4% 6% 4%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 16 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: it.hot ? 'var(--bg-card)' : 'transparent',
              border: '1px solid',
              borderColor: it.hot ? 'var(--accent)' : 'var(--line)',
              borderRadius: 6,
              padding: 22,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.2em', color: it.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{it.n}</div>
              <div>
                <div className="cn" style={{ fontSize: 22, fontWeight: 800, color: 'var(--fg)', marginBottom: 6 }}>{it.l}</div>
                <div className="cn" style={{ fontSize: 14, color: 'var(--fg-2)' }}>{it.s}</div>
              </div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: '4×2 · equal width and height · 16px gap' },
        { k: 'CARD', v: 'Top-left number + bottom-left title + subtitle' },
        { k: 'HOT', v: 'Recommended item: full bg-card fill + accent border' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { ThinkingSection });
