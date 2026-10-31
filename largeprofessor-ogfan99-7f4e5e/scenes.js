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

  /* 1. The 7 pulling into Flushing–Main St, underground at the end of the line: white tile, a mosaic band, the platform pillars */
  function train() {
    let tiles = "";
    for (let y = 26; y < 120; y += 9) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d9dc" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 20v100" stroke="#d6d9dc" stroke-width=".6"/>';
    let mosaic = "";
    for (let x = 0; x < 400; x += 20) mosaic += '<rect x="' + x + '" y="24" width="10" height="6" fill="' + PURPLE + '"/><rect x="' + (x + 10) + '" y="24" width="10" height="6" fill="#e6d3e4"/>';
    let cols = "";
    [22, 56, 344, 378].forEach(x => cols += '<rect x="' + (x - 6) + '" y="14" width="12" height="166" fill="#2a3a4c"/><rect x="' + (x - 9) + '" y="14" width="18" height="8" fill="#2a3a4c"/>');
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#dff1ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#10141a"/>' +
      '<rect x="0" y="0" width="400" height="14" fill="#0a0d11"/>' +
      '<rect class="flk" x="60" y="6" width="90" height="4" rx="2" fill="#f2fbff"/><rect class="flk flk2" x="250" y="6" width="90" height="4" rx="2" fill="#f2fbff"/>' +
      /* white tile wall, purple-and-lilac mosaic trim */
      '<rect x="0" y="14" width="400" height="106" fill="#f1f3f4"/>' + tiles + mosaic +
      '<rect x="0" y="108" width="400" height="6" fill="' + PURPLE + '"/>' +
      /* black station sign with the 7 bullet */
      '<rect x="78" y="44" width="244" height="40" rx="4" fill="#111"/>' +
      '<rect x="78" y="44" width="244" height="4" fill="#fff"/>' +
      '<text x="92" y="73" ' + F + ' font-weight="700" font-size="18" fill="#fff">Flushing–Main St</text>' +
      bullet(298, 66, "7", PURPLE) +
      '<rect x="150" y="90" width="100" height="12" rx="2" fill="#111"/><text x="200" y="99" text-anchor="middle" ' + F + ' font-size="7.5" fill="#fff">LAST STOP · ALL OUT</text>' +
      cols +
      /* the 7 slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 160h300" stroke="#9aa1aa" stroke-width="2"/><rect x="8" y="164" width="300" height="5" fill="' + PURPLE + '"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
        bullet(286, 139, "7", PURPLE) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1f26"/>' +
      '<path d="M0 206h400M0 226h400M0 246h400" stroke="#232a33"/>' +
      tag("EXTRA P", 26, 238, 32, AMBER, -5) + tag("MAIN SOURCE", 216, 240, 26, LAB, -7));
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

  /* 4. Kissena Park lake: willows, the cattail edge, geese gliding and rings on the water */
  function kissena() {
    const willow = (x, cls) => {
      let s = '<rect x="' + (x - 4) + '" y="96" width="8" height="70" fill="#4d3b2a"/><g class="swy ' + cls + '">';
      for (let i = -5; i <= 5; i++) s += '<path d="M' + (x + i * 5) + ' 92q' + (i * 2) + ' 30 ' + (i * 3) + ' 64" stroke="#7fb24a" stroke-width="3" fill="none"/>';
      return s + '</g><ellipse cx="' + x + '" cy="92" rx="34" ry="16" fill="#86b84f"/>';
    };
    const goose = (x, y, cls) => '<g class="swim ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="5" fill="#5d5249"/><path d="M' + (x + 9) + ' ' + y + 'q2-14 8-14" stroke="#1d1b1a" stroke-width="3" fill="none"/>' +
      '<ellipse cx="' + (x + 18) + '" cy="' + (y - 14) + '" rx="3.5" ry="2.5" fill="#1d1b1a"/><path d="M' + (x + 14) + ' ' + (y - 10) + 'l3 2" stroke="#fff" stroke-width="1.5"/></g>';
    let cat = "";
    for (let x = 0; x < 400; x += 9) cat += '<path d="M' + x + ' 178v-' + (12 + (x * 7) % 10) + '" stroke="#5a7a34" stroke-width="2"/>' + (x % 27 ? "" : '<rect x="' + (x - 1.5) + '" y="' + (160 - (x * 7) % 10) + '" width="3" height="8" rx="1.5" fill="#6b4a2a"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="cld"><ellipse cx="80" cy="36" rx="46" ry="9" fill="#fff" opacity=".6"/></g>' +
      /* far shore: low Flushing rooftops */
      (function () { let b = ""; [[150, 20, 30], [176, 16, 20], [196, 26, 40], [226, 14, 24], [244, 22, 34]].forEach(r => b += '<rect x="' + r[0] + '" y="' + (150 - r[2]) + '" width="' + r[1] + '" height="' + r[2] + '" fill="#8e9bab" opacity=".7"/>'); return b; })() +
      '<rect x="0" y="146" width="400" height="10" fill="#5f8a42"/>' +
      willow(60, "") + willow(340, "swy2") +
      /* lake */
      '<rect x="0" y="156" width="400" height="104" fill="#3b6f86"/>' +
      '<path d="M30 190h60M150 206h70M270 196h80M80 236h60M240 240h70" stroke="#a9d4e6" stroke-width="2" opacity=".55"/>' +
      '<ellipse class="rip" cx="200" cy="222" rx="20" ry="5" fill="none" stroke="#cfe9f4" stroke-width="1.5"/><ellipse class="rip rip2" cx="200" cy="222" rx="20" ry="5" fill="none" stroke="#cfe9f4" stroke-width="1.5"/>' +
      goose(110, 200, "") + goose(220, 236, "swim2") + goose(140, 246, "swim2") +
      cat +
      '<rect x="150" y="112" width="100" height="18" rx="3" fill="#1f5f3a" stroke="#fff" stroke-width="1.2"/><text x="200" y="125" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">KISSENA PARK</text>' +
      '<rect x="198" y="130" width="4" height="18" fill="#5d4a36"/>',
      sky("g4", "#8fc2e6", "#e9f5ea"));
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

  window.SCENES = { train, townhall, bowne, kissena, corner };
})();
