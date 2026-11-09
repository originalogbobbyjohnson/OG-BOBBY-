/* Bad Bunny game (GENRES: Latin / Reggaeton; INTERNATIONAL region: CARIBBEAN; Vega Baja, Puerto Rico - born 1994 in Bayamón, raised in barrio Almirante Sur, Vega Baja).
   Rooms: 1 the Vega Baja Movilidad Ciudadana town bus pulling into the casco urbano stop (routes ESTE / OESTE);
   2 the supermarket in the Vega Baja town center where Benito worked as a bagger (carts rolling, no store logo);
   3 Playa Puerto Nuevo: the natural pool behind the limestone reef wall, white plastic chairs in the sand;
   4 El Choli (Coliseo de Puerto Rico, Hato Rey): the pink "casita" on stage, lights sweeping;
   5 Carretera 160 in barrio Almirante Sur: green signs, BAD BUNNY tagged, the green karst mogotes and a Puerto Rico flag behind.
   CSS classes prefixed "bbn" (the page's anim-train is kept for the bus). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbnCart{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.bbnCart{animation:bbnCart 9s linear infinite}.bbnCt2{animation-delay:-4.5s}' +
    '@keyframes bbnWave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.bbnWave{animation:bbnWave 3.2s ease-in-out infinite}.bbnWv2{animation-delay:-1.6s}' +
    '@keyframes bbnSpray{0%,100%{opacity:0;transform:translateY(6px)}40%{opacity:1;transform:translateY(-6px)}}.bbnSpray{animation:bbnSpray 2.6s ease-in-out infinite}.bbnSp2{animation-delay:-1.3s}' +
    '@keyframes bbnBeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.bbnBeam{animation:bbnBeam 3.4s ease-in-out infinite}.bbnBm2{animation-delay:-1.7s}' +
    '@keyframes bbnBlink{0%,100%{opacity:.3}50%{opacity:1}}.bbnBlink{animation:bbnBlink 1.4s ease-in-out infinite}.bbnBk2{animation-delay:-.7s}' +
    '@keyframes bbnFlag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-4deg)}}.bbnFlag{animation:bbnFlag 2s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes bbnBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-20px)}}.bbnBird{animation:bbnBird 13s linear infinite}.bbnBd2{animation-delay:-6.5s}' +
    '@keyframes bbnHue{0%,100%{fill:#9be15d}33%{fill:#ff4d6d}66%{fill:#3fa9f5}}.bbnHue{animation:bbnHue 4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot, cls) =>
    '<text' + (cls ? ' class="' + cls + '"' : '') + ' x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LIME = "#9be15d", PINK = "#ff4d6d", BLUE = "#3fa9f5", GREEN = "#0f6b3a", PRBLUE = "#0050f0", PRRED = "#e0242b";
  const birds = '<g class="bbnBird"><path d="M0 34q6 -6 12 0q6 -6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>' +
    '<g class="bbnBird bbnBd2"><path d="M0 58q5 -5 10 0q5 -5 10 0" stroke="#2a2a2a" stroke-width="1.8" fill="none"/></g>';
  const palm = (x, y, k) => '<path d="M' + x + ' ' + y + 'q' + (4 * k) + ' ' + (-40 * k) + ' ' + (-2 * k) + ' ' + (-80 * k) + '" stroke="#7a5a3a" stroke-width="' + (5 * k) + '" fill="none"/>' +
    '<g fill="#2f8a3a">' + [[-34, -6], [30, -4], [-26, 14], [26, 16], [0, -22]].map(([dx, dy]) =>
      '<path d="M' + (x - 2 * k) + ' ' + (y - 80 * k) + 'q' + (dx * k / 2) + ' ' + (dy * k - 14 * k) + ' ' + (dx * k) + ' ' + (dy * k + 6 * k) + 'q' + (-dx * k / 3) + ' ' + (-6 * k) + ' ' + (-dx * k) + ' ' + (-dy * k - 6 * k) + 'z"/>').join("") + '</g>';
  /* white plastic monobloc chair */
  const chair = (x, y, k) => '<g fill="#f4f4f0" stroke="#bdbdb4" stroke-width="1">' +
    '<path d="M' + x + ' ' + y + 'h' + (26 * k) + 'l' + (-3 * k) + ' ' + (-30 * k) + 'h' + (-20 * k) + 'z"/>' +
    '<path d="M' + (x - 2 * k) + ' ' + y + 'h' + (30 * k) + 'v' + (5 * k) + 'h' + (-30 * k) + 'z"/>' +
    '<path d="M' + (x + 1 * k) + ' ' + (y + 5 * k) + 'l' + (-3 * k) + ' ' + (20 * k) + 'M' + (x + 25 * k) + ' ' + (y + 5 * k) + 'l' + (3 * k) + ' ' + (20 * k) + '" stroke-width="' + (3 * k) + '"/></g>';
  /* Puerto Rico flag */
  const flag = (x, y, k) => '<rect x="' + (x - 2) + '" y="' + y + '" width="3" height="' + (70 * k) + '" fill="#d8d8d8"/>' +
    '<g class="bbnFlag">' + [0, 1, 2, 3, 4].map(i => '<rect x="' + x + '" y="' + (y + i * 6 * k) + '" width="' + (50 * k) + '" height="' + (6 * k) + '" fill="' + (i % 2 ? "#fff" : PRRED) + '"/>').join("") +
    '<path d="M' + x + ' ' + y + 'l' + (24 * k) + ' ' + (15 * k) + 'l' + (-24 * k) + ' ' + (15 * k) + 'z" fill="' + PRBLUE + '"/>' +
    '<path d="M' + (x + 8 * k) + ' ' + (y + 11 * k) + 'l1.2 3.4h3.6l-2.9 2.1 1.1 3.4-3-2.1-3 2.1 1.1-3.4-2.9-2.1h3.6z" fill="#fff"/></g>';
  /* green karst mogotes */
  const mogotes = (y, col) => '<path d="M0 ' + y + 'q20 -46 46 -40q22 -30 44 2q16 -38 42 -26q26 -40 52 0q14 -26 36 -6q22 -44 50 -6q18 -30 40 0q24 -36 48 -4q22 -24 42 6V' + (y + 40) + 'H0z" fill="' + col + '"/>';

  /* 1. Movilidad Ciudadana town bus pulling into the casco urbano stop, Vega Baja */
  function bbnbus() {
    let wins = "";
    for (let x = 70; x < 300; x += 34) wins += '<rect x="' + x + '" y="142" width="26" height="20" rx="2" fill="#bfe3ff"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="46" y="132" width="296" height="64" rx="10" fill="#f6f6f2" stroke="#6b7480" stroke-width="1.5"/>' + wins +
      '<rect x="46" y="170" width="296" height="8" fill="' + BLUE + '"/><rect x="46" y="178" width="296" height="4" fill="' + LIME + '"/>' +
      '<rect x="310" y="140" width="26" height="26" rx="3" fill="#bfe3ff"/><rect x="50" y="140" width="14" height="40" fill="#cfd6dc"/>' +
      '<rect x="270" y="134" width="64" height="7" rx="2" fill="#111"/><text x="302" y="140" text-anchor="middle" ' + F + ' font-size="6" fill="#ffb000">OESTE</text>' +
      '<circle cx="100" cy="198" r="11" fill="#222"/><circle cx="100" cy="198" r="4" fill="#888"/><circle cx="290" cy="198" r="11" fill="#222"/><circle cx="290" cy="198" r="4" fill="#888"/>' +
      '<circle cx="338" cy="184" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbn1)"/>' + birds +
      mogotes(118, "#4f8f4a") +
      /* casco urbano: low colonial facades */
      '<g><rect x="0" y="96" width="70" height="60" fill="#f2c94c"/><rect x="72" y="104" width="64" height="52" fill="#f7a8b8"/><rect x="250" y="100" width="70" height="56" fill="#8fd3c7"/><rect x="322" y="94" width="78" height="62" fill="#f4e3c1"/>' +
      '<g fill="#5a3a2a"><rect x="12" y="116" width="12" height="20"/><rect x="40" y="116" width="12" height="20"/><rect x="88" y="120" width="12" height="20"/><rect x="112" y="120" width="12" height="20"/><rect x="264" y="118" width="12" height="20"/><rect x="292" y="118" width="12" height="20"/><rect x="340" y="114" width="12" height="20"/><rect x="370" y="114" width="12" height="20"/></g></g>' +
      palm(180, 156, 0.9) + palm(220, 156, 0.75) +
      '<rect x="0" y="196" width="400" height="64" fill="#5d6168"/><rect x="0" y="192" width="400" height="6" fill="#d8d2c4"/>' +
      '<path d="M0 232h400" stroke="#f2d64b" stroke-width="3" stroke-dasharray="20 16"/>' +
      bus +
      '<rect x="90" y="14" width="4" height="36" fill="#9aa3ab"/><rect x="306" y="14" width="4" height="36" fill="#9aa3ab"/>' +
      '<rect x="60" y="8" width="280" height="50" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="72" y="18" width="40" height="14" rx="3" fill="' + BLUE + '"/><text x="92" y="28.5" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">ESTE</text>' +
      '<rect x="72" y="36" width="40" height="14" rx="3" fill="#ffb000"/><text x="92" y="46.5" text-anchor="middle" ' + F + ' font-size="9" fill="#111">OESTE</text>' +
      '<text x="222" y="32" text-anchor="middle" ' + F + ' font-size="17" fill="#fff">Casco Urbano</text>' +
      '<text x="222" y="48" text-anchor="middle" ' + F + ' font-size="8" fill="#cfd6dc">VEGA BAJA · MOVILIDAD CIUDADANA</text>',
      sky("bbn1", "#6cc3ff", "#e9f6ff"));
  }

  /* 2. The town-center supermarket where he bagged groceries: carts rolling past, paper bags, no store logo */
  function bbnsuper() {
    const cart = (cls) => '<g class="' + cls + '"><g transform="translate(0,176)">' +
      '<path d="M0 0h6l6 26h30l6 -20H10" stroke="#c9d1d9" stroke-width="2.5" fill="none"/>' +
      '<path d="M12 6h34M14 14h30M16 22h26" stroke="#c9d1d9" stroke-width="1.5"/>' +
      '<rect x="18" y="-10" width="14" height="18" fill="#c8a06a"/><rect x="32" y="-6" width="10" height="14" fill="#c8a06a"/>' +
      '<path d="M20 -10l4 -8M28 -10l-2 -10" stroke="' + LIME + '" stroke-width="3"/>' +
      '<circle cx="16" cy="32" r="3.5" fill="#333"/><circle cx="40" cy="32" r="3.5" fill="#333"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbn2)"/>' + birds +
      '<rect x="20" y="58" width="360" height="132" fill="#f1ede3" stroke="#a49a86" stroke-width="1.5"/>' +
      '<rect x="20" y="58" width="360" height="30" fill="' + PINK + '"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + F + ' font-size="20" fill="#fff" letter-spacing="3">SUPERMERCADO</text>' +
      '<rect x="20" y="88" width="360" height="8" fill="' + LIME + '"/>' +
      '<g fill="#bfe3ff" stroke="#7d8a96" stroke-width="1.2"><rect x="36" y="104" width="96" height="70"/><rect x="268" y="104" width="96" height="70"/></g>' +
      '<g fill="#e9eef2" stroke="#7d8a96" stroke-width="1.2"><rect x="150" y="104" width="48" height="86"/><rect x="202" y="104" width="48" height="86"/></g>' +
      /* shelves seen through the windows */
      '<g fill="#f2c94c"><rect x="42" y="122" width="84" height="5"/><rect x="274" y="122" width="84" height="5"/></g>' +
      '<g fill="' + BLUE + '"><rect x="42" y="142" width="84" height="5"/><rect x="274" y="142" width="84" height="5"/></g>' +
      '<g fill="' + PINK + '"><rect x="42" y="162" width="84" height="5"/><rect x="274" y="162" width="84" height="5"/></g>' +
      '<g fill="#7a5a3a"><rect x="50" y="112" width="8" height="10"/><rect x="66" y="114" width="8" height="8"/><rect x="90" y="110" width="8" height="12"/><rect x="290" y="112" width="8" height="10"/><rect x="318" y="114" width="8" height="8"/></g>' +
      '<text x="200" y="150" text-anchor="middle" ' + F + ' font-size="9" fill="#5a6672">ABIERTO</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#b8b2a4"/><path d="M0 212h400M0 236h400" stroke="#a49e90" stroke-width="1"/>' +
      cart("bbnCart") + cart("bbnCart bbnCt2") +
      tag("EMPACADOR", 270, 50, 15, LIME, -4),
      sky("bbn2", "#7cc8ff", "#e6f4ff"));
  }

  /* 3. Playa Puerto Nuevo, Vega Baja: the calm natural pool behind the limestone reef wall, waves spraying over, plastic chairs */
  function bbnplaya() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbn3)"/>' + birds +
      '<circle cx="330" cy="46" r="22" fill="#fff2a8"/>' +
      '<rect x="0" y="96" width="400" height="40" fill="#1f6fb8"/>' +
      '<g class="bbnWave"><path d="M-20 108q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe6ff" stroke-width="2" fill="none"/></g>' +
      /* limestone reef wall */
      '<path d="M0 136q30 -10 60 -4q40 -14 80 -2q40 -12 76 0q44 -14 90 -2q40 -10 94 -4V152H0z" fill="#cdbf9e"/>' +
      '<path d="M0 148q40 -6 80 0t90 0t90 0t140 0" stroke="#a89a78" stroke-width="2" fill="none"/>' +
      '<g class="bbnSpray" fill="#ffffff"><circle cx="70" cy="126" r="7"/><circle cx="82" cy="120" r="5"/><circle cx="250" cy="124" r="7"/><circle cx="262" cy="118" r="5"/></g>' +
      '<g class="bbnSpray bbnSp2" fill="#ffffff"><circle cx="160" cy="124" r="6"/><circle cx="340" cy="122" r="7"/><circle cx="352" cy="116" r="5"/></g>' +
      /* the calm pool */
      '<rect x="0" y="150" width="400" height="38" fill="#5fd0d8"/>' +
      '<g class="bbnWave bbnWv2"><path d="M-20 166q20 -3 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#d8fbff" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#f1dfb4"/>' +
      palm(30, 230, 1.2) + palm(380, 236, 1) +
      chair(130, 214, 1) + chair(178, 218, 1) + chair(226, 214, 1) +
      '<path d="M270 208l38 -44l38 44z" fill="' + PINK + '"/><rect x="306" y="164" width="3" height="60" fill="#7a5a3a"/>' +
      '<rect x="60" y="20" width="150" height="22" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="135" y="35" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">PLAYA PUERTO NUEVO</text>',
      sky("bbn3", "#58b9ff", "#e3f5ff"));
  }

  /* 4. El Choli (Coliseo de Puerto Rico, Hato Rey): the pink casita on stage, lights sweeping the crowd */
  function bbncholi() {
    let crowd = "";
    for (let i = 0; i < 40; i++) crowd += '<circle cx="' + (i * 10 + 5) + '" cy="' + (232 + (i % 3) * 4) + '" r="6" fill="#1a1a28"/>';
    let phones = "";
    for (let i = 0; i < 9; i++) phones += '<rect class="bbnBlink' + (i % 2 ? " bbnBk2" : "") + '" x="' + (18 + i * 44) + '" y="' + (214 + (i % 2) * 6) + '" width="4" height="7" rx="1" fill="#fff8c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbn4)"/>' +
      /* arena roof ribs */
      '<path d="M0 60q200 -70 400 0" stroke="#3a3550" stroke-width="3" fill="none"/><path d="M0 84q200 -60 400 0" stroke="#3a3550" stroke-width="2" fill="none"/>' +
      '<g class="bbnBeam" style="transform-origin:120px 70px"><path d="M120 70l-40 160h40z" fill="' + LIME + '" opacity=".25"/></g>' +
      '<g class="bbnBeam bbnBm2" style="transform-origin:280px 70px"><path d="M280 70l40 160h-40z" fill="' + BLUE + '" opacity=".25"/></g>' +
      '<rect x="110" y="66" width="20" height="6" fill="#666"/><rect x="270" y="66" width="20" height="6" fill="#666"/>' +
      /* stage */
      '<rect x="50" y="186" width="300" height="20" fill="#2a2a36"/>' +
      /* the pink casita with a balcony, porch and plastic chairs */
      '<rect x="140" y="118" width="120" height="68" fill="#f7a1c4" stroke="#b05a80" stroke-width="1.5"/>' +
      '<path d="M134 118h132l-10 -14H144z" fill="#e8e0d4"/>' +
      '<rect x="150" y="128" width="22" height="22" fill="#fff" stroke="#b05a80"/><rect x="228" y="128" width="22" height="22" fill="#fff" stroke="#b05a80"/>' +
      '<rect x="188" y="146" width="24" height="40" fill="#3fa9f5" stroke="#1d5f9a"/>' +
      '<path d="M140 156h48M212 156h48" stroke="#fff" stroke-width="2"/><path d="M146 156v-6M156 156v-6M166 156v-6M176 156v-6M222 156v-6M232 156v-6M242 156v-6M252 156v-6" stroke="#fff" stroke-width="1.5"/>' +
      chair(96, 170, 0.6) + chair(282, 170, 0.6) +
      palm(76, 186, 0.7) + palm(328, 186, 0.7) +
      crowd + phones +
      '<rect x="120" y="14" width="160" height="24" rx="3" fill="#111" stroke="#fff" stroke-width="1"/><text x="200" y="30.5" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">EL CHOLI · HATO REY</text>',
      sky("bbn4", "#0b0a1c", "#3b1f4a"));
  }

  /* 5. Carretera 160, barrio Almirante Sur: green signs, BAD BUNNY tagged, the mogotes and a Puerto Rico flag behind */
  function bbncorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbn5)"/>' + birds +
      mogotes(112, "#3f7f3e") +
      flag(206, 52, 1) +
      '<g fill="#f4e3c1"><rect x="0" y="104" width="52" height="44"/></g><g fill="#8fd3c7"><rect x="236" y="110" width="56" height="38"/></g>' +
      '<rect x="0" y="146" width="400" height="76" fill="#f3efe6"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#ddd5c4" stroke-width="1"/>' +
      tag("BENITO", 22, 172, 16, BLUE, -3) +
      tag("BAD BUNNY", 34, 212, 40, LIME, -5, "bbnHue") +
      tag("RIMAS", 282, 214, 17, PINK, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3a40"/><rect x="0" y="220" width="400" height="4" fill="#b8b8be"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="352" y="72" width="5" height="150" fill="#4a4a4a"/>' +
      sign(292, 74, 104, "CARR. 160") +
      sign(292, 100, 104, "ALMIRANTE SUR", 10) +
      '<text x="344" y="136" text-anchor="middle" ' + F + ' font-size="8" fill="#1d2a44">VEGA BAJA</text>',
      sky("bbn5", "#86cdfc", "#eef7ff"));
  }

  window.SCENES = { bbnbus, bbnsuper, bbnplaya, bbncholi, bbncorner };
})();
