/* Propaganda scenes (Regions tab: Los Angeles + SoCal; Jason Petty, born and raised in LA, came up in the Pomona poetry/battle scene - a decade at "A Mic and Dim Lights" in downtown Pomona, Foundation freestyles near the Glass House; taught art in Pomona; Humble Beast). CSS classes prefixed pg- (the page's own anim-train is kept).
   0 Pomona-Downtown on the Metrolink Riverside Line: the 1940 Mission Revival depot (stucco, arcade, red clay tile roof), palms, a Metrolink train sliding in, black sign with the purple RIV bullet.
   1 A Mic and Dim Lights: a dim Thursday-night poetry room downtown, one mic in a spotlight, string lights flickering, the crowd snapping.
   2 Where the 10 and 101 meet (I Ain't Gave Up on You Yet): the East LA interchange ramps, a mural the size of a building, the concrete LA River, cars flowing.
   3 Bored of Education: his art classroom, chalkboard reading DEAR BORED OF EDUCATION, easel and paint, the clock ticking.
   4 2nd St and Main St in the Pomona Arts Colony: green signs, PROPAGANDA tagged on the brick, Mount Baldy with snow behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pgflick{0%,100%{opacity:1}40%{opacity:.55}50%{opacity:.25}60%{opacity:.9}}.pg-flk{animation:pgflick 2.6s infinite}.pg-f2{animation-delay:-.9s}.pg-f3{animation-delay:-1.7s}' +
    '@keyframes pgbeam{0%,100%{opacity:.35}50%{opacity:.6}}.pg-beam{animation:pgbeam 3s ease-in-out infinite}' +
    '@keyframes pgsnap{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.pg-snap{transform-box:fill-box;animation:pgsnap .8s ease-in-out infinite}.pg-n2{animation-delay:-.3s}.pg-n3{animation-delay:-.55s}' +
    '@keyframes pgcarr{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.pg-cr{animation:pgcarr 6s linear infinite}.pg-cr2{animation-delay:-3s}' +
    '@keyframes pgcarl{0%{transform:translateX(480px)}100%{transform:translateX(-80px)}}.pg-cl{animation:pgcarl 7s linear infinite}.pg-cl2{animation-delay:-3.5s}' +
    '@keyframes pgwater{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.pg-wt{animation:pgwater 3s linear infinite}' +
    '@keyframes pghand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pg-hand{transform-box:view-box;transform-origin:330px 52px;animation:pghand 8s linear infinite}' +
    '@keyframes pgsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.pg-sw{transform-box:fill-box;transform-origin:50% 100%;animation:pgsway 3.6s ease-in-out infinite}.pg-sw2{animation-delay:-1.8s}' +
    '@keyframes pgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pg-sp{animation:pgspray 1.4s ease-out infinite}.pg-sp2{animation-delay:.45s}' +
    '@keyframes pgdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.pg-dr{animation:pgdrip 1.8s ease-in infinite}' +
    '@keyframes pgchalk{0%,100%{opacity:.2}50%{opacity:1}}.pg-chk{animation:pgchalk 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, cls) => '<g class="pg-sw' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-3 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a4030" stroke-width="4" fill="none"/>' +
    '<path d="M' + (x + 2) + ' ' + (y - h) + 'q-18 -2 -26 10M' + (x + 2) + ' ' + (y - h) + 'q18 -4 26 8M' + (x + 2) + ' ' + (y - h) + 'q-10 -12 -22 -10M' + (x + 2) + ' ' + (y - h) + 'q10 -14 22 -8M' + (x + 2) + ' ' + (y - h) + 'q0 -12 -2 -16" stroke="#2f6a34" stroke-width="4" fill="none" stroke-linecap="round"/></g>';
  const CRIM = "#d7263d", GOLD = "#f2b134", TEAL = "#3ec1d3", RIV = "#682e85";
  const baldy = (fill, snow) => '<path d="M0 120l60 -34l40 16l70 -50l40 22l50 -28l60 34l80 -22v62H0z" fill="' + fill + '"/>' +
    '<path d="M150 66l20 -14l16 10l-10 2l-8 -4l-8 8zM240 42l10 -6l14 8l-8 0l-6 -2z" fill="' + snow + '"/>';

  /* 0. Pomona-Downtown, Metrolink Riverside Line */
  function pgstation() {
    const depot = '<rect x="210" y="96" width="180" height="62" fill="#efe2c4" stroke="#b8a27a" stroke-width="1.5"/>' +
      '<path d="M200 98l20 -18h160l20 18z" fill="#b5462e"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (222 + i * 9) + ' 82v14" stroke="#8e3220" stroke-width="1"/>').join("") +
      '<rect x="270" y="66" width="40" height="32" fill="#efe2c4" stroke="#b8a27a" stroke-width="1.5"/><path d="M264 68l26 -16l26 16z" fill="#b5462e"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (218 + i * 28) + ' 158v-26a10 10 0 0 1 20 0v26z" fill="#6a5440"/>').join("");
    const train = '<g class="anim-train"><rect x="10" y="118" width="250" height="78" rx="8" fill="#eef0f2" stroke="#7a828a" stroke-width="2"/>' +
      '<rect x="10" y="132" width="250" height="20" fill="#1d2a3a"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (22 + i * 34) + '" y="134" width="26" height="16" rx="2" fill="#5b7a96"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (22 + i * 34) + '" y="158" width="26" height="14" rx="2" fill="#5b7a96"/>').join("") +
      '<path d="M10 178h250" stroke="#2a62a8" stroke-width="5"/><path d="M10 185h250" stroke="#2fa3b8" stroke-width="3"/>' +
      '<circle cx="20" cy="188" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pg0)"/>' + baldy("#8a7c9a", "#f4f4f8") + depot +
      palm(206, 160, 70, "") + palm(392, 158, 64, " pg-sw2") +
      '<rect x="0" y="196" width="400" height="64" fill="#9a8f80"/><rect x="0" y="196" width="400" height="6" fill="#e8d84a"/><path d="M0 222h400M0 238h400" stroke="#5a544c" stroke-width="3"/>' +
      train +
      '<rect x="20" y="16" width="250" height="34" rx="3" fill="#111"/><text x="62" y="38" ' + font + ' font-size="14" fill="#fff">Pomona-Downtown</text>' +
      '<rect x="28" y="22" width="28" height="22" rx="4" fill="' + RIV + '"/><text x="42" y="37" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">RIV</text>',
      sky("pg0", "#f2a65a", "#ffe2b0"));
  }

  /* 1. A Mic and Dim Lights, downtown Pomona */
  function pgmic() {
    const bulbs = Array.from({ length: 14 }, (_, i) => { const x = 20 + i * 27, y = 28 + Math.sin(i / 2) * 8; return '<circle class="pg-flk' + (i % 3 === 1 ? " pg-f2" : i % 3 === 2 ? " pg-f3" : "") + '" cx="' + x + '" cy="' + y + '" r="4" fill="' + GOLD + '"/>'; }).join("");
    const heads = Array.from({ length: 11 }, (_, i) => '<g class="pg-snap' + (i % 3 === 1 ? " pg-n2" : i % 3 === 2 ? " pg-n3" : "") + '"><circle cx="' + (20 + i * 36) + '" cy="' + (214 + (i % 2) * 6) + '" r="13" fill="#140a0e"/><rect x="' + (6 + i * 36) + '" y="' + (226 + (i % 2) * 6) + '" width="28" height="40" rx="10" fill="#140a0e"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a0e14"/><rect x="0" y="0" width="400" height="150" fill="#2a1820"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="40" width="40" height="110" fill="#331e26" stroke="#24141a" stroke-width="2"/>').join("") +
      '<path d="M10 28q190 26 380 0" stroke="#3a2a20" stroke-width="1.5" fill="none"/>' + bulbs +
      '<path class="pg-beam" d="M180 0h40l60 196h-160z" fill="#fff3c4" opacity=".4"/>' +
      '<rect x="110" y="168" width="180" height="30" fill="#3a2418"/><rect x="110" y="164" width="180" height="6" fill="#5a3a26"/>' +
      '<path d="M200 168v-74" stroke="#bbb" stroke-width="3"/><path d="M186 168h28" stroke="#bbb" stroke-width="3"/>' +
      '<rect x="194" y="78" width="12" height="20" rx="6" fill="#222" stroke="#999" stroke-width="1.5"/>' +
      '<rect x="270" y="60" width="110" height="40" rx="4" fill="#0e0e0e" stroke="' + CRIM + '" stroke-width="2"/><text class="pg-flk" x="325" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="' + CRIM + '">A MIC AND</text><text class="pg-flk pg-f2" x="325" y="93" text-anchor="middle" ' + font + ' font-size="11" fill="' + CRIM + '">DIM LIGHTS</text>' +
      '<text x="24" y="90" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '" opacity=".75">THURSDAY</text><text x="24" y="108" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '" opacity=".75">POETRY</text>' +
      heads);
  }

  /* 2. Where the 10 and 101 meet: murals, LA River, the interchange */
  function pgriver() {
    const carsR = '<g class="pg-cr"><rect x="0" y="88" width="34" height="12" rx="4" fill="' + CRIM + '"/><rect x="6" y="84" width="20" height="6" rx="2" fill="#88b8d8"/></g>' +
      '<g class="pg-cr pg-cr2"><rect x="0" y="88" width="30" height="12" rx="4" fill="#f4f4f4"/><rect x="6" y="84" width="18" height="6" rx="2" fill="#88b8d8"/></g>';
    const carsL = '<g class="pg-cl"><rect x="0" y="122" width="34" height="12" rx="4" fill="' + TEAL + '"/><rect x="8" y="118" width="20" height="6" rx="2" fill="#88b8d8"/></g>' +
      '<g class="pg-cl pg-cl2"><rect x="0" y="122" width="38" height="12" rx="4" fill="' + GOLD + '"/><rect x="8" y="118" width="22" height="6" rx="2" fill="#88b8d8"/></g>';
    const mural = '<rect x="20" y="140" width="150" height="70" fill="#f0e6d0" stroke="#8a7a60" stroke-width="2"/>' +
      '<circle cx="60" cy="172" r="22" fill="' + GOLD + '"/>' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M' + (60 + Math.cos(a) * 26) + ' ' + (172 + Math.sin(a) * 26) + 'L' + (60 + Math.cos(a) * 34) + ' ' + (172 + Math.sin(a) * 34) + '" stroke="' + GOLD + '" stroke-width="4"/>'; }).join("") +
      '<path d="M96 206q20 -50 40 -20q14 -30 30 -10v30z" fill="' + TEAL + '"/><path d="M100 152h60M100 162h46" stroke="' + CRIM + '" stroke-width="6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pg2)"/>' +
      '<path d="M0 90q200 -40 400 0v14q-200 -40 -400 0z" fill="#b8b4ac"/>' + [60, 160, 260, 360].map(x => '<rect x="' + (x - 5) + '" y="' + (78 - (x === 160 || x === 260 ? 10 : 0)) + '" width="10" height="140" fill="#a8a49c"/>').join("") +
      '<rect x="0" y="100" width="400" height="10" fill="#c8c4bc"/><rect x="0" y="134" width="400" height="10" fill="#c8c4bc"/><rect x="0" y="110" width="400" height="24" fill="#6a6a6a"/><rect x="0" y="76" width="400" height="24" fill="#6a6a6a" opacity="0"/>' +
      carsR + carsL +
      '<rect x="300" y="40" width="60" height="30" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="330" y="54" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">10 EAST</text><text x="330" y="66" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">101 NORTH</text>' +
      mural +
      '<path d="M0 212l60 4h280l60 -4v48H0z" fill="#c4bfb4"/><rect x="0" y="232" width="400" height="16" fill="#4a7a8a"/>' +
      '<g class="pg-wt"><path d="M0 238q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#bfe6ee" stroke-width="1.5" fill="none"/></g>' +
      '<text x="200" y="230" text-anchor="middle" ' + font + ' font-size="9" fill="#6a665e">LA RIVER</text>',
      sky("pg2", "#7ab8e8", "#f6e2b8"));
  }

  /* 3. Bored of Education: the art classroom */
  function pgclass() {
    const desks = [30, 130, 230, 330].map(x => '<rect x="' + (x - 30) + '" y="196" width="60" height="10" fill="#b07a3a"/><path d="M' + (x - 24) + ' 206v40M' + (x + 24) + ' 206v40" stroke="#555" stroke-width="4"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#e8dcc0"/><rect x="0" y="186" width="400" height="74" fill="#9a8e7a"/>' +
      '<rect x="30" y="34" width="250" height="120" fill="#2e4a3a" stroke="#8a5a2a" stroke-width="6"/>' +
      '<text x="155" y="76" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#f4f4ec">DEAR</text>' +
      '<text x="155" y="104" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#f4f4ec">B<tspan fill="' + GOLD + '">ORE</tspan>D OF</text>' +
      '<text x="155" y="132" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#f4f4ec">EDUCATION,</text>' +
      '<text class="pg-chk" x="196" y="148" font-family="Helvetica, Arial, sans-serif" font-style="italic" font-size="11" fill="' + GOLD + '">so are we</text>' +
      '<rect x="40" y="154" width="230" height="6" fill="#8a5a2a"/>' +
      '<circle cx="330" cy="52" r="22" fill="#fff" stroke="#333" stroke-width="3"/><path d="M330 52v-12" stroke="#333" stroke-width="3"/><path class="pg-hand" d="M330 52l12 6" stroke="' + CRIM + '" stroke-width="2"/>' +
      '<path d="M310 186l20 -96l20 96M318 150h24" stroke="#7a4a1a" stroke-width="4" fill="none"/><rect x="304" y="96" width="52" height="42" fill="#fff" stroke="#7a4a1a" stroke-width="2"/>' +
      '<circle cx="320" cy="114" r="8" fill="' + CRIM + '"/><circle cx="338" cy="120" r="8" fill="' + TEAL + '"/><circle cx="330" cy="106" r="6" fill="' + GOLD + '"/>' +
      desks,
      "");
  }

  /* 4. 2nd St and Main St, Pomona Arts Colony, Mount Baldy behind */
  function pgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#pg4)"/>' + baldy("#6a6290", "#f7f7fb") +
      '<rect x="0" y="120" width="400" height="106" fill="#8a3e2c"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#6e2e20" stroke-width="1"/>').join("") +
      Array.from({ length: 52 }, (_, i) => '<path d="M' + ((i % 13) * 31 + ((Math.floor(i / 13) % 2) * 15)) + ' ' + (120 + Math.floor(i / 13) * 26) + 'v8" stroke="#6e2e20" stroke-width="1"/>').join("") +
      tag("PROPAGANDA", 16, 186, 40, CRIM, -5) + tag("CRIMSON CORD", 30, 212, 18, GOLD, -3) + tag("PROP", 200, 214, 26, TEAL, -6) + tag("POMONA", 280, 214, 18, "#fff", -4) +
      '<g class="pg-dr"><path d="M70 190q-4 6 0 10q4 -4 0 -10z" fill="' + CRIM + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="372" y="98" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 100, 104, "2nd St") + sign(296, 126, 104, "Main St") +
      '<g class="pg-sp"><circle cx="186" cy="160" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="pg-sp pg-sp2"><circle cx="192" cy="154" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("pg4", "#3a5aa8", "#f2a86a"));
  }

  window.SCENES = { pgstation: pgstation, pgmic: pgmic, pgriver: pgriver, pgclass: pgclass, pgcorner: pgcorner };
})();
