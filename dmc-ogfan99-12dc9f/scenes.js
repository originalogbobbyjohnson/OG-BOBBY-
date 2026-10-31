/* Hollis, Queens opening scenes for the DMC game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes pass{0%{transform:translateX(420px)}55%{transform:translateX(-440px)}100%{transform:translateX(-440px)}}' +
    '.lirr{animation:pass 7s linear infinite}' +
    '@keyframes fall{0%{transform:translate(0,-10px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,200px) rotate(260deg);opacity:0}}' +
    '.lf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 6s linear infinite}.lf2{animation-delay:1.5s}.lf3{animation-delay:3s}.lf4{animation-delay:4.5s}' +
    '@keyframes bop{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}' +
    '.nt{animation:bop 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.spk{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes glint{0%,80%,100%{opacity:0}88%{opacity:1}}' +
    '.gl{animation:glint 2.8s infinite}.gl2{animation-delay:1.4s}' +
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
  const GOLD = "#e8b84a", RED = "#d62828", WHITE = "#f7f3ea";
  const street = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';

  /* 1. The F pulling into Jamaica-179 St, the end of the line, underground under Hillside Av: cream tile, the tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe6cf"/>';
    let cols = "";
    [34, 366].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="190" fill="#2e4a6b"/><rect x="' + (x - 8) + '" y="0" width="16" height="6" fill="#203650"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#d9cfb4"/>' + tiles +
      /* tile band with the station name in it */
      '<rect x="0" y="40" width="400" height="16" fill="#8a2432"/><rect x="0" y="38" width="400" height="2" fill="#4a1520"/><rect x="0" y="56" width="400" height="2" fill="#4a1520"/>' +
      /* lights */
      '<rect class="flk" x="0" y="0" width="400" height="5" fill="#fffbe0" opacity=".8"/>' +
      /* black station sign */
      '<rect x="72" y="66" width="256" height="34" rx="4" fill="#111"/><rect x="72" y="66" width="256" height="4" fill="#fff"/>' +
      '<text x="86" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Jamaica–179 St</text>' +
      bullet(306, 84, "F", "#ff6319") +
      '<text x="200" y="112" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="#3a3326">HILLSIDE AV · HOLLIS →</text>' +
      /* train slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ff6319"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' + bullet(296, 136, "F", "#ff6319") +
      '</g>' + cols +
      /* platform */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5d5a52"/>' +
      '<path d="M0 214h400" stroke="#4a4740" stroke-width="2"/>' +
      tag("HOLLIS CREW", 26, 242, 28, GOLD, -4) + tag("D.M.C.", 290, 244, 30, WHITE, -8));
  }

  /* 2. Hollis LIRR station: the low concrete platforms up on the embankment over Hollis Av, a silver train rushing through at dusk */
  function lirr() {
    let cars = "";
    for (let c = 0; c < 3; c++) {
      const x = c * 150;
      let w = "";
      for (let i = 0; i < 5; i++) w += '<rect x="' + (x + 14 + i * 26) + '" y="108" width="18" height="16" rx="2" fill="#ffe7a8" opacity=".9"/>';
      cars += '<rect x="' + x + '" y="98" width="144" height="46" rx="6" fill="#c3c8d0" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="' + x + '" y="130" width="144" height="4" fill="#1e3a8a"/><rect x="' + x + '" y="135" width="144" height="2" fill="#6b4fa3"/>' + w;
    }
    let posts = "";
    for (let x = 20; x < 400; x += 60) posts += '<rect x="' + x + '" y="62" width="5" height="90" fill="#2b2f36"/>';
    let lamps = "";
    for (let x = 50; x < 400; x += 120) lamps += '<rect x="' + x + '" y="150" width="3" height="20" fill="#2b2f36"/><circle class="flk" cx="' + (x + 1.5) + '" cy="150" r="3" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(12) +
      '<circle cx="80" cy="40" r="14" fill="#ffd79a" opacity=".85"/>' +
      /* far Hollis rooftops */
      (function () { let r = ""; for (let x = 0; x < 400; x += 44) r += '<path d="M' + x + ' 96v-14l20-14 20 14v14z" fill="#2a2440"/>'; return r; })() +
      /* platform canopy posts + roof */
      '<rect x="0" y="56" width="400" height="8" fill="#3a3f47"/>' + posts +
      /* the train rushing through */
      '<g class="lirr">' + cars + '</g>' +
      /* platform + embankment wall */
      '<rect x="0" y="144" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="144" width="400" height="3" fill="#f2c14e"/>' +
      '<rect x="0" y="154" width="400" height="56" fill="#8f8577"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 40) s += '<path d="M' + x + ' 154v56" stroke="#7a7063" stroke-width="2"/>'; return s; })() +
      /* station sign */
      '<rect x="150" y="70" width="100" height="22" rx="3" fill="#111"/><text x="200" y="86" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Hollis</text>' +
      /* Hollis Av underneath */
      '<rect x="0" y="210" width="400" height="50" fill="#1a1c22"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + lamps +
      '<rect x="300" y="214" width="90" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1"/><text x="345" y="226" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Hollis Av</text>',
      sky("g2", "#1b1838", "#c0567a"));
  }

  /* 3. Hollis Park Gardens: Tudor houses with half-timber gables, lawns and big street trees, autumn leaves falling */
  function gardens() {
    const house = (x, body, roof) =>
      '<rect x="' + x + '" y="120" width="96" height="80" fill="' + body + '"/>' +
      '<path d="M' + (x - 6) + ' 124l54-50 54 50z" fill="' + roof + '"/>' +
      '<path d="M' + (x + 22) + ' 120l26-24 26 24z" fill="#f2e8d0"/>' +
      '<path d="M' + (x + 48) + ' 98v22M' + (x + 34) + ' 109l14 11M' + (x + 62) + ' 109l-14 11" stroke="#3b2418" stroke-width="3"/>' +
      '<path d="M' + x + ' 142h96M' + (x + 30) + ' 142v58M' + (x + 66) + ' 142v58" stroke="#3b2418" stroke-width="3" opacity=".7"/>' +
      '<rect x="' + (x + 8) + '" y="150" width="16" height="20" fill="#ffe7a8"/><rect x="' + (x + 72) + '" y="150" width="16" height="20" fill="#ffe7a8"/>' +
      '<path d="M' + (x + 38) + ' 200v-30a10 10 0 0 1 20 0v30z" fill="#5a2a1c"/>' +
      '<rect x="' + (x + 70) + '" y="70" width="12" height="30" fill="#7a3b2a"/>';
    const tree = (x, s) =>
      '<rect x="' + (x - 4) + '" y="150" width="8" height="60" fill="#3b2418"/>' +
      '<circle cx="' + x + '" cy="132" r="' + (30 * s) + '" fill="#c2571a"/><circle cx="' + (x - 18 * s) + '" cy="146" r="' + (20 * s) + '" fill="#e08a2b"/><circle cx="' + (x + 20 * s) + '" cy="144" r="' + (22 * s) + '" fill="#a8401a"/>';
    const leaf = (x, y, c, k) => '<path class="lf ' + k + '" d="M' + x + ' ' + y + 'q6-6 12 0q-6 6-12 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      house(30, "#e9dcc0", "#5b3a2a") + house(250, "#d9c7a4", "#3f2d24") +
      '<rect x="0" y="200" width="400" height="20" fill="#4f7a34"/><rect x="0" y="220" width="400" height="10" fill="#cfc8b8"/><rect x="0" y="230" width="400" height="30" fill="#2b2d33"/>' +
      tree(178, 1) + tree(370, .8) +
      leaf(150, 100, "#e08a2b", "") + leaf(200, 90, "#c2571a", "lf2") + leaf(340, 104, "#f2b134", "lf3") + leaf(250, 80, "#a8401a", "lf4") + leaf(90, 96, "#f2b134", "lf2") +
      '<rect x="120" y="22" width="160" height="34" rx="4" fill="#1f5a3a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1" fill="#fff">HOLLIS PARK GARDENS</text>' +
      '<text x="200" y="51" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="' + GOLD + '">QUEENS · NY</text>',
      sky("g3", "#7fb2d9", "#f3dcb2"));
  }

  /* 4. A Hollis stoop, 1986: brick house, plain white shell-toes on the step, a gold rope chain on the rail, the boombox thumping, the long black Caddy at the curb */
  function stoop() {
    let brick = "";
    for (let y = 30; y < 200; y += 12) for (let x = (y / 12) % 2 ? -18 : 0; x < 214; x += 36) brick += '<rect x="' + x + '" y="' + y + '" width="34" height="10" fill="#8b3a2a"/>';
    const shoe = (x, y) =>
      '<path d="M' + x + ' ' + y + 'h30q8 0 8 6v4h-38z" fill="#f7f7f7" stroke="#999" stroke-width="1"/>' +
      '<path d="M' + (x + 26) + ' ' + y + 'q12 0 12 6h-12z" fill="#e8e2d0" stroke="#999" stroke-width=".8"/>' +
      '<path d="M' + (x + 28) + ' ' + (y + 1) + 'h4M' + (x + 30) + ' ' + (y + 3) + 'h4" stroke="#bbb" stroke-width=".7"/>' +
      '<rect x="' + x + '" y="' + (y + 9) + '" width="38" height="3" fill="#ddd"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(14) +
      '<rect x="0" y="30" width="250" height="170" fill="#6e2a1e"/>' + brick +
      '<rect x="150" y="60" width="60" height="96" fill="#2a1a12"/><rect x="156" y="66" width="48" height="84" fill="#5a2a1c"/><circle cx="196" cy="110" r="3" fill="' + GOLD + '"/>' +
      '<rect x="40" y="70" width="60" height="50" fill="#ffe7a8" opacity=".9"/><path d="M70 70v50M40 95h60" stroke="#2a1a12" stroke-width="4"/>' +
      /* steps */
      '<rect x="130" y="156" width="100" height="14" fill="#a9a39a"/><rect x="120" y="170" width="120" height="14" fill="#bdb7ad"/><rect x="110" y="184" width="140" height="16" fill="#cfc9bf"/>' +
      /* iron rail + rope chain */
      '<path d="M112 184l18-40M112 200v-16M130 144v12" stroke="#111" stroke-width="3"/>' +
      '<path d="M114 160q10 24 20 -2" stroke="' + GOLD + '" stroke-width="4" fill="none" stroke-dasharray="3 1.5"/>' +
      '<circle class="gl" cx="124" cy="171" r="2.5" fill="#fff"/>' +
      shoe(140, 160) + shoe(182, 160) +
      /* boombox */
      '<g transform="translate(270 150)"><rect x="0" y="0" width="80" height="44" rx="4" fill="#2e2e33" stroke="#111" stroke-width="2"/><path d="M14 0v-8h52v8" stroke="#111" stroke-width="3" fill="none"/>' +
      '<circle class="spk" cx="20" cy="24" r="12" fill="#111" stroke="#777" stroke-width="2"/><circle class="spk" cx="60" cy="24" r="12" fill="#111" stroke="#777" stroke-width="2"/><rect x="32" y="8" width="16" height="8" fill="#9fe3ff"/></g>' +
      '<text class="nt" x="290" y="140" font-size="16" fill="' + GOLD + '">♪</text><text class="nt nt2" x="318" y="136" font-size="14" fill="#fff">♫</text><text class="nt nt3" x="338" y="142" font-size="16" fill="' + RED + '">♪</text>' +
      /* sidewalk + the black sedan */
      '<rect x="0" y="200" width="400" height="16" fill="#9a958c"/><rect x="0" y="216" width="400" height="44" fill="#22252b"/>' +
      '<g transform="translate(20 206)"><path d="M0 34v-14l30-4 28-14h80l30 14 40 4v14z" fill="#0d0d10" stroke="#555" stroke-width="1.5"/>' +
      '<path d="M64 6h70l20 12h-108z" fill="#3a4a5c"/><rect x="0" y="24" width="210" height="2" fill="#c9ced6"/>' +
      '<circle cx="44" cy="36" r="10" fill="#111" stroke="#c9ced6" stroke-width="3"/><circle cx="170" cy="36" r="10" fill="#111" stroke="#c9ced6" stroke-width="3"/>' +
      '<rect x="202" y="18" width="8" height="5" fill="#fff6c2" class="flk"/></g>' +
      tag("WHOSE HOUSE", 254, 70, 19, GOLD, -5),
      sky("g4", "#0f1426", "#33406a"));
  }

  /* 5. Hollis Av and 205 St: the green street signs with the Run-DMC JMJ Way co-name sign, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(10) +
      '<rect x="18" y="66" width="236" height="154" fill="#3a3f47"/>' +
      (function () { let b = ""; for (let y = 66; y < 220; y += 14) b += '<path d="M18 ' + y + 'h236" stroke="#2f343b" stroke-width="2"/>'; return b; })() +
      tag("D.M.C.", 34, 140, 44, WHITE, -7) + tag("HOLLIS CREW", 42, 196, 26, GOLD, -3) + tag("KING OF ROCK", 150, 92, 16, RED, -5) +
      /* streetlight */
      '<rect x="360" y="40" width="5" height="180" fill="#1d2329"/><path d="M362 42h-26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M320 46h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M320 54h26l20 166h-66z" fill="#ffe7a8"/></g>' +
      /* sign pole */
      '<rect x="300" y="60" width="5" height="160" fill="#1d2329"/>' +
      street(262, 64, 82, "Hollis Av") + street(268, 86, 70, "205 St") +
      '<rect x="252" y="110" width="102" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">Run-DMC JMJ Way</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#2a3d5f"));
  }

  window.SCENES = { train, lirr, gardens, stoop, corner };
})();
