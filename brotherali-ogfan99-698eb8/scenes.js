/* brotherali scenes (Regions tab: Minneapolis) */
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
  const GLD = "#f2c14e", TEAL = "#3fa7a0", ORG = "#e86a33", GRN = "#00a651";

  /* 1. Nicollet Mall station on the METRO Green Line: street-level platform downtown, the train sliding in, IDS Center behind */
  function greenstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#a1)"/>' + mplsSky("#5d6f86", 176) +
      '<rect x="0" y="176" width="400" height="84" fill="#8b8f96"/>' +
      '<rect x="30" y="66" width="340" height="8" fill="#cfd4da"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 3) + '" y="74" width="6" height="104" fill="#7d838b"/>').join("") +
      lrv(20, 124, 300, GRN) +
      '<rect x="0" y="178" width="400" height="6" fill="#f2c200"/><rect x="0" y="184" width="400" height="76" fill="#b9b3a6"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<path d="M' + (i * 44) + ' 184v76" stroke="#a8a294" stroke-width="1"/>').join("") +
      '<rect x="104" y="82" width="192" height="28" rx="3" fill="#111"/><text x="116" y="101" ' + font + ' font-size="14" fill="#fff">Nicollet Mall</text>' + line(222, 96, "Green", GRN),
      sky("a1", "#f4b26a", "#fbe3bd"));
  }

  /* 2. The Stone Arch Bridge at dawn: the curved limestone arches over the Mississippi, St. Anthony Falls pouring, the sun coming up */
  function stonearch() {
    let arches = ""; for (let i = 0; i < 8; i++) { const x = 12 + i * 48; arches += '<path d="M' + x + ' 178v-16a20 20 0 0 1 40 0v16z" fill="#4c7ea6"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#a2)"/><circle class="ri" cx="300" cy="70" r="26" fill="#ffd36e"/>' +
      '<g transform="translate(20 50) scale(.9 .55)">' + mplsSky("#7a6a8a", 140) + '</g>' +
      '<rect x="0" y="126" width="400" height="10" fill="#6a7e96"/>' +
      '<rect x="0" y="132" width="400" height="46" fill="#c9b48e"/><rect x="0" y="132" width="400" height="6" fill="#b29c74"/>' + arches +
      '<rect x="0" y="178" width="400" height="82" fill="#4c7ea6"/>' +
      '<path d="M0 196h400v10H0z" fill="#dfeef8"/><path d="M0 206h400v8H0z" fill="#f4fbff"/>' +
      '<g class="fa"><path d="M20 214v10M60 214v10M100 214v10M140 214v10M180 214v10M220 214v10M260 214v10M300 214v10M340 214v10M380 214v10" stroke="#f4fbff" stroke-width="3"/></g>' +
      '<g class="fl"><path d="M0 240h30M60 248h30M120 240h30M180 248h30M240 240h30M300 248h30M360 240h30M420 248h30" stroke="#a9cde6" stroke-width="2"/></g>',
      sky("a2", "#f39a5c", "#fde1b0"));
  }

  /* 3. Fajr: a mosque at first light, the minaret and green dome, the crescent fading as the dawn comes up */
  function fajr() {
    return svg(
      '<rect width="400" height="260" fill="url(#a3)"/>' + stars(18) + '<path class="gl" d="M250 30a16 16 0 1 0 12 26a13 13 0 1 1 -12 -26z" fill="#fff3c4"/>' +
      '<ellipse cx="200" cy="262" rx="260" ry="70" fill="#f6a65a" opacity=".55"/>' +
      '<rect x="110" y="140" width="180" height="80" fill="#efe6d2"/><path d="M150 140q50 -70 100 0z" fill="#2f8f5a"/><rect x="198" y="92" width="4" height="14" fill="' + GLD + '"/><circle cx="200" cy="90" r="4" fill="' + GLD + '"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (124 + i * 44) + ' 220v-40q12 -18 24 0v40z" fill="#3a3226"/>').join("") +
      '<rect x="64" y="70" width="22" height="150" fill="#efe6d2"/><path d="M60 70h30l-15 -30z" fill="#2f8f5a"/><rect x="60" y="110" width="30" height="6" fill="#d6caae"/><rect class="flk" x="70" y="84" width="10" height="14" rx="5" fill="#ffd36e"/>' +
      '<rect x="314" y="70" width="22" height="150" fill="#efe6d2"/><path d="M310 70h30l-15 -30z" fill="#2f8f5a"/><rect x="310" y="110" width="30" height="6" fill="#d6caae"/><rect class="flk flk2" x="320" y="84" width="10" height="14" rx="5" fill="#ffd36e"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5a4a3a"/>',
      sky("a3", "#1d2a4a", "#e8955a"));
  }

  /* 4. The Uptown record store: crates of vinyl, the turntable spinning in the window, the RECORDS sign flickering */
  function records() {
    let crates = ""; for (let c = 0; c < 4; c++) { const x = 60 + c * 72; crates += '<rect x="' + x + '" y="186" width="60" height="34" fill="#8a5a32" stroke="#5a3a1a" stroke-width="2"/>'; for (let k = 0; k < 6; k++) crates += '<rect x="' + (x + 4 + k * 9) + '" y="' + (170 + (k % 2) * 4) + '" width="7" height="18" fill="' + [GLD, TEAL, ORG, "#d9d2c4", "#2a2a2a", "#7a5ab8"][(k + c) % 6] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#1c1410"/><rect x="20" y="20" width="360" height="200" fill="#2e2018" stroke="#4a3426" stroke-width="2"/>' +
      '<rect x="110" y="34" width="180" height="34" rx="4" fill="#111" stroke="' + GLD + '" stroke-width="2"/><text class="flk" x="200" y="58" text-anchor="middle" ' + font + ' font-size="18" fill="' + GLD + '" letter-spacing="5">RECORDS</text>' +
      '<rect x="70" y="84" width="260" height="76" fill="#3a5a6a" opacity=".6"/>' +
      '<rect x="150" y="110" width="100" height="44" rx="3" fill="#2c2c30" stroke="#666"/><g style="transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite"><circle cx="190" cy="132" r="18" fill="#0b0b0b"/><circle cx="190" cy="132" r="6" fill="' + ORG + '"/><rect x="189" y="124" width="2" height="4" fill="#fff"/></g><path d="M240 116l-12 22" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>' +
      '<style>@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}</style>' +
      crates + '<rect x="0" y="220" width="400" height="40" fill="#5a3e2a"/>',
      "");
  }

  /* 5. Hennepin Av and W 24th St in Uptown: green street signs, BROTHER ALI tagged on the wall, the IDS Center skyline behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#a5)"/>' + mplsSky("#2a2f45", 130) +
      '<rect x="0" y="126" width="400" height="98" fill="#6e5848"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5e4a3c" stroke-width="1"/>').join("") +
      tag("BROTHER ALI", 14, 178, 33, GLD, -6) + tag("UNDISPUTED", 28, 212, 20, TEAL, -3) + tag("TRUTH", 176, 214, 22, ORG, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      pole(339, 96, 224) + sign(276, 98, 120, "Hennepin Av") + sign(276, 124, 120, "W 24th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sp"><circle cx="250" cy="200" r="3" fill="' + GLD + '" opacity=".7"/></g><g class="sp sp2"><circle cx="256" cy="196" r="2" fill="' + GLD + '" opacity=".6"/></g>',
      sky("a5", "#3b5a8a", "#f2b878"));
  }

  window.SCENES = { greenstation: greenstation, stonearch: stonearch, fajr: fajr, records: records, corner: corner };
})();
