/* lute scenes (Regions tab: The Carolinas; West Charlotte, NC). CSS classes prefixed lu- (the page's own anim-train is kept on the bus).
   1 CATS route 7 on Beatties Ford Rd at Oaklawn Ave, West Charlotte: the bus pulling up to the stop, black stop sign with the route 7 badge.
   2 Johnson C. Smith University's Biddle Hall on Beatties Ford Rd: the red-brick Victorian hall with its tall clock tower, the clock ticking, clouds drifting.
   3 The morning shift (he worked retail before Dreamville; "Morning Shift", "Took off my work badge"): a plain big-box store at sunrise, carts rolling, a work badge swinging.
   4 On the road at night ("Face-time me, before you know it I'm home"): a tour bus on I-85 under the green guide sign, one window glowing with a phone call, road lines rushing.
   5 Beatties Ford Rd and LaSalle St: green signs, LUTE tagged on the brick, the uptown Charlotte skyline behind with the Duke Energy Center's lit crown. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes luflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lu-flk{animation:luflick 2.2s infinite}.lu-flk2{animation-delay:.7s}' +
    '@keyframes luspin{to{transform:rotate(360deg)}}.lu-hand{transform-box:view-box;animation:luspin 6s linear infinite}.lu-hand2{animation-duration:72s}' +
    '@keyframes lucloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.lu-cloud{animation:lucloud 22s linear infinite}.lu-cloud2{animation-delay:-11s}' +
    '@keyframes lucart{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.lu-cart{animation:lucart 9s linear infinite}' +
    '@keyframes luswing{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.lu-badge{transform-box:fill-box;transform-origin:50% 0%;animation:luswing 1.8s ease-in-out infinite}' +
    '@keyframes luroad{from{transform:translateX(0)}to{transform:translateX(-60px)}}.lu-road{animation:luroad .5s linear infinite}' +
    '@keyframes luglow{0%,100%{opacity:.5}50%{opacity:1}}.lu-glow{animation:luglow 1.6s ease-in-out infinite}' +
    '@keyframes lucrown{0%{fill:#ffcc33}33%{fill:#2f80ed}66%{fill:#9b51e0}100%{fill:#ffcc33}}.lu-crown{animation:lucrown 6s linear infinite}' +
    '@keyframes luspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lu-sp{animation:luspray 1.4s ease-out infinite}.lu-sp2{animation-delay:.45s}' +
    '@keyframes lutw{0%,100%{opacity:.3}50%{opacity:1}}.lu-tw{animation:lutw 2s ease-in-out infinite}.lu-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '" stroke="#fff" stroke-width="1"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffcc33", BLUE = "#2f80ed", RED = "#e2543b";
  const cloud = (cls, x, y) => '<g class="lu-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="30" ry="10" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';

  /* 1. CATS route 7, Beatties Ford Rd */
  function lustation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 42) + '" y="114" width="34" height="26" rx="2" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="320" height="86" rx="10" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + win +
      '<rect x="40" y="150" width="320" height="8" fill="#1f4e79"/><rect x="40" y="158" width="320" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="114" width="16" height="50" fill="#26323c"/><rect x="330" y="104" width="26" height="36" rx="3" fill="#26323c"/>' +
      '<rect x="306" y="104" width="22" height="10" rx="2" fill="#111"/><text x="317" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">7</text>' +
      '<circle cx="100" cy="186" r="13" fill="#222"/><circle cx="100" cy="186" r="5" fill="#888"/><circle cx="310" cy="186" r="13" fill="#222"/><circle cx="310" cy="186" r="5" fill="#888"/><circle cx="354" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lus1)"/>' +
      '<g fill="#3c4a3a"><circle cx="30" cy="80" r="30"/><circle cx="90" cy="70" r="26"/><circle cx="300" cy="76" r="28"/><circle cx="370" cy="70" r="30"/></g>' +
      '<g fill="#8a5a44"><rect x="140" y="56" width="90" height="44"/></g><g fill="#f6dfa3" opacity=".8"><rect x="150" y="66" width="16" height="12"/><rect x="176" y="66" width="16" height="12"/><rect x="202" y="66" width="16" height="12"/></g>' +
      '<rect x="0" y="96" width="400" height="6" fill="#c7c1b5"/>' +
      bus +
      '<rect x="0" y="198" width="400" height="62" fill="#55565b"/><path d="M0 228h400" stroke="#e9d65a" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="0" y="190" width="400" height="8" fill="#c7c1b5"/>' +
      '<rect x="82" y="206" width="236" height="34" rx="3" fill="#111"/><text x="96" y="229" ' + font + ' font-size="15" fill="#fff">Beatties Ford / Oaklawn</text>' + badge(284, 223, "7", "#1f4e79"),
      sky("lus1", "#6fa8dc", "#f3e2c0"));
  }

  /* 2. Biddle Hall, JCSU */
  function lubiddle() {
    const brick = "#a3412c", trim = "#e9dfcc";
    const wins = (x0, n) => Array.from({ length: n }, (_, i) => '<path d="M' + (x0 + i * 22) + ' 150v-16q7 -8 14 0v16z" fill="#2c3440"/><path d="M' + (x0 + i * 22) + ' 186v-16q7 -8 14 0v16z" fill="#2c3440"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lus2)"/>' + cloud("", 60, 40) + cloud("lu-cloud2", 260, 60) +
      '<rect x="40" y="118" width="320" height="86" fill="' + brick + '"/><path d="M30 120L80 96h240l50 24z" fill="#5b3a30"/>' + wins(56, 5) + wins(240, 5) +
      '<path d="M40 160h320M40 196h320" stroke="' + trim + '" stroke-width="2"/>' +
      '<rect x="168" y="44" width="64" height="160" fill="' + brick + '"/><path d="M160 46L200 -2 240 46z" fill="#4a3028"/><rect x="164" y="44" width="72" height="6" fill="' + trim + '"/>' +
      '<circle cx="200" cy="74" r="18" fill="#f8f4ea" stroke="' + trim + '" stroke-width="3"/>' +
      '<path d="M200 74V60" stroke="#222" stroke-width="2.4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 200 74" to="360 200 74" dur="6s" repeatCount="indefinite"/></path>' +
      '<path d="M200 74h10" stroke="#222" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 200 74" to="360 200 74" dur="72s" repeatCount="indefinite"/></path>' +
      '<path d="M186 120q14 -16 28 0v30h-28z" fill="#2c3440"/><path d="M184 204v-34q16 -20 32 0v34z" fill="#3b2a22"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#5f8a3a"/><path d="M180 260l10 -56h20l10 56z" fill="#cfc6b4"/>' +
      '<text x="330" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BEATTIES FORD RD</text>',
      sky("lus2", "#5aa0e0", "#d8ecfa"));
  }

  /* 3. The morning shift */
  function lushift() {
    const cart = (x) => '<path d="M' + x + ' 206h26l-4 14h-18z" fill="none" stroke="#c9ced3" stroke-width="2"/><path d="M' + (x - 4) + ' 200l4 6" stroke="#c9ced3" stroke-width="2"/><circle cx="' + (x + 6) + '" cy="224" r="2.5" fill="#333"/><circle cx="' + (x + 20) + '" cy="224" r="2.5" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lus3)"/>' +
      '<circle cx="330" cy="104" r="30" fill="#ffd27a"/>' +
      '<rect x="20" y="70" width="300" height="104" fill="#8d99a6"/><rect x="20" y="70" width="300" height="12" fill="#5e6b78"/>' +
      '<rect x="120" y="60" width="100" height="24" fill="#6f7c8a"/><rect x="132" y="66" width="76" height="12" rx="2" fill="#e8edf2" opacity=".35"/>' +
      '<rect x="140" y="120" width="60" height="54" fill="#2a3540"/><rect x="144" y="124" width="25" height="50" fill="#9fc6e6" opacity=".45"/><rect x="171" y="124" width="25" height="50" fill="#9fc6e6" opacity=".45"/>' +
      '<g class="lu-flk"><rect x="40" y="100" width="70" height="4" fill="#fff3c4"/></g><g class="lu-flk lu-flk2"><rect x="230" y="100" width="70" height="4" fill="#fff3c4"/></g>' +
      '<rect x="0" y="174" width="400" height="86" fill="#4a4b50"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 186l-10 60" stroke="#e8e8e8" stroke-width="2"/>').join("") +
      '<g class="lu-cart">' + cart(0) + cart(30) + cart(60) + '</g>' +
      '<g class="lu-badge"><path d="M356 20l-12 40M356 20l12 40" stroke="' + BLUE + '" stroke-width="2.5"/><rect x="340" y="58" width="32" height="42" rx="3" fill="#f4f6f8" stroke="#333" stroke-width="1.5"/><rect x="346" y="64" width="20" height="16" fill="#c9d3dd"/><rect x="346" y="84" width="20" height="3" fill="#333"/><rect x="346" y="90" width="14" height="3" fill="#333"/></g>' +
      '<text x="80" y="40" text-anchor="middle" ' + font + ' font-size="13" fill="#3a2410">6:00 AM</text>',
      sky("lus3", "#f6a35c", "#fde7c2"));
  }

  /* 4. Tour bus on I-85 */
  function lubus() {
    const dashes = Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 60) + '" y="226" width="30" height="4" fill="#e9d65a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lus4)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle class="lu-tw' + (i % 2 ? " lu-tw2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 80) + '" r="1.4" fill="#fff"/>').join("") +
      '<circle cx="60" cy="40" r="14" fill="#f4f1e0"/><circle cx="66" cy="36" r="12" fill="#141b33"/>' +
      '<rect x="240" y="24" width="6" height="110" fill="#666"/><rect x="330" y="24" width="6" height="110" fill="#666"/>' +
      '<rect x="222" y="30" width="134" height="56" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M240 40h20l4 6 -4 6h-20z" fill="#1f4e79" stroke="#fff" stroke-width="1.5"/><path d="M240 40h20v-2h-20z" fill="#c8102e"/><text x="250" y="51" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">85</text>' +
      '<text x="296" y="51" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">NORTH</text><text x="289" y="74" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Charlotte</text>' +
      '<path d="M0 150q100 -16 200 -6t200 -4v20H0z" fill="#1c2a1e"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2b2d33"/><g class="lu-road">' + dashes + '</g>' +
      '<g><rect x="50" y="128" width="250" height="74" rx="8" fill="#1d1f24" stroke="#555" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 38) + '" y="140" width="30" height="22" rx="2" fill="#2e3a4a"/>').join("") +
      '<g class="lu-glow"><rect x="140" y="140" width="30" height="22" rx="2" fill="#7fb6ff"/><rect x="149" y="144" width="12" height="16" rx="2" fill="#e8f2ff"/></g>' +
      '<rect x="50" y="176" width="250" height="4" fill="' + GOLD + '"/><rect x="280" y="140" width="18" height="30" rx="3" fill="#2e3a4a"/>' +
      '<circle cx="96" cy="204" r="12" fill="#111"/><circle cx="256" cy="204" r="12" fill="#111"/><circle cx="96" cy="204" r="4" fill="#777"/><circle cx="256" cy="204" r="4" fill="#777"/>' +
      '<path d="M300 182l60 -8v20l-60 -6z" fill="#fff6c2" opacity=".35"/></g>',
      sky("lus4", "#0b0f24", "#24305a"));
  }

  /* 5. Beatties Ford Rd and LaSalle St */
  function lucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lus5)"/>' +
      '<g fill="#232a44"><rect x="20" y="70" width="34" height="60"/><rect x="60" y="50" width="30" height="80"/><rect x="230" y="60" width="36" height="70"/><rect x="272" y="40" width="30" height="90"/><rect x="310" y="76" width="40" height="54"/></g>' +
      '<path d="M120 130V40l18 -10 18 10v90z" fill="#2c3556"/><path d="M128 40l10 -14 10 14" fill="none" stroke="#2c3556" stroke-width="2"/>' +
      '<rect x="170" y="22" width="42" height="108" fill="#2a3352"/><path d="M170 22l6 -10h30l6 10z" fill="#2a3352"/>' +
      '<path class="lu-crown" d="M172 22h38l-4 -8h-30z" fill="' + GOLD + '"/><rect class="lu-crown" x="172" y="24" width="38" height="4" fill="' + GOLD + '"/>' +
      Array.from({ length: 30 }, (_, i) => '<rect x="' + [26, 66, 236, 278, 316, 178, 196, 128][i % 8] + '" y="' + (50 + (i * 11) % 70) + '" width="4" height="3" fill="#ffe7a0" opacity=".7"/>').join("") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("LUTE", 26, 192, 62, GOLD, -6) + tag("STILL SLUMMIN", 120, 216, 18, "#8cc4ff", -4) + tag("WEST SIDE", 20, 216, 16, "#ff8a73", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(232, 98, 158, "Beatties Ford Rd") + sign(262, 124, 112, "LaSalle St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="lu-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lu-sp"><circle cx="172" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lu-sp lu-sp2"><circle cx="178" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lus5", "#1b2040", "#e98a5e"));
  }

  window.SCENES = { lustation: lustation, lubiddle: lubiddle, lushift: lushift, lubus: lubus, lucorner: lucorner };
})();
