/* Hackensack, New Jersey opening scenes for the Coi Leray game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .8s ease-in-out infinite}.bob2{animation-delay:-.4s}' +
    '@keyframes beam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0%;animation:beam 3s ease-in-out infinite}.beam2{animation-delay:-1.5s}' +
    '@keyframes carR{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.carR{animation:carR 5s linear infinite}.carR2{animation-delay:-2.5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", YEL = "#ffd23f", SKY = "#3ec7ff";

  /* 1. Anderson Street station, Pascack Valley Line: low platform, NJ Transit train with its orange, purple and blue stripes */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="22" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let trees = "";
    for (let x = 0; x < 400; x += 46) trees += '<circle cx="' + x + '" cy="92" r="26" fill="#3f7a3a"/><circle cx="' + (x + 22) + '" cy="84" r="20" fill="#4f8f45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + trees +
      /* sign on posts */
      '<rect x="60" y="20" width="5" height="40" fill="#555"/><rect x="335" y="20" width="5" height="40" fill="#555"/>' +
      '<rect x="40" y="14" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="41" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Anderson Street</text>' +
      badge(196, 34, 42, "NJT", "#0039a6") +
      '<text x="248" y="31" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">PASCACK VALLEY</text>' +
      '<text x="248" y="45" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">HACKENSACK</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="60" rx="8" fill="#d4d8de" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="140" width="300" height="5" fill="#f58025"/><rect x="8" y="145" width="300" height="5" fill="#8e258d"/><rect x="8" y="150" width="300" height="5" fill="#0039a6"/>' + windows +
        '<rect x="284" y="112" width="16" height="22" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="154" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="8" fill="#eab308"/><rect x="0" y="168" width="400" height="26" fill="#a29c90"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3a3d44"/>' +
      tag("COI", 30, 240, 36, PINK, -5) + tag("TRENDSETTER", 150, 236, 26, YEL, -4),
      sky("gs", "#ff9fc8", "#ffe2b8"));
  }

  /* 2. Bergen County Court House: white marble, columns, the green copper dome with its gold figure on top */
  function courthouse() {
    let cols = "";
    for (let x = 118; x <= 274; x += 26) cols += '<rect x="' + x + '" y="130" width="10" height="64" fill="#f2efe8"/><rect x="' + (x - 2) + '" y="126" width="14" height="5" fill="#d8d3c8"/>';
    let steps = "";
    for (let i = 0; i < 4; i++) steps += '<rect x="' + (100 - i * 10) + '" y="' + (194 + i * 6) + '" width="' + (200 + i * 20) + '" height="6" fill="' + (i % 2 ? "#d8d3c8" : "#e8e4da") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' +
      '<rect x="30" y="120" width="340" height="80" fill="#ece8de"/><rect x="30" y="116" width="340" height="8" fill="#d8d3c8"/>' +
      '<path d="M100 120L200 92 300 120z" fill="#e8e4da" stroke="#c8c2b4" stroke-width="2"/>' +
      /* drum + dome */
      '<rect x="150" y="62" width="100" height="34" fill="#ece8de"/><rect x="146" y="58" width="108" height="6" fill="#d8d3c8"/>' +
      (function () { let s = ""; for (let x = 156; x < 248; x += 12) s += '<rect x="' + x + '" y="68" width="6" height="22" fill="#c8c2b4"/>'; return s; })() +
      '<path d="M146 58q54-62 108 0z" fill="#5fae96" stroke="#3d8270" stroke-width="2"/>' +
      '<path d="M170 58q30-40 60 0" stroke="#3d8270" stroke-width="2" fill="none"/>' +
      '<rect x="194" y="18" width="12" height="10" fill="#5fae96"/>' +
      '<path class="flk" d="M200 2l4 8 6 2-6 4 2 8-6-5-6 5 2-8-6-4 6-2z" fill="#f2c94c"/>' +
      cols + steps +
      '<rect x="60" y="140" width="20" height="30" fill="#5a6070"/><rect x="320" y="140" width="20" height="30" fill="#5a6070"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#7fae5a"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#1d3a14" letter-spacing="3">BERGEN COUNTY COURT HOUSE</text>',
      sky("gh", "#6fb6ef", "#e2f1fb"));
  }

  /* 3. George Washington Bridge from the Jersey side: the gray steel lattice towers, cables, traffic streaming across */
  function bridge() {
    const tower = x => { let s = '<rect x="' + (x - 14) + '" y="40" width="8" height="150" fill="#8f99a3"/><rect x="' + (x + 6) + '" y="40" width="8" height="150" fill="#8f99a3"/>';
      for (let y = 46; y < 186; y += 18) s += '<path d="M' + (x - 10) + ' ' + y + 'l20 18M' + (x + 10) + ' ' + y + 'l-20 18" stroke="#8f99a3" stroke-width="2"/>'; return s; };
    let lights = "";
    for (let x = 0; x < 400; x += 16) lights += '<circle cx="' + x + '" cy="' + (60 + Math.pow((x - 200) / 20, 2) * 0.9) + '" r="1.6" fill="#fff6c2" class="flk"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' + stars(16) +
      '<path d="M0 210q100-6 400 0v50H0z" fill="#1d2b44"/>' +
      '<path d="M300 210l10-30h20v-20h14v20h22v30z" fill="#3a2f48"/>' +
      tower(80) + tower(320) +
      '<path d="M-20 60Q200 230 420 60" stroke="#b8c2cc" stroke-width="3" fill="none"/>' + lights +
      '<rect x="0" y="156" width="400" height="12" fill="#6f7a86"/><rect x="0" y="168" width="400" height="6" fill="#4a535e"/>' +
      '<g class="carR"><rect x="0" y="148" width="34" height="10" rx="3" fill="' + PINK + '"/><circle cx="32" cy="153" r="2" fill="#fff6c2"/></g>' +
      '<g class="carR carR2"><rect x="0" y="148" width="30" height="10" rx="3" fill="' + YEL + '"/><circle cx="28" cy="153" r="2" fill="#fff6c2"/></g>' +
      '<g class="car"><rect x="0" y="148" width="32" height="10" rx="3" fill="' + SKY + '"/><circle cx="2" cy="153" r="2" fill="#ff5a4f"/></g>' +
      '<path d="M0 220q60-8 120 0t120 0 160 0" stroke="#4a6a9a" stroke-width="2" fill="none" opacity=".6"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#e6f1fa" letter-spacing="3">GEORGE WASHINGTON BRIDGE</text>',
      sky("gb", "#120c2a", "#5a3a7a"));
  }

  /* 4. The stage: her name in pink lights, spotlights swinging, the crowd bouncing */
  function stage() {
    let bulbs = "";
    for (let x = 70; x <= 330; x += 13) bulbs += '<circle class="bulb' + ((x / 13) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="58" r="3" fill="' + YEL + '"/><circle class="bulb' + ((x / 13) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="112" r="3" fill="' + YEL + '"/>';
    let fans = "";
    for (let i = 0; i < 13; i++) { const x = 14 + i * 31, c = [PINK, YEL, SKY, "#e8e8e8"][i % 4];
      fans += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="216" r="9" fill="#1b1b22"/><path d="M' + (x - 13) + ' 260v-30q13-14 26 0v30z" fill="' + c + '"/><path d="M' + (x - 8) + ' 222l-6-18M' + (x + 8) + ' 222l6-18" stroke="#1b1b22" stroke-width="4" stroke-linecap="round"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="#14081a"/>' +
      '<path class="beam" d="M60 0l-30 200h60z" fill="' + PINK + '" opacity=".22"/><path class="beam beam2" d="M340 0l-30 200h60z" fill="' + SKY + '" opacity=".22"/>' +
      '<rect x="60" y="50" width="280" height="70" rx="6" fill="#1d0f24" stroke="' + PINK + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="100" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" fill="' + PINK + '" letter-spacing="4">COI LERAY</text>' +
      '<rect x="20" y="160" width="360" height="22" fill="#2a1a30"/><rect x="20" y="158" width="360" height="4" fill="' + PINK + '"/>' +
      '<rect x="190" y="130" width="4" height="30" fill="#999"/><circle cx="192" cy="128" r="5" fill="#333"/>' +
      fans +
      '<text x="200" y="176" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ffd6ea" letter-spacing="3">GIRLS IS PLAYERS TOO</text>');
  }

  /* 5. The corner: Main St and Anderson St in Hackensack, green signs, her name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a3a52"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#2d2234"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#3b2e44" stroke-width="1"/>'; return s; })() +
      tag("COI LERAY", 140, 156, 38, PINK, -5) +
      tag("PLAYERS", 220, 198, 26, YEL, -3) +
      tag("TRENDSETTER", 160, 108, 18, SKY, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Anderson St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + PINK + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#ffd6ea"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#ffd6ea" letter-spacing="2">HACKENSACK, NEW JERSEY</text>',
      sky("gk", "#1a0b2a", "#4a2a6a"));
  }

  window.SCENES = { train, courthouse, bridge, stage, corner };
})();
