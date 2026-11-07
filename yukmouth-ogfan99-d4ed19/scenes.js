/* yukmouth scenes (Regions tab: The Bay Area; East Oakland, "the Ville"). CSS classes prefixed yk- (the page's own anim-train is kept).
   1 Eastmont Transit Center, 73rd Ave by the old Eastmont Mall: an AC Transit bus pulling into the bays (lines 73, 40, 45, NL).
   2 The Ville: the 65th Village townhouses by the Coliseum where he was born and raised, outside stairs, palms, a kid on a bike.
   3 Westlake Middle School by Lake Merritt, where he met Numskull and the Luniz started: the old school front, flag, kids out front.
   4 The Ice Cream truck on triple gold Daytons ("Free at Last": Pimp of the Year, Ice Cream Man), rolling down International Blvd, the wire wheels spinning.
   5 73rd Ave and Bancroft Ave: green signs, YUKMOUTH tagged, a jet coming down into Oakland Airport over the East Oakland flats behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ykflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.yk-flk{animation:ykflick 2.2s infinite}.yk-flk2{animation-delay:.7s}' +
    '@keyframes ykcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.yk-car{animation:ykcar 7s linear infinite}.yk-car2{animation-delay:-3.5s}' +
    '@keyframes ykcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.yk-carL{animation:ykcarL 8s linear infinite}.yk-carL2{animation-delay:-4s}' +
    '@keyframes yktruck{from{transform:translateX(-300px)}to{transform:translateX(480px)}}.yk-truck{animation:yktruck 9s linear infinite;animation-delay:-4.6s}' +
    '@keyframes ykspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.yk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ykspin .6s linear infinite}' +
    '@keyframes ykbike{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.yk-bike{animation:ykbike 10s linear infinite}' +
    '@keyframes ykflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.yk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ykflag 1.6s ease-in-out infinite}' +
    '@keyframes ykjet{from{transform:translate(-80px,-30px)}to{transform:translate(460px,40px)}}.yk-jet{animation:ykjet 12s linear infinite}' +
    '@keyframes yksway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.yk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:yksway 4s ease-in-out infinite}.yk-sway2{animation-delay:-2s}' +
    '@keyframes ykspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yk-sp{animation:ykspray 1.4s ease-out infinite}.yk-sp2{animation-delay:.45s}' +
    '@keyframes ykblink{0%,100%{opacity:.25}50%{opacity:1}}.yk-bl{animation:ykblink 1.6s ease-in-out infinite}.yk-bl2{animation-delay:-.8s}' +
    '@keyframes ykbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.yk-bob{animation:ykbob .9s ease-in-out infinite}.yk-bob2{animation-delay:-.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, base, h, cls) => '<g class="yk-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 0 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    [[-26, -4], [-18, 10], [24, -2], [18, 12], [0, -16]].map(d => '<path d="M' + x + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + (d[1] + 4) + '" stroke="#2f6b3a" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const AC = "#00a651", GOLD = "#f5c542", GRN = "#7ee06a", PURP = "#b06cff";

  /* 1. Eastmont Transit Center */
  function ykstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="112" width="28" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="104" width="316" height="52" rx="8" fill="#f4f6f4" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<path d="M34 140h316v8H34z" fill="' + AC + '"/><path d="M34 148h316v3H34z" fill="#1d6b4a"/>' +
      '<rect x="190" y="106" width="8" height="48" fill="#3a3e46"/>' +
      '<path d="M334 106q16 2 16 18v22h-18z" fill="#1f2a33"/><rect x="334" y="108" width="14" height="9" rx="1" fill="#111"/><text x="341" y="115.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">73</text>' +
      '<circle cx="84" cy="158" r="8" fill="#111"/><circle cx="164" cy="158" r="8" fill="#111"/><circle cx="300" cy="158" r="8" fill="#111"/><circle cx="346" cy="146" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yks1)"/>' +
      /* the long low mall building behind */
      '<rect x="0" y="70" width="400" height="56" fill="#cdb894"/><rect x="0" y="66" width="400" height="6" fill="#a8916a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (8 + i * 40) + '" y="82" width="26" height="30" fill="#5a6a72"/>').join("") +
      /* bay canopies */
      '<rect x="20" y="58" width="360" height="8" fill="#7a8a94"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="96" fill="#5a6a74"/>').join("") +
      palm(14, 166, 80) + palm(388, 166, 70, "yk-sway2") +
      bus +
      '<rect x="0" y="166" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="176" width="400" height="84" fill="#3c3d42"/><path d="M0 222h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("yk-car", 0, 200, "#c94a3a") + car("yk-carL", 0, 240, PURP) +
      '<rect x="50" y="10" width="300" height="44" rx="3" fill="#111"/><text x="64" y="30" ' + font + ' font-size="15" fill="#fff">Eastmont Transit Center</text>' +
      badge(64, 43, "73", AC) + badge(100, 43, "40", AC) + badge(136, 43, "45", AC) + badge(172, 43, "NL", AC) +
      '<text x="336" y="47" text-anchor="end" ' + font + ' font-size="9" fill="#bfc7d0" letter-spacing="2">EAST OAKLAND</text>',
      sky("yks1", "#f2a65a", "#fde3b0"));
  }

  /* 2. The Ville: 65th Village townhouses */
  function ykville() {
    const unit = (x, c) => '<g><rect x="' + x + '" y="92" width="76" height="86" fill="' + c + '"/><path d="M' + (x - 4) + ' 94l42 -24l42 24z" fill="#7a4a3a"/>' +
      '<rect x="' + (x + 8) + '" y="104" width="22" height="18" fill="#2b3a44"/><rect x="' + (x + 46) + '" y="104" width="22" height="18" fill="#2b3a44"/>' +
      '<rect x="' + (x + 8) + '" y="140" width="22" height="38" fill="#5a3d2c"/><rect x="' + (x + 46) + '" y="140" width="22" height="18" fill="#2b3a44"/>' +
      '<path d="M' + (x + 36) + ' 178l16 -40h10" stroke="#e8e2d6" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yks2)"/>' +
      '<path d="M0 92l70 -26l90 14l100 -30l140 26v20H0z" fill="#6a7a5a" opacity=".55"/>' +
      unit(10, "#e9d7b6") + unit(110, "#d8c29e") + unit(210, "#e9d7b6") + unit(310, "#d8c29e") +
      palm(100, 180, 96) + palm(300, 180, 86, "yk-sway2") +
      '<rect x="0" y="178" width="400" height="12" fill="#c9c3b6"/><rect x="0" y="190" width="400" height="70" fill="#4a4b50"/>' +
      '<g class="yk-bike"><circle cx="20" cy="226" r="9" fill="none" stroke="#111" stroke-width="3"/><circle cx="50" cy="226" r="9" fill="none" stroke="#111" stroke-width="3"/><path d="M20 226l12 -14h14l4 14M32 212l-4 -6h-6" stroke="' + GRN + '" stroke-width="3" fill="none"/><circle cx="36" cy="196" r="5" fill="#3a2a22"/><path d="M36 201l2 12" stroke="#c94a3a" stroke-width="5"/></g>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">THE VILLE · EAST OAKLAND</text>',
      sky("yks2", "#8fcbe8", "#f4e8cf"));
  }

  /* 3. Westlake Middle School */
  function ykschool() {
    const wins = (y) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (66 + i * 34) + '" y="' + y + '" width="20" height="24" fill="#3a4a5a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yks3)"/>' +
      '<rect x="0" y="150" width="400" height="20" fill="#5aa0c8" opacity=".5"/>' +
      '<rect x="50" y="70" width="300" height="110" fill="#e6d8bc"/><rect x="46" y="64" width="308" height="8" fill="#b8a27a"/>' +
      wins(84) + wins(124) +
      '<rect x="176" y="140" width="48" height="40" fill="#6a4a36"/><path d="M168 140h64l-8 -12h-48z" fill="#b8a27a"/>' +
      '<text x="200" y="60" text-anchor="middle" ' + font + ' font-size="12" fill="#3a2e22" letter-spacing="3">WESTLAKE</text>' +
      '<rect x="372" y="60" width="3" height="120" fill="#666"/><g class="yk-flag"><rect x="375" y="62" width="22" height="14" fill="#c0392b"/><rect x="375" y="62" width="10" height="7" fill="#1f3a8a"/></g>' +
      '<rect x="0" y="180" width="400" height="14" fill="#c9c3b6"/><rect x="0" y="194" width="400" height="66" fill="#4a4b50"/>' +
      [70, 110, 290, 330].map((x, i) => '<g class="yk-bob ' + (i % 2 ? "yk-bob2" : "") + '"><circle cx="' + x + '" cy="176" r="5" fill="#3a2a22"/><rect x="' + (x - 5) + '" y="181" width="10" height="12" rx="2" fill="' + [GRN, PURP, GOLD, "#e2574c"][i] + '"/></g>').join("") +
      car("yk-carL", 0, 230, "#d0d4da") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">WHERE THE LUNIZ STARTED</text>',
      sky("yks3", "#a9d3f2", "#f6efe2"));
  }

  /* 4. The Ice Cream truck on gold Daytons */
  function yktruck() {
    const wire = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="13" fill="#1a1a1a"/><circle cx="' + cx + '" cy="' + cy + '" r="9" fill="' + GOLD + '"/><g class="yk-spin">' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + 8 * Math.cos(a)).toFixed(1) + ' ' + (cy + 8 * Math.sin(a)).toFixed(1) + '" stroke="#8a6a12" stroke-width="1.5"/>'; }).join("") + '</g><circle cx="' + cx + '" cy="' + cy + '" r="2.5" fill="#fff3c4"/>';
    const truck = '<g class="yk-truck"><rect x="40" y="120" width="170" height="70" rx="6" fill="#f7f4ee" stroke="#9aa0a6" stroke-width="2"/>' +
      '<rect x="210" y="140" width="56" height="50" rx="6" fill="#f7f4ee" stroke="#9aa0a6" stroke-width="2"/><rect x="226" y="146" width="34" height="20" rx="3" fill="#2b3a44"/>' +
      '<rect x="64" y="132" width="90" height="34" rx="3" fill="#2b3a44"/><rect x="64" y="166" width="90" height="5" fill="#c0c4c8"/>' +
      '<path d="M40 120h170" stroke="' + PURP + '" stroke-width="6"/><path d="M40 182h226" stroke="' + GRN + '" stroke-width="4"/>' +
      '<text x="109" y="154" text-anchor="middle" ' + font + ' font-size="13" fill="#ffd56b">ICE CREAM</text>' +
      '<circle cx="182" cy="108" r="8" fill="#f4a0c0"/><path d="M176 112l6 12l6 -12z" fill="#d8a85a"/>' +
      wire(80, 192) + wire(236, 192) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yks4)"/>' +
      '<g fill="#3a3550"><rect x="0" y="100" width="80" height="80"/><rect x="90" y="86" width="60" height="94"/><rect x="250" y="94" width="70" height="86"/><rect x="330" y="106" width="70" height="74"/></g>' +
      '<g fill="#ffe7a0"><rect class="yk-bl" x="16" y="116" width="10" height="8"/><rect class="yk-bl yk-bl2" x="110" y="104" width="10" height="8"/><rect class="yk-bl" x="270" y="112" width="10" height="8"/><rect class="yk-bl yk-bl2" x="350" y="124" width="10" height="8"/></g>' +
      '<rect x="0" y="178" width="400" height="6" fill="#c9c3b6"/><rect x="0" y="184" width="400" height="76" fill="#3a3b40"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      truck +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="11" fill="#f4e8ff" letter-spacing="2">INTERNATIONAL BLVD · TRIPLE GOLD DAYTONS</text>',
      sky("yks4", "#1c1436", "#6a3a7a"));
  }

  /* 5. 73rd Ave and Bancroft Ave */
  function ykcorner() {
    const jet = '<g class="yk-jet"><path d="M60 60l40 0l10 -4l-6 8z" fill="#e8ecf2"/><path d="M78 60l-10 10h8l12 -10z" fill="#c8ccd2"/><path d="M60 60l-6 -8h6l6 8z" fill="#c8ccd2"/><circle class="yk-bl" cx="108" cy="58" r="2" fill="#ff5a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yks5)"/>' + jet +
      '<g fill="#2b2848"><rect x="0" y="108" width="60" height="28"/><rect x="70" y="100" width="40" height="36"/><rect x="250" y="104" width="50" height="32"/><rect x="310" y="96" width="36" height="40"/><rect x="352" y="110" width="48" height="26"/></g>' +
      palm(140, 136, 60) + palm(200, 136, 70, "yk-sway2") +
      '<rect x="0" y="130" width="400" height="94" fill="#3f5a4a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#33493c" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#33493c" stroke-width="1"/>').join("")).join("") +
      tag("YUKMOUTH", 18, 192, 40, GRN, -6) + tag("LUNIZ", 40, 218, 20, GOLD, -4) + tag("THE TOWN", 140, 218, 18, PURP, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(260, 98, 130, "73rd Av") + sign(250, 124, 140, "Bancroft Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="yk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="yk-sp"><circle cx="232" cy="170" r="3" fill="' + GRN + '" opacity=".7"/></g><g class="yk-sp yk-sp2"><circle cx="238" cy="164" r="2" fill="' + GRN + '" opacity=".6"/></g>',
      sky("yks5", "#1f2a4a", "#e8875a"));
  }

  window.SCENES = { ykstation: ykstation, ykville: ykville, ykschool: ykschool, yktruck: yktruck, ykcorner: ykcorner };
})();
