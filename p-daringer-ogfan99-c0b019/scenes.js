/* Daringer producer game: Buffalo, NY. Utica Metro Rail station, Central Terminal in the snow, the loop lab, City Hall on Niagara Square, the Jefferson Ave corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 6s linear infinite}.sn2{animation-delay:-2s;animation-duration:7s}.sn3{animation-delay:-4s;animation-duration:5s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes hand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hd{transform-origin:200px 74px;animation:hand 8s linear infinite}' +
    '@keyframes wave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.wv{transform-box:fill-box;transform-origin:50% 100%;animation:wave 1s ease-in-out infinite}.w2{animation-delay:.2s}.w3{animation-delay:.4s}.w4{animation-delay:.6s}.w5{animation-delay:.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const snow = n => { let s = ""; for (let i = 0; i < (n || 36); i++) s += '<circle class="sn sn' + (i % 3 + 1) + '" cx="' + ((i * 71) % 400) + '" cy="' + ((i * 37) % 120 - 20) + '" r="' + (i % 2 ? 1.6 : 2.3) + '" fill="#fff" opacity=".85"/>'; return s; };
  const GOLD = "#f2c14e", ICE = "#e8eef5", BLUE = "#7fb3e6", RED = "#d64545", BUFF = "#d9b77e", BUFF2 = "#b8935a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Buffalo City Hall: honey sandstone art deco tower with the tiled crown */
  const cityhallShape = (x, base, s, col, crown) => {
    const w = 60 * s;
    return '<rect x="' + (x - w * 1.3) + '" y="' + (base - 40 * s) + '" width="' + (w * 2.6) + '" height="' + (40 * s) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - w / 2) + '" y="' + (base - 150 * s) + '" width="' + w + '" height="' + (150 * s) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - w * 0.4) + '" y="' + (base - 172 * s) + '" width="' + (w * 0.8) + '" height="' + (24 * s) + '" fill="' + col + '"/>' +
      '<path d="M' + (x - w * 0.36) + ' ' + (base - 172 * s) + 'Q' + x + ' ' + (base - 200 * s) + ' ' + (x + w * 0.36) + ' ' + (base - 172 * s) + 'z" fill="' + (crown || col) + '"/>';
  };

  /* 1. Utica Metro Rail station, underground under Main St: the silver car pulls in */
  function station() {
    let windows = "";
    for (let x = 24; x < 280; x += 40) windows += '<rect x="' + x + '" y="128" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let tiles = "";
    for (let y = 0; y < 110; y += 14) tiles += '<path d="M0 ' + y + 'h400" stroke="#2c3442" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a202b"/>' + tiles +
      '<rect x="0" y="0" width="400" height="18" fill="#10141c"/>' +
      '<rect class="flk" x="40" y="10" width="90" height="5" fill="#fff6c2"/><rect class="flk" x="270" y="10" width="90" height="5" fill="#fff6c2"/>' +
      '<rect x="60" y="30" width="280" height="46" rx="4" fill="#111"/><rect x="60" y="30" width="280" height="4" fill="#fff"/>' +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Utica</text>' +
      '<text x="200" y="71" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '" letter-spacing="2">METRO RAIL  ·  MAIN ST</text>' +
      '<g class="anim-train">' +
        '<rect x="6" y="112" width="320" height="66" rx="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="6" y="156" width="320" height="6" fill="#1f5fa8"/><rect x="6" y="163" width="320" height="3" fill="' + GOLD + '"/>' + windows +
        '<rect x="300" y="120" width="20" height="30" rx="3" fill="#2b3340"/><circle cx="318" cy="170" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="8" fill="#eab308"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3a3f48"/>' +
      '<rect x="0" y="188" width="400" height="4" fill="#59606b"/>' +
      tag("GRISELDA", 30, 238, 30, GOLD, -5) + tag("716", 300, 240, 30, ICE, -8));
  }

  /* 2. Buffalo Central Terminal on the East Side: buff brick art deco tower with the big clock, snow falling */
  function terminal() {
    let win = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 3; c++) win += '<rect class="' + ((r + c) % 3 ? "" : "bl bl" + (c + 1)) + '" x="' + (178 + c * 16) + '" y="' + (104 + r * 14) + '" width="8" height="9" fill="' + ((r + c) % 3 ? "#3a2c22" : "#ffd98a") + '"/>';
    let ticks = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; ticks += '<rect x="' + (200 + Math.sin(a) * 14 - 1) + '" y="' + (74 - Math.cos(a) * 14 - 1) + '" width="2" height="2" fill="#222"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="40" y="176" width="320" height="54" fill="' + BUFF2 + '"/><rect x="40" y="172" width="320" height="6" fill="' + BUFF + '"/>' +
      (() => { let a = ""; for (let i = 0; i < 9; i++) a += '<path d="M' + (52 + i * 34) + ' 230v-30a10 10 0 0 1 20 0v30z" fill="#3a2c22"/>'; return a; })() +
      '<rect x="164" y="96" width="72" height="134" fill="' + BUFF + '"/>' +
      '<rect x="172" y="56" width="56" height="44" fill="' + BUFF + '"/><rect x="180" y="34" width="40" height="24" fill="' + BUFF + '"/><rect x="188" y="20" width="24" height="16" fill="' + BUFF + '"/>' +
      '<rect x="196" y="8" width="8" height="14" fill="' + BUFF2 + '"/>' +
      '<path d="M164 96h72M172 56h56M180 34h40" stroke="' + BUFF2 + '" stroke-width="3"/>' +
      '<circle cx="200" cy="74" r="17" fill="#f6efd9" stroke="#5a4632" stroke-width="2.5"/>' + ticks +
      '<rect x="199" y="62" width="2" height="12" fill="#222"/><rect class="hd" x="199.2" y="64" width="1.6" height="11" fill="' + RED + '"/>' + win +
      '<rect x="0" y="228" width="400" height="32" fill="#e9eef4"/><path d="M0 236h400" stroke="#cdd6e0" stroke-width="2"/>' +
      '<path d="M20 240q20-6 40 0M300 242q24-6 48 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      snow(),
      sky("s2", "#1a2340", "#7d8db0"));
  }

  /* 3. The loop lab: dusty soul records, a sampler, no drums, just the loop rolling */
  function lab() {
    let bars = "";
    for (let i = 0; i < 14; i++) bars += '<rect class="wv w' + (i % 5 + 1) + '" x="' + (124 + i * 11) + '" y="58" width="7" height="44" fill="' + GOLD + '"/>';
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="' + ((r * 4 + c) % 5 === 1 ? "bl bl" + (c + 1) : "") + '" x="' + (272 + c * 22) + '" y="' + (178 + r * 16) + '" width="18" height="12" rx="2" fill="' + ((r * 4 + c) % 5 === 1 ? GOLD : "#5b5f68") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      '<rect x="20" y="16" width="80" height="60" fill="#1f2a3a" stroke="#3a3f47" stroke-width="3"/><path d="M60 16v60M20 46h80" stroke="#3a3f47" stroke-width="2"/>' +
      '<g>' + snow(10).replace(/cy="/g, 'cy="').replace(/<circle /g, '<circle clip-path="url(#win)" ') + '</g>' +
      '<rect x="112" y="30" width="176" height="96" rx="4" fill="#0a0d12" stroke="#3a3f47" stroke-width="3"/>' + bars +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="9" fill="' + ICE + '" letter-spacing="1.5">NO DRUMS. JUST THE LOOP.</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2420"/>' +
      '<rect x="20" y="164" width="130" height="80" rx="4" fill="#2c2c30" stroke="#111" stroke-width="2"/>' +
      '<circle class="vn" cx="78" cy="204" r="32" fill="#0b0b0b"/><circle cx="78" cy="204" r="22" fill="none" stroke="#333"/><circle cx="78" cy="204" r="10" fill="' + RED + '"/><circle cx="78" cy="204" r="2" fill="#fff"/>' +
      '<path d="M138 172l-22 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="262" y="166" width="104" height="80" rx="4" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' + pads +
      '<rect x="164" y="190" width="18" height="56" fill="' + GOLD + '" stroke="#222"/><rect x="182" y="194" width="18" height="52" fill="' + BLUE + '" stroke="#222"/><rect x="200" y="188" width="18" height="58" fill="' + RED + '" stroke="#222"/><rect x="218" y="196" width="18" height="50" fill="#e0e0e0" stroke="#222"/><rect x="236" y="192" width="18" height="54" fill="#8e44ad" stroke="#222"/>',
      '<clipPath id="win"><rect x="20" y="16" width="80" height="60"/></clipPath>');
  }

  /* 4. Buffalo City Hall over Niagara Square: sandstone tower, tiled crown, the obelisk in front, cars in the snow */
  function cityhall() {
    let win = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 4; c++) win += '<rect x="' + (176 + c * 13) + '" y="' + (70 + r * 13) + '" width="5" height="8" fill="' + ((r * 4 + c) % 7 === 2 ? "#ffd98a" : "#6b5236") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      cityhallShape(200, 214, 1, BUFF) +
      '<path d="M174 42Q200 14 226 42z" fill="#2f8f8a"/><path d="M180 42Q200 22 220 42" stroke="' + GOLD + '" stroke-width="3" fill="none"/><path d="M186 42Q200 28 214 42" stroke="#d9773a" stroke-width="3" fill="none"/>' +
      win +
      '<rect x="40" y="186" width="18" height="28" fill="' + BUFF + '"/><rect x="342" y="186" width="18" height="28" fill="' + BUFF + '"/>' +
      '<path d="M108 214V120l6-12 6 12v94z" fill="#e9e3d2" stroke="#b9b2a0"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8a8d93"/><rect x="0" y="214" width="400" height="5" fill="#e9eef4"/>' +
      '<g class="car"><rect x="0" y="230" width="44" height="14" rx="4" fill="#1f5fa8"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="34" cy="244" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      snow(28),
      sky("s4", "#26345a", "#c7b08a"));
  }

  /* 5. The corner: Jefferson Ave and E Ferry St on the East Side, DARINGER tagged, City Hall on the skyline */
  function corner() {
    const BRICK = "#7a3e2e", BRICK2 = "#5e2e22";
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' +
      '<g opacity=".9">' + cityhallShape(120, 130, 0.5, "#3a4462", "#3a4462") + '</g>' +
      '<rect x="10" y="92" width="30" height="40" fill="#2f3854"/><rect x="200" y="96" width="40" height="36" fill="#2f3854"/><rect x="250" y="84" width="26" height="48" fill="#2f3854"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("DARINGER", 20, 196, 44, GOLD, -5) + tag("GRISELDA", 150, 216, 20, ICE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#e9eef4"/><rect x="0" y="224" width="400" height="4" fill="#cdd6e0"/>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="278" y="44" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Jefferson Ave</text>' +
      '<rect x="290" y="70" width="86" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">E Ferry St</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>' +
      snow(30),
      sky("s5", "#0a0e1c", "#34405e"));
  }

  window.SCENES = { station: station, terminal: terminal, lab: lab, cityhall: cityhall, corner: corner };
})();
