/* littlebrother scenes (Regions tab: The Carolinas; Durham, NC, where Phonte and Big Pooh formed Little Brother). CSS classes and ids prefixed lb- (the page's own anim-train is kept).
   1 GoDurham route 5 on Fayetteville St at the Hayti stop: the gray bus with blue triangles pulls in, the Durham Freeway overpass behind.
   2 Hayti Heritage Center (the old St. Joseph's AME church, 1891): red-brick Romanesque church, tall spire, stained glass glowing, swifts circling.
   3 "Ran up in the hideaway" (The Way You Do It): a little Durham club stage, rain on the window, the crowd's hands in the air waving.
   4 The Minstrel Show set: velvet curtain, studio camera, an ON AIR light and an APPLAUSE sign blinking.
   5 Parrish St and Corcoran St (Durham's Black Wall Street): green signs, LITTLE BROTHER tagged on the brick, the art deco Hill Building behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lb-flk{animation:lbflick 2.2s infinite}.lb-flk2{animation-delay:.7s}' +
    '@keyframes lbbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.lb-bird{animation:lbbird 11s linear infinite}.lb-bird2{animation-delay:-5.5s}' +
    '@keyframes lbglow{0%,100%{opacity:.55}50%{opacity:1}}.lb-glow{animation:lbglow 2.6s ease-in-out infinite}' +
    '@keyframes lbwave{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.lb-hand{transform-box:fill-box;transform-origin:50% 100%;animation:lbwave 1s ease-in-out infinite}.lb-h2{animation-delay:-.3s}.lb-h3{animation-delay:-.6s}' +
    '@keyframes lbrain{from{transform:translateY(-30px)}to{transform:translateY(40px)}}.lb-rain{animation:lbrain .7s linear infinite}' +
    '@keyframes lbsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.lb-beam{transform-origin:200px 0px;animation:lbsweep 4s ease-in-out infinite}' +
    '@keyframes lbblink{0%,100%{opacity:.25}50%{opacity:1}}.lb-bl{animation:lbblink 1.2s ease-in-out infinite}.lb-bl2{animation-delay:-.6s}' +
    '@keyframes lbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lb-sp{animation:lbsp 1.4s ease-out infinite}.lb-sp2{animation-delay:.45s}' +
    '@keyframes lbcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.lb-car{animation:lbcar 7s linear infinite}' +
    '@keyframes lbcam{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.lb-cam{animation:lbcam 6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 7 < h; r++) {
      s += '<path d="M' + x + ' ' + (y + r * 7) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
      for (let c = 0; c * 22 < w; c++) { const bx = x + c * 22 + (r % 2) * 11; if (bx < x + w) s += '<path d="M' + bx + ' ' + (y + r * 7) + 'v7" stroke="' + line + '" stroke-width="1"/>'; }
    }
    return s;
  };

  /* 1. GoDurham 5 on Fayetteville St */
  function lbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 40) + '" y="128" width="30" height="24" rx="3" fill="#1d2a36"/>').join("");
    const tri = '<path d="M40 180l30 -34 30 34z" fill="#1f6fb2" opacity=".9"/><path d="M84 180l24 -26 24 26z" fill="#3fa0de" opacity=".9"/><path d="M290 180l26 -30 26 30z" fill="#1f4e79" opacity=".9"/>';
    const bus = '<g class="anim-train"><rect x="30" y="116" width="320" height="70" rx="10" fill="#c9ced3" stroke="#6f777f" stroke-width="2"/>' + win + tri +
      '<rect x="30" y="116" width="320" height="8" rx="4" fill="#9aa2aa"/><rect x="314" y="126" width="30" height="38" rx="4" fill="#1d2a36"/>' +
      '<rect x="262" y="117" width="84" height="10" rx="2" fill="#111"/><text x="304" y="125" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000">5 FAYETTEVILLE ST</text>' +
      '<circle cx="90" cy="188" r="12" fill="#222"/><circle cx="90" cy="188" r="5" fill="#888"/><circle cx="290" cy="188" r="12" fill="#222"/><circle cx="290" cy="188" r="5" fill="#888"/>' +
      '<circle cx="346" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lbs1)"/>' +
      '<g fill="#3c3640">' + [[0, 60, 70], [72, 40, 56], [300, 50, 60], [350, 70, 50]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="60"/>').join("") + '</g>' +
      '<g class="lb-flk"><rect x="12" y="74" width="8" height="8" fill="#ffd27a"/><rect x="316" y="66" width="8" height="8" fill="#ffd27a"/></g><g class="lb-flk lb-flk2"><rect x="92" y="56" width="8" height="8" fill="#ffd27a"/><rect x="370" y="84" width="8" height="8" fill="#ffd27a"/></g>' +
      '<rect x="0" y="84" width="400" height="16" fill="#8c8f93"/><rect x="0" y="100" width="400" height="5" fill="#5e6266"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 8) + '" y="104" width="16" height="16" fill="#7a7e83"/>').join("") +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="8" fill="#eceff1">DURHAM FREEWAY</text>' +
      bus +
      '<rect x="0" y="200" width="400" height="60" fill="#55595e"/><path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="0" y="198" width="400" height="6" fill="#b9b4aa"/>' +
      '<rect x="356" y="96" width="4" height="104" fill="#3a3f45"/>' +
      '<rect x="106" y="206" width="188" height="34" rx="3" fill="#111"/><rect x="116" y="213" width="20" height="20" rx="4" fill="#1f4e79"/><text x="126" y="228" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">5</text>' +
      '<text x="144" y="221" ' + font + ' font-size="11" fill="#fff">Fayetteville St</text><text x="144" y="234" ' + font + ' font-size="9" fill="#cfd8dc">Hayti · GoDurham</text>',
      sky("lbs1", "#1d2340", "#e59a64"));
  }

  /* 2. Hayti Heritage Center (St. Joseph's AME) */
  function lbhayti() {
    const glass = (x, y) => '<path d="M' + x + ' ' + (y + 30) + 'v-18q8 -14 16 0v18z" fill="#e8b84a"/><path d="M' + (x + 8) + ' ' + y + 'v30M' + x + ' ' + (y + 18) + 'h16" stroke="#7a2f1c" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lbs2)"/>' +
      '<g class="lb-bird"><path d="M20 46q6 -6 12 0q6 -6 12 0" stroke="#2a2030" stroke-width="2" fill="none"/></g><g class="lb-bird lb-bird2"><path d="M40 70q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="2" fill="none"/></g>' +
      '<g fill="#3f5a36"><circle cx="30" cy="200" r="36"/><circle cx="80" cy="212" r="26"/><circle cx="350" cy="204" r="34"/><circle cx="392" cy="210" r="24"/></g>' +
      bricks(110, 110, 200, 110, "#9e3b26", "#7c2c1b") +
      '<path d="M100 112L210 64 320 112z" fill="#5b3a30"/><path d="M100 112h220" stroke="#3f261f" stroke-width="3"/>' +
      bricks(236, 70, 44, 150, "#a54028", "#7c2c1b") +
      '<path d="M230 72L258 6 286 72z" fill="#4a5258"/><path d="M230 72L258 6v66z" fill="#3a4147"/><rect x="230" y="70" width="56" height="6" fill="#d8cfc0"/>' +
      '<path d="M252 92q6 -10 12 0v18h-12z" fill="#2d2420"/>' +
      '<g class="lb-glow">' + glass(128, 136) + glass(160, 136) + glass(196, 136) + glass(250, 130) + '</g>' +
      '<circle cx="170" cy="92" r="0"/>' +
      '<path d="M150 220v-36q16 -24 32 0v36z" fill="#3b2a22"/><rect x="146" y="218" width="40" height="4" fill="#d8cfc0"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#7d7468"/><path d="M0 232h400" stroke="#6a6257" stroke-width="2"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fdf3e0">HAYTI · DURHAM</text>',
      sky("lbs2", "#2a2350", "#f0a36b"));
  }

  /* 3. The hideaway, hands in the air */
  function lbhideaway() {
    const hand = (x, y, cls) => '<g class="lb-hand ' + cls + '"><path d="M' + x + ' ' + y + 'v-34" stroke="#3a2a24" stroke-width="7" stroke-linecap="round"/><circle cx="' + x + '" cy="' + (y - 38) + '" r="6" fill="#3a2a24"/></g>';
    const crowd = Array.from({ length: 11 }, (_, i) => '<circle cx="' + (18 + i * 36) + '" cy="' + (226 + (i % 2) * 6) + '" r="18" fill="#2c2230"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120d14"/>' +
      '<g class="lb-beam"><path d="M200 0L150 200h100z" fill="#ffe6a8" opacity=".12"/></g>' +
      '<rect x="20" y="26" width="70" height="56" fill="#1d2a3a" stroke="#4a3a2e" stroke-width="4"/>' +
      '<g clip-path="url(#lbwin)"><g class="lb-rain" stroke="#8fb4d9" stroke-width="1.5">' + [30, 44, 58, 72, 84].map((x, i) => '<path d="M' + x + ' ' + (20 + i * 7) + 'l-4 10"/>').join("") + '</g></g>' +
      '<rect x="120" y="120" width="160" height="16" fill="#5a3b2a"/><rect x="110" y="136" width="180" height="70" fill="#2a1d18"/>' +
      '<path d="M200 70v50" stroke="#aaa" stroke-width="2"/><circle cx="200" cy="66" r="5" fill="#ccc"/><path d="M186 120h28" stroke="#aaa" stroke-width="2"/>' +
      '<rect x="128" y="96" width="26" height="24" rx="2" fill="#222"/><circle cx="141" cy="108" r="8" fill="#444"/><rect x="246" y="96" width="26" height="24" rx="2" fill="#222"/><circle cx="259" cy="108" r="8" fill="#444"/>' +
      '<g class="lb-flk"><text x="320" y="56" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="22" fill="#ff5a8a" stroke="#ff9cbb" stroke-width=".6">hideaway</text></g>' +
      '<rect x="270" y="30" width="100" height="36" rx="6" fill="none" stroke="#ff5a8a" stroke-width="2" class="lb-flk lb-flk2"/>' +
      crowd +
      hand(40, 212, "") + hand(100, 214, "lb-h2") + hand(170, 210, "lb-h3") + hand(236, 214, "") + hand(300, 210, "lb-h2") + hand(362, 214, "lb-h3"),
      '<clipPath id="lbwin"><rect x="22" y="28" width="66" height="52"/></clipPath>');
  }

  /* 4. The Minstrel Show set */
  function lbshow() {
    const folds = Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40 + 20) + ' 0v170" stroke="#6b0f1c" stroke-width="6" opacity=".5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#8e1426"/>' + folds +
      '<path d="M0 0h400v26q-100 22 -200 0q-100 22 -200 0z" fill="#6b0f1c"/><path d="M0 24q100 22 200 0q100 22 200 0" stroke="#d4a537" stroke-width="3" fill="none"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3a2418"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 170l-20 90" stroke="#2a190f" stroke-width="2"/>').join("") +
      '<rect x="150" y="50" width="100" height="28" rx="4" fill="#1a1a1a" stroke="#d4a537" stroke-width="2"/><g class="lb-bl"><text x="200" y="70" text-anchor="middle" ' + font + ' font-size="16" fill="#ff3b3b">ON AIR</text></g>' +
      '<rect x="120" y="96" width="160" height="26" rx="4" fill="#1a1a1a" stroke="#d4a537" stroke-width="2"/><g class="lb-bl lb-bl2"><text x="200" y="115" text-anchor="middle" ' + font + ' font-size="15" fill="#ffd34d">APPLAUSE</text></g>' +
      '<g class="lb-cam"><rect x="40" y="132" width="70" height="40" rx="5" fill="#2a2d33" stroke="#111" stroke-width="2"/><rect x="108" y="140" width="22" height="22" rx="3" fill="#1a1c20"/><circle cx="130" cy="151" r="7" fill="#4a6fa5"/>' +
      '<path d="M75 172l-22 50M75 172v50M75 172l22 50" stroke="#555" stroke-width="4"/><circle cx="62" cy="128" r="0"/></g>' +
      '<path d="M300 170v-50" stroke="#aaa" stroke-width="2"/><circle cx="300" cy="116" r="5" fill="#ccc"/>' +
      '<ellipse cx="300" cy="200" rx="60" ry="10" fill="#ffe6a8" opacity=".2"/>',
      "");
  }

  /* 5. Parrish St and Corcoran St, the Hill Building behind */
  function lbcorner() {
    const lime = "#e6dcc6", shade = "#cbbfa5";
    const hill = '<rect x="250" y="70" width="80" height="140" fill="' + lime + '"/><rect x="262" y="40" width="56" height="30" fill="' + lime + '"/><rect x="274" y="18" width="32" height="22" fill="' + lime + '"/><rect x="284" y="4" width="12" height="14" fill="' + shade + '"/>' +
      '<rect x="250" y="70" width="14" height="140" fill="' + shade + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (272 + i * 10) + ' 46v160" stroke="' + shade + '" stroke-width="3"/>').join("") +
      '<g class="lb-flk">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (268 + (i % 3) * 18) + '" y="' + (90 + Math.floor(i / 3) * 40) + '" width="6" height="8" fill="#ffd98a"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lbs5)"/>' + hill +
      '<rect x="190" y="110" width="50" height="100" fill="#6d5a4c"/><rect x="340" y="120" width="60" height="90" fill="#5a4a40"/>' +
      bricks(0, 96, 190, 124, "#8f3a28", "#6e2b1d") +
      tag("LITTLE", 18, 150, 30, "#e0b04a", -6) + tag("BROTHER", 34, 190, 34, "#c9314f", -6) +
      '<g class="lb-sp"><circle cx="176" cy="160" r="3" fill="#e0b04a"/></g><g class="lb-sp lb-sp2"><circle cx="170" cy="150" r="2" fill="#e0b04a"/></g>' +
      '<rect x="206" y="60" width="5" height="160" fill="#3b4148"/>' + sign(150, 66, 118, "Parrish St") + sign(150, 92, 118, "Corcoran St") +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4d52"/><rect x="0" y="216" width="400" height="6" fill="#b4ada2"/>' +
      '<g class="lb-car"><rect x="0" y="228" width="70" height="18" rx="6" fill="#2d6fb0"/><rect x="14" y="220" width="40" height="12" rx="4" fill="#2d6fb0"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="56" cy="248" r="6" fill="#111"/></g>',
      sky("lbs5", "#1b2a4a", "#f4b07a"));
  }

  window.SCENES = { lbstation, lbhayti, lbhideaway, lbshow, lbcorner };
})();
