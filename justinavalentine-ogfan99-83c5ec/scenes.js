/* Paterson / Passaic County, New Jersey opening scenes for the Justina Valentine game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes fall{from{stroke-dashoffset:0}to{stroke-dashoffset:-40}}' +
    '.fall{animation:fall .8s linear infinite}.fall2{animation-delay:-.4s}' +
    '@keyframes mist{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:.7;transform:translateY(-4px)}}' +
    '.mist{animation:mist 2.4s ease-in-out infinite}.mist2{animation-delay:-1.2s}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}.sway2{animation-delay:-1.5s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:1}}' +
    '.bulb{animation:glow 1.2s infinite}.bulb2{animation-delay:-.6s}' +
    '@keyframes beat{0%,100%{transform:scale(1)}15%{transform:scale(1.15)}30%{transform:scale(1)}}' +
    '.beat{transform-box:fill-box;transform-origin:50% 50%;animation:beat 1.1s ease-in-out infinite}' +
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
  const heart = (cx, cy, s, fill, cls) =>
    '<path' + (cls ? ' class="' + cls + '"' : '') + ' d="M' + cx + ' ' + (cy + s) + 'C' + (cx - s * 2) + ' ' + (cy - s * 0.2) + ' ' + (cx - s) + ' ' + (cy - s * 1.4) + ' ' + cx + ' ' + (cy - s * 0.5) + 'C' + (cx + s) + ' ' + (cy - s * 1.4) + ' ' + (cx + s * 2) + ' ' + (cy - s * 0.2) + ' ' + cx + ' ' + (cy + s) + 'z" fill="' + fill + '"/>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#ff3b4e", PINK = "#ff7ab6", GOLD = "#ffd34d";

  /* 1. Paterson station, NJ Transit Main Line: the platform is up on the raised line over Market St, the silver train rolls in */
  function train() {
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="20" rx="3" fill="#cfe6f5" opacity=".9"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 14) rail += '<rect x="' + x + '" y="158" width="3" height="16" fill="#3a3f46"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="40" ry="8" fill="#fff" opacity=".6"/></g><g class="cld cld2"><ellipse cx="0" cy="52" rx="28" ry="6" fill="#fff" opacity=".5"/></g>' +
      /* platform canopy */
      '<rect x="0" y="56" width="400" height="10" fill="#4a5058"/><path d="M0 66h400" stroke="#2a2e33" stroke-width="2"/>' +
      '<rect x="40" y="66" width="5" height="92" fill="#4a5058"/><rect x="200" y="66" width="5" height="92" fill="#4a5058"/><rect x="360" y="66" width="5" height="92" fill="#4a5058"/>' +
      /* station sign hanging from canopy */
      '<rect x="90" y="70" width="220" height="26" rx="3" fill="#111"/><rect x="90" y="70" width="220" height="3" fill="#fff"/>' +
      '<text x="102" y="89" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Paterson</text>' +
      badge(222, 84, 80, "NJ TRANSIT", "#0039a6") +
      /* the train: NJ Transit silver with orange/magenta/blue stripe */
      '<g class="anim-train">' +
        '<rect x="8" y="104" width="300" height="52" rx="6" fill="#d4d8de" stroke="#7a828c" stroke-width="2"/>' +
        '<rect x="8" y="138" width="300" height="4" fill="#f58025"/><rect x="8" y="142" width="300" height="3" fill="#a6228e"/><rect x="8" y="145" width="300" height="3" fill="#0039a6"/>' + windows +
        '<rect x="290" y="112" width="14" height="22" rx="3" fill="#cfe6f5"/><circle cx="300" cy="150" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + raised line embankment */
      '<rect x="0" y="156" width="400" height="6" fill="#eab308"/>' + rail +
      '<rect x="0" y="174" width="400" height="20" fill="#7a5a44"/>' +
      (function () { let b = ""; for (let y = 176; y < 194; y += 6) for (let x = (y % 12 ? 0 : 10); x < 400; x += 20) b += '<rect x="' + x + '" y="' + y + '" width="18" height="4" fill="#8e6a52"/>'; return b; })() +
      /* the street below the line */
      '<rect x="0" y="194" width="400" height="66" fill="#2c2c30"/><path d="M0 228h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 12"/>' +
      tag("SILK CITY", 22, 252, 26, RED, -4) + tag("JERZ", 290, 252, 26, GOLD, -7),
      sky("g1", "#6fb2e0", "#e6f2fa"));
  }

  /* 2. The Great Falls of the Passaic: dark basalt cliffs, the 77-foot white falls, mist rising, the footbridge over the chasm */
  function falls() {
    let water = "";
    for (let x = 150; x < 260; x += 8) water += '<path class="fall' + (x % 16 ? " fall2" : "") + '" d="M' + x + ' 70v118" stroke="#f4fbff" stroke-width="5" stroke-dasharray="14 6" opacity=".9"/>';
    let mist = "";
    for (let i = 0; i < 6; i++) mist += '<ellipse class="mist' + (i % 2 ? " mist2" : "") + '" cx="' + (140 + i * 26) + '" cy="' + (192 + (i % 2) * 6) + '" rx="22" ry="9" fill="#fff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="26" rx="42" ry="8" fill="#fff" opacity=".7"/></g>' +
      /* trees on top */
      (function () { let t = ""; for (let x = 0; x < 400; x += 22) t += '<circle cx="' + x + '" cy="' + (52 + (x % 3) * 3) + '" r="16" fill="' + (x % 44 ? "#3f7a3a" : "#4f8a44") + '"/>'; return t; })() +
      /* basalt cliffs */
      '<path d="M0 62h150v200H0z" fill="#3a3a3e"/><path d="M260 62h140v200H260z" fill="#3a3a3e"/>' +
      '<path d="M20 80v170M60 70v180M100 76v180M290 76v180M330 70v180M370 80v170" stroke="#2a2a2e" stroke-width="3"/>' +
      '<path d="M150 62h110v8H150z" fill="#4c6d7a"/>' + water +
      /* the river pool */
      '<rect x="0" y="196" width="400" height="64" fill="#4f7d8e"/>' + mist +
      /* footbridge across the chasm */
      '<path d="M0 104h400" stroke="#7a2e2a" stroke-width="5"/><path d="M0 94h400" stroke="#7a2e2a" stroke-width="2"/>' +
      (function () { let p = ""; for (let x = 4; x < 400; x += 16) p += '<path d="M' + x + ' 94v10" stroke="#7a2e2a" stroke-width="2"/>'; return p; })() +
      '<g class="bob"><circle cx="190" cy="84" r="4.5" fill="#2b1d16"/><rect x="185" y="88" width="10" height="14" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="128" y="226" width="144" height="22" rx="3" fill="#5a3a22" stroke="#e8d8b0" stroke-width="1.5"/>' +
      '<text x="200" y="241" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="#f4ead2">THE GREAT FALLS</text>',
      sky("g2", "#7cc0ea", "#e2f2fa"));
  }

  /* 3. Hinchliffe Stadium above the falls: the cream Art Deco wall, the colored tile bands, the ballfield, the crowd */
  function stadium() {
    let tiles = "";
    const tc = [RED, "#2f7fbf", GOLD, "#2f9a5a"];
    for (let x = 30; x < 370; x += 10) tiles += '<rect x="' + x + '" y="92" width="8" height="6" fill="' + tc[(x / 10) % 4] + '"/>';
    let crowd = "";
    for (let i = 0; i < 18; i++) { const x = 40 + i * 18, c = [RED, PINK, GOLD, "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (70 + (i % 3) * 3) + '" r="5" fill="#2b1d16"/><rect x="' + (x - 5) + '" y="' + (75 + (i % 3) * 3) + '" width="10" height="10" rx="3" fill="' + c + '"/></g>'; }
    let arches = "";
    for (let x = 60; x < 350; x += 50) if (x < 150 || x > 230) arches += '<path d="M' + x + ' 160v-36a14 14 0 0 1 28 0v36z" fill="#6a5a48"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<g class="cld cld2"><ellipse cx="0" cy="30" rx="36" ry="7" fill="#fff" opacity=".7"/></g>' +
      crowd +
      /* Deco wall, cream stucco */
      '<rect x="20" y="86" width="360" height="80" fill="#efe2c4"/><rect x="20" y="86" width="360" height="4" fill="#d8c69e"/>' + tiles + arches +
      '<rect x="150" y="116" width="100" height="34" rx="2" fill="#7a2e2a"/><rect x="154" y="120" width="92" height="26" fill="none" stroke="#ffd34d" stroke-width="1"/><text x="200" y="133" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="1" fill="#efe2c4">HINCHLIFFE</text><text x="200" y="143" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="7" letter-spacing="2" fill="#ffd34d">STADIUM</text>' +
      /* ballfield */
      '<rect x="0" y="166" width="400" height="94" fill="#3f8f3a"/>' +
      (function () { let s = ""; for (let x = 0; x < 400; x += 40) s += '<rect x="' + x + '" y="166" width="20" height="94" fill="#46993f"/>'; return s; })() +
      '<path d="M120 260l80 -60 80 60z" fill="#b8865a"/><rect x="196" y="226" width="8" height="8" fill="#fff" transform="rotate(45 200 230)"/>' +
      '<g class="bob"><circle cx="200" cy="210" r="5" fill="#2b1d16"/><rect x="195" y="215" width="10" height="14" rx="3" fill="#fff"/></g>',
      sky("g3", "#5aa6e0", "#cfe8f6"));
  }

  /* 4. Lambert Castle on Garret Mountain: the brownstone castle with its tower, Paterson spread out below, the trees moving */
  function castle() {
    let crenel = "";
    for (let x = 90; x < 330; x += 14) crenel += '<rect x="' + x + '" y="86" width="9" height="10" fill="#8a5a3e"/>';
    let wins = "";
    for (let x = 108; x < 320; x += 34) wins += '<path class="flk' + (x % 68 ? "" : " flk2") + '" d="M' + x + ' 150v-22a8 8 0 0 1 16 0v22z" fill="#ffd98a" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(10) +
      '<circle cx="340" cy="40" r="14" fill="#ffe7a8" opacity=".9"/>' +
      /* the castle, rough brown sandstone */
      '<rect x="90" y="96" width="240" height="100" fill="#8a5a3e"/>' + crenel +
      '<rect x="176" y="40" width="48" height="60" fill="#7a4e34"/>' +
      (function () { let c = ""; for (let x = 176; x < 224; x += 12) c += '<rect x="' + x + '" y="32" width="8" height="10" fill="#7a4e34"/>'; return c; })() +
      '<rect x="192" y="58" width="16" height="22" rx="8" fill="#ffd98a" class="flk"/>' +
      '<path d="M90 96h240" stroke="#5e3a26" stroke-width="2"/>' +
      (function () { let s = ""; for (let y = 106; y < 196; y += 12) s += '<path d="M90 ' + y + 'h240" stroke="#7a4e34" stroke-width="1" opacity=".6"/>'; return s; })() +
      wins +
      '<path d="M190 196v-30a10 10 0 0 1 20 0v30z" fill="#3a2418"/>' +
      /* hillside, trees swaying */
      '<path d="M0 196q200 -14 400 0v64H0z" fill="#2f5a2a"/>' +
      '<g class="sway"><path d="M40 210l-16 0 16 -40 16 40z" fill="#3f7a3a"/><rect x="38" y="210" width="4" height="10" fill="#5a3a22"/></g>' +
      '<g class="sway sway2"><path d="M360 212l-16 0 16 -40 16 40z" fill="#3f7a3a"/><rect x="358" y="212" width="4" height="10" fill="#5a3a22"/></g>' +
      /* city lights below */
      (function () { let l = ""; for (let i = 0; i < 26; i++) l += '<circle class="bulb' + (i % 2 ? " bulb2" : "") + '" cx="' + (12 + i * 15) + '" cy="' + (236 + (i % 4) * 5) + '" r="1.6" fill="#ffe7a8"/>'; return l; })() +
      '<text x="210" y="24" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="13" letter-spacing="3" fill="#f4efe3">LAMBERT CASTLE</text>',
      sky("g4", "#1a1530", "#5a3a5a"));
  }

  /* 5. Market St and Main St, downtown Paterson: green street signs, a streetlight, her name on the wall in red */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="282" y="50" width="90" height="170" fill="#6a3e30"/>' +
      (function () { let w = ""; for (let y = 60; y < 210; y += 18) for (let x = 292; x < 366; x += 18) w += '<rect x="' + x + '" y="' + y + '" width="9" height="12" fill="' + ((x + y) % 3 ? "#2a1a16" : "#ffd98a") + '"/>'; return w; })() +
      /* tag wall */
      '<rect x="14" y="70" width="228" height="150" fill="#33303a"/>' +
      '<rect x="14" y="70" width="228" height="150" fill="' + RED + '" opacity=".15"/>' +
      heart(200, 96, 12, PINK, "beat") +
      tag("JUSTINA", 26, 146, 42, RED, -7) + tag("VALENTINE", 44, 196, 28, GOLD, -3) +
      /* streetlight */
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      /* street signs */
      '<rect x="257" y="90" width="86" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Market St</text>' +
      '<rect x="261" y="112" width="78" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="300" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#1a070c", "#4a1a2a"));
  }

  window.SCENES = { train, falls, stadium, castle, corner };
})();
