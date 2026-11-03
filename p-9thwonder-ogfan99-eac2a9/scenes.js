/* 9th Wonder producer game: Durham, NC. Durham Station, NC Central, the laptop studio, the tobacco campus, the corner. 400 x 260 SVGs. Every 9 is drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-80px)}}.wv{animation:wave 2s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", RED = "#e2483d", BLUE = "#4fb3d9", ORANGE = "#ff6319", BRICK = "#9a4a34", BRICK2 = "#7c3a29";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* Queensboro Bridge: cantilever towers + truss, light gray-tan steel */
  const GLD = "#e8b04a", MAR = "#b5263b", SKY = "#7fb7e0";
  /* a 9 drawn by hand: round head + a straight vertical stem (never a hooked, G-looking 9) */
  const nine = (x, y, h, fill, sw) => { const r = h * 0.27, cx = x + r + sw / 2, cy = y - h + r + sw / 2;
    return '<g fill="none" stroke="' + fill + '" stroke-width="' + sw + '" stroke-linecap="square"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><path d="M' + (cx + r) + ' ' + cy + 'V' + (y - sw / 2) + '"/></g>'; };
  /* graffiti 9TH WONDER: the 9 is drawn (black outline + color), the rest is the tag font */
  const tag9 = (rest, x, y, size, fill, rot) => '<g transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')">' +
    nine(x, y, size * 0.72, "#000", size * 0.2) + nine(x, y, size * 0.72, fill, size * 0.11) +
    '<text x="' + (x + size * 0.48) + '" y="' + y + '" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size + '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + rest + '</text></g>';
  const pines = (y, col) => { let s = ""; for (let x = 0; x < 420; x += 26) { const h = 30 + (x * 7) % 22; s += '<path d="M' + x + ' ' + y + 'l13-' + h + ' 13 ' + h + 'z" fill="' + col + '"/>'; } return s; };

  /* 1. The Piedmont train pulling into Durham's station, brick depot, pines */
  function station() {
    let win = ""; for (let x = 24; x < 290; x += 40) win += '<rect x="' + x + '" y="128" width="28" height="18" rx="3" fill="#cfe6f5"/>';
    return svg('<rect width="400" height="260" fill="url(#s1)"/>' + pines(150, "#1f3a2a") +
      '<rect x="60" y="90" width="290" height="60" fill="#8e3b2a"/><path d="M50 92l20-18h270l20 18z" fill="#3a3a3a"/>' +
      (() => { let b = ""; for (let y = 98; y < 150; y += 7) b += '<path d="M60 ' + y + 'h290" stroke="#74301f" stroke-width="1"/>'; return b; })() +
      '<rect x="20" y="18" width="190" height="34" rx="4" fill="#111"/><rect x="20" y="18" width="190" height="4" fill="#fff"/><text x="34" y="42" ' + font + ' font-size="16" fill="#fff">Durham Station</text>' +
      '<g class="anim-train"><rect x="8" y="118" width="300" height="56" rx="6" fill="#c9ced6" stroke="#4b5563" stroke-width="2"/>' +
      '<rect x="8" y="150" width="300" height="7" fill="#1d3f8f"/><rect x="8" y="158" width="300" height="3" fill="' + MAR + '"/>' + win +
      '<circle cx="300" cy="166" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="174" width="400" height="8" fill="#eab308"/><rect x="0" y="182" width="400" height="78" fill="#2f2b2e"/>' +
      '<rect x="40" y="196" width="130" height="26" rx="3" fill="#111"/><text x="105" y="214" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">PIEDMONT</text>' +
      tag9("TH", 250, 242, 34, GLD, -5), sky("s1", "#16213e", "#e07a5f"));
  }

  /* 2. NC Central University: red brick, white columns, maroon banners waving, students' music bouncing */
  function nccu() {
    let cols = ""; for (let i = 0; i < 6; i++) cols += '<rect x="' + (128 + i * 30) + '" y="104" width="12" height="80" fill="#f3efe6"/>';
    let wins = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) { wins += '<rect x="' + (24 + c * 22) + '" y="' + (96 + r * 40) + '" width="12" height="20" fill="#2c2430"/>'; wins += '<rect x="' + (298 + c * 22) + '" y="' + (96 + r * 40) + '" width="12" height="20" fill="#2c2430"/>'; }
    return svg('<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="14" y="84" width="102" height="110" fill="#9a3b2a"/><rect x="288" y="84" width="102" height="110" fill="#9a3b2a"/>' + wins +
      '<rect x="116" y="70" width="172" height="124" fill="#a5432f"/><path d="M110 74l92-40 92 40z" fill="#f3efe6"/><path d="M130 70l72-30 72 30z" fill="#a5432f"/>' +
      '<rect x="116" y="96" width="172" height="8" fill="#f3efe6"/>' + cols +
      '<rect x="186" y="150" width="32" height="44" fill="#3a2a20"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3f7a3a"/><path d="M160 194l-30 66h144l-30-66z" fill="#c9b79a"/>' +
      '<g class="bl"><rect x="60" y="40" width="3" height="60" fill="#333"/><path d="M63 42h34l-6 12 6 12h-34z" fill="' + MAR + '"/><text x="76" y="59" ' + font + ' font-size="10" fill="#fff">NCCU</text></g>' +
      '<g class="bl bl3"><rect x="336" y="40" width="3" height="60" fill="#333"/><path d="M339 42h34l-6 12 6 12h-34z" fill="#9aa0a6"/><text x="346" y="59" ' + font + ' font-size="9" fill="#222">EAGLES</text></g>' +
      '<g class="mt"><rect x="30" y="210" width="8" height="30" fill="' + GLD + '"/></g><g class="mt mt2"><rect x="42" y="210" width="8" height="30" fill="' + MAR + '"/></g><g class="mt mt3"><rect x="54" y="210" width="8" height="30" fill="' + GLD + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3" opacity=".85">DURHAM, NC</text>',
      sky("s2", "#7fb7e0", "#f6d6a8"));
  }

  /* 3. The laptop studio: step sequencer pattern lighting up, soul record spinning, headphones */
  function laptop() {
    let grid = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 12; c++) {
      const on = ((r * 5 + c * 3) % 7) < 2;
      grid += '<rect class="' + (on ? "pd p" + (c % 8 + 1) : "") + '" x="' + (96 + c * 17) + '" y="' + (52 + r * 14) + '" width="14" height="11" rx="2" fill="' + (on ? [GLD, MAR, SKY, GLD, MAR][r] : "#2b3442") + '"/>';
    }
    return svg('<rect width="400" height="260" fill="#1a1520"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a3e2b"/><rect x="0" y="180" width="400" height="6" fill="#6e4c34"/>' +
      '<path d="M80 30h240v130H80z" fill="#16181d" stroke="#5c6068" stroke-width="5"/>' +
      '<rect x="88" y="38" width="224" height="114" fill="#1f2632"/><rect x="88" y="38" width="224" height="10" fill="#38404d"/>' +
      '<rect x="92" y="41" width="40" height="4" fill="' + GLD + '"/>' + grid +
      '<g class="wv"><rect x="96" y="128" width="2" height="18" fill="#fff"/></g>' +
      '<path d="M60 160h280l24 26H36z" fill="#9aa0a8"/><rect x="170" y="170" width="60" height="8" rx="2" fill="#7c828a"/>' +
      '<rect x="292" y="196" width="96" height="50" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="330" cy="221" r="20" fill="#0b0b0b"/><circle cx="330" cy="221" r="13" fill="none" stroke="#2a2a2a"/><circle cx="330" cy="221" r="6" fill="' + MAR + '"/><rect x="328" y="214" width="4" height="4" fill="#fff"/></g>' +
      '<path d="M20 230q0-34 34-34t34 34" fill="none" stroke="#333" stroke-width="5"/><rect x="14" y="222" width="14" height="24" rx="5" fill="' + GLD + '"/><rect x="80" y="222" width="14" height="24" rx="5" fill="' + GLD + '"/>' +
      '<text x="200" y="22" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GLD + '" letter-spacing="2">SOUL SAMPLE LOOP</text>');
  }

  /* 4. Durham's old tobacco campus: brick warehouses, the water tower, the stream, a bull-red sky */
  function tobacco() {
    return svg('<rect width="400" height="260" fill="url(#s4)"/>' + stars(12) +
      '<rect x="0" y="110" width="160" height="110" fill="#9a4430"/><rect x="230" y="96" width="170" height="124" fill="#8e3b2a"/>' +
      (() => { let w = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { w += '<rect class="bl bl' + ((r + c) % 4 + 1) + '" x="' + (10 + c * 24) + '" y="' + (122 + r * 22) + '" width="12" height="14" rx="5" fill="#ffd98a"/>'; w += '<rect x="' + (242 + c * 26) + '" y="' + (110 + r * 24) + '" width="12" height="15" rx="5" fill="' + ((r + c) % 3 ? "#ffd98a" : "#2c2430") + '"/>'; } return w; })() +
      '<rect x="176" y="40" width="40" height="180" fill="#a74a32"/><rect x="172" y="36" width="48" height="8" fill="#6e2e1e"/>' +
      '<rect x="120" y="54" width="4" height="56" fill="#555"/><rect x="152" y="54" width="4" height="56" fill="#555"/><path d="M122 64l32 30M154 64l-32 30" stroke="#555" stroke-width="2"/>' +
      '<rect x="110" y="26" width="56" height="30" rx="4" fill="#d6d2c8"/><path d="M108 28l30-16 30 16z" fill="#b9b4a8"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2b4a3a"/><path d="M0 236q50-8 100 0t100 0 100 0 100 0" stroke="' + SKY + '" stroke-width="5" fill="none"/>' +
      '<g class="car"><rect x="0" y="232" width="10" height="4" rx="2" fill="#fff"/></g>',
      sky("s4", "#14122a", "#a8443a"));
  }

  /* 5. The corner by NCCU: Fayetteville St & Lawson St, 9TH WONDER tag, Durham skyline behind */
  function corner() {
    return svg('<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<g fill="#2a2840"><rect x="20" y="70" width="40" height="60"/><rect x="66" y="40" width="34" height="90"/><path d="M66 40l17-14 17 14z"/><rect x="108" y="58" width="44" height="72"/><rect x="160" y="30" width="26" height="100"/><rect x="194" y="62" width="50" height="68"/><rect x="250" y="50" width="30" height="80"/><rect x="290" y="74" width="60" height="56"/></g>' +
      (() => { let w = ""; for (let i = 0; i < 16; i++) w += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (26 + (i * 41) % 310) + '" y="' + (70 + (i * 17) % 50) + '" width="3" height="4" fill="#ffd98a"/>'; return w; })() +
      '<rect x="0" y="120" width="400" height="104" fill="#8e3b2a"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#74301f" stroke-width="1"/>'; return b; })() +
      tag9("TH WONDER", 20, 194, 40, GLD, -5) + tag("JUSTUS LEAGUE", 120, 216, 20, SKY, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="258" y="44" width="140" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Fayetteville St</text>' +
      '<rect x="292" y="70" width="80" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Lawson St</text>' +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#6a2a3a"));
  }

  window.SCENES = { station: station, nccu: nccu, laptop: laptop, tobacco: tobacco, corner: corner };
})();
