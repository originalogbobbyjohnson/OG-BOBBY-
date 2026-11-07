/* acehood scenes (Regions tab: South Florida; Deerfield Beach, Broward County - where Ace Hood (Antoine McColister) grew up). CSS classes and ids prefixed ah- (the page's own anim-train is kept).
   1 Tri-Rail's Deerfield Beach station on Hillsboro Blvd: the double-decker train pulling in at the platform, royal palms.
   2 Friday night lights at Deerfield Beach High (the Bucks, scarlet and gold) - he played football there until a 10th-grade injury turned him to rap.
   3 Hillsboro Inlet Lighthouse, just down the beach: white base, black iron tower, the beam sweeping the night.
   4 Deerfield Beach International Fishing Pier at sunrise: waves rolling, pelicans gliding.
   5 Hillsboro Blvd and Dixie Hwy in Deerfield Beach: green signs, ACE HOOD tagged on the wall, the Hillsboro Blvd drawbridge over the Intracoastal raised behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ahflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.ah-flk{animation:ahflick 2.4s infinite}.ah-flk2{animation-delay:.9s}' +
    '@keyframes ahsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ah-sway{transform-box:fill-box;transform-origin:50% 100%;animation:ahsway 3.2s ease-in-out infinite}.ah-sway2{animation-delay:-1.6s}' +
    '@keyframes ahbeam{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}.ah-beam{transform-box:fill-box;transform-origin:0% 50%;animation:ahbeam 4s ease-in-out infinite}' +
    '@keyframes ahbeamL{0%,100%{transform:rotate(38deg)}50%{transform:rotate(-38deg)}}.ah-beamL{transform-box:fill-box;transform-origin:100% 50%;animation:ahbeamL 4s ease-in-out infinite}' +
    '@keyframes ahwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.ah-wave{animation:ahwave 3s ease-in-out infinite}.ah-wave2{animation-delay:-1.5s}' +
    '@keyframes ahbird{from{transform:translate(-50px,0)}to{transform:translate(470px,-20px)}}.ah-bird{animation:ahbird 13s linear infinite}.ah-bird2{animation-delay:-6.5s}' +
    '@keyframes ahball{0%{transform:translate(0,0)}50%{transform:translate(110px,-70px)}100%{transform:translate(220px,0)}}.ah-ball{animation:ahball 3.4s ease-in-out infinite}' +
    '@keyframes ahglow{0%,100%{opacity:.35}50%{opacity:.75}}.ah-glow{animation:ahglow 2.8s ease-in-out infinite}' +
    '@keyframes ahspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ah-spr{animation:ahspray 1.4s ease-out infinite}.ah-spr2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#ff2e4c", GOLD = "#ffc83d", SEA = "#36b3ff";
  const palm = (x, y, h, cls) => '<g><path d="M' + x + ' ' + (y + h) + 'q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#b8a68a" stroke-width="6" fill="none"/>' +
    '<g class="ah-sway ' + (cls || "") + '">' + [-60, -25, 10, 45, 80, 120, 160].map(a => { const r = a * Math.PI / 180, ex = x + 2 + Math.cos(r) * 30, ey = y + Math.sin(r) * 14 + 6;
      return '<path d="M' + (x + 2) + ' ' + y + 'Q' + ((x + 2 + ex) / 2) + ' ' + (y - 14) + ' ' + ex + ' ' + ey + '" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>'; }).join("") + '</g></g>';

  /* 1. Tri-Rail, Deerfield Beach station */
  function ahstation() {
    const car = (x) => '<rect x="' + x + '" y="110" width="150" height="86" rx="6" fill="#f4f6f8" stroke="#2a3440" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 28) + '" y="120" width="20" height="16" rx="2" fill="#1d2a36"/><rect x="' + (x + 10 + i * 28) + '" y="146" width="20" height="16" rx="2" fill="#1d2a36"/>').join("") +
      '<rect x="' + x + '" y="166" width="150" height="7" fill="#0a5aa8"/><rect x="' + x + '" y="173" width="150" height="4" fill="#58b947"/>' +
      '<circle cx="' + (x + 30) + '" cy="198" r="8" fill="#222"/><circle cx="' + (x + 120) + '" cy="198" r="8" fill="#222"/>';
    const train = '<g class="anim-train">' + car(30) + car(184) + '<path d="M334 110h20q14 0 18 20v66h-38z" fill="#f4f6f8" stroke="#2a3440" stroke-width="2"/><rect x="346" y="120" width="20" height="22" rx="3" fill="#1d2a36"/><rect x="334" y="166" width="38" height="7" fill="#0a5aa8"/><rect x="334" y="173" width="38" height="4" fill="#58b947"/><circle cx="364" cy="186" r="4" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs1)"/>' +
      palm(20, 50, 150, "") + palm(380, 56, 144, "ah-sway2") +
      '<rect x="0" y="36" width="400" height="10" fill="#c9cfd6"/><rect x="0" y="46" width="400" height="4" fill="#8a96a4"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="50" width="6" height="150" fill="#8a96a4"/>').join("") +
      '<rect x="120" y="62" width="160" height="32" rx="3" fill="#111" stroke="#cfd6dd" stroke-width="1.5"/><text x="200" y="84" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">DEERFIELD BEACH</text>' +
      '<rect x="128" y="96" width="60" height="12" rx="2" fill="#0a5aa8"/><text x="158" y="105" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TRI-RAIL</text><rect x="212" y="96" width="60" height="12" rx="2" fill="#58b947"/><text x="242" y="105" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HILLSBORO BLVD</text>' +
      '<rect x="0" y="206" width="400" height="8" fill="#555"/><rect x="0" y="214" width="400" height="46" fill="#b8b2a6"/><rect x="0" y="214" width="400" height="5" fill="#ffd23f"/>' +
      train,
      sky("ahs1", "#2a5ea8", "#ffb07a"));
  }

  /* 2. Friday night lights, Deerfield Beach High Bucks */
  function ahfield() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#555"/><rect x="' + (x - 18) + '" y="22" width="36" height="20" fill="#333"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle class="ah-flk' + (i % 2 ? " ah-flk2" : "") + '" cx="' + (x - 13 + (i % 4) * 9) + '" cy="' + (27 + Math.floor(i / 4) * 9) + '" r="3.5" fill="#fff7d0"/>').join("") +
      '<path d="M' + (x - 18) + ' 42l-50 160h136l-50 -160z" fill="#fff7d0" opacity=".08"/>';
    const yard = Array.from({ length: 11 }, (_, i) => '<path d="M' + (20 + i * 36) + ' 160l' + (-14 + i * 2.8) + ' 100" stroke="#e8f5e8" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ahs2)"/>' +
      '<rect x="0" y="120" width="400" height="44" fill="' + RED + '"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="0" y="' + (124 + i * 8) + '" width="400" height="2" fill="#8a1020"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (128 + (i % 4) * 8) + '" r="3" fill="' + (i % 3 ? "#2a1a1a" : GOLD) + '"/>').join("") +
      light(40) + light(360) +
      '<rect x="140" y="40" width="120" height="58" rx="3" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="58" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">BUCKS</text>' +
      '<text x="168" y="86" text-anchor="middle" ' + font + ' font-size="20" fill="' + RED + '" class="ah-flk">14</text><text x="232" y="86" text-anchor="middle" ' + font + ' font-size="20" fill="' + RED + '">7</text><rect x="148" y="66" width="104" height="1" fill="#444"/>' +
      '<rect x="196" y="98" width="8" height="22" fill="#444"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2f8a3a"/>' + yard +
      '<rect x="0" y="232" width="400" height="28" fill="' + RED + '" opacity=".85"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '" letter-spacing="6">BUCK PRIDE</text>' +
      '<g class="ah-ball"><ellipse cx="80" cy="200" rx="9" ry="5.5" fill="#8a4a20" transform="rotate(-25 80 200)"/><path d="M76 200h8" stroke="#fff" stroke-width="1.2"/></g>',
      sky("ahs2", "#0a0e22", "#25305a"));
  }

  /* 3. Hillsboro Inlet Lighthouse */
  function ahlight() {
    const legs = '<path d="M176 210l18 -150h12l18 150z" fill="none" stroke="#111" stroke-width="5"/>' +
      Array.from({ length: 8 }, (_, i) => { const y = 200 - i * 18, half = 24 - i * 2.2; return '<path d="M' + (200 - half) + ' ' + y + 'L' + (200 + half) + ' ' + (y - 18) + 'M' + (200 + half) + ' ' + y + 'L' + (200 - half) + ' ' + (y - 18) + '" stroke="#111" stroke-width="1.6"/>'; }).join("") +
      '<rect x="196" y="60" width="8" height="150" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="' + (i % 4 ? "" : "ah-flk") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 110) + '" r="1.2" fill="#fff"/>').join("") +
      '<g class="ah-beam"><path d="M206 50l220 -30v60z" fill="#fff7c0" opacity=".28"/></g><g class="ah-beamL"><path d="M194 50l-220 -30v60z" fill="#fff7c0" opacity=".22"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#0e2a4a"/>' + Array.from({ length: 6 }, (_, i) => '<path class="ah-wave' + (i % 2 ? " ah-wave2" : "") + '" d="M' + (-20 + i * 70) + ' ' + (222 + (i % 3) * 10) + 'q15 -6 30 0t30 0" stroke="#5a8ab8" stroke-width="2" fill="none"/>').join("") +
      '<path d="M120 212q80 -16 160 0v10h-160z" fill="#d8c8a0"/>' + palm(140, 150, 62, "") + palm(266, 156, 56, "ah-sway2") +
      /* lower third white, upper black */
      '<path d="M178 214l6 -50h32l6 50z" fill="#f4f4f0" stroke="#999" stroke-width="1"/>' + legs +
      '<rect x="186" y="44" width="28" height="16" fill="#111"/><rect x="190" y="46" width="20" height="12" fill="#fff4b0" class="ah-flk"/><path d="M186 44l14 -12l14 12z" fill="#111"/><rect x="198" y="26" width="4" height="8" fill="#111"/><rect x="182" y="58" width="36" height="4" fill="#111"/>',
      sky("ahs3", "#060a1e", "#1c2c58"));
  }

  /* 4. Deerfield Beach International Fishing Pier at sunrise */
  function ahpier() {
    const pil = Array.from({ length: 16 }, (_, i) => '<rect x="' + (40 + i * 22) + '" y="150" width="4" height="56" fill="#5a4636"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ahs4)"/>' +
      '<circle cx="300" cy="150" r="34" fill="#ffd06a"/><circle cx="300" cy="150" r="48" fill="#ffd06a" opacity=".25" class="ah-glow"/>' +
      '<rect x="0" y="150" width="400" height="80" fill="#2c7ab8"/><g fill="#ffe08a" opacity=".7"><rect x="270" y="156" width="60" height="3" rx="1.5"/><rect x="280" y="166" width="40" height="3" rx="1.5"/><rect x="276" y="178" width="48" height="3" rx="1.5"/><rect x="288" y="192" width="24" height="3" rx="1.5"/></g>' +
      Array.from({ length: 8 }, (_, i) => '<path class="ah-wave' + (i % 2 ? " ah-wave2" : "") + '" d="M' + (-10 + i * 54) + ' ' + (170 + (i % 3) * 16) + 'q12 -5 24 0t24 0" stroke="#bfe4ff" stroke-width="2" fill="none"/>').join("") +
      '<rect x="30" y="140" width="370" height="10" fill="#7a6250"/>' + pil + Array.from({ length: 34 }, (_, i) => '<rect x="' + (32 + i * 11) + '" y="130" width="2" height="10" fill="#7a6250"/>').join("") + '<rect x="30" y="128" width="370" height="3" fill="#7a6250"/>' +
      '<rect x="356" y="110" width="40" height="20" fill="#e9e2d0"/><path d="M352 110l24 -12l24 12z" fill="#2c6a8a"/>' +
      '<path d="M120 128l20 -40" stroke="#333" stroke-width="1.5"/><path d="M140 88q10 30 4 62" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<g class="ah-bird"><path d="M0 70q8 -8 16 0q8 -8 16 0" stroke="#3a2a2a" stroke-width="2.5" fill="none"/></g><g class="ah-bird ah-bird2"><path d="M0 46q6 -6 12 0q6 -6 12 0" stroke="#3a2a2a" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 230q100 -14 200 -4t200 -2v36h-400z" fill="#f2deb0"/><path class="ah-wave" d="M0 228q50 -6 100 0t100 0t100 0t120 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      palm(26, 160, 70, ""),
      sky("ahs4", "#ff9a6a", "#ffe2a0"));
  }

  /* 5. Hillsboro Blvd and Dixie Hwy, the Hillsboro Blvd drawbridge behind */
  function ahcorner() {
    const bridge = '<g><rect x="120" y="104" width="80" height="10" fill="#c9cfd6"/><rect x="290" y="104" width="90" height="10" fill="#c9cfd6"/>' +
      '<path d="M200 114l40 -70h8l-40 70z" fill="#d8dee4"/><path d="M290 114l-40 -70h-8l40 70z" fill="#d8dee4"/>' +
      '<rect x="190" y="86" width="16" height="30" fill="#e9e2d0"/><rect x="284" y="86" width="16" height="30" fill="#e9e2d0"/><circle class="ah-flk" cx="198" cy="82" r="3" fill="#ff4b4b"/><circle class="ah-flk ah-flk2" cx="292" cy="82" r="3" fill="#ff4b4b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs5)"/>' +
      '<rect x="0" y="110" width="400" height="20" fill="#2c6a9a"/>' + bridge +
      palm(30, 40, 90, "") + palm(360, 50, 80, "ah-sway2") + palm(110, 66, 64, "ah-sway2") +
      '<rect x="0" y="128" width="400" height="96" fill="#e9dcc4"/>' + '<rect x="0" y="128" width="400" height="8" fill="#d4c4a6"/>' +
      tag("ACE HOOD", 18, 194, 46, RED, -6) + tag("HOOD NATION", 24, 220, 20, GOLD, -3) + tag("HUSTLE HARD", 262, 182, 16, SEA, -6) + tag("ACE WON'T FOLD", 200, 216, 16, "#22d3a6", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="372" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(266, 98, 128, "Hillsboro Blvd") + sign(266, 124, 128, "S Dixie Hwy") +
      '<rect x="8" y="116" width="4" height="108" fill="#222"/><circle class="ah-flk" cx="10" cy="114" r="7" fill="#ffe9a8"/>' +
      '<g class="ah-spr"><circle cx="160" cy="166" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ah-spr ah-spr2"><circle cx="166" cy="160" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("ahs5", "#ff7a5a", "#ffd7a0"));
  }

  window.SCENES = { ahstation: ahstation, ahfield: ahfield, ahlight: ahlight, ahpier: ahpier, ahcorner: ahcorner };
})();
