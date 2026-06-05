---
name: components-catalog
description: Video content type vocabulary · 69 standard content types.
---

# Content Type Vocabulary · Components Catalog

69 standard content types — anchor one component ID per shot when breaking down scenes. This catalog only describes purpose / when to use / when not to use / content expectations; no visual implementation details.

[How to use]
    - Pick component: start with [When to use] / [When not to use] to narrow scope, then confirm with [Purpose]
    - Fill content: complete required fields per [Content expectations]
    - Fallback: no suitable component → `broll-abstract.placeholder` + register in "Open Questions"
    - Naming rule: `namespace.component-id` (e.g. `aroll.subtitle-highlight`)

11 namespaces (no inventing your own):
    aroll · broll-hero · broll-charts · broll-abstract · broll-flows ·
    broll-structure · broll-structures2 · broll-thinking · broll-ui ·
    icons · illustrations


[A-roll · On-camera narration layer]

[aroll.subtitle-highlight] Subtitle Highlight · SPOKEN-WORD CAPTIONS
    Purpose: Break spoken narration into word-by-word highlights — highlight each word as spoken, as a visual metronome.
    When to use: Spoken rhythm needs word-level emphasis / subtitles as metronome / key nouns locked / bilingual subtitles.
    When not to use: Long background narration / subtitles only need flat display / keywords must attach to specific on-screen positions (→ keyword-sticker).
    Content expectations: Full spoken line (CN/EN/bilingual) · which words are keywords · speaker name / chapter / timecode (optional) · estimated duration for full line.

[aroll.keyword-sticker] Keyword Sticker · POP-IN LABELS
    Purpose: When speaker introduces a new term, "stick" 1-3 keywords on screen as visual anchors.
    When to use: Introducing new term / jargon / person name / company name · add anchors to narration without full card · keywords scattered on screen.
    When not to use: ≥ 4 tags (→ card-grid) · need full definition (→ concept-card) · must persist > 3s.
    Content expectations: 1-3 keywords (CN/EN) · which is most important (inverted color) · appearance timing (seconds into narration).

[aroll.concept-card] Concept Card · EXPLAINER CARD
    Purpose: Side-panel "new term definition card" — title + body paragraph + source citation.
    When to use: New term needs 3-5s dwell · citing book / blog / paper core argument · chapter first introduction of core concept.
    When not to use: Another concept card already on screen · information > 3 lines (→ pull-quote / analogy) · abstract needs illustration (→ broll-abstract.*).
    Content expectations: Concept name (CN+EN) · one-sentence definition (≤ 3 lines) · source (book / author / paper / URL) · whether certain word needs italic emphasis.


[B-roll · Hero poster shots]

[broll-hero.big-type] Big Type · TYPOGRAPHIC POSTER
    Purpose: Full-screen chapter cover / title big type — use typography itself as paragraph separator.
    When to use: Chapter cover · "title shot" for video's core argument · rhythm pause / visual reset between sections.
    When not to use: Ordinary section heading (→ concept-card) · another hero already used in same section · information ≥ 2 lines of argument.
    Content expectations: One core headline (≤ 8 Chinese chars / ≤ 5 English words) · chapter number · whether certain character italic / inverted · key phrase subhead (optional).

[broll-hero.big-number] Big Stat · STATISTIC HERO
    Purpose: One oversized number (percentage / multiplier / magnitude) fills frame, with one concise explanation.
    When to use: Decisive number (87% · 10× · $1B) · want number as standalone shot · citing data source.
    When not to use: Data is trend / multi-point (→ line-chart) · number is only transitional · no source / method / attribution.
    Content expectations: Main number + unit · one explanation line · source (survey name / sample size / margin of error) · number label (FINDING / DELTA / SHARE).

[broll-hero.pull-quote] Pull Quote · EDITORIAL MOMENT
    Purpose: Full-screen quote from notable person / paper / document, author credited below.
    When to use: Citing domain authority (Karpathy / Sutton / paper abstract) · core argument spoken through citation · need magazine-quality rhythm shot.
    When not to use: No concrete source / author · quote > 4 lines (split shot or → concept-card) · needs data / chart support.
    Content expectations: Quote text (≤ 4 lines) · author name + role + year · category (e.g. ON CRAFT) · whether certain word emphasized.

[broll-hero.inversion-flash] Inversion Flash · CUT-IN TRANSITION
    Purpose: Instant color inversion as rhetorical pause / section switch.
    When to use: Section switch "brake" · rhetorical pause before question / turn ("Wait.") · emphasize one line as "stress accent".
    When not to use: Already used 2+ times in single video · consecutive use · duration > 1s.
    Content expectations: One line to hammer (≤ 10 Chinese chars) · appearance timing · direction of next shot after flash.


[B-roll · Data charts]

