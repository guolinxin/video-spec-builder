/* ================================================================
   sections/broll-abstract.jsx — 05 · B-roll · Abstract Fallback
   When explaining AI, most concepts lack concrete icons — this is
   the universal layout for conveying meaning through form
   ================================================================ */

function AbstractSection() {
  return (
    <Section id="abstract" num="05" title="B-roll · Abstract Fallback"
      desc="A universal layout when a concept has <em>no concrete icon</em> — <b>analogy</b>, <b>black box</b>, <b>equation</b>, <b>spectrum</b>, <b>iceberg</b>, <b>versus</b>, <b>placeholder</b>. This is the most common category when explaining AI, because <em>abstract concepts far outnumber concrete icons</em>.">
      <Analogy />
      <BlackBox />
      <Equation />
      <AbstractSpectrum />
      <Iceberg />
      <Versus />
      <Placeholder />
    </Section>
  );
}

/* ---------- A · Analogy ---------- */
function Analogy() {
  return (
    <SubSec name="Analogy Frame · Analogy" tag="UNFAMILIAR ≈ FAMILIAR">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.A">
        <div style={{ position: 'absolute', inset: '16% 6%', display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', gap: 0 }}>
          <AnalogyCard side="Unfamiliar" tone="accent" big="RAG" sub="Retrieval-Augmented Generation · model + external knowledge base" />
          <div style={{ textAlign: 'center' }}>
            <div className="serif" style={{ fontSize: 76, color: 'var(--accent)', lineHeight: 1 }}>≈</div>
            <div className="meta" style={{ marginTop: 6 }}>is like</div>
          </div>
          <AnalogyCard side="Familiar" big="Open-book exam" sub="No memorization · look it up · compose answers on the spot" />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: 'Left = unfamiliar · Right = familiar' },
        { k: 'CONNECTOR', v: '≈ · Instrument Serif italic · 76px · accent' },
        { k: 'SUB-LABEL', v: '"is like" below ≈ as a semantic cue' },
        { k: 'CARDS', v: 'Fully symmetric hairline cards · left card accent label for contrast' },
      ]} />
    </SubSec>
  );
}
function AnalogyCard({ side, tone, big, sub }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, padding: '36px 36px', position: 'relative' }}>
      <Bracket size={18} color="var(--line-3)" thick={1} />
      <div className="meta" style={{ color: tone === 'accent' ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 18 }}>{side}</div>
      <div className="cn" style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.018em', lineHeight: 1, marginBottom: 14 }}>{big}</div>
      <div className="cn" style={{ fontSize: 26, color: 'var(--fg-2)', lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

/* ---------- B · Black Box ---------- */
function BlackBox() {
  return (
    <SubSec name="Black Box" tag="INPUT → ? → OUTPUT">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.B">
        <div style={{ position: 'absolute', inset: '24% 6%', display: 'grid', gridTemplateColumns: '1fr 56px 1.5fr 56px 1fr', alignItems: 'center', gap: 0 }}>
          <Slot label="INPUT" cn="Prompt" />
          <Arrow />
          <div style={{ position: 'relative', background: 'var(--bg-card)', border: '1px dashed var(--accent)', borderRadius: 8, padding: '36px 32px', textAlign: 'center' }}>
            <Bracket size={14} color="var(--accent)" thick={1} />
            <div className="meta" style={{ color: 'var(--accent)', marginBottom: 14 }}>BLACK BOX</div>
            <div className="big-num" style={{ fontSize: 84, color: 'var(--accent)', lineHeight: 0.85 }}>?</div>
            <div className="cn" style={{ fontSize: 26, color: 'var(--fg-2)', marginTop: 14 }}>175B parameters · not interpretable</div>
          </div>
          <Arrow />
          <Slot label="OUTPUT" cn="Response" />
        </div>
      </Stage>
      <Params rows={[
        { k: 'BOX', v: 'dashed accent border (distinct from hairline) + corner brackets' },
        { k: '?', v: '84px · big-num · accent' },
        { k: 'USE', v: 'For concepts where the interior is unknowable' },
        { k: 'ARROW', v: 'hairline + sharp triangle · line-3' },
      ]} />
    </SubSec>
  );
}
function Slot({ label, cn }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 8, padding: '30px 32px', textAlign: 'center' }}>
      <div className="meta" style={{ marginBottom: 12 }}>{label}</div>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em' }}>{cn}</div>
    </div>
  );
}
function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ height: 1, flex: 1, background: 'var(--line-3)' }} />
      <div style={{ width: 0, height: 0, borderLeft: '8px solid var(--line-3)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
    </div>
  );
}

