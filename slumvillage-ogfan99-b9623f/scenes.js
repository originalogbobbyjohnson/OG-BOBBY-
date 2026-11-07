/* slumvillage scenes (Regions tab: Detroit; Conant Gardens, east side). CSS classes and ids prefixed sv- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 12 Conant pulling up to the Conant & 7 Mile stop at the top of Conant Gardens, where T3, Baatin and Jay Dee grew up.
   2 The State Theatre on Woodward (named in the last verse of "Reunion"): cream terracotta front, the tall STATE blade sign, marquee bulbs chasing.
   3 "Detroit Deli (A Taste of Detroit)": a Detroit coney counter, chili dogs steaming, stools, the griddle sizzling.
   4 The Rhythm Kitchen downtown, the club the Detroit crews came up in ("up in the club we make 'em disco"): mirror ball spinning, floor lights blinking.
   5 Ryan Rd and E Seven Mile Rd, the corner of Conant Gardens: green signs, SLUM VILLAGE tagged on the brick, the green copper roof of the Book Tower far downtown.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes svflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sv-flk{animation:svflick 2.2s infinite}.sv-flk2{animation-delay:.7s}' +
    '@keyframes svcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.sv-car{animation:svcar 6.5s linear infinite}.sv-car2{animation-delay:-3.2s}' +
    '@keyframes svcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.sv-carL{animation:svcarL 7s linear infinite}' +
    '@keyframes svchase{0%,100%{opacity:.25}50%{opacity:1}}.sv-c1{animation:svchase .8s steps(1) infinite}.sv-c2{animation:svchase .8s steps(1) infinite;animation-delay:-.4s}' +
    '@keyframes svsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-30px);opacity:0}}.sv-st{animation:svsteam 2s ease-out infinite}.sv-st2{animation-delay:-.7s}.sv-st3{animation-delay:-1.4s}' +
    '@keyframes svspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sv-spin{transform-box:fill-box;transform-origin:50% 50%;animation:svspin 6s linear infinite}' +
    '@keyframes svsweep{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.sv-sw{transform-box:fill-box;transform-origin:50% 0;animation:svsweep 3s ease-in-out infinite}.sv-sw2{animation-delay:-1.5s}' +
    '@keyframes svblink{0%,100%{opacity:.2}50%{opacity:1}}.sv-bl{animation:svblink 1.2s steps(1) infinite}.sv-bl2{animation-delay:-.3s}.sv-bl3{animation-delay:-.6s}.sv-bl4{animation-delay:-.9s}' +
    '@keyframes svspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sv-sp{animation:svspray 1.4s ease-out infinite}.sv-sp2{animation-delay:.45s}' +
    '@keyframes svsiz{0%,100%{opacity:.2}50%{opacity:.9}}.sv-siz{animation:svsiz .5s steps(2) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const GREEN = "#0b6e4f", GOLD = "#f2c94c", RED = "#e8384f";

  /* 1. DDOT Route 12 Conant at Conant & 7 Mile */
  function svstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="118" width="32" height="26" rx="3" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="104" width="300" height="86" rx="10" fill="#f4f4ee" stroke="#8a9098" stroke-width="2"/>' +
      '<rect x="40" y="150" width="300" height="16" fill="' + GREEN + '"/><rect x="40" y="166" width="300" height="4" fill="' + GOLD + '"/>' + win +
      '<rect x="316" y="114" width="22" height="44" rx="4" fill="#9fc6d8"/><rect x="44" y="114" width="16" height="70" rx="2" fill="#2a3a44"/>' +
      '<rect x="250" y="106" width="86" height="10" rx="2" fill="#111"/><text x="293" y="114" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">12 CONANT</text>' +
      '<circle cx="90" cy="192" r="13" fill="#111"/><circle cx="90" cy="192" r="5" fill="#777"/><circle cx="290" cy="192" r="13" fill="#111"/><circle cx="290" cy="192" r="5" fill="#777"/>' +
      '<circle cx="334" cy="176" r="3.5" fill="#fff6c2"/></g>';
    const house = (x, c, r) => '<g><rect x="' + x + '" y="88" width="64" height="58" fill="' + c + '"/><path d="M' + (x - 4) + ' 90l36 -26l36 26z" fill="' + r + '"/><rect x="' + (x + 8) + '" y="100" width="14" height="16" fill="#f2d79a"/><rect x="' + (x + 42) + '" y="100" width="14" height="16" fill="#f2d79a"/><rect x="' + (x + 26) + '" y="120" width="12" height="26" fill="#3a2418"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#svs1)"/>' +
      '<g fill="#3a6a3a"><ellipse cx="40" cy="96" rx="44" ry="30"/><ellipse cx="370" cy="92" rx="44" ry="32"/></g>' +
      house(2, "#8a4a34", "#3a2a2a") + house(150, "#a86a44", "#4a3028") + house(300, "#7a4a3a", "#2a2a3a") +
      '<rect x="0" y="146" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="156" width="400" height="104" fill="#3e4148"/>' +
      '<path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      bus +
      '<rect x="356" y="96" width="5" height="110" fill="#2f2f2f"/><rect x="340" y="80" width="38" height="30" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="359" y="93" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DDOT</text><text x="359" y="105" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">12</text>' +
      car("sv-carL", 0, 236, "#c8a24a") +
      '<rect x="80" y="210" width="210" height="24" rx="3" fill="#111"/><text x="185" y="227" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">CONANT &amp; 7 MILE</text>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">CONANT GARDENS · DETROIT EAST SIDE</text>',
      sky("svs1", "#2a3a6a", "#f0a870"));
  }

  /* 2. The State Theatre on Woodward */
  function svstate() {
    const bulbs = (x0, y, n, step) => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 2 ? "sv-c1" : "sv-c2") + '" cx="' + (x0 + i * step) + '" cy="' + y + '" r="2.4" fill="#fff2b0"/>').join("");
    const letters = "STATE".split("").map((ch, i) => '<text x="200" y="' + (50 + i * 17) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" fill="' + RED + '">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#svs2)"/>' +
      '<g fill="#262a40"><rect x="0" y="60" width="70" height="150"/><rect x="330" y="50" width="70" height="160"/></g>' +
      '<g fill="#ffd98a" opacity=".5"><rect x="12" y="76" width="6" height="8"/><rect x="40" y="100" width="6" height="8"/><rect x="346" y="70" width="6" height="8"/><rect x="376" y="110" width="6" height="8"/></g>' +
      '<rect x="80" y="46" width="240" height="164" fill="#efe2c4"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (92 + i * 34) + '" y="58" width="14" height="70" fill="#d8c7a0"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (108 + i * 34) + '" y="66" width="14" height="54" rx="7" fill="#3a3448"/>').join("") +
      '<rect x="80" y="40" width="240" height="8" fill="#d8c7a0"/><path d="M80 40q120 -20 240 0" fill="#efe2c4" stroke="#d8c7a0" stroke-width="2"/>' +
      '<rect x="184" y="20" width="32" height="112" rx="3" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/>' + letters +
      bulbs(188, 26, 4, 8) +
      '<path d="M90 136h220l-12 26h-196z" fill="#1a1a22"/><rect x="102" y="140" width="196" height="18" fill="#fff6dc"/>' +
      '<text x="200" y="153" text-anchor="middle" ' + font + ' font-size="10" fill="#1a1a22">SLUM VILLAGE · TONIGHT</text>' +
      bulbs(96, 137, 27, 8) + bulbs(104, 162, 25, 8) +
      '<rect x="110" y="168" width="180" height="42" fill="#5a2e2a"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (118 + i * 44) + '" y="174" width="34" height="36" fill="#d8a85a" opacity=".8"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a3f"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("sv-car", 0, 228, "#3b6fb5") + car("sv-carL", 0, 246, "#e8e2d0") +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0">WOODWARD AVE · DOWNTOWN DETROIT</text>',
      sky("svs2", "#0e1230", "#3a2a5a"));
  }

  /* 3. Detroit Deli: a coney counter */
  function svdeli() {
    const dog = (x, y) => '<g><ellipse cx="' + x + '" cy="' + y + '" rx="22" ry="7" fill="#e8c98a"/><rect x="' + (x - 20) + '" y="' + (y - 5) + '" width="40" height="5" rx="2.5" fill="#b8502a"/>' +
      '<path d="M' + (x - 18) + ' ' + (y - 5) + 'q6 -6 12 0q6 -6 12 0q6 -6 12 0" fill="#7a3a1a"/><path d="M' + (x - 14) + ' ' + (y - 7) + 'h28" stroke="#f2e6b0" stroke-width="2" stroke-dasharray="2 3"/>' +
      '<path d="M' + (x - 12) + ' ' + (y - 9) + 'h24" stroke="#f2c200" stroke-width="1.5" stroke-dasharray="4 3"/></g>';
    const stool = (x) => '<g><rect x="' + (x - 3) + '" y="214" width="6" height="40" fill="#9aa0a8"/><ellipse cx="' + x + '" cy="212" rx="16" ry="5" fill="' + RED + '"/><ellipse cx="' + x + '" cy="254" rx="12" ry="3" fill="#6a6f76"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#f2ead6"/>' +
      Array.from({ length: 20 }, (_, i) => Array.from({ length: 6 }, (_, j) => '<rect x="' + (i * 20) + '" y="' + (j * 20) + '" width="20" height="20" fill="' + ((i + j) % 2 ? "#e8dcc0" : "#f7f0de") + '"/>').join("")).join("") +
      '<rect x="40" y="10" width="320" height="34" rx="4" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="34" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GOLD + '" letter-spacing="3">DETROIT DELI</text>' +
      '<rect x="120" y="48" width="160" height="16" fill="' + RED + '"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">A TASTE OF DETROIT</text>' +
      '<rect x="20" y="70" width="140" height="60" fill="#3a3a40"/><rect x="24" y="74" width="132" height="52" fill="#555b62"/>' +
      '<g class="sv-siz">' + [40, 70, 100, 130].map(x => '<circle cx="' + x + '" cy="100" r="2" fill="#ffd36a"/>').join("") + '</g>' +
      '<g class="sv-st"><path d="M60 118q-6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/></g><g class="sv-st sv-st2"><path d="M100 118q6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/></g>' +
      '<rect x="190" y="74" width="180" height="56" rx="3" fill="#fff" stroke="#c9c2b0" stroke-width="2"/>' +
      '<text x="280" y="92" text-anchor="middle" ' + font + ' font-size="11" fill="#1a1a22">CONEY DOG</text><text x="280" y="108" text-anchor="middle" ' + font + ' font-size="11" fill="#1a1a22">LOOSE BURGER</text><text x="280" y="124" text-anchor="middle" ' + font + ' font-size="11" fill="#1a1a22">CHILI FRIES</text>' +
      '<rect x="0" y="150" width="400" height="16" fill="#c9ccd2"/><rect x="0" y="166" width="400" height="42" fill="' + GREEN + '"/><path d="M0 172h400" stroke="#fff" stroke-width="2" opacity=".4"/>' +
      '<ellipse cx="120" cy="146" rx="34" ry="6" fill="#fff" stroke="#ddd"/>' + dog(110, 144) + dog(132, 136) +
      '<ellipse cx="270" cy="146" rx="34" ry="6" fill="#fff" stroke="#ddd"/>' + dog(270, 142) +
      '<g class="sv-st sv-st3"><path d="M120 128q-5 -8 0 -16" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/></g><g class="sv-st"><path d="M272 128q5 -8 0 -16" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/></g>' +
      '<rect x="196" y="126" width="20" height="22" rx="3" fill="#c8102e"/><rect x="220" y="128" width="14" height="20" rx="3" fill="#f2c200"/>' +
      stool(60) + stool(150) + stool(240) + stool(330) +
      '<rect x="0" y="252" width="400" height="8" fill="#6a6f76"/>');
  }

  /* 4. The Rhythm Kitchen: the club, mirror ball spinning */
  function svclub() {
    const tiles = Array.from({ length: 10 }, (_, i) => Array.from({ length: 3 }, (_, j) => '<rect class="sv-bl ' + ["", "sv-bl2", "sv-bl3", "sv-bl4"][(i + j * 2) % 4] + '" x="' + (i * 40) + '" y="' + (200 + j * 20) + '" width="38" height="18" fill="' + [GOLD, RED, "#4ab0e8", "#7a5af0"][(i + j) % 4] + '"/>').join("")).join("");
    const ball = '<g class="sv-spin"><circle cx="200" cy="70" r="30" fill="#c8ccd6"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M170 ' + (52 + i * 7) + 'h60" stroke="#8a90a0" stroke-width="1"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (176 + i * 8) + ' 42v56" stroke="#8a90a0" stroke-width="1"/>').join("") +
      '<rect x="180" y="52" width="7" height="6" fill="#fff"/><rect x="204" y="66" width="7" height="6" fill="#fff"/><rect x="190" y="82" width="7" height="6" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<g class="sv-sw"><path d="M200 40L120 200h50z" fill="' + GOLD + '" opacity=".14"/></g><g class="sv-sw sv-sw2"><path d="M200 40L250 200h50z" fill="#4ab0e8" opacity=".14"/></g>' +
      '<path d="M200 0v40" stroke="#888" stroke-width="2"/>' + ball +
      Array.from({ length: 14 }, (_, i) => '<circle class="sv-bl ' + ["", "sv-bl2", "sv-bl3", "sv-bl4"][i % 4] + '" cx="' + (20 + i * 27) + '" cy="' + (120 + (i % 3) * 18) + '" r="2" fill="#fff"/>').join("") +
      '<rect x="20" y="112" width="70" height="60" rx="4" fill="#2a2036" stroke="#5a4a70" stroke-width="2"/><circle cx="42" cy="142" r="12" fill="#111"/><circle cx="42" cy="142" r="4" fill="' + RED + '"/><circle cx="72" cy="142" r="12" fill="#111"/><circle cx="72" cy="142" r="4" fill="' + GOLD + '"/>' +
      '<rect x="310" y="112" width="70" height="60" rx="4" fill="#2a2036" stroke="#5a4a70" stroke-width="2"/><circle cx="345" cy="132" r="9" fill="#222" stroke="#666"/><circle cx="345" cy="157" r="12" fill="#222" stroke="#666"/>' +
      tiles +
      '<text x="200" y="190" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '" letter-spacing="3">RHYTHM KITCHEN</text>');
  }

  /* 5. Ryan Rd and E Seven Mile Rd; the Book Tower far downtown */
  function svcorner() {
    const book = '<g><rect x="150" y="44" width="40" height="98" fill="#b8a888"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (154 + i * 6) + '" y="50" width="2.5" height="90" fill="#9a8a6a"/>').join("") +
      '<path d="M146 46l24 -26l24 26z" fill="#5aa08a" stroke="#3a7a66" stroke-width="2"/><rect x="146" y="44" width="48" height="4" fill="#d8c8a8"/></g>' +
      '<g fill="#6a7498"><rect x="100" y="88" width="30" height="54"/><rect x="200" y="74" width="22" height="68"/><rect x="226" y="96" width="28" height="46"/><rect x="62" y="104" width="30" height="38"/></g>' +
      '<text x="170" y="16" text-anchor="middle" ' + font + ' font-size="7" fill="#fff" opacity=".8">BOOK TOWER</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#svs5)"/>' + book +
      '<rect x="0" y="140" width="400" height="22" fill="#3e6a3a"/>' +
      '<rect x="40" y="114" width="250" height="110" fill="#8a3e2c"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (120 + i * 8) + 'h250" stroke="#74321f" stroke-width="1"/>').join("") +
      Array.from({ length: 14 }, (_, i) => Array.from({ length: 7 }, (_, j) => '<path d="M' + (40 + j * 40 + (i % 2) * 20) + ' ' + (114 + i * 8) + 'v8" stroke="#74321f" stroke-width="1"/>').join("")).join("") +
      tag("SLUM", 52, 158, 34, GOLD, -6) + tag("VILLAGE", 120, 192, 32, "#7fe0b0", -5) + tag("SV", 56, 218, 20, RED, -4) + tag("CONANT GARDENS", 140, 218, 13, "#fff2b0", -3) +
      '<g class="sv-sp"><circle cx="276" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sv-sp sv-sp2"><circle cx="282" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 96, "Ryan Rd") + sign(276, 124, 120, "E 7 Mile Rd") +
      '<rect x="312" y="160" width="4" height="64" fill="#222"/><circle class="sv-flk" cx="314" cy="158" r="7" fill="#ffe9a8"/>' +
      car("sv-car", 0, 240, "#0b6e4f"),
      sky("svs5", "#1e2a54", "#e89a6a"));
  }

  window.SCENES = { svstation: svstation, svstate: svstate, svdeli: svdeli, svclub: svclub, svcorner: svcorner };
})();
