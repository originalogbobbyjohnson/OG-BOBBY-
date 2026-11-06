/* Shabazz the Disciple game (NYC map, Brooklyn: Red Hook). Five small animated SVGs, 400 x 260. CSS classes are prefixed "shz-".
   1. Red Hook (Atlantic Basin) ferry landing: the boat pulling in at the float, the old brick Red Hook warehouses behind (Red Hook has no subway).
   2. Red Hook Houses: the low brick buildings and the back staircase that was the stage ("everyday we did a show, the staircase was the stage").
   3. Red Hook Day in Red Hook Park: the stage on the ballfield, speakers pumping, string lights ("I welcome y'all to Red Hook Day").
   4. Valentino Pier at sundown: the wooden pier at the end of Coffey St, a tug crossing the harbor.
   5. Lorraine St and Columbia St at the Red Hook Houses: green signs, his name on the wall, the long concrete Grain Terminal silos behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes shz-flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.shz-flk{animation:shz-flick 2.4s infinite}.shz-flk2{animation-delay:1.1s}' +
    '@keyframes shz-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.shz-cone{transform-box:fill-box;transform-origin:50% 50%;animation:shz-pulse .45s ease-in-out infinite}.shz-cone2{animation-delay:.22s}' +
    '@keyframes shz-note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.shz-note{animation:shz-note 2.6s linear infinite}.shz-note2{animation-delay:-.9s}.shz-note3{animation-delay:-1.7s}' +
    '@keyframes shz-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.shz-bob{animation:shz-bob .5s ease-in-out infinite}.shz-bob2{animation-delay:-.25s}' +
    '@keyframes shz-spin{to{transform:rotate(360deg)}}.shz-rec{transform-box:fill-box;transform-origin:50% 50%;animation:shz-spin 1.6s linear infinite}' +
    '@keyframes shz-wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.shz-wv{animation:shz-wave 3.4s ease-in-out infinite}.shz-wv2{animation-delay:-1.7s}' +
    '@keyframes shz-tug{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.shz-tug{animation:shz-tug 16s linear infinite}' +
    '@keyframes shz-gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.shz-gull{animation:shz-gull 10s linear infinite}' +
    '@keyframes shz-flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.shz-wing{transform-box:fill-box;transform-origin:50% 100%;animation:shz-flap .5s ease-in-out infinite}' +
    '@keyframes shz-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.shz-bal{transform-box:fill-box;transform-origin:50% 100%;animation:shz-sway 2.2s ease-in-out infinite}.shz-bal2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f0b43c", BRICK = "#a8452f", HARBOR = "#3f86ad", CREAM = "#f6efe2", SIGN = "#0f6b3a";
  /* brick courses on a rect */
  const courses = (x, y, w, h, c, step) => { let b = ""; for (let yy = y + (step || 6); yy < y + h; yy += (step || 6)) b += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".8"/>'; return b; };
  const windows = (x, y, cols, rows, dx, dy, lit) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) === 0; s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="8" height="10" fill="' + (on && lit ? "#ffd98a" : "#2a2f3a") + '"' + (on && lit ? ' class="shz-flk' + (c % 2 ? " shz-flk2" : "") + '"' : "") + '/>'; } return s; };

  /* 1. Red Hook (Atlantic Basin) ferry landing */
  function ferry() {
    let wh = "";
    [[0, 92, "#8e4a34"], [96, 80, "#7a3f2c"], [182, 104, "#94553a"], [292, 108, "#80442f"]].forEach(([x, w, col], i) => {
      wh += '<rect x="' + x + '" y="58" width="' + w + '" height="78" fill="' + col + '"/>' + courses(x, 58, w, 78, "#5d2d1e", 7) +
        '<rect x="' + x + '" y="54" width="' + w + '" height="6" fill="#4a2418"/>';
      for (let c = x + 10; c < x + w - 12; c += 22) wh += '<path d="M' + c + ' 104v-14a6 6 0 0 1 12 0v14z" fill="#2a1d18"/><path d="M' + c + ' 104v-14a6 6 0 0 1 12 0v14z" fill="#ffd98a" opacity="' + (i % 2 ? ".18" : ".32") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#shz1)"/>' + stars(10) + wh +
      /* crane on the basin */
      '<path d="M338 56V14h4v42M340 16l46 10M340 16l-24 8" stroke="#c9a24a" stroke-width="3" fill="none"/><path d="M384 26v18" stroke="#9aa3ab" stroke-width="1.2"/>' +
      /* the bulkhead and water */
      '<rect x="0" y="136" width="400" height="10" fill="#5f6166"/><rect x="0" y="146" width="400" height="114" fill="#1d3d55"/>' +
      '<g class="shz-wv"><path d="M0 176q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#5c96bd" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="shz-wv shz-wv2"><path d="M0 222q20-5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#5c96bd" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* the float and its gangway */
      '<path d="M300 136l40 30" stroke="#9aa3ab" stroke-width="5"/><rect x="316" y="164" width="84" height="16" fill="#4b5563"/><rect x="316" y="160" width="84" height="5" fill="#d9dde3"/>' +
      '<rect x="330" y="128" width="4" height="34" fill="#3b3f46"/><rect x="384" y="128" width="4" height="34" fill="#3b3f46"/><path d="M326 130h66l-4-8h-58z" fill="#2c6e9c"/>' +
      /* landing sign */
      '<rect x="234" y="92" width="132" height="34" rx="3" fill="#111" stroke="#2b2b2b" stroke-width="2"/>' +
      '<text x="300" y="107" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Red Hook</text><text x="300" y="120" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd4da">Atlantic Basin</text>' +
      '<rect x="296" y="126" width="4" height="10" fill="#333"/>' +
      /* the boat pulling in */
      '<g class="anim-train">' +
        '<path d="M20 196h246l-14 22H40z" fill="#f2f4f7" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="40" y="168" width="200" height="28" rx="4" fill="#e9edf2" stroke="#6b7280" stroke-width="1.5"/>' +
        [52, 80, 108, 136, 164, 192].map(x => '<rect x="' + x + '" y="174" width="22" height="14" rx="2" fill="' + HARBOR + '"/>').join("") +
        '<rect x="90" y="152" width="110" height="18" rx="3" fill="#e9edf2" stroke="#6b7280" stroke-width="1.5"/><rect x="100" y="156" width="90" height="9" rx="2" fill="#244f6e"/>' +
        '<rect x="20" y="206" width="246" height="4" fill="' + HARBOR + '"/><circle cx="256" cy="186" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<g class="shz-gull"><path d="M30 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none" class="shz-wing"/></g>',
      sky("shz1", "#0a1220", "#3a3350"));
  }

  /* 2. Red Hook Houses: the back staircase was the stage */
  function houses() {
    const bldg = (x, w, h, col) => '<rect x="' + x + '" y="' + (200 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>' + courses(x, 200 - h, w, h, "#6a2c1d", 6) +
      '<rect x="' + x + '" y="' + (196 - h) + '" width="' + w + '" height="5" fill="#d8cbb3"/>' + windows(x + 8, 210 - h, Math.floor((w - 10) / 16), Math.floor((h - 40) / 18), 16, 18, true);
    return svg(
      '<rect width="400" height="260" fill="url(#shz2)"/>' + stars(14) +
      bldg(0, 150, 138, "#9a4632") + bldg(250, 150, 126, "#8f402c") +
      /* the middle wing with the back staircase */
      '<rect x="150" y="70" width="100" height="130" fill="#a54b35"/>' + courses(150, 70, 100, 130, "#6a2c1d", 6) + '<rect x="150" y="66" width="100" height="5" fill="#d8cbb3"/>' +
      '<rect x="182" y="150" width="36" height="50" fill="#3a2a24"/><rect x="186" y="154" width="28" height="30" fill="#ffd98a" opacity=".35"/>' +
      '<rect x="176" y="146" width="48" height="5" fill="#d8cbb3"/>' +
      '<rect x="162" y="84" width="10" height="14" fill="#2a2f3a"/><rect x="228" y="84" width="10" height="14" fill="#ffd98a" class="shz-flk"/><rect x="162" y="112" width="10" height="14" fill="#ffd98a" class="shz-flk shz-flk2"/><rect x="228" y="112" width="10" height="14" fill="#2a2f3a"/>' +
      /* the staircase (the stage) */
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (170 - i * 4) + '" y="' + (200 + i * 8) + '" width="' + (60 + i * 8) + '" height="8" fill="' + (i % 2 ? "#b9b2a6" : "#cfc8bb") + '" stroke="#8a8478" stroke-width=".8"/>').join("") +
      '<path d="M166 200v42M234 200v42" stroke="#2b2f36" stroke-width="3"/><path d="M162 204h8M230 204h8" stroke="#2b2f36" stroke-width="2"/>' +
      /* the walk and trees */
      '<rect x="0" y="240" width="400" height="20" fill="#6c6f75"/><rect x="0" y="200" width="160" height="40" fill="#2f3d2c"/><rect x="240" y="200" width="160" height="40" fill="#2f3d2c"/>' +
      '<circle cx="60" cy="196" r="26" fill="#2e5a34"/><rect x="58" y="206" width="4" height="34" fill="#4a3426"/><circle cx="340" cy="194" r="28" fill="#2e5a34"/><rect x="338" y="206" width="4" height="34" fill="#4a3426"/>' +
      /* the boombox on the top step */
      '<g transform="translate(176 172)"><rect x="0" y="0" width="48" height="26" rx="4" fill="#2b2f36" stroke="#111" stroke-width="1.5"/><path d="M8 0v-6h32v6" stroke="#9aa3ab" stroke-width="2" fill="none"/>' +
        '<circle cx="11" cy="15" r="7" fill="#555" class="shz-cone"/><circle cx="11" cy="15" r="3" fill="#222"/><circle cx="37" cy="15" r="7" fill="#555" class="shz-cone shz-cone2"/><circle cx="37" cy="15" r="3" fill="#222"/>' +
        '<rect x="19" y="5" width="10" height="6" rx="1" fill="' + GOLD + '"/></g>' +
      /* music notes rising off the stairs */
      '<g class="shz-note"><text x="200" y="166" ' + font + ' font-size="16" fill="' + GOLD + '">&#9834;</text></g>' +
      '<g class="shz-note shz-note2"><text x="214" y="160" ' + font + ' font-size="13" fill="' + CREAM + '">&#9835;</text></g>' +
      '<g class="shz-note shz-note3"><text x="186" y="162" ' + font + ' font-size="12" fill="' + GOLD + '">&#9834;</text></g>',
      sky("shz2", "#0b0d1c", "#2f2a48"));
  }

  /* 3. Red Hook Day in Red Hook Park: the stage on the ballfield */
  function redhookday() {
    let lights = "", crowd = "";
    for (let i = 0; i < 17; i++) { const x = 8 + i * 24, y = 40 + Math.round(10 * Math.sin(i / 2.6)); lights += '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + ["#ffd98a", "#ff8a65", "#7fd1ff"][i % 3] + '" class="shz-flk' + (i % 2 ? " shz-flk2" : "") + '"/>'; }
    for (let i = 0; i < 13; i++) { const x = 12 + i * 30; crowd += '<g class="shz-bob' + (i % 2 ? " shz-bob2" : "") + '"><circle cx="' + x + '" cy="214" r="8" fill="#1a1720"/><rect x="' + (x - 10) + '" y="220" width="20" height="40" rx="8" fill="#1a1720"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#shz3)"/>' +
      /* ballfield, backstop and light tower */
      '<rect x="0" y="150" width="400" height="110" fill="#2f6b38"/><path d="M0 170q200-30 400 0v90H0z" fill="#b5844f" opacity=".55"/>' +
      '<path d="M18 150V78h4v72M10 80h20v-8H10z" fill="#9aa3ab"/><rect x="8" y="66" width="24" height="10" fill="#fff6c2" class="shz-flk"/>' +
      '<path d="M330 150V96q30-10 60 0v54" stroke="#9aa3ab" stroke-width="2" fill="none"/>' + (() => { let f = ""; for (let x = 334; x < 390; x += 6) f += '<path d="M' + x + ' 98v52" stroke="#9aa3ab" stroke-width=".6"/>'; for (let y = 104; y < 150; y += 6) f += '<path d="M330 ' + y + 'h60" stroke="#9aa3ab" stroke-width=".6"/>'; return f; })() +
      /* string lights */
      '<path d="M0 36q100 26 200 6t200 2" stroke="#2b2b2b" stroke-width="1" fill="none"/>' + lights +
      /* the stage */
      '<rect x="96" y="118" width="208" height="12" fill="#3b2a20"/><rect x="96" y="130" width="208" height="30" fill="#2a1d16"/>' +
      '<path d="M90 118V70h220v48" stroke="#555" stroke-width="4" fill="none"/><rect x="104" y="72" width="192" height="16" fill="' + BRICK + '"/>' +
      '<text x="200" y="84.5" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="2" fill="' + GOLD + '">RED HOOK DAY</text>' +
      /* speakers */
      ['<g transform="translate(104 88)">', '<g transform="translate(268 88)">'].map((g, i) => g + '<rect width="28" height="30" fill="#1b1b1f" stroke="#444" stroke-width="1.5"/><circle cx="14" cy="10" r="6" fill="#3a3a40" class="shz-cone' + (i ? " shz-cone2" : "") + '"/><circle cx="14" cy="22" r="5" fill="#3a3a40" class="shz-cone' + (i ? "" : " shz-cone2") + '"/></g>').join("") +
      /* DJ table with two spinning records */
      '<rect x="160" y="104" width="80" height="14" fill="#444a52"/><g class="shz-rec"><circle cx="180" cy="104" r="9" fill="#111"/><circle cx="180" cy="104" r="3" fill="' + GOLD + '"/></g><g class="shz-rec"><circle cx="220" cy="104" r="9" fill="#111"/><circle cx="220" cy="104" r="3" fill="' + BRICK + '"/></g>' +
      /* balloons */
      '<g class="shz-bal"><path d="M60 130v-40" stroke="#ddd" stroke-width=".8"/><ellipse cx="60" cy="84" rx="8" ry="10" fill="' + GOLD + '"/></g>' +
      '<g class="shz-bal shz-bal2"><path d="M74 132v-34" stroke="#ddd" stroke-width=".8"/><ellipse cx="74" cy="92" rx="8" ry="10" fill="' + BRICK + '"/></g>' +
      '<g class="shz-bal shz-bal2"><path d="M326 132v-38" stroke="#ddd" stroke-width=".8"/><ellipse cx="326" cy="88" rx="8" ry="10" fill="' + HARBOR + '"/></g>' +
      crowd,
      sky("shz3", "#141a3a", "#e0875a"));
  }

  /* 4. Valentino Pier at sundown */
  function pier() {
    let rail = "";
    for (let x = 150; x <= 392; x += 22) rail += '<rect x="' + x + '" y="170" width="3" height="22" fill="#5a4636"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#shz4)"/>' +
      '<circle cx="90" cy="120" r="30" fill="#ffd27a" opacity=".95"/><circle cx="90" cy="120" r="44" fill="#ffd27a" opacity=".18"/>' +
      '<path d="M0 104q60-8 110 0" stroke="#ffb07a" stroke-width="4" opacity=".5" fill="none"/><path d="M230 70q60-8 120 0" stroke="#ffb07a" stroke-width="5" opacity=".45" fill="none"/>' +
      /* far shore: the low hills of the harbor islands */
      '<path d="M0 140q50-10 110-4t130-2t160 4v8H0z" fill="#3b3550"/>' +
      /* water */
      '<rect x="0" y="146" width="400" height="114" fill="#2c4f6e"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (70 + (i % 2) * 6) + ' ' + (154 + i * 7) + 'h' + (40 - i * 5) + '" stroke="#ffd27a" stroke-width="2" stroke-linecap="round" opacity="' + (0.6 - i * 0.08) + '"/>').join("") +
      '<g class="shz-wv"><path d="M0 200q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#79a9cc" stroke-width="2" fill="none" opacity=".5"/></g>' +
      '<g class="shz-wv shz-wv2"><path d="M0 238q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#79a9cc" stroke-width="2" fill="none" opacity=".45"/></g>' +
      /* the tug crossing */
      '<g class="shz-tug"><path d="M0 160h60l-8 10H6z" fill="#b8322a"/><rect x="14" y="146" width="26" height="14" fill="#f2f4f7"/><rect x="18" y="138" width="14" height="8" fill="#f2f4f7"/><rect x="22" y="130" width="5" height="8" fill="#222"/>' +
        '<rect x="18" y="150" width="6" height="5" fill="#2c4f6e"/><rect x="28" y="150" width="6" height="5" fill="#2c4f6e"/></g>' +
      /* the wooden pier */
      '<path d="M140 192h260v14H140z" fill="#8a6a4c"/><path d="M140 192h260" stroke="#c9a77c" stroke-width="2"/>' +
      '<path d="M150 170h250" stroke="#5a4636" stroke-width="3"/>' + rail +
      [160, 210, 260, 310, 360].map(x => '<rect x="' + x + '" y="206" width="6" height="54" fill="#4a3a30"/>').join("") +
      /* lamp posts */
      '<rect x="196" y="120" width="4" height="72" fill="#2b2f36"/><circle cx="198" cy="118" r="5" fill="#fff6c2" class="shz-flk"/>' +
      '<rect x="336" y="120" width="4" height="72" fill="#2b2f36"/><circle cx="338" cy="118" r="5" fill="#fff6c2" class="shz-flk shz-flk2"/>' +
      /* a fishing rod over the rail */
      '<path d="M290 192l30-40" stroke="#222" stroke-width="2"/><path d="M320 152q4 30 2 60" stroke="#ddd" stroke-width=".7" fill="none"/>' +
      '<g class="shz-gull"><path d="M30 60q6-6 12 0q6-6 12 0" stroke="#2b2b2b" stroke-width="2" fill="none" class="shz-wing"/></g>',
      sky("shz4", "#2b2a5a", "#f08a5d"));
  }

  /* 5. Lorraine St and Columbia St: green signs, his name on the wall, the Grain Terminal behind */
  function corner() {
    let silos = "";
    for (let x = 30; x < 290; x += 22) silos += '<rect x="' + x + '" y="44" width="20" height="96" rx="9" fill="#b9b4aa"/><rect x="' + (x + 3) + '" y="48" width="4" height="88" fill="#d4d0c7" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#shz5)"/>' + stars(12) +
      /* the Grain Terminal: a long row of concrete silos with the tall headhouse */
      '<rect x="24" y="40" width="270" height="8" fill="#9a958c"/>' + silos + '<rect x="250" y="10" width="44" height="130" fill="#a8a399"/>' + windows(256, 18, 2, 5, 18, 22, false) +
      '<rect x="246" y="6" width="52" height="6" fill="#8a857c"/>' +
      /* a Red Hook Houses wing on the right */
      '<rect x="296" y="70" width="104" height="160" fill="#9a4632"/>' + courses(296, 70, 104, 160, "#6a2c1d", 6) + '<rect x="300" y="190" width="30" height="40" fill="#3a2a24"/><rect x="304" y="194" width="22" height="22" fill="#ffd98a" opacity=".35"/>' + '<rect x="296" y="66" width="104" height="5" fill="#d8cbb3"/>' + windows(304, 80, 6, 4, 16, 20, true) +
      /* the wall */
      '<rect x="0" y="140" width="300" height="90" fill="' + BRICK + '"/>' + courses(0, 140, 300, 90, "#7a2f1f", 8) +
      tag("SHABAZZ", 16, 196, 46, GOLD, -6) + tag("RED HOOK DAY", 150, 222, 19, CREAM, -4) + tag("RAHSHASHA", 40, 222, 17, "#7fd1ff", -3) +
      /* sidewalk and street */
      '<rect x="0" y="230" width="400" height="30" fill="#55575c"/><rect x="0" y="230" width="400" height="4" fill="#8a8c90"/>' +
      /* the corner sign post */
      '<rect x="356" y="96" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="306" y="98" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Lorraine St</text>' +
      '<rect x="306" y="124" width="92" height="22" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="352" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Columbia St</text>' +
      '<circle class="shz-flk" cx="358" cy="92" r="4" fill="#fff6c2"/>' +
      '<g class="shz-gull"><path d="M30 70q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none" class="shz-wing"/></g>',
      sky("shz5", "#0b0d1c", "#34304f"));
  }

  window.SCENES = { ferry: ferry, houses: houses, redhookday: redhookday, pier: pier, corner: corner };
})();
