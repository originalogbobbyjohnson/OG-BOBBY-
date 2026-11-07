/* grieves scenes (Regions tab: The Northwest; Capitol Hill, Seattle). CSS classes and ids prefixed gv- (the page's own anim-train is kept).
   1 Capitol Hill Station on the 1 Line: the underground platform, a Link train sliding in, the green 1 bullet.
   2 Gas Works Park in the rain: the rusted towers on the north shore of Lake Union, a kite over Kite Hill.
   3 A Capitol Hill club show with Budo on the keys ("88 Keys & Counting"): piano, mic, crowd, rain on the window.
   4 Fort Collins, Colorado, where he grew up ("Lightspeed": moved down to Colorado, Warren Lake): Horsetooth Rock over the foothills, a kid on a bike.
   5 E Pike St and 10th Ave on Capitol Hill: green signs, GRIEVES tagged on the brick, the white Smith Tower downtown. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gvflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.gv-flk{animation:gvflick 2.4s infinite}.gv-flk2{animation-delay:.8s}' +
    '@keyframes gvrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.gv-rn{animation:gvrain 1.1s linear infinite}.gv-rn2{animation-delay:-.37s}.gv-rn3{animation-delay:-.74s}' +
    '@keyframes gvkite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.gv-kite{transform-box:fill-box;transform-origin:50% 100%;animation:gvkite 3s ease-in-out infinite}' +
    '@keyframes gvbo{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.gv-bo{animation:gvbo .8s ease-in-out infinite}.gv-bo2{animation-delay:-.27s}.gv-bo3{animation-delay:-.54s}' +
    '@keyframes gvnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.gv-nt{animation:gvnote 3s ease-out infinite}.gv-nt2{animation-delay:1s}.gv-nt3{animation-delay:2s}' +
    '@keyframes gvbike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.gv-bike{animation:gvbike 9s linear infinite}' +
    '@keyframes gvwheel{to{transform:rotate(360deg)}}.gv-wh{transform-box:fill-box;transform-origin:50% 50%;animation:gvwheel .8s linear infinite}' +
    '@keyframes gvcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.gv-car{animation:gvcar 7s linear infinite}' +
    '@keyframes gvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gv-sp{animation:gvspray 1.4s ease-out infinite}.gv-sp2{animation-delay:.45s}' +
    '@keyframes gvglow{0%,100%{opacity:.5}50%{opacity:1}}.gv-glow{animation:gvglow 2.2s ease-in-out infinite}.gv-g2{animation-delay:-1.1s}' +
    '@keyframes gvcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.gv-cl{animation:gvcloud 30s linear infinite}.gv-cl2{animation-delay:-15s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => { let s = ""; for (let i = 0; i < n; i++) s += '<path class="gv-rn' + ["", " gv-rn2", " gv-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 60) + 'l-3 12" stroke="' + (col || "#cfe3f2") + '" stroke-width="1.2" opacity=".55"/>'; return s; };
  const cloud = (cls, x, y, s, c) => '<g class="' + cls + '" opacity=".9"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (30 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#fff") + '"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (y - 7 * s) + '" rx="' + (16 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#fff") + '"/></g>';
  const GREEN = "#28813f", RED = "#b8322a", GOLD = "#e9d8a6", BLUE = "#6fa8c9", CREAM = "#f2efe6";

  /* 1. Capitol Hill Station: underground platform, the Link train sliding in */
  function gvstation() {
    let wins = "";
    for (let x = 36; x < 300; x += 36) wins += '<rect x="' + x + '" y="128" width="26" height="26" rx="4" fill="#cfe6f5" opacity=".92"/>';
    let lights = "";
    for (let x = 20; x < 400; x += 60) lights += '<rect class="gv-glow' + (x % 120 ? " gv-g2" : "") + '" x="' + x + '" y="20" width="36" height="5" rx="2" fill="#fff8d8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv-s1)"/>' + lights +
      /* tiled back wall with color bands */
      '<rect x="0" y="30" width="400" height="80" fill="#e8e4da"/><rect x="0" y="54" width="400" height="10" fill="' + GREEN + '"/><rect x="0" y="64" width="400" height="4" fill="' + BLUE + '"/>' +
      /* station sign */
      '<rect x="80" y="74" width="240" height="32" rx="3" fill="#111"/>' + bullet(104, 90, "1", GREEN) +
      '<text x="212" y="96" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Capitol Hill</text>' +
      /* train */
      '<g class="anim-train">' +
        '<rect x="14" y="114" width="300" height="70" rx="14" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="14" y="160" width="300" height="10" fill="' + BLUE + '"/><rect x="14" y="170" width="300" height="5" fill="' + GREEN + '"/>' + wins +
        '<rect x="292" y="126" width="16" height="30" rx="4" fill="#9fc6e8"/><circle cx="304" cy="176" r="4" fill="#fff6c2"/>' +
        '<rect x="132" y="126" width="30" height="48" rx="2" fill="#d8dde3" stroke="#8a95a3"/><path d="M147 126v48" stroke="#8a95a3"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="184" width="400" height="76" fill="#5a5f66"/><rect x="0" y="184" width="400" height="8" fill="#e9c94a"/>' +
      '<text x="200" y="230" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e4da" letter-spacing="3">PLEASE STAND BACK FROM THE EDGE</text>',
      sky("gv-s1", "#2a2d33", "#40454d"));
  }

  /* 2. Gas Works Park in the rain: rusted towers on Lake Union, Kite Hill, a kite in the gray sky */
  function gvgasworks() {
    const tower = (x, h, w) => {
      let g = '<rect x="' + (x - w / 2) + '" y="' + (176 - h) + '" width="' + w + '" height="' + h + '" fill="#7a3f25"/>';
      for (let y = 176 - h + 10; y < 176; y += 14) g += '<rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="3" fill="#4e2716"/>';
      g += '<rect x="' + (x - w / 2 + 3) + '" y="' + (176 - h) + '" width="4" height="' + h + '" fill="#a3582f" opacity=".7"/>';
      return g;
    };
    let pipes = '<path d="M150 112h120M150 134h120M178 90v86M246 100v76" stroke="#5e2f1c" stroke-width="5" fill="none"/><path d="M150 112l-14 -18M270 134l16 -10" stroke="#5e2f1c" stroke-width="4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv-s2)"/>' + cloud("gv-cl", 60, 30, 1.2, "#c9d2da") + cloud("gv-cl gv-cl2", 260, 22, 1, "#bcc6cf") +
      /* Lake Union and the far shore */
      '<rect x="0" y="150" width="400" height="40" fill="#5f7f94"/><path d="M0 150l40 -10 60 4 70 -8 80 6 70 -6 80 8v6H0z" fill="#4c5d4a"/>' +
      '<path d="M30 166h40M120 172h50M300 168h60" stroke="#a9c3d4" stroke-width="2" opacity=".6"/>' +
      tower(164, 92, 22) + tower(200, 110, 26) + tower(234, 100, 24) + tower(262, 80, 20) + pipes +
      /* Kite Hill and the lawn */
      '<path d="M0 260V196q80 -40 170 -6q90 30 230 0V260z" fill="#4f8a43"/><path d="M0 214q120 -30 240 0q80 18 160 0V260H0z" fill="#3f7637"/>' +
      /* kite */
      '<g class="gv-kite"><path d="M86 40l14 16 -14 16 -14 -16z" fill="' + RED + '"/><path d="M86 40v32M72 56h28" stroke="#fff" stroke-width="1"/><path d="M86 72q-6 10 2 18q-8 8 0 16" stroke="#fff" stroke-width="1.5" fill="none"/></g>' +
      '<path d="M86 72Q74 140 60 196" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<circle cx="60" cy="190" r="5" fill="#2a1c14"/><rect x="55" y="195" width="10" height="16" rx="3" fill="' + BLUE + '"/>' +
      rain(40),
      sky("gv-s2", "#7f8c97", "#c7cfd6"));
  }

  /* 3. A Capitol Hill club show: the piano for Budo, the mic for Grieves, the crowd, rain on the window */
  function gvstage() {
    let crowd = "";
    for (let i = 0; i < 10; i++) { const x = 20 + i * 40; crowd += '<g class="gv-bo gv-bo' + (i % 3 + 1) + '"><circle cx="' + x + '" cy="218" r="11" fill="#3a4556"/><rect x="' + (x - 14) + '" y="228" width="28" height="40" rx="8" fill="#3a4556"/>' + (i % 3 === 1 ? '<path d="M' + (x + 10) + ' 232l8 -24" stroke="#3a4556" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>'; }
    let keys = "";
    for (let i = 0; i < 12; i++) keys += '<rect x="' + (82 + i * 7) + '" y="146" width="6" height="12" fill="#f4f1e8"/>';
    for (const i of [0, 1, 3, 4, 5, 7, 8, 10]) keys += '<rect x="' + (86.5 + i * 7) + '" y="146" width="4" height="7" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="#151a22"/>' +
      /* back wall + rainy window */
      '<rect x="0" y="0" width="400" height="160" fill="#20262f"/>' +
      '<rect x="300" y="24" width="80" height="70" fill="#3a4a5a" stroke="#555" stroke-width="3"/><path d="M340 24v70M300 59h80" stroke="#555" stroke-width="2"/>' +
      '<g>' + (() => { let r = ""; for (let i = 0; i < 10; i++) r += '<path class="gv-rn' + ["", " gv-rn2", " gv-rn3"][i % 3] + '" d="M' + (304 + (i * 17) % 74) + ' 20l-2 10" stroke="#bcd6ea" stroke-width="1.2" opacity=".7"/>'; return r; })() + '</g>' +
      /* marquee banner */
      '<rect x="50" y="14" width="236" height="30" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="gv-flk" x="170" y="35" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '" letter-spacing="2">GRIEVES + BUDO</text>' +
      /* lights */
      '<path d="M120 50l-50 130h100z" fill="#fff6c2" opacity=".08"/><path d="M230 50l-40 130h100z" fill="#c8e6ff" opacity=".08"/>' +
      /* stage */
      '<rect x="40" y="170" width="320" height="20" fill="#3b2a1e"/><rect x="40" y="170" width="320" height="4" fill="#5a4030"/>' +
      /* upright piano */
      '<rect x="74" y="104" width="100" height="66" rx="4" fill="#2b1810" stroke="#5a3a24" stroke-width="2"/><rect x="78" y="144" width="92" height="16" fill="#1a0f0a"/>' + keys +
      '<rect x="98" y="110" width="52" height="24" rx="2" fill="#3b2418"/>' +
      /* mic stand */
      '<rect x="248" y="106" width="4" height="64" fill="#999"/><path d="M232 170h36" stroke="#999" stroke-width="3"/>' +
      '<rect x="243" y="90" width="14" height="20" rx="7" fill="#444" stroke="#aaa" stroke-width="1.5"/>' +
      '<text class="gv-nt" x="180" y="100" font-size="16" fill="' + GOLD + '">&#9835;</text><text class="gv-nt gv-nt2" x="120" y="96" font-size="13" fill="' + BLUE + '">&#9834;</text><text class="gv-nt gv-nt3" x="270" y="104" font-size="13" fill="' + CREAM + '">&#9835;</text>' +
      crowd);
  }

  /* 4. Fort Collins, Colorado: Horsetooth Rock above the foothills, Warren Lake, a kid riding a bike */
  function gvcolorado() {
    return svg(
      '<rect width="400" height="260" fill="url(#gv-s4)"/><circle cx="330" cy="46" r="20" fill="#fff3c4"/>' + cloud("gv-cl", 90, 36, 1) +
      /* far range */
      '<path d="M0 130l50 -30 40 18 50 -36 60 30 50 -24 60 28 50 -20 40 14V160H0z" fill="#8a9bb3"/>' +
      /* foothills with Horsetooth Rock: the two-toothed top */
      '<path d="M0 160L60 128L120 112L160 92L172 74L184 92L196 78L208 96L250 116L320 130L400 146V176H0z" fill="#8a6a4a"/>' +
      '<path d="M160 92L172 74L184 92L196 78L208 96z" fill="#a3825c"/>' +
      '<path d="M0 168q100 -20 200 -6q100 14 200 -4V190H0z" fill="#6f8a4a"/>' +
      /* Warren Lake */
      '<ellipse cx="130" cy="196" rx="90" ry="14" fill="#5f9ec9"/><path d="M80 194h30M140 200h40" stroke="#bfe0f5" stroke-width="2" opacity=".7"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#88a85a"/>' +
      /* cottonwoods */
      '<rect x="292" y="168" width="6" height="40" fill="#5a3a20"/><circle cx="295" cy="162" r="18" fill="#4f7a34"/><rect x="340" y="176" width="5" height="32" fill="#5a3a20"/><circle cx="342" cy="170" r="14" fill="#5c8a3c"/>' +
      /* path + kid on a bike */
      '<rect x="0" y="226" width="400" height="10" fill="#c9b48a"/>' +
      '<g class="gv-bike"><g class="gv-wh"><circle cx="10" cy="228" r="9" fill="none" stroke="#222" stroke-width="2.5"/><path d="M1 228h18M10 219v18" stroke="#666"/></g>' +
      '<g class="gv-wh"><circle cx="40" cy="228" r="9" fill="none" stroke="#222" stroke-width="2.5"/><path d="M31 228h18M40 219v18" stroke="#666"/></g>' +
      '<path d="M10 228l12 -14h14l4 14M22 214l-3 -6M36 214l2 -8" stroke="' + RED + '" stroke-width="3" fill="none"/>' +
      '<circle cx="26" cy="190" r="6" fill="#d8a47a"/><path d="M20 186q6 -8 12 0z" fill="' + BLUE + '"/><path d="M26 196l-2 14l6 8M26 198l10 8" stroke="#2a4a7a" stroke-width="4" stroke-linecap="round" fill="none"/></g>',
      sky("gv-s4", "#5aa0e0", "#d8ecff"));
  }

  /* 5. E Pike St and 10th Ave: green signs, GRIEVES on the brick, the Smith Tower downtown */
  function gvcorner() {
    let brick = "";
    for (let y = 120; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#5a2a22" opacity=".5"/>';
    const smith = (x, base) => '<rect x="' + (x - 13) + '" y="' + (base - 70) + '" width="26" height="70" fill="#ecebe4"/>' +
      (() => { let w = ""; for (let y = base - 64; y < base - 4; y += 7) w += '<rect x="' + (x - 10) + '" y="' + y + '" width="20" height="3" fill="#b9b8b0"/>'; return w; })() +
      '<rect x="' + (x - 8) + '" y="' + (base - 92) + '" width="16" height="22" fill="#f2f1ea"/><path d="M' + (x - 9) + ' ' + (base - 92) + 'L' + x + ' ' + (base - 118) + 'L' + (x + 9) + ' ' + (base - 92) + 'z" fill="#e2e0d6"/>' +
      '<rect x="' + (x - 18) + '" y="' + (base - 34) + '" width="36" height="34" fill="#e2e0d6"/><rect x="' + (x - 1) + '" y="' + (base - 124) + '" width="2" height="8" fill="#ccc"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gv-s5)"/>' + cloud("gv-cl", 300, 30, 1.1, "#5d6b7d") +
      '<rect x="40" y="70" width="22" height="50" fill="#2f3a4c"/><rect x="70" y="52" width="18" height="68" fill="#2f3a4c"/><rect x="150" y="62" width="24" height="58" fill="#2f3a4c"/><rect x="182" y="78" width="30" height="42" fill="#2f3a4c"/>' +
      smith(120, 120) +
      '<rect x="0" y="112" width="400" height="104" fill="#7a3a2c"/>' + brick + '<rect x="0" y="112" width="400" height="6" fill="#4a1f17"/>' +
      tag("GRIEVES", 56, 184, 46, GOLD, -5) +
      '<path class="gv-sp" d="M352 150q6 -8 12 0" stroke="' + RED + '" stroke-width="3" fill="none"/><path class="gv-sp gv-sp2" d="M358 140q6 -8 12 0" stroke="' + RED + '" stroke-width="3" fill="none"/>' +
      '<rect x="344" y="152" width="14" height="30" rx="3" fill="' + RED + '" stroke="#111" stroke-width="2"/><rect x="346" y="146" width="10" height="7" fill="#111"/>' +
      '<rect x="0" y="214" width="400" height="10" fill="#9a9a94"/><rect x="0" y="224" width="400" height="36" fill="#2e3138"/>' +
      '<g class="gv-car"><rect x="0" y="236" width="56" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="228" width="30" height="10" rx="3" fill="#3f6f8a"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="44" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="318" y="44" width="5" height="172" fill="#5c5f66"/>' +
      sign(250, 40, 108, "E Pike St") + sign(262, 64, 96, "10th Ave") + rain(26),
      sky("gv-s5", "#3a4658", "#8b97a6"));
  }

  window.SCENES = { gvstation, gvgasworks, gvstage, gvcolorado, gvcorner };
})();
