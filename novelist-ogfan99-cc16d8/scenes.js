/* Novelist scenes (Regions tab: UK + EUROPE; Lewisham, South-East London - Kojo Kankam, born 1997, raised in Lewisham;
   The Square crew, his own MMMYEH label, Deputy Young Mayor of Lewisham at 15, album "Novelist Guy" (Mercury shortlist 2018)).
   1 Lewisham station: the DLR terminus beside the Southeastern platforms, a red-and-white DLR train pulling in.
   2 Lewisham High Street market: fruit and veg stalls under striped awnings, the pale Portland-stone Clock Tower behind.
   3 Catford: the Lewisham Town Hall / Civic Suite where the Young Mayor sits, the giant black cat over the Broadway.
   4 Hammersmith Apollo, Mercury Prize night 2018: cream Art Deco front, lit marquee, crowd.
   5 Lewisham High Street at Molesworth Street, SE13: UK street plates, NOV tagged, the Clock Tower behind.
   CSS classes prefixed "nov". No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes novCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.novCloud{animation:novCloud 34s linear infinite}.novC2{animation-delay:-17s}' +
    '@keyframes novCar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.novCar{animation:novCar 7s linear infinite}.novK2{animation-delay:-3.5s}' +
    '@keyframes novTw{0%,100%{opacity:1}50%{opacity:.25}}.novTw{animation:novTw 1.4s ease-in-out infinite}.novT2{animation-delay:.45s}.novT3{animation-delay:.9s}' +
    '@keyframes novBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.novBob{animation:novBob .9s ease-in-out infinite}.novB2{animation-delay:-.45s}' +
    '@keyframes novFlap{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.novFlap{transform-box:fill-box;transform-origin:50% 0;animation:novFlap 1.8s ease-in-out infinite}' +
    '@keyframes novTail{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(12deg)}}.novTail{transform-box:fill-box;transform-origin:0% 100%;animation:novTail 1.6s ease-in-out infinite}' +
    '@keyframes novHand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.novHand{transform-box:view-box;animation:novHand 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const DLR = "#00a4a7", SE = "#1e3f8f", GOLD = "#f2c230", RED = "#e2432f", NAVY = "#1b2b5a", STONE = "#e9e1cc", BLUE = "#4f8fe0";
  const bullet = (x, y, col, txt, tc) => '<rect x="' + (x - 13) + '" y="' + (y - 9) + '" width="26" height="18" rx="9" fill="' + col + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="9" ' + F + ' fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="novCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="novCloud novC2"><ellipse cx="40" cy="64" rx="28" ry="8"/><ellipse cx="56" cy="58" rx="16" ry="8"/></g></g>';
  const car = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 6) + '" width="44" height="12" rx="4" fill="' + col + '"/><path d="M' + (x + 8) + ' ' + (y + 6) + 'l6 -7h16l6 7z" fill="' + col + '"/>' +
    '<rect x="' + (x + 15) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><rect x="' + (x + 24) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><circle cx="' + (x + 10) + '" cy="' + (y + 18) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 18) + '" r="4" fill="#111"/></g>';
  /* the Lewisham Clock Tower: pale Portland stone, three stages, clock faces, corner ball finials, squat spire with a crown */
  const tower = (cx, base, s) => {
    const k = s || 1, X = v => cx + v * k, Y = v => base - v * k;
    return '<g>' +
      '<rect x="' + X(-16) + '" y="' + Y(70) + '" width="' + 32 * k + '" height="' + 70 * k + '" fill="' + STONE + '" stroke="#b8ad92" stroke-width="1"/>' +
      '<rect x="' + X(-20) + '" y="' + Y(8) + '" width="' + 40 * k + '" height="' + 8 * k + '" fill="#d6ccb2"/>' +
      '<rect x="' + X(-6) + '" y="' + Y(40) + '" width="' + 12 * k + '" height="' + 24 * k + '" rx="' + 6 * k + '" fill="#bfb397"/>' +
      '<rect x="' + X(-18) + '" y="' + Y(74) + '" width="' + 36 * k + '" height="' + 5 * k + '" fill="#d6ccb2"/>' +
      '<rect x="' + X(-14) + '" y="' + Y(104) + '" width="' + 28 * k + '" height="' + 30 * k + '" fill="' + STONE + '" stroke="#b8ad92" stroke-width="1"/>' +
      '<circle cx="' + X(0) + '" cy="' + Y(89) + '" r="' + 10 * k + '" fill="#fbf8ef" stroke="#2a2a2a" stroke-width="' + 1.5 * k + '"/>' +
      '<path d="M' + X(0) + ' ' + Y(89) + 'v' + (-7 * k) + '" stroke="#111" stroke-width="' + 1.6 * k + '"/>' +
      '<path class="novHand" style="transform-origin:' + X(0) + 'px ' + Y(89) + 'px" d="M' + X(0) + ' ' + Y(89) + 'h' + (5 * k) + '" stroke="#111" stroke-width="' + 1.2 * k + '"/>' +
      '<rect x="' + X(-17) + '" y="' + Y(108) + '" width="' + 34 * k + '" height="' + 5 * k + '" fill="#d6ccb2"/>' +
      '<circle cx="' + X(-15) + '" cy="' + Y(112) + '" r="' + 3 * k + '" fill="#d6ccb2"/><circle cx="' + X(15) + '" cy="' + Y(112) + '" r="' + 3 * k + '" fill="#d6ccb2"/>' +
      '<path d="M' + X(-12) + ' ' + Y(108) + 'L' + X(0) + ' ' + Y(132) + 'L' + X(12) + ' ' + Y(108) + 'z" fill="#cfc4a8" stroke="#b8ad92" stroke-width="1"/>' +
      '<path d="M' + X(-4) + ' ' + Y(132) + 'l' + (2 * k) + ' ' + (-6 * k) + 'l' + (2 * k) + ' ' + (4 * k) + 'l' + (2 * k) + ' ' + (-4 * k) + 'l' + (2 * k) + ' ' + (6 * k) + 'z" fill="' + GOLD + '"/>' +
      '</g>';
  };

  /* 1. Lewisham station - the DLR terminus next to the Southeastern platforms, DLR train pulling in */
  function novstation() {
    let wins = "";
    for (const x of [44, 80, 116, 196, 232, 268]) wins += '<rect x="' + x + '" y="148" width="28" height="22" rx="3" fill="#1c2a36"/>';
    const train = '<g class="anim-train">' +
      '<path d="M20 140h280q24 0 28 24v38H20z" fill="#f2f2f0" stroke="#2b2b2b" stroke-width="2"/>' + wins +
      '<rect x="20" y="178" width="308" height="10" fill="' + RED + '"/><rect x="20" y="188" width="308" height="5" fill="' + DLR + '"/>' +
      '<path d="M300 140q24 0 28 24v14h-28z" fill="' + RED + '"/><path d="M304 148q14 2 18 18h-18z" fill="#1c2a36"/>' +
      '<rect x="152" y="146" width="30" height="56" fill="#c9ccd0"/><path d="M167 146v56" stroke="#5a6066" stroke-width="2"/>' +
      '<rect x="316" y="190" width="8" height="4" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="60" cy="206" r="6"/><circle cx="84" cy="206" r="6"/><circle cx="252" cy="206" r="6"/><circle cx="276" cy="206" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#novs1)"/>' + clouds(.6) +
      /* tower blocks of the town centre behind */
      '<g fill="#7c8796" opacity=".7"><rect x="20" y="40" width="34" height="80"/><rect x="64" y="58" width="26" height="62"/><rect x="300" y="30" width="40" height="90"/><rect x="346" y="54" width="30" height="66"/></g>' +
      '<g fill="#c7d3de" opacity=".5"><rect x="26" y="48" width="22" height="3"/><rect x="26" y="60" width="22" height="3"/><rect x="26" y="72" width="22" height="3"/><rect x="306" y="40" width="28" height="3"/><rect x="306" y="54" width="28" height="3"/><rect x="306" y="68" width="28" height="3"/></g>' +
      /* the Southeastern platform canopy up on the embankment, a blue train waiting */
      '<rect x="100" y="80" width="200" height="8" fill="#4a5563"/><g fill="#4a5563"><rect x="110" y="88" width="4" height="26"/><rect x="200" y="88" width="4" height="26"/><rect x="286" y="88" width="4" height="26"/></g>' +
      '<rect x="96" y="100" width="210" height="18" rx="3" fill="' + SE + '"/><g fill="#cfe0ee"><rect x="108" y="104" width="16" height="8"/><rect x="134" y="104" width="16" height="8"/><rect x="160" y="104" width="16" height="8"/><rect x="226" y="104" width="16" height="8"/><rect x="252" y="104" width="16" height="8"/></g>' +
      '<rect x="96" y="112" width="210" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="118" width="400" height="22" fill="#8a7f72"/><path d="M0 126h400M0 134h400" stroke="#6f655a" stroke-width="1"/>' +
      train +
      '<rect x="0" y="212" width="400" height="48" fill="#a9a9a4"/><rect x="0" y="212" width="400" height="5" fill="' + GOLD + '"/>' +
      '<g transform="translate(110 222)"><rect width="180" height="32" rx="4" fill="#111"/>' +
      '<text x="10" y="21" font-size="15" ' + F + ' fill="#fff">LEWISHAM</text>' +
      bullet(124, 16, DLR, "DLR") + bullet(156, 16, SE, "SE") + '</g>',
      sky("novs1", "#8fb3d1", "#dfe8ef"));
  }

  /* 2. Lewisham Market on the High Street, the Clock Tower behind */
  function novmarket() {
    const stall = (x, c1, c2, fruit) => {
      let st = "";
      for (let i = 0; i < 6; i++) st += '<rect x="' + (x + i * 12) + '" y="126" width="12" height="16" fill="' + (i % 2 ? c2 : c1) + '"/>';
      let f = "";
      for (let i = 0; i < 6; i++) f += '<circle cx="' + (x + 8 + i * 11) + '" cy="168" r="5" fill="' + fruit[i % fruit.length] + '"/>';
      return '<g class="novFlap">' + st + '<path d="M' + x + ' 142h72l-4 6h-64z" fill="' + c1 + '"/></g>' +
        '<rect x="' + (x + 2) + '" y="142" width="3" height="46" fill="#555"/><rect x="' + (x + 67) + '" y="142" width="3" height="46" fill="#555"/>' +
        '<rect x="' + (x - 2) + '" y="170" width="76" height="18" fill="#7a5a3a"/><path d="M' + x + ' 172h72" stroke="#5e4329"/>' + f;
    };
    let ppl = "";
    for (let i = 0; i < 9; i++) { const x = 24 + i * 44; const c = ["#2b3a66", "#6b2a2a", "#2a5a3a", "#5a4a2a"][i % 4];
      ppl += '<g class="novBob' + (i % 2 ? " novB2" : "") + '"><circle cx="' + x + '" cy="204" r="6" fill="#3a2418"/><rect x="' + (x - 7) + '" y="210" width="14" height="28" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#novm1)"/>' + clouds(.7) +
      /* shopfronts behind */
      '<rect x="0" y="96" width="400" height="92" fill="#b06a4e"/><g fill="#e7dccb"><rect x="10" y="104" width="24" height="16"/><rect x="44" y="104" width="24" height="16"/><rect x="330" y="104" width="24" height="16"/><rect x="364" y="104" width="24" height="16"/></g>' +
      tower(200, 190, 1.05) +
      stall(14, RED, "#fff", ["#f29b2c", "#e2432f", "#7cc243"]) +
      stall(104, "#2f8f4e", "#fff", ["#f2d23a", "#7cc243", "#f29b2c"]) +
      stall(226, BLUE, "#fff", ["#e2432f", "#a03a8a", "#7cc243"]) +
      stall(316, GOLD, "#fff", ["#f29b2c", "#e2432f", "#f2d23a"]) +
      '<rect x="0" y="188" width="400" height="72" fill="#a7a49c"/><path d="M0 200h400" stroke="#8f8c84"/>' + ppl +
      '<text x="200" y="252" text-anchor="middle" font-size="12" ' + F + ' fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round" paint-order="stroke" letter-spacing="2">LEWISHAM MARKET</text>',
      sky("novm1", "#7fb0d8", "#d9e8f2"));
  }

  /* 3. Catford - Lewisham Town Hall / Civic Suite, where the Young Mayor sits, the big black cat over the Broadway */
  function novcatford() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) wins += '<rect x="' + (40 + c * 22) + '" y="' + (78 + r * 26) + '" width="14" height="16" fill="#cfe3ee" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#novc1)"/>' + clouds(.65) +
      /* the Civic Suite: pale stone and glass block */
      '<rect x="28" y="64" width="196" height="124" fill="#d9d2c2" stroke="#a9a08c" stroke-width="2"/>' + wins +
      '<rect x="28" y="58" width="196" height="8" fill="#bfb6a2"/>' +
      '<rect x="100" y="156" width="52" height="32" fill="#3b4a5a"/><path d="M126 156v32" stroke="#9fb3c4" stroke-width="2"/>' +
      '<rect x="74" y="140" width="104" height="12" fill="' + NAVY + '"/><text x="126" y="149" text-anchor="middle" font-size="7.5" ' + F + ' fill="#fff" letter-spacing="1.5">CIVIC SUITE</text>' +
      /* flagpole with a flag */
      '<rect x="210" y="20" width="3" height="44" fill="#555"/><path class="novFlap" d="M213 22h26l-5 7l5 7h-26z" fill="' + GOLD + '"/>' +
      /* the Broadway shop canopy with the big black cat climbing over it */
      '<rect x="240" y="120" width="160" height="68" fill="#8a5a46"/><rect x="240" y="114" width="160" height="10" fill="#3a3a3e"/>' +
      '<g fill="#cfe3ee" opacity=".8"><rect x="252" y="136" width="30" height="40"/><rect x="292" y="136" width="30" height="40"/><rect x="332" y="136" width="30" height="40"/></g>' +
      '<g fill="#141414"><ellipse cx="318" cy="102" rx="40" ry="16"/><circle cx="356" cy="90" r="14"/><path d="M346 80l4 -14l8 10zM358 78l8 -12l4 14z"/>' +
      '<rect x="286" y="106" width="9" height="16" rx="4"/><rect x="340" y="104" width="9" height="16" rx="4"/></g>' +
      '<path class="novTail" d="M280 98q-24 -10 -20 -36" stroke="#141414" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<circle cx="352" cy="88" r="2.5" fill="' + GOLD + '"/><circle cx="362" cy="88" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="0" y="188" width="400" height="20" fill="#9b9b97"/><rect x="0" y="208" width="400" height="52" fill="#3c3c40"/>' +
      '<path d="M0 234h40M70 234h40M140 234h40M210 234h40M280 234h40M350 234h40" stroke="#e8e2c8" stroke-width="3"/>' +
      car(0, 212, RED, "novCar") + car(0, 212, BLUE, "novCar novK2") +
      '<text x="200" y="254" text-anchor="middle" font-size="11" ' + F + ' fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round" paint-order="stroke" letter-spacing="2">CATFORD  ·  YOUNG MAYOR</text>',
      sky("novc1", "#86afd2", "#dce8f0"));
  }

  /* 4. Hammersmith Apollo, Mercury Prize night 2018 - cream Art Deco front, lit marquee, the crowd */
  function novapollo() {
    let lights = "";
    for (let x = 96; x <= 304; x += 13) lights += '<circle class="novTw' + (x % 3 === 0 ? " novT2" : (x % 3 === 1 ? " novT3" : "")) + '" cx="' + x + '" cy="128" r="2.5" fill="#fff6c2"/>';
    let ppl = "";
    for (let i = 0; i < 14; i++) { const x = 20 + i * 27; const c = ["#222", "#2b3a66", "#4a2a2a", "#2a4a3a"][i % 4];
      ppl += '<g class="novBob' + (i % 2 ? " novB2" : "") + '"><circle cx="' + x + '" cy="214" r="7" fill="#2b1d16"/><rect x="' + (x - 8) + '" y="221" width="16" height="30" rx="5" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#nova1)"/>' +
      '<g fill="#fff" opacity=".7"><circle cx="40" cy="30" r="1.2"/><circle cx="120" cy="18" r="1"/><circle cx="330" cy="26" r="1.3"/><circle cx="370" cy="54" r="1"/></g>' +
      /* the cream Art Deco front, stepped top, three tall windows */
      '<path d="M70 200V60q0 -14 14 -14h232q14 0 14 14v140z" fill="' + STONE + '" stroke="#bfb397" stroke-width="2"/>' +
      '<path d="M150 46v-14h100v14z" fill="#efe6cf"/><path d="M176 32v-10h48v10z" fill="#ddd1b4"/>' +
      '<g fill="#d3c6a6"><rect x="130" y="54" width="8" height="62"/><rect x="170" y="54" width="8" height="62"/><rect x="222" y="54" width="8" height="62"/><rect x="262" y="54" width="8" height="62"/></g>' +
      '<g fill="#2e4a7a" opacity=".85"><rect x="142" y="58" width="24" height="52"/><rect x="182" y="58" width="36" height="52"/><rect x="234" y="58" width="24" height="52"/></g>' +
      '<rect x="88" y="120" width="224" height="42" fill="#141414"/>' + lights +
      '<text x="200" y="146" text-anchor="middle" font-size="14" ' + F + ' fill="' + GOLD + '" letter-spacing="2">NOVELIST GUY</text>' +
      '<text x="200" y="157" text-anchor="middle" font-size="7" ' + F + ' fill="#fff" letter-spacing="3">ALBUM OF THE YEAR SHORTLIST</text>' +
      '<rect x="88" y="162" width="224" height="4" fill="' + BLUE + '"/>' +
      '<g fill="#5a3b22"><rect x="110" y="172" width="34" height="28"/><rect x="183" y="172" width="34" height="28"/><rect x="256" y="172" width="34" height="28"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/>' + ppl,
      sky("nova1", "#0c1430", "#2d3566"));
  }

  /* 5. Lewisham High Street at Molesworth Street, SE13 - street plates, NOV on the wall, the Clock Tower behind */
  function novcorner() {
    const plate = (x, y, w, name, sub) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 17) + '" text-anchor="middle" font-size="11" ' + F + ' fill="#111">' + name + '</text>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 27) + '" text-anchor="middle" font-size="7" ' + F + ' fill="' + RED + '">' + sub + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#novk1)"/>' + clouds(.55) +
      '<rect x="0" y="120" width="140" height="60" fill="#9a5c44"/><g fill="#e7dccb"><rect x="12" y="130" width="22" height="16"/><rect x="46" y="130" width="22" height="16"/><rect x="80" y="130" width="22" height="16"/></g>' +
      tower(76, 180, 1.1) +
      '<rect x="236" y="96" width="164" height="104" fill="#b8a99a"/>' +
      '<path d="M236 112h164M236 128h164M236 144h164M236 160h164M236 176h164M236 192h164" stroke="#9d8e80" stroke-width="1"/>' +
      tag("NOV", 262, 150, 46, BLUE, -8) + tag("MMMYEH", 300, 172, 20, GOLD, -4) +
      '<rect x="0" y="180" width="400" height="20" fill="#9b9b97"/><rect x="0" y="200" width="400" height="60" fill="#3c3c40"/>' +
      '<path d="M0 230h40M70 230h40M140 230h40M210 230h40M280 230h40M350 230h40" stroke="#e8e2c8" stroke-width="3"/>' +
      car(0, 206, NAVY, "novCar") + car(0, 206, RED, "novCar novK2") +
      '<rect x="196" y="96" width="5" height="88" fill="#333"/>' +
      plate(144, 70, 136, "LEWISHAM HIGH ST", "LONDON SE13") + plate(150, 104, 116, "MOLESWORTH ST", "SE13"),
      sky("novk1", "#8aa6bf", "#d9e2e8"));
  }

  window.SCENES = { novstation, novmarket, novcatford, novapollo, novcorner };
})();
