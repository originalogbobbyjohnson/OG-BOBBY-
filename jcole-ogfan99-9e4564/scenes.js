/* jcole scenes (Regions tab: The Carolinas; Fayetteville, NC). CSS classes and ids prefixed jc- (the page's own anim-train is kept).
   1 Fayetteville station (Amtrak, 472 Hay St): the 1911 red-brick depot with its curved Dutch gables and long canopy, a silver Amtrak train sliding in, black station sign with the AMTK badge.
   2 Terry Sanford High School, where he graduated in 2003 ("03' Adolescence"): red-brick school front, the flag waving, a basketball bouncing on the outdoor court.
   3 2014 Forest Hills Drive at night (the album cover house his mom lost and he bought back): the modest ranch house, porch light flickering, stars twinkling, the mailbox numbered 2014.
   4 Dreamville Festival at Dorothea Dix Park, Raleigh: the big field stage at sunset, light beams sweeping, crowd hands up, the Raleigh skyline behind.
   5 Forest Hills Dr and Cain Rd: green signs, COLE tagged on the brick, paratroopers drifting down over the pines from Fort Bragg behind (he is an Army kid). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jc-flk{animation:jcflick 2.2s infinite}.jc-flk2{animation-delay:.7s}' +
    '@keyframes jccloud{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.jc-cloud{animation:jccloud 24s linear infinite}.jc-cloud2{animation-delay:-12s}' +
    '@keyframes jcwave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.jc-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jcwave 1.4s ease-in-out infinite}' +
    '@keyframes jcbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.jc-ball{animation:jcbounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes jctw{0%,100%{opacity:.25}50%{opacity:1}}.jc-tw{animation:jctw 2s ease-in-out infinite}.jc-tw2{animation-delay:-1s}.jc-tw3{animation-delay:-.5s}' +
    '@keyframes jcbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.jc-beam{transform-box:fill-box;transform-origin:50% 100%;animation:jcbeam 3s ease-in-out infinite}.jc-beam2{animation-delay:-1.5s}' +
    '@keyframes jchand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.jc-hand{animation:jchand .8s ease-in-out infinite}.jc-hand2{animation-delay:-.4s}' +
    '@keyframes jcchute{0%{transform:translate(0,-60px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(30px,150px);opacity:0}}.jc-chute{animation:jcchute 9s linear infinite}.jc-ch2{animation-delay:-3s}.jc-ch3{animation-delay:-6s}' +
    '@keyframes jcplane{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jc-plane{animation:jcplane 14s linear infinite}' +
    '@keyframes jcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jc-sp{animation:jcspray 1.4s ease-out infinite}.jc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 9 + 14) + '" height="18" rx="4" fill="' + color + '" stroke="#fff" stroke-width="1"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", BLUE = "#3c7ddb", BRICK = "#b5523b";
  const cloud = (cls, x, y) => '<g class="jc-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="30" ry="10" fill="#fff" opacity=".85"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 6) + '" rx="16" ry="9" fill="#fff" opacity=".85"/></g>';
  const pines = (y, color) => Array.from({ length: 14 }, (_, i) => { const x = i * 30 + (i % 3) * 6; const h = 34 + (i * 7) % 18; return '<path d="M' + x + ' ' + y + 'l12 -' + h + 'l12 ' + h + 'z" fill="' + color + '"/>'; }).join("");

  /* 1. Fayetteville station, Amtrak */
  function jcstation() {
    const gable = (x) => '<path d="M' + x + ' 96v-22q0 -8 8 -8q0 -10 10 -10h24q10 0 10 10q8 0 8 8v22z" fill="' + BRICK + '" stroke="#7a3324" stroke-width="2"/><rect x="' + (x + 20) + '" y="70" width="20" height="14" rx="7" fill="#2a2f38"/>';
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="150" width="30" height="20" rx="2" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="30" y="138" width="350" height="52" rx="8" fill="#d9dde2" stroke="#8a929a" stroke-width="2"/>' + win +
      '<rect x="30" y="174" width="350" height="4" fill="#d22630"/><rect x="30" y="178" width="350" height="4" fill="#fff"/><rect x="30" y="182" width="350" height="4" fill="#1f4e79"/>' +
      '<rect x="356" y="146" width="20" height="26" rx="3" fill="#26323c"/><circle cx="376" cy="182" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs1)"/>' + cloud("", 60, 34) + cloud("jc-cloud2", 260, 52) +
      pines(92, "#2f4a32") +
      '<rect x="70" y="66" width="260" height="66" fill="' + BRICK + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M70 ' + (74 + i * 8) + 'h260" stroke="#9a4331" stroke-width="1"/>').join("") +
      gable(70) + gable(270) + '<rect x="150" y="80" width="100" height="10" fill="#f1e6cf"/><text x="200" y="88.5" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2a1e">FAYETTEVILLE</text>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (96 + i * 46) + '" y="96" width="18" height="30" rx="2" fill="#2a2f38"/><rect x="' + (98 + i * 46) + '" y="98" width="14" height="10" fill="#f6dfa3" class="jc-flk' + (i % 2 ? " jc-flk2" : "") + '" opacity=".75"/>').join("") +
      '<path d="M20 122h360l-14 10H34z" fill="#3b3f46"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="130" width="4" height="10" fill="#3b3f46"/>').join("") +
      '<rect x="0" y="134" width="400" height="4" fill="#c7c1b5"/>' +
      train +
      '<rect x="0" y="190" width="400" height="10" fill="#6d6257"/><path d="M0 194h400" stroke="#9a9a9a" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c9c4b8"/><rect x="0" y="200" width="400" height="5" fill="#f1d24a"/>' +
      '<rect x="92" y="212" width="216" height="34" rx="3" fill="#111"/><text x="106" y="235" ' + font + ' font-size="16" fill="#fff">Fayetteville</text>' + badge(246, 229, "AMTK", "#1f4e79"),
      sky("jcs1", "#7eb3e0", "#f4e4c4"));
  }

  /* 2. Terry Sanford High School */
  function jcschool() {
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (44 + i * 34) + '" y="104" width="20" height="18" fill="#2c3440"/><rect x="' + (44 + i * 34) + '" y="134" width="20" height="18" fill="#2c3440"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs2)"/>' + cloud("", 80, 36) + cloud("jc-cloud2", 280, 26) +
      pines(96, "#355a3a") +
      '<rect x="30" y="92" width="340" height="76" fill="' + BRICK + '"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M30 ' + (98 + i * 8) + 'h340" stroke="#9a4331" stroke-width="1"/>').join("") +
      '<rect x="26" y="86" width="348" height="8" fill="#efe6d4"/>' + wins +
      '<rect x="150" y="70" width="100" height="24" fill="#efe6d4"/><text x="200" y="87" text-anchor="middle" ' + font + ' font-size="10" fill="#7a2a1e">TERRY SANFORD</text>' +
      '<rect x="172" y="132" width="56" height="36" fill="#efe6d4"/><rect x="180" y="138" width="18" height="30" fill="#3a4250"/><rect x="202" y="138" width="18" height="30" fill="#3a4250"/>' +
      '<rect x="356" y="40" width="3" height="128" fill="#ccc"/><g class="jc-flag"><rect x="359" y="42" width="30" height="18" fill="#b22234"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="359" y="' + (45 + i * 5) + '" width="30" height="2.4" fill="#fff"/>').join("") + '<rect x="359" y="42" width="12" height="9" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="168" width="400" height="92" fill="#3f4a3a"/><rect x="20" y="178" width="250" height="74" fill="#c0703f"/><path d="M20 178h250v74H20zM145 178v74" fill="none" stroke="#fff" stroke-width="2"/><circle cx="145" cy="215" r="14" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="252" y="150" width="4" height="70" fill="#888"/><rect x="236" y="148" width="26" height="18" fill="#fff" stroke="#888"/><path d="M234 172h16" stroke="#e05a2b" stroke-width="2.5"/>' +
      '<g class="jc-ball"><circle cx="210" cy="228" r="8" fill="#e0752b"/><path d="M202 228h16M210 220v16" stroke="#5a2a10" stroke-width="1"/></g>' +
      '<rect x="290" y="186" width="96" height="26" rx="3" fill="#0f2747"/><text x="338" y="204" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">CLASS OF ’03</text>',
      sky("jcs2", "#6fb0e6", "#e9f1f7"));
  }

  /* 3. 2014 Forest Hills Drive at night */
  function jchouse() {
    const stars = Array.from({ length: 22 }, (_, i) => '<circle class="jc-tw' + (i % 3 === 1 ? " jc-tw2" : i % 3 === 2 ? " jc-tw3" : "") + '" cx="' + ((i * 53) % 390 + 6) + '" cy="' + ((i * 29) % 80 + 8) + '" r="' + (i % 4 === 0 ? 1.8 : 1.1) + '" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs3)"/>' + stars + '<circle cx="330" cy="40" r="16" fill="#f4efd8"/><circle cx="324" cy="36" r="16" fill="#1a2140"/>' +
      pines(130, "#141b2c") +
      '<path d="M70 120L200 70l130 50z" fill="#2c2f38" stroke="#555a66" stroke-width="2"/>' +
      '<rect x="84" y="118" width="232" height="70" fill="#cfc6b4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M84 ' + (126 + i * 8) + 'h232" stroke="#b5ab98" stroke-width="1"/>').join("") +
      '<rect x="104" y="134" width="34" height="26" fill="#f6d27a" class="jc-flk"/><path d="M121 134v26M104 147h34" stroke="#7a6a4a" stroke-width="2"/>' +
      '<rect x="262" y="134" width="34" height="26" fill="#2a3044"/><path d="M279 134v26M262 147h34" stroke="#555" stroke-width="2"/>' +
      '<rect x="180" y="140" width="28" height="48" fill="#5b3a26"/><circle cx="203" cy="166" r="2" fill="' + GOLD + '"/>' +
      '<circle class="jc-flk jc-flk2" cx="222" cy="140" r="5" fill="#ffe9a8"/><circle cx="222" cy="140" r="16" fill="#ffe9a8" opacity=".15"/>' +
      '<path d="M150 188h90l8 12H142z" fill="#8a8578"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#1f3322"/><path d="M180 200l-30 60h90l-20 -60z" fill="#6f6a60"/>' +
      '<rect x="318" y="196" width="4" height="34" fill="#444"/><rect x="306" y="182" width="30" height="16" rx="6" fill="#2f4c7a"/><text x="321" y="194" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">2014</text>',
      sky("jcs3", "#0b1024", "#2b3560"));
  }

  /* 4. Dreamville Festival, Dorothea Dix Park, Raleigh */
  function jcfest() {
    const hands = Array.from({ length: 16 }, (_, i) => '<g class="jc-hand' + (i % 2 ? " jc-hand2" : "") + '"><rect x="' + (10 + i * 25) + '" y="214" width="5" height="22" rx="2" fill="#1a1a22"/><circle cx="' + (12.5 + i * 25) + '" cy="212" r="4" fill="#1a1a22"/></g>').join("");
    const heads = Array.from({ length: 22 }, (_, i) => '<circle cx="' + (i * 19 + 4) + '" cy="' + (238 + (i % 3) * 4) + '" r="10" fill="#14141a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs4)"/>' +
      '<g fill="#3d3550"><rect x="20" y="96" width="22" height="50"/><rect x="48" y="80" width="18" height="66"/><rect x="330" y="88" width="20" height="58"/><rect x="356" y="100" width="26" height="46"/>' +
      '<rect x="296" y="64" width="24" height="82"/><path d="M296 64l12 -16 12 16z"/></g>' +
      '<rect x="0" y="140" width="400" height="120" fill="#3e5a34"/>' +
      '<rect x="90" y="66" width="220" height="10" fill="#2a2a30"/><rect x="90" y="66" width="8" height="120" fill="#2a2a30"/><rect x="302" y="66" width="8" height="120" fill="#2a2a30"/>' +
      '<rect x="98" y="76" width="204" height="100" fill="#151520"/><rect x="104" y="82" width="192" height="70" fill="#1d2a52"/>' +
      '<text x="200" y="124" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + GOLD + '">DREAMERS</text>' +
      '<rect x="98" y="160" width="204" height="26" fill="#22222a"/>' +
      '<g class="jc-beam"><path d="M140 160l-16 -120h18z" fill="#fff6c2" opacity=".25"/></g><g class="jc-beam jc-beam2"><path d="M260 160l-2 -120h18z" fill="#bcd6ff" opacity=".25"/></g>' +
      '<circle class="jc-flk" cx="120" cy="72" r="4" fill="#fff6c2"/><circle class="jc-flk jc-flk2" cx="200" cy="72" r="4" fill="#fff6c2"/><circle class="jc-flk" cx="280" cy="72" r="4" fill="#fff6c2"/>' +
      hands + heads,
      sky("jcs4", "#2a3a7a", "#f09a5a"));
  }

  /* 5. Forest Hills Dr and Cain Rd */
  function jccorner() {
    const chute = (cls, x, y, c) => '<g class="jc-chute ' + cls + '"><path d="M' + (x - 14) + ' ' + y + 'q14 -18 28 0z" fill="' + c + '"/><path d="M' + (x - 14) + ' ' + y + 'L' + x + ' ' + (y + 18) + 'M' + (x + 14) + ' ' + y + 'L' + x + ' ' + (y + 18) + '" stroke="#ddd" stroke-width="1"/><rect x="' + (x - 2) + '" y="' + (y + 18) + '" width="4" height="7" fill="#2f3a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs5)"/>' +
      '<g class="jc-plane"><path d="M0 26h56l8 -4h6l-4 6h-66z" fill="#4a5a4a"/><path d="M20 26l14 -10h6l-6 10zM20 26l14 10h6l-6 -10z" fill="#3e4c3e"/></g>' +
      chute("", 90, 40, "#6b7d5a") + chute("jc-ch2", 190, 30, "#7d8c66") + chute("jc-ch3", 290, 44, "#5f7150") +
      pines(130, "#22341f") +
      '<rect x="0" y="126" width="400" height="98" fill="#8a3e2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6e3022" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#6e3022" stroke-width="1"/>').join("")).join("") +
      tag("COLE", 30, 194, 66, GOLD, -6) + tag("THE VILLE", 160, 214, 20, "#8fc0ff", -4) + tag("COLE WORLD", 22, 216, 15, "#ffb199", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(238, 98, 152, "Forest Hills Dr") + sign(268, 124, 92, "Cain Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="jc-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="jc-sp"><circle cx="186" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jc-sp jc-sp2"><circle cx="192" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("jcs5", "#5d8fc4", "#f2d7a8"));
  }

  window.SCENES = { jcstation: jcstation, jcschool: jcschool, jchouse: jchouse, jcfest: jcfest, jccorner: jccorner };
})();
