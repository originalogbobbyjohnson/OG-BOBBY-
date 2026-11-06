/* Biz Markie game (Long Island map, Patchogue). The LIRR Montauk Branch pulling into Patchogue (at grade, one side platform, diesel push-pull),
   the Patchogue Theatre on East Main St (1923, neoclassical, canopy marquee), the Rooftop roller rink up in Harlem (155th St, where he was born and
   where he and Kane were headed on the D train in Pickin' Boogers), Longwood High School in Middle Island (class of '82), and South St & West Av,
   dedicated Biz Markie Way in 2021, with the theatre's blade sign glowing over the village behind. 400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase .9s linear infinite}.ch2{animation-delay:-.3s}.ch3{animation-delay:-.6s}' +
    '@keyframes drive{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:drive 7s linear infinite}.car2{animation-delay:-3.6s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 6s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sw{transform-box:fill-box;transform-origin:50% 0%;animation:sweep 3.2s ease-in-out infinite}.sw2{animation-delay:-1.6s}' +
    '@keyframes skate{from{transform:translateX(-60px)}to{transform:translateX(440px)}}.sk{animation:skate 5.5s linear infinite}.sk2{animation-delay:-2.7s}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.flag{transform-box:fill-box;transform-origin:0% 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes glide{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.gull{animation:glide 13s linear infinite}.gull2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const SIGN = "#0f6b3a", GOLD = "#f5c518", CREAM = "#f4ead8", MONTAUK = "#00b2a9", RED = "#d7263d";
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const gull = (x, y, cls) => '<path class="gull ' + (cls || "") + '" d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/>';

  /* 1. Patchogue, LIRR Montauk Branch: at grade, one long side platform with a canopy, the little station house, a diesel push-pull rolling in past the pines */
  function train() {
    let pines = "";
    for (let x = -10; x < 410; x += 22) pines += '<path d="M' + x + ' ' + (118 - (x * 7) % 14) + 'l12 34h-24z" fill="#1d3527"/>';
    let win = "";
    for (let x = 96; x < 300; x += 26) win += '<rect x="' + x + '" y="134" width="18" height="10" rx="2" fill="#cfe6ff" opacity=".85"/><rect x="' + x + '" y="152" width="18" height="10" rx="2" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t1)"/>' + stars(12) +
      '<circle cx="342" cy="30" r="12" fill="#fff1d6" opacity=".9"/>' + pines +
      /* station house: low brick building with a hip roof, across the tracks */
      '<rect x="292" y="96" width="92" height="40" fill="#8a4a34"/><path d="M284 98l54-22l54 22z" fill="#3c4a44"/>' +
      '<rect x="304" y="108" width="14" height="16" fill="#ffe7a8" class="flk"/><rect x="330" y="108" width="14" height="16" fill="#ffe7a8"/><rect x="356" y="108" width="14" height="16" fill="#3a3550"/>' +
      /* canopy over the platform (front) */
      '<rect x="0" y="50" width="400" height="8" fill="#56606c"/><rect x="0" y="58" width="400" height="4" fill="#2b3440"/>' +
      '<rect x="40" y="62" width="5" height="128" fill="#2b3440"/><rect x="200" y="62" width="5" height="128" fill="#2b3440"/><rect x="360" y="62" width="5" height="128" fill="#2b3440"/>' +
      '<circle class="flk" cx="120" cy="66" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="280" cy="66" r="3" fill="#ffe7a8"/>' +
      /* black station sign with the Montauk Branch color */
      '<rect x="92" y="68" width="216" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="91" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Patchogue</text>' +
      '<rect x="146" y="96" width="108" height="9" rx="4.5" fill="' + MONTAUK + '"/><text x="200" y="103.2" text-anchor="middle" ' + font + ' font-size="7" fill="#fff" letter-spacing="1">MONTAUK BRANCH</text>' +
      /* rails */
      '<rect x="0" y="184" width="400" height="6" fill="#5b4a3a"/><rect x="0" y="182" width="400" height="2" fill="#a8acb0"/>' +
      /* diesel push-pull: locomotive + bi-level coach */
      '<g class="anim-train">' +
        '<rect x="84" y="124" width="236" height="56" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="84" y="146" width="236" height="3" fill="#1d3f8f"/><rect x="84" y="168" width="236" height="3" fill="#1d3f8f"/>' +
        '<rect x="0" y="130" width="82" height="50" rx="3" fill="#b8bec6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="0" y="130" width="82" height="7" fill="#7d858f"/><rect x="62" y="140" width="16" height="14" rx="2" fill="#2b3440"/>' +
        '<rect x="0" y="160" width="82" height="5" fill="#1d3f8f"/><rect x="0" y="165" width="82" height="3" fill="' + GOLD + '"/>' +
        '<circle cx="74" cy="172" r="3.5" fill="#fff6c2"/>' +
        '<circle cx="20" cy="182" r="6" fill="#222"/><circle cx="60" cy="182" r="6" fill="#222"/><circle cx="110" cy="182" r="6" fill="#222"/><circle cx="296" cy="182" r="6" fill="#222"/>' +
      '</g>' +
      /* platform edge (front) */
      '<rect x="0" y="190" width="400" height="70" fill="#7b7f84"/><rect x="0" y="190" width="400" height="6" fill="' + GOLD + '"/>' +
      '<rect x="0" y="196" width="400" height="3" fill="#2b2b2b" opacity=".4"/>',
      sky("t1", "#0d1530", "#3a4a6a"));
  }

  /* 2. The Patchogue Theatre, 71 East Main St: cream neoclassical front, pilasters, arched windows, the tall vertical blade sign and the high canopy marquee chasing */
  function theatre() {
    let bulbs = "";
    for (let x = 112; x <= 288; x += 8) bulbs += '<circle class="ch ' + (x % 24 === 0 ? "" : x % 24 === 8 ? "ch2" : "ch3") + '" cx="' + x + '" cy="146" r="2" fill="#fff4b0"/><circle class="ch ' + (x % 24 === 0 ? "ch3" : x % 24 === 8 ? "" : "ch2") + '" cx="' + x + '" cy="176" r="2" fill="#fff4b0"/>';
    let vbulbs = "";
    for (let y = 30; y <= 128; y += 7) vbulbs += '<circle class="ch ' + (y % 21 === 2 ? "ch2" : y % 21 === 9 ? "ch3" : "") + '" cx="324" cy="' + y + '" r="1.6" fill="#fff4b0"/><circle class="ch ' + (y % 21 === 2 ? "" : y % 21 === 9 ? "ch2" : "ch3") + '" cx="352" cy="' + y + '" r="1.6" fill="#fff4b0"/>';
    const letters = "PATCHOGUE".split("").map((c, i) => '<text x="338" y="' + (40 + i * 10.6) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '">' + c + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#t2)"/>' + stars(10) +
      /* neighbouring storefront buildings */
      '<rect x="0" y="80" width="80" height="150" fill="#6b4434"/><rect x="0" y="76" width="80" height="6" fill="#a88a6a"/>' +
      '<rect x="10" y="96" width="22" height="28" fill="#ffe7a8" opacity=".7"/><rect x="46" y="96" width="22" height="28" fill="#3a3550"/>' +
      '<rect x="370" y="90" width="30" height="140" fill="#5a3b30"/>' +
      /* theatre front: cream terracotta, pilasters, cornice */
      '<rect x="88" y="44" width="224" height="186" fill="#e9dcc0"/><rect x="82" y="36" width="236" height="10" fill="#d4c39f"/><rect x="88" y="46" width="224" height="4" fill="#c9b48a"/>' +
      [96, 150, 242, 296].map(x => '<rect x="' + x + '" y="50" width="10" height="80" fill="#d9c8a4"/>').join("") +
      [118, 172, 214, 262].map(x => '<path d="M' + x + ' 120v-46a12 12 0 0 1 24 0v46z" fill="#2a2e46"/><path d="M' + x + ' 120v-46a12 12 0 0 1 24 0" fill="none" stroke="#b49a6c" stroke-width="2"/>').join("") +
      /* vertical blade sign */
      '<rect x="320" y="24" width="36" height="112" rx="3" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + vbulbs + letters +
      '<rect x="312" y="60" width="8" height="4" fill="#555"/><rect x="312" y="100" width="8" height="4" fill="#555"/>' +
      /* canopy marquee */
      '<path d="M100 140h200l10 8v26l-10 8H100l-10-8v-26z" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="112" y="151" width="176" height="20" fill="#fff8e6"/>' +
      '<text x="200" y="165.5" text-anchor="middle" ' + font + ' font-size="11" fill="#111" letter-spacing="1">THE BIZ NEVER SLEEPS</text>' +
      /* doors and box office */
      '<rect x="120" y="190" width="160" height="40" fill="#3a2a22"/>' + [126, 168, 210, 252].map(x => '<rect x="' + x + '" y="194" width="22" height="36" fill="#ffd98a" opacity=".8"/>').join("") +
      /* sidewalk and Main St */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="242" width="46" height="12" rx="4" fill="#2b6cb0"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="36" cy="254" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="242" width="40" height="12" rx="4" fill="' + RED + '"/><circle cx="9" cy="254" r="4" fill="#111"/><circle cx="31" cy="254" r="4" fill="#111"/></g>',
      sky("t2", "#120d26", "#3b2f5a"));
  }

  /* 3. The Rooftop roller rink, 155th St in Harlem: the maple floor, the rail, the mirror ball throwing spots, skates gliding past (no people drawn) */
  function rooftop() {
    let boards = "";
    for (let y = 150; y < 260; y += 10) boards += '<path d="M0 ' + y + 'h400" stroke="#a9733f" stroke-width="1"/>';
    let rail = "";
    for (let x = 0; x <= 400; x += 25) rail += '<rect x="' + x + '" y="118" width="4" height="32" fill="#c9ced6"/>';
    const skate = (cls, col) => '<g class="sk ' + cls + '"><path d="M0 220h30q6 0 6 6v4H0z" fill="' + col + '"/><path d="M4 220v-14h14q4 0 4 4v10" fill="' + col + '"/><circle cx="6" cy="234" r="4" fill="#ffd23f"/><circle cx="28" cy="234" r="4" fill="#ffd23f"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120b22"/>' +
      /* light beams */
      '<path class="sw" d="M110 22l-60 128h60z" fill="#ff4fa3" opacity=".22"/><path class="sw sw2" d="M290 22l60 128h-60z" fill="#3fa7d6" opacity=".22"/>' +
      /* banner */
      '<rect x="110" y="44" width="180" height="30" rx="3" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="65" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="3">THE ROOFTOP</text>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e0ff" letter-spacing="2">155TH ST · HARLEM · SKATE NIGHT</text>' +
      /* mirror ball */
      '<path d="M200 0v14" stroke="#aaa" stroke-width="1.5"/><g class="spin"><circle cx="200" cy="26" r="13" fill="#c9ced6"/>' +
      '<path d="M187 26h26M200 13v26M190 18h20M190 34h20M193 14v24M207 14v24" stroke="#7d858f" stroke-width="1"/></g>' +
      /* spots on the wall */
      [[40, 100, "#ff4fa3"], [80, 70, "#ffd23f"], [330, 96, "#6cbe45"], [360, 60, "#3fa7d6"], [150, 104, "#ffd23f"], [258, 100, "#ff4fa3"]].map((d, i) => '<circle class="ch ' + (i % 3 ? i % 3 === 1 ? "ch2" : "ch3" : "") + '" cx="' + d[0] + '" cy="' + d[1] + '" r="4" fill="' + d[2] + '"/>').join("") +
      /* rail */
      '<rect x="0" y="114" width="400" height="6" fill="#e6e8ec"/>' + rail +
      /* floor */
      '<rect x="0" y="150" width="400" height="110" fill="#c98c4e"/>' + boards +
      '<ellipse cx="200" cy="200" rx="150" ry="30" fill="none" stroke="#e8b46c" stroke-width="2" opacity=".6"/>' +
      skate("", "#f4f4f4") + skate("sk2", "#d7263d"),
      "");
  }

  /* 4. Longwood High School, Middle Island: the long low brick campus, the flagpole, the class banner, a yellow school bus pulling out */
  function longwood() {
    let win = "";
    for (let x = 44; x < 360; x += 28) win += '<rect x="' + x + '" y="134" width="18" height="20" fill="#9fc6e8" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#t4)"/>' +
      '<circle cx="62" cy="44" r="18" fill="#ffe08a" opacity=".85"/>' + gull(240, 40) + gull(300, 56, "gull2") +
      /* trees behind */
      [20, 70, 330, 380].map(x => '<circle cx="' + x + '" cy="112" r="24" fill="#2e5a3a"/>').join("") +
      /* main building */
      '<rect x="30" y="118" width="340" height="62" fill="#9c4f36"/><rect x="26" y="112" width="348" height="8" fill="#d8ccb0"/>' + win +
      /* entrance block */
      '<rect x="134" y="96" width="132" height="84" fill="#8a4430"/><rect x="130" y="90" width="140" height="8" fill="#d8ccb0"/>' +
      '<rect x="140" y="104" width="120" height="16" fill="#e9dfc8"/><text x="200" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="#1d3f8f" letter-spacing="1">LONGWOOD H.S.</text>' +
      '<rect x="178" y="146" width="44" height="34" fill="#cfe6ff" opacity=".85"/><path d="M200 146v34" stroke="#555" stroke-width="2"/>' +
      /* banner */
      '<rect x="264" y="98" width="96" height="16" fill="' + GOLD + '"/><text x="312" y="110" text-anchor="middle" ' + font + ' font-size="9" fill="#1d3f8f">CLASS OF \'82</text>' +
      /* flagpole */
      '<rect x="110" y="40" width="3" height="140" fill="#c9ced6"/><g class="flag"><rect x="113" y="42" width="34" height="20" fill="#1d3f8f"/><rect x="113" y="50" width="34" height="4" fill="' + GOLD + '"/></g>' +
      /* lawn, road, bus */
      '<rect x="0" y="180" width="400" height="34" fill="#4f8a3a"/><rect x="0" y="214" width="400" height="46" fill="#55575c"/><rect x="0" y="236" width="400" height="2" fill="#f4ead8" opacity=".6"/>' +
      '<g class="car"><rect x="0" y="214" width="84" height="30" rx="4" fill="#f2b705"/><rect x="6" y="219" width="70" height="9" fill="#2b3440"/>' +
      '<rect x="0" y="232" width="84" height="2" fill="#111"/><circle cx="16" cy="246" r="6" fill="#111"/><circle cx="66" cy="246" r="6" fill="#111"/><circle cx="82" cy="238" r="2" fill="#fff6c2"/></g>',
      sky("t4", "#6fb2e6", "#d9eefb"));
  }

  /* 5. South St and West Av, Patchogue: green signs plus the Biz Markie Way co-name sign, the tag wall, the theatre's blade sign glowing over the roofs */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#t5)"/>' + stars(16) +
      /* village roofline and the theatre's vertical sign behind */
      '<rect x="0" y="110" width="400" height="60" fill="#241c30"/>' +
      '<path d="M0 110l30-18 30 18zM60 110h50v-12h-50zM230 110l26-16 26 16zM340 110h60v-20h-60z" fill="#241c30"/>' +
      '<rect x="168" y="40" width="22" height="72" rx="2" fill="#1a1a2a" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<g class="flk">' + "PATCHOGUE".split("").map((c, i) => '<text x="179" y="' + (51 + i * 7.2) + '" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + RED + '">' + c + '</text>').join("") + '</g>' +
      [20, 76, 250, 352].map(x => '<rect x="' + x + '" y="124" width="10" height="12" fill="#ffe7a8" opacity=".7"/>').join("") +
      /* tag wall */
      '<rect x="0" y="146" width="268" height="84" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 152; y < 230; y += 8) b += '<path d="M0 ' + y + 'h268" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("BIZ MARKIE", 8, 200, 36, GOLD, -5) + tag("BIZ NEVER SLEEPS", 14, 222, 13, CREAM, -3) + tag("DIABOLICAL", 150, 224, 14, "#ff4fa3", -4) +
      /* a little mic + crown doodle */
      '<path d="M226 164l6 10 7-8 7 8 6-10v14h-26z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/>' +
      /* street */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="241" width="44" height="13" rx="4" fill="#1b998b"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="34" cy="254" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="370" y="58" width="5" height="172" fill="#3d4b3f"/><circle class="flk" cx="372" cy="58" r="4" fill="#fff6c2"/>' +
      '<rect x="270" y="66" width="128" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="334" y="81" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Biz Markie Way</text>' +
      blade(298, 94, 100, "South St") + blade(298, 118, 100, "West Av"),
      sky("t5", "#0b0a1c", "#2e2a4e"));
  }

  window.SCENES = { train: train, theatre: theatre, rooftop: rooftop, longwood: longwood, corner: corner };
})();
