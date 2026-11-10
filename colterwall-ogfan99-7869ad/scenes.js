/* colterwall scenes (Regions: CANADA / Genres: country; Swift Current, Saskatchewan). CSS classes prefixed cwx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const WHEAT = "#f2c14e", RUST = "#c8553d", SKY = "#7aa6c2", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes cwxcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.cwx-cl{animation:cwxcloud 16s ease-in-out infinite alternate}' +
    '@keyframes cwxfreight{0%{transform:translateX(0)}100%{transform:translateX(-520px)}}.cwx-fr{animation:cwxfreight 18s linear infinite}' +
    '@keyframes cwxsway{0%,100%{transform:skewX(-6deg)}50%{transform:skewX(6deg)}}.cwx-sw{transform-box:fill-box;transform-origin:50% 100%;animation:cwxsway 2.6s ease-in-out infinite}.cwx-sw2{animation-delay:-1.3s}' +
    '@keyframes cwxrun{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.cwx-run{animation:cwxrun 7s linear infinite}.cwx-run2{animation-delay:-2.4s}.cwx-run3{animation-delay:-4.6s}' +
    '@keyframes cwxhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cwx-hop{animation:cwxhop .4s ease-in-out infinite}' +
    '@keyframes cwxbuck{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(12deg)}}.cwx-bk{transform-box:fill-box;transform-origin:50% 100%;animation:cwxbuck .9s ease-in-out infinite}' +
    '@keyframes cwxdust{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(-34px,-18px) scale(1.7);opacity:0}}.cwx-du{transform-box:fill-box;transform-origin:50% 50%;animation:cwxdust 1.6s ease-out infinite}.cwx-du2{animation-delay:-.8s}' +
    '@keyframes cwxblink{0%,100%{opacity:.25}50%{opacity:1}}.cwx-bl{animation:cwxblink 1.6s ease-in-out infinite}.cwx-bl2{animation-delay:-.8s}' +
    '@keyframes cwxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cwx-sp{animation:cwxspray 1.4s ease-out infinite}.cwx-sp2{animation-delay:.45s}' +
    '@keyframes cwxflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(8deg)}}.cwx-fl{transform-box:fill-box;transform-origin:0 50%;animation:cwxflag 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const clouds = () => '<g class="cwx-cl"><ellipse cx="60" cy="30" rx="40" ry="9" fill="#fff" opacity=".75"/><ellipse cx="94" cy="24" rx="22" ry="7" fill="#fff" opacity=".7"/><ellipse cx="250" cy="22" rx="34" ry="8" fill="#fff" opacity=".65"/><ellipse cx="340" cy="40" rx="26" ry="6" fill="#fff" opacity=".55"/></g>';
  const wheat = (y, c, n) => { let s = ''; for (let i = 0; i < n; i++) { const x = (i * 397 / n) % 400; s += '<path class="cwx-sw' + (i % 2 ? ' cwx-sw2' : '') + '" d="M' + x + ' ' + y + 'q2 -12 0 -20" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + x + '" cy="' + (y - 21) + '" rx="1.8" ry="4" fill="' + c + '"/>'; } return s; };
  /* a classic wooden prairie grain elevator (red with a white roof cap) */
  const elevator = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="0" y="-70" width="34" height="70" fill="' + c + '" stroke="#5a1e14" stroke-width="1.5"/><path d="M6 -70l11 -20l11 20z" fill="' + c + '" stroke="#5a1e14" stroke-width="1.5"/>' +
    '<rect x="8" y="-96" width="18" height="10" fill="#f4ead6" stroke="#5a1e14" stroke-width="1"/><path d="M6 -96l11 -8l11 8z" fill="#f4ead6"/>' +
    '<rect x="34" y="-34" width="22" height="34" fill="' + c + '" stroke="#5a1e14" stroke-width="1.5"/><path d="M34 -34l11 -8l11 8z" fill="#f4ead6"/>' +
    '<rect x="-14" y="-22" width="14" height="22" fill="#8a8580"/><path d="M-14 -22l7 -6l7 6z" fill="#6e6a64"/></g>';
  const freight = (y) => '<g class="cwx-fr">' + Array.from({ length: 16 }, (_, i) => {
      const x = 400 + i * 62, col = i === 0 ? '#c8202a' : ['#6b3a26', '#3a4a5a', '#7a6a3a'][i % 3];
      return (i === 0 ? '<rect x="' + x + '" y="' + (y - 16) + '" width="58" height="16" rx="2" fill="' + col + '"/><rect x="' + (x + 4) + '" y="' + (y - 22) + '" width="16" height="8" fill="' + col + '"/><rect x="' + (x + 6) + '" y="' + (y - 20) + '" width="10" height="4" fill="#cfe6f2"/>'
        : '<rect x="' + x + '" y="' + (y - 14) + '" width="58" height="14" rx="1" fill="' + col + '"/>') + '<circle cx="' + (x + 10) + '" cy="' + (y + 1) + '" r="2.4" fill="#111"/><circle cx="' + (x + 48) + '" cy="' + (y + 1) + '" r="2.4" fill="#111"/>';
    }).join("") + '</g>';
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (7 * s) + ' ' + (14 * s) + 'h-' + (3 * s) + 'l' + (6 * s) + ' ' + (12 * s) + 'h-' + (3 * s) + 'l' + (6 * s) + ' ' + (14 * s) + 'h-' + (32 * s) + 'l' + (6 * s) + ' -' + (14 * s) + 'h-' + (3 * s) + 'l' + (6 * s) + ' -' + (12 * s) + 'h-' + (3 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 1.2 * s) + '" y="' + y + '" width="' + (2.4 * s) + '" height="' + (5 * s) + '" fill="#4a3020"/>';
  const pronghorn = (c) => '<g class="cwx-hop"><path d="M0 0q12 -6 26 -4q4 -8 9 -9l2 -7l2 1l-1 7q3 1 3 4l-5 2q-2 6 -8 8l1 14h-2.5l-2 -12q-9 2 -16 0l-3 12h-2.5l1 -13q-5 -2 -4 -7z" fill="' + c + '"/><path d="M4 2q10 4 22 0" stroke="#fff" stroke-width="3" fill="none"/><path d="M36 -19l-2 -6M38 -19l1 -6" stroke="#222" stroke-width="1.4"/></g>';
  const horse = (c) => '<path d="M0 0q10 -8 28 -6q6 -8 12 -6l2 4q-4 2 -6 6q2 10 -6 14l2 14h-3l-3 -12q-10 2 -18 0l-4 12h-3l2 -14q-6 -4 -3 -10q-6 2 -10 8q2 -8 8 -10z" fill="' + c + '"/>';

  /* 1. Swift Transit Red Line bus pulling in on Central Ave in downtown Swift Current, a CP freight rolling past the elevators behind */
  function cwxbus() {
    return svg(
      '<rect width="400" height="260" fill="url(#cwx1)"/>' + clouds() +
      '<rect x="0" y="120" width="400" height="30" fill="#d8b86a"/>' +
      elevator(300, 132, .85, "#a8322a") + elevator(40, 132, .6, "#8a6a3a") +
      '<rect x="0" y="132" width="400" height="4" fill="#6e6a64"/>' + freight(132) +
      /* low brick downtown storefronts */
      '<rect x="0" y="136" width="130" height="40" fill="#8a4a32"/><rect x="132" y="128" width="90" height="48" fill="#b9a27a"/><rect x="224" y="140" width="176" height="36" fill="#7a3e2a"/>' +
      [10, 40, 70, 100, 146, 176, 236, 270, 304, 338, 372].map(x => '<rect x="' + x + '" y="146" width="18" height="12" fill="#2f4a5a"/>').join("") +
      '<rect x="0" y="176" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="186" width="400" height="74" fill="#4a4744"/>' +
      '<path d="M0 226h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="20 14"/>' +
      /* the bus (anim-train slides it in) */
      '<g class="anim-train">' +
        '<rect x="40" y="150" width="210" height="62" rx="8" fill="#f4f1ea" stroke="#333" stroke-width="2"/>' +
        '<rect x="40" y="194" width="210" height="10" fill="' + RUST + '"/><rect x="40" y="186" width="210" height="4" fill="#d62828"/>' +
        [54, 90, 126, 162].map(x => '<rect x="' + x + '" y="160" width="30" height="22" rx="2" fill="#9fc3d8"/>').join("") +
        '<rect x="200" y="160" width="40" height="34" rx="2" fill="#9fc3d8" stroke="#333" stroke-width="1"/>' +
        '<rect x="206" y="152" width="40" height="7" rx="1" fill="#111"/><text x="226" y="158" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb02e" class="cwx-bl">RED LINE</text>' +
        '<circle cx="80" cy="214" r="10" fill="#111"/><circle cx="80" cy="214" r="4" fill="#888"/><circle cx="214" cy="214" r="10" fill="#111"/><circle cx="214" cy="214" r="4" fill="#888"/>' +
      '</g>' +
      /* black stop sign */
      '<rect x="322" y="78" width="4" height="104" fill="#333"/>' +
      '<rect x="262" y="34" width="132" height="50" rx="4" fill="#111" stroke="#fff" stroke-width="2"/>' +
      '<text x="328" y="54" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">CENTRAL AVE N</text>' +
      '<text x="328" y="66" text-anchor="middle" ' + font + ' font-size="7" fill="' + WHEAT + '" letter-spacing="1">SWIFT CURRENT, SK</text>' +
      '<rect x="296" y="70" width="64" height="11" rx="5" fill="#d62828"/><text x="328" y="78.5" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SWIFT TRANSIT</text>',
      sky("cwx1", "#4f8fc4", "#d6ecf6"));
  }

  /* 2. The Cypress Hills: lodgepole pines on the high bench, short and native grass, pronghorn running under a blue and purple sky */
  function cwxcypress() {
    return svg(
      '<rect width="400" height="260" fill="url(#cwx2)"/>' +
      '<g class="cwx-cl"><ellipse cx="90" cy="40" rx="50" ry="8" fill="#e6d2f0" opacity=".55"/><ellipse cx="300" cy="30" rx="44" ry="7" fill="#f4d8c8" opacity=".5"/></g>' +
      '<path d="M0 120q60 -30 120 -26t110 -8t90 10t80 -4V260H0z" fill="#3d5a3a"/>' +
      pine(40, 104, 1, "#1f3a26") + pine(70, 100, 1.2, "#244428") + pine(100, 98, .9, "#1f3a26") + pine(150, 94, 1.1, "#244428") + pine(200, 88, 1.3, "#1f3a26") + pine(232, 90, 1, "#244428") + pine(300, 96, 1.1, "#1f3a26") + pine(340, 100, .9, "#244428") + pine(372, 98, 1.2, "#1f3a26") +
      '<path d="M0 150q80 -26 170 -14t150 -4t80 6V260H0z" fill="#b9a45a"/>' +
      '<path d="M0 190q100 -20 200 -8t200 -6V260H0z" fill="#a8934a"/>' +
      wheat(200, "#d8c27a", 28) +
      '<g transform=\"translate(0 178)\"><g class=\"cwx-run\">' + pronghorn("#c48a4a") + '</g></g>' +
      '<g transform=\"translate(0 196)\"><g class=\"cwx-run cwx-run2\">' + pronghorn("#b87a3e") + '</g></g>' +
      '<g transform=\"translate(0 186)\"><g class=\"cwx-run cwx-run3\">' + pronghorn("#c48a4a") + '</g></g>' +
      /* barbed bottom wire with posts */
      '<path d="M0 232h400" stroke="#5a5550" stroke-width="1.5"/><path d="M0 244h400" stroke="#5a5550" stroke-width="1.5" stroke-dasharray="4 3"/>' +
      [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="222" width="5" height="34" fill="#6b4a2a"/>').join("") +
      '<rect x="120" y="14" width="160" height="22" rx="3" fill="#000" opacity=".45"/><text x="200" y="30" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="2">CYPRESS HILLS</text>',
      sky("cwx2", "#3e4f9a", "#c9a4c8"));
  }

  /* 3. Swift Current Frontier Days: the bronc chute and arena at the exhibition grounds, a saddle bronc bucking in the dust */
  function cwxfrontier() {
    return svg(
      '<rect width="400" height="260" fill="url(#cwx3)"/>' + clouds() +
      /* grandstand */
      '<path d="M0 90h400v50H0z" fill="#e8e0cc"/><path d="M0 90l200 -16l200 16z" fill="' + RUST + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="0" y="' + (96 + i * 6) + '" width="400" height="3" fill="#b9ad94"/>').join("") +
      Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (100 + (i % 4) * 9) + '" r="2.4" fill="' + ['#d62828', '#2f4a8a', '#f2c14e', '#3d7a3a'][i % 4] + '"/>').join("") +
      '<g transform="translate(60 74)"><rect x="0" y="-26" width="2" height="26" fill="#666"/><rect class="cwx-fl" x="2" y="-26" width="24" height="12" fill="#d62828"/><rect x="9" y="-26" width="10" height="12" fill="#fff" class="cwx-fl"/></g>' +
      '<g transform="translate(330 74)"><rect x="0" y="-26" width="2" height="26" fill="#666"/><rect class="cwx-fl" x="2" y="-26" width="24" height="12" fill="#1f6b3a"/></g>' +
      /* arena dirt and white rails */
      '<rect x="0" y="140" width="400" height="120" fill="#b08458"/>' +
      '<path d="M0 150h400M0 162h400" stroke="#f4ead6" stroke-width="4"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (i * 30) + '" y="142" width="5" height="26" fill="#f4ead6"/>').join("") +
      /* bucking chutes */
      '<rect x="300" y="118" width="100" height="70" fill="#6b4a2a"/>' + [306, 330, 354, 378].map(x => '<rect x="' + x + '" y="124" width="18" height="58" fill="#8a6a3a" stroke="#3a2a18" stroke-width="1"/>').join("") +
      '<text x="350" y="114" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CHUTE 3</text>' +
      /* the bronc and rider */
      '<g transform="translate(150 214)"><g class="cwx-bk"><g transform="scale(1.6) translate(-20 -14)">' + horse("#5a3a22") + '</g>' +
      '<path d="M8 -36l2 -18l8 -2l2 18z" fill="#3a5a8a"/><circle cx="14" cy="-60" r="5" fill="#e8c8a0"/><path d="M4 -64h20l-4 -6h-12z" fill="#e8d8b0"/><path d="M18 -52l14 -14" stroke="#3a5a8a" stroke-width="3"/></g></g>' +
      '<ellipse class="cwx-du" cx="120" cy="226" rx="16" ry="6" fill="#d8b88a"/><ellipse class="cwx-du cwx-du2" cx="190" cy="228" rx="14" ry="5" fill="#d8b88a"/>' +
      '<rect x="100" y="8" width="200" height="22" rx="3" fill="#000" opacity=".45"/><text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="' + WHEAT + '" letter-spacing="2">FRONTIER DAYS</text>',
      sky("cwx3", "#3f86c4", "#e0f0f8"));
  }

  /* 4. Calgary Round-Up: chuckwagons racing the half-mile track at the Stampede, the Rockies far off to the west */
  function cwxstampede() {
    const wagon = (c, cover) => '<g><path d="M0 0h44v-12h-44z" fill="' + c + '"/><path d="M2 -12q20 -22 40 0z" fill="' + cover + '" stroke="#555" stroke-width="1"/>' +
      '<circle cx="8" cy="2" r="7" fill="none" stroke="#3a2a18" stroke-width="2"/><circle cx="36" cy="2" r="7" fill="none" stroke="#3a2a18" stroke-width="2"/>' +
      '<path d="M44 -4h22" stroke="#3a2a18" stroke-width="2"/><g transform="translate(64 0)"><g class="cwx-hop">' + horse("#3a2618") + '</g></g><g transform="translate(92 0)"><g class="cwx-hop">' + horse("#6b4426") + '</g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cwx4)"/>' + clouds() +
      '<path d="M0 112l30 -30l20 14l34 -40l26 26l30 -34l36 36l24 -20l40 44l30 -24l40 28l30 -20l40 30V130H0z" fill="#8a9ab8"/>' +
      '<path d="M84 56l-10 12l8 -2l6 6zM144 48l-12 14l9 -3l7 7z" fill="#fff"/>' +
      '<rect x="0" y="112" width="400" height="24" fill="#6f9a4a"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#a8825a"/>' +
      '<path d="M0 142h400" stroke="#fff" stroke-width="4"/><path d="M0 252h400" stroke="#fff" stroke-width="4"/>' +
      '<g transform=\"translate(0 190)\"><g class=\"cwx-run\">' + wagon("#c8202a", "#f4ead6") + '</g></g>' +
      '<g transform=\"translate(0 228)\"><g class=\"cwx-run cwx-run2\">' + wagon("#2f4a8a", "#f2c14e") + '</g></g>' +
      '<g transform=\"translate(0 170)\"><g class=\"cwx-run cwx-run3\">' + wagon("#3d7a3a", "#f4ead6") + '</g></g>' +
      '<ellipse class="cwx-du" cx="60" cy="236" rx="18" ry="6" fill="#d8b88a"/><ellipse class="cwx-du cwx-du2" cx="220" cy="196" rx="16" ry="5" fill="#d8b88a"/>' +
      '<rect x="110" y="8" width="180" height="22" rx="3" fill="#000" opacity=".45"/><text x="200" y="24" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">CALGARY ROUND-UP</text>',
      sky("cwx4", "#3a7ac0", "#d6ecf6"));
  }

  /* 5. His corner: Central Ave N and Cheadle St W in Swift Current, his name tagged on a brick wall, the red grain elevator behind */
  function cwxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cwx5)"/>' + clouds() +
      '<rect x="0" y="134" width="400" height="20" fill="#d8b86a"/>' +
      elevator(250, 150, 1.25, "#a8322a") +
      /* brick wall */
      '<rect x="0" y="150" width="400" height="80" fill="#8a4a32"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 15) + '" y="' + (150 + r * 10) + '" width="28" height="8" fill="#9a5a3e" opacity=".55"/>').join("")).join("") +
      tag("COLTER WALL", 34, 200, 34, WHEAT, -5) +
      tag("SCARY PRAIRIE", 230, 222, 14, CREAM, -4) +
      '<g class="cwx-sp"><circle cx="196" cy="182" r="3" fill="' + WHEAT + '" opacity=".8"/></g><g class="cwx-sp cwx-sp2"><circle cx="204" cy="176" r="2.4" fill="' + WHEAT + '" opacity=".7"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#c9c3b6"/>' +
      /* green street signs */
      '<rect x="338" y="80" width="5" height="160" fill="#6e737b"/>' +
      sign(282, 66, 116, "CENTRAL AVE N") + sign(294, 92, 104, "CHEADLE ST W"),
      sky("cwx5", "#4f8fc4", "#e8f2f8"));
  }

  window.SCENES = { cwxbus, cwxcypress, cwxfrontier, cwxstampede, cwxcorner };
})();
