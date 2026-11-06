/* Armani White game (REGIONS tab: Philadelphia; West Philly, 52nd Street, his childhood block, where he bought mixtapes and shot the DIAMOND DALLAS. video).
   52nd St up on the Market-Frankford El, 52nd Street under the El (awnings, the mixtape table, the train rumbling overhead), Malcolm X Park at 51st and Pine,
   the Fillmore in Fishtown (his first show after his father passed) with the marquee chasing, and 52nd St & Walnut St with the Center City skyline glowing behind.
   400 x 260 SVGs. Classes prefixed aw-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes awflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.aw-flk{animation:awflick 2.4s infinite}' +
    '@keyframes awblink{0%,100%{opacity:.25}50%{opacity:1}}.aw-bl{animation:awblink 1.4s ease-in-out infinite}.aw-bl2{animation-delay:.45s}.aw-bl3{animation-delay:.9s}' +
    '@keyframes awcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.aw-car{animation:awcar 7s linear infinite}.aw-car2{animation-delay:-3.5s}' +
    '@keyframes awel{from{transform:translateX(420px)}to{transform:translateX(-420px)}}.aw-el{animation:awel 6s linear infinite}' +
    '@keyframes awleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.aw-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:awleaf 3s ease-in-out infinite}.aw-leaf2{animation-delay:-1.5s}' +
    '@keyframes awball{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.aw-ball{animation:awball .9s ease-in-out infinite}' +
    '@keyframes awspin{to{transform:rotate(360deg)}}.aw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:awspin 1.6s linear infinite}' +
    '@keyframes awsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.aw-beam{transform-box:fill-box;transform-origin:50% 0%;animation:awsweep 3s ease-in-out infinite}.aw-beam2{animation-delay:-1.5s}' +
    '@keyframes awspark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.aw-spk{transform-box:fill-box;transform-origin:50% 50%;animation:awspark 1.5s ease-in-out infinite}.aw-spk2{animation-delay:.5s}.aw-spk3{animation-delay:1s}' +
    '@keyframes awspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-18px);opacity:0}}.aw-sp{animation:awspray 1.3s ease-out infinite}.aw-sp2{animation-delay:.45s}' +
    '@keyframes awbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.aw-bob{animation:awbob .6s ease-in-out infinite}.aw-bob2{animation-delay:.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "aw-bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 12, "#fff");
  const mfl = (x, y) => '<rect x="' + (x - 20) + '" y="' + (y - 11) + '" width="40" height="22" rx="11" fill="#0f75bc"/>' + txt("MFL", x, y + 5, 12, "#fff");
  const ICE = "#7fe3ff", WHITE = "#f4f6f8", SILVER = "#c0c6cf", GOLD = "#f2c14e", RED = "#e63946", STEEL = "#4f5b66";
  /* a little MFL car (silver, blue stripe) */
  const elCar = (x, y, w) => {
    let wins = ""; for (let i = 14; i < w - 20; i += 30) wins += '<rect x="' + (x + i) + '" y="' + (y + 8) + '" width="20" height="16" rx="2" fill="#1d2a36"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" rx="5" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + wins +
      '<rect x="' + x + '" y="' + (y + 30) + '" width="' + w + '" height="5" fill="#0f75bc"/>';
  };

  /* 1. 52nd St up on the El: the open-air platform, the steel canopy, the black sign with the MFL tile, the silver car sliding in, West Philly rooftops below */
  function el52() {
    let roofs = "";
    for (let i = 0; i < 9; i++) roofs += '<rect x="' + (i * 46) + '" y="' + (150 - (i * 17) % 26) + '" width="44" height="' + (40 + (i * 17) % 26) + '" fill="' + (i % 2 ? "#6e3b2e" : "#7c4636") + '"/>' +
      '<rect class="aw-bl aw-bl' + (i % 3 + 1) + '" x="' + (i * 46 + 10) + '" y="' + (160 - (i * 17) % 26) + '" width="8" height="8" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ea)"/>' + stars(12) + roofs +
      /* canopy */
      '<rect x="0" y="22" width="400" height="12" fill="' + STEEL + '"/><path d="M0 34h400" stroke="#2c343c" stroke-width="3"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 4) + '" y="34" width="8" height="140" fill="' + STEEL + '"/>').join("") +
      [80, 180, 280].map((x, i) => '<rect class="aw-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 22) + '" y="36" width="44" height="5" rx="2" fill="#f4fbff"/>').join("") +
      /* the sign */
      '<rect x="56" y="54" width="290" height="32" rx="3" fill="#111"/>' +
      '<text x="70" y="76" ' + font + ' font-size="15" fill="#fff">52nd St</text>' + txt("West Philly", 214, 75, 10, "#cfd8e0") + mfl(310, 70) +
      /* the train */
      '<g class="anim-train">' + elCar(8, 120, 300) + '<circle cx="300" cy="156" r="3" fill="#fff6c2"/></g>' +
      /* platform edge + deck */
      '<rect x="0" y="174" width="400" height="8" fill="#f2c200"/><rect x="0" y="182" width="400" height="78" fill="#5b5f66"/>' +
      (() => { let p = ""; for (let x = 0; x < 400; x += 24) p += '<path d="M' + x + ' 182v78" stroke="#50545b"/>'; return p; })() +
      person(340, 200, "#1b1b1b") + person(362, 204, WHITE) +
      txt("MARKET-FRANKFORD LINE", 160, 238, 11, "#f1f4f8", 'letter-spacing="3"'),
      sky("ea", "#0b1026", "#3b3f6e"));
  }

  /* 2. 52nd Street under the El: steel columns, shop awnings, the mixtape table with the CDs, the train rumbling over, people on the sidewalk */
  function street52() {
    const shop = (x, w, aw, t) => '<rect x="' + x + '" y="96" width="' + w + '" height="110" fill="#8a4b3a"/>' +
      '<rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="56" fill="#2a3442"/><rect class="aw-flk" x="' + (x + 10) + '" y="146" width="' + (w - 20) + '" height="10" fill="#ffd98a" opacity=".5"/>' +
      '<path d="M' + x + ' 118h' + w + 'l-6 18h-' + (w - 12) + 'z" fill="' + aw + '"/>' +
      (() => { let s = ""; for (let i = 0; i < w; i += 12) s += '<path d="M' + (x + i) + ' 118l-1 18" stroke="#fff" stroke-width="4" opacity=".5"/>'; return s; })() +
      txt(t, x + w / 2, 112, 9, "#fff");
    let cds = "";
    for (let i = 0; i < 8; i++) cds += '<rect x="' + (232 + (i % 4) * 16) + '" y="' + (176 + Math.floor(i / 4) * 14) + '" width="13" height="12" fill="' + [ICE, GOLD, RED, WHITE][i % 4] + '" stroke="#111"/><circle cx="' + (238.5 + (i % 4) * 16) + '" cy="' + (182 + Math.floor(i / 4) * 14) + '" r="3" fill="#111" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#b9c6d4"/>' +
      shop(0, 96, RED, "SNEAKERS") + shop(100, 110, "#2a9d8f", "WIGS · NAILS") + shop(214, 90, GOLD, "CELL PHONES") + shop(308, 92, "#457b9d", "FISH · CHIPS") +
      /* the El overhead */
      '<rect x="0" y="0" width="400" height="58" fill="#3c4650"/>' +
      '<g class="aw-el">' + elCar(0, 6, 180) + elCar(186, 6, 180) + '</g>' +
      '<rect x="0" y="50" width="400" height="12" fill="#2c343c"/>' +
      (() => { let g = ""; for (let x = 0; x < 400; x += 20) g += '<path d="M' + x + ' 62l10 12l10 -12" stroke="#2c343c" stroke-width="2" fill="none"/>'; return g; })() +
      [98, 212, 306].map(x => '<rect x="' + (x - 4) + '" y="62" width="8" height="160" fill="#2c343c"/>').join("") +
      /* sidewalk */
      '<rect x="0" y="206" width="400" height="54" fill="#8b8f95"/><rect x="0" y="206" width="400" height="4" fill="#a9adb2"/>' +
      /* mixtape table */
      '<rect x="224" y="196" width="74" height="6" fill="#5e3e26"/><path d="M228 202v24M294 202v24" stroke="#5e3e26" stroke-width="3"/>' + cds +
      '<rect x="228" y="166" width="66" height="10" fill="#111"/>' + txt("MIXTAPES", 261, 174, 8, GOLD) +
      person(316, 192, "#1b1b1b") + person(120, 196, WHITE, "aw-bob") + person(140, 198, "#2b2b2b", "aw-bob aw-bob2") +
      txt("52ND STREET", 70, 246, 11, "#1b1b1b", 'letter-spacing="3"'));
  }

  /* 3. Malcolm X Park, 51st and Pine: big shade trees swaying, the paths, benches, the court with a ball bouncing, kids on the swings */
  function park() {
    const tree = (x, y, r, cls) => '<rect x="' + (x - 5) + '" y="' + y + '" width="10" height="' + (200 - y) + '" fill="#5a4030"/>' +
      '<g class="aw-leaf ' + cls + '"><circle cx="' + x + '" cy="' + (y - 10) + '" r="' + r + '" fill="#2f7d3a"/><circle cx="' + (x - r * 0.6) + '" cy="' + y + '" r="' + r * 0.7 + '" fill="#3a8f45"/><circle cx="' + (x + r * 0.6) + '" cy="' + (y + 2) + '" r="' + r * 0.7 + '" fill="#2a6f33"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pk)"/>' +
      '<g fill="#8a5a46"><rect x="0" y="120" width="60" height="70"/><rect x="62" y="110" width="60" height="80"/><rect x="290" y="114" width="56" height="76"/><rect x="348" y="122" width="52" height="68"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5c9a4a"/>' +
      '<path d="M120 260L190 180h20L280 260z" fill="#c9bfa6"/><path d="M0 214q200 -20 400 0v10q-200 -20 -400 0z" fill="#c9bfa6"/>' +
      tree(40, 110, 34, "") + tree(130, 96, 40, "aw-leaf2") + tree(270, 100, 38, "") + tree(360, 112, 32, "aw-leaf2") +
      /* benches */
      '<rect x="60" y="226" width="44" height="5" fill="#5e3e26"/><path d="M64 231v10M100 231v10" stroke="#333" stroke-width="3"/><rect x="60" y="216" width="44" height="4" fill="#5e3e26"/>' +
      '<rect x="300" y="228" width="44" height="5" fill="#5e3e26"/><path d="M304 233v10M340 233v10" stroke="#333" stroke-width="3"/><rect x="300" y="218" width="44" height="4" fill="#5e3e26"/>' +
      /* the court */
      '<rect x="188" y="150" width="4" height="40" fill="#555"/><rect x="178" y="142" width="24" height="14" fill="#fff" stroke="#555"/><path d="M184 156h12l-2 8h-8z" fill="none" stroke="' + RED + '" stroke-width="1.5"/>' +
      '<circle class="aw-ball" cx="214" cy="196" r="5" fill="#e07a2f"/>' + person(226, 182, "#1b1b1b", "aw-bob") +
      /* the sign */
      '<rect x="146" y="22" width="108" height="24" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("MALCOLM X PARK", 200, 38, 10, "#fff"),
      sky("pk", "#7fb8e6", "#e8d9b0"));
  }

  /* 4. The Fillmore in Fishtown: the old brick factory front, the marquee bulbs chasing with his name, spotlights sweeping, a line out the door */
  function fillmore() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 8) bulbs += '<circle class="aw-bl aw-bl' + (x % 3 + 1) + '" cx="' + x + '" cy="108" r="2.2" fill="#fff3b0"/><circle class="aw-bl aw-bl' + ((x + 1) % 3 + 1) + '" cx="' + x + '" cy="146" r="2.2" fill="#fff3b0"/>';
    let wins = "";
    for (const y of [36, 66]) for (let x = 30; x < 370; x += 34) wins += '<rect x="' + x + '" y="' + y + '" width="20" height="22" fill="' + ((x + y) % 3 ? "#2a2238" : "#ffd98a") + '" opacity=".9"/>';
    const line = [40, 58, 76, 330, 348, 366].map((x, i) => person(x, 192 + (i % 2) * 3, i % 3 ? "#1b1b1b" : WHITE, i % 2 ? "aw-bob" : "aw-bob aw-bob2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fm)"/>' + stars(16) +
      '<path class="aw-beam" d="M120 0l-30 260h60z" fill="' + ICE + '" opacity=".14"/><path class="aw-beam aw-beam2" d="M280 0l-30 260h60z" fill="' + ICE + '" opacity=".14"/>' +
      '<rect x="10" y="24" width="380" height="196" fill="#7a3a2c"/>' +
      (() => { let b = ""; for (let y = 30; y < 220; y += 7) b += '<path d="M10 ' + y + 'h380" stroke="#6a3226" stroke-width=".8"/>'; return b; })() + wins +
      /* marquee */
      '<path d="M88 102h224l-10 50h-204z" fill="#111" stroke="' + SILVER + '" stroke-width="2"/>' + bulbs +
      txt("TONIGHT", 200, 122, 10, GOLD, 'letter-spacing="4"') + txt("ARMANI WHITE", 200, 140, 15, WHITE, 'letter-spacing="2"') +
      /* doors */
      '<rect x="160" y="160" width="80" height="60" fill="#1d1a22"/><path d="M200 160v60" stroke="#444" stroke-width="2"/><rect class="aw-flk" x="164" y="164" width="72" height="10" fill="' + ICE + '" opacity=".35"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' + line +
      txt("FISHTOWN", 200, 250, 10, "#f1ead8", 'letter-spacing="4"'),
      sky("fm", "#0a0716", "#2c1f4a"));
  }

  /* 5. 52nd St & Walnut St: green signs, the wall tagged ARMANI WHITE, diamonds sparkling, the Center City skyline lit up behind */
  function corner() {
    const tower = (x, w, top, crown, col) => '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (140 - top) + '" fill="' + col + '"/>' + crown +
      (() => { let l = ""; for (let y = top + 8; y < 136; y += 9) for (let xx = x + 4; xx < x + w - 4; xx += 7) l += '<rect class="' + ((xx + y) % 4 ? "" : "aw-bl") + '" x="' + xx + '" y="' + y + '" width="3" height="4" fill="#ffe6a8" opacity=".5"/>'; return l; })();
    const dia = (x, y, s, c) => '<path class="aw-spk ' + c + '" d="M' + x + ' ' + (y - s) + 'l' + s + ' ' + s + 'l-' + s + ' ' + s * 1.4 + 'l-' + s + ' -' + s * 1.4 + 'z" fill="' + ICE + '" stroke="#fff" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cw)"/>' + stars(14) +
      '<g opacity=".95">' +
        tower(40, 30, 76, '', "#26304a") + tower(76, 36, 40, '<path d="M76 40l18 -14l18 14z" fill="#26304a"/>', "#2b3654") +
        tower(122, 30, 16, '<path d="M122 16l15 -12l15 12z" fill="#33405f"/><rect x="135" y="0" width="4" height="6" fill="#ff6b6b" class="aw-bl"/>', "#33405f") +
        tower(162, 38, 30, '<rect x="166" y="22" width="30" height="8" fill="#2b3654"/>', "#2b3654") +
        tower(210, 28, 56, '', "#26304a") + tower(244, 40, 66, '', "#232c44") +
      '</g>' +
      /* the wall */
      '<rect x="0" y="130" width="320" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h320" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("ARMANI WHITE", 12, 194, 38, WHITE, -5) + tag("BLANCO", 200, 220, 20, ICE, -4) + tag("HAPPY HOOD", 20, 220, 14, GOLD, -3) +
      dia(286, 150, 8, "") + dia(300, 176, 6, "aw-spk2") + dia(270, 168, 5, "aw-spk3") +
      '<g class="aw-sp"><circle cx="304" cy="200" r="2" fill="' + WHITE + '"/></g><g class="aw-sp aw-sp2"><circle cx="308" cy="206" r="1.6" fill="' + ICE + '"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="aw-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      '<g class="aw-car aw-car2"><rect x="0" y="238" width="52" height="13" rx="4" fill="' + SILVER + '"/><circle cx="12" cy="251" r="4" fill="#111"/><circle cx="40" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="66" width="5" height="162" fill="#3d4b3f"/>' +
      sign(300, 70, 96, "52nd St") + sign(300, 96, 96, "Walnut St") +
      '<circle class="aw-flk" cx="358" cy="62" r="4" fill="#fff6c2"/>',
      sky("cw", "#070a1a", "#33264a"));
  }

  window.SCENES = { el52: el52, street52: street52, park: park, fillmore: fillmore, corner: corner };
})();
