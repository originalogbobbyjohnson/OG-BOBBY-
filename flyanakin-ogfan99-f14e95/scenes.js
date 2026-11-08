/* flyanakin scenes (Regions tab: Virginia; Richmond). 400 x 260 SVGs. CSS classes and ids prefixed fly- (the page's own anim-train is kept).
   0 the GRTC Pulse at Scott's Addition station (W Broad St & Cleveland St), the bus pulling into its median lane.
   1 the Roseneath Rd wall in Scott's Addition where Nils Westergard painted the 2018 Fly Anakin & Ohbliv mural: a painter's lift, the stencil mural drawn as abstract shapes (no faces).
   2 Gallery5 on W Marshall St (the 1883 Steamer Company No. 5 firehouse, red brick + bell tower), where Fly Anakin & Ohbliv's Backyard Boogie Tour stopped in July 2018.
   3 the Byrd Theatre in Carytown (1928 movie palace, its Wurlitzer organ): the marquee lights chasing, "every verse a flick".
   4 Roseneath Rd & W Leigh St in Scott's Addition: green signs, FLY ANAKIN tagged on the brick, the Science Museum of Virginia's dome (old Broad Street Station) behind.
   No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flyflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.fly-flk{animation:flyflick 2.6s infinite}' +
    '@keyframes flyglow{0%,100%{opacity:.45}50%{opacity:1}}.fly-glow{animation:flyglow 1.6s ease-in-out infinite}.fly-g2{animation-delay:-.8s}' +
    '@keyframes flybounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.fly-bn{animation:flybounce .6s ease-in-out infinite}.fly-b2{animation-delay:-.3s}.fly-b3{animation-delay:-.15s}' +
    '@keyframes flylift{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.fly-lift{animation:flylift 7s ease-in-out infinite}' +
    '@keyframes flyswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.fly-bell{transform-box:fill-box;transform-origin:50% 0;animation:flyswing 1.2s ease-in-out infinite}' +
    '@keyframes flychase{0%,100%{opacity:1}50%{opacity:.15}}.fly-ch{animation:flychase .8s steps(1) infinite}.fly-ch2{animation-delay:-.4s}' +
    '@keyframes flycar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.fly-car{animation:flycar 7s linear infinite}' +
    '@keyframes flybird{0%{transform:translate(0,0)}100%{transform:translate(-440px,-24px)}}.fly-bd{animation:flybird 12s linear infinite}' +
    '@keyframes flyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fly-sp{animation:flyspray 1.4s ease-out infinite}.fly-sp2{animation-delay:.45s}' +
    '@keyframes flynote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.fly-nt{animation:flynote 3s ease-out infinite}.fly-n2{animation-delay:-1s}.fly-n3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="12" height="16" rx="4" fill="' + c + '"/></g>';
  const GOLD = "#ffcf3f", SKY = "#4fb8ff", RED = "#e2574c", GRTC = "#1f4e79", TEAL = "#3fb8a0";

  /* 0. Scott's Addition station on W Broad St: the glass canopy on the median, the tall pylon with the PULSE badge, the low brick warehouses of Scott's Addition behind, the Pulse bus pulling in */
  function flystation() {
    const bus = '<g class="anim-train"><rect x="20" y="132" width="300" height="72" rx="12" fill="#f4f6f7" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 40) + '" y="144" width="32" height="26" rx="3" fill="#22313e"/>').join("") +
      '<rect x="282" y="142" width="34" height="32" rx="4" fill="#22313e"/><rect x="20" y="178" width="300" height="7" fill="' + GRTC + '"/><rect x="20" y="187" width="300" height="3" fill="' + TEAL + '"/>' +
      '<rect x="146" y="140" width="26" height="60" rx="2" fill="none" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="228" y="134" width="88" height="10" rx="2" fill="#111"/><text x="272" y="142" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">PULSE  DOWNTOWN</text>' +
      '<circle cx="76" cy="206" r="12" fill="#222"/><circle cx="76" cy="206" r="5" fill="#9aa1a8"/><circle cx="264" cy="206" r="12" fill="#222"/><circle cx="264" cy="206" r="5" fill="#9aa1a8"/>' +
      '<circle cx="317" cy="192" r="4" fill="#fff6c2"/></g>';
    const shed = (x, w, h, c) => '<rect x="' + x + '" y="' + (142 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (138 - h) + '" width="' + w + '" height="5" fill="#4a2c22"/>' +
      Array.from({ length: Math.floor((w - 10) / 22) }, (_, i) => '<rect x="' + (x + 8 + i * 22) + '" y="' + (150 - h) + '" width="14" height="' + Math.max(12, h - 40) + '" fill="#3a4650" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fly0)"/>' +
      '<circle cx="60" cy="34" r="14" fill="#fff4c9" opacity=".9"/>' +
      /* Scott's Addition: old brick warehouses turned breweries, a water tower */
      shed(0, 96, 70, "#9a4a34") + shed(96, 120, 56, "#b0603f") + shed(216, 110, 76, "#8a3f30") +
      '<rect x="244" y="20" width="4" height="30" fill="#5a4a3e"/><rect x="268" y="20" width="4" height="30" fill="#5a4a3e"/><rect x="238" y="6" width="40" height="18" rx="4" fill="#6c5a4a"/><path d="M236 8l22 -8l22 8z" fill="#5a4a3e"/>' +
      /* canopy on the median */
      '<rect x="100" y="46" width="210" height="8" fill="#5a646e"/><rect x="100" y="54" width="210" height="14" fill="#bfe3ef" opacity=".75"/>' + [120, 290].map(x => '<rect x="' + x + '" y="68" width="5" height="76" fill="#5a646e"/>').join("") +
      /* pylon */
      '<rect x="334" y="22" width="44" height="122" rx="2" fill="#1c252e"/><rect x="334" y="22" width="44" height="5" fill="' + TEAL + '"/>' + badge(330, 48, "PULSE", GRTC) +
      '<text x="356" y="78" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">SCOTT’S</text><text x="356" y="90" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">ADDITION</text>' +
      '<rect x="342" y="102" width="28" height="12" rx="2" fill="#000"/><text x="356" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a" class="fly-flk">3 MIN</text>' +
      '<rect x="0" y="144" width="400" height="10" fill="#cfcac0"/><rect x="0" y="154" width="400" height="106" fill="#3a3d42"/>' +
      '<rect x="0" y="212" width="400" height="4" fill="#b7342b" opacity=".7"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="236" width="24" height="4" fill="#f7f3ea"/>').join("") +
      bus +
      sign(118, 14, 164, "W BROAD ST") + '<rect x="196" y="36" width="3" height="10" fill="#5a646e"/>',
      sky("fly0", "#7ab3d8", "#f3dfc0"));
  }

  /* 1. The mural wall on Roseneath Rd: a tall brick warehouse wall, a giant stencil mural drawn as abstract shapes (a cassette, a record, a gold sun, sky-blue streaks), the painter's lift going up and down */
  function flymural() {
    return svg(
      '<rect width="400" height="260" fill="url(#fly1)"/>' +
      '<g class="fly-bd"><path d="M420 30q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="2" fill="none"/><path d="M450 44q4 -4 8 0q4 -4 8 0" stroke="#2a2030" stroke-width="2" fill="none"/></g>' +
      /* the wall */
      '<rect x="30" y="30" width="300" height="170" fill="#9a4f3a"/><rect x="26" y="24" width="308" height="8" fill="#5e2c20"/>' +
      Array.from({ length: 14 }, (_, r) => '<path d="M30 ' + (40 + r * 12) + 'h300" stroke="#7d3c2c" stroke-width="1"/>').join("") +
      /* the mural: stencil blocks, no faces */
      '<rect x="44" y="42" width="272" height="148" fill="#f3efe4"/>' +
      '<circle cx="104" cy="104" r="44" fill="' + GOLD + '"/>' +
      Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (104 + Math.cos(a) * 50).toFixed(1) + ' ' + (104 + Math.sin(a) * 50).toFixed(1) + 'L' + (104 + Math.cos(a) * 62).toFixed(1) + ' ' + (104 + Math.sin(a) * 62).toFixed(1) + '" stroke="' + GOLD + '" stroke-width="5" stroke-linecap="round"/>'; }).join("") +
      '<circle cx="104" cy="104" r="30" fill="#141414"/><circle cx="104" cy="104" r="22" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="104" cy="104" r="9" fill="' + RED + '"/><circle cx="104" cy="104" r="2" fill="#f3efe4"/>' +
      '<rect x="170" y="70" width="120" height="72" rx="6" fill="#141414"/><rect x="182" y="80" width="96" height="30" rx="4" fill="' + SKY + '"/><circle cx="208" cy="95" r="9" fill="#141414"/><circle cx="252" cy="95" r="9" fill="#141414"/>' +
      '<rect x="196" y="122" width="68" height="14" rx="2" fill="#2a2a2a"/>' +
      '<path d="M50 172h110M60 182h140M170 160h130" stroke="' + SKY + '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M220 176h86" stroke="' + RED + '" stroke-width="6" stroke-linecap="round"/>' +
      /* painter's lift */
      '<g class="fly-lift"><rect x="300" y="128" width="44" height="22" rx="2" fill="none" stroke="' + GOLD + '" stroke-width="3"/><rect x="300" y="146" width="44" height="6" fill="#c9a22a"/>' +
      person(322, 128, "#222") + '<path d="M328 112l12 -10" stroke="#222" stroke-width="3"/><rect x="338" y="96" width="6" height="10" rx="1" fill="' + SKY + '"/>' +
      '<g class="fly-sp"><circle cx="336" cy="94" r="2" fill="' + SKY + '"/></g><g class="fly-sp fly-sp2"><circle cx="332" cy="90" r="1.6" fill="' + SKY + '"/></g>' +
      '<path d="M306 152l32 48M338 152l-32 48" stroke="#555" stroke-width="3"/></g>' +
      '<rect x="296" y="200" width="52" height="12" rx="2" fill="#c9a22a"/><circle cx="304" cy="214" r="5" fill="#222"/><circle cx="340" cy="214" r="5" fill="#222"/>' +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="14" fill="#8c8780"/><rect x="0" y="214" width="400" height="46" fill="#2e2f33"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="236" width="26" height="3" fill="#f7f3ea"/>').join("") +
      '<rect x="350" y="110" width="44" height="90" fill="#6d6a66"/><rect x="356" y="120" width="32" height="20" fill="#3a4650"/>' +
      sign(6, 4, 128, "ROSENEATH RD") +
      person(20, 210, "#3a2a40", "fly-bn") + person(36, 210, "#2a3340", "fly-bn fly-b2"),
      sky("fly1", "#89c2e6", "#f6e3c6"));
  }

  /* 2. Gallery5: the old red-brick firehouse on W Marshall St with its tall tower and the bell swinging, the doors open, a show going inside */
  function flygallery() {
    return svg(
      '<rect width="400" height="260" fill="url(#fly2)"/>' +
      '<circle cx="330" cy="36" r="12" fill="#f2efe0" opacity=".85"/>' +
      /* neighbors */
      '<rect x="0" y="96" width="96" height="104" fill="#5a4a46"/><rect x="304" y="90" width="96" height="110" fill="#4a4250"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (14 + (i % 2) * 42) + '" y="' + (110 + Math.floor(i / 2) * 40) + '" width="24" height="26" fill="#e7c76a" opacity=".6"/><rect x="' + (318 + (i % 2) * 42) + '" y="' + (104 + Math.floor(i / 2) * 42) + '" width="24" height="26" fill="#9fc0d8" opacity=".5"/>').join("") +
      /* the firehouse */
      '<rect x="100" y="80" width="150" height="120" fill="#a2402c"/><rect x="96" y="74" width="158" height="8" fill="#d8c8a8"/>' +
      '<path d="M100 74l75 -18l75 18z" fill="#7d2e20"/>' +
      [112, 158, 204].map(x => '<rect x="' + x + '" y="92" width="34" height="40" rx="17" fill="#1f1418"/><rect x="' + x + '" y="92" width="34" height="40" rx="17" fill="' + GOLD + '" opacity=".35" class="fly-glow"/><path d="M' + x + ' 112h34" stroke="#d8c8a8" stroke-width="2"/>').join("") +
      '<rect x="104" y="138" width="142" height="5" fill="#d8c8a8"/>' +
      /* the big engine doors, open, the show inside */
      '<rect x="114" y="148" width="54" height="52" rx="4" fill="#160f12"/><rect x="182" y="148" width="54" height="52" rx="4" fill="#160f12"/>' +
      '<rect x="114" y="148" width="54" height="52" rx="4" fill="' + SKY + '" opacity=".3" class="fly-glow"/><rect x="182" y="148" width="54" height="52" rx="4" fill="' + RED + '" opacity=".3" class="fly-glow fly-g2"/>' +
      '<g fill="#0e0a0c">' + [124, 136, 150, 160, 192, 204, 216, 228].map((x, i) => '<g class="fly-bn' + [" fly-b2", "", " fly-b3", ""][i % 4] + '"><circle cx="' + x + '" cy="182" r="4"/><rect x="' + (x - 5) + '" y="186" width="10" height="14" rx="3"/></g>').join("") + '</g>' +
      '<rect x="128" y="126" width="94" height="11" rx="2" fill="#d8c8a8"/><text x="175" y="134.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5a2418" letter-spacing="1">STEAMER CO. NO. 5</text>' +
      /* the tower with the bell */
      '<rect x="250" y="36" width="44" height="164" fill="#943a28"/><rect x="246" y="30" width="52" height="8" fill="#d8c8a8"/>' +
      '<path d="M246 30l26 -22l26 22z" fill="#6d2a1e"/><rect x="270" y="0" width="4" height="10" fill="#555"/>' +
      '<rect x="256" y="44" width="32" height="34" fill="#1d1416"/><path d="M262 50q10 -6 20 0v16h-20z" fill="#c9a24a" class="fly-bell"/>' +
      [92, 128, 164].map(y => '<rect x="262" y="' + y + '" width="20" height="24" rx="10" fill="#1f1418"/>').join("") +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="14" fill="#77716b"/><rect x="0" y="214" width="400" height="46" fill="#2c2d31"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="236" width="26" height="3" fill="#e8d36a"/>').join("") +
      '<rect x="20" y="170" width="60" height="26" rx="2" fill="#f7f3ea"/><text x="50" y="181" text-anchor="middle" ' + font + ' font-size="7" fill="#111">BACKYARD</text><text x="50" y="191" text-anchor="middle" ' + font + ' font-size="7" fill="#111">BOOGIE TOUR</text>' +
      '<g class="fly-bn">' + person(320, 210, "#2a2f3a") + person(338, 210, "#4a2a3a") + '</g>' +
      sign(6, 6, 128, "W MARSHALL ST"),
      sky("fly2", "#141a30", "#3e3050"));
  }

  /* 3. The Byrd Theatre in Carytown: the 1928 movie palace, the vertical blade sign, the marquee bulbs chasing, organ notes floating up, the crowd lined up for the picture */
  function flybyrd() {
    const bulbs = (x, y, w, n) => Array.from({ length: n }, (_, i) => '<circle cx="' + (x + i * (w / (n - 1))).toFixed(1) + '" cy="' + y + '" r="2.2" fill="#fff2b0" class="fly-ch' + (i % 2 ? " fly-ch2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fly3)"/>' +
      /* Carytown neighbors: little shopfronts with awnings */
      '<rect x="0" y="100" width="100" height="100" fill="#6a5a7a"/><path d="M0 150h100l-6 12h-88z" fill="' + SKY + '"/>' +
      '<rect x="300" y="96" width="100" height="104" fill="#5a6a5a"/><path d="M300 150h100l-6 12h-88z" fill="' + RED + '"/>' +
      Array.from({ length: 2 }, (_, i) => '<rect x="' + (14 + i * 44) + '" y="112" width="26" height="28" fill="#e7c76a" opacity=".6"/><rect x="' + (314 + i * 44) + '" y="110" width="26" height="28" fill="#e7c76a" opacity=".55"/>').join("") +
      /* the theatre: cream terracotta facade */
      '<rect x="100" y="54" width="200" height="146" fill="#e3d2b0"/><rect x="96" y="48" width="208" height="8" fill="#b89a6a"/>' +
      '<path d="M100 48q100 -34 200 0z" fill="#d6c19a"/>' +
      [120, 166, 212, 258].map(x => '<rect x="' + x + '" y="66" width="22" height="40" rx="11" fill="#5a3a2a"/><rect x="' + (x + 2) + '" y="68" width="18" height="36" rx="9" fill="' + GOLD + '" opacity=".35" class="fly-glow"/>').join("") +
      /* the blade sign */
      '<rect x="186" y="8" width="28" height="104" rx="3" fill="#7a1e22" stroke="#fff2b0" stroke-width="2"/>' +
      ['B', 'Y', 'R', 'D'].map((c, i) => '<text x="200" y="' + (32 + i * 22) + '" text-anchor="middle" ' + font + ' font-size="18" fill="#fff2b0" class="fly-flk">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="110" y="112" width="180" height="34" rx="3" fill="#1b1416" stroke="#c9a24a" stroke-width="2"/>' + bulbs(114, 116, 172, 18) + bulbs(114, 142, 172, 18) +
      '<text x="200" y="133" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="1">EVERY VERSE A FLICK</text>' +
      /* doors */
      '<rect x="130" y="152" width="140" height="48" fill="#2a1a14"/>' + [140, 172, 204, 236].map(x => '<rect x="' + x + '" y="158" width="24" height="42" fill="' + GOLD + '" opacity=".3" class="fly-glow fly-g2"/>').join("") +
      /* organ notes */
      '<g fill="' + GOLD + '"><text x="84" y="196" font-size="16" class="fly-nt">♪</text><text x="300" y="194" font-size="14" class="fly-nt fly-n2">♫</text><text x="330" y="190" font-size="16" class="fly-nt fly-n3">♪</text></g>' +
      /* sidewalk + line */
      '<rect x="0" y="200" width="400" height="14" fill="#8c8780"/><rect x="0" y="214" width="400" height="46" fill="#2e2f33"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="236" width="26" height="3" fill="#f7f3ea"/>').join("") +
      '<g class="fly-bn">' + person(30, 212, "#2a2f3a") + person(48, 212, "#4a2a3a") + person(66, 212, "#2f3a2a") + '</g>' +
      '<g class="fly-car"><rect x="0" y="216" width="70" height="18" rx="5" fill="' + SKY + '"/><rect x="12" y="208" width="40" height="12" rx="4" fill="#2f7fc0"/><circle cx="14" cy="236" r="6" fill="#111"/><circle cx="56" cy="236" r="6" fill="#111"/><circle cx="68" cy="222" r="3" fill="#fff6c2"/></g>' +
      sign(300, 6, 94, "W CARY ST"),
      sky("fly3", "#1a1430", "#5a3a5e"));
  }

  /* 4. Roseneath Rd & W Leigh St: green signs, FLY ANAKIN tagged on the warehouse brick, the Science Museum's big dome (the old Broad Street Station) behind at dusk */
  function flycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fly4)"/>' +
      '<g class="fly-bd"><path d="M420 40q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="2" fill="none"/></g>' +
      /* the museum: long pale granite front, columns, the dome */
      '<path d="M140 70q80 -60 160 0z" fill="#8a9a9a"/><rect x="140" y="68" width="160" height="10" fill="#d9d2c4"/><rect x="216" y="18" width="8" height="10" fill="#b8b0a0"/>' +
      '<rect x="110" y="78" width="220" height="74" fill="#e3dccd"/><rect x="104" y="74" width="232" height="8" fill="#c9c0ae"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (150 + i * 18) + '" y="86" width="8" height="58" fill="#f3eee4"/>').join("") +
      '<rect x="146" y="84" width="148" height="4" fill="#c9c0ae"/>' +
      Array.from({ length: 2 }, (_, i) => '<rect x="' + (118 + i * 196) + '" y="92" width="16" height="30" fill="#6a7a80"/>').join("") +
      /* the wall */
      '<rect x="0" y="120" width="112" height="96" fill="#8a3f30"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (128 + r * 12) + 'h112" stroke="#6a2e22" stroke-width="1"/>').join("") +
      tag("FLY", 10, 160, 28, GOLD, -8) + tag("ANAKIN", 8, 198, 24, SKY, -6) +
      '<g class="fly-sp"><circle cx="100" cy="182" r="2" fill="' + SKY + '"/></g><g class="fly-sp fly-sp2"><circle cx="104" cy="176" r="1.6" fill="' + GOLD + '"/></g>' +
      '<rect x="300" y="132" width="100" height="84" fill="#3a3540"/>' + tag("MUTANT", 306, 172, 18, RED, -8) + tag("FRANK", 318, 202, 20, GOLD, -6) +
      /* sidewalk + street */
      '<rect x="0" y="216" width="400" height="10" fill="#8c8780"/><rect x="0" y="226" width="400" height="34" fill="#2e2f33"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="242" width="26" height="3" fill="#f7f3ea"/>').join("") +
      /* sign post */
      '<rect x="262" y="112" width="5" height="106" fill="#4a4f55"/>' + sign(200, 92, 128, "ROSENEATH RD") + sign(214, 116, 100, "W LEIGH ST") +
      '<g class="fly-car"><rect x="0" y="228" width="66" height="16" rx="5" fill="' + RED + '"/><rect x="12" y="220" width="36" height="11" rx="4" fill="#b8431f"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="52" cy="246" r="5" fill="#111"/></g>',
      sky("fly4", "#2c3a62", "#f0a86a"));
  }

  window.SCENES = { flystation, flymural, flygallery, flybyrd, flycorner };
})();
