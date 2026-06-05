/* ================================================================
   sections/aroll.jsx — 01 · A-roll on-camera delivery (v3.1 editorial upgrade)
   "Restrained" edition: hairline + type-size cliff + 0 shadow + ornament over decoration
   ================================================================ */

function ARollSection() {
  return (
    <Section
      id="aroll"
      num="01"
      title="A-roll · On-Camera Delivery"
      desc="The three essentials overlaid on camera: <b>subtitle highlights</b>, <b>keyword stickers</b>, and <b>concept cards</b>. <em>Each component does one thing</em> — no stacked decoration, no shadows, no layered cards."
    >
      <SubtitleHighlight />
      <KeywordSticker />
      <ConceptCard />
    </Section>
  );
}

/* ---------- subtitle highlight ---------- */
function SubtitleHighlight() {
  const tokens = ['Let\'s talk about', 'context', 'engineering', 'not', 'prompt', 'magic'];
  const highlighted = [1, 2, 4];
  const [active, setActive] = React.useState(2);
  React.useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % tokens.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <SubSec name="A · Subtitle Highlight" tag="SPOKEN-WORD CAPTIONS">
      <Stage pattern="dot" label="● A-ROLL · LIVE" labelR="01.A">
        {/* top-left: speaker label */}
        <div style={{ position: 'absolute', top: '8%', left: '6%', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="dot-pulse" />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>SPEAKER · LIVE</span>
        </div>
        {/* top-right: timecode */}
        <div className="mono" style={{ position: 'absolute', top: '8%', right: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          00:14:22 · CC ON
        </div>

        {/* subtitle body */}
        <div style={{
          position: 'absolute', left: '8%', right: '8%', bottom: '14%',
          display: 'flex', flexWrap: 'wrap', gap: '0 18px',
          fontSize: 'clamp(28px, 4.4vw, 56px)', fontWeight: 800,
          letterSpacing: '-0.018em', lineHeight: 1.1,
        }}>
          {tokens.map((tk, i) => {
            const isHot = highlighted.includes(i) && i === active;
            const isPast = highlighted.includes(i) && i < active;
            return (
              <span key={i} className="cn" style={{
                color: isHot ? 'var(--accent)' : isPast ? 'var(--fg)' : 'var(--fg-3)',
                position: 'relative',
                transition: 'color 280ms var(--ease-out)',
              }}>
                {tk}
                {isHot && (
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: '-12px',
                    height: 3, background: 'var(--accent)',
                    animation: 'lineIn 280ms var(--ease-out) forwards',
                    transformOrigin: 'left',
                  }} />
                )}
              </span>
            );
          })}
        </div>

        {/* bottom hairline */}
        <div style={{ position: 'absolute', bottom: '8%', left: '8%', right: '8%', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>EN / CN</span>
          <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>3 / 6 WORDS HOT</span>
        </div>

        <style>{`@keyframes lineIn { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
      </Stage>

      <Params rows={[
        { k: 'FONT',     v: 'Noto Sans SC 800 · clamp 28-56px' },
        { k: 'COLOR',    v: 'default fg-3 · spoken accent · past fg' },
        { k: 'ACCENT',   v: '<b>3px underline only</b> · no fill block · scaleX in' },
        { k: 'CHROME',   v: 'left speaker · right timecode · bottom hairline + count' },
        { k: 'POSITION', v: 'bottom 14% · 8% horizontal padding' },
      ]} />
    </SubSec>
  );
}

/* ---------- keyword sticker ---------- */
function KeywordSticker() {
  const items = [
    { txt: 'Context',          en: true,  pos: { top: '20%', left: '8%' },   tilt: -1.5 },
    { txt: 'Not magic',          en: true,  pos: { top: '34%', right: '12%' }, tilt: 1 },
    { txt: '✱ Engineering',    en: true,  pos: { top: '62%', left: '14%' },  tilt: -0.5 },
  ];
  const [shown, setShown] = React.useState([0]);
  React.useEffect(() => {
    const id = setInterval(() => {
      setShown(s => {
        const next = (s[s.length - 1] + 1) % items.length;
        if (s.length >= items.length) return [next];
        return [...s, next];
      });
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <SubSec name="B · Keyword Sticker" tag="POP-IN LABELS">
      <Stage pattern="dot" label="● A-ROLL · STICKER" labelR="01.B">
        {/* top-left eyebrow */}
        <div className="mono" style={{ position: 'absolute', top: '8%', left: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● KEYWORDS · 3</div>

        {items.map((it, i) => {
          if (!shown.includes(i)) return null;
          const isLast = shown[shown.length - 1] === i;
          return (
            <div key={i} className={it.en ? '' : 'cn'} style={{
              position: 'absolute', ...it.pos,
              padding: '14px 22px',
              background: isLast ? 'var(--fg)' : 'var(--bg-card)',
              color: isLast ? 'var(--bg)' : 'var(--fg)',
              border: isLast ? 'none' : '1px solid var(--line-2)',
              fontFamily: it.en ? 'var(--f-sans)' : 'var(--f-cn)',
              fontWeight: it.en ? 600 : 700,
              fontSize: 22, letterSpacing: it.en ? '-0.005em' : '0.01em',
              borderRadius: 6,
              animation: `stickIn 320ms var(--ease-spring) forwards`,
              transform: `rotate(${it.tilt}deg)`,
              transformOrigin: it.pos.left ? 'left center' : 'right center',
            }}>{it.txt}</div>
          );
        })}

        {/* bottom-right: scrollback meta */}
        <div className="mono" style={{ position: 'absolute', bottom: '8%', right: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          DUR · 320ms · SPRING
        </div>

        <style>{`
          @keyframes stickIn {
            from { opacity: 0; transform: scale(0.92) rotate(-1.5deg); }
            to   { opacity: 1; transform: scale(1) rotate(0); }
          }
        `}</style>
      </Stage>

      <Params rows={[
        { k: 'BG',       v: 'inverted fg / card bg-card · pick one' },
        { k: 'BORDER',   v: '1px line-2 · or none' },
        { k: 'PADDING',  v: '14 / 22px' },
        { k: 'RADIUS',   v: '6px · tilt ±1.5°' },
        { k: 'ENTER',    v: 'scale .92→1 + tilt 1.5°→0 · 320ms spring' },
        { k: 'RULE',     v: '<b>≤ 3 per screen · at least 200px apart</b>' },
      ]} />
    </SubSec>
  );
}

/* ---------- concept card · upgraded ---------- */
function ConceptCard() {
  return (
    <SubSec name="C · Concept Card" tag="EXPLAINER CARD · REFINED">
      <Stage pattern="dot" label="● A-ROLL · CARD" labelR="01.C">

        {/* left: speaker frame / negative space — card hugs right */}
        <div className="mono" style={{ position: 'absolute', top: '14%', left: '6%', fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>
          ← SPEAKER FRAME
        </div>

        {/* concept card body */}
        <div style={{
          position: 'absolute', top: '12%', right: '6%',
          width: '50%',
        }}>
          {/* header: index + timecode */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)' }}>● CONCEPT</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>02 / 12</span>
            </div>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>00:14:22</span>
          </div>

          {/* main card */}
          <div className="frame" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--line)',
            borderRadius: 8,
            padding: '32px 36px',
            position: 'relative',
          }}>
            <Crosses />
            {/* title */}
            <div className="cn" style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.12, marginBottom: 14 }}>
              Context is <span style={{ color: 'var(--accent)' }}>material</span>,
              <br />not a <span className="serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--fg-2)' }}>prompt</span>.
            </div>
            {/* divider */}
            <div style={{ width: 28, height: 2, background: 'var(--accent)', marginBottom: 14 }} />
            {/* body */}
            <div className="cn" style={{ fontSize: 16, fontWeight: 400, color: 'var(--fg-2)', lineHeight: 1.65 }}>
              Feeding the model "sufficiently relevant" material works better than giving it a "sufficiently clever" prompt.
            </div>
            {/* footer: source */}
            <div style={{ marginTop: 22, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>REF · ANTHROPIC ENG BLOG</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--fg-3)' }}>HOLD · 4S</span>
            </div>
          </div>
        </div>
      </Stage>

      {/* usage notes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
        <UseCase label="01 · USE WHEN" body="Introduce a <em>new definition</em> for a term that needs to hold on screen for 3–5s" />
        <UseCase label="02 · DON'T" body="No glow / shadow / gradient stacking · no two cards on screen" />
        <UseCase label="03 · ENTER" body="opacity 0→1 + y 12→0 · 700ms ease-out · reverse on exit" />
      </div>

      <Params rows={[
        { k: 'BG',       v: 'var(--bg-card) #111114' },
        { k: 'BORDER',   v: '1px hairline + 4 corner cross marks' },
        { k: 'RADIUS',   v: '8px' },
        { k: 'PADDING',  v: '32 / 36px · width 50% of frame' },
        { k: 'TYPE',     v: 'mono 11 caps · body 38/800 · body 16/400 · one serif italic word' },
        { k: 'RULE',     v: 'one concept per card · max 3 lines of body text' },
        { k: 'SHADOW',   v: '<b>0</b> · emphasis via color swap and type-size cliff' },
        { k: 'ENTER',    v: '700ms ease-out · card + corner marks staggered 80ms' },
      ]} />
    </SubSec>
  );
}

/* ---------- helpers ---------- */
function Crosses() {
  return (
    <>
      <span className="cross cross--tl" />
      <span className="cross cross--tr" />
      <span className="cross cross--bl" />
      <span className="cross cross--br" />
    </>
  );
}

function UseCase({ label, body }) {
  // `body` is repo-authored copy with optional <em> emphasis; recolor the
  // emphasis inline, then hand it to the shared trusted-input boundary.
  const html = body.replace(/<em>(.*?)<\/em>/g, '<em style="color:var(--accent);font-style:normal">$1</em>');
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--line)',
      borderRadius: 8, padding: '18px 20px',
    }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 10 }}>{label}</div>
      <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }} dangerouslySetInnerHTML={trustedHTML(html)} />
    </div>
  );
}

Object.assign(window, { ARollSection });
