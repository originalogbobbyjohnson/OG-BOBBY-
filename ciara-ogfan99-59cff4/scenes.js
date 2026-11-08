/* ciara scenes (Regions tab: Atlanta; GENRES: R&B. Born at Fort Hood, Texas, an Army kid; her family settled in College Park and she came up in Riverdale, Clayton County, class of 2003 at Riverdale High). CSS classes and ids prefixed ci- (the page's own anim-train is kept).
   1 Riverdale Town Center on Church St, the stop for MARTA's 197 Battle Creek Rd bus, up the road from Riverdale High: the white MARTA bus with blue + orange bands pulling in, the stop flag, black stop sign.
   2 Riverdale High School (the Raiders, black, grey and white), where she was a varsity cheerleader and LaFace sent a camera crew her senior year: brick front, the RAIDERS banner, pom-poms bouncing under the Friday-night lights.
   3 Campbellton Rd SW, where the "Goodies" video was shot in 2004: low strip storefronts (no names), Georgia pines, a red drop-top rolling through.
   4 The Why Not You Center, the dance studio she opened at the John H. Harland Boys & Girls Club in the West End on Ciara Day, July 28, 2025: mirrors, the barre, a wood floor, a spotlight sweeping, dancers in silhouette stepping.
   5 Roberts Dr and Rountree Rd by Riverdale High: green signs, CIARA tagged with LEVEL UP and 1 2 STEP, the stadium's pinwheel roof downtown far off behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ciglow{0%,100%{opacity:.4}50%{opacity:1}}.ci-glow{animation:ciglow 2.2s ease-in-out infinite}.ci-glow2{animation-delay:-1.1s}' +
    '@keyframes cipom{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-10px) scale(1.12)}}.ci-pom{transform-box:fill-box;transform-origin:50% 50%;animation:cipom .7s ease-in-out infinite}.ci-pom2{animation-delay:-.35s}' +
    '@keyframes ciflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(5deg) scaleX(.92)}}.ci-flag{transform-box:fill-box;transform-origin:0% 50%;animation:ciflag 1.2s ease-in-out infinite}' +
    '@keyframes cicar{from{transform:translateX(-160px)}to{transform:translateX(520px)}}.ci-car{animation:cicar 6s linear infinite;animation-delay:-2.6s}' +
    '@keyframes cicarL{from{transform:translateX(480px)}to{transform:translateX(-120px)}}.ci-carL{animation:cicarL 8s linear infinite}' +
    '@keyframes cisweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ci-sweep{transform-box:fill-box;transform-origin:50% 0%;animation:cisweep 3s ease-in-out infinite}' +
    '@keyframes cistep{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.ci-step{animation:cistep 1s ease-in-out infinite}.ci-step2{animation-delay:-.5s}' +
    '@keyframes cijet{from{transform:translate(-60px,30px)}to{transform:translate(470px,-40px)}}.ci-jet{animation:cijet 10s linear infinite}' +
    '@keyframes cispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ci-sp{animation:cispray 1.4s ease-out infinite}.ci-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "ci-glow") + '" cx="' + ((i * 83) % 400) + '" cy="' + (8 + (i * 37) % 62) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const pine = (x, y, s) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><path d="M' + x + ' ' + (y - 48 * s) + 'l' + (14 * s) + ' ' + (26 * s) + 'h' + (-6 * s) + 'l' + (10 * s) + ' ' + (20 * s) + 'h' + (-36 * s) + 'l' + (10 * s) + ' ' + (-20 * s) + 'h' + (-6 * s) + 'z" fill="#244a2e"/>';
  /* a 9 drawn by hand: round bowl + a straight stem (no hooked tail) */
  const nine = (x, y, h, c) => '<circle cx="' + (x + h * .27) + '" cy="' + (y - h * .7) + '" r="' + (h * .23) + '" fill="none" stroke="' + c + '" stroke-width="' + (h * .14) + '"/><path d="M' + (x + h * .5) + ' ' + (y - h * .72) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (h * .14) + '"/>';
  const PINK = "#ff8fb1", GOLD = "#f5c542", SKY = "#7fd6ff", BUS = "#0067b1", MORANGE = "#f7941d";

  /* 1. Riverdale Town Center stop, MARTA 197 Battle Creek Rd */
  function cistation() {
    const bus = '<g class="anim-train"><rect x="34" y="118" width="246" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="132" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="40" y="132" width="30" height="58" rx="2" fill="#24323e"/><rect x="34" y="168" width="246" height="7" fill="' + BUS + '"/><rect x="34" y="177" width="246" height="4" fill="' + MORANGE + '"/>' +
      '<rect x="40" y="120" width="128" height="11" rx="2" fill="#111"/><text x="56" y="128.6" ' + font + ' font-size="7.5" fill="#ffb84a">1</text>' + nine(61, 128.6, 7.2, "#ffb84a") + '<text x="67" y="128.6" ' + font + ' font-size="7.5" fill="#ffb84a">7 BATTLE CREEK RD</text>' +
      '<circle cx="84" cy="200" r="12" fill="#222"/><circle cx="84" cy="200" r="5" fill="#9aa1a8"/><circle cx="236" cy="200" r="12" fill="#222"/><circle cx="236" cy="200" r="5" fill="#9aa1a8"/>' +
      '<circle class="ci-glow" cx="38" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ci-s1)"/>' +
      pine(16, 112, 1) + pine(52, 116, .8) + pine(372, 112, 1.1) +
      /* the town center: low red-brick civic buildings and a green */
      '<rect x="70" y="84" width="120" height="56" fill="#9a4e3a"/><rect x="190" y="70" width="40" height="70" fill="#8a4434"/><path d="M186 70l24 -18l24 18z" fill="#5a2e24"/><circle cx="210" cy="86" r="8" fill="#f4efe2" stroke="#5a2e24" stroke-width="2"/><path d="M210 86v-5M210 86h4" stroke="#333" stroke-width="1.4"/>' +
      '<rect x="230" y="90" width="110" height="50" fill="#9a4e3a"/>' + [80, 104, 128, 152, 240, 264, 288, 312].map(x => '<rect x="' + x + '" y="98" width="14" height="20" fill="#f6e2a8" class="ci-glow' + (x % 48 ? " ci-glow2" : "") + '" opacity=".8"/>').join("") +
      '<rect x="0" y="140" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="160" width="400" height="100" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* stop flag */
      '<rect x="336" y="80" width="5" height="80" fill="#6b7178"/><rect x="318" y="60" width="42" height="38" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="74" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="327" y="91" ' + font + ' font-size="13" fill="#fff">1</text>' + nine(335.5, 91, 12.5, "#fff") + '<text x="345" y="91" ' + font + ' font-size="13" fill="#fff">7</text>' +
      /* black stop sign */
      '<rect x="96" y="212" width="208" height="32" rx="3" fill="#111"/><text x="200" y="226" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RIVERDALE TOWN CENTER</text><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CHURCH ST · RIVERDALE, GA</text>',
      sky("ci-s1", "#8ec8ef", "#f6e0c8"));
  }

  /* 2. Riverdale High School, the Raiders: cheer under the lights */
  function cihigh() {
    const pom = (x, y, c, cls) => '<g class="ci-pom ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/>' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M' + x + ' ' + y + 'l' + (13 * Math.cos(a)).toFixed(1) + ' ' + (13 * Math.sin(a)).toFixed(1) + '" stroke="' + c + '" stroke-width="3"/>'; }).join("") + '</g>';
    const light = x => '<rect x="' + (x - 2) + '" y="36" width="4" height="90" fill="#5a5f66"/><rect x="' + (x - 16) + '" y="24" width="32" height="14" rx="2" fill="#3a3f46"/>' + [0, 1, 2, 3].map(i => '<circle class="ci-glow" cx="' + (x - 11 + i * 7) + '" cy="31" r="2.6" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ci-s2)"/>' + stars(10) + light(40) + light(360) +
      /* school: long brick front, entry with flat canopy */
      '<rect x="60" y="92" width="280" height="80" fill="#8c3f30"/><rect x="60" y="88" width="280" height="6" fill="#5a2a22"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (72 + i * 30) + '" y="104" width="18" height="22" fill="#2a2e38"/>').join("") +
      '<rect x="160" y="132" width="80" height="40" fill="#d9dbdf"/><rect x="152" y="126" width="96" height="8" fill="#e8eaee"/><rect x="176" y="140" width="20" height="32" fill="#2a2e38"/><rect x="204" y="140" width="20" height="32" fill="#2a2e38"/>' +
      '<text x="200" y="122" text-anchor="middle" ' + font + ' font-size="9" fill="#f4f4f4">RIVERDALE HIGH SCHOOL</text>' +
      /* flagpole */
      '<rect x="44" y="70" width="3" height="104" fill="#ccc"/><g class="ci-flag"><rect x="47" y="72" width="30" height="18" fill="#b22234"/><rect x="47" y="72" width="13" height="9" fill="#3c3b6e"/><path d="M47 78h30M47 84h30" stroke="#fff" stroke-width="2"/></g>' +
      /* RAIDERS banner, black grey white */
      '<rect x="252" y="134" width="80" height="30" fill="#111" stroke="#9aa1a8" stroke-width="2"/><text x="292" y="154" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">RAIDERS</text>' +
      /* field + sideline */
      '<rect x="0" y="172" width="400" height="88" fill="#3f7a3a"/><path d="M0 200h400M0 230h400" stroke="#e8f0e0" stroke-width="2" opacity=".6"/>' +
      pom(110, 212, "#f4f4f4", "") + pom(150, 214, "#111", "ci-pom2") + pom(250, 214, "#9aa1a8", "") + pom(290, 212, "#f4f4f4", "ci-pom2") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">VARSITY CHEER · CLASS OF 2003</text>',
      sky("ci-s2", "#121a3a", "#3a4a7a"));
  }

  /* 3. Campbellton Rd SW: the "Goodies" ride, red drop-top */
  function cigoodies() {
    const car = '<g class="ci-car"><path d="M0 210h120l-4 -16l-20 -4h-86l-10 6z" fill="#d7263d" stroke="#7a1020" stroke-width="2"/><path d="M78 190l8 -12" stroke="#7fd6ff" stroke-width="3"/><path d="M30 190h44" stroke="#3a1018" stroke-width="3"/><rect x="108" y="198" width="10" height="5" fill="#fff6c2"/>' +
      '<circle cx="24" cy="212" r="10" fill="#111"/><circle cx="24" cy="212" r="5" fill="#d7dbe0"/><circle cx="96" cy="212" r="10" fill="#111"/><circle cx="96" cy="212" r="5" fill="#d7dbe0"/></g>';
    const store = (x, w, c, aw) => '<rect x="' + x + '" y="110" width="' + w + '" height="60" fill="' + c + '"/><path d="M' + x + ' 120h' + w + 'l-6 12h' + (12 - w) + 'z" fill="' + aw + '"/><rect x="' + (x + 8) + '" y="136" width="' + (w - 16) + '" height="26" fill="#2a3a48"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ci-s3)"/><circle cx="330" cy="50" r="22" fill="#fff2b0" opacity=".9"/>' +
      pine(20, 106, 1.2) + pine(70, 104, 1) + pine(360, 106, 1.3) + pine(394, 104, 1) +
      store(40, 80, "#d8c7a8", PINK) + store(120, 70, "#c4b18e", SKY) + store(190, 90, "#d8c7a8", GOLD) + store(280, 80, "#c4b18e", "#d7263d") +
      '<rect x="0" y="170" width="400" height="16" fill="#c9c3b6"/><rect x="0" y="186" width="400" height="74" fill="#4a4a52"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      car +
      '<rect x="292" y="74" width="5" height="96" fill="#2f2f2f"/>' + sign(218, 76, 152, "Campbellton Rd SW") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GOODIES · SOUTHWEST ATLANTA, 2004</text>',
      sky("ci-s3", "#4aa3e0", "#ffe0b0"));
  }

  /* 4. The Why Not You Center dance studio, West End */
  function cicenter() {
    const dancer = (x, c, cls) => '<g class="ci-step ' + cls + '"><circle cx="' + x + '" cy="146" r="8" fill="' + c + '"/><path d="M' + (x - 8) + ' 158h16l4 34h-8l-4 -18l-4 18h-8z" fill="' + c + '"/><path d="M' + (x - 8) + ' 160l-14 -14M' + (x + 8) + ' 160l12 -16" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 6) + ' 192l-6 18M' + (x + 6) + ' 192l8 18" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2440"/>' +
      /* mirror wall */
      '<rect x="20" y="40" width="360" height="150" fill="#8fb6cc" opacity=".35"/>' + [110, 200, 290].map(x => '<path d="M' + x + ' 40v150" stroke="#cfe3ee" stroke-width="2" opacity=".6"/>').join("") +
      '<path d="M40 60l40 -20M150 70l50 -30M260 80l40 -40" stroke="#fff" stroke-width="2" opacity=".25"/>' +
      /* barre */
      '<path d="M20 150h360" stroke="#c9a24a" stroke-width="5"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 2) + '" y="150" width="4" height="40" fill="#8a6a2a"/>').join("") +
      /* spotlight */
      '<rect x="190" y="0" width="20" height="10" fill="#111"/><path class="ci-sweep" d="M200 8l-60 210h120z" fill="#fff6c8" opacity=".18"/>' +
      /* wood floor */
      '<rect x="0" y="190" width="400" height="70" fill="#a8743e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (196 + i * 8) + 'h400" stroke="#8a5a2a" stroke-width="1"/>').join("") +
      dancer(120, "#1a1428", "") + dancer(200, "#1a1428", "ci-step2") + dancer(280, "#1a1428", "") +
      '<rect x="100" y="12" width="200" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="27" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">WHY NOT YOU · WEST END</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CIARA DAY · JULY 28</text>',
      '');
  }

  /* 5. Roberts Dr and Rountree Rd, Riverdale */
  function cicorner() {
    /* the stadium's pinwheel roof, small and far off */
    const stadium = '<g opacity=".85"><path d="M150 112l20 -34h60l20 34z" fill="#3a4250"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M200 96l' + (30 * Math.cos(i * Math.PI / 4)).toFixed(1) + ' ' + (12 * Math.sin(i * Math.PI / 4)).toFixed(1) + 'l' + (10 * Math.cos(i * Math.PI / 4 + 1)).toFixed(1) + ' ' + (4 * Math.sin(i * Math.PI / 4 + 1)).toFixed(1) + 'z" fill="#7a8494"/>').join("") +
      '<circle class="ci-glow" cx="200" cy="96" r="5" fill="#ffe7a0" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ci-s5)"/>' + stars(12) + stadium +
      '<g class="ci-jet"><path d="M0 60l40 -6l8 -6h4l-4 7l14 -2l4 -5h3l-2 6l-2 5h-3l-4 -4l-14 1l4 7h-4l-8 -6l-40 -2z" fill="#e8ecf2"/><circle class="ci-glow" cx="2" cy="61" r="1.6" fill="#ff4a4a"/></g>' +
      pine(30, 118, 1.2) + pine(76, 120, .9) + pine(340, 118, 1) +
      '<rect x="0" y="120" width="400" height="104" fill="#5a4a5e"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#4a3c4e" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#2e2432"/>' +
      tag("CIARA", 18, 190, 58, PINK, -6) + tag("LEVEL UP", 30, 216, 22, GOLD, -3) + tag("1 2 STEP", 200, 168, 22, SKY, -4) + tag("CI", 214, 208, 30, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="ci-carL"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GOLD + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 108, "Roberts Dr") + sign(284, 124, 114, "Rountree Rd") +
      '<g class="ci-sp"><circle cx="150" cy="160" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ci-sp ci-sp2"><circle cx="156" cy="154" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ci-s5", "#1a1438", "#c86a8a"));
  }

  window.SCENES = { cistation: cistation, cihigh: cihigh, cigoodies: cigoodies, cicenter: cicenter, cicorner: cicorner };
})();
