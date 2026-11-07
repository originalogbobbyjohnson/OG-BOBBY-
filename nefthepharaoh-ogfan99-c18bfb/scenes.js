/* nefthepharaoh scenes (Regions tab: The Bay Area; South Vallejo). CSS classes prefixed nf- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.nf-flk{animation:nfflick 2.6s infinite}.nf-flk2{animation-delay:.9s}' +
    '@keyframes nfglow{0%,100%{opacity:.45}50%{opacity:1}}.nf-glow{animation:nfglow 2.2s ease-in-out infinite}.nf-g2{animation-delay:-1.1s}' +
    '@keyframes nfcarR{0%{transform:translateX(-140px)}100%{transform:translateX(560px)}}.nf-cr{animation:nfcarR 4.5s linear infinite}.nf-cr2{animation-delay:-2.2s}' +
    '@keyframes nfcarL{0%{transform:translateX(560px)}100%{transform:translateX(-140px)}}.nf-cl{animation:nfcarL 5.2s linear infinite}.nf-cl2{animation-delay:-2.6s}' +
    '@keyframes nfchase{0%,100%{opacity:1}50%{opacity:.2}}.nf-ch{animation:nfchase .6s steps(1) infinite}.nf-ch2{animation-delay:-.3s}' +
    '@keyframes nfsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.nf-sw{transform-box:fill-box;transform-origin:50% 100%;animation:nfsway 3s ease-in-out infinite}.nf-sw2{animation-delay:-1.5s}' +
    '@keyframes nfwave{0%{transform:translateX(0)}100%{transform:translateX(-50px)}}.nf-wv{animation:nfwave 5s linear infinite}' +
    '@keyframes nfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nf-sp{animation:nfspray 1.4s ease-out infinite}.nf-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, ink) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "nf-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s, k) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -50 4 -96" stroke="#5a4232" stroke-width="5" fill="none"/><g transform="translate(4 -96)"><g class="nf-sw' + (k ? " nf-sw2" : "") + '">' +
    [-70, -30, 10, 50, 90, 130, 170, 210].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * 18).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 18 - 8).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 34).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 34 + 6).toFixed(1) + '" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';
  const BLUE = "#4d8dff", GOLD = "#f6c445", PINK = "#ff5d73", YEL = "#f5c400", REDL = "#d7262e", R3 = "#2c7be5";

  /* 1. SolTrans Curtola Park & Ride, Curtola Pkwy and Lemon St, South Vallejo: the bus bays under the canopies, the parking garage behind, the black sign with the Yellow Line, Red Line and Route 3 badges, a SolTrans bus pulling in */
  function nfstation() {
    const bus = '<g class="anim-train"><rect x="28" y="134" width="252" height="72" rx="9" fill="#f4f4f2" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (72 + i * 40) + '" y="146" width="34" height="28" rx="3" fill="#22303c"/>').join("") +
      '<rect x="34" y="146" width="30" height="54" rx="2" fill="#22303c"/><rect x="28" y="180" width="252" height="7" fill="' + R3 + '"/><rect x="28" y="188" width="252" height="3" fill="' + YEL + '"/>' +
      '<rect x="32" y="136" width="92" height="10" rx="2" fill="#111"/><text x="78" y="144" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">3  CURTOLA P&amp;R</text>' +
      '<circle cx="74" cy="206" r="12" fill="#222"/><circle cx="74" cy="206" r="5" fill="#9aa1a8"/><circle cx="236" cy="206" r="12" fill="#222"/><circle cx="236" cy="206" r="5" fill="#9aa1a8"/><circle cx="32" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nf1)"/>' +
      '<path d="M0 96q60 -40 130 -20q70 -30 140 -6q70 -26 130 4V120H0z" fill="#b8a77a"/>' +
      /* parking garage */
      '<rect x="40" y="70" width="230" height="56" fill="#cfc8bc"/>' + [84, 100, 116].map(y => '<rect x="40" y="' + y + '" width="230" height="4" fill="#a8a094"/>').join("") +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (48 + i * 25) + '" y="72" width="4" height="54" fill="#b8b0a4"/>').join("") +
      /* canopy */
      '<path d="M0 108h400v10H0z" fill="#3a6aa8"/><path d="M0 118h400v4H0z" fill="#24487a"/>' +
      [30, 140, 250, 360].map(x => '<rect x="' + (x - 3) + '" y="120" width="6" height="90" fill="#5a6470"/>').join("") +
      [70, 190, 310].map((x, i) => '<rect class="nf-flk' + (i === 1 ? " nf-flk2" : "") + '" x="' + x + '" y="122" width="44" height="3" rx="1.5" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="206" width="400" height="8" fill="#d8d2c4"/><rect x="0" y="214" width="400" height="46" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      '<rect x="300" y="132" width="5" height="78" fill="#2f2f2f"/><rect x="218" y="12" width="176" height="76" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      '<text x="228" y="32" ' + font + ' font-size="12.5" fill="#fff">Curtola Park &amp; Ride</text><text x="228" y="46" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#c9ced6">Curtola Pkwy &amp; Lemon St</text>' +
      badge(240, 70, "Y", YEL, "#111") + badge(266, 70, "R", REDL) + badge(292, 70, "3", R3),
      sky("nf1", "#7fb6e8", "#f6dcb4"));
  }

  /* 2. Harbor Park on Porter St, the South Vallejo apartments where he grew up: two-story stucco buildings with outside stairs, palms, a kid's scooter, the sun going down */
  function nfharbor() {
    const bld = (x, c) => '<rect x="' + x + '" y="92" width="150" height="96" fill="' + c + '"/><rect x="' + (x - 6) + '" y="86" width="162" height="8" fill="#8a6a4a"/>' +
      '<rect x="' + x + '" y="136" width="150" height="5" fill="#6a5a4a"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 36) + '" y="102" width="22" height="22" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/><rect x="' + (x + 12 + i * 36) + '" y="150" width="22" height="22" fill="' + (i % 3 ? "#2a3442" : "#ffd98a") + '"/>').join("") +
      '<path d="M' + (x + 150) + ' 188l26 -48h8l-26 48z" fill="#6a5a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nf2)"/><circle class="nf-glow" cx="330" cy="70" r="26" fill="#ffcf7a"/>' +
      bld(20, "#e6cfa8") + bld(220, "#d9bf96") +
      palm(196, 190, 1, 0) + palm(386, 196, .9, 1) +
      '<rect x="0" y="188" width="400" height="14" fill="#c9c2b4"/><rect x="0" y="202" width="400" height="58" fill="#55555a"/>' +
      /* scooter */
      '<g transform="translate(120 200)"><circle cx="0" cy="10" r="6" fill="#222"/><circle cx="34" cy="10" r="6" fill="#222"/><path d="M0 10h34M34 10l-6 -32h-8" stroke="' + BLUE + '" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>' +
      '<rect x="250" y="214" width="120" height="24" rx="3" fill="#111" opacity=".75"/><text x="310" y="230.5" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HARBOR PARK</text>',
      sky("nf2", "#e88a6a", "#ffd9a8"));
  }

  /* 3. Interstate 80 east out of Vallejo, the road he took every day to high school in Sacramento: the green overhead sign, the shields, traffic flowing both ways */
  function nfi80() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h28v6q0 22 -14 28q-14 -6 -14 -28z" fill="#1f4aa8" stroke="#fff" stroke-width="2"/><path d="M' + x + ' ' + y + 'h28v8h-28z" fill="#c8262e"/>' +
      '<text x="' + (x + 14) + '" y="' + (y + 26) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">80</text>';
    const car = (c, y, cls) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="60" height="18" rx="6" fill="' + c + '"/><rect x="12" y="' + (y - 9) + '" width="34" height="12" rx="4" fill="' + c + '"/><circle cx="14" cy="' + (y + 18) + '" r="5" fill="#111"/><circle cx="46" cy="' + (y + 18) + '" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nf3)"/>' +
      '<path d="M0 132q100 -40 200 -14q100 -30 200 0V150H0z" fill="#9aa86a"/>' +
      /* gantry and sign */
      '<rect x="40" y="30" width="8" height="120" fill="#7a8088"/><rect x="352" y="30" width="8" height="120" fill="#7a8088"/><rect x="40" y="30" width="320" height="8" fill="#7a8088"/>' +
      '<rect x="96" y="40" width="208" height="70" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(110, 50) +
      '<text x="148" y="66" ' + font + ' font-size="13" fill="#fff">EAST</text><text x="148" y="90" ' + font + ' font-size="20" fill="#fff">Sacramento</text>' +
      '<path d="M288 100v-24M280 84l8 -8l8 8" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#4a4a50"/><path d="M0 200h400" stroke="#f2c200" stroke-width="4"/><path d="M0 176h400M0 226h400" stroke="#fff" stroke-width="3" stroke-dasharray="20 16"/>' +
      car(BLUE, 160, "nf-cr") + car(GOLD, 186, "nf-cr nf-cr2") + car("#e8e4dc", 210, "nf-cl") + car(PINK, 234, "nf-cl nf-cl2"),
      sky("nf3", "#9cc8ee", "#eaf2f6"));
  }

  /* 4. The Empress Theatre downtown on Virginia St: the tall vertical blade sign, the marquee with the chasing bulbs, show night */
  function nfempress() {
    const bulbs = (x0, y0, n, dx, dy) => Array.from({ length: n }, (_, i) => '<circle class="nf-ch' + (i % 2 ? " nf-ch2" : "") + '" cx="' + (x0 + i * dx) + '" cy="' + (y0 + i * dy) + '" r="2.4" fill="#fff2b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nf4)"/>' + stars(16) +
      '<rect x="0" y="80" width="90" height="140" fill="#2a2440"/><rect x="310" y="90" width="90" height="130" fill="#2a2440"/>' +
      /* facade */
      '<rect x="100" y="50" width="200" height="170" fill="#c9a77a"/><rect x="96" y="44" width="208" height="10" fill="#a8865a"/>' +
      [124, 176, 228].map(x => '<path d="M' + x + ' 104v-30q12 -14 24 0v30z" fill="#3a2a40"/>').join("") +
      /* blade sign */
      '<rect x="186" y="6" width="28" height="96" rx="3" fill="#7a1f3a" stroke="' + GOLD + '" stroke-width="2"/>' +
      ["E", "M", "P", "R", "E", "S", "S"].map((ch, i) => '<text x="200" y="' + (22 + i * 12.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff2b0" class="nf-glow' + (i % 2 ? " nf-g2" : "") + '">' + ch + '</text>').join("") +
      /* marquee */
      '<path d="M90 120h220l-12 36H102z" fill="#1a1420" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs(96, 116, 23, 9.5, 0) +
      '<rect x="110" y="126" width="180" height="24" fill="#f2ead8"/><text x="200" y="143" text-anchor="middle" ' + font + ' font-size="14" fill="#1a1420" letter-spacing="1">HEAR YEE HEAR YEE</text>' +
      '<rect x="150" y="166" width="100" height="54" fill="#2a1c24"/>' + [150, 176, 202, 228].map(x => '<rect x="' + (x + 3) + '" y="170" width="20" height="50" fill="#5a3a2a"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a40"/><rect x="0" y="218" width="400" height="4" fill="#d8d2c4"/>' +
      '<g opacity=".95">' + Array.from({ length: 11 }, (_, i) => '<g class="nf-sw' + (i % 2 ? " nf-sw2" : "") + '"><circle cx="' + (20 + i * 36) + '" cy="236" r="7" fill="#08060c"/><rect x="' + (12 + i * 36) + '" y="242" width="16" height="20" rx="5" fill="#08060c"/></g>').join("") + '</g>',
      sky("nf4", "#120a2a", "#4a2a6a"));
  }

  /* 5. Porter St and Magazine St, South Vallejo: green signs, NEF tagged big on the wall, the Carquinez Strait and the hills glowing at dusk behind */
  function nfcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#nf5)"/>' + stars(10) +
      '<path d="M0 96q70 -36 150 -16q80 -28 150 -6q60 -18 100 0V124H0z" fill="#5a4a6a"/>' +
      '<rect x="0" y="112" width="400" height="24" fill="#3a5a8a"/><g class="nf-wv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (120 + (i % 2) * 8) + 'q8 -3 16 0" stroke="#9ac0e8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      palm(30, 140, .5, 0) + palm(368, 140, .55, 1) +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#d8b896"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 136v90" stroke="#c4a482" stroke-width="2"/>').join("") +
      tag("NEF", 20, 206, 70, BLUE, -6) + tag("KILFMB", 150, 170, 26, GOLD, -4) + tag("HEAR YEE", 150, 210, 22, "#fff", -3) + tag("NEFFY", 256, 166, 20, PINK, -5) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="94" width="6" height="132" fill="#2f2f2f"/>' + sign(306, 96, 86, "Porter St") + sign(294, 122, 106, "Magazine St") +
      '<g class="nf-sp"><circle cx="128" cy="166" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="nf-sp nf-sp2"><circle cx="134" cy="160" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("nf5", "#1c1440", "#e8865a"));
  }

  window.SCENES = { nfstation: nfstation, nfharbor: nfharbor, nfi80: nfi80, nfempress: nfempress, nfcorner: nfcorner };
})();
