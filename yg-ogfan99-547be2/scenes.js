/* yg scenes (Regions tab: Los Angeles + SoCal; Westside Compton). CSS classes prefixed yg- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ygflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.yg-flk{animation:ygflick 2.6s infinite}.yg-flk2{animation-delay:.9s}' +
    '@keyframes ygsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.yg-sw{transform-box:fill-box;transform-origin:50% 100%;animation:ygsway 4s ease-in-out infinite}.yg-sw2{animation-delay:-2s}' +
    '@keyframes ygsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-22px);opacity:0}}.yg-st{animation:ygsteam 2.2s ease-out infinite}.yg-st2{animation-delay:-.7s}.yg-st3{animation-delay:-1.4s}' +
    '@keyframes ygleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-50px,190px) rotate(240deg)}}.yg-lf{transform-box:fill-box;animation:ygleaf 7s linear infinite}.yg-lf2{animation-delay:-2.4s}.yg-lf3{animation-delay:-4.8s}' +
    '@keyframes ygmarch{0%{transform:translateX(-30px)}100%{transform:translateX(30px)}}.yg-mr{animation:ygmarch 6s ease-in-out infinite alternate}' +
    '@keyframes ygbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.yg-bob{animation:ygbob 1.6s ease-in-out infinite}.yg-bob2{animation-delay:-.8s}' +
    '@keyframes ygfly{0%{transform:translate(-60px,20px)}100%{transform:translate(460px,-30px)}}.yg-fly{animation:ygfly 9s linear infinite}' +
    '@keyframes yghop{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-7deg)}80%{transform:rotate(0)}88%{transform:rotate(-4deg)}}.yg-hop{transform-box:fill-box;transform-origin:85% 100%;animation:yghop 2.4s ease-in-out infinite}' +
    '@keyframes ygblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.yg-rec{animation:ygblink 1s steps(1) infinite}' +
    '@keyframes ygspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.yg-sp{animation:ygspray 1.4s ease-out infinite}.yg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* a fan palm: tall thin trunk, a round head of fronds */
  const palm = (x, base, h, col, cls) => {
    const tx = x + 6, ty = base - h;
    let fr = "";
    for (let i = 0; i < 9; i++) { const a = (-160 + i * 17.5) * Math.PI / 180, L = 22 + (i % 2) * 5; fr += '<path d="M' + tx + ' ' + ty + 'q' + (Math.cos(a) * L * 0.6).toFixed(1) + ' ' + (Math.sin(a) * L * 0.6 - 6).toFixed(1) + ' ' + (Math.cos(a) * L).toFixed(1) + ' ' + (Math.sin(a) * L + 6).toFixed(1) + '" stroke="' + col + '" stroke-width="4" fill="none" stroke-linecap="round"/>'; }
    return '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' ' + 6 + ' ' + (-h) + '" stroke="' + col + '" stroke-width="4" fill="none"/>' + fr + '</g>';
  };
  const RED = "#e23b3b", GOLD = "#f2b33d", CREAM = "#f4f1ea", METRO = "#e16710";

  /* 1. Metro Local 125 pulling into the Rosecrans Av & Willowbrook Av stop: late sun, power lines, palms, the orange-banded bus sliding in */
  function ygstation() {
    const bus = '<g class="anim-train"><rect x="30" y="118" width="300" height="80" rx="10" fill="#f3f3f0" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="130" width="34" height="32" rx="3" fill="#243240"/>').join("") +
      '<rect x="38" y="130" width="32" height="58" rx="3" fill="#243240"/><rect x="30" y="166" width="300" height="10" fill="' + METRO + '"/><rect x="30" y="178" width="300" height="4" fill="#b8410f"/>' +
      '<rect x="36" y="120" width="120" height="11" rx="2" fill="#111"/><text x="96" y="129" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">125 ROSECRANS</text>' +
      '<circle cx="84" cy="198" r="13" fill="#222"/><circle cx="84" cy="198" r="5" fill="#9aa1a8"/><circle cx="270" cy="198" r="13" fill="#222"/><circle cx="270" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="34" cy="188" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yg1)"/>' +
      '<circle cx="80" cy="96" r="26" fill="#ffe7a6" opacity=".9"/>' +
      palm(20, 190, 120, "#3a2a2a", "yg-sw") + palm(150, 190, 140, "#3a2a2a", "yg-sw yg-sw2") + palm(250, 190, 110, "#3a2a2a", "yg-sw") +
      '<path d="M0 84q100 14 200 4t200 6M0 92q100 14 200 4t200 6" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>' +
      '<rect x="0" y="188" width="400" height="30" fill="#555a60"/><path d="M0 203h400" stroke="#e9d66b" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="0" y="218" width="400" height="42" fill="#b9b2a4"/><rect x="0" y="218" width="400" height="4" fill="#d9d2c2"/>' +
      '<rect x="356" y="120" width="5" height="100" fill="#6a6e72"/><rect x="342" y="120" width="34" height="40" rx="3" fill="#fff" stroke="#333" stroke-width="1.5"/>' +
      '<circle cx="359" cy="136" r="11" fill="' + METRO + '"/><text x="359" y="140.5" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">125</text><text x="359" y="156" text-anchor="middle" ' + font + ' font-size="6.5" fill="#333">LOCAL</text>' +
      '<rect x="40" y="16" width="320" height="40" rx="4" fill="#111"/><text x="56" y="42" ' + font + ' font-size="15" fill="#fff">Rosecrans Av / Willowbrook Av</text>' + badge(306, 36, "125", METRO),
      sky("yg1", "#f08a4b", "#ffd9a0"));
  }

  /* 2. Roy Campanella Park, the 4Hunnid Ways Thanksgiving giveback: white tent with a red valance, turkey boxes stacked on tables, a line of neighbors, steam off the trays, leaves falling */
  function ygpark() {
    const people = Array.from({ length: 7 }, (_, i) => {
      const x = 40 + i * 28, c = ["#2b2f3a", "#7a1f24", "#3d4f6b", "#4a3a2a", "#23443a", "#5a2a4a", "#333"][i];
      return '<g class="' + (i % 2 ? "yg-bob yg-bob2" : "yg-bob") + '" style="animation-duration:' + (2.4 + i * 0.2) + 's"><circle cx="' + x + '" cy="176" r="7" fill="' + c + '"/><rect x="' + (x - 8) + '" y="184" width="16" height="30" rx="6" fill="' + c + '"/><rect x="' + (x - 7) + '" y="212" width="5" height="16" fill="' + c + '"/><rect x="' + (x + 2) + '" y="212" width="5" height="16" fill="' + c + '"/></g>';
    }).join("");
    const boxes = Array.from({ length: 6 }, (_, i) => '<rect x="' + (246 + (i % 3) * 30) + '" y="' + (176 - Math.floor(i / 3) * 18) + '" width="26" height="16" rx="1" fill="#c79a5a" stroke="#7a5a2a" stroke-width="1.2"/><path d="M' + (252 + (i % 3) * 30) + ' ' + (184 - Math.floor(i / 3) * 18) + 'h14" stroke="#7a5a2a" stroke-width="1.2"/>').join("");
    const leaves = Array.from({ length: 8 }, (_, i) => '<ellipse class="yg-lf' + ["", " yg-lf2", " yg-lf3"][i % 3] + '" cx="' + (60 + i * 44) + '" cy="' + (6 + (i * 17) % 40) + '" rx="4" ry="2.5" fill="' + ["#e2874c", "#f2b33d", "#c0502e"][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#yg2)"/>' +
      palm(14, 170, 120, "#2f3a2a", "yg-sw") + palm(356, 170, 130, "#2f3a2a", "yg-sw yg-sw2") +
      '<rect x="0" y="168" width="400" height="92" fill="#5f9a46"/><rect x="0" y="168" width="400" height="6" fill="#4c843a"/>' +
      '<path d="M224 96l80 -26l80 26z" fill="#ffffff" stroke="#c8c2b6" stroke-width="1.5"/><rect x="224" y="96" width="160" height="12" fill="' + RED + '"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (224 + i * 20) + ' 108q10 8 20 0" fill="' + RED + '"/>').join("") +
      '<rect x="228" y="108" width="4" height="86" fill="#c8c2b6"/><rect x="376" y="108" width="4" height="86" fill="#c8c2b6"/>' +
      '<rect x="236" y="192" width="140" height="8" rx="1" fill="#fff" stroke="#c8c2b6"/><rect x="240" y="200" width="4" height="22" fill="#8a8a80"/><rect x="368" y="200" width="4" height="22" fill="#8a8a80"/>' + boxes +
      '<rect x="330" y="140" width="40" height="12" rx="2" fill="#c9ccd1" stroke="#8d949b"/>' +
      '<path class="yg-st" d="M338 138q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/><path class="yg-st yg-st2" d="M350 138q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/><path class="yg-st yg-st3" d="M362 138q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<rect x="20" y="20" width="196" height="54" rx="4" fill="#111"/><text x="118" y="44" text-anchor="middle" ' + font + ' font-size="17" fill="' + RED + '">4HUNNID WAYS</text><text x="118" y="63" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">THANKSGIVING GIVEBACK</text>' +
      '<text x="118" y="88" text-anchor="middle" ' + font + ' font-size="9" fill="#3b3326">ROY CAMPANELLA PARK</text>' +
      people + leaves,
      sky("yg2", "#9cc6e8", "#f6e6c4"));
  }

  /* 3. The 2024 peace walk out of Gonzales Park: a long line of marchers under a PEACE IN COMPTON banner, red and green balloons, palms, a dove crossing */
  function ygpeace() {
    const marchers = Array.from({ length: 14 }, (_, i) => {
      const x = 10 + i * 30, c = ["#2b2f3a", "#e23b3b", "#3d4f6b", "#2f8f4e", "#4a3a2a", "#ffffff", "#5a2a4a"][i % 7], top = 158 + (i % 3) * 3;
      return '<g><circle cx="' + x + '" cy="' + top + '" r="7" fill="#3b2a22"/><rect x="' + (x - 9) + '" y="' + (top + 8) + '" width="18" height="30" rx="6" fill="' + c + '" stroke="#222" stroke-width="1"/><rect x="' + (x - 7) + '" y="' + (top + 36) + '" width="5" height="18" fill="#2a2a2a"/><rect x="' + (x + 2) + '" y="' + (top + 36) + '" width="5" height="18" fill="#2a2a2a"/></g>';
    }).join("");
    const balloon = (x, y, c, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="9" ry="11" fill="' + c + '"/><path d="M' + x + ' ' + (y + 11) + 'q-3 18 2 36" stroke="#444" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yg3)"/><circle cx="330" cy="56" r="24" fill="#fff1b8"/>' +
      palm(40, 150, 100, "#2f4a2a", "yg-sw") + palm(196, 150, 116, "#2f4a2a", "yg-sw yg-sw2") + palm(370, 150, 96, "#2f4a2a", "yg-sw") +
      '<rect x="0" y="146" width="400" height="30" fill="#6faa4f"/><rect x="0" y="176" width="400" height="84" fill="#8a8680"/><path d="M0 214h400" stroke="#d9d2c2" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="yg-mr">' + marchers +
      '<rect x="96" y="128" width="208" height="30" rx="3" fill="' + CREAM + '" stroke="#222" stroke-width="1.5"/><text x="200" y="149" text-anchor="middle" ' + font + ' font-size="17" fill="' + RED + '">PEACE IN COMPTON</text>' +
      '<rect x="98" y="156" width="3" height="18" fill="#6b4a2a"/><rect x="299" y="156" width="3" height="18" fill="#6b4a2a"/></g>' +
      balloon(60, 96, RED, "yg-bob") + balloon(84, 86, "#2f8f4e", "yg-bob yg-bob2") + balloon(330, 98, "#2f8f4e", "yg-bob") + balloon(352, 88, RED, "yg-bob yg-bob2") +
      '<g class="yg-fly"><path d="M0 40q8 -8 16 0q8 -8 16 0" stroke="#fff" stroke-width="3" fill="none"/></g>' +
      '<text x="20" y="30" ' + font + ' font-size="11" fill="#2b2b2b">GONZALES PARK · AUG 2024</text>',
      sky("yg3", "#8fc3ef", "#fdf3d6"));
  }

  /* 4. "Had Bompton there shootin' videos on the block": stucco houses at dusk, a candy-red '64 lowrider hitting the switch, the camera rolling with its red REC light, a light stand */
  function ygshoot() {
    const house = (x, c) => '<rect x="' + x + '" y="110" width="96" height="70" fill="' + c + '"/><path d="M' + (x - 6) + ' 112l54 -28l54 28z" fill="#7a4a3a"/><rect x="' + (x + 14) + '" y="128" width="22" height="20" fill="#2a3542"/><rect x="' + (x + 58) + '" y="132" width="22" height="48" fill="#5a3a2a"/>';
    /* a long, low, boxy '64 Impala: flat hood and trunk, a squared-off roof, chrome side spear, whitewall wire wheels */
    const wheel = cx => '<circle cx="' + cx + '" cy="206" r="12" fill="#1a1a1a"/><circle cx="' + cx + '" cy="206" r="8.5" fill="#f4f1ea"/><circle cx="' + cx + '" cy="206" r="6" fill="#cfcfcf"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + cx + ' 206l' + (Math.cos(i * 0.785) * 6).toFixed(1) + ' ' + (Math.sin(i * 0.785) * 6).toFixed(1) + '" stroke="#8a8a8a" stroke-width="1"/>').join("");
    const car = '<g class="yg-hop"><path d="M52 202v-18q0 -6 6 -7l40 -3h196q10 0 12 8v20z" fill="#c8102e" stroke="#5a0a14" stroke-width="2"/>' +
      '<path d="M120 175l16 -19h82l18 19z" fill="#c8102e" stroke="#5a0a14" stroke-width="2"/><path d="M126 174l13 -15h34v15zM178 174v-15h37l14 15z" fill="#2a3542"/>' +
      '<path d="M60 188h244" stroke="#f4f1ea" stroke-width="2.5"/><rect x="48" y="198" width="262" height="5" rx="2" fill="#d9d9d9"/><rect x="50" y="182" width="6" height="8" rx="1" fill="#fff6c2"/><rect x="302" y="184" width="6" height="7" rx="1" fill="#ff5a4a"/>' +
      wheel(98) + wheel(262) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yg4)"/>' + house(10, "#e8d3b0") + house(120, "#cfe0e8") + house(230, "#f0c6b8") +
      palm(334, 180, 130, "#2a1f2a", "yg-sw") +
      '<path d="M0 172h400" stroke="#8a8a8a" stroke-width="1"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 160l10 12l10 -12" stroke="#9a9a9a" stroke-width=".8" fill="none"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#4d5257"/><rect x="0" y="180" width="400" height="5" fill="#b9b2a4"/>' + car +
      '<rect x="324" y="150" width="34" height="24" rx="3" fill="#1b1b1b"/><circle cx="324" cy="162" r="9" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle cx="350" cy="156" r="3" fill="#ff2a2a" class="yg-rec"/>' +
      '<path d="M341 174l-12 54M341 174l12 54M341 174v54" stroke="#333" stroke-width="2.5"/>' +
      '<g opacity=".16"><path d="M374 102l-250 76l40 26l212 -94z" fill="#fff8d0" class="yg-flk"/></g><rect x="372" y="94" width="24" height="18" rx="2" fill="#333"/><rect x="372" y="100" width="4" height="8" fill="#fff8d0"/><path d="M385 112v116M385 228l-10 0M385 228l10 0" stroke="#333" stroke-width="2.5"/>' +
      '<rect x="18" y="214" width="56" height="30" rx="2" fill="#222"/><path d="M18 214l56 -10v10z" fill="#fff"/><text x="46" y="234" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">4HUNNID</text>',
      sky("yg4", "#3a2a5a", "#f29a6a"));
  }

  /* 5. W Spruce St and N Oleander Ave, the 400 block of the tree streets: YG and 4HUNNID on the stucco wall, green signs, the burger stand's pole sign glowing up on Rosecrans behind */
  function ygcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#yg5)"/>' +
      palm(30, 140, 110, "#2a1a2a", "yg-sw") + palm(250, 140, 120, "#2a1a2a", "yg-sw yg-sw2") +
      '<rect x="168" y="30" width="6" height="110" fill="#3a3a3a"/><rect x="128" y="16" width="86" height="46" rx="8" fill="#1d1d1d" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path class="yg-flk" d="M148 40q23 -20 46 0z" fill="#d9952f"/><rect class="yg-flk" x="146" y="40" width="50" height="5" rx="2" fill="#4caf50"/><rect class="yg-flk" x="146" y="45" width="50" height="6" rx="2" fill="#7a3a1a"/><path class="yg-flk" d="M146 51h50q0 6 -6 6h-38q-6 0 -6 -6z" fill="#d9952f"/>' +
      '<rect x="132" y="66" width="78" height="18" rx="2" fill="#1d1d1d"/><text class="yg-flk yg-flk2" x="171" y="80" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">BURGERS</text>' +
      '<rect x="0" y="120" width="400" height="104" fill="#ece2cf"/><rect x="0" y="120" width="400" height="6" fill="#d8ccb4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 126v98" stroke="#ddd2bc" stroke-width="1"/>').join("") +
      tag("YG", 70, 196, 64, RED, -8) + tag("4HUNNID", 168, 200, 30, CREAM, -5) + tag("BOMPTON", 168, 166, 18, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="334" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(290, 98, 94, "W Spruce St") + sign(286, 124, 102, "N Oleander Av") +
      '<g class="yg-sp"><circle cx="120" cy="150" r="3" fill="' + RED + '" opacity=".7"/></g><g class="yg-sp yg-sp2"><circle cx="126" cy="144" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("yg5", "#1e1438", "#e0705a"));
  }

  window.SCENES = { ygstation: ygstation, ygpark: ygpark, ygpeace: ygpeace, ygshoot: ygshoot, ygcorner: ygcorner };
})();
