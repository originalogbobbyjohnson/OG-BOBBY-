/* Newark, New Jersey opening scenes for the Wyclef Jean game (he grew up in Vailsburg after moving from Haiti and Brooklyn).
   Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 28s linear infinite}.cld2{animation-delay:-14s}' +
    '@keyframes tick{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.hand{transform-box:view-box;animation:tick 9s linear infinite}' +
    '.wheel{transform-box:view-box;transform-origin:200px 110px;animation:tick 16s linear infinite}' +
    '@keyframes untick{from{transform:rotate(0)}to{transform:rotate(-360deg)}}' +
    '@keyframes fall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,240px) rotate(200deg);opacity:.2}}' +
    '.pet{animation:fall 7s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes spot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.spot{transform-box:fill-box;transform-origin:50% 100%;animation:spot 4s ease-in-out infinite}.spot2{animation-delay:-2s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BLUE = "#2f6bff", HBLUE = "#00209f", HRED = "#d21034", GOLD = "#ffd23f", LIME = "#e9e2cf";
  /* a plain Haitian-colors flag: blue over red (no coat of arms) */
  const hflag = (x, y, w, h) => '<g class="flag"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (h / 2) + '" fill="' + HBLUE + '"/><rect x="' + x + '" y="' + (y + h / 2) + '" width="' + w + '" height="' + (h / 2) + '" fill="' + HRED + '"/></g>';

  /* 1. Newark Penn Station from inside the 1935 waiting room: the Art Deco lanterns, a Haitian flag and a guitar case on the bench, the train pulling in past the big platform windows */
  function train() {
    let windows = "";
    for (let x = 52; x < 300; x += 40) windows += '<rect x="' + x + '" y="118" width="26" height="16" rx="2" fill="#ffe9b0" opacity=".85"/>';
    let deco = "";
    for (let x = 0; x < 400; x += 20) deco += '<path d="M' + x + ' 20l10-12 10 12z" fill="#b8955a"/>';
    let mull = "";
    for (let x = 30; x <= 370; x += 34) mull += '<rect x="' + (x - 2) + '" y="98" width="4" height="62" fill="#5a4a32"/>';
    const lantern = x => '<path d="M' + x + ' 20v16" stroke="#5a4a32" stroke-width="2"/><path d="M' + (x - 12) + ' 36h24l-4 26h-16z" fill="#b8955a"/>' +
      '<path class="flk" d="M' + (x - 8) + ' 40h16l-3 18h-10z" fill="#ffe2a0"/><circle cx="' + x + '" cy="66" r="3" fill="#b8955a"/>';
    return svg(
      '<rect width="400" height="260" fill="#e3d9c0"/>' + '<rect x="0" y="0" width="400" height="22" fill="#6a5636"/>' + deco +
      [[0, 26], [380, 26]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="20" height="140" fill="#cfc3a6"/>').join("") +
      lantern(70) + lantern(330) +
      /* platform sign over the windows */
      '<rect x="88" y="66" width="224" height="24" rx="3" fill="#111"/><rect x="88" y="66" width="224" height="3" fill="#fff"/>' +
      '<text x="98" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12.5" fill="#fff">Newark Penn Station</text>' +
      badge(232, 79, 38, "PATH", "#d93a30") + badge(274, 79, 34, "NJT", "#1b3d8f") +
      /* the big platform windows with the train behind */
      '<rect x="30" y="98" width="340" height="62" fill="url(#g1)"/>' +
      '<g class="anim-train">' +
        '<rect x="30" y="112" width="300" height="40" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="30" y="138" width="300" height="4" fill="#1b3d8f"/><rect x="30" y="142" width="300" height="3" fill="#f58220"/><rect x="30" y="145" width="300" height="3" fill="#a3238e"/>' + windows +
        '<circle cx="322" cy="148" r="3.5" fill="#fff6c2"/>' +
      '</g>' + mull + '<rect x="30" y="96" width="340" height="4" fill="#5a4a32"/><rect x="30" y="158" width="340" height="4" fill="#5a4a32"/>' +
      /* the floor, the bench, the guitar case, the flag */
      '<rect x="0" y="162" width="400" height="98" fill="#b9ab8a"/><path d="M0 190h400M0 224h400" stroke="#a3967a"/>' +
      '<rect x="70" y="176" width="140" height="10" rx="2" fill="#6a4a2a"/><rect x="74" y="186" width="6" height="16" fill="#4a3220"/><rect x="200" y="186" width="6" height="16" fill="#4a3220"/>' +
      '<ellipse cx="114" cy="166" rx="18" ry="10" fill="#2a2018"/><ellipse cx="140" cy="167" rx="12" ry="8" fill="#2a2018"/><rect x="146" y="163" width="48" height="8" rx="3" fill="#2a2018"/><rect x="190" y="161" width="12" height="12" rx="3" fill="#2a2018"/><circle cx="128" cy="166" r="2" fill="' + GOLD + '"/>' +
      '<rect x="318" y="96" width="3" height="104" fill="#8a7a58"/>' + hflag(321, 98, 40, 26) +
      '<text class="note" x="150" y="150" font-size="16" fill="' + GOLD + '">&#9834;</text>' +
      tag("REFUGEE CAMP", 18, 244, 26, GOLD, -4) + tag("WYCLEF", 250, 246, 26, HRED, -6),
      sky("g1", "#0d1430", "#3a2c4a"));
  }

  /* 2. Vailsburg High School in his Vailsburg neighborhood, near South Orange Av and Sandford Av: the brick school he went to after coming up from Haiti and Brooklyn */
  function cathedral() {
    let win = "";
    for (let x = 64; x < 340; x += 28) { if (x > 170 && x < 232) continue; win += '<rect x="' + x + '" y="98" width="16" height="22" fill="#2b3440"/><rect x="' + x + '" y="138" width="16" height="22" fill="#2b3440"/><rect x="' + x + '" y="178" width="16" height="22" fill="#2b3440"/>'; }
    let rows = "";
    for (let y = 86; y < 214; y += 6) rows += '<path d="M54 ' + y + 'h292" stroke="#7a3826" stroke-width=".6" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cld"><ellipse cx="0" cy="30" rx="40" ry="8" fill="#fff" opacity=".7"/></g><g class="cld cld2"><ellipse cx="0" cy="56" rx="30" ry="6" fill="#fff" opacity=".6"/></g>' +
      '<rect x="54" y="84" width="292" height="130" fill="#9a4630"/>' + rows + '<rect x="50" y="78" width="300" height="8" fill="#e3d9c0"/>' + win +
      /* the limestone entrance block */
      '<rect x="176" y="70" width="48" height="144" fill="#e3d9c0"/><path d="M188 214v-36a12 12 0 0 1 24 0v36z" fill="#3a2a22"/>' +
      '<rect x="182" y="96" width="36" height="40" fill="#2b3440"/><path d="M200 96v40M182 116h36" stroke="#e3d9c0" stroke-width="2"/>' +
      '<rect x="120" y="50" width="160" height="18" fill="#14181d"/><text x="200" y="63" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9.5" fill="' + GOLD + '">VAILSBURG HIGH SCHOOL</text>' +
      '<rect x="356" y="40" width="3" height="174" fill="#8a8f96"/><g class="flag"><rect x="359" y="42" width="30" height="18" fill="' + HBLUE + '"/><rect x="359" y="51" width="30" height="9" fill="' + HRED + '"/></g>' +
      '<rect x="0" y="214" width="400" height="12" fill="#c9c1b0"/><rect x="0" y="226" width="400" height="34" fill="#2a2a2e"/><path d="M0 244h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="8" y="20" width="132" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="74" y="33" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">South Orange Av</text>' +
      '<g class="bob"><circle cx="40" cy="196" r="5" fill="#2a1a10"/><rect x="34" y="201" width="12" height="14" rx="3" fill="' + BLUE + '"/></g>' +
      tag("CLEF", 16, 252, 22, GOLD, -4) + tag("VAILSBURG", 250, 254, 18, HRED, -3),
      sky("g2", "#8fc3ea", "#e6f2fa"));
  }

  /* 3. The Carnival (his first solo album): a Ferris wheel turning at night, string lights */
  function carnival() {
    let spokes = "", cars = "";
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, x = 200 + Math.cos(a) * 80, y = 110 + Math.sin(a) * 80;
      spokes += '<path d="M200 110L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#ffd23f" stroke-width="1.5"/>';
      cars += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"><g style="transform-box:fill-box;transform-origin:50% 0;animation:untick 16s linear infinite"><rect x="-8" y="0" width="16" height="12" rx="3" fill="' + [HRED, BLUE, GOLD, "#3fbf6a"][i % 4] + '"/></g></g>';
    }
    let bulbs = "";
    for (let x = 0; x <= 400; x += 16) bulbs += '<circle class="flk' + (x % 32 ? " flk2" : "") + '" cx="' + x + '" cy="' + (196 + Math.sin(x / 30) * 5).toFixed(1) + '" r="3" fill="' + [GOLD, HRED, "#fff"][(x / 16) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(22) +
      '<g class="spot"><path d="M60 230l-26 -200h40z" fill="#fff6c2" opacity=".12"/></g><g class="spot spot2"><path d="M340 230l-10 -200h40z" fill="#fff6c2" opacity=".12"/></g>' +
      '<path d="M200 110l-60 120M200 110l60 120" stroke="#9aa3b5" stroke-width="5"/>' +
      '<g class="wheel"><circle cx="200" cy="110" r="80" fill="none" stroke="#ffd23f" stroke-width="3"/><circle cx="200" cy="110" r="70" fill="none" stroke="#ffd23f" stroke-width="1" opacity=".6"/>' + spokes + cars + '</g>' +
      '<circle cx="200" cy="110" r="8" fill="' + HRED + '"/>' +
      /* striped tents */
      '<path d="M10 230l34 -40 34 40z" fill="' + HRED + '"/><path d="M44 190l-10 40h20z" fill="#fff"/>' +
      '<path d="M322 230l34 -40 34 40z" fill="' + BLUE + '"/><path d="M356 190l-10 40h20z" fill="#fff"/>' +
      '<path d="M0 196q100 -14 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="0" y="230" width="400" height="30" fill="#1f1a2a"/>' +
      tag("THE CARNIVAL", 112, 252, 26, GOLD, -3),
      sky("g3", "#0a0a24", "#3a1f4a"));
  }

  /* 4. The Refugee Camp stage: an acoustic guitar on a stand, the blue-and-red flag waving, the crowd bouncing */
  function stage() {
    let crowd = "";
    for (let i = 0; i < 22; i++) { const x = 8 + i * 18, c = [HRED, BLUE, GOLD, "#f1ede3"][i % 4]; crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (226 + (i % 3) * 3) + '" r="6" fill="#2b1d16"/><rect x="' + (x - 7) + '" y="' + (232 + (i % 3) * 3) + '" width="14" height="22" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="spot"><path d="M100 200l-30 -190h40z" fill="#fff6c2" opacity=".14"/></g><g class="spot spot2"><path d="M300 200l-10 -190h40z" fill="#fff6c2" opacity=".14"/></g>' +
      /* truss + speakers */
      '<rect x="20" y="20" width="360" height="8" fill="#555"/><rect x="20" y="20" width="8" height="190" fill="#555"/><rect x="372" y="20" width="8" height="190" fill="#555"/>' +
      '<rect x="34" y="120" width="44" height="80" rx="3" fill="#1b1b1f"/><circle cx="56" cy="146" r="12" fill="#333"/><circle cx="56" cy="180" r="10" fill="#333"/>' +
      '<rect x="322" y="120" width="44" height="80" rx="3" fill="#1b1b1f"/><circle cx="344" cy="146" r="12" fill="#333"/><circle cx="344" cy="180" r="10" fill="#333"/>' +
      /* flag on a pole */
      '<path d="M120 50v150" stroke="#888" stroke-width="3"/>' + hflag(121, 52, 56, 36) +
      /* acoustic guitar on a stand */
      '<path d="M196 200l14 -20 14 20" stroke="#333" stroke-width="3" fill="none"/>' +
      '<g transform="rotate(-8 210 140)"><rect x="206" y="56" width="8" height="70" fill="#5a3a1a"/><rect x="203" y="46" width="14" height="14" rx="2" fill="#3a2410"/>' +
      '<ellipse cx="210" cy="150" rx="28" ry="32" fill="#c98a3a" stroke="#6b3d10" stroke-width="2"/><ellipse cx="210" cy="124" rx="21" ry="22" fill="#c98a3a" stroke="#6b3d10" stroke-width="2"/><ellipse cx="210" cy="150" rx="26" ry="30" fill="#c98a3a"/>' +
      '<circle cx="210" cy="140" r="8" fill="#2a1a0a"/><rect x="200" y="164" width="20" height="4" fill="#3a2410"/>' +
      '<path d="M208 60v104M212 60v104" stroke="#eee" stroke-width=".6"/></g>' +
      '<text class="note" x="246" y="100" font-size="18" fill="' + GOLD + '">&#9834;</text><text class="note note2" x="170" y="96" font-size="16" fill="#fff">&#9835;</text>' +
      '<rect x="0" y="200" width="400" height="16" fill="#2a2a30"/><rect x="0" y="216" width="400" height="44" fill="#14141a"/>' + crowd +
      tag("OUI OUI", 250, 60, 26, GOLD, -6),
      sky("g4", "#0a0a1e", "#2a1f4a"));
  }

  /* 5. South Orange Ave and Sandford Ave in Vailsburg, where he went to high school: green street signs, streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="282" y="60" width="90" height="160" fill="#4a3a32"/>' +
      (function () { let w = ""; for (let y = 70; y < 210; y += 16) for (let x = 290; x < 366; x += 16) w += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="' + ((x + y) % 3 ? "#2a1a14" : "#ffd98a") + '"/>'; return w; })() +
      '<rect x="14" y="70" width="228" height="150" fill="#33363f"/>' +
      '<rect x="14" y="70" width="228" height="75" fill="' + HBLUE + '" opacity=".3"/><rect x="14" y="145" width="228" height="75" fill="' + HRED + '" opacity=".25"/>' +
      tag("WYCLEF", 34, 146, 40, GOLD, -7) + tag("REFUGEE CAMP", 30, 200, 22, "#fff", -3) + tag("CLEF", 40, 96, 20, "#7fd0ff", -4) +
      '<rect x="262" y="56" width="5" height="164" fill="#1d2329"/><path d="M264 58h24" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M278 62h24l-6 8h-12z" fill="#ffe7a8"/>' +
      '<rect x="252" y="90" width="118" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="311" y="103" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">South Orange Ave</text>' +
      '<rect x="252" y="112" width="118" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="311" y="125" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10.5" fill="#fff">Sandford Ave</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0a0f24", "#2a1a3a"));
  }

  window.SCENES = { train, cathedral, carnival, stage, corner };
})();
