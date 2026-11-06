/* Foxy Brown game (NYC map, Brooklyn: Park Slope). The F/G up on the Culver Viaduct at 4 Av-9 St (the R below), the Montauk Club
   on 8th Av & Lincoln Pl (red-brick Venetian Gothic palazzo), Litchfield Villa in Prospect Park, the Park Slope talent show where the
   Trackmasters heard her at 16, and 5th Av & 3rd St with the Old Stone House in Washington Park behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.5s}.bl3{animation-delay:1s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes fly{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.bird{animation:fly 9s linear infinite}.bird2{animation-delay:-4.5s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(50px,170px) rotate(320deg)}}.lf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes sway{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.sway{animation:sway 1s ease-in-out infinite}.sway2{animation-delay:-.5s}' +
    '@keyframes drift{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cloud{animation:drift 26s linear infinite}.cloud2{animation-delay:-13s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const person = (x, y, c) => '<circle cx="' + x + '" cy="' + (y - 30) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 24) + '" width="12" height="16" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 9) + 'v9M' + (x + 3) + ' ' + (y - 9) + 'v9" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>';
  const BDFM = "#ff6319", G = "#6cbe45", NQRW = "#fccc0a", FOX = "#ff8a3d", GOLD = "#f7c948", VIO = "#b04fd1", SIGN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';

  /* 1. 4 Av-9 St, up on the Culver Viaduct: the enclosed elevated platform with its tall arched windows looking out over Park Slope
        rooftops and the Gowanus, the black sign with the orange F and green G (R on the lower level), the F sliding in */
  function station() {
    let arches = "";
    for (let x = 16; x < 400; x += 64) arches += '<path d="M' + x + ' 110V52q24-30 48 0V110z" fill="url(#st1)" stroke="#6a4a3a" stroke-width="4"/><path d="M' + (x + 24) + ' 32v78M' + x + ' 76h48" stroke="#6a4a3a" stroke-width="2"/>';
    let roofs = "";
    for (let x = 16; x < 400; x += 64) roofs += '<rect x="' + (x + 4) + '" y="90" width="18" height="20" fill="#7a3e2c"/><rect x="' + (x + 26) + '" y="84" width="16" height="26" fill="#8b5a3c"/>';
    let win = "";
    for (let x = 100; x < 390; x += 36) win += '<rect x="' + x + '" y="136" width="24" height="20" rx="2" fill="#bcd3ea" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#c48a5e"/>' +
      (() => { let b = ""; for (let y = 0; y < 180; y += 7) b += '<path d="M0 ' + y + 'h400" stroke="#a8714a" stroke-width="1" opacity=".6"/>'; return b; })() +
      arches + roofs +
      '<g class="cloud"><ellipse cx="60" cy="56" rx="16" ry="5" fill="#fff" opacity=".8"/></g>' +
      /* black hanging sign */
      '<rect x="104" y="6" width="192" height="24" rx="2" fill="#111"/><rect x="104" y="6" width="192" height="2.5" fill="#fff"/>' +
      '<text x="116" y="23" ' + font + ' font-size="13" fill="#fff">4 Av-9 St</text>' + bullet(232, 18, "F", BDFM, false, 8) + bullet(252, 18, "G", G, false, 8) + bullet(272, 18, "R", NQRW, true, 8) +
      /* the train, coming in from the left */
      '<g class="anim-train">' +
        '<rect x="84" y="124" width="316" height="54" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="84" y="160" width="316" height="4" fill="' + BDFM + '"/>' +
        '<rect x="88" y="132" width="14" height="22" rx="2" fill="#bcd3ea"/>' + bullet(96, 170, "F", BDFM, false, 8) +
        '<circle cx="392" cy="170" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="178" width="400" height="10" fill="#eab308"/><rect x="0" y="188" width="400" height="72" fill="#8d8f8c"/>' +
      '<path d="M0 216h400M0 242h400" stroke="#7a7c79" stroke-width="2"/>' +
      [40, 360].map(x => '<rect x="' + (x - 4) + '" y="110" width="8" height="78" fill="#2f3a34"/>').join("") +
      person(70, 250, "#2a1f2a") + person(210, 254, "#3b2a24") + person(236, 252, "#4a2a3a") +
      tag("FOX BOOGIE", 252, 240, 17, FOX, -4),
      '<linearGradient id="st1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fc3ee"/><stop offset="1" stop-color="#f5d7b0"/></linearGradient>');
  }

  /* 2. The Montauk Club at 8th Av & Lincoln Pl (1891): the red-brick and terracotta Venetian Gothic palazzo, pointed arched windows,
        little balconies, the frieze band, the corner bay, the clubhouse lamps glowing, pigeons crossing the sky */
  function montauk() {
    let w1 = "", w2 = "";
    for (let c = 0; c < 6; c++) { const x = 92 + c * 38;
      w1 += '<path d="M' + x + ' 150v-26q10-12 20 0v26z" fill="#2d3550" stroke="#e7c9a0" stroke-width="2.5"/>';
      w2 += '<path d="M' + x + ' 104v-24q10-12 20 0v24z" fill="#2d3550" stroke="#e7c9a0" stroke-width="2.5"/><path d="M' + x + ' 92h20" stroke="#e7c9a0" stroke-width="1"/>' +
        '<rect x="' + (x - 3) + '" y="104" width="26" height="4" fill="#d9a77a"/><path d="M' + (x - 3) + ' 108v6M' + (x + 23) + ' 108v6M' + (x + 4) + ' 108v6M' + (x + 10) + ' 108v6M' + (x + 16) + ' 108v6" stroke="#d9a77a" stroke-width="1.5"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#m2)"/>' +
      '<g class="bird"><path d="M0 34q5-5 10 0q5-5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g><g class="bird bird2"><path d="M0 52q4-4 8 0q4-4 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      /* neighbouring brownstones */
      '<rect x="0" y="96" width="78" height="126" fill="#6e4a36"/><rect x="0" y="92" width="80" height="6" fill="#4a3022"/>' +
      [10, 44].map(x => '<rect x="' + x + '" y="110" width="20" height="28" fill="#2d3550"/><rect x="' + x + '" y="156" width="20" height="28" fill="#ffe7a8" opacity=".75"/>').join("") +
      /* palazzo */
      '<rect x="78" y="58" width="252" height="164" fill="#a5432c"/>' +
      (() => { let b = ""; for (let y = 62; y < 222; y += 6) b += '<path d="M78 ' + y + 'h252" stroke="#8a3420" stroke-width=".8" opacity=".6"/>'; return b; })() +
      '<rect x="74" y="50" width="260" height="10" fill="#d9a77a"/><path d="M74 50h260" stroke="#8a3420" stroke-width="2"/>' +
      (() => { let c = ""; for (let x = 78; x < 330; x += 10) c += '<rect x="' + x + '" y="42" width="6" height="8" fill="#d9a77a"/>'; return c; })() +
      '<rect x="78" y="64" width="252" height="10" fill="#c98a5a"/>' +
      (() => { let f = ""; for (let x = 84; x < 326; x += 14) f += '<circle cx="' + x + '" cy="69" r="3" fill="#a5432c"/>'; return f; })() +
      w2 + '<rect x="78" y="118" width="252" height="3" fill="#d9a77a"/>' + w1 +
      /* corner bay tower */
      '<rect x="330" y="40" width="44" height="182" fill="#9a3c26"/><path d="M326 40l26-22 26 22z" fill="#5a3a30"/>' +
      [70, 116, 160].map(y => '<path d="M342 ' + (y + 26) + 'v-18q10-12 20 0v18z" fill="#2d3550" stroke="#e7c9a0" stroke-width="2"/>').join("") +
      /* entrance with lamps */
      '<path d="M182 222v-40q22-22 44 0v40z" fill="#e7c9a0"/><path d="M190 222v-34q14-14 28 0v34z" fill="#3a1d10"/>' +
      '<circle class="flk" cx="172" cy="186" r="5" fill="#ffd98a"/><circle class="flk" cx="236" cy="186" r="5" fill="#ffd98a"/>' +
      '<text x="204" y="176" text-anchor="middle" ' + font + ' font-size="7" fill="#5a2a1a" letter-spacing="1.5">MONTAUK CLUB</text>' +
      /* sidewalk + street */
      '<rect x="0" y="222" width="400" height="8" fill="#b9b3a6"/><rect x="0" y="230" width="400" height="30" fill="#55575c"/>' +
      '<g class="car"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + VIO + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>',
      sky("m2", "#7fb4e6", "#e8f2fb"));
  }

  /* 3. Litchfield Villa in Prospect Park (1857): the pale stucco Italianate villa on the hill off Prospect Park West, the tall square tower
        and the round tower, the arched loggia, the big trees around it, leaves drifting down, clouds rolling over */
  function villa() {
    return svg(
      '<rect width="400" height="260" fill="url(#v3)"/>' +
      '<g class="cloud"><ellipse cx="40" cy="40" rx="22" ry="7" fill="#fff" opacity=".85"/></g><g class="cloud cloud2"><ellipse cx="80" cy="24" rx="16" ry="5" fill="#fff" opacity=".8"/></g>' +
      /* trees behind */
      '<circle cx="40" cy="120" r="44" fill="#3f6b35"/><circle cx="360" cy="116" r="46" fill="#3f6b35"/><circle cx="96" cy="136" r="30" fill="#4c7d40"/><circle cx="310" cy="140" r="28" fill="#4c7d40"/>' +
      /* main block */
      '<rect x="110" y="110" width="190" height="96" fill="#ece0c4" stroke="#c8b78f" stroke-width="2"/><path d="M104 112l101-28 101 28z" fill="#9a6a4a"/>' +
      /* square tower */
      '<rect x="168" y="42" width="44" height="164" fill="#ece0c4" stroke="#c8b78f" stroke-width="2"/><path d="M162 44l28-20 28 20z" fill="#9a6a4a"/>' +
      '<rect x="176" y="56" width="10" height="20" fill="#3a4a5a"/><rect x="194" y="56" width="10" height="20" fill="#3a4a5a"/><rect x="164" y="80" width="52" height="4" fill="#c8b78f"/>' +
      /* round tower */
      '<rect x="252" y="70" width="34" height="136" fill="#e5d7b8" stroke="#c8b78f" stroke-width="2"/><path d="M248 72q21-24 42 0z" fill="#9a6a4a"/>' +
      '<rect x="262" y="88" width="14" height="22" rx="7" fill="#3a4a5a"/>' +
      /* arched loggia */
      [118, 140, 216, 238].map(x => '<path d="M' + x + ' 206v-30q9-12 18 0v30z" fill="#4a3a2a"/>').join("") +
      [124, 230].map(x => '<path d="M' + x + ' 150v-16q8-10 16 0v16z" fill="#3a4a5a"/>').join("") +
      '<rect x="110" y="160" width="190" height="3" fill="#c8b78f"/>' +
      /* lawn + path */
      '<path d="M0 206h400v54H0z" fill="#5f8f45"/><path d="M180 260q10-30 20-54h12q-6 26 10 54z" fill="#cbbf9e"/>' +
      '<g class="lf"><ellipse cx="80" cy="70" rx="4" ry="2.5" fill="#d9822b"/></g><g class="lf lf2"><ellipse cx="330" cy="60" rx="4" ry="2.5" fill="#c0392b"/></g><g class="lf lf3"><ellipse cx="240" cy="40" rx="4" ry="2.5" fill="#e3a72f"/></g>' +
      person(330, 244, "#2a1f2a") + person(60, 240, "#3a2a50"),
      sky("v3", "#8fc3ee", "#eef6fb"));
  }

  /* 4. The Park Slope talent show (she was 16): the little stage with velvet curtains, the mic stand in the spotlight, beams sweeping,
        a TALENT SHOW banner, the crowd's heads bobbing, and up front the judges' table where the Trackmasters sat */
  function talent() {
    let heads = "";
    for (let i = 0; i < 16; i++) heads += '<circle class="sway' + (i % 2 ? " sway2" : "") + '" cx="' + (12 + i * 25) + '" cy="' + (226 + (i % 3) * 4) + '" r="11" fill="#1a1016"/>';
    return svg(
      '<rect width="400" height="260" fill="#160b10"/>' +
      /* curtains */
      '<path d="M0 0h400v24H0z" fill="#7a1028"/>' + (() => { let s = ""; for (let x = 0; x < 400; x += 20) s += '<path d="M' + x + ' 24q10 10 20 0" fill="#7a1028"/>'; return s; })() +
      '<path d="M0 24h70q-10 80 0 150H0z" fill="#8f1530"/><path d="M400 24h-70q10 80 0 150h70z" fill="#8f1530"/>' +
      (() => { let s = ""; for (let x = 8; x < 70; x += 14) s += '<path d="M' + x + ' 24v150" stroke="#5e0c1f" stroke-width="2"/>'; for (let x = 336; x < 400; x += 14) s += '<path d="M' + x + ' 24v150" stroke="#5e0c1f" stroke-width="2"/>'; return s; })() +
      /* banner */
      '<rect x="120" y="34" width="160" height="22" rx="2" fill="' + GOLD + '"/><text x="200" y="50" text-anchor="middle" ' + font + ' font-size="12" fill="#3a1a10" letter-spacing="3">TALENT SHOW</text>' +
      /* beams */
      '<path class="beam" d="M110 24l-40 160h80z" fill="#fff6c2" opacity=".14"/><path class="beam beam2" d="M290 24l-40 160h80z" fill="' + FOX + '" opacity=".14"/>' +
      /* spotlight pool + mic */
      '<ellipse cx="200" cy="176" rx="60" ry="10" fill="#fff6c2" opacity=".35" class="bl"/>' +
      '<path d="M200 98v76" stroke="#bbb" stroke-width="3"/><path d="M188 176h24" stroke="#bbb" stroke-width="4"/><rect x="194" y="86" width="12" height="18" rx="6" fill="#333" stroke="#ddd" stroke-width="1.5"/>' +
      /* stage */
      '<rect x="0" y="174" width="400" height="16" fill="#5a3a24"/><rect x="0" y="174" width="400" height="3" fill="#8a6040"/>' +
      [30, 370].map(x => '<rect x="' + (x - 14) + '" y="148" width="28" height="26" rx="3" fill="#222"/><circle cx="' + x + '" cy="161" r="8" fill="#444"/>').join("") +
      /* judges table */
      '<rect x="120" y="196" width="160" height="16" fill="#2a2a30"/><rect x="120" y="196" width="160" height="3" fill="#444"/>' +
      '<rect x="140" y="188" width="10" height="8" fill="#ddd"/><rect x="250" y="188" width="10" height="8" fill="#ddd"/>' +
      '<text x="200" y="208" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '" letter-spacing="1.5">TRACKMASTERS</text>' +
      heads +
      tag("PARK SLOPE", 236, 150, 18, FOX, -4)
    );
  }

  /* 5. 5th Av & 3rd St, Park Slope: green street signs, brownstone stoops, the wall tagged FOXY BROWN, and in Washington Park behind it
        the Old Stone House (1699, rebuilt): fieldstone walls, the stepped brick gable, small windows, the lamp lit at dusk */
  function corner() {
    let stones = "";
    for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) stones += '<rect x="' + (184 + c * 16 + (r % 2) * 8) + '" y="' + (120 + r * 10) + '" width="14" height="8" rx="3" fill="' + ["#8a8478", "#9c9486", "#7c766c"][(r + c) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c5)"/>' + stars(14) +
      /* Old Stone House */
      '<path d="M180 120V82h18v-10h18v-10h18v-10h40v10h18v10h18v10h18v38z" fill="#a0522d"/>' +
      '<rect x="180" y="118" width="148" height="82" fill="#8a8478"/>' + stones +
      '<rect x="246" y="64" width="16" height="14" fill="#ffd98a" class="flk"/>' +
      '<rect x="200" y="140" width="18" height="20" fill="#2a2f3a" stroke="#e8e0d0" stroke-width="2"/><rect x="290" y="140" width="18" height="20" fill="#ffd98a" stroke="#e8e0d0" stroke-width="2"/>' +
      '<rect x="244" y="160" width="20" height="40" fill="#3a2a1e" stroke="#e8e0d0" stroke-width="2"/>' +
      /* park trees + fence */
      '<circle cx="356" cy="120" r="30" fill="#2e5a3a" opacity=".9"/><rect x="354" y="140" width="5" height="60" fill="#3a2a1e"/>' +
      '<path d="M170 200h230" stroke="#111" stroke-width="2"/>' + (() => { let f = ""; for (let x = 172; x < 400; x += 8) f += '<path d="M' + x + ' 200v-14" stroke="#111" stroke-width="1.5"/>'; return f; })() +
      /* tag wall */
      '<rect x="0" y="136" width="170" height="92" fill="#4d4b52"/>' +
      (() => { let b = ""; for (let y = 142; y < 228; y += 8) b += '<path d="M0 ' + y + 'h170" stroke="#3f3d44" stroke-width="1"/>'; return b; })() +
      tag("FOXY", 10, 186, 40, FOX, -5) + tag("BROWN", 30, 216, 28, GOLD, -4) +
      /* sidewalk + street */
      '<rect x="170" y="200" width="230" height="28" fill="#6a6c70"/><rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + VIO + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="380" y="50" width="5" height="178" fill="#3d4b3f"/><circle class="flk" cx="382" cy="50" r="4" fill="#fff6c2"/>' +
      blade(306, 64, 92, "5 Av") + blade(306, 88, 92, "3 St"),
      sky("c5", "#0a0c1a", "#3a2c54"));
  }

  window.SCENES = { station: station, montauk: montauk, villa: villa, talent: talent, corner: corner };
})();
