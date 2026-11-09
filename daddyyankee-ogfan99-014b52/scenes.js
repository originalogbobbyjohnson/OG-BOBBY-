/* Daddy Yankee game (GENRES: Reggaeton; INTERNATIONAL region: CARIBBEAN; San Juan, Puerto Rico - born 1977 in Río Piedras, raised in the Villa Kennedy housing project, Santurce).
   Rooms: 1 the Tren Urbano pulling into Sagrado Corazón station (the north end of the line, in Santurce);
   2 Caño Martín Peña by Barrio Obrero: mangroves, a little boat, wooden houses on the bank;
   3 Estadio Hiram Bithorn, Hato Rey: the baseball he chased before music (a ball sails out);
   4 La Perla under the old San Juan city wall, the stone garita on top, where "Despacito" was filmed;
   5 Avenida Borinquen and PR-36 (the road named for him in 2026) near Villa Kennedy: green signs, DADDY YANKEE tagged, the Hato Rey towers behind.
   CSS classes prefixed "dyk" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dykBoat{0%{transform:translateX(-70px)}100%{transform:translateX(470px)}}.dykBoat{animation:dykBoat 14s linear infinite}' +
    '@keyframes dykRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.dykRip{animation:dykRip 3s ease-in-out infinite}.dykRp2{animation-delay:-1.5s}' +
    '@keyframes dykBall{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(230px,-150px);opacity:0}}.dykBall{animation:dykBall 3.2s ease-out infinite}' +
    '@keyframes dykBlink{0%,100%{opacity:.35}50%{opacity:1}}.dykBlink{animation:dykBlink 1.5s ease-in-out infinite}.dykBk2{animation-delay:-.75s}' +
    '@keyframes dykBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-20px)}}.dykBird{animation:dykBird 13s linear infinite}.dykBd2{animation-delay:-6.5s}' +
    '@keyframes dykKite{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.dykKite{animation:dykKite 3s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes dykHue{0%,100%{fill:#ffc72c}50%{fill:#ff8a1e}}.dykHue{animation:dykHue 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot, cls) =>
    '<text' + (cls ? ' class="' + cls + '"' : '') + ' x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffc72c", RED = "#e2231a", CYAN = "#00b3e3", GREEN = "#0f6b3a", TU = "#00a651";
  const birds = '<g class="dykBird"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
    '<g class="dykBird dykBd2"><path d="M0 58q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, y, k) => '<path d="M' + x + ' ' + y + 'q' + (4 * k) + ' ' + (-40 * k) + ' ' + (-2 * k) + ' ' + (-80 * k) + '" stroke="#7a5a3a" stroke-width="' + (5 * k) + '" fill="none"/>' +
    '<g fill="#2f8a3a">' + [[-34, -6], [30, -4], [-26, 14], [26, 16], [0, -22]].map(([dx, dy]) =>
      '<path d="M' + (x - 2 * k) + ' ' + (y - 80 * k) + 'q' + (dx * k / 2) + ' ' + (dy * k - 14 * k) + ' ' + (dx * k) + ' ' + (dy * k + 6 * k) + 'q' + (-dx * k / 3) + ' ' + (-6 * k) + ' ' + (-dx * k) + ' ' + (-dy * k - 6 * k) + 'z"/>').join("") + '</g>';
  /* Hato Rey office towers (the Milla de Oro) */
  const towers = (base, col) => '<g fill="' + col + '">' + [[120, 40, 70], [168, 30, 96], [204, 36, 80], [246, 28, 108], [280, 42, 66], [330, 30, 84]]
    .map(([x, w, h]) => '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '"/>').join("") + '</g>' +
    '<g fill="#e8eef4" opacity=".5">' + [[126, 3], [174, 4], [210, 3], [252, 5], [286, 3], [336, 4]].map(([x, n]) =>
      Array.from({ length: n }, (_, i) => '<rect x="' + x + '" y="' + (base - 60 + i * 12) + '" width="18" height="4"/>').join("")).join("") + '</g>';

  /* 1. Tren Urbano pulling into Sagrado Corazón station, Santurce */
  function dyktren() {
    let wins = "";
    for (let x = 52; x < 340; x += 26) if ((x - 52) % 104 !== 78) wins += '<rect x="' + x + '" y="146" width="18" height="16" rx="2" fill="#bfe3ff"/>';
    const train = '<g class="anim-train">' +
      '<rect x="36" y="136" width="320" height="58" rx="8" fill="#eef1f3" stroke="#7c8790" stroke-width="1.5"/>' +
      '<path d="M140 136v58M244 136v58" stroke="#7c8790" stroke-width="1.5"/>' + wins +
      '<rect x="36" y="170" width="320" height="8" fill="' + TU + '"/><rect x="36" y="179" width="320" height="3" fill="#0a5d33"/>' +
      '<rect x="120" y="142" width="16" height="44" fill="#c7d0d8"/><rect x="224" y="142" width="16" height="44" fill="#c7d0d8"/>' +
      '<rect x="338" y="144" width="14" height="22" rx="3" fill="#bfe3ff"/><circle cx="346" cy="186" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dyk1)"/>' + birds +
      towers(130, "#9fb3c4") + palm(30, 132, 0.8) + palm(374, 132, 0.7) +
      '<rect x="0" y="194" width="400" height="66" fill="#8a8f96"/><rect x="0" y="194" width="400" height="5" fill="' + GOLD + '"/>' +
      '<g stroke="#5a5f66" stroke-width="3"><path d="M0 214h400M0 226h400"/></g>' +
      '<path d="M10 104h380l-12 12H22z" fill="#e2e6ea" stroke="#7c8790" stroke-width="1.2"/>' +
      '<g fill="#6f7880"><rect x="30" y="116" width="5" height="80"/><rect x="198" y="116" width="5" height="80"/><rect x="364" y="116" width="5" height="80"/></g>' +
      train +
      '<rect x="98" y="12" width="4" height="36" fill="#9aa3ab"/><rect x="298" y="12" width="4" height="36" fill="#9aa3ab"/>' +
      '<rect x="64" y="8" width="272" height="46" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="78" y="18" width="34" height="26" rx="4" fill="' + TU + '"/><text x="95" y="36" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">TU</text>' +
      '<text x="222" y="32" text-anchor="middle" ' + F + ' font-size="17" fill="#fff">Sagrado Corazón</text>' +
      '<text x="222" y="47" text-anchor="middle" ' + F + ' font-size="8" fill="#cfd6dc">TREN URBANO · SANTURCE</text>',
      sky("dyk1", "#6cc3ff", "#e9f6ff"));
  }

  /* 2. Caño Martín Peña by Barrio Obrero: mangroves, a small boat, houses on the bank */
  function dykcano() {
    const house = (x, y, w, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" fill="' + c + '" stroke="#5a4a3a" stroke-width="1"/>' +
      '<path d="M' + (x - 3) + ' ' + y + 'h' + (w + 6) + 'l-6 -8h' + (-w + 6) + 'z" fill="#a8b0b8"/>' +
      '<rect x="' + (x + 6) + '" y="' + (y + 8) + '" width="8" height="8" fill="#3a2a1a"/>' +
      '<path d="M' + (x + 4) + ' ' + (y + 26) + 'v14M' + (x + w - 4) + ' ' + (y + 26) + 'v14" stroke="#5a4a3a" stroke-width="2"/>';
    let mangrove = "";
    for (let i = 0; i < 10; i++) { const x = 8 + i * 42; mangrove += '<ellipse cx="' + x + '" cy="186" rx="26" ry="14" fill="#2f6f3a"/><path d="M' + (x - 10) + ' 196l-6 12M' + x + ' 196v14M' + (x + 10) + ' 196l6 12" stroke="#6b4a2a" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dyk2)"/>' + birds +
      towers(120, "#b9c7d4") +
      '<rect x="0" y="120" width="400" height="30" fill="#7fa36a"/>' +
      house(14, 98, 44, "#f2c94c") + house(70, 102, 40, "#8fd3c7") + house(122, 96, 48, "#f7a8b8") + house(250, 100, 42, "#bcd4ff") + house(304, 96, 46, "#f4e3c1") + house(360, 102, 36, "#f2c94c") +
      '<rect x="0" y="140" width="400" height="120" fill="#3f7f86"/>' +
      '<g class="dykRip"><path d="M-20 160q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8d8dc" stroke-width="1.5" fill="none"/></g>' +
      '<g class="dykRip dykRp2"><path d="M-20 228q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a8d8dc" stroke-width="1.5" fill="none"/></g>' +
      '<g class="dykBoat"><path d="M0 172h56l-8 12H8z" fill="#f4f4f0" stroke="#555" stroke-width="1"/><rect x="18" y="164" width="18" height="8" fill="' + CYAN + '"/></g>' +
      mangrove +
      '<rect x="110" y="14" width="180" height="22" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="200" y="29" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">CAÑO MARTÍN PEÑA</text>',
      sky("dyk2", "#7cc8ff", "#e6f4ff"));
  }

  /* 3. Estadio Hiram Bithorn, Hato Rey: baseball, a ball sailing out over the lights */
  function dykbithorn() {
    let seats = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 26; i++) seats += '<rect x="' + (4 + i * 15.4) + '" y="' + (96 + r * 9) + '" width="11" height="5" fill="' + ((i + r) % 3 ? "#2f5fa8" : "#d8dde4") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dyk3)"/>' +
      /* light towers */
      '<g><rect x="40" y="24" width="4" height="66" fill="#777"/><rect x="24" y="16" width="36" height="12" fill="#ddd"/><rect x="356" y="24" width="4" height="66" fill="#777"/><rect x="340" y="16" width="36" height="12" fill="#ddd"/></g>' +
      '<g class="dykBlink"><rect x="26" y="18" width="32" height="8" fill="#fff8c8"/></g><g class="dykBlink dykBk2"><rect x="342" y="18" width="32" height="8" fill="#fff8c8"/></g>' +
      /* curved concrete stands */
      '<path d="M0 92q200 -36 400 0v42H0z" fill="#c9c3b6"/>' + seats +
      '<rect x="0" y="132" width="400" height="10" fill="#1d4f2a"/>' +
      '<rect x="0" y="142" width="400" height="118" fill="#3d9b4a"/>' +
      '<g fill="#47ab55"><rect x="0" y="160" width="400" height="12"/><rect x="0" y="190" width="400" height="12"/><rect x="0" y="220" width="400" height="12"/></g>' +
      '<path d="M200 252l-80 -50l80 -40l80 40z" fill="#c8945c"/><path d="M200 244l-60 -40l60 -30l60 30z" fill="#3d9b4a"/>' +
      '<g fill="#fff"><rect x="196" y="240" width="8" height="8"/><rect x="138" y="198" width="7" height="7"/><rect x="255" y="198" width="7" height="7"/><rect x="196" y="168" width="7" height="7"/></g>' +
      '<g class="dykBall"><circle cx="150" cy="200" r="5" fill="#fff" stroke="' + RED + '" stroke-width="1"/></g>' +
      '<rect x="110" y="40" width="180" height="22" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="200" y="55" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">ESTADIO HIRAM BITHORN</text>',
      sky("dyk3", "#4aa8ef", "#d8f0ff"));
  }

  /* 4. La Perla below the old San Juan city wall, the stone garita on top */
  function dykperla() {
    const cols = ["#f2c94c", "#f7a8b8", "#8fd3c7", "#bcd4ff", "#ff9a5c", "#c8e6a0", "#f4e3c1"];
    let houses = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) {
      const x = i * 46 - (r % 2) * 20, y = 132 + r * 26;
      houses += '<rect x="' + x + '" y="' + y + '" width="40" height="24" fill="' + cols[(i + r * 2) % cols.length] + '" stroke="#5a4a3a" stroke-width="1"/><rect x="' + (x + 8) + '" y="' + (y + 7) + '" width="8" height="9" fill="#3a2a1a"/><rect x="' + (x + 24) + '" y="' + (y + 7) + '" width="8" height="9" fill="#3a2a1a"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#dyk4)"/>' + birds +
      /* the old city wall with a sentry box */
      '<path d="M0 82h400v50H0z" fill="#c9a77a"/><path d="M0 82h400" stroke="#a8875a" stroke-width="4"/>' +
      '<g stroke="#b08e60" stroke-width="1"><path d="M0 98h400M0 114h400"/></g>' +
      '<g transform="translate(286,40)"><rect x="0" y="16" width="34" height="36" fill="#d8b98a" stroke="#a8875a"/><path d="M-4 16q21 -26 42 0z" fill="#d8b98a" stroke="#a8875a"/><circle cx="17" cy="-6" r="3" fill="#a8875a"/><rect x="12" y="26" width="10" height="14" rx="5" fill="#3a2a1a"/></g>' +
      '<g class="dykKite"><path d="M220 40l12 -14l12 14l-12 18z" fill="' + RED + '"/><path d="M232 58q-6 20 6 24" stroke="#333" stroke-width="1" fill="none"/></g>' +
      houses +
      '<rect x="0" y="210" width="400" height="16" fill="#e8d8b4"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#2a7fb8"/>' +
      '<g class="dykRip"><path d="M-20 238q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d0ecff" stroke-width="2" fill="none"/></g>' +
      '<rect x="14" y="18" width="190" height="22" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="109" y="33" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">LA PERLA · VIEJO SAN JUAN</text>',
      sky("dyk4", "#58b9ff", "#e3f5ff"));
  }

  /* 5. Avenida Borinquen and PR-36 near Villa Kennedy: green signs, DADDY YANKEE tagged, the Hato Rey towers behind */
  function dykcorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#dyk5)"/>' + birds +
      towers(146, "#8ea4b8") + palm(40, 148, 0.8) +
      '<rect x="0" y="146" width="400" height="76" fill="#efe6d6"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#dacdb4" stroke-width="1"/>' +
      tag("EL CARTEL", 20, 172, 16, CYAN, -3) +
      tag("DADDY YANKEE", 22, 212, 34, GOLD, -5, "dykHue") +
      tag("DALE MAMBO", 262, 218, 11, RED, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3a40"/><rect x="0" y="220" width="400" height="4" fill="#b8b8be"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="352" y="72" width="5" height="150" fill="#4a4a4a"/>' +
      sign(292, 74, 104, "AVE. BORINQUEN", 10) +
      sign(292, 100, 104, "PR-36") +
      '<text x="344" y="136" text-anchor="middle" ' + F + ' font-size="8" fill="#1d2a44">SANTURCE</text>',
      sky("dyk5", "#86cdfc", "#eef7ff"));
  }

  window.SCENES = { dyktren, dykcano, dykbithorn, dykperla, dykcorner };
})();
