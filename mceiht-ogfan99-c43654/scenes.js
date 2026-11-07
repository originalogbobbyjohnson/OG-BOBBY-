/* mceiht scenes (Regions tab: Los Angeles + SoCal; Compton, by Tragniew Park). CSS classes prefixed me- (the page's own anim-train is kept).
   1 Metro Local 53 bus stop on S Central Ave at W Alondra Blvd: the orange-red 53 pulling in, palms, a hazy Compton afternoon.
   2 Tragniew Park on W Alondra Blvd: the ball field backstop, the grass, palms, a swing going and a ball bouncing.
   3 Richland Farms, Compton's horse country: wooden corrals, a rider trotting past, the stable roof, tails swishing.
   4 The 91 Freeway at 2 a.m. ("2 a.m. on the 91 Freeway" - Late Nite Hype): the green Artesia Fwy sign, taillights streaming, a gas station glowing.
   5 W Alondra Blvd and S Central Ave: green signs, MC EIHT tagged on the wall, Compton/Woodley Airport behind with a little plane landing.
   The one 9 drawn (the 91 shield) is a custom glyph with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes meflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.me-flk{animation:meflick 2.2s infinite}.me-flk2{animation-delay:.7s}' +
    '@keyframes mecar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.me-car{animation:mecar 7s linear infinite}.me-car2{animation-delay:-3.5s}' +
    '@keyframes mecarb{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.me-carb{animation:mecarb 5s linear infinite}.me-carb2{animation-delay:-2.5s}' +
    '@keyframes mesway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.me-palm{transform-box:fill-box;transform-origin:50% 100%;animation:mesway 3.5s ease-in-out infinite}.me-palm2{animation-delay:-1.6s}' +
    '@keyframes meball{0%{transform:translateY(0)}100%{transform:translateY(-30px)}}.me-ball{animation:meball .5s ease-out infinite alternate}' +
    '@keyframes meswing{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.me-swing{transform-box:view-box;transform-origin:96px 128px;animation:meswing 2s ease-in-out infinite}' +
    '@keyframes metrot{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.me-trot{animation:metrot 9s linear infinite;animation-delay:-3.5s}' +
    '@keyframes mebob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.me-bob{animation:mebob .45s ease-in-out infinite}' +
    '@keyframes metail{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(14deg)}}.me-tail{transform-box:fill-box;transform-origin:0 0;animation:metail 1.2s ease-in-out infinite}' +
    '@keyframes meplane{0%{transform:translate(-60px,-30px)}100%{transform:translate(460px,40px)}}.me-plane{animation:meplane 10s linear infinite;animation-delay:-3s}' +
    '@keyframes mespray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.me-sp{animation:mespray 1.4s ease-out infinite}.me-sp2{animation-delay:.45s}' +
    '@keyframes mehaze{0%,100%{opacity:.35}50%{opacity:.6}}.me-haze{animation:mehaze 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="me-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a3e24" stroke-width="4" fill="none"/>' +
    '<g fill="#2a5a32"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const GOLD = "#f2b134", TEAL = "#3fb5a3", RED = "#d94b3d", METRO = "#e56b1f";
  const plane = '<g><path d="M0 10h44l10-4v8l-10-2H0z" fill="#f2efe6" stroke="#555" stroke-width="1"/><path d="M18 10l-8-12h6l12 12zM18 12l-8 10h6l12-10z" fill="#d94b3d"/><path d="M2 10l-4-8h5l5 8z" fill="#d94b3d"/><circle cx="46" cy="9" r="1.6" fill="#333"/></g>';

  /* 1. Metro Local 53 on S Central Ave at W Alondra Blvd */
  function mestation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="58" rx="8" fill="' + METRO + '" stroke="#8a3a0a" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="300" height="6" fill="#f6efe4"/>' +
      '<rect x="306" y="110" width="30" height="26" rx="3" fill="#20303c"/><rect x="292" y="102" width="46" height="6" rx="1" fill="#111"/><text x="315" y="107" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">53 CENTRAL AV</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle class="me-flk" cx="336" cy="148" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mes1)"/>' +
      '<circle cx="320" cy="58" r="24" fill="#ffd88a" opacity=".75"/><rect class="me-haze" x="0" y="70" width="400" height="36" fill="#f4c08a"/>' +
      '<g fill="#5a4040" opacity=".5"><rect x="0" y="80" width="70" height="28"/><rect x="76" y="88" width="50" height="20"/><path d="M140 108v-22l20-10 20 10v22z"/><rect x="240" y="84" width="80" height="24"/><rect x="330" y="90" width="70" height="18"/></g>' +
      palm(26, 172, 108) + palm(200, 100, 60, "me-palm2") + palm(376, 172, 118, "me-palm2") +
      '<rect x="0" y="168" width="400" height="10" fill="#c9c2b2"/><rect x="0" y="178" width="400" height="82" fill="#4a4846"/>' +
      '<path d="M0 220h40M70 220h40M140 220h40M210 220h40M280 220h40M350 220h40" stroke="#e8d36a" stroke-width="3"/>' +
      bus +
      '<g><rect x="12" y="120" width="5" height="50" fill="#333"/><rect x="2" y="104" width="44" height="18" rx="2" fill="#111"/><rect x="4" y="106" width="16" height="14" rx="2" fill="' + METRO + '"/><text x="12" y="116.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">53</text><text x="33" y="116" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">METRO</text></g>' +
      '<rect x="100" y="232" width="200" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">S CENTRAL AV / W ALONDRA BLVD</text>',
      sky("mes1", "#3a5a8a", "#f0b878"));
  }

  /* 2. Tragniew Park: ball field, swings, palms */
  function mepark() {
    return svg(
      '<rect width="400" height="260" fill="url(#mes2)"/>' +
      '<circle cx="60" cy="46" r="20" fill="#fff3c0" opacity=".9"/>' +
      palm(40, 140, 90) + palm(330, 140, 100, "me-palm2") + palm(370, 140, 80) +
      '<rect x="0" y="136" width="400" height="124" fill="#5aa04a"/>' +
      '<path d="M200 240L130 190L200 150L270 190z" fill="#c9925a"/><path d="M200 236L140 190L200 156L260 190z" fill="#6ab45a"/>' +
      '<rect x="196" y="232" width="8" height="6" fill="#fff"/><rect x="136" y="187" width="6" height="6" fill="#fff"/><rect x="258" y="187" width="6" height="6" fill="#fff"/><rect x="197" y="152" width="6" height="6" fill="#fff"/>' +
      '<g stroke="#7a7a7a" stroke-width="1.5" fill="none"><path d="M168 236V176M232 236V176M168 176Q200 164 232 176"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (172 + i * 8) + ' 178V236"/>').join("") + Array.from({ length: 6 }, (_, i) => '<path d="M168 ' + (186 + i * 9) + 'H232"/>').join("") + '</g>' +
      '<g><path d="M76 82v58M116 82v58M70 82h52" stroke="#3a3a46" stroke-width="4"/>' +
      '<g class="me-swing"><path d="M90 84v38M102 84v38" stroke="#555" stroke-width="1.5"/><rect x="86" y="122" width="20" height="5" fill="' + RED + '"/></g></g>' +
      '<g class="me-ball"><circle cx="110" cy="222" r="6" fill="#f2efe6" stroke="#c33" stroke-width="1"/></g>' +
      '<rect x="270" y="150" width="80" height="34" rx="2" fill="#7a5a3a"/><rect x="274" y="154" width="72" height="26" fill="#efe2c4"/><text x="310" y="166" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a1a">TRAGNIEW</text><text x="310" y="176" text-anchor="middle" ' + font + ' font-size="8" fill="#3a2a1a">PARK</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2a3a" opacity=".85">TRAGNIEW PARK · W ALONDRA BLVD · COMPTON</text>',
      sky("mes2", "#7cc0ee", "#e6f4ff"));
  }

  /* 3. Richland Farms: Compton horse country */
  function mefarms() {
    const horse = '<g class="me-trot"><g class="me-bob">' +
      '<ellipse cx="40" cy="176" rx="26" ry="11" fill="#6b3f22"/><path d="M60 170l14-20l8 2l-4 8l-10 16z" fill="#6b3f22"/><path d="M74 150l4-6l3 6z" fill="#6b3f22"/><path d="M62 160l10-12" stroke="#2a1a10" stroke-width="3"/>' +
      '<path d="M20 184v20M28 186v18M50 186v18M58 184v20" stroke="#4a2a14" stroke-width="4"/>' +
      '<path class="me-tail" d="M14 172q-12 8-8 24" stroke="#2a1a10" stroke-width="4" fill="none"/>' +
      '<path d="M34 164q4-18 12-20q6 2 4 14z" fill="' + TEAL + '"/><circle cx="46" cy="140" r="6" fill="#5a3a24"/><path d="M38 136h16l-3-6h-10z" fill="#e8d7a8"/><path d="M34 136h24" stroke="#e8d7a8" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mes3)"/>' +
      '<circle cx="330" cy="50" r="22" fill="#ffe08a" opacity=".85"/>' +
      '<path d="M220 120h150v-34l-75-26l-75 26z" fill="#9a4a32"/><rect x="230" y="90" width="130" height="30" fill="#b85a3a"/><rect x="280" y="96" width="30" height="24" fill="#3a2418"/><path d="M280 96l30 24M310 96l-30 24" stroke="#e8d7a8" stroke-width="2"/>' +
      palm(60, 124, 80) + palm(190, 124, 70, "me-palm2") +
      '<rect x="0" y="120" width="400" height="140" fill="#c8a36a"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (130 + i * 26) + 'q200 -8 400 0" stroke="#b08a52" stroke-width="2" fill="none"/>').join("") +
      '<g stroke="#e8d7a8" stroke-width="4">' + '<path d="M0 214h400M0 228h400"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (8 + i * 48) + ' 204v34"/>').join("") + '</g>' +
      horse +
      '<rect x="20" y="132" width="96" height="22" rx="2" fill="#5a3a22"/><text x="68" y="147" text-anchor="middle" ' + font + ' font-size="10" fill="#f6ecd2">RICHLAND FARMS</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2418" opacity=".85">RICHLAND FARMS · HORSE COUNTRY · COMPTON</text>',
      sky("mes3", "#8fc8ee", "#f6e2b8"));
  }

  /* 4. The 91 Freeway at 2 a.m. */
  function mefreeway() {
    // shield with a hand-drawn 9 (straight stem) and 1
    const shield = '<g transform="translate(176 26)"><path d="M0 4q24-8 48 0v26q0 14-24 22q-24-8-24-22z" fill="#fff" stroke="#111" stroke-width="2"/><path d="M0 4q24-8 48 0v8H0z" fill="#d94b3d"/>' +
      '<circle cx="18" cy="24" r="6" fill="none" stroke="#111" stroke-width="3.2"/><path d="M24 22v20" stroke="#111" stroke-width="3.2"/><path d="M32 22l4-3v23" stroke="#111" stroke-width="3.2" fill="none"/></g>';
    const tail = (y, cls) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="12" rx="4" fill="#1a1a22"/><circle cx="44" cy="' + (y + 6) + '" r="2.4" fill="#fff6c8"/><circle cx="2" cy="' + (y + 6) + '" r="2.4" fill="#ff3a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mes4)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + ((i * 67) % 400) + '" cy="' + ((i * 29) % 70 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="120" y="20" width="220" height="62" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield +
      '<text x="290" y="52" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">ARTESIA</text><text x="290" y="68" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">FWY  EAST</text>' +
      '<rect x="160" y="82" width="5" height="40" fill="#555"/><rect x="296" y="82" width="5" height="40" fill="#555"/>' +
      '<g fill="#151522"><rect x="0" y="100" width="60" height="30"/><rect x="340" y="96" width="60" height="34"/></g>' +
      '<rect x="20" y="104" width="50" height="22" fill="#262636"/><rect x="18" y="98" width="54" height="6" fill="' + GOLD + '" class="me-flk"/><rect x="40" y="110" width="8" height="16" fill="#ffe9a8" opacity=".8"/>' +
      '<rect x="0" y="130" width="400" height="130" fill="#2a2a32"/>' +
      '<path d="M0 166h400" stroke="#d8d8d8" stroke-width="2"/><path d="M0 196h30M60 196h30M120 196h30M180 196h30M240 196h30M300 196h30M360 196h30" stroke="#e8e8e8" stroke-width="2"/><path d="M0 226h30M60 226h30M120 226h30M180 226h30M240 226h30M300 226h30M360 226h30" stroke="#e8e8e8" stroke-width="2"/>' +
      tail(176, "me-car") + tail(176, "me-car me-car2") + tail(206, "me-carb") + tail(206, "me-carb me-carb2") + tail(144, "me-carb") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">2 A.M. ON THE ARTESIA FREEWAY</text>',
      sky("mes4", "#04040e", "#1c1c3a"));
  }

  /* 5. W Alondra Blvd and S Central Ave: MC EIHT tagged, Compton/Woodley Airport behind */
  function mecorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mes5)"/>' +
      '<circle cx="330" cy="52" r="22" fill="#ffd27a" opacity=".8"/>' +
      '<g class="me-plane">' + plane + '</g>' +
      '<rect x="40" y="94" width="70" height="40" fill="#cfc6b4"/><path d="M36 94q39-22 78 0z" fill="#9aa7b4"/><rect x="60" y="110" width="30" height="24" fill="#5a5a66"/>' +
      '<rect x="160" y="70" width="10" height="64" fill="#e8e4da"/><rect x="152" y="62" width="26" height="12" fill="#3a3a46"/><circle class="me-flk" cx="165" cy="58" r="4" fill="' + GOLD + '"/>' +
      '<rect x="200" y="104" width="90" height="30" fill="#cfc6b4"/><path d="M196 104q49-20 98 0z" fill="#9aa7b4"/>' +
      '<rect x="0" y="126" width="400" height="8" fill="#6a6a70"/>' +
      palm(130, 134, 80) + palm(310, 134, 90, "me-palm2") +
      '<rect x="0" y="134" width="400" height="90" fill="#cbbfa8"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#b3a68d" stroke-width="1"/>').join("") +
      tag("MC EIHT", 22, 202, 48, GOLD, -6) + tag("GEAH", 40, 156, 20, RED, -4) + tag("CMW", 280, 204, 20, "#f2efe6", -3) + tag("COMPTON CYCO", 110, 220, 13, TEAL, -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 126, "W Alondra Blvd") + sign(270, 124, 126, "S Central Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="me-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("me-car", 0, 240, "#1a1a1a") +
      '<g class="me-sp"><circle cx="246" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="me-sp me-sp2"><circle cx="252" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">W ALONDRA BLVD · S CENTRAL AV · COMPTON</text>',
      sky("mes5", "#2a2040", "#e08a50"));
  }

  window.SCENES = { mestation: mestation, mepark: mepark, mefarms: mefarms, mefreeway: mefreeway, mecorner: mecorner };
})();
