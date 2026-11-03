/* Jansport J producer game: Covina, CA (the 626). Covina Metrolink station, the West Covina record store, the beat room, the orange groves under the San Gabriels, the downtown Covina corner. 400 x 260 SVGs. */
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
  const ORG = "#f39a2b", SKYB = "#5ab0e0", GRN = "#3f8a4a", CRM = "#f4ead2";
  const mtns = (y, snow) => '<path d="M0 ' + y + 'l60-46 40 24 70-62 60 50 50-30 70 44 50-24v' + (260 - y + 40) + 'h-400z" fill="#6a6f8e"/>' + (snow ? '<path d="M150 ' + (y - 84) + 'l20-0 -10-0zM160 ' + (y - 84) + 'l-16 14 8-2 8 6 8-6 8 2z" fill="#f6f6fa"/>' : '');
  const orange = (x, y) => '<g><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="22" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="18" fill="#2f6a34"/>' + [[-8, -10], [6, -2], [-2, 4], [9, -14]].map(d => '<circle cx="' + (x + d[0]) + '" cy="' + (y - 6 + d[1]) + '" r="3" fill="' + ORG + '"/>').join("") + '</g>';

  /* 1. Covina station on the Metrolink San Bernardino Line: the commuter train pulling in, the San Gabriel Mountains behind */
  function station() {
    let win = ""; for (let x = 26; x < 300; x += 34) win += '<rect x="' + x + '" y="102" width="22" height="16" rx="2" fill="#dff1ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j1)"/>' + mtns(120, true) +
      '<rect x="20" y="20" width="170" height="30" rx="3" fill="#123a6a"/><text x="105" y="41" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Covina</text>' +
      '<g class="anim-train">' +
        '<rect x="10" y="88" width="300" height="64" rx="8" fill="#eef0f2" stroke="#7a8088" stroke-width="2"/>' + win +
        '<rect x="10" y="126" width="300" height="7" fill="#123a6a"/><rect x="10" y="134" width="300" height="4" fill="' + SKYB + '"/>' +
        '<circle cx="302" cy="144" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="154" width="400" height="10" fill="#eab308"/><rect x="0" y="164" width="400" height="32" fill="#a8a29a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a3632"/>' + orange(360, 170) +
      tag("JANSPORT J", 24, 244, 34, ORG, -5) + tag("626", 300, 240, 30, SKYB, -6),
      sky("j1", "#f0a868", "#ffe0b0"));
  }

  /* 2. The record store in West Covina where he bought Donuts the day Dilla passed: racks of vinyl, the listening deck spinning */
  function shop() {
    let bins = ""; for (let i = 0; i < 18; i++) bins += '<rect x="' + (24 + i * 9) + '" y="' + (150 + (i % 3) * 2) + '" width="7" height="44" fill="' + [ORG, SKYB, "#d0573a", CRM, "#7a5ea8", GRN][i % 6] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#f2e6cc"/><rect x="0" y="0" width="400" height="40" fill="#c23a2b"/>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="6" fill="#ffd34e">RECORDS</text>' +
      '<rect x="20" y="56" width="180" height="70" fill="#e8d8b8" stroke="#c9b48a" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (30 + i * 42) + '" y="64" width="36" height="36" fill="' + [SKYB, ORG, "#7a5ea8", GRN][i] + '"/><circle cx="' + (48 + i * 42) + '" cy="82" r="10" fill="#111"/>').join("") +
      '<text x="110" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="#6a4a2a" letter-spacing="2">NEW ARRIVALS</text>' +
      '<rect x="16" y="190" width="190" height="50" fill="#6e4c34"/>' + bins +
      '<rect x="230" y="150" width="150" height="90" fill="#6e4c34"/>' + turntable(250, 160, ORG) +
      '<g class="bob"><text x="300" y="100" text-anchor="middle" ' + font + ' font-size="13" fill="#c23a2b">NOW PLAYING</text></g>' +
      '<path class="bob" d="M286 120q6-10 12 0M306 114q6-10 12 0" stroke="#333" stroke-width="2" fill="none"/>');
  }

  /* 3. The beat room: the sampler pads blinking, a crate of soul records, the 626Sport tape on the shelf, meters bouncing */
  function lab() {
    return svg(
      '<rect width="400" height="260" fill="#241f1c"/><rect x="0" y="0" width="400" height="130" fill="#36404e"/>' +
      '<rect x="30" y="24" width="120" height="80" fill="#f0a868" stroke="#555" stroke-width="3"/>' + '<path d="M30 80l30-24 30 20 30-30 30 26v32h-120z" fill="#6a6f8e"/>' +
      '<rect x="190" y="40" width="160" height="8" fill="#6e4c34"/><rect x="200" y="20" width="44" height="20" rx="2" fill="#2a2a2e"/><rect x="206" y="24" width="32" height="8" fill="' + ORG + '"/>' +
      '<text x="296" y="36" text-anchor="middle" ' + font + ' font-size="11" fill="' + CRM + '">626SPORT</text>' +
      '<g class="mt"><rect x="200" y="62" width="10" height="56" fill="' + SKYB + '"/></g><g class="mt mt2"><rect x="214" y="62" width="10" height="56" fill="' + ORG + '"/></g><g class="mt mt3"><rect x="228" y="62" width="10" height="56" fill="' + GRN + '"/></g>' +
      '<rect x="0" y="130" width="400" height="130" fill="#5a3e2b"/><rect x="0" y="130" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="40" y="146" width="120" height="96" rx="6" fill="#8c9096" stroke="#4a4d52" stroke-width="2"/><rect x="50" y="154" width="50" height="14" fill="#1f3a26"/>' + pads(50, 182, ORG, SKYB).replace(/width="17" height="13"/g, 'width="16" height="14"').replace(/x="(\d+)"/g, (m, x) => 'x="' + (50 + (x - 50) * 1.1) + '"').replace(/y="(\d+)"/g, (m, y) => 'y="' + (182 + (y - 182) * 1.2) + '"') +
      '<rect x="190" y="170" width="170" height="70" fill="#7a5a3a"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (198 + i * 16) + '" y="' + (150 + (i % 2) * 6) + '" width="12" height="60" fill="' + [ORG, SKYB, CRM, "#d0573a", GRN][i % 5] + '"/>').join(""));
  }

  /* 4. The orange groves under the San Gabriel Mountains, the old Covina citrus country, Mt. Baldy capped with snow, sprinklers ticking */
  function groves() {
    let rows = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) rows += orange(30 + c * 58 + (r % 2) * 28, 160 + r * 34);
    return svg(
      '<rect width="400" height="260" fill="url(#j4)"/>' +
      '<path d="M0 120l70-50 50 26 80-70 70 56 60-34 70 50v80h-400z" fill="#7a7fa0"/><path d="M180 44l20-18 20 16-8 4-12-8-10 10z" fill="#f6f6fa"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#b9a86a"/>' + rows +
      '<g class="bob"><circle cx="330" cy="40" r="20" fill="#ffd96a"/></g>' +
      '<g class="car"><rect x="0" y="244" width="40" height="12" rx="4" fill="#d0573a"/></g>',
      sky("j4", "#5ab0e0", "#ffe6b8"));
  }

  /* 5. The corner in downtown Covina: Citrus Ave and Badillo St, JANSPORT J tagged, the San Gabriels and Mt. Baldy behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#j5)"/>' +
      '<path d="M0 140l70-50 50 26 80-70 70 56 60-34 70 50v40h-400z" fill="#5e6488"/><path d="M180 64l20-18 20 16-8 4-12-8-10 10z" fill="#f6f6fa"/>' +
      '<g class="bob"><path d="M30 150q4-40 0-80M30 70q-14 0-24 8M30 70q14 0 24 8M30 70q-6-8-18-10M30 70q6-8 18-10" stroke="#2f5a3a" stroke-width="4" fill="none"/></g>' +
      brick(0, 150, 400, 74, "#c98a5a", "#a86e46") +
      tag("JANSPORT J", 22, 204, 42, ORG, -5) + tag("626SPORT", 220, 216, 24, SKYB, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car car2"><rect x="0" y="236" width="40" height="12" rx="3" fill="#d0573a"/></g>' +
      '<rect x="340" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 120, "Citrus Ave") + sign(286, 70, 104, "Badillo St"),
      sky("j5", "#f08a5a", "#ffd8a0"));
  }

  window.SCENES = { station: station, shop: shop, lab: lab, groves: groves, corner: corner };
})();
