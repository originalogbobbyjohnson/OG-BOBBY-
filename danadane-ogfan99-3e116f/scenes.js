/* Dana Dane game (NYC map, Brooklyn: Fort Greene - born in the Walt Whitman Houses, "the project that they called Fort Greene").
   The B54 pulling up to Myrtle Av & St Edwards St, the Walt Whitman Houses courtyard, the Delancey Street bargain strip on the Lower East Side
   (his 1986 single), the Midtown satellite-radio booth where he hosted classic hip-hop radio for six years, and Myrtle Av & Carlton Av with
   the Whitman Houses towers behind. 400 x 260 SVGs. Classes and ids prefixed dd-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ddcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.dd-car{animation:ddcar 7s linear infinite}.dd-car2{animation-delay:-3.5s}' +
    '@keyframes ddblink{0%,100%{opacity:.3}50%{opacity:1}}.dd-bl{animation:ddblink 1.8s ease-in-out infinite}.dd-bl2{animation-delay:.6s}.dd-bl3{animation-delay:1.2s}' +
    '@keyframes ddflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.dd-flk{animation:ddflick 2.4s infinite}' +
    '@keyframes ddfly{0%{transform:translate(0,0)}50%{transform:translate(60px,-18px)}100%{transform:translate(120px,0)}}.dd-fly{animation:ddfly 5s ease-in-out infinite alternate}.dd-fly2{animation-delay:-1.6s}.dd-fly3{animation-delay:-3.1s}' +
    '@keyframes ddsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.dd-sway{transform-box:fill-box;transform-origin:50% 0%;animation:ddsway 2.2s ease-in-out infinite}.dd-sway2{animation-delay:-1.1s}' +
    '@keyframes ddmeter{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.dd-mt{transform-box:fill-box;transform-origin:50% 100%;animation:ddmeter .7s ease-in-out infinite}.dd-mt2{animation-delay:.2s}.dd-mt3{animation-delay:.45s}' +
    '@keyframes ddspin{to{transform:rotate(360deg)}}.dd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ddspin 2s linear infinite}' +
    '@keyframes ddbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dd-bob{animation:ddbob .8s ease-in-out infinite}.dd-bob2{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const pigeon = (x, y, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" stroke="#d8d8de" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>';
  const LAV = "#c6a7ff", GOLD = "#f2c94c", CREAM = "#f4ead8", BRICK = "#9a4a34", BLUE = "#0039a6";

  /* a six-story Whitman Houses block: red-brown brick, rows of windows, flat roof with a water tank shed */
  const block = (x, y, w, h, lit) => {
    let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/>' +
      '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#6e3022"/>' +
      '<rect x="' + (x + w / 2 - 9) + '" y="' + (y - 14) + '" width="18" height="10" fill="#6e3022"/>';
    for (let yy = y + 8; yy < y + h - 10; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 13)
      g += '<rect ' + (lit ? 'class="dd-bl dd-bl' + ((xx + yy) % 3 + 1) + '" ' : "") + 'x="' + xx + '" y="' + yy + '" width="7" height="8" fill="' + (lit ? "#ffd98a" : "#2c3440") + '" opacity="' + (lit ? ".8" : ".95") + '"/>';
    return g;
  };

  /* 1. Myrtle Av & St Edwards St: the B54 pulling up to the bus stop, the blue stop flag, Fort Greene brick behind */
  function myrtle() {
    let win = "";
    for (let x = 40; x < 270; x += 30) win += '<rect x="' + x + '" y="128" width="22" height="22" rx="2" fill="#bcd7ee" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ddm)"/>' +
      block(10, 52, 120, 120, false) + block(150, 66, 110, 106, false) + block(280, 46, 112, 126, false) +
      txt("WALT WHITMAN HOUSES", 200, 30, 10, CREAM, 'letter-spacing="3" opacity=".75"') +
      '<rect x="0" y="172" width="400" height="12" fill="#8a8c90"/><rect x="0" y="184" width="400" height="76" fill="#4a4c52"/>' +
      '<path d="M0 222h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="118" width="270" height="74" rx="8" fill="#f2f2f0" stroke="#9aa0a8" stroke-width="2"/>' + win +
        '<rect x="20" y="158" width="270" height="10" fill="' + BLUE + '"/>' +
        '<rect x="272" y="124" width="16" height="36" rx="2" fill="#bcd7ee"/>' +
        '<rect x="232" y="108" width="54" height="12" rx="2" fill="#111"/><text x="259" y="117.5" text-anchor="middle" ' + font + ' font-size="9" fill="#ffb02e">B54 MYRTLE</text>' +
        '<circle cx="70" cy="194" r="11" fill="#1b1b1b"/><circle cx="70" cy="194" r="4" fill="#888"/><circle cx="246" cy="194" r="11" fill="#1b1b1b"/><circle cx="246" cy="194" r="4" fill="#888"/>' +
        '<circle cx="286" cy="176" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop flag */
      '<rect x="330" y="86" width="5" height="100" fill="#5e636b"/>' +
      '<rect x="306" y="62" width="54" height="56" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="312" y="68" width="42" height="18" rx="9" fill="#fff"/><text x="333" y="81.5" text-anchor="middle" ' + font + ' font-size="12" fill="' + BLUE + '">B54</text>' +
      txt("Myrtle Av", 333, 98, 8, "#fff") + txt("St Edwards St", 333, 110, 7.5, "#fff") +
      person(370, 156, "#1b1b1b", "dd-bob") +
      txt("FORT GREENE, BROOKLYN", 200, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("ddm", "#f6b37a", "#7d6aa6"));
  }

  /* 2. The Walt Whitman Houses courtyard: brick blocks all around, benches, the London plane trees, pigeons wheeling, laundry-day sky */
  function whitman() {
    const tree = (x, y, s) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (34 * s) + '" fill="#6b5a44"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (20 * s) + '" fill="#3f7d3a"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 4) + '" r="' + (13 * s) + '" fill="#4f9146"/><circle cx="' + (x + 13 * s) + '" cy="' + (y + 3) + '" r="' + (12 * s) + '" fill="#47883f"/>';
    const bench = x => '<rect x="' + x + '" y="204" width="54" height="5" fill="#2f6b4a"/><rect x="' + x + '" y="194" width="54" height="4" fill="#2f6b4a"/><rect x="' + (x + 4) + '" y="209" width="3" height="12" fill="#333"/><rect x="' + (x + 47) + '" y="209" width="3" height="12" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ddw)"/>' +
      block(0, 40, 130, 150, false) + block(140, 22, 120, 168, false) + block(270, 40, 130, 150, false) +
      pigeon(70, 30, "dd-fly") + pigeon(100, 22, "dd-fly dd-fly2") + pigeon(130, 34, "dd-fly dd-fly3") +
      '<rect x="0" y="190" width="400" height="70" fill="#9ea1a4"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 40) p += '<path d="M' + x + ' 190v70" stroke="#8a8d90" stroke-width="1"/>'; return p; })() +
      '<path d="M0 226h400" stroke="#2a2a2a" stroke-width="2"/>' +
      (() => { let f = ""; for (let x = 4; x < 400; x += 10) f += '<path d="M' + x + ' 214v12" stroke="#2a2a2a" stroke-width="1.5"/>'; return f; })() +
      tree(60, 160, 1) + tree(340, 160, 1) + tree(200, 170, .8) +
      bench(100) + bench(246) +
      person(118, 172, "#26324a", "dd-bob") + person(268, 172, "#4a2638", "dd-bob dd-bob2") +
      txt("THE PROJECT THAT THEY CALLED FORT GREENE", 200, 248, 10, "#1b1b1b", 'letter-spacing="1.5"'),
      sky("ddw", "#8ec5f0", "#e9f2fa"));
  }

  /* 3. Delancey Street on the Lower East Side: the bargain strip, awnings, racks of coats out front, hats on a pole, shoppers walking by */
  function delancey() {
    const store = (x, w, awn, stripe, label) => {
      let a = '<rect x="' + x + '" y="60" width="' + w + '" height="132" fill="#c9b79a" stroke="#8a7a62" stroke-width="1"/>';
      for (let yy = 70; yy < 112; yy += 20) for (let xx = x + 8; xx < x + w - 14; xx += 22) a += '<rect x="' + xx + '" y="' + yy + '" width="12" height="14" fill="#3a4250"/>';
      a += '<path d="M' + x + ' 118h' + w + 'l-8 18h' + (-(w - 16)) + 'z" fill="' + awn + '"/>';
      for (let xx = x + 6; xx < x + w - 6; xx += 16) a += '<path d="M' + xx + ' 118h8l-2 18h-6z" fill="' + stripe + '" opacity=".9"/>';
      a += '<rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="52" fill="#2a2f38"/>' + '<rect x="' + (x + w / 2 - 40) + '" y="120" width="80" height="14" rx="3" fill="#1b1b1b" opacity=".85"/>' + txt(label, x + w / 2, 131, 9, "#fff");
      return a;
    };
    const rack = x => '<rect x="' + x + '" y="166" width="46" height="3" fill="#bbb"/><rect x="' + (x + 2) + '" y="166" width="2" height="40" fill="#bbb"/><rect x="' + (x + 42) + '" y="166" width="2" height="40" fill="#bbb"/>' +
      ['#7a2e3a', '#2e4a7a', '#3a6a3a', '#c79a2e', '#4b2e6a'].map((c, i) => '<path class="dd-sway' + (i % 2 ? ' dd-sway2' : '') + '" d="M' + (x + 6 + i * 8) + ' 169h7l2 26h-11z" fill="' + c + '"/>').join("");
    const hat = (x, y, c) => '<path d="M' + (x - 9) + ' ' + y + 'q9-14 18 0z" fill="' + c + '"/><rect x="' + (x - 11) + '" y="' + y + '" width="22" height="3" rx="1.5" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ddd)"/>' +
      store(0, 132, "#b8323a", "#f2e6d0", "COATS • SUITS") + store(134, 132, "#2f5f8a", "#f2e6d0", "HATS • CAPS") + store(268, 132, "#2f7a4a", "#f2e6d0", "SHOES • BAGS") +
      '<rect x="0" y="192" width="400" height="22" fill="#a6a39c"/><rect x="0" y="214" width="400" height="46" fill="#4a4c52"/>' +
      rack(12) + rack(330) +
      /* hat tree out front of the hat shop */
      '<rect x="198" y="148" width="3" height="58" fill="#6b5a44"/>' + hat(190, 156, "#1b1b1b") + hat(210, 166, "#c6a7ff") + hat(190, 178, "#c0392b") +
      person(110, 180, "#1b1b1b", "dd-bob") + person(280, 182, "#3a2a50", "dd-bob dd-bob2") +
      '<g class="dd-car"><rect x="0" y="228" width="50" height="16" rx="5" fill="#f2c94c"/><rect x="8" y="222" width="30" height="9" rx="3" fill="#f2c94c"/><circle cx="12" cy="245" r="4.5" fill="#111"/><circle cx="38" cy="245" r="4.5" fill="#111"/></g>' +
      /* the green street sign */
      '<rect x="160" y="8" width="5" height="44" fill="#3d4b3f"/><rect x="112" y="10" width="102" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Delancey St", 163, 25, 12, "#fff") +
      txt("LOWER EAST SIDE", 320, 24, 10, "#2a2a2a", 'letter-spacing="2"'),
      sky("ddd", "#bfe0f5", "#f6efe4"));
  }

  /* 4. The Midtown radio booth: classic hip-hop on the satellite, the ON AIR light, a mic on the boom, meters dancing, city lights through the glass */
  function booth() {
    let city = "";
    [[10, 60, 30], [44, 40, 26], [74, 70, 34], [112, 30, 24], [140, 55, 30], [174, 48, 28]].forEach(b => {
      city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (120 - b[1]) + '" fill="#1c2240"/>';
      for (let y = b[1] + 6; y < 116; y += 10) for (let x = b[0] + 4; x < b[0] + b[2] - 4; x += 8) city += '<rect class="dd-bl dd-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="3" height="4" fill="#ffe08a"/>';
    });
    let meters = "";
    for (let i = 0; i < 8; i++) meters += '<rect class="dd-mt' + (i % 3 ? " dd-mt" + (i % 3 + 1) : "") + '" x="' + (262 + i * 12) + '" y="170" width="8" height="34" fill="' + (i < 5 ? "#4cd37a" : i < 7 ? GOLD : "#e5484d") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241d33"/>' +
      /* window to Sixth Avenue */
      '<rect x="0" y="14" width="210" height="110" fill="url(#ddb)"/>' + [[22, 26], [70, 22], [128, 24], [168, 30], [196, 20], [96, 34]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.2" fill="#fff" opacity=".8"/>').join("") + city +
      '<rect x="0" y="12" width="212" height="4" fill="#4b4060"/><rect x="208" y="12" width="4" height="114" fill="#4b4060"/><rect x="0" y="122" width="212" height="4" fill="#4b4060"/>' +
      txt("SIXTH AVENUE", 105, 140, 9, "#b9a8d8", 'letter-spacing="3"') +
      /* acoustic foam */
      (() => { let f = ""; for (let y = 16; y < 120; y += 14) for (let x = 224; x < 400; x += 14) f += '<rect x="' + x + '" y="' + y + '" width="12" height="12" fill="' + ((x + y) % 28 ? "#3a2f50" : "#33294a") + '"/>'; return f; })() +
      /* ON AIR light */
      '<rect x="270" y="26" width="92" height="30" rx="6" fill="#2a0c10" stroke="#5a1a22" stroke-width="2"/>' +
      '<text class="dd-flk" x="316" y="48" text-anchor="middle" ' + font + ' font-size="18" fill="#ff4d5a">ON AIR</text>' +
      /* desk + board */
      '<rect x="0" y="150" width="400" height="110" fill="#17121f"/><rect x="0" y="150" width="400" height="6" fill="#3d3350"/>' +
      '<rect x="240" y="160" width="140" height="56" rx="4" fill="#0e0b14" stroke="#4b4060" stroke-width="1.5"/>' + meters +
      (() => { let k = ""; for (let i = 0; i < 9; i++) k += '<rect x="' + (248 + i * 14) + '" y="226" width="6" height="18" rx="2" fill="#2a2338"/><rect x="' + (247 + i * 14) + '" y="' + (230 + (i * 5) % 10) + '" width="8" height="5" rx="1" fill="#d9d2e9"/>'; return k; })() +
      /* turntable spinning */
      '<rect x="30" y="170" width="110" height="70" rx="4" fill="#2a2338" stroke="#4b4060" stroke-width="1.5"/>' +
      '<g class="dd-spin"><circle cx="78" cy="205" r="28" fill="#111"/><circle cx="78" cy="205" r="20" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="78" cy="205" r="9" fill="' + LAV + '"/><rect x="77" y="198" width="2" height="5" fill="#111"/></g>' +
      '<path d="M128 178l-14 34" stroke="#cfcfd6" stroke-width="3" stroke-linecap="round"/>' +
      /* mic on the boom */
      '<path d="M200 150l0-40l20-26" stroke="#9aa0a8" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="212" y="58" width="22" height="34" rx="11" fill="#2b2b30" stroke="#8a8f99" stroke-width="2" transform="rotate(30 223 75)"/>' +
      '<path d="M218 66l12 18M214 72l12 18" stroke="#55555c" stroke-width="1.5" transform="rotate(30 223 75)"/>',
      sky("ddb", "#0b0f2a", "#3a2a5a"));
  }

  /* 5. Myrtle Av & Carlton Av: green street signs, the wall tagged DANA DANE, the Walt Whitman Houses towers lit up behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ddc)"/>' + stars(16) +
      block(14, 54, 96, 110, true) + block(124, 34, 90, 130, true) + block(228, 60, 88, 104, true) +
      txt("WALT WHITMAN HOUSES", 170, 22, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3e3a44"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34303a" stroke-width="1"/>'; return b; })() +
      tag("DANA DANE", 14, 200, 44, LAV, -5) + tag("KANGOL CREW", 196, 220, 18, GOLD, -4) + tag("WITH FAME", 20, 222, 14, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="dd-car dd-car2"><rect x="0" y="238" width="48" height="13" rx="4" fill="#5b7fb8"/><circle cx="11" cy="251" r="4" fill="#111"/><circle cx="37" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Myrtle Av", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Carlton Av", 348, 108, 12, "#fff") +
      '<circle class="dd-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("ddc", "#0b0a1c", "#33284a"));
  }

  window.SCENES = { myrtle: myrtle, whitman: whitman, delancey: delancey, booth: booth, corner: corner };
})();
