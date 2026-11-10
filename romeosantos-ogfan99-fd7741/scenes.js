/* Romeo Santos game (NYC map, the Bronx: Crotona / Crotona Park East, where he grew up on Vyse Av). Every 2/5 stop around Crotona
   (174 St, Freeman St, Simpson St, E 180 St) is already on the map and West Farms Square is Lil Tjay's room, so room 1 is the Bx21 bus
   stop at Boston Rd & Vyse Av. Then Crotona Pool (the 1936 WPA brick bathhouse), the Charlotte Gardens ranch houses off Charlotte St,
   a sold-out Estadio Olimpico Felix Sanchez in Santo Domingo, and the corner of Vyse Av & Boston Rd.
   Each scene is a small animated SVG, 400 x 260. CSS classes are prefixed "rs". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rsFlk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.rsFlk{animation:rsFlk 2.4s infinite}.rsF2{animation-delay:.8s}' +
    '@keyframes rsWin{0%,100%{opacity:.3}50%{opacity:1}}.rsWin{animation:rsWin 3s ease-in-out infinite}.rsW2{animation-delay:1s}.rsW3{animation-delay:2s}' +
    '@keyframes rsWave{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.rsWave{transform-box:fill-box;transform-origin:0 50%;animation:rsWave 1.4s ease-in-out infinite}' +
    '@keyframes rsRip{0%{transform:translateX(0)}100%{transform:translateX(-36px)}}.rsRip{animation:rsRip 3s linear infinite}' +
    '@keyframes rsSplash{0%,100%{transform:translateY(0);opacity:.9}50%{transform:translateY(-8px);opacity:.4}}.rsSplash{animation:rsSplash 1.1s ease-in-out infinite}.rsS2{animation-delay:.5s}' +
    '@keyframes rsBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.rsBeam{transform-box:fill-box;transform-origin:50% 0;animation:rsBeam 4s ease-in-out infinite}.rsB2{animation-delay:-2s}' +
    '@keyframes rsTw{0%,100%{opacity:.2}50%{opacity:1}}.rsTw{animation:rsTw 1.6s ease-in-out infinite}.rsT2{animation-delay:.5s}.rsT3{animation-delay:1.1s}' +
    '@keyframes rsFly{0%{transform:translate(-60px,10px)}100%{transform:translate(470px,-24px)}}.rsFly{animation:rsFly 12s linear infinite}' +
    '@keyframes rsSpr{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.rsSpr{transform-box:fill-box;transform-origin:50% 100%;animation:rsSpr 2.4s ease-in-out infinite}' +
    '@keyframes rsNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.rsNote{animation:rsNote 3s ease-out infinite}.rsN2{animation-delay:1.5s}' +
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
  /* Dominican flag: blue/red quarters split by a white cross, a tiny emblem square in the middle */
  const doFlag = (x, y, w, cls) => {
    const h = w * 0.64, c = w * 0.12;
    return '<g' + (cls ? ' class="' + cls + '"' : '') + '>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + x + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<rect x="' + (x + w / 2 - c * 0.4) + '" y="' + (y + h / 2 - c * 0.4) + '" width="' + c * 0.8 + '" height="' + c * 0.8 + '" fill="#3a7d3a"/></g>';
  };
  const GOLD = "#f2c14e", RED = "#d7263d", BLUE = "#4aa8ff";
  /* Bronx walk-up: brick face, cornice, fire escape, windows (some lit) */
  const walkup = (x, y, w, base, col, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="' + col + '"/><rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="' + (w + 4) + '" height="6" fill="#3a2a22"/>';
    let i = seed || 0;
    for (let yy = y + 10; yy < base - 14; yy += 18) for (let xx = x + 7; xx < x + w - 10; xx += 16) {
      i++; const lit = (i * 5) % 4 === 0;
      s += '<rect x="' + xx + '" y="' + yy + '" width="8" height="11" fill="' + (lit ? "#ffe39a" : "#2a2230") + '"' + (lit ? ' class="rsWin rsW' + (1 + i % 3) + '"' : '') + '/>';
    }
    s += '<path d="M' + (x + w * 0.3) + ' ' + (y + 14) + 'v' + (base - y - 30) + 'M' + (x + w * 0.7) + ' ' + (y + 14) + 'v' + (base - y - 30) + '" stroke="#1a1a1a" stroke-width="1.5"/>';
    for (let yy = y + 24; yy < base - 14; yy += 18) s += '<path d="M' + (x + w * 0.28) + ' ' + yy + 'h' + (w * 0.44) + '" stroke="#1a1a1a" stroke-width="2"/>';
    return s;
  };
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (col || "#2f6b3a") + '"/><circle cx="' + (x - r * 0.5) + '" cy="' + (y + 4) + '" r="' + r * 0.7 + '" fill="' + (col || "#2f6b3a") + '"/><circle cx="' + (x + r * 0.55) + '" cy="' + (y + 3) + '" r="' + r * 0.7 + '" fill="' + (col || "#2f6b3a") + '"/>';

  /* 1. The Bx21 pulling up to Boston Rd & Vyse Av at dusk, Crotona Park trees and walk-ups behind the shelter */
  function rsbus() {
    let wins = "";
    for (let x = 40; x < 240; x += 34) wins += '<rect x="' + x + '" y="140" width="26" height="24" rx="2" fill="#cfe3ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rsg1)"/>' + stars(12) +
      '<circle cx="60" cy="40" r="16" fill="#ffd9a0" opacity=".85"/>' +
      walkup(8, 70, 92, 200, "#9a4a34", 1) + walkup(108, 54, 80, 200, "#b8794a", 2) +
      tree(220, 120, 26, "#24502e") + tree(262, 112, 30, "#2f6b3a") + tree(330, 118, 28, "#24502e") + tree(380, 124, 24, "#2f6b3a") +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2b33"/><rect x="0" y="198" width="400" height="6" fill="#8d8d96"/>' +
      '<path d="M0 236h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="252" y="112" width="120" height="6" fill="#56606b"/><rect x="254" y="118" width="4" height="82" fill="#56606b"/><rect x="366" y="118" width="4" height="82" fill="#56606b"/>' +
      '<rect x="258" y="122" width="108" height="64" fill="#a9d4ff" opacity=".18"/>' +
      '<rect x="226" y="86" width="170" height="26" rx="3" fill="#111"/><rect x="226" y="86" width="170" height="3" fill="#fff"/>' +
      '<text x="232" y="105" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11.5" fill="#fff">Boston Rd &amp; Vyse Av</text>' +
      busBullet(374, 99, "Bx21") +
      '<g class="anim-train">' +
        '<rect x="20" y="128" width="236" height="66" rx="8" fill="#e9edf2" stroke="#7b8794" stroke-width="2"/>' +
        '<rect x="20" y="170" width="236" height="7" fill="#0039a6"/>' + wins +
        '<rect x="232" y="138" width="20" height="30" rx="3" fill="#cfe3ff" opacity=".9"/>' +
        '<rect x="30" y="131" width="80" height="7" rx="2" fill="#111"/><text x="70" y="137" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="6" fill="#ffb300">Bx21 WESTCHESTER SQ</text>' +
        '<circle cx="70" cy="196" r="11" fill="#1b1b1b"/><circle cx="70" cy="196" r="4" fill="#888"/><circle cx="210" cy="196" r="11" fill="#1b1b1b"/><circle cx="210" cy="196" r="4" fill="#888"/>' +
        '<circle cx="252" cy="182" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      tag("CROTONA", 16, 252, 24, GOLD, -3) + tag("ROMEO", 300, 252, 26, RED, -8),
      sky("rsg1", "#1a1036", "#e2735a"));
  }

  /* 2. Crotona Pool on a summer day: the 1936 WPA red-brick bathhouse with tall arched windows, the big blue pool, splashes, the lifeguard chair */
  function rspool() {
    let arches = "";
    for (let x = 70; x <= 310; x += 40) arches += '<path d="M' + x + ' 128v-30a10 10 0 0 1 20 0v30z" fill="#2c4a66"/><path d="M' + (x + 10) + ' 88v40" stroke="#cfd8e0" stroke-width="1"/>';
    let rip = "";
    for (let x = 0; x < 460; x += 36) rip += '<path d="M' + x + ' 186q9 -5 18 0t18 0" stroke="#d8f4ff" stroke-width="2" fill="none" opacity=".7"/><path d="M' + (x + 10) + ' 210q9 -5 18 0t18 0" stroke="#d8f4ff" stroke-width="2" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rsg2)"/>' +
      '<circle cx="350" cy="36" r="20" fill="#fff1a8"/>' +
      tree(20, 88, 26) + tree(386, 92, 24) +
      '<rect x="50" y="70" width="300" height="78" fill="#a8452f" stroke="#6e2a1c" stroke-width="2"/>' +
      '<rect x="44" y="64" width="312" height="8" fill="#d9c9a8"/><rect x="170" y="40" width="60" height="30" fill="#a8452f" stroke="#6e2a1c" stroke-width="2"/><rect x="166" y="36" width="68" height="6" fill="#d9c9a8"/>' +
      '<text x="200" y="62" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#f5ead2" letter-spacing="2">1936</text>' +
      arches +
      '<rect x="130" y="132" width="140" height="14" fill="#123a5c" stroke="#fff" stroke-width="1"/>' +
      '<text x="200" y="143" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="3" fill="#fff">CROTONA POOL</text>' +
      '<rect x="0" y="148" width="400" height="14" fill="#e8e2d2"/>' +
      '<rect x="0" y="162" width="400" height="80" fill="#2a9fd6"/>' +
      '<g class="rsRip">' + rip + '</g>' +
      '<path d="M0 182h400M0 206h400M0 230h400" stroke="#ffffff" stroke-width="1" stroke-dasharray="6 6" opacity=".5"/>' +
      '<g class="rsSplash"><circle cx="110" cy="196" r="5" fill="#6a4030"/><path d="M100 192l-6 -6M120 192l6 -6" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="rsSplash rsS2"><circle cx="250" cy="218" r="5" fill="#3a2418"/><path d="M240 214l-6 -6M260 214l6 -6" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="rsSplash"><circle cx="320" cy="192" r="5" fill="#8a5a3a"/><circle cx="330" cy="186" r="2" fill="#fff"/></g>' +
      '<rect x="356" y="128" width="4" height="36" fill="#fff"/><rect x="376" y="128" width="4" height="36" fill="#fff"/><rect x="352" y="126" width="32" height="6" fill="#d7263d"/>' +
      '<rect x="0" y="242" width="400" height="18" fill="#e8e2d2"/>',
      sky("rsg2", "#4aa8ff", "#bfe6ff"));
  }

  /* 3. Charlotte Gardens, off Charlotte St in Crotona Park East: the little ranch houses with white picket fences and lawns, a sprinkler going */
  function rscharlotte() {
    const ranch = (x, col, roof, n) => '<rect x="' + x + '" y="132" width="96" height="52" fill="' + col + '" stroke="#5a4a3a" stroke-width="1.5"/>' +
      '<path d="M' + (x - 8) + ' 134l56 -28 56 28z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 12) + '" y="144" width="20" height="16" fill="#cfe3ff" stroke="#fff" stroke-width="2"/><rect x="' + (x + 62) + '" y="144" width="20" height="16" fill="#cfe3ff" stroke="#fff" stroke-width="2"/>' +
      '<rect x="' + (x + 40) + '" y="152" width="16" height="32" fill="#7a4a2a"/><circle cx="' + (x + 53) + '" cy="168" r="1.5" fill="' + GOLD + '"/>' +
      '<rect x="' + (x + 34) + '" y="184" width="28" height="4" fill="#bbb"/>';
    let fence = "";
    for (let x = 0; x < 400; x += 8) fence += '<path d="M' + x + ' 206v-14l3 -4 3 4v14z" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rsg3)"/>' +
      '<g class="rsFly"><path d="M0 40q5-6 10 0q5-6 10 0" stroke="#2a2233" stroke-width="2" fill="none"/><path d="M26 30q4-5 8 0q4-5 8 0" stroke="#2a2233" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="70" width="70" height="120" fill="#9a8a7a" opacity=".55"/><rect x="330" y="60" width="70" height="130" fill="#9a8a7a" opacity=".55"/>' +
      ranch(14, "#f4e3b5", "#7a3a2a", 1) + ranch(150, "#cfe6d6", "#3a4a6a", 2) + ranch(286, "#f2c9c0", "#5a3a2a", 3) +
      '<rect x="0" y="184" width="400" height="76" fill="#5aa04a"/>' +
      fence + '<rect x="0" y="196" width="400" height="3" fill="#fff"/>' +
      doFlag(118, 112, 20, "rsWave") + '<rect x="116" y="110" width="2" height="74" fill="#ddd"/>' +
      '<g transform="translate(230 226)"><g class="rsSpr"><path d="M0 0l0 -6" stroke="#666" stroke-width="3"/><path d="M0 -6q-20 -24 -40 -6M0 -6q20 -24 40 -6M0 -6v-26" stroke="#bfe9ff" stroke-width="2" fill="none" stroke-dasharray="3 3"/></g></g>' +
      '<rect x="0" y="240" width="400" height="20" fill="#8d8d96"/>' +
      '<rect x="20" y="222" width="110" height="18" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="75" y="235" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Charlotte St</text>',
      sky("rsg3", "#8fd0ff", "#fff3d6"));
  }

  /* 4. Estadio Olimpico Felix Sanchez in Santo Domingo, sold out: the bowl of stands full of phone lights, the stage with a gold crown on the screen, Dominican flags waving */
  function rsestadio() {
    let lights = "";
    for (let i = 0; i < 90; i++) {
      const x = (i * 37) % 400, y = 96 + ((i * 23) % 70);
      lights += '<circle class="rsTw rsT' + (1 + i % 3) + '" cx="' + x + '" cy="' + y + '" r="1.4" fill="#fff6c2"/>';
    }
    let floor = "";
    for (let i = 0; i < 46; i++) floor += '<circle cx="' + (((i * 53) % 400) + 4) + '" cy="' + (214 + (i * 7) % 30) + '" r="5" fill="#1a1020"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rsg4)"/>' + stars(18) +
      '<path d="M0 90q200 -40 400 0v100h-400z" fill="#2a2440"/>' +
      '<path d="M0 90q200 -40 400 0" stroke="#7a86a8" stroke-width="3" fill="none"/>' +
      '<rect x="20" y="40" width="4" height="56" fill="#888"/><rect x="10" y="30" width="24" height="12" fill="#fff9d0" class="rsFlk"/>' +
      '<rect x="376" y="40" width="4" height="56" fill="#888"/><rect x="366" y="30" width="24" height="12" fill="#fff9d0" class="rsFlk rsF2"/>' +
      lights +
      '<path class="rsBeam" d="M120 120l-40 130h80z" fill="#f2c14e" opacity=".16"/><path class="rsBeam rsB2" d="M280 120l-40 130h80z" fill="#4aa8ff" opacity=".16"/>' +
      '<rect x="120" y="128" width="160" height="76" fill="#120a14" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="146" y="136" width="108" height="50" fill="#1e1430"/>' +
      '<path d="M170 176l4 -26 13 14 13 -22 13 22 13 -14 4 26z" fill="' + GOLD + '" stroke="#a07a1a" stroke-width="1.5" class="rsFlk"/>' +
      '<rect x="120" y="200" width="160" height="8" fill="#3a2a40"/>' +
      doFlag(40, 150, 36, "rsWave") + '<rect x="38" y="148" width="2" height="60" fill="#ddd"/>' +
      doFlag(326, 150, 36, "rsWave") + '<rect x="324" y="148" width="2" height="60" fill="#ddd"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#2a1a34"/>' + floor +
      '<text class="rsNote" x="90" y="200" font-size="18" fill="' + GOLD + '">♪</text><text class="rsNote rsN2" x="300" y="196" font-size="16" fill="#fff">♫</text>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="3">SANTO DOMINGO · SOLD OUT</text>',
      sky("rsg4", "#05041a", "#2a1440"));
  }

  /* 5. The corner: Vyse Av & Boston Rd, green street signs, the wall tagged ROMEO, Crotona Park's trees and the walk-ups behind */
  function rscorner() {
    const sign = (x, y, txt, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#rsg5)"/>' + stars(10) +
      tree(270, 96, 30, "#1f4a2a") + tree(330, 90, 34, "#24502e") + tree(388, 100, 28, "#1f4a2a") +
      walkup(250, 110, 150, 160, "#8a3a2a", 4) +
      '<rect x="0" y="120" width="250" height="100" fill="#7a3a2a"/>' +
      (function () { let b = ""; for (let y = 124; y < 220; y += 8) b += '<path d="M0 ' + y + 'h250" stroke="#5e2a1e" stroke-width="1"/>'; return b; })() +
      tag("ROMEO", 18, 172, 34, GOLD, -5) + tag("THE KING", 128, 160, 18, "#fff", -3) + tag("LLORA GUITARRA", 14, 210, 18, BLUE, -2) +
      '<rect x="250" y="160" width="150" height="60" fill="#3a2a30"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b33"/><rect x="0" y="218" width="400" height="5" fill="#8d8d96"/>' +
      '<rect x="296" y="66" width="6" height="156" fill="#3f4a44"/>' +
      sign(246, 66, "Vyse Av", 66) + sign(298, 90, "Boston Rd", 98) +
      '<rect x="288" y="118" width="22" height="40" rx="3" fill="#222"/><circle class="rsFlk" cx="299" cy="128" r="5" fill="#ff4d4d"/><circle cx="299" cy="140" r="5" fill="#553"/><circle cx="299" cy="151" r="5" fill="#353"/>' +
      doFlag(338, 170, 32, "rsWave") + '<rect x="336" y="168" width="2" height="44" fill="#ddd"/>',
      sky("rsg5", "#120a1e", "#5a2a3a"));
  }

  window.SCENES = { rsbus, rspool, rscharlotte, rsestadio, rscorner };
})();
