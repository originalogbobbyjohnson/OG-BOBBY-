/* peopleunderthestairs scenes (Regions tab: Los Angeles + SoCal; Mid-City LA). CSS classes prefixed pu- (the page's own anim-train is kept).
   1 Culver City station, Metro E Line: the aerial platform over Venice Blvd at Robertson, the gold E Line train sliding in, palms below.
   2 The record store on Pico Blvd where the story of the P began (they met in 1994): crates out front, a record spinning in the window.
   3 Hamilton High School on Robertson Blvd: Double K's school. Cream art-deco block, the flag, the Yankees banner.
   4 Eat Street: a late-night chili-burger stand on Pico, steam off the griddle, the menu board lit up.
   5 W Pico Blvd and S Robertson Blvd: green signs, THE P tagged, the two triangle towers of Century City behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes puflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.pu-flag{transform-box:fill-box;transform-origin:0 50%;animation:puflag 1.5s ease-in-out infinite}' +
    '@keyframes pusway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pu-sway{transform-box:fill-box;transform-origin:50% 100%;animation:pusway 3.4s ease-in-out infinite}' +
    '@keyframes pucar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.pu-car{animation:pucar 6s linear infinite}.pu-car2{animation-delay:-3s}' +
    '@keyframes puspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pu-spin{transform-box:fill-box;transform-origin:50% 50%;animation:puspin 2s linear infinite}' +
    '@keyframes pusteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.pu-stm{animation:pusteam 2.2s ease-out infinite}.pu-stm2{animation-delay:-1.1s}' +
    '@keyframes puglow{0%,100%{opacity:.45}50%{opacity:1}}.pu-glow{animation:puglow 1.6s ease-in-out infinite}.pu-g2{animation-delay:-.8s}' +
    '@keyframes putw{0%,100%{opacity:.2}50%{opacity:1}}.pu-tw{animation:putw 1.6s ease-in-out infinite}.pu-tw2{animation-delay:-.8s}' +
    '@keyframes pucloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.pu-cloud{animation:pucloud 26s linear infinite}.pu-c2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + (r || 11) / 2) + '" text-anchor="middle" ' + font + ' font-size="' + Math.round((r || 11) * 1.35) + '" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="pu-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const record = (cx, cy, r, label) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.72) + '" fill="none" stroke="#333" stroke-width="1"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.34) + '" fill="' + label + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.07) + '" fill="#111"/>';
  const ELINE = "#fdb913", ORANGE = "#f28c28", TEAL = "#3fb8a8", YEL = "#e8d24a";

  /* 1. Culver City station, E Line, up on the aerial deck over Venice Blvd */
  function pustation() {
    let win = ""; for (let x = 36; x < 300; x += 32) win += '<rect x="' + x + '" y="72" width="24" height="24" rx="3" fill="#24313d"/>';
    const train = '<g class="anim-train"><rect x="16" y="60" width="300" height="68" rx="12" fill="#d6d9dc" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="16" y="104" width="300" height="10" fill="' + ELINE + '"/><rect x="16" y="114" width="300" height="3" fill="#333"/>' +
      '<rect x="160" y="64" width="22" height="52" rx="2" fill="#9aa1a8"/><path d="M171 64v52" stroke="#555" stroke-width="1.5"/>' +
      '<path d="M300 60q16 0 16 24v34h-16z" fill="#c7cbcf"/><rect x="300" y="70" width="12" height="24" rx="3" fill="#24313d"/><circle cx="306" cy="120" r="4" fill="#fff6c2"/>' +
      bullet(250, 87, "E", ELINE, 10) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pus1)"/>' + cloud(80, 26, 0.9, "pu-cloud") + cloud(280, 18, 0.7, "pu-cloud pu-c2") +
      /* platform canopy */
      '<path d="M0 46h400v6H0z" fill="#5a6470"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="52" width="4" height="76" fill="#6a737e"/>').join("") +
      train +
      /* aerial deck and its columns over the street */
      '<rect x="0" y="128" width="400" height="10" fill="#eab308"/><rect x="0" y="138" width="400" height="22" fill="#c9c2b4"/>' +
      '<rect x="96" y="141" width="208" height="17" rx="2" fill="#111"/><text x="186" y="153.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Culver City</text>' +
      '<circle cx="280" cy="149.5" r="7" fill="' + ELINE + '"/><text x="280" y="153.5" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E</text>' +
      [70, 200, 330].map(x => '<path d="M' + (x - 14) + ' 160h28l-6 10v60h-16v-60z" fill="#bdb6a6"/>').join("") +
      palm(20, 230, 70) + palm(270, 230, 60, "#3b6b3d") + palm(380, 230, 76) +
      /* Venice Blvd below */
      '<rect x="0" y="206" width="400" height="54" fill="#4a4c52"/><path d="M0 232h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 214, "#e8e2d2", "pu-car") + car(0, 214, TEAL, "pu-car pu-car2"),
      sky("pus1", "#8fc3ea", "#f3e2c0"));
  }

  /* 2. The record store on Pico Blvd */
  function purecords() {
    const crate = (x, c) => '<rect x="' + x + '" y="196" width="54" height="30" fill="#b07a42" stroke="#6a4420" stroke-width="2"/><path d="M' + x + ' 206h54M' + x + ' 216h54" stroke="#6a4420" stroke-width="1"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 4 + i * 10) + '" y="' + (182 + (i % 2) * 3) + '" width="8" height="18" fill="' + [c, "#222", "#d9c7a0", c, "#2c4a6a"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pus2)"/>' +
      /* storefront */
      '<rect x="20" y="40" width="360" height="160" fill="#d9c49a"/><rect x="20" y="40" width="360" height="10" fill="#a8442c"/>' +
      '<rect x="60" y="56" width="280" height="34" fill="#1d1a16"/><text x="200" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="3" fill="' + YEL + '">RECORDS</text>' +
      '<g class="pu-glow"><rect x="60" y="56" width="280" height="34" fill="none" stroke="' + ORANGE + '" stroke-width="2"/></g>' +
      /* windows */
      '<rect x="36" y="100" width="130" height="86" fill="#2c3a44" stroke="#5a4630" stroke-width="4"/><rect x="234" y="100" width="130" height="86" fill="#2c3a44" stroke="#5a4630" stroke-width="4"/>' +
      '<rect x="176" y="100" width="48" height="96" fill="#3a2a1f"/><circle cx="216" cy="150" r="3" fill="#d9b34a"/>' +
      '<g class="pu-spin">' + record(100, 142, 30, ORANGE) + '</g>' +
      '<rect x="252" y="112" width="40" height="40" fill="' + TEAL + '"/><circle cx="272" cy="132" r="12" fill="#111"/><rect x="304" y="112" width="40" height="40" fill="' + YEL + '"/><path d="M310 146l14 -26l14 26z" fill="#a8442c"/>' +
      '<text x="298" y="176" text-anchor="middle" ' + font + ' font-size="9" fill="#f2efe6">NEW + USED VINYL</text>' +
      /* sidewalk crates */
      '<rect x="0" y="200" width="400" height="30" fill="#c9c1ae"/>' + crate(40, ORANGE) + crate(300, TEAL) +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="374" y="120" width="5" height="110" fill="#7d8288"/>' + sign(304, 116, 92, "W Pico Blvd", 11),
      sky("pus2", "#9cc9ec", "#f4e7cf"));
  }

  /* 3. Hamilton High School on Robertson Blvd */
  function puhami() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let x = 44; x < 360; x += 24) if (x < 170 || x > 226) win += '<rect x="' + x + '" y="' + (104 + r * 24) + '" width="14" height="16" fill="#2c3a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pus3)"/>' + cloud(110, 34, 1, "pu-cloud") +
      palm(16, 186, 110) + palm(388, 186, 96) +
      '<rect x="32" y="94" width="336" height="92" fill="#ece2cc"/><rect x="32" y="94" width="336" height="5" fill="#c9b994"/>' + win +
      /* art-deco center block with vertical fins */
      '<rect x="160" y="54" width="80" height="132" fill="#f2e9d4"/><rect x="176" y="40" width="48" height="16" fill="#f2e9d4"/><rect x="190" y="30" width="20" height="12" fill="#f2e9d4"/>' +
      [168, 184, 200, 216, 232].map(x => '<rect x="' + (x - 2) + '" y="60" width="4" height="40" fill="#d8caa6"/>').join("") +
      '<rect x="164" y="104" width="72" height="16" fill="#d8caa6"/><text x="200" y="116" text-anchor="middle" ' + font + ' font-size="8.5" fill="#3a2e20">HAMILTON HIGH</text>' +
      '<path d="M180 186v-46h40v46z" fill="#3a2a1f"/><path d="M200 186v-46" stroke="#f2e9d4" stroke-width="2"/>' +
      '<rect x="199" y="4" width="3" height="28" fill="#888"/><g class="pu-flag"><rect x="202" y="4" width="22" height="13" fill="#b22234"/><rect x="202" y="4" width="10" height="7" fill="#3c3b6e"/><path d="M212 8h12M202 14h22" stroke="#fff" stroke-width="1.5"/></g>' +
      '<rect x="56" y="164" width="88" height="16" fill="#1c2a5a"/><text x="100" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">YANKEES</text>' +
      '<rect x="256" y="164" width="92" height="16" fill="' + ORANGE + '"/><text x="302" y="176" text-anchor="middle" ' + font + ' font-size="9" fill="#1a1410">DOUBLE K</text>' +
      '<rect x="0" y="186" width="400" height="16" fill="#cfc6b4"/><rect x="0" y="202" width="400" height="58" fill="#4a4c52"/><path d="M0 228h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 208, "#e8e2d2", "pu-car") + car(0, 208, ORANGE, "pu-car pu-car2") +
      '<rect x="44" y="120" width="5" height="82" fill="#7d8288"/>' + sign(4, 116, 92, "S Robertson Blvd", 9),
      sky("pus3", "#86bde8", "#f2e6cc"));
  }

  /* 4. Eat Street: the late-night chili-burger stand */
  function pueat() {
    return svg(
      '<rect width="400" height="260" fill="url(#pus4)"/>' +
      [[40, 24], [110, 14], [300, 30], [360, 16], [230, 10], [170, 36]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.5" fill="#fff" class="pu-tw' + (i % 2 ? " pu-tw2" : "") + '"/>').join("") +
      '<circle cx="340" cy="44" r="14" fill="#f4ecd0"/>' +
      palm(30, 150, 96, "#24402a") + palm(372, 150, 84, "#24402a") +
      /* the stand */
      '<rect x="70" y="96" width="260" height="104" fill="#f1e6cc"/><path d="M58 96l14 -24h256l14 24z" fill="#c43a2a"/>' + [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (72 + i * 40) + ' 72l-10 24h20l10 -24z" fill="#f4f0e6"/>').join("") +
      '<rect x="110" y="44" width="180" height="28" rx="4" fill="#1d1a16" stroke="' + YEL + '" stroke-width="2"/><g class="pu-glow"><text x="200" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="2" fill="' + ORANGE + '">CHILI BURGERS</text></g>' +
      /* service window, griddle, steam */
      '<rect x="92" y="110" width="216" height="56" fill="#2a2420"/><rect x="100" y="148" width="200" height="10" fill="#555"/>' +
      [130, 170, 210, 250].map(x => '<ellipse cx="' + x + '" cy="147" rx="12" ry="4" fill="#7a4a2a"/>').join("") +
      [130, 190, 250].map((x, i) => '<path class="pu-stm' + (i % 2 ? " pu-stm2" : "") + '" d="M' + x + ' 140q-6 -8 0 -16q6 -8 0 -16" stroke="#e8e2d8" stroke-width="3" fill="none" opacity=".8"/>').join("") +
      /* menu board */
      '<rect x="250" y="112" width="52" height="30" fill="#f4ecd0"/><text x="276" y="122" text-anchor="middle" ' + font + ' font-size="6" fill="#222">BURGER</text><text x="276" y="130" text-anchor="middle" ' + font + ' font-size="6" fill="#222">TACOS</text><text x="276" y="138" text-anchor="middle" ' + font + ' font-size="6" fill="#222">FRIES</text>' +
      '<rect x="70" y="166" width="260" height="10" fill="#c43a2a"/><rect x="70" y="176" width="260" height="24" fill="#e2d4b4"/>' +
      [110, 170, 230, 290].map(x => '<rect x="' + (x - 8) + '" y="186" width="16" height="4" fill="#c43a2a"/><rect x="' + (x - 2) + '" y="190" width="4" height="14" fill="#666"/>').join("") +
      '<rect x="0" y="200" width="400" height="18" fill="#7a7468"/><rect x="0" y="218" width="400" height="42" fill="#34363c"/><path d="M0 240h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 222, "#e8e2d2", "pu-car") +
      tag("EAT STREET", 24, 196, 18, YEL, -4),
      sky("pus4", "#141a3a", "#3a2a4a"));
  }

  /* 5. W Pico Blvd & S Robertson Blvd, the Century City towers behind */
  function pucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pus5)"/>' +
      /* Century City: the twin triangle towers */
      '<path d="M120 128v-88l26 -10l20 10v88z" fill="#8f9bb4"/><path d="M146 30v98" stroke="#a9b4ca" stroke-width="2"/>' +
      '<path d="M190 128v-88l26 -10l20 10v88z" fill="#8f9bb4"/><path d="M216 30v98" stroke="#a9b4ca" stroke-width="2"/>' +
      '<path d="M80 128v-40h24v40zM252 128v-56h20v56zM280 128v-30h26v30z" fill="#7e8aa4"/>' +
      '<rect x="0" y="128" width="400" height="10" fill="#a69a86"/>' +
      palm(26, 150, 104) + palm(340, 150, 70, "#3d6b40") +
      '<rect x="50" y="138" width="300" height="80" fill="#e8dcc2"/><rect x="50" y="138" width="300" height="6" fill="#c7b591"/>' +
      tag("THE P", 70, 198, 46, ORANGE, -6) + tag("PUTS", 220, 176, 24, TEAL, -4) + tag("PIECELOCK 70", 200, 206, 16, YEL, -3) +
      '<g class="pu-glow"><circle cx="332" cy="160" r="3" fill="' + ORANGE + '"/><circle cx="64" cy="152" r="2.5" fill="' + TEAL + '"/></g>' +
      '<rect x="0" y="218" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="230" width="400" height="30" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="380" y="36" width="5" height="182" fill="#7d8288"/>' + sign(242, 38, 150, "W Pico Blvd", 13) + sign(242, 64, 150, "S Robertson Blvd", 12),
      sky("pus5", "#86b9e6", "#f2e4c8"));
  }

  window.SCENES = { pustation, purecords, puhami, pueat, pucorner };
})();
