/* Shyheim game (NYC map, Staten Island: Stapleton, "Stapletown" in his own words).
   The SIR pulling into Old Town, Madison Square Garden (where the Rugged Child freestyled as a kid in front of the legends),
   Gary, Indiana (on set for Original Gangstas, the steel mills smoking), the St. George ballpark for the baseball bars of
   "Here Come the Hits", and Gordon St & Grove St in Stapleton with the Victorian houses of Stapleton Heights up the hill. 400 x 260 SVGs.
   All animation classes are prefixed sh- so they never clash with the game's own CSS. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes shslide{from{transform:translateX(-160px)}to{transform:translateX(480px)}}.sh-slide{animation:shslide 9s linear infinite}.sh-sl2{animation-delay:-4.5s}' +
    '@keyframes shslideb{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.sh-slideb{animation:shslideb 7s linear infinite}' +
    '@keyframes shblink{0%,100%{opacity:.25}50%{opacity:1}}.sh-bl{animation:shblink 1.6s ease-in-out infinite}.sh-bl2{animation-delay:-.5s}.sh-bl3{animation-delay:-1s}' +
    '@keyframes shflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.sh-flk{animation:shflick 2.4s infinite}' +
    '@keyframes shspin{to{transform:rotate(360deg)}}.sh-spin{transform-box:fill-box;transform-origin:50% 50%;animation:shspin 2s linear infinite}' +
    '@keyframes shbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.sh-bob{animation:shbob 1.2s ease-in-out infinite}.sh-bob2{animation-delay:-.6s}' +
    '@keyframes shsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sh-sway{animation:shsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}.sh-sw2{animation-delay:-1.5s}' +
    '@keyframes shsmoke{0%{transform:translate(0,0) scale(.6);opacity:0}20%{opacity:.8}100%{transform:translate(30px,-70px) scale(1.6);opacity:0}}.sh-smk{transform-box:fill-box;transform-origin:50% 50%;animation:shsmoke 4s linear infinite}.sh-s2{animation-delay:-1.3s}.sh-s3{animation-delay:-2.6s}' +
    '@keyframes shbeam{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.sh-beam{transform-box:fill-box;transform-origin:50% 100%;animation:shbeam 4s ease-in-out infinite}.sh-bm2{animation-delay:-2s}' +
    '@keyframes shhit{0%{transform:translate(0,0)}100%{transform:translate(260px,-120px)}}.sh-ball{animation:shhit 2.4s cubic-bezier(.2,.6,.6,1) infinite}' +
    '@keyframes shdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.sh-drp{animation:shdrip 2.2s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot == null ? -6 : rot) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + FONT + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const windows = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect' + (on && (r + c) % 3 === 0 ? ' class="sh-bl' + ((r + c) % 2 ? ' sh-bl2' : '') + '"' : '') + ' x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"/>'; } return s; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  const pill = (x, y, l, col) => { const w = l.length * 9 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 11) + '" width="' + w + '" height="22" rx="11" fill="' + col + '"/>' + txt(l, x, y + 5, 12, "#fff"); };
  const blade = (cx, y, t) => { const w = t.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, cx, y + 13, 11, "#fff"); };
  const tree = (x, y, r, cls) => '<g class="sh-sway ' + (cls || "") + '"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + r * 1.6 + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x - r * .5) + '" cy="' + (y + 4) + '" r="' + r * .7 + '" fill="#4f8f45"/></g>';
  const car = (cls, col, y) => { y = y || 226; return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="58" height="18" rx="5" fill="' + col + '"/><rect x="12" y="' + (y - 8) + '" width="34" height="11" rx="3" fill="#cfe6ff"/><circle cx="13" cy="' + (y + 19) + '" r="5" fill="#111"/><circle cx="45" cy="' + (y + 19) + '" r="5" fill="#111"/></g>'; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="' + col + '"/><rect x="' + (x - 8) + '" y="' + (y + 8) + '" width="16" height="26" rx="6" fill="' + col + '"/></g>';
  const ORANGE = "#ff8a3d", GOLD = "#ffd23f", SKY = "#9ad1ff", SIR = "#0039a6";

  /* 1. Old Town on the Staten Island Railway: the platform on its embankment, the black sign with the blue SIR pill, the stainless car with its blue stripe sliding in */
  function oldtown() {
    let win = ""; for (let i = 26; i < 330; i += 40) win += '<rect x="' + i + '" y="100" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="340" cy="40" r="16" fill="#fff3c4"/>' +
      '<path d="M0 150q60-26 120-18t140-12 140 16v24H0z" fill="#4a6a3a"/>' + tree(40, 120, 18) + tree(120, 126, 14, "sh-sw2") + tree(300, 118, 20) + tree(370, 124, 16, "sh-sw2") +
      '<rect x="0" y="26" width="400" height="10" fill="#3a4250"/><rect x="0" y="36" width="400" height="3" fill="' + SIR + '"/>' +
      '<rect x="30" y="39" width="5" height="120" fill="#59616e"/><rect x="365" y="39" width="5" height="120" fill="#59616e"/>' +
      '<rect x="120" y="46" width="160" height="32" rx="4" fill="#111"/><rect x="120" y="46" width="160" height="4" fill="#fff"/>' + txt("Old Town", 134, 70, 16, "#fff", "start") + pill(250, 63, "SIR", SIR) +
      '<g class="anim-train"><rect x="10" y="88" width="340" height="66" rx="8" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/><rect x="10" y="128" width="340" height="8" fill="' + SIR + '"/>' + win +
      '<rect x="318" y="96" width="26" height="24" rx="3" fill="#1d2a3a"/><rect x="320" y="98" width="22" height="8" fill="#111"/>' + txt("SIR", 331, 105, 7, "#ffb020") +
      '<circle cx="342" cy="146" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="154" width="400" height="10" fill="#4a4e56"/><rect x="0" y="164" width="400" height="8" fill="#eab308"/><rect x="0" y="172" width="400" height="88" fill="#a9a398"/>' +
      '<rect x="60" y="182" width="62" height="20" rx="2" fill="#5a3a22"/><rect x="64" y="202" width="4" height="12" fill="#333"/><rect x="114" y="202" width="4" height="12" fill="#333"/>' +
      '<rect x="300" y="176" width="6" height="40" fill="#2b2f36"/><rect x="276" y="170" width="54" height="12" rx="2" fill="#111"/><text class="sh-bl" x="303" y="179" text-anchor="middle" font-family="monospace" font-size="7" fill="#ffb020">ST GEORGE</text>' +
      person(190, 196, "#3a3048", "sh-bob") + person(220, 198, "#5a2a22", "sh-bob sh-bob2"),
      sky("sk", "#86c5ee", "#f6e2c0"));
  }
  /* 2. Madison Square Garden: the round drum with its vertical ribs, the marquee bulbs blinking, searchlights, the line out front */
  function garden() {
    let ribs = ""; for (let x = 76; x <= 324; x += 16) ribs += '<rect x="' + x + '" y="70" width="5" height="96" fill="#b9b2a4"/>';
    let bulbs = ""; for (let x = 120; x <= 280; x += 10) bulbs += '<circle class="sh-bl' + ((x / 10) % 3 === 0 ? '' : (x / 10) % 3 === 1 ? ' sh-bl2' : ' sh-bl3') + '" cx="' + x + '" cy="176" r="2.5" fill="' + GOLD + '"/><circle class="sh-bl' + ((x / 10) % 2 ? ' sh-bl3' : '') + '" cx="' + x + '" cy="204" r="2.5" fill="' + GOLD + '"/>';
    let line = ""; [30, 50, 70, 330, 350, 370].forEach((x, i) => line += person(x, 206, ["#2a2238", "#3a1a2a", "#1a2a3a"][i % 3], "sh-bob" + (i % 2 ? " sh-bob2" : "")));
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(18) +
      '<g opacity=".2"><path class="sh-beam" d="M100 168l-40-168h24z" fill="' + SKY + '"/></g><g opacity=".18"><path class="sh-beam sh-bm2" d="M300 168l40-168h-24z" fill="' + ORANGE + '"/></g>' +
      '<rect x="0" y="120" width="60" height="116" fill="#2e2a38"/>' + windows(8, 130, 2, 5, 24, 20, 12, 12, "#ffe6a8", "#24202c") +
      '<rect x="340" y="110" width="60" height="126" fill="#33303e"/>' + windows(348, 120, 2, 5, 24, 20, 12, 12, "#ffe6a8", "#24202c") +
      '<ellipse cx="200" cy="70" rx="134" ry="18" fill="#cfc8b8"/><path d="M66 70v96h268V70z" fill="#d8d1c2"/>' + ribs + '<ellipse cx="200" cy="64" rx="128" ry="14" fill="#9a958c"/>' +
      '<rect x="66" y="160" width="268" height="6" fill="#8a8478"/>' +
      '<rect x="110" y="168" width="180" height="44" rx="3" fill="#0d0b10" stroke="#c0c7d1" stroke-width="2"/>' + bulbs + txt("TONIGHT", 200, 196, 16, ORANGE) +
      '<rect x="160" y="212" width="80" height="24" fill="#2a2420"/><rect x="0" y="236" width="400" height="24" fill="#2a2d33"/>' + line +
      car("sh-slideb", "#f4c430", 238) + txt("MADISON SQUARE GARDEN", 200, 30, 12, "#f6efdc"), sky("sk", "#0a0d1e", "#3a2a4a"));
  }
  /* 3. Gary, Indiana: on set for Original Gangstas. Steel mill stacks smoking on the lakefront, the camera on its tripod with the reels turning, a director's chair and the clapper */
  function gary() {
    let stacks = ""; [[40, 40], [70, 54], [100, 34], [300, 44], [334, 30]].forEach((s, i) => stacks += '<rect x="' + s[0] + '" y="' + s[1] + '" width="14" height="' + (150 - s[1]) + '" fill="#4a3e3a"/><rect x="' + s[0] + '" y="' + (s[1] + 8) + '" width="14" height="4" fill="#c0392b"/>' +
      '<circle class="sh-smk' + (i % 3 ? ' sh-s' + (i % 3 + 1) : '') + '" cx="' + (s[0] + 7) + '" cy="' + (s[1] - 6) + '" r="9" fill="#9a9088"/>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="200" cy="96" r="30" fill="#ffb26b" opacity=".85"/>' + stacks +
      '<rect x="0" y="110" width="400" height="44" fill="#5a4a44"/><rect x="130" y="96" width="150" height="58" fill="#6a5a52"/><path d="M130 96l20-14h110l20 14z" fill="#4a3e3a"/>' + windows(140, 106, 7, 2, 20, 18, 12, 10, "#ffcc80", "#3a2e2a") +
      '<rect x="0" y="154" width="400" height="106" fill="#3a3430"/><rect x="0" y="154" width="400" height="4" fill="#5a524c"/>' +
      /* camera */
      '<path d="M96 236l18-64M140 236l-18-64M118 236v-64" stroke="#2a2a2c" stroke-width="4"/><rect x="92" y="150" width="56" height="28" rx="3" fill="#1c1c20"/><rect x="148" y="156" width="18" height="14" fill="#2a2a30"/><circle cx="170" cy="163" r="6" fill="#4a6a8a"/>' +
      '<g class="sh-spin"><circle cx="104" cy="138" r="13" fill="none" stroke="#888" stroke-width="3"/><path d="M104 125v26M91 138h26" stroke="#888" stroke-width="2"/></g>' +
      '<g class="sh-spin"><circle cx="134" cy="138" r="13" fill="none" stroke="#888" stroke-width="3"/><path d="M134 125v26M121 138h26" stroke="#888" stroke-width="2"/></g>' +
      /* director chair */
      '<path d="M244 236l26-40M276 236l-26-40" stroke="#6b4a2a" stroke-width="4"/><rect x="240" y="188" width="40" height="8" fill="#6b4a2a"/><rect x="242" y="164" width="36" height="16" fill="' + ORANGE + '"/><path d="M242 164v32M278 164v32" stroke="#6b4a2a" stroke-width="3"/>' +
      /* clapperboard */
      '<g transform="translate(300 196)"><rect x="0" y="0" width="70" height="40" fill="#111"/><g class="sh-bob"><path d="M0 0l70-10v-8L0 -8z" fill="#f4f4f2"/><path d="M10 -9l8-1-4 9M30 -12l8-1-4 9M50 -15l8-1-4 9" stroke="#111" stroke-width="3"/></g>' +
      '<text x="35" y="16" text-anchor="middle" ' + FONT + ' font-size="7" fill="#f4f4f2">ORIGINAL</text><text x="35" y="28" text-anchor="middle" ' + FONT + ' font-size="7" fill="#f4f4f2">GANGSTAS</text></g>' +
      txt("GARY, INDIANA · ON SET", 200, 22, 12, "#2a1a14"), sky("sk", "#f2a05a", "#f6d6a8"));
  }
  /* 4. The St. George ballpark: the harbor and the towers across the water behind the outfield wall, the scoreboard blinking HITS, a ball flying out */
  function ballpark() {
    let towers = ""; [[150, 92, 18], [172, 78, 14], [190, 60, 16], [210, 84, 14], [230, 72, 18], [252, 90, 14]].forEach(t => towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (120 - t[1]) + '" fill="#8a9bb0"/>');
    return svg('<rect width="400" height="260" fill="url(#sk)"/><circle cx="60" cy="40" r="16" fill="#fff3c4"/>' + towers +
      '<path d="M186 60l4-22 4 22z" fill="#8a9bb0"/><rect x="0" y="118" width="400" height="16" fill="#3b6a8a"/>' +
      '<rect x="0" y="134" width="400" height="26" fill="#1f5a3a"/><rect x="0" y="134" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="296" y="66" width="90" height="62" fill="#1a1a1c" stroke="#555" stroke-width="2"/><rect x="304" y="74" width="74" height="22" fill="#000"/>' + txt("HITS", 341, 92, 16, ORANGE, "middle", ' class="sh-bl"') +
      '<rect x="304" y="100" width="74" height="20" fill="#000"/>' + [0, 1, 2, 3, 4, 5].map(i => '<circle class="' + (i % 2 ? 'sh-bl sh-bl2' : 'sh-bl') + '" cx="' + (312 + i * 12) + '" cy="110" r="3.5" fill="' + GOLD + '"/>').join("") +
      '<rect x="337" y="128" width="8" height="6" fill="#555"/>' +
      '<path d="M0 160h400v100H0z" fill="#3f8a3a"/><path d="M200 256L90 196l110-36 110 36z" fill="#c8915a"/><path d="M200 248L120 200l80-28 80 28z" fill="#4f9a45"/>' +
      '<rect x="196" y="236" width="8" height="8" fill="#fff" transform="rotate(45 200 240)"/><rect x="116" y="196" width="8" height="8" fill="#fff" transform="rotate(45 120 200)"/><rect x="276" y="196" width="8" height="8" fill="#fff" transform="rotate(45 280 200)"/><rect x="196" y="168" width="8" height="8" fill="#fff" transform="rotate(45 200 172)"/>' +
      '<circle cx="200" cy="208" r="8" fill="#c8915a"/>' +
      '<g class="sh-ball"><circle cx="110" cy="230" r="4" fill="#fff" stroke="#c0392b" stroke-width="1"/></g>' +
      txt("ST. GEORGE BALLPARK · STATEN ISLAND", 200, 26, 11, "#1a2a3a"), sky("sk", "#7fbfe8", "#e8f2f6"));
  }
  /* 5. Gordon St & Grove St, Stapleton: green signs, the wall tagged SHYHEIM, the Victorian houses of Stapleton Heights up the hill behind */
  function corner() {
    const vic = (x, y, c, roof) => '<rect x="' + x + '" y="' + y + '" width="40" height="' + (220 - y) + '" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l8-18h32l8 18z" fill="' + roof + '"/><rect x="' + (x + 14) + '" y="' + (y - 30) + '" width="12" height="14" fill="' + c + '"/><path d="M' + (x + 12) + ' ' + (y - 30) + 'l8-10 8 10z" fill="' + roof + '"/>' + windows(x + 6, y + 6, 2, 3, 18, 18, 9, 12, "#ffe6a8", "#2a2420");
    const t = [["SHYHEIM", ORANGE, 46], ["RUGGED CHILD", GOLD, 24], ["STAPLETOWN", SKY, 22], ["SHAOLIN", "#f6efdc", 20]];
    const fit = (x, d) => Math.min(x[2] || d, Math.floor(214 / (x[0].length * 0.7)));
    return svg('<rect width="400" height="260" fill="url(#sk)"/>' + stars(16) + '<circle cx="236" cy="28" r="11" fill="#fff1d6"/>' +
      '<path d="M250 220V150q60-50 150-60v130z" fill="#2a3a2a"/>' + vic(268, 128, "#7a5a8a", "#3a2a3a") + vic(316, 112, "#5a7a6a", "#2a3a32") + vic(360, 104, "#8a6a4a", "#3a2a1a") +
      brick(16, 60, 240, 160, "#5a3226", "#6a3c2e") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' +
      tag(t[0][0], 30, 130, fit(t[0], 46), t[0][1], -7) + tag(t[1][0], 34, 160, fit(t[1], 24), t[1][1], -4) + tag(t[2][0], 30, 190, fit(t[2], 22), t[2][1], -3) + tag(t[3][0], 70, 212, fit(t[3], 20), t[3][1], -2) +
      '<rect class="sh-drp" x="110" y="132" width="3" height="8" fill="' + ORANGE + '"/><rect class="sh-drp" x="170" y="122" width="3" height="8" fill="' + ORANGE + '" style="animation-delay:-1s"/>' +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/><path class="sh-flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/>' +
      blade(302, 88, "Gordon St") + blade(302, 110, "Grove St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("sh-slide sh-sl2", "#2f6fd6"), sky("sk", "#101a34", "#c8706a"));
  }
  window.SCENES = { oldtown: oldtown, garden: garden, gary: gary, ballpark: ballpark, corner: corner };
})();
