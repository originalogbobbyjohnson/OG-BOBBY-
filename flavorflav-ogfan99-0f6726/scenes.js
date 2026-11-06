/* Flavor Flav game (NYC map, Long Island: Roosevelt, born there, raised next door in Freeport).
   1. LIRR Babylon Branch pulling into Baldwin (elevated, the station just west of Roosevelt).
   2. The Soul Diner in Freeport, his father's diner: chrome front, neon, coffee steaming, a piano in the window (he taught himself piano at five).
   3. The Las Vegas Strip at night, where he has lived since the 2010s: towers, lights, the welcome sign, a giant clock ticking.
   4. Paris 2024: the indoor pool at La Defense Arena, where he was the official hype man of the US women's water polo team.
   5. Nassau Rd & W Fulton Av, Roosevelt: green signs, the wall tagged FLAVOR FLAV, the public library behind.
   400 x 260 SVGs. All animation classes prefixed ff- . No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ffflk{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ff-flk{animation:ffflk 2.6s infinite}.ff-flk2{animation-delay:-1.1s}' +
    '@keyframes ffspin{to{transform:rotate(360deg)}}.ff-hand{transform-box:view-box;animation:ffspin 6s linear infinite}.ff-hand2{animation-duration:72s}' +
    '@keyframes ffcar{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.ff-car{animation:ffcar 7s linear infinite}.ff-car2{animation-delay:-3.6s}' +
    '@keyframes ffsteam{0%{opacity:0;transform:translateY(4px)}40%{opacity:.8}100%{opacity:0;transform:translateY(-16px)}}.ff-st{animation:ffsteam 2.4s ease-out infinite}.ff-st2{animation-delay:-.8s}.ff-st3{animation-delay:-1.6s}' +
    '@keyframes ffkey{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.ff-key{animation:ffkey .5s ease-in-out infinite}.ff-key2{animation-delay:-.25s}' +
    '@keyframes ffblink{0%,100%{opacity:.2}50%{opacity:1}}.ff-bl{animation:ffblink 1.2s ease-in-out infinite}.ff-bl2{animation-delay:-.4s}.ff-bl3{animation-delay:-.8s}' +
    '@keyframes ffball{0%,100%{transform:translate(0,0)}25%{transform:translate(40px,-34px)}50%{transform:translate(90px,-10px)}75%{transform:translate(46px,-40px)}}.ff-ball{animation:ffball 3.2s ease-in-out infinite}' +
    '@keyframes ffwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ff-wv{animation:ffwave 2.2s linear infinite}' +
    '@keyframes ffbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ff-bob{animation:ffbob .7s ease-in-out infinite}.ff-bob2{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89 + 13) % 400) + '" cy="' + (6 + (i * 47) % 64) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* the big clock: tick marks only (no numerals), two turning hands */
  const clock = (cx, cy, r, rim, face) => {
    let ticks = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, r1 = r * 0.78, r2 = r * 0.92; ticks += '<path d="M' + (cx + r1 * Math.sin(a)).toFixed(1) + ' ' + (cy - r1 * Math.cos(a)).toFixed(1) + 'L' + (cx + r2 * Math.sin(a)).toFixed(1) + ' ' + (cy - r2 * Math.cos(a)).toFixed(1) + '" stroke="#111" stroke-width="' + (i % 3 ? 1.2 : 2.4) + '"/>'; }
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + face + '" stroke="' + rim + '" stroke-width="' + Math.max(2, r / 6) + '"/>' + ticks +
      '<path class="ff-hand ff-hand2" style="transform-origin:' + cx + 'px ' + cy + 'px" d="M' + cx + ' ' + cy + 'V' + (cy - r * 0.5) + '" stroke="#111" stroke-width="' + Math.max(1.6, r / 10) + '" stroke-linecap="round"/>' +
      '<path class="ff-hand" style="transform-origin:' + cx + 'px ' + cy + 'px" d="M' + cx + ' ' + cy + 'V' + (cy - r * 0.74) + '" stroke="#c1121f" stroke-width="' + Math.max(1, r / 18) + '" stroke-linecap="round"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + Math.max(1.5, r / 12) + '" fill="#111"/>';
  };
  const GOLD = "#ffd23f", RED = "#e63946", TEAL = "#2ec4b6", CREAM = "#f6efe0", LIRR = "#0039a6";

  /* 1. Baldwin, LIRR Babylon Branch: elevated platform on the embankment, canopy, the black sign, the train sliding in, Grand Av traffic below */
  function baldwin() {
    let windows = "";
    for (let x = 24; x < 296; x += 40) windows += '<rect x="' + x + '" y="114" width="26" height="18" rx="3" fill="#d6ebff" opacity=".9"/>';
    let trees = "";
    for (let x = 6; x < 400; x += 46) trees += '<circle cx="' + x + '" cy="' + (192 + (x % 3) * 3) + '" r="' + (16 + (x % 5)) + '" fill="' + (x % 2 ? "#2f5d3a" : "#3a6b44") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ffb1)"/>' +
            /* canopy */
      '<path d="M0 22h400v9H0z" fill="#3c4a5a"/><path d="M0 31h400v4H0z" fill="#202a36"/>' +
      [30, 150, 270, 380].map(x => '<rect x="' + x + '" y="35" width="5" height="72" fill="#202a36"/>').join("") +
      '<circle class="ff-flk" cx="96" cy="40" r="3" fill="#fff1c2"/><circle class="ff-flk ff-flk2" cx="320" cy="40" r="3" fill="#fff1c2"/>' +
      /* the black station sign */
      '<rect x="110" y="44" width="180" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="70" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Baldwin</text>' +
      '<text x="118" y="80" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#dbe6f3">BABYLON BRANCH</text>' +
      '<rect x="250" y="72" width="34" height="9" rx="2" fill="' + LIRR + '"/>' + txt("LIRR", 267, 79.5, 7.5, "#fff") +
      /* train */
      '<g class="anim-train">' +
        '<rect x="10" y="106" width="300" height="52" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="138" width="300" height="5" fill="' + LIRR + '"/>' + windows +
        '<path d="M298 110h8q4 0 4 6v18h-12z" fill="#d6ebff"/>' +
        '<circle cx="303" cy="150" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge, embankment wall, trees and the street under the bridge */
      '<rect x="0" y="158" width="400" height="4" fill="#f2c94c"/><rect x="0" y="162" width="400" height="14" fill="#a39e94"/>' +
      '<rect x="0" y="176" width="400" height="40" fill="#8a8378"/>' +
      (() => { let b = ""; for (let y = 180; y < 216; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#7a7368" stroke-width="1"/>'; return b; })() + trees +
      '<rect x="150" y="176" width="100" height="44" fill="#2a2620"/>' + txt("GRAND AV", 200, 200, 8, "#e9e2d0", 'letter-spacing="2"') +
      '<rect x="0" y="220" width="400" height="40" fill="#1c1f24"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="ff-car"><rect x="0" y="226" width="44" height="12" rx="4" fill="' + RED + '"/><circle cx="38" cy="232" r="2" fill="#fff6c2"/></g>' +
      '<g class="ff-car ff-car2"><rect x="0" y="244" width="44" height="11" rx="4" fill="' + TEAL + '"/></g>' +
      person(340, 128, "#22262e") + person(362, 132, "#30343e"),
      sky("ffb1", "#2c3e66", "#f0a36c"));
  }

  /* 2. The Soul Diner in Freeport: his father's diner. Chrome and red front, neon sign, the counter through the windows, coffee steaming, a little piano in the corner window */
  function diner() {
    let stripes = "";
    for (let x = 30; x < 370; x += 6) stripes += '<rect x="' + x + '" y="170" width="3" height="30" fill="#e7ecf2" opacity=".55"/>';
    let stools = "";
    for (let x = 64; x < 250; x += 34) stools += '<rect x="' + (x - 1) + '" y="148" width="3" height="14" fill="#c9ced6"/><ellipse cx="' + x + '" cy="147" rx="9" ry="3.5" fill="' + RED + '"/>';
    let keys = "";
    for (let i = 0; i < 9; i++) keys += '<rect class="ff-key ' + (i % 2 ? "ff-key2" : "") + '" x="' + (290 + i * 7) + '" y="140" width="6" height="16" fill="#fbfbf6" stroke="#333" stroke-width=".6"/>';
    for (let i = 0; i < 8; i++) if (i % 7 !== 2) keys += '<rect x="' + (295 + i * 7) + '" y="140" width="4" height="10" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ffd1)"/>' + stars(16) +
      /* body of the diner: rounded roof, chrome */
      '<path d="M20 86q180-34 360 0v122H20z" fill="#c9ced6" stroke="#8a929c" stroke-width="2"/>' +
      '<rect x="20" y="90" width="360" height="10" fill="' + RED + '"/>' +
      /* windows with the counter inside */
      '<rect x="40" y="106" width="226" height="60" rx="4" fill="#ffe8b8" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="40" y="142" width="226" height="6" fill="#8b3a2e"/>' + stools +
      '<rect x="60" y="114" width="40" height="6" fill="#c08b5c"/><rect x="120" y="114" width="40" height="6" fill="#c08b5c"/><rect x="180" y="114" width="40" height="6" fill="#c08b5c"/>' +
      [60, 104, 148, 192, 236].map(x => '<rect x="' + x + '" y="106" width="2" height="60" fill="#8a929c"/>').join("") +
      /* the piano window */
      '<rect x="280" y="106" width="80" height="60" rx="4" fill="#3a2a1e" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="286" y="124" width="70" height="16" fill="#1b120c"/>' + keys +
      '<path d="M300 116l4-4 4 4M318 112l3-5 3 5M338 116l4-4 4 4" stroke="' + GOLD + '" stroke-width="1.6" fill="none" class="ff-bl"/>' +
      /* door */
      '<rect x="190" y="166" width="0" height="0"/>' +
      /* chrome base stripes */
      '<rect x="20" y="166" width="360" height="42" fill="#9aa3ad"/>' + stripes +
      '<rect x="20" y="200" width="360" height="8" fill="' + RED + '"/>' +
      /* neon sign on the roof */
      '<rect x="110" y="34" width="180" height="40" rx="8" fill="#1a1020" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text class="ff-flk" x="200" y="62" text-anchor="middle" font-family="Brush Script MT, Segoe Script, cursive" font-size="26" fill="#ff5c8a" stroke="#ffd1df" stroke-width=".6">Soul Diner</text>' +
      '<rect x="196" y="74" width="8" height="14" fill="#555"/>' +
      txt("FREEPORT", 200, 226, 9, CREAM, 'letter-spacing="4"') +
      /* coffee cup on the sidewalk sign, steam rising */
      '<rect x="44" y="214" width="34" height="30" fill="#222" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("OPEN", 61, 233, 9, GOLD) +
      '<path d="M326 226h24v14q0 8-8 8h-8q-8 0-8-8z" fill="#fff" stroke="#333"/><path d="M350 230q8 0 8 6t-8 6" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path class="ff-st" d="M332 222q-4-6 0-10t0-10" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="ff-st ff-st2" d="M338 222q-4-6 0-10t0-10" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="ff-st ff-st3" d="M344 222q-4-6 0-10t0-10" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#3a3a40" opacity=".6"/><rect x="0" y="208" width="400" height="3" fill="#6d6d74"/>',
      sky("ffd1", "#120a24", "#3d1f4a"));
  }

  /* 3. The Las Vegas Strip at night: towers full of lights, the desert ridge, the welcome sign, a giant clock ticking on a marquee */
  function vegas() {
    let towers = "";
    const T = [[10, 90, 46, "#2b2140"], [62, 60, 40, "#33284d"], [110, 100, 34, "#2b2140"], [270, 70, 44, "#33284d"], [320, 104, 36, "#2b2140"], [362, 50, 38, "#3a2d58"]];
    T.forEach((t, i) => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (210 - t[1]) + '" fill="' + t[3] + '"/>';
      for (let y = t[1] + 8; y < 204; y += 10) for (let x = t[0] + 5; x < t[0] + t[2] - 4; x += 8) towers += '<rect class="ff-bl ' + ((x + y) % 3 ? "ff-bl2" : "ff-bl3") + '" x="' + x + '" y="' + y + '" width="3" height="4" fill="' + ["#ffd23f", "#ff7bac", "#7be0ff"][(x + y + i) % 3] + '" opacity=".8"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#ffv1)"/>' + stars(22) +
      '<path d="M0 150l40-26 34 18 46-34 50 28 40-20 60 30 44-26 44 22 42-14v62H0z" fill="#3b2a3e"/>' + towers +
      /* the marquee with the giant clock */
      '<rect x="160" y="70" width="88" height="140" fill="#1d1630" stroke="' + GOLD + '" stroke-width="2"/>' +
      clock(204, 112, 30, GOLD, CREAM) +
      [168, 180, 192, 204, 216, 228, 240].map((x, i) => '<circle class="ff-bl ' + (i % 2 ? "ff-bl2" : "") + '" cx="' + x + '" cy="76" r="2.4" fill="' + GOLD + '"/>').join("") +
      txt("YEAH BOYEE", 204, 166, 11, GOLD) + txt("TONIGHT", 204, 182, 9, "#ff7bac", 'letter-spacing="3"') +
      /* the welcome sign: a pointed diamond on a pole */
      '<rect x="78" y="196" width="4" height="30" fill="#c9ced6"/>' +
      '<path d="M40 176l40-22 40 22-40 24z" fill="#fff8e6" stroke="' + RED + '" stroke-width="2"/>' +
      txt("WELCOME", 80, 172, 8, RED) + txt("LAS VEGAS", 80, 186, 9.5, "#0c4fa6") +
      [52, 66, 80, 94, 108].map((x, i) => '<circle class="ff-bl ' + (i % 2 ? "ff-bl3" : "") + '" cx="' + x + '" cy="' + (i === 2 ? 158 : 166) + '" r="1.8" fill="' + GOLD + '"/>').join("") +
      /* boulevard */
      '<rect x="0" y="210" width="400" height="50" fill="#141018"/><path d="M0 234h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="ff-car"><rect x="0" y="216" width="46" height="12" rx="4" fill="#fff"/><circle cx="40" cy="222" r="2" fill="#fff6c2"/></g>' +
      '<g class="ff-car ff-car2"><rect x="0" y="240" width="46" height="12" rx="4" fill="' + RED + '"/></g>',
      sky("ffv1", "#06041a", "#4a1f5c"));
  }

  /* 4. Paris 2024, water polo at La Defense Arena: the pool lanes, the goal, the ball flying, the crowd in the stands, the hype man's clock up on the board */
  function polo() {
    let crowd = "";
    for (let row = 0; row < 3; row++) for (let x = 6 + row * 7; x < 400; x += 15) crowd += '<circle class="ff-bob ' + ((x + row) % 2 ? "ff-bob2" : "") + '" cx="' + x + '" cy="' + (60 + row * 14) + '" r="5" fill="' + ["#c1121f", "#f6efe0", "#1d4ed8", "#2a2a33"][(x + row) % 4] + '"/>';
    let waves = "";
    for (let x = 0; x < 460; x += 20) waves += 'q5-4 10 0t10 0';
    return svg(
      '<rect width="400" height="260" fill="#0e1830"/>' +
      /* roof trusses + lights */
      '<path d="M0 0h400v30H0z" fill="#1b2747"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + (x - 40) + ' 30L' + x + ' 6L' + (x + 40) + ' 30" stroke="#33446e" stroke-width="2" fill="none"/><circle class="ff-flk" cx="' + x + '" cy="12" r="4" fill="#eaf2ff"/>').join("") +
      /* stands */
      '<rect x="0" y="40" width="400" height="56" fill="#16203c"/>' + crowd +
      /* scoreboard with the clock */
      '<rect x="150" y="34" width="100" height="40" fill="#0a0f1e" stroke="' + GOLD + '" stroke-width="1.5"/>' + clock(176, 54, 14, GOLD, CREAM) +
      txt("USA", 222, 52, 11, "#fff") + txt("WATER POLO", 222, 66, 7, GOLD, 'letter-spacing="1"') +
      /* pool deck + water */
      '<rect x="0" y="96" width="400" height="10" fill="#d9d4c8"/>' +
      '<rect x="0" y="106" width="400" height="154" fill="#1f8fc9"/>' +
      '<g class="ff-wv"><path d="M0 132' + waves + '" stroke="#7fd3f5" stroke-width="2" fill="none" opacity=".7"/><path d="M0 176' + waves + '" stroke="#7fd3f5" stroke-width="2" fill="none" opacity=".6"/><path d="M0 222' + waves + '" stroke="#7fd3f5" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* lane lines */
      [150, 196, 242].map(y => { let s = ""; for (let x = 0; x < 400; x += 10) s += '<circle cx="' + (x + 5) + '" cy="' + y + '" r="3" fill="' + ((x / 10) % 2 ? "#f6efe0" : "#c1121f") + '"/>'; return s; }).join("") +
      /* the goal */
      '<rect x="318" y="112" width="70" height="40" fill="none" stroke="#fff" stroke-width="3"/>' +
      (() => { let n = ""; for (let x = 324; x < 388; x += 8) n += '<path d="M' + x + ' 112v40" stroke="#fff" stroke-width=".6" opacity=".7"/>'; for (let y = 118; y < 152; y += 8) n += '<path d="M318 ' + y + 'h70" stroke="#fff" stroke-width=".6" opacity=".7"/>'; return n; })() +
      /* swimmer caps (no faces) */
      '<circle cx="120" cy="170" r="7" fill="#fff"/><circle cx="200" cy="200" r="7" fill="#1d4ed8"/><circle cx="270" cy="160" r="7" fill="#fff"/>' +
      /* the ball */
      '<g class="ff-ball"><circle cx="190" cy="160" r="7" fill="' + GOLD + '"/><path d="M183 160h14M190 153v14" stroke="#1d4ed8" stroke-width="1.6"/></g>' +
      txt("PARIS", 60, 128, 13, "#fff", 'letter-spacing="4" opacity=".9"'));
  }

  /* 5. Nassau Rd & W Fulton Av, Roosevelt: the public library behind, the wall tagged FLAVOR FLAV, a clock on the wall, green signs */
  function corner() {
    let brick = "";
    for (let y = 62; y < 128; y += 7) for (let x = (y / 7) % 2 ? 150 : 158; x < 360; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="15" height="6" fill="#9c4a35"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ffc1)"/>' + stars(10) +
      /* the library: low brick building with a white entry and tall windows */
      '<rect x="146" y="58" width="216" height="72" fill="#7d3a2a"/>' + brick +
      '<rect x="140" y="52" width="228" height="8" fill="#e9e2d0"/>' +
      [170, 206, 302, 338].map(x => '<rect x="' + x + '" y="70" width="18" height="40" fill="#ffe7a8" class="ff-flk ' + (x % 2 ? "" : "ff-flk2") + '"/>').join("") +
      '<rect x="222" y="64" width="68" height="66" fill="#efe9db"/><rect x="246" y="90" width="20" height="40" fill="#3a2a1e"/>' +
      txt("PUBLIC LIBRARY", 256, 80, 6.4, "#7d3a2a") +
      /* the tag wall */
      '<rect x="0" y="128" width="400" height="98" fill="#3f4149"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#35373e" stroke-width="1"/>'; return b; })() +
      tag("FLAVOR FLAV", 14, 192, 38, GOLD, -5) + tag("YEAH BOYEE", 200, 220, 20, RED, -4) + tag("COLD LAMPIN", 22, 220, 14, TEAL, -3) +
      clock(314, 176, 16, GOLD, CREAM) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ff-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      '<rect x="296" y="62" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Nassau Rd", 346, 78, 12, "#fff") +
      '<rect x="296" y="88" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W Fulton Av", 346, 104, 12, "#fff") +
      '<circle class="ff-flk" cx="358" cy="56" r="4" fill="#fff6c2"/>',
      sky("ffc1", "#0a0c1a", "#30264a"));
  }

  window.SCENES = { baldwin: baldwin, diner: diner, vegas: vegas, polo: polo, corner: corner };
})();
