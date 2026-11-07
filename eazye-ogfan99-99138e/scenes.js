/* eazye scenes (Regions tab: Los Angeles + SoCal; Compton). CSS classes prefixed ez- (the page's own anim-train is kept).
   1 Del Amo station (Metro A Line, south edge of Compton): open-air platform beside the tracks, a silver light-rail train sliding in, palms.
   2 Compton High School (his school): brick-and-stucco front with the arched entry, flags waving, the school bell swinging.
   3 Skateland in Compton, the roller rink where the crew threw its early shows: neon sign, mirror ball turning, skaters rolling by.
   4 The AM radio station that broke the first Ruthless records: the tall red-and-white tower blinking, the on-air booth, signal rings.
   5 Eazy St and S Alameda St (the street Compton named for him): green signs, EAZY-E tagged, an Alameda Corridor freight train rolling behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ezflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ez-flk{animation:ezflick 2.2s infinite}.ez-flk2{animation-delay:.7s}' +
    '@keyframes ezcar{from{transform:translateX(-160px)}to{transform:translateX(540px)}}.ez-car{animation:ezcar 7s linear infinite}.ez-car2{animation-delay:-3.5s}' +
    '@keyframes ezfreight{from{transform:translateX(420px)}to{transform:translateX(-560px)}}.ez-freight{animation:ezfreight 12s linear infinite}' +
    '@keyframes ezsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ez-palm{transform-box:fill-box;transform-origin:50% 100%;animation:ezsway 3.5s ease-in-out infinite}.ez-palm2{animation-delay:-1.6s}' +
    '@keyframes ezflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}.ez-flag{transform-box:fill-box;transform-origin:0 50%;animation:ezflag 1.4s ease-in-out infinite}.ez-flag2{animation-delay:-.7s}' +
    '@keyframes ezspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ez-sp{animation:ezspray 1.4s ease-out infinite}.ez-sp2{animation-delay:.45s}' +
    '@keyframes ezskate{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ez-sk{animation:ezskate 5s linear infinite}.ez-sk2{animation-delay:-1.7s}.ez-sk3{animation-delay:-3.4s}' +
    '@keyframes ezring{0%{opacity:.9;transform:scale(.4)}100%{opacity:0;transform:scale(1.6)}}.ez-ring{transform-box:fill-box;transform-origin:50% 50%;animation:ezring 2s ease-out infinite}.ez-ring2{animation-delay:-.7s}.ez-ring3{animation-delay:-1.4s}' +
    '@keyframes ezdot{0%,100%{opacity:.2}50%{opacity:1}}.ez-dot{animation:ezdot 1.1s ease-in-out infinite}.ez-dot2{animation-delay:.35s}.ez-dot3{animation-delay:.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="ez-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  const ALINE = "#0072bc", RED = "#d62828", GOLD = "#c9a227", BONE = "#e9e4d8";

  /* 1. Del Amo station, Metro A Line */
  function ezstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 44) + '" y="112" width="32" height="18" rx="3" fill="#22303a"/>').join("");
    const train = '<g class="anim-train"><path d="M22 104h308q26 0 32 30v22H22z" fill="#dfe3e8" stroke="#6f7881" stroke-width="2"/>' + wins +
      '<rect x="22" y="134" width="340" height="5" fill="#3d4650"/><rect x="22" y="139" width="340" height="3" fill="' + ALINE + '"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (102 + i * 88) + '" y="112" width="4" height="42" fill="#aab2ba"/>').join("") +
      '<path d="M330 108q24 4 30 26h-30z" fill="#22303a"/><circle cx="356" cy="148" r="3.5" fill="#fff6c2"/>' +
      '<path d="M120 104l20 -20M230 104l20 -20" stroke="#555" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ezs1)"/>' +
      '<circle cx="60" cy="38" r="16" fill="#fff0a8" opacity=".9"/>' +
      '<path d="M0 82h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="70" width="4" height="86" fill="#7d868f"/>').join("") +
      '<path d="M0 70h400" stroke="#3a3a3a" stroke-width="1"/>' +
      palm(26, 160, 104) + palm(376, 160, 110, "ez-palm2") +
      '<path d="M150 60h100v-6h-100z" fill="#e05a2a"/><rect x="156" y="60" width="4" height="34" fill="#7d868f"/><rect x="240" y="60" width="4" height="34" fill="#7d868f"/>' +
      train +
      '<rect x="0" y="156" width="400" height="6" fill="#f2c200"/><rect x="0" y="162" width="400" height="26" fill="#c7c1b4"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#55524c"/><path d="M0 252h400" stroke="#8a8478" stroke-width="3"/>' +
      '<rect x="96" y="196" width="208" height="36" rx="3" fill="#111"/><text x="112" y="220" ' + font + ' font-size="18" fill="#fff">Del Amo</text>' +
      '<circle cx="280" cy="214" r="12" fill="' + ALINE + '"/><text x="280" y="220" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">A</text>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2a36" opacity=".85">METRO A LINE · SOUTH OF COMPTON</text>',
      sky("ezs1", "#68bdf0", "#e2f4ff"));
  }

  /* 2. Compton High School */
  function ezcomptonhigh() {
    const wins = (y) => Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 30 + (i > 2 ? 132 : 0)) + '" y="' + y + '" width="18" height="24" fill="#3e5260"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ezs2)"/>' +
      palm(14, 202, 128) + palm(388, 202, 120, "ez-palm2") +
      '<rect x="30" y="92" width="340" height="110" fill="#a8473a" stroke="#6e2a20" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M30 ' + (98 + i * 8) + 'h340" stroke="#93392e" stroke-width="1"/>').join("") +
      '<rect x="140" y="62" width="120" height="140" fill="#efe4cc" stroke="#b39f78" stroke-width="2"/><path d="M134 62h132l-10 -14H144z" fill="#c9b282"/>' +
      '<path d="M170 202v-56q30 -34 60 0v56z" fill="#3a2a1e"/><path d="M200 140v62" stroke="#1e140c" stroke-width="2"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="12" fill="#1a1a1a" textLength="104" lengthAdjust="spacingAndGlyphs">COMPTON HIGH</text>' +
      '<path d="M190 98q10 -8 20 0v14h-20z" fill="' + GOLD + '"/><circle cx="200" cy="114" r="2.5" fill="#6a5010"/>' +
      wins(112) + wins(156) +
      '<rect x="80" y="26" width="3" height="66" fill="#888"/><g class="ez-flag"><rect x="83" y="28" width="34" height="20" fill="#b22234"/><rect x="83" y="28" width="14" height="10" fill="#3c3b6e"/><path d="M97 32h20M97 36h20M83 42h34M83 46h34" stroke="#fff" stroke-width="1.6"/></g>' +
      '<rect x="316" y="26" width="3" height="66" fill="#888"/><g class="ez-flag ez-flag2"><rect x="319" y="28" width="34" height="20" fill="#111"/><rect x="319" y="42" width="34" height="6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#8a8476"/><rect x="0" y="202" width="400" height="6" fill="#4f8a3e"/><path d="M0 234h400" stroke="#d8d2c0" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("ez-car", 0, 242, "#111") +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#26323a" opacity=".85">COMPTON HIGH SCHOOL · COMPTON</text>',
      sky("ezs2", "#86c9f0", "#eef8ff"));
  }

  /* 3. Skateland, Compton */
  function ezskateland() {
    const skater = (cls, c) => '<g class="' + cls + '"><rect x="0" y="196" width="10" height="20" rx="3" fill="' + c + '"/><circle cx="5" cy="190" r="5" fill="#2a2a2a"/><path d="M2 216l-4 14M8 216l6 14" stroke="#222" stroke-width="3"/>' +
      '<rect x="-8" y="230" width="12" height="3" fill="#eee"/><rect x="10" y="230" width="12" height="3" fill="#eee"/><circle cx="-5" cy="235" r="2" fill="' + GOLD + '"/><circle cx="1" cy="235" r="2" fill="' + GOLD + '"/><circle cx="13" cy="235" r="2" fill="' + GOLD + '"/><circle cx="19" cy="235" r="2" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<rect x="0" y="0" width="400" height="150" fill="url(#ezs3)"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (200) + ' 40L' + (i * 36 - 4) + ' 150" stroke="' + (i % 3 === 0 ? RED : i % 3 === 1 ? "#3a7bd5" : GOLD) + '" stroke-width="1.5" opacity=".25"/>').join("") +
      '<path d="M200 6v18" stroke="#888" stroke-width="2"/><circle cx="200" cy="40" r="16" fill="#cfd4dc"/>' +
      '<g><path d="M184 40h32M200 24v32M188 30l24 20M212 30l-24 20" stroke="#8a919c" stroke-width="1"/><animateTransform attributeName="transform" type="rotate" from="0 200 40" to="360 200 40" dur="4s" repeatCount="indefinite"/></g>' +
      '<rect x="98" y="70" width="204" height="44" rx="6" fill="#0b0b10" stroke="#ff4fa0" stroke-width="3"/>' +
      '<text x="200" y="102" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="#ff8ac4" class="ez-flk" textLength="176" lengthAdjust="spacingAndGlyphs">SKATELAND</text>' +
      '<text x="200" y="132" text-anchor="middle" ' + font + ' font-size="10" fill="#9ad0ff">LIVE TONIGHT · COMPTON</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6a4a2e"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 150v110" stroke="#5a3c22" stroke-width="2"/>').join("") +
      '<rect x="0" y="150" width="400" height="6" fill="#d8d0c0"/>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3a2a1a"/>' +
      skater("ez-sk", RED) + skater("ez-sk ez-sk2", "#3a7bd5") + skater("ez-sk ez-sk3", BONE) +
      [40, 120, 280, 360].map((x, i) => '<circle class="ez-dot ez-dot' + ((i % 3) + 1) + '" cx="' + x + '" cy="62" r="4" fill="' + (i % 2 ? "#ff4fa0" : "#9ad0ff") + '"/>').join(""),
      sky("ezs3", "#1c1030", "#3a1a40"));
  }

  /* 4. The AM radio tower and the on-air booth */
  function ezradio() {
    const lat = Array.from({ length: 8 }, (_, i) => {
      const y = 40 + i * 20, w = 4 + i * 2.2;
      return '<rect x="' + (110 - w) + '" y="' + y + '" width="' + (w * 2) + '" height="20" fill="' + (i % 2 ? "#f2f2f2" : RED) + '"/>' +
        '<path d="M' + (110 - w) + ' ' + y + 'L' + (110 + w) + ' ' + (y + 20) + 'M' + (110 + w) + ' ' + y + 'L' + (110 - w) + ' ' + (y + 20) + '" stroke="#555" stroke-width=".8"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ezs4)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 13) % 30 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<path d="M110 200L40 216M110 200L180 216M110 120L20 216M110 120L200 216" stroke="#777" stroke-width=".8"/>' +
      lat + '<rect x="108" y="22" width="4" height="18" fill="#ddd"/>' +
      '<circle class="ez-flk" cx="110" cy="20" r="4" fill="#ff3030"/><circle class="ez-flk ez-flk2" cx="110" cy="100" r="3" fill="#ff3030"/>' +
      '<circle class="ez-ring" cx="110" cy="20" r="18" fill="none" stroke="#ffd36a" stroke-width="2"/><circle class="ez-ring ez-ring2" cx="110" cy="20" r="18" fill="none" stroke="#ffd36a" stroke-width="2"/><circle class="ez-ring ez-ring3" cx="110" cy="20" r="18" fill="none" stroke="#ffd36a" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2c2a26"/>' +
      /* booth */
      '<rect x="210" y="64" width="176" height="136" fill="#d9cdb4" stroke="#8a7a5a" stroke-width="2"/>' +
      '<rect x="222" y="78" width="152" height="74" fill="#1a1a22" stroke="#555" stroke-width="3"/>' +
      '<rect x="236" y="124" width="124" height="20" fill="#3a3a42"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (244 + i * 19) + '" y="128" width="10" height="12" fill="#ddd"/>').join("") +
      '<path d="M300 96v22" stroke="#bbb" stroke-width="2"/><rect x="294" y="86" width="12" height="16" rx="6" fill="#c9c9cf"/>' +
      '<rect x="238" y="164" width="120" height="24" rx="3" fill="#111"/><text x="298" y="181" text-anchor="middle" ' + font + ' font-size="12" fill="#ff4d4d" class="ez-flk">ON THE AIR</text>' +
      '<text x="298" y="58" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GOLD + '">1580 AM</text>' +
      car("ez-car", 0, 240, RED) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#e9e1cf" opacity=".85">AM RADIO · LOS ANGELES · REQUEST LINE OPEN</text>',
      sky("ezs4", "#101a3a", "#d07a4a"));
  }

  /* 5. Eazy St and S Alameda St, an Alameda Corridor freight train behind */
  function ezcorner() {
    const box = (x, c) => '<rect x="' + x + '" y="92" width="64" height="32" fill="' + c + '"/><rect x="' + x + '" y="92" width="64" height="4" fill="#00000033"/><circle cx="' + (x + 12) + '" cy="126" r="4" fill="#222"/><circle cx="' + (x + 52) + '" cy="126" r="4" fill="#222"/>';
    const freight = '<g class="ez-freight"><path d="M0 92h56l10 10v22H0z" fill="#e8b020"/><rect x="6" y="96" width="18" height="12" fill="#22303a"/><circle cx="12" cy="126" r="4" fill="#222"/><circle cx="46" cy="126" r="4" fill="#222"/>' +
      box(70, "#2f5d8a") + box(140, "#a33a2a") + box(210, "#3f6e3a") + box(280, "#7a6a5a") + box(350, "#2f5d8a") + box(420, "#a33a2a") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ezs5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 83) % 400) + '" cy="' + ((i * 9) % 20 + 6) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="0" y="84" width="400" height="6" fill="#8a8478"/><rect x="0" y="128" width="400" height="4" fill="#6a645a"/>' +
      freight +
      palm(70, 132, 60) + palm(330, 132, 68, "ez-palm2") +
      '<rect x="0" y="130" width="400" height="94" fill="#ece6da"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#d4ccbc" stroke-width="1"/>').join("") +
      tag("EAZY-E", 22, 198, 50, "#111111", -6) + tag("RUTHLESS", 34, 152, 18, RED, -4) + tag("N.W.A", 222, 140, 18, GOLD, -3) + tag("COMPTON", 150, 218, 15, "#3a7bd5", -2) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(278, 98, 112, "Eazy St") + sign(278, 124, 112, "S Alameda St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ez-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("ez-car", 0, 240, "#111") +
      '<g class="ez-sp"><circle cx="232" cy="168" r="3" fill="#111" opacity=".6"/></g><g class="ez-sp ez-sp2"><circle cx="238" cy="162" r="2" fill="#111" opacity=".5"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">EAZY ST · S ALAMEDA ST · COMPTON</text>',
      sky("ezs5", "#1a2238", "#d88a5a"));
  }

  window.SCENES = { ezstation, ezcomptonhigh, ezskateland, ezradio, ezcorner };
})();
