/* Big Ghost Ltd producer game: Upstate NY (home base unconfirmed; he stays anonymous). Thruway sign, the ghost blog, the hideout, Niagara Falls, the Albany corner with the Egg. 400 x 260 SVGs. */
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
  const WHT = "#ece8f6", MINT = "#7fd1b9", RED = "#b03a48";
  const ghost = (x, y, s, cls) => '<g class="' + (cls || "bob") + '"><path d="M' + x + ' ' + (y + 40 * s) + 'v' + (-22 * s) + 'a' + (16 * s) + ' ' + (16 * s) + ' 0 0 1 ' + (32 * s) + ' 0v' + (22 * s) + 'l' + (-5.3 * s) + ' ' + (-6 * s) + 'l' + (-5.3 * s) + ' ' + (6 * s) + 'l' + (-5.3 * s) + ' ' + (-6 * s) + 'l' + (-5.3 * s) + ' ' + (6 * s) + 'l' + (-5.3 * s) + ' ' + (-6 * s) + 'z" fill="' + WHT + '" opacity=".92"/><circle cx="' + (x + 11 * s) + '" cy="' + (y + 16 * s) + '" r="' + (2.6 * s) + '" fill="#1a1626"/><circle cx="' + (x + 21 * s) + '" cy="' + (y + 16 * s) + '" r="' + (2.6 * s) + '" fill="#1a1626"/></g>';
  const pine = (x, y, h, c) => '<path d="M' + x + ' ' + (y - h) + 'l' + (h * .32) + ' ' + h + 'h' + (-h * .64) + 'z" fill="' + (c || "#1d3a2c") + '"/>';
  const fog = '<style>@keyframes fg{0%,100%{transform:translateX(-20px)}50%{transform:translateX(20px)}}.fg{animation:fg 9s ease-in-out infinite}</style>';

  /* 1. The NYS Thruway at night: the big green I-90 sign for the upstate exits, cars rolling under it */
  function thruway() {
    let lanes = ""; for (let x = 0; x < 400; x += 40) lanes += '<rect x="' + x + '" y="214" width="22" height="3" fill="#e8e2b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + stars(16) +
      pine(20, 190, 70) + pine(50, 190, 90) + pine(345, 190, 85) + pine(380, 190, 64) +
      '<rect x="0" y="186" width="400" height="74" fill="#2c2e34"/>' + lanes +
      '<rect x="60" y="44" width="6" height="146" fill="#7c8088"/><rect x="334" y="44" width="6" height="146" fill="#7c8088"/><rect x="60" y="40" width="280" height="6" fill="#7c8088"/>' +
      '<rect x="74" y="52" width="252" height="108" rx="8" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<path d="M98 66h28v6l-6 4 6 4v14c0 8-6 12-14 14-8-2-14-6-14-14v-14l6-4-6-4z" fill="#1d4f9e" stroke="#fff" stroke-width="2"/><text x="112" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">90</text>' +
      '<text x="140" y="80" ' + font + ' font-size="16" fill="#fff">THRUWAY WEST</text>' +
      '<text x="140" y="104" ' + font + ' font-size="14" fill="#fff">Syracuse  Rochester</text>' +
      '<text x="140" y="124" ' + font + ' font-size="14" fill="#fff">Buffalo</text>' +
      '<text x="200" y="150" text-anchor="middle" ' + font + ' font-size="13" fill="#ffd34e">UPSTATE NY</text>' +
      '<g class="car"><rect x="0" y="222" width="50" height="16" rx="5" fill="' + RED + '"/><circle cx="10" cy="238" r="5" fill="#111"/><circle cx="40" cy="238" r="5" fill="#111"/><circle cx="48" cy="228" r="3" fill="#fff6c2"/></g>' +
      '<g class="carL carL2"><rect x="0" y="196" width="44" height="14" rx="5" fill="#d8d4e6"/><circle cx="8" cy="210" r="4" fill="#111"/><circle cx="36" cy="210" r="4" fill="#111"/></g>' +
      ghost(352, 70, .7),
      sky("t1", "#0a0a1e", "#2a2346"));
  }

  /* 2. Where it started: the anonymous ghost blog on a laptop at 3 a.m., a post scrolling, coffee steaming */
  function blog() {
    let post = ""; for (let i = 0; i < 7; i++) post += '<rect x="112" y="' + (92 + i * 11) + '" width="' + [170, 150, 176, 120, 164, 140, 90][i] + '" height="5" rx="2" fill="#c9c4dc"/>';
    return svg(
      '<rect width="400" height="260" fill="#151222"/><rect x="0" y="0" width="400" height="170" fill="#1d1830"/>' +
      '<rect x="290" y="20" width="90" height="70" fill="#0b0a18" stroke="#3a3350" stroke-width="4"/><circle cx="350" cy="44" r="12" fill="#f4efd8"/><circle cx="345" cy="41" r="11" fill="#0b0a18"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4a3426"/><rect x="0" y="170" width="400" height="6" fill="#5c4130"/>' +
      '<path d="M84 186h232l18 22h-268z" fill="#8c9096"/><rect x="96" y="56" width="208" height="130" rx="6" fill="#2a2a32"/><rect x="104" y="64" width="192" height="114" fill="#f6f3ee"/>' +
      '<rect x="104" y="64" width="192" height="20" fill="#1a1626"/><text x="112" y="78" ' + font + ' font-size="10" fill="' + WHT + '" letter-spacing="1">THE GHOST CHRONICLES</text>' +
      '<g class="bob">' + post + '</g><rect class="bl" x="112" y="168" width="6" height="8" fill="' + RED + '"/>' +
      '<rect x="40" y="186" width="26" height="30" rx="3" fill="#e8e4da"/><path d="M66 192q10 0 10 9t-10 9" stroke="#e8e4da" stroke-width="3" fill="none"/>' +
      '<path class="bob" d="M46 180q4-8 0-14M56 180q4-8 0-14" stroke="#cfcadb" stroke-width="2" fill="none" opacity=".6"/>' +
      '<rect x="330" y="188" width="44" height="40" fill="#1a1a1a"/><rect x="334" y="192" width="36" height="32" fill="' + MINT + '"/><circle cx="352" cy="208" r="8" fill="#111"/>' +
      tag("BIG GHOST", 18, 252, 26, WHT, -4));
  }

  /* 3. The secret hideout: an old upstate house in the woods, one window lit, the pads blinking inside, a sheet ghost on the porch */
  function hideout() {
    return svg(
      '<rect width="400" height="260" fill="url(#h3)"/>' + stars(18) + '<circle cx="330" cy="46" r="20" fill="#f4efd8"/>' +
      pine(26, 210, 120, "#141c22") + pine(70, 210, 90, "#141c22") + pine(372, 210, 110, "#141c22") +
      '<path d="M110 120l80-62 80 62z" fill="#2a2433"/><rect x="122" y="118" width="136" height="92" fill="#3c3446"/>' +
      '<path d="M180 72h20v-20h-20z" fill="#2a2433"/><rect x="232" y="74" width="12" height="26" fill="#2a2433"/>' +
      '<rect x="140" y="132" width="36" height="34" fill="#f2c45a"/><path d="M158 132v34M140 149h36" stroke="#3c3446" stroke-width="3"/>' +
      '<g>' + [0, 1, 2, 3].map(i => '<rect class="pd p' + (i + 1) + '" x="' + (143 + (i % 2) * 17) + '" y="' + (135 + Math.floor(i / 2) * 16) + '" width="12" height="11" fill="' + (i % 2 ? RED : MINT) + '"/>').join("") + '</g>' +
      '<rect x="206" y="132" width="36" height="34" fill="#1a1626"/><path d="M224 132v34M206 149h36" stroke="#3c3446" stroke-width="3"/>' +
      '<rect x="182" y="168" width="22" height="42" fill="#1a1626"/><rect x="112" y="200" width="156" height="10" fill="#2a2433"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#18221c"/>' +
      '<g class="fg" opacity=".35"><rect x="-30" y="196" width="460" height="22" rx="11" fill="#cfd6e6"/></g>' +
      ghost(282, 170, 1) +
      tag("HIDEOUT", 20, 248, 24, MINT, -4),
      sky("h3", "#08081a", "#2c2440"));
  }

  /* 4. Niagara Falls at night: the Horseshoe Falls pouring, the mist rising, the colored lights on the water */
  function falls() {
    let streaks = '<style>@keyframes wf{from{transform:translateY(-14px)}to{transform:translateY(14px)}}.wf{animation:wf .6s linear infinite}</style>';
    for (let x = 64; x < 340; x += 10) streaks += '<path class="wf" style="animation-delay:-' + ((x * 7) % 60) / 100 + 's" d="M' + x + ' 110v80" stroke="#e9f4ff" stroke-width="2" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#f4)"/>' + stars(14) +
      '<rect x="0" y="86" width="400" height="26" fill="#1e2c3a"/>' + pine(20, 100, 40, "#13202a") + pine(380, 100, 44, "#13202a") +
      '<path d="M50 108q150-26 300 0v92h-300z" fill="#4f8fb8"/>' +
      '<path d="M50 108q150-26 300 0v92h-300z" fill="url(#lt)" opacity=".55"/>' + streaks +
      '<rect x="0" y="196" width="400" height="64" fill="#1f4e6e"/>' +
      '<g class="fg"><ellipse cx="200" cy="198" rx="190" ry="26" fill="#eef4fa" opacity=".55"/><ellipse cx="150" cy="176" rx="90" ry="18" fill="#eef4fa" opacity=".35"/></g>' +
      '<path d="M120 240q20-6 40 0M240 236q20-6 40 0" stroke="#9fd0ea" stroke-width="2" fill="none"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="3">NIAGARA FALLS, NY</text>',
      sky("f4", "#0a0f22", "#22344e") + '<linearGradient id="lt" x1="0" x2="1"><stop offset="0" stop-color="#7fd1b9"/><stop offset=".5" stop-color="#d9d4f0"/><stop offset="1" stop-color="#b03a48"/></linearGradient>');
  }

  /* 5. The corner in Albany: State St and Pearl St, BIG GHOST tagged, the Egg on Empire State Plaza behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(10) +
      '<rect x="150" y="104" width="10" height="46" fill="#bfbcc8"/><rect x="190" y="104" width="10" height="46" fill="#bfbcc8"/>' +
      '<path d="M120 104q55-60 110 0z" fill="#e4e1ea"/><path d="M126 100q49-50 98 0" stroke="#bdb8c8" stroke-width="2" fill="none"/>' +
      '<rect x="250" y="40" width="34" height="110" fill="#5c6274"/><rect x="290" y="40" width="34" height="110" fill="#5c6274"/><rect x="40" y="70" width="40" height="80" fill="#4a5064"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (256 + (i % 2) * 40) + '" y="' + (52 + Math.floor(i / 2) * 26) + '" width="20" height="6" fill="#ffe7a0"/>').join("") +
      brick(0, 150, 400, 74, "#6a4b3c", "#553a2e") +
      tag("BIG GHOST", 20, 202, 42, WHT, -5) + tag("LTD", 270, 214, 26, MINT, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="36" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="356" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(290, 44, 106, "State St") + sign(300, 70, 96, "Pearl St") +
      ghost(18, 106, .7),
      sky("c5", "#0c0c22", "#3a2c4e"));
  }

  window.SCENES = { thruway: thruway, blog: blog, hideout: hideout, falls: falls, corner: corner };
})();
