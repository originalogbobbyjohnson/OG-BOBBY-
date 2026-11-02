/* Staten Island opening scenes for The Truth's game. Four seasons, like his EPs (Winter, Summer, Autumn). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fall{from{transform:translateY(-30px)}to{transform:translateY(290px)}}' +
    '.sn{animation:fall 6s linear infinite}.sn2{animation-duration:8s;animation-delay:-3s}.sn3{animation-duration:7s;animation-delay:-5s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}50%{transform:translate(18px,130px) rotate(180deg)}100%{transform:translate(-6px,290px) rotate(360deg)}}' +
    '.lf{animation:leaf 7s linear infinite;transform-box:fill-box;transform-origin:center}.lf2{animation-delay:-2.3s;animation-duration:8.5s}.lf3{animation-delay:-4.6s;animation-duration:6.4s}' +
    '@keyframes sail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}' +
    '.sail{animation:sail 24s linear infinite}.sail2{animation-delay:-12s;animation-duration:30s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 2.2s ease-in-out infinite}' +
    '@keyframes shim{0%,100%{opacity:.35}50%{opacity:.95}}' +
    '.shim{animation:shim 2.8s ease-in-out infinite}.shim2{animation-delay:1.3s}' +
    '@keyframes cruise{from{transform:translateX(-190px)}to{transform:translateX(440px)}}' +
    '.cruise{animation:cruise 9s linear infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.whl{animation:spin .6s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.spot{animation:sweep 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}.spot2{animation-delay:-2s}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.hd{animation:jump .9s ease-in-out infinite}.hd2{animation-delay:.3s}.hd3{animation-delay:.6s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.tw{animation:twinkle 1.6s ease-in-out infinite}.tw2{animation-delay:.5s}.tw3{animation-delay:1.1s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway bullet: blue rounded tag, white SIR */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffd23f", ICE = "#8fd3ff", RUST = "#e8553a";
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 3 ? " tw" + (i % 3 + 1) : "") + '" cx="' + ((i * 89 + 13) % 400) + '" cy="' + (6 + (i * 47) % 60) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const snow = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="sn' + (i % 3 ? " sn" + (i % 3 + 1) : "") + '" cx="' + ((i * 61 + 7) % 400) + '" cy="' + ((i * 37) % 120 - 40) + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff" opacity=".9"/>'; return s; };
  const leaves = () => {
    const c = ["#e8553a", "#f29e2e", "#ffd23f", "#b8432a"]; let s = "";
    for (let i = 0; i < 12; i++) s += '<path class="lf' + (i % 3 ? " lf" + (i % 3 + 1) : "") + '" d="M' + ((i * 37 + 11) % 400) + ' ' + ((i * 23) % 60) + 'q5-6 10 0q-5 6-10 0z" fill="' + c[i % 4] + '"/>';
    return s;
  };

  /* 1. Winter: the SIR train pulls into St. George in the snow; the Stuyvesant Pl exit up to Hamilton Av, Curtis High's tower on the hill */
  function station() {
    let windows = "";
    for (let x = 30; x < 290; x += 40) windows += '<rect x="' + x + '" y="134" width="26" height="20" rx="3" fill="#ffe9a8" opacity=".9"/>';
    let posts = "";
    for (let x = 20; x <= 400; x += 76) posts += '<rect x="' + (x - 3) + '" y="56" width="6" height="66" fill="#3b4656"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#w1)"/>' + stars(10) +
      '<path d="M0 122V100l40-8 50 10 60-14 70 12 60-10 60 12 60-6v26z" fill="#1d2a3c"/>' +
      /* Curtis High's crenellated tower up the hill */
      '<rect x="40" y="70" width="34" height="34" fill="#5a3a3a"/>' + [40, 49, 58, 67].map(x => '<rect x="' + x + '" y="64" width="6" height="7" fill="#5a3a3a"/>').join("") + '<rect x="16" y="88" width="82" height="16" fill="#4a3030"/>' +
      '<rect class="flk" x="52" y="78" width="10" height="10" fill="#ffe9a8"/>' +
      '<text x="57" y="62" text-anchor="middle" ' + FONT + ' font-size="7" fill="#c8d8f0">CURTIS H.S.</text>' +
      /* canopy roof with snow on it */
      '<rect x="0" y="48" width="400" height="10" fill="#3b4656"/><rect x="0" y="44" width="400" height="5" rx="2" fill="#f4f8ff"/>' + posts +
      /* black station sign */
      '<rect x="112" y="64" width="160" height="32" rx="4" fill="#111"/><rect x="112" y="64" width="160" height="4" fill="#fff"/>' +
      '<text x="124" y="88" ' + FONT + ' font-size="16" fill="#fff">St. George</text>' + sir(244, 81) +
      '<rect x="282" y="62" width="112" height="36" rx="3" fill="#111"/>' +
      '<text x="338" y="77" text-anchor="middle" ' + FONT + ' font-size="9" fill="#fff">EXIT → Stuyvesant Pl</text>' +
      '<text x="338" y="91" text-anchor="middle" ' + FONT + ' font-size="9" fill="' + GOLD + '">up to Hamilton Av</text>' +
      '<rect x="0" y="118" width="400" height="74" fill="#121a26"/>' +
      /* the SIR car: stainless with the blue band, snow on the roof */
      '<g class="anim-train">' +
        '<rect x="10" y="124" width="300" height="58" rx="8" fill="#c7ccd4" stroke="#69707c" stroke-width="2"/>' +
        '<rect x="12" y="121" width="296" height="5" rx="2" fill="#f4f8ff"/>' +
        '<rect x="10" y="162" width="300" height="6" fill="#0039a6"/>' + windows +
        '<rect x="292" y="134" width="12" height="20" rx="3" fill="#ffe9a8" opacity=".9"/>' +
        '<circle cx="303" cy="174" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and snowy platform */
      '<rect x="0" y="190" width="400" height="8" fill="#eab308"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#2b3442"/><path d="M0 206h400" stroke="#e9f1ff" stroke-width="5" opacity=".6"/>' +
      snow(34) +
      tag("COLD WINTER", 22, 244, 26, ICE, -4) + tag("TRUTH", 292, 246, 30, GOLD, -8),
      sky("w1", "#0a1424", "#3a5a80"));
  }

  /* 2. Summer: Seguine Mansion at Lemon Creek Park, six white columns over Prince's Bay, sailboats going by */
  function seguine() {
    let cols = "";
    for (let i = 0; i < 6; i++) cols += '<rect x="' + (156 + i * 22) + '" y="102" width="9" height="82" fill="#fbfaf4" stroke="#c9c4b4" stroke-width="1"/>';
    let clap = "";
    for (let y = 108; y < 184; y += 7) clap += '<path d="M146 ' + y + 'h134" stroke="#ddd8c8" stroke-width="1"/>';
    const boat = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="bob"><path d="M0 0h40l-6 8H6z" fill="#f4f4f4" stroke="#33465a"/><path d="M20 0V-34L36 -2z" fill="' + c + '"/><path d="M18 -2V-28L6 -2z" fill="#fff"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#w2)"/>' +
      /* summer sun */
      '<circle cx="64" cy="48" r="22" fill="#ffe27a"/><circle class="shim" cx="64" cy="48" r="32" fill="#ffe27a" opacity=".3"/>' +
      /* the bay behind the house */
      '<rect x="0" y="150" width="400" height="44" fill="#3f8fc4"/>' +
      '<path class="shim" d="M20 162h40M300 170h50M90 178h30" stroke="#d9f1ff" stroke-width="2"/><path class="shim shim2" d="M340 158h30M30 184h40" stroke="#d9f1ff" stroke-width="2"/>' +
      '<g class="sail">' + boat(0, 160, 1, RUST) + '</g><g class="sail sail2">' + boat(0, 156, 0.7, "#0039a6") + '</g>' +
      /* the mansion: white clapboard, gallery, pediment with the fanlight */
      '<rect x="146" y="104" width="134" height="80" fill="#f1eee2"/>' + clap +
      '<rect x="146" y="138" width="134" height="5" fill="#fbfaf4" stroke="#c9c4b4"/>' +
      '<path d="M140 104L213 62l73 42z" fill="#fbfaf4" stroke="#c9c4b4" stroke-width="1.5"/>' +
      '<path d="M199 98a14 14 0 0 1 28 0z" fill="#5d6a74" stroke="#fbfaf4" stroke-width="1.5"/><path d="M213 84v14M204 88l9 10M222 88l-9 10" stroke="#fbfaf4" stroke-width="1"/>' +
      '<rect x="138" y="100" width="150" height="5" fill="#fbfaf4" stroke="#c9c4b4"/>' + cols +
      '<rect x="168" y="152" width="12" height="20" fill="#2e3b45"/><rect x="246" y="152" width="12" height="20" fill="#2e3b45"/><rect x="206" y="150" width="14" height="34" fill="#2e3b45"/>' +
      '<rect x="168" y="114" width="12" height="18" fill="#2e3b45"/><rect x="246" y="114" width="12" height="18" fill="#2e3b45"/><rect x="207" y="114" width="12" height="18" fill="#2e3b45"/>' +
      '<rect x="136" y="184" width="154" height="6" fill="#d8d3c3"/>' +
      /* summer trees */
      '<circle cx="104" cy="140" r="30" fill="#2f7d3a"/><circle cx="84" cy="156" r="22" fill="#3a9447"/><rect x="100" y="160" width="7" height="30" fill="#5a3b22"/>' +
      '<circle cx="330" cy="132" r="34" fill="#2f7d3a"/><circle cx="356" cy="152" r="22" fill="#3a9447"/><rect x="328" y="160" width="7" height="30" fill="#5a3b22"/>' +
      /* the sloping lawn */
      '<path d="M0 194q200-14 400 0v66H0z" fill="#4caa4f"/><path d="M0 214q200-12 400 0v46H0z" fill="#3e9442"/>' +
      '<path d="M206 190q10 30-6 70" stroke="#e8dfc4" stroke-width="10" fill="none" stroke-linecap="round"/>' +
      tag("SUMMER", 24, 246, 30, GOLD, -5),
      sky("w2", "#4aa8e8", "#bfe6ff"));
  }

  /* 3. Autumn: his father's Cadillac (Johnny P's Caddy) cruising a Staten Island block, leaves coming down */
  function caddy() {
    let houses = "";
    const hc = ["#b5653f", "#d9c8a4", "#8a9aa8", "#c7a26a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 84 - 6;
      houses += '<rect x="' + x + '" y="86" width="72" height="88" fill="' + hc[i % 4] + '"/><path d="M' + (x - 6) + ' 88l42-30 42 30z" fill="#4a3a33"/>' +
        '<rect x="' + (x + 10) + '" y="100" width="16" height="18" fill="#ffd98a" opacity=".85"/><rect x="' + (x + 46) + '" y="100" width="16" height="18" fill="#ffd98a" opacity=".85"/>' +
        '<rect x="' + (x + 28) + '" y="140" width="16" height="34" fill="#3a2a22"/><rect x="' + (x + 6) + '" y="172" width="60" height="4" fill="#efe7da"/>';
    }
    const tree = x => '<rect x="' + (x - 3) + '" y="120" width="7" height="64" fill="#4a3020"/><circle cx="' + x + '" cy="112" r="24" fill="#d8642b"/><circle cx="' + (x - 14) + '" cy="124" r="16" fill="#f29e2e"/><circle cx="' + (x + 14) + '" cy="122" r="16" fill="#b8432a"/>';
    /* long 1970s-style sedan, classic two-tone, no logos */
    const car =
      '<g transform="translate(0 176)">' +
      '<path d="M4 34V22l22-4 22-16h66l20 16 38 4 4 12z" fill="#7a1420" stroke="#2a0a0e" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M50 4h62l16 14H38z" fill="#f2efe6"/><path d="M58 8h22v9H46zM86 8h22l12 9H86z" fill="#a9d4ee"/>' +
      '<path d="M4 26h170" stroke="#e6e6e6" stroke-width="2"/><rect x="170" y="22" width="8" height="6" fill="#fff6c2"/><rect x="2" y="22" width="6" height="6" fill="#ff4d4d"/>' +
      '<g transform="translate(40 34)"><circle r="10" fill="#151515"/><g class="whl"><circle r="6" fill="#d9d9d9"/><path d="M-6 0h12M0-6v12" stroke="#777" stroke-width="2"/></g></g>' +
      '<g transform="translate(140 34)"><circle r="10" fill="#151515"/><g class="whl"><circle r="6" fill="#d9d9d9"/><path d="M-6 0h12M0-6v12" stroke="#777" stroke-width="2"/></g></g>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#w3)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffcf7a" opacity=".9"/>' + houses +
      tree(40) + tree(206) + tree(370) +
      '<rect x="0" y="184" width="400" height="76" fill="#2c2f36"/><rect x="0" y="182" width="400" height="5" fill="#9b958a"/>' +
      '<path d="M0 232h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<path d="M30 190q4-3 8 0M120 194q4-3 8 0M260 189q4-3 8 0M330 195q4-3 8 0" stroke="#d8642b" stroke-width="3" fill="none"/>' +
      '<g class="cruise">' + car + '</g>' + leaves() +
      tag("AUTUMN", 20, 50, 30, RUST, -6) + tag("JOHNNY P", 250, 252, 22, GOLD, -3),
      sky("w3", "#2a1f3d", "#d9825a"));
  }

  /* 4. Curtis High School (Hamilton Av & St. Marks Pl, 1904): Staten Island's first high school, Collegiate Gothic brick with the crenellated center tower, right at his corner; leaves coming down */
  function stage() {
    let br = ""; for (let y = 96; y < 214; y += 8) for (let x = (y / 8) % 2 ? 20 : 28; x < 372; x += 16) br += '<rect x="' + x + '" y="' + y + '" width="13" height="5" fill="#8a3e2a" opacity=".6"/>';
    const crenel = (x, w, y) => { let s = ""; for (let i = x; i < x + w; i += 12) s += '<rect x="' + i + '" y="' + (y - 8) + '" width="7" height="8" fill="#e8dcc0"/>'; return s; };
    const gwin = (x, y) => '<path d="M' + x + ' ' + (y + 30) + 'V' + (y + 8) + 'l9-10 9 10V' + (y + 30) + 'z" fill="#2a3446" stroke="#e8dcc0" stroke-width="2"/><path d="M' + (x + 9) + ' ' + y + 'V' + (y + 30) + '" stroke="#e8dcc0" stroke-width="1.5"/>';
    let wins = ""; [40, 80, 120, 262, 302, 342].forEach(x => { wins += gwin(x, 112) + gwin(x, 164); });
    return svg(
      '<rect width="400" height="260" fill="url(#c4)"/>' +
      /* wings */
      '<rect x="20" y="92" width="360" height="122" fill="#a24a32"/>' + br + '<rect x="16" y="88" width="368" height="6" fill="#e8dcc0"/>' + crenel(18, 364, 88) + wins +
      /* center tower */
      '<rect x="160" y="34" width="80" height="180" fill="#a8503a"/>' + '<rect x="156" y="30" width="88" height="6" fill="#e8dcc0"/>' + crenel(158, 86, 30) +
      '<rect x="156" y="34" width="8" height="180" fill="#e8dcc0"/><rect x="236" y="34" width="8" height="180" fill="#e8dcc0"/>' +
      gwin(181, 52) + gwin(201, 52) +
      '<path d="M176 214V160l24-24 24 24v54z" fill="#3a2a22" stroke="#e8dcc0" stroke-width="3"/>' +
      '<rect x="168" y="96" width="64" height="18" fill="#e8dcc0"/><text x="200" y="109" text-anchor="middle" ' + FONT + ' font-size="10" fill="#5a2a1a">CURTIS</text>' +
      '<rect x="198" y="2" width="3" height="22" fill="#ddd"/><g class="bob"><rect x="201" y="4" width="22" height="13" fill="#fff"/><rect x="201" y="4" width="9" height="7" fill="#3a4a8a"/><rect x="210" y="7" width="13" height="2" fill="#c8102e"/><rect x="210" y="12" width="13" height="2" fill="#c8102e"/></g>' +
      /* lawn and street */
      '<rect x="0" y="214" width="400" height="20" fill="#4f8a3a"/><rect x="0" y="234" width="400" height="26" fill="#2b2b30"/>' +
      leaves() +
      tag("TRUTH", 18, 254, 22, GOLD, -4) +
      '<text x="250" y="251" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">CURTIS H.S. · 1904 · HAMILTON AV &amp; ST. MARKS PL</text>',
      sky("c4", "#f2a04a", "#fde3b0"));
  }
  /* 5. St. George: Stuyvesant Pl and Hamilton Av, the STATEN wall with his name on it */
  /* the Verrazzano-Narrows Bridge as a backdrop, seen from Staten Island: gray-steel towers (two legs + cross struts),
     long suspension cables with hangers, the deck, blinking red tower-top beacons and car lights crossing.
     o.t = towers [{x, top, deck, foot, w}], o.al / o.ar = deck ends [x, y], o.sag = lowest y of the main cable */
  const vzb = function (o) {
    const C = o.col || "#8d96a0", K = o.cab || C, D = o.dk || C, T = o.t, r1 = v => Math.round(v * 10) / 10;
    let s = "";
    const pts = [o.al].concat(T.map(t => [t.x, t.deck])).concat([o.ar]).filter(Boolean);
    const dy = x => { for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; if ((x - a[0]) * (x - b[0]) <= 0) return a[1] + (b[1] - a[1]) * ((x - a[0]) / ((b[0] - a[0]) || 1)); } return pts[0][1]; };
    const bz = (p0, c, p2, u) => [(1 - u) * (1 - u) * p0[0] + 2 * (1 - u) * u * c[0] + u * u * p2[0], (1 - u) * (1 - u) * p0[1] + 2 * (1 - u) * u * c[1] + u * u * p2[1]];
    const cab = (p0, c, p2, n, lit) => {
      let h = "", l = "";
      for (let i = 1; i < n; i++) { const p = bz(p0, c, p2, i / n); h += 'M' + r1(p[0]) + ' ' + r1(p[1]) + 'V' + r1(dy(p[0])); }
      if (lit) for (let i = 0; i <= n; i++) { const p = bz(p0, c, p2, i / n); l += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="' + (o.lr || 1.1) + '" fill="#fff4c8"' + (i % 4 ? '' : '><animate attributeName="opacity" values="1;.35;1" dur="2.4s" begin="' + (i % 3) * .7 + 's" repeatCount="indefinite"/></circle') + (i % 4 ? '/>' : '>') ; }
      return '<path d="' + h + '" stroke="' + K + '" stroke-width="' + (o.hw || .5) + '" opacity=".75"/>' +
        '<path d="M' + r1(p0[0]) + ' ' + r1(p0[1]) + 'Q' + r1(c[0]) + ' ' + r1(c[1]) + ' ' + r1(p2[0]) + ' ' + r1(p2[1]) + '" stroke="' + K + '" stroke-width="' + (o.cw || 1.4) + '" fill="none"/>' + l;
    };
    const n = o.n || 18;
    if (T.length > 1) {
      const a = [T[0].x, T[0].top + 1], b = [T[1].x, T[1].top + 1], sg = o.sag != null ? o.sag : Math.max(a[1], b[1]) + (T[0].deck - T[0].top) * .8;
      s += cab(a, [(a[0] + b[0]) / 2, (4 * sg - a[1] - b[1]) / 2], b, n, o.lit);
    }
    if (o.al) { const t = T[0], a = [t.x, t.top + 1]; s += cab(o.al, [o.al[0] + (a[0] - o.al[0]) * .55, o.al[1] - (o.al[1] - a[1]) * .25], a, Math.max(3, n / 3 | 0), o.lit); }
    if (o.ar && T.length > 1) { const t = T[T.length - 1], a = [t.x, t.top + 1]; s += cab(a, [a[0] + (o.ar[0] - a[0]) * .45, o.ar[1] - (o.ar[1] - a[1]) * .25], o.ar, Math.max(3, n / 3 | 0), o.lit); }
    const dp = 'M' + pts.map(p => r1(p[0]) + ' ' + r1(p[1])).join('L');
    s += '<path d="' + dp + '" stroke="' + D + '" stroke-width="' + (o.dt || 3) + '" fill="none" stroke-linejoin="round"/>' +
      '<path d="' + dp + '" stroke="' + (o.dl || "#c7cdd4") + '" stroke-width=".6" fill="none" opacity=".7" transform="translate(0 ' + (-(o.dt || 3) / 2) + ')"/>';
    T.forEach(t => { s += vzb.tw(t.x, t.top, t.foot, t.w, C, t.deck, o.hi); });
    if (o.cars !== false) s += '<circle r="' + (o.car || 1.3) + '" fill="#fff6c8"><animateMotion dur="' + (o.cd || 6) + 's" repeatCount="indefinite" path="' + dp + '"/></circle>' +
      '<circle r="' + (o.car || 1.3) + '" fill="#ff5a4a"><animateMotion dur="' + (o.cd || 6) * 1.3 + 's" begin="-2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear" path="' + dp + '"/></circle>';
    return '<g opacity="' + (o.op || 1) + '">' + s + '</g>';
  };
  /* one tower: two tapered legs with cross struts, a beacon on each leg top */
  vzb.tw = function (x, top, foot, w, C, deck, hi) {
    const ht = w * .36, hf = w * .5, lt = Math.max(1.2, w * .2), sh = Math.max(1, w * .12), r1 = v => Math.round(v * 10) / 10;
    const at = (y, sd) => x + sd * (ht + (hf - ht) * ((y - top) / (foot - top)));
    let s = "";
    [-1, 1].forEach(sd => {
      s += '<path d="M' + r1(x + sd * ht) + ' ' + top + 'L' + r1(x + sd * (ht - lt)) + ' ' + top + 'L' + r1(x + sd * (hf - lt)) + ' ' + foot + 'L' + r1(x + sd * hf) + ' ' + foot + 'z" fill="' + C + '"/>';
      if (hi) s += '<path d="M' + r1(x + sd * (ht - lt * .5)) + ' ' + top + 'L' + r1(x + sd * (hf - lt * .5)) + ' ' + foot + '" stroke="' + hi + '" stroke-width="' + r1(Math.max(.4, lt * .3)) + '" opacity=".6"/>';
    });
    const d = deck != null ? deck : top + (foot - top) * .7;
    [top, top + (d - top) * .3, top + (d - top) * .62, d + sh * 1.5].forEach(y => {
      const l = at(y, -1) + lt * .8, rr = at(y, 1) - lt * .8;
      s += '<rect x="' + r1(l) + '" y="' + r1(y) + '" width="' + r1(rr - l) + '" height="' + r1(sh) + '" fill="' + C + '"/>';
    });
    [-1, 1].forEach((sd, i) => { s += '<circle cx="' + r1(x + sd * (ht - lt / 2)) + '" cy="' + r1(top - 1) + '" r="' + r1(Math.max(1.1, w * .06)) + '" fill="#ff3b30"><animate attributeName="opacity" values="1;1;.1;.1;1" dur="1.6s" begin="' + i * .2 + 's" repeatCount="indefinite"/></circle>'; });
    return s;
  };
  function corner() {
    let bricks = "";
    for (let y = 60; y < 222; y += 12) for (let x = (y / 12) % 2 ? 6 : -14; x < 262; x += 40) bricks += '<rect x="' + x + '" y="' + y + '" width="38" height="10" fill="#6a3426"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#w5)"/>' + stars(14) +
      vzb({"t":[{"x":274,"top":34,"deck":150,"foot":222,"w":18},{"x":386,"top":34,"deck":150,"foot":222,"w":18}],"al":[200,160],"ar":[440,156],"sag":128,"n":18,"col":"#aab3bd","hi":"#e3e8ee","cab":"#c9d0d8","dt":5,"cw":1.6,"lit":true}) +
      '<rect x="0" y="58" width="262" height="164" fill="#4f271d"/><g clip-path="url(#wall)">' + bricks + '</g>' +
      '<rect x="0" y="54" width="262" height="6" fill="#2a1a14"/>' +
      tag("THE TRUTH", 18, 132, 40, GOLD, -7) + tag("STATEN", 60, 188, 32, ICE, -3) +
      '<text x="196" y="212" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="13" fill="#fff" opacity=".85">I walk alone</text>' +
      /* streetlight */
      '<rect x="300" y="54" width="5" height="168" fill="#1d2329"/><path d="M302 56h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 60h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 68h26l34 154h-94z" fill="#ffe7a8"/></g>' +
      /* green street signs */
      '<rect x="256" y="92" width="96" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="105" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Stuyvesant Pl</text>' +
      '<rect x="262" y="114" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="127" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Hamilton Av</text>' +
      '<rect x="0" y="222" width="400" height="38" fill="#15191f"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("w5", "#0b1626", "#27466a") + '<clipPath id="wall"><rect x="0" y="58" width="262" height="164"/></clipPath>');
  }

  window.SCENES = { station, seguine, caddy, stage, corner };
})();
