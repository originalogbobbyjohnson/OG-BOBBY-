/* ABBA game (GENRES: POP; INTERNATIONAL region: UK + EUROPE; Stockholm, Sweden).
   Rooms: Fridhemsplan (T-bana blue line, the bare-rock cave platform), Polar Music Studio in the 1930s Sportpalatset on
   Sankt Eriksgatan (their studio 1978-2004), Brighton Dome (Waterloo won Eurovision there in April 1974), Djurgarden with
   ABBA The Museum and the Grona Lund coaster across the water, and Sankt Eriksgatan at Fleminggatan with the City Hall
   (Stadshuset) tower and its three gold crowns behind. CSS classes prefixed "abb" (the page's anim-train is kept).
   No logos (no SL "T" sign), no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes abbTw{0%,100%{opacity:1}50%{opacity:.25}}.abbTw{animation:abbTw 1.8s ease-in-out infinite}.abbT2{animation-delay:.6s}.abbT3{animation-delay:1.2s}' +
    '@keyframes abbBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.abbBob{animation:abbBob .7s ease-in-out infinite}.abbBb2{animation-delay:.35s}' +
    '@keyframes abbNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.abbNote{animation:abbNote 3s linear infinite}.abbN2{animation-delay:-1s}.abbN3{animation-delay:-2s}' +
    '@keyframes abbBeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.abbBeam{transform-box:fill-box;transform-origin:50% 100%;animation:abbBeam 4s ease-in-out infinite}.abbBm2{animation-delay:-2s}' +
    '@keyframes abbCar{0%{offset-distance:0%}100%{offset-distance:100%}}' +
    '@keyframes abbRide{0%{transform:translate(0,0)}25%{transform:translate(40px,-50px)}50%{transform:translate(90px,10px)}75%{transform:translate(140px,-30px)}100%{transform:translate(0,0)}}.abbRide{animation:abbRide 5s ease-in-out infinite}' +
    '@keyframes abbBoat{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.abbBoat{animation:abbBoat 14s linear infinite}' +
    '@keyframes abbFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.abbFlag{transform-box:fill-box;transform-origin:0 50%;animation:abbFlag 1.3s ease-in-out infinite}' +
    '@keyframes abbBus{0%{transform:translateX(-200px)}100%{transform:translateX(460px)}}.abbBus{animation:abbBus 10s linear infinite}' +
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
  const YEL = "#ffcd00", BLUE = "#4aa8ff", PINK = "#ff6fb5", SWE = "#006aa7", SLB = "#0089ca", SLG = "#179a49";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 73 + 17) % 400, y = y0 + ((i * 37) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" class="abbTw' + (i % 3 === 1 ? ' abbT2' : i % 3 === 2 ? ' abbT3' : '') + '"/>';
    }
    return s;
  };
  const crowd = (y, n, fill, flags) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 6 + i * (400 / n), up = i % 3 === 0;
      s += '<g class="abbBob' + (i % 2 ? ' abbBb2' : '') + '" fill="' + fill + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="5.5"/><rect x="' + (x - 6) + '" y="' + (y - 9) + '" width="12" height="20" rx="5"/>' +
        (up ? '<path d="M' + (x + 4) + ' ' + (y - 6) + 'l6 -14" stroke="' + fill + '" stroke-width="3" stroke-linecap="round"/>' : '') + '</g>';
      if (flags && i % 6 === 2) s += '<path d="M' + x + ' ' + (y - 16) + 'v-30" stroke="#ddd" stroke-width="1.5"/>' + flags[(i / 6 | 0) % flags.length](x, y - 46);
    }
    return s;
  };
  const sweFlag = (x, y) => '<g class="abbFlag"><rect x="' + x + '" y="' + y + '" width="20" height="13" fill="' + SWE + '"/><rect x="' + (x + 6) + '" y="' + y + '" width="3" height="13" fill="' + YEL + '"/><rect x="' + x + '" y="' + (y + 5) + '" width="20" height="3" fill="' + YEL + '"/></g>';
  const ukFlag = (x, y) => '<g class="abbFlag"><rect x="' + x + '" y="' + y + '" width="20" height="13" fill="#012169"/><path d="M' + x + ' ' + y + 'l20 13M' + (x + 20) + ' ' + y + 'l-20 13" stroke="#fff" stroke-width="2.5"/><path d="M' + (x + 10) + ' ' + y + 'v13M' + x + ' ' + (y + 6.5) + 'h20" stroke="#fff" stroke-width="4"/><path d="M' + (x + 10) + ' ' + y + 'v13M' + x + ' ' + (y + 6.5) + 'h20" stroke="#c8102e" stroke-width="2"/></g>';

  /* 1. Fridhemsplan, blue line: the bare-rock cave vault, a dark-blue station sign with the line numbers, a blue train pulling in */
  function abbstation() {
    let rocks = "", wins = "";
    const pts = [[20, 40], [70, 22], [120, 34], [170, 18], [230, 30], [290, 16], [340, 34], [380, 24]];
    pts.forEach(([x, y], i) => { rocks += '<path d="M' + (x - 30) + ' ' + (y + 30) + 'q' + (20 + i * 3) + ' -' + (18 + i % 3 * 6) + ' 56 -4q10 14 -4 26z" fill="' + (i % 2 ? "#7fa6a0" : "#93b8b0") + '" opacity=".7"/>'; });
    for (let x = 48; x < 280; x += 34) wins += '<rect x="' + x + '" y="134" width="22" height="20" rx="3" fill="#cfe6f5"/>';
    const train = '<g class="anim-train">' +
      '<rect x="20" y="124" width="276" height="66" rx="10" fill="#2f63b8" stroke="#1a2a4a" stroke-width="2"/>' +
      '<path d="M296 124q22 2 26 28v38h-26z" fill="#2f63b8" stroke="#1a2a4a" stroke-width="2"/>' +
      '<path d="M300 132q14 2 17 20h-17z" fill="#14233a"/>' + wins +
      '<rect x="20" y="160" width="302" height="6" fill="#f2f2f2"/>' +
      '<g fill="#cfd6de"><rect x="38" y="132" width="8" height="52"/><rect x="152" y="132" width="8" height="52"/><rect x="266" y="132" width="8" height="52"/></g>' +
      '<rect x="308" y="178" width="8" height="5" fill="#ffe7a0"/>' +
      '<g fill="#111"><circle cx="64" cy="194" r="7"/><circle cx="88" cy="194" r="7"/><circle cx="230" cy="194" r="7"/><circle cx="254" cy="194" r="7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#26343a"/>' +
      /* rough bedrock vault painted pale green-blue */
      '<path d="M0 150V54Q40 10 120 14T260 8T400 50v100z" fill="#a9c9c0"/>' + '<g clip-path="url(#abbclip1)">' + rocks + '</g>' +
      '<path d="M0 54Q40 10 120 14T260 8T400 50" stroke="#6f918a" stroke-width="3" fill="none"/>' +
      /* station sign */
      '<rect x="120" y="62" width="160" height="28" rx="3" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="82" text-anchor="middle" ' + F + ' font-size="15" fill="#fff" letter-spacing="1">Fridhemsplan</text>' +
      '<circle cx="96" cy="76" r="10" fill="' + SLB + '" stroke="#fff" stroke-width="1.5"/><text x="96" y="80" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">10</text>' +
      '<circle cx="304" cy="76" r="10" fill="' + SLB + '" stroke="#fff" stroke-width="1.5"/><text x="304" y="80" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">11</text>' +
      '<text x="200" y="108" text-anchor="middle" ' + F + ' font-size="8" fill="#1d3a6e" letter-spacing="2">BLUE LINE · KUNGSTRÄDGÅRDEN / AKALLA / HJULSTA</text>' +
      /* platform */
      '<rect x="0" y="196" width="400" height="64" fill="#4f565c"/><rect x="0" y="196" width="400" height="6" fill="#f2f2f2"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + F + ' font-size="11" fill="#e9e9e9" letter-spacing="4">STOCKHOLM</text>' +
      train,
      '<clipPath id="abbclip1"><path d="M0 150V54Q40 10 120 14T260 8T400 50v100z"/></clipPath>');
  }

  /* 2. Polar Music Studio: the pale 1930s Sportpalatset block on Sankt Eriksgatan at dusk, long ribbon windows, notes floating out */
  function abbpolar() {
    let ribbons = "";
    for (let y = 60; y < 150; y += 22) ribbons += '<rect x="40" y="' + y + '" width="320" height="10" fill="#f6d98a" opacity=".85"/>' + '<path d="M40 ' + (y + 10) + 'h320" stroke="#b9ad92" stroke-width="1"/>';
    const note = (x, y, c, cls) => '<g class="abbNote ' + cls + '" fill="' + c + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4"/><rect x="' + (x + 3.5) + '" y="' + (y - 18) + '" width="2" height="18"/><path d="M' + (x + 5.5) + ' ' + (y - 18) + 'q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abbs2)"/>' + stars(16, 6, 40) +
      '<rect x="30" y="44" width="340" height="140" fill="#e6dcc4"/><rect x="30" y="40" width="340" height="6" fill="#c9bea4"/>' + ribbons +
      /* street-floor studio front */
      '<rect x="30" y="160" width="340" height="24" fill="#3a3a44"/>' +
      '<rect x="120" y="148" width="160" height="18" fill="#1d1d26" stroke="' + YEL + '" stroke-width="1.5"/>' +
      '<text x="200" y="161" text-anchor="middle" ' + F + ' font-size="9" fill="' + YEL + '" letter-spacing="1.5">POLAR MUSIC STUDIO</text>' +
      '<rect x="186" y="166" width="28" height="18" fill="#ffe7a0"/>' +
      note(110, 140, YEL, "") + note(200, 132, PINK, "abbN2") + note(290, 140, BLUE, "abbN3") +
      '<rect x="0" y="184" width="400" height="76" fill="#55585e"/><path d="M0 222h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="10" fill="#e9e9e9" letter-spacing="3">SANKT ERIKSGATAN · KUNGSHOLMEN</text>',
      sky("abbs2", "#22305e", "#c88a6a"));
  }

  /* 3. Brighton Dome, April 1974: the cream Indian-style domes and minarets at night, spotlights, a crowd waving Swedish and UK flags */
  function abbbrighton() {
    const min = x => '<rect x="' + (x - 4) + '" y="70" width="8" height="70" fill="#efe4c8"/><path d="M' + (x - 6) + ' 70q6 -14 12 0z" fill="#efe4c8"/><path d="M' + x + ' 56v-6" stroke="#c9b98e" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#abbs3)"/>' + stars(26, 6, 80) +
      '<path class="abbBeam" d="M120 150l-24 -146h12z" fill="' + YEL + '" opacity=".3"/>' +
      '<path class="abbBeam abbBm2" d="M280 150l24 -146h-12z" fill="' + BLUE + '" opacity=".3"/>' +
      /* the building */
      '<rect x="70" y="110" width="260" height="80" fill="#efe4c8"/>' +
      '<path d="M150 110q0 -50 50 -70q50 20 50 70z" fill="#f4ecd6" stroke="#c9b98e" stroke-width="2"/><path d="M200 40v-14" stroke="#c9b98e" stroke-width="3"/>' +
      '<path d="M90 110q0 -26 22 -36q22 10 22 36z" fill="#f4ecd6" stroke="#c9b98e" stroke-width="2"/>' +
      '<path d="M266 110q0 -26 22 -36q22 10 22 36z" fill="#f4ecd6" stroke="#c9b98e" stroke-width="2"/>' +
      min(76) + min(324) +
      '<g fill="#3a2a4a">' + [96, 126, 156, 186, 216, 246, 276].map(x => '<path d="M' + x + ' 180v-34q9 -14 18 0v34z"/>').join("") + '</g>' +
      '<g fill="#ffe7a0" class="abbTw">' + [96, 156, 216, 276].map(x => '<path d="M' + (x + 4) + ' 176v-24q5 -8 10 0v24z"/>').join("") + '</g>' +
      crowd(236, 26, "#0b0d18", [sweFlag, ukFlag]) +
      '<rect x="0" y="244" width="400" height="16" fill="#0b0d18"/>' +
      '<text x="200" y="256" text-anchor="middle" ' + F + ' font-size="8" fill="#efe4c8" letter-spacing="3">BRIGHTON DOME · WATERLOO WINS</text>',
      sky("abbs3", "#0a0a26", "#3a2a5a"));
  }

  /* 4. Djurgarden: ABBA The Museum's timber-and-glass front on the shore, the Grona Lund coaster across the water, a ferry going by */
  function abbdjurgarden() {
    return svg(
      '<rect width="400" height="260" fill="url(#abbs4)"/>' +
      /* far shore: amusement park and coaster */
      '<path d="M0 104h400v20H0z" fill="#6b8f5a"/>' +
      '<path d="M200 104l20 -70l20 50l20 -40l20 60l20 -30l20 30" stroke="#e8463a" stroke-width="3" fill="none"/>' +
      '<path d="M220 34v70M240 84v20M260 44v60M280 104v0M300 74v30" stroke="#a83a2a" stroke-width="1.5"/>' +
      '<g class="abbRide"><rect x="196" y="96" width="14" height="8" rx="2" fill="' + YEL + '"/></g>' +
      '<rect x="340" y="40" width="4" height="64" fill="#888"/><rect x="332" y="44" width="20" height="8" fill="' + PINK + '"/>' +
      '<g fill="#d9cfb8"><rect x="40" y="86" width="40" height="18"/><path d="M36 86l24 -14l24 14z" fill="#b5482e"/><rect x="100" y="90" width="30" height="14"/></g>' +
      /* water */
      '<rect x="0" y="124" width="400" height="48" fill="#3a78a8"/><path d="M0 138q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb3d8" stroke-width="1.5" fill="none"/>' +
      '<g class="abbBoat"><path d="M0 150h90l-10 12H10z" fill="#f4f4f4" stroke="#333" stroke-width="1.5"/><rect x="20" y="138" width="50" height="12" fill="#f4f4f4" stroke="#333" stroke-width="1.5"/><rect x="52" y="128" width="8" height="10" fill="' + YEL + '"/></g>' +
      /* near shore: the museum building, warm timber slats and glass */
      '<rect x="0" y="172" width="400" height="88" fill="#8a8f96"/>' +
      '<rect x="60" y="150" width="280" height="80" fill="#a3683a"/>' +
      '<g stroke="#7a4a26" stroke-width="2">' + Array.from({ length: 27 }, (_, i) => '<path d="M' + (66 + i * 10) + ' 152v76"/>').join("") + '</g>' +
      '<rect x="150" y="176" width="100" height="54" fill="#b8dbe8" stroke="#333" stroke-width="2"/>' +
      '<path d="M200 176v54" stroke="#333" stroke-width="2"/>' +
      '<rect x="120" y="156" width="160" height="16" fill="#1d1d26"/>' +
      '<text x="200" y="168" text-anchor="middle" ' + F + ' font-size="10" fill="' + YEL + '" letter-spacing="3">ABBA THE MUSEUM</text>' +
      '<rect x="0" y="230" width="400" height="30" fill="#6e737a"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + F + ' font-size="10" fill="#f4f4f4" letter-spacing="3">DJURGÅRDEN</text>',
      sky("abbs4", "#7cc0ec", "#e8f0f4"));
  }

  /* 5. Sankt Eriksgatan at Fleminggatan: Stockholm street signs, the red-brick City Hall tower with its green top and three gold crowns, the tags */
  function abbcorner() {
    const bus = '<g class="abbBus"><rect x="0" y="182" width="100" height="40" rx="5" fill="#d6241f"/><rect x="8" y="190" width="84" height="12" fill="#25323e"/><circle cx="22" cy="222" r="6" fill="#111"/><circle cx="80" cy="222" r="6" fill="#111"/></g>';
    const crown = (x, y) => '<path d="M' + (x - 6) + ' ' + y + 'l-1 -8l3.5 4l3.5 -6l3.5 6l3.5 -4l-1 8z" fill="' + YEL + '" stroke="#8a6a00" stroke-width=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#abbs5)"/>' +
      /* City Hall tower */
      '<g transform="translate(0,14)">' +
      '<rect x="136" y="44" width="44" height="110" fill="#a9452e"/>' +
      '<g fill="#7a2e1e"><rect x="146" y="60" width="6" height="16"/><rect x="164" y="60" width="6" height="16"/><rect x="146" y="90" width="6" height="16"/><rect x="164" y="90" width="6" height="16"/></g>' +
      '<rect x="132" y="38" width="52" height="8" fill="#e6dcc4"/>' +
      '<path d="M140 38l18 -18l18 18z" fill="#5fae8f"/><rect x="155" y="8" width="6" height="14" fill="#5fae8f"/>' +
      crown(150, 8) + crown(158, 4) + crown(166, 8) + '</g>' +
      '<rect x="40" y="100" width="90" height="54" fill="#d7c3a0"/><rect x="190" y="96" width="70" height="58" fill="#c9b08a"/>' +
      '<g fill="#3a4a5a"><rect x="52" y="110" width="12" height="14"/><rect x="76" y="110" width="12" height="14"/><rect x="100" y="110" width="12" height="14"/><rect x="200" y="108" width="12" height="14"/><rect x="226" y="108" width="12" height="14"/></g>' +
      /* wall with the tags */
      '<rect x="0" y="146" width="400" height="76" fill="#5c6680"/>' +
      '<path d="M0 160h400M0 174h400M0 188h400M0 202h400" stroke="#4c5570" stroke-width="1"/>' +
      tag("POLAR", 20, 172, 18, BLUE, -3) +
      tag("ABBA", 110, 212, 50, YEL, -4) +
      tag("WATERLOO", 250, 176, 16, PINK, -6) +
      bus +
      '<rect x="0" y="222" width="400" height="38" fill="#2f3238"/><rect x="0" y="220" width="400" height="4" fill="#a6a9b0"/>' +
      '<path d="M0 244h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* Stockholm street name signs: dark blue, white letters */
      '<rect x="370" y="40" width="5" height="182" fill="#2a2a2a"/>' +
      '<rect x="258" y="34" width="138" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="327" y="52" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">S:t Eriksgatan</text>' +
      '<rect x="266" y="64" width="130" height="26" rx="2" fill="#1d3a6e" stroke="#fff" stroke-width="2"/>' +
      '<text x="331" y="82" text-anchor="middle" ' + F + ' font-size="12" fill="#fff">Fleminggatan</text>',
      sky("abbs5", "#8fc2ea", "#eae6dc"));
  }

  window.SCENES = { abbstation, abbpolar, abbbrighton, abbdjurgarden, abbcorner };
})();
