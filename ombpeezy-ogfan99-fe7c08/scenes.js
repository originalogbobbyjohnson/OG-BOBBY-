/* ombpeezy scenes (Regions tab: More of the South; Mobile, Alabama - born there 1997, grew up in public housing in Mobile until his mother moved the family to Sacramento when he was 12).
   CSS classes prefixed om- (the page's own anim-train slides the train in).
   1 Amtrak's Mardi Gras Service pulling into the Mobile station at 101 S Water St, by the riverfront.
   2 Mobile Mardi Gras, the oldest in America: a lit float rolling down Royal St, beads and round snack cakes flying (no brands).
   3 Fort Conde on Royal St: the rebuilt 1720s French brick fort, a star bastion, a cannon puffing smoke.
   4 The Cathedral Basilica of the Immaculate Conception on Claiborne St: cream portico, eight columns, twin towers, bells swinging.
   5 Dr Martin Luther King Jr Ave and Belsaw Ave: green signs, OMB PEEZY tagged on the wall, the Cochrane-Africatown Bridge behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes omfall{0%{transform:translateY(-30px);opacity:0}15%{opacity:1}100%{transform:translateY(150px);opacity:0}}.om-fall{animation:omfall 2.6s linear infinite}.om-f2{animation-delay:-.9s}.om-f3{animation-delay:-1.7s}' +
    '@keyframes omroll{from{transform:translateX(-60px)}to{transform:translateX(60px)}}.om-roll{animation:omroll 7s ease-in-out infinite alternate}' +
    '@keyframes omglow{0%,100%{opacity:.35}50%{opacity:1}}.om-glow{animation:omglow 1.1s ease-in-out infinite}.om-glow2{animation-delay:-.55s}' +
    '@keyframes ompuff{0%{transform:translate(0,0) scale(.4);opacity:.9}100%{transform:translate(-40px,-30px) scale(1.6);opacity:0}}.om-puff{transform-box:fill-box;transform-origin:50% 50%;animation:ompuff 2.4s ease-out infinite}.om-puff2{animation-delay:-1.2s}' +
    '@keyframes omswing{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.om-bell{transform-box:fill-box;transform-origin:50% 0;animation:omswing 1.6s ease-in-out infinite}.om-bell2{animation-delay:-.8s}' +
    '@keyframes ombird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.om-bird{animation:ombird 13s linear infinite}.om-bird2{animation-duration:17s;animation-delay:-6s}' +
    '@keyframes omship{from{transform:translateX(420px)}to{transform:translateX(-160px)}}.om-ship{animation:omship 22s linear infinite}' +
    '@keyframes omwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.om-wave{animation:omwave 4s ease-in-out infinite}' +
    '@keyframes omspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.om-sp{animation:omspray 1.4s ease-out infinite}.om-sp2{animation-delay:.45s}' +
    '@keyframes omflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.om-flag{transform-box:fill-box;transform-origin:0 50%;animation:omflag 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff8a3d", BLUE = "#3fb6e8", GOLD = "#f2d05a", PURPLE = "#8e5bd6", GREEN = "#3fae5a";
  const oak = (x, base, s) => '<g><rect x="' + (x - 4 * s) + '" y="' + (base - 34 * s) + '" width="' + (8 * s) + '" height="' + (34 * s) + '" fill="#5a4632"/>' +
    '<g fill="#3f6b3a"><ellipse cx="' + x + '" cy="' + (base - 44 * s) + '" rx="' + (34 * s) + '" ry="' + (18 * s) + '"/><ellipse cx="' + (x - 22 * s) + '" cy="' + (base - 36 * s) + '" rx="' + (18 * s) + '" ry="' + (11 * s) + '"/><ellipse cx="' + (x + 24 * s) + '" cy="' + (base - 38 * s) + '" rx="' + (18 * s) + '" ry="' + (11 * s) + '"/></g>' +
    '<g stroke="#9aa58e" stroke-width="1.5" opacity=".8"><path d="M' + (x - 20 * s) + ' ' + (base - 32 * s) + 'v' + (14 * s) + 'M' + (x + 6 * s) + ' ' + (base - 30 * s) + 'v' + (18 * s) + 'M' + (x + 26 * s) + ' ' + (base - 32 * s) + 'v' + (12 * s) + '"/></g></g>';

  /* 1. Amtrak Mardi Gras Service at the Mobile station, 101 S Water St */
  function omstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="134" width="28" height="18" rx="3" fill="#1d2a36"/>').join("");
    const train = '<g class="anim-train"><rect x="30" y="124" width="330" height="66" rx="8" fill="#d9dde1" stroke="#7a828a" stroke-width="2"/>' + win +
      '<rect x="30" y="160" width="330" height="6" fill="#c8102e"/><rect x="30" y="167" width="330" height="5" fill="#1b4f9c"/>' +
      '<path d="M360 124q22 6 30 34v32h-30z" fill="#c9ced3" stroke="#7a828a" stroke-width="2"/><rect x="366" y="136" width="18" height="16" rx="3" fill="#1d2a36"/><circle cx="382" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<circle cx="80" cy="194" r="9" fill="#222"/><circle cx="110" cy="194" r="9" fill="#222"/><circle cx="290" cy="194" r="9" fill="#222"/><circle cx="320" cy="194" r="9" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#oms1)"/><circle cx="64" cy="40" r="18" fill="#fff1c4" opacity=".9"/>' +
      '<g class="om-bird"><path d="M0 46q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* riverfront cranes and downtown behind */
      '<g fill="#7b8da0" opacity=".75"><rect x="230" y="60" width="18" height="60"/><rect x="252" y="46" width="22" height="74"/><rect x="278" y="70" width="16" height="50"/></g>' +
      '<g stroke="#a0573a" stroke-width="3" fill="none" opacity=".8"><path d="M320 120v-62h40M320 70l34 -12M352 58v24"/></g>' +
      /* platform canopy and the black station sign */
      '<path d="M0 92h400v8H0z" fill="#3b4652"/><g fill="#5a6672">' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="100" width="5" height="24"/>').join("") + '</g>' +
      '<rect x="116" y="62" width="168" height="24" rx="2" fill="#111"/><text x="200" y="79" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">MOBILE · WATER ST</text>' +
      '<rect x="0" y="190" width="400" height="8" fill="#6b5a48"/><path d="M0 198h400" stroke="#9b9b9b" stroke-width="3"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#c9c2b2"/><rect x="0" y="200" width="400" height="5" fill="#f2d64b"/>' +
      train + label(40, 320, "AMTRAK MARDI GRAS SERVICE · MOBILE"),
      sky("oms1", "#7ec3ea", "#e6f3f8"));
  }

  /* 2. Mobile Mardi Gras: a float on Royal St, beads and treats flying */
  function ommardi() {
    const bead = (x, c, cls) => '<g class="om-fall ' + cls + '"><circle cx="' + x + '" cy="40" r="5" fill="' + c + '"/><circle cx="' + (x + 9) + '" cy="44" r="5" fill="' + c + '"/><circle cx="' + (x + 18) + '" cy="40" r="5" fill="' + c + '"/></g>';
    const pie = (x, cls) => '<g class="om-fall ' + cls + '"><circle cx="' + x + '" cy="36" r="9" fill="#c9905a" stroke="#7a4f2a" stroke-width="2"/><circle cx="' + x + '" cy="36" r="5" fill="#a87040"/></g>';
    const balcony = (x) => '<rect x="' + x + '" y="70" width="90" height="70" fill="#d8b98e"/>' + [0, 1, 2].map(i => '<rect x="' + (x + 8 + i * 28) + '" y="80" width="18" height="40" fill="#2b2238"/>').join("") +
      '<path d="M' + x + ' 120h90" stroke="#222" stroke-width="3"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (x + 4 + i * 9) + ' 120v16" stroke="#222" stroke-width="1.5"/>').join("") + '<path d="M' + x + ' 136h90" stroke="#222" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#omm1)"/>' +
      balcony(0) + balcony(310) +
      '<g fill="' + GOLD + '"><circle class="om-glow" cx="100" cy="30" r="3"/><circle class="om-glow om-glow2" cx="160" cy="18" r="3"/><circle class="om-glow" cx="240" cy="22" r="3"/><circle class="om-glow om-glow2" cx="300" cy="34" r="3"/></g>' +
      bead(120, PURPLE, "") + bead(250, GOLD, "om-f2") + bead(190, GREEN, "om-f3") + pie(160, "om-f2") + pie(290, "") + pie(90, "om-f3") +
      /* the float */
      '<g class="om-roll"><rect x="120" y="140" width="160" height="56" rx="6" fill="#4a2a7a" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M140 140q60 -70 120 0z" fill="#2e8a4e" stroke="' + GOLD + '" stroke-width="3"/><path d="M170 140l30 -56l30 56z" fill="' + GOLD + '" opacity=".9"/>' +
      '<g fill="#fff6c2">' + Array.from({ length: 8 }, (_, i) => '<circle class="om-glow' + (i % 2 ? ' om-glow2' : '') + '" cx="' + (132 + i * 19) + '" cy="150" r="3"/>').join("") + '</g>' +
      '<text x="200" y="182" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '">MOBILE · 1703</text>' +
      '<circle cx="150" cy="200" r="8" fill="#222"/><circle cx="250" cy="200" r="8" fill="#222"/></g>' +
      /* crowd silhouettes with arms up */
      '<g fill="#1a1426">' + Array.from({ length: 12 }, (_, i) => { const x = 14 + i * 33; return '<circle cx="' + x + '" cy="214" r="7"/><rect x="' + (x - 8) + '" y="220" width="16" height="20" rx="5"/><path d="M' + (x - 6) + ' 222l-6 -16M' + (x + 6) + ' 222l6 -16" stroke="#1a1426" stroke-width="3"/>'; }).join("") + '</g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#3a3640"/>' +
      label(70, 260, "MARDI GRAS · ROYAL ST · SINCE 1703"),
      sky("omm1", "#140c2a", "#3c2160"));
  }

  /* 3. Fort Conde: brick star bastion, cannon smoke */
  function omfort() {
    const brick = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#b5653f"/>' +
      '<g stroke="#8a4a2c" stroke-width="1">' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '"/>' + Array.from({ length: Math.floor(w / 20) }, (_, i) => '<path d="M' + (x + i * 20 + (r % 2) * 10) + ' ' + (y + r * 10) + 'v10"/>').join("")).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#omf1)"/>' +
      '<g class="om-bird om-bird2"><path d="M0 50q6 -6 12 0q6 -6 12 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* modern downtown far behind */
      '<g fill="#9fb1c2" opacity=".7"><rect x="40" y="70" width="22" height="70"/><rect x="66" y="56" width="18" height="84"/><rect x="300" y="78" width="26" height="62"/></g>' +
      /* flagpole */
      '<rect x="270" y="40" width="3" height="80" fill="#5a5a5a"/><rect class="om-flag" x="273" y="42" width="34" height="20" fill="#f4f1e8" stroke="#bbb"/>' +
      /* walls + bastion */
      brick(0, 120, 400, 90) +
      '<path d="M120 120l80 -36l80 36z" fill="#c9774d" stroke="#8a4a2c" stroke-width="2"/>' + brick(150, 96, 100, 24) +
      '<rect x="0" y="112" width="400" height="8" fill="#d9c3a0"/>' +
      '<g fill="#d9c3a0">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="104" width="22" height="10"/>').join("") + '</g>' +
      /* gate */
      '<path d="M178 210v-44q22 -24 44 0v44z" fill="#3a2a1f"/><path d="M200 166v44" stroke="#6a5a4a" stroke-width="2"/>' +
      /* cannon on the wall */
      '<g><rect x="60" y="92" width="50" height="12" rx="6" fill="#2a2a2a" transform="rotate(-8 85 98)"/><circle cx="78" cy="106" r="8" fill="#4a3a2a"/>' +
      '<circle class="om-puff" cx="52" cy="94" r="10" fill="#e8e8e8"/><circle class="om-puff om-puff2" cx="50" cy="92" r="8" fill="#f4f4f4"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8a8f8a"/><rect x="0" y="210" width="400" height="4" fill="#c9c2b2"/>' +
      oak(350, 214, .8) +
      label(110, 180, "FORT CONDÉ · ROYAL ST"),
      sky("omf1", "#8fcbec", "#eaf5f9"));
  }

  /* 4. Cathedral Basilica of the Immaculate Conception, Claiborne St */
  function omcathedral() {
    const tower = (x) => '<rect x="' + x + '" y="70" width="44" height="110" fill="#e9dfc6" stroke="#b9ab8a" stroke-width="1.5"/>' +
      '<rect x="' + (x + 4) + '" y="58" width="36" height="14" fill="#e2d6b8" stroke="#b9ab8a"/>' +
      '<path d="M' + (x + 6) + ' 58q16 -30 32 0z" fill="#5e8f84" stroke="#3e6a60" stroke-width="1.5"/><rect x="' + (x + 21) + '" y="24" width="2" height="14" fill="#c9a24a"/><path d="M' + (x + 17) + ' 30h10" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="' + (x + 12) + '" y="80" width="20" height="30" rx="10" fill="#2d2a33"/>' +
      '<g class="om-bell' + (x > 200 ? ' om-bell2' : '') + '"><path d="M' + (x + 16) + ' 84h12l3 16h-18z" fill="#c9a24a"/></g>' +
      '<rect x="' + (x + 14) + '" y="124" width="16" height="26" rx="8" fill="#2d2a33"/>';
    const col = (x) => '<rect x="' + x + '" y="112" width="9" height="68" fill="#f4ecd8" stroke="#b9ab8a" stroke-width="1"/><rect x="' + (x - 2) + '" y="108" width="13" height="5" fill="#e2d6b8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#omc1)"/>' +
      '<g class="om-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#555" stroke-width="2" fill="none"/></g><g class="om-bird om-bird2"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#555" stroke-width="2" fill="none"/></g>' +
      tower(90) + tower(266) +
      /* pediment + portico */
      '<path d="M134 108l66 -36l66 36z" fill="#efe6cf" stroke="#b9ab8a" stroke-width="1.5"/><rect x="134" y="104" width="132" height="6" fill="#e2d6b8"/>' +
      '<rect x="134" y="110" width="132" height="70" fill="#d8ccad"/>' +
      [140, 156, 172, 188, 203, 219, 235, 251].map(col).join("") +
      '<rect x="186" y="140" width="28" height="40" rx="2" fill="#5a3a26"/>' +
      '<rect x="120" y="180" width="160" height="8" fill="#cfc4a6"/><rect x="110" y="188" width="180" height="8" fill="#c4b898"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#9a958c"/><rect x="0" y="196" width="400" height="4" fill="#c9c2b2"/>' +
      oak(40, 200, .9) + oak(370, 200, .85) +
      label(80, 240, "CATHEDRAL BASILICA · CLAIBORNE ST"),
      sky("omc1", "#87c6ea", "#f2e9d6"));
  }

  /* 5. Dr MLK Jr Ave and Belsaw Ave, the Cochrane-Africatown Bridge behind */
  function omcorner() {
    const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 10.5) + '" fill="#fff">' + txt + '</text>';
    const towerB = (x) => '<path d="M' + (x - 8) + ' 150L' + (x - 3) + ' 40h6L' + (x + 8) + ' 150z" fill="#d7d2c4"/><rect x="' + (x - 7) + '" y="104" width="14" height="4" fill="#bdb7a6"/>';
    const cables = (x, dir) => Array.from({ length: 7 }, (_, i) => '<path d="M' + x + ' ' + (46 + i * 7) + 'L' + (x + dir * (26 + i * 16)) + ' 112" stroke="#eef0f2" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#omk1)"/><circle cx="330" cy="46" r="16" fill="#ffd79a" opacity=".85"/>' +
      /* the bridge: two pylons, fan cables, deck over the river */
      '<g opacity=".95">' + cables(150, -1) + cables(150, 1) + cables(260, -1) + cables(260, 1) + towerB(150) + towerB(260) +
      '<path d="M0 116Q205 98 400 116" stroke="#cfc9b8" stroke-width="6" fill="none"/></g>' +
      '<rect x="0" y="140" width="400" height="14" fill="#2d5a7a"/>' +
      '<g class="om-ship"><rect x="0" y="128" width="120" height="12" fill="#7a2e2a"/><rect x="80" y="116" width="26" height="12" fill="#e8e2d0"/><rect x="10" y="118" width="60" height="10" fill="#3b6ea8"/></g>' +
      /* wall */
      '<rect x="0" y="154" width="400" height="78" fill="#d9c9a8"/>' +
      '<g stroke="#bba985" stroke-width="1">' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (170 + r * 16) + 'h400"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40 + (r % 2) * 20) + ' ' + (154 + r * 16) + 'v16"/>').join("")).join("") + '</g>' +
      tag("OMB PEEZY", 20, 214, 42, ORANGE, -5) +
      tag("HUMBLE", 268, 180, 17, BLUE, 4) + tag("LIL PEEZY", 250, 224, 17, GOLD, -3) +
      '<g fill="' + ORANGE + '" opacity=".75"><circle class="om-sp" cx="232" cy="200" r="3"/><circle class="om-sp om-sp2" cx="240" cy="194" r="2.5"/><circle class="om-sp" cx="236" cy="206" r="2"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#5e6066"/>' +
      '<rect x="364" y="90" width="5" height="142" fill="#7a7f86"/>' +
      sign(262, 80, 136, "DR M L KING JR AVE", 10) + sign(298, 106, 100, "BELSAW AVE") +
      label(10, 250, "DR MLK JR AVE &amp; BELSAW AVE · MOBILE"),
      sky("omk1", "#f2a65a", "#7a4f8a"));
  }

  window.SCENES = { omstop, ommardi, omfort, omcathedral, omcorner };
})();
