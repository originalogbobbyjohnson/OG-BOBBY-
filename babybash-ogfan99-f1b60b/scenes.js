/* babybash scenes (Regions tab: Houston + Texas; Vallejo-born, came up in Houston). CSS classes and ids prefixed bb- (the page's own anim-train is kept).
   1 Convention District station on the METRORail Green/Purple lines: street-running center platform under a white canopy, a white METRORail car sliding in, the convention center's red pipes behind.
   2 Downtown arena at night (he wanted to go pro in basketball before music): glass arena front, a ball bouncing to the hoop.
   3 "You know it's leather when we ride, wood grain and raw hide": a candy-red slab cruising the freeway, trunk popped, the skyline behind.
   4 "She moves her body like a cyclone": the Galveston pier at dusk, the wheel turning, a coaster car rolling, a storm spinning out over the Gulf.
   5 Polk St and La Branch St downtown, green signs, BASH tagged on the wall, the downtown towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bb-flk{animation:bbflick 2.4s infinite}.bb-flk2{animation-delay:.8s}' +
    '@keyframes bbball{0%{transform:translate(0,0)}25%{transform:translate(40px,-70px)}50%{transform:translate(78px,-40px)}60%{transform:translate(80px,-20px)}80%{transform:translate(80px,30px)}100%{transform:translate(0,0)}}.bb-ball{animation:bbball 2.8s ease-in-out infinite}' +
    '@keyframes bbcar{from{transform:translateX(-160px)}to{transform:translateX(470px)}}.bb-car{animation:bbcar 7s linear infinite}' +
    '@keyframes bbcar2{from{transform:translateX(450px)}to{transform:translateX(-120px)}}.bb-car2{animation:bbcar2 5s linear infinite}' +
    '@keyframes bbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bb-wheel{transform-box:view-box;transform-origin:300px 120px;animation:bbspin 14s linear infinite}.bb-rim{transform-box:fill-box;transform-origin:50% 50%;animation:bbspin .5s linear infinite}' +
    '.bb-storm{transform-box:fill-box;transform-origin:50% 50%;animation:bbspin 6s linear infinite}' +
    '@keyframes bbcoast{0%{offset-distance:0%}100%{offset-distance:100%}}.bb-cc{offset-path:path("M40 150 C70 60 100 60 120 120 S160 170 190 110");animation:bbcoast 4s ease-in-out infinite alternate}' +
    '@keyframes bbwave{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.bb-wv{animation:bbwave 3s ease-in-out infinite}.bb-wv2{animation-delay:-1.5s}' +
    '@keyframes bbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bb-sp{animation:bbspray 1.4s ease-out infinite}.bb-sp2{animation-delay:.45s}' +
    '@keyframes bbneon{0%,100%{opacity:1}50%{opacity:.55}}.bb-neon{animation:bbneon 1.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#00a94f", PURPLE = "#6f2c91", CANDY = "#e0115f", GOLD = "#ffd23f", PINK = "#ff5fa2", SKYB = "#3fd0ff";
  /* downtown towers silhouette: [x, top, width] */
  const towers = (list, fill, lit) => '<g fill="' + fill + '">' + list.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] + '" height="' + (200 - t[1]) + '"/>').join("") + '</g>' +
    (lit ? list.map((t, i) => '<rect class="bb-flk' + (i % 2 ? " bb-flk2" : "") + '" x="' + (t[0] + 4) + '" y="' + (t[1] + 12) + '" width="3" height="3" fill="' + lit + '"/><rect x="' + (t[0] + t[2] - 8) + '" y="' + (t[1] + 30) + '" width="3" height="3" fill="' + lit + '"/>').join("") : "");
  const DT = [[30, 70, 26], [60, 40, 22], [86, 58, 30], [120, 28, 24], [148, 64, 20], [172, 46, 28], [204, 76, 22], [230, 52, 26], [262, 84, 24]];

  /* 1. Convention District, METRORail Green/Purple (street level) */
  function bbstation() {
    const win = [46, 84, 122, 206, 244, 282].map(x => '<rect x="' + x + '" y="122" width="30" height="26" rx="3" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<path d="M150 102l14 -12h40l14 12" stroke="#333" stroke-width="2.5" fill="none"/><rect x="146" y="102" width="76" height="5" fill="#555"/>' +
      '<rect x="28" y="106" width="322" height="76" rx="10" fill="#eef1f4" stroke="#9aa3ad" stroke-width="2"/>' + win +
      '<rect x="28" y="152" width="322" height="7" fill="#c8102e"/><rect x="28" y="159" width="322" height="5" fill="#1f4e9c"/><rect x="28" y="168" width="322" height="14" rx="4" fill="#4a4f57"/>' +
      '<rect x="162" y="118" width="16" height="48" fill="#cfd5db" stroke="#9aa3ad"/><rect x="179" y="118" width="16" height="48" fill="#cfd5db" stroke="#9aa3ad"/><rect x="165" y="122" width="10" height="20" fill="#1b2630"/><rect x="182" y="122" width="10" height="20" fill="#1b2630"/>' +
      '<path d="M328 108h12a10 10 0 0 1 10 10v54h-22z" fill="#d7dce1"/><rect x="331" y="116" width="15" height="22" rx="3" fill="#1b2630"/><circle cx="339" cy="172" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="110" width="58" height="10" rx="2" fill="#111"/><text x="291" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000">MAGNOLIA PK</text>' +
      '<circle cx="80" cy="184" r="7" fill="#222"/><circle cx="110" cy="184" r="7" fill="#222"/><circle cx="270" cy="184" r="7" fill="#222"/><circle cx="300" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs1)"/>' + towers(DT, "#2b3550", "#ffe9a8") +
      /* convention hall with its red pipes */
      '<rect x="270" y="58" width="130" height="44" fill="#e9e6df"/><rect x="270" y="58" width="130" height="6" fill="#c8102e"/>' +
      [286, 312, 338, 364].map(x => '<rect x="' + x + '" y="34" width="8" height="30" fill="#c8102e"/><rect x="' + (x - 3) + '" y="30" width="14" height="6" rx="2" fill="#c8102e"/>').join("") +
      '<rect x="270" y="80" width="130" height="10" fill="#7fb2d8" opacity=".8"/>' +
      '<rect x="0" y="98" width="400" height="90" fill="#6d6a66" opacity=".35"/><path d="M0 98h400" stroke="#333" stroke-width="1.5"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 2) + '" y="60" width="4" height="46" fill="#555"/><rect x="' + (x - 16) + '" y="60" width="32" height="3" fill="#555"/>').join("") +
      train +
      /* platform canopy */
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#b8b2a6"/><path d="M0 222h400" stroke="#a69f92" stroke-width="2"/>' +
      '<rect x="44" y="204" width="312" height="34" rx="3" fill="#111"/><text x="58" y="227" ' + font + ' font-size="15" fill="#fff">Convention District</text>' + badge(222, 221, "GREEN", GREEN) + badge(288, 221, "PURPLE", PURPLE),
      sky("bbs1", "#1d2550", "#e98b5a"));
  }

  /* 2. Downtown arena, the ball he chased before the mic */
  function bbcourt() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbs2)"/>' + towers([[0, 60, 30], [34, 40, 26], [340, 50, 28], [372, 70, 28]], "#1c2238", "#ffe9a8") +
      /* arena: curved glass front */
      '<path d="M60 170V84q140 -40 280 0v86z" fill="#22344f" stroke="#8fb3d6" stroke-width="2"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M' + (74 + i * 20) + ' ' + (170) + 'V' + (80 - Math.sin((i + 1) / 14 * Math.PI) * 10) + '" stroke="#8fb3d6" stroke-width="1" opacity=".6"/>').join("") +
      '<path d="M60 110q140 -36 280 0M60 140q140 -30 280 0" stroke="#8fb3d6" stroke-width="1" fill="none" opacity=".6"/>' +
      '<rect x="60" y="150" width="280" height="20" fill="' + SKYB + '" opacity=".25" class="bb-neon"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2d2f36"/>' +
      /* outdoor half court */
      '<rect x="0" y="182" width="400" height="78" fill="#b5532f"/><path d="M0 200h400M200 182v78" stroke="#fff" stroke-width="2" opacity=".7"/><path d="M300 260a60 40 0 0 1 120 0" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>' +
      '<rect x="356" y="96" width="6" height="110" fill="#ddd"/><rect x="326" y="92" width="44" height="30" fill="#fff" stroke="#c8102e" stroke-width="2"/><rect x="340" y="104" width="16" height="12" fill="none" stroke="#c8102e" stroke-width="2"/>' +
      '<ellipse cx="336" cy="124" rx="14" ry="3" fill="none" stroke="#ff6a00" stroke-width="2.5"/><path d="M323 124l4 16h18l4 -16" stroke="#fff" stroke-width="1" fill="none" opacity=".8"/>' +
      '<g class="bb-ball"><circle cx="256" cy="196" r="9" fill="#e8742a" stroke="#5a2a10" stroke-width="1.5"/><path d="M247 196h18M256 187v18" stroke="#5a2a10" stroke-width="1.2"/></g>' +
      '<ellipse cx="256" cy="208" rx="10" ry="3" fill="#000" opacity=".25"/>',
      sky("bbs2", "#0b1030", "#3b2a6a"));
  }

  /* 3. Candy-red slab on the freeway */
  function bbslab() {
    const slab = '<g class="bb-car">' +
      '<path d="M10 176h170l-6 -18h-36l-18 -20h-62l-24 20h-20z" fill="' + CANDY + '" stroke="#5a0420" stroke-width="2"/>' +
      '<path d="M64 140h56l14 16h-82z" fill="#2a3b55"/><rect x="88" y="140" width="4" height="16" fill="' + CANDY + '"/>' +
      '<path d="M14 160h168" stroke="#ffb3cf" stroke-width="2" opacity=".7"/>' +
      /* popped trunk with neon */
      '<path d="M150 158l30 -34" stroke="#5a0420" stroke-width="4"/><rect x="150" y="104" width="44" height="24" rx="3" fill="#120018" transform="rotate(-48 172 116)"/>' +
      '<text x="172" y="120" text-anchor="middle" transform="rotate(-48 172 116)" ' + font + ' font-size="8" fill="' + PINK + '" class="bb-neon">SUGA</text>' +
      '<g transform="translate(46 176)"><circle r="14" fill="#222"/><g class="bb-rim"><circle r="9" fill="#d9d9d9"/><path d="M0 -9v18M-9 0h18M-6 -6l12 12M6 -6l-12 12" stroke="#888" stroke-width="2"/></g></g>' +
      '<g transform="translate(150 176)"><circle r="14" fill="#222"/><g class="bb-rim"><circle r="9" fill="#d9d9d9"/><path d="M0 -9v18M-9 0h18M-6 -6l12 12M6 -6l-12 12" stroke="#888" stroke-width="2"/></g></g>' +
      '<rect x="66" y="160" width="40" height="5" rx="2" fill="#8b5a2b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bbs3)"/><circle cx="80" cy="60" r="26" fill="#ffd27a" opacity=".9"/>' +
      towers(DT.map(t => [t[0] + 110, t[1] + 10, t[2]]), "#3b2a4f", "#ffe9a8") +
      '<rect x="0" y="150" width="400" height="12" fill="#8a8a8a"/><rect x="0" y="162" width="400" height="98" fill="#4a4a4e"/>' +
      '<path d="M0 210h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="20 16"/>' +
      '<g class="bb-car2"><rect x="0" y="226" width="50" height="14" rx="5" fill="' + SKYB + '"/><rect x="10" y="218" width="28" height="10" rx="4" fill="' + SKYB + '"/><circle cx="12" cy="242" r="5" fill="#111"/><circle cx="40" cy="242" r="5" fill="#111"/></g>' +
      slab +
      '<rect x="300" y="96" width="5" height="54" fill="#666"/><rect x="262" y="70" width="96" height="28" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="310" y="89" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">DOWNTOWN</text>',
      sky("bbs3", "#f08a4b", "#6a2c70"));
  }

  /* 4. Galveston pier at dusk, a cyclone over the Gulf */
  function bbpier() {
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M300 120L' + (300 + Math.cos(a) * 52).toFixed(1) + ' ' + (120 + Math.sin(a) * 52).toFixed(1) + '" stroke="#ffe9a8" stroke-width="1.5"/>' +
      '<circle cx="' + (300 + Math.cos(a) * 52).toFixed(1) + '" cy="' + (120 + Math.sin(a) * 52).toFixed(1) + '" r="5" fill="' + [PINK, GOLD, SKYB][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bbs4)"/>' +
      '<g transform="translate(110 54)"><g class="bb-storm"><path d="M-30 0a30 12 0 1 0 60 0a22 9 0 1 0 -44 0a14 6 0 1 0 28 0" stroke="#cfd6e6" stroke-width="5" fill="none" opacity=".75"/></g></g>' +
      '<path d="M104 66q6 30 -4 60" stroke="#cfd6e6" stroke-width="4" fill="none" opacity=".5"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2a5d7c"/>' +
      '<g class="bb-wv"><path d="M0 204q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc6e6" stroke-width="2" fill="none" opacity=".7"/></g>' +
      '<g class="bb-wv bb-wv2"><path d="M0 230q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fc6e6" stroke-width="2" fill="none" opacity=".6"/></g>' +
      /* pier deck on pilings */
      '<rect x="0" y="176" width="400" height="10" fill="#6b4a2e"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (8 + i * 30) + '" y="186" width="5" height="30" fill="#4a3220"/>').join("") +
      /* coaster track */
      '<path d="M40 150 C70 60 100 60 120 120 S160 170 190 110 L210 176" stroke="#f26a1b" stroke-width="4" fill="none"/>' +
      [50, 80, 110, 140, 170, 196].map(x => '<rect x="' + x + '" y="' + (x < 100 ? 100 : 130) + '" width="3" height="' + (x < 100 ? 76 : 46) + '" fill="#b04a12"/>').join("") +
      '<g class="bb-cc"><rect x="-8" y="-6" width="16" height="10" rx="3" fill="' + GOLD + '"/></g>' +
      /* wheel */
      '<path d="M300 120l-26 56M300 120l26 56" stroke="#ddd" stroke-width="4"/>' +
      '<g class="bb-wheel"><circle cx="300" cy="120" r="52" fill="none" stroke="#ffe9a8" stroke-width="3"/>' + spokes + '</g>' +
      '<circle cx="300" cy="120" r="6" fill="#ddd"/>' +
      '<rect x="230" y="150" width="40" height="26" fill="#fff4e0"/><path d="M226 150l24 -14 24 14z" fill="' + CANDY + '"/>',
      sky("bbs4", "#3a2a6a", "#f2a35a"));
  }

  /* 5. Polk St and La Branch St, downtown */
  function bbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bbs5)"/>' + towers(DT.map(t => [t[0] + 10, t[1] - 10, t[2]]), "#2a3150", "#ffe9a8") +
      '<rect x="0" y="126" width="400" height="98" fill="#d9c3a4"/>' + Array.from({ length: 7 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 6) + '" y="' + (128 + r * 14) + '" width="28" height="12" fill="#c8ab86"/>').join("")).join("") +
      '<rect x="0" y="126" width="400" height="5" fill="#9c7a55"/>' +
      tag("BASH", 22, 194, 62, PINK, -6) + tag("BASHTOWN", 156, 214, 20, GOLD, -4) + tag("WHAT IS IT", 24, 216, 15, SKYB, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55565b"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 132, "Polk St") + sign(254, 124, 132, "La Branch St") +
      '<rect x="232" y="110" width="4" height="114" fill="#222"/><circle class="bb-flk" cx="234" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bb-sp"><circle cx="196" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="bb-sp bb-sp2"><circle cx="202" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("bbs5", "#1d1940", "#e2705f"));
  }

  window.SCENES = { bbstation: bbstation, bbcourt: bbcourt, bbslab: bbslab, bbpier: bbpier, bbcorner: bbcorner };
})();
