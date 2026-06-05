/* ================================================================
   sections/broll-hero.jsx — 04 · B-roll · Heavy Hit (v3.1 editorial upgrade)
   ================================================================ */

function HeroSection() {
  return (
    <Section id="hero" num="04" title="B-roll · Heavy Hit"
      desc="Full-screen <b>heavy hit</b> layout — creates rhythmic contrast between B-roll segments. <em>Rare · no stacking</em>; 2–3 uses per video is enough.">
      <BigType /><BigNumber /><PullQuote /><FlashCard />
    </Section>
  );
}

/* Shared: corner crosshairs */
function Crosses({ accent = false }) {
  const cls = accent ? 'cross cross--accent' : 'cross';
  return (
    <>
      <span className={`${cls} cross--tl`} />
      <span className={`${cls} cross--tr`} />
      <span className={`${cls} cross--bl`} />
      <span className={`${cls} cross--br`} />
    </>
  );
}

/* ============== A · Big Type Poster ============== */
function BigType() {
  return (
    <SubSec name="A · Big Type Poster · Big Type" tag="TYPOGRAPHIC POSTER">
      <Stage pattern="dot" label="● B-ROLL · CHAPTER" labelR="04.A">
        {/* top-left: chapter index */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>CHAPTER</span>
          <span className="mono" style={{ fontSize: 72, fontWeight: 800, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.04em' }}>03</span>
        </div>
        {/* top-right: guide rule */}
        <div style={{ position: 'absolute', top: '8%', right: '6%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>CONTEXT IS EVERYTHING</span>
          <span style={{ width: 60, height: 1, background: 'var(--accent)' }} />
        </div>
        {/* headline */}
        <div style={{ position: 'absolute', inset: '32% 6% 18%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="cn" style={{ fontSize: 'clamp(64px, 9vw, 124px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.92 }}>
            Models aren't short on<br />
            <span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>brains,</span>
            they're short on material.
          </div>
        </div>
        {/* footer: tick marks + metadata */}
        <div style={{ position: 'absolute', bottom: '8%', left: '6%', right: '6%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className="tick-rule" style={{ color: 'var(--fg-3)' }}>
            {Array.from({ length: 26 }).map((_, i) => <i key={i} />)}
          </div>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>01 / 12 · 03:42</span>
        </div>
      </Stage>
      <Params rows={[
        { k: 'SIZE @4K', v: '180-220px · 800' },
        { k: 'ACCENT',   v: 'One word in Instrument Serif italic' },
        { k: 'CHROME',   v: 'Top-left idx + top-right rule + bottom tick marks + timecode' },
        { k: 'ENTER',    v: 'Headline 1100ms · corner labels 280ms delay' },
      ]} />
    </SubSec>
  );
}

/* ============== B · Big Stat ============== */
function BigNumber() {
  return (
    <SubSec name="B · Big Stat" tag="STATISTIC HERO">
      <Stage pattern="graph" label="● B-ROLL · STAT" labelR="04.B">
        {/* top-left eyebrow */}
        <div style={{ position: 'absolute', top: '8%', left: '6%' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● FINDING / 2024Q4</div>
          <div className="serif" style={{ fontSize: 26, color: 'var(--fg-2)', fontStyle: 'italic', marginTop: 6 }}>State of AI Survey</div>
        </div>
        {/* top-right source */}
        <div style={{ position: 'absolute', top: '8%', right: '6%', textAlign: 'right' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>N = 2,840 · 12 COUNTRIES</div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)', marginTop: 4 }}>METHOD · STRATIFIED · ±2.1%</div>
        </div>
        {/* hero number */}
        <div style={{ position: 'absolute', inset: '24% 6% 24%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div className="big-num" style={{ fontSize: 'clamp(180px, 28vw, 360px)', color: 'var(--accent)' }}>
            87<span style={{ fontSize: '0.32em', color: 'var(--fg)', verticalAlign: '0.6em' }}>%</span>
          </div>
        </div>
        {/* right caption */}
        <div style={{ position: 'absolute', right: '6%', top: '38%', bottom: '24%', width: '38%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ width: 32, height: 2, background: 'var(--accent)', marginBottom: 14 }} />
          <div className="cn" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            of developers expect <span style={{ color: 'var(--accent)' }}>prompt engineering</span> to be replaced by <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>context engineering</span>
          </div>
        </div>
        {/* bottom dashed connector */}
        <div style={{ position: 'absolute', bottom: '10%', left: '6%', right: '6%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>STATUS · LIVE</span>
          <span style={{ flex: 1, height: 0, borderTop: '1px dashed var(--line-2)' }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>FIG. 04.B</span>
        </div>
      </Stage>
      <Params rows={[
        { k: 'NUMBER',  v: '280-360px · mono · accent · tabular-nums' },
        { k: 'UNIT',    v: '0.32em · fg · shift up 0.6em' },
        { k: 'CAPTION', v: '28 / 800 · 32×2 accent rule' },
        { k: 'CHROME',  v: 'left finding · right method · footer dashed' },
      ]} />
    </SubSec>
  );
}

/* ============== C · Pull Quote ============== */
function PullQuote() {
  return (
    <SubSec name="C · Pull Quote" tag="EDITORIAL MOMENT">
      <Stage label="● B-ROLL · QUOTE" labelR="04.C">
        {/* top-left category */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 18, height: 1, background: 'var(--accent)' }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>ON CRAFT</span>
        </div>
        {/* oversized left quote mark (decorative) */}
        <div className="serif" style={{ position: 'absolute', top: '14%', left: '6%', fontSize: 280, fontStyle: 'italic', color: 'var(--accent)', opacity: 0.18, lineHeight: 0.7, fontWeight: 400 }}>"</div>
        {/* quote body */}
        <div style={{ position: 'absolute', inset: '24% 10% 22% 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="serif" style={{ fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.12, letterSpacing: '-0.01em', color: 'var(--fg)', fontStyle: 'italic', fontWeight: 400 }}>
            The model is a <span style={{ color: 'var(--accent)' }}>compiler,</span>
            <br />not an oracle.
            <br /><span style={{ color: 'var(--fg-2)' }}>You still own the spec.</span>
          </div>
        </div>
        {/* byline */}
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%', display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ width: 36, height: 1, background: 'var(--fg-3)' }} />
          <div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--fg)' }}>ANDREJ KARPATHY</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)', marginTop: 4 }}>FORMER TESLA AI · 2023</div>
          </div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'FONT',   v: 'Instrument Serif italic · 76px' },
        { k: 'ACCENT', v: 'One keyword in accent · one line muted fg-2' },
        { k: 'MARK',   v: 'Oversized left quote · opacity 0.18 decorative' },
        { k: 'BYLINE', v: 'mono caps + 36px rule' },
      ]} />
    </SubSec>
  );
}

/* ============== D · Inversion Flash ============== */
function FlashCard() {
  const [flip, setFlip] = React.useState(false);
  React.useEffect(() => {
    const id = setInterval(() => setFlip(f => !f), 1400);
    return () => clearInterval(id);
  }, []);
  const inverted = flip;
  return (
    <SubSec name="D · Inversion Flash" tag="CUT-IN TRANSITION">
      <Stage label="● B-ROLL · FLASH" labelR="04.D">
        <div style={{ position: 'absolute', inset: 0, background: inverted ? 'var(--bg-flash)' : 'var(--bg)', transition: 'background 200ms steps(1)' }}>
          {/* corner crosses */}
          <span className="cross cross--tl" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', top: '5%', left: '5%' }} />
          <span className="cross cross--tr" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', top: '5%', right: '5%' }} />
          <span className="cross cross--bl" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', bottom: '5%', left: '5%' }} />
          <span className="cross cross--br" style={{ color: inverted ? 'rgba(0,0,0,0.4)' : 'var(--line)', bottom: '5%', right: '5%' }} />
          {/* top-left label */}
          <div className="mono" style={{ position: 'absolute', top: '8%', left: '8%', fontSize: 11, letterSpacing: '0.2em', color: inverted ? 'var(--bg)' : 'var(--fg-3)' }}>● BEAT · STOP</div>
          {/* headline */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
            <span className="cn" style={{ fontSize: 'clamp(56px, 9vw, 112px)', fontWeight: 800, color: inverted ? 'var(--bg)' : 'var(--fg)', letterSpacing: '-0.03em' }}>
              Hold on.
            </span>
          </div>
          {/* bottom-right timecode */}
          <div className="mono" style={{ position: 'absolute', bottom: '8%', right: '8%', fontSize: 11, letterSpacing: '0.2em', color: inverted ? 'var(--bg)' : 'var(--fg-3)' }}>06 FR · 240 MS</div>
        </div>
      </Stage>
      <Params rows={[
        { k: 'USE',      v: 'Section transitions · rhetorical pauses · before posing a question' },
        { k: 'DURATION', v: '6–12 frames (200–400ms) · no longer than 1s' },
        { k: 'SWAP',     v: 'bg ↔ bg-flash · steps(1) hard cut' },
        { k: 'RULE',     v: '<b>≤ 2 per video</b> · never back-to-back' },
      ]} />
    </SubSec>
  );
}

Object.assign(window, { HeroSection });
