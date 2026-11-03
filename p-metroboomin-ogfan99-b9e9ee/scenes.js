/* Metro Boomin producer game: St. Louis. MetroLink at North Hanley, Parkway North High, the night drive on I-24, Morehouse College, N Hanley Rd & Natural Bridge Rd with the Gateway Arch. Each scene 400 x 260. */
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
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const cloud = (x, y, s) => '<g class="carL" style="animation-duration:40s"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".8"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const RED = "#e63b3b", BLUE = "#3a7bd5", GOLD = "#f2c14e", CREAM = "#f7f3ea";

  /* 1. MetroLink Red Line pulling into North Hanley station, north St. Louis County */
  function metrolink() {
    let wins = "";
    for (let x = 22; x < 300; x += 30) wins += '<rect x="' + x + '" y="112" width="20" height="18" rx="3" fill="#20304a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#m1)"/>' + cloud(90, 40, 1.1) + cloud(300, 28, .8) +
      '<g fill="#4f7a3e"><circle cx="18" cy="150" r="22"/><circle cx="372" cy="146" r="26"/><circle cx="344" cy="154" r="16"/></g>' +
      '<rect x="0" y="78" width="400" height="2" fill="#555"/>' + [30, 190, 350].map(x => '<rect x="' + x + '" y="60" width="4" height="100" fill="#777"/><rect x="' + (x - 14) + '" y="60" width="32" height="3" fill="#777"/>').join("") +
      /* canopy + station sign */
      '<rect x="222" y="44" width="170" height="9" fill="#9aa3ad"/><rect x="228" y="53" width="4" height="46" fill="#888"/><rect x="384" y="53" width="4" height="46" fill="#888"/>' +
      '<rect x="240" y="60" width="138" height="28" rx="3" fill="#123a7a"/>' + T(309, 79, 13, "#fff", "North Hanley", ' text-anchor="middle"') +
      '<circle cx="232" cy="74" r="9" fill="' + RED + '"/>' + T(232, 78, 8, "#fff", "RED", ' text-anchor="middle"') +
      /* light rail car: white body, red + blue stripes */
      '<g class="anim-train"><path d="M4 102h296q20 0 24 22v34H4z" fill="#f2f4f6" stroke="#8a929c" stroke-width="2"/>' + wins +
      '<rect x="4" y="138" width="320" height="6" fill="' + RED + '"/><rect x="4" y="144" width="320" height="4" fill="' + BLUE + '"/>' +
      '<path d="M302 108h10q8 0 10 16h-20z" fill="#20304a"/><circle cx="316" cy="152" r="3" fill="#fff6c2"/><rect x="140" y="92" width="40" height="10" fill="#666"/><path d="M150 92l10-12 10 12" stroke="#555" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="160" width="400" height="18" fill="#c9c4b8"/><rect x="0" y="160" width="400" height="4" fill="#f2d24b"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#6f6a60"/><g fill="#55504a">' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="200" width="14" height="40"/>').join("") + '</g><rect x="0" y="210" width="400" height="4" fill="#aaa"/><rect x="0" y="228" width="400" height="4" fill="#aaa"/>' +
      tag("YOUNG METRO", 100, 254, 22, RED, -3),
      sky("m1", "#6aa9e0", "#e2f0fa"));
  }

  /* 2. Parkway North High School: long red-brick school, a laptop glowing in a classroom window, flag, school bus */
  function parkway() {
    let wins = "";
    for (let x = 40; x < 370; x += 34) if (x !== 210) wins += '<rect x="' + x + '" y="112" width="22" height="20" fill="#a9c6dc" stroke="#e8e2d6" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#m2)"/>' + cloud(120, 36, 1) +
      '<g fill="#5b8a46"><circle cx="20" cy="140" r="26"/><circle cx="384" cy="136" r="28"/></g>' +
      brick(26, 96, 352, 80, "#9c4a33", "#7a3626") + '<rect x="22" y="90" width="360" height="8" fill="#d8d2c4"/>' + wins +
      /* glowing classroom window with a laptop and meters */
      '<rect x="206" y="108" width="30" height="26" fill="#0f1830" stroke="#e8e2d6" stroke-width="2"/><rect x="212" y="122" width="18" height="10" fill="#2d2f38"/><rect x="214" y="114" width="14" height="9" fill="#5fd0ff"/>' +
      '<g fill="' + GOLD + '"><rect class="mt" x="215" y="116" width="2" height="6"/><rect class="mt mt2" x="219" y="116" width="2" height="6"/><rect class="mt mt3" x="223" y="116" width="2" height="6"/></g>' +
      /* entrance + school sign */
      '<rect x="160" y="140" width="40" height="36" fill="#3a2a22"/><rect x="164" y="144" width="15" height="32" fill="#a9c6dc"/><rect x="181" y="144" width="15" height="32" fill="#a9c6dc"/>' +
      '<rect x="40" y="150" width="104" height="24" rx="3" fill="#13254f" stroke="#fff" stroke-width="1.5"/>' + T(92, 160, 9, "#fff", "PARKWAY NORTH", ' text-anchor="middle"') + T(92, 170, 7, GOLD, "HIGH SCHOOL", ' text-anchor="middle"') +
      /* flag */
      '<rect x="330" y="40" width="3" height="136" fill="#bbb"/><g class="bob"><rect x="333" y="42" width="34" height="20" fill="' + RED + '"/><rect x="333" y="48" width="34" height="3" fill="#fff"/><rect x="333" y="54" width="34" height="3" fill="#fff"/><rect x="333" y="42" width="14" height="10" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="176" width="400" height="14" fill="#a8a296"/><rect x="0" y="190" width="400" height="70" fill="#3a3a40"/><g fill="#e8e2d6">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="222" width="22" height="3"/>').join("") + '</g>' +
      '<g class="car" style="animation-duration:9s"><rect x="0" y="198" width="86" height="24" rx="4" fill="#f2b632"/><g fill="#1d2f4a">' + [6, 22, 38, 54].map(x => '<rect x="' + x + '" y="202" width="12" height="8"/>').join("") + '</g><rect x="72" y="202" width="10" height="10" fill="#1d2f4a"/><circle cx="16" cy="224" r="5" fill="#111"/><circle cx="68" cy="224" r="5" fill="#111"/></g>' +
      tag("5 BEATS A DAY", 210, 252, 18, GOLD, -3),
      sky("m2", "#7cb6e6", "#eef6fb"));
  }

  /* 3. The eight-hour night drive: Mom's car on I-24 East from St. Louis toward Atlanta */
  function drive() {
    return svg(
      '<rect width="400" height="260" fill="url(#m3)"/>' + stars(30) + '<circle cx="330" cy="40" r="16" fill="#f4efd8"/><circle cx="324" cy="36" r="16" fill="#1a2140"/>' +
      '<path d="M0 150q60-30 120-8t140-14 140 10v12H0z" fill="#12182c"/><g fill="#0c1120"><path d="M0 160l20-30 20 30zM40 160l16-24 16 24zM330 160l18-28 18 28zM360 160l16-22 16 22z"/></g>' +
      /* overhead green sign */
      '<rect x="110" y="24" width="4" height="136" fill="#777"/><rect x="290" y="24" width="4" height="136" fill="#777"/><rect x="104" y="30" width="196" height="4" fill="#777"/>' +
      '<rect x="120" y="38" width="164" height="66" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M136 48h24v14q0 10-12 14q-12-4-12-14z" fill="#1d4ea0" stroke="#fff" stroke-width="1.5"/><rect x="136" y="48" width="24" height="5" fill="' + RED + '"/>' + T(148, 69, 10, "#fff", "24", ' text-anchor="middle"') +
      T(168, 62, 12, "#fff", "EAST") + T(140, 84, 11, "#fff", "Chattanooga") + T(140, 98, 11, "#fff", "Atlanta") + '<path d="M258 74v18m-6-6l6 6 6-6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      /* road */
      '<path d="M0 160h400v100H0z" fill="#22252c"/><path d="M150 160L40 260M250 160l110 100" stroke="#e8e2d6" stroke-width="3"/>' +
      '<g class="car" style="animation-duration:1.2s">' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (i * 100) + '" y="214" width="40" height="4" fill="#f2d24b"/>').join("") + '</g>' +
      /* mom's car from behind with red taillights */
      '<g class="bob"><rect x="156" y="176" width="88" height="44" rx="8" fill="#5a6274"/><rect x="166" y="180" width="68" height="16" rx="3" fill="#1a2140"/><rect x="160" y="202" width="16" height="7" rx="2" fill="' + RED + '" class="flk"/><rect x="224" y="202" width="16" height="7" rx="2" fill="' + RED + '" class="flk"/><rect x="186" y="204" width="28" height="8" fill="#f7f3ea"/>' + T(200, 211, 6, "#222", "STL", ' text-anchor="middle"') + '<rect x="160" y="220" width="16" height="8" fill="#111"/><rect x="224" y="220" width="16" height="8" fill="#111"/></g>' +
      tag("8 HOURS", 18, 250, 20, GOLD, -4),
      sky("m3", "#0b1028", "#2b2f5a"));
  }

  /* 4. Morehouse College, Atlanta: Graves Hall's red brick and tower, maroon banners, downtown behind */
  function morehouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#m4)"/>' + cloud(70, 34, .9) +
      '<g fill="#8d97a8" opacity=".75"><rect x="10" y="70" width="22" height="80"/><rect x="36" y="50" width="18" height="100"/><path d="M58 150V40l9-12 9 12v110z"/><rect x="336" y="60" width="24" height="90"/><rect x="364" y="78" width="26" height="72"/></g>' +
      brick(96, 92, 208, 96, "#a1432d", "#7e3220") +
      '<rect x="176" y="46" width="48" height="60" fill="#a1432d"/><path d="M170 50l30-34 30 34z" fill="#3b3f48"/><rect x="190" y="58" width="20" height="26" rx="10" fill="#f2efe6"/>' +
      '<g fill="#f2efe6">' + [108, 136, 238, 266].map(x => '<rect x="' + x + '" y="104" width="16" height="22" rx="8"/><rect x="' + x + '" y="140" width="16" height="22" rx="8"/>').join("") + '</g>' +
      '<rect x="184" y="132" width="32" height="56" rx="16" fill="#3a2a22"/><rect x="90" y="86" width="220" height="8" fill="#e6dccb"/>' +
      /* maroon banners waving */
      '<g class="bob"><rect x="122" y="66" width="14" height="22" fill="#7a1a2a"/><rect x="264" y="66" width="14" height="22" fill="#7a1a2a"/><rect x="122" y="80" width="14" height="3" fill="#fff"/><rect x="264" y="80" width="14" height="3" fill="#fff"/></g>' +
      '<g fill="#3f7a3a"><circle cx="66" cy="176" r="26"/><circle cx="340" cy="172" r="30"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#7fae5a"/><path d="M160 260l26-72h28l26 72z" fill="#d8d0bf"/>' +
      '<rect x="20" y="200" width="104" height="24" rx="3" fill="#7a1a2a" stroke="#fff" stroke-width="1.5"/>' + T(72, 216, 10, "#fff", "MOREHOUSE", ' text-anchor="middle"') +
      tag("ATL BOUND", 270, 244, 20, GOLD, -4),
      sky("m4", "#79b4e8", "#f3e7d0"));
  }

  /* 5. N Hanley Rd & Natural Bridge Rd: St. Louis red brick wall tagged, the Gateway Arch at sunset */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#m5)"/>' +
      '<path d="M120 150Q200-40 280 150" fill="none" stroke="#d6dce3" stroke-width="9"/><path d="M120 150Q200-40 280 150" fill="none" stroke="#9aa4ae" stroke-width="3"/>' +
      '<g fill="#3a3550"><rect x="20" y="120" width="40" height="30"/><rect x="70" y="110" width="30" height="40"/><rect x="300" y="116" width="34" height="34"/><rect x="340" y="104" width="28" height="46"/></g>' +
      '<rect x="0" y="116" width="270" height="104" fill="url(#m5b)"/><rect x="0" y="116" width="270" height="104" fill="#a3442c" opacity=".9"/><rect x="0" y="112" width="270" height="6" fill="#c8b9a0"/>' +
      '<g stroke="#7e3220" stroke-width="1" opacity=".7">' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (124 + i * 8) + 'h270"/>').join("") + '</g>' +
      tag("METRO BOOMIN", 12, 172, 29, RED, -6) + tag("WANT SOME MORE", 40, 204, 17, GOLD, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, BLUE) +
      '<rect x="330" y="128" width="5" height="92" fill="#5b6b5f"/>' +
      '<rect x="280" y="128" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(332, 143, 10, "#fff", "N HANLEY RD", ' text-anchor="middle"') +
      '<rect x="276" y="154" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + T(332, 169, 9, "#fff", "NATURAL BRIDGE RD", ' text-anchor="middle"'),
      sky("m5", "#1c1f45", "#ff8a5a") + bricks("m5b"));
  }
  function bricks(id) { return '<pattern id="' + id + '" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v5" stroke="#7e3220"/></pattern>'; }

  window.SCENES = { metrolink, parkway, drive, morehouse, corner };
})();
