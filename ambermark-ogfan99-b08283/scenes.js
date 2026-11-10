/* ambermark scenes (NYC map: Manhattan; West Village). CSS classes prefixed am- (the page's own anim-train is kept on the train).
   1 W 4 St-Washington Sq, underground: tiled wall, black sign with the blue A C E and orange B D F M bullets, a silver train sliding in.
   2 The West Village family home: red-brick rowhouse and stoop on a tree-lined block, the wall she painted as a kid, a roller still moving.
   3 Her bedroom at 3:33 a.m., where she wrote the 3:33am EP: keyboard, laptop glow, the clock on 3:33, the city out the window.
   4 The Darjeeling monastery she lived at as a kid: whitewashed walls, gold roof, prayer flags snapping, the snowy Himalaya behind, tea terraces.
   5 Bedford St and Grove St: green signs, AMBER MARK tagged, the cream-brick corner building with its rooftop water tower behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes amglow{0%,100%{opacity:.45}50%{opacity:1}}.am-glow{animation:amglow 2.4s ease-in-out infinite}.am-g2{animation-delay:-1.2s}' +
    '@keyframes amroll{0%,100%{transform:translateY(0)}50%{transform:translateY(34px)}}.am-roll{animation:amroll 2.6s ease-in-out infinite}' +
    '@keyframes amleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(-30px,90px) rotate(200deg);opacity:0}}.am-leaf{animation:amleaf 4s linear infinite}.am-l2{animation-delay:-1.4s}.am-l3{animation-delay:-2.7s}' +
    '@keyframes amnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-56px);opacity:0}}.am-note{animation:amnote 3.2s ease-out infinite}.am-n2{animation-delay:-1.1s}.am-n3{animation-delay:-2.2s}' +
    '@keyframes amblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.am-blink{animation:amblink 1s steps(1) infinite}' +
    '@keyframes amflag{0%,100%{transform:skewY(0) scaleY(1)}50%{transform:skewY(8deg) scaleY(.9)}}.am-flag{transform-box:fill-box;transform-origin:0 0;animation:amflag 1.1s ease-in-out infinite}.am-f2{animation-delay:-.35s}.am-f3{animation-delay:-.7s}' +
    '@keyframes amcloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.am-cloud{animation:amcloud 26s linear infinite}.am-c2{animation-delay:-13s}' +
    '@keyframes amtw{0%,100%{opacity:.2}50%{opacity:1}}.am-tw{animation:amtw 2s ease-in-out infinite}.am-t2{animation-delay:-.7s}.am-t3{animation-delay:-1.4s}' +
    '@keyframes amspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.am-sp{animation:amspray 1.4s ease-out infinite}.am-sp2{animation-delay:-.5s}.am-sp3{animation-delay:-.9s}' +
    '@keyframes amcab{from{transform:translateX(-130px)}to{transform:translateX(520px)}}.am-cab{animation:amcab 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, l, bg, fg) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + bg + '"/><text x="' + x + '" y="' + (y + 4.3) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (fg || "#fff") + '">' + l + '</text>';
  const AMBER = "#ffb347", PINK = "#e86a92", BLUE = "#7fd4ff";

  /* 1. W 4 St-Washington Sq, underground */
  function amstop() {
    const car = (x) => '<rect x="' + x + '" y="104" width="160" height="70" rx="6" fill="#c9ced6" stroke="#5a606a" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 36) + '" y="114" width="26" height="24" rx="2" fill="#26303c"/>').join("") +
      '<rect x="' + (x + 66) + '" y="142" width="28" height="30" fill="#aeb4bd" stroke="#5a606a"/><path d="M' + (x + 80) + ' 142v30" stroke="#5a606a"/>';
    const train = '<g class="anim-train">' + car(20) + car(190) +
      bullet(46, 152, "A", "#0039a6") + '<rect x="342" y="120" width="6" height="10" fill="#fff6c2" class="am-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2a2e"/>' +
      /* tiled wall */
      '<rect x="0" y="0" width="400" height="100" fill="#e9e4d6"/>' +
      Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 0v100" stroke="#cfc8b6" stroke-width="1"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 10) + 'h400" stroke="#cfc8b6" stroke-width="1"/>').join("") +
      '<rect x="0" y="66" width="400" height="12" fill="#5a2a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 6) + '" y="69" width="8" height="6" fill="' + AMBER + '"/>').join("") +
      /* black station sign */
      '<rect x="40" y="12" width="320" height="44" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="54" y="30" ' + font + ' font-size="13" fill="#fff">W 4 St–Washington Sq</text>' +
      bullet(66, 44, "A", "#0039a6") + bullet(88, 44, "C", "#0039a6") + bullet(110, 44, "E", "#0039a6") +
      bullet(140, 44, "B", "#ff6319") + bullet(162, 44, "D", "#ff6319") + bullet(184, 44, "F", "#ff6319") + bullet(206, 44, "M", "#ff6319") +
      '<path d="M300 20v30M300 50l-6 -8M300 50l6 -8" stroke="#fff" stroke-width="3" fill="none"/>' +
      /* track bed */
      '<rect x="0" y="100" width="400" height="80" fill="#1b1b1f"/>' + '<path d="M0 176h400" stroke="#7a7a80" stroke-width="3"/>' +
      train +
      /* platform edge */
      '<rect x="0" y="180" width="400" height="10" fill="#f2c94c"/><rect x="0" y="190" width="400" height="70" fill="#7a746a"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (i * 20 + 10) + '" cy="185" r="2" fill="#b8962e"/>').join("") +
      [60, 200, 340].map(x => '<rect x="' + x + '" y="98" width="12" height="92" fill="#3a5a8a"/><rect x="' + (x - 4) + '" y="94" width="20" height="6" fill="#2a4a7a"/>').join("") +
      '<rect x="104" y="214" width="192" height="26" rx="3" fill="#111"/><text x="200" y="231" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">UPTOWN &amp; THE BRONX  ·  DOWNTOWN &amp; BROOKLYN</text>');
  }

  /* 2. West Village rowhouse, the wall she painted */
  function amhome() {
    const win = (x, y, lit) => '<rect x="' + x + '" y="' + y + '" width="22" height="30" fill="' + (lit ? "#ffd98a" : "#2a2438") + '" stroke="#f1e6d6" stroke-width="2"' + (lit ? ' class="am-glow"' : '') + '/><path d="M' + (x + 11) + ' ' + y + 'v30M' + x + ' ' + (y + 15) + 'h22" stroke="#f1e6d6" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ams2)"/>' +
      /* left rowhouse, red brick */
      '<rect x="20" y="40" width="170" height="190" fill="#a04a3a"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M20 ' + (48 + i * 10) + 'h170" stroke="#8a3c2e" stroke-width="1"/>').join("") +
      '<rect x="14" y="34" width="182" height="10" fill="#e9dccb"/>' +
      win(36, 60, true) + win(84, 60, false) + win(132, 60, true) + win(36, 112, false) + win(84, 112, true) + win(132, 112, false) +
      /* stoop */
      '<rect x="120" y="164" width="44" height="44" fill="#4a2a20"/><rect x="128" y="172" width="28" height="36" fill="#2a1a14"/><circle cx="150" cy="190" r="2" fill="' + AMBER + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (108 - i * 4) + '" y="' + (208 + i * 6) + '" width="' + (68 + i * 8) + '" height="6" fill="#b9a68e" stroke="#8a7a64" stroke-width=".8"/>').join("") +
      '<path d="M104 208l-12 30M180 208l12 30" stroke="#222" stroke-width="3"/>' +
      /* the painted side wall */
      '<rect x="200" y="70" width="180" height="160" fill="#efe6d8"/>' +
      '<path d="M214 210q20 -80 60 -60t50 -60q20 -10 46 10v120z" fill="' + PINK + '" opacity=".85"/>' +
      '<circle cx="300" cy="110" r="22" fill="' + AMBER + '"/>' +
      '<path d="M214 210q40 -40 80 -20t76 -30v50z" fill="' + BLUE + '" opacity=".85"/>' +
      [[236, 120], [262, 96], [340, 150]].map(p => '<path d="M' + p[0] + ' ' + p[1] + 'l3 7l7 1l-5 5l1 7l-6 -3l-6 3l1 -7l-5 -5l7 -1z" fill="#fff6c2"/>').join("") +
      /* roller on a pole, still painting */
      '<g class="am-roll"><rect x="352" y="92" width="26" height="10" rx="4" fill="' + AMBER + '" stroke="#7a4a10" stroke-width="1.5"/><path d="M365 102v40" stroke="#5a4a3a" stroke-width="3"/></g>' +
      /* tree + falling leaves */
      '<rect x="8" y="150" width="8" height="80" fill="#4a3424"/><circle cx="12" cy="140" r="26" fill="#5f8a3a"/><circle cx="30" cy="156" r="18" fill="#6f9a44"/>' +
      '<path d="M40 150q4 -6 8 0q-4 4 -8 0z" fill="#d88a2a" class="am-leaf"/><path d="M24 160q4 -6 8 0q-4 4 -8 0z" fill="#c8642c" class="am-leaf am-l2"/><path d="M50 140q4 -6 8 0q-4 4 -8 0z" fill="#e0a040" class="am-leaf am-l3"/>' +
      /* sidewalk */
      '<rect x="0" y="230" width="400" height="30" fill="#8c8780"/><path d="M0 238h400" stroke="#6e6a64"/>' +
      '<rect x="220" y="236" width="140" height="18" rx="3" fill="#1e1a24"/><text x="290" y="249" text-anchor="middle" ' + font + ' font-size="9" fill="#ffe2b8">THE WEST VILLAGE · HOME</text>',
      sky("ams2", "#6a8ac8", "#f6c8a8"));
  }

  /* 3. Bedroom at 3:33 a.m. */
  function am333() {
    const keys = Array.from({ length: 14 }, (_, i) => '<rect x="' + (66 + i * 12) + '" y="176" width="11" height="26" fill="#f7f3ea" stroke="#333" stroke-width=".8"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map(i => '<rect x="' + (74 + i * 12) + '" y="176" width="7" height="16" fill="#111"/>').join("");
    const seg = (x, d) => { /* 7-seg digit 3 only */
      return '<path d="M' + x + ' 50h16M' + (x + 16) + ' 50v12M' + x + ' 62h16M' + (x + 16) + ' 62v12M' + x + ' 74h16" stroke="#ff4a3a" stroke-width="4" stroke-linecap="round" fill="none"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="#1a1428"/>' +
      /* window with city at night */
      '<rect x="230" y="24" width="150" height="120" fill="url(#ams3)" stroke="#3a3050" stroke-width="6"/>' +
      '<path d="M230 120h14v-30h12v30h10v-46h16v46h8v-22h14v22h12v-60h8v-8h4v8h8v60h10v-34h14v34h10v-20h12v20h-150z" fill="#0e0c18"/>' +
      [[250, 100], [276, 86], [318, 70], [322, 90], [350, 104]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="3" height="3" fill="#ffd98a" class="am-glow ' + (i % 2 ? "am-g2" : "") + '"/>').join("") +
      '<circle cx="350" cy="46" r="12" fill="#f4ecd0"/><circle cx="355" cy="42" r="12" fill="#2a2450"/>' +
      '<circle cx="250" cy="40" r="1.4" fill="#fff" class="am-tw"/><circle cx="300" cy="34" r="1.2" fill="#fff" class="am-tw am-t2"/><circle cx="276" cy="52" r="1.2" fill="#fff" class="am-tw am-t3"/>' +
      '<path d="M305 24v120M230 84h150" stroke="#3a3050" stroke-width="4"/>' +
      /* clock on a shelf */
      '<rect x="40" y="38" width="130" height="50" rx="8" fill="#0c0a10" stroke="#3a3050" stroke-width="3"/>' +
      seg(56) + '<g class="am-blink"><circle cx="86" cy="56" r="2.5" fill="#ff4a3a"/><circle cx="86" cy="68" r="2.5" fill="#ff4a3a"/></g>' + seg(96) + seg(122) +
      '<text x="152" y="78" ' + font + ' font-size="9" fill="#ff4a3a">AM</text>' +
      '<rect x="30" y="88" width="160" height="6" fill="#5a4030"/>' +
      /* desk + keyboard + laptop */
      '<rect x="40" y="168" width="200" height="40" rx="3" fill="#2a2430"/>' + keys +
      '<rect x="0" y="208" width="400" height="52" fill="#3a2a22"/><rect x="0" y="206" width="400" height="6" fill="#5a4030"/>' +
      '<rect x="270" y="168" width="80" height="6" rx="2" fill="#8a8a94"/><path d="M276 168l6 -46h64l-6 46z" fill="#4a4a54"/><path d="M282 164l5 -38h54l-5 38z" fill="' + BLUE + '" opacity=".75" class="am-glow"/>' +
      '<path d="M296 150h30M294 140h34M298 130h22" stroke="#1a1428" stroke-width="2"/>' +
      /* lamp glow */
      '<path d="M200 110l-14 30h28z" fill="' + AMBER + '"/><path d="M200 140l-40 66h80z" fill="#ffd98a" opacity=".12"/>' +
      /* floating notes */
      '<g class="am-note"><text x="120" y="160" font-size="20" fill="' + PINK + '">♪</text></g><g class="am-note am-n2"><text x="160" y="150" font-size="18" fill="' + AMBER + '">♫</text></g><g class="am-note am-n3"><text x="90" y="150" font-size="16" fill="' + BLUE + '">♪</text></g>' +
      '<rect x="40" y="226" width="200" height="22" rx="3" fill="#111"/><text x="140" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe2b8">WRITTEN IN HER BEDROOM</text>',
      sky("ams3", "#1a1a4a", "#3a2a5a"));
  }

  /* 4. Darjeeling monastery, prayer flags, Himalaya */
  function amdarj() {
    const cols = ["#2a6ad8", "#f7f3ea", "#d83a2a", "#3aa84a", "#f2c94c"];
    const flags = (x0, y0, x1, y1, cls) => { let s = '<path d="M' + x0 + ' ' + y0 + 'Q' + ((x0 + x1) / 2) + ' ' + (Math.max(y0, y1) + 18) + ' ' + x1 + ' ' + y1 + '" stroke="#5a4a3a" stroke-width="1" fill="none"/>';
      for (let i = 1; i < 10; i++) { const t = i / 10, x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * ((x0 + x1) / 2) + t * t * x1, y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * (Math.max(y0, y1) + 18) + t * t * y1;
        s += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="11" height="13" fill="' + cols[i % 5] + '" class="am-flag ' + cls[i % 3] + '"/>'; } return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#ams4)"/>' +
      /* snow peaks */
      '<path d="M0 120l60 -50l30 22l50 -62l40 40l30 -20l60 56l40 -30l50 40l40 -20v60h-400z" fill="#c8d4e8"/>' +
      '<path d="M140 30l-18 22l10 -2l8 10l10 -16l10 6zM290 54l-14 16l8 0l6 8l8 -12z" fill="#fff"/>' +
      '<g class="am-cloud"><ellipse cx="60" cy="96" rx="40" ry="10" fill="#fff" opacity=".7"/></g><g class="am-cloud am-c2"><ellipse cx="60" cy="80" rx="30" ry="8" fill="#fff" opacity=".6"/></g>' +
      /* green hills + tea terraces */
      '<path d="M0 150q100 -40 200 -10t200 -10v130h-400z" fill="#3f7a3a"/>' +
      [170, 186, 202, 218, 234, 250].map((y, i) => '<path d="M0 ' + y + 'q100 -' + (14 - i) + ' 200 0t200 0" stroke="#5f9a4a" stroke-width="5" fill="none"/>').join("") +
      /* monastery */
      '<rect x="130" y="112" width="140" height="70" fill="#f4efe4" stroke="#8a7a64" stroke-width="2"/>' +
      '<rect x="130" y="112" width="140" height="10" fill="#8a2a1a"/>' +
      '<path d="M120 114l20 -24h120l20 24z" fill="#d8a83a" stroke="#8a6a1a" stroke-width="2"/>' +
      '<rect x="178" y="70" width="44" height="22" fill="#f4efe4" stroke="#8a7a64" stroke-width="2"/><path d="M170 72l14 -16h32l14 16z" fill="#d8a83a" stroke="#8a6a1a" stroke-width="2"/>' +
      '<path d="M200 56v-12" stroke="#d8a83a" stroke-width="3"/><circle cx="200" cy="42" r="4" fill="#f2c94c"/>' +
      [146, 176, 224, 254].map(x => '<rect x="' + x + '" y="134" width="14" height="22" fill="#3a2a1a"/><path d="M' + x + ' 134h14" stroke="#d8a83a" stroke-width="3"/>').join("") +
      '<rect x="190" y="148" width="20" height="34" fill="#8a2a1a"/><circle cx="200" cy="164" r="3" fill="#f2c94c"/>' +
      /* prayer flags */
      flags(10, 60, 128, 106, ["", "am-f2", "am-f3"]) + flags(272, 106, 392, 56, ["am-f3", "", "am-f2"]) +
      '<rect x="110" y="226" width="180" height="22" rx="3" fill="#2a1a10" stroke="#d8a83a" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#f7e6b8">DARJEELING, INDIA</text>',
      sky("ams4", "#5a8ad8", "#f2d0b0"));
  }

  /* 5. Bedford St and Grove St, the corner building with the water tower */
  function amcorner() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="14" height="18" fill="#2a2a3a" stroke="#f7f3ea" stroke-width="1.5"/>';
    let wins = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) wins += win(150 + c * 26, 50 + r * 30);
    return svg(
      '<rect width="400" height="260" fill="url(#ams5)"/>' +
      /* corner building, cream brick, six storeys */
      '<rect x="140" y="40" width="170" height="170" fill="#e8dcc0" stroke="#b8a888" stroke-width="2"/>' +
      '<rect x="134" y="34" width="182" height="8" fill="#c8b898"/>' + wins +
      '<rect x="146" y="192" width="158" height="18" fill="#5a2a2a"/>' +
      /* water tower on the roof */
      '<path d="M214 34v-8M238 34v-8M210 26h32" stroke="#4a3a2a" stroke-width="3"/>' +
      '<rect x="214" y="12" width="24" height="14" fill="#8a6a4a" stroke="#4a3a2a" stroke-width="2"/><path d="M214 17h24M214 22h24" stroke="#4a3a2a" stroke-width="1.2"/>' +
      '<path d="M211 13l15 -10l15 10z" fill="#5a4a3a"/>' +
      /* left brick wall with the tag */
      '<rect x="0" y="90" width="134" height="140" fill="#8a3a2e"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (96 + i * 10) + 'h134" stroke="#6e2c22" stroke-width="1"/>').join("") +
      tag("AMBER", 8, 150, 30, AMBER, -8) + tag("MARK", 26, 190, 34, PINK, -6) +
      '<g transform="translate(118 132)"><circle r="3" fill="' + PINK + '" class="am-sp"/><circle r="2.5" fill="' + AMBER + '" class="am-sp am-sp2"/><circle r="2" fill="#fff" class="am-sp am-sp3"/></g>' +
      '<rect x="114" y="132" width="8" height="18" rx="2" fill="#ddd" stroke="#555"/>' +
      /* sign post */
      '<rect x="334" y="70" width="6" height="160" fill="#2f5a3a"/>' + sign(286, 74, 104, "Bedford St", 12) + sign(296, 100, 94, "Grove St", 12) +
      /* sidewalk + street, a cab rolling */
      '<rect x="0" y="210" width="400" height="20" fill="#9a958c"/><rect x="0" y="230" width="400" height="30" fill="#3a3a40"/>' +
      '<g class="am-cab"><rect x="0" y="232" width="70" height="18" rx="4" fill="#f2c94c"/><rect x="14" y="224" width="40" height="12" rx="3" fill="#f2c94c"/><rect x="18" y="226" width="14" height="8" fill="#2a3442"/><rect x="36" y="226" width="14" height="8" fill="#2a3442"/><circle cx="16" cy="252" r="6" fill="#111"/><circle cx="56" cy="252" r="6" fill="#111"/></g>' +
      /* street lamp */
      '<rect x="366" y="130" width="4" height="80" fill="#222"/><circle cx="368" cy="128" r="6" fill="#ffd98a" class="am-glow"/>',
      sky("ams5", "#f2a38a", "#7a5aa0"));
  }

  window.SCENES = { amstop: amstop, amhome: amhome, am333: am333, amdarj: amdarj, amcorner: amcorner };
})();
