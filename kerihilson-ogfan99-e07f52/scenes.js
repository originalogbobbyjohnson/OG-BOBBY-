/* kerihilson scenes (Regions tab: Atlanta; born in Decatur, DeKalb County; Tucker High class of 2000-ish, then Oxford College + Emory). CSS classes and ids prefixed kh- (the page's own anim-train is kept).
   1 MARTA's 75 Lawrenceville Hwy bus pulling up at Main Street in Tucker (route out of Avondale station), the street-side stop sign and shelter.
   2 Tucker High School on LaVista Rd: red-brick school, maroon and gold Tigers banner, the marquee, gold lights.
   3 Oxford College of Emory (Oxford, GA): Seney Hall's red-brick Victorian clock tower on the quad, the clock hands turning.
   4 Emory University's quad in Atlanta (she studied theater): pale marble halls with red tile roofs, theater masks floating.
   5 LaVista Rd and Fellowship Rd in Tucker: green signs, KERI HILSON tagged, a freight train rolling past Main Street's old brick storefronts behind.
   400 x 260 SVGs. No logos, no faces of real people, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes khflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.kh-flk{animation:khflick 2.2s infinite}.kh-flk2{animation-delay:.7s}' +
    '@keyframes khtw{0%,100%{opacity:.3}50%{opacity:1}}.kh-tw{animation:khtw 1.6s ease-in-out infinite}.kh-tw2{animation-delay:-.8s}' +
    '@keyframes khwave{0%,100%{transform:skewY(0deg)}50%{transform:skewY(4deg)}}.kh-wave{transform-box:fill-box;transform-origin:0% 50%;animation:khwave 2.4s ease-in-out infinite}' +
    '@keyframes khspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kh-min{transform-box:view-box;animation:khspin 8s linear infinite}.kh-hr{transform-box:view-box;animation:khspin 96s linear infinite}' +
    '@keyframes khbob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-8px) rotate(4deg)}}.kh-bob{transform-box:fill-box;transform-origin:50% 50%;animation:khbob 3s ease-in-out infinite}.kh-bob2{animation-delay:-1.5s}' +
    '@keyframes khleaf{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-60px,120px);opacity:0}}.kh-leaf{animation:khleaf 6s linear infinite}.kh-leaf2{animation-delay:-2s}.kh-leaf3{animation-delay:-4s}' +
    '@keyframes khfreight{from{transform:translateX(420px)}to{transform:translateX(-520px)}}.kh-freight{animation:khfreight 11s linear infinite}' +
    '@keyframes khspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kh-sp{animation:khspray 1.4s ease-out infinite}.kh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffcf5a", PINK = "#ff6fae", SKY = "#9ad7ff", MAROON = "#7a1f2b", MBLUE = "#0075b2", MORANGE = "#f08a24";
  const pine = (x, y, s) => '<path d="M' + x + ' ' + (y - 60 * s) + 'l' + (16 * s) + ' ' + (26 * s) + 'h' + (-8 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-10 * s) + 'l' + (12 * s) + ' ' + (18 * s) + 'h' + (-48 * s) + 'l' + (12 * s) + ' ' + (-18 * s) + 'h' + (-10 * s) + 'l' + (14 * s) + ' ' + (-22 * s) + 'h' + (-8 * s) + 'z" fill="#1d3a2a"/><rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + (6 * s) + '" height="' + (10 * s) + '" fill="#3a2a1e"/>';

  /* 1. MARTA 75 Lawrenceville Hwy bus at Main Street, Tucker */
  function khbus() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 40) + '" y="112" width="32" height="26" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="98" width="290" height="84" rx="10" fill="#f4f5f2" stroke="#7d848a" stroke-width="2"/>' + win +
      '<rect x="40" y="146" width="290" height="7" fill="' + MBLUE + '"/><rect x="40" y="153" width="290" height="5" fill="' + MORANGE + '"/>' +
      '<rect x="306" y="110" width="20" height="62" rx="3" fill="#2a3640"/><path d="M316 112v58" stroke="#7d848a" stroke-width="1.5"/>' +
      '<rect x="230" y="101" width="96" height="10" rx="2" fill="#111"/><text x="278" y="109" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">75 TUCKER</text>' +
      '<circle cx="90" cy="184" r="14" fill="#1a1a1a"/><circle cx="90" cy="184" r="6" fill="#9aa1a6"/><circle cx="276" cy="184" r="14" fill="#1a1a1a"/><circle cx="276" cy="184" r="6" fill="#9aa1a6"/>' +
      '<circle class="kh-flk" cx="326" cy="168" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#khs1)"/>' +
      '<g class="kh-tw"><circle cx="40" cy="22" r="1.4" fill="#fff"/><circle cx="210" cy="14" r="1.2" fill="#fff"/></g><g class="kh-tw kh-tw2"><circle cx="120" cy="34" r="1.2" fill="#fff"/><circle cx="300" cy="26" r="1.4" fill="#fff"/></g>' +
      '<circle cx="352" cy="36" r="13" fill="#fff4cf" opacity=".9"/>' +
      pine(24, 96, 1) + pine(64, 92, .8) + pine(370, 96, 1.05) + pine(336, 92, .75) +
      '<rect x="0" y="96" width="400" height="6" fill="#2a2f36"/>' +
      bus +
      '<rect x="0" y="198" width="400" height="62" fill="#3d4148"/><rect x="0" y="196" width="400" height="3" fill="#cfd4da"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 52) + '" y="226" width="26" height="4" fill="#f2c200"/>').join("") +
      /* bus stop post + sign */
      '<rect x="352" y="104" width="5" height="94" fill="#555"/><rect x="336" y="104" width="38" height="44" rx="3" fill="#fff" stroke="' + MBLUE + '" stroke-width="2"/>' +
      '<rect x="336" y="104" width="38" height="12" fill="' + MBLUE + '"/><text x="355" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MARTA</text>' +
      '<rect x="343" y="120" width="24" height="14" rx="2" fill="' + MORANGE + '"/><text x="355" y="131" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">75</text>' +
      '<text x="355" y="144" text-anchor="middle" ' + font + ' font-size="5" fill="#222">BUS STOP</text>' +
      '<rect x="12" y="204" width="170" height="24" rx="3" fill="#111"/><text x="22" y="221" ' + font + ' font-size="12" fill="#fff">Main St, Tucker</text>' +
      '<rect x="138" y="209" width="38" height="14" rx="7" fill="' + MORANGE + '"/><text x="157" y="220" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">75</text>' +
      label(186, 208, "LAWRENCEVILLE HWY, FROM AVONDALE"),
      sky("khs1", "#0f1230", "#3b3a6a"));
  }

  /* 2. Tucker High School, LaVista Rd: maroon and gold Tigers */
  function khtucker() {
    const winrow = (y) => Array.from({ length: 12 }, (_, i) => '<rect x="' + (46 + i * 26) + '" y="' + y + '" width="16" height="18" fill="#2a3e52" stroke="#e8e2d4" stroke-width="1.5"/>').join("");
    const bricks = Array.from({ length: 10 }, (_, i) => '<path d="M36 ' + (82 + i * 8) + 'h328" stroke="#8e3a2c" stroke-width=".8"/>').join("");
    const paw = (x, y, c) => '<g fill="' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="7" ry="6"/><circle cx="' + (x - 7) + '" cy="' + (y - 8) + '" r="2.6"/><circle cx="' + (x - 2.5) + '" cy="' + (y - 11) + '" r="2.6"/><circle cx="' + (x + 2.5) + '" cy="' + (y - 11) + '" r="2.6"/><circle cx="' + (x + 7) + '" cy="' + (y - 8) + '" r="2.6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#khs2)"/>' +
      pine(16, 120, 1.1) + pine(388, 118, 1.15) +
      /* red brick school */
      '<rect x="36" y="78" width="328" height="88" fill="#a84a36"/>' + bricks + winrow(88) + winrow(118) +
      '<rect x="36" y="72" width="328" height="8" fill="#e8e2d4"/>' +
      '<rect x="160" y="60" width="80" height="106" fill="#b8553e"/><rect x="156" y="54" width="88" height="8" fill="#e8e2d4"/>' +
      '<rect x="176" y="126" width="48" height="40" fill="#3a2a22"/><path d="M200 126v40" stroke="#e8e2d4" stroke-width="2"/>' +
      '<text x="200" y="60.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + MAROON + '">TUCKER HIGH SCHOOL</text>' +
      /* maroon and gold banner */
      '<g class="kh-wave"><rect x="172" y="84" width="56" height="36" fill="' + MAROON + '" stroke="' + GOLD + '" stroke-width="2"/>' + paw(200, 108, GOLD) + '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">TIGERS</text></g>' +
      '<rect x="0" y="166" width="400" height="94" fill="#3f6b34"/><path d="M180 166l-30 94h100l-30 -94z" fill="#9c9487"/>' +
      /* marquee sign */
      '<rect x="40" y="176" width="6" height="40" fill="#555"/><rect x="120" y="176" width="6" height="40" fill="#555"/>' +
      '<rect x="30" y="170" width="106" height="36" rx="3" fill="' + MAROON + '" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="83" y="184" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">HOME OF THE</text><text x="83" y="198" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">TIGERS</text>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="kh-tw' + (i % 2 ? " kh-tw2" : "") + '" cx="' + (36 + i * 19) + '" cy="168" r="2.4" fill="' + GOLD + '"/>').join("") +
      paw(300, 200, GOLD) + paw(330, 186, GOLD) + paw(358, 204, GOLD) +
      label(130, 140, "TUCKER HIGH, LAVISTA RD"),
      sky("khs2", "#4a7fc0", "#cfe4f2"));
  }

  /* 3. Oxford College of Emory: Seney Hall's red-brick clock tower */
  function khoxford() {
    const arch = (x, y) => '<path d="M' + x + ' ' + (y + 22) + 'v-14a7 7 0 0 1 14 0v14z" fill="#2b3a4a" stroke="#f1e9d8" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#khs3)"/>' +
      '<g fill="#2f5a34"><circle cx="40" cy="128" r="44"/><circle cx="92" cy="116" r="34"/><circle cx="356" cy="122" r="44"/><circle cx="310" cy="112" r="30"/></g>' +
      /* main hall */
      '<rect x="110" y="106" width="180" height="74" fill="#9e3f2f"/>' + [124, 152, 180, 208, 236, 264].map(x => arch(x, 120)).join("") + [124, 152, 236, 264].map(x => arch(x, 150)).join("") +
      '<path d="M104 106l46 -18h100l46 18z" fill="#5a3a3a"/><rect x="104" y="104" width="192" height="4" fill="#f1e9d8"/>' +
      /* tower */
      '<rect x="176" y="40" width="48" height="140" fill="#a8452f"/><rect x="176" y="40" width="48" height="140" fill="none" stroke="#f1e9d8" stroke-width="2"/>' +
      '<path d="M170 40l30 -30l30 30z" fill="#4a3a3e"/><rect x="196" y="2" width="8" height="10" fill="#4a3a3e"/><path d="M200 2v-2" stroke="#c9a54a" stroke-width="2"/>' +
      '<circle cx="200" cy="66" r="16" fill="#f7f2e4" stroke="#3a2a22" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return '<rect x="199" y="51.5" width="2" height="3" fill="#3a2a22" transform="rotate(' + (i * 30) + ' 200 66)"/>'; }).join("") +
      '<g class="kh-hr" style="transform-origin:200px 66px"><path d="M200 66v-9" stroke="#222" stroke-width="2.6" stroke-linecap="round"/></g>' +
      '<g class="kh-min" style="transform-origin:200px 66px"><path d="M200 66v-13" stroke="#222" stroke-width="1.6" stroke-linecap="round"/></g>' +
      '<circle cx="200" cy="66" r="1.8" fill="#222"/>' +
      '<rect x="190" y="100" width="20" height="30" fill="#2b3a4a" stroke="#f1e9d8" stroke-width="1.5"/>' +
      '<rect x="186" y="150" width="28" height="30" fill="#3a2a22"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#4f8a3e"/><path d="M200 180l-40 80h80z" fill="#c9bfa8"/>' +
      '<g class="kh-leaf"><path d="M330 60q6 -4 10 2q-6 4 -10 -2z" fill="#d88a2a"/></g><g class="kh-leaf kh-leaf2"><path d="M90 50q6 -4 10 2q-6 4 -10 -2z" fill="#c9562a"/></g><g class="kh-leaf kh-leaf3"><path d="M260 30q6 -4 10 2q-6 4 -10 -2z" fill="#e0b040"/></g>' +
      label(120, 160, "SENEY HALL, OXFORD COLLEGE"),
      sky("khs3", "#5aa0d8", "#f2e6c8"));
  }

  /* 4. Emory University quad: pale marble halls, red tile roofs, theater masks */
  function khemory() {
    const hall = (x, w, y) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#ece2d6" stroke="#b9ad9c" stroke-width="1.5"/>' +
      '<path d="M' + (x - 6) + ' ' + y + 'l' + (w / 2 + 6) + ' -18l' + (w / 2 + 6) + ' 18z" fill="#b5482e"/>' +
      Array.from({ length: Math.floor(w / 22) }, (_, i) => '<path d="M' + (x + 8 + i * 22) + ' ' + (y + 40) + 'v-18a7 7 0 0 1 14 0v18z" fill="#3a4656"/>').join("") +
      Array.from({ length: Math.floor(w / 22) }, (_, i) => '<rect x="' + (x + 8 + i * 22) + '" y="' + (y + 52) + '" width="14" height="18" fill="#3a4656"/>').join("");
    const mask = (x, y, c, sad) => '<g class="kh-bob' + (sad ? " kh-bob2" : "") + '"><path d="M' + (x - 16) + ' ' + (y - 14) + 'q16 -6 32 0q2 22 -16 32q-18 -10 -16 -32z" fill="' + c + '" stroke="#222" stroke-width="1.5"/>' +
      '<ellipse cx="' + (x - 7) + '" cy="' + (y - 4) + '" rx="4" ry="3" fill="#222"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 4) + '" rx="4" ry="3" fill="#222"/>' +
      '<path d="M' + (x - 7) + ' ' + (y + 8) + (sad ? 'q7 -6 14 0' : 'q7 6 14 0') + '" stroke="#222" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#khs4)"/>' +
      hall(14, 120, 92) + hall(266, 120, 92) + hall(150, 100, 70) +
      '<rect x="186" y="146" width="28" height="24" fill="#3a2a22"/><path d="M186 146a14 14 0 0 1 28 0" fill="#3a2a22"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#58923e"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 170l28 90" stroke="#4d8436" stroke-width="2"/>').join("") +
      '<path d="M0 214h400" stroke="#d7ccb6" stroke-width="8"/>' +
      mask(150, 40, GOLD, false) + mask(250, 44, PINK, true) +
      label(140, 120, "THE QUAD, EMORY"),
      sky("khs4", "#6fb0e6", "#f4ead8"));
  }

  /* 5. LaVista Rd and Fellowship Rd, Tucker: the freight line past Main Street */
  function khcorner() {
    const stores = [[0, 60, "#8e3e2e"], [62, 54, "#a55a3a"], [118, 70, "#7d3a30"], [190, 58, "#9a4c34"], [250, 66, "#83402e"], [318, 82, "#a0583c"]].map(([x, w, c]) =>
      '<rect x="' + x + '" y="62" width="' + w + '" height="52" fill="' + c + '"/><rect x="' + x + '" y="58" width="' + w + '" height="6" fill="#d9cbb0"/>' +
      Array.from({ length: Math.floor(w / 18) }, (_, i) => '<rect x="' + (x + 6 + i * 18) + '" y="72" width="10" height="14" fill="#f3d58a" class="kh-tw' + (i % 2 ? " kh-tw2" : "") + '"/>').join("")).join("");
    const car = (x, c) => '<rect x="' + x + '" y="98" width="96" height="30" rx="2" fill="' + c + '"/><path d="M' + (x + 4) + ' 104h88M' + (x + 4) + ' 112h88M' + (x + 4) + ' 120h88" stroke="#000" stroke-opacity=".25"/>' +
      '<circle cx="' + (x + 16) + '" cy="130" r="5" fill="#111"/><circle cx="' + (x + 80) + '" cy="130" r="5" fill="#111"/>';
    const freight = '<g class="kh-freight"><rect x="0" y="92" width="70" height="36" rx="3" fill="#2a4a7a"/><rect x="48" y="84" width="20" height="14" fill="#2a4a7a"/><rect x="52" y="87" width="12" height="7" fill="#bfe6fb"/><circle cx="4" cy="110" r="3" fill="#fff6c2"/>' +
      '<circle cx="14" cy="130" r="5" fill="#111"/><circle cx="56" cy="130" r="5" fill="#111"/>' + car(74, "#7a4a2a") + car(174, "#5a6a72") + car(274, "#8a3a2a") + car(374, "#4a5a3a") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#khs5)"/>' +
      stores + freight + '<rect x="0" y="130" width="400" height="4" fill="#555"/>' +
      /* brick wall */
      '<rect x="0" y="134" width="400" height="92" fill="#6e3d33"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#5a3029" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (134 + i * 8) + 'v8" stroke="#5a3029" stroke-width="1"/>').join("")).join("") +
      tag("KERI HILSON", 14, 196, 36, GOLD, -6) + tag("THE CLUTCH", 30, 160, 18, PINK, -4) + tag("MS. KERI", 190, 216, 18, SKY, -3) +
      '<g class="kh-sp"><circle cx="232" cy="178" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kh-sp kh-sp2"><circle cx="238" cy="172" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55524d"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="100" width="6" height="126" fill="#2f2f2f"/>' + sign(270, 104, 128, "LaVista Rd") + sign(262, 130, 136, "Fellowship Rd") +
      '<rect x="8" y="120" width="4" height="106" fill="#222"/><circle class="kh-flk" cx="10" cy="118" r="7" fill="#ffe9a8"/>',
      sky("khs5", "#2a1f4a", "#e8907a"));
  }

  window.SCENES = { khbus: khbus, khtucker: khtucker, khoxford: khoxford, khemory: khemory, khcorner: khcorner };
})();
