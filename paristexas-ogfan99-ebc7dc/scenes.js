/* Paris Texas scenes (Regions tab: Los Angeles + SoCal; Louie Pastel is from Compton, he and Felix met as freshmen at El Camino College in 2013). CSS classes prefixed px- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pxglow{0%,100%{opacity:.45}50%{opacity:1}}.px-glow{animation:pxglow 2.2s ease-in-out infinite}.px-g2{animation-delay:-1.1s}' +
    '@keyframes pxwave{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.px-wv{transform-box:fill-box;transform-origin:50% 50%;animation:pxwave .7s ease-in-out infinite}' +
    '@keyframes pxsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.px-sway{transform-box:fill-box;transform-origin:50% 100%;animation:pxsway 4s ease-in-out infinite}.px-sw2{animation-delay:-2s}' +
    '@keyframes pxduck{0%{transform:translateX(0)}50%{transform:translateX(-60px)}100%{transform:translateX(0)}}.px-duck{animation:pxduck 12s ease-in-out infinite}.px-duck2{animation-delay:-5s}' +
    '@keyframes pxripple{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.px-rip{transform-box:fill-box;transform-origin:50% 50%;animation:pxripple 3s ease-out infinite}.px-rip2{animation-delay:-1.5s}' +
    '@keyframes pxjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}.px-jump{animation:pxjump .55s ease-in-out infinite}.px-j2{animation-delay:-.2s}.px-j3{animation-delay:-.38s}' +
    '@keyframes pxbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.px-beam{transform-box:fill-box;transform-origin:50% 0%;animation:pxbeam 3s ease-in-out infinite}.px-b2{animation-delay:-1.5s}' +
    '@keyframes pxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.px-sp{animation:pxspray 1.4s ease-out infinite}.px-sp2{animation-delay:.45s}' +
    '@keyframes pxplane{0%{transform:translate(-80px,20px)}100%{transform:translate(480px,-30px)}}.px-plane{animation:pxplane 14s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="px-sway' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q3 ' + (-h / 2) + ' -1 ' + (-h) + '" stroke="#5a4632" stroke-width="4" fill="none"/>' +
    [[-22, -6], [-16, 8], [20, -6], [16, 9], [-4, -14], [6, 14]].map(d => '<path d="M' + (x - 1) + ' ' + (base - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 6) + ' ' + d[0] + ' ' + (d[1] + 4) + '" stroke="#2e6b3a" stroke-width="3.5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const RED = "#e8433a", GRN = "#2fbf71", SKY = "#7ec8ff", MET = "#e16710";

  /* 1. Metro Local 210 pulling up on Crenshaw Blvd at Redondo Beach Blvd, El Camino College's sign wall and palms behind, South Bay sun */
  function pxstation() {
    const bus = '<g class="anim-train"><rect x="30" y="122" width="270" height="76" rx="9" fill="#d9dde2" stroke="#7a828c" stroke-width="2"/>' +
      '<rect x="30" y="160" width="270" height="22" fill="' + MET + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (74 + i * 36) + '" y="132" width="30" height="24" rx="2" fill="#1e2a36"/>').join("") +
      '<rect x="38" y="132" width="28" height="56" rx="2" fill="#1e2a36"/>' +
      '<rect x="34" y="124" width="96" height="10" rx="2" fill="#111"/><text x="82" y="132" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">210 CRENSHAW</text>' +
      '<circle cx="80" cy="198" r="12" fill="#222"/><circle cx="80" cy="198" r="5" fill="#9aa1a8"/><circle cx="250" cy="198" r="12" fill="#222"/><circle cx="250" cy="198" r="5" fill="#9aa1a8"/>' +
      '<circle cx="34" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#px1)"/><circle cx="330" cy="40" r="20" fill="#ffe9a8" class="px-glow"/>' +
      '<rect x="0" y="96" width="400" height="30" fill="#c9b8a0"/><rect x="0" y="92" width="400" height="6" fill="#a8927a"/>' +
      '<rect x="120" y="58" width="190" height="40" fill="#b8473a"/><rect x="120" y="56" width="190" height="5" fill="#8a3028"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (128 + i * 23) + '" y="66" width="14" height="22" fill="#2a3442"/>').join("") +
      palm(30, 126, 90) + palm(370, 126, 100, " px-sw2") + palm(330, 126, 70) +
      '<rect x="0" y="126" width="400" height="74" fill="#4a4a50"/><rect x="0" y="198" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="206" width="400" height="54" fill="#a39d90"/>' +
      bus +
      '<rect x="346" y="120" width="5" height="86" fill="#6b7178"/><rect x="326" y="102" width="46" height="34" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' + badge(332, 113, "210", MET) +
      '<text x="349" y="132" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">BUS STOP</text>' +
      '<rect x="56" y="18" width="250" height="34" rx="3" fill="#111"/><text x="68" y="34" ' + font + ' font-size="12" fill="#fff">Crenshaw / Redondo Beach</text><text x="68" y="46" ' + font + ' font-size="9" fill="#ffb84a">EL CAMINO COLLEGE</text>' + badge(258, 35, "210", MET),
      sky("px1", "#5fa8e6", "#f6dcb0"));
  }

  /* 2. El Camino College, freshman year 2013: the brick-and-concrete quad, palms, a laptop on a bench making a beat (waveform pulsing), where Louie and Felix met */
  function pxcampus() {
    const wave = Array.from({ length: 14 }, (_, i) => '<rect class="px-wv" style="animation-delay:-' + (i * 0.09).toFixed(2) + 's" x="' + (172 + i * 4) + '" y="' + 166 + '" width="2.5" height="14" fill="' + (i % 2 ? GRN : RED) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#px2)"/>' +
      '<rect x="20" y="60" width="170" height="90" fill="#a9483a"/><rect x="20" y="54" width="170" height="8" fill="#e6dccb"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 26) + '" y="72" width="16" height="30" fill="#24323e"/><rect x="' + (30 + i * 26) + '" y="112" width="16" height="26" fill="#24323e"/>').join("") +
      '<rect x="220" y="76" width="160" height="74" fill="#e6dccb"/><rect x="220" y="70" width="160" height="8" fill="#a9483a"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (232 + i * 30) + '" y="88" width="18" height="44" fill="#3a4a5a"/>').join("") +
      palm(205, 152, 100) + palm(390, 152, 80, " px-sw2") +
      '<rect x="0" y="150" width="400" height="110" fill="#8fbf5a"/><path d="M120 260L180 150h40L300 260z" fill="#d9cfbd"/>' +
      '<rect x="140" y="186" width="120" height="8" rx="2" fill="#7a5a3a"/><path d="M148 194v20M252 194v20" stroke="#4a3a2a" stroke-width="4"/>' +
      '<path d="M164 186l4 -26h64l4 26z" fill="#2b2f36"/><rect x="168" y="162" width="64" height="22" fill="#0d1116"/>' + wave +
      '<rect x="70" y="200" width="44" height="30" rx="2" fill="#f2efe6" transform="rotate(-8 92 215)"/><text x="92" y="219" text-anchor="middle" transform="rotate(-8 92 215)" font-family="Permanent Marker, cursive" font-size="11" fill="#333">2013</text>' +
      '<rect x="22" y="160" width="46" height="34" rx="2" fill="#111" stroke="#fff" stroke-width="1"/><text x="45" y="174" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">EL CAMINO</text><text x="45" y="184" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">COLLEGE</text>',
      sky("px2", "#6db4ee", "#f3e3c3"));
  }

  /* 3. Alondra Park lake, right across Redondo Beach Blvd from the campus: palms, ducks gliding, ripples, a little plane crossing the South Bay sky */
  function pxpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#px3)"/>' +
      '<g class="px-plane"><path d="M0 40l26 -4l4 -6l3 6l12 1l-12 3l-3 6l-4 -5z" fill="#f2f2f2" stroke="#7a828c" stroke-width="1"/></g>' +
      '<rect x="0" y="108" width="400" height="30" fill="#6f9a4a"/>' +
      '<rect x="250" y="88" width="120" height="22" fill="#e6dccb"/><rect x="262" y="94" width="14" height="10" fill="#3a4a5a"/><rect x="290" y="94" width="14" height="10" fill="#3a4a5a"/><rect x="318" y="94" width="14" height="10" fill="#3a4a5a"/>' +
      palm(60, 120, 90) + palm(110, 118, 70, " px-sw2") + palm(380, 120, 95) +
      '<ellipse cx="200" cy="190" rx="200" ry="58" fill="#3f7fa8"/><ellipse cx="200" cy="184" rx="176" ry="44" fill="#4f93bd"/>' +
      '<ellipse class="px-rip" cx="150" cy="190" rx="24" ry="6" fill="none" stroke="#cfe8f6" stroke-width="1.5"/><ellipse class="px-rip px-rip2" cx="270" cy="200" rx="24" ry="6" fill="none" stroke="#cfe8f6" stroke-width="1.5"/>' +
      [[240, 178, ""], [300, 196, " px-duck2"]].map(d => '<g class="px-duck' + d[2] + '"><ellipse cx="' + d[0] + '" cy="' + d[1] + '" rx="12" ry="6" fill="#8a6a4a"/><circle cx="' + (d[0] - 10) + '" cy="' + (d[1] - 8) + '" r="5" fill="#2f6b3a"/><path d="M' + (d[0] - 15) + ' ' + (d[1] - 8) + 'l-6 2l6 1z" fill="#f2b632"/></g>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#6f9a4a"/><rect x="20" y="226" width="60" height="6" rx="2" fill="#7a5a3a"/><path d="M26 232v12M74 232v12" stroke="#4a3a2a" stroke-width="3"/>',
      sky("px3", "#7ec0f0", "#fbe6c0"));
  }

  /* 4. The show: "Let's get in the pit!" red and green stage light (their red-and-green Paris, Texas glow), the crowd bouncing in the pit, an amp stack */
  function pxpit() {
    const crowd = Array.from({ length: 13 }, (_, i) => '<g class="px-jump' + ["", " px-j2", " px-j3"][i % 3] + '"><circle cx="' + (16 + i * 30) + '" cy="' + (206 - (i % 2) * 6) + '" r="10" fill="#140b0d"/><rect x="' + (6 + i * 30) + '" y="' + (214 - (i % 2) * 6) + '" width="20" height="40" rx="8" fill="#140b0d"/>' +
      (i % 4 === 1 ? '<path d="M' + (8 + i * 30) + ' ' + (218 - (i % 2) * 6) + 'l-8 -26" stroke="#140b0d" stroke-width="6" stroke-linecap="round"/>' : "") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#0b0608"/>' +
      '<path class="px-beam" d="M100 0l-50 190h100z" fill="' + RED + '" opacity=".35"/><path class="px-beam px-b2" d="M300 0l-50 190h100z" fill="' + GRN + '" opacity=".35"/>' +
      '<rect x="40" y="150" width="320" height="16" fill="#2a2024"/>' +
      '<rect x="56" y="96" width="40" height="54" fill="#1c1c1e" stroke="#444" stroke-width="2"/><circle cx="76" cy="112" r="8" fill="#333"/><circle cx="76" cy="134" r="8" fill="#333"/>' +
      '<rect x="304" y="96" width="40" height="54" fill="#1c1c1e" stroke="#444" stroke-width="2"/><circle cx="324" cy="112" r="8" fill="#333"/><circle cx="324" cy="134" r="8" fill="#333"/>' +
      '<rect x="100" y="30" width="200" height="40" rx="4" fill="#140b0d" stroke="' + RED + '" stroke-width="2" class="px-glow"/><text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" textLength="176" lengthAdjust="spacingAndGlyphs" fill="' + GRN + '">WHO WANNA ROCK?</text>' +
      '<rect x="196" y="100" width="4" height="50" fill="#888"/><circle cx="198" cy="98" r="5" fill="#aaa"/>' +
      crowd,
      "");
  }

  /* 5. The corner: E Alondra Blvd and S Santa Fe Ave in Compton (Alondra Blvd runs straight from El Camino College into Compton), PARIS TEXAS tagged on the wall, downtown LA's towers far off behind */
  function pxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#px5)"/>' +
      '<g fill="#3a3550" opacity=".85"><rect x="150" y="40" width="16" height="60"/><rect x="170" y="26" width="20" height="74"/><path d="M170 26l10 -10l10 10z"/><rect x="194" y="48" width="14" height="52"/><rect x="212" y="34" width="18" height="66"/><rect x="234" y="56" width="12" height="44"/></g>' +
      palm(40, 110, 80) + palm(360, 110, 90, " px-sw2") +
      '<rect x="0" y="100" width="400" height="10" fill="#7a6f66"/>' +
      '<rect x="60" y="110" width="280" height="96" fill="#e6d8c2"/><rect x="60" y="110" width="280" height="6" fill="#bfae94"/>' +
      tag("PARIS TEXAS", 92, 172, 34, RED, -5) + tag("MID AIR", 230, 196, 16, GRN, -4) + tag("PT", 110, 196, 18, SKY, 6) +
      '<circle class="px-sp" cx="318" cy="182" r="3" fill="' + GRN + '" opacity=".7"/><circle class="px-sp px-sp2" cx="324" cy="178" r="2.5" fill="' + RED + '" opacity=".7"/>' +
      '<rect x="0" y="206" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="218" width="400" height="42" fill="#4a4a50"/>' +
      '<rect x="30" y="84" width="5" height="122" fill="#6b7178"/>' + sign(4, 62, 120, "E ALONDRA BLVD") + sign(10, 86, 108, "S SANTA FE AVE"),
      sky("px5", "#f2a65a", "#f6d9a8"));
  }

  window.SCENES = { pxstation: pxstation, pxcampus: pxcampus, pxpark: pxpark, pxpit: pxpit, pxcorner: pxcorner };
})();
