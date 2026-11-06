/* billhaley scenes (Regions tab: Philadelphia; Chester, PA / Boothwyn). CSS classes prefixed hb- (the page's own anim-train is kept).
   1 Chester Transit Center (formerly Chester Transportation Center), 6th & Welsh Sts: SEPTA Wilmington/Newark Line, the tracks running on the
     embankment over the station building, low side platforms, a stainless Silverliner with red and blue stripes pulling in, a bus waiting below.
   2 WPWA radio, Chester, where he was music director and had a live midday show: wood-paneled studio, ON AIR light, the mic, a 78 spinning.
   3 Melody Manor, 3190 Foulk Rd at Booth's Corner (Boothwyn/Garnet Valley), the house he built in 1954 where he grew up, with its own sign
     and the little cottage beside it.
   4 The Melody Manor basement where the Comets practiced: mid-century wood paneling, the original lights, the record case, slap bass, sax, drums.
   5 Crosby St and W 5th St in Chester, where the WPWA studio stood: green signs, the music notes and the comet star set in the sidewalk,
     BILL HALEY tagged on the wall, the Commodore Barry Bridge over the Delaware behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hbglow{0%,100%{opacity:.45}50%{opacity:1}}.hb-glow{animation:hbglow 2.4s ease-in-out infinite}.hb-glow2{animation-delay:-1.2s}' +
    '@keyframes hbonair{0%,100%{opacity:1}50%{opacity:.55}}.hb-onair{animation:hbonair 1.2s ease-in-out infinite}' +
    '@keyframes hbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.hb-spin{transform-box:fill-box;transform-origin:50% 50%;animation:hbspin 1.8s linear infinite}' +
    '@keyframes hbnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.hb-note{animation:hbnote 3.2s linear infinite}.hb-n2{animation-delay:-1.1s}.hb-n3{animation-delay:-2.2s}' +
    '@keyframes hbsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.hb-sway{transform-box:fill-box;transform-origin:50% 0%;animation:hbsway 2.8s ease-in-out infinite}.hb-sw2{animation-delay:-1.4s}' +
    '@keyframes hbcomet{0%{transform:translate(-80px,30px);opacity:0}10%{opacity:1}80%{opacity:1}100%{transform:translate(480px,-40px);opacity:0}}.hb-comet{animation:hbcomet 7s linear infinite}' +
    '@keyframes hbcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.hb-car{animation:hbcar 9s linear infinite}' +
    '@keyframes hbcarb{from{transform:translateX(0)}to{transform:translateX(-60px)}}.hb-busi{animation:hbcarb 4s ease-in-out infinite alternate}' +
    '@keyframes hbfly{0%,100%{opacity:0}50%{opacity:1}}.hb-fly{animation:hbfly 2s ease-in-out infinite}.hb-f2{animation-delay:-.7s}.hb-f3{animation-delay:-1.4s}' +
    '@keyframes hbwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.hb-wave{animation:hbwave 3s linear infinite}' +
    '@keyframes hbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hb-sp{animation:hbspray 1.4s ease-out infinite}.hb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "hb-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="hb-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4.5" ry="3.4" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3) + '" y="' + (y - 16) + '" width="1.8" height="16" fill="' + c + '"/><path d="M' + (x + 4.8) + ' ' + (y - 16) + 'q6 3 5 9" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const RED = "#ff4f5e", ICE = "#7fd3ff", GOLD = "#f5c542", RR = "#91456c", WOOD = "#8a5a32", WOOD2 = "#74482a";
  /* a comet: star head + streaming tail */
  const comet = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0L-46 -10L-44 -3L-60 -2L-44 2L-46 10z" fill="' + c + '" opacity=".55"/>' +
    '<path d="M0 -9l2.6 6.3l6.8 .5l-5.2 4.4l1.6 6.6l-5.8 -3.6l-5.8 3.6l1.6 -6.6l-5.2 -4.4l6.8 -.5z" fill="' + GOLD + '" stroke="#000" stroke-width="1"/></g>';
  const upright = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-1.5" y="-96" width="3" height="50" fill="#2a1a0e"/><path d="M-14 -46q-6 -14 0 -24q14 -6 28 0q6 10 0 24q12 10 8 30q-4 22 -22 24q-18 -2 -22 -24q-4 -20 8 -30z" fill="#a0522d" stroke="#4a2410" stroke-width="1.5"/>' +
    '<path d="M-5 -34q-3 5 0 10M5 -34q3 5 0 10" stroke="#2a1a0e" stroke-width="1.5" fill="none"/><rect x="-1" y="-60" width="2" height="54" fill="#e8d8b0"/><rect x="-6" y="-14" width="12" height="3" fill="#2a1a0e"/><rect x="-1" y="8" width="2" height="8" fill="#888"/></g>';

  /* 1. Chester Transit Center, Wilmington/Newark Line */
  function hbstation() {
    const train = '<g class="anim-train"><rect x="20" y="96" width="320" height="62" rx="8" fill="#d6dade" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (28 + i * 19) + ' 100v54" stroke="#bfc4c9" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 46) + '" y="106" width="34" height="20" rx="3" fill="#1d2731"/>').join("") +
      '<rect x="20" y="134" width="320" height="5" fill="#c8102e"/><rect x="20" y="140" width="320" height="4" fill="#1f4e9a"/>' +
      '<rect x="168" y="104" width="22" height="46" fill="#aab0b6" stroke="#6a7178"/><path d="M179 104v46" stroke="#6a7178"/>' +
      '<rect x="318" y="100" width="22" height="54" rx="5" fill="#c8ccd0"/><rect x="321" y="104" width="16" height="10" rx="2" fill="#111"/><text x="329" y="111.5" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">WILM</text>' +
      '<circle cx="330" cy="146" r="3.5" fill="#fff6c2" class="hb-glow"/><path d="M180 96l20 -26M200 70h-14" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hb-s1)"/>' + stars(10) +
      /* Chester rooftops and the old riverside stacks */
      '<rect x="0" y="62" width="400" height="20" fill="#3a2f3a"/>' + [[10, 40], [70, 30], [130, 46], [250, 36], [320, 44]].map(([x, h]) => '<rect x="' + x + '" y="' + (82 - h) + '" width="44" height="' + h + '" fill="#2f2632"/>').join("") +
      '<rect x="200" y="28" width="8" height="54" fill="#2a2228"/><rect x="214" y="36" width="8" height="46" fill="#2a2228"/>' +
      /* catenary of the Northeast Corridor */
      '<path d="M0 68h400" stroke="#222" stroke-width="1.5"/>' + [60, 360].map(x => '<rect x="' + (x - 3) + '" y="56" width="6" height="104" fill="#4a4f56"/><rect x="' + (x - 18) + '" y="62" width="36" height="4" fill="#4a4f56"/>').join("") +
      /* platform canopy, behind the train */
      '<rect x="230" y="78" width="170" height="8" fill="#5a5f66"/>' + [250, 320, 390].map(x => '<rect x="' + (x - 2) + '" y="86" width="4" height="70" fill="#5a5f66"/>').join("") +
      train +
      /* low side platform */
      '<rect x="0" y="158" width="400" height="10" fill="#9a958c"/><rect x="0" y="156" width="400" height="3" fill="#f2c200"/>' +
      /* the station building under the tracks, buses outside */
      '<rect x="0" y="168" width="400" height="56" fill="#a0583a"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (176 + i * 10) + 'h400" stroke="#8a4a30" stroke-width="1"/>').join("") +
      '<rect x="0" y="168" width="400" height="6" fill="#6a4030"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 64) + '" y="182" width="34" height="30" fill="#2a2a32"/><rect x="' + (22 + i * 64) + '" y="184" width="30" height="12" fill="#ffd98a" opacity=".55" class="' + (i % 2 ? "hb-glow" : "hb-glow hb-glow2") + '"/>').join("") +
      '<rect x="0" y="224" width="400" height="36" fill="#3e3c3a"/><rect x="0" y="222" width="400" height="3" fill="#cfd3d8"/>' +
      '<g class="hb-busi"><rect x="250" y="208" width="120" height="34" rx="6" fill="#f2f4f6" stroke="#5a5f66"/><rect x="250" y="230" width="120" height="4" fill="#1f4e9a"/><rect x="250" y="234" width="120" height="3" fill="#c8102e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (258 + i * 22) + '" y="213" width="16" height="12" rx="2" fill="#1d2731"/>').join("") +
      '<rect x="352" y="212" width="14" height="7" fill="#111"/><text x="359" y="218" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">37</text><circle cx="270" cy="244" r="6" fill="#111"/><circle cx="350" cy="244" r="6" fill="#111"/></g>' +
      /* black station sign with the Regional Rail badge */
      '<rect x="14" y="12" width="262" height="36" rx="3" fill="#111"/><text x="24" y="35" ' + font + ' font-size="15" fill="#fff">Chester Transit Center</text>' +
      '<rect x="216" y="20" width="50" height="20" rx="4" fill="' + RR + '"/><text x="241" y="35" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">RR</text>',
      sky("hb-s1", "#1c2240", "#d9845a"));
  }

  /* 2. WPWA studio, Chester */
  function hbwpwa() {
    return svg(
      '<rect width="400" height="260" fill="' + WOOD + '"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="1.5" height="260" fill="' + WOOD2 + '"/>').join("") +
      /* acoustic tile ceiling */
      '<rect x="0" y="0" width="400" height="34" fill="#e8e2d0"/>' + Array.from({ length: 80 }, (_, i) => '<circle cx="' + (6 + (i % 40) * 10) + '" cy="' + (10 + Math.floor(i / 40) * 14) + '" r="1.2" fill="#b8b0a0"/>').join("") +
      /* call letters */
      '<text x="30" y="80" ' + font + ' font-size="34" fill="' + GOLD + '" stroke="#3a2010" stroke-width="2" paint-order="stroke" letter-spacing="4">WPWA</text>' +
      '<text x="32" y="98" ' + font + ' font-size="11" fill="#f3e6c8" letter-spacing="2">CHESTER, PA</text>' +
      /* ON AIR light */
      '<rect x="292" y="46" width="88" height="30" rx="5" fill="#2a0a0a" stroke="#000" stroke-width="2"/><rect class="hb-onair" x="296" y="50" width="80" height="22" rx="3" fill="#e0242f"/><text x="336" y="66" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">ON AIR</text>' +
      /* control-room window */
      '<rect x="180" y="96" width="200" height="72" fill="#1b2a36" stroke="#3a2010" stroke-width="5"/><rect x="190" y="132" width="180" height="30" fill="#4a4f56"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (198 + i * 12.5) + '" cy="140" r="3" fill="#1a1a1a"/><rect x="' + (196 + i * 12.5) + '" y="148" width="4" height="10" fill="#d8d8d8"/>').join("") +
      '<rect x="200" y="104" width="70" height="20" rx="2" fill="#0d1820"/><path class="hb-wave" d="M200 114q5 -8 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" stroke="' + ICE + '" stroke-width="2" fill="none"/>' +
      '<rect x="288" y="104" width="30" height="18" rx="2" fill="#e8dcc0"/><path d="M303 120l8 -12" stroke="#c00" stroke-width="1.5"/><rect x="326" y="104" width="30" height="18" rx="2" fill="#e8dcc0"/><path d="M341 120l-6 -12" stroke="#c00" stroke-width="1.5"/>' +
      /* desk + turntable with a spinning 78 */
      '<rect x="0" y="200" width="400" height="60" fill="#4a2a18"/><rect x="0" y="196" width="400" height="6" fill="#2a160c"/>' +
      '<rect x="200" y="196" width="120" height="8" fill="#3a2a1e"/><rect x="210" y="186" width="100" height="12" rx="2" fill="#6a6a6a" stroke="#222"/>' +
      '<g transform="translate(252 186) scale(1 0.3)"><g class="hb-spin"><circle cx="0" cy="0" r="38" fill="#111"/><circle cx="0" cy="0" r="30" fill="none" stroke="#2a2a2a" stroke-width="2"/><circle cx="0" cy="0" r="22" fill="none" stroke="#2a2a2a" stroke-width="2"/><circle cx="0" cy="0" r="12" fill="' + RED + '"/><rect x="-2" y="-36" width="4" height="10" fill="#555"/><circle cx="0" cy="0" r="2" fill="#fff"/></g></g>' +
      '<path d="M300 176l-24 8" stroke="#ccc" stroke-width="3"/><circle cx="300" cy="176" r="4" fill="#888"/>' +
      /* the mic on a stand */
      '<rect x="148" y="140" width="4" height="60" fill="#9aa0a6"/><rect x="134" y="196" width="32" height="5" rx="2" fill="#555"/><rect x="134" y="116" width="32" height="30" rx="9" fill="#c8ccd0" stroke="#333" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (138 + i * 6) + ' 120v22" stroke="#7a8086" stroke-width="1.5"/>').join("") +
      /* acoustic guitar leaning by the desk */
      '<g transform="translate(46 190) rotate(-12)"><rect x="-2" y="-90" width="4" height="56" fill="#3a2414"/><rect x="-4" y="-98" width="8" height="10" rx="2" fill="#2a1a0e"/><circle cx="0" cy="-24" r="14" fill="#d89a5a" stroke="#6a3a1a" stroke-width="1.5"/><circle cx="0" cy="-2" r="19" fill="#d89a5a" stroke="#6a3a1a" stroke-width="1.5"/><circle cx="0" cy="-14" r="5" fill="#2a1a0e"/></g>' +
      note(176, 120, GOLD, "") + note(196, 104, ICE, "hb-n2") + note(166, 96, "#fff", "hb-n3"));
  }

  /* 3. Melody Manor, 3190 Foulk Rd, Booth's Corner */
  function hbmanor() {
    return svg(
      '<rect width="400" height="260" fill="url(#hb-s3)"/>' + stars(24) +
      '<g class="hb-comet">' + comet(60, 40, 0.8, ICE) + '</g>' +
      /* trees */
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (i * 56 + 10) + '" cy="' + (104 + (i % 3) * 8) + '" r="' + (30 + (i % 2) * 8) + '" fill="' + (i % 2 ? "#1f3420" : "#264028") + '"/>').join("") +
      /* lawn */
      '<rect x="0" y="170" width="400" height="90" fill="#2e4a26"/>' +
      /* the main house */
      '<path d="M110 120l80 -36l80 36z" fill="#3a3436" stroke="#1a1416" stroke-width="2"/><rect x="118" y="120" width="144" height="62" fill="#e9e2d2" stroke="#8a8270" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M118 ' + (128 + i * 9) + 'h144" stroke="#d2cab8" stroke-width="1"/>').join("") +
      [132, 222].map((x, k) => '<rect x="' + x + '" y="132" width="28" height="22" fill="#ffd98a" class="' + (k ? "hb-glow hb-glow2" : "hb-glow") + '"/><path d="M' + (x + 14) + ' 132v22M' + x + ' 143h28" stroke="#5a4a3a" stroke-width="1.5"/><rect x="' + (x - 4) + '" y="132" width="4" height="22" fill="#2a4a6a"/><rect x="' + (x + 28) + '" y="132" width="4" height="22" fill="#2a4a6a"/>').join("") +
      '<rect x="178" y="146" width="24" height="36" fill="#7a2a2a"/><circle cx="197" cy="165" r="1.6" fill="' + GOLD + '"/><rect x="172" y="180" width="36" height="4" fill="#9a948a"/>' +
      '<rect x="236" y="92" width="12" height="24" fill="#6a4a3a"/>' +
      /* the three-car garage */
      '<rect x="262" y="140" width="96" height="42" fill="#ddd6c6" stroke="#8a8270" stroke-width="1.5"/><path d="M258 140h104l-8 -14h-88z" fill="#3a3436"/>' + [268, 298, 328].map(x => '<rect x="' + x + '" y="150" width="26" height="32" fill="#c8c0ae" stroke="#8a8270"/>').join("") +
      /* the little cottage he grew up in */
      '<path d="M22 150l30 -22l30 22z" fill="#4a3a32"/><rect x="28" y="150" width="48" height="32" fill="#d8ccb2" stroke="#8a7a60"/><rect x="36" y="158" width="12" height="10" fill="#ffd98a" class="hb-glow"/><rect x="56" y="160" width="12" height="22" fill="#5a3a2a"/>' +
      /* driveway */
      '<path d="M270 182l-40 78h90l-10 -78z" fill="#6a665e"/>' +
      /* the Melody Manor sign */
      '<rect x="100" y="196" width="5" height="40" fill="#3a2414"/><rect x="164" y="196" width="5" height="40" fill="#3a2414"/>' +
      '<rect x="88" y="188" width="94" height="30" rx="4" fill="#f3e6c8" stroke="#3a2414" stroke-width="2.5"/><text x="135" y="203" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="12" fill="#7a2a2a">Melody Manor</text>' +
      '<path d="M100 210h70" stroke="#3a2414" stroke-width=".8"/><path d="M100 213h70" stroke="#3a2414" stroke-width=".8"/><ellipse cx="114" cy="212" rx="2.4" ry="1.8" fill="#3a2414"/><ellipse cx="134" cy="210" rx="2.4" ry="1.8" fill="#3a2414"/><ellipse cx="154" cy="213" rx="2.4" ry="1.8" fill="#3a2414"/>' +
      /* fireflies */
      [[40, 210], [210, 220], [330, 214], [370, 200], [20, 236]].map(([x, y], i) => '<circle class="hb-fly hb-f' + (i % 3 + 1) + '" cx="' + x + '" cy="' + y + '" r="2" fill="#f8f08a"/>').join("") +
      /* mailbox at the road */
      '<rect x="370" y="214" width="4" height="30" fill="#3a2414"/><rect x="360" y="204" width="24" height="12" rx="5" fill="#2a2a2a"/>',
      sky("hb-s3", "#0d1530", "#3a3a6a"));
  }

  /* 4. The Melody Manor basement, where the Comets practiced */
  function hbbasement() {
    const lamp = (x, cls) => '<g class="hb-sway ' + cls + '"><rect x="' + (x - 1) + '" y="0" width="2" height="34" fill="#333"/><path d="M' + (x - 18) + ' 50l8 -16h20l8 16z" fill="' + GOLD + '" stroke="#5a4010" stroke-width="1.5"/><ellipse cx="' + x + '" cy="52" rx="10" ry="3" fill="#fff6c2" class="hb-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#9a6a3c"/>' + Array.from({ length: 27 }, (_, i) => '<rect x="' + (i * 15) + '" y="0" width="' + (i % 3 ? 1 : 2) + '" height="210" fill="#6e4626"/>').join("") +
      '<rect x="0" y="0" width="400" height="14" fill="#5a3a22"/>' +
      '<ellipse cx="200" cy="110" rx="220" ry="120" fill="#ffd98a" opacity=".12"/>' +
      lamp(90, "") + lamp(310, "hb-sw2") +
      /* the record case with records */
      '<rect x="20" y="96" width="92" height="96" fill="#5a3a22" stroke="#2a1a0e" stroke-width="3"/><path d="M20 128h92M20 160h92" stroke="#2a1a0e" stroke-width="3"/>' +
      Array.from({ length: 30 }, (_, i) => { const row = Math.floor(i / 10), c = ["#111", "#2a2a2a", RED, ICE][i % 4]; return '<rect x="' + (25 + (i % 10) * 8.4) + '" y="' + (100 + row * 32) + '" width="6" height="25" fill="' + c + '"/>'; }).join("") +
      /* floor */
      '<rect x="0" y="210" width="400" height="50" fill="#5a4a3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 210l-20 50" stroke="#4a3a2a" stroke-width="1.5"/>').join("") +
      /* slap bass */
      upright(150, 206) +
      /* drums */
      '<ellipse cx="236" cy="176" rx="30" ry="30" fill="#f3f0e8" stroke="#888" stroke-width="3"/><ellipse cx="236" cy="176" rx="22" ry="22" fill="none" stroke="#c8c4bc" stroke-width="1"/>' +
      '<rect x="262" y="150" width="34" height="14" rx="2" fill="#e0e0e0" stroke="#666" stroke-width="2"/><ellipse cx="279" cy="150" rx="17" ry="4" fill="#f8f8f8" stroke="#666"/><rect x="277" y="164" width="3" height="44" fill="#888"/>' +
      '<ellipse cx="208" cy="134" rx="18" ry="3" fill="' + GOLD + '" stroke="#8a6a10"/><rect x="207" y="136" width="2" height="72" fill="#888"/>' +
      /* sax on a stand */
      '<g transform="translate(336 120)"><path d="M0 0q4 40 -4 62q-6 18 10 20q16 0 14 -18l-2 -12" stroke="' + GOLD + '" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M0 0l-10 -14" stroke="' + GOLD + '" stroke-width="4"/>' +
      Array.from({ length: 5 }, (_, i) => '<circle cx="' + (4 - i * 0.4) + '" cy="' + (14 + i * 10) + '" r="2" fill="#a8801a"/>').join("") + '<path d="M-6 86l10 -4l10 4" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* amp */
      '<rect x="356" y="170" width="38" height="40" rx="3" fill="#3a2a22" stroke="#111" stroke-width="2"/><rect x="361" y="176" width="28" height="26" fill="#c8b48a"/>' +
      note(190, 100, "#fff", "") + note(260, 90, GOLD, "hb-n2") + note(310, 112, ICE, "hb-n3"));
  }

  /* 5. Crosby St and W 5th St, Chester */
  function hbcorner() {
    const truss = (x0, w, top) => { let s = '<path d="M' + x0 + ' 118 Q' + (x0 + w / 2) + ' ' + top + ' ' + (x0 + w) + ' 118" stroke="#8fa3b4" stroke-width="3" fill="none"/>'; for (let i = 0; i <= 10; i++) { const x = x0 + i * w / 10, t = i / 10, y = (1 - t) * (1 - t) * 118 + 2 * t * (1 - t) * top + t * t * 118; s += '<path d="M' + x + ' 118V' + y.toFixed(1) + '" stroke="#8fa3b4" stroke-width="1.5"/>' + (i < 10 ? '<path d="M' + x + ' 118L' + (x + w / 10) + ' ' + ((1 - (t + .1)) * (1 - (t + .1)) * 118 + 2 * (t + .1) * (1 - (t + .1)) * top + (t + .1) * (t + .1) * 118).toFixed(1) + '" stroke="#8fa3b4" stroke-width="1"/>' : ""); } return s; };
    const noteInlay = (x, y) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="6" ry="3" fill="#1a1a1a"/><rect x="' + (x + 4) + '" y="' + (y - 14) + '" width="2" height="14" fill="#1a1a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hb-s5)"/>' + stars(16) +
      /* the Commodore Barry Bridge over the Delaware */
      '<rect x="0" y="118" width="400" height="16" fill="#1d2a3e"/><path d="M0 116h400" stroke="#8fa3b4" stroke-width="3"/>' +
      truss(70, 170, 52) + truss(0, 70, 96) + truss(240, 160, 86) +
      [70, 240].map(x => '<rect x="' + (x - 4) + '" y="96" width="8" height="38" fill="#6f8396"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (i * 30 + 6) + '" cy="113" r="1.4" fill="#ffd98a" class="' + (i % 2 ? "hb-glow" : "hb-glow hb-glow2") + '"/>').join("") +
      '<rect class="hb-wave" x="0" y="126" width="440" height="2" fill="#3a5a7a" opacity=".6"/>' +
      /* parking lot where the studio stood + low brick wall */
      '<rect x="0" y="134" width="400" height="70" fill="#3a3a3e"/>' +
      '<rect x="0" y="150" width="270" height="56" fill="#8a3e2c"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (158 + i * 8) + 'h270" stroke="#6e2e20" stroke-width="1"/>').join("") +
      Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 8 + (Math.floor(i / 2) % 2) * 4) + ' 150v56" stroke="#6e2e20" stroke-width=".6" opacity=".5"/>').join("") +
      '<rect x="0" y="146" width="270" height="6" fill="#a8a29a"/>' +
      tag("BILL HALEY", 14, 186, 34, "#ff4f5e", -5) + tag("& HIS COMETS", 40, 202, 15, ICE, -3) + tag("CRAZY MAN", 180, 196, 14, GOLD, -4) +
      /* sidewalk with the music notes and the comet star set into it */
      '<rect x="0" y="206" width="400" height="22" fill="#b8b2a8"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 42) + ' 206v22" stroke="#9a948a" stroke-width="1"/>').join("") +
      noteInlay(60, 222) + noteInlay(110, 219) + noteInlay(160, 223) +
      '<path d="M220 210l2.8 6.4l7 .6l-5.3 4.5l1.6 6.8l-6.1 -3.7l-6.1 3.7l1.6 -6.8l-5.3 -4.5l7 -.6z" fill="' + GOLD + '" stroke="#1a1a1a" stroke-width="1"/><path d="M204 214h-14M204 219h-18M204 224h-14" stroke="#1a1a1a" stroke-width="1.5"/>' +
      /* street */
      '<rect x="0" y="228" width="400" height="32" fill="#3e3c3a"/><rect x="0" y="227" width="400" height="3" fill="#d8dce2"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44 + 8) + '" y="244" width="24" height="3" fill="#f2c200"/>').join("") +
      '<g class="hb-car"><rect x="0" y="232" width="70" height="14" rx="5" fill="#d64a5a"/><rect x="14" y="223" width="40" height="11" rx="4" fill="#e9e2d2"/><circle cx="16" cy="247" r="4" fill="#111"/><circle cx="54" cy="247" r="4" fill="#111"/></g>' +
      /* signs */
      '<rect x="380" y="60" width="6" height="168" fill="#2f2f2f"/>' + sign(286, 62, 106, "Crosby St") + sign(286, 88, 106, "W 5th St") +
      '<g class="hb-sp"><circle cx="150" cy="168" r="3" fill="#ff4f5e" opacity=".7"/></g><g class="hb-sp hb-sp2"><circle cx="156" cy="162" r="2" fill="#ff4f5e" opacity=".6"/></g>',
      sky("hb-s5", "#0e1230", "#5a3a5a"));
  }

  window.SCENES = { hbstation: hbstation, hbwpwa: hbwpwa, hbmanor: hbmanor, hbbasement: hbbasement, hbcorner: hbcorner };
})();
