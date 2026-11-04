/* East Oakland opening scenes for the Del the Funky Homosapien game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.sw{transform-box:view-box;transform-origin:200px 150px;animation:sweep 6s ease-in-out infinite}' +
    '@keyframes shoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}60%{transform:translate(-160px,70px);opacity:0}100%{opacity:0}}.sh{animation:shoot 4s linear infinite}' +
    '@keyframes boom{0%,100%{transform:translateX(0)}50%{transform:translateX(-26px)}}.bm{animation:boom 5s ease-in-out infinite}.bm2{animation-delay:-2.5s}' +
    '@keyframes drop{0%,100%{transform:translateY(0)}50%{transform:translateY(22px)}}.dr{animation:drop 5s ease-in-out infinite}.dr2{animation-delay:-2.5s}' +
    '@keyframes ship{from{transform:translateX(0)}to{transform:translateX(-90px)}}.shp{animation:ship 14s ease-in-out infinite alternate}' +
    '@keyframes jump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.jp{transform-box:fill-box;animation:jump .9s ease-in-out infinite}.jp2{animation-delay:.3s}.jp3{animation-delay:.6s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.5}}.bmz{animation:beam 3s ease-in-out infinite}.bmz2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 90) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#f2c14e", TEAL = "#4ecdc4", PINK = "#ff5d73";
  /* BART line colors */
  const ORG = "#f7a51e", GRN = "#4db848", BLU = "#00a6e0";
  const dot = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '" stroke="#fff" stroke-width="1"/>';

  /* 1. Coliseum BART: elevated concrete platform in East Oakland, the silver train gliding in */
  function station() {
    let win = "";
    for (let x = 26; x < 300; x += 40) win += '<rect x="' + x + '" y="122" width="26" height="16" rx="3" fill="#1c2733"/><rect x="' + (x + 2) + '" y="124" width="22" height="6" fill="#ffd98a" opacity=".35"/>';
    let hills = '<path d="M0 118q60-30 120-12t130-16t150 10v20H0z" fill="#26324a"/>';
    let lights = "";
    for (let x = 10; x < 400; x += 22) lights += '<circle class="tw ' + (x % 44 ? "tw2" : "") + '" cx="' + x + '" cy="' + (112 - (x % 5)) + '" r="1.2" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) + hills + lights +
      /* canopy */
      '<path d="M0 22h400v10H0z" fill="#b9b4aa"/><path d="M0 32h400v4H0z" fill="#6f6a62"/>' +
      '<rect x="46" y="36" width="6" height="74" fill="#8d877d"/><rect x="348" y="36" width="6" height="74" fill="#8d877d"/>' +
      '<circle class="flk" cx="130" cy="42" r="3" fill="#ffe7a8"/><circle class="flk flk2" cx="270" cy="42" r="3" fill="#ffe7a8"/>' +
      /* station sign */
      '<rect x="92" y="48" width="216" height="46" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="76" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">Coliseum</text>' +
      '<text x="102" y="89" ' + F + ' font-size="7" fill="#dbe6f3">BART · OAKLAND</text>' +
      dot(256, 86, ORG) + dot(270, 86, GRN) + dot(284, 86, BLU) + dot(298, 86, "#c9a77c") +
      /* train */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="300" height="52" rx="6" fill="#d9dde2" stroke="#7d848c" stroke-width="2"/>' +
        '<rect x="8" y="144" width="300" height="5" fill="' + BLU + '"/>' + win +
        '<path d="M296 112h6q14 4 18 26v26h-24z" fill="#e7eaee" stroke="#7d848c" stroke-width="2"/>' +
        '<path d="M300 118q10 4 14 18h-14z" fill="#1c2733"/><circle cx="312" cy="156" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* elevated deck and the concrete guideway below */
      '<rect x="0" y="164" width="400" height="4" fill="#e8c547"/>' +
      '<rect x="0" y="168" width="400" height="18" fill="#a29d93"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#141a26"/>' +
      '<rect x="40" y="186" width="22" height="74" fill="#6f6a62"/><rect x="190" y="186" width="22" height="74" fill="#6f6a62"/><rect x="340" y="186" width="22" height="74" fill="#6f6a62"/>' +
      tag("HIERO", 74, 240, 26, GOLD, -4) + tag("3030", 250, 236, 26, TEAL, -7),
      sky("g1", "#0d0b22", "#3a2a55"));
  }

  /* 2. Chabot Space & Science Center up in the Oakland hills: the observatory domes, a telescope sweeping, a shooting star */
  function chabot() {
    let trees = "";
    for (let x = -8; x < 420; x += 26) trees += '<path d="M' + x + ' 210l12-44 12 44z" fill="#14281e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(40) +
      '<circle cx="330" cy="46" r="14" fill="#fff4dc" opacity=".9"/><circle cx="336" cy="42" r="12" fill="#2a2150"/>' +
      '<path class="sh" d="M300 30l-26 11" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
      /* hill */
      '<path d="M0 196q100-40 200-30t200 22v72H0z" fill="#1f3a2c"/>' +
      /* telescope beam */
      '<path class="bmz" d="M200 128L120 10h30z" fill="' + TEAL + '"/>' +
      /* main building + domes */
      '<rect x="110" y="150" width="180" height="40" fill="#cfc6b6"/><rect x="110" y="146" width="180" height="6" fill="#a99f8e"/>' +
      '<rect x="128" y="160" width="14" height="20" fill="#ffd98a" opacity=".6" class="flk"/><rect x="258" y="160" width="14" height="20" fill="#ffd98a" opacity=".6" class="flk flk2"/>' +
      '<path d="M160 150a40 40 0 0 1 80 0z" fill="#e3e6ea" stroke="#9aa2ab" stroke-width="2"/>' +
      '<g class="sw"><rect x="196" y="112" width="8" height="34" fill="#2a2f38"/><rect x="194" y="108" width="12" height="8" fill="#3c4450"/></g>' +
      '<path d="M98 168a20 20 0 0 1 40 0z" fill="#e3e6ea" stroke="#9aa2ab" stroke-width="1.5"/>' +
      '<path d="M262 168a20 20 0 0 1 40 0z" fill="#e3e6ea" stroke="#9aa2ab" stroke-width="1.5"/>' +
      trees +
      '<text x="200" y="244" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">THE OAKLAND HILLS</text>',
      sky("g2", "#05041a", "#2a2150"));
  }

  /* 3. Port of Oakland: the giant container cranes that look like mechs, booms moving, a ship sliding out */
  function port() {
    const crane = (x, c, cls) =>
      '<g transform="translate(' + x + ' 0)">' +
        '<path d="M0 200L10 100M40 200L30 100M10 100h20M4 150h32" stroke="' + c + '" stroke-width="5" fill="none"/>' +
        '<rect x="-6" y="90" width="52" height="12" fill="' + c + '"/>' +
        '<g class="bm ' + cls + '"><rect x="-40" y="80" width="120" height="7" fill="' + c + '"/><path d="M20 80l-6-26h12z" fill="' + c + '"/>' +
          '<g class="dr ' + (cls ? "dr2" : "") + '"><path d="M-20 87v30" stroke="#333" stroke-width="1.5"/><rect x="-30" y="117" width="20" height="10" fill="#d0573a"/></g></g>' +
      '</g>';
    let boxes = "";
    const cols = ["#d0573a", "#2b6cb0", "#e8c547", "#3a8f5a", "#8a3b8f"];
    for (let i = 0; i < 18; i++) boxes += '<rect x="' + (10 + (i % 9) * 22) + '" y="' + (196 - Math.floor(i / 9) * 10) + '" width="20" height="9" fill="' + cols[i % 5] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="70" cy="70" r="26" fill="#ffb36b" opacity=".9"/>' +
      crane(60, "#e8e2d4", "") + crane(180, "#e8e2d4", "bm2") + crane(300, "#e8e2d4", "") +
      boxes +
      '<rect x="0" y="206" width="400" height="54" fill="#1d3f5e"/>' +
      '<path class="tw" d="M20 222h40M150 232h50M260 220h40" stroke="#cfe6ff" stroke-width="1.5"/>' +
      '<g class="shp"><path d="M230 214h150l-10 16H240z" fill="#2a2f38"/><rect x="250" y="200" width="18" height="14" fill="#d0573a"/><rect x="270" y="200" width="18" height="14" fill="#2b6cb0"/><rect x="290" y="200" width="18" height="14" fill="#e8c547"/><rect x="340" y="192" width="20" height="22" fill="#e8e2d4"/></g>' +
      '<text x="20" y="252" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '">PORT OF OAKLAND</text>',
      sky("g3", "#3a2a55", "#ff8a5b"));
  }

  /* 4. Hiero Day: the crew's yearly block party in Oakland, a stage with lights and a jumping crowd */
  function hieroday() {
    let crowd = "";
    for (let i = 0; i < 16; i++) {
      const x = 12 + i * 24, c = ["#2a1d14", "#3b2a1e", "#1d1d24"][i % 3];
      crowd += '<g class="jp ' + ["", "jp2", "jp3"][i % 3] + '"><circle cx="' + x + '" cy="' + (214 - (i % 2) * 4) + '" r="8" fill="' + c + '"/><rect x="' + (x - 9) + '" y="' + (222 - (i % 2) * 4) + '" width="18" height="40" rx="6" fill="' + c + '"/>' +
        (i % 4 === 1 ? '<path d="M' + (x + 6) + ' ' + (220 - (i % 2) * 4) + 'l8-18" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : "") + '</g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(10) +
      '<path class="bmz" d="M60 40L120 170h-40z" fill="' + PINK + '"/><path class="bmz bmz2" d="M340 40L320 170h-40z" fill="' + TEAL + '"/>' +
      '<rect x="40" y="36" width="320" height="8" fill="#333"/><circle cx="60" cy="44" r="6" fill="' + PINK + '"/><circle cx="340" cy="44" r="6" fill="' + TEAL + '"/><circle class="flk" cx="200" cy="44" r="6" fill="' + GOLD + '"/>' +
      /* stage */
      '<rect x="40" y="130" width="320" height="50" fill="#1b1b22"/><rect x="40" y="126" width="320" height="6" fill="#3a3a44"/>' +
      '<rect x="60" y="90" width="36" height="40" fill="#111" stroke="#444"/><circle cx="78" cy="104" r="8" fill="#333"/><circle cx="78" cy="120" r="5" fill="#333"/>' +
      '<rect x="304" y="90" width="36" height="40" fill="#111" stroke="#444"/><circle cx="322" cy="104" r="8" fill="#333"/><circle cx="322" cy="120" r="5" fill="#333"/>' +
      '<rect x="160" y="110" width="80" height="18" fill="#2a2a32"/><circle cx="180" cy="119" r="7" fill="#0b0b0b" stroke="' + GOLD + '"/><circle cx="220" cy="119" r="7" fill="#0b0b0b" stroke="' + GOLD + '"/>' +
      '<rect x="110" y="56" width="180" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="76" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '">HIERO DAY</text>' +
      crowd,
      sky("g4", "#120f24", "#46305e"));
  }

  /* 5. The corner: International Blvd and 73rd Av in East Oakland, the name tagged, the Tribune Tower lit up downtown behind */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#4a2a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1020"/>' +
      '<rect x="0" y="0" width="400" height="70" fill="url(#g5)"/>' + stars(8) + IC_TRIB + bricks +
      '<rect x="0" y="68" width="400" height="4" fill="#2a1a24"/>' +
      tag("DEL", 24, 118, 34, GOLD, -8) +
      tag("THA FUNKEE", 30, 158, 30, TEAL, -5) + tag("HOMOSAPIEN", 40, 196, 28, PINK, -3) +
      /* sidewalk */
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      /* signpost */
      '<rect x="356" y="76" width="5" height="134" fill="#4a5058"/>' +
      '<rect x="290" y="74" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="343" y="89" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">International Blvd</text>' +
      '<rect x="300" y="98" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="113" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">73rd Av</text>',
      sky("g5", "#0d0b22", "#3a2a55"));
  }

  /* Iconic landmark behind the corner: Oakland's Tribune Tower, orange brick with the lit clock faces and copper-green roof */
  const IC_TRIB = '<g>' +
    '<rect x="186" y="16" width="28" height="56" fill="#c46a3a"/><rect x="182" y="12" width="36" height="6" fill="#a3542b"/>' +
    '<path d="M184 12l16-12 16 12z" fill="#5fa58a"/><rect x="198" y="-4" width="4" height="6" fill="#5fa58a"/>' +
    '<circle class="flk" cx="200" cy="26" r="6" fill="#fff4dc" stroke="#7a3a1a"/><path d="M200 26v-4M200 26h3" stroke="#333" stroke-width="1"/>' +
    '<rect x="192" y="40" width="4" height="6" fill="#ffd98a" opacity=".7"/><rect x="204" y="40" width="4" height="6" fill="#ffd98a" opacity=".7"/>' +
    '<rect x="192" y="52" width="4" height="6" fill="#ffd98a" opacity=".5"/><rect x="204" y="52" width="4" height="6" fill="#ffd98a" opacity=".5"/>' +
    '<rect x="120" y="44" width="40" height="28" fill="#2a2440"/><rect x="240" y="36" width="44" height="36" fill="#2a2440"/><rect x="300" y="50" width="36" height="22" fill="#2a2440"/><rect x="60" y="52" width="40" height="20" fill="#2a2440"/>' +
    '</g>';
  window.SCENES = { station, chabot, port, hieroday, corner };
})();
