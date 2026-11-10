/* modsun scenes (Regions tab: Minneapolis; born in Bloomington, MN, much of his childhood on a farm in Corcoran, MN,
   went to Jefferson High School in Bloomington where he started drumming in pop-punk bands (The Semester, then Four Letter Lie,
   Scary Kids Scaring Kids) before going solo as MOD SUN, "hippy hop", in 2009 — Wikipedia).
   CSS classes prefixed ms- (the page's own anim-train slides the train in).
   1 METRO Blue Line pulling into Mall of America station, the end of the line in Bloomington.
   2 The family farm in Corcoran: red barn, silo, corn rows, a windmill turning.
   3 Jefferson High School on W 102nd St in Bloomington: low brick school, flagpole, buses.
   4 The drum riser: a kit under a single bulb in a basement practice room, sticks hitting.
   5 W 102nd St & France Ave S: green signs, MOD SUN tagged, the Hyland Hills ski jumps behind under a big sun.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes msglow{0%,100%{opacity:.35}50%{opacity:1}}.ms-glow{animation:msglow 1.4s ease-in-out infinite}.ms-glow2{animation-delay:-.7s}' +
    '@keyframes msspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ms-spin{transform-box:fill-box;transform-origin:50% 50%;animation:msspin 5s linear infinite}' +
    '@keyframes msrays{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ms-rays{transform-box:fill-box;transform-origin:50% 50%;animation:msrays 30s linear infinite}' +
    '@keyframes mssway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ms-sway{transform-box:fill-box;transform-origin:50% 100%;animation:mssway 2.8s ease-in-out infinite}.ms-sway2{animation-delay:-1.4s}' +
    '@keyframes msstick{0%,100%{transform:rotate(0)}50%{transform:rotate(-24deg)}}.ms-stick{transform-box:fill-box;transform-origin:100% 100%;animation:msstick .35s ease-in-out infinite}.ms-stick2{animation-delay:-.17s;transform-origin:0 100%}' +
    '@keyframes mshit{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}.ms-hit{transform-box:fill-box;transform-origin:50% 50%;animation:mshit .35s ease-in-out infinite}' +
    '@keyframes msbus{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.ms-bus{animation:msbus 9s linear infinite}' +
    '@keyframes msflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.ms-flag{transform-box:fill-box;transform-origin:0 50%;animation:msflag 1.2s ease-in-out infinite}' +
    '@keyframes msspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ms-sp{animation:msspray 1.4s ease-out infinite}.ms-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const SUN = "#ffd23f", PINK = "#ff5fa2", SKY = "#6fd3ff", BLUE = "#0053a0";
  const sun = (cx, cy, r) => '<g><g class="ms-rays">' + Array.from({ length: 12 }, (_, i) => '<path transform="rotate(' + (i * 30) + ' ' + cx + ' ' + cy + ')" d="M' + (cx - 3) + ' ' + (cy - r - 4) + 'l3 -12l3 12z" fill="' + SUN + '"/>').join("") + '</g><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + SUN + '"/></g>';
  const pine = (x, base, h) => '<path d="M' + x + ' ' + (base - h) + 'l' + (h * .3) + ' ' + (h * .8) + 'h' + (-h * .6) + 'z" fill="#2f5a3a"/><rect x="' + (x - 2) + '" y="' + (base - h * .2) + '" width="4" height="' + (h * .2) + '" fill="#5a4030"/>';

  /* 1. METRO Blue Line into Mall of America station */
  function msstop() {
    const win = (x0) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (x0 + 12 + i * 30) + '" y="118" width="22" height="20" rx="3" fill="#1b2630"/>').join("");
    const car = (x0) => '<rect x="' + x0 + '" y="106" width="166" height="70" rx="6" fill="#e9ecef" stroke="#7d8388" stroke-width="2"/>' + win(x0) +
      '<rect x="' + x0 + '" y="146" width="166" height="10" fill="' + SUN + '"/><rect x="' + x0 + '" y="156" width="166" height="8" fill="' + BLUE + '"/>';
    const train = '<g class="anim-train">' + car(16) + car(186) + '<path d="M352 106h18q16 0 18 18v52h-36z" fill="#e9ecef" stroke="#7d8388" stroke-width="2"/><rect x="358" y="116" width="24" height="22" rx="3" fill="#1b2630"/>' +
      '<rect x="352" y="146" width="36" height="10" fill="' + SUN + '"/><rect x="352" y="156" width="36" height="8" fill="' + BLUE + '"/><circle cx="382" cy="168" r="3" fill="#fff6c2" class="ms-glow"/>' +
      [40, 150, 210, 320].map(x => '<circle cx="' + x + '" cy="180" r="7" fill="#222"/>').join("") +
      '<path d="M0 60h400" stroke="#333" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#3b3f47"/>' +
      /* transit center ceiling + columns */
      '<rect x="0" y="0" width="400" height="40" fill="#2a2d33"/>' +
      '<g class="ms-glow">' + [50, 150, 250, 350].map(x => '<rect x="' + (x - 24) + '" y="30" width="48" height="5" rx="2" fill="#fff4d6"/>').join("") + '</g>' +
      '<rect x="0" y="40" width="400" height="60" fill="#5b616b"/>' +
      [0, 100, 200, 300].map(x => '<rect x="' + (x + 44) + '" y="40" width="12" height="66" fill="#80868f"/>').join("") +
      '<rect x="0" y="56" width="400" height="4" fill="' + BLUE + '"/>' +
      /* catenary */
      '<path d="M0 98h400" stroke="#222" stroke-width="1.5"/>' +
      train +
      '<rect x="0" y="186" width="400" height="10" fill="#6c7078"/><rect x="0" y="196" width="400" height="36" fill="#b4b8bf"/><rect x="0" y="196" width="400" height="5" fill="' + SUN + '"/>' +
      '<rect x="98" y="204" width="204" height="24" rx="3" fill="#111"/>' +
      '<rect x="106" y="208" width="44" height="16" rx="8" fill="' + BLUE + '"/><text x="128" y="220" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLUE</text>' +
      '<text x="158" y="221" ' + font + ' font-size="12.5" fill="#fff">MALL OF AMERICA</text>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2a2d33"/>' +
      label(56, 288, "METRO BLUE LINE · MALL OF AMERICA · BLOOMINGTON, MN"));
  }

  /* 2. The family farm in Corcoran */
  function msfarm() {
    return svg(
      '<rect width="400" height="260" fill="url(#mss2)"/>' +
      sun(330, 48, 20) +
      '<path d="M0 140q100 -24 200 -6t200 -4v110h-400z" fill="#7fae5a"/>' +
      /* silo + barn */
      '<rect x="60" y="56" width="34" height="96" fill="#c9c3b6" stroke="#8a8478" stroke-width="2"/><path d="M60 56q17 -22 34 0z" fill="#9aa3a8"/>' +
      '<g stroke="#a8a294" stroke-width="1">' + [70, 84, 98, 112, 126, 140].map(y => '<path d="M60 ' + y + 'h34"/>').join("") + '</g>' +
      '<path d="M94 152v-56l46 -32l46 32v56z" fill="#b5312a" stroke="#6e1b16" stroke-width="2"/>' +
      '<path d="M94 96l46 -32l46 32" fill="none" stroke="#f2ede4" stroke-width="3"/>' +
      '<rect x="122" y="110" width="36" height="42" fill="#7a1f19" stroke="#f2ede4" stroke-width="3"/><path d="M122 110l36 42M158 110l-36 42" stroke="#f2ede4" stroke-width="2.5"/>' +
      '<rect x="132" y="82" width="16" height="14" fill="#f2ede4"/>' +
      /* windmill */
      '<path d="M268 152l10 -84h6l10 84z" fill="none" stroke="#6b6b6b" stroke-width="2.5"/><path d="M272 120h18M270 136h22" stroke="#6b6b6b" stroke-width="2"/>' +
      '<g class="ms-spin">' + Array.from({ length: 8 }, (_, i) => '<path transform="rotate(' + (i * 45) + ' 281 66)" d="M281 66l-3 -24h6z" fill="#d8d8d8" stroke="#777" stroke-width=".8"/>').join("") + '<circle cx="281" cy="66" r="3" fill="#555"/></g>' +
      '<path d="M286 64l20 -2l-2 6z" fill="#999"/>' +
      /* corn rows */
      '<g>' + Array.from({ length: 13 }, (_, i) => '<g class="ms-sway' + (i % 2 ? " ms-sway2" : "") + '"><path d="M' + (10 + i * 31) + ' 228v-58" stroke="#3f7a2a" stroke-width="3"/><path d="M' + (10 + i * 31) + ' 196q-14 -6 -18 -16M' + (10 + i * 31) + ' 186q14 -6 18 -16M' + (10 + i * 31) + ' 206q14 -4 18 -12" stroke="#5d9a3a" stroke-width="3" fill="none"/><ellipse cx="' + (14 + i * 31) + '" cy="192" rx="3" ry="7" fill="' + SUN + '"/></g>').join("") + '</g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#5c4632"/>' +
      label(100, 200, "THE FAMILY FARM · CORCORAN, MN"),
      sky("mss2", "#7cc6f2", "#e8f6ff"));
  }

  /* 3. Jefferson High School, Bloomington */
  function msschool() {
    const bus = '<g class="ms-bus"><rect x="0" y="176" width="110" height="34" rx="5" fill="#f2b705"/><rect x="0" y="196" width="110" height="3" fill="#222"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 18) + '" y="181" width="14" height="11" rx="1" fill="#1b2630"/>').join("") +
      '<circle cx="20" cy="212" r="7" fill="#222"/><circle cx="88" cy="212" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss3)"/>' +
      pine(20, 166, 70) + pine(380, 166, 64) + pine(354, 166, 50) +
      /* long low brick school */
      '<rect x="40" y="86" width="300" height="80" fill="#a85a3c" stroke="#6e3523" stroke-width="2"/>' +
      '<g stroke="#8e4a31" stroke-width=".8">' + Array.from({ length: 8 }, (_, i) => '<path d="M40 ' + (96 + i * 10) + 'h300"/>').join("") + '</g>' +
      '<rect x="36" y="80" width="308" height="8" fill="#e8e4dc"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 36) + '" y="100" width="24" height="26" fill="#cfe6f2" stroke="#e8e4dc" stroke-width="2"/>').join("") +
      '<rect x="160" y="128" width="60" height="38" fill="#3a4a5a" stroke="#e8e4dc" stroke-width="2"/><path d="M190 128v38" stroke="#e8e4dc" stroke-width="2"/>' +
      '<rect x="128" y="62" width="124" height="18" fill="#e8e4dc"/><text x="190" y="75" text-anchor="middle" ' + font + ' font-size="10" fill="#4a2a1c">JEFFERSON HIGH</text>' +
      /* flagpole */
      '<rect x="360" y="40" width="3" height="126" fill="#999"/><g class="ms-flag"><rect x="363" y="42" width="30" height="18" fill="#b22234"/><g fill="#fff">' + [45, 50, 55].map(y => '<rect x="363" y="' + y + '" width="30" height="2"/>').join("") + '</g><rect x="363" y="42" width="12" height="9" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="166" width="400" height="66" fill="#8a8d92"/><path d="M0 200h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="14 10"/>' +
      bus +
      '<rect x="0" y="232" width="400" height="28" fill="#5d7a4a"/>' +
      label(80, 240, "JEFFERSON HIGH · W 102ND ST · BLOOMINGTON"),
      sky("mss3", "#8fd0f7", "#eaf7ff"));
  }

  /* 4. The drum riser */
  function msdrums() {
    return svg(
      '<rect width="400" height="260" fill="#16141c"/>' +
      '<rect x="0" y="0" width="400" height="180" fill="#2a2633"/>' +
      '<g stroke="#221f29" stroke-width="2">' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 0v180"/>').join("") + '</g>' +
      /* posters */
      '<rect x="30" y="40" width="60" height="80" fill="' + PINK + '" transform="rotate(-4 60 80)"/><text x="60" y="78" text-anchor="middle" transform="rotate(-4 60 80)" ' + font + ' font-size="10" fill="#111">HIPPY</text><text x="60" y="92" text-anchor="middle" transform="rotate(-4 60 80)" ' + font + ' font-size="10" fill="#111">HOP</text>' +
      '<rect x="312" y="36" width="60" height="80" fill="' + SKY + '" transform="rotate(5 342 76)"/>' + sun(342, 74, 14) +
      /* bulb */
      '<path d="M200 0v34" stroke="#111" stroke-width="2"/><circle class="ms-glow" cx="200" cy="40" r="8" fill="#fff0b0"/><path d="M200 48l-90 132h180z" fill="#fff0b0" opacity=".08"/>' +
      /* riser */
      '<rect x="70" y="180" width="260" height="52" fill="#3a2d22" stroke="#21180f" stroke-width="2"/>' +
      /* kick drum */
      '<g class="ms-hit"><circle cx="200" cy="156" r="34" fill="#f2ede4" stroke="#222" stroke-width="5"/><circle cx="200" cy="156" r="14" fill="' + SUN + '" opacity=".9"/></g>' +
      /* toms */
      '<ellipse cx="170" cy="112" rx="18" ry="8" fill="#f2ede4" stroke="#222" stroke-width="3"/><rect x="152" y="112" width="36" height="16" fill="' + PINK + '"/>' +
      '<ellipse cx="230" cy="112" rx="18" ry="8" fill="#f2ede4" stroke="#222" stroke-width="3"/><rect x="212" y="112" width="36" height="16" fill="' + PINK + '"/>' +
      /* snare + floor tom */
      '<ellipse cx="128" cy="140" rx="22" ry="8" fill="#f2ede4" stroke="#222" stroke-width="3"/><rect x="106" y="140" width="44" height="14" fill="#bbb"/><path d="M128 154v26" stroke="#888" stroke-width="3"/>' +
      '<ellipse cx="276" cy="146" rx="24" ry="9" fill="#f2ede4" stroke="#222" stroke-width="3"/><rect x="252" y="146" width="48" height="30" fill="' + PINK + '"/>' +
      /* cymbals */
      '<path d="M96 90v90M320 80v100" stroke="#888" stroke-width="3"/>' +
      '<ellipse class="ms-glow2" cx="96" cy="88" rx="26" ry="5" fill="#d9b44a"/><ellipse cx="320" cy="78" rx="28" ry="5" fill="#d9b44a"/>' +
      /* sticks */
      '<g class="ms-stick"><path d="M110 112l30 20" stroke="#e8d2a8" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g class="ms-stick ms-stick2"><path d="M260 98l-26 18" stroke="#e8d2a8" stroke-width="4" stroke-linecap="round"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#0f0d14"/>' +
      label(70, 260, "THE DRUM RISER · WHERE THE DRUMMER BECAME MOD SUN"));
  }

  /* 5. W 102nd St & France Ave S, Hyland ski jumps behind */
  function mscorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
    const jump = (x, h, w) => '<path d="M' + x + ' 150l' + w + ' ' + (-h) + 'h10l' + (-w + 14) + ' ' + h + 'z" fill="#e8ecef" stroke="#8b939a" stroke-width="1.5"/>' +
      '<rect x="' + (x + w) + '" y="' + (150 - h - 14) + '" width="10" height="14" fill="#8b939a"/>' +
      '<g stroke="#8b939a" stroke-width="1">' + [.3, .55, .8].map(f => '<path d="M' + (x + w * f + 6) + ' ' + (150 - h * f) + 'v' + (h * f) + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss5)"/>' +
      sun(80, 56, 24) +
      '<path d="M0 150q90 -46 190 -40t210 10v30z" fill="#4f7d4a"/>' +
      jump(150, 78, 64) + jump(220, 58, 48) + jump(272, 38, 32) +
      pine(110, 150, 40) + pine(330, 150, 36) + pine(360, 150, 46) +
      /* wall */
      '<rect x="0" y="150" width="400" height="82" fill="#d8d1c6"/>' +
      '<g stroke="#c2b9ab" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (150 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("MOD SUN", 24, 214, 48, SUN, -5) +
      tag("HIPPY HOP", 250, 176, 16, PINK, 4) + tag("LOOK UP", 262, 222, 18, SKY, -3) +
      '<g fill="' + SUN + '" opacity=".75"><circle class="ms-sp" cx="216" cy="200" r="3"/><circle class="ms-sp ms-sp2" cx="224" cy="194" r="2.5"/><circle class="ms-sp" cx="220" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="80" width="5" height="152" fill="#7a7f86"/>' +
      sign(282, 70, 114, "W 102ND ST") + sign(282, 96, 114, "FRANCE AVE S") +
      label(20, 300, "W 102ND ST &amp; FRANCE AVE S · HYLAND SKI JUMPS"),
      sky("mss5", "#5fb8ec", "#ffe6b0"));
  }

  window.SCENES = { msstop, msfarm, msschool, msdrums, mscorner };
})();
