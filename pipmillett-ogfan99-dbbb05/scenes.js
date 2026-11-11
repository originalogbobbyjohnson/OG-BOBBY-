/* Pip Millett scenes (Regions tab: UK + EUROPE; Georgia "Pip" Millett, born in Manchester, grew up in Stockport, Greater Manchester; mum from the Wirral, late dad Jamaican).
   1 Stockport station, Edgeley: the long platform under the glass canopy, a blue Northern train pulling in.
   2 Stockport Viaduct: the red-brick arches striding over the River Mersey, a train crossing the top.
   3 Stockport Plaza: the white art deco picture house on Mersey Square, the marquee lights chasing.
   4 The letter: her desk by the window at night, a letter half written, the lamp on, pages lifting (Best Things: "I'm still writing my letter").
   5 Castle Street and Edgeley Road, SK3: street plates, PIP tagged on the brick, the viaduct arches behind.
   CSS classes prefixed "pml-" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pmlCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.pml-cloud{animation:pmlCloud 30s linear infinite}.pml-c2{animation-delay:-15s}' +
    '@keyframes pmlBlink{0%,100%{opacity:1}50%{opacity:.2}}.pml-blink{animation:pmlBlink 1.2s steps(1) infinite}.pml-b2{animation-delay:-.6s}' +
    '@keyframes pmlCross{0%{transform:translateX(-160px)}100%{transform:translateX(420px)}}.pml-cross{animation:pmlCross 10s linear infinite;animation-delay:-4s}' +
    '@keyframes pmlRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.pml-rip{animation:pmlRip 3s ease-in-out infinite}.pml-r2{animation-delay:-1.5s}' +
    '@keyframes pmlPage{0%,100%{transform:rotate(0)}50%{transform:rotate(-8deg)}}.pml-page{transform-box:fill-box;transform-origin:0 100%;animation:pmlPage 2.6s ease-in-out infinite}' +
    '@keyframes pmlGlow{0%,100%{opacity:.35}50%{opacity:.7}}.pml-glow{animation:pmlGlow 3s ease-in-out infinite}' +
    '@keyframes pmlTwk{0%,100%{opacity:.9}50%{opacity:.2}}.pml-twk{animation:pmlTwk 2.2s ease-in-out infinite}.pml-t2{animation-delay:-1.1s}' +
    '@keyframes pmlBus{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.pml-bus{animation:pmlBus 11s linear infinite;animation-delay:-3s}' +
    '@keyframes pmlPen{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,-2px)}50%{transform:translate(12px,1px)}75%{transform:translate(6px,2px)}}.pml-pen{animation:pmlPen 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const NOR = "#262262", NOR2 = "#5a4fcf", ORG = "#f08a5d", CREAM = "#ffd27f", SKY = "#6fb3d2", BRICK = "#a2452e";
  const clouds = '<g fill="#fff" opacity=".7"><g class="pml-cloud"><ellipse cx="40" cy="36" rx="34" ry="10"/><ellipse cx="60" cy="30" rx="20" ry="9"/></g>' +
    '<g class="pml-cloud pml-c2"><ellipse cx="40" cy="64" rx="28" ry="8"/><ellipse cx="56" cy="58" rx="16" ry="8"/></g></g>';
  const bricks = (x0, y0, w, h, c) => { let s = ""; for (let y = y0; y < y0 + h; y += 9) for (let x = x0 + (((y - y0) / 9) % 2 ? -12 : 0); x < x0 + w; x += 24) s += '<rect x="' + Math.max(x0, x) + '" y="' + y + '" width="' + Math.min(22, x0 + w - Math.max(x0, x)) + '" height="7" fill="' + c + '"/>'; return s; };
  const plate = (x, y, w, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="' + w + '" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
    '<text x="' + (w / 2) + '" y="17" ' + F + ' font-size="11" fill="#111" text-anchor="middle" textLength="' + (w - 12) + '" lengthAdjust="spacingAndGlyphs">' + name + '</text>' +
    '<text x="' + (w / 2) + '" y="29" ' + F + ' font-size="6.5" fill="#333" text-anchor="middle" textLength="' + (w - 16) + '" lengthAdjust="spacingAndGlyphs">' + dist + '</text></g>';
  const arches = (x0, y0, w, h, n, c, dark) => { let s = '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; const aw = w / n; for (let i = 0; i < n; i++) s += '<path d="M' + (x0 + i * aw + aw * 0.14) + ' ' + (y0 + h) + 'v-' + (h * 0.62) + 'q' + (aw * 0.36) + ' -' + (h * 0.26) + ' ' + (aw * 0.72) + ' 0v' + (h * 0.62) + 'z" fill="' + dark + '"/>'; return s; };
  const minitrain = (y, c) => '<g class="pml-cross"><rect x="0" y="' + y + '" width="140" height="16" rx="4" fill="' + c + '" stroke="#111" stroke-width="1.5"/><g fill="#cfe3f2">' + [8, 30, 52, 74, 96, 118].map(x => '<rect x="' + x + '" y="' + (y + 3) + '" width="14" height="6"/>').join("") + '</g></g>';

  /* 1. Stockport station, Edgeley: glass canopy on iron columns, the station board, a blue Northern train pulling in */
  function pmlstation() {
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="150" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 142h300q26 0 30 24v34H10z" fill="' + NOR + '" stroke="#111" stroke-width="2"/>' +
      '<rect x="10" y="176" width="330" height="8" fill="' + NOR2 + '"/>' + wins +
      '<g fill="#e8e8e8"><rect x="112" y="150" width="20" height="46"/><rect x="232" y="150" width="20" height="46"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="154" width="6" height="20"/><rect x="123" y="154" width="6" height="20"/><rect x="235" y="154" width="6" height="20"/><rect x="243" y="154" width="6" height="20"/></g>' +
      '<path d="M314 152q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="186" width="10" height="5" fill="#fff3b0" class="pml-blink"/><rect x="300" y="142" width="40" height="8" fill="' + CREAM + '"/>' +
      '<g fill="#161616"><circle cx="50" cy="203" r="6"/><circle cx="74" cy="203" r="6"/><circle cx="270" cy="203" r="6"/><circle cx="294" cy="203" r="6"/></g></g>';
    let cols = "";
    for (const x of [30, 130, 230, 330]) cols += '<rect x="' + x + '" y="52" width="6" height="90" fill="#2f4f6f"/><path d="M' + (x - 14) + ' 52h34" stroke="#2f4f6f" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pmlS1)"/>' + clouds +
      /* glass canopy */
      '<path d="M0 30h400v22H0z" fill="#a9c7da" opacity=".75"/><g stroke="#2f4f6f" stroke-width="2">' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map(x => '<path d="M' + x + ' 30v22"/>').join("") + '<path d="M0 52h400M0 30h400"/></g>' + cols +
      /* back wall */
      '<rect x="0" y="100" width="400" height="42" fill="' + BRICK + '"/>' + bricks(0, 100, 400, 42, "#b85a3f") +
      /* station board */
      '<rect x="128" y="64" width="150" height="30" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><rect x="128" y="64" width="10" height="30" fill="' + NOR + '"/>' +
      '<text x="208" y="85" text-anchor="middle" ' + F + ' font-size="17" fill="#111" textLength="124" lengthAdjust="spacingAndGlyphs">STOCKPORT</text>' +
      /* tracks + train */
      '<rect x="0" y="200" width="400" height="14" fill="#4a4a4a"/><rect x="0" y="206" width="400" height="3" fill="#9a9a9a"/>' + train +
      /* platform */
      '<rect x="0" y="214" width="400" height="46" fill="#9a958c"/><rect x="0" y="214" width="400" height="6" fill="#f2d21b"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + A + ' font-size="12" fill="#2a2a2a" letter-spacing="2">EDGELEY · SK3</text>',
      sky('pmlS1', '#9cc0dc', '#eef0f2'));
  }

  /* 2. Stockport Viaduct: red-brick arches over the Mersey, a train crossing on top */
  function pmlviaduct() {
    return svg(
      '<rect width="400" height="260" fill="url(#pmlS2)"/>' + clouds +
      '<g fill="#7a8a96" opacity=".6"><rect x="0" y="120" width="60" height="40"/><rect x="330" y="112" width="70" height="48"/><rect x="60" y="130" width="40" height="30"/></g>' +
      minitrain(54, NOR) +
      '<rect x="0" y="70" width="400" height="8" fill="#7e3322"/>' +
      arches(0, 78, 400, 110, 8, BRICK, "#c9dbe6") +
      '<g fill="#8e3a27">' + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => '<rect x="' + (i * 50 - 4) + '" y="78" width="8" height="110"/>').join("") + '</g>' +
      /* river */
      '<rect x="0" y="188" width="400" height="44" fill="#5d7a86"/>' +
      '<g stroke="#b9d0da" stroke-width="2" opacity=".7"><path class="pml-rip" d="M20 202h40M140 210h50M280 200h40"/><path class="pml-rip pml-r2" d="M70 222h30M210 220h40M330 224h40"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#6b7c45"/>' +
      '<rect x="80" y="236" width="240" height="16" rx="3" fill="#140c0a" stroke="' + CREAM + '" stroke-width="1"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + A + ' font-size="10.5" fill="' + CREAM + '">STOCKPORT VIADUCT · RIVER MERSEY</text>',
      sky('pmlS2', '#8fb6d6', '#f2e2cc'));
  }

  /* 3. Stockport Plaza: white art deco front on Mersey Square, marquee bulbs chasing */
  function pmlplaza() {
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle class="pml-blink' + (i % 2 ? " pml-b2" : "") + '" cx="' + (96 + i * 12) + '" cy="152" r="3" fill="' + CREAM + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pmlS3)"/>' +
      '<g fill="#fff" opacity=".8"><circle class="pml-twk" cx="40" cy="30" r="1.4"/><circle class="pml-twk pml-t2" cx="360" cy="24" r="1.4"/><circle class="pml-twk" cx="300" cy="50" r="1"/><circle class="pml-twk pml-t2" cx="70" cy="60" r="1"/></g>' +
      /* sandstone cliff + houses behind */
      '<path d="M0 120q60 -30 120 -20v160H0z" fill="#8a5a3a"/><path d="M280 100q60 -10 120 20v140H280z" fill="#8a5a3a"/>' +
      /* white deco facade */
      '<rect x="80" y="40" width="240" height="180" fill="#f2efe6" stroke="#cfc9ba" stroke-width="2"/>' +
      '<path d="M170 40v-22h60v22" fill="#f2efe6" stroke="#cfc9ba" stroke-width="2"/>' +
      '<g fill="#d8d1bf"><rect x="96" y="54" width="8" height="80"/><rect x="296" y="54" width="8" height="80"/><rect x="176" y="24" width="6" height="110"/><rect x="218" y="24" width="6" height="110"/></g>' +
      '<g fill="#3a5a7a"><rect x="116" y="60" width="44" height="60"/><rect x="240" y="60" width="44" height="60"/><rect x="190" y="60" width="20" height="70"/></g>' +
      '<g fill="' + CREAM + '" class="pml-glow"><rect x="116" y="60" width="44" height="60"/><rect x="240" y="60" width="44" height="60"/></g>' +
      /* marquee */
      '<rect x="88" y="140" width="224" height="30" fill="#1b1b1b" stroke="' + ORG + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="166" text-anchor="middle" ' + A + ' font-size="13" fill="#fff" letter-spacing="3">TONIGHT · PIP</text>' +
      '<g fill="#5a2a1a"><rect x="130" y="180" width="36" height="40"/><rect x="182" y="180" width="36" height="40"/><rect x="234" y="180" width="36" height="40"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#8d8b85"/>' +
      '<rect x="120" y="236" width="160" height="16" rx="3" fill="#140c0a" stroke="' + CREAM + '" stroke-width="1"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + A + ' font-size="10.5" fill="' + CREAM + '">THE PLAZA · MERSEY SQUARE</text>',
      sky('pmlS3', '#22264a', '#7a4a6a'));
  }

  /* 4. The letter: a desk by the window at night, a letter half written, the lamp on */
  function pmlletter() {
    let lines = "";
    for (let i = 0; i < 6; i++) lines += '<path d="M150 ' + (172 + i * 8) + 'h' + (i === 5 ? 40 : 90) + '" stroke="#5a6b8a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1d18"/>' +
      /* window with rainy night and the viaduct far off */
      '<rect x="40" y="20" width="200" height="120" fill="#1c2340" stroke="#5a3a2a" stroke-width="8"/>' +
      '<g opacity=".6">' + arches(48, 96, 184, 36, 6, "#5a2a1e", "#1c2340") + '</g>' +
      '<path d="M140 20v120M40 80h200" stroke="#5a3a2a" stroke-width="5"/>' +
      '<g stroke="#8ab0d6" stroke-width="1" opacity=".6"><path class="pml-rip" d="M60 30l-4 12M100 50l-4 12M180 34l-4 12M210 60l-4 12M80 104l-4 12"/></g>' +
      /* lamp */
      '<circle cx="320" cy="96" r="70" fill="' + CREAM + '" class="pml-glow"/><path d="M300 70h40l-10 -30h-20z" fill="' + ORG + '"/><rect x="318" y="70" width="4" height="80" fill="#3a2a1a"/>' +
      /* desk */
      '<rect x="0" y="150" width="400" height="110" fill="#6b3f26"/><rect x="0" y="150" width="400" height="6" fill="#8a5434"/>' +
      /* letter + envelope + pen */
      '<g transform="rotate(-4 200 190)"><rect x="140" y="160" width="120" height="76" fill="#faf5e6" stroke="#cfc6a8"/>' + lines + '</g>' +
      '<g class="pml-page"><rect x="270" y="170" width="70" height="50" fill="#f2ecd8" stroke="#cfc6a8"/><path d="M270 170l35 26l35 -26" fill="none" stroke="#cfc6a8" stroke-width="2"/></g>' +
      '<g class="pml-pen"><path d="M192 214l40 -30l6 4l-40 30z" fill="#1b1b1b"/><path d="M192 214l-4 6l8 -2z" fill="' + CREAM + '"/></g>' +
      '<rect x="40" y="236" width="140" height="16" rx="3" fill="#140c0a" stroke="' + ORG + '" stroke-width="1"/>' +
      '<text x="110" y="248" text-anchor="middle" ' + A + ' font-size="10" fill="' + ORG + '">STILL WRITING MY LETTER</text>');
  }

  /* 5. The corner: Castle Street and Edgeley Road, SK3 — street plates, PIP tagged, the viaduct arches behind */
  function pmlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pmlS5)"/>' + clouds +
      arches(0, 30, 400, 80, 7, BRICK, "#bcd2e2") + '<rect x="0" y="24" width="400" height="7" fill="#7e3322"/>' +
      '<rect x="0" y="110" width="400" height="8" fill="#3a3a3a"/>' +
      '<rect x="0" y="118" width="400" height="98" fill="#7a3422"/>' + bricks(0, 118, 400, 98, BRICK) +
      tag("PIP", 26, 182, 64, ORG, -5) + tag("MILLETT", 34, 208, 22, CREAM, -3) + tag("DO WELL", 150, 206, 18, SKY, -4) +
      plate(250, 124, 144, "CASTLE STREET", "STOCKPORT · SK3") +
      plate(250, 164, 144, "EDGELEY ROAD", "STOCKPORT · SK3") +
      '<rect x="0" y="216" width="400" height="44" fill="#8d8b85"/><rect x="0" y="214" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="pml-bus"><rect x="0" y="222" width="80" height="30" rx="4" fill="#e9e3d0"/><rect x="0" y="240" width="80" height="6" fill="' + ORG + '"/><rect x="6" y="226" width="68" height="9" fill="#2b3e55"/><circle cx="16" cy="253" r="5" fill="#111"/><circle cx="64" cy="253" r="5" fill="#111"/></g>',
      sky('pmlS5', '#8fb6d6', '#f2e2cc'));
  }

  window.SCENES = { pmlstation, pmlviaduct, pmlplaza, pmlletter, pmlcorner };
})();
