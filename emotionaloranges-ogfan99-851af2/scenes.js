/* emotionaloranges scenes (Regions tab: Los Angeles + SoCal; Westwood, West LA - the duo formed in LA in 2017; Azad is an Iranian-American from LA,
   so the game sits in Westwood's "Tehrangeles" stretch of Westwood Blvd. Songs: West Coast Love, Someone Else, Corners Of My Mind, Heal My Desires.)
   1 Metro E Line at Westwood/Rancho Park, at street level beside Westwood Blvd: a silver light-rail train with the gold E Line band pulling in, palms, crossing gates.
   2 Westwood Blvd, Persian Square: rug shop awnings, turquoise tile arch, glass tea cups steaming, a hanging lamp swinging.
   3 A SoCal orange grove under the San Gabriel Mountains: rows of orange trees, wooden crates, an orange dropping.
   4 PCH at sunset ("take the PCH home"): a drop-top cruising the coast, fireworks in the sky, waves rolling in.
   5 Westwood Blvd and Ohio Ave: green street signs, EMOTIONAL ORANGES tagged with THE JUICE and EMO, the white Spanish-style tower of the old Westwood Village theatre up the boulevard.
   CSS classes prefixed "eo-" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes eoSway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.eo-sway{transform-box:fill-box;transform-origin:50% 100%;animation:eoSway 3.6s ease-in-out infinite}.eo-sway2{animation-delay:-1.8s}' +
    '@keyframes eoLamp{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.eo-lamp{transform-box:fill-box;transform-origin:50% 0;animation:eoLamp 2.6s ease-in-out infinite}' +
    '@keyframes eoSteam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-22px);opacity:0}}.eo-steam{animation:eoSteam 2.4s ease-out infinite}.eo-steam2{animation-delay:-1.2s}' +
    '@keyframes eoDrop{0%,40%{transform:translateY(0)}70%{transform:translateY(64px)}100%{transform:translateY(64px);opacity:0}}.eo-drop{animation:eoDrop 3.4s ease-in infinite}' +
    '@keyframes eoCar{from{transform:translateX(-150px)}to{transform:translateX(440px)}}.eo-car{animation:eoCar 9s linear infinite}' +
    '@keyframes eoBoom{0%{transform:scale(.1);opacity:0}20%{opacity:1}100%{transform:scale(1.2);opacity:0}}.eo-boom{transform-box:fill-box;transform-origin:50% 50%;animation:eoBoom 2.2s ease-out infinite}.eo-boom2{animation-delay:-1.1s}' +
    '@keyframes eoWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.eo-wave{animation:eoWave 3s ease-in-out infinite}.eo-wave2{animation-delay:-1.5s}' +
    '@keyframes eoTw{0%,100%{opacity:.25}50%{opacity:1}}.eo-tw{animation:eoTw 2s ease-in-out infinite}.eo-tw2{animation-delay:-1s}' +
    '@keyframes eoGate{0%,100%{transform:rotate(0)}50%{transform:rotate(-70deg)}}.eo-gate{transform-box:fill-box;transform-origin:0 50%;animation:eoGate 6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="eo-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q5 -' + (h / 2) + ' 2 -' + h + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    [-44, -22, 0, 22, 44, -64, 64].map(a => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (a / 2) + ' -12 ' + a + ' ' + (Math.abs(a) / 3 + 4) + '" stroke="#2f5a35" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const ORG = "#ff8a1f", GOLD = "#fdb913", TURQ = "#2ec4b6", CREAM = "#fff1d6";
  const orange = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 5) + '" fill="' + ORG + '"/><path d="M' + x + ' ' + (y - (r || 5)) + 'l2 -3" stroke="#2f5a35" stroke-width="1.5"/>';

  /* 1. E Line at Westwood/Rancho Park */
  function eostation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (70 + i * 38) + '" y="126" width="28" height="24" rx="3" fill="#20303c"/>';
    const train = '<g class="anim-train"><path d="M30 196v-64q0 -16 16 -16h256q26 0 36 28v52z" fill="#d6dadd" stroke="#7d868d" stroke-width="2"/>' +
      '<path d="M302 116q26 0 36 28v18h-36z" fill="#20303c"/>' + win +
      '<rect x="44" y="126" width="18" height="56" rx="2" fill="#20303c"/><rect x="178" y="126" width="22" height="56" rx="2" fill="#20303c"/><path d="M189 126v56" stroke="#7d868d" stroke-width="1.5"/>' +
      '<rect x="30" y="160" width="308" height="9" fill="' + GOLD + '"/>' +
      '<rect x="312" y="120" width="22" height="12" rx="2" fill="#111"/><text x="323" y="129.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">E</text>' +
      '<rect x="326" y="176" width="10" height="6" rx="2" fill="#fff6c2"/>' +
      '<path d="M120 116l12 -16h40l12 16" stroke="#333" stroke-width="2" fill="none"/>' +
      '<rect x="64" y="196" width="40" height="8" fill="#333"/><rect x="250" y="196" width="40" height="8" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eos1)"/>' +
      '<path d="M0 84h400" stroke="#333" stroke-width="1.5"/>' +
      palm(30, 118, 70) + palm(366, 118, 84, "eo-sway2") +
      '<rect x="0" y="100" width="400" height="18" fill="#e6d3b3"/>' +
      /* station canopy + sign */
      '<path d="M90 56h220l-12 12h-196z" fill="#e8e2d6" stroke="#9a8f80"/><rect x="196" y="68" width="6" height="40" fill="#9a8f80"/>' +
      '<rect x="90" y="72" width="210" height="24" rx="3" fill="#111"/><text x="180" y="88.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">WESTWOOD/RANCHO PARK</text>' +
      '<circle cx="284" cy="84" r="8" fill="' + GOLD + '"/><text x="284" y="88" text-anchor="middle" ' + font + ' font-size="10" fill="#111">E</text>' +
      train +
      '<rect x="0" y="204" width="400" height="10" fill="#bdb6a8"/><rect x="0" y="214" width="400" height="46" fill="#4a4c52"/><path d="M0 240h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* crossing gate */
      '<rect x="356" y="186" width="5" height="40" fill="#555"/><circle cx="358" cy="184" r="5" fill="#e8463c" class="eo-tw"/><g transform="translate(360 196)"><rect class="eo-gate" x="0" y="-2" width="40" height="4" fill="#fff" stroke="#e8463c" stroke-dasharray="6 6" stroke-width="4"/></g>',
      sky("eos1", "#7cc0e6", "#ffe0b0"));
  }

  /* 2. Persian Square, Westwood Blvd */
  function eopersian() {
    const cup = (x, y) => '<path d="M' + x + ' ' + y + 'h14l-2 18q-5 4 -10 0z" fill="#b8402a" opacity=".85" stroke="#fff" stroke-width="1"/><path d="M' + (x + 4) + ' ' + (y - 4) + 'q3 -6 0 -10" stroke="#fff" stroke-width="2" fill="none" class="eo-steam"/><path d="M' + (x + 10) + ' ' + (y - 4) + 'q3 -6 0 -10" stroke="#fff" stroke-width="2" fill="none" class="eo-steam eo-steam2"/>';
    let tiles = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) tiles += '<path d="M' + (150 + c * 17) + ' ' + (96 + r * 17) + 'l8 -8l8 8l-8 8z" fill="' + ((r + c) % 2 ? TURQ : "#1f5f8b") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#eos2)"/>' +
      /* shop fronts */
      '<rect x="0" y="60" width="130" height="140" fill="#e9d8b8"/><rect x="270" y="60" width="130" height="140" fill="#d9c8a8"/>' +
      '<path d="M0 80h130v20h-130z" fill="#8a1c2c"/><path d="M0 100l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8z" fill="#8a1c2c"/>' +
      '<path d="M270 80h130v20h-130z" fill="#1f5f8b"/><path d="M270 100l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8l10 -8l10 8z" fill="#1f5f8b"/>' +
      /* rugs hanging */
      '<rect x="14" y="118" width="46" height="70" fill="#a3232f"/><rect x="20" y="124" width="34" height="58" fill="none" stroke="' + GOLD + '" stroke-width="3"/><path d="M37 132l10 21l-10 21l-10 -21z" fill="#1f5f8b"/>' +
      '<rect x="70" y="118" width="46" height="70" fill="#1f5f8b"/><rect x="76" y="124" width="34" height="58" fill="none" stroke="' + CREAM + '" stroke-width="3"/><circle cx="93" cy="153" r="10" fill="#a3232f"/>' +
      /* tile arch */
      '<path d="M140 200v-100q60 -70 120 0v100z" fill="#123a5a"/><clipPath id="eoArch"><path d="M146 200v-96q54 -62 108 0v96z"/></clipPath><g clip-path="url(#eoArch)">' + tiles + '<rect x="146" y="164" width="108" height="36" fill="#0b2236"/></g>' +
      '<path d="M140 100q60 -70 120 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      /* hanging lamp */
      '<g class="eo-lamp"><path d="M200 30v28" stroke="#6a4a2a" stroke-width="2"/><path d="M188 58h24l-4 16h-16z" fill="' + GOLD + '"/><circle cx="200" cy="70" r="5" fill="#fff2b0" class="eo-tw"/></g>' +
      /* tea table */
      '<rect x="282" y="168" width="96" height="8" fill="#6a4a2a"/><rect x="290" y="176" width="6" height="24" fill="#6a4a2a"/><rect x="364" y="176" width="6" height="24" fill="#6a4a2a"/>' + cup(300, 150) + cup(332, 150) +
      '<rect x="0" y="200" width="400" height="60" fill="#c9c1ae"/><path d="M0 222h400" stroke="#b3ab98"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#5a4a3a" letter-spacing="3">PERSIAN SQUARE</text>',
      sky("eos2", "#9fd3ec", "#fff0d0"));
  }

  /* 3. Orange grove */
  function eogrove() {
    const tree = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="0" width="6" height="22" fill="#6a4a2a"/><circle cx="0" cy="-12" r="22" fill="#2f6b38"/><circle cx="-12" cy="-4" r="13" fill="#2f6b38"/><circle cx="12" cy="-4" r="13" fill="#2f6b38"/>' +
      orange(-10, -16) + orange(8, -22) + orange(14, -6) + orange(-14, -2) + orange(2, -6) + '</g>';
    const crate = (x, y) => '<rect x="' + x + '" y="' + y + '" width="50" height="30" fill="#c99a5e" stroke="#7a5a3a" stroke-width="2"/><path d="M' + x + ' ' + (y + 10) + 'h50M' + x + ' ' + (y + 20) + 'h50" stroke="#7a5a3a"/>' +
      orange(x + 10, y - 3) + orange(x + 22, y - 4) + orange(x + 34, y - 3) + orange(x + 16, y - 9) + orange(x + 28, y - 9);
    return svg(
      '<rect width="400" height="260" fill="url(#eos3)"/>' +
      '<path d="M0 110l50 -40l40 24l50 -46l60 44l40 -30l60 40l50 -34l50 42v20h-400z" fill="#8a7aa8"/><path d="M130 52l10 -4l10 8M240 64l8 -6l8 6" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="110" width="400" height="150" fill="#a8b864"/>' +
      tree(40, 120, .7) + tree(110, 120, .7) + tree(180, 120, .7) + tree(250, 120, .7) + tree(320, 120, .7) + tree(390, 120, .7) +
      tree(70, 168, 1.1) + tree(190, 168, 1.1) + tree(310, 168, 1.1) +
      '<g class="eo-drop">' + orange(330, 158, 5) + '</g>' +
      '<path d="M0 230q200 -20 400 0" stroke="#c9b47a" stroke-width="16" fill="none"/>' +
      crate(120, 206) + crate(176, 214),
      sky("eos3", "#ffb36b", "#ffe6b8"));
  }

  /* 4. PCH at sunset */
  function eopch() {
    const boom = (x, y, c, cls) => '<g class="eo-boom ' + (cls || "") + '">' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + x + ' ' + y + 'l' + (Math.cos(a) * 22).toFixed(1) + ' ' + (Math.sin(a) * 22).toFixed(1) + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>'; }).join("") + '</g>';
    const car = '<g class="eo-car"><path d="M0 196q4 -14 22 -16l30 -2l14 -10h34l18 12q20 2 22 16z" fill="' + ORG + '" stroke="#7a3a10" stroke-width="2"/><path d="M70 170l-6 -10M74 170l10 -12" stroke="#ddd" stroke-width="2"/>' +
      '<circle cx="28" cy="198" r="9" fill="#111"/><circle cx="28" cy="198" r="4" fill="#ccc"/><circle cx="112" cy="198" r="9" fill="#111"/><circle cx="112" cy="198" r="4" fill="#ccc"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eos4)"/>' +
      '<circle cx="300" cy="120" r="34" fill="#ffd27a"/>' +
      boom(80, 50, "#ff5fa2") + boom(170, 34, GOLD, "eo-boom2") + boom(250, 60, TURQ) +
      '<rect x="0" y="126" width="400" height="56" fill="#2f6f9a"/>' +
      '<g class="eo-wave"><path d="M0 140q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6f5" stroke-width="2" fill="none"/></g>' +
      '<g class="eo-wave eo-wave2"><path d="M0 160q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e7f6fb" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 182h400v8h-400z" fill="#e6d3b3"/>' +
      '<rect x="0" y="190" width="400" height="30" fill="#4a4c52"/><path d="M0 205h400" stroke="' + GOLD + '" stroke-width="2" stroke-dasharray="20 12"/>' +
      car +
      '<path d="M0 220h400v40h-400z" fill="#b89a6a"/>' + palm(350, 230, 90) + palm(30, 236, 70, "eo-sway2") +
      '<rect x="160" y="226" width="80" height="24" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><text x="200" y="243" text-anchor="middle" ' + font + ' font-size="12" fill="#111">PCH</text>',
      sky("eos4", "#3b2a6a", "#ff9a5a"));
  }

  /* 5. Westwood Blvd and Ohio Ave */
  function eocorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#eos5)"/>' +
      '<g class="eo-tw"><circle cx="60" cy="30" r="2" fill="#fff"/></g><g class="eo-tw eo-tw2"><circle cx="160" cy="20" r="2" fill="#fff"/></g>' +
      /* old Westwood Village theatre tower up the boulevard */
      '<g transform="translate(-70 0)"><rect x="232" y="44" width="40" height="96" fill="#f3efe6" stroke="#b9ae9a" stroke-width="2"/><path d="M228 44h48l-6 -14h-36z" fill="#c4683a"/><path d="M244 30l8 -14l8 14z" fill="#f3efe6" stroke="#b9ae9a"/>' +
      '<path d="M242 64v-10q10 -10 20 0v10z" fill="#3a3a4a"/><rect x="236" y="84" width="32" height="40" fill="#e7e0d2"/><path d="M240 90h24M240 100h24M240 110h24" stroke="' + GOLD + '" stroke-width="3" class="eo-tw"/>' +
      '<rect x="180" y="110" width="140" height="30" fill="#efe6d4" stroke="#b9ae9a"/><path d="M176 110h148l-8 -8h-132z" fill="#c4683a"/></g>' +
      palm(60, 140, 96) + palm(300, 140, 104, "eo-sway2") +
      '<rect x="0" y="134" width="400" height="10" fill="#b9ab95"/>' +
      /* wall + tags */
      '<rect x="14" y="132" width="290" height="72" fill="#f6e3c4"/><rect x="14" y="132" width="290" height="5" fill="#d9c49e"/>' +
      tag("THE JUICE", 30, 156, 15, TURQ, -3) + tag("EMOTIONAL", 28, 182, 26, ORG, -4) + tag("ORANGES", 74, 202, 22, ORG, -4) + tag("EMO", 228, 166, 22, "#ff5fa2", -8) +
      '<rect x="0" y="204" width="400" height="10" fill="#c9c1ae"/><rect x="0" y="214" width="400" height="46" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="eo-car"><circle cx="20" cy="222" r="6" fill="' + ORG + '"/><circle cx="34" cy="226" r="5" fill="' + ORG + '"/></g>' +
      '<rect x="360" y="40" width="5" height="172" fill="#7d8288"/>' + sign(254, 42, 140, "Westwood Blvd", 13) + sign(270, 68, 124, "Ohio Ave", 13),
      sky("eos5", "#24305e", "#ff9a5a"));
  }

  window.SCENES = { eostation, eopersian, eogrove, eopch, eocorner };
})();
