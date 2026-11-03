/* Scott Storch producer game: Philadelphia. The L under Market St, South Street's mosaic walls, the keys rig, Star Island, Broad & South with City Hall. Each scene 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes press{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.key{animation:press .9s ease-in-out infinite}.k2{animation-delay:-.3s}.k3{animation-delay:-.6s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.wv{animation:wave 2.6s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}' +
    '@keyframes walk{from{transform:translateX(420px)}to{transform:translateX(-40px)}}' +
    '.walk{animation:walk 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const winGrid = (x0, y0, w, h, c1, c2) => { let s = ""; for (let y = y0 + 6; y < y0 + h - 6; y += 11) for (let x = x0 + 4; x < x0 + w - 5; x += 9) s += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x * 5 + y * 3) % 7 ? c1 : c2) + '"/>'; return s; };
  const palm = (x, y, h) => {
    let fr = "";
    [-60, -25, 10, 40, 75, 115, 150].forEach(a => fr += '<path d="M0 0q16 -10 34 4" transform="rotate(' + a + ')" stroke="#1d6b3c" stroke-width="6" fill="none" stroke-linecap="round"/>');
    return '<path d="M' + x + ' ' + y + 'q-6 ' + (-h / 2) + ' 4 ' + (-h) + '" stroke="#6b4a2b" stroke-width="6" fill="none"/>' +
      '<g class="sway"><g transform="translate(' + (x + 4) + ' ' + (y - h) + ')">' + fr + '</g></g>';
  };
  /* a keyboard: x,y, width, keys count */
  const keyboard = (x, y, n, kw) => {
    let s = '<rect x="' + (x - 6) + '" y="' + (y - 14) + '" width="' + (n * kw + 12) + '" height="' + 62 + '" rx="4" fill="#1b1b20" stroke="#444" stroke-width="2"/>';
    for (let i = 0; i < n; i++) s += '<rect class="' + (i % 5 === 2 ? "key" : i % 7 === 4 ? "key k2" : i % 9 === 6 ? "key k3" : "") + '" x="' + (x + i * kw) + '" y="' + y + '" width="' + (kw - 1) + '" height="44" fill="#f4f1e8" stroke="#888" stroke-width=".6"/>';
    for (let i = 0; i < n - 1; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) s += '<rect x="' + (x + i * kw + kw * 0.65) + '" y="' + y + '" width="' + (kw * 0.7) + '" height="26" fill="#111"/>';
    return s;
  };
  const BLUE = "#2f6fb7", ORANGE = "#ff9f1c", RED = "#e63946", CREAM = "#f4f1e8";

  /* 1. The L (Market-Frankford Line) pulling into 5th St/Independence Hall, underground under Market St */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) for (let y = 0; y < 100; y += 10) tiles += '<rect x="' + (x + (y % 20 ? 10 : 0)) + '" y="' + y + '" width="19" height="9" fill="#e7e2d4"/>';
    let wins = "";
    for (let x = 22; x < 300; x += 40) wins += '<rect x="' + x + '" y="120" width="26" height="22" rx="3" fill="#ffeeb8" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc8b6"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#1d2f4a"/>' +
      '<g class="flk"><rect x="40" y="10" width="120" height="5" rx="2" fill="#fff7d6"/><rect x="240" y="10" width="120" height="5" rx="2" fill="#fff7d6"/></g>' +
      /* blue band + station sign */
      '<rect x="0" y="24" width="400" height="6" fill="' + BLUE + '"/>' +
      '<rect x="60" y="38" width="280" height="40" rx="4" fill="#111"/><rect x="60" y="38" width="280" height="4" fill="#fff"/>' +
      '<text x="72" y="64" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13.5" fill="#fff">5th St/Independence Hall</text>' +
      '<rect x="294" y="47" width="24" height="24" rx="5" fill="' + BLUE + '"/><text x="306" y="65" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">L</text>' +
      /* tunnel + train */
      '<rect x="0" y="96" width="400" height="80" fill="#2a2a30"/>' +
      '<g class="anim-train">' +
        '<rect x="6" y="104" width="320" height="62" rx="8" fill="#d6dbe2" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="6" y="148" width="320" height="6" fill="' + BLUE + '"/>' + wins +
        '<rect x="296" y="112" width="26" height="32" rx="3" fill="#1d2f4a"/><rect x="300" y="116" width="18" height="10" fill="' + BLUE + '"/><text x="309" y="124.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">L</text>' +
        '<circle cx="318" cy="158" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="84" fill="#8a8578"/><rect x="0" y="176" width="400" height="6" fill="#f2d24b"/>' +
      '<rect x="0" y="182" width="400" height="2" fill="#5b574d"/>' +
      tag("PHILLY KEYS", 120, 232, 22, ORANGE, -4));
  }

  /* 2. South Street at night: the mosaic walls (glass, tile, mirror shards), neon, people walking */
  function southst() {
    let mosaic = "";
    const cols = ["#e63946", "#ff9f1c", "#2f6fb7", "#2bb6a8", "#f4d35e", "#c77dff", "#f4f1e8", "#9ad1ff"];
    for (let i = 0; i < 140; i++) {
      const x = 14 + (i * 73 + (i * i) % 17) % 192, y = 62 + (i * 41 + (i * i * 3) % 23) % 136, s = 6 + (i * 7 % 5) * 2, r = (i * 47) % 360;
      mosaic += '<path transform="rotate(' + r + ' ' + x + ' ' + y + ')" d="M' + x + ' ' + y + 'l' + s + ' ' + (s / 3) + 'l' + (-s / 3) + ' ' + s + 'z" fill="' + cols[(i * 3) % cols.length] + '" opacity=".95"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(10) +
      /* mosaic building */
      '<rect x="8" y="56" width="210" height="150" fill="#5a4a3a"/>' + mosaic +
      '<circle cx="112" cy="122" r="22" fill="none" stroke="#f4f1e8" stroke-width="4" class="flk"/><circle cx="112" cy="122" r="12" fill="#ff9f1c"/>' +
      /* row houses right */
      '<rect x="226" y="80" width="80" height="126" fill="#8b3a2b"/><rect x="306" y="70" width="94" height="136" fill="#7a3324"/>' +
      winGrid(226, 80, 80, 70, "#3a1c16", "#ffd98a") + winGrid(306, 70, 94, 70, "#3a1c16", "#ffd98a") +
      '<g class="neon"><rect x="240" y="160" width="140" height="22" rx="4" fill="#111" stroke="#ff4fa0" stroke-width="2"/>' +
      '<text x="310" y="176" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#ff7cc0" letter-spacing="2">SOUTH ST</text></g>' +
      /* sidewalk + street */
      '<rect x="0" y="206" width="400" height="14" fill="#a39b8a"/><rect x="0" y="220" width="400" height="40" fill="#24222b"/>' +
      '<g class="walk"><circle cx="0" cy="186" r="5" fill="#2b2b2b"/><rect x="-5" y="191" width="10" height="16" rx="3" fill="' + BLUE + '"/></g>' +
      '<g class="car"><rect x="0" y="228" width="50" height="16" rx="5" fill="' + ORANGE + '"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="38" cy="246" r="5" fill="#111"/></g>',
      sky("s2", "#0f1430", "#3b2a5a"));
  }

  /* 3. The keys rig: stacked keyboards, the piano riff floating up as notes */
  function keys() {
    const nt = (x, y, cls) => '<g class="note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="6" ry="4.5" fill="' + ORANGE + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 4.5) + '" y="' + (y - 22) + '" width="2" height="22" fill="' + ORANGE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#14121c"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="url(#s3)"/>' +
      /* acoustic panels */
      [20, 90, 160, 230, 300].map(x => '<rect x="' + x + '" y="16" width="60" height="80" rx="4" fill="#2a2438" stroke="#3a3350"/>').join("") +
      '<rect x="0" y="120" width="400" height="140" fill="#1e1a28"/>' +
      /* stand */
      '<path d="M90 250l40-70M310 250l-40-70M130 180h140" stroke="#777" stroke-width="5"/>' +
      keyboard(66, 150, 26, 10.4) + keyboard(80, 196, 23, 10.4).replace(/y="196"/g, 'y="200"') +
      '<g fill="#555"><circle cx="78" cy="142" r="3"/><circle cx="90" cy="142" r="3"/><circle cx="102" cy="142" r="3"/><rect x="250" y="139" width="40" height="6" fill="' + BLUE + '"/></g>' +
      nt(110, 120, "") + nt(170, 110, "note2") + nt(240, 118, "note3") + nt(300, 112, "") +
      /* monitors */
      '<rect x="10" y="150" width="40" height="60" rx="4" fill="#222" stroke="#444" stroke-width="2"/><circle cx="30" cy="190" r="12" fill="#333" stroke="' + ORANGE + '" stroke-width="2"/>' +
      '<rect x="350" y="150" width="40" height="60" rx="4" fill="#222" stroke="#444" stroke-width="2"/><circle cx="370" cy="190" r="12" fill="#333" stroke="' + ORANGE + '" stroke-width="2"/>' +
      tag("STORCH", 150, 70, 34, ORANGE, -5),
      sky("s3", "#1b1530", "#2a2240"));
  }

  /* 4. Star Island, Miami: the white waterfront mansion, a yacht on the bay, a red sports car in the drive */
  function starisland() {
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<g class="cld"><ellipse cx="0" cy="40" rx="50" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<g class="cld cld2"><ellipse cx="0" cy="22" rx="36" ry="6" fill="#fff" opacity=".5"/></g>' +
      /* mansion */
      '<rect x="40" y="80" width="230" height="90" fill="#f7f5ef"/><rect x="110" y="50" width="100" height="34" fill="#f7f5ef"/>' +
      '<path d="M30 80h250l-10-10H40z" fill="#d9d3c4"/><path d="M104 50h112l-8-8H112z" fill="#d9d3c4"/>' +
      '<g fill="#7fd3ff" opacity=".85"><rect x="56" y="94" width="40" height="30"/><rect x="108" y="94" width="40" height="30"/><rect x="160" y="94" width="40" height="30"/><rect x="212" y="94" width="40" height="30"/>' +
      '<rect x="124" y="58" width="30" height="20"/><rect x="166" y="58" width="30" height="20"/><rect x="56" y="134" width="196" height="30"/></g>' +
      palm(26, 172, 80) + palm(290, 172, 90) +
      /* drive + car */
      '<rect x="0" y="170" width="300" height="12" fill="#e2dccb"/>' +
      '<g transform="translate(150 152)"><path d="M0 18h70v-6l-14-8h-30l-14 8h-12z" fill="' + RED + '" stroke="#111" stroke-width="1.5"/><rect x="28" y="6" width="22" height="6" fill="#bfe6ff"/><circle cx="14" cy="19" r="5" fill="#111"/><circle cx="56" cy="19" r="5" fill="#111"/></g>' +
      /* water */
      '<rect x="0" y="182" width="400" height="78" fill="#1aa3c2"/>' +
      '<g class="wv"><path d="M0 200q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bff3ff" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path d="M0 236q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bff3ff" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* yacht */
      '<g class="bob"><path d="M250 214h140l-14 18h-116z" fill="#fff" stroke="#333" stroke-width="2"/><rect x="276" y="198" width="80" height="16" rx="3" fill="#fff" stroke="#333" stroke-width="2"/><rect x="292" y="188" width="44" height="12" rx="3" fill="#fff" stroke="#333" stroke-width="2"/>' +
      '<rect x="282" y="202" width="66" height="6" fill="#203a5a"/><rect x="298" y="191" width="32" height="5" fill="#203a5a"/></g>',
      sky("s4", "#3aa6e8", "#bfe9ff"));
  }

  /* 5. Broad & South: green street signs, wall tagged STORCH, City Hall tower with the statue on top behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      /* City Hall tower: light granite/marble, clock, statue */
      '<g transform="translate(286 0)">' +
        '<rect x="20" y="150" width="96" height="70" fill="#d8cdb6"/>' +
        '<rect x="44" y="64" width="48" height="90" fill="#d8cdb6"/><rect x="40" y="60" width="56" height="8" fill="#c4b89e"/>' +
        '<rect x="50" y="40" width="36" height="22" fill="#c9bfa8"/><circle cx="68" cy="51" r="8" fill="#f4f1e8" stroke="#6b5a3a" stroke-width="1.5"/><path d="M68 51v-5M68 51h4" stroke="#333" stroke-width="1.2"/>' +
        '<path d="M52 40q16-18 32 0z" fill="#b8a98a"/><rect x="66" y="12" width="4" height="12" fill="#6b5a3a"/><circle cx="68" cy="10" r="3" fill="#6b5a3a"/>' +
        '<g fill="#9a8e74">' + [0, 1, 2, 3].map(i => '<rect x="' + (52 + (i % 2) * 22) + '" y="' + (80 + Math.floor(i / 2) * 30) + '" width="10" height="18" rx="5"/>').join("") + '</g>' +
        '<rect x="56" y="24" width="24" height="6" fill="#c4b89e" class="tw"/>' +
      '</g>' +
      /* brick wall */
      '<rect x="0" y="120" width="260" height="100" fill="#8b3a2b"/><rect x="0" y="120" width="260" height="100" fill="url(#s5b)" opacity=".35"/>' +
      tag("STORCH", 20, 180, 44, ORANGE, -6) + tag("LEAN BACK", 70, 208, 18, "#9ad1ff", -3) +
      /* sidewalk + street */
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      '<g class="car"><rect x="0" y="236" width="48" height="14" rx="5" fill="' + BLUE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="272" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(232, 96, 86, "S BROAD ST") + sign(242, 116, 66, "SOUTH ST"),
      sky("s5", "#141a3a", "#e0703a") + '<pattern id="s5b" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v10" stroke="#3a1a12" stroke-width="1"/></pattern>');
  }

  window.SCENES = { train, southst, keys, starisland, corner };
})();
