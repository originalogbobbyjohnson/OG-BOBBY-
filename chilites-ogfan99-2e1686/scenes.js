/* chilites scenes (Regions tab: CHICAGO; GENRES: R&B. The Chi-Lites came together in 1959 as the Hi-Lites at Hyde Park High School, 6220 S Stony Island Ave, Woodlawn, South Side). CSS classes prefixed clt- (the page's own anim-train is kept).
   1 Metra Electric 63rd St in Woodlawn, up on the embankment: silver Highliner cars sliding in, black station sign with the blue ME bullet.
   2 Hyde Park High School on S Stony Island Ave, where the Hi-Lites first sang together: red brick with limestone trim, five singers harmonizing on the front steps (silhouettes, no faces).
   3 The same old bench in Jackson Park ("Have You Seen Her"): trees, swings and a kite moving, a picture-show marquee across the street.
   4 The 63rd Street Beach House on the lake in Jackson Park, snow falling ("The Coldest Days of My Life"): cream arcade, red tile roof, ice on the lake.
   5 S Stony Island Ave and E 63rd St: green signs, CHI-LITES tagged on the wall, the gilded Golden Lady (Statue of the Republic) in Jackson Park behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cltglow{0%,100%{opacity:.4}50%{opacity:1}}.clt-glow{animation:cltglow 2.4s ease-in-out infinite}.clt-g2{animation-delay:-1.2s}' +
    '@keyframes cltnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-18px,-64px);opacity:0}}.clt-note{animation:cltnote 3.6s ease-out infinite}.clt-n2{animation-delay:-1.2s}.clt-n3{animation-delay:-2.4s}' +
    '@keyframes cltsway{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.clt-sway{animation:cltsway 1.2s ease-in-out infinite}.clt-w2{animation-delay:-.3s}.clt-w3{animation-delay:-.6s}.clt-w4{animation-delay:-.9s}' +
    '@keyframes cltswing{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.clt-swing{transform-box:view-box;animation:cltswing 2s ease-in-out infinite}' +
    '@keyframes cltkite{0%,100%{transform:translate(0,0) rotate(-4deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.clt-kite{transform-box:fill-box;transform-origin:50% 100%;animation:cltkite 3s ease-in-out infinite}' +
    '@keyframes cltsnow{from{transform:translateY(-20px)}to{transform:translateY(270px)}}.clt-snow{animation:cltsnow 6s linear infinite}.clt-s2{animation-delay:-2s}.clt-s3{animation-delay:-4s}' +
    '@keyframes cltcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.clt-car{animation:cltcar 7s linear infinite}' +
    '@keyframes cltspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.clt-sp{animation:cltspray 1.4s ease-out infinite}.clt-sp2{animation-delay:.45s}' +
    '@keyframes cltbulb{0%,100%{opacity:1}50%{opacity:.25}}.clt-bulb{animation:cltbulb .8s steps(1) infinite}.clt-b2{animation-delay:-.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "clt-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="clt-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/><path d="M' + (x + 4.6) + ' ' + (y - 14) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.6" fill="none"/></g>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 4 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (18 * s) + '" fill="' + c + '"/><circle cx="' + (x - 12 * s) + '" cy="' + (y - 4 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x + 12 * s) + '" cy="' + (y - 4 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/>';
  /* a singer silhouette in a matching suit, no face */
  const singer = (x, y, c, cls) => '<g class="clt-sway ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="7" fill="#1a1414"/><path d="M' + (x - 10) + ' ' + y + 'l2 -26q8 -4 16 0l2 26z" fill="' + c + '"/><rect x="' + (x - 1.5) + '" y="' + (y - 26) + '" width="3" height="10" fill="#f3e6d0"/><rect x="' + (x - 8) + '" y="' + y + '" width="6" height="18" fill="#1a1414"/><rect x="' + (x + 2) + '" y="' + y + '" width="6" height="18" fill="#1a1414"/></g>';
  const GOLD = "#f2c14e", ROSE = "#e0475b", LAKE = "#4fb3d9", METRA = "#1f4e79";
  const skyline = (y, c) => '<g fill="' + c + '">' +
    '<rect x="40" y="' + (y - 30) + '" width="26" height="30"/><rect x="72" y="' + (y - 50) + '" width="18" height="50"/><rect x="150" y="' + (y - 70) + '" width="16" height="70"/><rect x="166" y="' + (y - 86) + '" width="18" height="86"/><rect x="171" y="' + (y - 104) + '" width="2" height="18"/><rect x="178" y="' + (y - 104) + '" width="2" height="18"/>' +
    '<rect x="190" y="' + (y - 60) + '" width="20" height="60"/><rect x="232" y="' + (y - 52) + '" width="22" height="52"/><path d="M232 ' + (y - 52) + 'l11 -12l11 12z"/><rect x="300" y="' + (y - 38) + '" width="30" height="38"/></g>';

  /* 1. Metra Electric 63rd St, Woodlawn, up on the embankment */
  function cltstation() {
    const car = x => '<rect x="' + x + '" y="98" width="156" height="72" rx="5" fill="#d9dde3" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="134" width="156" height="4" fill="' + METRA + '"/><rect x="' + x + '" y="160" width="156" height="4" fill="' + ROSE + '"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 25) + '" y="106" width="18" height="20" rx="2" fill="#20303f"/><rect x="' + (x + 8 + i * 25) + '" y="142" width="18" height="14" rx="2" fill="#20303f"/>').join("") +
      '<rect x="' + (x + 6) + '" y="88" width="2" height="10" fill="#555"/><path d="M' + (x + 7) + ' 88l20 -10" stroke="#555" stroke-width="2"/>';
    const train = '<g class="anim-train">' + car(30) + car(190) + '<rect x="318" y="104" width="24" height="12" rx="2" fill="#111"/><text x="330" y="113" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">63RD ST</text><circle class="clt-glow" cx="340" cy="152" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#clt-s1)"/>' + stars(10) + skyline(150, "#26304a") +
      '<path d="M0 70H400" stroke="#2b2b2b" stroke-width="2"/>' + [50, 150, 250, 350].map(x => '<rect x="' + x + '" y="70" width="3" height="40" fill="#2b2b2b"/>').join("") +
      train +
      /* platform on the embankment */
      '<rect x="0" y="176" width="400" height="12" fill="#6a6a64"/><rect x="0" y="174" width="400" height="3" fill="#f2d24a"/>' +
      '<path d="M0 188H400V260H0z" fill="#4a5a3a"/><path d="M0 188H400V198H0z" fill="#5a6a48"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30 + 6) + ' 206q4 -6 8 0" stroke="#6a7a50" stroke-width="2" fill="none"/>').join("") +
      /* viaduct over 63rd */
      '<rect x="0" y="236" width="400" height="24" fill="#2e2e30"/><rect x="0" y="232" width="400" height="5" fill="#777"/>' +
      '<rect x="74" y="200" width="252" height="30" rx="3" fill="#111"/><text x="186" y="221" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">63RD STREET</text>' +
      '<circle cx="302" cy="215" r="11" fill="' + METRA + '"/><text x="302" y="219" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ME</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">METRA ELECTRIC · 63RD ST · WOODLAWN</text>',
      sky("clt-s1", "#0e1630", "#3a2a4a"));
  }

  /* 2. Hyde Park High School on S Stony Island Ave, the Hi-Lites on the steps */
  function cltschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="18" height="24" fill="#2a3448" stroke="#e8dcc2" stroke-width="2"/><rect x="' + (x + 8) + '" y="' + y + '" width="2" height="24" fill="#e8dcc2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#clt-s2)"/>' +
      tree(26, 170, 1.2, "#2f6a3a") + tree(376, 166, 1.3, "#2a5e34") +
      /* red brick school with limestone trim */
      '<rect x="56" y="58" width="288" height="146" fill="#9a4a36" stroke="#6a2e22" stroke-width="2"/>' +
      '<rect x="52" y="52" width="296" height="10" fill="#e8dcc2"/><rect x="56" y="118" width="288" height="5" fill="#e8dcc2"/>' +
      '<rect x="160" y="34" width="80" height="170" fill="#a8543e" stroke="#6a2e22" stroke-width="2"/><rect x="156" y="28" width="88" height="10" fill="#e8dcc2"/>' +
      [74, 104, 134].map(x => win(x, 72) + win(x, 132)).join("") + [250, 280, 310].map(x => win(x, 72) + win(x, 132)).join("") +
      '<rect x="178" y="48" width="44" height="34" fill="#2a3448" stroke="#e8dcc2" stroke-width="2"/><path d="M178 48q22 -18 44 0" fill="#e8dcc2"/>' +
      '<rect x="164" y="92" width="72" height="14" fill="#e8dcc2"/><text x="200" y="103" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5a2a1c">HYDE PARK HIGH</text>' +
      /* doors and steps */
      '<rect x="180" y="150" width="40" height="54" fill="#2a2020" stroke="#e8dcc2" stroke-width="3"/><rect x="199" y="150" width="2" height="54" fill="#e8dcc2"/>' +
      '<rect x="140" y="204" width="120" height="8" fill="#cfc4ae"/><rect x="130" y="212" width="140" height="8" fill="#bdb29c"/><rect x="120" y="220" width="160" height="8" fill="#aba08a"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#4a4a4e"/><rect x="0" y="226" width="400" height="3" fill="#8a8a8e"/>' +
      singer(142, 204, "#3a4a8a", "") + singer(171, 204, "#3a4a8a", "clt-w2") + singer(200, 204, "#3a4a8a", "clt-w3") + singer(229, 204, "#3a4a8a", "clt-w4") + singer(258, 204, "#3a4a8a", "clt-w2") +
      note(120, 150, GOLD) + note(200, 140, "#fff", "clt-n2") + note(286, 150, ROSE, "clt-n3") +
      '<rect x="92" y="236" width="216" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">S STONY ISLAND AVE · WHERE THE HI-LITES SANG</text>',
      sky("clt-s2", "#3a7ab8", "#b8daea"));
  }

  /* 3. The same old bench in Jackson Park, watching the children play */
  function cltbench() {
    return svg(
      '<rect width="400" height="260" fill="url(#clt-s3)"/>' +
      /* picture show across the street */
      '<rect x="250" y="40" width="130" height="100" fill="#6a4a5a"/><rect x="244" y="66" width="142" height="26" fill="#1a1414"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="clt-bulb' + (i % 2 ? " clt-b2" : "") + '" cx="' + (250 + i * 10) + '" cy="64" r="2" fill="' + GOLD + '"/>').join("") +
      '<text x="315" y="84" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1">PICTURE SHOW</text>' +
      '<rect x="296" y="106" width="38" height="34" fill="#2a2030"/>' +
      /* park */
      '<rect x="0" y="140" width="400" height="120" fill="#4f8a3e"/><path d="M0 140H400" stroke="#3a6a2e" stroke-width="3"/>' +
      tree(40, 140, 1.4, "#2f6a3a") + tree(110, 136, 1.1, "#3a7a40") + tree(220, 142, 1, "#2f6a3a") +
      /* swing set */
      '<path d="M140 210L156 150L172 210M220 210L204 150L188 210" stroke="#c84a3a" stroke-width="4" fill="none"/><rect x="154" y="148" width="52" height="5" fill="#c84a3a"/>' +
      '<g class="clt-swing" style="transform-origin:180px 152px"><path d="M174 152v34M186 152v34" stroke="#ddd" stroke-width="1.5"/><rect x="170" y="186" width="20" height="4" fill="#333"/></g>' +
      /* kite */
      '<path d="M162 30q-60 80 -60 150" stroke="#fff" stroke-width="1" fill="none" opacity=".8"/><g class="clt-kite"><path d="M150 14l12 -16l12 16l-12 18z" transform="translate(0 20)" fill="' + ROSE + '" stroke="#fff" stroke-width="1"/><path d="M162 52q-6 8 2 14q-6 6 0 12" stroke="' + GOLD + '" stroke-width="1.5" fill="none"/></g>' +
      /* the bench */
      '<rect x="40" y="196" width="100" height="6" rx="2" fill="#7a4a2a"/><rect x="40" y="184" width="100" height="5" rx="2" fill="#7a4a2a"/><rect x="40" y="174" width="100" height="5" rx="2" fill="#7a4a2a"/>' +
      '<rect x="46" y="174" width="5" height="44" fill="#2a2a2a"/><rect x="128" y="174" width="5" height="44" fill="#2a2a2a"/>' +
      '<path d="M0 226Q200 214 400 230V260H0z" fill="#c9b78a"/>' +
      '<rect x="88" y="236" width="224" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">THE SAME OLD BENCH · JACKSON PARK</text>',
      sky("clt-s3", "#e7a868", "#f6dca8"));
  }

  /* 4. The 63rd Street Beach House in the snow */
  function cltbeach() {
    const flakes = cls => '<g class="clt-snow ' + cls + '">' + Array.from({ length: 22 }, (_, i) => '<circle cx="' + ((i * 71 + (cls.length * 23)) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (i % 3 ? 1.4 : 2.2) + '" fill="#fff" opacity=".85"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#clt-s4)"/>' +
      /* frozen lake */
      '<rect x="0" y="96" width="400" height="70" fill="#7aa6c2"/>' + [0, 1, 2, 3, 4].map(i => '<path d="M' + (i * 90 + 10) + ' ' + (110 + (i % 2) * 18) + 'h40" stroke="#e8f2fa" stroke-width="3" opacity=".8"/>').join("") +
      '<path d="M0 96H400" stroke="#a8c6d8" stroke-width="2"/>' +
      /* beach house: cream arcade, red tile roof, end pavilions */
      '<rect x="40" y="120" width="320" height="76" fill="#efe4c8" stroke="#b9a882" stroke-width="2"/>' +
      '<path d="M34 120L60 104H340L366 120z" fill="#b24a32"/>' +
      '<rect x="40" y="96" width="60" height="100" fill="#e8dcbc" stroke="#b9a882" stroke-width="2"/><path d="M34 96L70 80L106 96z" fill="#b24a32"/>' +
      '<rect x="300" y="96" width="60" height="100" fill="#e8dcbc" stroke="#b9a882" stroke-width="2"/><path d="M294 96L330 80L366 96z" fill="#b24a32"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (110 + i * 32) + ' 196V156a12 12 0 0 1 24 0V196z" fill="#3a4a5a"/>').join("") +
      '<rect x="52" y="116" width="36" height="30" fill="#3a4a5a"/><rect x="312" y="116" width="36" height="30" fill="#3a4a5a"/>' +
      '<rect class="clt-glow" x="52" y="116" width="36" height="30" fill="' + GOLD + '" opacity=".3"/>' +
      /* snow drifts */
      '<path d="M0 196Q100 186 200 198T400 194V260H0z" fill="#f4f8fb"/><path d="M100 106H300" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path d="M34 96L70 80L106 96M294 96L330 80L366 96" stroke="#fff" stroke-width="3" fill="none"/>' +
      flakes("") + flakes("clt-s2") + flakes("clt-s3") +
      '<rect x="66" y="232" width="268" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">63RD STREET BEACH · THE COLDEST DAYS</text>',
      sky("clt-s4", "#5a6a82", "#b8c6d4"));
  }

  /* 5. S Stony Island Ave and E 63rd St, the Golden Lady behind */
  function cltcorner() {
    const lady = '<g>' +
      '<rect x="150" y="100" width="40" height="22" fill="#cfc6b0"/><rect x="144" y="96" width="52" height="6" fill="#b9b09a"/>' +
      '<path d="M158 96L162 40Q170 32 178 40L182 96z" fill="' + GOLD + '"/><circle cx="170" cy="30" r="7" fill="' + GOLD + '"/>' +
      '<path d="M162 46L146 14M178 46L194 14" stroke="' + GOLD + '" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="144" y="2" width="3" height="14" fill="' + GOLD + '"/><path d="M139 4q6 -6 13 0" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/><circle cx="196" cy="10" r="6" fill="' + GOLD + '"/>' +
      '<circle class="clt-glow" cx="170" cy="56" r="26" fill="' + GOLD + '" opacity=".18"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#clt-s5)"/>' + stars(8) +
      '<path d="M0 124Q60 100 120 120T260 116T400 122V130H0z" fill="#1e3a2a"/>' + lady +
      /* brick wall with the tags */
      '<rect x="0" y="122" width="400" height="96" fill="#7a3a2a"/>' +
      Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (130 + r * 10) + 'H400" stroke="#5a2a20" stroke-width="1"/>').join("") +
      tag("CHI-LITES", 22, 184, 38, GOLD, -6) + tag("OH GIRL", 52, 210, 22, ROSE, -4) + tag("HI-LITES", 168, 206, 18, LAKE, -3) +
      '<circle class="clt-sp" cx="206" cy="160" r="3" fill="' + GOLD + '" opacity=".8"/><circle class="clt-sp clt-sp2" cx="212" cy="166" r="2" fill="' + GOLD + '" opacity=".8"/>' +
      /* street sign pole */
      '<rect x="330" y="60" width="5" height="160" fill="#4a5a4a"/>' + sign(262, 64, 136, "S STONY ISLAND AV") + sign(282, 90, 100, "E 63RD ST") +
      '<rect x="0" y="218" width="400" height="42" fill="#444"/><rect x="0" y="216" width="400" height="4" fill="#888"/>' +
      '<g class="clt-car"><rect x="0" y="228" width="72" height="18" rx="5" fill="' + LAKE + '"/><rect x="12" y="220" width="42" height="12" rx="4" fill="#2a6a8a"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="56" cy="248" r="6" fill="#111"/></g>',
      sky("clt-s5", "#2a2050", "#d0704a"));
  }

  window.SCENES = { cltstation, cltschool, cltbench, cltbeach, cltcorner };
})();
