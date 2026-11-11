/* duckwrth scenes (Regions tab: Los Angeles + SoCal; South Central, Los Angeles). CSS classes prefixed dw- (the page's own anim-train is kept).
   1 Metro A Line train pulling into Vernon station, at street level in the middle of Long Beach Ave, South Central: palms, low warehouses, power lines.
   2 A South Central church: he grew up in a strict Christian home and his first stage was the church choir. Stained glass glowing, choir robes swaying, organ pipes.
   3 Bernal Heights, San Francisco (his art-school years; his song "Bernal Heights"): the bald green hilltop, the lone tree with a rope swing, fog rolling in, the bay below.
   4 "Start a Riot" (Spider-Verse soundtrack): a comic-book page, a web stretched across the city rooftops, halftone dots, a BANG burst and a RIOT! caption.
   5 E Vernon Ave and S Central Ave: green signs, DUCKWRTH tagged with UUGLY and SUPERGOOD, a lowrider hitting the Super Bounce, the old Dunbar Hotel up Central Ave behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dwsway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}.dw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dwsway 3.8s ease-in-out infinite}.dw-sway2{animation-delay:-1.9s}' +
    '@keyframes dwglow{0%,100%{opacity:.75}50%{opacity:1}}.dw-glow{animation:dwglow 2.4s ease-in-out infinite}.dw-glow2{animation-delay:-1.2s}' +
    '@keyframes dwrobe{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.dw-robe{animation:dwrobe 1.2s ease-in-out infinite}.dw-r2{animation-delay:-.4s}.dw-r3{animation-delay:-.8s}' +
    '@keyframes dwnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.dw-note{animation:dwnote 3s ease-out infinite}.dw-n2{animation-delay:-1s}.dw-n3{animation-delay:-2s}' +
    '@keyframes dwfog{from{transform:translateX(-160px)}to{transform:translateX(420px)}}.dw-fog{animation:dwfog 22s linear infinite}.dw-fog2{animation-delay:-11s}' +
    '@keyframes dwswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.dw-swing{transform-box:view-box;transform-origin:262px 96px;animation:dwswing 2.6s ease-in-out infinite}' +
    '@keyframes dwpop{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.dw-pop{transform-box:fill-box;transform-origin:50% 50%;animation:dwpop .9s ease-in-out infinite}' +
    '@keyframes dwshake{0%,100%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}75%{transform:translate(-1px,1px)}}.dw-shake{animation:dwshake .25s linear infinite}' +
    '@keyframes dwbounce{0%,100%{transform:translateY(0) rotate(0)}30%{transform:translateY(-16px) rotate(-6deg)}60%{transform:translateY(0) rotate(0)}}.dw-bounce{transform-box:fill-box;transform-origin:80% 100%;animation:dwbounce 1.3s ease-in-out infinite}' +
    '@keyframes dwtw{0%,100%{opacity:.25}50%{opacity:1}}.dw-tw{animation:dwtw 2s ease-in-out infinite}.dw-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, c, cls) => '<g class="dw-sway ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q5 -' + (h / 2) + ' 2 -' + h + '" stroke="#4a3a2a" stroke-width="4" fill="none"/>' +
    [-44, -22, 0, 22, 44, -64, 64].map(a => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (a / 2) + ' -12 ' + a + ' ' + (Math.abs(a) / 3 + 4) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const ALINE = "#0072bc", YEL = "#ffd23f", PINK = "#ff5fa2", TEAL = "#3ee0c5";

  /* 1. Metro A Line at Vernon station, street level on Long Beach Ave */
  function dwstation() {
    let win = ""; for (let i = 0; i < 7; i++) win += '<rect x="' + (66 + i * 34) + '" y="122" width="26" height="26" rx="3" fill="#1f2b36"/>';
    const train = '<g class="anim-train"><path d="M30 196v-70q0 -14 14 -14h262q22 0 30 26v58z" fill="#d9dcdf" stroke="#7c848c" stroke-width="2"/>' +
      '<path d="M306 112q22 0 30 26v20h-36v-46z" fill="#1b1f24"/>' + win + '<rect x="40" y="122" width="20" height="56" rx="2" fill="#1f2b36"/><rect x="146" y="122" width="22" height="56" rx="2" fill="#1f2b36"/><path d="M157 122v56" stroke="#7c848c" stroke-width="1.5"/>' +
      '<rect x="30" y="158" width="306" height="8" fill="' + YEL + '"/><rect x="30" y="166" width="306" height="4" fill="#555c63"/>' +
      '<rect x="312" y="118" width="20" height="10" rx="2" fill="#111"/><text x="322" y="126" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">A</text>' +
      '<rect x="326" y="176" width="10" height="6" rx="2" fill="#fff6c2"/>' +
      '<rect x="60" y="196" width="40" height="8" fill="#333"/><rect x="250" y="196" width="40" height="8" fill="#333"/>' +
      '<path d="M120 112l14 -18h40l14 18" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dws1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffe08a" opacity=".9"/>' +
      /* overhead catenary + power lines */
      '<path d="M0 86h400" stroke="#333" stroke-width="1.5"/><path d="M0 30q100 12 200 2t200 6" stroke="#3a3a3a" stroke-width="1" fill="none"/>' +
      [40, 200, 360].map(x => '<rect x="' + x + '" y="60" width="4" height="150" fill="#6d7378"/><rect x="' + (x - 14) + '" y="80" width="32" height="3" fill="#6d7378"/>').join("") +
      /* low warehouses along Long Beach Ave */
      '<rect x="0" y="92" width="120" height="50" fill="#c9b49a"/><rect x="120" y="100" width="90" height="42" fill="#a9b7b9"/><rect x="210" y="94" width="110" height="48" fill="#d6c2a0"/><rect x="320" y="98" width="80" height="44" fill="#b7a4b8"/>' +
      palm(100, 110, 74) + palm(300, 108, 86, "#3a6b40", "dw-sway2") +
      /* platform */
      '<rect x="0" y="196" width="400" height="14" fill="#b9b4aa"/><rect x="0" y="196" width="400" height="3" fill="' + YEL + '"/>' +
      train +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4c52"/><path d="M0 222h400M0 248h400" stroke="#8a8f94" stroke-width="3"/>' +
      /* black station sign with the A Line bullet */
      '<rect x="356" y="96" width="4" height="100" fill="#6d7378"/>' +
      '<rect x="262" y="40" width="130" height="40" rx="3" fill="#111" stroke="#555"/><circle cx="282" cy="60" r="12" fill="' + ALINE + '"/><text x="282" y="65" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">A</text>' +
      '<text x="340" y="66" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Vernon</text>',
      sky("dws1", "#f6a96b", "#fde7c4"));
  }

  /* 2. The church choir in South Central */
  function dwchoir() {
    const robe = (x, c, cls) => '<g class="dw-robe ' + cls + '"><circle cx="' + x + '" cy="150" r="10" fill="#5a3a26"/><path d="M' + (x - 16) + ' 214q0 -46 16 -52q16 6 16 52z" fill="' + c + '"/><path d="M' + (x - 8) + ' 166l8 10l8 -10" fill="' + YEL + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1a2e"/>' +
      /* arched wall */
      '<path d="M40 230v-150q160 -90 320 0v150z" fill="#3d2840"/>' +
      /* stained glass window */
      '<g class="dw-glow"><path d="M160 120v-50q40 -44 80 0v50z" fill="#16324f" stroke="#c9a24a" stroke-width="3"/>' +
      '<path d="M200 36v84M160 92h80M170 64l60 46M230 64l-60 46" stroke="#c9a24a" stroke-width="2"/>' +
      '<path d="M200 40q-20 10 -30 30h30z" fill="' + PINK + '" opacity=".8"/><path d="M200 40q20 10 30 30h-30z" fill="' + TEAL + '" opacity=".8"/>' +
      '<path d="M162 92h38v28h-38z" fill="' + YEL + '" opacity=".7"/><path d="M200 92h38v28h-38z" fill="#7b5cff" opacity=".7"/>' +
      '<path d="M196 70h8v40h-8zM186 82h28v7h-28z" fill="#fff4cf"/></g>' +
      /* organ pipes */
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (56 + i * 13) + '" y="' + (100 - (i % 3) * 14) + '" width="9" height="' + (80 + (i % 3) * 14) + '" rx="3" fill="#c9a24a" stroke="#7a5a1e"/>').join("") +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (271 + i * 13) + '" y="' + (100 - ((5 - i) % 3) * 14) + '" width="9" height="' + (80 + ((5 - i) % 3) * 14) + '" rx="3" fill="#c9a24a" stroke="#7a5a1e"/>').join("") +
      /* choir loft rail */
      '<rect x="40" y="180" width="320" height="6" fill="#7a4a2a"/>' +
      robe(110, "#7b2d8b", "") + robe(160, "#7b2d8b", "dw-r2") + robe(200, "#7b2d8b", "dw-r3") + robe(240, "#7b2d8b", "") + robe(290, "#7b2d8b", "dw-r2") +
      '<rect x="40" y="208" width="320" height="22" fill="#5a3418"/><rect x="40" y="208" width="320" height="4" fill="#7a4a2a"/>' +
      /* floating notes */
      '<g fill="' + YEL + '"><g class="dw-note"><text x="120" y="130" font-size="20">&#9834;</text></g><g class="dw-note dw-n2"><text x="210" y="130" font-size="22">&#9835;</text></g><g class="dw-note dw-n3"><text x="280" y="130" font-size="18">&#9834;</text></g></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#1a1020"/>',
      "");
  }

  /* 3. Bernal Heights hilltop, San Francisco */
  function dwbernal() {
    const fog = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="60" ry="12" fill="#fff" opacity=".7"/><ellipse cx="40" cy="-6" rx="40" ry="10" fill="#fff" opacity=".6"/><ellipse cx="-40" cy="-4" rx="34" ry="9" fill="#fff" opacity=".6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dws3)"/>' +
      /* the bay and the far hills */
      '<rect x="0" y="120" width="400" height="40" fill="#5c8fb0"/><path d="M0 124q60 -16 120 -6t120 -4t160 0v6H0z" fill="#7d8c80"/>' +
      /* far city blocks */
      '<g fill="#d8d2c8" opacity=".9">' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (i * 25) + '" y="' + (140 - (i * 7) % 18) + '" width="20" height="' + (20 + (i * 7) % 18) + '"/>').join("") + '</g>' +
      /* the green hill */
      '<path d="M0 260v-60q90 -110 200 -112q110 2 200 112v60z" fill="#7aa35a"/><path d="M0 260v-40q100 -80 200 -82q100 2 200 82v40z" fill="#5f8a44"/>' +
      '<path d="M120 260q30 -70 80 -150" stroke="#c9b48a" stroke-width="5" fill="none" stroke-dasharray="2 3"/>' +
      /* the lone tree with the rope swing */
      '<path d="M258 150q-4 -40 4 -60" stroke="#4a3424" stroke-width="7" fill="none"/><path d="M262 96q20 -6 40 2M262 100q-20 -10 -36 -4" stroke="#4a3424" stroke-width="4" fill="none"/>' +
      '<ellipse cx="262" cy="80" rx="40" ry="22" fill="#2f5a35"/><ellipse cx="236" cy="88" rx="18" ry="12" fill="#2f5a35"/><ellipse cx="292" cy="88" rx="18" ry="12" fill="#2f5a35"/>' +
      '<g class="dw-swing"><path d="M292 96v44M302 96v44" stroke="#c9b48a" stroke-width="1.5"/><rect x="288" y="140" width="18" height="4" rx="1" fill="#6b4a2a"/></g>' +
      fog(0, 60, 1, "dw-fog") + fog(0, 104, .8, "dw-fog dw-fog2") +
      '<rect x="20" y="214" width="120" height="18" rx="2" fill="#1d3d5c"/><text x="80" y="226.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BERNAL HEIGHTS PARK</text>',
      sky("dws3", "#9fc6e0", "#eef5f8"));
  }

  /* 4. Start a Riot: a comic-book page over the rooftops */
  function dwriot() {
    let dots = ""; for (let y = 8; y < 110; y += 10) for (let x = 6 + (y % 20 ? 5 : 0); x < 400; x += 10) dots += '<circle cx="' + x + '" cy="' + y + '" r="1.6"/>';
    const bldg = '<g fill="#1b1430">' + [[0, 150, 60], [60, 120, 50], [110, 140, 44], [154, 100, 56], [210, 132, 46], [256, 112, 60], [316, 140, 44], [360, 124, 40]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (260 - b[1]) + '"/>').join("") + '</g>';
    const winds = '<g fill="' + YEL + '">' + [[12, 166], [30, 190], [72, 140], [84, 170], [124, 156], [168, 120], [184, 150], [222, 150], [270, 132], [290, 166], [330, 160], [372, 144]].map((p, i) => '<rect class="dw-tw' + (i % 2 ? " dw-tw2" : "") + '" x="' + p[0] + '" y="' + p[1] + '" width="8" height="10"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#7b5cff"/><g fill="#5a3fd6">' + dots + '</g>' +
      bldg + winds +
      /* the web stretched across the rooftops */
      '<g stroke="#f4f4f4" stroke-width="1.6" fill="none" class="dw-shake">' +
      '<path d="M60 120L200 40L360 124M154 100L200 40L256 112M110 140L200 40L316 140"/>' +
      '<path d="M120 86q80 -20 150 6M150 68q50 -14 96 4M176 54q24 -6 46 2M92 104q108 -26 210 10"/></g>' +
      /* BANG burst */
      '<g class="dw-pop"><path d="M300 30l12 16l18 -10l-2 20l20 4l-16 12l10 18l-20 -4l-6 18l-12 -16l-16 10l2 -20l-20 -6l16 -10l-8 -18l20 4z" fill="' + YEL + '" stroke="#111" stroke-width="2.5"/>' +
      '<text x="314" y="70" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#e63946" stroke="#111" stroke-width=".8">BANG</text></g>' +
      /* caption box */
      '<rect x="14" y="14" width="170" height="40" fill="#fff8d6" stroke="#111" stroke-width="2.5"/><text x="99" y="42" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" textLength="150" lengthAdjust="spacingAndGlyphs" fill="#111">START A RIOT!</text>' +
      '<rect x="0" y="0" width="400" height="260" fill="none" stroke="#111" stroke-width="8"/>',
      "");
  }

  /* 5. E Vernon Ave & S Central Ave, the Dunbar Hotel up Central behind */
  function dwcorner() {
    const lowrider = '<g class="dw-bounce"><g transform="translate(150 196)"><path d="M0 18q2 -10 16 -12l26 -2l14 -14h46l16 14l30 2q12 2 12 12v8h-160z" fill="' + PINK + '" stroke="#5a1e3a" stroke-width="2"/>' +
      '<path d="M60 -6h20v10h-28zM86 -6h16l10 10h-26z" fill="#bfe3f2"/><path d="M4 20h152" stroke="' + YEL + '" stroke-width="2"/>' +
      '<circle cx="34" cy="28" r="10" fill="#111"/><circle cx="34" cy="28" r="6" fill="#d7d7d7"/><circle cx="34" cy="28" r="2" fill="#888"/>' +
      '<circle cx="126" cy="28" r="10" fill="#111"/><circle cx="126" cy="28" r="6" fill="#d7d7d7"/><circle cx="126" cy="28" r="2" fill="#888"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dws5)"/>' +
      /* the Dunbar Hotel up Central Ave: three-story brick, arched windows, rooftop sign rails */
      '<g transform="translate(40 52)"><rect x="0" y="20" width="150" height="80" fill="#8a4b34"/><rect x="0" y="16" width="150" height="6" fill="#d9c3a0"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: 7 }, (_, c) => '<path d="M' + (10 + c * 20) + ' ' + (44 + r * 22) + 'v-10q5 -6 10 0v10z" fill="#ffe8a8" class="dw-tw' + ((r + c) % 2 ? " dw-tw2" : "") + '"/>').join("")).join("") +
      '<rect x="30" y="4" width="90" height="12" fill="none" stroke="#d9c3a0" stroke-width="1.5"/><text x="75" y="13.5" text-anchor="middle" ' + font + ' font-size="9" fill="#ffd23f">DUNBAR</text></g>' +
      palm(220, 150, 96) + palm(372, 150, 108, "#3a6b40", "dw-sway2") +
      '<rect x="0" y="124" width="400" height="12" fill="#b9ab95"/>' +
      /* wall + tags */
      '<rect x="20" y="128" width="300" height="74" fill="#efe2c8"/><rect x="20" y="128" width="300" height="5" fill="#cdbd9e"/>' +
      tag("SUPERGOOD", 40, 152, 15, TEAL, -3) + tag("DUCKWRTH", 34, 184, 30, YEL, -4) + tag("UUGLY", 214, 160, 20, PINK, -8) +
      /* street */
      '<rect x="0" y="202" width="400" height="10" fill="#c9c1ae"/><rect x="0" y="212" width="400" height="48" fill="#4a4c52"/><path d="M0 246h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      lowrider +
      /* sign pole */
      '<rect x="356" y="40" width="5" height="172" fill="#7d8288"/>' + sign(250, 42, 140, "E Vernon Av", 13) + sign(262, 68, 128, "S Central Av", 13),
      sky("dws5", "#2c2350", "#f2a65a"));
  }

  window.SCENES = { dwstation, dwchoir, dwbernal, dwriot, dwcorner };
})();
