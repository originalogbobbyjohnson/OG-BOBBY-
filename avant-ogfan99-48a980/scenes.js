/* avant scenes (Regions tab: St. Louis + Ohio; Woodland Hills, Cleveland's east side - Myron Avant grew up around E 110th St and Woodland Ave, sang in the choir at Union Hill Baptist Church, studied music and drama at Cleveland School of the Arts).
   CSS classes prefixed av- (the page's own anim-train is kept).
   1 RTA Blue/Green Line pulling into Buckeye-Woodhill, down in the cut under Buckeye Rd and Shaker Blvd. BLUE + GRN bullets.
   2 Union Hill Baptist Church: the choir loft, robes, the organ, a young voice at the front mic.
   3 Cleveland School of the Arts: the music and drama stage, a piano, the house lights sweeping.
   4 Luke Easter Park, a few blocks from his corner: summer evening, the pond, a grill smoking, a radio playing.
   5 E 110th St and Woodland Ave: green signs, AVANT tagged on the brick, Severance Hall's lit tower over University Circle behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes avglow{0%,100%{opacity:.5}50%{opacity:1}}.av-glow{animation:avglow 2.4s ease-in-out infinite}.av-g2{animation-delay:-1.2s}' +
    '@keyframes avnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.av-note{animation:avnote 3s linear infinite}.av-n2{animation-delay:-1s}.av-n3{animation-delay:-2s}' +
    '@keyframes avsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.av-sway{transform-box:fill-box;transform-origin:50% 100%;animation:avsway 2s ease-in-out infinite}.av-w2{animation-delay:-1s}' +
    '@keyframes avsweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.av-sweep{transform-box:fill-box;transform-origin:50% 0;animation:avsweep 4s ease-in-out infinite}.av-sw2{animation-delay:-2s}' +
    '@keyframes avsmoke{0%{transform:translateY(0) scale(1);opacity:.6}100%{transform:translateY(-34px) scale(1.7);opacity:0}}.av-smoke{transform-box:fill-box;transform-origin:50% 100%;animation:avsmoke 2.4s ease-out infinite}.av-s2{animation-delay:-1.2s}' +
    '@keyframes avrip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.av-rip{transform-box:fill-box;transform-origin:50% 50%;animation:avrip 3s ease-out infinite}.av-r2{animation-delay:-1.5s}' +
    '@keyframes avcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.av-car{animation:avcar 7s linear infinite}' +
    '@keyframes avspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.av-sp{animation:avspray 1.4s ease-out infinite}.av-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f2d27a", WINE = "#b3122e", BLUE = "#3272b3", GRN = "#2e9e4f", SIGN = "#0f6b3a", BRICK = "#8e3b28";
  const note = (x, y, cls, c) => '<g class="av-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l6 3" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const mic = (x, base, h) => '<path d="M' + x + ' ' + base + 'v-' + h + '" stroke="#c9c9c9" stroke-width="2.5"/><path d="M' + (x - 8) + ' ' + (base + 2) + 'h16" stroke="#c9c9c9" stroke-width="3"/><rect x="' + (x - 3) + '" y="' + (base - h - 10) + '" width="6" height="12" rx="3" fill="#333" stroke="#888"/>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (r + 6) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/>';

  /* 1. Buckeye-Woodhill, RTA Blue/Green Line, in the cut */
  function avstation() {
    const car = (x) => '<rect x="' + x + '" y="120" width="160" height="54" rx="6" fill="#d7dadf" stroke="#7d858c" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 36) + '" y="128" width="28" height="20" rx="2" fill="#1d2733"/>').join("") +
      '<rect x="' + x + '" y="152" width="80" height="6" fill="' + BLUE + '"/><rect x="' + (x + 80) + '" y="152" width="80" height="6" fill="' + GRN + '"/>' +
      '<circle cx="' + (x + 30) + '" cy="176" r="7" fill="#333"/><circle cx="' + (x + 130) + '" cy="176" r="7" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#avs1)"/>' +
      /* houses up top of the cut */
      [10, 70, 290, 350].map((x, i) => '<rect x="' + x + '" y="' + (26 + (i % 2) * 6) + '" width="44" height="32" fill="' + (i % 2 ? "#6b4a3a" : "#4f5d6b") + '"/><path d="M' + (x - 3) + ' ' + (26 + (i % 2) * 6) + 'l25 -14l25 14z" fill="#2b2b2b"/><rect x="' + (x + 8) + '" y="' + (36 + (i % 2) * 6) + '" width="10" height="10" fill="#ffd27a" class="av-glow ' + (i % 2 ? "av-g2" : "") + '"/>').join("") +
      /* Buckeye Rd bridge over the cut */
      '<rect x="120" y="44" width="160" height="16" fill="#8a857c"/><rect x="120" y="40" width="160" height="5" fill="#b0aa9e"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#1f1f1f">BUCKEYE RD</text>' +
      /* concrete cut walls */
      '<path d="M0 60h120l-10 120h-110z" fill="#7a746a"/><path d="M400 60h-120l10 120h110z" fill="#7a746a"/>' +
      '<path d="M120 60h160l10 120h-180z" fill="#3b3a40"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (76 + i * 20) + 'h' + (118 - i * 2) + 'M400 ' + (76 + i * 20) + 'h-' + (118 - i * 2) + '" stroke="#6a645a" stroke-width="1.2"/>').join("") +
      /* glass shelter */
      '<rect x="306" y="132" width="70" height="46" fill="#bfe0f0" opacity=".35" stroke="#e6eef2" stroke-width="2"/><path d="M302 132h78" stroke="#e6eef2" stroke-width="4"/>' +
      /* track */
      '<rect x="0" y="180" width="400" height="10" fill="#5e544a"/><path d="M0 184h400M0 188h400" stroke="#c9c9c9" stroke-width="1.5"/>' +
      '<g class="anim-train"><path d="M170 120l-10 -16h20z" stroke="#333" stroke-width="2" fill="none"/>' + car(10) + car(172) + '</g>' +
      '<path d="M0 104h400" stroke="#222" stroke-width="1.5"/>' +
      /* platform + sign */
      '<rect x="0" y="194" width="400" height="12" fill="#bcb6aa"/><rect x="0" y="204" width="400" height="4" fill="#f2c200"/>' +
      '<rect x="70" y="214" width="260" height="38" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="84" y="239" ' + font + ' font-size="14" fill="#fff" letter-spacing="1">BUCKEYE-WOODHILL</text>' +
      '<circle cx="270" cy="233" r="13" fill="' + BLUE + '"/><text x="270" y="236" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BLUE</text>' +
      '<circle cx="303" cy="233" r="13" fill="' + GRN + '"/><text x="303" y="236" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GRN</text>',
      sky("avs1", "#1a1630", "#c46a4a"));
  }

  /* 2. Union Hill Baptist Church: the choir loft */
  function avchoir() {
    const robe = (x, y, c, cls) => '<g class="av-sway ' + cls + '"><path d="M' + (x - 11) + ' ' + (y + 34) + 'l4 -26q7 -6 14 0l4 26z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y + 8) + 'l6 8l6 -8" fill="' + GOLD + '"/><circle cx="' + x + '" cy="' + y + '" r="7" fill="#5a3a28"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#24140f"/>' +
      '<path d="M0 0h400v100h-400z" fill="#341f16"/>' +
      /* three arched windows */
      [110, 200, 290].map(x => '<path d="M' + (x - 22) + ' 94v-44q22 -26 44 0v44z" fill="url(#avglass)" class="av-glow" stroke="#d9b25f" stroke-width="3"/><path d="M' + x + ' 30v64M' + (x - 22) + ' 70h44" stroke="#d9b25f" stroke-width="2"/>').join("") +
      '<path d="M196 46h8M200 40v16" stroke="#fff6d8" stroke-width="2.5"/>' +
      /* choir loft rails with robes */
      '<rect x="20" y="138" width="360" height="8" fill="#6b3f22"/><rect x="20" y="168" width="360" height="8" fill="#6b3f22"/>' +
      [50, 86, 122, 158, 242, 278, 314, 350].map((x, i) => robe(x, 104, WINE, i % 2 ? "av-w2" : "")).join("") +
      [68, 104, 140, 260, 296, 332].map((x, i) => robe(x, 134, WINE, i % 2 ? "" : "av-w2")).join("") +
      /* organ pipes center */
      [176, 188, 200, 212, 224].map((x, i) => '<rect x="' + (x - 4) + '" y="' + (104 + Math.abs(2 - i) * 8) + '" width="8" height="' + (60 - Math.abs(2 - i) * 8) + '" fill="#c9a24a" stroke="#8a6a2a"/>').join("") +
      /* pulpit floor + the front mic */
      '<rect x="0" y="186" width="400" height="10" fill="#4a2c18"/><rect x="0" y="184" width="400" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a1a12"/>' +
      mic(200, 194, 34) +
      [214, 236].map(y => '<rect x="20" y="' + y + '" width="130" height="10" rx="2" fill="#6b3f22"/><rect x="250" y="' + y + '" width="130" height="10" rx="2" fill="#6b3f22"/>').join("") +
      '<rect x="120" y="244" width="160" height="14" rx="3" fill="#111" opacity=".85"/><text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">UNION HILL BAPTIST · THE CHOIR</text>' +
      note(40, 70, "", "#ffe3a3") + note(360, 66, "av-n2", "#ffe3a3") + note(200, 120, "av-n3", "#ffe3a3"),
      '<linearGradient id="avglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e84a3c"/><stop offset=".4" stop-color="#f2a541"/><stop offset=".7" stop-color="#3aa6a0"/><stop offset="1" stop-color="#3a5fd9"/></linearGradient>');
  }

  /* 3. Cleveland School of the Arts: music + drama stage */
  function avschool() {
    return svg(
      '<rect width="400" height="260" fill="#0e0c14"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#1c1824"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 10) + '" y="18" width="20" height="10" rx="2" fill="#333"/>').join("") +
      '<g class="av-sweep"><path d="M120 26l-50 160h100z" fill="#cfe0ff" opacity=".14"/></g><g class="av-sweep av-sw2"><path d="M280 26l-50 160h100z" fill="#ffe0b0" opacity=".14"/></g>' +
      /* backdrop: comedy/tragedy as simple shapes, no faces drawn - just two ovals */
      '<rect x="40" y="40" width="320" height="110" fill="#2a1a3a"/><text x="200" y="72" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">CLEVELAND SCHOOL OF THE ARTS</text>' +
      '<text x="200" y="92" text-anchor="middle" ' + font + ' font-size="10" fill="#cfc6e0">MUSIC · DRAMA · SPRING SHOWCASE</text>' +
      /* grand piano */
      '<path d="M60 186v-34h70q30 0 30 18v16z" fill="#111" stroke="#555" stroke-width="2"/><rect x="60" y="148" width="70" height="6" fill="#f3efe4"/>' + [64, 72, 80, 88, 96, 104, 112, 120].map(x => '<rect x="' + x + '" y="148" width="3" height="4" fill="#111"/>').join("") +
      '<path d="M70 186v14M150 186v14" stroke="#333" stroke-width="3"/>' +
      /* center mic in the spot */
      '<ellipse cx="240" cy="186" rx="50" ry="8" fill="#fff6c8" opacity=".25"/>' + mic(240, 184, 50) +
      /* stage + seats */
      '<rect x="0" y="186" width="400" height="10" fill="#6b3f22"/><rect x="0" y="196" width="400" height="64" fill="#181220"/>' +
      [208, 226, 244].map((y, r) => Array.from({ length: 14 }, (_, i) => '<path d="M' + (14 + i * 28 + (r % 2) * 14) + ' ' + (y + 10) + 'q0 -12 10 -12q10 0 10 12z" fill="#2c2034"/>').join("")).join("") +
      note(180, 140, "", GOLD) + note(300, 130, "av-n2", "#cfe0ff") + note(110, 120, "av-n3", GOLD));
  }

  /* 4. Luke Easter Park: summer evening, pond, grill, radio */
  function avpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#avs4)"/>' +
      '<circle cx="320" cy="60" r="22" fill="#ffcf7a" opacity=".9"/>' +
      [30, 80, 130, 350, 390].map((x, i) => tree(x, 100 + (i % 2) * 8, 24, i % 2 ? "#2f5d34" : "#3c7442")).join("") +
      '<rect x="0" y="128" width="400" height="132" fill="#4f8a3c"/>' +
      /* pond */
      '<ellipse cx="270" cy="158" rx="110" ry="20" fill="#4a7fae"/><g class="av-rip"><ellipse cx="250" cy="158" rx="22" ry="4" fill="none" stroke="#cfe6ff"/></g><g class="av-rip av-r2"><ellipse cx="300" cy="162" rx="18" ry="3" fill="none" stroke="#cfe6ff"/></g>' +
      /* picnic table */
      '<rect x="40" y="186" width="110" height="8" fill="#8a5a32"/><path d="M52 194l-8 26M138 194l8 26" stroke="#6b3f22" stroke-width="5"/><rect x="30" y="206" width="130" height="6" fill="#8a5a32"/>' +
      /* radio on the table */
      '<rect x="96" y="168" width="40" height="18" rx="3" fill="#2a2a2a" stroke="#888"/><circle cx="106" cy="177" r="6" fill="#555"/><circle cx="126" cy="177" r="6" fill="#555"/><path d="M100 168l10 -10" stroke="#aaa" stroke-width="1.5"/>' +
      /* grill with smoke */
      '<path d="M200 200a22 12 0 0 0 44 0z" fill="#222"/><path d="M204 212l-6 20M240 212l6 20" stroke="#222" stroke-width="3"/><rect x="198" y="196" width="48" height="4" fill="#666"/>' +
      '<g class="av-smoke"><ellipse cx="216" cy="186" rx="8" ry="6" fill="#ddd" opacity=".55"/></g><g class="av-smoke av-s2"><ellipse cx="228" cy="182" rx="7" ry="5" fill="#ddd" opacity=".5"/></g>' +
      '<rect x="110" y="236" width="180" height="16" rx="3" fill="#111" opacity=".8"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LUKE EASTER PARK · SUMMERTIME</text>' +
      note(116, 150, "", GOLD) + note(136, 140, "av-n2", "#fff") + note(96, 136, "av-n3", GOLD),
      sky("avs4", "#3a4a8a", "#f2a56a"));
  }

  /* 5. E 110th St and Woodland Ave; Severance Hall's tower behind */
  function avcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#avs5)"/>' +
      /* Severance Hall: pale limestone, columned portico, stepped tower */
      '<rect x="250" y="70" width="140" height="60" fill="#e6dccb"/>' + [262, 280, 298, 316, 334, 352, 370].map(x => '<rect x="' + x + '" y="82" width="7" height="48" fill="#f4ecdc"/>').join("") +
      '<path d="M246 74l74 -20l74 20z" fill="#d8ccb6"/>' +
      '<rect x="296" y="28" width="48" height="30" fill="#e6dccb"/><rect x="304" y="12" width="32" height="18" fill="#e6dccb"/><rect x="312" y="2" width="16" height="12" fill="#e6dccb"/>' +
      [304, 316, 328].map(x => '<rect x="' + x + '" y="34" width="6" height="14" fill="#ffd98a" class="av-glow"/>').join("") +
      '<rect x="210" y="130" width="190" height="92" fill="#3c5a3a"/>' +
      /* brick wall with the tag */
      '<rect x="0" y="112" width="210" height="110" fill="' + BRICK + '"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (122 + i * 10) + 'h210" stroke="#6e2c1c" stroke-width="1"/>').join("") +
      tag("AVANT", 18, 172, 48, GOLD, -6) + tag("MY THOUGHTS", 30, 204, 16, "#fff", -3) +
      '<g class="av-sp"><circle cx="190" cy="148" r="3" fill="' + GOLD + '"/></g><g class="av-sp av-sp2"><circle cx="184" cy="158" r="2.5" fill="' + GOLD + '"/></g>' +
      /* street signs */
      '<rect x="258" y="150" width="5" height="72" fill="#555"/>' +
      '<rect x="216" y="144" width="90" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="261" y="156" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E 110 ST</text>' +
      '<rect x="212" y="162" width="98" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="261" y="174" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WOODLAND AV</text>' +
      [340, 382].map(x => tree(x, 180, 16, "#2f5d34")).join("") +
      /* sidewalk + street */
      '<rect x="0" y="222" width="400" height="10" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="av-car"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + WINE + '"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("avs5", "#22183a", "#e0905a"));
  }

  window.SCENES = { avstation: avstation, avchoir: avchoir, avschool: avschool, avpark: avpark, avcorner: avcorner };
})();
