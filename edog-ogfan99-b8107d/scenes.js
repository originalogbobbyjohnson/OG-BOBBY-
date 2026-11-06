/* Ed O.G. (Roxbury, Boston + New England) opening scenes. Each one is a small animated SVG, 400 x 260. CSS classes prefixed eo- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes eoflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.eo-flk{animation:eoflick 2.2s infinite}.eo-flk2{animation-delay:.7s}' +
    '@keyframes eoroll{from{transform:translateX(-120px)}to{transform:translateX(500px)}}.eo-car{animation:eoroll 8s linear infinite}.eo-car2{animation-duration:11s;animation-delay:-5s}' +
    '@keyframes eorun{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.eo-run{animation:eorun 5s linear infinite}.eo-run2{animation-delay:-2.5s}' +
    '@keyframes eolegs{0%,100%{transform:skewX(18deg)}50%{transform:skewX(-18deg)}}.eo-legs{transform-box:fill-box;transform-origin:50% 0;animation:eolegs .4s linear infinite}' +
    '@keyframes eokite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(10px,-8px) rotate(8deg)}}.eo-kite{transform-box:fill-box;transform-origin:50% 100%;animation:eokite 3s ease-in-out infinite}' +
    '@keyframes eodrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.eo-bird{animation:eodrift 13s linear infinite}.eo-bird2{animation-delay:-6s}' +
    '@keyframes eobeam{0%,100%{opacity:.15}50%{opacity:.55}}.eo-beam{animation:eobeam 3s ease-in-out infinite}.eo-beam2{animation-delay:1.5s}' +
    '@keyframes eofall{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.eo-leaf{animation:eofall 7s linear infinite}.eo-leaf2{animation-delay:-3s}.eo-leaf3{animation-delay:-5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 12) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '" opacity=".85"/>';
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.2 + 14) + '" height="14" rx="7" fill="' + color + '"/><text x="' + (x + (label.length * 6.2 + 14) / 2) + '" y="' + (y + 10.4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  const GOLD = "#ffb000", RED = "#d7263d", BLUE = "#3fa7d6", OL = "#ed8b00";

  /* 1. Roxbury Crossing on the Orange Line: platforms down in the Southwest Corridor cut, the arched glass headhouse above, an Orange Line train sliding in */
  function station() {
    const car = (x, w) => {
      let win = ""; for (let i = x + 14; i < x + w - 20; i += 34) win += '<rect x="' + i + '" y="148" width="22" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return '<rect x="' + x + '" y="138" width="' + w + '" height="54" rx="6" fill="#d8dbdf" stroke="#5c636b" stroke-width="2"/>' +
        '<rect x="' + x + '" y="172" width="' + w + '" height="7" fill="' + OL + '"/>' + win +
        '<circle cx="' + (x + 24) + '" cy="194" r="5" fill="#222"/><circle cx="' + (x + w - 24) + '" cy="194" r="5" fill="#222"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#es1)"/>' + stars(12) +
      /* street level + arched headhouse */
      '<rect x="0" y="92" width="400" height="10" fill="#6b6f76"/>' +
      '<path d="M120 92V58q80-44 160 0v34z" fill="#b9d3e4" opacity=".55" stroke="#4a5560" stroke-width="2"/>' +
      [140, 160, 180, 200, 220, 240, 260].map(x => '<path d="M' + x + ' 92V' + (58 - 30 * (1 - Math.pow((x - 200) / 80, 2))) + '" stroke="#4a5560" stroke-width="1.4"/>').join("") +
      '<rect x="112" y="88" width="176" height="6" fill="#8a3b2c"/>' +
      '<rect x="20" y="66" width="70" height="26" fill="#8a3b2c"/><rect x="310" y="60" width="74" height="32" fill="#8a3b2c"/>' +
      /* the cut: concrete walls, platform */
      '<rect x="0" y="102" width="400" height="26" fill="#9a9a94"/><path d="M0 114h400" stroke="#888" stroke-width="1"/>' +
      '<g class="anim-train">' + car(6, 190) + car(200, 190) + '<path d="M390 140q8 0 8 14v34h-8z" fill="#c8cbd0"/></g>' +
      '<rect x="0" y="200" width="400" height="6" fill="#e8c547"/><rect x="0" y="206" width="400" height="54" fill="#7c7a74"/>' +
      '<rect x="104" y="216" width="192" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + F + ' font-weight="700" font-size="16" fill="#fff">Roxbury Crossing</text>' +
      pill(22, 225, OL, "ORANGE LINE") +
      '<text x="350" y="236" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">SOUTHWEST</text><text x="350" y="246" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">CORRIDOR</text>',
      sky("es1", "#0c1020", "#33405a"));
  }

  /* 2. Reggie Lewis Track and Athletic Center, Roxbury Crossing: the big indoor track, banked turn, runners lapping */
  function track() {
    let lanes = "";
    for (let i = 0; i < 6; i++) lanes += '<path d="M0 ' + (176 + i * 12) + 'h400" stroke="#f3e9e0" stroke-width="1.2"/>';
    let seats = "";
    for (let r = 0; r < 4; r++) for (let x = 6 + r * 4; x < 400; x += 14) seats += '<rect x="' + x + '" y="' + (112 + r * 12) + '" width="10" height="8" rx="2" fill="' + ["#1f4e8c", "#2a5c9a"][r % 2] + '"/>';
    const runner = (cls, c) => '<g class="eo-run ' + cls + '"><circle cx="10" cy="168" r="5" fill="#2a1d18"/><rect x="6" y="173" width="9" height="16" rx="3" fill="' + c + '"/><rect class="eo-legs" x="7" y="188" width="7" height="14" fill="#2a1d18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b2230"/>' +
      '<path d="M0 0h400v100H0z" fill="#2b3446"/>' +
      [40, 120, 200, 280, 360].map(x => '<path d="M' + x + ' 0l-30 100M' + x + ' 0l30 100" stroke="#3d4a60" stroke-width="2"/>').join("") +
      [60, 200, 340].map((x, i) => '<rect class="eo-beam ' + (i % 2 ? "eo-beam2" : "") + '" x="' + (x - 20) + '" y="0" width="40" height="110" fill="#fff6d6" opacity=".25"/><rect x="' + (x - 14) + '" y="4" width="28" height="6" fill="#fff6d6"/>').join("") +
      '<rect x="60" y="72" width="280" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="91" text-anchor="middle" ' + A + ' font-size="15" fill="' + GOLD + '">REGGIE LEWIS CENTER</text>' +
      seats + '<rect x="0" y="160" width="400" height="4" fill="#ddd"/>' +
      '<rect x="0" y="164" width="400" height="80" fill="#b5452e"/>' + lanes +
      runner("", RED) + runner("eo-run2", BLUE) +
      '<rect x="0" y="244" width="400" height="16" fill="#3b6b3a"/>' +
      '<text x="200" y="256" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">ROXBURY CROSSING · TRACK AND ATHLETIC CENTER</text>',
      "");
  }

  /* 3. Franklin Park, Roxbury: rolling meadow, a Roxbury puddingstone outcrop, elms, a kite up over the hill */
  function park() {
    let trees = "";
    [[20, 118, 28, "#3f7a3a"], [74, 112, 22, "#4f8a3a"], [318, 110, 26, "#c46a2a"], [380, 118, 28, "#3f7a3a"]].forEach(t => trees += tree(t[0], t[1], t[2], t[3]));
    /* puddingstone: dark conglomerate rock with embedded pebbles */
    let peb = "";
    for (let i = 0; i < 26; i++) peb += '<ellipse cx="' + (150 + (i * 37) % 110) + '" cy="' + (176 + (i * 13) % 34) + '" rx="' + (3 + i % 3) + '" ry="' + (2 + i % 2) + '" fill="' + ["#b8a894", "#9c8f80", "#d1c3ae", "#7d7268"][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#es3)"/>' +
      '<circle cx="70" cy="46" r="20" fill="#ffe7a0"/>' +
      '<path d="M0 140q100-50 200-40t200 30v130H0z" fill="#6a9a4a"/>' +
      trees +
      '<path d="M0 190q120-30 260-10t140 10v70H0z" fill="#5a8a3e"/>' +
      '<path d="M138 214q4-44 50-50q50-6 78 20q14 16 6 30z" fill="#5a524c"/>' + peb +
      /* kite on its string */
      '<path d="M296 196Q300 120 312 70" stroke="#fff" stroke-width="1" fill="none"/>' +
      '<g class="eo-kite"><path d="M312 52l12 16-12 18-12-18z" fill="' + RED + '" stroke="#7a1414" stroke-width="1"/><path d="M312 52v34M300 68h24" stroke="' + GOLD + '" stroke-width="1"/><path d="M312 86q-4 8 2 14q-6 6 0 12" stroke="' + BLUE + '" stroke-width="2" fill="none"/></g>' +
      '<rect x="290" y="196" width="10" height="20" rx="4" fill="#2a1d18"/><circle cx="295" cy="190" r="5" fill="#2a1d18"/>' +
      '<path class="eo-bird" d="M0 60q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/><path class="eo-bird eo-bird2" d="M0 84q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">FRANKLIN PARK · ROXBURY PUDDINGSTONE</text>',
      sky("es3", "#8fc0e2", "#f2ddb0"));
  }

  /* 4. Nubian Station, Nubian Square: the old copper-roofed iron-and-glass canopy turned bus hub, an MBTA bus pulling out */
  function busway() {
    let posts = "";
    for (let x = 40; x <= 360; x += 40) posts += '<rect x="' + (x - 2) + '" y="96" width="4" height="96" fill="#2e4a3e"/><path d="M' + (x - 16) + ' 96q16-14 32 0" stroke="#2e4a3e" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#es4)"/>' + stars(6) +
      '<rect x="10" y="40" width="90" height="56" fill="#8a3b2c"/><rect x="300" y="34" width="90" height="62" fill="#a5643c"/>' +
      [20, 44, 68, 312, 336, 360].map(x => '<rect x="' + x + '" y="52" width="14" height="12" fill="#ffd98a" opacity=".6" class="eo-flk"/>').join("") +
      /* canopy: green copper hip roof with clerestory glass */
      '<path d="M16 96l30-30h308l30 30z" fill="#4f9a86"/><rect x="60" y="56" width="280" height="12" fill="#cfe6ff" opacity=".7"/><path d="M60 56l20-14h240l20 14z" fill="#5fae98"/>' +
      '<path d="M16 96h368" stroke="#2e4a3e" stroke-width="3"/>' + posts +
      '<rect x="0" y="192" width="400" height="68" fill="#4a4a50"/><path d="M0 226h400" stroke="#e8c547" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="eo-car"><rect x="0" y="146" width="120" height="50" rx="6" fill="#f2f2ee" stroke="#555" stroke-width="1.5"/><rect x="0" y="180" width="120" height="6" fill="#ffc72c"/>' +
      [8, 34, 60, 86].map(x => '<rect x="' + x + '" y="154" width="20" height="16" rx="2" fill="#26313d"/>').join("") +
      '<rect x="102" y="150" width="14" height="22" rx="2" fill="#26313d"/><rect x="74" y="140" width="40" height="9" rx="2" fill="#111"/><text x="94" y="147" text-anchor="middle" ' + F + ' font-weight="700" font-size="7" fill="#ffc72c">28 MATTAPAN</text>' +
      '<circle cx="22" cy="198" r="6" fill="#111"/><circle cx="96" cy="198" r="6" fill="#111"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">NUBIAN STATION · NUBIAN SQUARE, ROXBURY</text>',
      sky("es4", "#16203a", "#6a7aa0"));
  }

  /* Mission Church (Basilica of Our Lady of Perpetual Help) on Mission Hill: dark puddingstone, twin spires with copper crosses */
  const mission = (x, base, s) =>
    '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')">' +
    '<rect x="-50" y="-60" width="100" height="60" fill="#3d3a3e"/><path d="M-50 -60l50-28 50 28z" fill="#353238"/>' +
    '<circle cx="0" cy="-48" r="10" fill="#c9a24a" opacity=".7" class="eo-flk"/>' +
    '<rect x="-70" y="-130" width="22" height="130" fill="#3d3a3e"/><rect x="48" y="-130" width="22" height="130" fill="#3d3a3e"/>' +
    '<path d="M-72 -130l13-54 13 54zM46 -130l13-54 13 54z" fill="#4f9a86"/>' +
    '<path d="M-59 -184v-10M-63 -190h8M59 -184v-10M55 -190h8" stroke="#c9a24a" stroke-width="2"/>' +
    '<rect x="-64" y="-110" width="10" height="18" rx="5" fill="#ffd98a" opacity=".6"/><rect x="54" y="-110" width="10" height="18" rx="5" fill="#ffd98a" opacity=".6"/></g>';

  /* 5. Columbus Ave & Station St at Roxbury Crossing: his name on the brick, Mission Church's twin spires up the hill behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#es5)"/>' + stars(8) + mission(176, 94, .42) +
      '<rect x="20" y="64" width="60" height="28" fill="#151a24"/><rect x="250" y="56" width="48" height="36" fill="#151a24"/>' +
      bricks(92, 212, "#5a2e22") +
      tag("EDO G", 22, 170, 52, GOLD, -5) + tag("HAVE IT", 40, 204, 20, BLUE, -3) + tag("BULLDOGS", 24, 124, 20, RED, -7) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="eo-car eo-car2"><rect x="0" y="236" width="50" height="16" rx="5" fill="#2f5d8a"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="38" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="332" y="66" width="5" height="148" fill="#4a5058"/>' +
      '<rect x="280" y="60" width="110" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="75" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Columbus Ave</text>' +
      '<rect x="280" y="84" width="110" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Station St</text>' +
      '<circle class="eo-flk" cx="380" cy="24" r="4" fill="#ffe7a8"/>',
      sky("es5", "#0b1622", "#2c3a5a"));
  }

  window.SCENES = { station, track, park, busway, corner };
})();
