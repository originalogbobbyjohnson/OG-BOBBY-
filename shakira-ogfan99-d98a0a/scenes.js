/* Shakira game (GENRES: Latin; INTERNATIONAL region: LATIN AMERICA; Barranquilla, Colombia - born in Barranquilla 1977, grew up in El Limoncito, north Barranquilla).
   Rooms: 1 Transmetro Estación Joe Arroyo on Carrera 46 (the north end of the Olaya Herrera trunk line), an articulated bus pulling in;
   2 the Gran Malecón on the Magdalena River, the new Pumarejo cable-stayed bridge behind, a boat drifting by;
   3 Carnaval de Barranquilla: a marimonda costume (cloth mask, no real face), cumbia skirts spinning, confetti falling;
   4 Estadio Metropolitano Roberto Meléndez (home of Junior, red-and-white), the floodlights glowing;
   5 Calle 86 and Carrera 70 in El Limoncito: green street signs, SHAKIRA tagged on the wall, the striped Ventana al Mundo tower behind.
   CSS classes prefixed "shk" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes shkFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.shkFlow{animation:shkFlow 3.4s linear infinite}' +
    '@keyframes shkBoat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.shkBoat{animation:shkBoat 16s linear infinite}' +
    '@keyframes shkBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.shkBird{animation:shkBird 12s linear infinite}.shkBd2{animation-delay:-6s}' +
    '@keyframes shkConf{0%{transform:translateY(-30px)}100%{transform:translateY(280px)}}.shkConf{animation:shkConf 4s linear infinite}.shkCf2{animation-delay:-1.3s}.shkCf3{animation-delay:-2.6s}' +
    '@keyframes shkSpin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.82)}}.shkSpin{transform-box:fill-box;transform-origin:50% 0%;animation:shkSpin 1.2s ease-in-out infinite}.shkSp2{animation-delay:-.6s}' +
    '@keyframes shkSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.shkSway{transform-box:fill-box;transform-origin:50% 100%;animation:shkSway 1.6s ease-in-out infinite}' +
    '@keyframes shkGlow{0%,100%{opacity:.4}50%{opacity:1}}.shkGlow{animation:shkGlow 2.2s ease-in-out infinite}.shkGl2{animation-delay:-1.1s}' +
    '@keyframes shkPalm{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.shkPalm{transform-box:fill-box;transform-origin:50% 100%;animation:shkPalm 3s ease-in-out infinite}' +
    '@keyframes shkCar{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.shkCar{animation:shkCar 5.5s linear infinite}.shkCr2{animation-delay:-2.7s}' +
    '@keyframes shkFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.shkFlag{transform-box:fill-box;transform-origin:0% 50%;animation:shkFlag 1.4s ease-in-out infinite}' +
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
  const GOLD = "#f7c548", MAGENTA = "#e0397a", TEAL = "#1fb5a8", RED = "#d7263d", GREEN = "#0f6b3a", TGREEN = "#00a651", NAVY = "#173a63";
  const birds = '<g class="shkBird"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
    '<g class="shkBird shkBd2"><path d="M0 56q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, base, h) => '<g class="shkPalm"><path d="M' + x + ' ' + base + 'q-6 ' + (-h / 2) + ' 4 ' + (-h) + '" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
    '<g fill="#2f8a3e"><path d="M' + (x + 4) + ' ' + (base - h) + 'q-26 -4 -34 14q14 -14 34 -14z"/><path d="M' + (x + 4) + ' ' + (base - h) + 'q26 -6 36 12q-16 -12 -36 -12z"/>' +
    '<path d="M' + (x + 4) + ' ' + (base - h) + 'q-14 -20 -32 -18q20 2 32 18z"/><path d="M' + (x + 4) + ' ' + (base - h) + 'q14 -22 32 -16q-20 0 -32 16z"/></g></g>';
  /* Ventana al Mundo: tall open frame tower, bands of bright triangles, square "window" near the top */
  const ventana = (x, base, k) => {
    const w = 40 * k, h = 170 * k, cols = ["#e63946", "#f7c548", "#1fb5a8", "#7b2cbf", "#ff7f11", "#2a9d8f"];
    let bands = "";
    for (let i = 0; i < 12; i++) {
      const y = base - h + i * (h / 12);
      bands += '<path d="M' + x + ' ' + y + 'h' + w + 'l-' + (w / 2) + ' ' + (h / 12) + 'z" fill="' + cols[i % 6] + '"/>' +
        '<path d="M' + x + ' ' + (y + h / 12) + 'l' + (w / 2) + ' -' + (h / 12) + 'l' + (w / 2) + ' ' + (h / 12) + 'z" fill="' + cols[(i + 3) % 6] + '"/>';
    }
    return '<g>' + bands + '<rect x="' + (x + w * .22) + '" y="' + (base - h + 18 * k) + '" width="' + (w * .56) + '" height="' + (28 * k) + '" fill="url(#shkwin)"/>' +
      '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="none" stroke="#1d1d1d" stroke-width="1.2"/></g>';
  };

  /* 1. Estación Joe Arroyo, Carrera 46: Transmetro platform, the articulated bus gliding in */
  function shkbus() {
    let wins = "";
    for (let x = 64; x < 316; x += 24) if (x < 186 || x > 206) wins += '<rect x="' + x + '" y="148" width="18" height="18" rx="2" fill="#bfe3ff"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="40" y="138" width="150" height="62" rx="8" fill="#f6f8fa" stroke="#8a96a2" stroke-width="1.5"/>' +
      '<rect x="196" y="138" width="150" height="62" rx="8" fill="#f6f8fa" stroke="#8a96a2" stroke-width="1.5"/>' +
      '<rect x="186" y="142" width="14" height="54" fill="#3a3f45"/><path d="M186 146h14M186 156h14M186 166h14M186 176h14M186 186h14" stroke="#5a6068" stroke-width="1.5"/>' +
      wins +
      '<rect x="40" y="172" width="306" height="8" fill="' + TGREEN + '"/><rect x="40" y="182" width="306" height="3" fill="' + GOLD + '"/>' +
      '<rect x="330" y="146" width="14" height="24" rx="3" fill="#bfe3ff"/><rect x="326" y="190" width="18" height="6" rx="2" fill="#fff6c2"/>' +
      '<g fill="#1b1b1b"><circle cx="76" cy="202" r="10"/><circle cx="160" cy="202" r="10"/><circle cx="300" cy="202" r="10"/></g>' +
      '<g fill="#9aa3ab"><circle cx="76" cy="202" r="4"/><circle cx="160" cy="202" r="4"/><circle cx="300" cy="202" r="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shk1)"/>' + birds +
      '<circle cx="330" cy="40" r="20" fill="#fff4c4"/>' +
      palm(16, 136, 60) + palm(372, 136, 54) +
      '<g fill="#e9dcc2"><rect x="60" y="88" width="46" height="50"/><rect x="290" y="80" width="60" height="58"/></g>' +
      '<g fill="#c9b894"><rect x="68" y="96" width="8" height="8"/><rect x="86" y="96" width="8" height="8"/><rect x="300" y="90" width="8" height="8"/><rect x="320" y="90" width="8" height="8"/></g>' +
      /* station canopy and glass doors */
      '<path d="M20 104h360l-10 14H30z" fill="#e8ecef" stroke="#9aa6b2" stroke-width="1.2"/>' +
      '<g fill="#8a939c"><rect x="40" y="118" width="5" height="96"/><rect x="200" y="118" width="5" height="96"/><rect x="356" y="118" width="5" height="96"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5a5e63"/><rect x="0" y="204" width="400" height="5" fill="' + GOLD + '"/>' +
      '<path d="M0 238h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      /* station sign */
      '<rect x="98" y="12" width="4" height="34" fill="#9aa3ab"/><rect x="298" y="12" width="4" height="34" fill="#9aa3ab"/>' +
      '<rect x="78" y="8" width="244" height="46" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="182" y="30" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Estación Joe Arroyo</text>' +
      '<text x="182" y="46" text-anchor="middle" ' + F + ' font-size="8" fill="#cfd6dc">TRANSMETRO · CARRERA 46 · BARRANQUILLA</text>' +
      '<rect x="288" y="16" width="26" height="26" rx="5" fill="' + TGREEN + '"/><text x="301" y="34" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">R2</text>',
      sky("shk1", "#8fd3ff", "#fdf1d6"));
  }

  /* 2. Gran Malecón del Río Magdalena: the boardwalk, palms, the river, the new Pumarejo bridge behind */
  function shkmalecon() {
    let stays = "";
    for (let i = 1; i <= 7; i++) {
      stays += '<path d="M150 ' + (40 + i * 6) + 'L' + (150 - 14 - i * 16) + ' 120M150 ' + (40 + i * 6) + 'L' + (150 + 14 + i * 16) + ' 120" stroke="#f4f6f8" stroke-width="1.2"/>' +
        '<path d="M300 ' + (52 + i * 5) + 'L' + (300 - 12 - i * 13) + ' 120M300 ' + (52 + i * 5) + 'L' + (300 + 12 + i * 13) + ' 120" stroke="#f4f6f8" stroke-width="1.1"/>';
    }
    let water = '<g class="shkFlow">';
    for (let y = 136; y < 196; y += 9) for (let x = -20; x < 440; x += 40) water += '<path d="M' + (x + (y % 18)) + ' ' + y + 'q10 -4 20 0" stroke="#e3c79a" stroke-width="1.5" fill="none" opacity=".6"/>';
    water += '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shk2)"/>' + birds +
      '<circle cx="64" cy="54" r="22" fill="#ffe7a8" opacity=".9"/>' +
      stays +
      '<path d="M146 120L148 34h4l2 86z" fill="#fbfcfd"/><path d="M297 120L299 48h3l2 72z" fill="#fbfcfd"/>' +
      '<rect x="0" y="118" width="400" height="5" fill="#dfe3e7"/><g fill="#c4c9ce"><rect x="60" y="123" width="4" height="10"/><rect x="230" y="123" width="4" height="10"/><rect x="360" y="123" width="4" height="10"/></g>' +
      '<rect x="0" y="128" width="400" height="70" fill="#a98a5c"/>' + water +
      '<g class="shkBoat"><path d="M0 170h70l-10 12H8z" fill="#f2f2f2" stroke="#7a7a7a"/><rect x="18" y="158" width="30" height="12" fill="#1fb5a8"/><path d="M48 158v-12" stroke="#555" stroke-width="2"/></g>' +
      /* boardwalk */
      '<rect x="0" y="198" width="400" height="62" fill="#e6d3b0"/><path d="M0 198h400" stroke="#fff" stroke-width="3"/>' +
      '<g stroke="#cdb48a" stroke-width="1"><path d="M0 214h400M0 230h400M0 246h400"/></g>' +
      '<g stroke="#4a4a4a" stroke-width="2"><path d="M0 194h400"/><path d="M20 194v6M70 194v6M120 194v6M170 194v6M220 194v6M270 194v6M320 194v6M370 194v6"/></g>' +
      palm(36, 236, 66) + palm(196, 240, 58) + palm(356, 236, 70) +
      '<g><rect x="262" y="206" width="4" height="34" fill="#3a3a3a"/><circle cx="264" cy="204" r="6" fill="#fff6c2" class="shkGlow"/></g>' +
      '<rect x="110" y="212" width="40" height="5" rx="2" fill="#8a5a32"/><rect x="114" y="217" width="3" height="10" fill="#5a3a22"/><rect x="143" y="217" width="3" height="10" fill="#5a3a22"/>',
      sky("shk2", "#ffb36b", "#ffe9c7"));
  }

  /* 3. Carnaval de Barranquilla: a marimonda costume dancing, cumbia skirts spinning, confetti */
  function shkcarnaval() {
    const cols = ["#e63946", "#f7c548", "#1fb5a8", "#7b2cbf", "#ff7f11", "#2a9d8f", "#ffffff"];
    let conf = "";
    for (let g = 0; g < 3; g++) {
      conf += '<g class="shkConf' + (g ? ' shkCf' + (g + 1) : '') + '">';
      for (let i = 0; i < 18; i++) conf += '<rect x="' + ((i * 53 + g * 29) % 400) + '" y="' + ((i * 31 + g * 17) % 120) + '" width="5" height="3" fill="' + cols[(i + g) % 7] + '" transform="rotate(' + (i * 37 % 90) + ' ' + ((i * 53 + g * 29) % 400) + ' ' + ((i * 31 + g * 17) % 120) + ')"/>';
      conf += '</g>';
    }
    const dancer = (x, c1, c2, cls) =>
      '<g><rect x="' + (x - 6) + '" y="128" width="12" height="26" rx="4" fill="#fff"/><circle cx="' + x + '" cy="120" r="8" fill="#7a4a2a"/>' +
      '<path d="M' + (x - 9) + ' 116q9 -10 18 0z" fill="#e63946"/><circle cx="' + (x + 7) + '" cy="114" r="4" fill="#f7c548"/>' +
      '<g class="shkSpin ' + cls + '"><path d="M' + (x - 6) + ' 152L' + (x - 42) + ' 206h84L' + (x + 6) + ' 152z" fill="' + c1 + '"/>' +
      '<path d="M' + (x - 30) + ' 186h60M' + (x - 36) + ' 196h72" stroke="' + c2 + '" stroke-width="5"/><path d="M' + (x - 42) + ' 206h84" stroke="#fff" stroke-width="3"/></g>' +
      '<path d="M' + (x - 6) + ' 134l-22 -12M' + (x + 6) + ' 134l22 -12" stroke="#7a4a2a" stroke-width="4" stroke-linecap="round"/></g>';
    /* marimonda: colourful patchwork suit, cloth mask with long trunk-nose and big ears (a costume, not a person) */
    const marimonda = '<g class="shkSway">' +
      '<path d="M182 150h36l10 62h-56z" fill="#e63946"/><path d="M182 150h18v62h-28z" fill="#1f6fd1"/><path d="M200 150h18l10 62h-28z" fill="#f7c548"/>' +
      '<path d="M176 212h22v10h-24zM202 212h22l2 10h-24z" fill="#2a2a2a"/>' +
      '<path d="M182 156l-26 -24M218 156l26 -24" stroke="#1fb5a8" stroke-width="9" stroke-linecap="round"/>' +
      '<rect x="182" y="96" width="36" height="54" rx="14" fill="#1f6fd1"/>' +
      '<ellipse cx="176" cy="112" rx="10" ry="16" fill="#e63946"/><ellipse cx="224" cy="112" rx="10" ry="16" fill="#e63946"/>' +
      '<circle cx="192" cy="112" r="6" fill="#fff"/><circle cx="208" cy="112" r="6" fill="#fff"/><circle cx="192" cy="112" r="2.4" fill="#111"/><circle cx="208" cy="112" r="2.4" fill="#111"/>' +
      '<path d="M200 120q-4 20 -2 36q2 10 10 8" stroke="#f7c548" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M186 92q14 -16 28 0" fill="#f7c548"/><circle cx="200" cy="82" r="6" fill="#ff7f11"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shk3)"/>' +
      '<g opacity=".9">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0l25 30l25 -30z" fill="' + cols[i % 6] + '"/>').join("") + '</g>' +
      '<path d="M0 0q200 40 400 0" stroke="#fff" stroke-width="1.5" fill="none"/>' +
      '<g fill="#f3e2c4"><rect x="0" y="70" width="90" height="140"/><rect x="310" y="62" width="90" height="148"/></g>' +
      '<g fill="#1fb5a8"><rect x="14" y="88" width="18" height="24"/><rect x="52" y="88" width="18" height="24"/><rect x="326" y="82" width="18" height="24"/><rect x="364" y="82" width="18" height="24"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#4a4a52"/><path d="M0 210h400" stroke="#f7c548" stroke-width="3"/>' +
      dancer(90, "#e63946", "#f7c548", "") + dancer(310, "#7b2cbf", "#1fb5a8", "shkSp2") + marimonda + conf +
      '<rect x="120" y="12" width="160" height="34" rx="6" fill="#111" opacity=".75"/>' +
      '<text x="200" y="35" text-anchor="middle" ' + F + ' font-size="15" fill="' + GOLD + '">¡CARNAVAL!</text>',
      sky("shk3", "#5ac8fa", "#ffe1f0"));
  }

  /* 4. Estadio Metropolitano Roberto Meléndez: red-and-white Junior stripes, floodlights glowing */
  function shkestadio() {
    let stripes = "";
    for (let x = 30; x < 370; x += 20) stripes += '<rect x="' + x + '" y="96" width="10" height="70" fill="' + RED + '"/>';
    const light = (x) => '<g><rect x="' + (x - 2) + '" y="30" width="4" height="70" fill="#7a7f86"/><rect x="' + (x - 16) + '" y="20" width="32" height="14" rx="2" fill="#4a4f56"/>' +
      '<g class="shkGlow"><rect x="' + (x - 13) + '" y="23" width="26" height="8" fill="#fffbe0"/><path d="M' + (x - 16) + ' 34L' + (x - 60) + ' 110h120L' + (x + 16) + ' 34z" fill="#fffbe0" opacity=".14"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#shk4)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 29) % 50) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      light(40) + light(360) +
      '<path d="M20 100q180 -34 360 0v70H20z" fill="#f4f4f4"/>' + stripes +
      '<path d="M20 100q180 -34 360 0" stroke="#bbb" stroke-width="3" fill="none"/>' +
      '<g fill="#2a2a30"><rect x="70" y="140" width="26" height="26" rx="2"/><rect x="186" y="136" width="28" height="30" rx="2"/><rect x="304" y="140" width="26" height="26" rx="2"/></g>' +
      '<rect x="0" y="166" width="400" height="94" fill="#2c7a3c"/>' +
      '<g stroke="#e9f5ea" stroke-width="2" fill="none" opacity=".8"><path d="M0 214h400"/><circle cx="200" cy="214" r="26"/><path d="M0 180h60v68H0M400 180h-60v68h60"/></g>' +
      '<circle cx="200" cy="214" r="5" fill="#fff"/>' +
      '<g class="shkFlag"><rect x="194" y="58" width="2" height="30" fill="#ddd"/><rect x="196" y="58" width="22" height="14" fill="' + RED + '"/><rect x="196" y="62" width="22" height="4" fill="#fff"/></g>' +
      '<rect x="110" y="104" width="180" height="26" rx="4" fill="#111"/><text x="200" y="122" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">ESTADIO METROPOLITANO</text>',
      sky("shk4", "#0e1a3a", "#3a2a6a"));
  }

  /* 5. Calle 86 and Carrera 70, El Limoncito: green street signs, SHAKIRA on the wall, Ventana al Mundo behind */
  function shkcorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#shk5)"/>' + birds +
      ventana(150, 146, 0.78) +
      '<g fill="#e9dcc2"><rect x="0" y="96" width="60" height="50"/><rect x="230" y="104" width="70" height="42"/><rect x="306" y="90" width="44" height="56"/></g>' +
      palm(80, 146, 56) + palm(212, 146, 46) +
      '<g class="shkCar"><rect x="0" y="136" width="22" height="9" rx="3" fill="#f7c548"/></g><g class="shkCar shkCr2"><rect x="0" y="137" width="22" height="9" rx="3" fill="#e63946"/></g>' +
      /* wall */
      '<rect x="0" y="146" width="400" height="76" fill="#f1e4c8"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#ddcca6" stroke-width="1"/>' +
      tag("BARRANQUILLA", 24, 172, 16, TEAL, -3) +
      tag("SHAKIRA", 40, 212, 42, MAGENTA, -5) +
      tag("LA LOBA", 220, 206, 18, GOLD, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3a40"/><rect x="0" y="220" width="400" height="4" fill="#b8b8be"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="352" y="72" width="5" height="150" fill="#4a4a4a"/>' +
      sign(296, 74, 98, "CALLE 86") +
      sign(296, 100, 98, "CARRERA 70", 11) +
      '<text x="345" y="136" text-anchor="middle" ' + F + ' font-size="8" fill="#173a63">EL LIMONCITO</text>',
      sky("shk5", "#7cc8ff", "#fff0d2") + '<linearGradient id="shkwin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd6ff"/><stop offset="1" stop-color="#e8f6ff"/></linearGradient>');
  }

  window.SCENES = { shkbus, shkmalecon, shkcarnaval, shkestadio, shkcorner };
})();
