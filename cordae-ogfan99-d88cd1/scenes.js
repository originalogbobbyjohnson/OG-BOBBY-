/* cordae scenes (Regions tab: The DMV; Suitland, Prince George's County). CSS classes prefixed cd- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cdflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.cd-flk{animation:cdflick 2.6s infinite}.cd-flk2{animation-delay:.9s}' +
    '@keyframes cdglow{0%,100%{opacity:.45}50%{opacity:1}}.cd-glow{animation:cdglow 2.2s ease-in-out infinite}.cd-g2{animation-delay:-1.1s}' +
    '@keyframes cdcloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.cd-cl{animation:cdcloud 26s linear infinite}.cd-cl2{animation-delay:-13s}' +
    '@keyframes cdbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.cd-bd{animation:cdbird 11s linear infinite}.cd-bd2{animation-delay:-5s}' +
    '@keyframes cdleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,210px) rotate(280deg)}}.cd-lf{transform-box:fill-box;animation:cdleaf 6s linear infinite}.cd-lf2{animation-delay:-2s}.cd-lf3{animation-delay:-4s}' +
    '@keyframes cdhand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.cd-hand{transform-box:view-box;transform-origin:200px 64px;animation:cdhand 8s linear infinite}' +
    '@keyframes cdfall{0%{transform:translateY(-20px);opacity:0}10%{opacity:1}100%{transform:translateY(240px);opacity:.8}}.cd-cf{animation:cdfall 4.5s linear infinite}' +
    '@keyframes cdboom{0%{transform:scale(.1);opacity:0}20%{opacity:1}100%{transform:scale(1);opacity:0}}.cd-fw{transform-box:fill-box;transform-origin:50% 50%;animation:cdboom 2.8s ease-out infinite}.cd-fw2{animation-delay:-1.4s}' +
    '@keyframes cdjet{0%{transform:translate(-160px,-30px)}100%{transform:translate(520px,40px)}}.cd-jet{animation:cdjet 12s linear infinite;animation-delay:-5s}' +
    '@keyframes cdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cd-sp{animation:cdspray 1.4s ease-out infinite}.cd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="14" cy="-7" rx="16" ry="10"/><ellipse cx="-12" cy="-4" rx="12" ry="8"/></g></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cd-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#5cc8ff", GOLD = "#f2c14e", CORAL = "#ff7a59", GR = "#00b140";

  /* 1. Suitland station on the Green Line: an open-cut station off Silver Hill Rd, sky overhead, concrete cut walls, the waffle-concrete canopy over the island platform, red hex pavers, granite edge with the flashing lights, black sign with the GR bullet, the silver railcar sliding in */
  function cdstation() {
    const tr = '<g class="anim-train"><rect x="20" y="118" width="300" height="66" rx="7" fill="#d7dade" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 46) + '" y="128" width="32" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="158" width="300" height="5" fill="#8a1f2b"/><rect x="20" y="165" width="300" height="3" fill="#6b7178"/>' +
      '<rect x="300" y="122" width="20" height="60" rx="4" fill="#b3b8be"/><rect x="304" y="128" width="12" height="10" rx="2" fill="#111"/><text x="310" y="136" text-anchor="middle" ' + font + ' font-size="7" fill="' + GR + '">GR</text>' +
      '<circle cx="312" cy="174" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cd1)"/>' + cloud(60, 28, 1, "cd-cl") + cloud(260, 18, .8, "cd-cl cd-cl2") +
      /* the trees up at the top of the cut */
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (i * 36 + 10) + '" cy="58" r="' + (14 + (i % 3) * 3) + '" fill="' + ["#3f7a3a", "#4f8a40", "#356d34"][i % 3] + '"/>').join("") +
      /* concrete cut walls */
      '<path d="M0 60h400v40H0z" fill="#b9b4aa"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 60v40" stroke="#a8a398" stroke-width="1"/>').join("") +
      '<rect x="0" y="100" width="400" height="88" fill="#4a4844"/>' + tr +
      /* canopy: coffered concrete vault over the platform */
      '<path d="M0 0h400v14q-200 26 -400 0z" fill="#d9d4c8" opacity=".95"/>' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (i * 26 + 4) + '" y="2" width="18" height="8" rx="1" fill="#c4bfb2"/>').join("") +
      '<rect x="0" y="188" width="400" height="8" fill="#c9c3b6"/>' + Array.from({ length: 13 }, (_, i) => '<circle class="cd-flk' + (i % 2 ? " cd-flk2" : "") + '" cx="' + (14 + i * 31) + '" cy="192" r="2.4" fill="#fff3b0"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#8c3b2c"/>' + Array.from({ length: 9 }, (_, r) => Array.from({ length: 22 }, (_, c) => '<path d="M' + (c * 19 + (r % 2) * 9.5) + ' ' + (202 + r * 7) + 'l5 -3h7l5 3l-5 3h-7z" fill="none" stroke="#6e2c20" stroke-width="1"/>').join("")).join("") +
      '<rect x="190" y="196" width="20" height="64" fill="#6f6a60"/>' +
      '<rect x="92" y="54" width="216" height="40" rx="3" fill="#111"/><text x="108" y="81" ' + font + ' font-size="20" fill="#fff">Suitland</text>' +
      '<circle cx="268" cy="74" r="14" fill="' + GR + '"/><text x="268" y="79" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">GR</text>',
      sky("cd1", "#7fbfe8", "#e8f2f6"));
  }

  /* 2. The Census Bureau's headquarters at the Suitland Federal Center: two long curving glass wings veiled in vertical white-oak louvers, the meadow and young trees out front, clouds and birds crossing */
  function cdcensus() {
    const wing = (y, h, x0, x1, bend, col) => {
      let s = '<path d="M' + x0 + ' ' + (y + h) + 'Q' + ((x0 + x1) / 2) + ' ' + (y + h + bend) + ' ' + x1 + ' ' + (y + h) + 'V' + y + 'Q' + ((x0 + x1) / 2) + ' ' + (y + bend) + ' ' + x0 + ' ' + y + 'z" fill="#2e4656"/>';
      for (let i = 0; i <= 60; i++) { const t = i / 60, x = x0 + (x1 - x0) * t, off = bend * 4 * t * (1 - t) * 0.5; s += '<path d="M' + x.toFixed(1) + ' ' + (y + off).toFixed(1) + 'v' + h + '" stroke="' + col + '" stroke-width="2.2"/>'; }
      for (let k = 1; k < 4; k++) s += '<path d="M' + x0 + ' ' + (y + k * h / 4) + 'Q' + ((x0 + x1) / 2) + ' ' + (y + k * h / 4 + bend) + ' ' + x1 + ' ' + (y + k * h / 4) + '" stroke="#9fb4c0" stroke-width="1" fill="none" opacity=".6"/>';
      return s + '<path d="M' + x0 + ' ' + y + 'Q' + ((x0 + x1) / 2) + ' ' + (y + bend) + ' ' + x1 + ' ' + y + '" stroke="#e8e2d4" stroke-width="3" fill="none"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#cd2)"/>' + '<circle cx="330" cy="40" r="20" fill="#fff4c4" class="cd-glow"/>' +
      cloud(40, 40, 1.1, "cd-cl") + cloud(220, 26, .8, "cd-cl cd-cl2") +
      '<g class="cd-bd"><path d="M20 70q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/></g><g class="cd-bd cd-bd2"><path d="M40 52q3 -3 6 0q3 -3 6 0" stroke="#2a2a2a" stroke-width="1.4" fill="none"/></g>' +
      wing(76, 56, -10, 250, 18, "#c99a62") + wing(100, 64, 150, 410, -16, "#d6a96e") +
      '<rect x="0" y="168" width="400" height="92" fill="#6c9a4a"/><path d="M0 168q200 -14 400 0" fill="#7aa956"/>' +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 3) + ' ' + (196 + (i % 4) * 14) + 'q2 -8 4 0" stroke="#4f7a36" stroke-width="1.4" fill="none"/>').join("") +
      [30, 120, 270, 360].map((x, i) => '<path d="M' + x + ' 196v-26" stroke="#5a4030" stroke-width="3"/><circle cx="' + x + '" cy="164" r="' + (12 + i % 2 * 3) + '" fill="#3f7a3a"/>').join("") +
      '<path d="M0 232q200 -20 400 0v28H0z" fill="#b8b2a4"/>',
      sky("cd2", "#6fb2e2", "#d8ecf4"));
  }

  /* 3. Towson University, where he went before he left to rap full time: Stephens Hall, the Jacobean stone building with the shaped gables and the clock tower, fall leaves coming down on the lawn */
  function cdtowson() {
    const STONE = "#b9ad97", DARK = "#9c8f78", WIN = "#2a3442";
    const gable = (x, w) => '<path d="M' + x + ' 120v-26q' + (w / 4) + ' -4 ' + (w / 4) + ' -14q' + (w / 4) + ' -10 ' + (w / 2) + ' 0q0 10 ' + (w / 4) + ' 14q' + (w / 4) + ' 0 ' + (w / 4) + ' 0v26z" fill="' + STONE + '" stroke="' + DARK + '" stroke-width="1.5"/>';
    const wins = (x, y, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * 16) + '" y="' + y + '" width="10" height="16" fill="' + WIN + '"/><path d="M' + (x + i * 16 + 5) + ' ' + y + 'v16M' + (x + i * 16) + ' ' + (y + 8) + 'h10" stroke="' + STONE + '" stroke-width="1"/>').join("");
    const leaves = Array.from({ length: 10 }, (_, i) => '<ellipse class="cd-lf' + ["", " cd-lf2", " cd-lf3"][i % 3] + '" cx="' + (30 + i * 38) + '" cy="' + (8 + (i * 29) % 60) + '" rx="4" ry="2.5" fill="' + ["#e0782c", "#f2c14e", "#b8452a"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cd3)"/>' + cloud(80, 30, .9, "cd-cl") +
      /* wings */
      '<rect x="20" y="116" width="150" height="80" fill="' + STONE + '"/><rect x="230" y="116" width="150" height="80" fill="' + STONE + '"/>' +
      '<path d="M16 116h158l-10 -12H26zM226 116h158l-10 -12H236z" fill="#6a5a4a"/>' + gable(40, 44) + gable(116, 44) + gable(246, 44) + gable(322, 44) +
      wins(30, 132, 8) + wins(240, 132, 8) + wins(30, 162, 8) + wins(240, 162, 8) +
      /* central tower */
      '<rect x="170" y="56" width="60" height="140" fill="' + STONE + '" stroke="' + DARK + '" stroke-width="1.5"/><rect x="166" y="96" width="68" height="6" fill="' + DARK + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (168 + i * 11) + '" y="48" width="7" height="9" fill="' + STONE + '" stroke="' + DARK + '" stroke-width="1"/>').join("") +
      '<path d="M184 48v-14l16 -14l16 14v14z" fill="#5f8a7a" stroke="#4a6e60" stroke-width="1.5"/><path d="M200 20v-10" stroke="#4a6e60" stroke-width="2"/>' +
      '<circle cx="200" cy="64" r="0" fill="none"/>' +
      '<circle cx="200" cy="76" r="13" fill="#f4efe2" stroke="#3a3a3a" stroke-width="2"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (200 + Math.sin(a) * 10).toFixed(1) + ' ' + (76 - Math.cos(a) * 10).toFixed(1) + 'L' + (200 + Math.sin(a) * 12).toFixed(1) + ' ' + (76 - Math.cos(a) * 12).toFixed(1) + '" stroke="#3a3a3a" stroke-width="1.2"/>'; }).join("") +
      '<g style="transform-box:view-box;transform-origin:200px 76px;animation:cdhand 8s linear infinite"><path d="M200 76v-10" stroke="#222" stroke-width="1.6"/></g><path d="M200 76h6" stroke="#222" stroke-width="2"/>' +
      '<path d="M188 196v-30q12 -14 24 0v30z" fill="#3a2a22"/>' + wins(178, 112, 3) + wins(178, 140, 3) +
      '<rect x="0" y="196" width="400" height="64" fill="#5f8f45"/><path d="M180 260l8 -64h24l8 64z" fill="#c8bfae"/>' +
      [20, 380].map(x => '<path d="M' + x + ' 200v-40" stroke="#5a4030" stroke-width="4"/><circle cx="' + x + '" cy="150" r="22" fill="#d9822b"/>').join("") +
      leaves,
      sky("cd3", "#86b9e0", "#f2e3c8"));
  }

  /* 4. Raleigh, where he was born: the big copper Acorn in City Plaza on Fayetteville St, the downtown towers lit up, the New Year's night confetti and fireworks over the City of Oaks */
  function cdacorn() {
    const conf = Array.from({ length: 22 }, (_, i) => '<rect class="cd-cf" style="animation-delay:-' + ((i * 0.37) % 4.5).toFixed(2) + 's" x="' + (8 + i * 18) + '" y="0" width="4" height="7" fill="' + [GOLD, BLUE, CORAL, "#fff"][i % 4] + '" transform="rotate(' + (i * 23 % 60 - 30) + ' ' + (10 + i * 18) + ' 4)"/>').join("");
    const fw = (x, y, c, cls) => '<g class="' + cls + '">' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + x + ' ' + y + 'l' + (Math.cos(a) * 26).toFixed(1) + ' ' + (Math.sin(a) * 26).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cd4)"/>' + stars(18) + fw(80, 50, GOLD, "cd-fw") + fw(320, 40, BLUE, "cd-fw cd-fw2") +
      '<g fill="#1c2438"><rect x="0" y="80" width="60" height="110"/><rect x="66" y="50" width="52" height="140"/><rect x="290" y="30" width="56" height="160"/><path d="M290 30l28 -16l28 16z"/><rect x="350" y="70" width="50" height="120"/><rect x="122" y="96" width="40" height="94"/><rect x="250" y="90" width="36" height="100"/></g>' +
      Array.from({ length: 40 }, (_, i) => { const cols = [[4, 60], [72, 110], [296, 340], [356, 396], [128, 156], [256, 280]]; const c = cols[i % 6]; return '<rect class="' + (i % 5 ? "" : "cd-glow") + '" x="' + (c[0] + (i * 7) % (c[1] - c[0] - 4)) + '" y="' + (60 + (i * 13) % 120) + '" width="4" height="5" fill="#ffd98a" opacity=".8"/>'; }).join("") +
      /* plaza + acorn */
      '<rect x="0" y="190" width="400" height="70" fill="#5a5650"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-30 70" stroke="#4a4640" stroke-width="1.5"/>').join("") +
      '<g opacity=".14"><ellipse class="cd-glow" cx="200" cy="132" rx="62" ry="56" fill="' + GOLD + '"/></g>' + '<rect x="168" y="168" width="64" height="26" fill="#8a8478"/><rect x="160" y="190" width="80" height="8" fill="#7a7468"/>' +
      '<path d="M200 168q-34 -6 -34 -40q0 -14 6 -22h56q6 8 6 22q0 34 -34 40z" fill="#b8733a" stroke="#7a4a22" stroke-width="2"/>' +
      '<path d="M182 120q-4 24 8 40M200 112v52M218 120q4 24 -8 40" stroke="#d48d4e" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path d="M164 108q36 -40 72 0z" fill="#7a5a32" stroke="#4e3a20" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (170 + i * 10) + ' 106l4 -8l4 8" stroke="#4e3a20" stroke-width="1.4" fill="none"/>').join("") +
      '<path d="M200 74v-10q4 -6 10 -4" stroke="#4e3a20" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      conf,
      sky("cd4", "#0b1230", "#3a2850"));
  }

  /* 5. Silver Hill Rd and Suitland Rd by the Federal Center: green signs, CORDAE tagged on the wall, the Census building's oak-veiled curve low behind, a big jet easing down toward Joint Base Andrews at dusk */
  function cdcorner() {
    const jet = '<g class="cd-jet"><g transform="translate(0 46)"><path d="M0 10q10 -6 30 -6h70q12 0 16 6q-4 6 -16 6H30q-20 0 -30 -6z" fill="#f4f6f8" stroke="#8a96a4" stroke-width="1"/><path d="M8 10h100" stroke="#3a6ea8" stroke-width="2.4"/>' +
      '<path d="M50 10l-18 22h10l26 -22z" fill="#dfe4ea" stroke="#8a96a4" stroke-width="1"/><path d="M10 6l-8 -14h8l14 12z" fill="#3a6ea8"/>' + Array.from({ length: 8 }, (_, i) => '<circle cx="' + (38 + i * 8) + '" cy="8" r="1.3" fill="#3a4a5a"/>').join("") + '<circle class="cd-glow" cx="2" cy="-6" r="2" fill="#ff4a4a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cd5)"/>' + stars(10) + jet +
      /* the Census curve low behind */
      '<path d="M10 124Q200 100 390 124V140H10z" fill="#2e4656"/>' + Array.from({ length: 48 }, (_, i) => { const x = 10 + i * 8, t = (x - 10) / 380, y = 124 - 24 * 4 * t * (1 - t) * 0.5; return '<path d="M' + x + ' ' + y.toFixed(1) + 'V140" stroke="#c99a62" stroke-width="2"/>'; }).join("") +
      '<g fill="#22263a"><rect x="0" y="118" width="40" height="22"/><rect x="360" y="114" width="40" height="26"/></g>' +
      '<rect x="0" y="136" width="400" height="88" fill="#6e4636"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5e3a2c" stroke-width="1"/>').join("") +
      tag("CORDAE", 18, 192, 50, BLUE, -6) + tag("HI-LEVEL", 232, 170, 26, GOLD, -4) + tag("HAVE MERCY", 28, 216, 17, "#fff", -3) + tag("SUITLAND", 186, 214, 19, CORAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 112, "Silver Hill Rd") + sign(294, 124, 98, "Suitland Rd") +
      '<g class="cd-sp"><circle cx="156" cy="162" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="cd-sp cd-sp2"><circle cx="162" cy="156" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("cd5", "#1a2448", "#d8784e"));
  }

  window.SCENES = { cdstation: cdstation, cdcensus: cdcensus, cdtowson: cdtowson, cdacorn: cdacorn, cdcorner: cdcorner };
})();
