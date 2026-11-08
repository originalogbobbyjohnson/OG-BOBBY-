/* rocko scenes (Regions tab: Atlanta; Downtown). CSS classes and ids prefixed rk- (the page's own anim-train is kept).
   1 MARTA Peachtree Center station (underground, Red + Gold lines): the raw granite rock walls the station was blasted out of, the silver train sliding in, black sign with the RED and GOLD line dots.
   2 "Dis Morning": the studio he left at seven, the clock flashing ten, the meters bouncing ("I left the studio at seven / took a three hour nap / ten o'clock flashed").
   3 "Squares Out Your Circle": the beach in Belize at noon ("Right now I'm in Belize ... it's midnight in Georgia, where I'm at it's noon"), the luggage stacked on the dock.
   4 "Umma Do Me" / "U.O.E.N.O.": the garage, the two-door that talks back and the monster truck too tall to tow, the key fob auto-starting it.
   5 Peachtree St NE and John Portman Blvd NE downtown: green signs, ROCKO tagged, the Hyatt Regency's blue saucer dome (Polaris) behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rkbl{0%,100%{opacity:.3}50%{opacity:1}}.rk-bl{animation:rkbl 1.4s ease-in-out infinite}.rk-bl2{animation-delay:-.7s}' +
    '@keyframes rkvu{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(1)}60%{transform:scaleY(.6)}}.rk-vu{transform-box:fill-box;transform-origin:50% 100%;animation:rkvu .9s ease-in-out infinite}' +
    '@keyframes rkwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.rk-wv{animation:rkwave 3.4s ease-in-out infinite}.rk-wv2{animation-delay:-1.7s}' +
    '@keyframes rksun{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.rk-sun{transform-box:fill-box;transform-origin:50% 50%;animation:rksun 3s ease-in-out infinite}' +
    '@keyframes rkpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rk-palm{transform-box:fill-box;transform-origin:50% 100%;animation:rkpalm 3.8s ease-in-out infinite}' +
    '@keyframes rksig{0%{opacity:0;transform:scale(.4)}50%{opacity:1}100%{opacity:0;transform:scale(1.4)}}.rk-sig{transform-box:fill-box;transform-origin:0% 50%;animation:rksig 1.6s ease-out infinite}.rk-sig2{animation-delay:-.8s}' +
    '@keyframes rkback{0%,20%{transform:translateX(0)}60%,80%{transform:translateX(-26px)}100%{transform:translateX(0)}}.rk-back{animation:rkback 5s ease-in-out infinite}' +
    '@keyframes rkspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rk-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rkspin 14s linear infinite}' +
    '@keyframes rkcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.rk-car{animation:rkcar 6.5s linear infinite}' +
    '@keyframes rktw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.rk-tw{transform-box:fill-box;transform-origin:50% 50%;animation:rktw 1.8s ease-in-out infinite}.rk-tw2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const RED = "#ce242b", GOLDL = "#d4a723", GOLD = "#e8c060", BLUE = "#4fb6e3";

  /* 1. MARTA Peachtree Center: underground, the station walls are the bare granite it was blasted out of */
  function rkstation() {
    const rocks = [[0, 44, 70, 30], [60, 40, 80, 36], [130, 46, 60, 28], [180, 38, 90, 34], [262, 44, 70, 30], [320, 40, 80, 36],
      [0, 72, 50, 38], [44, 78, 66, 32], [300, 74, 60, 36], [350, 70, 50, 40]].map((r, i) =>
      '<path d="M' + r[0] + ' ' + (r[1] + 6) + 'l' + (r[2] * .3) + ' -6l' + (r[2] * .45) + ' 3l' + (r[2] * .25) + ' 5v' + (r[3] - 8) + 'l-' + (r[2] * .4) + ' 4l-' + (r[2] * .6) + ' -3z" fill="' + ["#6e6a66", "#5f5b58", "#7a746e", "#66615c"][i % 4] + '" stroke="#4a4642" stroke-width="1"/>').join("");
    const tr = '<g class="anim-train"><rect x="20" y="112" width="340" height="74" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 54) + '" y="124" width="38" height="26" rx="3" fill="#26323c"/>').join("") +
      '<rect x="20" y="160" width="340" height="6" fill="' + RED + '"/><rect x="20" y="166" width="340" height="4" fill="' + GOLDL + '"/>' +
      '<rect x="150" y="122" width="24" height="56" rx="2" fill="#8d959c"/><rect x="214" y="122" width="24" height="56" rx="2" fill="#8d959c"/>' +
      '<rect x="24" y="114" width="64" height="8" rx="2" fill="#111"/><text x="56" y="120.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">AIRPORT</text>' +
      '<circle cx="28" cy="176" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rk1)"/>' +
      '<path d="M0 0h400v40q-200 22 -400 0z" fill="#3a3f46"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (20 + i * 50) + '" y="16" width="30" height="5" rx="2" fill="#fff8d8" class="' + (i % 3 ? "" : "rk-bl") + '"/>').join("") +
      '<rect x="0" y="40" width="400" height="72" fill="#55514d"/>' + rocks +
      '<rect x="112" y="54" width="186" height="44" rx="3" fill="#111" stroke="#555" stroke-width="2"/>' +
      '<text x="190" y="74" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">PEACHTREE</text>' +
      '<text x="190" y="91" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">CENTER</text>' +
      '<circle cx="272" cy="66" r="9" fill="' + RED + '"/><text x="272" y="69.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RED</text>' +
      '<circle cx="272" cy="86" r="9" fill="' + GOLDL + '"/><text x="272" y="89" text-anchor="middle" ' + font + ' font-size="6" fill="#111">GOLD</text>' +
      '<text x="200" y="107" text-anchor="middle" ' + font + ' font-size="7" fill="#f2efe6">DOWNTOWN · MARTA</text>' +
      tr +
      '<rect x="0" y="186" width="400" height="10" fill="#e8c35a"/><rect x="0" y="196" width="400" height="64" fill="#6b6560"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42) + '" y="186" width="20" height="10" fill="#f2d27a"/>').join("") +
      '<rect x="40" y="208" width="6" height="40" fill="#2f2f2f"/><rect x="354" y="208" width="6" height="40" fill="#2f2f2f"/>',
      sky("rk1", "#2a2e36", "#4a4f58"));
  }

  /* 2. "Dis Morning": the studio at night, the clock flashing ten, meters bouncing */
  function rkstudio() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect x="' + (74 + i * 22) + '" y="150" width="12" height="34" rx="2" fill="' + (i % 4 === 3 ? RED : i % 2 ? GOLD : "#6fd38a") + '" class="rk-vu" style="animation-delay:-' + (i * .13).toFixed(2) + 's"/>').join("");
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (66 + i * 20) + '" y="202" width="4" height="30" fill="#222"/><rect x="' + (62 + i * 20) + '" y="' + (206 + (i * 7) % 18) + '" width="12" height="6" rx="1" fill="#d8d8de"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rk2)"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="120" fill="#2a2230" stroke="#1c1622" stroke-width="2"/>').join("") +
      '<rect x="140" y="20" width="120" height="60" rx="4" fill="#0e1a14" stroke="#3a3a44" stroke-width="3"/>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="34" fill="#ff4a3a" class="rk-bl">10:00</text>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LEFT AT 7 · NAP 3 HRS · BACK AT 10</text>' +
      '<rect x="20" y="30" width="80" height="70" rx="3" fill="#1a1a1f" stroke="' + GOLD + '" stroke-width="2"/><circle cx="60" cy="62" r="24" fill="' + GOLD + '"/><circle cx="60" cy="62" r="7" fill="#1a1a1f"/>' +
      '<rect x="300" y="30" width="80" height="70" rx="3" fill="#1a1a1f" stroke="#c9c9d2" stroke-width="2"/><circle cx="340" cy="62" r="24" fill="#d8d8de"/><circle cx="340" cy="62" r="7" fill="#1a1a1f"/>' +
      '<path d="M40 140h320l20 100h-360z" fill="#2a2a32"/>' +
      '<rect x="60" y="144" width="280" height="46" rx="3" fill="#151518"/>' + meters + faders +
      '<rect x="0" y="240" width="400" height="20" fill="#120e14"/>',
      sky("rk2", "#191320", "#2d2236"));
  }

  /* 3. "Squares Out Your Circle": Belize at noon, midnight back in Georgia */
  function rkbelize() {
    const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="rk-palm"><path d="M0 0q6 -50 -4 -100" stroke="#8a6a3e" stroke-width="8" fill="none"/>' +
      [[-46, -96], [-30, -122], [10, -126], [42, -104], [46, -82], [-40, -78]].map(p => '<path d="M-4 -100q' + (p[0] / 2) + ' ' + ((p[1] + 100) / 2 - 16) + ' ' + p[0] + ' ' + (p[1] + 100) + '" stroke="#2f8a4a" stroke-width="9" fill="none" stroke-linecap="round"/>').join("") + '</g></g>';
    const bag = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + c + '" stroke="#2a1d12" stroke-width="2"/><rect x="' + (x + w / 2 - 7) + '" y="' + (y - 6) + '" width="14" height="7" rx="2" fill="none" stroke="#2a1d12" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#rk3)"/>' +
      '<g class="rk-sun"><circle cx="200" cy="40" r="24" fill="#ffe36a"/><circle cx="200" cy="40" r="34" fill="#ffe36a" opacity=".25"/></g>' +
      '<rect x="0" y="120" width="400" height="70" fill="#22b7c4"/>' +
      '<g class="rk-wv"><path d="M-20 140q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff2f4" stroke-width="3" fill="none"/></g>' +
      '<g class="rk-wv rk-wv2"><path d="M-20 164q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e6fbfb" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#efd9a0"/>' +
      '<path d="M200 186l60 -66h120v14h-110l-54 52z" fill="#8a6a3e"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (262 + i * 20) + '" y="134" width="4" height="40" fill="#6a4e2c"/>').join("") +
      palm(70, 200, 1) + palm(30, 214, .7) +
      bag(250, 206, 46, 34, RED) + bag(300, 214, 40, 26, GOLD) + bag(270, 176, 34, 30, "#3a6bd6") + bag(320, 190, 30, 24, "#2f8a4a") +
      '<rect x="120" y="194" width="110" height="42" rx="3" fill="#fff" stroke="#2a1d12" stroke-width="2"/>' +
      '<text x="175" y="211" text-anchor="middle" ' + font + ' font-size="10" fill="#2a1d12">BELIZE · NOON</text>' +
      '<text x="175" y="228" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '">GEORGIA · 12 AM</text>' +
      '<rect x="173" y="236" width="4" height="20" fill="#6a4e2c"/>',
      sky("rk3", "#3aa6e6", "#bfe8f6"));
  }

  /* 4. "Umma Do Me": the garage, the car that talks back, the monster truck too tall to tow */
  function rkgarage() {
    return svg(
      '<rect width="400" height="260" fill="url(#rk4)"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (10 + i * 80) + '" y="14" width="60" height="6" rx="2" fill="#fff8d8" class="' + (i % 2 ? "rk-bl" : "rk-bl rk-bl2") + '"/>').join("") +
      /* monster truck in back */
      '<g><circle cx="262" cy="170" r="30" fill="#151515"/><circle cx="262" cy="170" r="12" fill="#6b6b70"/><circle cx="352" cy="170" r="30" fill="#151515"/><circle cx="352" cy="170" r="12" fill="#6b6b70"/>' +
      '<rect x="236" y="96" width="146" height="50" rx="6" fill="#2a2a30"/><path d="M262 96l14 -30h58l18 30z" fill="#2a2a30"/><path d="M282 72h22v22h-32z" fill="#7ec8e8"/><path d="M308 72h22l14 22h-36z" fill="#7ec8e8"/>' +
      '<rect x="236" y="134" width="146" height="8" fill="' + GOLD + '"/><path d="M246 146v-8M372 146v-8" stroke="#888" stroke-width="4"/></g>' +
      /* the two-door, backing out */
      '<g class="rk-back"><rect x="40" y="170" width="170" height="40" rx="14" fill="' + RED + '"/><path d="M78 172q16 -34 44 -34h26q22 0 38 34z" fill="#a01c22"/>' +
      '<path d="M92 170q12 -24 34 -24h18v24z" fill="#7ec8e8"/><path d="M150 146h4q16 0 26 24h-30z" fill="#7ec8e8"/>' +
      '<circle cx="80" cy="212" r="16" fill="#111"/><circle cx="80" cy="212" r="7" fill="#d8d8de"/><circle cx="172" cy="212" r="16" fill="#111"/><circle cx="172" cy="212" r="7" fill="#d8d8de"/>' +
      '<circle cx="204" cy="184" r="5" fill="#fff6c2" class="rk-bl"/><rect x="38" y="182" width="8" height="6" rx="2" fill="#ffb84a"/></g>' +
      /* the car talks back */
      '<path d="M120 82h96a10 10 0 0 1 10 10v26a10 10 0 0 1 -10 10h-60l-18 16v-16h-18a10 10 0 0 1 -10 -10v-26a10 10 0 0 1 10 -10z" fill="#fff" stroke="#2a2a30" stroke-width="2"/>' +
      '<text x="168" y="103" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a30">I TALK TO THE CAR,</text><text x="168" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '">THE CAR TALK BACK</text>' +
      /* key fob auto-start */
      '<rect x="22" y="70" width="24" height="40" rx="8" fill="#1d1d22" stroke="' + GOLD + '" stroke-width="2"/><circle cx="34" cy="84" r="4" fill="' + RED + '"/><circle cx="34" cy="98" r="3" fill="#888"/>' +
      '<g class="rk-sig"><path d="M52 80q8 10 0 20" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g><g class="rk-sig rk-sig2"><path d="M60 74q14 16 0 32" stroke="' + GOLD + '" stroke-width="3" fill="none"/></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3a40"/><path d="M0 228h400" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="20 14"/>',
      sky("rk4", "#1b1c22", "#3a3c46"));
  }

  /* 5. Peachtree St NE and John Portman Blvd NE, the Hyatt Regency's blue saucer dome behind */
  function rkcorner() {
    const hyatt = '<g><rect x="168" y="56" width="64" height="130" fill="#d9d2c4"/>' +
      Array.from({ length: 12 }, (_, r) => '<rect x="172" y="' + (62 + r * 10) + '" width="56" height="4" fill="#8a8478"/>').join("") +
      '<rect x="186" y="40" width="28" height="18" fill="#cfc7b8"/>' +
      '<ellipse cx="200" cy="34" rx="34" ry="10" fill="' + BLUE + '" stroke="#1d5e86" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<circle cx="' + (176 + i * 8) + '" cy="36" r="1.8" fill="#fff6c2" class="rk-bl' + (i % 2 ? ' rk-bl2' : '') + '"/>').join("") +
      '<path d="M174 34q26 -26 52 0z" fill="#3f9cd0" stroke="#1d5e86" stroke-width="2"/><rect x="198" y="2" width="4" height="10" fill="#d8d8de"/></g>';
    const city = '<g fill="#2a2f3c">' + [[0, 76, 40], [44, 50, 30], [80, 90, 40], [126, 70, 34], [250, 64, 36], [292, 84, 40], [338, 52, 30], [372, 88, 28]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (186 - b[1]) + '"/>').join("") + '</g>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + [8, 22, 52, 60, 88, 104, 132, 146, 258, 272, 300, 314, 344, 352, 378, 386][i] + '" y="' + (100 + (i * 13) % 60) + '" width="4" height="5" fill="#ffe7a0" class="' + (i % 3 ? "" : "rk-bl") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rk5)"/>' +
      city + hyatt +
      '<rect x="0" y="134" width="400" height="90" fill="#4a3a32"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#3a2d26" stroke-width="1"/>').join("") +
      tag("ROCKO", 20, 180, 42, GOLD, -5) + tag("A1", 190, 170, 30, RED, -8) + tag("U.O.E.N.O.", 30, 214, 22, "#fff", -3) + tag("DA DON", 170, 214, 20, BLUE, -4) +
      '<g class="rk-tw"><path d="M262 168l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + GOLD + '"/></g><g class="rk-tw rk-tw2"><path d="M150 146l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="rk-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + GOLD + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#b8902e"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="366" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 124, "Peachtree St NE") + sign(260, 124, 136, "John Portman Blvd NE"),
      sky("rk5", "#1d2340", "#c86a4a"));
  }

  window.SCENES = { rkstation: rkstation, rkstudio: rkstudio, rkbelize: rkbelize, rkgarage: rkgarage, rkcorner: rkcorner };
})();
