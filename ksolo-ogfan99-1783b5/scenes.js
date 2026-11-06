/* K-Solo game (NYC map, Long Island: Central Islip, "C.I.-Fly"; born in Brentwood next door). 400 x 260 SVGs.
   0. The LIRR Montauk Branch pulling into Islip (diesel territory past Babylon: silver locomotive + bilevel coaches, high-level platform, the low brick depot).
   1. 75 Rockefeller Plaza, Midtown: the white limestone slab tower that was Atlantic Records' home when "Tell the World My Name" came out.
   2. Central Islip Public Library on Hawthorne Av: his spelling style, letters flying off the shelves and out the doors.
   3. Islip Speedway (1947-1984), the town's famous figure-8 track: stock cars crossing in the middle under the lights.
   4. Lowell Av & E Suffolk Av in Central Islip, the old red-brick campus halls behind, K-SOLO tagged on the wall.
   All CSS classes are prefixed ks- so they never clash with the game's own classes. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kscar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ks-car{animation:kscar 7s linear infinite}.ks-car2{animation-delay:-3.5s;animation-duration:9s}' +
    '@keyframes ksblink{0%,100%{opacity:.3}50%{opacity:1}}.ks-bl{animation:ksblink 1.8s ease-in-out infinite}.ks-bl2{animation-delay:.6s}.ks-bl3{animation-delay:1.2s}' +
    '@keyframes ksflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ks-flk{animation:ksflick 2.6s infinite}' +
    '@keyframes ksfly{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(var(--dx),-120px) rotate(var(--r));opacity:0}}.ks-fly{transform-box:fill-box;transform-origin:50% 50%;animation:ksfly 3.6s ease-out infinite}' +
    '@keyframes kswave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ks-flag{transform-box:fill-box;transform-origin:0 50%;animation:kswave 1.6s ease-in-out infinite}' +
    '@keyframes ksspin{to{transform:rotate(360deg)}}.ks-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ksspin 1.4s linear infinite}' +
    '@keyframes ksbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ks-bob{animation:ksbob .7s ease-in-out infinite}.ks-bob2{animation-delay:.35s}' +
    '@keyframes ksbeam{0%,100%{opacity:.18}50%{opacity:.4}}.ks-beam{animation:ksbeam 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const pill = (x, y, label, color) => '<rect x="' + (x - 22) + '" y="' + (y - 10) + '" width="44" height="20" rx="10" fill="' + color + '"/>' + txt(label, x, y + 5, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#f5d142", CORAL = "#ff5d73", SKY = "#4cc9f0", CREAM = "#f4ead8", LIRR = "#0039a6", BRICK = "#8a3b2a";

  /* 0. Islip, LIRR Montauk Branch: high-level platform, the low brick depot, black sign, the diesel pulling the bilevels in */
  function islip() {
    let coach = (x) => '<rect x="' + x + '" y="96" width="128" height="62" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 8 + i * 24) + '" y="104" width="16" height="11" rx="2" fill="#cfe2f5"/><rect x="' + (x + 8 + i * 24) + '" y="124" width="16" height="11" rx="2" fill="#cfe2f5"/>').join("") +
      '<rect x="' + x + '" y="140" width="128" height="5" fill="' + LIRR + '"/>';
    let trees = "";
    for (let i = 0; i < 9; i++) trees += '<circle cx="' + (i * 48 + 10) + '" cy="' + (60 + (i % 2) * 6) + '" r="' + (20 + (i % 3) * 4) + '" fill="#2f6b3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ksi)"/>' +
      '<circle cx="340" cy="34" r="16" fill="#fff3b0" opacity=".9"/>' + trees +
      /* depot behind the far platform */
      '<rect x="260" y="56" width="120" height="36" fill="' + BRICK + '"/><path d="M252 58l68-14l68 14z" fill="#3a3a3a"/>' +
      '<rect x="276" y="68" width="18" height="16" fill="#cfe2f5"/><rect x="304" y="66" width="16" height="26" fill="#2a1b14"/><rect x="332" y="68" width="18" height="16" fill="#cfe2f5"/>' +
      /* the train */
      '<g class="anim-train">' +
        '<path d="M282 158v-50q0-12 14-14h44q20 2 26 20v44z" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="330" y="100" width="26" height="18" rx="3" fill="#1d2a3a"/><rect x="282" y="138" width="84" height="6" fill="' + LIRR + '"/>' +
        '<rect x="282" y="146" width="84" height="4" fill="#1b1b1b"/><circle class="ks-flk" cx="356" cy="132" r="4" fill="#fff6c2"/>' +
        txt("LIRR", 318, 132, 11, LIRR) +
        coach(18) + coach(150) +
      '</g>' +
      /* high-level platform + sign */
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="92" fill="#6b6964"/>' +
      '<rect x="0" y="168" width="400" height="3" fill="#4a4844"/>' +
      '<rect x="40" y="186" width="5" height="40" fill="#2b2b2b"/><rect x="225" y="186" width="5" height="40" fill="#2b2b2b"/>' +
      '<rect x="30" y="176" width="210" height="30" rx="3" fill="#111"/><rect x="30" y="176" width="210" height="3" fill="#fff"/>' +
      '<text x="44" y="198" ' + font + ' font-size="16" fill="#fff">Islip</text>' + pill(208, 192, "LIRR", LIRR) +
      person(300, 200, "#1b1b1b") + person(326, 204, "#2a2a2a", "ks-bob") +
      txt("MONTAUK BRANCH", 135, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("ksi", "#7cc0ea", "#d9eef8"));
  }

  /* 1. 75 Rockefeller Plaza at dusk: the white limestone slab with its setbacks, lit windows, a record spinning in the lobby glass, cabs rolling by */
  function rock75() {
    let win = "";
    for (let y = 40; y < 196; y += 9) for (let x = 140; x < 260; x += 10) win += '<rect class="ks-bl ks-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="5" height="5" fill="#ffe7a0" opacity=".7"/>';
    let side = "";
    for (let y = 120; y < 196; y += 9) { for (let x = 30; x < 120; x += 10) side += '<rect x="' + x + '" y="' + y + '" width="5" height="5" fill="#ffe7a0" opacity=".45"/>'; for (let x = 286; x < 370; x += 10) side += '<rect x="' + x + '" y="' + y + '" width="5" height="5" fill="#ffe7a0" opacity=".45"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ksr)"/>' + stars(12) +
      /* neighbours */
      '<rect x="20" y="110" width="110" height="96" fill="#3b3f52"/><rect x="278" y="104" width="102" height="102" fill="#3b3f52"/>' + side +
      /* the slab: setbacks */
      '<rect x="150" y="18" width="100" height="22" fill="#e9e4d6"/><rect x="138" y="36" width="124" height="20" fill="#e2dccb"/>' +
      '<rect x="130" y="52" width="140" height="154" fill="#ddd6c4"/>' +
      [150, 170, 190, 210, 230, 250].map(x => '<rect x="' + x + '" y="52" width="2" height="154" fill="#c9c1ac"/>').join("") + win +
      '<rect class="ks-flag" x="200" y="2" width="20" height="10" fill="' + CORAL + '"/><rect x="198" y="2" width="2" height="18" fill="#999"/>' +
      txt("75", 200, 33, 12, "#6e6553") +
      /* lobby */
      '<rect x="150" y="176" width="100" height="30" fill="#1c1a16"/><rect x="152" y="178" width="96" height="26" fill="#3a3326"/>' +
      '<g class="ks-spin"><circle cx="200" cy="191" r="11" fill="#111"/><circle cx="200" cy="191" r="7" fill="none" stroke="#333"/><circle cx="200" cy="191" r="3.5" fill="' + GOLD + '"/></g>' +
      /* street */
      '<rect x="0" y="206" width="400" height="54" fill="#2c2c30"/><rect x="0" y="206" width="400" height="5" fill="#6d6d72"/>' +
      [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="236" width="30" height="3" fill="#e9e1c8"/>').join("") +
      '<g class="ks-car"><rect x="0" y="220" width="52" height="16" rx="5" fill="#f7c600"/><rect x="18" y="214" width="16" height="7" rx="2" fill="#f7c600"/><circle cx="12" cy="236" r="5" fill="#111"/><circle cx="40" cy="236" r="5" fill="#111"/></g>' +
      '<g class="ks-car ks-car2"><rect x="0" y="222" width="46" height="14" rx="5" fill="' + SKY + '"/><circle cx="10" cy="236" r="5" fill="#111"/><circle cx="36" cy="236" r="5" fill="#111"/></g>' +
      txt("75 ROCKEFELLER PLAZA", 200, 254, 10, CREAM, 'letter-spacing="3"'),
      sky("ksr", "#1a1f3b", "#c96f5a"));
  }

  /* 2. Central Islip Public Library: low brick building, big windows full of shelves, the doors open and letters flying out spelling K-S-O-L-O */
  function library() {
    let shelves = "";
    for (let w = 0; w < 3; w++) { const x0 = 56 + w * 104; for (let r = 0; r < 3; r++) for (let b = 0; b < 9; b++) shelves += '<rect x="' + (x0 + 4 + b * 8) + '" y="' + (112 + r * 18) + '" width="6" height="14" fill="' + ["#e63946", "#f5d142", "#4cc9f0", "#90be6d", "#f4a261"][(b + r + w) % 5] + '"/>'; }
    const letters = ["K", "S", "O", "L", "O"].map((l, i) => '<g class="ks-fly" style="--dx:' + ((i - 2) * 26) + 'px;--r:' + ((i % 2 ? 1 : -1) * 25) + 'deg;animation-delay:-' + (i * 0.7) + 's"><rect x="' + (188) + '" y="176" width="24" height="24" rx="3" fill="' + [GOLD, CORAL, SKY, "#90be6d", GOLD][i] + '" stroke="#1b1b1b" stroke-width="2"/>' + txt(l, 200, 194, 16, "#1b1b1b") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ksl)"/>' +
      '<circle cx="60" cy="40" r="20" fill="#fff6c9"/>' +
      [[0, 96, 30], [360, 92, 34], [330, 100, 26]].map(t => '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#3f7d3a"/>').join("") +
      '<rect x="30" y="86" width="340" height="128" fill="' + BRICK + '"/><rect x="24" y="72" width="352" height="22" fill="#e9e1cf"/>' +
      [0, 1, 2].map(w => '<rect x="' + (52 + w * 104) + '" y="106" width="84" height="64" fill="#2a2f3a" stroke="#e9e1cf" stroke-width="3"/>').join("") + shelves +
      txt("CENTRAL ISLIP PUBLIC LIBRARY", 200, 88, 11, "#5a2a1e", 'letter-spacing="1.5"') +
      /* doors */
      '<rect x="172" y="172" width="56" height="42" fill="#1b1b1b"/><rect x="174" y="174" width="25" height="40" fill="#cfe2f5" opacity=".6"/><rect x="201" y="174" width="25" height="40" fill="#cfe2f5" opacity=".6"/>' +
      letters +
      /* lawn + walk */
      '<rect x="0" y="214" width="400" height="46" fill="#5f9e4a"/><path d="M178 214h44l20 46h-84z" fill="#cfc8b6"/>' +
      person(90, 220, "#1b1b1b", "ks-bob") + person(312, 222, "#2a2a2a", "ks-bob ks-bob2") +
      txt("HAWTHORNE AV", 330, 252, 10, "#fff", 'letter-spacing="2"'),
      sky("ksl", "#8fd3ff", "#e6f6ff"));
  }

  /* 3. Islip Speedway at night: the figure-8 with stock cars crossing at the X, grandstand, light towers */
  function speedway() {
    const eight = 'M200 168 C150 120 60 120 60 168 C60 216 150 216 200 168 C250 120 340 120 340 168 C340 216 250 216 200 168 Z';
    const car = (col, dur, delay, num) => '<g><rect x="-11" y="-6" width="22" height="12" rx="3" fill="' + col + '" stroke="#111" stroke-width="1.5"/><circle cx="0" cy="0" r="4" fill="#fff"/>' + txt(num, 0, 3, 6, "#111") +
      '<animateMotion dur="' + dur + 's" begin="-' + delay + 's" repeatCount="indefinite" rotate="auto" path="' + eight + '"/></g>';
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle class="ks-bob' + (i % 2 ? " ks-bob2" : "") + '" cx="' + (14 + i * 9.5) + '" cy="' + (88 + (i % 3) * 7) + '" r="3.2" fill="' + ["#3b3b48", "#4a4a5a", "#2f2f3a"][i % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kss)"/>' + stars(14) +
      /* light towers */
      [30, 200, 370].map(x => '<rect x="' + (x - 2) + '" y="18" width="4" height="62" fill="#555"/><rect x="' + (x - 12) + '" y="12" width="24" height="8" fill="#fff8d0"/><path class="ks-beam" d="M' + (x - 12) + ' 20l-40 150h104l-40-150z" fill="#fff8d0"/>').join("") +
      /* grandstand */
      '<rect x="0" y="80" width="400" height="34" fill="#20202a"/>' + crowd + '<rect x="0" y="110" width="400" height="6" fill="#d9d9d9"/>' +
      /* infield + track */
      '<rect x="0" y="116" width="400" height="144" fill="#3d5a2f"/>' +
      '<path d="' + eight + '" fill="none" stroke="#5a5550" stroke-width="30"/>' +
      '<path d="' + eight + '" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="6 6" opacity=".6"/>' +
      car(CORAL, 5, 0, "7") + car(GOLD, 5, 2.5, "3") + car(SKY, 6, 1.2, "1") +
      '<rect x="130" y="226" width="140" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + txt("ISLIP SPEEDWAY", 200, 242, 11, GOLD, 'letter-spacing="1.5"'),
      sky("kss", "#060914", "#1d2440"));
  }

  /* 4. Lowell Av & E Suffolk Av, Central Islip: the old red-brick campus halls with the white cupola behind, the wall tagged, a car rolling by */
  function corner() {
    let hall = (x, w, h) => { let g = '<rect x="' + x + '" y="' + (130 - h) + '" width="' + w + '" height="' + h + '" fill="#7a3426"/><path d="M' + (x - 4) + ' ' + (130 - h) + 'l' + (w / 2 + 4) + '-14l' + (w / 2 + 4) + ' 14z" fill="#3b3434"/>';
      for (let yy = 130 - h + 10; yy < 124; yy += 14) for (let xx = x + 8; xx < x + w - 8; xx += 14) g += '<rect class="ks-bl ks-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="9" fill="#ffd98a" opacity=".7"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#ksc)"/>' + stars(10) +
      hall(10, 110, 60) + hall(140, 120, 78) + hall(280, 110, 56) +
      /* cupola on the middle hall */
      '<rect x="190" y="26" width="20" height="26" fill="#f2efe6"/><path d="M186 28l14-14l14 14z" fill="#3b3434"/><rect x="198" y="4" width="3" height="12" fill="#999"/><rect x="194" y="34" width="12" height="12" fill="#2a2a2a"/>' +
      /* wall */
      '<rect x="0" y="130" width="400" height="96" fill="#d8d2c4"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#c4bdac" stroke-width="1"/>'; return b; })() +
      tag("K-SOLO", 18, 200, 54, GOLD, -5) + tag("C.I.-FLY", 214, 214, 24, CORAL, -4) + tag("S TO THE OLO", 22, 222, 15, SKY, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ks-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="' + SKY + '"/><circle cx="11" cy="251" r="4" fill="#111"/><circle cx="37" cy="251" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Lowell Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E Suffolk Av", 346, 108, 12, "#fff") +
      '<circle class="ks-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("ksc", "#0b0d1e", "#3a2e4c"));
  }

  window.SCENES = { islip: islip, rock75: rock75, library: library, speedway: speedway, corner: corner };
})();
