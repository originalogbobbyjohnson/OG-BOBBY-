/* Sheff G game (NYC map, Brooklyn: Flatbush). Parkside Av on the B/Q down in the open cut, the Peristyle (Grecian Shelter) in Prospect Park
   by Parkside & Ocean Avs, the Prospect Park Carousel by the Flatbush Av side, Drummer's Grove (the Sunday Caribbean drum circle), and Parkside Av &
   Flatbush Av with the park behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes fall{0%{transform:translate(0,-10px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(30px,190px) rotate(240deg);opacity:0}}.lf{transform-box:fill-box;animation:fall 5s linear infinite}.lf2{animation-delay:-1.6s}.lf3{animation-delay:-3.2s}' +
    '@keyframes fly{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.bird{animation:fly 9s linear infinite}.bird2{animation-delay:-4s}' +
    '@keyframes ride{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.hz{animation:ride 1.2s ease-in-out infinite}.hz2{animation-delay:-.4s}.hz3{animation-delay:-.8s}' +
    '@keyframes vum{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.vu{transform-box:fill-box;transform-origin:50% 100%;animation:vum .5s ease-in-out infinite}.vu2{animation-delay:-.15s}.vu3{animation-delay:-.3s}' +
    '@keyframes glow{0%,100%{opacity:.55}50%{opacity:1}}.gl{animation:glow 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r * 1.4) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '"/>';
  const ORANGE = "#ff6319", YELLOW = "#fccc0a", GREEN = "#36d17c", GOLD = "#ffd23f", RED = "#ff5a5f", CREAM = "#efe2c4", STONE = "#b9ad96";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Parkside Av on the B/Q, down in the open cut: stone retaining walls, the Parkside Av bridge overhead, the sign with B and Q, the train sliding in */
  function parkside() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let stones = "";
    for (let y = 60; y < 180; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) stones += '<rect x="' + x + '" y="' + y + '" width="26" height="10" rx="2" fill="#8d8471"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' +
      tree(30, 26, 18, "#3f8a4a") + tree(90, 20, 20, "#4c9a52") + tree(320, 22, 20, "#3f8a4a") + tree(378, 28, 16, "#4c9a52") +
      '<rect x="0" y="52" width="400" height="140" fill="#9c927d"/>' + stones +
      /* the Parkside Av bridge */
      '<rect x="0" y="52" width="400" height="20" fill="#6f6a60"/><rect x="0" y="48" width="400" height="5" fill="#3a3a3a"/>' +
      (() => { let r = ""; for (let x = 4; x < 400; x += 12) r += '<rect x="' + x + '" y="38" width="3" height="11" fill="#3a3a3a"/>'; return r; })() + '<rect x="0" y="36" width="400" height="3" fill="#3a3a3a"/>' +
      '<g class="car"><rect x="0" y="24" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="38" r="3.5" fill="#111"/><circle cx="34" cy="38" r="3.5" fill="#111"/></g>' +
      '<text x="200" y="66" text-anchor="middle" ' + font + ' font-size="9" fill="#efe9dc" letter-spacing="3">PARKSIDE AV</text>' +
      /* sign */
      '<rect x="92" y="84" width="216" height="30" rx="3" fill="#111"/><rect x="92" y="84" width="216" height="3" fill="#fff"/>' +
      '<text x="106" y="106" ' + font + ' font-size="15" fill="#fff">Parkside Av</text>' + bullet(262, 99, "B", ORANGE) + bullet(288, 99, "Q", YELLOW, true) +
      '<g class="anim-train">' +
        '<rect x="6" y="124" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="132" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 168, "Q", YELLOW, true) +
        '<circle cx="18" cy="172" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/><rect x="0" y="190" width="400" height="70" fill="#4a4a4f"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 4) + '" y="190" width="8" height="70" fill="#5c6b5c"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#3b3f46"/>',
      sky("p1", "#7cc0f0", "#d8eefc"));
  }

  /* 2. The Peristyle (Grecian Shelter) in Prospect Park, by Parkside & Ocean Avs: a long row of buff terracotta Corinthian columns, leaves falling */
  function peristyle() {
    let cols = "";
    for (let x = 64; x <= 336; x += 24) cols += '<rect x="' + (x - 5) + '" y="96" width="10" height="92" fill="' + CREAM + '"/><path d="M' + (x - 2) + ' 98v88M' + (x + 2) + ' 98v88" stroke="#d6c6a0" stroke-width="1"/>' +
      '<path d="M' + (x - 9) + ' 96q9 -10 18 0z" fill="#e2d1a8"/><rect x="' + (x - 8) + '" y="186" width="16" height="6" fill="#d6c6a0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p2)"/>' +
      tree(20, 92, 30, "#d98a2b") + tree(384, 86, 32, "#c4512a") + tree(120, 70, 22, "#e0a43a") + tree(300, 66, 24, "#d98a2b") +
      '<g class="bird"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="bird bird2"><path d="M0 60q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* entablature */
      '<rect x="44" y="70" width="312" height="10" fill="#e8d8b0"/><rect x="48" y="80" width="304" height="16" fill="' + CREAM + '"/><path d="M48 88h304" stroke="#d6c6a0" stroke-width="2"/>' +
      '<rect x="40" y="64" width="320" height="8" fill="#d9c79c"/>' +
      cols +
      '<rect x="40" y="192" width="320" height="10" fill="#cbbb94"/><rect x="30" y="202" width="340" height="8" fill="#b9a983"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5f9e4f"/><path d="M150 260l20-50h60l20 50z" fill="#c9bfa8"/>' +
      '<g transform="translate(60 40)"><path class="lf" d="M0 0q6-6 10 0q-4 6-10 0z" fill="#e0a43a"/></g><g transform="translate(200 30)"><path class="lf lf2" d="M0 0q6-6 10 0q-4 6-10 0z" fill="#c4512a"/></g><g transform="translate(320 36)"><path class="lf lf3" d="M0 0q6-6 10 0q-4 6-10 0z" fill="#d98a2b"/></g>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">PROSPECT PARK</text>',
      sky("p2", "#7fb8e8", "#f4dcb0"));
  }

  /* 3. The Prospect Park Carousel by the Flatbush Av side: the round pavilion, carved horses riding up and down, a ring of chasing lights */
  function carousel() {
    let lights = "";
    for (let x = 70; x <= 330; x += 13) lights += '<circle class="' + (x % 26 ? "bl" : "bl bl2") + '" cx="' + x + '" cy="112" r="2.6" fill="#fff3a8"/>';
    const horse = (x, y, col, cls) => '<g class="hz ' + cls + '"><rect x="' + (x + 13) + '" y="' + (y - 34) + '" width="2.5" height="70" fill="' + GOLD + '"/><path d="M' + x + ' ' + (y + 6) + 'q2-14 16-14h10l6-10 6 4-4 10q2 8-4 14l-2 14h-4l0-10h-18l-2 10h-4z" fill="' + col + '" stroke="#5a3a1a" stroke-width="1.5"/><rect x="' + (x + 8) + '" y="' + (y - 6) + '" width="12" height="5" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#p3)"/>' +
      tree(26, 100, 26, "#3f8a4a") + tree(376, 96, 28, "#356f3d") +
      /* pavilion roof */
      '<path d="M40 104L200 44L360 104z" fill="#2f6b4a" stroke="#1f4a33" stroke-width="3"/><path d="M200 44v-16" stroke="' + GOLD + '" stroke-width="3"/><circle cx="200" cy="26" r="5" fill="' + GOLD + '"/>' +
      '<rect x="44" y="104" width="312" height="16" fill="#f2e6c8" stroke="#c9a24a" stroke-width="2"/>' + lights +
      '<rect x="50" y="120" width="300" height="90" fill="#7a3d2a" opacity=".35"/>' +
      [52, 348].map(x => '<rect x="' + (x - 4) + '" y="120" width="8" height="94" fill="#f2e6c8"/>').join("") +
      horse(76, 170, "#f4f0e6", "") + horse(136, 176, "#d9a46a", "hz2") + horse(196, 168, "#f4f0e6", "hz3") + horse(256, 174, "#c9874a", "") + horse(306, 170, "#f4f0e6", "hz2") +
      '<ellipse cx="200" cy="212" rx="156" ry="10" fill="#c9a24a"/><rect x="44" y="212" width="312" height="8" fill="#8a6a2a"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5f9e4f"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">PROSPECT PARK CAROUSEL</text>',
      sky("p3", "#86c6f2", "#e6f4ff"));
  }

  /* 4. Drummer's Grove in Prospect Park (Parkside & Ocean Avs): the Sunday Caribbean drum circle under the trees, drums bouncing, people dancing */
  function drummers() {
    const drum = (x, y, col, cls) => '<g class="hz ' + cls + '"><rect x="' + (x - 12) + '" y="' + y + '" width="24" height="34" rx="4" fill="' + col + '" stroke="#3a2412" stroke-width="2"/><ellipse cx="' + x + '" cy="' + y + '" rx="12" ry="4" fill="#efe2c4" stroke="#3a2412" stroke-width="1.5"/><path d="M' + (x - 10) + ' ' + (y + 6) + 'l20 22M' + (x + 10) + ' ' + (y + 6) + 'l-20 22" stroke="#e8c88a" stroke-width="1.5"/></g>';
    const person = (x, y, col, cls) => '<g class="hz ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="22" rx="5" fill="' + col + '"/><path d="M' + (x - 5) + ' ' + (y + 10) + 'l-9 -12M' + (x + 5) + ' ' + (y + 10) + 'l9 -12M' + (x - 3) + ' ' + (y + 28) + 'l-4 16M' + (x + 3) + ' ' + (y + 28) + 'l4 16" stroke="' + col + '" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#p4)"/>' +
      tree(40, 70, 40, "#3f8a4a") + tree(130, 56, 44, "#4c9a52") + tree(230, 64, 42, "#3f8a4a") + tree(330, 54, 46, "#4c9a52") + tree(396, 76, 34, "#3f8a4a") +
      '<rect x="0" y="150" width="400" height="110" fill="#6aa857"/><ellipse cx="200" cy="200" rx="170" ry="40" fill="#8a7a5a" opacity=".55"/>' +
      '<g transform="translate(40 30)"><path class="lf" d="M0 0q6-6 10 0q-4 6-10 0z" fill="#e0a43a"/></g><g transform="translate(260 26)"><path class="lf lf2" d="M0 0q6-6 10 0q-4 6-10 0z" fill="#3f8a4a"/></g>' +
      person(60, 150, "#1b1b1b", "") + person(340, 152, "#1b1b1b", "hz2") + person(110, 140, "#262626", "hz3") + person(292, 142, "#262626", "") +
      drum(130, 196, "#c4512a", "") + drum(170, 204, "#e0a43a", "hz2") + drum(210, 206, "#2f7a4a", "hz3") + drum(250, 202, "#c4512a", "") + drum(288, 194, "#e0a43a", "hz2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">DRUMMER&#39;S GROVE</text>',
      sky("p4", "#86c6f2", "#e6f4ff"));
  }

  /* 5. Parkside Av & Flatbush Av: green street signs, the wall tagged SHEFF G, Prospect Park's trees and a park lamp behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#p5)"/>' + stars(16) +
      tree(30, 70, 34, "#1f3a26") + tree(100, 60, 38, "#24452d") + tree(180, 72, 32, "#1f3a26") + tree(250, 58, 40, "#24452d") + tree(330, 68, 34, "#1f3a26") +
      '<rect x="0" y="110" width="400" height="22" fill="#5a5a52"/><rect x="0" y="106" width="400" height="5" fill="#7a7a70"/>' +
      [70, 210].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="44" fill="#2a3a30"/><circle class="flk" cx="' + x + '" cy="62" r="6" fill="#fff3c0"/>').join("") +
      /* wall */
      '<rect x="0" y="132" width="400" height="94" fill="#2d3f36"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#24342c" stroke-width="1"/>'; return b; })() +
      tag("SHEFF G", 18, 194, 44, GOLD, -5) + tag("BREESH", 40, 222, 22, GREEN, -3) + tag("LUCCY", 216, 176, 24, RED, -8) + tag("GREAT JOHN", 206, 212, 16, CREAM, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="240" width="40" height="13" rx="4" fill="' + YELLOW + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="30" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Parkside Av</text>' +
      '<rect x="290" y="92" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Flatbush Av</text>' +
      '<circle class="flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("p5", "#0a0f14", "#1f3340"));
  }

  window.SCENES = { parkside: parkside, peristyle: peristyle, carousel: carousel, drummers: drummers, corner: corner };
})();
