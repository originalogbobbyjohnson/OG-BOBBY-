/* South Jamaica, Queens opening scenes for the Pharoahe Monch game: Organized Konfusion, W.A.R. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes plane{from{transform:translate(-90px,30px)}to{transform:translate(490px,-30px)}}' +
    '.plane{animation:plane 9s linear infinite}' +
    '@keyframes air{from{transform:translateX(420px)}to{transform:translateX(-260px)}}' +
    '.air{animation:air 7s linear infinite}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}' +
    '.swim{animation:swim 6s ease-in-out infinite}.swim2{animation-delay:-3s}' +
    '@keyframes ripple{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:center;animation:ripple 3s linear infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes wave{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-8deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:left center;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0deg);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:0}}' +
    '.leaf{animation:fall 7s linear infinite}.leaf2{animation-delay:-2.3s}.leaf3{animation-delay:-4.6s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const jet = '<g><path d="M0 10h44l10 -4h4l-6 6 6 6h-4l-10 -4H0z" fill="#e8eef4"/><path d="M18 10l-8 -12h6l14 12z" fill="#c9d3dc"/><path d="M18 14l-8 12h6l14 -12z" fill="#c9d3dc"/><circle class="flk" cx="2" cy="12" r="1.6" fill="#ff4a4a"/></g>';
  const GOLD = "#e8c547", RED = "#d6452f", BLUE = "#3fa7d6", CREAM = "#f3e6c8";

  /* 1. Sutphin Blvd-Archer Av-JFK Airport, looking down the platform: the E coming head-on out of the tunnel, the AirTrain JFK arrow, a SIMON SAYS wheatpaste and MONCH on the column */
  function train() {
    let tiles = "";
    for (let y = 40; y < 150; y += 9) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfc7b4" stroke-width="1"/>';
    return svg(
      '<style>@keyframes come{0%{transform:scale(.25);opacity:.2}70%{transform:scale(1);opacity:1}100%{transform:scale(1);opacity:1}}.come{transform-box:fill-box;transform-origin:50% 60%;animation:come 4s ease-out infinite}' +
      '@keyframes hl{0%,100%{opacity:.5}50%{opacity:1}}.hl{animation:hl 1s infinite}</style>' +
      '<rect width="400" height="260" fill="#ddd5c2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="30" fill="#2c2f33"/>' +
      '<g class="flk"><rect x="40" y="26" width="110" height="4" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="250" y="26" width="110" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* tunnel mouth in perspective */
      '<path d="M120 60h160v130H120z" fill="#15171a"/><path d="M0 30L120 60M400 30L280 60M0 260L120 190M400 260L280 190" stroke="#8a8270" stroke-width="2"/>' +
      '<path d="M120 190L0 260h400L280 190z" fill="#4a4844"/><path d="M150 190L60 260M250 190L340 260" stroke="#eab308" stroke-width="5"/>' +
      '<path d="M175 190l-30 70M225 190l30 70" stroke="#7a7066" stroke-width="3"/>' +
      /* the E, head-on, growing as it comes in */
      '<g class="come"><rect x="160" y="96" width="80" height="92" rx="10" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="172" y="106" width="56" height="30" rx="3" fill="#2a3a52"/><rect x="190" y="140" width="20" height="40" fill="#9aa2ac"/>' +
      '<circle class="hl" cx="174" cy="176" r="5" fill="#fff6c2"/><circle class="hl" cx="226" cy="176" r="5" fill="#fff6c2"/>' +
      bullet(200, 121, "E", "#0039a6") + '</g>' +
      /* station sign */
      '<rect x="10" y="38" width="380" height="20" rx="3" fill="#111"/><rect x="10" y="38" width="380" height="3" fill="#fff"/>' +
      '<text x="18" y="54" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11.5" fill="#fff">Sutphin Blvd-Archer Av-JFK Airport</text>' +
      '<circle cx="330" cy="49" r="8" fill="#0039a6"/><text x="330" y="53" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E</text>' +
      '<circle cx="350" cy="49" r="8" fill="#996633"/><text x="350" y="53" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">J</text>' +
      '<circle cx="370" cy="49" r="8" fill="#996633"/><text x="370" y="53" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Z</text>' +
      /* AirTrain JFK wayfinding arrow on the left wall */
      '<rect x="14" y="70" width="92" height="26" rx="3" fill="#111"/><path d="M22 83h14M30 77l6 6-6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      '<text x="42" y="81" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">AirTrain</text><text x="42" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">JFK</text>' +
      /* wheatpaste poster on the right wall */
      '<g transform="rotate(3 340 120)"><rect x="296" y="70" width="88" height="96" fill="#111"/><rect x="300" y="74" width="80" height="88" fill="' + RED + '"/>' +
      '<text x="340" y="100" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#111">SIMON</text><text x="340" y="122" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#111">SAYS</text>' +
      '<text x="340" y="140" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="' + CREAM + '">PHAROAHE MONCH</text><text x="340" y="153" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="' + CREAM + '">RAWKUS · 1999</text></g>' +
      /* column with the tag */
      '<rect x="40" y="110" width="26" height="150" fill="#25313d"/><rect x="36" y="108" width="34" height="6" fill="#1a232c"/>' +
      tag("MONCH", 6, 214, 30, GOLD, -8) + tag("O.K.", 300, 234, 30, BLUE, -6),
      "");
  }

  /* 2. High School of Art and Design, Midtown: where Pharoahe met Prince Po and Organized Konfusion started. Glass and terracotta front, sketchbooks in the window */
  function airtrain() {
    let mull = "";
    for (let x = 96; x < 304; x += 16) mull += '<path d="M' + x + ' 70v110" stroke="#dcecf2" stroke-width="1.2" opacity=".8"/>';
    for (let y = 86; y < 180; y += 22) mull += '<path d="M90 ' + y + 'h214" stroke="#dcecf2" stroke-width="1.2" opacity=".8"/>';
    let terra = "";
    for (let y = 30; y < 200; y += 12) terra += '<path d="M20 ' + y + 'h66M308 ' + y + 'h72" stroke="#a24f2e" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="18" rx="44" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* terracotta side piers + glass center */
      '<rect x="20" y="24" width="66" height="176" fill="#c4683f"/><rect x="308" y="24" width="72" height="176" fill="#c4683f"/>' + terra +
      '<rect x="86" y="40" width="222" height="160" fill="#5f97b0"/><path d="M86 40l222 0v40L86 120z" fill="#bfe0ec" opacity=".35"/>' + mull +
      '<rect x="86" y="50" width="222" height="16" fill="#2a2d33"/>' +
      '<text x="197" y="62" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9.5" fill="#fff" letter-spacing=".5">HIGH SCHOOL OF ART AND DESIGN</text>' +
      /* window display: easels + sketchbooks with doodles */
      '<rect x="96" y="128" width="96" height="52" fill="#f2efe6" stroke="#2a2d33" stroke-width="2"/>' +
      '<path d="M106 168q14 -26 28 -6t24 -14M168 140l12 24" stroke="#1a1a1a" stroke-width="2" fill="none"/>' + tag("O.K.", 150, 160, 16, RED, -8) +
      '<rect x="204" y="124" width="92" height="56" fill="#f8e9b8" stroke="#2a2d33" stroke-width="2"/><path d="M250 124v56" stroke="#2a2d33" stroke-width="1.5"/>' +
      '<text x="227" y="146" text-anchor="middle" font-family="Sedgwick Ave Display, cursive" font-size="13" fill="#1a1a1a">rhyme</text><text x="227" y="162" text-anchor="middle" font-family="Sedgwick Ave Display, cursive" font-size="13" fill="#1a1a1a">book</text>' +
      '<path d="M258 140h30M258 150h26M258 160h30M258 170h20" stroke="#3a3a3a" stroke-width="1.5"/>' +
      /* a pencil scribbling on the pad */
      '<g class="swim"><path d="M262 120l18 -26 4 3 -18 26z" fill="' + GOLD + '"/><path d="M262 120l-2 6 6 -3z" fill="#3a2a1a"/></g>' +
      /* sidewalk + kids with portfolios walking in */
      '<rect x="0" y="200" width="400" height="60" fill="#8a8a86"/><rect x="0" y="200" width="400" height="5" fill="#bdbdb8"/>' +
      '<g class="car" style="animation-duration:12s"><rect x="0" y="210" width="10" height="28" rx="4" fill="#3a2f5a"/><circle cx="5" cy="205" r="6" fill="#4a3424"/><rect x="10" y="218" width="16" height="12" fill="' + BLUE + '"/></g>' +
      '<g class="car car2" style="animation-duration:12s"><rect x="0" y="212" width="10" height="26" rx="4" fill="#7a2a2a"/><circle cx="5" cy="207" r="6" fill="#2a1a10"/><rect x="-14" y="220" width="14" height="10" fill="' + GOLD + '"/></g>' +
      sign(8, 8, 74, "2 Av") + sign(318, 8, 74, "E 56 St") + tag("ORGANIZED KONFUSION", 100, 252, 20, GOLD, -3),
      sky("g2", "#6aa6d8", "#e6f0f4"));
  }

  /* 3. Rochdale Village, South Jamaica: the tall brick co-op towers on the old Jamaica Racetrack ground, a horse weathervane for the track that was */
  function kingmanor() {
    let towers = "";
    [[18, 70, 60], [96, 44, 66], [180, 80, 58], [252, 52, 64], [330, 88, 56]].forEach((b, k) => {
      const [x, y, w] = b;
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (214 - y) + '" fill="' + (k % 2 ? "#9a4a32" : "#a8573a") + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="6" fill="#d9cfc0"/>';
      for (let yy = y + 14; yy < 200; yy += 13) for (let xx = x + 6; xx < x + w - 8; xx += 11) towers += '<rect ' + (((xx * 7 + yy) % 9 === 0) ? 'class="flk" ' : '') + 'x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + (((xx + yy) % 5 === 0) ? "#ffd98a" : "#2e2a33") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(12) +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="7" fill="#fff" opacity=".25"/></g>' + towers +
      /* the oval walking path and lawn where the racetrack was */
      '<rect x="0" y="214" width="400" height="46" fill="#3f7a3a"/><ellipse cx="200" cy="238" rx="170" ry="16" fill="none" stroke="#c9b98a" stroke-width="5"/>' +
      /* a horse running the old track, for the Jamaica Racetrack */
      '<g class="car" style="animation-duration:9s"><path d="M0 230q4 -12 18 -12h12l6 -8 4 2 -2 8q4 4 2 10l-4 0 0 -4 -14 0 -4 8h-4l2 -8 -10 0 -4 8h-4z" fill="#2a1a10"/></g>' +
      '<rect x="128" y="196" width="146" height="18" rx="3" fill="#1d2329"/>' +
      '<text x="201" y="209" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff" letter-spacing="1">ROCHDALE VILLAGE</text>' +
      sign(8, 8, 108, "Guy R Brewer Blvd") + sign(290, 8, 102, "Baisley Blvd") + tag("MONCH", 300, 250, 22, GOLD, -5),
      sky("g3", "#1c1838", "#d7774a"));
  }

  /* 4. Album world, Internal Affairs (1999): the Simon Says movie-poster city, a crowd with hands up, the big W.A.R. banner */
  function baisley() {
    let city = "";
    [[0, 60, 46], [50, 90, 40], [94, 40, 50], [300, 70, 44], [348, 50, 52]].forEach(b => {
      city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="#1e1a24"/>';
      for (let y = b[1] + 8; y < 190; y += 12) for (let x = b[0] + 6; x < b[0] + b[2] - 6; x += 10) city += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x + y) % 4 ? "#2c2633" : RED) + '"/>';
    });
    let crowd = "";
    for (let x = 0; x < 410; x += 18) crowd += '<g class="' + (x % 36 ? "bob" : "bob bob2") + '"><circle cx="' + x + '" cy="' + (214 + (x % 3) * 3) + '" r="9" fill="#0d0b10"/><path d="M' + (x - 4) + ' ' + (210 + (x % 3) * 3) + 'l-6 -26M' + (x + 4) + ' ' + (210 + (x % 3) * 3) + 'l6 -24" stroke="#0d0b10" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<style>@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
      '@keyframes sweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.sw{transform-origin:200px 260px;animation:sweep 4s ease-in-out infinite}.sw2{animation-delay:-2s}</style>' +
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<path class="sw" d="M200 260L170 0h60z" fill="' + GOLD + '" opacity=".18"/><path class="sw sw2" d="M200 260L170 0h60z" fill="#fff" opacity=".12"/>' + city +
      /* the big movie-poster banner across the middle */
      '<rect x="140" y="30" width="160" height="150" fill="#0d0b10" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="220" y="60" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="' + CREAM + '" letter-spacing="2">PHAROAHE MONCH</text>' +
      '<text x="220" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + RED + '">SIMON</text>' +
      '<text x="220" y="128" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + RED + '">SAYS</text>' +
      '<text x="220" y="150" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="' + GOLD + '" letter-spacing="1">INTERNAL AFFAIRS</text>' +
      '<text x="220" y="166" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#9a9aa2">NOW PLAYING · 1999</text>' +
      /* hanging W.A.R. banner */
      '<g class="flag"><rect x="22" y="100" width="100" height="40" fill="' + RED + '" stroke="#0d0b10" stroke-width="2"/><text x="72" y="130" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="' + CREAM + '">W.A.R.</text></g>' +
      '<path d="M22 100l-6 -20M122 100l6 -20" stroke="#888" stroke-width="1.5"/>' +
      crowd + '<rect x="0" y="236" width="400" height="24" fill="#0d0b10"/>' +
      tag("HANDS UP", 290, 252, 22, GOLD, -4),
      sky("g4", "#120a18", "#4a1420"));
  }

  /* 5. Baisley Blvd and Guy R Brewer Blvd, South Jamaica: street signs, a wall by the bus stop with the tags */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="270" y="40" width="122" height="180" fill="#6a5a6a"/>' +
      (function () { let w = ""; for (let y = 50; y < 160; y += 18) for (let x = 282; x < 380; x += 22) w += '<rect x="' + x + '" y="' + y + '" width="12" height="10" fill="' + ((x + y) % 3 ? "#2a1d27" : "#ffd98a") + '"/>'; return w; })() +
      /* Q bus stop flag */
      '<rect x="380" y="150" width="3" height="70" fill="#9aa1a8"/><rect x="366" y="150" width="30" height="20" fill="#0039a6"/><text x="381" y="164" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">BUS</text>' +
      '<rect x="14" y="110" width="236" height="110" fill="#3a3436"/>' +
      tag("PHAROAHE", 26, 160, 34, GOLD, -7) + tag("MONCH", 120, 196, 36, RED, -6) + tag("W.A.R.", 30, 212, 18, BLUE, -3) +
      '<rect x="252" y="56" width="5" height="164" fill="#1d2329"/><path d="M254 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M270 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(184, 64, 140, "Guy R Brewer Blvd") + sign(204, 86, 100, "Baisley Blvd") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="224" width="46" height="14" rx="4" fill="#d6452f"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>',
      sky("g5", "#0c0a14", "#2a2040"));
  }

  window.SCENES = { train, airtrain, kingmanor, baisley, corner };
})();
