/* bankrollmafia scenes (Regions tab: Atlanta; Bankhead / English Avenue, the Westside). CSS classes and ids prefixed bm- (the page's own anim-train is kept).
   1 MARTA Vine City station (below grade, Blue + Green lines), the stop for English Avenue and the Bluff: train pulling in, black sign with BLUE + GREEN badges.
   2 T.I.'s Trap Music Museum, the brick warehouse on Travis St NW in Bankhead: the line out the door, string lights blinking.
   3 The "Out My Face" video set: a dark warehouse, the flaming skull glowing on the back wall, bankrolls stacked on deck.
   4 Bankhead Seafood on Donald Lee Hollowell Pkwy, the Westside fish house T.I. helped reopen in 2020: steam off the fish baskets.
   5 Travis St NW and Bankhead Ave NW, by the museum: green signs, BANKROLL MAFIA tagged, Midtown's skyline and the sail-topped tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmblink{0%,100%{opacity:1}50%{opacity:.25}}.bm-bl{animation:bmblink 1.3s ease-in-out infinite}.bm-bl2{animation-delay:-.65s}' +
    '@keyframes bmflick{0%,100%{transform:scaleY(1)}25%{transform:scaleY(1.12)}50%{transform:scaleY(.92)}75%{transform:scaleY(1.06)}}.bm-fl{transform-box:fill-box;transform-origin:50% 100%;animation:bmflick .7s ease-in-out infinite}.bm-fl2{animation-delay:-.35s}' +
    '@keyframes bmsteam{0%{transform:translateY(0);opacity:.0}30%{opacity:.7}100%{transform:translateY(-34px);opacity:0}}.bm-st{animation:bmsteam 2.4s ease-out infinite}.bm-st2{animation-delay:-.8s}.bm-st3{animation-delay:-1.6s}' +
    '@keyframes bmstep{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}.bm-step{animation:bmstep 2.6s ease-in-out infinite}.bm-step2{animation-delay:-1.3s}' +
    '@keyframes bmcar{from{transform:translateX(-120px)}to{transform:translateX(480px)}}.bm-car{animation:bmcar 6.5s linear infinite}' +
    '@keyframes bmtw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.bm-tw{transform-box:fill-box;transform-origin:50% 50%;animation:bmtw 1.8s ease-in-out infinite}.bm-tw2{animation-delay:-.6s}' +
    '@keyframes bmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bm-bob{animation:bmbob 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const MONEY = "#7ed957", RED = "#e63946", ICE = "#9fd8ff", WHITE = "#f4f4f4", BLUE = "#0075b2", GREEN = "#009d4b", GOLD = "#f5c542";
  const badge = (x, y, t, c) => '<rect x="' + x + '" y="' + (y - 11) + '" width="' + (t.length * 7 + 10) + '" height="15" rx="7" fill="' + c + '"/><text x="' + (x + (t.length * 7 + 10) / 2) + '" y="' + (y + 0.5) + '" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">' + t + '</text>';
  /* a bankroll: a green stack with a rubber band */
  const roll = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-14" y="-8" width="28" height="16" rx="2" fill="#5fae47" stroke="#2f5e2b" stroke-width="1.5"/><rect x="-14" y="-4" width="28" height="2" fill="#8fd27a"/><rect x="-3" y="-8" width="6" height="16" fill="' + RED + '"/></g>';
  /* a person in silhouette (no face) */
  const guy = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="#15151c"/><path d="M' + (x - 10) + ' ' + (y + 9) + 'h20l-2 30h-16z" fill="' + c + '"/><path d="M' + (x - 6) + ' ' + (y + 39) + 'v18M' + (x + 6) + ' ' + (y + 39) + 'v18" stroke="#15151c" stroke-width="6" stroke-linecap="round"/></g>';

  /* 1. MARTA Vine City station, below grade on the Blue + Green lines */
  function bmstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 50) + '" y="92" width="34" height="20" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="50" y="84" width="300" height="56" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="50" y="118" width="300" height="6" fill="#f08a24"/><rect x="50" y="126" width="300" height="4" fill="#1f5fa8"/>' +
      '<path d="M198 86v52" stroke="#6d757c" stroke-width="2"/><rect x="330" y="88" width="18" height="46" rx="4" fill="#aeb4ba"/><circle cx="340" cy="132" r="3.5" fill="#fff6c2"/>' +
      '<rect x="252" y="86" width="74" height="11" rx="2" fill="#111"/><text x="289" y="94.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">H. E. HOLMES</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm1)"/>' +
      /* concrete trench walls + ceiling beams of a below-grade station */
      '<rect x="0" y="0" width="400" height="30" fill="#4a4f57"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 80) + '" y="0" width="14" height="44" fill="#3a3f46"/>').join("") +
      '<rect class="bm-bl" x="40" y="32" width="60" height="4" fill="#fff3c4"/><rect class="bm-bl bm-bl2" x="170" y="32" width="60" height="4" fill="#fff3c4"/><rect class="bm-bl" x="300" y="32" width="60" height="4" fill="#fff3c4"/>' +
      '<rect x="0" y="44" width="400" height="40" fill="#8c8a84"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40 + 4) + '" y="50" width="32" height="28" fill="#9a978f" stroke="#7e7b74" stroke-width="1"/>').join("") +
      train +
      '<rect x="0" y="140" width="400" height="14" fill="#bdb9b0"/><rect x="0" y="138" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="154" width="400" height="106" fill="#77746d"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 154v106" stroke="#6a675f" stroke-width="2"/>').join("") +
      /* black station sign */
      '<rect x="70" y="168" width="260" height="40" rx="3" fill="#111"/><text x="86" y="195" ' + font + ' font-size="20" fill="#fff">Vine City</text>' +
      badge(200, 192, "BLUE", BLUE) + badge(248, 192, "GREEN", GREEN) +
      '<text x="200" y="226" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">ENGLISH AVENUE · THE BLUFF · THE WESTSIDE</text>',
      sky("bm1", "#5a6068", "#8e8b84"));
  }

  /* 2. The Trap Music Museum: the brick warehouse on Travis St NW */
  function bmmuseum() {
    const bulbs = Array.from({ length: 16 }, (_, i) => { const x = 20 + i * 24, y = 64 + Math.sin(i * 0.9) * 4; return '<circle class="bm-bl' + (i % 2 ? " bm-bl2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="3" fill="' + [GOLD, "#ff7ab8", ICE][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bm2)"/>' +
      /* brick warehouse */
      '<rect x="0" y="50" width="400" height="160" fill="#8a4b36"/>' + Array.from({ length: 16 }, (_, r) => '<path d="M0 ' + (54 + r * 10) + 'h400" stroke="#6e3a29" stroke-width="1"/>').join("") +
      '<rect x="0" y="44" width="400" height="10" fill="#5a3226"/>' +
      '<path d="M8 66q192 18 384 0" stroke="#222" stroke-width="1.2" fill="none"/>' + bulbs +
      '<rect x="100" y="80" width="200" height="30" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="101" text-anchor="middle" ' + font + ' font-size="15" fill="' + WHITE + '">TRAP MUSIC MUSEUM</text>' +
      /* rolled-up loading door, glowing pink inside */
      '<rect x="150" y="124" width="100" height="86" fill="#ff7ab8" opacity=".85"/><rect x="150" y="118" width="100" height="10" fill="#4a4f57"/>' + Array.from({ length: 3 }, (_, i) => '<path d="M150 ' + (122 + i * 3) + 'h100" stroke="#33373d" stroke-width="1"/>').join("") +
      '<rect x="30" y="124" width="70" height="44" fill="#2a2e35" stroke="#5a3226" stroke-width="3"/><rect x="300" y="124" width="70" height="44" fill="#2a2e35" stroke="#5a3226" stroke-width="3"/>' +
      '<text x="65" y="151" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">TRAVIS ST NW</text><text x="335" y="151" text-anchor="middle" ' + font + ' font-size="9" fill="' + ICE + '">BANKHEAD</text>' +
      /* the line out the door */
      '<rect x="0" y="210" width="400" height="50" fill="#6f6c66"/><rect x="0" y="208" width="400" height="4" fill="#d8d2c4"/>' +
      guy(40, 176, MONEY, "bm-step") + guy(72, 178, WHITE, "bm-step bm-step2") + guy(104, 176, RED, "bm-step") + guy(290, 178, ICE, "bm-step bm-step2") + guy(326, 176, GOLD, "bm-step") + guy(360, 178, WHITE, "bm-step bm-step2"),
      sky("bm2", "#1c1a3a", "#e0885a"));
  }

  /* 3. The "Out My Face" warehouse set: flaming skull on the back wall, bankrolls on deck */
  function bmwarehouse() {
    const flame = (x, s, cls) => '<g transform="translate(' + x + ' 70) scale(' + s + ')"><path class="bm-fl ' + (cls || "") + '" d="M-10 0q-14 -18 -4 -36q2 12 8 14q-2 -16 8 -26q-2 20 8 30q6 -8 4 -18q12 14 2 36z" fill="#ff8a1f"/><path d="M-4 0q-6 -10 0 -18q4 8 8 0q4 10 0 18z" fill="#ffd34a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm3)"/>' +
      /* warehouse roof trusses + hanging lamps */
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (i * 100) + ' 0l50 30l50 -30" stroke="#2d2f36" stroke-width="4" fill="none"/>').join("") +
      [80, 320].map(x => '<path d="M' + x + ' 0v26" stroke="#2d2f36" stroke-width="2"/><path d="M' + (x - 12) + ' 38l12 -12l12 12z" fill="#3a3d45"/><path class="bm-bl" d="M' + (x - 12) + ' 38l-30 120h84l-30 -120z" fill="#fff3c4" opacity=".08"/>').join("") +
      /* flaming skull glow on the back wall */
      '<circle cx="200" cy="96" r="70" fill="#ff8a1f" opacity=".12"/>' +
      flame(176, 1.1) + flame(200, 1.4, "bm-fl2") + flame(224, 1.1) +
      '<g transform="translate(200 104)"><path d="M-30 -6q0 -34 30 -34q30 0 30 34q0 16 -10 22v12h-40v-12q-10 -6 -10 -22z" fill="#efe6d2"/>' +
      '<ellipse cx="-12" cy="-4" rx="9" ry="10" fill="#1a1416"/><ellipse cx="12" cy="-4" rx="9" ry="10" fill="#1a1416"/><path d="M0 6l-5 9h10z" fill="#1a1416"/>' +
      '<path d="M-14 22v6M-5 22v6M5 22v6M14 22v6" stroke="#1a1416" stroke-width="2.5"/></g>' +
      /* the deck table with bankrolls */
      '<rect x="0" y="176" width="400" height="84" fill="#26282e"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 176v84" stroke="#202227" stroke-width="2"/>').join("") +
      '<rect x="70" y="160" width="260" height="14" rx="2" fill="#4a3426"/><rect x="84" y="174" width="10" height="42" fill="#3a281d"/><rect x="306" y="174" width="10" height="42" fill="#3a281d"/>' +
      '<g class="bm-bob">' + roll(110, 152) + roll(140, 152) + roll(125, 138) + roll(260, 152) + roll(290, 152) + roll(275, 138) + roll(200, 152, 1.2) + roll(200, 134, 1.2) + '</g>' +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#111" stroke="' + MONEY + '" stroke-width="2"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="' + WHITE + '">BANKROLLS ON DECK</text>',
      sky("bm3", "#0c0c10", "#2a1a14"));
  }

  /* 4. Bankhead Seafood on Donald Lee Hollowell Pkwy */
  function bmseafood() {
    const fish = (x, y, s, c) => '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M-20 0q14 -14 32 0q-18 14 -32 0zM12 0l12 -9v18z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm4)"/>' +
      /* low block building, white with red trim */
      '<rect x="40" y="70" width="320" height="140" fill="#f1ede4"/><rect x="40" y="62" width="320" height="12" fill="' + RED + '"/>' +
      '<rect x="70" y="20" width="260" height="40" rx="4" fill="#0f2f4a" stroke="' + WHITE + '" stroke-width="2"/>' + fish(98, 40, 0.5, ICE) + fish(302, 40, 0.5, ICE) +
      '<text x="200" y="45" text-anchor="middle" ' + font + ' font-size="15" fill="' + WHITE + '">BANKHEAD SEAFOOD</text>' +
      '<rect x="60" y="96" width="110" height="60" fill="#2a3442" stroke="' + RED + '" stroke-width="3"/><rect x="230" y="96" width="110" height="60" fill="#2a3442" stroke="' + RED + '" stroke-width="3"/>' +
      '<text x="115" y="122" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">FRIED FISH</text><text x="115" y="138" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BISCUITS</text>' +
      '<text x="285" y="122" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '">SINCE THE</text><text x="285" y="138" text-anchor="middle" ' + font + ' font-size="10" fill="' + ICE + '">SIXTIES</text>' +
      '<rect x="180" y="104" width="40" height="106" fill="#5a3a2a"/><circle cx="212" cy="160" r="2.5" fill="' + GOLD + '"/>' +
      /* sidewalk counter with baskets + steam */
      '<rect x="0" y="210" width="400" height="50" fill="#8a867c"/><rect x="0" y="208" width="400" height="4" fill="#d8d2c4"/>' +
      [110, 200, 290].map((x, i) => '<path d="M' + (x - 26) + ' 214h52l-6 18h-40z" fill="#c8202e"/><path d="M' + (x - 26) + ' 214h52" stroke="' + WHITE + '" stroke-width="3" stroke-dasharray="6 6"/>' +
        fish(x - 6, 210, 0.6, "#d9a04a") + fish(x + 8, 208, 0.55, "#e0aa55") +
        '<path class="bm-st' + (i === 1 ? " bm-st2" : i === 2 ? " bm-st3" : "") + '" d="M' + (x - 6) + ' 202q-6 -8 0 -16q6 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>').join("") +
      '<rect x="0" y="240" width="400" height="20" fill="#3e3e44"/><path d="M0 250h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("bm4", "#8ec8ef", "#f6dcc0"));
  }

  /* 5. Travis St NW and Bankhead Ave NW, Midtown behind */
  function bmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bm5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      /* Midtown skyline with the sail-topped tower */
      '<g fill="#2e3048"><rect x="20" y="96" width="26" height="40"/><rect x="50" y="84" width="22" height="52"/><rect x="200" y="90" width="24" height="46"/><rect x="232" y="76" width="20" height="60"/><rect x="256" y="100" width="30" height="36"/></g>' +
      '<path d="M112 136v-74l22 -26v100z" fill="#3a4a6a"/><path d="M134 36v100h10v-86z" fill="#2e3b56"/><path class="bm-bl" d="M122 70v60" stroke="' + ICE + '" stroke-width="1.5" opacity=".6"/>' +
      '<rect x="160" y="70" width="26" height="66" fill="#2e3048"/><path d="M160 70l13 -14l13 14z" fill="#2e3048"/>' +
      '<rect x="0" y="134" width="400" height="90" fill="#4a4f5c"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#3f4450" stroke-width="1"/>').join("") +
      tag("BANKROLL", 14, 180, 32, MONEY, -5) + tag("MAFIA", 40, 216, 32, WHITE, -5) + tag("ON DECK", 160, 214, 18, GOLD, -4) + tag("NEG 4", 196, 176, 16, ICE, -6) +
      '<g class="bm-tw"><path d="M300 186l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + WHITE + '"/></g><g class="bm-tw bm-tw2"><path d="M134 192l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="' + MONEY + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="bm-car"><rect x="0" y="232" width="74" height="16" rx="6" fill="#d7dbe0"/><rect x="12" y="226" width="42" height="10" rx="4" fill="#9aa3ad"/><circle cx="14" cy="249" r="6" fill="#222"/><circle cx="60" cy="249" r="6" fill="#222"/><circle cx="72" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(268, 92, 128, "Travis St NW") + sign(268, 118, 128, "Bankhead Ave NW"),
      sky("bm5", "#1a2050", "#e08a4a"));
  }

  window.SCENES = { bmstation: bmstation, bmmuseum: bmmuseum, bmwarehouse: bmwarehouse, bmseafood: bmseafood, bmcorner: bmcorner };
})();
