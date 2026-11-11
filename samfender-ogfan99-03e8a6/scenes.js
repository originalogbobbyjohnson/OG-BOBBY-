/* Sam Fender game (GENRES: ROCK; INTERNATIONAL region: UK + EUROPE; North Shields, Tyne and Wear - born and raised there,
   regular at the Low Lights Tavern on Brewhouse Bank by the Fish Quay, where he still plays the buskers' nights).
   Rooms: North Shields Metro station (Tyne and Wear Metro, Yellow line, platforms in an open cutting), the Fish Quay at dawn
   with the white Low Light and the fishing boats, Tynemouth Priory and Castle on the headland over Longsands, St James' Park
   lit up for his home-town stadium nights, and Brewhouse Bank at the Fish Quay with the tall High Light up the bank behind.
   CSS classes prefixed "sfd" (the page's anim-train is kept). No logos (no Metro "M", no club crest), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sfdGull{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.sfdGull{animation:sfdGull 12s linear infinite}.sfdG2{animation-delay:-6s}' +
    '@keyframes sfdBob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(3px) rotate(1.5deg)}}.sfdBob{transform-box:fill-box;transform-origin:50% 100%;animation:sfdBob 2.6s ease-in-out infinite}.sfdB2{animation-delay:-1.3s}' +
    '@keyframes sfdWave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.sfdWave{animation:sfdWave 3s linear infinite}' +
    '@keyframes sfdBeam{0%,100%{opacity:.15}50%{opacity:.7}}.sfdBeam{animation:sfdBeam 2.4s ease-in-out infinite}' +
    '@keyframes sfdTw{0%,100%{opacity:1}50%{opacity:.2}}.sfdTw{animation:sfdTw 1.6s ease-in-out infinite}.sfdT2{animation-delay:-.5s}.sfdT3{animation-delay:-1.1s}' +
    '@keyframes sfdSweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sfdSweep{transform-box:fill-box;transform-origin:50% 100%;animation:sfdSweep 3.6s ease-in-out infinite}.sfdS2{animation-delay:-1.8s}' +
    '@keyframes sfdCloud{0%{transform:translateX(-120px)}100%{transform:translateX(440px)}}.sfdCloud{animation:sfdCloud 30s linear infinite}.sfdC2{animation-delay:-15s}' +
    '@keyframes sfdSpray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(8px,-18px)}}.sfdSpray{animation:sfdSpray 1.3s ease-out infinite}.sfdSp2{animation-delay:-.6s}' +
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
  const YEL = "#ffcd00", SEA = "#2f6f8f", RED = "#d8432c", STONE = "#cfc6b4";
  const gull = (x, y, cls) => '<g class="sfdGull' + (cls || '') + '"><path d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';
  const cloud = (x, y, s, cls) => '<g class="sfdCloud' + (cls || '') + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#c9d0d6" opacity=".8"><ellipse cx="0" cy="0" rx="30" ry="10"/><ellipse cx="18" cy="-6" rx="18" ry="10"/><ellipse cx="-14" cy="-4" rx="14" ry="8"/></g></g>';
  const waves = (y, col) => {
    let p = '';
    for (let x = -40; x < 460; x += 20) p += 'q5 -4 10 0q5 4 10 0';
    return '<g class="sfdWave"><path d="M-40 ' + y + p + '" stroke="' + col + '" stroke-width="2" fill="none" opacity=".7"/></g>';
  };

  /* 1. North Shields Metro: open cutting under a grey sky, yellow-and-black Metro train pulling in, black station sign with the Yellow line bullet */
  function sfdstation() {
    let wins = '';
    for (let x = 46; x < 290; x += 34) wins += '<rect x="' + x + '" y="134" width="22" height="20" rx="3" fill="#1b2a33"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="122" width="290" height="72" rx="10" fill="#2b2b2b" stroke="#111" stroke-width="2"/>' +
      '<rect x="20" y="122" width="290" height="10" rx="6" fill="#9aa1a6"/>' +
      '<rect x="20" y="160" width="290" height="14" fill="' + YEL + '"/>' +
      '<path d="M310 122q26 4 30 34v38h-30z" fill="' + YEL + '" stroke="#111" stroke-width="2"/>' +
      '<rect x="316" y="132" width="18" height="22" rx="3" fill="#1b2a33"/>' +
      '<circle cx="330" cy="182" r="4" fill="#fff6c8"/>' + wins +
      '<rect x="112" y="136" width="12" height="38" fill="#3a3a3a" stroke="#111"/><rect x="216" y="136" width="12" height="38" fill="#3a3a3a" stroke="#111"/>' +
      '<g fill="#111"><circle cx="70" cy="196" r="7"/><circle cx="100" cy="196" r="7"/><circle cx="240" cy="196" r="7"/><circle cx="270" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sfdSk1)"/>' + cloud(60, 30, 1) + cloud(260, 46, .8, ' sfdC2') + gull(40, 40) +
      '<path d="M0 70h400v40H0z" fill="#6b5a4a"/><path d="M0 70h400" stroke="#4a3d33" stroke-width="3"/>' +
      '<g fill="#5d4e40">' + [0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => '<rect x="' + (x + 4) + '" y="78" width="32" height="12" rx="1"/><rect x="' + (x + 20) + '" y="94" width="32" height="12" rx="1"/>').join('') + '</g>' +
      '<g fill="#7b8a6a"><path d="M0 70q30 -14 60 0z"/><path d="M300 70q40 -16 100 0z"/></g>' +
      '<path d="M0 110h400v14H0z" fill="#8c8c86"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#3d3d3a"/><rect x="0" y="194" width="400" height="8" fill="' + YEL + '"/>' +
      '<rect x="0" y="202" width="400" height="58" fill="#4a4a46"/>' + train +
      '<rect x="128" y="18" width="190" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="152" cy="38" r="12" fill="' + YEL + '"/><text x="152" y="43" text-anchor="middle" ' + F + ' font-size="13" fill="#111">Y</text>' +
      '<text x="172" y="44" ' + F + ' font-size="17" fill="#fff">North Shields</text>' +
      '<rect x="132" y="58" width="4" height="12" fill="#333"/><rect x="310" y="58" width="4" height="12" fill="#333"/>',
      sky('sfdSk1', '#7f8b95', '#c4c9cc'));
  }

  /* 2. Fish Quay at dawn: the white Low Light, the red-brick quay sheds, fishing boats bobbing, gulls */
  function sfdquay() {
    return svg(
      '<rect width="400" height="260" fill="url(#sfdSk2)"/>' + cloud(80, 34, .9) + cloud(300, 24, 1.1, ' sfdC2') +
      '<circle cx="330" cy="92" r="22" fill="#ffd9a0" opacity=".85"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="' + SEA + '"/>' + waves(170, '#9fc3d6') + waves(196, '#7fb0c8') + waves(226, '#9fc3d6') +
      '<path d="M0 150V110h70v40z" fill="#9b4a34"/><path d="M0 110l35 -18 35 18z" fill="#6e3424"/>' +
      '<path d="M70 150V118h80v32z" fill="#b45a3c"/><path d="M70 118l40 -16 40 16z" fill="#7a3a28"/>' +
      '<g fill="#e9d9a8"><rect x="12" y="122" width="10" height="12"/><rect x="34" y="122" width="10" height="12"/><rect x="86" y="128" width="10" height="10"/><rect x="112" y="128" width="10" height="10"/></g>' +
      '<rect x="170" y="62" width="56" height="88" fill="#f4f1ea" stroke="#9a948a" stroke-width="2"/>' +
      '<path d="M166 62h64l-8 -12h-48z" fill="#e7e2d6" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="190" y="30" width="16" height="20" fill="#f4f1ea" stroke="#9a948a" stroke-width="2"/><path d="M186 30h24l-12 -10z" fill="#5a5a5a"/>' +
      '<rect x="193" y="35" width="10" height="10" fill="#ffe27a" class="sfdBeam"/>' +
      '<path d="M206 40l120 -20v40z" fill="#fff3b0" class="sfdBeam" opacity=".4"/>' +
      '<g fill="#7a7468"><rect x="182" y="78" width="10" height="14"/><rect x="204" y="78" width="10" height="14"/><rect x="182" y="106" width="10" height="14"/><rect x="204" y="106" width="10" height="14"/></g>' +
      '<rect x="192" y="128" width="14" height="22" fill="#3b3b3b"/>' +
      '<rect x="0" y="146" width="250" height="6" fill="#6a6a64"/>' +
      '<g class="sfdBob"><path d="M262 176h82l-10 16h-64z" fill="' + RED + '" stroke="#111" stroke-width="1.5"/><rect x="290" y="158" width="24" height="18" fill="#f4f1ea" stroke="#111"/><path d="M302 158v-24" stroke="#333" stroke-width="2"/></g>' +
      '<g class="sfdBob sfdB2"><path d="M60 206h70l-8 14h-54z" fill="#1f5f8a" stroke="#111" stroke-width="1.5"/><rect x="82" y="190" width="20" height="16" fill="#f4f1ea" stroke="#111"/></g>' +
      gull(20, 60) + gull(140, 80, ' sfdG2'),
      sky('sfdSk2', '#e8a27a', '#f4d8b8'));
  }

  /* 3. Tynemouth headland: Priory ruin arches and the castle gatehouse over Longsands, North Sea breakers */
  function sfdpriory() {
    return svg(
      '<rect width="400" height="260" fill="url(#sfdSk3)"/>' + cloud(40, 40, 1.2) + cloud(240, 30, .9, ' sfdC2') + gull(60, 70) + gull(200, 50, ' sfdG2') +
      '<rect x="0" y="170" width="400" height="90" fill="#3e6f86"/>' + waves(184, '#d9ecf2') + waves(206, '#b8d8e4') +
      '<path d="M0 230q100 -14 200 -4t200 -6v40H0z" fill="#e3cf9e"/>' +
      '<g class="sfdSpray"><circle cx="246" cy="172" r="3" fill="#fff"/><circle cx="254" cy="168" r="2" fill="#fff"/></g><g class="sfdSpray sfdSp2"><circle cx="300" cy="176" r="3" fill="#fff"/></g>' +
      '<path d="M0 176V120q40 -20 120 -18q60 2 110 22l10 52z" fill="#6f7a4c"/>' +
      '<path d="M0 176V140q60 -10 120 -6l110 4 10 38z" fill="#5d6a3e"/>' +
      '<g fill="' + STONE + '" stroke="#8a8170" stroke-width="1.5">' +
      '<path d="M54 120V52h12v68z"/><path d="M84 120V40h14v80z"/><path d="M116 120V52h12v68z"/>' +
      '<path d="M66 60q9 -18 18 0v60h-18z" fill="none"/><path d="M98 60q9 -18 18 0v60h-18z" fill="none"/>' +
      '<path d="M66 64h18v-6q-9 -14 -18 0z"/><path d="M98 64h18v-6q-9 -14 -18 0z"/>' +
      '<rect x="40" y="96" width="102" height="24"/></g>' +
      '<g fill="#5d6a3e"><path d="M66 120V80q9 -14 18 0v40z"/><path d="M98 120V80q9 -14 18 0v40z"/></g>' +
      '<g fill="#b9ae98" stroke="#8a8170" stroke-width="1.5"><rect x="160" y="96" width="44" height="30"/><rect x="156" y="88" width="10" height="10"/><rect x="198" y="88" width="10" height="10"/><path d="M174 126v-16q8 -8 16 0v16z" fill="#4a4436"/></g>' +
      '<path d="M0 120h40M142 112h18" stroke="#8a8170" stroke-width="2"/>',
      sky('sfdSk3', '#8fb4cc', '#dfe9ee'));
  }

  /* 4. St James' Park at night: the huge cantilever stand roof, floodlights, a sold-out stadium crowd with phone lights */
  function sfdstjames() {
    let crowd = '', lights = '';
    for (let i = 0; i < 46; i++) {
      const x = 8 + i * 8.6, y = 196 + (i % 3) * 6;
      crowd += '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#111"/><rect x="' + (x - 5) + '" y="' + (y + 3) + '" width="10" height="20" fill="#111"/>';
      if (i % 4 === 0) lights += '<circle cx="' + x + '" cy="' + (y - 12) + '" r="2.4" fill="#fff6c8" class="sfdTw' + (i % 3 === 1 ? ' sfdT2' : i % 3 === 2 ? ' sfdT3' : '') + '"/>';
    }
    let seats = '';
    for (let y = 92; y < 150; y += 8) seats += '<path d="M30 ' + y + 'h340" stroke="#2c2c34" stroke-width="2"/>';
    let dots = '';
    for (let i = 0; i < 60; i++) dots += '<circle cx="' + (34 + (i * 53) % 332) + '" cy="' + (94 + (i * 17) % 54) + '" r="1.6" fill="' + (i % 2 ? '#f4f4f4' : '#ffe27a') + '" class="sfdTw' + (i % 3 === 1 ? ' sfdT2' : i % 3 === 2 ? ' sfdT3' : '') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#0b1018"/>' +
      '<path d="M10 60h380l-20 30H30z" fill="#d9dde2" stroke="#8a9099" stroke-width="2"/>' +
      '<path d="M10 60l40 -26h300l40 26" fill="none" stroke="#e8ecef" stroke-width="5"/>' +
      '<path d="M50 34v26M120 34v26M200 34v26M280 34v26M350 34v26" stroke="#b8bec6" stroke-width="2"/>' +
      '<rect x="30" y="90" width="340" height="62" fill="#16161c"/>' + seats + dots +
      '<rect x="40" y="152" width="320" height="40" fill="#1e6b2e"/><path d="M200 152v40" stroke="#e8f5e8" stroke-width="1.5"/>' +
      '<path d="M120 192l20 -18h120l20 18z" fill="#222" stroke="#555"/>' +
      '<g class="sfdSweep"><path d="M150 176l-40 -120h16z" fill="#fff6c8" opacity=".25"/></g>' +
      '<g class="sfdSweep sfdS2"><path d="M250 176l40 -120h-16z" fill="#fff6c8" opacity=".25"/></g>' +
      '<circle cx="200" cy="172" r="4" fill="' + YEL + '"/>' + crowd + lights,
      '');
  }

  /* 5. Brewhouse Bank at the Fish Quay: green street signs, his name tagged on the quay wall, the tall High Light up the bank */
  function sfdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sfdSk5)"/>' + cloud(60, 30, 1) + gull(200, 40) +
      '<path d="M0 150q120 -60 260 -70t140 10v60z" fill="#7d8a5c"/>' +
      '<rect x="250" y="20" width="40" height="110" fill="#f4f1ea" stroke="#9a948a" stroke-width="2"/>' +
      '<path d="M246 20h48l-6 -10h-36z" fill="#5a5a5a"/><rect x="262" y="26" width="16" height="12" fill="#ffe27a" class="sfdBeam"/>' +
      '<g fill="#7a7468"><rect x="264" y="50" width="12" height="14"/><rect x="264" y="76" width="12" height="14"/><rect x="264" y="102" width="12" height="14"/></g>' +
      '<rect x="0" y="120" width="230" height="110" fill="#d9cfb8" stroke="#a89c80" stroke-width="2"/>' +
      '<path d="M0 120h230l-10 -16H0z" fill="#5a4a3c"/>' +
      '<g fill="#3a3a3a"><rect x="20" y="140" width="26" height="30"/><rect x="70" y="140" width="26" height="30"/><rect x="170" y="140" width="26" height="30"/></g>' +
      '<rect x="116" y="150" width="34" height="80" fill="#3a2418"/>' +
      '<rect x="230" y="150" width="170" height="80" fill="#9b4a34"/>' +
      '<g stroke="#7a3826" stroke-width="1">' + [160, 172, 184, 196, 208, 220].map(y => '<path d="M230 ' + y + 'h170"/>').join('') + '</g>' +
      tag('SAM FENDER', 238, 194, 22, YEL, -5) + tag('SHIELDS', 270, 220, 16, '#f4f4f4', -3) +
      '<g class="sfdSpray"><circle cx="372" cy="186" r="2" fill="' + YEL + '"/></g><g class="sfdSpray sfdSp2"><circle cx="378" cy="180" r="2" fill="' + YEL + '"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55524c"/><path d="M0 232h400" stroke="#888" stroke-width="2"/>' +
      '<rect x="216" y="64" width="5" height="166" fill="#2f3a33"/>' +
      '<rect x="150" y="66" width="128" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="214" y="80" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">BREWHOUSE BANK</text>' +
      '<rect x="174" y="90" width="84" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="216" y="104" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">FISH QUAY</text>',
      sky('sfdSk5', '#9fb0bd', '#dde3e6'));
  }

  window.SCENES = { sfdstation, sfdquay, sfdpriory, sfdstjames, sfdcorner };
})();
