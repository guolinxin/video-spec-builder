/* ================================================================
   sections/illustrations.jsx — 10 · Icon System
   v3.2 · scene illustration removed · Lucide icons only
   ================================================================ */

/* ---------- Lucide React wrapper ---------- */
function L({ name, size = 24, sw = 1.5, style, className }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    ref.current.appendChild(i);
    window.lucide.createIcons({
      attrs: { 'stroke-width': sw, width: size, height: size, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
      nameAttr: 'data-lucide',
    });
  }, [name, size, sw]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', lineHeight: 0, color: 'currentColor', ...style }} />;
}

function IconCell({ name, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: '22px 8px',
        border: `1px solid ${hover ? 'var(--accent)' : 'var(--line)'}`,
        borderRadius: 2,
        color: hover ? 'var(--accent)' : 'var(--fg-2)',
        transition: 'color 240ms var(--ease-out), border-color 240ms var(--ease-out)',
        background: hover ? 'rgba(255,255,255,.04)' : 'transparent',
      }}
    >
      <L name={name} size={28} sw={1.5} />
      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>{label}</div>
    </div>
  );
}

/* ============== I-0 · Rules ============== */
function IllRules() {
  const rules = [
    ['LIBRARY', 'Lucide Icons · 1500+ · open-source ISC · industry standard'],
    ['STROKE',  '1 / 1.5 / 2 px · default 1.5 · unified per screen'],
    ['SIZE',    '14 / 18 / 24 / 32 · above 48 → use large type instead'],
    ['COLOR',   'inherits currentColor · default fg-2 · emphasis accent'],
    ['SPACING', 'align to text baseline · 8px gap before/after'],
    ['POLICY',  'no mixing other icon sets · no hand-drawn · no decorative illustration'],
  ];
  const policy = [
    ['NO ILLUSTRATION', 'scene illustration / cartoon characters forbidden in this system'],
    ['NO ICON SHADOW',  'no shadow / glow / gradient beyond the stroke'],
    ['NO HUE',          'no colors outside the theme — single accent rule'],
    ['NO ROUND CORNER', 'icon containers only 0 / 2 / 4px radius'],
    ['NO EMOJI',        'no emoji / emoticons / expression characters'],
    ['SLASH MOTIF',     'geometric characters like / · X · △ allowed as motifs'],
  ];
  const Row = ({ k, v }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', alignItems: 'baseline', borderBottom: '1px solid var(--line)', padding: '10px 0' }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>{k}</div>
      <div className="cn" style={{ fontSize: 14, color: 'var(--fg)' }}>{v}</div>
    </div>
  );
  return (
    <SubSec name="I-0 · System Rules" tag="HOW WE USE ICONS">
      <Stage pattern="grid" label="● ICON · SYSTEM RULES" labelR="10.I0">
        <div style={{ position: 'absolute', inset: '6% 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <div>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE · LUCIDE</div>
            <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>UI info layer · footnotes · nodes · states</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column' }}>
              {rules.map(([k, v]) => <Row key={k} k={k} v={v} />)}
            </div>
          </div>
          <div>
            <div className="meta" style={{ color: 'var(--accent)' }}>POLICY · WHAT WE DON'T DO</div>
            <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>restrained · geometric · monochrome</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column' }}>
              {policy.map(([k, v]) => <Row key={k} k={k} v={v} />)}
            </div>
          </div>
        </div>
      </Stage>
    </SubSec>
  );
}

/* ============== I-1 · Stroke comparison ============== */
function StrokeShowcase() {
  const sample = 'rocket';
  const variants = [
    { sw: 1,    size: 84, label: 'STROKE 1',    note: 'hairline · footnotes / de-emphasis' },
    { sw: 1.5,  size: 84, label: 'STROKE 1.5',  note: 'default · 90% of scenes', active: true },
    { sw: 2,    size: 84, label: 'STROKE 2',    note: 'bold · emphasis / headlines' },
    { sw: 2.5,  size: 84, label: 'STROKE 2.5',  note: 'heavy · use sparingly' },
  ];
  return (
    <SubSec name="I-1 · Stroke Weights · 4 Steps" tag="STROKE WEIGHTS">
      <Stage pattern="dot" label="● ICONS · STROKES" labelR="10.I1">
        <div style={{ position: 'absolute', inset: '12% 5%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {variants.map(v => (
            <div key={v.sw} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 22, padding: '40px 18px',
              border: '1px solid ' + (v.active ? 'var(--accent)' : 'var(--line-2)'),
              background: v.active ? 'var(--bg-card)' : 'transparent',
              borderRadius: 2,
            }}>
              <L name={sample} size={v.size} sw={v.sw} style={{ color: v.active ? 'var(--accent)' : 'var(--fg-2)' }} />
              <div style={{ textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: v.active ? 'var(--accent)' : 'var(--fg-3)' }}>{v.label}</div>
                <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 4 }}>{v.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'DEFAULT', v: '1.5px · visually equal weight to hairline borders' },
        { k: 'ACCENT',  v: '2px · when the icon itself is the emphasized element' },
        { k: 'AVOID',   v: 'mixing 3+ stroke weights on one screen' },
      ]} />
    </SubSec>
  );
}

