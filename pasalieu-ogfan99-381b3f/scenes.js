/* Pa Salieu scenes (Regions tab: UK + EUROPE; Hillfields, Coventry CV1 - born in Slough 1997, raised by his grandmother in The Gambia
   until about eight, then Hillfields in north Coventry; "Send Them to Coventry", "Afrikan Rebel", "Afrikan Alien").
   1 Coventry station: the 1960s glass-fronted modernist station, a train pulling in.
   2 Swanswell Pool, Hillfields: the lake with a swan gliding, the medieval Swanswell Gate in red sandstone behind.
   3 Arch 22, Banjul: the white gateway arch with its tall columns, Gambian flag colours on the pennants (his childhood in The Gambia).
   4 The old Coventry Cathedral: the roofless red sandstone ruins, Gothic window tracery and the tall spire, birds circling.
   5 Stoney Stanton Road and Harnall Lane East, Hillfields CV1: street signs, PA SALIEU tagged, the three spires behind.
   CSS classes prefixed "psl" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pslSwan{0%,100%{transform:translateX(0)}50%{transform:translateX(120px)}}.pslSwan{animation:pslSwan 10s ease-in-out infinite}' +
    '@keyframes pslRip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.pslRip{transform-box:fill-box;transform-origin:center;animation:pslRip 2.6s ease-out infinite}.pslR2{animation-delay:-1.3s}' +
    '@keyframes pslFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.pslFlag{transform-box:fill-box;transform-origin:0 50%;animation:pslFlag 1.4s ease-in-out infinite}' +
    '@keyframes pslBird{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-24px)}100%{transform:translate(480px,0)}}.pslBird{animation:pslBird 12s linear infinite}.pslB2{animation-delay:-6s}' +
    '@keyframes pslCloud{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.pslCloud{animation:pslCloud 26s linear infinite}.pslC2{animation-delay:-13s}' +
    '@keyframes pslSp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.pslSp{animation:pslSp 1.4s ease-out infinite}.pslSp2{animation-delay:.5s}' +
    '@keyframes pslSun{0%,100%{opacity:.75}50%{opacity:1}}.pslSun{animation:pslSun 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#ce1126", BLUE = "#0c1c8c", GREEN = "#3a7728", GOLD = "#e8b23a", SAND = "#b5523b";
  const AWC = "#004354", WMR = "#e87722", XC = "#660f21";
  const clouds = '<g fill="#fff" opacity=".7"><g class="pslCloud"><ellipse cx="40" cy="40" rx="34" ry="10"/><ellipse cx="60" cy="34" rx="20" ry="9"/></g>' +
    '<g class="pslCloud pslC2"><ellipse cx="40" cy="70" rx="28" ry="8"/><ellipse cx="56" cy="64" rx="16" ry="8"/></g></g>';
  const birds = '<g fill="none" stroke="#222" stroke-width="2"><g class="pslBird"><path d="M0 40q6 -6 12 0q6 -6 12 0"/></g><g class="pslBird pslB2"><path d="M0 62q5 -5 10 0q5 -5 10 0"/></g></g>';

  /* 1. Coventry station */
  function pslstation() {
    let glass = "";
    for (let x = 30; x < 370; x += 34) glass += '<rect x="' + x + '" y="44" width="30" height="62" fill="#9cc3d8" opacity=".85"/>';
    let wins = "";
    for (const x of [34, 74, 154, 194, 274]) wins += '<rect x="' + x + '" y="150" width="28" height="18" rx="3" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 140h300q30 0 34 26v34H10z" fill="#e6e8ea" stroke="#2a2a2a" stroke-width="2"/>' +
      '<rect x="10" y="140" width="334" height="7" fill="' + AWC + '"/>' + wins +
      '<g fill="' + AWC + '"><rect x="118" y="150" width="20" height="46"/><rect x="238" y="150" width="20" height="46"/></g>' +
      '<rect x="10" y="184" width="334" height="6" fill="' + WMR + '"/><path d="M316 150q22 2 26 22h-26z" fill="#1d2a33"/><rect x="330" y="182" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="50" cy="202" r="6"/><circle cx="74" cy="202" r="6"/><circle cx="270" cy="202" r="6"/><circle cx="294" cy="202" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pslS1)"/>' + clouds +
      '<rect x="20" y="36" width="360" height="78" fill="#d8d4cc" stroke="#6a665e" stroke-width="2"/>' + glass +
      '<rect x="14" y="30" width="372" height="8" fill="#4a4842"/>' +
      '<path d="M0 126h400v84H0z" fill="#2c2a26"/><rect x="0" y="120" width="400" height="8" fill="#4a4842"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#6a645c"/><rect x="0" y="206" width="400" height="6" fill="#e8d34a"/>' +
      '<g transform="translate(70 54)"><rect width="260" height="40" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="74" y="27" ' + F + ' font-size="17" fill="#fff" text-anchor="middle">Coventry</text>' +
      '<rect x="146" y="10" width="34" height="20" rx="10" fill="' + AWC + '"/><text x="163" y="24" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">AWC</text>' +
      '<rect x="184" y="10" width="36" height="20" rx="10" fill="' + WMR + '"/><text x="202" y="24" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">WMR</text>' +
      '<rect x="224" y="10" width="30" height="20" rx="10" fill="' + XC + '"/><text x="239" y="24" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">XC</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="236">PLATFORM 1 - LONDON EUSTON</text><text x="300" y="236">WAY OUT</text></g>' +
      '<path d="M352 230l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      sky('pslS1', '#7aa6d4', '#dde8f2'));
  }

  /* 2. Swanswell Pool and the Swanswell Gate */
  function pslswan() {
    const swan = '<g class="pslSwan"><g transform="translate(110 186)"><ellipse cx="0" cy="0" rx="22" ry="9" fill="#fff" stroke="#bbb"/><path d="M16 -4q8 -6 6 -22q-1 -6 -6 -4" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M15 -30l-6 2" stroke="#f28c28" stroke-width="3" stroke-linecap="round"/><path d="M-20 -2q-8 -10 4 -8" fill="#fff"/></g>' +
      '<g fill="none" stroke="#fff" stroke-width="1.5" opacity=".7"><ellipse cx="110" cy="196" rx="26" ry="5" class="pslRip"/><ellipse cx="110" cy="196" rx="26" ry="5" class="pslRip pslR2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pslS2)"/>' + clouds +
      '<g fill="#2f6b3a"><circle cx="40" cy="140" r="34"/><circle cx="360" cy="136" r="36"/><circle cx="300" cy="150" r="22"/></g>' +
      '<g transform="translate(150 66)"><rect x="0" y="20" width="100" height="74" fill="' + SAND + '" stroke="#6e2c1c" stroke-width="2"/>' +
      '<path d="M0 20h100v-10h-8v6h-8v-6h-8v6h-8v-6h-8v6h-8v-6h-8v6h-8v-6h-8v6h-8v-6H0z" fill="' + SAND + '" stroke="#6e2c1c" stroke-width="1.5"/>' +
      '<path d="M36 94v-30q14 -20 28 0v30z" fill="#3a2a22"/><g fill="#3a2a22"><rect x="14" y="36" width="8" height="14"/><rect x="78" y="36" width="8" height="14"/></g></g>' +
      '<rect x="0" y="160" width="400" height="70" fill="#4f86a8"/><g stroke="#cfe3ef" stroke-width="1.5" opacity=".6"><path d="M20 176h40M200 200h60M300 180h50M60 214h40"/></g>' + swan +
      '<rect x="0" y="230" width="400" height="30" fill="#5c8a4a"/>' +
      '<g transform="translate(250 236)"><rect width="140" height="18" rx="3" fill="#fff" stroke="#111"/><text x="70" y="13" ' + F + ' font-size="9" fill="#111" text-anchor="middle">SWANSWELL POOL CV1</text></g>',
      sky('pslS2', '#8ab9e2', '#e8f2f8'));
  }

  /* 3. Arch 22, Banjul */
  function pslarch() {
    let cols = "";
    for (const x of [120, 140, 160, 232, 252, 272]) cols += '<rect x="' + x + '" y="96" width="10" height="120" fill="#f4efe4" stroke="#b9ad94" stroke-width="1.5"/>';
    const pen = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="0" width="2" height="34" fill="#555"/><g class="pslFlag"><rect x="2" y="0" width="22" height="5" fill="' + RED + '"/><rect x="2" y="5" width="22" height="1.5" fill="#fff"/><rect x="2" y="6.5" width="22" height="4" fill="' + BLUE + '"/><rect x="2" y="10.5" width="22" height="1.5" fill="#fff"/><rect x="2" y="12" width="22" height="5" fill="' + GREEN + '"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pslS3)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffd36a" class="pslSun"/>' +
      '<g fill="#3f7a3a"><path d="M30 216v-60" stroke="#6a4a2a" stroke-width="5"/><path d="M30 156q-24 -6 -30 6M30 156q24 -8 32 4M30 156q-10 -20 -26 -18M30 156q14 -18 28 -14" stroke="#3f7a3a" stroke-width="6" fill="none"/>' +
      '<path d="M370 216v-50" stroke="#6a4a2a" stroke-width="5"/><path d="M370 166q-22 -6 -30 6M370 166q22 -8 30 4M370 166q-8 -18 -24 -16" stroke="#3f7a3a" stroke-width="6" fill="none"/></g>' +
      '<rect x="108" y="54" width="186" height="44" fill="#f4efe4" stroke="#b9ad94" stroke-width="2"/>' +
      '<path d="M108 54l93 -22l93 22z" fill="#e8dfc8" stroke="#b9ad94" stroke-width="2"/>' +
      '<g fill="#c9a24a"><rect x="190" y="18" width="22" height="16"/><path d="M188 18l13 -10l13 10z"/></g>' +
      '<g fill="#7a8a96"><rect x="124" y="64" width="12" height="20"/><rect x="146" y="64" width="12" height="20"/><rect x="168" y="64" width="12" height="20"/><rect x="222" y="64" width="12" height="20"/><rect x="244" y="64" width="12" height="20"/><rect x="266" y="64" width="12" height="20"/></g>' +
      cols + pen(60, 182) + pen(330, 182) +
      '<rect x="0" y="216" width="400" height="44" fill="#c9a87a"/><path d="M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g transform="translate(150 98)"><rect width="100" height="18" rx="3" fill="#fff" stroke="#111"/><text x="50" y="13" ' + F + ' font-size="10" fill="#111" text-anchor="middle">ARCH 22</text></g>',
      sky('pslS3', '#4fa3d8', '#f6e3b0'));
  }

  /* 4. The old Coventry Cathedral ruins */
  function pslruins() {
    const win = (x) => '<g transform="translate(' + x + ' 120)"><path d="M0 70v-46q16 -32 32 0v46z" fill="url(#pslS4)" stroke="#6e2c1c" stroke-width="2"/><path d="M16 70v-62M0 40h32" stroke="' + SAND + '" stroke-width="3"/><circle cx="16" cy="22" r="6" fill="none" stroke="' + SAND + '" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pslS4)"/>' + clouds + birds +
      '<g transform="translate(310 0)"><rect x="0" y="64" width="34" height="154" fill="' + SAND + '" stroke="#6e2c1c" stroke-width="2"/>' +
      '<rect x="-2" y="58" width="38" height="8" fill="#8e3e2a"/><path d="M4 58l13 -50l13 50z" fill="' + SAND + '" stroke="#6e2c1c" stroke-width="2"/>' +
      '<g fill="#3a2a22"><rect x="12" y="80" width="10" height="20" rx="5"/><rect x="12" y="120" width="10" height="20" rx="5"/></g></g>' +
      '<rect x="20" y="110" width="280" height="108" fill="' + SAND + '" stroke="#6e2c1c" stroke-width="2"/>' +
      '<path d="M20 110l14 -8l18 6l20 -10l26 8l24 -6l30 6l22 -8l30 8l26 -4l26 6l24 -6v14H20z" fill="#9c4632"/>' +
      win(40) + win(98) + win(156) + win(214) +
      '<g fill="#3a2a22"><rect x="268" y="150" width="6" height="40"/><rect x="258" y="160" width="26" height="6"/></g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#8a8478"/><g stroke="#6e695f" stroke-width="1"><path d="M0 232h400M0 246h400M40 218v42M120 218v42M200 218v42M280 218v42M360 218v42"/></g>',
      sky('pslS4', '#6e9ccc', '#e2ecf4'));
  }

  /* 5. Stoney Stanton Road and Harnall Lane East - the corner, three spires behind */
  function pslcorner() {
    const sign = (x, y, a, b) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="168" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="84" y="16" ' + F + ' font-size="11" fill="#111" text-anchor="middle">' + a + '</text><text x="84" y="28" ' + F + ' font-size="8" fill="#d0202a" text-anchor="middle">' + b + '</text></g>';
    const spire = (x, h) => '<g fill="#8e5a48" stroke="#5a3428" stroke-width="1.5"><rect x="' + (x - 8) + '" y="' + (146 - h * .45) + '" width="16" height="' + (h * .45) + '"/><path d="M' + (x - 8) + ' ' + (146 - h * .45) + 'l8 -' + (h * .55) + 'l8 ' + (h * .55) + 'z"/></g>';
    let br = "";
    for (let y = 148; y < 226; y += 10) for (let x = (y / 10) % 2 ? 0 : -14; x < 400; x += 28) br += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#7a4232"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pslS5)"/>' + clouds +
      spire(250, 130) + spire(300, 110) + spire(350, 120) +
      '<rect x="0" y="146" width="400" height="80" fill="#5e2f22"/>' + br +
      tag("PA SALIEU", 22, 206, 44, GOLD, -5) + tag("HILLZ", 276, 186, 28, GREEN, 5) +
      '<g class="pslSp"><circle cx="230" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pslSp pslSp2"><circle cx="238" cy="172" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a3a3c"/><rect x="0" y="226" width="400" height="4" fill="#9a958b"/>' +
      '<rect x="180" y="44" width="4" height="102" fill="#333"/>' +
      sign(12, 50, "STONEY STANTON ROAD", "CV1 - HILLFIELDS") + sign(14, 92, "HARNALL LANE EAST", "CV1 - HILLFIELDS"),
      sky('pslS5', '#f0a35e', '#6b8fc4'));
  }

  window.SCENES = { pslstation, pslswan, pslarch, pslruins, pslcorner };
})();
