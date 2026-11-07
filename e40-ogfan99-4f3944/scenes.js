/* E-40 scenes (Regions tab: The Bay Area; Vallejo, "the V", "707"). CSS classes prefixed e4- (the page's own anim-train moves the ferry in).
   1 Vallejo Ferry Terminal on Mare Island Way: the San Francisco Bay Ferry catamaran gliding up to the float, the low terminal, Mare Island across the strait.
   2 Mare Island across the Napa River / Mare Island Strait: the old naval shipyard's red-brick shops and the gray dry dock, a tug pushing past, gulls.
   3 The Vallejo theme park on the north side of town: a white steel coaster loop with a train racing round, lights on the midway.
   4 Franklin Middle School, Vallejo (his old middle school, where he gave $25,000 in supplies): stucco front, flag waving, boxes of supplies on the steps.
   5 Magazine St (E-40 Way since 2023) and Laurel St in South Vallejo: green signs, E-40 tagged on the wall, the Carquinez Bridge's suspension towers over the strait behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes e4gull{0%{transform:translate(-50px,0)}50%{transform:translate(200px,-10px)}100%{transform:translate(460px,0)}}.e4-gull{animation:e4gull 12s linear infinite}.e4-g2{animation-delay:-4s}.e4-g3{animation-delay:-8s}' +
    '@keyframes e4tug{from{transform:translateX(420px)}to{transform:translateX(-160px)}}.e4-tug{animation:e4tug 16s linear infinite}' +
    '@keyframes e4wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.e4-wave{animation:e4wave 4s ease-in-out infinite}' +
    '@keyframes e4ride{from{offset-distance:0%}to{offset-distance:100%}}.e4-ride{offset-path:path("M-40 200 L60 200 Q110 200 130 150 L170 60 Q180 40 200 40 Q220 40 228 60 L250 120 Q262 150 290 150 Q330 150 330 110 Q330 70 290 70 Q250 70 250 110 Q250 150 290 170 L440 200");animation:e4ride 6s linear infinite;offset-rotate:auto}.e4-r2{animation-delay:-.18s}.e4-r3{animation-delay:-.36s}' +
    '@keyframes e4bl{0%,100%{opacity:.25}50%{opacity:1}}.e4-bl{animation:e4bl 1.4s ease-in-out infinite}.e4-bl2{animation-delay:-.7s}' +
    '@keyframes e4flag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.e4-flag{animation:e4flag 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes e4spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.e4-sp{animation:e4spray 1.4s ease-out infinite}.e4-sp2{animation-delay:.45s}' +
    '@keyframes e4fog{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.e4-fog{animation:e4fog 9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "e4-bl" + (i % 2 ? " e4-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 60) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const gull = cls => '<g class="' + cls + '"><path d="M0 0q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const YEL = "#ffd400", TEAL = "#19c3b2", ORNG = "#ff6a3d", NAVY = "#1f4e79";
  const hills = (y, col) => '<path d="M0 ' + y + 'q50 -26 110 -14q60 -30 130 -8q70 -24 160 2v40H0z" fill="' + col + '"/>';

  /* 1. Vallejo Ferry Terminal */
  function e4station() {
    const ferry = '<g class="anim-train"><path d="M30 186h330l-14 18H44z" fill="#e9edf1" stroke="#7b848c" stroke-width="2"/><path d="M60 186v-34q0 -10 12 -10h230q22 0 30 20l8 24z" fill="#f6f7f8" stroke="#7b848c" stroke-width="2"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (70 + i * 28) + '" y="152" width="20" height="14" rx="2" fill="#1c2b3a"/>').join("") +
      '<rect x="110" y="128" width="150" height="16" rx="4" fill="#f6f7f8" stroke="#7b848c" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (120 + i * 28) + '" y="131" width="20" height="9" rx="2" fill="#1c2b3a"/>').join("") +
      '<rect x="60" y="172" width="300" height="5" fill="' + NAVY + '"/><rect x="60" y="178" width="300" height="3" fill="' + TEAL + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#e4s1)"/>' +
      hills(96, "#7d8f5e") + '<rect x="40" y="78" width="40" height="18" fill="#8a3b2e"/><rect x="250" y="80" width="54" height="16" fill="#8a3b2e"/>' +
      '<rect x="0" y="96" width="400" height="110" fill="#4f7891"/>' +
      '<g class="e4-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (110 + (i % 3) * 12) + 'q10 -4 20 0" stroke="#9cc3d6" stroke-width="2" fill="none"/>').join("") + '</g>' +
      ferry +
      '<rect x="0" y="204" width="400" height="56" fill="#b6b0a4"/><rect x="0" y="202" width="400" height="5" fill="#f2c200"/>' +
      '<rect x="300" y="108" width="96" height="40" fill="#d7d2c6"/><path d="M294 110l54 -18l54 18z" fill="#2f5e5a"/>' +
      '<g transform="translate(0 50)">' + gull("e4-gull") + '</g><g transform="translate(0 70)">' + gull("e4-gull e4-g2") + '</g>' +
      '<rect x="58" y="214" width="284" height="36" rx="3" fill="#111"/><text x="76" y="238" ' + font + ' font-size="18" fill="#fff">Vallejo Ferry</text>' + badge(262, 232, "FERRY", NAVY),
      sky("e4s1", "#79aee0", "#f5dcb6"));
  }

  /* 2. Mare Island shipyard across the strait */
  function e4mare() {
    const shop = (x, w, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="#9a4a36"/><path d="M' + x + ' ' + (150 - h) + 'l' + (w / 2) + ' -12l' + (w / 2) + ' 12z" fill="#6e3226"/>' +
      Array.from({ length: Math.floor(w / 14) }, (_, i) => '<rect x="' + (x + 5 + i * 14) + '" y="' + (156 - h) + '" width="7" height="' + (h - 14) + '" rx="3" fill="#3a2a24"/>').join("");
    const tug = '<g class="e4-tug"><path d="M0 200h70l-8 12H6z" fill="#b8402e"/><rect x="12" y="186" width="34" height="14" fill="#f2f2f2"/><rect x="18" y="176" width="18" height="10" fill="#f2f2f2"/><rect x="22" y="168" width="6" height="8" fill="#222"/><path d="M70 204q20 2 30 8" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#e4s2)"/>' +
      '<g class="e4-fog"><ellipse cx="90" cy="60" rx="70" ry="12" fill="#fff" opacity=".35"/><ellipse cx="300" cy="44" rx="80" ry="10" fill="#fff" opacity=".3"/></g>' +
      hills(118, "#8b9c6a") +
      shop(20, 90, 50) + shop(124, 60, 40) + shop(300, 84, 56) +
      '<rect x="196" y="122" width="96" height="28" fill="#7d838a"/><path d="M196 122h96" stroke="#5a6067" stroke-width="3"/><path d="M206 150v-20h76v20" stroke="#5a6067" fill="none" stroke-width="2"/>' +
      '<rect x="230" y="104" width="6" height="18" fill="#5a6067"/><rect x="226" y="98" width="14" height="8" fill="#5a6067"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#456c84"/>' +
      '<g class="e4-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (170 + (i % 3) * 22) + 'q10 -4 20 0" stroke="#93b9cc" stroke-width="2" fill="none"/>').join("") + '</g>' +
      tug +
      '<g transform="translate(0 70)">' + gull("e4-gull") + '</g><g transform="translate(0 92)">' + gull("e4-gull e4-g3") + '</g>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#e3edf2" opacity=".9">MARE ISLAND STRAIT</text>',
      sky("e4s2", "#8fb6d8", "#e6e3da"));
  }

  /* 3. The theme park coaster */
  function e4coaster() {
    const track = "M-40 200 L60 200 Q110 200 130 150 L170 60 Q180 40 200 40 Q220 40 228 60 L250 120 Q262 150 290 150 Q330 150 330 110 Q330 70 290 70 Q250 70 250 110 Q250 150 290 170 L440 200";
    const supports = [80, 130, 160, 200, 230, 260, 290, 330, 370].map(x => '<path d="M' + x + ' 220V' + (x === 200 ? 44 : x === 160 ? 80 : x === 130 ? 152 : x === 230 ? 70 : x === 260 ? 140 : x === 290 ? 168 : x === 330 ? 112 : x === 370 ? 182 : 200) + '" stroke="#c9cfd6" stroke-width="3"/>').join("");
    const car = c => '<g class="e4-ride ' + c + '"><rect x="-10" y="-8" width="20" height="10" rx="3" fill="' + ORNG + '"/><circle cx="-4" cy="-10" r="2.6" fill="#333"/><circle cx="4" cy="-10" r="2.6" fill="#333"/></g>';
    const lights = Array.from({ length: 16 }, (_, i) => '<circle class="e4-bl' + (i % 2 ? " e4-bl2" : "") + '" cx="' + (12 + i * 25) + '" cy="226" r="2.6" fill="' + [YEL, TEAL, ORNG][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#e4s3)"/>' + stars(10) +
      supports + '<path d="' + track + '" stroke="#eef1f4" stroke-width="5" fill="none"/><path d="' + track + '" stroke="#9aa3ad" stroke-width="1.2" fill="none" stroke-dasharray="3 5"/>' +
      car("") + car("e4-r2") + car("e4-r3") +
      '<rect x="0" y="220" width="400" height="40" fill="#3d3a46"/>' + '<path d="M0 222h400" stroke="#2a2833" stroke-width="2"/>' + lights +
      '<path d="M20 220v-24l16 -10l16 10v24z" fill="#e2564a"/><path d="M20 196l16 -10l16 10" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#f3efe6" opacity=".9">THE PARK ON THE NORTH SIDE OF THE V</text>',
      sky("e4s3", "#232a5c", "#e98a6a"));
  }

  /* 4. Franklin Middle School */
  function e4school() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (46 + i * 40) + '" y="96" width="24" height="26" fill="#2f4a5e"/><path d="M' + (58 + i * 40) + ' 96v26" stroke="#e8e2d2" stroke-width="2"/>').join("");
    const box = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="22" height="16" fill="#c9a26a" stroke="#8a6a3a" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 6) + 'h22" stroke="' + c + '" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#e4s4)"/>' +
      '<rect x="30" y="80" width="340" height="100" fill="#e8dcc0"/><rect x="30" y="74" width="340" height="8" fill="#b9573f"/>' + win +
      '<rect x="160" y="130" width="80" height="50" fill="#a9b6c1"/><path d="M200 130v50" stroke="#6f7c87" stroke-width="2"/>' +
      '<rect x="130" y="128" width="140" height="0" fill="none"/>' +
      '<text x="200" y="68" text-anchor="middle" ' + font + ' font-size="13" fill="#20324a">FRANKLIN MIDDLE SCHOOL</text>' +
      '<rect x="356" y="20" width="3" height="160" fill="#8a8f96"/><g class="e4-flag"><rect x="359" y="22" width="34" height="20" fill="#1f4e79"/><path d="M359 30h34M359 36h34" stroke="' + YEL + '" stroke-width="3"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#7aa35a"/><rect x="140" y="180" width="120" height="14" fill="#cfc8b8"/><path d="M150 194L120 260H280L250 194z" fill="#cfc8b8"/>' +
      box(150, 166, TEAL) + box(176, 166, ORNG) + box(202, 166, YEL) + box(228, 166, TEAL) + box(163, 150, YEL) + box(189, 150, ORNG) + box(215, 150, TEAL) +
      '<g transform="translate(-20 30)">' + gull("e4-gull") + '</g>',
      sky("e4s4", "#7cb4e6", "#e9f1f6"));
  }

  /* 5. Magazine St (E-40 Way) and Laurel St */
  function e4corner() {
    const bridge = '<g transform="translate(110 22)" stroke="#a7aeb5" fill="none"><path d="M0 92H290" stroke-width="5"/>' +
      '<rect x="62" y="6" width="8" height="90" fill="#c4c9ce" stroke="none"/><rect x="216" y="6" width="8" height="90" fill="#c4c9ce" stroke="none"/>' +
      '<path d="M0 84Q40 70 66 8M66 8Q143 96 220 8M220 8Q246 70 290 84" stroke-width="2.4"/>' +
      Array.from({ length: 17 }, (_, i) => { const u = (i + 1) / 18; const x = 66 + 154 * u; const t = 8 + 176 * u * (1 - u); return '<path d="M' + x.toFixed(1) + ' ' + t.toFixed(1) + 'V92" stroke-width=".8"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#e4s5)"/>' + stars(12) +
      '<path d="M0 118q60 -24 120 -10q70 -20 140 -4q70 -16 140 2v20H0z" fill="#3e3a52"/>' + '<rect x="0" y="112" width="400" height="14" fill="#2e4560"/>' + bridge +
      '<rect x="0" y="122" width="400" height="104" fill="#c7b9a0"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (138 + i * 16) + 'h400" stroke="#b3a487" stroke-width="1"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#6f6450"/>' +
      tag("E-40", 24, 198, 66, YEL, -6) + tag("SICK WID IT", 170, 172, 22, TEAL, -4) + tag("40 WATER", 178, 212, 20, ORNG, -3) +
      '<rect x="0" y="222" width="400" height="38" fill="#4d4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="92" width="6" height="130" fill="#2f2f2f"/>' + sign(250, 94, 146, "E-40 Way") + sign(266, 120, 116, "Laurel St") +
      
      '<rect x="8" y="108" width="4" height="114" fill="#222"/><circle class="e4-bl" cx="10" cy="106" r="7" fill="#ffe9a8"/>' +
      '<g class="e4-sp"><circle cx="160" cy="164" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="e4-sp e4-sp2"><circle cx="166" cy="158" r="2" fill="' + YEL + '" opacity=".6"/></g>',
      sky("e4s5", "#141a3a", "#c76a5a"));
  }

  window.SCENES = { e4station: e4station, e4mare: e4mare, e4coaster: e4coaster, e4school: e4school, e4corner: e4corner };
})();
