/* marvingaye scenes (Regions tab: The DMV; born at Freedmen's Hospital, raised in the East Capitol Dwellings at 60th St NE, Cardozo High, Marvin Gaye Park on Watts Branch). CSS classes prefixed mg- (the page's own anim-train is kept, used on the train). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgglow{0%,100%{opacity:.45}50%{opacity:1}}.mg-glow{animation:mgglow 2.4s ease-in-out infinite}.mg-g2{animation-delay:-1.2s}' +
    '@keyframes mgnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-70px);opacity:0}}.mg-nt{animation:mgnote 3.4s ease-out infinite}.mg-nt2{animation-delay:-1.1s}.mg-nt3{animation-delay:-2.3s}' +
    '@keyframes mgsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.mg-sw{animation:mgsway 1.6s ease-in-out infinite}.mg-sw2{animation-delay:-.8s}' +
    '@keyframes mgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mgspin 2.2s linear infinite}' +
    '@keyframes mghand{0%,100%{transform:rotate(0)}50%{transform:rotate(30deg)}}.mg-hand{transform-box:fill-box;transform-origin:0% 100%;animation:mghand 6s ease-in-out infinite}' +
    '@keyframes mgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.mg-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mgflag 1.4s ease-in-out infinite}' +
    '@keyframes mgcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.mg-car{animation:mgcar 9s linear infinite}' +
    '@keyframes mgkey{0%,100%{fill:#f4f1e8}50%{fill:#ffc93c}}.mg-key{animation:mgkey 1.2s ease-in-out infinite}.mg-k2{animation-delay:-.3s}.mg-k3{animation-delay:-.6s}.mg-k4{animation-delay:-.9s}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mg-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="mg-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer in silhouette (no face) */
  const singer = (x, y, c, cls, s) => { s = s || 1; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="' + (cls || "") + '"><circle cx="0" cy="-34" r="7" fill="#0a0a12"/><path d="M-9 -26h18l3 28h-24z" fill="' + c + '"/><rect x="-8" y="2" width="6" height="18" fill="#0a0a12"/><rect x="2" y="2" width="6" height="18" fill="#0a0a12"/></g></g>'; };
  /* a choir robe figure (no face) */
  const robe = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 30) + '" r="6.5" fill="#0a0a12"/><path d="M' + (x - 10) + ' ' + y + 'l3 -24h14l3 24z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y - 24) + 'l6 7l6 -7" fill="#f6efdc"/></g>';
  const SKYB = "#7fd3ff", AMBER = "#ffb347", ROSE = "#ff6f91", CREAM = "#f6efdc", BL = "#0078ae", SV = "#a1a2a1";

  /* 1. Capitol Heights station (Blue and Silver lines), underground under the coffered concrete vault at East Capitol St and Southern Ave, the stop for the East Capitol Dwellings: a train sliding in, platform-edge lights blinking */
  function mgstation() {
    let vault = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) { const x = c * 36 - 8 + (r % 2) * 0, y = 6 + r * 22; vault += '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="30" height="16" rx="2" fill="#4a4338" stroke="#2e2a24" stroke-width="2"/><rect x="' + (x + 9) + '" y="' + (y + 7) + '" width="18" height="8" fill="#5a5246"/>'; }
    let win = "";
    for (let x = 36; x < 300; x += 30) win += '<rect x="' + x + '" y="128" width="20" height="18" rx="2" fill="#1d2b3a"/><rect x="' + (x + 2) + '" y="130" width="5" height="14" fill="#fff" opacity=".3"/>';
    const lights = Array.from({ length: 20 }, (_, i) => '<rect class="mg-glow' + (i % 2 ? " mg-g2" : "") + '" x="' + (6 + i * 20) + '" y="186" width="8" height="3" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2620"/>' + vault +
      '<path d="M0 96q200 -26 400 0v10h-400z" fill="#3a352c"/>' +
      '<rect x="0" y="106" width="400" height="74" fill="#151418"/>' +
      '<g class="anim-train"><rect x="10" y="114" width="300" height="64" rx="6" fill="#c9ccd2" stroke="#55555c" stroke-width="2"/>' +
      '<rect x="10" y="150" width="300" height="4" fill="#7a2a2a"/>' + win +
      '<rect x="296" y="122" width="12" height="26" rx="2" fill="#1d2b3a"/><rect x="250" y="117" width="44" height="8" rx="2" fill="#111"/><text x="272" y="123.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">LARGO</text>' +
      '<circle class="mg-glow" cx="306" cy="164" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="180" width="400" height="8" fill="#9a958a"/>' + lights +
      '<rect x="0" y="189" width="400" height="71" fill="#7a6a5a"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 36) + '" y="189" width="34" height="71" fill="#86765f"/>').join("") +
      '<rect x="330" y="120" width="16" height="70" fill="#5a3a24"/><rect x="330" y="120" width="16" height="6" fill="#3a2414"/>' +
      '<rect x="332" y="130" width="12" height="6" fill="' + BL + '"/><rect x="332" y="140" width="12" height="6" fill="' + SV + '"/>' +
      '<rect x="40" y="200" width="250" height="34" rx="3" fill="#111"/>' + t9("Capitol Heights", 52, 223, 16, "#fff") +
      '<circle cx="232" cy="217" r="10" fill="' + BL + '"/><text x="232" y="221" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BL</text>' +
      '<circle cx="258" cy="217" r="10" fill="' + SV + '"/><text x="258" y="221" text-anchor="middle" ' + font + ' font-size="9" fill="#111">SV</text>' +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">EAST CAPITOL ST · SOUTHERN AVE</text>',
      "");
  }

  /* 2. The East Capitol Dwellings, Northeast D.C., where he grew up at No. 12, 60th St NE: rows of two-story brick garden apartments, porch lights, laundry on the line, a boy singing on the stoop */
  function mgdwell() {
    const row = (x0, y0, n, c) => { let s = ""; for (let i = 0; i < n; i++) { const x = x0 + i * 92; s += '<rect x="' + x + '" y="' + y0 + '" width="86" height="' + (196 - y0) + '" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + y0 + 'h92v-6h-92z" fill="#4a3a34"/>';
      for (let k = 0; k < 3; k++) s += '<rect class="' + ((i + k) % 3 ? "" : "mg-glow") + '" x="' + (x + 8 + k * 26) + '" y="' + (y0 + 10) + '" width="16" height="16" fill="#ffd98a" opacity=".55" stroke="' + CREAM + '" stroke-width="1.5"/>';
      s += '<rect x="' + (x + 8) + '" y="' + (y0 + 42) + '" width="16" height="16" fill="#2a3540" stroke="' + CREAM + '" stroke-width="1.5"/><rect x="' + (x + 58) + '" y="' + (y0 + 42) + '" width="16" height="16" fill="#2a3540" stroke="' + CREAM + '" stroke-width="1.5"/>' +
        '<rect x="' + (x + 34) + '" y="' + (y0 + 40) + '" width="16" height="' + (156 - y0) + '" fill="#3a2a20"/><rect x="' + (x + 30) + '" y="' + (y0 + 36) + '" width="24" height="4" fill="#c9c2b2"/><circle class="mg-glow" cx="' + (x + 42) + '" cy="' + (y0 + 32) + '" r="2" fill="#fff3b0"/>'; } return s; };
    const shirt = (x, c) => '<path d="M' + x + ' 92l6 -4h8l6 4l-3 4h-2v14h-10v-14h-2z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg2)"/>' + stars(12) +
      '<circle cx="60" cy="40" r="16" fill="#f6efdc" opacity=".85"/>' +
      row(-6, 112, 5, "#9a4a34") +
      '<path d="M120 88q80 10 160 0" stroke="#ccc" stroke-width="1.2" fill="none"/><g class="mg-sw">' + shirt(140, SKYB) + shirt(176, ROSE) + shirt(214, AMBER) + shirt(250, CREAM) + '</g>' +
      '<rect x="116" y="84" width="3" height="112" fill="#6a6a6a"/><rect x="280" y="84" width="3" height="112" fill="#6a6a6a"/>' +
      '<rect x="0" y="196" width="400" height="18" fill="#3e5a32"/><rect x="0" y="214" width="400" height="46" fill="#4a4a50"/><rect x="0" y="212" width="400" height="4" fill="#9a968e"/>' +
      '<rect x="114" y="190" width="36" height="6" fill="#b8b2a4"/><rect x="110" y="196" width="44" height="6" fill="#a8a294"/>' +
      singer(132, 210, SKYB, "mg-sw", 0.75) +
      note(150, 166, AMBER) + note(124, 160, CREAM, "mg-nt2") + note(170, 172, ROSE, "mg-nt3") +
      '<rect x="300" y="160" width="62" height="18" rx="2" fill="#1a1a20" stroke="' + CREAM + '" stroke-width="1"/>' + t9("12 60th St", 305, 173, 10, CREAM) +
      '<text x="390" y="252" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">EAST CAPITOL DWELLINGS · NE</text>',
      sky("mg2", "#0f1636", "#4a3a6a"));
  }

  /* 3. Cardozo High School up on the hill in Columbia Heights, where he sang in the choir: the long buff-brick classical school with its columned center and wide stairs, the city lights below */
  function mgcardozo() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) if (c < 4 || c > 7) wins += '<rect class="' + ((r + c) % 4 ? "" : "mg-glow") + '" x="' + (32 + c * 29) + '" y="' + (78 + r * 28) + '" width="15" height="18" fill="#ffe2a0" opacity=".5" stroke="#8a7a5a" stroke-width="1.5"/>';
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (154 + i * 18) + '" y="78" width="8" height="78" fill="#efe6cc"/><rect x="' + (152 + i * 18) + '" y="74" width="12" height="5" fill="#d8cca8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mg3)"/>' + stars(12) +
      '<rect x="20" y="66" width="360" height="96" fill="#d8c49a"/><rect x="16" y="60" width="368" height="8" fill="#efe6cc"/>' + wins +
      '<path d="M144 60l56 -24l56 24z" fill="#efe6cc" stroke="#c8b890" stroke-width="2"/>' +
      '<rect x="146" y="70" width="108" height="92" fill="#3a3024"/>' + cols +
      '<text x="200" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a2a">CARDOZO</text>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (140 - i * 10) + '" y="' + (162 + i * 7) + '" width="' + (120 + i * 20) + '" height="7" fill="' + ["#d8d0bc", "#c9c0aa", "#bab29c", "#aba38e"][i] + '"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#2a3a2a"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="' + (i % 3 ? "" : "mg-glow") + '" cx="' + (6 + i * 13.5) + '" cy="' + (222 + (i * 7) % 26) + '" r="1.6" fill="#ffd98a"/>').join("") +
      singer(170, 176, "#6a2a5a", "mg-sw", 0.62) + singer(200, 176, "#6a2a5a", "mg-sw mg-sw2", 0.62) + singer(230, 176, "#6a2a5a", "mg-sw", 0.62) +
      note(186, 132, AMBER) + note(214, 128, SKYB, "mg-nt2") + note(240, 136, ROSE, "mg-nt3") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">THE CHOIR · 13TH AND CLIFTON NW</text>',
      sky("mg3", "#101a40", "#b07a5a"));
  }

  /* 4. Marvin Gaye Park on Watts Branch, D.C.'s longest city park, renamed for him in 2006: the creek winding through the trees, a footbridge, the piano-shaped playground with its keys lighting up, a bike rolling down the trail */
  function mgpark() {
    const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + y + '" width="' + (4 * s) + '" height="' + (22 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4 * s) + '" r="' + (16 * s) + '" fill="' + c + '"/><circle cx="' + (x - 10 * s) + '" cy="' + (y + 4 * s) + '" r="' + (11 * s) + '" fill="' + c + '"/><circle cx="' + (x + 10 * s) + '" cy="' + (y + 4 * s) + '" r="' + (11 * s) + '" fill="' + c + '"/>';
    const keys = Array.from({ length: 12 }, (_, i) => '<rect class="mg-key mg-k' + (1 + i % 4) + '" x="' + (232 + i * 13) + '" y="206" width="12" height="34" fill="#f4f1e8" stroke="#222" stroke-width="1"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10].map(i => '<rect x="' + (240 + i * 13) + '" y="206" width="7" height="20" fill="#111"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mg4)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff3c2" opacity=".9"/>' +
      '<path d="M0 120q100 -30 200 -6t200 -10v40h-400z" fill="#2f5a3a"/>' +
      tree(30, 100, 1.2, "#3e7a46") + tree(90, 108, 1, "#4a8a50") + tree(150, 98, 1.3, "#3a6e42") + tree(270, 104, 1.1, "#4a8a50") + tree(350, 100, 1.3, "#3e7a46") +
      '<rect x="0" y="134" width="400" height="126" fill="#5a8a46"/>' +
      '<path d="M-10 168q80 -18 150 4t140 -6t130 10v18q-60 -14 -130 -6t-140 6t-150 -6z" fill="#4a90b8"/><path class="mg-glow" d="M20 172q50 -8 90 2M180 176q40 -6 80 0M300 172q30 -4 60 2" stroke="#bfe8ff" stroke-width="1.5" fill="none"/>' +
      '<path d="M150 170q40 -26 80 0" stroke="#8a6a4a" stroke-width="5" fill="none"/><path d="M150 170h80" stroke="#6a4a2a" stroke-width="3"/>' + [160, 175, 190, 205, 220].map(x => '<path d="M' + x + ' 170v-' + (x === 190 ? 13 : 8) + '" stroke="#8a6a4a" stroke-width="2"/>').join("") +
      '<path d="M0 214q120 -18 220 0" stroke="#c9c2b2" stroke-width="10" fill="none"/>' +
      '<g class="mg-car"><circle cx="20" cy="206" r="6" fill="none" stroke="#222" stroke-width="2"/><circle cx="40" cy="206" r="6" fill="none" stroke="#222" stroke-width="2"/><path d="M20 206l8 -10h10l2 10M28 196l-2 -4" stroke="' + ROSE + '" stroke-width="2.5" fill="none"/><circle cx="30" cy="184" r="4" fill="#0a0a12"/><path d="M30 188l2 8" stroke="#0a0a12" stroke-width="4"/></g>' +
      '<rect x="226" y="200" width="168" height="46" rx="4" fill="#2a2a32"/>' + keys +
      note(250, 192, AMBER) + note(320, 188, SKYB, "mg-nt2") + note(370, 194, ROSE, "mg-nt3") +
      '<text x="12" y="252" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".95">MARVIN GAYE PARK · WATTS BRANCH</text>',
      sky("mg4", "#5aa0d8", "#f2d2a0"));
  }

  /* 5. East Capitol St NE and 60th St NE, the corner of the East Capitol Dwellings, MARVIN GAYE tagged on the wall, the old Capitol Columns standing in the National Arboretum meadow behind */
  function mgcorner() {
    let colm = '<path d="M200 128q90 -30 190 0z" fill="#3a5a36"/><rect x="214" y="66" width="164" height="8" fill="#e6d6b4"/>';
    for (let i = 0; i < 9; i++) colm += '<rect x="' + (218 + i * 19) + '" y="74" width="8" height="48" fill="#eadcbc"/><rect x="' + (216 + i * 19) + '" y="72" width="12" height="4" fill="#d8c6a0"/><rect x="' + (216 + i * 19) + '" y="120" width="12" height="4" fill="#d8c6a0"/>';
    colm += '<rect x="210" y="124" width="172" height="6" fill="#c9b894"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mg6)"/>' + stars(12) + colm +
      '<rect x="0" y="128" width="400" height="96" fill="#4a3a52"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#3a2c44" stroke-width="1"/>').join("") +
      tag("MARVIN GAYE", 12, 192, 29, SKYB, -5) + tag("PRINCE OF SOUL", 18, 216, 14, AMBER, -3) + tag("WHAT'S GOING ON", 140, 218, 13, CREAM, -3) + tag("EAST CAPITOL", 262, 214, 12, ROSE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="mg-car"><rect x="0" y="234" width="64" height="14" rx="4" fill="#3d7ab8"/><rect x="12" y="226" width="36" height="10" rx="3" fill="#3d7ab8"/><circle cx="14" cy="249" r="4" fill="#111"/><circle cx="50" cy="249" r="4" fill="#111"/><circle class="mg-glow" cx="62" cy="238" r="2" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 136, 152, "East Capitol St NE") + sign(286, 162, 110, "60th St NE") +
      '<g class="mg-sp"><circle cx="196" cy="150" r="3" fill="' + SKYB + '" opacity=".7"/></g><g class="mg-sp mg-sp2"><circle cx="202" cy="144" r="2" fill="' + SKYB + '" opacity=".6"/></g>',
      sky("mg6", "#101838", "#c0785a"));
  }

  window.SCENES = { mgstation: mgstation, mgdwell: mgdwell, mgcardozo: mgcardozo, mgpark: mgpark, mgcorner: mgcorner };
})();
