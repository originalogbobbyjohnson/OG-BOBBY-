/* youngthug scenes (Regions tab: Atlanta; Zone 3 - Cleveland Ave / Jonesboro Rd, southside). CSS classes and ids prefixed yt-.
   1 MARTA Route 78 Cleveland Ave pulling up to its stop at Cleveland Ave @ Jonesboro Rd SE, where his story starts.
   2 Jonesboro South Apartments (Atlanta Housing, 1970-2009), where he grew up four doors from Peewee Longway: two-story brick rows, a ball bouncing in the yard.
   3 Sylvan Hills, the southwest Atlanta neighborhood he's from: craftsman houses on the hill, big oaks, a spider swinging down on its thread.
   4 The Cleveland Avenue strip at night: storefronts (no names), slime-green neon, cars cruising.
   5 Cleveland Ave and Jonesboro Rd SE: green signs, YOUNG THUG tagged with YSL and SLATT, downtown far off with Truist Plaza's lit crown.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ytbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.yt-bus{animation:ytbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes ytball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.yt-ball{animation:ytball .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes ytsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.yt-sway{transform-box:fill-box;transform-origin:50% 0%;animation:ytsway 2.6s ease-in-out infinite}' +
    '@keyframes ytglow{0%,100%{opacity:.5}50%{opacity:1}}.yt-glow{animation:ytglow 1.6s ease-in-out infinite}.yt-g2{animation-delay:-.8s}' +
    '@keyframes ytcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.yt-car{animation:ytcar 5.5s linear infinite}.yt-car2{animation-duration:7.5s;animation-delay:-3s}' +
    '@keyframes ytline{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.96)}}.yt-line{transform-box:fill-box;transform-origin:50% 0%;animation:ytline 2s ease-in-out infinite}' +
    '@keyframes yttw{0%,100%{opacity:.2}50%{opacity:1}}.yt-tw{animation:yttw 1.8s ease-in-out infinite}.yt-tw2{animation-delay:-.6s}.yt-tw3{animation-delay:-1.2s}' +
    '@keyframes ytdrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.yt-drip{transform-box:fill-box;transform-origin:50% 0%;animation:ytdrip 2.4s ease-in infinite}.yt-d2{animation-delay:-.9s}.yt-d3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const SLIME = "#7cff3a", PINK = "#ff4fb3", BUS = "#1f4e79", ORANGE = "#f7941d";
  /* a spider (Thug's nickname) hanging on a thread */
  const spider = (x, y, s) => '<g class="yt-sway"><path d="M' + x + ' 0V' + y + '" stroke="#e8e8e8" stroke-width="1"/><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M-10 -6l-8 -6M-10 0h-10M-10 6l-8 6M10 -6l8 -6M10 0h10M10 6l8 6" stroke="#111" stroke-width="2.4" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="9" ry="11" fill="#111"/><circle cx="0" cy="-12" r="5" fill="#111"/><path d="M-3 -2h6l-3 5z" fill="' + SLIME + '"/></g></g>';
  const house = (x, y, s, wall, roof) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<path d="M-6 -40l46 -26l46 26z" fill="' + roof + '"/><rect x="0" y="-40" width="80" height="40" fill="' + wall + '"/>' +
    '<rect x="8" y="-32" width="16" height="14" fill="#2a3442"/><rect x="56" y="-32" width="16" height="14" fill="#2a3442"/><rect x="34" y="-26" width="12" height="26" fill="#5a3a2a"/>' +
    '<rect x="-4" y="-14" width="88" height="4" fill="#f2efe6"/><rect x="2" y="-12" width="5" height="12" fill="#f2efe6"/><rect x="73" y="-12" width="5" height="12" fill="#f2efe6"/></g>';

  /* 1. MARTA Route 78 at Cleveland Ave @ Jonesboro Rd SE */
  function ytbus() {
    const bus = '<g class="yt-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">78 CLEVELAND AVE</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yt1)"/>' +
      '<circle cx="64" cy="42" r="18" fill="#ffe9a8" opacity=".85"/>' +
      '<g fill="#3c6b3a"><ellipse cx="40" cy="104" rx="44" ry="26"/><ellipse cx="180" cy="98" rx="52" ry="28"/><ellipse cx="370" cy="104" rx="40" ry="24"/></g>' +
      /* low strip of shops behind */
      '<rect x="0" y="108" width="400" height="34" fill="#b9a68a"/><rect x="0" y="104" width="400" height="6" fill="#8a7a62"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 50) + '" y="116" width="30" height="20" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="318" y="66" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">78</text>' +
      '<rect x="270" y="106" width="126" height="14" rx="2" fill="#111"/><text x="333" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">CLEVELAND AVE @ JONESBORO RD</text>',
      sky("yt1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Jonesboro South Apartments: two-story brick rows, a ball bouncing */
  function ytjsouth() {
    const row = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="0" width="' + (n * 40) + '" height="70" fill="#a8553a"/><path d="M-4 0h' + (n * 40 + 8) + 'l-6 -10h-' + (n * 40 - 4) + 'z" fill="#5a4a42"/>' +
      Array.from({ length: n }, (_, i) => '<rect x="' + (8 + i * 40) + '" y="10" width="14" height="14" fill="#2a3442" stroke="#efe8d8" stroke-width="1.5"/><rect x="' + (26 + i * 40) + '" y="40" width="10" height="30" fill="#efe8d8"/><rect x="' + (8 + i * 40) + '" y="42" width="14" height="14" fill="#2a3442" stroke="#efe8d8" stroke-width="1.5"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (6 + i * 12) + 'h' + (n * 40) + '" stroke="#934a30" stroke-width="1"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yt2)"/>' +
      '<g fill="#3e6e3c"><ellipse cx="200" cy="80" rx="60" ry="22"/><ellipse cx="340" cy="78" rx="50" ry="20"/></g>' +
      row(10, 84, 4) + row(220, 84, 4) +
      /* clothesline between poles */
      '<path d="M178 96v84M214 96v84" stroke="#6b7178" stroke-width="3"/><path d="M178 102q18 10 36 0" stroke="#ddd" stroke-width="1" fill="none"/>' +
      '<g class="yt-line"><rect x="184" y="104" width="10" height="14" fill="' + SLIME + '"/><rect x="198" y="104" width="10" height="12" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="154" width="400" height="106" fill="#7aa356"/><path d="M0 170h400" stroke="#c9c3b6" stroke-width="10"/>' +
      '<g class="yt-ball"><circle cx="120" cy="214" r="9" fill="#f07a1a" stroke="#4a2a0a" stroke-width="1.5"/><path d="M111 214h18M120 205v18" stroke="#4a2a0a" stroke-width="1"/></g>' +
      '<ellipse cx="120" cy="226" rx="10" ry="3" fill="#000" opacity=".2"/>' +
      '<rect x="230" y="196" width="150" height="40" rx="3" fill="#1d2a3a" stroke="' + SLIME + '" stroke-width="2"/>' +
      '<text x="305" y="212" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">JONESBORO SOUTH</text><text x="305" y="226" text-anchor="middle" ' + font + ' font-size="8" fill="' + SLIME + '">ZONE 3 · SOUTHSIDE ATL</text>',
      sky("yt2", "#8fc6ec", "#f2ead6"));
  }

  /* 3. Sylvan Hills: craftsman houses on the hill, oaks, a spider swinging */
  function ytsylvan() {
    return svg(
      '<rect width="400" height="260" fill="url(#yt3)"/>' +
      '<path d="M0 170q100 -60 200 -40t200 -10v140h-400z" fill="#6f9a52"/>' +
      house(30, 156, .8, "#d9c7a0", "#6b4a3a") + house(150, 138, .8, "#a8c3cf", "#4a4a52") + house(270, 142, .8, "#e6d3b8", "#7a3b2e") +
      '<g fill="#2f5a2c"><ellipse cx="120" cy="96" rx="34" ry="30"/><ellipse cx="250" cy="90" rx="30" ry="28"/><ellipse cx="370" cy="100" rx="30" ry="26"/></g>' +
      '<rect x="116" y="110" width="7" height="40" fill="#4a3426"/><rect x="246" y="104" width="7" height="34" fill="#4a3426"/>' +
      spider(330, 92, .9) +
      '<rect x="0" y="206" width="400" height="54" fill="#55555c"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="24" y="186" width="5" height="40" fill="#6e737b"/>' + sign(4, 168, 90, "SYLVAN RD") +
      '<g class="yt-car yt-car2"><rect x="0" y="216" width="56" height="14" rx="4" fill="' + PINK + '"/><rect x="10" y="210" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="230" r="5" fill="#111"/><circle cx="44" cy="230" r="5" fill="#111"/></g>',
      sky("yt3", "#a6d4f2", "#fbe7c8"));
  }

  /* 4. The Cleveland Ave strip at night: storefronts, slime neon, cars */
  function ytstrip() {
    const shop = (x, w, col, word) => '<rect x="' + x + '" y="96" width="' + w + '" height="96" fill="#2a2630"/><rect x="' + (x + 6) + '" y="104" width="' + (w - 12) + '" height="18" rx="2" fill="#111"/>' +
      '<text x="' + (x + w / 2) + '" y="117" text-anchor="middle" ' + font + ' font-size="10" fill="' + col + '" class="yt-glow">' + word + '</text>' +
      '<rect x="' + (x + 8) + '" y="130" width="' + (w - 16) + '" height="44" fill="' + col + '" opacity=".22"/><rect x="' + (x + w / 2 - 8) + '" y="150" width="16" height="42" fill="#15121a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yt4)"/>' +
      '<g class="yt-tw"><circle cx="50" cy="30" r="1.6" fill="#fff"/></g><g class="yt-tw yt-tw2"><circle cx="210" cy="20" r="1.4" fill="#fff"/></g><g class="yt-tw yt-tw3"><circle cx="350" cy="36" r="1.8" fill="#fff"/></g>' +
      '<circle cx="330" cy="50" r="14" fill="#f4f0d8" opacity=".85"/>' +
      shop(4, 92, SLIME, "WINGS") + shop(100, 96, PINK, "BEAUTY") + shop(200, 92, "#4fb3ff", "TIRES") + shop(296, 100, SLIME, "BARBER") +
      '<rect x="0" y="192" width="400" height="12" fill="#6b6870"/><rect x="0" y="204" width="400" height="56" fill="#26242a"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="292" y="86" width="4" height="118" fill="#6e737b"/>' + sign(242, 64, 104, "CLEVELAND AVE") +
      '<g class="yt-car"><rect x="0" y="216" width="58" height="15" rx="4" fill="' + SLIME + '"/><rect x="10" y="209" width="32" height="10" rx="3" fill="#2a3442"/><circle cx="12" cy="231" r="5" fill="#111"/><circle cx="46" cy="231" r="5" fill="#111"/><rect x="56" y="220" width="4" height="4" fill="#fff6c2"/></g>' +
      '<g class="yt-car yt-car2"><rect x="0" y="238" width="58" height="15" rx="4" fill="' + PINK + '"/><rect x="10" y="231" width="32" height="10" rx="3" fill="#2a3442"/><circle cx="12" cy="253" r="5" fill="#111"/><circle cx="46" cy="253" r="5" fill="#111"/></g>',
      sky("yt4", "#0c0a1e", "#3a1f4a"));
  }

  /* 5. Cleveland Ave and Jonesboro Rd SE: tag wall, downtown far off with Truist Plaza's lit crown */
  function ytcorner() {
    const drip = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="4" height="16" rx="2" fill="' + SLIME + '" class="yt-drip ' + (cls || "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yt5)"/>' +
      /* downtown far off: Truist Plaza's stepped top with its lit lattice crown */
      '<g opacity=".92"><rect x="214" y="96" width="18" height="56" fill="#2e3440"/><rect x="300" y="104" width="22" height="48" fill="#353b47"/>' +
      '<rect x="244" y="62" width="40" height="90" fill="#2a2f3a"/><rect x="250" y="50" width="28" height="12" fill="#2a2f3a"/><rect x="256" y="40" width="16" height="10" fill="#2a2f3a"/>' +
      '<path d="M256 40l8 -14l8 14z" fill="none" stroke="#ffe7a0" stroke-width="1.5" class="yt-glow"/><path d="M250 50h28M244 62h40" stroke="#ffe7a0" stroke-width="1.2" class="yt-glow yt-g2"/>' +
      '<rect x="330" y="120" width="16" height="32" fill="#2e3440"/></g>' +
      '<rect x="0" y="150" width="400" height="6" fill="#5c6a4a"/>' +
      /* the wall */
      '<rect x="0" y="118" width="252" height="112" fill="#8a8f96"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (126 + i * 10) + 'h252" stroke="#7a7f86" stroke-width="1"/>').join("") +
      tag("YOUNG THUG", 18, 180, 32, SLIME, -5) + drip(40, 186) + drip(96, 182, "yt-d2") + drip(150, 178, "yt-d3") +
      tag("YSL", 24, 218, 20, PINK, -3) + tag("SLATT", 120, 220, 18, "#fff", 3) + tag("THUGGER", 24, 146, 15, PINK, -4) +
      spider(226, 132, .6) +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="yt-car"><rect x="0" y="232" width="56" height="14" rx="4" fill="' + PINK + '"/><rect x="10" y="226" width="30" height="9" rx="3" fill="#2a3442"/><circle cx="12" cy="246" r="5" fill="#111"/><circle cx="44" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="318" y="70" width="5" height="160" fill="#6e737b"/>' + sign(268, 72, 110, "CLEVELAND AVE") + sign(272, 98, 104, "JONESBORO RD"),
      sky("yt5", "#2a1f4a", "#f08a6a"));
  }

  window.SCENES = { ytbus, ytjsouth, ytsylvan, ytstrip, ytcorner };
})();
