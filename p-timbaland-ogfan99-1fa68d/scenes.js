/* Timbaland producer game: Virginia Beach. I-264 East sign, Salem High School, the Beat Club lab, the Oceanfront boardwalk, Shore Dr & Great Neck Rd with the Cape Henry Lighthouse. Each scene 400 x 260. */
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
  const RED = "#e8452c", GOLD = "#f2b632", TEAL = "#2ec4b6", CREAM = "#f7f3ea";
  const keyboard = (x, y, n, kw) => {
    let s = '<rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="' + (n * kw + 12) + '" height="62" rx="4" fill="#26262c" stroke="#555" stroke-width="2"/>';
    for (let i = 0; i < n; i++) s += '<rect x="' + (x + i * kw) + '" y="' + y + '" width="' + (kw - 1) + '" height="40" fill="#f4f1e8" stroke="#888" stroke-width=".6"/>';
    for (let i = 0; i < n - 1; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) s += '<rect x="' + (x + i * kw + kw * 0.65) + '" y="' + y + '" width="' + (kw * 0.7) + '" height="24" fill="#111"/>';
    return s;
  };

  /* 1. Interstate 264 East rolling into Virginia Beach: big green highway sign, cars */
  function road() {
    return svg(
      '<rect width="400" height="260" fill="url(#r1)"/>' + cloud(60, 40, 1.2) + cloud(260, 30, 1, "cld2") +
      '<path d="M0 150q100-14 200-6t200 0v20H0z" fill="#3f7d4a"/>' +
      '<g fill="#2f6b3a"><circle cx="30" cy="148" r="14"/><circle cx="60" cy="144" r="18"/><circle cx="340" cy="146" r="16"/><circle cx="372" cy="142" r="20"/></g>' +
      /* gantry */
      '<rect x="70" y="40" width="8" height="130" fill="#8a8f96"/><rect x="322" y="40" width="8" height="130" fill="#8a8f96"/><rect x="70" y="44" width="260" height="6" fill="#8a8f96"/>' +
      '<rect x="92" y="54" width="216" height="80" rx="6" fill="#1f7a3a" stroke="#fff" stroke-width="3"/>' +
      /* interstate shield, plain shapes */
      '<path d="M104 66h42v6q0 24-21 32q-21-8-21-32z" fill="#1d4ea0" stroke="#fff" stroke-width="2"/><rect x="104" y="62" width="42" height="9" fill="#c8102e" stroke="#fff" stroke-width="1.5"/>' +
      T(125, 91, 11, "#fff", "264", ' text-anchor="middle"') + T(154, 78, 13, "#fff", "EAST") +
      T(214, 104, 16, "#fff", "Virginia Beach", ' text-anchor="middle"') + T(214, 124, 12, "#fff", "Oceanfront", ' text-anchor="middle"') +
      '<path d="M286 70v16M280 80l6 8 6-8" stroke="#fff" stroke-width="3" fill="none"/>' +
      /* road */
      '<rect x="0" y="164" width="400" height="96" fill="#3a3b40"/><rect x="0" y="164" width="400" height="4" fill="#d9d9d9"/>' +
      '<g fill="#f2d24b">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (i * 64) + '" y="210" width="34" height="4"/>').join("") + '</g>' +
      carS("car", 184, RED) + carS("car car2", 184, "#f4f1e8") + carS("carL", 228, TEAL) +
      tag("TIMBO", 150, 255, 24, GOLD, -3),
      sky("r1", "#3a86c8", "#bfe3ff"));
  }

  /* 2. Salem High School, Virginia Beach: red brick, white columns, flag waving */
  function salem() {
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + cloud(90, 36, 1) + cloud(300, 54, .8, "cld2") +
      '<rect x="20" y="90" width="360" height="120" fill="#9c3b2b"/><rect x="20" y="90" width="360" height="120" fill="url(#s2b)" opacity=".4"/>' +
      '<rect x="14" y="84" width="372" height="8" fill="#e9e4d8"/>' +
      '<path d="M140 92l60-34 60 34z" fill="#e9e4d8"/><rect x="140" y="92" width="120" height="8" fill="#d8d2c4"/>' +
      '<g fill="#f4f1e8">' + [0, 1, 2, 3].map(i => '<rect x="' + (150 + i * 30) + '" y="100" width="10" height="90"/>').join("") + '</g>' +
      '<rect x="176" y="150" width="48" height="40" fill="#3a2a22"/><rect x="198" y="150" width="4" height="40" fill="#9c8a6a"/>' +
      '<g fill="#cfe6f2" stroke="#e9e4d8" stroke-width="2">' + [36, 72, 108, 276, 312, 348].map(x => '<rect x="' + (x - 12) + '" y="110" width="22" height="26"/><rect x="' + (x - 12) + '" y="152" width="22" height="26"/>').join("") + '</g>' +
      '<rect x="128" y="70" width="144" height="16" fill="#1d3557" stroke="#e9e4d8"/>' + T(200, 82, 11, "#fff", "SALEM HIGH SCHOOL", ' text-anchor="middle" letter-spacing="1"') +
      /* flagpole */
      '<rect x="342" y="20" width="3" height="190" fill="#c9cdd2"/>' +
      '<g class="flag"><rect x="345" y="22" width="40" height="24" fill="#f4f1e8"/>' + [0, 2, 4].map(i => '<rect x="345" y="' + (22 + i * 4) + '" width="40" height="4" fill="#c8102e"/>').join("") + '<rect x="345" y="22" width="16" height="12" fill="#1d3557"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5f9e4a"/><path d="M170 210h60l20 50h-100z" fill="#cfc8b6"/>' +
      tag("SUPA DUPA", 26, 242, 22, GOLD, -4),
      sky("s2", "#4a90d9", "#cde8f7") + bricks("s2b", "#5a1f15"));
  }

  /* 3. The beat lab: sampler keyboard, drum pads flashing, speakers thumping, Beat Club neon */
  function beatlab() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pad pd' + (((r * 4 + c) * 3) % 4 + 1) + '" x="' + (282 + c * 22) + '" y="' + (128 + r * 18) + '" width="18" height="14" rx="3" fill="' + [RED, GOLD, TEAL, "#c77dff"][(r + c) % 4] + '"/>';
    const spk = x => '<rect x="' + x + '" y="60" width="54" height="96" rx="4" fill="#18181c" stroke="#333" stroke-width="2"/><circle class="pulse" cx="' + (x + 27) + '" cy="124" r="20" fill="#2a2a30" stroke="#555" stroke-width="3"/><circle cx="' + (x + 27) + '" cy="124" r="7" fill="#444"/><circle cx="' + (x + 27) + '" cy="80" r="9" fill="#2a2a30" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#14101c"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="url(#b3)"/>' +
      '<g class="neon"><rect x="120" y="16" width="160" height="34" rx="8" fill="none" stroke="' + GOLD + '" stroke-width="3"/>' + T(200, 41, 20, GOLD, "BEAT CLUB", ' text-anchor="middle" letter-spacing="3"') + '</g>' +
      spk(16) + spk(330) +
      '<rect x="0" y="170" width="400" height="90" fill="#3a2a22"/><rect x="0" y="170" width="400" height="8" fill="#5a4030"/>' +
      keyboard(30, 196, 26, 9) +
      '<rect x="272" y="118" width="100" height="84" rx="6" fill="#26262c" stroke="#555" stroke-width="2"/>' + pads +
      '<rect x="96" y="100" width="150" height="60" rx="4" fill="#0b2a2e" stroke="#555" stroke-width="2"/>' +
      '<g stroke="' + TEAL + '" stroke-width="2" fill="none"><path class="tw" d="M104 130h12l4-14 6 28 6-24 4 10h14l4-18 6 30 6-22 4 10h16l4-12 6 20 4-8h16"/></g>' +
      T(110, 152, 8, TEAL, "STUTTER  KICK  HI-HAT"),
      sky("b3", "#2a1840", "#14101c"));
  }

  /* 4. The Virginia Beach Oceanfront: boardwalk, fishing pier, waves */
  function oceanfront() {
    return svg(
      '<rect width="400" height="260" fill="url(#o4)"/>' + '<circle cx="320" cy="62" r="24" fill="#ffd36b"/>' + cloud(80, 50, 1.1) +
      /* hotels */
      '<g fill="#e9e4d8"><rect x="0" y="70" width="44" height="90"/><rect x="48" y="56" width="36" height="104"/><rect x="88" y="84" width="40" height="76"/></g>' +
      winGrid(0, 70, 44, 90, "#8fb8d8", "#cfe6f2") + winGrid(48, 56, 36, 104, "#8fb8d8", "#cfe6f2") + winGrid(88, 84, 40, 76, "#8fb8d8", "#cfe6f2") +
      /* boardwalk */
      '<rect x="0" y="160" width="400" height="16" fill="#b9a27c"/>' + '<g stroke="#8a7350" stroke-width="1">' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 160v16"/>').join("") + '</g>' +
      '<rect x="0" y="176" width="400" height="22" fill="#e8d6a8"/>' +
      ocean(198, "#1f6fa8", "#cfe6f2") +
      /* fishing pier */
      '<rect x="230" y="186" width="170" height="6" fill="#7a5a3a"/>' + '<g fill="#5a4028">' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (236 + i * 20) + '" y="192" width="4" height="40"/>').join("") + '</g>' +
      '<rect x="360" y="170" width="30" height="16" fill="#e9e4d8"/><path d="M356 170l19-10 19 10z" fill="#c8102e"/>' +
      '<g class="walk"><circle cx="0" cy="150" r="4" fill="#3a2a22"/><rect x="-3" y="154" width="6" height="12" fill="' + RED + '"/></g>' +
      tag("HEAD BANGA", 140, 150, 20, GOLD, -4),
      sky("o4", "#ff9a5a", "#ffe2a8"));
  }

  /* 5. Shore Dr and Great Neck Rd: green signs, tagged wall, Cape Henry Lighthouse behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(12) +
      /* Old Cape Henry Lighthouse: tan sandstone octagon tower, dark lantern, light beam */
      '<g transform="translate(34 0)"><path class="beam" d="M330 26L400 6v40z" fill="#fff3b0"/><path class="beam" d="M314 26L240 8v36z" fill="#fff3b0"/>' +
      '<path d="M306 150l8-112h18l8 112z" fill="#d9c49a"/><path d="M318 150l3-112h4l3 112z" fill="#c4ad80"/>' +
      '<rect x="310" y="32" width="26" height="8" fill="#5a4a3a"/><rect x="314" y="18" width="18" height="14" fill="#2a2a30"/><rect x="316" y="20" width="14" height="10" fill="#ffe680" class="tw"/><path d="M312 18l11-8 11 8z" fill="#2a2a30"/>' +
      '<rect x="300" y="148" width="46" height="8" fill="#b9a27c"/></g>' +
      /* wall */
      '<rect x="0" y="116" width="270" height="104" fill="#7a3a2e"/><rect x="0" y="116" width="270" height="104" fill="url(#c5b)" opacity=".35"/>' +
      tag("TIMBALAND", 14, 178, 40, GOLD, -6) + tag("BEAT CLUB", 80, 208, 18, TEAL, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, RED) +
      '<rect x="282" y="96" width="5" height="124" fill="#5b6b5f"/>' +
      sign(238, 96, 92, "SHORE DR") + sign(232, 116, 104, "GREAT NECK RD"),
      sky("c5", "#141a3a", "#e0703a") + bricks("c5b", "#3a1a12"));
  }

  window.SCENES = { road, salem, beatlab, oceanfront, corner };
})();
