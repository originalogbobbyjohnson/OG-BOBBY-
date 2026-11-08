/* minnieriperton scenes (Regions tab: CHICAGO; GENRES: R&B. Born in Chicago in 1947 and raised in Bronzeville on the South Side; trained in opera at the Abraham Lincoln Centre; Hyde Park High School class of 1964; lead voice of Rotary Connection). CSS classes prefixed mrp- (the page's own anim-train is kept).
   1 43rd on the CTA Green Line, up on the 'L' over 43rd St in Bronzeville: steel structure, a silver 'L' train with green trim sliding in, black station sign with the green line dot.
   2 The Abraham Lincoln Centre, 700 E Oakwood Blvd (Frank Lloyd Wright + Dwight Perkins, 1905), where she studied opera, music and dance as a girl: tall dark red-brown brick block with deep cornice, high notes floating up off the top.
   3 Hyde Park High School, 6220 S Stony Island Ave (class of '64): long red-brick school with stone trim, blue-and-white banner waving, a bird flying past.
   4 Rotary Connection on stage: a psychedelic liquid-light show swirling behind the band, flowers in the mic stand, notes rising.
   5 E Oakwood Blvd and S Cottage Grove Ave in Bronzeville: green signs, MINNIE tagged on the wall, the white S-curve 41st Street footbridge over Lake Shore Drive out by the lake behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mrpglow{0%,100%{opacity:.45}50%{opacity:1}}.mrp-glow{animation:mrpglow 2.4s ease-in-out infinite}.mrp-g2{animation-delay:-1.2s}' +
    '@keyframes mrpnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-20px,-80px);opacity:0}}.mrp-note{animation:mrpnote 3.6s ease-out infinite}.mrp-n2{animation-delay:-1.2s}.mrp-n3{animation-delay:-2.4s}' +
    '@keyframes mrpbird{0%{transform:translate(-60px,20px)}100%{transform:translate(480px,-30px)}}.mrp-bird{animation:mrpbird 8s linear infinite}' +
    '@keyframes mrpwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.mrp-wing{transform-box:fill-box;transform-origin:50% 100%;animation:mrpwing .5s ease-in-out infinite}' +
    '@keyframes mrpflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-5deg)}}.mrp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mrpflag 1.8s ease-in-out infinite}' +
    '@keyframes mrpblob{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(14px,-10px) scale(1.18)}}.mrp-blob{transform-box:fill-box;transform-origin:50% 50%;animation:mrpblob 4s ease-in-out infinite}.mrp-b2{animation-delay:-1.3s;animation-duration:5s}.mrp-b3{animation-delay:-2.6s;animation-duration:6s}' +
    '@keyframes mrpspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mrp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mrpspin 14s linear infinite}' +
    '@keyframes mrpcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mrp-car{animation:mrpcar 7s linear infinite}' +
    '@keyframes mrpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mrp-sp{animation:mrpspray 1.4s ease-out infinite}.mrp-sp2{animation-delay:.45s}' +
    '@keyframes mrpsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.mrp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mrpsway 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mrp-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="mrp-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const flower = (x, y, r, c, mid) => { let p = ""; for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; p += '<circle cx="' + (x + Math.cos(a) * r).toFixed(1) + '" cy="' + (y + Math.sin(a) * r).toFixed(1) + '" r="' + (r * .75).toFixed(1) + '" fill="' + c + '"/>'; } return p + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * .6).toFixed(1) + '" fill="' + (mid || "#ffd25a") + '"/>'; };
  const bird = (x, y, c) => '<g class="mrp-bird"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="8" ry="4" fill="' + c + '"/><path d="M7 -1l6 -1l-6 3z" fill="#ffb84a"/><g class="mrp-wing"><path d="M-4 -2q4 -10 10 -2z" fill="' + c + '"/></g></g></g>';
  const PINK = "#f6a8c8", GOLD = "#ffd25a", TEAL = "#7fd0c0", GRN = "#009b3a", BRICK = "#8a3a2a", DARKB = "#5a2a22";

  /* 1. 43rd, CTA Green Line, up on the 'L' over 43rd St */
  function mrpstation() {
    const car = x => '<rect x="' + x + '" y="96" width="150" height="62" rx="5" fill="#d6dbe2" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="146" width="150" height="5" fill="' + GRN + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="108" width="20" height="22" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 66) + '" y="104" width="18" height="40" fill="#b7bec8" stroke="#6b737e"/>';
    const train = '<g class="anim-train">' + car(40) + car(194) + '<rect x="314" y="104" width="28" height="12" rx="2" fill="#111"/><text x="328" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#7be08a">GREEN</text><circle class="mrp-glow" cx="338" cy="142" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mrp-s1)"/>' + stars(8) +
      /* Bronzeville greystones and two-flats below */
      '<rect x="0" y="200" width="400" height="60" fill="#2e2a36"/>' + [8, 72, 136, 250, 318].map((x, i) => '<rect x="' + x + '" y="' + (176 + (i % 2) * 10) + '" width="' + (52 + (i % 3) * 8) + '" height="90" fill="' + (i % 2 ? "#5a4a44" : "#6e6458") + '"/>').join("") +
      [20, 86, 262, 332].map((x, i) => [0, 1, 2].map(r => '<rect class="' + ((i + r) % 2 ? "mrp-glow" : "mrp-glow mrp-g2") + '" x="' + (x + r * 13) + '" y="' + (192 + (i % 2) * 6) + '" width="7" height="9" fill="#f4d58a"/>').join("")).join("") +
      /* 'L' platform canopy */
      '<rect x="0" y="66" width="400" height="10" fill="#2e3a2e"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="76" width="6" height="88" fill="#3e4a3e"/>').join("") +
      train +
      /* steel deck and girders */
      '<rect x="0" y="162" width="400" height="12" fill="#4a5048"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 174l10 22l10 -22" stroke="#3a403a" stroke-width="3" fill="none"/>').join("") +
      '<rect x="0" y="196" width="400" height="6" fill="#3a403a"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="202" width="10" height="58" fill="#3a403a"/>').join("") +
      /* black CTA-style sign with the green dot */
      '<rect x="120" y="222" width="160" height="28" rx="3" fill="#111"/><text x="186" y="242" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">43RD</text>' +
      '<circle cx="250" cy="236" r="9" fill="' + GRN + '" stroke="#fff" stroke-width="1"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">GREEN LINE · 43RD ST · BRONZEVILLE, SOUTH SIDE</text>',
      sky("mrp-s1", "#1a1440", "#d47a8a"));
  }

  /* 2. Abraham Lincoln Centre, 700 E Oakwood Blvd: where she trained in opera */
  function mrpcentre() {
    let bricks = ""; for (let r = 0; r < 15; r++) bricks += '<path d="M84 ' + (58 + r * 10) + 'h232" stroke="#4a2018" stroke-width="1" opacity=".6"/>';
    let wins = "";
    for (let c = 0; c < 6; c++) { const x = 104 + c * 34; wins += '<rect x="' + x + '" y="70" width="18" height="96" fill="#2a2030"/>' + [0, 1, 2, 3].map(r => '<rect x="' + x + '" y="' + (92 + r * 24) + '" width="18" height="3" fill="' + DARKB + '"/>').join("") + '<rect class="mrp-glow ' + (c % 2 ? "mrp-g2" : "") + '" x="' + (x + 2) + '" y="' + (72 + (c % 3) * 24) + '" width="14" height="18" fill="#f4d58a" opacity=".55"/>'; }
    const staff = '<g opacity=".55">' + [0, 1, 2, 3, 4].map(i => '<path d="M40 ' + (24 + i * 5) + 'q160 -14 320 0" stroke="#fff" stroke-width=".8" fill="none"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mrp-s2)"/>' + stars(6) + staff +
      '<rect x="0" y="212" width="400" height="48" fill="#7a7a7a"/><rect x="0" y="210" width="400" height="4" fill="#c8c8c8"/>' +
      tree(40, 204, 1.6, "#2f5a2a") + tree(364, 202, 1.7, "#2f5a2a") +
      /* tall dark brick block with a deep flat cornice */
      '<rect x="84" y="52" width="232" height="160" fill="#7a3428"/>' + bricks +
      '<rect x="74" y="44" width="252" height="12" fill="' + DARKB + '"/><rect x="80" y="56" width="240" height="4" fill="#3a1812"/>' +
      '<rect x="84" y="166" width="232" height="6" fill="#c8a882"/>' + wins +
      /* entrance with a stone panel */
      '<rect x="164" y="172" width="72" height="40" fill="#c8a882"/><rect x="180" y="180" width="40" height="32" fill="#2a1a14"/><rect x="199" y="180" width="2" height="32" fill="#8a6a40"/>' +
      '<rect x="100" y="176" width="58" height="12" fill="#1a1010"/><text x="129" y="185" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">LINCOLN CENTRE</text>' +
      /* high notes floating off the roof: the five-octave voice */
      note(140, 40, PINK) + note(200, 34, GOLD, "mrp-n2") + note(262, 40, "#fff", "mrp-n3") + note(320, 60, PINK, "mrp-n2") + note(80, 64, TEAL, "mrp-n3") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">700 E OAKWOOD BLVD · WHERE SHE TRAINED IN OPERA</text>',
      sky("mrp-s2", "#1e1840", "#8a5a8a"));
  }

  /* 3. Hyde Park High School, 6220 S Stony Island Ave, class of '64 */
  function mrpschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="20" fill="#2a3a4a" stroke="#e8dcc0" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v20M' + x + ' ' + (y + 10) + 'h16" stroke="#e8dcc0" stroke-width="1"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) if (!(r === 2 && (c === 4 || c === 5))) wins += win(48 + c * 31, 88 + r * 36);
    return svg(
      '<rect width="400" height="260" fill="url(#mrp-s3)"/>' +
      '<circle cx="60" cy="40" r="16" fill="#fff2b0" opacity=".9"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#8a8a8a"/><rect x="0" y="210" width="400" height="5" fill="#d0d0d0"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#555"/>' + [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="244" width="30" height="3" fill="#eee"/>').join("") +
      /* long red-brick front with stone bands */
      '<rect x="36" y="74" width="328" height="138" fill="#9a4a32"/>' +
      '<rect x="30" y="66" width="340" height="10" fill="#e6dcc2"/><rect x="36" y="120" width="328" height="4" fill="#e6dcc2"/><rect x="36" y="156" width="328" height="4" fill="#e6dcc2"/>' +
      wins +
      /* center bay */
      '<rect x="168" y="52" width="64" height="160" fill="#e6dcc2"/><rect x="174" y="60" width="52" height="14" fill="#1f3a8a"/><text x="200" y="71" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HYDE PARK</text>' +
      '<rect x="180" y="164" width="40" height="48" fill="#3a2a1e"/><path d="M180 164a20 14 0 0 1 40 0z" fill="#5a4030"/><rect x="199" y="164" width="2" height="48" fill="#8a6a40"/>' +
      '<rect x="176" y="84" width="48" height="60" fill="#2a3a4a" stroke="#c8bca0" stroke-width="2"/><path d="M200 84v60M176 114h48" stroke="#c8bca0" stroke-width="1.5"/>' +
      /* blue-and-white school banner */
      '<rect x="199" y="14" width="2" height="40" fill="#ccc"/><g class="mrp-flag"><rect x="201" y="16" width="34" height="18" fill="#1f3a8a"/><rect x="201" y="24" width="34" height="3" fill="#fff"/></g>' +
      '<g class="mrp-flag"><rect x="236" y="166" width="70" height="22" rx="2" fill="#fff" stroke="#1f3a8a" stroke-width="2"/><text x="271" y="181" text-anchor="middle" ' + font + ' font-size="10" fill="#1f3a8a">CLASS OF \'64</text></g>' +
      tree(20, 206, 1.5, "#3c6a2e") + tree(384, 206, 1.5, "#3c6a2e") +
      bird(0, 46, "#4a7ad8") +
      '<text x="200" y="228" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S STONY ISLAND AVE · HYDE PARK HIGH</text>',
      sky("mrp-s3", "#4a7ab8", "#cfe0ee"));
  }

  /* 4. Rotary Connection on stage: the liquid-light show */
  function mrprotary() {
    const blob = (x, y, rx, ry, c, cls) => '<ellipse class="mrp-blob ' + cls + '" cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + c + '" opacity=".75"/>';
    const amp = x => '<rect x="' + x + '" y="168" width="40" height="44" rx="3" fill="#1a1a1a" stroke="#555" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="192" r="12" fill="#2a2a2a" stroke="#444"/>';
    return svg(
      '<rect width="400" height="260" fill="#120818"/>' +
      /* the light-show screen */
      '<rect x="30" y="20" width="340" height="150" rx="6" fill="#2a0a3a"/>' +
      '<g>' + blob(110, 80, 70, 44, "#e0408a", "") + blob(260, 70, 80, 50, "#ff9a2a", "mrp-b2") + blob(190, 120, 90, 36, "#7a3ad8", "mrp-b3") + blob(320, 120, 46, 30, TEAL, "") + blob(70, 130, 40, 26, GOLD, "mrp-b2") + '</g>' +
      '<g class="mrp-spin" opacity=".5"><path d="M200 95m-40 0a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="8 10"/></g>' +
      /* stage */
      '<rect x="0" y="212" width="400" height="48" fill="#3a2418"/><rect x="0" y="208" width="400" height="6" fill="#5a3a24"/>' +
      amp(40) + amp(320) +
      /* mic stand wrapped in flowers */
      '<g class="mrp-sway"><rect x="198" y="140" width="4" height="70" fill="#bbb"/><rect x="194" y="128" width="12" height="18" rx="6" fill="#888"/><rect x="186" y="206" width="28" height="4" fill="#bbb"/>' +
      flower(196, 160, 5, PINK) + flower(206, 176, 4, "#fff") + flower(194, 192, 5, GOLD, "#e0408a") + '</g>' +
      /* stage lights */
      [70, 160, 240, 330].map((x, i) => '<path class="mrp-glow ' + (i % 2 ? "mrp-g2" : "") + '" d="M' + x + ' 0l-26 210h52z" fill="' + [PINK, GOLD, TEAL, "#c08aff"][i] + '" opacity=".12"/>').join("") +
      note(150, 150, PINK) + note(250, 146, GOLD, "mrp-n2") + note(300, 160, "#fff", "mrp-n3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ROTARY CONNECTION · CHICAGO SOUL, LATE SIXTIES</text>',
      "");
  }

  /* 5. E Oakwood Blvd and S Cottage Grove Ave, Bronzeville */
  function mrpcorner() {
    const bridge = '<g opacity=".95"><path d="M150 168c40 -40 80 10 120 -20s60 -30 120 0" stroke="#f4f4f0" stroke-width="5" fill="none"/>' +
      '<path d="M150 168c40 -40 80 10 120 -20s60 -30 120 0" stroke="#cfd8de" stroke-width="1.5" fill="none" transform="translate(0 6)"/>' +
      [170, 210, 250, 290, 330, 370].map((x, i) => '<rect x="' + x + '" y="' + (150 + (i % 2) * 8) + '" width="3" height="' + (34 - (i % 2) * 8) + '" fill="#e8ece8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mrp-s5)"/>' +
      /* the lake far behind and the footbridge */
      '<rect x="140" y="150" width="260" height="40" fill="#3a7ab0" opacity=".8"/><rect x="140" y="182" width="260" height="10" fill="#5a8a5a"/><rect x="140" y="192" width="260" height="28" fill="#6a6a64"/>' + bridge +
      [0, 1, 2].map(i => '<g class="mrp-car" style="animation-delay:-' + (i * 2.3) + 's"><rect x="0" y="186" width="14" height="5" rx="2" fill="' + ["#e8e8e8", "#c04a3a", "#2a4a8a"][i] + '"/></g>').join("") +
      /* brick wall with the tag */
      '<rect x="0" y="116" width="176" height="104" fill="#8a3a2a"/>' + Array.from({ length: 11 }, (_, r) => '<path d="M0 ' + (122 + r * 9) + 'h176" stroke="#6e2c20" stroke-width="1"/>').join("") +
      tag("MINNIE", 18, 170, 36, PINK, -8) + tag("LES FLEURS", 20, 204, 16, GOLD, -4) +
      flower(156, 204, 6, PINK) + flower(138, 210, 5, GOLD, "#e0408a") +
      '<g class="mrp-sp"><circle cx="160" cy="160" r="2" fill="' + PINK + '"/><circle cx="166" cy="156" r="1.5" fill="' + PINK + '"/></g><g class="mrp-sp mrp-sp2"><circle cx="156" cy="168" r="1.6" fill="' + GOLD + '"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="220" width="400" height="40" fill="#555"/><rect x="0" y="218" width="400" height="4" fill="#bbb"/>' +
      '<g class="mrp-car"><rect x="0" y="226" width="64" height="18" rx="5" fill="#3a6ac8"/><rect x="10" y="218" width="40" height="12" rx="4" fill="#2a5ab0"/><rect x="14" y="220" width="14" height="8" fill="#9cc"/><rect x="32" y="220" width="14" height="8" fill="#9cc"/><circle cx="14" cy="246" r="6" fill="#111"/><circle cx="50" cy="246" r="6" fill="#111"/></g>' +
      /* green street signs on the pole */
      '<rect x="240" y="92" width="5" height="128" fill="#5f6b5f"/>' + sign(180, 98, 130, "E OAKWOOD BLVD") + sign(218, 124, 160, "S COTTAGE GROVE AVE") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BRONZEVILLE · THE 41ST ST FOOTBRIDGE OUT BY THE LAKE</text>',
      sky("mrp-s5", "#2a3a7a", "#f0a0a0"));
  }

  window.SCENES = { mrpstation, mrpcentre, mrpschool, mrprotary, mrpcorner };
})();
