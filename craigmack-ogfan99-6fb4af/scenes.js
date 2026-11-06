/* Craig Mack game: Brentwood, Long Island. CR 13 up Crooked Hill Rd, the Manhattan club curb where he rhymed his way onto the label, the black-and-white Flava in Ya Ear video set, on the road with the Hit Squad, Third Av & First St with the Modern Times School behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}.slow{animation-duration:6s}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}.swt{transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(-70px);opacity:0}}.rise{animation:rise 3.6s linear infinite}.r2{animation-delay:-1.2s}.r3{animation-delay:-2.4s}' +
    '@keyframes slide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.slide{animation:slide 9s linear infinite}.sl2{animation-delay:-4.5s}.slw{animation-duration:20s}' +
    '@keyframes slideb{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.slideb{animation:slideb 7s linear infinite}.sb2{animation-delay:-3.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bob{animation:bob 1.8s ease-in-out infinite}.bo2{animation-delay:-.9s}' +
    '@keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes pop{0%,100%{transform:scale(.88)}50%{transform:scale(1.08)}}.pop{animation:pop .9s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-40px)}}.hop{animation:hop 1.1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,240px) rotate(300deg);opacity:0}}.fall{animation:fall 6s linear infinite}.f2{animation-delay:-2s}.f3{animation-delay:-4s}' +
    '@keyframes fly{0%{transform:translate(-60px,20px)}50%{transform:translate(200px,-10px)}100%{transform:translate(460px,20px)}}.fly{animation:fly 10s linear infinite}' +
    '@keyframes ride{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '@keyframes beam{0%,100%{transform:rotate(-35deg)}50%{transform:rotate(35deg)}}.beam{animation:beam 4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const bgsky = (top, bottom) => '<rect width="400" height="260" fill="url(#sk)"/>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot == null ? -6 : rot) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + FONT + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect' + (on && (r + c) % 3 === 0 ? ' class="pls' + ((r + c) % 2 ? ' p2' : '') + '"' : '') + ' x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"/>'; } return s; };
  /* MTA subway bullet (circle) and commuter rail pill */
  const bullet = (x, y, l, col, r) => { r = r || 11; const dark = col === "#fccc0a"; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>' + txt(l, x, y + r * 0.42, r * 1.25, dark ? "#000" : "#fff"); };
  const pill = (x, y, l, col) => { const w = l.length * 9 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 11) + '" width="' + w + '" height="22" rx="11" fill="' + col + '"/>' + txt(l, x, y + 5, 12, "#fff"); };
  const badges = (x, y, lines) => lines.map((t, i) => t[0].length > 1 ? pill(x + i * 46, y, t[0], t[1]) : bullet(x + i * 26, y, t[0], t[1])).join("");
  const stSign = (x, y, w, name, lines) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    txt(name, x + 12, y + 24, 16, "#fff", "start") + badges(x + w - (lines[0][0].length > 1 ? 34 : 18) - (lines.length - 1) * (lines[0][0].length > 1 ? 46 : 26), y + 17, lines);
  const blade = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, cx, y + 13, 11, "#fff"); };
  /* a spinning record seen at an angle */
  const deck = (cx, cy, rx, col) => '<g transform="translate(' + cx + ' ' + cy + ') scale(1 .22)"><g class="spin"><circle r="' + rx + '" fill="#111"/><circle r="' + rx * .7 + '" fill="none" stroke="#2a2a2a" stroke-width="2"/><circle r="' + rx * .28 + '" fill="' + col + '"/><rect x="' + rx * .3 + '" y="-3" width="' + rx * .6 + '" height="6" fill="#444"/></g></g>';
  /* a subway car: stainless, w long, top-left at x,y */
  const car = (x, y, w, lines, band) => { let win = ""; for (let i = x + 16; i < x + w - 70; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + (band ? '<rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="' + band + '"/>' : '') + win +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + badges(x + w - 44, y + 20, lines.slice(0, 1)); };

  /* 1a. elevated subway station */
  function elStation(o) {
    let hs = "";
    [[0, 150, "#8a5a44"], [70, 160, "#6a7a8a"], [300, 156, "#9a6a4a"], [350, 146, "#5a6a5a"]].forEach(b => { hs += '<rect x="' + b[0] + '" y="' + b[1] + '" width="56" height="' + (236 - b[1]) + '" fill="' + b[2] + '"/>' + windows(b[0] + 8, b[1] + 10, 2, 4, 24, 20, 14, 12, "#ffe6a8", "#3a3a48"); });
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + (o.night ? stars(20) + '<circle cx="330" cy="36" r="14" fill="#fff3c4"/>' : '<circle cx="330" cy="40" r="18" fill="#fff3c4"/>') + hs +
      '<rect x="0" y="30" width="400" height="8" fill="#3a4250"/><rect x="0" y="38" width="400" height="3" fill="' + o.lines[0][1] + '"/>' +
      '<rect x="40" y="41" width="5" height="99" fill="#59616e"/><rect x="355" y="41" width="5" height="99" fill="#59616e"/>' +
      stSign(100, 48, 200, o.name, o.lines) +
      '<g class="anim-train">' + car(10, 86, 300, o.lines) + '</g>' +
      '<rect x="0" y="140" width="400" height="7" fill="#eab308"/><rect x="0" y="147" width="400" height="16" fill="#3d4a3f"/>' +
      '<path d="M0 163h400" stroke="#2a332c" stroke-width="3"/>' + [20, 110, 200, 290, 380].map(x => '<rect x="' + (x - 5) + '" y="163" width="10" height="73" fill="#3d4a3f"/><path d="M' + (x - 22) + ' 164l17 14M' + (x + 22) + ' 164l-17 14" stroke="#3d4a3f" stroke-width="4"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="slideb"><rect x="0" y="222" width="54" height="18" rx="5" fill="' + (o.carColor || "#f2c14e") + '"/><rect x="10" y="215" width="32" height="10" rx="3" fill="#cfe6ff"/><circle cx="12" cy="240" r="5" fill="#111"/><circle cx="42" cy="240" r="5" fill="#111"/></g>' +
      (o.tag ? tag(o.tag[0], 230, 214, 24, o.tag[1], -4) : ''),
      sky("sk", o.sky[0], o.sky[1]));
  }
  /* 1b. underground subway station: tiles, mosaic band, columns, train in the tunnel */
  function underStation(o) {
    let tiles = "";
    for (let y = 0; y < 132; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d4c6" stroke-width="1"/>';
    let mos = ""; for (let x = 0; x < 400; x += 16) mos += '<rect x="' + x + '" y="20" width="14" height="14" fill="' + ((x / 16) % 2 ? o.tile[0] : o.tile[1]) + '"/>';
    return svg('<rect width="400" height="260" fill="#ece6d6"/>' + tiles + '<rect x="0" y="16" width="400" height="22" fill="' + o.tile[2] + '"/>' + mos +
      stSign(o.sx || 100, 50, o.sw || 200, o.name, o.lines) +
      '<rect x="0" y="92" width="400" height="98" fill="#1a1c22"/><circle class="pls" cx="390" cy="104" r="4" fill="#7cf29a"/>' +
      '<g class="anim-train">' + car(20, 108, 320, o.lines) + '</g>' +
      [30, 140, 260, 370].map(x => '<rect x="' + (x - 6) + '" y="86" width="12" height="104" fill="#1b2a3a"/><rect x="' + (x - 9) + '" y="86" width="18" height="6" fill="#1b2a3a"/>').join("") +
      '<rect x="0" y="190" width="400" height="8" fill="#eab308"/><rect x="0" y="198" width="400" height="62" fill="#8f8a80"/>' +
      '<g class="bob"><circle cx="70" cy="218" r="7" fill="#3a2a22"/><rect x="62" y="225" width="16" height="30" rx="5" fill="' + o.tile[0] + '"/></g>' +
      '<g class="flk"><rect x="240" y="0" width="80" height="6" fill="#fffbe6"/></g>' +
      (o.tag ? tag(o.tag[0], 180, 246, 26, o.tag[1], -4) : ''), "");
  }
  /* 1c. commuter rail platform (LIRR / Metro-North) */
  function railStation(o) {
    const line = o.line, col = "#0039a6";
    let win = ""; for (let i = 26; i < 330; i += 40) win += '<rect x="' + i + '" y="100" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    const scenery = o.river ? '<rect x="0" y="120" width="400" height="40" fill="#3b6a8a"/><path d="M0 120q60-40 120-30t120-8 160 14v24H0z" fill="#5a6a4a"/><path class="slide slw" d="M0 150h40l-6 6H6z" fill="#fff"/>'
      : '<path d="M0 150q50-30 110-20t130-10 160 20v20H0z" fill="#4a6a3a"/>' + [40, 120, 280, 350].map((x, i) => '<g class="sway' + (i % 2 ? ' sw2' : '') + '"><rect x="' + (x - 3) + '" y="120" width="6" height="30" fill="#5a3a22"/><circle cx="' + x + '" cy="112" r="18" fill="#3f7a3a"/></g>').join("");
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="60" cy="40" r="16" fill="#fff3c4"/>' + scenery +
      '<rect x="0" y="26" width="400" height="10" fill="#3a4250"/><rect x="0" y="36" width="400" height="3" fill="' + col + '"/>' +
      '<rect x="30" y="39" width="5" height="120" fill="#59616e"/><rect x="365" y="39" width="5" height="120" fill="#59616e"/>' +
      stSign(200 - Math.max(208, o.name.length * 9.6 + 70) / 2, 46, Math.max(208, o.name.length * 9.6 + 70), o.name, [[line, col]]) +
      '<g class="anim-train"><rect x="10" y="88" width="340" height="66" rx="8" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/><rect x="10" y="128" width="340" height="7" fill="' + col + '"/>' +
      (line === "MN" ? '' : '<rect x="10" y="135" width="340" height="3" fill="#6a2c91"/>') + win +
      '<rect x="318" y="96" width="26" height="24" rx="3" fill="#1d2a3a"/><circle cx="342" cy="146" r="4" fill="#fff6c2"/>' + pill(300, 146, line, col) + '</g>' +
      '<rect x="0" y="154" width="400" height="10" fill="#4a4e56"/><rect x="0" y="164" width="400" height="8" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#a9a398"/>' +
      '<rect x="60" y="182" width="62" height="20" rx="2" fill="#5a3a22"/><rect x="64" y="202" width="4" height="12" fill="#333"/><rect x="114" y="202" width="4" height="12" fill="#333"/>' +
      '<rect x="300" y="176" width="6" height="40" fill="#2b2f36"/><rect x="286" y="170" width="34" height="12" rx="2" fill="#111"/><text class="blk" x="303" y="179" text-anchor="middle" font-family="monospace" font-size="7" fill="#ffb020">ON TIME</text>' +
      (o.tag ? tag(o.tag[0], 150, 240, 26, o.tag[1], -4) : ''),
      sky("sk", o.sky[0], o.sky[1]));
  }
  /* 5. the corner */
  function corner(o) {
    const t = o.tags, fit = (x, d) => Math.min(x[2] || d, Math.floor(214 / (x[0].length * 0.7)));
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) + (o.nomoon ? '' : '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>') + (o.bd || '') +
      brick(16, 60, 240, 160, o.wall || "#4a2a24", o.mortar || "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' +
      tag(t[0][0], 28, 130, fit(t[0], 54), t[0][1], -7) + tag(t[1][0], 34, 160, fit(t[1], 22), t[1][1], -4) + tag(t[2][0], 30, 190, fit(t[2], 24), t[2][1], -3) + (t[3] ? tag(t[3][0], 60, 212, fit(t[3], 20), t[3][1], -2) : '') +
      '<rect class="drp" x="120" y="132" width="3" height="8" fill="' + t[0][1] + '"/><rect class="drp" x="186" y="118" width="3" height="8" fill="' + t[0][1] + '" style="animation-delay:-1s"/>' +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      blade(302, 88, o.s1) + blade(302, 110, o.s2) +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="slide sl2"><rect x="0" y="226" width="60" height="18" rx="5" fill="#f2c14e"/><rect x="12" y="219" width="34" height="10" rx="3" fill="#cfe6ff"/><circle cx="14" cy="244" r="5" fill="#111"/><circle cx="46" cy="244" r="5" fill="#111"/></g>',
      sky("sk", o.sky ? o.sky[0] : "#0d1022", o.sky ? o.sky[1] : "#2a3a4a"));
  }
  const ground = (c) => '<rect x="0" y="236" width="400" height="24" fill="' + (c || "#2a2d33") + '"/>';
  const cars = () => '<g class="slide"><rect x="0" y="230" width="56" height="16" rx="5" fill="#d7263d"/><rect x="12" y="223" width="30" height="10" rx="3" fill="#cfe6ff"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="44" cy="246" r="5" fill="#111"/></g>' +
    '<g class="slideb sb2"><rect x="0" y="230" width="56" height="16" rx="5" fill="#2f6fd6"/><rect x="14" y="223" width="30" height="10" rx="3" fill="#cfe6ff"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="44" cy="246" r="5" fill="#111"/></g>';
  const tree = (x, y, r, cls) => '<g class="sway ' + (cls || "") + '"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + r * 1.6 + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x - r * .5) + '" cy="' + (y + 4) + '" r="' + r * .7 + '" fill="#4f8f45"/></g>';

  /* ---- Craig Mack scenes ---- */
  /* county route shield: Suffolk County blue pentagon, yellow border and numbers */
  const crShield = (x, y, n) => '<path d="M' + (x - 16) + ' ' + (y - 16) + 'h32v18l-16 16-16-16z" fill="#1d4f9a" stroke="#f4c430" stroke-width="2.5"/>' + txt("SUFFOLK", x, y - 8, 5.5, "#f4c430") + txt(n, x, y + 6, 13, "#f4c430");
  /* 1. County Road 13 up Crooked Hill Rd into Brentwood: green guide sign on its posts, pine trees, a car pulling in */
  function crookedhill() {
    let pines = ""; [[20, 150], [62, 140], [104, 152], [300, 146], [342, 136], [384, 150]].forEach((p, i) => pines += '<g class="sway' + (i % 2 ? ' sw2' : '') + '"><rect x="' + (p[0] - 3) + '" y="' + (p[1] + 40) + '" width="6" height="20" fill="#5a3a22"/><path d="M' + p[0] + ' ' + p[1] + 'l-18 44h36z" fill="#2f5a34"/><path d="M' + p[0] + ' ' + (p[1] - 14) + 'l-13 32h26z" fill="#3b6e40"/></g>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="330" cy="40" r="18" fill="#fff3c4"/>' +
      '<g class="slide slw"><ellipse cx="60" cy="50" rx="30" ry="9" fill="#fff" opacity=".8"/><ellipse cx="82" cy="44" rx="18" ry="8" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 190q100-24 200-20t200 18v30H0z" fill="#6a8a4a"/>' + pines +
      '<rect x="128" y="96" width="6" height="110" fill="#8a9098"/><rect x="266" y="96" width="6" height="110" fill="#8a9098"/>' +
      '<rect x="110" y="40" width="180" height="96" rx="6" fill="#1f7a3a" stroke="#fff" stroke-width="3"/>' +
      crShield(150, 66, "13") + txt("NORTH", 200, 62, 11, "#fff", "start") +
      txt("Crooked Hill Rd", 200, 98, 17, "#fff") + txt("BRENTWOOD", 200, 124, 15, "#fff") +
      '<path d="M258 116l14-8v5h10v6h-10v5z" fill="#fff"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3d44"/><path d="M0 233h400" stroke="#f4c430" stroke-width="3" stroke-dasharray="22 14"/><rect x="0" y="206" width="400" height="3" fill="#cfd3d8"/>' +
      '<g class="anim-train"><rect x="190" y="210" width="96" height="26" rx="7" fill="#ff7a1a"/><rect x="212" y="198" width="54" height="16" rx="5" fill="#cfe6ff"/><circle cx="210" cy="238" r="8" fill="#111"/><circle cx="266" cy="238" r="8" fill="#111"/><circle cx="284" cy="222" r="3" fill="#fff6c2"/></g>' +
      '<g class="slideb"><rect x="0" y="240" width="56" height="16" rx="5" fill="#2f6fd6"/><rect x="14" y="233" width="30" height="10" rx="3" fill="#cfe6ff"/><circle cx="12" cy="256" r="4" fill="#111"/><circle cx="44" cy="256" r="4" fill="#111"/></g>',
      sky("sk", "#7fbfe8", "#f2e0b6"));
  }
  /* 2. Outside a Manhattan club, 1994: the curb where he rhymed his way onto the label. Velvet rope, brass posts, the line, marquee bulbs blinking, searchlights, a boombox on the curb */
  function club() {
    let bulbs = ""; for (let x = 92; x <= 308; x += 12) bulbs += '<circle class="blk' + ((x / 12) % 4 === 0 ? '' : (x / 12) % 4 === 1 ? ' b2' : (x / 12) % 4 === 2 ? ' b3' : ' b4') + '" cx="' + x + '" cy="80" r="3" fill="#ffd66b"/><circle class="blk' + ((x / 12) % 2 ? ' b3' : '') + '" cx="' + x + '" cy="122" r="3" fill="#ffd66b"/>';
    let line = ""; [24, 46, 66, 340, 362, 384].forEach((x, i) => line += '<g class="bob' + (i % 2 ? ' bo2' : '') + '"><circle cx="' + x + '" cy="176" r="8" fill="#141018"/><rect x="' + (x - 9) + '" y="184" width="18" height="40" rx="6" fill="' + ["#2a2238", "#3a1a2a", "#1a2a3a"][i % 3] + '"/></g>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(18) +
      '<g opacity=".18"><path class="beam" d="M90 120l300-90v24z" fill="#9fe3ff"/></g><g opacity=".14"><path class="beam" style="animation-delay:-2s" d="M310 120l300-60v24z" fill="#ff7a1a" transform="scale(-1 1) translate(-620 0)"/></g>' +
      '<rect x="0" y="40" width="400" height="196" fill="#1e1a24"/>' + windows(10, 52, 2, 3, 32, 30, 16, 14, "#ff7a1a", "#2a2533") + windows(330, 52, 2, 3, 32, 30, 16, 14, "#9fe3ff", "#2a2533") +
      '<rect x="84" y="72" width="232" height="58" rx="4" fill="#0d0b10" stroke="#c0c7d1" stroke-width="2"/>' + bulbs +
      txt("TONIGHT", 200, 108, 22, "#ff7a1a") +
      '<rect x="150" y="140" width="100" height="96" fill="#0a0a0c"/><rect x="154" y="144" width="92" height="92" fill="#2a1a10"/><circle class="pls" cx="200" cy="190" r="40" fill="#ff7a1a" opacity=".12"/>' +
      '<path d="M100 236v-36M300 236v-36" stroke="#d9a441" stroke-width="5"/><circle cx="100" cy="198" r="5" fill="#d9a441"/><circle cx="300" cy="198" r="5" fill="#d9a441"/>' +
      '<path d="M100 204q50 22 50 0M250 204q50 22 50 0" fill="none" stroke="#b0182a" stroke-width="6"/>' + line +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/>' +
      '<g class="bob"><rect x="180" y="214" width="40" height="22" rx="3" fill="#c0c7d1"/><circle cx="191" cy="225" r="7" fill="#222"/><circle cx="209" cy="225" r="7" fill="#222"/><path d="M186 214q14-12 28 0" stroke="#c0c7d1" stroke-width="3" fill="none"/></g>' +
      '<g class="rise"><text x="222" y="214" font-size="14" fill="#ff7a1a">&#9835;</text></g><g class="rise r2"><text x="170" y="210" font-size="12" fill="#fff">&#9834;</text></g>' +
      '<g class="slideb"><rect x="0" y="238" width="120" height="16" rx="5" fill="#0b0b0e"/><rect x="18" y="231" width="80" height="9" rx="3" fill="#3a4250"/><circle cx="18" cy="254" r="5" fill="#333"/><circle cx="102" cy="254" r="5" fill="#333"/></g>' +
      txt("MANHATTAN · 1994", 200, 32, 11, "#c0c7d1"),
      sky("sk", "#07070c", "#2a1a3a"));
  }
  /* 3. The black-and-white Flava in Ya Ear video set: an empty chair under one spotlight, the mic on its stand, film lights flicking, the fish-eye glow */
  function videoset() {
    return svg('<rect width="400" height="260" fill="#0b0b0c"/>' +
      '<g opacity=".9"><circle cx="200" cy="130" r="150" fill="none" stroke="#1d1d1f" stroke-width="40"/></g>' +
      '<path d="M200 0l-90 230h180z" fill="#e8e8e8" opacity=".14" class="flk"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#1a1a1c"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 60 - 40) + ' 260L200 200" stroke="#2a2a2c" stroke-width="2"/>').join("") +
      '<ellipse cx="200" cy="220" rx="96" ry="16" fill="#d9d9d9" opacity=".35"/>' +
      '<rect x="176" y="150" width="48" height="8" fill="#cfcfcf"/><rect x="178" y="110" width="44" height="42" rx="4" fill="#9a9a9a"/><path d="M180 158l-6 56M220 158l6 56M186 158l-2 50M214 158l2 50" stroke="#cfcfcf" stroke-width="4"/>' +
      '<path d="M268 216v-90" stroke="#bdbdbd" stroke-width="3"/><path d="M256 216h24" stroke="#bdbdbd" stroke-width="3"/><rect x="262" y="116" width="12" height="16" rx="6" fill="#e8e8e8"/>' +
      '<g class="sway swt"><path d="M60 0v40" stroke="#555" stroke-width="2"/><rect x="44" y="40" width="32" height="22" rx="3" fill="#2a2a2c"/><circle class="flk" cx="60" cy="62" r="6" fill="#fff"/></g>' +
      '<g class="sway swt sw2"><path d="M340 0v34" stroke="#555" stroke-width="2"/><rect x="324" y="34" width="32" height="22" rx="3" fill="#2a2a2c"/><circle class="flk flk2" cx="340" cy="56" r="6" fill="#fff"/></g>' +
      '<g transform="translate(70 176)"><rect x="-20" y="-14" width="40" height="28" rx="4" fill="#2a2a2c"/><g class="spin"><circle cx="-8" cy="-22" r="10" fill="none" stroke="#9a9a9a" stroke-width="3"/></g><g class="spin"><circle cx="12" cy="-22" r="10" fill="none" stroke="#9a9a9a" stroke-width="3"/></g><rect x="20" y="-6" width="14" height="10" fill="#444"/></g>' +
      '<path d="M70 190v26M60 216l10-26 10 26" stroke="#555" stroke-width="3" fill="none"/>' +
      '<g class="pls"><text x="330" y="236" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#e8e8e8">REC &#9679;</text></g>' +
      tag("FLAVA", 120, 96, 30, "#e8e8e8", -6), "");
  }
  /* 4. On the road with the Hit Squad: the stage seen from the wings, road cases stenciled HIT SQUAD, light rig sweeping, the crowd's hands up */
  function hitsquad() {
    let hands = ""; for (let x = 10; x < 400; x += 22) hands += '<g class="bob' + ((x / 22) % 2 ? ' bo2' : '') + '"><circle cx="' + x + '" cy="' + (214 + (x % 3) * 4) + '" r="9" fill="#4a3a5a"/><path d="M' + (x - 6) + ' ' + (210 + (x % 3) * 4) + 'l-6-22M' + (x + 6) + ' ' + (210 + (x % 3) * 4) + 'l6-22" stroke="#4a3a5a" stroke-width="4" stroke-linecap="round"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<rect x="0" y="0" width="400" height="18" fill="#2a2a30"/>' + [40, 120, 200, 280, 360].map((x, i) => '<rect x="' + (x - 8) + '" y="14" width="16" height="12" fill="#444"/><g transform="translate(' + x + ' 26)"><g class="beam" style="animation-delay:' + (-i * 0.8) + 's"><path d="M0 0L170 -14L170 14z" fill="' + ["#ff7a1a", "#9fe3ff", "#ffd66b", "#ff7a1a", "#9fe3ff"][i] + '" opacity=".22"/></g></g>').join("") +
      '<rect x="0" y="150" width="400" height="22" fill="#2a2a30"/><rect x="0" y="146" width="400" height="5" fill="#ff7a1a"/>' +
      '<rect x="150" y="100" width="4" height="50" fill="#bdbdbd"/><rect x="146" y="92" width="12" height="12" rx="5" fill="#e8e8e8"/>' +
      '<rect x="232" y="104" width="70" height="46" fill="#1c1c22" stroke="#555" stroke-width="2"/><circle cx="252" cy="127" r="13" fill="#333"/><circle cx="282" cy="127" r="13" fill="#333"/><circle class="pop" cx="252" cy="127" r="7" fill="#555"/><circle class="pop" cx="282" cy="127" r="7" fill="#555"/>' +
      '<rect x="10" y="108" width="96" height="42" rx="3" fill="#3a3d44" stroke="#8a9098" stroke-width="2"/><rect x="10" y="126" width="96" height="4" fill="#8a9098"/>' + txt("HIT SQUAD", 58, 122, 12, "#ffd66b") + txt("ROAD CREW", 58, 144, 9, "#c0c7d1") +
      '<rect x="318" y="114" width="72" height="36" rx="3" fill="#3a3d44" stroke="#8a9098" stroke-width="2"/>' + txt("ON TOUR", 354, 136, 11, "#ff7a1a") +
      '<rect x="0" y="172" width="400" height="88" fill="#0e0c12"/>' + hands,
      sky("sk", "#0a0812", "#3a1a2a"));
  }
  /* corner background: the Modern Times School, Brentwood's 1857 octagonal schoolhouse at Third Av & First St, cupola on top */
  const OCT = '<g><path d="M322 162l18-6h44l18 6v58h-80z" fill="#efe9dc"/><path d="M322 162l18-6v64h-18z" fill="#d6cfc0"/><path d="M384 156l18 6v58h-18z" fill="#d6cfc0"/>' +
    [346, 352, 358, 364, 370, 376].map(x => '<path d="M' + x + ' 158v62" stroke="#c8bfae" stroke-width="1.5"/>').join("") +
    '<path d="M316 162l22-22h48l22 22z" fill="#5a5f66"/><path d="M338 140l8 22M386 140l-8 22" stroke="#474b52" stroke-width="1.5"/>' +
    '<path d="M352 140v-16l4-4h12l4 4v16z" fill="#efe9dc"/><rect x="357" y="126" width="10" height="10" fill="#ffe6a8" class="pls"/><path d="M350 124l12-12 12 12z" fill="#5a5f66"/>' +
    '<rect x="350" y="186" width="24" height="34" fill="#efe9dc" stroke="#c8bfae" stroke-width="1.5"/><path d="M346 188l16-14 16 14z" fill="#5a5f66"/><rect x="356" y="196" width="12" height="24" fill="#3a3040"/>' +
    '<rect x="328" y="176" width="8" height="16" fill="#2a2030"/><rect x="388" y="176" width="8" height="16" fill="#2a2030"/></g>';
  window.SCENES = {
    crookedhill: crookedhill,
    club: club,
    videoset: videoset,
    hitsquad: hitsquad,
    corner: function () { return corner({ bd: OCT, sky: ["#121a3a", "#d8806a"], s1: "Third Av", s2: "First St", wall: "#3e3a44", mortar: "#4a4652", tags: [["CRAIG MACK", "#ff7a1a", 40], ["MACKADOCIOUS", "#9fe3ff", 22], ["FLAVA", "#ffd66b"], ["MC EZ", "#f6efdc"]] }); }
  };
})();