/* ---------- C · Equation ---------- */
function Equation() {
  return (
    <SubSec name="Concept Equation" tag="A + B = C">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.C">
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '0 6%' }}>
          <EqBox big="Model" sub="reasoning" />
          <EqOp ch="+" />
          <EqBox big="Context" sub="context" accent />
          <EqOp ch="=" />
          <EqBox big="Reliable answer" sub="output" />
        </div>
        {/* Top annotation line for a textbook-equation feel */}
        <div style={{ position: 'absolute', top: '22%', left: '6%', right: '6%', display: 'flex', alignItems: 'center' }}>
          <span className="meta" style={{ color: 'var(--fg-3)' }}>EQ · Concept composition</span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)', marginLeft: 12 }} />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: 'Horizontally centered · evenly spaced' },
        { k: 'OPERATOR', v: 'serif italic · 56px · accent' },
        { k: 'EMPHASIS', v: 'Key term accent border' },
        { k: 'HEADER', v: 'Top EQ · hairline annotation bar (textbook feel)' },
      ]} />
    </SubSec>
  );
}
function EqBox({ big, sub, accent }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: `1px solid ${accent ? 'var(--accent)' : 'var(--line)'}`, borderRadius: 8, padding: '30px 36px', textAlign: 'center', minWidth: 160 }}>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8 }}>{big}</div>
      <div className="meta" style={{ color: accent ? 'var(--accent)' : 'var(--fg-3)' }}>{sub}</div>
    </div>
  );
}
function EqOp({ ch }) {
  return <div className="serif" style={{ fontSize: 56, color: 'var(--accent)', lineHeight: 1 }}>{ch}</div>;
}

/* ---------- D · Spectrum ---------- */
function AbstractSpectrum() {
  return (
    <SubSec name="Spectrum" tag="ONE AXIS · TWO POLES">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.D">
        <div style={{ position: 'absolute', inset: '24% 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
          {/* Left and right pole labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div className="meta" style={{ marginBottom: 6 }}>Left pole</div>
              <div className="cn" style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.012em' }}>Pure memorization</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="meta" style={{ marginBottom: 6, color: 'var(--accent)' }}>Right pole</div>
              <div className="cn" style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.012em' }}>Pure retrieval</div>
            </div>
          </div>
          {/* Axis */}
          <div style={{ position: 'relative', height: 24, display: 'flex', alignItems: 'center' }}>
            {/* ticks */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between' }}>
              {Array.from({ length: 11 }).map((_, i) => (
                <span key={i} style={{ width: 1, height: i % 5 === 0 ? 12 : 6, background: 'var(--line-3)', alignSelf: 'flex-end' }} />
              ))}
            </div>
            {/* main rule */}
            <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'var(--fg-3)', bottom: 0 }} />
            {/* marker */}
            <div style={{ position: 'absolute', left: '68%', bottom: -8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <span className="meta" style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>RAG · 0.68</span>
              <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid var(--accent)' }} />
            </div>
          </div>
          {/* legend */}
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-3)', marginTop: 28 }}>
            <span className="cn" style={{ fontSize: 18 }}>fine-tuning</span>
            <span className="cn" style={{ fontSize: 18 }}>vector search</span>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'AXIS', v: '0 – 1 · 11 ticks · major marks every 5n' },
        { k: 'MARKER', v: 'Inverted triangle · accent · mono label above' },
        { k: 'POLES', v: 'Left fg · right accent meta · emphasize right pole' },
        { k: 'USE', v: 'Concepts like "where X falls between A and B"' },
      ]} />
    </SubSec>
  );
}

/* ---------- E · Iceberg ---------- */
function Iceberg() {
  return (
    <SubSec name="Iceberg" tag="VISIBLE / HIDDEN">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.E">
        <div style={{ position: 'absolute', inset: '12% 8%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* Left SVG iceberg */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 200 200" width="100%" style={{ maxWidth: 320 }}>
              {/* Waterline */}
              <line x1="0" y1="80" x2="200" y2="80" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" />
              <text x="2" y="76" fontSize="6" fill="var(--accent)" fontFamily="var(--f-mono)" letterSpacing="1">— WATERLINE</text>
              {/* Upper portion (visible) */}
              <polygon points="100,30 130,80 70,80" fill="none" stroke="var(--fg)" strokeWidth="1.2" />
              {/* Lower portion (hidden) */}
              <polygon points="55,80 145,80 165,160 130,185 70,185 35,160" fill="rgba(255,255,255,0.04)" stroke="var(--fg-3)" strokeWidth="1" strokeDasharray="2 3" />
              {/* Leader lines */}
              <line x1="120" y1="55" x2="185" y2="40" stroke="var(--fg-3)" strokeWidth="0.6" />
              <line x1="135" y1="140" x2="190" y2="155" stroke="var(--fg-3)" strokeWidth="0.6" />
              <circle cx="120" cy="55" r="1.2" fill="var(--fg)" />
              <circle cx="135" cy="140" r="1.2" fill="var(--fg-3)" />
            </svg>
          </div>
          {/* Right text labels */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            <div>
              <div className="meta" style={{ color: 'var(--accent)', marginBottom: 10 }}>● Visible · 10%</div>
              <div className="cn" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8 }}>Chat interface</div>
              <div className="cn" style={{ fontSize: 22, color: 'var(--fg-2)', lineHeight: 1.5 }}>The input box and responses you see</div>
            </div>
            <div style={{ height: 1, background: 'var(--line)' }} />
            <div>
              <div className="meta" style={{ marginBottom: 10 }}>○ Hidden · 90%</div>
              <div className="cn" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 8, color: 'var(--fg-2)' }}>Weights · training data · RLHF · inference stack</div>
              <div className="cn" style={{ fontSize: 22, color: 'var(--fg-3)', lineHeight: 1.5 }}>What actually determines response quality</div>
            </div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'WATERLINE', v: 'accent dashed line + WATERLINE label' },
        { k: 'ABOVE', v: 'Solid line · 10% label · accent' },
        { k: 'BELOW', v: 'Dashed + light fill · 90% · grayscale' },
        { k: 'USE', v: 'Concepts with a stark visible / hidden ratio' },
      ]} />
    </SubSec>
  );
}

