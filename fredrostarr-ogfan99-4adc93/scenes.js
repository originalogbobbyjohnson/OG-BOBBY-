/* Fredro Starr game (NYC map, Queens: South Jamaica, where he moved at 13 and came up with Onyx).
   The Q6 pulling up on Sutphin Blvd at Linden Blvd, Navy Pier in Chicago (Save the Last Dance, his role as Malakai and the
   "Shining Through" theme), Baltimore's rowhouses and white marble steps (his TV role as Bird), the private airport at Teterboro
   (Electric Ice: "private airports"), and 164th St & Jamaica Av with the old First Presbyterian Church of Jamaica behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fscar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fs-car{animation:fscar 7s linear infinite}.fs-car2{animation-delay:-3.5s}' +
    '@keyframes fsblink{0%,100%{opacity:.25}50%{opacity:1}}.fs-bl{animation:fsblink 1.6s ease-in-out infinite}.fs-bl2{animation-delay:.5s}.fs-bl3{animation-delay:1s}' +
    '@keyframes fsflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.fs-flk{animation:fsflick 2.4s infinite}' +
    '@keyframes fswheel{to{transform:rotate(360deg)}}.fs-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:fswheel 18s linear infinite}' +
    '@keyframes fswave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.fs-wave{animation:fswave 3s ease-in-out infinite}' +
    '@keyframes fsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.fs-bob{animation:fsbob .6s ease-in-out infinite}.fs-bob2{animation-delay:.3s}' +
    '@keyframes fsrun{0%{opacity:0}10%{opacity:1}30%{opacity:0}100%{opacity:0}}.fs-run{animation:fsrun 1.5s linear infinite}' +
    '@keyframes fsjet{0%{transform:translateX(0)}100%{transform:translateX(-150px)}}.fs-jet{animation:fsjet 6s ease-in-out infinite alternate}' +
    '@keyframes fsbeam{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.fs-beam{transform-box:fill-box;transform-origin:50% 100%;animation:fsbeam 3s ease-in-out infinite}' +
    '@keyframes fsrope{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}.fs-rope{transform-box:fill-box;transform-origin:50% 0%;animation:fsrope .7s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (label.length > 1 ? 11 : 15) + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FIRE = "#ff7a1a", ICE = "#59d8ff", GOLD = "#ffd166", CREAM = "#f4ead8", BUS = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* a South Jamaica two-family house: siding, aluminum awning, little stoop */
  const house = (x, y, w, col, roof) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (170 - y) + '" fill="' + col + '"/>' +
    '<path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -18l' + (w / 2 + 4) + ' 18z" fill="' + roof + '"/>' +
    '<rect class="fs-bl" x="' + (x + 8) + '" y="' + (y + 10) + '" width="14" height="16" fill="#ffd98a" opacity=".8"/><rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="16" fill="#3a3f4a"/>' +
    '<path d="M' + (x + 4) + ' ' + (y + 34) + 'h' + (w - 8) + 'l-4 8h-' + (w - 16) + 'z" fill="#e9e3d6"/>' +
    '<rect x="' + (x + w / 2 - 7) + '" y="' + (y + 44) + '" width="14" height="' + (126 - y) + '" fill="#4a3226"/>';

  /* 1. Sutphin Blvd & Linden Blvd, South Jamaica: dusk, the Q6 pulling up to the stop, the blue bus-stop sign and the black street board */
  function busstop() {
    let win = "";
    for (let x = 52; x < 250; x += 30) win += '<rect x="' + x + '" y="148" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fsb)"/>' + stars(8) +
      '<circle cx="330" cy="40" r="16" fill="#ffb36b" opacity=".55"/>' +
      house(10, 96, 70, "#c9b79a", "#5b4637") + house(92, 104, 64, "#9fb3c4", "#3f4b57") + house(168, 92, 72, "#d8c7a8", "#6b4a3a") + house(252, 100, 66, "#b6a7c7", "#4e3f60") +
      /* the street board */
      '<rect x="34" y="22" width="250" height="30" rx="3" fill="#111"/><rect x="34" y="22" width="250" height="3" fill="#fff"/>' +
      '<text x="46" y="43" ' + font + ' font-size="14" fill="#fff">Sutphin Blvd &amp; Linden Blvd</text>' +
      /* sidewalk + street */
      '<rect x="0" y="170" width="400" height="16" fill="#8a8c90"/><rect x="0" y="186" width="400" height="74" fill="#3f4146"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#e8d36a" stroke-width="3"/>' +
      /* the Q6, white with the blue stripe */
      '<g class="anim-train">' +
        '<rect x="40" y="136" width="250" height="62" rx="8" fill="#f2f4f7" stroke="#8b939e" stroke-width="2"/>' + win +
        '<rect x="40" y="174" width="250" height="7" fill="' + BUS + '"/>' +
        '<rect x="262" y="142" width="24" height="30" rx="3" fill="#cfe2f5"/>' +
        '<rect x="244" y="136" width="44" height="10" rx="2" fill="#111"/><text x="266" y="144.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">Q6 JFK</text>' +
        '<circle cx="80" cy="198" r="10" fill="#1b1b1f"/><circle cx="80" cy="198" r="4" fill="#777"/><circle cx="246" cy="198" r="10" fill="#1b1b1f"/><circle cx="246" cy="198" r="4" fill="#777"/>' +
        '<circle class="fs-flk" cx="286" cy="186" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* the stop pole + sign */
      '<rect x="340" y="104" width="4" height="82" fill="#7d858f"/>' +
      '<rect x="318" y="92" width="48" height="40" rx="4" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="108" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS STOP</text>' +
      '<rect x="326" y="113" width="32" height="14" rx="3" fill="#fff"/><text x="342" y="124" text-anchor="middle" ' + font + ' font-size="11" fill="' + BUS + '">Q6</text>' +
      person(372, 152, "#1d1d22") +
      txt("SOUTH JAMAICA · QUEENS", 140, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("fsb", "#1b1638", "#e2875a"));
  }

  /* 2. Navy Pier, Chicago: the big wheel turning over the pier, the domed ballroom at the end, two dancers on the boardwalk (Save the Last Dance) */
  function navypier() {
    let spokes = "", cars = "";
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI / 8, x = 120 + 62 * Math.cos(a), y = 104 + 62 * Math.sin(a);
      spokes += '<path d="M120 104L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e8eef5" stroke-width="1.2" opacity=".8"/>';
      cars += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4.5" fill="' + (i % 2 ? ICE : FIRE) + '"/>';
    }
    let refl = "";
    for (let i = 0; i < 12; i++) refl += '<path class="fs-wave" style="animation-delay:-' + (i * 0.3) + 's" d="M' + (20 + i * 32) + ' ' + (214 + (i % 3) * 12) + 'h18" stroke="' + (i % 2 ? ICE : GOLD) + '" stroke-width="2" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fsn)"/>' + stars(14) +
      /* far skyline */
      '<g fill="#1a2238"><rect x="250" y="70" width="18" height="110"/><rect x="272" y="40" width="22" height="140"/><path d="M276 40v-14M290 40v-14" stroke="#1a2238" stroke-width="2"/><rect x="298" y="86" width="16" height="94"/><rect x="318" y="60" width="20" height="120"/><rect x="342" y="94" width="18" height="86"/><rect x="364" y="76" width="22" height="104"/></g>' +
      /* the wheel */
      '<rect x="114" y="104" width="12" height="80" fill="#c3ccd8"/><path d="M96 184l24-80l24 80" stroke="#c3ccd8" stroke-width="4" fill="none"/>' +
      '<g class="fs-wheel"><circle cx="120" cy="104" r="62" fill="none" stroke="#e8eef5" stroke-width="3"/><circle cx="120" cy="104" r="52" fill="none" stroke="#e8eef5" stroke-width="1" opacity=".6"/>' + spokes + cars + '</g>' +
      '<circle cx="120" cy="104" r="6" fill="' + GOLD + '"/>' +
      /* the pier and the domed ballroom */
      '<rect x="0" y="180" width="400" height="12" fill="#5a4a3c"/>' +
      '<rect x="196" y="140" width="110" height="40" fill="#cbb79a"/><path d="M196 140q55-46 110 0z" fill="#d9c7aa" stroke="#9a8466" stroke-width="2"/>' +
      [208, 226, 244, 262, 280].map(x => '<rect class="fs-bl" x="' + x + '" y="150" width="10" height="22" rx="5" fill="#ffd98a"/>').join("") +
      '<rect x="248" y="96" width="6" height="10" fill="#9a8466"/><circle cx="251" cy="94" r="3" fill="' + GOLD + '"/>' +
      '<rect x="20" y="150" width="60" height="30" fill="#b9a68a"/><rect x="34" y="128" width="10" height="22" fill="#b9a68a"/><rect x="56" y="128" width="10" height="22" fill="#b9a68a"/>' +
      /* lamps */
      [150, 186, 384].map(x => '<rect x="' + x + '" y="156" width="3" height="24" fill="#333"/><circle class="fs-flk" cx="' + (x + 1.5) + '" cy="154" r="4" fill="#fff6c2"/>').join("") +
      /* the dancers */
      '<g class="fs-bob"><circle cx="336" cy="150" r="5" fill="#0b0b10"/><path d="M336 156l-6 14l4 10M336 156l5 13l-3 11M336 160l-12 -6" stroke="#0b0b10" stroke-width="4" stroke-linecap="round" fill="none"/></g>' +
      '<g class="fs-bob fs-bob2"><circle cx="352" cy="148" r="5" fill="#0b0b10"/><path d="M352 154l3 14l-5 12M352 154l-2 14l6 12M352 158l12 -8" stroke="#0b0b10" stroke-width="4" stroke-linecap="round" fill="none"/></g>' +
      /* the water */
      '<rect x="0" y="192" width="400" height="68" fill="#0f2742"/>' + refl +
      txt("NAVY PIER · CHICAGO", 290, 30, 13, CREAM, 'letter-spacing="3"') + tag("SAVE THE LAST DANCE", 200, 250, 18, GOLD, -3),
      sky("fsn", "#060a1e", "#2a2f5c"));
  }

  /* 3. Baltimore: a row of brick and formstone rowhouses, every stoop a set of white marble steps, a kid jumping rope */
  function bmore() {
    const cols = ["#8e3b2c", "#a9a39a", "#7a2f25", "#b9b1a4", "#93402f", "#a59e94"];
    let row = "";
    for (let i = 0; i < 6; i++) {
      const x = 4 + i * 66, c = cols[i], stone = i % 2 === 1;
      row += '<rect x="' + x + '" y="60" width="64" height="130" fill="' + c + '"/>';
      if (stone) for (let y = 66; y < 186; y += 12) row += '<path d="M' + x + ' ' + y + 'h64" stroke="#8c867c" stroke-width="1" opacity=".6"/>';
      else for (let y = 66; y < 186; y += 6) row += '<path d="M' + x + ' ' + y + 'h64" stroke="#5e2219" stroke-width=".6" opacity=".5"/>';
      row += '<rect x="' + x + '" y="56" width="64" height="8" fill="#2e2a26"/>' +
        '<rect x="' + (x + 8) + '" y="74" width="16" height="22" fill="#2a3240"/><rect x="' + (x + 40) + '" y="74" width="16" height="22" fill="#2a3240"/>' +
        '<rect class="fs-bl fs-bl' + (i % 3 + 1) + '" x="' + (x + 8) + '" y="112" width="16" height="22" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 40) + '" y="112" width="16" height="22" fill="#2a3240"/>' +
        /* painted window screen: a little red-roof cottage scene */
        '<path d="M' + (x + 42) + ' 128l6 -6l6 6z" fill="#c0392b"/><rect x="' + (x + 43) + '" y="128" width="10" height="4" fill="#f4ead8"/>' +
        '<rect x="' + (x + 28) + '" y="140" width="10" height="26" fill="#3a2418"/>' +
        /* the white marble steps */
        '<rect x="' + (x + 22) + '" y="166" width="22" height="6" fill="#f7f7f2"/><rect x="' + (x + 20) + '" y="172" width="26" height="6" fill="#ecece6"/><rect x="' + (x + 18) + '" y="178" width="30" height="6" fill="#e1e1da"/><rect x="' + (x + 16) + '" y="184" width="34" height="6" fill="#d6d6cf"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#fsm)"/>' +
      row +
      '<rect x="0" y="190" width="400" height="18" fill="#9a9a96"/><rect x="0" y="208" width="400" height="52" fill="#3c3e42"/>' +
      [50, 170, 290].map(x => '<rect x="' + x + '" y="150" width="4" height="42" fill="#2b2b2b"/><circle class="fs-flk" cx="' + (x + 2) + '" cy="148" r="5" fill="#fff6c2"/>').join("") +
      /* jump rope */
      '<g><circle cx="230" cy="180" r="5" fill="#111"/><rect x="225" y="186" width="10" height="14" rx="4" fill="#111"/>' +
      '<path class="fs-rope" d="M218 190q12 24 24 0" stroke="#ff4d6d" stroke-width="2" fill="none"/></g>' +
      '<g class="fs-car"><rect x="0" y="226" width="46" height="14" rx="4" fill="' + ICE + '"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="36" cy="240" r="4" fill="#111"/></g>' +
      txt("BALTIMORE · MARBLE STEPS", 200, 30, 14, CREAM, 'letter-spacing="3"') + txt("WHERE HE PLAYED BIRD", 200, 46, 10, GOLD, 'letter-spacing="2"'),
      sky("fsm", "#2b3a5c", "#d48a6a"));
  }

  /* 4. Teterboro, the private airport: runway lights running, the tower beacon sweeping, a jet taxiing with lights in the chains */
  function teterboro() {
    let edge = "";
    for (let x = 10; x < 400; x += 26) edge += '<circle class="fs-run" style="animation-delay:' + (x / 260).toFixed(2) + 's" cx="' + x + '" cy="214" r="3" fill="' + GOLD + '"/><circle cx="' + x + '" cy="246" r="2.5" fill="' + ICE + '" opacity=".8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fst)"/>' + stars(18) +
      /* skyline far off */
      '<g fill="#1c2340" opacity=".9"><rect x="40" y="128" width="14" height="44"/><rect x="58" y="110" width="12" height="62"/><rect x="74" y="120" width="16" height="52"/><rect x="94" y="100" width="10" height="72"/><path d="M99 100v-12" stroke="#1c2340" stroke-width="2"/><rect x="108" y="124" width="18" height="48"/><rect x="130" y="116" width="12" height="56"/></g>' +
      /* hangar */
      '<path d="M210 172v-40q60-34 120 0v40z" fill="#4a5262"/><rect x="226" y="140" width="88" height="32" fill="#1c1f26"/><rect class="fs-flk" x="226" y="140" width="88" height="5" fill="#fff6c2" opacity=".7"/>' +
      txt("PRIVATE HANGAR", 270, 128, 8, CREAM, 'letter-spacing="2"') +
      /* the tower */
      '<rect x="356" y="96" width="12" height="76" fill="#6b7280"/><path d="M346 96h32l-4 -18h-24z" fill="#2f3a4c"/><rect x="350" y="82" width="24" height="10" fill="#9fd6ff" opacity=".8"/>' +
      '<g class="fs-beam"><path d="M362 74l-22 -46h44z" fill="#fff6c2" opacity=".22"/></g><circle class="fs-flk" cx="362" cy="74" r="3" fill="#fff"/>' +
      /* apron + runway */
      '<rect x="0" y="172" width="400" height="88" fill="#2b2d33"/><rect x="0" y="210" width="400" height="40" fill="#34373e"/>' +
      '<path d="M10 230h30M70 230h30M130 230h30M190 230h30M250 230h30M310 230h30M370 230h30" stroke="#e8e8e8" stroke-width="3"/>' + edge +
      /* the jet, gold and white, the chain of lights down its side */
      '<g class="fs-jet"><g transform="translate(200 0)">' +
        '<path d="M20 196q0-12 16-14h96q20 0 30 12l-6 4h-120q-16 0-16-2z" fill="#f2f2f0" stroke="#9aa0a8" stroke-width="1.5"/>' +
        '<path d="M132 182l18 -22h10l-8 24z" fill="#d6d9de"/><path d="M70 196l-22 16h14l30 -16z" fill="#c9ced6"/>' +
        [44, 56, 68, 80, 92, 104].map((x, i) => '<circle class="fs-bl fs-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="188" r="2.6" fill="' + [FIRE, ICE, GOLD][i % 3] + '"/>').join("") +
        '<path d="M24 190q6 -6 12 -6" stroke="#2a3240" stroke-width="3"/><circle cx="60" cy="202" r="4" fill="#111"/><circle cx="120" cy="202" r="4" fill="#111"/>' +
      '</g></g>' +
      txt("TETERBORO · PRIVATE AIRPORT", 180, 26, 11, CREAM, 'letter-spacing="3"') + tag("ELECTRIC ICE", 34, 80, 24, ICE, -4),
      sky("fst", "#03050f", "#1f2a52"));
  }

  /* 5. 164th St & Jamaica Av: green street signs, the wall tagged FREDRO STARR, the old First Presbyterian Church of Jamaica and its spire behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fsc)"/>' + stars(14) +
      /* the church: brownstone gothic nave, the tall spire */
      '<rect x="150" y="70" width="140" height="80" fill="#6a4a38"/><path d="M146 70l74 -36l74 36z" fill="#4b3427"/>' +
      '<rect x="96" y="62" width="44" height="88" fill="#73513d"/><path d="M92 62h52l-26 -18z" fill="#4b3427"/><path d="M100 44l18 -40l18 40z" fill="#5a3e2f"/><path d="M118 4v-4" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M110 90q8 -14 16 0v26h-16z" fill="#ffcf6b" opacity=".85" class="fs-bl"/>' +
      [166, 196, 226, 256].map(x => '<path d="M' + x + ' 124v-26q8 -14 16 0v26z" fill="#d9a33a" opacity=".8"/>').join("") +
      '<circle cx="220" cy="54" r="7" fill="#d9a33a" opacity=".85"/>' +
      txt("FIRST PRESBYTERIAN · JAMAICA", 220, 22, 9, CREAM, 'letter-spacing="2" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a3c43"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#30323a" stroke-width="1"/>'; return b; })() +
      tag("FREDRO STARR", 12, 192, 42, FIRE, -5) + tag("OPM", 36, 222, 22, ICE, -4) + tag("KOOL FREDRO", 150, 220, 17, GOLD, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="fs-car fs-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + FIRE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* pole + signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("164th St", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Jamaica Av", 346, 108, 12, "#fff") +
      '<circle class="fs-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("fsc", "#0b0a18", "#3a2430"));
  }

  window.SCENES = { busstop: busstop, navypier: navypier, bmore: bmore, teterboro: teterboro, corner: corner };
})();
