/* chingy scenes (Regions tab: St. Louis + Ohio; Walnut Park, North St. Louis - the "Bad Blocks"). CSS classes and ids prefixed ch- (the page's own anim-train slides the bus in).
   1 MetroBus 74 Florissant pulling up to the West Florissant / Emerson stop at the edge of Walnut Park (no rail out here): the bus, the stop sign, red-brick two-family flats.
   2 The jackpot (Slot-A-Lot Records, his own label; debut album "Jackpot"): a slot machine, lights chasing, reels spinning, coins spilling.
   3 The Old Chain of Rocks Bridge over the Mississippi on the North Side: the steel truss with its famous bend, the castle-like water intake towers in the river, a barge.
   4 The street race ("Gettin' It" rode on the 2 Fast 2 Furious soundtrack): two tuned cars with underglow tearing down a night street, a checkered flag waving.
   5 W Florissant Ave and Riverview Blvd in Walnut Park: green signs, CHINGY tagged on the brick, the old green copper dome on Emerson Ave behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes chglow{0%,100%{opacity:.35}50%{opacity:1}}.ch-glow{animation:chglow 1.6s ease-in-out infinite}.ch-g2{animation-delay:-.8s}.ch-g3{animation-delay:-.4s}' +
    '@keyframes chreel{from{transform:translateY(0)}to{transform:translateY(-120px)}}.ch-reel{animation:chreel .5s linear infinite}.ch-r2{animation-duration:.6s}.ch-r3{animation-duration:.42s}' +
    '@keyframes chcoin{0%{transform:translateY(0);opacity:1}100%{transform:translateY(40px);opacity:0}}.ch-coin{animation:chcoin 1.2s ease-in infinite}.ch-c2{animation-delay:.4s}.ch-c3{animation-delay:.8s}' +
    '@keyframes chbarge{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.ch-barge{animation:chbarge 16s linear infinite}' +
    '@keyframes chwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.ch-wave{animation:chwave 3s ease-in-out infinite}' +
    '@keyframes chrace{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.ch-race{animation:chrace 2.4s linear infinite}.ch-race2{animation-duration:2.7s;animation-delay:-.6s}' +
    '@keyframes chflag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.ch-flag{transform-box:fill-box;transform-origin:0% 50%;animation:chflag .6s ease-in-out infinite}' +
    '@keyframes chsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ch-sp{animation:chsp 1.4s ease-out infinite}.ch-sp2{animation-delay:.45s}' +
    '@keyframes chbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.ch-bird{animation:chbird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#ffd23f", PINK = "#e0245e", CYAN = "#3ec1f3", BUS = "#00539f";

  /* red-brick St. Louis two-family flat */
  const flat = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="86" height="' + (150 - y + 40) + '" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (y - 6) + '" width="92" height="8" fill="#5a2a1e"/>' +
    [0, 1].map(r => [0, 1, 2].map(k => '<rect x="' + (x + 10 + k * 25) + '" y="' + (y + 12 + r * 40) + '" width="16" height="24" fill="#2b2e3a"/><rect x="' + (x + 8 + k * 25) + '" y="' + (y + 10 + r * 40) + '" width="20" height="4" fill="#d9cdb8"/>').join("")).join("");

  /* 1. MetroBus 74 Florissant at the West Florissant / Emerson stop */
  function chstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="78" rx="10" fill="#f4f4f2" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="40" y="186" width="300" height="10" fill="' + BUS + '"/><rect x="40" y="196" width="300" height="4" fill="#d6293a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 40) + '" y="140" width="32" height="30" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="300" y="138" width="36" height="46" rx="4" fill="#1d262e"/><rect x="298" y="129" width="40" height="8" rx="2" fill="#111"/>' +
      '<text x="318" y="135.5" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="5.2" fill="#ffb02e" class="ch-glow">74 FLORISSANT</text>' +
      '<rect x="248" y="140" width="40" height="56" rx="2" fill="#2b3640"/><path d="M268 140v56" stroke="#8a8f96" stroke-width="2"/>' +
      '<circle cx="90" cy="206" r="13" fill="#1a1a1a"/><circle cx="90" cy="206" r="5" fill="#888"/><circle cx="290" cy="206" r="13" fill="#1a1a1a"/><circle cx="290" cy="206" r="5" fill="#888"/>' +
      '<circle cx="334" cy="192" r="4" fill="#fff6c2"/><rect x="340" y="150" width="6" height="16" rx="2" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ch1)"/>' +
      '<g class="ch-bird"><path d="M0 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      flat(4, 62, "#9a4632") + flat(98, 70, "#8a3e2c") + flat(192, 58, "#a54e36") + flat(286, 66, "#93432f") +
      '<rect x="0" y="190" width="400" height="18" fill="#bdb7ac"/><rect x="0" y="206" width="400" height="54" fill="#3a3a40"/>' +
      '<path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      bus +
      /* stop pole and sign */
      '<rect x="370" y="104" width="4" height="96" fill="#555"/><rect x="352" y="86" width="40" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="372" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text><text x="372" y="116" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">74</text>' +
      '<rect x="4" y="214" width="170" height="38" rx="3" fill="#111"/><text x="14" y="230" ' + font + ' font-size="12" fill="#fff">W Florissant / Emerson</text><text x="14" y="245" ' + font + ' font-size="9" fill="#c8c8c8">WALNUT PARK · NORTH ST. LOUIS</text>',
      sky("ch1", "#8fc7ee", "#f5ead6"));
  }

  /* 2. The jackpot: slot machine, chasing lights, spinning reels, coins */
  function chslots() {
    const sym = ['<circle cx="0" cy="0" r="9" fill="' + PINK + '"/><circle cx="7" cy="4" r="7" fill="' + PINK + '"/><path d="M0 -9q4 -10 10 -10" stroke="#2e8a54" stroke-width="2" fill="none"/>',
      '<rect x="-12" y="-6" width="24" height="12" rx="2" fill="#1d1d22"/><text x="0" y="4" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">BAR</text>',
      '<text x="0" y="10" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="' + PINK + '">7</text>',
      '<path d="M0 -12l3.5 8h8.5l-7 5l3 8.5l-8 -5.5l-8 5.5l3 -8.5l-7 -5h8.5z" fill="' + GOLD + '"/>'];
    const reel = (x, cls, k) => '<g clip-path="url(#chwin)"><g transform="translate(' + x + ' 0)"><g class="ch-reel ' + cls + '">' +
      Array.from({ length: 8 }, (_, i) => '<g transform="translate(0 ' + (100 + i * 30) + ')">' + sym[(i + k) % 4] + '</g>').join("") + '</g></g></g>';
    const bulbs = Array.from({ length: 18 }, (_, i) => { const t = Math.PI + i / 17 * Math.PI; return '<circle class="ch-glow' + (i % 3 === 1 ? " ch-g2" : i % 3 === 2 ? " ch-g3" : "") + '" cx="' + (200 + Math.cos(t) * 94).toFixed(1) + '" cy="' + (60 + Math.sin(t) * 28).toFixed(1) + '" r="3.5" fill="' + (i % 2 ? GOLD : "#fff") + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ch2)"/>' +
      /* carpet */
      '<rect x="0" y="210" width="400" height="50" fill="#5a1a3a"/>' + Array.from({ length: 12 }, (_, i) => '<circle cx="' + (16 + i * 34) + '" cy="' + (226 + (i % 2) * 16) + '" r="5" fill="none" stroke="' + GOLD + '" stroke-width="1.5" opacity=".5"/>').join("") +
      /* cabinet */
      '<rect x="110" y="56" width="180" height="160" rx="10" fill="#b8202e" stroke="#6a0f18" stroke-width="3"/>' +
      '<path d="M100 56q100 -60 200 0z" fill="#d32f3f" stroke="#6a0f18" stroke-width="3"/>' + bulbs +
      '<rect x="150" y="26" width="100" height="20" rx="4" fill="#1d1d22"/><text x="200" y="41" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" fill="' + GOLD + '" class="ch-glow">JACKPOT</text>' +
      /* reel window */
      '<rect x="128" y="80" width="144" height="64" rx="5" fill="#fff" stroke="#c9a24a" stroke-width="4"/>' +
      reel(152, "", 0) + reel(200, "ch-r2", 1) + reel(248, "ch-r3", 2) +
      '<path d="M176 80v64M224 80v64" stroke="#c9a24a" stroke-width="2"/><path d="M128 112h144" stroke="' + PINK + '" stroke-width="1.5" opacity=".5"/>' +
      /* lever */
      '<rect x="292" y="96" width="14" height="10" rx="3" fill="#888"/><path d="M304 100l22 -46" stroke="#c8c8c8" stroke-width="6" stroke-linecap="round"/><circle cx="327" cy="50" r="10" fill="' + PINK + '"/>' +
      /* coin tray + coins */
      '<rect x="140" y="160" width="120" height="12" rx="3" fill="#1d1d22"/><rect x="150" y="190" width="100" height="22" rx="4" fill="#c9a24a" stroke="#7a5a1a" stroke-width="2"/>' +
      [170, 196, 222].map((x, i) => '<ellipse class="ch-coin' + (i ? " ch-c" + (i + 1) : "") + '" cx="' + x + '" cy="172" rx="7" ry="4" fill="' + GOLD + '" stroke="#8a6a12" stroke-width="1"/>').join("") +
      '<g fill="' + GOLD + '" stroke="#8a6a12" stroke-width="1"><ellipse cx="166" cy="198" rx="8" ry="4"/><ellipse cx="184" cy="200" rx="8" ry="4"/><ellipse cx="204" cy="197" rx="8" ry="4"/><ellipse cx="226" cy="200" rx="8" ry="4"/></g>',
      sky("ch2", "#1a0820", "#3a1030") + '<clipPath id="chwin"><rect x="130" y="82" width="140" height="60"/></clipPath>');
  }

  /* 3. Old Chain of Rocks Bridge: truss with the bend, the castle intake towers, a barge */
  function chchainrocks() {
    const truss = (x1, y1, x2, y2, n) => { let s = '<path d="M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2 + '" stroke="#6f7a80" stroke-width="4"/><path d="M' + x1 + ' ' + (y1 - 22) + 'L' + x2 + ' ' + (y2 - 22) + '" stroke="#6f7a80" stroke-width="3"/>';
      for (let i = 0; i <= n; i++) { const x = x1 + (x2 - x1) * i / n, y = y1 + (y2 - y1) * i / n, xn = x1 + (x2 - x1) * (i + 1) / n, yn = y1 + (y2 - y1) * (i + 1) / n;
        s += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'v-22" stroke="#6f7a80" stroke-width="2"/>'; if (i < n) s += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'L' + xn.toFixed(1) + ' ' + (yn - 22).toFixed(1) + '" stroke="#7d888e" stroke-width="1.5"/>'; }
      return s; };
    const tower = (x, s) => '<g transform="translate(' + x + ' 150) scale(' + s + ')"><rect x="-16" y="-44" width="32" height="54" fill="#d9cfbc" stroke="#8a806c" stroke-width="1.5"/>' +
      '<path d="M-20 -44h40v-6h-6v4h-6v-4h-6v4h-4v-4h-6v4h-6v-4h-6z" fill="#d9cfbc" stroke="#8a806c" stroke-width="1.2"/><rect x="-5" y="-30" width="10" height="14" rx="5" fill="#3a3a44"/><rect x="-12" y="-6" width="6" height="8" fill="#3a3a44"/><rect x="6" y="-6" width="6" height="8" fill="#3a3a44"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ch3)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#ffd9a0" opacity=".9"/>' +
      /* far Illinois bank */
      '<path d="M0 128q100 -10 200 -4t200 -2v14H0z" fill="#4e6a3e"/>' +
      /* river */
      '<rect x="0" y="134" width="400" height="126" fill="#6a7f86"/><g class="ch-wave">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 32) + ' ' + (150 + (i % 4) * 22) + 'q8 -4 16 0" stroke="#c8d6da" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>' +
      tower(70, 1) + tower(122, .8) +
      /* bridge: piers, deck, truss bending in the middle */
      [168, 236, 300, 360].map(x => '<rect x="' + (x - 5) + '" y="' + (x < 250 ? 106 : 98) + '" width="10" height="' + (x < 250 ? 34 : 42) + '" fill="#9a9284"/>').join("") +
      truss(150, 108, 250, 104, 6) + truss(250, 104, 400, 92, 8) +
      '<path d="M150 108L250 104L400 92" stroke="#5a6468" stroke-width="5" fill="none"/>' +
      /* barge */
      '<g class="ch-barge"><rect x="0" y="196" width="120" height="16" fill="#4a3a2a"/><rect x="0" y="190" width="120" height="8" fill="#8a6a3a"/><rect x="120" y="184" width="30" height="28" fill="#c8c8c8"/><rect x="126" y="176" width="18" height="10" fill="#3a3a44"/></g>' +
      '<rect x="8" y="226" width="178" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="97" y="243" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CHAIN OF ROCKS BRIDGE</text>',
      sky("ch3", "#e9a25a", "#f7dcb0"));
  }

  /* 4. The street race at night: two tuned cars with underglow, checkered flag */
  function chrace() {
    const car = (y, body, glow, cls) => '<g class="' + cls + '"><ellipse cx="80" cy="' + (y + 26) + '" rx="78" ry="7" fill="' + glow + '" opacity=".55" class="ch-glow"/>' +
      '<path d="M0 ' + (y + 20) + 'q4 -14 30 -16l26 -14h52l30 14q24 2 22 16v6H0z" fill="' + body + '" stroke="#111" stroke-width="2"/>' +
      '<path d="M62 ' + (y - 6) + 'h42l20 12H50z" fill="#1d262e"/><path d="M150 ' + (y + 8) + 'h12" stroke="#fff6c2" stroke-width="4"/>' +
      '<circle cx="34" cy="' + (y + 26) + '" r="10" fill="#111"/><circle cx="34" cy="' + (y + 26) + '" r="4" fill="#c8c8c8"/><circle cx="128" cy="' + (y + 26) + '" r="10" fill="#111"/><circle cx="128" cy="' + (y + 26) + '" r="4" fill="#c8c8c8"/>' +
      '<path d="M-40 ' + (y + 6) + 'h30M-60 ' + (y + 14) + 'h40" stroke="#fff" stroke-width="2" opacity=".5"/></g>';
    const checks = Array.from({ length: 24 }, (_, i) => '<rect x="' + ((i % 6) * 8) + '" y="' + (Math.floor(i / 6) * 8) + '" width="8" height="8" fill="' + ((i + Math.floor(i / 6)) % 2 ? "#111" : "#fff") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ch4)"/>' +
      /* night city with neon */
      '<g fill="#1d1630">' + [0, 44, 80, 130, 176, 220, 268, 316, 356].map((x, i) => '<rect x="' + x + '" y="' + (40 + (i * 23) % 50) + '" width="' + (36 + (i % 3) * 6) + '" height="120"/>').join("") + '</g>' +
      Array.from({ length: 26 }, (_, i) => '<rect class="' + (i % 4 ? "" : "ch-glow") + '" x="' + (6 + (i * 41) % 390) + '" y="' + (70 + (i * 17) % 70) + '" width="4" height="5" fill="#ffe7a8" opacity=".7"/>').join("") +
      '<rect class="ch-glow" x="40" y="96" width="60" height="4" fill="' + CYAN + '"/><rect class="ch-glow ch-g2" x="250" y="88" width="80" height="4" fill="' + PINK + '"/>' +
      /* road */
      '<rect x="0" y="150" width="400" height="110" fill="#26262c"/><path d="M0 204h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      car(160, "#2f6fd0", CYAN, "ch-race") + car(214, "#d8a21a", PINK, "ch-race ch-race2") +
      /* flagger's flag */
      '<rect x="356" y="96" width="4" height="64" fill="#888"/><g transform="translate(360 96)"><g class="ch-flag">' + checks + '</g></g>',
      sky("ch4", "#07040f", "#2a1240"));
  }

  /* 5. W Florissant Ave and Riverview Blvd in Walnut Park: green signs, CHINGY tagged, the green copper dome behind */
  function chcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ch5)"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="' + (i % 4 ? "" : "ch-glow") + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 47) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      /* the old orphanage building with its copper dome */
      '<rect x="120" y="80" width="150" height="54" fill="#b0603e"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (130 + i * 23) + '" y="94" width="10" height="16" fill="#ffe7a8" opacity=".55"/>').join("") +
      '<rect x="176" y="62" width="38" height="20" fill="#c87a52"/><path d="M172 64q23 -40 46 0z" fill="#5fa58e" stroke="#2f6a58" stroke-width="2"/><path d="M182 62q13 -30 26 0" fill="none" stroke="#9fdcc6" stroke-width="2" opacity=".6"/>' +
      '<rect x="193" y="18" width="4" height="8" fill="#5fa58e"/><circle cx="195" cy="16" r="3" fill="#5fa58e"/>' +
      /* trees */
      '<g fill="#1d3426"><circle cx="40" cy="110" r="30"/><circle cx="84" cy="118" r="20"/><circle cx="314" cy="116" r="22"/><circle cx="360" cy="108" r="30"/></g>' +
      /* brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#8a4430"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#72351f" stroke-width="1"/>').join("") +
      tag("SLOT-A-LOT", 18, 152, 15, GOLD, -3) + tag("CHINGY", 22, 202, 50, PINK, -6) + tag("RIGHT THURR", 210, 172, 16, "#fff", -4) + tag("CHING-A-LING", 132, 218, 14, CYAN, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="ch-race"><rect x="0" y="232" width="70" height="18" rx="5" fill="' + CYAN + '"/><rect x="12" y="225" width="42" height="11" rx="3" fill="#2a3442"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      '<rect x="356" y="86" width="6" height="138" fill="#2f2f2f"/>' + sign(234, 88, 152, "W Florissant Ave") + sign(258, 114, 128, "Riverview Blvd") +
      '<g class="ch-sp"><circle cx="196" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="ch-sp ch-sp2"><circle cx="202" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("ch5", "#151438", "#c8603a"));
  }

  window.SCENES = { chstation: chstation, chslots: chslots, chchainrocks: chchainrocks, chrace: chrace, chcorner: chcorner };
})();
