/* jermainedupri scenes (Regions tab: Atlanta; College Park). CSS classes and ids prefixed jd- (the page's own anim-train is kept).
   1 MARTA Route 180 (Roosevelt Hwy) pulling up on Main St in College Park: white MARTA bus, blue + orange bands, the stop flag.
   2 Fresh Fest '84: the 12-year-old dancer on tour with Whodini, cardboard on the stage, a boombox, spotlights sweeping.
   3 The So So Def studio: the board, meters jumping, platinum plaques on the wall, the label name on the door glass.
   4 "Welcome to Atlanta": the week he ran down on the record, club marquees Tuesday to Saturday, searchlights in the sky.
   5 Main St and Harvard Ave in College Park: green signs, JERMAINE DUPRI tagged, downtown far up the tracks.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jdbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.jd-bus{animation:jdbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes jdflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.jd-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jdflag 1.6s ease-in-out infinite}' +
    '@keyframes jdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jdspin 1.1s linear infinite}' +
    '@keyframes jdsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.jd-sw{transform-box:fill-box;transform-origin:50% 100%;animation:jdsweep 3.2s ease-in-out infinite}.jd-sw2{animation-delay:-1.6s}' +
    '@keyframes jdvu{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.jd-vu{transform-box:fill-box;transform-origin:50% 100%;animation:jdvu .7s ease-in-out infinite}.jd-v2{animation-delay:-.2s}.jd-v3{animation-delay:-.45s}.jd-v4{animation-delay:-.6s}' +
    '@keyframes jdblink{0%,100%{opacity:1}50%{opacity:.35}}.jd-bl{animation:jdblink 1.3s ease-in-out infinite}.jd-bl2{animation-delay:-.65s}' +
    '@keyframes jdcar{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.jd-car{animation:jdcar 6.5s linear infinite}' +
    '@keyframes jdbox{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.jd-thump{transform-box:fill-box;transform-origin:50% 50%;animation:jdbox .45s ease-in-out infinite}' +
    '@keyframes jdtw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.jd-tw{transform-box:fill-box;transform-origin:50% 50%;animation:jdtw 1.8s ease-in-out infinite}.jd-tw2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f5c542", SKY = "#2fa8e0", CORAL = "#ff5a5f", BUS = "#1f4e79", ORANGE = "#f7941d";
  /* College Park's old two-storey Main St storefronts */
  const shops = (y) => [[0, 70, "#b5654a"], [74, 60, "#d8c29a"], [138, 80, "#a9553e"], [222, 64, "#cdb48a"], [290, 110, "#b86a4e"]].map(([x, w, c]) =>
    '<rect x="' + x + '" y="' + (y - 58) + '" width="' + w + '" height="58" fill="' + c + '"/><rect x="' + x + '" y="' + (y - 62) + '" width="' + w + '" height="6" fill="#6e3b2a"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y - 48) + '" width="' + (w - 16) + '" height="14" fill="#2a3442" opacity=".85"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y - 24) + '" width="' + (w - 16) + '" height="24" fill="#3c5566"/>').join("");
  /* a far-off downtown skyline: a stepped granite tower with a lit lantern top, plus plain boxes */
  const skyline = (y, c, lit) => '<g fill="' + c + '"><rect x="40" y="' + (y - 40) + '" width="22" height="40"/><rect x="66" y="' + (y - 58) + '" width="18" height="58"/>' +
    '<rect x="150" y="' + (y - 70) + '" width="30" height="70"/><rect x="155" y="' + (y - 84) + '" width="20" height="14"/><rect x="160" y="' + (y - 96) + '" width="10" height="12"/>' +
    '<rect x="188" y="' + (y - 46) + '" width="20" height="46"/><rect x="232" y="' + (y - 62) + '" width="24" height="62"/><rect x="236" y="' + (y - 70) + '" width="16" height="8"/>' +
    '<rect x="262" y="' + (y - 38) + '" width="26" height="38"/><rect x="320" y="' + (y - 50) + '" width="20" height="50"/></g>' +
    '<rect class="jd-bl" x="161" y="' + (y - 94) + '" width="8" height="7" fill="' + lit + '"/>';

  /* 1. MARTA Route 180 Roosevelt Hwy on Main St, College Park */
  function jdbus() {
    const bus = '<g class="jd-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="112" height="11" rx="2" fill="#111"/><text x="100" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">180 ROOSEVELT HWY</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jd1)"/>' +
      '<circle cx="330" cy="38" r="18" fill="#ffe9a8" opacity=".85"/>' +
      shops(142) +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><g class="jd-flag"><rect x="318" y="66" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">180</text></g>' +
      '<rect x="284" y="106" width="112" height="14" rx="2" fill="#111"/><text x="340" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MAIN ST · COLLEGE PARK</text>',
      sky("jd1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Fresh Fest '84: a kid dancer on tour with Whodini, cardboard, boombox, spotlights */
  function jdfresh() {
    const dancer = '<g class="jd-spin"><circle cx="200" cy="168" r="7" fill="#1a1a22"/><path d="M200 175l-20 14M200 175l22 10M200 175l-4 -30M196 147l-14 -10M196 147l16 -12" stroke="#1a1a22" stroke-width="7" stroke-linecap="round" fill="none"/>' +
      '<rect x="186" y="170" width="22" height="9" rx="3" fill="' + CORAL + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jd2)"/>' +
      '<g class="jd-sw"><path d="M90 200l-46 -200h40z" fill="#fff6c2" opacity=".18"/></g><g class="jd-sw jd-sw2"><path d="M310 200l-10 -200h44z" fill="#bfe7ff" opacity=".18"/></g>' +
      /* truss + banner */
      '<rect x="20" y="20" width="360" height="10" fill="#3a3a44"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (20 + i * 30) + ' 20l15 10l15 -10" stroke="#5a5a66" stroke-width="2" fill="none"/>').join("") +
      '<rect x="80" y="34" width="240" height="34" rx="3" fill="' + GOLD + '" stroke="#111" stroke-width="2"/><text x="200" y="58" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#111">FRESH FEST ‘84</text>' +
      /* speaker stacks */
      '<rect x="18" y="98" width="56" height="112" fill="#1d1d24" stroke="#444" stroke-width="2"/><circle cx="46" cy="130" r="18" fill="#333"/><circle cx="46" cy="130" r="7" fill="#555"/><circle cx="46" cy="182" r="18" fill="#333"/><circle cx="46" cy="182" r="7" fill="#555"/>' +
      '<rect x="326" y="98" width="56" height="112" fill="#1d1d24" stroke="#444" stroke-width="2"/><circle cx="354" cy="130" r="18" fill="#333"/><circle cx="354" cy="130" r="7" fill="#555"/><circle cx="354" cy="182" r="18" fill="#333"/><circle cx="354" cy="182" r="7" fill="#555"/>' +
      /* stage + cardboard + boombox */
      '<rect x="0" y="210" width="400" height="50" fill="#3b2a20"/><rect x="0" y="206" width="400" height="6" fill="#6b4a32"/>' +
      '<path d="M130 196l140 0l14 16h-168z" fill="#c9a26a" stroke="#8a6a3e" stroke-width="2"/>' + dancer +
      '<g class="jd-thump"><rect x="278" y="174" width="44" height="24" rx="4" fill="#bfc4ca" stroke="#555" stroke-width="2"/><circle cx="289" cy="187" r="7" fill="#333"/><circle cx="311" cy="187" r="7" fill="#333"/><rect x="294" y="178" width="12" height="5" fill="#6ad1e3"/><path d="M284 174q16 -12 32 0" stroke="#555" stroke-width="3" fill="none"/></g>' +
      '<rect x="96" y="224" width="208" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">AGE 12 · ON TOUR WITH WHODINI</text>',
      sky("jd2", "#120f24", "#3a1f3c"));
  }

  /* 3. The So So Def studio: the board, meters, plaques */
  function jdstudio() {
    const plaque = (x, c, t) => '<rect x="' + x + '" y="40" width="54" height="68" fill="#2a1e18" stroke="#7a5a1a" stroke-width="3"/><circle cx="' + (x + 27) + '" cy="66" r="18" fill="' + c + '"/><circle cx="' + (x + 27) + '" cy="66" r="5" fill="#2a1e18"/>' +
      '<rect x="' + (x + 8) + '" y="90" width="38" height="12" fill="#f2efe6"/><text x="' + (x + 27) + '" y="99" text-anchor="middle" ' + font + ' font-size="6" fill="#2a1e18">' + t + '</text>';
    const meters = [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="jd-vu jd-v' + (1 + i % 4) + '" x="' + (124 + i * 20) + '" y="150" width="10" height="26" fill="' + (i % 3 ? "#5fd07a" : GOLD) + '"/>').join("");
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (66 + i * 20) + '" y="196" width="3" height="30" fill="#222"/><rect x="' + (61 + i * 20) + '" y="' + (204 + (i * 7) % 16) + '" width="13" height="6" rx="1" fill="#e8e8e8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jd3)"/>' +
      plaque(30, "#e8e8f0", "PLATINUM") + plaque(96, GOLD, "GOLD") + plaque(250, "#e8e8f0", "PLATINUM") + plaque(316, "#e8e8f0", "PLATINUM") +
      /* door with the label name on the glass */
      '<rect x="160" y="30" width="80" height="92" fill="#3a2a22" stroke="#7a5a1a" stroke-width="3"/><rect x="170" y="40" width="60" height="44" fill="#1b2a33"/>' +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SO SO DEF</text><text x="200" y="72" text-anchor="middle" ' + font + ' font-size="6.5" fill="#cfe9f8">RECORDINGS · ATL</text>' +
      '<circle cx="228" cy="100" r="3" fill="' + GOLD + '"/>' +
      /* console */
      '<path d="M40 140h320l20 100h-360z" fill="#2b2b33"/><rect x="110" y="144" width="180" height="38" rx="3" fill="#111"/>' + meters +
      faders + '<rect x="40" y="236" width="320" height="6" fill="#141418"/>' +
      '<rect x="300" y="150" width="46" height="34" rx="3" fill="#3a3a44"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (304 + (i % 2) * 20) + '" y="' + (154 + Math.floor(i / 2) * 14) + '" width="16" height="10" rx="2" fill="' + (i === 1 ? CORAL : "#8a8a96") + '"/>').join("") +
      '<rect x="56" y="150" width="46" height="34" rx="3" fill="#3a3a44"/><circle cx="70" cy="167" r="8" fill="#111"/><circle cx="90" cy="167" r="8" fill="#111"/>',
      sky("jd3", "#241a24", "#120d14"));
  }

  /* 4. "Welcome to Atlanta": the club week, marquees + searchlights */
  function jdnights() {
    const club = (x, w, name, night, c) => '<rect x="' + x + '" y="120" width="' + w + '" height="96" fill="#1e1a28" stroke="#3a3346" stroke-width="2"/>' +
      '<rect class="jd-bl' + (x % 2 ? " jd-bl2" : "") + '" x="' + (x + 6) + '" y="126" width="' + (w - 12) + '" height="26" rx="3" fill="#111" stroke="' + c + '" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="139" text-anchor="middle" ' + font + ' font-size="9" fill="' + c + '">' + name + '</text><text x="' + (x + w / 2) + '" y="149" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">' + night + '</text>' +
      '<rect x="' + (x + w / 2 - 12) + '" y="178" width="24" height="38" fill="#3a2f4a"/><rect x="' + (x + 8) + '" y="160" width="' + (w / 2 - 22) + '" height="12" fill="#ffd98a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jd4)"/>' +
      '<g class="jd-sw"><path d="M80 120l-50 -120h26z" fill="#bfe7ff" opacity=".22"/></g><g class="jd-sw jd-sw2"><path d="M320 120l30 -120h26z" fill="#ffe6a0" opacity=".22"/></g>' +
      skyline(120, "#2a2440", "#ffd98a") +
      club(6, 92, "VELVET ROOM", "TUESDAY", CORAL) + club(102, 92, "KREAM", "THURSDAY", SKY) + club(198, 98, "KAYA", "FRIDAY", GOLD) + club(300, 94, "ONE-TWELVE", "SATURDAY", "#c58bff") +
      '<rect x="0" y="216" width="400" height="44" fill="#2e2e36"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="jd-car"><rect x="0" y="226" width="96" height="20" rx="5" fill="#e8e8ee"/><rect x="18" y="216" width="56" height="14" rx="4" fill="#cfd3da"/><rect x="22" y="219" width="22" height="9" fill="#2a3442"/><rect x="48" y="219" width="22" height="9" fill="#2a3442"/>' +
      '<circle cx="20" cy="247" r="7" fill="#111"/><circle cx="20" cy="247" r="3" fill="#ccc"/><circle cx="76" cy="247" r="7" fill="#111"/><circle cx="76" cy="247" r="3" fill="#ccc"/><circle cx="94" cy="234" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="110" y="6" width="180" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">WELCOME TO ATLANTA · ALL WEEK</text>',
      sky("jd4", "#0b0a1e", "#3b2350"));
  }

  /* 5. Main St and Harvard Ave, College Park */
  function jdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jd5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      skyline(134, "#3a3550", "#ffe6a0") +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3b2e"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#68301f" stroke-width="1"/>').join("") +
      tag("JERMAINE DUPRI", 14, 192, 31, GOLD, -5) + tag("SO SO DEF", 22, 156, 18, SKY, -4) + tag("DON CHI CHI", 150, 216, 18, CORAL, -4) + tag("JD", 300, 214, 26, "#fff", -6) +
      '<g class="jd-tw"><path d="M338 168l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + GOLD + '"/></g><g class="jd-tw jd-tw2"><path d="M110 214l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="jd-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + SKY + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#1d7fb0"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 104, "Main St") + sign(276, 124, 118, "Harvard Ave"),
      sky("jd5", "#1a2050", "#e08a4a"));
  }

  window.SCENES = { jdbus: jdbus, jdfresh: jdfresh, jdstudio: jdstudio, jdnights: jdnights, jdcorner: jdcorner };
})();
