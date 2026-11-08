/* lilpoppa scenes (Regions tab: South Florida region; Jacksonville - raised between his mother's home on the Eastside and his grandmother's on the Westside; "stuck on Evergreen", the Evergreen Wildchild).
   CSS classes prefixed lp- (the page's own anim-train slides the bus in).
   1 JTA's First Coast Flyer Green Line bus pulling into the Gateway Hub on the Northside (the H Spot ride: Lem Turner, Edgewood and Golfair).
   2 The green Hart Bridge over the St. Johns at dusk, the road down into the Eastside, cars crossing.
   3 Riding the MLK Jr Parkway at night ("finna get off on MLK ... get off at East"): green highway signs, headlights streaming.
   4 The Ritz Theatre in LaVilla at night, the old "Harlem of the South" stage: marquee lights chasing (no names on it).
   5 Evergreen Ave and E 21st St on the Eastside: green signs, LIL POPPA tagged on the wall, downtown's tallest tower with its lit crown behind.
   400 x 260 SVGs. No logos, no faces; the only 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lpcar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.lp-car{animation:lpcar 6s linear infinite}.lp-car2{animation-duration:8s;animation-delay:-4s}' +
    '@keyframes lpcarl{from{transform:translateX(470px)}to{transform:translateX(-90px)}}.lp-carl{animation:lpcarl 7s linear infinite}.lp-carl2{animation-delay:-3.5s}' +
    '@keyframes lpglow{0%,100%{opacity:.35}50%{opacity:1}}.lp-glow{animation:lpglow 1.2s ease-in-out infinite}.lp-glow2{animation-delay:-.6s}' +
    '@keyframes lpwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.lp-wave{animation:lpwave 4s ease-in-out infinite}' +
    '@keyframes lpsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:lpsway 3s ease-in-out infinite}.lp-sway2{animation-delay:-1.5s}' +
    '@keyframes lpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lp-sp{animation:lpspray 1.4s ease-out infinite}.lp-sp2{animation-delay:.45s}' +
    '@keyframes lpstreak{from{transform:translateX(0)}to{transform:translateX(-400px)}}.lp-streak{animation:lpstreak 2.4s linear infinite}' +
    '@keyframes lpbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.lp-bird{animation:lpbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  /* a hand-drawn 9: round head + straight stem */
  const nine = (x, y, s, fill) => {
    const r = s * 0.2, cx = x + s * 0.28, cy = y - s * 0.5;
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + fill + '" stroke-width="' + (s * 0.13) + '"/>' +
      '<path d="M' + (cx + r) + ' ' + cy + 'V' + y + '" stroke="' + fill + '" stroke-width="' + (s * 0.12) + '"/>';
  };
  const palm = (x, base, h, s, cls) => {
    const top = base - h;
    return '<g><path d="M' + (x - 3 * s) + ' ' + base + 'Q' + (x + 3 * s) + ' ' + (base - h / 2) + ' ' + (x - 1 * s) + ' ' + top + 'h' + (4 * s) + 'Q' + (x + 6 * s) + ' ' + (base - h / 2) + ' ' + (x + 3 * s) + ' ' + base + 'z" fill="#7a6a50"/>' +
      '<g class="lp-sway ' + (cls || "") + '" fill="#2f6b3a">' + [-80, -50, -20, 10, 40, 70, 200, 160].map(a => '<path transform="rotate(' + a + ' ' + (x + s) + ' ' + top + ')" d="M' + (x + s) + ' ' + top + 'l' + (30 * s) + ' ' + (-7 * s) + 'l' + (-4 * s) + ' ' + (11 * s) + 'z"/>').join("") + '</g></g>';
  };
  const PURPLE = "#9b5de5", TEAL = "#00a3a3", GOLD = "#f2c14e", HART = "#3f8f4f";
  const car = (cls, y, c, flip) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><rect x="' + (flip ? -1 : 44) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>';

  /* 1. JTA First Coast Flyer Green Line at the Gateway Hub */
  function lpstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="32" y="116" width="322" height="78" rx="10" fill="#f4f6f7" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="32" y="160" width="322" height="12" fill="#2f9e48"/><rect x="32" y="174" width="322" height="5" fill="#0b4f8a"/>' +
      '<rect x="318" y="124" width="32" height="42" rx="4" fill="#1b2630"/><rect x="262" y="118" width="88" height="11" rx="2" fill="#111"/><text x="306" y="127" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">GREEN LINE</text>' +
      '<circle cx="88" cy="196" r="13" fill="#222"/><circle cx="88" cy="196" r="5.5" fill="#999"/><circle cx="300" cy="196" r="13" fill="#222"/><circle cx="300" cy="196" r="5.5" fill="#999"/><circle cx="350" cy="184" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lps1)"/><circle cx="330" cy="38" r="18" fill="#fff2b8" opacity=".9"/>' +
      '<g class="lp-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      palm(26, 120, 90, 1, "") + palm(374, 120, 80, .9, "lp-sway2") +
      /* hub canopy */
      '<path d="M90 82h220l-14 16H104z" fill="#2f9e48"/><rect x="104" y="98" width="5" height="22" fill="#5a6168"/><rect x="291" y="98" width="5" height="22" fill="#5a6168"/><rect x="198" y="98" width="5" height="22" fill="#5a6168"/>' +
      '<rect x="128" y="58" width="144" height="22" rx="2" fill="#111"/><text x="200" y="73" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">GATEWAY HUB</text>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5d5f63"/><rect x="0" y="194" width="400" height="6" fill="#b9b4a8"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#f2d64b" stroke-width="3"/>' +
      bus + label(60, 280, "JTA FIRST COAST FLYER · GREEN LINE"),
      sky("lps1", "#86c9ec", "#e2f2f8"));
  }

  /* 2. The Hart Bridge (green cantilever truss) at dusk */
  function lphart() {
    const truss = (x0, x1, top, base) => {
      let s = '<path d="M' + x0 + ' ' + base + 'Q' + ((x0 + x1) / 2) + ' ' + top + ' ' + x1 + ' ' + base + '" stroke="' + HART + '" stroke-width="5" fill="none"/>';
      const n = 10;
      for (let i = 0; i <= n; i++) {
        const t = i / n, x = x0 + (x1 - x0) * t, y = base - (base - top) * 2 * t * (1 - t);
        s += '<path d="M' + x + ' ' + base + 'L' + x + ' ' + y + '" stroke="' + HART + '" stroke-width="2.5"/>';
        if (i < n) { const x2 = x0 + (x1 - x0) * (i + 1) / n; s += '<path d="M' + x + ' ' + base + 'L' + x2 + ' ' + (base - (base - top) * 2 * ((i + 1) / n) * (1 - (i + 1) / n)) + '" stroke="' + HART + '" stroke-width="2"/>'; }
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#lph1)"/><circle cx="80" cy="120" r="22" fill="#ffcf7a" opacity=".9"/>' +
      /* downtown far shore */
      '<g fill="#2a2440" opacity=".8"><rect x="250" y="96" width="20" height="54"/><rect x="274" y="80" width="18" height="70"/><rect x="296" y="104" width="26" height="46"/><rect x="326" y="88" width="16" height="62"/></g>' +
      /* river */
      '<rect x="0" y="150" width="400" height="110" fill="#2b4a6a"/>' +
      '<g class="lp-wave" stroke="#9cc3e0" stroke-width="2" opacity=".5"><path d="M10 200h40M90 214h50M200 196h40M280 222h60M40 240h50"/></g>' +
      /* piers */
      '<rect x="96" y="132" width="12" height="40" fill="#8a8f96"/><rect x="292" y="132" width="12" height="40" fill="#8a8f96"/>' +
      /* deck */
      '<rect x="0" y="128" width="400" height="7" fill="#4a5258"/>' +
      truss(20, 200, 40, 128) + truss(200, 380, 40, 128) +
      '<path d="M0 128h400" stroke="' + HART + '" stroke-width="3"/>' +
      car("lp-car", 113, "#d64545") + car("lp-carl", 113, "#f2f2f2", true) + car("lp-car lp-car2", 113, GOLD) +
      label(70, 260, "THE HART BRIDGE · INTO THE EASTSIDE"),
      sky("lph1", "#3b2a5a", "#f08a5d"));
  }

  /* 3. MLK Jr Parkway at night */
  function lpmlk() {
    const gsign = (x, y, w, l1, l2) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + l1 + '</text>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 36) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + l2 + '</text>';
    const lights = Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 60) + '" y="208" width="26" height="3" rx="1.5" fill="#fff3c4"/>').join("");
    const reds = Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 60 + 30) + '" y="222" width="22" height="3" rx="1.5" fill="#ff4d4d"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lpm1)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (12 + i * 20) + '" cy="' + (14 + (i * 37) % 60) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      /* overhead gantry */
      '<rect x="20" y="70" width="6" height="130" fill="#7a7f86"/><rect x="374" y="70" width="6" height="130" fill="#7a7f86"/><rect x="20" y="70" width="360" height="8" fill="#7a7f86"/>' +
      gsign(40, 80, 150, "MLK JR PKWY", "EAST") + gsign(210, 80, 150, "EXIT", "EASTSIDE") +
      /* road */
      '<rect x="0" y="196" width="400" height="64" fill="#2c2c30"/><path d="M0 216h400" stroke="#d9d9d9" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="lp-streak">' + lights + '<g transform="translate(400 0)">' + lights + '</g></g>' +
      '<g class="lp-streak" style="animation-direction:reverse;animation-duration:3s">' + reds + '<g transform="translate(400 0)">' + reds + '</g></g>' +
      '<g class="lp-glow"><circle cx="60" cy="150" r="3" fill="#ffd27a"/><circle cx="340" cy="150" r="3" fill="#ffd27a"/></g>' +
      label(80, 240, "MLK JR PARKWAY · NIGHT RIDE EAST"),
      sky("lpm1", "#0c0f24", "#2b2148"));
  }

  /* 4. The Ritz Theatre in LaVilla at night */
  function lpritz() {
    const bulbs = (x, y, w) => Array.from({ length: Math.floor(w / 8) }, (_, i) => '<circle class="lp-glow' + (i % 2 ? " lp-glow2" : "") + '" cx="' + (x + 4 + i * 8) + '" cy="' + y + '" r="2" fill="#ffe08a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lpr1)"/>' +
      /* building: cream art-deco front with a tall center fin */
      '<rect x="60" y="70" width="280" height="140" fill="#e9dcc2"/><rect x="60" y="64" width="280" height="8" fill="#c9b892"/>' +
      '<rect x="176" y="22" width="48" height="60" fill="#d8c8a6"/><path d="M176 22l24 -14l24 14z" fill="#b8a27a"/>' +
      '<text x="200" y="62" text-anchor="middle" ' + font + ' font-size="15" fill="' + PURPLE + '" class="lp-glow">RITZ</text>' +
      /* marquee */
      '<rect x="100" y="110" width="200" height="34" rx="3" fill="#1b1230"/>' + bulbs(100, 110, 200) + bulbs(100, 144, 200) +
      '<text x="200" y="132" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">LIVE TONIGHT</text>' +
      /* doors + windows */
      '<rect x="150" y="160" width="100" height="50" fill="#2a1d14"/><path d="M200 160v50" stroke="#c9b892" stroke-width="2"/>' +
      [78, 112, 268, 302].map(x => '<rect x="' + x + '" y="84" width="20" height="18" fill="#3a2f4a"/><rect x="' + x + '" y="166" width="20" height="30" fill="#3a2f4a"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a3e"/><rect x="0" y="210" width="400" height="5" fill="#8d8a84"/>' +
      palm(30, 210, 110, .9, "") + palm(372, 210, 100, .85, "lp-sway2") +
      label(60, 280, "THE RITZ · LAVILLA · HARLEM OF THE SOUTH"),
      sky("lpr1", "#0f0b22", "#3a2350"));
  }

  /* 5. Evergreen Ave and E 21st St, Eastside */
  function lpcorner() {
    const sign = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + inner;
    return svg(
      '<rect width="400" height="260" fill="url(#lpc1)"/>' +
      /* downtown, the tallest tower with its crown lit */
      '<g fill="#2e2a46"><rect x="150" y="96" width="22" height="58"/><rect x="178" y="80" width="18" height="74"/><rect x="232" y="104" width="24" height="50"/><rect x="262" y="90" width="18" height="64"/></g>' +
      '<rect x="200" y="34" width="26" height="120" fill="#3a5a86"/><path d="M200 34l13 -14l13 14z" fill="#3a5a86"/><path d="M204 34l9 -9l9 9z" fill="#7fd3ff" class="lp-glow"/>' +
      '<g fill="#a9d8ff" opacity=".35">' + Array.from({ length: 10 }, (_, r) => '<rect x="203" y="' + (44 + r * 10) + '" width="20" height="3"/>').join("") + '</g>' +
      palm(40, 154, 100, 1, "") +
      /* painted block wall */
      '<rect x="0" y="154" width="400" height="78" fill="#cfc6d8"/>' +
      '<g stroke="#b1a8bd" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (154 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("LIL POPPA", 22, 212, 44, PURPLE, -5) +
      /* 904 with a straight-stem 9 */
      '<g transform="rotate(-8 280 222)">' + nine(262, 224, 26, "#000") + nine(262, 224, 22, TEAL) + '<text x="276" y="224" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="24" fill="' + TEAL + '" stroke="#000" stroke-width="2.5" paint-order="stroke">04</text></g>' +
      tag("EVERGREEN", 250, 186, 16, GOLD, 4) +
      '<g fill="' + PURPLE + '" opacity=".75"><circle class="lp-sp" cx="236" cy="196" r="3"/><circle class="lp-sp lp-sp2" cx="244" cy="190" r="2.5"/><circle class="lp-sp" cx="240" cy="202" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="356" y="92" width="5" height="140" fill="#7a7f86"/>' +
      sign(276, 82, 118, '<text x="335" y="98" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">EVERGREEN AVE</text>') +
      sign(294, 108, 100, '<text x="344" y="124" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">E 21ST ST</text>') +
      label(12, 230, "EVERGREEN AVE &amp; E 21ST ST · EASTSIDE"),
      sky("lpc1", "#1a1638", "#6a3f7a"));
  }

  window.SCENES = { lpstop, lphart, lpmlk, lpritz, lpcorner };
})();
