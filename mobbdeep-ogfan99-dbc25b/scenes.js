/* Mobb Deep game (NYC map, Queens: Queensbridge, Long Island City). Prodigy and Havoc.
   1. Court Sq: the 7 up on the el over Long Island City (the G underneath).
   2. Steinway Place, Astoria: the old piano works, where the grand pianos come from (Havoc's haunted piano loops).
   3. The Renwick ruin on Roosevelt Island at night, the gothic shell you see across the river from the Bridge (that "Hell on Earth" mood).
   4. Hempstead, Long Island: St. George's church green, the town where P was born.
   5. 21st St & 41st Rd, the Queensboro Bridge behind, MOBB DEEP tagged on the wall.
   400 x 260 SVGs. CSS classes are prefixed "mbd-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mbdcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.mbd-car{animation:mbdcar 7s linear infinite}.mbd-car2{animation-delay:-3.6s}' +
    '@keyframes mbdflk{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.mbd-flk{animation:mbdflk 2.6s infinite}' +
    '@keyframes mbdkey{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.mbd-key{animation:mbdkey 1.2s ease-in-out infinite}.mbd-k2{animation-delay:.3s}.mbd-k3{animation-delay:.6s}.mbd-k4{animation-delay:.9s}' +
    '@keyframes mbdnote{0%{opacity:0;transform:translate(0,0)}20%{opacity:1}100%{opacity:0;transform:translate(14px,-46px)}}.mbd-note{animation:mbdnote 3s linear infinite}.mbd-n2{animation-delay:1s}.mbd-n3{animation-delay:2s}' +
    '@keyframes mbdboat{from{transform:translateX(420px)}to{transform:translateX(-120px)}}.mbd-boat{animation:mbdboat 16s linear infinite}' +
    '@keyframes mbdrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.mbd-rip{animation:mbdrip 2.4s ease-in-out infinite}.mbd-rip2{animation-delay:-1.2s}' +
    '@keyframes mbdglow{0%,100%{opacity:.35}50%{opacity:.75}}.mbd-glow{animation:mbdglow 3s ease-in-out infinite}' +
    '@keyframes mbdbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mbd-bell{transform-box:fill-box;transform-origin:50% 0%;animation:mbdbell 1.6s ease-in-out infinite}' +
    '@keyframes mbdleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-30px,120px) rotate(300deg)}}.mbd-leaf{transform-box:fill-box;animation:mbdleaf 5s linear infinite}.mbd-l2{animation-delay:-1.7s}.mbd-l3{animation-delay:-3.4s}' +
    '@keyframes mbdmist{0%{opacity:.8;transform:translate(0,0) scale(.6)}100%{opacity:0;transform:translate(26px,-8px) scale(1.6)}}.mbd-mist{transform-box:fill-box;transform-origin:50% 50%;animation:mbdmist 1.4s ease-out infinite}.mbd-m2{animation-delay:.45s}.mbd-m3{animation-delay:.9s}' +
    '@keyframes mbdbeam{0%,100%{opacity:.15}50%{opacity:.45}}.mbd-beam{animation:mbdbeam 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const ICE = "#9fc3e6", RED = "#d6402b", GOLD = "#c9a24a", CREAM = "#efe9dc";

  /* 1. Court Sq, the 7 on the el: platform canopy, the black sign with the 7 and G, the silver 7 train sliding in, LIC brick lofts behind */
  function courtsq() {
    let lofts = "";
    [[0, 70, 60], [64, 54, 70], [140, 84, 52], [196, 62, 64], [264, 46, 80], [334, 66, 66]].forEach(([x, y, w]) => {
      lofts += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="' + (x % 3 ? "#5a3328" : "#4a2c26") + '"/>';
      for (let yy = y + 8; yy < 140; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 13) lofts += '<rect x="' + xx + '" y="' + yy + '" width="7" height="8" fill="' + ((xx + yy) % 3 ? "#2a1a17" : "#ffd98a") + '" opacity=".9"/>';
    });
    let win = "";
    for (let x = 26; x < 280; x += 32) win += '<rect x="' + x + '" y="150" width="20" height="16" rx="2" fill="#d5e4f2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mcq)"/>' + stars(8) + lofts +
      /* canopy */
      '<path d="M0 96h400v10H0z" fill="#3c4f43"/><path d="M0 106h400" stroke="#24302a" stroke-width="3"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="106" width="8" height="40" fill="#3c4f43"/>').join("") +
      [90, 250].map(x => '<rect class="mbd-flk" x="' + (x - 20) + '" y="106" width="40" height="5" rx="2" fill="#fff6d0"/>').join("") +
      /* sign */
      '<rect x="74" y="114" width="252" height="26" rx="3" fill="#111"/><rect x="74" y="114" width="252" height="3" fill="#fff"/>' +
      '<text x="88" y="133" ' + font + ' font-size="14" fill="#fff">Court Sq</text>' +
      bullet(276, 127, "7", "#b933ad") + bullet(302, 127, "G", "#6cbe45") +
      /* train */
      '<g class="anim-train">' +
        '<rect x="10" y="144" width="300" height="46" rx="5" fill="#c4c9d1" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="176" width="300" height="4" fill="#b933ad"/>' +
        '<rect x="290" y="150" width="16" height="20" rx="2" fill="#d5e4f2"/>' + bullet(298, 180, "7", "#b933ad") +
      '</g>' +
      /* platform */
      '<rect x="0" y="190" width="400" height="8" fill="#eab308"/><rect x="0" y="198" width="400" height="62" fill="#6a6762"/>' +
      '<path d="M0 198h400" stroke="#4a4844" stroke-width="2"/>' +
      person(330, 206, "#1d1d1f") + person(352, 210, "#2b2b2e") +
      txt("LONG ISLAND CITY · QUEENS", 160, 240, 11, CREAM, 'letter-spacing="3"'),
      sky("mcq", "#1a2433", "#5d6f86"));
  }

  /* 2. Steinway Place, Astoria: the red-brick piano works, a big arched window with a black grand piano, keys moving, notes drifting up */
  function piano() {
    let brick = "";
    for (let y = 70; y < 206; y += 8) for (let x = (y / 8) % 2 ? 0 : -8; x < 400; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3324"/>';
    let keys = "";
    for (let i = 0; i < 14; i++) keys += '<rect class="mbd-key mbd-k' + (1 + i % 4) + '" x="' + (150 + i * 7) + '" y="170" width="6" height="16" fill="#f5f1e6" stroke="#999" stroke-width=".4"/>';
    for (let i = 0; i < 13; i++) if (i % 7 !== 2 && i % 7 !== 6) keys += '<rect x="' + (154 + i * 7) + '" y="170" width="4" height="10" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mpi)"/>' +
      /* smokestack */
      '<rect x="330" y="10" width="22" height="70" fill="#6d2c20"/><rect x="326" y="8" width="30" height="6" fill="#3c1a14"/>' +
      '<circle class="mbd-glow" cx="341" cy="0" r="12" fill="#cfd4dc" opacity=".4"/>' +
      /* building */
      '<rect x="0" y="66" width="400" height="140" fill="#8a3b2a"/>' + brick +
      '<rect x="0" y="62" width="400" height="8" fill="#3c1a14"/>' +
      [20, 330].map(x => '<path d="M' + x + ' 196v-80a24 24 0 0 1 48 0v80z" fill="#1b2633" stroke="#e9dfc8" stroke-width="3"/>').join("") +
      /* big window with the piano */
      '<path d="M100 200v-96a100 50 0 0 1 200 0v96z" fill="#15110f" stroke="#e9dfc8" stroke-width="4"/>' +
      '<path d="M200 54v146M100 130h200" stroke="#e9dfc8" stroke-width="1.5" opacity=".35"/>' +
      '<ellipse class="mbd-glow" cx="200" cy="150" rx="90" ry="40" fill="#ffd98a" opacity=".4"/>' +
      /* grand piano */
      '<path d="M140 168h120q20 0 20-16q0-26-40-30q-40-4-60-26q-20-10-40 6z" fill="#0b0b0c" stroke="#3a3a3e" stroke-width="2"/>' +
      '<path d="M146 118l60-38" stroke="#0b0b0c" stroke-width="4"/>' +
      '<rect x="146" y="166" width="104" height="22" fill="#0b0b0c"/>' + keys +
      '<rect x="160" y="188" width="6" height="12" fill="#0b0b0c"/><rect x="240" y="188" width="6" height="12" fill="#0b0b0c"/>' +
      /* notes */
      ['<text class="mbd-note" x="260" y="120" font-size="18" fill="' + ICE + '">&#9834;</text>',
       '<text class="mbd-note mbd-n2" x="128" y="126" font-size="16" fill="' + CREAM + '">&#9835;</text>',
       '<text class="mbd-note mbd-n3" x="214" y="104" font-size="18" fill="' + GOLD + '">&#9834;</text>'].join("") +
      /* sidewalk + street sign */
      '<rect x="0" y="206" width="400" height="54" fill="#4b4d52"/><rect x="0" y="206" width="400" height="4" fill="#8a8c90"/>' +
      '<rect x="40" y="208" width="4" height="40" fill="#3d4b3f"/><rect x="8" y="210" width="96" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' + txt("Steinway Pl", 56, 222, 10, "#fff") +
      txt("THE PIANO WORKS · ASTORIA", 250, 240, 11, CREAM, 'letter-spacing="2"'),
      sky("mpi", "#2b3a4d", "#9aa9b8"));
  }

  /* 3. The Renwick ruin on Roosevelt Island at night, seen across the East River from Queensbridge: the gray stone gothic shell, uplights, a tug going by */
  function ruin() {
    let wins = "";
    for (let x = 136; x < 270; x += 22) wins += '<path d="M' + x + ' 150v-26a6 6 0 0 1 12 0v26z" fill="#0b0e16"/><path d="M' + x + ' 112v-18a6 6 0 0 1 12 0v18z" fill="#0b0e16"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mru)"/>' + stars(22) +
      '<circle cx="330" cy="40" r="16" fill="#f3efe0"/><circle cx="336" cy="36" r="14" fill="#151b2c"/>' +
      /* Manhattan behind */
      [[0, 120, 30], [34, 104, 24], [62, 128, 26], [300, 110, 28], [332, 96, 22], [358, 122, 42]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (180 - y) + '" fill="#1f2638"/>').join("") +
      /* uplight beams */
      '<path class="mbd-beam" d="M120 180L150 80h20L150 180z" fill="#f2c98a"/><path class="mbd-beam" style="animation-delay:-1.1s" d="M290 180L260 80h-20L270 180z" fill="#f2c98a"/>' +
      /* the ruin */
      '<path d="M126 180v-86l10-14l10 14v-6h22v-12l10-10l10 10v12h26v-12l10-10l10 10v12h22v6l10-14l10 14v86z" fill="#8d8e8f" stroke="#5e5f61" stroke-width="2"/>' +
      '<path d="M126 132h158M126 160h158" stroke="#6e6f71" stroke-width="2"/>' + wins +
      '<path d="M150 70l4-10l4 10M200 64l4-10l4 10M250 70l4-10l4 10" stroke="#8d8e8f" stroke-width="3" fill="none"/>' + '<path d="M128 120q6-10 14 0q-2 14-14 18zM270 100q8-6 14 4v26q-10-6-14-30zM196 150q8-8 16 0v20h-16z" fill="#3f6a3a" opacity=".85"/>' +
      '<rect x="116" y="176" width="178" height="8" fill="#3c3f3a"/>' +
      '<path d="M100 184q20-14 40 0M262 184q24-16 50 0" fill="#1f3a26"/>' +
      /* river */
      '<rect x="0" y="184" width="400" height="76" fill="#0d1a2c"/>' +
      '<path class="mbd-rip" d="M20 200h40M140 214h60M260 204h50M80 232h46M300 238h60" stroke="#f2c98a" stroke-width="2" opacity=".5"/>' +
      '<path class="mbd-rip mbd-rip2" d="M180 226h40M30 248h50M340 218h40" stroke="' + ICE + '" stroke-width="2" opacity=".4"/>' +
      '<g class="mbd-boat"><path d="M0 214h56l-8 12H8z" fill="' + RED + '"/><rect x="14" y="202" width="22" height="12" fill="#e8e3d8"/><rect x="20" y="194" width="6" height="8" fill="#333"/><circle class="mbd-flk" cx="40" cy="206" r="2" fill="#7cff8a"/></g>' +
      txt("RENWICK RUIN · ROOSEVELT ISLAND", 200, 22, 10, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("mru", "#070a14", "#26304a"));
  }

  /* 4. Hempstead, Long Island: St. George's white church and steeple on the green, the bell swinging, leaves coming down. Where P was born. */
  function hempstead() {
    return svg(
      '<rect width="400" height="260" fill="url(#mhe)"/>' +
      '<circle cx="70" cy="50" r="22" fill="#ffe2a8" opacity=".9"/>' +
      /* trees */
      [[40, 150, 36], [96, 140, 30], [320, 146, 38], [372, 152, 30]].map(([x, y, r]) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="50" fill="#4a3220"/><circle cx="' + x + '" cy="' + (y - 10) + '" r="' + r + '" fill="#c4702a"/><circle cx="' + (x + 10) + '" cy="' + (y - 20) + '" r="' + (r * .6) + '" fill="#d98c32"/>').join("") +
      /* church */
      '<rect x="136" y="110" width="128" height="94" fill="#f4f1ea" stroke="#b9b3a6" stroke-width="2"/>' +
      '<path d="M128 112l72-40l72 40z" fill="#3c4a5a"/>' +
      '<rect x="182" y="40" width="36" height="72" fill="#f4f1ea" stroke="#b9b3a6" stroke-width="2"/>' +
      '<rect x="188" y="16" width="24" height="26" fill="#f4f1ea" stroke="#b9b3a6" stroke-width="2"/>' +
      '<path d="M186 18l14-30l14 30z" fill="#3c4a5a"/>' +
      '<path d="M192 28h16v12h-16z" fill="#2a2f36"/><path class="mbd-bell" d="M196 29q4-2 8 0l2 9h-12z" fill="' + GOLD + '"/>' +
      '<circle cx="200" cy="60" r="9" fill="#fff" stroke="#3c4a5a" stroke-width="2"/><path d="M200 60v-6M200 60h4" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M190 112v-22a10 10 0 0 1 20 0v22z" fill="#2a2f36"/>' +
      [150, 230].map(x => '<path d="M' + x + ' 176v-40a10 10 0 0 1 20 0v40z" fill="#9cc0dc" stroke="#b9b3a6" stroke-width="2"/>').join("") +
      '<path d="M186 204v-34a14 14 0 0 1 28 0v34z" fill="#7a2a22"/>' +
      /* green + path */
      '<rect x="0" y="200" width="400" height="60" fill="#55703a"/><path d="M186 204l-20 56h68l-20-56z" fill="#c9bfa8"/>' +
      '<path class="mbd-leaf" d="M300 90q6-6 12 0q-6 6-12 0z" fill="#d98c32"/><path class="mbd-leaf mbd-l2" d="M60 96q6-6 12 0q-6 6-12 0z" fill="#c4702a"/><path class="mbd-leaf mbd-l3" d="M350 100q6-6 12 0q-6 6-12 0z" fill="#e0a040"/>' +
      txt("HEMPSTEAD, LONG ISLAND · WHERE P WAS BORN", 200, 246, 10, "#fff", 'letter-spacing="1.5"'),
      sky("mhe", "#f0a35e", "#f8dcb0"));
  }

  /* 5. 21st St & 41st Rd, Queensbridge: the Queensboro Bridge cantilevers behind, a brick wall tagged MOBB DEEP, green signs, spray mist */
  function corner() {
    let truss = "";
    for (let x = 0; x < 400; x += 16) truss += '<path d="M' + x + ' 92l8-16l8 16" stroke="#8d8a80" stroke-width="2" fill="none"/>';
    let brick = "";
    for (let y = 132; y < 226; y += 10) brick += '<path d="M0 ' + y + 'h400" stroke="#4a2a22" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mco)"/>' + stars(14) +
      /* bridge: towers + deck + truss */
      [60, 200, 340].map(x => '<g stroke="#9b978c" stroke-width="3" fill="none"><path d="M' + (x - 14) + ' 124V40M' + (x + 14) + ' 124V40M' + (x - 14) + ' 40h28"/><path d="M' + (x - 14) + ' 52l28 18l-28 18l28 18M' + (x + 14) + ' 52l-28 18l28 18l-28 18" stroke-width="1.6"/></g><path d="M' + (x - 16) + ' 40l4-16l4 16M' + (x + 8) + ' 40l4-16l4 16" fill="#9b978c"/>').join("") +
      '<path d="M0 60q60 30 60-20q70 60 140-20q70 60 140 20q0 50 60 20" stroke="#9b978c" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="92" width="400" height="8" fill="#7d7a70"/>' + truss +
      [30, 90, 150, 250, 310, 370].map(x => '<circle class="mbd-flk" style="animation-delay:-' + (x % 7) / 3 + 's" cx="' + x + '" cy="96" r="2" fill="#ffe7a0"/>').join("") +
      /* wall */
      '<rect x="0" y="124" width="400" height="102" fill="#6a3628"/>' + brick +
      tag("MOBB DEEP", 18, 196, 50, ICE, -5) + tag("QB", 236, 222, 30, RED, -4) + tag("THE INFAMOUS", 40, 222, 16, GOLD, -3) +
      '<circle class="mbd-mist" cx="300" cy="150" r="6" fill="' + RED + '" opacity=".6"/><circle class="mbd-mist mbd-m2" cx="304" cy="154" r="5" fill="' + RED + '" opacity=".5"/><circle class="mbd-mist mbd-m3" cx="298" cy="148" r="4" fill="' + RED + '" opacity=".5"/>' +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#4f5156"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="mbd-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="#20232a"/><rect x="8" y="232" width="26" height="8" rx="3" fill="#20232a"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="358" y="104" width="5" height="124" fill="#3d4b3f"/>' +
      '<rect x="304" y="106" width="92" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("21 St", 350, 122, 12, "#fff") +
      '<rect x="304" y="132" width="92" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("41 Rd", 350, 148, 12, "#fff") +
      txt("QUEENSBORO BRIDGE", 200, 18, 9, CREAM, 'letter-spacing="3" opacity=".75"'),
      sky("mco", "#0a0d18", "#2e3550"));
  }

  window.SCENES = { courtsq: courtsq, piano: piano, ruin: ruin, hempstead: hempstead, corner: corner };
})();
