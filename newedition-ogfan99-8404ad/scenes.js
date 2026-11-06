/* newedition scenes (Regions tab: Boston + New England; Roxbury). CSS classes prefixed ne- (the page's own anim-train is kept).
   1 Dudley St @ Dearborn St, MBTA bus stop by Orchard Park (routes 15, 41, 45): the yellow route signs, the silver bus with its yellow band sliding in, the red-brick low-rise rows of Orchard Park behind.
   2 The Strand Theatre at Uphams Corner, Dorchester: cream terracotta and buff brick front, the tall blade sign, the marquee lit for Hollywood Talent Night where Maurice Starr first saw them.
   3 Ramsay Park, South End / Lower Roxbury: the Michael L. Bivins Court, blue court and orange rims, a ball bouncing.
   4 Boston Common, Concerts on the Common: the white Parkman Bandstand with its columns and green dome, the crowd jumping, elms all around.
   5 Dudley St and Dearborn St at Orchard Park: green signs, NEW EDITION tagged on the brick, Nubian Square's Bolling Building behind (restored red-brick Ferdinand corner with the striped glass building rising over it). */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes neflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ne-flk{animation:neflk 2.2s infinite}.ne-flk2{animation-delay:-.9s}' +
    '@keyframes nechase{0%,100%{opacity:1}50%{opacity:.2}}.ne-bulb{animation:nechase .8s steps(1) infinite}.ne-bulb2{animation-delay:-.4s}' +
    '@keyframes nehop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ne-hop{animation:nehop .8s ease-in-out infinite}.ne-hop2{animation-delay:-.27s}.ne-hop3{animation-delay:-.53s}' +
    '@keyframes nebounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-58px)}}.ne-ball{animation:nebounce 1.1s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes necar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ne-car{animation:necar 8s linear infinite}.ne-car2{animation-duration:11s;animation-delay:-5s}' +
    '@keyframes nedrift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ne-bird{animation:nedrift 13s linear infinite}.ne-bird2{animation-delay:-6s}' +
    '@keyframes nenote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ne-note{animation:nenote 3s linear infinite}.ne-note2{animation-delay:-1s}.ne-note3{animation-delay:-2s}' +
    '@keyframes nesp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-20px);opacity:0}}.ne-sp{animation:nesp 1.6s ease-out infinite}.ne-sp2{animation-delay:-.8s}' +
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
  const bricks = (y0, y1, c, x0, x1) => { x0 = x0 || 0; x1 = x1 || 400; let b = ""; for (let y = y0; y < y1; y += 13) for (let x = x0 + (((y - y0) / 13) % 2 ? -18 : 0); x < x1; x += 36) b += '<rect x="' + Math.max(x, x0) + '" y="' + y + '" width="' + Math.min(34, x1 - Math.max(x, x0)) + '" height="11" fill="' + c + '"/>'; return b; };
  /* MBTA bus route sign: yellow rounded box with the black route number */
  const route = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="26" height="18" rx="4" fill="#ffc72c"/><text x="' + (x + 13) + '" y="' + (y + 13.5) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#111">' + n + '</text>';
  const signs = (x, a, b) =>
    '<rect x="' + (x + 52) + '" y="62" width="5" height="148" fill="#4a5058"/>' +
    '<rect x="' + x + '" y="58" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 54) + '" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + a + '</text>' +
    '<rect x="' + x + '" y="82" width="108" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 54) + '" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + b + '</text>';
  const PINK = "#ff4f9a", GOLD = "#ffd23f", BLUE = "#36c2ff";
  /* Orchard Park style low-rise: three-story red-brick row with white-trimmed windows */
  const lowrise = (x, base, w, c) => {
    let r = '<rect x="' + x + '" y="' + (base - 70) + '" width="' + w + '" height="70" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (base - 73) + '" width="' + (w + 4) + '" height="4" fill="#6a2e22"/>';
    for (let f = 0; f < 3; f++) for (let i = x + 8; i < x + w - 12; i += 22)
      r += '<rect x="' + i + '" y="' + (base - 62 + f * 21) + '" width="11" height="13" fill="' + ((i + f * 7) % 3 ? "#2b3440" : "#ffd98a") + '" stroke="#e9e2d2" stroke-width="1.2" class="' + ((i + f) % 4 ? "" : "ne-flk") + '"/>';
    return r;
  };

  /* 1. Dudley St @ Dearborn St: MBTA bus stop at Orchard Park */
  function nestop() {
    let win = "";
    for (let x = 34; x < 230; x += 34) win += '<rect x="' + x + '" y="146" width="26" height="22" rx="2" fill="#bfe0f5" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ne1)"/>' + stars(12) +
      '<circle cx="60" cy="30" r="13" fill="#fff4dc" opacity=".85"/>' +
      lowrise(-6, 132, 150, "#9a4a36") + lowrise(150, 132, 120, "#8a3e2e") + lowrise(276, 132, 130, "#a1513b") +
      '<path d="M0 118h400" stroke="#5a6b3a" stroke-width="0"/>' +
      '<rect x="0" y="132" width="400" height="8" fill="#56663e"/>' +
      /* the stop pole + sign */
      '<rect x="318" y="50" width="4" height="150" fill="#4a5058"/>' +
      '<rect x="270" y="36" width="104" height="58" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="322" y="54" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">BUS STOP</text>' +
      '<text x="322" y="66" text-anchor="middle" ' + F + ' font-size="8.5" fill="#fff">Dudley St @ Dearborn St</text>' +
      route(282, 71, "15") + route(309, 71, "41") + route(336, 71, "45") +
      /* the bus slides in (silver body, yellow band, route sign) */
      '<g class="anim-train">' +
        '<rect x="14" y="138" width="250" height="66" rx="8" fill="#d6dade" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="14" y="176" width="250" height="8" fill="#ffc72c"/>' +
        '<rect x="234" y="144" width="26" height="30" rx="3" fill="#bfe0f5" opacity=".9"/>' +
        '<rect x="150" y="140" width="70" height="0" fill="none"/>' +
        '<rect x="60" y="188" width="120" height="10" rx="2" fill="#1d1d1d"/><text x="120" y="196" text-anchor="middle" ' + F + ' font-size="7" font-weight="700" fill="#ffcf4a">15 RUGGLES</text>' +
        '<circle cx="62" cy="206" r="11" fill="#1a1a1a"/><circle cx="62" cy="206" r="4" fill="#888"/><circle cx="218" cy="206" r="11" fill="#1a1a1a"/><circle cx="218" cy="206" r="4" fill="#888"/>' +
        '<circle cx="260" cy="190" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2b2b30"/><rect x="0" y="212" width="400" height="5" fill="#9a978f"/>' +
      '<path d="M0 238h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      tag("ORCHARD PARK", 12, 252, 18, GOLD, -3) + tag("N.E.", 330, 252, 24, PINK, -8),
      sky("ne1", "#141a2e", "#41476e"));
  }

  /* 2. The Strand Theatre, Uphams Corner: Hollywood Talent Night */
  function nestrand() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 13) bulbs += '<circle class="ne-bulb ' + (x % 26 ? "ne-bulb2" : "") + '" cx="' + x + '" cy="124" r="2.4" fill="#ffe7a8"/><circle class="ne-bulb ' + (x % 26 ? "" : "ne-bulb2") + '" cx="' + x + '" cy="166" r="2.4" fill="#ffe7a8"/>';
    let blade = "";
    "STRAND".split("").forEach((c, i) => { blade += '<text x="200" y="' + (34 + i * 14) + '" text-anchor="middle" ' + A + ' font-size="13" fill="#ffe7a8" class="ne-flk ' + (i % 2 ? "ne-flk2" : "") + '">' + c + '</text>'; });
    let crowd = "";
    for (let i = 0; i < 13; i++) crowd += '<g class="ne-hop ' + ["", "ne-hop2", "ne-hop3"][i % 3] + '"><rect x="' + (14 + i * 30) + '" y="214" width="16" height="30" rx="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/><circle cx="' + (22 + i * 30) + '" cy="208" r="7" fill="' + ["#2a2f3a", "#3b2a2a", "#22303a"][i % 3] + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ne2)"/>' + stars(10) +
      /* buff brick side wings */
      bricks(40, 210, "#c49a6c", 20, 120) + bricks(40, 210, "#c49a6c", 280, 380) +
      /* cream terracotta center */
      '<rect x="120" y="22" width="160" height="188" fill="#efe3c8"/>' +
      '<path d="M120 22h160" stroke="#c8b48a" stroke-width="4"/>' +
      '<rect x="132" y="34" width="38" height="70" fill="#efe3c8" stroke="#c8b48a" stroke-width="2"/><rect x="230" y="34" width="38" height="70" fill="#efe3c8" stroke="#c8b48a" stroke-width="2"/>' +
      '<rect x="138" y="42" width="26" height="54" fill="#3a2f2a"/><rect x="236" y="42" width="26" height="54" fill="#3a2f2a"/>' +
      '<path d="M120 18l80-10 80 10z" fill="#d8c8a2"/>' +
      /* vertical blade sign */
      '<rect x="186" y="20" width="28" height="92" rx="3" fill="#7a1420" stroke="#ffd23f" stroke-width="2"/>' + blade +
      /* marquee */
      '<rect x="86" y="116" width="228" height="58" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="142" text-anchor="middle" ' + A + ' font-size="14" fill="' + GOLD + '">HOLLYWOOD TALENT NIGHT</text>' +
      '<text x="200" y="160" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">TONIGHT · FIVE KIDS FROM ORCHARD PARK</text>' +
      '<rect x="150" y="178" width="100" height="32" fill="#2a1a14"/><rect x="154" y="182" width="92" height="28" fill="' + PINK + '" opacity=".25" class="ne-flk"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/>' + crowd +
      '<text x="200" y="256" text-anchor="middle" ' + A + ' font-size="11" fill="' + GOLD + '">THE STRAND · UPHAMS CORNER</text>',
      sky("ne2", "#0d1024", "#3a2a4a"));
  }

  /* 3. Ramsay Park: the Michael L. Bivins Court */
  function necourt() {
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 92v58" stroke="#8a9098" stroke-width="1"/>';
    for (let y = 92; y <= 150; y += 10) fence += '<path d="M0 ' + y + 'h400" stroke="#8a9098" stroke-width=".8" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ne3)"/>' +
      '<circle cx="70" cy="40" r="20" fill="#ffe08a"/>' +
      '<path d="M-10 92q40-46 80 0q30-40 70 0q36-50 80 0q34-40 70 0q30-44 120 0z" fill="#3f7a3a"/>' + fence +
      '<rect x="0" y="150" width="400" height="110" fill="#1f5fa8"/>' +
      '<path d="M0 150h400" stroke="#fff" stroke-width="3"/><path d="M200 150v110" stroke="#fff" stroke-width="2.5"/>' +
      '<circle cx="200" cy="206" r="26" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M0 176h56v64H0" fill="#d4572a" stroke="#fff" stroke-width="2.5"/><path d="M400 176h-56v64h56" fill="#d4572a" stroke="#fff" stroke-width="2.5"/>' +
      '<path d="M56 208a32 32 0 0 1 0 0" stroke="#fff"/>' +
      /* hoop on the right */
      '<rect x="356" y="66" width="6" height="110" fill="#4a5058"/><rect x="318" y="58" width="56" height="38" fill="#f4f6f8" stroke="#333" stroke-width="1.5"/><rect x="336" y="72" width="20" height="14" fill="none" stroke="#d4572a" stroke-width="2"/>' +
      '<path d="M326 96h28" stroke="#ff7a1a" stroke-width="3"/><path d="M328 96l4 14h16l4-14M334 96l2 14M346 96l-2 14" stroke="#fff" stroke-width="1" fill="none"/>' +
      /* ball bouncing */
      '<g class="ne-ball"><circle cx="270" cy="210" r="11" fill="#e8742a" stroke="#5a2a10" stroke-width="1.2"/><path d="M259 210h22M270 199v22" stroke="#5a2a10" stroke-width="1"/></g>' +
      '<ellipse cx="270" cy="223" rx="11" ry="3" fill="#000" opacity=".25"/>' +
      /* court sign */
      '<rect x="76" y="100" width="190" height="40" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="171" y="117" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">MICHAEL L. BIVINS COURT</text>' +
      '<text x="171" y="132" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">RAMSAY PARK · BOSTON</text>' +
      '<path class="ne-bird" d="M0 60q6-6 12 0q6-6 12 0" stroke="#223" stroke-width="2" fill="none"/><path class="ne-bird ne-bird2" d="M0 44q5-5 10 0q5-5 10 0" stroke="#223" stroke-width="1.6" fill="none"/>',
      sky("ne3", "#7ec3ec", "#d8eef8"));
  }

  /* 4. Boston Common, Concerts on the Common: the Parkman Bandstand */
  function necommon() {
    let cols = "";
    for (let x = 132; x <= 268; x += 17) cols += '<rect x="' + x + '" y="106" width="6" height="56" fill="#f6f4ee"/>';
    let crowd = "";
    for (let i = 0; i < 15; i++) crowd += '<g class="ne-hop ' + ["", "ne-hop2", "ne-hop3"][i % 3] + '"><rect x="' + (6 + i * 27) + '" y="210" width="16" height="32" rx="7" fill="' + ["#2a2f3a", "#4a2a3a", "#22303a"][i % 3] + '"/><circle cx="' + (14 + i * 27) + '" cy="204" r="7" fill="' + ["#2a2f3a", "#4a2a3a", "#22303a"][i % 3] + '"/></g>';
    let elms = "";
    [[20, 96, 40], [70, 84, 34], [340, 90, 42], [390, 80, 30]].forEach(t => { elms += '<rect x="' + (t[0] - 4) + '" y="' + t[1] + '" width="8" height="90" fill="#4a3a2a"/><circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#2f6b34"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#ne4)"/>' + elms +
      '<rect x="0" y="170" width="400" height="90" fill="#4f8a3a"/>' +
      /* bandstand: round white platform, columns, green dome with a finial */
      '<rect x="114" y="160" width="172" height="20" fill="#e8e4da"/><rect x="108" y="156" width="184" height="6" fill="#f6f4ee"/>' +
      '<rect x="120" y="98" width="160" height="10" fill="#f6f4ee"/>' + cols +
      '<path d="M116 100q84-60 168 0z" fill="#3f8a6a"/><path d="M116 100h168" stroke="#f6f4ee" stroke-width="4"/>' +
      '<rect x="198" y="58" width="4" height="14" fill="#c9a24a"/><circle cx="200" cy="56" r="4" fill="#c9a24a"/>' +
      '<rect x="112" y="122" width="176" height="22" rx="3" fill="#111" opacity=".8"/>' +
      '<text x="200" y="137" text-anchor="middle" ' + A + ' font-size="11" fill="' + GOLD + '">CONCERTS ON THE COMMON</text>' +
      '<text class="ne-note" x="140" y="96" font-size="16" fill="' + PINK + '">&#9835;</text><text class="ne-note ne-note2" x="200" y="88" font-size="18" fill="' + GOLD + '">&#9834;</text><text class="ne-note ne-note3" x="256" y="96" font-size="16" fill="' + BLUE + '">&#9835;</text>' +
      crowd +
      '<text x="200" y="256" text-anchor="middle" ' + A + ' font-size="11" fill="#fff">BOSTON COMMON · THE BANDSTAND</text>',
      sky("ne4", "#f2a65a", "#ffe3b0"));
  }

  /* 5. Dudley St and Dearborn St: their corner, the Bolling Building in Nubian Square behind */
  function necorner() {
    let stripes = "";
    for (let x = 192; x < 330; x += 9) stripes += '<rect x="' + x + '" y="14" width="5" height="44" fill="' + (x % 27 ? "#2f4f6a" : "#d9c7a2") + '"/>';
    let win = "";
    for (let x = 86; x < 186; x += 20) win += '<rect x="' + x + '" y="30" width="10" height="12" fill="#ffd98a" opacity=".6" class="' + (x % 40 ? "ne-flk" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1210"/>' +
      '<rect x="0" y="0" width="400" height="60" fill="url(#ne5)"/>' + stars(8) +
      /* Bolling Building: striped modern block with the restored brick Ferdinand corner curving in front */
      '<rect x="186" y="8" width="148" height="52" fill="#1d2a38"/>' + stripes +
      '<path d="M70 60V24q0-10 10-10h110v46z" fill="#8a3a26"/><path d="M70 24q0-10 10-10h110" stroke="#d9c7a2" stroke-width="2" fill="none"/>' + win +
      '<rect x="0" y="56" width="400" height="4" fill="#2a1a14"/>' +
      bricks(60, 210, "#5a2e22") +
      tag("NEW EDITION", 18, 150, 40, PINK, -5) + tag("ORCHARD PARK", 40, 190, 22, GOLD, -3) + tag("N.E. HEART BREAK", 22, 96, 17, BLUE, -7) +
      '<circle class="ne-sp" cx="250" cy="120" r="3" fill="' + PINK + '"/><circle class="ne-sp ne-sp2" cx="258" cy="128" r="2" fill="' + PINK + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="ne-car"><rect x="0" y="232" width="50" height="16" rx="5" fill="#c64a3a"/><circle cx="12" cy="249" r="4" fill="#111"/><circle cx="38" cy="249" r="4" fill="#111"/></g>' +
      signs(282, "Dudley St", "Dearborn St") +
      '<circle class="ne-flk" cx="384" cy="34" r="5" fill="#ffe7a8"/>',
      sky("ne5", "#0b1622", "#2a3650"));
  }

  window.SCENES = { nestop: nestop, nestrand: nestrand, necourt: necourt, necommon: necommon, necorner: necorner };
})();
