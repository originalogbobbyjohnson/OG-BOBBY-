/* Joyner Lucas (Worcester, Boston + New England) opening scenes. Each one is a small animated SVG, 400 x 260. CSS classes prefixed jl- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes jlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.jl-flk{animation:jlflick 2.2s infinite}.jl-flk2{animation-delay:.7s}' +
    '@keyframes jlroll{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.jl-car{animation:jlroll 7s linear infinite}.jl-car2{animation-duration:10s;animation-delay:-4s}' +
    '@keyframes jlshim{0%,100%{opacity:.2}50%{opacity:.75}}.jl-shim{animation:jlshim 2.4s ease-in-out infinite}.jl-shim2{animation-delay:1.2s}' +
    '@keyframes jldrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.jl-bird{animation:jldrift 12s linear infinite}.jl-bird2{animation-delay:-6s}' +
    '@keyframes jlswim{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.jl-duck{animation:jlswim 6s ease-in-out infinite}.jl-duck2{animation-delay:-3s}' +
    '@keyframes jlwave{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.jl-flag{transform-box:fill-box;transform-origin:0 50%;animation:jlwave 1.6s ease-in-out infinite}' +
    '@keyframes jlhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.jl-hop{animation:jlhop .9s ease-in-out infinite}.jl-hop2{animation-delay:.3s}.jl-hop3{animation-delay:.6s}' +
    '@keyframes jlbeam{0%,100%{opacity:.15}50%{opacity:.55}}.jl-beam{animation:jlbeam 3s ease-in-out infinite}.jl-beam2{animation-delay:1.5s}' +
    '@keyframes jlblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.jl-blk{animation:jlblink 1.4s steps(1) infinite}' +
    '@keyframes jlfall{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.jl-leaf{animation:jlfall 7s linear infinite}.jl-leaf2{animation-delay:-3s}.jl-leaf3{animation-delay:-5s}' +
    '@keyframes jlswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jl-hand{transform-box:view-box;transform-origin:200px 60px;animation:jlswing 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c) => { let b = ""; for (let y = y0; y < y1; y += 13) for (let x = ((y - y0) / 13) % 2 ? -18 : 0; x < 400; x += 36) b += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="' + c + '"/>'; return b; };
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r + 12) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '" opacity=".85"/>';
  /* MBTA-style line pill */
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 6.2 + 14) + '" height="14" rx="7" fill="' + color + '"/><text x="' + (x + (label.length * 6.2 + 14) / 2) + '" y="' + (y + 10.4) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">' + label + '</text>';
  const RED = "#ff3b3b", GOLD = "#f5c518", CYAN = "#7fdbff", CR = "#80276c";

  /* Union Station tower: white, square shaft, open arched belfry, small dome + finial (the twin towers were rebuilt in 2000) */
  const ustower = (x, base, h, c) =>
    '<rect x="' + x + '" y="' + (base - h) + '" width="26" height="' + h + '" fill="' + c + '"/>' +
    '<rect x="' + (x - 3) + '" y="' + (base - h - 4) + '" width="32" height="6" fill="' + c + '"/>' +
    '<rect x="' + (x + 2) + '" y="' + (base - h - 30) + '" width="22" height="26" fill="' + c + '"/>' +
    '<path d="M' + (x + 6) + ' ' + (base - h - 6) + 'v-14q3-6 6 0v14zM' + (x + 14) + ' ' + (base - h - 6) + 'v-14q3-6 6 0v14z" fill="#3a3550"/>' +
    '<rect x="' + (x) + '" y="' + (base - h - 34) + '" width="26" height="5" fill="' + c + '"/>' +
    '<path d="M' + (x + 3) + ' ' + (base - h - 34) + 'q10-18 20 0z" fill="' + c + '"/>' +
    '<rect x="' + (x + 12) + '" y="' + (base - h - 50) + '" width="2" height="12" fill="' + c + '"/><circle cx="' + (x + 13) + '" cy="' + (base - h - 51) + '" r="2" fill="' + GOLD + '"/>';

  /* 1. Worcester Union Station: the white Beaux-Arts station and its twin towers, MBTA Commuter Rail train pulling in */
  function station() {
    const coach = (x) => '<rect x="' + x + '" y="136" width="150" height="52" rx="4" fill="#c9ccd1" stroke="#555" stroke-width="1.5"/>' +
      '<rect x="' + x + '" y="166" width="150" height="6" fill="' + CR + '"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 28) + '" y="142" width="20" height="10" rx="2" fill="#26313d"/><rect x="' + (x + 10 + i * 28) + '" y="155" width="20" height="9" rx="2" fill="#26313d"/>').join("") +
      '<circle cx="' + (x + 24) + '" cy="190" r="5" fill="#222"/><circle cx="' + (x + 126) + '" cy="190" r="5" fill="#222"/>';
    const loco = '<path d="M306 188v-48q0-6 6-6h56q14 0 20 18v36z" fill="#d2d5da" stroke="#555" stroke-width="1.5"/><rect x="306" y="166" width="82" height="6" fill="' + CR + '"/>' +
      '<path d="M358 140h12q10 0 14 14h-26z" fill="#26313d"/><circle cx="380" cy="178" r="3.5" fill="#fff6c2" class="jl-flk"/><circle cx="330" cy="190" r="5" fill="#222"/><circle cx="370" cy="190" r="5" fill="#222"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js1)"/>' + stars(14) +
      /* station building */
      ustower(92, 112, 46, "#eef0ea") + ustower(282, 112, 46, "#eef0ea") +
      '<rect x="70" y="70" width="260" height="56" fill="#f1efe6"/><rect x="66" y="66" width="268" height="7" fill="#d8d4c6"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (126 + i * 30) + ' 120v-26q10-14 20 0v26z" fill="#ffd98a" opacity=".75" class="' + (i % 2 ? "jl-flk jl-flk2" : "") + '"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#59606b"/>' +
      '<g class="anim-train">' + coach(6) + coach(156) + loco + '</g>' +
      '<rect x="0" y="198" width="400" height="6" fill="#e8c547"/><rect x="0" y="204" width="400" height="56" fill="#7c7a74"/>' +
      /* station sign */
      '<rect x="104" y="216" width="192" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="239" text-anchor="middle" ' + F + ' font-weight="700" font-size="17" fill="#fff">Worcester</text>' +
      pill(18, 224, CR, "COMMUTER RAIL") +
      '<text x="350" y="236" text-anchor="middle" ' + F + ' font-weight="700" font-size="8" fill="#fff">UNION STATION</text>' +
      '<text x="350" y="246" text-anchor="middle" ' + F + ' font-size="7" fill="#ddd">FRAMINGHAM / WORCESTER</text>',
      sky("js1", "#0e1022", "#38305a"));
  }

  /* 2. DCU Center, downtown Worcester: the arena's glass front lit up for the hometown tour finale, crowd jumping */
  function arena() {
    let crowd = "";
    for (let i = 0; i < 14; i++) crowd += '<g class="jl-hop ' + ["", "jl-hop2", "jl-hop3"][i % 3] + '"><rect x="' + (10 + i * 28) + '" y="214" width="16" height="30" rx="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/><circle cx="' + (18 + i * 28) + '" cy="208" r="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/></g>';
    let glass = "";
    for (let x = 120; x < 340; x += 22) glass += '<rect x="' + x + '" y="62" width="18" height="104" fill="#7fb7d9" opacity="' + (x % 44 ? .55 : .35) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js2)"/>' + stars(10) +
      '<rect x="0" y="40" width="120" height="166" fill="#8a4a36"/>' + bricks(44, 204, "#9a5640") +
      '<rect x="112" y="44" width="288" height="162" fill="#2b3442"/>' + glass +
      '<rect x="112" y="40" width="288" height="8" fill="#c9ced6"/>' +
      '<rect class="jl-beam" x="140" y="0" width="30" height="70" fill="' + CYAN + '" opacity=".3" transform="skewX(-14)"/><rect class="jl-beam jl-beam2" x="300" y="0" width="30" height="70" fill="' + RED + '" opacity=".3" transform="skewX(14)"/>' +
      /* marquee */
      '<rect x="20" y="78" width="84" height="60" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="62" y="98" text-anchor="middle" ' + A + ' font-size="13" fill="' + GOLD + '">TONIGHT</text>' +
      '<text x="62" y="114" text-anchor="middle" ' + A + ' font-size="12" fill="' + RED + '" class="jl-flk">JOYNER</text>' +
      '<text x="62" y="130" text-anchor="middle" ' + F + ' font-weight="700" font-size="7.5" fill="#fff">HOMETOWN SHOW</text>' +
      '<text x="256" y="190" text-anchor="middle" ' + A + ' font-size="20" fill="#e9edf2" letter-spacing="2">DCU CENTER</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a40"/>' + crowd +
      '<text x="200" y="256" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="' + GOLD + '">NOT NOW, I\'M BUSY TOUR · THE FINALE AT HOME</text>',
      sky("js2", "#0c0b1a", "#2a2348"));
  }

  /* 3. South High Community School, Worcester: low modern brick school, banner, flag waving, school bus rolling past */
  function school() {
    let win = "";
    for (let x = 40; x < 380; x += 34) win += '<rect x="' + x + '" y="112" width="24" height="16" fill="#cfe6ff" opacity=".8"/><rect x="' + x + '" y="140" width="24" height="16" fill="#cfe6ff" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js3)"/>' +
      '<circle cx="330" cy="46" r="18" fill="#ffe7a0"/>' +
      tree(20, 120, 22) + tree(388, 116, 24, "#4f8a3a") +
      '<rect x="24" y="98" width="356" height="82" fill="#a8553c"/>' + win +
      '<rect x="20" y="92" width="364" height="8" fill="#e7e2d6"/>' +
      '<rect x="164" y="74" width="72" height="26" fill="#e7e2d6"/>' +
      '<text x="200" y="91" text-anchor="middle" ' + A + ' font-size="12" fill="#7a1c1c">SOUTH HIGH</text>' +
      '<rect x="176" y="148" width="48" height="32" fill="#2a3540"/><path d="M200 148v32" stroke="#cfe6ff" stroke-width="1.5"/>' +
      '<rect x="70" y="56" width="3" height="44" fill="#ccc"/><rect class="jl-flag" x="73" y="56" width="34" height="20" fill="' + RED + '"/><text x="76" y="70" ' + F + ' font-weight="700" font-size="9" fill="#fff" class="jl-flag">SOUTH</text>' +
      '<rect x="0" y="180" width="400" height="12" fill="#5d8a46"/><rect x="0" y="192" width="400" height="68" fill="#4a4a50"/><path d="M0 226h400" stroke="#e8c547" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="jl-car"><rect x="0" y="198" width="86" height="28" rx="4" fill="#f2b705"/><rect x="6" y="203" width="64" height="10" fill="#2a3540"/><rect x="72" y="203" width="12" height="12" fill="#2a3540"/><rect x="0" y="216" width="86" height="3" fill="#222"/><circle cx="16" cy="228" r="5" fill="#111"/><circle cx="70" cy="228" r="5" fill="#111"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">SOUTH HIGH COMMUNITY SCHOOL · WORCESTER</text>',
      sky("js3", "#7fb0dc", "#f1d9a8"));
  }

  /* 4. Elm Park, near Dewey St: the pond with its low stone-and-iron footbridge, ducks gliding, autumn elms */
  function elmpark() {
    let trees = "";
    [[16, 104, 30, "#c46a2a"], [70, 96, 26, "#d9a03a"], [330, 98, 30, "#b8462a"], [388, 108, 26, "#d9a03a"], [150, 100, 22, "#4f7a3a"], [252, 98, 24, "#6b8a3a"]].forEach(t => trees += tree(t[0], t[1], t[2], t[3]));
    let shim = "";
    for (let i = 0; i < 10; i++) shim += '<path class="jl-shim ' + (i % 2 ? "jl-shim2" : "") + '" d="M' + ((i * 61) % 360 + 10) + ' ' + (166 + (i * 17) % 70) + 'h' + (14 + i % 3 * 6) + '" stroke="#d6ecff" stroke-width="1.4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#js4)"/>' + trees +
      '<rect x="0" y="134" width="400" height="20" fill="#5d8a46"/>' +
      '<rect x="0" y="152" width="400" height="108" fill="#3d6f8c"/>' + shim +
      /* footbridge: low arch, stone abutments, iron railing */
      '<path d="M100 170q100-40 200 0v8q-100-34-200 0z" fill="#8f8a80"/>' +
      '<path d="M100 170q100-40 200 0" stroke="#2b2b2b" stroke-width="2" fill="none" transform="translate(0 -12)"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => { const x = 108 + i * 23; const y = 170 - 40 * (1 - Math.pow((x - 200) / 100, 2)) * .5; return '<path d="M' + x + ' ' + (y - 12) + 'v12" stroke="#2b2b2b" stroke-width="1.6"/>'; }).join("") +
      '<rect x="88" y="164" width="18" height="20" fill="#7a756c"/><rect x="294" y="164" width="18" height="20" fill="#7a756c"/>' +
      '<g class="jl-duck"><path d="M60 214q10-10 22 0z" fill="#f1f1f1"/><circle cx="82" cy="208" r="4" fill="#2f6b3a"/><path d="M85 208l5 1-5 1z" fill="#e8a33a"/></g>' +
      '<g class="jl-duck jl-duck2"><path d="M250 232q10-10 22 0z" fill="#d9cdb4"/><circle cx="272" cy="226" r="4" fill="#8a6a4a"/><path d="M275 226l5 1-5 1z" fill="#e8a33a"/></g>' +
      '<rect class="jl-leaf" x="120" y="0" width="5" height="4" fill="#d9a03a"/><rect class="jl-leaf jl-leaf2" x="40" y="0" width="5" height="4" fill="#c46a2a"/><rect class="jl-leaf jl-leaf3" x="360" y="0" width="5" height="4" fill="#e0b84a"/>' +
      '<path class="jl-bird" d="M0 50q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + A + ' font-size="15" fill="#fff">ELM PARK · WORCESTER</text>',
      sky("js4", "#8fbfe0", "#f3dcae"));
  }

  /* Worcester City Hall clock tower (pale granite, square tower with clock, belfry, pyramidal cap) for the skyline */
  const cityhall = (x, base, s) =>
    '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')">' +
    '<rect x="-60" y="-40" width="120" height="40" fill="#cfc8b6"/><rect x="-14" y="-140" width="28" height="100" fill="#d7d0bd"/>' +
    '<circle cx="0" cy="-118" r="9" fill="#f6efd8"/><path d="M0 -118v-6M0 -118l4 3" stroke="#333" stroke-width="1.5"/>' +
    '<rect x="-17" y="-150" width="34" height="10" fill="#bfb8a4"/><path d="M-10 -150v-14h20v14" fill="#d7d0bd"/>' +
    '<path d="M-14 -164l14-26 14 26z" fill="#6f7a74"/>' +
    [-44, -28, 28, 44].map(d => '<rect x="' + (d - 4) + '" y="-32" width="8" height="14" fill="#ffd98a" opacity=".7"/>').join("") + '</g>';

  /* 5. Dewey St & Chandler St: the honorary "Joyner Lucas Ave" sign, his name on the brick, City Hall's clock tower behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="92" fill="url(#js5)"/>' + stars(8) + cityhall(150, 92, .52) +
      '<rect x="230" y="60" width="40" height="32" fill="#151a24"/><rect x="40" y="66" width="46" height="26" fill="#151a24"/>' +
      bricks(92, 212, "#5a2e22") +
      tag("JOYNER", 20, 172, 46, RED, -5) + tag("NOT NOW", 34, 204, 20, CYAN, -3) + tag("FILM SKOOL", 24, 124, 18, GOLD, -7) +
      '<rect x="0" y="212" width="400" height="48" fill="#8d8b85"/><rect x="0" y="210" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="jl-car jl-car2"><rect x="0" y="236" width="50" height="16" rx="5" fill="#2f5d8a"/><circle cx="12" cy="253" r="4" fill="#111"/><circle cx="38" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="332" y="66" width="5" height="148" fill="#4a5058"/>' +
      '<rect x="284" y="60" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="336" y="75" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Dewey St</text>' +
      '<rect x="284" y="84" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="336" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Chandler St</text>' +
      '<rect x="278" y="110" width="116" height="20" rx="2" fill="#7a4a1e" stroke="#fff" stroke-width="1"/><text x="336" y="124" text-anchor="middle" ' + F + ' font-weight="700" font-size="10.5" fill="#fff">Joyner Lucas Ave</text>' +
      '<circle class="jl-flk" cx="380" cy="24" r="4" fill="#ffe7a8"/>',
      sky("js5", "#0b1622", "#2c3a5a"));
  }

  window.SCENES = { station, arena, school, elmpark, corner };
})();
