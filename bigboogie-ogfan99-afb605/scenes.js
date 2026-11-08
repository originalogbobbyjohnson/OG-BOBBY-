/* bigboogie scenes (Regions tab: Memphis + Tennessee; Frayser). CSS classes prefixed bbg- (the page's own anim-train is kept).
   1 MATA Route 40 Stage-Lauderdale bus pulling up on Thomas St at Whitney Ave in Frayser.
   2 I-20 in Louisiana: the green exit sign for Tallulah, where he was born before the family moved to Memphis.
   3 N Watkins St bridge over the Wolf River into Frayser ("get back on the e-way, hop off Watkins").
   4 Elma Roane Fieldhouse at the University of Memphis, where he rocked Student Madness.
   5 Whitney Ave and Thomas St: green signs, BIG BOOGIE tagged, the Pyramid seen from the north behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbgglow{0%,100%{opacity:.35}50%{opacity:1}}.bbg-gl{animation:bbgglow 2.4s ease-in-out infinite}.bbg-gl2{animation-delay:-1.2s}' +
    '@keyframes bbgcar{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.bbg-car{animation:bbgcar 6s linear infinite;animation-delay:-2s}' +
    '@keyframes bbgcarl{from{transform:translateX(440px)}to{transform:translateX(-220px)}}.bbg-carl{animation:bbgcarl 8s linear infinite}' +
    '@keyframes bbgbird{0%{transform:translate(0,0)}100%{transform:translate(-460px,-24px)}}.bbg-bird{animation:bbgbird 10s linear infinite}.bbg-bird2{animation-delay:-5s}' +
    '@keyframes bbgflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.bbg-flow{animation:bbgflow 3s linear infinite}' +
    '@keyframes bbgbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.bbg-beam{transform-box:fill-box;transform-origin:50% 0;animation:bbgbeam 3s ease-in-out infinite}.bbg-beam2{animation-delay:-1.5s}' +
    '@keyframes bbgjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bbg-jump{animation:bbgjump .7s ease-in-out infinite}.bbg-jump2{animation-delay:-.35s}' +
    '@keyframes bbgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bbg-sp{animation:bbgspray 1.4s ease-out infinite}.bbg-sp2{animation-delay:.45s}' +
    '@keyframes bbgtw{0%,100%{opacity:.3}50%{opacity:1}}.bbg-tw{animation:bbgtw 1.8s ease-in-out infinite}.bbg-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="bbg-tw' + (i % 2 ? ' bbg-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bird = (x, y, cls) => '<path class="' + cls + '" d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#1d1d22" stroke-width="1.6" fill="none"/>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="' + (20 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + (14 * s) + '" fill="' + (c || '#2f6b3a') + '"/>';
  const PURP = "#9b6bff", GREEN = "#7fe08a", GOLD = "#ffcf4a", MATA = "#0a4f9e", LIME = "#7cc242";

  /* 1. Route 40 Stage-Lauderdale on Thomas St at Whitney Ave */
  function bbgstop() {
    const bus = '<g class="anim-train"><rect x="30" y="110" width="300" height="84" rx="10" fill="#f4f4f2" stroke="#b9bcc2" stroke-width="2"/>' +
      '<rect x="30" y="170" width="300" height="10" fill="' + MATA + '"/><path d="M30 180h300v6H30z" fill="' + LIME + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (46 + i * 40) + '" y="122" width="32" height="34" rx="3" fill="#1c2a3a"/>').join("") +
      '<rect x="292" y="122" width="30" height="60" rx="3" fill="#24384f"/><path d="M307 122v60" stroke="#b9bcc2" stroke-width="1.5"/>' +
      '<rect x="44" y="112" width="130" height="9" rx="2" fill="#111"/><text x="109" y="119.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">40 STAGE-LAUDERDALE</text>' +
      '<circle cx="80" cy="196" r="12" fill="#1a1a1a"/><circle cx="80" cy="196" r="5" fill="#8a8a8a"/><circle cx="272" cy="196" r="12" fill="#1a1a1a"/><circle cx="272" cy="196" r="5" fill="#8a8a8a"/>' +
      '<circle cx="326" cy="182" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbgs1)"/>' + stars(10) +
      tree(20, 92, 1.4, '#244a2c') + tree(70, 98, 1.1, '#2c5a34') + tree(130, 90, 1.5, '#244a2c') + tree(200, 96, 1.2, '#2c5a34') + tree(260, 88, 1.5, '#244a2c') + tree(330, 94, 1.3, '#2c5a34') + tree(385, 90, 1.4, '#244a2c') +
      '<rect x="0" y="118" width="400" height="82" fill="#2f3034"/><path d="M0 160h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="0" y="200" width="400" height="60" fill="#8a8781"/><rect x="0" y="200" width="400" height="5" fill="#bdb8ae"/>' +
      '<rect x="356" y="130" width="5" height="98" fill="#5a5d63"/><rect x="340" y="130" width="38" height="44" rx="3" fill="' + MATA + '" stroke="#fff" stroke-width="1.5"/><text x="359" y="144" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MATA</text><text x="359" y="154" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text>' + badge(342, 165, "40", LIME) +
      '<rect x="54" y="6" width="292" height="24" rx="3" fill="#111"/><text x="68" y="23" ' + font + ' font-size="13" fill="#fff">Thomas St &amp; Whitney Ave</text>' + badge(296, 18, "40", MATA) +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2724">ROUTE 40 STAGE-LAUDERDALE  ·  FRAYSER</text>',
      sky("bbgs1", "#0d1424", "#3e4a64"));
  }

  /* 2. I-20 in Louisiana: the Tallulah exit, cotton fields */
  function bbgtallulah() {
    const rows = Array.from({ length: 8 }, (_, r) => Array.from({ length: 22 }, (_, c) => '<circle cx="' + (c * 19 + (r % 2 ? 9 : 0)) + '" cy="' + (156 + r * 6) + '" r="' + (1.6 + r * .2) + '" fill="#fbfaf4"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbgs2)"/><circle cx="70" cy="56" r="20" fill="#ffe6a8" opacity=".9"/>' + bird(240, 40, 'bbg-bird') + bird(300, 54, 'bbg-bird bbg-bird2') +
      '<rect x="0" y="150" width="400" height="50" fill="#5f7a3a"/>' + rows +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3b40"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/><path d="M0 204h400M0 256h400" stroke="#f2f2f2" stroke-width="2"/>' +
      '<g class="bbg-car"><path d="M10 226l12 -14h50l18 14h30v14H6v-14z" fill="#3a2a6a"/><path d="M26 214h20v10H20zM50 214h20l11 10H50z" fill="#9ab"/><circle cx="34" cy="242" r="8" fill="#111"/><circle cx="100" cy="242" r="8" fill="#111"/></g>' +
      '<rect x="146" y="120" width="5" height="82" fill="#777"/><rect x="250" y="120" width="5" height="82" fill="#777"/>' +
      '<rect x="120" y="40" width="160" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<rect x="234" y="26" width="46" height="18" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="257" y="39" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 171</text>' +
      '<text x="200" y="74" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">TALLULAH</text><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">US 65  ·  LAKE PROVIDENCE</text>' +
      '<path d="M190 106h20l-10 14z" fill="#fff"/>' +
      '<rect x="20" y="104" width="64" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="52" y="117" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">WELCOME TO</text><text x="52" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">LOUISIANA</text>',
      sky("bbgs2", "#7fb6e6", "#f3e3c0"));
  }

  /* 3. N Watkins St bridge over the Wolf River into Frayser */
  function bbgwatkins() {
    const piers = [60, 140, 220, 300].map(x => '<rect x="' + (x - 6) + '" y="118" width="12" height="62" fill="#a8a59c"/>').join("");
    const water = '<g class="bbg-flow">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (196 + (i % 3) * 14) + 'q10 -4 20 0t20 0" stroke="#8a7a52" stroke-width="2" fill="none"/>').join("") + '</g>';
    const cyp = (x, s) => '<path d="M' + x + ' 180l-' + (5 * s) + ' -' + (12 * s) + 'h' + (10 * s) + 'z" fill="#4a3a2a"/><path d="M' + x + ' ' + (180 - 70 * s) + 'l-' + (14 * s) + ' ' + (60 * s) + 'h' + (28 * s) + 'z" fill="#3a5a2e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbgs3)"/>' + bird(330, 30, 'bbg-bird') +
      cyp(20, 1) + cyp(370, 1.1) + cyp(345, .8) + cyp(46, .7) +
      '<rect x="0" y="180" width="400" height="80" fill="#6a5a38"/>' + water + piers +
      '<rect x="0" y="100" width="400" height="20" fill="#c9c5ba"/><rect x="0" y="94" width="400" height="6" fill="#e3dfd4"/>' +
      Array.from({ length: 41 }, (_, i) => '<rect x="' + (i * 10) + '" y="84" width="3" height="12" fill="#e3dfd4"/>').join("") + '<rect x="0" y="82" width="400" height="4" fill="#e3dfd4"/>' +
      '<g class="bbg-carl"><path d="M0 80l10 -12h44l14 12h20v12H0z" fill="#c23a3a"/><path d="M14 70h16v8H10zM34 70h16l9 8H34z" fill="#2a3a4a"/><circle cx="18" cy="92" r="6" fill="#111"/><circle cx="70" cy="92" r="6" fill="#111"/></g>' +
      '<rect x="292" y="40" width="5" height="44" fill="#666"/><rect x="262" y="28" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="310" y="44" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">WOLF RIVER</text>' +
      sign(40, 40, 96, "N Watkins St") + '<rect x="86" y="62" width="4" height="22" fill="#666"/>' +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a">FRAYSER  →</text>',
      sky("bbgs3", "#9cc8e8", "#e8efe0"));
  }

  /* 4. Elma Roane Fieldhouse, University of Memphis: Student Madness */
  function bbgfield() {
    const crowd = Array.from({ length: 26 }, (_, i) => '<g class="bbg-jump' + (i % 2 ? ' bbg-jump2' : '') + '"><circle cx="' + (8 + i * 15.4) + '" cy="' + (214 + (i % 3) * 4) + '" r="5" fill="' + ["#4a3428", "#7a5a40", "#2a1e18"][i % 3] + '"/><rect x="' + (2 + i * 15.4) + '" y="' + (220 + (i % 3) * 4) + '" width="12" height="30" rx="3" fill="' + (i % 4 ? '#1d3f8a' : '#9aa4b0') + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbgs4)"/>' + stars(12) +
      '<polygon class="bbg-beam" points="90,0 70,200 120,200" fill="' + PURP + '" opacity=".22"/><polygon class="bbg-beam bbg-beam2" points="310,0 280,200 330,200" fill="' + GREEN + '" opacity=".2"/>' +
      '<path d="M40 200v-96q160 -60 320 0v96z" fill="#9a4a32"/><path d="M40 104q160 -60 320 0" stroke="#c9b48e" stroke-width="6" fill="none"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M40 ' + (120 + r * 14) + 'h320" stroke="#87402a" stroke-width="1"/>').join("") +
      '<rect x="160" y="128" width="80" height="72" fill="#c9b48e"/><rect x="170" y="150" width="24" height="50" fill="#2a2a34"/><rect x="206" y="150" width="24" height="50" fill="#2a2a34"/>' +
      [60, 100, 280, 320].map((x, i) => '<rect x="' + x + '" y="122" width="22" height="34" fill="#ffd98a" class="bbg-gl' + (i % 2 ? ' bbg-gl2' : '') + '"/>').join("") +
      '<rect x="110" y="104" width="180" height="20" fill="#1d3f8a"/><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="#e8ecf2">ELMA ROANE FIELDHOUSE</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a30"/>' + crowd +
      '<rect x="128" y="10" width="144" height="24" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="27" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">STUDENT MADNESS</text>',
      sky("bbgs4", "#0a0c22", "#2c2a5a"));
  }

  /* 5. Whitney Ave and Thomas St in Frayser: the corner, the Pyramid seen from the north */
  function bbgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbgs5)"/>' + stars(18) +
      '<path d="M250 102l70 -78l70 78z" fill="#8f9aa8"/><path d="M320 24l70 78h-70z" fill="#6f7a88"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (250 + i * 11.7) + ' ' + (102 - i * 13) + 'h' + (140 - i * 23.4) + '" stroke="#b9c4d2" stroke-width=".8"/>').join("") +
      '<rect x="317" y="16" width="6" height="8" fill="' + GOLD + '" class="bbg-gl"/>' +
      '<rect x="0" y="96" width="400" height="10" fill="#1a2332"/>' +
      '<rect x="0" y="104" width="400" height="104" fill="#3f3a4a"/>' +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 16 }, (_, c) => '<rect x="' + (c * 26 + (r % 2 ? 13 : 0) - 6) + '" y="' + (106 + r * 11) + '" width="24" height="9" fill="#4a4456"/>').join("")).join("") +
      tag("BIG BOOGIE", 150, 162, 30, PURP, -5) + tag("BIG DUDE", 172, 196, 18, GREEN, 3) + tag("GANGLAND", 300, 130, 15, GOLD, -8) +
      '<circle class="bbg-sp" cx="360" cy="176" r="3" fill="' + PURP + '"/><circle class="bbg-sp bbg-sp2" cx="368" cy="170" r="2.2" fill="' + PURP + '"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#6f6c66"/><rect x="0" y="208" width="400" height="5" fill="#9c988f"/>' +
      '<rect x="64" y="122" width="5" height="120" fill="#4a4d52"/>' + sign(18, 112, 96, "Whitney Ave") + sign(30, 136, 90, "Thomas St"),
      sky("bbgs5", "#0a0a1c", "#2c2442"));
  }

  window.SCENES = { bbgstop, bbgtallulah, bbgwatkins, bbgfield, bbgcorner };
})();
