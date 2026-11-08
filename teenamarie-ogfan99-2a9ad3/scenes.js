/* teenamarie scenes (Regions tab: Los Angeles + SoCal; GENRES: R&B). Born in Santa Monica, raised in Oakwood, Venice. CSS classes prefixed tm- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmglow{0%,100%{opacity:.45}50%{opacity:1}}.tm-glow{animation:tmglow 2.4s ease-in-out infinite}.tm-g2{animation-delay:-1.2s}' +
    '@keyframes tmspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.tm-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:tmspin 18s linear infinite}' +
    '@keyframes tmpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tm-palm{transform-box:fill-box;transform-origin:50% 100%;animation:tmpalm 3.2s ease-in-out infinite}.tm-p2{animation-delay:-1.6s}' +
    '@keyframes tmcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.tm-car{animation:tmcar 7s linear infinite}.tm-car2{animation-delay:-3.5s}' +
    '@keyframes tmskate{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.tm-sk{animation:tmskate 6s linear infinite}.tm-sk2{animation-delay:-3s}' +
    '@keyframes tmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.tm-wave{animation:tmwave 3s ease-in-out infinite}.tm-w2{animation-delay:-1.5s}' +
    '@keyframes tmnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}.tm-nt{animation:tmnote 3.4s ease-out infinite}.tm-nt2{animation-delay:-1.1s}.tm-nt3{animation-delay:-2.3s}' +
    '@keyframes tmcoast{0%{transform:translateX(0)}50%{transform:translateX(70px)}100%{transform:translateX(0)}}.tm-coast{animation:tmcoast 5s ease-in-out infinite}' +
    '@keyframes tmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tm-sp{animation:tmspray 1.4s ease-out infinite}.tm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="tm-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, base, h, cls) => '<g class="tm-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#3a2a1e" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-20, 8], [24, -8], [22, 8], [0, -16]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#1f4a2a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const GOLD = "#f2c14e", IVORY = "#fbf3e4", ROSE = "#ff7a8a", SEA = "#4fc3c8", BBLUE = "#0067b1";

  /* 1. Big Blue Bus Route 3 pulling up on Lincoln Blvd at Rose Ave, the edge of Oakwood: the blue bus, the bus-stop pole with the 3 badge, the black stop sign */
  function tmstation() {
    let win = "";
    for (let x = 52; x < 262; x += 30) win += '<rect x="' + x + '" y="134" width="24" height="22" rx="2" fill="#1d2a3a"/><rect x="' + (x + 3) + '" y="136" width="5" height="18" fill="#fff" opacity=".3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm1)"/>' +
      '<path d="M0 120l40 -20l50 14l60 -26l70 18l60 -22l70 20l50 -10v40h-400z" fill="#7d6a8a" opacity=".55"/>' +
      '<rect x="0" y="112" width="140" height="80" fill="#e9d9c0"/><rect x="0" y="112" width="140" height="10" fill="#c96f4a"/>' + [12, 52, 92].map(x => '<rect x="' + x + '" y="132" width="28" height="30" fill="#3a4a5a"/>').join("") +
      '<rect x="300" y="104" width="100" height="88" fill="#f1e6d2"/><rect x="300" y="104" width="100" height="8" fill="#5a8f9a"/>' + [312, 352].map(x => '<rect x="' + x + '" y="124" width="28" height="34" fill="#3a4a5a"/>').join("") +
      palm(150, 188, 92) + palm(286, 188, 80, "tm-p2") +
      '<g class="anim-train"><rect x="36" y="122" width="250" height="66" rx="10" fill="' + BBLUE + '" stroke="#0b2a4a" stroke-width="2"/><rect x="36" y="166" width="250" height="10" fill="#e9eef2"/>' + win +
      '<rect x="264" y="132" width="20" height="40" rx="2" fill="#1d2a3a"/><rect x="236" y="125" width="44" height="7" rx="1" fill="#111"/><text x="258" y="131" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">3 LINCOLN</text>' +
      '<circle cx="76" cy="190" r="10" fill="#222"/><circle cx="76" cy="190" r="4" fill="#888"/><circle cx="244" cy="190" r="10" fill="#222"/><circle cx="244" cy="190" r="4" fill="#888"/><circle cx="282" cy="178" r="3" fill="#fff6c2"/></g>' +
      '<rect x="40" y="18" width="320" height="52" rx="3" fill="#111"/><text x="56" y="41" ' + font + ' font-size="16" fill="#fff">Lincoln Blvd / Rose Ave</text><text x="56" y="60" ' + font + ' font-size="11" fill="#ddd">Oakwood, Venice</text>' +
      '<circle cx="332" cy="44" r="15" fill="' + BBLUE + '" stroke="#fff" stroke-width="2"/><text x="332" y="50" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">3</text>' +
      '<rect x="330" y="96" width="4" height="102" fill="#9aa0a6"/><rect x="316" y="96" width="32" height="26" rx="3" fill="' + BBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="332" y="114" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">3</text>' +
      '<rect x="0" y="198" width="400" height="62" fill="#4a4a50"/><rect x="0" y="196" width="400" height="4" fill="#c9c4b8"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="228" width="30" height="4" fill="#e8d36a" opacity=".7"/>').join("") +
      '<g class="tm-car"><rect x="0" y="236" width="38" height="12" rx="4" fill="' + ROSE + '"/><circle cx="9" cy="249" r="3" fill="#222"/><circle cx="29" cy="249" r="3" fill="#222"/></g>',
      sky("tm1", "#2b2457", "#f08a5d"));
  }

  /* 2. Venice High School: the cream PWA-moderne main building, tall palms, the long lawn and reflecting pool out front, a blue-and-gold banner */
  function tmhigh() {
    let win = "";
    for (let x = 70; x < 330; x += 22) win += '<rect x="' + x + '" y="112" width="12" height="20" fill="#3a5068"/><rect x="' + x + '" y="144" width="12" height="20" fill="#3a5068"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm2)"/>' +
      '<circle cx="330" cy="50" r="20" fill="#fff3c4" opacity=".9"/>' +
      '<rect x="56" y="98" width="288" height="78" fill="#efe4cf"/><rect x="56" y="98" width="288" height="6" fill="#d6c6a6"/>' + win +
      '<rect x="168" y="64" width="64" height="112" fill="#f5ecd9"/><rect x="168" y="64" width="64" height="6" fill="#d6c6a6"/>' + [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="78" width="6" height="64" fill="#d9ccb0"/>').join("") +
      '<rect x="184" y="146" width="32" height="30" fill="#5a3a22"/><rect x="199" y="146" width="2" height="30" fill="#2a1a10"/>' +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="8" fill="#6a5a40">VENICE HIGH</text>' +
      '<g class="tm-glow"><rect x="96" y="60" width="2" height="38" fill="#777"/><path d="M98 60h26v16h-26z" fill="#1d3f8a"/><path d="M98 66h26" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      '<g class="tm-glow tm-g2"><rect x="302" y="60" width="2" height="38" fill="#777"/><path d="M304 60h26v16h-26z" fill="' + GOLD + '"/><path d="M304 66h26" stroke="#1d3f8a" stroke-width="3"/></g>' +
      palm(40, 190, 120) + palm(366, 190, 110, "tm-p2") + palm(140, 186, 70) + palm(262, 186, 74, "tm-p2") +
      '<rect x="0" y="176" width="400" height="84" fill="#5d9a4a"/><rect x="120" y="196" width="160" height="26" rx="13" fill="#7fc6d9" stroke="#d6c6a6" stroke-width="3"/>' +
      '<path class="tm-wave" d="M136 209q8 -4 16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/>' +
      '<rect x="190" y="222" width="20" height="38" fill="#c9bfae"/>' +
      note(80, 160, GOLD) + note(330, 156, IVORY, "tm-nt2") + note(110, 150, ROSE, "tm-nt3"),
      sky("tm2", "#5bb6e8", "#cfe9f5"));
  }

  /* 3. Santa Monica Pier, where she was born: the pier on its pilings, the turning Ferris wheel and the red coaster at sunset over the Pacific */
  function tmpier() {
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<line x1="0" y1="0" x2="' + (52 * Math.cos(a)).toFixed(1) + '" y2="' + (52 * Math.sin(a)).toFixed(1) + '" stroke="#ffd36e" stroke-width="1.5"/>'; }).join("");
    const cars = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const c = ["#ff4f6d", "#4fc3c8", "#f2c14e", "#9b6bff"][i % 4]; return '<rect x="' + (52 * Math.cos(a) - 5).toFixed(1) + '" y="' + (52 * Math.sin(a) - 4).toFixed(1) + '" width="10" height="8" rx="2" fill="' + c + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tm3)"/>' +
      '<circle cx="80" cy="150" r="30" fill="#ffcf6b" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f5f86"/>' +
      '<path class="tm-wave" d="M0 190q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fd6e8" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path class="tm-wave tm-w2" d="M0 220q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fd6e8" stroke-width="2" fill="none" opacity=".5"/>' +
      '<rect x="120" y="150" width="280" height="10" fill="#7a5a3a"/>' + Array.from({ length: 15 }, (_, i) => '<rect x="' + (126 + i * 18) + '" y="160" width="4" height="56" fill="#5a3f28"/>').join("") +
      '<g transform="translate(240 92)"><g class="tm-wheel"><circle r="52" fill="none" stroke="#ffd36e" stroke-width="3"/><circle r="40" fill="none" stroke="#ff7a8a" stroke-width="1.5"/>' + spokes + cars + '</g><circle r="5" fill="#fff"/></g>' +
      '<path d="M220 150l20 -58l20 58" stroke="#d8d0c0" stroke-width="4" fill="none"/>' +
      '<path d="M296 150v-30q14 -30 30 -20q16 10 26 -16q10 -22 30 0v66" stroke="#d63a3a" stroke-width="3" fill="none"/>' + [306, 326, 346, 366, 386].map(x => '<rect x="' + x + '" y="118" width="2" height="32" fill="#a82a2a"/>').join("") +
      '<g class="tm-coast"><rect x="300" y="110" width="18" height="8" rx="2" fill="' + GOLD + '"/></g>' +
      '<rect x="140" y="130" width="60" height="20" fill="#e8d9b8"/><path d="M136 130l34 -12l34 12z" fill="#4fa0a8"/>' +
      palm(128, 150, 46) + palm(372, 150, 40, "tm-p2"),
      sky("tm3", "#3d2a6b", "#ff9a6b"));
  }

  /* 4. The Venice Beach boardwalk: roller skaters gliding past, the outdoor gym on the sand, the bike path, the Pacific behind */
  function tmboardwalk() {
    const skater = (c, cls) => '<g class="tm-sk ' + cls + '"><circle cx="20" cy="150" r="6" fill="#6a4a3a"/><rect x="15" y="157" width="10" height="20" rx="3" fill="' + c + '"/><path d="M17 177l-6 14M23 177l6 14" stroke="#2a2a3a" stroke-width="4"/><path d="M15 160l-10 8M25 160l10 -6" stroke="#6a4a3a" stroke-width="3"/><rect x="4" y="191" width="12" height="4" rx="2" fill="#fff"/><rect x="24" y="191" width="12" height="4" rx="2" fill="#fff"/><circle cx="7" cy="197" r="2" fill="' + GOLD + '"/><circle cx="33" cy="197" r="2" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tm4)"/>' +
      '<rect x="0" y="96" width="400" height="30" fill="#3f7fa6"/><path class="tm-wave" d="M0 110q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe4f0" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="126" width="400" height="40" fill="#e9d6a8"/>' +
      '<g transform="translate(240 104)"><rect x="0" y="0" width="5" height="44" fill="#6a6f76"/><rect x="70" y="0" width="5" height="44" fill="#6a6f76"/><rect x="0" y="0" width="75" height="5" fill="#6a6f76"/>' +
      '<path d="M18 5v14M32 5v14M46 5v14" stroke="#aaa" stroke-width="1.5"/><circle cx="18" cy="22" r="4" fill="none" stroke="#bbb" stroke-width="2"/><circle cx="32" cy="22" r="4" fill="none" stroke="#bbb" stroke-width="2"/><circle cx="46" cy="22" r="4" fill="none" stroke="#bbb" stroke-width="2"/>' +
      '<rect x="20" y="36" width="36" height="4" fill="#444"/><circle cx="18" cy="38" r="6" fill="#333"/><circle cx="58" cy="38" r="6" fill="#333"/></g>' +
      palm(40, 166, 110) + palm(110, 166, 90, "tm-p2") + palm(360, 166, 100) +
      '<rect x="0" y="166" width="400" height="44" fill="#b9b2a6"/><rect x="0" y="166" width="400" height="3" fill="#d8d2c6"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5d5f66"/><path d="M0 235h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="14 10"/>' +
      skater(ROSE, "") + skater(SEA, "tm-sk2") +
      '<rect x="292" y="176" width="70" height="24" rx="3" fill="#2a2a3a"/><text x="327" y="192" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BOARDWALK</text>' +
      note(150, 150, GOLD) + note(200, 140, IVORY, "tm-nt2"),
      sky("tm4", "#7cc8ee", "#ffe2b8"));
  }

  /* 5. Her corner: California Ave and Electric Ave in Oakwood, LADY T tagged on a stucco wall, palms and the Santa Monica Mountains glowing behind */
  function tmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tm5)"/>' +
      '<path d="M0 120l50 -34l40 18l60 -42l50 26l40 -20l60 30l50 -22l50 26v40h-400z" fill="#6a4f7a"/><path d="M0 132l70 -22l60 14l80 -26l70 20l60 -12l60 16v30h-400z" fill="#4a3a5e"/>' +
      palm(30, 160, 120) + palm(370, 160, 130, "tm-p2") +
      '<rect x="40" y="120" width="320" height="100" fill="#f0c9a0"/><rect x="40" y="120" width="320" height="8" fill="#c97a5a"/>' +
      tag("LADY T", 60, 180, 42, ROSE, -7) + tag("TEENA MARIE", 70, 212, 22, GOLD, -3) + tag("OAKWOOD", 222, 168, 22, SEA, -5) +
      '<g class="tm-sp"><circle cx="300" cy="170" r="3" fill="' + ROSE + '"/></g><g class="tm-sp tm-sp2"><circle cx="306" cy="162" r="2.5" fill="' + GOLD + '"/></g>' +
      '<rect x="338" y="70" width="5" height="150" fill="#7a7f86"/>' + sign(286, 48, 104, "California Av") + sign(296, 72, 86, "Electric Av") +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4a50"/><rect x="0" y="218" width="400" height="4" fill="#c9c4b8"/>' +
      '<g class="tm-car tm-car2"><rect x="0" y="234" width="40" height="13" rx="4" fill="' + SEA + '"/><circle cx="10" cy="248" r="3" fill="#222"/><circle cx="30" cy="248" r="3" fill="#222"/></g>',
      sky("tm5", "#2a1f4f", "#ff9f7a"));
  }

  window.SCENES = { tmstation, tmhigh, tmpier, tmboardwalk, tmcorner };
})();
