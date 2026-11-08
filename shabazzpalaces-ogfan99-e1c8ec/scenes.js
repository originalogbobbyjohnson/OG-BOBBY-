/* shabazzpalaces scenes (Regions tab: The Northwest; Central District, Seattle, where Ishmael Butler was born and grew up). CSS classes and ids prefixed sp- (the page's own anim-train slides the streetcar in).
   1 14th & Washington on the First Hill Streetcar: the curbside stop on 14th Ave S in the Central District, a jade-green streetcar sliding in under the wire, CD houses and trees behind.
   2 Meany Middle School's music room, where Ish learned saxophone and jazz: a gold sax on its stand, a music stand with a chart, notes drifting up, rain on the window.
   3 Yesler Terrace, the hillside where his grandparents settled after coming up for work at the plane plant: low white rowhouses stepping down the hill, downtown and the bay below, a jet climbing out.
   4 Henry Art Gallery at UW (resident artist 2021, Black Constellation shows): the elliptical skyspace pavilion in the sculpture court glowing and changing color at night, a constellation linking up above.
   5 23rd Ave and E Jefferson St by Garfield High, where he hooped: green signs, SHABAZZ PALACES tagged on the wall, Harborview's buff art deco tower up the hill behind with a helicopter coming in.
   No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.sp-flk{animation:spflick 2.6s infinite}.sp-flk2{animation-delay:.9s}' +
    '@keyframes sprain{0%{transform:translate(0,-40px)}100%{transform:translate(-12px,280px)}}.sp-rn{animation:sprain 1.2s linear infinite}.sp-rn2{animation-delay:-.4s}.sp-rn3{animation-delay:-.8s}' +
    '@keyframes spnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-90px);opacity:0}}.sp-nt{animation:spnote 3.6s ease-out infinite}.sp-nt2{animation-delay:-1.2s}.sp-nt3{animation-delay:-2.4s}' +
    '@keyframes spjet{0%{transform:translate(-90px,70px) rotate(-10deg)}100%{transform:translate(470px,-50px) rotate(-10deg)}}.sp-jet{animation:spjet 10s linear infinite}' +
    '@keyframes spkite{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(8px,-6px) rotate(6deg)}}.sp-kite{animation:spkite 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes spglow{0%{fill:#7a3cff}25%{fill:#ff4fa8}50%{fill:#ffb347}75%{fill:#2fd1c3}100%{fill:#7a3cff}}.sp-glow{animation:spglow 8s linear infinite}' +
    '@keyframes sptw{0%,100%{opacity:.25}50%{opacity:1}}.sp-tw{animation:sptw 2.2s ease-in-out infinite}.sp-tw2{animation-delay:-.7s}.sp-tw3{animation-delay:-1.4s}' +
    '@keyframes spline{0%{stroke-dashoffset:300}60%,100%{stroke-dashoffset:0}}.sp-con{stroke-dasharray:300;animation:spline 6s ease-out infinite}' +
    '@keyframes spheli{0%{transform:translate(-120px,30px)}60%,100%{transform:translate(0,0)}}.sp-heli{animation:spheli 7s ease-out infinite}' +
    '@keyframes sprot{0%{transform:scaleX(1)}50%{transform:scaleX(.2)}100%{transform:scaleX(1)}}.sp-rot{animation:sprot .25s linear infinite;transform-box:fill-box;transform-origin:50% 50%}' +
    '@keyframes spspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp-sp{animation:spspray 1.4s ease-out infinite}.sp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => Array.from({ length: n }, (_, i) => '<path class="sp-rn sp-rn' + (1 + i % 3) + '" d="M' + ((i * 37) % 410) + ' ' + ((i * 23) % 90 - 30) + 'l-3 12" stroke="' + (col || "#cfe3f0") + '" stroke-width="1.2" opacity=".5"/>').join("");
  const GOLD = "#f2c14e", JADE = "#3fb58a", VIO = "#b46be0", CAR = "#ec4025";

  /* 1. 14th & Washington, First Hill Streetcar */
  function spstation() {
    const houses = [[0, 70, 62, "#5d5a6e"], [66, 78, 58, "#6e6152"], [128, 66, 70, "#4f5f66"], [204, 74, 60, "#6a5a5a"], [270, 68, 66, "#56604f"], [340, 76, 60, "#635a6e"]].map(([x, y, w, c]) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (124 - y) + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -22l' + (w / 2 + 4) + ' 22z" fill="#3a3640"/>' +
      '<rect x="' + (x + 10) + '" y="' + (y + 12) + '" width="14" height="14" fill="#ffd98a" opacity=".8"/><rect x="' + (x + w - 24) + '" y="' + (y + 12) + '" width="14" height="14" fill="#ffd98a" opacity=".6"/>').join("");
    const trees = [40, 180, 316].map(x => '<rect x="' + (x - 2) + '" y="92" width="5" height="32" fill="#4a3a2a"/><circle cx="' + x + '" cy="84" r="18" fill="#2f5a3e"/><circle cx="' + (x + 12) + '" cy="92" r="12" fill="#376b47"/>').join("");
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="112" width="34" height="26" rx="3" fill="#1d2a36"/>').join("");
    const car = '<g class="anim-train"><path d="M36 172V114q0 -16 18 -18h314q18 2 18 18v58z" fill="' + JADE + '" stroke="#1f6b4f" stroke-width="2"/>' + win +
      '<rect x="36" y="146" width="350" height="26" fill="#e9efe9"/><path d="M150 96v76M266 96v76" stroke="#1f6b4f" stroke-width="2"/>' +
      '<rect x="168" y="114" width="16" height="58" fill="#24323e"/><rect x="186" y="114" width="16" height="58" fill="#24323e"/>' +
      '<rect x="318" y="100" width="58" height="9" rx="2" fill="#111"/><text x="347" y="107.2" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">BROADWAY</text>' +
      '<path d="M200 96l-14 -22h28z" fill="none" stroke="#333" stroke-width="2"/>' +
      '<circle class="sp-flk" cx="380" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sps1)"/>' + houses + trees +
      '<path d="M0 74h400" stroke="#222" stroke-width="1.5"/><rect x="20" y="70" width="4" height="106" fill="#555"/><rect x="376" y="70" width="4" height="106" fill="#555"/>' +
      '<rect x="0" y="124" width="400" height="56" fill="#4a4c52"/><path d="M0 176h400" stroke="#8a8a8a" stroke-width="2"/>' + car +
      /* curbside platform + shelter */
      '<rect x="0" y="178" width="400" height="18" fill="#bdb8ad"/><rect x="0" y="178" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a5753"/>' +
      /* totem with the streetcar color top */
      '<rect x="40" y="128" width="12" height="68" fill="#2b2b2b"/><rect x="34" y="118" width="24" height="16" rx="2" fill="' + CAR + '"/>' +
      /* black station sign */
      '<rect x="88" y="202" width="224" height="38" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="186" y="227" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">14th &amp; Washington</text>' +
      '<circle cx="290" cy="221" r="13" fill="' + CAR + '"/><text x="290" y="225.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">FH</text>' +
      rain(24) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#e6efe9" letter-spacing="2">FIRST HILL STREETCAR · CENTRAL DISTRICT</text>',
      sky("sps1", "#3c4a66", "#a7a3b8"));
  }

  /* 2. Meany Middle School music room */
  function spmeany() {
    const chairs = Array.from({ length: 6 }, (_, i) => '<g><rect x="' + (20 + i * 62) + '" y="196" width="34" height="6" fill="#2f4f7a"/><rect x="' + (24 + i * 62) + '" y="172" width="26" height="24" rx="3" fill="#3b6aa0"/><rect x="' + (22 + i * 62) + '" y="202" width="3" height="22" fill="#555"/><rect x="' + (49 + i * 62) + '" y="202" width="3" height="22" fill="#555"/></g>').join("");
    const note = (x, y, c, k) => '<g class="sp-nt ' + k + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.5) + '" y="' + (y - 20) + '" width="2" height="20" fill="' + c + '"/><path d="M' + (x + 5.5) + ' ' + (y - 20) + 'q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    const sax = '<g transform="translate(270 70)">' +
      '<path d="M30 6l6 -4l4 6l-6 4z" fill="#222"/><path d="M34 10q2 30 0 62q-2 30 -24 34q-18 2 -20 -16q0 -10 10 -12" fill="none" stroke="' + GOLD + '" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M-14 82q-6 -22 6 -26q14 -2 16 10" fill="none" stroke="#e0a93a" stroke-width="16" stroke-linecap="round"/><ellipse cx="-6" cy="58" rx="12" ry="6" fill="#7a5418"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (38 + (i % 2)) + '" cy="' + (26 + i * 10) + '" r="3" fill="#fff1c2" stroke="#9a7420"/>').join("") +
      '<path d="M8 118l10 -12l10 12M18 106v-8" stroke="#333" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#c9b79a"/><rect x="0" y="0" width="400" height="150" fill="#d8c8a8"/>' +
      /* window with rain and the brick outside */
      '<rect x="20" y="22" width="120" height="96" fill="url(#sps2)" stroke="#6b5a40" stroke-width="5"/><path d="M80 22v96M20 70h120" stroke="#6b5a40" stroke-width="3"/>' +
      '<g opacity=".8">' + Array.from({ length: 8 }, (_, i) => '<path class="sp-rn sp-rn' + (1 + i % 3) + '" d="M' + (30 + i * 14) + ' 10l-2 10" stroke="#e8f1f6" stroke-width="1.2"/>').join("") + '</g>' +
      /* chalkboard with a staff */
      '<rect x="160" y="20" width="220" height="80" fill="#24372e" stroke="#8a6a3a" stroke-width="5"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M172 ' + (40 + i * 8) + 'h196" stroke="#cfd8cf" stroke-width="1" opacity=".75"/>').join("") +
      '<text x="178" y="76" font-family="serif" font-size="34" fill="#e8ece6">&#119070;</text>' +
      '<g fill="#e8ece6"><ellipse cx="230" cy="64" rx="4.5" ry="3.4"/><ellipse cx="256" cy="56" rx="4.5" ry="3.4"/><ellipse cx="282" cy="48" rx="4.5" ry="3.4"/><ellipse cx="308" cy="60" rx="4.5" ry="3.4"/></g>' +
      '<g stroke="#e8ece6" stroke-width="1.5"><path d="M234 64v-20M260 56v-20M286 48v-20M312 60v-20"/></g>' +
      '<text x="176" y="94" font-family="Permanent Marker, cursive" font-size="10" fill="#f2e6b8">JAZZ BAND</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#8a6a46"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 150v110" stroke="#7a5c3c" stroke-width="1"/>').join("") +
      /* music stand with a chart */
      '<rect x="176" y="112" width="70" height="50" fill="#222" transform="rotate(-6 211 137)"/><rect x="182" y="116" width="58" height="42" fill="#f5f0e2" transform="rotate(-6 211 137)"/>' +
      '<g transform="rotate(-6 211 137)" stroke="#555" stroke-width=".8">' + Array.from({ length: 5 }, (_, i) => '<path d="M186 ' + (124 + i * 6) + 'h50"/>').join("") + '</g>' +
      '<rect x="208" y="160" width="4" height="64" fill="#222"/><path d="M196 226l14 -6l14 6" stroke="#222" stroke-width="3" fill="none"/>' +
      chairs + sax +
      note(240, 110, GOLD, "") + note(300, 96, "#fff7dc", "sp-nt2") + note(340, 118, GOLD, "sp-nt3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff4dc" letter-spacing="2">MEANY MIDDLE SCHOOL · WHERE ISH LEARNED THE SAX</text>',
      sky("sps2", "#7d8b98", "#b9c3c9"));
  }

  /* 3. Yesler Terrace hillside */
  function spyesler() {
    const row = (y, n, off, sc) => Array.from({ length: n }, (_, i) => {
      const x = off + i * 58 * sc, w = 48 * sc, h = 22 * sc;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#efece3" stroke="#a9a496" stroke-width="1"/>' +
        '<path d="M' + (x - 3) + ' ' + y + 'l' + (w / 2 + 3) + ' ' + (-9 * sc) + 'l' + (w / 2 + 3) + ' ' + (9 * sc) + 'z" fill="#6f5f52"/>' +
        '<rect x="' + (x + 6 * sc) + '" y="' + (y + 6 * sc) + '" width="' + (8 * sc) + '" height="' + (8 * sc) + '" fill="#4f6f88"/><rect x="' + (x + 30 * sc) + '" y="' + (y + 6 * sc) + '" width="' + (8 * sc) + '" height="' + (8 * sc) + '" fill="#4f6f88"/>' +
        '<rect x="' + (x + 19 * sc) + '" y="' + (y + 10 * sc) + '" width="' + (8 * sc) + '" height="' + (12 * sc) + '" fill="#8a4a3a"/>';
    }).join("");
    const towers = [[150, 40, 22, 60], [176, 26, 18, 74], [198, 50, 26, 50], [228, 34, 20, 66], [252, 56, 30, 44], [286, 44, 18, 56], [308, 60, 26, 40]].map(([x, y, w, h]) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#5d6876"/>' + Array.from({ length: Math.floor(h / 10) }, (_, j) => '<rect x="' + (x + 4) + '" y="' + (y + 4 + j * 10) + '" width="' + (w - 8) + '" height="3" fill="#a9b8c6" opacity=".5"/>').join("")).join("");
    const jet = '<g class="sp-jet"><path d="M0 40h62q8 0 10 4q-2 4 -10 4H0z" fill="#f4f6f7" stroke="#8a9399" stroke-width="1"/><path d="M26 44l-12 18h8l18 -18zM26 44l-8 -14h6l14 14z" fill="#c9d0d4"/><path d="M0 40l-6 -12h6l8 12z" fill="#4f7fb0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sps3)"/>' +
      '<rect x="0" y="92" width="400" height="20" fill="#5f88a6"/>' + towers + jet +
      /* freeway trench below the hill */
      '<rect x="0" y="100" width="400" height="16" fill="#6b6d72"/><path d="M0 108h400" stroke="#f2f2f2" stroke-width="1" stroke-dasharray="12 10"/>' +
      '<g class="sp-flk"><rect x="40" y="103" width="14" height="5" fill="#d44"/><rect x="260" y="109" width="14" height="5" fill="#e8e8e8"/></g>' +
      /* the hill, stepping up toward the viewer */
      '<path d="M0 118h400v142H0z" fill="#5f8a4f"/><path d="M0 160h400" stroke="#507a42" stroke-width="2"/><path d="M0 206h400" stroke="#4a7440" stroke-width="2"/>' +
      row(132, 8, 6, .8) + row(174, 7, -10, 1) + row(220, 6, 14, 1.15) +
      /* a kid's kite on the lawn */
      '<path d="M352 214q-10 -60 -6 -120" stroke="#eee" stroke-width=".8" fill="none"/><g class="sp-kite"><path d="M346 70l10 14l-10 14l-10 -14z" fill="' + GOLD + '" stroke="#7a5a1a"/><path d="M346 98q4 8 -2 14q4 6 0 12" stroke="' + VIO + '" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#f4f1e6" letter-spacing="2" stroke="#2a3a22" stroke-width="2" paint-order="stroke">YESLER TERRACE · WHERE HIS GRANDPARENTS SETTLED</text>',
      sky("sps3", "#8fb0cc", "#f0d6a8"));
  }

  /* 4. Henry Art Gallery skyspace at night */
  function sphenry() {
    const stars = [[40, 30], [70, 52], [112, 26], [150, 46], [196, 20], [238, 40], [276, 22], [318, 48], [356, 28], [24, 78], [374, 74], [130, 76]];
    const con = 'M70 52L112 26L150 46L196 20L238 40L276 22L318 48';
    return svg(
      '<rect width="400" height="260" fill="url(#sps4)"/>' +
      stars.map(([x, y], i) => '<circle class="sp-tw sp-tw' + (1 + i % 3) + '" cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff6dc"/>').join("") +
      '<path class="sp-con" d="' + con + '" stroke="' + GOLD + '" stroke-width="1.2" fill="none" opacity=".8"/>' +
      /* the gallery building behind: pale concrete and brick */
      '<rect x="0" y="96" width="400" height="80" fill="#6c6660"/><rect x="0" y="96" width="400" height="8" fill="#8a837a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 50) + '" y="114" width="28" height="44" fill="#2e2b33"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3a40"/><path d="M0 176h400" stroke="#55555c" stroke-width="2"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 176l-20 84" stroke="#46464d" stroke-width="1"/>').join("") +
      /* the elliptical skyspace pavilion: glass skin glowing, cycling color */
      '<ellipse cx="200" cy="196" rx="96" ry="16" fill="#1b1b22"/>' +
      '<path d="M108 196V122q0 -14 92 -14t92 14v74z" class="sp-glow" fill="#7a3cff" opacity=".88"/>' +
      '<ellipse cx="200" cy="122" rx="92" ry="14" fill="#dfe3ea" opacity=".85"/><ellipse cx="200" cy="122" rx="30" ry="5" fill="#0d0d18"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (116 + i * 21) + ' ' + (112 + Math.abs(4 - i) * 1.2) + 'V196" stroke="#f4f4f8" stroke-width="1" opacity=".35"/>').join("") +
      '<rect x="190" y="164" width="20" height="32" rx="2" fill="#0d0d18" opacity=".8"/>' +
      '<ellipse cx="200" cy="212" rx="120" ry="10" class="sp-glow" fill="#7a3cff" opacity=".25"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="#efe6ff" letter-spacing="2">HENRY ART GALLERY · BLACK CONSTELLATION</text>',
      sky("sps4", "#070716", "#2a1f46"));
  }

  /* 5. 23rd Ave and E Jefferson St, Harborview up the hill */
  function spcorner() {
    /* Harborview's art deco center tower: buff brick, stepped setbacks, wings */
    const hv = '<g fill="#cdb38a" stroke="#9a8462" stroke-width="1">' +
      '<rect x="200" y="74" width="150" height="56"/><rect x="226" y="58" width="98" height="20"/><rect x="246" y="38" width="58" height="22"/><rect x="258" y="24" width="34" height="16"/><rect x="268" y="14" width="14" height="12"/></g>' +
      '<g fill="#e9d9b6" opacity=".7">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (206 + i * 12) + '" y="82" width="4" height="44"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (252 + i * 7.5) + '" y="42" width="3" height="16"/>').join("") + '</g>' +
      '<g fill="#ffe2a0" opacity=".85">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (210 + i * 13) + '" y="' + (96 + (i % 3) * 10) + '" width="5" height="5"/>').join("") + '</g>';
    const heli = '<g class="sp-heli"><g transform="translate(330 30)"><ellipse cx="0" cy="0" rx="12" ry="6" fill="#c8102e"/><path d="M-10 0h-16l-2 -4" stroke="#c8102e" stroke-width="3" fill="none"/><rect class="sp-rot" x="-18" y="-9" width="36" height="2" fill="#222"/><path d="M-6 6v3h12v-3" stroke="#222" stroke-width="1.5" fill="none"/><circle class="sp-flk" cx="12" cy="0" r="1.6" fill="#fff"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sps5)"/>' +
      '<path d="M0 132q120 -26 220 -14t180 -6v20H0z" fill="#5a5470"/>' + hv + heli +
      '<rect x="0" y="126" width="400" height="98" fill="#3b3a44"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#33323b" stroke-width="1"/>').join("") +
      tag("SHABAZZ", 16, 178, 40, GOLD, -6) + tag("PALACES", 40, 212, 36, VIO, -5) + tag("BLACK UP", 230, 214, 16, JADE, -4) + tag("ISH", 250, 176, 20, "#fff1d0", -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(296, 106, 104, "23rd Ave") + sign(276, 132, 124, "E Jefferson St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sp-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp-sp"><circle cx="176" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sp-sp sp-sp2"><circle cx="182" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sps5", "#1e1838", "#e0866a"));
  }

  window.SCENES = { spstation: spstation, spmeany: spmeany, spyesler: spyesler, sphenry: sphenry, spcorner: spcorner };
})();
