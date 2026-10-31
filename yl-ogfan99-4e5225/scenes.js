/* Harlem opening scenes for the YL game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}.slow{animation-duration:22s;animation-delay:-8s}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes beam{0%,100%{opacity:.08}50%{opacity:.35}}' +
    '.beam{animation:beam 2s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,260px) rotate(360deg)}}' +
    '.leaf{transform-box:fill-box;animation:leaf 7s linear infinite}.lf2{animation-delay:2.3s}.lf3{animation-delay:4.6s}' +
    '@keyframes heat{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.15)}}' +
    '.heat{transform-box:fill-box;transform-origin:50% 100%;animation:heat .8s ease-in-out infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}' +
    '.ball{animation:bounce 1s ease-in infinite}' +
    '@keyframes car{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s;animation-direction:reverse}' +
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
  const ORANGE = "#f58426", BLUE = "#1d6fd1", GOLD = "#ffd23f";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };

  /* 1. The 2 and 3 trains pulling into 125 St, underground under Lenox Av */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#ece6d6"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>';
    let cols = "";
    for (let x = 24; x < 400; x += 88) cols += '<rect x="' + x + '" y="0" width="10" height="182" fill="#3a3f4a"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc6b0"/>' + tiles +
      '<rect x="0" y="16" width="400" height="10" fill="#8a1f2a"/><rect x="0" y="100" width="400" height="8" fill="#8a1f2a"/>' +
      '<rect x="0" y="108" width="400" height="74" fill="#1a1a1e"/>' + cols +
      '<rect x="92" y="40" width="216" height="34" rx="4" fill="#111"/>' +
      '<rect x="92" y="40" width="216" height="4" fill="#fff"/>' +
      '<text x="106" y="65" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">125 St</text>' +
      bullet(258, 58, "2", "#ee352e") + bullet(284, 58, "3", "#ee352e") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ee352e"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 139, "2", "#ee352e") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2724"/>' +
      tag("UPTOWN", 24, 240, 30, ORANGE, -4) + tag("YL", 310, 242, 40, GOLD, -8));
  }

  /* 2. 125th Street at night: the old theater with its red vertical sign, marquee bulbs, traffic rolling */
  function marquee() {
    let bulbs = "";
    for (let x = 70; x <= 250; x += 12) bulbs += '<circle class="flk' + (x % 36 === 10 ? " flk2" : x % 24 === 22 ? " flk3" : "") + '" cx="' + x + '" cy="134" r="2.6" fill="#fff2a8"/><circle class="flk' + (x % 36 === 22 ? " flk3" : "") + '" cx="' + x + '" cy="170" r="2.6" fill="#fff2a8"/>';
    let vbulbs = "";
    for (let y = 30; y < 118; y += 9) vbulbs += '<circle class="flk' + (y % 27 === 3 ? " flk2" : "") + '" cx="171" cy="' + y + '" r="2" fill="#fff2a8"/><circle class="flk' + (y % 27 === 12 ? " flk3" : "") + '" cx="199" cy="' + y + '" r="2" fill="#fff2a8"/>';
    let letters = "";
    "HARLEM".split("").forEach((c, i) => { letters += '<text x="185" y="' + (42 + i * 14) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#ffd23f">' + c + '</text>'; });
    let car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="44" height="14" rx="4" fill="' + c + '"/><rect x="8" y="' + (y - 8) + '" width="26" height="10" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="34" cy="' + (y + 14) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(12) +
      '<rect x="0" y="70" width="60" height="140" fill="#3a2c2a"/><rect x="280" y="50" width="120" height="160" fill="#5a3a2c"/>' +
      '<rect x="288" y="60" width="104" height="8" fill="#7a4a36"/>' +
      '<rect x="300" y="80" width="12" height="16" fill="#ffd98a" class="flk"/><rect x="330" y="80" width="12" height="16" fill="#ffd98a"/><rect x="360" y="110" width="12" height="16" fill="#ffd98a" class="flk flk2"/><rect x="300" y="140" width="12" height="16" fill="#ffd98a"/><rect x="345" y="140" width="12" height="16" fill="#ffd98a" class="flk flk3"/>' +
      '<rect x="60" y="60" width="220" height="150" fill="#d9cdb4"/><rect x="60" y="60" width="220" height="10" fill="#b7a98a"/>' +
      '<rect x="164" y="20" width="42" height="104" rx="3" fill="#c8102e" stroke="#7a0a1a" stroke-width="2"/>' + vbulbs + letters +
      '<rect x="62" y="124" width="196" height="54" fill="#c8102e" stroke="#7a0a1a" stroke-width="2"/>' +
      '<rect x="74" y="140" width="172" height="22" fill="#f4f1e8"/>' +
      '<text x="160" y="157" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" fill="#111">YL  TONIGHT</text>' + bulbs +
      '<rect x="120" y="182" width="80" height="28" fill="#2a1a12"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#25282d"/><path d="M0 236h400" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("car", 216, BLUE) + car("car car2", 240, ORANGE) +
      '<text x="340" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="' + GOLD + '">125TH ST</text>',
      sky("g2", "#0b0d1c", "#2b2a4a"));
  }

  /* 3. The park court on 155th: chain-link fence, the towers on the hill behind, a ball bouncing */
  function rucker() {
    let fence = "";
    for (let x = 0; x < 400; x += 12) fence += '<path d="M' + x + ' 90l12 12M' + (x + 12) + ' 90l-12 12" stroke="#9aa3ab" stroke-width=".8" opacity=".55"/>';
    let fenceRows = "";
    for (let y = 90; y < 150; y += 12) fenceRows += '<g transform="translate(0 ' + (y - 90) + ')">' + fence + '</g>';
    let towers = "";
    [[40, 30], [110, 22], [250, 26], [330, 34]].forEach(t => {
      towers += '<rect x="' + t[0] + '" y="' + t[1] + '" width="44" height="' + (120 - t[1]) + '" fill="#8a5a44"/>';
      for (let y = t[1] + 8; y < 112; y += 10) for (let i = 5; i < 40; i += 10) towers += '<rect x="' + (t[0] + i) + '" y="' + y + '" width="5" height="5" fill="#f2d9a6" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + towers +
      '<path d="M0 120h400v34H0z" fill="#3c5a2a"/>' + fenceRows +
      '<rect x="0" y="88" width="400" height="3" fill="#9aa3ab"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#1f6b8a"/>' +
      '<rect x="40" y="160" width="320" height="90" fill="#2a8a7a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M200 160v90" stroke="#fff" stroke-width="2"/><circle cx="200" cy="205" r="16" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M360 178h-40v54h40" fill="#c8102e" opacity=".85" stroke="#fff" stroke-width="2"/>' +
      '<rect x="368" y="110" width="5" height="94" fill="#555"/><rect x="350" y="118" width="22" height="30" fill="#f4f1e8" stroke="#333"/><path d="M350 144h-10" stroke="' + ORANGE + '" stroke-width="3"/><path d="M340 144l2 10h-6l2-10" fill="none" stroke="#fff"/>' +
      '<g class="ball"><circle cx="300" cy="196" r="8" fill="' + ORANGE + '" stroke="#5a2a0a"/><path d="M292 196h16M300 188v16" stroke="#5a2a0a"/></g>' +
      '<text x="200" y="18" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="#3a1a0a">155TH ST COURT</text>',
      sky("g3", "#f2994a", "#ffe0a0"));
  }

  /* 4. A row of Harlem brownstones: brown stone, stoops, black iron rails, bay windows, a bird going by */
  function brownstones() {
    let row = "";
    const cols = ["#7a4a34", "#8a5a3e", "#6e4230", "#85523a", "#7a4a34"];
    for (let i = 0; i < 5; i++) {
      const x = i * 80;
      row += '<rect x="' + x + '" y="50" width="80" height="160" fill="' + cols[i] + '"/><rect x="' + x + '" y="46" width="80" height="8" fill="#4a2c20"/>';
      row += '<rect x="' + (x + 10) + '" y="66" width="16" height="22" fill="#2a2030"/><rect x="' + (x + 32) + '" y="66" width="16" height="22" fill="#2a2030"/><rect x="' + (x + 54) + '" y="66" width="16" height="22" fill="#2a2030" class="flk' + (i % 2 ? " flk2" : "") + '"/>';
      row += '<rect x="' + (x + 10) + '" y="104" width="16" height="22" fill="#2a2030"/><rect x="' + (x + 32) + '" y="104" width="16" height="22" fill="#ffd98a" opacity=".8"/>';
      row += '<path d="M' + (x + 52) + ' 150v-24a9 10 0 0 1 18 0v24z" fill="#3a2418"/>';
      row += '<path d="M' + (x + 50) + ' 150l-30 46h18l30-46z" fill="#9a6a4e"/>';
      row += '<path d="M' + (x + 48) + ' 140l-32 50M' + (x + 72) + ' 140l-32 52" stroke="#111" stroke-width="2"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + row +
      '<rect x="0" y="196" width="400" height="18" fill="#9b9690"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#2a2d33"/>' +
      '<g class="bird"><path d="M0 30q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<rect x="110" y="226" width="180" height="24" rx="4" fill="#111" opacity=".7"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="4" fill="' + GOLD + '">STRIVERS ROW</text>',
      sky("g4", "#6a9ad0", "#f4d6a6"));
  }

  /* 5. Malcolm X Blvd and W 125 St: green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3a40"/>' +
      tag("YL", 50, 150, 60, ORANGE, -7) + tag("IGH BET", 40, 204, 30, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="252" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Malcolm X Blvd</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 125 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1424", "#2a3a5a"));
  }

  window.SCENES = { train, marquee, rucker, brownstones, corner };
})();
