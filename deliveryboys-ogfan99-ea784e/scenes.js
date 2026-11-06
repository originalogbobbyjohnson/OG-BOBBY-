/* Delivery Boys game (NYC map, Brooklyn: Brooklyn Heights). The crew started out as delivery boys for a Brooklyn Heights deli.
   Rooms: the 2/3 pulling into Clark St (underground), the Brooklyn Heights Promenade looking at Lower Manhattan,
   the Brooklyn Bridge stone towers, the corner deli with a delivery bike rolling by, and Montague St & Henry St. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsl{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carl{animation:carsl 8s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.boat{animation:boat 14s linear infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.wv{animation:wave 3s ease-in-out infinite}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-14px);opacity:0}}.stm{animation:steam 2s ease-out infinite}.stm2{animation-delay:-1s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.2s ease-in-out infinite}' +
    '@keyframes tail{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(14deg)}}.tl{transform-box:fill-box;transform-origin:0% 100%;animation:tail 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ee352e", ORANGE = "#ff5a36", YOLK = "#ffd23f", GREEN = "#2bb673", CREAM = "#f4ead8", STONE = "#cdb88f";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* delivery e-bike with the insulated bag on the back (no logos) */
  const bike = (x, y, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')">' +
    '<circle cx="0" cy="18" r="9" fill="none" stroke="#111" stroke-width="3"/><circle cx="40" cy="18" r="9" fill="none" stroke="#111" stroke-width="3"/>' +
    '<path d="M0 18l14-14h16l10 14M14 4l8 14h8" stroke="#2b2b2b" stroke-width="3" fill="none"/><path d="M34 2l6-4" stroke="#2b2b2b" stroke-width="3"/>' +
    '<rect x="-8" y="-18" width="22" height="20" rx="2" fill="' + ORANGE + '" stroke="#7a2412" stroke-width="1.5"/><path d="M-8 -12h22" stroke="#7a2412" stroke-width="1.2"/>' +
    '<path d="M22 4l6-18h8" stroke="#1d2a44" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="31" cy="-20" r="6" fill="#1d2a44"/><rect x="25" y="-27" width="13" height="5" rx="2" fill="' + YOLK + '"/>' +
    '</g></g>';

  /* 1. Clark St (2 3), deep underground under the Heights: cream tile walls, black station sign, the 2 sliding in */
  function clarkst() {
    let tiles = "";
    for (let y = 40; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9cfb8" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 16) tiles += '<path d="M' + x + ' 30v120" stroke="#d9cfb8" stroke-width="1"/>';
    let win = "";
    for (let x = 30; x < 290; x += 36) win += '<rect x="' + x + '" y="116" width="24" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      /* tiled wall */
      '<rect x="0" y="30" width="400" height="120" fill="' + CREAM + '"/>' + tiles +
      '<rect x="0" y="62" width="400" height="10" fill="#7a3b2e"/><rect x="0" y="72" width="400" height="3" fill="#c9a24a"/>' +
      /* ceiling + fluorescent lights */
      '<rect x="0" y="0" width="400" height="30" fill="#2b2e36"/>' +
      [40, 150, 260, 370].map((x, i) => '<rect class="' + (i === 2 ? "flk" : "") + '" x="' + (x - 26) + '" y="20" width="52" height="5" rx="2" fill="#f4fbff"/>').join("") +
      /* station sign */
      '<rect x="96" y="80" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="80" width="208" height="3" fill="#fff"/>' +
      '<text x="110" y="102" ' + font + ' font-size="16" fill="#fff">Clark St</text>' + bullet(256, 96, "2", RED) + bullet(284, 96, "3", RED) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="6" y="106" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="114" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 150, "2", RED) +
        '<rect x="6" y="140" width="300" height="4" fill="' + RED + '" opacity=".8"/>' +
        '<circle cx="18" cy="154" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="162" width="400" height="10" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#5b5b60"/>' +
      /* columns on the platform */
      [60, 340].map(x => '<rect x="' + (x - 7) + '" y="172" width="14" height="88" fill="#2c4a6e"/>').join("") +
      '<rect x="150" y="196" width="100" height="22" rx="3" fill="#111"/><text x="200" y="211" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">To Brooklyn Heights</text>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">ELEVATORS TO HENRY ST</text>');
  }

  /* 2. The Brooklyn Heights Promenade: black iron railing, old lamps, hex pavers, the Lower Manhattan skyline across the East River */
  function promenade() {
    let city = "", lit = "";
    const blds = [[10, 86, 30], [44, 100, 26], [74, 70, 34], [112, 92, 24], [140, 38, 30], [176, 84, 28], [208, 96, 22], [234, 74, 30], [268, 90, 26], [298, 64, 32], [334, 88, 28], [366, 100, 30]];
    blds.forEach(([x, y, w], i) => {
      city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="' + (i % 2 ? "#26304f" : "#2e3a5e") + '"/>';
      for (let yy = y + 6; yy < 144; yy += 10) for (let xx = x + 4; xx < x + w - 4; xx += 8) lit += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffd98a" opacity=".75"/>';
    });
    /* the tall tower with its spire (no name, just the shape) */
    city += '<path d="M146 38l9-6 9 6v112h-18z" fill="#3a4a78"/><rect x="154" y="8" width="2" height="26" fill="#cfd8e8"/>';
    let rail = "";
    for (let x = 0; x <= 400; x += 14) rail += '<rect x="' + x + '" y="176" width="3" height="34" fill="#151515"/>';
    let hex = "";
    for (let r = 0; r < 3; r++) for (let x = (r % 2) * 14; x < 400; x += 28) hex += '<path d="M' + x + ' ' + (222 + r * 13) + 'l7-6h14l7 6-7 6h-14z" fill="none" stroke="#6d6458" stroke-width="1.2"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="120" width="4" height="90" fill="#151515"/><path d="M' + (x - 9) + ' 120h18l-4-14h-10z" fill="#151515"/><circle class="flk" cx="' + x + '" cy="114" r="5" fill="#fff3b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(12) + city + lit +
      /* river */
      '<rect x="0" y="150" width="400" height="26" fill="#1b2b48"/>' +
      '<g class="wv"><path d="M0 158q20 -4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#3d5a86" stroke-width="1.5" fill="none"/><path d="M0 168q20 -4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#3d5a86" stroke-width="1.5" fill="none"/></g>' +
      '<g class="boat"><path d="M0 162h56l-8 9H8z" fill="#f2f2f2"/><rect x="12" y="153" width="30" height="9" fill="' + ORANGE + '"/><rect x="16" y="155" width="5" height="4" fill="#cfe2f5"/><rect x="25" y="155" width="5" height="4" fill="#cfe2f5"/><rect x="34" y="155" width="5" height="4" fill="#cfe2f5"/></g>' +
      /* trees over the BQE behind the railing */
      '<rect x="0" y="176" width="400" height="34" fill="#1e3a2a"/>' + [20, 90, 170, 250, 320, 390].map(x => '<circle cx="' + x + '" cy="184" r="16" fill="#24472f"/>').join("") +
      /* railing */
      '<rect x="0" y="174" width="400" height="5" fill="#151515"/><rect x="0" y="198" width="400" height="3" fill="#151515"/>' + rail +
      lamp(60) + lamp(340) +
      /* walkway */
      '<rect x="0" y="210" width="400" height="50" fill="#8f8577"/>' + hex +
      /* bench */
      '<rect x="160" y="200" width="80" height="6" rx="2" fill="#2f5a3c"/><rect x="160" y="190" width="80" height="5" rx="2" fill="#2f5a3c"/><rect x="166" y="206" width="4" height="10" fill="#151515"/><rect x="230" y="206" width="4" height="10" fill="#151515"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '" letter-spacing="3">BROOKLYN HEIGHTS PROMENADE</text>',
      sky("s2", "#1a1440", "#c4603f"));
  }

  /* 3. The Brooklyn Bridge: the granite-and-limestone tower with its two pointed Gothic arches, the cables fanning down, traffic under the walkway */
  function bridge() {
    let cables = "";
    for (let i = 0; i < 9; i++) {
      const x = 30 + i * 16;
      cables += '<path d="M138 46L' + x + ' 170" stroke="#8a7b62" stroke-width="1.2"/><path d="M262 46L' + (400 - (x - 30) * 1 - 30) + ' 170" stroke="#8a7b62" stroke-width="1.2"/>';
    }
    let vert = "";
    for (let x = 10; x < 400; x += 12) { const yTop = x < 200 ? 46 + Math.pow((x - 140) / 140, 2) * 70 : 46 + Math.pow((x - 260) / 140, 2) * 70; if (x < 130 || x > 270) vert += '<path d="M' + x + ' ' + yTop.toFixed(1) + 'V170" stroke="#9c8d72" stroke-width=".8"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffd27a" opacity=".9"/>' +
      /* main cables */
      '<path d="M0 116Q70 150 138 46" stroke="#6e624d" stroke-width="3" fill="none"/><path d="M400 116Q330 150 262 46" stroke="#6e624d" stroke-width="3" fill="none"/>' +
      vert + cables +
      /* the tower */
      '<rect x="130" y="40" width="140" height="160" fill="' + STONE + '"/>' +
      '<rect x="126" y="36" width="148" height="10" fill="#bba67b"/><rect x="130" y="70" width="140" height="4" fill="#bba67b"/>' +
      '<path d="M146 200V118q0-30 22-46q22 16 22 46v82z" fill="#2f3c5a"/><path d="M210 200V118q0-30 22-46q22 16 22 46v82z" fill="#2f3c5a"/>' +
      '<path d="M146 118q0-30 22-46q22 16 22 46" fill="none" stroke="#a8946a" stroke-width="3"/><path d="M210 118q0-30 22-46q22 16 22 46" fill="none" stroke="#a8946a" stroke-width="3"/>' +
      (() => { let s = ""; for (let y = 84; y < 200; y += 12) s += '<path d="M130 ' + y + 'h16M190 ' + y + 'h20M254 ' + y + 'h16" stroke="#b9a479" stroke-width="1"/>'; return s; })() +
      /* flag on top */
      '<rect x="199" y="12" width="2" height="26" fill="#ddd"/><g class="flg"><rect x="201" y="12" width="20" height="12" fill="' + RED + '"/><rect x="201" y="12" width="9" height="6" fill="#1d3f8f"/><path d="M210 15h11M201 21h20" stroke="#fff" stroke-width="1.4"/></g>' +
      /* the walkway and roadway */
      '<rect x="0" y="170" width="400" height="8" fill="#7a5a3a"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 8) p += '<path d="M' + x + ' 170v8" stroke="#5c4229" stroke-width="1"/>'; return p; })() +
      '<rect x="0" y="178" width="400" height="6" fill="#4a4f5a"/><rect x="0" y="184" width="400" height="30" fill="#3a3e47"/>' +
      '<g class="car"><rect x="0" y="190" width="40" height="14" rx="4" fill="' + YOLK + '"/><circle cx="10" cy="204" r="4" fill="#111"/><circle cx="30" cy="204" r="4" fill="#111"/></g>' +
      '<g class="carl"><rect x="0" y="198" width="44" height="13" rx="4" fill="#d6332b"/><circle cx="10" cy="211" r="4" fill="#111"/><circle cx="34" cy="211" r="4" fill="#111"/></g>' +
      /* water below */
      '<rect x="0" y="214" width="400" height="46" fill="#1d3557"/>' +
      '<g class="wv"><path d="M0 228q20 -4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#4a6fa0" stroke-width="1.5" fill="none"/><path d="M0 244q20 -4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#4a6fa0" stroke-width="1.5" fill="none"/></g>',
      sky("s3", "#f08a5d", "#fbd38d"));
  }

  /* 4. The corner deli in the Heights where it all started: red awning, OPEN sign, a bacon egg and cheese in the window,
        the deli cat, and a delivery bike rolling past */
  function deli() {
    let brick = "";
    for (let y = 8; y < 70; y += 8) brick += '<path d="M0 ' + y + 'h400" stroke="#7a3b2a" stroke-width="1"/>';
    let stripes = "";
    for (let x = 40; x < 360; x += 20) stripes += '<rect x="' + x + '" y="74" width="10" height="26" fill="#fff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      /* brownstone/brick above */
      '<rect x="0" y="0" width="400" height="72" fill="#9a4a32"/>' + brick +
      [50, 150, 250, 330].map(x => '<rect x="' + x + '" y="14" width="34" height="44" fill="#2a3242" stroke="' + CREAM + '" stroke-width="3"/><rect class="bl" x="' + (x + 4) + '" y="18" width="12" height="16" fill="#ffd98a" opacity=".6"/>').join("") +
      /* awning */
      '<path d="M30 74h340l14 30H16z" fill="#c8102e"/>' + stripes +
      '<path d="M16 104h368" stroke="#7a0a1c" stroke-width="3"/>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" stroke="#7a0a1c" stroke-width="3" paint-order="stroke" letter-spacing="4">DELI · GROCERY</text>' +
      /* storefront */
      '<rect x="30" y="104" width="340" height="110" fill="#1c1c22"/>' +
      '<rect x="40" y="114" width="170" height="90" fill="#33465e"/><rect x="250" y="114" width="70" height="100" fill="#2a3a50"/>' +
      '<rect x="40" y="114" width="170" height="90" fill="none" stroke="#c9ced6" stroke-width="3"/><rect x="250" y="114" width="70" height="100" fill="none" stroke="#c9ced6" stroke-width="3"/>' +
      /* OPEN neon */
      '<g class="flk"><rect x="140" y="122" width="58" height="22" rx="6" fill="none" stroke="#ff4d6d" stroke-width="3"/><text x="169" y="139" text-anchor="middle" ' + font + ' font-size="14" fill="#ff8fa3">OPEN</text></g>' +
      /* bacon egg and cheese on a roll */
      '<path d="M54 178q36 -26 72 0z" fill="#d9a35b"/><rect x="54" y="178" width="72" height="5" fill="#f2c94c"/><path d="M56 183q8 4 16 0t16 0 16 0 16 0" stroke="#b5402a" stroke-width="4" fill="none"/><path d="M54 188h72q-36 14 -72 0z" fill="#c98f4a"/>' +
      '<g class="stm"><path d="M76 166q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="stm stm2"><path d="M100 166q4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<rect x="140" y="160" width="60" height="18" rx="3" fill="' + YOLK + '"/><text x="170" y="173" text-anchor="middle" ' + font + ' font-size="9" fill="#111">B.E.C. $5</text>' +
      /* the deli cat in the window */
      '<ellipse cx="170" cy="198" rx="16" ry="8" fill="#e08a3a"/><circle cx="186" cy="190" r="7" fill="#e08a3a"/><path d="M181 185l2-6 3 5M188 184l3-5 1 6" fill="#e08a3a"/><circle cx="188" cy="190" r="1.3" fill="#111"/>' +
      '<g class="tl"><path d="M154 198q-12 -4 -10 -16" stroke="#e08a3a" stroke-width="4" fill="none" stroke-linecap="round"/></g>' +
      /* door */
      '<rect x="282" y="160" width="4" height="10" fill="' + YOLK + '"/>' +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="16" fill="#8d8a84"/><rect x="0" y="230" width="400" height="30" fill="#3c3d42"/>' +
      bike(0, 214, "car"),
      "");
  }

  /* 5. Montague St & Henry St: green street signs, the brownstone-row wall tagged DELIVERY BOYS */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      /* brownstones behind */
      [[0, 40], [80, 30], [160, 44], [240, 34]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="80" height="' + (140 - y) + '" fill="#5a3a2a"/><rect x="' + x + '" y="' + y + '" width="80" height="6" fill="#3e281c"/>' +
        [12, 46].map(dx => '<rect class="bl bl' + ((x / 40) % 3 + 1) + '" x="' + (x + dx) + '" y="' + (y + 16) + '" width="20" height="26" fill="#ffd98a" opacity=".7"/>').join("")).join("") +
      /* wall */
      '<rect x="0" y="120" width="320" height="106" fill="#4b4f57"/>' +
      (() => { let b = ""; for (let y = 128; y < 226; y += 10) b += '<path d="M0 ' + y + 'h320" stroke="#3c4047" stroke-width="1"/>'; return b; })() +
      tag("DELIVERY", 14, 172, 38, ORANGE, -5) + tag("BOYS", 70, 214, 40, YOLK, -4) + tag("D BOYS", 200, 150, 22, CREAM, -7) + tag("BK", 236, 210, 30, GREEN, -6) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      bike(-10, 210, "car car2") +
      /* lamp + sign pole */
      '<rect x="352" y="56" width="5" height="172" fill="#3d4b3f"/>' +
      '<rect x="296" y="62" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="78" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Montague St</text>' +
      '<rect x="300" y="88" width="92" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="104" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Henry St</text>' +
      '<path d="M357 40h18" stroke="#3d4b3f" stroke-width="4"/><circle class="flk" cx="376" cy="44" r="5" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { clarkst: clarkst, promenade: promenade, bridge: bridge, deli: deli, corner: corner };
})();
