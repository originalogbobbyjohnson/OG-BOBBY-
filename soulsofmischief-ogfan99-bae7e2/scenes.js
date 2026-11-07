/* soulsofmischief scenes (Regions tab: The Bay Area; East Oakland). Souls of Mischief = A-Plus, Opio, Phesto, Tajai (Hieroglyphics).
   CSS classes prefixed sm- (the page's own anim-train slides the bus in).
   1 Tempo 82nd Av station: the AC Transit 1T bus rapid transit platform in the middle of International Blvd, red bus-only lanes, the long articulated bus sliding in (Opio's mother lived by 82nd Ave).
   2 Skyline High School up in the Oakland hills (Opio and A-Plus's school, with Del, Casual and Pep Love): low tan hillside campus, redwoods, the bay and fog below.
   3 The Henry J. Kaiser Convention Center (Oakland Municipal Auditorium) on Lake Merritt, one of the two big Oakland rooms for hip-hop shows when they were kids: pale granite Beaux-Arts front, arched bays, sculpted panels, spotlights.
   4 The Souls of Mischief mural at High St and Watting St (High Street Studios): speakers, equalizer bars, orbs, sunstars, flowers and cables drawn on the wall (no faces).
   5 MacArthur Blvd and 82nd Av (by Castlemont, A-Plus's first high school): green signs, SOULS tagged, the round Oakland Arena lit up down in the flats behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes smcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.sm-car{animation:smcar 6s linear infinite}.sm-car2{animation-delay:-3s}' +
    '@keyframes smcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.sm-carL{animation:smcarL 7s linear infinite}' +
    '@keyframes smflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.sm-flk{animation:smflick 2.4s infinite}.sm-flk2{animation-delay:.8s}' +
    '@keyframes smfog{0%,100%{transform:translateX(0)}50%{transform:translateX(-40px)}}.sm-fog{animation:smfog 9s ease-in-out infinite}.sm-fog2{animation-delay:-4.5s}' +
    '@keyframes smsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sm-sw{transform-box:fill-box;transform-origin:50% 100%;animation:smsweep 4s ease-in-out infinite}.sm-sw2{animation-delay:-2s}' +
    '@keyframes smeq{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.sm-eq{transform-box:fill-box;transform-origin:50% 100%;animation:smeq .9s ease-in-out infinite}' +
    '@keyframes smpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.sm-pl{transform-box:fill-box;transform-origin:50% 50%;animation:smpulse 1.2s ease-in-out infinite}.sm-pl2{animation-delay:-.6s}' +
    '@keyframes smspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:smspin 10s linear infinite}' +
    '@keyframes smglow{0%,100%{opacity:.55}50%{opacity:1}}.sm-glow{animation:smglow 2.6s ease-in-out infinite}' +
    '@keyframes smspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sm-sp{animation:smspray 1.4s ease-out infinite}.sm-sp2{animation-delay:.45s}' +
    '@keyframes smbird{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.sm-bird{animation:smbird 12s linear infinite}.sm-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c, flip) => '<g class="' + cls + '"><g' + (flip ? ' transform="translate(' + (2 * x + 58) + ',0) scale(-1,1)"' : '') + '><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 56) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g></g>';
  const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    [-50, -20, 10, 40, 160, 200].map(a => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (Math.cos(a * Math.PI / 180) * 14) + ' ' + (Math.sin(a * Math.PI / 180) * 10 - 6) + ' ' + (Math.cos(a * Math.PI / 180) * 24) + ' ' + (Math.sin(a * Math.PI / 180) * 16 + 4) + '" stroke="#2f7a3a" stroke-width="3" fill="none" stroke-linecap="round"/>').join("");
  const TEMPO = "#00843d", GOLD = "#f2b134", SKY = "#7cc4e8", ORG = "#e2603a";

  /* 1. Tempo 82nd Av: median platform on International Blvd, red bus lanes, the articulated 1T bus sliding in */
  function smstation() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (48 + i * 36) + '" y="96" width="26" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="88" width="320" height="50" rx="8" fill="#f4f6f4" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="122" width="320" height="6" fill="' + TEMPO + '"/><rect x="30" y="128" width="320" height="3" fill="#1d4f8e"/>' +
      '<rect x="186" y="90" width="8" height="46" fill="#3a3e46"/>' +
      '<path d="M336 90q14 2 14 18v20h-16z" fill="#1f2a33"/><rect x="338" y="94" width="10" height="8" rx="1" fill="#111"/><text x="343" y="101" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">1T</text>' +
      '<circle cx="80" cy="140" r="8" fill="#111"/><circle cx="160" cy="140" r="8" fill="#111"/><circle cx="300" cy="140" r="8" fill="#111"/><circle cx="346" cy="128" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sms1)"/>' +
      '<path d="M0 70l60 -22l60 10l80 -26l70 18l70 -12l60 20v20H0z" fill="#4b5a3e" opacity=".8"/>' +
      palm(30, 150, 80) + palm(372, 150, 90) +
      /* glass canopy over the median platform */
      '<rect x="40" y="52" width="320" height="8" fill="#9fb4c0"/><rect x="40" y="60" width="320" height="3" fill="#5a6a74"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="84" fill="#5a6a74"/>').join("") +
      '<g class="sm-flk"><rect x="100" y="63" width="40" height="3" fill="#fff3c4"/></g><g class="sm-flk sm-flk2"><rect x="260" y="63" width="40" height="3" fill="#fff3c4"/></g>' +
      bus +
      '<rect x="0" y="146" width="400" height="8" fill="#c9c3b6"/><rect x="0" y="144" width="400" height="3" fill="#f2c200"/>' +
      /* International Blvd: red bus-only lane plus traffic lanes */
      '<rect x="0" y="154" width="400" height="106" fill="#3a3b40"/><rect x="0" y="154" width="400" height="22" fill="#a8322a"/>' +
      '<text x="120" y="170" ' + font + ' font-size="11" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text><text x="300" y="170" ' + font + ' font-size="11" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text>' +
      '<path d="M0 210h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("sm-car", 0, 194, "#c94a3a") + car("sm-car sm-car2", 0, 194, GOLD) + car("sm-carL", 0, 238, "#2f6fa8", true) +
      /* station sign */
      '<rect x="96" y="14" width="208" height="30" rx="3" fill="#111"/><text x="110" y="35" ' + font + ' font-size="16" fill="#fff">82nd Av</text>' + badge(184, 29, "1T", TEMPO) + badge(222, 29, "TEMPO", "#1d4f8e"),
      sky("sms1", "#2a3a6a", "#f0a464"));
  }

  /* 2. Skyline High School: tan hillside campus, redwoods, the bay and the fog far below */
  function smskyline() {
    const redwood = (x, y, h) => '<rect x="' + (x - 3) + '" y="' + (y - 12) + '" width="6" height="14" fill="#6b3a24"/><path d="M' + x + ' ' + (y - h) + 'l-14 ' + (h - 10) + 'h28z" fill="#1f4a2e"/><path d="M' + x + ' ' + (y - h + 10) + 'l-10 ' + (h - 26) + 'h20z" fill="#2a5e3a"/>';
    const wins = (x, y, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * 18) + '" y="' + y + '" width="12" height="12" fill="#2b4a5a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sms2)"/>' +
      /* the bay far below */
      '<rect x="0" y="94" width="400" height="30" fill="#6fa4c4"/><path d="M0 102h400" stroke="#9cc6dc" stroke-width="1" opacity=".6"/>' +
      '<path d="M0 98l40 -6h60l30 4h80l40 -6h60l50 6l40 -2v8H0z" fill="#6b7a8a" opacity=".7"/>' +
      '<g class="sm-fog"><ellipse cx="90" cy="104" rx="90" ry="10" fill="#f2f4f6" opacity=".7"/></g><g class="sm-fog sm-fog2"><ellipse cx="300" cy="100" rx="100" ry="9" fill="#f2f4f6" opacity=".6"/></g>' +
      /* the ridge */
      '<path d="M0 124q100 -20 200 -6t200 -4v146H0z" fill="#8a7a3a"/><path d="M0 150q120 -14 400 -6v116H0z" fill="#6b6a2e"/>' +
      redwood(30, 160, 90) + redwood(56, 166, 70) + redwood(360, 160, 96) + redwood(384, 168, 70) +
      /* low tan campus buildings */
      '<rect x="80" y="140" width="240" height="56" fill="#d8c8a0"/><rect x="80" y="134" width="240" height="8" fill="#a8946a"/>' + wins(92, 150, 6) + wins(214, 150, 6) +
      '<rect x="180" y="118" width="70" height="78" fill="#cbb98e"/><rect x="180" y="112" width="70" height="8" fill="#a8946a"/>' + wins(190, 128, 3) +
      '<rect x="196" y="164" width="38" height="32" fill="#3a4a5a"/>' +
      '<rect x="110" y="200" width="180" height="24" rx="2" fill="#1d2f6a"/><text x="200" y="217" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="2">SKYLINE HIGH</text>' +
      '<rect x="0" y="230" width="400" height="30" fill="#4a5a2e"/>' +
      /* flagpole */
      '<rect x="330" y="96" width="3" height="100" fill="#cfd4da"/><g class="sm-sw" style="transform-origin:331px 100px"><path d="M333 98h26v14h-26z" fill="#1d2f6a"/><path d="M333 102h26M333 108h26" stroke="' + GOLD + '" stroke-width="2"/></g>' +
      '<g class="sm-bird"><path d="M10 60q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.5" fill="none"/></g><g class="sm-bird sm-bird2"><path d="M0 44q4 -4 8 0q4 -4 8 0" stroke="#2a2a2a" stroke-width="1.5" fill="none"/></g>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2f6a">SKYLINE BLVD · THE OAKLAND HILLS</text>',
      sky("sms2", "#9cc8e4", "#f2e6c8"));
  }

  /* 3. Henry J. Kaiser Convention Center: pale granite front on the lake, arched bays, sculpted panels, spotlights */
  function smkaiser() {
    const bays = Array.from({ length: 7 }, (_, i) => {
      const x = 70 + i * 38;
      return '<path d="M' + x + ' 170v-50q13 -16 26 0v50z" fill="#2a3a4a"/><g class="sm-glow"><path d="M' + (x + 3) + ' 168v-44q10 -12 20 0v44z" fill="#f2c46a" opacity=".55"/></g>' +
        '<rect x="' + (x - 2) + '" y="76" width="30" height="30" fill="#d8d0bc" stroke="#b8ae96" stroke-width="1.5"/><circle cx="' + (x + 13) + '" cy="91" r="9" fill="none" stroke="#a89c80" stroke-width="2"/><path d="M' + (x + 7) + ' 96q6 -12 12 0" stroke="#a89c80" stroke-width="2" fill="none"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sms3)"/>' +
      '<g class="sm-sw"><path d="M120 196l-40 -190h22z" fill="#fff3c4" opacity=".18"/></g><g class="sm-sw sm-sw2"><path d="M280 196l40 -190h-22z" fill="#fff3c4" opacity=".18"/></g>' +
      '<rect x="50" y="60" width="300" height="130" fill="#e8e2d2"/><rect x="44" y="52" width="312" height="12" fill="#d4ccb8"/><rect x="40" y="46" width="320" height="8" fill="#c4bca6"/>' +
      bays +
      '<rect x="50" y="110" width="300" height="6" fill="#d4ccb8"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="11" fill="#f2e6d8" letter-spacing="3">OAKLAND AUDITORIUM</text>' +
      '<rect x="40" y="188" width="320" height="10" fill="#cfc8b4"/><rect x="30" y="196" width="340" height="8" fill="#bfb8a4"/>' +
      /* Lake Merritt in front */
      '<rect x="0" y="206" width="400" height="54" fill="#2a4a6a"/>' +
      '<g class="sm-fog"><path d="M20 222h60M150 232h80M290 220h70M60 246h90M250 250h80" stroke="#f2c46a" stroke-width="2" opacity=".5"/></g>' +
      '<g fill="#f7efe0">' + Array.from({ length: 16 }, (_, i) => '<circle cx="' + (12 + i * 25) + '" cy="208" r="2"/>').join("") + '</g>' +
      palm(16, 206, 70) + palm(386, 206, 76),
      sky("sms3", "#141a3a", "#5a3a6a"));
  }

  /* 4. The mural at High St and Watting St: speakers, equalizer bars, orbs, sunstars, flowers, cables (no faces) */
  function smmural() {
    const eq = Array.from({ length: 10 }, (_, i) => '<rect class="sm-eq" style="animation-delay:-' + (i * 0.13).toFixed(2) + 's" x="' + (150 + i * 12) + '" y="74" width="8" height="56" fill="' + [GOLD, ORG, "#e2508a", SKY, "#7ad07a"][i % 5] + '"/>').join("");
    const spk = (x, y, r) => '<rect x="' + (x - r - 6) + '" y="' + (y - r - 6) + '" width="' + (2 * r + 12) + '" height="' + (2 * r + 12) + '" rx="4" fill="#2a2030"/><g class="sm-pl"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#4a3a5a"/><circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.5) + '" fill="#1a1420"/></g>';
    const star = (x, y, r, c) => '<g class="sm-spin" style="transform-origin:' + x + 'px ' + y + 'px">' + Array.from({ length: 8 }, (_, i) => '<path d="M' + x + ' ' + y + 'l' + (Math.cos(i * Math.PI / 4) * r).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 4) * r).toFixed(1) + '" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.45) + '" fill="' + c + '"/></g>';
    const flower = (x, y, c) => Array.from({ length: 5 }, (_, i) => '<circle cx="' + (x + Math.cos(i * 1.257) * 6).toFixed(1) + '" cy="' + (y + Math.sin(i * 1.257) * 6).toFixed(1) + '" r="4.5" fill="' + c + '"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="3" fill="#f2e04a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sms4)"/>' +
      /* the studio building wall with the mural */
      '<rect x="20" y="30" width="360" height="176" fill="url(#sms4w)"/>' +
      '<path d="M20 30h360" stroke="#2a2030" stroke-width="4"/>' +
      star(60, 64, 22, GOLD) + star(340, 70, 18, ORG) +
      '<g class="sm-glow"><circle cx="110" cy="150" r="20" fill="' + SKY + '" opacity=".75"/><circle cx="300" cy="150" r="16" fill="#e2508a" opacity=".75"/><circle cx="210" cy="176" r="12" fill="' + GOLD + '" opacity=".75"/></g>' +
      spk(110, 92, 22) + spk(300, 100, 24) +
      '<rect x="144" y="66" width="128" height="70" rx="4" fill="#1a1420" opacity=".85"/>' + eq +
      /* cables turning into roots */
      '<path d="M110 120q0 40 -40 60t-30 20M300 128q10 40 50 50t20 20M210 136q0 30 -20 50" stroke="#2a8a7a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      flower(48, 120, "#e2508a") + flower(360, 130, SKY) + flower(160, 190, ORG) + flower(262, 186, "#e2508a") +
      '<rect x="0" y="206" width="400" height="10" fill="#cfc8b8"/><rect x="0" y="216" width="400" height="44" fill="#3a3b40"/>' +
      '<path d="M0 238h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g transform="translate(320 160)"><rect x="0" y="0" width="5" height="56" fill="#4a4a4a"/></g>' + sign(272, 156, 100, "High St") + sign(282, 182, 82, "Watting St") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0">HIGH ST &amp; WATTING ST · EAST OAKLAND</text>',
      sky("sms4", "#1a2a5a", "#e8945a") + '<linearGradient id="sms4w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a2a6a"/><stop offset=".5" stop-color="#c94a6a"/><stop offset="1" stop-color="#f2a64a"/></linearGradient>');
  }

  /* 5. MacArthur Blvd and 82nd Av: green signs, SOULS tagged, the round Oakland Arena lit up in the flats behind */
  function smcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sms5)"/>' +
      /* the round arena drum with its ring of lights */
      '<ellipse cx="200" cy="112" rx="110" ry="18" fill="#c9ced6"/><rect x="90" y="112" width="220" height="34" fill="#9aa4b0"/><ellipse cx="200" cy="146" rx="110" ry="14" fill="#7a8490"/>' +
      '<g class="sm-glow">' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (98 + i * 15) + '" y="120" width="8" height="18" fill="#f2d46a"/>').join("") + '</g>' +
      '<path d="M90 112q110 -30 220 0" stroke="#e8ecf0" stroke-width="2" fill="none"/>' +
      '<g fill="#2a2f3a"><rect x="0" y="120" width="70" height="40"/><rect x="330" y="116" width="70" height="44"/></g>' +
      '<g class="sm-bird"><path d="M10 50q5 -5 10 0q5 -5 10 0" stroke="#f2e6d8" stroke-width="1.5" fill="none"/></g>' +
      /* the wall */
      '<rect x="0" y="146" width="290" height="82" fill="#6a4a3a"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (162 + r * 15) + 'h290" stroke="#5a3a2c" stroke-width="1"/>').join("") +
      tag("SOULS", 16, 204, 46, GOLD, -6) + tag("TIL INFINITY", 150, 216, 17, SKY, -4) + tag("S.O.M.", 170, 178, 22, ORG, -8) +
      '<g class="sm-sp"><circle cx="270" cy="186" r="3" fill="' + GOLD + '"/></g><g class="sm-sp sm-sp2"><circle cx="276" cy="192" r="2.4" fill="' + SKY + '"/></g>' +
      '<rect x="268" y="190" width="10" height="20" rx="2" fill="#d8d8d8"/><rect x="270" y="184" width="6" height="7" fill="#3a3a3a"/>' +
      '<rect x="330" y="96" width="5" height="132" fill="#4a4a4a"/>' + sign(290, 96, 102, "MacArthur Blvd") + sign(304, 122, 72, "82nd Av") +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3b40"/><rect x="0" y="226" width="400" height="4" fill="#cfc8b8"/>' +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f7efe0">MACARTHUR &amp; 82ND · EAST OAKLAND</text>',
      sky("sms5", "#1a1f3a", "#8a4a5a"));
  }

  window.SCENES = { smstation, smskyline, smkaiser, smmural, smcorner };
})();
