/* Bktherula scenes (Regions tab: Atlanta; born and raised in Atlanta, came up on the city's underground circuit). CSS classes prefixed bk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bkglow{0%,100%{opacity:.45}50%{opacity:1}}.bk-glow{animation:bkglow 2.2s ease-in-out infinite}.bk-g2{animation-delay:-1.1s}' +
    '@keyframes bkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bk-flk{animation:bkflick 2.6s infinite}.bk-flk2{animation-delay:.9s}' +
    '@keyframes bkbike{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.bk-bike{animation:bkbike 9s linear infinite}.bk-bike2{animation-delay:-4.5s}' +
    '@keyframes bksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:bksway 4s ease-in-out infinite}.bk-sw2{animation-delay:-2s}' +
    '@keyframes bkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bk-sp{animation:bkspray 1.4s ease-out infinite}.bk-sp2{animation-delay:.45s}' +
    '@keyframes bkwalk{0%{transform:translateX(60px)}100%{transform:translateX(-440px)}}.bk-walk{animation:bkwalk 16s linear infinite}' +
    '@keyframes bkdrip{0%{transform:scaleY(.2)}100%{transform:scaleY(1)}}.bk-drip{transform-box:fill-box;transform-origin:50% 0%;animation:bkdrip 3s ease-in infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, base, r, cls) => '<g class="bk-sway' + (cls || "") + '"><rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#5a4632"/><circle cx="' + x + '" cy="' + (base - r) + '" r="' + r * 0.7 + '" fill="#3f7a3a"/><circle cx="' + (x - r * 0.4) + '" cy="' + (base - r * 0.8) + '" r="' + r * 0.5 + '" fill="#4f8a48"/></g>';
  const PUR = "#b388ff", TEAL = "#36e2c6", PINK = "#ff6fb5", MB = "#0075b2", MG = "#009d4f";

  /* 1. MARTA's Blue/Green line pulling into Inman Park/Reynoldstown: the open-air platform, concrete canopy, the silver railcar with its orange-and-blue stripe, the black station sign */
  function bkstation() {
    const train = '<g class="anim-train"><rect x="20" y="112" width="330" height="76" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="124" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="158" width="330" height="5" fill="#f2a52a"/><rect x="20" y="164" width="330" height="5" fill="' + MB + '"/>' +
      '<rect x="330" y="116" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bk1)"/>' + tree(40, 110, 30) + tree(360, 112, 34, " bk-sw2") + tree(300, 110, 24) +
      '<rect x="0" y="0" width="400" height="14" fill="#8a8a86"/><rect x="0" y="14" width="400" height="6" fill="#6f6f6a"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 6) + '" y="20" width="12" height="172" fill="#9a9a94"/>').join("") +
      '<rect x="0" y="100" width="400" height="92" fill="#3a3c40" opacity=".45"/>' + train +
      '<rect x="0" y="192" width="400" height="7" fill="#f2c200"/><rect x="0" y="199" width="400" height="61" fill="#a8a59c"/>' +
      '<rect x="54" y="34" width="292" height="50" rx="3" fill="#111"/><text x="66" y="56" ' + font + ' font-size="13" fill="#fff">Inman Park / Reynoldstown</text>' +
      badge(66, 72, "BLUE", MB) + badge(120, 72, "GREEN", MG) +
      '<rect class="bk-flk" x="150" y="214" width="100" height="5" rx="2" fill="#fff6c2" opacity=".45"/>',
      sky("bk1", "#7fb7e8", "#f2e2c8"));
  }

  /* 2. Little Five Points: the colorful storefront strip on Euclid Ave, painted murals, string lights, bikes rolling past */
  function bkl5p() {
    const shops = [["#e85a4f", "#ffd84a"], ["#3fa7d6", "#ffffff"], ["#7b3fa8", TEAL], ["#f2a52a", "#2a1a3a"], ["#2fa36b", PINK]];
    const bike = cls => '<g class="bk-bike' + cls + '"><circle cx="20" cy="222" r="10" fill="none" stroke="#222" stroke-width="3"/><circle cx="52" cy="222" r="10" fill="none" stroke="#222" stroke-width="3"/><path d="M20 222l14 -16h14l4 16M34 206l-4 -8h-6M48 206l2 -8" stroke="#c43" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bk2)"/>' +
      shops.map((c, i) => '<rect x="' + (i * 80) + '" y="60" width="80" height="130" fill="' + c[0] + '"/><rect x="' + (i * 80 + 10) + '" y="120" width="60" height="50" fill="#1d262e"/>' +
        '<rect x="' + (i * 80 + 8) + '" y="76" width="64" height="30" fill="' + c[1] + '" opacity=".85"/>' +
        '<path d="M' + (i * 80 + 10) + ' 100q14 -22 28 -6t30 -10" stroke="' + c[0] + '" stroke-width="5" fill="none"/><circle cx="' + (i * 80 + 58) + '" cy="84" r="4" fill="' + c[0] + '"/>').join("") +
      '<path d="M0 50q100 18 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle class="bk-glow' + (i % 2 ? " bk-g2" : "") + '" cx="' + (12 + i * 25) + '" cy="' + (52 + Math.sin(i / 2.5) * 6) + '" r="3" fill="#fff2a8"/>').join("") +
      '<rect x="0" y="190" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="202" width="400" height="58" fill="#4a4a50"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      bike("") + bike(" bk-bike2"),
      sky("bk2", "#8ec2ea", "#f6dcc0"));
  }

  /* 3. Underground Atlanta: the old brick streets under the viaducts, gas lamps, arched storefronts, the city's underground scene where she came up */
  function bkunder() {
    return svg(
      '<rect width="400" height="260" fill="#2a1d1a"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#5a5550"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 10) + '" y="40" width="20" height="170" fill="#6e6862"/>').join("") +
      [0, 1, 2, 3].map(i => '<rect x="' + (i * 100 + 10) + '" y="70" width="80" height="120" fill="#8a3e2a"/><path d="M' + (i * 100 + 22) + ' 190v-60a28 28 0 0 1 56 0v60z" fill="#1a1414"/>' +
        '<path d="M' + (i * 100 + 26) + ' 128a24 24 0 0 1 48 0" stroke="' + [PUR, TEAL, PINK, "#ffd84a"][i] + '" stroke-width="3" fill="none" class="bk-glow' + (i % 2 ? " bk-g2" : "") + '"/>').join("") +
      [130, 270].map((x, i) => '<rect x="' + (x - 2) + '" y="110" width="4" height="90" fill="#222"/><path d="M' + (x - 9) + ' 100h18l-4 12h-10z" fill="#222"/><rect class="bk-flk' + (i ? " bk-flk2" : "") + '" x="' + (x - 6) + '" y="102" width="12" height="9" fill="#ffd27a"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#7a5040"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 200v60" stroke="#5a3a2e" stroke-width="1"/>').join("") +
      '<path d="M0 220h400M0 240h400" stroke="#5a3a2e" stroke-width="1"/>' +
      '<rect x="140" y="12" width="120" height="22" rx="3" fill="#111"/><text x="200" y="28" text-anchor="middle" ' + font + ' font-size="11" fill="' + TEAL + '">UNDERGROUND</text>',
      "");
  }

  /* 4. The BeltLine's Eastside Trail: the wide concrete path, murals on the old warehouse walls, trees, people strolling, bikes */
  function bkbeltline() {
    const walkers = '<g class="bk-walk">' + [150, 210, 290, 360, 430].map((x, i) => '<rect x="' + x + '" y="' + (176 - (i % 2) * 4) + '" width="12" height="34" rx="5" fill="' + [PUR, "#333", PINK, TEAL, "#555"][i] + '"/><circle cx="' + (x + 6) + '" cy="' + (170 - (i % 2) * 4) + '" r="7" fill="#3a2a22"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bk4)"/>' +
      '<rect x="0" y="70" width="230" height="100" fill="#9a6a4a"/>' +
      '<rect x="10" y="84" width="210" height="76" fill="' + PUR + '" opacity=".85"/><circle cx="60" cy="122" r="26" fill="' + TEAL + '"/><path d="M110 150q40 -70 90 -40" stroke="' + PINK + '" stroke-width="10" fill="none"/><circle cx="170" cy="108" r="12" fill="#ffd84a"/>' +
      tree(260, 170, 46) + tree(330, 170, 40, " bk-sw2") + tree(390, 170, 50) +
      '<rect x="0" y="170" width="400" height="90" fill="#7fae5a"/><path d="M0 200h400v40h-400z" fill="#cfcac0"/><path d="M0 220h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="12 10"/>' +
      walkers,
      sky("bk4", "#86c6f2", "#f8e8c8"));
  }

  /* 5. The corner: Krog St SE at Wylie St, the south mouth of the Krog Street Tunnel, every inch painted, BKTHERULA tagged over it, downtown's towers behind */
  function bkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bk5)"/>' +
      '<g fill="#3a3550" opacity=".85"><rect x="230" y="30" width="22" height="80"/><path d="M230 30l11 -12l11 12z"/><rect x="258" y="50" width="18" height="60"/><rect x="282" y="20" width="16" height="90"/><rect x="304" y="44" width="24" height="66"/></g>' +
      '<rect x="40" y="96" width="340" height="114" fill="#6a6560"/><rect x="40" y="90" width="340" height="10" fill="#4f4a46"/>' +
      '<path d="M110 210v-60a90 60 0 0 1 180 0v60z" fill="#1a1616"/>' +
      [[60, 120, PINK], [300, 130, TEAL], [80, 180, "#ffd84a"], [320, 186, PUR]].map(c => '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="14" fill="' + c[2] + '" opacity=".8"/>').join("") +
      '<rect class="bk-drip" x="150" y="118" width="3" height="16" fill="' + PUR + '"/><rect class="bk-drip" x="214" y="120" width="3" height="12" fill="' + PUR + '"/>' +
      tag("BKTHERULA", 92, 132, 38, PUR, -5) + tag("LVL5", 300, 176, 18, TEAL, 6) + tag("RULA", 60, 200, 16, PINK, -4) +
      '<circle class="bk-sp" cx="352" cy="160" r="3" fill="' + TEAL + '" opacity=".7"/><circle class="bk-sp bk-sp2" cx="358" cy="156" r="2.5" fill="' + PINK + '" opacity=".7"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#4a4a50"/>' +
      '<rect x="22" y="84" width="5" height="126" fill="#6b7178"/>' + sign(4, 60, 100, "KROG ST SE") + sign(8, 84, 92, "WYLIE ST SE"),
      sky("bk5", "#2a1a4a", "#e07a5f"));
  }

  window.SCENES = { bkstation: bkstation, bkl5p: bkl5p, bkunder: bkunder, bkbeltline: bkbeltline, bkcorner: bkcorner };
})();
