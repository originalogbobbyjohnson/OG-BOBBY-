/* The Cranberries game (GENRES: ROCK; INTERNATIONAL region UK + EUROPE; Limerick, Ireland - the band formed there in 1989).
   Rooms: Limerick Colbert station (Irish Rail InterCity pulling in under the cut-stone station front), King John's Castle on
   King's Island over the Shannon with Thomond Bridge, the Milk Market's white canopy and stalls, the People's Park with the
   tall Spring Rice column, and Nicholas St at Castle St on King's Island with the castle drum towers behind.
   CSS classes prefixed "crb" (the page's anim-train is kept). No logos, no faces, no digit 9. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes crbFlow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.crbFlow{animation:crbFlow 3.6s linear infinite}' +
    '@keyframes crbGull{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-20px)}}.crbGull{animation:crbGull 12s linear infinite}.crbG2{animation-delay:-6s}' +
    '@keyframes crbFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.crbFlag{transform-box:fill-box;transform-origin:50% 0%;animation:crbFlag 1.6s ease-in-out infinite}.crbF2{animation-delay:-.8s}' +
    '@keyframes crbCloud{0%{transform:translateX(-120px)}100%{transform:translateX(440px)}}.crbCloud{animation:crbCloud 32s linear infinite}.crbC2{animation-delay:-16s}' +
    '@keyframes crbLeaf{0%{transform:translate(0,-10px) rotate(0)}100%{transform:translate(-40px,250px) rotate(300deg)}}.crbLeaf{animation:crbLeaf 7s linear infinite}.crbL2{animation-delay:-2.4s}.crbL3{animation-delay:-4.8s}' +
    '@keyframes crbGlow{0%,100%{opacity:.5}50%{opacity:1}}.crbGlow{animation:crbGlow 2.4s ease-in-out infinite}' +
    '@keyframes crbSpray{0%{opacity:.9;transform:translate(0,0)}100%{opacity:0;transform:translate(8px,-18px)}}.crbSpray{animation:crbSpray 1.3s ease-out infinite}.crbSp2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || '') + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = '#c8102e', GOLD = '#e9c46a', TEAL = '#2a9d8f', LIME = '#7ac143', STONE = '#9a958c', STONE2 = '#b8b2a6';
  const cloud = (x, y, cls) => '<g class="crbCloud ' + (cls || '') + '"><ellipse cx="' + x + '" cy="' + y + '" rx="44" ry="11" fill="#fff" opacity=".75"/><ellipse cx="' + (x + 24) + '" cy="' + (y - 7) + '" rx="24" ry="9" fill="#fff" opacity=".75"/></g>';
  const gull = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/>';
  const coursed = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  /* King John's Castle: grey limestone curtain wall and round drum towers with battlements */
  const castle = (dx, dy, sc) => {
    const merlons = (x, y, w) => { let s = ''; for (let i = 0; i < w; i += 8) s += '<rect x="' + (x + i) + '" y="' + (y - 6) + '" width="5" height="6" fill="' + STONE + '"/>'; return s; };
    return '<g transform="translate(' + dx + ' ' + dy + ') scale(' + sc + ')">' +
      coursed(20, 40, 200, 80, STONE, '#6e6a62') + merlons(20, 40, 200) +
      '<rect x="0" y="10" width="44" height="110" rx="20" fill="#a8a398"/>' + merlons(2, 10, 40) +
      '<rect x="196" y="16" width="44" height="104" rx="20" fill="#a8a398"/>' + merlons(198, 16, 40) +
      '<rect x="96" y="20" width="40" height="100" fill="#a39e93"/>' + merlons(96, 20, 40) +
      '<g fill="#3a3a3a"><rect x="18" y="40" width="5" height="14"/><rect x="18" y="74" width="5" height="14"/><rect x="214" y="44" width="5" height="14"/><rect x="214" y="78" width="5" height="14"/><rect x="113" y="44" width="6" height="16"/></g>' +
      '<path d="M104 120v-26q12 -14 24 0v26z" fill="#2a2420"/></g>';
  };

  /* 1. Limerick Colbert: the InterCity train pulling in, the cut-stone station front, the station sign */
  function crbstation() {
    const train = '<g class="anim-train"><g transform="translate(36 130)">' +
      '<rect x="0" y="0" width="310" height="56" rx="8" fill="#d9dcd8"/><rect x="0" y="34" width="310" height="10" fill="#1b6e3a"/><rect x="0" y="44" width="310" height="4" fill="' + LIME + '"/>' +
      [14, 70, 126, 182, 238].map(x => '<rect x="' + x + '" y="10" width="44" height="18" rx="2" fill="#2a3640"/>').join('') +
      '<path d="M296 0h8q6 0 6 8v40h-14z" fill="#f2d24a"/><rect x="296" y="8" width="12" height="20" fill="#2a3640"/><rect x="300" y="38" width="8" height="5" fill="#fff6c0"/>' +
      '<rect x="0" y="56" width="310" height="6" fill="#222"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#crbS1)"/>' + cloud(70, 30) + cloud(260, 22, 'crbC2') +
      /* station front: limestone with round-arched windows and a clock */
      coursed(40, 50, 320, 96, '#c9c1ad', '#8f8774') +
      '<path d="M30 50h340l-10 -14H40z" fill="#5a5048"/>' +
      [60, 110, 160, 230, 280, 330].map(x => '<path d="M' + x + ' 120v-38q10 -14 20 0v38z" fill="#2c3a44"/>').join('') +
      '<circle cx="200" cy="70" r="13" fill="#f4f1e8" stroke="#3a3a3a" stroke-width="2"/><path d="M200 70v-8M200 70l6 3" stroke="#222" stroke-width="2"/>' +
      '<rect x="0" y="176" width="400" height="10" fill="#7a7068"/><rect x="0" y="186" width="400" height="16" fill="#4a4440"/><path d="M0 190h400M0 196h400" stroke="#aaa" stroke-width="1.5"/>' +
      train +
      '<rect x="0" y="202" width="400" height="58" fill="' + STONE2 + '"/><rect x="0" y="202" width="400" height="5" fill="#f2d24a"/>' +
      '<rect x="128" y="214" width="4" height="40" fill="#555"/><rect x="268" y="214" width="4" height="40" fill="#555"/>' +
      '<rect x="96" y="208" width="208" height="40" rx="3" fill="#1b4d2e" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="227" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Limerick Colbert</text>' +
      '<text x="200" y="242" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-style="italic" font-size="11" fill="#d8e8dc">Luimneach</text>' +
      '<rect x="14" y="216" width="70" height="20" rx="3" fill="' + LIME + '"/><text x="49" y="230" text-anchor="middle" ' + F + ' font-size="10" fill="#0f2a14">INTERCITY</text>',
      sky('crbS1', '#7f9cb8', '#dfe6ec'));
  }

  /* 2. King John's Castle on King's Island over the Shannon, Thomond Bridge's stone arches, gulls riding the wind */
  function crbcastle() {
    let ripples = '';
    for (let i = 0; i < 12; i++) ripples += '<path d="M' + (i * 40) + ' 0q10 -4 20 0t20 0" stroke="#d6e6ee" stroke-width="1.6" fill="none"/>';
    let arches = '';
    for (let i = 0; i < 6; i++) arches += '<path d="M' + (230 + i * 30) + ' 188v-16q12 -18 24 0v16z" fill="#4a6f86"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crbS2)"/>' + cloud(60, 34) + cloud(300, 28, 'crbC2') +
      '<rect x="0" y="140" width="400" height="10" fill="#6a8a5a"/>' +
      castle(10, 26, .92) +
      '<rect x="0" y="146" width="400" height="114" fill="#4a6f86"/>' +
      '<g class="crbFlow"><g transform="translate(0 200)">' + ripples + '</g><g transform="translate(20 224)">' + ripples + '</g><g transform="translate(0 248)">' + ripples + '</g></g>' +
      /* Thomond Bridge */
      coursed(220, 158, 180, 30, '#a39e93', '#6e6a62') + arches + '<rect x="220" y="152" width="180" height="6" fill="#8a857a"/>' +
      [240, 290, 340, 390].map(x => '<rect x="' + (x - 1.5) + '" y="134" width="3" height="18" fill="#2a3a4a"/><circle cx="' + x + '" cy="132" r="4" fill="#f4e6a0" class="crbGlow"/>').join('') +
      '<g class="crbGull">' + gull(40, 70) + gull(74, 58) + '</g><g class="crbGull crbG2">' + gull(30, 90) + '</g>' +
      '<text x="12" y="252" ' + F + ' font-size="12" fill="#fff" opacity=".85">KING JOHN\'S CASTLE</text>',
      sky('crbS2', '#8fb0c8', '#e6ecef'));
  }

  /* 3. The Milk Market: the white canopy over the stalls, bunting flapping, the old stone wall */
  function crbmarket() {
    let stalls = '';
    const cols = [RED, '#f2f0e8', TEAL, '#f2f0e8', GOLD];
    for (let i = 0; i < 5; i++) {
      const x = 30 + i * 70;
      stalls += '<rect x="' + x + '" y="168" width="60" height="40" fill="#6a4a30"/>' +
        '<path d="M' + (x - 4) + ' 168h68l-6 -14h-56z" fill="' + cols[i] + '" stroke="#5a4a3a" stroke-width="1"/>' +
        '<g fill="' + ['#c8102e', '#f2a541', '#6aa84f', '#8e3b8e', '#e9c46a'][i] + '">' + [8, 20, 32, 44].map(o => '<circle cx="' + (x + o + 4) + '" cy="164" r="4"/>').join('') + '</g>';
    }
    let bunting = '';
    for (let i = 0; i < 16; i++) bunting += '<path class="crbFlag' + (i % 2 ? ' crbF2' : '') + '" d="M' + (24 + i * 23) + ' 114l10 0l-5 12z" fill="' + [RED, GOLD, TEAL, '#fff'][i % 4] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crbS3)"/>' +
      coursed(0, 60, 400, 150, '#b9a98a', '#80725a') +
      /* the tented white canopy */
      '<path d="M0 100l50 -48l50 48l50 -48l50 48l50 -48l50 48l50 -48l50 48v12H0z" fill="#f4f4f0" stroke="#c9c9c2" stroke-width="2"/>' +
      [0, 100, 200, 300, 400].map(x => '<rect x="' + (x - 3) + '" y="100" width="6" height="110" fill="#5a5f66"/>').join('') +
      '<path d="M20 114q190 18 360 0" stroke="#444" stroke-width="1.2" fill="none"/>' + bunting +
      stalls +
      '<rect x="0" y="208" width="400" height="52" fill="#8a8478"/><path d="M0 216h400M0 232h400M0 248h400" stroke="#6e6860" stroke-width="1"/>' +
      '<text x="388" y="252" text-anchor="end" ' + F + ' font-size="12" fill="#fff" opacity=".9">THE MILK MARKET</text>',
      sky('crbS3', '#9db7cc', '#e6ecef'));
  }

  /* 4. The People's Park: the tall Spring Rice column over the lawns and trees, autumn leaves blowing */
  function crbpark() {
    const tree = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="40" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 4) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 4) + '" r="' + (r * .7) + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crbS4)"/>' + cloud(90, 36) + cloud(300, 30, 'crbC2') +
      '<rect x="0" y="176" width="400" height="84" fill="#5f8f4a"/><path d="M150 260q50 -60 100 -84h-4q-60 20 -110 84z" fill="#c9bfa8"/>' +
      tree(40, 150, 30, '#b5652a') + tree(100, 160, 24, '#8a7a2a') + tree(320, 152, 30, '#c27a2c') + tree(372, 164, 22, '#6f8a3a') +
      /* the column: square base, fluted shaft, capital and urn on top */
      '<rect x="176" y="158" width="48" height="22" fill="' + STONE2 + '" stroke="#6e6a62" stroke-width="1.5"/><rect x="182" y="148" width="36" height="12" fill="#a8a296"/>' +
      '<rect x="190" y="40" width="20" height="110" fill="#c9c3b6"/><g stroke="#8f897c" stroke-width="1"><path d="M195 42v106M200 42v106M205 42v106"/></g>' +
      '<rect x="184" y="32" width="32" height="10" fill="#a8a296"/><path d="M192 32q8 -18 16 0z" fill="#8f897c"/><rect x="198" y="10" width="4" height="10" fill="#8f897c"/>' +
      '<g class="crbLeaf"><path d="M300 0q6 -4 10 0q-4 6 -10 0z" fill="#c27a2c"/></g><g class="crbLeaf crbL2"><path d="M220 0q6 -4 10 0q-4 6 -10 0z" fill="#b5652a"/></g><g class="crbLeaf crbL3"><path d="M360 0q6 -4 10 0q-4 6 -10 0z" fill="#d9a441"/></g>' +
      '<g fill="#2a2a2a"><rect x="250" y="208" width="44" height="4"/><rect x="252" y="212" width="3" height="10"/><rect x="289" y="212" width="3" height="10"/><rect x="250" y="198" width="44" height="3"/></g>' +
      '<text x="12" y="252" ' + F + ' font-size="12" fill="#fff" opacity=".9">PEOPLE\'S PARK</text>',
      sky('crbS4', '#7fa2c2', '#e3e9ee'));
  }

  /* 5. Nicholas St at Castle St on King's Island: Irish wall-plate street signs, the band tagged on the wall, the castle towers behind */
  function crbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#crbS5)"/>' + cloud(300, 30) +
      castle(150, 30, .95) +
      coursed(0, 112, 250, 118, '#a39e93', '#6e6a62') +
      tag('CRANBERRIES', 10, 184, 30, RED, -5) + tag('SAW US', 120, 212, 18, '#f4f4f4', -4) + tag('LIMERICK', 18, 214, 14, GOLD, -3) +
      '<g class="crbSpray"><circle cx="238" cy="160" r="2" fill="' + RED + '"/></g><g class="crbSpray crbSp2"><circle cx="244" cy="154" r="2" fill="' + RED + '"/></g>' +
      '<rect x="250" y="140" width="150" height="90" fill="#e8dcc4"/><path d="M250 140h150v-8H250z" fill="#5a5048"/>' +
      '<g fill="#2c3a44"><rect x="266" y="156" width="26" height="30"/><rect x="310" y="156" width="26" height="30"/><rect x="354" y="156" width="26" height="30"/></g>' +
      '<rect x="300" y="196" width="30" height="34" fill="' + TEAL + '"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#55524c"/><path d="M0 232h400" stroke="#888" stroke-width="2"/>' +
      /* white enamel wall plates with black lettering, as in Limerick */
      '<rect x="20" y="116" width="120" height="22" rx="2" fill="#f7f5ee" stroke="#222" stroke-width="2"/><text x="80" y="131" text-anchor="middle" ' + F + ' font-size="11" fill="#111">NICHOLAS ST</text>' +
      '<rect x="262" y="104" width="112" height="22" rx="2" fill="#f7f5ee" stroke="#222" stroke-width="2"/><text x="318" y="119" text-anchor="middle" ' + F + ' font-size="11" fill="#111">CASTLE ST</text>',
      sky('crbS5', '#8fb0c8', '#e6ecef'));
  }

  window.SCENES = { crbstation, crbcastle, crbmarket, crbpark, crbcorner };
})();
