/* ================================================================
   sections/broll-structure.jsx — 02 · Structure Diagrams
   ================================================================ */

function StructureSection() {
  return (
    <Section id="structure" num="02" title="B-roll · Structure Diagrams"
      desc="Use when explaining <b>flow · hierarchy · convergence · containment</b> relationships. Every chart follows the same rule: <em>one hairline · one mono label · one accent color</em>.">
      <FlowChart />
      <Pyramid />
      <Funnel />
      <Concentric />
      <NodeGraph />
      <Spectrum />
    </Section>
  );
}

/* ---------- Flow Chart ---------- */
function FlowChart() {
  const [hot, setHot] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setHot(h => (h + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const steps = [
    { en: 'COLLECT', cn: 'Gather Evidence' },
    { en: 'ANALYZE', cn: 'Analyze Patterns' },
    { en: 'LOCATE',  cn: 'Locate Root Cause' },
    { en: 'VERIFY',  cn: 'Verify Fix' },
  ];
  return (
    <SubSec name="Flow Chart" tag="LINEAR PROCESS">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.A">
        <div style={{
          position: 'absolute', inset: '20% 6%',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          alignItems: 'center',
        }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{
                padding: '28px 32px',
                background: i === hot ? 'var(--bg-card)' : 'transparent',
                border: i === hot ? '1px solid var(--accent)' : '1px solid var(--line)',
                borderRadius: 8,
                transition: 'all 400ms var(--ease-out)',
                opacity: i === hot ? 1 : i < hot ? 1 : 0.5,
              }}>
                <div className="meta" style={{ marginBottom: 14, color: i === hot ? 'var(--accent)' : 'var(--fg-3)' }}>
                  {String(i + 1).padStart(2, '0')} · {s.en}
                </div>
                <div className="cn" style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.005em' }}>{s.cn}</div>
              </div>
              {i < 3 && (
                <div style={{ height: 1, background: i < hot ? 'var(--accent)' : 'var(--line-2)', width: '100%', position: 'relative', transition: 'background 400ms' }}>
                  <div style={{ position: 'absolute', right: -1, top: -3, width: 0, height: 0, borderLeft: '7px solid', borderLeftColor: i < hot ? 'var(--accent)' : 'var(--line-3)', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', transition: 'border-left-color 400ms' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'NODE', v: 'hairline → solid accent (hot)' },
        { k: 'ARROW', v: '1px line + 7px triangular arrow' },
        { k: 'RHYTHM', v: '900ms / step' },
        { k: 'PAST', v: 'line / arrow turn accent · nodes normal' },
        { k: 'FUTURE', v: 'opacity 0.5' },
      ]} />
    </SubSec>
  );
}

/* ---------- Pyramid ---------- */
function Pyramid() {
  const layers = [
    { w: '32%', en: 'PEAK',   cn: 'Top · Strategy',  sub: 'Few, decisive' },
    { w: '52%', en: 'BRIDGE', cn: 'Middle · Methods', sub: 'Reusable patterns' },
    { w: '72%', en: 'BASE',   cn: 'Base · Execution', sub: 'High volume / repetitive' },
  ];
  return (
    <SubSec name="Pyramid" tag="HIERARCHY">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.B">
        <div style={{ position: 'absolute', inset: '12% 8%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {layers.map((l, i) => (
            <div key={i} style={{
              width: l.w,
              border: '1px solid var(--line-2)',
              padding: '28px 32px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'var(--bg-card)',
              borderRadius: 4,
            }}>
              <div>
                <div className="meta" style={{ marginBottom: 4, color: i === 0 ? 'var(--accent)' : 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')} · {l.en}</div>
                <div className="cn" style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.005em' }}>{l.cn}</div>
              </div>
              <div className="cn" style={{ fontSize: 40, color: 'var(--fg-3)' }}>{l.sub}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'WIDTHS', v: '32% / 52% / 72% — golden ratio' },
        { k: 'GAP', v: '8px · no overlap' },
        { k: 'TOP HIGHLIGHT', v: 'top layer mono label accent · rest fg-3' },
      ]} />
    </SubSec>
  );
}

/* ---------- Funnel ---------- */
function Funnel() {
  const stages = [
    { w: '80%', en: 'AWARE',    cn: 'Awareness',   stat: '10,000' },
    { w: '58%', en: 'TRY',      cn: 'Trial',       stat: '1,800' },
    { w: '40%', en: 'COMMIT',   cn: 'Retention',   stat: '420' },
    { w: '22%', en: 'EVANGELIZE', cn: 'Advocacy',  stat: '38' },
  ];
  return (
    <SubSec name="Funnel" tag="CONVERSION">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.C">
        <div style={{ position: 'absolute', inset: '10% 8%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
          {stages.map((s, i) => (
            <div key={i} style={{
              width: s.w,
              border: '1px solid var(--line-2)',
              background: i === stages.length - 1 ? 'var(--bg-card)' : 'transparent',
              borderColor: i === stages.length - 1 ? 'var(--accent)' : 'var(--line-2)',
              padding: '28px 32px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderRadius: 4,
            }}>
              <div>
                <div className="meta" style={{ color: i === stages.length - 1 ? 'var(--accent)' : 'var(--fg-3)' }}>{s.en}</div>
                <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>{s.cn}</div>
              </div>
              <div className="mono" style={{ fontSize: 40, fontWeight: 600, color: i === stages.length - 1 ? 'var(--accent)' : 'var(--fg-2)' }}>{s.stat}</div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'WIDTHS', v: '80 → 58 → 40 → 22%' },
        { k: 'BOTTOM', v: 'accent border · final retention' },
        { k: 'DATA COL', v: 'right-aligned mono numbers' },
      ]} />
    </SubSec>
  );
}

/* ---------- Concentric Circles ---------- */
function Concentric() {
  const rings = [
    { r: 240, en: 'BUSINESS',   cn: 'Business' },
    { r: 180, en: 'PRODUCT',    cn: 'Product' },
    { r: 120, en: 'EXPERIENCE', cn: 'Experience' },
    { r:  60, en: 'CORE',       cn: 'Core' },
  ];
  return (
    <SubSec name="Concentric" tag="NESTED SCOPE">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.D">
        <svg viewBox="-300 -200 600 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {rings.map((r, i) => (
            <g key={i}>
              <circle cx="0" cy="0" r={r.r} fill={i === rings.length - 1 ? 'var(--bg-card)' : 'transparent'} stroke={i === rings.length - 1 ? 'var(--accent)' : 'var(--line-2)'} strokeWidth="1" />
              <text x={r.r - 8} y="-4" textAnchor="end" fontSize="10" fontFamily="var(--f-mono)" letterSpacing="2" fill={i === rings.length - 1 ? 'var(--accent)' : 'var(--fg-3)'}>{r.en}</text>
              <text x={r.r - 8} y="12" textAnchor="end" fontSize="13" fontWeight="700" fontFamily="var(--f-cn)" fill="var(--fg-2)">{r.cn}</text>
            </g>
          ))}
        </svg>
      </Stage>
      <Params rows={[
        { k: 'RADII', v: '60 · 120 · 180 · 240' },
        { k: 'LABELS', v: 'top of ring · right-aligned · mono + label dual line' },
        { k: 'CORE', v: 'fill bg-card + accent stroke' },
      ]} />
    </SubSec>
  );
}

/* ---------- Node Graph ---------- */
function NodeGraph() {
  const nodes = [
    { id: 'input',  x: 12, y: 50, en: 'INPUT',  cn: 'Input',  hot: false },
    { id: 'router', x: 36, y: 50, en: 'ROUTER', cn: 'Route',  hot: true },
    { id: 'a',      x: 64, y: 28, en: 'TOOL A', cn: 'Search', hot: false },
    { id: 'b',      x: 64, y: 72, en: 'TOOL B', cn: 'Generate', hot: false },
    { id: 'out',    x: 88, y: 50, en: 'OUTPUT', cn: 'Output', hot: false },
  ];
  const edges = [
    ['input', 'router'], ['router', 'a'], ['router', 'b'], ['a', 'out'], ['b', 'out'],
  ];
  const find = (id) => nodes.find(n => n.id === id);
  return (
    <SubSec name="Node Graph" tag="ROUTING / WORKFLOW">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.E">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {edges.map(([a, b], i) => {
            const A = find(a), B = find(b);
            return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--line-2)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />;
          })}
        </svg>
        {nodes.map(n => (
          <div key={n.id} style={{
            position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -50%)',
            background: n.hot ? 'var(--bg-card)' : 'var(--bg)',
            border: n.hot ? '1px solid var(--accent)' : '1px solid var(--line-2)',
            borderRadius: 6, padding: '28px 32px', minWidth: 86, textAlign: 'center',
          }}>
            <div className="meta" style={{ color: n.hot ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 2 }}>{n.en}</div>
            <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>{n.cn}</div>
          </div>
        ))}
      </Stage>
      <Params rows={[
        { k: 'EDGE', v: '1px line-2 · no arrow decoration' },
        { k: 'NODE', v: '6px radius · padding 8/14' },
        { k: 'HOT', v: 'accent stroke + bg-card fill' },
      ]} />
    </SubSec>
  );
}

