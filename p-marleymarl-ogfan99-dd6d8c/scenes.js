/* Marley Marl producer game: Queensbridge, Queens. 21 St-Queensbridge station, the Bridge, the radio booth, the House of Hits, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 3s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-80px)}}.wv{animation:wave 2s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd23f", RED = "#e2483d", BLUE = "#4fb3d9", ORANGE = "#ff6319", BRICK = "#9a4a34", BRICK2 = "#7c3a29";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* Queensboro Bridge: cantilever towers + truss, light gray-tan steel */
  const bridge = (y, op) => {
    let s = '<g opacity="' + (op || 1) + '">';
    s += '<rect x="0" y="' + (y + 26) + '" width="400" height="8" fill="#8f9295"/>';
    [40, 150, 260, 370].forEach(x => {
      s += '<rect x="' + (x - 6) + '" y="' + (y - 34) + '" width="12" height="70" fill="#9da0a3"/><path d="M' + (x - 6) + ' ' + (y - 34) + 'l6-10 6 10z" fill="#9da0a3"/>' +
        '<rect x="' + (x - 8) + '" y="' + (y + 34) + '" width="16" height="50" fill="#6f6c66"/>';
    });
    [[40, 150], [150, 260], [260, 370]].forEach(([a, b]) => {
      const m = (a + b) / 2;
      s += '<path d="M' + a + ' ' + (y - 34) + 'Q' + m + ' ' + (y + 18) + ' ' + b + ' ' + (y - 34) + '" fill="none" stroke="#9da0a3" stroke-width="3"/>';
      for (let x = a + 10; x < b; x += 10) s += '<path d="M' + x + ' ' + (y + 26) + 'L' + (x + 5) + ' ' + (y + 4) + '" stroke="#9da0a3" stroke-width="1.3"/>';
    });
    return s + '</g>';
  };

  /* 1. F train pulling into 21 St-Queensbridge, underground */
  function station() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cdd2cb" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cdd2cb" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let cols = "";
    [26, 374].forEach(x => { cols += '<rect x="' + (x - 7) + '" y="0" width="14" height="186" fill="#26303a"/>'; });
    return svg(
      '<rect width="400" height="176" fill="#e6e9e2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="22" width="400" height="10" fill="#c9773a"/><rect x="0" y="32" width="400" height="3" fill="#8c4f22"/>' +
      '<rect x="46" y="46" width="308" height="36" rx="4" fill="#111"/><rect x="46" y="46" width="308" height="4" fill="#fff"/>' +
      '<text x="60" y="72" ' + font + ' font-size="17" fill="#fff">21 St - Queensbridge</text>' + bullet(330, 65, "F", ORANGE) +
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="304" height="5" fill="' + ORANGE + '"/>' + windows +
        '<circle cx="304" cy="166" r="4" fill="#fff6c2"/>' + bullet(292, 132, "F", ORANGE) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#14171c"/>' + cols +
      tag("MARL", 48, 242, 34, GOLD, -5) + tag("JUICE", 250, 242, 32, RED, -8));
  }

  /* 2. The Bridge: Queensbridge Houses brick buildings under the Queensboro Bridge at dusk, traffic crossing */
  function thebridge() {
    let bld = "";
    const block = (x, y, w, h) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="' + BRICK2 + '"/>';
      for (let r = y + 10; r < y + h - 10; r += 14) for (let c = x + 6; c < x + w - 8; c += 14)
        s += '<rect x="' + c + '" y="' + r + '" width="7" height="8" fill="' + (((r + c) / 2) % 3 < 1 ? "#ffd98a" : "#2c2430") + '"/>';
      return s;
    };
    bld += block(10, 150, 110, 84) + block(130, 160, 70, 74) + block(214, 146, 116, 88) + block(340, 156, 60, 78);
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(18) +
      '<circle cx="330" cy="40" r="16" fill="#ffe7a8" opacity=".9"/>' +
      bridge(96) +
      '<g class="car"><rect x="0" y="116" width="16" height="6" rx="2" fill="' + GOLD + '"/></g>' +
      '<g class="car car2"><rect x="0" y="116" width="16" height="6" rx="2" fill="#f2f2f2"/></g>' +
      '<g class="carL"><rect x="0" y="117" width="16" height="5" rx="2" fill="' + RED + '"/></g>' +
      bld +
      '<rect x="0" y="234" width="400" height="26" fill="#2b2b2e"/><path d="M0 246h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="138" y="196" width="52" height="30" rx="3" fill="#1a1a1a" stroke="#555" stroke-width="2"/><circle cx="152" cy="211" r="9" fill="#333" stroke="#888"/><circle cx="176" cy="211" r="9" fill="#333" stroke="#888"/>' +
      '<circle class="bl" cx="152" cy="211" r="4" fill="' + GOLD + '"/><circle class="bl bl3" cx="176" cy="211" r="4" fill="' + GOLD + '"/>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" opacity=".85" letter-spacing="3">THE BRIDGE</text>',
      sky("s2", "#1a1440", "#d96a3a"));
  }

  /* 3. The radio booth: two turntables spinning, ON AIR light, mixer, 107.5 FM */
  function radio() {
    let eq = "";
    for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (182 + i * 8) + '" y="150" width="5" height="26" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    const deck = x => '<rect x="' + x + '" y="150" width="120" height="74" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="' + (x + 52) + '" cy="187" r="30" fill="#0b0b0b"/><circle cx="' + (x + 52) + '" cy="187" r="22" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 52) + '" cy="187" r="10" fill="' + RED + '"/><rect x="' + (x + 50) + '" y="178" width="4" height="5" fill="#fff"/></g>' +
      '<path d="M' + (x + 104) + ' 160l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a24"/>' +
      '<rect x="0" y="0" width="400" height="130" fill="#2a2433"/>' +
      '<rect x="24" y="22" width="150" height="86" rx="4" fill="#0f2633" stroke="#55565c" stroke-width="4"/><rect x="30" y="28" width="138" height="74" fill="#16384a" opacity=".8"/>' +
      '<g fill="#0a1a24"><rect x="36" y="64" width="14" height="38"/><rect x="54" y="48" width="12" height="54"/><rect x="70" y="72" width="16" height="30"/><rect x="92" y="40" width="10" height="62"/><path d="M92 40l5-12 5 12z"/><rect x="108" y="58" width="18" height="44"/><rect x="132" y="70" width="12" height="32"/><rect x="148" y="54" width="14" height="48"/></g>' + (() => { let w = ""; for (let i = 0; i < 18; i++) w += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (40 + (i * 23) % 118) + '" y="' + (60 + (i * 13) % 36) + '" width="2" height="3" fill="#ffd98a"/>'; return w; })() +
      '<rect x="230" y="26" width="120" height="40" rx="6" fill="#3a0f10" stroke="#111" stroke-width="3"/>' +
      '<rect class="bl" x="236" y="32" width="108" height="28" rx="4" fill="' + RED + '"/><text x="290" y="53" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">ON AIR</text>' +
      '<text x="290" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + GOLD + '">107.5 FM</text>' +
      '<rect x="0" y="130" width="400" height="10" fill="#3a3340"/><rect x="0" y="140" width="400" height="120" fill="#4a3a2c"/>' +
      deck(18) + deck(262) +
      '<rect x="146" y="144" width="108" height="86" rx="4" fill="#3b3d44" stroke="#62646c" stroke-width="2"/>' + eq +
      '<rect x="160" y="186" width="80" height="4" fill="#111"/><rect x="190" y="181" width="12" height="14" rx="2" fill="#ddd"/>' +
      '<circle cx="162" cy="210" r="5" fill="#222" stroke="#999"/><circle cx="200" cy="210" r="5" fill="#222" stroke="#999"/><circle cx="238" cy="210" r="5" fill="#222" stroke="#999"/>' +
      '<path d="M200 140v-26" stroke="#222" stroke-width="4"/><rect x="190" y="96" width="20" height="26" rx="10" fill="#555b66" stroke="#222" stroke-width="2"/>');
  }

  /* 4. The House of Hits: the home studio, sampler pads flashing, tape reels turning, sound wave rolling */
  function houseofhits() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (60 + c * 26) + '" y="' + (190 + r * 22) + '" width="20" height="16" rx="2" fill="' + (r ? GOLD : RED) + '"/>';
    let wave = "";
    for (let x = 0; x < 480; x += 8) { const h = 4 + ((x * 37) % 22); wave += '<rect x="' + x + '" y="' + (80 - h / 2) + '" width="4" height="' + h + '" fill="' + BLUE + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#2a1d18"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3a2a22"/>' +
      '<rect x="20" y="16" width="200" height="110" rx="4" fill="#0e1118" stroke="#6b5a4a" stroke-width="4"/>' +
      '<clipPath id="cw"><rect x="24" y="20" width="192" height="102"/></clipPath><g clip-path="url(#cw)"><g class="wv">' + wave + '</g></g>' +
      '<path d="M24 80h192" stroke="#1f3a4a" stroke-width="1"/>' +
      '<rect x="240" y="16" width="140" height="44" rx="4" fill="#120c08" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="310" y="45" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" fill="' + GOLD + '" textLength="120" lengthAdjust="spacingAndGlyphs">HOUSE OF HITS</text>' +
      '<rect x="244" y="70" width="132" height="70" rx="4" fill="#555"/>' +
      '<g class="rl"><circle cx="280" cy="100" r="22" fill="#222" stroke="#999" stroke-width="2"/><path d="M280 80v40M260 100h40" stroke="#999" stroke-width="3"/></g>' +
      '<g class="rl"><circle cx="340" cy="100" r="22" fill="#222" stroke="#999" stroke-width="2"/><path d="M340 80v40M320 100h40" stroke="#999" stroke-width="3"/></g>' +
      '<path d="M258 122h104" stroke="#3b2a1a" stroke-width="3"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3e2b"/><rect x="0" y="150" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="40" y="168" width="140" height="74" rx="4" fill="#8e9297" stroke="#4a4d52" stroke-width="2"/>' +
      '<rect x="48" y="174" width="60" height="12" fill="#1f3a26"/><text x="52" y="184" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#7cf08a">SNARE 01</text>' +
      '<circle cx="128" cy="180" r="4" fill="#333"/><circle cx="146" cy="180" r="4" fill="#333"/><circle cx="164" cy="180" r="4" fill="#333"/>' + pads +
      '<rect x="210" y="176" width="160" height="62" rx="4" fill="#1c1c1f" stroke="#444" stroke-width="2"/>' +
      (() => { let k = ""; for (let i = 0; i < 14; i++) k += '<rect x="' + (216 + i * 11) + '" y="200" width="10" height="34" fill="#f4f1ea" stroke="#333" stroke-width=".8"/>'; for (let i = 0; i < 13; i++) if (i % 7 !== 2 && i % 7 !== 6) k += '<rect x="' + (223 + i * 11) + '" y="200" width="6" height="20" fill="#111"/>'; return k; })() +
      '<circle class="bl" cx="226" cy="188" r="3" fill="' + RED + '"/><circle class="bl bl2" cx="238" cy="188" r="3" fill="' + GOLD + '"/>');
  }

  /* 5. The corner: Vernon Blvd & 41 Av, green signs, MARLEY MARL tag on the wall, Queensboro Bridge behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      bridge(70, .9) +
      '<g class="car car3"><rect x="0" y="90" width="14" height="5" rx="2" fill="#fff"/></g>' +
      '<rect x="0" y="120" width="400" height="104" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 126; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("MARLEY MARL", 22, 196, 40, GOLD, -5) + tag("JUICE CREW", 150, 216, 20, RED, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="268" y="44" width="122" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="329" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Vernon Blvd</text>' +
      '<rect x="296" y="70" width="72" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="332" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">41 Av</text>' +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#5a3a6a"));
  }

  window.SCENES = { station: station, thebridge: thebridge, radio: radio, houseofhits: houseofhits, corner: corner };
})();
