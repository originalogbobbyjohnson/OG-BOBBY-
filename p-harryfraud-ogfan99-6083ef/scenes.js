/* Harry Fraud producer game: Brooklyn. Atlantic Av-Barclays Ctr, the Canal St studio block, Surf School at Rockaway, the Brooklyn studio, the corner. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.sw{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.4s ease-in-out infinite}.sw2{animation-delay:-1.2s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 6s linear infinite}' +
    '@keyframes wave{0%{transform:translateX(0)}100%{transform:translateX(-80px)}}.wv{animation:wave 3s linear infinite}.wv2{animation-duration:5s}' +
    '@keyframes ride{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(40px,-8px) rotate(4deg)}}.rd{transform-box:fill-box;transform-origin:50% 50%;animation:ride 3s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.5}50%{opacity:1}}.gl{animation:glow 1.3s ease-in-out infinite}' +
    '@keyframes pad{0%,70%,100%{opacity:.3}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.gu{animation:gull 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, dark, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 9) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="' + ((r || 9) + 3) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const TEAL = "#4fd1c5", SUN = "#f4a261", SAND = "#e9d8a6";

  /* 1. Atlantic Av-Barclays Ctr: white tile, black sign with the real bullets, the 2 train pulling in */
  function atlantic() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfd4cc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cfd4cc" stroke-width="1"/>';
    let win = "";
    for (let x = 22; x < 270; x += 46) win += '<rect x="' + x + '" y="124" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    const B = [["2", "#ee352e"], ["3", "#ee352e"], ["4", "#00933c"], ["5", "#00933c"], ["B", "#ff6319"], ["D", "#ff6319"], ["N", "#fccc0a", 1], ["Q", "#fccc0a", 1], ["R", "#fccc0a", 1]];
    let bl = ""; B.forEach((b, i) => { bl += bullet(126 + i * 22, 98, b[0], b[1], b[2]); });
    return svg(
      '<rect width="400" height="176" fill="#e6e9e2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#1c1c20"/>' +
      '<rect class="flk" x="50" y="4" width="70" height="4" rx="2" fill="#fffbe6"/><rect class="flk flk2" x="250" y="4" width="70" height="4" rx="2" fill="#fffbe6"/>' +
      '<rect x="0" y="22" width="400" height="10" fill="#3b6fb0"/><rect x="0" y="32" width="400" height="3" fill="#24497a"/>' +
      '<rect x="30" y="44" width="340" height="66" rx="4" fill="#111"/><rect x="30" y="44" width="340" height="4" fill="#fff"/>' +
      '<text x="44" y="74" ' + font + ' font-size="18" fill="#fff">Atlantic Av - Barclays Ctr</text>' + bl +
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="304" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="152" width="304" height="5" fill="#ee352e"/>' + win +
        '<circle cx="304" cy="164" r="4" fill="#fff6c2"/>' + bullet(292, 132, "2", "#ee352e") +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#14171c"/>' +
      tag("FRAUD", 40, 242, 34, TEAL, -5) + tag("SURF SCHOOL", 200, 240, 26, SUN, -7));
  }

  /* 2. Canal St, Chinatown, where his first studio was: red lanterns swaying, fire escapes, the studio window lit upstairs */
  function chinatown() {
    let fac = "";
    const bld = (x, w, c) => {
      let s = '<rect x="' + x + '" y="40" width="' + w + '" height="160" fill="' + c + '"/>';
      for (let r = 0; r < 4; r++) for (let k = 0; k < Math.floor(w / 30); k++) s += '<rect x="' + (x + 8 + k * 30) + '" y="' + (52 + r * 30) + '" width="16" height="20" fill="' + ((r + k) % 3 ? "#2a2a33" : "#ffd98a") + '"/>';
      for (let r = 1; r < 4; r++) s += '<rect x="' + (x + 4) + '" y="' + (74 + r * 30 - 30) + '" width="' + (w - 8) + '" height="3" fill="#111"/>';
      return s;
    };
    fac += bld(0, 130, "#8a5a44") + bld(134, 130, "#6c7a6a") + bld(268, 132, "#7a4a3e");
    let lan = "";
    for (let i = 0; i < 7; i++) lan += '<g class="sw ' + (i % 2 ? "sw2" : "") + '"><path d="M' + (30 + i * 56) + ' 30v8" stroke="#111"/><ellipse cx="' + (30 + i * 56) + '" cy="46" rx="10" ry="9" fill="#d62828"/><rect x="' + (26 + i * 56) + '" y="54" width="8" height="4" fill="#f2c14e"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#c2)"/>' + fac +
      '<path d="M0 30q200 14 400 0" stroke="#222" stroke-width="1.5" fill="none"/>' + lan +
      '<rect x="150" y="80" width="98" height="24" fill="#111"/><text class="gl" x="199" y="97" text-anchor="middle" ' + font + ' font-size="13" fill="' + TEAL + '" letter-spacing="2">STUDIO</text>' +
      '<rect x="0" y="160" width="400" height="12" fill="#d62828"/><rect x="0" y="172" width="400" height="28" fill="#2a2a2e"/>' +
      '<rect x="20" y="176" width="70" height="20" fill="#f2c14e"/><rect x="160" y="176" width="70" height="20" fill="' + SAND + '"/><rect x="300" y="176" width="70" height="20" fill="#f2c14e"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a42"/><path d="M0 230h400" stroke="#f2d16b" stroke-width="3" stroke-dasharray="18 12"/>' +
      '<g class="car"><rect x="0" y="234" width="50" height="14" rx="5" fill="#f2c14e"/><rect x="10" y="228" width="26" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="248" r="4" fill="#111"/><circle cx="40" cy="248" r="4" fill="#111"/></g>' +
      '<rect x="300" y="206" width="90" height="18" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="345" y="219" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Canal St</text>',
      sky("c2", "#1b1d3a", "#5a3a5e"));
  }

  /* 3. Surf School at Rockaway Beach: waves rolling in, a surfboard riding them, gulls, the boardwalk */
  function rockaway() {
    const wavePath = (y, amp) => { let d = "M0 " + y; for (let x = 0; x < 520; x += 40) d += " q20 -" + amp + " 40 0"; return d + " V260 H0z"; };
    return svg(
      '<rect width="400" height="260" fill="url(#r1)"/>' +
      '<circle cx="320" cy="70" r="30" fill="#ffe08a"/>' +
      '<g class="gu"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="gu" style="animation-delay:-4s"><path d="M0 34q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="wv wv2"><path d="' + wavePath(130, 10) + '" fill="#1f7a96"/></g>' +
      '<g class="wv"><path d="' + wavePath(150, 14) + '" fill="#2a9bb8"/></g>' +
      '<g class="rd"><path d="M150 146q30-10 70 0q-30 8-70 0z" fill="' + SUN + '" stroke="#5a3a1a" stroke-width="1.5"/><path d="M160 146h50" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="wv"><path d="' + wavePath(172, 8) + '" fill="#bfe9ef" opacity=".8"/></g>' +
      '<rect x="0" y="186" width="400" height="40" fill="' + SAND + '"/>' +
      '<rect x="0" y="222" width="400" height="10" fill="#8a6a4a"/>' + (() => { let p = ""; for (let x = 0; x < 400; x += 16) p += '<path d="M' + x + ' 222v10" stroke="#6a4a2a" stroke-width="2"/>'; return p; })() +
      '<rect x="0" y="232" width="400" height="28" fill="#6a4a2a"/>' +
      '<g transform="rotate(-12 60 200)"><path d="M48 150q12-10 24 0v60q-12 8-24 0z" fill="' + TEAL + '" stroke="#11504a" stroke-width="2"/><path d="M60 146v68" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="270" y="196" width="112" height="22" rx="3" fill="#111"/><text x="326" y="212" text-anchor="middle" ' + font + ' font-size="12" fill="' + TEAL + '" letter-spacing="2">SURF SCHOOL</text>',
      sky("r1", "#7cc6e8", "#f8e1b6"));
  }

  /* 4. The Brooklyn studio: LA MUSICA neon glowing, speakers thumping, the sampler pads flashing */
  function studio() {
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (150 + c * 26) + '" y="' + (184 + r * 24) + '" width="20" height="18" rx="3" fill="' + (r ? SUN : TEAL) + '"/>';
    const spk = x => '<rect x="' + x + '" y="110" width="60" height="96" rx="4" fill="#1f1f24" stroke="#444" stroke-width="2"/><g class="th"><circle cx="' + (x + 30) + '" cy="170" r="20" fill="#2c2c33" stroke="#666" stroke-width="2"/><circle cx="' + (x + 30) + '" cy="170" r="8" fill="#111"/></g><circle cx="' + (x + 30) + '" cy="128" r="8" fill="#2c2c33" stroke="#666"/>';
    return svg(
      '<rect width="400" height="260" fill="#0f1418"/>' +
      (() => { let b = ""; for (let y = 0; y < 170; y += 14) b += '<path d="M0 ' + y + 'h400" stroke="#1a2228" stroke-width="2"/>'; return b; })() +
      '<text class="gl" x="200" y="62" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="40" fill="none" stroke="' + TEAL + '" stroke-width="2.5">La Musica</text>' +
      '<text class="gl" x="200" y="62" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="40" fill="' + TEAL + '" opacity=".35">La Musica</text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3a2a22"/><rect x="0" y="170" width="400" height="6" fill="#5a4032"/>' +
      spk(30) + spk(310) +
      '<rect x="138" y="176" width="124" height="60" rx="5" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' + pads +
      '<rect x="120" y="92" width="160" height="70" rx="4" fill="#0a0d12" stroke="#3a3f47" stroke-width="3"/>' +
      '<path d="M130 130 q10-24 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t16 0" fill="none" stroke="' + SUN + '" stroke-width="2.5"/>');
  }

  /* 5. The corner: Atlantic Ave and Flatbush Ave, green signs, FRAUD on the wall, the Brooklyn Bridge behind */
  function corner() {
    const tower = x => '<rect x="' + x + '" y="40" width="34" height="90" fill="#b8a98e"/><path d="M' + (x + 6) + ' 60q11-16 22 0v30h-22z" fill="#5a5466"/><path d="M' + (x + 6) + ' 96h22v20h-22z" fill="#5a5466"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' +
      '<path d="M0 108h400" stroke="#7a6f62" stroke-width="5"/>' +
      tower(90) + tower(270) +
      '<path d="M0 104Q50 60 90 42M124 42Q200 110 270 42M304 42Q350 60 400 104" stroke="#d9d0c0" stroke-width="2" fill="none"/>' +
      (() => { let c = ""; for (let i = 0; i < 10; i++) { c += '<path d="M' + (124 + i * 14) + ' 106L107 42" stroke="#d9d0c0" stroke-width=".8"/><path d="M' + (270 - i * 14) + ' 106L287 42" stroke="#d9d0c0" stroke-width=".8"/>'; } return c; })() +
      '<rect x="0" y="120" width="400" height="104" fill="#5e5a6a"/>' +
      (() => { let b = ""; for (let y = 128; y < 224; y += 10) b += '<path d="M0 ' + y + 'h400" stroke="#4e4a5a" stroke-width="1"/>'; return b; })() +
      tag("FRAUD", 24, 196, 52, TEAL, -5) + tag("LA MUSICA", 170, 216, 22, SUN, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="332" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="278" y="44" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Atlantic Ave</text>' +
      '<rect x="278" y="70" width="112" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Flatbush Ave</text>',
      sky("k1", "#1b2a44", "#f0a070"));
  }

  window.SCENES = { atlantic: atlantic, chinatown: chinatown, rockaway: rockaway, studio: studio, corner: corner };
})();
