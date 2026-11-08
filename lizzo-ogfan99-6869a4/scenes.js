/* lizzo scenes (Regions tab: Houston + Texas; Alief, where she grew up from age 10 and went to Elsik High). 400 x 260 SVGs.
   CSS classes and ids prefixed lz- (the page's own anim-train is kept on the bus).
   0 METRO's 2 Bellaire bus pulling up to the Bellaire Blvd / Cook Rd stop in Alief, a short walk from Elsik High: the white METRO bus with its blue and red stripes, palms, heat shimmer.
   1 Alief Elsik High School: the Rams' Columbia blue and white, a band kid out front with a piccolo ("you that piccolo player from Alief"), flags waving, notes rising.
   2 The Spirit of Houston at UH's stadium (she played flute in the University of Houston band): red seats, the field, the band's flute line marching across.
   3 The Rothko Chapel in Montrose (the part of Houston she says she misses): the plain brick octagon, the Broken Obelisk standing upside down in its reflecting pool, ripples moving.
   4 Bellaire Blvd and Cook Rd in Alief: green signs, LIZZO tagged on the stucco, the revolving blue dome on top of the downtown Hyatt far off behind. */
(function () {
  const W = 400, H = 260;
  const PINK = "#ff6fae", GOLD = "#ffd23f", CBLUE = "#8fd3ff", RED = "#c8102e";
  const css = '<style>' +
    '@keyframes lzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.lz-flk{animation:lzflick 2.4s infinite}' +
    '@keyframes lznote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-70px);opacity:0}}.lz-note{animation:lznote 3s ease-out infinite}.lz-n2{animation-delay:-1s}.lz-n3{animation-delay:-2s}' +
    '@keyframes lzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.lz-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lzflag 1.6s ease-in-out infinite}.lz-fl2{animation-delay:-.8s}' +
    '@keyframes lzmarch{from{transform:translateX(-160px)}to{transform:translateX(440px)}}.lz-march{animation:lzmarch 12s linear infinite;animation-delay:-5s}' +
    '@keyframes lzstep{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.lz-step{animation:lzstep .5s ease-in-out infinite}.lz-st2{animation-delay:-.25s}' +
    '@keyframes lzrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.lz-rip{animation:lzrip 3s ease-in-out infinite}.lz-rip2{animation-delay:-1.5s}' +
    '@keyframes lzspin{0%,100%{opacity:.55}50%{opacity:1}}.lz-spin{animation:lzspin 2s ease-in-out infinite}' +
    '@keyframes lzshim{0%,100%{opacity:.15}50%{opacity:.4}}.lz-shim{animation:lzshim 1.8s ease-in-out infinite}' +
    '@keyframes lzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lz-sp{animation:lzspray 1.4s ease-out infinite}.lz-spb{animation-delay:.5s}' +
    '@keyframes lzbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.lz-bird{animation:lzbird 12s linear infinite}' +
    '@keyframes lzcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lz-car{animation:lzcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="lz-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const palm = (x, y, s) => '<g><path d="M' + x + ' ' + y + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (-2 * s) + ' ' + (-80 * s) + '" stroke="#6b4a2a" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [[-30, -6], [30, -4], [-22, 14], [24, 14], [0, -20]].map(d => '<path d="M' + (x - 2 * s) + ' ' + (y - 80 * s) + 'q' + (d[0] * s / 2) + ' ' + (d[1] * s - 10 * s) + ' ' + (d[0] * s) + ' ' + (d[1] * s) + '" stroke="#2f7a3a" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 0. METRO 2 Bellaire at Bellaire Blvd / Cook Rd */
  function lzstation() {
    const bus = '<g class="anim-train"><rect x="40" y="132" width="250" height="70" rx="8" fill="#f4f6f8" stroke="#8a9099" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (60 + i * 36) + '" y="142" width="28" height="24" rx="2" fill="#2b3a4a"/>').join("") +
      '<rect x="270" y="140" width="16" height="34" rx="2" fill="#2b3a4a"/>' +
      '<rect x="40" y="174" width="250" height="6" fill="#1d4f91"/><rect x="40" y="181" width="250" height="3" fill="' + RED + '"/>' +
      '<rect x="230" y="136" width="56" height="10" rx="2" fill="#111"/><text x="258" y="144" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">2 BELLAIRE</text>' +
      '<circle cx="88" cy="204" r="11" fill="#1b1b1b"/><circle cx="246" cy="204" r="11" fill="#1b1b1b"/><circle cx="286" cy="190" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lzs0)"/><circle cx="330" cy="44" r="22" fill="#fff1b0"/>' +
      '<g fill="#d9c9ae"><rect x="0" y="104" width="120" height="40"/><rect x="250" y="96" width="150" height="48"/></g>' +
      '<g fill="#b8432f"><rect x="0" y="98" width="120" height="8"/><rect x="250" y="90" width="150" height="8"/></g>' +
      palm(150, 142, 1) + palm(380, 142, .8) +
      '<rect x="0" y="144" width="400" height="12" fill="#c9c3b6"/><rect x="0" y="156" width="400" height="104" fill="#55565b"/><path d="M0 232h400" stroke="#e0e0e0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect class="lz-shim" x="0" y="150" width="400" height="10" fill="#fff"/>' + bus +
      '<rect x="326" y="82" width="5" height="76" fill="#3a3a3a"/><rect x="300" y="44" width="70" height="42" rx="3" fill="#1d4f91" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="335" y="62" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">METRO</text><text x="335" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">2</text>' +
      '<rect x="20" y="14" width="230" height="44" rx="4" fill="#111"/><rect x="20" y="14" width="230" height="4" fill="#fff"/>' +
      '<text x="34" y="40" ' + font + ' font-size="16" fill="#fff">Bellaire Blvd / Cook Rd</text><text x="34" y="52" ' + font + ' font-size="7.5" fill="' + CBLUE + '" letter-spacing="2">ALIEF · HOUSTON</text>' +
      '<path class="lz-bird" d="M0 70q6 -6 12 0q6 -6 12 0" fill="none" stroke="#333" stroke-width="2"/>',
      sky("lzs0", "#7cc3ef", "#fde3b0"));
  }

  /* 1. Alief Elsik High School */
  function lzelsik() {
    const flag = (x, c, cls) => '<rect x="' + x + '" y="40" width="3" height="120" fill="#ddd"/><path class="lz-flag ' + cls + '" d="M' + (x + 3) + ' 42h40v26h-40z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lzs1)"/>' +
      '<rect x="30" y="80" width="340" height="96" fill="#d8cbb6"/><rect x="30" y="72" width="340" height="12" fill="' + CBLUE + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (46 + i * 46) + '" y="96" width="30" height="34" fill="#4a6a8a"/>').join("") +
      '<rect x="160" y="132" width="80" height="44" fill="#2a4a6a"/><rect x="120" y="54" width="160" height="26" rx="3" fill="#fff"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + font + ' font-size="13" fill="#3a8ad0">ALIEF ELSIK RAMS</text>' +
      flag(20, CBLUE, "") + flag(354, "#fff", "lz-fl2") +
      '<rect x="0" y="176" width="400" height="84" fill="#7fae4a"/><rect x="0" y="176" width="400" height="10" fill="#c9c3b6"/>' +
      '<g><circle cx="200" cy="190" r="9" fill="#4a2c1f"/><path d="M190 186q10 -16 20 0" fill="#1b1b1b"/><rect x="188" y="199" width="24" height="34" rx="5" fill="' + CBLUE + '"/><rect x="190" y="200" width="20" height="6" fill="#fff"/>' +
      '<rect x="206" y="194" width="34" height="3" rx="1.5" fill="#d9d9d9" transform="rotate(-8 206 194)"/><rect x="190" y="233" width="8" height="18" fill="#fff"/><rect x="202" y="233" width="8" height="18" fill="#fff"/></g>' +
      note("", 248, 182, GOLD) + note("lz-n2", 262, 176, "#fff") + note("lz-n3", 236, 172, PINK),
      sky("lzs1", "#6fb7ea", "#f7e7c6"));
  }

  /* 2. Spirit of Houston at the UH stadium */
  function lzcougars() {
    const player = (x, cls) => '<g class="lz-step ' + cls + '"><rect x="' + (x - 5) + '" y="168" width="10" height="20" rx="3" fill="' + RED + '"/><rect x="' + (x - 5) + '" y="168" width="10" height="4" fill="#fff"/><circle cx="' + x + '" cy="162" r="5" fill="#fff"/><rect x="' + (x - 6) + '" y="152" width="12" height="6" fill="' + RED + '"/>' +
      '<rect x="' + (x + 4) + '" y="172" width="18" height="2" fill="#d9d9d9"/><rect x="' + (x - 4) + '" y="188" width="3" height="10" fill="#fff"/><rect x="' + (x + 1) + '" y="188" width="3" height="10" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lzs2)"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="0" y="' + (40 + i * 14) + '" width="400" height="10" fill="' + (i % 2 ? "#a80d26" : RED) + '"/>').join("") +
      '<rect x="0" y="34" width="400" height="6" fill="#ddd"/><rect class="lz-flk" x="30" y="6" width="60" height="16" fill="#fff8d8"/><rect class="lz-flk" x="310" y="6" width="60" height="16" fill="#fff8d8"/>' +
      '<rect x="0" y="138" width="400" height="122" fill="#3f8f3f"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 138v122" stroke="#fff" stroke-width="2" opacity=".6"/>').join("") +
      '<g class="lz-march">' + [0, 26, 52, 78, 104, 130].map((d, i) => player(d, i % 2 ? "lz-st2" : "")).join("") + '</g>' +
      '<rect x="100" y="212" width="200" height="26" rx="3" fill="#111" opacity=".75"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">SPIRIT OF HOUSTON · UH</text>',
      sky("lzs2", "#1a2a5a", "#3a3a6a"));
  }

  /* 3. Rothko Chapel and the Broken Obelisk, Montrose */
  function lzrothko() {
    return svg(
      '<rect width="400" height="260" fill="url(#lzs3)"/>' +
      '<g><path d="M250 80h90l20 20v70h-130v-70z" fill="#9b6a52"/><path d="M270 60h50l10 20h-70z" fill="#8a5a44"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M230 ' + (106 + i * 7) + 'h130" stroke="#86584a" stroke-width="1"/>').join("") +
      '<rect x="282" y="134" width="26" height="36" fill="#3a2a24"/></g>' +
      '<rect x="0" y="170" width="400" height="10" fill="#cfc8b8"/>' +
      '<rect x="20" y="180" width="200" height="60" fill="#2c4a5a"/>' +
      '<g class="lz-rip"><path d="M30 200q20 -6 40 0t40 0t40 0t40 0" stroke="#7fb0c4" stroke-width="2" fill="none" opacity=".7"/></g><g class="lz-rip lz-rip2"><path d="M30 220q20 -6 40 0t40 0t40 0t40 0" stroke="#7fb0c4" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g fill="#3a2a22"><rect x="104" y="166" width="32" height="16"/><path d="M104 166L120 128L136 166z"/><path d="M120 128L112 114V58L115 52L118 57L122 49L125 56L128 53V114z"/></g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#7a9a5a"/>' +
      '<rect x="212" y="20" width="182" height="18" rx="2" fill="#111" opacity=".75"/><text x="303" y="33" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1">ROTHKO CHAPEL · MONTROSE</text>' +
      '<path class="lz-bird" d="M0 60q6 -6 12 0q6 -6 12 0" fill="none" stroke="#333" stroke-width="2"/>',
      sky("lzs3", "#9fd0f0", "#f6e8d0"));
  }

  /* 4. Bellaire Blvd and Cook Rd, Alief */
  function lzcorner() {
    const hyatt = '<g><rect x="150" y="60" width="44" height="76" fill="#2a3050"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="154" y="' + (66 + i * 10) + '" width="36" height="3" fill="#ffd97a" opacity=".5"/>').join("") +
      '<rect x="166" y="44" width="12" height="16" fill="#2a3050"/><ellipse class="lz-spin" cx="172" cy="40" rx="16" ry="10" fill="#4aa0ff"/><path d="M156 40h32" stroke="#bfe0ff" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lzs4)"/>' +
      '<g fill="#2b2a46"><rect x="60" y="100" width="40" height="36"/><rect x="214" y="84" width="30" height="52"/><rect x="250" y="96" width="50" height="40"/></g>' + hyatt +
      '<rect x="0" y="126" width="400" height="98" fill="#e6c9a2"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 47) % 400) + '" cy="' + (134 + (i * 29) % 84) + '" r="1.5" fill="#d2b48a"/>').join("") +
      '<path d="M0 126h400" stroke="#a0805a" stroke-width="3"/>' +
      tag("LIZZO", 20, 196, 58, PINK, -6) + tag("BIG GRRRL", 34, 218, 18, GOLD, -3) + tag("SASHA FLUTE", 196, 214, 16, CBLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 144, "Bellaire Blvd") + sign(276, 124, 96, "Cook Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lz-sp"><circle cx="186" cy="166" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="lz-sp lz-spb"><circle cx="192" cy="160" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<g class="lz-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="#e8505b"/><rect x="12" y="228" width="32" height="10" rx="3" fill="#e8505b"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="46" cy="250" r="5" fill="#111"/></g>',
      sky("lzs4", "#2a1f4a", "#f08a6a"));
  }

  window.SCENES = { lzstation: lzstation, lzelsik: lzelsik, lzcougars: lzcougars, lzrothko: lzrothko, lzcorner: lzcorner };
})();
