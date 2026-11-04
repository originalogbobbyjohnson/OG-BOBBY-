/* Oakland opening scenes for the Rasco game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes chase{0%,100%{opacity:.25}50%{opacity:1}}.ch{animation:chase 1.2s ease-in-out infinite}.ch2{animation-delay:.4s}.ch3{animation-delay:.8s}' +
    '@keyframes boat{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.bt{animation:boat 9s ease-in-out infinite}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-8px)}}.rp{animation:ripple 3s ease-in-out infinite}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes flip{0%,100%{transform:rotate(0)}50%{transform:rotate(-8deg)}}.fl{transform-box:fill-box;transform-origin:50% 100%;animation:flip 2s ease-in-out infinite}.fl2{animation-delay:-1s}' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 6s linear infinite}.car2{animation-delay:-3s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const GOLD = "#f5b82e", BLUE = "#3aa0d8", GREEN = "#58b368";
  /* BART line colors serving 19th St Oakland */
  const ORG = "#faa61a", RED = "#ed1c24", YEL = "#ffe800";
  const dot = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '" stroke="#fff" stroke-width="1"/>';

  /* 1. 19th St Oakland BART: the underground platform downtown, tiled wall, the silver train sliding in */
  function station() {
    let tiles = "";
    for (let y = 0; y < 110; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#d9cfb8"/>';
    let win = "";
    for (let x = 26; x < 300; x += 40) win += '<rect x="' + x + '" y="124" width="26" height="16" rx="3" fill="#1c2733"/><rect x="' + (x + 2) + '" y="126" width="22" height="6" fill="#ffd98a" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2620"/>' +
      '<rect x="0" y="0" width="400" height="110" fill="#bfb399"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#6f6a62"/>' +
      '<rect class="flk" x="40" y="10" width="80" height="4" fill="#fffbe8"/><rect class="flk flk2" x="280" y="10" width="80" height="4" fill="#fffbe8"/>' +
      /* station sign */
      '<rect x="80" y="26" width="240" height="50" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="56" text-anchor="middle" ' + F + ' font-weight="700" font-size="22" fill="#fff">19th St Oakland</text>' +
      '<text x="92" y="70" ' + F + ' font-size="7" fill="#dbe6f3">BART · DOWNTOWN OAKLAND</text>' +
      dot(268, 67, ORG) + dot(282, 67, RED) + dot(296, 67, YEL) +
      /* train */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="300" height="52" rx="6" fill="#d9dde2" stroke="#7d848c" stroke-width="2"/>' +
        '<rect x="8" y="146" width="300" height="5" fill="' + BLUE + '"/>' + win +
        '<path d="M296 114h6q14 4 18 26v26h-24z" fill="#e7eaee" stroke="#7d848c" stroke-width="2"/>' +
        '<path d="M300 120q10 4 14 18h-14z" fill="#1c2733"/><circle cx="312" cy="158" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge */
      '<rect x="0" y="166" width="400" height="5" fill="#e8c547"/><rect x="0" y="171" width="400" height="89" fill="#3a352e"/>' +
      '<rect x="0" y="171" width="400" height="6" fill="#55504a"/>' +
      tag("RASCO", 40, 236, 38, GOLD, -5) + tag("CALI AGENTS", 214, 232, 24, BLUE, -6),
      "");
  }

  /* 2. Lake Merritt at night: the Necklace of Lights around the water, the pergola, a boat drifting */
  function merritt() {
    let neck = "";
    for (let i = 0; i < 26; i++) {
      const x = 4 + i * 15.5, y = 118 + Math.sin(i / 3) * 4;
      neck += '<circle class="ch ' + ["", "ch2", "ch3"][i % 3] + '" cx="' + x + '" cy="' + y + '" r="2.4" fill="#fff4c4"/>';
    }
    let refl = "";
    for (let i = 0; i < 14; i++) refl += '<path class="rp" d="M' + (10 + i * 28) + ' ' + (150 + (i % 4) * 10) + 'h' + (10 + (i % 3) * 6) + '" stroke="#fff4c4" stroke-width="1.5" opacity=".5"/>';
    let cols = "";
    for (let i = 0; i < 8; i++) cols += '<rect x="' + (232 + i * 18) + '" y="186" width="7" height="40" fill="#e9e4d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#r2)"/>' + stars(16) +
      '<circle cx="80" cy="44" r="14" fill="#fff4dc" opacity=".9"/>' +
      /* far shore buildings */
      '<rect x="20" y="78" width="30" height="40" fill="#2a2440"/><rect x="58" y="66" width="24" height="52" fill="#2a2440"/><rect x="92" y="84" width="40" height="34" fill="#2a2440"/>' +
      '<rect x="250" y="70" width="34" height="48" fill="#2a2440"/><rect x="292" y="82" width="28" height="36" fill="#2a2440"/><rect x="330" y="60" width="26" height="58" fill="#2a2440"/>' +
      '<path d="M150 118v-28l20-14 20 14v28z" fill="#2a2440"/>' +
      neck +
      /* the lake */
      '<rect x="0" y="122" width="400" height="66" fill="#16304a"/>' + refl +
      '<g class="bt"><path d="M60 170h60l-8 8H68z" fill="#e9e4d6"/><path d="M90 170v-26l16 26z" fill="#fff"/></g>' +
      /* the pergola on the shore */
      '<rect x="0" y="186" width="400" height="74" fill="#26402c"/>' +
      '<rect x="224" y="176" width="150" height="10" fill="#e9e4d6"/><rect x="220" y="172" width="158" height="5" fill="#d2cbb8"/>' + cols +
      '<text x="20" y="240" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '">LAKE MERRITT</text>',
      sky("r2", "#0a0a22", "#33254f"));
  }

  /* 3. The Fox Oakland on Telegraph: the tall neon blade sign, the chasing marquee bulbs */
  function fox() {
    let bulbs = "";
    for (let x = 96; x < 310; x += 12) bulbs += '<circle class="ch ' + ["", "ch2", "ch3"][(x / 12) % 3 | 0] + '" cx="' + x + '" cy="138" r="2.4" fill="#ffe7a8"/><circle class="ch ' + ["ch3", "", "ch2"][(x / 12) % 3 | 0] + '" cx="' + x + '" cy="172" r="2.4" fill="#ffe7a8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#r3)"/>' + stars(12) +
      /* the facade: deco tower with the dome */
      '<rect x="60" y="90" width="280" height="110" fill="#c9a77a"/><rect x="60" y="86" width="280" height="6" fill="#a3835a"/>' +
      '<rect x="150" y="40" width="100" height="50" fill="#b38f62"/><path d="M168 40a32 22 0 0 1 64 0z" fill="#3f8f7a"/>' +
      '<path d="M174 90V58M200 90V52M226 90V58" stroke="#8a6a44" stroke-width="3"/>' +
      /* blade sign */
      '<rect x="186" y="10" width="28" height="80" rx="4" fill="#1b1013" stroke="' + RED + '" stroke-width="2"/>' +
      '<g class="flk" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + RED + '" text-anchor="middle"><text x="200" y="36">F</text><text x="200" y="60">O</text><text x="200" y="84">X</text></g>' +
      /* marquee */
      '<rect x="88" y="130" width="224" height="50" rx="3" fill="#120d10" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="162" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="2" fill="#fff" textLength="190" lengthAdjust="spacingAndGlyphs">TONIGHT · CALI AGENTS</text>' +
      '<rect x="120" y="182" width="30" height="18" fill="#2a1a12"/><rect x="250" y="182" width="30" height="18" fill="#2a1a12"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#33343a"/><rect x="0" y="198" width="400" height="4" fill="#777"/>' +
      '<g class="car"><rect x="0" y="222" width="60" height="16" rx="5" fill="' + BLUE + '"/><circle cx="14" cy="240" r="5" fill="#111"/><circle cx="46" cy="240" r="5" fill="#111"/></g>' +
      '<text x="390" y="252" text-anchor="end" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + GOLD + '">TELEGRAPH AVE · UPTOWN OAKLAND</text>',
      sky("r3", "#0b0a1c", "#3a2440"));
  }

  /* 4. The record crates: twelve-inches in the bins, one spinning on the deck */
  function crates() {
    let bins = "";
    const cols = ["#d0573a", GOLD, BLUE, GREEN, "#8a3b8f", "#e9e4d6"];
    for (let b = 0; b < 3; b++) {
      const x0 = 18 + b * 124;
      bins += '<rect x="' + x0 + '" y="170" width="112" height="60" fill="#6b4a2a" stroke="#3b2414" stroke-width="2"/>';
      for (let i = 0; i < 7; i++) bins += '<rect class="' + (i === 3 ? "fl " + (b % 2 ? "fl2" : "") : "") + '" x="' + (x0 + 6 + i * 15) + '" y="' + (128 + (i % 2) * 4) + '" width="13" height="44" fill="' + cols[(i + b) % 6] + '" stroke="#111" stroke-width="1"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#1d1a22"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#2a2430"/>' +
      /* wall posters */
      '<rect x="20" y="18" width="70" height="90" fill="#e9e4d6"/><rect x="26" y="24" width="58" height="40" fill="' + GOLD + '"/><text x="55" y="84" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#111">12 INCH</text><text x="55" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#111">HIP HOP</text>' +
      '<rect x="310" y="18" width="70" height="90" fill="#e9e4d6"/><rect x="316" y="24" width="58" height="40" fill="' + BLUE + '"/><text x="345" y="84" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" fill="#111">WEST</text><text x="345" y="98" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="9" fill="#111">COAST</text>' +
      /* turntable */
      '<rect x="130" y="30" width="140" height="84" rx="5" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
      '<g class="vn"><circle cx="190" cy="72" r="34" fill="#0b0b0b"/><circle cx="190" cy="72" r="24" fill="none" stroke="#2a2a2a"/><circle cx="190" cy="72" r="11" fill="' + GOLD + '"/><rect x="188" y="62" width="4" height="6" fill="#fff"/></g>' +
      '<path d="M254 42l-16 36" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>' +
      bins +
      '<rect x="0" y="230" width="400" height="30" fill="#2a2430"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="' + GOLD + '">DIGGING IN THE CRATES · OAKLAND</text>');
  }

  /* 5. The corner: Grand Ave and Lakeshore Ave by the lake, the name tagged, the Bay Bridge lit up behind */
  function corner() {
    let bricks = "";
    for (let y = 80; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#3a2a40"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1020"/>' +
      '<rect x="0" y="0" width="400" height="80" fill="url(#r5)"/>' + stars(8) + IC_BRIDGE + bricks +
      '<rect x="0" y="78" width="400" height="4" fill="#2a1a24"/>' +
      tag("RASCO", 22, 132, 42, GOLD, -7) +
      tag("SOLEFATHER", 30, 180, 28, BLUE, -4) + tag("UNASSISTED", 200, 200, 20, GREEN, -6) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="84" width="5" height="126" fill="#4a5058"/>' +
      '<rect x="300" y="84" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Grand Ave</text>' +
      '<rect x="290" y="108" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="343" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Lakeshore Ave</text>',
      sky("r5", "#0d0b22", "#3a2a55"));
  }

  /* The Bay Bridge east span: one white tower, the cables sweeping down, a line of white lights on the deck */
  let lightsDeck = "";
  for (let x = 0; x < 400; x += 14) lightsDeck += '<circle class="ch ' + ["", "ch2", "ch3"][(x / 14) % 3] + '" cx="' + x + '" cy="60" r="1.3" fill="#fff"/>';
  const IC_BRIDGE = '<g>' +
    '<rect x="0" y="62" width="400" height="18" fill="#16304a"/>' +
    '<rect x="0" y="58" width="400" height="4" fill="#cfd6dc"/>' + lightsDeck +
    '<path d="M196 58V8h8v50z" fill="#f1f3f5"/><path d="M190 14h20" stroke="#f1f3f5" stroke-width="3"/>' +
    '<path d="M200 10Q120 52 20 58M200 10Q280 52 380 58" stroke="#e8ecef" stroke-width="1.5" fill="none"/>' +
    '<path d="M200 18Q140 50 60 58M200 18Q260 50 340 58" stroke="#e8ecef" stroke-width="1" fill="none" opacity=".7"/>' +
    '</g>';

  window.SCENES = { station, merritt, fox, crates, corner };
})();
