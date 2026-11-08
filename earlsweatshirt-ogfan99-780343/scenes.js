/* earlsweatshirt scenes (Regions tab: Los Angeles + SoCal; Baldwin Hills / LA). CSS classes and ids prefixed es- (the page's own anim-train is kept).
   1 Metro E Line at La Cienega/Jefferson: the aerial platform over Jefferson Blvd at the foot of the Baldwin Hills, a light-rail train sliding in, black station sign with the gold E bullet.
   2 UCLA, Westwood (he went to the UCLA Lab School; his mother teaches law there): Royce Hall's red-brick twin towers and arched loggia, the lawn, a sprinkler.
   3 Upolu, Samoa (Coral Reef Academy outside Apia, "fresh out the belly of the island"): a reef lagoon, palms, a thatched open fale, waves on the reef.
   4 Johannesburg (his father, poet Keorapetse Kgositsile, South Africa's poet laureate): the Hillbrow tower over the city and purple jacaranda trees, petals falling.
   5 La Brea Ave and Stocker St: green signs, EARL SWEATSHIRT tagged with SWEATY, LOUDER and POTTY MOUTH, the hills and the Hollywood sign far north behind.
   400 x 260 SVGs. No logos, no faces. No 9s are drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes estrain{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.es-train{animation:estrain 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes esglow{0%,100%{opacity:.35}50%{opacity:1}}.es-glow{animation:esglow 2.2s ease-in-out infinite}.es-g2{animation-delay:-1.1s}' +
    '@keyframes escar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.es-car{animation:escar 6.5s linear infinite}.es-car2{animation-duration:9s;animation-direction:reverse}' +
    '@keyframes esspray{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.es-spray{transform-box:fill-box;transform-origin:50% 100%;animation:esspray 3s ease-in-out infinite}' +
    '@keyframes eswave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.es-wave{animation:eswave 3s linear infinite}.es-wv2{animation-duration:4.6s}' +
    '@keyframes essway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.es-sway{transform-box:fill-box;transform-origin:50% 100%;animation:essway 3.4s ease-in-out infinite}.es-sw2{animation-delay:-1.7s}' +
    '@keyframes esfall{0%{transform:translate(0,-10px);opacity:0}15%{opacity:1}100%{transform:translate(18px,120px);opacity:0}}.es-fall{animation:esfall 4s linear infinite}.es-fa2{animation-delay:-1.3s}.es-fa3{animation-delay:-2.6s}' +
    '@keyframes esblink{0%,60%,100%{opacity:1}70%,90%{opacity:.2}}.es-blink{animation:esblink 2.4s infinite}' +
    '@keyframes essp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.es-sp{animation:essp 1.4s ease-out infinite}.es-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const TAN = "#d9b26f", BURG = "#8c2f39", TEAL = "#6fb3a8", EGOLD = "#fdb913";
  const palm = (x, y, s, cls) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="es-sway ' + (cls || "") + '"><path d="M0 0q-4 -40 4 -80" stroke="#6b4a2e" stroke-width="5" fill="none"/>' +
    '<path d="M4 -80q-22 -6 -36 8q18 -4 36 -8zM4 -80q22 -8 38 6q-20 -2 -38 -6zM4 -80q-12 -18 -30 -18q16 8 30 18zM4 -80q12 -20 30 -16q-16 6 -30 16zM4 -80q2 -20 -4 -28q8 10 4 28z" fill="#2f7d45"/></g></g>';

  /* 1. E Line, La Cienega/Jefferson (aerial) */
  function esstation() {
    const car = (x) => '<rect x="' + x + '" y="98" width="150" height="58" rx="8" fill="#e9ecef" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (x + 12 + i * 34) + '" y="108" width="26" height="22" rx="3" fill="#25313c"/>').join("") +
      '<rect x="' + x + '" y="136" width="150" height="6" fill="' + EGOLD + '"/><rect x="' + x + '" y="142" width="150" height="3" fill="#7a7f86"/>';
    const train = '<g class="es-train">' + car(30) + car(184) + '<rect x="30" y="94" width="304" height="4" fill="#6c7279"/><path d="M110 94l10 -14l10 14M260 94l10 -14l10 14" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="34" y="100" width="56" height="7" rx="1" fill="#111"/><text x="62" y="105.6" text-anchor="middle" ' + font + ' font-size="5" fill="' + EGOLD + '">DOWNTOWN LA</text><circle cx="34" cy="148" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#es1)"/>' +
      /* Baldwin Hills behind */
      '<path d="M0 120q60 -50 130 -40t140 -20t130 30v40h-400z" fill="#8f8a5a"/><path d="M0 130q80 -26 170 -14t230 -4v20h-400z" fill="#7a7650"/>' +
      '<rect x="0" y="40" width="400" height="0"/>' +
      /* deck + canopy */
      '<rect x="0" y="62" width="400" height="8" fill="#c8c3b8"/>' + [40, 140, 240, 340].map(x => '<rect x="' + (x - 2) + '" y="70" width="4" height="86" fill="#9a958a"/>').join("") +
      train +
      '<rect x="0" y="156" width="400" height="14" fill="#bdb7aa"/><rect x="0" y="154" width="400" height="3" fill="' + EGOLD + '"/>' +
      /* the viaduct + Jefferson Blvd below */
      '<rect x="0" y="170" width="400" height="10" fill="#a9a395"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="180" width="18" height="40" fill="#b8b2a4"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="es-car"><rect x="0" y="228" width="56" height="13" rx="5" fill="' + BURG + '"/><circle cx="12" cy="242" r="4" fill="#111"/><circle cx="44" cy="242" r="4" fill="#111"/></g>' +
      '<g class="es-car es-car2"><rect x="0" y="244" width="56" height="12" rx="5" fill="' + TEAL + '"/><circle cx="12" cy="257" r="3.5" fill="#111"/><circle cx="44" cy="257" r="3.5" fill="#111"/></g>' +
      /* black station sign */
      '<rect x="74" y="12" width="252" height="40" rx="4" fill="#111"/><circle cx="96" cy="32" r="12" fill="' + EGOLD + '"/><text x="96" y="37" text-anchor="middle" ' + font + ' font-size="15" fill="#111">E</text>' +
      '<text x="116" y="37" ' + font + ' font-size="14" fill="#fff">La Cienega / Jefferson</text>',
      sky("es1", "#79b6e6", "#f3d9b0"));
  }

  /* 2. UCLA Royce Hall */
  function esroyce() {
    const brick = "#b5533c", trim = "#e9dcc0";
    const tower = (x) => '<rect x="' + x + '" y="70" width="44" height="110" fill="' + brick + '"/><rect x="' + (x - 4) + '" y="66" width="52" height="8" fill="' + trim + '"/>' +
      '<rect x="' + (x + 6) + '" y="44" width="32" height="24" fill="' + brick + '"/><rect x="' + (x + 2) + '" y="40" width="40" height="6" fill="' + trim + '"/>' +
      '<path d="M' + (x + 10) + ' 40v-10q12 -14 24 0v10z" fill="' + brick + '"/><path d="M' + (x + 22) + ' 16v-8" stroke="' + trim + '" stroke-width="2"/><circle cx="' + (x + 22) + '" cy="20" r="3" fill="' + trim + '"/>' +
      '<path d="M' + (x + 14) + ' 66v-14q8 -10 16 0v14z" fill="#3a2a22"/>' +
      [0, 1, 2].map(i => '<path d="M' + (x + 8 + i * 11) + ' 120v-16q4 -6 8 0v16z" fill="#3a2a22"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#es2)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#fff3c4"/>' +
      tower(86) + tower(270) +
      /* main hall with arcade */
      '<rect x="130" y="110" width="140" height="70" fill="' + brick + '"/><path d="M126 110l74 -26l74 26z" fill="#9c4532"/><rect x="126" y="108" width="148" height="5" fill="' + trim + '"/>' +
      '<circle cx="200" cy="96" r="7" fill="' + trim + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (140 + i * 22) + ' 180v-34q8 -12 16 0v34z" fill="#3a2a22"/><rect x="' + (137 + i * 22) + '" y="144" width="3" height="36" fill="' + trim + '"/>').join("") +
      '<rect x="86" y="178" width="228" height="6" fill="' + trim + '"/>' +
      /* lawn + paths */
      '<rect x="0" y="184" width="400" height="76" fill="#5f9e4a"/><path d="M200 184l-40 76M200 184l40 76" stroke="#d8cfb6" stroke-width="10"/><path d="M0 214h400" stroke="#d8cfb6" stroke-width="7"/>' +
      '<g class="es-spray"><path d="M330 236q-10 -20 -24 -26M330 236q0 -24 0 -32M330 236q10 -20 24 -26" stroke="#d9f1fb" stroke-width="2" fill="none" opacity=".85"/></g><rect x="327" y="234" width="6" height="6" fill="#555"/>' +
      [[30, 182], [370, 182]].map(p => '<rect x="' + (p[0] - 3) + '" y="' + (p[1] - 36) + '" width="6" height="36" fill="#6b4a2e"/><circle cx="' + p[0] + '" cy="' + (p[1] - 48) + '" r="22" fill="#3e7a3a"/>').join("") +
      '<rect x="128" y="226" width="144" height="22" rx="3" fill="#111" opacity=".85"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">ROYCE HALL, UCLA</text>',
      sky("es2", "#76b4e0", "#f7e6c2"));
  }

  /* 3. Upolu, Samoa */
  function essamoa() {
    return svg(
      '<rect width="400" height="260" fill="url(#es3)"/>' +
      '<circle cx="90" cy="60" r="24" fill="#fff1b8" opacity=".9"/>' +
      '<path d="M180 120q60 -70 130 -50q50 10 90 40v10h-220z" fill="#2c6a40"/><path d="M220 120q50 -40 110 -30q40 8 70 30z" fill="#3a8050"/>' +
      '<rect x="0" y="118" width="400" height="40" fill="#1d6fa3"/><rect x="0" y="150" width="400" height="34" fill="#38b6c4"/>' +
      '<g class="es-wave"><path d="M0 150q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".85"/></g>' +
      '<g class="es-wave es-wv2"><path d="M0 172q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8fbff" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<rect x="0" y="184" width="400" height="76" fill="#efdcae"/>' +
      /* open fale */
      '<path d="M210 168q60 -46 120 0z" fill="#8a6a3a"/><path d="M216 166q54 -38 108 0" stroke="#6e532c" stroke-width="2" fill="none"/>' +
      [222, 246, 270, 294, 318].map(x => '<rect x="' + (x - 2) + '" y="166" width="4" height="42" fill="#6b4a2e"/>').join("") + '<rect x="214" y="206" width="112" height="6" fill="#cdb98a"/>' +
      palm(40, 214, 1.1) + palm(110, 222, .85, "es-sw2") + palm(370, 220, 1.05, "es-sw2") +
      '<path d="M140 88q5 -5 10 0q5 -5 10 0M168 74q4 -4 8 0q4 -4 8 0" stroke="#1d2a3a" stroke-width="2" fill="none"/>' +
      '<rect x="12" y="12" width="150" height="20" rx="3" fill="#0e2a3a" opacity=".85"/><text x="87" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">UPOLU, SAMOA</text>',
      sky("es3", "#5fc0ea", "#fbe9bd"));
  }

  /* 4. Johannesburg: Hillbrow tower + jacarandas */
  function esjoburg() {
    const jac = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-40M0 -26l-14 -14M0 -30l12 -12" stroke="#5a3e2a" stroke-width="5" fill="none"/>' +
      '<circle cx="-16" cy="-48" r="18" fill="#8e6cc4"/><circle cx="10" cy="-56" r="20" fill="#9c7bd2"/><circle cx="-2" cy="-40" r="16" fill="#7d5bb4"/><circle cx="22" cy="-40" r="14" fill="#8e6cc4"/></g>';
    const city = '<g fill="#4b4f63">' + [[0, 150, 40], [44, 132, 30], [78, 140, 36], [118, 120, 26], [228, 126, 34], [266, 110, 28], [298, 136, 40], [342, 124, 30], [374, 146, 26]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (200 - b[1]) + '"/>').join("") + '</g>' +
      Array.from({ length: 18 }, (_, i) => '<rect class="' + (i % 4 ? "" : "es-glow es-g2") + '" x="' + ([6, 50, 84, 124, 234, 272, 304, 348, 380][i % 9] + (i > 8 ? 12 : 0)) + '" y="' + (160 + (i > 8 ? 14 : 0)) + '" width="6" height="6" fill="#ffe2a0" opacity=".7"/>').join("");
    const tower = '<path d="M188 200l4 -120h16l4 120z" fill="#d7d3cb"/><rect x="180" y="78" width="40" height="22" rx="4" fill="#cfcac0"/><rect x="184" y="84" width="32" height="10" fill="#4b4f63"/>' +
      '<rect x="196" y="40" width="8" height="40" fill="#d7d3cb"/><path d="M200 40v-22" stroke="#bbb" stroke-width="2"/><circle class="es-blink" cx="200" cy="18" r="3" fill="#ff4a4a"/>';
    const petals = Array.from({ length: 9 }, (_, i) => '<g class="es-fall ' + ["", "es-fa2", "es-fa3"][i % 3] + '"><ellipse cx="' + (30 + i * 42) + '" cy="' + (110 + (i % 3) * 10) + '" rx="3" ry="2" fill="#b79be6"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#es4)"/>' +
      city + tower +
      '<rect x="0" y="200" width="400" height="60" fill="#6a6660"/><path d="M0 230h400" stroke="#e8e4dc" stroke-width="2" stroke-dasharray="18 14"/>' +
      jac(40, 214, 1.2) + jac(130, 220, .9) + jac(290, 218, 1.1) + jac(372, 216, .95) + petals +
      '<rect x="230" y="12" width="160" height="20" rx="3" fill="#1d1a2a" opacity=".85"/><text x="310" y="26" text-anchor="middle" ' + font + ' font-size="10" fill="#f4ecd8">JOHANNESBURG</text>',
      sky("es4", "#f2a65e", "#f9dcb2"));
  }

  /* 5. La Brea Ave and Stocker St */
  function escorner() {
    const hills = '<path d="M0 130q50 -40 100 -30t110 -26t100 10t90 -6v52h-400z" fill="#5b5a48"/>' +
      '<text x="244" y="96" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="2" fill="#f4f1ea">HOLLYWOOD</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#es5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="' + (i % 3 ? "" : "es-glow") + '" cx="' + ((i * 97 + 20) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      hills +
      palm(30, 136, .9) + palm(340, 136, 1.05, "es-sw2") +
      '<rect x="0" y="134" width="400" height="90" fill="#e9e3d6"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#d6cfbf" stroke-width="1"/>').join("") +
      tag("POTTY MOUTH", 20, 162, 18, TEAL, -4) + tag("EARL", 16, 194, 34, TAN, -5) + tag("SWEATSHIRT", 40, 220, 24, TAN, -4) + tag("LOUDER", 214, 196, 22, BURG, -6) + tag("SWEATY", 230, 216, 14, "#222", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="es-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + BURG + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#5e1f27"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="368" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 106, "La Brea Ave") + sign(298, 124, 98, "Stocker St") +
      '<g class="es-sp"><circle cx="196" cy="180" r="3" fill="' + TAN + '" opacity=".7"/></g><g class="es-sp es-sp2"><circle cx="202" cy="174" r="2" fill="' + TAN + '" opacity=".6"/></g>',
      sky("es5", "#1a1530", "#c86a4a"));
  }

  window.SCENES = { esstation: esstation, esroyce: esroyce, essamoa: essamoa, esjoburg: esjoburg, escorner: escorner };
})();
