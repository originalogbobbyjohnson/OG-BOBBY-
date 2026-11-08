/* kingmez scenes (Regions tab: The Carolinas; Southeast Raleigh, NC). CSS classes prefixed km- (the page's own anim-train is kept).
   1 GoRaleigh Station, 214 S Blount St downtown: the bus bays under the canopy, the black sign with the Route 15 badge, a GoRaleigh bus pulling in for WakeMed / New Bern Ave, Moore Square's oaks behind.
   2 Saint Aug and Shaw ("we at Saint Aug, catch us at Shaw"): Saint Augustine's hand-cut gray stone chapel with its bell swinging, a ball bouncing on the yard.
   3 Fried fish off New Bern Ave (MF+G): a little brick fish-fry spot at night, steam off the fryer, the Crown Vic parked out front.
   4 I-40 at night (Call On): the brake lights splitting down the middle like the Red Sea, the I-40 shield and the green Raleigh sign.
   5 New Bern Ave and Tarboro St: green street signs, MEZ tagged on the brick, the State Capitol's new copper dome behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.km-flk{animation:kmflick 2.6s infinite}.km-flk2{animation-delay:.9s}' +
    '@keyframes kmglow{0%,100%{opacity:.45}50%{opacity:1}}.km-glow{animation:kmglow 2.4s ease-in-out infinite}.km-g2{animation-delay:-1.2s}' +
    '@keyframes kmswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.km-bell{transform-box:fill-box;transform-origin:50% 0%;animation:kmswing 1.8s ease-in-out infinite}' +
    '@keyframes kmbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.km-ball{animation:kmbounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes kmsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.km-st{animation:kmsteam 2s ease-out infinite}.km-st2{animation-delay:-.7s}.km-st3{animation-delay:-1.4s}' +
    '@keyframes kmleft{0%{transform:translateX(0)}100%{transform:translateX(-80px)}}.km-l{animation:kmleft 3s linear infinite}' +
    '@keyframes kmright{0%{transform:translateX(0)}100%{transform:translateX(80px)}}.km-r{animation:kmright 3s linear infinite}' +
    '@keyframes kmbird{0%{transform:translate(0,0)}100%{transform:translate(420px,-30px)}}.km-bd{animation:kmbird 9s linear infinite}' +
    '@keyframes kmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmspray 1.4s ease-out infinite}.km-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, anchor) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + font + ' font-size="' + size + '" fill="' + fill + '">' + t + '</text>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 13, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "km-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-4" y="-6" width="8" height="40" fill="#4a3424"/><circle cx="0" cy="-22" r="24" fill="#2f5a2a"/><circle cx="-18" cy="-10" r="16" fill="#3a6a32"/><circle cx="18" cy="-12" r="17" fill="#2a5226"/></g>';
  const ORANGE = "#ff9a4d", GOLD = "#f2c14e", BLUE = "#2f6fd6", GRBLUE = "#0067a5", GRGREEN = "#8dc63f";

  /* 1. GoRaleigh Station */
  function kmstation() {
    const bus = '<g class="anim-train"><rect x="30" y="136" width="250" height="70" rx="9" fill="#f6f6f4" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="148" width="34" height="28" rx="3" fill="#1f2a36"/>').join("") +
      '<rect x="36" y="148" width="30" height="52" rx="2" fill="#1f2a36"/>' +
      '<path d="M30 196q120 -26 250 -12v10H30z" fill="' + GRBLUE + '"/><path d="M30 188q120 -22 250 -14v6q-130 -6 -250 16z" fill="' + GRGREEN + '"/>' +
      '<rect x="34" y="138" width="96" height="10" rx="2" fill="#111"/>' + txt("15  WAKEMED", 82, 146, 7.5, "#ffb84a") +
      '<circle cx="76" cy="206" r="12" fill="#222"/><circle cx="76" cy="206" r="5" fill="#9aa1a8"/><circle cx="236" cy="206" r="12" fill="#222"/><circle cx="236" cy="206" r="5" fill="#9aa1a8"/><circle cx="34" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#km1)"/>' +
      oak(30, 96, 1) + oak(84, 104, .8) + oak(330, 98, .95) + oak(380, 106, .8) +
      '<g fill="#57616e"><rect x="120" y="40" width="40" height="70"/><rect x="170" y="24" width="34" height="86"/><rect x="214" y="50" width="50" height="60"/></g>' +
      /* canopy */
      '<path d="M0 62L400 50v14L0 78z" fill="#e3e6ea"/><path d="M0 78L400 64v6L0 84z" fill="#8a9198"/>' +
      [40, 150, 260, 370].map(x => '<rect x="' + (x - 4) + '" y="68" width="8" height="142" fill="#5a6470"/>').join("") +
      [80, 200, 320].map((x, i) => '<rect class="km-flk' + (i === 1 ? " km-flk2" : "") + '" x="' + x + '" y="76" width="50" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="206" width="400" height="8" fill="#d8d2c4"/><rect x="0" y="214" width="400" height="46" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      /* station sign */
      '<rect x="306" y="98" width="5" height="112" fill="#2f2f2f"/><rect x="232" y="92" width="162" height="56" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      txt("GoRaleigh Station", 242, 110, 12.5, "#fff", "start") + '<text x="242" y="124" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#c9ced6">214 S Blount St</text>' +
      '<rect x="242" y="130" width="22" height="13" rx="2" fill="' + GRBLUE + '"/>' + txt("15", 253, 140.5, 10, "#fff") +
      '<text x="270" y="140" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#fff">New Bern Ave</text>',
      sky("km1", "#7fb6e6", "#f3e3c4"));
  }

  /* 2. Saint Augustine's stone chapel */
  function kmcampus() {
    const stone = (x, y, w, h) => { let s = ""; for (let r = 0; r < h / 10; r++) for (let c = 0; c < w / 18; c++) s += '<rect x="' + (x + c * 18 + (r % 2 ? 9 : 0)) + '" y="' + (y + r * 10) + '" width="17" height="9" rx="2" fill="' + ["#8d8a84", "#7a7770", "#9a968e"][(r + c) % 3] + '"/>'; return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#km2)"/>' +
      '<g class="km-bd"><path d="M-20 50q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/><path d="M10 64q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      oak(26, 150, 1.1) + oak(378, 146, 1.1) +
      /* chapel body */
      '<clipPath id="kmc"><path d="M110 210V120l70 -50l70 50v90z"/></clipPath><g clip-path="url(#kmc)"><rect x="110" y="60" width="140" height="150" fill="#7a7770"/>' + stone(104, 60, 160, 150) + '</g>' +
      '<path d="M104 124l76 -56l76 56" stroke="#5a5048" stroke-width="7" fill="none" stroke-linejoin="round"/>' +
      /* bell tower */
      '<clipPath id="kmt"><rect x="252" y="80" width="44" height="130"/></clipPath><rect x="252" y="80" width="44" height="130" fill="#85827b"/><g clip-path="url(#kmt)">' + stone(244, 80, 60, 130) + '</g>' +
      '<path d="M248 82l26 -34l26 34z" fill="#4a4440"/><path d="M262 92h24v26h-24z" fill="#2a2622"/>' +
      '<g class="km-bell"><path d="M268 96h12q0 14 4 18h-20q4 -4 4 -18z" fill="' + GOLD + '" stroke="#7a5a1a" stroke-width="1.5"/></g>' +
      /* doors and pointed windows */
      '<path d="M166 210v-34q14 -20 28 0v34z" fill="#5a3422" stroke="#3a2418" stroke-width="2"/>' +
      '<path class="km-glow" d="M130 170v-24q8 -14 16 0v24z" fill="#f3d27a"/><path class="km-glow km-g2" d="M214 170v-24q8 -14 16 0v24z" fill="#f3d27a"/><path class="km-glow" d="M172 136v-18q8 -12 16 0v18z" fill="#f3d27a"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4f7a3a"/><path d="M150 260l30 -50h20l30 50z" fill="#cfc4ac"/>' +
      '<g class="km-ball"><circle cx="330" cy="214" r="9" fill="#e8823a" stroke="#5a2a10" stroke-width="1.5"/><path d="M321 214h18M330 205v18" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      '<rect x="16" y="226" width="150" height="24" rx="3" fill="#0d2a66" stroke="#fff" stroke-width="1.5"/>' + txt("SAINT AUG · SHAW", 91, 242.5, 11.5, "#fff"),
      sky("km2", "#a9d2f2", "#fbeed6"));
  }

  /* 3. Fried fish off New Bern Ave */
  function kmfish() {
    let bricks = ""; for (let r = 0; r < 12; r++) for (let c = 0; c < 9; c++) bricks += '<rect x="' + (110 + c * 22 + (r % 2 ? 11 : 0)) + '" y="' + (74 + r * 10) + '" width="21" height="9" fill="' + (r % 3 ? "#8a3a2a" : "#7a3224") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#km3)"/>' + stars(26) +
      '<rect x="0" y="120" width="110" height="80" fill="#2a2e3a"/><rect x="300" y="110" width="100" height="90" fill="#262a36"/>' +
      '<clipPath id="kmf"><rect x="110" y="74" width="190" height="126"/></clipPath><g clip-path="url(#kmf)">' + bricks + '</g>' +
      '<rect x="106" y="66" width="198" height="10" fill="#3a2a22"/>' +
      /* hand-painted sign */
      '<rect class="km-flk" x="124" y="80" width="162" height="26" rx="3" fill="#f4ead2" stroke="#3a2a22" stroke-width="2"/>' + txt("FISH &amp; FRIES", 205, 99, 15, "#b8321e") +
      /* window with the fryer */
      '<rect x="124" y="114" width="96" height="56" fill="#ffd98a" stroke="#3a2a22" stroke-width="3"/><rect x="140" y="148" width="64" height="22" fill="#8a9198"/>' +
      '<g fill="#fff" opacity=".8"><ellipse class="km-st" cx="156" cy="142" rx="6" ry="4"/><ellipse class="km-st km-st2" cx="172" cy="140" rx="7" ry="4"/><ellipse class="km-st km-st3" cx="188" cy="142" rx="6" ry="4"/></g>' +
      '<rect x="232" y="118" width="54" height="52" fill="#1d1a18" stroke="#3a2a22" stroke-width="3"/>' +
      '<g font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#fff"><text x="238" y="132">FRIED FISH</text><text x="238" y="144">FRIES</text><text x="238" y="156">SWEET TEA</text></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3e3e44"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      /* the Crown Vic out front: long boxy sedan */
      '<g transform="translate(150 176)"><path d="M0 34v-16l12 -4l20 -14h66l20 14l26 4v16z" fill="#2c3440" stroke="#111" stroke-width="2"/>' +
      '<path d="M36 2h28v14h-38z" fill="#9ec6e8"/><path d="M68 2h28l12 14h-40z" fill="#9ec6e8"/><rect x="0" y="22" width="144" height="3" fill="#c9ced6"/>' +
      '<circle cx="28" cy="36" r="10" fill="#111"/><circle cx="28" cy="36" r="4" fill="#c9ced6"/><circle cx="118" cy="36" r="10" fill="#111"/><circle cx="118" cy="36" r="4" fill="#c9ced6"/><rect x="138" y="20" width="6" height="5" fill="#fff6c2"/></g>' +
      sign(12, 214, 128, "New Bern Ave"),
      sky("km3", "#0b1430", "#3a2a4a"));
  }

  /* 4. I-40 at night, the brake lights splitting like the Red Sea */
  function kmhighway() {
    const lights = (cls, x0, y, n, gap, c) => '<g class="' + cls + '">' + Array.from({ length: n }, (_, i) => '<g><rect x="' + (x0 + i * gap) + '" y="' + y + '" width="22" height="10" rx="3" fill="#1d1a22"/><circle cx="' + (x0 + i * gap + 4) + '" cy="' + (y + 5) + '" r="2.6" fill="' + c + '"/><circle cx="' + (x0 + i * gap + 18) + '" cy="' + (y + 5) + '" r="2.6" fill="' + c + '"/></g>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#km4)"/>' + stars(30) +
      '<path d="M0 260V176L170 120h60L400 176V260z" fill="#2a2a30"/><path d="M0 176L170 120M400 176L230 120" stroke="#55555e" stroke-width="3"/>' +
      '<path d="M200 124v136" stroke="#f2c200" stroke-width="3" stroke-dasharray="12 10"/>' +
      '<path d="M140 160L40 260M260 160L360 260" stroke="#ddd" stroke-width="2" stroke-dasharray="14 12" opacity=".6"/>' +
      '<clipPath id="kmL"><rect x="0" y="0" width="184" height="260"/></clipPath><clipPath id="kmR"><rect x="216" y="0" width="184" height="260"/></clipPath>' +
      '<g clip-path="url(#kmL)">' + lights("km-l", 20, 166, 10, 40, "#ff5a4a") + lights("km-l", 10, 196, 10, 40, "#ff3b3b") + lights("km-l", 0, 226, 10, 44, "#ff3b3b") + '</g>' +
      '<g clip-path="url(#kmR)">' + lights("km-r", 136, 166, 10, 40, "#ff5a4a") + lights("km-r", 120, 196, 10, 40, "#ff3b3b") + lights("km-r", 110, 226, 10, 44, "#ff3b3b") + '</g>' +
      '<g opacity=".14"><path class="km-glow" d="M0 210h185M215 210h185" stroke="#ff3b3b" stroke-width="18"/></g>' +
      /* overhead sign + I-40 shield (plain interstate shield, no logo) */
      '<rect x="60" y="30" width="6" height="90" fill="#6a7078"/><rect x="334" y="30" width="6" height="90" fill="#6a7078"/><rect x="60" y="30" width="280" height="8" fill="#6a7078"/>' +
      '<rect x="110" y="40" width="180" height="58" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M130 50h34v22q0 12 -17 18q-17 -6 -17 -18z" fill="#1d3f8f" stroke="#fff" stroke-width="2"/><path d="M130 50h34v8h-34z" fill="#c8102e"/>' + txt("40", 147, 80, 14, "#fff") +
      txt("EAST", 230, 60, 11, "#fff") + txt("Raleigh", 230, 80, 15, "#fff") +
      '<rect x="16" y="226" width="130" height="24" rx="3" fill="#111" opacity=".75"/>' + txt("LIKE THE RED SEA", 81, 242.5, 11, "#fff"),
      sky("km4", "#070b1e", "#2a1e3e"));
  }

  /* 5. New Bern Ave and Tarboro St, the Capitol dome behind */
  function kmcorner() {
    let bricks = ""; for (let r = 0; r < 10; r++) for (let c = 0; c < 19; c++) bricks += '<rect x="' + (c * 22 + (r % 2 ? -11 : 0)) + '" y="' + (150 + r * 11) + '" width="21" height="10" fill="' + ((r + c) % 4 ? "#8a3e2c" : "#7a3426") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#km5)"/>' +
      /* State Capitol: gray granite, columns, shiny copper dome */
      '<rect x="120" y="96" width="160" height="54" fill="#a9a6a0"/><path d="M150 96l50 -14l50 14z" fill="#b8b5ae"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 18) + '" y="98" width="6" height="40" fill="#cfccc4"/>').join("") +
      '<rect x="168" y="62" width="64" height="20" fill="#b8b5ae"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (172 + i * 9) + '" y="64" width="3" height="16" fill="#8a877f"/>').join("") +
      '<path d="M172 62q28 -40 56 0z" fill="#c87a45" stroke="#7a4220" stroke-width="2"/><path class="km-glow" d="M186 50q10 -16 20 -14" stroke="#ffd2a6" stroke-width="3" fill="none"/><rect x="195" y="32" width="10" height="12" fill="#c87a45" stroke="#7a4220" stroke-width="1.5"/><path d="M193 32l7 -8l7 8z" fill="#c87a45"/>' +
      oak(70, 128, .9) + oak(330, 126, .9) +
      /* brick wall with the tags */
      '<clipPath id="kmw"><rect x="0" y="150" width="400" height="110"/></clipPath><g clip-path="url(#kmw)">' + bricks + '</g>' +
      tag("MEZ", 126, 228, 60, ORANGE, -6) + tag("HEIRS", 252, 190, 26, GOLD, -4) + tag("SOUTHSIDE", 226, 246, 18, "#8fd0ff", -3) +
      '<g fill="' + ORANGE + '"><circle class="km-sp" cx="232" cy="176" r="3"/><circle class="km-sp km-sp2" cx="240" cy="170" r="2.5"/><circle class="km-sp" cx="236" cy="182" r="2"/></g>' +
      /* sign post */
      '<rect x="330" y="40" width="5" height="220" fill="#5a6470"/>' + sign(268, 40, 126, "New Bern Ave") + sign(276, 66, 112, "Tarboro St"),
      sky("km5", "#f39a5a", "#ffe2b8"));
  }

  window.SCENES = { kmstation, kmcampus, kmfish, kmhighway, kmcorner };
})();
