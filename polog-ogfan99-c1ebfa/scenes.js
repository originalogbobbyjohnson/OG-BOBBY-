/* polog scenes (Regions tab: Chicago; Old Town / Cabrini-Green, North Side). CSS classes and ids prefixed pg- (the page's own anim-train is kept).
   1 Sedgwick on the CTA Brown Line (Purple Line Express too): the station up on the steel 'L' over Sedgwick St, a silver train sliding in.
   2 The Marshall Field Garden Apartments (Sedgwick St at North Ave), where he grew up: the big red-brick courtyard blocks with limestone trim and arched gateways, windows lighting up.
   3 The Cabrini-Green rowhouses (Near North Side): the two-storey red-brick rows with white doors, the Loop skyline behind, a car rolling by.
   4 North Avenue Beach, a few blocks east of Sedgwick and North (Old Town's lakefront): the white steamship-shaped beach house with blue trim and portholes, waves, a volleyball bouncing.
   5 N Sedgwick St and W North Ave in Old Town: green signs, POLO G tagged, St. Michael's red-brick steeple rising behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pgflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pg-flk{animation:pgflick 2.4s infinite}.pg-flk2{animation-delay:.8s}' +
    '@keyframes pgcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.pg-car{animation:pgcar 5.5s linear infinite}.pg-car2{animation-delay:-2.7s}' +
    '@keyframes pgcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.pg-cloud{animation:pgcloud 24s linear infinite}.pg-cloud2{animation-delay:-12s}' +
    '@keyframes pgglow{0%,100%{opacity:.3}50%{opacity:1}}.pg-glow{animation:pgglow 2.8s ease-in-out infinite}.pg-glow2{animation-delay:-1.4s}' +
    '@keyframes pgbird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}.pg-bird{animation:pgbird 10s linear infinite}' +
    '@keyframes pgsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.pg-beam{transform-box:fill-box;transform-origin:50% 100%;animation:pgsweep 4s ease-in-out infinite}.pg-beam2{animation-delay:-2s}' +
    '@keyframes pgtw{0%,100%{opacity:.2}50%{opacity:1}}.pg-tw{animation:pgtw 1.6s ease-in-out infinite}.pg-tw2{animation-delay:-.8s}' +
    '@keyframes pgsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.pg-palm{transform-box:fill-box;transform-origin:50% 100%;animation:pgsway 3s ease-in-out infinite}' +
    '@keyframes pgsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.pg-sp{animation:pgsp 1.3s ease-out infinite}.pg-sp2{animation-delay:-.6s}' +
    '@keyframes pgwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.pg-wave{animation:pgwave 3s ease-in-out infinite}.pg-wave2{animation-delay:-1.5s}' +
    '@keyframes pgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.pg-flag{transform-box:fill-box;transform-origin:0 50%;animation:pgflag 1.2s ease-in-out infinite}.pg-flag2{animation-delay:-.6s}' +
    '@keyframes pgball{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}.pg-ball{animation:pgball 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const BRN = "#62361b", PUR = "#522398", GOLD = "#f2c14e", BLUE = "#2d6cdf", BRICK = "#9a4430";
  const brick = (x, y, w, h, c, m) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (c || BRICK) + '"/>' +
    Array.from({ length: Math.floor(h / 5) }, (_, i) => '<path d="M' + x + ' ' + (y + 5 + i * 5) + 'h' + w + '" stroke="' + (m || "#7a3122") + '" stroke-width=".7"/>').join("");
  /* a silver CTA 'L' car */
  const lcar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="5" fill="#cfd4d8" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 16) / 24) }, (_, i) => '<rect x="' + (x + 10 + i * 24) + '" y="' + (y + 8) + '" width="16" height="16" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 32) + '" width="' + w + '" height="4" fill="' + BRN + '"/><rect x="' + x + '" y="' + (y + 38) + '" width="' + w + '" height="3" fill="#8f979e"/>';

  /* 1. Sedgwick, CTA Brown Line */
  function pgstation() {
    const train = '<g class="anim-train">' + lcar(16, 96, 170) + lcar(190, 96, 170) +
      '<rect x="338" y="100" width="20" height="42" rx="3" fill="#b6bcc2"/><circle cx="348" cy="136" r="3.5" fill="#fff6c2"/>' +
      '<rect x="280" y="84" width="70" height="10" rx="2" fill="#111"/><text x="315" y="92" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">KIMBALL</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pgs1)"/>' +
      '<g class="pg-cloud"><ellipse cx="40" cy="30" rx="30" ry="9" fill="#fff" opacity=".5"/></g><g class="pg-cloud pg-cloud2"><ellipse cx="40" cy="52" rx="22" ry="7" fill="#fff" opacity=".4"/></g>' +
      '<g fill="#8a7f78" opacity=".7"><rect x="0" y="60" width="50" height="90"/><rect x="350" y="50" width="50" height="100"/></g>' +
      /* canopy */
      '<path d="M40 66h320l-12 14H52z" fill="' + BRN + '"/><rect x="40" y="62" width="320" height="5" fill="#3a2010"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="80" width="4" height="70" fill="#4a3a30"/>').join("") +
      '<g class="pg-flk"><rect x="110" y="82" width="30" height="3" fill="#fff3c4"/></g><g class="pg-flk pg-flk2"><rect x="250" y="82" width="30" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="146" width="400" height="5" fill="#f2c200"/><rect x="0" y="151" width="400" height="14" fill="#8e8a82"/>' +
      /* steel L structure */
      '<rect x="0" y="165" width="400" height="12" fill="#4b5157"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 165l10 12l10 -12" stroke="#383d42" stroke-width="2" fill="none"/>').join("") +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 5) + '" y="177" width="10" height="60" fill="#4b5157"/><path d="M' + (x - 14) + ' 177l9 12M' + (x + 14) + ' 177l-9 12" stroke="#4b5157" stroke-width="4"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4c55"/><path d="M0 248h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("pg-car", 0, 240, "#e6e6e6") + car("pg-car pg-car2", 0, 240, BLUE) +
      '<rect x="96" y="186" width="208" height="28" rx="3" fill="#111"/><text x="108" y="206" ' + font + ' font-size="16" fill="#fff">Sedgwick</text>' + badge(220, 200, "BRN", BRN) + badge(262, 200, "P", PUR) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">CTA BROWN LINE · UP ON THE L · OLD TOWN</text>',
      sky("pgs1", "#9fcbea", "#f6e3c6"));
  }

  /* 2. Marshall Field Garden Apartments */
  function pgfield() {
    const block = (x, y, w, h, cols) => brick(x, y, w, h) + '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#d9cdb4"/>' +
      Array.from({ length: Math.floor((h - 34) / 22) }, (_, r) => Array.from({ length: cols }, (_, c) => '<rect class="' + ((r + c) % 4 ? "" : ((r + c) % 8 ? "pg-glow" : "pg-glow pg-glow2")) + '" x="' + (x + 8 + c * ((w - 16) / cols)) + '" y="' + (y + 10 + r * 22) + '" width="' + ((w - 16) / cols - 8) + '" height="13" fill="' + ((r + c) % 4 ? "#3a4652" : "#ffd98a") + '"/><rect x="' + (x + 6 + c * ((w - 16) / cols)) + '" y="' + (y + 23 + r * 22) + '" width="' + ((w - 16) / cols - 4) + '" height="2" fill="#d9cdb4"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pgs2)"/>' +
      '<g class="pg-cloud"><ellipse cx="60" cy="30" rx="34" ry="9" fill="#fff" opacity=".6"/></g>' +
      block(0, 70, 110, 140, 4) + block(290, 70, 110, 140, 4) + block(120, 54, 160, 156, 6) +
      /* arched gateway into the courtyard */
      '<rect x="168" y="150" width="64" height="60" fill="#d9cdb4"/><path d="M176 210v-40q24 -24 48 0v40z" fill="#2a2f35"/><path d="M182 210v-36q18 -18 36 0v36z" fill="#4f7a3e"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#4a4c55"/><path d="M0 240h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      '<g fill="#3f6b3a"><circle cx="110" cy="200" r="16"/><circle cx="290" cy="200" r="16"/></g><rect x="108" y="200" width="4" height="12" fill="#4a3a2a"/><rect x="288" y="200" width="4" height="12" fill="#4a3a2a"/>' +
      car("pg-car", 0, 232, GOLD) +
      '<g class="pg-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="64" y="8" width="272" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MARSHALL FIELD GARDEN APTS · SEDGWICK ST</text>',
      sky("pgs2", "#86b8e0", "#f2dcc0"));
  }

  /* 3. Cabrini-Green rowhouses */
  function pgcabrini() {
    const row = (x, n) => Array.from({ length: n }, (_, i) => {
      const xx = x + i * 46;
      return brick(xx, 120, 46, 80) + '<path d="M' + xx + ' 120l23 -18l23 18z" fill="#5a4a42"/>' +
        '<rect x="' + (xx + 6) + '" y="132" width="14" height="16" fill="#3a4652"/><rect x="' + (xx + 26) + '" y="132" width="14" height="16" fill="#3a4652"/>' +
        '<rect x="' + (xx + 6) + '" y="166" width="14" height="16" fill="' + (i % 3 ? "#3a4652" : "#ffd98a") + '" class="' + (i % 3 ? "" : "pg-glow") + '"/><rect x="' + (xx + 26) + '" y="160" width="14" height="40" fill="#f2f0ea"/><circle cx="' + (xx + 37) + '" cy="181" r="1.4" fill="#333"/>' +
        '<path d="M' + xx + ' 120v80" stroke="#6b2a1c" stroke-width="1.5"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pgs3)"/>' +
      '<g class="pg-cloud"><ellipse cx="40" cy="26" rx="30" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<g fill="#7f8b99" opacity=".75"><rect x="20" y="60" width="26" height="60"/><rect x="50" y="40" width="22" height="80"/><rect x="76" y="70" width="30" height="50"/><rect x="120" y="30" width="20" height="90"/><rect x="144" y="56" width="28" height="64"/>' +
      '<rect x="200" y="46" width="24" height="74"/><rect x="230" y="66" width="30" height="54"/><rect x="270" y="36" width="20" height="84"/><rect x="296" y="58" width="34" height="62"/><rect x="340" y="74" width="40" height="46"/></g>' +
      row(0, 9) +
      '<rect x="0" y="200" width="400" height="14" fill="#7aa35a"/><rect x="0" y="214" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#4a4c55"/><path d="M0 240h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("pg-car", 0, 232, "#e6e6e6") + car("pg-car pg-car2", 0, 232, BLUE) +
      '<g class="pg-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="100" y="6" width="200" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CABRINI-GREEN · NEAR NORTH SIDE</text>',
      sky("pgs3", "#9ccbe8", "#f4e6cf"));
  }

  /* 4. North Avenue Beach, a few blocks east of Sedgwick and North */
  function pgbeach() {
    const port = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#2d4f7a" stroke="#fff" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pgs4)"/>' +
      '<g class="pg-cloud"><ellipse cx="40" cy="30" rx="30" ry="8" fill="#fff" opacity=".7"/></g><g class="pg-cloud pg-cloud2"><ellipse cx="40" cy="54" rx="22" ry="6" fill="#fff" opacity=".5"/></g>' +
      '<g fill="#8094aa" opacity=".8"><rect x="250" y="70" width="12" height="60"/><rect x="266" y="54" width="14" height="76"/><rect x="284" y="80" width="12" height="50"/><rect x="300" y="62" width="16" height="68"/><rect x="320" y="86" width="14" height="44"/><rect x="338" y="74" width="12" height="56"/><rect x="354" y="92" width="18" height="38"/></g>' +
      '<rect x="0" y="128" width="400" height="44" fill="#2f7fa8"/>' +
      '<g class="pg-wave"><path d="M-20 140q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f5" stroke-width="2" fill="none"/></g>' +
      '<g class="pg-wave pg-wave2"><path d="M-20 158q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d8f1fa" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="168" width="400" height="92" fill="#e8d3a2"/><path d="M0 168q100 6 200 0t200 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
      /* the steamship-shaped beach house: white decks, blue trim, portholes, two masts */
      '<path d="M24 196h220l-14 28H40z" fill="#f4f4f0" stroke="#2d4f7a" stroke-width="2"/><rect x="24" y="190" width="220" height="7" fill="#2d6cdf"/>' +
      [52, 80, 108, 136, 164, 192, 220].map(x => port(x, 208)).join("") +
      '<rect x="60" y="162" width="150" height="28" fill="#f4f4f0" stroke="#2d4f7a" stroke-width="2"/><rect x="60" y="158" width="150" height="6" fill="#2d6cdf"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (68 + i * 24) + '" y="168" width="16" height="12" fill="#9fd0f0"/>').join("") +
      '<rect x="96" y="134" width="10" height="26" fill="#f4f4f0" stroke="#2d4f7a" stroke-width="1.5"/><rect x="164" y="128" width="10" height="32" fill="#f4f4f0" stroke="#2d4f7a" stroke-width="1.5"/>' +
      '<path d="M101 134v-14M169 128v-16" stroke="#2d4f7a" stroke-width="2"/><g class="pg-flag"><path d="M101 120l14 4l-14 4z" fill="#f2c14e"/></g><g class="pg-flag pg-flag2"><path d="M169 112l14 4l-14 4z" fill="#2d6cdf"/></g>' +
      /* volleyball net and a ball bouncing */
      '<path d="M290 236v-40M370 236v-40" stroke="#555" stroke-width="2"/><rect x="290" y="196" width="80" height="12" fill="none" stroke="#555" stroke-width="1.5"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (300 + i * 10) + ' 196v12" stroke="#777" stroke-width="1"/>').join("") +
      '<g class="pg-ball"><circle cx="330" cy="180" r="6" fill="#fff" stroke="#c9a24a" stroke-width="1.5"/></g>' +
      '<g class="pg-bird"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<rect x="100" y="6" width="200" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NORTH AVENUE BEACH · OLD TOWN</text>',
      sky("pgs4", "#7ab8e2", "#e6f2f8"));
  }

  /* 5. N Sedgwick St and W North Ave, Old Town */
  function pgcorner() {
    const church = '<g><rect x="244" y="54" width="44" height="90" fill="#9a4a32"/><rect x="248" y="40" width="36" height="16" fill="#8c4029"/><path d="M248 40l18 -36l18 36z" fill="#5e7a6a"/>' +
      '<circle cx="266" cy="74" r="9" fill="#f1ead8" stroke="#5a3a2a" stroke-width="2"/><path d="M266 74v-6M266 74l4 2" stroke="#333" stroke-width="1.5"/>' +
      '<path d="M258 92h16v24h-16z" fill="#3a2a22"/><path d="M266 92v24" stroke="#9a4a32" stroke-width="1.5"/><rect x="200" y="100" width="44" height="44" fill="#a65538"/><path d="M196 102l26 -20l26 20z" fill="#7a3a26"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pgs5)"/>' + church +
      '<g fill="#2a2440"><rect x="0" y="96" width="70" height="44"/><rect x="74" y="110" width="60" height="30"/><rect x="320" y="100" width="80" height="40"/></g>' +
      '<rect x="0" y="130" width="400" height="94" fill="#7d5a48"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#644637" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#644637" stroke-width="1"/>').join("")).join("") +
      tag("POLO G", 16, 194, 54, GOLD, -6) + tag("ODA", 196, 212, 20, BLUE, -4) + tag("CAPALOT", 26, 218, 17, "#fff", -3) + tag("RAPSTAR", 110, 222, 15, "#e7a3b3", -5) +
      '<g class="pg-sp"><circle cx="246" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pg-sp pg-sp2"><circle cx="252" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("pg-car", 0, 240, "#e6e6e6") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(272, 112, 120, "W North Ave") + sign(246, 138, 146, "N Sedgwick St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="pg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("pgs5", "#1e1a3c", "#e0805a"));
  }

  window.SCENES = { pgstation: pgstation, pgfield: pgfield, pgcabrini: pgcabrini, pgbeach: pgbeach, pgcorner: pgcorner };
})();
