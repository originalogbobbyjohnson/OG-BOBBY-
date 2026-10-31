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

  /* 1. The E pulling into Sutphin Blvd-Archer Av-JFK Airport, underground: tiled walls, steel columns, the E / J / Z */
  function train() {
    let tiles = "";
    for (let y = 0; y < 104; y += 8) for (let x = (y / 8 % 2) * 6; x < 400; x += 12) tiles += '<rect x="' + x + '" y="' + y + '" width="11" height="7" fill="#e9e4d6"/>';
    let windows = "";
    for (let x = 18; x < 250; x += 46) windows += '<rect x="' + x + '" y="118" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 90) cols += '<rect x="' + x + '" y="178" width="10" height="82" fill="#25313d"/><rect x="' + (x - 3) + '" y="178" width="16" height="5" fill="#1a232c"/>';
    return svg(
      '<rect width="400" height="260" fill="#b8b2a2"/>' + tiles +
      '<rect x="0" y="80" width="400" height="10" fill="#7a5c9a"/><rect x="0" y="90" width="400" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="0" width="400" height="14" fill="#3a3a3a"/>' +
      '<g class="flk"><rect x="60" y="14" width="90" height="4" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="250" y="14" width="90" height="4" rx="2" fill="#fff7d6"/></g>' +
      /* station sign */
      '<rect x="22" y="30" width="356" height="34" rx="4" fill="#111"/><rect x="22" y="30" width="356" height="4" fill="#fff"/>' +
      '<text x="32" y="55" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13.5" fill="#fff">Sutphin Blvd-Archer Av-JFK Airport</text>' +
      bullet(300, 48, "E", "#0039a6") + bullet(326, 48, "J", "#996633") + bullet(352, 48, "Z", "#996633") +
      /* train */
      '<rect x="0" y="100" width="400" height="6" fill="#2a2a2a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="106" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="5" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="160" r="4" fill="#fff6c2"/>' + bullet(296, 126, "E", "#0039a6") +
      '</g>' +
      /* platform */
      '<rect x="0" y="170" width="400" height="8" fill="#eab308"/><rect x="0" y="178" width="400" height="82" fill="#4a4844"/>' + cols +
      '<path d="M0 252h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("O.K.", 70, 236, 34, GOLD, -5) + tag("MONCH", 206, 240, 32, RED, -7),
      "");
  }

  /* 2. AirTrain JFK over Archer Av at the Jamaica station: grey concrete guideway, the glass hall, a jet climbing out of JFK */
  function airtrain() {
    let piers = "";
    for (let x = 20; x < 400; x += 80) piers += '<path d="M' + (x - 8) + ' 260v-96h16v96z" fill="#9aa1a8"/><path d="M' + (x - 18) + ' 164h36l-6 -10h-24z" fill="#8a9198"/>';
    let city = "";
    [[0, 90, 50], [54, 110, 40], [300, 96, 46], [350, 120, 50]].forEach(b => {
      city += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '" fill="#3c3550"/>';
      for (let y = b[1] + 8; y < 150; y += 12) for (let x = b[0] + 6; x < b[0] + b[2] - 6; x += 12) city += '<rect x="' + x + '" y="' + y + '" width="6" height="6" fill="' + ((x + y) % 4 ? "#262033" : "#ffd98a") + '"/>';
    });
    let glass = "";
    for (let x = 112; x < 290; x += 14) glass += '<path d="M' + x + ' 96v58" stroke="#c9e6f2" stroke-width="1" opacity=".6"/>';
    let car = "";
    for (let i = 0; i < 2; i++) car += '<rect x="' + (i * 112) + '" y="124" width="106" height="30" rx="8" fill="#eef2f5" stroke="#7a8590" stroke-width="1.5"/><rect x="' + (i * 112 + 8) + '" y="130" width="90" height="10" rx="3" fill="#2a3a52"/><rect x="' + (i * 112) + '" y="144" width="106" height="4" fill="#1f5fa8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="40" rx="44" ry="8" fill="#fff" opacity=".35"/></g><g class="cld cld2"><ellipse cx="0" cy="70" rx="34" ry="6" fill="#fff" opacity=".3"/></g>' +
      '<g class="plane" transform="translate(0,30)">' + jet + '</g>' + city +
      /* the glass hall of the Jamaica AirTrain station */
      '<path d="M104 96q96 -40 192 0v104H104z" fill="#7fb6cc" opacity=".55"/>' + glass + '<path d="M104 96q96 -40 192 0" stroke="#dfeef5" stroke-width="3" fill="none"/>' +
      /* guideway */
      '<rect x="0" y="154" width="400" height="12" fill="#b4bac0"/><rect x="0" y="166" width="400" height="4" fill="#7a8188"/>' + piers +
      '<g class="air">' + car + '</g>' +
      /* Archer Av below */
      '<rect x="0" y="222" width="400" height="38" fill="#2e3136"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="44" height="14" rx="4" fill="#f2c14e"/><circle cx="10" cy="242" r="4" fill="#111"/><circle cx="34" cy="242" r="4" fill="#111"/></g>' +
      sign(8, 8, 96, "Archer Av") + sign(292, 8, 100, "Sutphin Blvd"),
      sky("g2", "#1a2f5a", "#e89a6a"));
  }

  /* 3. King Manor in Rufus King Park on Jamaica Av: pale yellow clapboard, white trim, gambrel roof, two chimneys, columned porch */
  function kingmanor() {
    let clap = "";
    for (let y = 104; y < 200; y += 6) clap += '<path d="M90 ' + y + 'h220" stroke="#d9c27a" stroke-width="1"/>';
    let wins = "";
    [110, 150, 230, 270].forEach(x => [112, 156].forEach(y => { wins += '<rect x="' + x + '" y="' + y + '" width="20" height="28" fill="#2a3440" stroke="#fff" stroke-width="3"/><path d="M' + (x + 10) + ' ' + y + 'v28M' + x + ' ' + (y + 14) + 'h20" stroke="#fff" stroke-width="1.5"/><rect x="' + (x - 6) + '" y="' + y + '" width="5" height="28" fill="#2f4a3a"/><rect x="' + (x + 21) + '" y="' + y + '" width="5" height="28" fill="#2f4a3a"/>'; }));
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (210 - y) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - r / 2) + '" r="' + r + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="340" cy="40" r="20" fill="#fff2c0" opacity=".9"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="44" ry="8" fill="#fff" opacity=".6"/></g>' +
      tree(40, 110, 34, "#3f7a3a") + tree(372, 120, 30, "#4a8a40") +
      /* gambrel roof + chimneys */
      '<rect x="120" y="44" width="14" height="40" fill="#8a3a2a"/><rect x="266" y="44" width="14" height="40" fill="#8a3a2a"/>' +
      '<path d="M82 102l20 -30 40 -14h116l40 14 20 30z" fill="#4a4a50"/><path d="M82 102h236" stroke="#fff" stroke-width="4"/>' +
      '<rect x="176" y="62" width="48" height="26" fill="#efdc9a" stroke="#fff" stroke-width="3"/><rect x="190" y="66" width="20" height="20" fill="#2a3440" stroke="#fff" stroke-width="2"/>' +
      /* body */
      '<rect x="90" y="102" width="220" height="98" fill="#efdc9a"/>' + clap + wins +
      '<rect x="88" y="102" width="5" height="98" fill="#fff"/><rect x="307" y="102" width="5" height="98" fill="#fff"/>' +
      /* porch with columns */
      '<path d="M170 132h60l-30 -14z" fill="#fff"/><rect x="170" y="132" width="60" height="5" fill="#fff"/>' +
      '<rect x="174" y="137" width="5" height="63" fill="#fff"/><rect x="221" y="137" width="5" height="63" fill="#fff"/>' +
      '<rect x="190" y="150" width="20" height="50" fill="#2f4a3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M160 200h80l6 8H154z" fill="#c9c4b8"/>' +
      /* lawn + iron fence + path */
      '<rect x="0" y="208" width="400" height="52" fill="#4f8a3e"/><path d="M190 208l-20 52h60l-20 -52z" fill="#c9b98a"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 9) if (x < 165 || x > 235) f += '<path d="M' + x + ' 238v-16" stroke="#1a1c20" stroke-width="2"/>'; return f; })() +
      '<path d="M0 224h165M235 224h165" stroke="#1a1c20" stroke-width="2"/>' +
      '<path class="leaf" d="M60 0q6 -6 12 0q-6 6 -12 0z" fill="#e0792a"/><path class="leaf leaf2" d="M260 0q6 -6 12 0q-6 6 -12 0z" fill="' + GOLD + '"/><path class="leaf leaf3" d="M330 0q6 -6 12 0q-6 6 -12 0z" fill="#c4401c"/>' +
      sign(8, 8, 104, "Jamaica Av"),
      sky("g3", "#4a86c8", "#cfe6f2"));
  }

  /* 4. Baisley Pond Park, South Jamaica: the pond, ducks swimming, ripples, willows, a jet low on the JFK approach */
  function baisley() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="70" cy="50" r="22" fill="#ffb15c" opacity=".9"/>' +
      '<g class="plane" transform="translate(0,40)">' + jet + '</g>' +
      /* far tree line */
      '<path d="M0 120q20 -26 40 -6q20 -30 46 -4q24 -24 50 0q26 -30 54 -2q24 -26 50 0q26 -28 52 -2q24 -24 52 0q26 -22 56 -2v24H0z" fill="#2f5a34"/>' +
      '<rect x="0" y="126" width="400" height="10" fill="#5a8a44"/>' +
      /* pond */
      '<ellipse cx="200" cy="186" rx="210" ry="56" fill="#3f7fa0"/><ellipse cx="200" cy="180" rx="180" ry="40" fill="#5a9cbc" opacity=".6"/>' +
      '<path d="M90 170h40M240 196h60M150 206h30" stroke="#cfe6f2" stroke-width="2" opacity=".6"/>' +
      '<ellipse class="rip" cx="160" cy="186" rx="20" ry="5" fill="none" stroke="#e8f4fa" stroke-width="1.5"/><ellipse class="rip rip2" cx="260" cy="176" rx="20" ry="5" fill="none" stroke="#e8f4fa" stroke-width="1.5"/>' +
      /* ducks */
      '<g class="swim"><ellipse cx="140" cy="180" rx="12" ry="6" fill="#7a5a3a"/><circle cx="150" cy="172" r="5" fill="#2f6a3a"/><path d="M154 172l6 1-6 2z" fill="' + GOLD + '"/></g>' +
      '<g class="swim swim2"><ellipse cx="230" cy="194" rx="12" ry="6" fill="#7a5a3a"/><circle cx="240" cy="186" r="5" fill="#2f6a3a"/><path d="M244 186l6 1-6 2z" fill="' + GOLD + '"/></g>' +
      /* willow + reeds */
      '<rect x="356" y="110" width="8" height="110" fill="#4a3424"/><path d="M360 110q-40 20 -36 90M360 110q-20 30 -14 96M360 110q20 30 16 96M360 110q40 20 34 90" stroke="#6a9a3a" stroke-width="6" fill="none"/>' +
      '<path d="M10 240v-30M16 240v-36M22 240v-26M384 248v-30M390 248v-24" stroke="#4a7a2a" stroke-width="3"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#4f8a3e"/>' +
      sign(8, 8, 112, "Baisley Blvd") + tag("W.A.R.", 150, 252, 26, RED, -4),
      sky("g4", "#3a2a5a", "#f0a870"));
  }

  /* 5. Guy R Brewer Blvd and Linden Blvd, South Jamaica: street signs, a corner store awning, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="270" y="40" width="122" height="180" fill="#7a5a4a"/>' +
      (function () { let w = ""; for (let y = 50; y < 160; y += 18) for (let x = 282; x < 380; x += 22) w += '<rect x="' + x + '" y="' + y + '" width="12" height="10" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<path d="M270 168h122l-8 14H278z" fill="' + RED + '"/><path d="M278 182h106" stroke="#fff" stroke-width="2" stroke-dasharray="8 6"/>' +
      '<rect x="290" y="186" width="80" height="34" fill="#1d2329"/><rect class="flk" x="298" y="192" width="64" height="20" fill="#ffe7a8" opacity=".75"/>' +
      '<rect x="14" y="110" width="236" height="110" fill="#2e2a2a"/>' +
      tag("MONCH", 40, 172, 48, GOLD, -7) + tag("ORGANIZED KONFUSION", 24, 208, 19, BLUE, -3) +
      '<rect x="252" y="56" width="5" height="164" fill="#1d2329"/><path d="M254 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M270 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(188, 64, 132, "Guy R Brewer Blvd") + sign(208, 86, 92, "Linden Blvd") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0c0a14", "#2a2040"));
  }

  window.SCENES = { train, airtrain, kingmanor, baisley, corner };
})();
