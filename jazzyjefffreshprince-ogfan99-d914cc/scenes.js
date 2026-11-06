/* DJ Jazzy Jeff & The Fresh Prince game (REGIONS tab: Philadelphia; West Philly / Overbrook-Wynnefield).
   1 Overbrook station on SEPTA Regional Rail (Paoli/Thorndale Line), the old 1860s stone depot by Will's old neighborhood.
   2 Boathouse Row on the Schuylkill at night (the "Summertime" video rides past it).
   3 The Gallery at Market East, where Mom went school shopping in "Parents Just Don't Understand".
   4 Belmont Plateau, "a place called The Plateau is where everybody go", skyline view at summer sundown.
   5 N 59th St and Woodcrest Ave (Will's block, the 2000 block of N 59th is now Will Smith Way), Overbrook High's
     Castle on the Hill tower behind. 400 x 260 SVGs, classes and ids prefixed jj-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jjcars{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jj-car{animation:jjcars 8s linear infinite}.jj-car2{animation-delay:-4s}' +
    '@keyframes jjblink{0%,100%{opacity:.35}50%{opacity:1}}.jj-bl{animation:jjblink 1.6s ease-in-out infinite}.jj-bl2{animation-delay:.5s}.jj-bl3{animation-delay:1s}' +
    '@keyframes jjrow{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.jj-row{animation:jjrow 11s linear infinite}' +
    '@keyframes jjoar{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.jj-oar{transform-box:fill-box;transform-origin:50% 0%;animation:jjoar 1.1s ease-in-out infinite}' +
    '@keyframes jjripple{0%,100%{transform:scaleX(1);opacity:.5}50%{transform:scaleX(1.25);opacity:.9}}.jj-rip{transform-box:fill-box;transform-origin:50% 50%;animation:jjripple 2.4s ease-in-out infinite}.jj-rip2{animation-delay:-1.2s}' +
    '@keyframes jjsmoke{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-44px);opacity:0}}.jj-smk{animation:jjsmoke 2.8s ease-out infinite}.jj-smk2{animation-delay:-1.4s}' +
    '@keyframes jjesc{from{transform:translate(0,0)}to{transform:translate(-24px,20px)}}.jj-esc{animation:jjesc 1.4s linear infinite}' +
    '@keyframes jjbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.jj-ball{animation:jjbounce 1s ease-in-out infinite}' +
    '@keyframes jjspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(46px,-10px);opacity:0}}.jj-sp{animation:jjspray 1s ease-out infinite}.jj-sp2{animation-delay:.33s}.jj-sp3{animation-delay:.66s}' +
    '@keyframes jjsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jj-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jjsway 3s ease-in-out infinite}' +
    '@keyframes jjtwinkle{0%,100%{opacity:.2}50%{opacity:1}}.jj-tw{animation:jjtwinkle 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round head + straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.24) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.15) + '"/><rect x="' + (x + h * 0.44) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.15) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  const GOLD = "#ffcf3a", TEAL = "#2ec4b6", PINK = "#ff4f7b", RR = "#91456c";
  const skyline = (fill, base, s) => '<g fill="' + fill + '" transform="translate(0 ' + base + ') scale(1 ' + (s || 1) + ')">' +
    '<rect x="150" y="-60" width="22" height="60"/><rect x="176" y="-92" width="18" height="92"/><path d="M176 -92l9 -22 9 22z"/><rect x="184.2" y="-126" width="1.6" height="14"/>' +
    '<rect x="200" y="-78" width="16" height="78"/><path d="M200 -78l8 -16 8 16z"/><rect x="222" y="-104" width="20" height="104"/><rect x="226" y="-112" width="12" height="8"/>' +
    '<rect x="248" y="-66" width="18" height="66"/><rect x="128" y="-44" width="18" height="44"/><rect x="270" y="-48" width="22" height="48"/></g>';

  /* 1. Overbrook station: low side platforms, the old stone depot, catenary overhead, a stainless Silverliner pulling in */
  function jjstation() {
    const tr = '<g class="anim-train"><rect x="24" y="118" width="320" height="64" rx="6" fill="#c9cdd2" stroke="#7d838a" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (36 + i * 38) + '" y="128" width="26" height="20" rx="2" fill="#24303a"/>').join("") +
      '<rect x="24" y="154" width="320" height="5" fill="#c8102e"/><rect x="24" y="160" width="320" height="5" fill="#1f4e9a"/>' +
      '<rect x="318" y="122" width="26" height="58" rx="4" fill="#aeb3b9"/><rect x="322" y="128" width="18" height="16" rx="2" fill="#24303a"/><circle cx="331" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 118l18 -18h40l18 18" fill="none" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jj-s1)"/>' +
      [30, 80, 350, 384].map((x, i) => '<g class="jj-sway"><circle cx="' + x + '" cy="' + (64 + (i % 2) * 8) + '" r="' + (26 + (i % 2) * 6) + '" fill="#3f7a3a"/><rect x="' + (x - 3) + '" y="80" width="6" height="30" fill="#4a3424"/></g>').join("") +
      /* old stone depot */
      '<rect x="128" y="50" width="150" height="62" fill="#8b8478"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M128 ' + (58 + i * 9) + 'h150" stroke="#7a7368" stroke-width="1"/>').join("") +
      '<path d="M118 52l85 -34 85 34z" fill="#5a2e2a"/><rect x="190" y="12" width="10" height="20" fill="#6a5e52"/>' +
      [146, 176, 230, 258].map(x => '<rect x="' + x + '" y="66" width="14" height="24" rx="7" fill="#2d3a44" stroke="#e8dcc2" stroke-width="2"/>').join("") +
      '<rect x="204" y="70" width="16" height="42" fill="#5a2e2a"/>' +
      /* catenary */
      [40, 200, 360].map(x => '<rect x="' + (x - 2) + '" y="20" width="4" height="96" fill="#5b5f63"/><rect x="' + (x - 14) + '" y="22" width="28" height="3" fill="#5b5f63"/>').join("") +
      '<path d="M0 30h400M0 38h400" stroke="#3b3f43" stroke-width="1.2"/>' +
      '<rect x="0" y="112" width="400" height="76" fill="#3a3632"/>' + tr +
      '<rect x="0" y="188" width="400" height="6" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#9a958c"/>' +
      '<rect x="40" y="200" width="2" height="0"/>' +
      '<rect x="112" y="204" width="176" height="32" rx="3" fill="#111"/><text x="124" y="226" ' + font + ' font-size="17" fill="#fff">Overbrook</text>' + badge(228, 220, "RR", RR) +
      '<rect x="196" y="236" width="8" height="24" fill="#333"/>' +
      '<rect class="jj-bl" x="20" y="208" width="60" height="5" rx="2" fill="#fff6c2" opacity=".5"/><rect class="jj-bl jj-bl2" x="320" y="208" width="60" height="5" rx="2" fill="#fff6c2" opacity=".5"/>',
      sky("jj-s1", "#7fc4ea", "#e9f4f7"));
  }

  /* 2. Boathouse Row at night: the outlined boathouses on the Schuylkill, a rowing shell gliding by */
  function jjboathouse() {
    const houses = [[14, 60, 56], [76, 70, 50], [150, 54, 60], [210, 66, 52], [282, 58, 58], [344, 52, 54]];
    const hs = houses.map(([x, w, h], i) => {
      const b = 150, t = b - h;
      return '<g><path d="M' + x + ' ' + b + 'V' + (t + 16) + 'l' + (w / 2) + ' -' + 22 + 'l' + (w / 2) + ' 22V' + b + 'z" fill="#1d2433"/>' +
        '<path class="jj-bl' + (i % 3 ? " jj-bl" + (i % 3 + 1) : "") + '" d="M' + x + ' ' + b + 'V' + (t + 16) + 'l' + (w / 2) + ' -22l' + (w / 2) + ' 22V' + b + '" fill="none" stroke="#fff3c4" stroke-width="2" stroke-dasharray="1 4" stroke-linecap="round"/>' +
        '<rect x="' + (x + w / 2 - 8) + '" y="' + (b - 24) + '" width="16" height="24" fill="#f2c96a" opacity=".55"/>' +
        '<rect x="' + (x + 6) + '" y="' + (t + 24) + '" width="9" height="11" fill="#f2c96a" opacity=".6"/><rect x="' + (x + w - 15) + '" y="' + (t + 24) + '" width="9" height="11" fill="#f2c96a" opacity=".6"/></g>';
    }).join("");
    const refl = houses.map(([x, w], i) => '<rect class="jj-rip' + (i % 2 ? " jj-rip2" : "") + '" x="' + (x + 4) + '" y="' + (166 + (i % 3) * 8) + '" width="' + (w - 8) + '" height="2" fill="#fff3c4"/>').join("");
    const shell = '<g class="jj-row"><rect x="0" y="206" width="120" height="5" rx="2.5" fill="#e9e4d8"/>' +
      [16, 40, 64, 88].map(x => '<g><rect x="' + x + '" y="196" width="6" height="10" rx="2" fill="' + GOLD + '"/><rect class="jj-oar" x="' + (x + 2) + '" y="204" width="2" height="16" fill="#ddd"/></g>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jj-s2)"/>' +
      Array.from({ length: 26 }, (_, i) => '<circle class="' + (i % 3 ? "" : "jj-tw") + '" cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 37) % 60) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff"/>').join("") +
      '<circle cx="340" cy="34" r="14" fill="#f6f1d8"/>' +
      '<path d="M0 118q60 -20 120 -6q80 -18 160 -4q60 -10 120 0V150H0z" fill="#16202c"/>' +
      hs + '<rect x="0" y="150" width="400" height="6" fill="#2b2f37"/>' +
      '<rect x="0" y="156" width="400" height="104" fill="url(#jj-w2)"/>' + refl + shell,
      sky("jj-s2", "#0b1030", "#3a2a5a") + sky("jj-w2", "#1a2a44", "#0a1220"));
  }

  /* 3. The Gallery at Market East: the glass barrel-vault entrance, shoppers' bags, a plaid butterfly-collar shirt in the window */
  function jjgallery() {
    const glass = Array.from({ length: 9 }, (_, i) => '<path d="M' + (90 + i * 26) + ' 132V' + (64 + Math.abs(4 - i) * 4) + '" stroke="#9fb7c6" stroke-width="2"/>').join("");
    const plaid = '<g transform="translate(28 128)"><path d="M0 8l14 -8h16l14 8l-6 10h-6v34h-26v-34h-6z" fill="#c4572e"/>' +
      [6, 14, 22, 30, 38].map(x => '<rect x="' + x + '" y="0" width="3" height="52" fill="#f2d16a" opacity=".55"/>').join("") +
      [8, 18, 28, 38].map(y => '<rect x="0" y="' + y + '" width="44" height="3" fill="#3a6a3a" opacity=".55"/>').join("") +
      '<path d="M15 0l7 12l7 -12l-7 3z" fill="#fff"/><path d="M15 0l-6 16l9 -4zM29 0l6 16l-9 -4z" fill="#f3e6c8"/></g>';
    const esc = '<g><path d="M300 236l70 -60" stroke="#555" stroke-width="16"/>' + '<g class="jj-esc">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (370 - i * 14) + '" y="' + (172 + i * 12) + '" width="10" height="3" fill="#ccc"/>').join("") + '</g><path d="M298 226l70 -60" stroke="#222" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jj-s3)"/>' +
      '<rect x="0" y="40" width="80" height="150" fill="#8e7a68"/><rect x="320" y="30" width="80" height="160" fill="#7a6a5c"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (8 + (i % 2) * 36 + (i > 3 ? 320 : 0)) + '" y="' + (52 + Math.floor((i % 4) / 2) * 30) + '" width="26" height="18" fill="#2c3440"/>').join("") +
      '<path d="M80 132V80q120 -60 240 0V132z" fill="#bcd6e4" opacity=".85"/>' + glass + '<path d="M80 80q120 -60 240 0" fill="none" stroke="#6f8796" stroke-width="4"/>' +
      '<rect x="80" y="132" width="240" height="58" fill="#c9b9a2"/><rect x="110" y="96" width="180" height="26" rx="3" fill="#1d1d24"/><text x="200" y="115" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">THE GALLERY</text>' +
      '<rect x="160" y="140" width="80" height="50" fill="#2a3a44"/><path d="M200 140v50" stroke="#9fb7c6" stroke-width="2"/>' +
      '<rect x="14" y="120" width="62" height="66" fill="#e9e1cf" stroke="#6a5a48" stroke-width="3"/>' + plaid +
      '<rect x="0" y="190" width="400" height="70" fill="#b9b2a6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 190l-20 70" stroke="#a49d91" stroke-width="1"/>').join("") +
      '<g class="jj-car"><rect x="0" y="222" width="22" height="16" rx="2" fill="' + PINK + '"/><path d="M5 222q6 -10 12 0" fill="none" stroke="#333" stroke-width="2"/></g>' +
      '<g class="jj-car jj-car2"><rect x="0" y="226" width="20" height="14" rx="2" fill="' + TEAL + '"/><path d="M4 226q6 -9 12 0" fill="none" stroke="#333" stroke-width="2"/></g>' + esc,
      sky("jj-s3", "#9cc8e6", "#eef3f2"));
  }

  /* 4. Belmont Plateau at summer sundown: the hill, grills smoking, the Center City skyline across the park */
  function jjplateau() {
    const grill = (x) => '<g><ellipse cx="' + x + '" cy="176" rx="16" ry="7" fill="#222"/><rect x="' + (x - 16) + '" y="170" width="32" height="6" fill="#333"/><path d="M' + (x - 10) + ' 176l-4 22M' + (x + 10) + ' 176l4 22M' + x + ' 176v22" stroke="#222" stroke-width="2"/>' +
      '<circle class="jj-smk" cx="' + x + '" cy="164" r="6" fill="#ddd" opacity=".6"/><circle class="jj-smk jj-smk2" cx="' + (x + 4) + '" cy="160" r="5" fill="#ddd" opacity=".5"/></g>';
    const blanket = (x, y, c) => '<path d="M' + x + ' ' + y + 'l40 -6l14 14l-40 6z" fill="' + c + '"/><path d="M' + (x + 10) + ' ' + (y - 2) + 'l14 14M' + (x + 24) + ' ' + (y - 4) + 'l14 14" stroke="#fff" stroke-width="1.5" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jj-s4)"/><circle cx="300" cy="84" r="26" fill="#ffd36a" opacity=".9"/>' +
      skyline("#5a3a5a", 128) + '<path d="M0 128h400v10H0z" fill="#4a5a3a"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (i * 50) + '" cy="132" r="18" fill="#3c5a30"/>').join("") +
      '<path d="M0 150q200 -30 400 0V260H0z" fill="#5f9a3a"/><path d="M0 190q200 -26 400 4V260H0z" fill="#4f8a32"/>' +
      grill(70) + grill(330) + blanket(150, 200, PINK) + blanket(230, 214, TEAL) +
      '<g class="jj-car"><rect x="0" y="236" width="60" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="34" height="10" rx="3" fill="' + GOLD + '"/><rect x="15" y="230" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="230" width="12" height="6" fill="#bfe3ff"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="48" cy="250" r="4" fill="#111"/></g>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" opacity=".85" letter-spacing="3">THE PLATEAU</text>',
      sky("jj-s4", "#4a2a6a", "#ff9a5a"));
  }

  /* 5. N 59th St and Woodcrest Ave: West Philly porch-front twins, the water plug going, the wall tagged, Overbrook High's tower on the hill */
  function jjcorner() {
    const sign59 = (x, y) => '<rect x="' + x + '" y="' + y + '" width="80" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + 8) + '" y="' + (y + 16) + '" ' + font + ' font-size="13" fill="#fff">N 5</text>' + nine(x + 30.5, y + 16, 10, "#fff") +
      '<text x="' + (x + 39.5) + '" y="' + (y + 16) + '" ' + font + ' font-size="13" fill="#fff">th St</text>';
    const signW = (x, y) => '<rect x="' + x + '" y="' + y + '" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 52) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Woodcrest Ave</text>';
    const tower = '<g fill="#8a4a32"><rect x="196" y="22" width="40" height="80"/><rect x="190" y="14" width="52" height="12"/>' +
      [190, 202, 214, 226, 238].map(x => '<rect x="' + x + '" y="6" width="6" height="10"/>').join("") +
      '<rect x="120" y="70" width="190" height="40"/></g><rect x="208" y="36" width="16" height="22" rx="8" fill="#2c3440"/>' +
      [130, 150, 170, 260, 280].map(x => '<rect x="' + x + '" y="80" width="10" height="16" fill="#2c3440"/>').join("");
    const twins = Array.from({ length: 4 }, (_, i) => {
      const x = i * 100;
      return '<rect x="' + x + '" y="112" width="98" height="104" fill="' + ["#8a4e3a", "#9a6a4a", "#7a4636", "#a0724c"][i] + '"/>' +
        '<path d="M' + x + ' 160h98v8H' + x + 'z" fill="' + [TEAL, PINK, GOLD, TEAL][i] + '"/>' +
        '<rect x="' + (x + 14) + '" y="124" width="22" height="24" fill="#2c3440"/><rect x="' + (x + 60) + '" y="124" width="22" height="24" fill="#2c3440"/>' +
        '<rect x="' + x + '" y="196" width="98" height="4" fill="#ddd"/>' + [6, 30, 54, 78].map(k => '<rect x="' + (x + k) + '" y="170" width="3" height="26" fill="#eee"/>').join("");
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jj-s5)"/>' +
      '<path d="M90 110q120 -40 260 0z" fill="#5f8a3a"/>' + tower + twins +
      '<rect x="96" y="170" width="200" height="46" fill="#d8cfc0"/>' + tag("JEFF + PRINCE", 104, 200, 24, GOLD, -4) + tag("SMELL YA LATER", 170, 213, 13, PINK, -3) +
      '<rect x="0" y="216" width="400" height="44" fill="#5d5a55"/><rect x="0" y="214" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="341" y="88" width="6" height="128" fill="#2f2f2f"/>' + sign59(300, 92) + signW(292, 116) +
      '<rect x="296" y="142" width="96" height="16" rx="2" fill="#6a3a1e" stroke="#fff" stroke-width="1"/><text x="344" y="154" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Will Smith Way</text>' +
      '<g><rect x="40" y="196" width="14" height="22" rx="3" fill="#c8102e"/><rect x="36" y="200" width="22" height="5" fill="#a00d24"/><circle cx="58" cy="206" r="3" fill="#888"/>' +
      '<circle class="jj-sp" cx="62" cy="206" r="3" fill="#bfe8ff"/><circle class="jj-sp jj-sp2" cx="62" cy="204" r="2.5" fill="#bfe8ff"/><circle class="jj-sp jj-sp3" cx="62" cy="208" r="2.5" fill="#bfe8ff"/></g>' +
      '<g class="jj-ball"><circle cx="20" cy="226" r="7" fill="#e2702a"/><path d="M13 226h14M20 219v14" stroke="#7a3a12" stroke-width="1.2"/></g>',
      sky("jj-s5", "#6ab8e6", "#f6e3b4"));
  }

  window.SCENES = { jjstation: jjstation, jjboathouse: jjboathouse, jjgallery: jjgallery, jjplateau: jjplateau, jjcorner: jjcorner };
})();
