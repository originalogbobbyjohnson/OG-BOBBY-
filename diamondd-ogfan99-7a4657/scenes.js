/* Bronx opening scenes for the Diamond D game: D.I.T.C., the Psychotic Neurotics, the Forest Houses. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(500px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carL{from{transform:translateX(500px)}to{transform:translateX(-140px)}}' +
    '.carL{animation:carL 9s linear infinite}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:center;animation:spin 1.8s linear infinite}' +
    '@keyframes pad{0%,100%{opacity:.35}50%{opacity:1}}' +
    '.pad{animation:pad .9s steps(1) infinite}.pad2{animation-delay:-.3s}.pad3{animation-delay:-.6s}' +
    '@keyframes glint{0%,70%,100%{opacity:0}80%{opacity:1}}' +
    '.glint{animation:glint 2.6s infinite}.glint2{animation-delay:-1.3s}' +
    '@keyframes wave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-10deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:left center;animation:wave 1.4s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const vinyl = (cx, cy, r, c, cls) =>
    '<g' + (cls ? ' class="' + cls + '"' : "") + '><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .78) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .58) + '" fill="none" stroke="#2c2c2c" stroke-width="1"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .34) + '" fill="' + c + '"/><rect x="' + (cx - r * .2) + '" y="' + (cy - r * .2) + '" width="' + (r * .14) + '" height="' + (r * .08) + '" fill="#fff" opacity=".7"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * .06) + '" fill="#e8e0cc"/></g>';
  /* a cut diamond: crown + pavilion facets */
  const gem = (cx, cy, s, c) =>
    '<g><path d="M' + (cx - s) + ' ' + cy + 'l' + (s * .4) + ' ' + (-s * .55) + 'h' + (s * 1.2) + 'l' + (s * .4) + ' ' + (s * .55) + 'l' + (-s) + ' ' + (s * 1.2) + 'z" fill="' + c + '" stroke="#fff" stroke-width="1.2"/>' +
    '<path d="M' + (cx - s) + ' ' + cy + 'h' + (s * 2) + 'M' + (cx - s * .2) + ' ' + (cy - s * .55) + 'l' + (-s * .3) + ' ' + (s * .55) + 'l' + (s * .5) + ' ' + (s * 1.2) + 'l' + (s * .5) + ' ' + (-s * 1.2) + 'l' + (-s * .3) + ' ' + (-s * .55) + '" stroke="#fff" stroke-width=".9" fill="none" opacity=".8"/></g>';
  const ICE = "#7fd6f0", GOLD = "#f2c14e", RED = "#e04f6a", CREAM = "#f3e6c8";

  /* 1. The 2 / 5 pulling into Jackson Av, up on the el over Westchester Av: canopy, the steel el, the Bronx below */
  function train() {
    let girders = "";
    for (let x = 0; x < 400; x += 50) girders += '<rect x="' + (x + 20) + '" y="196" width="10" height="64" fill="#3a4450"/><path d="M' + (x + 20) + ' 200l-18 22M' + (x + 30) + ' 200l18 22" stroke="#3a4450" stroke-width="4"/>';
    let windows = "";
    for (let x = 18; x < 250; x += 46) windows += '<rect x="' + x + '" y="118" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    let bldg = "";
    [[0, 64, 64, "#6a3a2c"], [64, 88, 50, "#5b3226"], [296, 70, 56, "#7a4a34"], [352, 90, 48, "#5b3226"]].forEach(b => {
      bldg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="' + b[3] + '"/>';
      for (let y = b[1] + 8; y < 100; y += 14) for (let x = b[0] + 6; x < b[0] + b[2] - 8; x += 14) bldg += '<rect x="' + x + '" y="' + y + '" width="7" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) + bldg +
      '<path d="M0 22h400v10H0z" fill="#3a4450"/><path d="M0 32h400" stroke="#222a33" stroke-width="3"/>' +
      '<rect x="40" y="32" width="6" height="68" fill="#3a4450"/><rect x="354" y="32" width="6" height="68" fill="#3a4450"/>' +
      '<g class="flk"><rect x="150" y="34" width="100" height="4" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="98" y="44" width="204" height="34" rx="4" fill="#111"/><rect x="98" y="44" width="204" height="4" fill="#fff"/>' +
      '<text x="110" y="69" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Jackson Av</text>' +
      bullet(252, 62, "2", "#ee352e") + bullet(280, 62, "5", "#00933c") +
      '<rect x="0" y="100" width="400" height="6" fill="#4a3a2a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#00933c"/>' + windows +
        '<circle cx="300" cy="160" r="4" fill="#fff6c2"/>' + bullet(290, 126, "5", "#00933c") +
      '</g>' +
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="18" fill="#5a4a3a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#15171a"/>' + girders +
      '<path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("D.I.T.C.", 30, 238, 30, ICE, -5) + tag("DIAMOND D", 210, 242, 26, GOLD, -7),
      sky("g1", "#0a1426", "#3a2a4a"));
  }

  /* 2. The Hub, 149th St and Third Av: the five-way crossing, store fronts and awnings, buses and cabs, crowds of shoppers */
  function hub() {
    const front = (x, w, c, aw) => {
      let s = '<rect x="' + x + '" y="60" width="' + w + '" height="140" fill="' + c + '"/>';
      for (let y = 70; y < 140; y += 18) for (let xx = x + 8; xx < x + w - 10; xx += 18) s += '<rect x="' + xx + '" y="' + y + '" width="10" height="11" fill="' + ((xx + y) % 4 ? "#2a2a3a" : "#ffe9b0") + '"/>';
      s += '<path d="M' + x + ' 150h' + w + 'l-6 12H' + (x + 6) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="162" width="' + (w - 12) + '" height="38" fill="#ffe7a8" opacity=".55" class="flk"/>';
      return s;
    };
    const people = () => { let s = ""; for (let i = 0; i < 12; i++) { const x = 14 + i * 33, c = ["#e04f6a", "#7fd6f0", "#f2c14e", "#e8e0cc", "#6a9a5a"][i % 5]; s += '<circle cx="' + x + '" cy="200" r="4" fill="#3a2a22"/><rect x="' + (x - 4) + '" y="204" width="8" height="12" rx="2" fill="' + c + '"/>'; } return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="8" fill="#fff" opacity=".4"/></g>' +
      front(0, 96, "#8a5a44", "#e04f6a") + front(100, 100, "#b8a588", "#1f5fa8") + front(204, 92, "#7a4a3a", "#f2c14e") + front(300, 100, "#a88a6a", "#2f7a4a") +
      '<rect x="0" y="54" width="400" height="6" fill="#5a4a40"/>' +
      '<rect x="0" y="198" width="400" height="18" fill="#9a958c"/>' + people() +
      '<rect x="0" y="216" width="400" height="44" fill="#2e3136"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="218" width="100" height="22" rx="4" fill="#2a6ab8"/><rect x="6" y="222" width="80" height="8" fill="#cfe6f2"/><circle cx="18" cy="242" r="5" fill="#111"/><circle cx="82" cy="242" r="5" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="236" width="46" height="16" rx="4" fill="#f2c14e"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      sign(8, 8, 96, "E 149 St") + sign(296, 8, 96, "3 Av") + tag("THE HUB", 140, 40, 30, GOLD, -4),
      sky("g2", "#3a6ab0", "#f0c08a"));
  }

  /* 3. Yankee Stadium on River Av: pale limestone facade, tall arched openings, the white frieze along the roof, the 4 rolling by */
  function stadium() {
    let arches = "";
    for (let x = 30; x < 370; x += 46) arches += '<path d="M' + x + ' 196v-70a17 17 0 0 1 34 0v70z" fill="#2a3040"/><path d="M' + x + ' 140h34" stroke="#c9c2b0" stroke-width="2"/>';
    let frieze = "";
    for (let x = 4; x < 400; x += 16) frieze += '<path d="M' + x + ' 46v16a8 8 0 0 0 16 0v-16" stroke="#fff" stroke-width="3" fill="none"/>';
    let el = "";
    for (let x = 10; x < 400; x += 60) el += '<rect x="' + x + '" y="214" width="6" height="46" fill="#3a4450"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="22" rx="44" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* light towers */
      '<rect x="20" y="0" width="34" height="14" fill="#2a3040"/><g class="flk"><rect x="22" y="2" width="30" height="10" fill="#fff7d6"/></g>' +
      '<rect x="346" y="0" width="34" height="14" fill="#2a3040"/><g class="flk flk2"><rect x="348" y="2" width="30" height="10" fill="#fff7d6"/></g>' +
      /* frieze along the roof */
      '<rect x="0" y="40" width="400" height="8" fill="#1d3a6a"/>' + frieze +
      /* limestone facade */
      '<rect x="0" y="76" width="400" height="124" fill="#e2d8c0"/><path d="M0 76h400M0 112h400" stroke="#c9c2b0" stroke-width="2"/>' +
      (function () { let s = ""; for (let x = 20; x < 400; x += 46) s += '<rect x="' + (x + 2) + '" y="82" width="2" height="24" fill="#c9c2b0"/>'; return s; })() +
      arches +
      /* the elevated 4 train on River Av */
      '<rect x="0" y="200" width="400" height="14" fill="#3a4450"/>' + el +
      '<g class="carL"><rect x="0" y="178" width="140" height="22" rx="4" fill="#c9ced6" stroke="#6b7280"/><rect x="0" y="194" width="140" height="3" fill="#00933c"/>' +
        '<rect x="10" y="182" width="18" height="9" fill="#ffe9b0"/><rect x="40" y="182" width="18" height="9" fill="#ffe9b0"/><rect x="70" y="182" width="18" height="9" fill="#ffe9b0"/>' + bullet(116, 188, "4", "#00933c") + '</g>' +
      '<rect x="0" y="250" width="400" height="10" fill="#2e3136"/>' +
      sign(8, 222, 90, "River Av") + sign(302, 222, 90, "E 161 St"),
      sky("g3", "#2a5aa0", "#9fd0f0"));
  }

  /* 4. The beat lab: a drum machine with blinking pads, a turntable spinning, crates of records, a gold plaque on the wall */
  function studio() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pad' + ((r + c) % 3 === 1 ? " pad2" : (r + c) % 3 === 2 ? " pad3" : "") + '" x="' + (212 + c * 24) + '" y="' + (176 + r * 18) + '" width="18" height="12" rx="2" fill="' + [ICE, GOLD, RED][(r + c) % 3] + '"/>';
    let recs = "";
    for (let x = 14; x < 120; x += 9) recs += '<rect x="' + x + '" y="' + (176 + (x % 4)) + '" width="6" height="' + (34 - (x % 4)) + '" fill="' + ["#c9a24a", "#7a2a2a", "#2d4a6a", "#e8e0cc", "#4a6a3a", "#111"][x % 6] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14141c"/>' +
      /* acoustic foam wall */
      (function () { let s = ""; for (let y = 0; y < 150; y += 20) for (let x = (y / 20 % 2) * 10; x < 400; x += 20) s += '<rect x="' + x + '" y="' + y + '" width="18" height="18" fill="#22222e"/>'; return s; })() +
      /* gold plaque */
      '<rect x="150" y="18" width="100" height="100" fill="#3a2a1a" stroke="' + GOLD + '" stroke-width="3"/><circle cx="200" cy="60" r="32" fill="' + GOLD + '"/><circle cx="200" cy="60" r="10" fill="#3a2a1a"/>' +
      '<rect x="166" y="98" width="68" height="12" fill="#e8e0cc"/>' +
      gem(330, 50, 22, ICE) + '<circle class="glint" cx="322" cy="40" r="3" fill="#fff"/><circle class="glint glint2" cx="342" cy="54" r="2.5" fill="#fff"/>' +
      '<text class="note" x="60" y="110" font-size="18" fill="' + GOLD + '">♪</text><text class="note note2" x="96" y="120" font-size="16" fill="' + ICE + '">♫</text><text class="note note3" x="76" y="100" font-size="14" fill="#fff">♪</text>' +
      /* desk */
      '<rect x="0" y="150" width="400" height="10" fill="#6a4a2a"/><rect x="0" y="160" width="400" height="100" fill="#2a1c12"/>' +
      /* crate */
      '<rect x="8" y="170" width="120" height="50" fill="#a8743e" stroke="#5a3a1a" stroke-width="2"/>' + recs + '<path d="M8 196h120" stroke="#7a5228" stroke-width="2"/>' +
      /* drum machine */
      '<rect x="200" y="164" width="114" height="54" rx="4" fill="#9a9ea6" stroke="#4a4e56" stroke-width="2"/><rect x="290" y="170" width="18" height="8" fill="#2a3a2a"/><circle cx="299" cy="196" r="5" fill="#4a4e56"/>' + pads +
      /* turntable */
      '<rect x="320" y="150" width="76" height="62" rx="4" fill="#3a3a3e" stroke="#111" stroke-width="1.5"/>' + vinyl(352, 180, 24, RED, "spin") +
      '<path d="M388 158v20l-14 8" stroke="#c9d3dc" stroke-width="2.5" fill="none"/>' +
      tag("DIAM PIECE", 120, 248, 28, GOLD, -4),
      "");
  }

  /* 5. Trinity Av and E 163 St at the Forest Houses: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="276" y="24" width="116" height="196" fill="#8a4a32"/>' +
      (function () { let w = ""; for (let y = 34; y < 210; y += 16) for (let x = 286; x < 380; x += 20) w += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="110" width="236" height="110" fill="#2e2a2a"/>' +
      gem(236, 196, 9, ICE) + '<circle class="glint" cx="233" cy="192" r="2" fill="#fff"/>' +
      tag("DIAMOND D", 26, 176, 36, ICE, -7) + tag("BEST KEPT SECRET", 30, 210, 21, GOLD, -3) +
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M280 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(212, 64, 100, "Trinity Av") + sign(222, 86, 80, "E 163 St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#08101a", "#24304a"));
  }

  window.SCENES = { train, hub, stadium, studio, corner };
})();
