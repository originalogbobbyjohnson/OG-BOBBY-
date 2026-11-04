/* cage scenes (OG FAN 99 Regions) */
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

  const ORG = "#ff7a1a", ICE = "#c9d6df", PRP = "#9b59b6";
  const X = '<style>@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 6s linear infinite}.sn2{animation-delay:-2s}.sn3{animation-delay:-4s}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase .8s steps(1) infinite}.ch2{animation-delay:.4s}' +
    '@keyframes lap{from{offset-distance:0%}to{offset-distance:100%}}' +
    '@keyframes race{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.rc{animation:race 3.2s linear infinite}.rc2{animation-delay:-1.1s}.rc3{animation-delay:-2.2s}' +
    '@keyframes soar{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-10px)}}.so{animation:soar 6s ease-in-out infinite}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}</style>';
  const flakes = () => { let s = ""; for (let i = 0; i < 36; i++) s += '<circle class="sn ' + ["", "sn2", "sn3"][i % 3] + '" cx="' + ((i * 113) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>'; return s; };
  /* the Shawangunk Ridge: long ridge with white cliff bands */
  const ridge = (y, c, cliff) => '<path d="M0 ' + y + 'L60 ' + (y - 30) + 'L140 ' + (y - 46) + 'L230 ' + (y - 40) + 'L310 ' + (y - 58) + 'L400 ' + (y - 36) + 'V' + (y + 40) + 'H0z" fill="' + c + '"/>' +
    '<path d="M70 ' + (y - 28) + 'l60 -14M240 ' + (y - 36) + 'l64 -18M150 ' + (y - 40) + 'l50 4" stroke="' + cliff + '" stroke-width="4" stroke-linecap="round"/>';

  /* 1. Middletown-Town of Wallkill station on the Metro-North Port Jervis Line: the train pulling in, snow coming down, the ridge behind */
  function station() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g1)"/>' + ridge(150, "#3a4658", "#dfe6ec") +
      '<rect x="0" y="150" width="400" height="12" fill="#dfe6ec"/>' + [30, 200, 370].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="90" fill="#8a8f99"/>').join("") + '<path d="M10 64h380l-10 -12h-360z" fill="#2e3440"/>' +
      '<rect x="88" y="74" width="224" height="36" rx="3" fill="#111"/><text x="200" y="92" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Middletown-Town of Wallkill</text><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="' + ICE + '" letter-spacing="2">PORT JERVIS LINE</text>' +
      '<g class="anim-train"><rect x="0" y="120" width="90" height="58" rx="5" fill="#2a2e38" stroke="#111" stroke-width="2"/><rect x="62" y="128" width="22" height="16" rx="2" fill="#bfe3ff"/><rect x="0" y="152" width="90" height="5" fill="#c8202a"/><rect x="0" y="158" width="90" height="4" fill="#1a3a8a"/><circle cx="84" cy="168" r="3" fill="#fff6c2"/>' +
      [0, 1].map(i => '<rect x="' + (94 + i * 104) + '" y="116" width="100" height="62" rx="4" fill="#c8ccd2" stroke="#6a7280" stroke-width="2"/>' + [0, 1, 2, 3, 4].map(j => '<rect x="' + (100 + i * 104 + j * 19) + '" y="126" width="14" height="18" rx="2" fill="#2a3a4a"/>').join("") + '<rect x="' + (94 + i * 104) + '" y="152" width="100" height="5" fill="#c8202a"/><rect x="' + (94 + i * 104) + '" y="158" width="100" height="4" fill="#1a3a8a"/>').join("") + '</g>' +
      '<rect x="0" y="178" width="400" height="6" fill="#f2d21c"/><rect x="0" y="184" width="400" height="76" fill="#4a4a50"/><rect x="0" y="184" width="400" height="10" fill="#e6ecf0"/>' + flakes(),
      sky("g1", "#2a3446", "#7a8aa0"));
  }

  /* 2. The Paramount Theatre on South St in Middletown: the old 1930 movie palace, bulbs chasing round the marquee, MOVIES FOR THE BLIND up in letters */
  function paramount() {
    let bulbs = ""; for (let i = 0; i < 18; i++) bulbs += '<circle class="ch ' + (i % 2 ? "ch2" : "") + '" cx="' + (92 + i * 12.5) + '" cy="132" r="3" fill="#ffe28a"/><circle class="ch ' + (i % 2 ? "" : "ch2") + '" cx="' + (92 + i * 12.5) + '" cy="172" r="3" fill="#ffe28a"/>';
    let vb = ""; "PARAMOUNT".split("").forEach((c, i) => vb += '<text x="200" y="' + (22 + i * 11) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe28a" class="ch ' + (i % 2 ? "ch2" : "") + '">' + c + '</text>');
    return svg(X +
      '<rect width="400" height="260" fill="url(#g2)"/>' + flakes() +
      '<rect x="70" y="40" width="260" height="160" fill="#c9a77a"/>' + brick(70, 40, 260, 160, "#c9a77a", "#b8966a") +
      '<rect x="186" y="10" width="28" height="108" rx="4" fill="#5a1a1a" stroke="#ffe28a" stroke-width="2"/>' + vb +
      '<path d="M80 124h240l-12 56h-216z" fill="#2a1a2a"/><rect x="96" y="138" width="208" height="28" fill="#f6f0e0"/>' +
      '<text x="200" y="157" text-anchor="middle" ' + font + ' font-size="13" fill="#1a1a1a" letter-spacing="1">MOVIES FOR THE BLIND</text>' + bulbs +
      '<rect x="120" y="182" width="160" height="18" fill="#3a2418"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (126 + i * 38) + '" y="184" width="32" height="16" fill="#f4c66a" opacity=".7"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5d5a55"/><rect x="0" y="198" width="400" height="6" fill="#e6ecf0"/>',
      sky("g2", "#141826", "#3a3a56"));
  }

  /* 3. The Orange County Fair Speedway in Middletown: the dirt oval, modifieds sliding round the turn, the grandstand lights */
  function speedway() {
    const car = (c, n, k) => '<g class="rc ' + k + '"><rect x="0" y="0" width="44" height="12" rx="3" fill="' + c + '"/><rect x="12" y="-8" width="18" height="9" rx="2" fill="' + c + '"/><circle cx="8" cy="14" r="6" fill="#111"/><circle cx="36" cy="14" r="6" fill="#111"/><text x="22" y="9" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">' + n + '</text></g>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) +
      [40, 160, 280, 380].map(x => '<rect x="' + x + '" y="20" width="4" height="100" fill="#555"/><rect x="' + (x - 14) + '" y="16" width="32" height="10" fill="#fff6c2" class="flk"/>').join("") +
      '<rect x="0" y="80" width="400" height="56" fill="#5a5f6a"/>' + [0, 1, 2, 3, 4, 5].map(r => '<rect x="0" y="' + (84 + r * 9) + '" width="400" height="3" fill="#7a808a"/>').join("") +
      '<rect x="0" y="136" width="400" height="10" fill="#e6e6e6"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 40) + '" y="136" width="20" height="10" fill="#c8202a"/>').join("") +
      '<rect x="0" y="146" width="400" height="80" fill="#8a5a3a"/><path d="M0 170q200 -10 400 0" stroke="#a06a46" stroke-width="3" fill="none"/>' +
      '<g transform="translate(0 168)">' + car(ORG, "7", "") + '</g><g transform="translate(0 196)">' + car("#1a3a8a", "12", "rc2") + '</g><g transform="translate(0 184)">' + car("#e8e8e8", "3", "rc3") + '</g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a6a3a"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">FAIR SPEEDWAY</text>',
      sky("g3", "#0e1222", "#3a3456"));
  }

  /* 4. The Bear Mountain Bridge over the Hudson: the green suspension bridge between the hills, a hawk soaring, the river moving */
  function bearmtn() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<path d="M0 162V70Q80 40 160 162z" fill="#5a6e4a"/><path d="M400 162V60Q320 40 240 162z" fill="#4e6240"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3a5a72"/><g class="wv">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => '<path d="M' + (i * 40) + ' 186q10 -4 20 0" stroke="#8fb8d0" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="112" y="60" width="10" height="100" fill="#3e6a52"/><rect x="278" y="60" width="10" height="100" fill="#3e6a52"/><rect x="108" y="56" width="18" height="8" fill="#2e5040"/><rect x="274" y="56" width="18" height="8" fill="#2e5040"/>' +
      '<path d="M40 128Q117 60 117 60Q200 132 283 60Q283 60 360 128" stroke="#3e6a52" stroke-width="3" fill="none"/>' +
      [140, 160, 180, 200, 220, 240, 260].map(x => '<path d="M' + x + ' ' + (60 + 72 * (1 - Math.pow((x - 200) / 83, 2)) - 4) + 'V130" stroke="#3e6a52" stroke-width="1.2"/>').join("") +
      '<rect x="0" y="128" width="400" height="8" fill="#5a7a66"/><rect x="0" y="136" width="400" height="4" fill="#2e5040"/>' +
      '<g class="so"><path d="M300 40q10 -8 20 0q10 -8 20 0" stroke="#2a2a2a" stroke-width="3" fill="none"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">BEAR MOUNTAIN BRIDGE</text>',
      sky("g4", "#8fb4d0", "#e8eef2"));
  }

  /* 5. North St and Main St in Middletown: green street signs, CAGE tagged on the wall, the Shawangunk Ridge white with Hell's Winter behind */
  function corner() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#g5)"/>' + ridge(126, "#6a7a8e", "#ffffff") +
      '<rect x="0" y="122" width="400" height="102" fill="#4a3a3a"/>' + brick(0, 122, 400, 102, "#4a3a3a", "#3e3030") +
      tag("CAGE", 40, 196, 62, ORG, -6) + tag("WEATHERMEN", 40, 218, 16, ICE, -3) + tag("KENNYLZ", 180, 218, 16, PRP, -3) +
      '<g class="sp"><circle cx="214" cy="160" r="3" fill="' + ORG + '"/></g><g class="sp sp2"><circle cx="220" cy="154" r="2" fill="' + ORG + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="220" width="400" height="6" fill="#e6ecf0"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(278, 94, 118, "North St") + sign(278, 120, 118, "Main St") +
      '<rect x="8" y="104" width="4" height="120" fill="#222"/><circle class="flk" cx="10" cy="102" r="7" fill="#ffe9a8"/>' + flakes(),
      sky("g5", "#5a6a82", "#c8d2dc"));
  }

  window.SCENES = { station: station, paramount: paramount, speedway: speedway, bearmtn: bearmtn, corner: corner };
})();
