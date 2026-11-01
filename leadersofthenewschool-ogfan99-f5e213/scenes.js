/* Uniondale opening scenes for Leaders of the New School's game. Each one is a small animated SVG, 400 x 260. */
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
      stSign(100, 50, 200, o.name, o.lines) +
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
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
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

  /* ---- landmarks ---- */
  /* Grand Concourse Art Deco apartment house: cream brick, rounded corner windows, deco bands */
  function deco(o) {
    let w = ""; for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) w += '<rect' + ((r + c) % 4 === 0 ? ' class="pls"' : '') + ' x="' + (110 + c * 32) + '" y="' + (62 + r * 26) + '" width="18" height="16" fill="' + ((r + c) % 3 ? "#2a3550" : "#ffe6a8") + '"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="60" cy="44" r="18" fill="#ffe9b0"/>' +
      '<rect x="96" y="40" width="208" height="196" fill="#e8d9b0"/><rect x="96" y="40" width="208" height="12" fill="#c8a868"/>' +
      '<path d="M180 40V22h40v18" fill="#e8d9b0" stroke="#c8a868" stroke-width="3"/><path d="M190 22v-10h20v10" fill="#c8a868"/>' + w +
      [100, 296].map(x => '<rect x="' + (x - 4) + '" y="52" width="10" height="184" fill="#c8a868"/>').join("") +
      '<path d="M96 52h208M96 216h208" stroke="#8a6a3a" stroke-width="3"/><path d="M110 216l10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10" fill="none" stroke="' + o.c + '" stroke-width="3"/>' +
      '<path d="M176 236v-24a24 24 0 0 1 48 0v24z" fill="#2a1f2e" stroke="#c8a868" stroke-width="3"/>' +
      '<rect x="0" y="120" width="96" height="116" fill="#7a4a3a"/>' + windows(10, 132, 3, 4, 28, 24, 14, 14, "#ffe6a8", "#2a2030") +
      '<rect x="304" y="100" width="96" height="136" fill="#a46a4a"/>' + windows(314, 112, 3, 5, 28, 24, 14, 14, "#ffe6a8", "#2a2030") +
      tree(40, 210, 14) + tree(360, 206, 16, "sw2") + ground() + cars() + (o.tag ? tag(o.tag[0], 120, 30, 24, o.tag[1], -3) : ''),
      sky("sk", "#f7b267", "#f4e3c1"));
  }
  /* record shop / basement full of crates */
  function crates(o) {
    let cr = "";
    [20, 92, 164].forEach((x, k) => { cr += '<rect x="' + x + '" y="186" width="62" height="44" fill="#8a5a2c" stroke="#4a2e14" stroke-width="2"/>'; for (let i = 0; i < 7; i++) cr += '<rect x="' + (x + 4 + i * 8) + '" y="' + (168 + ((i + k) % 3) * 4) + '" width="6" height="20" fill="' + ["#111", o.c1, "#222", o.c2, "#111", "#e8d2a0", o.c3][i] + '"/>'; });
    let wall = ""; [[60, 70, o.c1], [140, 60, o.c2], [220, 74, o.c3]].forEach(v => wall += '<rect x="' + (v[0] - 26) + '" y="' + (v[1] - 26) + '" width="52" height="52" fill="' + v[2] + '"/><circle cx="' + v[0] + '" cy="' + v[1] + '" r="18" fill="#111"/><circle cx="' + v[0] + '" cy="' + v[1] + '" r="5" fill="#e8d2a0"/>');
    return svg('<rect width="400" height="260" fill="#1a1612"/>' + brick(0, 0, 400, 150, "#3a2c24", "#44342a") + wall +
      '<g class="sway swt"><path d="M300 0v30" stroke="#222" stroke-width="2"/><circle class="flk" cx="300" cy="36" r="8" fill="#ffe7a8"/></g><circle cx="300" cy="36" r="70" fill="#ffe7a8" opacity=".08"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2a2018"/><rect x="240" y="150" width="150" height="10" fill="#5a3a22"/><rect x="248" y="160" width="8" height="76" fill="#3a2614"/><rect x="374" y="160" width="8" height="76" fill="#3a2614"/>' +
      '<rect x="262" y="126" width="100" height="24" rx="3" fill="#2b2b30"/>' + deck(304, 128, 34, o.c1) + '<path d="M352 118l-22 8" stroke="#bbb" stroke-width="3"/>' +
      '<rect x="300" y="60" width="90" height="40" fill="#f6efdc"/>' + txt(o.sign || "DIG", 345, 86, 16, "#1a1420") + cr +
      (o.tag ? tag(o.tag[0], 30, 250, 26, o.tag[1], -3) : ''), "");
  }
  /* block party in front of a brick high-rise: turntables on a folding table, speakers pumping */
  function blockparty(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(14) +
      '<rect x="110" y="20" width="180" height="200" fill="#8a4a32"/>' + windows(122, 32, 6, 8, 28, 22, 14, 12, "#ffe6a8", "#2a2030") +
      '<rect x="0" y="100" width="100" height="120" fill="#5a3a3a"/>' + windows(10, 112, 3, 4, 30, 24, 14, 14, "#ffe6a8", "#2a2030") +
      '<rect x="300" y="90" width="100" height="130" fill="#6a4a3a"/>' + windows(310, 102, 3, 5, 30, 24, 14, 14, "#ffe6a8", "#2a2030") +
      '<path d="M0 96q100 20 200 0t200 0" stroke="#fff" stroke-width="1" fill="none"/>' + [20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, i) => '<circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + x + '" cy="' + (100 + Math.sin(i) * 4) + '" r="3" fill="' + [o.c1, o.c2, o.c3][i % 3] + '"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3a3a"/>' +
      '<rect x="150" y="190" width="100" height="8" fill="#ccc"/><rect x="156" y="198" width="4" height="30" fill="#777"/><rect x="240" y="198" width="4" height="30" fill="#777"/>' +
      '<rect x="156" y="178" width="40" height="12" fill="#222"/><rect x="204" y="178" width="40" height="12" fill="#222"/>' + deck(176, 178, 16, o.c1) + '' + deck(224, 178, 16, o.c2) + '' +
      [60, 310].map(x => '<rect x="' + x + '" y="160" width="40" height="64" fill="#1d1d22"/><circle class="pop" cx="' + (x + 20) + '" cy="204" r="13" fill="#333" stroke="#555" stroke-width="2"/><circle class="pop" cx="' + (x + 20) + '" cy="176" r="7" fill="#333"/>').join("") +
      (o.tag ? tag(o.tag[0], 120, 252, 26, o.tag[1], -3) : ''), sky("sk", "#0d1022", "#3a2346"));
  }
  /* corner deli: awning, OPEN sign, the deli cat in the window */
  function deli(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + brick(0, 0, 400, 236, "#7a3a2a", "#8a4632") +
      '<rect x="0" y="0" width="400" height="60" fill="#5a2a1e"/>' + windows(20, 10, 9, 2, 44, 24, 20, 16, "#ffe6a8", "#2a2030") +
      '<rect x="20" y="70" width="360" height="30" fill="' + o.c1 + '"/>' + txt(o.sign || "DELI · GROCERY", 200, 92, 20, "#fff") +
      '<path d="M10 100h380l-14 26H24z" fill="' + o.c2 + '"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (24 + i * 44) + ' 126l22 0-8-26h-22z" fill="#fff" opacity=".35"/>').join("") +
      '<rect x="30" y="130" width="200" height="96" fill="#cfe6ff" opacity=".85" stroke="#333" stroke-width="4"/>' +
      [[44, "#d7263d"], [64, "#f2c14e"], [84, "#2f6fd6"], [104, "#7cf29a"], [124, "#ff8a5b"], [144, "#c9a4ff"], [164, "#d7263d"], [184, "#f2c14e"], [204, "#2f6fd6"]].map(v => '<rect x="' + v[0] + '" y="146" width="14" height="22" rx="3" fill="' + v[1] + '"/><rect x="' + v[0] + '" y="178" width="14" height="22" rx="3" fill="' + v[1] + '"/>').join("") +
      '<rect x="30" y="200" width="200" height="26" fill="#6a4a2a"/><g class="bob"><ellipse cx="120" cy="198" rx="20" ry="10" fill="#e08a3a"/><circle cx="140" cy="188" r="9" fill="#e08a3a"/><path d="M134 181l2-7 4 5zM144 181l2-7 2 7z" fill="#e08a3a"/><circle cx="138" cy="187" r="1.4" fill="#111"/><circle cx="143" cy="187" r="1.4" fill="#111"/><path d="M100 196q-12-10-4-20" stroke="#e08a3a" stroke-width="4" fill="none"/></g>' +
      '<rect x="250" y="130" width="70" height="106" fill="#2a2a30" stroke="#333" stroke-width="4"/><rect x="258" y="138" width="54" height="60" fill="#cfe6ff" opacity=".7"/>' +
      '<rect class="flk" x="330" y="140" width="48" height="22" rx="4" fill="#111" stroke="#ff2d55" stroke-width="2"/>' + '<text class="flk" x="354" y="156" text-anchor="middle" ' + FONT + ' font-size="12" fill="#ff2d55">OPEN</text>' +
      ground("#3a3a3a") + (o.tag ? tag(o.tag[0], 250, 252, 24, o.tag[1], -4) : ''), sky("sk", "#1a1430", "#3a2a40"));
  }
  /* Fordham's Keating Hall: grey fieldstone Gothic hall with the central tower, lawn, autumn leaves */
  function keating(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<rect x="60" y="100" width="280" height="110" fill="#8e8a82"/><path d="M60 100l20-16h240l20 16z" fill="#5a5650"/>' +
      '<rect x="168" y="30" width="64" height="180" fill="#9a968e"/>' + [168, 184, 200, 216].map(x => '<rect x="' + x + '" y="22" width="10" height="10" fill="#9a968e"/>').join("") +
      '<rect x="164" y="30" width="6" height="180" fill="#7a766e"/><rect x="230" y="30" width="6" height="180" fill="#7a766e"/>' +
      '<circle cx="200" cy="64" r="14" fill="#f2efe6" stroke="#5a5650" stroke-width="2"/><path d="M200 64v-9M200 64l6 3" stroke="#222" stroke-width="2"/>' +
      '<path d="M184 210v-60a16 16 0 0 1 32 0v60z" fill="#3a2a22"/><path d="M188 140v-30a12 12 0 0 1 24 0v30z" fill="#2a3550"/>' +
      [80, 110, 140, 250, 280, 310].map(x => '<path d="M' + x + ' 190v-50a8 8 0 0 1 16 0v50z" fill="#2a3550"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#4f8f45"/><path d="M180 260l10-50h20l10 50z" fill="#c8bca0"/>' +
      tree(30, 170, 24) + tree(372, 166, 26, "sw2") +
      ['#e0782a', '#d7263d', '#f2c14e'].map((c, i) => '<path class="fall f' + (i + 1) + '" d="M' + (60 + i * 120) + ' 20q6-6 12 0q-6 6-12 0z" fill="' + c + '"/>').join("") +
      (o.tag ? tag(o.tag[0], 240, 250, 22, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f4e3c1"));
  }
  /* Botanical Garden conservatory: white glass Victorian dome, palms inside, sparkle */
  function conservatory(o) {
    let ribs = ""; for (let i = -4; i <= 4; i++) ribs += '<path d="M200 50Q' + (200 + i * 22) + ' 60 ' + (200 + i * 20) + ' 150" stroke="#fff" stroke-width="2" fill="none"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<path d="M110 150a90 100 0 0 1 180 0z" fill="#bfe3d6" opacity=".9"/>' + ribs + '<path d="M110 150a90 100 0 0 1 180 0" stroke="#fff" stroke-width="4" fill="none"/>' +
      '<rect x="190" y="38" width="20" height="14" fill="#fff"/><path d="M186 38l14-12 14 12z" fill="#fff"/>' +
      '<rect x="20" y="150" width="360" height="56" fill="#cfeee4" stroke="#fff" stroke-width="3"/>' + [40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<path d="M' + x + ' 150v56" stroke="#fff" stroke-width="2"/>').join("") +
      '<g class="sway"><path d="M80 206v-36" stroke="#5a3a22" stroke-width="4"/><path d="M80 172q-20-4-26 6M80 172q20-4 26 6M80 172q-12-14-22-12M80 172q12-14 22-12" stroke="#2f7a3a" stroke-width="5" fill="none"/></g>' +
      '<g class="sway sw2"><path d="M320 206v-36" stroke="#5a3a22" stroke-width="4"/><path d="M320 172q-20-4-26 6M320 172q20-4 26 6M320 172q-12-14-22-12M320 172q12-14 22-12" stroke="#2f7a3a" stroke-width="5" fill="none"/></g>' +
      '<g class="pls"><path d="M150 90l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/></g><g class="pls p2"><path d="M250 110l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#fff"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4f8f45"/>' + [30, 70, 330, 370].map((x, i) => '<circle class="pop" cx="' + x + '" cy="226" r="6" fill="' + ["#ff8ab0", "#f2c14e", "#ff8ab0", "#fff"][i] + '"/>').join("") +
      (o.tag ? tag(o.tag[0], 130, 248, 22, o.tag[1], -3) : ''), sky("sk", "#8fc3ea", "#f6e7c6"));
  }
  /* High Bridge: stone arches + steel arch over the Harlem River, the granite water tower */
  function highbridge(o) {
    let arches = ""; for (let x = 0; x < 120; x += 30) arches += '<path d="M' + x + ' 200V120h30v80a15 15 0 0 0-30 0z" fill="#b8a68a"/>';
    for (let x = 290; x < 400; x += 30) arches += '<path d="M' + x + ' 200V120h30v80a15 15 0 0 0-30 0z" fill="#b8a68a"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="330" cy="44" r="18" fill="#fff3c4"/>' +
      '<rect x="40" y="30" width="26" height="90" fill="#c9b99a"/><path d="M36 30l17-18 17 18z" fill="#8a7a62"/><rect x="48" y="50" width="10" height="14" fill="#5a4a3a"/><rect x="48" y="80" width="10" height="14" fill="#5a4a3a"/>' +
      '<rect x="0" y="112" width="400" height="10" fill="#9a8a70"/>' + arches +
      '<path d="M120 122q85 70 170 0" stroke="#4a4e56" stroke-width="7" fill="none"/>' + [140, 165, 190, 215, 240, 265].map(x => '<path d="M' + x + ' 122v' + (Math.round(48 - Math.abs(x - 205) * 0.6)) + '" stroke="#4a4e56" stroke-width="3"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3b6a8a"/><path d="M0 214h400M0 232h400" stroke="#5a8aaa" stroke-width="2" stroke-dasharray="14 18"/>' +
      '<g class="slide slw"><path d="M0 214h70l-10 12H8z" fill="#f2efe6"/><rect x="20" y="204" width="30" height="10" fill="#d7263d"/></g>' +
      (o.tag ? tag(o.tag[0], 150, 100, 24, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f6d9a6"));
  }
  /* the stadium: limestone facade with arched openings, the white frieze on top, flags waving */
  function stadium(o) {
    let arch = ""; for (let x = 30; x < 380; x += 44) arch += '<path d="M' + x + ' 236v-90a16 16 0 0 1 32 0v90z" fill="#2a3550"/>';
    let frieze = ""; for (let x = 0; x < 400; x += 20) frieze += '<path d="M' + x + ' 40l10 14 10-14" stroke="#fff" stroke-width="3" fill="none"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(12) + '<path d="M0 40h400v12H0z" fill="#fff"/>' + frieze +
      '<rect x="0" y="80" width="400" height="156" fill="#e2d9c4"/><rect x="0" y="80" width="400" height="10" fill="#cfc3a8"/>' + arch +
      '<rect x="100" y="98" width="200" height="26" fill="#1d2a4a"/>' + txt(o.sign || "HOME GAME TONIGHT", 200, 116, 13, "#f2c14e") +
      [60, 200, 340].map((x, i) => '<rect x="' + x + '" y="56" width="3" height="26" fill="#ccc"/><path class="sway' + (i % 2 ? ' sw2' : '') + '" d="M' + (x + 3) + ' 56h22l-4 6 4 6h-22z" fill="' + [o.c1, "#1d2a4a", o.c2][i] + '"/>').join("") +
      '<g class="pls"><circle cx="40" cy="20" r="30" fill="#fff" opacity=".18"/><circle cx="360" cy="20" r="30" fill="#fff" opacity=".18"/></g>' +
      ground() + (o.tag ? tag(o.tag[0], 20, 252, 24, o.tag[1], -2) : ''), sky("sk", "#0c1430", "#2a3a6a"));
  }
  /* concert stage: lights sweeping, crowd hands up */
  function stage(o) {
    let crowd = ""; for (let x = 0; x < 400; x += 22) crowd += '<g class="bob' + ((x / 22) % 2 ? ' bo2' : '') + '"><circle cx="' + (x + 10) + '" cy="' + (216 + (x % 3) * 3) + '" r="10" fill="#111"/><path d="M' + (x + 4) + ' 214l-4-22M' + (x + 16) + ' 214l4-22" stroke="#111" stroke-width="5" stroke-linecap="round"/></g>';
    return svg('<rect width="400" height="260" fill="#0a0814"/>' +
      '<g opacity=".35"><path class="beam" d="M60 10l300 90-300-60z" fill="' + o.c1 + '"/></g><g opacity=".35"><path class="beam" style="animation-delay:-2s" d="M340 10L40 100l300-60z" fill="' + o.c2 + '"/></g>' +
      '<rect x="20" y="0" width="360" height="10" fill="#2b2b30"/>' + [50, 110, 170, 230, 290, 350].map((x, i) => '<circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + x + '" cy="14" r="6" fill="' + [o.c1, o.c2, o.c3][i % 3] + '"/>').join("") +
      '<rect x="60" y="40" width="280" height="90" fill="#15121f" stroke="' + o.c2 + '" stroke-width="2"/>' + txt(o.sign, 200, 98, 34, o.c1, "middle", ' font-family="Anton,Impact,sans-serif"') +
      '<rect x="0" y="150" width="400" height="20" fill="#2b2b30"/><rect x="0" y="146" width="400" height="4" fill="' + o.c2 + '"/>' +
      '<rect x="196" y="112" width="4" height="38" fill="#888"/><circle cx="198" cy="110" r="5" fill="#333"/>' +
      [20, 340].map(x => '<rect x="' + x + '" y="110" width="40" height="40" fill="#1d1d22"/><circle class="pop" cx="' + (x + 20) + '" cy="130" r="12" fill="#333"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#0e0c18"/>' + crowd + (o.tag ? tag(o.tag[0], 120, 252, 24, o.tag[1], -3) : ''), "");
  }
  /* Kingsbridge Armory: red-brick castle with round turrets and flags */
  function armory(o) {
    const turret = x => '<rect x="' + (x - 22) + '" y="40" width="44" height="196" fill="#9a4a32"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (x - 22 + i * 12) + '" y="32" width="8" height="10" fill="#9a4a32"/>').join("") + '<rect x="' + (x - 5) + '" y="70" width="10" height="26" fill="#2a2030"/><rect x="' + (x - 5) + '" y="120" width="10" height="26" fill="#2a2030"/>' +
      '<rect x="' + (x - 1) + '" y="8" width="2" height="26" fill="#ccc"/><path class="sway" d="M' + (x + 1) + ' 8h18l-4 5 4 5h-18z" fill="' + o.c1 + '"/>';
    let arch = ""; for (let x = 96; x < 304; x += 36) arch += '<path d="M' + x + ' 180v-60a12 12 0 0 1 24 0v60z" fill="#2a2030"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + brick(60, 80, 280, 156, "#a8553a", "#b8614a") + '<path d="M60 76h280v8H60z" fill="#7a3a28"/>' +
      [60, 340].map(turret).join("") + arch + '<path d="M170 236v-40a30 30 0 0 1 60 0v40z" fill="#2a1a16" stroke="#e2d0a8" stroke-width="3"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a3a"/>' + cars() + (o.tag ? tag(o.tag[0], 120, 66, 24, o.tag[1], -3) : ''), sky("sk", "#4a7ab0", "#f4c89a"));
  }
  /* Poe Cottage: small white clapboard farmhouse with a porch, a raven flying over */
  function cottage(o) {
    let clap = ""; for (let y = 120; y < 216; y += 8) clap += '<path d="M120 ' + y + 'h170" stroke="#d8d2c4" stroke-width="1.5"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(10) + '<circle cx="330" cy="44" r="18" fill="#fff3c4"/>' +
      '<path d="M110 120l95-60 95 60z" fill="#5a5a62"/><rect x="120" y="120" width="170" height="96" fill="#f4f0e6"/>' + clap +
      '<rect x="190" y="80" width="18" height="30" fill="#7a4a3a"/>' +
      [140, 250].map(x => '<rect x="' + x + '" y="134" width="22" height="26" fill="#ffe6a8"/><path d="M' + (x + 11) + ' 134v26M' + x + ' 147h22" stroke="#5a5a62" stroke-width="2"/><rect x="' + (x - 6) + '" y="134" width="5" height="26" fill="#2f5a3a"/><rect x="' + (x + 23) + '" y="134" width="5" height="26" fill="#2f5a3a"/>').join("") +
      '<rect x="190" y="160" width="26" height="56" fill="#5a3a22"/><path d="M110 170h190v6H110z" fill="#5a5a62"/>' + [116, 150, 260, 294].map(x => '<rect x="' + x + '" y="176" width="4" height="40" fill="#e8e2d4"/>').join("") +
      '<rect x="0" y="216" width="400" height="44" fill="#4f7a45"/><path d="M190 260l8-44h10l8 44z" fill="#c8bca0"/>' +
      tree(50, 160, 30) + tree(360, 150, 32, "sw2") +
      '<g class="fly"><path d="M0 60q10-10 20 0q10-10 20 0q-10-2-20 4q-10-6-20-4z" fill="#111"/></g>' +
      (o.tag ? tag(o.tag[0], 130, 250, 22, o.tag[1], -3) : ''), sky("sk", "#2a2a5a", "#c88aa0"));
  }
  /* livestream DJ booth: decks, laptop, hearts and comments floating up */
  function djbooth(o) {
    return svg('<rect width="400" height="260" fill="#120e1e"/>' + '<rect x="0" y="0" width="400" height="150" fill="#1d1830"/>' +
      [[60, 50, o.c1], [140, 36, o.c2], [260, 44, o.c3], [330, 60, o.c1]].map((v, i) => '<g opacity=".35"><circle class="pls' + (i % 2 ? ' p2' : '') + '" cx="' + v[0] + '" cy="' + v[1] + '" r="24" fill="' + v[2] + '"/></g>').join("") +
      '<rect x="40" y="150" width="320" height="16" fill="#2b2b30"/><rect x="50" y="166" width="300" height="70" fill="#1d1d22"/>' +
      '<rect x="60" y="128" width="96" height="22" rx="3" fill="#333"/>' + deck(108, 130, 34, o.c1) + '' +
      '<rect x="244" y="128" width="96" height="22" rx="3" fill="#333"/>' + deck(292, 130, 34, o.c2) + '' +
      '<rect x="170" y="134" width="60" height="16" fill="#444"/>' + [176, 188, 200, 212, 224].map((x, i) => '<rect class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" x="' + x + '" y="138" width="6" height="8" fill="' + [o.c1, o.c2, o.c3][i % 3] + '"/>').join("") +
      '<path d="M176 128l-8-46h64l-8 46z" fill="#c9ced6"/><rect x="172" y="84" width="56" height="38" fill="#0e1a2a"/>' + '<circle class="blk" cx="182" cy="92" r="3" fill="#ff2d55"/>' + txt("LIVE", 200, 96, 9, "#fff") +
      [[90, "♥", "#ff4d6d"], [150, "♥", o.c1], [250, "♥", "#ff4d6d"], [310, "♥", o.c2]].map((v, i) => '<text class="rise' + (i ? ' r' + ((i % 3) + 1) : '') + '" x="' + v[0] + '" y="120" ' + FONT + ' font-size="18" fill="' + v[2] + '">' + v[1] + '</text>').join("") +
      '<rect x="20" y="20" width="110" height="20" rx="10" fill="#fff" opacity=".9"/>' + txt(o.sign || "100K WATCHING", 75, 34, 9, "#111") +
      (o.tag ? tag(o.tag[0], 110, 220, 28, o.tag[1], -4) : ''), "");
  }
  /* The Hub: busy shopping crossroads, store signs, buses and cars */
  function hub(o) {
    const shop = (x, w, col, s) => '<rect x="' + x + '" y="80" width="' + w + '" height="150" fill="' + col + '"/>' + windows(x + 8, 90, Math.floor((w - 8) / 22), 3, 22, 20, 12, 12, "#ffe6a8", "#2a2030") +
      '<rect x="' + (x + 4) + '" y="156" width="' + (w - 8) + '" height="18" fill="#111"/>' + '<text class="flk" x="' + (x + w / 2) + '" y="169" text-anchor="middle" ' + FONT + ' font-size="10" fill="' + s[1] + '">' + s[0] + '</text>' +
      '<rect x="' + (x + 8) + '" y="178" width="' + (w - 16) + '" height="52" fill="#cfe6ff" opacity=".6"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(10) +
      shop(0, 96, "#7a4a3a", ["SNEAKERS", o.c1]) + shop(100, 100, "#a46a4a", ["GOLD · BUY", "#f2c14e"]) + shop(204, 96, "#6a5a7a", ["PIZZA", "#ff6b3d"]) + shop(304, 96, "#8a4a52", ["FASHION", o.c2]) +
      '<rect x="0" y="230" width="400" height="30" fill="#2a2d33"/><path d="M0 246h400" stroke="#fff" stroke-width="2" stroke-dasharray="6 10"/>' +
      '<g class="slide"><rect x="0" y="210" width="120" height="34" rx="6" fill="#2a5aa8"/><rect x="0" y="232" width="120" height="4" fill="#f2c14e"/>' + [8, 34, 60, 86].map(x => '<rect x="' + x + '" y="214" width="22" height="12" fill="#cfe6ff"/>').join("") + '<circle cx="20" cy="246" r="6" fill="#111"/><circle cx="96" cy="246" r="6" fill="#111"/></g>' +
      (o.tag ? tag(o.tag[0], 120, 60, 28, o.tag[1], -4) : ''), sky("sk", "#1a1430", "#5a3a5a"));
  }
  /* brick housing towers around a courtyard, windows flicking on */
  function towers(o) {
    const tw = (x, y, w, col) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (220 - y) + '" fill="' + col + '"/>' + windows(x + 8, y + 10, Math.floor((w - 8) / 18), Math.floor((210 - y) / 18), 18, 18, 10, 10, "#ffe6a8", "#2a2030") + '<rect x="' + x + '" y="' + (y - 6) + '" width="' + w + '" height="6" fill="#4a2a20"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) + '<circle cx="200" cy="30" r="12" fill="#fff3c4"/>' +
      tw(10, 50, 110, "#8a4a36") + tw(150, 30, 100, "#9a5440") + tw(280, 56, 110, "#8a4a36") +
      (o.oval ? '<ellipse cx="200" cy="226" rx="120" ry="18" fill="#4f8f45"/><ellipse cx="200" cy="222" rx="40" ry="8" fill="#6a8aa0" stroke="#d8cfc0" stroke-width="4"/>' +
        [180, 192, 200, 208, 220].map((x, i) => '<circle class="rise' + (i % 3 ? ' r' + (i % 3 + 1) : '') + '" cx="' + x + '" cy="214" r="3" fill="#cfe6ff"/>').join("") + '<rect x="196" y="190" width="8" height="30" fill="#c87a4a"/>'
        : '<rect x="0" y="220" width="400" height="40" fill="#5a5a52"/>' + [70, 330].map(x => '<rect x="' + (x - 24) + '" y="226" width="48" height="5" fill="#5a3a22"/><rect x="' + (x - 20) + '" y="231" width="4" height="9" fill="#333"/><rect x="' + (x + 16) + '" y="231" width="4" height="9" fill="#333"/>').join("") + tree(200, 210, 16)) +
      '<rect x="0" y="244" width="400" height="16" fill="#3a3a3a"/>' + (o.tag ? tag(o.tag[0], 30, 252, 26, o.tag[1], -3) : ''), sky("sk", "#0d1022", "#3a2a4a"));
  }
  /* park: basketball court, ball bouncing, fence and trees */
  function park(o) {
    let fence = ""; for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 110l10 10M' + (x + 10) + ' 110l-10 10M' + x + ' 120l10 10M' + (x + 10) + ' 120l-10 10M' + x + ' 130l10 10M' + (x + 10) + ' 130l-10 10" stroke="#8a9098" stroke-width="1"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="320" cy="40" r="18" fill="#fff3c4"/>' +
      '<path d="M0 110q100-40 200-20t200-10v30H0z" fill="#3f7a3a"/>' + tree(40, 80, 26) + tree(130, 70, 30, "sw2") + tree(280, 76, 28) + tree(370, 82, 24, "sw2") +
      fence + '<rect x="0" y="140" width="400" height="120" fill="' + (o.court || "#2f6a8a") + '"/><path d="M0 200h400M200 140v120" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="30" ry="12" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<rect x="56" y="80" width="6" height="140" fill="#555"/><rect x="40" y="66" width="44" height="30" fill="#fff" stroke="#555" stroke-width="2"/><rect x="54" y="78" width="16" height="12" fill="none" stroke="' + o.c1 + '" stroke-width="2"/><ellipse cx="62" cy="98" rx="10" ry="3" fill="none" stroke="#ff6b3d" stroke-width="2"/>' +
      '<g class="hop"><circle cx="120" cy="214" r="9" fill="#e86a2a"/><path d="M111 214h18M120 205v18" stroke="#5a2a0a" stroke-width="1"/></g>' +
      (o.tag ? tag(o.tag[0], 210, 250, 26, o.tag[1], -3) : ''), sky("sk", "#8fc3ea", "#f6e7c6"));
  }
  /* sunken expressway: traffic both ways under an overpass */
  function expressway(o) {
    let lanes = "";
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(12) +
      '<rect x="0" y="40" width="400" height="80" fill="#6a4a3a"/>' + windows(8, 50, 16, 3, 25, 22, 12, 12, "#ffe6a8", "#2a2030") +
      '<path d="M0 120h400v20H0z" fill="#7a766e"/><path d="M0 140l40 30h320l40-30v120H0z" fill="#5a564e"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2a2d33"/><path d="M0 214h400" stroke="#eab308" stroke-width="3"/><path d="M0 192h400M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<g class="slide"><rect x="0" y="222" width="60" height="18" rx="5" fill="#d7263d"/><rect x="12" y="216" width="34" height="9" rx="3" fill="#cfe6ff"/><circle cx="12" cy="240" r="5" fill="#111"/><circle cx="48" cy="240" r="5" fill="#111"/></g>' +
      '<g class="slide sl2"><rect x="0" y="216" width="110" height="28" rx="4" fill="#e8e2d4"/><rect x="86" y="220" width="22" height="12" fill="#cfe6ff"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="92" cy="244" r="6" fill="#111"/></g>' +
      '<g class="slideb"><rect x="0" y="182" width="60" height="18" rx="5" fill="' + o.c1 + '"/><rect x="14" y="176" width="34" height="9" rx="3" fill="#cfe6ff"/><circle cx="12" cy="200" r="5" fill="#111"/><circle cx="48" cy="200" r="5" fill="#111"/></g>' +
      '<g class="slideb sb2"><rect x="0" y="182" width="60" height="18" rx="5" fill="#2f6fd6"/><rect x="14" y="176" width="34" height="9" rx="3" fill="#cfe6ff"/><circle cx="12" cy="200" r="5" fill="#111"/><circle cx="48" cy="200" r="5" fill="#111"/></g>' +
      '<rect x="0" y="120" width="400" height="16" fill="#8a867c"/><rect x="0" y="116" width="400" height="4" fill="#5a564e"/>' +
      '<rect x="125" y="80" width="150" height="30" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' + txt(o.sign || "I-95", 200, 100, 13, "#fff") + '<rect x="196" y="110" width="8" height="10" fill="#555"/>' +
      (o.tag ? tag(o.tag[0], 20, 166, 24, o.tag[1], -3) : ''), sky("sk", "#0d1022", "#4a3a5a"));
  }
  /* recording studio: glass booth with mic, the board with blinking faders, VU meters; o.beats adds a pad machine */
  function studio(o) {
    let leds = ""; for (let i = 0; i < 16; i++) leds += '<rect x="' + (64 + i * 17) + '" y="190" width="5" height="22" fill="#333"/><rect class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" x="' + (61 + i * 17) + '" y="' + (192 + (i * 5) % 16) + '" width="11" height="5" fill="' + [o.c1, o.c2, o.c3][i % 3] + '"/>';
    let pads = ""; if (o.beats) for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="blk' + ["", " b2", " b3", " b4"][(r * 3 + c) % 4] + '" x="' + (296 + c * 18) + '" y="' + (124 + r * 10) + '" width="14" height="7" rx="1" fill="' + [o.c1, o.c2, o.c3, "#7cf29a"][(r + c) % 4] + '"/>';
    return svg('<rect width="400" height="260" fill="#16131c"/>' + '<rect x="0" y="0" width="400" height="160" fill="#2a2236"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50) + '" y="0" width="40" height="160" fill="#241e2e"/>').join("") +
      '<rect x="40" y="24" width="200" height="110" fill="#1a2a3a" stroke="#555" stroke-width="5"/><rect x="40" y="24" width="200" height="110" fill="#9fe3ff" opacity=".08"/>' +
      '<rect x="138" y="70" width="4" height="64" fill="#888"/><rect x="128" y="44" width="24" height="34" rx="12" fill="#c9ced6"/><path d="M128 56h24M128 64h24" stroke="#888" stroke-width="1.5"/><circle cx="110" cy="58" r="18" fill="none" stroke="#333" stroke-width="3"/>' +
      '<path d="M190 40a14 14 0 0 1 28 0" stroke="#222" stroke-width="4" fill="none"/>' +
      '<rect class="pls" x="260" y="30" width="100" height="22" rx="3" fill="#ff2d55"/>' + txt("ON AIR", 310, 46, 12, "#fff") +
      '<rect x="260" y="60" width="100" height="40" fill="#111"/>' + [0, 1].map(k => '<path class="sway' + (k ? ' sw2' : '') + '" d="M' + (285 + k * 50) + ' 96l-12-26" stroke="' + o.c2 + '" stroke-width="2"/>').join("") +
      (o.beats ? '<rect x="286" y="110" width="88" height="56" rx="4" fill="#cfcac0" stroke="#7a756a" stroke-width="2"/>' + pads + '<rect x="288" y="112" width="84" height="8" fill="#1d3a2a"/>' : '') +
      '<path d="M30 170h340l20 60H10z" fill="#3a3440"/><rect x="10" y="230" width="380" height="30" fill="#2a2430"/>' + leds +
      [20, 344].map(x => '<rect x="' + x + '" y="120" width="36" height="50" fill="#1d1d22"/><circle class="pop" cx="' + (x + 18) + '" cy="150" r="11" fill="#333"/>').join("") +
      (o.tag ? tag(o.tag[0], 60, 254, 24, o.tag[1], -2) : ''), "");
  }
  /* fieldstone church with a brick bell tower and white cupola, the bell swinging */
  function church(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<rect x="80" y="110" width="200" height="126" fill="#8a8478"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => '<rect x="' + (86 + (i % 3) * 64) + '" y="' + (120 + Math.floor(i / 3) * 34) + '" width="' + (40 + (i % 2) * 10) + '" height="20" rx="6" fill="#9a948a"/>').join("") +
      '<path d="M70 112l110-50 110 50z" fill="#4a3a32"/>' + [110, 210].map(x => '<path d="M' + x + ' 200v-50a10 10 0 0 1 20 0v50z" fill="#2a3550"/>').join("") +
      '<rect x="280" y="70" width="60" height="166" fill="#a8553a"/>' + brick(280, 70, 60, 166, "#a8553a", "#b8614a") +
      '<rect x="276" y="62" width="68" height="10" fill="#f4f0e6"/><rect x="290" y="30" width="40" height="34" fill="#f4f0e6"/><path d="M286 30l24-22 24 22z" fill="#f4f0e6"/><rect x="309" y="0" width="2" height="10" fill="#d4af37"/>' +
      '<g class="sway swt"><path d="M302 38h16l3 18h-22z" fill="#d4af37"/><circle cx="310" cy="58" r="3" fill="#7a5512"/></g>' +
      '<path d="M296 236v-40a14 14 0 0 1 28 0v40z" fill="#3a2a22"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4f7a45"/>' + tree(30, 180, 28) + tree(376, 190, 24, "sw2") +
      [[150, 80], [190, 70]].map((v, i) => '<g class="fly" style="animation-delay:' + (-i * 4) + 's"><path d="M0 ' + v[1] + 'q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>').join("") +
      (o.tag ? tag(o.tag[0], 100, 100, 22, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f4e3c1"));
  }
  /* small-city main street: two- and three-story storefronts, banner across the street */
  function mainstreet(o) {
    const cols = ["#a46a4a", "#e2d0a8", "#7a4a3a", "#9a8ab0", "#c87a4a"];
    let b = ""; for (let i = 0; i < 5; i++) { const x = i * 80, h = 90 + (i % 2) * 30; b += '<rect x="' + x + '" y="' + (230 - h - 60) + '" width="78" height="' + (h + 60) + '" fill="' + cols[i] + '"/>' + windows(x + 10, 230 - h - 50, 3, 2, 22, 22, 14, 14, "#ffe6a8", "#2a2030") +
      '<path d="M' + (x + 2) + ' 176h74l-6 12H' + (x + 8) + 'z" fill="' + [o.c1, o.c2, o.c3][i % 3] + '"/><rect x="' + (x + 8) + '" y="188" width="62" height="42" fill="#cfe6ff" opacity=".6"/>'; }
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="60" cy="36" r="16" fill="#fff3c4"/>' + b +
      '<path d="M0 50q200 30 400 0" stroke="#333" stroke-width="1.5" fill="none"/><g class="sway swt"><rect x="95" y="54" width="210" height="28" rx="3" fill="' + o.c1 + '" stroke="#fff" stroke-width="2"/>' + txt(o.sign, 200, 73, 12, "#111") + '</g>' +
      ground() + cars() + (o.tag ? tag(o.tag[0], 20, 166, 22, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f6d9a6"));
  }
  /* ferry terminal on the bay, the black-and-white lighthouse across the water, beam sweeping */
  function ferry(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<path d="M0 130h400v130H0z" fill="#3b6a8a"/><path d="M220 130q60-14 180-8v8z" fill="#d8c79a"/>' +
      '<g transform="translate(330 40)"><rect x="-8" y="0" width="16" height="90" fill="#f4f0e6"/><rect x="-8" y="12" width="16" height="16" fill="#111"/><rect x="-8" y="44" width="16" height="16" fill="#111"/><rect x="-12" y="-14" width="24" height="14" fill="#333"/><circle class="pls" cx="0" cy="-7" r="5" fill="#fff6c2"/><path d="M-12 -14l12-10 12 10z" fill="#111"/></g>' +
      '<g opacity=".35"><path class="beam" d="M330 33l-200-30v60z" fill="#fff6c2" transform="scale(-1 1) translate(-660 0)"/></g>' +
      '<path d="M0 150h400M0 180h400M0 214h400" stroke="#5a8aaa" stroke-width="2" stroke-dasharray="14 18"/>' +
      '<g class="slide slw"><path d="M0 176h110l-12 18H10z" fill="#f4f0e6"/><rect x="16" y="160" width="80" height="16" fill="#f4f0e6" stroke="#2a3550" stroke-width="2"/>' + [22, 40, 58, 76].map(x => '<rect x="' + x + '" y="164" width="12" height="7" fill="#2a3550"/>').join("") + '<rect x="40" y="150" width="26" height="10" fill="' + o.c1 + '"/></g>' +
      '<rect x="0" y="196" width="150" height="20" fill="#7a5a3a"/>' + [10, 50, 90, 130].map(x => '<rect x="' + x + '" y="216" width="8" height="44" fill="#5a3a22"/>').join("") +
      '<rect x="10" y="120" width="120" height="76" fill="#e2d0a8"/><path d="M4 122l66-30 66 30z" fill="#2a5a7a"/><rect x="20" y="140" width="100" height="20" fill="#2a5a7a"/>' + txt(o.sign || "FERRIES", 70, 155, 12, "#fff") +
      [[180, 90], [220, 80]].map((v, i) => '<g class="fly" style="animation-delay:' + (-i * 5) + 's"><path d="M0 ' + v[1] + 'q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>').join("") +
      (o.tag ? tag(o.tag[0], 170, 250, 24, o.tag[1], -3) : ''), sky("sk", "#f7b267", "#9fd0ea"));
  }
  /* round arena with its ring of lights and a marquee */
  function coliseum(o) {
    let ribs = ""; for (let x = 60; x <= 340; x += 20) ribs += '<path d="M' + x + ' 90v120" stroke="#cfd6de" stroke-width="3"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) +
      '<ellipse cx="200" cy="90" rx="160" ry="30" fill="#5a6070"/><rect x="40" y="90" width="320" height="120" fill="#3a4050"/>' + ribs +
      '<ellipse cx="200" cy="90" rx="160" ry="30" fill="none" stroke="#cfd6de" stroke-width="4"/>' +
      [70, 110, 150, 190, 230, 270, 310].map((x, i) => '<circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + (x + 10) + '" cy="120" r="4" fill="' + o.c1 + '"/>').join("") +
      '<rect x="120" y="140" width="160" height="40" rx="3" fill="#111" stroke="' + o.c2 + '" stroke-width="2"/><text class="flk" x="200" y="166" text-anchor="middle" ' + FONT + ' font-size="15" fill="' + o.c2 + '">' + o.sign + '</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2d33"/>' + [30, 80, 320, 370].map(x => '<rect x="' + (x - 2) + '" y="196" width="4" height="30" fill="#555"/><circle class="pls" cx="' + x + '" cy="194" r="5" fill="#fff6c2"/>').join("") + cars() +
      (o.tag ? tag(o.tag[0], 30, 60, 24, o.tag[1], -3) : ''), sky("sk", "#0d1022", "#3a3a6a"));
  }
  /* classroom: chalkboard, desks, the clock ticking */
  function classroom(o) {
    let desks = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) desks += '<rect x="' + (40 + c * 90 + r * 10) + '" y="' + (190 + r * 34) + '" width="60" height="10" fill="#c89a5a"/><rect x="' + (44 + c * 90 + r * 10) + '" y="' + (200 + r * 34) + '" width="4" height="20" fill="#555"/><rect x="' + (92 + c * 90 + r * 10) + '" y="' + (200 + r * 34) + '" width="4" height="20" fill="#555"/>';
    return svg('<rect width="400" height="260" fill="#e8dcc0"/><rect x="0" y="170" width="400" height="90" fill="#a07a4a"/>' +
      '<rect x="40" y="40" width="250" height="110" fill="#2f4a3a" stroke="#8a5a2c" stroke-width="8"/>' +
      '<text x="60" y="80" font-family="Sedgwick Ave Display, cursive" font-size="22" fill="#f4f0e6">' + o.sign + '</text><text x="60" y="112" font-family="Sedgwick Ave Display, cursive" font-size="16" fill="#f4f0e6">' + (o.sign2 || "") + '</text>' +
      '<rect class="blk" x="240" y="128" width="30" height="4" fill="#fff"/>' +
      '<circle cx="340" cy="70" r="26" fill="#fff" stroke="#333" stroke-width="4"/><g class="spin slow"><path d="M340 70v-20" stroke="#d7263d" stroke-width="2"/></g><path d="M340 70h12" stroke="#111" stroke-width="3"/>' +
      '<rect x="320" y="110" width="50" height="60" fill="' + o.c1 + '"/>' + txt("A+", 345, 148, 22, "#111") + desks +
      '<g class="hop" style="animation-duration:2.4s"><path d="M200 168l40-10-34 20z" fill="#fff" stroke="#999"/></g>' +
      (o.tag ? tag(o.tag[0], 40, 30, 22, o.tag[1], -2) : ''), "");
  }
  /* roller coaster: a car riding the hills of the track */
  function coaster(o) {
    const path = "M-20 200 C 40 200, 60 60, 110 60 S 170 200, 220 200 S 280 100, 320 100 S 380 200, 420 200";
    let sup = ""; for (let x = 20; x < 400; x += 30) sup += '<path d="M' + x + ' 236V' + (x < 170 ? 120 : 160) + '" stroke="#cfd6de" stroke-width="3" opacity=".7"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(18) + sup +
      '<path d="' + path + '" stroke="' + o.c1 + '" stroke-width="6" fill="none"/><path d="' + path + '" stroke="#fff" stroke-width="1.5" fill="none" transform="translate(0 6)"/>' +
      '<g style="offset-path:path(\'' + path + '\');animation:ride 5s linear infinite;offset-rotate:auto"><rect x="-18" y="-16" width="36" height="14" rx="4" fill="' + o.c2 + '"/><circle cx="-10" cy="-20" r="4" fill="#111"/><circle cx="6" cy="-20" r="4" fill="#111"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/>' + [40, 120, 200, 280, 360].map((x, i) => '<circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + x + '" cy="242" r="3" fill="' + o.c2 + '"/>').join("") +
      (o.tag ? tag(o.tag[0], 210, 60, 22, o.tag[1], -3) : ''), sky("sk", "#1a1040", "#6a3a7a"));
  }
  /* daisy field under a big sun, flowers swaying */
  function daisies(o) {
    let f = ""; for (let i = 0; i < 18; i++) { const x = 12 + i * 22, y = 180 + (i * 37) % 50; f += '<g class="sway' + (i % 2 ? ' sw2' : '') + '"><path d="M' + x + ' ' + y + 'v' + (260 - y) + '" stroke="#3f7a3a" stroke-width="3"/>' + [0, 60, 120, 180, 240, 300].map(a => '<ellipse cx="' + (x + Math.cos(a * Math.PI / 180) * 7) + '" cy="' + (y + Math.sin(a * Math.PI / 180) * 7) + '" rx="5" ry="3" transform="rotate(' + a + ' ' + (x + Math.cos(a * Math.PI / 180) * 7) + ' ' + (y + Math.sin(a * Math.PI / 180) * 7) + ')" fill="#fff"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="4" fill="#f2c14e"/></g>'; }
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + '<g class="spin slow"><circle cx="300" cy="70" r="40" fill="#ffd34d"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<rect x="296" y="14" width="8" height="16" fill="#ffd34d" transform="rotate(' + a + ' 300 70)"/>').join("") + '</g>' +
      '<path d="M0 170q100-40 200-10t200-20v120H0z" fill="#6ab04c"/>' + f +
      '<g class="spin" style="animation-duration:4s"><circle cx="90" cy="80" r="40" fill="#111"/><circle cx="90" cy="80" r="14" fill="' + o.c1 + '"/><circle cx="90" cy="80" r="2" fill="#fff"/></g>' +
      (o.tag ? tag(o.tag[0], 150, 150, 28, o.tag[1], -5) : ''), sky("sk", "#8fd3f4", "#fff3c4"));
  }
  /* catwalk: runway lights, camera flashes popping */
  function runway(o) {
    let flash = ""; [[30, 150], [70, 180], [330, 160], [370, 190], [50, 220], [350, 226]].forEach((v, i) => flash += '<rect x="' + (v[0] - 8) + '" y="' + v[1] + '" width="16" height="11" rx="2" fill="#222"/><circle class="blk' + ["", " b2", " b3", " b4"][i % 4] + '" cx="' + v[0] + '" cy="' + (v[1] - 4) + '" r="9" fill="#fff"/>');
    return svg('<rect width="400" height="260" fill="#0e0c14"/><rect x="0" y="0" width="400" height="110" fill="#1d1830"/>' +
      '<rect x="110" y="20" width="180" height="70" fill="#15121f" stroke="' + o.c2 + '" stroke-width="2"/>' + txt(o.sign, 200, 52, 15, o.c1) + txt(o.sign2 || "", 200, 74, 11, "#fff") +
      '<path d="M170 110h60l70 150H100z" fill="#f4f0e6"/><path d="M170 110h60l70 150H100z" fill="none" stroke="' + o.c1 + '" stroke-width="3"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<circle class="pls' + (i % 2 ? ' p2' : '') + '" cx="' + (168 - i * 12) + '" cy="' + (118 + i * 26) + '" r="3" fill="' + o.c2 + '"/><circle class="pls' + (i % 2 ? '' : ' p2') + '" cx="' + (232 + i * 12) + '" cy="' + (118 + i * 26) + '" r="3" fill="' + o.c2 + '"/>').join("") + flash +
      (o.tag ? tag(o.tag[0], 240, 250, 22, o.tag[1], -3) : ''), "");
  }
  /* the bay: dock, sailboats bobbing at sunset */
  function bay(o) {
    const boat = (x, cls, c) => '<g class="bob ' + cls + '"><path d="M' + x + ' 170h50l-8 12h-34z" fill="#f4f0e6"/><path d="M' + (x + 24) + ' 168v-50" stroke="#555" stroke-width="2"/><path d="M' + (x + 26) + ' 120l20 44h-20z" fill="' + c + '"/><path d="M' + (x + 22) + ' 124l-16 40h16z" fill="#fff"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="200" cy="140" r="34" fill="#ffd34d"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#2a5a7a"/><path d="M0 140q200-14 400 0" fill="#3a5a3a"/>' + '<path d="M180 160h40M170 180h60M186 200h28" stroke="#ffd34d" stroke-width="3" opacity=".6"/>' +
      boat(40, "", o.c1) + boat(270, "bo2", o.c2) + '<g class="slide slw">' + boat(0, "", o.c3) + '</g>' +
      '<rect x="0" y="210" width="400" height="10" fill="#7a5a3a"/>' + [20, 80, 140, 200, 260, 320, 380].map(x => '<rect x="' + (x - 4) + '" y="200" width="8" height="60" fill="#5a3a22"/>').join("") +
      [[150, 60], [250, 50]].map((v, i) => '<g class="fly" style="animation-delay:' + (-i * 5) + 's"><path d="M0 ' + v[1] + 'q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>').join("") +
      (o.tag ? tag(o.tag[0], 30, 250, 24, o.tag[1], -3) : ''), sky("sk", "#3a2a5a", "#f7a26a"));
  }
  /* corner office: skyline window, ticker scrolling, briefcase on the desk */
  function office(o) {
    let sk = ""; for (let i = 0; i < 9; i++) { const h = 40 + (i * 37) % 70; sk += '<rect x="' + (40 + i * 36) + '" y="' + (150 - h) + '" width="30" height="' + h + '" fill="#2a3550"/>' + windows(44 + i * 36, 156 - h, 3, Math.floor(h / 14), 8, 14, 4, 6, "#ffe6a8", "#1d2440"); }
    return svg('<rect width="400" height="260" fill="#1a1620"/>' + '<rect x="30" y="20" width="340" height="130" fill="url(#sk)"/>' + stars(8) + sk + '<path d="M30 20h340v130H30zM143 20v130M256 20v130" stroke="#3a3440" stroke-width="6" fill="none"/>' +
      '<rect x="0" y="150" width="400" height="20" fill="#111"/><g class="slideb"><text x="0" y="165" font-family="monospace" font-weight="700" font-size="13" fill="#7cf29a">' + o.sign + '</text></g>' +
      '<rect x="40" y="190" width="320" height="16" fill="#5a3a22"/><rect x="60" y="206" width="12" height="54" fill="#3a2614"/><rect x="328" y="206" width="12" height="54" fill="#3a2614"/>' +
      '<rect x="80" y="160" width="70" height="30" rx="3" fill="#3a2614" stroke="#d4af37" stroke-width="2"/><path d="M104 160v-8h22v8" stroke="#3a2614" stroke-width="4" fill="none"/><rect x="110" y="172" width="10" height="6" fill="#d4af37"/>' +
      '<g class="bob"><rect x="260" y="168" width="60" height="22" fill="#f6efdc"/><rect x="264" y="162" width="52" height="8" fill="#f6efdc" opacity=".8"/></g>' +
      '<rect x="190" y="156" width="34" height="34" fill="#222"/><g class="spin"><circle cx="207" cy="173" r="12" fill="#111"/><circle cx="207" cy="173" r="4" fill="' + o.c1 + '"/></g>' +
      (o.tag ? tag(o.tag[0], 100, 246, 26, o.tag[1], -3) : ''), sky("sk", "#0d1022", "#4a3a6a"));
  }
  /* minor-league ballpark: stands, scoreboard, ball arcing */
  function ballpark(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(10) +
      '<path d="M0 140V80l400-10v70z" fill="#3a4050"/>' + windows(10, 90, 19, 2, 20, 18, 14, 8, o.c2, "#5a6070") +
      '<rect x="150" y="16" width="100" height="50" fill="#111" stroke="#cfd6de" stroke-width="3"/>' + txt(o.sign || "HOME 9  AWAY 3", 200, 46, 11, "#ffb020") + '<rect x="196" y="66" width="8" height="16" fill="#555"/>' +
      [30, 370].map(x => '<rect x="' + (x - 2) + '" y="10" width="4" height="70" fill="#888"/><rect x="' + (x - 14) + '" y="6" width="28" height="12" fill="#fff6c2"/><g opacity=".3"><path class="pls" d="M' + (x - 14) + ' 18l-40 120h108l-40-120z" fill="#fff6c2"/></g>').join("") +
      '<rect x="0" y="140" width="400" height="120" fill="#3f8a3a"/><path d="M200 250l-90-60 90-40 90 40z" fill="#c8945a"/><path d="M200 230l-60-40 60-26 60 26z" fill="#3f8a3a"/><rect x="196" y="244" width="8" height="8" fill="#fff"/>' +
      '<g style="animation:hop 2s ease-in-out infinite"><circle cx="200" cy="200" r="4" fill="#fff"/></g>' +
      '<g class="bob"><ellipse cx="60" cy="216" rx="16" ry="12" fill="#f2c14e"/><circle cx="70" cy="200" r="9" fill="#f2c14e"/><path d="M78 200l8 2-8 3z" fill="#ff8a3d"/><circle cx="72" cy="198" r="1.5" fill="#111"/></g>' +
      (o.tag ? tag(o.tag[0], 240, 250, 22, o.tag[1], -3) : ''), sky("sk", "#0d1430", "#3a4a7a"));
  }
  /* stone castle by the water: towers, battlements, flag */
  function castle(o) {
    const crenel = (x, w, y) => { let s = ""; for (let i = x; i < x + w; i += 12) s += '<rect x="' + i + '" y="' + (y - 8) + '" width="8" height="8" fill="#a39c8e"/>'; return s; };
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="70" cy="40" r="16" fill="#fff3c4"/>' +
      '<rect x="110" y="90" width="200" height="110" fill="#a39c8e"/>' + crenel(110, 200, 90) +
      '<rect x="160" y="40" width="50" height="160" fill="#b0a99a"/>' + crenel(160, 50, 40) + '<rect x="250" y="60" width="44" height="140" fill="#9a9386"/>' + crenel(250, 44, 60) +
      [175, 262].map(x => '<path d="M' + x + ' 120v-20a8 8 0 0 1 16 0v20z" fill="#2a2030"/>').join("") + '<path d="M120 200v-40a10 10 0 0 1 20 0v40z" fill="#2a2030"/>' +
      '<rect x="184" y="10" width="2" height="22" fill="#ccc"/><path class="sway" d="M186 10h20l-5 6 5 6h-20z" fill="' + o.c1 + '"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (114 + (i % 4) * 46) + '" y="' + (140 + Math.floor(i / 4) * 24) + '" width="30" height="10" fill="#8f887b" opacity=".6"/>').join("") +
      '<path d="M0 200q100-10 200 0t200 0v60H0z" fill="#2a5a7a"/><path d="M0 220h400M0 240h400" stroke="#4a7a9a" stroke-width="2" stroke-dasharray="14 18"/>' +
      '<g class="slide slw"><path d="M0 214h50l-8 10H8z" fill="#f4f0e6"/><path d="M24 212v-30l18 28z" fill="#fff"/></g>' + tree(40, 170, 24) + tree(360, 166, 26, "sw2") +
      (o.tag ? tag(o.tag[0], 210, 250, 22, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f4e3c1"));
  }
  /* neoclassical city hall: white columns, steps, flag waving */
  function cityhall(o) {
    let colz = ""; for (let x = 120; x <= 280; x += 32) colz += '<rect x="' + x + '" y="96" width="14" height="100" fill="#f4f0e6"/><rect x="' + (x - 3) + '" y="92" width="20" height="6" fill="#e2dccd"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<rect x="60" y="80" width="280" height="130" fill="#e8e2d4"/><path d="M100 84l100-40 100 40z" fill="#f4f0e6" stroke="#cfc8b8" stroke-width="2"/>' + colz +
      windows(70, 100, 2, 3, 20, 30, 12, 18, "#ffe6a8", "#2a3550") + windows(304, 100, 2, 3, 20, 30, 12, 18, "#ffe6a8", "#2a3550") +
      '<rect x="80" y="196" width="240" height="8" fill="#d8d2c4"/><rect x="70" y="204" width="260" height="8" fill="#cfc8b8"/><rect x="60" y="212" width="280" height="8" fill="#c8c0b0"/>' +
      '<rect x="199" y="10" width="2" height="36" fill="#bbb"/><g class="sway swt" style="transform-origin:left center"><path d="M201 10h28v16h-28z" fill="' + o.c1 + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4f7a45"/>' + tree(30, 180, 26) + tree(372, 184, 24, "sw2") + '<rect x="0" y="244" width="400" height="16" fill="#3a3a3a"/>' +
      (o.tag ? tag(o.tag[0], 110, 250, 22, o.tag[1], -3) : ''), sky("sk", "#8fc3ea", "#f6e7c6"));
  }
  /* smooth lounge: velvet booth, a sax on a stand, notes drifting up */
  function lounge(o) {
    return svg('<rect width="400" height="260" fill="#1a0e18"/>' + '<rect x="0" y="0" width="400" height="170" fill="#3a1428"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 50 + 25) + ' 0v170" stroke="#2a0e1e" stroke-width="10"/>').join("") +
      [80, 200, 320].map((x, i) => '<g class="sway swt' + (i % 2 ? ' sw2' : '') + '"><path d="M' + x + ' 0v34" stroke="#d4af37" stroke-width="2"/><path d="M' + (x - 14) + ' 48l14-14 14 14z" fill="#d4af37"/></g><g opacity=".14"><circle class="pls" cx="' + x + '" cy="56" r="40" fill="#ffd9a0"/></g>').join("") +
      '<path d="M30 170q0-60 60-60h80q60 0 60 60z" fill="#6a1a3a"/>' + [60, 100, 140, 180].map(x => '<path d="M' + x + ' 116v50" stroke="#4a0e28" stroke-width="3"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#2a1420"/><ellipse cx="130" cy="200" rx="60" ry="12" fill="#1a0a12"/><rect x="126" y="200" width="8" height="40" fill="#111"/>' +
      '<g transform="translate(300 90)"><path d="M10 0v80q0 30 26 30t26-20" stroke="#d4af37" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M62 90l10-16" stroke="#d4af37" stroke-width="12" stroke-linecap="round"/><path d="M4 0h14" stroke="#222" stroke-width="4"/></g>' +
      [[250, "♪"], [280, "♫"], [340, "♪"]].map((v, i) => '<text class="rise' + (i ? ' r' + (i + 1) : '') + '" x="' + v[0] + '" y="110" ' + FONT + ' font-size="20" fill="' + o.c1 + '">' + v[1] + '</text>').join("") +
      (o.tag ? tag(o.tag[0], 30, 250, 26, o.tag[1], -3) : ''), "");
  }
  /* Philipse Manor Hall: grey stone Georgian manor, white trim, hipped roof */
  function manorhall(o) {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' +
      '<rect x="80" y="80" width="240" height="140" fill="#8a8478"/><path d="M70 82l30-30h200l30 30z" fill="#4a4a52"/><rect x="70" y="78" width="260" height="6" fill="#f4f0e6"/>' +
      [150, 250].map(x => '<rect x="' + (x - 6) + '" y="30" width="12" height="26" fill="#7a4a3a"/>').join("") +
      windows(98, 96, 7, 2, 32, 46, 16, 26, "#ffe6a8", "#2a3550") + [98, 130, 162, 194, 226, 258, 290].map(x => '<rect x="' + (x - 2) + '" y="94" width="20" height="3" fill="#f4f0e6"/><rect x="' + (x - 2) + '" y="140" width="20" height="3" fill="#f4f0e6"/>').join("") +
      '<rect x="186" y="176" width="28" height="44" fill="#f4f0e6"/><rect x="190" y="180" width="20" height="40" fill="#3a2a22"/><path d="M182 178h36l-18-12z" fill="#f4f0e6"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4f7a45"/><rect x="0" y="244" width="400" height="16" fill="#3a3a3a"/>' + tree(36, 176, 26) + tree(366, 180, 24, "sw2") +
      '<g class="fly"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      (o.tag ? tag(o.tag[0], 110, 254, 22, o.tag[1], -3) : ''), sky("sk", "#7fb3e0", "#f4e3c1"));
  }
  /* Hudson riverfront pier, the Palisades cliffs across the water, a boat going by */
  function riverpier(o) {
    let cliff = ""; for (let x = 0; x < 400; x += 14) cliff += '<path d="M' + x + ' 70v50" stroke="#6a5a4a" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="320" cy="40" r="16" fill="#fff3c4"/>' +
      '<path d="M0 70q100-10 200-4t200-4v58H0z" fill="#7a6a58"/>' + cliff + '<path d="M0 66q100-14 200-8t200-6v12H0z" fill="#3f7a3a"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#3b6a8a"/><path d="M0 140h400M0 170h400" stroke="#5a8aaa" stroke-width="2" stroke-dasharray="14 18"/>' +
      '<g class="slide slw"><path d="M0 150h90l-10 14H8z" fill="#f4f0e6"/><rect x="20" y="138" width="50" height="12" fill="' + o.c1 + '"/></g>' +
      '<path d="M120 260l40-80h80l40 80z" fill="#8a6a4a"/><path d="M160 180h80" stroke="#5a3a22" stroke-width="4"/>' + [170, 200, 230].map(x => '<rect x="' + (x - 2) + '" y="160" width="4" height="22" fill="#222"/><circle class="pls" cx="' + x + '" cy="158" r="5" fill="#fff6c2"/>').join("") +
      '<path d="M120 260l40-80" stroke="#5a3a22" stroke-width="3"/><path d="M280 260l-40-80" stroke="#5a3a22" stroke-width="3"/>' +
      [[100, 40], [220, 30]].map((v, i) => '<g class="fly" style="animation-delay:' + (-i * 5) + 's"><path d="M0 ' + v[1] + 'q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>').join("") +
      (o.tag ? tag(o.tag[0], 20, 230, 24, o.tag[1], -3) : ''), sky("sk", "#f7b267", "#9fd0ea"));
  }
  /* arcade cabinet: screen with a blinking high score */
  function arcade(o) {
    const cab = (x, c, s) => '<path d="M' + x + ' 236V60l10-20h80l10 20v176z" fill="' + c + '"/><rect x="' + (x + 12) + '" y="70" width="76" height="60" fill="#0a0a1a" stroke="#111" stroke-width="3"/>' +
      '<rect x="' + (x + 10) + '" y="46" width="80" height="16" fill="#111"/>' + txt(s, x + 50, 58, 10, "#ffb020") +
      '<rect x="' + x + '" y="140" width="100" height="30" fill="#222"/><circle cx="' + (x + 30) + '" cy="152" r="5" fill="#d7263d"/><rect x="' + (x + 28) + '" y="140" width="4" height="12" fill="#111"/><circle cx="' + (x + 60) + '" cy="156" r="5" fill="' + o.c1 + '"/><circle cx="' + (x + 76) + '" cy="156" r="5" fill="' + o.c2 + '"/>';
    return svg('<rect width="400" height="260" fill="#120e1e"/>' + '<rect x="0" y="236" width="400" height="24" fill="#2a1f3a"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (i * 50) + '" y="236" width="25" height="24" fill="#1a1428"/>').join("") +
      cab(20, "#2a5aa8", "HIGH SCORE") + cab(150, o.c3, o.sign) + cab(280, "#d7263d", "PLAYER 1") +
      '<text class="blk" x="200" y="96" text-anchor="middle" font-family="monospace" font-weight="700" font-size="16" fill="#7cf29a">999999</text>' + '<text class="blk b3" x="200" y="118" text-anchor="middle" font-family="monospace" font-size="9" fill="#fff">INSERT COIN</text>' +
      '<g class="slide"><rect x="40" y="96" width="8" height="8" fill="#ffd34d"/></g>' + '<g class="hop" style="animation-duration:1.4s"><rect x="340" y="110" width="10" height="10" fill="#7cf29a"/></g>' +
      '<rect class="blk b2" x="30" y="110" width="10" height="10" fill="' + o.c2 + '"/><rect class="pls" x="300" y="80" width="20" height="10" fill="#ff8ab0"/>' +
      (o.tag ? tag(o.tag[0], 90, 30, 24, o.tag[1], -3) : ''), "");
  }

  window.SCENES = {
    station: function () { return railStation({name:"Hempstead", line:"LIRR", sky:["#8fc3ea","#f6d9a6"], tag:["NEW SCHOOL","#38e8ff"]}); },
    arena: function () { return coliseum({c1:"#38e8ff", c2:"#ffd34d", sign:"TONIGHT: L.O.N.S.", tag:["UNIONDALE","#38e8ff"]}); },
    classroom: function () { return classroom({c1:"#ffd34d", sign:"Case of the P.T.A.", sign2:"Today: What's Next?", tag:["HOMEROOM","#38e8ff"]}); },
    coaster: function () { return coaster({c1:"#38e8ff", c2:"#ff5ab0", tag:["ZONE COASTER","#ffd34d"]}); },
    corner: function () { return corner({s1:"Uniondale Av", s2:"Front St", tags:[["L.O.N.S.","#38e8ff",50],["WHAT'S NEXT","#ffd34d",26],["NEW SCHOOL","#ff5ab0"],["UNIONDALE","#f6efdc"]]}); }
  };
})();
