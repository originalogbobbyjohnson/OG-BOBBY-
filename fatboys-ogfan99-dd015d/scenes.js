/* The Fat Boys game (NYC map, Brooklyn: East New York, the "Schenck Avenue boys" - Prince Markie Dee, Kool Rock-Ski, Buff Love the Human Beat Box).
   The C pulling into Shepherd Av under Pitkin Av, Radio City Music Hall the night of the May '83 talent contest that the Disco 3 won,
   the all-you-can-eat pizza spot from Krush Groove ('85), the California surf from "Wipeout" ('87), and Schenck Av & Glenmore Av with
   the copper onion domes of Holy Trinity Russian Orthodox Church (Glenmore Av, 1935) behind. 400 x 260 SVGs. Classes prefixed fb-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fbcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fb-car{animation:fbcar 7s linear infinite}.fb-car2{animation-delay:-3.5s}' +
    '@keyframes fbblink{0%,100%{opacity:.25}50%{opacity:1}}.fb-bl{animation:fbblink 1.2s ease-in-out infinite}.fb-bl2{animation-delay:.4s}.fb-bl3{animation-delay:.8s}' +
    '@keyframes fbflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.95}}.fb-flk{animation:fbflick 2.6s infinite}' +
    '@keyframes fbspin{to{transform:rotate(360deg)}}.fb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:fbspin 6s linear infinite}' +
    '@keyframes fbsteam{0%{transform:translateY(0);opacity:0}30%{opacity:.7}100%{transform:translateY(-34px);opacity:0}}.fb-st{animation:fbsteam 2.4s ease-out infinite}.fb-st2{animation-delay:.8s}.fb-st3{animation-delay:1.6s}' +
    '@keyframes fbwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}.fb-wv{animation:fbwave 3s ease-in-out infinite}.fb-wv2{animation-delay:-1.5s}' +
    '@keyframes fbball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.fb-ball{animation:fbball 1s ease-in-out infinite}' +
    '@keyframes fbthump{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.fb-thump{transform-box:fill-box;transform-origin:50% 50%;animation:fbthump .45s ease-in-out infinite}' +
    '@keyframes fbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.fb-bob{animation:fbbob .6s ease-in-out infinite}.fb-bob2{animation-delay:.3s}' +
    '@keyframes fbgull{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.fb-gull{animation:fbgull 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcf3f", RED = "#ff5a36", SURF = "#3fc1ff", CREAM = "#f6ecd6", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 7) + '" y="' + (y + 7) + '" width="14" height="20" rx="6" fill="' + col + '"/></g>';

  /* 1. Shepherd Av, underground on the Fulton St line under Pitkin Av: cream tile, the tile band, the black sign with the C, the C sliding in */
  function shepherd() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe7d3"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="38" width="8" height="8" fill="' + (x % 32 ? "#8a3b2e" : "#d9a441") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d8cdb6"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#5a241b"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2d"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="fb-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="16" fill="#fff">Shepherd Av</text>' +
      bullet(318, 74, "C", BLUE) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#3f5f8f"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5b5853"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(334, 192, "#1b1b1b") + person(358, 196, "#2a2a2a") +
      txt("EAST NEW YORK", 150, 232, 12, CREAM, 'letter-spacing="4"'));
  }

  /* 2. Radio City Music Hall, the night of the May '83 talent contest: the buff stone Art Deco front, the tall red neon blade sign,
        the long marquee with chasing bulbs, the line out on the sidewalk, a cab rolling by */
  function radiocity() {
    let bulbs = "";
    for (let x = 34; x < 370; x += 12) bulbs += '<circle class="fb-bl fb-bl' + (x / 12 % 3 + 1 | 0) + '" cx="' + x + '" cy="128" r="2.4" fill="#fff3b0"/><circle class="fb-bl fb-bl' + ((x / 12 + 1) % 3 + 1 | 0) + '" cx="' + x + '" cy="166" r="2.4" fill="#fff3b0"/>';
    let wins = "";
    for (let x = 40; x < 370; x += 30) for (let y = 30; y < 110; y += 22) wins += '<rect x="' + x + '" y="' + y + '" width="14" height="14" fill="' + ((x + y) % 4 ? "#3a3220" : "#e8c66a") + '" opacity=".9"/>';
    const line = [40, 62, 84, 106, 128, 150].map((x, i) => person(x, 188, i % 2 ? "#141414" : "#222", i % 2 ? "fb-bob" : "fb-bob fb-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fr)"/>' + stars(8) +
      '<rect x="20" y="18" width="360" height="196" fill="#cbb995"/>' +
      [60, 120, 180, 240, 300, 350].map(x => '<rect x="' + x + '" y="18" width="4" height="100" fill="#b3a07a"/>').join("") + wins +
      /* the blade sign */
      '<rect x="292" y="6" width="34" height="114" rx="3" fill="#1a0b0b" stroke="#6b1a12" stroke-width="2"/>' +
      '<g class="fb-flk">' + "RADIO".split("").map((c, i) => txt(c, 309, 21 + i * 11, 11, "#ff3b2f", 'stroke="#ff9a8f" stroke-width=".4"')).join("") + '</g>' +
      '<g class="fb-flk" style="animation-delay:-1.3s">' + "CITY".split("").map((c, i) => txt(c, 309, 78 + i * 11, 11, "#ff3b2f", 'stroke="#ff9a8f" stroke-width=".4"')).join("") + '</g>' +
      /* marquee */
      '<rect x="26" y="122" width="350" height="50" rx="4" fill="#160d0a" stroke="#6b1a12" stroke-width="3"/>' + bulbs +
      txt("TALENT CONTEST", 200, 145, 17, "#ffe7a6", 'letter-spacing="2"') +
      txt("TONIGHT · MAY 23 · THE FINALS", 200, 161, 10, "#ff8a6a", 'letter-spacing="1.5"') +
      /* doors */
      '<rect x="40" y="172" width="320" height="42" fill="#3a2a1a"/>' +
      [70, 130, 190, 250, 310].map(x => '<rect x="' + (x - 18) + '" y="178" width="36" height="36" fill="#f2cf7a" opacity=".55"/>').join("") +
      line +
      '<rect x="0" y="214" width="400" height="46" fill="#3f4146"/><rect x="0" y="214" width="400" height="4" fill="#77797d"/>' +
      '<g class="fb-car"><rect x="0" y="234" width="50" height="14" rx="4" fill="#f4c20d"/><rect x="18" y="228" width="16" height="7" rx="2" fill="#f4c20d"/><circle cx="12" cy="248" r="4" fill="#111"/><circle cx="38" cy="248" r="4" fill="#111"/></g>' +
      txt("6TH AV · MIDTOWN", 110, 254, 9, "#e8e3d8", 'letter-spacing="3"'),
      sky("fr", "#090716", "#2c1838"));
  }

  /* 3. The all-you-can-eat pizza spot (Krush Groove, '85): red and white awning, a pie turning in the window, stacked empty plates, steam off the oven */
  function pizza() {
    let awn = "";
    for (let x = 30; x < 370; x += 20) awn += '<path d="M' + x + ' 56h20v26q-10 8-20 0z" fill="' + (((x - 30) / 20) % 2 ? "#fbf4e6" : "#d7261e") + '"/>';
    const pie = (cx, cy, r, cls) => { let s = '<g class="' + cls + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#e0a64a"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 4) + '" fill="#f2c94c"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 6) + '" fill="#e9752b" opacity=".35"/>';
      for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; s += '<path d="M' + cx + ' ' + cy + 'L' + (cx + Math.cos(a) * (r - 4)).toFixed(1) + ' ' + (cy + Math.sin(a) * (r - 4)).toFixed(1) + '" stroke="#c98a2e" stroke-width="1"/>'; }
      for (let i = 0; i < 7; i++) { const a = i * 0.9 + 0.3, d = (r - 8) * (0.35 + (i % 3) * 0.25); s += '<circle cx="' + (cx + Math.cos(a) * d).toFixed(1) + '" cy="' + (cy + Math.sin(a) * d).toFixed(1) + '" r="3" fill="#b3261e"/>'; }
      return s + '</g>'; };
    const plates = [0, 1, 2, 3, 4, 5].map(i => '<ellipse cx="306" cy="' + (196 - i * 6) + '" rx="26" ry="5" fill="#fff" stroke="#bbb"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fp)"/>' +
      '<rect x="20" y="20" width="360" height="200" fill="#8b3a2a"/>' +
      (() => { let b = ""; for (let y = 24; y < 220; y += 8) for (let x = (y / 8) % 2 ? 24 : 16; x < 376; x += 16) b += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3022"/>'; return b; })() +
      '<rect x="40" y="26" width="320" height="28" rx="3" fill="#0f2e1c" stroke="' + GOLD + '" stroke-width="2"/>' +
      txt("PIZZA · ALL YOU CAN EAT", 200, 46, 16, GOLD, 'letter-spacing="2"') +
      '<rect x="30" y="54" width="340" height="4" fill="#7a1b14"/>' + awn +
      /* window */
      '<rect x="40" y="92" width="220" height="114" fill="#2a1a12" stroke="#d9c8a0" stroke-width="4"/>' +
      '<rect x="44" y="96" width="212" height="106" fill="#ffd98a" opacity=".18"/>' +
      '<rect x="60" y="160" width="180" height="8" fill="#9aa0a6"/>' +
      pie(108, 140, 26, "fb-spin") + pie(190, 140, 26, "fb-spin") +
      /* oven + steam */
      '<rect x="276" y="92" width="80" height="60" rx="4" fill="#9aa0a6" stroke="#5f656b" stroke-width="2"/><rect x="284" y="104" width="64" height="30" rx="2" fill="#1d1d1d"/><rect x="288" y="108" width="56" height="22" fill="#ff7a1a" opacity=".55" class="fb-flk"/>' +
      '<path class="fb-st" d="M294 88q-6-8 0-16" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/><path class="fb-st fb-st2" d="M316 88q6-8 0-16" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/><path class="fb-st fb-st3" d="M338 88q-6-8 0-16" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/>' +
      /* the plates pile up */
      '<rect x="272" y="200" width="88" height="6" fill="#5b3a24"/>' + plates +
      '<rect x="0" y="220" width="400" height="40" fill="#53555a"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      txt("KRUSH GROOVE '85", 200, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("fp", "#0d0b14", "#2b1d16"));
  }

  /* 4. Wipeout ('87): the California beach, the sun, a curling wave, surfboards in the sand, the box cut on and thumping, a beach ball in the air */
  function surf() {
    return svg(
      '<rect width="400" height="260" fill="url(#fs)"/>' +
      '<circle cx="320" cy="56" r="30" fill="#ffd25a"/><circle cx="320" cy="56" r="40" fill="#ffd25a" opacity=".25"/>' +
      '<g class="fb-gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* sea */
      '<rect x="0" y="110" width="400" height="80" fill="#1f86c9"/>' +
      '<g class="fb-wv"><path d="M-40 124q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe8ff" stroke-width="3" fill="none"/></g>' +
      '<g class="fb-wv fb-wv2"><path d="M-40 150q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e6f7ff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      /* the big curl */
      '<path d="M20 190q30-100 120-96q-46 14-40 52q4 26 40 44z" fill="#2aa3e6"/><path d="M140 94q-46 14-40 52" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="138" cy="98" r="4" fill="#fff"/><circle cx="128" cy="96" r="3" fill="#fff"/>' +
      /* sand */
      '<path d="M0 182q100-12 200-4t200-6v88H0z" fill="#f1d79a"/>' +
      /* surfboards */
      '<g transform="rotate(-8 250 180)"><rect x="240" y="120" width="18" height="78" rx="9" fill="' + RED + '"/><rect x="247" y="122" width="4" height="74" fill="#fff"/></g>' +
      '<g transform="rotate(6 286 180)"><rect x="276" y="114" width="18" height="84" rx="9" fill="' + GOLD + '"/><rect x="283" y="116" width="4" height="80" fill="#1f86c9"/></g>' +
      '<g transform="rotate(-3 322 180)"><rect x="312" y="124" width="18" height="74" rx="9" fill="' + SURF + '"/><rect x="319" y="126" width="4" height="70" fill="#fff"/></g>' +
      /* the box */
      '<rect x="150" y="196" width="76" height="34" rx="4" fill="#26262b" stroke="#888" stroke-width="2"/><rect x="176" y="200" width="24" height="8" fill="#9ad"/>' +
      '<circle class="fb-thump" cx="164" cy="216" r="10" fill="#111" stroke="#aaa"/><circle class="fb-thump" cx="212" cy="216" r="10" fill="#111" stroke="#aaa"/>' +
      '<path d="M160 196q28-18 56 0" stroke="#888" stroke-width="3" fill="none"/>' +
      /* beach ball */
      '<g class="fb-ball"><circle cx="70" cy="214" r="13" fill="#fff"/><path d="M70 201a13 13 0 0 1 0 26z" fill="' + RED + '"/><path d="M57 214h26" stroke="' + SURF + '" stroke-width="5"/><circle cx="70" cy="214" r="13" fill="none" stroke="#333" stroke-width="1"/></g>' +
      /* towel */
      '<rect x="300" y="214" width="70" height="20" rx="2" fill="' + GOLD + '"/><path d="M300 220h70M300 228h70" stroke="' + RED + '" stroke-width="3"/>' +
      tag("WIPEOUT", 222, 82, 30, "#fff", -6),
      sky("fs", "#4fb3ef", "#b6e5ff"));
  }

  /* 5. Schenck Av & Glenmore Av: green street signs, the wall tagged FAT BOYS, the copper onion domes of Holy Trinity over the rooftops */
  function corner() {
    const dome = (x, y, s) => '<path d="M' + (x - 14 * s) + ' ' + y + 'q0-' + (22 * s) + ' ' + (14 * s) + '-' + (30 * s) + 'q' + (14 * s) + ' ' + (8 * s) + ' ' + (14 * s) + ' ' + (30 * s) + 'z" fill="#4f9a86" stroke="#2f6b5a" stroke-width="1.5"/>' +
      '<rect x="' + (x - 1.2) + '" y="' + (y - 44 * s) + '" width="2.4" height="' + (16 * s) + '" fill="' + GOLD + '"/><rect x="' + (x - 5 * s) + '" y="' + (y - 39 * s) + '" width="' + (10 * s) + '" height="2" fill="' + GOLD + '"/>' +
      '<rect x="' + (x - 11 * s) + '" y="' + y + '" width="' + (22 * s) + '" height="' + (12 * s) + '" fill="#d8b98a"/>';
    let rows = "";
    [[0, 96, 70], [70, 104, 60], [290, 100, 50], [340, 92, 60]].forEach(([x, y, w]) => { rows += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#6b4a3a"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#3e2a20"/>';
      for (let xx = x + 8; xx < x + w - 8; xx += 16) rows += '<rect class="fb-bl fb-bl' + ((xx / 16 | 0) % 3 + 1) + '" x="' + xx + '" y="' + (y + 10) + '" width="8" height="10" fill="#ffd98a" opacity=".7"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#fc)"/>' + stars(12) +
      /* the church: tan brick body, three copper domes */
      '<rect x="146" y="74" width="120" height="66" fill="#d8b98a"/><path d="M146 74l60-18l60 18z" fill="#b8956a"/>' +
      '<path d="M196 140v-26a10 10 0 0 1 20 0v26z" fill="#5a3a24"/>' + [160, 236].map(x => '<rect x="' + x + '" y="92" width="10" height="20" rx="5" fill="#ffe2a0" opacity=".8"/>').join("") +
      dome(206, 58, 1.25) + dome(156, 78, .8) + dome(256, 78, .8) +
      txt("HOLY TRINITY", 206, 90, 7, "#5a3a24", 'letter-spacing="1.5"') + rows +
      /* the wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("FAT BOYS", 16, 200, 48, GOLD, -5) + tag("DISCO 3", 200, 220, 20, RED, -4) + tag("BRRR!", 24, 222, 16, SURF, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="fb-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Schenck Av", 344, 82, 12, "#fff") +
      '<rect x="292" y="92" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Glenmore Av", 344, 108, 12, "#fff") +
      '<circle class="fb-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("fc", "#0a0c1a", "#30264a"));
  }

  window.SCENES = { shepherd: shepherd, radiocity: radiocity, pizza: pizza, surf: surf, corner: corner };
})();
