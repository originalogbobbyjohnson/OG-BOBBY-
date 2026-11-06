/* Jay-Z game (NYC map, Brooklyn: Bed-Stuy, the Marcy Houses). The G at Flushing Av (underground on the Crosstown line, right by Marcy),
   the Broadway house on W 52nd St where the musical with "Hard Knock Life" first opened (marquee lit up with the song),
   the Brooklyn Navy Yard on Wallabout Bay a few blocks from Marcy (crane, dry dock, ship), the Williamsburg waterfront at
   East River State Park at night with the "concrete jungle" across the water (Empire State of Mind), and Marcy Av & Flushing Av
   with the old brick factory and its chimney behind. 400 x 260 SVGs. All CSS classes are prefixed "jz-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jzcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.jz-car{animation:jzcar 7s linear infinite}.jz-car2{animation-delay:-3.5s}' +
    '@keyframes jzcarl{from{transform:translateX(480px)}to{transform:translateX(-90px)}}.jz-carl{animation:jzcarl 8s linear infinite}' +
    '@keyframes jzblink{0%,100%{opacity:.25}50%{opacity:1}}.jz-bl{animation:jzblink 1.8s ease-in-out infinite}.jz-bl2{animation-delay:.6s}.jz-bl3{animation-delay:1.2s}' +
    '@keyframes jzchase{0%,100%{opacity:.3}33%{opacity:1}}.jz-ch{animation:jzchase .9s linear infinite}.jz-ch2{animation-delay:.3s}.jz-ch3{animation-delay:.6s}' +
    '@keyframes jzflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.jz-flk{animation:jzflick 2.6s infinite}' +
    '@keyframes jzswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.jz-hook{transform-box:view-box;transform-origin:262px 58px;animation:jzswing 3s ease-in-out infinite}' +
    '@keyframes jzgull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.jz-gull{animation:jzgull 9s linear infinite}.jz-gull2{animation-delay:-4s}' +
    '@keyframes jzwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.jz-wave{animation:jzwave 2.4s ease-in-out infinite}.jz-wave2{animation-delay:-1.2s}' +
    '@keyframes jzferry{from{transform:translateX(430px)}to{transform:translateX(-120px)}}.jz-ferry{animation:jzferry 14s linear infinite}' +
    '@keyframes jzsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(18px,-46px) scale(1.6);opacity:0}}.jz-smk{transform-box:fill-box;transform-origin:50% 50%;animation:jzsmoke 3.2s linear infinite}.jz-smk2{animation-delay:-1.1s}.jz-smk3{animation-delay:-2.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#d4af37", CREAM = "#f4ead8", GGREEN = "#6cbe45", BRICK = "#8e3b2a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Flushing Av on the G, underground: cream tile wall with the green trim band, the black sign with the G bullet, the G sliding in */
  function flushing() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe9da"/>';
    let band = "";
    for (let x = 0; x < 400; x += 12) band += '<rect x="' + x + '" y="36" width="10" height="10" fill="' + (x % 24 ? "#5aa83c" : "#3f7f2a") + '"/>';
    let win = "";
    for (let x = 34; x < 270; x += 36) win += '<rect x="' + x + '" y="114" width="24" height="20" rx="2" fill="#d8e8f6" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#d6cfbe"/>' + tiles +
      '<rect x="0" y="34" width="400" height="14" fill="#2d5f22"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2d"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="jz-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="70" y="58" width="260" height="32" rx="3" fill="#111"/><rect x="70" y="58" width="260" height="3" fill="#fff"/>' +
      '<text x="86" y="80" ' + font + ' font-size="15" fill="#fff">Flushing Av</text>' + bullet(306, 74, "G", GGREEN) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#4a4f57"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c8ccd3" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#d8e8f6"/>' + bullet(298, 148, "G", GGREEN) +
        '<rect x="10" y="140" width="280" height="4" fill="' + GGREEN + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#e8b40c"/><rect x="0" y="170" width="400" height="90" fill="#5a5752"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(334, 196, "#1b1b1b") + person(356, 200, "#2a2a2a") +
      txt("CROSSTOWN · BED-STUY", 150, 236, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. The Broadway house on W 52nd St at night: red brick, white trim and columns, the marquee chasing with HARD KNOCK LIFE, a cab rolling by */
  function annie() {
    let brick = "";
    for (let y = 40; y < 206; y += 8) for (let x = (y / 8) % 2 ? 70 : 62; x < 330; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#7a3324"/>';
    let bulbs = "";
    for (let x = 80; x <= 320; x += 10) bulbs += '<circle class="jz-ch jz-ch' + ((x / 10) % 3 + 1) + '" cx="' + x + '" cy="132" r="2.3" fill="#ffe9a0"/><circle class="jz-ch jz-ch' + (((x / 10) + 1) % 3 + 1) + '" cx="' + x + '" cy="168" r="2.3" fill="#ffe9a0"/>';
    let wins = "";
    [96, 150, 250, 304].forEach(x => { wins += '<rect x="' + (x - 12) + '" y="58" width="24" height="40" fill="#f2d79a" opacity=".85"/><rect x="' + (x - 14) + '" y="56" width="28" height="4" fill="#f4f1ea"/><path d="M' + x + ' 58v40M' + (x - 12) + ' 78h24" stroke="#f4f1ea" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#jza)"/>' + stars(18) +
      '<rect x="0" y="70" width="60" height="140" fill="#1c1a24"/><rect x="340" y="56" width="60" height="154" fill="#1c1a24"/>' +
      [10, 30, 350, 372].map((x, i) => '<rect class="jz-bl jz-bl' + (i % 3 + 1) + '" x="' + x + '" y="' + (90 + i * 6) + '" width="8" height="10" fill="#ffd98a"/>').join("") +
      '<rect x="62" y="36" width="276" height="174" fill="' + BRICK + '"/>' + brick +
      '<path d="M62 36h276v8H62z" fill="#f4f1ea"/><path d="M150 36l50 -22l50 22z" fill="#f4f1ea"/><circle cx="200" cy="27" r="5" fill="#d9d2c4"/>' +
      wins +
      [130, 170, 230, 270].map(x => '<rect x="' + (x - 4) + '" y="44" width="8" height="78" fill="#f4f1ea"/>').join("") +
      /* marquee */
      '<rect x="74" y="126" width="252" height="48" rx="3" fill="#120d14" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      txt("HARD KNOCK LIFE", 200, 157, 20, "#fff3c4", 'letter-spacing="1"') +
      '<rect x="78" y="174" width="244" height="6" fill="#2a1d14"/>' +
      '<rect x="160" y="180" width="80" height="30" fill="#2a1d14"/>' + [172, 200, 228].map(x => '<rect x="' + (x - 10) + '" y="184" width="20" height="26" fill="#f2d79a" opacity=".7"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><rect x="0" y="210" width="400" height="4" fill="#6b6b72"/>' +
      '<path d="M0 238h400" stroke="#d7c46a" stroke-width="2" stroke-dasharray="14 12"/>' +
      '<g class="jz-car"><rect x="0" y="222" width="52" height="16" rx="4" fill="#f2c80f"/><rect x="10" y="216" width="28" height="9" rx="2" fill="#f2c80f"/><rect x="14" y="218" width="20" height="5" fill="#9cc3e6"/><circle cx="12" cy="239" r="5" fill="#111"/><circle cx="40" cy="239" r="5" fill="#111"/></g>' +
      person(118, 186, "#141414") + person(290, 186, "#1d1d1d") +
      '<rect x="356" y="160" width="4" height="52" fill="#3d4b3f"/><rect x="330" y="150" width="58" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' + txt("W 52 St", 359, 161, 9, "#fff"),
      sky("jza", "#08081a", "#2a1b3a"));
  }

  /* 3. The Brooklyn Navy Yard on Wallabout Bay: the dry dock, a big rust-red crane with its hook swinging, a gray ship, brick shop buildings, gulls */
  function navyyard() {
    return svg(
      '<rect width="400" height="260" fill="url(#jzn)"/>' +
      '<circle cx="330" cy="54" r="20" fill="#ffd27a" opacity=".85"/>' +
      /* distant skyline */
      [[100,112,18],[122,96,14],[140,120,20],[164,104,12],[180,116,22],[206,100,16],[226,124,30]].map(([x,y,w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="#8b97ab" opacity=".55"/>').join("") +
      /* brick shops on the left */
      '<rect x="0" y="100" width="96" height="70" fill="#9a4a32"/>' +
      [0, 1, 2].map(r => [0, 1, 2, 3].map(c => '<rect x="' + (8 + c * 22) + '" y="' + (108 + r * 20) + '" width="12" height="12" fill="#2f3440"/>').join("")).join("") +
      '<rect x="0" y="96" width="96" height="6" fill="#6e3020"/>' +
      /* water */
      '<rect x="0" y="170" width="400" height="90" fill="#2f5d73"/>' +
      '<g class="jz-wave"><path d="M0 186q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb3c9" stroke-width="2" fill="none" opacity=".6"/></g>' +
      '<g class="jz-wave jz-wave2"><path d="M0 214q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb3c9" stroke-width="2" fill="none" opacity=".5"/></g>' +
      /* dry dock walls */
      '<path d="M120 170h140l-10 40h-120z" fill="#8c8a84"/><path d="M128 174h124l-8 32h-108z" fill="#3e6b80"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (126 + i * 2) + '" y="' + (176 + i * 8) + '" width="' + (128 - i * 4) + '" height="2" fill="#a9a69e"/>').join("") +
      /* ship */
      '<path d="M140 168h96l-10 18h-80z" fill="#6d7680"/><rect x="170" y="150" width="36" height="18" fill="#8a939c"/><rect x="180" y="138" width="10" height="12" fill="#555d66"/>' +
      [176, 188, 198].map(x => '<rect x="' + x + '" y="155" width="6" height="5" fill="#ffe7a8"/>').join("") +
      /* crane */
      '<rect x="292" y="60" width="14" height="110" fill="#b5462a"/>' +
      (() => { let l = ""; for (let y = 64; y < 152; y += 14) l += '<path d="M292 ' + y + 'l14 14M306 ' + y + 'l-14 14" stroke="#7a2a16" stroke-width="2"/>'; return l; })() +
      '<rect x="230" y="48" width="130" height="10" fill="#c4512f"/>' +
      (() => { let l = ""; for (let x = 232; x < 358; x += 12) l += '<path d="M' + x + ' 48l6 10l6 -10" stroke="#7a2a16" stroke-width="1.5" fill="none"/>'; return l; })() +
      '<rect x="306" y="34" width="20" height="20" fill="#d9d4c8"/><rect x="310" y="38" width="12" height="8" fill="#5a7a8c"/>' +
      '<rect x="344" y="58" width="16" height="16" fill="#555"/>' +
      '<g class="jz-hook"><path d="M262 58v62" stroke="#222" stroke-width="2"/><path d="M256 120h12l-2 6q-4 6 -8 0" fill="none" stroke="#222" stroke-width="3"/><rect x="248" y="128" width="28" height="12" fill="#3d6e8a"/></g>' +
      '<rect x="284" y="166" width="30" height="6" fill="#5a5a5a"/>' +
      /* gulls */
      '<g class="jz-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<g class="jz-gull jz-gull2"><path d="M0 70q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      txt("BROOKLYN NAVY YARD · WALLABOUT BAY", 200, 248, 10, CREAM, 'letter-spacing="2"'),
      sky("jzn", "#f0a86a", "#f6d9b0"));
  }

  /* 4. East River State Park, Williamsburg, at night: the lawn and old rail tracks, the river, a ferry gliding, the concrete jungle lit up across the water */
  function waterfront() {
    let city = "";
    const bld = [[0, 120, 26], [28, 96, 22], [52, 110, 30], [84, 70, 20], [106, 88, 28], [136, 60, 18], [156, 82, 26], [184, 100, 22], [208, 74, 24], [234, 92, 30], [266, 66, 20], [288, 104, 28], [318, 84, 22], [342, 112, 30], [374, 96, 26]];
    bld.forEach(([x, y, w], i) => {
      city += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="#141a2e"/>';
      for (let yy = y + 6; yy < 146; yy += 9) for (let xx = x + 4; xx < x + w - 4; xx += 7) if ((xx * 7 + yy * 3 + i) % 5 < 2) city += '<rect class="jz-bl jz-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="3" height="4" fill="#ffd98a"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#jzw)"/>' + stars(22) +
      '<circle cx="62" cy="34" r="12" fill="#f4ead8"/><circle cx="67" cy="30" r="11" fill="#0b1024"/>' +
      city +
      '<rect x="0" y="150" width="400" height="50" fill="#0e1e33"/>' +
      (() => { let r = ""; for (let i = 0; i < 26; i++) r += '<rect class="jz-bl jz-bl' + (i % 3 + 1) + '" x="' + ((i * 37) % 400) + '" y="' + (154 + (i * 11) % 40) + '" width="' + (8 + i % 4 * 3) + '" height="1.5" fill="#ffd98a" opacity=".6"/>'; return r; })() +
      '<g class="jz-ferry"><path d="M0 176h70l-8 10h-56z" fill="#f2f2f2"/><rect x="12" y="166" width="40" height="10" fill="#e8e8e8"/><rect x="16" y="168" width="32" height="4" fill="#3d6e8a"/><rect x="0" y="182" width="70" height="2" fill="#2b5a9c"/></g>' +
      /* lawn + pier rail + relic tracks */
      '<path d="M0 200q200 -10 400 0v60H0z" fill="#2d4a2a"/>' +
      '<rect x="0" y="198" width="400" height="3" fill="#8a8a8a"/>' + [20, 80, 140, 200, 260, 320, 380].map(x => '<rect x="' + x + '" y="188" width="3" height="12" fill="#8a8a8a"/>').join("") +
      '<rect x="0" y="190" width="400" height="2" fill="#8a8a8a"/>' +
      '<path d="M10 236l40 -30M60 236l26 -30" stroke="#6b5a48" stroke-width="3"/>' +
      [0, 1, 2].map(i => '<path d="M' + (16 + i * 12) + ' ' + (230 - i * 9) + 'h' + (44 - i * 4) + '" stroke="#5a4a3a" stroke-width="3"/>').join("") +
      person(300, 212, "#0a0a0a") + person(318, 214, "#111") +
      txt("CONCRETE JUNGLE", 200, 244, 13, GOLD, 'letter-spacing="4"') +
      txt("EAST RIVER STATE PARK · WILLIAMSBURG", 200, 256, 8, CREAM, 'letter-spacing="2" opacity=".85"'),
      sky("jzw", "#050816", "#1c2546"));
  }

  /* 5. Marcy Av & Flushing Av: green street signs, the wall tagged JAY-Z, the old brick factory with its chimney and water tank behind */
  function corner() {
    let fac = '<rect x="30" y="54" width="250" height="96" fill="#c9b48e"/><rect x="30" y="50" width="250" height="6" fill="#a8916a"/>';
    for (let y = 62; y < 146; y += 14) for (let x = 38; x < 276; x += 16) fac += '<rect class="' + ((x + y) % 5 === 0 ? 'jz-bl jz-bl' + ((x / 16) % 3 + 1) : '') + '" x="' + x + '" y="' + y + '" width="10" height="9" fill="' + ((x + y) % 5 === 0 ? "#ffd98a" : "#3a3f4a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jzc)"/>' + stars(14) +
      fac +
      /* chimney + smoke */
      '<rect x="300" y="20" width="16" height="130" fill="#8e3b2a"/><rect x="298" y="18" width="20" height="5" fill="#6e2a1c"/>' +
      '<circle class="jz-smk" cx="308" cy="14" r="6" fill="#9aa0aa"/><circle class="jz-smk jz-smk2" cx="308" cy="14" r="6" fill="#9aa0aa"/><circle class="jz-smk jz-smk3" cx="308" cy="14" r="6" fill="#9aa0aa"/>' +
      /* water tank */
      '<rect x="244" y="30" width="30" height="20" rx="3" fill="#6b4a2e"/><path d="M240 30l19 -10l19 10z" fill="#4a3220"/><path d="M248 50v6M270 50v6" stroke="#4a3220" stroke-width="2"/>' +
      txt("FLUSHING AV · BED-STUY", 130, 44, 8, CREAM, 'letter-spacing="2" opacity=".8"') +
      /* the wall */
      '<rect x="0" y="132" width="400" height="94" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("JAY-Z", 20, 200, 54, "#ffffff", -5) + tag("HOV", 196, 186, 30, GOLD, -4) + tag("MARCY", 190, 220, 20, GGREEN, -3) + tag("H TO THE IZZO", 24, 222, 13, CREAM, -2) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="jz-carl"><rect x="0" y="238" width="48" height="13" rx="4" fill="#f4f1ea"/><rect x="10" y="232" width="26" height="8" rx="2" fill="#f4f1ea"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Marcy Av", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Flushing Av", 346, 108, 12, "#fff") +
      '<circle class="jz-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("jzc", "#0a0c1a", "#2b2a40"));
  }

  window.SCENES = { flushing: flushing, annie: annie, navyyard: navyyard, waterfront: waterfront, corner: corner };
})();
