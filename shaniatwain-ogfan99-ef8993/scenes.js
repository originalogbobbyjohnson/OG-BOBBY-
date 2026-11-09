/* shaniatwain scenes (Regions tab: CANADA; Timmins, Ontario). CSS classes and ids prefixed st- (the page's own anim-train is kept).
   1 Timmins Transit Terminal, Spruce St S at Third Ave (the old T&NO railway station, now the city bus + Ontario Northland terminal): a city bus pulling in.
   2 The McIntyre Headframe in Schumacher, the gold-mine tower Timmins is known for ("City with a Heart of Gold"): the sheave wheels turning, gold glinting.
   3 Downtown Timmins: the little stone monument with her cast handprints in the parkette, string lights over the patio.
   4 The northern Ontario bush: she worked in her father's reforestation business; spruce seedlings in the cut, a canoe gliding down the Mattagami River.
   5 Shania Twain Dr and Algonquin Blvd E (the street the city named for her): green signs, SHANIA tagged on the wall, the headframe on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes stflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.st-flk{animation:stflick 2.2s infinite}.st-flk2{animation-delay:.8s}' +
    '@keyframes stspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.st-spin{transform-box:fill-box;transform-origin:50% 50%;animation:stspin 3s linear infinite}.st-spin2{animation-direction:reverse}' +
    '@keyframes stglint{0%,100%{opacity:.15;transform:scale(.6)}50%{opacity:1;transform:scale(1.2)}}.st-gl{transform-box:fill-box;transform-origin:50% 50%;animation:stglint 1.8s ease-in-out infinite}.st-gl2{animation-delay:-.6s}.st-gl3{animation-delay:-1.2s}' +
    '@keyframes stbulb{0%,100%{opacity:.35}50%{opacity:1}}.st-bulb{animation:stbulb 1.4s ease-in-out infinite}.st-bulb2{animation-delay:-.7s}' +
    '@keyframes stleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,120px) rotate(300deg);opacity:0}}.st-leaf{animation:stleaf 5s linear infinite}.st-leaf2{animation-delay:-2.5s}' +
    '@keyframes stcanoe{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.st-canoe{animation:stcanoe 16s linear infinite}' +
    '@keyframes strip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.st-rip{animation:strip 3s ease-in-out infinite}.st-rip2{animation-delay:-1.5s}' +
    '@keyframes stsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.st-sway{transform-box:fill-box;transform-origin:50% 100%;animation:stsway 3s ease-in-out infinite}.st-sway2{animation-delay:-1.5s}' +
    '@keyframes stbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.st-bird{animation:stbird 12s linear infinite}.st-bird2{animation-delay:-6s}' +
    '@keyframes stspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.st-sp{animation:stspray 1.4s ease-out infinite}.st-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const spruce = (x, base, s, c, cls) => '<g' + (cls ? ' class="' + cls + '"' : '') + '><rect x="' + (x - 2 * s) + '" y="' + (base - 8 * s) + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#4a3322"/>' +
    '<path d="M' + x + ' ' + (base - 60 * s) + 'l' + (-10 * s) + ' ' + (18 * s) + 'h' + (5 * s) + 'l' + (-11 * s) + ' ' + (18 * s) + 'h' + (6 * s) + 'l' + (-13 * s) + ' ' + (18 * s) + 'h' + (46 * s) + 'l' + (-13 * s) + ' ' + (-18 * s) + 'h' + (6 * s) + 'l' + (-11 * s) + ' ' + (-18 * s) + 'h' + (5 * s) + 'z" fill="' + c + '"/></g>';
  const GOLD = "#f2c14e", BLUE = "#1f5fa8", BRICK = "#9a4a33";

  /* the McIntyre headframe: tall pale concrete tower, dark shaft house roof, sheave wheels on top */
  const headframe = (x, base, s, anim) => {
    const w = 46 * s, h = 150 * s;
    return '<g><rect x="' + (x - w / 2) + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#d9d6cc" stroke="#8d8a80" stroke-width="' + (1.5 * s) + '"/>' +
      '<rect x="' + (x - w / 2) + '" y="' + (base - h) + '" width="' + (w * 0.28) + '" height="' + h + '" fill="#c3c0b5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x - w / 2 + 8 * s) + '" y="' + (base - h + (18 + i * 24) * s) + '" width="' + (w - 16 * s) + '" height="' + (8 * s) + '" fill="#6f7a82"/>').join("") +
      '<path d="M' + (x - w / 2 - 6 * s) + ' ' + (base - h) + 'h' + (w + 12 * s) + 'l' + (-8 * s) + ' ' + (-14 * s) + 'h' + (-(w - 4 * s)) + 'z" fill="#7a3a2a"/>' +
      '<rect x="' + (x - 4 * s) + '" y="' + (base - h - 34 * s) + '" width="' + (8 * s) + '" height="' + (22 * s) + '" fill="#5a5f66"/>' +
      '<g' + (anim ? ' class="st-spin"' : '') + '><circle cx="' + (x - 10 * s) + '" cy="' + (base - h - 34 * s) + '" r="' + (11 * s) + '" fill="none" stroke="#2f3338" stroke-width="' + (3 * s) + '"/><path d="M' + (x - 21 * s) + ' ' + (base - h - 34 * s) + 'h' + (22 * s) + 'M' + (x - 10 * s) + ' ' + (base - h - 45 * s) + 'v' + (22 * s) + '" stroke="#2f3338" stroke-width="' + (2 * s) + '"/></g>' +
      '<g' + (anim ? ' class="st-spin st-spin2"' : '') + '><circle cx="' + (x + 12 * s) + '" cy="' + (base - h - 30 * s) + '" r="' + (9 * s) + '" fill="none" stroke="#2f3338" stroke-width="' + (3 * s) + '"/><path d="M' + (x + 3 * s) + ' ' + (base - h - 30 * s) + 'h' + (18 * s) + 'M' + (x + 12 * s) + ' ' + (base - h - 39 * s) + 'v' + (18 * s) + '" stroke="#2f3338" stroke-width="' + (2 * s) + '"/></g></g>';
  };

  /* 1. Timmins Transit Terminal */
  function ststation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (96 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#24323f"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="116" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a929c" stroke-width="2"/>' +
      '<rect x="60" y="160" width="300" height="10" fill="' + BLUE + '"/><rect x="60" y="170" width="300" height="4" fill="' + GOLD + '"/>' + wins +
      '<rect x="64" y="124" width="26" height="40" rx="3" fill="#24323f"/><rect x="66" y="118" width="70" height="8" rx="2" fill="#111"/><text x="101" y="125" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">5 WESTMOUNT</text>' +
      '<circle cx="110" cy="196" r="13" fill="#222"/><circle cx="110" cy="196" r="5" fill="#aaa"/><circle cx="310" cy="196" r="13" fill="#222"/><circle cx="310" cy="196" r="5" fill="#aaa"/><circle cx="64" cy="180" r="4" fill="#fff6c2"/></g>';
    /* the old brick railway station behind */
    const station = '<rect x="20" y="40" width="250" height="70" fill="' + BRICK + '"/><path d="M10 40l135 -26 135 26z" fill="#4a3a36"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 38) + '" y="58" width="20" height="30" rx="10" fill="#f3dca0" opacity=".85"/><rect x="' + (34 + i * 38) + '" y="58" width="20" height="30" rx="10" fill="none" stroke="#efe6d4" stroke-width="2"/>').join("") +
      '<rect x="20" y="96" width="250" height="4" fill="#efe6d4"/><rect x="90" y="24" width="110" height="12" rx="2" fill="#efe6d4"/><text x="145" y="33" text-anchor="middle" ' + font + ' font-size="8" fill="#4a3a36">TIMMINS</text>';
    return svg('<rect width="400" height="260" fill="url(#sts0)"/>' + spruce(300, 110, 1.1, "#2f5a3a") + spruce(340, 112, 1.3, "#264d31") + spruce(384, 110, 1, "#2f5a3a") + station +
      '<rect x="0" y="108" width="400" height="8" fill="#9aa08a"/><rect x="0" y="116" width="400" height="94" fill="#55575c"/>' + bus +
      '<rect x="0" y="210" width="400" height="50" fill="#b8b2a6"/><rect x="0" y="208" width="400" height="4" fill="#ddd"/>' +
      '<rect x="356" y="44" width="5" height="170" fill="#7a7f86"/><rect x="326" y="28" width="66" height="44" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/>' +
      '<text x="359" y="42" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">TIMMINS TRANSIT</text>' + badge(332, 58, "5", "#fff", true) + badge(359, 58, "16", "#fff", true) +
      '<rect x="20" y="222" width="230" height="22" rx="2" fill="#111"/><text x="135" y="237" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Spruce St S &amp; Third Ave</text>' +
      '<circle class="st-flk" cx="358" cy="76" r="3" fill="#fff3c2"/>',
      sky("sts0", "#7fb2dd", "#f2e6d0"));
  }

  /* 2. McIntyre Headframe, Schumacher */
  function stheadframe() {
    const nug = (x, y, cls) => '<g class="st-gl ' + (cls || "") + '"><path d="M' + x + ' ' + (y - 6) + 'l5 4 1 6-6 3-6-3 1-6z" fill="' + GOLD + '" stroke="#8a6512" stroke-width="1"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sts1)"/>' +
      '<g class="st-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="st-bird st-bird2"><path d="M60 72q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      spruce(30, 196, 1.2, "#2f5a3a") + spruce(70, 200, 1.5, "#264d31") + spruce(330, 198, 1.4, "#264d31") + spruce(372, 196, 1.1, "#2f5a3a") +
      '<path d="M0 190q100 -20 200 -6t200 -4v80H0z" fill="#6e6a5e"/>' +
      '<rect x="230" y="150" width="90" height="46" fill="#8a4b36"/><path d="M226 150l49 -20 49 20z" fill="#4a3a36"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="' + (240 + i * 26) + '" y="162" width="14" height="18" fill="#f3dca0" opacity=".8"/>').join("") +
      headframe(170, 200, 1, true) +
      '<rect x="0" y="200" width="400" height="60" fill="#5d5a50"/>' + nug(60, 230, "") + nug(120, 244, "st-gl2") + nug(280, 236, "st-gl3") + nug(340, 248, "") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">McINTYRE HEADFRAME · SCHUMACHER</text>',
      sky("sts1", "#5f93c6", "#f6dcae"));
  }

  /* 3. The handprint monument downtown */
  function sthands() {
    const bulbs = Array.from({ length: 13 }, (_, i) => { const x = 10 + i * 31, y = 40 + Math.sin(i / 12 * Math.PI) * 14; return '<circle class="st-bulb' + (i % 2 ? " st-bulb2" : "") + '" cx="' + x + '" cy="' + y + '" r="4" fill="#ffe7a0"/>'; }).join("");
    const hand = (x, y, flip) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -1 : 1) + ' 1)"><path d="M0 14q-8 -2 -8 -10l0 -4q0 -2 2 -2t2 2v4l1 -14q0 -2 2 -2t2 2l0 12 1 -15q0 -2 2 -2t2 2l0 15 1 -13q0 -2 2 -2t2 2l0 14 2 -8q1 -2 3 -1t1 3l-4 12q-2 8 -12 7z" fill="#8f8a80" stroke="#5f5a52" stroke-width="1"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sts2)"/>' +
      '<rect x="0" y="40" width="130" height="150" fill="' + BRICK + '"/><rect x="270" y="30" width="130" height="160" fill="#7c5a48"/>' +
      [0, 1, 2].map(r => '<rect x="' + 16 + '" y="' + (56 + r * 40) + '" width="30" height="26" fill="#f3dca0" opacity=".8"/><rect x="76" y="' + (56 + r * 40) + '" width="30" height="26" fill="#f3dca0" opacity=".8"/><rect x="290" y="' + (50 + r * 40) + '" width="30" height="26" fill="#f3dca0" opacity=".8"/><rect x="346" y="' + (50 + r * 40) + '" width="30" height="26" fill="#f3dca0" opacity=".8"/>').join("") +
      '<path d="M0 40Q200 70 400 40" stroke="#333" stroke-width="1.5" fill="none"/>' + bulbs +
      '<rect x="0" y="188" width="400" height="72" fill="#a9a39a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 188v72" stroke="#968f86" stroke-width="2"/>').join("") +
      '<rect x="140" y="120" width="120" height="82" rx="4" fill="#b9b2a4" stroke="#7d766a" stroke-width="2"/><rect x="134" y="198" width="132" height="10" rx="2" fill="#8d8678"/>' +
      '<rect x="154" y="128" width="92" height="20" rx="2" fill="#2b2b2b"/><text x="200" y="142" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">SHANIA TWAIN</text>' +
      hand(170, 172, false) + hand(232, 172, true) +
      '<text x="200" y="196" text-anchor="middle" ' + font + ' font-size="6.5" fill="#3a3630">#1 AMBASSADOR OF TIMMINS</text>' +
      '<rect x="40" y="178" width="34" height="4" fill="#5a3a2a"/><rect x="46" y="182" width="4" height="22" fill="#5a3a2a"/><rect x="64" y="182" width="4" height="22" fill="#5a3a2a"/><rect x="52" y="168" width="10" height="10" rx="2" fill="#fff"/>' +
      '<rect x="326" y="178" width="34" height="4" fill="#5a3a2a"/><rect x="332" y="182" width="4" height="22" fill="#5a3a2a"/><rect x="350" y="182" width="4" height="22" fill="#5a3a2a"/>' +
      '<g class="st-leaf"><path d="M340 60q6 -6 12 0q-6 6 -12 0z" fill="#e0a030"/></g><g class="st-leaf st-leaf2"><path d="M300 30q6 -6 12 0q-6 6 -12 0z" fill="#d0602a"/></g>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#2b2b2b">DOWNTOWN TIMMINS</text>',
      sky("sts2", "#2b2f55", "#e59a68"));
  }

  /* 4. The bush: tree planting by the Mattagami River */
  function stbush() {
    const seed = (x, y, cls) => '<g class="st-sway ' + (cls || "") + '"><rect x="' + (x - 1) + '" y="' + (y - 4) + '" width="2" height="6" fill="#5a3a22"/><path d="M' + x + ' ' + (y - 18) + 'l-6 10h3l-5 8h16l-5 -8h3z" fill="#3e8a4a"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sts3)"/>' +
      '<circle cx="320" cy="56" r="20" fill="#fff1c2"/>' +
      Array.from({ length: 16 }, (_, i) => spruce(i * 27 + 6, 120 + (i % 3) * 3, 0.8 + (i % 4) * 0.12, i % 2 ? "#264d31" : "#2f5a3a")).join("") +
      '<rect x="0" y="118" width="400" height="34" fill="#3f6f9a"/>' +
      '<g class="st-rip"><path d="M10 130h50M120 138h70M260 128h60" stroke="#9cc6e8" stroke-width="2" stroke-linecap="round" opacity=".7"/></g><g class="st-rip st-rip2"><path d="M70 144h40M210 146h60M330 140h50" stroke="#c9e2f5" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="st-canoe"><path d="M20 132q30 10 60 0l-4 6q-26 6 -52 0z" fill="#c0392b"/><path d="M50 132l10 -16" stroke="#6b4a2a" stroke-width="2"/><path d="M58 112l6 8" stroke="#6b4a2a" stroke-width="4"/></g>' +
      '<rect x="0" y="152" width="400" height="108" fill="#7a6a48"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (160 + (i * 29) % 96) + '" r="2" fill="#5d4f34"/>').join("") +
      seed(60, 200, "") + seed(110, 226, "st-sway2") + seed(170, 196, "") + seed(240, 230, "st-sway2") + seed(300, 204, "") + seed(350, 236, "st-sway2") +
      '<path d="M200 236l14 -40" stroke="#8a6a3a" stroke-width="4"/><path d="M206 196h18l-2 6h-14z" fill="#9aa4ae"/>' +
      '<rect x="120" y="242" width="160" height="14" rx="2" fill="#111"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">MATTAGAMI RIVER · THE BUSH</text>',
      sky("sts3", "#8fc3ea", "#f5ecd6"));
  }

  /* 5. Shania Twain Dr and Algonquin Blvd E */
  function stcorner() {
    return svg('<rect width="400" height="260" fill="url(#sts4)"/>' +
      headframe(330, 128, 0.62, false) + spruce(20, 128, 0.9, "#1f3a27") + spruce(60, 128, 1.1, "#1f3a27") + spruce(250, 128, 0.9, "#1f3a27") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("SHANIA", 20, 190, 52, GOLD, -6) + tag("LONGSHOT", 40, 216, 18, "#7fd1ff", -4) + tag("LET'S GO GIRLS", 150, 212, 16, "#ff7aa8", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(236, 98, 156, "Shania Twain Dr") + sign(250, 124, 136, "Algonquin Blvd E") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="st-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="st-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="st-sp st-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sts4", "#232a55", "#e8936a"));
  }

  window.SCENES = { ststation: ststation, stheadframe: stheadframe, sthands: sthands, stbush: stbush, stcorner: stcorner };
})();
