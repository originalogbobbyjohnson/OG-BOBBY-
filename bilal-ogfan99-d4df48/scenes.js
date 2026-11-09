/* bilal scenes (Regions tab: Philadelphia; Germantown, where Bilal Oliver was born and raised - West Germantown side, off the Chestnut Hill West Line). CSS classes and ids prefixed bl- (the page's own anim-train is kept on the train).
   1 Tulpehocken station on SEPTA Regional Rail's Chestnut Hill West Line: the little gray stone Victorian station house with its steep roof, catenary overhead, a silver Silverliner sliding in.
   2 The Johnson House on Germantown Ave, an Underground Railroad station: the gray fieldstone Georgian house with its pent eave and white shutters, a lantern glowing in the window, Belgian-block avenue in front.
   3 The New School for Jazz and Contemporary Music in Greenwich Village, where he trained: a practice room with an upright bass, a piano and a horn on its stand, Village rowhouses in the window, notes floating up.
   4 Wyck in Germantown, with its old rose garden: the whitewashed house with green shutters, rose bushes in bloom, petals drifting.
   5 W Tulpehocken St and Greene St: green signs, BILAL tagged on a fieldstone wall, the Ebenezer Maxwell Mansion's Victorian stone tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes blglow{0%,100%{opacity:.45}50%{opacity:1}}.bl-glow{animation:blglow 2.6s ease-in-out infinite}.bl-glow2{animation-delay:-1.3s}' +
    '@keyframes blnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.bl-note{animation:blnote 3.4s linear infinite}.bl-n2{animation-delay:-1.1s}.bl-n3{animation-delay:-2.2s}' +
    '@keyframes blpetal{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(40px,110px) rotate(260deg);opacity:0}}.bl-pet{transform-box:fill-box;transform-origin:50% 50%;animation:blpetal 4.6s linear infinite}.bl-p2{animation-delay:-1.5s}.bl-p3{animation-delay:-3s}' +
    '@keyframes blbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.bl-bird{animation:blbird 15s linear infinite}' +
    '@keyframes blstring{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.6)}}.bl-str{transform-box:fill-box;transform-origin:50% 50%;animation:blstring .18s linear infinite}' +
    '@keyframes blcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bl-car{animation:blcar 8s linear infinite}' +
    '@keyframes blspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bl-sp{animation:blspray 1.4s ease-out infinite}.bl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  /* Wissahickon schist fieldstone fill */
  const stone = (x, y, w, h, base) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (base || "#8a8a80") + '"/>'; const cs = ["#9a9a8e", "#7a7a72", "#a4a294", "#84847a", "#6e6e66"];
    for (let r = 0; r * 8 < h - 4; r++) for (let c = 0; (c + 1) * 13 <= w; c++) s += '<rect x="' + (x + c * 13 + (r % 2 ? 4 : 1)) + '" y="' + (y + r * 8 + 1) + '" width="' + (r % 2 ? 9 : 11) + '" height="6" rx="2" fill="' + cs[(r * 3 + c * 7) % 5] + '"/>';
    return s; };
  const AMBER = "#e9a23b", SAGE = "#7fb7a4", BRICK = "#b5523b", RR = "#91456c";

  /* 1. Tulpehocken station, Chestnut Hill West Line */
  function blstation() {
    const train = '<g class="anim-train"><rect x="20" y="132" width="330" height="70" rx="6" fill="#c9cdd2" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="142" width="30" height="22" rx="2" fill="#24303a"/>').join("") +
      '<rect x="20" y="170" width="330" height="5" fill="#c8102e"/><rect x="20" y="176" width="330" height="5" fill="#1f4e9a"/>' +
      '<path d="M310 138h36v36h-36z" fill="#24303a"/><rect x="316" y="126" width="30" height="9" rx="2" fill="#111"/><text x="331" y="133.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">CHW</text>' +
      '<path d="M200 132l-10 -22h20z" fill="none" stroke="#333" stroke-width="1.5"/>' +
      '<circle cx="80" cy="204" r="8" fill="#2a2a2a"/><circle cx="110" cy="204" r="8" fill="#2a2a2a"/><circle cx="270" cy="204" r="8" fill="#2a2a2a"/><circle cx="300" cy="204" r="8" fill="#2a2a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bl-s1)"/>' +
      '<g class="bl-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" fill="none" stroke="#3a3a4a" stroke-width="1.5"/></g>' +
      tree(30, 96, 1.6, "#4a7a3a") + tree(380, 92, 1.8, "#3f6a32") +
      stone(250, 64, 100, 46) + '<path d="M240 66l60 -36l60 36z" fill="#4a4a52"/><path d="M286 30h28v-10h-28z" fill="#5a3a2a"/><rect x="290" y="80" width="18" height="30" fill="#5a3e28"/><rect x="262" y="76" width="16" height="18" fill="#ffe6a8" class="bl-glow"/><rect x="322" y="76" width="16" height="18" fill="#ffe6a8" class="bl-glow bl-glow2"/>' +
      '<rect x="0" y="108" width="400" height="10" fill="#a8a296"/><path d="M0 104h400" stroke="#333" stroke-width="1.2"/><path d="M60 104v-60M200 104v-60" stroke="#444" stroke-width="3"/><path d="M50 50h20M190 50h20" stroke="#444" stroke-width="2"/><path d="M0 112q100 -4 200 0t200 0" fill="none" stroke="#222" stroke-width="1"/>' +
      '<rect x="0" y="118" width="400" height="90" fill="#6a665e"/><path d="M0 206h400M0 196h400" stroke="#3a3a3a" stroke-width="3"/>' +
      train +
      '<rect x="0" y="210" width="400" height="50" fill="#9a9488"/><rect x="0" y="208" width="400" height="4" fill="#f2d24a"/>' +
      '<rect x="8" y="8" width="200" height="40" rx="4" fill="#111" stroke="#333"/>' +
      '<text x="18" y="25" ' + font + ' font-size="13" fill="#fff">Tulpehocken</text>' +
      '<text x="18" y="40" ' + font + ' font-size="8" fill="#bbb">CHESTNUT HILL WEST LINE</text>' +
      '<rect x="160" y="16" width="40" height="22" rx="11" fill="' + RR + '"/><text x="180" y="31" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">RR</text>',
      sky("bl-s1", "#8fb8de", "#f2e6cc"));
  }

  /* 2. Johnson House, Germantown Ave */
  function bljohnson() {
    let win = ""; [[150, 92], [196, 92], [242, 92], [150, 146], [242, 146]].forEach(([x, y], i) => win += '<rect x="' + (x - 8) + '" y="' + y + '" width="6" height="26" fill="#f2efe6"/><rect x="' + (x + 18) + '" y="' + y + '" width="6" height="26" fill="#f2efe6"/><rect x="' + x + '" y="' + y + '" width="16" height="26" fill="' + (i === 3 ? "#ffd27a" : "#2c3440") + '" class="' + (i === 3 ? "bl-glow" : "") + '" stroke="#f2efe6" stroke-width="1.5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#bl-s2)"/>' +
      '<circle cx="60" cy="40" r="12" fill="#f6efd0"/>' +
      tree(40, 150, 2.2, "#2c4a34") + tree(370, 150, 2.2, "#2c4a34") +
      stone(110, 70, 180, 116, "#7a7a72") + '<path d="M104 72l96 -40l96 40z" fill="#3a3a40"/><rect x="128" y="34" width="12" height="22" fill="#6a6a62"/><rect x="262" y="34" width="12" height="22" fill="#6a6a62"/>' +
      '<rect x="104" y="128" width="192" height="8" fill="#4a4a50"/>' + win +
      '<rect x="190" y="146" width="20" height="40" fill="#4a2e1e" stroke="#f2efe6" stroke-width="1.5"/><path d="M188 146q12 -12 24 0" fill="#f2efe6" opacity=".8"/>' +
      '<g class="bl-glow"><circle cx="171" cy="162" r="14" fill="#ffd27a" opacity=".25"/></g>' +
      '<rect x="0" y="186" width="400" height="74" fill="#5a5a58"/>' +
      Array.from({ length: 60 }, (_, i) => '<rect x="' + ((i % 15) * 28 - (Math.floor(i / 15) % 2) * 14) + '" y="' + (190 + Math.floor(i / 15) * 12) + '" width="24" height="9" rx="2" fill="#6e6c68"/>').join("") +
      '<g class="bl-car"><rect x="0" y="222" width="60" height="18" rx="5" fill="#7fb7a4"/><rect x="10" y="214" width="36" height="12" rx="4" fill="#5a8a7a"/><circle cx="14" cy="242" r="5" fill="#111"/><circle cx="48" cy="242" r="5" fill="#111"/></g>' +
      '<rect x="110" y="8" width="180" height="20" rx="3" fill="#2a1e14" stroke="' + AMBER + '"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '" letter-spacing="1">JOHNSON HOUSE · GERMANTOWN AVE</text>',
      sky("bl-s2", "#1a1e3a", "#6a5a7a"));
  }

  /* 3. The New School jazz practice room, Greenwich Village */
  function blnewschool() {
    let houses = ""; for (let i = 0; i < 5; i++) houses += '<rect x="' + (52 + i * 30) + '" y="' + (60 + (i % 2) * 8) + '" width="28" height="70" fill="' + ["#9a5a44", "#7a4a3a", "#a86a4a"][i % 3] + '"/><rect x="' + (58 + i * 30) + '" y="' + (72 + (i % 2) * 8) + '" width="6" height="8" fill="#ffe6a8"/><rect x="' + (68 + i * 30) + '" y="' + (72 + (i % 2) * 8) + '" width="6" height="8" fill="#ffe6a8"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2e28"/><rect x="0" y="200" width="400" height="60" fill="#6a4a30"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 200l-20 60" stroke="#5a3e28" stroke-width="2"/>').join("") +
      '<rect x="40" y="30" width="170" height="120" fill="url(#bl-s3)" stroke="#d9cfc0" stroke-width="6"/>' + houses + '<path d="M125 30v120M40 90h170" stroke="#d9cfc0" stroke-width="4"/>' +
      '<rect x="230" y="40" width="140" height="22" rx="3" fill="#111" stroke="' + AMBER + '"/><text x="300" y="55" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '" letter-spacing="1">THE NEW SCHOOL · JAZZ</text>' +
      '<rect x="220" y="110" width="150" height="90" fill="#141414"/><rect x="220" y="104" width="150" height="10" fill="#1e1e1e"/><rect x="226" y="140" width="138" height="14" fill="#f4f0e6"/>' + Array.from({ length: 13 }, (_, i) => '<rect x="' + (230 + i * 10.5) + '" y="140" width="5" height="8" fill="#111"/>').join("") +
      '<rect x="234" y="200" width="8" height="10" fill="#141414"/><rect x="350" y="200" width="8" height="10" fill="#141414"/>' +
      '<path d="M108 210c-30 0 -34 -26 -22 -40c6 -7 6 -12 0 -18c-8 -10 -2 -30 16 -32h12c18 2 24 22 16 32c-6 6 -6 11 0 18c12 14 8 40 -22 40z" fill="#8a4a22" stroke="#4a2a12" stroke-width="2"/>' +
      '<path d="M98 156q4 -4 0 -8M118 156q-4 -4 0 -8" fill="none" stroke="#2a1a0e" stroke-width="2"/><rect x="104" y="40" width="8" height="96" fill="#2a1a0e"/><path d="M104 40q-2 -12 6 -14q8 2 4 10" fill="#2a1a0e"/><path d="M100 182h16" stroke="#111" stroke-width="3"/><path d="M108 210v8" stroke="#555" stroke-width="2"/>' +
      '<g class="bl-str"><path d="M106 44v138M110 44v138" stroke="#d9cfc0" stroke-width=".8"/></g>' +
      '<path d="M172 204v-24M164 204h16" stroke="#333" stroke-width="2"/><path d="M166 112h10v58q0 14 10 14q12 0 14 -14l2 -8h8l-2 10q-4 24 -22 22q-20 0 -20 -24z" fill="#d4a63a" stroke="#8a6a1a" stroke-width="1.5"/><path d="M200 158h12l-2 8h-12z" fill="#e8c050" stroke="#8a6a1a"/><path d="M166 112l-8 -6" stroke="#333" stroke-width="3"/>' +
      '<circle cx="171" cy="130" r="2" fill="#8a6a1a"/><circle cx="171" cy="142" r="2" fill="#8a6a1a"/><circle cx="171" cy="154" r="2" fill="#8a6a1a"/><circle cx="171" cy="166" r="2" fill="#8a6a1a"/>' +
      '<g class="bl-note"><text x="250" y="100" font-size="16" fill="' + AMBER + '">&#9834;</text></g><g class="bl-note bl-n2"><text x="300" y="96" font-size="14" fill="' + SAGE + '">&#9835;</text></g><g class="bl-note bl-n3"><text x="140" y="120" font-size="12" fill="#f4efe6">&#9834;</text></g>',
      sky("bl-s3", "#f2b46a", "#fbe6c4"));
  }

  /* 4. Wyck and its rose garden, Germantown */
  function blwyck() {
    const rose = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '"/><circle cx="' + x + '" cy="' + y + '" r="2" fill="#6a1a2a" opacity=".6"/>';
    let bush = ""; for (let i = 0; i < 8; i++) { const x = 20 + i * 50; bush += '<ellipse cx="' + x + '" cy="210" rx="24" ry="18" fill="#3f6a32"/>' + rose(x - 10, 202, "#e04a6a") + rose(x + 8, 206, "#f2a0b4") + rose(x - 2, 216, "#d23a5a") + rose(x + 14, 196, "#f6d0d8"); }
    let shut = ""; [[120, 96], [180, 96], [240, 96], [120, 140], [240, 140]].forEach(([x, y]) => shut += '<rect x="' + (x - 7) + '" y="' + y + '" width="6" height="26" fill="#2f5a3a"/><rect x="' + (x + 17) + '" y="' + y + '" width="6" height="26" fill="#2f5a3a"/><rect x="' + x + '" y="' + y + '" width="16" height="26" fill="#2c3440" stroke="#fff" stroke-width="1.5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#bl-s4)"/>' +
      tree(40, 140, 2.4, "#4a7a3a") + tree(360, 140, 2.4, "#4a7a3a") +
      '<rect x="96" y="84" width="200" height="104" fill="#f2efe6" stroke="#c9c2b2" stroke-width="2"/><path d="M88 86l108 -40l108 40z" fill="#5a4a46"/><rect x="250" y="44" width="14" height="24" fill="#c9c2b2"/>' +
      '<rect x="90" y="128" width="212" height="6" fill="#5a4a46"/>' + shut +
      '<rect x="186" y="146" width="22" height="42" fill="#2f5a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#7a9a5a"/><path d="M0 232h400" stroke="#c9b58f" stroke-width="10"/>' + bush +
      '<g class="bl-pet"><ellipse cx="120" cy="120" rx="3" ry="2" fill="#e04a6a"/></g><g class="bl-pet bl-p2"><ellipse cx="220" cy="110" rx="3" ry="2" fill="#f2a0b4"/></g><g class="bl-pet bl-p3"><ellipse cx="320" cy="130" rx="3" ry="2" fill="#d23a5a"/></g><g class="bl-pet bl-p2"><ellipse cx="60" cy="140" rx="3" ry="2" fill="#f6d0d8"/></g>' +
      '<rect x="120" y="8" width="160" height="20" rx="3" fill="#2a1e14" stroke="' + AMBER + '"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="9" fill="' + AMBER + '" letter-spacing="1">WYCK · THE ROSE GARDEN</text>',
      sky("bl-s4", "#9ccbe8", "#f2f2e0"));
  }

  /* 5. W Tulpehocken St and Greene St, the Ebenezer Maxwell Mansion behind */
  function blcorner() {
    const mansion = stone(150, 70, 150, 58, "#7e8076") + '<path d="M144 72h162l-14 -22h-134z" fill="#3a3a42"/>' +
      stone(196, 30, 44, 98, "#767870") + '<path d="M190 32h56l-10 -22h-36z" fill="#3a3a42"/><path d="M218 10v-8" stroke="#3a3a42" stroke-width="2"/>' +
      '<rect x="208" y="44" width="20" height="24" rx="10" fill="#ffd27a" class="bl-glow"/><rect x="164" y="86" width="16" height="22" fill="#2c3440" stroke="#d9cfc0"/><rect x="258" y="86" width="16" height="22" fill="#2c3440" stroke="#d9cfc0"/>' +
      '<path d="M144 72l6 6M306 72l-6 6M190 32l4 5M246 32l-4 5" stroke="#d9cfc0" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bl-s5)"/>' +
      tree(60, 112, 1.6, "#3f6a32") + tree(350, 110, 1.6, "#3f6a32") + mansion +
      stone(0, 128, 400, 124, "#6e6e66") +
      tag("BILAL", 46, 206, 52, AMBER, -6) + tag("G-TOWN", 220, 238, 20, SAGE, -3) +
      '<rect x="0" y="252" width="400" height="8" fill="#5a5a58"/>' +
      '<rect x="356" y="98" width="6" height="154" fill="#2f2f2f"/>' + sign(270, 100, 130, "W Tulpehocken St") + sign(304, 126, 96, "Greene St") +
      '<g class="bl-sp"><circle cx="200" cy="160" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="bl-sp bl-sp2"><circle cx="206" cy="154" r="2" fill="' + AMBER + '" opacity=".6"/></g>',
      sky("bl-s5", "#e98a5a", "#f8d8a8"));
  }

  window.SCENES = { blstation: blstation, bljohnson: bljohnson, blnewschool: blnewschool, blwyck: blwyck, blcorner: blcorner };
})();
