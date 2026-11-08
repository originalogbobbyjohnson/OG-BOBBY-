/* steviewonder scenes (Regions tab: Detroit; born in Saginaw, raised from age 4 on Detroit's North End, on the stretch of Milwaukee Ave W that is now Stevie Wonder Ave). CSS classes prefixed sw- (the page's own anim-train is kept, used on the train). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes swglow{0%,100%{opacity:.45}50%{opacity:1}}.sw-glow{animation:swglow 2.4s ease-in-out infinite}.sw-g2{animation-delay:-1.2s}' +
    '@keyframes swnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-70px);opacity:0}}.sw-nt{animation:swnote 3.4s ease-out infinite}.sw-nt2{animation-delay:-1.1s}.sw-nt3{animation-delay:-2.3s}' +
    '@keyframes swsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.sw-sw{animation:swsway 1.6s ease-in-out infinite}.sw-sw2{animation-delay:-.8s}' +
    '@keyframes swspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:swspin 2.2s linear infinite}' +
    '@keyframes swhand{0%,100%{transform:rotate(0)}50%{transform:rotate(30deg)}}.sw-hand{transform-box:fill-box;transform-origin:0% 100%;animation:swhand 6s ease-in-out infinite}' +
    '@keyframes swflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.sw-flag{transform-box:fill-box;transform-origin:0% 50%;animation:swflag 1.4s ease-in-out infinite}' +
    '@keyframes swcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.sw-car{animation:swcar 9s linear infinite}' +
    '@keyframes swkey{0%,100%{fill:#f4f1e8}50%{fill:#ffc93c}}.sw-key{animation:swkey 1.2s ease-in-out infinite}.sw-k2{animation-delay:-.3s}.sw-k3{animation-delay:-.6s}.sw-k4{animation-delay:-.9s}' +
    '@keyframes swspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sw-sp{animation:swspray 1.4s ease-out infinite}.sw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  /* text where every 9 gets a straight stem (fixed advance per char so the drawn 9 lines up) */
  const t9 = (str, x, y, size, col) => { const cw = size * 0.6; let o = "", run = "", rx = x; const flush = () => { if (run) { o += '<text x="' + rx + '" y="' + y + '" ' + font + ' font-size="' + size + '" fill="' + col + '" textLength="' + (run.length * cw).toFixed(1) + '" lengthAdjust="spacingAndGlyphs">' + run.replace(/&/g, "&amp;").replace(/ /g, " ") + '</text>'; rx += run.length * cw; run = ""; } };
    for (const ch of str) { if (ch === "9") { flush(); o += nine(rx + size * 0.04, y, size * 0.74, col); rx += cw; } else run += ch; } flush(); return o; };
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + t9(txt, x + 8, y + 16, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sw-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="sw-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer in silhouette (no face) */
  const singer = (x, y, c, cls, s) => { s = s || 1; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="' + (cls || "") + '"><circle cx="0" cy="-34" r="7" fill="#0a0a12"/><path d="M-9 -26h18l3 28h-24z" fill="' + c + '"/><rect x="-8" y="2" width="6" height="18" fill="#0a0a12"/><rect x="2" y="2" width="6" height="18" fill="#0a0a12"/></g></g>'; };
  /* a choir robe figure (no face) */
  const robe = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6.5" fill="#0a0a12"/><path d="M' + (x - 10) + ' ' + y + 'l3 -24h14l3 24z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y - 24) + 'l6 7l6 -7" fill="#f6efdc"/></g>';
  const GOLD = "#ffc93c", ORANGE = "#ff7a3d", TEAL = "#4fd8c8", CREAM = "#f6efdc", AMB = "#005b9a", ARED = "#c8102e";

  /* 1. The Detroit train station in New Center, on W Baltimore Ave a few blocks from his childhood street: the raised side platform under its canopy, a Wolverine train sliding in, the black station sign */
  function swstation() {
    let win = "";
    for (let x = 34; x < 286; x += 28) win += '<rect x="' + x + '" y="124" width="20" height="16" rx="2" fill="#1d2b3a"/><rect x="' + (x + 2) + '" y="126" width="5" height="12" fill="#fff" opacity=".3"/>';
    const bld = (x, w, top, c) => { let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (150 - top) + '" fill="' + c + '"/>'; for (let yy = top + 8; yy < 140; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 10) s += '<rect class="' + ((xx + yy) % 3 ? "" : "sw-glow") + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".45"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#sw1)"/>' + stars(12) +
      bld(0, 60, 70, "#3a2c3e") + bld(66, 46, 92, "#4a3440") + bld(300, 54, 80, "#3a2c3e") + bld(358, 42, 100, "#4a3440") +
      '<rect x="0" y="150" width="400" height="12" fill="#6a6a70"/>' +
      /* the canopy over the raised platform */
      '<rect x="0" y="84" width="400" height="8" fill="#2a2a30"/><path d="M0 92h400v4h-400z" fill="' + GOLD + '" opacity=".8"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="96" width="5" height="62" fill="#2a2a30"/>').join("") +
      [80, 180, 280].map(x => '<rect class="sw-glow" x="' + x + '" y="96" width="24" height="3" fill="#fff6c2"/>').join("") +
      '<g class="anim-train"><rect x="14" y="110" width="290" height="50" rx="8" fill="#c9ccd2" stroke="#55555c" stroke-width="2"/>' +
      '<rect x="14" y="142" width="290" height="5" fill="' + AMB + '"/><rect x="14" y="147" width="290" height="3" fill="' + ARED + '"/>' + win +
      '<path d="M304 112q22 6 24 40h-24z" fill="#b8bcc4" stroke="#55555c" stroke-width="2"/><rect x="306" y="120" width="14" height="12" rx="2" fill="#1d2b3a"/>' +
      '<circle class="sw-glow" cx="322" cy="146" r="3.5" fill="#fff6c2"/></g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#b8b2a4"/><rect x="0" y="168" width="400" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="171" width="400" height="89" fill="#2e2b30"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="190" width="30" height="40" fill="#3a3640"/>').join("") +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4650"/>' +
      '<rect x="40" y="14" width="348" height="38" rx="3" fill="#111"/>' + t9("Detroit · New Center", 54, 39, 16, "#fff") + badge(296, 33, "WOLVERINE", AMB) +
      '<rect x="244" y="52" width="4" height="32" fill="#2a2a30"/><rect x="360" y="52" width="4" height="32" fill="#2a2a30"/>' +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".85">W BALTIMORE AVE · NEW CENTER</text>',
      sky("sw1", "#141436", "#d9824e"));
  }

  /* 2. Whitestone Baptist Church, where he sang in the choir and became a soloist at eight: brick church, steeple, glowing stained glass, robed choir, the little soloist out front */
  function swchurch() {
    const glass = (x, y, c1, c2, cls) => '<path class="' + (cls || "sw-glow") + '" d="M' + x + ' ' + (y + 40) + 'v-28q0 -12 10 -12t10 12v28z" fill="' + c1 + '" stroke="#2a1a14" stroke-width="2"/><path d="M' + (x + 10) + ' ' + y + 'v40M' + x + ' ' + (y + 20) + 'h20" stroke="' + c2 + '" stroke-width="1.5"/>';
    const bricks = Array.from({ length: 14 }, (_, i) => '<path d="M70 ' + (82 + i * 7) + 'h260" stroke="#6a2e22" stroke-width=".7" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sw2)"/>' + stars(10) +
      '<path d="M182 64v-34l18 -22l18 22v34z" fill="#8a3a2a"/><rect x="198" y="0" width="4" height="12" fill="' + CREAM + '"/><rect x="193" y="4" width="14" height="3" fill="' + CREAM + '"/>' +
      '<path d="M60 80l140 -26l140 26z" fill="#5a2a22"/><rect x="70" y="80" width="260" height="104" fill="#9a4632"/>' + bricks +
      glass(90, 96, "#4fd8c8", "#2a6a6a") + glass(130, 96, GOLD, "#a07a20", "sw-glow sw-g2") + glass(250, 96, ORANGE, "#a04a20") + glass(290, 96, "#7fa0ff", "#3a4a8a", "sw-glow sw-g2") +
      '<circle class="sw-glow" cx="200" cy="100" r="14" fill="' + GOLD + '" stroke="#2a1a14" stroke-width="2"/><path d="M200 86v28M186 100h28M190 90l20 20M210 90l-20 20" stroke="#a0601a" stroke-width="1.2"/>' +
      '<rect x="182" y="130" width="36" height="54" rx="2" fill="#3a2418"/><path d="M182 130q18 -16 36 0" fill="#3a2418"/><rect x="198" y="132" width="4" height="52" fill="#6a4a30"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + CREAM + '">WHITESTONE BAPTIST</text>' +
      '<rect x="0" y="184" width="400" height="76" fill="#2a2230"/><rect x="40" y="184" width="320" height="10" fill="#b8b0a0"/>' +
      robe(80, 236, "#5a2a8a", "sw-sw") + robe(108, 236, "#5a2a8a", "sw-sw sw-sw2") + robe(136, 236, "#5a2a8a", "sw-sw") + robe(264, 236, "#5a2a8a", "sw-sw sw-sw2") + robe(292, 236, "#5a2a8a", "sw-sw") + robe(320, 236, "#5a2a8a", "sw-sw sw-sw2") +
      singer(200, 232, ORANGE, "sw-sw", 0.75) +
      '<rect x="210" y="190" width="2" height="34" fill="#bbb"/><circle cx="211" cy="189" r="3" fill="#bbb"/>' +
      note(170, 180, GOLD) + note(226, 176, TEAL, "sw-nt2") + note(250, 186, CREAM, "sw-nt3") +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">THE CHOIR · SOLOIST AT EIGHT</text>',
      sky("sw2", "#121a40", "#c97a5a"));
  }

  /* 3. Hitsville U.S.A. on W Grand Blvd, where an 11-year-old signed and cut his first records: the white two-story house, the big picture window, the blue name sign, a record spinning in the window */
  function swhitsville() {
    return svg(
      '<rect width="400" height="260" fill="url(#sw3)"/>' + stars(10) +
      '<rect x="24" y="96" width="70" height="104" fill="#e4e0d4"/><path d="M18 98l42 -30l40 30z" fill="#4a4a52"/>' +
      '<rect x="306" y="100" width="76" height="100" fill="#dcd8cc"/><path d="M300 102l44 -30l44 30z" fill="#4a4a52"/>' +
      '<path d="M96 92l104 -52l104 52z" fill="#3e3e48"/><rect x="104" y="92" width="192" height="108" fill="#f2efe6" stroke="#c9c4b4" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M104 ' + (100 + i * 8) + 'h192" stroke="#d8d3c4" stroke-width="1"/>').join("") +
      '<rect x="128" y="100" width="22" height="28" fill="#2a3a52" stroke="#fff" stroke-width="2"/><rect x="250" y="100" width="22" height="28" fill="#2a3a52" stroke="#fff" stroke-width="2"/>' +
      '<rect x="116" y="134" width="168" height="22" rx="2" fill="#fff" stroke="#1f3f8a" stroke-width="2"/><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="14" fill="#1f3f8a" letter-spacing="1">HITSVILLE U.S.A.</text>' +
      '<rect x="128" y="162" width="88" height="34" fill="#ffe2a0" opacity=".85" stroke="#fff" stroke-width="3"/><rect class="sw-glow" x="128" y="162" width="88" height="34" fill="#fff6c2" opacity=".5"/>' +
      '<g class="sw-spin"><circle cx="172" cy="179" r="13" fill="#111"/><circle cx="172" cy="179" r="9" fill="none" stroke="#333" stroke-width="1"/><circle cx="172" cy="179" r="4" fill="' + ORANGE + '"/></g>' +
      '<rect x="234" y="160" width="26" height="40" fill="#1f3f8a"/><circle cx="254" cy="181" r="1.8" fill="' + GOLD + '"/>' +
      '<rect x="226" y="198" width="42" height="6" fill="#b8b2a4"/><rect x="222" y="204" width="50" height="6" fill="#a8a294"/>' +
      '<rect x="0" y="200" width="400" height="20" fill="#3e5a32"/><rect x="0" y="220" width="400" height="40" fill="#4a4a50"/><rect x="0" y="218" width="400" height="4" fill="#9a968e"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 10) + '" y="240" width="26" height="3" fill="#f2d24b"/>').join("") +
      note(220, 150, GOLD) + note(150, 140, TEAL, "sw-nt2") + note(280, 146, ORANGE, "sw-nt3") +
      '<text x="390" y="254" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">2648 W GRAND BLVD</text>',
      sky("sw3", "#16183e", "#3a3a7a"));
  }

  /* 4. The Michigan School for the Blind in Lansing, where he studied music as a kid: the brick main hall under its clock tower, a piano with keys lighting up out front, braille dots along the walk */
  function swschool() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 10; c++) if (c < 4 || c > 5) wins += '<rect class="' + ((r + c) % 3 ? "" : "sw-glow") + '" x="' + (44 + c * 32) + '" y="' + (98 + r * 34) + '" width="16" height="24" fill="#ffe2a0" opacity=".5" stroke="' + CREAM + '" stroke-width="2"/>';
    const keys = Array.from({ length: 14 }, (_, i) => '<rect class="sw-key sw-k' + (1 + i % 4) + '" x="' + (124 + i * 11) + '" y="210" width="10" height="26" fill="#f4f1e8" stroke="#222" stroke-width="1"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map(i => '<rect x="' + (131 + i * 11) + '" y="210" width="6" height="15" fill="#111"/>').join("");
    let dots = ""; for (let i = 0; i < 26; i++) { const x = 14 + i * 15; dots += '<circle cx="' + x + '" cy="248" r="1.8" fill="' + GOLD + '"/>' + (i % 2 ? '<circle cx="' + (x + 5) + '" cy="248" r="1.8" fill="' + GOLD + '"/>' : '') + (i % 3 ? '<circle cx="' + x + '" cy="253" r="1.8" fill="' + GOLD + '"/>' : ''); }
    return svg(
      '<rect width="400" height="260" fill="url(#sw4)"/>' + stars(10) +
      '<rect x="176" y="28" width="48" height="64" fill="#8a3a28"/><path d="M170 30l30 -24l30 24z" fill="#3a4a3a"/>' +
      '<circle cx="200" cy="54" r="14" fill="' + CREAM + '" stroke="#5a2a1a" stroke-width="2"/><g class="sw-hand"><rect x="199" y="44" width="2" height="10" fill="#222"/></g><rect x="199" y="53" width="8" height="2" fill="#222"/>' +
      '<rect x="30" y="90" width="340" height="80" fill="#a24a34"/><rect x="26" y="86" width="348" height="6" fill="' + CREAM + '"/>' + wins +
      '<rect x="172" y="92" width="56" height="78" fill="#8a3a28"/><path d="M182 170v-30q18 -16 36 0v30z" fill="#3a2418"/>' +
      '<text x="200" y="104" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + CREAM + '">SCHOOL FOR THE BLIND</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3e5a32"/><rect x="0" y="236" width="400" height="24" fill="#6a665e"/>' +
      '<rect x="114" y="196" width="172" height="44" rx="4" fill="#1a1a20"/>' + keys + '<rect x="120" y="236" width="8" height="12" fill="#1a1a20"/><rect x="272" y="236" width="8" height="12" fill="#1a1a20"/>' +
      singer(300, 232, ORANGE, "sw-sw", 0.7) +
      note(150, 186, GOLD) + note(240, 182, TEAL, "sw-nt2") + note(200, 176, CREAM, "sw-nt3") + dots +
      '<text x="12" y="190" ' + font + ' font-size="9" fill="' + CREAM + '" opacity=".9">LANSING, MICHIGAN</text>',
      sky("sw4", "#13204a", "#d0906a"));
  }

  /* 5. Stevie Wonder Ave (Milwaukee Ave W, his childhood street) at Woodward Ave in the North End, the limestone wings of Cadillac Place in New Center behind, STEVIE WONDER tagged on the wall */
  function swcorner() {
    let cp = '<rect x="214" y="40" width="160" height="88" fill="#d8d0bc"/>';
    for (let k = 0; k < 4; k++) cp += '<rect x="' + (218 + k * 40) + '" y="30" width="32" height="98" fill="#e4dcc8" stroke="#b8ae98" stroke-width="1"/>';
    for (let k = 0; k < 4; k++) for (let r = 0; r < 7; r++) for (let c = 0; c < 3; c++) cp += '<rect class="' + ((k + r + c) % 4 ? "" : "sw-glow") + '" x="' + (222 + k * 40 + c * 9) + '" y="' + (44 + r * 11) + '" width="5" height="7" fill="#ffd98a" opacity=".55"/>';
    for (let i = 0; i < 16; i++) cp += '<rect x="' + (216 + i * 10) + '" y="32" width="3" height="8" fill="#b8ae98"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sw6)"/>' + stars(12) + cp +
      '<rect x="0" y="128" width="400" height="96" fill="#3a2e4e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#2e2440" stroke-width="1"/>').join("") +
      tag("STEVIE WONDER", 10, 192, 31, GOLD, -5) + tag("LITTLE STEVIE", 18, 216, 15, TEAL, -3) + tag("KEY OF LIFE", 132, 218, 13, CREAM, -3) + tag("SIGNED SEALED", 238, 220, 12, ORANGE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="sw-car"><rect x="0" y="234" width="64" height="14" rx="4" fill="#b83a3a"/><rect x="12" y="226" width="36" height="10" rx="3" fill="#b83a3a"/><circle cx="14" cy="249" r="4" fill="#111"/><circle cx="50" cy="249" r="4" fill="#111"/><circle class="sw-glow" cx="62" cy="238" r="2" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 146, "Stevie Wonder Ave") + sign(274, 124, 122, "Woodward Ave") +
      '<g class="sw-sp"><circle cx="200" cy="150" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sw-sp sw-sp2"><circle cx="206" cy="144" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sw6", "#121834", "#c4784e"));
  }

  window.SCENES = { swstation: swstation, swchurch: swchurch, swhitsville: swhitsville, swschool: swschool, swcorner: swcorner };
})();
