/* Harlem opening scenes for the Jungle Brothers game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.4}55%{opacity:.95}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .7s ease-in-out infinite}.bob2{animation-delay:-.35s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 0%;animation:sway 3s ease-in-out infinite}.sway2{animation-delay:-1.5s}' +
    '@keyframes ring{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.ring{transform-box:fill-box;transform-origin:50% 0%;animation:ring 1.6s ease-in-out infinite}' +
    '@keyframes buzz{0%{transform:translate(-30px,10px)}25%{transform:translate(120px,-14px)}50%{transform:translate(260px,12px)}75%{transform:translate(380px,-10px)}100%{transform:translate(440px,6px)}}' +
    '.buzz{animation:buzz 9s linear infinite}.buzz2{animation-delay:-4s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes walk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}' +
    '.walk{animation:walk 12s linear infinite}.walk2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (cx, cy, letter, color, dark) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bee = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="8" ry="6" fill="' + GOLD + '" stroke="#222" stroke-width="1.2"/><path d="M-2 -5v10M3 -5v10" stroke="#222" stroke-width="2"/>' +
    '<ellipse cx="-2" cy="-7" rx="4" ry="5" fill="#e6f4ff" opacity=".85"/><ellipse cx="4" cy="-7" rx="4" ry="5" fill="#e6f4ff" opacity=".85"/></g>';
  const GOLD = "#f2c230", GREEN = "#2fa84f", RED = "#e2382f";

  /* 1. 125 St on the Eighth Avenue line: underground, white tile walls, the A B C D, a train pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="124" width="28" height="22" rx="3" fill="#ffe9a8" opacity=".9"/>';
    let tiles = "";
    for (let y = 0; y < 110; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d7d2c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v110" stroke="#d7d2c4" stroke-width="1"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 110) cols += '<rect x="' + x + '" y="108" width="12" height="96" fill="#3a5a8a"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe9da"/>' + tiles +
      '<rect x="0" y="100" width="400" height="10" fill="#2a6a8a"/>' +
      '<rect x="20" y="22" width="360" height="44" rx="4" fill="#111"/>' +
      '<text x="36" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="22" fill="#fff">125 St</text>' +
      bullet(156, 44, "A", "#0039a6") + bullet(182, 44, "B", "#ff6319") + bullet(208, 44, "C", "#0039a6") + bullet(234, 44, "D", "#ff6319") +
      '<text x="256" y="40" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">UPTOWN &amp; THE BRONX</text>' +
      '<text x="256" y="54" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">ST NICHOLAS AV</text>' +
      '<rect x="0" y="110" width="400" height="94" fill="#2b2b30"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="300" height="62" rx="6" fill="#b8bec6" stroke="#5b6270" stroke-width="2"/>' + windows +
        '<rect x="8" y="154" width="300" height="4" fill="#5b6270"/>' +
        '<circle cx="290" cy="166" r="9" fill="#0039a6"/><text x="290" y="170" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">A</text>' +
        '<circle cx="300" cy="132" r="3" fill="#fff6c2"/>' +
      '</g>' + cols +
      '<rect x="0" y="204" width="400" height="10" fill="#eab308"/><rect x="0" y="214" width="400" height="46" fill="#6b6b70"/>' +
      '<text x="390" y="250" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f2f2f2" letter-spacing="2">125 ST · HARLEM</text>',
      "");
  }

  /* 2. The Apollo on 125th Street: the red vertical sign, the marquee with chasing bulbs, a crowd lined up */
  function apollo() {
    let bulbs = "";
    for (let x = 96; x < 304; x += 12) bulbs += '<circle cx="' + x + '" cy="108" r="2.6" fill="#fff6c2" class="bulb' + ((x / 12) % 2 ? "" : " bulb2") + '"/><circle cx="' + x + '" cy="150" r="2.6" fill="#fff6c2" class="bulb' + ((x / 12) % 2 ? " bulb2" : "") + '"/>';
    let letters = "", L = "APOLLO";
    for (let i = 0; i < L.length; i++) letters += '<text x="200" y="' + (30 + i * 14) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + L[i] + '</text>';
    let crowd = "";
    for (let i = 0; i < 9; i++) crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + (60 + i * 34) + '" cy="196" r="7" fill="#3a2a22"/><rect x="' + (52 + i * 34) + '" y="204" width="16" height="26" rx="5" fill="' + [RED, GREEN, GOLD, "#334"][i % 4] + '"/></g>';
    let wins = "";
    for (let x = 30; x < 380; x += 30) wins += '<rect x="' + x + '" y="14" width="14" height="10" fill="#ffe08a" opacity=".6"/><rect x="' + x + '" y="40" width="14" height="10" fill="#ffe08a" opacity=".4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' + stars(8) +
      '<rect x="0" y="0" width="400" height="180" fill="#6b3a2c"/>' + wins +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3d44"/><rect x="0" y="180" width="400" height="50" fill="#8a8a8a"/>' +
      /* vertical blade sign */
      '<rect x="186" y="14" width="28" height="92" rx="4" fill="' + RED + '" stroke="#fff" stroke-width="2" class="flk"/>' + letters +
      /* marquee */
      '<rect x="90" y="102" width="220" height="54" rx="3" fill="#b3201c" stroke="#fff" stroke-width="2"/>' +
      '<rect x="102" y="114" width="196" height="30" fill="#fff"/>' +
      '<text x="200" y="135" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#111">JUNGLE BROTHERS</text>' + bulbs +
      '<rect x="120" y="156" width="160" height="24" fill="#2a1a12"/><rect x="128" y="160" width="30" height="20" fill="#ffe9a8" opacity=".7"/><rect x="185" y="160" width="30" height="20" fill="#ffe9a8" opacity=".7"/><rect x="242" y="160" width="30" height="20" fill="#ffe9a8" opacity=".7"/>' +
      crowd +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f2f2f2" letter-spacing="2">125TH STREET · HARLEM</text>',
      sky("ga", "#0d1630", "#2a3a6a"));
  }

  /* 3. Straight out the jungle: hanging vines, red-black-green drums bouncing, bees buzzing across */
  function jungle() {
    let vines = "";
    [20, 70, 330, 380].forEach(function (x, i) {
      vines += '<g class="sway' + (i % 2 ? " sway2" : "") + '"><path d="M' + x + ' 0q-10 40 0 80t0 70" stroke="#1f6a2a" stroke-width="4" fill="none"/>';
      for (let y = 20; y < 150; y += 24) vines += '<ellipse cx="' + (x + (y % 48 ? 8 : -8)) + '" cy="' + y + '" rx="9" ry="4" fill="' + GREEN + '" transform="rotate(' + (y % 48 ? 30 : -30) + ' ' + x + ' ' + y + ')"/>';
      vines += '</g>';
    });
    const drum = (x, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="150" rx="26" ry="8" fill="#f2e2c0" stroke="#6b4a2a" stroke-width="2"/>' +
      '<path d="M' + (x - 26) + ' 150q2 30 14 40v26h24v-26q12-10 14-40" fill="' + c + '" stroke="#222" stroke-width="2"/>' +
      '<path d="M' + (x - 22) + ' 160l22 22 22-22" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g>';
    let leaves = "";
    for (let x = -10; x < 420; x += 34) leaves += '<path d="M' + x + ' 260q14-50 34-60q-6 30-10 60z" fill="#1f6a2a"/><path d="M' + (x + 16) + ' 260q-4-40 14-54q2 30-2 54z" fill="' + GREEN + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' +
      '<circle cx="200" cy="70" r="40" fill="' + GOLD + '" opacity=".9"/>' +
      '<rect x="0" y="0" width="400" height="10" fill="' + RED + '"/><rect x="0" y="10" width="400" height="10" fill="#111"/><rect x="0" y="20" width="400" height="10" fill="' + GREEN + '"/>' +
      vines +
      '<text x="200" y="128" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#fff" stroke="#121a10" stroke-width="3" paint-order="stroke">STRAIGHT OUT THE JUNGLE</text>' +
      drum(130, RED, "bob") + drum(200, "#222", "bob bob2") + drum(270, GREEN, "bob") +
      '<g class="buzz">' + bee(0, 70) + '</g><g class="buzz buzz2">' + bee(0, 100) + '</g>' + leaves,
      sky("gj", "#2a7a4a", "#9ad49a"));
  }

  /* 4. Marcus Garvey Park: the cast-iron Mount Morris fire watchtower on its rock, the bell swinging */
  function tower() {
    let trees = "";
    for (let x = -10; x < 420; x += 44) trees += '<circle cx="' + x + '" cy="' + (196 - (x % 3) * 6) + '" r="26" fill="' + (x % 88 ? "#2f8a3e" : "#3fa04e") + '"/>';
    const level = y => '<rect x="160" y="' + y + '" width="80" height="4" fill="#3a2a24"/>';
    let frame = "";
    [166, 186, 214, 234].forEach(function (x) { frame += '<rect x="' + x + '" y="40" width="4" height="120" fill="#3a2a24"/>'; });
    let braces = "";
    [[60, 100], [100, 140]].forEach(function (r) { braces += '<path d="M166 ' + r[0] + 'L234 ' + r[1] + 'M234 ' + r[0] + 'L166 ' + r[1] + '" stroke="#3a2a24" stroke-width="1.5"/>'; });
    let stair = "";
    for (let y = 150; y > 50; y -= 10) stair += '<path d="M190 ' + y + 'q10 -5 20 0" stroke="#5a463c" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' +
      '<path d="M100 200q40-50 100-48t100 48z" fill="#7a7468"/><path d="M130 190q30-30 70-30" stroke="#9a9488" stroke-width="3" fill="none"/>' +
      frame + braces + stair + level(60) + level(100) + level(140) + level(156) +
      '<path d="M156 40h88l-44-22z" fill="#3a2a24"/><rect x="198" y="8" width="4" height="12" fill="#3a2a24"/>' +
      '<g class="ring"><path d="M188 42q12-12 24 0v10h-24z" fill="#b8863a" stroke="#6b4a1a" stroke-width="1.5"/><circle cx="200" cy="55" r="3" fill="#6b4a1a"/></g>' +
      trees + '<rect x="0" y="214" width="400" height="46" fill="#5a8a3e"/><path d="M0 232h400" stroke="#c9b48a" stroke-width="6"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f2f2f2" letter-spacing="2">MARCUS GARVEY PARK · HARLEM</text>',
      sky("gt", "#f2a65a", "#ffe0a8"));
  }

  /* 5. 125th St and Malcolm X Blvd: green street signs, a wall tagged JUNGLE BROTHERS */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a3a30"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#2d221c"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 12) s += '<path d="M20 ' + y + 'h380" stroke="#3a2d25" stroke-width="1"/>'; return s; })() +
      '<rect x="300" y="84" width="90" height="10" fill="' + RED + '"/><rect x="300" y="94" width="90" height="10" fill="#111"/><rect x="300" y="104" width="90" height="10" fill="' + GREEN + '"/>' +
      tag("JUNGLE BROS", 118, 160, 36, GOLD, -5) +
      tag("J.BEEZ", 230, 200, 26, GREEN, -3) +
      tag("NATIVE TONGUES", 150, 112, 16, RED, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">W 125 St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + GOLD + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#fff0b0"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e2e8f0" letter-spacing="2">HARLEM, MANHATTAN</text>',
      sky("gc", "#121a10", "#2f4a2a"));
  }

  window.SCENES = { train, apollo, jungle, tower, corner };
})();
