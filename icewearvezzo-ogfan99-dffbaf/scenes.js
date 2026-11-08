/* icewearvezzo scenes (Regions tab: Detroit; east side, Six Mile / "the 6"). CSS classes prefixed iv- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 32 McNichols pulling up to the McNichols & Gunston stop on the east side (he paid the fare on the McNichols line for Live From The 6), bungalows at dusk.
   2 His east side wing carry-out (he opened a chicken wing spot on the east side in 2015): the order window, wings in the fryer, steam, the menu board.
   3 Ford Field downtown, where he held a charity event for a mental-health nonprofit: the old brick warehouse wall with its rows of windows, the glass end and the roof, lights sweeping.
   4 Minneapolis, where he was born (his mom's side, the Green Guyz start): the dark glass prow of the downtown stadium, towers behind, snow falling.
   5 E McNichols Rd and Gunston St: green signs, VEZZO tagged on the brick, the Chandler Park water slides over the trees down the road.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ivflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.iv-flk{animation:ivflick 2.4s infinite}.iv-flk2{animation-delay:.8s}' +
    '@keyframes ivtw{0%,100%{opacity:.25}50%{opacity:1}}.iv-tw{animation:ivtw 1.6s ease-in-out infinite}.iv-tw2{animation-delay:-.8s}' +
    '@keyframes ivcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.iv-car{animation:ivcar 6s linear infinite}.iv-car2{animation-delay:-3s}' +
    '@keyframes ivsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.iv-st{animation:ivsteam 2s ease-out infinite}.iv-st2{animation-delay:-.7s}.iv-st3{animation-delay:-1.3s}' +
    '@keyframes ivbub{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.iv-bub{animation:ivbub .4s ease-in-out infinite}' +
    '@keyframes ivbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.iv-beam{transform-box:fill-box;transform-origin:50% 100%;animation:ivbeam 3.2s ease-in-out infinite}.iv-beam2{animation-delay:-1.6s}' +
    '@keyframes ivsnow{from{transform:translateY(-20px)}to{transform:translateY(280px)}}.iv-sn{animation:ivsnow 6s linear infinite}.iv-sn2{animation-delay:-2s}.iv-sn3{animation-delay:-4s}' +
    '@keyframes ivslide{0%{transform:translate(0,0)}100%{transform:translate(46px,58px)}}.iv-rider{animation:ivslide 2.2s ease-in infinite}' +
    '@keyframes ivsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.iv-sp{animation:ivsp 1.3s ease-out infinite}.iv-sp2{animation-delay:-.6s}' +
    '@keyframes ivglint{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.iv-gl{transform-box:fill-box;transform-origin:50% 50%;animation:ivglint 1.4s ease-in-out infinite}.iv-gl2{animation-delay:-.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", ICE = "#9fe8ff", PINK = "#ff5fa2", GOLD = "#f2c14e";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';
  /* a Detroit bungalow: brick base, gable roof, porch */
  const bung = (x, c, roof, lit) => '<rect x="' + x + '" y="96" width="78" height="54" fill="' + c + '"/><path d="M' + (x - 6) + ' 98l45 -30l45 30z" fill="' + roof + '"/>' +
    win(x + 30, 78, 18, 14, lit) + win(x + 8, 108, 20, 18, !lit) + '<rect x="' + (x + 46) + '" y="112" width="16" height="38" fill="#3a2a20"/><rect x="' + (x - 2) + '" y="128" width="82" height="4" fill="#e8e0cc"/>' +
    '<rect x="' + (x + 2) + '" y="132" width="4" height="18" fill="#e8e0cc"/><rect x="' + (x + 72) + '" y="132" width="4" height="18" fill="#e8e0cc"/>';

  /* 1. DDOT 32 McNichols at McNichols & Gunston */
  function ivstation() {
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="70" height="8" rx="2" fill="#111"/><text x="73" y="112.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">32 McNICHOLS</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ivs1)"/>' +
      '<circle cx="60" cy="26" r="1.4" fill="#fff" class="iv-tw"/><circle cx="160" cy="16" r="1.2" fill="#fff" class="iv-tw iv-tw2"/><circle cx="250" cy="30" r="1.3" fill="#fff" class="iv-tw"/><circle cx="350" cy="30" r="11" fill="#f4eccf"/>' +
      bung(6, "#7a4a3a", "#3a2e2a", true) + bung(100, "#8a6a52", "#2e2a34", false) + bung(194, "#6a4a42", "#3a2e2a", true) + bung(288, "#7e5a4a", "#2a2630", false) +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("iv-car", 0, 238, PINK) + car("iv-car iv-car2", 0, 238, "#d6d6d6") +
      '<rect x="318" y="100" width="5" height="92" fill="#555"/><rect x="302" y="86" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="321" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="306" y="112" width="30" height="14" rx="3" fill="#ffcc33"/><text x="321" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#111">32</text>' +
      '<rect x="190" y="200" width="200" height="26" rx="3" fill="#111"/><text x="200" y="218" ' + font + ' font-size="13" fill="#fff">McNichols &amp; Gunston</text>' +
      '<rect x="364" y="205" width="22" height="16" rx="3" fill="' + DDOT + '"/><text x="375" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">32</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 32 · McNICHOLS · SIX MILE · EAST SIDE</text>',
      sky("ivs1", "#0a1430", "#6a3a6a"));
  }

  /* 2. The east side wing carry-out */
  function ivwings() {
    const wing = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -8 14 -4q6 4 2 10q-6 6 -14 2q-4 -3 -2 -8z" fill="#c8681e" stroke="#7a3a10" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1416"/>' +
      '<rect x="0" y="0" width="400" height="64" fill="#2a1e22"/><rect x="40" y="10" width="320" height="44" rx="6" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '" letter-spacing="4" class="iv-flk">WINGS · CARRY OUT</text>' +
      /* menu board */
      '<rect x="252" y="76" width="130" height="92" rx="4" fill="#121212" stroke="#555" stroke-width="2"/>' +
      '<text x="317" y="94" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '">EAST SIDE MENU</text>' +
      ['LEMON PEPPER', 'HOT HONEY', 'BBQ', 'FRIES', 'PEACH POP'].map((t, i) => '<text x="262" y="' + (112 + i * 12) + '" ' + font + ' font-size="8.5" fill="#f4eccf">' + t + '</text><text x="372" y="' + (112 + i * 12) + '" text-anchor="end" ' + font + ' font-size="8.5" fill="' + ICE + '">$' + [8, 8, 7, 3, 2][i] + '</text>').join("") +
      /* order window with bulletproof glass + lazy susan */
      '<rect x="20" y="76" width="216" height="110" fill="#3a2e2a" stroke="#6a5a4a" stroke-width="3"/><rect x="30" y="86" width="196" height="70" fill="#5a7a88" opacity=".55"/>' +
      '<path d="M30 86l40 70M90 86l40 70M150 86l40 70" stroke="#fff" stroke-width="2" opacity=".18"/>' +
      '<rect x="30" y="156" width="196" height="10" fill="#8a7a6a"/><ellipse cx="128" cy="168" rx="30" ry="6" fill="#bcb4a8" stroke="#6a5a4a"/>' +
      /* fryer behind the glass */
      '<rect x="60" y="116" width="80" height="34" fill="#9aa0a6" stroke="#4a5056" stroke-width="2"/><rect x="66" y="120" width="68" height="14" fill="#d8a030"/>' +
      '<g class="iv-bub">' + wing(72, 126) + wing(96, 124) + wing(118, 127) + '</g>' +
      '<path d="M80 114q-4 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".6" class="iv-st"/><path d="M100 114q4 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".6" class="iv-st iv-st2"/><path d="M120 114q-4 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".6" class="iv-st iv-st3"/>' +
      /* box of wings on the counter */
      '<rect x="160" y="140" width="54" height="16" fill="#f4eccf" stroke="#8a7a5a" stroke-width="1.5"/>' + wing(166, 142) + wing(186, 141) +
      '<rect x="0" y="186" width="400" height="74" fill="#2e2428"/><path d="M0 186h400" stroke="' + PINK + '" stroke-width="3"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="200" width="40" height="40" fill="' + (i % 2 ? "#e8e0cc" : "#1a1a1a") + '" opacity=".35"/>').join("") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HIS OWN WING SPOT ON THE EAST SIDE</text>');
  }

  /* 3. Ford Field: the brick warehouse side, glass end, light beams */
  function ivfield() {
    const rows = [];
    for (let r = 0; r < 6; r++) for (let c = 0; c < 18; c++) rows.push('<rect x="' + (18 + c * 14) + '" y="' + (92 + r * 14) + '" width="8" height="9" fill="' + ((r * 7 + c * 3) % 5 ? "#3a2a24" : "#ffd98a") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#ivf1)"/>' +
      '<path class="iv-beam" d="M120 92l-30 -92h22z" fill="' + ICE + '" opacity=".22"/><path class="iv-beam iv-beam2" d="M300 92l-10 -92h22z" fill="' + PINK + '" opacity=".22"/>' +
      /* roof */
      '<path d="M10 88q190 -34 380 0v6h-380z" fill="#c8ccd2" stroke="#8a9096" stroke-width="2"/>' +
      /* brick warehouse wall */
      '<rect x="10" y="86" width="270" height="100" fill="#8a3e2a" stroke="#5a2418" stroke-width="2"/>' + rows.join("") +
      '<path d="M10 172h270" stroke="#5a2418" stroke-width="2"/>' +
      /* glass end */
      '<rect x="280" y="86" width="110" height="100" fill="#2a4a62" stroke="#8a9096" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (290 + i * 15) + ' 86v100" stroke="#8ab0c8" stroke-width="1.2"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M280 ' + (104 + i * 18) + 'h110" stroke="#8ab0c8" stroke-width="1.2"/>').join("") +
      '<rect x="296" y="120" width="78" height="40" fill="#ffd98a" opacity=".35" class="iv-flk"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3f4148"/><rect x="0" y="186" width="400" height="8" fill="#a9a59c"/>' +
      /* charity crowd heading in */
      Array.from({ length: 16 }, (_, i) => '<g><circle cx="' + (20 + i * 24) + '" cy="' + (206 + (i % 3) * 3) + '" r="5" fill="#2a2a2a"/><rect x="' + (14 + i * 24) + '" y="' + (212 + (i % 3) * 3) + '" width="12" height="18" rx="4" fill="' + [ICE, PINK, GOLD, "#7cffb2"][i % 4] + '"/></g>').join("") +
      '<rect x="120" y="236" width="160" height="18" rx="3" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">MENTAL HEALTH · GIVE BACK</text>',
      sky("ivf1", "#0a1028", "#3a2a5a"));
  }

  /* 4. Minneapolis, where he was born: dark glass stadium prow, towers, snow */
  function ivmpls() {
    const snow = Array.from({ length: 24 }, (_, i) => '<circle class="iv-sn' + (i % 3 ? " iv-sn" + (i % 3 + 1) : "") + '" cx="' + ((i * 47) % 400) + '" cy="' + ((i * 31) % 120) + '" r="' + (1.2 + (i % 3) * .6) + '" fill="#fff" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ivm1)"/>' +
      /* towers behind */
      '<rect x="40" y="40" width="34" height="140" fill="#3a4a5e"/><rect x="80" y="62" width="26" height="118" fill="#2e3c4e"/><rect x="300" y="30" width="30" height="150" fill="#3a4a5e"/><path d="M300 30l15 -14l15 14z" fill="#3a4a5e"/><rect x="336" y="70" width="40" height="110" fill="#2e3c4e"/>' +
      Array.from({ length: 30 }, (_, i) => '<rect x="' + [46, 56, 66, 86, 96, 306, 318, 342, 356, 366][i % 10] + '" y="' + (60 + Math.floor(i / 10) * 34) + '" width="4" height="6" fill="#ffd98a" opacity=".8"/>').join("") +
      /* the dark glass prow stadium */
      '<path d="M110 186l40 -120l60 -16l100 40v96z" fill="#1c2430" stroke="#5a6a7a" stroke-width="2"/>' +
      '<path d="M150 66l60 -16l100 40l-110 -10z" fill="#e8eef4" opacity=".85"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (150 + i * 18) + ' ' + (70 + i * 3) + 'l-' + (8 + i) + ' ' + (116 - i * 3) + '" stroke="#4a5a6a" stroke-width="1.2"/>').join("") +
      '<path d="M150 66l-40 120" stroke="#8ab0c8" stroke-width="2"/><rect x="216" y="140" width="80" height="30" fill="#ffd98a" opacity=".3" class="iv-flk"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#d8e0e8"/><path d="M0 214h400" stroke="#aab4c0" stroke-width="2"/>' +
      car("iv-car", 0, 232, PINK) + car("iv-car iv-car2", 0, 232, "#2a2a2a") +
      snow +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="4">MINNEAPOLIS · WHERE IT STARTED</text>',
      sky("ivm1", "#1a2438", "#6a7a92"));
  }

  /* 5. E McNichols Rd and Gunston St, Chandler Park slides behind */
  function ivcorner() {
    const bricks = [];
    for (let r = 0; r < 9; r++) for (let c = 0; c < 15; c++) bricks.push('<rect x="' + (c * 20 + (r % 2) * 10 - 10) + '" y="' + (112 + r * 10) + '" width="19" height="9" fill="' + ((r + c) % 3 ? "#8a3e2a" : "#7a3424") + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#ivc1)"/>' +
      /* Chandler Park trees + water slide tower */
      '<rect x="40" y="40" width="10" height="70" fill="#8a9096"/><rect x="80" y="40" width="10" height="70" fill="#8a9096"/><rect x="36" y="34" width="58" height="10" fill="#d8dde3"/>' +
      '<path d="M90 40q60 0 70 40t60 30" stroke="' + GOLD + '" stroke-width="10" fill="none"/><path d="M50 44q-30 20 -20 50t-30 30" stroke="#3a8ad8" stroke-width="10" fill="none"/>' +
      '<circle class="iv-rider" cx="96" cy="40" r="4" fill="' + PINK + '"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (130 + i * 30) + '" cy="' + (96 + (i % 2) * 6) + '" r="' + (18 + (i % 3) * 4) + '" fill="' + (i % 2 ? "#2a5a3a" : "#33694a") + '"/>').join("") +
      /* brick wall with tag */
      '<g clip-path="url(#ivwall)">' + bricks.join("") + '</g><rect x="0" y="110" width="290" height="4" fill="#5a2418"/>' +
      tag("VEZZO", 30, 172, 48, ICE, -6) + tag("ICED UP", 170, 196, 20, PINK, -4) +
      '<circle class="iv-sp" cx="230" cy="150" r="3" fill="' + ICE + '"/><circle class="iv-sp iv-sp2" cx="236" cy="156" r="2" fill="' + PINK + '"/>' +
      '<text class="iv-gl" x="150" y="134" font-size="16" fill="#fff">✦</text>' +
      /* sign pole */
      '<rect x="331" y="60" width="6" height="150" fill="#6a6f75"/>' + sign(276, 66, 116, "E McNichols Rd") + sign(286, 92, 96, "Gunston St") +
      '<rect x="0" y="202" width="400" height="58" fill="#3f4148"/><rect x="0" y="202" width="400" height="6" fill="#a9a59c"/><path d="M0 236h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("iv-car", 0, 240, "#d6d6d6") + car("iv-car iv-car2", 0, 240, GOLD) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">SIX MILE · EAST SIDE · LIVE FROM THE 6</text>',
      sky("ivc1", "#3a6aa8", "#f2b48a") + '<clipPath id="ivwall"><rect x="0" y="110" width="290" height="92"/></clipPath>');
  }

  window.SCENES = { ivstation, ivwings, ivfield, ivmpls, ivcorner };
})();
