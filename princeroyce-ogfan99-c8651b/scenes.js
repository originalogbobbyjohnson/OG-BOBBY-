/* Prince Royce game (NYC map, the Bronx: Mott Haven, the Patterson Houses where he grew up, E 139-145 St between 3 Av and Morris Av).
   3 Av-138 St, 3 Av-149 St, E 143 St and Brook Av are already on the map, so room 1 is the 4 and 5 at 138 St-Grand Concourse, two blocks west.
   Then the Patterson Houses with a crown-and-guitar mural, St. Ann's Church (1841, the Bronx's oldest), Mill Pond Park on the Harlem River,
   and E 139 St & Morris Av. Each scene is a small animated SVG, 400 x 260. CSS classes are prefixed "pr". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes prFlk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.prFlk{animation:prFlk 2.4s infinite}.prF2{animation-delay:.8s}' +
    '@keyframes prWin{0%,100%{opacity:.3}50%{opacity:1}}.prWin{animation:prWin 3s ease-in-out infinite}.prW2{animation-delay:1s}.prW3{animation-delay:2s}' +
    '@keyframes prWave{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.prWave{transform-box:fill-box;transform-origin:0 50%;animation:prWave 1.4s ease-in-out infinite}' +
    '@keyframes prJump{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.prJump{animation:prJump .7s ease-in-out infinite}' +
    '@keyframes prRope{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}.prRope{transform-box:fill-box;transform-origin:50% 0;animation:prRope .7s ease-in-out infinite}' +
    '@keyframes prBell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.prBell{transform-box:fill-box;transform-origin:50% 0;animation:prBell 1.6s ease-in-out infinite}' +
    '@keyframes prBoat{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.prBoat{animation:prBoat 14s linear infinite}' +
    '@keyframes prRip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.prRip{animation:prRip 3s linear infinite}' +
    '@keyframes prFly{0%{transform:translate(-60px,10px)}100%{transform:translate(470px,-24px)}}.prFly{animation:prFly 12s linear infinite}' +
    '@keyframes prHeart{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.prHeart{animation:prHeart 3s ease-out infinite}.prH2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, r) =>
    '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + (r || 11) / 2) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + ((r || 11) * 1.35) + '" fill="#fff">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PURP = "#c9a7ff", GOLD = "#ffd36e", PINK = "#ff6b8a";
  /* Patterson Houses tower: red brick, rows of windows, some lit */
  const tower = (x, y, w, base, seed) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (base - y) + '" fill="#9a4632" stroke="#5e2a1c" stroke-width="2"/>' +
      '<rect x="' + (x - 2) + '" y="' + (y - 5) + '" width="' + (w + 4) + '" height="5" fill="#5e2a1c"/>';
    let i = seed || 0;
    for (let yy = y + 8; yy < base - 10; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 11) {
      i++; const lit = (i * 7) % 5 === 0;
      s += '<rect x="' + xx + '" y="' + yy + '" width="6" height="7" fill="' + (lit ? "#ffe39a" : "#2a2026") + '"' + (lit ? ' class="prWin prW' + (1 + i % 3) + '"' : '') + '/>';
    }
    return s;
  };
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 10) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (col || "#2f6b3a") + '"/><circle cx="' + (x - r * 0.5) + '" cy="' + (y + 4) + '" r="' + r * 0.7 + '" fill="' + (col || "#2f6b3a") + '"/><circle cx="' + (x + r * 0.55) + '" cy="' + (y + 3) + '" r="' + r * 0.7 + '" fill="' + (col || "#2f6b3a") + '"/>';

  /* 1. 138 St-Grand Concourse, underground: tiled wall with the mosaic name band, the black sign with the 4 and 5, a silver train pulling in */
  function prstation() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8d2c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 30v120" stroke="#d8d2c4" stroke-width=".6"/>';
    let wins = "";
    for (let x = 30; x < 380; x += 46) wins += '<rect x="' + x + '" y="150" width="30" height="22" rx="2" fill="#bfe0ff" opacity=".85"/>';
    let lights = "";
    for (let x = 30; x < 400; x += 90) lights += '<rect x="' + x + '" y="6" width="50" height="5" fill="#fffbe0" class="prFlk' + (x % 180 ? " prF2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe9dc"/>' + tiles + lights +
      '<rect x="0" y="0" width="400" height="16" fill="#3a3a40"/>' +
      '<rect x="0" y="40" width="400" height="20" fill="#2f6b5a"/><path d="M0 40h400M0 60h400" stroke="#c9a24a" stroke-width="2"/>' +
      '<text x="200" y="55" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff" letter-spacing="3">138 ST · GRAND CONCOURSE</text>' +
      '<rect x="70" y="72" width="260" height="34" rx="3" fill="#111"/><rect x="70" y="72" width="260" height="3" fill="#fff"/>' +
      '<text x="80" y="96" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">138 St–Grand Concourse</text>' +
      bullet(290, 90, "4", "#00933c", 10) + bullet(314, 90, "5", "#00933c", 10) +
      '<g class="anim-train">' +
        '<rect x="0" y="130" width="420" height="70" rx="6" fill="#c9ced6" stroke="#7b8794" stroke-width="2"/>' +
        '<rect x="0" y="182" width="420" height="5" fill="#00933c"/>' + wins +
        bullet(380, 144, "4", "#00933c", 8) +
        '<path d="M0 132h420" stroke="#e8ecf2" stroke-width="2"/>' +
      '</g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a62"/><rect x="0" y="200" width="400" height="8" fill="#f2c14e"/>' +
      '<path d="M0 230h400" stroke="#4a4a52" stroke-width="2"/>' +
      tag("BOOGIE DOWN", 20, 250, 22, PURP, -3) + tag("ROYCE", 290, 252, 26, GOLD, -7));
  }

  /* 2. The Patterson Houses: red-brick towers, a crown-and-guitar mural on the low wall out front, kids jumping rope */
  function prpatterson() {
    return svg(
      '<rect width="400" height="260" fill="url(#prg2)"/>' +
      '<circle cx="340" cy="44" r="22" fill="#ffe08a" opacity=".9"/>' +
      tower(10, 40, 100, 190, 1) + tower(126, 70, 90, 190, 3) + tower(232, 30, 110, 190, 5) + tower(354, 80, 60, 190, 7) +
      '<rect x="0" y="190" width="400" height="70" fill="#8d8d96"/>' +
      '<rect x="40" y="140" width="220" height="64" fill="#3a2a54" stroke="#1a1030" stroke-width="2"/>' +
      '<path d="M60 182l4 -26 12 12 12 -20 12 20 12 -12 4 26z" fill="' + GOLD + '" stroke="#a07a1a" stroke-width="1.5"/>' +
      '<path d="M160 196c-8 -10 -6 -26 10 -30c16 4 18 20 10 30z" fill="#c98a4a" stroke="#6a3a1a" stroke-width="1.5"/><circle cx="170" cy="184" r="4" fill="#3a1a0a"/><rect x="168" y="146" width="4" height="34" fill="#6a3a1a"/>' +
      '<path d="M214 168l-10 -10a6 6 0 0 1 10 -8a6 6 0 0 1 10 8z" fill="' + PINK + '"/><path d="M236 186l-7 -7a4 4 0 0 1 7 -6a4 4 0 0 1 7 6z" fill="' + PINK + '"/>' +
      '<text x="92" y="198" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#fff" letter-spacing="2">THE BRONX</text>' +
      '<g transform="translate(320 196)"><path d="M-24 -30q24 40 48 0" stroke="#fff" stroke-width="1.5" fill="none" class="prRope"/>' +
      '<g class="prJump"><circle cx="0" cy="-34" r="5" fill="#6a4030"/><path d="M0 -29v14M0 -24l-8 -2M0 -24l8 -2M0 -15l-5 10M0 -15l5 10" stroke="' + PURP + '" stroke-width="3" stroke-linecap="round"/></g>' +
      '<circle cx="-28" cy="-34" r="4" fill="#3a2418"/><path d="M-28 -30v20M-28 -24l4 -6" stroke="' + PINK + '" stroke-width="3"/>' +
      '<circle cx="28" cy="-34" r="4" fill="#8a5a3a"/><path d="M28 -30v20M28 -24l-4 -6" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      '<rect x="20" y="226" width="150" height="20" rx="3" fill="#123a5c" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="95" y="241" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="1">PATTERSON HOUSES</text>',
      sky("prg2", "#ffb07a", "#8a5ab0"));
  }

  /* 3. St. Ann's Church on St. Ann's Av, Mott Haven: the 1841 gray fieldstone church with its white steeple, the bell swinging, churchyard trees */
  function prstann() {
    let stones = "";
    for (let y = 108; y < 206; y += 9) for (let x = 120 + ((y / 9) % 2) * 8; x < 280; x += 16) stones += '<rect x="' + x + '" y="' + y + '" width="14" height="7" rx="2" fill="#8e8a82" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#prg3)"/>' +
      '<g class="prFly"><path d="M0 40q5-6 10 0q5-6 10 0" stroke="#2a2233" stroke-width="2" fill="none"/></g>' +
      tree(50, 140, 34) + tree(352, 138, 36) +
      '<rect x="120" y="104" width="160" height="102" fill="#a7a299" stroke="#5a564e" stroke-width="2"/>' + stones +
      '<path d="M112 106l88 -40 88 40z" fill="#6a6a72"/>' +
      '<rect x="176" y="40" width="48" height="66" fill="#b2ada4" stroke="#5a564e" stroke-width="2"/>' +
      '<rect x="172" y="36" width="56" height="8" fill="#f2f0ea"/><rect x="180" y="16" width="40" height="22" fill="#f2f0ea" stroke="#9a968e"/>' +
      '<path d="M178 16l22 -10 22 10z" fill="#f2f0ea"/><path d="M200 6v-6M196 2h8" stroke="#f2f0ea" stroke-width="2"/>' +
      '<rect x="190" y="19" width="20" height="16" fill="#3a3a44"/>' +
      '<g class="prBell"><path d="M195 21h10l3 10h-16z" fill="' + GOLD + '"/><circle cx="200" cy="32" r="1.8" fill="#a07a1a"/></g>' +
      '<path d="M186 104v-24a14 14 0 0 1 28 0v24z" fill="#3a2a54"/><path d="M200 66v38" stroke="#c9a7ff" stroke-width="1" opacity=".6"/>' +
      '<path d="M136 160v-28a10 10 0 0 1 20 0v28z" fill="#2c4a66"/><path d="M244 160v-28a10 10 0 0 1 20 0v28z" fill="#2c4a66"/>' +
      '<rect x="184" y="168" width="32" height="38" fill="#5a2a1a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4a7a3a"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<path d="M' + x + ' 222v-14" stroke="#1a1a1a" stroke-width="2"/>'; return f + '<path d="M0 210h400" stroke="#1a1a1a" stroke-width="2"/>'; })() +
      '<rect x="0" y="236" width="400" height="24" fill="#8d8d96"/>' +
      '<rect x="270" y="214" width="120" height="18" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="330" y="227" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St Ann\'s Av</text>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#fff" letter-spacing="2">ST. ANN\'S CHURCH · 1841</text>',
      sky("prg3", "#9fd8ff", "#fff1d6"));
  }

  /* 4. Mill Pond Park on the Harlem River at sunset: the esplanade railing, the river, the old 145 St swing bridge, Harlem across the water, a boat going by */
  function prmillpond() {
    let skyline = "";
    [[0, 96, 40], [44, 84, 30], [78, 100, 50], [132, 90, 36], [250, 92, 44], [298, 80, 32], [334, 98, 66]].forEach((b, k) => {
      skyline += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (140 - b[1]) + '" fill="#3a2a54"/>';
      for (let yy = b[1] + 6; yy < 134; yy += 9) for (let xx = b[0] + 4; xx < b[0] + b[2] - 4; xx += 8) if ((xx + yy + k) % 4 === 0) skyline += '<rect x="' + xx + '" y="' + yy + '" width="3" height="4" fill="#ffd98a" class="prWin prW' + (1 + xx % 3) + '"/>';
    });
    let truss = "";
    for (let x = 170; x < 240; x += 10) truss += '<path d="M' + x + ' 128l10 -18M' + (x + 10) + ' 128l-10 -18" stroke="#7a8a9a" stroke-width="1.5"/>';
    let rip = "";
    for (let x = 0; x < 460; x += 40) rip += '<path d="M' + x + ' 166q10 -4 20 0t20 0" stroke="#ffd3a0" stroke-width="1.5" fill="none" opacity=".6"/><path d="M' + (x + 14) + ' 184q10 -4 20 0t20 0" stroke="#ffd3a0" stroke-width="1.5" fill="none" opacity=".4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#prg4)"/>' +
      '<circle cx="200" cy="96" r="30" fill="#ffcf7a" opacity=".9"/>' + skyline +
      '<rect x="0" y="128" width="400" height="6" fill="#5a6a7a"/>' +
      '<rect x="168" y="108" width="74" height="22" fill="none" stroke="#7a8a9a" stroke-width="2"/>' + truss +
      '<rect x="0" y="140" width="400" height="72" fill="#3a4a7a"/>' +
      '<g class="prRip">' + rip + '</g>' +
      '<g class="prBoat"><path d="M0 172h56l-8 10h-40z" fill="#f2f0ea"/><rect x="16" y="162" width="22" height="10" fill="#d7263d"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#6a6a6e"/>' +
      (function () { let r = ""; for (let x = 4; x < 400; x += 18) r += '<rect x="' + x + '" y="196" width="3" height="18" fill="#2a2a2e"/>'; return r + '<rect x="0" y="194" width="400" height="4" fill="#2a2a2e"/>'; })() +
      tree(30, 214, 18, "#2f5a3a") + tree(370, 216, 18, "#2f5a3a") +
      '<text class="prHeart" x="120" y="190" font-size="16" fill="' + PINK + '">♥</text><text class="prHeart prH2" x="270" y="186" font-size="14" fill="' + GOLD + '">♥</text>' +
      '<rect x="130" y="228" width="140" height="22" rx="3" fill="#2a6a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" fill="#fff" letter-spacing="2">MILL POND PARK</text>',
      sky("prg4", "#2a1a54", "#ff9a6a"));
  }

  /* 5. The corner: E 139 St & Morris Av, green signs, the wall tagged ROYCE, the Patterson towers behind */
  function prcorner() {
    const sign = (x, y, txt, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#prg5)"/>' + stars(12) +
      tower(250, 30, 70, 160, 2) + tower(326, 54, 74, 160, 6) +
      '<rect x="0" y="120" width="250" height="100" fill="#4a3a5a"/>' +
      (function () { let b = ""; for (let y = 124; y < 220; y += 8) b += '<path d="M0 ' + y + 'h250" stroke="#3a2a4a" stroke-width="1"/>'; return b; })() +
      tag("ROYCE", 20, 174, 38, GOLD, -5) + tag("SOY EL MISMO", 140, 152, 16, "#fff", -3) + tag("BACHATA BRONX", 18, 210, 20, PURP, -2) +
      '<rect x="250" y="160" width="150" height="60" fill="#3a2a30"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2b2b33"/><rect x="0" y="218" width="400" height="5" fill="#8d8d96"/>' +
      '<rect x="296" y="66" width="6" height="156" fill="#3f4a44"/>' +
      sign(244, 66, "E 139 St", 80) + sign(298, 90, "Morris Av", 92) +
      '<rect x="288" y="118" width="22" height="40" rx="3" fill="#222"/><circle class="prFlk" cx="299" cy="128" r="5" fill="#ff4d4d"/><circle cx="299" cy="140" r="5" fill="#553"/><circle cx="299" cy="151" r="5" fill="#353"/>' +
      '<text class="prHeart" x="350" y="200" font-size="18" fill="' + PINK + '">♥</text>',
      sky("prg5", "#120a1e", "#4a2a6a"));
  }

  window.SCENES = { prstation, prpatterson, prstann, prmillpond, prcorner };
})();
