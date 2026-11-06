/* Main Source game (NYC map, Queens: Flushing / Willets Point, plus K-Cut and Sir Scratch's Toronto).
   1. The 7 pulling into Mets–Willets Point, up on the el over the Flushing Meadows edge.
   2. John Bowne High School's farm in Flushing, where Large Professor and K-Cut were schoolmates: red barn, greenhouse, sheep, the brick school behind.
   3. Toronto, K-Cut and Sir Scratch's hometown: City Hall's two curved towers and the saucer, the arches over the Nathan Phillips Square rink, skaters gliding.
   4. Breaking Atoms: the New York Hall of Science in Queens, the wavy cobalt-glass Great Hall, the rockets in Rocket Park, an atom spinning.
   5. Roosevelt Av & 126 St: green street signs, the wall tagged MAIN SOURCE, old Shea Stadium (blue and orange) behind, the 7 on the el.
   400 x 260 SVGs. All CSS classes prefixed ms-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mstw{0%,100%{opacity:.25}50%{opacity:1}}.ms-tw{animation:mstw 2s ease-in-out infinite}.ms-tw2{animation-delay:.6s}.ms-tw3{animation-delay:1.2s}' +
    '@keyframes msgraze{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.ms-graze{animation:msgraze 1.6s ease-in-out infinite}.ms-graze2{animation-delay:.8s}' +
    '@keyframes msskate{from{transform:translateX(-30px)}to{transform:translateX(250px)}}.ms-skate{animation:msskate 6s linear infinite}.ms-skate2{animation-delay:-3s;animation-duration:7.5s}' +
    '@keyframes msorbit{to{transform:rotate(360deg)}}.ms-orb{transform-box:fill-box;transform-origin:50% 50%;animation:msorbit 3s linear infinite}.ms-orb2{animation-duration:4.5s;animation-direction:reverse}' +
    '@keyframes msglint{0%,100%{opacity:.2}50%{opacity:1}}.ms-gl{animation:msglint 1.8s ease-in-out infinite}.ms-gl2{animation-delay:.6s}.ms-gl3{animation-delay:1.2s}' +
    '@keyframes msplane{from{transform:translate(-60px,20px)}to{transform:translate(460px,-30px)}}.ms-plane{animation:msplane 10s linear infinite}' +
    '@keyframes mscar{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.ms-car{animation:mscar 7s linear infinite}' +
    '@keyframes msel{from{transform:translateX(420px)}to{transform:translateX(-340px)}}.ms-el{animation:msel 7s linear infinite}' +
    '@keyframes msflk{0%,100%{opacity:1}46%{opacity:.85}50%{opacity:.3}54%{opacity:.9}}.ms-flk{animation:msflk 2.6s infinite}' +
    '@keyframes msvane{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ms-vane{transform-box:fill-box;transform-origin:50% 100%;animation:msvane 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ms-tw ms-tw' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const SKY = "#5ec8ff", ORANGE = "#ff6b35", CREAM = "#f4ead8", PURPLE = "#b933ad", SHEA = "#2c5aa0";

  /* 1. Mets–Willets Point: the 7 on the el, wooden-plank platform, canopy, the black sign with the purple 7, the train sliding in */
  function mets() {
    let win = "";
    for (let x = 36; x < 300; x += 40) win += '<rect x="' + x + '" y="102" width="24" height="18" rx="2" fill="#d6e4f0" opacity=".9"/>';
    let planks = "";
    for (let x = 0; x < 400; x += 10) planks += '<rect x="' + x + '" y="146" width="9" height="10" fill="' + (x % 20 ? "#8a6a48" : "#7a5c3c") + '"/>';
    let girders = "";
    for (let x = 20; x <= 400; x += 60) girders += '<rect x="' + (x - 4) + '" y="160" width="8" height="70" fill="#4a5a50"/><path d="M' + (x - 4) + ' 168l-12 12M' + (x + 4) + ' 168l12 12" stroke="#4a5a50" stroke-width="4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#msa)"/>' +
      '<g class="ms-plane"><path transform="translate(60 0) scale(-1 1)" d="M0 40l26-4l8-8h4l-4 9l14-2l4-4h3l-2 6l2 6h-3l-4-4l-14-2l4 9h-4l-8-8z" fill="#e8eef5"/></g>' +
      '<rect x="0" y="20" width="400" height="10" fill="#35413a"/>' +
      [50, 150, 250, 350].map(x => '<rect x="' + (x - 3) + '" y="30" width="6" height="60" fill="#35413a"/>').join("") +
      '<rect x="88" y="38" width="226" height="30" rx="3" fill="#111"/><rect x="88" y="38" width="226" height="3" fill="#fff"/>' +
      '<text x="100" y="59" ' + font + ' font-size="15" fill="#fff">Mets–Willets Point</text>' + bullet(292, 54, "7", PURPLE) +
      '<g class="anim-train">' +
        '<rect x="14" y="90" width="300" height="50" rx="5" fill="#cdd3da" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="14" y="126" width="300" height="5" fill="' + PURPLE + '"/>' +
        '<rect x="296" y="98" width="14" height="22" rx="2" fill="#d6e4f0"/>' + bullet(302, 130, "7", PURPLE) +
        '<circle cx="24" cy="132" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="140" width="400" height="6" fill="#eab308"/>' + planks + '<rect x="0" y="156" width="400" height="5" fill="#3a443e"/>' + girders +
      '<rect x="0" y="210" width="400" height="50" fill="#4f6b3a"/><path d="M0 214q100-10 200 0t200 0" stroke="#6d8a4a" stroke-width="6" fill="none"/>' +
      txt("FLUSHING, QUEENS", 200, 248, 11, CREAM, 'letter-spacing="4"'),
      sky("msa", "#1d3b6e", "#ffb36b"));
  }

  /* 2. John Bowne High School's farm, Flushing: the red barn with white trim, the greenhouse, sheep grazing, the long brick school behind */
  function bowne() {
    let schoolWin = "";
    for (let x = 20; x < 390; x += 22) schoolWin += '<rect x="' + x + '" y="62" width="12" height="14" fill="#cfe2f5" opacity=".85"/><rect x="' + x + '" y="84" width="12" height="14" fill="#cfe2f5" opacity=".85"/>';
    let fence = "";
    for (let x = 0; x < 400; x += 18) fence += '<rect x="' + x + '" y="196" width="4" height="22" fill="#e8e1cf"/>';
    const sheep = (x, y, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="16" ry="10" fill="#f4f1ea"/><circle cx="' + (x - 6) + '" cy="' + (y - 6) + '" r="6" fill="#f4f1ea"/><circle cx="' + (x + 6) + '" cy="' + (y - 7) + '" r="6" fill="#f4f1ea"/>' +
      '<ellipse cx="' + (x + 17) + '" cy="' + (y + 2) + '" rx="6" ry="5" fill="#2b2b2b"/><path d="M' + (x - 9) + ' ' + (y + 8) + 'v9M' + (x + 9) + ' ' + (y + 8) + 'v9" stroke="#2b2b2b" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#msb)"/>' +
      '<circle cx="350" cy="32" r="16" fill="#fff3b0"/>' +
      /* the school */
      '<rect x="8" y="50" width="384" height="62" fill="#9a4a32"/><rect x="8" y="46" width="384" height="6" fill="#d9c9a8"/>' + schoolWin +
      txt("JOHN BOWNE HIGH SCHOOL", 200, 44, 9, "#2a1a10", 'letter-spacing="2"') +
      /* the field */
      '<rect x="0" y="112" width="400" height="148" fill="#6fa04a"/>' +
      /* barn */
      '<path d="M40 190V128l40-28l40 28v62z" fill="#b3261e"/><path d="M40 128l40-28l40 28" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="64" y="150" width="32" height="40" fill="#8a1c16" stroke="#fff" stroke-width="2"/><path d="M64 150l32 40M96 150l-32 40" stroke="#fff" stroke-width="2"/>' +
      '<rect x="72" y="114" width="16" height="14" fill="#f4f1ea" stroke="#fff"/>' +
      '<g class="ms-vane"><path d="M80 100v-14M72 88l16 0M80 86l6-4h-6z" stroke="#333" stroke-width="2" fill="#333"/></g>' +
      /* greenhouse */
      '<path d="M250 190v-34q36-30 72 0v34z" fill="#cfe9f2" opacity=".75" stroke="#e8f6fb" stroke-width="2"/>' +
      [262, 274, 286, 298, 310].map(x => '<path d="M' + x + ' 190v-' + (x === 286 ? 50 : 42) + '" stroke="#e8f6fb" stroke-width="1.5"/>').join("") +
      '<path d="M262 180h48" stroke="#4f8a3a" stroke-width="6"/>' +
      sheep(160, 214, "ms-graze") + sheep(214, 226, "ms-graze ms-graze2") + sheep(346, 222, "ms-graze") +
      fence + '<rect x="0" y="200" width="400" height="3" fill="#e8e1cf"/>' +
      txt("FLUSHING, QUEENS", 200, 252, 10, "#173a12", 'letter-spacing="4"'),
      sky("msb", "#7fc2f0", "#d9f0ff"));
  }

  /* 3. Toronto City Hall: two curved concrete towers facing each other, the white saucer between them, the arches over the reflecting-pool rink, skaters gliding */
  function toronto() {
    let ribL = "", ribR = "";
    for (let y = 34; y < 170; y += 7) { ribL += '<path d="M' + (84 + (170 - y) * 0.08) + ' ' + y + 'h' + (52 - (170 - y) * 0.1) + '" stroke="#9aa3ab" stroke-width="1"/>'; ribR += '<path d="M' + (258) + ' ' + y + 'h' + (60 - (170 - y) * 0.1) + '" stroke="#9aa3ab" stroke-width="1"/>'; }
    let arches = "";
    for (let x = 60; x <= 340; x += 56) arches += '<path d="M' + x + ' 222q28-40 56 0" stroke="#e8edf2" stroke-width="5" fill="none"/>';
    const skater = (y, cls, col) => '<g class="' + cls + '"><circle cx="80" cy="' + y + '" r="5" fill="' + col + '"/><path d="M80 ' + (y + 5) + 'v12M80 ' + (y + 9) + 'l-8 4M80 ' + (y + 9) + 'l8 -3M80 ' + (y + 17) + 'l-6 7M80 ' + (y + 17) + 'l6 7" stroke="' + col + '" stroke-width="3" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#msc)"/>' +
      /* west tower (shorter) curving, east tower taller */
      '<path d="M80 172V60q34-26 62-18v130z" fill="#c9ced3"/>' + ribL +
      '<path d="M256 172V30q36-10 66 10v132z" fill="#bfc5ca"/>' + ribR +
      /* the inner faces in glass */
      '<path d="M142 42v130h-6V48z" fill="#5a7a96"/><path d="M256 30v142h6V34z" fill="#5a7a96"/>' +
      /* podium + saucer */
      '<rect x="40" y="172" width="320" height="18" fill="#8d959c"/>' +
      '<ellipse cx="200" cy="150" rx="54" ry="16" fill="#f4f6f8" stroke="#cfd5da" stroke-width="2"/><path d="M160 158q40 18 80 0" fill="#dfe4e8"/><rect x="190" y="160" width="20" height="14" fill="#8d959c"/>' +
      /* rink */
      '<rect x="20" y="190" width="360" height="40" fill="#dbe9f3"/><rect x="20" y="190" width="360" height="40" fill="none" stroke="#9fb8cc" stroke-width="2"/>' +
      arches +
      skater(200, "ms-skate", "#c8102e") + skater(204, "ms-skate ms-skate2", "#1d3b6e") +
      '<rect x="0" y="230" width="400" height="30" fill="#5a6168"/>' +
      txt("TORONTO", 200, 250, 13, "#fff", 'letter-spacing="6"') + txt("K-CUT &amp; SIR SCRATCH'S CITY", 200, 20, 9, CREAM, 'letter-spacing="2"'),
      sky("msc", "#8fb8de", "#e6eef6"));
  }

  /* 4. Breaking Atoms: the New York Hall of Science, the wavy Great Hall wall of cobalt glass, two rockets in Rocket Park, an atom spinning over it all */
  function science() {
    let glass = "";
    for (let y = 104; y < 200; y += 8) for (let x = 24; x < 250; x += 8) glass += '<rect class="ms-gl ms-gl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="2.5" height="2.5" fill="#6fb6ff"/>';
    const rocket = (x, h, band) => '<rect x="' + (x - 7) + '" y="' + (200 - h) + '" width="14" height="' + h + '" fill="#f2f2ee"/>' +
      '<path d="M' + (x - 7) + ' ' + (200 - h) + 'q7-18 14 0z" fill="#f2f2ee"/>' +
      [0.25, 0.55].map(f => '<rect x="' + (x - 7) + '" y="' + (200 - h * (1 - f)) + '" width="14" height="5" fill="' + band + '"/>').join("") +
      '<path d="M' + (x - 7) + ' 200l-6 8h26l-6-8z" fill="#9aa0a6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#msd)"/>' + stars(10) +
      /* the Great Hall: undulating concrete wall set with cobalt glass */
      '<path d="M20 200V112q28-18 56 0t56 0t56 0t66 0V200z" fill="#1a2f6b"/>' +
      '<g clip-path="url(#msdc)">' + glass + '</g>' +
      '<path d="M20 112q28-18 56 0t56 0t56 0t66 0" stroke="#c9ced3" stroke-width="4" fill="none"/>' +
      rocket(300, 140, "#111") + rocket(340, 110, "#c8102e") +
      /* atom */
      '<g transform="translate(110 54)"><circle r="6" fill="' + ORANGE + '"/>' +
        '<g class="ms-orb"><ellipse rx="40" ry="12" fill="none" stroke="' + SKY + '" stroke-width="2"/><circle cx="40" cy="0" r="3.5" fill="#fff"/></g>' +
        '<g class="ms-orb ms-orb2"><ellipse rx="40" ry="12" transform="rotate(60)" fill="none" stroke="' + SKY + '" stroke-width="2"/></g>' +
        '<g class="ms-orb"><ellipse rx="40" ry="12" transform="rotate(-60)" fill="none" stroke="' + SKY + '" stroke-width="2"/></g></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3e5a34"/><rect x="0" y="200" width="400" height="5" fill="#8a8c90"/>' +
      tag("BREAKING ATOMS", 140, 246, 26, SKY, -4) + txt("HALL OF SCIENCE · QUEENS", 300, 24, 9, CREAM, 'letter-spacing="2"'),
      sky("msd", "#0a1030", "#3a3f7a") + '<clipPath id="msdc"><path d="M20 200V112q28-18 56 0t56 0t56 0t66 0V200z"/></clipPath>');
  }

  /* 5. Roosevelt Av & 126 St: green street signs, the tag wall, old Shea Stadium's blue-and-orange bowl and light towers behind, the 7 rolling over */
  function corner() {
    let panels = "";
    for (let x = 60; x < 340; x += 20) panels += '<rect x="' + x + '" y="' + (70 + Math.abs(200 - x) * 0.06) + '" width="16" height="22" fill="' + ((x / 20) % 2 ? SHEA : ORANGE) + '"/>';
    const tower = x => '<rect x="' + (x - 2) + '" y="22" width="4" height="70" fill="#6b7280"/><rect x="' + (x - 14) + '" y="14" width="28" height="12" fill="#2b2f36"/>' +
      [0, 1, 2, 3].map(i => '<circle class="ms-flk" cx="' + (x - 10 + i * 7) + '" cy="20" r="2.5" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mse)"/>' + stars(12) +
      tower(70) + tower(330) +
      '<path d="M50 120V78q150-30 300 0v42z" fill="#d8dce0"/>' + panels +
      txt("SHEA STADIUM", 200, 112, 10, "#1d2a44", 'letter-spacing="4"') +
      /* the el */
      '<rect x="0" y="118" width="400" height="10" fill="#3a4a3e"/>' + [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="128" width="6" height="12" fill="#3a4a3e"/>').join("") +
      '<g class="ms-el"><rect x="0" y="100" width="260" height="18" rx="3" fill="#cdd3da"/>' + [14, 54, 94, 134, 174, 214].map(x => '<rect x="' + x + '" y="104" width="22" height="8" fill="#ffe9a8" opacity=".85"/>').join("") + bullet(248, 109, "7", PURPLE) + '</g>' +
      /* the wall */
      '<rect x="0" y="140" width="400" height="86" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 150; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("MAIN SOURCE", 14, 194, 36, SKY, -5) + tag("K-CUT", 206, 220, 20, ORANGE, -4) + tag("SIR SCRATCH", 18, 222, 15, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ms-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="136" width="5" height="92" fill="#3d4b3f"/>' +
      '<rect x="288" y="146" width="108" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Roosevelt Av", 342, 162, 12, "#fff") +
      '<rect x="288" y="172" width="108" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("126 St", 342, 188, 12, "#fff"),
      sky("mse", "#0a0e22", "#2c3a5e"));
  }

  window.SCENES = { mets: mets, bowne: bowne, toronto: toronto, science: science, corner: corner };
})();
