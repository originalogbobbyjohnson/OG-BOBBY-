/* Kid 'n Play game (NYC map, Queens). The E and F down at Kew Gardens-Union Tpke under Queens Blvd, Bronx High School of Science (Kid, class of '82),
   the School of Visual Arts on E 23rd St (where Play studied art), Jamaica Av under the old el (Play was born in Jamaica, Queens),
   and Queens Blvd & Union Tpke with Queens Borough Hall behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kpcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.kp-car{animation:kpcars 7s linear infinite}.kp-car2{animation-delay:-3.5s}' +
    '@keyframes kpblink{0%,100%{opacity:.25}50%{opacity:1}}.kp-bl{animation:kpblink 1.6s ease-in-out infinite}.kp-bl2{animation-delay:.5s}.kp-bl3{animation-delay:1s}' +
    '@keyframes kpflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.kp-flk{animation:kpflick 2.4s infinite}' +
    '@keyframes kporbit{to{transform:rotate(360deg)}}.kp-orb{transform-box:view-box;animation:kporbit 3s linear infinite}.kp-orb2{animation-duration:4.5s;animation-direction:reverse}' +
    '@keyframes kpel{from{transform:translateX(420px)}to{transform:translateX(-360px)}}.kp-el{animation:kpel 6.5s linear infinite}' +
    '@keyframes kpbrush{0%,100%{transform:translate(0,0) rotate(-10deg)}50%{transform:translate(10px,8px) rotate(8deg)}}.kp-brush{transform-box:fill-box;transform-origin:0% 100%;animation:kpbrush 1.4s ease-in-out infinite}' +
    '@keyframes kpkick{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.kp-leg{transform-box:fill-box;transform-origin:50% 0%;animation:kpkick .8s ease-in-out infinite}.kp-leg2{animation-direction:reverse}' +
    '@keyframes kpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.kp-bob{animation:kpbob .8s ease-in-out infinite}.kp-bob2{animation-delay:.4s}' +
    '@keyframes kpflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.kp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kpflag 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 40) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff4fa3", TEAL = "#34d8e8", GOLD = "#ffd23f", CREAM = "#f4ead8", BLUE = "#0039a6", ORANGE = "#ff6319";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* hi-top fade silhouette (no face): tall flat-top hair on a head, shoulders */
  const fade = (x, y, h, col) => '<rect x="' + (x - 8) + '" y="' + (y - h) + '" width="16" height="' + h + '" rx="2" fill="' + col + '"/><circle cx="' + x + '" cy="' + (y + 4) + '" r="9" fill="' + col + '"/><path d="M' + (x - 16) + ' ' + (y + 30) + 'q0-16 16-16q16 0 16 16z" fill="' + col + '"/>';

  /* 1. Kew Gardens-Union Tpke, underground under Queens Blvd: the tile wall, the black sign with the E and F, the E sliding in */
  function kewgardens() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9eef0"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="38" width="12" height="8" fill="' + (x % 24 ? "#7b2d6b" : "#c27bb0") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6dde0"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#5a1f4f"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="kp-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="40" y="58" width="320" height="32" rx="3" fill="#111"/><rect x="40" y="58" width="320" height="3" fill="#fff"/>' +
      '<text x="54" y="80" ' + font + ' font-size="14" fill="#fff">Kew Gardens-Union Tpke</text>' +
      bullet(302, 74, "E", BLUE) + bullet(328, 74, "F", ORANGE) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#5a1f4f"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "E", BLUE) +
        '<rect x="10" y="140" width="276" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      '<g class="kp-bob">' + fade(334, 200, 18, "#1b1b1b") + '</g><g class="kp-bob kp-bob2">' + fade(366, 204, 8, "#262626") + '</g>' +
      txt("QUEENS BLVD", 150, 236, 11, "#f1ead8", 'letter-spacing="3"'));
  }

  /* 2. Bronx High School of Science (Kid, class of '82): the long modern brick-and-glass front, the entrance canopy, an atom orbiting, a boombox on the steps */
  function bxscience() {
    let glass = "";
    for (let x = 30; x < 370; x += 20) glass += '<rect x="' + x + '" y="92" width="16" height="22" fill="#5f8fa8"/><rect x="' + x + '" y="124" width="16" height="22" fill="#5f8fa8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kb)"/>' +
      '<circle cx="60" cy="40" r="16" fill="#fff3b0"/>' +
      /* trees */
      '<circle cx="18" cy="150" r="22" fill="#3f8a4a"/><circle cx="384" cy="146" r="24" fill="#3f8a4a"/>' +
      /* building */
      '<rect x="20" y="70" width="360" height="110" fill="#b9845a"/><rect x="20" y="66" width="360" height="8" fill="#e8e0d0"/>' +
      '<rect x="26" y="88" width="348" height="62" fill="#2f4a5a"/>' + glass +
      '<rect x="20" y="118" width="360" height="4" fill="#e8e0d0"/>' +
      txt("BRONX HIGH SCHOOL OF SCIENCE", 200, 84, 11, "#1d2b36", 'letter-spacing="2"') +
      /* entrance */
      '<rect x="160" y="150" width="80" height="30" fill="#1e2e38"/><rect x="150" y="146" width="100" height="6" fill="#e8e0d0"/>' +
      [170, 190, 210, 230].map(x => '<rect x="' + x + '" y="154" width="2" height="26" fill="#9fb8c8"/>').join("") +
      /* the atom */
      '<g transform="translate(320 36)"><circle r="5" fill="' + PINK + '"/>' +
        '<ellipse rx="26" ry="9" fill="none" stroke="' + TEAL + '" stroke-width="2"/><ellipse rx="26" ry="9" fill="none" stroke="' + TEAL + '" stroke-width="2" transform="rotate(60)"/><ellipse rx="26" ry="9" fill="none" stroke="' + TEAL + '" stroke-width="2" transform="rotate(-60)"/>' +
        '<g class="kp-orb"><circle cx="26" cy="0" r="3.5" fill="' + GOLD + '"/></g><g class="kp-orb kp-orb2"><circle cx="0" cy="-14" r="3.5" fill="' + GOLD + '"/></g></g>' +
      /* steps, lawn, sidewalk */
      '<rect x="0" y="180" width="400" height="80" fill="#8fc46a"/><rect x="150" y="180" width="100" height="16" fill="#cfc8b8"/><rect x="0" y="222" width="400" height="38" fill="#a7a49c"/>' +
      /* boombox on the step with bobbing speakers */
      '<rect x="172" y="168" width="56" height="26" rx="4" fill="#1b1b1b" stroke="#888" stroke-width="2"/><path d="M182 168q18-14 36 0" stroke="#888" stroke-width="3" fill="none"/>' +
      '<circle class="kp-bl" cx="186" cy="181" r="8" fill="#444" stroke="' + PINK + '" stroke-width="2"/><circle class="kp-bl kp-bl2" cx="214" cy="181" r="8" fill="#444" stroke="' + TEAL + '" stroke-width="2"/>' +
      '<g class="kp-car"><rect x="0" y="234" width="46" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="248" r="4" fill="#111"/><circle cx="36" cy="248" r="4" fill="#111"/></g>' +
      txt("THE BRONX · CLASS OF '82", 200, 216, 10, "#21401f", 'letter-spacing="2"'),
      sky("kb", "#7cc4f0", "#d6eefc"));
  }

  /* 3. The School of Visual Arts on E 23rd St (Play studied art there): the brick front, the vertical banner, an easel on the sidewalk with a brush painting two hi-top fades */
  function sva() {
    let wins = "";
    for (let y = 30; y < 150; y += 26) for (let x = 40; x < 240; x += 34) wins += '<rect x="' + x + '" y="' + y + '" width="20" height="16" fill="#2a3346"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ks)"/>' +
      '<rect x="20" y="10" width="240" height="180" fill="#8a4a35"/>' + wins +
      '<rect x="270" y="30" width="110" height="160" fill="#5a5f6a"/>' +
      (() => { let g = ""; for (let y = 40; y < 180; y += 18) for (let x = 280; x < 372; x += 18) g += '<rect class="kp-bl kp-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="10" height="10" fill="#ffd98a" opacity=".7"/>'; return g; })() +
      /* vertical banner */
      '<rect x="236" y="26" width="20" height="120" fill="' + PINK + '"/>' +
      ["S", "V", "A"].map((c, i) => txt(c, 246, 52 + i * 36, 18, "#fff")).join("") +
      /* entrance canopy */
      '<rect x="90" y="150" width="90" height="40" fill="#1d2230"/><rect x="80" y="144" width="110" height="8" fill="#111"/>' +
      txt("SCHOOL OF VISUAL ARTS", 135, 141, 9, CREAM, 'letter-spacing="1"') +
      /* sidewalk + street */
      '<rect x="0" y="190" width="400" height="22" fill="#b8b4aa"/><rect x="0" y="212" width="400" height="48" fill="#4a4c52"/>' +
      '<g class="kp-car"><rect x="0" y="226" width="50" height="16" rx="4" fill="#f6c400"/><rect x="18" y="220" width="14" height="6" fill="#f6c400"/><circle cx="12" cy="242" r="4" fill="#111"/><circle cx="38" cy="242" r="4" fill="#111"/></g>' +
      /* easel + canvas with two hi-top fades */
      '<path d="M300 200l20 -90l20 90M320 110v94" stroke="#8a5a2b" stroke-width="4" fill="none"/>' +
      '<rect x="282" y="104" width="76" height="62" fill="#fffaf0" stroke="#5a3a1a" stroke-width="2"/>' +
      fade(306, 140, 16, "#2a1f3d") + fade(334, 142, 9, "#2a1f3d") +
      '<path d="M290 160h60" stroke="' + TEAL + '" stroke-width="3"/>' +
      '<g class="kp-brush"><path d="M360 120l18 -22" stroke="#c9a24a" stroke-width="4" stroke-linecap="round"/><circle cx="360" cy="121" r="3" fill="' + PINK + '"/></g>' +
      /* paint splats */
      '<circle cx="290" cy="196" r="4" fill="' + PINK + '"/><circle cx="352" cy="198" r="3" fill="' + TEAL + '"/><circle cx="330" cy="204" r="3" fill="' + GOLD + '"/>' +
      txt("E 23 ST · MANHATTAN", 120, 206, 10, "#1d1d1d", 'letter-spacing="2"'),
      sky("ks", "#ffb48a", "#ffe2c2"));
  }

  /* 4. Jamaica Av under the old el, back when the train ran up the avenue (Play was born in Jamaica, Queens): steel el overhead with a train rolling by, storefronts, two kids doing the Kickstep */
  function jamaica() {
    let el = "";
    for (let x = 0; x < 400; x += 20) el += '<path d="M' + x + ' 56l10 14l10 -14" stroke="#4a3b2a" stroke-width="2" fill="none"/>';
    const shop = (x, w, col, awn) => '<rect x="' + x + '" y="110" width="' + w + '" height="90" fill="' + col + '"/><rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="44" fill="#ffe9a8" opacity=".85"/>' +
      '<path d="M' + x + ' 130h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + awn + '"/>';
    const kicker = (x, cls) => '<g>' + '<rect x="' + (x - 6) + '" y="150" width="12" height="14" rx="2" fill="#111"/><circle cx="' + x + '" cy="168" r="7" fill="#111"/>' +
      '<rect x="' + (x - 7) + '" y="176" width="14" height="22" rx="5" fill="#111"/>' +
      '<rect class="kp-leg ' + cls + '" x="' + (x - 5) + '" y="196" width="4" height="20" rx="2" fill="#111"/><rect class="kp-leg ' + (cls ? "" : "kp-leg2") + '" x="' + (x + 1) + '" y="196" width="4" height="20" rx="2" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kj)"/>' +
      /* the el and train */
      '<g class="kp-el"><rect x="0" y="22" width="300" height="28" rx="3" fill="#9aa3ad"/>' +
        [20, 70, 120, 170, 220].map(x => '<rect x="' + x + '" y="28" width="26" height="12" rx="1" fill="#ffe9a8" opacity=".85"/>').join("") +
        bullet(280, 36, "J", "#996633") + '</g>' +
      '<rect x="0" y="50" width="400" height="6" fill="#4a3b2a"/>' + el + '<rect x="0" y="68" width="400" height="5" fill="#4a3b2a"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="73" width="10" height="135" fill="#4a3b2a"/>').join("") +
      /* storefronts */
      shop(10, 110, "#8b5a44", PINK) + shop(130, 120, "#6f6a5e", TEAL) + shop(260, 130, "#7a4f3a", GOLD) +
      txt("RECORDS", 65, 126, 11, "#fff") + txt("SNEAKERS", 190, 126, 11, "#fff") + txt("RADIO", 325, 126, 11, "#fff") +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="26" fill="#a7a49c"/><rect x="0" y="226" width="400" height="34" fill="#4a4c52"/>' +
      kicker(150, "") + kicker(186, "kp-leg2") +
      '<g class="kp-car"><rect x="0" y="236" width="52" height="15" rx="5" fill="#6a8f3c"/><circle cx="12" cy="251" r="4" fill="#111"/><circle cx="40" cy="251" r="4" fill="#111"/></g>' +
      txt("JAMAICA AV · QUEENS", 300, 218, 10, "#1d1d1d", 'letter-spacing="2"'),
      sky("kj", "#f6a85a", "#ffe1a8"));
  }

  /* 5. Queens Blvd & Union Tpke: green street signs, the wall tagged KID 'N PLAY, Queens Borough Hall (red brick, limestone portico, the flag) behind */
  function corner() {
    let wins = "";
    for (let x = 70; x < 340; x += 22) if (x < 170 || x > 230) { wins += '<rect x="' + x + '" y="62" width="10" height="16" fill="#ffe9a8" opacity=".8" class="kp-bl kp-bl' + (x % 3 + 1) + '"/><rect x="' + x + '" y="88" width="10" height="16" fill="#ffe9a8" opacity=".8"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#kc)"/>' + stars(14) +
      /* Borough Hall */
      '<rect x="56" y="50" width="288" height="80" fill="#9b4a34"/><rect x="56" y="46" width="288" height="6" fill="#e8dcc0"/>' + wins +
      '<rect x="166" y="40" width="68" height="90" fill="#e8dcc0"/><path d="M160 40h80l-40 -18z" fill="#e8dcc0"/>' +
      [174, 190, 206, 222].map(x => '<rect x="' + x + '" y="52" width="6" height="78" fill="#cfc2a4"/>').join("") +
      '<rect x="199" y="2" width="2" height="22" fill="#ddd"/><g class="kp-flag"><rect x="201" y="3" width="18" height="11" fill="#c8102e"/><rect x="201" y="3" width="8" height="6" fill="#0a3161"/><path d="M209 6h10M201 11h18" stroke="#fff" stroke-width="1.4"/></g>' +
      txt("QUEENS BOROUGH HALL", 96, 36, 9, CREAM, 'letter-spacing="1"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#2d2f4a"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#262840" stroke-width="1"/>'; return b; })() +
      tag("KID 'N PLAY", 14, 194, 44, PINK, -5) + tag("2 HYPE", 238, 218, 22, TEAL, -4) + tag("INVINCIBLES", 24, 222, 15, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="kp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="290" y="66" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Queens Blvd", 343, 82, 12, "#fff") +
      '<rect x="290" y="92" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Union Tpke", 343, 108, 12, "#fff") +
      '<circle class="kp-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("kc", "#0c0a1f", "#3a2a5a"));
  }

  window.SCENES = { kewgardens: kewgardens, bxscience: bxscience, sva: sva, jamaica: jamaica, corner: corner };
})();