[broll-charts.line-chart] A1 · Line Chart · TREND OVER TIME
    Purpose: Show one metric's change over time.
    When to use: Single metric time series · emphasize "growth / decline / peak" · 6-30 data points.
    When not to use: Multi-metric comparison (→ multi-line) · discrete categories (→ bar) · proportion share (→ donut) · data points < 6 (→ sparkline).
    Content expectations: Data source · main label (e.g. "Weekly active user growth") · key values (endpoint / peak / start) · time range · whether to mark anomalies / key nodes.

[broll-charts.multi-line] A2 · Multi-line · MODEL COMPARISON
    Purpose: Multiple lines on same chart comparing same metric (models / products / tracks).
    When to use: 2-3 same-dimension time series · emphasize "who leads / who catches up" · model benchmark / product growth.
    When not to use: Single metric (→ line-chart) · ≥ 4 lines (split chart / → bar) · different dimensions (→ compare-table).
    Content expectations: 2-3 line names · data source per line · which is protagonist (highlighted) · main title · time range.

[broll-charts.bar-chart] A3 · Bar Chart · DISCRETE QUANTITIES
    Purpose: Discrete category (month / week / type) value comparison.
    When to use: 4-8 discrete categories · highlight "which is highest / lowest" · monthly / quarterly / unit magnitude.
    When not to use: Continuous time trend (→ line) · categories > 10 (→ h-bar) · proportion share (→ donut) · multi-dimension stacking (→ stacked).
    Content expectations: Category names · values per category · which is peak (highlighted) · main title (highlighting peak finding).

[broll-charts.h-bar] A4 · H-Bar · RANKING
    Purpose: Leaderboard — horizontal bars sorted descending, emphasize first place.
    When to use: 5-10 item ranking · long item names (horizontal displays fully) · emphasize "first vs rest".
    When not to use: Time series (→ line / bar) · items ≤ 3 (→ big-number) · no ranking feel needed (→ bar).
    Content expectations: 5-10 item names · values per item (descending) · first-ranked item (auto accent) · main title + data source.

[broll-charts.stacked] A5 · Stacked · COMPOSITION OVER TIME
    Purpose: Component share changes over time series.
    When to use: Total + composition both matter · quarterly / monthly "composition evolution" · main item anchored at bottom visually.
    When not to use: Only care about total (→ line / area) · only care about single-moment share (→ donut) · components ≥ 5.
    Content expectations: Time labels · 3 sub-item values per time point · main item (bottom) · main title + data source.

[broll-charts.area-chart] A6 · Area · ACCUMULATED VOLUME
    Purpose: Emphasize "accumulated volume / capacity growth" — fill below line.
    When to use: Emphasize "accumulation" (token usage / user count cumulative) · single metric volume growth feel · need more visual weight than line.
    When not to use: Multi-line comparison · data has negatives / sharp volatility · want precise values (→ line + endpoint labels).
    Content expectations: Data source · main title (emphasize accumulation / growth narrative) · time range + data points · start value + end value.

[broll-charts.donut] A7 · Donut · PROPORTION
    Purpose: Proportion chart with ≤ 4 segments (one main + several secondary + Other).
    When to use: Proportion share / focus "how much main item occupies" · items ≤ 4 · want center number as visual anchor.
    When not to use: Items > 4 (→ bar) · want ranking emphasis (→ h-bar) · absolute values not percentages · multi-time-period (→ stacked).
    Content expectations: Sub-item names + percentages (≤ 4 items) · key number to show in center · which is main item · main title + data source.

[broll-charts.scatter] A8 · Scatter · CORRELATION
    Purpose: Two-dimensional distribution — x/y axes each represent one dimension, point size can map third dimension.
    When to use: 2D correlation (cost × quality) · find sweet spot / outliers · "model D is the sweet spot" narrative.
    When not to use: Time series (→ line) · only one dimension (→ bar) · data points > 30 (→ heatmap).
    Content expectations: What x / y axes represent · 5-15 point names + coordinates · which is sweet spot / protagonist · third dimension (optional) · main title + source.

[broll-charts.heatmap] A9 · Heatmap · 2D INTENSITY
    Purpose: Intensity distribution on 2D grid (row × column = intensity).
    When to use: 2D intensity (time × category) · reveal "which time slot / region is hottest" · data is discrete grid.
    When not to use: 1D data (→ bar / line) · grid < 5×5 (→ bar) · need precise values (→ bar / table).
    Content expectations: Row labels (e.g. Mon–Sun) · column labels (e.g. 0-23 hours) · intensity value per cell (0-100) · main title + data source.

[broll-charts.gauge] A10 · Gauge · SINGLE METRIC
    Purpose: Single metric progress toward target (e.g. RAG Fidelity 73% · target 80%).
    When to use: Single KPI current value + target · emphasize "completion / distance to target" · no historical trend needed.
    When not to use: Has time trend (→ line + target line) · multiple KPIs (→ sparkline) · progress not key (→ big-number).
    Content expectations: Current value + unit · target value · one narrative explanation · status label (HEALTHY / WARNING / CRITICAL).

