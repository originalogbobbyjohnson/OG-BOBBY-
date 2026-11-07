/* bg scenes (Regions tab: New Orleans; Uptown, the 13th Ward / Freret - where B.G. grew up, "V.L. in the 13th" = Valence St). CSS classes and ids prefixed bg- (the page's own anim-train is kept).
   1 Freret St / Valence St on RTA bus route 15 (Freret): the bus pulls in past Uptown shotgun houses and a live oak.
   2 "Bling Bling" in the dictionary: B.G.'s 1999 hit put the word in the dictionary (added 2003) - an open dictionary, a swinging iced-out medallion, sparkles.
   3 The Freret Street commercial strip in the 13th Ward on festival day: two-story storefronts with galleries, string lights, a brass band and the crowd bouncing (silhouettes).
   4 "Ridin' on chrome": a candy-paint car on chrome 20s rolling under the Uptown oaks at sunset, rims spinning.
   5 Valence St and Freret St: green signs, GEEZY tagged on the brick, St. Stephen Church's tall Gothic spire (Napoleon Av) behind at dusk. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bgflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.bg-flk{animation:bgflick 2.2s infinite}.bg-flk2{animation-delay:.8s}' +
    '@keyframes bgmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.bg-moss{transform-box:fill-box;transform-origin:50% 0%;animation:bgmoss 3.4s ease-in-out infinite}.bg-moss2{animation-delay:-1.7s}' +
    '@keyframes bgswing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}.bg-swing{transform-box:view-box;transform-origin:300px 40px;animation:bgswing 2.6s ease-in-out infinite}' +
    '@keyframes bgtw{0%,100%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1)}}.bg-tw{transform-box:fill-box;transform-origin:50% 50%;animation:bgtw 1.6s ease-in-out infinite}.bg-tw2{animation-delay:-.5s}.bg-tw3{animation-delay:-1.1s}' +
    '@keyframes bgbnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bg-bnc{animation:bgbnc .7s ease-in-out infinite}.bg-bnc2{animation-delay:-.35s}' +
    '@keyframes bglite{0%,100%{opacity:1}50%{opacity:.35}}.bg-lt{animation:bglite 1.2s infinite}.bg-lt2{animation-delay:-.6s}' +
    '@keyframes bgspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bgspin .9s linear infinite}' +
    '@keyframes bgroll{0%{transform:translateX(-30px)}50%{transform:translateX(30px)}100%{transform:translateX(-30px)}}.bg-roll{animation:bgroll 7s ease-in-out infinite}' +
    '@keyframes bgshine{0%{transform:translateX(-80px)}60%,100%{transform:translateX(260px)}}.bg-shn{animation:bgshine 3s ease-in-out infinite}' +
    '@keyframes bgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bg-sp{animation:bgspray 1.4s ease-out infinite}.bg-sp2{animation-delay:.45s}' +
    '@keyframes bgbird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.bg-bird{animation:bgbird 14s linear infinite;animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ICE = "#7fe3ff", GOLD = "#ffd23f", RED = "#e53935";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="bg-moss' + (i % 2 ? " bg-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const trunk = (x, y, h) => '<path d="M' + (x - 5) + ' ' + (y + h) + 'q4 -' + (h / 2) + ' 2 -' + h + 'h6q-2 ' + (h / 2) + ' 4 ' + h + 'z" fill="#3a2a1e"/>';
  /* Uptown shotgun house: raised, front-gabled, gingerbread brackets, tall shuttered windows */
  const shot = (x, y, c, trim) => '<g><rect x="' + x + '" y="' + y + '" width="50" height="66" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + y + 'l29 -20l29 20z" fill="' + c + '" stroke="' + trim + '" stroke-width="2"/>' +
    '<circle cx="' + (x + 25) + '" cy="' + (y - 7) + '" r="4" fill="' + trim + '"/>' +
    '<path d="M' + x + ' ' + (y + 6) + 'h50" stroke="' + trim + '" stroke-width="3"/>' +
    [4, 18, 32, 46].map(k => '<path d="M' + (x + k - 4) + ' ' + (y + 8) + 'q4 6 8 0" stroke="' + trim + '" stroke-width="1.5" fill="none"/>').join("") +
    '<rect x="' + (x + 6) + '" y="' + (y + 16) + '" width="12" height="30" fill="#ffe9a8" class="bg-flk"/><rect x="' + (x + 30) + '" y="' + (y + 16) + '" width="12" height="40" fill="#3a2a22"/>' +
    '<rect x="' + (x + 2) + '" y="' + (y + 16) + '" width="4" height="30" fill="' + trim + '"/><rect x="' + (x + 18) + '" y="' + (y + 16) + '" width="4" height="30" fill="' + trim + '"/>' +
    '<rect x="' + (x - 2) + '" y="' + (y + 56) + '" width="54" height="4" fill="#f4efe6"/><rect x="' + (x + 28) + '" y="' + (y + 60) + '" width="16" height="3" fill="#bdb6aa"/><rect x="' + (x + 28) + '" y="' + (y + 63) + '" width="16" height="3" fill="#a9a296"/></g>';
  const spark = (x, y, s, cls) => '<path class="bg-tw ' + (cls || "") + '" d="M' + x + ' ' + (y - s) + 'L' + (x + s * 0.25) + ' ' + (y - s * 0.25) + 'L' + (x + s) + ' ' + y + 'L' + (x + s * 0.25) + ' ' + (y + s * 0.25) + 'L' + x + ' ' + (y + s) + 'L' + (x - s * 0.25) + ' ' + (y + s * 0.25) + 'L' + (x - s) + ' ' + y + 'L' + (x - s * 0.25) + ' ' + (y - s * 0.25) + 'z" fill="#fff"/>';

  /* 1. Freret St / Valence St, RTA bus 15 */
  function bgstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="118" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="124" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="156" width="268" height="8" fill="#1e5aa8"/><rect x="60" y="164" width="268" height="5" fill="' + RED + '"/>' +
      '<rect x="286" y="110" width="40" height="10" rx="2" fill="#111"/><text x="306" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">15 FRERET</text>' +
      '<rect x="238" y="168" width="20" height="22" fill="#1d2a36"/><circle cx="104" cy="192" r="11" fill="#1c1c1c"/><circle cx="104" cy="192" r="4" fill="#888"/><circle cx="280" cy="192" r="11" fill="#1c1c1c"/><circle cx="280" cy="192" r="4" fill="#888"/>' +
      '<rect x="322" y="170" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bgs1)"/>' +
      '<g class="bg-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a1a2e" stroke-width="2" fill="none"/></g>' +
      shot(14, 98, "#7fb3d5", "#f4efe6") + shot(76, 98, "#f2a65a", "#fff7e8") + shot(138, 98, "#9ccc65", "#f4efe6") + shot(200, 98, "#ce93d8", "#fff7e8") + shot(262, 98, "#ffd54f", "#f4efe6") +
      trunk(356, 96, 70) + oak(356, 84, 52, "#24402a") +
      '<rect x="0" y="190" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><path d="M0 230h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="358" y="100" width="5" height="100" fill="#2f2f2f"/><rect x="340" y="104" width="44" height="44" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<circle cx="362" cy="120" r="11" fill="#c62828"/><text x="362" y="124.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">15</text><text x="362" y="142" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="16" width="226" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="34" ' + font + ' font-size="14" fill="#fff">FRERET ST</text><text x="20" y="50" ' + font + ' font-size="11" fill="#cfd8dc">at Valence St  •  13th Ward</text>' +
      '<circle cx="212" cy="36" r="12" fill="#c62828"/><text x="212" y="40.5" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">15</text>',
      sky("bgs1", "#1b1d3a", "#e08a5e"));
  }

  /* 2. "Bling Bling" goes in the dictionary */
  function bgdict() {
    const shelf = (y) => '<rect x="0" y="' + y + '" width="400" height="6" fill="#4a2e1c"/>' + Array.from({ length: 22 }, (_, i) => '<rect x="' + (4 + i * 18) + '" y="' + (y - 34 + (i % 3) * 4) + '" width="14" height="' + (34 - (i % 3) * 4) + '" fill="' + ["#5d2a2a", "#2a3d5d", "#3d5d2a", "#5d4a2a", "#3a2a4a"][i % 5] + '"/>').join("");
    const lines = (x, y, n, w) => Array.from({ length: n }, (_, i) => '<rect x="' + x + '" y="' + (y + i * 9) + '" width="' + (w - (i % 3) * 14) + '" height="3" rx="1" fill="#b9ad94"/>').join("");
    const chainPts = Array.from({ length: 9 }, (_, i) => '<circle cx="300" cy="' + (44 + i * 7) + '" r="2.6" fill="none" stroke="' + GOLD + '" stroke-width="1.6"/>').join("");
    const stones = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<circle cx="' + (300 + Math.cos(a) * 19) + '" cy="' + (128 + Math.sin(a) * 19) + '" r="3.2" fill="#e8fbff" stroke="' + ICE + '" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' + shelf(46) + shelf(96) +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3a24"/><rect x="0" y="150" width="400" height="6" fill="#6e4a30"/>' +
      '<path d="M40 238l20 -86h140v86z" fill="#efe6cf" stroke="#8a7a5a" stroke-width="2"/><path d="M200 238v-86h120l20 86z" fill="#f6eedb" stroke="#8a7a5a" stroke-width="2"/>' +
      '<path d="M200 152v86" stroke="#8a7a5a" stroke-width="3"/><path d="M36 240h308" stroke="#3a2a1a" stroke-width="5"/>' +
      '<text x="70" y="172" font-family="Georgia, serif" font-weight="700" font-size="15" fill="#1a1a1a">bling-bling</text>' +
      '<text x="70" y="184" font-family="Georgia, serif" font-style="italic" font-size="8" fill="#5a4a3a">n. &amp; adj., slang</text>' +
      '<text x="70" y="196" font-family="Georgia, serif" font-size="7.5" fill="#2a2a2a">flashy jewelry; showy wealth.</text>' +
      '<text x="70" y="207" font-family="Georgia, serif" font-size="7.5" fill="#2a2a2a">New Orleans rap, 1999.</text>' + lines(66, 216, 2, 110) +
      '<text x="208" y="172" font-family="Georgia, serif" font-weight="700" font-size="8" fill="#1a1a1a">blink</text>' + lines(208, 178, 6, 100) +
      '<rect x="56" y="161" width="132" height="22" fill="' + GOLD + '" opacity=".28"/>' +
      '<rect x="16" y="16" width="168" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="100" y="31" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + GOLD + '">ADDED TO THE DICTIONARY</text>' +
      '<g class="bg-swing">' + chainPts + '<path d="M300 40v4" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<circle cx="300" cy="128" r="28" fill="' + GOLD + '" stroke="#8a6a10" stroke-width="2"/><circle cx="300" cy="128" r="14" fill="#1a1210"/>' + stones +
      '<text x="300" y="133" text-anchor="middle" ' + font + ' font-size="13" fill="' + ICE + '">BG</text>' +
      spark(278, 106, 7) + spark(326, 116, 6, "bg-tw2") + spark(306, 156, 6, "bg-tw3") + '</g>' +
      spark(120, 140, 6, "bg-tw2") + spark(360, 60, 7, "bg-tw3") + spark(240, 70, 5),
      "");
  }

  /* 3. Freret Street, festival day */
  function bgfreret() {
    const store = (x, w, c, aw) => '<g><rect x="' + x + '" y="70" width="' + w + '" height="120" fill="' + c + '"/><rect x="' + x + '" y="112" width="' + w + '" height="5" fill="#2a2a2a"/>' +
      '<path d="M' + x + ' 118h' + w + '" stroke="#2a2a2a" stroke-width="2"/>' + Array.from({ length: Math.floor(w / 16) }, (_, i) => '<rect x="' + (x + 4 + i * 16) + '" y="112" width="2" height="34" fill="#2a2a2a"/>').join("") +
      '<rect x="' + (x + 4) + '" y="78" width="' + (w / 2 - 8) + '" height="26" fill="#ffe9a8" class="bg-flk"/><rect x="' + (x + w / 2 + 4) + '" y="78" width="' + (w / 2 - 8) + '" height="26" fill="#ffe9a8" class="bg-flk bg-flk2"/>' +
      '<path d="M' + x + ' 150h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 8) + '" y="162" width="' + (w - 16) + '" height="28" fill="#2a3a46"/></g>';
    const bulbs = Array.from({ length: 26 }, (_, i) => { const x = 8 + i * 15.4, y = 46 + Math.sin(i / 25 * Math.PI * 3) * 8 + 8; return '<circle class="bg-lt' + (i % 2 ? " bg-lt2" : "") + '" cx="' + x + '" cy="' + y + '" r="3" fill="' + ["#ffd23f", "#ff7ab6", "#7fe3ff"][i % 3] + '"/>'; }).join("");
    const crowd = Array.from({ length: 12 }, (_, i) => '<g class="bg-bnc' + (i % 2 ? " bg-bnc2" : "") + '"><circle cx="' + (14 + i * 34) + '" cy="214" r="9" fill="#1a1420"/><rect x="' + (4 + i * 34) + '" y="222" width="20" height="40" rx="6" fill="#1a1420"/></g>').join("");
    const horn = (x) => '<g class="bg-bnc"><circle cx="' + x + '" cy="176" r="7" fill="#2a1a2e"/><rect x="' + (x - 8) + '" y="183" width="16" height="22" rx="4" fill="#2a1a2e"/><path d="M' + (x + 6) + ' 188l14 -8q8 -4 10 4l-10 8z" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bgs3)"/>' +
      store(0, 96, "#b5533c", "#2e7d32") + store(96, 104, "#e6c27a", RED) + store(200, 96, "#5f8fb8", "#ffd23f") + store(296, 104, "#9c6bff", "#2e7d32") +
      '<path d="M0 50q100 22 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="120" y="22" width="160" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FRERET STREET</text>' +
      '<rect x="0" y="198" width="400" height="62" fill="#4a4a50"/>' +
      '<rect x="130" y="200" width="140" height="10" fill="#3a2a1e"/>' + horn(168) + horn(232) +
      crowd,
      sky("bgs3", "#20184a", "#c0567a"));
  }

  /* 4. Ridin' on chrome */
  function bgchrome() {
    const rim = (cx, cy) => '<g><circle cx="' + cx + '" cy="' + cy + '" r="22" fill="#151515"/><circle cx="' + cx + '" cy="' + cy + '" r="16" fill="#dfe6ea" stroke="#9aa6ad" stroke-width="2"/>' +
      '<g class="bg-spin">' + [0, 1, 2, 3, 4, 5].map(i => { const a = i * Math.PI / 3; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + Math.cos(a) * 15) + ' ' + (cy + Math.sin(a) * 15) + '" stroke="#8e9aa1" stroke-width="3"/>'; }).join("") + '<circle cx="' + cx + '" cy="' + cy + '" r="15" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="6 5"/></g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bgs4)"/><circle cx="320" cy="96" r="30" fill="#ffcf5a" opacity=".9"/>' +
      trunk(50, 100, 100) + oak(52, 80, 72, "#203a26") + trunk(330, 110, 90) + oak(332, 88, 64, "#203a26") +
      shot(110, 118, "#6d8fa8", "#e9e2d2") + shot(170, 118, "#c98a5a", "#e9e2d2") + shot(230, 118, "#7aa36a", "#e9e2d2") +
      '<rect x="0" y="186" width="400" height="8" fill="#a59f95"/><rect x="0" y="194" width="400" height="66" fill="#38383e"/><path d="M0 236h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="bg-roll"><path d="M86 214v-26q0 -8 10 -10l34 -6l30 -24q8 -6 20 -6h70q12 0 20 8l22 22l32 6q12 2 12 14v22z" fill="#7b1fa2" stroke="#3a0a52" stroke-width="2"/>' +
      '<path d="M140 172l26 -22q6 -4 14 -4h22v26zM210 146h28q8 0 14 6l20 20h-62z" fill="#1d2a36"/>' +
      '<g clip-path="url(#bgclip)"><rect class="bg-shn" x="90" y="150" width="30" height="70" fill="#fff" opacity=".35" transform="skewX(-20)"/></g>' +
      '<rect x="318" y="190" width="10" height="7" rx="2" fill="#ffe08a"/><rect x="86" y="194" width="8" height="7" rx="2" fill="#ff5a5a"/>' +
      '<path d="M90 206h244" stroke="#e0c0ff" stroke-width="2"/>' +
      rim(140, 214) + rim(288, 214) + '</g>' +
      spark(150, 200, 5) + spark(298, 198, 5, "bg-tw2"),
      sky("bgs4", "#3a1f5a", "#f08a4a") + '<clipPath id="bgclip"><path d="M86 214v-26q0 -8 10 -10l34 -6l30 -24q8 -6 20 -6h70q12 0 20 8l22 22l32 6q12 2 12 14v22z"/></clipPath>');
  }

  /* 5. Valence St & Freret St, St. Stephen's spire behind */
  function bgcorner() {
    const bricks = Array.from({ length: 9 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 15) + '" y="' + (120 + r * 15) + '" width="28" height="13" fill="' + ((r * 3 + c) % 5 ? "#8a3b2a" : "#7a3324") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bgs5)"/>' +
      /* St. Stephen Church: red-brick Gothic nave + one tall spire */
      '<g transform="translate(-50 24)"><rect x="230" y="78" width="120" height="44" fill="#6e3a2a"/><path d="M230 78l60 -18l60 18z" fill="#5a2e22"/>' +
      '<rect x="272" y="40" width="36" height="82" fill="#7a4030"/><path d="M272 40l18 -14l18 14z" fill="#5a2e22"/><path d="M276 26l14 -6l14 6l-14 -10z" fill="#5a2e22"/>' +
      '<path d="M278 22l12 -20l12 20z" fill="#4a2a20"/><path d="M290 2v-6M287 -2h6" stroke="#d8c08a" stroke-width="1.5"/>' +
      '<path d="M284 2l6 -12l6 12z" fill="#4a2a20"/><rect x="288" y="-6" width="4" height="8" fill="#4a2a20"/>' +
      '<path d="M283 60q7 -12 14 0v16h-14z" fill="#ffe08a" class="bg-flk"/><path d="M246 92q6 -10 12 0v18h-12zM322 92q6 -10 12 0v18h-12z" fill="#ffe08a"/>' +
      '<circle cx="290" cy="48" r="5" fill="#f4efe6"/></g>' +
      trunk(60, 70, 60) + oak(60, 58, 54, "#1d3524") +
      '<rect x="0" y="118" width="400" height="142" fill="#7a3324"/>' + bricks +
      tag("GEEZY", 70, 196, 46, ICE, -7) + tag("B.G.", 262, 172, 30, GOLD, -4) + tag("VL 13", 270, 222, 22, RED, -3) +
      '<g transform="translate(232 150)"><circle class="bg-sp" cx="0" cy="0" r="4" fill="' + ICE + '" opacity=".7"/><circle class="bg-sp bg-sp2" cx="6" cy="-4" r="3" fill="' + ICE + '" opacity=".6"/></g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#9a958c"/>' +
      '<rect x="362" y="40" width="6" height="210" fill="#2f2f2f"/>' + sign(298, 44, 100, "VALENCE ST") + sign(306, 70, 88, "FRERET ST"),
      sky("bgs5", "#141a3a", "#d0785a"));
  }

  window.SCENES = { bgstation, bgdict, bgfreret, bgchrome, bgcorner };
})();
