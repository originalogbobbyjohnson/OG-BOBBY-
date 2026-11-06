/* Artifacts game (NYC-metro map, New Jersey: Newark). Tame One and El Da Sensei, the graffiti writers turned rap duo.
   Norfolk St on the Newark Light Rail (open cut, two side platforms, the car climbing out of the Raymond Blvd tunnel),
   Port Newark's cranes and container stacks, the Hahne & Co. building on Broad St (limestone front, the skylit court inside),
   the old Bamberger's building on Market St where Newark radio started in 1922 (radio waves = "hear me on KISS"),
   and Broad St & William St with Old First Church's steeple up the block. 400 x 260 SVGs. Classes prefixed af-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes afcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.af-car{animation:afcar 7s linear infinite}.af-car2{animation-delay:-3.5s}' +
    '@keyframes afblink{0%,100%{opacity:.25}50%{opacity:1}}.af-bl{animation:afblink 1.8s ease-in-out infinite}.af-bl2{animation-delay:.6s}.af-bl3{animation-delay:1.2s}' +
    '@keyframes afflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.af-flk{animation:afflick 2.6s infinite}' +
    '@keyframes afhoist{0%,100%{transform:translate(0,0)}35%{transform:translate(0,-34px)}65%{transform:translate(-70px,-34px)}85%{transform:translate(-70px,0)}}.af-box{animation:afhoist 7s ease-in-out infinite}' +
    '@keyframes afwave{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.6);opacity:0}}.af-wave{transform-box:fill-box;transform-origin:50% 100%;animation:afwave 2.4s ease-out infinite}.af-wave2{animation-delay:.8s}.af-wave3{animation-delay:1.6s}' +
    '@keyframes afship{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.af-bob{animation:afship 3s ease-in-out infinite}' +
    '@keyframes afgull{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.af-gull{animation:afgull 11s linear infinite}' +
    '@keyframes afmist{0%,100%{opacity:0;transform:translate(0,0)}30%{opacity:.8}100%{transform:translate(18px,-14px)}}.af-mist{animation:afmist 1.6s ease-out infinite}.af-mist2{animation-delay:.5s}.af-mist3{animation-delay:1s}' +
    '@keyframes afglow{0%,100%{opacity:.55}50%{opacity:1}}.af-glow{animation:afglow 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 37) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff7a2f", TEAL = "#2ec4b6", GOLD = "#f4c430", CREAM = "#f3ead7", NLR = "#0039a6";

  /* 1. Norfolk St, Newark Light Rail: an open cut with concrete walls, two side platforms, University Heights above, the car rolling in */
  function norfolk() {
    let win = "";
    for (let x = 38; x < 270; x += 30) win += '<rect x="' + x + '" y="128" width="20" height="18" rx="2" fill="#bfe0f7" opacity=".9"/>';
    let wall = "";
    for (let x = 0; x < 400; x += 40) wall += '<rect x="' + x + '" y="84" width="39" height="70" fill="#8d8a84"/><path d="M' + x + ' 84v70" stroke="#6d6a64" stroke-width="1.5"/>';
    let rows = "";
    for (let x = 20; x < 380; x += 26) rows += '<rect class="af-bl af-bl' + (x % 3 + 1) + '" x="' + x + '" y="44" width="7" height="8" fill="#ffd98a" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#an)"/>' +
      /* University Heights above the cut */
      '<rect x="0" y="36" width="140" height="48" fill="#3e3a48"/><rect x="150" y="26" width="110" height="58" fill="#46404f"/><rect x="270" y="40" width="130" height="44" fill="#3a3644"/>' + rows +
      '<rect x="0" y="78" width="400" height="6" fill="#5c5a55"/>' +
      '<path d="M0 78h400" stroke="#9aa3ad" stroke-width="2"/>' + [30, 110, 190, 270, 350].map(x => '<rect x="' + x + '" y="62" width="2" height="16" fill="#9aa3ad"/>').join("") +
      wall +
      /* station sign */
      '<rect x="56" y="92" width="288" height="28" rx="3" fill="#111"/><rect x="56" y="92" width="288" height="3" fill="#fff"/>' +
      '<text x="70" y="112" ' + font + ' font-size="14" fill="#fff">Norfolk St</text>' +
      '<rect x="262" y="99" width="70" height="16" rx="8" fill="' + NLR + '"/><text x="297" y="111" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NEWARK LR</text>' +
      /* the light rail car */
      '<g class="anim-train">' +
        '<rect x="20" y="120" width="290" height="50" rx="7" fill="#e9ecef" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="20" y="152" width="290" height="5" fill="' + NLR + '"/><rect x="20" y="158" width="290" height="3" fill="' + ORANGE + '"/>' +
        '<rect x="292" y="126" width="14" height="24" rx="2" fill="#bfe0f7"/><circle cx="302" cy="162" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* side platforms + tracks */
      '<rect x="0" y="170" width="400" height="8" fill="' + GOLD + '"/><rect x="0" y="178" width="400" height="18" fill="#6b6862"/>' +
      '<rect x="0" y="196" width="400" height="22" fill="#3b3935"/>' + (() => { let t = ""; for (let x = 0; x < 400; x += 16) t += '<rect x="' + x + '" y="200" width="9" height="16" fill="#5a4a3a"/>'; return t; })() +
      '<rect x="0" y="203" width="400" height="2" fill="#b8bec6"/><rect x="0" y="212" width="400" height="2" fill="#b8bec6"/>' +
      '<rect x="0" y="218" width="400" height="8" fill="' + GOLD + '"/><rect x="0" y="226" width="400" height="34" fill="#6b6862"/>' +
      person(350, 143, "#1b1b1b") + person(70, 230, "#222") + person(92, 233, "#2b2b2b") +
      txt("UNIVERSITY HEIGHTS", 300, 248, 10, CREAM, 'letter-spacing="2"'),
      sky("an", "#141026", "#3b2c4a"));
  }

  /* 2. Port Newark: gantry cranes over the container stacks, a ship at the berth, one box riding the crane */
  function port() {
    const colors = [ORANGE, TEAL, "#c0392b", "#2d5d9f", GOLD, "#6d8b3a", "#8e44ad"];
    let stack = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
      if ((r === 3 && c % 3 === 1) || (r === 2 && c === 7)) continue;
      const col = colors[(r * 5 + c * 3) % colors.length];
      stack += '<rect x="' + (14 + c * 40) + '" y="' + (204 - r * 16) + '" width="38" height="15" fill="' + col + '" stroke="#1a1a1a" stroke-width="1"/>' +
        '<path d="M' + (20 + c * 40) + ' ' + (206 - r * 16) + 'v11M' + (28 + c * 40) + ' ' + (206 - r * 16) + 'v11M' + (36 + c * 40) + ' ' + (206 - r * 16) + 'v11M' + (44 + c * 40) + ' ' + (206 - r * 16) + 'v11" stroke="#000" stroke-opacity=".25"/>';
    }
    const crane = (x, col) => '<g>' +
      '<rect x="' + x + '" y="70" width="8" height="150" fill="' + col + '"/><rect x="' + (x + 52) + '" y="70" width="8" height="150" fill="' + col + '"/>' +
      '<path d="M' + x + ' 140l60-40M' + (x + 60) + ' 140l-60-40" stroke="' + col + '" stroke-width="3"/>' +
      '<rect x="' + (x - 90) + '" y="62" width="190" height="10" fill="' + col + '"/>' +
      '<path d="M' + (x + 30) + ' 30v32M' + (x + 30) + ' 30l-110 32M' + (x + 30) + ' 30l70 32" stroke="' + col + '" stroke-width="2"/>' +
      '<rect x="' + (x + 18) + '" y="72" width="24" height="14" fill="#eef2f5" stroke="#333"/><rect x="' + (x + 22) + '" y="75" width="16" height="6" fill="#9fd3ff"/>' +
      '<circle class="af-flk" cx="' + (x + 30) + '" cy="28" r="3" fill="#ff4d4d"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ap)"/>' +
      '<circle cx="320" cy="58" r="24" fill="#ffb36b" opacity=".85"/>' +
      '<path class="af-gull" d="M0 40q6-6 12 0q6-6 12 0" stroke="#2b2b2b" stroke-width="2" fill="none"/>' +
      /* far Manhattan line, faint */
      '<path d="M0 132h30v-10h12v-16h10v16h14v-8h20v18h18v-24h8v24h30v8H0z" fill="#6c5a78" opacity=".45"/>' +
      /* water + ship */
      '<rect x="0" y="134" width="400" height="40" fill="#2f4f6b"/>' +
      '<g class="af-bob"><path d="M150 138h240l-14 26H162z" fill="#1d2f45"/><rect x="330" y="116" width="40" height="22" fill="#eef2f5"/><rect x="336" y="120" width="28" height="6" fill="#2b3a4d"/>' +
        '<rect x="190" y="126" width="34" height="12" fill="' + TEAL + '"/><rect x="226" y="126" width="34" height="12" fill="' + ORANGE + '"/><rect x="262" y="126" width="34" height="12" fill="#c0392b"/></g>' +
      crane(150, "#2b6cb0") + crane(290, "#2b6cb0") +
      /* the box riding the right crane */
      '<g class="af-box"><path d="M320 86v52" stroke="#222" stroke-width="1.5"/><rect x="302" y="138" width="36" height="14" fill="' + GOLD + '" stroke="#1a1a1a"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4844"/>' + stack +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3834"/><path d="M0 238h400" stroke="#d9c94a" stroke-dasharray="14 10" stroke-width="2"/>' +
      '<g class="af-car"><rect x="0" y="226" width="58" height="18" rx="2" fill="#c0392b"/><rect x="58" y="230" width="18" height="14" rx="2" fill="#333"/><circle cx="12" cy="246" r="4" fill="#111"/><circle cx="64" cy="246" r="4" fill="#111"/></g>' +
      txt("PORT NEWARK", 82, 30, 13, CREAM, 'letter-spacing="3"'),
      sky("ap", "#2a1b3d", "#e0805a"));
  }

  /* 3. Hahne & Co. on Broad St: the ornate limestone front, tall arched windows, the skylit court glowing through */
  function hahne() {
    let arches = "";
    for (let i = 0; i < 6; i++) {
      const x = 46 + i * 54;
      arches += '<path d="M' + x + ' 196v-44a20 20 0 0 1 40 0v44z" fill="#2a2016"/><path class="af-glow" d="M' + (x + 4) + ' 196v-42a16 16 0 0 1 32 0v42z" fill="#f6d58a" opacity=".7"/>' +
        '<path d="M' + (x + 20) + ' 134v62M' + (x + 4) + ' 168h32" stroke="#6d5a3a" stroke-width="2"/>';
    }
    let upper = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) upper += '<rect class="af-bl af-bl' + ((r + i) % 3 + 1) + '" x="' + (52 + i * 54) + '" y="' + (58 + r * 18) + '" width="28" height="12" fill="#ffe2a0" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ah)"/>' + stars(14) +
      /* skylight peeking over the roofline */
      '<path class="af-glow" d="M150 46l50-22l50 22z" fill="#cfe9ff" opacity=".8"/><path d="M150 46l50-22l50 22" stroke="#7a8a99" stroke-width="2" fill="none"/>' +
      '<path d="M175 46l25-11l25 11M200 24v22" stroke="#7a8a99" stroke-width="1.2"/>' +
      /* limestone facade */
      '<rect x="30" y="46" width="340" height="164" fill="#e3d6bb"/>' +
      '<rect x="24" y="40" width="352" height="10" fill="#cbbb98"/>' + (() => { let d = ""; for (let x = 28; x < 372; x += 12) d += '<rect x="' + x + '" y="50" width="6" height="5" fill="#b9a883"/>'; return d; })() +
      upper +
      '<rect x="30" y="122" width="340" height="6" fill="#cbbb98"/>' + arches +
      [30, 360].map(x => '<rect x="' + x + '" y="46" width="10" height="164" fill="#d2c3a3"/>').join("") +
      txt("BROAD ST", 200, 117, 11, "#6d5a3a", 'letter-spacing="6"') +
      /* sidewalk + street */
      '<rect x="0" y="210" width="400" height="10" fill="#9a958c"/><rect x="0" y="220" width="400" height="40" fill="#3e3d3b"/>' +
      '<path d="M0 240h400" stroke="#e8e2d0" stroke-dasharray="16 12" stroke-width="2"/>' +
      '<g class="af-car"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="241" r="4" fill="#111"/><circle cx="36" cy="241" r="4" fill="#111"/></g>' +
      '<g class="af-car af-car2"><rect x="0" y="244" width="46" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="258" r="3.5" fill="#111"/><circle cx="36" cy="258" r="3.5" fill="#111"/></g>' +
      person(70, 184, "#1d1d1d") + person(336, 186, "#262626"),
      sky("ah", "#0d1430", "#3a3a6a"));
  }

  /* 4. The old Bamberger's building on Market St, where Newark radio went on the air in 1922: brick and terra cotta, the twin masts on the roof, waves going out */
  function radio() {
    let win = "";
    for (let r = 0; r < 9; r++) for (let i = 0; i < 7; i++) win += '<rect class="af-bl af-bl' + ((r * 2 + i) % 3 + 1) + '" x="' + (96 + i * 30) + '" y="' + (78 + r * 15) + '" width="16" height="9" fill="#ffd98a" opacity=".7"/>';
    const wave = (cls) => '<path class="af-wave ' + cls + '" d="M0 0a26 26 0 0 1 52 0" stroke="' + TEAL + '" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ar)"/>' + stars(20) +
      /* masts with the antenna wire */
      '<path d="M120 66V14M300 66V14" stroke="#c9ced6" stroke-width="3"/><path d="M120 18L300 18" stroke="#c9ced6" stroke-width="1.5"/>' +
      '<path d="M120 26l-12 40M120 26l12 40M300 26l-12 40M300 26l12 40" stroke="#9aa3ad" stroke-width="1"/>' +
      '<circle class="af-flk" cx="120" cy="12" r="3" fill="#ff4d4d"/><circle class="af-flk" cx="300" cy="12" r="3" fill="#ff4d4d"/>' +
      '<g transform="translate(184 30)">' + wave("") + wave("af-wave2") + wave("af-wave3") + '</g>' +
      /* building */
      '<rect x="80" y="66" width="240" height="160" fill="#9c4a32"/>' +
      '<rect x="74" y="60" width="252" height="10" fill="#e7d8b8"/><rect x="80" y="70" width="240" height="4" fill="#e7d8b8"/>' +
      win +
      '<rect x="80" y="214" width="240" height="12" fill="#e7d8b8"/>' +
      /* lit "on air" box over the door, no names */
      '<rect x="176" y="190" width="48" height="16" rx="3" fill="#2a0f0f" stroke="#ff5a5a" stroke-width="1.5"/>' + txt("ON AIR", 200, 202, 10, "#ff6b6b", 'class="af-flk"') +
      /* neighbors */
      '<rect x="0" y="110" width="80" height="116" fill="#3e3a48"/><rect x="320" y="96" width="80" height="130" fill="#46404f"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="af-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      txt("MARKET ST", 200, 256, 9, CREAM, 'letter-spacing="4"') +
      txt("NEWARK RADIO STARTED HERE", 58, 30, 9, CREAM, 'opacity=".8"'),
      sky("ar", "#0a0c1a", "#30284a"));
  }

  /* 5. Broad St & William St: the wall tagged ARTIFACTS, green signs, Old First Church's steeple up the block */
  function corner() {
    const steeple = '<g>' +
      '<rect x="200" y="96" width="70" height="60" fill="#7a4a3a"/><path d="M196 96l39-22l39 22z" fill="#6a3e30"/>' +
      '<rect x="222" y="44" width="26" height="40" fill="#e9e4da"/><rect x="226" y="30" width="18" height="16" fill="#e9e4da"/>' +
      '<path d="M226 30l9-26l9 26z" fill="#e9e4da"/><circle cx="235" cy="60" r="7" fill="#2c2a44" stroke="#bfb8a8"/>' +
      '<path d="M235 60v-5M235 60h4" stroke="#e9e4da" stroke-width="1.5"/>' +
      '<rect x="214" y="110" width="12" height="22" rx="6" fill="#f6d58a" class="af-glow"/><rect x="244" y="110" width="12" height="22" rx="6" fill="#f6d58a" class="af-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ac)"/>' + stars(18) +
      '<rect x="0" y="80" width="90" height="80" fill="#2f2c3a"/><rect x="100" y="60" width="80" height="100" fill="#3a3646"/><rect x="290" y="70" width="110" height="90" fill="#33303f"/>' +
      steeple + txt("OLD FIRST CHURCH", 235, 172, 8, CREAM, 'letter-spacing="2" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#4a4c55"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 11) b += '<path d="M0 ' + y + 'h400" stroke="#3e4049" stroke-width="1"/>'; return b; })() +
      tag("ARTIFACTS", 12, 196, 46, ORANGE, -5) + tag("NEW JERUZ", 196, 220, 19, TEAL, -4) + tag("TAME &amp; EL", 22, 222, 15, GOLD, -3) +
      /* spray mist */
      '<g transform="translate(268 168)"><rect x="0" y="0" width="12" height="26" rx="3" fill="' + TEAL + '" stroke="#111"/><rect x="3" y="-6" width="6" height="6" fill="#ddd" stroke="#111"/>' +
      '<circle class="af-mist" cx="10" cy="-8" r="4" fill="' + TEAL + '" opacity=".6"/><circle class="af-mist af-mist2" cx="12" cy="-10" r="3" fill="' + TEAL + '" opacity=".6"/><circle class="af-mist af-mist3" cx="14" cy="-7" r="3.5" fill="' + TEAL + '" opacity=".6"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="af-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="358" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Broad St", 349, 82, 12, "#fff") +
      '<rect x="300" y="92" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("William St", 349, 108, 12, "#fff") +
      '<circle class="af-flk" cx="360" cy="60" r="4" fill="#fff6c2"/>',
      sky("ac", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { norfolk: norfolk, port: port, hahne: hahne, radio: radio, corner: corner };
})();
