/* getoboys scenes (Regions tab: Houston + Texas; Fifth Ward, Houston). CSS classes and ids prefixed gtb- (the page's own anim-train is kept).
   1 METRO's 48 Market bus pulling into the Fifth Ward/Denver Harbor Transit Center.
   2 Phillis Wheatley High School, the Fifth Ward's high school: brick front, flag waving.
   3 Kingston Harbour under the Blue Mountains, where Bushwick Bill was born ("Although I was born in Jamaica"): boat gliding, sun over the peaks.
   4 Finnigan Park on Providence St in the Fifth Ward: oaks, the dominoes table, a swing going.
   5 Liberty Rd and Lockwood Dr, the Fifth Ward's northeast corner: green signs, GETO BOYS tagged, One Shell Plaza's white tower and mast downtown behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gtbblink{0%,100%{opacity:.25}50%{opacity:1}}.gtb-bl{animation:gtbblink 1.4s ease-in-out infinite}.gtb-bl2{animation-delay:-.7s}' +
    '@keyframes gtbwave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.gtb-flag{animation:gtbwave 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes gtbboat{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.gtb-boat{animation:gtbboat 14s linear infinite}' +
    '@keyframes gtbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.gtb-bob{animation:gtbbob 1.6s ease-in-out infinite}' +
    '@keyframes gtbswing{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.gtb-swing{animation:gtbswing 2.4s ease-in-out infinite;transform-box:view-box;transform-origin:300px 120px}' +
    '@keyframes gtbleaf{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-40px,110px) rotate(260deg);opacity:0}}.gtb-leaf{animation:gtbleaf 5s linear infinite}.gtb-lf2{animation-delay:-2.5s}' +
    '@keyframes gtbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gtb-sp{animation:gtbspray 1.4s ease-out infinite}.gtb-sp2{animation-delay:.45s}' +
    '@keyframes gtbshim{0%,100%{opacity:.2}50%{opacity:.8}}.gtb-sh{animation:gtbshim 2s ease-in-out infinite}.gtb-sh2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "gtb-bl" + (i % 2 ? " gtb-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const GOLD = "#e8b04a", RED = "#d9342b", CREAM = "#f2e6c8", METRO = "#1f5fa8", GREEN = "#2e8b57";

  /* 1. METRO 48 Market at the Fifth Ward/Denver Harbor Transit Center */
  function gtbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="320" height="76" rx="10" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="320" height="8" fill="' + METRO + '"/><rect x="40" y="166" width="320" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="118" width="22" height="46" rx="3" fill="#24303a"/>' +
      '<rect x="296" y="112" width="60" height="12" rx="2" fill="#111"/><text x="326" y="121.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">48 MARKET</text>' +
      '<circle cx="104" cy="186" r="13" fill="#222"/><circle cx="104" cy="186" r="5" fill="#999"/><circle cx="306" cy="186" r="13" fill="#222"/><circle cx="306" cy="186" r="5" fill="#999"/>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gtbs1)"/>' + stars(10) +
      brick(0, 70, 110, 60, "#8a5a40", "#6a4030") + brick(300, 64, 100, 66, "#7b4a3a", "#5e3528") +
      '<path d="M0 60l200 -26l200 26v8H0z" fill="#c9ced6"/><rect x="0" y="68" width="400" height="5" fill="' + METRO + '"/>' +
      [40, 150, 250, 360].map(x => '<rect x="' + x + '" y="73" width="6" height="123" fill="#9aa3ad"/>').join("") +
      [80, 190, 290].map((x, i) => '<rect class="gtb-bl' + (i % 2 ? " gtb-bl2" : "") + '" x="' + x + '" y="73" width="30" height="4" fill="#fff6c2"/>').join("") +
      '<rect x="0" y="130" width="400" height="66" fill="#2c2e34"/><path d="M0 178h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#a8a196"/><path d="M0 200h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="14" y="208" width="360" height="42" rx="3" fill="#111"/><circle cx="38" cy="229" r="14" fill="' + METRO + '"/><text x="38" y="234" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">48</text>' +
      '<text x="60" y="226" ' + font + ' font-size="13.5" fill="#fff">FIFTH WARD / DENVER HARBOR</text><text x="60" y="242" ' + font + ' font-size="10" fill="' + GOLD + '">TRANSIT CENTER · MARKET</text>',
      sky("gtbs1", "#120c24", "#c8603a"));
  }

  /* 2. Phillis Wheatley High School */
  function gtbschool() {
    const wins = []; for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) if (!(r === 1 && (c === 3 || c === 4))) wins.push('<rect x="' + (58 + c * 37) + '" y="' + (88 + r * 42) + '" width="22" height="26" fill="#bcd8ea" stroke="' + CREAM + '" stroke-width="2"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gtbs2)"/>' +
      '<circle cx="80" cy="40" r="18" fill="#fff3c4"/>' +
      brick(44, 74, 312, 128, "#a0522d", "#80401f") +
      '<rect x="40" y="66" width="320" height="10" fill="' + CREAM + '"/>' + wins.join("") +
      '<rect x="166" y="136" width="68" height="66" fill="' + CREAM + '"/><rect x="176" y="146" width="22" height="56" fill="#3a2a1a"/><rect x="202" y="146" width="22" height="56" fill="#3a2a1a"/>' +
      '<rect x="96" y="44" width="208" height="22" rx="2" fill="#5a1a1a"/><text x="200" y="59" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="1">PHILLIS WHEATLEY HIGH</text>' +
      '<rect x="372" y="26" width="3" height="176" fill="#c8ccd0"/><g class="gtb-flag"><rect x="375" y="28" width="22" height="14" fill="#fff"/><rect x="375" y="28" width="7.3" height="14" fill="' + METRO + '"/><rect x="382.3" y="28" width="14.7" height="7" fill="#fff"/><rect x="382.3" y="35" width="14.7" height="7" fill="' + RED + '"/><circle cx="378.6" cy="35" r="1.6" fill="#fff"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#6f9a52"/><path d="M160 202h80l16 30h-112z" fill="#c9c2b4"/>' +
      '<rect x="14" y="214" width="120" height="30" rx="3" fill="#111"/><text x="74" y="227" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">THE FIFTH WARD\'S</text><text x="74" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">HIGH SCHOOL</text>',
      sky("gtbs2", "#6fb2e8", "#f6dfae"));
  }

  /* 3. Kingston Harbour and the Blue Mountains */
  function gtbkingston() {
    return svg(
      '<rect width="400" height="260" fill="url(#gtbs3)"/>' +
      '<circle cx="300" cy="64" r="22" fill="#fff0a8"/>' +
      '<path d="M0 132l60 -50l40 26l60 -56l50 40l50 -34l70 46l70 -30v58z" fill="#3c5a8a"/><path d="M0 140l80 -30l60 18l70 -26l70 22l60 -18l60 14v20H0z" fill="#2f6b4a"/>' +
      [30, 70, 110, 150, 230, 270, 330, 370].map((x, i) => '<rect x="' + x + '" y="' + (130 - (i % 3) * 6) + '" width="' + (14 + (i % 2) * 6) + '" height="' + (14 + (i % 3) * 6) + '" fill="' + ["#f2e6c8", "#f7c6a0", "#e8f0f4"][i % 3] + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="url(#gtbs3b)"/>' +
      Array.from({ length: 8 }, (_, i) => '<path class="gtb-sh' + (i % 2 ? " gtb-sh2" : "") + '" d="M' + (20 + i * 50) + ' ' + (170 + (i % 3) * 22) + 'h26" stroke="#bfe8ff" stroke-width="2"/>').join("") +
      '<g class="gtb-boat"><g class="gtb-bob"><path d="M20 196h52l-8 12H28z" fill="#f2f2f2" stroke="#555"/><rect x="44" y="160" width="2" height="36" fill="#555"/><path d="M46 162l22 30H46z" fill="' + GOLD + '"/><path d="M44 166l-18 26h18z" fill="' + GREEN + '"/></g></g>' +
      '<path d="M0 236q20 -16 60 -8q30 6 50 24v8H0z" fill="#e8d9a8"/><rect x="32" y="196" width="4" height="40" fill="#6a4a2a" transform="rotate(-8 34 216)"/><path d="M34 198q-16 -2 -24 8M34 198q14 -8 26 0M34 198q-6 -14 -18 -14M34 198q10 -14 22 -10" stroke="#2f7a3a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="190" y="220" width="200" height="30" rx="3" fill="#111"/><text x="290" y="233" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">KINGSTON, JAMAICA</text><text x="290" y="245" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">WHERE BUSHWICK BILL WAS BORN</text>',
      sky("gtbs3", "#4aa8e8", "#ffd9a0") + '<linearGradient id="gtbs3b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a9ad0"/><stop offset="1" stop-color="#0d4f7a"/></linearGradient>');
  }

  /* 4. Finnigan Park on Providence St */
  function gtbpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#gtbs4)"/>' +
      oak(60, 170, 1.4) + oak(180, 160, 1.1) + oak(360, 168, 1.3) +
      '<rect x="0" y="160" width="400" height="100" fill="#6f9a52"/><path d="M0 214q200 -20 400 0v46H0z" fill="#c9b994"/>' +
      '<path d="M262 120h76M268 120l-14 70M332 120l14 70" stroke="#c94a3a" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="gtb-swing"><path d="M292 120v50M308 120v50" stroke="#555" stroke-width="2"/><rect x="288" y="168" width="24" height="5" rx="2" fill="#2a2a2a"/></g>' +
      '<rect x="100" y="182" width="70" height="8" rx="2" fill="#6a4a2a"/><path d="M108 190v18M162 190v18" stroke="#6a4a2a" stroke-width="5"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (108 + i * 14) + '" y="176" width="10" height="6" rx="1" fill="#fff" stroke="#333" stroke-width=".8"/><circle cx="' + (111 + i * 14) + '" cy="179" r=".9" fill="#111"/><circle cx="' + (115 + i * 14) + '" cy="179" r=".9" fill="#111"/>').join("") +
      '<path class="gtb-leaf" d="M200 70q4 -4 8 0q-4 4 -8 0z" fill="#8aa83a"/><path class="gtb-leaf gtb-lf2" d="M90 80q4 -4 8 0q-4 4 -8 0z" fill="#c8a03a"/>' +
      '<rect x="18" y="20" width="150" height="34" rx="3" fill="#111"/><text x="93" y="35" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">FINNIGAN PARK</text><text x="93" y="48" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">PROVIDENCE ST · FIFTH WARD</text>',
      sky("gtbs4", "#7ec4f0", "#f8e8c0"));
  }

  /* 5. Liberty Rd and Lockwood Dr: One Shell Plaza behind */
  function gtbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gtbs5)"/>' + stars(14) +
      '<rect x="262" y="70" width="22" height="60" fill="#3a3f52"/><rect x="340" y="80" width="26" height="50" fill="#3a3f52"/><rect x="370" y="96" width="22" height="34" fill="#444a5e"/>' +
      '<rect x="292" y="36" width="40" height="94" fill="#ece6d8"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M292 ' + (44 + r * 10) + 'h40" stroke="#c8c0ac" stroke-width="1"/>').join("") +
      Array.from({ length: 5 }, (_, c) => '<path d="M' + (298 + c * 7) + ' 36v94" stroke="#d8d0bc" stroke-width="1"/>').join("") +
      '<rect x="310" y="6" width="4" height="30" fill="#ece6d8"/><circle class="gtb-bl" cx="312" cy="6" r="2.5" fill="#ff4d4d"/>' +
      '<rect x="0" y="128" width="400" height="132" fill="#2b2d33"/>' +
      brick(18, 104, 244, 116, "#7a3a30", "#5e2a22") +
      tag("GETO BOYS", 30, 162, 38, GOLD, -6) + tag("G.O.", 40, 200, 26, RED, -4) + tag("5TH WARD", 118, 210, 20, CREAM, -3) +
      '<circle class="gtb-sp" cx="236" cy="184" r="3" fill="' + GOLD + '"/><circle class="gtb-sp gtb-sp2" cx="242" cy="190" r="2" fill="' + GOLD + '"/>' +
      '<rect x="322" y="118" width="6" height="118" fill="#8a9096"/>' + sign(270, 114, 110, "LIBERTY RD") + sign(276, 140, 110, "LOCKWOOD DR") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("gtbs5", "#0f1430", "#6a2a2a"));
  }

  window.SCENES = { gtbstation, gtbschool, gtbkingston, gtbpark, gtbcorner };
})();
