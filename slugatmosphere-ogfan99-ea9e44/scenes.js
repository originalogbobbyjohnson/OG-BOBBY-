/* slugatmosphere scenes (Regions tab: Minneapolis) */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-120px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes snow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.sn{animation:snow 6s linear infinite}.sn2{animation-delay:-2s}.sn3{animation-delay:-4s}' +
    '@keyframes flow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.fl{animation:flow 2.4s linear infinite}' +
    '@keyframes fall{from{transform:translateY(0);opacity:.9}to{transform:translateY(40px);opacity:0}}.fa{animation:fall 1.2s linear infinite}.fa2{animation-delay:.4s}.fa3{animation-delay:.8s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.fg{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.9}}.gl{animation:glow 3s ease-in-out infinite}' +
    '@keyframes spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp{animation:spray 1.4s ease-out infinite}.sp2{animation-delay:.45s}.sp3{animation-delay:.9s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.sw{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3s ease-in-out infinite}' +
    '@keyframes rise{from{transform:translateY(6px)}to{transform:translateY(-6px)}}.ri{animation:rise 3s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* METRO light rail line badge: colored rounded tag with the line name */
  const line = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const snowfall = () => { let s = ""; for (let i = 0; i < 36; i++) s += '<circle class="sn' + (i % 3 ? " sn" + (1 + i % 3) : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>'; return s; };
  const pole = (x, y1, y2) => '<rect x="' + (x - 3) + '" y="' + y1 + '" width="6" height="' + (y2 - y1) + '" fill="#2f2f2f"/>';
  /* METRO light rail car (white body, line-color band, dark windows, pantograph) */
  const lrv = (x, y, w, band) => '<g class="anim-train"><path d="M' + (x + w / 2 - 14) + ' ' + (y - 2) + 'l14 -14l14 14" stroke="#333" stroke-width="2" fill="none"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="10" fill="#eceef0" stroke="#7a7e84" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 20) / 44) }, (_, i) => '<rect x="' + (x + 12 + i * 44) + '" y="' + (y + 8) + '" width="34" height="20" rx="3" fill="#24313d"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="7" fill="' + band + '"/><rect x="' + x + '" y="' + (y + 42) + '" width="' + w + '" height="3" fill="#f2c200"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 48) + '" r="3" fill="#fff6c2"/></g>';
  /* Minneapolis skyline silhouette: IDS Center (zigzag setbacks), Wells Fargo Center crown, Foshay obelisk, Capella */
  const mplsSky = (fill, base) => '<g fill="' + fill + '">' +
    '<rect x="40" y="' + (base - 70) + '" width="34" height="70"/><rect x="80" y="' + (base - 96) + '" width="22" height="96"/><path d="M84 ' + (base - 96) + 'l7 -12l7 12z"/>' +
    '<path d="M150 ' + base + 'v-160h6v-6h6v-6h18v6h6v6h6v160z"/>' +
    '<path d="M210 ' + base + 'v-130l14 -16l14 16v130z"/><rect x="221" y="' + (base - 160) + '" width="6" height="14"/>' +
    '<rect x="252" y="' + (base - 100) + '" width="30" height="100"/><path d="M290 ' + base + 'v-120q14 -18 28 0v120z"/><rect x="330" y="' + (base - 60) + '" width="40" height="60"/><rect x="118" y="' + (base - 54) + '" width="26" height="54"/></g>';
  /* St. Paul skyline: Wells Fargo Place, First National Bank tower with its red "1" sign, Cathedral dome */
  const stpSky = (fill, base) => '<g fill="' + fill + '">' +
    '<rect x="30" y="' + (base - 60) + '" width="40" height="60"/><rect x="78" y="' + (base - 120) + '" width="34" height="120"/><path d="M78 ' + (base - 120) + 'l17 -14l17 14z"/>' +
    '<rect x="124" y="' + (base - 100) + '" width="30" height="100"/><rect x="128" y="' + (base - 116) + '" width="22" height="16"/>' +
    '<rect x="166" y="' + (base - 74) + '" width="40" height="74"/><rect x="214" y="' + (base - 90) + '" width="28" height="90"/><rect x="250" y="' + (base - 50) + '" width="50" height="50"/>' +
    '<path d="M310 ' + base + 'v-40h10q14 -40 28 0h10v40z"/><rect x="336" y="' + (base - 88) + '" width="4" height="12"/></g>';
  const GLD = "#ffcc33", BLU = "#0053a0", LAKE = "#4fa3e0", RED = "#e8483b";

  /* 1. Lake St/Midtown station on the METRO Blue Line: the elevated platform over Lake Street, the train sliding in, snow in the air */
  function bluestation() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + mplsSky("#3a4660", 150) +
      '<rect x="0" y="150" width="400" height="12" fill="#b9bec6"/>' + [30, 140, 260, 370].map(x => '<rect x="' + (x - 6) + '" y="162" width="12" height="70" fill="#9aa0a8"/>').join("") +
      '<rect x="0" y="232" width="400" height="28" fill="#4a4d52"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="car"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="36" cy="242" r="2" fill="#fff6c2"/></g>' +
      '<rect x="20" y="40" width="360" height="8" fill="#d8dce2"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="48" width="6" height="62" fill="#8a9098"/>').join("") +
      lrv(10, 92, 300, BLU) +
      '<rect x="0" y="146" width="400" height="6" fill="#f2c200"/>' +
      '<rect x="96" y="58" width="208" height="28" rx="3" fill="#111"/><text x="108" y="77" ' + font + ' font-size="14" fill="#fff">Lake St/Midtown</text>' + line(236, 72, "Blue", BLU) +
      snowfall(),
      sky("s1", "#7d93b8", "#d7dfea"));
  }

  /* 2. First Avenue: the black club wall covered in silver stars with names painted on them, the marquee lights chasing */
  function firstave() {
    let st = ""; const pts = (cx, cy, r) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; return (cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1); }).join(" ");
        for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) { const cx = 72 + c * 52 + (r % 2) * 26, cy = 74 + r * 40, k = r * 6 + c; st += '<polygon points="' + pts(cx, cy, k === 8 ? 22 : 17) + '" fill="#d9dde3" stroke="#9aa0a8" stroke-width="1"/>' + (k === 8 ? '<text x="' + cx + '" y="' + (cy + 2.5) + '" text-anchor="middle" ' + font + ' font-size="4.6" textLength="20" lengthAdjust="spacingAndGlyphs" fill="#111">ATMOSPHERE</text>' : '<rect x="' + (cx - 7) + '" y="' + (cy - 1) + '" width="14" height="2" fill="#555"/>'); }
    let bulbs = ""; for (let i = 0; i < 24; i++) bulbs += '<circle class="bl bl' + (1 + i % 4) + '" cx="' + (52 + i * 12.5) + '" cy="214" r="2.6" fill="' + GLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#0d0f18"/>' +
      '<rect x="20" y="40" width="360" height="160" fill="#0a0a0a" stroke="#222" stroke-width="2"/>' + st +
      '<rect x="40" y="200" width="320" height="26" fill="#161616" stroke="' + GLD + '" stroke-width="1.5"/>' + bulbs +
      '<rect x="0" y="226" width="400" height="34" fill="#3d3f45"/><rect x="0" y="226" width="400" height="3" fill="#8a8d93"/>' +
      '<text class="flk" x="200" y="34" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="4">FIRST AVENUE</text>',
      "");
  }

  /* 3. January on Lake Street: the old Sears tower (Midtown Global Market) over the snowy street, cars rolling with their windows down */
  function lakestreet() {
    let win = ""; for (let r = 0; r < 7; r++) for (let c = 0; c < 9; c++) win += '<rect x="' + (64 + c * 30) + '" y="' + (120 + r * 12) + '" width="16" height="7" fill="' + ((r * 3 + c) % 5 ? "#3a4252" : "#ffe08a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="168" y="30" width="64" height="90" fill="#e6dcc4"/><path d="M168 30h64l-8 -12h-48z" fill="#d4c8ac"/>' + [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="40" width="6" height="74" fill="#c9bc9c"/>').join("") +
      '<rect x="50" y="110" width="300" height="104" fill="#e2d6bc"/>' + win +
      '<rect x="0" y="206" width="400" height="10" fill="#f4f6fa"/><rect x="0" y="216" width="400" height="44" fill="#55585e"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="car"><rect x="0" y="222" width="60" height="16" rx="5" fill="' + LAKE + '"/><rect x="12" y="216" width="30" height="9" rx="3" fill="' + LAKE + '"/><circle cx="54" cy="228" r="2.2" fill="#fff6c2"/></g>' +
      '<g class="carL"><rect x="0" y="240" width="60" height="16" rx="5" fill="' + RED + '"/><rect x="18" y="234" width="30" height="9" rx="3" fill="' + RED + '"/><circle cx="4" cy="246" r="2.4" fill="#ff3b3b"/></g>' +
      sign(300, 176, 90, "E Lake St") + pole(345, 198, 216) + snowfall(),
      sky("s3", "#8ea4c4", "#e9eef5"));
  }

  /* 4. Spoonbridge and Cherry in the Sculpture Garden: the big white spoon over the pond, the red cherry, water sprinkling off the stem */
  function spoon() {
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + mplsSky("#9fb2c8", 160) +
      '<rect x="0" y="160" width="400" height="100" fill="#6f9a5a"/>' +
      '<ellipse cx="200" cy="200" rx="170" ry="36" fill="#5f8fb8"/><g class="fl"><path d="M40 196h40M120 204h40M200 196h40M280 204h40M360 200h40" stroke="#a8d0ee" stroke-width="2"/></g>' +
      '<path d="M70 196Q160 170 250 150" stroke="#f4f4f2" stroke-width="10" fill="none" stroke-linecap="round"/><ellipse cx="282" cy="140" rx="40" ry="14" transform="rotate(-18 282 140)" fill="#f4f4f2" stroke="#c9c9c4" stroke-width="2"/>' +
      '<circle cx="290" cy="122" r="18" fill="#c8102e"/><circle cx="284" cy="116" r="5" fill="#e85a6a"/><path d="M292 104q4 -22 18 -30" stroke="#7a3a2a" stroke-width="3" fill="none"/>' +
      '<g class="fa"><circle cx="312" cy="80" r="2" fill="#dff1ff"/></g><g class="fa fa2"><circle cx="316" cy="84" r="2" fill="#dff1ff"/></g><g class="fa fa3"><circle cx="308" cy="82" r="2" fill="#dff1ff"/></g>' +
      '<path d="M0 238h400" stroke="#4f7a3a" stroke-width="4"/>',
      sky("s4", "#9cc6ea", "#eef6fb"));
  }

  /* 5. Lake St and Chicago Av, South Minneapolis: green street signs, SLUG + ATMOSPHERE tagged on the wall, the IDS Center skyline behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + mplsSky("#2c3550", 130) +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a3e30" stroke-width="1"/>').join("") +
      tag("SLUG", 22, 184, 50, GLD, -6) + tag("ATMOSPHERE", 30, 214, 24, LAKE, -3) + tag("SOUTHSIDE", 168, 176, 20, RED, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      pole(339, 96, 224) + sign(282, 98, 114, "E Lake St") + sign(282, 124, 114, "Chicago Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp"><circle cx="236" cy="168" r="3" fill="' + LAKE + '" opacity=".7"/></g><g class="sp sp2"><circle cx="242" cy="164" r="2" fill="' + LAKE + '" opacity=".6"/></g>',
      sky("s5", "#e88a5a", "#f7d6a8"));
  }

  window.SCENES = { bluestation: bluestation, firstave: firstave, lakestreet: lakestreet, spoon: spoon, corner: corner };
})();
