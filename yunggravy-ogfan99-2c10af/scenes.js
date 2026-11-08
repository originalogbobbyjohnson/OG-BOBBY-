/* yunggravy scenes (Regions tab: Minneapolis; Rochester, Minnesota, raised downtown by the Mayo Clinic, Mayo High '14; came up at UW-Madison). CSS classes and ids prefixed yg- (the page's own anim-train is kept).
   1 US 52 South into Rochester: the green freeway guide sign for the 2nd St SW exit to downtown, the US 52 shield, a car pulling in (anim-train), the lit Plummer tower far off.
   2 The Ear of Corn water tower (1931, 151 ft, by Graham Park): the yellow-kernel ear wrapped in green husks up on its pedestal, clouds drifting, a crow circling.
   3 State Street, Madison (UW-Madison, where his fame started junior year): the street rising to the white granite Wisconsin Capitol dome with its gold statue, bikes rolling by.
   4 The Minnesota State Fair Grandstand (he headlined it): the stage lit up, spotlights sweeping, the Ferris wheel turning, the striped Giant Slide.
   5 1st Ave SW and 2nd St SW in downtown Rochester: green signs, YUNG GRAVY tagged, the floodlit Plummer Building tower behind with its carillon bells.
   No logos, no faces; no digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ygflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.yg-flk{animation:ygflick 2.2s infinite}' +
    '@keyframes ygcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.yg-car{animation:ygcar 7s linear infinite}.yg-car2{animation-delay:-3.5s}' +
    '@keyframes ygcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.yg-carL{animation:ygcarL 8s linear infinite}.yg-carL2{animation-delay:-4s}' +
    '@keyframes ygcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.yg-cl{animation:ygcloud 26s linear infinite}.yg-cl2{animation-delay:-13s}' +
    '@keyframes ygcircle{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.yg-circ{transform-origin:150px 70px;animation:ygcircle 9s linear infinite}' +
    '@keyframes ygwheel{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.yg-wh{transform-origin:330px 110px;animation:ygwheel 14s linear infinite}' +
    '@keyframes ygsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.yg-sw{animation:ygsweep 3.4s ease-in-out infinite}.yg-sw2{animation-delay:-1.7s}' +
    '@keyframes ygbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.yg-bell{animation:ygbell 1.6s ease-in-out infinite}.yg-bell2{animation-delay:-.8s}' +
    '@keyframes ygspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yg-sp{animation:ygspray 1.4s ease-out infinite}.yg-sp2{animation-delay:.45s}' +
    '@keyframes ygbike{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.yg-bk{animation:ygbike 9s linear infinite}.yg-bk2{animation-delay:-4.5s}' +
    '@keyframes ygnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.yg-nt{animation:ygnote 2.4s ease-out infinite}.yg-nt2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const cloud = (cls, x, y, s) => '<g class="' + cls + '" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (26 * s) + '" ry="' + (10 * s) + '" fill="#fff"/><ellipse cx="' + (x + 16 * s) + '" cy="' + (y - 7 * s) + '" rx="' + (16 * s) + '" ry="' + (10 * s) + '" fill="#fff"/></g>';
  const GOLD = "#f4b942", PINK = "#ff7eb6", BLUE = "#6fd3ff";

  /* the Plummer Building tower, drawn at (x, base y), scale s: buff brick shaft, terra-cotta trim, open belfry, ornate lantern */
  const plummer = (x, y, s, lit) => {
    const w = 40 * s, h = 150 * s, L = x - w / 2;
    const glow = lit ? '<ellipse cx="' + x + '" cy="' + (y - h - 40 * s) + '" rx="' + (34 * s) + '" ry="' + (60 * s) + '" fill="#ffe7a8" opacity=".18"/>' : "";
    return glow +
      '<rect x="' + (L - 14 * s) + '" y="' + (y - 70 * s) + '" width="' + (w + 28 * s) + '" height="' + (70 * s) + '" fill="#c9a77a"/>' +
      '<rect x="' + L + '" y="' + (y - h) + '" width="' + w + '" height="' + h + '" fill="#d8b98c"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (L + 6 * s) + '" y="' + (y - h + 14 * s + i * 18 * s) + '" width="' + (w - 12 * s) + '" height="' + (8 * s) + '" fill="' + (lit ? "#ffd98a" : "#6b5a44") + '" opacity=".85"/>').join("") +
      '<path d="M' + (L + 10 * s) + ' ' + (y - h) + 'v' + h + 'M' + (L + w - 10 * s) + ' ' + (y - h) + 'v' + h + '" stroke="#b88f5c" stroke-width="' + (2 * s) + '"/>' +
      /* belfry with the carillon */
      '<rect x="' + (L - 3 * s) + '" y="' + (y - h - 6 * s) + '" width="' + (w + 6 * s) + '" height="' + (6 * s) + '" fill="#b5703f"/>' +
      '<rect x="' + (L + 2 * s) + '" y="' + (y - h - 40 * s) + '" width="' + (w - 4 * s) + '" height="' + (34 * s) + '" fill="#d1ad7c"/>' +
      [0, 1, 2].map(i => '<path d="M' + (L + 6 * s + i * 10.5 * s) + ' ' + (y - h - 8 * s) + 'v-' + (18 * s) + 'a' + (4 * s) + ' ' + (4 * s) + ' 0 0 1 ' + (8 * s) + ' 0v' + (18 * s) + 'z" fill="#3a2a1c"/>').join("") +
      '<rect x="' + (L - 3 * s) + '" y="' + (y - h - 44 * s) + '" width="' + (w + 6 * s) + '" height="' + (5 * s) + '" fill="#b5703f"/>' +
      /* lantern + spire */
      '<rect x="' + (x - 11 * s) + '" y="' + (y - h - 66 * s) + '" width="' + (22 * s) + '" height="' + (22 * s) + '" fill="#d1ad7c"/>' +
      '<rect x="' + (x - 5 * s) + '" y="' + (y - h - 62 * s) + '" width="' + (10 * s) + '" height="' + (14 * s) + '" fill="' + (lit ? "#ffd98a" : "#3a2a1c") + '"/>' +
      '<path d="M' + (x - 13 * s) + ' ' + (y - h - 66 * s) + 'L' + x + ' ' + (y - h - 96 * s) + 'L' + (x + 13 * s) + ' ' + (y - h - 66 * s) + 'z" fill="#b5703f"/>' +
      [-1, 1].map(d => '<path d="M' + (x + d * 20 * s) + ' ' + (y - h - 44 * s) + 'l' + (d * 2 * s) + ' -' + (14 * s) + 'l' + (d * 2 * s) + ' ' + (14 * s) + 'z" fill="#b5703f"/>').join("");
  };

  /* 1. US 52 South into Rochester: green guide sign for 2nd St SW, a car pulling in */
  function ygroad() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h24q0 4 2 6q-2 18 -14 24q-12 -6 -14 -24q2 -2 2 -6z" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + (x + 12) + '" y="' + (y + 20) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#111">52</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#ygs1)"/>' +
      '<g fill="#2a2440"><rect x="40" y="128" width="30" height="34"/><rect x="74" y="118" width="22" height="44"/><rect x="250" y="122" width="40" height="40"/><rect x="300" y="130" width="26" height="32"/></g>' +
      plummer(382, 162, .36, true) +
      '<rect x="0" y="160" width="400" height="100" fill="#3b3b42"/>' +
      '<path d="M0 160L400 160" stroke="#8a8f96" stroke-width="2"/>' +
      '<path d="M200 260L196 170M120 260L170 170M280 260L224 170" stroke="#f2c200" stroke-width="2" stroke-dasharray="12 10"/>' +
      '<path d="M20 260L150 166M380 260L250 166" stroke="#e8ecf2" stroke-width="3"/>' +
      /* sign gantry */
      '<rect x="40" y="20" width="6" height="146" fill="#7b828a"/><rect x="354" y="20" width="6" height="146" fill="#7b828a"/><rect x="40" y="22" width="320" height="6" fill="#7b828a"/>' +
      '<rect x="60" y="30" width="150" height="74" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(74, 38) +
      '<text x="106" y="56" ' + font + ' font-size="13" fill="#fff">SOUTH</text><text x="74" y="92" ' + font + ' font-size="17" fill="#fff">Rochester</text>' +
      '<rect x="222" y="30" width="122" height="74" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="288" y="24" width="50" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="313" y="35" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">EXIT</text>' +
      '<text x="283" y="56" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">2nd St SW</text><text x="283" y="78" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Downtown</text>' +
      '<path d="M318 86l10 10M328 86v10h-10" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<g class="anim-train">' + car("", 150, 222, GOLD) + '</g>' +
      car("yg-carL", 0, 190, BLUE) + car("yg-car yg-car2", 0, 240, PINK) +
            '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0" opacity=".9">US 52 SOUTH · EXIT 2ND ST SW · DOWNTOWN ROCHESTER</text>',
      sky("ygs1", "#1c1838", "#d77a5e"));
  }

  /* 2. The Ear of Corn water tower by Graham Park */
  function ygcorn() {
    const kernels = [];
    for (let r = 0; r < 13; r++) for (let c = 0; c < 5; c++) kernels.push('<rect x="' + (186 + c * 6) + '" y="' + (50 + r * 7) + '" width="5" height="6" rx="2" fill="' + ((r + c) % 3 ? "#f6cf3c" : "#e8b52a") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#ygs2)"/>' +
      cloud("yg-cl", 40, 50, 1) + cloud("yg-cl yg-cl2", 120, 30, .8) +
      /* tower pedestal */
      '<rect x="190" y="150" width="24" height="80" fill="#d9d5cc"/><path d="M190 150h24" stroke="#b9b3a6" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M190 ' + (166 + i * 16) + 'h24" stroke="#c7c1b4" stroke-width="1"/>').join("") +
      /* the ear */
      '<path d="M182 146q-4 -60 20 -110q24 50 20 110z" fill="#f6cf3c"/>' + '<g clip-path="url(#ygear)">' + kernels.join("") + '</g>' +
      '<path d="M178 150q-6 -50 6 -96q8 40 14 96z" fill="#4f9a3a"/><path d="M226 150q6 -50 -6 -96q-8 40 -14 96z" fill="#4f9a3a"/>' +
      '<path d="M174 150q-10 -36 -4 -70q10 30 18 70z" fill="#3e8030"/><path d="M230 150q10 -36 4 -70q-10 30 -18 70z" fill="#3e8030"/>' +
      '<rect x="176" y="146" width="52" height="6" rx="2" fill="#3e8030"/>' +
      '<path d="M202 36v-10" stroke="#8a6a1a" stroke-width="2"/>' +
      /* park and trees */
      '<rect x="0" y="222" width="400" height="38" fill="#4c8a3e"/>' +
      [30, 70, 320, 365].map(x => '<rect x="' + (x - 3) + '" y="196" width="6" height="28" fill="#5a3d24"/><ellipse cx="' + x + '" cy="190" rx="22" ry="20" fill="#2f6b2c"/>').join("") +
      '<rect x="96" y="214" width="70" height="10" fill="#7a6a58"/><rect x="250" y="210" width="52" height="14" fill="#8e7b62"/>' +
      '<g class="yg-circ"><path d="M150 40l6 -4l6 4l-6 -1z" fill="#111"/></g>' +
      car("yg-car", 0, 238, PINK) +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2440">THE EAR OF CORN · ROCHESTER, MINNESOTA</text>',
      sky("ygs2", "#6fb6e8", "#f5e2b8") + '<clipPath id="ygear"><path d="M184 146q-4 -60 18 -106q22 46 18 106z"/></clipPath>');
  }

  /* 3. State Street, Madison, up to the Wisconsin Capitol (UW-Madison, where it started) */
  function ygmadison() {
    const fronts = (side) => Array.from({ length: 4 }, (_, i) => {
      const x = side ? 400 - (i + 1) * 46 + (i * 6) : i * 40;
      const w = side ? 40 : 34, hh = 70 - i * 10, y = 210 - hh;
      const cols = ["#a8553f", "#c9a77a", "#7a8a9a", "#b0713c"];
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" fill="' + cols[i] + '"/><rect x="' + (x + 6) + '" y="' + (y + 10) + '" width="' + (w - 12) + '" height="' + (hh / 3) + '" fill="#ffe7a8" opacity=".55"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ygs3)"/>' +
      /* Capitol: white granite, drum, dome, gold statue */
      '<rect x="140" y="128" width="120" height="40" fill="#e9e6df"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (146 + i * 14) + '" y="134" width="6" height="30" fill="#cfcac0"/>').join("") +
      '<rect x="170" y="98" width="60" height="32" fill="#efece6"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (174 + i * 10) + '" y="102" width="4" height="24" fill="#d2cdc2"/>').join("") +
      '<path d="M166 100q34 -64 68 0z" fill="#f2efe9"/><path d="M178 100q22 -50 44 0" stroke="#d9d4ca" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="40" width="12" height="14" fill="#efece6"/><path d="M200 26l-4 14h8z" fill="' + GOLD + '"/><circle cx="200" cy="25" r="3" fill="' + GOLD + '"/>' +
      fronts(0) + fronts(1) +
      '<path d="M0 210L170 168L230 168L400 210V260H0z" fill="#5d5a55"/><path d="M200 168V260" stroke="#e8ecf2" stroke-width="2" stroke-dasharray="10 10"/>' +
      [0, 1].map(i => '<g class="yg-bk' + (i ? " yg-bk2" : "") + '"><circle cx="20" cy="' + (238 - i * 14) + '" r="7" fill="none" stroke="#111" stroke-width="2"/><circle cx="44" cy="' + (238 - i * 14) + '" r="7" fill="none" stroke="#111" stroke-width="2"/><path d="M20 ' + (238 - i * 14) + 'l10 -10h10l4 10M30 ' + (228 - i * 14) + 'l-2 -8" stroke="' + (i ? PINK : "#c5050c") + '" stroke-width="2.5" fill="none"/></g>').join("") +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">STATE STREET · MADISON · WHERE THE GRAVY STARTED</text>',
      sky("ygs3", "#22285a", "#f0a07a"));
  }

  /* 4. The Minnesota State Fair Grandstand show */
  function ygfair() {
    const spokes = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M330 110L' + (330 + 46 * Math.cos(a)).toFixed(1) + ' ' + (110 + 46 * Math.sin(a)).toFixed(1) + '" stroke="#d9d5cc" stroke-width="1.5"/><circle cx="' + (330 + 46 * Math.cos(a)).toFixed(1) + '" cy="' + (110 + 46 * Math.sin(a)).toFixed(1) + '" r="5" fill="' + [GOLD, PINK, BLUE][i % 3] + '"/>'; }).join("");
    const slide = Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 10) + ' ' + (220 - i * 4) + 'q' + (30) + ' -40 ' + (60) + ' -' + (90 - i * 6) + '" stroke="' + ["#f6cf3c", "#e2403a", "#2e7bd6", "#f6cf3c", "#4f9a3a", "#e2403a"][i] + '" stroke-width="5" fill="none"/>').join("");
    const crowd = Array.from({ length: 30 }, (_, i) => '<circle cx="' + (8 + i * 13.5) + '" cy="' + (238 + (i % 3) * 4) + '" r="6" fill="#1b1622"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ygs4)"/>' +
      '<g class="yg-wh">' + '<circle cx="330" cy="110" r="46" fill="none" stroke="#d9d5cc" stroke-width="2"/>' + spokes + '</g>' +
      '<path d="M330 110l-20 80M330 110l20 80" stroke="#8a8f96" stroke-width="3"/>' + slide +
      /* grandstand + stage */
      '<rect x="110" y="120" width="180" height="16" fill="#cfc6b6"/><rect x="104" y="112" width="192" height="10" fill="#8a7458"/>' +
      '<rect x="120" y="136" width="160" height="70" fill="#14121a"/><rect x="120" y="200" width="160" height="10" fill="#3a3540"/>' +
      '<g class="yg-sw" style="transform-origin:150px 136px"><path d="M150 136l-30 70h20z" fill="' + GOLD + '" opacity=".35"/></g>' +
      '<g class="yg-sw yg-sw2" style="transform-origin:250px 136px"><path d="M250 136l30 70h-20z" fill="' + PINK + '" opacity=".35"/></g>' +
      '<rect x="196" y="168" width="3" height="32" fill="#999"/><circle cx="197.5" cy="166" r="4" fill="#ccc"/>' +
      '<text x="200" y="158" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">GRANDSTAND</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2b2530"/>' + crowd +
      '<g class="yg-nt"><text x="170" y="150" font-size="14" fill="' + BLUE + '">♪</text></g><g class="yg-nt yg-nt2"><text x="226" y="150" font-size="14" fill="' + PINK + '">♫</text></g>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">MINNESOTA STATE FAIR · THE GRANDSTAND</text>',
      sky("ygs4", "#1a1640", "#c25a7a"));
  }

  /* 5. 1st Ave SW and 2nd St SW, downtown Rochester, the Plummer tower behind */
  function ygcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ygs5)"/>' +
      plummer(306, 140, .5, true) +
      '<g class="yg-bell" style="transform-origin:306px 40px"><path d="M302 40h8l2 6h-12z" fill="' + GOLD + '"/></g>' +
      '<g class="yg-nt"><text x="318" y="40" font-size="12" fill="' + GOLD + '">♪</text></g><g class="yg-nt yg-nt2"><text x="270" y="44" font-size="12" fill="' + GOLD + '">♫</text></g>' +
      '<rect x="0" y="100" width="90" height="32" fill="#4a4152"/><rect x="360" y="96" width="40" height="36" fill="#4a4152"/>' +
      '<rect x="0" y="130" width="400" height="94" fill="#8a6a58"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#76584a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#76584a" stroke-width="1"/>').join("")).join("") +
      tag("YUNG GRAVY", 14, 198, 36, GOLD, -6) + tag("GRAVY TRAIN", 30, 152, 15, PINK, -4) + tag("GET MONEY", 176, 216, 18, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="356" y="128" width="6" height="96" fill="#2f2f2f"/>' + sign(268, 132, 126, "1st Ave SW") + sign(276, 158, 112, "2nd St SW") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="yg-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("yg-car", 0, 240, PINK) +
      '<g class="yg-sp"><circle cx="214" cy="178" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="yg-sp yg-sp2"><circle cx="220" cy="172" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="130" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">1ST AVE SW &amp; 2ND ST SW · ROCHESTER</text>',
      sky("ygs5", "#1d1a3e", "#e2805a"));
  }

  window.SCENES = { ygroad: ygroad, ygcorn: ygcorn, ygmadison: ygmadison, ygfair: ygfair, ygcorner: ygcorner };
})();
