/* RZA producer game: Park Hill, Staten Island (Shaolin). Clifton on the Staten Island Railway, the Park Hill towers ("Killa Hill"),
   the orange Staten Island Ferry crossing to Manhattan, the Stapleton Houses, and the corner of Vanderbilt Ave & Targee St
   (Wu-Tang Clan District) with the Verrazzano-Narrows Bridge behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}' +
    '@keyframes ferry{from{transform:translateX(-160px)}to{transform:translateX(420px)}}.fer{animation:ferry 16s linear infinite}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wvv{animation:wave 2.5s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-8px)}50%{transform:translate(26px,4px)}75%{transform:translate(10px,10px)}100%{transform:translate(0,0)}}.bz{animation:buzz 2.2s ease-in-out infinite}.bz2{animation-delay:-.7s}.bz3{animation-delay:-1.4s}' +
    '@keyframes fly{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.bird{animation:fly 9s linear infinite}.bird2{animation-delay:-4s}' +
    '@keyframes cars{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.car{animation:cars 6s linear infinite}.car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const WU = "#f7c600", RED = "#e2483d", STEEL = "#d9dde2", SIR = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const tower = (x, y, w, h, c, lit) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    for (let yy = y + 8; yy < y + h - 10; yy += 14) for (let xx = x + 6; xx < x + w - 8; xx += 14) {
      const on = lit && ((xx * 3 + yy) % 7 === 0);
      s += '<rect ' + (on ? 'class="flk' + (xx % 2 ? ' flk2' : '') + '" ' : '') + 'x="' + xx + '" y="' + yy + '" width="7" height="8" fill="' + (on ? WU : "#2a2a30") + '"/>';
    }
    return s;
  };

  /* 1. Staten Island Railway train pulling into Clifton (open-air platform) */
  function station() {
    let win = "";
    for (let x = 18; x < 320; x += 40) win += '<rect x="' + x + '" y="118" width="26" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<rect x="0" y="78" width="400" height="26" fill="#6b7d8a"/>' +
      '<rect x="0" y="22" width="400" height="8" fill="#5f6366"/>' + [20, 140, 260, 380].map(x => '<rect x="' + (x - 2) + '" y="22" width="4" height="82" fill="#5f6366"/>').join("") +
      '<rect x="120" y="38" width="170" height="32" rx="3" fill="#111"/>' +
      '<text x="190" y="61" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Clifton</text>' +
      '<circle cx="262" cy="54" r="12" fill="' + SIR + '"/><text x="262" y="58" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">SIR</text>' +
      '<g class="anim-train"><rect x="0" y="104" width="350" height="72" rx="6" fill="#c4c8ce" stroke="#6a6e74" stroke-width="2"/>' +
      '<rect x="0" y="146" width="350" height="8" fill="' + SIR + '"/>' + win +
      '<rect x="326" y="114" width="18" height="30" rx="2" fill="#2c3036"/><circle cx="340" cy="166" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#f2d21c"/><rect x="0" y="186" width="400" height="74" fill="#8a8984"/>' +
      '<path d="M0 186h400" stroke="#5d5c58" stroke-width="2"/><circle class="bl" cx="380" cy="150" r="5" fill="#7cf08a"/>',
      sky("s1", "#8fb3d0", "#f0d9b5"));
  }

  /* 2. Park Hill: brick towers on the hill, a swarm of killer bees buzzing over the lawn */
  function parkhill() {
    const bee = (x, y, k) => '<g class="bz' + (k ? " bz" + k : "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.5" fill="' + WU + '" stroke="#111" stroke-width="1"/><path d="M' + (x - 1) + ' ' + (y - 3) + 'v6M' + (x + 2) + ' ' + (y - 3) + 'v6" stroke="#111" stroke-width="1.3"/><ellipse cx="' + (x - 1) + '" cy="' + (y - 5) + '" rx="3" ry="2" fill="#fff" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(8) +
      '<path d="M0 170Q200 120 400 160V260H0z" fill="#3c5a34"/>' +
      tower(20, 60, 70, 120, "#8a4a36", true) + tower(110, 40, 74, 130, "#93503a", true) + tower(210, 50, 70, 118, "#8a4a36", true) + tower(300, 66, 74, 108, "#93503a", true) +
      '<rect x="0" y="196" width="400" height="64" fill="#45474c"/><path d="M0 228h400" stroke="#f2d21c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="270" y="176" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="330" y="192" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Park Hill Av</text>' +
      bee(60, 210) + bee(90, 200, 2) + bee(120, 214, 3) + bee(150, 204) + bee(180, 212, 2) +
      '<g class="car"><rect x="0" y="234" width="50" height="14" rx="4" fill="' + RED + '"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="40" cy="250" r="5" fill="#111"/></g>',
      sky("s2", "#0f1028", "#4a3550"));
  }

  /* 3. The orange Staten Island Ferry crossing the harbor, Lower Manhattan ahead */
  function ferry() {
    let city = "";
    [[60, 120, 20], [84, 104, 18], [106, 130, 22], [132, 96, 16], [152, 116, 24], [180, 80, 20], [204, 112, 22], [230, 124, 18], [252, 100, 20], [276, 130, 24]].forEach(([x, y, w]) => city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#4a5568"/>');
    city += '<path d="M186 80l4-30 4 30z" fill="#7f8ea3"/><rect x="189" y="38" width="2" height="12" fill="#7f8ea3"/>';
    let waves = "";
    for (let y = 168; y < 260; y += 14) waves += '<path class="wvv" d="M0 ' + y + (() => { let d = ""; for (let x = 0; x < 480; x += 40) d += "q10 -5 20 0t20 0"; return d; })() + '" fill="none" stroke="#6fa0c8" stroke-width="2" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      city +
      '<path d="M340 150v-30l4-4 4 4v30z" fill="#6aa28f"/><circle cx="344" cy="112" r="3" fill="#6aa28f"/><path d="M346 110l6-10" stroke="#6aa28f" stroke-width="2"/><circle class="bl" cx="352" cy="99" r="2.5" fill="' + WU + '"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f5d86"/>' + waves +
      '<g class="fer"><path d="M10 190h150l-14 22H24z" fill="#f47b20"/><rect x="30" y="172" width="110" height="18" fill="#f47b20"/><rect x="50" y="160" width="70" height="14" fill="#f47b20"/>' +
      (() => { let w = ""; for (let x = 36; x < 136; x += 12) w += '<rect x="' + x + '" y="176" width="8" height="8" fill="#fff6c2"/>'; return w; })() +
      '<rect x="80" y="146" width="10" height="16" fill="#2b2b30"/><path d="M10 212h150" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="bird"><path d="M0 60q6-6 12 0q6-6 12 0" fill="none" stroke="#fff" stroke-width="2"/></g><g class="bird bird2"><path d="M0 40q5-5 10 0q5-5 10 0" fill="none" stroke="#fff" stroke-width="2"/></g>',
      sky("s3", "#f2a65a", "#f7d9a0"));
  }

  /* 4. The Stapleton Houses: brick blocks, benches, pigeons crossing */
  function stapletonhouses() {
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      tower(10, 70, 110, 110, "#9a5a42", false) + tower(140, 60, 120, 120, "#a0604a", false) + tower(280, 76, 110, 104, "#9a5a42", false) +
      '<rect x="0" y="180" width="400" height="80" fill="#7d7f83"/><rect x="0" y="180" width="400" height="5" fill="#9a9ca0"/>' +
      '<rect x="40" y="206" width="70" height="6" fill="#2e6b3e"/><path d="M46 212v14M104 212v14" stroke="#333" stroke-width="3"/><rect x="40" y="196" width="70" height="4" fill="#2e6b3e"/>' +
      '<rect x="290" y="206" width="70" height="6" fill="#2e6b3e"/><path d="M296 212v14M354 212v14" stroke="#333" stroke-width="3"/><rect x="290" y="196" width="70" height="4" fill="#2e6b3e"/>' +
      '<rect x="150" y="190" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="206" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Tompkins Av</text>' +
      '<g class="bird"><path d="M0 40q6-6 12 0q6-6 12 0" fill="none" stroke="#333" stroke-width="2"/></g><g class="bird bird2"><path d="M0 26q5-5 10 0q5-5 10 0" fill="none" stroke="#333" stroke-width="2"/></g>' +
      tag("SHAOLIN", 120, 246, 22, WU, -3),
      sky("s4", "#9cc4e4", "#e9e2cf"));
  }

  /* 5. The corner: Vanderbilt Ave & Targee St, Wu-Tang Clan District sign, RZA tag, Verrazzano-Narrows Bridge behind */
  function corner() {
    let cables = "";
    for (let x = 30; x <= 370; x += 14) { const t = Math.abs(x - 200) / 140; const y = 30 + (1 - t * t) * 52; cables += '<path d="M' + x + ' ' + Math.min(118, y + 4) + 'V118" stroke="#9fb0b8" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(12) +
      '<rect x="56" y="22" width="8" height="100" fill="#8a9a9e"/><rect x="72" y="22" width="8" height="100" fill="#8a9a9e"/><rect x="54" y="36" width="28" height="4" fill="#8a9a9e"/><rect x="54" y="70" width="28" height="4" fill="#8a9a9e"/>' +
      '<rect x="320" y="22" width="8" height="100" fill="#8a9a9e"/><rect x="336" y="22" width="8" height="100" fill="#8a9a9e"/><rect x="318" y="36" width="28" height="4" fill="#8a9a9e"/><rect x="318" y="70" width="28" height="4" fill="#8a9a9e"/>' +
      '<path d="M0 60Q34 40 68 24Q200 120 332 24Q366 40 400 60" fill="none" stroke="#c9d6dc" stroke-width="2"/>' + cables +
      '<rect x="0" y="116" width="400" height="5" fill="#8a9a9e"/>' +
      '<rect x="0" y="126" width="400" height="100" fill="#6f6f74"/>' +
      (() => { let b = ""; for (let y = 134; y < 226; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#5c5c61" stroke-width="1"/>'; return b; })() +
      tag("RZA", 24, 196, 52, WU, -6) + tag("WU-TANG", 130, 214, 26, RED, -4) + tag("BOBBY DIGITAL", 30, 150, 16, STEEL, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="336" y="34" width="5" height="196" fill="#3d4b3f"/>' +
      '<rect x="262" y="38" width="132" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="54" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Vanderbilt Av</text>' +
      '<rect x="288" y="64" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="336" y="80" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Targee St</text>' +
      '<rect x="262" y="90" width="132" height="30" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="328" y="103" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">WU-TANG CLAN</text><text x="328" y="115" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DISTRICT</text>' +
      '<circle class="bl" cx="339" cy="30" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#3a2f4a"));
  }

  window.SCENES = { station: station, parkhill: parkhill, ferry: ferry, stapletonhouses: stapletonhouses, corner: corner };
})();
