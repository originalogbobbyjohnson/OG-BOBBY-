/* Marc Anthony game (NYC map, Manhattan: East Harlem / Spanish Harlem). Every Lexington Av 6 stop up here is already on the map,
   so room 1 is the M15 bus stop at 1 Av & E 102 St, right outside the Metro North Plaza towers where he grew up.
   Each scene is a small animated SVG, 400 x 260. CSS classes are prefixed "ma". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes maFlk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.maFlk{animation:maFlk 2.4s infinite}.maF2{animation-delay:.8s}' +
    '@keyframes maWin{0%,100%{opacity:.3}50%{opacity:1}}.maWin{animation:maWin 3s ease-in-out infinite}.maW2{animation-delay:1s}.maW3{animation-delay:2s}' +
    '@keyframes maWave{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.maWave{transform-box:fill-box;transform-origin:0 50%;animation:maWave 1.4s ease-in-out infinite}' +
    '@keyframes maChase{0%,100%{opacity:1}50%{opacity:.15}}.maChase{animation:maChase .8s steps(1) infinite}.maC2{animation-delay:.4s}' +
    '@keyframes maBeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.maBeam{transform-box:fill-box;transform-origin:50% 0;animation:maBeam 4s ease-in-out infinite}.maB2{animation-delay:-2s}' +
    '@keyframes maBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.maBob{animation:maBob .5s ease-in-out infinite}.maBb2{animation-delay:.25s}' +
    '@keyframes maFly{0%{transform:translate(-60px,10px)}100%{transform:translate(470px,-24px)}}.maFly{animation:maFly 12s linear infinite}' +
    '@keyframes maNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.maNote{animation:maNote 3s ease-out infinite}.maN2{animation-delay:1s}.maN3{animation-delay:2s}' +
    '@keyframes maTaxi{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.maTaxi{animation:maTaxi 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const busBullet = (x, y, txt) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 10) + '" width="34" height="20" rx="10" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* Puerto Rican flag: five red/white stripes, blue triangle, white star */
  const prFlag = (x, y, w, cls) => {
    const h = w * 0.66, sh = h / 5; let s = '<g' + (cls ? ' class="' + cls + '"' : '') + '>';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + (sh + 0.2) + '" fill="' + (i % 2 ? "#fff" : "#e4262f") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'L' + (x + w * 0.45) + ' ' + (y + h / 2) + 'L' + x + ' ' + (y + h) + 'z" fill="#0050f0"/>';
    const cx = x + w * 0.15, cy = y + h / 2, r = h * 0.16; let p = "";
    for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.42 : r; p += (k ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); }
    return s + '<path d="' + p + 'z" fill="#fff"/></g>';
  };
  const GOLD = "#ffe08a", RED = "#e63946", BLUE = "#3a86ff";

  /* A tan-brick high-rise with rows of windows (some lit), used for Metro North Plaza */
  const tower = (x, y, w, base, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="#b98a5e" stroke="#6e4a2c" stroke-width="2"/>' +
      '<rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="6" fill="#7a5434"/>';
    let i = seed || 0;
    for (let yy = y + 8; yy < base - 10; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 11) {
      i++; const lit = (i * 7) % 5 === 0;
      s += '<rect x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + (lit ? "#ffe39a" : "#3a2a24") + '"' + (lit ? ' class="maWin maW' + (1 + i % 3) + '"' : '') + '/>';
    }
    return s;
  };

  /* 1. The M15 pulling up to 1 Av & E 102 St at night, the Metro North Plaza towers behind the shelter */
  function mabus() {
    let wins = "";
    for (let x = 40; x < 240; x += 34) wins += '<rect x="' + x + '" y="140" width="26" height="24" rx="2" fill="#cfe3ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mag1)"/>' + stars(16) +
      '<circle cx="350" cy="34" r="14" fill="#fff4d6" opacity=".9"/>' +
      tower(18, 40, 90, 200, 1) + tower(126, 22, 96, 200, 3) + tower(296, 46, 88, 200, 5) +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2b33"/>' +
      '<rect x="0" y="198" width="400" height="6" fill="#8d8d96"/>' +
      '<path d="M0 236h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* bus shelter with the black name strip */
      '<rect x="252" y="112" width="120" height="6" fill="#56606b"/><rect x="254" y="118" width="4" height="82" fill="#56606b"/><rect x="366" y="118" width="4" height="82" fill="#56606b"/>' +
      '<rect x="258" y="122" width="108" height="64" fill="#a9d4ff" opacity=".18"/>' +
      '<rect x="248" y="86" width="128" height="26" rx="3" fill="#111"/><rect x="248" y="86" width="128" height="3" fill="#fff"/>' +
      '<text x="256" y="105" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">1 Av &amp; E 102 St</text>' +
      busBullet(352, 99, "M15") +
      /* the bus */
      '<g class="anim-train">' +
        '<rect x="20" y="128" width="236" height="66" rx="8" fill="#e9edf2" stroke="#7b8794" stroke-width="2"/>' +
        '<rect x="20" y="170" width="236" height="7" fill="#0039a6"/>' + wins +
        '<rect x="232" y="138" width="20" height="30" rx="3" fill="#cfe3ff" opacity=".9"/>' +
        '<rect x="34" y="131" width="60" height="7" rx="2" fill="#111"/><text x="64" y="137" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6.5" fill="#ffb300">M15 1 AV</text>' +
        '<circle cx="70" cy="196" r="11" fill="#1b1b1b"/><circle cx="70" cy="196" r="4" fill="#888"/><circle cx="210" cy="196" r="11" fill="#1b1b1b"/><circle cx="210" cy="196" r="4" fill="#888"/>' +
        '<circle cx="252" cy="182" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      tag("EL BARRIO", 18, 250, 24, GOLD, -3) + tag("MARC", 316, 252, 26, RED, -8),
      sky("mag1", "#0e0b24", "#3b2a6a"));
  }

  /* 2. Metro North Plaza, E 101-102 St between 1st and 2nd Av: the tan-brick towers he grew up in, a Puerto Rican flag hanging from a window */
  function maplaza() {
    let pigeons = "";
    for (let i = 0; i < 5; i++) pigeons += '<path d="M' + (i * 18) + ' ' + (36 + (i % 3) * 8) + 'q4-5 8 0q4-5 8 0" stroke="#2a2233" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mag2)"/>' +
      '<circle cx="330" cy="56" r="24" fill="#ffd27a" opacity=".9"/>' +
      tower(20, 70, 100, 214, 2) + tower(140, 34, 110, 214, 4) + tower(270, 60, 110, 214, 6) +
      prFlag(176, 96, 36, "maWave") + '<rect x="174" y="94" width="2" height="30" fill="#ddd"/>' +
      '<g class="maFly">' + pigeons + '</g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3b4a35"/>' +
      '<path d="M0 216h400" stroke="#a9b0a0" stroke-width="2"/>' +
      (function () { let t = ""; for (let x = 30; x < 400; x += 90) t += '<rect x="' + (x - 2) + '" y="196" width="4" height="22" fill="#4a3424"/><circle cx="' + x + '" cy="192" r="14" fill="#2f6b3a"/>'; return t; })() +
      '<rect x="110" y="230" width="180" height="22" rx="3" fill="#123a5c" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" textLength="160" lengthAdjust="spacingAndGlyphs" fill="#fff">METRO NORTH PLAZA</text>',
      sky("mag2", "#ff9d6b", "#7a4aa0"));
  }

  /* 3. Broadway, 1998 (comment only): the Marquis Theatre marquee in Times Square lit up for Paul Simon's "The Capeman", Marc's Broadway lead; chasing bulbs, a yellow cab rolling by */
  function macapeman() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 12) { bulbs += '<circle class="maChase' + ((x / 12) % 2 ? " maC2" : "") + '" cx="' + x + '" cy="92" r="2.6" fill="#fff3b0"/><circle class="maChase' + ((x / 12) % 2 ? "" : " maC2") + '" cx="' + x + '" cy="150" r="2.6" fill="#fff3b0"/>'; }
    let towers = "";
    [[0, 20, 60], [62, 0, 50], [300, 10, 46], [348, 30, 52]].forEach((t, k) => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="200" fill="#1c1838"/>';
      for (let yy = t[1] + 8; yy < 80; yy += 10) for (let xx = t[0] + 5; xx < t[0] + t[2] - 5; xx += 9) if ((xx + yy + k) % 3 === 0) towers += '<rect x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#ffd98a" class="maWin maW' + (1 + (xx % 3)) + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#mag3)"/>' + towers +
      /* billboards glowing (blank, no brands) */
      '<rect x="6" y="40" width="50" height="34" fill="#3a86ff" opacity=".55" class="maFlk"/><rect x="346" y="44" width="48" height="30" fill="#e63946" opacity=".55" class="maFlk maF2"/>' +
      '<rect x="56" y="80" width="288" height="80" fill="#2a1410" stroke="#c9a24a" stroke-width="3"/>' + bulbs +
      '<rect x="70" y="98" width="260" height="46" fill="#fff8e6"/>' +
      '<text x="200" y="118" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#7a1420" letter-spacing="2">THE CAPEMAN</text>' +
      '<text x="200" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#222">STARRING MARC ANTHONY</text>' +
      '<rect x="40" y="160" width="320" height="10" fill="#c9a24a"/>' +
      '<rect x="60" y="170" width="280" height="40" fill="#3a2418"/>' +
      '<rect x="80" y="176" width="40" height="34" fill="#ffd98a" opacity=".7"/><rect x="180" y="176" width="40" height="34" fill="#ffd98a" opacity=".7"/><rect x="280" y="176" width="40" height="34" fill="#ffd98a" opacity=".7"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#26262e"/><path d="M0 232h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="maTaxi"><rect x="0" y="214" width="70" height="20" rx="5" fill="#f7c600"/><rect x="12" y="206" width="40" height="12" rx="3" fill="#f7c600"/><rect x="16" y="208" width="14" height="8" fill="#9fc4e8"/><rect x="34" y="208" width="14" height="8" fill="#9fc4e8"/><circle cx="16" cy="236" r="6" fill="#111"/><circle cx="54" cy="236" r="6" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="2">BROADWAY · TIMES SQUARE</text>',
      sky("mag3", "#06051a", "#3a1f5a"));
  }

  /* 4. Salsa night: the band on the riser, timbales and congas, the brass section swaying, spotlights sweeping, notes floating up */
  function masalsa() {
    const horn = (x) => '<g class="maBob' + (x % 2 ? " maBb2" : "") + '"><rect x="' + (x - 6) + '" y="150" width="12" height="34" rx="5" fill="#1f1f2a"/><circle cx="' + x + '" cy="142" r="7" fill="#1f1f2a"/><path d="M' + (x + 4) + ' 156l22 -6v8l-22 0z" fill="#e8b84a"/><circle cx="' + (x + 27) + '" cy="154" r="5" fill="#e8b84a"/></g>';
    const conga = (x, h) => '<path d="M' + (x - 10) + ' ' + (206 - h) + 'h20l-4 ' + h + 'h-12z" fill="#a0522d" stroke="#5a2a12" stroke-width="2"/><ellipse cx="' + x + '" cy="' + (206 - h) + '" rx="10" ry="3.5" fill="#f2e6d0"/><path d="M' + (x - 9) + ' ' + (220 - h) + 'h18" stroke="#c9a24a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mag4)"/>' +
      '<path class="maBeam" d="M90 0l-40 200h80z" fill="#fff2b0" opacity=".14"/><path class="maBeam maB2" d="M310 0l-40 200h80z" fill="#9fd0ff" opacity=".14"/><path class="maBeam" d="M200 0l-30 200h60z" fill="#ff8fa0" opacity=".12"/>' +
      prFlag(20, 30, 70) + prFlag(310, 30, 70) +
      '<rect x="110" y="26" width="180" height="40" rx="6" fill="#120a1c" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="54" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="' + GOLD + '" letter-spacing="4" class="maFlk">¡SALSA!</text>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2a1410"/><rect x="0" y="204" width="400" height="5" fill="#c9a24a"/>' +
      horn(40) + horn(84) + horn(128) +
      /* timbales on a stand */
      '<rect x="196" y="176" width="4" height="30" fill="#999"/><ellipse cx="186" cy="174" rx="16" ry="5" fill="#d9d9e0" stroke="#888"/><rect x="170" y="174" width="32" height="10" fill="#c0c4cc"/><ellipse cx="214" cy="170" rx="14" ry="5" fill="#d9d9e0" stroke="#888"/><rect x="200" y="170" width="28" height="9" fill="#c0c4cc"/>' +
      '<ellipse cx="236" cy="150" rx="12" ry="3" fill="#e8b84a"/><rect x="235" y="150" width="2" height="26" fill="#999"/>' +
      conga(276, 46) + conga(300, 52) + conga(324, 46) +
      '<text class="maNote" x="250" y="140" font-size="18" fill="' + GOLD + '">♪</text><text class="maNote maN2" x="150" y="130" font-size="16" fill="#fff">♫</text><text class="maNote maN3" x="340" y="130" font-size="16" fill="' + BLUE + '">♪</text>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="#fff" letter-spacing="3">VOY A REÍR, VOY A BAILAR</text>',
      sky("mag4", "#1a0820", "#4a1030"));
  }

  /* 5. The corner: 1 Av & E 102 St, green street signs, the wall tagged MARC ANTHONY, the Metro North Plaza towers behind */
  function macorner() {
    const sign = (x, y, txt, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#mag5)"/>' + stars(10) +
      tower(250, 30, 70, 150, 7) + tower(326, 50, 70, 150, 9) +
      '<rect x="0" y="120" width="250" height="100" fill="#8a4a32"/>' +
      (function () { let b = ""; for (let y = 124; y < 220; y += 8) b += '<path d="M0 ' + y + 'h250" stroke="#6e3a26" stroke-width="1"/>'; return b; })() +
      tag("MARC ANTHONY", 18, 178, 34, GOLD, -5) + tag("¡ESO!", 150, 210, 22, RED, -3) + tag("MI GENTE", 18, 210, 18, BLUE, -2) +
      '<rect x="250" y="150" width="150" height="70" fill="#4a3a30"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b33"/><rect x="0" y="218" width="400" height="5" fill="#8d8d96"/>' +
      /* the pole + signs */
      '<rect x="296" y="66" width="6" height="156" fill="#3f4a44"/>' +
      sign(248, 66, "1 Av", 60) + sign(298, 90, "E 102 St", 92) +
      '<rect x="288" y="118" width="22" height="40" rx="3" fill="#222"/><circle class="maFlk" cx="299" cy="128" r="5" fill="#ff4d4d"/><circle cx="299" cy="140" r="5" fill="#553"/><circle cx="299" cy="151" r="5" fill="#353"/>' +
      prFlag(206, 128, 34, "maWave") + '<rect x="204" y="126" width="2" height="30" fill="#ddd"/>',
      sky("mag5", "#120d2a", "#4a2a6a"));
  }

  window.SCENES = { mabus, maplaza, macapeman, masalsa, macorner };
})();
