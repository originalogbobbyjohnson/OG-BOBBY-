/* Pop Smoke game (NYC map, Brooklyn: Canarsie). The L at its last stop, Canarsie–Rockaway Pkwy (at grade, open air, bumper blocks),
   the Seaview Park courts where he hooped and where Pop Smoke Day is held, the Flatlands Avenue ride from the "Welcome to the Party" video
   (the jerk spot smoking, the barber pole spinning), the pizza shop on Avenue L where the crew hung out, and E 92 St & Flatlands Av
   (his O92 block) with Jamaica Bay, the Canarsie Pier pavilions and the moon behind (Shoot for the Stars, Aim for the Moon).
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}.flk2{animation-delay:.8s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2s ease-in-out infinite}.tw2{animation-delay:-.7s}.tw3{animation-delay:-1.4s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-36px)}}.ball{animation:bounce .9s ease-in infinite alternate}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-150px);opacity:0}}.rise{animation:rise 6s linear infinite}.r2{animation-delay:-1.5s}.r3{animation-delay:-3s}.r4{animation-delay:-4.5s}' +
    '@keyframes puff{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(10px,-60px) scale(1.6);opacity:0}}.puff{transform-box:fill-box;transform-origin:50% 50%;animation:puff 2.6s ease-out infinite}.p2{animation-delay:-.9s}.p3{animation-delay:-1.8s}' +
    '@keyframes pole{from{transform:translateY(0)}to{transform:translateY(-12px)}}.pole{animation:pole .6s linear infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-34px);opacity:0}}.note{animation:note 1.6s ease-out infinite}.n2{animation-delay:-.55s}.n3{animation-delay:-1.1s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}.wave{animation:wave 3s ease-in-out infinite}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-22px);opacity:0}}.steam{animation:steam 2s ease-out infinite}.s2{animation-delay:-.7s}.s3{animation-delay:-1.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw tw' + (i % 3 + 1) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, h = cap height */
  const nine = (x, y, h, c) => { const r = h * 0.26, w = h * 0.15; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - h + r + w / 2) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - h + r + w / 2) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const L = "#a7a9ac", ICE = "#8fd3ff", ROSE = "#ff4f7b", GRAY = "#cfd6dd", GOLD = "#f4c95d", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. The L at the end of the line, Canarsie–Rockaway Pkwy: an open-air, at-grade terminal. Island platform under a long canopy on
        dark green columns, the black sign with the gray L, the stainless train rolling in, red bumper blocks at the end of the track */
  function station() {
    let win = "";
    for (let x = 22; x < 290; x += 34) win += '<rect x="' + x + '" y="128" width="22" height="20" rx="2" fill="#24384d"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 70) cols += '<rect x="' + x + '" y="66" width="6" height="110" fill="#2f5a3c"/><path d="M' + (x - 8) + ' 70l11 -6 11 6" stroke="#2f5a3c" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#st1)"/>' + stars(10) +
      /* low Canarsie houses and the station house beyond */
      '<path d="M0 118h40v-14l14-10 14 10v14h30v-20h44v20h36v-12l16-12 16 12v12h40v-18h50v18h40v-16l14-10 14 10v16h32v60H0z" fill="#2a2440"/>' +
      [52, 112, 214, 300, 360].map(x => '<rect class="tw tw' + (x % 3 + 1) + '" x="' + x + '" y="108" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* canopy */
      '<rect x="0" y="56" width="400" height="12" fill="#5d6670"/><rect x="0" y="66" width="400" height="3" fill="#3b424a"/>' + cols +
      '<rect class="flk" x="70" y="70" width="34" height="3" fill="#fffbe6"/><rect class="flk flk2" x="250" y="70" width="34" height="3" fill="#fffbe6"/>' +
      /* black hanging sign */
      '<rect x="96" y="76" width="210" height="22" rx="2" fill="#111"/><rect x="96" y="76" width="210" height="2.5" fill="#fff"/>' +
      '<text x="106" y="92" ' + font + ' font-size="12" fill="#fff">Canarsie–Rockaway Pkwy</text>' + bullet(292, 87, "L", L, false, 8) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="4" y="114" width="300" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<path d="M4 154h300" stroke="#8a929c" stroke-width="3"/><path d="M60 116v58M150 116v58M240 116v58" stroke="#9aa1aa" stroke-width="1.5"/>' +
        '<rect x="284" y="124" width="16" height="24" rx="2" fill="#24384d"/>' + bullet(292, 163, "L", L, false, 8) +
        '<circle cx="298" cy="170" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* bumper block at the end of the line */
      '<rect x="356" y="152" width="30" height="24" fill="#c0392b"/><path d="M356 160h30M356 168h30" stroke="#f4d03f" stroke-width="3"/><circle class="flk" cx="371" cy="146" r="4" fill="#ff3b3b"/>' +
      /* platform */
      '<rect x="0" y="176" width="400" height="9" fill="#eab308"/><rect x="0" y="185" width="400" height="75" fill="#8d8f8c"/>' +
      '<path d="M0 214h400M0 240h400" stroke="#7a7c79" stroke-width="2"/>' +
      person(60, 246, "#1d2633") + person(208, 250, "#3a2a24") + person(228, 252, "#22303d") +
      tag("LAST STOP", 270, 238, 16, ICE, -3),
      sky("st1", "#1b1a3a", "#6a4a7a"));
  }

  /* 2. Seaview Park: the basketball courts where he hooped as a kid, chain-link fence, trees, a ball bouncing,
        and the balloons from Pop Smoke Day (held here every July for his birthday) floating up */
  function seaview() {
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 128v62" stroke="#9aa3ab" stroke-width="1"/>';
    const balloon = (x, y, c, cls) => '<g class="rise ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="11" fill="' + c + '"/><path d="M' + x + ' ' + (y + 11) + 'q-3 10 2 22" stroke="#eee" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv1)"/>' +
      '<circle cx="330" cy="62" r="26" fill="#ffd27a" opacity=".85"/>' +
      /* trees */
      [20, 80, 150, 240, 320, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (104 - (i % 2) * 8) + '" r="' + (28 + (i % 3) * 4) + '" fill="#2f6b3e"/>').join("") +
      '<rect x="0" y="118" width="400" height="12" fill="#2a5a35"/>' +
      /* fence */
      '<path d="M0 128h400M0 190h400" stroke="#c9ced6" stroke-width="2"/>' + fence +
      /* banner on the fence */
      '<rect x="128" y="134" width="144" height="26" fill="#14141c" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="152" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">POP SMOKE DAY</text>' +
      /* court */
      '<path d="M0 190h400v70H0z" fill="#3f6fa8"/><path d="M0 200h400" stroke="#fff" stroke-width="2"/><path d="M120 260q80-60 160 0" stroke="#fff" stroke-width="2" fill="none"/>' +
      '<rect x="36" y="150" width="5" height="70" fill="#d7dde3"/><rect x="20" y="140" width="40" height="26" fill="#f4f4f4" stroke="#999"/><rect x="31" y="150" width="18" height="12" fill="none" stroke="' + ROSE + '" stroke-width="2"/><ellipse cx="40" cy="168" rx="9" ry="3" fill="none" stroke="' + ROSE + '" stroke-width="2"/>' +
      '<rect x="359" y="150" width="5" height="70" fill="#d7dde3"/><rect x="342" y="140" width="40" height="26" fill="#f4f4f4" stroke="#999"/><rect x="353" y="150" width="18" height="12" fill="none" stroke="' + ROSE + '" stroke-width="2"/><ellipse cx="362" cy="168" rx="9" ry="3" fill="none" stroke="' + ROSE + '" stroke-width="2"/>' +
      '<g class="ball"><circle cx="250" cy="236" r="7" fill="#e07a2e"/><path d="M243 236h14M250 229v14" stroke="#7a3a10" stroke-width="1"/></g>' +
      person(226, 254, "#1b1f2a") + person(282, 252, "#2a1f1a") + person(150, 250, "#3a2a50") +
      balloon(90, 120, ICE, "") + balloon(112, 128, GOLD, "r2") + balloon(300, 118, ROSE, "r3") + balloon(318, 130, GRAY, "r4") + balloon(200, 112, ICE, "r3"),
      sky("sv1", "#f08a5d", "#ffd6a0"));
  }

  /* 3. The ride down Flatlands Avenue from the "Welcome to the Party" video: one-story storefronts at night, the jerk spot's drum grill
        smoking, a spinning barber pole, a black SUV cruising with the music bouncing out of it */
  function flatlands() {
    const shop = (x, w, awn, txt, tc) => '<rect x="' + x + '" y="92" width="' + w + '" height="104" fill="#3b3346"/><rect x="' + (x + 8) + '" y="136" width="' + (w - 16) + '" height="44" fill="#ffe7a8" opacity=".85"/>' +
      '<path d="M' + x + ' 116h' + w + 'l-6 16H' + (x + 6) + 'z" fill="' + awn + '"/><rect x="' + x + '" y="98" width="' + w + '" height="18" fill="#141414"/><text x="' + (x + w / 2) + '" y="111" text-anchor="middle" ' + font + ' font-size="10" fill="' + tc + '" letter-spacing="1">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#fl1)"/>' + stars(16) +
      '<rect x="0" y="70" width="400" height="22" fill="#2a2338"/>' +
      shop(0, 120, "#0b8a3e", "JERK CHICKEN", GOLD) + shop(124, 100, "#1f3b73", "MARKET", "#fff") + shop(228, 90, "#7a1f2b", "BARBER", "#fff") + shop(322, 78, "#444", "PHONES", ICE) +
      /* stripe on the jerk spot awning: green, gold, black */
      '<path d="M0 116h120" stroke="' + GOLD + '" stroke-width="3"/>' +
      /* barber pole */
      '<rect x="300" y="138" width="12" height="40" rx="5" fill="#fff"/><clipPath id="bp"><rect x="300" y="138" width="12" height="40" rx="5"/></clipPath>' +
      '<g clip-path="url(#bp)"><g class="pole">' + (() => { let s = ""; for (let y = 132; y < 196; y += 12) s += '<path d="M298 ' + y + 'l16 8v5l-16-8z" fill="#d7263d"/><path d="M298 ' + (y + 6) + 'l16 8v3l-16-8z" fill="#1f3b73"/>'; return s; })() + '</g></g>' +
      /* sidewalk + street */
      '<rect x="0" y="196" width="400" height="18" fill="#7d7f84"/><rect x="0" y="214" width="400" height="46" fill="#3c3e44"/><path d="M0 238h400" stroke="#f4d03f" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* drum grill smoking on the sidewalk */
      '<rect x="40" y="200" width="40" height="18" rx="9" fill="#2b2b2b"/><path d="M44 218l-4 8M76 218l4 8" stroke="#2b2b2b" stroke-width="3"/>' +
      '<circle class="puff" cx="52" cy="194" r="8" fill="#d9d4cc"/><circle class="puff p2" cx="62" cy="194" r="8" fill="#d9d4cc"/><circle class="puff p3" cx="70" cy="194" r="8" fill="#d9d4cc"/>' +
      person(150, 214, "#1b1f2a") + person(170, 214, "#2a1f1a") +
      /* the SUV cruising */
      '<g class="car"><path d="M0 248v-18l10-12h52l14 12h8v18z" fill="#111"/><rect x="14" y="221" width="22" height="9" fill="#2c3a4a"/><rect x="40" y="221" width="20" height="9" fill="#2c3a4a"/>' +
        '<circle cx="18" cy="249" r="6" fill="#333" stroke="' + GRAY + '" stroke-width="2"/><circle cx="66" cy="249" r="6" fill="#333" stroke="' + GRAY + '" stroke-width="2"/>' +
        '<text class="note" x="30" y="214" ' + font + ' font-size="12" fill="' + ICE + '">♪</text><text class="note n2" x="46" y="212" ' + font + ' font-size="12" fill="' + ROSE + '">♫</text><text class="note n3" x="58" y="214" ' + font + ' font-size="12" fill="' + GOLD + '">♪</text></g>',
      sky("fl1", "#0c0b1e", "#3a2a55"));
  }

  /* 4. The pizza shop on Avenue L where the crew hung out: big front window, pies on the counter steaming,
        the neon slice blinking, a rolled-up shutter, the crew out front */
  function avenuel() {
    return svg(
      '<rect width="400" height="260" fill="url(#av1)"/>' +
      /* building */
      '<rect x="20" y="40" width="360" height="170" fill="#8b4a36"/>' +
      (() => { let b = ""; for (let y = 46; y < 100; y += 6) b += '<path d="M20 ' + y + 'h360" stroke="#7a3e2c" stroke-width="1"/>'; return b; })() +
      [50, 130, 250, 330].map(x => '<rect x="' + x + '" y="52" width="26" height="34" fill="#3a3550"/><rect x="' + x + '" y="52" width="26" height="34" fill="none" stroke="#d8ccb0" stroke-width="2"/>').join("") +
      /* sign band */
      '<rect x="20" y="96" width="360" height="30" fill="#1a1a1a"/>' +
      '<text class="flk" x="200" y="118" text-anchor="middle" ' + font + ' font-size="20" fill="#ff5a3c" letter-spacing="6">PIZZA</text>' +
      /* neon slice */
      '<g class="flk flk2"><path d="M300 102l26 4-16 16z" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><circle cx="310" cy="108" r="2" fill="#ff5a3c"/><circle cx="318" cy="110" r="2" fill="#ff5a3c"/></g>' +
      '<g class="flk"><path d="M74 102l26 4-16 16z" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><circle cx="84" cy="108" r="2" fill="#ff5a3c"/><circle cx="92" cy="110" r="2" fill="#ff5a3c"/></g>' +
      /* storefront window */
      '<rect x="40" y="132" width="230" height="70" fill="#ffe2a8"/><rect x="40" y="132" width="230" height="70" fill="none" stroke="#c9ced6" stroke-width="3"/>' +
      '<rect x="40" y="176" width="230" height="26" fill="#c9ced6"/>' +
      [80, 150, 220].map(x => '<circle cx="' + x + '" cy="172" r="20" fill="#e8a33a"/><circle cx="' + x + '" cy="172" r="15" fill="#d9472b"/><circle cx="' + (x - 6) + '" cy="168" r="3" fill="#f6e2a0"/><circle cx="' + (x + 5) + '" cy="175" r="3" fill="#f6e2a0"/>' +
        '<path class="steam s' + (x % 3 + 1) + '" d="M' + (x - 4) + ' 150q4-6 0-12q-4-6 0-12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>').join("") +
      /* door + rolled-up shutter */
      '<rect x="286" y="132" width="70" height="78" fill="#2a2a2a"/><rect x="286" y="128" width="70" height="10" fill="#9aa1a8"/><rect x="296" y="142" width="50" height="68" fill="#ffe2a8" opacity=".6"/>' +
      tag("WOO", 296, 196, 22, ICE, -8) +
      /* sidewalk */
      '<rect x="0" y="210" width="400" height="50" fill="#7d7f84"/><rect x="0" y="210" width="400" height="4" fill="#a3a5a9"/>' +
      person(90, 248, "#1b1f2a") + person(112, 250, "#2a1f1a") + person(370, 248, "#22303d") +
      '<g class="car car2"><rect x="0" y="244" width="46" height="13" rx="4" fill="' + ROSE + '"/><circle cx="10" cy="257" r="4" fill="#111"/><circle cx="36" cy="257" r="4" fill="#111"/></g>',
      sky("av1", "#141432", "#2d3a62"));
  }

  /* 5. E 92 St and Flatlands Av, his O92 block: green signs, the brick wall tagged POP SMOKE, and past the rooftops Jamaica Bay with the
        Canarsie Pier pavilions under the moon and the stars (Shoot for the Stars, Aim for the Moon) */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(22) +
      '<circle cx="300" cy="50" r="22" fill="#f6f1d8"/><circle cx="310" cy="44" r="20" fill="#0c1022"/>' +
      '<path class="tw" d="M262 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="' + GOLD + '"/>' +
      /* Jamaica Bay + the pier pavilions */
      '<rect x="0" y="104" width="400" height="30" fill="#14284a"/>' +
      '<path class="wave" d="M0 116q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#3a5f8f" stroke-width="2" fill="none"/>' +
      '<rect x="150" y="108" width="140" height="6" fill="#9aa1a8"/>' +
      [160, 196, 232, 268].map(x => '<path d="M' + x + ' 108l14-14 14 14z" fill="#eef1f4"/><path d="M' + (x + 14) + ' 94v-4" stroke="#eef1f4" stroke-width="1.5"/>').join("") +
      [150, 290].map(x => '<rect x="' + x + '" y="92" width="2" height="16" fill="#9aa1a8"/><circle class="flk" cx="' + (x + 1) + '" cy="92" r="2.5" fill="#fff6c2"/>').join("") +
      /* rooftops */
      '<path d="M0 134h60v-10l20-12 20 12v10h50v-14h60v14h40v-8l18-12 18 12v8h50v-12h64v74H0z" fill="#2a2440"/>' +
      [20, 120, 230, 330].map(x => '<rect class="tw tw' + (x % 3 + 1) + '" x="' + x + '" y="140" width="8" height="9" fill="#ffd98a"/>').join("") +
      /* tag wall */
      '<rect x="0" y="156" width="260" height="72" fill="#8b4a36"/>' +
      (() => { let b = ""; for (let y = 162; y < 228; y += 7) b += '<path d="M0 ' + y + 'h260" stroke="#7a3e2c" stroke-width="1"/>'; return b; })() +
      tag("POP SMOKE", 10, 208, 40, ICE, -5) + tag("WOO", 196, 222, 18, ROSE, -4) + tag("MEET THE WOO", 20, 224, 12, "#fff", -3) +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="46" height="13" rx="4" fill="#111"/><circle cx="10" cy="253" r="4" fill="#333"/><circle cx="36" cy="253" r="4" fill="#333"/></g>' +
      /* sign pole */
      '<rect x="370" y="60" width="5" height="168" fill="#3d4b3f"/><circle class="flk" cx="372" cy="60" r="4" fill="#fff6c2"/>' +
      blade(282, 120, 116, "Flatlands Av") +
      '<rect x="306" y="144" width="92" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="317" y="158.5" ' + font + ' font-size="12" fill="#fff">E</text>' + nine(330, 158.5, 9, "#fff") + '<text x="338" y="158.5" ' + font + ' font-size="12" fill="#fff">2 St</text>',
      sky("c5", "#0c1022", "#26365e"));
  }

  window.SCENES = { station: station, seaview: seaview, flatlands: flatlands, avenuel: avenuel, corner: corner };
})();
