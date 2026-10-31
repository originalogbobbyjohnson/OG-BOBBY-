/* Castle Hill (the Bronx) opening scenes for the Remy Ma game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes win{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.win{animation:win 3s ease-in-out infinite}.w2{animation-delay:1s}.w3{animation-delay:2s}' +
    '@keyframes fly{0%{transform:translate(-40px,10px)}100%{transform:translate(460px,-30px)}}' +
    '.fly{animation:fly 11s linear infinite}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.flap{transform-box:fill-box;transform-origin:50% 50%;animation:flap .5s linear infinite}' +
    '@keyframes sail{0%{transform:translateX(-30px)}50%{transform:translateX(40px)}100%{transform:translateX(-30px)}}' +
    '.sail{animation:sail 12s ease-in-out infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.wave{animation:wave 3s linear infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:beam 4s ease-in-out infinite}.bm2{animation-delay:-2s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .6s ease-in-out infinite}.bb2{animation-delay:.2s}.bb3{animation-delay:.4s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PURP = "#c9a4ff", GOLD = "#f2c14e", PINK = "#ff6fae", CHROME = "#dfe4ec";

  /* 1. The 6 pulling into Castle Hill Av, up on the Pelham Line el over Westchester Av */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#3b4a3f"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#3b4a3f" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#e6dcff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) +
      '<circle cx="340" cy="36" r="15" fill="#f3ecff" opacity=".9"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#3b4a3f"/>' + girders +
      '<rect x="78" y="66" width="244" height="34" rx="4" fill="#111"/>' +
      '<rect x="78" y="66" width="244" height="4" fill="#fff"/>' +
      '<text x="92" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Castle Hill Av</text>' +
      bullet(298, 84, "6", "#00933c") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#00933c"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#e6dcff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "6", "#00933c") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1424"/>' +
      tag("CASTLE HILL", 22, 240, 28, PURP, -4) + tag("REM", 316, 242, 30, GOLD, -8),
      sky("g1", "#140a26", "#5a3f8f"));
  }

  /* 2. The Castle Hill Houses: tall red-brick towers and lower blocks, windows lighting up, pigeons over the roofs */
  function houses() {
    const tower = (x, y, w, h) => {
      let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (210 - y) + '" fill="#8a3b2a" stroke="#4a1d14" stroke-width="2"/>' +
        '<rect x="' + (x + w / 2 - 4) + '" y="' + y + '" width="8" height="' + (210 - y) + '" fill="#73301f"/>' +
        '<rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="6" fill="#5a2418"/>';
      let i = 0;
      for (let yy = y + 8; yy < 200; yy += 11) for (let xx = x + 5; xx < x + w - 6; xx += 10) {
        if (Math.abs(xx + 3 - (x + w / 2)) < 6) continue;
        i++;
        const lit = (i * 7) % 5 === 0;
        s += '<rect x="' + xx + '" y="' + yy + '" width="5" height="6" fill="' + (lit ? "#ffe39a" : "#2a1a22") + '"' + (lit ? ' class="win w' + (1 + i % 3) + '"' : '') + '/>';
      }
      return s;
    };
    let pigeons = "";
    for (let i = 0; i < 6; i++) pigeons += '<path class="flap" d="M' + (i * 16) + ' ' + (40 + (i % 3) * 8) + 'q4-5 8 0q4-5 8 0" stroke="#2a2233" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="70" cy="50" r="22" fill="#ffc86b" opacity=".9"/>' +
      tower(18, 120, 74, 0) + tower(110, 46, 70, 0) + tower(200, 34, 70, 0) + tower(290, 112, 92, 0) +
      '<g class="fly">' + pigeons + '</g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2d3a2a"/>' +
      '<path d="M0 214h400" stroke="#9aa39a" stroke-width="2"/>' +
      (function () { let f = ""; for (let x = 4; x < 400; x += 12) f += '<rect x="' + x + '" y="220" width="2" height="22" fill="#111"/>'; return f + '<rect x="0" y="222" width="400" height="2" fill="#111"/>'; })() +
      '<rect x="120" y="230" width="160" height="22" rx="3" fill="#123a5c" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" textLength="144" lengthAdjust="spacingAndGlyphs" fill="#fff">CASTLE HILL HOUSES</text>',
      sky("g2", "#ff9a6b", "#6a4aa8"));
  }

  /* 3. Castle Hill Point Park at the foot of Castle Hill Av: the fishing pier, a sailboat, the Throgs Neck Bridge out on the water */
  function point() {
    let waves = "";
    for (let y = 186; y < 250; y += 14) waves += '<path class="wave" d="M0 ' + y + (function () { let p = ""; for (let x = 0; x < 480; x += 20) p += 'q5-4 10 0t10 0'; return p; })() + '" stroke="#9fd3e8" stroke-width="1.5" fill="none" opacity=".45"/>';
    let rail = "";
    for (let x = 20; x < 200; x += 16) rail += '<rect x="' + x + '" y="196" width="3" height="22" fill="#5a4636"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(10) +
      '<circle cx="370" cy="40" r="16" fill="#fff3d0" opacity=".85"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#1f4a66"/>' +
      /* Throgs Neck Bridge: two steel towers, the main cables */
      '<rect x="160" y="78" width="8" height="74" fill="#8fa2b4"/><rect x="176" y="78" width="8" height="74" fill="#8fa2b4"/><rect x="158" y="88" width="28" height="4" fill="#8fa2b4"/><rect x="158" y="108" width="28" height="4" fill="#8fa2b4"/>' +
      '<rect x="316" y="78" width="8" height="74" fill="#8fa2b4"/><rect x="332" y="78" width="8" height="74" fill="#8fa2b4"/><rect x="314" y="88" width="28" height="4" fill="#8fa2b4"/><rect x="314" y="108" width="28" height="4" fill="#8fa2b4"/>' +
      '<path d="M100 132Q130 120 170 80Q250 150 330 80Q370 118 400 128" stroke="#b9c6d2" stroke-width="2" fill="none"/>' +
      '<rect x="100" y="132" width="300" height="5" fill="#6f8293"/>' +
      (function () { let l = ""; for (let x = 110; x < 400; x += 22) l += '<circle class="flk" cx="' + x + '" cy="131" r="1.6" fill="#ffe39a"/>'; return l; })() +
      '<path d="M0 150h400" stroke="#2e6688" stroke-width="2"/>' + waves +
      /* sailboat */
      '<g class="sail"><path d="M232 176h46l-8 10h-30z" fill="#f4efe6"/><path d="M254 176v-40l20 38z" fill="#f4efe6"/><path d="M252 176v-34l-16 32z" fill="' + PURP + '"/></g>' +
      /* the pier with a fishing rod */
      '<rect x="0" y="214" width="210" height="10" fill="#7a5c44"/><rect x="0" y="194" width="210" height="4" fill="#5a4636"/>' + rail +
      '<path d="M120 194l40-44" stroke="#2a2233" stroke-width="2"/><path d="M160 150q10 30 6 64" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<rect x="10" y="22" width="190" height="40" rx="4" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="105" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1" fill="#fff">CASTLE HILL POINT</text>' +
      '<text x="105" y="55" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#cfe9d6">ON THE EAST RIVER</text>',
      sky("g3", "#0c1a3a", "#5d6fb0"));
  }

  /* 4. Chrome 23, the battle league she started: the stage, two mics, spotlights swinging, crowd bobbing */
  function chrome() {
    let crowd = "";
    for (let i = 0; i < 14; i++) {
      const x = 14 + i * 28, cls = "bob bb" + (1 + i % 3);
      crowd += '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (222 + (i % 2) * 6) + '" r="10" fill="#0b0712"/><rect x="' + (x - 13) + '" y="' + (230 + (i % 2) * 6) + '" width="26" height="30" rx="8" fill="#0b0712"/></g>';
    }
    const mic = x => '<rect x="' + (x - 1.5) + '" y="132" width="3" height="66" fill="#9aa3ad"/><path d="M' + (x - 14) + ' 198h28" stroke="#9aa3ad" stroke-width="3"/>' +
      '<rect x="' + (x - 5) + '" y="118" width="10" height="16" rx="5" fill="' + CHROME + '" stroke="#555" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f0a18"/>' +
      '<g opacity=".28"><path class="beam" d="M100 0l-40 200h80z" fill="' + PURP + '"/><path class="beam bm2" d="M300 0l-40 200h80z" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="198" width="400" height="20" fill="#2a2236"/><rect x="0" y="198" width="400" height="3" fill="' + CHROME + '"/>' +
      '<text x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="46" letter-spacing="4" fill="url(#chr)" stroke="#555" stroke-width="1">CHROME 23</text>' +
      '<text class="flk" x="200" y="98" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="6" fill="' + GOLD + '">BATTLE NIGHT</text>' +
      mic(140) + mic(260) +
      '<text x="200" y="170" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + PINK + '">VS</text>' +
      crowd,
      '<linearGradient id="chr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#9aa3ad"/><stop offset=".55" stop-color="#5b6470"/><stop offset="1" stop-color="#e6ebf2"/></linearGradient>');
  }

  /* 5. Castle Hill Av and Randall Av by the Houses: the green street signs, a streetlight, her name on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="0" y="60" width="60" height="160" fill="#6e3022"/><rect x="330" y="40" width="70" height="180" fill="#6e3022"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3346"/>' +
      tag("REMY MA", 34, 140, 40, PURP, -7) + tag("CASTLE HILL", 46, 192, 24, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="252" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Castle Hill Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Randall Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#140a26", "#3d2a63"));
  }

  window.SCENES = { train, houses, point, chrome, corner };
})();
