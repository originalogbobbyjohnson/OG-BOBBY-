/* japanesebreakfast scenes (Regions tab: Philadelphia; Bryn Mawr on the Main Line, where Michelle Zauner went to college before the Philly DIY scene). CSS classes prefixed jb- (the page's own anim-train is kept).
   1 Bryn Mawr station on SEPTA Regional Rail's Paoli/Thorndale Line (54 N Bryn Mawr Ave): the low-level side platforms, the 1960s colonial-style brick station house with white trim and cupola, a silver Silverliner rolling in.
   2 Bryn Mawr College: the gray-stone Collegiate Gothic Pembroke Arch with its twin towers, paper lanterns floating up (Lantern Night).
   3 Union Transfer, 1026 Spring Garden St, where she worked coat check before headlining it: red-brick warehouse front with tall arched windows, the marquee bulbs chasing, the coat-check counter through the door.
   4 12 Steps Down, 831 Christian St in South Philly, the basement spot where she met her husband (her song "12 Steps"): rowhouse front, the stairs down, a neon sign flickering.
   5 W Lancaster Ave and N Bryn Mawr Ave: green signs, JAPANESE BREAKFAST tagged on the wall, the Bryn Mawr Film Institute's Art Deco marquee glowing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jbfloat{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-150px);opacity:0}}.jb-lan{animation:jbfloat 6s linear infinite}.jb-l2{animation-delay:-1.5s}.jb-l3{animation-delay:-3s}.jb-l4{animation-delay:-4.5s}' +
    '@keyframes jbbulb{0%,100%{opacity:1}50%{opacity:.25}}.jb-bulb{animation:jbbulb 1s steps(1) infinite}.jb-b2{animation-delay:-.5s}' +
    '@keyframes jbneon{0%,100%{opacity:1}42%{opacity:1}45%{opacity:.3}48%{opacity:1}70%{opacity:.85}}.jb-neon{animation:jbneon 3s infinite}' +
    '@keyframes jbcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.jb-car{animation:jbcar 7s linear infinite}' +
    '@keyframes jbbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.jb-bird{animation:jbbird 14s linear infinite}' +
    '@keyframes jbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jb-sp{animation:jbsp 1.4s ease-out infinite}.jb-sp2{animation-delay:.45s}' +
    '@keyframes jbglow{0%,100%{opacity:.5}50%{opacity:1}}.jb-glow{animation:jbglow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const bricks = (x0, y0, w, h, c) => Array.from({ length: Math.floor(h / 7) }, (_, i) => '<path d="M' + x0 + ' ' + (y0 + 7 + i * 7) + 'h' + w + '" stroke="' + c + '" stroke-width="1"/>').join("");
  const stones = (x0, y0, w, h, seed) => {
    let s = '', k = seed || 1;
    const cols = ["#8f8c86", "#a3a099", "#7d7a74", "#b2ada4", "#96918a"];
    for (let y = y0; y < y0 + h - 4; y += 9) {
      for (let x = x0 + ((y / 9) % 2) * 6; x < x0 + w - 6; x += 15) {
        k = (k * 37 + 11) % 97;
        const ww = Math.min(11 + (k % 5), x0 + w - x - 1);
        s += '<rect x="' + x + '" y="' + (y + 1) + '" width="' + ww + '" height="7" rx="1.5" fill="' + cols[k % 5] + '"/>';
      }
    }
    return s;
  };
  const PINK = "#f4a6c0", GOLD = "#ffd36e", MINT = "#7fd1c7", RR = "#91456c";

  /* 1. Bryn Mawr station, Paoli/Thorndale Line */
  function jbstation() {
    const car = (x) => '<rect x="' + x + '" y="134" width="196" height="60" rx="6" fill="#c9ced4" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 12 + i * 30) + '" y="142" width="22" height="18" rx="2" fill="#1f2830"/>').join("") +
      '<rect x="' + x + '" y="166" width="196" height="4" fill="#c8102e"/><rect x="' + x + '" y="171" width="196" height="4" fill="#1f4e9a"/>' +
      '<rect x="' + (x + 88) + '" y="142" width="20" height="48" fill="#a9b0b8" stroke="#7a828a"/>';
    const train = '<g class="anim-train">' + car(4) + car(204) +
      '<rect x="206" y="125" width="76" height="9" rx="2" fill="#111"/><text x="244" y="132.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">THORNDALE</text>' +
      '<circle cx="40" cy="198" r="7" fill="#2a2a2a"/><circle cx="160" cy="198" r="7" fill="#2a2a2a"/><circle cx="240" cy="198" r="7" fill="#2a2a2a"/><circle cx="360" cy="198" r="7" fill="#2a2a2a"/></g>';
    /* colonial-style brick station house: red brick, white trim, dark slate roof, small white cupola */
    const house = '<rect x="130" y="70" width="140" height="58" fill="#a24a36"/>' + bricks(130, 70, 140, 58, "#8a3c2c") +
      [146, 178, 210, 242].map(x => '<rect x="' + x + '" y="80" width="14" height="22" fill="#2c3440" stroke="#fff" stroke-width="2.5"/><path d="M' + (x + 7) + ' 80v22M' + x + ' 91h14" stroke="#fff" stroke-width="1"/>').join("") +
      '<rect x="190" y="106" width="20" height="22" fill="#f4f1e8"/><rect x="193" y="109" width="14" height="19" fill="#3a4a5a"/>' +
      '<path d="M122 72l78 -30l78 30z" fill="#3f4448" stroke="#2a2e31" stroke-width="2"/><rect x="122" y="70" width="156" height="4" fill="#f4f1e8"/>' +
      '<rect x="192" y="28" width="16" height="16" fill="#f4f1e8" stroke="#ccc"/><path d="M188 30l12 -12l12 12z" fill="#3f4448"/><path d="M200 18v-8" stroke="#3a3a3a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb-s1)"/>' +
      '<g class="jb-bird"><path d="M0 34q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a4a" stroke-width="1.5"/></g>' +
      tree(36, 104, 2.3, "#4f7d3a") + tree(366, 102, 2.3, "#5b8a40") + tree(92, 112, 1.4, "#3f6e34") + tree(312, 112, 1.4, "#3f6e34") +
      house +
      /* catenary */
      '<path d="M20 60v74M380 60v74" stroke="#5a5f66" stroke-width="3"/><path d="M14 64h372M0 74h400" stroke="#5a5f66" stroke-width="1.2"/>' +
      '<rect x="0" y="128" width="400" height="7" fill="#b8b2a6"/>' +
      '<rect x="0" y="194" width="400" height="8" fill="#6a5a4a"/><path d="M0 200h400M0 206h400" stroke="#8a8f96" stroke-width="2"/>' +
      train +
      '<rect x="0" y="208" width="400" height="52" fill="#a8a29a"/><rect x="0" y="208" width="400" height="4" fill="#f0d24a"/>' +
      '<rect x="60" y="220" width="280" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(72, 236, "RR", RR) +
      '<text x="214" y="243" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Bryn Mawr</text>',
      sky("jb-s1", "#9fd0ee", "#f7e3d4"));
  }

  /* 2. Bryn Mawr College, Pembroke Arch, Lantern Night */
  function jbcollege() {
    const lantern = (x, y, c, cls) => '<g class="jb-lan ' + cls + '"><rect x="' + (x - 7) + '" y="' + y + '" width="14" height="18" rx="5" fill="' + c + '" stroke="#5a2a10" stroke-width="1"/><path d="M' + x + ' ' + y + 'v-6" stroke="#333" stroke-width="1"/><rect x="' + (x - 4) + '" y="' + (y + 4) + '" width="8" height="10" rx="3" fill="#fff6c8" opacity=".8"/></g>';
    const tower = (x) => '<rect x="' + x + '" y="44" width="64" height="150" fill="#9a968f"/>' + stones(x, 44, 64, 150, x) +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + i * 14 - 2) + '" y="34" width="10" height="12" fill="#8a867f"/>').join("") +
      '<rect x="' + (x + 22) + '" y="66" width="20" height="34" rx="10" fill="#2c3440" stroke="#d9d4c8" stroke-width="2"/><path d="M' + (x + 32) + ' 66v34" stroke="#d9d4c8" stroke-width="1.5"/>' +
      '<rect x="' + (x + 22) + '" y="124" width="20" height="30" fill="#2c3440" stroke="#d9d4c8" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb-s2)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff7d6" class="jb-glow"/>' +
      /* wings */
      '<rect x="0" y="96" width="100" height="98" fill="#8f8c86"/>' + stones(0, 96, 100, 98, 5) + '<rect x="300" y="96" width="100" height="98" fill="#8f8c86"/>' + stones(300, 96, 100, 98, 7) +
      [20, 60, 320, 360].map(x => '<rect x="' + x + '" y="114" width="16" height="26" fill="#ffd98a" stroke="#d9d4c8" stroke-width="2"/>').join("") +
      '<path d="M-4 98l52 -22l56 22zM296 98l56 -22l52 22z" fill="#4a4e54"/>' +
      tower(100) + tower(236) +
      /* the arch between the towers */
      '<rect x="164" y="80" width="72" height="114" fill="#9a968f"/>' + stones(164, 80, 72, 114, 9) +
      '<path d="M164 72h72v10h-72z" fill="#8a867f"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (166 + i * 14) + '" y="66" width="9" height="8" fill="#8a867f"/>').join("") +
      '<path d="M174 194v-58q26 -40 52 0v58z" fill="#1d2430" stroke="#d9d4c8" stroke-width="3"/>' +
      '<path d="M182 194v-50q18 -26 36 0v50z" fill="#2b3a2f"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#5f7f45"/><path d="M174 194l-30 66h112l-30 -66z" fill="#b9b2a2"/>' +
      lantern(70, 170, "#f2a33a", "") + lantern(150, 176, "#4fa3d8", "jb-l2") + lantern(250, 172, "#d84a4a", "jb-l3") + lantern(330, 178, "#f2a33a", "jb-l4") +
      '<rect x="128" y="212" width="144" height="26" rx="3" fill="#1d1d24" stroke="#f4f1e8" stroke-width="1.5"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="11" fill="#f4f1e8">BRYN MAWR COLLEGE</text>',
      sky("jb-s2", "#1d2346", "#6a4a7a"));
  }

  /* 3. Union Transfer, Spring Garden St */
  function jbut() {
    const bulbs = (x, y, w) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<circle cx="' + (x + 5 + i * 10) + '" cy="' + y + '" r="2.4" fill="' + GOLD + '" class="jb-bulb' + (i % 2 ? ' jb-b2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jb-s3)"/>' +
      '<rect x="20" y="30" width="360" height="170" fill="#8e3e2e"/>' + bricks(20, 30, 360, 170, "#7a3326") +
      '<rect x="20" y="26" width="360" height="8" fill="#6a2c20"/>' +
      [40, 104, 296, 334].map(x => '<path d="M' + x + ' 104v-44q14 -18 28 0v44z" fill="#ffd98a" stroke="#e8dcc0" stroke-width="3"/><path d="M' + (x + 14) + ' 44v60M' + x + ' 80h28" stroke="#e8dcc0" stroke-width="1.5"/>').join("") +
      /* marquee */
      '<rect x="120" y="96" width="160" height="40" rx="3" fill="#1b1b22" stroke="#e8dcc0" stroke-width="2"/>' + bulbs(122, 100, 156) + bulbs(122, 132, 156) +
      '<text x="200" y="114" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TONIGHT  SOLD OUT</text>' +
      '<text x="200" y="127" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '">JAPANESE BREAKFAST</text>' +
      /* doors with coat check inside */
      '<rect x="140" y="140" width="120" height="60" fill="#2a2018"/>' +
      '<rect x="146" y="146" width="108" height="54" fill="#3a2a20"/><rect x="146" y="176" width="108" height="8" fill="#6a4a30"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (156 + i * 14) + ' 152v4" stroke="#bbb" stroke-width="1.5"/><path d="M' + (151 + i * 14) + ' 158h10l2 16h-14z" fill="' + ["#c0392b", "#2c3e50", PINK, "#16a085", "#f39c12", "#34495e", MINT][i] + '"/>').join("") +
      '<rect x="176" y="184" width="48" height="11" fill="#f4f1e8"/><text x="200" y="192.5" text-anchor="middle" ' + font + ' font-size="7" fill="#222">COAT CHECK</text>' +
      [40, 104, 296, 334].map(x => '<rect x="' + x + '" y="148" width="28" height="40" fill="#2c3440" stroke="#e8dcc0" stroke-width="2"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#55555c"/><rect x="0" y="200" width="400" height="6" fill="#9a9aa2"/>' +
      '<g class="jb-car"><rect x="0" y="222" width="80" height="20" rx="5" fill="' + MINT + '"/><rect x="14" y="212" width="46" height="14" rx="4" fill="' + MINT + '"/><rect x="18" y="215" width="17" height="9" fill="#24323a"/><rect x="39" y="215" width="17" height="9" fill="#24323a"/><circle cx="18" cy="244" r="6" fill="#222"/><circle cx="62" cy="244" r="6" fill="#222"/></g>' +
      sign(286, 6, 104, "Spring Garden St").replace('y="6"', 'y="4"'),
      sky("jb-s3", "#151530", "#3a2a4a"));
  }

  /* 4. 12 Steps Down, Christian St */
  function jb12() {
    return svg(
      '<rect width="400" height="260" fill="url(#jb-s4)"/>' +
      /* rowhouses */
      '<rect x="0" y="30" width="130" height="150" fill="#9a4636"/>' + bricks(0, 30, 130, 150, "#843a2c") +
      '<rect x="130" y="40" width="150" height="140" fill="#b0563c"/>' + bricks(130, 40, 150, 140, "#9a4a32") +
      '<rect x="280" y="30" width="120" height="150" fill="#8c4030"/>' + bricks(280, 30, 120, 150, "#783628") +
      [[20, 50], [76, 50], [150, 58], [214, 58], [300, 50], [352, 50], [20, 108], [76, 108], [300, 108], [352, 108]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="30" height="38" fill="#ffd98a" stroke="#f4f1e8" stroke-width="2.5"/><path d="M' + (p[0] + 15) + ' ' + p[1] + 'v38" stroke="#f4f1e8" stroke-width="1.2"/>').join("") +
      '<rect x="0" y="26" width="400" height="6" fill="#4a2a20"/>' +
      /* neon sign */
      '<rect x="150" y="104" width="110" height="34" rx="4" fill="#1a1020" stroke="#333" stroke-width="2"/>' +
      '<g class="jb-neon"><text x="205" y="127" text-anchor="middle" font-family="Brush Script MT, cursive" font-size="20" fill="#ff4fa0" stroke="#ff9ccc" stroke-width=".6">12 Steps Down</text></g>' +
      /* sidewalk + the stairwell down */
      '<rect x="0" y="180" width="400" height="80" fill="#8d8a86"/><path d="M0 180h400" stroke="#6a6866" stroke-width="3"/>' +
      '<rect x="150" y="180" width="110" height="60" fill="#3a3436"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (152 + i * 4) + '" y="' + (184 + i * 9) + '" width="' + (106 - i * 8) + '" height="4" fill="#6a6466"/>').join("") +
      '<rect x="186" y="228" width="38" height="12" fill="#2a1a24"/><rect x="192" y="230" width="26" height="10" fill="#ff4fa0" opacity=".55" class="jb-neon"/>' +
      '<path d="M146 180v-26h4v26M264 180v-26h-4v26M146 156h118" stroke="#1a1a1a" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#4a4a50"/>' +
      sign(300, 196, 90, "Christian St") + '<path d="M345 218v22" stroke="#3a3a3a" stroke-width="3"/>' +
      '<circle cx="60" cy="150" r="9" fill="#fff6c8" class="jb-glow"/><path d="M60 159v21" stroke="#222" stroke-width="3"/>',
      sky("jb-s4", "#0e1430", "#2a2048"));
  }

  /* 5. W Lancaster Ave & N Bryn Mawr Ave */
  function jbcorner() {
    const bulbs = (x, y, w) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<circle cx="' + (x + 5 + i * 10) + '" cy="' + y + '" r="2.2" fill="' + GOLD + '" class="jb-bulb' + (i % 2 ? ' jb-b2' : '') + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jb-s5)"/>' +
      /* the Film Institute behind: cream Art Deco front, vertical blade, marquee */
      '<rect x="210" y="40" width="160" height="100" fill="#efe2c4"/><path d="M210 40h160v8h-160z" fill="#d9c79c"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (226 + i * 26) + ' 50v40" stroke="#d9c79c" stroke-width="3"/>').join("") +
      '<rect x="278" y="10" width="24" height="84" rx="3" fill="#2b2b3a" stroke="' + GOLD + '" stroke-width="2"/>' +
      ['B', 'M', 'F', 'I'].map((c, i) => '<text x="290" y="' + (30 + i * 18) + '" text-anchor="middle" ' + font + ' font-size="14" fill="' + GOLD + '" class="jb-glow">' + c + '</text>').join("") +
      '<rect x="226" y="96" width="128" height="26" fill="#1b1b22" stroke="#d9c79c" stroke-width="2"/>' + bulbs(228, 99, 124) + bulbs(228, 119, 124) +
      '<text x="290" y="112" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">NOW SHOWING</text>' +
      /* wall with the tag */
      '<rect x="0" y="120" width="260" height="96" fill="#7d7a76"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 7) + 'h260" stroke="#6c6965" stroke-width="1"/>').join("") +
      tag("JAPANESE", 20, 160, 30, PINK, -5) + tag("BREAKFAST", 40, 196, 30, GOLD, -5) +
      '<g class="jb-sp"><circle cx="232" cy="150" r="3" fill="' + PINK + '"/></g><g class="jb-sp jb-sp2"><circle cx="240" cy="160" r="2.5" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4a50"/><rect x="0" y="216" width="400" height="5" fill="#9a9aa2"/>' +
      '<path d="M0 240h40M70 240h40M140 240h40M210 240h40M280 240h40M350 240h40" stroke="#f0d24a" stroke-width="2"/>' +
      /* signpost */
      '<rect x="326" y="146" width="5" height="70" fill="#3a3a3a"/>' + sign(272, 148, 114, "W Lancaster Ave") + sign(276, 174, 106, "N Bryn Mawr Ave"),
      sky("jb-s5", "#f6a37a", "#5a3a7a"));
  }

  window.SCENES = { jbstation, jbcollege, jbut, jb12, jbcorner };
})();
