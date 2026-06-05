/* ================================================================
   sections/broll-structures2.jsx — 08 · Category C · Relational Structures (7 variants)
   tree · mindmap · matrix-2x2 · venn · layered-stack ·
   hub-spoke · grid-map
   ================================================================ */

function Structures2Section() {
  return (
    <Section id="structures2" num="08" title="B-roll · Relational Structures"
      desc="Use for <b>hierarchy · classification · positioning · overlap</b>. Shared syntax: <em>hairline edges + shape-as-semantic</em> (tree = hierarchy / matrix = positioning / Venn = intersection / stack = layering).">
      <TreeChart /><MindMap /><Matrix2x2 /><VennDiagram />
      <LayeredStack /><HubSpoke /><GridMap />
    </Section>
  );
}

/* ── C6 · Tree / Org Chart ── */
function TreeChart() {
  return (
    <SubSec name="C6 · Tree · Tree / Taxonomy" tag="HIERARCHICAL CLASSIFICATION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C6">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>LLM TAXONOMY</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>Taxonomy of Generative Models</div>
        </div>
        <svg viewBox="0 0 1400 580" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <FNode x={600} y={120} w={200} h={64} label="LLM" sub="ROOT" hot />
          {[
            { x: 120,  l: 'Encoder',    s: 'BERT family' },
            { x: 460,  l: 'Decoder',    s: 'GPT family', hot: true },
            { x: 800,  l: 'Encoder-Decoder', s: 'T5 family' },
            { x: 1140, l: 'MoE',        s: 'Sparse activation' },
          ].map((n, i) => (
            <React.Fragment key={i}>
              <line x1={700} y1={184} x2={n.x + 140} y2={300} stroke={n.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" />
              <FNode x={n.x + 20} y={300} w={240} h={72} label={n.l} sub={n.s} hot={n.hot} />
            </React.Fragment>
          ))}
          {[
            { px: 480, x: 280, l: 'GPT-4' },
            { px: 480, x: 460, l: 'Claude' },
            { px: 480, x: 640, l: 'LLaMA' },
          ].map((n, i) => (
            <React.Fragment key={i}>
              <line x1={n.px + 120} y1={372} x2={n.x + 80} y2={460} stroke="var(--line-3)" strokeWidth="1" />
              <FNode x={n.x} y={460} w={160} h={56} label={n.l} />
            </React.Fragment>
          ))}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: 'Three tiers top-to-bottom · root → category → instance' },
        { k: 'EDGE', v: 'Straight connectors · primary branch accent' },
        { k: 'NODE', v: 'Deeper levels · smaller rectangles' },
      ]} />
    </SubSec>
  );
}

