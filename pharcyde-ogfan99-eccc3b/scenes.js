/* The Pharcyde game (REGIONS: Los Angeles + SoCal): E Line to Expo Park/USC, the Exposition Park Rose Garden and museum dome,
   the dance studio where four dancers became a rap group, the Pharcyde Manor in Inglewood, the corner at Exposition and Figueroa
   with the Coliseum peristyle behind. 400 x 260 SVGs. All CSS classes prefixed "ph-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ph-blink{0%,100%{opacity:.25}50%{opacity:1}}.ph-bl{animation:ph-blink 1.4s ease-in-out infinite}.ph-bl2{animation-delay:.5s}.ph-bl3{animation-delay:.9s}' +
    '@keyframes ph-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ph-bob{animation:ph-bob 1.4s ease-in-out infinite}' +
    '@keyframes ph-flame{0%,100%{transform:scale(1,1)}30%{transform:scale(.85,1.15)}60%{transform:scale(1.1,.9)}}.ph-fl{transform-box:fill-box;transform-origin:50% 100%;animation:ph-flame .5s ease-in-out infinite}' +
    '@keyframes ph-spray{0%{transform:translateY(0);opacity:1}100%{transform:translateY(20px);opacity:0}}.ph-sp{animation:ph-spray 1s linear infinite}' +
    '@keyframes ph-spot{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ph-spt{transform-box:fill-box;transform-origin:50% 0;animation:ph-spot 3s ease-in-out infinite}.ph-spt2{animation-delay:-1.5s}' +
    '@keyframes ph-tile{0%,100%{opacity:.35}50%{opacity:1}}.ph-tl{animation:ph-tile 1.2s steps(1) infinite}' +
    '@keyframes ph-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ph-eq{transform-box:fill-box;transform-origin:50% 100%;animation:ph-eq .7s ease-in-out infinite}' +
    '@keyframes ph-carL{from{transform:translateX(470px)}to{transform:translateX(-80px)}}.ph-carL{animation:ph-carL 8s linear infinite}' +
    '@keyframes ph-car{from{transform:translateX(-80px)}to{transform:translateX(470px)}}.ph-car{animation:ph-car 7s linear infinite}' +
    '@keyframes ph-note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.ph-nt{animation:ph-note 2.4s linear infinite}.ph-nt2{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 41) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h) => '<g class="ph-bob"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3b2c22" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 70, -70].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="#2f5a3a" stroke-width="4" fill="none"/>').join("") + '</g>';

  const ELINE = "#fdb913", YEL = "#ffcf3a", PINK = "#e8437a", SKY = "#38b6ff", TAN = "#d9c29a", TAN2 = "#bfa47a";

  /* Coliseum peristyle: tall central arch, smaller arches each side, torch on top */
  const peristyle = (x, base, s) => {
    const w = 220 * s, h = 70 * s, l = x - w / 2;
    let a = '<rect x="' + l + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + TAN + '"/>' +
      '<rect x="' + l + '" y="' + (base - h) + '" width="' + w + '" height="' + (6 * s) + '" fill="' + TAN2 + '"/>';
    for (let i = 0; i < 6; i++) { if (i === 2 || i === 3) continue; const ax = l + 12 * s + i * 34 * s; a += '<path d="M' + ax + ' ' + base + 'v' + (-34 * s) + 'a' + (11 * s) + ' ' + (11 * s) + ' 0 0 1 ' + (22 * s) + ' 0v' + (34 * s) + 'z" fill="#5a4a3a"/>'; }
    a += '<rect x="' + (x - 34 * s) + '" y="' + (base - h - 34 * s) + '" width="' + (68 * s) + '" height="' + (34 * s) + '" fill="' + TAN + '"/>' +
      '<path d="M' + (x - 24 * s) + ' ' + base + 'v' + (-62 * s) + 'a' + (24 * s) + ' ' + (24 * s) + ' 0 0 1 ' + (48 * s) + ' 0v' + (62 * s) + 'z" fill="#4a3a2c"/>' +
      '<rect x="' + (x - 10 * s) + '" y="' + (base - h - 46 * s) + '" width="' + (20 * s) + '" height="' + (12 * s) + '" fill="#a88a5a"/>' +
      '<path class="ph-fl" d="M' + x + ' ' + (base - h - 74 * s) + 'q' + (14 * s) + ' ' + (14 * s) + ' ' + (8 * s) + ' ' + (28 * s) + 'h' + (-16 * s) + 'q' + (-6 * s) + ' ' + (-14 * s) + ' ' + (8 * s) + ' ' + (-28 * s) + 'z" fill="#ff8a2a"/>';
    return a;
  };

  /* 1. Metro E Line pulling into Expo Park/USC (street-level platform along Exposition Blvd) */
  function station() {
    let win = ""; for (let x = 26; x < 280; x += 40) win += '<rect x="' + x + '" y="112" width="26" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ph-s1)"/>' +
      palm(352, 150, 110) + palm(24, 150, 90) +
      '<rect x="40" y="18" width="268" height="40" rx="4" fill="#1d1f24"/><rect x="40" y="18" width="268" height="4" fill="' + ELINE + '"/>' +
      '<text x="54" y="46" ' + font + ' font-size="17" fill="#fff">Expo Park/USC</text>' + bullet(286, 38, "E", ELINE, true) +
      '<rect x="60" y="58" width="6" height="40" fill="#6a6c72"/><rect x="282" y="58" width="6" height="40" fill="#6a6c72"/>' +
      '<rect x="0" y="96" width="400" height="6" fill="#9aa0a8"/>' +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="56" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' +
        '<rect x="10" y="140" width="300" height="7" fill="' + ELINE + '"/>' + win +
        '<circle cx="300" cy="150" r="4" fill="#fff6c2"/>' + bullet(282, 124, "E", ELINE, true) +
      '</g>' +
      '<rect x="0" y="158" width="400" height="8" fill="#eab308"/><rect x="0" y="166" width="400" height="30" fill="#a9a59c"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5a5c62"/>' +
      tag("PHARCYDE", 26, 244, 38, YEL, -5) + tag("SOUTH CENTRAL", 236, 238, 18, SKY, -6),
      sky("ph-s1", "#4aa3e0", "#f6d7a8"));
  }

  /* 2. Exposition Park Rose Garden, the museum's tiled dome behind, the fountain running */
  function roses() {
    let beds = ""; const cols = [PINK, "#d62839", "#ffb3c6", YEL, "#ff7b54"];
    for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) { const x = 16 + i * 44 + (r % 2) * 20, y = 196 + r * 18; beds += '<ellipse cx="' + x + '" cy="' + y + '" rx="16" ry="7" fill="#2f6a34"/><circle cx="' + (x - 6) + '" cy="' + (y - 3) + '" r="3.5" fill="' + cols[(i + r) % 5] + '"/><circle cx="' + (x + 5) + '" cy="' + (y - 4) + '" r="3.5" fill="' + cols[(i + r + 2) % 5] + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ph-s2)"/>' +
      '<rect x="60" y="88" width="280" height="80" fill="#c98f5e"/><rect x="60" y="88" width="280" height="8" fill="#a8704a"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M' + (78 + i * 38) + ' 168v-40a10 10 0 0 1 20 0v40z" fill="#5a3a2a"/>').join("") +
      '<rect x="160" y="56" width="80" height="34" fill="#d6a874"/>' +
      '<path d="M158 58a42 36 0 0 1 84 0z" fill="#e8c48a"/><path d="M168 58a32 28 0 0 1 64 0" fill="none" stroke="#3a8a8a" stroke-width="4"/><path d="M180 58a20 20 0 0 1 40 0" fill="none" stroke="' + PINK + '" stroke-width="3"/>' +
      '<rect x="197" y="12" width="6" height="12" fill="#c9a24a"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#7fb35a"/>' +
      '<ellipse cx="200" cy="184" rx="44" ry="8" fill="#9ccbe0" stroke="#c7c0b0" stroke-width="3"/><rect x="194" y="160" width="12" height="22" fill="#c7c0b0"/>' +
      '<path class="ph-sp" d="M196 158q-12 0 -20 14M204 158q12 0 20 14" stroke="#cfeefa" stroke-width="3" fill="none"/>' +
      beds +
      palm(30, 170, 100) + palm(372, 170, 110),
      sky("ph-s2", "#5aaee6", "#fbe3c0"));
  }

  /* 3. The dance studio: wood floor, mirrors, boombox, spotlights. Before the rhymes, they were dancers. */
  function dance() {
    let floor = ""; for (let i = 0; i < 8; i++) for (let r = 0; r < 3; r++) floor += '<rect class="ph-tl" style="animation-delay:-' + (((i + r * 3) % 5) * 0.24).toFixed(2) + 's" x="' + (i * 50) + '" y="' + (200 + r * 20) + '" width="49" height="19" fill="' + [YEL, PINK, SKY][(i + r) % 3] + '"/>';
    let eq = ""; for (let i = 0; i < 6; i++) eq += '<rect class="ph-eq" style="animation-delay:-' + (i * 0.11).toFixed(2) + 's" x="' + (176 + i * 9) + '" y="152" width="6" height="18" fill="' + YEL + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#241634"/>' +
      '<rect x="20" y="40" width="360" height="130" fill="#3a2a50" stroke="#6a5a80" stroke-width="3"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (28 + i * 89) + '" y="48" width="83" height="114" fill="#4a5a78" opacity=".55"/><path d="M' + (40 + i * 89) + ' 60l30 60" stroke="#fff" stroke-width="2" opacity=".25"/>').join("") +
      '<rect x="0" y="168" width="400" height="6" fill="#c9a24a"/>' +
      '<g class="ph-spt" style="transform-origin:80px 0"><path d="M74 0h12l60 200h-132z" fill="' + YEL + '" opacity=".18"/></g>' +
      '<g class="ph-spt ph-spt2" style="transform-origin:320px 0"><path d="M314 0h12l70 200h-150z" fill="' + PINK + '" opacity=".18"/></g>' +
      '<rect x="150" y="130" width="100" height="44" rx="6" fill="#2a2a30" stroke="#8a8c90" stroke-width="2"/>' +
      '<circle cx="170" cy="152" r="14" fill="#111" stroke="#666" stroke-width="2"/><circle cx="230" cy="152" r="14" fill="#111" stroke="#666" stroke-width="2"/>' +
      '<rect x="172" y="136" width="56" height="10" fill="#9ac0d8"/>' + eq +
      '<rect x="170" y="120" width="60" height="5" rx="2" fill="#8a8c90"/>' +
      '<text class="ph-nt" x="250" y="128" font-size="18" fill="' + SKY + '">&#9835;</text><text class="ph-nt ph-nt2" x="130" y="128" font-size="18" fill="' + PINK + '">&#9834;</text>' +
      floor +
      '<text x="200" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="4" fill="' + YEL + '">REHEARSAL</text>',
      '');
  }

  /* 4. The Pharcyde Manor, Inglewood: stucco house, palms, a home studio light on in the garage */
  function manor() {
    return svg(
      '<rect width="400" height="260" fill="url(#ph-s4)"/>' + stars(10) +
      '<path d="M40 120l110 -50l110 50z" fill="#8a3a2a"/>' +
      '<rect x="56" y="120" width="190" height="90" fill="#efe0c2"/>' +
      '<rect x="78" y="140" width="40" height="30" fill="#ffd98a" class="ph-bl"/><rect x="96" y="140" width="3" height="30" fill="#8a6a4a"/>' +
      '<rect x="182" y="140" width="40" height="30" fill="#ffd98a" class="ph-bl ph-bl2"/><rect x="200" y="140" width="3" height="30" fill="#8a6a4a"/>' +
      '<rect x="134" y="160" width="32" height="50" fill="#5a3a2a"/><circle cx="160" cy="186" r="2" fill="#e8b04a"/>' +
      '<rect x="120" y="206" width="60" height="6" fill="#c7bba5"/>' +
      '<rect x="256" y="140" width="110" height="70" fill="#e4d4b4"/><path d="M250 140h122l-8 -14h-106z" fill="#8a3a2a"/>' +
      '<rect x="268" y="152" width="86" height="58" fill="#2a2030"/>' +
      '<rect x="276" y="168" width="70" height="30" fill="#3a3a44"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="ph-eq" style="animation-delay:-' + (i * 0.09).toFixed(2) + 's" x="' + (280 + i * 8) + '" y="172" width="5" height="20" fill="' + (i % 2 ? PINK : YEL) + '"/>').join("") +
      '<text x="311" y="164" text-anchor="middle" ' + font + ' font-size="9" letter-spacing="2" fill="' + SKY + '">LABCABIN</text>' +
      palm(26, 214, 120) + palm(384, 214, 100) +
      '<rect x="0" y="210" width="400" height="50" fill="#5b8a46"/><rect x="0" y="236" width="400" height="24" fill="#55575c"/>' +
      '<g class="ph-car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + SKY + '"/><circle cx="9" cy="253" r="3.5" fill="#111"/><circle cx="35" cy="253" r="3.5" fill="#111"/></g>' +
      '<text x="150" y="104" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="2" fill="#efe0c2">THE MANOR</text>',
      sky("ph-s4", "#1b1d48", "#e0806a"));
  }

  /* 5. The corner: Exposition Blvd and Figueroa St, PHARCYDE tag, the Coliseum peristyle and its torch behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ph-s5)"/>' + stars(9) +
      peristyle(170, 150, 0.9) +
      palm(30, 150, 80) + palm(318, 150, 70) +
      '<rect x="0" y="146" width="400" height="78" fill="#7a5a8a"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M0 ' + (154 + i * 14) + 'h400" stroke="#644a72" stroke-width="1"/>').join("") +
      tag("PHARCYDE", 16, 200, 46, YEL, -5) + tag("BIZARRE RIDE", 30, 220, 18, SKY, -3) + tag("LABCABIN", 198, 218, 20, PINK, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4f5156"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ph-carL"><rect x="0" y="236" width="40" height="13" rx="4" fill="' + PINK + '"/><circle cx="8" cy="249" r="3.5" fill="#111"/><circle cx="32" cy="249" r="3.5" fill="#111"/></g>' +
      '<rect x="340" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(270, 44, 128, "Exposition Blvd") + sign(290, 70, 100, "Figueroa St") +
      '<circle class="ph-bl" cx="343" cy="36" r="5" fill="#fff6c2"/>',
      sky("ph-s5", "#1a1640", "#c06a5a"));
  }

  window.SCENES = { station: station, roses: roses, dance: dance, manor: manor, corner: corner };
})();