[broll-charts.sparkline] A11 · Sparkline · DENSE METRIC CARDS
    Purpose: Multi-KPI card "weekly report" — each card has big number + delta + mini curve.
    When to use: Key metrics dashboard overview · show 3-6 KPIs simultaneously · emphasize up/down with color coding.
    When not to use: Single metric deep dive (→ gauge / line) · cards have very different dimensions · card count < 3 or > 6.
    Content expectations: 3-6 KPI names + current values · delta per KPI · mini curve data per KPI (5-10 points) · whether LIVE label included.

[broll-charts.sankey] A12 · Sankey · FLOW DISTRIBUTION
    Purpose: Flow distribution between multi-column nodes (funnel / conversion / resource allocation).
    When to use: Multi-stage funnel (source → trial → retention) · many-to-many resource allocation · reveal "which main path is thickest".
    When not to use: Single linear funnel (→ funnel) · nodes > 8 · flow not core (→ ordinary flowchart).
    Content expectations: Node names per column · flow values between nodes (determines ribbon thickness) · which is main path · main title + data source.


[B-roll · Abstract fallback]

[broll-abstract.analogy] Analogy · UNFAMILIAR ≈ FAMILIAR
    Purpose: Map unfamiliar concept to familiar thing left-right ("RAG ≈ open-book exam"), connected by ≈ in middle.
    When to use: Introducing new term (most common abstract component) · found familiar concept as bridge · emphasize "essentially similar but different form".
    When not to use: Two things oppose / conflict (→ versus) · relationship is causal / derivation (→ equation) · no suitable familiar concept (→ black-box / placeholder).
    Content expectations: Unfamiliar concept (CN+EN+subtitle) · familiar concept (CN+EN+subtitle) · dimension where analogy holds (what aspect is similar).

[broll-abstract.black-box] Black Box · INPUT → ? → OUTPUT
    Purpose: Emphasize "middle process unknowable" — input → "?" box → output.
    When to use: "Internally unexplainable" (LLM black box / neural network) · express "we don't need to know internals" · clear input/output, fuzzy process.
    When not to use: Internal steps are clear (→ broll-flows.complex) · no clear input / output (→ placeholder) · want to explain internal mechanism.
    Content expectations: What is input · what is output · subtitle inside black box (e.g. "175B params · unexplainable").

[broll-abstract.equation] Concept Equation · A + B = C
    Purpose: Write concept combination as "textbook equation" — e.g. "model + materials = reliable answer".
    When to use: Emphasize "two elements combine to produce result" · formulaic expression of core argument · want textbook / rigorous tone.
    When not to use: Concept is A vs B opposition (→ versus) · is causal / flow (→ flow) · more than three elements.
    Content expectations: Two left-side terms (noun + subtitle each) · right-side result (noun + subtitle) · which term is key (accent).

[broll-abstract.spectrum] Spectrum · ONE AXIS · TWO POLES
    Purpose: One axis · two opposing poles · middle marker shows current position.
    When to use: Express "X between A and B, leaning which side" · continuous transition between two poles · mark "current state" on spectrum.
    When not to use: Two discrete categories (→ versus) · not continuous transition (→ analogy) · multi-dimensional (→ matrix-2x2).
    Content expectations: Left pole concept · right pole concept · current marker position on 0-1 interval · marker label (e.g. "RAG · 0.68").

[broll-abstract.iceberg] Iceberg · VISIBLE / HIDDEN
    Purpose: Above water "visible 10%", below water "hidden 90%".
    When to use: Vastly disproportionate "visible / invisible" · emphasize "tip of iceberg" · LLM visible UI vs hidden weights.
    When not to use: Ratio near 1:1 (→ versus) · not visible/hidden (→ stacked / donut) · don't need "upper/lower hierarchy" (→ layered-stack).
    Content expectations: What's above water ("visible 10%" content) · what's below ("hidden 90%" content) · one narrative main title.

[broll-abstract.versus] Versus · A vs B · DELTA
    Purpose: Two options side-by-side equal width · "vs" in middle · row-aligned comparison.
    When to use: Two options / concepts item-by-item comparison (pre-training vs fine-tuning) · row-aligned to see differences · highlight one side as better.
    When not to use: ≥ 3 objects (→ compare-table) · not opposition / parallel (→ analogy) · only 1 dimension (→ spectrum).
    Content expectations: Left option name + short description · right option name + short description · 3-4 comparison dimensions (left value/right value per row) · which side recommended (accent).

