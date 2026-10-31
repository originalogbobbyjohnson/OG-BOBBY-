/* Bronx opening scenes for the Mysonne game (Highbridge). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.car{animation:car 5.5s linear infinite}.car2{animation-delay:-2.7s}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
    '.tree{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.4s ease-in-out infinite}' +
    '@keyframes flut{0%{transform:translate(0,0)}25%{transform:translate(18px,-14px)}50%{transform:translate(36px,0)}75%{transform:translate(18px,10px)}100%{transform:translate(0,0)}}' +
    '.bfly{animation:flut 4s ease-in-out infinite}.bfly2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const star5 = (x, y, r, c) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '"/>'; };
  const GOLD = "#f2c230", RED = "#e63946", OLIVE = "#8fbf5a";

  /* 1. The 4 train pulling into 167 St, up on the el over River Av */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3e4a3a"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3e4a3a" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) +
      '<circle cx="334" cy="36" r="15" fill="#fff2d0" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#3e4a3a"/>' + girders +
      '<rect x="110" y="66" width="180" height="34" rx="4" fill="#111"/>' +
      '<rect x="110" y="66" width="180" height="4" fill="#fff"/>' +
      '<text x="124" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">167 St</text>' +
      bullet(266, 84, "4", "#00933c") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#00933c"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "4", "#00933c") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#161b16"/>' +
      tag("THE GENERAL", 20, 240, 28, GOLD, -4) + tag("BX", 330, 242, 32, RED, -8),
      sky("g1", "#0b1426", "#3a5a6a"));
  }

  /* 2. The High Bridge (1848): pale granite arches and the steel center span over the Harlem River, the water tower beyond */
  function highbridge() {
    let arches = "";
    [[0, 44], [52, 44], [104, 44], [270, 44], [322, 44], [374, 44]].forEach(([x, w]) => {
      arches += '<rect x="' + x + '" y="96" width="' + (w + 8) + '" height="120" fill="#c8c2b4"/>' +
        '<path d="M' + (x + 8) + ' 216V140a' + (w / 2 - 4) + ' ' + (w / 2 - 4) + ' 0 0 1 ' + (w - 8) + ' 0v76z" fill="#1b2433"/>';
    });
    let ribs = "";
    for (let x = 166; x <= 256; x += 10) { const t = (x - 156) / 110, y = (1 - t) * (1 - t) * 216 + 2 * t * (1 - t) * 34 + t * t * 216; ribs += '<path d="M' + x + ' 96V' + y.toFixed(1) + '" stroke="#5e6b75" stroke-width="2"/>'; }
    const cab = (cls, c) => '<g class="' + cls + '"><rect x="0" y="236" width="40" height="12" rx="4" fill="' + c + '"/><circle cx="9" cy="248" r="3.5" fill="#111"/><circle cx="31" cy="248" r="3.5" fill="#111"/><rect x="36" y="239" width="4" height="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(14) +
      '<g class="cld"><ellipse cx="0" cy="30" rx="44" ry="8" fill="#fff" opacity=".14"/></g><g class="cld cld2"><ellipse cx="0" cy="54" rx="34" ry="6" fill="#fff" opacity=".1"/></g>' +
      /* Highbridge Water Tower: granite octagon, pointed roof, lantern */
      '<rect x="330" y="20" width="22" height="76" fill="#b3ab9b"/><rect x="326" y="18" width="30" height="6" fill="#9a9282"/>' +
      '<path d="M327 18l14-14 14 14z" fill="#6f5a48"/><rect x="339" y="0" width="4" height="6" fill="#6f5a48"/>' +
      '<rect x="337" y="32" width="8" height="12" fill="#2a2f3a"/><rect x="337" y="56" width="8" height="12" fill="#2a2f3a"/>' +
      /* deck + railing */
      '<rect x="0" y="88" width="400" height="10" fill="#d8d2c4"/>' +
      (function () { let r = ""; for (let x = 0; x < 400; x += 8) r += '<rect x="' + x + '" y="78" width="2" height="10" fill="#2a2f3a"/>'; return r + '<rect x="0" y="77" width="400" height="2" fill="#2a2f3a"/>'; })() +
      arches +
      /* the steel arch center span */
      '<path d="M156 216Q211 34 266 216" fill="none" stroke="#5e6b75" stroke-width="7"/>' + ribs +
      '<rect x="148" y="96" width="10" height="120" fill="#c8c2b4"/><rect x="264" y="96" width="10" height="120" fill="#c8c2b4"/>' +
      /* lamps on the walkway */
      '<circle class="flk" cx="80" cy="72" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="211" cy="72" r="3" fill="#ffe7a8"/><circle class="flk" cx="330" cy="72" r="3" fill="#ffe7a8"/>' +
      /* river + the drive */
      '<rect x="0" y="212" width="400" height="20" fill="#1e3a52"/>' +
      '<g class="rip"><path d="M10 220h40M120 224h50M240 219h40M330 225h50" stroke="#9fc4e0" stroke-width="1.5" opacity=".6"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#1a1c20"/>' +
      cab("car", GOLD) + cab("car car2", "#d8dde3") +
      '<rect x="12" y="8" width="132" height="34" rx="4" fill="#123a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="78" y="24" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff">THE HIGH BRIDGE</text>' +
      '<text x="78" y="37" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="3" fill="' + GOLD + '">SINCE 1848</text>',
      sky("g2", "#0b1426", "#3a5a7a"));
  }

  /* 3. The Kingsbridge Armory: red-brick castle with crenellated towers, the great arched drill-hall roof, a rally banner */
  function armory() {
    const crenel = (x, y, w) => { let c = ""; for (let i = 0; i < w; i += 8) c += '<rect x="' + (x + i) + '" y="' + (y - 6) + '" width="5" height="6" fill="#8e3a26"/>'; return c; };
    const tower = (x, w, top) => '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (210 - top) + '" fill="#9a4029"/>' + crenel(x, top, w) +
      '<rect x="' + (x + w / 2 - 4) + '" y="' + (top + 16) + '" width="8" height="18" fill="#2a1410"/><rect x="' + (x + w / 2 - 4) + '" y="' + (top + 50) + '" width="8" height="18" fill="#2a1410"/>' +
      '<rect x="' + x + '" y="' + (top + 8) + '" width="' + w + '" height="3" fill="#d6c7a8"/>';
    let bricks = "";
    for (let y = 120; y < 210; y += 8) bricks += '<path d="M40 ' + y + 'h320" stroke="#7e3220" stroke-width=".6"/>';
    let arches = "";
    for (let i = 0; i < 7; i++) { const x = 80 + i * 36; arches += '<path d="M' + x + ' 196v-26a9 9 0 0 1 18 0v26z" fill="#2a1410"/><path d="M' + (x - 1) + ' 170a10 10 0 0 1 20 0" fill="none" stroke="#d6c7a8" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(20) +
      /* drill hall barrel roof */
      '<path d="M70 120Q200 30 330 120z" fill="#5a5f66"/><path d="M70 120Q200 30 330 120" fill="none" stroke="#8a9098" stroke-width="3"/>' +
      (function () { let r = ""; for (let i = 1; i < 8; i++) { const x = 70 + i * 32.5; r += '<path d="M' + x + ' 120V' + (120 - 45 * (1 - Math.pow((x - 200) / 130, 2))).toFixed(1) + '" stroke="#4a4f56" stroke-width="2"/>'; } return r; })() +
      /* main wall */
      '<rect x="40" y="116" width="320" height="94" fill="#a8452c"/>' + bricks + crenel(40, 116, 320) + arches +
      '<rect x="40" y="146" width="320" height="3" fill="#d6c7a8"/>' +
      tower(22, 40, 84) + tower(338, 40, 84) + tower(178, 44, 96) +
      /* the rally banner hanging from the center tower */
      '<g class="bannr"><path d="M136 132h128v34l-64 10-64-10z" fill="' + GOLD + '" stroke="#1a1a1a" stroke-width="1.5"/>' +
      '<text x="200" y="150" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#1a1a1a">THE MUSIC IS</text>' +
      '<text x="200" y="164" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#1a1a1a">THE MOVEMENT</text></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1c1a1c"/><rect x="0" y="210" width="400" height="6" fill="#4a464a"/>' +
      tag("UNTIL FREEDOM", 30, 248, 26, GOLD, -3),
      sky("g3", "#0a0f1e", "#3d3a5c"));
  }

  /* 4. The Botanical Garden conservatory: the white glass palm dome and its wings, butterflies over the flower beds */
  function conservatory() {
    let panes = "";
    for (let x = 168; x <= 232; x += 8) panes += '<path d="M' + x + ' 128Q200 ' + (40 + Math.abs(x - 200) * 1.4) + ' 200 56" stroke="#dfe9ec" stroke-width=".8" fill="none" opacity=".7"/>';
    let wing = (x, w) => { let s = '<path d="M' + x + ' 150Q' + (x + w / 2) + ' 118 ' + (x + w) + ' 150V200H' + x + 'z" fill="#bfe0d6" opacity=".85" stroke="#f7faf9" stroke-width="2"/>'; for (let i = x + 10; i < x + w; i += 10) s += '<path d="M' + i + ' 140V200" stroke="#f7faf9" stroke-width="1.2"/>'; return s + '<path d="M' + x + ' 172h' + w + '" stroke="#f7faf9" stroke-width="1.5"/>'; };
    const bf = (x, y, c, cls) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q-7-7-8 0q1 6 8 0q7-7 8 0q-1 6-8 0z" fill="' + c + '"/></g>';
    let flowers = "";
    for (let x = 8; x < 400; x += 14) flowers += '<circle cx="' + x + '" cy="' + (214 + (x % 3) * 3) + '" r="3.5" fill="' + ["#ff5d8f", GOLD, "#ffffff", "#b583ff"][x % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="66" cy="44" r="20" fill="#fff4c8"/>' +
      '<g class="cld"><ellipse cx="0" cy="34" rx="46" ry="9" fill="#fff" opacity=".6"/></g><g class="cld cld2"><ellipse cx="0" cy="62" rx="36" ry="7" fill="#fff" opacity=".5"/></g>' +
      /* palms inside */
      '<g class="tree"><path d="M200 128v-40" stroke="#5a4a2a" stroke-width="3"/><path d="M200 88q-18-4-24 8M200 88q18-4 24 8M200 88q-8-12-20-10M200 88q8-12 20-10" stroke="#2f7a3a" stroke-width="4" fill="none"/></g>' +
      wing(40, 110) + wing(250, 110) +
      /* central rotunda + dome */
      '<rect x="150" y="128" width="100" height="72" fill="#bfe0d6" opacity=".85" stroke="#f7faf9" stroke-width="2.5"/>' +
      (function () { let s = ""; for (let x = 160; x < 250; x += 10) s += '<path d="M' + x + ' 128V200" stroke="#f7faf9" stroke-width="1.2"/>'; return s; })() +
      '<path d="M150 128Q150 56 200 52Q250 56 250 128z" fill="#cfe8e0" opacity=".8" stroke="#f7faf9" stroke-width="2.5"/>' + panes +
      '<rect x="190" y="38" width="20" height="16" fill="#f7faf9"/><path d="M188 38l12-12 12 12z" fill="#f7faf9"/>' +
      '<path d="M120 200h160" stroke="#f7faf9" stroke-width="3"/><path d="M188 200v-18a12 12 0 0 1 24 0v18z" fill="#4a6a62"/>' +
      /* lawn, beds, path */
      '<rect x="0" y="200" width="400" height="60" fill="#3f8a3c"/>' + flowers +
      '<path d="M180 260L192 200h16L220 260z" fill="#d8ccb0"/>' +
      bf(96, 186, "#ff8c1a", "bfly") + bf(300, 176, GOLD, "bfly bfly2") + bf(150, 228, "#fff", "bfly bfly2"),
      sky("g4", "#5aa2d8", "#cde8f4"));
  }

  /* 5. W 167 St and Ogden Av in Highbridge: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* Art Deco apartment house behind */
      '<rect x="250" y="24" width="140" height="196" fill="#7a5a3e"/><rect x="250" y="24" width="140" height="8" fill="#c9a77a"/>' +
      (function () { let w = ""; for (let y = 40; y < 210; y += 18) for (let x = 262; x < 380; x += 22) w += '<rect x="' + x + '" y="' + y + '" width="11" height="10" fill="' + ((x + y) % 3 ? "#2a1d17" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="20" y="70" width="230" height="150" fill="#3e423a"/>' +
      tag("MYSONNE", 32, 146, 38, GOLD, -7) + tag("HIGHBRIDGE", 46, 196, 24, RED, -3) +
      star5(218, 104, 10, GOLD) + star5(232, 124, 7, GOLD) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 167 St</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Ogden Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1a14", "#2a4034"));
  }

  window.SCENES = { train, highbridge, armory, conservatory, corner };
})();