/* ── C7 · Mind Map ── */
function MindMap() {
  const branches = [
    { angle: -150, l: 'Data Prep', sub: ['Cleaning', 'Labeling', 'Augmentation'] },
    { angle:  -90, l: 'Model Training', sub: ['Hyperparams', 'Loss', 'Scheduler'], hot: true },
    { angle:  -30, l: 'Evaluation', sub: ['Offline', 'Online', 'A/B'] },
    { angle:   30, l: 'Deployment', sub: ['Orchestration', 'Monitoring'] },
    { angle:   90, l: 'Feedback', sub: ['Users', 'Metrics', 'Loopback'], hot: true },
    { angle:  150, l: 'Safety', sub: ['Alignment', 'Red Team'] },
  ];
  const cx = 700, cy = 320, r1 = 220, r2 = 360;
  const polar = (a, r) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  return (
    <SubSec name="C7 · Mind Map" tag="RADIAL DECOMPOSITION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C7">
        <svg viewBox="0 0 1400 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* center */}
          <circle cx={cx} cy={cy} r="64" fill="var(--accent)" />
          <text x={cx} y={cy + 6} textAnchor="middle" fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill="var(--bg)">ML System</text>
          {branches.map((b, i) => {
            const [x1, y1] = polar(b.angle, r1);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={b.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" />
                <circle cx={x1} cy={y1} r="8" fill={b.hot ? 'var(--accent)' : 'var(--fg-2)'} />
                <text x={x1 + (Math.cos(b.angle * Math.PI / 180) > 0 ? 18 : -18)} y={y1 + 6} textAnchor={Math.cos(b.angle * Math.PI / 180) > 0 ? 'start' : 'end'} fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill={b.hot ? 'var(--accent)' : 'var(--fg)'}>{b.l}</text>
                {b.sub.map((s, si) => {
                  const a2 = b.angle + (si - (b.sub.length - 1) / 2) * 8;
                  const [x2, y2] = polar(a2, r2);
                  return (
                    <g key={si}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line-3)" strokeWidth="1" />
                      <text x={x2 + (Math.cos(a2 * Math.PI / 180) > 0 ? 12 : -12)} y={y2 + 4} textAnchor={Math.cos(a2 * Math.PI / 180) > 0 ? 'start' : 'end'} fontFamily="var(--f-cn)" fontSize="14" fill="var(--fg-2)">{s}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'CENTER', v: 'Solid accent circle · inverted theme text' },
        { k: 'BRANCH', v: 'Primary text weight 800 · secondary 14px' },
        { k: 'ANGLE', v: 'Primary branches evenly radial · sub-branches with slight angle offset' },
      ]} />
    </SubSec>
  );
}

/* ── C8 · 2×2 Matrix ── */
function Matrix2x2() {
  const items = [
    { qx: 0, qy: 0, x: 22, y: 28, l: 'Research Models' },
    { qx: 1, qy: 0, x: 78, y: 22, l: 'GPT-4', hot: true },
    { qx: 1, qy: 0, x: 68, y: 38, l: 'Claude', hot: true },
    { qx: 0, qy: 1, x: 28, y: 72, l: 'GPT-3.5' },
    { qx: 1, qy: 1, x: 72, y: 78, l: 'Sonnet' },
    { qx: 1, qy: 1, x: 82, y: 62, l: 'Gemini' },
  ];
  return (
    <SubSec name="C8 · 2×2 Matrix · Matrix" tag="POSITIONING / QUADRANTS">
      <Stage pattern="grid" label="● B-ROLL · STRUCT" labelR="08.C8">
        <div style={{ position: 'absolute', inset: '8% 8% 8% 8%' }}>
          {/* axes */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--line-2)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--line-2)' }} />
          </div>
          {/* quadrant labels */}
          <div className="meta" style={{ position: 'absolute', top: 8, left: 16, color: 'var(--fg-3)' }}>LOW COST · LOW QUALITY</div>
          <div className="meta" style={{ position: 'absolute', top: 8, right: 16, color: 'var(--accent)' }}>★ HIGH COST · HIGH QUALITY</div>
          <div className="meta" style={{ position: 'absolute', bottom: 8, left: 16, color: 'var(--fg-3)' }}>SWEET SPOT (TARGET)</div>
          <div className="meta" style={{ position: 'absolute', bottom: 8, right: 16, color: 'var(--fg-3)' }}>OVERSPEND</div>
          {/* axis labels */}
          <div className="mono" style={{ position: 'absolute', left: '-3%', top: '50%', transform: 'rotate(-90deg) translateX(50%)', fontSize: 14, color: 'var(--fg-2)' }}>↑ QUALITY</div>
          <div className="mono" style={{ position: 'absolute', right: '46%', bottom: '-6%', fontSize: 14, color: 'var(--fg-2)' }}>COST →</div>
          {/* dots */}
          {items.map((it, i) => (
            <div key={i} style={{ position: 'absolute', left: `${it.x}%`, top: `${it.y}%`, transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: it.hot ? 18 : 12, height: it.hot ? 18 : 12, borderRadius: '50%', background: it.hot ? 'var(--accent)' : 'rgba(255,255,255,.22)', border: '1.5px solid', borderColor: it.hot ? 'var(--accent)' : 'var(--fg-2)' }} />
              <span className="cn" style={{ fontSize: 16, fontWeight: it.hot ? 800 : 500, color: it.hot ? 'var(--accent)' : 'var(--fg-2)' }}>{it.l}</span>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXES', v: 'Cross hairlines · quadrant names in corners' },
        { k: 'POINT', v: 'Color block + label · highlighted items accent + 800' },
        { k: 'STAR', v: '★ marker in ideal quadrant corner' },
      ]} />
    </SubSec>
  );
}

/* ── C9 · Venn Diagram ── */
function VennDiagram() {
  return (
    <SubSec name="C9 · Venn Diagram" tag="INTERSECTION / UNION">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C9">
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>AI ENGINEER · SKILL OVERLAP</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>The triple intersection defines "AI Engineer"</div>
        </div>
        <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <circle cx="500" cy="340" r="200" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx="700" cy="340" r="200" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
          <circle cx="600" cy="180" r="200" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
          <text x="600" y="80" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--fg)">Software Engineering</text>
          <text x="340" y="380" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--accent)">ML Knowledge</text>
          <text x="860" y="380" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--fg)">Product Intuition</text>
          {/* center intersection */}
          <circle cx="600" cy="300" r="6" fill="var(--accent)" />
          <text x="600" y="290" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="12" letterSpacing="0.16em" fill="var(--accent)">★ INTERSECTION</text>
          <text x="600" y="330" textAnchor="middle" fontFamily="var(--f-cn)" fontSize="20" fontWeight="800" fill="var(--fg)">AI Engineer</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'CIRCLE', v: 'Semi-transparent fill · hairline stroke' },
        { k: 'HIGHLIGHT', v: 'Primary circle accent 18% · others white 6%' },
        { k: 'INTERSECT', v: 'Intersection center ★ + noun (visual focal point)' },
      ]} />
    </SubSec>
  );
}

