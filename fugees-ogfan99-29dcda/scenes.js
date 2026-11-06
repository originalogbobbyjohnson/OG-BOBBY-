/* Fugees game: Maplewood, NJ. 1. NJ Transit Morris & Essex train at Maplewood station, 2. Columbia High School (where Pras and Lauryn met and the group began),
   3. the Rooftop at Pier 17, South Street Seaport (the Sept 2021 surprise reunion show), 4. the Great Lawn in Central Park
   (Global Citizen Live, Sept 2021, Belvedere Castle), 5. Parker Ave & Valley St by the school, FUGEES tagged. Each scene 400 x 260. All CSS classes prefixed fg-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fgdrift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fg-cld{animation:fgdrift 32s linear infinite}.fg-cld2{animation-delay:-16s}' +
    '@keyframes fgcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.fg-car{animation:fgcar 7s linear infinite}' +
    '@keyframes fgbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.fg-bob{animation:fgbob .9s ease-in-out infinite}.fg-bob2{animation-delay:-.45s}' +
        '@keyframes fgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.fg-flag{transform-box:fill-box;transform-origin:0 50%;animation:fgflag 1.6s ease-in-out infinite}' +
    '@keyframes fgrain{from{transform:translateY(-30px)}to{transform:translateY(40px)}}.fg-rain{animation:fgrain .6s linear infinite}.fg-rain2{animation-delay:-.3s}' +
    '@keyframes fgbeam{0%,100%{opacity:.12}50%{opacity:.6}}.fg-beam{animation:fgbeam 2.6s ease-in-out infinite}.fg-beam2{animation-delay:-1.3s}' +
    '@keyframes fgtw{0%,100%{opacity:.25}50%{opacity:1}}.fg-tw{animation:fgtw 2s ease-in-out infinite}.fg-tw2{animation-delay:-.8s}' +
    '@keyframes fgwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.fg-walk{animation:fgwalk 14s linear infinite}.fg-walk2{animation-delay:-7s}' +
    '@keyframes fgsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.fg-sway{transform-box:fill-box;transform-origin:50% 100%;animation:fgsway 3.4s ease-in-out infinite}' +
    '@keyframes fgpulse{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.fg-eq{transform-box:fill-box;transform-origin:50% 100%;animation:fgpulse .5s ease-in-out infinite}.fg-eq2{animation-delay:-.2s}.fg-eq3{animation-delay:-.35s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="fg-tw' + (i % 2 ? " fg-tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const bricks = (id, c) => '<pattern id="' + id + '" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v5M0 5h20M0 5v5M20 5v5" stroke="' + c + '" stroke-width="1"/></pattern>';
  const cloud = (x, y, s, cls) => '<g class="fg-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const tree = (x, y, s, c) => '<g class="fg-sway"><rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (18 * s) + '" fill="#5a3a24"/><circle cx="' + x + '" cy="' + (y - 12 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 6 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 6 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/></g>';
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 14) + '" r="4" fill="#1a1410"/><rect x="' + (x - 4) + '" y="' + (y - 10) + '" width="8" height="12" rx="3" fill="' + c + '"/>';
  const RED = "#ff5a36", GREEN = "#2fb37a", GOLD = "#ffc94a", CREAM = "#f7f3ea", NJBLUE = "#1a4fa0", NJORG = "#f26722", NJMAG = "#a6206a";

  /* 1. NJ Transit Morris & Essex train pulling into Maplewood station: at-grade platform, little brick depot, big leafy trees */
  function station() {
    let wins = "";
    for (let x = 24; x < 300; x += 36) wins += '<rect x="' + x + '" y="114" width="22" height="18" rx="2" fill="#2a3a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fg1)"/>' + cloud(70, 34, 1) + cloud(280, 46, .8, "fg-cld2") +
      tree(30, 96, 1.6, "#3f8a3a") + tree(110, 92, 1.4, "#4f9a42") + tree(372, 96, 1.6, "#3f8a3a") +
      /* brick depot with hipped roof */
      '<rect x="190" y="58" width="120" height="44" fill="#9c4a33"/><rect x="190" y="58" width="120" height="44" fill="url(#fg1b)" opacity=".4"/>' +
      '<path d="M180 60l20-20h100l20 20z" fill="#5a3a30"/><rect x="214" y="70" width="14" height="22" fill="#3a2418"/><rect x="242" y="70" width="14" height="22" fill="#ffe7a8"/><rect x="270" y="70" width="14" height="22" fill="#3a2418"/>' +
      /* blue station sign with stripes */
      '<rect x="40" y="56" width="134" height="32" rx="4" fill="' + NJBLUE + '"/><rect x="40" y="80" width="134" height="4" fill="' + NJORG + '"/><rect x="40" y="84" width="134" height="4" fill="' + NJMAG + '"/>' +
      T(107, 76, 16, "#fff", "Maplewood", ' text-anchor="middle"') + '<rect x="58" y="88" width="4" height="22" fill="#777"/><rect x="152" y="88" width="4" height="22" fill="#777"/>' +
      /* train */
      '<g class="anim-train"><rect x="6" y="102" width="320" height="56" rx="6" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/>' + wins +
      '<rect x="6" y="138" width="320" height="4" fill="' + NJORG + '"/><rect x="6" y="142" width="320" height="4" fill="' + NJMAG + '"/><rect x="6" y="146" width="320" height="4" fill="' + NJBLUE + '"/>' +
      '<rect x="300" y="110" width="22" height="30" rx="3" fill="#2a3a4a"/><circle cx="318" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* low platform + rails */
      '<rect x="0" y="162" width="400" height="18" fill="#9a958a"/><rect x="0" y="162" width="400" height="4" fill="#f2d24b"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5a544a"/><g fill="#3a3630">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="180" width="10" height="80"/>').join("") + '</g>' +
      '<rect x="0" y="196" width="400" height="4" fill="#b8b2a6"/><rect x="0" y="236" width="400" height="4" fill="#b8b2a6"/>' +
      '<g class="fg-walk">' + person(0, 162, RED) + '</g>' +
      tag("FUGEES", 124, 228, 28, RED, -4),
      sky("fg1", "#5aa0e0", "#d8ecf8") + bricks("fg1b", "#5a2418"));
  }

  /* 2. Columbia High School: long red-brick facade with white stone trim, the six-story clock tower with the observatory dome on top */
  function school() {
    let wl = "";
    for (let x = 18; x < 390; x += 26) { if (x > 160 && x < 230) continue; wl += '<rect x="' + x + '" y="138" width="14" height="20" fill="#2c3a4a" stroke="#f1ead8" stroke-width="2"/><rect x="' + x + '" y="172" width="14" height="20" fill="#2c3a4a" stroke="#f1ead8" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#fg2)"/>' + cloud(60, 30, 1) + cloud(300, 44, .8, "fg-cld2") +
      /* wings */
      '<rect x="6" y="124" width="388" height="84" fill="#9b3b2c"/><rect x="6" y="124" width="388" height="84" fill="url(#fg2b)" opacity=".35"/>' +
      '<rect x="6" y="118" width="388" height="8" fill="#f1ead8"/><rect x="6" y="160" width="388" height="4" fill="#f1ead8"/>' + wl +
      /* tower */
      '<rect x="166" y="40" width="68" height="168" fill="#9b3b2c"/><rect x="166" y="40" width="68" height="168" fill="url(#fg2b)" opacity=".35"/>' +
      '<rect x="162" y="36" width="76" height="8" fill="#f1ead8"/><rect x="162" y="96" width="76" height="6" fill="#f1ead8"/>' +
      '<rect x="174" y="20" width="52" height="18" fill="#f1ead8"/><path d="M178 20a22 18 0 0 1 44 0z" fill="#c9ccd2" stroke="#7a7f88" stroke-width="1.5"/><rect x="198" y="2" width="4" height="10" fill="#7a7f88"/>' +
      '<rect x="196" y="6" width="8" height="12" fill="#3a4250" opacity=".7"/>' +
      '<circle cx="200" cy="70" r="18" fill="#f7f3ea" stroke="#2a2a2a" stroke-width="2.5"/>' +
      '<path d="M200 70V56" stroke="#222" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 200 70" to="360 200 70" dur="12s" repeatCount="indefinite"/></path><path d="M200 70h9" stroke="#222" stroke-width="3" stroke-linecap="round"/><circle cx="200" cy="70" r="2" fill="#222"/>' +
      '<rect x="182" y="112" width="12" height="22" fill="#2c3a4a" stroke="#f1ead8" stroke-width="2"/><rect x="206" y="112" width="12" height="22" fill="#2c3a4a" stroke="#f1ead8" stroke-width="2"/>' +
      '<path d="M184 208v-36a16 16 0 0 1 32 0v36z" fill="#3a2418" stroke="#f1ead8" stroke-width="3"/>' +
      /* flag */
      '<rect x="40" y="70" width="3" height="56" fill="#ccc"/><g class="fg-flag"><rect x="43" y="72" width="30" height="18" fill="#c8102e"/><rect x="43" y="76" width="30" height="3" fill="#fff"/><rect x="43" y="82" width="30" height="3" fill="#fff"/><rect x="43" y="72" width="12" height="9" fill="#1f3a8a"/></g>' +
      /* lawn + walk + name sign */
      '<rect x="0" y="208" width="400" height="52" fill="#4f9a42"/><path d="M186 208L150 260h100l-36-52z" fill="#d8d0bc"/>' +
      '<rect x="262" y="220" width="130" height="26" rx="3" fill="#1a1410" stroke="' + GOLD + '" stroke-width="2"/>' + T(327, 237, 9.5, GOLD, "COLUMBIA HIGH SCHOOL", ' text-anchor="middle"') +
      '<g class="fg-walk">' + person(0, 236, RED) + '</g><g class="fg-walk fg-walk2">' + person(0, 246, GREEN) + '</g>',
      sky("fg2", "#6fb0ea", "#e4f2fb") + bricks("fg2b", "#5a1e14"));
  }

  /* 3. The Rooftop at Pier 17, South Street Seaport: the Sept 2021 surprise show, first in 15 years. Glass pier building, rooftop stage,
     the East River, the old Seaport tall ship masts, the far shore lights. */
  function pier() {
    let crowd = "";
    for (let i = 0; i < 22; i++) crowd += '<g class="fg-bob' + (i % 2 ? " fg-bob2" : "") + '"><circle cx="' + (8 + i * 18) + '" cy="' + (150 + (i % 3) * 4) + '" r="6" fill="#0c0a08"/><rect x="' + (2 + i * 18) + '" y="' + (155 + (i % 3) * 4) + '" width="12" height="16" rx="4" fill="#0c0a08"/></g>';
    let shore = "";
    for (let i = 0; i < 20; i++) shore += '<rect x="' + (i * 20) + '" y="' + (84 - (i * 7) % 18) + '" width="16" height="' + (12 + (i * 7) % 18) + '" fill="#1a2236"/><rect class="fg-tw' + (i % 2 ? " fg-tw2" : "") + '" x="' + (i * 20 + 5) + '" y="' + (88 - (i * 7) % 14) + '" width="3" height="3" fill="#ffe7a8"/>';
    let water = "";
    for (let i = 0; i < 14; i++) water += '<rect class="fg-tw' + (i % 2 ? " fg-tw2" : "") + '" x="' + ((i * 61) % 380) + '" y="' + (104 + (i * 13) % 26) + '" width="' + (10 + (i * 7) % 14) + '" height="1.5" fill="#ffd98a" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fg3)"/>' + stars(14) + shore +
      '<rect x="0" y="96" width="400" height="44" fill="#16304a"/>' + water +
      /* tall ship masts and rigging at the old seaport */
      '<path d="M20 130h90l-8 10H28z" fill="#3a2418"/><path d="M40 130V40M66 130V34M92 130V48" stroke="#5a3a24" stroke-width="2.5"/>' +
      '<path d="M40 40L66 34L92 48M40 60h-12M40 60h12M66 56h-14M66 56h14M92 66h-10M92 66h10M40 40L20 130M92 48l18 82" stroke="#8a6a4a" stroke-width="1" fill="none"/>' +
      /* glass pier building + rooftop */
      '<rect x="120" y="150" width="280" height="110" fill="#2a4a62"/><g fill="#7fb6d6" opacity=".55">' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (126 + i * 21) + '" y="186" width="16" height="64"/>').join("") + '</g>' +
      '<rect x="0" y="170" width="400" height="16" fill="#d8d0bc"/><rect x="0" y="186" width="120" height="74" fill="#4a3a30"/><rect x="0" y="186" width="120" height="6" fill="#2a1e18"/>' +
      /* stage */
      '<rect x="210" y="112" width="170" height="44" fill="#141414"/><path d="M200 112h190l-8-14H208z" fill="#2a2a2a"/>' +
      '<g fill="' + GOLD + '"><rect class="fg-eq" x="240" y="128" width="9" height="24"/><rect class="fg-eq fg-eq2" x="256" y="122" width="9" height="30"/><rect class="fg-eq fg-eq3" x="272" y="130" width="9" height="22"/><rect class="fg-eq fg-eq2" x="288" y="124" width="9" height="28"/><rect class="fg-eq" x="304" y="132" width="9" height="20"/><rect class="fg-eq fg-eq3" x="320" y="126" width="9" height="26"/><rect class="fg-eq fg-eq2" x="336" y="130" width="9" height="22"/></g>' +
      '<path class="fg-beam" d="M230 98L180 0h18z" fill="#fff6c2"/><path class="fg-beam fg-beam2" d="M360 98L392 0h-18z" fill="#fff6c2"/>' +
      crowd +
      '<rect x="150" y="208" width="200" height="22" rx="3" fill="#1a1410" stroke="' + GOLD + '" stroke-width="1.5"/>' + T(250, 223, 10, GOLD, "PIER 17 · SOUTH STREET SEAPORT", ' text-anchor="middle"') +
      tag("THE SCORE", 8, 232, 17, RED, -5),
      sky("fg3", "#0a1024", "#2a2a52"));
  }

  /* 4. The Great Lawn, Central Park: the 2021 reunion night, Belvedere Castle on Vista Rock, the Midtown skyline behind, light beams over the crowd */
  function greatlawn() {
    let city = "";
    const hs = [70, 96, 60, 120, 84, 140, 74, 104, 66, 90, 112, 58];
    hs.forEach((h, i) => { city += '<rect x="' + (i * 34) + '" y="' + (150 - h) + '" width="30" height="' + h + '" fill="#1c2340"/>'; for (let y = 156 - h; y < 140; y += 10) city += '<rect x="' + (i * 34 + 6) + '" y="' + y + '" width="4" height="4" fill="#ffe7a8" opacity=".7"/><rect x="' + (i * 34 + 18) + '" y="' + y + '" width="4" height="4" fill="#ffe7a8" opacity=".4"/>'; });
    let crowd = "";
    for (let i = 0; i < 26; i++) crowd += '<g class="fg-bob' + (i % 2 ? " fg-bob2" : "") + '"><circle cx="' + (6 + i * 15.5) + '" cy="' + (232 + (i % 2) * 6) + '" r="6" fill="#0c0a08"/><rect x="' + (i * 15.5) + '" y="' + (237 + (i % 2) * 6) + '" width="12" height="26" rx="4" fill="#0c0a08"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fg4)"/>' + stars(16) + city +
      /* park trees */
      '<path d="M0 156q40-22 80-6t80-4t80 6t80-8t80 4v30H0z" fill="#1f4a2a"/>' +
      /* Belvedere Castle: gray schist, square tower with turret */
      '<path d="M18 168l10-30h70l12 30z" fill="#4a4a46"/>' +
      '<rect x="34" y="100" width="34" height="40" fill="#8f8e86"/><g fill="#8f8e86"><rect x="32" y="94" width="6" height="8"/><rect x="42" y="94" width="6" height="8"/><rect x="52" y="94" width="6" height="8"/><rect x="62" y="94" width="6" height="8"/></g>' +
      '<rect x="68" y="112" width="26" height="28" fill="#85847c"/><rect x="74" y="88" width="14" height="26" fill="#8f8e86"/><path d="M72 88l9-14 9 14z" fill="#5a5a56"/><rect x="80" y="64" width="2" height="12" fill="#ccc"/><g class="fg-flag"><rect x="82" y="64" width="12" height="7" fill="' + GOLD + '"/></g>' +
      '<rect x="44" y="114" width="6" height="12" fill="#ffe7a8"/><rect x="78" y="118" width="5" height="10" fill="#ffe7a8"/>' +
      /* lawn + stage */
      '<rect x="0" y="176" width="400" height="84" fill="#2e6a34"/>' +
      '<path class="fg-beam" d="M220 150L170 0h20z" fill="#fff6c2"/><path class="fg-beam fg-beam2" d="M330 150L380 0h-20z" fill="#fff6c2"/><path class="fg-beam fg-beam2" d="M276 150L276 0h14z" fill="' + RED + '" opacity=".5"/>' +
      '<rect x="190" y="146" width="186" height="58" fill="#141414"/><path d="M182 146h202l-10-16H192z" fill="#2a2a2a"/>' +
      '<rect x="206" y="160" width="152" height="34" fill="#20283a"/><g fill="' + GREEN + '"><rect class="fg-eq" x="230" y="172" width="10" height="20"/><rect class="fg-eq fg-eq2" x="250" y="166" width="10" height="26"/><rect class="fg-eq fg-eq3" x="270" y="170" width="10" height="22"/><rect class="fg-eq" x="290" y="164" width="10" height="28"/><rect class="fg-eq fg-eq2" x="310" y="170" width="10" height="22"/><rect class="fg-eq fg-eq3" x="330" y="174" width="10" height="18"/></g>' +
      '<rect x="96" y="198" width="208" height="18" rx="3" fill="#1a1410" stroke="' + GOLD + '" stroke-width="1.5"/>' + T(200, 211, 9, GOLD, "THE GREAT LAWN · REUNION 2021", ' text-anchor="middle"') +
      crowd,
      sky("fg4", "#0c1430", "#3a2a5a"));
  }

  /* 5. Parker Ave & Valley St, Maplewood: green signs, a brick wall with FUGEES tagged, the Columbia High clock tower over the maple trees */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fg5)"/>' + stars(10) +
      /* tower behind */
      '<g transform="translate(286 6)"><rect x="10" y="34" width="56" height="120" fill="#7e3326"/><rect x="6" y="30" width="64" height="7" fill="#e6dfcc"/>' +
      '<rect x="16" y="16" width="44" height="16" fill="#e6dfcc"/><path d="M20 16a18 15 0 0 1 36 0z" fill="#b9bcc4"/><rect x="36" y="0" width="4" height="6" fill="#7a7f88"/>' +
      '<circle cx="38" cy="62" r="14" fill="#fff4cc" stroke="#2a2a2a" stroke-width="2"/><path d="M38 62V51" stroke="#222" stroke-width="2" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 38 62" to="360 38 62" dur="12s" repeatCount="indefinite"/></path><path d="M38 62h7" stroke="#222" stroke-width="2.5"/></g>' +
      tree(250, 132, 2, "#c4541e") + tree(380, 136, 1.8, "#d8822a") +
      /* tagged wall */
      '<rect x="0" y="112" width="238" height="108" fill="#8a3b2a"/><rect x="0" y="112" width="238" height="108" fill="url(#fg5b)" opacity=".4"/><rect x="0" y="108" width="238" height="6" fill="#5a2418"/>' +
      tag("FUGEES", 14, 178, 48, RED, -6) + tag("MAPLEWOOD", 54, 208, 18, GOLD, -3) + tag("REFUGEES", 16, 132, 14, GREEN, -4) +
      /* sidewalk + street + car */
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/><path d="M0 246h400" stroke="#f2d24b" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="fg-car"><rect x="0" y="232" width="50" height="14" rx="5" fill="' + NJBLUE + '"/><rect x="10" y="224" width="28" height="10" rx="4" fill="' + NJBLUE + '"/><rect x="14" y="226" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="226" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="247" r="4.5" fill="#111"/><circle cx="39" cy="247" r="4.5" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="270" y="96" width="5" height="124" fill="#5b6b5f"/>' + sign(226, 96, 92, "PARKER AVE") + sign(232, 116, 80, "VALLEY ST"),
      sky("fg5", "#141a3a", "#e0703a") + bricks("fg5b", "#3a1a12"));
  }

  window.SCENES = { station, school, pier, greatlawn, corner };
})();
