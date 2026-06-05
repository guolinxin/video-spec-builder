/* ================================================================
   app.jsx — composition root
   ================================================================ */

const { useState, useEffect, useRef } = React;

const SECTIONS = [
  { id: 'foundation', num: '00', name: 'Visual Foundation', Comp: () => <FoundationSection /> },
  { id: 'aroll',      num: '01', name: 'A-roll',  Comp: () => <ARollSection /> },
  { id: 'structure',  num: '02', name: 'Structure Diagrams',  Comp: () => <StructureSection /> },
  { id: 'ui',         num: '03', name: 'Simulated UI', Comp: () => <FakeUISection /> },
  { id: 'hero',       num: '04', name: 'Heavy Hit',    Comp: () => <HeroSection /> },
  { id: 'abstract',   num: '05', name: 'Abstract Fallback', Comp: () => <AbstractSection /> },
  { id: 'charts',     num: '06', name: 'Data Charts', Comp: () => <ChartsSection /> },
  { id: 'flows',      num: '07', name: 'Flow Charts',   Comp: () => <FlowsSection /> },
  { id: 'structures2',num: '08', name: 'Relationship Structures', Comp: () => <Structures2Section /> },
  { id: 'thinking',   num: '09', name: 'Structured Thinking', Comp: () => <ThinkingSection /> },
  { id: 'illustrations', num: '10', name: 'Illustrations',  Comp: () => <IllustrationsSection /> },
];

/* ---------- Tweaks defaults ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFFFFF",
  "density": "comfortable",
  "showDeco": true
}/*EDITMODE-END*/;

/* ---------- side nav ---------- */
function Nav({ active }) {
  return (
    <nav className="nav">
      {SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`}
           className={`nav__item ${active === s.id ? 'is-active' : ''}`}>
          {s.num} · <span className="cn">{s.name}</span>
        </a>
      ))}
    </nav>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <header className="hero">
      <div className="hero__left">
        <div className="hero__brand">VIDEO / COMPONENT LIBRARY / v2.0 — SPACE × GROK × X</div>
        <h1 className="hero__title">
          A SYSTEM<br/>FOR <span className="hero__accent">VIDEO</span><span style={{ color: 'var(--accent)' }}>.</span>
        </h1>
        <div className="hero__sub cn">
          Built for AI tutorial videos · <span style={{ color: 'var(--accent)' }}>minimal / geometric / monochrome</span> · camera-readable · single adjustable accent
        </div>
      </div>
      <div className="hero__meta">
        <div><span>FRAME</span><b>3840 × 2160</b></div>
        <div><span>RATIO</span><b>16 / 9</b></div>
        <div><span>STACK</span><b>SPACE GROTESK · BARLOW · MONO</b></div>
        <div><span>WEIGHTS</span><b>400 / 600 / 700</b></div>
        <div><span>BUILD</span><b>2026.05 · v2</b></div>
        <div><span>T-MINUS</span><b style={{ color: 'var(--accent)' }}>LIVE</b></div>
      </div>
    </header>
  );
}

/* ---------- section frame ---------- */
function Section({ id, num, title, desc, children }) {
  return (
    <section className="section" id={id} data-screen-label={`${num} ${title}`}>
      <div className="section__num"><span>SECTION {num}</span></div>
      <h2 className="section__title cn">{title}</h2>
      <p className="section__desc cn" dangerouslySetInnerHTML={{ __html: desc }} />
      {children}
    </section>
  );
}

function SubSec({ name, tag, children }) {
  return (
    <div className="subsec">
      <div className="subsec__head">
        <div className="subsec__name cn">{name}</div>
        <div className="subsec__tag">{tag}</div>
      </div>
      {children}
    </div>
  );
}

/* ---------- params table ---------- */
function Params({ rows }) {
  return (
    <div className="params">
      {rows.map((r, i) => (
        <div className="param" key={i}>
          <div className="param__k">{r.k}</div>
          <div className="param__v" dangerouslySetInnerHTML={{ __html: r.v }} />
        </div>
      ))}
    </div>
  );
}

/* ---------- stage ---------- */
function Stage({ pattern = 'plain', label, labelR, labelB, labelBR, children, style }) {
  return (
    <div className={`stage ${pattern === 'dot' ? 'stage--dotgrid' : pattern === 'graph' ? 'stage--graph' : ''}`} style={style}>
      {label && <div className="stage__corner">{label}</div>}
      {labelR && <div className="stage__corner stage__corner--r">{labelR}</div>}
      {labelB && <div className="stage__corner stage__corner--b">{labelB}</div>}
      {labelBR && <div className="stage__corner stage__corner--br">{labelBR}</div>}
      {children}
    </div>
  );
}

/* ---------- App ---------- */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState('foundation');

  // apply accent
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  // active section observer
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="shell">
      <Nav active={active} />
      <Hero />
      {SECTIONS.map(s => (
        <s.Comp key={s.id} />
      ))}
      <footer className="outro">
        <div className="outro__copy">
          PURE BLACK.<br/>
          PURE GEOMETRY.<br/>
          <span style={{ color: 'var(--accent)' }}>PURE SIGNAL.</span>
        </div>
        <div className="outro__meta">
          <div>v2 · 2026.05</div>
          <div>FOR YOUTUBE · 4K · 16:9</div>
          <div style={{ marginTop: 14, color: 'var(--accent)' }}>END / TRANSMISSION</div>
        </div>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor
            label="Primary color"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#FFFFFF', '#FF6B3D', '#1D9BF0', '#E8C547', '#00E0FF', '#FF3333']}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakToggle
            label="Decorative elements (corner marks · ticks · grid)"
            value={t.showDeco}
            onChange={(v) => setTweak('showDeco', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

/* expose for inter-script use */
Object.assign(window, { Section, SubSec, Params, Stage });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
