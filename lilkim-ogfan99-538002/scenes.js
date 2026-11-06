/* Lil' Kim game (NYC map, Brooklyn: Bed-Stuy). The J pulling into Gates Av on the Broadway el (Bed-Stuy side), Fulton Street where Biggie
   heard her rap on the block, Sarah J. Hale High School on Dean St (her high school), the "Lighters Up" night ("Welcome to Brooklyn"),
   and Gates Av & Broadway under the el. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-6px)}50%{transform:translate(28px,2px)}75%{transform:translate(12px,8px)}100%{transform:translate(0,0)}}.bee{animation:buzz 3s ease-in-out infinite}.bee2{animation-delay:-1.5s}' +
    '@keyframes flame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}.fl{transform-box:fill-box;transform-origin:50% 100%;animation:flame .5s ease-in-out infinite}.fl2{animation-delay:-.25s}' +
    '@keyframes wave{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.arm{transform-box:fill-box;transform-origin:50% 100%;animation:wave 1.6s ease-in-out infinite}.arm2{animation-delay:-.8s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flag{transform-box:fill-box;transform-origin:0% 50%;animation:flag 1.4s ease-in-out infinite}' +
    '@keyframes boom{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}.boom{transform-box:fill-box;transform-origin:50% 50%;animation:boom .45s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const JZ = "#996633", GOLD = "#f5c518", PINK = "#ff4fa3", PURPLE = "#9b5de5", CREAM = "#f4ead8";
  /* a little bee */
  const bee = (x, y, cls) => '<g class="bee ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="5" fill="' + GOLD + '" stroke="#111" stroke-width="1"/>' +
    '<path d="M' + (x - 2) + ' ' + (y - 5) + 'v10M' + (x + 2) + ' ' + (y - 5) + 'v10" stroke="#111" stroke-width="2"/>' +
    '<ellipse cx="' + (x - 2) + '" cy="' + (y - 7) + '" rx="4" ry="3" fill="#e8f4ff" opacity=".85"/><ellipse cx="' + (x + 3) + '" cy="' + (y - 7) + '" rx="4" ry="3" fill="#e8f4ff" opacity=".85"/></g>';
  /* the Broadway el: green steel deck with lattice and columns */
  const el = (y, h) => {
    let g = '<rect x="0" y="' + y + '" width="400" height="' + h + '" fill="#3f5a46"/>';
    for (let x = 0; x < 400; x += 16) g += '<path d="M' + x + ' ' + y + 'l8 ' + h + 'l8 -' + h + '" stroke="#2c4232" stroke-width="2" fill="none"/>';
    return g;
  };

  /* 1. Gates Av on the Broadway el: the J sliding in on the elevated platform, the black sign with the brown J and Z bullets */
  function gates() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) +
      [[10, 70], [70, 56], [300, 64], [350, 50]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="46" height="' + (170 - y) + '" fill="#2a2f45"/>').join("") +
      /* canopy */
      '<path d="M0 44h400v10H0z" fill="#5b4a3a"/><rect x="0" y="54" width="400" height="4" fill="#82705a"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="106" fill="#3f5a46"/>').join("") +
      '<rect x="80" y="66" width="230" height="30" rx="3" fill="#111"/><rect x="80" y="66" width="230" height="3" fill="#fff"/>' +
      '<text x="94" y="88" ' + font + ' font-size="15" fill="#fff">Gates Av</text>' + bullet(262, 81, "J", JZ) + bullet(288, 81, "Z", JZ) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "J", JZ) +
        '<rect x="6" y="138" width="300" height="4" fill="' + JZ + '" opacity=".8"/>' +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/>' + el(168, 18) +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="186" width="12" height="74" fill="#3f5a46"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/>' +
      '<g class="car"><rect x="0" y="242" width="40" height="13" rx="4" fill="' + PINK + '"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">BROADWAY</text>',
      sky("s1", "#2a1f4a", "#c0607a"));
  }

  /* 2. Fulton Street in Bed-Stuy: the shop row with awnings and the A/C globes, a boombox on the curb, bees buzzing (where Biggie heard her rap) */
  function fulton() {
    const shop = (x, w, aw, glass) => '<rect x="' + x + '" y="60" width="' + w + '" height="140" fill="' + glass + '"/>' +
      '<rect x="' + (x + 6) + '" y="70" width="' + (w - 12) + '" height="36" fill="#f3e6c9" opacity=".25"/>' +
      '<path d="M' + x + ' 116h' + w + 'l-8 18H' + (x + 8) + 'z" fill="' + aw + '"/>' +
      '<rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="52" fill="#ffe6a8" opacity=".85"/>' +
      '<path d="M' + (x + w / 2) + ' 140v52" stroke="#3a2a20" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      shop(0, 100, PINK, "#7a3a2c") + shop(100, 110, "#2b6cb0", "#8a4a32") + shop(210, 90, GOLD, "#6e3326") + shop(300, 100, "#2e7d4f", "#7f4030") +
      '<rect x="0" y="56" width="400" height="6" fill="#4a2a20"/>' +
      /* subway entrance globes */
      '<rect x="168" y="196" width="4" height="30" fill="#2f3a32"/><circle class="flk" cx="170" cy="192" r="6" fill="#6cbe45"/>' +
      '<rect x="0" y="200" width="400" height="28" fill="#a7a39a"/><rect x="0" y="226" width="400" height="34" fill="#55575c"/>' +
      /* boombox */
      '<g transform="translate(250 176)"><rect x="0" y="6" width="70" height="30" rx="4" fill="#222" stroke="#888" stroke-width="2"/><path d="M14 6q21-12 42 0" stroke="#888" stroke-width="3" fill="none"/>' +
      '<g class="boom"><circle cx="16" cy="21" r="9" fill="#444" stroke="#aaa" stroke-width="2"/></g><g class="boom"><circle cx="54" cy="21" r="9" fill="#444" stroke="#aaa" stroke-width="2"/></g><rect x="28" y="12" width="14" height="6" fill="' + GOLD + '"/></g>' +
      bee(80, 40, "") + bee(220, 30, "bee2") + bee(330, 44, "") +
      '<g class="car"><rect x="0" y="236" width="46" height="14" rx="4" fill="' + PURPLE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>' +
      '<text x="110" y="218" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" letter-spacing="4">FULTON STREET</text>',
      sky("s2", "#f08a5d", "#ffd3a1"));
  }

  /* 3. Sarah J. Hale High School on Dean St: the big brick school, rows of windows, the flag waving, the clock over the door */
  function hale() {
    let win = "";
    for (let r = 0; r < 4; r++) for (let x = 46; x < 354; x += 22) if (!(r === 3 && x > 168 && x < 232)) win += '<rect x="' + x + '" y="' + (70 + r * 30) + '" width="14" height="18" fill="#c9dcef" stroke="#e7dfcf" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<rect x="30" y="52" width="340" height="160" fill="#a5523a"/><rect x="30" y="52" width="340" height="8" fill="#e7dfcf"/>' + win +
      '<rect x="150" y="34" width="100" height="26" fill="#a5523a"/><rect x="150" y="34" width="100" height="5" fill="#e7dfcf"/>' +
      '<circle cx="200" cy="48" r="8" fill="' + CREAM + '" stroke="#3a2a20" stroke-width="1.5"/><path d="M200 48v-5M200 48l4 2" stroke="#3a2a20" stroke-width="1.5"/>' +
      /* entrance */
      '<rect x="172" y="160" width="56" height="52" fill="#3b2a24"/><path d="M172 160q28-24 56 0" fill="#e7dfcf"/><path d="M200 164v48" stroke="#a5523a" stroke-width="2"/>' +
      '<rect x="80" y="182" width="72" height="16" fill="' + CREAM + '"/><text x="116" y="194" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2a20">SARAH J. HALE</text>' +
      '<rect x="248" y="182" width="72" height="16" fill="' + CREAM + '"/><text x="284" y="194" text-anchor="middle" ' + font + ' font-size="7" fill="#3a2a20">HIGH SCHOOL</text>' +
      /* flag */
      '<rect x="340" y="10" width="3" height="56" fill="#ccc"/><g class="flag"><rect x="343" y="12" width="34" height="20" fill="#fff"/><rect x="343" y="12" width="34" height="3" fill="#c8102e"/><rect x="343" y="18" width="34" height="3" fill="#c8102e"/><rect x="343" y="24" width="34" height="3" fill="#c8102e"/><rect x="343" y="12" width="14" height="10" fill="#1d3f8f"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8f8b84"/><rect x="0" y="212" width="400" height="4" fill="#b8b4ac"/>' +
      '<g class="car"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      '<rect x="10" y="150" width="4" height="62" fill="#3d4b3f"/><rect x="0" y="140" width="56" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="28" y="150.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">Dean St</text>',
      sky("s3", "#79b3ea", "#e2efff"));
  }

  /* 4. Lighters Up night: the crowd with lighters flickering, the stage lights, the Brooklyn skyline behind, the WELCOME TO BROOKLYN banner */
  function lighters() {
    let crowd = "";
    for (let i = 0; i < 12; i++) {
      const x = 14 + i * 33, y = 206 + (i % 3) * 8, up = i % 2 === 0;
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="11" fill="#14101c"/><rect x="' + (x - 14) + '" y="' + (y + 8) + '" width="28" height="60" rx="8" fill="#14101c"/>';
      if (up) crowd += '<g class="arm' + (i % 4 ? "" : " arm2") + '"><path d="M' + (x + 8) + ' ' + (y + 6) + 'L' + (x + 14) + ' ' + (y - 34) + '" stroke="#14101c" stroke-width="6" stroke-linecap="round"/>' +
        '<rect x="' + (x + 11) + '" y="' + (y - 44) + '" width="6" height="10" rx="1" fill="#888"/><path class="fl' + (i % 4 ? "" : " fl2") + '" d="M' + (x + 14) + ' ' + (y - 58) + 'q-5 8 0 13q5-5 0-13z" fill="#ffb347"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(20) +
      [[0, 120, 40], [44, 100, 30], [80, 130, 36], [250, 110, 34], [290, 90, 26], [320, 124, 40], [364, 104, 36]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="#1f1a30"/>' +
        '<rect class="bl bl' + (x % 3 + 1) + '" x="' + (x + 8) + '" y="' + (y + 12) + '" width="5" height="5" fill="#ffd98a"/>').join("") +
      /* stage lights */
      '<path class="flk" d="M120 0L60 200h40z" fill="' + PINK + '" opacity=".18"/><path class="flk" d="M280 0L300 200h40z" fill="' + GOLD + '" opacity=".18"/>' +
      '<rect x="110" y="40" width="180" height="40" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">WELCOME TO</text>' +
      '<text x="200" y="75" text-anchor="middle" ' + font + ' font-size="15" fill="' + PINK + '" letter-spacing="3">BROOKLYN</text>' +
      crowd,
      sky("s4", "#0b0716", "#3a1f4a"));
  }

  /* 5. Gates Av & Broadway under the J: green street signs, the wall tagged LIL' KIM, bees, the el overhead with the train rolling */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) +
      '<g class="anim-train"><rect x="40" y="14" width="220" height="20" rx="3" fill="#c9ced6"/>' + bullet(248, 24, "J", JZ) + '</g>' +
      el(34, 16) + [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="50" width="10" height="90" fill="#3f5a46"/>').join("") +
      '<rect x="0" y="130" width="400" height="98" fill="#5a2e40"/>' +
      (() => { let b = ""; for (let y = 136; y < 228; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#47233a" stroke-width="1"/>'; return b; })() +
      tag("LIL' KIM", 18, 196, 44, GOLD, -5) + tag("QUEEN BEE", 196, 220, 20, PINK, -3) + tag("BLACK BARBIE", 20, 222, 15, CREAM, -2) +
      bee(150, 150, "") + bee(220, 164, "bee2") +
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="40" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="30" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="356" y="66" width="5" height="164" fill="#3d4b3f"/>' +
      '<rect x="300" y="70" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Gates Av</text>' +
      '<rect x="296" y="96" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="112" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Broadway</text>' +
      '<circle class="flk" cx="358" cy="64" r="4" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c2444"));
  }

  window.SCENES = { gates: gates, fulton: fulton, hale: hale, lighters: lighters, corner: corner };
})();
