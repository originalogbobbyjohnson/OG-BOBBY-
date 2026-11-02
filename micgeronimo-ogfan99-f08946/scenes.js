/* Flushing opening scenes for the Mic Geronimo game: the Masta I.C., "The Natural" (1995). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 28s linear infinite}.cld2{animation-delay:-14s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,200px) rotate(320deg);opacity:0}}' +
    '.leaf{animation:leaf 6s linear infinite}.lf2{animation-delay:-1.5s}.lf3{animation-delay:-3s}.lf4{animation-delay:-4.5s}' +
    '@keyframes flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-40}}' +
    '.flow{animation:flow 1.6s linear infinite}' +
    '@keyframes flut{0%,100%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(28px,0)}75%{transform:translate(14px,8px)}}' +
    '.flut{animation:flut 4s ease-in-out infinite}.flut2{animation-delay:-2s}' +
    '@keyframes wing{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.2)}}' +
    '.wing{transform-box:fill-box;transform-origin:center;animation:wing .3s linear infinite}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.25}}' +
    '.blk{animation:blink 1.4s infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:bottom;animation:sway 3s ease-in-out infinite}' +
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
  const bullet = (x, y, letter, color, dark, r) => {
    const k = r || 11;
    return '<circle cx="' + x + '" cy="' + y + '" r="' + k + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + k * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (k * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-6" width="6" height="40" fill="#4a3424"/>' +
    '<circle cx="0" cy="-20" r="20" fill="' + c + '"/><circle cx="-14" cy="-8" r="14" fill="' + c + '"/><circle cx="14" cy="-8" r="14" fill="' + c + '"/></g>';
  const GOLD = "#ffd23f", PINK = "#ff6fb5", TEAL = "#2ec4b6", PURPLE = "#b933ad";

  /* 1. Flushing–Main St from the mezzanine: the turnstiles, the stair down to the 7 at the end of the line, the 7 pulling in below, the arrow out toward the LIRR and Kissena Blvd, The Natural on the wall */
  function train() {
    let tile = "";
    for (let y = 0; y < 150; y += 10) tile += '<path d="M0 ' + y + 'H400" stroke="#d8d0bc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 16) tile += '<rect x="' + x + '" y="14" width="8" height="8" fill="' + ((x / 16) % 2 ? "#7a3b8f" : "#c69bd6") + '"/>';
    const turn = x => '<rect x="' + x + '" y="166" width="16" height="40" rx="2" fill="#9aa3ad" stroke="#555"/><rect x="' + (x + 2) + '" y="170" width="12" height="6" fill="#2a2632"/><circle class="blk" cx="' + (x + 8) + '" cy="182" r="2" fill="#3fbf6a"/>' +
      '<g class="wing" style="animation-duration:1.2s"><path d="M' + (x + 16) + ' 186h18" stroke="#c9ced6" stroke-width="3"/></g>';
    let windows = "";
    for (let x = 222; x < 330; x += 26) windows += '<rect x="' + x + '" y="112" width="18" height="12" rx="2" fill="#fff4d6" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#eee6d2"/>' + tile + '<rect x="0" y="0" width="400" height="10" fill="#3b3550"/>' +
      /* the signs */
      '<rect x="20" y="30" width="220" height="34" rx="4" fill="#111"/><rect x="20" y="30" width="220" height="4" fill="#fff"/>' +
      '<text x="32" y="56" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">Flushing–Main St</text>' + bullet(218, 48, "7", PURPLE) +
      '<rect x="20" y="70" width="180" height="22" rx="3" fill="#111"/><text x="30" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">EXIT ⇢ LIRR · KISSENA BLVD</text>' +
      /* the stairwell opening down to the platform, the 7 arriving below */
      '<rect x="200" y="96" width="190" height="62" fill="#2a2632"/>' +
      '<g class="anim-train"><rect x="210" y="104" width="150" height="40" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="210" y="130" width="150" height="4" fill="' + PURPLE + '"/>' + windows + bullet(346, 118, "7", PURPLE, false, 8) + '</g>' +
      '<rect x="200" y="144" width="190" height="6" fill="#eab308"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (200 + i * 4) + '" y="' + (150 + i * 2) + '" width="190" height="2" fill="#8c8478"/>').join("") +
      '<path d="M200 96h190" stroke="#3b3550" stroke-width="4"/><path d="M200 160h190" stroke="#3b3550" stroke-width="3"/>' +
      /* the poster */
      '<rect x="252" y="30" width="120" height="58" fill="#1a1428" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="312" y="54" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + GOLD + '">THE NATURAL</text>' +
      '<text x="312" y="72" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">MIC GERONIMO · 1995</text>' +
      /* turnstile line and the mezzanine floor */
      '<rect x="0" y="206" width="400" height="54" fill="#8c8478"/><path d="M0 206h400" stroke="#6a6458" stroke-width="2"/>' +
      turn(30) + turn(80) + turn(130) +
      '<g class="car" style="animation-duration:9s"><circle cx="0" cy="176" r="6" fill="#2a1d14"/><rect x="-7" y="182" width="14" height="22" rx="4" fill="' + TEAL + '"/><path d="M-4 204v12M4 204v12" stroke="#1a1a22" stroke-width="3"/></g>' +
      tag("MASTA I.C.", 200, 246, 26, PURPLE, -4) + tag("FLUSHING", 20, 250, 20, PINK, -3));
  }

  /* 2. The Old Quaker Meeting House on Northern Blvd (1694): weathered brown shingles, steep hipped roof, shuttered windows, autumn oaks */
  function meeting() {
    let shingles = "", leaves = "";
    for (let y = 118; y < 206; y += 7) shingles += '<path d="M96 ' + y + 'H304" stroke="#4b3626" stroke-width="1"/>';
    const lc = ["#e07a2b", "#c9a227", "#b8442a", "#e8b04a"];
    [[60, 20], [120, 10], [300, 16], [350, 30]].forEach((p, i) => { leaves += '<ellipse class="leaf lf' + (i + 1) + '" cx="' + p[0] + '" cy="' + p[1] + '" rx="4" ry="2.4" fill="' + lc[i] + '"/>'; });
    const win = (x, y) => '<rect x="' + (x - 13) + '" y="' + y + '" width="10" height="26" fill="#3d5a3a"/><rect x="' + (x + 23) + '" y="' + y + '" width="10" height="26" fill="#3d5a3a"/>' +
      '<rect x="' + (x - 3) + '" y="' + y + '" width="26" height="26" fill="#f4e9c8" stroke="#efe6d2" stroke-width="2"/><path d="M' + (x + 10) + ' ' + y + 'v26M' + (x - 3) + ' ' + (y + 13) + 'h26" stroke="#efe6d2" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="46" ry="7" fill="#fff" opacity=".5"/></g><g class="cld cld2"><ellipse cx="0" cy="60" rx="30" ry="5" fill="#fff" opacity=".4"/></g>' +
      tree(40, 170, 1.6, "#c9772f") + tree(360, 166, 1.7, "#b8442a") + tree(330, 180, 1.1, "#e8b04a") +
      /* hipped roof */
      '<path d="M84 118L130 66H270L316 118z" fill="#5a4a42"/><path d="M130 66H270" stroke="#3a2e28" stroke-width="2"/>' +
      '<rect x="196" y="50" width="12" height="18" fill="#7a4a34"/>' +
      /* shingled body */
      '<rect x="96" y="118" width="208" height="88" fill="#6e5038"/>' + shingles +
      win(116, 128) + win(262, 128) +
      /* two doors, men's and women's, under small hoods */
      '<rect x="160" y="150" width="22" height="56" fill="#3a2a1e"/><rect x="218" y="150" width="22" height="56" fill="#3a2a1e"/>' +
      '<path d="M154 150h34l-4 -8h-26z" fill="#5a4a42"/><path d="M212 150h34l-4 -8h-26z" fill="#5a4a42"/>' +
      '<circle cx="177" cy="180" r="1.6" fill="#c9a24a"/><circle cx="235" cy="180" r="1.6" fill="#c9a24a"/>' +
      /* lawn, fence, sidewalk */
      '<rect x="0" y="206" width="400" height="22" fill="#5f7d3a"/>' +
      (function () { let f = ""; for (let x = 4; x < 400; x += 14) f += '<rect x="' + x + '" y="210" width="3" height="16" fill="#8a6a48"/>'; return f; })() +
      '<rect x="0" y="214" width="400" height="3" fill="#8a6a48"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#9a9690"/>' +
      '<text x="200" y="248" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#3a3530" letter-spacing="2">QUAKER MEETING HOUSE · 1694</text>' +
      leaves,
      sky("g2", "#7fb2d9", "#e7d9b8"));
  }

  /* 3. Queens Botanical Garden on Main St: the leaf-shaped solar canopy, green roof, the water channel running out front, flower beds, butterflies */
  function garden() {
    let solar = "", beds = "";
    for (let x = 96; x < 312; x += 14) solar += '<path d="M' + x + ' ' + (60 + Math.pow((x - 210) / 30, 2) * 1.6) + 'l10 0" stroke="#2c4a6e" stroke-width="5"/>';
    const fc = ["#e84a6a", "#ffd23f", "#b06ad6", "#ff8a3c", "#f2f2f2"];
    for (let i = 0; i < 46; i++) beds += '<circle cx="' + (6 + i * 8.6) + '" cy="' + (214 + (i % 3) * 5) + '" r="3.2" fill="' + fc[i % 5] + '"/>';
    const bfly = (x, y, c, cls) => '<g transform="translate(' + x + ' ' + y + ')"><g class="flut ' + cls + '"><g class="wing"><path d="M0 0q-8 -8 -10 0q2 6 10 0q8 -8 10 0q-2 6 -10 0z" fill="' + c + '"/></g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld"><ellipse cx="0" cy="28" rx="40" ry="6" fill="#fff" opacity=".55"/></g>' +
      tree(30, 160, 1.4, "#4f8a3a") + tree(372, 156, 1.5, "#3f7a32") +
      /* building: wood-and-glass under the swooping canopy */
      '<rect x="110" y="96" width="190" height="80" fill="#b98a5a"/>' +
      (function () { let g = ""; for (let x = 118; x < 284; x += 22) g += '<rect x="' + x + '" y="104" width="16" height="62" fill="#9fc8d8" opacity=".85"/>'; return g; })() +
      '<path d="M76 92Q210 30 336 76L336 84Q210 44 76 100z" fill="#d9dde0" stroke="#8a9096" stroke-width="1.5"/>' + solar +
      '<path d="M110 96h190" stroke="#6aa04a" stroke-width="5"/>' +
      /* water channel */
      '<path d="M0 196Q100 182 210 192T400 186L400 202Q300 208 210 206T0 210z" fill="#5aa8c8"/>' +
      '<path d="M0 202Q100 190 210 199T400 194" stroke="#d8f2fa" stroke-width="2" fill="none" stroke-dasharray="10 10" class="flow"/>' +
      '<rect x="0" y="176" width="400" height="16" fill="#7fa85a"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#5f8a3a"/>' + beds +
      bfly(140, 150, "#ff8a3c", "") + bfly(260, 140, "#ffd23f", "flut2") +
      '<text x="200" y="250" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#f7f3ea" letter-spacing="2">QUEENS BOTANICAL GARDEN</text>',
      sky("g3", "#5fb0e8", "#d8f0f8"));
  }

  /* 4. Kissena Velodrome (1962): the banked asphalt oval, white and blue lines, riders in bright jerseys lapping, the park trees around */
  function velodrome() {
    const lap = 'M60 160C60 110 340 110 340 160C340 210 60 210 60 160z';
    const rider = (c, dur, begin) =>
      '<g><circle r="6" fill="none" stroke="#111" stroke-width="2" cx="-7" cy="4"/><circle r="6" fill="none" stroke="#111" stroke-width="2" cx="7" cy="4"/>' +
      '<path d="M-7 4L0 -4L7 4" stroke="#333" stroke-width="2" fill="none"/><path d="M-2 -6l6 -6" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/><circle cx="6" cy="-14" r="3.2" fill="' + c + '"/>' +
      '<animateMotion dur="' + dur + 's" begin="' + begin + 's" repeatCount="indefinite" path="' + lap + '"/></g>';
    let trees = "";
    for (let x = 10; x < 400; x += 38) trees += tree(x, 92 + (x % 3) * 4, .9, x % 2 ? "#3f7a32" : "#5a9a3a");
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + trees +
      '<rect x="0" y="100" width="400" height="160" fill="#4f8a3a"/>' +
      /* banked track: outer apron, track, infield */
      '<path d="M20 162C20 90 380 90 380 162C380 234 20 234 20 162z" fill="#c9c4b8"/>' +
      '<path d="M32 162C32 100 368 100 368 162C368 224 32 224 32 162z" fill="#3a3a40"/>' +
      '<path d="' + lap + '" fill="none" stroke="#4a8fd8" stroke-width="2"/>' +
      '<path d="M44 162C44 108 356 108 356 162C356 216 44 216 44 162z" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="8 6"/>' +
      '<path d="M80 162C80 128 320 128 320 162C320 196 80 196 80 162z" fill="#6aa04a" stroke="#e8e0cc" stroke-width="3"/>' +
      '<path d="M200 128V138M200 186V196" stroke="#fff" stroke-width="3"/>' +
      '<text x="200" y="167" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#f7f3ea" letter-spacing="2">KISSENA VELODROME</text>' +
      rider(PINK, 5, 0) + rider(GOLD, 5, -1.7) + rider(TEAL, 5.6, -3.2) +
      '<g class="cld"><ellipse cx="0" cy="30" rx="40" ry="6" fill="#fff" opacity=".5"/></g>',
      sky("g4", "#ffb36b", "#ffe2b8"));
  }

  /* 5. Kissena Blvd and Sanford Av: street signs, the tag wall, the 7 entrance glow */
  function corner() {
    let bricks = "";
    for (let y = 96; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7a4632"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(18) +
'<g><style>@keyframes lmJet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}.lmJet0,.lmJet1{transform-box:fill-box;transform-origin:50% 100%;animation:lmJet 1.6s ease-in-out infinite}.lmJet1{animation-delay:-.8s}@keyframes lmSw{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lmSw{transform-box:fill-box;transform-origin:50% 100%;animation:lmSw 5s ease-in-out infinite}.lmSw2{animation-delay:-2.5s}@keyframes lmGl{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.lmGl{transform-box:fill-box;transform-origin:center;animation:lmGl 2.4s ease-in-out infinite}@keyframes lmBk{0%,60%{opacity:1}61%,100%{opacity:.15}}.lmBk{animation:lmBk 1.2s steps(1) infinite}</style><defs><radialGradient id="umgg" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#e6dff2"/><stop offset=".55" stop-color="#9a90b0"/><stop offset="1" stop-color="#4c4466"/></radialGradient><clipPath id="umgc"><circle cx="0" cy="0" r="50"/></clipPath></defs><g transform="translate(150 56) scale(-0.6 0.6)"><g transform="rotate(-30)"><circle r="50" fill="url(#umgg)"/><g clip-path="url(#umgc)"><path d="M-38 -28C-30 -38 -12 -42 -4 -33C-6 -25 -13 -21 -15 -13C-17 -7 -23 -5 -26 1C-31 -5 -36 -11 -40 -17Z" fill="#bdb4d0" stroke="#4c4466" stroke-width="1.2" opacity=".95"/><path d="M-20 5C-12 5 -6 11 -8 19C-10 27 -15 35 -18 42C-22 35 -24 24 -26 13Z" fill="#bdb4d0" stroke="#4c4466" stroke-width="1.2" opacity=".95"/><path d="M10 -6C20 -10 32 -6 34 4C34 14 28 26 22 34C16 28 14 18 10 10C6 6 6 -2 10 -6Z" fill="#bdb4d0" stroke="#4c4466" stroke-width="1.2" opacity=".95"/><path d="M6 -31C14 -37 26 -35 31 -27C25 -22 16 -19 8 -16C4 -20 2 -26 6 -31Z" fill="#bdb4d0" stroke="#4c4466" stroke-width="1.2" opacity=".95"/><path d="M34 -30C42 -26 46 -18 44 -10C40 -14 36 -20 32 -24Z" fill="#bdb4d0" stroke="#4c4466" stroke-width="1.2" opacity=".95"/></g><path d="M0 -50V50" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse rx="22" ry="50" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse rx="40" ry="50" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse cy="-35" rx="35.7" ry="4.3" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse cy="-18" rx="46.6" ry="5.6" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse cy="0" rx="50" ry="6" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse cy="18" rx="46.6" ry="5.6" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><ellipse cy="35" rx="35.7" ry="4.3" fill="none" stroke="#4c4466" stroke-width="1.1" opacity=".75"/><circle r="50" fill="none" stroke="#4c4466" stroke-width="2"/></g><g transform="rotate(-28)"><path d="M-66 0A66 17 0 1 0 66 0A66 17 0 1 0 -66 0" fill="none" stroke="#d8d0ea" stroke-width="2.4"/><circle r="3.4" fill="#d8d0ea"><animateMotion dur="7s" begin="-0s" repeatCount="indefinite" path="M-66 0A66 17 0 1 0 66 0A66 17 0 1 0 -66 0"/></circle></g><g transform="rotate(32)"><path d="M-62 0A62 14 0 1 0 62 0A62 14 0 1 0 -62 0" fill="none" stroke="#d8d0ea" stroke-width="2.4"/><circle r="3.4" fill="#d8d0ea"><animateMotion dur="9s" begin="-2s" repeatCount="indefinite" path="M-62 0A62 14 0 1 0 62 0A62 14 0 1 0 -62 0"/></circle></g><g transform="rotate(78)"><path d="M-60 0A60 12 0 1 0 60 0A60 12 0 1 0 -60 0" fill="none" stroke="#d8d0ea" stroke-width="2.4"/><circle r="3.4" fill="#d8d0ea"><animateMotion dur="11s" begin="-4s" repeatCount="indefinite" path="M-60 0A60 12 0 1 0 60 0A60 12 0 1 0 -60 0"/></circle></g></g><circle cx="70" cy="80" r="16" fill="#1a2a24"/><circle cx="88" cy="80" r="16" fill="#1a2a24"/><circle cx="106" cy="80" r="16" fill="#1a2a24"/><circle cx="124" cy="80" r="16" fill="#1a2a24"/><circle cx="142" cy="80" r="16" fill="#1a2a24"/><circle cx="160" cy="80" r="16" fill="#1a2a24"/><circle cx="178" cy="80" r="16" fill="#1a2a24"/><circle cx="196" cy="80" r="16" fill="#1a2a24"/><circle cx="214" cy="80" r="16" fill="#1a2a24"/><circle cx="232" cy="80" r="16" fill="#1a2a24"/></g>' + 
      '<rect x="230" y="40" width="40" height="50" fill="#2a2440"/><rect x="276" y="56" width="56" height="34" fill="#2a2440"/>' +
      (function () { let w = ""; for (let y = 48; y < 86; y += 10) w += '<rect x="238" y="' + y + '" width="6" height="5" fill="#ffd27a" class="flk"/><rect x="256" y="' + y + '" width="6" height="5" fill="#ffd27a"/>'; return w; })() +
      '<rect x="0" y="90" width="400" height="126" fill="#5e3426"/>' + bricks +
      tag("MASTA I.C.", 76, 136, 30, GOLD, -6) + tag("MIC G", 268, 152, 28, PINK, -4) + tag("THE NATURAL", 90, 200, 24, TEAL, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><rect x="0" y="214" width="400" height="5" fill="#8a8a8e"/>' +
      '<rect x="356" y="74" width="5" height="142" fill="#2f3a33"/><path d="M358 74q-14 -12 -30 -6" stroke="#2f3a33" stroke-width="4" fill="none"/><ellipse cx="326" cy="70" rx="9" ry="4" fill="#ffe9a8" class="flk"/>' +
      '<rect x="54" y="40" width="5" height="176" fill="#5a5f66"/>' + sign(8, 34, 96, "Kissena Blvd") + sign(14, 56, 84, "Sanford Av") +
      '<g class="car"><rect x="0" y="228" width="64" height="18" rx="5" fill="#2e5fc2"/><rect x="12" y="220" width="36" height="12" rx="4" fill="#2e5fc2"/><circle cx="14" cy="248" r="6" fill="#111"/><circle cx="52" cy="248" r="6" fill="#111"/></g>',
      sky("g5", "#140a1f", "#3a1f4e"));
  }

  window.SCENES = { train, meeting, garden, velodrome, corner };
})();
