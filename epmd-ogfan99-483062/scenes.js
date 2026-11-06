/* EPMD game (Long Island map, Brentwood, where Erick Sermon and Parrish Smith met in high school).
   Suffolk Transit Route 11 pulling up on Washington Av, 1974 Broadway in Manhattan (where they walked in with the demo and signed),
   North Shore Soundworks in West Babylon (where Strictly Business was cut), the Long Island Music Hall of Fame on Main St in Stony Brook,
   and Jackson Av & Madison Av in Brentwood's presidential-streets grid with Pilgrim State's brick towers behind. 400 x 260 SVGs.
   All animation classes are prefixed ep- so they never clash with the game's own CSS. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes epslide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.ep-slide{animation:epslide 9s linear infinite}.ep-sl2{animation-delay:-4.5s}' +
    '@keyframes epslideb{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.ep-slideb{animation:epslideb 7s linear infinite}.ep-sb2{animation-delay:-3.5s}' +
    '@keyframes epblink{0%,100%{opacity:.25}50%{opacity:1}}.ep-bl{animation:epblink 1.6s ease-in-out infinite}.ep-bl2{animation-delay:-.5s}.ep-bl3{animation-delay:-1s}' +
    '@keyframes epflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ep-flk{animation:epflick 2.4s infinite}' +
    '@keyframes epspin{to{transform:rotate(360deg)}}.ep-spin{transform-box:fill-box;transform-origin:50% 50%;animation:epspin 2.2s linear infinite}' +
    '@keyframes epmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ep-mt{transform-box:fill-box;transform-origin:50% 100%;animation:epmeter .6s ease-in-out infinite}.ep-mt2{animation-delay:-.2s}.ep-mt3{animation-delay:-.4s}' +
    '@keyframes epbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ep-bob{animation:epbob 1.4s ease-in-out infinite}.ep-bob2{animation-delay:-.7s}' +
    '@keyframes epsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ep-sway{animation:epsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}.ep-sw2{animation-delay:-1.5s}' +
    '@keyframes eprise{0%{transform:translateY(0);opacity:0}20%{opacity:.9}100%{transform:translateY(-60px);opacity:0}}.ep-rise{animation:eprise 3.4s linear infinite}.ep-r2{animation-delay:-1.1s}.ep-r3{animation-delay:-2.2s}' +
    '@keyframes epdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.ep-drp{animation:epdrip 2.2s ease-in infinite}' +
    '@keyframes epshine{0%,100%{opacity:0}50%{opacity:.9}}.ep-shn{animation:epshine 2.6s ease-in-out infinite}.ep-sh2{animation-delay:-1.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot == null ? -6 : rot) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + FONT + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect' + (on && (r + c) % 3 === 0 ? ' class="ep-bl' + ((r + c) % 2 ? ' ep-bl2' : '') + '"' : '') + ' x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"/>'; } return s; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* digits drawn as straight strokes (seven-segment style) so every 9 has a straight stem */
  const SEG = { "0": "abcdef", "1": "bc", "2": "abged", "3": "abgcd", "4": "fgbc", "5": "afgcd", "6": "afgedc", "7": "abc", "8": "abcdefg", "9": "abcfgd" };
  const digits = (s, x, y, h, col, sw) => { const w = h * 0.55, gap = h * 0.25; let out = '<g stroke="' + col + '" stroke-width="' + (sw || h / 7) + '" stroke-linecap="round" fill="none">';
    String(s).split("").forEach((ch, i) => { const X = x + i * (w + gap), m = y + h / 2, sg = SEG[ch] || "";
      const P = { a: [X, y, X + w, y], b: [X + w, y, X + w, m], c: [X + w, m, X + w, y + h], d: [X, y + h, X + w, y + h], e: [X, m, X, y + h], f: [X, y, X, m], g: [X, m, X + w, m] };
      if (ch === "1") out += '<path d="M' + (X + w) + ' ' + y + 'V' + (y + h) + '"/>';
      else sg.split("").forEach(k => { const p = P[k]; out += '<path d="M' + p[0] + ' ' + p[1] + 'L' + p[2] + ' ' + p[3] + '"/>'; }); });
    return out + '</g>'; };
  const blade = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, cx, y + 13, 11, "#fff"); };
  const pine = (x, y, s, cls) => '<g class="ep-sway ' + (cls || "") + '"><rect x="' + (x - 3) + '" y="' + (y + 40 * s) + '" width="6" height="' + 18 * s + '" fill="#5a3a22"/><path d="M' + x + ' ' + y + 'l' + (-18 * s) + ' ' + 44 * s + 'h' + 36 * s + 'z" fill="#2f5a34"/><path d="M' + x + ' ' + (y - 14 * s) + 'l' + (-13 * s) + ' ' + 32 * s + 'h' + 26 * s + 'z" fill="#3b6e40"/></g>';
  const cab = (cls, col) => '<g class="' + cls + '"><rect x="0" y="226" width="58" height="18" rx="5" fill="' + col + '"/><rect x="12" y="218" width="34" height="11" rx="3" fill="#cfe6ff"/><circle cx="13" cy="245" r="5" fill="#111"/><circle cx="45" cy="245" r="5" fill="#111"/></g>';
  const GREEN = "#7ed957", GOLD = "#f2c14e", CREAM = "#f6efdc";

  /* 1. Suffolk Transit Route 11 on Washington Av, Brentwood: the stop pole and its blue route plate, a ranch house and pines, the white bus pulling in */
  function busstop() {
    const house = (x, c) => '<path d="M' + x + ' 176l40-26 40 26v38h-80z" fill="' + c + '"/><path d="M' + (x - 6) + ' 178l46-30 46 30" fill="none" stroke="#5a4a42" stroke-width="5"/><rect x="' + (x + 12) + '" y="186" width="16" height="14" fill="#ffe6a8"/><rect x="' + (x + 50) + '" y="186" width="16" height="14" fill="#cfe6ff"/><rect x="' + (x + 33) + '" y="192" width="12" height="22" fill="#6a4a3a"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="252" cy="34" r="16" fill="#fff3c4"/>' +
      '<g class="ep-slide" style="animation-duration:26s"><ellipse cx="60" cy="56" rx="30" ry="9" fill="#fff" opacity=".8"/><ellipse cx="84" cy="50" rx="18" ry="8" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 200q100-20 200-14t200 14v20H0z" fill="#6a8a4a"/>' +
      pine(26, 138, 1.1) + pine(372, 132, 1.2, "ep-sw2") + house(150, "#d9cbb0") + house(250, "#b9c9d6") + pine(118, 150, .9, "ep-sw2") +
      '<rect x="0" y="212" width="400" height="10" fill="#cfd3d8"/><rect x="0" y="222" width="400" height="38" fill="#3a3d44"/><path d="M0 246h400" stroke="#f4c430" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* stop pole and plate */
      '<rect x="44" y="96" width="5" height="120" fill="#8a9098"/>' +
      '<rect x="14" y="56" width="66" height="58" rx="4" fill="#0b4f9c" stroke="#fff" stroke-width="2"/>' + txt("BUS", 47, 74, 13, "#fff") + txt("STOP", 47, 88, 11, "#fff") +
      '<rect x="31" y="94" width="32" height="16" rx="3" fill="#fff"/>' + digits("11", 39, 97, 10, "#0b4f9c", 2) +
      '<rect x="88" y="62" width="128" height="36" rx="4" fill="#111"/><rect x="88" y="62" width="128" height="3" fill="#fff"/>' + txt("Washington Av", 98, 85, 14, "#fff", "start") +
      /* the bus */
      '<g class="anim-train"><rect x="196" y="150" width="190" height="66" rx="8" fill="#f4f4f2" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="196" y="194" width="190" height="6" fill="#0b4f9c"/><rect x="196" y="200" width="190" height="3" fill="#3fae5a"/>' +
      [214, 248, 282, 316].map(x => '<rect x="' + x + '" y="160" width="28" height="24" rx="3" fill="#cfe6ff" opacity=".9"/>').join("") +
      '<rect x="350" y="156" width="30" height="40" rx="3" fill="#1d2a3a"/><rect x="352" y="158" width="26" height="12" fill="#111"/>' + digits("11", 356, 160, 8, "#ffb020", 1.6) +
      '<circle cx="230" cy="218" r="11" fill="#111"/><circle cx="350" cy="218" r="11" fill="#111"/><circle cx="230" cy="218" r="4" fill="#888"/><circle cx="350" cy="218" r="4" fill="#888"/>' +
      '<circle cx="383" cy="206" r="3" fill="#fff6c2"/></g>' +
      cab("ep-slideb", "#c0392b"), sky("sk", "#7fbfe8", "#f2e0b6"));
  }
  /* 2. 1974 Broadway, Manhattan: the pre-war office building where they walked in with the demo tape and signed. Cabs on Broadway, the tape bobbing in the doorway */
  function broadway() {
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(14) +
      '<rect x="0" y="70" width="70" height="166" fill="#4a4250"/>' + windows(8, 82, 3, 7, 20, 20, 12, 12, "#ffe6a8", "#2a2533") +
      '<rect x="330" y="60" width="70" height="176" fill="#3e4652"/>' + windows(338, 72, 3, 8, 20, 20, 12, 12, "#ffe6a8", "#262a33") +
      '<rect x="80" y="40" width="240" height="196" fill="#c9b48e"/><rect x="74" y="34" width="252" height="10" fill="#a8946e"/>' +
      windows(96, 56, 7, 4, 31, 24, 18, 15, "#ffe6a8", "#3a3446") +
      '<rect x="80" y="150" width="240" height="8" fill="#a8946e"/>' +
      '<rect x="92" y="164" width="70" height="56" fill="#2a3a4a"/><rect x="238" y="164" width="70" height="56" fill="#2a3a4a"/><g opacity=".3"><rect class="ep-flk" x="96" y="168" width="62" height="48" fill="#ffd66b"/></g>' +
      '<rect x="172" y="158" width="56" height="78" fill="#3a2a22"/><rect x="178" y="176" width="44" height="60" fill="#1a1412"/>' +
      '<rect x="170" y="160" width="60" height="14" fill="#1a1412"/>' + digits("1974", 182, 163, 8, GOLD, 1.8) +
      '<path d="M166 158l8-10h52l8 10z" fill="#1f5a3a"/>' +
      /* the demo tape bobbing in the doorway */
      '<g class="ep-bob"><rect x="184" y="196" width="32" height="20" rx="2" fill="#f4f4f2" stroke="#333" stroke-width="1.5"/><rect x="188" y="200" width="24" height="6" fill="' + GREEN + '"/><circle cx="194" cy="210" r="3" fill="#333"/><circle cx="206" cy="210" r="3" fill="#333"/></g>' +
      '<g class="ep-rise"><text x="222" y="190" font-size="14" fill="' + GOLD + '">&#9835;</text></g><g class="ep-rise ep-r2"><text x="170" y="186" font-size="12" fill="#fff">&#9834;</text></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#2a2d33"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="350" y="150" width="4" height="86" fill="#1d2329"/>' + blade(352, 152, "Broadway") +
      cab("ep-slide", "#f4c430") + cab("ep-slideb ep-sb2", "#f4c430") +
      txt("BROADWAY · MANHATTAN", 200, 22, 11, CREAM),
      sky("sk", "#101830", "#3a2a4a"));
  }
  /* 3. North Shore Soundworks, West Babylon, 1988: the board where Strictly Business was cut. Meters jumping, tape reels turning, the vocal booth glass with the mic */
  function soundworks() {
    let faders = ""; for (let i = 0; i < 16; i++) faders += '<rect x="' + (64 + i * 17) + '" y="196" width="3" height="26" fill="#111"/><rect x="' + (60 + i * 17) + '" y="' + (200 + (i * 7) % 16) + '" width="11" height="6" rx="1" fill="' + (i % 4 ? "#d0d0d0" : GREEN) + '"/>';
    let meters = ""; for (let i = 0; i < 10; i++) meters += '<rect class="ep-mt' + (i % 3 ? " ep-mt" + (i % 3 + 1) : "") + '" x="' + (120 + i * 16) + '" y="164" width="10" height="20" fill="' + (i % 5 === 4 ? "#e63946" : i % 2 ? GOLD : GREEN) + '"/>';
    return svg('<rect width="400" height="260" fill="#1b1612"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="#3a2e26"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 40 + 4) + '" y="6" width="32" height="32" fill="#4a3a30"/>').join("") +
      /* booth glass */
      '<rect x="110" y="44" width="180" height="96" rx="4" fill="#0e1a22" stroke="#6b5a4a" stroke-width="5"/><g opacity=".1"><rect class="ep-flk" x="116" y="50" width="168" height="84" fill="' + GREEN + '"/></g>' +
      '<path d="M200 134V90" stroke="#bdbdbd" stroke-width="3"/><rect x="193" y="72" width="14" height="22" rx="7" fill="#c0c7d1"/><path d="M186 134h28" stroke="#bdbdbd" stroke-width="3"/>' +
      '<path d="M128 52l30 80M150 52l24 70" stroke="#fff" stroke-width="2" opacity=".08"/>' +
      /* tape machine on the left */
      '<rect x="14" y="54" width="80" height="96" rx="4" fill="#2a2a2c" stroke="#555" stroke-width="2"/>' +
      '<g class="ep-spin"><circle cx="34" cy="80" r="15" fill="#444"/><circle cx="34" cy="80" r="4" fill="#bbb"/><path d="M34 66v28M20 80h28" stroke="#666" stroke-width="3"/></g>' +
      '<g class="ep-spin"><circle cx="74" cy="80" r="15" fill="#444"/><circle cx="74" cy="80" r="4" fill="#bbb"/><path d="M74 66v28M60 80h28" stroke="#666" stroke-width="3"/></g>' +
      '<path d="M34 95q20 18 40 0" stroke="#5a3a1a" stroke-width="2" fill="none"/><rect x="22" y="118" width="64" height="22" fill="#e8e0c8"/>' + txt("STRICTLY", 54, 128, 8, "#1b1612") + txt("BUSINESS", 54, 137, 8, "#1b1612") +
      /* drum machine on the right */
      '<rect x="306" y="96" width="80" height="54" rx="4" fill="#2a2a2c" stroke="#555" stroke-width="2"/>' + [0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => '<rect class="' + ((r + c) % 3 === 0 ? 'ep-bl' + (c % 2 ? ' ep-bl3' : '') : '') + '" x="' + (314 + c * 17) + '" y="' + (102 + r * 11) + '" width="12" height="8" rx="1" fill="' + ((r + c) % 3 === 0 ? GOLD : "#555") + '"/>').join("")).join("") +
      /* the console */
      '<path d="M30 160h340l20 90H10z" fill="#3a3a3e"/><rect x="30" y="156" width="340" height="8" fill="#5a5a60"/>' +
      '<rect x="110" y="160" width="180" height="28" rx="2" fill="#0e0e10"/>' + meters + faders +
      txt("NORTH SHORE SOUNDWORKS · WEST BABYLON", 200, 252, 10, CREAM), "");
  }
  /* 4. The Long Island Music Hall of Fame, Main St, Stony Brook: the white colonial village front with green shutters, banners out, gold records shining in the window */
  function halloffame() {
    let shutters = ""; [112, 176, 240].forEach(x => shutters += '<rect x="' + (x - 8) + '" y="106" width="6" height="34" fill="#2f5a3a"/><rect x="' + x + '" y="106" width="22" height="34" fill="#cfe6ff"/><rect x="' + (x + 24) + '" y="106" width="6" height="34" fill="#2f5a3a"/>');
    const rec = (cx, cy, cls) => '<g class="' + cls + '"><circle cx="' + cx + '" cy="' + cy + '" r="15" fill="' + GOLD + '"/><circle cx="' + cx + '" cy="' + cy + '" r="10" fill="none" stroke="#c99a2a" stroke-width="1.5"/><circle cx="' + cx + '" cy="' + cy + '" r="4" fill="#7a5a10"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="340" cy="44" r="18" fill="#fff3c4"/>' +
      pine(30, 120, 1.3) + pine(370, 116, 1.4, "ep-sw2") +
      '<path d="M70 96l130-46 130 46z" fill="#5a5f66"/><rect x="186" y="34" width="28" height="30" fill="#f4f1ea"/><path d="M182 36l18-16 18 16z" fill="#5a5f66"/>' +
      '<rect x="80" y="96" width="240" height="140" fill="#f4f1ea"/>' + shutters +
      '<rect x="92" y="160" width="86" height="64" fill="#1a2a3a"/><rect x="222" y="160" width="86" height="64" fill="#1a2a3a"/>' +
      rec(116, 192, "ep-spin") + rec(154, 192, "ep-spin") + rec(246, 192, "ep-spin") + rec(284, 192, "ep-spin") +
      '<g opacity=".25"><rect class="ep-shn" x="96" y="164" width="78" height="56" fill="#fff"/><rect class="ep-shn ep-sh2" x="226" y="164" width="78" height="56" fill="#fff"/></g>' +
      '<rect x="186" y="160" width="28" height="76" fill="#2f5a3a"/><circle cx="208" cy="200" r="2" fill="' + GOLD + '"/><path d="M180 160l20-14 20 14z" fill="#f4f1ea" stroke="#d6cfc0"/>' +
      '<g class="ep-sway"><rect x="58" y="128" width="16" height="46" fill="' + GREEN + '"/><path d="M58 174l8-6 8 6z" fill="' + GREEN + '"/></g><path d="M66 128v-8" stroke="#8a9098" stroke-width="2"/>' +
      '<g class="ep-sway ep-sw2"><rect x="326" y="128" width="16" height="46" fill="' + GOLD + '"/><path d="M326 174l8-6 8 6z" fill="' + GOLD + '"/></g><path d="M334 128v-8" stroke="#8a9098" stroke-width="2"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#8a8072"/><rect x="0" y="236" width="400" height="4" fill="#bdb4a4"/>' +
      txt("MAIN ST · STONY BROOK", 200, 22, 11, "#1a2a3a") + '<rect x="96" y="144" width="208" height="14" fill="#2f5a3a"/>' + txt("LONG ISLAND MUSIC HALL OF FAME", 200, 155, 9.5, CREAM) +
      cab("ep-slide ep-sl2", "#2f6fd6"),
      sky("sk", "#86c5ee", "#f6e7c6"));
  }
  /* 5. Jackson Av & Madison Av, Brentwood: green signs, the wall tagged EPMD, Pilgrim State's tall brick buildings and water tower on the skyline */
  function corner() {
    const t = [["EPMD", GREEN, 56], ["STRICTLY BIZ", GOLD, 24], ["MIC DOCTOR", CREAM, 22], ["E DOUBLE + P", "#9fe3ff", 20]];
    const PIL = '<g opacity=".95"><rect x="270" y="96" width="44" height="124" fill="#8a4a3a"/>' + windows(276, 104, 3, 8, 13, 14, 7, 8, "#ffe6a8", "#5a2e24") +
      '<rect x="318" y="118" width="40" height="102" fill="#7a4232"/>' + windows(324, 126, 3, 6, 12, 15, 6, 8, "#ffe6a8", "#4e2a22") +
      '<rect x="362" y="64" width="4" height="56" fill="#5a5f66"/><rect x="384" y="64" width="4" height="56" fill="#5a5f66"/><path d="M366 80l18 20M384 80l-18 20" stroke="#5a5f66" stroke-width="2"/><ellipse cx="375" cy="58" rx="20" ry="14" fill="#9aa0a8"/><path d="M355 54q20-14 40 0" fill="#7a8088"/></g>';
    const fit = (x, d) => Math.min(x[2] || d, Math.floor(214 / (x[0].length * 0.7)));
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) + '<circle cx="232" cy="30" r="12" fill="#fff1d6"/>' + PIL +
      brick(16, 60, 240, 160, "#3e4a3c", "#4a5848") + '<rect x="16" y="56" width="240" height="6" fill="#1a2418"/>' +
      tag(t[0][0], 30, 130, fit(t[0], 56), t[0][1], -7) + tag(t[1][0], 34, 160, fit(t[1], 24), t[1][1], -4) + tag(t[2][0], 30, 190, fit(t[2], 22), t[2][1], -3) + tag(t[3][0], 60, 212, fit(t[3], 20), t[3][1], -2) +
      '<rect class="ep-drp" x="96" y="132" width="3" height="8" fill="' + GREEN + '"/><rect class="ep-drp" x="150" y="122" width="3" height="8" fill="' + GREEN + '" style="animation-delay:-1s"/>' +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="ep-flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      blade(302, 88, "Jackson Av") + blade(302, 110, "Madison Av") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      cab("ep-slide ep-sl2", GOLD), sky("sk", "#0f1a2e", "#c9806a"));
  }
  window.SCENES = { busstop: busstop, broadway: broadway, soundworks: soundworks, halloffame: halloffame, corner: corner };
})();
