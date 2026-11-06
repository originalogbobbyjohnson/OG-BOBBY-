/* Guru (Gang Starr) game: Fort Greene, Brooklyn. Nevins St on the 2/3/4/5, the old firehouse at 124 DeKalb Av (Spike Lee, Jazz Thing), Roxbury in Boston where he grew up, S Oxford St brownstones with a jazz session, Fulton St & S Portland Av with the Brooklyn Tower behind. 400 x 260 SVGs. */
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

  /* ---- Guru landmarks ---- */
  /* 2. The old firehouse at 124 DeKalb Av, Fort Greene, where Spike Lee runs 40 Acres and a Mule (Jazz Thing was cut for his Mo' Better Blues): red brick, white stone trim, the big arched engine door, a film reel turning, notes in the air */
  function fortyacres() {
    let win = "";
    [[140, 64], [176, 64], [212, 64], [248, 64], [140, 108], [176, 108], [212, 108], [248, 108]].forEach((p, i) => win += '<rect x="' + p[0] + '" y="' + p[1] + '" width="20" height="30" fill="' + (i % 3 ? "#2a2436" : "#ffe6a8") + '"' + (i === 4 ? ' class="pls"' : '') + '/><path d="M' + (p[0] - 2) + ' ' + p[1] + 'h24" stroke="#efe6d2" stroke-width="4"/><rect x="' + (p[0] - 2) + '" y="' + (p[1] + 30) + '" width="24" height="3" fill="#efe6d2"/>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="58" cy="40" r="16" fill="#ffe9b0"/>' +
      '<g class="fly"><path d="M0 0l6 4 6-4" stroke="#333" stroke-width="2" fill="none"/><path d="M14 8l5 3 5-3" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="96" width="122" height="140" fill="#8a5a46"/>' + windows(12, 108, 3, 4, 36, 30, 18, 20, "#ffe6a8", "#2a2030") +
      '<rect x="292" y="84" width="108" height="152" fill="#6e4a5a"/>' + windows(302, 96, 3, 5, 34, 28, 18, 18, "#ffe6a8", "#2a2030") +
      brick(122, 40, 170, 196, "#a8452f", "#b85a40") + '<rect x="118" y="34" width="178" height="10" fill="#efe6d2"/><rect x="122" y="44" width="170" height="4" fill="#d8cdb6"/>' +
      '<path d="M190 34l17-14 17 14z" fill="#efe6d2"/>' + win +
      '<rect x="122" y="148" width="170" height="6" fill="#efe6d2"/>' +
      '<path d="M164 236v-42a43 43 0 0 1 86 0v42z" fill="#efe6d2"/><path d="M170 236v-42a37 37 0 0 1 74 0v42z" fill="#8f1d1d"/>' +
      '<path d="M207 196v40M170 214h74" stroke="#6a1212" stroke-width="2"/>' +
      '<g transform="translate(207 180)"><g class="spin slow"><circle r="15" fill="#1b1b22" stroke="#d9a441" stroke-width="2"/>' + [0, 72, 144, 216, 288].map(a => '<circle cx="' + (8 * Math.cos(a * Math.PI / 180)).toFixed(1) + '" cy="' + (8 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" r="3.4" fill="#d9a441"/>').join("") + '<circle r="2" fill="#d9a441"/></g></g>' +
      txt("124", 207, 230, 9, "#efe6d2") +
      ['<g class="rise"><text x="270" y="200" font-size="18" fill="#f2c14e">&#9835;</text></g>', '<g class="rise r2"><text x="292" y="210" font-size="14" fill="#fff">&#9834;</text></g>', '<g class="rise r3"><text x="128" y="206" font-size="16" fill="#f2c14e">&#9833;</text></g>'].join("") +
      '<rect x="100" y="196" width="4" height="40" fill="#1d2329"/><rect x="92" y="190" width="20" height="8" rx="2" fill="#1d2329"/>' +
      tree(330, 196, 18) + tree(46, 200, 16, "sw2") + ground() + cars() + txt("DEKALB AV · FORT GREENE", 207, 255, 10, "#f6efdc"),
      sky("sk", "#7fb6e0", "#f4dcb0"));
  }
  /* 3. Roxbury, Boston, where Keith Elam grew up: the Highland Park standpipe tower on Fort Hill (red brick, Gothic, pointed roof), Victorian houses down the hill, autumn leaves */
  function roxbury() {
    let houses = "";
    [[10, 150, "#c46a3a"], [96, 162, "#5a7a9a"], [262, 158, "#d9b25a"], [334, 150, "#7a5a8a"]].forEach((h, i) => {
      houses += '<rect x="' + h[0] + '" y="' + h[1] + '" width="62" height="' + (236 - h[1]) + '" fill="' + h[2] + '"/><path d="M' + (h[0] - 4) + ' ' + h[1] + 'l35-26 35 26z" fill="#4a3a3a"/>' +
        windows(h[0] + 8, h[1] + 12, 2, 3, 28, 22, 16, 14, "#ffe6a8", "#2a2030") + '<rect x="' + h[0] + '" y="' + (h[1] + 34) + '" width="62" height="3" fill="#f6efdc"/>';
    });
    let leaves = ""; [[60, "#e4572e", ""], [180, "#f2c14e", " f2"], [300, "#d1495b", " f3"], [250, "#e4572e", " f2"], [120, "#f2c14e", " f3"]].forEach(l => leaves += '<g class="fall' + l[2] + '"><ellipse cx="' + l[0] + '" cy="20" rx="5" ry="3" fill="' + l[1] + '"/></g>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="340" cy="40" r="16" fill="#fff1d6"/>' +
      '<path d="M0 170q90-60 200-64t200 60v70H0z" fill="#5f7a3e"/>' +
      '<rect x="176" y="30" width="48" height="96" fill="#a4482e"/>' + brick(176, 34, 48, 90, "#a4482e", "#b55a3e") +
      '<rect x="170" y="70" width="60" height="8" fill="#e6dccb"/><rect x="172" y="24" width="56" height="10" fill="#e6dccb"/>' +
      [184, 196, 208].map(x => '<rect x="' + x + '" y="40" width="8" height="22" rx="4" fill="#2a2030"/>').join("") +
      [188, 204].map(x => '<rect x="' + x + '" y="88" width="8" height="18" rx="4" fill="#2a2030"/>').join("") +
      '<path d="M170 24l30-22 30 22z" fill="#3e5a52"/><rect x="198" y="0" width="4" height="6" fill="#3e5a52"/>' +
      '<rect class="flk" x="196" y="62" width="8" height="6" fill="#ffe6a8"/>' +
      '<path d="M140 126h120v12H140z" fill="#7a8a5a"/>' + houses +
      tree(170, 184, 16) + tree(236, 190, 14, "sw2") + leaves + ground("#3a3a40") + cars() +
      txt("ROXBURY · BOSTON", 200, 255, 10, "#f6efdc"),
      sky("sk", "#f29e6d", "#f7dfb8"));
  }
  /* 4. South Oxford St, Fort Greene: Italianate brownstones with high stoops and iron rails, plane trees, a jazz session in the parlor window, horns and notes floating out */
  function oxford() {
    let bs = "";
    [0, 100, 200, 300].forEach((x, i) => {
      bs += '<rect x="' + x + '" y="40" width="100" height="196" fill="' + ["#7a4a36", "#6e4232", "#83503a", "#704636"][i] + '"/><rect x="' + x + '" y="40" width="100" height="10" fill="#5a3426"/><rect x="' + (x + 2) + '" y="50" width="96" height="4" fill="#9a6a50"/>' +
        [0, 1, 2].map(c => [0, 1].map(r => '<rect x="' + (x + 12 + c * 28) + '" y="' + (66 + r * 44) + '" width="18" height="30" fill="' + ((i + c + r) % 4 ? "#2a2030" : "#ffe6a8") + '"/><rect x="' + (x + 10 + c * 28) + '" y="' + (62 + r * 44) + '" width="22" height="5" fill="#9a6a50"/>').join("")).join("") +
        '<path d="M' + (x + 56) + ' 236v-48h30v48" fill="#5a3426"/><path d="M' + (x + 50) + ' 236l12-40M' + (x + 92) + ' 236l-6-40" stroke="#1b1b1b" stroke-width="2"/>' +
        [0, 1, 2, 3, 4].map(s => '<rect x="' + (x + 48 + s * 2) + '" y="' + (204 + s * 7) + '" width="' + (44 - s * 4) + '" height="5" fill="#8a5a44"/>').join("") +
        '<rect x="' + (x + 60) + '" y="160" width="22" height="30" fill="#3a1e14"/><rect x="' + (x + 60) + '" y="156" width="22" height="4" fill="#9a6a50"/>';
    });
    const win = '<rect x="112" y="152" width="40" height="40" fill="#ffd27a"/><rect x="112" y="152" width="40" height="40" fill="none" stroke="#9a6a50" stroke-width="3"/>' +
      '<g class="bob"><circle cx="124" cy="166" r="5" fill="#1a1420"/><rect x="118" y="171" width="12" height="18" rx="4" fill="#1a1420"/><path d="M130 174q10 2 8 12q-2 6-8 4" fill="none" stroke="#b8862b" stroke-width="3"/></g>' +
      '<g class="bob bo2"><circle cx="142" cy="168" r="5" fill="#1a1420"/><rect x="136" y="173" width="12" height="16" rx="4" fill="#1a1420"/><rect x="146" y="160" width="3" height="30" fill="#5a3a1a"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(12) + '<circle cx="360" cy="24" r="10" fill="#fff1d6"/>' + bs + win +
      ['<g class="rise"><text x="160" y="160" font-size="20" fill="#f2c14e">&#9835;</text></g>', '<g class="rise r2"><text x="174" y="150" font-size="14" fill="#fff">&#9834;</text></g>', '<g class="rise r3"><text x="150" y="146" font-size="16" fill="#ff8c42">&#9833;</text></g>'].join("") +
      tree(30, 176, 22) + tree(250, 170, 24, "sw2") + tree(380, 180, 20) +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a40"/><rect x="0" y="232" width="400" height="5" fill="#9a9a96"/>' +
      txt("S OXFORD ST", 200, 254, 10, "#f6efdc"),
      sky("sk", "#1f2a52", "#b46a5a"));
  }
  /* Fort Greene / Downtown Brooklyn skyline behind the corner: the Brooklyn Tower at 9 DeKalb, black with bronze bands, hex-cut shoulders */
  const BKT = '<g><path d="M326 220V30l10-14 10 14v190z" fill="#1b1a1f"/>' + [40, 56, 72, 88, 104, 120, 136, 152, 168, 184, 200].map(y => '<path d="M326 ' + y + 'h20" stroke="#b07a3e" stroke-width="2"/>').join("") +
    '<path d="M336 16V4" stroke="#b07a3e" stroke-width="2"/><circle class="blk" cx="336" cy="4" r="2" fill="#ff5a4a"/>' +
    '<rect x="350" y="120" width="46" height="100" fill="#2a2a34"/>' + windows(354, 126, 3, 5, 14, 18, 8, 10, "#ffe6a8", "#3a3a48") + '</g>';
  window.SCENES = {
    nevins: function () { return underStation({ name: "Nevins St", sx: 80, sw: 240, lines: [["2", "#ee352e"], ["3", "#ee352e"], ["4", "#00933c"], ["5", "#00933c"]], tile: ["#7a2a1e", "#d9a441", "#4a1c14"], tag: ["JAZZMATAZZ", "#f2c14e"] }); },
    fortyacres: fortyacres,
    roxbury: roxbury,
    oxford: oxford,
    corner: function () { return corner({ bd: BKT, sky: ["#141a3a", "#c0705a"], s1: "Fulton St", s2: "S Portland Av", wall: "#5a2e26", mortar: "#6a3a30", tags: [["GURU", "#f2c14e", 52], ["MOSTLY THA VOICE", "#f6efdc", 20], ["JAZZMATAZZ", "#ff8c42"], ["KEITH E", "#9fe3ff"]] }); }
  };
})();
