/* David Guetta game (GENRES: EDM + DANCE; INTERNATIONAL region: UK + EUROPE; Paris, France).
   Rooms: Châtelet - Les Halles (the underground RER hub, lines A/B/D and Metro 1/4/7/11/14), Le Palace on Rue du Faubourg-Montmartre
   (the old theatre-club he ran in the 1990s), the Eiffel Tower and Champ de Mars (his free concert on the eve of Euro 2016),
   the Louvre pyramid (his New Year's Eve 2020 livestream), and Rue Saint-Denis at Rue de la Ferronnerie in Les Halles with the
   Fontaine des Innocents behind. CSS classes prefixed "dgx" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dgxTw{0%,100%{opacity:1}50%{opacity:.2}}.dgxTw{animation:dgxTw 1.4s ease-in-out infinite}.dgxT2{animation-delay:.45s}.dgxT3{animation-delay:.9s}' +
    '@keyframes dgxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.dgxBob{animation:dgxBob .6s ease-in-out infinite}.dgxBb2{animation-delay:.3s}' +
    '@keyframes dgxBeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.dgxBeam{transform-box:fill-box;transform-origin:50% 100%;animation:dgxBeam 3.2s ease-in-out infinite}.dgxBm2{animation-delay:-1.6s}.dgxBm3{animation-delay:-.8s}' +
    '@keyframes dgxSpin{to{transform:rotate(360deg)}}.dgxSpin{transform-box:fill-box;transform-origin:50% 50%;animation:dgxSpin 6s linear infinite}' +
    '@keyframes dgxFw{0%{transform:scale(.1);opacity:0}15%{opacity:1}80%{opacity:.8}100%{transform:scale(1.2);opacity:0}}.dgxFw{transform-box:fill-box;transform-origin:50% 50%;animation:dgxFw 2.4s ease-out infinite}.dgxF2{animation-delay:-.8s}.dgxF3{animation-delay:-1.6s}' +
    '@keyframes dgxRide{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.dgxRide{animation:dgxRide 9s linear infinite}' +
    '@keyframes dgxDrip{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.dgxDrip{animation:dgxDrip 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BLU = "#29b6ff", PNK = "#ff3d8b", GLD = "#ffd23f";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" class="dgxTw' + (i % 3 === 1 ? ' dgxT2' : i % 3 === 2 ? ' dgxT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="dgxBob' + (i % 2 ? ' dgxBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="22" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l7 -15M' + (x - 4) + ' ' + (y - 6) + 'l-7 -15" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
    }
    return s;
  };
  /* RER letter in a circle and a Metro line number in a colored disc */
  const rer = (x, y, l, c) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="#fff" stroke="' + c + '" stroke-width="2.5"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + F + ' font-size="12" fill="' + c + '">' + l + '</text>';
  const met = (x, y, n, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + F + ' font-size="' + (n.length > 1 ? 9 : 11) + '" fill="' + (tc || "#fff") + '">' + n + '</text>';
  const laser = (x, y, c, cls) => '<path class="dgxBeam ' + (cls || "") + '" d="M' + (x - 2) + ' ' + y + 'L' + (x - 30) + ' 0h60L' + (x + 2) + ' ' + y + 'z" fill="' + c + '" opacity=".28"/>';

  /* 1. Châtelet - Les Halles: the big underground RER hall, dark-blue station sign, RER A/B/D and Metro 1/4/7/11/14, a double-deck RER train pulling in */
  function dgxstation() {
    let wins = "", tiles = "";
    for (let x = 34; x < 290; x += 30) wins += '<rect x="' + x + '" y="118" width="20" height="13" rx="2" fill="#cfe6f5"/><rect x="' + x + '" y="142" width="20" height="13" rx="2" fill="#cfe6f5"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 92v58" stroke="#6b5a4e" stroke-width="1" opacity=".5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="18" y="106" width="280" height="80" rx="8" fill="#f2f4f7" stroke="#1d2433" stroke-width="2"/>' +
      '<path d="M298 106q26 4 30 34v46h-30z" fill="#f2f4f7" stroke="#1d2433" stroke-width="2"/>' +
      '<path d="M302 114q16 4 20 26h-20z" fill="#18233a"/>' +
      '<rect x="18" y="160" width="310" height="8" fill="#1f5fae"/><rect x="18" y="168" width="310" height="4" fill="#e2231a"/>' + wins +
      '<g fill="#c9d0da"><rect x="60" y="118" width="10" height="56"/><rect x="170" y="118" width="10" height="56"/><rect x="262" y="118" width="10" height="56"/></g>' +
      '<rect x="310" y="174" width="10" height="5" fill="#ffe7a0"/>' +
      '<g fill="#111"><circle cx="54" cy="190" r="7"/><circle cx="80" cy="190" r="7"/><circle cx="236" cy="190" r="7"/><circle cx="262" cy="190" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#221c1a"/>' +
      /* concrete vault and warm tiled back wall */
      '<path d="M0 92V40Q200 -8 400 40v52z" fill="#4a3f3a"/>' +
      '<path d="M0 40Q200 -8 400 40" stroke="#6e5f56" stroke-width="3" fill="none"/>' +
      '<g fill="#fff6d6" class="dgxTw"><rect x="60" y="30" width="40" height="4" rx="2"/><rect x="180" y="16" width="40" height="4" rx="2"/><rect x="300" y="30" width="40" height="4" rx="2"/></g>' +
      '<rect x="0" y="92" width="400" height="58" fill="#8a7464"/>' + tiles +
      /* station sign */
      '<rect x="66" y="42" width="268" height="40" rx="4" fill="#1b2a5a" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="60" text-anchor="middle" ' + F + ' font-size="15" fill="#fff">Châtelet - Les Halles</text>' +
      rer(96, 72, "A", "#e2231a") + rer(118, 72, "B", "#5291ce") + rer(140, 72, "D", "#00a88f") +
      met(186, 72, "1", "#ffce00", "#111") + met(208, 72, "4", "#c04191") + met(230, 72, "7", "#f59eb3", "#111") + met(252, 72, "11", "#8d5e2a") + met(274, 72, "14", "#62259d") +
      train +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#9c958c"/><rect x="0" y="196" width="400" height="6" fill="#e8d34a"/>' +
      '<path d="M0 222h400" stroke="#8a837a" stroke-width="1"/>' +
      '<g fill="#3a3f4a"><circle cx="352" cy="214" r="5"/><rect x="346" y="219" width="12" height="22" rx="4"/></g>' +
      '<rect x="360" y="226" width="20" height="16" rx="3" fill="' + PNK + '"/>',
      '');
  }

  /* 2. Le Palace on Rue du Faubourg-Montmartre: cream theatre facade, red marquee, a queue out front, spotlights */
  function dgxpalace() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 13) bulbs += '<circle cx="' + x + '" cy="114" r="2.6" fill="' + GLD + '" class="dgxTw' + ((x / 13 | 0) % 3 === 1 ? ' dgxT2' : (x / 13 | 0) % 3 === 2 ? ' dgxT3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dgxs2)"/>' + stars(26, 6, 70) +
      laser(120, 110, BLU) + laser(280, 110, PNK, "dgxBm2") +
      /* neighbouring Haussmann buildings */
      '<rect x="0" y="40" width="80" height="182" fill="#5e5868"/><rect x="320" y="34" width="80" height="188" fill="#5e5868"/>' +
      '<g fill="#ffd98a" opacity=".85"><rect x="12" y="60" width="14" height="20"/><rect x="46" y="60" width="14" height="20"/><rect x="12" y="100" width="14" height="20"/><rect x="46" y="100" width="14" height="20"/><rect x="334" y="56" width="14" height="20"/><rect x="368" y="56" width="14" height="20"/><rect x="334" y="96" width="14" height="20"/><rect x="368" y="96" width="14" height="20"/></g>' +
      '<path d="M0 40l10 -14h60l10 14zM320 34l10 -14h60l10 14z" fill="#3e3a48"/>' +
      /* the theatre front */
      '<rect x="80" y="24" width="240" height="198" fill="#e9dcc2"/>' +
      '<path d="M80 24h240v10H80z" fill="#cdbb98"/>' +
      '<g fill="#cdbb98"><rect x="96" y="40" width="8" height="74"/><rect x="146" y="40" width="8" height="74"/><rect x="246" y="40" width="8" height="74"/><rect x="296" y="40" width="8" height="74"/></g>' +
      '<g fill="#3a2a40"><path d="M112 112V60q12 -16 24 0v52z"/><path d="M162 112V56q38 -30 76 0v56z"/><path d="M262 112V60q12 -16 24 0v52z"/></g>' +
      '<g fill="' + PNK + '" opacity=".55"><path d="M162 112V56q38 -30 76 0v56z"/></g>' +
      /* the name across the front */
      '<rect x="120" y="66" width="160" height="30" rx="3" fill="#1a1222" stroke="' + GLD + '" stroke-width="2"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="4" fill="' + GLD + '">LE PALACE</text>' +
      /* marquee canopy with bulbs */
      '<rect x="88" y="118" width="224" height="20" fill="#b3122e" stroke="#5a0a18" stroke-width="2"/>' + '<rect x="88" y="109" width="224" height="10" fill="#5a0a18"/>' + bulbs +
      '<text x="200" y="134" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">8 RUE DU FAUBOURG-MONTMARTRE</text>' +
      /* glass doors with a mirror ball behind */
      '<rect x="120" y="146" width="160" height="76" fill="#22182c"/>' +
      '<g class="dgxSpin"><circle cx="200" cy="176" r="18" fill="#bfc6d6"/><path d="M182 176h36M184 166h32M184 186h32M200 158v36M191 160q-6 16 0 32M209 160q6 16 0 32" stroke="#7a8194" stroke-width="1.2" fill="none"/></g>' +
      '<circle cx="193" cy="169" r="3" fill="#fff" class="dgxTw"/>' +
      '<path d="M120 146v76M160 146v76M240 146v76M280 146v76" stroke="#8a7a60" stroke-width="3"/>' +
      /* pavement and the queue */
      '<rect x="0" y="222" width="400" height="38" fill="#3a3640"/><rect x="0" y="220" width="400" height="4" fill="#9a958c"/>' +
      '<path d="M20 214h360" stroke="' + GLD + '" stroke-width="2"/>' +
      crowd(236, 14, "#120c18"),
      sky("dgxs2", "#0b0a26", "#3a1f4a"));
  }

  /* 3. Champ de Mars: the Eiffel Tower lit gold and sparkling, a big stage and a dancing crowd (Euro 2016 eve concert) */
  function dgxeiffel() {
    let spark = "";
    for (let i = 0; i < 26; i++) {
      const t = i / 25, y = 30 + t * 150, half = 6 + Math.pow(t, 1.8) * 60, x = 200 + (i % 2 ? -1 : 1) * half * ((i * 37 % 10) / 10);
      spark += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.6" fill="#fff" class="dgxTw' + (i % 3 === 1 ? ' dgxT2' : i % 3 === 2 ? ' dgxT3' : '') + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#dgxs3)"/>' + stars(30, 6, 90) +
      laser(90, 200, BLU) + laser(310, 200, PNK, "dgxBm2") + laser(200, 200, GLD, "dgxBm3") +
      /* the tower: four legs, first and second platforms, the spire */
      '<g fill="#c8862a" stroke="#7a4a12" stroke-width="1.5">' +
      '<path d="M134 196q30 -50 52 -92h28q22 42 52 92h-26q-24 -40 -40 -40q-16 0 -40 40z"/>' +
      '<rect x="168" y="100" width="64" height="8"/>' +
      '<path d="M180 100l10 -40h20l10 40z"/>' +
      '<rect x="186" y="58" width="28" height="6"/>' +
      '<path d="M192 58l6 -38h4l6 38z"/>' +
      '<rect x="198" y="8" width="4" height="14"/></g>' +
      '<path d="M150 186l40 -76M250 186l-40 -76M190 64l8 34M210 64l-8 34" stroke="#7a4a12" stroke-width="1" opacity=".7"/>' +
      '<rect x="168" y="100" width="64" height="3" fill="#ffd98a" class="dgxTw"/>' + spark +
      /* stage */
      '<rect x="110" y="190" width="180" height="20" fill="#14141c" stroke="' + BLU + '" stroke-width="2"/>' +
      '<rect x="176" y="178" width="48" height="12" fill="#2a2f3a"/><circle cx="188" cy="184" r="4" fill="' + BLU + '"/><circle cx="212" cy="184" r="4" fill="' + BLU + '"/>' +
      '<rect x="114" y="160" width="18" height="30" fill="#1d212b"/><rect x="268" y="160" width="18" height="30" fill="#1d212b"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1a2a1e"/>' +
      crowd(246, 22, "#0c1410") +
      '<g class="dgxBob"><rect x="40" y="200" width="20" height="13" fill="#002395"/><rect x="46.6" y="200" width="6.7" height="13" fill="#fff"/><rect x="53.3" y="200" width="6.7" height="13" fill="#ed2939"/><path d="M40 200v30" stroke="#ddd" stroke-width="1.5"/></g>' +
      '<g class="dgxBob dgxBb2"><rect x="340" y="198" width="20" height="13" fill="#002395"/><rect x="346.6" y="198" width="6.7" height="13" fill="#fff"/><rect x="353.3" y="198" width="6.7" height="13" fill="#ed2939"/><path d="M340 198v30" stroke="#ddd" stroke-width="1.5"/></g>',
      sky("dgxs3", "#050a24", "#23305e"));
  }

  /* 4. The Louvre at night: the glass pyramid glowing, the stone palace wings, New Year fireworks overhead */
  function dgxlouvre() {
    const fw = (x, y, c, cls) => { let s = '<g class="dgxFw ' + (cls || "") + '">'; for (let a = 0; a < 12; a++) { const r = a * Math.PI / 6; s += '<path d="M' + x + ' ' + y + 'l' + (Math.cos(r) * 22).toFixed(1) + ' ' + (Math.sin(r) * 22).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; } return s + '</g>'; };
    let wins = "", grid = "";
    for (let x = 14; x < 400; x += 22) { if (x > 120 && x < 280) continue; wins += '<rect x="' + x + '" y="112" width="10" height="16" fill="#ffd98a" opacity=".9"/><rect x="' + x + '" y="140" width="10" height="16" fill="#ffd98a" opacity=".9"/>'; }
    for (let i = 1; i < 6; i++) grid += '<path d="M' + (200 - i * 14) + ' ' + (210 - 0) + 'L200 120M' + (200 + i * 14) + ' 210L200 120" stroke="#e8f6ff" stroke-width=".8" opacity=".6"/><path d="M' + (200 - i * 15) + ' ' + (120 + i * 15) + 'h' + (i * 30) + '" stroke="#e8f6ff" stroke-width=".8" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dgxs4)"/>' + stars(22, 6, 80) +
      fw(80, 40, PNK) + fw(320, 46, BLU, "dgxF2") + fw(200, 28, GLD, "dgxF3") +
      /* palace wings with mansard roofs */
      '<rect x="0" y="100" width="130" height="110" fill="#d8c8a4"/><rect x="270" y="100" width="130" height="110" fill="#d8c8a4"/>' +
      '<path d="M0 100l8 -18h114l8 18zM270 100l8 -18h114l8 18z" fill="#4a5466"/>' +
      '<path d="M40 82l6 -16h20l6 16zM320 82l6 -16h20l6 16z" fill="#4a5466"/>' +
      '<path d="M0 134h130M270 134h130" stroke="#bfae88" stroke-width="2"/>' + wins +
      /* the pyramid */
      '<path d="M200 120l90 90h-180z" fill="' + BLU + '" opacity=".45"/>' +
      '<path d="M200 120l90 90h-180z" fill="none" stroke="#e8f6ff" stroke-width="2"/>' + grid +
      '<path d="M200 120l90 90h-180z" fill="#fff" opacity=".12" class="dgxTw"/>' +
      /* DJ booth in front */
      '<rect x="164" y="196" width="72" height="14" fill="#14141c" stroke="' + PNK + '" stroke-width="2"/>' +
      '<circle cx="182" cy="203" r="4" fill="' + GLD + '"/><circle cx="218" cy="203" r="4" fill="' + GLD + '"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2a34"/>' +
      '<g fill="#3a3a48"><path d="M30 240l20 -14l20 14zM330 240l20 -14l20 14z"/></g>' +
      '<path d="M0 226h400" stroke="#4a4a5a" stroke-width="1"/>' +
      '<rect x="100" y="230" width="200" height="12" rx="3" fill="#1b2a5a"/>' +
      '<text x="200" y="240" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">MUSÉE DU LOUVRE - NEW YEAR\'S EVE</text>',
      sky("dgxs4", "#03051a", "#1d2350"));
  }

  /* 5. Rue Saint-Denis at Rue de la Ferronnerie: blue Paris street plaques, the GUETTA wall, the Fontaine des Innocents behind */
  function dgxcorner() {
    const arch = x => '<path d="M' + x + ' 128V92q11 -16 22 0v36z" fill="#6e6656"/>';
    const scooter = '<g class="dgxRide"><circle cx="0" cy="214" r="6" fill="#111"/><circle cx="34" cy="214" r="6" fill="#111"/><path d="M0 214h26l8 -16h-6" stroke="' + PNK + '" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="6" y="200" width="18" height="8" rx="3" fill="' + PNK + '"/><g fill="#1d2433"><circle cx="16" cy="182" r="5"/><rect x="11" y="186" width="10" height="16" rx="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dgxs5)"/>' +
      /* Fontaine des Innocents: square Renaissance pavilion, arches, curved dome, on stepped basins */
      '<path d="M120 162h160l-10 -12h-140z" fill="#c7bc9e"/>' +
      '<rect x="140" y="80" width="120" height="70" fill="#e2d8bc"/>' +
      arch(146) + arch(178) + arch(210) + arch(236) +
      '<path d="M140 80h120v-8H140z" fill="#cfc4a6"/>' +
      '<path d="M146 72q54 -46 108 0z" fill="#6c7a80"/>' +
      '<path d="M156 66q44 -30 88 0" stroke="#4e5a60" stroke-width="1" fill="none"/>' +
      '<path d="M194 30h12v-6h-12z" fill="#e2d8bc"/>' +
      '<path d="M190 150q10 -10 20 0M150 150q10 -10 20 0M230 150q10 -10 20 0" stroke="#8fd0ef" stroke-width="3" fill="none" class="dgxDrip"/>' +
      /* side buildings */
      '<rect x="0" y="40" width="100" height="110" fill="#d9cdb4"/><rect x="300" y="46" width="100" height="104" fill="#d9cdb4"/>' +
      '<path d="M0 40l10 -14h80l10 14zM300 46l10 -14h80l10 14z" fill="#556070"/>' +
      '<g fill="#5a6474"><rect x="14" y="56" width="14" height="22"/><rect x="44" y="56" width="14" height="22"/><rect x="74" y="56" width="14" height="22"/><rect x="314" y="62" width="14" height="22"/><rect x="344" y="62" width="14" height="22"/><rect x="374" y="62" width="14" height="22"/></g>' +
      '<path d="M10 84h82M310 90h82" stroke="#2a2a2a" stroke-width="2"/>' +
      /* the tagged wall */
      '<rect x="0" y="150" width="400" height="56" fill="#6a6470"/>' +
      '<path d="M0 164h400M0 178h400M0 192h400" stroke="#5a5460" stroke-width="1"/>' +
      tag("JACK BACK", 14, 172, 15, BLU, -4) +
      tag("GUETTA", 110, 200, 42, GLD, -4) +
      tag("FUTURE RAVE", 274, 176, 14, PNK, -6) +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/><rect x="0" y="204" width="400" height="4" fill="#a6a19a"/>' +
      '<path d="M0 238h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' + scooter +
      /* Paris street plaques: dark-blue enamel, green frame, white letters, arrondissement on top */
      '<rect x="372" y="20" width="5" height="186" fill="#2a2a2a"/>' +
      '<rect x="236" y="20" width="160" height="34" rx="3" fill="#1d3b78" stroke="#2f7a4a" stroke-width="3"/>' +
      '<text x="316" y="31" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">1ER ARRT</text>' +
      '<text x="316" y="47" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">RUE SAINT-DENIS</text>' +
      '<rect x="236" y="60" width="160" height="34" rx="3" fill="#1d3b78" stroke="#2f7a4a" stroke-width="3"/>' +
      '<text x="316" y="71" text-anchor="middle" ' + F + ' font-size="7" fill="#fff">1ER ARRT</text>' +
      '<text x="316" y="87" text-anchor="middle" ' + F + ' font-size="10.5" fill="#fff">RUE DE LA FERRONNERIE</text>',
      sky("dgxs5", "#7fb4e0", "#f1e6d2"));
  }

  window.SCENES = { dgxstation, dgxpalace, dgxeiffel, dgxlouvre, dgxcorner };
})();
