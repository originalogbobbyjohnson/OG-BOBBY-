/* iamsu scenes (Regions tab: The Bay Area; the Iron Triangle, Richmond). CSS classes prefixed su- (the page's own anim-train is kept).
   1 Richmond BART: the ground-level end-of-the-line station by the Iron Triangle (Red + Orange lines), a train sliding in, the hills behind.
   2 Youth Radio in Uptown Oakland: where he learned to make beats as a teen (Trackademicks taught him chords and sampling). ON AIR light blinking, pads lighting up.
   3 The Rosie the Riveter Memorial at Marina Bay, Richmond: the steel ship-hull frame on the walkway, the bay and the SF skyline beyond, sailboats drifting.
   4 The plaque on the wall ("I'm the first one who brought a plaque to the crib", Make You Understand): studio monitors thumping, the gold plaque shining.
   5 Macdonald Ave and 10th St in the Iron Triangle (he lived on 10th St): green signs, IAMSU! tagged with HBK GANG, the Richmond-San Rafael Bridge behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes subl{0%,49%{opacity:1}50%,100%{opacity:.2}}.su-blk{animation:subl 1.2s steps(1) infinite}.su-blk2{animation-delay:-.6s}' +
    '@keyframes supad{0%,100%{opacity:.35}50%{opacity:1}}.su-pad{animation:supad 1s ease-in-out infinite}.su-p2{animation-delay:-.25s}.su-p3{animation-delay:-.5s}.su-p4{animation-delay:-.75s}' +
    '@keyframes susail{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.su-sail{animation:susail 22s linear infinite}.su-sail2{animation-delay:-11s}' +
    '@keyframes sugull{0%{transform:translate(-30px,20px)}100%{transform:translate(440px,-10px)}}.su-gull{animation:sugull 12s linear infinite}.su-gull2{animation-delay:-6s}' +
    '@keyframes suthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.su-cone{transform-box:fill-box;transform-origin:50% 50%;animation:suthump .5s ease-in-out infinite}' +
    '@keyframes sushine{0%{transform:translateX(-40px);opacity:0}30%{opacity:.8}60%{transform:translateX(40px);opacity:0}100%{opacity:0}}.su-shine{animation:sushine 2.6s ease-in-out infinite}' +
    '@keyframes sunote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.su-note{animation:sunote 2.8s ease-out infinite}.su-n2{animation-delay:-1.4s}' +
    '@keyframes sucar{from{transform:translateX(-110px)}to{transform:translateX(500px)}}.su-car{animation:sucar 7s linear infinite}.su-car2{animation-delay:-3.5s}' +
    '@keyframes sucarb{from{transform:translateX(420px)}to{transform:translateX(-60px)}}.su-bcar{animation:sucarb 9s linear infinite}.su-bcar2{animation-delay:-4.5s}' +
    '@keyframes sufog{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(24px);opacity:.8}}.su-fog{animation:sufog 8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, tc) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (tc || "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const car = (y, body, cls) => '<g class="' + cls + '"><g transform="translate(0 ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  const heart = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 -4q-6 -8 -12 -2q-6 6 12 18q18 -12 12 -18q-6 -6 -12 2z" fill="' + c + '"/>';
  const BRED = "#ed1c24", BORG = "#faa61a", PINK = "#ff5fa2", GOLD = "#ffd23f", SKY = "#5ad1ff";

  /* 1. Richmond BART */
  function sustation() {
    let win = ""; for (let x = 40; x < 300; x += 40) win += '<rect x="' + x + '" y="124" width="28" height="22" rx="3" fill="#1f2a36"/>';
    const train = '<g class="anim-train"><path d="M14 112h296q14 0 18 14l4 40H14z" fill="#e9ecef" stroke="#8a9098" stroke-width="2"/>' + win +
      '<path d="M306 114q12 2 16 14l3 20h-21z" fill="#1f2a36"/><rect x="14" y="152" width="318" height="6" fill="' + SKY + '"/><rect x="14" y="160" width="318" height="3" fill="#2c6e9e"/>' +
      '<path d="M120 112v46M220 112v46" stroke="#b5bcc4" stroke-width="2"/><circle cx="324" cy="158" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sus1)"/>' +
      /* hills */
      '<path d="M0 92q60 -40 130 -20t140 -16t130 18v40H0z" fill="#9db58a"/><path d="M0 100q80 -20 160 -6t240 -8v30H0z" fill="#86a374"/>' +
      /* parking structure + Amtrak platform canopy behind */
      '<rect x="250" y="70" width="140" height="44" fill="#c9c3b6"/>' + [0, 1, 2].map(i => '<rect x="250" y="' + (78 + i * 12) + '" width="140" height="3" fill="#a8a196"/>').join("") +
      '<rect x="20" y="88" width="180" height="6" fill="#7d8288"/>' + [30, 90, 150].map(x => '<rect x="' + x + '" y="94" width="4" height="18" fill="#7d8288"/>').join("") +
      '<rect x="0" y="112" width="400" height="4" fill="#6d6d6d"/>' +
      '<rect x="0" y="164" width="400" height="8" fill="#5a5a5a"/>' + train +
      /* platform at ground level */
      '<rect x="0" y="172" width="400" height="7" fill="#eab308"/><rect x="0" y="179" width="400" height="44" fill="#c4bdb1"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 179l-12 44" stroke="#aea698" stroke-width="1"/>').join("") +
      '<rect x="0" y="223" width="400" height="37" fill="#8f8a80"/>' +
      /* black station sign */
      '<rect x="98" y="188" width="204" height="26" rx="2" fill="#111"/><text x="172" y="206" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Richmond</text>' +
      bullet(258, 201, "R", BRED) + bullet(280, 201, "O", BORG, "#111") +
      /* canopy post */
      '<rect x="40" y="128" width="5" height="52" fill="#7d8288"/><rect x="356" y="128" width="5" height="52" fill="#7d8288"/>',
      sky("sus1", "#9fd3f2", "#e9f6fc"));
  }

  /* 2. Youth Radio, Uptown Oakland */
  function suradio() {
    const pads = Array.from({ length: 16 }, (_, i) => '<rect class="su-pad su-p' + (1 + (i * 3) % 4) + '" x="' + (238 + (i % 4) * 22) + '" y="' + (150 + Math.floor(i / 4) * 16) + '" width="18" height="12" rx="2" fill="' + [PINK, GOLD, SKY, "#7ee081"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1b1a24"/>' +
      /* window onto Broadway at night */
      '<rect x="24" y="24" width="180" height="104" fill="#16243a" stroke="#4a4a5a" stroke-width="4"/>' +
      '<g fill="#2a3a55"><rect x="34" y="70" width="30" height="58"/><rect x="70" y="50" width="26" height="78"/><rect x="102" y="62" width="34" height="66"/><rect x="142" y="44" width="24" height="84"/><rect x="170" y="74" width="30" height="54"/></g>' +
      '<g fill="#ffe7a3">' + [[40, 80], [52, 96], [76, 60], [84, 88], [110, 72], [122, 100], [148, 56], [152, 80], [178, 86]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="4" height="4"/>').join("") + '</g>' +
      '<path d="M114 24v104M24 76h180" stroke="#4a4a5a" stroke-width="3"/>' +
      /* ON AIR light */
      '<rect x="248" y="30" width="110" height="34" rx="6" fill="#2a1416" stroke="#555" stroke-width="2"/><g class="su-blk"><rect x="252" y="34" width="102" height="26" rx="4" fill="#e8343f"/><text x="303" y="53" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff">ON AIR</text></g>' +
      /* foam wall */
      '<g fill="#2a2836">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (220 + (i % 6) * 28) + '" y="' + (78 + Math.floor(i / 6) * 22) + '" width="24" height="18" rx="2"/>').join("") + '</g>' +
      /* desk, board, pads, mic */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2a22"/><rect x="0" y="192" width="400" height="8" fill="#4e3a2e"/>' +
      '<rect x="30" y="150" width="170" height="44" rx="4" fill="#2e2e36" stroke="#555"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (40 + i * 13) + '" y="158" width="4" height="28" fill="#111"/><rect class="su-pad su-p' + (1 + i % 4) + '" x="' + (37 + i * 13) + '" y="' + (164 + (i % 3) * 6) + '" width="10" height="5" fill="#ddd"/>').join("") +
      '<rect x="230" y="142" width="96" height="74" rx="6" fill="#2e2e36" stroke="#555"/>' + pads +
      '<rect x="352" y="96" width="4" height="96" fill="#888"/><path d="M354 98l-26 18" stroke="#888" stroke-width="4"/><rect x="316" y="108" width="16" height="26" rx="8" fill="#444" stroke="#999"/>' +
      '<g class="su-note"><text x="200" y="130" font-size="20" fill="' + GOLD + '">♪</text></g><g class="su-note su-n2"><text x="214" y="120" font-size="16" fill="' + PINK + '">♫</text></g>' +
      '<rect x="40" y="226" width="140" height="18" rx="2" fill="#1d3d5c"/><text x="110" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">YOUTH RADIO, OAKLAND</text>',
      "");
  }

  /* 3. Rosie the Riveter Memorial, Marina Bay */
  function surosie() {
    const sail = (cls, c) => '<g class="' + cls + '"><path d="M0 132h30l-4 6h-22z" fill="#fff"/><path d="M14 132v-30l12 28z" fill="' + c + '"/><path d="M13 132v-26l-10 24z" fill="#f4f1ea"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sus3)"/>' +
      /* SF skyline far across the bay */
      '<g fill="#8c9bb0" opacity=".8"><rect x="250" y="112" width="8" height="24"/><path d="M262 136v-34l5 -12l5 12v34z"/><rect x="276" y="104" width="10" height="32"/><rect x="290" y="114" width="8" height="22"/><rect x="302" y="108" width="10" height="28"/><rect x="316" y="118" width="12" height="18"/></g>' +
      '<path d="M0 124q60 -16 120 -6t110 4v14H0z" fill="#9aa88c" opacity=".7"/>' +
      '<rect x="0" y="134" width="400" height="44" fill="#4f8db3"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' ' + (148 + (i % 3) * 8) + 'q8 -3 16 0" stroke="#d7eef6" stroke-width="1.5" fill="none"/>').join("") +
      sail("su-sail", PINK) + sail("su-sail su-sail2", SKY) +
      '<g class="su-gull"><path d="M0 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.5" fill="none"/></g><g class="su-gull su-gull2"><path d="M0 40q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      /* promenade */
      '<path d="M0 178h400v82H0z" fill="#d9d2c0"/><path d="M0 178h400v4H0z" fill="#b8ae9a"/>' +
      /* the memorial: a stainless steel ship-hull frame rising from the walkway */
      '<g stroke="#c9d1d8" stroke-width="4" fill="none"><path d="M40 238q120 -30 300 -20"/><path d="M60 236v-60M110 228v-74M160 222v-84M210 218v-88M260 218v-84M310 220v-70"/>' +
      '<path d="M60 176q125 -44 250 -26"/></g><g stroke="#9aa6b0" stroke-width="2"><path d="M60 196h250M60 214h250"/></g>' +
      '<rect x="140" y="236" width="120" height="18" rx="2" fill="#1d3d5c"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ROSIE THE RIVETER</text>',
      sky("sus3", "#8fcbef", "#f2f8fb"));
  }

  /* 4. The plaque */
  function suplaque() {
    const spk = x => '<rect x="' + x + '" y="120" width="56" height="84" rx="4" fill="#222" stroke="#444" stroke-width="2"/><circle cx="' + (x + 28) + '" cy="140" r="9" fill="#333"/><g class="su-cone"><circle cx="' + (x + 28) + '" cy="178" r="18" fill="#3a3a3a" stroke="#555" stroke-width="2"/><circle cx="' + (x + 28) + '" cy="178" r="6" fill="#1a1a1a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1c26"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#3b2733"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="0" width="2" height="200" fill="#33212c"/>').join("") +
      /* plaque */
      '<rect x="140" y="26" width="120" height="146" rx="4" fill="#1a1a1a" stroke="#c9a24a" stroke-width="5"/>' +
      '<clipPath id="suclip"><rect x="146" y="32" width="108" height="134"/></clipPath>' +
      '<g clip-path="url(#suclip)"><circle cx="200" cy="86" r="40" fill="' + GOLD + '"/><circle cx="200" cy="86" r="30" fill="#e6b92c"/><circle cx="200" cy="86" r="8" fill="#1a1a1a"/>' +
      Array.from({ length: 4 }, (_, i) => '<circle cx="200" cy="86" r="' + (14 + i * 6) + '" fill="none" stroke="#c99c1a" stroke-width="1"/>').join("") +
      '<g class="su-shine"><path d="M170 40l20 0l-30 110h-20z" fill="#fff" opacity=".35"/></g></g>' +
      '<rect x="156" y="134" width="88" height="24" fill="#2b2b2b"/><text x="200" y="144" text-anchor="middle" ' + font + ' font-size="7" fill="#e9d9a6">PRESENTED TO</text><text x="200" y="154.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">IAMSU!</text>' +
      spk(40) + spk(304) +
      /* desk */
      '<rect x="0" y="204" width="400" height="56" fill="#4e3a2e"/><rect x="110" y="190" width="180" height="20" rx="3" fill="#2e2e36"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="su-cone" x="' + (120 + i * 17) + '" y="195" width="8" height="10" fill="' + [PINK, GOLD, SKY][i % 3] + '" opacity=".8"/>').join("") +
      heart(200, 232, 1, PINK),
      "");
  }

  /* 5. Macdonald Ave & 10th St, Iron Triangle, Richmond-San Rafael Bridge behind */
  function sucorner() {
    /* the bridge: low trestle, then the two cantilever humps over the shipping channel */
    const hump = (x) => '<path d="M' + x + ' 104q40 -40 80 0" stroke="#d8dde2" stroke-width="3" fill="none"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (x + 6 + i * 11) + ' 104v-' + [6, 18, 26, 30, 26, 18, 6][i] + '" stroke="#d8dde2" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sus5)"/>' +
      /* Mt Tam far behind */
      '<path d="M120 100l50 -40l20 10l30 -18l60 48z" fill="#7a86a0" opacity=".7"/>' +
      '<g class="su-fog"><ellipse cx="120" cy="96" rx="80" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="100" width="400" height="20" fill="#5d8fae"/>' +
      '<rect x="0" y="102" width="400" height="4" fill="#cfd5da"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="106" width="2" height="12" fill="#cfd5da"/>').join("") +
      hump(150) + hump(240) +
      '<g class="su-bcar"><rect x="0" y="98" width="10" height="4" fill="#fff"/></g><g class="su-bcar su-bcar2"><rect x="0" y="98" width="10" height="4" fill="#ffd23f"/></g>' +
      '<rect x="0" y="120" width="400" height="24" fill="#b7ad9a"/>' +
      /* wall + tags */
      '<rect x="30" y="140" width="310" height="76" fill="#e6dccb"/><rect x="30" y="140" width="310" height="6" fill="#c9bea8"/>' +
      tag("IAMSU!", 52, 192, 40, PINK, -5) + tag("HBK GANG", 206, 206, 20, GOLD, -4) + tag("SUZY", 256, 170, 18, SKY, -8) + heart(222, 166, 1, PINK) +
      /* sidewalk + street */
      '<rect x="0" y="216" width="400" height="12" fill="#c9c1ae"/><rect x="0" y="228" width="400" height="32" fill="#4a4c52"/><path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(214, "#5a2a6a", "su-car") + car(214, "#e7e2d6", "su-car su-car2") +
      /* sign pole */
      '<rect x="370" y="34" width="5" height="182" fill="#7d8288"/>' + sign(250, 36, 138, "Macdonald Av", 13) + sign(290, 62, 98, "10th St", 13),
      sky("sus5", "#f6a65a", "#ffe1b0"));
  }

  window.SCENES = { sustation, suradio, surosie, suplaque, sucorner };
})();