/* ---------- F · Versus ---------- */
function Versus() {
  return (
    <SubSec name="Versus" tag="A vs B · DELTA">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.F">
        <div style={{ position: 'absolute', inset: '14% 8%', display: 'grid', gridTemplateColumns: '1fr 100px 1fr', alignItems: 'stretch', gap: 0 }}>
          <VsCard side="A" big="Pre-training" rows={[
            { k: 'Data', v: 'Massive public corpora' },
            { k: 'Duration', v: 'Months · thousands of GPUs' },
            { k: 'Output', v: 'General-purpose base model' },
          ]} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ height: '100%', width: 1, background: 'var(--line)', position: 'absolute', top: 0 }} />
            <div className="serif" style={{ fontSize: 56, color: 'var(--accent)', background: 'var(--bg)', padding: '4px 12px', position: 'relative', zIndex: 1 }}>vs</div>
          </div>
          <VsCard side="B" accent big="Fine-tuning" rows={[
            { k: 'Data', v: 'Small task-specific datasets' },
            { k: 'Duration', v: 'Hours · single GPU' },
            { k: 'Output', v: 'Specialized variant' },
          ]} />
        </div>
      </Stage>
      <Params rows={[
        { k: 'LAYOUT', v: 'Equal-width columns · center vertical rule + vs serif' },
        { k: 'ROWS', v: 'Same key order · row-aligned (for line-by-line comparison)' },
        { k: 'SIDE LABEL', v: 'Left fg-3 · right accent · A / B' },
        { k: 'USE', v: 'Side-by-side comparison of two approaches or concepts' },
      ]} />
    </SubSec>
  );
}
function VsCard({ side, accent, big, rows }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: `1px solid ${accent ? 'var(--accent)' : 'var(--line)'}`, borderRadius: 8, padding: '28px 32px' }}>
      <div className="meta" style={{ color: accent ? 'var(--accent)' : 'var(--fg-3)', marginBottom: 14 }}>{side}</div>
      <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em', marginBottom: 18 }}>{big}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map(r => (
          <div key={r.k} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 16, alignItems: 'baseline', paddingBottom: 8, borderBottom: '1px solid var(--line)' }}>
            <span className="meta">{r.k}</span>
            <span className="cn" style={{ fontSize: 22, color: 'var(--fg-2)' }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- G · Placeholder ---------- */
function Placeholder() {
  return (
    <SubSec name="Placeholder" tag="WHEN YOU LACK AN ASSET">
      <Stage pattern="dot" label="● B-ROLL" labelR="05.G">
        <div style={{ position: 'absolute', inset: '18% 18%', background: 'transparent', border: '1px solid var(--line-2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 15px)', position: 'relative' }}>
          <Bracket size={20} color="var(--line-3)" thick={1} />
          <div className="meta" style={{ color: 'var(--accent)', marginBottom: 14 }}>[ DROP HERE ]</div>
          <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.012em' }}>GPT-4 screen recording</div>
          <div className="mono" style={{ fontSize: 22, color: 'var(--fg-3)', marginTop: 10 }}>1920 × 1080 · ≤ 8s · prores</div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'BG', v: '45° diagonal stripes (4% white)' },
        { k: 'BORDER', v: '1px line-2 + corner brackets' },
        { k: 'LABEL', v: '[ DROP HERE ] mono caps · accent' },
        { k: 'SPEC', v: 'Dimensions · duration · codec' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { AbstractSection });
