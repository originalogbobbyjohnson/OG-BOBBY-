/* ralphtresvant scenes (Regions tab: BOSTON + NEW ENGLAND; Roxbury, Boston, where Ralph "Rizz" Tresvant was born and raised and where New Edition started). CSS classes prefixed rt- (the page's own anim-train is kept).
   1 Ruggles station, Roxbury (Orange Line + Commuter Rail): the tracks down in the Southwest Corridor cut, the long tubular-frame canopy and the arched concourse above, an Orange Line train sliding in, black station sign.
   2 Martin Luther King Jr. Park (the old Washington Park / Malcolm X Park) on the Roxbury hills: grassy slopes, the ball court, kids shooting around, kites up.
   3 The Hatch Shell on the Charles River Esplanade: Boston's big outdoor concert shell, the stage lit, sailboats on the river, the crowd on the lawn.
   4 The Garden on Causeway St, the hometown arena: the big glass front lit up, the marquee chasing, commuter trains in North Station below.
   5 Tremont St and Ruggles St in Roxbury: green signs, RIZZ tagged on the brick, Old South Church's bell tower up on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rtglow{0%,100%{opacity:.4}50%{opacity:1}}.rt-glow{animation:rtglow 2.4s ease-in-out infinite}.rt-glow2{animation-delay:-1.2s}' +
    '@keyframes rtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.rt-note{animation:rtnote 3.6s ease-out infinite}.rt-n2{animation-delay:-1.2s}.rt-n3{animation-delay:-2.4s}' +
    '@keyframes rtball{0%,100%{transform:translate(0,0)}50%{transform:translate(22px,-34px)}}.rt-ball{animation:rtball 1.6s ease-in-out infinite}' +
    '@keyframes rtkite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(8px,-6px) rotate(6deg)}}.rt-kite{transform-box:fill-box;transform-origin:50% 100%;animation:rtkite 3s ease-in-out infinite}' +
    '@keyframes rtsail{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}.rt-sail{animation:rtsail 6s ease-in-out infinite}.rt-sail2{animation-delay:-3s}' +
    '@keyframes rtbulb{0%,100%{opacity:.25}50%{opacity:1}}.rt-b{animation:rtbulb .8s linear infinite}.rt-b2{animation-delay:-.4s}' +
    '@keyframes rtcr{from{transform:translateX(-260px)}to{transform:translateX(520px)}}.rt-cr{animation:rtcr 9s linear infinite}' +
    '@keyframes rtcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rt-car{animation:rtcar 7s linear infinite}' +
    '@keyframes rtwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.rt-wave{animation:rtwave 3s linear infinite}' +
    '@keyframes rtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rt-sp{animation:rtspray 1.4s ease-out infinite}.rt-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rt-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="rt-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const pill = (x, y, c, t) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (t.length * 7 + 14) + '" height="18" rx="9" fill="' + c + '"/><text x="' + (x + (t.length * 7 + 14) / 2) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
  const LAV = "#b89cff", OL = "#ed8b00", CR = "#80276c", ICE = "#e9f1ff", GOLD = "#e8c06a";

  /* 1. Ruggles station, Orange Line + Commuter Rail */
  function rtstation() {
    const car = x => '<rect x="' + x + '" y="128" width="160" height="60" rx="5" fill="#d8dde2" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="134" width="160" height="6" fill="' + OL + '"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 37) + '" y="146" width="24" height="20" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 64) + '" y="144" width="16" height="40" fill="#b0b6bc"/><path d="M' + (x + 72) + ' 144v40" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 24) + '" cy="190" r="5" fill="#222"/><circle cx="' + (x + 136) + '" cy="190" r="5" fill="#222"/>';
    const cab = '<path d="M332 188v-56q0-4 4-4h40q14 6 18 24v36z" fill="#d8dde2" stroke="#6b7177" stroke-width="1.5"/><rect x="332" y="134" width="60" height="6" fill="' + OL + '"/><path d="M362 144h16q10 4 13 16h-29z" fill="#11161c"/>' +
      '<rect x="340" y="146" width="18" height="7" rx="1" fill="#000"/><text x="349" y="151.5" text-anchor="middle" ' + font + ' font-size="5" fill="' + OL + '">OAK GR</text><circle class="rt-glow" cx="388" cy="178" r="3" fill="#fff6c2"/><circle cx="360" cy="190" r="5" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rt-s1)"/>' + stars(10) +
      /* the arched concourse crossing on an angle, high above */
      '<path d="M40 70Q200 -10 360 70" stroke="#c9ced6" stroke-width="10" fill="none"/><path d="M40 70Q200 -10 360 70" stroke="#7a8290" stroke-width="2" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const x = 60 + i * 35; const y = 70 - 80 * (1 - Math.pow((x - 200) / 160, 2)) * 0.5; return '<path d="M' + x + ' ' + (y + 4) + 'V92" stroke="#9aa2ae" stroke-width="1.2"/>'; }).join("") +
      /* tubular-frame canopy */
      '<rect x="0" y="88" width="400" height="10" fill="#b8bec8"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 88l10 10l10 -10" stroke="#6b7486" stroke-width="1.6" fill="none"/>').join("") +
      '<rect x="0" y="98" width="400" height="3" fill="#6b7486"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 4) + '" y="100" width="8" height="26" fill="#8a92a0"/>').join("") +
      /* brick wall of the Southwest Corridor cut */
      '<rect x="0" y="104" width="400" height="22" fill="#8a4a3a"/>' + Array.from({ length: 3 }, (_, i) => '<path d="M0 ' + (110 + i * 6) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      '<rect x="0" y="124" width="400" height="4" fill="#54504a"/>' +
      '<g class="anim-train">' + car(8) + car(170) + cab + '</g>' +
      '<rect x="0" y="194" width="400" height="8" fill="#d8d2c4"/><rect x="0" y="198" width="400" height="3" fill="#f2c14e"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#7d7a76"/>' +
      /* station sign */
      '<rect x="66" y="210" width="268" height="42" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="170" y="238" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">RUGGLES</text>' +
      pill(236, 224, OL, "ORANGE") + pill(236, 242, CR, "RAIL") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '">ORANGE LINE + COMMUTER RAIL · ROXBURY</text>',
      sky("rt-s1", "#16163a", "#b0708a"));
  }

  /* 2. Martin Luther King Jr. Park, Roxbury */
  function rtpark() {
    const kid = (x, c) => '<circle cx="' + x + '" cy="190" r="5" fill="#3a2418"/><rect x="' + (x - 5) + '" y="195" width="10" height="16" rx="3" fill="' + c + '"/><path d="M' + (x - 3) + ' 211v10M' + (x + 3) + ' 211v10" stroke="#1a1416" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rt-s2)"/>' +
      /* Roxbury triple-deckers on the hill behind */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 4) + '" y="' + (70 + (i % 3) * 6) + '" width="40" height="46" fill="' + ["#c9b48a", "#8aa0b8", "#b8796a"][i % 3] + '"/><path d="M' + (i * 52) + ' ' + (70 + (i % 3) * 6) + 'l24 -12l24 12z" fill="#3a3a44"/>' + [0, 1, 2].map(r => '<rect x="' + (i * 52 + 10) + '" y="' + (76 + (i % 3) * 6 + r * 13) + '" width="8" height="8" fill="#fff4c8" opacity=".7"/><rect x="' + (i * 52 + 26) + '" y="' + (76 + (i % 3) * 6 + r * 13) + '" width="8" height="8" fill="#fff4c8" opacity=".7"/>').join("")).join("") +
      /* rolling park hills */
      '<path d="M0 130q100 -40 200 -6t200 -10v146H0z" fill="#5a8a3a"/><path d="M0 170q120 -30 240 0t160 -6v96H0z" fill="#4a7a30"/>' +
      tree(40, 140, 1.7, "#2f5a26") + tree(352, 132, 1.9, "#2f5a26") + tree(250, 120, 1.2, "#3a6a2c") +
      /* ball court */
      '<path d="M120 236L150 176h170l30 60z" fill="#b5523a"/><path d="M135 206h200" stroke="#fff" stroke-width="1.5"/><ellipse cx="235" cy="206" rx="20" ry="6" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      '<rect x="318" y="130" width="5" height="60" fill="#555"/><rect x="300" y="126" width="30" height="20" fill="#f4f4f4" stroke="#555"/><rect x="310" y="136" width="10" height="8" fill="none" stroke="' + OL + '" stroke-width="1.5"/><path d="M306 148h18l-3 10h-12z" fill="none" stroke="#ddd" stroke-width="1"/>' +
      kid(250, LAV) + kid(280, OL) + '<g class="rt-ball"><circle cx="262" cy="180" r="5" fill="#e07a2a" stroke="#6a2a0a"/></g>' +
      /* kites */
      '<g class="rt-kite"><path d="M70 40l14 -16l14 16l-14 20z" fill="' + LAV + '" stroke="#fff"/></g><path d="M84 60q-10 40 -20 80" stroke="#fff" stroke-width=".8" fill="none" opacity=".7"/>' +
      '<g class="rt-kite"><path d="M180 30l10 -12l10 12l-10 14z" fill="' + OL + '" stroke="#fff"/></g><path d="M190 44q6 40 -4 96" stroke="#fff" stroke-width=".8" fill="none" opacity=".7"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MARTIN LUTHER KING JR. PARK · ROXBURY</text>',
      sky("rt-s2", "#6aa8d8", "#f4dcb0"));
  }

  /* 3. The Hatch Shell on the Esplanade */
  function rthatch() {
    let rings = "";
    for (let i = 0; i < 6; i++) rings += '<path d="M' + (120 + i * 12) + ' 180V' + (120 + i * 6) + 'a' + (80 - i * 12) + ' ' + (70 - i * 9) + ' 0 0 1 ' + (160 - i * 24) + ' 0V180" stroke="' + (i % 2 ? "#cfc7b4" : "#e9e3d4") + '" stroke-width="' + (i ? 5 : 10) + '" fill="none"/>';
    let crowd = "";
    for (let i = 0; i < 18; i++) { const x = 12 + i * 22, y = 228 + (i % 2) * 8; crowd += '<circle cx="' + x + '" cy="' + (y - 12) + '" r="6" fill="#1a1426"/><path d="M' + (x - 9) + ' ' + (y + 12) + 'q9 -24 18 0z" fill="#1a1426"/>'; }
    const boat = (x, cls, c) => '<g class="rt-sail ' + cls + '"><path d="M' + x + ' 110h40l-6 6h-28z" fill="#f4f1ea"/><path d="M' + (x + 20) + ' 108V76l16 30z" fill="' + c + '"/><path d="M' + (x + 18) + ' 108V82l-12 24z" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rt-s3)"/>' + stars(8) +
      /* Charles River and Cambridge far shore */
      '<rect x="0" y="96" width="400" height="20" fill="#3a5a7a"/><path d="M0 96h400" stroke="#6a8aa8"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="' + (78 + (i % 3) * 5) + '" width="30" height="' + (18 - (i % 3) * 5) + '" fill="#2a2a44"/>').join("") +
      boat(30, "", LAV) + boat(300, "rt-sail2", OL) +
      '<rect x="0" y="116" width="400" height="144" fill="#2e4a2a"/>' +
      /* the shell */
      '<path d="M110 180V124a90 76 0 0 1 180 0v56z" fill="#3a2a4a"/>' + rings +
      '<rect x="100" y="178" width="200" height="12" fill="#c9bfa8"/><rect x="104" y="174" width="192" height="5" fill="#a89e88"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<circle class="rt-glow' + (i % 2 ? " rt-glow2" : "") + '" cx="' + (130 + i * 23) + '" cy="172" r="2.6" fill="' + (i % 2 ? LAV : GOLD) + '"/>').join("") +
      '<rect x="196" y="146" width="4" height="28" fill="#888"/><circle cx="198" cy="144" r="3.5" fill="' + LAV + '"/>' +
      note(170, 140, GOLD) + note(220, 132, ICE, "rt-n2") + note(250, 150, LAV, "rt-n3") +
      crowd +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE HATCH SHELL · CHARLES RIVER ESPLANADE</text>',
      sky("rt-s3", "#141a40", "#d08a8a"));
  }

  /* 4. The Garden on Causeway St */
  function rtgarden() {
    let glass = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 14; c++) glass += '<rect x="' + (64 + c * 20) + '" y="' + (62 + r * 18) + '" width="18" height="16" fill="' + ((r * 3 + c) % 5 ? "#3a5a8a" : "#9ec7e8") + '" opacity=".85"/>';
    let bulbs = "";
    for (let i = 0; i < 24; i++) bulbs += '<circle class="rt-b' + (i % 2 ? " rt-b2" : "") + '" cx="' + (112 + i * 7.6) + '' + '" cy="166" r="2" fill="#ffe08a"/><circle class="rt-b' + (i % 2 ? "" : " rt-b2") + '" cx="' + (112 + i * 7.6) + '" cy="192" r="2" fill="#ffe08a"/>';
    const crcar = x => '<rect x="' + x + '" y="214" width="80" height="26" rx="3" fill="#b8bec8" stroke="#555"/><rect x="' + x + '" y="230" width="80" height="4" fill="' + CR + '"/>' + [0, 1, 2].map(i => '<rect x="' + (x + 8 + i * 24) + '" y="218" width="16" height="9" fill="#1d2630"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rt-s4)"/>' + stars(12) +
      /* arena block */
      '<rect x="40" y="40" width="320" height="170" fill="#4a4a58"/><rect x="40" y="40" width="320" height="10" fill="#2a2a36"/>' + glass +
      '<path d="M40 50h320" stroke="#8a8aa0"/>' +
      /* marquee (no logos) */
      '<rect x="104" y="160" width="192" height="38" rx="3" fill="#141420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="185" text-anchor="middle" ' + font + ' font-size="11" fill="' + LAV + '">TONIGHT · HOMETOWN SHOW</text>' +
      /* street + North Station tracks below */
      '<rect x="0" y="206" width="400" height="54" fill="#2a2a30"/><path d="M0 242h400M0 248h400" stroke="#8a8f96" stroke-width="1.4"/>' +
      '<g class="rt-cr">' + crcar(0) + crcar(84) + crcar(168) + '</g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE GARDEN · CAUSEWAY ST · HOMETOWN ARENA</text>',
      sky("rt-s4", "#0e1030", "#4a2a5a"));
  }

  /* 5. Tremont St and Ruggles St, Roxbury */
  function rtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rt-s5)"/>' + stars(10) +
      /* Old South Church's campanile on the skyline: tall tan stone tower, arched belfry, green-copper pyramid top */
      '<rect x="252" y="40" width="26" height="80" fill="#c8a882"/><path d="M252 60h26M252 80h26" stroke="#a88a66" stroke-width="1.2"/>' +
      '<rect x="256" y="44" width="6" height="12" rx="3" fill="#3a2a2a"/><rect x="268" y="44" width="6" height="12" rx="3" fill="#3a2a2a"/>' +
      '<rect x="248" y="34" width="34" height="8" fill="#b89a74"/><path d="M250 34L265 4L280 34z" fill="#6a9a7a" stroke="#4a7a5a"/><circle class="rt-glow" cx="265" cy="70" r="2.5" fill="#fff3c0"/>' +
      '<rect x="180" y="84" width="40" height="36" fill="#2a2a44"/><rect x="300" y="76" width="44" height="44" fill="#2a2a44"/><rect x="60" y="88" width="50" height="32" fill="#2a2a44"/>' +
      /* wall */
      '<rect x="0" y="120" width="400" height="104" fill="#4a3a5a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#3e3050" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#2a2036"/>' +
      tag("RIZZ", 22, 190, 64, LAV, -6) + tag("RALPH", 30, 216, 24, "#fff", -3) + tag("N.E.", 200, 168, 28, OL, -4) + tag("SENSITIVITY", 176, 208, 20, ICE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="rt-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + LAV + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + LAV + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 102, "Tremont St") + sign(296, 124, 102, "Ruggles St") +
      '<g class="rt-sp"><circle cx="150" cy="160" r="3" fill="' + LAV + '" opacity=".7"/></g><g class="rt-sp rt-sp2"><circle cx="156" cy="154" r="2" fill="' + LAV + '" opacity=".6"/></g>',
      sky("rt-s5", "#141434", "#7a5a8a"));
  }

  window.SCENES = { rtstation: rtstation, rtpark: rtpark, rthatch: rthatch, rtgarden: rtgarden, rtcorner: rtcorner };
})();
