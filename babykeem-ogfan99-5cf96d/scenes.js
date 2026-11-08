/* babykeem scenes (Regions tab: Los Angeles + SoCal; born in Carson, raised in Las Vegas). CSS classes and ids prefixed bk- (the page's own anim-train is kept on the bus).
   1 RTC Route 110 pulling up at Northbound Eastern after Fremont (East Las Vegas; he walked Eastern and Fremont with his grandma Sharon): bus shelter, palms, desert dusk.
   2 Cashman Field, the ballpark behind Cashman Center (he grew up in apartments on E Harris Ave behind it): light towers, the diamond, a ball arcing out.
   3 The slot machine (Ca$ino: "That slot machine that nobody help", the album opens on a lever pull): the arm pulls, the reels spin, chips drop in the tray.
   4 The pink-and-white big top on the Strip (Circus Circus Free$tyle): the striped tent roof, flags waving, a trapeze swinging under the night sky.
   5 E Washington Ave and N Maryland Pkwy by Cashman Center: green signs, KEEM tagged on the stucco, the wavy steel Lou Ruvo Center roof downtown behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bk-flk{animation:bkflick 2.2s infinite}.bk-flk2{animation-delay:.7s}' +
    '@keyframes bkblink{0%,100%{opacity:.25}50%{opacity:1}}.bk-bl{animation:bkblink 1s steps(1) infinite}.bk-bl2{animation-delay:.5s}' +
    '@keyframes bkfly{0%{transform:translate(0,0)}100%{transform:translate(150px,-120px);opacity:0}}.bk-ball{animation:bkfly 2.4s ease-out infinite}' +
    '@keyframes bkarm{0%,60%,100%{transform:rotate(0)}20%,40%{transform:rotate(38deg)}}.bk-arm{transform-box:fill-box;transform-origin:50% 100%;animation:bkarm 3s ease-in-out infinite}' +
    '@keyframes bkreel{from{transform:translateY(0)}to{transform:translateY(-120px)}}.bk-reel{animation:bkreel .6s linear infinite}.bk-reel2{animation-duration:.5s}.bk-reel3{animation-duration:.7s}' +
    '@keyframes bkdrop{0%{transform:translateY(-30px);opacity:0}30%{opacity:1}100%{transform:translateY(20px);opacity:1}}.bk-chip{animation:bkdrop 1.5s ease-in infinite}.bk-chip2{animation-delay:.5s}.bk-chip3{animation-delay:1s}' +
    '@keyframes bkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.bk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:bkflag 1.2s ease-in-out infinite}.bk-flag2{animation-delay:-.6s}' +
    '@keyframes bkswing{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.bk-tra{transform-box:fill-box;transform-origin:50% 0%;animation:bkswing 2.4s ease-in-out infinite}' +
    '@keyframes bktw{0%,100%{opacity:.2}50%{opacity:1}}.bk-st{animation:bktw 2.6s ease-in-out infinite}.bk-st2{animation-delay:-1.3s}' +
    '@keyframes bkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bk-sp{animation:bkspray 1.4s ease-out infinite}.bk-sp2{animation-delay:.45s}' +
    '@keyframes bkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bk-car{animation:bkcar 7s linear infinite}' +
    '@keyframes bkpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bk-palm{transform-box:fill-box;transform-origin:50% 100%;animation:bkpalm 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="bk-palm' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#3b2a1c" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-20, 8], [24, -4], [18, 10], [0, -16]].map(d => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 10) + ' ' + d[0] + ' ' + (d[1] + 4) + '" stroke="#1f4a2a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const mountains = (y, c) => '<path d="M0 ' + y + 'l40 -26 30 14 46 -34 40 24 34 -12 50 28 40 -30 44 22 36 -16 40 30V' + (y + 30) + 'H0z" fill="' + c + '"/>';
  const BLUE = "#3fa9ff", GOLD = "#f5c542", RED = "#e0475b", RTC = "#005daa";

  /* 1. RTC Route 110 at Eastern and Fremont */
  function bkstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 40) + '" y="128" width="32" height="24" rx="3" fill="#1d2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="114" width="300" height="76" rx="10" fill="#f4f6f8" stroke="#7a828c" stroke-width="2"/>' + win +
      '<path d="M40 160h300v10H40z" fill="' + RTC + '"/><path d="M40 172h300v5H40z" fill="#7ac143"/>' +
      '<rect x="306" y="124" width="30" height="40" rx="4" fill="#24303d"/><rect x="250" y="117" width="84" height="12" rx="2" fill="#111"/>' +
      '<text x="292" y="126.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#ffb347">110 EASTERN</text>' +
      '<circle cx="90" cy="190" r="13" fill="#222"/><circle cx="90" cy="190" r="5" fill="#888"/><circle cx="290" cy="190" r="13" fill="#222"/><circle cx="290" cy="190" r="5" fill="#888"/>' +
      '<circle cx="334" cy="178" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks1)"/>' +
      '<circle cx="320" cy="58" r="22" fill="#ffcf7a" opacity=".85"/>' + mountains(108, "#6b4a6e") + mountains(118, "#4b3555") +
      palm(26, 196, 90) + palm(372, 196, 80, " bk-flk2") +
      '<rect x="0" y="196" width="400" height="64" fill="#545454"/><path d="M0 228h400" stroke="#d9c25a" stroke-width="3" stroke-dasharray="22 16"/>' +
      '<rect x="0" y="192" width="400" height="6" fill="#bdb3a3"/>' +
      bus +
      '<rect x="356" y="98" width="5" height="98" fill="#333"/><rect x="342" y="78" width="34" height="26" rx="3" fill="' + RTC + '" stroke="#fff" stroke-width="1.5"/><text x="359" y="89" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RTC</text><text x="359" y="100" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">110</text>' +
      '<rect x="70" y="206" width="262" height="40" rx="3" fill="#111"/><text x="84" y="223" ' + font + ' font-size="13" fill="#fff">Eastern Av &amp; Fremont St</text><text x="84" y="239" ' + font + ' font-size="9.5" fill="#bbb">NORTHBOUND  EAST LAS VEGAS</text>' + badge(282, 226, "110", RTC),
      sky("bks1", "#2b2350", "#f2955a"));
  }

  /* 2. Cashman Field */
  function bkcashman() {
    const tower = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="96" fill="#555"/><rect x="' + (x - 18) + '" y="26" width="36" height="16" rx="2" fill="#333"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="bk-flk' + (i % 2 ? " bk-flk2" : "") + '" cx="' + (x - 14 + i * 5.6) + '" cy="34" r="2.4" fill="#fffbe0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bks2)"/>' +
      mountains(118, "#2d2a44") +
      '<path d="M0 136h400v20H0z" fill="#3a4a5c"/>' + Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10) + '" y="139" width="6" height="4" fill="' + ["#c9d3dc", "#e0475b", "#3fa9ff"][i % 3] + '" opacity=".7"/>').join("") +
      tower(60) + tower(340) +
      '<path d="M0 156h400v104H0z" fill="#2f7d3b"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 50) + ' 156l25 104" stroke="#2a7035" stroke-width="18" opacity=".5"/>').join("") +
      '<path d="M200 178l70 40-70 40-70-40z" fill="#c98a55"/><path d="M200 196l38 22-38 22-38-22z" fill="#2f7d3b"/>' +
      '<rect x="196" y="214" width="8" height="8" fill="#fff"/><rect x="266" y="214" width="7" height="7" fill="#fff"/><rect x="127" y="214" width="7" height="7" fill="#fff"/><rect x="196" y="176" width="7" height="7" fill="#fff"/>' +
      '<circle cx="200" cy="218" r="7" fill="#d39a63"/>' +
      '<g class="bk-ball"><circle cx="200" cy="200" r="4" fill="#fff" stroke="#c33" stroke-width="1"/></g>' +
      '<rect x="150" y="64" width="100" height="40" rx="3" fill="#1a1a1a" stroke="#666" stroke-width="2"/><text x="200" y="82" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">CASHMAN FIELD</text>' +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="10" fill="#ff8a3d" class="bk-bl">HOME  0  0  1</text>',
      sky("bks2", "#0b1026", "#23305a"));
  }

  /* 3. The slot machine */
  function bkslots() {
    const sym = ['<text x="0" y="0" text-anchor="middle" ' + font + ' font-size="30" fill="' + RED + '">7</text>',
      '<path d="M-10 -20l10 -12 10 12-10 12z" fill="' + BLUE + '" transform="translate(0,8)"/>',
      '<circle cx="-6" cy="-10" r="7" fill="' + RED + '"/><circle cx="6" cy="-10" r="7" fill="' + RED + '"/><path d="M-6 -16q6 -14 12 -16" stroke="#2f7d3b" stroke-width="3" fill="none"/>',
      '<path d="M0 -34l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" fill="' + GOLD + '" transform="translate(0,10)"/>'];
    const reel = (x, cls) => '<g clip-path="url(#bkclip' + x + ')"><g class="bk-reel ' + cls + '">' +
      Array.from({ length: 8 }, (_, i) => '<g transform="translate(' + x + ',' + (118 + i * 30) + ')">' + sym[i % 4] + '</g>').join("") + '</g></g>';
    const clip = x => '<clipPath id="bkclip' + x + '"><rect x="' + (x - 22) + '" y="84" width="44" height="52"/></clipPath>';
    return svg(
      '<rect width="400" height="260" fill="url(#bks3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle class="bk-bl' + (i % 2 ? " bk-bl2" : "") + '" cx="' + (20 + (i % 15) * 26) + '" cy="' + (i < 15 ? 12 : 248) + '" r="4" fill="' + GOLD + '"/>').join("") +
      '<rect x="110" y="26" width="180" height="40" rx="10" fill="' + RED + '" stroke="' + GOLD + '" stroke-width="4"/><text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" textLength="140" lengthAdjust="spacingAndGlyphs" fill="#fff8e1">CA$INO</text>' +
      '<rect x="100" y="66" width="200" height="150" rx="14" fill="#c8ccd2" stroke="#7d848c" stroke-width="3"/><rect x="108" y="74" width="184" height="72" rx="8" fill="#26262e"/>' +
      [150, 200, 250].map(x => '<rect x="' + (x - 22) + '" y="84" width="44" height="52" fill="#fbf7ea"/>').join("") +
      reel(150, "") + reel(200, "bk-reel2") + reel(250, "bk-reel3") +
      '<path d="M112 110h176" stroke="' + RED + '" stroke-width="2" opacity=".7"/>' +
      '<rect x="120" y="156" width="160" height="16" rx="3" fill="#1a1a1a"/><text x="200" y="168" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" class="bk-bl">PAYOUT  KEEM</text>' +
      '<rect x="128" y="184" width="144" height="24" rx="4" fill="#8f949b"/><rect x="138" y="190" width="124" height="12" rx="3" fill="#3a3a40"/>' +
      [160, 196, 232].map((x, i) => '<g class="bk-chip' + (i ? " bk-chip" + (i + 1) : "") + '"><ellipse cx="' + x + '" cy="190" rx="9" ry="4" fill="' + [GOLD, BLUE, RED][i] + '" stroke="#fff" stroke-width="1.5" stroke-dasharray="3 3"/></g>').join("") +
      '<g class="bk-arm"><rect x="304" y="90" width="7" height="70" rx="3" fill="#b9bec4" stroke="#6d737a" stroke-width="1.5"/><circle cx="307.5" cy="88" r="11" fill="' + RED + '" stroke="#7a1f26" stroke-width="2"/></g>' +
      '<rect x="296" y="150" width="20" height="18" rx="3" fill="#7d848c"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a1b2a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 216l10 44" stroke="#5e2436" stroke-width="5"/>').join(""),
      sky("bks3", "#140b1e", "#3a1430") + clip(150) + clip(200) + clip(250));
  }

  /* 4. The big top on the Strip */
  function bkbigtop() {
    const stripes = Array.from({ length: 12 }, (_, i) => {
      const a = 40 + i * 27, b = a + 27;
      return '<path d="M200 70L' + a + ' 168L' + b + ' 168z" fill="' + (i % 2 ? "#ffffff" : "#f06aa6") + '"/>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bks4)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle class="bk-st' + (i % 2 ? " bk-st2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 60) + '" r="1.5" fill="#fff"/>').join("") +
      '<rect x="0" y="150" width="400" height="40" fill="#5a3a6a"/>' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (6 + i * 25) + '" y="158" width="12" height="8" fill="#ffd98a" opacity=".7"/>').join("") +
      '<path d="M40 168Q200 40 364 168z" fill="#f06aa6"/>' + stripes + '<path d="M40 168Q120 120 200 70Q280 120 364 168" fill="none" stroke="#c23f7f" stroke-width="2"/>' +
      '<rect x="40" y="166" width="324" height="12" fill="#ffd34d"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M' + (40 + i * 18) + ' 178q9 10 18 0" fill="#c23f7f"/>').join("") +
      '<rect x="198" y="42" width="4" height="30" fill="#777"/><g class="bk-flag"><path d="M202 42l22 6-22 7z" fill="' + BLUE + '"/></g>' +
      '<rect x="98" y="104" width="3" height="22" fill="#777"/><g class="bk-flag bk-flag2"><path d="M101 104l16 5-16 5z" fill="' + GOLD + '"/></g>' +
      '<rect x="300" y="104" width="3" height="22" fill="#777"/><g class="bk-flag"><path d="M303 104l16 5-16 5z" fill="' + RED + '"/></g>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2030"/>' +
      '<path d="M120 180v-0" /><g class="bk-tra"><path d="M170 186v40M210 186v40" stroke="#ddd" stroke-width="2"/><rect x="166" y="224" width="48" height="5" rx="2" fill="' + GOLD + '"/></g>' +
      '<rect x="160" y="182" width="60" height="4" fill="#999"/>' +
      '<g class="bk-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + BLUE + '"/><circle cx="13" cy="250" r="5" fill="#111"/><circle cx="45" cy="250" r="5" fill="#111"/><circle cx="56" cy="242" r="2.5" fill="#fff6c2"/></g>',
      sky("bks4", "#0d0a24", "#3b2a5e"));
  }

  /* 5. E Washington Ave and N Maryland Pkwy */
  function bkcorner() {
    /* Lou Ruvo Center (Frank Gehry, Symphony Park): a tumble of curved stainless-steel ribbons pierced by a grid of windows */
    const panes = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) {
      const x = 224 + c * 13 + (r % 2) * 4, y = 74 + r * 13 + ((c * 7) % 5);
      panes.push('<rect x="' + x + '" y="' + y + '" width="7" height="6" fill="#5d6873" transform="rotate(' + ((c * 11) % 17 - 8) + ' ' + (x + 3) + ' ' + (y + 3) + ')"/>');
    }
    const ruvo = '<clipPath id="bkruvo"><path d="M218 126q-4 -40 14 -56q20 -14 36 -6q18 -16 42 -4q26 -6 36 18q10 22 -2 48z"/></clipPath>' +
      '<path d="M218 126q-4 -40 14 -56q20 -14 36 -6q18 -16 42 -4q26 -6 36 18q10 22 -2 48z" fill="#d5dbe1" stroke="#8d96a0" stroke-width="2"/>' +
      '<g clip-path="url(#bkruvo)">' + panes.join("") + '<path d="M214 92q60 -30 140 6M214 110q70 -26 140 0" stroke="#eef2f6" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '';
    return svg(
      '<rect width="400" height="260" fill="url(#bks5)"/>' +
      mountains(112, "#7a5a78") +
      '<g fill="#3e3550"><rect x="14" y="78" width="26" height="48"/><rect x="44" y="64" width="20" height="62"/><rect x="68" y="88" width="30" height="38"/><rect x="104" y="70" width="22" height="56"/></g>' +
      '<g transform="translate(-62,0)">' + ruvo + '</g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#e6cfa6"/>' + Array.from({ length: 10 }, (_, i) => '<circle cx="' + (12 + i * 41) + '" cy="' + (140 + (i * 17) % 70) + '" r="1.6" fill="#cdb38a"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#c45a3c"/>' +
      tag("KEEM", 24, 196, 60, BLUE, -6) + tag("TWO PHONE", 150, 214, 18, GOLD, -4) + tag("BOOMAN", 30, 216, 17, RED, -3) + tag("PGLANG", 196, 168, 16, "#b388ff", -5) +
      '<g class="bk-sp"><circle cx="190" cy="174" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="bk-sp bk-sp2"><circle cx="196" cy="168" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="318" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(222, 98, 140, "E Washington Av") + sign(228, 124, 128, "N Maryland Pkwy") +
      palm(372, 224, 64) +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bk-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("bks5", "#3a3270", "#f3a46a"));
  }

  window.SCENES = { bkstation: bkstation, bkcashman: bkcashman, bkslots: bkslots, bkbigtop: bkbigtop, bkcorner: bkcorner };
})();
