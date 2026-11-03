/* nottz producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const GOLD = "#e8b03a", TEAL = "#1fa3a3", NAVY = "#123a6b", RED = "#d8432f", TIDE = "#0b5fa5";
  const water = (y, c1, c2) => { let s = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>'; for (let i = 0; i < 7; i++) s += '<path class="bob' + (i % 2 ? "" : "") + '" d="M' + (i * 60 - 10) + ' ' + (y + 12 + (i % 3) * 14) + 'q15 -5 30 0t30 0" stroke="' + c2 + '" stroke-width="2" fill="none" opacity=".7"/>'; return s; };
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (((r * 7 + c * 3) % 5) < 2 ? lit : dark) + '"/>'; return s; };
  const gull = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f2f2f2" stroke-width="2" fill="none"/>';

  /* 1. The Tide light rail pulling into MacArthur Square, downtown Norfolk */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="98" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      '<rect x="0" y="66" width="400" height="3" fill="#2b2b2b"/><path d="M0 68h400" stroke="#555" stroke-width="1"/>' +
      '<rect x="20" y="14" width="250" height="40" rx="4" fill="#111"/><rect x="20" y="14" width="250" height="4" fill="#fff"/>' +
      '<text x="32" y="42" ' + font + ' font-size="16" fill="#fff">MacArthur Square</text>' +
      '<rect x="206" y="24" width="54" height="22" rx="11" fill="' + TIDE + '"/><text x="233" y="40" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">TIDE</text>' +
      '<rect x="300" y="20" width="4" height="120" fill="#4a4d52"/><path d="M300 22h80" stroke="#4a4d52" stroke-width="3"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="60" rx="14" fill="#eef0f2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="128" width="300" height="8" fill="' + TIDE + '"/><rect x="10" y="138" width="300" height="3" fill="' + TEAL + '"/>' + win +
        '<path d="M150 88l18 -20M190 88l-18 -20" stroke="#333" stroke-width="2"/>' +
        '<circle cx="300" cy="140" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="150" width="400" height="10" fill="#eab308"/><rect x="0" y="160" width="400" height="34" fill="#8a8c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#2a2c32"/>' +
      tag("NOTTZ", 40, 240, 38, GOLD, -5) + tag("RAW", 250, 236, 30, TEAL, -7),
      sky("s1", "#0e1838", "#7a4a6a"));
  }

  /* 2. The bedroom studio: SP-1200 style sampler, ASR keyboard, four-track, record spinning */
  function lab() {
    let eq = ""; for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (292 + i * 10) + '" y="56" width="7" height="40" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    let keys = ""; for (let i = 0; i < 18; i++) keys += '<rect x="' + (214 + i * 9) + '" y="196" width="8" height="34" fill="#f4f4f0" stroke="#999" stroke-width=".6"/>';
    for (let i = 0; i < 18; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (220 + i * 9) + '" y="196" width="5" height="20" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a22"/>' +
      '<rect x="0" y="0" width="400" height="160" fill="#2b2f3d"/>' +
      '<rect x="30" y="24" width="120" height="86" fill="#0f1a2e" stroke="#555" stroke-width="3"/><circle cx="60" cy="50" r="10" fill="#fffbe6" opacity=".85"/>' +
      '<path d="M30 92l40-24 30 16 50-30v56H30z" fill="#163a5a"/>' +
      '<rect x="280" y="46" width="66" height="58" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<rect x="0" y="160" width="400" height="100" fill="#5a3e2b"/><rect x="0" y="160" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="16" y="172" width="180" height="76" rx="4" fill="#9a9ea4" stroke="#4a4d52" stroke-width="2"/><rect x="24" y="178" width="72" height="14" fill="#1f3a26"/>' +
      '<text x="28" y="189" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">DURTE LOOP 01</text>' +
      pads(104, 200, GOLD, RED) + '<rect x="24" y="200" width="70" height="40" rx="3" fill="#7d8187"/><text x="59" y="224" text-anchor="middle" ' + font + ' font-size="10" fill="#222">SP-12</text>' +
      '<rect x="206" y="176" width="178" height="60" rx="4" fill="#2a2a2e"/>' + keys +
      '<rect x="210" y="180" width="44" height="12" fill="#163b5c"/><text x="214" y="190" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#9fd7ff">ASR</text>' +
      '<g class="vn"><circle cx="210" cy="96" r="36" fill="#0b0b0b"/><circle cx="210" cy="96" r="26" fill="none" stroke="#2a2a2a"/><circle cx="210" cy="96" r="12" fill="' + GOLD + '"/><rect x="208" y="86" width="4" height="6" fill="#fff"/></g>');
  }

  /* 3. The battleship at Nauticus on the Elizabeth River, gulls over the water */
  function battleship() {
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#ffd27a" opacity=".9"/>' +
      '<g class="car">' + gull(40, 50) + gull(70, 36) + '</g>' +
      '<rect x="0" y="150" width="400" height="12" fill="#6b6f74"/>' +
      '<path d="M18 150l14 30h336l14-30z" fill="#7d858e" stroke="#4d545b" stroke-width="2"/>' +
      '<rect x="40" y="132" width="320" height="18" fill="#8b939c"/>' +
      '<rect x="150" y="96" width="90" height="36" fill="#8b939c" stroke="#5b636b" stroke-width="2"/><rect x="170" y="70" width="44" height="26" fill="#8b939c" stroke="#5b636b" stroke-width="2"/>' +
      '<rect x="188" y="40" width="8" height="30" fill="#5b636b"/><path d="M180 50h24M184 44h16" stroke="#5b636b" stroke-width="2"/>' +
      '<rect x="252" y="104" width="22" height="28" fill="#6b737c"/><rect x="118" y="104" width="22" height="28" fill="#6b737c"/>' +
      '<rect x="60" y="120" width="40" height="12" rx="3" fill="#6b737c"/><path d="M60 124h-36M60 128h-36" stroke="#5b636b" stroke-width="4"/>' +
      '<rect x="290" y="120" width="40" height="12" rx="3" fill="#6b737c"/><path d="M330 124h36M330 128h36" stroke="#5b636b" stroke-width="4"/>' +
      '<text x="200" y="170" text-anchor="middle" ' + font + ' font-size="14" fill="#f2f2f2">64</text>' +
      water(180, "#1f4f6e", "#8fc8e6") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".85" letter-spacing="3">ELIZABETH RIVER, NORFOLK</text>',
      sky("s3", "#2a3f7a", "#f0a060"));
  }

  /* 4. The Scope arena dome at night, its ribs lit, crowd lights flashing */
  function scope() {
    let ribs = ""; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10, x = 200 - Math.cos(a) * 150, y = 150 - Math.sin(a) * 70; ribs += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'L' + (200 - Math.cos(a) * 176).toFixed(1) + ' 172" stroke="#cfc8b8" stroke-width="6"/>'; }
    let lights = ""; for (let i = 0; i < 8; i++) lights += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (60 + i * 40) + '" cy="196" r="4" fill="' + [GOLD, TEAL, RED, "#fff"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(16) +
      '<path d="M50 150a150 70 0 0 1 300 0z" fill="#e6dfcf" stroke="#b9b09c" stroke-width="2"/>' +
      '<path d="M90 150a110 46 0 0 1 220 0" fill="none" stroke="#c9c1ad" stroke-width="2"/>' + ribs +
      '<rect x="24" y="170" width="352" height="12" fill="#b9b09c"/>' +
      '<rect x="110" y="150" width="180" height="20" fill="#2a2c34"/><text class="flk" x="200" y="165" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="4">SCOPE  TONIGHT</text>' +
      '<rect x="0" y="182" width="400" height="78" fill="#33363d"/>' + lights +
      '<rect x="0" y="214" width="400" height="4" fill="#eab308" opacity=".6"/>' +
      '<g class="car"><rect x="0" y="226" width="40" height="14" rx="4" fill="' + TEAL + '"/><circle cx="8" cy="240" r="4" fill="#111"/><circle cx="32" cy="240" r="4" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="230" width="40" height="14" rx="4" fill="' + RED + '"/><circle cx="8" cy="244" r="4" fill="#111"/><circle cx="32" cy="244" r="4" fill="#111"/></g>',
      sky("s4", "#0b0f2a", "#3d2a5a"));
  }

  /* 5. The corner: Church St and Brambleton Av, NOTTZ tag, downtown Norfolk towers on the river behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(8) +
      '<rect x="40" y="70" width="40" height="80" fill="#3a4a63"/><rect x="92" y="40" width="46" height="110" fill="#46597a"/><path d="M92 40l23 -22 23 22z" fill="#46597a"/>' +
      '<rect x="150" y="60" width="36" height="90" fill="#3a4a63"/><rect x="196" y="30" width="44" height="120" fill="#52678c"/><path d="M196 30h44l-6 -12h-32z" fill="' + TEAL + '"/>' +
      '<rect x="250" y="76" width="50" height="74" fill="#3a4a63"/>' +
      windows(96, 50, 4, 8, 10, 12, 5, 6, "#ffe08a", "#2c3a52") + windows(200, 42, 4, 9, 10, 12, 5, 6, "#ffe08a", "#3a4a6a") +
      brick(0, 140, 400, 84, "#7e4430", "#62331f") +
      tag("NOTTZ", 26, 202, 46, GOLD, -5) + tag("RAW KONCEPT", 176, 216, 20, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(286, 44, 104, "Church St") + sign(270, 70, 120, "Brambleton Av") +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#4a3a6a"));
  }

  window.SCENES = { station: station, lab: lab, battleship: battleship, scope: scope, corner: corner };
})();
