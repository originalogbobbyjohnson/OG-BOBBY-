/* aliciakeys scenes (NYC map, Manhattan: Hell's Kitchen, where Alicia Augello Cook was raised by her mom). 400 x 260 SVGs.
   CSS classes and ids prefixed aky- (the page's own anim-train is kept on the train).
   0 Times Sq-42 St, underground: white tile, mosaic band, black sign with the 1 2 3 / 7 / N Q R W / S bullets, a silver 1 train pulling in.
   1 Professional Performing Arts School on W 48th St: the old brick-and-limestone schoolhouse where she studied and finished as valedictorian at 16; piano notes from a window, caps tossed.
   2 The Shubert Theatre on W 44th St: cream Venetian front, the bulb marquee for her Broadway musical about growing up in Hell's Kitchen, chasing lights, folks lining up.
   3 A soundstage at the Astoria film studios in Queens, where she appeared on a TV sitcom at four: the lit living-room set, ON AIR light blinking, a camera rolling on its dolly.
   4 W 48 St and 9 Av: green signs, KEYS tagged, a grand piano stencil, the Hearst Tower's diagonal steel grid lit up behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#ffd27a", FIRE = "#ff6a2b", IVORY = "#efe8d8", BRICK = "#9a4a34";
  const css = '<style>' +
    '@keyframes akyflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.aky-flk{animation:akyflick 2.6s infinite}.aky-flk2{animation-delay:.9s}' +
    '@keyframes akynote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}.aky-note{animation:akynote 3.2s ease-out infinite}.aky-n2{animation-delay:-1.1s}.aky-n3{animation-delay:-2.2s}' +
    '@keyframes akycap{0%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(0,-46px) rotate(180deg)}100%{transform:translate(0,0) rotate(360deg)}}.aky-cap{transform-box:fill-box;transform-origin:50% 50%;animation:akycap 2.4s ease-in-out infinite}.aky-c2{animation-delay:-.8s}.aky-c3{animation-delay:-1.6s}' +
    '@keyframes akychase{0%,100%{opacity:1}50%{opacity:.2}}.aky-b{animation:akychase .8s steps(1) infinite}.aky-b2{animation-delay:-.4s}' +
    '@keyframes akywalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.aky-walk{animation:akywalk 14s linear infinite}.aky-wk2{animation-delay:-5s}.aky-wk3{animation-delay:-9.5s}' +
    '@keyframes akyonair{0%,100%{opacity:1}50%{opacity:.25}}.aky-air{animation:akyonair 1.2s ease-in-out infinite}' +
    '@keyframes akycam{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.aky-cam{animation:akycam 5s ease-in-out infinite}' +
    '@keyframes akyglow{0%,100%{opacity:.5}50%{opacity:1}}.aky-glow{animation:akyglow 2.4s ease-in-out infinite}' +
    '@keyframes akyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.aky-sp{animation:akyspray 1.4s ease-out infinite}.aky-spb{animation-delay:.5s}' +
    '@keyframes akyflame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.aky-flame{transform-box:fill-box;transform-origin:50% 100%;animation:akyflame .9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, r, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><text x="' + x + '" y="' + (y + r * .42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.2) + '" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="aky-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const walker = (cls, y, c) => '<g class="aky-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
  const keys = (x, y, w, h, n) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fbf8f0" stroke="#222" stroke-width="1"/>'; const kw = w / n;
    for (let i = 1; i < n; i++) s += '<path d="M' + (x + i * kw) + ' ' + y + 'v' + h + '" stroke="#222" stroke-width=".8"/>';
    for (let i = 0; i < n - 1; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) s += '<rect x="' + (x + (i + 1) * kw - kw * .3) + '" y="' + y + '" width="' + (kw * .6) + '" height="' + (h * .6) + '" fill="#111"/>';
    return s; };

  /* 0. Times Sq-42 St, underground */
  function akystation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="128" width="28" height="22" rx="3" fill="#d8ecfa" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="16" y="116" width="324" height="70" rx="10" fill="#c7ccd3" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="16" y="160" width="324" height="4" fill="#8a9098"/>' + bullet(322, 138, 10, "1", "#ee352e") +
      '<rect x="150" y="120" width="24" height="62" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/><circle cx="334" cy="176" r="4" fill="#fff6c2"/></g>';
    const tiles = Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v104" stroke="#d6d2c6" stroke-width="1"/>').join("") + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 10) + 'h400" stroke="#d6d2c6" stroke-width="1"/>').join("");
    const mosaic = Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10) + '" y="88" width="10" height="10" fill="' + ["#b5332e", "#e0b24a", "#2f5f8a", "#f3ecdc"][i % 4] + '"/>').join("");
    const bl = [["1", "#ee352e"], ["2", "#ee352e"], ["3", "#ee352e"], ["7", "#b933ad"], ["N", "#fccc0a", "#000"], ["Q", "#fccc0a", "#000"], ["R", "#fccc0a", "#000"], ["W", "#fccc0a", "#000"], ["S", "#808183"]]
      .map((b, i) => bullet(198 + i * 21, 58, 9, b[0], b[1], b[2])).join("");
    return svg(
      '<rect width="400" height="260" fill="#ece8dc"/>' + tiles + mosaic +
      '<rect x="0" y="0" width="400" height="10" fill="#2a2d33"/>' + [40, 170, 300].map((x, i) => '<rect class="aky-flk' + (i === 1 ? " aky-flk2" : "") + '" x="' + x + '" y="2" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="14" y="24" width="372" height="54" rx="3" fill="#111"/><rect x="14" y="28" width="372" height="2" fill="#fff" opacity=".85"/>' +
      '<text x="26" y="64" ' + font + ' font-size="20" fill="#fff">Times Sq-42 St</text>' + bl +
      '<rect x="0" y="104" width="400" height="84" fill="#1c1f25"/>' + tr +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#8f8b84"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="194" width="40" height="66" fill="none" stroke="#7d7972" stroke-width="1"/>').join("") +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="104" width="10" height="90" fill="#3a5f8a"/>').join("") +
      walker("", 252, FIRE) + walker("aky-wk2", 250, "#2f5f8a") + walker("aky-wk3", 252, GOLD));
  }

  /* 1. Professional Performing Arts School, W 48th St */
  function akyppas() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      const x = 112 + c * 30, y = 62 + r * 30, lit = (r * 3 + c) % 5 === 0;
      win += '<rect x="' + x + '" y="' + y + '" width="18" height="22" fill="' + (lit ? "#ffe3a0" : "#3c3a46") + '" stroke="#e9dfc8" stroke-width="2"/><path d="M' + x + ' ' + (y + 11) + 'h18" stroke="#e9dfc8" stroke-width="1"/>';
    }
    const tenement = (x, w, h, c) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' + Array.from({ length: Math.floor((h - 14) / 22) }, (_, r) => Array.from({ length: Math.floor(w / 18) }, (_, k) => '<rect x="' + (x + 5 + k * 18) + '" y="' + (196 - h + r * 22) + '" width="9" height="12" fill="' + ((r + k) % 3 ? "#2e2a30" : "#f6d68e") + '"/>').join("")).join("") +
      '<path d="M' + (x + 6) + ' ' + (190 - h + 28) + 'h' + (w - 12) + '" stroke="#222" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#akys1)"/>' +
      tenement(0, 96, 124, "#7a4a3a") + tenement(312, 88, 136, "#6e5040") +
      '<rect x="300" y="40" width="18" height="16" fill="#6b4a2e"/><path d="M298 40l11 -9l11 9z" fill="#4a3220"/><rect x="302" y="56" width="3" height="14" fill="#333"/><rect x="313" y="56" width="3" height="14" fill="#333"/>' +
      '<rect x="100" y="46" width="200" height="144" fill="' + BRICK + '"/><rect x="96" y="40" width="208" height="10" fill="#e9dfc8"/><rect x="100" y="178" width="200" height="12" fill="#e9dfc8"/>' + win +
      '<rect x="100" y="146" width="200" height="11" fill="#e9dfc8"/><rect x="176" y="157" width="48" height="33" fill="#e9dfc8"/><path d="M181 190v-18a19 13 0 0 1 38 0v18z" fill="#3a2a22"/><path d="M200 160v30" stroke="#6b4a32" stroke-width="2"/>' + [112, 142, 236, 266].map(x => '<rect x="' + x + '" y="162" width="18" height="20" fill="#3c3a46" stroke="#e9dfc8" stroke-width="2"/>').join("") +
      '<text x="200" y="154" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2a22">PROFESSIONAL PERFORMING ARTS SCHOOL</text>' +
      '<g transform="translate(232 96)"><rect x="0" y="0" width="18" height="22" fill="#ffe3a0"/>' + keys(1, 15, 16, 6, 7) + '</g>' +
      note("", 246, 92, GOLD) + note("aky-n2", 252, 98, "#fff") + note("aky-n3", 240, 94, FIRE) +
      '<rect x="0" y="190" width="400" height="10" fill="#b9b2a6"/><rect x="0" y="200" width="400" height="60" fill="#4a4a50"/><path d="M0 230h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14"/>' +
      [150, 200, 250].map((x, i) => '<g class="aky-cap' + (i ? " aky-c" + (i + 1) : "") + '"><path d="M' + (x - 10) + ' 170l10 -5l10 5l-10 5z" fill="#111"/><rect x="' + (x - 5) + '" y="171" width="10" height="5" fill="#111"/><path d="M' + (x + 8) + ' 170v7" stroke="' + GOLD + '" stroke-width="1.5"/></g>').join("") +
      walker("", 214, IVORY) + walker("aky-wk2", 214, FIRE),
      sky("akys1", "#7fb1d9", "#f2d6b0"));
  }

  /* 2. The Shubert Theatre, W 44th St */
  function akyshubert() {
    const bulbs = (x1, x2, y) => Array.from({ length: Math.floor((x2 - x1) / 8) + 1 }, (_, i) => '<circle class="aky-b' + (i % 2 ? " aky-b2" : "") + '" cx="' + (x1 + i * 8) + '" cy="' + y + '" r="2" fill="#fff2b0"/>').join("");
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (96 + i * 44) + ' 128v-30a12 12 0 0 1 24 0v30z" fill="#7a5a3c" stroke="#c9a46a" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#akys2)"/>' +
      '<rect x="0" y="40" width="70" height="160" fill="#3a3346"/><rect x="330" y="30" width="70" height="170" fill="#2f2a3a"/>' +
      Array.from({ length: 6 }, (_, r) => '<rect x="10" y="' + (52 + r * 22) + '" width="10" height="12" fill="#ffd98a" opacity=".7"/><rect x="44" y="' + (52 + r * 22) + '" width="10" height="12" fill="#ffd98a" opacity=".4"/><rect x="346" y="' + (44 + r * 22) + '" width="10" height="12" fill="#ffd98a" opacity=".6"/>').join("") +
      '<rect x="80" y="36" width="240" height="164" fill="#ead7b4"/><rect x="76" y="30" width="248" height="10" fill="#d6bb8a"/>' +
      '<path d="M80 60h240M80 72h240" stroke="#d2b88c" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (88 + i * 19.5) + '" y="44" width="8" height="12" fill="#c99a6a"/>').join("") + arches +
      '<rect x="92" y="134" width="216" height="40" fill="#1a1414" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs(96, 304, 138) + bulbs(96, 304, 170) +
      '<text x="200" y="161" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + FIRE + '" letter-spacing="2">HELL\'S KITCHEN</text>' +
      '<rect x="92" y="174" width="216" height="26" fill="#4a2e22"/>' + [110, 150, 230, 270].map(x => '<rect x="' + x + '" y="178" width="22" height="22" fill="#2a1a14" stroke="#c9a46a" stroke-width="1"/>').join("") +
      '<rect x="0" y="200" width="400" height="12" fill="#b9b2a6"/><rect x="0" y="212" width="400" height="48" fill="#3e3e44"/>' +
      walker("", 222, FIRE) + walker("aky-wk2", 220, GOLD) + walker("aky-wk3", 222, "#7fb1d9") +
      '<circle cx="360" cy="16" r="9" fill="#f4ecd0"/><g class="aky-glow"><circle cx="360" cy="16" r="16" fill="#f4ecd0" opacity=".15"/></g>',
      sky("akys2", "#140f26", "#4a2f5a"));
  }

  /* 3. A soundstage at the Astoria film studios, Queens */
  function akycosby() {
    return svg(
      '<rect width="400" height="260" fill="#1b1a1f"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0v40" stroke="#333" stroke-width="2"/><rect x="' + (i * 50 - 6) + '" y="36" width="12" height="10" fill="#555"/>').join("") +
      '<rect x="0" y="18" width="400" height="4" fill="#444"/>' +
      '<g class="aky-glow"><path d="M60 46l-30 150h120z" fill="#fff3c4" opacity=".08"/><path d="M340 46l-60 150h120z" fill="#fff3c4" opacity=".08"/></g>' +
      '<rect x="40" y="60" width="300" height="130" fill="#e7d6b6"/><rect x="40" y="60" width="300" height="10" fill="#c9b08a"/>' +
      '<rect x="70" y="84" width="60" height="50" fill="#9fc7e8" stroke="#fff" stroke-width="4"/><path d="M100 84v50M70 109h60" stroke="#fff" stroke-width="3"/>' +
      '<rect x="160" y="80" width="36" height="96" fill="#7a4a2e" stroke="#5a3420" stroke-width="2"/><circle cx="190" cy="130" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="226" y="90" width="82" height="46" fill="#3a2a22"/>' + keys(230, 116, 74, 14, 14) + '<rect x="226" y="136" width="6" height="30" fill="#3a2a22"/><rect x="302" y="136" width="6" height="30" fill="#3a2a22"/>' +
      '<rect x="60" y="150" width="120" height="26" rx="8" fill="#b5573a"/><rect x="60" y="142" width="120" height="14" rx="6" fill="#c96a48"/><rect x="250" y="150" width="34" height="16" fill="#5a3420"/>' +
      '<rect x="40" y="190" width="300" height="6" fill="#6b5a44"/>' +
      '<rect x="328" y="10" width="62" height="22" rx="3" fill="#2a0a0a" stroke="#555"/><text class="aky-air" x="359" y="26" text-anchor="middle" ' + font + ' font-size="13" fill="#ff3b30">ON AIR</text>' +
      '<g class="aky-cam"><rect x="300" y="198" width="54" height="30" rx="3" fill="#2a2a2e" stroke="#777"/><rect x="286" y="206" width="16" height="14" fill="#444"/><circle cx="284" cy="213" r="6" fill="#111" stroke="#888"/>' +
      '<circle cx="312" cy="196" r="9" fill="none" stroke="#777" stroke-width="3"/><circle cx="338" cy="196" r="9" fill="none" stroke="#777" stroke-width="3"/>' +
      '<rect x="322" y="228" width="6" height="16" fill="#555"/><rect x="300" y="244" width="50" height="6" fill="#555"/><circle cx="304" cy="252" r="4" fill="#222"/><circle cx="346" cy="252" r="4" fill="#222"/></g>' +
      '<rect x="0" y="250" width="400" height="10" fill="#2a2a2a"/>' +
      '<g transform="translate(20 206)"><rect x="0" y="0" width="70" height="40" fill="#111" stroke="#ddd"/><path d="M0 0l10 -12h70l-10 12" fill="#222" stroke="#ddd"/>' +
      '<text x="35" y="18" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ASTORIA</text><text x="35" y="32" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">STAGE E</text></g>');
  }

  /* 4. W 48 St and 9 Av, Hearst Tower behind */
  function akycorner() {
    let grid = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
      const x = 170 + c * 15, y = 14 + r * 14;
      grid += '<path d="M' + x + ' ' + (y + 14) + 'l7.5 -14l7.5 14z" fill="' + ((r + c) % 3 ? "#5d7a94" : "#c9e2f2") + '" stroke="#e6eef4" stroke-width="1.2"/>';
    }
    const hearst = '<g><rect x="160" y="96" width="80" height="34" fill="#c9b99a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (166 + i * 12) + '" y="104" width="6" height="18" fill="#8a7a5e"/>').join("") +
      '<rect x="166" y="12" width="68" height="86" fill="#3d566c"/>' + grid + '<g class="aky-glow"><rect x="166" y="12" width="68" height="86" fill="#cfe8ff" opacity=".12"/></g></g>';
    const wt = (x, y) => '<rect x="' + x + '" y="' + y + '" width="20" height="18" fill="#6b4a2e"/><path d="M' + (x - 2) + ' ' + y + 'l12 -10l12 10z" fill="#4a3220"/><rect x="' + (x + 2) + '" y="' + (y + 18) + '" width="3" height="12" fill="#333"/><rect x="' + (x + 15) + '" y="' + (y + 18) + '" width="3" height="12" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#akys4)"/>' + hearst +
      '<rect x="0" y="70" width="120" height="60" fill="#5e3c32"/>' + wt(30, 40) + '<rect x="290" y="60" width="110" height="70" fill="#6a4434"/>' + wt(330, 30) +
      '<rect x="0" y="126" width="400" height="98" fill="#b8a690"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#a89680" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#6a5a48" stroke-width="3"/>' +
      tag("KEYS", 26, 196, 46, GOLD, -6) + tag("GIRL ON FIRE", 22, 218, 18, FIRE, -4) + tag("HELL'S KITCHEN", 160, 212, 16, IVORY, -3) +
      '<g transform="translate(176 150)"><path d="M0 30v-22q0 -10 14 -10h20q16 0 26 14l8 18z" fill="#111" stroke="' + IVORY + '" stroke-width="1.5"/>' + keys(2, 22, 40, 8, 10) + '<rect x="8" y="30" width="3" height="10" fill="#111"/><rect x="56" y="30" width="3" height="10" fill="#111"/></g>' +
      '<g transform="translate(14 0)"><g class="aky-flame"><path d="M136 176q-8 -12 2 -24q2 8 6 8q2 -10 8 -14q-2 14 4 18q4 -6 2 -12q10 10 2 24z" fill="' + FIRE + '"/><path d="M142 176q-3 -6 2 -12q2 5 5 5q2 -4 4 -6q0 8 -1 13z" fill="' + GOLD + '"/></g></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55555b"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(284, 98, 100, "W 48 St") + '<rect x="296" y="124" width="88" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><circle cx="329" cy="132.5" r="3.6" fill="none" stroke="#fff" stroke-width="2.2"/><path d="M332.6 132.5v9" stroke="#fff" stroke-width="2.2"/><text x="337" y="140" ' + font + ' font-size="13" fill="#fff">Av</text>' +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="aky-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="aky-sp"><circle cx="120" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="aky-sp aky-spb"><circle cx="126" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("akys4", "#141a36", "#d9825a"));
  }

  window.SCENES = { akystation: akystation, akyppas: akyppas, akyshubert: akyshubert, akycosby: akycosby, akycorner: akycorner };
})();
