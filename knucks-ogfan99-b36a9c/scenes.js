/* Knucks scenes (Regions tab: UK + EUROPE; South Kilburn, North West London - Ashley Afamefuna Nwachukwu, born 1994, Nigerian Igbo roots,
   grew up on the Alpha House / Alpha-Gorefield estate, sent to boarding school in Nigeria, NoDaysOff).
   1 Kilburn Park station (Bakerloo line, deep tube): cream tiled tunnel, brown Bakerloo band, a red-white-blue train pulling in.
   2 Alpha House, Canterbury Road NW6: the estate tower block, windows lighting up, the white front door at the corner.
   3 Albert Road kickabouts: the fenced cage pitch on the estate, a ball bouncing between the goals.
   4 The old Gaumont State, Kilburn High Road: the cream art deco tower, a red double-decker rolling past.
   5 Carlton Vale and Cambridge Road, NW6: London street signs, KNUCKS tagged, St Augustine's tall spire behind.
   CSS classes prefixed "knk" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes knkWin{0%,100%{opacity:.15}50%{opacity:1}}.knkW{animation:knkWin 3s steps(1) infinite}.knkW2{animation-delay:-1s}.knkW3{animation-delay:-2s}' +
    '@keyframes knkBall{0%{transform:translate(0,0)}25%{transform:translate(70px,-46px)}50%{transform:translate(140px,0)}75%{transform:translate(70px,-30px)}100%{transform:translate(0,0)}}.knkBall{animation:knkBall 3.2s ease-in-out infinite}' +
    '@keyframes knkBus{0%{transform:translateX(-200px)}100%{transform:translateX(560px)}}.knkBus{animation:knkBus 9s linear infinite}' +
    '@keyframes knkCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.knkCloud{animation:knkCloud 26s linear infinite}.knkC2{animation-delay:-13s}' +
    '@keyframes knkSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.knkSp{animation:knkSp 1.4s ease-out infinite}.knkSp2{animation-delay:.5s}' +
    '@keyframes knkBlink{0%,100%{opacity:1}50%{opacity:.25}}.knkBlink{animation:knkBlink 1.2s steps(1) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BAK = "#b36305", GOLD = "#f2c14e", GREEN = "#2e9b5a", CREAM = "#efe6cf";
  const clouds = '<g fill="#fff" opacity=".7"><g class="knkCloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="knkCloud knkC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';

  /* 1. Kilburn Park - deep tube platform */
  function knkstation() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 30v100" stroke="#d8ceb4" stroke-width="1"/>';
    for (let y = 40; y < 130; y += 14) tiles += '<path d="M0 ' + y + 'h400" stroke="#d8ceb4" stroke-width="1"/>';
    let wins = "";
    for (const x of [30, 66, 150, 186, 270]) wins += '<rect x="' + x + '" y="148" width="26" height="20" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 140h300q26 0 30 24v34H10z" fill="#e9e9e4" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="10" y="140" width="330" height="8" fill="#d0202a"/>' + wins +
      '<g fill="#d0202a"><rect x="112" y="150" width="20" height="46"/><rect x="232" y="150" width="20" height="46"/></g>' +
      '<g fill="#9fb3c4"><rect x="115" y="154" width="6" height="22"/><rect x="123" y="154" width="6" height="22"/><rect x="235" y="154" width="6" height="22"/><rect x="243" y="154" width="6" height="22"/></g>' +
      '<rect x="10" y="186" width="330" height="8" fill="#1f3f9a"/><path d="M314 150q20 2 22 22h-22z" fill="#1d2a33"/><rect x="326" y="180" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1612"/>' +
      '<path d="M0 130V40Q200 -6 400 40v90z" fill="' + CREAM + '"/>' + '<g clip-path="url(#knkT)">' + tiles + '</g>' +
      '<path d="M0 112h400v12H0z" fill="' + BAK + '"/>' +
      '<path d="M0 130h400v80H0z" fill="#26201a"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#5c5650"/><rect x="0" y="206" width="400" height="6" fill="#e8d34a"/>' +
      '<g transform="translate(110 54)"><rect width="180" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="70" y="27" ' + F + ' font-size="16" fill="#fff" text-anchor="middle">Kilburn Park</text>' +
      '<rect x="134" y="9" width="38" height="22" rx="11" fill="' + BAK + '"/><text x="153" y="25" ' + F + ' font-size="12" fill="#fff" text-anchor="middle">BAK</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="236">BAKERLOO LINE</text><text x="300" y="236">WAY OUT</text></g>' +
      '<path d="M352 230l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      '<clipPath id="knkT"><path d="M0 112V40Q200 -6 400 40v72z"/></clipPath>');
  }

  /* 2. Alpha House tower, Canterbury Road */
  function knkalpha() {
    let win = "";
    const cls = ["knkW", "knkW knkW2", "knkW knkW3", ""];
    let k = 0;
    for (let y = 46; y < 196; y += 15) for (let x = 160; x < 236; x += 18) { k++; win += '<rect x="' + x + '" y="' + y + '" width="10" height="8" fill="#ffd56a" class="' + cls[k % 4] + '" opacity=".5"/>'; }
    let balc = "";
    for (let y = 56; y < 200; y += 15) balc += '<rect x="148" y="' + y + '" width="104" height="3" fill="#8d8a84"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#knkS2)"/>' + clouds +
      '<g fill="#6e6a64"><rect x="20" y="120" width="70" height="100"/><rect x="300" y="110" width="80" height="110"/></g>' +
      '<g fill="#ffd56a" opacity=".6"><rect x="30" y="134" width="8" height="6"/><rect x="60" y="150" width="8" height="6"/><rect x="316" y="126" width="8" height="6"/><rect x="350" y="160" width="8" height="6"/></g>' +
      '<rect x="146" y="34" width="108" height="186" fill="#b9b2a5" stroke="#5b564e" stroke-width="2"/>' +
      '<rect x="146" y="30" width="108" height="8" fill="#8d8a84"/>' + win + balc +
      '<rect x="190" y="196" width="22" height="24" fill="#fbfbf7" stroke="#555" stroke-width="1.5"/><circle cx="207" cy="209" r="1.6" fill="#555"/>' +
      '<rect x="0" y="218" width="400" height="42" fill="#3a3a3c"/><rect x="0" y="218" width="400" height="5" fill="#9a958b"/>' +
      '<g fill="#2f6b3a"><circle cx="110" cy="200" r="18"/><circle cx="296" cy="204" r="16"/></g><g fill="#5a3a22"><rect x="107" y="208" width="6" height="12"/><rect x="293" y="210" width="6" height="10"/></g>' +
      '<g transform="translate(150 232)"><rect width="100" height="20" rx="3" fill="#fff" stroke="#111"/><text x="50" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">ALPHA HOUSE</text></g>',
      sky('knkS2', '#24325a', '#c98a6a'));
  }

  /* 3. Albert Road kickabouts - the cage pitch */
  function knkpitch() {
    let fence = "";
    for (let x = 20; x <= 380; x += 12) fence += '<path d="M' + x + ' 92v120" stroke="#3a4a44" stroke-width="1"/>';
    for (let y = 92; y <= 212; y += 12) fence += '<path d="M20 ' + y + 'h360" stroke="#3a4a44" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#knkS3)"/>' + clouds +
      '<g fill="#a69e90"><rect x="10" y="40" width="60" height="60"/><rect x="320" y="30" width="70" height="70"/></g>' +
      '<rect x="20" y="150" width="360" height="66" fill="#3f8f45"/><path d="M200 150v66" stroke="#e9f2e2" stroke-width="2"/><circle cx="200" cy="183" r="14" stroke="#e9f2e2" stroke-width="2" fill="none"/>' +
      '<g stroke="#f4f4f4" stroke-width="4" fill="none"><path d="M30 196v-34h22v34"/><path d="M370 196v-34h-22v34"/></g>' +
      fence + '<rect x="18" y="90" width="364" height="4" fill="#2b3732"/>' +
      '<g class="knkBall"><circle cx="130" cy="200" r="7" fill="#fff" stroke="#111" stroke-width="1.5"/><path d="M127 197l3 -2l3 2l-1 4h-4z" fill="#111"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#3a3a3c"/>' +
      '<g transform="translate(130 228)"><rect width="140" height="20" rx="3" fill="#fff" stroke="#111"/><text x="70" y="14" ' + F + ' font-size="10" fill="#111" text-anchor="middle">ALBERT ROAD NW6</text></g>',
      sky('knkS3', '#7fb6e0', '#d8ecf6'));
  }

  /* 4. The Gaumont State, Kilburn High Road */
  function knkstate() {
    let fins = "";
    for (let y = 40; y < 150; y += 10) fins += '<rect x="182" y="' + y + '" width="36" height="3" fill="#d9cfb2"/>';
    const bus = '<g class="knkBus"><rect x="0" y="176" width="120" height="50" rx="6" fill="#d7261e"/><rect x="0" y="200" width="120" height="3" fill="#a81a14"/>' +
      '<g fill="#1d2a33"><rect x="8" y="182" width="20" height="13"/><rect x="34" y="182" width="20" height="13"/><rect x="60" y="182" width="20" height="13"/><rect x="86" y="182" width="26" height="13"/>' +
      '<rect x="8" y="206" width="20" height="12"/><rect x="34" y="206" width="20" height="12"/><rect x="60" y="206" width="20" height="12"/><rect x="96" y="206" width="16" height="16"/></g>' +
      '<g fill="#161616"><circle cx="24" cy="228" r="7"/><circle cx="96" cy="228" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#knkS4)"/>' + clouds +
      '<g fill="#7a5a48"><rect x="0" y="140" width="110" height="90"/><rect x="290" y="130" width="110" height="100"/></g>' +
      '<g fill="#e9d9a0" opacity=".7"><rect x="14" y="156" width="14" height="10"/><rect x="44" y="156" width="14" height="10"/><rect x="74" y="156" width="14" height="10"/><rect x="306" y="148" width="14" height="10"/><rect x="340" y="148" width="14" height="10"/><rect x="372" y="148" width="14" height="10"/></g>' +
      '<rect x="110" y="132" width="180" height="98" fill="' + CREAM + '" stroke="#9c9276" stroke-width="2"/>' +
      '<rect x="176" y="24" width="48" height="206" fill="#f3ead2" stroke="#9c9276" stroke-width="2"/>' + fins +
      '<path d="M172 24h56l-6 -8h-44z" fill="#e3d7b6"/>' +
      '<rect x="118" y="168" width="164" height="18" fill="#2d2a26"/><g fill="#ffcf5a"><circle cx="128" cy="177" r="2.5" class="knkBlink"/><circle cx="272" cy="177" r="2.5" class="knkBlink"/></g>' +
      '<text x="200" y="182" ' + F + ' font-size="12" fill="#ffcf5a" text-anchor="middle" letter-spacing="3">THE STATE</text>' +
      '<g fill="#8f8467"><rect x="130" y="196" width="28" height="34"/><rect x="186" y="196" width="28" height="34"/><rect x="242" y="196" width="28" height="34"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a3c"/><path d="M0 245h400" stroke="#e9e9e9" stroke-width="2" stroke-dasharray="16 12"/>' + bus,
      sky('knkS4', '#3e5c8a', '#e7b98a'));
  }

  /* 5. Carlton Vale and Cambridge Road - the corner */
  function knkcorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="128" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="64" y="16" ' + F + ' font-size="12" fill="#111" text-anchor="middle">' + a + '</text><text x="64" y="28" ' + F + ' font-size="8" fill="#d0202a" text-anchor="middle">' + b + '</text></g>';
    let bricks = "";
    for (let y = 148; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a4a34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#knkS5)"/>' + clouds +
      '<g fill="#b8ad94" stroke="#6f6652" stroke-width="1.5"><path d="M286 146V70h28v76z"/><path d="M286 70l14 -62l14 62z"/></g>' +
      '<g fill="#6f6652"><rect x="296" y="84" width="8" height="18" rx="4"/><rect x="290" y="112" width="20" height="4"/></g>' +
      '<rect x="0" y="146" width="400" height="80" fill="#6b3726"/>' + bricks +
      tag("KNUCKS", 40, 206, 46, GOLD, -5) + tag("NODAYSOFF", 236, 186, 22, GREEN, 4) +
      '<g class="knkSp"><circle cx="198" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="knkSp knkSp2"><circle cx="206" cy="172" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="138" y="44" width="4" height="102" fill="#333"/>' +
      sign(12, 50, "CARLTON VALE", "NW6 - BRENT") + sign(146, 92, "CAMBRIDGE ROAD", "NW6 - BRENT"),
      sky('knkS5', '#f0a35e', '#6b8fc4'));
  }

  window.SCENES = { knkstation, knkalpha, knkpitch, knkstate, knkcorner };
})();
