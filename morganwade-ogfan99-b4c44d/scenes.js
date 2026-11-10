/* morganwade scenes (Regions: Virginia / Genres: country; Floyd, Virginia + Roanoke). CSS classes prefixed mwd- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f0c25a", RED = "#d8483a", TEAL = "#5aa0b4", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes mwdglow{0%,100%{opacity:.45}50%{opacity:1}}.mwd-glow{animation:mwdglow 2.4s ease-in-out infinite}.mwd-g2{animation-delay:-1.2s}' +
    '@keyframes mwdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.mwd-nt{animation:mwdnote 3.2s ease-out infinite}.mwd-nt2{animation-delay:-1.1s}.mwd-nt3{animation-delay:-2.2s}' +
    '@keyframes mwdcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.mwd-cl{animation:mwdcloud 14s ease-in-out infinite alternate}' +
    '@keyframes mwdhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.mwd-hop{animation:mwdhop .5s ease-in-out infinite}.mwd-h2{animation-delay:-.25s}' +
    '@keyframes mwdblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.mwd-blink{animation:mwdblink 1.6s steps(1) infinite}' +
    '@keyframes mwdlight{0%,40%{opacity:1}41%,100%{opacity:.18}}.mwd-red{animation:mwdlight 4s steps(1) infinite}.mwd-grn{animation:mwdlight 4s steps(1) infinite;animation-delay:-2s}' +
    '@keyframes mwdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mwd-sp{animation:mwdspray 1.4s ease-out infinite}.mwd-sp2{animation-delay:.45s}' +
    '@keyframes mwdtwk{0%,100%{opacity:.2}50%{opacity:1}}.mwd-tw{animation:mwdtwk 1.8s ease-in-out infinite}.mwd-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="mwd-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const star5 = (x, y, r, c, cls, sw) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + (sw ? "none" : c) + '"' + (sw ? ' stroke="' + c + '" stroke-width="' + sw + '" stroke-linejoin="round"' : '') + ' class="' + (cls || "") + '"/>'; };
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  /* Blue Ridge layers */
  const ridges = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -40 110 -22t100 -26t110 18t80 -14v' + (H - y + 40) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 20) + 'q70 -28 140 -6t130 -16t130 10v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  /* Buffalo Mountain: the long rounded bald summit that sits over Floyd County */
  const buffalo = (y, c) => '<path d="M0 ' + (y + 40) + 'L60 ' + (y + 30) + 'Q120 ' + (y + 22) + ' 150 ' + (y + 4) + 'Q178 ' + (y - 14) + ' 214 ' + (y - 12) + 'Q252 ' + (y - 10) + ' 270 ' + (y + 12) + 'Q300 ' + (y + 30) + ' 400 ' + (y + 34) + 'V' + H + 'H0z" fill="' + c + '"/>';
  /* the Roanoke Star on Mill Mountain */
  const roanokeStar = (x, y, r, glow) => '<g>' + (glow ? '<g opacity=".22"><circle cx="' + x + '" cy="' + y + '" r="' + (r * 1.5) + '" fill="#fff6d0" class="mwd-glow"/></g>' : '') +
    '<path d="M' + (x - r * .9) + ' ' + (y + r * 1.25) + 'L' + x + ' ' + (y + r * .2) + 'L' + (x + r * .9) + ' ' + (y + r * 1.25) + '" stroke="#6a7078" stroke-width="' + (r * .08) + '" fill="none"/>' +
    star5(x, y, r, "#ffffff", glow ? "mwd-glow" : "", r * .16) + star5(x, y, r * .62, "#ffffff", glow ? "mwd-glow mwd-g2" : "", r * .12) + star5(x, y, r * .3, "#ffffff", "", r * .1) + '</g>';

  function mwdstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#mwd1)"/>' +
      '<g class="mwd-cl"><ellipse cx="80" cy="30" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="42" ry="9" fill="#fff" opacity=".5"/></g>' +
      ridges(92, "#6a8aa0", "#4f7a5c") + roanokeStar(362, 74, 10, false) +
      /* the station: red brick and glass under a long steel canopy */
      bricks(20, 92, 150, 70, "#9a4a36", "#5a2418") +
      '<rect x="176" y="96" width="210" height="66" fill="#bfd8e4" opacity=".7"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (176 + i * 26) + '" y="96" width="3" height="66" fill="#3a4a56"/>').join("") +
      '<path d="M14 92h380l-8 -10h-364z" fill="#cfd4d8" stroke="#5a6068" stroke-width="1.5"/>' +
      /* black station sign */
      '<rect x="40" y="18" width="270" height="52" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="190" y="42" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Third Street Station</text>' +
      '<text x="190" y="61" text-anchor="middle" ' + font + ' font-size="9.5" fill="#cfd6dc" letter-spacing="1">SALEM AVE + 3RD ST SW · ROANOKE</text>' +
      '<rect x="50" y="28" width="28" height="16" rx="8" fill="#0b5fa5" stroke="#fff" stroke-width="1.2"/><text x="64" y="40" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">VM</text>' +
      '<rect x="0" y="162" width="400" height="16" fill="#b8b2a6"/><rect x="0" y="176" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3e4146"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the Valley Metro bus pulls in */
      '<g class="anim-train"><rect x="40" y="168" width="250" height="56" rx="10" fill="#f4f4f2" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="40" y="200" width="250" height="8" fill="#0b5fa5"/><rect x="40" y="208" width="250" height="4" fill="#3aa04a"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 30) + '" y="176" width="24" height="20" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="262" y="176" width="24" height="34" rx="3" fill="#2a3a4a"/><rect x="250" y="170" width="38" height="5" fill="#111"/><text x="269" y="174.5" text-anchor="middle" ' + font + ' font-size="4.5" fill="' + GOLD + '">3RD STREET</text>' +
      '<circle cx="80" cy="226" r="11" fill="#111"/><circle cx="80" cy="226" r="4" fill="#888"/><circle cx="246" cy="226" r="11" fill="#111"/><circle cx="246" cy="226" r="4" fill="#888"/>' +
      '<rect x="284" y="212" width="6" height="5" fill="#ffe8a0" class="mwd-glow"/></g>',
      sky("mwd1", "#78acd8", "#f0e2c8"));
  }

  function mwdstore() {
    /* the Country Store on Locust St, Friday night jamboree: dancers flatfooting in the lit windows */
    const dancer = (x, cls) => '<g class="mwd-hop ' + cls + '" fill="#2a1a12"><circle cx="' + x + '" cy="128" r="5"/><path d="M' + (x - 6) + ' 134h12l2 20h-16z"/><rect x="' + (x - 5) + '" y="154" width="3.5" height="12"/><rect x="' + (x + 1.5) + '" y="154" width="3.5" height="12"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mwd2)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 29) + '" cy="' + (12 + (i * 17) % 44) + '" r="1.2" fill="#fff" class="mwd-tw' + (i % 2 ? " mwd-tw2" : "") + '"/>').join("") +
      ridges(90, "#26304a", "#1c2a24") +
      /* two-story storefront */
      '<rect x="60" y="62" width="280" height="150" fill="#ece6d8" stroke="#6a5a44" stroke-width="2"/>' +
      '<path d="M54 62h292v-10h-292z" fill="#6a2a20"/>' +
      '<rect x="92" y="70" width="216" height="26" fill="#6a2a20"/><text x="200" y="88" text-anchor="middle" ' + font + ' font-size="15" fill="' + CREAM + '" letter-spacing="2">COUNTRY STORE</text>' +
      '<path d="M60 104h280v8h-280z" fill="#2f5a3a"/>' +
      '<rect x="74" y="116" width="104" height="58" fill="#ffd98a" class="mwd-glow"/><rect x="222" y="116" width="104" height="58" fill="#ffd98a" class="mwd-glow mwd-g2"/>' +
      dancer(98, "") + dancer(126, "mwd-h2") + dancer(154, "") + dancer(246, "mwd-h2") + dancer(274, "") + dancer(302, "mwd-h2") +
      '<rect x="74" y="116" width="104" height="58" fill="none" stroke="#6a5a44" stroke-width="3"/><rect x="222" y="116" width="104" height="58" fill="none" stroke="#6a5a44" stroke-width="3"/>' +
      '<rect x="186" y="122" width="28" height="90" fill="#3a2a1e"/><circle cx="208" cy="168" r="2" fill="' + GOLD + '"/>' +
      '<rect x="60" y="180" width="280" height="32" fill="#d8cfbc"/>' +
      '<rect x="96" y="184" width="208" height="20" rx="3" fill="#2f5a3a"/><text x="200" y="198" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1.5">FRIDAY NIGHT JAMBOREE</text>' +
      note(110, 60, GOLD, "") + note(200, 50, CREAM, "mwd-nt2") + note(290, 58, GOLD, "mwd-nt3") +
      '<rect x="0" y="212" width="400" height="48" fill="#4c4a46"/><rect x="0" y="210" width="400" height="4" fill="#d8d0c0"/>' +
      '<rect x="30" y="196" width="4" height="40" fill="#2a2a2a"/><circle cx="32" cy="194" r="7" fill="#ffe8a0" class="mwd-glow"/><rect x="366" y="196" width="4" height="40" fill="#2a2a2a"/><circle cx="368" cy="194" r="7" fill="#ffe8a0" class="mwd-glow mwd-g2"/>',
      sky("mwd2", "#0f1430", "#3a3050"));
  }

  function mwdroadhouse() {
    /* Dogtown Roadhouse, Floyd: where she played her first show ever. Rustic wood, string lights, stage glow */
    let bulbs = "";
    for (let i = 0; i < 15; i++) { const x = 70 + i * 18, y = 92 + Math.sin(i / 14 * Math.PI) * 10; bulbs += '<circle cx="' + x + '" cy="' + y.toFixed(1) + '" r="2.6" fill="' + (i % 3 ? GOLD : RED) + '" class="mwd-glow' + (i % 2 ? " mwd-g2" : "") + '"/>'; }
    let boards = ""; for (let x = 64; x < 336; x += 12) boards += '<path d="M' + x + ' 96v116" stroke="#3a2414" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mwd3)"/>' +
      buffalo(70, "#2c3a40") + '<path d="M0 150q100 -18 200 -6t200 -8v114h-400z" fill="#24331f"/>' +
      '<path d="M50 96L200 52L350 96z" fill="#4a2a1a" stroke="#2a160c" stroke-width="2"/>' +
      '<rect x="58" y="96" width="284" height="116" fill="#7a4a2a"/>' + boards +
      '<path d="M70 92q130 22 252 0" stroke="#2a2a2a" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="128" y="62" width="144" height="24" rx="3" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="79" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">DOGTOWN</text>' +
      '<rect x="84" y="118" width="70" height="46" fill="#ffcf7a" class="mwd-glow"/><rect x="246" y="118" width="70" height="46" fill="#ffcf7a" class="mwd-glow mwd-g2"/>' +
      '<path d="M84 141h70M119 118v46M246 141h70M281 118v46" stroke="#3a2414" stroke-width="3"/>' +
      '<rect x="176" y="126" width="48" height="86" fill="#2a1a10"/><rect x="180" y="130" width="40" height="30" fill="' + RED + '" opacity=".5" class="mwd-glow"/>' +
      '<rect x="40" y="208" width="320" height="10" fill="#5a3a20"/>' +
      note(170, 120, GOLD, "") + note(222, 116, CREAM, "mwd-nt2") +
      '<rect x="0" y="218" width="400" height="42" fill="#3a3632"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 66) + '" y="236" width="30" height="4" fill="#d8d0c0" opacity=".5"/>').join(""),
      sky("mwd3", "#1a1e3a", "#c4704a"));
  }

  function mwdstar() {
    /* the Roanoke Star on Mill Mountain over the city lights */
    let lights = "";
    for (let i = 0; i < 40; i++) lights += '<rect x="' + ((i * 37) % 396) + '" y="' + (196 + (i * 13) % 50) + '" width="3" height="3" fill="' + (i % 4 ? "#ffd98a" : "#fff") + '" class="mwd-tw' + (i % 2 ? " mwd-tw2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mwd4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (10 + i * 22) + '" cy="' + (10 + (i * 23) % 70) + '" r="1.1" fill="#fff" class="mwd-tw' + (i % 2 ? " mwd-tw2" : "") + '"/>').join("") +
      '<path d="M0 190Q80 150 160 132Q200 124 240 132Q320 150 400 186V260H0z" fill="#16241c"/>' +
      roanokeStar(200, 70, 46, true) +
      '<path d="M0 196Q100 186 200 194T400 192V260H0z" fill="#0e1418"/>' + lights +
      '<g fill="#0a0e12"><rect x="40" y="176" width="22" height="30"/><rect x="66" y="166" width="16" height="40"/><rect x="300" y="170" width="26" height="36"/><rect x="330" y="160" width="14" height="46"/></g>',
      sky("mwd4", "#070b1e", "#24305a"));
  }

  function mwdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mwd5)"/>' +
      '<circle cx="70" cy="44" r="16" fill="#ffe0a0" opacity=".9"/>' +
      '<g class="mwd-cl"><ellipse cx="300" cy="34" rx="40" ry="8" fill="#fff" opacity=".45"/></g>' +
      buffalo(80, "#4a6a5a") +
      '<path d="M0 132q120 -14 240 -4t160 -6v30h-400z" fill="#3e5a3a"/>' +
      bricks(0, 146, 400, 74, "#8a4a34", "#4a2418") +
      '<rect x="0" y="142" width="400" height="5" fill="#d8d0c0"/>' +
      tag("MORGAN WADE", 14, 190, 28, GOLD, -5) + tag("FLOYD COUNTY", 26, 212, 13, CREAM, -3) + tag("RECKLESS", 170, 212, 13, RED, -4) + tag("WILD CHILD", 236, 186, 12, TEAL, -6) +
      '<g class="mwd-sp"><circle cx="232" cy="196" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mwd-sp mwd-sp2"><circle cx="238" cy="190" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4c4a46"/><rect x="0" y="218" width="400" height="4" fill="#e8e4dc"/>' +
      /* the town stoplight on its wire */
      '<path d="M150 8Q200 22 250 8" stroke="#222" stroke-width="1.5" fill="none"/><rect x="190" y="14" width="20" height="50" rx="4" fill="#d8b02a" stroke="#222" stroke-width="1.5"/>' +
      '<circle cx="200" cy="24" r="5.5" fill="#ff3a2a" class="mwd-red"/><circle cx="200" cy="39" r="5.5" fill="#5a4a10"/><circle cx="200" cy="54" r="5.5" fill="#3aff6a" class="mwd-grn"/>' +
      '<rect x="344" y="62" width="6" height="158" fill="#2f2f2f"/>' + sign(290, 62, 108, "MAIN ST") + sign(298, 88, 100, "LOCUST ST"),
      sky("mwd5", "#5a8ac4", "#f0c49a"));
  }

  window.SCENES = { mwdstation: mwdstation, mwdstore: mwdstore, mwdroadhouse: mwdroadhouse, mwdstar: mwdstar, mwdcorner: mwdcorner };
})();
