/* nesby scenes (Regions tab: New Orleans; Hollygrove, where Nesby Phips grew up and runs 0017th). CSS classes and ids prefixed np- (the page's own anim-train is kept).
   1 Leonidas St / Olive St on RTA bus route 32 (Leonidas - Treme): the bus pulls in past Hollygrove shotgun houses.
   2 Hollygrove Market & Farm: the little urban farm - raised beds, a hoop house, the farm-stand shed, sunflowers swaying, a butterfly.
   3 Larry Gilbert Stadium in Hollygrove: the neighborhood ballpark at night, light towers on, a ball arcing out ("Word To These Bo Jacksons").
   4 McMain Secondary School on S Claiborne Av (his high school): the cream-brick Art Deco front, flag waving, clouds drifting.
   5 Leonidas St and Olive St: green signs, NESBY tagged on the wall, the Superdome glowing on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes npcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.np-cl{animation:npcloud 32s linear infinite}.np-cl2{animation-delay:-16s}' +
    '@keyframes npsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.np-sw{transform-box:fill-box;transform-origin:50% 100%;animation:npsway 3s ease-in-out infinite}.np-sw2{animation-delay:-1.5s}' +
    '@keyframes npfly{0%{transform:translate(0,0)}25%{transform:translate(60px,-18px)}50%{transform:translate(120px,4px)}75%{transform:translate(170px,-22px)}100%{transform:translate(0,0)}}.np-bf{animation:npfly 12s ease-in-out infinite}' +
    '@keyframes npflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}.np-wg{transform-box:fill-box;transform-origin:50% 50%;animation:npflap .35s ease-in-out infinite}' +
    '@keyframes npball{0%{transform:translate(0,0);opacity:0}8%{opacity:1}100%{transform:translate(250px,-40px);opacity:0}}.np-ball{animation:npball 3.4s cubic-bezier(.2,.7,.5,1) infinite}' +
    '@keyframes npglow{0%,100%{opacity:.55}50%{opacity:1}}.np-gl{animation:npglow 2.6s ease-in-out infinite}.np-gl2{animation-delay:-1.3s}' +
    '@keyframes npflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.np-flag{transform-box:fill-box;transform-origin:0 50%;animation:npflag 1.4s ease-in-out infinite}' +
    '@keyframes npspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.np-sp{animation:npspray 1.4s ease-out infinite}.np-sp2{animation-delay:.45s}' +
    '@keyframes npblink{0%,100%{opacity:.25}50%{opacity:1}}.np-bl{animation:npblink 1.6s ease-in-out infinite}.np-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s) => '<g fill="#fff" opacity=".75"><ellipse cx="' + x + '" cy="' + y + '" rx="' + 22 * s + '" ry="' + 8 * s + '"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (y - 6 * s) + '" rx="' + 12 * s + '" ry="' + 8 * s + '"/></g>';
  const BLUE = "#3ec7ff", GREEN = "#4cd97b", GOLD = "#f2c14e", R32 = "#00796b";

  /* a shotgun house: clapboard, gable front, shutters */
  const shotgun = (x, base, w, h, c, trim) => '<g><rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
    Array.from({ length: Math.floor(h / 6) }, (_, i) => '<path d="M' + x + ' ' + (base - h + 6 + i * 6) + 'h' + w + '" stroke="#000" stroke-opacity=".08"/>').join("") +
    '<path d="M' + (x - 3) + ' ' + (base - h) + 'l' + (w / 2 + 3) + ' -' + (w * 0.42) + 'l' + (w / 2 + 3) + ' ' + (w * 0.42) + 'z" fill="' + trim + '"/>' +
    '<rect x="' + (x + w * 0.14) + '" y="' + (base - h * 0.78) + '" width="' + (w * 0.24) + '" height="' + (h * 0.5) + '" fill="#2a2f3a"/><rect x="' + (x + w * 0.6) + '" y="' + (base - h * 0.78) + '" width="' + (w * 0.24) + '" height="' + (h * 0.78) + '" fill="#3a2a22"/>' +
    '<path d="M' + x + ' ' + (base - h * 0.92) + 'h' + w + '" stroke="' + trim + '" stroke-width="3"/></g>';
  const oak = (x, base, s) => '<g><path d="M' + (x - 4 * s) + ' ' + base + 'q' + (2 * s) + ' -' + (30 * s) + ' -' + (10 * s) + ' -' + (46 * s) + 'M' + (x + 4 * s) + ' ' + base + 'q' + (4 * s) + ' -' + (28 * s) + ' ' + (16 * s) + ' -' + (40 * s) + '" stroke="#4a3a2c" stroke-width="' + (7 * s) + '" fill="none"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 52 * s) + '" rx="' + (44 * s) + '" ry="' + (22 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 24 * s) + '" cy="' + (base - 44 * s) + '" rx="' + (22 * s) + '" ry="' + (14 * s) + '" fill="#386b3d"/><ellipse cx="' + (x + 26 * s) + '" cy="' + (base - 46 * s) + '" rx="' + (24 * s) + '" ry="' + (14 * s) + '" fill="#2a5130"/>' +
    '<path d="M' + (x - 30 * s) + ' ' + (base - 36 * s) + 'v' + (12 * s) + 'M' + (x - 14 * s) + ' ' + (base - 34 * s) + 'v' + (16 * s) + 'M' + (x + 18 * s) + ' ' + (base - 36 * s) + 'v' + (14 * s) + 'M' + (x + 34 * s) + ' ' + (base - 38 * s) + 'v' + (10 * s) + '" stroke="#8a9a8a" stroke-width="' + (2 * s) + '" opacity=".8"/></g>';

  /* 1. Leonidas St / Olive St, RTA route 32 */
  function npstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 42) + '" y="124" width="34" height="26" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a96a2" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="300" height="8" fill="' + R32 + '"/><path d="M40 168h300" stroke="' + BLUE + '" stroke-width="4"/>' +
      '<rect x="322" y="118" width="16" height="44" rx="3" fill="#2a3a48"/><rect x="44" y="124" width="12" height="54" rx="2" fill="#2a3a48"/>' +
      '<rect x="236" y="114" width="82" height="9" rx="2" fill="#111"/><text x="277" y="121.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">32 LEONIDAS-TREME</text>' +
      '<circle cx="334" cy="178" r="4" fill="#fff6c2"/><circle cx="96" cy="190" r="12" fill="#1c1c1c"/><circle cx="96" cy="190" r="5" fill="#9aa3ab"/><circle cx="286" cy="190" r="12" fill="#1c1c1c"/><circle cx="286" cy="190" r="5" fill="#9aa3ab"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nps1)"/>' + '<g class="np-cl">' + cloud(60, 30, 1) + '</g><g class="np-cl np-cl2">' + cloud(200, 22, .8) + '</g>' +
      oak(40, 118, 1) + shotgun(84, 118, 56, 60, "#9fc7e8", "#fff") + shotgun(152, 118, 56, 56, "#b8e2b0", "#fff") + shotgun(220, 118, 56, 62, "#f3e3a8", "#fff") + shotgun(288, 118, 56, 58, "#e8b8a8", "#fff") + oak(370, 118, .9) +
      '<rect x="0" y="118" width="400" height="76" fill="#55565c"/><path d="M0 150h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="0" y="194" width="400" height="66" fill="#a7a299"/><path d="M0 200h400" stroke="#8d887f" stroke-width="2"/>' +
      '<rect x="366" y="122" width="5" height="78" fill="#3a3a3a"/><rect x="352" y="108" width="34" height="22" rx="3" fill="' + R32 + '"/><text x="369" y="124" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">32</text>' +
      '<rect x="54" y="208" width="292" height="40" rx="3" fill="#111"/><text x="68" y="226" ' + font + ' font-size="15" fill="#fff">Leonidas St /</text><text x="68" y="242" ' + font + ' font-size="15" fill="#fff">Olive St</text>' +
      badge(246, 228, "32", R32) + '<text x="285" y="232" ' + font + ' font-size="9" fill="#cfd8e0">RTA BUS</text>',
      sky("nps1", "#1f3a5a", "#f3a978"));
  }

  /* 2. Hollygrove Market & Farm */
  function npfarm() {
    const bed = (x, y, w, c) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="16" fill="#8a5a36" stroke="#5e3c22" stroke-width="1.5"/>' +
      Array.from({ length: Math.floor(w / 14) }, (_, i) => '<ellipse cx="' + (x + 8 + i * 14) + '" cy="' + (y - 2) + '" rx="6" ry="5" fill="' + c + '"/>').join("") + '</g>';
    const flower = (x, base, h, d) => '<g class="np-sw' + (d ? " np-sw2" : "") + '"><path d="M' + x + ' ' + base + 'v-' + h + '" stroke="#3f7a32" stroke-width="3"/><ellipse cx="' + (x + 5) + '" cy="' + (base - h * 0.5) + '" rx="6" ry="3" fill="#4f9a3e"/>' +
      Array.from({ length: 10 }, (_, i) => { const a = i * 36 * Math.PI / 180; return '<ellipse cx="' + (x + Math.cos(a) * 8).toFixed(1) + '" cy="' + (base - h + Math.sin(a) * 8).toFixed(1) + '" rx="4.5" ry="2.4" transform="rotate(' + (i * 36) + ' ' + (x + Math.cos(a) * 8).toFixed(1) + ' ' + (base - h + Math.sin(a) * 8).toFixed(1) + ')" fill="#f5c518"/>'; }).join("") +
      '<circle cx="' + x + '" cy="' + (base - h) + '" r="5" fill="#5a3a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nps2)"/>' + '<g class="np-cl">' + cloud(80, 34, 1.1) + '</g><g class="np-cl np-cl2">' + cloud(240, 26, .9) + '</g>' +
      '<rect x="0" y="120" width="400" height="140" fill="#6f9e4e"/>' +
      /* hoop house */
      '<path d="M18 132a62 52 0 0 1 124 0z" fill="#e9f3ee" opacity=".85" stroke="#b9cbc2" stroke-width="2"/>' + [40, 62, 84, 106, 128].map(x => '<path d="M' + x + ' 132V' + (90 + Math.abs(80 - x) * 0.5) + '" stroke="#c9d8d0" stroke-width="1.5"/>').join("") + '<rect x="18" y="130" width="124" height="4" fill="#9fb3a8"/>' +
      /* farm-stand shed */
      '<rect x="240" y="74" width="132" height="62" fill="#f1ead8"/><path d="M232 76l74 -28l74 28z" fill="#3d6e3a"/><rect x="250" y="96" width="112" height="16" fill="' + BLUE + '" opacity=".9"/>' +
      '<rect x="252" y="80" width="108" height="14" fill="#2b2b2b"/><text x="306" y="91" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">HOLLYGROVE MARKET &amp; FARM</text>' +
      '<rect x="296" y="112" width="20" height="24" fill="#6b4a2c"/><rect x="254" y="114" width="34" height="18" fill="#2a2f3a"/><rect x="324" y="114" width="34" height="18" fill="#2a2f3a"/>' +
      '<g><rect x="256" y="128" width="12" height="8" fill="#c0392b"/><rect x="270" y="128" width="12" height="8" fill="#e67e22"/><rect x="326" y="128" width="12" height="8" fill="#27ae60"/><rect x="340" y="128" width="12" height="8" fill="#8e44ad"/></g>' +
      bed(20, 168, 110, "#3f8f3a") + bed(150, 168, 110, "#5aa84a") + bed(20, 206, 110, "#2f7a2f") + bed(150, 206, 110, "#6bb85a") +
      '<g fill="#c0392b"><circle cx="164" cy="164" r="3"/><circle cx="192" cy="164" r="3"/><circle cx="220" cy="164" r="3"/></g>' +
      flower(290, 236, 70, 0) + flower(318, 236, 84, 1) + flower(346, 236, 64, 0) + flower(374, 236, 76, 1) +
      '<g class="np-bf"><g transform="translate(110 110)"><g class="np-wg"><path d="M0 0l-9 -7l-2 9zM0 0l9 -7l2 9z" fill="' + BLUE + '" stroke="#123" stroke-width=".8"/></g><path d="M0 -4v8" stroke="#123" stroke-width="1.5"/></g></g>',
      sky("nps2", "#7cc3ea", "#dff2f7"));
  }

  /* 3. Larry Gilbert Stadium at night */
  function npstadium() {
    const tower = (x) => '<g><rect x="' + (x - 2) + '" y="34" width="4" height="96" fill="#6b7480"/><rect x="' + (x - 16) + '" y="22" width="32" height="16" rx="2" fill="#2a2f38"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="np-gl' + (i % 2 ? " np-gl2" : "") + '" cx="' + (x - 12 + (i % 4) * 8) + '" cy="' + (27 + Math.floor(i / 4) * 7) + '" r="3" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 16) + ' 38L' + (x - 70) + ' 150H' + (x + 70) + 'L' + (x + 16) + ' 38z" fill="#fffbe0" opacity=".07"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nps3)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 60) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      tower(40) + tower(360) +
      /* grandstand: brick base + steel roof */
      '<path d="M70 132L110 96H290L330 132z" fill="#8a3b2a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (78 + i * 8) + ' ' + (125 - i * 7) + 'H' + (322 - i * 8) + '" stroke="#5e2618" stroke-width="2"/>').join("") +
      '<path d="M100 98L120 82H280L300 98z" fill="#4e5966"/><path d="M120 82V98M160 82V98M200 82V98M240 82V98M280 82V98" stroke="#2b333c" stroke-width="2"/>' +
      '<rect x="166" y="60" width="68" height="22" fill="#1b1f24" stroke="#4e5966" stroke-width="2"/><text x="200" y="70" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">LARRY GILBERT</text><text x="200" y="78" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">STADIUM</text>' +
      '<rect x="0" y="132" width="400" height="128" fill="#2f7d3a"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="132" width="25" height="128" fill="#2a7334"/>').join("") +
      '<path d="M200 252L120 192L200 150L280 192z" fill="#b5764a"/><path d="M200 240L140 196L200 166L260 196z" fill="#2f7d3a"/>' +
      '<g fill="#fff"><rect x="196" y="236" width="8" height="8" transform="rotate(45 200 240)"/><rect x="136" y="192" width="6" height="6"/><rect x="258" y="192" width="6" height="6"/><rect x="197" y="163" width="6" height="6"/></g>' +
      '<circle cx="200" cy="200" r="6" fill="#c4875a"/>' +
      '<path d="M0 132H400" stroke="#1e3d24" stroke-width="4"/>' +
      '<g class="np-ball"><circle cx="190" cy="232" r="4" fill="#fff"/><path d="M187 230q3 2 0 4M193 230q-3 2 0 4" stroke="#c0392b" stroke-width=".8" fill="none"/></g>' ,
      sky("nps3", "#0a1530", "#22355e"));
  }

  /* 4. McMain Secondary School on S Claiborne Av */
  function npschool() {
    const BRICK = "#e3cf9e", TRIM = "#c2a56a";
    const wins = (x0, n) => Array.from({ length: n }, (_, i) => [0, 1, 2].map(r => '<rect x="' + (x0 + i * 22) + '" y="' + (98 + r * 30) + '" width="14" height="20" fill="#3a4a5a" stroke="#f3ead2" stroke-width="1.5"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nps4)"/>' + '<g class="np-cl">' + cloud(70, 36, 1.1) + '</g><g class="np-cl np-cl2">' + cloud(260, 24, .9) + '</g>' +
      '<rect x="0" y="86" width="400" height="104" fill="' + BRICK + '"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (92 + i * 8) + 'h400" stroke="' + TRIM + '" stroke-opacity=".35"/>').join("") +
      '<rect x="0" y="82" width="400" height="6" fill="' + TRIM + '"/>' + wins(12, 6) + wins(262, 6) +
      /* Art Deco center tower */
      '<rect x="150" y="44" width="100" height="146" fill="#ead9ad"/><rect x="164" y="30" width="72" height="20" fill="#ead9ad"/><rect x="180" y="18" width="40" height="16" fill="#ead9ad"/>' +
      [158, 172, 186, 214, 228, 242].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="96" fill="' + TRIM + '"/>').join("") +
      '<rect x="190" y="56" width="20" height="60" fill="#3a4a5a" stroke="#f3ead2" stroke-width="1.5"/><path d="M190 76h20M190 96h20M200 56v60" stroke="#f3ead2"/>' +
      '<rect x="156" y="120" width="88" height="14" fill="#f3ead2"/><text x="200" y="131" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a2a" letter-spacing="1">ELEANOR McMAIN</text>' +
      '<path d="M178 190V154a22 18 0 0 1 44 0V190z" fill="#4a3424"/><path d="M200 136V190" stroke="#2a1a10" stroke-width="2"/>' +
      '<rect x="0" y="190" width="400" height="12" fill="#cfc6b4"/><rect x="0" y="202" width="400" height="58" fill="#6f9e4e"/><rect x="170" y="202" width="60" height="58" fill="#cfc6b4"/>' +
      '<rect x="98" y="120" width="3" height="82" fill="#8a8a8a"/><g class="np-flag"><rect x="101" y="122" width="34" height="20" fill="' + BLUE + '"/><rect x="101" y="132" width="34" height="10" fill="' + GREEN + '"/></g>' +
      '<g><ellipse cx="350" cy="190" rx="34" ry="14" fill="#2f5a34"/><rect x="346" y="190" width="8" height="14" fill="#4a3a2c"/></g>',
      sky("nps4", "#6fb2e3", "#e8f3fa"));
  }

  /* 5. Leonidas St and Olive St: the corner */
  function npcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#nps5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + (10 + (i * 23) % 50) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      /* skyline + Superdome */
      '<g fill="#22324a"><rect x="40" y="70" width="22" height="52"/><rect x="66" y="58" width="16" height="64"/><rect x="300" y="64" width="20" height="58"/><rect x="324" y="78" width="26" height="44"/></g>' +
      '<g class="np-gl"><path d="M120 122V100q80 -50 160 0V122z" fill="#dfe6ee"/><path d="M120 100q80 -50 160 0" fill="none" stroke="#fff" stroke-width="2"/>' + [140, 160, 180, 200, 220, 240, 260].map(x => '<path d="M' + x + ' ' + (x === 200 ? 81 : 96 - (40 - Math.abs(200 - x)) * 0.35) + 'V122" stroke="#b9c4d0" stroke-width="1"/>').join("") + '<rect x="120" y="112" width="160" height="10" fill="#c9d3dd"/></g>' +
      '<rect x="0" y="122" width="400" height="102" fill="#3a6b5c"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (136 + i * 16) + 'h400" stroke="#2f5a4d" stroke-width="1"/>').join("") +
      '<rect x="310" y="132" width="34" height="58" fill="#1f3a5a"/><rect x="314" y="136" width="12" height="50" fill="#2b5580"/><rect x="328" y="136" width="12" height="50" fill="#2b5580"/>' +
      tag("NESBY", 24, 194, 60, BLUE, -6) + tag("0017TH", 200, 168, 22, GREEN, -4) + tag("BEAUCOUP POWER", 120, 214, 17, GOLD, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(238, 94, 150, "Leonidas St") + sign(268, 120, 120, "Olive St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="np-gl" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="np-sp"><circle cx="150" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="np-sp np-sp2"><circle cx="156" cy="162" r="2" fill="' + GREEN + '" opacity=".6"/></g>' +
      '<circle class="np-bl" cx="71" cy="54" r="2" fill="#ff5a5a"/><circle class="np-bl np-bl2" cx="310" cy="60" r="2" fill="#ff5a5a"/>',
      sky("nps5", "#141f3e", "#3e5a8a"));
  }

  window.SCENES = { npstation: npstation, npfarm: npfarm, npstadium: npstadium, npschool: npschool, npcorner: npcorner };
})();
