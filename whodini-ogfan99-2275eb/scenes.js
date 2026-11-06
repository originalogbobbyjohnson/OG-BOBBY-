/* Whodini game (NYC map, Brooklyn: Boerum Hill, by the Gowanus Houses and Wyckoff Gardens where Jalil and Ecstasy came up).
   The A/C/G down at Hoyt-Schermerhorn, Disco Fever in the Bronx (where Jalil met producer Larry Smith), London '82 (Jive signed them, Magic's Wand),
   the Fresh Fest '84 arena stage (first big rap arena tour, breakers on the floor), and Hoyt St & Baltic St with the Gowanus Houses behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wdcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.wd-car{animation:wdcars 7s linear infinite}.wd-car2{animation-delay:-3.5s}' +
    '@keyframes wdblink{0%,100%{opacity:.25}50%{opacity:1}}.wd-bl{animation:wdblink 1.6s ease-in-out infinite}.wd-bl2{animation-delay:.5s}.wd-bl3{animation-delay:1s}' +
    '@keyframes wdflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.wd-flk{animation:wdflick 2.4s infinite}' +
    '@keyframes wdel{from{transform:translateX(420px)}to{transform:translateX(-360px)}}.wd-el{animation:wdel 6s linear infinite}' +
    '@keyframes wdrain{from{transform:translateY(-30px)}to{transform:translateY(30px)}}.wd-rain{animation:wdrain .7s linear infinite}' +
    '@keyframes wdspark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.wd-spk{transform-box:fill-box;transform-origin:50% 50%;animation:wdspark 1.4s ease-in-out infinite}.wd-spk2{animation-delay:.45s}.wd-spk3{animation-delay:.9s}' +
    '@keyframes wdmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.wd-mt{transform-box:fill-box;transform-origin:50% 100%;animation:wdmeter .6s ease-in-out infinite}.wd-mt2{animation-delay:.2s}.wd-mt3{animation-delay:.4s}' +
    '@keyframes wdspin{to{transform:rotate(360deg)}}.wd-spin{transform-box:fill-box;transform-origin:50% 50%;animation:wdspin 1.2s linear infinite}.wd-spin2{animation-duration:.9s}' +
    '@keyframes wdsweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.wd-beam{transform-box:fill-box;transform-origin:50% 0%;animation:wdsweep 3s ease-in-out infinite}.wd-beam2{animation-delay:-1.5s}' +
    '@keyframes wdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.wd-bob{animation:wdbob .5s ease-in-out infinite}.wd-bob2{animation-delay:.25s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e9c46a", RED = "#e63946", CREAM = "#f4ead8", BLUE = "#0039a6", GGREEN = "#6cbe45";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a little silhouette person (no face): head + body */
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Hoyt-Schermerhorn Sts, underground: cream tile wall with the mosaic band, the black sign with the A, C and G, the A train sliding in */
  function hoyt() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe8d6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="38" width="8" height="8" fill="' + (x % 32 ? "#2f6e5a" : "#c9a24a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d9d0bc"/>' + tiles +
      '<rect x="0" y="34" width="400" height="16" fill="#1f4a3c"/>' + band +
      /* ceiling + lights */
      '<rect x="0" y="0" width="400" height="30" fill="#2b2b2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="wd-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      /* sign */
      '<rect x="40" y="58" width="320" height="32" rx="3" fill="#111"/><rect x="40" y="58" width="320" height="3" fill="#fff"/>' +
      '<text x="54" y="80" ' + font + ' font-size="14" fill="#fff">Hoyt-Schermerhorn Sts</text>' +
      bullet(276, 74, "A", BLUE) + bullet(302, 74, "C", BLUE) + bullet(328, 74, "G", GGREEN) +
      /* columns */
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#355a8a"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "A", BLUE) +
        '<rect x="10" y="140" width="280" height="4" fill="' + BLUE + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(330, 196, "#1b1b1b") + person(352, 200, "#2a2a2a") +
      txt("DOWNTOWN BROOKLYN", 140, 236, 11, "#f1ead8", 'letter-spacing="3"'));
  }

  /* 2. Disco Fever on Jerome Av in the Bronx, under the el: brick front, the neon script sign, mirror-ball glow in the window, the line outside, the 4 train rolling over */
  function fever() {
    let brick = "";
    for (let y = 96; y < 206; y += 8) for (let x = (y / 8) % 2 ? 40 : 32; x < 368; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#6e2a20"/>';
    let el = "";
    for (let x = 0; x < 400; x += 20) el += '<path d="M' + x + ' 40l10 12l10 -12" stroke="#2f4a3a" stroke-width="2" fill="none"/>';
    const line = [80, 100, 120, 140].map((x, i) => person(x, 186, i % 2 ? "#181818" : "#232323", i % 2 ? "wd-bob" : "wd-bob wd-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wf)"/>' + stars(10) +
      /* the el */
      '<g class="wd-el"><rect x="0" y="12" width="300" height="24" rx="3" fill="#b9bec6"/>' +
        [20, 70, 120, 170, 220].map(x => '<rect x="' + x + '" y="17" width="26" height="10" rx="1" fill="#ffe9a8" opacity=".85"/>').join("") +
        bullet(280, 24, "4", "#00933c") + '</g>' +
      '<rect x="0" y="36" width="400" height="6" fill="#2f4a3a"/>' + el + '<rect x="0" y="52" width="400" height="4" fill="#2f4a3a"/>' +
      [30, 200, 370].map(x => '<rect x="' + (x - 5) + '" y="56" width="10" height="150" fill="#2f4a3a"/>').join("") +
      /* club */
      '<rect x="32" y="90" width="336" height="116" fill="#7f3426"/>' + brick +
      '<rect x="32" y="88" width="336" height="6" fill="#3a1812"/>' +
      /* neon sign */
      '<rect x="96" y="100" width="208" height="38" rx="8" fill="#14070f" stroke="#ff4fa3" stroke-width="2"/>' +
      '<text class="wd-flk" x="200" y="128" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-weight="700" font-size="26" fill="#ff79c0" stroke="#ff4fa3" stroke-width=".6">Disco Fever</text>' +
      /* window with mirror ball glow */
      '<rect x="250" y="146" width="80" height="46" fill="#1d0f2c" stroke="#3a1812" stroke-width="3"/>' +
      '<circle cx="290" cy="164" r="10" fill="#c9ced6"/><path d="M280 164h20M290 154v20M283 157l14 14M297 157l-14 14" stroke="#7a7f88" stroke-width="1"/>' +
      '<circle class="wd-spk" cx="262" cy="182" r="2.5" fill="#fff"/><circle class="wd-spk wd-spk2" cx="318" cy="178" r="2.5" fill="#8ecae6"/><circle class="wd-spk wd-spk3" cx="300" cy="186" r="2.5" fill="#ff79c0"/>' +
      /* door + rope */
      '<rect x="164" y="146" width="40" height="60" fill="#120a0a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M72 196q30 10 60 0" stroke="#b3122b" stroke-width="3" fill="none"/><rect x="70" y="190" width="4" height="16" fill="' + GOLD + '"/><rect x="130" y="190" width="4" height="16" fill="' + GOLD + '"/>' +
      line +
      '<rect x="0" y="206" width="400" height="54" fill="#45474c"/><rect x="0" y="206" width="400" height="4" fill="#77797d"/>' +
      '<g class="wd-car"><rect x="0" y="230" width="46" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      txt("JEROME AV · THE BRONX", 200, 224, 10, "#e8e3d8", 'letter-spacing="3"'),
      sky("wf", "#0b0820", "#3a1f4d"));
  }

  /* 3. London '82: the Elizabeth Tower clock in the fog over the river, rain, a red phone box, and the studio window where Magic's Wand got made */
  function london() {
    let rain = "";
    for (let i = 0; i < 40; i++) rain += '<path d="M' + ((i * 53) % 400) + ' ' + ((i * 37) % 200) + 'l-4 12" stroke="#c9d6e6" stroke-width="1" opacity=".5"/>';
    let meters = "";
    for (let i = 0; i < 8; i++) meters += '<rect class="wd-mt wd-mt' + (i % 3 + 1) + '" x="' + (232 + i * 14) + '" y="160" width="8" height="26" fill="' + (i % 3 ? "#6cbe45" : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wl)"/>' +
      /* the clock tower */
      '<rect x="56" y="70" width="44" height="130" fill="#8c7a52"/><path d="M52 70h52l-26 -44z" fill="#6c5c3a"/><path d="M78 26v-14" stroke="#6c5c3a" stroke-width="3"/>' +
      '<rect x="60" y="80" width="36" height="36" fill="#a8946a"/><circle cx="78" cy="98" r="14" fill="#f4ead8" stroke="#3a3122" stroke-width="2"/>' +
      '<path d="M78 98v-9M78 98l6 4" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      [124, 140, 156, 172, 188].map(y => '<path d="M60 ' + y + 'h36" stroke="#6c5c3a" stroke-width="2"/>').join("") +
      '<rect x="100" y="150" width="120" height="50" fill="#7d6c48"/>' + [110, 130, 150, 170, 190, 206].map(x => '<rect x="' + x + '" y="158" width="6" height="34" fill="#5d5034"/>').join("") +
      /* fog + river */
      '<rect x="0" y="140" width="400" height="30" fill="#c9d1d9" opacity=".25"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3e5468"/><path d="M0 214q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7d93a8" stroke-width="2" fill="none" opacity=".6"/>' +
      /* studio window, lit, with the desk meters */
      '<rect x="222" y="120" width="132" height="76" fill="#1a1712" stroke="#4a3e2a" stroke-width="4"/>' +
      '<rect x="228" y="152" width="120" height="38" fill="#2a2620"/>' + meters +
      txt("STUDIO", 288, 140, 11, GOLD, 'letter-spacing="3"') +
      /* the phone box */
      '<rect x="20" y="150" width="30" height="58" rx="3" fill="#c8102e"/><rect x="24" y="162" width="22" height="30" fill="#f2e6b8" opacity=".85"/>' +
      '<path d="M24 172h22M24 182h22M35 162v30" stroke="#c8102e" stroke-width="1.5"/><rect x="18" y="146" width="34" height="6" rx="2" fill="#a00d24"/>' +
      /* the wand, sparkling */
      '<path d="M300 92l40 -40" stroke="#111" stroke-width="5" stroke-linecap="round"/><path d="M334 58l6 -6" stroke="#fff" stroke-width="5" stroke-linecap="round"/>' +
      '<path class="wd-spk" d="M346 40l3 8l8 3l-8 3l-3 8l-3 -8l-8 -3l8 -3z" fill="' + GOLD + '"/>' +
      '<circle class="wd-spk wd-spk2" cx="362" cy="62" r="3" fill="#fff"/><circle class="wd-spk wd-spk3" cx="330" cy="30" r="3" fill="#fff"/>' +
      '<g class="wd-rain">' + rain + '</g>' +
      tag("MAGIC'S WAND", 130, 248, 22, GOLD, -3) + txt("LONDON '82", 290, 110, 12, CREAM, 'letter-spacing="2"'),
      sky("wl", "#56606d", "#a7afb8"));
  }

  /* 4. Fresh Fest '84: the arena stage, truss lights sweeping, the decks spinning, breakers on the floor, the crowd jumping */
  function freshfest() {
    const crowd = [];
    for (let x = 10; x < 400; x += 22) crowd.push('<g class="wd-bob' + (x % 44 ? " wd-bob2" : "") + '"><circle cx="' + x + '" cy="236" r="8" fill="#0d0d12"/><rect x="' + (x - 9) + '" y="244" width="18" height="20" rx="6" fill="#0d0d12"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#wa)"/>' +
      /* beams */
      '<g class="wd-beam"><path d="M90 30l-40 170h80z" fill="#fff6c2" opacity=".14"/></g><g class="wd-beam wd-beam2"><path d="M310 30l-40 170h80z" fill="#8ecae6" opacity=".14"/></g>' +
      /* truss */
      '<rect x="20" y="22" width="360" height="10" fill="#3a3a44"/>' + [40, 90, 140, 200, 260, 310, 360].map((x, i) => '<circle class="wd-bl wd-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="36" r="5" fill="' + [GOLD, RED, "#8ecae6"][i % 3] + '"/>').join("") +
      /* banner */
      '<rect x="110" y="46" width="180" height="34" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      txt("FRESH FEST '84", 200, 70, 18, GOLD, 'letter-spacing="2"') +
      /* stage */
      '<rect x="20" y="150" width="360" height="24" fill="#26262e"/><rect x="20" y="146" width="360" height="6" fill="' + RED + '"/>' +
      /* DJ table + decks */
      '<rect x="150" y="116" width="100" height="32" fill="#1a1a20" stroke="#555" stroke-width="2"/>' +
      '<g class="wd-spin"><circle cx="174" cy="124" r="10" fill="#111" stroke="#666"/><circle cx="174" cy="124" r="3" fill="' + RED + '"/><rect x="173" y="114" width="2" height="5" fill="#888"/></g>' +
      '<g class="wd-spin wd-spin2"><circle cx="226" cy="124" r="10" fill="#111" stroke="#666"/><circle cx="226" cy="124" r="3" fill="' + GOLD + '"/><rect x="225" y="114" width="2" height="5" fill="#888"/></g>' +
      /* two MCs (silhouettes, one in the wide-brim hat) with mics */
      '<g><circle cx="96" cy="108" r="9" fill="#0b0b0f"/><path d="M80 102h32" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/><path d="M88 99q8-10 16 0z" fill="#0b0b0f"/><rect x="86" y="118" width="20" height="30" rx="7" fill="#0b0b0f"/><path d="M106 124l10 -12" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g><circle cx="304" cy="108" r="9" fill="#0b0b0f"/><rect x="294" y="118" width="20" height="30" rx="7" fill="#0b0b0f"/><path d="M294 124l-10 -12" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      /* breakers on the cardboard */
      '<rect x="100" y="190" width="200" height="20" fill="#b08a5a"/>' +
      '<g class="wd-spin" style="animation-duration:1.6s"><g><circle cx="150" cy="190" r="6" fill="#0b0b0f"/><path d="M150 196v-24M150 186l-12 -6M150 186l12 -6M150 172l-6 -10M150 172l6 -10" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g></g>' +
      '<g class="wd-spin" style="animation-duration:1.1s"><g><circle cx="250" cy="196" r="6" fill="#0b0b0f"/><path d="M236 194h28M250 194l-10 10M250 194l10 10" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g></g>' +
      crowd.join(""),
      sky("wa", "#07060c", "#2b1636"));
  }

  /* 5. Hoyt St & Baltic St: green street signs, the wall tagged WHODINI, the Gowanus Houses towers behind */
  function corner() {
    const tower = (x, y, w) => { let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#7a3a2c"/>';
      for (let yy = y + 8; yy < 140; yy += 12) for (let xx = x + 6; xx < x + w - 8; xx += 12) g += '<rect class="wd-bl wd-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="6" height="7" fill="#ffd98a" opacity=".75"/>'; return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#wc)"/>' + stars(16).replace(/cy="(1[0-9]|2[0-9]|3[0-4])(\.[0-9]+)?"/g, 'cy="6"') +
      tower(20, 40, 70) + tower(110, 60, 64) + tower(196, 30, 74) + tower(292, 52, 70) +
      txt("GOWANUS HOUSES", 233, 26, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("WHODINI", 18, 196, 50, GOLD, -5) + tag("ONE LOVE", 210, 218, 20, RED, -4) + tag("FRESH FEST", 26, 222, 15, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="wd-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Hoyt St", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Baltic St", 348, 108, 12, "#fff") +
      '<circle class="wd-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("wc", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { hoyt: hoyt, fever: fever, london: london, freshfest: freshfest, corner: corner };
})();
