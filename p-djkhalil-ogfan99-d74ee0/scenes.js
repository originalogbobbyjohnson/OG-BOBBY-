/* DJ Khalil producer game: L.A. The B Line at Hollywood/Vine, Pauley Pavilion, the studio, the Detroit fist monument, Hollywood Blvd & Vine St with the round record tower. Each scene 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 30s linear infinite}.cld2{animation-delay:-15s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}.neon{animation:neon 3.4s infinite}' +
    '@keyframes car{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
    '@keyframes carL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carL 7s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 2s ease-in-out infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.wv{animation:wave 2.6s linear infinite}.wv2{animation-duration:3.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.pulse{transform-box:fill-box;transform-origin:50% 50%;animation:pulse .5s ease-in-out infinite}' +
    '@keyframes pad{0%,100%{opacity:.35}50%{opacity:1}}.pad{animation:pad .8s steps(1) infinite}.pd2{animation-delay:-.2s}.pd3{animation-delay:-.4s}.pd4{animation-delay:-.6s}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.flag{transform-box:fill-box;transform-origin:0 50%;animation:flag 1.6s ease-in-out infinite}' +
    '@keyframes fall{from{transform:translateY(-20px)}to{transform:translateY(20px)}}.fall{animation:fall .7s linear infinite}.fl2{animation-delay:-.35s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.85}}.beam{animation:beam 3s ease-in-out infinite}' +
    '@keyframes walk{from{transform:translateX(420px)}to{transform:translateX(-40px)}}.walk{animation:walk 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sign = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw' + (i % 2 ? " tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const winGrid = (x0, y0, w, h, c1, c2) => { let s = ""; for (let y = y0 + 6; y < y0 + h - 6; y += 11) for (let x = x0 + 4; x < x0 + w - 5; x += 9) s += '<rect x="' + x + '" y="' + y + '" width="5" height="6" fill="' + ((x * 5 + y * 3) % 7 ? c1 : c2) + '"/>'; return s; };
  const bricks = (id, c) => '<pattern id="' + id + '" width="20" height="10" patternUnits="userSpaceOnUse"><path d="M0 10h20M10 0v5M0 5h20M0 5v5M20 5v5" stroke="' + c + '" stroke-width="1"/></pattern>';
  const cloud = (x, y, s, cls) => '<g class="cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const carS = (cls, y, col) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="5" fill="' + col + '"/><rect x="10" y="' + (y - 8) + '" width="28" height="10" rx="4" fill="' + col + '"/><rect x="14" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><rect x="26" y="' + (y - 6) + '" width="9" height="6" fill="#bfe3ff"/><circle cx="11" cy="' + (y + 15) + '" r="4.5" fill="#111"/><circle cx="39" cy="' + (y + 15) + '" r="4.5" fill="#111"/></g>';
  const ocean = (y, c1, c2) => {
    let w = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>';
    w += '<g class="wv"><path d="M0 ' + (y + 6) + Array.from({ length: 12 }, (_, i) => 'q10 -6 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="2" fill="none"/></g>';
    w += '<g class="wv wv2"><path d="M0 ' + (y + 18) + Array.from({ length: 12 }, (_, i) => 'q10 -5 20 0t20 0').join("") + '" stroke="' + c2 + '" stroke-width="1.5" fill="none" opacity=".7"/></g>';
    return w;
  };
  const GOLD = "#f0c75e", BLUE = "#2f6fdf", RED = "#e2553f", CREAM = "#f7f3ea";
  const reel = (x, y, r, cls) => '<g class="' + (cls || "") + '" style="transform-box:fill-box;transform-origin:50% 50%"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3a3a40" stroke="#888" stroke-width="2"/>' +
    [0, 60, 120, 180, 240, 300].map(a => '<circle cx="' + (x + Math.cos(a * Math.PI / 180) * r * 0.55).toFixed(1) + '" cy="' + (y + Math.sin(a * Math.PI / 180) * r * 0.55).toFixed(1) + '" r="' + (r * 0.2) + '" fill="#1a1a1e"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.15) + '" fill="#888"/></g>';

  /* 1. Hollywood/Vine on the Metro B Line: underground platform, the film reels on the ceiling, the red-striped subway pulling in */
  function bline() {
    let wins = "";
    for (let x = 28; x < 290; x += 34) wins += '<rect x="' + x + '" y="118" width="22" height="20" rx="3" fill="#1d2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2630"/><rect x="0" y="0" width="400" height="62" fill="#3a3440"/>' +
      reel(50, 30, 22, "spin") + reel(130, 26, 16) + reel(210, 32, 22, "spin") + reel(290, 26, 16) + reel(360, 30, 22, "spin") +
      '<path d="M0 54h400" stroke="#6a5a3a" stroke-width="6" stroke-dasharray="6 4"/>' +
      '<rect x="0" y="62" width="400" height="104" fill="#c9a76a"/><rect x="0" y="62" width="400" height="104" fill="url(#b1b)" opacity=".18"/>' +
      '<rect x="236" y="70" width="150" height="30" rx="3" fill="#111"/><circle cx="254" cy="85" r="10" fill="#e3131b"/>' + T(254, 90, 13, "#fff", "B", ' text-anchor="middle"') + T(320, 90, 12, "#fff", "Hollywood/Vine", ' text-anchor="middle"') +
      '<g class="anim-train"><path d="M6 108h290q22 0 26 22v30H6z" fill="#c9ced6" stroke="#7a828c" stroke-width="2"/>' + wins +
      '<rect x="6" y="144" width="314" height="7" fill="#e3131b"/><path d="M300 114h10q8 0 10 16h-20z" fill="#1d2a3a"/><circle cx="314" cy="154" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="166" width="400" height="20" fill="#9c958a"/><rect x="0" y="166" width="400" height="4" fill="#f2d24b"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3a3a40"/><rect x="0" y="206" width="400" height="4" fill="#888"/><rect x="0" y="226" width="400" height="4" fill="#888"/>' +
      tag("KHALIL", 140, 252, 26, GOLD, -3),
      bricks("b1b", "#6a5030") + '<style>@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}</style>');
  }

  /* 2. Pauley Pavilion, the arena where his father starred: blue and gold court, banners hanging, a ball bouncing at the free-throw line */
  function pauley() {
    let banners = "";
    for (let i = 0; i < 7; i++) banners += '<g class="sway"><rect x="' + (40 + i * 48) + '" y="10" width="26" height="40" fill="' + (i % 2 ? GOLD : BLUE) + '"/><path d="M' + (40 + i * 48) + ' 50l13 8 13-8z" fill="' + (i % 2 ? GOLD : BLUE) + '"/></g>';
    let crowd = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 40; c++) crowd += '<rect x="' + (c * 10 + (r % 2) * 5) + '' + '" y="' + (66 + r * 10) + '" width="7" height="7" rx="3" fill="' + ((r * 3 + c * 7) % 6 ? "#2a3a6a" : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#14182a"/>' + banners +
      '<rect x="0" y="62" width="400" height="48" fill="#1c2440"/>' + crowd +
      '<path d="M0 110h400v150H0z" fill="#d9a85a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="110" width="1" height="150" fill="#c08c40"/>').join("") +
      '<rect x="0" y="110" width="400" height="6" fill="' + BLUE + '"/>' +
      '<path d="M120 260v-90h160v90" fill="' + BLUE + '" opacity=".85"/><path d="M120 170h160" stroke="#fff" stroke-width="3"/><path d="M160 170q40 40 80 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<ellipse cx="200" cy="230" rx="60" ry="14" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<g class="bob" style="animation-duration:.6s"><circle cx="200" cy="140" r="12" fill="#e2803f" stroke="#7a3a12" stroke-width="1.5"/><path d="M188 140h24M200 128v24" stroke="#7a3a12" stroke-width="1.5"/></g>' +
      tag("DOC HAZZARD", 110, 104, 22, GOLD, -3),
      "");
  }

  /* 3. The studio: a big mixing desk with faders riding, a guitar on the stand, the beat software rack glowing on the screen */
  function westlake() {
    let faders = "";
    for (let i = 0; i < 18; i++) faders += '<rect x="' + (44 + i * 13) + '" y="186" width="5" height="44" rx="2" fill="#3a3a44"/><rect class="bob" style="animation-delay:-' + (i % 6) * 0.2 + 's" x="' + (41 + i * 13) + '" y="' + (196 + (i * 7) % 24) + '" width="11" height="6" rx="1" fill="' + (i % 5 ? CREAM : RED) + '"/>';
    let rack = "";
    for (let r = 0; r < 5; r++) rack += '<rect x="132" y="' + (34 + r * 18) + '" width="136" height="14" rx="1" fill="' + ["#4a4a52", "#2e3a52", "#52402e", "#3a4a3a", "#4a3a4a"][r] + '"/><circle class="tw' + (r % 2 ? " tw2" : "") + '" cx="140" cy="' + (41 + r * 18) + '" r="2" fill="' + [RED, GOLD, BLUE, "#7cd36b", RED][r] + '"/>' + [0, 1, 2, 3, 4, 5].map(k => '<circle cx="' + (160 + k * 18) + '" cy="' + (41 + r * 18) + '" r="3.5" fill="#bbb"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#w3)"/>' +
      '<rect x="120" y="22" width="160" height="110" rx="6" fill="#111" stroke="#555" stroke-width="3"/>' + rack +
      /* acoustic panels */
      '<g fill="#2a2a38">' + [10, 50, 300, 340].map(x => '<rect x="' + x + '" y="20" width="34" height="60" rx="3"/>').join("") + '</g>' +
      /* guitar on a stand */
      '<g class="sway"><path d="M352 170q-22-6-18-30q4-16 18-14q14-2 18 14q4 24-18 30z" fill="#b5652f" stroke="#5a2a0a" stroke-width="2"/><circle cx="352" cy="146" r="6" fill="#2a1a0a"/><rect x="349" y="70" width="6" height="64" fill="#5a2a0a"/><rect x="346" y="62" width="12" height="10" fill="#222"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3a2a22"/><rect x="0" y="170" width="400" height="6" fill="#5a4030"/>' +
      '<rect x="30" y="176" width="250" height="62" rx="4" fill="#26262c" stroke="#555" stroke-width="2"/>' + faders +
      tag("NEW ROYALES", 120, 256, 20, GOLD, -3),
      sky("w3", "#1e2238", "#0d0f18"));
  }

  /* 4. Detroit: the giant bronze fist hanging from its pyramid frame downtown, the glass towers on the river behind */
  function fist() {
    return svg(
      '<rect width="400" height="260" fill="url(#f4)"/>' + cloud(70, 40, 1) + cloud(300, 30, .8, "cld2") +
      /* riverfront towers: tall central cylinder ring */
      '<g fill="#6f8aa6"><rect x="250" y="40" width="40" height="130" rx="10"/><rect x="226" y="80" width="26" height="90" rx="8"/><rect x="290" y="80" width="26" height="90" rx="8"/><rect x="318" y="96" width="22" height="74" rx="7"/><rect x="204" y="96" width="22" height="74" rx="7"/></g>' +
      '<g fill="#9cb8d4" opacity=".6">' + [258, 270, 282].map(x => '<rect x="' + x + '" y="46" width="2" height="120"/>').join("") + '</g>' +
      '<g fill="#4a5a6a"><rect x="20" y="100" width="40" height="70"/><rect x="64" y="80" width="30" height="90"/><rect x="350" y="110" width="44" height="60"/></g>' +
      /* the pyramid frame */
      '<path d="M70 210L130 60l60 150" stroke="#2a2a2a" stroke-width="6" fill="none"/><path d="M100 210L130 60" stroke="#2a2a2a" stroke-width="5" opacity=".6"/>' +
      '<g class="sway" style="transform-origin:130px 60px"><path d="M130 60v40" stroke="#2a2a2a" stroke-width="3"/>' +
      /* the fist + forearm, bronze */
      '<g transform="translate(30 0)"><path d="M84 128h56l8 8v20l-8 8H84z" fill="#8a5a2a"/><rect x="40" y="132" width="48" height="28" rx="6" fill="#9a6a34"/>' +
      '<g fill="#7a4a1e">' + [0, 1, 2, 3].map(i => '<rect x="' + (118 + 0) + '" y="' + (130 + i * 9) + '" width="24" height="7" rx="3"/>').join("") + '</g><path d="M98 160q12 -6 24 0" stroke="#5a3410" stroke-width="3" fill="none"/></g></g>' +
      '<path d="M130 100v28" stroke="#2a2a2a" stroke-width="3"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5a60"/><rect x="0" y="210" width="400" height="4" fill="#bbb"/>' +
      carS("car", 228, BLUE) + carS("carL", 240, RED) +
      tag("DETROIT VS EVERYBODY", 196, 204, 16, GOLD, -3),
      sky("f4", "#7aa8d8", "#e0ecf6"));
  }

  /* 5. His corner in Hollywood: green signs at Hollywood Blvd & Vine St, KHALIL on the wall, the round stacked record tower with its blinking rooftop light */
  function corner() {
    let tower = "";
    for (let i = 0; i < 12; i++) { const w = 48 + i * 3; tower += '<rect x="' + (330 - w / 2) + '" y="' + (40 + i * 10) + '" width="' + w + '" height="8" rx="4" fill="#e9e6de"/><rect x="' + (330 - w / 2 + 4) + '" y="' + (48 + i * 10) + '" width="' + (w - 8) + '" height="2" fill="#5a6a7a"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      '<rect x="328" y="8" width="4" height="32" fill="#ccc"/><circle class="tw" cx="330" cy="8" r="4" fill="#ff3b3b"/>' + tower +
      '<rect x="296" y="160" width="68" height="60" fill="#d9d4c8"/>' +
      '<rect x="0" y="116" width="250" height="104" fill="#3a3448"/><rect x="0" y="116" width="250" height="104" fill="url(#c5b)" opacity=".35"/>' +
      tag("KHALIL", 18, 180, 46, GOLD, -6) + tag("SELF SCIENTIFIC", 50, 208, 18, RED, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, BLUE) +
      '<rect x="270" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(212, 96, 120, "HOLLYWOOD BLVD") + sign(232, 116, 80, "VINE ST"),
      sky("c5", "#0e1030", "#5a3a6a") + bricks("c5b", "#1e1a28"));
  }

  window.SCENES = { bline, pauley, westlake, fist, corner };
})();
