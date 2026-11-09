/* Tyla game (GENRES: Afrobeats / amapiano pop; INTERNATIONAL region: AFRICA; Edenvale, East Rand, Johannesburg, South Africa - born in Edenvale, Edenglen High class of 2019).
   Rooms: the Gautrain pulling into Rhodesfield station (Kempton Park, the closest Gautrain stop to Edenvale), the Edenglen High school hall stage
   where she was Head of Culture, the painted Orlando Towers in Soweto with a bungee jumper, a popiano dance floor (her own word for her sound)
   with a splash of water, and Lungile Mtshali Road at Modderfontein Road in Edenvale with Hillbrow Tower on the Joburg skyline behind.
   CSS classes prefixed "tyl" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tylGlow{0%,100%{opacity:.45}50%{opacity:1}}.tylGlow{animation:tylGlow 2.2s ease-in-out infinite}.tylGl2{animation-delay:-1.1s}' +
    '@keyframes tylSweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.tylSw{transform-box:fill-box;transform-origin:50% 0%;animation:tylSweep 3.2s ease-in-out infinite}.tylSw2{animation-delay:-1.6s}' +
    '@keyframes tylBungee{0%,100%{transform:translateY(0)}45%{transform:translateY(96px)}60%{transform:translateY(70px)}75%{transform:translateY(88px)}}.tylBungee{animation:tylBungee 4s ease-in-out infinite}' +
    '@keyframes tylCord{0%,100%{transform:scaleY(.05)}45%{transform:scaleY(1)}60%{transform:scaleY(.73)}75%{transform:scaleY(.92)}}.tylCord{transform-box:fill-box;transform-origin:50% 0%;animation:tylCord 4s ease-in-out infinite}' +
    '@keyframes tylBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.tylBob{animation:tylBob .55s ease-in-out infinite}.tylBb2{animation-delay:-.27s}' +
    '@keyframes tylDrop{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--dx),-50px);opacity:0}}' +
    '@keyframes tylSplash{0%{transform:translateY(0) scale(.6);opacity:1}100%{transform:translateY(-40px) scale(1.1);opacity:0}}.tylSplash{transform-box:fill-box;transform-origin:50% 100%;animation:tylSplash 1.1s ease-out infinite}.tylSp2{animation-delay:-.55s}' +
    '@keyframes tylEq{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.tylEq{transform-box:fill-box;transform-origin:50% 100%;animation:tylEq .5s ease-in-out infinite}.tylE2{animation-delay:-.12s}.tylE3{animation-delay:-.25s}.tylE4{animation-delay:-.37s}' +
    '@keyframes tylPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}.tylPulse{transform-box:fill-box;transform-origin:50% 50%;animation:tylPulse .5s ease-in-out infinite}' +
    '@keyframes tylCloud{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.tylCloud{animation:tylCloud 26s linear infinite}.tylCl2{animation-delay:-13s}' +
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
  const BLUE = "#38c6f4", GOLD = "#ffc845", PINK = "#ff5fa2", NAVY = "#0d2340", GREEN = "#0f6b3a";
  const cloud = (cls, y) => '<g class="tylCloud ' + (cls || "") + '" fill="#fff" opacity=".85"><ellipse cx="0" cy="' + y + '" rx="26" ry="9"/><ellipse cx="18" cy="' + (y - 6) + '" rx="16" ry="9"/><ellipse cx="-16" cy="' + (y - 3) + '" rx="12" ry="7"/></g>';
  /* Hillbrow Tower: tall concrete shaft, the pod near the top, the mast */
  const hillbrow = (x, base, k, c) => {
    const h = 170 * k;
    return '<g fill="' + c + '"><rect x="' + (x - 5 * k) + '" y="' + (base - h) + '" width="' + (10 * k) + '" height="' + h + '"/>' +
      '<rect x="' + (x - 13 * k) + '" y="' + (base - h + 8 * k) + '" width="' + (26 * k) + '" height="' + (8 * k) + '" rx="' + (3 * k) + '"/>' +
      '<rect x="' + (x - 11 * k) + '" y="' + (base - h + 18 * k) + '" width="' + (22 * k) + '" height="' + (14 * k) + '" rx="' + (3 * k) + '"/>' +
      '<rect x="' + (x - 13 * k) + '" y="' + (base - h + 34 * k) + '" width="' + (26 * k) + '" height="' + (6 * k) + '" rx="' + (3 * k) + '"/>' +
      '<rect x="' + (x - 1.5 * k) + '" y="' + (base - h - 30 * k) + '" width="' + (3 * k) + '" height="' + (30 * k) + '"/></g>' +
      '<circle cx="' + x + '" cy="' + (base - h - 30 * k) + '" r="' + (2 * k) + '" fill="#ff4040" class="tylGlow"/>';
  };

  /* 1. Rhodesfield station: the gold-and-navy Gautrain sliding into the platform under the white canopy, the black station sign */
  function tylstation() {
    let wins = "";
    for (let x = 52; x < 300; x += 34) wins += '<rect x="' + x + '" y="136" width="26" height="22" rx="3" fill="#bfe6ff"/>';
    const train = '<g class="anim-train">' +
      '<rect x="30" y="124" width="290" height="70" rx="10" fill="#f4f4f2" stroke="#7a8590" stroke-width="2"/>' +
      '<path d="M320 124q34 6 40 40v30h-40z" fill="' + NAVY + '"/><path d="M326 134q20 6 26 28h-26z" fill="#bfe6ff"/>' +
      '<rect x="30" y="164" width="330" height="8" fill="' + NAVY + '"/><rect x="30" y="174" width="330" height="4" fill="' + GOLD + '"/>' + wins +
      '<circle cx="350" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<g fill="#1b1b1b"><circle cx="70" cy="196" r="7"/><circle cx="94" cy="196" r="7"/><circle cx="262" cy="196" r="7"/><circle cx="286" cy="196" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tyl1)"/>' + cloud("", 84) + cloud("tylCl2", 100) +
      /* canopy */
      '<path d="M0 74q200 -30 400 0v10q-200 -28 -400 0z" fill="#e8ecef"/>' +
      '<g fill="#9aa3ab"><rect x="20" y="80" width="6" height="118"/><rect x="200" y="62" width="6" height="136"/><rect x="374" y="80" width="6" height="118"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#b9b4aa"/><rect x="0" y="198" width="400" height="7" fill="' + GOLD + '"/>' +
      '<path d="M0 226h400M0 246h400" stroke="#9c978d" stroke-width="2"/>' +
      train +
      '<rect x="80" y="20" width="4" height="34" fill="#9aa3ab"/><rect x="316" y="20" width="4" height="34" fill="#9aa3ab"/>' +
      '<rect x="64" y="12" width="272" height="50" rx="4" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="82" y="40" ' + F + ' font-size="20" fill="#fff">Rhodesfield</text>' +
      '<text x="82" y="54" ' + F + ' font-size="8" fill="#ccc">KEMPTON PARK · AIRPORT LINE</text>' +
      '<rect x="240" y="24" width="84" height="24" rx="12" fill="' + GOLD + '"/><text x="282" y="40" text-anchor="middle" ' + F + ' font-size="11" fill="' + NAVY + '">GAUTRAIN</text>',
      sky("tyl1", "#6fb7ee", "#e8f2fa"));
  }

  /* 2. Edenglen High school hall: the stage, curtains, spotlights sweeping - where the Head of Culture first sang for a crowd */
  function tylstage() {
    let crowd = "";
    for (let i = 0; i < 13; i++) {
      const x = 14 + i * 30, up = i % 3 === 1;
      crowd += '<g class="tylBob' + (i % 2 ? ' tylBb2' : '') + '" fill="#1a1630"><circle cx="' + x + '" cy="214" r="8"/><rect x="' + (x - 10) + '" y="222" width="20" height="38" rx="7"/>' +
        (up ? '<path d="M' + (x - 6) + ' 226l-8 -20M' + (x + 6) + ' 226l8 -20" stroke="#1a1630" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    }
    return svg(
      '<rect width="400" height="260" fill="#241a3a"/>' +
      '<rect x="40" y="40" width="320" height="130" fill="#3a2f5c"/>' +
      '<path d="M40 40h60q-10 60 0 130H40z" fill="#8a1f3a"/><path d="M360 40h-60q10 60 0 130h60z" fill="#8a1f3a"/>' +
      '<path d="M40 40h320v16q-160 14 -320 0z" fill="#a8284a"/>' +
      '<g opacity=".4"><path class="tylSw" d="M120 0l-30 170h60z" fill="#fff6c2"/><path class="tylSw tylSw2" d="M280 0l-30 170h60z" fill="' + BLUE + '"/></g>' +
      '<rect x="30" y="170" width="340" height="14" fill="#6a4a2e"/>' +
      /* mic stand on stage */
      '<path d="M270 168v-46" stroke="#ccc" stroke-width="3"/><circle cx="270" cy="118" r="5" fill="#333"/><path d="M260 170h20" stroke="#ccc" stroke-width="3"/>' +
      /* banner */
      '<rect x="120" y="66" width="160" height="30" rx="3" fill="' + GOLD + '"/>' +
      '<text x="200" y="86" text-anchor="middle" ' + F + ' font-size="13" fill="#241a3a">CULTURE EVENING</text>' +
      crowd + tag("HEAD OF CULTURE", 70, 150, 20, "#fff", -3),
      "");
  }

  /* 3. Orlando Towers, Soweto: the two painted cooling towers, the bridge between them, a bungee jumper dropping */
  function tylorlando() {
    const tower = (x, colors, id) => {
      const outline = 'M' + (x - 44) + ' 230Q' + (x - 22) + ' 140 ' + (x - 34) + ' 62H' + (x + 34) + 'Q' + (x + 22) + ' 140 ' + (x + 44) + ' 230z';
      let s = '<clipPath id="' + id + '"><path d="' + outline + '"/></clipPath><path d="' + outline + '" fill="#d9d2c4"/><g clip-path="url(#' + id + ')">';
      const bands = colors.length;
      for (let i = 0; i < bands; i++) {
        const y0 = 70 + i * (150 / bands);
        s += '<rect x="' + (x - 50) + '" y="' + y0 + '" width="100" height="' + (150 / bands + 1) + '" fill="' + colors[i] + '"/>';
      }
      s += '<g fill="#fff" opacity=".85"><circle cx="' + (x - 12) + '" cy="100" r="6"/><path d="M' + (x + 4) + ' 140l14 -10l4 16z"/><rect x="' + (x - 18) + '" y="170" width="18" height="8" rx="4"/></g></g>';
      return s + '<rect x="' + (x - 36) + '" y="58" width="72" height="8" fill="#a8a092"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#tyl3)"/>' + cloud("", 26) + cloud("tylCl2", 44) +
      '<path d="M0 230q100 -14 200 -6t200 2v34H0z" fill="#8a7a5a"/>' +
      tower(130, ["#e8463a", "#ffc845", "#2a8ad8", "#3aa860", "#ff5fa2"], "tylT1") +
      tower(270, ["#2a8ad8", "#ff5fa2", "#ffc845", "#e8463a", "#3aa860"], "tylT2") +
      /* bridge between the towers */
      '<rect x="166" y="58" width="68" height="6" fill="#555"/><path d="M166 58l34 -14l34 14" stroke="#555" stroke-width="2" fill="none"/>' +
      /* bungee jumper */
      '<rect x="199" y="64" width="2" height="96" fill="#222" class="tylCord"/>' +
      '<g class="tylBungee"><g fill="#1a1a1a"><circle cx="200" cy="80" r="4"/><rect x="197" y="66" width="6" height="12" rx="2"/><path d="M197 68l-6 -4M203 68l6 -4" stroke="#1a1a1a" stroke-width="2"/></g></g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#6a5a3e"/>' +
      tag("SOWETO", 20, 252, 18, GOLD, -3),
      sky("tyl3", "#4aa8ee", "#d8eefa"));
  }

  /* 4. Popiano: the dance floor, log-drum speakers pumping, water splashing up from the floor (Water), lights pulsing */
  function tylpopiano() {
    let eq = "", dancers = "", floor = "";
    for (let i = 0; i < 10; i++) eq += '<rect x="' + (140 + i * 12) + '" y="40" width="8" height="40" fill="' + [BLUE, PINK, GOLD][i % 3] + '" class="tylEq' + (i % 4 ? ' tylE' + (1 + i % 4) : '') + '"/>';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++)
      floor += '<rect x="' + (c * 50) + '" y="' + (190 + r * 24) + '" width="50" height="24" fill="' + [BLUE, PINK, GOLD, "#7a5cff"][(r + c) % 4] + '" opacity=".55" class="tylGlow' + ((r + c) % 2 ? ' tylGl2' : '') + '"/>';
    for (let i = 0; i < 6; i++) {
      const x = 40 + i * 64;
      dancers += '<g class="tylBob' + (i % 2 ? ' tylBb2' : '') + '" fill="#120a24"><circle cx="' + x + '" cy="156" r="8"/><rect x="' + (x - 9) + '" y="164" width="18" height="26" rx="7"/>' +
        '<path d="M' + (x - 5) + ' 168l-10 -14M' + (x + 5) + ' 168l10 -14" stroke="#120a24" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 4) + ' 190v12M' + (x + 4) + ' 190v12" stroke="#120a24" stroke-width="4"/></g>';
    }
    const speaker = x => '<g class="tylPulse"><rect x="' + x + '" y="90" width="50" height="90" rx="4" fill="#1c1c24" stroke="#444"/><circle cx="' + (x + 25) + '" cy="115" r="13" fill="#333" stroke="#666" stroke-width="2"/><circle cx="' + (x + 25) + '" cy="155" r="18" fill="#333" stroke="#666" stroke-width="2"/></g>';
    const splash = (x, cls) => '<g class="tylSplash ' + cls + '" fill="' + BLUE + '"><path d="M' + x + ' 196q-6 -18 0 -30q6 12 0 30z"/><path d="M' + (x - 12) + ' 198q-10 -12 -6 -24q8 10 6 24z"/><path d="M' + (x + 12) + ' 198q10 -12 6 -24q-8 10 -6 24z"/><circle cx="' + (x - 18) + '" cy="170" r="3"/><circle cx="' + (x + 18) + '" cy="168" r="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0e0820"/>' +
      '<g opacity=".35"><path class="tylSw" d="M60 0l-40 190h80z" fill="' + PINK + '"/><path class="tylSw tylSw2" d="M340 0l-40 190h80z" fill="' + BLUE + '"/></g>' +
      eq + speaker(4) + speaker(346) + floor + dancers +
      splash(200, "") + splash(120, "tylSp2") + splash(280, "tylSp2") +
      tag("POPIANO", 120, 116, 38, GOLD, -5),
      "");
  }

  /* 5. Lungile Mtshali Road at Modderfontein Road, Edenvale: green signs, her name on the wall, Hillbrow Tower on the Joburg skyline */
  function tylcorner() {
    const sign = (x, y, w, t, s) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + F + ' font-size="' + (s || 12) + '" fill="#fff">' + t + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tyl5)"/>' +
      '<g fill="#3a3550"><rect x="10" y="112" width="24" height="34"/><rect x="40" y="100" width="18" height="46"/><rect x="62" y="118" width="30" height="28"/>' +
      '<rect x="190" y="104" width="22" height="42"/><rect x="216" y="116" width="34" height="30"/><rect x="254" y="96" width="20" height="50"/></g>' +
      /* Ponte-style round tower, plain (no sign) */
      '<rect x="98" y="88" width="30" height="58" rx="6" fill="#4a4562"/>' +
      hillbrow(150, 146, 0.62, "#4a4562") +
      '<g fill="#ffd98a" class="tylGlow"><rect x="46" y="108" width="3" height="3"/><rect x="104" y="98" width="3" height="3"/><rect x="118" y="112" width="3" height="3"/><rect x="260" y="106" width="3" height="3"/><rect x="226" y="124" width="3" height="3"/></g>' +
      /* jacaranda tree */
      '<path d="M340 146v-40" stroke="#4a3426" stroke-width="5"/><g fill="#8a6ad8"><circle cx="340" cy="96" r="22"/><circle cx="322" cy="106" r="14"/><circle cx="358" cy="106" r="14"/></g>' +
      /* wall */
      '<rect x="0" y="146" width="400" height="76" fill="#e2d6c6"/>' +
      '<path d="M0 162h400M0 178h400M0 194h400M0 210h400" stroke="#cdbfac" stroke-width="1"/>' +
      tag("TYGERS", 30, 174, 18, PINK, -3) +
      tag("TYLA", 60, 214, 46, BLUE, -5) +
      tag("HAAIBO!", 210, 206, 20, GOLD, -2) +
      '<rect x="0" y="222" width="400" height="38" fill="#36363c"/><rect x="0" y="220" width="400" height="4" fill="#b0b0b6"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="352" y="64" width="5" height="158" fill="#4a4a4a"/>' +
      sign(266, 64, 130, "LUNGILE MTSHALI RD", 10) +
      sign(274, 90, 122, "MODDERFONTEIN RD", 10) +
      '<text x="337" y="126" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">EDENVALE</text>',
      sky("tyl5", "#ff9a6a", "#ffd9a8"));
  }

  window.SCENES = { tylstation, tylstage, tylorlando, tylpopiano, tylcorner };
})();
