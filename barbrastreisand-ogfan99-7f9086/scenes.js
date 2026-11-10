/* barbrastreisand scenes (NYC map, Brooklyn: born 1942, Pulaski St in Bed-Stuy as a little girl, then Apt 4G at 3102 Newkirk Av in Flatbush; P.S. 89; Erasmus Hall '59). CSS classes prefixed bst- (the page's own anim-train is kept).
   1 Nostrand Av & Newkirk Av: the blue B44 bus pulling in at the bus stop, the stop sign pole with the B44 bullet, Flatbush storefronts behind.
   2 Choy's on Nostrand Av: the little Chinese restaurant where she babysat and worked as a teen, red lanterns swaying, steam rising.
   3 The Bon Soir, W 8th St in the Village: the basement club where she broke out in 1960, awning, spotlight sweeping a microphone and a piano.
   4 Winter Garden Theatre, Broadway: Funny Girl on the marquee (1964), chasing bulbs.
   5 Newkirk Av and E 31 St: green signs, BARBRA tagged on the wall, the old brick P.S. 89 behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bstflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.25}55%{opacity:.95}}.bst-flk{animation:bstflick 2.4s infinite}' +
    '@keyframes bstchase{0%,100%{opacity:1}50%{opacity:.2}}.bst-ch{animation:bstchase .8s infinite}.bst-ch2{animation-delay:.4s}' +
    '@keyframes bstswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.bst-lan{transform-box:fill-box;transform-origin:50% 0;animation:bstswing 2.2s ease-in-out infinite}.bst-lan2{animation-delay:-1.1s}' +
    '@keyframes bststeam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.bst-st{animation:bststeam 2.4s ease-out infinite}.bst-st2{animation-delay:-1.2s}' +
    '@keyframes bstbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.bst-beam{transform-box:view-box;transform-origin:200px 20px;animation:bstbeam 4s ease-in-out infinite}' +
    '@keyframes bstnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.bst-note{animation:bstnote 3s ease-out infinite}.bst-note2{animation-delay:-1.5s}' +
    '@keyframes bstcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bst-car{animation:bstcar 7s linear infinite}' +
    '@keyframes bstcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.bst-carL{animation:bstcarL 8.5s linear infinite}' +
    '@keyframes bstspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bst-sp{animation:bstspray 1.4s ease-out infinite}.bst-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const GOLD = "#f6d27a", RED = "#c0392b", LILAC = "#d9c2f0", BUSBLUE = "#0039a6";

  /* 1. Nostrand Av & Newkirk Av, B44 bus stop */
  function bsstation() {
    const shops = [["#b5654a", "BAKERY"], ["#e2d3b0", "DELI"], ["#8a5a8a", "SHOES"], ["#c99a4a", "PHARMACY"], ["#6a8a9a", "HARDWARE"]]
      .map((s, i) => '<rect x="' + (i * 80) + '" y="40" width="78" height="128" fill="' + s[0] + '"/><rect x="' + (i * 80 + 8) + '" y="54" width="62" height="26" fill="#f1e6cf" opacity=".85"/><rect x="' + (i * 80 + 8) + '" y="54" width="62" height="26" fill="none" stroke="#3a2a22" stroke-width="1"/>' +
        '<rect x="' + (i * 80 + 4) + '" y="96" width="70" height="16" fill="#1c1c1c"/><text x="' + (i * 80 + 39) + '" y="108" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">' + s[1] + '</text>' +
        '<rect x="' + (i * 80 + 10) + '" y="118" width="58" height="50" fill="#2a3540"/>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="146" width="28" height="22" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="136" width="300" height="70" rx="10" fill="#e9edf2" stroke="#6d757c" stroke-width="2"/><rect x="60" y="186" width="300" height="8" fill="' + BUSBLUE + '"/>' + wins +
      '<rect x="330" y="146" width="24" height="40" rx="3" fill="#1e2a33"/><rect x="62" y="140" width="40" height="12" rx="2" fill="#111"/><text x="82" y="149" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb52e">B44</text>' +
      '<circle cx="110" cy="206" r="12" fill="#111"/><circle cx="110" cy="206" r="5" fill="#888"/><circle cx="300" cy="206" r="12" fill="#111"/><circle cx="300" cy="206" r="5" fill="#888"/><circle cx="352" cy="194" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bsts1)"/>' + shops +
      '<rect x="0" y="168" width="400" height="18" fill="#b9b3a8"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#4a4a4f"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="176" y="64" width="5" height="122" fill="#6d757c"/>' + bus +
      '<rect x="4" y="10" width="190" height="54" rx="4" fill="#111"/><rect x="4" y="12" width="190" height="2" fill="#fff"/>' +
      '<text x="14" y="34" ' + font + ' font-size="15" fill="#fff">Nostrand Av &amp;</text><text x="14" y="53" ' + font + ' font-size="15" fill="#fff">Newkirk Av</text>' +
      '<rect x="138" y="24" width="48" height="26" rx="13" fill="' + BUSBLUE + '"/><text x="162" y="42" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">B44</text>' +
      '<g class="bst-flk"><rect x="320" y="18" width="50" height="6" rx="2" fill="#fffbe6"/></g>',
      sky("bsts1", "#9fd0f0", "#f4ead2"));
  }

  /* 2. Choy's on Nostrand Av */
  function bschoys() {
    const lantern = (cls, x) => '<g class="bst-lan ' + cls + '"><path d="M' + x + ' 30v12" stroke="#222" stroke-width="1.5"/><ellipse cx="' + x + '" cy="56" rx="14" ry="15" fill="#d7262b"/><rect x="' + (x - 7) + '" y="40" width="14" height="4" fill="' + GOLD + '"/><rect x="' + (x - 7) + '" y="69" width="14" height="4" fill="' + GOLD + '"/><path d="M' + x + ' 73v10" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bsts2)"/>' +
      '<rect x="30" y="20" width="340" height="190" fill="#8a3a2a"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M30 ' + (26 + i * 12) + 'h340" stroke="#7a3222" stroke-width="1"/>').join("") +
      '<rect x="50" y="86" width="300" height="34" fill="#1c1c1c" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="110" text-anchor="middle" ' + font + ' font-size="20" fill="' + GOLD + '">CHOY\'S</text>' +
      '<rect x="60" y="130" width="130" height="70" fill="#f7d58a"/><rect x="66" y="136" width="118" height="58" fill="#e9b44a"/>' +
      '<text x="125" y="160" text-anchor="middle" ' + font + ' font-size="10" fill="#7a1a10">CHOW MEIN</text><text x="125" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#7a1a10">EGG ROLLS</text>' +
      '<rect x="210" y="130" width="50" height="80" fill="#5a1a14"/><circle cx="252" cy="172" r="2.5" fill="' + GOLD + '"/>' +
      '<rect x="276" y="130" width="70" height="70" fill="#f7d58a"/><path d="M300 176q11 -12 22 0z" fill="#fff"/><rect x="298" y="176" width="26" height="10" rx="2" fill="#fff"/>' +
      '<g class="bst-st"><path d="M306 168q-4 -8 0 -14" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/></g><g class="bst-st bst-st2"><path d="M316 168q4 -8 0 -14" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/></g>' +
      lantern("", 70) + lantern("bst-lan2", 150) + lantern("", 250) + lantern("bst-lan2", 330) +
      '<path d="M30 30h340" stroke="#222" stroke-width="1.5"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#4a4a4f"/>' +
      car("bst-car", 0, 240, "#6a8a5a") +
      '<rect x="110" y="0" width="180" height="18" rx="3" fill="#111"/><text x="200" y="13" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NOSTRAND AV · FLATBUSH</text>',
      sky("bsts2", "#2a3a6a", "#e8a07a"));
  }

  /* 3. The Bon Soir, W 8th St, Greenwich Village */
  function bsbonsoir() {
    return svg(
      '<rect width="400" height="260" fill="#120a14"/>' +
      '<rect x="0" y="0" width="400" height="60" fill="#2a1a24"/>' +
      '<path d="M90 8h220l-14 34h-192z" fill="#5a1a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M' + (98 + i * 20) + ' 8l-2 34" stroke="#7a2a50" stroke-width="2"/>').join("") +
      '<text x="200" y="32" text-anchor="middle" ' + font + ' font-size="18" fill="' + GOLD + '" font-style="italic">BON SOIR</text>' +
      '<g class="bst-beam"><path d="M200 20l-50 220h100z" fill="#fff4c8" opacity=".14"/></g>' +
      '<ellipse cx="200" cy="236" rx="120" ry="16" fill="#3a1a2a"/><rect x="60" y="226" width="280" height="34" fill="#2a1420"/><rect x="60" y="224" width="280" height="4" fill="' + GOLD + '"/>' +
      '<path d="M200 226v-74" stroke="#bbb" stroke-width="3"/><path d="M188 226h24" stroke="#bbb" stroke-width="3"/><rect x="194" y="138" width="12" height="18" rx="6" fill="#444" stroke="#ccc" stroke-width="1.5"/>' +
      '<path d="M250 224v-40h70q12 0 12 12v28z" fill="#111" stroke="#444" stroke-width="1.5"/><rect x="252" y="196" width="78" height="8" fill="#fff"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (256 + i * 9) + '" y="196" width="5" height="5" fill="#111"/>').join("") +
      '<path d="M258 224v12M322 224v12" stroke="#111" stroke-width="3"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (30 + i * 68) + '" cy="250" r="9" fill="#3a2430"/><rect x="' + (22 + i * 68) + '" y="244" width="16" height="3" fill="' + GOLD + '"/>').join("") +
      '<g class="bst-note"><text x="140" y="150" ' + font + ' font-size="20" fill="' + GOLD + '">&#9834;</text></g><g class="bst-note bst-note2"><text x="232" y="140" ' + font + ' font-size="16" fill="' + LILAC + '">&#9835;</text></g>' +
      '<rect x="110" y="70" width="180" height="18" rx="3" fill="#000"/><text x="200" y="83" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">W 8 ST · GREENWICH VILLAGE</text>');
  }

  /* 4. Winter Garden Theatre, Broadway: Funny Girl */
  function bswinter() {
    const bulbRow = (y, x0, x1) => Array.from({ length: Math.floor((x1 - x0) / 12) + 1 }, (_, i) => '<circle class="bst-ch' + (i % 2 ? " bst-ch2" : "") + '" cx="' + (x0 + i * 12) + '" cy="' + y + '" r="2.5" fill="#fff4b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bsts4)"/>' +
      '<rect x="30" y="12" width="340" height="166" fill="#d8cfc0"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 52) + '" y="22" width="12" height="62" fill="#efe8da" stroke="#b9ac92" stroke-width="1"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (72 + i * 52) + '" y="30" width="24" height="44" fill="#3a3a4a"/>').join("") +
      '<rect x="30" y="84" width="340" height="6" fill="#b9ac92"/>' +
      '<rect x="44" y="96" width="312" height="66" fill="#111" stroke="' + GOLD + '" stroke-width="3"/>' + bulbRow(100, 50, 350) + bulbRow(158, 50, 350) +
      '<text x="200" y="134" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="28" fill="' + GOLD + '">FUNNY GIRL</text>' +
      '<text x="200" y="150" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">WINTER GARDEN · BROADWAY</text>' +
      '<rect x="30" y="162" width="340" height="16" fill="#3a1a10"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (54 + i * 62) + '" y="180" width="42" height="42" fill="#6a1a1a" stroke="' + GOLD + '" stroke-width="2"/>').join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#4a4a4f"/><rect x="0" y="220" width="400" height="4" fill="#b9b3a8"/>' +
      car("bst-carL", 0, 244, "#f7d417"),
      sky("bsts4", "#140c2a", "#4a2a5a"));
  }

  /* 5. Newkirk Av and E 31 St, P.S. 89 behind */
  function bscorner() {
    const wins = Array.from({ length: 2 }, (_, j) => Array.from({ length: 9 }, (_, i) => '<rect x="' + (40 + i * 36) + '" y="' + (40 + j * 34) + '" width="20" height="24" fill="#cfe0ea" stroke="#efe3c4" stroke-width="2"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bsts5)"/>' +
      '<rect x="20" y="24" width="360" height="100" fill="#9c4a34"/><rect x="20" y="24" width="360" height="6" fill="#efe3c4"/>' + wins +
      '<rect x="150" y="10" width="100" height="16" fill="#efe3c4"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2a1a">PUBLIC SCHOOL</text>' +
      '<rect x="0" y="120" width="400" height="104" fill="#6b6f78"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#5a5e66" stroke-width="1"/>').join("") +
      tag("BARBRA", 20, 194, 58, GOLD, -6) + tag("HELLO GORGEOUS", 168, 214, 20, LILAC, -4) + tag("BABS", 40, 216, 18, "#ff7aa0", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(250, 98, 140, "Newkirk Av") + sign(250, 124, 140, "E 31 St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bst-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("bst-car", 0, 244, "#c0392b") +
      '<g class="bst-sp"><circle cx="232" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bst-sp bst-sp2"><circle cx="238" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bsts5", "#5a6ab0", "#f2c48a"));
  }

  window.SCENES = { bsstation: bsstation, bschoys: bschoys, bsbonsoir: bsbonsoir, bswinter: bswinter, bscorner: bscorner };
})();
