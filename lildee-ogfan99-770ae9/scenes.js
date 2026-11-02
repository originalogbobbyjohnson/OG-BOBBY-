/* Coney Island opening scenes for the Lil Dee game. Each one is a small animated SVG, 400 x 260.
   NEMS's game already has Stillwell Av, the Cyclone, the Wonder Wheel and the Parachute Jump, so these rooms use the other side of Coney:
   W 8 St–NY Aquarium, the Boardwalk at night with the Thunderbolt and Luna 360, the Aquarium on the beach, the 1 Train cypher car. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-52deg)}50%{transform:rotate(52deg)}}' +
    '.lswing{transform-box:view-box;transform-origin:318px 92px;animation:swing 3.6s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wv{animation:wave 3s ease-in-out infinite}.wv2{animation-delay:1.5s}' +
    '@keyframes swim{from{transform:translateX(-60px)}to{transform:translateX(200px)}}' +
    '.fish{animation:swim 7s linear infinite}.fish2{animation-duration:10s;animation-delay:-4s}.fish3{animation-duration:8.5s;animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-16px) rotate(8deg)}}' +
    '.seal{transform-box:fill-box;transform-origin:50% 100%;animation:bob 2.4s ease-in-out infinite}' +
    '@keyframes splash{0%{transform:scale(.4);opacity:0}30%{opacity:.9}100%{transform:scale(1.3);opacity:0}}' +
    '.spl{transform-box:fill-box;transform-origin:50% 100%;animation:splash 2.4s ease-out infinite}' +
    '@keyframes streak{from{transform:translateX(420px)}to{transform:translateX(-120px)}}' +
    '.tun{animation:streak 1.1s linear infinite}.tun2{animation-delay:-.55s}' +
    '@keyframes pulse{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.8);opacity:0}}' +
    '.pls{transform-box:fill-box;transform-origin:50% 50%;animation:pulse 1.2s ease-out infinite}.pls2{animation-delay:.6s}' +
    '@keyframes nod{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.nod{animation:nod .6s ease-in-out infinite}.nod2{animation-delay:.3s}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}' +
    '.bl{animation:blink 1.4s infinite}.bl2{animation-delay:.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd34d", SEA = "#2ec4d6", RED = "#ee352e";

  /* 1. The Q pulling into W 8 St–NY Aquarium, up on the el, the ocean behind it at dusk */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#2f3e4e"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#2f3e4e" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) +
      /* sun going down over the Atlantic */
      '<circle cx="64" cy="44" r="18" fill="#ffb25c" opacity=".95"/>' +
      '<rect x="0" y="40" width="400" height="12" fill="#1f6f8b" opacity=".8"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#2f3e4e"/>' + girders +
      /* station sign: black, real name, F and Q */
      '<rect x="62" y="66" width="276" height="34" rx="4" fill="#111"/>' +
      '<rect x="62" y="66" width="276" height="4" fill="#fff"/>' +
      '<text x="74" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">W 8 St–NY Aquarium</text>' +
      bullet(290, 84, "F", "#ff6319") + bullet(316, 84, "Q", "#fccc0a", true) +
      /* the Q slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#fccc0a"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(294, 139, "Q", "#fccc0a", true) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#10202c"/>' +
      tag("CONEY", 26, 240, 32, SEA, -5) + tag("LIL DEE", 262, 242, 30, GOLD, -7),
      sky("g1", "#1b2350", "#e0785a"));
  }

  /* 2. The Riegelmann Boardwalk at night: the Thunderbolt's red loop, Luna 360 swinging, lamps on the boards */
  function boardwalk() {
    let planks = "";
    for (let y = 206; y < 260; y += 8) planks += '<rect x="0" y="' + y + '" width="400" height="6" fill="' + (y % 16 ? "#6b5136" : "#5e462e") + '"/>';
    let rail = '<rect x="0" y="188" width="400" height="4" fill="#3a2a1a"/>';
    for (let x = 6; x < 400; x += 20) rail += '<rect x="' + x + '" y="188" width="3" height="18" fill="#3a2a1a"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="150" width="4" height="56" fill="#1a1f26"/><circle class="flk" cx="' + x + '" cy="148" r="6" fill="#fff1b8"/><circle cx="' + x + '" cy="148" r="14" fill="#fff1b8" opacity=".15"/>';
    /* Thunderbolt: steel supports, red track, vertical lift, the loop */
    let supports = "";
    [[45, 50], [58, 100], [80, 152], [106, 150], [150, 152], [182, 151]].forEach(([x, y]) => supports += '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="' + (188 - y) + '" fill="#8d96a3"/>');
    const track = 'M30 186 V36 Q30 26 40 30 L64 120 Q76 160 104 150 A30 30 0 1 1 134 130 Q150 156 196 150 L210 186';
    let lights = "";
    for (let i = 0; i < 14; i++) lights += '<circle class="bl' + (i % 2 ? " bl2" : "") + '" cx="' + (248 + (i % 7) * 20) + '" cy="' + (i < 7 ? 176 : 182) + '" r="2" fill="' + (i % 3 ? GOLD : "#ff5ec4") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(24) +
      '<circle cx="372" cy="30" r="12" fill="#eaf6ff" opacity=".9"/>' +
      supports +
      '<path d="' + track + '" fill="none" stroke="#d7262e" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="' + track + '" fill="none" stroke="#ff7a6e" stroke-width="1" opacity=".7"/>' +
      /* the car riding the track */
      '<g><rect x="-7" y="-4" width="14" height="8" rx="2" fill="' + GOLD + '"/><animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path="' + track + '"/></g>' +
      /* Luna 360: the tower and the swinging ring of seats */
      '<path d="M296 180 L312 92 L324 92 L340 180z" fill="#2d3442"/>' +
      '<g class="lswing"><rect x="315" y="92" width="6" height="42" fill="#c9ced6"/>' +
        '<circle cx="318" cy="142" r="14" fill="none" stroke="#ff5ec4" stroke-width="5"/><circle cx="318" cy="142" r="14" fill="none" stroke="' + GOLD + '" stroke-width="1.5" stroke-dasharray="3 4"/></g>' +
      '<circle cx="318" cy="92" r="5" fill="' + GOLD + '"/>' +
      '<rect x="240" y="170" width="150" height="18" rx="2" fill="#141a24"/>' + lights +
      rail + lamp(26) + lamp(214) + lamp(380) + planks +
      '<rect x="112" y="194" width="176" height="22" rx="3" fill="#0e1a2b" stroke="' + SEA + '" stroke-width="1.5"/>' +
      '<text class="neon" x="200" y="210" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="1.5" textLength="160" lengthAdjust="spacingAndGlyphs" fill="' + SEA + '">RIEGELMANN BOARDWALK</text>',
      sky("g2", "#05081a", "#2a1f4f"));
  }

  /* 3. The New York Aquarium on the beach: the shimmering blue shark building, fish in the big window, a sea lion splashing */
  function aquarium() {
    let panels = "";
    for (let row = 0; row < 6; row++) for (let i = 0; i < 16; i++) {
      const x = 150 + i * 15 + (row % 2) * 7, y = 52 + row * 14;
      if (x < 386) panels += '<path d="M' + x + ' ' + y + 'l7 -6 7 6 -7 6z" fill="' + ["#5fb7d6", "#88d0e6", "#3d8fb8", "#b9e6f2"][(i + row * 3) % 4] + '" opacity=".95"/>';
    }
    const fish = (cls, y, c, s) => '<g class="' + cls + '"><path d="M' + 170 + ' ' + y + 'q' + (10 * s) + ' -' + (6 * s) + ' ' + (20 * s) + ' 0q-' + (10 * s) + ' ' + (6 * s) + ' -' + (20 * s) + ' 0z M' + 170 + ' ' + y + 'l-' + (6 * s) + ' -' + (5 * s) + 'v' + (10 * s) + 'z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="80" cy="40" r="20" fill="#fff4c9" opacity=".95"/>' +
      /* shark building: scale-like iridescent panels */
      '<path d="M140 150V58q120-30 252-4v96z" fill="#2b6f95"/>' +
      '<clipPath id="bld"><path d="M140 150V58q120-30 252-4v96z"/></clipPath><g clip-path="url(#bld)">' + panels + '</g>' +
      /* the big window with fish going by */
      '<rect x="160" y="112" width="200" height="38" rx="4" fill="#0b3a5c" stroke="#e8f4f8" stroke-width="2"/>' +
      '<clipPath id="win"><rect x="160" y="112" width="200" height="38"/></clipPath><g clip-path="url(#win)">' +
        fish("fish", 124, GOLD, 1) + fish("fish fish2", 138, "#ff8a5c", 0.8) +
        '<g class="fish fish3"><path d="M150 130q24-10 50 0q-26 8-50 0z M200 130l10-8v16z M172 124l6-9 4 9z" fill="#a8b6c2"/></g></g>' +
      '<text x="266" y="44" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="#fff">NEW YORK AQUARIUM</text>' +
      /* the sea lion pool and the beach */
      '<rect x="0" y="150" width="400" height="12" fill="#e8d9b0"/>' +
      '<rect x="14" y="132" width="110" height="26" rx="12" fill="#1f8fb0" stroke="#e8f4f8" stroke-width="2"/>' +
      '<g class="seal"><path d="M46 146q2-18 14-26q4-10 12-10q6 0 8 4l7 1-6 4q-2 8-8 12q2 10-4 15z" fill="#4a3a30"/><path d="M60 136q-10 2-14 10" stroke="#4a3a30" stroke-width="5" stroke-linecap="round" fill="none"/>' +
        '<circle cx="74" cy="114" r="1.8" fill="#fff"/><path d="M84 118l6-2M84 120l6 1" stroke="#ddd" stroke-width=".8"/></g>' +
      '<g class="spl"><path d="M48 140q4-10 8 0M84 140q4-12 8 0" stroke="#dff6ff" stroke-width="2.5" fill="none"/></g>' +
      /* Brighton Beach waves */
      '<rect x="0" y="162" width="400" height="98" fill="#1d6f96"/>' +
      '<g class="wv"><path d="M-20 178q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfeaf5" stroke-width="2.5" fill="none" opacity=".8"/></g>' +
      '<g class="wv wv2"><path d="M-20 204q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfeaf5" stroke-width="2" fill="none" opacity=".55"/></g>' +
      '<g class="wv"><path d="M-20 232q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfeaf5" stroke-width="2" fill="none" opacity=".4"/></g>',
      sky("g3", "#2a74b8", "#9fd8ef"));
  }

  /* 4. The Coney Island Cyclone at Surf Av & W 10th St (1927): the white wooden lattice, the red cars tipping down the first drop, the sign up top */
  function cypher() {
    const { svg, sky, tag, T, plaque, cloud, bird } = LM1;
    /* track profile: lift hill up, the big drop, then the next hills */
    const pts = [[0, 200], [60, 200], [150, 40], [170, 40], [230, 212], [270, 212], [310, 110], [340, 110], [380, 190], [400, 190]];
    let lattice = ""; for (let x = 0; x <= 400; x += 10) { let y = 200; for (let i = 0; i < pts.length - 1; i++) if (x >= pts[i][0] && x <= pts[i + 1][0]) { const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]); y = pts[i][1] + t * (pts[i + 1][1] - pts[i][1]); }
      lattice += '<path d="M' + x + ' ' + y.toFixed(1) + 'V226" stroke="#f2f0ea" stroke-width="1.6"/>'; }
    for (let y = 60; y < 226; y += 18) lattice += '<path d="M0 ' + y + 'H400" stroke="#f2f0ea" stroke-width=".8" opacity=".5"/>';
    for (let x = 0; x < 400; x += 20) lattice += '<path d="M' + x + ' 226L' + (x + 20) + ' 120" stroke="#f2f0ea" stroke-width=".7" opacity=".5"/>';
    const d = "M" + pts.map(p => p.join(" ")).join("L");
    const car = '<g><rect x="-11" y="-9" width="22" height="9" rx="2" fill="#ee352e" stroke="#7a1010"/><circle cx="-5" cy="-11" r="3" fill="#2a1a1a"/><circle cx="4" cy="-11" r="3" fill="#2a1a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ld4)"/>' + cloud("lm-drift", 0, 30, 1) + bird("lm-fly", 0, 60) +
      '<clipPath id="ld4c"><path d="' + d + 'V226H0z"/></clipPath><g clip-path="url(#ld4c)"><rect width="400" height="260" fill="#ffffff" opacity=".08"/>' + lattice + '</g>' +
      '<path d="' + d + '" fill="none" stroke="#e8e4da" stroke-width="5"/><path d="' + d + '" fill="none" stroke="#8a2a1a" stroke-width="1.5"/>' +
      [0, -1.1, -2.2].map(dl => car + '<animateMotion dur="6s" begin="' + dl + 's" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear" path="' + d + '"/></g>').join("") +
      /* the sign on the lift hill */
      '<rect x="110" y="16" width="100" height="22" fill="#ee352e" stroke="#fff" stroke-width="2"/>' + T(160, 33, "CYCLONE", 16, "#fff") +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a40"/><rect x="0" y="226" width="400" height="4" fill="#9a9a9a"/>' +
      plaque(252, 8, 144, "THE CYCLONE · 1927", "SURF AV · W 10 ST", "#1a1408", "#ffd34d") +
      tag("CONEY", 280, 254, 26, "#ffd34d", -4),
      sky("ld4", "#6fb8ea", "#f6e6c6"));
  }

  /* 5. W 8th St and Surf Ave, under the el by the Aquarium: street signs, streetlight, the tag wall */
  function corner() {
    let el = "";
    for (let x = 0; x <= 400; x += 64) el += '<rect x="' + (x - 3) + '" y="20" width="7" height="200" fill="#2a3644"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#2a3644"/>' + el +
      '<path d="M0 22h400" stroke="#425365" stroke-width="3"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f47"/>' +
      tag("LIL DEE", 34, 148, 38, GOLD, -7) + tag("CONEY ISLAND", 40, 196, 24, SEA, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 8 St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Surf Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0b1630", "#1f4a63"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { train, boardwalk, aquarium, cypher, corner };
})();
