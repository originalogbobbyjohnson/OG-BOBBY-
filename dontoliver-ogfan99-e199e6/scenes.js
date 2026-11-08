/* dontoliver scenes (Regions tab: Houston + Texas; Alief, southwest Houston, where Complex says Don grew up and rode METRO buses and his bike up Westheimer).
   CSS classes prefixed dt- (the page's own anim-train is kept).
   1 METRO 82 Westheimer bus pulling into the Westheimer Rd @ Kirkwood Rd stop: strip-center fronts, palms, the METRO stop flag with the 82.
   2 Warehouse Live (EaDo): the old brick warehouse venue where he played the Houstock nights, HOUSTOCK on the marquee, light beams over the crowd.
   3 AvantGarden on Westheimer in Montrose: the house-turned-club, string lights over the porch, his Wednesday-night spot.
   4 Hardstone Psycho: a motorcycle doing a wheelie down a night freeway, headlight beam, sparks off the back.
   5 Westheimer Rd and Kirkwood Rd in Alief: green signs, DON TOLIVER tagged on the wall, the Downtown Aquarium's Ferris wheel far off behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dtbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.dt-beam{transform-box:fill-box;transform-origin:50% 100%;animation:dtbeam 3s ease-in-out infinite}.dt-beam2{animation-delay:-1.5s}' +
    '@keyframes dtbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.dt-hop{animation:dtbounce .6s ease-in-out infinite}.dt-hop2{animation-delay:-.3s}' +
    '@keyframes dtblink{0%,100%{opacity:1}50%{opacity:.35}}.dt-blink{animation:dtblink 1.2s steps(2) infinite}.dt-blink2{animation-delay:-.6s}' +
    '@keyframes dtsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.dt-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dtsway 3.2s ease-in-out infinite}' +
    '@keyframes dtroad{from{transform:translateX(0)}to{transform:translateX(-80px)}}.dt-road{animation:dtroad .5s linear infinite}' +
    '@keyframes dtfar{from{transform:translateX(0)}to{transform:translateX(-120px)}}.dt-far{animation:dtfar 6s linear infinite}' +
    '@keyframes dtspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-30px,10px);opacity:0}}.dt-spk{animation:dtspark .5s linear infinite}.dt-spk2{animation-delay:-.25s}' +
    '@keyframes dtwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.dt-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:dtwheel 14s linear infinite}' +
    '@keyframes dtwhl{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(-20deg)}}.dt-whl{transform-box:fill-box;transform-origin:80% 100%;animation:dtwhl 1s ease-in-out infinite}' +
    '@keyframes dtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dt-spr{animation:dtspray 1.4s ease-out infinite}.dt-spr2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", TEAL = "#5fe0c6", ORANGE = "#ff6a3d", LILAC = "#c9a7ff", GOLD = "#ffd36b";
  /* a person from behind: round head, no face */
  const person = (x, y, shirt, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-7" y="-2" width="14" height="22" rx="4" fill="' + shirt + '"/><circle cx="0" cy="-9" r="7" fill="#5a3d2b"/><rect x="-6" y="20" width="5" height="12" fill="#22262e"/><rect x="1" y="20" width="5" height="12" fill="#22262e"/></g>';
  /* a palm tree */
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q4 -40 -2 -78" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
    '<g class="dt-sway" transform="translate(-2 -78)"><path d="M0 0q-30 -6 -42 14M0 0q-24 -18 -40 -10M0 0q28 -6 40 14M0 0q22 -20 38 -12M0 0q0 -18 -6 -26" stroke="#2f7a4a" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>';

  /* 1. METRO 82 Westheimer at Westheimer Rd @ Kirkwood Rd */
  function dtstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="148" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="148" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="178" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="188" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="140" width="130" height="10" rx="2" fill="#111"/><text x="97" y="148" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">82 WESTHEIMER</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    const shop = (x, w, body, awn) => '<g><rect x="' + x + '" y="82" width="' + w + '" height="50" fill="' + body + '"/><rect x="' + x + '" y="82" width="' + w + '" height="10" fill="' + awn + '"/>' +
      '<rect x="' + (x + 8) + '" y="98" width="' + (w - 16) + '" height="26" fill="#2c3a48"/><rect x="' + (x + 8) + '" y="98" width="' + (w - 16) + '" height="26" fill="#f3d79a" opacity=".35"/></g>';
    return svg('<rect width="400" height="260" fill="url(#dts1)"/>' + stars(8) +
      '<circle cx="320" cy="40" r="15" fill="#ffe1a8" opacity=".9"/>' +
      shop(0, 92, "#d9c7a8", "#b4452f") + shop(96, 90, "#cbb38e", "#2f6f8a") + shop(190, 96, "#e0cfae", "#7a3f8a") + shop(290, 110, "#d2bd98", "#2f7a4a") +
      palm(92, 132, 0.9) + palm(288, 132, 0.8) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="98" width="5" height="118" fill="#6b7178"/><rect x="350" y="72" width="48" height="50" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="374" y="86" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><rect x="360" y="92" width="28" height="22" rx="3" fill="#fff"/><text x="374" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="' + METRO + '">82</text>' +
      sign(6, 8, 124, "WESTHEIMER RD") + sign(6, 34, 112, "KIRKWOOD RD") + '<rect x="56" y="56" width="4" height="10" fill="#6b7178"/>',
      sky("dts1", "#1b2346", "#e89a6a"));
  }

  /* 2. Warehouse Live: the brick warehouse, HOUSTOCK on the marquee */
  function dtwarehouse() {
    const brick = Array.from({ length: 8 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<rect x="' + (60 + c * 29 + (r % 2 ? -14 : 0)) + '" y="' + (60 + r * 10) + '" width="27" height="8" fill="' + ((r * 5 + c * 3) % 4 ? "#8a3f2c" : "#783524") + '"/>').join("")).join("");
    const beam = (x, c, cls) => '<g class="dt-beam ' + cls + '"><path d="M' + x + ' 160l-26 -150h52z" fill="' + c + '" opacity=".22"/></g>';
    const crowd = Array.from({ length: 13 }, (_, i) => '<g class="dt-hop ' + (i % 2 ? "dt-hop2" : "") + '">' + person(22 + i * 30, 222 + (i % 3) * 6, [TEAL, ORANGE, LILAC, "#2b3440"][i % 4], 1) + '</g>').join("");
    return svg('<rect width="400" height="260" fill="url(#dts2)"/>' + stars(14) +
      beam(110, TEAL, "") + beam(290, LILAC, "dt-beam2") +
      '<rect x="46" y="50" width="308" height="140" fill="#7a3624"/>' + brick +
      '<rect x="46" y="44" width="308" height="10" fill="#5a2a1c"/>' +
      [80, 150, 250, 320].map(x => '<rect x="' + x + '" y="66" width="24" height="30" fill="#ffd36b" opacity=".55"/><path d="M' + x + ' 81h24M' + (x + 12) + ' 66v30" stroke="#5a2a1c" stroke-width="2"/>').join("") +
      '<rect x="110" y="104" width="180" height="40" rx="3" fill="#15151a" stroke="#ffd36b" stroke-width="3"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="dt-blink ' + (i % 2 ? "dt-blink2" : "") + '" cx="' + (118 + i * 15) + '" cy="108" r="2" fill="#fff3b0"/>').join("") +
      '<text x="200" y="136" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="3" fill="' + TEAL + '">HOUSTOCK</text>' +
      '<rect x="168" y="150" width="64" height="40" fill="#2a1a14"/><rect x="172" y="154" width="56" height="36" fill="#ffb84a" opacity=".5"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1c22"/>' + crowd,
      sky("dts2", "#0b0d1c", "#3a2350"));
  }

  /* 3. AvantGarden on Westheimer: the house-turned-club, string lights over the porch */
  function dtavant() {
    const bulbs = (x1, x2, y, sag) => { let s = '<path d="M' + x1 + ' ' + y + 'Q' + ((x1 + x2) / 2) + ' ' + (y + sag) + ' ' + x2 + ' ' + y + '" stroke="#333" stroke-width="1.2" fill="none"/>'; for (let i = 1; i < 10; i++) { const t = i / 10, xx = x1 + (x2 - x1) * t, yy = y + 2 * sag * t * (1 - t); s += '<circle class="dt-blink ' + (i % 2 ? "dt-blink2" : "") + '" cx="' + xx + '" cy="' + (yy + 3) + '" r="3" fill="' + [GOLD, "#fff3b0", ORANGE][i % 3] + '"/>'; } return s; };
    return svg('<rect width="400" height="260" fill="url(#dts3)"/>' + stars(16) +
      '<circle cx="62" cy="44" r="14" fill="#f4f1e0" opacity=".9"/>' +
      /* the old two-story house */
      '<path d="M110 92l90 -52l90 52z" fill="#3a2f45"/><rect x="120" y="92" width="160" height="104" fill="#e9e0cc"/>' +
      '<rect x="138" y="104" width="30" height="34" fill="' + LILAC + '" opacity=".75"/><rect x="232" y="104" width="30" height="34" fill="' + TEAL + '" opacity=".7"/>' +
      '<path d="M153 104v34M138 121h30M247 104v34M232 121h30" stroke="#e9e0cc" stroke-width="2"/>' +
      '<rect x="112" y="146" width="176" height="8" fill="#cbbfa6"/>' + [118, 160, 240, 282].map(x => '<rect x="' + x + '" y="154" width="6" height="42" fill="#f4efe2"/>').join("") +
      '<rect x="182" y="158" width="36" height="38" fill="#2a2030"/><rect x="186" y="162" width="28" height="34" fill="#ffb84a" opacity=".55"/>' +
      '<rect x="160" y="196" width="80" height="6" fill="#cbbfa6"/><rect x="168" y="202" width="64" height="6" fill="#bfb399"/>' +
      bulbs(20, 120, 112, 26) + bulbs(280, 384, 112, 26) + bulbs(112, 288, 150, 14) +
      '<rect x="18" y="108" width="4" height="100" fill="#4a3a2a"/><rect x="380" y="108" width="4" height="100" fill="#4a3a2a"/>' +
      palm(60, 210, 0.7) + palm(344, 210, 0.75) +
      '<rect x="0" y="208" width="400" height="52" fill="#3c3c44"/><path d="M0 240h400" stroke="#ddd" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="dt-hop">' + person(140, 186, ORANGE, 0.8) + '</g><g class="dt-hop dt-hop2">' + person(262, 186, TEAL, 0.8) + '</g>' +
      sign(300, 10, 94, "WESTHEIMER") + '<rect x="345" y="32" width="4" height="12" fill="#6b7178"/>',
      sky("dts3", "#120a24", "#5a2f5a"));
  }

  /* 4. Hardstone Psycho: the wheelie down a night freeway */
  function dthardstone() {
    const lamps = '<g class="dt-far">' + Array.from({ length: 8 }, (_, i) => '<g><rect x="' + (i * 60) + '" y="70" width="3" height="80" fill="#3a3f4a"/><rect x="' + (i * 60 - 8) + '" y="68" width="16" height="4" fill="#3a3f4a"/><circle cx="' + (i * 60 - 6) + '" cy="74" r="3" fill="#ffd36b"/></g>').join("") + '</g>';
    const dashes = '<g class="dt-road">' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 80) + '" y="214" width="40" height="5" fill="#f2f2f2"/>').join("") + '</g>';
    const wheel = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="22" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="14" fill="#2a2a2a" stroke="#9aa1a8" stroke-width="2"/><circle cx="' + cx + '" cy="' + cy + '" r="4" fill="#9aa1a8"/>';
    const bike = '<g class="dt-whl"><g transform="translate(0 0)">' +
      wheel(150, 170) + wheel(250, 198) +
      '<path d="M150 170l40 -10l56 34M190 160l30 -26h30l-4 30z" stroke="#c9ccd2" stroke-width="5" fill="none" stroke-linejoin="round"/>' +
      '<path d="M196 150q24 -18 52 -6l-6 18h-40z" fill="' + ORANGE + '" stroke="#7a2a10" stroke-width="2"/>' +
      '<path d="M148 160l-6 -24" stroke="#c9ccd2" stroke-width="4"/><rect x="132" y="128" width="20" height="10" rx="3" fill="#222"/>' +
      '<path d="M132 133l-120 -36v76z" fill="#fff6c2" opacity=".18"/><circle cx="134" cy="133" r="5" fill="#fff6c2"/>' +
      /* the rider from behind/side: helmet, no face */
      '<rect x="206" y="112" width="22" height="34" rx="6" fill="#1f2229"/><circle cx="214" cy="104" r="11" fill="#2b2f38"/><rect x="206" y="100" width="16" height="6" rx="2" fill="' + TEAL + '" opacity=".8"/>' +
      '<path d="M208 124l-28 8" stroke="#1f2229" stroke-width="7" stroke-linecap="round"/><path d="M222 144l10 26" stroke="#1f2229" stroke-width="8" stroke-linecap="round"/>' +
      '</g></g>';
    const sparks = cls => '<g class="dt-spk ' + cls + '">' + [0, 1, 2, 3, 4].map(i => '<path d="M' + (262 + i * 5) + ' ' + (218 - i * 3) + 'l10 3" stroke="' + GOLD + '" stroke-width="2"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#dts4)"/>' + stars(30) +
      '<path d="M0 130h40v-40h20v-26h16v66h30v-50h22v50h40v-30h20v30h212v20h-400z" fill="#141826"/>' +
      lamps + '<rect x="0" y="150" width="400" height="10" fill="#4a505c"/><rect x="0" y="160" width="400" height="100" fill="#26282e"/>' + dashes +
      '<rect x="0" y="252" width="400" height="8" fill="#3a3d44"/>' +
      '<rect x="300" y="88" width="94" height="36" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="347" y="104" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">I-10 WEST</text><text x="347" y="117" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">KATY FWY</text>' +
      bike + sparks("") + sparks("dt-spk2"),
      sky("dts4", "#05060f", "#2a1d3a"));
  }

  /* 5. Westheimer Rd and Kirkwood Rd, Alief: the Downtown Aquarium's Ferris wheel far off */
  function dtcorner() {
    const brick = Array.from({ length: 10 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (c * 34 + (r % 2 ? -17 : 0)) + '" y="' + (120 + r * 14) + '" width="32" height="12" fill="' + ((r * 7 + c * 3) % 5 ? "#4a3a5a" : "#3e3050") + '"/>').join("")).join("");
    /* the Ferris wheel: a ring with spokes and lit gondolas, turning slowly */
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, x = 290 + 40 * Math.cos(a), y = 62 + 40 * Math.sin(a); return '<path d="M290 62L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#bfe8ff" stroke-width="1" opacity=".7"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.5" fill="' + [TEAL, ORANGE, LILAC, GOLD][i % 4] + '"/>'; }).join("");
    const wheel = '<g class="dt-wheel"><circle cx="290" cy="62" r="40" fill="none" stroke="#e8f6ff" stroke-width="2.5"/><circle cx="290" cy="62" r="30" fill="none" stroke="#bfe8ff" stroke-width="1" opacity=".6"/>' + spokes + '</g>' +
      '<path d="M290 62l-26 50M290 62l26 50" stroke="#c9ccd2" stroke-width="3"/><circle cx="290" cy="62" r="4" fill="#fff"/>';
    return svg('<rect width="400" height="260" fill="url(#dts5)"/>' + stars(10) +
      '<path d="M170 112v-30h18v30zM196 112v-48h14v48zM360 112v-40h20v40zM338 112v-24h16v24z" fill="#1a1f33"/>' + wheel +
      '<rect x="0" y="104" width="400" height="16" fill="#4a5058"/>' + brick +
      tag("DON", 110, 186, 54, TEAL, -6) + tag("TOLIVER", 170, 222, 38, ORANGE, -4) + tag("HARDSTONE", 30, 246, 18, LILAC, 4) +
      '<g transform="translate(378 250)"><rect x="-6" y="-24" width="12" height="24" rx="3" fill="' + ORANGE + '"/><rect x="-3" y="-30" width="6" height="6" fill="#aaa"/>' +
      '<circle class="dt-spr" cx="0" cy="-36" r="4" fill="' + TEAL + '" opacity=".7"/><circle class="dt-spr dt-spr2" cx="4" cy="-38" r="3" fill="' + TEAL + '" opacity=".6"/></g>' +
      '<rect x="60" y="34" width="5" height="200" fill="#6b7178"/>' + sign(4, 22, 128, "WESTHEIMER RD") + sign(12, 48, 112, "KIRKWOOD RD"),
      sky("dts5", "#151a3a", "#d0806a"));
  }

  window.SCENES = { dtstation: dtstation, dtwarehouse: dtwarehouse, dtavant: dtavant, dthardstone: dthardstone, dtcorner: dtcorner };
})();
