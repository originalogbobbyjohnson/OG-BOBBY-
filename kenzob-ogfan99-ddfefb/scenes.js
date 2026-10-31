/* Morris Heights / River Park Towers opening scenes for the Kenzo B game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}' +
    '.ball{animation:bounce 1s ease-in infinite}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", GOLD = "#ffd23f", ICE = "#7bdcff";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };

  /* 1. The 4 train pulling into Burnside Av, up on the el over Jerome Avenue */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3d4a3f"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3d4a3f" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) +
      '<circle cx="340" cy="34" r="14" fill="#fff4e0" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#3d4a3f"/>' + girders +
      '<rect x="70" y="66" width="260" height="34" rx="4" fill="#111"/>' +
      '<rect x="70" y="66" width="260" height="4" fill="#fff"/>' +
      '<text x="84" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Burnside Av</text>' +
      bullet(306, 84, "4", "#00933c") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#00933c"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 139, "4", "#00933c") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1420"/>' +
      tag("TOP DAWG", 22, 238, 30, PINK, -4) + tag("KENZO", 290, 240, 30, GOLD, -8),
      sky("g1", "#1a0f2a", "#5a3a6e"));
  }

  /* 2. River Park Towers: four rusty-brown brick towers over the Harlem River, windows flicking on */
  function towers() {
    const tower = (x, top, w) => {
      let t = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (200 - top) + '" fill="#8a4a2e"/>';
      for (let i = 6; i < w; i += 8) t += '<rect x="' + (x + i) + '" y="' + top + '" width="3" height="' + (200 - top) + '" fill="#6e3820"/>';
      for (let y = top + 8; y < 192; y += 12) for (let i = 2; i < w - 4; i += 8) {
        const k = (x * 7 + y * 3 + i) % 11;
        if (k < 4) t += '<rect class="flk' + (k === 1 ? " flk2" : k === 2 ? " flk3" : "") + '" x="' + (x + i) + '" y="' + y + '" width="4" height="5" fill="#ffd98a"/>';
      }
      t += '<rect x="' + (x - 2) + '" y="' + (top - 4) + '" width="' + (w + 4) + '" height="5" fill="#5a2c18"/>';
      return t;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(22) +
      tower(40, 50, 58) + tower(118, 30, 62) + tower(206, 36, 62) + tower(292, 56, 58) +
      '<rect x="0" y="196" width="400" height="10" fill="#2a2a30"/>' +
      '<path d="M0 206h400" stroke="#4a4a52" stroke-width="2"/>' +
      river(208, "#1d3550") +
      '<g class="boat"><path d="M0 222h40l-6 8h-30z" fill="#e8e8e8"/><rect x="10" y="214" width="16" height="8" fill="#e8e8e8"/></g>' +
      '<text x="200" y="22" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="' + GOLD + '">RIVER PARK TOWERS</text>',
      sky("g2", "#140a24", "#4b2f5e"));
  }

  /* 3. Roberto Clemente State Park: the riverfront promenade, the Washington Bridge arches, a ball bouncing on the court */
  function park() {
    let arches = "";
    for (let i = 0; i < 4; i++) arches += '<path d="M' + (20 + i * 95) + ' 140q47-60 95 0" fill="none" stroke="#c9b48a" stroke-width="6"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 14) rail += '<rect x="' + x + '" y="166" width="2" height="16" fill="#2b3a2b"/>';
    const lamp = x => '<rect x="' + (x - 2) + '" y="120" width="4" height="60" fill="#1d2a1d"/><circle class="flk" cx="' + x + '" cy="118" r="6" fill="#fff0b8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="320" cy="50" r="22" fill="#ffb36b" opacity=".9"/>' +
      '<path d="M0 80h400" stroke="#8a7a5a" stroke-width="5"/>' + arches +
      '<path d="M0 100l60-30 80 20 90-26 90 18 80-20v40H0z" fill="#3a5a3a" opacity=".6"/>' +
      river(140, "#2c4a6a") +
      '<rect x="0" y="164" width="400" height="4" fill="#2b3a2b"/>' + rail + '<rect x="0" y="180" width="400" height="4" fill="#2b3a2b"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#5a6470"/>' +
      '<path d="M120 184v76M280 184v76M120 224h160" stroke="#f4f1e8" stroke-width="2" opacity=".7"/>' +
      lamp(40) + lamp(360) +
      '<rect x="300" y="190" width="4" height="50" fill="#d9d9d9"/><rect x="286" y="190" width="28" height="18" fill="#fff" stroke="#999"/><path d="M294 210h12l-2 10h-8z" fill="none" stroke="' + PINK + '" stroke-width="2"/>' +
      '<g class="ball"><circle cx="230" cy="232" r="8" fill="#e8742a"/><path d="M222 232h16M230 224v16" stroke="#3a1a0a" stroke-width="1"/></g>' +
      '<text x="20" y="36" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="#f4f1e8">CLEMENTE STATE PARK</text>',
      sky("g3", "#2a1a3e", "#e08a6a"));
  }

  /* 4. University Heights: the domed Gould Memorial Library and the Hall of Fame colonnade, pigeons flying over */
  function library() {
    let cols = "";
    for (let i = 0; i < 8; i++) cols += '<rect x="' + (128 + i * 19) + '" y="132" width="8" height="66" fill="#efe6d0"/>';
    let colon = "";
    for (let i = 0; i < 9; i++) { const x = 6 + i * 13; colon += '<rect x="' + x + '" y="168" width="5" height="36" fill="#d9ccae"/>'; colon += '<rect x="' + (400 - x - 5) + '" y="168" width="5" height="36" fill="#d9ccae"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="bird"><path d="M0 40q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="bird bird2"><path d="M0 60q4-4 8 0q4-4 8 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<path d="M140 92a60 52 0 0 1 120 0z" fill="#7d9a8a"/><path d="M152 92a48 40 0 0 1 96 0" fill="none" stroke="#5f7d6c" stroke-width="2"/>' +
      '<rect x="190" y="30" width="20" height="12" fill="#efe6d0"/><circle cx="200" cy="28" r="5" fill="#7d9a8a"/>' +
      '<rect x="136" y="92" width="128" height="20" fill="#e3d6b6"/>' +
      '<rect x="110" y="112" width="180" height="20" fill="#efe6d0"/><path d="M110 112l90-22 90 22z" fill="#e3d6b6" opacity=".0"/>' +
      '<path d="M120 132l80-24 80 24z" fill="#e3d6b6" stroke="#c9b993"/>' +
      '<rect x="110" y="132" width="180" height="6" fill="#d9ccae"/>' + cols +
      '<rect x="100" y="198" width="200" height="10" fill="#d9ccae"/>' +
      '<rect x="0" y="160" width="128" height="8" fill="#c9b993"/><rect x="272" y="160" width="128" height="8" fill="#c9b993"/>' + colon +
      '<rect x="0" y="204" width="400" height="56" fill="#3f5a36"/><rect x="170" y="208" width="60" height="52" fill="#b8ad98"/>' +
      '<rect x="296" y="60" width="2" height="40" fill="#555"/><path class="flag" d="M298 60h22v14h-22z" fill="' + PINK + '"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#f4f1e8">UNIVERSITY HEIGHTS</text>',
      sky("g4", "#8fc3e8", "#f3dcc0"));
  }

  /* 5. Cedar Av and W 179 St, by the towers: street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="270" y="10" width="40" height="120" fill="#6e3820" opacity=".7"/><rect x="320" y="30" width="40" height="100" fill="#6e3820" opacity=".7"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3540"/>' +
      tag("KENZO B", 34, 146, 38, PINK, -7) + tag("TOP 2 NOT 2", 44, 198, 24, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="262" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Cedar Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 179 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#1a0f2a", "#3d2a52"));
  }

  window.SCENES = { train, towers, park, library, corner };
})();
