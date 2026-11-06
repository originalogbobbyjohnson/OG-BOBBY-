/* kur scenes (Regions tab: Philadelphia; Uptown / North Philly). CSS classes prefixed ku- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kuflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ku-flk{animation:kuflick 2.4s infinite}.ku-flk2{animation-delay:.8s}' +
    '@keyframes kubus{0%{transform:translateX(420px)}45%,100%{transform:translateX(0)}}.ku-bus{animation:kubus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes kuglow{0%,100%{opacity:.5}50%{opacity:1}}.ku-glow{animation:kuglow 2.2s ease-in-out infinite}.ku-g2{animation-delay:-1.1s}' +
    '@keyframes kuwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ku-wv{transform-box:fill-box;transform-origin:50% 50%;animation:kuwave .7s ease-in-out infinite}' +
    '@keyframes kusweep{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(26deg)}}.ku-sw{transform-box:fill-box;transform-origin:50% 0%;animation:kusweep 3.4s ease-in-out infinite}.ku-sw2{animation-delay:-1.7s}' +
    '@keyframes kubob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ku-bob{animation:kubob .8s ease-in-out infinite}.ku-bob2{animation-delay:-.4s}' +
    '@keyframes kuspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ku-sp{animation:kuspray 1.4s ease-out infinite}.ku-sp2{animation-delay:.45s}' +
    '@keyframes kuleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,200px) rotate(260deg)}}.ku-lf{transform-box:fill-box;animation:kuleaf 6s linear infinite}.ku-lf2{animation-delay:-2s}.ku-lf3{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ku-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const TEAL = "#4fd1c5", GOLD = "#f5b942", RED = "#e2574c", BSL = "#f58220", BUS = "#1f4e79";

  /* 1. Olney Transportation Center on the Broad Street Line, under North Broad: cream-and-brown tile, the orange band, the black sign with the BSL bullet, the orange-striped train sliding in */
  function kustation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="6" fill="' + BSL + '"/><rect x="22" y="160" width="330" height="2" fill="' + BSL + '"/>' +
      '<rect x="332" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e8dcc0"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v68" stroke="#d6c8a8" stroke-width="1"/>').join("") +
      '<rect x="0" y="66" width="400" height="8" fill="#7a5a3a"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [50, 170, 290].map((x, i) => '<rect class="ku-flk' + (i === 1 ? " ku-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/><rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#3d4a56"/>').join("") +
      '<rect x="56" y="24" width="288" height="36" rx="3" fill="#111"/><text x="68" y="48" ' + font + ' font-size="14" fill="#fff">Olney Transportation Center</text>' + badge(290, 42, "BSL", BSL) +
      '<rect x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45" class="ku-flk"/>',
      "");
  }

  /* 2. "Walked to catch the 18": the Route 18 SEPTA bus pulling up to an Uptown stop on a fall afternoon, the blue stop flag, porch-front twins, leaves falling */
  function kubus() {
    const bus = '<g class="ku-bus"><g transform="translate(-10 0)"><rect x="40" y="120" width="230" height="80" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (78 + i * 38) + '" y="132" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="132" width="26" height="56" rx="2" fill="#24323e"/><rect x="40" y="168" width="230" height="6" fill="' + BUS + '"/><rect x="40" y="176" width="230" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="121" width="84" height="11" rx="2" fill="#111"/><text x="86" y="129.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">18 FOX CHASE</text>' +
      '<circle cx="86" cy="200" r="12" fill="#222"/><circle cx="86" cy="200" r="5" fill="#9aa1a8"/><circle cx="230" cy="200" r="12" fill="#222"/><circle cx="230" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="186" r="3.5" fill="#fff6c2"/></g></g>';
    const leaves = Array.from({ length: 9 }, (_, i) => '<ellipse class="ku-lf' + ["", " ku-lf2", " ku-lf3"][i % 3] + '" cx="' + (40 + i * 42) + '" cy="' + (10 + (i * 23) % 50) + '" rx="4" ry="2.5" fill="' + ["#e2874c", "#f5b942", "#c0502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ku2)"/>' +
      [0, 100, 200, 300].map((x, i) => '<rect x="' + x + '" y="40" width="100" height="100" fill="' + ["#8a4a34", "#7a6a5a", "#93503a", "#6e5e50"][i] + '"/><path d="M' + x + ' 40l50 -22l50 22z" fill="#4a3a32"/>' +
        '<rect x="' + (x + 12) + '" y="54" width="28" height="26" fill="#2a3442"/><rect x="' + (x + 60) + '" y="54" width="28" height="26" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/>' +
        '<rect x="' + (x + 4) + '" y="92" width="92" height="6" fill="#e8e4dc"/><path d="M' + (x + 8) + ' 98v30M' + (x + 92) + ' 98v30" stroke="#e8e4dc" stroke-width="3"/>').join("") +
      '<rect x="0" y="140" width="400" height="20" fill="#bdb8ae"/><rect x="0" y="160" width="400" height="100" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="330" y="84" width="5" height="76" fill="#6b7178"/><rect x="314" y="70" width="38" height="30" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/><text x="333" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SEPTA</text><text x="333" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">18</text>' +
      leaves,
      sky("ku2", "#8ec2ea", "#f2e2c8"));
  }

  /* 3. His first studio session down in Southwest Philly: the little booth, the mic with the pop filter, headphones on the hook, the monitor with the waveform bouncing, the lyric pad open */
  function kustudio() {
    return svg(
      '<rect width="400" height="260" fill="#1a1d24"/>' + Array.from({ length: 10 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<path d="M' + (8 + c * 24) + ' ' + (10 + r * 22) + 'l10 8l-10 8l-10 -8z" fill="#2a2f3a"/>').join("")).join("") +
      '<rect x="196" y="0" width="8" height="260" fill="#0e1014"/>' +
      /* booth side: mic, pop filter, headphones */
      '<path d="M96 250v-120" stroke="#3a3e46" stroke-width="5"/><path d="M70 250h52" stroke="#3a3e46" stroke-width="5"/><path d="M96 130l20 -20" stroke="#3a3e46" stroke-width="4"/>' +
      '<rect x="108" y="78" width="22" height="40" rx="11" fill="#9aa1a8" stroke="#555" stroke-width="2" transform="rotate(-20 119 98)"/><path d="M112 88h16M112 96h16M112 104h16" stroke="#6b7178" stroke-width="1.5" transform="rotate(-20 119 98)"/>' +
      '<circle cx="146" cy="108" r="20" fill="#222" opacity=".55" stroke="#555" stroke-width="2"/><path d="M146 128q-8 30 -30 40" stroke="#555" stroke-width="2" fill="none"/>' +
      '<path d="M30 60q0 -26 26 -26t26 26" stroke="#111" stroke-width="5" fill="none"/><rect x="24" y="56" width="12" height="20" rx="4" fill="' + TEAL + '"/><rect x="76" y="56" width="12" height="20" rx="4" fill="' + TEAL + '"/>' +
      '<rect x="20" y="150" width="56" height="70" rx="2" fill="#f4f0e2" transform="rotate(-6 48 185)"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M28 ' + (164 + i * 9) + 'h' + (34 - (i % 3) * 6) + '" stroke="#5a6a8a" stroke-width="1.6" transform="rotate(-6 48 185)"/>').join("") +
      /* control side: desk, monitor with waveform, speakers */
      '<rect x="210" y="176" width="190" height="84" fill="#3a2a22"/><rect x="210" y="170" width="190" height="8" fill="#5a4636"/>' +
      '<rect x="240" y="70" width="130" height="84" rx="4" fill="#0a0c10" stroke="#3a3e46" stroke-width="3"/><path d="M300 154v16M280 170h40" stroke="#3a3e46" stroke-width="5"/>' +
      Array.from({ length: 22 }, (_, i) => '<rect class="ku-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (250 + i * 5.2) + '" y="' + (94 + (i % 5) * 2) + '" width="3" height="' + (34 - (i % 5) * 4) + '" fill="' + TEAL + '"/>').join("") +
      '<rect x="250" y="136" width="110" height="4" fill="#2a2f3a"/><rect class="ku-glow" x="250" y="136" width="46" height="4" fill="' + GOLD + '"/>' +
      [214, 372].map(x => '<rect x="' + x + '" y="110" width="22" height="60" rx="3" fill="#15171c" stroke="#3a3e46" stroke-width="2"/><circle cx="' + (x + 11) + '" cy="150" r="7" fill="#2a2f3a"/><circle cx="' + (x + 11) + '" cy="124" r="4" fill="#2a2f3a"/>').join("") +
      '<rect x="244" y="190" width="120" height="14" rx="2" fill="#1a1a1c"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (248 + i * 10) + '" y="193" width="6" height="8" fill="' + (i % 4 === 0 ? RED : "#5a5e66") + '"/>').join("") +
      '<rect x="210" y="16" width="96" height="20" rx="3" fill="' + RED + '" class="ku-glow"/><text x="258" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">RECORDING</text>',
      "");
  }

  /* 4. The awards cypher, 2016 (he stood in it with Dave East): four mics on stands in a circle, the graffiti backdrop, the lights sweeping, the camera crane, the crowd shadows */
  function kucypher() {
    const mic = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v70M-16 70h32" stroke="#2a2a2e" stroke-width="4"/><rect x="-6" y="-22" width="12" height="22" rx="6" fill="#c9ced6" stroke="#555" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0b0d14"/>' +
      '<rect x="0" y="40" width="400" height="120" fill="#23262e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50) + ' 40v120" stroke="#1a1c22" stroke-width="2"/>').join("") +
      tag("CYPHER", 28, 112, 44, TEAL, -5) + tag("PHILLY", 236, 86, 30, GOLD, -4) + tag("UPTOP", 206, 130, 22, RED, -3) +
      '<path class="ku-sw" d="M90 0l-50 200h100z" fill="#fff6c8" opacity=".14"/><path class="ku-sw ku-sw2" d="M310 0l-50 200h100z" fill="' + TEAL + '" opacity=".16"/>' +
      '<rect x="80" y="0" width="20" height="10" fill="#333"/><rect x="300" y="0" width="20" height="10" fill="#333"/>' +
      '<ellipse cx="200" cy="214" rx="170" ry="34" fill="#1a1c24"/><ellipse cx="200" cy="214" rx="120" ry="22" fill="none" stroke="' + GOLD + '" stroke-width="2" opacity=".6"/>' +
      mic(120, 156, 1) + mic(280, 156, 1) + mic(170, 168, 1.1) + mic(232, 168, 1.1) +
      '<g opacity=".9">' + Array.from({ length: 14 }, (_, i) => '<g class="ku-bob' + (i % 2 ? " ku-bob2" : "") + '"><circle cx="' + (10 + i * 29) + '" cy="236" r="8" fill="#05060a"/><rect x="' + (i * 29) + '" y="242" width="20" height="20" rx="5" fill="#05060a"/></g>').join("") + '</g>' +
      '<path d="M370 40L330 120" stroke="#3a3e46" stroke-width="4"/><rect x="316" y="114" width="26" height="16" rx="2" fill="#2a2a2e"/><circle cx="314" cy="122" r="5" fill="#5a7a9a"/><circle class="ku-glow" cx="338" cy="118" r="2" fill="' + RED + '"/>',
      "");
  }

  /* 5. N Broad St and W Olney Ave, Uptown: green signs, KUR tagged big on the brick wall, La Salle University's gray stone Collegiate Gothic tower up Olney Ave behind */
  function kucorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ku5)"/>' + stars(14) +
      /* La Salle's College Hall tower: gray stone, crenellated top, pointed windows */
      '<rect x="150" y="40" width="58" height="96" fill="#8e8b84"/><rect x="146" y="34" width="66" height="8" fill="#7e7b74"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (146 + i * 12) + '" y="26" width="7" height="9" fill="#7e7b74"/>').join("") +
      [56, 86].map(y => '<path d="M166 ' + (y + 18) + 'v-14q6 -8 12 0v14zM182 ' + (y + 18) + 'v-14q6 -8 12 0v14z" fill="#2a3442"/>').join("") +
      '<path class="ku-glow" d="M172 112v-12q8 -10 16 0v12z" fill="#ffd98a"/><rect x="110" y="96" width="40" height="40" fill="#7e7b74"/><rect x="208" y="96" width="44" height="40" fill="#7e7b74"/>' +
      '<g fill="#22263a"><rect x="0" y="86" width="90" height="50"/><rect x="270" y="80" width="60" height="56"/><rect x="336" y="96" width="64" height="40"/></g>' +
      '<rect x="0" y="132" width="400" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("KUR", 26, 196, 64, TEAL, -6) + tag("UPTOP", 160, 182, 34, GOLD, -4) + tag("REAL TALK", 30, 216, 18, "#fff", -3) + tag("FOR MY FAM", 168, 214, 18, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(294, 98, 90, "N Broad St") + sign(290, 124, 98, "W Olney Ave") +
      '<g class="ku-sp"><circle cx="150" cy="160" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="ku-sp ku-sp2"><circle cx="156" cy="154" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("ku5", "#121a36", "#c86a4a"));
  }

  window.SCENES = { kustation: kustation, kubus: kubus, kustudio: kustudio, kucypher: kucypher, kucorner: kucorner };
})();
