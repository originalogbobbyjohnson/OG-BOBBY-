/* curreny scenes (Regions tab: New Orleans; Central City, where Curren$y came up in the Magnolia). CSS classes and ids prefixed cy- (the page's own anim-train is kept).
   1 St. Charles Av at Washington Av on the St. Charles streetcar (line 12): the olive-green car rolls in on the neutral ground, a Garden District house with iron galleries behind; Washington Av runs back into Central City.
   2 Lakefront Airport's 1934 Art Deco terminal (Jet Life): a private jet takes off past the cream terminal and its control tower.
   3 A custom car garage on Chef Menteur Hwy (he co-owns a car shop out there): a candy-green '64 Impala hopping on switches.
   4 The New Canal Lighthouse on Lake Pontchartrain (the "Cigarette Boats" tape): white with a red roof, a cigarette boat cutting across the lake.
   5 Washington Av and LaSalle St, Central City: green signs, SPITTA tagged on the brick, the downtown towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cyflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.cy-flk{animation:cyflick 2.2s infinite}.cy-flk2{animation-delay:.8s}' +
    '@keyframes cymoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.cy-moss{transform-box:fill-box;transform-origin:50% 0%;animation:cymoss 3.4s ease-in-out infinite}.cy-moss2{animation-delay:-1.7s}' +
    '@keyframes cyjet{0%{transform:translate(-40px,30px) rotate(0)}35%{transform:translate(120px,30px) rotate(0)}100%{transform:translate(470px,-120px) rotate(-14deg)}}.cy-jet{animation:cyjet 7s ease-in infinite}' +
    '@keyframes cybeam{0%,100%{opacity:.15}50%{opacity:.85}}.cy-beam{animation:cybeam 2.4s ease-in-out infinite}.cy-beam2{animation-delay:-1.2s}' +
    '@keyframes cyhop{0%,100%{transform:translateY(0)}20%{transform:translateY(-16px)}40%{transform:translateY(0)}55%{transform:translateY(-8px)}70%{transform:translateY(0)}}.cy-hop{animation:cyhop 1.8s ease-in-out infinite}' +
    '@keyframes cyhopf{0%,100%{transform:rotate(0)}20%{transform:rotate(-4deg)}40%{transform:rotate(0)}}.cy-hopf{transform-box:fill-box;transform-origin:100% 100%;animation:cyhopf 1.8s ease-in-out infinite}' +
    '@keyframes cyboat{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.cy-boat{animation:cyboat 6s linear infinite}' +
    '@keyframes cywave{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.cy-wave{animation:cywave 3s ease-in-out infinite}.cy-wave2{animation-delay:-1.5s}' +
    '@keyframes cybird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.cy-bird{animation:cybird 14s linear infinite;animation-delay:-4s}' +
    '@keyframes cyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cy-sp{animation:cyspray 1.4s ease-out infinite}.cy-sp2{animation-delay:.45s}' +
    '@keyframes cyblink{0%,100%{opacity:.25}50%{opacity:1}}.cy-bl{animation:cyblink 1.1s ease-in-out infinite}.cy-bl2{animation-delay:-.55s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#3ddc84", GOLD = "#f2c14e", SKYB = "#4fc3f7";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="cy-moss' + (i % 2 ? " cy-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 1. St. Charles Av at Washington Av */
  function cystation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="126" width="24" height="22" rx="2" fill="#26281f" stroke="#efe2b0" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="108" width="292" height="12" rx="6" fill="#5f655c"/><rect x="40" y="118" width="292" height="70" rx="6" fill="#40633a" stroke="#1f3a1c" stroke-width="2"/>' + win +
      '<rect x="40" y="154" width="292" height="5" fill="#efe2b0"/><rect x="40" y="172" width="292" height="16" fill="#8a2a20"/>' +
      '<rect x="300" y="126" width="26" height="44" rx="2" fill="#efe2b0"/><rect x="304" y="130" width="18" height="36" fill="#26281f"/>' +
      '<rect x="230" y="110" width="80" height="10" rx="2" fill="#111"/><text x="270" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">12 ST. CHARLES</text>' +
      '<path d="M150 108l50 -50" stroke="#222" stroke-width="2.5"/><circle cx="200" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="190" r="9" fill="#1c1c1c"/><circle cx="130" cy="190" r="9" fill="#1c1c1c"/><circle cx="250" cy="190" r="9" fill="#1c1c1c"/><circle cx="290" cy="190" r="9" fill="#1c1c1c"/>' +
      '<circle class="cy-flk" cx="336" cy="142" r="4" fill="#fff6c2"/></g>';
    /* Garden District house: pale yellow, two white iron galleries */
    const house = '<g><rect x="20" y="30" width="170" height="90" fill="#f3e3a8"/><path d="M14 30h182l-10 -14H24z" fill="#5a6a72"/>' +
      [34, 74, 114, 154].map(x => '<rect x="' + x + '" y="38" width="20" height="30" fill="#3a4a52"/><rect x="' + x + '" y="80" width="20" height="34" fill="#3a4a52"/>').join("") +
      '<rect x="20" y="70" width="170" height="4" fill="#fff"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M' + (22 + i * 8) + ' 62v8" stroke="#fff" stroke-width="1.5"/>').join("") +
      [24, 66, 108, 150, 186].map(x => '<rect x="' + x + '" y="36" width="3" height="84" fill="#fff"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys1)"/>' + house + oak(300, 54, 90, "#2c4a2e") + oak(70, 30, 60, "#2c4a2e") +
      '<rect x="0" y="196" width="400" height="64" fill="#6f8a4a"/><rect x="0" y="194" width="400" height="5" fill="#8a7a62"/>' +
      '<path d="M0 206h400M0 214h400" stroke="#4a4038" stroke-width="3"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="203" width="10" height="14" fill="#5a4a3a"/>').join("") +
      car +
      /* stop sign post */
      '<rect x="356" y="128" width="5" height="70" fill="#2a2a2a"/><rect x="306" y="96" width="92" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' +
      '<text x="352" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">WASHINGTON AV</text>' +
      '<circle cx="330" cy="121" r="7" fill="#c62828"/><text x="330" y="124.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">12</text>' +
      '<text x="364" y="124" text-anchor="middle" ' + font + ' font-size="7" fill="#ffd36a">ST. CHARLES</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">ST. CHARLES AV · WASHINGTON AV</text>',
      sky("cys1", "#f0b880", "#ffe8c0"));
  }

  /* 2. Lakefront Airport Art Deco terminal, a jet taking off */
  function cyjet() {
    const CREAM = "#efe4c8", SHADE = "#d6c7a2";
    const term = '<g><rect x="70" y="96" width="260" height="70" fill="' + CREAM + '"/><rect x="70" y="92" width="260" height="6" fill="' + SHADE + '"/>' +
      '<rect x="150" y="70" width="100" height="96" fill="' + CREAM + '"/><rect x="146" y="66" width="108" height="6" fill="' + SHADE + '"/>' +
      [160, 178, 196, 214, 232].map(x => '<rect x="' + x + '" y="80" width="8" height="70" fill="#5a6f86"/>').join("") +
      [84, 104, 124, 270, 290, 310].map(x => '<rect x="' + x + '" y="108" width="12" height="40" fill="#5a6f86"/><rect x="' + x + '" y="104" width="12" height="3" fill="' + SHADE + '"/>').join("") +
      '<rect x="186" y="40" width="28" height="28" fill="' + CREAM + '"/><rect x="180" y="26" width="40" height="16" fill="#2a3a4a" stroke="' + SHADE + '" stroke-width="2"/>' +
      '<rect x="184" y="29" width="32" height="10" fill="#7fd0ff" class="cy-flk"/><path d="M200 26v-10" stroke="#555" stroke-width="2"/><circle class="cy-bl" cx="200" cy="15" r="3" fill="#ff4a3a"/>' +
      '<path d="M150 70l10 -6h80l10 6z" fill="' + SHADE + '"/><rect x="186" y="150" width="28" height="16" fill="#3a3a3a"/></g>';
    const jet = '<g class="cy-jet"><g transform="translate(0 176)"><path d="M0 14q4 -10 22 -10h66q14 0 20 8q-6 6 -20 6h-80q-8 0 -8 -4z" fill="#f4f6f8" stroke="#2a2f36" stroke-width="1.5"/>' +
      '<path d="M8 6l-6 -16h10l12 16z" fill="' + GREEN + '" stroke="#2a2f36" stroke-width="1.2"/><path d="M40 16l22 14h10l-12 -14z" fill="#d8dde3" stroke="#2a2f36" stroke-width="1.2"/>' +
      '<path d="M22 6h-12v8h14z" fill="#9aa3ab"/>' + [50, 60, 70, 80].map(x => '<circle cx="' + x + '" cy="10" r="2" fill="#2a3a4a"/>').join("") +
      '<path d="M92 8l8 2v4h-10z" fill="#2a3a4a"/><path d="M14 14h66" stroke="' + GREEN + '" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys2)"/>' +
      '<rect x="0" y="150" width="400" height="20" fill="#5f8fa8"/>' + term +
      '<rect x="0" y="166" width="400" height="94" fill="#4a4f55"/><path d="M0 214h400" stroke="#f4f4f4" stroke-width="3" stroke-dasharray="26 18"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="cy-bl' + (i % 2 ? " cy-bl2" : "") + '" cx="' + (20 + i * 40) + '" cy="196" r="3" fill="#ffd36a"/>').join("") +
      jet +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">LAKEFRONT AIRPORT · ART DECO TERMINAL</text>',
      sky("cys2", "#3a4a8a", "#f2a86a"));
  }

  /* 3. Custom car garage on Chef Menteur Hwy, a candy-green '64 Impala on switches */
  function cygarage() {
    const imp = '<g class="cy-hop"><g class="cy-hopf">' +
      '<path d="M96 176q0 -14 14 -16l30 -2l22 -18h76l24 18l40 4q14 2 14 14v10h-220z" fill="#1fae63" stroke="#0a3a22" stroke-width="2"/>' +
      '<path d="M168 144h68l18 14h-104z" fill="#8fd8ff" stroke="#0a3a22" stroke-width="1.5"/><path d="M202 144v14" stroke="#0a3a22" stroke-width="3"/>' +
      '<path d="M100 172h216" stroke="#e8ecf2" stroke-width="2.5"/><rect x="304" y="168" width="14" height="6" rx="2" fill="#ff5a4a"/><rect x="96" y="166" width="10" height="6" rx="2" fill="#fff3c4"/>' +
      '<path d="M98 184h220" stroke="#c9ced4" stroke-width="4"/></g>' +
      [140, 284].map(x => '<circle cx="' + x + '" cy="188" r="15" fill="#1a1a1a"/><circle cx="' + x + '" cy="188" r="10" fill="#d9dee4"/>' + Array.from({ length: 10 }, (_, k) => { const a = k * Math.PI / 5; return '<path d="M' + x + ' 188l' + (9 * Math.cos(a)).toFixed(1) + ' ' + (9 * Math.sin(a)).toFixed(1) + '" stroke="#8a929a" stroke-width="1"/>'; }).join("") + '<circle cx="' + x + '" cy="188" r="3" fill="' + GOLD + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys3)"/>' +
      '<rect x="20" y="40" width="360" height="164" fill="#d9d2c4"/><rect x="20" y="36" width="360" height="10" fill="#9a8f7a"/>' +
      '<rect x="60" y="74" width="280" height="130" fill="#26282e"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M60 ' + (78 + i * 7) + 'h280" stroke="#8a8f98" stroke-width="3"/>').join("") +
      '<rect x="60" y="104" width="280" height="100" fill="#33363e"/><rect x="60" y="104" width="280" height="100" fill="#3ddc84" opacity=".08"/><rect x="60" y="104" width="280" height="100" fill="#fff3c4" opacity=".05"/>' +
      '<rect x="80" y="48" width="240" height="22" rx="3" fill="#121418" stroke="' + GREEN + '" stroke-width="2"/><text class="cy-flk cy-flk2" x="200" y="64" text-anchor="middle" ' + font + ' font-size="12" fill="' + GREEN + '">CUSTOMS · PAINT · HYDRAULICS</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#55585e"/><path d="M0 232h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<ellipse cx="212" cy="204" rx="130" ry="6" fill="#000" opacity=".35"/>' + imp +
      '<rect x="356" y="96" width="5" height="108" fill="#2f2f2f"/>' + sign(300, 100, 98, "Chef Menteur") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">CHEF MENTEUR HWY</text>',
      sky("cys3", "#203050", "#d07a5a"));
  }

  /* 4. New Canal Lighthouse on Lake Pontchartrain, a cigarette boat flying by */
  function cylake() {
    const light = '<g><rect x="244" y="96" width="92" height="56" fill="#f6f6f2" stroke="#c8c8c0" stroke-width="1.5"/><path d="M236 98l54 -26l54 26z" fill="#c0392b"/>' +
      '<rect x="270" y="50" width="40" height="36" fill="#f6f6f2" stroke="#c8c8c0" stroke-width="1.5"/><path d="M264 52l26 -14l26 14z" fill="#c0392b"/>' +
      '<rect x="281" y="26" width="18" height="14" fill="#2a2a2a"/><rect x="283" y="28" width="14" height="10" fill="#fff1a8" class="cy-flk"/><path d="M279 26l11 -8l11 8z" fill="#c0392b"/>' +
      '<path class="cy-beam" d="M299 32l100 -20v30z" fill="#fff6c2"/><path class="cy-beam cy-beam2" d="M281 32l-100 -20v30z" fill="#fff6c2"/>' +
      [256, 280, 304].map(x => '<rect x="' + x + '" y="108" width="14" height="22" fill="#3a5a7a"/>').join("") + '<rect x="284" y="62" width="12" height="16" fill="#3a5a7a"/>' +
      '<rect x="236" y="150" width="108" height="8" fill="#e0dcd0"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (240 + i * 12) + ' 150v-10" stroke="#fff" stroke-width="2"/>').join("") + '<path d="M236 140h108" stroke="#fff" stroke-width="2"/></g>';
    const boat = '<g class="cy-boat"><g transform="translate(0 186)"><path d="M0 10h110l20 -8l-6 14q-4 4 -14 4h-106z" fill="' + GREEN + '" stroke="#0a3a22" stroke-width="1.5"/><path d="M4 12h120" stroke="#fff" stroke-width="2"/>' +
      '<path d="M40 10l14 -10h26l6 10z" fill="#1a2a3a"/><path d="M-30 18q15 -6 30 -2M-50 14q20 -6 40 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys4)"/>' +
      '<circle cx="80" cy="70" r="26" fill="#ffd9a0" opacity=".85"/>' +
      '<rect x="0" y="152" width="400" height="108" fill="#3d6a8a"/>' +
      [170, 200, 230].map((y, i) => '<path class="cy-wave' + (i % 2 ? " cy-wave2" : "") + '" d="M-10 ' + y + 'q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb0cc" stroke-width="2" fill="none" opacity=".7"/>').join("") +
      '<path d="M0 156h230l20 -6h150v8H0z" fill="#b8b2a2"/>' + light + boat +
      '<g class="cy-bird"><path d="M40 60q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">LAKE PONTCHARTRAIN · NEW CANAL LIGHTHOUSE</text>',
      sky("cys4", "#2a4a7a", "#f2b07a"));
  }

  /* 5. Washington Av and LaSalle St, Central City */
  function cycorner() {
    const towers = '<g fill="#3a4258">' +
      '<rect x="150" y="18" width="34" height="110"/><rect x="156" y="10" width="22" height="10"/>' +
      '<rect x="190" y="40" width="30" height="88"/><rect x="226" y="30" width="26" height="98"/><path d="M226 30l13 -12l13 12z"/>' +
      '<rect x="110" y="56" width="34" height="72"/><rect x="258" y="58" width="36" height="70"/><rect x="300" y="72" width="24" height="56"/></g>' +
      '<g fill="#ffe9a8" opacity=".75">' + Array.from({ length: 30 }, (_, i) => '<rect class="cy-flk' + (i % 3 ? "" : " cy-flk2") + '" x="' + [116, 128, 156, 168, 196, 208, 232, 242, 264, 278, 306][i % 11] + '" y="' + (26 + Math.floor(i / 11) * 22 + (i % 4) * 8) + '" width="5" height="4"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cys5)"/>' + towers +
      oak(40, 100, 64, "#24402a") + oak(368, 104, 56, "#24402a") +
      '<rect x="0" y="122" width="400" height="102" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("SPITTA", 16, 190, 56, GREEN, -6) + tag("CURREN$Y", 70, 218, 20, GOLD, -4) + tag("JET LIFE", 238, 190, 20, SKYB, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(232, 94, 156, "Washington Av") + sign(276, 120, 112, "LaSalle St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="cy-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="cy-sp"><circle cx="196" cy="168" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="cy-sp cy-sp2"><circle cx="202" cy="162" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("cys5", "#1e2a50", "#e89a6a"));
  }

  window.SCENES = { cystation: cystation, cyjet: cyjet, cygarage: cygarage, cylake: cylake, cycorner: cycorner };
})();
