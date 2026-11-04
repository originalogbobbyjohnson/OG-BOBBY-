/* chinoxl scenes (OG FAN 99 Regions) */
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

  const RED = "#e63946", CRM = "#f1faee", GLD = "#ffd166";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes hand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.hd{transform-box:view-box;transform-origin:200px 70px;animation:hand 10s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bk{animation:blink 1.4s ease-in-out infinite}.bk2{animation-delay:.5s}.bk3{animation-delay:.9s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.2s ease-in-out infinite}' +
    '@keyframes plane{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.pl{animation:plane 14s linear infinite}</style>';
  const win = (x, y, cols, rows, c) => { let s = ""; for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x + k * 12) + '" y="' + (y + r * 16) + '" width="7" height="10" fill="' + c + '"/>'; return s; };

  /* 1. Brick Church station, NJ Transit Morris & Essex Lines: raised platform, the train pulling in, East Orange below */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<rect x="0" y="80" width="70" height="80" fill="#9a5a40"/><rect x="320" y="70" width="80" height="90" fill="#8a4a36"/>' + win(8, 90, 5, 4, "#3a2a24") + win(328, 80, 6, 5, "#3a2a24") +
      '<rect x="0" y="54" width="400" height="10" fill="#4a4a54"/>' + [40, 150, 260, 370].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="110" fill="#5a5a64"/>').join("") +
      '<rect x="120" y="76" width="160" height="34" rx="3" fill="#111"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Brick Church</text><text x="200" y="105" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GLD + '" letter-spacing="2">MORRIS &amp; ESSEX LINES</text>' +
      '<g class="anim-train"><rect x="0" y="116" width="270" height="60" rx="5" fill="#c8ccd2" stroke="#666" stroke-width="2"/>' +
      [16, 70, 124, 178].map(x => '<rect x="' + x + '" y="126" width="42" height="18" rx="2" fill="#1d2a36"/>').join("") +
      '<rect x="0" y="150" width="270" height="4" fill="#f07a1a"/><rect x="0" y="155" width="270" height="4" fill="#a02a8a"/><rect x="0" y="160" width="270" height="4" fill="#1a4a9a"/>' +
      '<rect x="236" y="124" width="26" height="22" rx="2" fill="#bfe3ff"/><circle cx="262" cy="170" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#e8c840"/><rect x="0" y="186" width="400" height="30" fill="#8a8a88"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#8a4a36"/>' + brick(0, 216, 400, 44, "#8a4a36", "#7a3e2c") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">EAST ORANGE, NJ</text>',
      sky("g1", "#8ab4d8", "#f4e6cc"));
  }

  /* 2. East Orange City Hall: red brick, white trim, the clock tower with its cupola, flag waving */
  function cityhall() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="60" y="110" width="280" height="100" fill="#a4503a"/>' + brick(60, 110, 280, 100, "#a4503a", "#94462f") +
      '<rect x="60" y="104" width="280" height="8" fill="#f2efe6"/>' + [84, 124, 254, 294].map(x => '<rect x="' + x + '" y="126" width="22" height="34" fill="#2a3a4a" stroke="#f2efe6" stroke-width="3"/><rect x="' + x + '" y="170" width="22" height="30" fill="#2a3a4a" stroke="#f2efe6" stroke-width="3"/>').join("") +
      '<rect x="170" y="44" width="60" height="166" fill="#a4503a"/>' + brick(170, 44, 60, 166, "#a4503a", "#94462f") +
      '<rect x="166" y="40" width="68" height="8" fill="#f2efe6"/><rect x="178" y="18" width="44" height="24" fill="#f2efe6"/><path d="M176 18l24 -16 24 16z" fill="#5a7a6a"/>' +
      '<circle cx="200" cy="70" r="18" fill="#f6f2e4" stroke="#333" stroke-width="2"/><path d="M200 70v-11" stroke="#222" stroke-width="2.5"/><path class="hd" d="M200 70h13" stroke="#222" stroke-width="2"/>' +
      '<path d="M178 210v-40h44v40" fill="#f2efe6"/><rect x="186" y="176" width="28" height="34" fill="#3a2a24"/>' +
      '<path d="M240 40v-30" stroke="#888" stroke-width="2"/><g class="fg"><rect x="241" y="10" width="26" height="16" fill="#1a3a8a"/><path d="M241 18h26" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#6a9a4a"/><path d="M150 210h100l20 50H130z" fill="#cfc6b4"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#2a2a2a" letter-spacing="3">EAST ORANGE CITY HALL</text>',
      sky("g2", "#7ab0dc", "#eef4f8"));
  }

  /* 3. The Bronx where he was born: the stadium's limestone outside with the white frieze, lights blinking */
  function bronx() {
    let frieze = ""; for (let x = 20; x < 380; x += 20) frieze += '<path d="M' + x + ' 64q10 14 20 0" stroke="#fff" stroke-width="3" fill="none"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(24) +
      '<path d="M20 60h360" stroke="#fff" stroke-width="4"/>' + frieze +
      '<rect x="20" y="78" width="360" height="132" fill="#d8ccb0"/>' +
      [40, 100, 160, 220, 280, 340].map(x => '<rect x="' + x + '" y="100" width="30" height="90" rx="15" fill="#3a3a44"/>').join("") +
      '<rect x="20" y="78" width="360" height="12" fill="#c8bca0"/>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a3a" letter-spacing="8">THE BRONX</text>' +
      [60, 200, 340].map((x, i) => '<rect x="' + (x - 18) + '" y="20" width="36" height="16" fill="#555"/><g class="bk bk' + (i + 1) + '"><circle cx="' + (x - 10) + '" cy="28" r="4" fill="#fff6c2"/><circle cx="' + x + '" cy="28" r="4" fill="#fff6c2"/><circle cx="' + (x + 10) + '" cy="28" r="4" fill="#fff6c2"/></g><path d="M' + x + ' 36v24" stroke="#555" stroke-width="3"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a4e"/><rect x="0" y="206" width="400" height="6" fill="#9a9a9a"/>' +
      [70, 110, 270, 310].map((x, i) => '<g class="bob" style="animation-delay:' + (i * .25) + 's"><rect x="' + x + '" y="214" width="14" height="24" rx="4" fill="' + ["#1e2a5a", "#222", "#fff", "#1e2a5a"][i] + '"/><circle cx="' + (x + 7) + '" cy="208" r="6" fill="#2b2b2b"/></g>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">BORN IN THE BRONX</text>',
      sky("g3", "#0e1a3a", "#2a3a6a"));
  }

  /* 4. Eagle Rock Reservation, West Orange: the overlook at night, the whole New York skyline glowing across the meadowlands */
  function eaglerock() {
    let city = ""; const hs = [30, 50, 40, 70, 46, 90, 60, 120, 54, 80, 44, 66, 36, 58, 30];
    hs.forEach((h, i) => { city += '<rect x="' + (60 + i * 18) + '" y="' + (150 - h) + '" width="16" height="' + h + '" fill="#2a3050"/>'; for (let y = 150 - h + 4; y < 146; y += 8) city += '<rect x="' + (64 + i * 18) + '" y="' + y + '" width="3" height="3" fill="#ffd27a" opacity=".8"/>'; });
    return svg(X +
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(36) +
      '<g class="pl"><circle cx="0" cy="40" r="2" fill="#fff"/><circle class="bk" cx="6" cy="40" r="1.5" fill="#ff3a3a"/></g>' +
      city + '<rect x="186" y="10" width="4" height="22" fill="#2a3050"/>' +
      '<rect x="0" y="150" width="400" height="24" fill="#141a30"/><path d="M0 158h400" stroke="#ffd27a" stroke-width="1" stroke-dasharray="2 6" opacity=".6"/>' +
      '<path d="M0 260V186q80 -20 200 -14t200 10v78z" fill="#1e2a1e"/><path d="M60 196h280" stroke="#8a8a80" stroke-width="4"/>' + [70, 130, 190, 250, 310].map(x => '<path d="M' + x + ' 196v20" stroke="#8a8a80" stroke-width="4"/>').join("") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="' + CRM + '" letter-spacing="3">EAGLE ROCK RESERVATION</text>',
      sky("g4", "#0a0f22", "#3a2a4a"));
  }

  /* 5. Main St and Halsted St by Brick Church: green signs, CHINO XL tagged, the old brick steeple behind */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="180" y="50" width="40" height="74" fill="#9a4a36"/><path d="M176 50l24 -46 24 46z" fill="#5a6a6a"/><rect x="190" y="64" width="20" height="26" rx="10" fill="#2a2a34"/><path d="M200 4v-4" stroke="#ccc" stroke-width="2"/>' +
      '<rect x="40" y="80" width="80" height="44" fill="#6a5a5a"/><rect x="280" y="74" width="90" height="50" fill="#5a4a4a"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#6a2e2a"/>' + brick(0, 120, 400, 104, "#6a2e2a", "#5a2622") +
      tag("CHINO XL", 24, 194, 44, RED, -6) + tag("RICAN", 36, 218, 16, GLD, -3) + tag("WORDSMITH", 140, 218, 16, CRM, -3) +
      '<g class="sp"><circle cx="262" cy="160" r="3" fill="' + RED + '"/></g><g class="sp sp2"><circle cx="268" cy="154" r="2" fill="' + RED + '"/></g><g class="sp sp3"><circle cx="258" cy="150" r="2" fill="' + RED + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="220" width="400" height="6" fill="#d8dce0"/>' +
      '<rect x="346" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(284, 92, 112, "Main St") + sign(284, 118, 112, "Halsted St"),
      sky("g5", "#5a7aa8", "#f0c890"));
  }

  window.SCENES = { station: station, cityhall: cityhall, bronx: bronx, eaglerock: eaglerock, corner: corner };
})();
