/* moneybaggyo scenes (Regions tab: Memphis + Tennessee; Walker Homes / West Junction, South Memphis). CSS classes and ids prefixed mb- (the page's own anim-train is kept).
   1 MATA Route 39 South Third bus pulling up at S Third St & Mitchell Rd.
   2 Mitchell High School on Mitchell Rd: his school, black and gold Tigers, where he held his "Bagg Supply" back-to-school drive (backpacks, balloons).
   3 T.O. Fuller State Park, down the same Mitchell Rd: the brown state park sign, tall trees, leaves falling.
   4 Big River Crossing: the old Harahan bridge over the Mississippi at South Memphis, its lights running colors at night.
   5 W Mitchell Rd and Horn Lake Rd in Walker Homes: green signs, BIG BAGG tagged on the wall, Mitchell High's stadium lights behind.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn as a path with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mbrise{0%{transform:translateY(0)}100%{transform:translateY(-120px)}}.mb-bal{animation:mbrise 5s linear infinite}.mb-b2{animation-delay:-1.7s}.mb-b3{animation-delay:-3.4s}' +
    '@keyframes mbleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,200px) rotate(320deg)}}.mb-leaf{transform-box:fill-box;transform-origin:center;animation:mbleaf 5s linear infinite}.mb-l2{animation-delay:-1.2s}.mb-l3{animation-delay:-2.5s}.mb-l4{animation-delay:-3.7s}' +
    '@keyframes mbhue{0%{fill:#ff4fa3}25%{fill:#5ad1ff}50%{fill:#ffd23f}75%{fill:#2fbf71}100%{fill:#ff4fa3}}.mb-lt{animation:mbhue 4s linear infinite}.mb-lt2{animation-delay:-1s}.mb-lt3{animation-delay:-2s}.mb-lt4{animation-delay:-3s}' +
    '@keyframes mbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mb-flag{transform-box:fill-box;transform-origin:left center;animation:mbflag 1.6s ease-in-out infinite}' +
    '@keyframes mbtw{0%,100%{opacity:.3}50%{opacity:1}}.mb-tw{animation:mbtw 1.8s ease-in-out infinite}.mb-tw2{animation-delay:-.9s}' +
    '@keyframes mbwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.mb-wave{animation:mbwave 3s linear infinite}' +
    '@keyframes mbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mb-sp{animation:mbspray 1.4s ease-out infinite}.mb-sp2{animation-delay:.45s}' +
    '@keyframes mbcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.mb-car{animation:mbcar 7s linear infinite;animation-delay:-2.5s}' +
    '@keyframes mbfly{0%,100%{opacity:0}50%{opacity:1}}.mb-fly{animation:mbfly 2.2s ease-in-out infinite}.mb-f2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="mb-tw' + (i % 2 ? ' mb-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 80) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const brick = (x, y, w, h, c, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
    Array.from({ length: Math.floor(h / 7) }, (_, i) => '<path d="M' + x + ' ' + (y + 7 + i * 7) + 'h' + w + '" stroke="' + line + '" stroke-width=".8"/>').join("");
  /* a "9" with a straight stem: round head + straight right-hand stem (h = digit height, top-left at x,y) */
  const nine = (x, y, h, c, sw) => { const r = h * .26; return '<circle cx="' + (x + r + sw / 2) + '" cy="' + (y + r + sw / 2) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + sw + '"/><path d="M' + (x + 2 * r + sw / 2) + ' ' + (y + r + sw / 2) + 'V' + (y + h) + '" stroke="' + c + '" stroke-width="' + sw + '"/>'; };
  /* "39" badge: "3" as text, the 9 drawn */
  const badge39 = (x, y, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="30" height="18" rx="4" fill="' + color + '"/><text x="' + (x + 11) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">3</text>' + nine(x + 16.5, y - 4.5, 9, "#fff", 2);
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const MATA = "#0057a8", RED = "#c8102e", GOLD = "#ffd23f", GREEN = "#2fbf71", PINK = "#ff4fa3", BLACK = "#141414";

  /* 1. MATA Route 39 South Third at S Third St & Mitchell Rd */
  function mbstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="290" y="118" width="62" height="9" rx="2" fill="#111"/><text x="321" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">SOUTH THIRD</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, h, c) => '<rect x="' + x + '" y="' + (116 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x + 6) + '" y="' + (122 - h) + '" width="' + (w - 12) + '" height="8" fill="#2a1d14" opacity=".55"/>';
    const tree = (x, r) => '<rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs1)"/>' +
      tree(22, 18) + shop(44, 70, 36, "#c4875a") + shop(120, 56, 28, "#e0cfae") + tree(196, 20) + shop(222, 80, 40, "#9c5c3e") + shop(308, 60, 30, "#d6b07a") + tree(384, 16) +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="30" y="204" width="320" height="44" rx="3" fill="#111"/><text x="42" y="222" ' + font + ' font-size="13" fill="#fff">S Third St &amp; Mitchell Rd</text><text x="42" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Walker Homes · South Memphis</text>' +
      badge(254, 234, "MATA", MATA) + badge39(310, 234, RED),
      sky("mbs1", "#2f5f9e", "#ffb07a"));
  }

  /* 2. Mitchell High School: black and gold Tigers, back-to-school drive */
  function mbmitchell() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="30" height="22" fill="#a9d4ee" stroke="#e9e4d8" stroke-width="3"/>';
    const bal = (x, y, c, cls) => '<g class="mb-bal ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="11" fill="' + c + '"/><path d="M' + x + ' ' + (y + 11) + 'q-4 10 2 20" stroke="#ddd" stroke-width="1" fill="none"/></g>';
    const pack = (x, c) => '<rect x="' + x + '" y="196" width="24" height="28" rx="6" fill="' + c + '"/><rect x="' + (x + 4) + '" y="208" width="16" height="10" rx="3" fill="#000" opacity=".25"/><path d="M' + (x + 6) + ' 196q6 -8 12 0" stroke="' + c + '" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs2)"/>' +
      brick(24, 76, 352, 104, "#c9b48a", "#b09a70") +
      '<rect x="24" y="68" width="352" height="10" fill="' + BLACK + '"/>' +
      win(40, 92) + win(80, 92) + win(120, 92) + win(250, 92) + win(290, 92) + win(330, 92) + win(40, 132) + win(80, 132) + win(290, 132) + win(330, 132) +
      '<rect x="156" y="88" width="88" height="92" fill="#e9e4d8"/><rect x="138" y="80" width="124" height="16" fill="' + BLACK + '"/><text x="200" y="92" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">MITCHELL HIGH SCHOOL</text>' +
      '<rect x="176" y="136" width="48" height="44" fill="#2a2a2a"/><path d="M200 136v44" stroke="' + GOLD + '" stroke-width="2"/>' +
      /* tiger stripes panel */
      '<rect x="168" y="104" width="64" height="24" rx="3" fill="' + GOLD + '"/><path d="M176 104l6 12l-4 12M192 104l5 10l-3 14M208 104l4 12l-4 12M222 104l5 11l-3 13" stroke="' + BLACK + '" stroke-width="3" fill="none"/>' +
      /* banner across the front */
      '<rect x="0" y="180" width="400" height="80" fill="#6b9a4a"/><rect x="0" y="232" width="400" height="28" fill="#8c8f93"/>' +
      '<rect x="80" y="150" width="240" height="22" rx="3" fill="' + BLACK + '" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="166" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">BAGG SUPPLY · BACK TO SCHOOL</text>' +
      '<rect x="40" y="220" width="320" height="10" fill="#7a5a3a"/><rect x="48" y="230" width="6" height="14" fill="#5a3f28"/><rect x="346" y="230" width="6" height="14" fill="#5a3f28"/>' +
      pack(64, GREEN) + pack(100, PINK) + pack(136, "#3a7bd5") + pack(240, GOLD) + pack(276, RED) + pack(312, GREEN) +
      bal(30, 150, GOLD, "") + bal(372, 150, BLACK, "mb-b2") + bal(352, 160, GOLD, "mb-b3") + bal(50, 162, GREEN, "mb-b3") +
      '<rect x="6" y="40" width="3" height="140" fill="#cfd4da"/><g class="mb-flag"><rect x="9" y="42" width="54" height="30" fill="' + BLACK + '"/><rect x="9" y="64" width="54" height="8" fill="' + GOLD + '"/><text x="36" y="59" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TIGERS</text></g>',
      sky("mbs2", "#4a8fe0", "#d8ecff"));
  }

  /* 3. T.O. Fuller State Park: the brown park sign and tall woods */
  function mbfuller() {
    const tree = (x, h, c) => '<rect x="' + (x - 4) + '" y="' + (190 - h) + '" width="8" height="' + h + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (190 - h) + '" r="' + (h * .32) + '" fill="' + c + '"/><circle cx="' + (x - h * .18) + '" cy="' + (200 - h) + '" r="' + (h * .22) + '" fill="' + c + '" opacity=".85"/><circle cx="' + (x + h * .2) + '" cy="' + (198 - h) + '" r="' + (h * .24) + '" fill="' + c + '" opacity=".9"/>';
    const leaf = (x, y, c, cls) => '<path class="mb-leaf ' + cls + '" d="M' + x + ' ' + y + 'q5 -6 10 0q-5 6 -10 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs3)"/>' +
      '<path d="M0 150q100 -24 200 -10t200 -6v60H0z" fill="#3f6b33"/>' +
      tree(30, 120, "#2f5a2a") + tree(90, 140, "#3a6a2e") + tree(330, 130, "#2f5a2a") + tree(380, 110, "#4a7a32") +
      tree(150, 96, "#c98a2e") + tree(268, 104, "#b85a2a") +
      '<path d="M120 260q60 -50 80 -70t40 -10q-20 20 -30 80z" fill="#a8946e"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4e7a38" opacity=".55"/>' +
      /* brown state park sign on two posts */
      '<rect x="128" y="168" width="8" height="52" fill="#4a3324"/><rect x="264" y="168" width="8" height="52" fill="#4a3324"/>' +
      '<rect x="112" y="124" width="176" height="56" rx="4" fill="#5b3a1f" stroke="#e8dcc0" stroke-width="2.5"/>' +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="14" fill="#f2e6c8">T.O. FULLER</text><text x="200" y="164" text-anchor="middle" ' + font + ' font-size="11" fill="#f2e6c8">STATE PARK</text>' +
      '<text x="200" y="175" text-anchor="middle" ' + font + ' font-size="7" fill="#e0c890">W MITCHELL RD · SOUTH MEMPHIS</text>' +
      leaf(60, 30, "#e0902a", "") + leaf(160, 10, "#c8502a", "mb-l2") + leaf(240, 20, "#f0b030", "mb-l3") + leaf(340, 5, "#d06a2a", "mb-l4") + leaf(110, 0, "#f0b030", "mb-l3") +
      '<circle class="mb-fly" cx="70" cy="200" r="2" fill="#fff6a0"/><circle class="mb-fly mb-f2" cx="320" cy="206" r="2" fill="#fff6a0"/>',
      sky("mbs3", "#7fb6e6", "#f3e2b8"));
  }

  /* 4. Big River Crossing on the old Harahan bridge, lights running colors */
  function mbbridge() {
    const truss = Array.from({ length: 5 }, (_, i) => { const x = 20 + i * 76; return '<path d="M' + x + ' 150L' + (x + 38) + ' 100L' + (x + 76) + ' 150M' + x + ' 150h76M' + (x + 38) + ' 100v50" stroke="#2a2f3a" stroke-width="3" fill="none"/>'; }).join("") +
      '<path d="M20 100h380" stroke="#2a2f3a" stroke-width="3"/>';
    const lights = Array.from({ length: 20 }, (_, i) => '<circle class="mb-lt mb-lt' + (1 + i % 4) + '" cx="' + (24 + i * 19) + '" cy="' + (i % 2 ? 100 : 150) + '" r="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbs4)"/>' + stars(26) +
      '<circle cx="64" cy="44" r="13" fill="#f2efd8" opacity=".9"/>' +
      /* far Memphis shore low on the right, Arkansas flat on the left */
      '<rect x="0" y="146" width="400" height="10" fill="#141a28"/>' +
      '<rect x="40" y="156" width="10" height="56" fill="#2a2f3a"/><rect x="190" y="156" width="10" height="56" fill="#2a2f3a"/><rect x="340" y="156" width="10" height="56" fill="#2a2f3a"/>' +
      truss + lights +
      /* the river */
      '<rect x="0" y="200" width="400" height="60" fill="#1c3550"/>' +
      '<g class="mb-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (214 + (i % 3) * 12) + 'q10 -4 20 0" stroke="#5a8ab8" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>' +
      '<g opacity=".35">' + Array.from({ length: 10 }, (_, i) => '<rect class="mb-lt mb-lt' + (1 + i % 4) + '" x="' + (28 + i * 38) + '" y="' + (206 + (i % 2) * 8) + '" width="10" height="3"/>').join("") + '</g>' +
      '<rect x="20" y="232" width="250" height="20" rx="2" fill="#111"/><text x="30" y="246" ' + font + ' font-size="10" fill="#fff">BIG RIVER CROSSING · MISSISSIPPI RIVER</text>',
      sky("mbs4", "#0c1028", "#3a2a5a"));
  }

  /* 5. W Mitchell Rd and Horn Lake Rd, Walker Homes */
  function mbcorner() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="84" fill="#3a3a3a"/><rect x="' + (x - 14) + '" y="30" width="28" height="12" rx="2" fill="#2a2a2a"/>' + Array.from({ length: 4 }, (_, i) => '<circle class="mb-tw' + (i % 2 ? ' mb-tw2' : '') + '" cx="' + (x - 9 + i * 6) + '" cy="36" r="2.4" fill="#fff8d8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mbs5)"/>' + stars(16) +
      /* Mitchell High's stadium lights glowing behind the block */
      '<ellipse cx="140" cy="60" rx="70" ry="30" fill="#fff6c8" opacity=".12"/>' + light(96) + light(184) +
      '<path d="M0 124q120 -16 220 -8t180 -4v12H0z" fill="#1d2a1c"/>' +
      '<rect x="0" y="122" width="400" height="102" fill="#3e3a2e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#2f2b22" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#2f2b22" stroke-width="1"/>').join("")).join("") +
      tag("BIG BAGG", 16, 196, 46, GOLD, -6) + tag("BREAD GANG", 30, 150, 18, GREEN, -4) + tag("PERIOD", 190, 216, 18, "#f2f2f2", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="mb-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="' + GREEN + '"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#1d7a48"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="88" width="6" height="136" fill="#2f2f2f"/>' + sign(270, 90, 124, "W Mitchell Rd") + sign(280, 120, 104, "Horn Lake Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mb-tw" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mb-sp"><circle cx="236" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mb-sp mb-sp2"><circle cx="242" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mbs5", "#101826", "#4a6a3a"));
  }

  window.SCENES = { mbstop: mbstop, mbmitchell: mbmitchell, mbfuller: mbfuller, mbbridge: mbbridge, mbcorner: mbcorner };
})();