/* ============== I-2 · Icon library ============== */
const LU_ICONS = [
  ['user',           'User'],   ['users',          'Team'],   ['message-circle','Chat'],   ['mic',           'Voice'],
  ['mail',           'Mail'],   ['phone',          'Phone'],   ['hand',           'Hint'],   ['user-cog',      'Account'],
  ['database',       'Database'], ['cloud',          'Cloud'],     ['cpu',            'Compute'],   ['hard-drive',    'Storage'],
  ['network',        'Graph'],   ['git-branch',     'Hierarchy'],   ['workflow',       'Flow'],   ['layers',        'Stack'],
  ['bot',            'AI'],     ['brain',          'Reasoning'],   ['wand-sparkles',  'Generate'],   ['zap',           'Fast'],
  ['terminal',       'Terminal'],   ['code',           'Code'],   ['function-square','Function'],   ['plug',          'Integration'],
  ['file-text',      'Document'],   ['book-open',      'Reading'],   ['notebook-pen',   'Notes'],   ['bookmark',      'Bookmark'],
  ['quote',          'Quote'],   ['list-checks',    'Checklist'],   ['tag',            'Tag'],   ['folder-open',   'Folder'],
  ['rocket',         'Launch'],   ['target',         'Target'],   ['compass',        'Explore'],   ['search',        'Search'],
  ['check-circle-2', 'Pass'],   ['triangle-alert', 'Warning'],   ['x-circle',       'Fail'],   ['help-circle',   'Help'],
  ['line-chart',     'Growth'],   ['bar-chart-3',    'Bar chart'],   ['pie-chart',      'Pie chart'],   ['timer',         'Timer'],
  ['calendar',       'Calendar'],   ['gauge',          'Gauge'],   ['trending-up',    'Trend'],   ['shield-check',  'Security'],
];

function IconGallery() {
  return (
    <SubSec name="I-2 · Curated Icon Set · 48 Icons" tag="CURATED SET">
      <Stage pattern="dot" label="● ICONS · GALLERY" labelR="10.I2">
        <div style={{ position: 'absolute', top: '5%', left: '4%', right: '4%' }}>
          <div className="meta" style={{ color: 'var(--accent)' }}>CURATED · 48 ICONS · HOVER → ACCENT</div>
          <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 4 }}>Lucide official id · usage <span className="mono" style={{ color: 'var(--fg-2)' }}>{'<L name="zap" />'}</span></div>
        </div>
        <div style={{ position: 'absolute', inset: '16% 4% 4%', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridAutoRows: '1fr', gap: 10 }}>
          {LU_ICONS.map(([id, cn]) => (
            <IconCell key={id} name={id} label={id.toUpperCase().replace(/-/g, '·').slice(0, 11)} />
          ))}
        </div>
      </Stage>
      <Params rows={[
        { k: 'COUNT', v: '48 icons / 6 groups: people · data · AI · docs · action · metrics' },
        { k: 'POOL',  v: 'need more → search lucide.dev · pass name directly' },
        { k: 'COLOR', v: 'default fg-2 · hover accent · do not color proactively' },
      ]} />
    </SubSec>
  );
}

