/* Desiigner game (NYC map, Brooklyn: Bed-Stuy). The G underground at Myrtle-Willoughby Avs, the Louis Armstrong Houses where he grew up
   (a black-and-white "Panda" truck rolling by), the round Garden on 7th Av where G.O.O.D. Music was announced, the Hudson St radio booth
   where Flex dropped bombs on "Panda", and Lafayette Av & Marcy Av with the giant Magnolia tree of Bed-Stuy. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}.ch{animation:chase .8s linear infinite}.ch2{animation-delay:.4s}' +
    '@keyframes drop{0%{transform:translateY(-60px);opacity:0}15%{opacity:1}80%{opacity:1}100%{transform:translateY(70px);opacity:0}}.bomb{animation:drop 1.8s ease-in infinite}.bomb2{animation-delay:-.6s}.bomb3{animation-delay:-1.2s}' +
    '@keyframes ring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.ring{transform-box:fill-box;transform-origin:50% 50%;animation:ring 1.4s ease-out infinite}.ring2{animation-delay:-.7s}' +
    '@keyframes fall{0%{transform:translate(0,-10px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translate(-30px,170px) rotate(220deg);opacity:0}}.pet{animation:fall 5s linear infinite}.pet2{animation-delay:-1.7s}.pet3{animation-delay:-3.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const G = "#6cbe45", GOLD = "#d4af37", WHITE = "#f4f1ea", INK = "#111214", BRICK = "#8e3b2a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* the "Panda": a black-and-white SUV, no badges */
  const panda = (y) => '<g transform="translate(0,' + y + ')"><path d="M4 18q2-14 14-16h40q10 0 18 10l10 2q6 2 6 8v6H4z" fill="' + WHITE + '"/>' +
    '<path d="M22 4h34q8 0 14 9H18z" fill="' + INK + '"/><rect x="4" y="22" width="88" height="5" fill="' + INK + '"/>' +
    '<circle cx="22" cy="28" r="8" fill="' + INK + '"/><circle cx="22" cy="28" r="3.5" fill="#bbb"/><circle cx="74" cy="28" r="8" fill="' + INK + '"/><circle cx="74" cy="28" r="3.5" fill="#bbb"/>' +
    '<rect x="88" y="16" width="5" height="3" fill="#fff6c2"/></g>';

  /* 1. Myrtle-Willoughby Avs, underground on the G: white tile wall with the green trim band, the black sign with the green G, the G pulling in */
  function myrtlewill() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d6cc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 30v120" stroke="#d9d6cc" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#2b2d31"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#3a3c41"/>' + [60, 180, 300].map(x => '<rect class="flk" x="' + x + '" y="10" width="60" height="6" rx="2" fill="#fffbe0"/>').join("") +
      '<rect x="0" y="30" width="400" height="120" fill="#efece4"/>' + tiles +
      '<rect x="0" y="44" width="400" height="10" fill="' + G + '"/><rect x="0" y="54" width="400" height="3" fill="#3e7d2a"/>' +
      /* sign */
      '<rect x="64" y="64" width="272" height="30" rx="3" fill="#111"/><rect x="64" y="64" width="272" height="3" fill="#fff"/>' +
      '<text x="78" y="86" ' + font + ' font-size="14" fill="#fff">Myrtle-Willoughby Avs</text>' + bullet(316, 79, "G", G) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="104" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="112" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "G", G) +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="12" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#55575c"/>' +
      '<rect x="0" y="172" width="400" height="4" fill="#8a8c90"/>' +
      '<text x="200" y="214" text-anchor="middle" ' + font + ' font-size="11" fill="' + WHITE + '" letter-spacing="3">BED-STUY · BROOKLYN</text>' +
      '<rect x="150" y="228" width="100" height="14" rx="3" fill="#1f2a1a"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="' + G + '">TO COURT SQ</text>',
      "");
  }

  /* 2. The Louis Armstrong Houses: red-brick walk-ups, lit windows, the black-and-white Panda truck rolling down the block */
  function armstrong() {
    let b = "";
    [[10, 70, 120], [140, 54, 130], [280, 70, 112]].forEach(([x, y, w]) => {
      b += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (178 - y) + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="5" fill="#6d2c1f"/>';
      for (let yy = y + 14; yy < 160; yy += 22) for (let xx = x + 10; xx < x + w - 12; xx += 22) b += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="12" height="14" fill="#ffd98a" opacity=".85"/><rect x="' + xx + '" y="' + (yy + 14) + '" width="12" height="2" fill="#d9c2a0"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      '<circle cx="356" cy="34" r="14" fill="#f3efe0" opacity=".9"/>' + b +
      '<rect x="190" y="150" width="30" height="28" fill="#2a1a14"/><rect x="186" y="146" width="38" height="5" fill="#c9b79a"/>' +
      '<rect x="0" y="178" width="400" height="8" fill="#9ea3a8"/>' +
      [30, 120, 330].map(x => '<rect x="' + x + '" y="156" width="4" height="22" fill="#5b4632"/><circle cx="' + (x + 2) + '" cy="150" r="14" fill="#2f5d34"/>').join("") +
      '<rect x="0" y="186" width="400" height="74" fill="#4a4c51"/><path d="M0 222h400" stroke="#e8e3d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car">' + panda(196) + '</g>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="11" fill="' + WHITE + '" letter-spacing="3">ARMSTRONG HOUSES</text>' +
      tag("PANDA", 290, 252, 20, WHITE, -3),
      sky("s2", "#141a33", "#4b3b6a"));
  }

  /* 3. The round Garden on 7th Av: the pale drum, the glass entrance, the chasing marquee, the crowd lined up, cabs rolling by */
  function garden() {
    let ribs = "";
    for (let x = 70; x <= 330; x += 20) ribs += '<path d="M' + x + ' 52v92" stroke="#b9b4aa" stroke-width="2"/>';
    let bulbs = "";
    for (let x = 96; x < 306; x += 12) bulbs += '<circle class="ch' + (x % 24 ? "" : " ch2") + '" cx="' + x + '" cy="150" r="2.4" fill="#fff3a8"/>';
    let crowd = "";
    for (let x = 20; x < 390; x += 14) crowd += '<circle cx="' + x + '" cy="' + (196 + (x % 3) * 2) + '" r="5" fill="#141414"/><rect x="' + (x - 5) + '" y="' + (200 + (x % 3) * 2) + '" width="10" height="16" rx="4" fill="#141414"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(8) +
      '<rect x="0" y="70" width="40" height="120" fill="#2b2f45"/><rect x="360" y="60" width="40" height="130" fill="#2b2f45"/>' +
      /* the drum */
      '<path d="M50 60q150-30 300 0v120H50z" fill="#d9d4c8"/><path d="M50 60q150-30 300 0" stroke="#efeae0" stroke-width="6" fill="none"/>' + ribs +
      '<path d="M50 144h300" stroke="#a49e92" stroke-width="3"/>' +
      /* entrance glass and marquee */
      '<rect x="90" y="144" width="220" height="40" fill="#1d2840"/>' + bulbs +
      '<text class="flk" x="200" y="172" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">TONIGHT · SOLD OUT</text>' +
      '<rect x="0" y="184" width="400" height="76" fill="#4a4c51"/><rect x="0" y="184" width="400" height="4" fill="#8a8c90"/>' + crowd +
      '<g class="car"><rect x="0" y="232" width="46" height="14" rx="4" fill="#f2c80f"/><rect x="10" y="226" width="24" height="8" rx="2" fill="#f2c80f"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="46" height="14" rx="4" fill="#f2c80f"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>' +
      '<text x="200" y="36" text-anchor="middle" ' + font + ' font-size="11" fill="' + WHITE + '" letter-spacing="3">7TH AV · MIDTOWN</text>',
      sky("s3", "#0d1230", "#3c2f63"));
  }

  /* 4. The radio booth on Hudson St: mic on the arm, the red ON AIR light, the board, and the bombs dropping on the record */
  function radio() {
    let faders = "";
    for (let x = 70; x < 330; x += 18) faders += '<rect x="' + x + '" y="196" width="4" height="30" fill="#2a2a2a"/><rect class="bl bl' + (x % 3 + 1) + '" x="' + (x - 3) + '" y="' + (200 + (x % 5) * 4) + '" width="10" height="6" rx="1" fill="#e7e7e7"/>';
    let leds = "";
    for (let x = 70; x < 330; x += 10) leds += '<rect class="bl bl' + (x % 3 + 1) + '" x="' + x + '" y="186" width="6" height="4" fill="' + (x > 280 ? "#e23b3b" : G) + '"/>';
    const bomb = (x, cls) => '<g class="bomb ' + cls + '"><circle cx="' + x + '" cy="60" r="12" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/><rect x="' + (x - 3) + '" y="44" width="6" height="6" fill="#555"/><path d="M' + x + ' 44q4-8 10-6" stroke="#c98a2b" stroke-width="2" fill="none"/><circle cx="' + (x + 10) + '" cy="38" r="2.5" fill="#ffd23f"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      /* foam panels */
      (() => { let f = ""; for (let y = 0; y < 170; y += 24) for (let x = 0; x < 400; x += 24) f += '<rect x="' + x + '" y="' + y + '" width="22" height="22" fill="#23262e"/><path d="M' + (x + 4) + ' ' + (y + 6) + 'h14M' + (x + 4) + ' ' + (y + 12) + 'h14M' + (x + 4) + ' ' + (y + 18) + 'h14" stroke="#2c3039" stroke-width="2"/>'; return f; })() +
      /* booth window */
      '<rect x="240" y="30" width="140" height="90" rx="4" fill="#0e1622" stroke="#555" stroke-width="4"/><text x="310" y="64" text-anchor="middle" ' + font + ' font-size="10" fill="#7d8796" letter-spacing="2">HUDSON ST</text>' +
      '<g class="flk"><rect x="262" y="78" width="96" height="26" rx="4" fill="#e23b3b"/><text x="310" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" letter-spacing="2">ON AIR</text></g>' +
      bomb(60, "") + bomb(130, "bomb2") + bomb(200, "bomb3") +
      /* mic on an arm */
      '<path d="M40 180l40-50l50 10" stroke="#888" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="124" y="128" width="20" height="34" rx="9" fill="#2b2b2b" stroke="#999" stroke-width="2"/>' +
      '<circle class="ring" cx="134" cy="145" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="ring ring2" cx="134" cy="145" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* the board */
      '<path d="M30 180h340l20 80H10z" fill="#3a3d45"/>' + leds + faders +
      '<circle cx="350" cy="214" r="14" fill="#1b1b1b"/><circle cx="350" cy="214" r="4" fill="' + GOLD + '"/>',
      sky("s4", "#15171d", "#262a34"));
  }

  /* 5. Lafayette Av & Marcy Av: the giant Magnolia tree in front of the brownstones, green street signs, DESIIGNER tagged on the wall */
  function corner() {
    let blooms = "";
    for (let i = 0; i < 22; i++) blooms += '<circle cx="' + (150 + (i * 37) % 120) + '" cy="' + (40 + (i * 23) % 80) + '" r="3.2" fill="#fbf7ee"/>';
    let petals = "";
    [[200, 60, ""], [240, 50, "pet2"], [170, 70, "pet3"]].forEach(([x, y, c]) => petals += '<ellipse class="pet ' + c + '" cx="' + x + '" cy="' + y + '" rx="4" ry="2.5" fill="#fbf7ee"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' +
      /* brownstones */
      [[0, 60], [70, 52], [140, 60], [210, 52], [280, 60]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="68" height="' + (176 - y) + '" fill="#6b4231"/><rect x="' + x + '" y="' + y + '" width="68" height="8" fill="#4e2f22"/>' +
        '<rect x="' + (x + 10) + '" y="' + (y + 20) + '" width="14" height="22" fill="#2a1a12"/><rect x="' + (x + 40) + '" y="' + (y + 20) + '" width="14" height="22" fill="#2a1a12"/><rect x="' + (x + 10) + '" y="' + (y + 56) + '" width="14" height="22" fill="#2a1a12"/><rect x="' + (x + 40) + '" y="' + (y + 56) + '" width="14" height="22" fill="#2a1a12"/>').join("") +
      /* the magnolia */
      '<g class="tree"><rect x="198" y="96" width="14" height="84" fill="#5a4636"/><path d="M205 120l-30-30M205 110l34-34" stroke="#5a4636" stroke-width="7"/>' +
      '<ellipse cx="205" cy="74" rx="92" ry="56" fill="#2d5a2e"/><ellipse cx="160" cy="86" rx="46" ry="34" fill="#356b36"/><ellipse cx="252" cy="80" rx="48" ry="36" fill="#356b36"/>' + blooms + '</g>' + petals +
      /* wall */
      '<rect x="0" y="150" width="400" height="80" fill="#3d3f45"/>' +
      (() => { let b = ""; for (let y = 156; y < 230; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#33353a" stroke-width="1"/>'; return b; })() +
      tag("DESIIGNER", 14, 206, 38, WHITE, -5) + tag("L.O.D.", 230, 222, 20, GOLD, -4) + tag("GRRRAH", 250, 182, 16, G, -3) +
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="40" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="30" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="356" y="64" width="5" height="168" fill="#3d4b3f"/>' +
      '<rect x="290" y="66" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Lafayette Av</text>' +
      '<rect x="302" y="92" width="94" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="349" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Marcy Av</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("s5", "#7fb8e6", "#f4d6b4"));
  }

  window.SCENES = { myrtlewill: myrtlewill, armstrong: armstrong, garden: garden, radio: radio, corner: corner };
})();