/* ---------- Spectrum ---------- */
function Spectrum() {
  return (
    <SubSec name="Spectrum" tag="OPPOSITE AXIS">
      <Stage pattern="dot" label="● B-ROLL" labelR="02.F">
        <div style={{ position: 'absolute', inset: '32% 8%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
            <div>
              <div className="meta" style={{ marginBottom: 4 }}>← LEFT POLE</div>
              <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>Rule-Driven</div>
            </div>
            <div className="meta">SPECTRUM</div>
            <div style={{ textAlign: 'right' }}>
              <div className="meta" style={{ marginBottom: 4 }}>RIGHT POLE →</div>
              <div className="cn" style={{ fontSize: 44, fontWeight: 800 }}>Agent-Driven</div>
            </div>
          </div>
          <div style={{ position: 'relative', height: 1, background: 'var(--line-2)' }}>
            <div style={{ position: 'absolute', left: 0, top: -3, width: 7, height: 7, background: 'var(--fg-2)', borderRadius: '50%', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', right: 0, top: -3, width: 7, height: 7, background: 'var(--fg-2)', borderRadius: '50%', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', left: '68%', top: -7, width: 14, height: 14, background: 'var(--accent)', borderRadius: '50%' }} />
          </div>
          <div style={{ position: 'relative', height: 24, marginTop: 12 }}>
            <div className="meta" style={{ position: 'absolute', left: '68%', transform: 'translateX(-50%)', color: 'var(--accent)' }}>Current · CURRENT</div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '1px line-2 · full width' },
        { k: 'POLE DOTS', v: '7px circle · fg-2' },
        { k: 'MARKER', v: '14px circle · accent' },
        { k: 'USE', v: 'show opposition / position on continuum' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { StructureSection });
