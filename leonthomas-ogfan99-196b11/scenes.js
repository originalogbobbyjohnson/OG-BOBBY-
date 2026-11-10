/* leonthomas scenes (NYC map: Park Slope, Brooklyn; born in Park Slope, grew up going to the free summer shows at the Prospect Park Bandshell; Broadway kid; MUTT). CSS classes prefixed lt- (the page's own anim-train is kept).
   1 Grand Army Plaza (2/3), underground on the Eastern Parkway line: tiled platform, black sign with the red 2 and 3 bullets, the train pulling in.
   2 The Prospect Park Bandshell on a summer night: the pale shell over the stage, lights pulsing, the crowd on the lawn (silhouettes only), notes floating up.
   3 A Broadway stage (he was a kid on Broadway): red curtains, gold proscenium, a big orange sun rising over a rock, spotlights swinging.
   4 A Park Slope brownstone stoop: brown stone fronts, iron railings, a street tree, a mutt wagging its tail on the stoop.
   5 Prospect Park West and 9 St: green signs (the 9 drawn with a straight stem), LEON tagged on the park wall with MUTT and EZMNY, the park trees and bandshell gate behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ltglow{0%,100%{opacity:.4}50%{opacity:1}}.lt-glow{animation:ltglow 2.4s ease-in-out infinite}.lt-g2{animation-delay:-1.2s}' +
    '@keyframes ltnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.lt-note{animation:ltnote 3.2s ease-out infinite}.lt-n2{animation-delay:-1.1s}.lt-n3{animation-delay:-2.2s}' +
    '@keyframes ltbeamL{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(10deg)}}.lt-bl{transform-box:fill-box;transform-origin:50% 0%;animation:ltbeamL 4s ease-in-out infinite}' +
    '@keyframes ltbeamR{0%,100%{transform:rotate(14deg)}50%{transform:rotate(-10deg)}}.lt-br{transform-box:fill-box;transform-origin:50% 0%;animation:ltbeamR 4s ease-in-out infinite}' +
    '@keyframes ltsun{0%,100%{transform:translateY(6px)}50%{transform:translateY(-6px)}}.lt-sun{animation:ltsun 5s ease-in-out infinite}' +
    '@keyframes ltwag{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(25deg)}}.lt-wag{transform-box:fill-box;transform-origin:0% 100%;animation:ltwag .5s ease-in-out infinite}' +
    '@keyframes ltleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lt-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:ltleaf 3.6s ease-in-out infinite}' +
    '@keyframes ltbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.lt-bob{animation:ltbob 1.2s ease-in-out infinite}.lt-b2{animation-delay:-.6s}' +
    '@keyframes ltdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(22px);opacity:0}}.lt-dr{animation:ltdrip 1.9s ease-in infinite}' +
    '@keyframes ltcar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.lt-car{animation:ltcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, r, txt, fill, ink) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '"/><text x="' + x + '" y="' + (y + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const RED = "#ee352e", AMB = "#f2a65a", TEAL = "#7bd3c4", ROSE = "#e05a6a";
  const note = (x, y, cls, c) => '<g class="lt-note ' + cls + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';
  const tree = (x, y, s, d) => '<rect x="' + (x - 4 * s) + '" y="' + (y - 40 * s) + '" width="' + (8 * s) + '" height="' + (40 * s) + '" fill="#4a3424"/>' +
    '<g class="lt-leaf"' + (d ? ' style="animation-delay:-1.8s"' : '') + '><circle cx="' + x + '" cy="' + (y - 52 * s) + '" r="' + (24 * s) + '" fill="#2f6a34"/><circle cx="' + (x - 18 * s) + '" cy="' + (y - 40 * s) + '" r="' + (16 * s) + '" fill="#3a7a3c"/><circle cx="' + (x + 18 * s) + '" cy="' + (y - 42 * s) + '" r="' + (17 * s) + '" fill="#3a7a3c"/></g>';

  /* 1. Grand Army Plaza station (2/3), underground */
  function ltstation() {
    const train = '<g class="anim-train"><rect x="20" y="104" width="360" height="92" rx="8" fill="#c9ced3" stroke="#7d868d" stroke-width="2"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (36 + i * 56) + '" y="118" width="40" height="34" rx="3" fill="#1e2a33"/>').join("") +
      '<rect x="20" y="160" width="360" height="6" fill="' + RED + '"/>' +
      [0, 1].map(i => '<rect x="' + (110 + i * 168) + '" y="122" width="26" height="70" fill="#9aa3aa" stroke="#6b737a"/>').join("") +
      bullet(352, 136, 11, "2", RED) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2622"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#e9e3d2"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v200" stroke="#d6cfbb" stroke-width="1"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (i * 20) + 'h400" stroke="#d6cfbb" stroke-width="1"/>').join("") +
      '<rect x="0" y="70" width="400" height="16" fill="#7a2f2a"/><rect x="0" y="72" width="400" height="2" fill="#c9a24a"/><rect x="0" y="82" width="400" height="2" fill="#c9a24a"/>' +
      train +
      '<rect x="0" y="196" width="400" height="10" fill="#e8c43a"/><rect x="0" y="206" width="400" height="54" fill="#5b5650"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="196" width="14" height="10" fill="#d1ad2a"/>').join("") +
      '<rect x="6" y="38" width="4" height="70" fill="#333"/><rect x="190" y="38" width="4" height="70" fill="#333"/>' +
      '<rect x="0" y="14" width="236" height="40" rx="3" fill="#111"/>' +
      '<text x="12" y="40" ' + font + ' font-size="16" fill="#fff">Grand Army Plaza</text>' +
      bullet(176, 34, 13, "2", RED) + bullet(208, 34, 13, "3", RED) +
      '<circle cx="330" cy="40" r="10" fill="#fff6c2" class="lt-glow"/><circle cx="376" cy="40" r="10" fill="#fff6c2" class="lt-glow lt-g2"/>');
  }

  /* 2. Prospect Park Bandshell on a summer night */
  function ltbandshell() {
    const heads = Array.from({ length: 22 }, (_, i) => { const x = 8 + i * 18 + (i % 2) * 4, y = 226 + (i % 3) * 8; return '<g class="lt-bob' + (i % 2 ? " lt-b2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="8" fill="#0d0a0f"/><rect x="' + (x - 10) + '" y="' + (y + 6) + '" width="20" height="30" rx="8" fill="#0d0a0f"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lt2)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 47) % 400) + '" cy="' + (10 + (i * 29) % 60) + '" r="1.2" fill="#fff" class="lt-glow' + (i % 2 ? " lt-g2" : "") + '"/>').join("") +
      tree(20, 196, 1.4, 0) + tree(380, 196, 1.5, 1) + tree(60, 190, 1, 1) + tree(342, 190, 1.1, 0) +
      '<path d="M90 190a110 104 0 0 1 220 0z" fill="#efe9dc" stroke="#bdb5a4" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<path d="M' + (104 + i * 14) + ' 190a' + (96 - i * 14) + ' ' + (90 - i * 13) + ' 0 0 1 ' + (192 - i * 28) + ' 0" fill="none" stroke="#cfc6b2" stroke-width="2"/>').join("") +
      '<path d="M150 190a50 46 0 0 1 100 0z" fill="#3a1c2e"/>' +
      '<rect x="80" y="188" width="240" height="14" fill="#6b5a48"/>' +
      '<circle cx="176" cy="168" r="6" fill="' + AMB + '" class="lt-glow"/><circle cx="200" cy="160" r="6" fill="' + TEAL + '" class="lt-glow lt-g2"/><circle cx="224" cy="168" r="6" fill="' + ROSE + '" class="lt-glow"/>' +
      '<rect x="196" y="170" width="3" height="18" fill="#bbb"/><circle cx="197.5" cy="170" r="3" fill="#ddd"/>' +
      note(150, 150, "", AMB) + note(250, 146, "lt-n2", TEAL) + note(205, 130, "lt-n3", "#fff") +
      '<rect x="0" y="202" width="400" height="58" fill="#1e3a22"/>' + heads,
      sky("lt2", "#0e1236", "#5a3a6a"));
  }

  /* 3. A Broadway stage */
  function ltbroadway() {
    return svg(
      '<rect width="400" height="260" fill="#120808"/>' +
      '<rect x="40" y="40" width="320" height="170" fill="url(#lt3)"/>' +
      '<g class="lt-sun"><circle cx="200" cy="150" r="56" fill="#f59a2a"/><circle cx="200" cy="150" r="44" fill="#fbb84a"/></g>' +
      '<path d="M40 210l70 -30l40 6l50 -40l40 26h40l40 -14l40 52z" fill="#2a1608"/>' +
      '<path d="M210 166l40 26h-50z" fill="#3a200c"/>' +
      '<path d="M0 0h70q-14 60 -6 120q10 60 -24 140h-40z" fill="#8a1420"/><path d="M400 0h-70q14 60 6 120q-10 60 24 140h40z" fill="#8a1420"/>' +
      [10, 26, 42].map(x => '<path d="M' + x + ' 0q-6 120 4 260" stroke="#5e0c14" stroke-width="3" fill="none"/><path d="M' + (400 - x) + ' 0q6 120 -4 260" stroke="#5e0c14" stroke-width="3" fill="none"/>').join("") +
      '<path d="M0 0h400v30q-200 26 -400 0z" fill="#a01a26"/><path d="M0 28q200 26 400 0" stroke="#c9a24a" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a2414"/><rect x="0" y="210" width="400" height="5" fill="#c9a24a"/>' +
      '<g class="lt-bl" style="mix-blend-mode:screen"><path d="M96 30l-40 190h80z" fill="#fff3c0" opacity=".25"/></g>' +
      '<g class="lt-br" style="mix-blend-mode:screen"><path d="M304 30l-40 190h80z" fill="#fff3c0" opacity=".25"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="13" letter-spacing="4" fill="#c9a24a">BROADWAY</text>',
      sky("lt3", "#5a1a3a", "#f2a65a"));
  }

  /* 4. Park Slope brownstone stoop with a mutt */
  function ltstoop() {
    const house = (x, c) => '<rect x="' + x + '" y="40" width="130" height="160" fill="' + c + '"/>' +
      '<rect x="' + x + '" y="34" width="130" height="10" fill="#3a2418"/>' +
      [0, 1, 2].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="56" width="24" height="36" fill="#1d1a22" stroke="#d9c9a8" stroke-width="2"/><rect x="' + (x + 14 + i * 38) + '" y="52" width="24" height="5" fill="#d9c9a8"/>').join("") +
      [0, 1].map(i => '<rect x="' + (x + 14 + i * 38) + '" y="108" width="24" height="34" fill="#1d1a22" stroke="#d9c9a8" stroke-width="2"/>').join("") +
      '<rect x="' + (x + 88) + '" y="104" width="30" height="46" fill="#3a2010" stroke="#d9c9a8" stroke-width="2"/><path d="M' + (x + 88) + ' 104a15 10 0 0 1 30 0" fill="#d9c9a8"/>';
    const stairs = (x) => Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 80 - i * 6) + '" y="' + (150 + i * 9) + '" width="' + (46 + i * 12) + '" height="9" fill="#5a3a28" stroke="#3a2418" stroke-width="1"/>').join("") +
      '<path d="M' + (x + 80) + ' 140l-36 64" stroke="#111" stroke-width="3"/><path d="M' + (x + 126) + ' 140l14 64" stroke="#111" stroke-width="3"/>';
    const dog = '<g transform="translate(212 168)"><ellipse cx="0" cy="0" rx="18" ry="10" fill="#b07a44"/><circle cx="18" cy="-8" r="8" fill="#b07a44"/><ellipse cx="22" cy="-14" rx="3" ry="6" fill="#7a5030"/><circle cx="21" cy="-9" r="1.5" fill="#111"/><circle cx="26" cy="-6" r="1.5" fill="#222"/>' +
      '<rect x="-12" y="6" width="5" height="12" fill="#b07a44"/><rect x="8" y="6" width="5" height="12" fill="#b07a44"/><path class="lt-wag" d="M-17 -2q-10 -6 -12 -16" stroke="#b07a44" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="12" y="-4" width="10" height="3" fill="' + ROSE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lt4)"/>' +
      house(10, "#6b4532") + house(140, "#5e3c2c") + house(270, "#6b4532") +
      stairs(10) + stairs(140) + stairs(270) +
      '<rect x="0" y="204" width="400" height="16" fill="#b9b2a4"/><rect x="0" y="220" width="400" height="40" fill="#4a4a50"/>' +
      '<g class="lt-car"><rect x="0" y="226" width="64" height="18" rx="5" fill="' + TEAL + '"/><rect x="12" y="218" width="36" height="12" rx="4" fill="' + TEAL + '"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="50" cy="246" r="5" fill="#111"/></g>' +
      tree(134, 206, 1.3, 0) + tree(266, 206, 1.2, 1) + dog,
      sky("lt4", "#7ab8e6", "#f6e2c0"));
  }

  /* 5. Prospect Park West and 9 St */
  function ltcorner() {
    const nine = (x, y) => '<circle cx="' + x + '" cy="' + (y - 9) + '" r="4.2" fill="none" stroke="#fff" stroke-width="2.4"/><path d="M' + (x + 4.2) + ' ' + (y - 9) + 'V' + y + '" stroke="#fff" stroke-width="2.4"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lt5)"/>' +
      tree(40, 130, 1.6, 0) + tree(120, 128, 1.4, 1) + tree(200, 132, 1.7, 0) + tree(290, 128, 1.5, 1) + tree(370, 130, 1.6, 0) +
      '<rect x="0" y="120" width="400" height="80" fill="#9a9184"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="120" width="40" height="80" fill="none" stroke="#7d7568" stroke-width="2"/>').join("") +
      '<rect x="0" y="114" width="400" height="8" fill="#b9b0a1"/>' +
      '<rect x="244" y="104" width="10" height="96" fill="#7d7568"/><rect x="330" y="104" width="10" height="96" fill="#7d7568"/><rect x="254" y="132" width="76" height="68" fill="#1f3a24"/>' +
      tag("LEON", 30, 176, 42, AMB, -6) + tag("MUTT", 150, 158, 22, TEAL, -4) + tag("EZMNY", 160, 190, 18, ROSE, 3) +
      '<path d="M54 182v16M86 180v16" stroke="' + AMB + '" stroke-width="3" class="lt-dr"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#4a4a50"/><rect x="0" y="200" width="400" height="10" fill="#b9b2a4"/>' +
      '<rect x="360" y="40" width="6" height="170" fill="#2b4a2e"/>' +
      '<rect x="278" y="46" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="335" y="62" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Prospect Park W</text>' +
      '<rect x="318" y="74" width="74" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + nine(342, 90) + '<text x="352" y="90" ' + font + ' font-size="12" fill="#fff">St</text>' +
      '<circle cx="348" cy="30" r="7" fill="#fff6c2" class="lt-glow"/>',
      sky("lt5", "#6aa8d8", "#f3d9b0"));
  }

  window.SCENES = { ltstation, ltbandshell, ltbroadway, ltstoop, ltcorner };
})();
