/* jerrybutler scenes (Regions tab: CHICAGO; GENRES: R&B. Jerry "The Iceman" Butler grew up on Chicago's Near North Side from age three; solo hits on Vee-Jay and Mercury, later a Cook County commissioner). CSS classes prefixed jbt- (the page's own anim-train is kept).
   1 Clark/Division on the CTA Red Line, down in the State St/Clark St subway: tiled walls, a silver Red Line train sliding in, black station sign with the red bullet.
   2 Universal Recording, 46 E Walton St on the Near North Side, where his Vee-Jay sides were cut: control room, console lights blinking, tape reels turning, the vocal mic behind the glass.
   3 The Jerry Butler Songwriters Workshop in Chicago: an upright piano, sheet music and notes floating up.
   4 The Cook County Building at 118 N Clark St, where he sat on the County Board for decades: grey granite, tall columns, flags moving.
   5 N Clark St and W Walton St: green signs, ICEMAN tagged on the wall, the Newberry Library's granite arches behind Washington Square. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jbtglow{0%,100%{opacity:.4}50%{opacity:1}}.jbt-glow{animation:jbtglow 2.4s ease-in-out infinite}.jbt-g2{animation-delay:-1.2s}' +
    '@keyframes jbtblink{0%,100%{opacity:1}50%{opacity:.2}}.jbt-blink{animation:jbtblink .9s steps(1) infinite}.jbt-k2{animation-delay:-.45s}' +
    '@keyframes jbtspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jbt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jbtspin 3s linear infinite}' +
    '@keyframes jbtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-18px,-64px);opacity:0}}.jbt-note{animation:jbtnote 3.6s ease-out infinite}.jbt-n2{animation-delay:-1.2s}.jbt-n3{animation-delay:-2.4s}' +
    '@keyframes jbtflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-7deg)}}.jbt-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jbtflag 1.8s ease-in-out infinite}.jbt-f2{animation-delay:-.9s}' +
    '@keyframes jbtcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jbt-car{animation:jbtcar 7s linear infinite}' +
    '@keyframes jbtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jbt-sp{animation:jbtspray 1.4s ease-out infinite}.jbt-sp2{animation-delay:.45s}' +
    '@keyframes jbtleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jbt-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:jbtleaf 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="jbt-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const tree = (x, y, s, c) => '<g class="jbt-leaf"><rect x="' + (x - 3 * s) + '" y="' + (y - 4 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (18 * s) + '" fill="' + c + '"/><circle cx="' + (x - 12 * s) + '" cy="' + (y - 4 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x + 12 * s) + '" cy="' + (y - 4 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/></g>';
  const ICE = "#9fd8ff", GOLD = "#e8b84a", RED = "#c60c30";

  /* 1. Clark/Division, Red Line subway */
  function jbtstation() {
    const car = x => '<rect x="' + x + '" y="104" width="160" height="66" rx="5" fill="#d6dbe2" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="156" width="160" height="5" fill="' + RED + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 29) + '" y="114" width="22" height="24" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 70) + '" y="110" width="20" height="44" fill="#b7bec8" stroke="#6b737e"/>';
    const train = '<g class="anim-train">' + car(30) + car(194) + '<rect x="316" y="110" width="36" height="12" rx="2" fill="#111"/><text x="334" y="119" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ff5a6e">HOWARD</text><circle class="jbt-glow" cx="348" cy="150" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1c1e22"/>' +
      /* tiled tunnel wall */
      '<rect x="0" y="20" width="400" height="160" fill="#c9c3b2"/>' +
      Array.from({ length: 16 }, (_, r) => '<path d="M0 ' + (20 + r * 10) + 'H400" stroke="#aaa395" stroke-width="1"/>').join("") +
      Array.from({ length: 40 }, (_, c) => '<path d="M' + (c * 10) + ' 20V180" stroke="#b8b2a2" stroke-width=".6"/>').join("") +
      '<rect x="0" y="80" width="400" height="8" fill="' + RED + '"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#2a2a2e"/>' + [40, 140, 240, 340].map(x => '<rect class="jbt-glow" x="' + x + '" y="14" width="40" height="5" fill="#fff6d0"/>').join("") +
      train +
      '<rect x="0" y="176" width="400" height="12" fill="#6a6a64"/><rect x="0" y="174" width="400" height="3" fill="#f2d24a"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3a3a3e"/>' +
      '<rect x="70" y="204" width="260" height="30" rx="3" fill="#111"/><text x="186" y="225" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">CLARK/DIVISION</text>' +
      '<circle cx="306" cy="219" r="11" fill="' + RED + '"/><text x="306" y="222.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">RED</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">RED LINE SUBWAY · NEAR NORTH SIDE</text>');
  }

  /* 2. Universal Recording, 46 E Walton St */
  function jbtstudio() {
    const reel = (x, y) => '<g class="jbt-spin"><circle cx="' + x + '" cy="' + y + '" r="16" fill="#8a8f96" stroke="#3a3a3a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="4" fill="#222"/><rect x="' + (x - 1.5) + '" y="' + (y - 14) + '" width="3" height="10" fill="#222"/><rect x="' + (x - 1.5) + '" y="' + (y + 4) + '" width="3" height="10" fill="#222"/><rect x="' + (x - 14) + '" y="' + (y - 1.5) + '" width="10" height="3" fill="#222"/></g>';
    const leds = Array.from({ length: 14 }, (_, i) => '<rect class="jbt-blink' + (i % 3 ? " jbt-k2" : "") + '" x="' + (112 + i * 13) + '" y="186" width="5" height="3" fill="' + (i % 4 ? "#7cf29a" : "#ff6a4a") + '"/>').join("");
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (113 + i * 13) + '" y="194" width="2" height="22" fill="#333"/><rect x="' + (110 + i * 13) + '" y="' + (198 + (i * 7) % 14) + '" width="8" height="5" fill="#ddd"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2220"/>' +
      /* wood paneled wall */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="19" height="180" fill="' + (i % 2 ? "#5a3a26" : "#62402a") + '"/>').join("") +
      /* glass to the booth */
      '<rect x="100" y="30" width="200" height="110" fill="#1e2a3a" stroke="#c9b48a" stroke-width="4"/>' +
      '<rect class="jbt-glow" x="104" y="34" width="192" height="102" fill="' + ICE + '" opacity=".12"/>' +
      '<rect x="196" y="80" width="3" height="56" fill="#aaa"/><rect x="190" y="68" width="14" height="18" rx="7" fill="#cfd4da" stroke="#555"/>' +
      '<path d="M178 136h40" stroke="#aaa" stroke-width="3"/>' +
      note(160, 90, ICE) + note(240, 84, GOLD, "jbt-n2") + note(220, 110, "#fff", "jbt-n3") +
      /* tape machine */
      '<rect x="22" y="70" width="64" height="110" rx="4" fill="#3a3a3e" stroke="#777" stroke-width="2"/>' + reel(42, 94) + reel(68, 94) +
      '<path d="M42 110L55 130L68 110" stroke="#5a3a26" stroke-width="2" fill="none"/>' +
      /* console */
      '<path d="M90 180L110 170H290L310 180V230H90z" fill="#4a4a50" stroke="#777" stroke-width="2"/>' + leds + faders +
      '<rect x="320" y="120" width="56" height="60" rx="4" fill="#2a2a2e" stroke="#777"/><circle cx="348" cy="150" r="20" fill="#111" stroke="#555" stroke-width="3"/><circle cx="348" cy="150" r="6" fill="#444"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#1a1414"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">UNIVERSAL RECORDING · 46 E WALTON ST</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">WHERE THE VEE-JAY SIDES WERE CUT</text>');
  }

  /* 3. The Jerry Butler Songwriters Workshop */
  function jbtworkshop() {
    const sheet = (x, y, r) => '<g transform="rotate(' + r + ' ' + x + ' ' + y + ')"><rect x="' + x + '" y="' + y + '" width="40" height="52" fill="#f6f1e2" stroke="#b9ad8e"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (x + 4) + ' ' + (y + 10 + i * 10) + 'h32" stroke="#888" stroke-width=".8"/><circle cx="' + (x + 10 + i * 7) + '" cy="' + (y + 9 + i * 10) + '" r="2" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbt-s3)"/>' +
      /* window with the city at night */
      '<rect x="250" y="30" width="120" height="90" fill="#16223a" stroke="#c9b48a" stroke-width="4"/><path d="M310 30V120M250 75H370" stroke="#c9b48a" stroke-width="3"/>' +
      '<g fill="#2a3a5a"><rect x="258" y="80" width="14" height="40"/><rect x="276" y="64" width="12" height="56"/><rect x="316" y="70" width="16" height="50"/><rect x="340" y="86" width="20" height="34"/></g>' +
      [0, 1, 2, 3, 4].map(i => '<rect class="jbt-glow' + (i % 2 ? " jbt-g2" : "") + '" x="' + (262 + i * 20) + '" y="' + (94 + (i % 3) * 7) + '" width="3" height="3" fill="' + GOLD + '"/>').join("") +
      /* upright piano */
      '<rect x="40" y="96" width="170" height="110" rx="4" fill="#2a1a14" stroke="#5a3a26" stroke-width="3"/>' +
      '<rect x="52" y="104" width="146" height="40" fill="#3a2418"/><rect x="40" y="150" width="170" height="18" fill="#f3f3f3" stroke="#555"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (48 + i * 12.5) + '" y="150" width="6" height="10" fill="#111"/>').join("") +
      '<rect x="48" y="206" width="10" height="24" fill="#2a1a14"/><rect x="192" y="206" width="10" height="24" fill="#2a1a14"/>' +
      sheet(92, 92, -6) + sheet(140, 94, 5) +
      /* bench and a lamp */
      '<rect x="80" y="196" width="90" height="10" rx="2" fill="#5a3a26"/><rect x="88" y="206" width="6" height="24" fill="#5a3a26"/><rect x="156" y="206" width="6" height="24" fill="#5a3a26"/>' +
      '<rect x="232" y="150" width="4" height="80" fill="#888"/><path d="M220 150h28l-6 -20h-16z" fill="' + GOLD + '"/><circle class="jbt-glow" cx="234" cy="156" r="16" fill="' + GOLD + '" opacity=".25"/>' +
      sheet(290, 168, -12) + sheet(330, 176, 8) +
      note(90, 88, ICE) + note(150, 80, GOLD, "jbt-n2") + note(196, 90, "#fff", "jbt-n3") +
      '<rect x="0" y="230" width="400" height="30" fill="#3a2a22"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">THE JERRY BUTLER SONGWRITERS WORKSHOP · CHICAGO</text>',
      sky("jbt-s3", "#4a3428", "#2a1e18"));
  }

  /* 4. The Cook County Building, 118 N Clark St */
  function jbtcounty() {
    return svg(
      '<rect width="400" height="260" fill="url(#jbt-s4)"/>' +
      '<rect x="0" y="60" width="50" height="170" fill="#7a8290"/><rect x="350" y="40" width="50" height="190" fill="#6a7280"/>' +
      /* grey granite front with tall columns */
      '<rect x="40" y="30" width="320" height="196" fill="#b8b6ae" stroke="#7e7c74" stroke-width="2"/>' +
      '<rect x="34" y="24" width="332" height="12" fill="#a3a199"/><rect x="40" y="58" width="320" height="10" fill="#a3a199"/>' +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<rect x="' + (52 + c * 34) + '" y="' + (40 + r * 0) + '" width="0" height="0"/>').join("")).join("") +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(c => '<rect x="' + (52 + c * 34) + '" y="40" width="22" height="14" fill="#2c3646"/>').join("") +
      [0, 1, 2, 3, 4, 5, 6, 7].map(c => '<rect x="' + (66 + c * 36) + '" y="72" width="16" height="122" fill="#d8d6ce" stroke="#9a988e"/><rect x="' + (62 + c * 36) + '" y="68" width="24" height="8" fill="#c8c6be"/><rect x="' + (62 + c * 36) + '" y="190" width="24" height="8" fill="#c8c6be"/>').join("") +
      [0, 1, 2, 3, 4, 5, 6].map(c => '<rect x="' + (86 + c * 36) + '" y="80" width="12" height="104" fill="#2c3646"/>').join("") +
      '<rect class="jbt-glow" x="158" y="80" width="12" height="104" fill="' + GOLD + '" opacity=".3"/>' +
      '<rect x="120" y="198" width="160" height="10" fill="#e2e0d8"/><text x="200" y="206" text-anchor="middle" ' + font + ' font-size="7" fill="#4a4840">COUNTY BUILDING</text>' +
      '<rect x="150" y="208" width="100" height="18" fill="#2a2a30"/>' +
      /* flags */
      '<rect x="146" y="2" width="2" height="26" fill="#555"/><rect class="jbt-flag" x="148" y="3" width="22" height="13" fill="#fff"/><path class="jbt-flag" d="M148 6h22M148 13h22" stroke="#7ac0e8" stroke-width="2"/>' +
      '<rect x="252" y="2" width="2" height="26" fill="#555"/><rect class="jbt-flag jbt-f2" x="254" y="3" width="22" height="13" fill="#2a4a8a"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a40"/><rect x="0" y="224" width="400" height="3" fill="#9a9aa0"/>' +
      '<rect x="64" y="234" width="272" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">118 N CLARK ST · COMMISSIONER BUTLER</text>',
      sky("jbt-s4", "#3a7ab8", "#b8daea"));
  }

  /* 5. N Clark St and W Walton St, the Newberry Library behind */
  function jbtcorner() {
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0V' + (y + h) + 'z" fill="#2c3646"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jbt-s5)"/>' +
      /* Newberry Library: pinkish grey granite, Romanesque arches */
      '<rect x="40" y="40" width="250" height="90" fill="#a99a92" stroke="#7a6c66" stroke-width="2"/><path d="M34 40L165 22L296 40z" fill="#7a6c66"/>' +
      '<rect x="140" y="20" width="50" height="110" fill="#b2a39a" stroke="#7a6c66" stroke-width="2"/><path d="M136 22L165 6L194 22z" fill="#7a6c66"/>' +
      arch(152, 70, 26, 60) + [0, 1, 2].map(i => arch(54 + i * 28, 66, 18, 40) + arch(206 + i * 28, 66, 18, 40)).join("") +
      '<rect class="jbt-glow" x="152" y="83" width="26" height="47" fill="' + GOLD + '" opacity=".25"/>' +
      tree(330, 126, 1.2, "#2f5a3a") + tree(370, 128, 1, "#2a5034") +
      /* brick wall with the tags */
      '<rect x="0" y="122" width="400" height="96" fill="#6a3426"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (130 + r * 10) + 'H400" stroke="#4a2218" stroke-width="1"/>').join("") +
      tag("ICEMAN", 26, 184, 44, ICE, -6) + tag("ONLY THE STRONG", 36, 210, 18, GOLD, -3) + tag("NEAR NORTH", 214, 170, 16, "#ff6a7a", -4) +
      '<circle class="jbt-sp" cx="186" cy="156" r="3" fill="' + ICE + '" opacity=".8"/><circle class="jbt-sp jbt-sp2" cx="192" cy="162" r="2" fill="' + ICE + '" opacity=".8"/>' +
      '<rect x="330" y="60" width="5" height="160" fill="#4a5a4a"/>' + sign(278, 64, 104, "N CLARK ST") + sign(282, 90, 100, "W WALTON ST") +
      '<rect x="0" y="218" width="400" height="42" fill="#444"/><rect x="0" y="216" width="400" height="4" fill="#888"/>' +
      '<g class="jbt-car"><rect x="0" y="228" width="72" height="18" rx="5" fill="' + RED + '"/><rect x="12" y="220" width="42" height="12" rx="4" fill="#8a0a22"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="56" cy="248" r="6" fill="#111"/></g>',
      sky("jbt-s5", "#1a2a4a", "#6a8ab8"));
  }

  window.SCENES = { jbtstation, jbtstudio, jbtworkshop, jbtcounty, jbtcorner };
})();
