/* Organized Konfusion game (NYC map, Queens: South Jamaica). Five small animated SVGs, 400 x 260. CSS classes are prefixed "okf-".
   1. The Q40 stop at 142 St & Foch Blvd: the bus pulling in at the blue stop sign, two-family houses with awnings behind.
   2. The Center in St. Albans: the first show, back when they were the Simply II Positive MCs. Small stage, two mics, the hand-painted banner, spotlights.
   3. The demo session: the sampler with its pads, the reel-to-reel turning, the cassette marked DEMO and the tape label PAUL C (he produced their first demo).
   4. Summer on the block ("Walk Into the Sun"): the stoop, the johnny-pump spraying, kites up high, the big sun.
   5. 155 St and 108 Av, South Jamaica: green signs, ORGANIZED KONFUSION on the wall, and behind it the Art Deco P.S. 48
      (the William Wordsworth School, South Jamaica's first city landmark): two-tone brick piers, terra-cotta plaques, bronze doors. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes okf-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.okf-flk{animation:okf-flick 2.4s infinite}.okf-flk2{animation-delay:1.1s}' +
    '@keyframes okf-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.okf-spin{transform-box:fill-box;transform-origin:50% 50%;animation:okf-spin 2s linear infinite}' +
    '@keyframes okf-sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.okf-sw{transform-box:fill-box;transform-origin:50% 0;animation:okf-sweep 3s ease-in-out infinite}.okf-sw2{animation-delay:-1.5s}' +
    '@keyframes okf-pad{0%,100%{opacity:.35}50%{opacity:1}}.okf-pad{animation:okf-pad .8s ease-in-out infinite}.okf-pad2{animation-delay:-.2s}.okf-pad3{animation-delay:-.4s}.okf-pad4{animation-delay:-.6s}' +
    '@keyframes okf-kite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(8px,-6px) rotate(6deg)}}.okf-kite{transform-box:fill-box;transform-origin:50% 100%;animation:okf-kite 2.6s ease-in-out infinite}.okf-kite2{animation-delay:-1.3s}' +
    '@keyframes okf-drop{0%{transform:translate(0,0);opacity:1}100%{transform:translate(46px,40px);opacity:0}}.okf-drop{animation:okf-drop 1.1s linear infinite}.okf-d2{animation-delay:-.35s}.okf-d3{animation-delay:-.7s}' +
    '@keyframes okf-sun{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}.okf-sun{transform-box:fill-box;transform-origin:50% 50%;animation:okf-sun 3s ease-in-out infinite}' +
    '@keyframes okf-car{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.okf-car{animation:okf-car 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const SUN = "#ff6b3d", GOLD = "#ffd23f", VIO = "#7a5cff", CREAM = "#f7f3ea", SIGN = "#0f6b3a", BUS = "#0039a6";
  /* a two-family frame house with an awning and a stoop */
  const house = (x, w, col, roof, aw) => '<rect x="' + x + '" y="84" width="' + w + '" height="84" fill="' + col + '"/><path d="M' + (x - 4) + ' 86l' + (w / 2 + 4) + '-24l' + (w / 2 + 4) + ' 24z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 8) + '" y="94" width="14" height="16" fill="#ffd98a" class="okf-flk"/><rect x="' + (x + w - 22) + '" y="94" width="14" height="16" fill="#cfe6f5"/>' +
    '<rect x="' + (x + 8) + '" y="124" width="14" height="16" fill="#cfe6f5"/><rect x="' + (x + w - 22) + '" y="124" width="14" height="16" fill="#ffd98a" opacity=".8"/>' +
    '<path d="M' + (x + 4) + ' 118h' + (w - 8) + 'l-3 7H' + (x + 7) + 'z" fill="' + aw + '"/><path d="M' + (x + 6) + ' 118v7M' + (x + 14) + ' 118v7M' + (x + 22) + ' 118v7M' + (x + 30) + ' 118v7M' + (x + 38) + ' 118v7" stroke="#fff" stroke-width="2" opacity=".6"/>';

  /* 1. The Q40 at 142 St & Foch Blvd */
  function q40() {
    let win = "";
    for (let x = 30; x < 230; x += 36) win += '<rect x="' + x + '" y="148" width="26" height="22" rx="2" fill="#9fc6e0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#okf1)"/>' + '<circle cx="70" cy="44" r="20" fill="#ffe4a0" opacity=".9"/>' +
      house(4, 70, "#c9b89a", "#5a4636", "#2f6b4a") + house(82, 64, "#8fa3b5", "#3d4652", "#8a2b2b") + house(154, 70, "#d7c4a2", "#4a3a30", "#2b4f8a") + house(232, 62, "#a8806a", "#4a3a30", "#2f6b4a") +
      '<rect x="0" y="166" width="400" height="18" fill="#8a8c90"/><rect x="0" y="182" width="400" height="4" fill="#5f6166"/><rect x="0" y="186" width="400" height="74" fill="#2f3138"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="138" width="270" height="62" rx="6" fill="#e9edf2" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="176" width="270" height="6" fill="' + BUS + '"/>' +
        '<rect x="258" y="144" width="18" height="40" rx="2" fill="#9fc6e0"/>' +
        '<rect x="160" y="140" width="92" height="12" rx="2" fill="#111"/><text x="206" y="149.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">Q40 S JAMAICA</text>' +
        '<circle cx="60" cy="202" r="11" fill="#111"/><circle cx="60" cy="202" r="4" fill="#888"/><circle cx="230" cy="202" r="11" fill="#111"/><circle cx="230" cy="202" r="4" fill="#888"/>' +
        '<circle cx="276" cy="190" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2f3138"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<text x="120" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="' + CREAM + '" letter-spacing="3">142 STREET</text>' +
      '<rect x="331" y="96" width="4" height="114" fill="#9aa3ab"/>' +
      '<rect x="306" y="46" width="54" height="56" rx="4" fill="' + BUS + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="333" y="62" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text>' +
      '<rect x="312" y="68" width="42" height="22" rx="3" fill="#fff"/><text x="333" y="85" text-anchor="middle" ' + font + ' font-size="15" fill="' + BUS + '">Q40</text>' +
      '<rect x="308" y="112" width="74" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="345" y="124" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">142 St</text>' +
      '<rect x="300" y="130" width="90" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="345" y="142" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Foch Blvd</text>',
      sky("okf1", "#4a6fa8", "#f4c58a"));
  }

  /* 2. The Center in St. Albans: the first show */
  function center() {
    let chairs = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 9; i++) { const x = 24 + i * 42 + r * 20, y = 214 + r * 22; chairs += '<rect x="' + x + '" y="' + y + '" width="22" height="5" rx="1" fill="#2a2a33"/><rect x="' + (x + 2) + '" y="' + (y - 14) + '" width="18" height="14" rx="2" fill="#33333d"/><path d="M' + (x + 3) + ' ' + (y + 5) + 'v12M' + (x + 19) + ' ' + (y + 5) + 'v12" stroke="#2a2a33" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#17131f"/>' +
      /* the wall with the painted banner */
      '<rect x="0" y="0" width="400" height="150" fill="#3a2f4a"/>' + (() => { let b = ""; for (let y = 10; y < 150; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33293f" stroke-width="1"/>'; return b; })() +
      '<path d="M56 22h288l-6 8 6 8H56l6-8z" fill="' + CREAM + '"/>' +
      '<text x="200" y="35" text-anchor="middle" font-family="Permanent Marker, Sedgwick Ave Display, cursive" font-size="13" fill="' + VIO + '">SIMPLY II POSITIVE MC\'S</text>' +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">THE CENTER · ST. ALBANS</text>' +
      /* spotlights sweeping */
      '<g class="okf-sw"><path d="M110 0l-40 150h80z" fill="' + GOLD + '" opacity=".16"/></g><g class="okf-sw okf-sw2"><path d="M290 0l-40 150h80z" fill="' + SUN + '" opacity=".16"/></g>' +
      '<rect x="100" y="0" width="20" height="10" fill="#222"/><rect x="280" y="0" width="20" height="10" fill="#222"/>' +
      /* the stage, speakers and two mics */
      '<rect x="40" y="150" width="320" height="26" fill="#5a3b28"/><rect x="40" y="150" width="320" height="4" fill="#7a5238"/>' +
      '<rect x="44" y="96" width="40" height="54" fill="#141414"/><circle cx="64" cy="112" r="9" fill="#2a2a2a" stroke="#555"/><circle cx="64" cy="136" r="12" fill="#2a2a2a" stroke="#555"/>' +
      '<rect x="316" y="96" width="40" height="54" fill="#141414"/><circle cx="336" cy="112" r="9" fill="#2a2a2a" stroke="#555"/><circle cx="336" cy="136" r="12" fill="#2a2a2a" stroke="#555"/>' +
      '<path d="M170 150v-50M230 150v-50" stroke="#aaa" stroke-width="2.5"/><path d="M162 150h16M222 150h16" stroke="#aaa" stroke-width="2.5"/>' +
      '<rect x="166" y="88" width="8" height="14" rx="4" fill="#cfd4da"/><rect x="226" y="88" width="8" height="14" rx="4" fill="#cfd4da"/>' +
      '<circle cx="170" cy="86" r="5" fill="#888"/><circle cx="230" cy="86" r="5" fill="#888"/>' +
      '<path d="M170 102q-6 30 10 48M230 102q8 30-8 48" stroke="#111" stroke-width="1.5" fill="none"/>' +
      /* folding chairs */
      '<rect x="0" y="176" width="400" height="84" fill="#221c2b"/>' + chairs,
      "");
  }

  /* 3. The demo session with Paul C */
  function demo() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 8; i++) pads += '<rect class="okf-pad okf-pad' + ((i + r) % 4 + 1) + '" x="' + (34 + i * 20) + '" y="' + (196 + r * 18) + '" width="14" height="12" rx="2" fill="' + ((i + r) % 3 ? "#d9dde2" : SUN) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2b2622"/>' +
      /* wood paneling and egg-crate foam */
      (() => { let b = '<rect x="0" y="0" width="400" height="150" fill="#5a3e2a"/>'; for (let x = 0; x < 400; x += 22) b += '<path d="M' + x + ' 0v150" stroke="#4a3222" stroke-width="2"/>'; return b; })() +
      (() => { let f = '<rect x="230" y="18" width="150" height="104" fill="#3a3a44"/>'; for (let y = 24; y < 120; y += 12) for (let x = 236; x < 376; x += 12) f += '<path d="M' + x + ' ' + (y + 6) + 'q6-10 12 0q-6 10-12 0z" fill="#4a4a56"/>'; return f; })() +
      /* the cassette marked DEMO pinned on the wall */
      '<rect x="40" y="30" width="92" height="58" rx="4" fill="#1d1d1d"/><rect x="48" y="36" width="76" height="28" rx="2" fill="' + CREAM + '"/><text x="86" y="48" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="' + VIO + '">DEMO</text><text x="86" y="60" text-anchor="middle" ' + font + ' font-size="6.5" fill="#333">SIMPLY II POSITIVE</text>' +
      '<circle cx="68" cy="76" r="7" fill="#eee"/><circle cx="104" cy="76" r="7" fill="#eee"/><circle cx="68" cy="76" r="3" fill="#1d1d1d"/><circle cx="104" cy="76" r="3" fill="#1d1d1d"/>' +
      /* the reel-to-reel */
      '<rect x="150" y="20" width="70" height="120" rx="4" fill="#26262c"/>' +
      '<g class="okf-spin"><circle cx="185" cy="48" r="20" fill="#c0c4cc"/><circle cx="185" cy="48" r="6" fill="#333"/><path d="M185 28v40M165 48h40" stroke="#888" stroke-width="2.5"/></g>' +
      '<g class="okf-spin"><circle cx="185" cy="102" r="20" fill="#c0c4cc"/><circle cx="185" cy="102" r="6" fill="#333"/><path d="M185 82v40M165 102h40" stroke="#888" stroke-width="2.5"/></g>' +
      '<path d="M205 48q12 27 0 54" stroke="#5a3a1a" stroke-width="2" fill="none"/>' +
      '<rect x="160" y="126" width="50" height="10" rx="1" fill="' + CREAM + '"/><text x="185" y="134" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="8" fill="#222">PAUL C</text>' +
      /* the table and the sampler */
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a20"/><rect x="0" y="150" width="400" height="6" fill="#6b4630"/>' +
      '<rect x="22" y="170" width="190" height="76" rx="4" fill="#8f949b" stroke="#555a61" stroke-width="2"/><rect x="30" y="176" width="70" height="14" rx="2" fill="#1b2b1b"/><text x="34" y="186.5" ' + font + ' font-size="8" fill="#7dff7a">SAMPLE 01</text>' +
      '<circle cx="120" cy="183" r="5" fill="#555"/><circle cx="138" cy="183" r="5" fill="#555"/><circle cx="156" cy="183" r="5" fill="#555"/><circle cx="174" cy="183" r="5" fill="#555"/>' + pads +
      /* a stack of records and headphones */
      '<rect x="240" y="196" width="140" height="10" fill="#111"/><rect x="244" y="186" width="132" height="10" fill="#1a1a1a"/><circle cx="310" cy="191" r="4" fill="' + SUN + '"/>' +
      '<path d="M260 178q30-34 60 0" stroke="#222" stroke-width="5" fill="none"/><rect x="252" y="172" width="14" height="16" rx="4" fill="#333"/><rect x="314" y="172" width="14" height="16" rx="4" fill="#333"/>',
      "");
  }

  /* 4. Summer on the block: Walk Into the Sun */
  function stoop() {
    return svg(
      '<rect width="400" height="260" fill="url(#okf4)"/>' +
      '<g class="okf-sun"><circle cx="300" cy="64" r="40" fill="' + SUN + '" opacity=".35"/><circle cx="300" cy="64" r="28" fill="' + GOLD + '"/></g>' +
      /* kites up high */
      '<g class="okf-kite"><path d="M90 22l14 16-14 18-14-18z" fill="' + VIO + '"/><path d="M90 56q-6 14 4 24q-8 10 0 22" stroke="#fff" stroke-width="1" fill="none"/></g>' +
      '<g class="okf-kite okf-kite2"><path d="M190 40l11 13-11 14-11-14z" fill="' + SUN + '"/><path d="M190 67q6 12-2 22" stroke="#fff" stroke-width="1" fill="none"/></g>' +
      /* the row of brick houses with the stoop */
      '<rect x="0" y="96" width="230" height="110" fill="#8a4b3a"/>' + (() => { let b = ""; for (let y = 102; y < 206; y += 8) b += '<path d="M0 ' + y + 'h230" stroke="#7a3f30" stroke-width="1"/>'; return b; })() +
      '<rect x="18" y="108" width="26" height="30" fill="#cfe6f5"/><rect x="70" y="108" width="26" height="30" fill="#cfe6f5"/><rect x="150" y="108" width="26" height="30" fill="#cfe6f5"/><rect x="190" y="108" width="26" height="30" fill="#ffd98a"/>' +
      '<rect x="104" y="140" width="34" height="50" fill="#3a2a22"/><path d="M96 190h50v8H90zM88 198h62v8H82zM80 206h74v8H74z" fill="#b8b0a4"/><path d="M90 190v-24M152 206v-40" stroke="#222" stroke-width="2"/>' +
      /* sidewalk, street, the boombox on the stoop */
      '<rect x="0" y="206" width="400" height="16" fill="#a6a8ac"/><rect x="0" y="222" width="400" height="38" fill="#3a3c42"/>' +
      '<rect x="98" y="178" width="40" height="18" rx="3" fill="#222"/><circle cx="108" cy="187" r="6" fill="#555"/><circle cx="128" cy="187" r="6" fill="#555"/><rect x="104" y="172" width="28" height="4" fill="#222"/>' +
      /* the johnny-pump, spraying */
      '<rect x="262" y="186" width="16" height="22" rx="3" fill="#ffd23f" stroke="#8a6a00" stroke-width="1.5"/><rect x="258" y="182" width="24" height="6" rx="2" fill="#ffd23f" stroke="#8a6a00"/><circle cx="270" cy="180" r="5" fill="#ffd23f" stroke="#8a6a00"/><rect x="276" y="192" width="8" height="6" fill="#ffd23f" stroke="#8a6a00"/>' +
      '<path d="M284 195q40-16 76 20" stroke="#8fd8ff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>' +
      '<g class="okf-drop"><circle cx="300" cy="190" r="2.5" fill="#cfefff"/></g><g class="okf-drop okf-d2"><circle cx="310" cy="186" r="2" fill="#cfefff"/></g><g class="okf-drop okf-d3"><circle cx="294" cy="192" r="2.5" fill="#cfefff"/></g>' +
      '<ellipse cx="350" cy="232" rx="40" ry="6" fill="#6fa8c8" opacity=".5"/>',
      sky("okf4", "#6fc3f0", "#ffe6b0"));
  }

  /* 5. 155 St and 108 Av, with the Art Deco P.S. 48 behind */
  function corner() {
    let ps = '<rect x="20" y="40" width="300" height="112" fill="#c99a6a"/>';
    /* piers in darker brick with leafy terra-cotta caps, tall multi-pane windows between */
    for (let i = 0; i < 7; i++) {
      const x = 20 + i * 48;
      ps += '<rect x="' + x + '' + '" y="40" width="14" height="112" fill="#8a5a3a"/><rect x="' + (x + 2) + '" y="34" width="10" height="10" fill="#e3c99a"/><path d="M' + (x + 4) + ' 38q3-6 6 0" stroke="#7a8a4a" stroke-width="1.5" fill="none"/>';
      if (i < 6) { ps += '<rect x="' + (x + 18) + '" y="54" width="26" height="80" fill="#2e3a48"/>'; for (let yy = 58; yy < 132; yy += 9) ps += '<rect x="' + (x + 20) + '" y="' + yy + '" width="10" height="7" fill="#ffd98a" opacity="' + ((yy + i) % 3 ? ".35" : ".7") + '"/><rect x="' + (x + 32) + '" y="' + yy + '" width="10" height="7" fill="#ffd98a" opacity=".35"/>'; }
    }
    /* the two-tone terra-cotta plaques and the granite entrance with bronze doors */
    ps += '<rect x="20" y="40" width="300" height="12" fill="#e3c99a"/><rect x="134" y="52" width="72" height="100" fill="#d8d2c4"/><rect x="146" y="98" width="48" height="54" fill="#8a6a2a"/><path d="M170 98v54" stroke="#5a4418" stroke-width="2"/>' +
      '<rect x="146" y="70" width="48" height="22" fill="#c7a13a" opacity=".85"/><path d="M152 81l18-8 18 8-18 8z" fill="#8a6a2a"/>' +
      '<rect x="140" y="56" width="60" height="10" fill="#e3c99a"/><text x="170" y="64" text-anchor="middle" ' + font + ' font-size="7" fill="#5a4418">PUBLIC SCHOOL</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#okf5)"/>' + stars(12) + ps +
      '<g class="okf-car"><rect x="0" y="140" width="62" height="14" rx="5" fill="' + VIO + '"/><rect x="12" y="134" width="32" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="155" r="4.5" fill="#111"/><circle cx="50" cy="155" r="4.5" fill="#111"/></g>' +
      /* the wall */
      '<rect x="0" y="156" width="300" height="74" fill="#4f5a66"/>' + (() => { let b = ""; for (let y = 162; y < 230; y += 8) b += '<path d="M0 ' + y + 'h300" stroke="#45505b" stroke-width="1"/>'; return b; })() +
      tag("ORGANIZED", 10, 194, 30, SUN, -4) + tag("KONFUSION", 40, 224, 30, GOLD, -4) + tag("ORGANISMS", 196, 182, 16, CREAM, -6) + tag("SOUTH SIDE", 214, 214, 14, VIO, -3) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="312" y="98" width="84" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="354" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">155 St</text>' +
      '<rect x="312" y="124" width="84" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="354" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">108 Av</text>' +
      '<circle class="okf-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>',
      sky("okf5", "#0d0b1e", "#3b2f58"));
  }

  window.SCENES = { q40: q40, center: center, demo: demo, stoop: stoop, corner: corner };
})();
