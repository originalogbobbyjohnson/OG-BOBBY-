/* U2 game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; Clontarf / Artane, Dublin's northside - Bono, The Edge, Adam Clayton
   and Larry Mullen Jr met at Mount Temple Comprehensive on the Malahide Road and first rehearsed in Larry's kitchen at
   60 Rosemount Avenue, Artane, in September 1976).
   Rooms: Clontarf Road DART station (the stop by the sea wall, the nearest rail stop to Mount Temple), the kitchen and back garden
   at 60 Rosemount Avenue (drum kit outside, the notice Larry pinned up at school), Mount Temple Comprehensive on the Malahide Road,
   the fan-tagged wall at Windmill Lane Studios in Ringsend (where they made their early records), and Clontarf Road at
   Vernon Avenue on the Dublin 3 sea front, the red-and-white Poolbeg chimneys across the bay behind.
   CSS classes prefixed "utw" (the page's anim-train is kept). No logos (no DART/Irish Rail marks), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes utwTw{0%,100%{opacity:1}50%{opacity:.25}}.utwTw{animation:utwTw 1.8s ease-in-out infinite}.utwT2{animation-delay:.6s}.utwT3{animation-delay:1.2s}' +
    '@keyframes utwBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.utwBob{animation:utwBob .8s ease-in-out infinite}.utwBb2{animation-delay:.4s}' +
    '@keyframes utwNote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.utwNote{animation:utwNote 3.2s linear infinite}.utwN2{animation-delay:1.1s}.utwN3{animation-delay:2.2s}' +
    '@keyframes utwCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.utwCloud{animation:utwCloud 30s linear infinite}.utwC2{animation-delay:-15s}' +
    '@keyframes utwBird{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-12px)}100%{transform:translate(460px,6px)}}.utwBird{animation:utwBird 15s linear infinite}.utwB2{animation-delay:-7s}' +
    '@keyframes utwWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.utwWave{animation:utwWave 3s ease-in-out infinite}.utwW2{animation-delay:-1.5s}' +
    '@keyframes utwSmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(24px,-40px) scale(1.6);opacity:0}}.utwSmoke{transform-box:fill-box;transform-origin:50% 50%;animation:utwSmoke 4s linear infinite}.utwS2{animation-delay:2s}' +
    '@keyframes utwHit{0%,100%{transform:rotate(0)}50%{transform:rotate(-22deg)}}.utwHit{transform-box:fill-box;transform-origin:0 100%;animation:utwHit .5s ease-in-out infinite}.utwH2{animation-delay:.25s}' +
    '@keyframes utwSpark{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.2);opacity:1}}.utwSpark{transform-box:fill-box;transform-origin:50% 50%;animation:utwSpark 1.4s ease-in-out infinite}.utwSp2{animation-delay:.5s}' +
    '@keyframes utwSway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.utwSway{transform-box:fill-box;transform-origin:50% 0;animation:utwSway 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f4d35e", GREEN = "#2e8b57", RED = "#e94f37", DART = "#7ab51d", BRICK = "#a0522d", BRICK2 = "#7c3d22";
  const cloud = (x, y, cls) => '<g class="utwCloud' + (cls || '') + '" fill="#fff" opacity=".8"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 16) + '" cy="' + (y - 7) + '" rx="16" ry="9"/><ellipse cx="' + (x - 12) + '" cy="' + (y - 4) + '" rx="12" ry="7"/></g>';
  const bird = (x, y, cls) => '<g class="utwBird' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
    return s;
  };
  const note = (x, y, cls, col) => '<g class="utwNote' + (cls || '') + '"><path d="M' + x + ' ' + y + 'v-14l10 -3v14" stroke="' + col + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + col + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + col + '"/></g>';
  const people = (y, n, x0, x1, cols) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = x0 + 8 + i * ((x1 - x0) / n), f = cols[i % cols.length];
      s += '<g class="utwBob' + (i % 2 ? ' utwBb2' : '') + '" fill="' + f + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5"/><rect x="' + (x - 6) + '" y="' + (y - 8) + '" width="12" height="18" rx="5"/></g>';
    }
    return s;
  };
  /* the two Poolbeg chimneys, red and white bands */
  const poolbeg = (x, y, h, w) => {
    let s = "";
    [0, w * 1.8].forEach(dx => {
      const cx = x + dx;
      s += '<rect x="' + cx + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f2f0ea"/>';
      for (let k = 0; k < 6; k++) s += '<rect x="' + cx + '" y="' + (y + k * h / 6) + '" width="' + w + '" height="' + (h / 12) + '" fill="#d0332a"/>';
    });
    return s;
  };
  const sea = (y, col) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + col + '"/>' +
    '<g class="utwWave" stroke="#cfe6f0" stroke-width="1.5" fill="none" opacity=".7"><path d="M10 ' + (y + 8) + 'q10 -4 20 0t20 0M120 ' + (y + 14) + 'q10 -4 20 0t20 0M250 ' + (y + 6) + 'q10 -4 20 0t20 0M340 ' + (y + 16) + 'q10 -4 20 0t20 0"/></g>';

  /* 1. Clontarf Road DART station: the raised line on the embankment by the bay, green-and-yellow commuter train pulling in */
  function utwstation() {
    let wins = "";
    for (let x = 50; x < 290; x += 30) wins += '<rect x="' + x + '" y="136" width="20" height="18" rx="3" fill="#cfe2ea"/>';
    const train = '<g class="anim-train">' +
      '<rect x="24" y="126" width="284" height="62" rx="8" fill="' + DART + '" stroke="#3f6a10" stroke-width="2"/>' +
      '<rect x="24" y="160" width="284" height="10" fill="#f4f4f4"/><rect x="24" y="170" width="284" height="6" fill="#2b5e1c"/>' +
      '<path d="M308 126q24 4 26 30v32h-26z" fill="#ffd200" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M311 134q15 3 18 22h-18z" fill="#14182a"/>' + wins +
      '<g fill="#e6efe0" stroke="#3f6a10"><rect x="36" y="134" width="11" height="40" rx="1"/><rect x="166" y="134" width="11" height="40" rx="1"/><rect x="292" y="134" width="11" height="40" rx="1"/></g>' +
      '<rect x="320" y="176" width="9" height="5" fill="#fff6c8"/>' +
      '<g fill="#1b1b1b"><circle cx="64" cy="192" r="7"/><circle cx="88" cy="192" r="7"/><circle cx="242" cy="192" r="7"/><circle cx="266" cy="192" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#utws1)"/>' + cloud(70, 26, '') + cloud(300, 40, ' utwC2') + bird(0, 50, '') +
      /* Dublin Bay behind with Poolbeg on the far shore */
      sea(70, "#5e8fae") + '<rect x="0" y="66" width="400" height="6" fill="#8a9aa0"/>' + poolbeg(300, 22, 46, 7) +
      /* overhead line masts */
      '<g fill="#5a6066"><rect x="60" y="56" width="4" height="70"/><rect x="200" y="56" width="4" height="70"/><rect x="340" y="56" width="4" height="70"/></g>' +
      '<path d="M0 60h400" stroke="#5a6066" stroke-width="2"/><path d="M0 116h400" stroke="#2a2a2a" stroke-width="1.2"/>' +
      /* far platform */
      '<rect x="0" y="104" width="400" height="12" fill="#b8b2a4"/><rect x="0" y="102" width="400" height="3" fill="#f2d24a"/>' +
      '<rect x="0" y="116" width="400" height="88" fill="#4a463f"/>' +
      '<path d="M0 196h400M0 202h400" stroke="#9aa0a6" stroke-width="2"/>' +
      train +
      /* near platform with the station sign: Irish name above English */
      '<rect x="0" y="204" width="400" height="56" fill="#bdb6a8"/><rect x="0" y="204" width="400" height="4" fill="#f2d24a"/>' +
      '<rect x="142" y="242" width="4" height="18" fill="#3c4148"/><rect x="254" y="242" width="4" height="18" fill="#3c4148"/>' +
      '<rect x="112" y="210" width="176" height="34" rx="3" fill="#1d4f2c" stroke="#f4f4f4" stroke-width="2"/>' +
      '<text x="200" y="223" text-anchor="middle" ' + F + ' font-size="9" fill="#e8d98a" font-style="italic">Bóthar Chluain Tarbh</text>' +
      '<text x="200" y="238" text-anchor="middle" ' + F + ' font-size="14" fill="#ffffff">Clontarf Road</text>',
      sky("utws1", "#8fb3d6", "#e6eef2"));
  }

  /* 2. 60 Rosemount Avenue, Artane: the pebble-dashed semi, the kitchen lit up, the drum kit set up out in the back garden */
  function utwkitchen() {
    return svg(
      '<rect width="400" height="260" fill="url(#utws2)"/>' + cloud(60, 24, '') + cloud(270, 34, ' utwC2') + bird(0, 46, ' utwB2') +
      /* the house: pebble-dash grey, dark tiled roof */
      '<path d="M40 86l110 -50l110 50z" fill="#4a4e57"/>' +
      '<rect x="56" y="86" width="188" height="110" fill="#c9c3b6"/>' +
      (function () { let s = ""; for (let i = 0; i < 70; i++) s += '<circle cx="' + (60 + (i * 37) % 180) + '" cy="' + (90 + (i * 23) % 100) + '" r="1" fill="#a8a194"/>'; return s; })() +
      '<rect x="70" y="100" width="44" height="30" fill="#2c3440" stroke="#f4f1ea" stroke-width="3"/><rect x="186" y="100" width="44" height="30" fill="#2c3440" stroke="#f4f1ea" stroke-width="3"/>' +
      /* the kitchen window, lit, the notice pinned up inside */
      '<rect x="80" y="144" width="80" height="40" fill="#f6c45a" stroke="#f4f1ea" stroke-width="3"/><path d="M120 144v40" stroke="#f4f1ea" stroke-width="3"/>' +
      '<rect x="88" y="150" width="24" height="18" fill="#fff" stroke="#888"/><path d="M91 155h18M91 159h18M91 163h12" stroke="#555" stroke-width="1.2"/>' +
      people(184, 2, 124, 160, ["#2a1d14", "#3a2618"]) +
      '<rect x="190" y="146" width="36" height="50" fill="#2e8b57"/><circle cx="220" cy="172" r="2" fill="' + GOLD + '"/>' +
      /* back garden lawn, low wall */
      '<rect x="0" y="196" width="400" height="64" fill="#5e8a3e"/><rect x="0" y="194" width="400" height="6" fill="#8c8272"/>' +
      /* the drum kit on the grass */
      '<ellipse cx="320" cy="196" rx="24" ry="22" fill="#f4f1ea" stroke="#333" stroke-width="2"/>' +
      '<text x="320" y="200" text-anchor="middle" ' + F + ' font-size="10" fill="#111">1976</text>' +
      '<rect x="276" y="168" width="22" height="14" rx="2" fill="' + RED + '" stroke="#333"/>' +
      '<ellipse cx="282" cy="156" rx="12" ry="3" fill="' + GOLD + '"/><rect x="281" y="156" width="2" height="40" fill="#888"/>' +
      '<ellipse cx="360" cy="150" rx="13" ry="3" fill="' + GOLD + '"/><rect x="359" y="150" width="2" height="48" fill="#888"/>' +
      '<g class="utwHit"><path d="M300 150l14 -12" stroke="#d8b878" stroke-width="3" stroke-linecap="round"/></g>' +
      '<g class="utwHit utwH2"><path d="M336 150l-14 -12" stroke="#d8b878" stroke-width="3" stroke-linecap="round"/></g>' +
      note(300, 130, '', '#fff') + note(330, 120, ' utwN2', GOLD) + note(310, 136, ' utwN3', GREEN) +
      '<rect x="14" y="214" width="140" height="28" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="84" y="232" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">FIRST REHEARSAL  1976</text>' +
      '<rect x="244" y="18" width="146" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="317" y="34" text-anchor="middle" ' + F + ' font-size="10" fill="#111">ROSEMOUNT AVENUE</text>',
      sky("utws2", "#9cc1de", "#f1e6d0"));
  }

  /* 3. Mount Temple Comprehensive, Malahide Road: the long low 1970s school blocks, the music room lit, students out front */
  function utwschool() {
    let wins = "";
    for (let x = 36; x < 360; x += 34) wins += '<rect x="' + x + '" y="104" width="26" height="22" fill="#2c3440" stroke="#e8e4da" stroke-width="2"/><rect x="' + x + '" y="140" width="26" height="22" fill="#2c3440" stroke="#e8e4da" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#utws3)"/>' + cloud(80, 26, '') + cloud(300, 38, ' utwC2') + bird(0, 44, '') +
      '<g fill="#3f6a34"><circle cx="20" cy="96" r="20"/><circle cx="380" cy="94" r="22"/></g>' +
      /* the blocks: pale render over a brick base, flat roofs */
      '<rect x="16" y="90" width="368" height="90" fill="#e2ddd0"/><rect x="12" y="84" width="376" height="8" fill="#5a5e66"/>' +
      bricks(16, 168, 368, 22, BRICK, BRICK2) + wins +
      /* the music room: one window lit, notes floating out */
      '<rect x="172" y="140" width="26" height="22" fill="#f6c45a" stroke="#e8e4da" stroke-width="2"/>' +
      note(182, 132, '', '#fff') + note(192, 126, ' utwN2', GOLD) +
      /* entrance canopy */
      '<rect x="210" y="168" width="44" height="22" fill="#2e4a6a"/><rect x="202" y="162" width="60" height="8" fill="#5a5e66"/>' +
      '<rect x="0" y="190" width="400" height="10" fill="#9a958a"/><rect x="0" y="200" width="400" height="60" fill="#6f9a4a"/>' +
      people(214, 6, 30, 180, ["#1f2a5c", "#7a1f2a", "#1f2a5c"]) + people(214, 5, 270, 390, ["#7a1f2a", "#1f2a5c"]) +
      '<rect x="120" y="222" width="160" height="26" rx="3" fill="#1d4f2c" stroke="#f4f4f4" stroke-width="1.5"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">MOUNT TEMPLE</text>' +
      '<rect x="14" y="18" width="128" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="78" y="34" text-anchor="middle" ' + F + ' font-size="10" fill="#111">MALAHIDE ROAD</text>',
      sky("utws3", "#a9c8e2", "#f1ece0"));
  }

  /* 4. Windmill Lane Studios wall, Ringsend: the long wall covered in fans' messages, the river and cranes behind */
  function utwwall() {
    const msgs = [["DUBLIN", 30, 132, 15, GOLD, -6], ["LOVE", 140, 124, 14, RED, 4], ["ONE", 220, 136, 18, "#7ec8e3", -3], ["THANK YOU", 270, 120, 12, "#fff", 2],
      ["BOY", 40, 170, 16, "#9be37e", 3], ["OCTOBER", 110, 168, 13, "#f7a8c8", -4], ["WAR", 210, 172, 15, GOLD, 5], ["MT TEMPLE", 280, 166, 12, "#9be37e", -2]];
    return svg(
      '<rect width="400" height="260" fill="url(#utws4)"/>' + cloud(70, 24, '') + cloud(290, 30, ' utwC2') +
      /* the Liffey quays behind: a crane and a gasometer frame */
      '<rect x="0" y="80" width="400" height="16" fill="#4f6f86"/>' +
      '<g stroke="#2e3640" stroke-width="3" fill="none"><path d="M300 80v-60h60M330 20v18"/><path d="M300 30l40 -10"/></g>' +
      '<g class="utwSway"><path d="M350 20v18" stroke="#2e3640" stroke-width="1.5"/><rect x="345" y="38" width="10" height="8" fill="' + GOLD + '"/></g>' +
      '<g stroke="#4a5058" stroke-width="2" fill="none"><ellipse cx="90" cy="62" rx="36" ry="6"/><path d="M54 62v20M126 62v20M70 62v20M110 62v20M90 62v20"/></g>' +
      /* the wall */
      '<rect x="0" y="96" width="400" height="110" fill="#e9e4da"/>' +
      (function () { let s = ""; for (let y = 96; y < 206; y += 10) s += '<path d="M0 ' + y + 'h400" stroke="#d4cebf" stroke-width="1"/>'; return s; })() +
      msgs.map(m => tag(m[0], m[1], m[2], m[3], m[4], m[5])).join("") +
      tag("U2", 150, 202, 34, GREEN, -5) +
      '<g class="utwSpark"><path d="M140 182l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="utwSpark utwSp2"><path d="M250 150l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="206" width="400" height="8" fill="#a8a296"/><rect x="0" y="214" width="400" height="46" fill="#3d3f45"/>' +
      people(232, 3, 300, 390, ["#2a2236", "#1a1a22"]) +
      '<rect x="14" y="222" width="136" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="82" y="238" text-anchor="middle" ' + F + ' font-size="10" fill="#111">WINDMILL LANE</text>',
      sky("utws4", "#9fb9cf", "#e6e2d8"));
  }

  /* 5. Clontarf Road at Vernon Avenue, Dublin 3: the promenade sea wall tagged, Dublin Bay and the Poolbeg chimneys behind */
  function utwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#utws5)"/>' + cloud(70, 22, '') + cloud(260, 34, ' utwC2') + bird(0, 40, '') + bird(0, 58, ' utwB2') +
      sea(96, "#4f86a6") +
      '<rect x="0" y="94" width="400" height="4" fill="#8a9aa0"/>' +
      poolbeg(118, 16, 80, 10) +
      '<g class="utwSmoke" fill="#e8e8e8"><circle cx="124" cy="14" r="5"/></g><g class="utwSmoke utwS2" fill="#e8e8e8"><circle cx="142" cy="14" r="5"/></g>' +
      /* the granite sea wall with the tags */
      '<rect x="0" y="130" width="400" height="74" fill="#8e8a82"/><rect x="0" y="126" width="400" height="8" fill="#b4afa4"/>' +
      (function () { let s = ""; for (let y = 134; y < 204; y += 14) for (let x = ((y / 14) % 2) * 18; x < 400; x += 36) s += '<rect x="' + x + '" y="' + y + '" width="34" height="12" rx="2" fill="#a29d92" opacity=".55"/>'; return s; })() +
      tag("LYPTON", 18, 176, 22, GOLD, -3) +
      tag("U2", 128, 192, 46, GREEN, -4) +
      tag("BONO VOX", 196, 172, 20, RED, -6) +
      '<g class="utwSpark"><path d="M110 150l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff"/></g>' +
      '<g class="utwSpark utwSp2"><path d="M232 186l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1z" fill="#fff"/></g>' +
      '<rect x="0" y="204" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="212" width="400" height="48" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Dublin street name plates: white, black English name, Irish name above, the district number */
      '<rect x="366" y="40" width="5" height="172" fill="#2a2a2a"/>' +
      '<rect x="272" y="40" width="124" height="36" rx="2" fill="#fff" stroke="#111" stroke-width="2.5"/>' +
      '<text x="334" y="52" text-anchor="middle" ' + F + ' font-size="8" fill="#1d4f2c" font-style="italic">Bóthar Chluain Tarbh</text>' +
      '<text x="334" y="65" text-anchor="middle" ' + F + ' font-size="11" fill="#111">CLONTARF ROAD</text>' +
      '<text x="334" y="73" text-anchor="middle" ' + F + ' font-size="6" fill="#d41a1f">DUBLIN 3</text>' +
      '<rect x="278" y="80" width="118" height="26" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="337" y="97" text-anchor="middle" ' + F + ' font-size="11" fill="#111">VERNON AVENUE</text>',
      sky("utws5", "#86b0d6", "#eadfc8"));
  }

  window.SCENES = { utwstation, utwkitchen, utwschool, utwwall, utwcorner };
})();
