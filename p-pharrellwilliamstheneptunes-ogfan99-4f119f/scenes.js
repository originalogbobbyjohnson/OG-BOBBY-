/* Pharrell Williams (The Neptunes) producer game: Virginia Beach. The Tide at Newtown Road, Princess Anne High School, the Star Trak session, King Neptune at the Oceanfront, Atlantic Ave & 31st St with the Bay Bridge-Tunnel. Each scene 400 x 260. */
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
  const AQUA = "#39d0ff", YEL = "#ffd400", PINK = "#ff4fa0", CREAM = "#f7f3ea", BRONZE = "#4f8f7a";
  const keyboard = (x, y, n, kw) => {
    let s = '<rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="' + (n * kw + 12) + '" height="62" rx="4" fill="#cfd4da" stroke="#777" stroke-width="2"/>';
    for (let i = 0; i < n; i++) s += '<rect x="' + (x + i * kw) + '" y="' + y + '" width="' + (kw - 1) + '" height="40" fill="#f4f1e8" stroke="#888" stroke-width=".6"/>';
    for (let i = 0; i < n - 1; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) s += '<rect x="' + (x + i * kw + kw * 0.65) + '" y="' + y + '" width="' + (kw * 0.7) + '" height="24" fill="#111"/>';
    return s;
  };
  const star = (cx, cy, r, fill, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); } return '<path class="' + (cls || "") + '" d="' + p + 'z" fill="' + fill + '"/>'; };

  /* 1. The Tide light rail rolling into Newtown Road station on the Virginia Beach line */
  function tide() {
    let wins = "";
    for (let x = 30; x < 290; x += 34) wins += '<rect x="' + x + '" y="114" width="22" height="20" rx="3" fill="#1d2f4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + cloud(80, 40, 1.1) + cloud(300, 30, .8, "cld2") +
      '<g fill="#5a8a4a"><circle cx="20" cy="150" r="20"/><circle cx="380" cy="146" r="24"/><circle cx="350" cy="152" r="16"/></g>' +
      /* catenary */
      '<rect x="0" y="80" width="400" height="2" fill="#555"/>' + [40, 200, 360].map(x => '<rect x="' + x + '" y="60" width="4" height="100" fill="#777"/><rect x="' + (x - 14) + '" y="60" width="32" height="3" fill="#777"/>').join("") +
      /* station canopy + sign */
      '<rect x="230" y="48" width="160" height="10" fill="' + AQUA + '"/><rect x="236" y="58" width="4" height="40" fill="#999"/><rect x="380" y="58" width="4" height="40" fill="#999"/>' +
      '<rect x="250" y="64" width="124" height="26" rx="3" fill="#0d2a4a"/>' + T(312, 82, 12, "#fff", "Newtown Road", ' text-anchor="middle"') +
      /* light rail car: white with blue/aqua band */
      '<g class="anim-train"><path d="M6 104h290q22 0 26 22v32H6z" fill="#f1f3f5" stroke="#8a929c" stroke-width="2"/>' + wins +
      '<rect x="6" y="140" width="314" height="6" fill="#1d4ea0"/><rect x="6" y="146" width="314" height="3" fill="' + AQUA + '"/>' +
      '<path d="M300 110h10q8 0 10 16h-20z" fill="#1d2f4a"/><circle cx="314" cy="152" r="3" fill="#fff6c2"/><rect x="140" y="94" width="40" height="10" fill="#666"/><path d="M150 94l10-12 10 12" stroke="#555" stroke-width="2" fill="none"/></g>' +
      /* platform + track */
      '<rect x="0" y="160" width="400" height="18" fill="#c9c4b8"/><rect x="0" y="160" width="400" height="4" fill="#f2d24b"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#7a7468"/><g fill="#5a5448">' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="200" width="14" height="40"/>').join("") + '</g><rect x="0" y="210" width="400" height="4" fill="#aaa"/><rect x="0" y="228" width="400" height="4" fill="#aaa"/>' +
      tag("SKATEBOARD P", 110, 254, 22, AQUA, -3),
      sky("t1", "#5aa8e8", "#d8eefa"));
  }

  /* 2. Princess Anne High School, Virginia Beach: long low brick school, sign, palm-free pines, buses */
  function school() {
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + cloud(100, 40, 1) + cloud(320, 56, .7, "cld2") +
      '<rect x="10" y="96" width="380" height="104" fill="#a8553c"/><rect x="10" y="96" width="380" height="104" fill="url(#s2b)" opacity=".35"/>' +
      '<rect x="6" y="90" width="388" height="8" fill="#e9e4d8"/>' +
      '<g fill="#cfe6f2" stroke="#e9e4d8" stroke-width="2">' + Array.from({ length: 10 }, (_, i) => i === 4 || i === 5 ? "" : '<rect x="' + (24 + i * 37) + '" y="112" width="24" height="30"/>').join("") + '</g>' +
      '<rect x="160" y="120" width="80" height="80" fill="#e9e4d8"/><rect x="176" y="150" width="48" height="50" fill="#2a3a5a"/><rect x="198" y="150" width="4" height="50" fill="#9a9a9a"/>' +
      '<rect x="120" y="60" width="160" height="26" fill="#1d3557" stroke="#e9e4d8" stroke-width="2"/>' + T(200, 78, 11, "#fff", "PRINCESS ANNE HIGH", ' text-anchor="middle" letter-spacing="1"') +
      '<rect x="0" y="200" width="400" height="60" fill="#5f9e4a"/><path d="M168 200h64l18 60h-100z" fill="#cfc8b6"/>' +
      '<g class="carL"><rect x="0" y="214" width="96" height="30" rx="5" fill="#f6b800"/><g fill="#1d2f4a">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + (8 + i * 17) + '" y="219" width="12" height="10"/>').join("") + '</g><circle cx="18" cy="246" r="6" fill="#111"/><circle cx="78" cy="246" r="6" fill="#111"/></g>' +
      tag("BAND CAMP", 14, 236, 20, AQUA, -4),
      sky("s2", "#4a90d9", "#cde8f7") + bricks("s2b", "#5a1f15"));
  }

  /* 3. The Star Trak studio session: keys, drum machine, skateboard on the wall, star neon */
  function studio() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) pads += '<rect class="pad pd' + (((r * 8 + c) * 3) % 4 + 1) + '" x="' + (262 + c * 15) + '" y="' + (154 + r * 16) + '" width="12" height="12" rx="2" fill="' + [AQUA, YEL, PINK, CREAM][(r + c) % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' +
      '<g class="neon">' + star(76, 52, 28, "none") + '<path d="' + (() => { let p = ""; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? 12.6 : 28; p += (i ? "L" : "M") + (76 + rr * Math.cos(a)).toFixed(1) + " " + (52 + rr * Math.sin(a)).toFixed(1); } return p; })() + 'z" fill="none" stroke="' + YEL + '" stroke-width="3"/>' + T(196, 62, 22, YEL, "STAR TRAK", ' text-anchor="middle" letter-spacing="3"') + '</g>' +
      /* skateboard on wall */
      '<g transform="rotate(-20 330 70)"><rect x="296" y="60" width="72" height="18" rx="9" fill="' + PINK + '" stroke="#222" stroke-width="2"/><circle cx="310" cy="82" r="5" fill="' + CREAM + '"/><circle cx="354" cy="82" r="5" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="130" width="400" height="130" fill="#1e2a33"/><rect x="0" y="130" width="400" height="8" fill="#2e3e4a"/>' +
      keyboard(26, 168, 24, 9) +
      '<rect x="252" y="146" width="132" height="44" rx="5" fill="#2a2a30" stroke="#666" stroke-width="2"/>' + pads +
      '<rect x="252" y="198" width="132" height="30" rx="4" fill="#0b2a2e"/><g stroke="' + AQUA + '" stroke-width="2" fill="none"><path class="tw" d="M258 214h14l4-10 6 18 6-14 4 6h16l4-10 6 16 6-8h14l4-6 6 12 4-4h10"/></g>' +
      '<g class="pulse"><circle cx="200" cy="104" r="16" fill="#2a2a30" stroke="#666" stroke-width="3"/><circle cx="200" cy="104" r="6" fill="#444"/></g>',
      sky("b3", "#0d2a3a", "#071a24"));
  }

  /* 4. King Neptune at the Oceanfront: green-bronze statue with trident on a rock base, turtles, waves */
  function neptune() {
    return svg(
      '<rect width="400" height="260" fill="url(#n4)"/>' + '<circle cx="80" cy="60" r="22" fill="#ffd36b"/>' + cloud(260, 44, 1) +
      ocean(176, "#1f6fa8", "#cfe6f2") +
      '<rect x="0" y="168" width="400" height="12" fill="#e8d6a8"/>' +
      /* granite base */
      '<path d="M120 200l20-40h120l20 40z" fill="#8a8f96"/><path d="M140 160l14-16h92l14 16z" fill="#a0a5ac"/>' +
      /* statue: big bronze figure (no facial detail), beard mass, trident */
      '<g fill="' + BRONZE + '">' +
        '<path d="M160 146q-6-40 10-62q14-14 30-14t30 14q16 22 10 62z"/>' +
        '<circle cx="200" cy="56" r="20"/><path d="M182 62q18 40 36 0q-2 26-18 30q-16-4-18-30z" fill="#3f7a66"/>' +
        '<path d="M184 40l6-12 10 8 10-8 6 12z" fill="#c9a24a"/>' +
        '<path d="M232 92q20 10 22 30" stroke="' + BRONZE + '" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '</g>' +
      '<rect x="252" y="30" width="5" height="120" fill="#3f6f5e"/><path d="M242 30v-16M254 26v-20M266 30v-16M242 30h24" stroke="#3f6f5e" stroke-width="4" fill="none"/>' +
      /* turtles */
      '<g class="bob"><ellipse cx="128" cy="196" rx="14" ry="8" fill="' + BRONZE + '"/><circle cx="144" cy="194" r="4" fill="' + BRONZE + '"/></g>' +
      '<g class="bob" style="animation-delay:-1s"><ellipse cx="272" cy="196" rx="14" ry="8" fill="' + BRONZE + '"/><circle cx="256" cy="194" r="4" fill="' + BRONZE + '"/></g>' +
      tag("NEPTUNES", 20, 246, 24, YEL, -4),
      sky("n4", "#4fb0e8", "#e4f4fc"));
  }

  /* 5. Atlantic Ave and 31st St: green signs, tagged wall, Chesapeake Bay Bridge-Tunnel at dusk behind */
  function corner() {
    let piers = "";
    for (let i = 0; i < 16; i++) piers += '<rect x="' + (250 + i * 10) + '" y="104" width="2" height="14" fill="#2a3a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(10) +
      '<rect x="240" y="112" width="160" height="106" fill="#2a4a6a"/><g class="wv" opacity=".5"><path d="M240 150q10-4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#9ad1ff" fill="none"/></g>' +
      /* bridge-tunnel trestle low over the bay, with a cargo ship */
      '<path d="M240 104h160" stroke="#c9cdd2" stroke-width="3"/>' + piers +
      '<g class="carL"><rect x="0" y="98" width="10" height="5" fill="' + YEL + '"/></g>' +
      '<g class="bob"><path d="M300 130h60l-6 10h-48z" fill="#8a3b2a"/><rect x="316" y="120" width="30" height="10" fill="' + CREAM + '"/></g>' +
      '<rect x="0" y="116" width="260" height="104" fill="#7a3a2e"/><rect x="0" y="116" width="260" height="104" fill="url(#c5b)" opacity=".35"/>' +
      tag("PHARRELL", 18, 178, 42, AQUA, -6) + tag("STAR TRAK", 90, 208, 18, YEL, -3) +
      '<rect x="0" y="218" width="400" height="12" fill="#a39b8a"/><rect x="0" y="230" width="400" height="30" fill="#24222b"/>' +
      carS("car", 236, PINK) +
      '<rect x="292" y="140" width="5" height="80" fill="#5b6b5f"/>' +
      sign(248, 140, 92, "ATLANTIC AVE") + sign(262, 160, 64, "31ST ST"),
      sky("c5", "#141a3a", "#ff8a5a") + bricks("c5b", "#3a1a12"));
  }

  window.SCENES = { tide, school, studio, neptune, corner };
})();
