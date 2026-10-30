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

  /* 4. The 1 Train cypher: inside the car, the crew in a circle, the speaker thumping, tunnel lights flying by */
  function cypher() {
    let wins = "";
    [30, 150, 270].forEach(x => wins += '<rect x="' + x + '" y="44" width="100" height="56" rx="6" fill="#090c10" stroke="#9aa3ad" stroke-width="3"/>');
    const crew = (x, cls, h) => '<g class="nod' + (cls ? " " + cls : "") + '"><circle cx="' + x + '" cy="' + (150 - h) + '" r="13" fill="#141820"/><path d="M' + (x - 22) + ' 236q0-' + (70 + h) + ' 22-' + (70 + h) + 't22 ' + (70 + h) + 'z" fill="#141820"/></g>';
    let seats = "";
    for (let x = 0; x < 400; x += 26) seats += '<rect x="' + x + '" y="196" width="24" height="16" rx="5" fill="' + (x / 26 % 2 ? "#f2a33a" : "#f6c94a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfd4da"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#e9ecef"/><rect x="0" y="20" width="400" height="3" fill="#9aa3ad"/>' +
      /* car cards up top, one tagged */
      '<rect x="12" y="26" width="120" height="14" fill="#fff" stroke="#9aa3ad"/><rect x="140" y="26" width="120" height="14" fill="#fff" stroke="#9aa3ad"/><rect x="268" y="26" width="120" height="14" fill="#fff" stroke="#9aa3ad"/>' +
      '<text x="200" y="37" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#333">NEXT STOP: THE CYPHER</text>' +
      wins +
      /* tunnel lights streaking */
      '<clipPath id="tw"><rect x="30" y="44" width="100" height="56"/><rect x="150" y="44" width="100" height="56"/><rect x="270" y="44" width="100" height="56"/></clipPath>' +
      '<g clip-path="url(#tw)"><g class="tun"><rect x="0" y="68" width="60" height="4" rx="2" fill="#ffe7a8"/><rect x="140" y="80" width="40" height="3" rx="1.5" fill="#cfe6ff"/></g>' +
        '<g class="tun tun2"><rect x="60" y="60" width="50" height="3" rx="1.5" fill="#ffe7a8"/><rect x="220" y="88" width="70" height="4" rx="2" fill="#ffe7a8"/></g></g>' +
      bullet(380, 72, "1", RED) +
      /* grab poles */
      '<rect x="96" y="22" width="5" height="190" fill="#b7bec6"/><rect x="300" y="22" width="5" height="190" fill="#b7bec6"/>' +
      seats +
      '<rect x="0" y="212" width="400" height="48" fill="#6b6f75"/><rect x="0" y="212" width="400" height="3" fill="#4a4e54"/>' +
      /* the crew, nodding, and the speaker */
      crew(60, "", 0) + crew(146, "nod2", 8) + crew(254, "", 4) + crew(340, "nod2", 0) +
      '<rect x="182" y="198" width="36" height="38" rx="4" fill="#1a1f26"/><circle cx="200" cy="212" r="8" fill="#3a414b"/><circle cx="200" cy="230" r="4" fill="#3a414b"/>' +
      '<circle class="pls" cx="200" cy="212" r="10" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="pls pls2" cx="200" cy="212" r="10" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* the one on the mic: arm up, mic to the mouth */
      '<g class="nod"><path d="M236 176q-6-22 2-36" stroke="#141820" stroke-width="9" stroke-linecap="round" fill="none"/><rect x="234" y="130" width="7" height="18" rx="3" fill="#2a2f36"/><circle cx="238" cy="128" r="6" fill="#9aa3ad"/></g>' +
      tag("1 TRAIN", 150, 98, 26, RED, -5));
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

  window.SCENES = { train, boardwalk, aquarium, cypher, corner };
})();
