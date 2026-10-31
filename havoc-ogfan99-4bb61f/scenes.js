/* Queens Plaza / Long Island City opening scenes for the Havoc game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;transform-origin:200px 92px;animation:spin 12s linear infinite}.hand2{animation-duration:90s}' +
    '@keyframes cars{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '.car{animation:cars 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes roll{from{transform:translateX(-340px)}to{transform:translateX(440px)}}' +
    '.rl{animation:roll 9s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes pad{0%,70%,100%{opacity:.18}10%,30%{opacity:1}}' +
    '.pd{animation:pad 1.6s steps(1) infinite}.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}15%{transform:scale(1.12)}}' +
    '.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .8s ease-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BONE = "#f2efe6", AMBER = "#e4a93a", BLUE = "#5aa9e6", EBLUE = "#0039a6", ORANGE = "#ff6319", YEL = "#fccc0a";

  /* 1. E train pulling into Queens Plaza, underground on the Queens Boulevard line (E, M, R) */
  function train() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#c9cfc8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#c9cfc8" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [26, 374].forEach(x => { cols += '<rect x="' + (x - 7) + '" y="0" width="14" height="186" fill="#26303a"/><rect x="' + (x - 7) + '" y="0" width="14" height="4" fill="' + AMBER + '"/>'; });
    return svg(
      '<rect width="400" height="176" fill="#e3e7df"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      /* tile trim band */
      '<rect x="0" y="22" width="400" height="10" fill="#2f5d50"/><rect x="0" y="32" width="400" height="3" fill="#1b3a31"/>' +
      /* station sign with E M R */
      '<rect x="56" y="46" width="288" height="36" rx="4" fill="#111"/><rect x="56" y="46" width="288" height="4" fill="#fff"/>' +
      '<text x="70" y="72" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Queens Plaza</text>' +
      bullet(270, 65, "E", EBLUE) + bullet(296, 65, "M", ORANGE) + bullet(322, 65, "R", YEL, true) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + EBLUE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' +
        bullet(292, 132, "E", EBLUE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#14171c"/>' + cols +
      tag("HAV", 44, 242, 34, BLUE, -5) + tag("DUNN", 262, 242, 32, AMBER, -8),
      "");
  }

  /* 2. The Queens Plaza Clock Tower: the white Bank of Manhattan building, four lit clock faces, hands turning, traffic below */
  function clock() {
    let win = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) win += '<rect x="' + (176 + c * 13) + '" y="' + (126 + r * 15) + '" width="7" height="9" fill="' + ((r * 3 + c) % 4 ? "#2a3240" : "#ffd98a") + '"/>';
    let low = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) { low += '<rect x="' + (98 + c * 13) + '" y="' + (168 + r * 14) + '" width="7" height="8" fill="' + ((r + c) % 3 ? "#2a3240" : "#ffd98a") + '"/>'; low += '<rect x="' + (246 + c * 13) + '" y="' + (168 + r * 14) + '" width="7" height="8" fill="' + ((r + c) % 3 ? "#ffd98a" : "#2a3240") + '"/>'; }
    /* LIC glass towers behind */
    const towers = '<rect x="10" y="70" width="44" height="170" fill="#1f3b44"/><rect x="58" y="104" width="30" height="136" fill="#26323f"/>' +
      '<rect x="318" y="60" width="40" height="180" fill="#1f3b44"/><rect x="360" y="96" width="34" height="144" fill="#26323f"/>' +
      [[16, 80], [26, 96], [40, 120], [324, 72], [338, 100], [366, 112], [374, 140]].map(([x, y]) => '<rect class="flk" x="' + x + '" y="' + y + '" width="6" height="4" fill="#9fd6ff" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(22) + towers +
      /* lower wings */
      '<rect x="92" y="160" width="72" height="80" fill="#e9e5da"/><rect x="236" y="160" width="72" height="80" fill="#dcd7ca"/>' + low +
      /* main white tower */
      '<rect x="168" y="116" width="64" height="124" fill="' + BONE + '"/><rect x="164" y="112" width="72" height="6" fill="#d9d3c4"/>' + win +
      /* clock stage */
      '<rect x="174" y="66" width="52" height="48" fill="#ece8de" stroke="#c9c2b2" stroke-width="1.5"/>' +
      '<circle cx="200" cy="92" r="18" fill="#fff7d6" stroke="#2a2a2a" stroke-width="2.5"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => { const a = i * Math.PI / 6; return '<rect x="' + (200 + Math.sin(a) * 14.5 - 1) + '" y="' + (92 - Math.cos(a) * 14.5 - 1) + '" width="2" height="2" fill="#2a2a2a"/>'; }).join("") +
      '<path class="hand" d="M200 92V78" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>' +
      '<path class="hand hand2" d="M200 92h9" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="200" cy="92" r="2" fill="' + AMBER + '"/>' +
      /* cupola and spire */
      '<rect x="182" y="46" width="36" height="20" fill="#e6e1d5"/><rect x="186" y="50" width="6" height="12" fill="#2a3240"/><rect x="197" y="50" width="6" height="12" fill="#ffd98a"/><rect x="208" y="50" width="6" height="12" fill="#2a3240"/>' +
      '<path d="M180 46h40l-20-22z" fill="#d9d3c4"/><rect x="199" y="12" width="2" height="14" fill="#d9d3c4"/>' +
      '<circle class="flk" cx="200" cy="12" r="2.2" fill="#ff4f5e"/>' +
      /* glow on the face */
      '<circle cx="200" cy="92" r="26" fill="#fff2b0" opacity=".12"/>' +
      /* street + cars */
      '<rect x="0" y="236" width="400" height="24" fill="#111418"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car"><rect x="0" y="238" width="34" height="9" rx="3" fill="#ffcf3d"/><circle cx="31" cy="242" r="1.6" fill="#fff6c2"/></g>' +
      '<g class="car car2"><rect x="0" y="250" width="34" height="9" rx="3" fill="#c9ced6"/><circle cx="31" cy="254" r="1.6" fill="#fff6c2"/></g>' +
      tag("QUEENS PLAZA", 20, 30, 20, AMBER, -4),
      sky("gc", "#070b16", "#22324d"));
  }

  /* 3. Sunnyside Yard: tracks fanning out, catenary gantries, parked trains, one rolling through, Manhattan far behind */
  function yard() {
    let gantries = "";
    for (let x = 20; x < 400; x += 90) gantries += '<rect x="' + x + '" y="96" width="4" height="96" fill="#3a4654"/><path d="M' + (x - 30) + ' 104h64" stroke="#3a4654" stroke-width="3"/><path d="M' + (x - 30) + ' 110h64" stroke="#3a4654" stroke-width="1"/>';
    let wires = '<path d="M0 108h400M0 114h400" stroke="#5a6676" stroke-width="1"/>';
    let rails = "";
    [196, 214, 236].forEach(y => { rails += '<path d="M0 ' + y + 'h400" stroke="#6b5a4a" stroke-width="2"/><path d="M0 ' + (y + 6) + 'h400" stroke="#6b5a4a" stroke-width="2"/>'; for (let x = 0; x < 400; x += 10) rails += '<rect x="' + x + '" y="' + (y - 1) + '" width="4" height="9" fill="#3b2f26" opacity=".6"/>'; });
    const car = (x, y, w, stripe, lit) => {
      let o = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="4" fill="#bfc6cf" stroke="#5b6470" stroke-width="1.5"/>' +
        '<rect x="' + x + '" y="' + (y + 18) + '" width="' + w + '" height="3" fill="' + stripe + '"/>';
      for (let i = x + 6; i < x + w - 12; i += 16) o += '<rect x="' + i + '" y="' + (y + 5) + '" width="10" height="8" rx="1" fill="' + (lit ? "#fff2b0" : "#3a4654") + '"/>';
      return o;
    };
    const skyline = '<g fill="#2b3a52">' +
      '<rect x="40" y="120" width="20" height="40"/><rect x="66" y="110" width="16" height="50"/>' +
      /* Empire State shape */
      '<rect x="108" y="106" width="26" height="54"/><rect x="112" y="96" width="18" height="10"/><rect x="116" y="88" width="10" height="8"/><rect x="120" y="72" width="2" height="16"/>' +
      /* Chrysler shape */
      '<rect x="168" y="108" width="20" height="52"/><path d="M168 108l10-22 10 22z"/><rect x="177" y="76" width="2" height="12"/>' +
      '<rect x="210" y="116" width="24" height="44"/><rect x="246" y="102" width="18" height="58"/><rect x="290" y="112" width="30" height="48"/><rect x="336" y="122" width="22" height="38"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gy)"/>' + stars(14) +
      '<circle cx="330" cy="40" r="14" fill="#fff4d8" opacity=".9"/>' + skyline +
      '<rect x="0" y="160" width="400" height="100" fill="#2a2620"/>' +
      gantries + wires + rails +
      /* parked trains */
      car(10, 168, 120, "#c8102e", false) + car(136, 168, 120, "#0039a6", false) + car(262, 168, 130, "#7a2a8c", false) +
      /* yard light tower */
      '<rect x="356" y="60" width="4" height="108" fill="#3a4654"/><rect x="346" y="56" width="24" height="8" fill="#3a4654"/>' +
      '<rect class="flk" x="348" y="57" width="20" height="5" fill="#fff6c2"/>' +
      /* rolling train on the near track */
      '<g class="rl">' + car(0, 206, 150, AMBER, true) + car(156, 206, 150, AMBER, true) + '<circle cx="302" cy="226" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#1a1712"/>' +
      tag("SUNNYSIDE YARD", 22, 44, 22, BONE, -4),
      sky("gy", "#0a0f1e", "#3b3550"));
  }

  /* 4. The beat lab: drum machine pads lighting up in sequence, crates of records, turntable spinning, speakers thumping */
  function lab() {
    let foam = "";
    for (let y = 0; y < 150; y += 16) for (let x = 0; x < 400; x += 16) foam += '<path d="M' + x + ' ' + (y + 16) + 'l8-16 8 16z" fill="' + ((x / 16 + y / 16) % 2 ? "#141925" : "#10141e") + '"/>';
    let pads = "", n = 0;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const k = 1 + ((r * 4 + c) * 5) % 8;
      pads += '<rect x="' + (186 + c * 17) + '" y="' + (176 + r * 13) + '" width="14" height="10" rx="2" fill="#3a3f47"/>' +
        '<rect class="pd p' + k + '" x="' + (186 + c * 17) + '" y="' + (176 + r * 13) + '" width="14" height="10" rx="2" fill="' + (n++ % 3 ? AMBER : "#ff4f5e") + '"/>';
    }
    let crates = "";
    [[18, 196], [70, 196], [18, 156]].forEach(([x, y]) => {
      crates += '<rect x="' + x + '" y="' + y + '" width="48" height="40" fill="#1f5fa8" stroke="#123a66" stroke-width="2"/>';
      for (let i = 0; i < 8; i++) crates += '<rect x="' + (x + 3 + i * 5.5) + '" y="' + (y - 6) + '" width="4" height="40" fill="' + ["#e9e4d8", "#c8102e", "#1a1a1a", AMBER, "#5aa9e6", "#2a2a2a", "#8a6a4a", "#f2efe6"][i] + '"/>';
      crates += '<rect x="' + (x + 6) + '" y="' + (y + 20) + '" width="36" height="6" rx="3" fill="#123a66"/>';
    });
    const speaker = x => '<rect x="' + x + '" y="94" width="44" height="66" rx="3" fill="#1b1d22" stroke="#000" stroke-width="2"/>' +
      '<circle cx="' + (x + 22) + '" cy="110" r="7" fill="#2c2f36"/>' +
      '<g class="th"><circle cx="' + (x + 22) + '" cy="138" r="15" fill="#2c2f36" stroke="#555" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="138" r="5" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0c0f16"/>' + foam +
      /* window with the city at night */
      '<rect x="150" y="20" width="110" height="66" fill="#16213a" stroke="#2a2f3a" stroke-width="4"/>' +
      '<path d="M205 20v66M150 53h110" stroke="#2a2f3a" stroke-width="3"/>' +
      '<rect x="160" y="62" width="12" height="24" fill="#3a2a2a"/><rect x="176" y="56" width="14" height="30" fill="#3a2a2a"/><rect x="216" y="60" width="12" height="26" fill="#3a2a2a"/><rect x="232" y="54" width="16" height="32" fill="#3a2a2a"/>' +
      '<rect class="bl" x="179" y="62" width="3" height="3" fill="#ffd98a"/><rect class="bl bl3" x="236" y="60" width="3" height="3" fill="#ffd98a"/><rect class="bl bl2" x="220" y="66" width="3" height="3" fill="#ffd98a"/>' +
      /* platinum plaque */
      '<rect x="292" y="22" width="42" height="54" fill="#2a1d12" stroke="' + AMBER + '" stroke-width="2"/><circle cx="313" cy="46" r="15" fill="#cfd5dc"/><circle cx="313" cy="46" r="5" fill="' + BLUE + '"/>' +
      speaker(96) + speaker(338) +
      /* desk */
      '<rect x="0" y="236" width="400" height="24" fill="#2a1d12"/><rect x="132" y="160" width="268" height="8" fill="#3b2a1a"/><rect x="132" y="168" width="268" height="68" fill="#24180f"/>' +
      /* drum machine */
      '<rect x="176" y="146" width="88" height="88" rx="5" fill="#9aa1a9" stroke="#3a3f47" stroke-width="2"/>' +
      '<rect x="184" y="152" width="40" height="16" rx="1" fill="#22301f"/><text x="188" y="164" font-family="Courier New, monospace" font-size="9" fill="#9be07a">BPM 92</text>' +
      '<circle cx="236" cy="160" r="5" fill="#3a3f47"/><circle cx="252" cy="160" r="5" fill="#3a3f47"/>' + pads +
      /* turntable */
      '<rect x="278" y="170" width="90" height="60" rx="4" fill="#1b1d22" stroke="#000" stroke-width="2"/>' +
      '<g class="vn"><circle cx="314" cy="200" r="24" fill="#0a0a0a"/><circle cx="314" cy="200" r="18" fill="none" stroke="#222" stroke-width="1"/><circle cx="314" cy="200" r="12" fill="none" stroke="#222" stroke-width="1"/>' +
      '<circle cx="314" cy="200" r="7" fill="' + AMBER + '"/><rect x="312" y="194" width="4" height="3" fill="#7a5512"/></g><circle cx="314" cy="200" r="1.5" fill="#ccc"/>' +
      '<path d="M356 178l-6 26-14 6" stroke="#cfd5dc" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      crates +
      tag("THE LAB", 20, 52, 28, AMBER, -6) + tag("HAV", 20, 92, 26, BLUE, -4),
      "");
  }

  /* 5. Queens Plaza North and 27th St: green street signs, the clock tower down the block, the tag wall */
  function corner() {
    let brick = "";
    for (let y = 70; y < 220; y += 12) for (let x = ((y - 70) / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#4a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      /* the clock tower down the block */
      '<rect x="354" y="90" width="34" height="130" fill="#d8d3c6" opacity=".75"/><rect x="359" y="62" width="24" height="28" fill="#d8d3c6" opacity=".75"/><path d="M357 62h28l-14-16z" fill="#d8d3c6" opacity=".75"/>' +
      '<circle cx="371" cy="76" r="8" fill="#fff7d6"/><path d="M371 76v-5M371 76h4" stroke="#222" stroke-width="1.5"/>' +
      /* wall with the tags */
      '<rect x="4" y="70" width="250" height="150" fill="#3a221c"/>' + brick +
      tag("HAVOC", 22, 146, 42, BONE, -7) + tag("MOBB DEEP", 30, 198, 28, AMBER, -3) + tag("QB", 196, 108, 24, BLUE, -10) +
      /* streetlight with flicker */
      '<rect x="274" y="56" width="5" height="164" fill="#1d2329"/><path d="M276 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M292 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M292 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs on the pole */
      '<rect x="232" y="88" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="280" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Queens Plaza N</text>' +
      '<rect x="248" y="110" width="64" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="280" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">27 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="228" width="40" height="10" rx="3" fill="#ffcf3d"/><circle cx="37" cy="233" r="1.8" fill="#fff6c2"/></g>',
      sky("g5", "#070b16", "#24324a"));
  }

  window.SCENES = { train, clock, yard, lab, corner };
})();
