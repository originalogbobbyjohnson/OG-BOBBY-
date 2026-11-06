/* Chiddy Bang game (REGIONS tab: Philadelphia; University City, where Chiddy and Xaphoon Jones met as Drexel students in 2008).
   34th St on SEPTA's Market-Frankford Line (underground under Market St), Drexel's Main Building on Chestnut St (buff brick, terra cotta, the arched entrance)
   with Mario the Magnificent, the bronze dragon, the dorm-room studio where The Swelly Express mixtape got made, 30th Street Station's grand concourse,
   and 33rd St & Market St with the glass Cira Centre and the FMC Tower behind. 400 x 260 SVGs. Classes prefixed cb-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.cb-flk{animation:cbflick 2.4s infinite}' +
    '@keyframes cbblink{0%,100%{opacity:.25}50%{opacity:1}}.cb-bl{animation:cbblink 1.6s ease-in-out infinite}.cb-bl2{animation-delay:.5s}.cb-bl3{animation-delay:1s}' +
    '@keyframes cbcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.cb-car{animation:cbcar 7s linear infinite}.cb-car2{animation-delay:-3.5s}' +
    '@keyframes cbwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.cb-wv{transform-box:fill-box;transform-origin:50% 50%;animation:cbwave .7s ease-in-out infinite}.cb-wv2{animation-delay:.2s}.cb-wv3{animation-delay:.4s}' +
    '@keyframes cbtail{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.cb-tail{transform-box:fill-box;transform-origin:0% 50%;animation:cbtail 2.2s ease-in-out infinite}' +
    '@keyframes cbwing{0%,100%{transform:rotate(0)}50%{transform:rotate(-10deg)}}.cb-wing{transform-box:fill-box;transform-origin:20% 100%;animation:cbwing 1.8s ease-in-out infinite}' +
    '@keyframes cbwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.cb-walk{animation:cbwalk 14s linear infinite}.cb-walk2{animation-delay:-7s}' +
    '@keyframes cbsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-22px);opacity:0}}.cb-stm{animation:cbsteam 2.2s ease-out infinite}.cb-stm2{animation-delay:-1.1s}' +
    '@keyframes cbspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-18px);opacity:0}}.cb-sp{animation:cbspray 1.3s ease-out infinite}.cb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cb-bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col) => '<circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 12, "#fff");
  /* SEPTA Market-Frankford Line badge: blue rounded tile */
  const mfl = (x, y) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0f75bc"/>' + txt("MFL", x, y + 5, 12, "#fff");
  const GOLD = "#ffc600", NAVY = "#07294d", SKY = "#4fc3f7", PINK = "#ff6b9a", BUFF = "#d9b98a", TERRA = "#b5653a";

  /* 1. 34th St on the Market-Frankford Line: underground under Market St, white tile, the blue band, the black sign, the silver car with the blue stripe sliding in */
  function station() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#eef1f4"/>';
    let win = "";
    for (let x = 34; x < 290; x += 40) win += '<rect x="' + x + '" y="114" width="26" height="22" rx="2" fill="#1d2a36"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6dbe0"/>' + tiles +
      '<rect x="0" y="36" width="400" height="12" fill="#0f75bc"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#24272c"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="cb-flk" style="animation-delay:-' + i * 0.6 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#f4fbff"/>').join("") +
      /* the station sign */
      '<rect x="44" y="58" width="312" height="32" rx="3" fill="#111"/>' +
      '<text x="58" y="80" ' + font + ' font-size="15" fill="#fff">34th St</text>' + txt("Drexel · Penn · University City", 214, 79, 9, "#cfd8e0") + mfl(320, 74) +
      [18, 382].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#0f75bc"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="140" width="300" height="6" fill="#0f75bc"/><rect x="10" y="147" width="300" height="2" fill="' + GOLD + '"/>' +
        '<rect x="288" y="110" width="18" height="26" rx="2" fill="#1d2a36"/>' +
        '<rect x="268" y="104" width="38" height="9" rx="2" fill="#111"/><text x="287" y="111" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">FRANKFORD</text>' +
        '<circle cx="300" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#f2c200"/><rect x="0" y="170" width="400" height="90" fill="#5b5f66"/>' +
      person(334, 194, "#1b1b1b") + '<rect x="342" y="202" width="10" height="13" rx="2" fill="' + NAVY + '"/>' + person(358, 198, "#2b2b2b") +
      txt("UNIVERSITY CITY", 150, 236, 11, "#f1f4f8", 'letter-spacing="3"'));
  }

  /* 2. Drexel's Main Building on Chestnut St: buff brick, the terra cotta bands, the big arched entrance, and Mario the Magnificent, the bronze dragon, out front */
  function drexel() {
    let wins = "";
    for (const r of [64, 100]) for (let x = 22; x < 380; x += 26) if (x < 160 || x > 236) wins += '<rect x="' + x + '" y="' + r + '" width="12" height="22" rx="6" fill="#33405a"/><rect x="' + x + '" y="' + (r + 10) + '" width="12" height="2" fill="' + BUFF + '"/>';
    const dragon =
      '<g transform="translate(250 176)">' +
        '<rect x="-34" y="26" width="92" height="22" rx="2" fill="#4a4f57"/><rect x="-38" y="46" width="100" height="6" fill="#33373d"/>' +
        '<g class="cb-tail"><path d="M46 20q30 -4 34 -26q2 -10 -6 -8q4 14 -26 22z" fill="#5d4022"/></g>' +
        '<path d="M-26 26q-4 -30 22 -38q30 -6 48 10q8 10 4 28z" fill="#6b4a26" stroke="#3e2a14" stroke-width="1.5"/>' +
        '<g class="cb-wing"><path d="M0 -8q-6 -40 26 -52q-4 18 10 22q-8 8 2 16q-20 0 -38 14z" fill="#7a5630" stroke="#3e2a14" stroke-width="1.5"/></g>' +
        '<path d="M-20 0q-14 -14 -26 -10q-10 -16 -2 -24q10 4 12 14q12 -2 22 10z" fill="#6b4a26" stroke="#3e2a14" stroke-width="1.5"/>' +
        '<path d="M-44 -30l-6 -10M-38 -32l0 -10" stroke="#3e2a14" stroke-width="2"/>' +
        '<circle cx="-40" cy="-24" r="1.6" fill="' + GOLD + '"/>' +
        '<path d="M-22 26v-10M6 26v-10M30 26v-10" stroke="#3e2a14" stroke-width="5" stroke-linecap="round"/>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dx)"/>' +
      /* the building */
      '<rect x="8" y="50" width="384" height="140" fill="' + BUFF + '"/>' +
      '<rect x="8" y="50" width="384" height="8" fill="' + TERRA + '"/><rect x="8" y="92" width="384" height="5" fill="' + TERRA + '"/><rect x="8" y="128" width="384" height="5" fill="' + TERRA + '"/>' +
      (() => { let b = ""; for (let y = 62; y < 190; y += 6) b += '<path d="M8 ' + y + 'h384" stroke="#c9a674" stroke-width=".6"/>'; return b; })() + wins +
      '<rect x="8" y="138" width="384" height="52" fill="#c7a679"/>' +
      (() => { let w = ""; for (let x = 22; x < 380; x += 26) if (x < 150 || x > 246) w += '<rect x="' + x + '" y="146" width="12" height="20" fill="#33405a"/>'; return w; })() +
      /* central block + arch */
      '<rect x="150" y="34" width="100" height="156" fill="#d2b183"/><rect x="150" y="34" width="100" height="8" fill="' + TERRA + '"/>' +
      '<path d="M166 190v-74a34 34 0 0 1 68 0v74z" fill="' + TERRA + '"/><path d="M174 190v-72a26 26 0 0 1 52 0v72z" fill="#2a2f3c"/>' +
      '<rect x="182" y="150" width="36" height="40" fill="#4a3a28"/><path d="M200 150v40" stroke="#2a2016" stroke-width="2"/>' +
      [176, 188, 200, 212, 224].map(x => '<circle cx="' + x + '" cy="' + (98 - Math.abs(200 - x) * 0.35) + '" r="3.5" fill="#efe4cc"/>').join("") +
      '<path d="M192 52q8 -10 16 0v8h-16z" fill="#f4f1ea"/>' +
      txt("DREXEL", 200, 74, 10, "#5a3b1f", 'letter-spacing="2"') +
      /* sidewalk */
      '<rect x="0" y="190" width="400" height="70" fill="#8b8f95"/><rect x="0" y="190" width="400" height="4" fill="#a9adb2"/>' +
      (() => { let s = ""; for (let x = 0; x < 400; x += 40) s += '<path d="M' + x + ' 194v66" stroke="#7b7f85"/>'; return s; })() +
      '<g class="cb-walk">' + person(60, 200, NAVY) + '<rect x="50" y="208" width="8" height="12" rx="2" fill="' + GOLD + '"/></g>' +
      '<g class="cb-walk cb-walk2">' + person(60, 204, "#3a3a44") + '</g>' +
      dragon + txt("MARIO THE MAGNIFICENT", 268, 232, 7, "#f1ead8", 'letter-spacing="1.5"'),
      sky("dx", "#7fb8e6", "#cfe6f7"));
  }

  /* 3. The dorm-room studio: laptop with the waveform bouncing, the keyboard, the drum pads blinking, a window on University City at night, steam off the coffee */
  function dorm() {
    const pads = [0, 1, 2, 3].map(i => [0, 1].map(j => '<rect class="cb-bl cb-bl' + ((i + j) % 3 + 1) + '" x="' + (304 + i * 16) + '" y="' + (150 + j * 16) + '" width="12" height="12" rx="2" fill="' + [GOLD, SKY, PINK, "#7ee08a"][(i + j) % 4] + '"/>').join("")).join("");
    let keys = "";
    for (let i = 0; i < 18; i++) keys += '<rect x="' + (40 + i * 10) + '" y="190" width="9" height="26" fill="#f6f6f6" stroke="#999" stroke-width=".5"/>';
    for (let i = 0; i < 18; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (46 + i * 10) + '" y="190" width="6" height="15" fill="#111"/>';
    let wave = "";
    for (let i = 0; i < 16; i++) wave += '<rect class="cb-wv cb-wv' + (i % 3 + 1) + '" x="' + (140 + i * 7) + '" y="' + 112 + '" width="4" height="' + (10 + (i * 37) % 26) + '" rx="2" fill="' + SKY + '"/>';
    let city = "";
    for (let i = 0; i < 7; i++) city += '<rect x="' + (30 + i * 18) + '" y="' + (70 - (i * 23) % 34) + '" width="14" height="' + (60 + (i * 23) % 34) + '" fill="#18243f"/>';
    let lit = "";
    for (let i = 0; i < 14; i++) lit += '<rect class="cb-bl cb-bl' + (i % 3 + 1) + '" x="' + (33 + (i * 29) % 120) + '" y="' + (62 + (i * 13) % 50) + '" width="3" height="4" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2440"/>' +
      '<rect x="0" y="0" width="400" height="176" fill="#352d52"/>' +
      /* window */
      '<rect x="20" y="22" width="140" height="110" fill="url(#dn)" stroke="#d8d2c4" stroke-width="5"/>' + stars(10).replace(/cx="(\d+)"/g, (m, a) => 'cx="' + (24 + (+a % 130)) + '"').replace(/cy="(\d+)"/g, (m, a) => 'cy="' + (28 + (+a % 30)) + '"') +
      city + lit + '<path d="M90 22v110M20 77h140" stroke="#d8d2c4" stroke-width="3"/>' +
      /* poster wall */
      '<rect x="186" y="20" width="72" height="56" fill="' + GOLD + '"/>' + txt("SWELLY", 222, 46, 14, NAVY) + txt("EXPRESS", 222, 62, 10, NAVY, 'letter-spacing="2"') +
      '<rect x="270" y="26" width="52" height="40" fill="' + SKY + '" transform="rotate(5 296 46)"/><path d="M280 40h32M280 48h26M280 56h30" stroke="' + NAVY + '" stroke-width="2" transform="rotate(5 296 46)"/>' +
      '<rect x="334" y="22" width="44" height="50" fill="' + PINK + '" transform="rotate(-4 356 47)"/><circle cx="356" cy="46" r="13" fill="#111" transform="rotate(-4 356 47)"/><circle cx="356" cy="46" r="4" fill="' + PINK + '"/>' +
      /* the desk */
      '<rect x="0" y="176" width="400" height="10" fill="#7a5233"/><rect x="0" y="186" width="400" height="74" fill="#5e3e26"/>' +
      /* laptop */
      '<path d="M130 92h130v80h-130z" fill="#1c1f26" stroke="#9aa0a7" stroke-width="3"/><rect x="138" y="100" width="114" height="64" fill="#0d1422"/>' + wave +
      '<path d="M118 172h154l-8 6h-138z" fill="#9aa0a7"/>' +
      /* keyboard + pads */
      '<rect x="32" y="184" width="196" height="38" rx="3" fill="#2b2b2b"/>' + keys +
      '<rect x="296" y="142" width="74" height="40" rx="3" fill="#2b2b2b"/>' + pads +
      /* coffee */
      '<rect x="252" y="196" width="20" height="22" rx="3" fill="#f4f1ea"/><path d="M272 202q8 0 8 6t-8 6" stroke="#f4f1ea" stroke-width="3" fill="none"/>' +
      '<path class="cb-stm" d="M258 190q-4 -6 0 -12" stroke="#ddd" stroke-width="2" fill="none"/><path class="cb-stm cb-stm2" d="M266 190q4 -6 0 -12" stroke="#ddd" stroke-width="2" fill="none"/>' +
      /* headphones */
      '<path d="M300 236q0 -26 26 -26t26 26" stroke="#111" stroke-width="5" fill="none"/><rect x="294" y="230" width="12" height="18" rx="4" fill="' + GOLD + '"/><rect x="346" y="230" width="12" height="18" rx="4" fill="' + GOLD + '"/>',
      sky("dn", "#0b1230", "#2a3a6a"));
  }
  /* 4. 30th Street Station's grand concourse, two blocks from Drexel ("you could get notoriety and still ride the train"): the coffered gold ceiling,
     the tall windows pouring light, the big Art Deco chandeliers, the departure board flipping, travelers crossing the marble floor */
  function concourse() {
    let coffers = "";
    for (let x = 0; x < 400; x += 25) for (let y = 0; y < 44; y += 22) coffers += '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="19" height="16" fill="#8a2a22" stroke="#d9a845" stroke-width="2"/>';
    const win = x => '<rect x="' + x + '" y="58" width="36" height="96" fill="#f3e6b8" opacity=".9"/>' + '<path d="M' + (x + 12) + ' 58v96M' + (x + 24) + ' 58v96M' + x + ' 82h36M' + x + ' 106h36M' + x + ' 130h36" stroke="#b9a172" stroke-width="1.5"/>' +
      '<path d="M' + x + ' 154l-30 70h96l-30 -70z" fill="#fff4cc" opacity=".12"/>';
    const lamp = x => '<path d="M' + x + ' 44v22" stroke="#6b5326" stroke-width="2"/><g class="cb-flk" style="animation-duration:5s"><rect x="' + (x - 14) + '" y="66" width="28" height="30" rx="3" fill="#f2c86a" stroke="#8a6a24" stroke-width="2"/>' +
      '<path d="M' + (x - 14) + ' 76h28M' + (x - 14) + ' 86h28" stroke="#8a6a24" stroke-width="1.5"/><path d="M' + (x - 8) + ' 96l8 8l8 -8" fill="#f2c86a" stroke="#8a6a24" stroke-width="1.5"/></g>';
    let board = "";
    for (let r = 0; r < 4; r++) {
      board += '<text x="140" y="' + (128 + r * 9) + '" ' + font + ' font-size="6.5" fill="#ffd23f">' + ["NEW YORK", "HARRISBURG", "WASHINGTON", "BOSTON"][r] + '</text>';
      for (let c = 0; c < 4; c++) board += '<rect class="cb-bl cb-bl' + ((r + c) % 3 + 1) + '" x="' + (222 + c * 8) + '" y="' + (122 + r * 9) + '" width="6" height="7" fill="#ffd23f"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#e6d6b0"/>' +
      '<rect x="0" y="0" width="400" height="46" fill="#6b1f1a"/>' + coffers +
      '<rect x="0" y="46" width="400" height="6" fill="#c9a24a"/>' +
      win(14) + win(70) + win(294) + win(350) +
      '<path d="M0 54h400" stroke="#c9b48a" stroke-width="2"/>' +
      [120, 200, 280].map(lamp).join("") +
      /* the departure board */
      '<rect x="132" y="112" width="136" height="44" rx="2" fill="#141414" stroke="#3a3a3a" stroke-width="3"/>' + board +
      /* marble floor */
      '<rect x="0" y="160" width="400" height="100" fill="#cbb994"/>' +
      (() => { let f = ""; for (let i = 0; i < 10; i++) f += '<path d="M' + (i * 44) + ' 160l' + ((i - 4.5) * 30) + ' 100" stroke="#b7a37c" stroke-width="1"/>'; for (let y = 172; y < 260; y += 18) f += '<path d="M0 ' + y + 'h400" stroke="#b7a37c"/>'; return f; })() +
      '<g class="cb-walk">' + person(40, 196, NAVY) + '<rect x="46" y="212" width="12" height="10" rx="2" fill="' + PINK + '"/></g>' +
      '<g class="cb-walk cb-walk2">' + person(40, 190, "#2b2b2b") + '<rect x="28" y="204" width="8" height="16" rx="2" fill="' + GOLD + '"/></g>' +
      person(330, 186, "#3a3036") + person(346, 190, "#1f2a36") +
      txt("30TH STREET STATION", 200, 246, 10, "#5a3b1f", 'letter-spacing="3"'));
  }

  /* 5. 33rd St & Market St: green signs, the wall tagged CHIDDY BANG, the slanted glass Cira Centre and the tall FMC Tower lit up behind */
  function corner() {
    let glass = "", fmc = "";
    for (let y = 30; y < 150; y += 10) glass += '<path d="M236 ' + (y + 4) + 'L318 ' + (y + 12) + '" stroke="#7fb0d6" stroke-width=".8" opacity=".6"/>';
    for (let y = 22; y < 150; y += 8) for (let x = 106; x < 150; x += 8) fmc += '<rect class="' + ((x + y) % 3 ? "" : "cb-bl") + '" x="' + x + '" y="' + y + '" width="4" height="4" fill="#ffe6a8" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cc)"/>' + stars(14) +
      /* low University City skyline */
      '<g fill="#232a44"><rect x="0" y="96" width="44" height="60"/><rect x="48" y="80" width="40" height="76"/><rect x="170" y="86" width="56" height="70"/><rect x="330" y="92" width="70" height="64"/></g>' +
      /* FMC Tower: slim, the top stepping in */
      '<path d="M100 26l12 -12h32l6 12v130h-50z" fill="#3a4766"/>' + fmc + '<rect class="cb-bl" x="124" y="8" width="4" height="8" fill="#ff6b6b"/>' +
      /* Cira Centre: glass prism with the slanted roof */
      '<path d="M236 30L318 50V156H236z" fill="#2c4a6a"/>' + glass + '<path class="cb-bl cb-bl2" d="M236 30L318 50" stroke="' + SKY + '" stroke-width="2.5"/>' +
      /* the wall */
      '<rect x="0" y="134" width="320" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h320" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("CHIDDY BANG", 14, 196, 40, GOLD, -5) + tag("SWELLY", 196, 220, 20, SKY, -4) + tag("XAPHOON", 24, 220, 15, "#f4f1ea", -3) +
      '<g class="cb-sp"><circle cx="276" cy="170" r="2" fill="' + GOLD + '"/></g><g class="cb-sp cb-sp2"><circle cx="280" cy="176" r="1.6" fill="' + SKY + '"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="cb-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="cb-car cb-car2"><rect x="0" y="238" width="52" height="13" rx="4" fill="' + SKY + '"/><circle cx="12" cy="251" r="4" fill="#111"/><circle cx="40" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="66" width="5" height="162" fill="#3d4b3f"/>' +
      sign(300, 70, 96, "33rd St") + sign(300, 96, 96, "Market St") +
      '<circle class="cb-flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("cc", "#0a0f26", "#3a3060"));
  }

  window.SCENES = { station: station, drexel: drexel, dorm: dorm, concourse: concourse, corner: corner };
})();