/* ============== I-3 · Usage examples ============== */
function IconApplications() {
  return (
    <SubSec name="I-3 · Usage Examples · 6 Patterns" tag="WHERE TO PLACE">
      <Stage pattern="grid" label="● ICON · USAGE" labelR="10.I3">
        <div style={{ position: 'absolute', inset: '5% 4%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 14 }}>
          {/* 1 card header */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 01 · CARD HEADER</div>
            <div>
              <L name="brain" size={32} sw={1.5} style={{ color: 'var(--accent)' }} />
              <div className="cn" style={{ fontSize: 20, fontWeight: 700, marginTop: 10 }}>Reasoning quality</div>
              <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>Chain-of-Thought improves by 23%</div>
            </div>
          </div>
          {/* 2 list prefix */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22 }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 02 · LIST PREFIX</div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['check-circle-2', '12 tests passed',  'var(--accent)'],
                ['triangle-alert',  '3 items need review',     'var(--fg-2)'],
                ['x-circle',       '1 item failed',       'var(--fg-3)'],
              ].map(([n, t, c]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <L name={n} size={18} sw={2} style={{ color: c }} />
                  <div className="cn" style={{ fontSize: 15, color: 'var(--fg)' }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
          {/* 3 corner ornament */}
          <div style={{ position: 'relative', border: '1px solid var(--accent)', borderRadius: 2, padding: 22, overflow: 'hidden' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 03 · ORNAMENT</div>
            <div className="cn" style={{ fontSize: 22, fontWeight: 700, marginTop: 12 }}>Chapter 04</div>
            <div className="cn" style={{ fontSize: 15, color: 'var(--fg-2)', marginTop: 6 }}>From prototype to production</div>
            <div style={{ position: 'absolute', right: -16, bottom: -24, color: 'var(--accent)', opacity: 0.18 }}>
              <L name="rocket" size={180} sw={1.2} />
            </div>
          </div>
          {/* 4 node badge */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 04 · NODE BADGE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 14 }}>
              {['user', 'cpu', 'database', 'cloud'].map((c, i, arr) => (
                <React.Fragment key={c}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <L name={c} size={20} sw={1.75} />
                  </div>
                  {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: 'var(--line-2)' }} />}
                </React.Fragment>
              ))}
            </div>
            <div className="cn" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}>circular hairline + Lucide 1.75 stroke</div>
          </div>
          {/* 5 KPI */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="meta" style={{ color: 'var(--accent)' }}>USE 05 · KPI TILE</div>
              <L name="trending-up" size={22} sw={2} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <div className="cond" style={{ fontSize: 64, fontWeight: 800, color: 'var(--fg)', lineHeight: 1, letterSpacing: '-0.02em' }}>+42<span style={{ fontSize: 30, color: 'var(--accent)' }}>%</span></div>
              <div className="cn" style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 6 }}>Retrieval recall · vs baseline</div>
            </div>
          </div>
          {/* 6 input affix */}
          <div style={{ border: '1px solid var(--line-2)', borderRadius: 2, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="meta" style={{ color: 'var(--accent)' }}>USE 06 · INPUT AFFIX</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', border: '1px solid var(--line-2)', borderRadius: 2, background: 'var(--bg)' }}>
              <L name="search" size={18} sw={1.5} style={{ color: 'var(--fg-3)' }} />
              <div className="cn" style={{ fontSize: 14, color: 'var(--fg-3)', flex: 1 }}>Search docs, snippets, models...</div>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--fg-3)', border: '1px solid var(--line-2)', padding: '2px 6px', borderRadius: 2 }}>⌘ K</span>
            </div>
            <div className="cn" style={{ fontSize: 12, color: 'var(--fg-3)' }}>prefix search · suffix shortcut</div>
          </div>
        </div>
      </Stage>
    </SubSec>
  );
}

/* ============== Main entry ============== */
function IllustrationsSection() {
  return (
    <Section id="illustrations" num="10" title="Iconography"
      desc='The full library uses <b>Lucide Icons</b> (open-source · 1500+ · stroke-based · industry standard). <em>No scene illustration / cartoon characters / decorative graphics</em>, aligned with SpaceX × Grok × X visual principles — <b>pure geometry, pure monochrome, zero decoration</b>.'>
      <IllRules />
      <StrokeShowcase />
      <IconGallery />
      <IconApplications />
    </Section>
  );
}

Object.assign(window, { IllustrationsSection, LucideIcon: L });
