/* Wale (Brightwood, NW Washington D.C. / Prince George's County MD — THE DMV region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed wl- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes wlblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.wl-blk{animation:wlblink 1s steps(1) infinite}.wl-blk2{animation-delay:.5s}' +
    '@keyframes wlflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.wl-flk{animation:wlflick 2.4s infinite}.wl-flk2{animation-delay:.9s}' +
    '@keyframes wlbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.wl-beam{transform-box:fill-box;transform-origin:50% 100%;animation:wlbeam 4s ease-in-out infinite}.wl-beam2{animation-delay:-2s}' +
    '@keyframes wlhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.wl-hop{animation:wlhop .8s ease-in-out infinite}.wl-hop2{animation-delay:.27s}.wl-hop3{animation-delay:.53s}' +
    '@keyframes wlroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.wl-car{animation:wlroll 5s linear infinite}.wl-car2{animation-duration:7s;animation-delay:-3s}.wl-car3{animation-duration:6s;animation-delay:-1.5s}' +
    '@keyframes wlrollb{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.wl-carb{animation:wlrollb 6.5s linear infinite}.wl-carb2{animation-delay:-3.2s}' +
    '@keyframes wlkick{0%{transform:translate(0,0)}50%{transform:translate(110px,-80px)}100%{transform:translate(220px,0)}}.wl-ball{animation:wlkick 2.6s ease-in-out infinite}' +
    '@keyframes wlwave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.wl-flag{transform-box:fill-box;transform-origin:0 50%;animation:wlwave 1.8s ease-in-out infinite}' +
    '@keyframes wldrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.wl-cloud{animation:wldrift 26s linear infinite}.wl-cloud2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 12) + '" fill="#3a2a1e"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#2f5a32") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a32") + '" opacity=".85"/>';
  /* WMATA line bullet: colored circle with the 2-letter line code */
  const bullet = (x, y, color, label, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="' + (dark ? "#111" : "#fff") + '">' + label + '</text>';
  const RED = "#e31b23", GOLD = "#f2c94c", BLUE = "#4fb3ff", MARBLE = "#ece6d8";

  /* 1. Takoma station (Red Line): open-air platform under the curved concrete canopy, platform-edge lights blinking as the train pulls in */
  function wlstation() {
    const car = (x) => '<rect x="' + x + '" y="128" width="168" height="62" rx="5" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="170" width="168" height="4" fill="' + RED + '"/><rect x="' + x + '" y="175" width="168" height="2" fill="#1f4e9a"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="138" width="26" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + (x + 66) + '" y="136" width="16" height="44" fill="#9ea4aa"/><path d="M' + (x + 74) + ' 136v44" stroke="#6b7177"/>' +
      '<circle cx="' + (x + 26) + '" cy="192" r="5" fill="#222"/><circle cx="' + (x + 142) + '" cy="192" r="5" fill="#222"/>';
    const cab = '<path d="M348 190v-58q0-4 4-4h30q12 4 16 22v40z" fill="#c4c9ce" stroke="#6b7177" stroke-width="1.5"/><path d="M372 134h12q8 4 11 18h-23z" fill="#11161c"/>' +
      '<rect x="348" y="170" width="50" height="4" fill="' + RED + '"/><rect x="376" y="140" width="16" height="7" rx="1" fill="#000"/><text x="384" y="145.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="5" fill="#ff5a3c">RED</text>' +
      '<circle cx="392" cy="180" r="3" fill="#fff6c2" class="wl-flk"/><circle cx="370" cy="192" r="5" fill="#222"/>';
    let edge = "";
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#ff6b5a" class="wl-blk' + (x % 52 ? " wl-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws1)"/>' + stars(12) +
      tree(30, 96, 26, "#21402a") + tree(372, 92, 28, "#21402a") + tree(210, 100, 20, "#284a30") +
      /* curved concrete canopy, gull-wing style */
      '<path d="M0 54q100 26 200 4q100 22 200 -4v16q-100 28 -200 6q-100 22 -200 -6z" fill="#b9b3a6"/><path d="M0 70q100 28 200 6q100 22 200 -6v4q-100 26 -200 6q-100 22 -200 -6z" fill="#8a857a"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="72" width="10" height="56" fill="#9e988b"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#54504a"/>' +
      '<g class="anim-train">' + car(4) + car(176) + cab + '</g>' +
      /* granite platform edge + brick-red hex tile */
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#8c4a3a"/>' +
      /* brown station pylon with the line color band */
      '<rect x="18" y="140" width="14" height="64" fill="#4a3628"/><rect x="18" y="140" width="14" height="10" fill="' + RED + '"/>' +
      /* station sign */
      '<rect x="110" y="214" width="180" height="36" rx="3" fill="#2b2119" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="210" y="238" text-anchor="middle" ' + F + ' font-weight="700" font-size="18" fill="#fff">Takoma</text>' +
      bullet(130, 232, "#bf0d3e", "RD") +
      '<text x="350" y="232" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">RED LINE</text>' +
      '<text x="350" y="243" text-anchor="middle" ' + F + ' font-size="7" fill="#e8dccb">TO BRIGHTWOOD, NW</text>',
      sky("ws1", "#141a33", "#5a3d5c"));
  }

  /* 2. The Howard Theatre, Shaw: cream facade with tall arched windows, the vertical name sign, a go-go night with the crowd bouncing */
  function wlhoward() {
    let crowd = "";
    for (let i = 0; i < 15; i++) crowd += '<g class="wl-hop ' + ["", "wl-hop2", "wl-hop3"][i % 3] + '"><rect x="' + (6 + i * 26) + '" y="220" width="16" height="30" rx="7" fill="' + ["#1d2230", "#2a1a22", "#1c2a2a"][i % 3] + '"/><circle cx="' + (14 + i * 26) + '" cy="214" r="7" fill="' + ["#1d2230", "#2a1a22", "#1c2a2a"][i % 3] + '"/></g>';
    const arch = (x) => '<path d="M' + x + ' 186v-60q0-22 22-22t22 22v60z" fill="#ffd27a" opacity=".85"/><path d="M' + (x + 22) + ' 104v82M' + x + ' 150h44" stroke="#6b4a2a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws2)"/>' + stars(14) +
      '<g class="wl-beam" ><path d="M60 210l-22-210h44z" fill="' + BLUE + '" opacity=".18"/></g><g class="wl-beam wl-beam2"><path d="M340 210l-22-210h44z" fill="' + RED + '" opacity=".2"/></g>' +
      '<rect x="70" y="64" width="260" height="140" fill="#efe6d2"/><rect x="64" y="58" width="272" height="10" fill="#d9ccb0"/>' +
      '<rect x="64" y="76" width="272" height="5" fill="#c9b994"/>' +
      arch(92) + arch(178) + arch(264) +
      /* vertical name sign */
      '<rect x="186" y="12" width="28" height="86" rx="3" fill="#1b1b1b" stroke="' + GOLD + '" stroke-width="2"/>' +
      ["H", "O", "W", "A", "R", "D"].map((c, i) => '<text x="200" y="' + (27 + i * 13) + '" text-anchor="middle" ' + A + ' font-size="12" fill="' + GOLD + '" class="wl-flk' + (i % 2 ? " wl-flk2" : "") + '">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="96" y="160" width="208" height="30" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="174" text-anchor="middle" ' + A + ' font-size="11" fill="' + GOLD + '">THE HOWARD THEATRE</text>' +
      '<text x="200" y="186" text-anchor="middle" ' + F + ' font-weight="700" font-size="8.5" fill="#fff">GO-GO NIGHT · WALE · DC CHILLIN\'</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#2c2a2e"/>' + crowd,
      sky("ws2", "#0c0a1c", "#2b2350"));
  }

  /* 3. Bowie State, Prince George's County: the Bulldogs' black-and-gold field under the lights, a punt sailing end to end */
  function wlbowie() {
    let yard = "";
    for (let x = 30; x <= 370; x += 34) yard += '<path d="M' + x + ' 170l' + ((x - 200) * .25) + ' 70" stroke="#e8f2e0" stroke-width="1.6" opacity=".8"/>';
    const light = (x) => '<rect x="' + (x - 2) + '" y="20" width="4" height="120" fill="#5a5f66"/><rect x="' + (x - 18) + '" y="10" width="36" height="14" rx="2" fill="#2b2f36"/>' +
      [0, 1, 2, 3].map(i => '<circle cx="' + (x - 12 + i * 8) + '" cy="17" r="3" fill="#fff8d0" class="wl-flk' + (i % 2 ? " wl-flk2" : "") + '"/>').join("");
    let stands = "";
    for (let i = 0; i < 40; i++) stands += '<circle cx="' + (6 + i * 10) + '" cy="' + (124 + (i % 3) * 8) + '" r="3" fill="' + ["#f2c94c", "#111", "#e9e2c8"][i % 3] + '" class="wl-hop' + (i % 3 ? " wl-hop2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws3)"/>' + stars(16) + light(40) + light(360) +
      '<rect x="0" y="112" width="400" height="44" fill="#1a1a1a"/>' + stands +
      '<rect x="0" y="152" width="400" height="18" fill="#111"/><text x="200" y="165" text-anchor="middle" ' + A + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">BOWIE STATE BULLDOGS</text>' +
      '<path d="M0 170h400v90H0z" fill="#2f7a3a"/>' + yard +
      /* goal posts in gold */
      '<path d="M40 236v-36M28 200h24M28 200v-26M52 200v-26" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<path d="M360 236v-36M348 200h24M348 200v-26M372 200v-26" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<g class="wl-ball"><ellipse cx="90" cy="200" rx="7" ry="4.5" fill="#7a3e1c"/><path d="M86 200h8" stroke="#fff" stroke-width="1"/></g>' +
      '<rect x="150" y="80" width="100" height="30" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="99" text-anchor="middle" ' + A + ' font-size="13" fill="' + GOLD + '">HOME  21  ·  VIS  7</text>',
      sky("ws3", "#05070f", "#1d2440"));
  }

  /* 4. The Capital Beltway at night: the big green exit sign for Largo / Prince George's County, traffic streaming both ways */
  function wlbeltway() {
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="48" height="16" rx="5" fill="' + c + '"/><circle cx="10" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="38" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="46" cy="' + (y + 6) + '" r="2.5" fill="#fff8c0"/></g>';
    const carb = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="48" height="16" rx="5" fill="' + c + '"/><circle cx="10" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="38" cy="' + (y + 17) + '" r="4" fill="#111"/><circle cx="2" cy="' + (y + 6) + '" r="2.5" fill="#ff4a3a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ws4)"/>' + stars(18) +
      '<path d="M0 150l60-20 70 14 80-24 90 18 100-14v40H0z" fill="#16261c"/>' +
      /* overhead sign gantry */
      '<rect x="40" y="40" width="6" height="134" fill="#7b8189"/><rect x="354" y="40" width="6" height="134" fill="#7b8189"/><rect x="40" y="38" width="320" height="5" fill="#7b8189"/>' +
      '<rect x="62" y="46" width="276" height="76" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      /* route shield: interstate-style blue/red, no number art beyond the route */
      '<path d="M84 60h40v6q0 26-20 34q-20-8-20-34z" fill="#1f4e9a" stroke="#fff" stroke-width="1.5"/><path d="M84 60h40v8H84z" fill="' + RED + '"/>' +
      /* route number drawn by hand so the 9 has a straight stem */
      '<text x="96" y="90" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="#fff">4</text>' +
      '<circle cx="104" cy="82.5" r="3.4" fill="none" stroke="#fff" stroke-width="2"/><path d="M107.4 82.5v8" stroke="#fff" stroke-width="2"/>' +
      '<text x="113.5" y="90" text-anchor="middle" ' + F + ' font-weight="700" font-size="13" fill="#fff">5</text>' +
      '<text x="232" y="74" text-anchor="middle" ' + F + ' font-weight="700" font-size="19" fill="#fff">Largo</text>' +
      '<text x="232" y="96" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Prince George\'s County</text>' +
      '<text x="232" y="113" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#ffe08a">EXIT ONLY · PG CHILLIN\'</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2c2d31"/><path d="M0 214h400" stroke="#e8c547" stroke-width="3"/><path d="M0 192h400M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="22 16"/>' +
      car("wl-car", 176, RED) + car("wl-car wl-car2", 196, "#d9dde2") + carb("wl-carb", 220, "#2f5d8a") + carb("wl-carb wl-carb2", 240, GOLD),
      sky("ws4", "#0a0f22", "#3b2c4a"));
  }

  /* Washington Monument (white marble obelisk, red aircraft lights) + Capitol dome, skyline behind the corner */
  const monument = (x, base, h) =>
    '<path d="M' + (x - 9) + ' ' + base + 'L' + (x - 6) + ' ' + (base - h) + 'L' + x + ' ' + (base - h - 10) + 'L' + (x + 6) + ' ' + (base - h) + 'L' + (x + 9) + ' ' + base + 'z" fill="' + MARBLE + '"/>' +
    '<path d="M' + (x - 9) + ' ' + base + 'L' + (x - 6) + ' ' + (base - h) + 'L' + x + ' ' + (base - h - 10) + 'z" fill="#cfc7b4"/>' +
    '<rect x="' + (x - 7.6) + '" y="' + (base - h * .3) + '" width="15.2" height="2" fill="#d6cdb8"/>' +
    '<circle cx="' + (x - 4) + '" cy="' + (base - h + 6) + '" r="1.6" fill="#ff3030" class="wl-blk"/><circle cx="' + (x + 4) + '" cy="' + (base - h + 6) + '" r="1.6" fill="#ff3030" class="wl-blk wl-blk2"/>';
  const capitol = (x, base) =>
    '<rect x="' + (x - 46) + '" y="' + (base - 14) + '" width="92" height="14" fill="#e6e0d0"/>' +
    '<rect x="' + (x - 18) + '" y="' + (base - 24) + '" width="36" height="10" fill="#e6e0d0"/>' +
    '<path d="M' + (x - 16) + ' ' + (base - 24) + 'q16-30 32 0z" fill="#efe9da"/><rect x="' + (x - 3) + '" y="' + (base - 44) + '" width="6" height="8" fill="#efe9da"/><circle cx="' + x + '" cy="' + (base - 46) + '" r="2.4" fill="#efe9da"/>';

  /* 5. Georgia Ave NW & Missouri Ave NW in Brightwood: green street signs, WALE tagged on the brick, the Washington Monument and the Capitol behind */
  function wlcorner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1010"/>' +
      '<rect x="0" y="0" width="400" height="96" fill="url(#ws5)"/>' + stars(9) +
      '<g class="wl-cloud"><ellipse cx="40" cy="22" rx="26" ry="6" fill="#3a3a5a" opacity=".6"/></g>' +
      monument(140, 96, 70) + capitol(250, 96) +
      '<rect x="20" y="70" width="40" height="26" fill="#141826"/><rect x="300" y="64" width="30" height="32" fill="#141826"/><rect x="336" y="74" width="50" height="22" fill="#141826"/>' +
      bricks(96, 212, "#5e2a22") +
      tag("WALE", 22, 176, 54, RED, -5) + tag("BOARD ADMIN", 30, 206, 18, GOLD, -3) + tag("FOLARIN", 26, 126, 20, BLUE, -7) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="wl-car wl-car3"><rect x="0" y="236" width="56" height="16" rx="5" fill="#1f4e9a"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="44" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole + DC flag banner (three red stars over two bars, no text) */
      '<rect x="336" y="64" width="5" height="150" fill="#4a5058"/>' +
      '<rect x="270" y="58" width="122" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="331" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Georgia Ave NW</text>' +
      '<rect x="270" y="82" width="122" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="331" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="11.5" fill="#fff">Missouri Ave NW</text>' +
      '<g class="wl-flag"><rect x="341" y="110" width="44" height="28" fill="#fff"/>' +
      [0, 1, 2].map(i => '<path d="M' + (350 + i * 13) + ' 115l1.6 4.6h4.8l-3.9 2.9 1.5 4.6-4-2.9-4 2.9 1.5-4.6-3.9-2.9h4.8z" fill="' + RED + '"/>').join("") +
      '<rect x="341" y="125" width="44" height="4" fill="' + RED + '"/><rect x="341" y="132" width="44" height="4" fill="' + RED + '"/></g>',
      sky("ws5", "#0b1430", "#3a3058"));
  }

  window.SCENES = { wlstation, wlhoward, wlbowie, wlbeltway, wlcorner };
})();
