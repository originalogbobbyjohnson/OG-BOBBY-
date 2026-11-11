/* kolbycooper scenes (Regions: HOUSTON + TEXAS; Genres: country. Born in Bradford, Anderson County, East Texas (Wikipedia; countryswag:
   grew up on a ranch in Bradford). Bradford sits at TX 19 and FM 837, about 18 mi NW of Palestine, served by Cayuga ISD (black and gold Wildcats).
   CSS classes prefixed kcp- (the page's own anim-train is kept). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8b04a", RUST = "#c8402a", PINE = "#2f5a34", CREAM = "#f4ead8", NIGHT = "#0d1226";
  const css = '<style>' +
    '@keyframes kcpglow{0%,100%{opacity:.45}50%{opacity:1}}.kcp-glow{animation:kcpglow 2.2s ease-in-out infinite}.kcp-g2{animation-delay:-1.1s}' +
    '@keyframes kcpcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.kcp-cl{animation:kcpcloud 14s ease-in-out infinite alternate}' +
    '@keyframes kcpcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.kcp-car{animation:kcpcar 7s linear infinite}' +
    '@keyframes kcpball{0%{transform:translate(0,0)}50%{transform:translate(90px,-60px)}100%{transform:translate(180px,0)}}.kcp-ball{animation:kcpball 2.6s ease-in-out infinite}' +
    '@keyframes kcpsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.kcp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kcpsway 3s ease-in-out infinite}' +
    '@keyframes kcprock{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kcp-rock{transform-box:fill-box;transform-origin:50% 100%;animation:kcprock 2.4s ease-in-out infinite}' +
    '@keyframes kcptwink{0%,100%{opacity:.2}50%{opacity:1}}.kcp-tw{animation:kcptwink 1.8s ease-in-out infinite}.kcp-t2{animation-delay:-.6s}.kcp-t3{animation-delay:-1.2s}' +
    '@keyframes kcpfly{0%{transform:translate(0,0);opacity:0}30%{opacity:1}100%{transform:translate(20px,-30px);opacity:0}}.kcp-fly{animation:kcpfly 3s ease-in-out infinite}.kcp-f2{animation-delay:-1s}.kcp-f3{animation-delay:-2s}' +
    '@keyframes kcpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kcp-sp{animation:kcpspray 1.4s ease-out infinite}.kcp-sp2{animation-delay:.45s}' +
    '@keyframes kcpbeam{0%,100%{opacity:.18}50%{opacity:.4}}.kcp-beam{animation:kcpbeam 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* East Texas loblolly pine */
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-30" width="4" height="30" fill="#4a3424"/>' +
    '<path d="M0 -78l-12 22h7l-11 18h8l-12 18h40l-12 -18h8l-11 -18h7z" fill="' + (c || PINE) + '"/></g>';
  /* Texas state highway marker: black-bordered white square with the number */
  const txShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-18" width="36" height="36" fill="#fff" stroke="#111" stroke-width="3"/><text x="0" y="-6" text-anchor="middle" ' + font + ' font-size="6" fill="#111">TEXAS</text><text x="0" y="12" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text></g>';
  /* Farm-to-Market marker: black square, white panel */
  const fmShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-18" width="36" height="36" fill="#111"/><rect x="-14" y="-14" width="28" height="28" fill="#fff"/><text x="0" y="-5" text-anchor="middle" ' + font + ' font-size="4.4" fill="#111">FARM ROAD</text><text x="0" y="10" text-anchor="middle" ' + font + ' font-size="12" fill="#111">' + n + '</text></g>';
  const pickup = (c, s, beat) => '<g transform="scale(' + (s || 1) + ')"><rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    (beat ? '<path d="M8 12l6 4l-4 4M24 20h10" stroke="#5a4030" stroke-width="1.5" fill="none"/><rect x="2" y="9" width="12" height="7" fill="#8a5a3a" opacity=".7"/>' : '') +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="kcp-glow"/></g>';

  /* ROOM 0: TX 19 north out of Palestine: the green BRADFORD sign, the Texas 19 and FM 837 markers at the junction, pines on both sides, a pickup rolling in */
  function kcphwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcp1)"/>' +
      '<g class="kcp-cl"><ellipse cx="80" cy="30" rx="50" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      [0, 26, 52, 300, 326, 352, 378].map((x, i) => pine(x + 8, 178, .9 + (i % 3) * .15, i % 2 ? "#2a5230" : PINE)).join("") +
      '<path d="M0 170h400v10H0z" fill="#6a8a3a"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#4a4a50"/><path d="M0 218h400" stroke="#f0d040" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 180h400" stroke="#fff" stroke-width="2"/><path d="M0 256h400" stroke="#fff" stroke-width="2.5"/>' +
      /* big green place sign */
      '<rect x="146" y="98" width="5" height="82" fill="#8a8e94"/><rect x="248" y="98" width="5" height="82" fill="#8a8e94"/>' +
      '<rect x="120" y="44" width="160" height="62" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + font + ' font-size="22" fill="#fff">BRADFORD</text><text x="200" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ANDERSON COUNTY</text>' +
      /* route markers */
      '<rect x="64" y="128" width="4" height="52" fill="#8a8e94"/>' + txShield(66, 110, "19") +
      '<rect x="332" y="128" width="4" height="52" fill="#8a8e94"/>' + fmShield(334, 110, "837") +
      '<g class="anim-train"><g transform="translate(160 190)">' + pickup(RUST) + '</g></g>' +
      '<g class="kcp-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("TX 19 NORTH  ·  FM 837  ·  BRADFORD, EAST TEXAS", 252),
      sky("kcp1", "#7fb6e0", "#f1ead6"));
  }

  /* ROOM 1: Friday night in Cayuga (Bradford's school district): black-and-gold Wildcats scoreboard, light towers, a football flying */
  function kcpcayuga() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcp2)"/>' +
      [[40, 30], [90, 50], [200, 16], [260, 40], [350, 26]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.2" fill="#fff"/>').join("") +
      [8, 40, 360, 392].map((x, i) => pine(x, 150, .8 + (i % 2) * .2, "#16301c")).join("") +
      [30, 370].map(x => '<path d="M' + x + ' 34l' + (x < 200 ? 140 : -140) + ' 150h-60z" fill="#fff6c8" class="kcp-beam"/><rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#8a8e94"/><rect x="' + (x - 18) + '" y="18" width="36" height="16" fill="#3a3a40"/>' +
        Array.from({ length: 8 }, (_, i) => '<circle cx="' + (x - 14 + (i % 4) * 9.5) + '" cy="' + (22 + Math.floor(i / 4) * 8) + '" r="3" fill="#fffbe0" class="kcp-glow"/>').join("")).join("") +
      '<path d="M70 150l20 -36h220l20 36z" fill="#5a5f6a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (90 - i * 4) + ' ' + (120 + i * 6.4) + 'h' + (220 + i * 8) + '" stroke="#7a808a" stroke-width="2"/>').join("") +
      '<g transform="translate(150 34)"><rect x="0" y="0" width="100" height="44" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><rect x="2" y="2" width="96" height="11" fill="' + GOLD + '"/><text x="50" y="11" text-anchor="middle" ' + font + ' font-size="7.5" fill="#111">CAYUGA WILDCATS</text>' +
      '<text x="22" y="24" text-anchor="middle" ' + font + ' font-size="6" fill="#ddd">HOME</text><text x="78" y="24" text-anchor="middle" ' + font + ' font-size="6" fill="#ddd">GUEST</text>' +
      '<text x="22" y="39" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">42</text><text x="78" y="39" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">14</text><text x="50" y="37" text-anchor="middle" ' + font + ' font-size="7" fill="#e33">4TH</text></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 150l' + ((i - 4) * 14) + ' 110" stroke="#fff" stroke-width="2" opacity=".75"/>').join("") +
      '<path d="M0 150h400" stroke="#fff" stroke-width="3"/>' +
      '<g class="kcp-ball"><g transform="translate(100 200)"><ellipse cx="0" cy="0" rx="8" ry="5" fill="#7a3a1a" transform="rotate(-30)"/><path d="M-3 -1l6 -2" stroke="#fff" stroke-width="1"/></g></g>' +
      cap("FRIDAY NIGHT  ·  CAYUGA WILDCATS  ·  BLACK AND GOLD"),
      sky("kcp2", "#0b1028", "#2a2a50"));
  }

  /* ROOM 2: the family ranch outside Bradford: red barn, round hay bales, cattle fence, the beat up truck hammering it down the dirt road toward the lake */
  function kcpranch() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcp3)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffd36a" opacity=".9"/>' +
      '<g class="kcp-cl"><ellipse cx="90" cy="36" rx="46" ry="8" fill="#fff" opacity=".55"/></g>' +
      [0, 30, 60, 90, 240, 270, 300, 330, 360, 390].map((x, i) => pine(x, 150, .75 + (i % 3) * .12, i % 2 ? "#2a5230" : PINE)).join("") +
      /* stock pond / lake glint */
      '<ellipse cx="320" cy="160" rx="70" ry="9" fill="#5a8ab0"/><path d="M280 160h20M320 162h24" stroke="#cfe6f4" stroke-width="1.5" class="kcp-glow"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#7a9a42"/>' +
      /* barn */
      '<g transform="translate(110 70)"><path d="M0 40l50 -36l50 36v62h-100z" fill="#9a2e22"/><path d="M-6 42l56 -40l56 40" stroke="#f4ead8" stroke-width="4" fill="none"/>' +
      '<rect x="30" y="58" width="40" height="44" fill="#7a2218"/><path d="M30 58l40 44M70 58l-40 44" stroke="#f4ead8" stroke-width="3"/><rect x="40" y="22" width="20" height="14" fill="#f4ead8"/><rect x="43" y="25" width="14" height="8" fill="#3a2a1a"/></g>' +
      /* hay bales */
      [[40, 180], [74, 186], [244, 182]].map(p => '<g transform="translate(' + p[0] + ' ' + p[1] + ')"><rect x="-16" y="-14" width="32" height="28" rx="12" fill="#d8b058"/><circle cx="16" cy="0" r="13" fill="#e8c468"/><circle cx="16" cy="0" r="8" fill="none" stroke="#b8903a" stroke-width="1.5"/><circle cx="16" cy="0" r="3" fill="none" stroke="#b8903a" stroke-width="1"/></g>').join("") +
      /* fence */
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="196" width="4" height="26" fill="#6a4a2a"/>').join("") + '<path d="M0 202h400M0 212h400" stroke="#6a4a2a" stroke-width="2"/>' +
      '<path d="M0 236q200 -14 400 0v24H0z" fill="#b8925a"/>' +
      '<g class="kcp-car"><g transform="translate(0 214)">' + pickup("#6a7a8a", .9, true) + '</g></g>' +
      cap("THE RANCH OUTSIDE BRADFORD  ·  BEAT UP TRUCK, LAKE ROAD"),
      sky("kcp3", "#f2a85a", "#f8e0b0"));
  }

  /* ROOM 3: Grandpa's front porch at night (To The Moon): the rocking chair, the brand-new truck with paper dealership tags in the drive, a big moon over the pines, fireflies */
  function kcpporch() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcp4)"/>' +
      [[30, 24], [70, 60], [150, 18], [200, 44], [240, 14], [120, 70]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="kcp-tw kcp-t' + (1 + i % 3) + '"/>').join("") +
      '<circle cx="318" cy="60" r="38" fill="#f4ecd0" class="kcp-glow"/><circle cx="306" cy="50" r="6" fill="#dcd2b4"/><circle cx="330" cy="72" r="5" fill="#dcd2b4"/><circle cx="326" cy="44" r="3" fill="#dcd2b4"/>' +
      [0, 26, 52, 250, 280, 380].map((x, i) => pine(x + 6, 150, .8 + (i % 3) * .14, "#122418")).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#1c2a1a"/>' +
      /* house + porch */
      '<rect x="0" y="80" width="210" height="100" fill="#cfc2a4"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (88 + r * 11) + 'h210" stroke="#b0a284" stroke-width="1"/>').join("") +
      '<path d="M-10 84l120 -40l120 40z" fill="#4a3a30"/>' +
      '<rect x="40" y="96" width="34" height="30" fill="#ffd98a" class="kcp-glow"/><path d="M57 96v30M40 111h34" stroke="#6a5a4a" stroke-width="2"/>' +
      '<rect x="120" y="98" width="30" height="58" fill="#5a3a2a"/><circle cx="144" cy="128" r="2" fill="' + GOLD + '"/>' +
      '<rect x="0" y="146" width="230" height="10" fill="#7a5a3a"/><path d="M0 110h230" stroke="#5a4030" stroke-width="5"/>' + [10, 90, 170, 226].map(x => '<rect x="' + (x - 3) + '" y="110" width="6" height="40" fill="#e8dcc4"/>').join("") +
      '<circle cx="190" cy="104" r="5" fill="#ffe7a0" class="kcp-glow kcp-g2"/>' +
      /* rocking chair */
      '<g class="kcp-rock"><g transform="translate(86 108)"><rect x="0" y="0" width="4" height="34" fill="#3a2414"/><rect x="22" y="0" width="4" height="34" fill="#3a2414"/>' + [6, 12, 18].map(y => '<rect x="0" y="' + y + '" width="26" height="3" fill="#5a3a20"/>').join("") +
      '<rect x="-2" y="24" width="32" height="4" fill="#5a3a20"/><path d="M-6 38q18 6 38 0" stroke="#3a2414" stroke-width="3" fill="none"/></g></g>' +
      /* brand-new truck in the drive with paper tags */
      '<g transform="translate(262 186)">' + pickup("#e8e4dc", 1.1) + '<rect x="2" y="20" width="14" height="8" fill="#f4f0e0" stroke="#888" stroke-width=".8"/></g>' +
      ['kcp-fly', 'kcp-fly kcp-f2', 'kcp-fly kcp-f3'].map((c, i) => '<circle class="' + c + '" cx="' + (240 + i * 40) + '" cy="' + (170 + i * 8) + '" r="2" fill="#f8f080"/>').join("") +
      cap("GRANDPA’S PORCH  ·  A ROCK NEXT TO THE MOON"),
      sky("kcp4", NIGHT, "#2a3256"));
  }

  /* ROOM 4: his corner: TX 19 and FM 837 at Bradford, his name tagged on an old tin feed-store wall, the East Texas piney woods behind */
  function kcpcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcp5)"/>' +
      [200, 228, 256, 284, 312, 340, 368, 396].map((x, i) => pine(x, 160, 1 + (i % 3) * .18, i % 2 ? "#1e3a22" : "#24422a")).join("") +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 206h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/><rect x="0" y="160" width="400" height="6" fill="#a8a094"/>' +
      /* corrugated tin wall with tag */
      '<rect x="0" y="80" width="186" height="84" fill="#8a8e8a"/>' + Array.from({ length: 23 }, (_, i) => '<path d="M' + (i * 8 + 4) + ' 80v84" stroke="#6e726e" stroke-width="2"/>').join("") +
      '<path d="M0 80h186" stroke="#5a3a2a" stroke-width="6"/><rect x="24" y="138" width="40" height="26" fill="#9a4a30" opacity=".5"/>' +
      tag("KOLBY", 14, 122, 32, GOLD, -6) + tag("COOPER", 22, 154, 26, CREAM, -6) +
      '<circle cx="170" cy="124" r="3" fill="' + GOLD + '" class="kcp-sp"/><circle cx="176" cy="120" r="2" fill="' + GOLD + '" class="kcp-sp kcp-sp2"/>' +
      '<rect x="230" y="52" width="5" height="150" fill="#8a8e94"/>' + sign(184, 58, 98, "TX 19") + sign(184, 82, 98, "FM 837") +
      '<g class="kcp-sway"><g transform="translate(300 64)"><rect x="-2" y="0" width="4" height="40" fill="#8a8e94"/><rect x="-30" y="-14" width="60" height="16" fill="' + RUST + '"/><text x="0" y="-2" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BRADFORD</text></g></g>' +
      '<g transform="translate(270 196)">' + pickup(RUST, .9) + '</g>' +
      cap("TX 19 & FM 837  ·  BRADFORD  ·  THE PINEY WOODS"),
      sky("kcp5", "#1c1a3a", "#c0704a"));
  }

  window.SCENES = { kcphwy, kcpcayuga, kcpranch, kcpporch, kcpcorner };
})();
