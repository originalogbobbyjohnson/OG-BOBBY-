/* raheemdevaughn scenes (Regions tab: THE DMV; born in Newark, raised in D.C. and Prince George's / Montgomery counties, MD; High Point High School in Beltsville). CSS classes prefixed rd- (the page's own anim-train is kept).
   1 Greenbelt, the end of Metro's Green Line next door to Beltsville: open-air platform in the trees, a silver Metro train sliding in, a MARC Camden Line sign on the far track, black station sign with the green GR bullet.
   2 High Point High School on Powder Mill Rd in Beltsville: long brick school, the marquee, music notes floating out of the choir room.
   3 Coppin State University in Baltimore, where he started singing with street-corner groups: blue and gold campus gate, a corner streetlamp, four harmony silhouettes (no faces), notes rising.
   4 Wolf Trap's Filene Center in Vienna, VA (he hosted the Marvin Gaye tribute there): the tall timber shed, warm stage light, the lawn crowd with phone lights swaying.
   5 Baltimore Ave and Powder Mill Rd in Beltsville: green signs, RAHEEM tagged on the wall, NASA Goddard's big white dish behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rdglow{0%,100%{opacity:.4}50%{opacity:1}}.rd-glow{animation:rdglow 2.2s ease-in-out infinite}.rd-glow2{animation-delay:-1.1s}' +
    '@keyframes rdnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-64px);opacity:0}}.rd-note{animation:rdnote 3.4s ease-out infinite}.rd-n2{animation-delay:-1.1s}.rd-n3{animation-delay:-2.2s}' +
    '@keyframes rdsway{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}.rd-sway{animation:rdsway 1.8s ease-in-out infinite}.rd-sway2{animation-delay:-.9s}' +
    '@keyframes rdfly{0%{transform:translate(0,0)}25%{transform:translate(10px,-8px)}50%{transform:translate(22px,2px)}75%{transform:translate(10px,8px)}100%{transform:translate(0,0)}}.rd-fly{animation:rdfly 4s ease-in-out infinite}' +
    '@keyframes rdflap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.3)}}.rd-flap{transform-box:fill-box;transform-origin:50% 50%;animation:rdflap .4s linear infinite}' +
    '@keyframes rddish{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.rd-dish{transform-box:fill-box;transform-origin:50% 100%;animation:rddish 6s ease-in-out infinite}' +
    '@keyframes rdcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rd-car{animation:rdcar 7s linear infinite}' +
    '@keyframes rdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rd-sp{animation:rdspray 1.4s ease-out infinite}.rd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rd-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#3a2a1c"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const note = (x, y, c, cls) => '<g class="rd-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const fly = (x, y, c) => '<g class="rd-fly"><g class="rd-flap"><path d="M' + x + ' ' + y + 'c-6 -8 -14 -6 -10 2c2 4 6 4 10 -2zM' + x + ' ' + y + 'c6 -8 14 -6 10 2c-2 4 -6 4 -10 -2z" fill="' + c + '"/><path d="M' + x + ' ' + y + 'c-4 4 -10 8 -6 10c3 1 5 -4 6 -10zM' + x + ' ' + y + 'c4 4 10 8 6 10c-3 1 -5 -4 -6 -10z" fill="' + c + '" opacity=".8"/></g></g>';
  const PINK = "#ff7aa8", GOLD = "#ffd36e", VIO = "#9b7bff", GRN = "#00b140";

  /* 1. Greenbelt, Green Line terminal */
  function rdstation() {
    const car = x => '<rect x="' + x + '" y="122" width="168" height="70" rx="6" fill="#c7ccd3" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="134" width="168" height="20" fill="#1c232c"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 27) + '" y="137" width="20" height="14" rx="2" fill="#33414f"/>').join("") +
      '<rect x="' + (x + 30) + '" y="158" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/><rect x="' + (x + 120) + '" y="158" width="18" height="30" fill="#9aa1aa" stroke="#6b737e"/>' +
      '<circle cx="' + (x + 26) + '" cy="196" r="7" fill="#222"/><circle cx="' + (x + 142) + '" cy="196" r="7" fill="#222"/>';
    const train = '<g class="anim-train">' + car(20) + car(192) + '<circle class="rd-glow" cx="352" cy="176" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rd-s1)"/>' +
      tree(20, 96, 1.8, "#3c6a2e") + tree(70, 90, 1.5, "#4a7a3a") + tree(130, 94, 1.7, "#3c6a2e") + tree(200, 88, 1.6, "#4a7a3a") + tree(262, 94, 1.8, "#3c6a2e") + tree(330, 90, 1.5, "#4a7a3a") + tree(386, 96, 1.7, "#3c6a2e") +
      /* far MARC track sign */
      '<rect x="232" y="90" width="96" height="16" rx="2" fill="#1d3f8a"/><text x="280" y="102" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MARC CAMDEN LINE</text>' +
      '<rect x="0" y="108" width="400" height="6" fill="#8a8378"/>' +
      /* gull-wing canopy over the island */
      '<path d="M0 54L200 76L400 54v10L200 86L0 64z" fill="#d8d2c4"/>' +
      [60, 340].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="140" fill="#7a746a"/>').join("") +
      train +
      '<rect x="0" y="204" width="400" height="8" fill="#3a2e26"/><path d="M0 206h400M0 210h400" stroke="#8a8f96" stroke-width="1.2"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8e8a82"/><rect x="0" y="212" width="400" height="5" fill="#d8d2c4"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect class="rd-glow' + (i % 2 ? " rd-glow2" : "") + '" x="' + (8 + i * 40) + '" y="217" width="24" height="3" fill="#fff3c0"/>').join("") +
      '<rect x="100" y="226" width="200" height="26" rx="3" fill="#111"/><text x="186" y="245" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">GREENBELT</text>' +
      '<circle cx="268" cy="239" r="10" fill="' + GRN + '"/><text x="268" y="243" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GR</text>' +
      fly(40, 40, PINK) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".95">GREEN LINE · END OF THE LINE · NEXT DOOR TO BELTSVILLE</text>',
      sky("rd-s1", "#7fb0e0", "#f2d6c0"));
  }

  /* 2. High Point High School, Beltsville */
  function rdhighpoint() {
    return svg(
      '<rect width="400" height="260" fill="url(#rd-s2)"/>' +
      '<path d="M0 196q200 -14 400 0v64H0z" fill="#4f7a3a"/>' + tree(24, 170, 1.8, "#3c6a2e") + tree(380, 168, 1.9, "#3c6a2e") +
      /* long low brick school */
      '<rect x="40" y="96" width="320" height="100" fill="#a0523a"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (102 + i * 8) + 'h320" stroke="#83402c" stroke-width=".8"/>').join("") +
      '<rect x="34" y="90" width="332" height="10" fill="#e8e0d0"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect x="' + (54 + i * 38) + '" y="110" width="26" height="22" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="2"/>').join("") +
      /* choir room window glowing */
      '<rect class="rd-glow" x="245" y="112" width="22" height="18" fill="#ffe9b0" opacity=".6"/>' +
      '<rect x="170" y="146" width="60" height="50" fill="#2a3a4a" stroke="#e8e0d0" stroke-width="3"/><path d="M200 146v50" stroke="#e8e0d0" stroke-width="2"/>' +
      '<rect x="150" y="66" width="100" height="22" rx="2" fill="#1d2a5a"/><text x="200" y="81" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIGH POINT HIGH</text>' +
      /* marquee sign out front */
      '<rect x="270" y="160" width="84" height="34" rx="3" fill="#1d2a5a" stroke="' + GOLD + '" stroke-width="2"/><text x="312" y="174" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">MUSIC NIGHT</text><text x="312" y="186" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">TONIGHT</text>' +
      '<rect x="294" y="194" width="6" height="12" fill="#5a5f66"/><rect x="324" y="194" width="6" height="12" fill="#5a5f66"/>' +
      note(256, 104, PINK) + note(270, 96, "#fff", "rd-n2") + note(242, 98, GOLD, "rd-n3") +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">POWDER MILL RD · BELTSVILLE, MD</text>',
      sky("rd-s2", "#86b8e8", "#f6dcb8"));
  }

  /* 3. Coppin State, Baltimore: street-corner harmony */
  function rdcoppin() {
    const singer = (x, cls) => '<g class="rd-sway ' + cls + '"><circle cx="' + x + '" cy="150" r="9" fill="#1a1222"/><path d="M' + (x - 12) + ' 212v-40q0 -12 12 -12t12 12v40z" fill="#1a1222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rd-s3)"/>' + stars(12) +
      /* campus building */
      '<rect x="200" y="70" width="200" height="120" fill="#6a6a78"/>' +
      [0, 1, 2, 3].map(r => [0, 1, 2, 3, 4, 5].map(i => '<rect class="' + ((r + i) % 3 ? "" : "rd-glow") + '" x="' + (212 + i * 31) + '" y="' + (82 + r * 26) + '" width="18" height="14" fill="#ffe9b0" opacity=".55"/>').join("")).join("") +
      '<rect x="230" y="44" width="150" height="22" rx="2" fill="#123a8a"/><text x="305" y="59" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">COPPIN STATE</text>' +
      /* blue and gold banners */
      '<rect x="206" y="100" width="12" height="40" fill="#123a8a"/><rect x="206" y="140" width="12" height="6" fill="' + GOLD + '"/>' +
      '<rect x="382" y="100" width="12" height="40" fill="' + GOLD + '"/><rect x="382" y="140" width="12" height="6" fill="#123a8a"/>' +
      /* the corner + lamp */
      '<rect x="0" y="210" width="400" height="12" fill="#8e8a82"/><rect x="0" y="222" width="400" height="38" fill="#2a2a30"/>' +
      '<rect x="40" y="70" width="5" height="142" fill="#3a3f46"/><path d="M42 72q20 -10 34 2" stroke="#3a3f46" stroke-width="5" fill="none"/><rect x="66" y="72" width="16" height="8" rx="2" fill="#3a3f46"/>' +
      '<path class="rd-glow" d="M74 80L30 212h100z" fill="' + GOLD + '" opacity=".22"/>' +
      singer(60, "") + singer(86, "rd-sway2") + singer(112, "") + singer(138, "rd-sway2") +
      note(100, 130, GOLD) + note(124, 122, PINK, "rd-n2") + note(76, 126, "#fff", "rd-n3") +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BALTIMORE · WHERE THE CORNER HARMONY STARTED</text>',
      sky("rd-s3", "#141a3a", "#4a3a6a"));
  }

  /* 4. Wolf Trap, Filene Center */
  function rdwolftrap() {
    let crowd = ""; for (let r = 0; r < 3; r++) for (let i = 0; i < 16; i++) { const x = 8 + i * 25 + (r % 2) * 12, y = 214 + r * 14;
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#1a1222"/><path d="M' + (x - 7) + ' ' + (y + 14) + 'q7 -12 14 0z" fill="#1a1222"/>';
      if ((i + r) % 5 === 0) crowd += '<g class="rd-sway' + (i % 2 ? " rd-sway2" : "") + '"><rect x="' + (x + 3) + '" y="' + (y - 10) + '" width="4" height="6" rx="1" fill="#fff6c8"/><rect class="rd-glow" x="' + (x + 1) + '" y="' + (y - 12) + '" width="8" height="10" rx="2" fill="#fff6c8" opacity=".35"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#rd-s4)"/>' + stars(16) +
      tree(20, 150, 2.2, "#1e3324") + tree(380, 148, 2.3, "#1e3324") + tree(60, 160, 1.6, "#24402a") + tree(340, 160, 1.6, "#24402a") +
      /* the tall timber shed: wood-clad fly tower + sloped roof wings */
      '<path d="M80 196V120L200 70L320 120v76z" fill="#8a5a32"/>' +
      Array.from({ length: 15 }, (_, i) => '<path d="M' + (88 + i * 16) + ' 196V' + (i < 7 ? 116 - i * 6 : 116 - (14 - i) * 6) + '" stroke="#6e4524" stroke-width="2"/>').join("") +
      '<path d="M150 90h100v-40h-100z" fill="#7a4e2a"/><path d="M146 52h108l-54 -20z" fill="#5a3a1e"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (158 + i * 16) + ' 90V52" stroke="#6e4524" stroke-width="2"/>').join("") +
      /* open stage mouth */
      '<path d="M120 196v-58h160v58z" fill="#2a1408"/><path class="rd-glow" d="M126 196v-52h148v52z" fill="#ffcf7a" opacity=".5"/>' +
      '<path d="M200 140L160 196h80z" fill="#fff3c0" opacity=".25"/>' +
      '<rect x="196" y="166" width="8" height="26" rx="3" fill="#1a1222"/><circle cx="200" cy="160" r="6" fill="#1a1222"/>' +
      note(214, 150, GOLD) + note(230, 140, PINK, "rd-n2") + note(178, 146, "#fff", "rd-n3") +
      '<path d="M0 206h400v54H0z" fill="#2e4a24"/>' + crowd +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".95">WOLF TRAP · FILENE CENTER · VIENNA, VA</text>',
      sky("rd-s4", "#120c26", "#5a3a5a"));
  }

  /* 5. Baltimore Ave and Powder Mill Rd, Beltsville */
  function rdcorner() {
    const dish = '<g><rect x="244" y="96" width="8" height="26" fill="#d8d8de"/><path d="M232 122h32l-6 -8h-20z" fill="#c8c8d0"/>' +
      '<g class="rd-dish"><path d="M206 92q42 -40 84 0z" fill="#f4f4f8" stroke="#b8b8c4" stroke-width="2" transform="rotate(-18 248 80)"/><path d="M248 80l12 -26" stroke="#b8b8c4" stroke-width="2"/><circle cx="260" cy="54" r="3" fill="#b8b8c4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rd-s5)"/>' + stars(14) +
      tree(150, 120, 1.6, "#1e3324") + tree(330, 120, 1.7, "#1e3324") + dish +
      '<rect x="0" y="118" width="400" height="10" fill="#1a2238"/>' +
      '<rect x="0" y="128" width="400" height="80" fill="#3a3340"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#2a2430" stroke-width="1"/>').join("") +
      tag("RAHEEM", 40, 186, 44, PINK, -5) + tag("LOVE KING", 236, 156, 17, GOLD, -3) + tag("R&amp;B HIPPIE", 222, 198, 17, VIO, -5) +
      '<circle class="rd-sp" cx="214" cy="190" r="3" fill="' + PINK + '" opacity=".8"/><circle class="rd-sp rd-sp2" cx="220" cy="194" r="2" fill="' + VIO + '" opacity=".8"/>' +
      fly(330, 150, PINK) +
      '<rect x="0" y="208" width="400" height="10" fill="#8e8a82"/><rect x="0" y="218" width="400" height="42" fill="#2a2a30"/>' +
      '<path d="M0 240h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="rd-car"><rect x="0" y="222" width="64" height="16" rx="5" fill="#5a1a3a"/><rect x="12" y="216" width="36" height="10" rx="4" fill="#5a1a3a"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="50" cy="240" r="5" fill="#111"/><circle cx="62" cy="228" r="2" fill="#fff6c8"/></g>' +
      '<rect x="356" y="62" width="5" height="148" fill="#5a5f66"/>' +
      sign(266, 62, 132, "BALTIMORE AVE") + sign(262, 88, 136, "POWDER MILL RD") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '" opacity=".9">BELTSVILLE, PRINCE GEORGE\'S COUNTY</text>',
      sky("rd-s5", "#0b0a24", "#3a2a5a"));
  }

  window.SCENES = { rdstation: rdstation, rdhighpoint: rdhighpoint, rdcoppin: rdcoppin, rdwolftrap: rdwolftrap, rdcorner: rdcorner };
})();
