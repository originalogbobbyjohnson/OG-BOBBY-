/* Long Island opening scenes for the Hus Kingpin game ("Lord Wavy", "Wavo", 16 Waves, Waterworld). Each one is a small
   animated SVG, 400 x 260. Other Long Island games already use Wyandanch, Jones Beach, the LIE, the Sound, Freeport,
   Adelphi, Roosevelt Field and Hempstead village / Hofstra / the Coliseum / Belmont, so these rooms follow the waves:
   the LIRR Long Beach Branch at Long Beach, the Long Beach boardwalk with surfers, the black-and-white Fire Island
   Lighthouse over the dunes, the Big Duck in Flanders, and Edwards Blvd & W Park Av in Long Beach. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 5s linear infinite}.car2{animation-delay:-2.5s}' +
    '@keyframes carb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:carb 6s linear infinite}.carb2{animation-delay:-3s}' +
    '@keyframes walk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.wk{animation:walk 11s linear infinite}.wk2{animation-delay:-4s}.wk3{animation-delay:-7.5s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}' +
    '.wv{animation:wave 3s ease-in-out infinite}.wv2{animation-delay:-1.5s}' +
    '@keyframes surf{0%{transform:translate(-60px,0)}50%{transform:translate(200px,-6px)}100%{transform:translate(460px,0)}}' +
    '.sf{animation:surf 8s linear infinite;animation-delay:-2s}.sf2{animation-delay:-6s}' +
    '@keyframes beam{0%,100%{transform:rotate(-35deg)}50%{transform:rotate(35deg)}}' +
    '.bm{transform-box:fill-box;transform-origin:50% 0%;animation:beam 4s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.gull{animation:glide 12s linear infinite}.gull2{animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".7"><ellipse cx="0" cy="0" rx="22" ry="8"/><ellipse cx="14" cy="-5" rx="14" ry="8"/><ellipse cx="-12" cy="-3" rx="11" ry="6"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const carShape = (c) => '<rect x="0" y="-12" width="44" height="12" rx="3" fill="' + c + '"/><path d="M8 -12l6-8h16l6 8z" fill="' + c + '"/><path d="M15 -13l4-5h6v5zM27 -13v-5h3l4 5z" fill="#cfe6ff"/>' +
    '<circle cx="10" cy="0" r="4" fill="#111"/><circle cx="34" cy="0" r="4" fill="#111"/><circle cx="43" cy="-8" r="1.8" fill="#fff6c2"/>';
  const person = (col) => '<circle cx="6" cy="-14" r="3.5" fill="#1b2430"/><rect x="2.5" y="-10" width="7" height="11" rx="2" fill="' + col + '"/><path d="M4 1v5M8 1v5" stroke="#1b2430" stroke-width="2"/>';
  const gull = (x, y) => '<path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#fff" stroke-width="1.6" fill="none"/>';
  const waves = (y, col, cls) => { let d = "M-40 " + y; for (let x = -40; x < 440; x += 30) d += "q7.5-7 15 0t15 0"; return '<path class="' + cls + '" d="' + d + 'V260H-40z" fill="' + col + '"/>'; };
  const TEAL = "#3fd0e0", GOLD = "#f2c14e", CORAL = "#ff7a59", WHITE = "#f7f3ea", LIRR = "#0039a6";
  const F = 'font-family="Helvetica, Arial, sans-serif"';

  /* 1. LIRR Long Beach Branch pulling into Long Beach at sunset: at grade, end of the line, palm-free beach town,
        the station canopy, the ocean light behind */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffcf6b" opacity=".95"/>' +
      '<g class="gull">' + gull(40, 40) + '</g><g class="gull gull2">' + gull(90, 26) + '</g>' +
      /* low beach-town buildings */
      '<rect x="0" y="80" width="80" height="46" fill="#7a5a6a"/><rect x="84" y="66" width="60" height="60" fill="#8a6878"/><rect x="250" y="84" width="80" height="42" fill="#7a5a6a"/><rect x="334" y="70" width="66" height="56" fill="#8a6878"/>' +
      /* canopy */
      '<path d="M0 52h400v6H0z" fill="#56606c"/><rect x="30" y="58" width="5" height="70" fill="#2b3440"/><rect x="198" y="58" width="5" height="70" fill="#2b3440"/><rect x="366" y="58" width="5" height="70" fill="#2b3440"/>' +
      '<circle class="flk" cx="110" cy="62" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="290" cy="62" r="3" fill="#ffe7a8"/>' +
      /* station sign */
      '<rect x="96" y="70" width="208" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="95" text-anchor="middle" ' + F + ' font-weight="700" font-size="19" fill="#fff">Long Beach</text>' +
      '<text x="104" y="106" ' + F + ' font-size="7" fill="#dbe6f3">LONG BEACH BRANCH</text>' +
      '<rect x="262" y="98" width="36" height="10" rx="2" fill="' + LIRR + '"/><text x="280" y="106" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">LIRR</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="126" width="304" height="56" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="304" height="6" fill="' + LIRR + '"/>' + windows +
        '<path d="M300 130h8q4 0 4 6v20h-12z" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="304" cy="174" r="4" fill="#fff6c2"/>' +
        '<text x="160" y="177" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#334">LIRR · LONG BEACH</text>' +
      '</g>' +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1a1d22"/>' +
      tag("WAVY", 24, 240, 32, TEAL, -4) + tag("WAVO", 290, 244, 30, GOLD, -7),
      sky("g1", "#3b3a6b", "#f29a6b"));
  }

  /* 2. The Long Beach boardwalk: grey planks on pilings, the beach, surfers riding the swell, gulls overhead */
  function boardwalk() {
    let planks = "";
    for (let x = 0; x < 400; x += 8) planks += '<path d="M' + x + ' 196v18" stroke="#8d7f6c" stroke-width="1"/>';
    let piles = "";
    for (let x = 6; x < 400; x += 36) piles += '<rect x="' + x + '" y="214" width="6" height="46" fill="#5a4a3a"/>';
    const surfer = (cls, y, col) => '<g class="sf ' + cls + '"><g transform="translate(0 ' + y + ')"><path d="M-12 0q12 4 26 0l-4 3h-18z" fill="' + GOLD + '"/>' +
      '<circle cx="1" cy="-17" r="3.5" fill="#1b2430"/><path d="M1 -13v8M1 -11l-7 3M1 -11l7-4M1 -5l-5 5M1 -5l5 5" stroke="' + col + '" stroke-width="2.4" stroke-linecap="round"/></g></g>';
    let walkers = "";
    [["", "#f4f1e8"], ["wk2", CORAL], ["wk3", TEAL]].forEach(([c, col]) => {
      walkers += '<g class="wk ' + c + '"><g transform="translate(0 194)">' + person(col) + '</g></g>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld">' + cloud(60, 28, 1) + '</g><g class="cld cld2">' + cloud(120, 44, .7) + '</g>' +
      '<g class="gull">' + gull(60, 50) + gull(84, 44) + '</g>' +
      /* ocean */
      '<rect x="0" y="96" width="400" height="80" fill="#1f7fa8"/>' +
      waves(110, "#2a93bd", "wv") + surfer("", 118, "#1b2430") +
      waves(130, "#38a9cf", "wv wv2") + surfer("sf2", 140, CORAL) +
      waves(152, "#e9f6fb", "wv") +
      /* sand */
      '<path d="M0 160q200-10 400 0v40H0z" fill="#e8d4a2"/>' +
      '<rect x="40" y="160" width="4" height="20" fill="#c0392b"/><path d="M42 160l-16 8h32z" fill="' + CORAL + '"/>' +
      /* boardwalk */
      '<rect x="0" y="190" width="400" height="6" fill="#bcae98"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#d6bf8a"/><rect x="0" y="214" width="400" height="46" fill="#000" opacity=".18"/>' +
      '<rect x="0" y="196" width="400" height="18" fill="#a59680"/>' + planks + piles +
      '<path d="M0 182h400" stroke="#e6e1d6" stroke-width="2"/><path d="M10 182v8M70 182v8M130 182v8M190 182v8M250 182v8M310 182v8M370 182v8" stroke="#e6e1d6" stroke-width="2"/>' +
      walkers +
      '<rect x="280" y="146" width="104" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="332" y="158" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">Boardwalk</text>',
      sky("g2", "#6fb3e6", "#d8ecf7"));
  }

  /* 3. The Fire Island Lighthouse at dusk: tall tower in black and white bands, black lantern, the beam sweeping,
        the dunes and beach grass below */
  function lighthouse() {
    const bands = [0, 1, 2, 3].map(i => {
      const y0 = 70 + i * 32, y1 = y0 + 16, w0 = 16 + i * 4.5, w1 = 16 + (i + 0.5) * 4.5;
      return '<path d="M' + (200 - w0) + ' ' + y0 + 'L' + (200 + w0) + ' ' + y0 + 'L' + (200 + w1) + ' ' + y1 + 'L' + (200 - w1) + ' ' + y1 + 'z" fill="#111"/>';
    }).join("");
    let grass = "";
    for (let x = 4; x < 400; x += 9) grass += '<path d="M' + x + ' 214q2-12 ' + (x % 2 ? 4 : -3) + ' -18" stroke="#8a9a4a" stroke-width="1.5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(16) +
      '<g class="bm"><path d="M200 56l-150 40h300z" fill="#fff6c2" opacity=".22"/></g>' +
      /* tower */
      '<path d="M184 70L216 70L234 200H166z" fill="#f4f1e8"/>' + bands +
      '<rect x="180" y="62" width="40" height="8" fill="#222"/>' +
      '<rect x="186" y="44" width="28" height="18" fill="#ffe7a8" class="flk"/><path d="M186 44v18M193 44v18M200 44v18M207 44v18M214 44v18" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M182 44l18-14 18 14z" fill="#222"/><rect x="198" y="22" width="4" height="10" fill="#222"/>' +
      '<rect x="176" y="62" width="48" height="3" fill="#222"/>' +
      /* keeper's house */
      '<rect x="236" y="168" width="60" height="32" fill="#f4f1e8"/><path d="M232 168l34-16 34 16z" fill="#6b3a2a"/><rect x="246" y="178" width="10" height="12" fill="#ffd96b"/><rect x="276" y="178" width="10" height="12" fill="#ffd96b"/>' +
      /* dunes */
      '<path d="M0 200q60-22 120-6t140-4 140 8v62H0z" fill="#d9c08a"/>' + grass +
      '<rect x="0" y="230" width="400" height="30" fill="#c9ae76"/>' +
      tag("16 WAVES", 30, 250, 22, TEAL, -4),
      sky("g3", "#141a3a", "#d4846a"));
  }

  /* 4. The Big Duck in Flanders: the white concrete duck building with its orange-yellow bill, a door in its chest,
        on the farm lawn by the road, cars rolling by */
  function duck() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld">' + cloud(40, 30, 1) + '</g><g class="cld cld2">' + cloud(110, 22, .8) + '</g>' +
      '<rect x="0" y="150" width="400" height="58" fill="#6aaa4a"/>' +
      (function () { let t = ""; for (let x = -10; x < 410; x += 30) t += '<circle cx="' + x + '" cy="' + (148 + (x * 5) % 8) + '" r="16" fill="#3f7a3a"/>'; return t; })() +
      '<rect x="0" y="150" width="400" height="58" fill="#6aaa4a" opacity=".001"/>' +
      '<rect x="0" y="156" width="400" height="52" fill="#76b450"/>' +
      /* the duck */
      '<g class="bob">' +
      '<ellipse cx="190" cy="168" rx="78" ry="34" fill="#f7f7f2" stroke="#c9c9c0" stroke-width="2"/>' +
      '<path d="M116 158q-20-10-14-28 10 12 26 16z" fill="#f7f7f2" stroke="#c9c9c0" stroke-width="2"/>' +
      '<path d="M236 150q10-28 4-52 14-30 40-20 18 10 10 34-6 14-20 20-6 10-8 24z" fill="#f7f7f2" stroke="#c9c9c0" stroke-width="2"/>' +
      '<path d="M294 92q22 2 34 10-14 8-34 6z" fill="#f2a52b" stroke="#c77b14" stroke-width="1.5"/>' +
      '<circle cx="280" cy="86" r="4" fill="#d22a2a"/><circle cx="281" cy="85" r="1.3" fill="#fff"/>' +
      '<path d="M150 170q30 14 70 0" stroke="#d8d8cf" stroke-width="3" fill="none"/>' +
      '<rect x="186" y="172" width="18" height="28" rx="9" fill="#5a3a26"/><circle cx="200" cy="188" r="1.5" fill="' + GOLD + '"/>' +
      '</g>' +
      '<ellipse cx="190" cy="204" rx="86" ry="5" fill="#3f6a2a" opacity=".5"/>' +
      /* road */
      '<rect x="0" y="208" width="400" height="10" fill="#aab0b5"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#2c2f33"/><path d="M0 240h400" stroke="#eab308" stroke-width="2"/>' +
      '<g class="car"><g transform="translate(0 236)">' + carShape(CORAL) + '</g></g>' +
      '<g class="carb"><g transform="translate(0 258) scale(-1 1) translate(-44 0)">' + carShape(TEAL) + '</g></g>' +
      '<rect x="20" y="182" width="4" height="28" fill="#1d2329"/><rect x="2" y="168" width="96" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="50" y="180" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">Flanders Rd</text>',
      sky("g4", "#7fbbe4", "#e3f0f7"));
  }

  /* 5. Edwards Blvd and W Park Av in Long Beach at night: street signs, a streetlight, the wall with the name on it */
  function corner() {
    let b = "";
    for (let y = 70; y < 220; y += 12) for (let x = 20 + ((y / 12) % 2 ? 0 : 12); x < 250; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#2f3a44"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(22) +
      '<rect x="0" y="40" width="40" height="180" fill="#1d2a36"/><rect x="330" y="30" width="70" height="190" fill="#1d2a36"/>' +
      (function () { let w = ""; for (let y = 44; y < 210; y += 14) w += '<rect x="340" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 28 ? .8 : .25) + '"/><rect x="360" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity="' + (y % 42 ? .3 : .85) + '"/><rect x="380" y="' + y + '" width="8" height="6" fill="#ffd96b" opacity=".55"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#26313b"/>' + b +
      tag("HUS KINGPIN", 30, 132, 30, TEAL, -7) + tag("WINNERS", 34, 198, 26, GOLD, -4) + tag("WAVY", 160, 204, 28, CORAL, -9) +
      '<rect x="292" y="56" width="5" height="164" fill="#1d2329"/><path d="M294 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M310 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M310 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="248" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Edwards Blvd</text>' +
      '<rect x="256" y="110" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="298" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">W Park Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><g transform="translate(0 236)">' + carShape(TEAL) + '</g></g>',
      sky("g5", "#0a1626", "#1f3a52"));
  }

  window.SCENES = { train, boardwalk, lighthouse, duck, corner };
})();
