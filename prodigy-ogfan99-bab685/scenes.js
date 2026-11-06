/* Prodigy game (NYC map, Queens: Queensbridge, Long Island City). The F at 21 St-Queensbridge deep under 41st Av, his grandmother Bernice Johnson's
   dance school in Queens (the Cultural Arts Center where he grew up dancing), Carnegie Hall on 57th St (her yearly recitals; grandfather Budd Johnson's jazz),
   The Tunnel on 12th Av and 27th St (the Sunday-night club where Mobb Deep records broke), and 12th St & 41st Rd, co-named Prodigy Way in 2021,
   with the Queensbridge Houses and the Queensboro Bridge behind. 400 x 260 SVGs. No 9s anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes plie{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}.pl{animation:plie 1.4s ease-in-out infinite}.pl2{animation-delay:-.47s}.pl3{animation-delay:-.94s}' +
    '@keyframes armup{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-30deg)}}.arm{transform-box:fill-box;transform-origin:0% 50%;animation:armup 1.4s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-90px);opacity:0}}.nt{animation:note 3.6s ease-out infinite}.nt2{animation-delay:-1.2s}.nt3{animation-delay:-2.4s}' +
    '@keyframes sweepL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(10deg)}}.bmL{transform-box:view-box;transform-origin:120px 150px;animation:sweepL 5s ease-in-out infinite}' +
    '@keyframes sweepR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-12deg)}}.bmR{transform-box:view-box;transform-origin:290px 150px;animation:sweepR 4.4s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bob{animation:bob 1s ease-in-out infinite}.bob2{animation-delay:-.5s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 31) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#e6c35c", STEEL = "#6fa8dc", RED = "#c0392b", CREAM = "#f4ead8", F = "#ff6319";
  /* the Queensboro Bridge: cantilever towers and the truss, light gray-tan steel */
  const bridge = (y, col) => {
    let g = '<path d="M0 ' + y + 'h400" stroke="' + col + '" stroke-width="5"/>';
    [60, 200, 340].forEach(x => { g += '<path d="M' + (x - 8) + ' ' + (y + 40) + 'V' + (y - 46) + 'h16V' + (y + 40) + '" fill="' + col + '"/><path d="M' + (x - 6) + ' ' + (y - 46) + 'l-4-8h20l-4 8" fill="' + col + '"/>' +
      '<path d="M' + (x - 70) + ' ' + y + 'Q' + (x - 30) + ' ' + (y - 4) + ' ' + x + ' ' + (y - 42) + 'Q' + (x + 30) + ' ' + (y - 4) + ' ' + (x + 70) + ' ' + y + '" stroke="' + col + '" stroke-width="3" fill="none"/>'; });
    for (let x = 0; x < 400; x += 12) g += '<path d="M' + x + ' ' + y + 'l6 -10l6 10" stroke="' + col + '" stroke-width="1.2" fill="none" opacity=".8"/>';
    /* truss verticals up to the upper chord (it's a cantilever truss, not cables) */
    [60, 200, 340].forEach(x => { for (let d = 10; d < 70; d += 10) { const k = d / 70, hh = 42 * (1 - k) * (1 - k) + 4 * k; [-1, 1].forEach(sg => { g += '<path d="M' + (x + sg * d) + ' ' + y + 'v' + (-hh).toFixed(1) + '" stroke="' + col + '" stroke-width="1.4"/>'; }); } });
    return g;
  };
  /* Queensbridge Houses: six-story red brick with lit windows */
  const houses = (y) => { let g = ""; [[0, 70], [80, 64], [154, 76], [240, 62], [312, 88]].forEach(([x, w], i) => {
      const top = y - 70 - (i % 2) * 8; g += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (y - top) + '" fill="' + (i % 2 ? "#7a3b2a" : "#86422f") + '"/>';
      for (let yy = top + 8; yy < y - 6; yy += 11) for (let xx = x + 6; xx < x + w - 6; xx += 11) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffd98a" opacity=".75"/>'; }); return g; };

  /* 1. 21 St-Queensbridge, deep on the 63rd St line: tiled wall with the orange band, the black sign with the orange F, the F pulling in */
  function qbstation() {
    let tiles = "", win = "";
    for (let y = 20; y < 160; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfc6b2" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 20v140" stroke="#cfc6b2" stroke-width="1"/>';
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#e9e1cf"/>' + tiles +
      '<rect x="0" y="0" width="400" height="20" fill="#3a3a3e"/>' + [50, 150, 250, 350].map(x => '<rect class="flk" x="' + (x - 30) + '" y="8" width="60" height="5" rx="2" fill="#fffbe0"/>').join("") +
      '<rect x="0" y="40" width="400" height="12" fill="' + F + '"/><rect x="0" y="52" width="400" height="3" fill="#7a3a12"/>' +
      /* sign */
      '<rect x="60" y="62" width="276" height="30" rx="3" fill="#111"/><rect x="60" y="62" width="276" height="3" fill="#fff"/>' +
      '<text x="74" y="84" ' + font + ' font-size="15" fill="#fff">21 St-Queensbridge</text>' + bullet(314, 77, "F", F) +
      /* train */
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="138" width="300" height="4" fill="#8a9099"/>' +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 148, "F", F) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="92" fill="#8d8a84"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 40) p += '<path d="M' + x + ' 168l-20 92" stroke="#7a7771" stroke-width="1.5"/>'; return p; })() +
      '<rect x="166" y="196" width="68" height="34" rx="3" fill="#111"/><text x="200" y="210" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">EXIT</text><text x="200" y="223" text-anchor="middle" ' + font + ' font-size="8" fill="' + F + '">41 Av</text>',
      "");
  }

  /* 2. Grandma's dance school in Queens: the wood floor, the mirror wall and the barre, kids at the barre doing plies, the piano in the corner */
  function dance() {
    let boards = "";
    for (let x = -40; x < 440; x += 26) boards += '<path d="M' + x + ' 260L' + (200 + (x - 200) * 0.45) + ' 168" stroke="#9a6a3a" stroke-width="1.2"/>';
    const kid = (x, k) => '<g class="pl pl' + k + '"><circle cx="' + x + '" cy="118" r="7" fill="#2a1f2c"/><path d="M' + (x - 6) + ' 126h12l3 26h-18z" fill="#2a1f2c"/>' +
      '<rect class="arm" x="' + (x + 4) + '" y="128" width="16" height="3.5" rx="2" fill="#2a1f2c"/><path d="M' + (x - 5) + ' 152l-4 18M' + (x + 5) + ' 152l4 18" stroke="#2a1f2c" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#f1e3cf"/>' +
      /* back wall: mirror */
      '<rect x="20" y="40" width="360" height="128" fill="#cfe0ea"/><rect x="20" y="40" width="360" height="128" fill="url(#mg)"/>' +
      [110, 200, 290].map(x => '<rect x="' + x + '" y="40" width="3" height="128" fill="#a8bcc8"/>').join("") +
      '<path d="M40 50l40 110M150 50l20 60" stroke="#fff" stroke-width="6" opacity=".35"/>' +
      '<rect x="0" y="20" width="400" height="20" fill="#7a2f3a"/><text x="200" y="35" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">CULTURAL ARTS CENTER</text>' +
      /* barre */
      '<rect x="20" y="132" width="360" height="5" rx="2" fill="#c9a46a"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="137" width="4" height="31" fill="#8a6a3a"/>').join("") +
      kid(80, 1) + kid(140, 2) + kid(200, 3) + kid(260, 1) +
      /* floor */
      '<path d="M0 168h400v92H0z" fill="#c8894a"/>' + boards +
      /* piano */
      '<rect x="306" y="120" width="70" height="50" rx="3" fill="#1b1b1f"/><rect x="310" y="146" width="62" height="8" fill="#f4f1ea"/>' +
      [314, 322, 330, 338, 346, 354, 362].map(x => '<rect x="' + x + '" y="146" width="4" height="5" fill="#111"/>').join("") +
      '<rect x="312" y="170" width="6" height="16" fill="#1b1b1f"/><rect x="364" y="170" width="6" height="16" fill="#1b1b1f"/>',
      '<linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#7f9fb2" stop-opacity=".3"/></linearGradient>');
  }

  /* 3. Carnegie Hall on 57th St and 7th Av: the rose-brown brick Renaissance front, the arched windows, the lit arcade, sax notes drifting up, taxis going by */
  function carnegie() {
    let arch = "", upper = "";
    for (let i = 0; i < 5; i++) { const x = 72 + i * 54; arch += '<path d="M' + x + ' 206v-36q18-22 36 0v36z" fill="#ffd98a"/><path d="M' + x + ' 206v-36q18-22 36 0v36" stroke="#e8d6b8" stroke-width="3" fill="none"/>'; }
    for (let r = 0; r < 3; r++) for (let i = 0; i < 7; i++) { const x = 66 + i * 40, y = 64 + r * 30; upper += '<path d="M' + x + ' ' + (y + 20) + 'v-14q9-10 18 0v14z" fill="' + (r === 0 ? "#3a2a35" : "#ffcf7a") + '" class="' + (r ? "bl bl" + (i % 3 + 1) : "") + '" opacity="' + (r ? ".8" : "1") + '"/>'; }
    const n = (x, y, k) => '<g class="nt nt' + k + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + GOLD + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + stars(10) +
      '<rect x="0" y="80" width="48" height="140" fill="#2a2f45"/><rect x="352" y="70" width="48" height="150" fill="#2a2f45"/>' +
      /* facade */
      '<rect x="50" y="40" width="300" height="180" fill="#a8574a"/>' +
      (() => { let b = ""; for (let y = 46; y < 220; y += 7) b += '<path d="M50 ' + y + 'h300" stroke="#94493e" stroke-width="1"/>'; return b; })() +
      '<rect x="44" y="34" width="312" height="10" fill="#d9b27a"/><rect x="50" y="44" width="300" height="12" fill="#e8d6b8"/>' +
      '<text x="200" y="54" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2a22" letter-spacing="6">CARNEGIE HALL</text>' +
      upper +
      '<rect x="50" y="150" width="300" height="8" fill="#e8d6b8"/>' + arch +
      '<rect x="50" y="206" width="300" height="14" fill="#e8d6b8"/>' +
      n(120, 140, 1) + n(200, 130, 2) + n(280, 140, 3) +
      /* street */
      '<rect x="0" y="220" width="400" height="40" fill="#3f3f45"/><path d="M0 240h400" stroke="#e7e0c8" stroke-width="1.5" stroke-dasharray="14 12"/>' +
      '<g class="car"><rect x="0" y="226" width="44" height="13" rx="4" fill="#f5c518"/><rect x="14" y="221" width="16" height="6" rx="2" fill="#f5c518"/><circle cx="10" cy="240" r="3.5" fill="#111"/><circle cx="34" cy="240" r="3.5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="244" width="44" height="13" rx="4" fill="#f5c518"/><rect x="14" y="239" width="16" height="6" rx="2" fill="#f5c518"/><circle cx="10" cy="258" r="3.5" fill="#111"/><circle cx="34" cy="258" r="3.5" fill="#111"/></g>',
      sky("s3", "#0f1430", "#4a3a6a"));
  }

  /* 4. The Tunnel, 12th Av and 27th St: the old brick rail freight terminal, the line down the block, the searchlights sweeping, the bass thumping */
  function tunnel() {
    let line = "", win = "";
    for (let x = 30; x < 250; x += 15) line += '<g class="bob ' + (x % 30 ? "bob2" : "") + '"><circle cx="' + x + '" cy="' + (186 - (x * 3) % 6) + '" r="5.5" fill="#15131a"/><rect x="' + (x - 6) + '" y="' + (191 - (x * 3) % 6) + '" width="12" height="30" rx="4" fill="#15131a"/></g>';
    for (let i = 0; i < 8; i++) win += '<rect x="' + (40 + i * 42) + '" y="78" width="22" height="30" fill="#3a2a2a"/><rect class="bl bl' + (i % 3 + 1) + '" x="' + (40 + i * 42) + '" y="78" width="22" height="30" fill="#b03a8a" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(12) +
      '<g class="bmL"><path d="M120 150L60 -20h40z" fill="#e6f0ff" opacity=".18"/></g><g class="bmR"><path d="M290 150L300 -20h40z" fill="#e6f0ff" opacity=".18"/></g>' +
      /* the building */
      '<rect x="20" y="60" width="360" height="160" fill="#6e3a2c"/>' +
      (() => { let b = ""; for (let y = 66; y < 220; y += 8) b += '<path d="M20 ' + y + 'h360" stroke="#5a2e22" stroke-width="1"/>'; return b; })() +
      '<rect x="14" y="52" width="372" height="10" fill="#4a2a20"/>' + win +
      /* the arch door */
      '<path d="M270 220v-60q30-34 60 0v60z" fill="#1a0e14"/><path d="M276 220v-56q24-26 48 0v56z" fill="#b03a8a" opacity=".55" class="th"/>' +
      '<rect x="236" y="122" width="128" height="20" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="1"/><text x="300" y="136" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">THE TUNNEL</text>' +
      /* rope */
      '<path d="M30 206q40 10 80 0t80 0 70 0" stroke="#b02a2a" stroke-width="3" fill="none"/>' + [30, 110, 190, 260].map(x => '<rect x="' + (x - 2) + '" y="200" width="4" height="22" fill="' + GOLD + '"/>').join("") +
      line +
      '<rect x="0" y="220" width="400" height="40" fill="#34343a"/><path d="M0 240h400" stroke="#e7e0c8" stroke-width="1.5" stroke-dasharray="14 12"/>' +
      '<g class="car"><rect x="0" y="244" width="44" height="13" rx="4" fill="#202634"/><circle cx="40" cy="248" r="2" fill="#fff6c2"/></g>' +
      '<text x="120" y="236" text-anchor="middle" ' + font + ' font-size="8" fill="#d8d2c0" letter-spacing="3">12TH AVENUE</text>',
      sky("s4", "#07070f", "#2a1838"));
  }

  /* 5. 12th St & 41st Rd, co-named Prodigy Way: the green signs, the light, the tag wall, the Houses and the Queensboro Bridge behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) + bridge(66, "#b9b2a0") + houses(140) +
      '<g class="car"><rect x="0" y="58" width="22" height="7" rx="2" fill="#ffd98a"/></g>' +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#5c5e66"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 9) for (let x = (y % 18 ? 0 : 20); x < 400; x += 40) b += '<rect x="' + x + '" y="' + y + '" width="38" height="7" fill="#666872"/>'; return b; })() +
      tag("PRODIGY", 20, 196, 44, GOLD, -5) + tag("P-DOUBLE", 30, 220, 18, CREAM, -3) + tag("41ST SIDE", 196, 214, 22, STEEL, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car car2"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      /* signpost */
      '<rect x="356" y="56" width="5" height="172" fill="#3d4b3f"/>' +
      '<rect x="300" y="60" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="76" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">12 St</text>' +
      '<rect x="300" y="86" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="348" y="102" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">41 Rd</text>' +
      '<rect x="290" y="112" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="126" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Prodigy Way</text>' +
      '<path d="M360 56q0-14 14-14h8" stroke="#3d4b3f" stroke-width="4" fill="none"/><ellipse class="flk" cx="384" cy="44" rx="7" ry="3.5" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { qbstation: qbstation, dance: dance, carnegie: carnegie, tunnel: tunnel, corner: corner };
})();
