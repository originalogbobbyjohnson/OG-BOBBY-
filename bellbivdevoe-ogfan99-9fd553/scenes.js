/* bellbivdevoe scenes (Regions tab: Boston + New England; Roxbury / Lower Roxbury). CSS classes and ids prefixed bb- (the page's own anim-train is kept).
   1 Massachusetts Avenue on the Orange Line, down in the Southwest Corridor between the South End and Lower Roxbury: the brick-and-glass headhouse up top, the platform below, a silver Orange Line train with its orange band sliding in.
   2 The Boys Club on Washington St in the South End (the Salvation Army club that kept Ronnie and his brothers busy): red-brick club house, a ball bouncing in the lit gym, a kid's bike with a red bow out front.
   3 Belmont High School on Concord Ave, where Michael Bivins rode the METCO bus from Roxbury: brick school, the yellow METCO bus rolling up, maple leaves falling.
   4 The Wang Theatre on Tremont St, where the RBRM homecoming show played: tall cream terracotta front with the big arched window, the vertical WANG sign, marquee bulbs chasing, the crowd jumping.
   5 Washington St and Massachusetts Ave: green signs, BBD tagged on the brick, the two square puddingstone towers of the Cathedral of the Holy Cross up Washington St behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes bbflk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.bb-flk{animation:bbflk 2.2s infinite}.bb-flk2{animation-delay:-.9s}' +
    '@keyframes bbchase{0%,100%{opacity:1}50%{opacity:.2}}.bb-bulb{animation:bbchase .8s steps(1) infinite}.bb-bulb2{animation-delay:-.4s}' +
    '@keyframes bbhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bb-hop{animation:bbhop .8s ease-in-out infinite}.bb-hop2{animation-delay:-.27s}.bb-hop3{animation-delay:-.53s}' +
    '@keyframes bbbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.bb-ball{animation:bbbounce 1s cubic-bezier(.5,0,.5,1) infinite}' +
    '@keyframes bbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bb-car{animation:bbcar 8s linear infinite}.bb-car2{animation-duration:11s;animation-delay:-5s}' +
    '@keyframes bbbus{from{transform:translateX(-230px)}to{transform:translateX(0)}}.bb-bus{animation:bbbus 3.2s ease-out both}' +
    '@keyframes bbleaf{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.bb-leaf{transform-box:fill-box;animation:bbleaf 4s linear infinite}.bb-leaf2{animation-delay:-1.3s}.bb-leaf3{animation-delay:-2.6s}' +
    '@keyframes bbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-20px);opacity:0}}.bb-sp{animation:bbsp 1.6s ease-out infinite}.bb-sp2{animation-delay:-.8s}' +
    '@keyframes bbnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.bb-note{animation:bbnote 3s linear infinite}.bb-note2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89 + 31) % 400) + '" cy="' + (8 + (i * 47) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const bricks = (y0, y1, c, x0, x1) => { x0 = x0 || 0; x1 = x1 || 400; let b = ""; for (let y = y0; y < y1; y += 13) for (let x = x0 + (((y - y0) / 13) % 2 ? -18 : 0); x < x1; x += 36) b += '<rect x="' + Math.max(x, x0) + '" y="' + y + '" width="' + Math.min(34, x1 - Math.max(x, x0)) + '" height="11" fill="' + c + '"/>'; return b; };
  const signs = (x, a, b) =>
    '<rect x="' + (x + 54) + '" y="62" width="5" height="148" fill="#4a5058"/>' +
    '<rect x="' + x + '" y="58" width="114" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 57) + '" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + a + '</text>' +
    '<rect x="' + x + '" y="82" width="114" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
    '<text x="' + (x + 57) + '" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">' + b + '</text>';
  const GREEN = "#39ff88", PURP = "#b066ff", GOLD = "#ffcc33";

  /* 1. Massachusetts Avenue, Orange Line */
  function bbstop() {
    let win = "";
    for (let x = 30; x < 310; x += 28) if (x < 160 || x > 180) win += '<rect x="' + x + '" y="156" width="18" height="16" rx="2" fill="#bfe0f5" opacity=".85"/>';
    let rows = "";
    for (let x = 0; x < 400; x += 58) rows += '<rect x="' + x + '" y="' + (26 + (x % 3) * 6) + '" width="54" height="' + (50 - (x % 3) * 6) + '" fill="' + ["#7a3a2a", "#6a3326", "#83412f"][x % 3] + '"/>' +
      '<rect x="' + (x + 8) + '" y="' + (36 + (x % 3) * 6) + '" width="10" height="12" fill="#ffd98a" class="' + (x % 4 ? "" : "bb-flk") + '"/><rect x="' + (x + 30) + '" y="' + (36 + (x % 3) * 6) + '" width="10" height="12" fill="#2a3140"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bb1)"/>' + stars(8) + rows +
      /* street level and the headhouse */
      '<rect x="0" y="76" width="400" height="10" fill="#9a978f"/>' +
      '<rect x="120" y="44" width="160" height="34" fill="#8a3d2b"/><path d="M116 46L200 22l84 24z" fill="#a9c8de" opacity=".7"/><path d="M116 46L200 22l84 24" stroke="#3a3f46" stroke-width="3" fill="none"/>' +
      '<rect x="182" y="56" width="36" height="22" fill="#ffd98a" opacity=".8"/>' +
      /* the cut: retaining walls and canopy */
      '<rect x="0" y="86" width="400" height="174" fill="#3b3a40"/>' + bricks(86, 140, "#4a3a36") +
      '<rect x="0" y="134" width="400" height="8" fill="#55595f"/>' +
      /* station sign */
      '<rect x="230" y="96" width="162" height="34" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<circle cx="250" cy="113" r="11" fill="#ed8b00"/><text x="250" y="117" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">OL</text>' +
      '<text x="320" y="111" text-anchor="middle" ' + F + ' font-weight="700" font-size="10.5" fill="#fff">MASSACHUSETTS</text>' +
      '<text x="320" y="124" text-anchor="middle" ' + F + ' font-weight="700" font-size="10.5" fill="#fff">AVENUE</text>' +
      /* the train slides in */
      '<g class="anim-train">' +
        '<rect x="10" y="148" width="300" height="56" rx="7" fill="#d6dade" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="178" width="300" height="8" fill="#ed8b00"/>' +
        '<rect x="162" y="150" width="20" height="50" fill="#9aa3ad"/>' +
        '<rect x="238" y="152" width="64" height="0" fill="none"/>' +
        '<circle cx="304" cy="192" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="206" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="206" width="400" height="3" fill="#ffd23f"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2a2f"/>' +
      tag("LOWER ROX", 14, 248, 18, GOLD, -3) + tag("BBD", 326, 250, 26, GREEN, -8),
      sky("bb1", "#121a2e", "#3d3a62"));
  }

  /* 2. The Boys Club, Washington St, South End */
  function bbclub() {
    return svg(
      '<rect width="400" height="260" fill="url(#bb2)"/>' + stars(10) +
      '<rect x="40" y="60" width="320" height="160" fill="#8c3b2c"/>' + bricks(60, 220, "#7a3123", 40, 360) +
      '<rect x="34" y="54" width="332" height="8" fill="#d9ccb2"/>' +
      '<rect x="120" y="70" width="160" height="18" fill="#d9ccb2"/><text x="200" y="83" text-anchor="middle" ' + A + ' font-size="13" fill="#5a2318" letter-spacing="2">BOYS CLUB</text>' +
      /* lit gym windows with a hoop and a bouncing ball */
      '<rect x="64" y="100" width="190" height="70" fill="#ffe2a0"/><path d="M127 100v70M190 100v70" stroke="#d9ccb2" stroke-width="4"/>' +
      '<rect x="214" y="108" width="30" height="20" fill="#fff" stroke="#c43b2a" stroke-width="2"/><path d="M222 128h14l-2 12h-10z" fill="none" stroke="#c43b2a" stroke-width="2"/>' +
      '<rect x="64" y="164" width="190" height="6" fill="#b88a50"/>' +
      '<g class="bb-ball"><circle cx="150" cy="154" r="8" fill="#e8742a"/><path d="M142 154h16M150 146v16" stroke="#7a3410" stroke-width="1.2"/></g>' +
      /* door */
      '<rect x="282" y="140" width="46" height="80" fill="#2d2a2a"/><rect x="286" y="144" width="18" height="40" fill="#ffd98a" opacity=".7"/><rect x="306" y="144" width="18" height="40" fill="#ffd98a" opacity=".7"/>' +
      '<rect x="276" y="216" width="58" height="6" fill="#bdb6a8"/>' +
      /* the bike with a bow */
      '<g transform="translate(150 196)"><circle cx="0" cy="18" r="13" fill="none" stroke="#111" stroke-width="3"/><circle cx="46" cy="18" r="13" fill="none" stroke="#111" stroke-width="3"/>' +
      '<path d="M0 18L16 0h22L46 18M16 0l8 18L38 0M14 -6h8M38 0l-2-8h6" stroke="#3a7bd5" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M26 -8l-10-6v12zM26 -8l10-6v12z" fill="#e8322a"/><circle cx="26" cy="-8" r="3" fill="#b01e18"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#2b2b30"/><rect x="0" y="218" width="400" height="5" fill="#9a978f"/>' +
      '<rect x="18" y="140" width="4" height="82" fill="#33363b"/><circle class="bb-flk" cx="20" cy="138" r="7" fill="#ffe7a8"/>' +
      '<text x="392" y="250" text-anchor="end" ' + F + ' font-weight="700" font-size="10" fill="#d8d2c4">WASHINGTON ST</text>',
      sky("bb2", "#0f1430", "#3b3264"));
  }

  /* 3. Belmont High School: the METCO bus from Roxbury */
  function bbschool() {
    let wins = "";
    for (let x = 28; x < 380; x += 32) for (let f = 0; f < 2; f++) wins += '<rect x="' + x + '" y="' + (98 + f * 34) + '" width="20" height="22" fill="#a9c8de" stroke="#efe6d2" stroke-width="2"/>';
    let leaves = "";
    [[40, 40, "#e8742a"], [70, 30, "#d9452a"], [350, 36, "#ffcc33"], [380, 50, "#e8742a"], [60, 60, "#ffcc33"], [330, 58, "#d9452a"]].forEach((l, i) => { leaves += '<ellipse class="bb-leaf ' + ["", "bb-leaf2", "bb-leaf3"][i % 3] + '" cx="' + l[0] + '" cy="' + l[1] + '" rx="4" ry="2.5" fill="' + l[2] + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#bb3)"/>' +
      '<rect x="10" y="80" width="380" height="96" fill="#9a4632"/>' + bricks(80, 176, "#8a3d2b", 10, 390) +
      '<rect x="6" y="74" width="388" height="8" fill="#efe6d2"/>' + wins +
      '<rect x="110" y="52" width="180" height="22" fill="#efe6d2"/><text x="200" y="68" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#5a2318">BELMONT HIGH SCHOOL</text>' +
      '<rect x="180" y="128" width="40" height="48" fill="#3a2a22"/>' +
      /* maples */
      '<rect x="40" y="90" width="8" height="90" fill="#5a3a22"/><circle cx="44" cy="70" r="34" fill="#d9652a"/><circle cx="30" cy="84" r="20" fill="#e8892a"/>' +
      '<rect x="352" y="90" width="8" height="90" fill="#5a3a22"/><circle cx="356" cy="70" r="34" fill="#e0a12a"/><circle cx="372" cy="86" r="20" fill="#d9652a"/>' + leaves +
      '<rect x="0" y="176" width="400" height="10" fill="#9a978f"/><rect x="0" y="186" width="400" height="74" fill="#3a3a40"/><path d="M0 230h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* the METCO bus pulls up */
      '<g class="bb-bus"><rect x="70" y="170" width="200" height="56" rx="8" fill="#ffc72c" stroke="#8a6a10" stroke-width="2"/>' +
        '<rect x="80" y="178" width="22" height="18" fill="#2a3140"/><rect x="108" y="178" width="22" height="18" fill="#2a3140"/><rect x="136" y="178" width="22" height="18" fill="#2a3140"/><rect x="164" y="178" width="22" height="18" fill="#2a3140"/><rect x="192" y="178" width="22" height="18" fill="#2a3140"/>' +
        '<rect x="226" y="176" width="34" height="26" rx="3" fill="#bfe0f5"/><rect x="70" y="204" width="200" height="4" fill="#111"/>' +
        '<text x="150" y="220" text-anchor="middle" ' + A + ' font-size="11" fill="#111" letter-spacing="2">METCO</text>' +
        '<circle cx="104" cy="228" r="11" fill="#1a1a1a"/><circle cx="236" cy="228" r="11" fill="#1a1a1a"/><circle cx="104" cy="228" r="4" fill="#888"/><circle cx="236" cy="228" r="4" fill="#888"/>' +
        '<circle cx="268" cy="212" r="3" fill="#fff6c2"/></g>' +
      tag("FROM ROXBURY", 262, 254, 14, PURP, -4),
      sky("bb3", "#79b8e6", "#d6eaf7"));
  }

  /* 4. The Wang Theatre, Tremont St: the homecoming show */
  function bbwang() {
    let bulbs = "";
    for (let x = 98; x <= 302; x += 12) bulbs += '<circle class="bb-bulb ' + (x % 24 ? "bb-bulb2" : "") + '" cx="' + x + '" cy="152" r="2.3" fill="#ffe7a8"/><circle class="bb-bulb ' + (x % 24 ? "" : "bb-bulb2") + '" cx="' + x + '" cy="186" r="2.3" fill="#ffe7a8"/>';
    let blade = "";
    "WANG".split("").forEach((c, i) => { blade += '<text x="350" y="' + (66 + i * 20) + '" text-anchor="middle" ' + A + ' font-size="17" fill="#ffe7a8" class="bb-flk ' + (i % 2 ? "bb-flk2" : "") + '">' + c + '</text>'; });
    let pan = "";
    for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) pan += '<rect x="' + (162 + i * 15) + '" y="' + (58 + j * 18) + '" width="12" height="15" fill="' + ((i + j) % 3 ? "#ffd98a" : "#f3b25a") + '" opacity=".85" class="' + ((i + j) % 4 ? "" : "bb-flk") + '"/>';
    let crowd = "";
    for (let i = 0; i < 13; i++) crowd += '<g class="bb-hop ' + ["", "bb-hop2", "bb-hop3"][i % 3] + '"><rect x="' + (12 + i * 30) + '" y="216" width="16" height="30" rx="7" fill="' + ["#2a2f3a", "#2a3a2f", "#3a2a40"][i % 3] + '"/><circle cx="' + (20 + i * 30) + '" cy="210" r="7" fill="#1c1c22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bb4)"/>' + stars(12) +
      '<rect x="80" y="10" width="240" height="196" fill="#eadfc6"/><rect x="74" y="6" width="252" height="10" fill="#f6eedb"/>' +
      '<path d="M84 16h232" stroke="#c9b48a" stroke-width="2"/>' +
      '<rect x="92" y="26" width="16" height="110" fill="#f6eedb"/><rect x="292" y="26" width="16" height="110" fill="#f6eedb"/><rect x="122" y="26" width="12" height="110" fill="#f6eedb"/><rect x="266" y="26" width="12" height="110" fill="#f6eedb"/>' +
      '<path d="M150 136V70q0-34 50-34t50 34v66z" fill="#2a1d14"/>' + '<g clip-path="url(#bbarch)">' + pan + '</g>' +
      '<path d="M150 136V70q0-34 50-34t50 34v66z" fill="none" stroke="#c9b48a" stroke-width="4"/>' +
      '<rect x="336" y="40" width="28" height="96" rx="3" fill="#2a1030" stroke="' + GOLD + '" stroke-width="2"/>' + blade +
      '<rect x="88" y="146" width="224" height="46" fill="#120c18" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="176" text-anchor="middle" ' + A + ' font-size="20" fill="' + GREEN + '" letter-spacing="2">HOMECOMING</text>' +
      '<rect x="130" y="192" width="140" height="16" fill="#ffd98a" opacity=".85"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2b2b30"/><rect x="0" y="204" width="400" height="5" fill="#9a978f"/>' + crowd +
      '<text class="bb-note" x="40" y="120" ' + F + ' font-size="18" fill="' + GREEN + '">♫</text><text class="bb-note bb-note2" x="370" y="190" ' + F + ' font-size="16" fill="' + PURP + '">♪</text>' +
      '<text x="8" y="36" ' + F + ' font-weight="700" font-size="10" fill="#d8d2c4">TREMONT ST</text>',
      sky("bb4", "#0b0f24", "#2c2a4e") + '<clipPath id="bbarch"><path d="M150 136V70q0-34 50-34t50 34v66z"/></clipPath>');
  }

  /* 5. Washington St and Massachusetts Ave: Cathedral of the Holy Cross behind */
  function bbcorner() {
    const tower = (x, top) => '<rect x="' + x + '" y="' + top + '" width="40" height="' + (100 - top) + '" fill="#5d5550"/><rect x="' + (x - 3) + '" y="' + top + '" width="46" height="6" fill="#7a716a"/>' +
      '<path d="M' + (x + 12) + ' ' + (top + 40) + 'v-14q8-12 16 0v14z" fill="#1a1820"/><path d="M' + (x + 4) + ' ' + top + 'v-6h6v6M' + (x + 30) + ' ' + top + 'v-6h6v6" fill="#7a716a"/>';
    return svg(
      '<rect width="400" height="260" fill="#16120f"/>' +
      '<rect x="0" y="0" width="400" height="104" fill="url(#bb5)"/>' + stars(9) +
      /* the cathedral: puddingstone nave between two square towers */
      '<rect x="96" y="44" width="150" height="60" fill="#4e4743"/><path d="M96 46L171 18l75 28z" fill="#5d5550"/>' +
      '<circle cx="171" cy="62" r="13" fill="#2a1f33"/><circle cx="171" cy="62" r="13" fill="none" stroke="#8a7f78" stroke-width="2"/><circle class="bb-flk" cx="171" cy="62" r="6" fill="' + PURP + '" opacity=".7"/>' +
      tower(56, 14) + tower(246, 28) +
      '<rect x="0" y="78" width="60" height="26" fill="#6a3326"/><rect x="330" y="72" width="70" height="32" fill="#7a3a2a"/>' +
      '<rect x="0" y="100" width="400" height="4" fill="#2a1a14"/>' +
      bricks(104, 210, "#4e2a22") +
      tag("BBD", 30, 170, 64, GREEN, -6) + tag("POISON", 170, 160, 30, PURP, -4) + tag("SMOOTHED OUT", 40, 202, 20, GOLD, -3) +
      '<circle class="bb-sp" cx="160" cy="132" r="3" fill="' + GREEN + '"/><circle class="bb-sp bb-sp2" cx="168" cy="140" r="2" fill="' + GREEN + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<g class="bb-car"><rect x="0" y="232" width="50" height="16" rx="5" fill="#2f6fb6"/><circle cx="12" cy="249" r="4" fill="#111"/><circle cx="38" cy="249" r="4" fill="#111"/></g>' +
      signs(276, "Washington St", "Massachusetts Ave"),
      sky("bb5", "#0b1622", "#2a3650"));
  }

  window.SCENES = { bbstop: bbstop, bbclub: bbclub, bbschool: bbschool, bbwang: bbwang, bbcorner: bbcorner };
})();
