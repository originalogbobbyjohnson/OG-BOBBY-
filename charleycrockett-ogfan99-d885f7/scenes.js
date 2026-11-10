/* charleycrockett scenes (Regions: Houston + Texas / Genres: country; San Benito, Rio Grande Valley TX). CSS classes prefixed ccx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ccxglow{0%,100%{opacity:.45}50%{opacity:1}}.ccx-glow{animation:ccxglow 2.4s ease-in-out infinite}.ccx-g2{animation-delay:-1.2s}' +
    '@keyframes ccxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.ccx-nt{animation:ccxnote 3.2s ease-out infinite}.ccx-nt2{animation-delay:-1.1s}.ccx-nt3{animation-delay:-2.2s}' +
    '@keyframes ccxsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ccx-sw{transform-box:fill-box;transform-origin:50% 100%;animation:ccxsway 3.4s ease-in-out infinite}.ccx-sw2{animation-delay:-1.7s}' +
    '@keyframes ccxcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.ccx-cl{animation:ccxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes ccxdrive{0%{transform:translateX(-140px)}100%{transform:translateX(460px)}}.ccx-car{animation:ccxdrive 7s linear infinite}' +
    '@keyframes ccxrail{0%{transform:translateX(420px)}100%{transform:translateX(-420px)}}.ccx-rail{animation:ccxrail 9s linear infinite}' +
    '@keyframes ccxripple{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.ccx-rip{animation:ccxripple 3s linear infinite}' +
    '@keyframes ccxcoin{0%{transform:translateY(-30px);opacity:0}30%{opacity:1}100%{transform:translateY(0);opacity:0}}.ccx-coin{animation:ccxcoin 2.2s ease-in infinite}.ccx-coin2{animation-delay:-1.1s}' +
    '@keyframes ccxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ccx-sp{animation:ccxspray 1.4s ease-out infinite}.ccx-sp2{animation-delay:.45s}' +
    '@keyframes ccxtwk{0%,100%{opacity:.2}50%{opacity:1}}.ccx-tw{animation:ccxtwk 1.8s ease-in-out infinite}.ccx-tw2{animation-delay:-.9s}' +
    '@keyframes ccxsqz{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.82)}}.ccx-sqz{transform-box:fill-box;transform-origin:50% 50%;animation:ccxsqz 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="ccx-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  /* a Rio Grande Valley palm: tall trunk, fronds that sway */
  const palm = (x, base, h, cls) => '<path d="M' + x + ' ' + base + 'q' + (h * 0.08) + ' -' + (h * 0.5) + ' ' + (h * 0.02) + ' -' + h + '" stroke="#6b4a2e" stroke-width="' + Math.max(3, h / 18) + '" fill="none"/>' +
    '<g transform="translate(' + (x + h * 0.02) + ' ' + (base - h) + ')"><g class="ccx-sw ' + (cls || "") + '">' +
    [-150, -110, -70, -30, 10, 50].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * h * 0.22).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * h * 0.22 - 6).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * h * 0.36).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * h * 0.36 + 10).toFixed(1) + '" stroke="#2f6b3a" stroke-width="' + Math.max(3, h / 16) + '" fill="none" stroke-linecap="round"/>').join("") + '<circle cx="0" cy="0" r="3" fill="#2f6b3a"/></g></g>';
  const brickWall = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; for (let yy = y, r = 0; yy < y + h; yy += 7, r++) for (let xx = x + (r % 2) * 8; xx < x + w; xx += 16) s += '<path d="M' + xx + ' ' + yy + 'v7" stroke="' + line + '" stroke-width=".6" opacity=".4"/>'; return s; };
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="17" fill="#111">' + n + '</text>';
  const hat = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-30 6q30 12 60 0q-4 8 -30 9q-26 -1 -30 -9z" fill="' + c + '"/><path d="M-16 6q-2 -18 6 -22q10 4 10 4q0 0 10 -4q8 4 6 22q-16 5 -32 0z" fill="' + c + '"/><path d="M-16 2q16 4 32 0" stroke="#3a2412" stroke-width="3"/></g>';
  const GOLD = "#e8b04a", RUST = "#c8553d", TURQ = "#4fa3a5", CREAM = "#f4ead6", SAND = "#d8b98a";

  /* 1. US 77 into the Valley: the green exit sign for San Benito, palms and sugar cane flats, a pickup rolling south */
  function ccxsign() {
    let palms = "";
    [[22, 176, 80], [62, 176, 62], [352, 176, 76], [384, 176, 58]].forEach((p, i) => palms += palm(p[0], p[1], p[2], i % 2 ? "ccx-sw2" : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#ccx1)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#fff2c8" opacity=".9"/>' +
      '<g class="ccx-cl"><ellipse cx="80" cy="34" rx="38" ry="9" fill="#fff" opacity=".55"/><ellipse cx="230" cy="22" rx="30" ry="7" fill="#fff" opacity=".45"/></g>' +
      '<rect x="0" y="146" width="400" height="30" fill="#8a9a52"/>' +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 2) + ' 176l3 -22" stroke="#6f8a3c" stroke-width="2"/>').join("") +
      palms +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a4e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* overhead green guide sign */
      '<rect x="128" y="102" width="6" height="74" fill="#9aa0a6"/><rect x="306" y="102" width="6" height="74" fill="#9aa0a6"/>' +
      '<rect x="112" y="18" width="216" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<rect x="270" y="8" width="54" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="297" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT</text>' +
      '<text x="220" y="56" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">San Benito</text>' +
      '<text x="220" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">BUSINESS 77 · DOWNTOWN</text>' +
      '<path d="M206 88h28l-6 -6M234 88l-6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      usShield(60, 96, "77") + '<rect x="56" y="144" width="48" height="14" fill="#fff" stroke="#111"/><text x="80" y="155" text-anchor="middle" ' + font + ' font-size="10" fill="#111">SOUTH</text><rect x="78" y="158" width="4" height="18" fill="#9aa0a6"/>' +
      /* pickup heading south */
      '<g class="ccx-car"><rect x="0" y="196" width="70" height="20" rx="3" fill="' + RUST + '"/><path d="M10 196l8 -14h22l6 14z" fill="' + RUST + '"/><path d="M20 194l5 -9h12l4 9z" fill="#bfe2f0"/><rect x="46" y="190" width="24" height="6" fill="#7a2e20"/><circle cx="16" cy="218" r="7" fill="#111"/><circle cx="56" cy="218" r="7" fill="#111"/><circle cx="16" cy="218" r="3" fill="#bbb"/><circle cx="56" cy="218" r="3" fill="#bbb"/>' + hat(58, 186, 0.35, "#2a1a0e") + '</g>',
      sky("ccx1", "#4f8fcf", "#f2d9a8"));
  }

  /* 2. Deep Ellum, Dallas: a brick wall of murals, his open guitar case with a $10 sign on the street corner, a DART train passing on the bridge */
  function ccxellum() {
    return svg(
      '<rect width="400" height="260" fill="url(#ccx2)"/>' +
      /* Dallas skyline far off */
      '<g fill="#3b3550"><rect x="20" y="70" width="26" height="70"/><rect x="50" y="50" width="20" height="90"/><rect x="74" y="80" width="30" height="60"/><rect x="300" y="60" width="24" height="80"/><rect x="328" y="76" width="34" height="64"/><rect x="366" y="54" width="22" height="86"/></g>' +
      '<rect x="166" y="70" width="4" height="70" fill="#3b3550"/><circle cx="168" cy="62" r="14" fill="#3b3550"/><g class="ccx-glow"><circle cx="160" cy="62" r="2" fill="' + GOLD + '"/><circle cx="168" cy="58" r="2" fill="' + GOLD + '"/><circle cx="176" cy="62" r="2" fill="' + GOLD + '"/><circle cx="168" cy="66" r="2" fill="' + GOLD + '"/></g>' +
      /* elevated rail bridge with a passing light-rail train */
      '<rect x="0" y="96" width="400" height="10" fill="#5a5560"/><rect x="40" y="106" width="8" height="34" fill="#5a5560"/><rect x="200" y="106" width="8" height="34" fill="#5a5560"/><rect x="350" y="106" width="8" height="34" fill="#5a5560"/>' +
      '<g class="ccx-rail"><rect x="0" y="74" width="150" height="22" rx="5" fill="#e8e6e0"/><rect x="0" y="88" width="150" height="4" fill="' + GOLD + '"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (8 + i * 20) + '" y="78" width="14" height="8" rx="1" fill="#2a3a4a"/>').join("") + '</g>' +
      /* brick building with murals */
      brickWall(0, 140, 400, 80, "#8a4a36", "#5a2a1e") +
      '<rect x="14" y="148" width="120" height="62" fill="#2a6a8a"/><path d="M14 210q30 -50 60 -20t60 -30v50z" fill="' + GOLD + '"/><circle cx="104" cy="164" r="10" fill="#f2e2a0"/><path d="M14 176q20 -10 40 0t40 0t40 0" stroke="' + RUST + '" stroke-width="4" fill="none"/>' +
      '<rect x="262" y="148" width="126" height="62" fill="#3a2a5a"/>' + note(290, 196, TURQ, "") + note(330, 190, GOLD, "ccx-nt2") + note(360, 198, RUST, "ccx-nt3") +
      '<text x="325" y="170" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="17" fill="#f4ead6">DEEP ELLUM</text>' +
      '<rect x="150" y="150" width="96" height="60" fill="#2a1a12"/><rect x="156" y="156" width="40" height="54" fill="#1a1210"/><rect x="200" y="156" width="40" height="30" fill="#f2c14e" opacity=".55" class="ccx-glow"/>' +
      /* sidewalk */
      '<rect x="0" y="220" width="400" height="40" fill="#9a948a"/><rect x="0" y="218" width="400" height="3" fill="#cfc8bc"/>' +
      /* open guitar case with coins and $10 sign, guitar standing beside */
      '<path d="M120 238q30 -16 70 -8q14 2 20 8q-6 8 -20 10q-40 6 -70 -10z" fill="#1a1210" stroke="#6b4a2e" stroke-width="2"/><path d="M128 238q28 -12 62 -6q10 2 14 6q-4 6 -14 7q-36 4 -62 -7z" fill="#7a1f2a"/>' +
      '<g class="ccx-coin"><circle cx="160" cy="236" r="3" fill="' + GOLD + '"/></g><g class="ccx-coin ccx-coin2"><circle cx="176" cy="238" r="3" fill="#cfd4d8"/></g>' +
      '<rect x="210" y="222" width="38" height="20" rx="2" fill="' + CREAM + '" stroke="#3a2412" stroke-width="1.5"/><text x="229" y="237" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2412">$10</text>' +
      '<g transform="rotate(-8 92 236)"><path d="M84 238q-12 -10 -4 -22q-6 -10 4 -16q10 -4 14 6q10 4 4 16q8 12 -6 18q-6 2 -12 -2z" fill="#c9883a" stroke="#5a3418" stroke-width="2"/><circle cx="90" cy="222" r="4" fill="#2a1a0e"/><rect x="88" y="168" width="4" height="40" fill="#4a2e18"/><rect x="85" y="162" width="10" height="10" rx="2" fill="#2a1a0e"/></g>' +
      hat(300, 236, 0.6, "#3a2412"),
      sky("ccx2", "#1d1838", "#c86a4a"));
  }

  /* 3. San Benito's music museum: the low tan cultural-heritage building with an accordion mural, a bajo sexto, palms out front */
  function ccxfender() {
    return svg(
      '<rect width="400" height="260" fill="url(#ccx3)"/>' +
      '<g class="ccx-cl"><ellipse cx="90" cy="30" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="44" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      palm(30, 200, 120, "") + palm(370, 200, 110, "ccx-sw2") +
      '<rect x="60" y="96" width="280" height="104" fill="' + SAND + '"/><rect x="54" y="88" width="292" height="12" fill="#b8956a"/>' +
      '<rect x="60" y="100" width="280" height="6" fill="' + RUST + '"/>' +
      '<text x="200" y="124" text-anchor="middle" ' + font + ' font-size="12" fill="#5a3418" letter-spacing="2">CULTURAL HERITAGE MUSEUM</text>' +
      /* accordion mural */
      '<rect x="80" y="132" width="150" height="54" rx="4" fill="#24507a"/>' +
      '<g class="ccx-sqz"><rect x="118" y="140" width="22" height="38" rx="2" fill="' + RUST + '" stroke="#fff" stroke-width="1"/><path d="M142 140v38M148 140v38M154 140v38M160 140v38M166 140v38" stroke="#f4ead6" stroke-width="2"/><rect x="168" y="140" width="22" height="38" rx="2" fill="' + RUST + '" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="124" cy="148" r="2" fill="#fff"/><circle cx="132" cy="148" r="2" fill="#fff"/><circle cx="124" cy="158" r="2" fill="#fff"/><circle cx="132" cy="158" r="2" fill="#fff"/><circle cx="124" cy="168" r="2" fill="#fff"/><circle cx="132" cy="168" r="2" fill="#fff"/>' +
      '<rect x="174" y="144" width="10" height="30" fill="#f4ead6"/><path d="M174 150h10M174 156h10M174 162h10M174 168h10" stroke="#111" stroke-width="1"/></g>' +
      note(96, 172, GOLD, "") + note(210, 168, "#fff", "ccx-nt2") +
      /* doors */
      '<rect x="252" y="132" width="64" height="68" fill="#5a3418"/><path d="M284 132v68" stroke="#3a2412" stroke-width="2"/><circle cx="279" cy="168" r="2" fill="' + GOLD + '"/><circle cx="289" cy="168" r="2" fill="' + GOLD + '"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c8b48a"/><rect x="0" y="198" width="400" height="4" fill="#e8dcc0"/>' +
      '<path d="M0 230h400" stroke="#b09a70" stroke-width="2"/>' +
      /* bajo sexto leaning on a bench */
      '<rect x="110" y="220" width="80" height="6" fill="#6b4a2e"/><rect x="116" y="226" width="4" height="14" fill="#6b4a2e"/><rect x="180" y="226" width="4" height="14" fill="#6b4a2e"/>' +
      '<g transform="rotate(14 210 236)"><path d="M200 246q-14 -12 -4 -26q-4 -12 8 -16q12 -2 14 10q10 6 4 18q8 14 -8 18q-8 2 -14 -4z" fill="#d89a4a" stroke="#5a3418" stroke-width="2"/><circle cx="208" cy="226" r="4" fill="#2a1a0e"/><rect x="206" y="168" width="4" height="40" fill="#4a2e18"/></g>',
      sky("ccx3", "#3f86c8", "#f8e2b0"));
  }

  /* 4. The Waco Suspension Bridge over the Brazos (The Man from Waco): red-brick castle towers, the cables, the river rolling, longhorns on the bank */
  function ccxwaco() {
    const tower = (x) => '<rect x="' + x + '" y="70" width="44" height="120" fill="#9a4a32"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + x + ' ' + (76 + i * 7) + 'h44" stroke="#6a2a1e" stroke-width=".8" opacity=".6"/>').join("") +
      '<path d="M' + x + ' 70v-10h8v6h6v-6h8v6h6v-6h8v6h6v-6h2v10z" fill="#9a4a32"/><path d="M' + (x + 12) + ' 190v-46q10 -14 20 0v46z" fill="#3a2a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ccx4)"/>' +
      '<circle cx="330" cy="50" r="18" fill="#ffd27a" opacity=".9"/>' +
      '<g class="ccx-cl"><ellipse cx="90" cy="36" rx="40" ry="9" fill="#fff" opacity=".5"/></g>' +
      /* river */
      '<rect x="0" y="176" width="400" height="84" fill="#6a7a5a"/><rect x="0" y="190" width="400" height="44" fill="#5a7a8a"/>' +
      '<g class="ccx-rip"><path d="M0 200h40M70 210h50M150 198h40M230 214h60M320 202h40M380 212h50" stroke="#a8c8d0" stroke-width="1.5" opacity=".7"/></g>' +
      /* cables and deck */
      '<path d="M0 120q30 40 66 -50M110 70q90 110 180 0M334 70q30 80 66 50" stroke="#2a2a2e" stroke-width="3" fill="none"/>' +
      Array.from({ length: 22 }, (_, i) => { const x = 116 + i * 8; const t = (x - 110) / 180; const y = 70 + 4 * 55 * t * (1 - t); return '<path d="M' + x + ' ' + y.toFixed(1) + 'V176" stroke="#2a2a2e" stroke-width="1"/>'; }).join("") +
      '<rect x="0" y="174" width="400" height="8" fill="#5a4a3a"/><path d="M0 172h400" stroke="#8a7a6a" stroke-width="2"/>' +
      tower(66) + tower(290) +
      /* longhorns on the near bank */
      '<rect x="0" y="234" width="400" height="26" fill="#7a8a4a"/>' +
      [[60, "#8a5a30"], [150, "#c8a070"], [300, "#5a3a20"]].map(c => '<g class="ccx-sw"><ellipse cx="' + c[0] + '" cy="236" rx="16" ry="8" fill="' + c[1] + '"/><rect x="' + (c[0] - 12) + '" y="240" width="3" height="12" fill="' + c[1] + '"/><rect x="' + (c[0] + 9) + '" y="240" width="3" height="12" fill="' + c[1] + '"/><circle cx="' + (c[0] + 18) + '" cy="232" r="5" fill="' + c[1] + '"/><path d="M' + (c[0] + 4) + ' 226q14 4 28 0" stroke="#f2ead8" stroke-width="2.5" fill="none"/></g>').join("") +
      note(200, 120, GOLD, "") + note(250, 110, "#fff", "ccx-nt2"),
      sky("ccx4", "#e8905a", "#f8d8a0"));
  }

  /* 5. His corner in San Benito: Sam Houston Blvd and Robertson St, a stucco wall tagged CROCKETT, the resaca, palms and the water tower behind */
  function ccxcorner() {
    let palms = "";
    [[40, 150, 70], [110, 150, 56], [300, 150, 64], [348, 150, 50]].forEach((p, i) => palms += palm(p[0], p[1], p[2], i % 2 ? "ccx-sw2" : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#ccx5)"/>' +
      '<circle cx="80" cy="60" r="22" fill="#ffcf7a" opacity=".85"/>' +
      /* water tower */
      '<rect x="196" y="60" width="3" height="80" fill="#8a8f96"/><rect x="236" y="60" width="3" height="80" fill="#8a8f96"/><path d="M198 100l40 30M238 100l-40 30" stroke="#8a8f96" stroke-width="1.5"/>' +
      '<ellipse cx="217" cy="48" rx="30" ry="22" fill="#cfd6dc"/><path d="M187 48q30 10 60 0" stroke="#9aa4ac" stroke-width="2" fill="none"/><path d="M200 28l17 -12l17 12z" fill="#b8c2ca"/>' +
      '<text x="217" y="54" text-anchor="middle" ' + font + ' font-size="9" fill="#24507a">SAN BENITO</text>' +
      /* resaca */
      '<rect x="0" y="140" width="400" height="22" fill="#3d7f86"/><g class="ccx-rip"><path d="M0 148h30M60 154h40M140 146h30M210 156h50M290 148h30M350 154h40M410 150h30" stroke="#a8dbe0" stroke-width="1.5" opacity=".7"/></g>' +
      palms +
      /* stucco wall with tags */
      '<rect x="0" y="162" width="400" height="60" fill="#e0c9a4"/><rect x="0" y="158" width="400" height="6" fill="' + RUST + '"/>' +
      '<path d="M0 182q40 4 80 -2t90 4t100 -3t130 2" stroke="#cdb48c" stroke-width="2" fill="none" opacity=".7"/>' +
      tag("CROCKETT", 16, 208, 32, RUST, -5) + tag("$10 COWBOY", 196, 196, 17, TURQ, -4) + tag("RGV", 214, 216, 15, GOLD, -3) +
      '<g class="ccx-sp"><circle cx="160" cy="190" r="3" fill="' + RUST + '" opacity=".7"/></g><g class="ccx-sp ccx-sp2"><circle cx="166" cy="184" r="2" fill="' + RUST + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="66" width="6" height="156" fill="#2f2f2f"/>' + sign(270, 66, 124, "SAM HOUSTON BLVD") + sign(286, 92, 108, "ROBERTSON ST"),
      sky("ccx5", "#24305a", "#e88a5a"));
  }

  window.SCENES = { ccxsign: ccxsign, ccxellum: ccxellum, ccxfender: ccxfender, ccxwaco: ccxwaco, ccxcorner: ccxcorner };
})();
