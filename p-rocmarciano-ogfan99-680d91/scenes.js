/* p-rocmarciano scenes: producer game */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const CHAMP = "#e8c872", WINE = "#8b1e3f", TEAL = "#4fb0a5", CREAM = "#f2ead8";

  /* 1. The Rosa Parks Hempstead Transit Center: the bus bays under the long canopy, a N6 bus pulling in from Jamaica */
  function terminal() {
    let posts = ""; for (let x = 20; x < 400; x += 60) posts += '<rect x="' + x + '" y="62" width="6" height="96" fill="#5b6470"/>';
    let win = ""; for (let x = 40; x < 270; x += 38) win += '<rect x="' + x + '" y="112" width="30" height="22" rx="2" fill="#cfe6f2" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + stars(10) +
      '<path d="M0 48h400v16H0z" fill="#8a929c"/><path d="M0 64h400v6H0z" fill="#5b6470"/>' + posts +
      '<rect x="24" y="76" width="250" height="26" rx="3" fill="#111"/><rect x="24" y="76" width="250" height="3" fill="#fff"/>' +
      '<text x="36" y="95" ' + font + ' font-size="13" fill="#fff">Hempstead Transit Center</text>' +
      '<rect x="290" y="76" width="92" height="26" rx="3" fill="#111"/><text x="300" y="95" ' + font + ' font-size="13" fill="#ffd34d">BAY 6</text>' +
      '<g class="anim-train">' +
        '<rect x="20" y="104" width="290" height="62" rx="9" fill="#f4f6f8" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="20" y="140" width="290" height="8" fill="#1f5fae"/><rect x="20" y="148" width="290" height="4" fill="#f2a900"/>' + win +
        '<rect x="40" y="105" width="110" height="9" fill="#111"/><text x="46" y="113" font-family="Courier New, monospace" font-weight="700" font-size="8.5" fill="#ffb000">N6  HEMPSTEAD</text>' +
        '<circle cx="70" cy="166" r="11" fill="#111"/><circle cx="260" cy="166" r="11" fill="#111"/><circle cx="70" cy="166" r="4" fill="#888"/><circle cx="260" cy="166" r="4" fill="#888"/>' +
        '<circle cx="304" cy="154" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="177" width="400" height="10" fill="#c9c2b0"/><rect x="0" y="187" width="400" height="73" fill="#22242a"/>' +
      '<path d="M0 222h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="16 12"/>' +
      tag("MARCI", 30, 250, 26, CHAMP, -5) + tag("PIMPIRE", 230, 252, 24, TEAL, -6),
      sky("t1", "#0d0f2a", "#3d2a4a"));
  }

  /* 2. Inside the record store: bins of soul and jazz LPs, a wall of covers, the listening station with the needle down */
  function crates() {
    let wall = ""; const cols = [WINE, CHAMP, TEAL, "#2b3a67", "#c0582a", "#6a4c93", "#3f6b4a", CREAM];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) { const k = (r * 3 + c) % 8; wall += '<rect x="' + (14 + c * 47) + '" y="' + (16 + r * 44) + '" width="38" height="38" fill="' + cols[k] + '" stroke="#1a1214" stroke-width="2"/>' + (k % 2 ? '<circle cx="' + (33 + c * 47) + '" cy="' + (35 + r * 44) + '" r="11" fill="none" stroke="#1a1214" stroke-width="2" opacity=".5"/>' : '<path d="M' + (20 + c * 47) + ' ' + (44 + r * 44) + 'h26" stroke="#1a1214" stroke-width="3" opacity=".5"/>'); }
    let bins = "";
    [16, 120].forEach((x, b) => { bins += '<rect x="' + x + '" y="196" width="96" height="44" fill="#5a3a22" stroke="#2e1d10" stroke-width="2"/>';
      for (let i = 0; i < 9; i++) bins += '<rect class="' + (i === 4 + b ? "bob" : "") + '" x="' + (x + 5 + i * 10) + '" y="' + (176 + (i % 3) * 3) + '" width="8" height="30" fill="' + cols[(i + b * 3) % 8] + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="#2a1d1f"/>' + wall +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2a22"/><rect x="0" y="150" width="400" height="5" fill="#4d382c"/>' + bins +
      '<rect x="236" y="168" width="150" height="72" rx="4" fill="#6b4a2e" stroke="#2e1d10" stroke-width="2"/>' +
      '<g class="vn"><circle cx="292" cy="202" r="28" fill="#0b0b0b"/><circle cx="292" cy="202" r="19" fill="none" stroke="#2a2a2a"/><circle cx="292" cy="202" r="9" fill="' + WINE + '"/><rect x="290" y="194" width="4" height="5" fill="' + CHAMP + '"/></g>' +
      '<path d="M368 176l-24 30" stroke="#d6d6d6" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M340 176c0-14 26-14 26 0" fill="none" stroke="#111" stroke-width="4"/><rect x="334" y="174" width="9" height="14" rx="3" fill="#111"/><rect x="363" y="174" width="9" height="14" rx="3" fill="#111"/>' +
      '<text x="200" y="164" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".85" letter-spacing="3">SOUL • JAZZ • SOUNDTRACKS</text>');
  }

  /* 3. Jones Beach: the boardwalk and the brick Water Tower with its green copper point, waves rolling in, gulls overhead */
  function jonesbeach() {
    let boards = ""; for (let x = 0; x < 400; x += 14) boards += '<path d="M' + x + ' 200v26" stroke="#8a6a44" stroke-width="1.5"/>';
    let rail = ""; for (let x = 6; x < 400; x += 26) rail += '<rect x="' + x + '" y="180" width="4" height="22" fill="#d9d2c0"/>';
    const gull = (x, y, cls) => '<path class="' + cls + '" d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" fill="none" stroke="#fff" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#j1)"/>' +
      '<circle cx="320" cy="96" r="26" fill="#ffd98a" opacity=".9"/>' +
      '<rect x="0" y="120" width="400" height="60" fill="#2f6f8f"/>' +
      '<g class="carL"><path d="M0 132q20 -6 40 0t40 0t40 0t40 0" fill="none" stroke="#bfe3ef" stroke-width="2" opacity=".7"/></g>' +
      '<g class="car car2"><path d="M0 150q20 -6 40 0t40 0t40 0" fill="none" stroke="#e6f6fb" stroke-width="2" opacity=".8"/></g>' +
      '<rect x="0" y="164" width="400" height="16" fill="#e6d3a3"/>' +
      /* the water tower: tan brick shaft, arched windows, belvedere, green copper pyramid */
      '<rect x="92" y="40" width="40" height="140" fill="#c8a27a"/><rect x="92" y="40" width="40" height="140" fill="none" stroke="#8e6a48" stroke-width="2"/>' +
      '<path d="M100 70v-8a4 4 0 0 1 8 0v8zM116 70v-8a4 4 0 0 1 8 0v8zM100 110v-8a4 4 0 0 1 8 0v8zM116 110v-8a4 4 0 0 1 8 0v8z" fill="#3a2a22"/>' +
      '<rect x="86" y="30" width="52" height="12" fill="#b38b62"/><path d="M90 30l22 -26 22 26z" fill="#5f9e86" stroke="#3f7a64" stroke-width="1.5"/>' +
      '<rect x="110" y="0" width="4" height="6" fill="#3f7a64"/>' +
      '<rect x="0" y="180" width="400" height="4" fill="#d9d2c0"/>' + rail +
      '<rect x="0" y="200" width="400" height="26" fill="#b48a5c"/>' + boards +
      '<rect x="0" y="226" width="400" height="34" fill="#e6d3a3"/>' +
      gull(180, 46, "bob") + gull(220, 62, "bob") + gull(250, 40, "bob"),
      sky("j1", "#26355e", "#e59a6a"));
  }

  /* 4. The loop room: no drum pads lit, just the loop running, a gold record on the wall, the mink on the rack, velvet curtain */
  function looproom() {
    let eq = ""; for (let i = 0; i < 6; i++) eq += '<rect class="mt mt' + ((i % 5) + 1) + '" x="' + (196 + i * 9) + '" y="70" width="6" height="40" fill="' + (i > 3 ? WINE : TEAL) + '"/>';
    let folds = ""; for (let x = 0; x < 120; x += 14) folds += '<path d="M' + x + ' 0v150" stroke="#5e1029" stroke-width="5"/>';
    return svg(
      '<rect width="400" height="260" fill="#1c1418"/>' +
      '<rect x="0" y="0" width="120" height="150" fill="' + WINE + '"/>' + folds +
      '<rect x="120" y="0" width="280" height="150" fill="#2a2228"/>' +
      '<circle cx="160" cy="58" r="30" fill="' + CHAMP + '" stroke="#8a6a24" stroke-width="3"/><circle cx="160" cy="58" r="20" fill="none" stroke="#b8903a"/><circle cx="160" cy="58" r="7" fill="#1c1418"/>' +
      '<rect x="184" y="58" width="72" height="58" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<path d="M300 22h70" stroke="#9a9a9a" stroke-width="3"/><path d="M335 22v10" stroke="#9a9a9a" stroke-width="2"/>' +
      '<g class="bob"><path d="M318 32h34l8 30 10 74h-70l10 -74z" fill="#7a5a44"/><path d="M318 32l-14 60 8 2 10 -40M352 32l14 60 -8 2 -10 -40" fill="#6d4f3b"/><path d="M335 32v104" stroke="#5e4433" stroke-width="2"/><path d="M320 32l15 18 15 -18" fill="none" stroke="#a88466" stroke-width="5"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3b2a24"/><rect x="0" y="150" width="400" height="6" fill="#4d382e"/>' +
      '<rect x="24" y="168" width="180" height="76" rx="4" fill="#2f2f34" stroke="#55565c" stroke-width="2"/><rect x="34" y="176" width="78" height="16" fill="#1f3a3a"/>' +
      '<text x="38" y="188" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#9ff0e4">LOOP 01  NO DRUMS</text>' +
      (() => { let p = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) p += '<rect x="' + (120 + c * 20) + '" y="' + (176 + r * 18) + '" width="15" height="13" rx="2" fill="#4a4a50"/>'; return p; })() +
      '<rect x="34" y="204" width="76" height="6" fill="#555"/><rect class="pd p3" x="34" y="220" width="76" height="6" fill="' + CHAMP + '"/>' +
      turntable(236, 172, WINE));
  }

  /* 5. Front St and Greenwich St in Hempstead: green street signs, the wall with MARCI on it, St. George's white steeple and gold weathercock behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(16) +
      /* St. George's: white clapboard tower, belfry, spire, gold rooster weathervane turning */
      '<rect x="180" y="96" width="44" height="60" fill="#eeeae0"/><rect x="186" y="66" width="32" height="32" fill="#f4f1e8"/>' +
      '<path d="M196 92v-14a6 6 0 0 1 12 0v14z" fill="#2a2a34"/><path d="M190 66l12 -50 12 50z" fill="#f4f1e8" stroke="#cfc8b6"/>' +
      '<rect x="201" y="6" width="2" height="12" fill="' + CHAMP + '"/><g class="bob"><path d="M196 8q6 -6 12 0l-3 2h-6z" fill="' + CHAMP + '"/></g>' +
      '<rect x="0" y="120" width="400" height="20" fill="#2c2733"/>' +
      brick(0, 140, 400, 84, "#7a3b2e", "#5e2c22") +
      tag("MARCI", 26, 206, 46, CHAMP, -5) + tag("ROC", 214, 220, 26, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4c52"/><rect x="0" y="224" width="400" height="5" fill="#85878c"/>' +
      '<g class="car"><rect x="0" y="236" width="44" height="13" rx="4" fill="' + CREAM + '"/><rect x="10" y="230" width="22" height="8" rx="2" fill="' + CREAM + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="338" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(286, 44, 108, "Front St") + sign(276, 70, 124, "Greenwich St") +
      '<circle class="bl" cx="340" cy="36" r="5" fill="#fff6c2"/>',
      sky("c5", "#0b0c22", "#33284a"));
  }

  window.SCENES = { terminal: terminal, crates: crates, jonesbeach: jonesbeach, looproom: looproom, corner: corner };
})();
