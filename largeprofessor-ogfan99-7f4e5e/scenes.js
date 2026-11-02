/* Flushing opening scenes for the Large Professor game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes bub{0%{transform:translateY(0);opacity:0}25%{opacity:.9}100%{transform:translateY(-40px);opacity:0}}' +
    '.bub{animation:bub 2.4s ease-out infinite}.bub2{animation-delay:.8s}.bub3{animation-delay:1.6s}' +
    '@keyframes drift{from{transform:translateX(-140px)}to{transform:translateX(460px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes sway{0%,100%{transform:skewX(-3deg)}50%{transform:skewX(3deg)}}' +
    '.swy{transform-box:fill-box;transform-origin:50% 0;animation:sway 3.4s ease-in-out infinite}.swy2{animation-delay:1.2s}' +
    '@keyframes swim{0%{transform:translateX(0)}50%{transform:translateX(70px)}100%{transform:translateX(0)}}' +
    '.swim{animation:swim 14s ease-in-out infinite}.swim2{animation-delay:-5s}' +
    '@keyframes flip{0%,100%{transform:scaleX(1)}49.9%{transform:scaleX(1)}50%{transform:scaleX(-1)}}' +
    '@keyframes ripple{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}' +
    '.rip{transform-box:fill-box;transform-origin:50% 50%;animation:ripple 3s ease-out infinite}.rip2{animation-delay:1.5s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(26px,140px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5.5s linear infinite}.car2{animation-delay:-2.6s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}' +
    '.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
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
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const AMBER = "#ffb347", PURPLE = "#b933ad", LAB = "#7cf29a", ICE = "#9fd0ff";

  /* 1. Flushing–Main St, the end of the 7: the train in at the bumper, the north stair climbing out toward Northern Blvd with Flushing Town Hall's towers at the top */
  function train() {
    const { svg, sky, tag, T, bullet, brickLines } = LM1;
    let tiles = ""; for (let y = 30; y < 150; y += 8) tiles += '<path d="M0 ' + y + 'h250" stroke="#00000014"/>';
    let steps = ""; for (let i = 0; i < 7; i++) steps += '<rect x="' + (260 + i * 12) + '" y="' + (200 - i * 16) + '" width="' + (140 - i * 12) + '" height="16" fill="' + (i % 2 ? "#8a8a84" : "#9a9a94") + '"/><rect x="' + (260 + i * 12) + '" y="' + (200 - i * 16) + '" width="' + (140 - i * 12) + '" height="2" fill="#eab308"/>';
    return svg(
      '<rect width="400" height="260" fill="#e6e0cc"/>' + tiles +
      '<rect x="0" y="18" width="252" height="12" fill="#7a2a7a"/><rect x="0" y="30" width="252" height="3" fill="#ffb347"/>' +
      '<rect x="16" y="40" width="200" height="28" rx="3" fill="#111"/><rect x="16" y="40" width="200" height="3" fill="#fff"/>' +
      T(26, 61, "Flushing–Main St", 15, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) + bullet(198, 54, "7", "#b933ad", false, 10) +
      '<g class="anim-train">' + LM1.subCar(-40, 84, 270, "#b933ad", bullet(200, 124, "7", "#b933ad", false, 9)) + '</g>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="108" fill="#8f8a80"/>' +
      /* the open stairwell up to the street, Town Hall at the top */
      '<rect x="252" y="0" width="148" height="216" fill="#2b2b2e"/>' +
      '<rect x="252" y="0" width="148" height="80" fill="url(#lp1)"/>' +
      /* Flushing Town Hall: Romanesque Revival, brick, round-arched windows, the two towers */
      '<rect x="282" y="26" width="96" height="54" fill="#a8603e"/>' + brickLines(282, 26, 96, 54, "#8a4a2e", 6) +
      '<rect x="272" y="10" width="20" height="70" fill="#b06a46"/><rect x="368" y="10" width="20" height="70" fill="#b06a46"/>' +
      '<path d="M272 10h20l-2-6h-16zM368 10h20l-2-6h-16z" fill="#6a3a2a"/>' +
      [296, 316, 344, 364].map(x => '<path d="M' + x + ' 64v-18a5 5 0 0 1 10 0v18z" fill="#3a2a22"/>').join("") +
      '<path d="M322 80v-22a8 8 0 0 1 16 0v22z" fill="#3a2a22"/><path d="M278 24h104" stroke="#e8d8b8" stroke-width="2"/>' +
      '<rect x="262" y="82" width="128" height="14" rx="2" fill="#111" opacity=".85"/>' + T(326, 92, "FLUSHING TOWN HALL", 8, "#ffb347", { f: "Barlow, Arial, sans-serif", w: 700, ls: 1 }) +
      steps + '<path d="M258 206L400 108" stroke="#c9c2b0" stroke-width="3"/>' +
      '<rect x="262" y="182" width="132" height="18" rx="2" fill="#111"/>' + T(328, 195, "EXIT ↑ Northern Blvd", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      tag("MAIN SOURCE", 16, 206, 34, "#ffb347", -5) + tag("EXTRA P", 40, 246, 28, "#7cf29a", -3),
      sky("lp1", "#8fc3ea", "#f6e2b8"));
  }

  /* 2. Flushing Town Hall on Northern Blvd (1862): red-brown brick, cream trim, triple-arched portico, pinnacled buttresses */
  function townhall() {
    let corbels = "";
    for (let x = 96; x < 304; x += 10) corbels += '<path d="M' + x + ' 76q5 6 10 0" stroke="#f1e4c6" stroke-width="1.6" fill="none"/>';
    const arched = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2d3644" stroke="#f1e4c6" stroke-width="2"/>';
    const pinnacle = x => '<rect x="' + (x - 7) + '" y="54" width="14" height="138" fill="#8f3a26"/><path d="M' + (x - 8) + ' 54l8-22 8 22z" fill="#5b2a1c"/><circle cx="' + x + '" cy="30" r="2.5" fill="#f1e4c6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="60" cy="40" rx="44" ry="10" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="60" cy="28" rx="34" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* main body with a steep front gable */
      '<rect x="92" y="76" width="216" height="116" fill="#a4442c"/>' +
      '<path d="M92 76l108-52 108 52z" fill="#a4442c" stroke="#f1e4c6" stroke-width="2"/>' +
      '<path d="M108 76l92-42 92 42" fill="none" stroke="#f1e4c6" stroke-width="1.2" opacity=".7"/>' + corbels +
      /* brick coursing */
      (function () { let b = ""; for (let y = 84; y < 192; y += 7) b += '<path d="M92 ' + y + 'h216" stroke="#8a3622" stroke-width=".7"/>'; return b; })() +
      pinnacle(92) + pinnacle(308) + pinnacle(150) + pinnacle(250) +
      /* tall arched second-story windows and the double window up top */
      arched(112, 92, 22, 40) + arched(266, 92, 22, 40) + arched(184, 50, 14, 26) + arched(202, 50, 14, 26) +
      arched(168, 92, 24, 40) + arched(208, 92, 24, 40) +
      /* triple-arched portico */
      '<rect x="146" y="142" width="108" height="50" fill="#f1e4c6"/>' +
      arched(154, 150, 24, 42) + arched(188, 150, 24, 42) + arched(222, 150, 24, 42) +
      '<rect x="146" y="138" width="108" height="6" fill="#e3d2ad"/>' +
      '<rect x="110" y="152" width="22" height="30" fill="#2d3644" stroke="#f1e4c6" stroke-width="2"/><rect x="268" y="152" width="22" height="30" fill="#2d3644" stroke="#f1e4c6" stroke-width="2"/>' +
      '<circle class="flk" cx="166" cy="176" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="234" cy="176" r="3" fill="#ffe7a8"/>' +
      /* sidewalk, steps, Northern Blvd traffic */
      '<rect x="0" y="192" width="400" height="14" fill="#c9c3b6"/><rect x="150" y="192" width="100" height="6" fill="#e3ddd0"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#1c2026"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="20" y="114" width="54" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.2"/><text x="47" y="125.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">Northern Blvd</text><rect x="45" y="130" width="3" height="62" fill="#5d6670"/>' +
      '<g class="car"><rect x="0" y="212" width="48" height="13" rx="4" fill="#3d6fb2"/><circle cx="43" cy="218" r="2" fill="#fff6c2"/></g>' +
      '<g class="car car2"><rect x="0" y="238" width="52" height="13" rx="4" fill="' + AMBER + '"/><circle cx="47" cy="244" r="2" fill="#fff6c2"/></g>',
      sky("g2", "#6aa7dd", "#e4f1fa"));
  }

  /* 3. Bowne House on Bowne St (1661): low weathered-shingle farmhouse, big brick chimney, white trim, autumn trees */
  function bowne() {
    let shingle = "";
    for (let y = 120; y < 192; y += 6) shingle += '<path d="M70 ' + y + 'h260" stroke="#5c5146" stroke-width=".8"/>';
    for (let y = 76; y < 118; y += 6) shingle += '<path d="M' + (150 - (y - 76) * 1.9) + ' ' + y + 'h' + (100 + (y - 76) * 3.8) + '" stroke="#3f3a36" stroke-width=".7"/>';
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="20" height="22" fill="#3a4450" stroke="#f4f1e8" stroke-width="2.5"/><path d="M' + (x + 10) + ' ' + y + 'v22M' + x + ' ' + (y + 11) + 'h20" stroke="#f4f1e8" stroke-width="1.5"/>';
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (196 - y) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x + r / 2) + '" cy="' + (y + 4) + '" r="' + r * .7 + '" fill="' + c + '" opacity=".9"/>';
    const leaf = (x, y, c, cls) => '<path class="leaf ' + cls + '" d="M' + x + ' ' + y + 'q4-5 8 0q-4 5-8 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#fff4d6" opacity=".9"/>' +
      tree(36, 120, 30, "#c8642a") + tree(370, 128, 26, "#d9a03a") +
      /* chimney */
      '<rect x="186" y="44" width="28" height="40" fill="#8b4a36"/><rect x="182" y="40" width="36" height="6" fill="#6d3a2a"/>' +
      /* long sloped roof */
      '<path d="M60 120l90-46h100l90 46z" fill="#4a443f"/>' +
      '<rect x="70" y="118" width="260" height="76" fill="#7d7063"/>' + shingle +
      win(92, 134) + win(140, 134) + win(240, 134) + win(288, 134) +
      /* the door with its white frame */
      '<rect x="188" y="142" width="24" height="52" fill="#5b3a26" stroke="#f4f1e8" stroke-width="3"/><circle cx="206" cy="170" r="1.8" fill="#e8c26a"/>' +
      '<rect x="182" y="138" width="36" height="5" fill="#f4f1e8"/>' +
      /* lawn, picket fence, brick path */
      '<rect x="0" y="194" width="400" height="66" fill="#4f7e3c"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 12) if (x < 176 || x > 222) f += '<path d="M' + x + ' 230v-20l4-5 4 5v20z" fill="#f4f1e8"/>'; return f + '<path d="M0 214h176M224 214h176" stroke="#f4f1e8" stroke-width="3"/>'; })() +
      '<path d="M188 194h24l18 66h-60z" fill="#a85a40"/>' +
      '<rect x="282" y="200" width="100" height="16" rx="2" fill="#5b3a26" stroke="#e8c26a" stroke-width="1"/><text x="332" y="211" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#f4f1e8">BOWNE HOUSE 1661</text>' +
      leaf(40, 104, "#e07a2c", "") + leaf(70, 112, "#c4502a", "lf2") + leaf(360, 110, "#e0a73a", "lf3"),
      sky("g3", "#87b8e2", "#f6e6c8"));
  }

  /* 4. Flushing High School at Northern Blvd & Union St (1915): the Collegiate Gothic stone school with its tower, a block from his Main & Northern corner */
  function kissena() {
    const { svg, sky, tag, T, plaque, tree, cloud, car, fig } = LM1;
    const gwin = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'L' + (x + w / 2) + ' ' + y + 'L' + (x + w) + ' ' + (y + w / 2) + 'V' + (y + h) + 'z" fill="#2a3a4a"/><path d="M' + (x + w / 2) + ' ' + (y + 4) + 'V' + (y + h) + '" stroke="#d8d0bc" stroke-width="1"/>';
    let wing = ""; for (let k = 0; k < 5; k++) { wing += gwin(36 + k * 22, 112, 12, 26) + gwin(36 + k * 22, 152, 12, 22) + gwin(258 + k * 22, 112, 12, 26) + gwin(258 + k * 22, 152, 12, 22); }
    let cren = ""; for (let x = 24; x < 376; x += 10) cren += '<rect x="' + x + '" y="94" width="6" height="8" fill="#cfc6b0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lp4)"/>' + cloud("lm-drift", 0, 30, 1) + cloud("lm-drift lm-d2", 0, 54, .7, .6) +
      '<rect x="24" y="102" width="352" height="90" fill="#d8cfb8"/>' + cren + wing +
      /* the center tower */
      '<rect x="164" y="40" width="72" height="152" fill="#e2d9c2"/>' +
      (function () { let s = ""; for (let x = 164; x < 236; x += 10) s += '<rect x="' + x + '" y="32" width="6" height="8" fill="#e2d9c2"/>'; return s; })() +
      '<rect x="158" y="40" width="8" height="152" fill="#cfc6b0"/><rect x="234" y="40" width="8" height="152" fill="#cfc6b0"/>' +
      gwin(188, 56, 24, 40) + '<path d="M180 150a20 20 0 0 1 40 0v42h-40z" fill="#3a2a22"/>' +
      '<rect x="168" y="104" width="64" height="14" fill="#f2ead8"/>' + T(200, 114, "FLUSHING HIGH SCHOOL", 6, "#4a3a2a", { f: "Barlow, Arial, sans-serif", w: 700 }) +
      '<rect x="216" y="10" width="2" height="24" fill="#ccc"/><g class="lm-sway" style="transform-origin:218px 12px"><rect x="218" y="12" width="20" height="12" fill="#ffb347"/></g>' +
      tree(16, 196, 16, "#3f7a3a") + tree(386, 196, 16, "#3f7a3a", "lm-swayb lm-s2") +
      '<rect x="0" y="192" width="400" height="12" fill="#5a8a3a"/><rect x="0" y="204" width="400" height="56" fill="#3a3c42"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("lm-car", 238, "#7cf29a") + car("lm-carL", 214, "#9fd0ff") +
      plaque(8, 8, 150, "FLUSHING HIGH SCHOOL", "NORTHERN BLVD · UNION ST", "#2a1a0a", "#ffb347") +
      tag("MAD SCIENTIST", 220, 254, 20, "#ffb347", -3),
      sky("lp4", "#7fb6e6", "#eef4f6"));
  }

  /* 5. Main St and Northern Blvd: the brick wall with the tags, a sampler box thumping on a milk crate */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="360" cy="34" r="14" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="56" width="240" height="164" fill="#4a2a22"/>'; for (let y = 58; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#5e352a"/>'; return '<clipPath id="wl"><rect x="16" y="56" width="240" height="164"/></clipPath><g clip-path="url(#wl)">' + b + '</g>'; })() +
      tag("LARGE PRO", 26, 120, 40, AMBER, -7) + tag("MAD SCIENTIST", 28, 164, 25, LAB, -3) + tag("EXTRA P", 70, 204, 26, ICE, -4) +
      /* milk crate with a beat box on it */
      '<g transform="translate(206 186)"><rect x="0" y="12" width="44" height="22" fill="#2f6fb5" stroke="#1b3f6a"/><path d="M6 16v14M14 16v14M22 16v14M30 16v14M38 16v14" stroke="#1b3f6a"/>' +
      '<rect x="-4" y="-2" width="52" height="16" rx="2" fill="#2a2d33" stroke="#777"/>' +
      '<rect class="pulse" x="2" y="2" width="8" height="8" fill="' + AMBER + '"/><rect x="12" y="2" width="8" height="8" fill="#ddd"/><rect x="22" y="2" width="8" height="8" fill="#ddd"/><rect class="pulse" x="32" y="2" width="8" height="8" fill="' + LAB + '"/></g>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="266" y="88" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="254" y="110" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Northern Blvd</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car car2"><rect x="0" y="226" width="50" height="13" rx="4" fill="#7a3a9a"/><circle cx="44" cy="232" r="2" fill="#fff6c2"/></g>',
      sky("g5", "#0d1220", "#2a1e30"));
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

  window.SCENES = { train, townhall, bowne, kissena, corner };
})();
