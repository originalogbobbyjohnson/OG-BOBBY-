/* eLZhi game (Regions tab, Detroit). The QLine streetcar at Grand Blvd under the gold Fisher Building tower, the Saturday open mic at the
   Hip-Hop Shop on W 7 Mile, Cody High (Peck, Lessenger, Cody), the live band at St. Andrew's Hall (Elmatic), and the 7 Mile corner with the RenCen. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bo{animation:bounce .9s ease-in-out infinite}.bo2{animation-delay:.3s}.bo3{animation-delay:.6s}' +
    '@keyframes toss{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-34px) rotate(160deg)}100%{transform:translateY(0) rotate(360deg)}}' +
    '.cap{transform-box:fill-box;transform-origin:50% 50%;animation:toss 2.6s ease-in-out infinite}.cap2{animation-delay:.9s}.cap3{animation-delay:1.7s}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sw{transform-box:fill-box;transform-origin:50% 0%;animation:swing 1.4s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.nt{animation:note 3s ease-out infinite}.nt2{animation-delay:1s}.nt3{animation-delay:2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e4572e", BLUE = "#4ea8de", CREAM = "#f4f1e8", GREEN = "#3fa66b", PURP = "#8e5bd6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Renaissance Center: tall middle glass cylinder ringed by four shorter ones */
  const rencen = (x, base, s, col, lit) => {
    let g = '<g fill="' + col + '">';
    [[-46, 90], [-26, 104], [26, 104], [46, 90]].forEach(([dx, h]) => g += '<rect x="' + (x + dx * s - 10 * s) + '" y="' + (base - h * s) + '" width="' + (20 * s) + '" height="' + (h * s) + '" rx="' + (6 * s) + '"/>');
    g += '<rect x="' + (x - 15 * s) + '" y="' + (base - 150 * s) + '" width="' + (30 * s) + '" height="' + (150 * s) + '" rx="' + (8 * s) + '"/></g>';
    if (lit) for (let i = 0; i < 8; i++) g += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (x - 10 * s) + '" y="' + (base - 140 * s + i * 16 * s) + '" width="' + (20 * s) + '" height="' + (2 * s) + '" fill="#9cc4ff" opacity=".7"/>';
    return g;
  };

  /* 1. The QLine streetcar pulling into the Grand Blvd stop on Woodward, the Fisher Building's gold tower behind */
  function qline() {
    let windows = "";
    for (let x = 30; x < 290; x += 34) windows += '<rect x="' + x + '" y="134" width="24" height="24" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      /* Fisher Building: tan stone tower with the gold pyramid roof */
      '<rect x="300" y="70" width="70" height="140" fill="#b8a27a"/><rect x="314" y="48" width="42" height="40" fill="#c4ae86"/>' +
      '<path d="M314 48L335 14L356 48z" fill="' + GOLD + '" stroke="#b8862a" stroke-width="2"/>' +
      (() => { let w = ""; for (let y = 58; y < 206; y += 12) for (let x = 306; x < 366; x += 12) w += '<rect x="' + x + '" y="' + y + '" width="5" height="7" fill="#5a4a32" opacity=".55"/>'; return w; })() +
      '<rect x="230" y="110" width="60" height="100" fill="#3a3f55"/><rect x="20" y="96" width="50" height="114" fill="#2d3247"/>' +
      /* stop canopy and sign */
      '<rect x="40" y="60" width="200" height="34" rx="3" fill="#111"/><rect x="40" y="60" width="200" height="4" fill="' + RED + '"/>' +
      '<text x="140" y="84" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Grand Blvd</text>' +
      '<rect x="60" y="94" width="5" height="34" fill="#666"/><rect x="215" y="94" width="5" height="34" fill="#666"/>' +
      /* streetcar */
      '<g class="anim-train">' +
        '<rect x="14" y="122" width="290" height="62" rx="16" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="14" y="166" width="290" height="7" fill="' + RED + '"/>' + windows +
        '<rect x="282" y="134" width="16" height="26" rx="4" fill="#9fc6e8"/><circle cx="294" cy="176" r="4" fill="#fff6c2"/>' +
        '<path d="M150 122l-14 -18M150 122l14 -18" stroke="#555" stroke-width="2"/>' +
      '</g>' +
      '<path d="M0 104h400" stroke="#444" stroke-width="1.5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#3a3f48"/><rect x="0" y="184" width="400" height="5" fill="#9aa0a8"/>' +
      '<path d="M0 196h400M0 204h400" stroke="#8a8d93" stroke-width="2"/>' +
      '<g class="car"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd3da" letter-spacing="3">WOODWARD AVE</text>',
      sky("s1", "#16213e", "#e59c5a"));
  }

  /* 2. Saturday open mic at the Hip-Hop Shop on W 7 Mile: storefront, mic on the stage, crowd bouncing */
  function openmic() {
    let crowd = "";
    for (let i = 0; i < 9; i++) { const x = 30 + i * 40; crowd += '<g class="bo bo' + (i % 3 + 1) + '"><circle cx="' + x + '" cy="214" r="11" fill="#1b1b22"/><rect x="' + (x - 14) + '" y="224" width="28" height="40" rx="8" fill="#1b1b22"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="#1c1420"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#2b1f2e"/>' +
      '<rect x="80" y="10" width="240" height="30" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="flk" x="200" y="31" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '" letter-spacing="3">HIP-HOP SHOP</text>' +
      /* clothing racks on the walls */
      '<path d="M20 70h90M290 70h90" stroke="#888" stroke-width="3"/>' +
      [24, 40, 56, 72, 88].map((x, i) => '<rect x="' + x + '" y="72" width="12" height="34" rx="2" fill="' + [RED, BLUE, GOLD, GREEN, PURP][i] + '"/>').join("") +
      [294, 310, 326, 342, 358].map((x, i) => '<rect x="' + x + '" y="72" width="12" height="34" rx="2" fill="' + [PURP, GREEN, GOLD, BLUE, RED][i] + '"/>').join("") +
      /* stage + mic */
      '<rect x="120" y="150" width="160" height="22" fill="#3b2a1e"/><rect x="120" y="150" width="160" height="4" fill="#5a4030"/>' +
      '<rect x="198" y="96" width="4" height="54" fill="#999"/><path d="M180 150h40" stroke="#999" stroke-width="3"/>' +
      '<rect x="193" y="82" width="14" height="20" rx="7" fill="#444" stroke="#aaa" stroke-width="1.5"/>' +
      '<path d="M200 60l-60 90h120z" fill="#fff6c2" opacity=".12"/>' +
      '<rect x="150" y="54" width="100" height="18" rx="3" fill="' + RED + '"/><text x="200" y="67" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">OPEN MIC SAT</text>' +
      '<text class="nt" x="230" y="96" font-size="14" fill="' + GOLD + '">&#9835;</text><text class="nt nt2" x="160" y="104" font-size="12" fill="' + BLUE + '">&#9834;</text><text class="nt nt3" x="250" y="120" font-size="12" fill="' + CREAM + '">&#9835;</text>' +
      crowd);
  }

  /* 3. Cody High on the west side: red brick, the bell swinging, graduation caps in the air */
  function cody() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) wins += '<rect x="' + (52 + c * 38) + '" y="' + (100 + r * 30) + '" width="20" height="18" fill="#cfe2f2" stroke="#e8dcc2" stroke-width="2"/>';
    const cap = (x, y, cls) => '<g class="cap ' + cls + '"><path d="M' + (x - 12) + ' ' + y + 'l12 -6 12 6 -12 6z" fill="#111"/><rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="12" height="5" fill="#111"/><path d="M' + (x + 10) + ' ' + (y + 1) + 'v8" stroke="' + GOLD + '" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="40" y="86" width="320" height="130" fill="#8c3b2a"/>' +
      (() => { let b = ""; for (let y = 92; y < 216; y += 7) b += '<path d="M40 ' + y + 'h320" stroke="#73301f" stroke-width="1"/>'; return b; })() +
      '<rect x="170" y="44" width="60" height="44" fill="#8c3b2a"/><path d="M164 44h72l-36 -26z" fill="#4a4f57"/>' +
      '<rect x="186" y="50" width="28" height="28" fill="#2a1a14"/>' +
      '<g class="sw"><path d="M190 54h20l2 18h-24z" fill="' + GOLD + '"/><circle cx="200" cy="74" r="3" fill="#a37d1c"/></g>' +
      '<rect x="36" y="82" width="328" height="6" fill="#e8dcc2"/>' + wins +
      '<rect x="120" y="186" width="160" height="16" fill="#e8dcc2"/><text x="200" y="198" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2418" letter-spacing="4">CODY HIGH</text>' +
      '<rect x="186" y="202" width="28" height="14" fill="#3a2a22"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4f8a3e"/><rect x="0" y="236" width="400" height="24" fill="#6b6f76"/>' +
      cap(80, 40, "") + cap(300, 30, "cap2") + cap(350, 60, "cap3") + cap(120, 64, "cap2"),
      sky("s3", "#79b7e8", "#e9f2fa"));
  }

  /* 4. St. Andrew's Hall downtown: brick hall, marquee lights chasing, the live band night */
  function hall() {
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (92 + i * 12.6) + '" cy="132" r="2.6" fill="#fff3b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(18) +
      '<path d="M70 70L200 34L330 70z" fill="#5a2a22"/>' +
      '<rect x="70" y="70" width="260" height="150" fill="#7a3a2c"/>' +
      (() => { let b = ""; for (let y = 76; y < 220; y += 7) b += '<path d="M70 ' + y + 'h260" stroke="#64301f" stroke-width="1"/>'; return b; })() +
      '<path d="M120 76h30v40h-30zM250 76h30v40h-30z" fill="#2a2440"/><path d="M120 76q15 -16 30 0M250 76q15 -16 30 0" fill="#2a2440"/>' +
      '<rect class="bl" x="122" y="80" width="26" height="34" fill="' + PURP + '" opacity=".5"/><rect class="bl bl3" x="252" y="80" width="26" height="34" fill="' + BLUE + '" opacity=".5"/>' +
      '<rect x="86" y="126" width="228" height="44" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="158" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '" letter-spacing="2">LIVE BAND TONIGHT</text>' +
      '<rect x="176" y="176" width="48" height="44" fill="#2a1612"/><rect x="180" y="180" width="18" height="40" fill="#3a2018"/><rect x="202" y="180" width="18" height="40" fill="#3a2018"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3f48"/><rect x="0" y="220" width="400" height="4" fill="#59606b"/>' +
      '<g class="car"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      '<text class="nt" x="96" y="96" font-size="16" fill="' + GOLD + '">&#9835;</text><text class="nt nt2" x="300" y="100" font-size="14" fill="' + CREAM + '">&#9834;</text>',
      sky("s4", "#0b1028", "#3b2f5c"));
  }

  /* 5. The corner: W 7 Mile Rd and Greenfield Rd, eLZhi tagged on the wall, the RenCen glowing downtown */
  function corner() {
    const BRICK = "#5e3a2e", BRICK2 = "#4a2c22";
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      rencen(150, 132, 0.75, "#2a3654", true) +
      '<rect x="20" y="90" width="34" height="42" fill="#232c44"/><rect x="230" y="84" width="30" height="48" fill="#232c44"/><rect x="266" y="100" width="40" height="32" fill="#232c44"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      /* a little color-scheme stripe, for Colors */
      [RED, "#f08a24", GOLD, GREEN, BLUE, PURP].map((c, i) => '<rect x="' + (14 + i * 40) + '" y="150" width="40" height="6" fill="' + c + '" opacity=".85"/>').join("") +
      tag("eLZhi", 22, 200, 50, CREAM, -5) + tag("COLORS", 186, 214, 20, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="282" y="44" width="102" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">W 7 Mile Rd</text>' +
      '<rect x="280" y="70" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Greenfield Rd</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#2c3554"));
  }

  window.SCENES = { qline: qline, openmic: openmic, cody: cody, hall: hall, corner: corner };
})();
