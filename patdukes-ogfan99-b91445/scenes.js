/* Staten Island opening scenes for Pat Dukes' game: St. George on the North Shore. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.45}50%{transform:translateX(9px);opacity:.95}}' +
    '.shim{animation:shim 3.2s ease-in-out infinite}.shim2{animation-delay:1.4s}' +
    '@keyframes sailR{from{transform:translateX(-200px)}to{transform:translateX(440px)}}' +
    '.sailR{animation:sailR 20s linear infinite;animation-delay:-9s}' +
    '@keyframes shipL{from{transform:translateX(430px)}to{transform:translateX(-200px)}}' +
    '.shipL{animation:shipL 26s linear infinite;animation-delay:-14s}' +
    '@keyframes carR{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '@keyframes carL{from{transform:translateX(430px)}to{transform:translateX(-30px)}}' +
    '.carR{animation:carR 5s linear infinite}.carL{animation:carL 6s linear infinite}.d1{animation-delay:-1.7s}.d2{animation-delay:-3.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flap{animation:flap .8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drift{from{transform:translateX(0)}to{transform:translateX(60px)}}' +
    '.drift{animation:drift 9s ease-in-out infinite alternate}' +
    '@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:twinkle 1.6s ease-in-out infinite}.tw2{animation-delay:.5s}.tw3{animation-delay:1.1s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{animation:spin 12s linear infinite;transform-box:view-box}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes mist{0%{opacity:0;transform:translate(0,0) scale(.6)}30%{opacity:.8}100%{opacity:0;transform:translate(-26px,-10px) scale(1.4)}}' +
    '.mist{animation:mist 1.8s ease-out infinite;transform-box:fill-box;transform-origin:center}.mist2{animation-delay:.6s}.mist3{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* the Staten Island Railway bullet: blue rounded tag with white SIR */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GREEN = "#9be15d", ORANGE = "#ff7a1a", GOLD = "#f2c14e";
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 3 ? " tw" + (i % 3 + 1) : "") + '" cx="' + ((i * 89 + 13) % 400) + '" cy="' + (6 + (i * 47) % 64) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  /* the orange Staten Island ferry, side view facing right, at 0,0, about 160 x 50 at scale 1 */
  const ferry = s => {
    let w = "";
    for (let x = 20; x < 140; x += 9) w += '<rect x="' + x + '" y="19" width="5" height="7" fill="#1b2633"/>';
    for (let x = 44; x < 116; x += 9) w += '<rect x="' + x + '" y="6" width="5" height="5" fill="#1b2633"/>';
    return '<g transform="scale(' + s + ')">' +
      '<path d="M0 30h160l-12 18H12z" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' +
      '<path d="M4 36h152" stroke="#fff" stroke-width="2"/>' +
      '<rect x="14" y="14" width="132" height="16" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' +
      '<rect x="38" y="2" width="84" height="12" fill="' + ORANGE + '" stroke="#6e300a" stroke-width="1.5"/>' + w +
      '<rect x="62" y="-10" width="8" height="12" fill="#f4f4f4" stroke="#6e300a"/><rect x="90" y="-10" width="8" height="12" fill="#f4f4f4" stroke="#6e300a"/>' +
      '<text x="80" y="45" text-anchor="middle" ' + FONT + ' font-size="6" fill="#fff">STATEN ISLAND</text></g>';
  };
  const gull = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path class="flap" d="M0 0q5-6 10 0q5-6 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';

  /* 1. St. George, looking up from the end of the SIR platform: the exit stair to Richmond Terrace and Wall St, Borough Hall's clock tower on the hill, the train pulling in */
  function station() {
    let windows = "";
    for (let x = 30; x < 290; x += 40) windows += '<rect x="' + x + '" y="150" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    let bricks = "";
    for (let y = 48; y < 122; y += 6) bricks += '<path d="M138 ' + y + 'h96" stroke="#7a3a26" stroke-width=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      /* the hill and Borough Hall: red brick, limestone trim, the clock tower */
      '<path d="M0 120q120-30 240-24t160 10v20H0z" fill="#3a4a3a"/>' +
      '<rect x="130" y="70" width="110" height="52" fill="#9a4a32"/>' + bricks + '<path d="M126 70l14-12h90l14 12z" fill="#4a4e58"/>' +
      [142, 162, 202, 222].map(x => '<rect class="flk" x="' + x + '" y="84" width="8" height="14" fill="#ffd98a"/>').join("") +
      '<rect x="176" y="20" width="22" height="102" fill="#9a4a32"/><rect x="174" y="34" width="26" height="4" fill="#e8dcc0"/><path d="M172 22l15-18 15 18z" fill="#4a4e58"/>' +
      '<circle cx="187" cy="46" r="7" fill="#f6efdc" stroke="#3a2a22" stroke-width="1.5"/><g class="hand" style="transform-origin:187px 46px"><path d="M187 46v-5" stroke="#222" stroke-width="1.3"/></g><path d="M187 46h4" stroke="#222" stroke-width="1.3"/>' +
      '<text x="187" y="134" text-anchor="middle" ' + FONT + ' font-size="8" fill="#e8dcc0">BOROUGH HALL</text>' +
      /* the canopy and the exit sign */
      '<rect x="0" y="0" width="400" height="10" fill="#2b333e"/><path d="M0 10h400" stroke="#1b222b" stroke-width="2"/>' +
      '<rect x="268" y="18" width="124" height="38" rx="3" fill="#111"/><text x="278" y="32" ' + FONT + ' font-size="9" fill="#fff">EXIT ▸ Richmond Ter</text><text x="278" y="47" ' + FONT + ' font-size="9" fill="#fff">Wall St · Borough Hall</text>' +
      '<rect x="8" y="18" width="150" height="30" rx="4" fill="#111"/><rect x="8" y="18" width="150" height="4" fill="#fff"/><text x="18" y="40" ' + FONT + ' font-size="15" fill="#fff">St. George</text>' + sir(132, 34) +
      /* the stair going up */
      '<path d="M300 140l40-40h60v40z" fill="#4a525e"/>' + [0, 1, 2, 3].map(i => '<path d="M' + (306 + i * 10) + ' ' + (134 - i * 10) + 'h' + (94 - i * 10) + '" stroke="#8a929e" stroke-width="2"/>').join("") +
      '<rect x="0" y="140" width="400" height="44" fill="#0e131a"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="142" width="290" height="40" rx="7" fill="#c7ccd4" stroke="#69707c" stroke-width="2"/>' +
        '<rect x="10" y="170" width="290" height="5" fill="#0039a6"/>' + windows.replace(/x="290"/, 'x="999"') +
        '<circle cx="292" cy="178" r="3.5" fill="#fff6c2"/>' + sir(262, 158) +
      '</g>' +
      '<rect x="0" y="184" width="400" height="8" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#1b222b"/>' +
      tag("PAT DUKES", 18, 238, 32, GREEN, -5) + tag("WOWLLL PACINO", 214, 236, 20, GOLD, -4) + tag("INCITE FOREVER", 196, 256, 14, ORANGE, -2),
      sky("s1", "#26365f", "#e9925e"));
  }

  /* 2. Postcards, the Staten Island 9/11 memorial on the St. George esplanade: the two white curved walls framing the harbor and the gap in the Lower Manhattan skyline */
  function ferryride() {
    let city = "";
    [[0, 12, 28], [14, 10, 42], [26, 16, 24], [44, 12, 36], [100, 14, 30], [116, 18, 44], [136, 12, 30], [150, 16, 22]].forEach(b =>
      city += '<rect x="' + (120 + b[0]) + '" y="' + (112 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#4a5478"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="330" cy="52" r="20" fill="#fff1c8" opacity=".95"/>' + city +
      '<path class="tw" d="M190 112V70M200 112V70" stroke="#cfe0f2" stroke-width="1" opacity=".5"/>' +
      '<rect x="0" y="112" width="400" height="60" fill="#3a6f98"/>' +
      '<path class="shim" d="M14 128h54M300 124h60M150 150h70" stroke="#e6f2fa" stroke-width="2"/>' +
      '<g class="sailR"><g transform="translate(0 116)">' + ferry(0.45) + '</g></g>' +
      /* the two wings, curving up and apart like folded postcards */
      '<path d="M60 206C70 150 110 90 176 40L184 46C140 100 116 160 112 206z" fill="#f6f7f8" stroke="#c9cfd6" stroke-width="1.5"/>' +
      '<path d="M340 206C330 150 290 90 224 40L216 46C260 100 284 160 288 206z" fill="#f6f7f8" stroke="#c9cfd6" stroke-width="1.5"/>' +
      '<path d="M112 206C116 160 140 100 184 46" stroke="#dfe4ea" stroke-width="5" fill="none"/><path d="M288 206C284 160 260 100 216 46" stroke="#dfe4ea" stroke-width="5" fill="none"/>' +
      /* the esplanade */
      '<rect x="0" y="172" width="400" height="6" fill="#59616e"/>' + [20, 60, 340, 380].map(x => '<rect x="' + x + '" y="160" width="3" height="14" fill="#59616e"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#c9c1b0"/><rect x="0" y="178" width="400" height="28" fill="#b8b09e"/>' +
      '<g class="drift">' + gull(60, 40) + gull(92, 58) + '</g>' +
      '<text x="200" y="232" text-anchor="middle" ' + FONT + ' font-size="14" fill="#2a2a3a">POSTCARDS</text><text x="200" y="246" text-anchor="middle" ' + FONT + ' font-size="8" fill="#2a2a3a">ST. GEORGE ESPLANADE · 9/11 MEMORIAL</text>' +
      tag("PAT DUKES", 14, 202, 22, GREEN, -3),
      sky("s2", "#6a9ad0", "#f6d6b0"));
  }

  /* 3. Empire Outlets by the St. George ferry (2019): the long low glass storefronts on the waterfront beside the terminal, Lower Manhattan across the harbor */
  function narrows() {
    let city = "";
    [[0, 12, 28], [14, 10, 42], [26, 16, 24], [44, 12, 56], [58, 18, 34], [78, 10, 48], [90, 14, 30], [106, 18, 44], [126, 12, 30]].forEach(b =>
      city += '<rect x="' + (210 + b[0]) + '" y="' + (86 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#5a6488"/>');
    city += '<path d="M262 86V22l6-10 6 10v64z" fill="#5a6488"/><rect x="267" y="0" width="2" height="12" fill="#5a6488"/>';
    let shops = "";
    for (let x = 116; x < 386; x += 30) shops += '<rect x="' + x + '" y="146" width="26" height="34" fill="#9fd0ea" opacity=".85"/><rect class="flk' + (x % 60 ? ' flk2' : '') + '" x="' + (x + 4) + '" y="150" width="18" height="6" fill="#ffe6a8" opacity=".7"/>';
    for (let x = 116; x < 386; x += 30) shops += '<rect x="' + x + '" y="114" width="26" height="22" fill="#b8dcef" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + city +
      '<rect x="0" y="86" width="400" height="26" fill="#3a6f98"/><path class="shim" d="M20 96h40M150 102h50M330 98h40" stroke="#e6f2fa" stroke-width="2"/>' +
      '<g class="shipL"><g transform="translate(0 76)">' + ferry(0.35) + '</g></g>' +
      /* the ferry terminal on the left */
      '<rect x="0" y="92" width="104" height="96" fill="#8a9aa8"/><rect x="6" y="100" width="92" height="50" fill="#bfe0f2" opacity=".8"/><path d="M0 92h104l-8-10H8z" fill="#5a6470"/>' +
      '<text x="52" y="172" text-anchor="middle" ' + FONT + ' font-size="8" fill="#14202c">FERRY TERMINAL</text>' +
      /* the outlets: two low levels of glass, gray and wood panels */
      '<rect x="108" y="106" width="292" height="80" fill="#6a6a70"/><rect x="108" y="102" width="292" height="6" fill="#3a3a40"/><rect x="108" y="138" width="292" height="6" fill="#b08a5a"/>' + shops +
      '<rect x="190" y="88" width="120" height="16" fill="#14181d"/><text x="250" y="100" text-anchor="middle" ' + FONT + ' font-size="10" fill="' + GOLD + '">EMPIRE OUTLETS</text>' +
      /* the waterfront walk */
      '<rect x="0" y="186" width="400" height="74" fill="#c9c1b0"/><path d="M0 200h400" stroke="#a89f8a"/>' +
      '<g class="carR"><circle cx="0" cy="206" r="5" fill="#2a1a10"/><rect x="-5" y="211" width="10" height="16" rx="3" fill="' + ORANGE + '"/></g>' +
      '<g class="carL d1"><circle cx="0" cy="210" r="5" fill="#2a1a10"/><rect x="-5" y="215" width="10" height="16" rx="3" fill="' + GREEN + '"/></g>' +
      '<text x="110" y="22" text-anchor="middle" ' + FONT + ' font-size="10" fill="#14202c">ST. GEORGE WATERFRONT · 2019</text>' +
      tag("PAT DUKES", 18, 252, 28, GREEN, -4) + tag("HORRIBLE NATURE", 196, 252, 20, GOLD, -3),
      sky("s3", "#8fc3ea", "#f4e2c4"));
  }

  /* 4. St. George: Borough Hall's brick clock tower over Richmond Terrace, flag waving, traffic rolling by */
  function boro() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let x = 96; x < 300; x += 22) if (x < 176 || x > 214) win += '<rect x="' + x + '" y="' + (128 + r * 26) + '" width="10" height="16" rx="1" fill="' + (r === 2 ? "#ffe3a0" : "#f3d58a") + '" class="' + ((x + r) % 3 ? "" : "flk") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffe1a6" opacity=".9"/>' +
      /* the hill and trees */
      '<path d="M0 120q60-20 120-8t140 0t140-10V200H0z" fill="#2c4a34"/>' +
      '<circle cx="40" cy="146" r="22" fill="#356b3e"/><circle cx="66" cy="150" r="16" fill="#3e7a48"/><circle cx="352" cy="148" r="22" fill="#356b3e"/><circle cx="376" cy="154" r="16" fill="#3e7a48"/>' +
      /* Borough Hall: red brick with pale stone trim and a slate mansard */
      '<rect x="88" y="116" width="224" height="84" fill="#9a4a32"/>' +
      '<rect x="88" y="116" width="224" height="5" fill="#e9dcc0"/><rect x="88" y="150" width="224" height="3" fill="#e9dcc0"/><rect x="88" y="176" width="224" height="3" fill="#e9dcc0"/>' +
      '<path d="M84 116l10-14h212l10 14z" fill="#4a5560"/>' + win +
      /* the clock tower */
      '<rect x="178" y="40" width="44" height="160" fill="#a5543a"/>' +
      '<rect x="178" y="40" width="44" height="4" fill="#e9dcc0"/><rect x="178" y="100" width="44" height="4" fill="#e9dcc0"/>' +
      '<path d="M174 40l26-28 26 28z" fill="#4a5560"/><rect x="198" y="0" width="4" height="14" fill="#4a5560"/>' +
      '<circle cx="200" cy="70" r="15" fill="#f6efd9" stroke="#e9dcc0" stroke-width="3"/>' +
      '<path d="M200 70v-9" stroke="#222" stroke-width="2.2" stroke-linecap="round"/><path class="hand" style="transform-origin:200px 70px" d="M200 70v-12" stroke="#222" stroke-width="1.4" stroke-linecap="round"/>' +
      '<rect x="190" y="160" width="20" height="40" rx="10" fill="#3a1d14"/>' +
      '<rect x="186" y="112" width="28" height="22" rx="2" fill="#f3d58a" class="flk flk2"/>' +
      /* flag on the tower */
      '<rect x="221" y="2" width="2" height="26" fill="#ddd"/><g class="flag"><rect x="223" y="3" width="22" height="13" fill="#f4f4f4"/><path d="M223 4h22M223 8.3h22M223 12.6h22" stroke="#c8323a" stroke-width="1.8"/><path d="M223 16h22" stroke="#c8323a" stroke-width="1"/><rect x="223" y="3" width="9" height="7" fill="#1f3a8a"/></g>' +
      /* Richmond Terrace with cars */
      '<rect x="0" y="200" width="400" height="60" fill="#2a2e35"/><path d="M0 230h400" stroke="#e6c35c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="carR"><rect x="0" y="208" width="34" height="12" rx="4" fill="' + GREEN + '"/><circle cx="8" cy="221" r="4" fill="#111"/><circle cx="26" cy="221" r="4" fill="#111"/></g>' +
      '<g class="carL d1"><rect x="0" y="238" width="36" height="12" rx="4" fill="#f4f4f4"/><circle cx="8" cy="251" r="4" fill="#111"/><circle cx="28" cy="251" r="4" fill="#111"/></g>' +
      tag("ST. GEORGE", 236, 258, 22, GOLD, -3),
      sky("s4", "#2e4a7a", "#f2b880"));
  }

  /* 5. The corner of Richmond Terrace and Wall St in St. George, brick wall tagged up */
  function corner() {
    let bricks = "";
    for (let y = 30; y < 200; y += 14) for (let x = (y / 14) % 2 ? -14 : 0; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="12" fill="#7d3f2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      '<rect x="0" y="28" width="400" height="172" fill="#5e2e20"/>' + bricks +
      /* graffiti on the wall */
      tag("PAT DUKES", 70, 120, 46, GREEN, -6) +
      tag("WOWLLL PACINO", 150, 160, 24, GOLD, -4) +
      tag("INCITE 4EVER", 30, 186, 20, ORANGE, -3) +
      tag("HN", 226, 192, 26, "#f4f4f4", 6) +
      /* spray can with mist */
      '<g transform="translate(340 150)"><rect x="0" y="0" width="16" height="34" rx="3" fill="' + GREEN + '" stroke="#111" stroke-width="1.5"/><rect x="4" y="-6" width="8" height="6" fill="#ddd" stroke="#111"/></g>' +
      '<circle class="mist" cx="334" cy="142" r="6" fill="' + GREEN + '" opacity=".6"/><circle class="mist mist2" cx="332" cy="144" r="5" fill="' + GREEN + '" opacity=".6"/><circle class="mist mist3" cx="336" cy="140" r="4" fill="' + GREEN + '" opacity=".6"/>' +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d44"/><rect x="0" y="200" width="400" height="5" fill="#8a8d94"/>' +
      /* street light */
      '<rect x="40" y="20" width="5" height="182" fill="#2f4a3a"/><path d="M42 22h30" stroke="#2f4a3a" stroke-width="5"/><ellipse cx="74" cy="26" rx="10" ry="4" fill="#ffeaa8" class="flk"/>' +
      /* green street signs */
      '<rect x="374" y="10" width="5" height="192" fill="#55606b"/>' +
      '<rect x="296" y="12" width="96" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="28" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">Wall St</text>' +
      '<rect x="262" y="38" width="132" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="54" text-anchor="middle" ' + FONT + ' font-size="12" fill="#fff">Richmond Ter</text>' +
      /* fire hydrant */
      '<g transform="translate(150 208)"><rect x="0" y="6" width="16" height="22" rx="3" fill="#d9a21b"/><rect x="-4" y="12" width="24" height="6" rx="2" fill="#d9a21b"/><path d="M0 6q8-10 16 0z" fill="#d9a21b"/></g>',
      sky("s5", "#0d1022", "#24293f"));
  }

  window.SCENES = { station, ferryride, narrows, boro, corner };
})();