[broll-abstract.placeholder] Placeholder · WHEN YOU LACK AN ASSET
    Purpose: Fallback frame when assets missing — annotate what asset to add later.
    When to use: Truly no suitable component, missing screenshot / screen recording · placeholder to advance spec · annotate future asset specs.
    When not to use: Any scene replaceable by other component (don't be lazy) · already confirmed shot.
    Content expectations: Asset name (e.g. "product demo screenshot") · asset specs (dimensions / duration / format) · who supplies / when.


[B-roll · Flowcharts]

[broll-flows.complex] B1 · Multi-step · EXTENDED LINEAR FLOW
    Purpose: ~7 node linear flow, with latency / highlighted key cluster.
    When to use: 6-9 step linear pipeline (RAG / CI-CD) · want to circle "core segment" · each step has latency data to label.
    When not to use: Flow has branches (→ branching) · nodes ≤ 5 (→ flow-chart) · no latency data needed (→ flow-chart).
    Content expectations: 6-9 node names (CN+EN) · latency per step · which segment is "core cluster" · main path nodes (accent).

[broll-flows.branching] B2 · Branching · IF / ELSE
    Purpose: Single decision point + YES / NO branches (e.g. cache hit → return / call model).
    When to use: Single decision point if/else · cache strategy / error handling / admission check · emphasize "YES vs NO".
    When not to use: Multi-level decisions (→ decision-tree) · no branches (→ complex / flow-chart) · decision returns to same node (→ loop).
    Content expectations: Decision question (e.g. "Cache hit?") · YES branch subsequent nodes · NO branch subsequent nodes · which is main path (accent).

[broll-flows.decision-tree] B3 · Decision Tree · MULTI-LEVEL JUDGMENT
    Purpose: Multi-level decisions (root → decision → leaf), recommended path highlighted throughout.
    When to use: "Do I pick A or B or C" · engineering choice decisions (RAG / fine-tune / web / native) · guide viewer through reasoning.
    When not to use: Single decision (→ branching) · levels > 3 (split chart) · not judgment but process (→ complex).
    Content expectations: Root question · decision question + YES/NO per level · terminal leaf nodes (recommended result) · recommended path (accent highlighted).

[broll-flows.state-machine] B4 · State Machine · STATES WITH TRANSITIONS
    Purpose: Circular nodes (states) + arrows (transition events) + self-loops.
    When to use: Agent states (IDLE / THINKING / ACTING) · UI state machine (pending / loading / success) · emphasize "can loop / can revert".
    When not to use: Linear steps (→ complex / flow-chart) · one-way no loop (→ sequence) · states > 6.
    Content expectations: State names (recommend 4, max 6) · transition events between states (INVOKE / RETRY) · which has loop (self-loop) · main path.

[broll-flows.sequence] B5 · Sequence · API / INTERACTION TIMELINE
    Purpose: Temporal calls between multiple actors — top actors + hanging lifelines + arrows.
    When to use: Multi-actor API call order (User → API → LLM → DB) · sync vs async comparison · emphasize "sequence / temporal order".
    When not to use: Single linear flow (→ complex) · temporal order not emphasized (→ hub-spoke) · actors > 6.
    Content expectations: 3-5 actors · call order each step (from → to + operation name) · which are sync / async · key calls (accent).

[broll-flows.swimlane] B6 · Swimlane · MULTI-ROLE PROCESS
    Purpose: Horizontal swimlanes, node position encodes "which lane = who does it".
    When to use: Multi-role collaboration (human-in-the-loop) · emphasize "handoff" · AutoML / labeling / review workflow.
    When not to use: Single role (→ complex / flow-chart) · "who does it" not emphasized (→ sequence) · roles > 4.
    Content expectations: 3-4 lanes (role names) · each step + which lane · which steps are "cross-lane handoff" (highlighted).

[broll-flows.fork-join] B7 · Fork-Join · PARALLEL EXECUTION
    Purpose: Controller → fork → parallel workers → join → merge results.
    When to use: Parallel calls to multiple agents / APIs (map-reduce) · emphasize "concurrency" and "wait for all to complete" · multi-source retrieval then merge.
    When not to use: Serial flow (→ complex) · no join (→ branching) · workers have sequential dependency (→ sequence).
    Content expectations: Controller node name (e.g. "Coordinator") · concurrent worker count (recommend 3) · what each worker does · merge result.

[broll-flows.loop] B8 · Loop · ITERATIVE OPTIMIZATION
    Purpose: 4 nodes in ring + closed loop + exit condition in center (e.g. RLHF 4-step).
    When to use: Iterative optimization (train → infer → evaluate → retrain) · emphasize "forms closed loop" · exit when metric converges.
    When not to use: Linear flow (→ complex) · single-node self-loop (→ state-machine) · nodes ≠ 4.
    Content expectations: 4 node names (must be 4) · exit condition (one sentence) · which node is key (accent).


[B-roll · Structure diagrams I]

[broll-structure.flow-chart] Flow Chart · LINEAR PROCESS
    Purpose: 4-step linear flow, auto-advance highlights current step.
    When to use: Simple 4-step flow · let shot walk through once · emphasize "past / current / future" three states.
    When not to use: Steps ≠ 4 or has branches (→ broll-flows.*) · steps have latency (→ complex) · static display (→ complex simplified).
    Content expectations: 4 step names (CN+EN) · one-sentence description per step (optional) · advance rhythm (default auto / sync with narration).

[broll-structure.pyramid] Pyramid · HIERARCHY
    Purpose: 3-layer pyramid (e.g. strategy / method / execution), top layer emphasized.
    When to use: Hierarchy pyramid (strategy / method / execution) · emphasize "few but decisive vs mass repetition" · Maslow-type hierarchy.
    When not to use: Layers > 3 · equal-weight layers (→ layered-stack) · not hierarchy but process (→ flow).
    Content expectations: 3 layer names each (CN+EN) · brief description per layer · which layer is accent (default top).

[broll-structure.funnel] Funnel · CONVERSION
    Purpose: 4-stage conversion funnel, final retention emphasized.
    When to use: User conversion funnel (AWARE → TRY → COMMIT → EVANGELIZE) · hiring / sales / retention decline · emphasize "what remains at end".
    When not to use: Stage count ≠ 4 · many-to-many flow distribution (→ sankey) · stages don't have declining property (→ stack / flow).
    Content expectations: 4 stage names (CN+EN) · value per stage (count / proportion) · main title + data source.

[broll-structure.concentric] Concentric · NESTED SCOPE
    Purpose: Nested concentric circles (business → product → experience → core), emphasize innermost ring.
    When to use: Scope nesting (business contains product contains experience) · "outside-in" core argument · focus convergence model.
    When not to use: Not nesting (→ hub-spoke / node-graph) · overlapping intersection (→ venn) · rings > 4.
    Content expectations: 4 layer names (outside to inside) · brief description per layer · what "core" is in innermost ring.

[broll-structure.node-graph] Node Graph · ROUTING / WORKFLOW
    Purpose: Node + edge graph structure (e.g. input → router → tool A/B → output).
    When to use: Agent routing / tool call graph · emphasize "center router is key" · 4-6 nodes, simple structure.
    When not to use: Nodes > 8 (→ hub-spoke / split chart) · emphasize temporal order (→ sequence) · nodes are hierarchical (→ tree).
    Content expectations: 4-6 node names (CN+EN) · connection relationships · which node is key (e.g. router, accent).

[broll-structure.spectrum] Spectrum · OPPOSITE AXIS
    Purpose: Horizontal axis + pole labels + current position point (simplified vs broll-abstract.spectrum).
    When to use: Evolution position (rule-driven → agent-driven) · mark "where we are now" · single dimension opposing poles.
    When not to use: 2D positioning (→ matrix-2x2) · multi-pole (→ mind-map) · need numeric precision (→ broll-abstract.spectrum).
    Content expectations: Left pole concept · right pole concept · current position point label (e.g. "We are here").


[B-roll · Structure diagrams II]

[broll-structures2.tree] C6 · Tree / Taxonomy · HIERARCHICAL CLASSIFICATION
    Purpose: Three-layer classification tree (e.g. LLM → Encoder/Decoder/MoE → GPT-4/Claude/LLaMA).
    When to use: Taxonomy · org chart · emphasize "parent-child / containment" hierarchy.
    When not to use: Nodes have multiple parents (→ node-graph) · emphasize "center-periphery" (→ hub-spoke) · emphasize "overlap" (→ venn).
    Content expectations: Root node name · second-layer categories (2-4) · instances under each category (2-3) · which branch emphasized (accent).

[broll-structures2.mind-map] C7 · Mind Map · RADIAL DECOMPOSITION
    Purpose: Center theme + 6 first-level branches + 2-3 second-level sub-items each.
    When to use: System breakdown (ML = data / training / eval / deploy / feedback / safety) · knowledge graph · "theme radiates outward".
    When not to use: Strict hierarchy (→ tree) · single chain / linear decomposition (→ flow) · branches > 8.
    Content expectations: Center theme name · 6 first-level branch names · 2-3 second-level sub-items per branch · which first-level branch is hot (accent).

[broll-structures2.matrix-2x2] C8 · Matrix · POSITIONING / QUADRANTS
    Purpose: 2D positioning quadrants — each object one point in appropriate quadrant.
    When to use: Business / product / model positioning · emphasize "which is ideal quadrant" · multiple objects relative positions in 2D.
    When not to use: One dimension (→ spectrum) · dimensions > 2 (split multiple / → mind-map) · want precise data (→ scatter).
    Content expectations: What x / y axes represent · four quadrant labels each · 5-10 objects + quadrant each belongs to · which is "ideal / protagonist".

[broll-structures2.venn] C9 · Venn · INTERSECTION / UNION
    Purpose: Three intersecting circles · center intersection labeled "soul noun" (e.g. AI engineer = software ∩ ML ∩ product).
    When to use: Reveal "X is intersection of A, B, C" · cross-disciplinary / cross-capability role definition · explain composite nature of new role.
    When not to use: Sets > 3 · sets don't intersect (→ stack / grid) · emphasize "containment" not "overlap" (→ concentric).
    Content expectations: 3 set names (CN+EN) · center intersection "what it is" (soul noun) · which set is main circle (accent).

[broll-structures2.layered-stack] C10 · Layered Stack · ARCHITECTURE LAYERS
    Purpose: 7-layer architecture stack (L1 hardware → L7 UI), can specify 2-3 layers as focus.
    When to use: System architecture 7 layers / OSI / AI application stack · emphasize "today we discuss layer X" · want to use word "layer".
    When not to use: Not strict layering (→ concentric / hub-spoke) · horizontal interaction between layers (→ swimlane) · layers ≤ 3 (→ pyramid).
    Content expectations: 7 layer names each (number + CN+EN) · one-sentence note per layer · which 1-2 layers are focus (highlighted).

[broll-structures2.hub-spoke] C11 · Hub & Spoke · CENTRALIZED SYSTEM
    Purpose: Center hub + 6 directional spokes (e.g. AI Agent + tool integrations).
    When to use: Central control + multi-peripheral tool "hub" · emphasize Agent orchestrating multiple tools · "X is center of all Y".
    When not to use: Nodes are equal (→ node-graph) · many-to-many (→ sankey / mind-map) · emphasize "hierarchy" (→ tree).
    Content expectations: Center hub name (e.g. AI Agent) · 6 spoke names (GitHub / Slack / Notion) · which spokes are priority (accent).

[broll-structures2.grid-map] C12 · Grid Map · CLUSTER TOPOLOGY
    Purpose: Large-scale node grid · color maps status (active / idle / error).
    When to use: GPU cluster / service node topology · real-time status monitoring visual · emphasize "scale feel" (dozens of nodes at a glance).
    When not to use: Nodes < 30 (→ node-graph) · nodes have relationship connections (→ node-graph) · status > 3 categories.
    Content expectations: Total node count (recommend 72=12×6) · status categories (active / idle / error) · count per category · main title + one narrative line.


[B-roll · Thinking & organization]

[broll-thinking.compare-table] D1 · Comparison Table · A VS B VS C
    Purpose: Multi-object × multi-dimension comparison table (e.g. Claude / GPT-4 / Gemini × 6 dimensions).
    When to use: 3 objects multi-dimension comparison · each row has "best" item to mark · tabular spec expression.
    When not to use: Only 2 objects (→ versus) · dimensions > 8 (split table) · want narrative feel (→ versus).
    Content expectations: 3 object names · 4-6 comparison dimensions · value per object per row · winner per row (consistent items may skip).

[broll-thinking.swot] D2 · SWOT · STRATEGIC ANALYSIS
    Purpose: 2×2 grid SWOT analysis (Strengths / Weaknesses / Opportunities / Threats).
    When to use: Strategy / product / model SWOT · emphasize "positive and negative sides" · project / business retrospective.
    When not to use: Not SWOT framework (→ compare-table) · single dimension (→ card-grid) · items > 12.
    Content expectations: S / W / O / T each 3-4 items · what is being analyzed (e.g. "our product vs market").

[broll-thinking.fishbone] D3 · Fishbone · ROOT CAUSE ANALYSIS
    Purpose: Horizontal spine (= problem) + 6 cause categories angled in (People/Method/Tools/Environment/Data/Feedback).
    When to use: Incident retrospective / root cause analysis · 6 major cause categories visualized (5M+1E) · emphasize "primary vs secondary cause".
    When not to use: Single causal chain (→ flow) · not cause but classification (→ tree) · categories ≠ 6.
    Content expectations: Problem statement (fish head) · 6 major cause categories (label + 1-3 sub-factors each) · which 1-2 categories are primary (accent).

[broll-thinking.timeline-row] D4 · Timeline · HISTORICAL EVOLUTION
    Purpose: Horizontal timeline + 6 events · alternating cards above/below.
    When to use: Industry evolution (Transformer → GPT-3 → ChatGPT) · company milestones · 6-8 key year events.
    When not to use: Project weekly plan (→ gantt) · not time but steps (→ flow) · events > 10.
    Content expectations: 6-8 events (date + title + one-line description) · which 2-3 are key (accent) · time range (e.g. 2017-2025).

[broll-thinking.gantt] D5 · Gantt · PROJECT TIMELINE
    Purpose: Project schedule — left task column + right week bars.
    When to use: Project plan (roadmap / sprint) · emphasize task parallelism / dependencies · mark key milestones.
    When not to use: Historical events (→ timeline-row) · single task (→ flow) · tasks > 12 rows (split table).
    Content expectations: Time range (e.g. W1-W10) · 6-12 task names + start/end weeks · which are key milestones (accent).

[broll-thinking.kanban] D6 · Kanban · STATUS COLUMNS
    Purpose: 4-column task board (To Do / In Progress / Review / Done).
    When to use: Team sprint status · workflow visualization · emphasize "what's in progress / what's stuck".
    When not to use: Project time dimension (→ gantt) · single task list (→ card-grid) · column count ≠ 4.
    Content expectations: 4 column names (default BACKLOG / IN PROGRESS / REVIEW / DONE) · card count + task names per column · which column is current focus.

[broll-thinking.card-grid] D7 · Card Grid · CONCEPT GALLERY
    Purpose: 4×2 = 8 concept card grid (e.g. 8 prompting techniques).
    When to use: Same-category concept collection ("8 prompting techniques") · want to recommend 1-2 · ~8 peer items.
    When not to use: Concepts have hierarchy / order (→ tree / flow) · item count < 4 or > 12 · items have inconsistent dimensions.
    Content expectations: 8 concept names (CN+EN+number) · subtitle per item (one sentence) · which 1-2 are recommended (accent).


[B-roll · UI Mock]

[broll-ui.terminal] Terminal · CLI MOCK
    Purpose: Simulate CLI terminal window — command text + typewriter cursor + metadata output.
    When to use: Demo CLI tools (claude run / git / curl) · emphasize "code / engineering" feel · paired with CLI teaching.
    When not to use: Demo web UI (→ browser) · demo API call (→ api-call) · only code snippet (→ code-editor).
    Content expectations: Terminal title (e.g. "~/projects/rag-demo · zsh") · command text (realistic) · main response output + tail metadata (tokens / latency / cost) · whether typewriter animation.

[broll-ui.chat-thread] Chat Thread · LLM CONVERSATION
    Purpose: Simulate LLM conversation — user bubble / AI bubble left-right dialogue.
    When to use: Demo prompt → response · LLM conversation teaching · highlight "conversational feel".
    When not to use: Demo API (→ api-call) · demo CLI (→ terminal) · multi-person collaboration (→ sequence).
    Content expectations: User question content · AI answer content · follow-up / multi-turn (recommend 2-3 turns) · waiting cursor (streaming response).

[broll-ui.browser] Browser · URL + VIEWPORT
    Purpose: Simulate browser window — tabs + URL + viewport content.
    When to use: Demo web product (claude.ai etc.) · URL + page content both emphasized · multi-tab scenario.
    When not to use: Desktop app (→ terminal / code-editor) · no URL (→ placeholder) · only emphasize input field (→ api-call).
    Content expectations: Current URL (without https://) · 3 tab titles (which selected) · main title + CTA copy in viewport · whether LIVE label.

[broll-ui.code-editor] Code Editor · SYNTAX HIGHLIGHTED
    Purpose: Code editor — optional file tree + line numbers + highlight current line.
    When to use: Demo code snippet (Python / JS / SQL) · teach how to call API · highlight one line for explanation.
    When not to use: Command-line operations (→ terminal) · demo request/response (→ api-call) · not real code (→ placeholder).
    Content expectations: Filename + language (e.g. rag.py · Python 3.12) · ≤ 6 lines real runnable code · which line highlighted · whether sidebar file tree needed.

[broll-ui.api-call] API Call · Request / Response · REST · JSON
    Purpose: Left-right dual panel simulating REST API — request + latency + response.
    When to use: Demo API call structure · emphasize latency number (teaching credibility) · JSON field mapping.
    When not to use: Demo frontend UI (→ browser) · demo full code (→ code-editor) · not REST but SDK (→ code-editor).
    Content expectations: Request method + path (e.g. POST /v1/messages) · request body (real JSON) · response status code + body · latency (real milliseconds) · which response field is focus.

[broll-ui.dashboard] Dashboard · LIVE METRICS
    Purpose: Simulate real-time monitoring dashboard — multi KPI cards + long sparkline card.
    When to use: Real-time monitoring / performance dashboard · show multiple KPIs + trends simultaneously · demo ops / SRE scenario.
    When not to use: Single KPI (→ gauge) · detailed data chart (→ broll-charts.*) · static report (→ sparkline).
    Content expectations: 3 KPI cards (label + main number + unit) · which is hot (accent) · bottom sparkline data (24h time series) · whether LIVE label.


[Icons & illustrations]

[icons.lucide-set] I-2 · Curated Icon Set · 48 icons · CURATED SET
    Purpose: 48 curated from Lucide 1500+ icons, referenceable by ID in spec.
    When to use: UI information layer / footnotes / node labels / list prefixes · card title decoration · input prefix (search / mail).
    When not to use: Decorative icons > 48px (→ illustration) · hand-drawn style icons · mixing multiple icon sets on same screen.
    Content expectations: Icon ID (e.g. `zap` / `database` / `bot`) · usage context (node / label / title) · if insufficient, search lucide.dev on the fly (pass name directly).
    Available icons (48, by group):
        - People/communication: user · users · message-circle · mic · mail · phone · hand · user-cog
        - Data/system: database · cloud · cpu · hard-drive · network · git-branch · workflow · layers
        - AI/tools: bot · brain · wand-sparkles · zap · terminal · code · function-square · plug
        - Documents/content: file-text · book-open · notebook-pen · bookmark · quote · list-checks · tag · folder-open
        - Action/status: rocket · target · compass · search · check-circle-2 · triangle-alert · x-circle · help-circle
        - Metrics/time: line-chart · bar-chart-3 · pie-chart · timer · calendar · gauge · trending-up · shield-check

[icons.stroke-weights] I-1 · Stroke Weights · 4 tiers · STROKE WEIGHTS
    Purpose: Lucide icons support 4 stroke weight tiers, with agreed usage contexts.
    When to use: Generally don't specify (default mid tier) · only when need "extra thin / extra heavy".
    When not to use: Mix 3+ tiers on same screen · default to visual enrichment stage · directly anchor semantics.
    Content expectations: Usually no need to specify · if needed: note "this shot needs heavy icon" or "needs ultra-thin icon".

[illustrations.scene-thinking] 01 · Deep Thinking · DEEP THINKING · SEATED + LIGHTBULB
    Purpose: Seated figure chin in hand + thought bubble + lightbulb decoration, for "inspiration / thinking" cover.
    When to use: "Inspiration / thinking" theme chapter cover · introducing methodology / ideas content.
    When not to use: Team / collaboration theme (→ scene-co-create) · not chapter cover shot (illustrations limited to covers).
    Content expectations: Chapter title (CN+EN) · whether chapter number / subhead needed · chapter core argument (one sentence).

[illustrations.scene-co-create] 02 · Co-create · CO-CREATE · TWO PEEPS + SCREEN
    Purpose: Two people viewing screen together + one pointing one arms crossed, for "team / collaboration" cover.
    When to use: "Team / collaboration" theme chapter cover · emphasize "co-creation / shared view".
    When not to use: Solo theme (→ scene-thinking / scene-prompt) · not chapter cover shot.
    Content expectations: Chapter title (CN+EN) · chapter core argument.

[illustrations.scene-prompt] 03 · Prompt Craft · PROMPT CRAFT · STANDING + TERMINAL
    Purpose: Standing figure + pointing at terminal window + floating symbols, for "prompt engineering" cover.
    When to use: "Prompt engineering / writing commands" chapter · emphasize "human actively constructing".
    When not to use: RAG / retrieval theme (→ scene-retrieval) · not chapter cover shot.
    Content expectations: Chapter title (CN+EN) · chapter core argument.

[illustrations.scene-retrieval] 04 · Retrieval · RETRIEVAL · RAG · MAGNIFIER + FILE CABINET
    Purpose: Standing figure with magnifier + file cabinet (middle drawer pulled), for "RAG / retrieval" cover.
    When to use: "RAG / retrieval" chapter cover · emphasize "look up files / dig through materials".
    When not to use: Data analysis theme (→ scene-analytics) · not chapter cover shot.
    Content expectations: Chapter title (CN+EN) · chapter core argument.

[illustrations.scene-analytics] 05 · Analytics · ANALYTICS · WHITEBOARD + UPWARD CURVE
    Purpose: Standing figure + whiteboard upward curve + bars, for "data analysis / retrospective" cover.
    When to use: "Data analysis / retrospective" chapter cover · emphasize "look at curve / upward trend".
    When not to use: Launch / release theme (→ scene-launch) · not chapter cover shot.
    Content expectations: Chapter title (CN+EN) · chapter core argument.

[illustrations.scene-launch] 06 · Launch · LAUNCH · WAVE + ROCKET TRAIL
    Purpose: Waving figure + rocket along dashed arc flying upper-right, for "launch / release" cover.
    When to use: "Launch / release" chapter cover (common at video end) · emphasize "success / departure".
    When not to use: Thinking theme (→ scene-thinking) · not chapter cover shot.
    Content expectations: Chapter title (CN+EN) · chapter core argument (often used for video close).

[illustrations.scene-library] I-3 · Scene Illustration Library · 6 SCENES · OPEN PEEPS STYLE
    Purpose: Unified spec for 6 scene illustrations — for chapter covers.
    When to use: Chapter cover (one per chapter) · need hand-drawn figure + main prop shot.
    When not to use: Not chapter cover (illustrations limited to covers) · multiple illustrations on one screen (max 1 per screen).
    Content expectations: Pick one from 6 (scene-thinking / scene-co-create / scene-prompt / scene-retrieval / scene-analytics / scene-launch) · if theme doesn't match, fallback to broll-hero.big-type.


[Component Selection Decision Tree]

```
What to show?
├── Numbers / trends / proportions           → broll-charts.* (12)
├── Steps / decisions / states / collaboration → broll-flows.* (8)
├── Hierarchy / classification / topology    → broll-structure.* (6) + broll-structures2.* (7)
├── Comparison / analysis / timeline         → broll-thinking.* (7)
├── Software UI / terminal / conversation    → broll-ui.* (6)
├── Abstract concepts (no concrete icon)     → broll-abstract.* (7)
├── Hero emphasis / big type / quote / flash → broll-hero.* (4)
├── On-camera overlay (subtitles / stickers / concept cards) → aroll.* (3)
├── Chapter cover (hand-drawn figure + prop) → illustrations.* (7)
├── UI small icons                           → icons.* (2)
└── Missing asset fallback                   → broll-abstract.placeholder
```

Total 69 components · 11 namespaces.
