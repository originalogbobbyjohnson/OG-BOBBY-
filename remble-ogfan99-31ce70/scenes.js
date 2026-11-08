/* remble scenes (Regions tab: Los Angeles + SoCal; San Pedro). CSS classes and ids prefixed rb- (the page's own anim-train is kept).
   1 Harbor Beacon Park & Ride, San Pedro (Metro J Line, 515 N Beacon St, where the Harbor Freeway ends): a silver J Line bus pulling in at the curb stop, the harbor, a cruise ship and the Catalina boat behind.
   2 Peck Park, San Pedro ("Remember when we would hit Peck and get the park jumpin'?", Where's Remble?): the gym, the outdoor court, a ball bouncing, palms on the canyon edge.
   3 The Battleship Iowa at the San Pedro waterfront: the grey battleship, its big gun turrets, signal flags waving, gulls, the harbor rippling.
   4 Simms Park, Bellflower ("I miss catchin' fades at Simms Park", Where's Remble?; he also grew up in Bellflower): the grass, the ball field backstop, the picnic shelter, a sunny day.
   5 N Western Ave and W Summerland Ave by Peck Park: green signs, REMBLE tagged, the Korean Bell of Friendship pavilion up on the Angels Gate bluff behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rb-flk{animation:rbflick 2.2s infinite}.rb-flk2{animation-delay:.8s}' +
    '@keyframes rbrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.rb-rip{animation:rbrip 3s ease-in-out infinite}.rb-rip2{animation-delay:-1.5s}' +
    '@keyframes rbboat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.rb-boat{animation:rbboat 16s linear infinite}' +
    '@keyframes rbgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-26px)}}.rb-gull{animation:rbgull 10s linear infinite}.rb-gull2{animation-delay:-5s}' +
    '@keyframes rbball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.rb-ball{animation:rbball 1s ease-in-out infinite}' +
    '@keyframes rbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.rb-flag{transform-box:fill-box;transform-origin:0% 50%;animation:rbflag 1.4s ease-in-out infinite}.rb-flag2{animation-delay:-.7s}' +
    '@keyframes rbpalm{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.rb-palm{transform-box:fill-box;transform-origin:50% 100%;animation:rbpalm 3s ease-in-out infinite}.rb-palm2{animation-delay:-1.5s}' +
    '@keyframes rbsun{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rb-sun{transform-box:fill-box;transform-origin:50% 50%;animation:rbsun 18s linear infinite}' +
    '@keyframes rbswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.rb-swing{transform-box:fill-box;transform-origin:50% 0%;animation:rbswing 2.2s ease-in-out infinite}' +
    '@keyframes rbbell{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rb-bell{transform-box:fill-box;transform-origin:50% 0%;animation:rbbell 2.6s ease-in-out infinite}' +
    '@keyframes rbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rb-sp{animation:rbspray 1.4s ease-out infinite}.rb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="rb-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5b4636" stroke-width="5" fill="none"/>' +
    [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + (p[1] + 4) + '" stroke="#2f7d46" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const SILVER = "#adb8bf", BLUE = "#4aa3ff", GOLD = "#f2c94c";

  /* 1. Harbor Beacon Park & Ride, Metro J Line */
  function rbstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="140" width="32" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="24" y="128" width="320" height="64" rx="10" fill="#cfd6db" stroke="#6d777e" stroke-width="2"/>' + win +
      '<rect x="24" y="168" width="320" height="8" fill="' + SILVER + '"/><rect x="24" y="176" width="320" height="3" fill="#56616a"/>' +
      '<rect x="172" y="132" width="10" height="56" fill="#9aa4ab"/>' +
      '<rect x="322" y="134" width="20" height="50" rx="5" fill="#b9c2c8"/><circle cx="334" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="131" width="56" height="7" rx="2" fill="#111"/><text x="290" y="137" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">SAN PEDRO</text>' +
      '<circle cx="76" cy="194" r="11" fill="#151515"/><circle cx="76" cy="194" r="4" fill="#777"/><circle cx="228" cy="194" r="11" fill="#151515"/><circle cx="228" cy="194" r="4" fill="#777"/><circle cx="300" cy="194" r="11" fill="#151515"/><circle cx="300" cy="194" r="4" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbs1)"/>' +
      '<path d="M0 96q60 -18 120 -6t130 -4t150 6v20H0z" fill="#7d8c6a" opacity=".8"/>' +
      '<rect x="0" y="104" width="400" height="30" fill="#2f6f9a"/>' +
      '<g><rect x="230" y="78" width="150" height="24" rx="4" fill="#f5f5f2"/><rect x="250" y="66" width="110" height="14" rx="3" fill="#ecebe6"/><rect x="276" y="56" width="58" height="12" rx="2" fill="#e2e1dc"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (236 + i * 12) + '" y="84" width="7" height="4" fill="#2f6f9a"/>').join("") + '<rect x="300" y="44" width="14" height="14" fill="#c43a2f"/><path d="M228 102h156l-10 4H238z" fill="#1d4f72"/></g>' +
      '<g class="rb-boat"><path d="M10 114h56l-6 8H18z" fill="#f2f2f2"/><rect x="20" y="106" width="34" height="8" rx="2" fill="#e8e8e8"/><rect x="24" y="108" width="26" height="3" fill="#1d4f72"/><path d="M14 122h48" stroke="#ffffff" stroke-width="2" opacity=".6"/></g>' +
      '<g class="rb-rip"><path d="M10 126h40M120 120h50M230 128h40" stroke="#bfe0f2" stroke-width="2" opacity=".6"/></g><g class="rb-rip rb-rip2"><path d="M70 130h30M180 132h50M320 124h40" stroke="#bfe0f2" stroke-width="2" opacity=".5"/></g>' +
      palm(20, 134, 70, "") + palm(386, 134, 62, "rb-palm2") +
      '<rect x="0" y="134" width="400" height="70" fill="#8e8a80"/><rect x="0" y="198" width="400" height="10" fill="#d6d1c4"/><rect x="0" y="208" width="400" height="52" fill="#3f3f44"/><path d="M0 236h400" stroke="#e7e2a8" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="356" y="70" width="5" height="128" fill="#2b2b2b"/>' +
      bus +
      '<rect x="20" y="16" width="250" height="34" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="40" cy="33" r="11" fill="' + SILVER + '"/><text x="40" y="38" text-anchor="middle" ' + font + ' font-size="14" fill="#111">J</text>' +
      '<text x="58" y="30" ' + font + ' font-size="12" fill="#fff">Harbor Beacon Park &amp; Ride</text><text x="58" y="44" ' + font + ' font-size="8" fill="#b9c2c8">BEACON ST · SAN PEDRO</text>' +
      gull("rb-gull", 0, 64) + gull("rb-gull rb-gull2", 0, 50),
      sky("rbs1", "#8fc9ee", "#f7e7c6"));
  }

  /* 2. Peck Park */
  function rbpeck() {
    const ball = '<g class="rb-ball"><circle cx="252" cy="196" r="8" fill="#e8742b"/><path d="M244 196h16M252 188v16" stroke="#3a1f10" stroke-width="1.2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbs2)"/>' +
      '<path d="M0 120q40 -40 90 -30t100 -12t110 8t100 -20v74H0z" fill="#6f8f4c"/><path d="M0 136q80 -24 160 -10t140 -6t100 0v20H0z" fill="#557a3c"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (14 + i * 46) + '" cy="' + (118 - (i % 3) * 6) + '" r="' + (14 + (i % 2) * 6) + '" fill="#3f6b33"/>').join("") +
      '<g><rect x="34" y="96" width="150" height="56" fill="#c9b08a"/><rect x="34" y="88" width="150" height="10" fill="#8a5a3a"/>' +
      '<rect x="44" y="106" width="34" height="34" fill="#3d6f8f"/><rect x="84" y="106" width="20" height="34" fill="#e6c34a"/><rect x="110" y="106" width="64" height="16" fill="#3d6f8f"/><rect x="110" y="126" width="64" height="14" fill="#a3543a"/>' +
      '<text x="109" y="150" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a1a">PECK PARK GYM</text></g>' +
      palm(206, 152, 82, "") + palm(380, 150, 70, "rb-palm2") +
      '<rect x="0" y="152" width="400" height="108" fill="#4f7d43"/>' +
      '<rect x="190" y="160" width="200" height="88" fill="#2f5d8a"/><rect x="196" y="166" width="188" height="76" fill="none" stroke="#f4f4f4" stroke-width="2"/><path d="M290 166v76" stroke="#f4f4f4" stroke-width="2"/><circle cx="290" cy="204" r="14" fill="none" stroke="#f4f4f4" stroke-width="2"/>' +
      '<rect x="368" y="150" width="4" height="56" fill="#ddd"/><rect x="350" y="148" width="26" height="18" fill="#fff" stroke="#888"/><path d="M352 168h14l-3 10h-8z" fill="none" stroke="#f4f4f4" stroke-width="1.5"/>' +
      ball +
      '<rect x="18" y="180" width="140" height="28" rx="3" fill="#6b4a2c"/><text x="88" y="199" text-anchor="middle" ' + font + ' font-size="13" fill="#f6e7c1">PECK PARK</text><rect x="40" y="208" width="6" height="22" fill="#4a3220"/><rect x="130" y="208" width="6" height="22" fill="#4a3220"/>' +
      '<text x="88" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="#e8f2e0">GET THE PARK JUMPIN\'</text>',
      sky("rbs2", "#7cc3ef", "#e9f4f7"));
  }

  /* 3. Battleship Iowa */
  function rbiowa() {
    const turret = (x, dir) => '<rect x="' + x + '" y="110" width="30" height="16" rx="5" fill="#7d868c" stroke="#4a5257" stroke-width="1.5"/>' + [0, 4, 8].map(d => '<rect x="' + (dir > 0 ? x + 28 : x - 34) + '" y="' + (112 + d) + '" width="36" height="2.4" fill="#5d666c"/>').join("");
    const flags = ["#e8b923", "#1f4fa0", "#d63b2f", "#f4f4f4", "#2b8a3e"].map((c, i) => '<rect class="rb-flag' + (i % 2 ? " rb-flag2" : "") + '" x="' + (200 + i * 14) + '" y="' + (64 + i * 9) + '" width="12" height="8" fill="' + c + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rbs3)"/>' +
      '<path d="M0 112q80 -10 160 -4t240 -2v20H0z" fill="#9aa69a" opacity=".7"/>' +
      '<rect x="0" y="122" width="400" height="138" fill="#2d6688"/>' +
      '<path d="M190 58L262 100" stroke="#333" stroke-width="1"/><path d="M190 58L330 112" stroke="#333" stroke-width="1"/>' + flags +
      '<rect x="186" y="56" width="4" height="70" fill="#5d666c"/>' +
      '<rect x="160" y="84" width="70" height="44" fill="#8c959b"/><rect x="172" y="70" width="44" height="16" fill="#949da3"/><rect x="182" y="62" width="24" height="10" fill="#a0a9ae"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (168 + i * 12) + '" y="94" width="7" height="5" fill="#2a3238"/>').join("") +
      '<rect x="236" y="98" width="20" height="30" fill="#8c959b"/><rect x="240" y="88" width="12" height="12" fill="#6d767c"/>' +
      '<path d="M20 136L56 126H350L388 132L372 160H44z" fill="#6e777d" stroke="#4a5257" stroke-width="2"/><path d="M44 150H372" stroke="#4a5257" stroke-width="2"/>' +
      turret(124, 1) + turret(70, -1) + turret(272, 1) +
      '<path d="M28 160H380l-8 6H40z" fill="#9c3b2f"/>' +
      '<g class="rb-rip"><path d="M0 178h70M110 186h60M220 176h70M320 190h60" stroke="#bfe0f2" stroke-width="2" opacity=".6"/></g><g class="rb-rip rb-rip2"><path d="M40 204h50M160 212h60M270 206h60" stroke="#bfe0f2" stroke-width="2" opacity=".5"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#8e8a80"/><rect x="0" y="224" width="400" height="4" fill="#d6d1c4"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (10 + i * 40) + '" y="214" width="4" height="12" fill="#3a3a3a"/>').join("") + '<path d="M0 216h400" stroke="#3a3a3a" stroke-width="2"/>' +
      gull("rb-gull", 0, 46) + gull("rb-gull rb-gull2", 0, 34) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a">SAN PEDRO WATERFRONT</text>',
      sky("rbs3", "#9fd0f0", "#eef3ee"));
  }

  /* 4. Simms Park, Bellflower */
  function rbsimms() {
    const rays = '<g class="rb-sun">' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (330 + Math.cos(a) * 28) + ' ' + (50 + Math.sin(a) * 28) + 'L' + (330 + Math.cos(a) * 40) + ' ' + (50 + Math.sin(a) * 40) + '" stroke="#ffd34d" stroke-width="4" stroke-linecap="round"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbs4)"/>' + rays + '<circle cx="330" cy="50" r="22" fill="#ffd34d"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (20 + i * 52) + '" cy="' + (124 - (i % 2) * 8) + '" r="' + (20 + (i % 3) * 4) + '" fill="#3f6b33"/>').join("") +
      '<rect x="0" y="130" width="400" height="130" fill="#5c9a4a"/><path d="M0 170h400M0 210h400" stroke="#68a656" stroke-width="18" opacity=".6"/>' +
      '<path d="M40 214q60 -50 120 0z" fill="#c9965a"/><circle cx="100" cy="196" r="5" fill="#f4f4f4"/>' +
      '<g fill="none" stroke="#9aa0a6" stroke-width="2"><path d="M60 130v62M80 124v68M100 122v70M120 124v68M140 130v62"/><path d="M60 132q40 -14 80 0M60 150q40 -12 80 0M60 170q40 -10 80 0"/></g>' +
      '<g><path d="M226 120l50 -22l50 22z" fill="#a3543a"/><rect x="232" y="120" width="88" height="8" fill="#8a4a32"/><rect x="236" y="128" width="5" height="40" fill="#e6dccb"/><rect x="311" y="128" width="5" height="40" fill="#e6dccb"/>' +
      '<rect x="250" y="150" width="54" height="6" fill="#8a5a3a"/><rect x="254" y="156" width="4" height="12" fill="#6b4a2c"/><rect x="296" y="156" width="4" height="12" fill="#6b4a2c"/></g>' +
      '<rect x="168" y="120" width="4" height="70" fill="#7a7a7a"/><rect x="200" y="120" width="4" height="70" fill="#7a7a7a"/><rect x="164" y="118" width="44" height="4" fill="#7a7a7a"/>' +
      '<g class="rb-swing"><path d="M178 122v38M194 122v38" stroke="#444" stroke-width="1.5"/><rect x="174" y="158" width="24" height="4" fill="#d63b2f"/></g>' +
      '<rect x="234" y="196" width="150" height="28" rx="3" fill="#2f5d8a"/><text x="309" y="215" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">SIMMS PARK</text><text x="309" y="240" text-anchor="middle" ' + font + ' font-size="9" fill="#14321a">BELLFLOWER</text>' +
      '<rect x="252" y="224" width="5" height="12" fill="#1d3a5c"/><rect x="362" y="224" width="5" height="12" fill="#1d3a5c"/>',
      sky("rbs4", "#5fb6ee", "#e3f3fb"));
  }

  /* 5. Western Ave and Summerland Ave */
  function rbcorner() {
    const bell = '<g><path d="M70 74L114 58L158 74z" fill="#2f8a7a"/><path d="M62 76q52 -10 104 0l-6 6H68z" fill="#3aa08c"/><path d="M60 74q-6 -6 -10 -2M168 74q6 -6 10 -2" stroke="#3aa08c" stroke-width="3" fill="none"/>' +
      '<rect x="74" y="82" width="80" height="6" fill="#c0392b"/><rect x="76" y="88" width="6" height="32" fill="#c0392b"/><rect x="146" y="88" width="6" height="32" fill="#c0392b"/><rect x="100" y="88" width="4" height="32" fill="#a83226"/><rect x="124" y="88" width="4" height="32" fill="#a83226"/>' +
      '<g class="rb-bell"><path d="M106 90q8 -4 16 0v20q-8 4 -16 0z" fill="#6b5a2e"/><rect x="104" y="108" width="20" height="4" rx="2" fill="#7d6a36"/></g><rect x="70" y="120" width="88" height="6" fill="#d8d0c0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rbs5)"/>' +
      '<path d="M0 128q60 -70 160 -60t240 30v30H0z" fill="#5b5148"/>' + bell +
      '<rect x="0" y="126" width="400" height="98" fill="#d9c9a8"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (140 + i * 14) + 'h400" stroke="#c7b590" stroke-width="1"/>').join("") +
      tag("REMBLE", 22, 194, 54, BLUE, -6) + tag("IT'S REMBLE", 150, 214, 18, GOLD, -4) + tag("REMBY", 24, 216, 17, "#e8ecef", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 146, "N Western Ave") + sign(250, 124, 140, "W Summerland Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="rb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="rb-sp"><circle cx="210" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="rb-sp rb-sp2"><circle cx="216" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("rbs5", "#2b3d6e", "#f2a46a"));
  }

  window.SCENES = { rbstation: rbstation, rbpeck: rbpeck, rbiowa: rbiowa, rbsimms: rbsimms, rbcorner: rbcorner };
})();
