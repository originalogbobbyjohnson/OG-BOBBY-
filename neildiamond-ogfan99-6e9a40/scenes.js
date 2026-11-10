/* neildiamond scenes (NYC map, Brooklyn: born 1941 in Brooklyn; Coney Island his backyard as a little kid, the family settled in Brighton Beach;
   Erasmus Hall, then Abraham Lincoln High School on Ocean Pkwy where he took up fencing; NYU on a fencing scholarship; Tin Pan Alley and the
   Brill Building; The Bitter End on Bleecker St). CSS classes prefixed ndm- (the page's own anim-train is kept).
   1 Ocean Pkwy on the Q: up on the Brighton el, the black sign with the yellow Q, the Q sliding in, sea sky behind.
   2 Abraham Lincoln High School, Ocean Pkwy: the long buff-brick school with its tall center tower, two fencers lunging out front.
   3 The Brill Building, Broadway at 49th St: the dark Art Deco tower with the gold entrance, chasing lights, a cab rolling by.
   4 Bleecker St, Greenwich Village: the little red-brick folk club stage he played in the 60s, stool, mic, guitar, a spotlight sweeping.
   5 Brighton Beach Av & Brighton 3 St: green signs, NEIL DIAMOND tagged on the wall, the butcher shop with the apartment two floors up
     ("two floors above the butcher, first door on the right"), the Brighton el behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ndmflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.95}}.ndm-flk{animation:ndmflick 2.6s infinite}' +
    '@keyframes ndmchase{0%,100%{opacity:1}50%{opacity:.2}}.ndm-ch{animation:ndmchase .8s infinite}.ndm-ch2{animation-delay:.4s}' +
    '@keyframes ndmlunge{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.ndm-lunge{animation:ndmlunge 1.6s ease-in-out infinite}' +
    '@keyframes ndmlungeb{0%,100%{transform:translateX(0)}50%{transform:translateX(-6px)}}.ndm-lungeb{animation:ndmlungeb 1.6s ease-in-out infinite}' +
    '@keyframes ndmbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ndm-beam{transform-box:view-box;transform-origin:200px 0px;animation:ndmbeam 4.5s ease-in-out infinite}' +
    '@keyframes ndmnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(16px,-56px);opacity:0}}.ndm-note{animation:ndmnote 3s ease-out infinite}.ndm-note2{animation-delay:-1.5s}' +
    '@keyframes ndmcab{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ndm-cab{animation:ndmcab 6.5s linear infinite}' +
    '@keyframes ndmel{from{transform:translateX(430px)}to{transform:translateX(-360px)}}.ndm-el{animation:ndmel 7s linear infinite}' +
    '@keyframes ndmgull{0%{transform:translate(-30px,0)}50%{transform:translate(210px,-10px)}100%{transform:translate(440px,0)}}.ndm-gull{animation:ndmgull 11s linear infinite}.ndm-gull2{animation-delay:-5.5s}' +
    '@keyframes ndmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ndm-sp{animation:ndmspray 1.4s ease-out infinite}.ndm-sp2{animation-delay:.45s}' +
    '@keyframes ndmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ndm-flag{transform-box:fill-box;transform-origin:0 50%;animation:ndmflag 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt(t, x + w / 2, y + 16, 13, "#fff");
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const YELLOW = "#fccc0a", BLUE = "#7fc8ff", GOLD = "#e8c24a", ROSE = "#e04a6a", CREAM = "#f4ead8";

  /* 1. Ocean Pkwy on the Q (Brighton line, elevated) */
  function ndstation() {
    let win = "";
    for (let x = 34; x < 270; x += 36) win += '<rect x="' + x + '" y="98" width="24" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let blocks = "";
    [[0, 70, 60, "#c9a27e"], [64, 90, 44, "#b98a6e"], [292, 64, 50, "#d0b08a"], [346, 84, 54, "#b07a62"]].forEach(([x, y, w, c]) => {
      blocks += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (150 - y) + '" fill="' + c + '" opacity=".8"/>';
      for (let yy = y + 6; yy < 84; yy += 10) for (let xx = x + 5; xx < x + w - 4; xx += 9) blocks += '<rect x="' + xx + '" y="' + yy + '" width="4" height="5" fill="#5d4a40" opacity=".6"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#nds1)"/>' +
      '<g class="ndm-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<g class="ndm-gull ndm-gull2"><path d="M0 58q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      blocks +
      '<rect x="0" y="22" width="400" height="10" fill="#3f4f5a"/><path d="M0 32h400" stroke="#26313a" stroke-width="2"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="110" fill="#3f4f5a"/>').join("") +
      '<rect x="96" y="40" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="40" width="208" height="3" fill="#fff"/>' +
      '<text x="110" y="61" ' + font + ' font-size="15" fill="#fff">Ocean Pkwy</text>' + bullet(282, 56, "Q", YELLOW, true) +
      '<g class="anim-train">' +
        '<rect x="10" y="86" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="94" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 130, "Q", YELLOW, true) +
        '<rect x="10" y="124" width="276" height="4" fill="' + YELLOW + '"/><circle cx="22" cy="134" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="142" width="400" height="8" fill="#e8b40c"/><rect x="0" y="150" width="400" height="22" fill="#6b6a66"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#34444e"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 5) + '" y="180" width="10" height="60" fill="#34444e"/><path d="M' + (x - 30) + ' 180l30 18l30 -18" stroke="#34444e" stroke-width="3" fill="none"/>').join("") +
      person(340, 118, "#1b1b1b") + person(362, 120, "#3a3a52") +
      txt("BRIGHTON LINE · BRIGHTON BEACH", 200, 166, 10, CREAM, 'letter-spacing="2"') +
      '<rect x="0" y="240" width="400" height="20" fill="#4c4d52"/>' +
      '<g class="ndm-cab"><rect x="0" y="244" width="40" height="11" rx="3" fill="' + BLUE + '"/><circle cx="9" cy="256" r="3.5" fill="#111"/><circle cx="31" cy="256" r="3.5" fill="#111"/></g>',
      sky("nds1", "#7fbde8", "#f6e3c4"));
  }

  /* 2. Abraham Lincoln High School: buff brick, center tower, fencers */
  function ndlincoln() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) {
      wins += '<rect x="' + (18 + i * 22) + '" y="' + (70 + r * 30) + '" width="12" height="20" fill="#3a4a5a"/>';
      wins += '<rect x="' + (252 + i * 22) + '" y="' + (70 + r * 30) + '" width="12" height="20" fill="#3a4a5a"/>';
    }
    const fencer = (x, dir, col) => '<g><circle cx="' + x + '" cy="176" r="7" fill="#d8dce2" stroke="#555" stroke-width="1.5"/><path d="M' + (x - 4) + ' 172h8" stroke="#333" stroke-width="2"/>' +
      '<rect x="' + (x - 7) + '" y="184" width="14" height="24" rx="4" fill="#fafafa" stroke="#bbb"/><path d="M' + (x - 5) + ' 208l' + (-6 * dir) + ' 18M' + (x + 5) + ' 208l' + (8 * dir) + ' 18" stroke="#fafafa" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M' + (x + 6 * dir) + ' 190l' + (16 * dir) + ' -4" stroke="#fafafa" stroke-width="4" stroke-linecap="round"/><path d="M' + (x + 22 * dir) + ' 186l' + (34 * dir) + ' -8" stroke="#c9ced6" stroke-width="1.6"/>' +
      '<rect x="' + (x - 7) + '" y="194" width="14" height="3" fill="' + col + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nds2)"/>' +
      '<rect x="8" y="58" width="140" height="102" fill="#d9c08e"/><rect x="252" y="58" width="140" height="102" fill="#d9c08e"/>' +
      '<rect x="8" y="58" width="140" height="6" fill="#efe3c4"/><rect x="252" y="58" width="140" height="6" fill="#efe3c4"/>' + wins +
      '<rect x="150" y="20" width="100" height="140" fill="#e2cb9a"/><rect x="164" y="8" width="72" height="14" fill="#efe3c4"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (166 + i * 18) + '" y="30" width="6" height="76" fill="#c2a26e"/>').join("") +
      '<rect x="176" y="34" width="12" height="66" fill="#3a4a5a"/><rect x="212" y="34" width="12" height="66" fill="#3a4a5a"/>' +
      '<rect x="166" y="106" width="68" height="14" fill="#2a2a2a"/>' + txt("LINCOLN HIGH", 200, 117, 8, GOLD) +
      '<path d="M176 160v-26q24 -18 48 0v26z" fill="#5a3a22"/><path d="M200 128v32" stroke="#3a2412" stroke-width="2"/>' +
      '<rect x="198" y="0" width="3" height="10" fill="#555"/><g class="ndm-flag"><rect x="201" y="0" width="16" height="9" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#a9b0a2"/><rect x="40" y="168" width="320" height="64" rx="4" fill="#8a3a3a" opacity=".85"/>' +
      '<path d="M40 200h320" stroke="#fff" stroke-width="1" stroke-dasharray="6 6" opacity=".6"/>' +
      '<g class="ndm-lunge">' + fencer(150, 1, BLUE) + '</g><g class="ndm-lungeb">' + fencer(252, -1, ROSE) + '</g>' +
      txt("ON GUARD, OCEAN PKWY", 200, 250, 11, "#1e2a33", 'letter-spacing="2"'),
      sky("nds2", "#8fc6ea", "#f2e6c8"));
  }

  /* 3. The Brill Building, Broadway at 49th */
  function ndbrill() {
    let wins = "";
    for (let r = 0; r < 9; r++) for (let i = 0; i < 7; i++) wins += '<rect x="' + (112 + i * 26) + '" y="' + (16 + r * 14) + '" width="12" height="8" fill="' + ((r * 7 + i) % 5 ? "#3a3f4c" : "#f6d98a") + '"/>';
    const bulbs = cls => Array.from({ length: 16 }, (_, i) => '<circle class="ndm-ch ' + (i % 2 ? "ndm-ch2" : "") + '" cx="' + (138 + i * 8.3) + '" cy="' + cls + '" r="2.2" fill="#fff2b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nds3)"/>' +
      '<rect x="0" y="60" width="96" height="140" fill="#2a2440"/><rect x="304" y="44" width="96" height="156" fill="#2c2a3e"/>' +
      '<rect x="10" y="70" width="70" height="20" fill="' + ROSE + '" class="ndm-flk"/><rect x="316" y="60" width="72" height="22" fill="' + BLUE + '" opacity=".85"/>' +
      '<rect x="100" y="8" width="200" height="190" fill="#4a4554"/><rect x="100" y="8" width="200" height="4" fill="' + GOLD + '"/>' + wins +
      '<rect x="128" y="146" width="144" height="54" fill="#1a1620"/><rect x="132" y="150" width="136" height="16" fill="#2a2230"/>' +
      txt("BRILL BUILDING", 200, 162, 11, GOLD, 'letter-spacing="2"') +
      bulbs(146) + bulbs(170) +
      '<path d="M170 200v-26h60v26" fill="#c9a24a"/><path d="M178 200v-20h44v20" fill="#2a1c10"/><path d="M200 180v20" stroke="#c9a24a" stroke-width="2"/>' +
      '<path d="M174 174l26 -6 26 6" stroke="' + GOLD + '" stroke-width="2" fill="none"/>' +
      txt("1619", 200, 140, 10, GOLD) +
      '<rect x="0" y="200" width="400" height="60" fill="#3d3a44"/><path d="M0 232h400" stroke="#e8e2d0" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="ndm-cab"><rect x="0" y="236" width="58" height="14" rx="5" fill="#f2c200"/><rect x="12" y="228" width="32" height="10" rx="3" fill="#f2c200"/><rect x="15" y="230" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="230" width="12" height="6" fill="#bfe3ff"/><circle cx="13" cy="250" r="5" fill="#111"/><circle cx="45" cy="250" r="5" fill="#111"/></g>' +
      '<g class="ndm-note"><text x="80" y="140" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="ndm-note ndm-note2"><text x="316" y="130" font-size="18" fill="' + BLUE + '">&#9835;</text></g>',
      sky("nds3", "#141a3a", "#4a3a6a"));
  }

  /* 4. Bleecker St folk club stage */
  function ndbleecker() {
    let bricks = "";
    for (let r = 0; r < 16; r++) for (let i = 0; i < 14; i++) bricks += '<rect x="' + (i * 30 - (r % 2) * 15) + '" y="' + (r * 11) + '" width="28" height="9" fill="' + ((r + i) % 3 ? "#8a3a2a" : "#7a3020") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a120c"/>' + bricks +
      '<g class="ndm-beam"><path d="M200 0L150 200h100z" fill="#fff6c8" opacity=".22"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a2414"/><rect x="40" y="182" width="320" height="18" fill="#5a3a22"/><rect x="40" y="182" width="320" height="3" fill="#7a5232"/>' +
      '<path d="M200 182l-8 -50M200 182l8 -50" stroke="#2a2a2a" stroke-width="3"/><rect x="186" y="128" width="28" height="6" rx="2" fill="#3a2a1a"/>' +
      '<path d="M258 182v-54M246 128h24" stroke="#333" stroke-width="3"/><rect x="254" y="112" width="8" height="16" rx="4" fill="#9aa0aa"/>' +
      '<g transform="rotate(-24 150 150)"><ellipse cx="150" cy="160" rx="16" ry="20" fill="#c88a3a" stroke="#6a3a10" stroke-width="2"/><circle cx="150" cy="156" r="5" fill="#3a1a08"/><rect x="146" y="96" width="8" height="48" fill="#6a3a10"/><rect x="143" y="88" width="14" height="10" rx="2" fill="#3a1a08"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1c0e08"/>' +
      [30, 90, 150, 250, 310, 370].map((x, i) => '<circle cx="' + x + '" cy="' + (224 + (i % 2) * 4) + '" r="10" fill="#0e0604"/><rect x="' + (x - 11) + '" y="' + (232 + (i % 2) * 4) + '" width="22" height="30" rx="8" fill="#0e0604"/>').join("") +
      '<rect x="120" y="14" width="160" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' + txt("BLEECKER ST", 200, 32, 13, GOLD, 'letter-spacing="3"') +
      '<g class="ndm-note"><text x="220" y="110" font-size="20" fill="' + BLUE + '">&#9834;</text></g><g class="ndm-note ndm-note2"><text x="170" y="100" font-size="18" fill="' + GOLD + '">&#9835;</text></g>',
      "");
  }

  /* 5. Brighton Beach Av & Brighton 3 St: two floors above the butcher, the el behind */
  function ndcorner() {
    let elwin = "";
    for (let x = 14; x < 300; x += 30) elwin += '<rect x="' + x + '" y="20" width="20" height="12" rx="2" fill="#cfe2f5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#nds5)"/>' +
      '<rect x="0" y="12" width="400" height="6" fill="#34444e"/><rect x="0" y="42" width="400" height="8" fill="#34444e"/>' +
      '<g class="ndm-el"><rect x="0" y="16" width="320" height="26" rx="4" fill="#c9ced6" stroke="#6b7280"/>' + elwin + '<rect x="0" y="34" width="320" height="3" fill="' + YELLOW + '"/></g>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 4) + '" y="50" width="8" height="40" fill="#34444e"/>').join("") +
      '<rect x="20" y="62" width="200" height="160" fill="#b06a4e"/><rect x="20" y="62" width="200" height="5" fill="#e8d8c0"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (32 + i * 48) + '" y="76" width="26" height="28" fill="#3a4a5a" stroke="#e8d8c0" stroke-width="2"/>').join("") +
      '<rect x="32" y="76" width="26" height="28" fill="#f6d98a" class="ndm-flk"/>' +
      '<rect x="24" y="112" width="192" height="22" fill="#7a1a1a"/>' + txt("MEATS &amp; POULTRY", 120, 128, 12, "#fff") +
      '<rect x="32" y="138" width="96" height="40" fill="#d8e6ee" opacity=".85"/><rect x="146" y="138" width="40" height="44" fill="#4a2a1a"/>' +
      tag("BROOKLYN ROADS", 30, 210, 15, CREAM, -3) +
      '<rect x="220" y="62" width="180" height="160" fill="#8a8f98"/>' +
      tag("NEIL DIAMOND", 228, 196, 20, BLUE, -5) + tag("SO GOOD", 236, 150, 18, GOLD, -4) + tag("NEIL D", 330, 216, 16, ROSE, -6) +
      '<rect x="0" y="222" width="400" height="38" fill="#55524e"/><rect x="0" y="220" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="388" y="60" width="6" height="162" fill="#2f2f2f"/>' + sign(256, 62, 140, "Brighton Beach Av") + sign(276, 88, 120, "Brighton 3 St") +
      '<g class="ndm-sp"><circle cx="330" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="ndm-sp ndm-sp2"><circle cx="336" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>' +
      '<g class="ndm-cab"><rect x="0" y="236" width="44" height="12" rx="3" fill="' + ROSE + '"/><circle cx="10" cy="249" r="3.5" fill="#111"/><circle cx="34" cy="249" r="3.5" fill="#111"/></g>',
      sky("nds5", "#5a7ab8", "#f2c48a"));
  }

  window.SCENES = { ndstation: ndstation, ndlincoln: ndlincoln, ndbrill: ndbrill, ndbleecker: ndbleecker, ndcorner: ndcorner };
})();
