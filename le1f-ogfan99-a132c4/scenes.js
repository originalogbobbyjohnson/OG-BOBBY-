/* Le1f game (NYC map, Manhattan: Hell's Kitchen, where Khalif Diouf was raised by his mom).
   The C/E down at 50 St on 8 Av, the Dance Theatre of Harlem studio on W 152 St (ballet from age four),
   Wesleyan's College Row (dance degree, beats for Das Racist), the round steel White Mana diner in Jersey City (the "Boom" video),
   and W 47 St & 10 Av with Worldwide Plaza's copper pyramid and glowing lantern behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lfcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.lf-car{animation:lfcar 7s linear infinite}.lf-car2{animation-delay:-3.5s}' +
    '@keyframes lfblink{0%,100%{opacity:.25}50%{opacity:1}}.lf-bl{animation:lfblink 1.8s ease-in-out infinite}.lf-bl2{animation-delay:.6s}.lf-bl3{animation-delay:1.2s}' +
    '@keyframes lfflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.lf-flk{animation:lfflick 2.6s infinite}' +
    '@keyframes lfpir{0%{transform:scaleX(1)}25%{transform:scaleX(.15)}50%{transform:scaleX(-1)}75%{transform:scaleX(.15)}100%{transform:scaleX(1)}}.lf-pir{transform-box:fill-box;transform-origin:50% 50%;animation:lfpir 1.6s ease-in-out infinite}' +
    '@keyframes lfleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,200px) rotate(320deg)}}.lf-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:lfleaf 6s linear infinite}.lf-leaf2{animation-delay:-2s}.lf-leaf3{animation-delay:-4s}' +
    '@keyframes lfswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.lf-bell{transform-box:fill-box;transform-origin:50% 0%;animation:lfswing 1.6s ease-in-out infinite}' +
    '@keyframes lfsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-26px);opacity:0}}.lf-stm{animation:lfsteam 2.2s ease-out infinite}.lf-stm2{animation-delay:-1.1s}' +
    '@keyframes lfglow{0%,100%{opacity:.55}50%{opacity:1}}.lf-glow{animation:lfglow 2.4s ease-in-out infinite}' +
    '@keyframes lfbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lf-bob{animation:lfbob .6s ease-in-out infinite}.lf-bob2{animation-delay:.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", AQUA = "#2ee6d6", GOLD = "#ffd166", CREAM = "#f6efe2", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. 50 St on 8 Av, underground: white tile, the maroon band, the black sign with the C and E, the C train sliding in */
  function fifty() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1efe8"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="38" width="8" height="8" fill="' + (x % 32 ? "#7b2d3a" : "#d9b45a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd8cc"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#4a1b24"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#29292d"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="lf-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="15" fill="#fff">50 St</text>' +
      bullet(290, 74, "C", BLUE) + bullet(316, 74, "E", BLUE) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2a4f8f"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "C", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5b5853"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(332, 196, "#1b1b1b") + person(354, 200, "#3a2140") +
      txt("8 AV · HELL'S KITCHEN", 160, 236, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. Dance Theatre of Harlem, W 152 St: the studio with tall windows, the mirror wall, the barre, a dancer spinning on the wood floor */
  function dth() {
    let floor = "";
    for (let x = 0; x < 400; x += 26) floor += '<path d="M' + x + ' 196L' + (x - 30) + ' 260" stroke="#8a5a2e" stroke-width="1.2"/>';
    const win = x => '<rect x="' + x + '" y="34" width="56" height="96" rx="28" fill="#f7d9a8"/><rect x="' + x + '" y="34" width="56" height="96" rx="28" fill="none" stroke="#5b3a2a" stroke-width="4"/><path d="M' + (x + 28) + ' 34v96M' + x + ' 82h56" stroke="#5b3a2a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="#efe1cf"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#3a2a35"/>' + txt("DANCE THEATRE OF HARLEM · W 152 ST", 200, 17, 11, GOLD, 'letter-spacing="2"') +
      win(30) + win(120) +
      /* mirror wall */
      '<rect x="214" y="34" width="176" height="130" fill="#cfe0e6" stroke="#9aa7ad" stroke-width="3"/>' +
      '<path d="M234 40l40 118M300 40l30 118M352 40l24 118" stroke="#fff" stroke-width="5" opacity=".5"/>' +
      /* barre */
      '<rect x="0" y="140" width="400" height="5" rx="2" fill="#c08a4a"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + x + '" y="145" width="4" height="51" fill="#7a7f88"/>').join("") +
      '<rect x="0" y="164" width="400" height="32" fill="#e5d3bd"/>' +
      /* wood floor */
      '<rect x="0" y="196" width="400" height="64" fill="#c9915a"/>' + floor +
      /* dancers at the barre (silhouettes) */
      '<g class="lf-bob"><circle cx="70" cy="114" r="7" fill="#2b1d33"/><path d="M70 121v34M70 132l-14 8M70 132l18-6M70 155l-6 40M70 155l30-10" stroke="#2b1d33" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g class="lf-bob lf-bob2"><circle cx="120" cy="116" r="7" fill="#2b1d33"/><path d="M120 123v32M120 134l-12 8M120 134l20-6M120 155l-4 40M120 155l-8 40" stroke="#2b1d33" stroke-width="5" stroke-linecap="round"/></g>' +
      /* the spinning dancer in the middle */
      '<g class="lf-pir"><circle cx="300" cy="140" r="9" fill="' + PINK + '"/><path d="M300 150v36M300 160l-20-24M300 160l20-24M300 186l0 30M300 186l14 -6" stroke="' + PINK + '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M284 184q16 -10 32 0l-6 8h-20z" fill="' + AQUA + '"/></g>' +
      '<ellipse cx="300" cy="222" rx="26" ry="5" fill="#000" opacity=".2"/>' +
      txt("BALLET FROM AGE FOUR", 110, 246, 11, "#3a2a35", 'letter-spacing="3"'));
  }

  /* 3. Wesleyan's College Row: brownstone halls, the white cupola, autumn trees, leaves falling on the green */
  function wes() {
    const hall = (x, w, h) => { let g = '<rect x="' + x + '" y="' + (176 - h) + '" width="' + w + '" height="' + h + '" fill="#7d4f3f"/>';
      for (let yy = 176 - h + 12; yy < 166; yy += 22) for (let xx = x + 10; xx < x + w - 12; xx += 20) g += '<rect class="lf-bl lf-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="9" height="14" fill="#ffe2a0" opacity=".85"/>';
      return g + '<rect x="' + (x - 3) + '" y="' + (172 - h) + '" width="' + (w + 6) + '" height="5" fill="#5e3a2f"/>'; };
    const tree = (x, c) => '<rect x="' + (x - 3) + '" y="150" width="6" height="40" fill="#4a3022"/><circle cx="' + x + '" cy="140" r="22" fill="' + c + '"/><circle cx="' + (x - 14) + '" cy="152" r="14" fill="' + c + '"/><circle cx="' + (x + 14) + '" cy="150" r="15" fill="' + c + '"/>';
    const leaf = (x, c, cls) => '<path class="lf-leaf ' + cls + '" d="M' + x + ' 30q6 -6 12 0q-6 6 -12 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw)"/>' +
      hall(10, 110, 90) + hall(280, 110, 86) +
      /* South College with the cupola */
      hall(140, 120, 110) +
      '<path d="M134 66l66 -26l66 26z" fill="#5e3a2f"/>' +
      '<rect x="186" y="12" width="28" height="30" fill="#f4f1ea" stroke="#c9c2b4" stroke-width="1.5"/><path d="M182 14l18 -12l18 12z" fill="#2f5e4e"/>' +
      '<g class="lf-bell"><path d="M194 22q6 -6 12 0v8h-12z" fill="' + GOLD + '"/></g>' +
      '<rect x="190" y="132" width="20" height="44" rx="10" fill="#3a2520"/>' +
      /* lawn + path */
      '<rect x="0" y="176" width="400" height="84" fill="#5b8f3e"/><path d="M180 260l14 -84h12l14 84z" fill="#c9b99a"/>' +
      tree(40, "#e07a2e") + tree(110, "#c8432e") + tree(300, "#e8a33a") + tree(366, "#c8432e") +
      leaf(120, "#e07a2e", "") + leaf(240, "#c8432e", "lf-leaf2") + leaf(330, "#e8a33a", "lf-leaf3") + leaf(60, "#e8a33a", "lf-leaf2") +
      person(250, 210, "#24304a", "lf-bob") + person(270, 214, "#4a2440", "lf-bob lf-bob2") +
      txt("WESLEYAN · COLLEGE ROW", 200, 246, 12, CREAM, 'letter-spacing="3"'),
      sky("lw", "#f2b880", "#f7dfc0"));
  }

  /* 4. The White Mana diner, Jersey City: the round steel-and-glass diner, the red neon on the roof, steam off the grill, cars on Tonnelle Av */
  function mana() {
    let panes = "";
    for (let x = 96; x < 304; x += 26) panes += '<rect x="' + x + '" y="122" width="20" height="34" fill="#ffe7a6" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lm)"/>' + stars(14) +
      /* roof sign */
      '<rect x="146" y="40" width="108" height="26" rx="4" fill="#1a0f12" stroke="#ff3b3b" stroke-width="2"/>' +
      '<text class="lf-flk" x="200" y="59" text-anchor="middle" ' + font + ' font-size="15" fill="#ff5c5c">DINER</text>' +
      '<rect x="196" y="66" width="8" height="18" fill="#666"/>' +
      /* round body */
      '<path d="M76 106q124 -36 248 0v74h-248z" fill="#e9edf1"/>' +
      '<path d="M76 106q124 -36 248 0" stroke="#b8c0c8" stroke-width="6" fill="none"/>' +
      '<rect x="76" y="112" width="248" height="6" fill="#c0392b"/>' + panes +
      '<rect x="76" y="160" width="248" height="20" fill="#c9d0d6"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (80 + i * 24) + '" y="164" width="18" height="3" fill="#9aa3ab"/>').join("") +
      '<text class="lf-glow" x="200" y="100" text-anchor="middle" ' + font + ' font-size="11" fill="#c0392b" letter-spacing="2">HAMBURGERS</text>' +
      /* counter + grill guy silhouette */
      '<rect x="96" y="146" width="208" height="10" fill="#a33" opacity=".7"/>' +
      '<g class="lf-stm"><path d="M150 120q4 -6 0 -12q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="lf-stm lf-stm2"><path d="M168 120q4 -6 0 -12q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      person(250, 128, "#2a2a30") +
      /* lot + street */
      '<rect x="0" y="180" width="400" height="80" fill="#3c3e44"/><rect x="0" y="180" width="400" height="4" fill="#7a7c80"/>' +
      '<path d="M0 222h400" stroke="#d9c25a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="lf-car"><rect x="0" y="230" width="48" height="14" rx="4" fill="' + PINK + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="38" cy="244" r="4" fill="#111"/></g>' +
      '<g class="lf-car lf-car2"><rect x="0" y="200" width="44" height="13" rx="4" fill="' + AQUA + '"/><circle cx="10" cy="213" r="4" fill="#111"/><circle cx="34" cy="213" r="4" fill="#111"/></g>' +
      txt("TONNELLE AV · JERSEY CITY", 200, 196, 10, CREAM, 'letter-spacing="3"'),
      sky("lm", "#0b0c22", "#3b2350"));
  }

  /* 5. W 47 St & 10 Av: green street signs, the wall tagged LE1F, Worldwide Plaza's copper pyramid and glowing lantern behind */
  function corner() {
    const block = (x, y, w, c) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 8; yy < 140; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 12) g += '<rect class="lf-bl lf-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".7"/>'; return g; };
    let tw = "";
    for (let yy = 64; yy < 140; yy += 10) for (let xx = 172; xx < 228; xx += 10) tw += '<rect x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffe2a0" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lc)"/>' + stars(16).replace(/cy="(1[0-9]|2[0-9]|3[0-4])(\.[0-9]+)?"/g, 'cy="6"') +
      /* Worldwide Plaza */
      '<rect x="164" y="58" width="72" height="92" fill="#8a6a55"/>' + tw +
      '<path d="M160 58l40 -36l40 36z" fill="#4f9a86"/><path d="M200 22l40 36h-12l-28 -26z" fill="#3b7e6c"/>' +
      '<path class="lf-glow" d="M192 22l8 -12l8 12z" fill="#fff4c8"/><circle class="lf-glow" cx="200" cy="16" r="12" fill="#fff4c8" opacity=".25"/>' +
      block(10, 70, 80, "#5a3c34") + block(96, 92, 60, "#6b4a3c") + block(246, 84, 64, "#4c3a40") + block(316, 64, 80, "#5a3c34") +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a3c44"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#30323a" stroke-width="1"/>'; return b; })() +
      tag("LE1F", 26, 200, 60, PINK, -5) + tag("WUT IS WUT", 170, 214, 22, AQUA, -4) + tag("KALIFA", 30, 222, 15, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lf-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#f2c94c"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 47 St", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("10 Av", 348, 108, 12, "#fff") +
      '<circle class="lf-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("lc", "#0c0a1c", "#33244a"));
  }

  window.SCENES = { fifty: fifty, dth: dth, wes: wes, mana: mana, corner: corner };
})();
