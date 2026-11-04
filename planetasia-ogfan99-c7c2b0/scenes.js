/* Fresno opening scenes for the Planet Asia game. Each one is a small animated SVG, 400 x 260. Every 9 is drawn as a path with a straight stem. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 5s linear infinite}.car2{animation-delay:-2.5s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 6s linear infinite}.carL2{animation-delay:-3s}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase 1.2s ease-in-out infinite}.ch2{animation-delay:.4s}.ch3{animation-delay:.8s}' +
    '@keyframes bird{0%{transform:translate(0,0)}100%{transform:translate(420px,-30px)}}.bd{animation:bird 12s linear infinite}.bd2{animation-delay:-6s}' +
    '@keyframes trac{0%,100%{transform:translateX(0)}50%{transform:translateX(120px)}}.tr{animation:trac 12s ease-in-out infinite}' +
    '@keyframes shim{0%,100%{opacity:.6}50%{opacity:1}}.sh{animation:shim 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* a plain 9: round loop on top, straight stem straight down */
  const nine = (x, y, h, color, w) => {
    const r = h * 0.27, cy = y - h + r, sx = x + 2 * r;
    return '<path d="M' + sx + ' ' + cy + 'A' + r + ' ' + r + ' 0 1 0 ' + sx + ' ' + (cy + 0.01) + 'M' + sx + ' ' + cy + 'V' + y + '" fill="none" stroke="' + color + '" stroke-width="' + w + '" stroke-linecap="round"/>';
  };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#e8b23a", JADE = "#2fa37a", ROSE = "#e0605a";
  const SIGN = "#0b6b3a";

  /* 1. Highway 99 rolling into Fresno: the big green sign over the lanes, the state route shield, cars streaming in */
  function highway() {
    /* California state route shield (spade shape, green with white edge), the 99 drawn with straight stems */
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h44q0 12 4 16q-4 30-26 38q-22-8-26-38q4-4 4-16z" fill="' + SIGN + '" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="' + (x + 22) + '" y="' + (y + 11) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="6" fill="#fff">CALIFORNIA</text>' +
      nine(x + 9, y + 40, 22, "#fff", 4) + nine(x + 24, y + 40, 22, "#fff", 4);
    return svg(
      '<rect width="400" height="260" fill="url(#p1)"/>' +
      '<circle cx="330" cy="70" r="26" fill="#ffcf7a" opacity=".9"/>' +
      /* Sierra in the haze */
      '<path d="M0 140l50-30 40 20 60-40 50 30 60-36 60 34 50-20 30 14v28H0z" fill="#8a7aa8" opacity=".6"/>' +
      /* gantry */
      '<rect x="40" y="40" width="6" height="110" fill="#8d9096"/><rect x="354" y="40" width="6" height="110" fill="#8d9096"/><rect x="40" y="44" width="320" height="6" fill="#8d9096"/>' +
      '<rect x="80" y="50" width="240" height="70" rx="5" fill="' + SIGN + '" stroke="#fff" stroke-width="2.5"/>' +
      shield(96, 60) +
      '<text x="234" y="84" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">Fresno</text>' +
      '<text x="234" y="106" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Next 4 Exits</text>' +
      /* lanes */
      '<path d="M0 150h400v110H0z" fill="#3a3a40"/><path d="M0 150h400" stroke="#d8d8d8" stroke-width="2"/>' +
      '<path d="M0 196h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="22 16"/><path d="M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="22 16"/>' +
      '<g class="anim-train"><g class="car"><rect x="0" y="206" width="64" height="20" rx="6" fill="' + ROSE + '"/><rect x="12" y="200" width="36" height="10" rx="3" fill="#2a2a32"/><circle cx="14" cy="228" r="5" fill="#111"/><circle cx="50" cy="228" r="5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="206" width="70" height="20" rx="6" fill="' + GOLD + '"/><rect x="14" y="200" width="38" height="10" rx="3" fill="#2a2a32"/><circle cx="16" cy="228" r="5" fill="#111"/><circle cx="56" cy="228" r="5" fill="#111"/></g></g>' +
      '<g class="carL"><rect x="0" y="164" width="60" height="18" rx="6" fill="' + JADE + '"/><circle cx="12" cy="184" r="4.5" fill="#111"/><circle cx="48" cy="184" r="4.5" fill="#111"/></g>' +
      '<g class="carL carL2"><rect x="0" y="164" width="66" height="18" rx="6" fill="#d9dde2"/><circle cx="12" cy="184" r="4.5" fill="#111"/><circle cx="54" cy="184" r="4.5" fill="#111"/></g>',
      sky("p1", "#f7a35c", "#f9d8a0"));
  }

  /* 2. The Old Fresno Water Tower downtown: red brick, the arched windows, the copper-green roof, birds going by */
  function watertower() {
    let bricks = "";
    for (let y = 86; y < 214; y += 9) bricks += '<path d="M150 ' + y + 'h100" stroke="#8a3a26" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p2)"/>' +
      '<circle cx="70" cy="60" r="22" fill="#fff2c8" opacity=".9"/>' +
      '<g class="bd"><path d="M-20 60l6 4 6-4" stroke="#333" stroke-width="2" fill="none"/></g><g class="bd bd2"><path d="M-40 80l5 3 5-3" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* tower body */
      '<path d="M150 214V86h100v128z" fill="#b8553a"/>' + bricks +
      '<rect x="144" y="80" width="112" height="10" fill="#d9c7a8"/>' +
      '<path d="M178 140a10 10 0 0 1 20 0v24h-20zM208 140a10 10 0 0 1 20 0v24h-20z" fill="#2a1a14"/>' +
      '<path d="M190 104a10 10 0 0 1 20 0v18h-20z" fill="#2a1a14"/>' +
      '<rect x="186" y="186" width="28" height="28" fill="#3a2418"/>' +
      /* tank + dome */
      '<rect x="156" y="56" width="88" height="26" fill="#cfd4d8" stroke="#8a9096" stroke-width="2"/>' +
      '<path d="M150 58q50-48 100 0z" fill="' + JADE + '" stroke="#1e6a50" stroke-width="2"/><rect x="197" y="12" width="6" height="14" fill="#1e6a50"/><circle cx="200" cy="10" r="4" fill="' + GOLD + '"/>' +
      /* palms + plaza */
      '<rect x="0" y="214" width="400" height="46" fill="#b9b2a4"/>' +
      '<path d="M60 214q3-60 0-100" stroke="#5a4030" stroke-width="5" fill="none"/><path d="M60 114q-24-6-40 8M60 114q24-6 40 8M60 114q-10-18-30-18M60 114q10-18 30-18" stroke="#2f6a3a" stroke-width="5" fill="none"/>' +
      '<path d="M340 214q3-60 0-100" stroke="#5a4030" stroke-width="5" fill="none"/><path d="M340 114q-24-6-40 8M340 114q24-6 40 8M340 114q-10-18-30-18M340 114q10-18 30-18" stroke="#2f6a3a" stroke-width="5" fill="none"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="#3a2418">OLD FRESNO WATER TOWER</text>',
      sky("p2", "#7ec4e8", "#f3e6c4"));
  }

  /* 3. The Tower Theatre in the Tower District: the deco spire lit in neon, the chasing marquee */
  function tower() {
    let bulbs = "";
    for (let x = 116; x < 290; x += 12) bulbs += '<circle class="ch ' + ["", "ch2", "ch3"][((x - 116) / 12) % 3] + '" cx="' + x + '" cy="145" r="2" fill="#ffe7a8"/>';
    let rings = "";
    for (let i = 0; i < 6; i++) rings += '<rect class="flk ' + (i % 2 ? "flk2" : "") + '" x="' + (190 + i) + '" y="' + (40 + i * 14) + '" width="' + (20 - 2 * i) + '" height="3" fill="' + (i % 2 ? JADE : ROSE) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p3)"/>' + stars(14) +
      /* spire */
      '<path d="M186 120V40l14-30 14 30v80z" fill="#e6dcc6" stroke="#b8ac90" stroke-width="2"/>' + rings +
      '<circle class="flk" cx="200" cy="12" r="4" fill="' + ROSE + '"/>' +
      /* facade */
      '<rect x="90" y="120" width="220" height="80" fill="#e6dcc6"/><rect x="90" y="116" width="220" height="6" fill="#c8b998"/>' +
      '<rect x="104" y="138" width="192" height="32" rx="3" fill="#1a1216" stroke="' + JADE + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="165" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#fff">TOWER</text>' +
      '<rect x="120" y="174" width="40" height="26" fill="#3a2a22"/><rect x="240" y="174" width="40" height="26" fill="#3a2a22"/><rect x="180" y="174" width="40" height="26" fill="#ffd98a" opacity=".5" class="flk"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#34343a"/><rect x="0" y="198" width="400" height="4" fill="#777"/>' +
      '<g class="car"><rect x="0" y="222" width="62" height="16" rx="5" fill="' + GOLD + '"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="48" cy="240" r="5" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GOLD + '">OLIVE AVE · TOWER DISTRICT</text>',
      sky("p3", "#0e0b22", "#3d2448"));
  }

  /* 4. The Valley: rows of grapevines drying into raisins, the snowy Sierra behind, a tractor working the rows */
  function valley() {
    let rows = "";
    for (let i = 0; i < 7; i++) {
      const y = 150 + i * 16;
      rows += '<path d="M0 ' + y + 'h400" stroke="#2f6a3a" stroke-width="' + (5 + i) + '"/>';
      for (let x = (i % 2) * 14; x < 400; x += 28) rows += '<circle cx="' + x + '" cy="' + (y - 2) + '" r="' + (3 + i * 0.5) + '" fill="#3f8a4a"/>';
    }
    let trays = "";
    for (let x = 20; x < 400; x += 46) trays += '<rect x="' + x + '" y="246" width="30" height="8" fill="#c9a46a"/><circle cx="' + (x + 8) + '" cy="250" r="1.6" fill="#4a2a3a"/><circle cx="' + (x + 16) + '" cy="250" r="1.6" fill="#4a2a3a"/><circle cx="' + (x + 23) + '" cy="250" r="1.6" fill="#4a2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#p4)"/>' +
      '<circle cx="366" cy="84" r="16" fill="#fff4c8" class="sh"/>' +
      /* Sierra Nevada with snow caps */
      '<path d="M0 130l60-50 40 26 70-60 60 50 50-34 70 52 50-30v46H0z" fill="#6f7fa8"/>' +
      '<path d="M150 64l20-18 22 18-10 6-12-6-10 6zM270 70l12-12 16 12-8 4-8-4zM50 90l10-10 12 10-6 4z" fill="#fff"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#b9a46a"/>' + rows +
      '<g class="tr"><rect x="20" y="124" width="34" height="16" rx="3" fill="' + ROSE + '"/><rect x="40" y="112" width="14" height="14" fill="#2a2a32"/><circle cx="26" cy="142" r="7" fill="#111"/><circle cx="50" cy="144" r="5" fill="#111"/></g>' +
      trays +
      '<text x="12" y="30" font-family="Anton, Impact, sans-serif" font-size="15" fill="#3a2418">THE CENTRAL VALLEY · RAISIN COUNTRY</text>',
      sky("p4", "#8fd0f0", "#f5e8c8"));
  }

  /* 5. The corner: Elm Ave and California Ave in Southwest Fresno, the name tagged, the Pacific Southwest Building lit up downtown */
  function corner() {
    let bricks = "";
    for (let y = 92; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#4a2e22"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1210"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#p5)"/>' + stars(8) + IC_PSW + bricks +
      '<rect x="0" y="90" width="400" height="4" fill="#2a1814"/>' +
      tag("PLANET ASIA", 18, 142, 40, GOLD, -6) +
      tag("CALI AGENTS", 34, 188, 26, JADE, -4) + tag("GOLD CHAIN", 196, 200, 20, ROSE, -7) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="96" width="5" height="114" fill="#4a5058"/>' +
      '<rect x="304" y="96" width="92" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="350" y="111" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Elm Ave</text>' +
      '<rect x="292" y="120" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="344" y="135" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">California Ave</text>',
      sky("p5", "#0e0b22", "#5a3040"));
  }

  /* Pacific Southwest Building: downtown Fresno's 1920s tower, cream terra cotta, the lit cupola on top */
  const IC_PSW = '<g>' +
    '<rect x="60" y="62" width="40" height="30" fill="#2a2040"/><rect x="110" y="54" width="30" height="38" fill="#2a2040"/><rect x="262" y="58" width="36" height="34" fill="#2a2040"/><rect x="306" y="66" width="40" height="26" fill="#2a2040"/>' +
    '<rect x="178" y="30" width="44" height="62" fill="#e2d6bc"/><rect x="186" y="18" width="28" height="14" fill="#d4c6a6"/>' +
    '<path d="M188 18q12-16 24 0z" fill="' + JADE + '"/><rect x="198" y="0" width="4" height="6" fill="' + GOLD + '"/>' +
    '<rect class="flk" x="184" y="40" width="5" height="6" fill="#ffd98a"/><rect x="194" y="40" width="5" height="6" fill="#ffd98a" opacity=".7"/><rect class="flk flk2" x="204" y="52" width="5" height="6" fill="#ffd98a"/><rect x="212" y="64" width="5" height="6" fill="#ffd98a" opacity=".7"/><rect class="flk" x="188" y="76" width="5" height="6" fill="#ffd98a"/>' +
    '</g>';

  window.SCENES = { highway, watertower, tower, valley, corner };
})();
