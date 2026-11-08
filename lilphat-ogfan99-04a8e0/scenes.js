/* lilphat scenes (Regions tab: New Orleans region, the Louisiana kits; Baton Rouge: "I'm from Baton Rouge but I'm in ATL stackin'"). CSS classes and ids prefixed lp- (the page's own anim-train is kept).
   1 CATS bus 14 rolling up Thomas H Delpit Dr into South Baton Rouge: live oaks with moss, shotgun houses, the bus-stop sign with the 14.
   2 The Trill Entertainment studio, where he signed as the youngin of Trill Fam: the vocal booth, a mic, the mixing board with meters bouncing, TRILL FAM on the wall.
   3 The I-10 Mississippi River bridge in Baton Rouge ("flyin' down I-10"): the steel cantilever truss at night, cars streaking across, the river below, the I-10 shield.
   4 Southern University's Human Jukebox on the field in Baton Rouge: the blue-and-gold band in rows, plumes bobbing, horns flashing, the stands lit.
   5 Thomas H Delpit Dr and E Washington St in South Baton Rouge: green signs, LIL PHAT tagged on the wall, the Louisiana State Capitol's tower lit up behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lpflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lp-flk{animation:lpflick 2.2s infinite}.lp-flk2{animation-delay:.8s}' +
    '@keyframes lpmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.lp-m{transform-box:fill-box;transform-origin:50% 100%;animation:lpmeter .6s ease-in-out infinite}.lp-m2{animation-delay:-.2s}.lp-m3{animation-delay:-.4s}' +
    '@keyframes lpcars{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.lp-car{animation:lpcars 3.5s linear infinite}.lp-car2{animation-delay:-1.75s}' +
    '@keyframes lpripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.lp-rip{animation:lpripple 2.4s ease-in-out infinite}.lp-rip2{animation-delay:-1.2s}' +
    '@keyframes lpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lp-bob{animation:lpbob .5s ease-in-out infinite}.lp-bob2{animation-delay:-.25s}' +
    '@keyframes lpflash{0%,100%{opacity:.2}50%{opacity:1}}.lp-fl{animation:lpflash .5s ease-in-out infinite}.lp-fl2{animation-delay:-.25s}' +
    '@keyframes lpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lp-sp{animation:lpspray 1.4s ease-out infinite}.lp-sp2{animation-delay:.45s}' +
    '@keyframes lpmoss{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lp-moss{transform-box:fill-box;transform-origin:50% 0;animation:lpmoss 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 37) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const PURP = "#b388ff", GOLD = "#ffd23f", GREEN = "#3ddc84", CATS = "#1b4f9c";
  /* live oak with Spanish moss */
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-6" y="0" width="12" height="42" fill="#4e3d2c"/><path d="M-6 10l-26 -12M6 8l26 -14" stroke="#4e3d2c" stroke-width="6"/>' +
    '<ellipse cx="0" cy="-12" rx="52" ry="22" fill="#38552f"/><ellipse cx="-26" cy="-18" rx="26" ry="14" fill="#466a3a"/><ellipse cx="24" cy="-16" rx="24" ry="13" fill="#466a3a"/>' +
    '<g fill="#9aa88a" opacity=".85">' + [-36, -16, 8, 30].map(m => '<path class="lp-moss" d="M' + m + ' -4q3 12 0 22q-3 -10 -6 -2q2 -12 6 -20z"/>').join("") + '</g></g>';
  const shotgun = (x, body, trim) => '<g transform="translate(' + x + ' 0)"><path d="M0 92l36 -26l36 26z" fill="#5a4a44"/><rect x="4" y="92" width="64" height="44" fill="' + body + '"/><rect x="0" y="88" width="72" height="6" fill="' + trim + '"/>' +
    '<rect x="12" y="102" width="14" height="22" fill="#2a3442"/><rect x="44" y="102" width="14" height="34" fill="#6b4a33"/><rect x="0" y="134" width="72" height="4" fill="' + trim + '"/></g>';
  const person = (x, y, shirt, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-7" y="-2" width="14" height="22" rx="4" fill="' + shirt + '"/><circle cx="0" cy="-9" r="7" fill="#4a3022"/><rect x="-6" y="20" width="5" height="12" fill="#22262e"/><rect x="1" y="20" width="5" height="12" fill="#22262e"/></g>';

  /* 1. CATS bus 14 on Thomas H Delpit Dr */
  function lpstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="150" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="140" width="318" height="68" rx="10" fill="#f2f4f6" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="150" width="22" height="46" rx="2" fill="#1d2833"/><path d="M28 182h318v10h-318z" fill="' + CATS + '"/><path d="M28 192h318v4h-318z" fill="' + GREEN + '"/>' +
      '<rect x="32" y="142" width="140" height="10" rx="2" fill="#111"/><text x="102" y="150" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">14 THOMAS DELPIT</text>' +
      '<text x="250" y="190" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CATS</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#lps1)"/>' + '<circle cx="330" cy="36" r="18" fill="#fff1c4" opacity=".9"/>' +
      shotgun(0, "#e9d27a", "#fff") + shotgun(84, "#8fc0d8", "#fff") + shotgun(250, "#e59a8a", "#fff") + shotgun(330, "#b8d89a", "#fff") +
      oak(206, 96, 0.9) +
      '<rect x="0" y="136" width="400" height="6" fill="#cfc9bd"/><rect x="0" y="142" width="400" height="118" fill="#55565c"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="98" width="5" height="118" fill="#6b7178"/><rect x="350" y="72" width="48" height="50" rx="3" fill="' + CATS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="374" y="86" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CATS</text><rect x="360" y="92" width="28" height="22" rx="3" fill="#fff"/><text x="374" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="' + CATS + '">14</text>' +
      sign(6, 8, 166, "THOMAS H DELPIT DR") + '<rect x="60" y="30" width="4" height="12" fill="#6b7178"/>',
      sky("lps1", "#2a6fb8", "#ffd9a0"));
  }

  /* 2. The Trill studio: the booth, the mic, the board */
  function lpstudio() {
    const meters = Array.from({ length: 10 }, (_, i) => '<rect x="' + (226 + i * 14) + '" y="182" width="8" height="26" fill="' + (i % 3 ? GREEN : GOLD) + '" class="lp-m' + (i % 3 ? " lp-m" + (1 + i % 3) : "") + '"/>').join("");
    const knobs = Array.from({ length: 18 }, (_, i) => '<circle cx="' + (220 + (i % 9) * 18) + '" cy="' + (220 + Math.floor(i / 9) * 14) + '" r="4" fill="#cfd5db"/>').join("");
    return svg('<rect width="400" height="260" fill="#16121f"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="#221a30"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="38" fill="#2c2340"/><rect x="' + (i * 40 + 20) + '" y="40" width="38" height="38" fill="#2c2340"/>').join("") +
      tag("TRILL FAM", 40, 120, 34, PURP, -6) + tag("YOUNGIN", 60, 150, 18, GOLD, -4) +
      '<rect x="210" y="24" width="170" height="130" rx="6" fill="#0d0b14" stroke="#4a3d63" stroke-width="4"/><rect x="220" y="34" width="150" height="110" fill="#2a2140" opacity=".8"/>' +
      '<g class="lp-flk"><rect x="248" y="40" width="74" height="14" rx="3" fill="#ff3b3b"/><text x="285" y="50" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ON AIR</text></g>' +
      '<path d="M296 144v-54" stroke="#888" stroke-width="3"/><rect x="286" y="68" width="20" height="30" rx="10" fill="#cfd5db" stroke="#555" stroke-width="2"/><path d="M282 84q14 16 28 0" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="200" y="172" width="200" height="88" fill="#2b2b33"/><rect x="210" y="178" width="180" height="34" fill="#111"/>' + meters + knobs +
      '<rect x="0" y="172" width="200" height="88" fill="#3a2a1e"/><rect x="40" y="186" width="120" height="44" rx="4" fill="#111"/><rect x="46" y="192" width="108" height="32" fill="#2c4a7a"/>' +
      '<path d="M52 214l14 -10l14 6l14 -12l14 8l14 -6l14 4" stroke="' + GREEN + '" stroke-width="2" fill="none" class="lp-flk lp-flk2"/>',
      "");
  }

  /* 3. The I-10 Mississippi River bridge at night */
  function lpbridge() {
    let truss = "";
    for (let i = 0; i < 20; i++) { const x = i * 20; truss += '<path d="M' + x + ' 150L' + (x + 10) + ' ' + (i < 10 ? 150 - i * 7 : 150 - (19 - i) * 7) + 'L' + (x + 20) + ' 150" stroke="#9aa3ad" stroke-width="2.5" fill="none"/>'; }
    const top = 'M0 150' + Array.from({ length: 21 }, (_, i) => ' L' + (i * 20) + ' ' + (150 - (i <= 10 ? i : 20 - i) * 7)).join("");
    const car = (c, cls, y) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="12" rx="4" fill="' + c + '"/><rect x="40" y="' + (y + 3) + '" width="6" height="4" fill="#fff6c2"/><path d="M46 ' + (y + 5) + 'h40" stroke="#fff6c2" stroke-width="3" opacity=".35"/></g>';
    const shield = '<g transform="translate(330 20)"><path d="M0 0h52v30q0 18 -26 26q-26 -8 -26 -26z" fill="#1d4f9c" stroke="#fff" stroke-width="2.5"/><rect x="0" y="0" width="52" height="12" fill="#c8102e"/><text x="26" y="10" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">INTERSTATE</text><text x="26" y="40" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">10</text></g>';
    return svg('<rect width="400" height="260" fill="url(#lps3)"/>' + stars(18) + shield +
      '<path d="' + top + '" stroke="#b8c1cb" stroke-width="4" fill="none"/>' + truss +
      '<rect x="0" y="150" width="400" height="10" fill="#6d7680"/><rect x="0" y="160" width="400" height="4" fill="#4b525a"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 8) + '" y="164" width="16" height="50" fill="#5d646d"/>').join("") +
      car("#ff4d4d", "lp-car", 138) + car(PURP, "lp-car lp-car2", 138) +
      '<rect x="0" y="206" width="400" height="54" fill="#1b2b3a"/>' +
      '<g stroke="#4f6f8f" stroke-width="2" opacity=".7"><path class="lp-rip" d="M20 222h50M140 232h60M280 220h50"/><path class="lp-rip lp-rip2" d="M80 244h50M230 246h70M340 238h40"/></g>' +
      '<g fill="#ffd98a" opacity=".8">' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (300 + i * 14) + '" y="' + (176 + (i % 2) * 6) + '" width="8" height="' + (30 - (i % 2) * 6) + '"/>').join("") + '</g>',
      sky("lps3", "#0a1026", "#2c3a66"));
  }

  /* 4. Southern University's Human Jukebox on the field */
  function lpband() {
    const member = (x, y, d) => '<g transform="translate(' + x + ' ' + y + ')"><g class="lp-bob' + (d ? " lp-bob2" : "") + '"><path d="M-2 -26q2 -10 4 0" fill="' + GOLD + '"/><rect x="-6" y="-24" width="12" height="10" rx="3" fill="#13306b"/>' +
      '<rect x="-7" y="-14" width="14" height="20" rx="3" fill="#1d4fa8"/><path d="M-7 -12l14 8" stroke="' + GOLD + '" stroke-width="2.5"/><rect x="-6" y="6" width="5" height="12" fill="#f2f2f2"/><rect x="1" y="6" width="5" height="12" fill="#f2f2f2"/>' +
      '<path d="M6 -8h10l4 -4v10l-4 -4" fill="' + GOLD + '" class="lp-fl' + (d ? " lp-fl2" : "") + '"/></g></g>';
    let band = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) band += member(30 + c * 42 + (r % 2) * 14, 164 + r * 32, (r + c) % 2);
    return svg('<rect width="400" height="260" fill="url(#lps4)"/>' +
      '<rect x="0" y="40" width="400" height="70" fill="#2a2f3a"/>' + Array.from({ length: 60 }, (_, i) => '<circle cx="' + ((i * 37) % 400) + '" cy="' + (52 + (i * 13) % 50) + '" r="3" fill="' + (i % 3 ? "#1d4fa8" : GOLD) + '" opacity=".8"/>').join("") +
      [40, 360].map(x => '<rect x="' + (x - 3) + '" y="0" width="6" height="40" fill="#777"/><rect x="' + (x - 22) + '" y="0" width="44" height="12" fill="#fff6c2" class="lp-flk"/>').join("") +
      '<rect x="0" y="110" width="400" height="150" fill="#2f7a3a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (i * 100) + ' 110v150" stroke="#fff" stroke-width="2" opacity=".5"/>').join("") +
      band +
      '<rect x="120" y="90" width="160" height="18" rx="3" fill="#13306b"/><text x="200" y="103" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">HUMAN JUKEBOX</text>',
      sky("lps4", "#0e1630", "#28345a"));
  }

  /* 5. Thomas H Delpit Dr and E Washington St, the State Capitol behind */
  function lpcorner() {
    const cap = '<g transform="translate(250 14) scale(.88)"><rect x="-70" y="96" width="140" height="22" fill="#d9ccb0"/><rect x="-28" y="30" width="56" height="70" fill="#e6dac0"/>' +
      '<rect x="-22" y="20" width="44" height="12" fill="#dccfb4"/><rect x="-16" y="10" width="32" height="12" fill="#d3c5a8"/><rect x="-9" y="2" width="18" height="10" fill="#cbbd9f"/>' +
      '<path d="M-6 2l6 -10l6 10z" fill="#c9a24a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (-22 + i * 8) + '" y="38" width="4" height="56" fill="#b8a888" opacity=".7"/>').join("") +
      '<rect x="-24" y="30" width="48" height="70" fill="#fff4c8" opacity=".15" class="lp-flk"/></g>';
    return svg('<rect width="400" height="260" fill="url(#lps5)"/>' + stars(12) + cap +
      '<rect x="0" y="112" width="400" height="96" fill="#7b6a8e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (124 + i * 11) + 'h400" stroke="#5e4f70" stroke-width="1"/>').join("") +
      tag("LIL PHAT", 120, 176, 44, GOLD, -7) + tag("TRILL FAM", 96, 200, 18, PURP, -4) + tag("YOUNGIN", 300, 200, 18, GREEN, -3) +
      '<g fill="' + GOLD + '"><circle class="lp-sp" cx="330" cy="168" r="2.5"/><circle class="lp-sp lp-sp2" cx="338" cy="164" r="2"/></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4b4c52"/><path d="M0 232h400" stroke="#e8e8e8" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="56" y="40" width="5" height="172" fill="#6b7178"/>' + sign(4, 44, 170, "THOMAS H DELPIT DR") + sign(10, 70, 120, "E WASHINGTON ST"),
      sky("lps5", "#1a1438", "#d27a5a"));
  }

  window.SCENES = { lpstation: lpstation, lpstudio: lpstudio, lpbridge: lpbridge, lpband: lpband, lpcorner: lpcorner };
})();
