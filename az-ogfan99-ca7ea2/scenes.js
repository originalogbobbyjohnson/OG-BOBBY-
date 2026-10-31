/* East New York opening scenes for the AZ game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes runl{from{transform:translateX(-330px)}to{transform:translateX(420px)}}' +
    '.jz{animation:runl 7s linear infinite}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes land{from{transform:translate(0,0)}to{transform:translate(-330px,120px)}}' +
    '.plane{animation:land 9s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}' +
    '.kite{transform-box:fill-box;transform-origin:50% 100%;animation:sway 2.6s ease-in-out infinite}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.45}50%{transform:translateX(10px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.3s}' +
    '@keyframes vu{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(.9)}50%{transform:scaleY(.55)}75%{transform:scaleY(1)}}' +
    '.vu{transform-box:fill-box;transform-origin:50% 100%;animation:vu .9s ease-in-out infinite}.v2{animation-delay:-.3s}.v3{animation-delay:-.6s}.v4{animation-delay:-.15s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}' +
    '.thump{transform-box:fill-box;transform-origin:50% 50%;animation:thump .45s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd34d", LAV = "#b98cff", MINT = "#5ee0c8", BLUE = "#0039a6", JZ = "#996633";

  /* 1. The C pulling into Van Siclen Av, underground under Pitkin Av: white tile, periwinkle trim with a dark periwinkle border */
  function train() {
    let tile = "";
    for (let y = 0; y < 180; y += 10) tile += '<path d="M0 ' + y + 'h400" stroke="#d3d7d2" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 0v180" stroke="#d3d7d2" stroke-width="1"/>';
    let cols = "";
    [20, 196, 372].forEach(x => cols += '<rect x="' + x + '" y="0" width="10" height="180" fill="#1d2129"/><rect x="' + (x - 3) + '" y="0" width="16" height="6" fill="#1d2129"/>');
    let windows = "";
    for (let x = 18; x < 240; x += 46) windows += '<rect x="' + x + '" y="126" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    const tablet = x => '<rect x="' + x + '" y="62" width="120" height="26" fill="#3f4796" stroke="#2a3070" stroke-width="2"/>' +
      '<text x="' + (x + 60) + '" y="80" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" letter-spacing="1" fill="#fff">VAN SICLEN AVE.</text>';
    return svg(
      '<rect width="400" height="180" fill="#eceee9"/>' + tile +
      /* periwinkle trim line with its dark border */
      '<rect x="0" y="40" width="400" height="14" fill="#8c94d8"/><rect x="0" y="38" width="400" height="3" fill="#3f4796"/><rect x="0" y="53" width="400" height="3" fill="#3f4796"/>' +
      tablet(46) + tablet(240) + cols +
      /* hanging black station sign */
      '<path d="M140 0v10M260 0v10" stroke="#555" stroke-width="2"/>' +
      '<rect x="110" y="10" width="180" height="26" rx="3" fill="#111"/><rect x="110" y="10" width="180" height="3" fill="#fff"/>' +
      '<text x="120" y="30" ' + F + ' font-weight="700" font-size="13" fill="#fff">Van Siclen Av</text>' +
      bullet(250, 24, "C", BLUE).replace('r="11"', 'r="9"') + bullet(273, 24, "A", BLUE).replace('r="11"', 'r="9"') +
      /* train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="300" height="5" fill="' + BLUE + '"/>' + windows +
        '<rect x="285" y="126" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="164" r="4" fill="#fff6c2"/>' + bullet(258, 137, "C", BLUE) +
      '</g>' +
      /* platform */
      '<rect x="0" y="172" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#2a2d33"/>' +
      '<path d="M0 182h400" stroke="#111" stroke-width="2"/>' +
      tag("QUIET MONEY", 22, 236, 28, GOLD, -4) + tag("AZ", 320, 240, 38, LAV, -8),
      sky("g1", "#000", "#000"));
  }

  /* 2. The J/Z up on the el over Fulton St in Cypress Hills: dark green steel, shops underneath, a car rolling through the shadows */
  function el() {
    let cols = "", stripes = "";
    [-2, 92, 192, 296, 394].forEach(x => cols += '<rect x="' + x + '" y="92" width="7" height="118" fill="#34452f"/><path d="M' + (x - 8) + ' 98h23" stroke="#34452f" stroke-width="5"/>');
    for (let x = 0; x < 400; x += 30) stripes += '<rect x="' + x + '" y="196" width="14" height="40" fill="#000" opacity=".18"/>';
    let wins = "";
    for (let x = 12; x < 300; x += 40) wins += '<rect x="' + x + '" y="62" width="24" height="12" rx="2" fill="#fff4c8" opacity=".9"/>';
    const shop = (x, w, aw, txt) => '<rect x="' + x + '" y="128" width="' + w + '" height="82" fill="#5b3a2c"/>' +
      '<rect x="' + (x + 4) + '" y="134" width="' + (w - 8) + '" height="16" fill="#151515"/>' +
      '<text x="' + (x + w / 2) + '" y="146" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="1" fill="#ffe39a">' + txt + '</text>' +
      '<path d="M' + x + ' 152h' + w + 'l-6 14h-' + (w - 12) + 'z" fill="' + aw + '"/>' +
      '<rect x="' + (x + 8) + '" y="170" width="' + (w - 16) + '" height="30" fill="#ffd98a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      /* row of shops under the el */
      shop(0, 92, "#c0392b", "BARBER") + shop(96, 96, "#1f7a3a", "BAKERY") + shop(196, 100, "#2e5aa8", "99 CENTS") + shop(300, 100, "#d68a1a", "PATTY SHOP") +
      /* el deck */
      '<rect x="0" y="80" width="400" height="14" fill="#3d5236"/><rect x="0" y="92" width="400" height="4" fill="#26331f"/>' +
      '<path d="M0 80h400" stroke="#5c7650" stroke-width="2"/>' + cols +
      /* J train running along the el */
      '<g class="jz"><rect x="0" y="52" width="320" height="28" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + wins +
        '<path d="M106 52v28M212 52v28" stroke="#6b7280" stroke-width="1.5"/>' +
        '<circle cx="306" cy="66" r="8" fill="' + JZ + '"/><text x="306" y="70" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">J</text></g>' +
      /* street under the el, shadow stripes */
      '<rect x="0" y="210" width="400" height="50" fill="#1b1d22"/>' + stripes +
      '<path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="214" width="62" height="18" rx="5" fill="' + LAV + '"/><rect x="10" y="206" width="38" height="12" rx="4" fill="#7b5fc0"/><circle cx="14" cy="233" r="5" fill="#111"/><circle cx="48" cy="233" r="5" fill="#111"/><circle cx="60" cy="220" r="2.5" fill="#fff6c2"/></g>' +
      /* street sign on a column */
      '<rect x="146" y="102" width="68" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="180" y="114" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">Fulton St</text>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="3" fill="' + GOLD + '">THE J OVER FULTON ST</text>',
      sky("g2", "#1a1440", "#d77a54"));
  }

  /* 3. Shirley Chisholm State Park: the green hills over Jamaica Bay, a kite up, a plane gliding down toward JFK */
  function park() {
    let sky2 = "";
    [[40, 196], [72, 190], [96, 199], [118, 186], [140, 196], [158, 192]].forEach(([x, h]) => sky2 += '<rect x="' + (x - 6) + '" y="' + h + '" width="12" height="' + (204 - h) + '" fill="#8aa0b8" opacity=".55"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#fff4c4" opacity=".9"/>' +
      /* far skyline across the water */
      sky2 +
      /* Jamaica Bay */
      '<rect x="0" y="202" width="400" height="58" fill="#2f7fb0"/>' +
      '<path class="shim" d="M30 214h50M150 226h70M290 216h60" stroke="#bfe6ff" stroke-width="2" stroke-linecap="round"/>' +
      '<path class="shim shim2" d="M90 240h60M240 246h80" stroke="#bfe6ff" stroke-width="2" stroke-linecap="round"/>' +
      /* the green hills of the park */
      '<path d="M170 210 Q250 120 330 150 T400 140 V260 H170z" fill="#5aa34a"/>' +
      '<path d="M120 260 Q220 170 300 190 T400 186 V260z" fill="#3f8a3a"/>' +
      '<path d="M200 260 Q260 200 320 214 T400 218" fill="none" stroke="#d9c79a" stroke-width="5" stroke-linecap="round"/>' +
      /* little trees */
      '<circle cx="250" cy="152" r="9" fill="#2e6b2c"/><rect x="249" y="158" width="3" height="10" fill="#4a3220"/>' +
      '<circle cx="356" cy="140" r="8" fill="#2e6b2c"/><rect x="355" y="146" width="3" height="10" fill="#4a3220"/>' +
      /* kite on its string */
      '<path d="M226 214 Q190 150 130 98" fill="none" stroke="#fff" stroke-width="1" opacity=".8"/>' +
      '<g class="kite"><path d="M130 70 l12 14 -12 16 -12 -16z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="1.2"/><path d="M130 70v30M118 84h24" stroke="#7a5512" stroke-width="1"/></g>' +
      /* plane coming down toward the airport */
      '<g class="plane"><g transform="translate(360 40)"><path d="M0 6 L34 2 L40 6 L34 9 Z" fill="#f2f4f7"/><path d="M14 6 L22 -6 L26 -6 L22 6z M14 6 L22 16 L26 16 L22 6z" fill="#cfd5dd"/><path d="M34 2 L40 -6 L42 -6 L40 5z" fill="#cfd5dd"/></g></g>' +
      /* brown park sign */
      '<rect x="312" y="136" width="8" height="34" fill="#5b3a1e"/>' +
      '<rect x="250" y="98" width="132" height="40" rx="3" fill="#5b3a1e" stroke="#e8d9a8" stroke-width="2"/>' +
      '<text x="316" y="115" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#ffe39a">SHIRLEY CHISHOLM</text>' +
      '<text x="316" y="129" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">STATE PARK</text>',
      sky("g3", "#5bb6ef", "#d8f0ff"));
  }

  /* 4. The Quiet Money studio: mixing board, meters bouncing, monitors thumping, the plaque on the wall */
  function studio() {
    let faders = "";
    for (let i = 0; i < 16; i++) { const x = 60 + i * 18; faders += '<rect x="' + x + '" y="196" width="3" height="40" fill="#111"/><rect x="' + (x - 4) + '" y="' + (204 + (i * 7) % 24) + '" width="11" height="6" rx="1" fill="#d7d9de"/>'; }
    let knobs = "";
    for (let i = 0; i < 16; i++) for (let r = 0; r < 2; r++) knobs += '<circle cx="' + (61.5 + i * 18) + '" cy="' + (176 + r * 10) + '" r="3" fill="' + (r ? MINT : LAV) + '"/>';
    const meter = (x, cls) => '<rect x="' + x + '" y="112" width="10" height="44" fill="#111"/><rect class="vu ' + cls + '" x="' + (x + 2) + '" y="114" width="6" height="40" fill="url(#vug)"/>';
    const spk = x => '<rect x="' + x + '" y="104" width="40" height="62" rx="4" fill="#1c1c22" stroke="#33333d" stroke-width="2"/>' +
      '<circle class="thump" cx="' + (x + 20) + '" cy="145" r="13" fill="#2b2b34" stroke="#555" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="117" r="6" fill="#2b2b34" stroke="#555" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#120a1f"/>' +
      /* acoustic panels */
      (function () { let p = ""; for (let x = 0; x < 400; x += 50) p += '<rect x="' + (x + 3) + '" y="0" width="44" height="96" fill="#1e1430"/>'; return p; })() +
      '<text class="neon" x="190" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="4" fill="' + LAV + '" stroke="#efe2ff" stroke-width=".7">QUIET MONEY</text>' +
      /* gold plaque */
      '<rect x="22" y="12" width="56" height="74" rx="3" fill="#2a1c0c" stroke="' + GOLD + '" stroke-width="2"/><circle cx="50" cy="44" r="20" fill="' + GOLD + '"/><circle cx="50" cy="44" r="6" fill="#2a1c0c"/>' +
      '<text x="50" y="78" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="8" fill="' + GOLD + '">DOE OR DIE</text>' +
      /* booth window with the mic */
      '<rect x="300" y="12" width="84" height="74" rx="3" fill="#2b4a6b" stroke="#0b0710" stroke-width="4"/>' +
      '<rect x="340" y="40" width="3" height="40" fill="#999"/><rect x="333" y="26" width="17" height="22" rx="8" fill="#c9ced6"/><circle cx="341.5" cy="38" r="12" fill="none" stroke="#333" stroke-width="2"/>' +
      /* monitors + meters */
      spk(24) + spk(336) + meter(150, "") + meter(166, "v2") + meter(182, "v3") + meter(198, "v4") + meter(214, "v2") + meter(230, "v3") +
      '<rect x="260" y="112" width="62" height="44" rx="3" fill="#0b1a12"/><path d="M264 134 q8 -14 16 0 t16 0 t16 0" fill="none" stroke="' + MINT + '" stroke-width="2"/>' +
      /* the desk */
      '<path d="M30 166h340l20 94H10z" fill="#2d2d36"/>' + knobs + faders,
      '<linearGradient id="vug" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#3ddc84"/><stop offset=".65" stop-color="#ffd34d"/><stop offset="1" stop-color="#ff4f4f"/></linearGradient>');
  }

  /* 5. Pitkin Av and Van Siclen Av, over the station: street signs, subway globe, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="20" y="64" width="232" height="156" fill="#4a3a3a"/>' +
      (function () { let b = ""; for (let y = 64; y < 220; y += 12) for (let x = ((y - 64) / 12) % 2 ? 34 : 20; x < 240; x += 28) b += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#5a4444"/>'; return b; })() +
      tag("AZ", 40, 132, 50, GOLD, -8) + tag("SOSA", 130, 124, 32, LAV, -5) + tag("THE FIRM", 34, 186, 28, MINT, -4) + tag("E.N.Y.", 168, 204, 22, "#ff8a6b", -6) +
      /* subway entrance globes */
      '<rect x="266" y="150" width="4" height="70" fill="#1d2329"/><circle class="flk" cx="268" cy="146" r="7" fill="#3ddc84"/>' +
      /* streetlight */
      '<rect x="306" y="56" width="5" height="164" fill="#1d2329"/><path d="M308 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk flk2" d="M324 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk flk2" d="M324 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Pitkin Av</text>' +
      '<rect x="260" y="110" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Van Siclen Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="224" width="58" height="16" rx="5" fill="' + GOLD + '"/><circle cx="12" cy="241" r="5" fill="#111"/><circle cx="46" cy="241" r="5" fill="#111"/></g>',
      sky("g5", "#140c26", "#3b2a5c"));
  }

  window.SCENES = { train, el, park, studio, corner };
})();
