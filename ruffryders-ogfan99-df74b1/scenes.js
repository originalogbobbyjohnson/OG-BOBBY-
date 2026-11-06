/* Ruff Ryders game (OG FAN 99 GROUP, Westchester: downtown / southwest Yonkers). The Dean family's crew: DMX, The LOX, Eve, Drag-On, Swizz Beatz and the rest.
   1. A Bee-Line bus pulling up at S Broadway & Prospect St, downtown Yonkers, a block from the label's home base.
   2. Powerhouse Studios at 33 S Broadway, the Ruff Ryders headquarters and studio: the board, the meters, the keyboard, gold plaques (blank, no logos).
   3. The bike crew rolling out down S Broadway at night: street bikes in formation, headlights, a wheelie up front.
   4. West Philly, where Eve came up ("Philly streets, they raisin' her right"): porch-front rowhouses, awnings, a pitbull on the step.
   5. Riverdale Av & Prospect St: green signs, the wall tagged RUFF RYDERS, the Schlobohm Houses (where it all started) behind.
   400 x 260 SVGs, classes prefixed rr-. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rrcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.rr-car{animation:rrcar 7s linear infinite}.rr-car2{animation-delay:-3.5s}' +
    '@keyframes rrblink{0%,100%{opacity:.25}50%{opacity:1}}.rr-bl{animation:rrblink 1.7s ease-in-out infinite}.rr-bl2{animation-delay:.55s}.rr-bl3{animation-delay:1.1s}' +
    '@keyframes rrflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.rr-flk{animation:rrflick 2.6s infinite}' +
    '@keyframes rrmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.rr-mt{transform-box:fill-box;transform-origin:50% 100%;animation:rrmeter .6s ease-in-out infinite}.rr-mt2{animation-delay:.2s}.rr-mt3{animation-delay:.4s}' +
    '@keyframes rrride{from{transform:translateX(-160px)}to{transform:translateX(520px)}}.rr-ride{animation:rrride 5s linear infinite}.rr-ride2{animation-delay:-1.7s}.rr-ride3{animation-delay:-3.4s}' +
    '@keyframes rrwheelie{0%,100%{transform:rotate(0)}50%{transform:rotate(-16deg)}}.rr-wh{transform-box:fill-box;transform-origin:20% 100%;animation:rrwheelie 1.6s ease-in-out infinite}' +
    '@keyframes rrbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.rr-bob{animation:rrbob .7s ease-in-out infinite}.rr-bob2{animation-delay:.35s}' +
    '@keyframes rrwag{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(25deg)}}.rr-wag{transform-box:fill-box;transform-origin:0% 100%;animation:rrwag .5s ease-in-out infinite}' +
    '@keyframes rrsmoke{0%{opacity:.6;transform:translate(0,0) scale(.6)}100%{opacity:0;transform:translate(-30px,-10px) scale(1.6)}}.rr-smk{transform-box:fill-box;transform-origin:50% 50%;animation:rrsmoke 1.2s ease-out infinite}.rr-smk2{animation-delay:.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 31) % 400) + '" cy="' + (6 + (i * 53) % 54) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const RED = "#e8112d", GOLD = "#c9a24a", CREAM = "#f4ead8", SIGN = "#0f6b3a", BEE = "#1d4f9c";
  /* a street bike, side view, rider in a helmet (no face) */
  const bike = (x, y, col) => '<g>' +
    '<circle cx="' + (x + 8) + '" cy="' + y + '" r="9" fill="#111" stroke="#666" stroke-width="2"/><circle cx="' + (x + 48) + '" cy="' + y + '" r="9" fill="#111" stroke="#666" stroke-width="2"/>' +
    '<path d="M' + (x + 8) + ' ' + y + 'l14 -14h22l8 -6l-4 20z" fill="' + col + '"/><path d="M' + (x + 20) + ' ' + (y - 14) + 'l-8 -4h16z" fill="#222"/>' +
    '<circle cx="' + (x + 58) + '" cy="' + (y - 10) + '" r="3" fill="#fff6c2"/>' +
    '<path d="M' + (x + 26) + ' ' + (y - 16) + 'l6 -14l10 4l-4 10z" fill="#141414"/><circle cx="' + (x + 38) + '" cy="' + (y - 32) + '" r="7" fill="' + col + '"/><path d="M' + (x + 38) + ' ' + (y - 34) + 'h7v5h-7z" fill="#222"/>' +
    '</g>';

  /* 1. S Broadway & Prospect St: brick and limestone downtown blocks on the hill, the bus-stop sign, the Bee-Line rolling in */
  function rrbus() {
    const bldg = (x, w, h, c) => { let g = '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="5" fill="#2a1a14"/>';
      for (let yy = 178 - h; yy < 152; yy += 16) for (let xx = x + 6; xx < x + w - 10; xx += 15) g += '<rect class="rr-bl rr-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="8" height="10" fill="#ffd98a" opacity=".7"/>'; return g; };
    let win = ""; for (let x = 34; x < 238; x += 30) win += '<rect x="' + x + '" y="134" width="22" height="22" rx="2" fill="#bcd8f0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rr1)"/>' + stars(12) +
      bldg(0, 70, 110, "#8e7d68") + bldg(74, 64, 84, "#7a3b2a") + bldg(142, 80, 120, "#9a8a72") + bldg(226, 64, 92, "#6d3426") + bldg(294, 106, 104, "#84705a") +
      '<rect x="0" y="170" width="400" height="16" fill="#7d7f84"/><rect x="0" y="170" width="400" height="3" fill="#a3a5aa"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3a3c40"/>' +
      '<path d="M0 224h400" stroke="#e8c84a" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<g class="anim-train">' +
        '<rect x="14" y="120" width="250" height="68" rx="8" fill="#f3f3f0" stroke="#8a8f99" stroke-width="2"/>' + win +
        '<rect x="14" y="164" width="250" height="7" fill="' + BEE + '"/><rect x="14" y="171" width="250" height="4" fill="#3fae49"/>' +
        '<rect x="244" y="126" width="18" height="44" rx="3" fill="#1d232b"/>' +
        '<rect x="190" y="124" width="68" height="10" rx="2" fill="#101418"/><text x="224" y="132" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb02e">S BROADWAY</text>' +
        '<circle cx="60" cy="190" r="11" fill="#151515"/><circle cx="60" cy="190" r="4" fill="#888"/><circle cx="214" cy="190" r="11" fill="#151515"/><circle cx="214" cy="190" r="4" fill="#888"/>' +
        '<circle cx="262" cy="178" r="3.5" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="318" y="76" width="5" height="112" fill="#5a5f66"/>' +
      '<rect x="278" y="40" width="118" height="46" rx="4" fill="#111"/><rect x="278" y="40" width="118" height="3" fill="#fff"/>' +
      '<text x="286" y="58" ' + font + ' font-size="10.5" fill="#fff">S Broadway &amp;</text><text x="286" y="73" ' + font + ' font-size="10.5" fill="#fff">Prospect St</text>' +
      '<rect x="362" y="49" width="28" height="18" rx="9" fill="' + BEE + '"/><text x="376" y="62" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BUS</text>' +
      person(350, 158, "#1b1b1b") + person(372, 162, "#2a2a2a") +
      txt("DOWNTOWN YONKERS · BEE-LINE BUS", 150, 248, 11, CREAM, 'letter-spacing="2"'),
      sky("rr1", "#0c1430", "#5a2a3a"));
  }

  /* 2. Powerhouse Studios, 33 S Broadway: the control room, the console with meters, the glass booth with the mic, a keyboard, blank gold plaques */
  function rrstudio() {
    let meters = ""; for (let i = 0; i < 14; i++) meters += '<rect class="rr-mt rr-mt' + (i % 3 + 1) + '" x="' + (60 + i * 20) + '" y="152" width="10" height="30" fill="' + (i % 4 ? "#3fdc6a" : RED) + '"/>';
    let knobs = ""; for (let r = 0; r < 3; r++) for (let i = 0; i < 14; i++) knobs += '<circle cx="' + (65 + i * 20) + '" cy="' + (196 + r * 12) + '" r="3" fill="' + (r === 1 ? GOLD : "#bbb") + '"/>';
    const plaque = x => '<rect x="' + x + '" y="22" width="40" height="52" rx="2" fill="#2a1d14" stroke="' + GOLD + '" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="44" r="14" fill="' + GOLD + '"/><circle cx="' + (x + 20) + '" cy="44" r="4" fill="#2a1d14"/><rect x="' + (x + 8) + '" y="62" width="24" height="5" fill="#d8c08a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#2a2024"/>' +
      plaque(14) + plaque(62) + plaque(298) + plaque(346) +
      /* the booth window */
      '<rect x="116" y="18" width="168" height="98" rx="4" fill="#0e1a24" stroke="#555" stroke-width="4"/>' +
      '<rect x="120" y="22" width="160" height="90" fill="#123048" opacity=".7"/>' +
      '<path d="M200 46v40" stroke="#999" stroke-width="2"/><rect x="193" y="34" width="14" height="20" rx="7" fill="#c9ced6"/><circle cx="200" cy="46" r="13" fill="none" stroke="#333" stroke-width="2"/>' +
      '<path d="M178 104h44" stroke="#666" stroke-width="3"/>' +
      txt("POWERHOUSE", 200, 14, 10, GOLD, 'letter-spacing="4"') +
      /* the console */
      '<path d="M30 140h340l20 120H10z" fill="#2d2d34"/>' + '<rect x="50" y="146" width="300" height="42" rx="3" fill="#121216"/>' + meters + knobs +
      /* keyboard on the side */
      '<g transform="translate(290 116)"><rect width="104" height="22" rx="3" fill="#111"/>' + (() => { let k = ""; for (let i = 0; i < 12; i++) k += '<rect x="' + (4 + i * 8) + '" y="5" width="7" height="14" fill="#f4f4f4"/>'; for (let i of [0, 1, 3, 4, 5, 7, 8, 10]) k += '<rect x="' + (9 + i * 8) + '" y="5" width="4" height="8" fill="#111"/>'; return k; })() + '</g>' +
      '<rect class="rr-flk" x="14" y="122" width="10" height="10" rx="5" fill="' + RED + '"/>' + txt("ON AIR", 50, 131, 9, RED) +
      txt("33 S BROADWAY · YONKERS", 200, 252, 11, CREAM, 'letter-spacing="2"'));
  }

  /* 3. The roll-out down S Broadway at night: street bikes in a pack, headlights, one bike up on a wheelie */
  function rrrollout() {
    const bldg = (x, w, h) => { let g = '<rect x="' + x + '" y="' + (176 - h) + '" width="' + w + '" height="' + h + '" fill="#2a2430"/>';
      for (let yy = 184 - h; yy < 168; yy += 14) for (let xx = x + 5; xx < x + w - 8; xx += 12) g += '<rect class="rr-bl rr-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="8" fill="#ffd98a" opacity=".55"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#rr3)"/>' + stars(18) +
      bldg(0, 80, 100) + bldg(84, 60, 70) + bldg(148, 90, 120) + bldg(242, 70, 86) + bldg(316, 84, 110) +
      [40, 160, 280].map(x => '<rect x="' + x + '" y="120" width="4" height="60" fill="#444"/><circle class="rr-flk" cx="' + (x + 2) + '" cy="118" r="6" fill="#fff2b0"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#26262b"/><path d="M0 214h400" stroke="#e8c84a" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<path d="M0 176h400" stroke="#55575c" stroke-width="4"/>' +
      '<g class="rr-ride">' + bike(0, 206, RED) + '<circle class="rr-smk" cx="-6" cy="200" r="6" fill="#888"/></g>' +
      '<g class="rr-ride rr-ride2"><g class="rr-wh">' + bike(0, 240, "#c9ced6") + '</g><circle class="rr-smk rr-smk2" cx="-6" cy="234" r="6" fill="#888"/></g>' +
      '<g class="rr-ride rr-ride3">' + bike(0, 222, "#151515") + '</g>' +
      txt("ROLL OUT · S BROADWAY", 200, 30, 13, RED, 'letter-spacing="3"'),
      sky("rr3", "#05050a", "#2a1220"));
  }

  /* 4. West Philly: porch-front rowhouses with awnings and stoops, a pitbull wagging on the step, kids on the block (Eve's Philly) */
  function rrphilly() {
    const row = (x, c, aw) => '<rect x="' + x + '" y="70" width="78" height="120" fill="' + c + '"/><rect x="' + x + '" y="64" width="78" height="8" fill="#3a2a22"/>' +
      '<rect x="' + (x + 10) + '" y="82" width="22" height="26" fill="#cfe2f5"/><rect x="' + (x + 46) + '" y="82" width="22" height="26" fill="#cfe2f5"/>' +
      '<path d="M' + (x + 4) + ' 132h70l-6 14H' + (x + 10) + 'z" fill="' + aw + '"/>' + (() => { let s = ""; for (let i = 0; i < 6; i++) s += '<path d="M' + (x + 10 + i * 11) + ' 132v14" stroke="#fff" stroke-width="3" opacity=".7"/>'; return s; })() +
      '<rect x="' + (x + 10) + '" y="150" width="58" height="40" fill="#6b5a4a"/><rect x="' + (x + 30) + '" y="152" width="18" height="38" fill="#2a1d14"/>' +
      '<rect x="' + (x + 4) + '" y="146" width="70" height="4" fill="#ddd"/>' + [0, 1, 2].map(k => '<rect x="' + (x + 24 - k * 0) + '" y="' + (190 + k * 6) + '" width="30" height="6" fill="#9a958c"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rr4)"/>' +
      row(0, "#8a3f2c", "#2f6e5a") + row(80, "#9b4a32", RED) + row(160, "#7c3828", "#2b5a9a") + row(240, "#a05236", GOLD) + row(320, "#874030", "#2f6e5a") +
      '<rect x="0" y="208" width="400" height="20" fill="#9a9a9a"/><rect x="0" y="228" width="400" height="32" fill="#3a3c40"/>' +
      /* pitbull on the step */
      '<g><ellipse cx="200" cy="198" rx="16" ry="8" fill="#6e6a66"/><circle cx="216" cy="190" r="7" fill="#6e6a66"/><path d="M212 184l3 -6l4 5z" fill="#5a5652"/>' +
      '<rect x="188" y="202" width="4" height="8" fill="#6e6a66"/><rect x="206" y="202" width="4" height="8" fill="#6e6a66"/><path class="rr-wag" d="M184 196l-10 -8" stroke="#6e6a66" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="210" y="194" width="10" height="3" fill="' + RED + '"/></g>' +
      person(60, 200, "#1b1b1b", "rr-bob") + person(330, 200, "#222", "rr-bob rr-bob2") +
      '<g class="rr-car"><rect x="0" y="236" width="46" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>' +
      txt("WEST PHILLY", 200, 40, 18, CREAM, 'letter-spacing="5"') + txt("WHERE EVE CAME UP", 200, 56, 9, GOLD, 'letter-spacing="3"'),
      sky("rr4", "#7fb6e0", "#f2d6a8"));
  }

  /* 5. Riverdale Av & Prospect St: green signs, the wall tagged RUFF RYDERS, the Schlobohm Houses behind */
  function rrcorner() {
    const block = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#8a4532"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#5f2a1d"/>';
      for (let yy = y + 10; yy < 140; yy += 14) for (let xx = x + 7; xx < x + w - 8; xx += 14) g += '<rect class="rr-bl rr-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="7" height="8" fill="#ffd98a" opacity=".7"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#rr5)"/>' + stars(16) +
      block(10, 70, 90) + block(110, 56, 80) + block(200, 74, 96) + block(306, 62, 60) +
      txt("SCHLOBOHM HOUSES", 160, 44, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("RUFF RYDERS", 10, 196, 44, RED, -5) + tag("DOUBLE R", 26, 222, 18, CREAM, -3) + tag("RYDE OR DIE", 170, 222, 18, GOLD, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="rr-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#151515"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Riverdale Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("Prospect St", 346, 108, 12, "#fff") +
      '<circle class="rr-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("rr5", "#0a0c1a", "#3a1a2a"));
  }

  window.SCENES = { rrbus: rrbus, rrstudio: rrstudio, rrrollout: rrrollout, rrphilly: rrphilly, rrcorner: rrcorner };
})();