/* ── C10 · Layered Stack ── */
function LayeredStack() {
  const layers = [
    { l: 'L7 · UI',       sub: 'React · Vue', },
    { l: 'L6 · API',      sub: 'REST · GraphQL · WS' },
    { l: 'L5 · Business', sub: 'Orchestration / Agent / Workflow', hot: true },
    { l: 'L4 · Model',    sub: 'LLM · Vision · Audio', hot: true },
    { l: 'L3 · Data',     sub: 'Vector / Cache / DB' },
    { l: 'L2 · Compute',  sub: 'GPU · CPU · K8s' },
    { l: 'L1 · Hardware', sub: 'H100 / TPU / Network' },
  ];
  return (
    <SubSec name="C10 · Layered Stack" tag="ARCHITECTURE LAYERS">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C10">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>AI APP · 7-LAYER STACK</div>
        </div>
        <div style={{ position: 'absolute', inset: '18% 10% 6% 10%', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {layers.map((L, i) => (
            <div key={i} style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '180px 1fr 200px',
              alignItems: 'center',
              padding: '0 28px',
              background: L.hot ? 'var(--bg-card)' : 'transparent',
              border: '1px solid',
              borderColor: L.hot ? 'var(--accent)' : 'var(--line)',
              borderRadius: 6,
            }}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.16em', color: L.hot ? 'var(--accent)' : 'var(--fg-3)' }}>{L.l}</div>
              <div className="cn" style={{ fontSize: 22, fontWeight: 800, color: L.hot ? 'var(--fg)' : 'var(--fg-2)' }}>{L.sub}</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', color: 'var(--fg-3)', textAlign: 'right' }}>{L.hot ? '★ FOCUS' : ''}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'STACK', v: 'Top-narrow / bottom-wide visual illusion · equal height is more stable' },
        { k: 'L LABEL', v: 'Left mono · descending top to bottom' },
        { k: 'FOCUS', v: 'Current discussion layer · accent border' },
      ]} />
    </SubSec>
  );
}

/* ── C11 · Hub & Spoke ── */
function HubSpoke() {
  const spokes = [
    { angle: 0,    l: 'GitHub', s: 'CODE' },
    { angle: 60,   l: 'Slack', s: 'COMM' },
    { angle: 120,  l: 'Notion', s: 'DOCS', hot: true },
    { angle: 180,  l: 'Calendar', s: 'TIME' },
    { angle: 240,  l: 'Linear', s: 'TASK', hot: true },
    { angle: 300,  l: 'Email', s: 'INBOX' },
  ];
  const cx = 700, cy = 320, r = 240;
  return (
    <SubSec name="C11 · Hub & Spoke" tag="CENTRALIZED SYSTEM">
      <Stage pattern="dot" label="● B-ROLL · STRUCT" labelR="08.C11">
        <svg viewBox="0 0 1400 640" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {spokes.map((s, i) => {
            const x = cx + r * Math.cos(s.angle * Math.PI / 180);
            const y = cy + r * Math.sin(s.angle * Math.PI / 180);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={x} y2={y} stroke={s.hot ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1.5" strokeDasharray={s.hot ? undefined : '4 4'} />
                <FNode x={x - 100} y={y - 36} w={200} h={72} label={s.l} sub={s.s} hot={s.hot} />
              </g>
            );
          })}
          {/* hub */}
          <circle cx={cx} cy={cy} r="80" fill="var(--accent)" />
          <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" letterSpacing="0.2em" fill="rgba(0,0,0,.55)">HUB</text>
          <text x={cx} y={cy + 24} textAnchor="middle" fontFamily="var(--f-cn)" fontSize="22" fontWeight="800" fill="var(--bg)">AI Agent</text>
        </svg>
      </Stage>
      <Params rows={[
        { k: 'HUB', v: 'Central solid accent circle 80px' },
        { k: 'SPOKE', v: 'Six directions · primary dashed + highlighted solid' },
        { k: 'RULE', v: 'Hub always at visual center' },
      ]} />
    </SubSec>
  );
}

/* ── C12 · Grid Map ── */
function GridMap() {
  // 8x5 cluster grid with active/idle/error states
  const cols = 12, rows = 6;
  const cells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const seed = (r * 7 + c * 13) % 11;
    let state = 'idle';
    if (seed < 5) state = 'active';
    else if (seed === 7) state = 'error';
    cells.push({ r, c, state });
  }
  const colorMap = { active: 'var(--accent)', idle: 'rgba(255,255,255,.16)', error: 'var(--red)' };
  return (
    <SubSec name="C12 · Grid Map" tag="CLUSTER TOPOLOGY">
      <Stage pattern="grid" label="● B-ROLL · STRUCT" labelR="08.C12">
        <div style={{ position: 'absolute', top: '6%', left: '6%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>GPU CLUSTER · 72 NODES</div>
          <div className="cn" style={{ fontSize: 26, fontWeight: 800, marginTop: 4 }}>Real-Time Topology View</div>
        </div>
        <div style={{ position: 'absolute', top: '6%', right: '6%', display: 'flex', gap: 18 }}>
          {[{ s: 'ACTIVE', c: colorMap.active, n: 32 }, { s: 'IDLE', c: colorMap.idle, n: 38 }, { s: 'ERROR', c: colorMap.error, n: 2 }].map(L => (
            <div key={L.s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 12, height: 12, background: L.c }} />
              <span className="mono" style={{ fontSize: 13, color: 'var(--fg-2)' }}>{L.s} · {L.n}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', inset: '30% 6% 8% 6%', display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`, gap: 8 }}>
          {cells.map((cell, i) => (
            <div key={i} style={{
              background: colorMap[cell.state],
              borderRadius: 2,
              animation: cell.state === 'active' ? 'pulse 2.4s ease-in-out infinite' : undefined,
              animationDelay: `${(cell.r + cell.c) * 0.08}s`,
            }} />
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'GRID', v: '12×6 cells · 8px gap' },
        { k: 'STATE', v: 'Color mapping: active accent · idle 16% white · error red' },
        { k: 'ANIM', v: 'Active cells pulse · staggered delay' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { Structures2Section });
