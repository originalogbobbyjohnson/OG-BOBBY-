/* bandmanrill scenes (NYC map: New Jersey; Downtown Newark, "Brick City"). CSS classes prefixed bmr- (the page's own anim-train is kept).
   1 Atlantic Street on the Newark Light Rail (Broad Street extension): at-grade side platform downtown, a silver light-rail car with the blue band gliding in.
   2 Prudential Center, "The Rock" (his "rock, rock, rock" ad-lib): the dark glass and brick-red arena with its big LED marquee flashing, searchlights sweeping.
   3 Riverfront Park on the Passaic: the bright orange boardwalk over the river, Jersey club speaker on the boardwalk bouncing, the water rippling.
   4 Newark Liberty Airport ("I flew out to Cali"): the control tower, a jet lifting off the runway, departures board flipping to CALI.
   5 Atlantic St and Bridge St: green signs, RILL tagged on the brick, the National Newark Building's pyramid top behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmrflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bmr-flk{animation:bmrflick 2.2s infinite}.bmr-flk2{animation-delay:.7s}' +
    '@keyframes bmrled{0%,100%{fill:#b388ff}33%{fill:#ff9f1c}66%{fill:#00d1ff}}.bmr-led{animation:bmrled 2.4s steps(1) infinite}' +
    '@keyframes bmrsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.bmr-beam{transform-box:fill-box;transform-origin:50% 100%;animation:bmrsweep 4s ease-in-out infinite}.bmr-beam2{animation-delay:-2s}' +
    '@keyframes bmrrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.bmr-rip{animation:bmrrip 3s ease-in-out infinite}.bmr-rip2{animation-delay:-1.5s}' +
    '@keyframes bmrbump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.bmr-bump{transform-box:fill-box;transform-origin:50% 50%;animation:bmrbump .45s ease-in-out infinite}' +
    '@keyframes bmrwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.bmr-wave{transform-box:fill-box;transform-origin:50% 50%;animation:bmrwave 1.2s ease-out infinite}.bmr-wave2{animation-delay:.6s}' +
    '@keyframes bmrjet{0%{transform:translate(-60px,0) rotate(0)}40%{transform:translate(150px,0) rotate(0)}100%{transform:translate(470px,-150px) rotate(-14deg)}}.bmr-jet{animation:bmrjet 6s ease-in infinite}' +
    '@keyframes bmrboard{0%,45%{opacity:1}50%,95%{opacity:0}100%{opacity:1}}.bmr-b1{animation:bmrboard 4s steps(1) infinite}.bmr-b2{animation:bmrboard 4s steps(1) infinite;animation-delay:-2s}' +
    '@keyframes bmrblink{0%,100%{opacity:.25}50%{opacity:1}}.bmr-bl{animation:bmrblink 1.4s ease-in-out infinite}.bmr-bl2{animation-delay:-.7s}' +
    '@keyframes bmrcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bmr-car{animation:bmrcar 7s linear infinite}' +
    '@keyframes bmrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bmr-sp{animation:bmrspray 1.4s ease-out infinite}.bmr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const NJT = "#0039a6", ORANGE = "#ff9f1c", PURPLE = "#b388ff", CYAN = "#00d1ff";
  /* downtown Newark skyline blocks + the National Newark Building (stepped tower with a pyramid top) */
  const skyline = (fill, base) => '<g fill="' + fill + '">' +
    '<rect x="0" y="' + (base - 60) + '" width="50" height="60"/><rect x="56" y="' + (base - 84) + '" width="40" height="84"/><rect x="100" y="' + (base - 48) + '" width="44" height="48"/>' +
    '<rect x="232" y="' + (base - 70) + '" width="46" height="70"/><rect x="284" y="' + (base - 52) + '" width="50" height="52"/><rect x="340" y="' + (base - 76) + '" width="60" height="76"/>' +
    '<rect x="160" y="' + (base - 120) + '" width="56" height="120"/><rect x="166" y="' + (base - 134) + '" width="44" height="16"/><rect x="172" y="' + (base - 146) + '" width="32" height="14"/><path d="M172 ' + (base - 146) + 'l16 -22 16 22z"/></g>';
  const windows = (x0, y0, cols, rows, dx, dy, c) => Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, k) => ((r * 7 + k * 3) % 5 === 0) ? "" : '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="4" height="5" fill="' + c + '"/>').join("")).join("");

  /* 1. Atlantic Street, Newark Light Rail (at grade) */
  function bmrstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="116" width="320" height="70" rx="10" fill="#d6dadf" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="20" y="158" width="320" height="8" fill="' + NJT + '"/><rect x="20" y="168" width="320" height="3" fill="' + ORANGE + '"/>' +
      '<path d="M340 120q22 4 22 30v26q0 8 -10 10h-12z" fill="#c4c9cf" stroke="#6d757c" stroke-width="2"/><circle cx="354" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="122" width="62" height="11" rx="2" fill="#111"/><text x="293" y="130.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">BROAD STREET</text>' +
      '<path d="M120 116l20 -22h40l20 22" stroke="#333" stroke-width="2.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bmrs1)"/>' + skyline("#2a2440", 110) +
      '<g fill="#ffd27a" opacity=".7">' + windows(62, 34, 6, 8, 6, 9, "#ffd27a") + windows(168, 0, 7, 10, 7, 10, "#ffd27a") + '</g>' +
      '<path d="M0 92h400" stroke="#444" stroke-width="1.5"/>' +
      '<rect x="0" y="110" width="400" height="80" fill="#3d3a3f"/>' + train +
      '<rect x="0" y="186" width="400" height="6" fill="#77706a"/><path d="M0 189h400" stroke="#aaa39b" stroke-width="2"/>' +
      '<rect x="0" y="192" width="400" height="8" fill="#f2c200"/><rect x="0" y="200" width="400" height="60" fill="#a19b93"/>' +
      '<rect x="20" y="150" width="5" height="50" fill="#2a2a2a"/><rect x="0" y="146" width="80" height="6" fill="#2f2f2f"/><g class="bmr-flk"><rect x="4" y="152" width="70" height="3" fill="#fff3c4"/></g>' +
      '<rect x="96" y="206" width="208" height="34" rx="3" fill="#111"/><text x="110" y="229" ' + font + ' font-size="17" fill="#fff">Atlantic Street</text>' + badge(254, 223, "NLR", NJT),
      sky("bmrs1", "#151032", "#7a4a8c"));
  }

  /* 2. Prudential Center, "The Rock" */
  function bmrrock() {
    return svg(
      '<rect width="400" height="260" fill="url(#bmrs2)"/>' +
      '<g opacity=".35"><path class="bmr-beam" d="M110 150l-14 -150h28z" fill="#fff"/><path class="bmr-beam bmr-beam2" d="M290 150l-14 -150h28z" fill="#fff"/></g>' +
      '<path d="M30 200V100q170 -46 340 0v100z" fill="#1d2230"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (50 + i * 30) + ' ' + (100 - (i < 6 ? i : 10 - i) * 6) + 'v100" stroke="#3a4560" stroke-width="2"/>').join("") +
      '<path d="M30 112q170 -46 340 0" stroke="#55627f" stroke-width="3" fill="none"/>' +
      '<rect x="30" y="160" width="340" height="40" fill="#8f2d24"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M30 ' + (166 + i * 8) + 'h340" stroke="#7a241d" stroke-width="1.5"/>').join("") +
      '<rect x="110" y="104" width="180" height="46" rx="3" fill="#0a0a0a" stroke="#555" stroke-width="2"/>' +
      '<rect class="bmr-led" x="116" y="110" width="168" height="34" rx="2" fill="' + PURPLE + '"/>' +
      '<text x="200" y="133" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" textLength="150" lengthAdjust="spacingAndGlyphs" fill="#0a0a0a">ROCK ROCK ROCK</text>' +
      '<rect x="168" y="172" width="64" height="28" fill="#111"/><g fill="#ffe7a3"><rect x="172" y="176" width="12" height="22"/><rect x="188" y="176" width="12" height="22"/><rect x="204" y="176" width="12" height="22"/><rect x="220" y="176" width="8" height="22"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5753"/><path d="M0 214h400" stroke="#6b6863" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (40 + i * 24) + '" cy="' + (226 + (i % 3) * 6) + '" r="5" fill="#222"/><rect x="' + (36 + i * 24) + '" y="' + (231 + (i % 3) * 6) + '" width="8" height="14" rx="3" fill="#222"/>').join("") +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#e8e0ff">MULBERRY ST · DOWNTOWN NEWARK</text>',
      sky("bmrs2", "#0d0a24", "#3b2a5e"));
  }

  /* 3. Riverfront Park, orange boardwalk on the Passaic */
  function bmrriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#bmrs3)"/>' +
      '<g fill="#4a5a6e" opacity=".8"><rect x="0" y="80" width="60" height="40"/><rect x="70" y="64" width="40" height="56"/><rect x="300" y="70" width="50" height="50"/><rect x="356" y="86" width="44" height="34"/></g>' +
      '<rect x="0" y="118" width="400" height="80" fill="#2f5d7c"/>' +
      '<g class="bmr-rip"><path d="M20 136h50M150 150h60M300 140h70M80 170h40M250 176h60" stroke="#8fc3e0" stroke-width="2" stroke-linecap="round"/></g>' +
      '<g class="bmr-rip bmr-rip2"><path d="M100 128h40M220 132h50M30 160h40M330 164h50" stroke="#bfe0f2" stroke-width="1.5" stroke-linecap="round"/></g>' +
      '<path d="M0 198L400 178V260H0z" fill="#ff7a1a"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M' + (i * 20) + ' ' + (198 - i * 1) + 'L' + (i * 20 - 14) + ' 260" stroke="#d8600f" stroke-width="2"/>').join("") +
      '<path d="M0 192L400 172" stroke="#3a3a3a" stroke-width="3"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (10 + i * 48) + '" y="' + (176 - i * 2.4) + '" width="3" height="20" fill="#3a3a3a"/>').join("") +
      '<g transform="translate(286 206)"><circle class="bmr-wave" cx="20" cy="20" r="22" fill="none" stroke="' + PURPLE + '" stroke-width="3"/><circle class="bmr-wave bmr-wave2" cx="20" cy="20" r="22" fill="none" stroke="' + CYAN + '" stroke-width="3"/>' +
      '<g class="bmr-bump"><rect x="0" y="0" width="40" height="44" rx="4" fill="#1a1a1a"/><circle cx="20" cy="15" r="9" fill="#444"/><circle cx="20" cy="15" r="4" fill="#111"/><circle cx="20" cy="33" r="6" fill="#444"/></g></g>' +
      '<rect x="40" y="200" width="30" height="16" rx="2" fill="#2b2b2b"/><rect x="36" y="214" width="38" height="5" fill="#2b2b2b"/><path d="M44 219v14M66 219v14" stroke="#2b2b2b" stroke-width="3"/>' +
      '<text x="200" y="26" text-anchor="middle" ' + font + ' font-size="11" fill="#1d2a3a">RIVERFRONT PARK · PASSAIC RIVER</text>',
      sky("bmrs3", "#ffd9a8", "#9cc8e8"));
  }

  /* 4. Newark Liberty Airport */
  function bmrairport() {
    const jet = '<g class="bmr-jet"><path d="M0 170h70q12 0 16 6l-16 4h-70z" fill="#f2f4f7"/><path d="M30 170l14 -16h8l-6 16z" fill="#c9ced6"/><path d="M34 178l18 12h8l-10 -12z" fill="#c9ced6"/><path d="M0 170l-6 -12h8l10 12z" fill="' + NJT + '"/><rect x="18" y="172" width="44" height="2" fill="' + NJT + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bmrs4)"/>' +
      '<g fill="#3c4a5c"><rect x="0" y="150" width="400" height="30"/><rect x="20" y="138" width="120" height="14"/><rect x="250" y="136" width="130" height="16"/></g>' +
      '<rect x="318" y="60" width="18" height="92" fill="#cfd6de"/><path d="M304 60h46l-6 -22h-34z" fill="#2b3d52"/><rect x="306" y="40" width="42" height="14" fill="#7fb7d9" opacity=".8"/><rect x="312" y="30" width="30" height="8" fill="#cfd6de"/>' +
      '<circle class="bmr-bl" cx="327" cy="26" r="3" fill="#ff3b30"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#48494d"/><path d="M0 214h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="26 18"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="bmr-bl ' + (i % 2 ? "bmr-bl2" : "") + '" cx="' + (20 + i * 40) + '" cy="196" r="3" fill="#ffd27a"/>').join("") +
      jet +
      '<rect x="24" y="30" width="150" height="52" rx="4" fill="#0b0b0b" stroke="#555" stroke-width="2"/><text x="34" y="46" ' + font + ' font-size="10" fill="#ffd27a">DEPARTURES</text>' +
      '<g class="bmr-b1"><text x="34" y="70" ' + font + ' font-size="17" fill="#fff">CALI</text><text x="120" y="70" ' + font + ' font-size="12" fill="#7cf29a">ON TIME</text></g>' +
      '<g class="bmr-b2"><text x="34" y="70" ' + font + ' font-size="17" fill="#fff">LA</text><text x="120" y="70" ' + font + ' font-size="12" fill="#7cf29a">BOARDING</text></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#e8ecf2">NEWARK LIBERTY · FLEW OUT TO CALI</text>',
      sky("bmrs4", "#4a7fc0", "#f7c58c"));
  }

  /* 5. Atlantic St and Bridge St */
  function bmrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bmrs5)"/>' + '<g transform="translate(0 10) scale(1 .75)">' + skyline("#241d3a", 170) +
      '<g fill="#ffd27a" opacity=".6">' + windows(168, 26, 7, 12, 7, 10, "#ffd27a") + '</g></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("RILL", 26, 192, 60, PURPLE, -6) + tag("PROJECT X", 140, 214, 20, ORANGE, -4) + tag("ON BRO", 30, 216, 17, CYAN, -3) + tag("BANDMAN", 150, 168, 16, "#ffffff", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("bmr-car", 0, 240, "#1f1f1f") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 140, "Atlantic St") + sign(276, 124, 110, "Bridge St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bmr-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bmr-sp"><circle cx="122" cy="166" r="3" fill="' + PURPLE + '" opacity=".7"/></g><g class="bmr-sp bmr-sp2"><circle cx="128" cy="160" r="2" fill="' + PURPLE + '" opacity=".6"/></g>',
      sky("bmrs5", "#1e1640", "#e08a6a"));
  }

  window.SCENES = { bmrstation: bmrstation, bmrrock: bmrrock, bmrriver: bmrriver, bmrairport: bmrairport, bmrcorner: bmrcorner };
})();
