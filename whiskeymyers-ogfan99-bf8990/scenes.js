/* whiskeymyers scenes (Regions: Houston + Texas / Genres: country, Southern rock; Palestine TX, East Texas Piney Woods). CSS classes prefixed wmy- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wmyglow{0%,100%{opacity:.45}50%{opacity:1}}.wmy-glow{animation:wmyglow 2.4s ease-in-out infinite}.wmy-g2{animation-delay:-1.2s}' +
    '@keyframes wmycloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.wmy-cl{animation:wmycloud 14s ease-in-out infinite alternate}' +
    '@keyframes wmypuff{0%{transform:translate(0,0) scale(.6);opacity:.9}100%{transform:translate(-40px,-60px) scale(1.8);opacity:0}}.wmy-pf{transform-box:fill-box;transform-origin:50% 50%;animation:wmypuff 2.4s ease-out infinite}.wmy-pf2{animation-delay:-.8s}.wmy-pf3{animation-delay:-1.6s}' +
    '@keyframes wmypetal{0%{transform:translate(0,-10px) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(-36px,120px) rotate(220deg);opacity:0}}.wmy-pt{transform-box:fill-box;transform-origin:50% 50%;animation:wmypetal 5s linear infinite}.wmy-pt2{animation-delay:-1.7s}.wmy-pt3{animation-delay:-3.4s}' +
    '@keyframes wmytwk{0%,100%{opacity:.2}50%{opacity:1}}.wmy-tw{animation:wmytwk 1.8s ease-in-out infinite}.wmy-tw2{animation-delay:-.9s}' +
    '@keyframes wmyfly{0%{transform:translate(0,0)}25%{transform:translate(8px,-6px)}50%{transform:translate(2px,-12px)}75%{transform:translate(-6px,-4px)}100%{transform:translate(0,0)}}.wmy-fly{animation:wmyfly 4s ease-in-out infinite}.wmy-fly2{animation-delay:-2s}' +
    '@keyframes wmyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wmy-sp{animation:wmyspray 1.4s ease-out infinite}.wmy-sp2{animation-delay:.45s}' +
    '@keyframes wmyflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.wmy-flag{transform-box:fill-box;transform-origin:0 50%;animation:wmyflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const AMBER = "#e0942e", PINE = "#2f5a34", CREAM = "#f4ecd8", RED = "#b8402e";
  /* a loblolly pine */
  const pine = (x, base, h, c) => '<rect x="' + (x - 2) + '" y="' + (base - h) + '" width="4" height="' + h + '" fill="#5a3e28"/>' +
    [0.15, 0.32, 0.5].map((f, i) => '<ellipse cx="' + (x + (i % 2 ? 4 : -4)) + '" cy="' + (base - h + h * f) + '" rx="' + (h * 0.16) + '" ry="' + (h * 0.09) + '" fill="' + (c || PINE) + '"/>').join("");
  /* a dogwood: dark branches with four-petal white blossoms */
  const blossom = (x, y, r) => '<g>' + [0, 90, 180, 270].map(a => '<ellipse cx="' + x + '" cy="' + (y - r) + '" rx="' + (r * 0.62) + '" ry="' + r + '" fill="#fbf7ee" stroke="#e8d8c8" stroke-width=".6" transform="rotate(' + (a + 45) + ' ' + x + ' ' + y + ')"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.32) + '" fill="#9ab04a"/></g>';
  const dogwood = (x, base, s) => {
    let o = '<path d="M' + x + ' ' + base + 'q-2 -' + (30 * s) + ' 0 -' + (50 * s) + 'M' + x + ' ' + (base - 40 * s) + 'q-' + (20 * s) + ' -' + (10 * s) + ' -' + (36 * s) + ' -' + (24 * s) + 'M' + x + ' ' + (base - 44 * s) + 'q' + (22 * s) + ' -' + (10 * s) + ' ' + (38 * s) + ' -' + (22 * s) + 'M' + x + ' ' + (base - 50 * s) + 'q-4 -' + (14 * s) + ' 4 -' + (26 * s) + '" stroke="#4a3426" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>';
    [[-36, -64], [-24, -60], [-14, -70], [0, -76], [4, -64], [16, -72], [28, -66], [38, -62], [-30, -74], [24, -80], [-6, -86], [10, -86]].forEach(p => o += blossom(x + p[0] * s, base + p[1] * s, 5 * s));
    return o;
  };
  /* Anderson County Courthouse (1914, Beaux-Arts): buff brick, white terra cotta Ionic porticos, dome with Lady Justice */
  const courthouse = (cx, base, s) => {
    const B = "#d8b98a", T = "#f4efe2", D = "#a88a5e";
    const X = v => (cx + v * s).toFixed(1), Y = v => (base - v * s).toFixed(1), k = v => (v * s).toFixed(1);
    let o = '<rect x="' + X(-120) + '" y="' + Y(76) + '" width="' + k(240) + '" height="' + k(76) + '" fill="' + B + '"/><rect x="' + X(-124) + '" y="' + Y(80) + '" width="' + k(248) + '" height="' + k(6) + '" fill="' + T + '"/><rect x="' + X(-120) + '" y="' + Y(14) + '" width="' + k(240) + '" height="' + k(14) + '" fill="' + T + '"/>';
    for (let i = -5; i <= 5; i++) if (Math.abs(i) > 1) { o += '<rect x="' + X(i * 20 - 4) + '" y="' + Y(66) + '" width="' + k(8) + '" height="' + k(14) + '" fill="#3e4a56"/><rect x="' + X(i * 20 - 4) + '" y="' + Y(44) + '" width="' + k(8) + '" height="' + k(14) + '" fill="#3e4a56"/>'; }
    /* portico */
    o += '<rect x="' + X(-38) + '" y="' + Y(82) + '" width="' + k(76) + '" height="' + k(8) + '" fill="' + T + '"/><path d="M' + X(-42) + ' ' + Y(82) + 'L' + X(0) + ' ' + Y(102) + 'L' + X(42) + ' ' + Y(82) + 'z" fill="' + T + '" stroke="' + D + '" stroke-width="' + k(1.2) + '"/>';
    for (let i = 0; i < 6; i++) o += '<rect x="' + X(-33 + i * 13) + '" y="' + Y(74) + '" width="' + k(5) + '" height="' + k(60) + '" fill="' + T + '"/><rect x="' + X(-34.5 + i * 13) + '" y="' + Y(76) + '" width="' + k(8) + '" height="' + k(3) + '" fill="' + T + '"/>';
    /* drum + dome + Lady Justice */
    o += '<rect x="' + X(-26) + '" y="' + Y(124) + '" width="' + k(52) + '" height="' + k(24) + '" fill="' + T + '"/>';
    for (let i = 0; i < 6; i++) o += '<rect x="' + X(-22 + i * 8.4) + '" y="' + Y(120) + '" width="' + k(3) + '" height="' + k(14) + '" fill="' + D + '"/>';
    o += '<path d="M' + X(-28) + ' ' + Y(124) + 'Q' + X(-26) + ' ' + Y(156) + ' ' + X(0) + ' ' + Y(160) + 'Q' + X(26) + ' ' + Y(156) + ' ' + X(28) + ' ' + Y(124) + 'z" fill="#8aa0a8"/>' +
      [-14, 0, 14].map(v => '<path d="M' + X(v) + ' ' + Y(125) + 'Q' + X(v * 0.6) + ' ' + Y(150) + ' ' + X(0) + ' ' + Y(160) + '" stroke="#6a8088" stroke-width="' + k(1) + '" fill="none"/>').join("") +
      '<rect x="' + X(-4) + '" y="' + Y(168) + '" width="' + k(8) + '" height="' + k(8) + '" fill="' + T + '"/>' +
      '<g fill="#d9b04a"><rect x="' + X(-1.5) + '" y="' + Y(180) + '" width="' + k(3) + '" height="' + k(12) + '"/><circle cx="' + X(0) + '" cy="' + Y(182) + '" r="' + k(2) + '"/><path d="M' + X(-7) + ' ' + Y(178) + 'h' + k(14) + '" stroke="#d9b04a" stroke-width="' + k(1) + '"/><path d="M' + X(-8) + ' ' + Y(176) + 'l' + k(1) + ' ' + k(3) + 'h' + k(2) + 'z M' + X(6) + ' ' + Y(176) + 'l' + k(1) + ' ' + k(3) + 'h' + k(2) + 'z"/></g>';
    return '<g>' + o + '</g>';
  };

  /* 1. Texas State Railroad, Palestine Depot: the Victorian depot in the pines, a steam engine pulling in */
  function wmyrail() {
    let pines = "";
    [[14, 150, 120], [44, 150, 100], [70, 150, 130], [330, 150, 118], [362, 150, 136], [392, 150, 104]].forEach(p => pines += pine(p[0], p[1], p[2]));
    return svg(
      '<rect width="400" height="260" fill="url(#wmy1)"/>' +
      '<g class="wmy-cl"><ellipse cx="120" cy="26" rx="34" ry="8" fill="#fff" opacity=".6"/><ellipse cx="270" cy="18" rx="30" ry="7" fill="#fff" opacity=".5"/></g>' +
      pines +
      /* Victorian depot */
      '<rect x="110" y="96" width="180" height="58" fill="' + CREAM + '"/><path d="M98 98l102 -36l102 36z" fill="#8a2e22"/><rect x="186" y="44" width="28" height="22" fill="' + CREAM + '"/><path d="M182 46l18 -14l18 14z" fill="#8a2e22"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (124 + i * 32) + '" y="122" width="16" height="24" fill="#2e4a3a"/><rect x="' + (124 + i * 32) + '" y="122" width="16" height="3" fill="' + AMBER + '" class="wmy-glow' + (i % 2 ? " wmy-g2" : "") + '"/>').join("") +
      '<rect x="110" y="96" width="180" height="4" fill="#2e5a3a"/><rect x="110" y="150" width="180" height="4" fill="#2e5a3a"/>' +
      /* station sign */
      '<rect x="140" y="101" width="120" height="17" rx="2" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="200" y="113.5" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="1">PALESTINE DEPOT</text>' +
      '<rect x="0" y="154" width="400" height="16" fill="#9a8a72"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#6a5a46"/>' +
      Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="212" width="8" height="14" fill="#4a3424"/>').join("") +
      '<rect x="0" y="214" width="400" height="3" fill="#9aa0a6"/><rect x="0" y="222" width="400" height="3" fill="#9aa0a6"/>' +
      /* the steam engine */
      '<g class="anim-train"><g transform="translate(60 0)">' +
      '<g class="wmy-pf"><circle cx="98" cy="146" r="9" fill="#e8e8e8"/></g><g class="wmy-pf wmy-pf2"><circle cx="98" cy="146" r="8" fill="#ddd"/></g><g class="wmy-pf wmy-pf3"><circle cx="98" cy="146" r="10" fill="#f2f2f2"/></g>' +
      '<rect x="40" y="170" width="120" height="34" rx="6" fill="#1e1e22"/><rect x="92" y="150" width="12" height="22" fill="#1e1e22"/><path d="M88 150h20l-4 -6h-12z" fill="#1e1e22"/>' +
      '<rect x="146" y="156" width="54" height="48" fill="#2a2a30"/><rect x="152" y="162" width="18" height="16" fill="' + AMBER + '" opacity=".85" class="wmy-glow"/><path d="M142 154h62v-6h-62z" fill="#8a2e22"/>' +
      '<rect x="40" y="176" width="120" height="4" fill="#c8a24a"/><circle cx="34" cy="186" r="6" fill="#ffe8a0" class="wmy-glow"/><path d="M22 204l18 -12v12z" fill="#555"/>' +
      [62, 96, 130, 172].map(x => '<circle cx="' + x + '" cy="206" r="' + (x < 140 ? 13 : 9) + '" fill="#8a2e22" stroke="#111" stroke-width="3"/><circle cx="' + x + '" cy="206" r="3" fill="#111"/>').join("") +
      '<path d="M62 206h68" stroke="#bbb" stroke-width="3"/></g></g>',
      sky("wmy1", "#6aa6d8", "#f2e4c4"));
  }

  /* 2. The Texas Dogwood Trails: white dogwoods blooming under tall pines, petals falling */
  function wmydogwood() {
    let pines = "";
    [[20, 200, 190], [90, 196, 170], [170, 200, 200], [250, 196, 176], [330, 200, 196], [390, 198, 170]].forEach(p => pines += pine(p[0], p[1], p[2], "#24482a"));
    return svg(
      '<rect width="400" height="260" fill="url(#wmy2)"/>' + pines +
      '<rect x="0" y="196" width="400" height="64" fill="#5a7a3a"/><path d="M150 260q30 -40 50 -64h20q-6 30 10 64z" fill="#a8885a"/>' +
      dogwood(70, 214, 1.1) + dogwood(300, 216, 1.2) + dogwood(190, 204, 0.8) +
      [[60, 120], [120, 100], [240, 110], [320, 96], [200, 130]].map((p, i) => '<g class="wmy-pt' + (i % 3 === 1 ? " wmy-pt2" : i % 3 === 2 ? " wmy-pt3" : "") + '"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="3" ry="4.5" fill="#fbf7ee"/></g>').join("") +
      /* trail marker */
      '<rect x="356" y="200" width="4" height="40" fill="#5a3e28"/><rect x="326" y="194" width="66" height="18" rx="2" fill="#5a3e28"/><text x="359" y="207" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + CREAM + '">DOGWOOD TRAIL</text>',
      sky("wmy2", "#8ac0e0", "#f6ecd4"));
  }

  /* 3. The Anderson County Courthouse on the hill: buff brick, white Ionic porticos, the dome with Lady Justice */
  function wmycourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#wmy3)"/>' +
      '<g class="wmy-cl"><ellipse cx="70" cy="34" rx="36" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="26" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      courthouse(200, 182, 0.95) +
      '<rect x="40" y="70" width="2.5" height="112" fill="#bbb"/><g class="wmy-flag"><rect x="42.5" y="72" width="34" height="22" fill="#fff"/><rect x="42.5" y="72" width="12" height="22" fill="#1f3a8a"/><rect x="54.5" y="83" width="22" height="11" fill="#c8202a"/><path d="M48.5 77.5l1.2 3.4h3.5l-2.8 2.1 1 3.4-2.9-2-2.9 2 1-3.4-2.8-2.1h3.5z" fill="#fff"/></g>' +
      '<rect x="0" y="182" width="400" height="20" fill="#6a9a48"/>' +
      Array.from({ length: 5 }, (_, i) => '<ellipse cx="' + (10 + i * 95) + '" cy="180" rx="20" ry="12" fill="#4f7a36"/>').join("") +
      '<rect x="160" y="182" width="80" height="20" fill="#d8d0c0"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (160 - i * 6) + '" y="' + (186 + i * 4) + '" width="' + (80 + i * 12) + '" height="2" fill="#bfb6a4"/>').join("") +
      '<rect x="0" y="202" width="400" height="58" fill="#5a5a5e"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>',
      sky("wmy3", "#5a9ad8", "#f3e2c0"));
  }

  /* 4. Back roads south of Palestine: a little white church, a trailer home in the pines, lightning bugs at dusk */
  function wmychurch() {
    let pines = "";
    [[10, 170, 110], [40, 172, 96], [372, 170, 120], [396, 172, 90], [250, 168, 80]].forEach(p => pines += pine(p[0], p[1], p[2], "#1e3a24"));
    return svg(
      '<rect width="400" height="260" fill="url(#wmy4)"/>' +
      [[60, 30], [140, 18], [220, 40], [300, 22], [360, 50]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.3" fill="#fff" class="wmy-tw' + (i % 2 ? " wmy-tw2" : "") + '"/>').join("") +
      '<circle cx="330" cy="60" r="14" fill="#f8e8b8" opacity=".9"/>' + pines +
      '<rect x="0" y="168" width="400" height="92" fill="#3a5230"/>' +
      /* little white church */
      '<rect x="70" y="116" width="80" height="56" fill="#f4f2ea"/><path d="M62 118l48 -30l48 30z" fill="#6a6a70"/><rect x="100" y="62" width="20" height="30" fill="#f4f2ea"/><path d="M98 62l12 -22l12 22z" fill="#6a6a70"/><path d="M110 30v12M105 35h10" stroke="#f4f2ea" stroke-width="2.4"/>' +
      '<path d="M102 172v-22a8 8 0 0 1 16 0v22z" fill="#5a3a24"/><rect x="80" y="132" width="10" height="16" rx="5" fill="' + AMBER + '" class="wmy-glow"/><rect x="130" y="132" width="10" height="16" rx="5" fill="' + AMBER + '" class="wmy-glow wmy-g2"/>' +
      /* trailer */
      '<rect x="216" y="140" width="130" height="38" rx="4" fill="#e6ddc8"/><rect x="216" y="152" width="130" height="5" fill="' + RED + '"/>' +
      '<rect x="232" y="146" width="20" height="14" fill="' + AMBER + '" class="wmy-glow"/><rect x="300" y="146" width="20" height="14" fill="' + AMBER + '" class="wmy-glow wmy-g2"/><rect x="268" y="148" width="14" height="30" fill="#7a5a3a"/>' +
      '<path d="M262 178h26v6h-26z" fill="#6a5040"/><rect x="216" y="178" width="130" height="6" fill="#4a4a4e"/>' +
      /* dirt road + mailbox */
      '<path d="M160 260q20 -60 40 -80h14q-4 40 18 80z" fill="#a8885a"/>' +
      '<rect x="200" y="200" width="3" height="22" fill="#5a3e28"/><rect x="192" y="192" width="20" height="10" rx="5" fill="#8a8f96"/>' +
      [[40, 200], [160, 210], [250, 214], [330, 200], [370, 226], [90, 226]].map((p, i) => '<g class="wmy-fly' + (i % 2 ? " wmy-fly2" : "") + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="2" fill="#e8f27a" class="wmy-tw' + (i % 2 ? "" : " wmy-tw2") + '"/></g>').join(""),
      sky("wmy4", "#1c2440", "#c8704a"));
  }

  /* 5. Their corner: Main St and Spring St in Old Town Palestine, a brick wall with the band tagged, the courthouse dome behind */
  function wmycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wmy5)"/>' +
      [[40, 24], [110, 40], [360, 30], [300, 16], [20, 60]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="wmy-tw' + (i % 2 ? " wmy-tw2" : "") + '"/>').join("") +
      courthouse(200, 154, 0.62) +
      '<rect x="0" y="146" width="400" height="76" fill="#8a4a2e"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (146 + r * 7.6) + 'h400" stroke="#6a3420" stroke-width=".8" opacity=".6"/>').join("") +
      '<rect x="0" y="142" width="400" height="6" fill="#4a2414"/>' +
      tag("WHISKEY MYERS", 10, 196, 26, AMBER, -5) + tag("EAST TEXAS", 236, 196, 15, CREAM, -4) + tag("WIGGY THUMP", 236, 215, 12, "#8ac07a", -3) +
      '<g class="wmy-sp"><circle cx="214" cy="190" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="wmy-sp wmy-sp2"><circle cx="220" cy="184" r="2" fill="' + AMBER + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3e3e42"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="60" width="5" height="162" fill="#8a9096"/>' +
      sign(300, 62, 92, "N Main St") + sign(304, 88, 88, "W Spring St"),
      sky("wmy5", "#1a1626", "#8a4a32"));
  }

  window.SCENES = { wmyrail: wmyrail, wmydogwood: wmydogwood, wmycourt: wmycourt, wmychurch: wmychurch, wmycorner: wmycorner };
})();
