/* pell scenes (Regions tab: New Orleans; St. Roch, where Pell grew up before Katrina). CSS classes and ids prefixed pl- (the page's own anim-train is kept).
   1 St. Claude Av / St. Roch Av on RTA bus route 8 (St. Claude - Arabi): the bus pulls in, the white St. Roch Market on the corner behind.
   2 St. Roch Chapel in the Campo Santo: the little white Gothic chapel, whitewashed above-ground tombs, candles flickering, a dove crossing.
   3 The French Market cafe on Decatur St ("Cafe Du Monde"): green-and-white striped awning, beignets under falling powdered sugar, steam off the cafe au lait.
   4 Crescent Park on the Bywater riverfront ("Floating While Dreaming"): the rusted steel arch footbridge, a sternwheeler sliding down the Mississippi.
   5 St Claude Av and St Roch Av: green signs, PELL tagged on the stucco, the Crescent City Connection on the skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes plflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pl-flk{animation:plflick 2.2s infinite}.pl-flk2{animation-delay:.7s}.pl-flk3{animation-delay:1.3s}' +
    '@keyframes plcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.pl-cl{animation:plcloud 30s linear infinite}.pl-cl2{animation-delay:-15s}' +
    '@keyframes plbird{from{transform:translate(-40px,10px)}to{transform:translate(440px,-30px)}}.pl-bird{animation:plbird 10s linear infinite}' +
    '@keyframes plwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.pl-wing{transform-box:fill-box;transform-origin:50% 100%;animation:plwing .5s ease-in-out infinite}' +
    '@keyframes plsugar{0%{transform:translateY(-8px);opacity:0}20%{opacity:1}100%{transform:translateY(30px);opacity:0}}.pl-sg{animation:plsugar 1.8s linear infinite}.pl-sg2{animation-delay:-.6s}.pl-sg3{animation-delay:-1.2s}' +
    '@keyframes plsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}.pl-st{animation:plsteam 2.4s ease-out infinite}.pl-st2{animation-delay:-1.2s}' +
    '@keyframes plboat{from{transform:translateX(-170px)}to{transform:translateX(470px)}}.pl-boat{animation:plboat 22s linear infinite;animation-delay:-9s}' +
    '@keyframes plwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.pl-wh{transform-box:fill-box;transform-origin:50% 50%;animation:plwheel 2.4s linear infinite}' +
    '@keyframes plrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.pl-rip{animation:plrip 3s ease-in-out infinite}.pl-rip2{animation-delay:-1.5s}' +
    '@keyframes plspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pl-sp{animation:plspray 1.4s ease-out infinite}.pl-sp2{animation-delay:.45s}' +
    '@keyframes plblink{0%,100%{opacity:.25}50%{opacity:1}}.pl-bl{animation:plblink 1.6s ease-in-out infinite}.pl-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s) => '<g fill="#fff" opacity=".75"><ellipse cx="' + x + '" cy="' + y + '" rx="' + 22 * s + '" ry="' + 8 * s + '"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (y - 6 * s) + '" rx="' + 12 * s + '" ry="' + 8 * s + '"/></g>';
  const GOLD = "#ffd54a", TEAL = "#2fb8a6", CORAL = "#e8705a", RTA = "#1f4e79";

  /* a shotgun house: pastel clapboard, gable front, shutters, porch brackets */
  const shotgun = (x, base, w, h, c, trim) => '<g><rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
    Array.from({ length: Math.floor(h / 6) }, (_, i) => '<path d="M' + x + ' ' + (base - h + 6 + i * 6) + 'h' + w + '" stroke="#000" stroke-opacity=".08"/>').join("") +
    '<path d="M' + (x - 3) + ' ' + (base - h) + 'l' + (w / 2 + 3) + ' -' + (w * 0.42) + 'l' + (w / 2 + 3) + ' ' + (w * 0.42) + 'z" fill="' + trim + '"/>' +
    '<rect x="' + (x + w * 0.14) + '" y="' + (base - h * 0.78) + '" width="' + (w * 0.24) + '" height="' + (h * 0.5) + '" fill="#2a2f3a"/><rect x="' + (x + w * 0.6) + '" y="' + (base - h * 0.78) + '" width="' + (w * 0.24) + '" height="' + (h * 0.78) + '" fill="#3a2a22"/>' +
    '<rect x="' + (x + w * 0.08) + '" y="' + (base - h * 0.8) + '" width="' + (w * 0.06) + '" height="' + (h * 0.54) + '" fill="' + trim + '"/><rect x="' + (x + w * 0.38) + '" y="' + (base - h * 0.8) + '" width="' + (w * 0.06) + '" height="' + (h * 0.54) + '" fill="' + trim + '"/>' +
    '<path d="M' + x + ' ' + (base - h * 0.92) + 'h' + w + '" stroke="' + trim + '" stroke-width="3"/></g>';

  /* 1. St. Claude Av / St. Roch Av, RTA route 8 */
  function plstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (62 + i * 42) + '" y="124" width="34" height="26" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="112" width="300" height="78" rx="10" fill="#f4f6f8" stroke="#8a96a2" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="300" height="8" fill="' + RTA + '"/><path d="M40 168h300" stroke="' + TEAL + '" stroke-width="4"/>' +
      '<rect x="322" y="118" width="16" height="44" rx="3" fill="#2a3a48"/><rect x="44" y="124" width="12" height="54" rx="2" fill="#2a3a48"/>' +
      '<rect x="246" y="114" width="72" height="9" rx="2" fill="#111"/><text x="282" y="121.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">8 ST. CLAUDE</text>' +
      '<circle cx="334" cy="178" r="4" fill="#fff6c2"/><circle cx="96" cy="190" r="12" fill="#1c1c1c"/><circle cx="96" cy="190" r="5" fill="#9aa3ab"/><circle cx="286" cy="190" r="12" fill="#1c1c1c"/><circle cx="286" cy="190" r="5" fill="#9aa3ab"/></g>';
    const market = '<g><rect x="230" y="48" width="170" height="70" fill="#f1eee6"/><path d="M226 48h178l-6 -10H232z" fill="#e2ddd0"/>' +
      [244, 276, 308, 340, 372].map(x => '<rect x="' + x + '" y="56" width="8" height="62" fill="#fbfaf6" stroke="#cfc8b8"/>').join("") +
      [256, 288, 320, 352].map(x => '<rect x="' + x + '" y="64" width="16" height="40" fill="#e9b65a" opacity=".85" class="pl-flk' + (x % 3 ? " pl-flk2" : "") + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls1)"/>' + '<g class="pl-cl">' + cloud(60, 30, 1) + '</g>' +
      shotgun(4, 118, 58, 62, "#f2b6c6", "#fff") + shotgun(74, 118, 58, 58, "#9fd3c7", "#fff") + shotgun(144, 118, 58, 64, "#f6d68a", "#fff") + market +
      '<rect x="0" y="118" width="400" height="76" fill="#55565c"/><path d="M0 150h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="0" y="194" width="400" height="66" fill="#a7a299"/><path d="M0 200h400" stroke="#8d887f" stroke-width="2"/>' +
      '<rect x="366" y="122" width="5" height="78" fill="#3a3a3a"/><rect x="354" y="110" width="30" height="22" rx="3" fill="' + RTA + '"/><text x="369" y="126" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8</text>' +
      '<rect x="54" y="208" width="292" height="40" rx="3" fill="#111"/><text x="68" y="226" ' + font + ' font-size="15" fill="#fff">St. Claude Av /</text><text x="68" y="242" ' + font + ' font-size="15" fill="#fff">St. Roch Av</text>' +
      badge(250, 228, "8", RTA) + '<text x="282" y="232" ' + font + ' font-size="9" fill="#cfd8e0">RTA BUS</text>',
      sky("pls1", "#2c2350", "#f0956a"));
  }

  /* 2. St. Roch Chapel, Campo Santo */
  function plchapel() {
    const tomb = (x, base, w, h, c) => '<g><rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '" stroke="#b9b4a8"/><path d="M' + (x - 2) + ' ' + (base - h) + 'l' + (w / 2 + 2) + ' -10l' + (w / 2 + 2) + ' 10z" fill="' + c + '" stroke="#b9b4a8"/>' +
      '<rect x="' + (x + w * 0.3) + '" y="' + (base - h * 0.7) + '" width="' + (w * 0.4) + '" height="' + (h * 0.4) + '" fill="#d8d3c6"/><path d="M' + (x + w / 2) + ' ' + (base - h - 16) + 'v10M' + (x + w / 2 - 4) + ' ' + (base - h - 12) + 'h8" stroke="#8a857a" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls2)"/>' + '<g class="pl-cl pl-cl2">' + cloud(80, 40, 1.2) + '</g>' +
      '<g fill="#3d6b3a"><ellipse cx="40" cy="120" rx="50" ry="40"/><ellipse cx="370" cy="116" rx="50" ry="44"/></g>' +
      /* chapel */
      '<g><rect x="140" y="84" width="120" height="110" fill="#ece6d8" stroke="#bdb5a2" stroke-width="2"/>' +
      '<path d="M134 86l66 -40l66 40z" fill="#d9d2c0" stroke="#bdb5a2" stroke-width="2"/>' +
      '<rect x="186" y="18" width="28" height="40" fill="#ece6d8" stroke="#bdb5a2" stroke-width="2"/><path d="M182 20l18 -18l18 18z" fill="#7d8a8e"/><path d="M200 2v-0" />' +
      '<path d="M193 50v-18q7 -10 14 0v18z" fill="#4a4a52"/>' +
      '<path d="M182 194v-58q18 -26 36 0v58z" fill="#5a3a26" stroke="#3a2416" stroke-width="2"/><path d="M200 194v-72" stroke="#3a2416" stroke-width="2"/>' +
      '<path d="M152 160v-34q10 -14 20 0v34z" fill="#7aa3c8" stroke="#bdb5a2"/><path d="M228 160v-34q10 -14 20 0v34z" fill="#c98aa0" stroke="#bdb5a2"/>' +
      '<circle cx="200" cy="100" r="11" fill="#e8c46a" stroke="#bdb5a2" stroke-width="2"/><path d="M200 90v20M190 100h20" stroke="#bdb5a2" stroke-width="1.5"/></g>' +
      '<rect x="0" y="194" width="400" height="66" fill="#8fae6a"/><path d="M0 194h400" stroke="#6f8f4c" stroke-width="3"/>' +
      tomb(20, 216, 40, 34, "#f4f2ec") + tomb(72, 220, 34, 30, "#efece4") + tomb(296, 220, 36, 32, "#f4f2ec") + tomb(346, 214, 40, 36, "#efece4") +
      '<rect x="128" y="200" width="144" height="4" fill="#3a3a3a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (130 + i * 11) + ' 216v-22l2 -4l2 4" stroke="#2e2e2e" stroke-width="2" fill="none"/>').join("") + '<path d="M128 214h144" stroke="#2e2e2e" stroke-width="2"/>' +
      [[118, 230], [282, 232], [196, 238]].map((p, i) => '<rect x="' + (p[0] - 3) + '" y="' + p[1] + '" width="6" height="12" fill="#f6efe0"/><ellipse class="pl-flk' + (i ? " pl-flk" + (i + 1) : "") + '" cx="' + p[0] + '" cy="' + (p[1] - 4) + '" rx="3" ry="5" fill="#ffb347"/>').join("") +
      '<g class="pl-bird"><path class="pl-wing" d="M40 70q8 -8 14 0q6 -8 14 0" stroke="#fff" stroke-width="3" fill="none"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#22301c">ST. ROCH CHAPEL · CAMPO SANTO</text>',
      sky("pls2", "#8fc3e8", "#f6efe0"));
  }

  /* 3. The French Market cafe */
  function plcafe() {
    let stripes = "";
    for (let i = 0; i < 20; i++) stripes += '<rect x="' + (i * 20) + '" y="40" width="10" height="34" fill="' + (i % 2 ? "#1f7a4a" : "#fff") + '"/><path d="M' + (i * 20) + ' 74h10l-5 8z" fill="#1f7a4a"/><path d="M' + (i * 20 + 10) + ' 74h10l-5 8z" fill="#fff"/>';
    const table = (x) => '<g><ellipse cx="' + x + '" cy="190" rx="34" ry="9" fill="#e9e6df" stroke="#9a968c"/><path d="M' + x + ' 199v34M' + (x - 14) + ' 236h28" stroke="#3a3a3a" stroke-width="4"/>' +
      '<rect x="' + (x - 54) + '" y="196" width="16" height="4" fill="#2a2a2a"/><path d="M' + (x - 52) + ' 200v32M' + (x - 40) + ' 200v32M' + (x - 54) + ' 196v-20" stroke="#2a2a2a" stroke-width="3"/>' +
      '<rect x="' + (x + 38) + '" y="196" width="16" height="4" fill="#2a2a2a"/><path d="M' + (x + 40) + ' 200v32M' + (x + 52) + ' 200v32M' + (x + 54) + ' 196v-20" stroke="#2a2a2a" stroke-width="3"/></g>';
    const plate = (x) => '<g><ellipse cx="' + x + '" cy="184" rx="16" ry="5" fill="#fff" stroke="#bbb"/>' +
      '<path d="M' + (x - 11) + ' 182l5 -8l8 2l4 6z" fill="#e3b46a" stroke="#c48d3e"/><path d="M' + (x - 2) + ' 182l4 -9l8 1l1 8z" fill="#e8bd74" stroke="#c48d3e"/>' +
      '<path d="M' + (x - 10) + ' 176q8 -4 18 -2" stroke="#fff" stroke-width="3" stroke-linecap="round"/>' +
      [0, 1, 2].map(k => '<g class="pl-sg' + (k ? " pl-sg" + (k + 1) : "") + '"><circle cx="' + (x - 6 + k * 6) + '" cy="160" r="1.6" fill="#fff"/><circle cx="' + (x - 3 + k * 6) + '" cy="152" r="1.2" fill="#fff"/></g>').join("") + '</g>';
    const cup = (x) => '<g><path d="M' + (x - 7) + ' 172h14l-2 12h-10z" fill="#fff" stroke="#bbb"/><path d="M' + (x + 7) + ' 175q5 1 0 6" stroke="#bbb" fill="none"/>' +
      '<path class="pl-st" d="M' + (x - 2) + ' 168q-3 -5 0 -10q3 -5 0 -10" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/><path class="pl-st pl-st2" d="M' + (x + 3) + ' 168q-3 -5 0 -10q3 -5 0 -10" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls3)"/>' +
      '<rect x="0" y="80" width="400" height="120" fill="#3c2c24"/>' + [30, 130, 230, 330].map(x => '<rect x="' + (x - 5) + '" y="80" width="10" height="130" fill="#f4f1ea"/>').join("") +
      [80, 180, 280].map(x => '<path d="M' + (x - 30) + ' 96h60" stroke="#ffe7a8" stroke-width="2"/><circle class="pl-flk' + (x === 180 ? " pl-flk2" : "") + '" cx="' + x + '" cy="100" r="5" fill="#ffe7a8"/>').join("") +
      stripes + '<rect x="0" y="34" width="400" height="8" fill="#16603a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8b8378"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 200l-10 60" stroke="#7a7266" stroke-width="2"/>').join("") +
      table(90) + plate(80) + cup(102) + table(300) + plate(292) + cup(314) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">FRENCH MARKET · DECATUR ST</text>',
      sky("pls3", "#9cc9ea", "#f3e2c4"));
  }

  /* 4. Crescent Park, the Mississippi */
  function plriver() {
    const RUST = "#9b4a26";
    const arch = '<g><path d="M120 150q80 -110 160 0" stroke="' + RUST + '" stroke-width="10" fill="none"/><path d="M128 150q72 -94 144 0" stroke="#b5592c" stroke-width="4" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const x = 136 + i * 16; const t = (x - 120) / 160; const y = 150 - 220 * t * (1 - t); return '<path d="M' + x + ' ' + (y + 4) + 'V150" stroke="' + RUST + '" stroke-width="2.5"/>'; }).join("") +
      '<rect x="100" y="148" width="200" height="8" fill="' + RUST + '"/><rect x="96" y="120" width="26" height="36" fill="#8a3f1f"/><rect x="278" y="120" width="26" height="36" fill="#8a3f1f"/></g>';
    const boat = '<g class="pl-boat"><rect x="0" y="176" width="130" height="14" fill="#f4f1ea" stroke="#9a968c"/><rect x="10" y="164" width="104" height="12" fill="#f8f6f0" stroke="#9a968c"/><rect x="24" y="154" width="70" height="10" fill="#f8f6f0" stroke="#9a968c"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (14 + i * 10) + '" y="167" width="6" height="6" fill="#2a3a48"/>').join("") +
      '<rect x="40" y="128" width="6" height="26" fill="#1a1a1a"/><rect x="54" y="128" width="6" height="26" fill="#1a1a1a"/><path d="M38 128h10M52 128h10" stroke="#c8a24a" stroke-width="3"/>' +
      '<rect x="0" y="188" width="130" height="5" fill="#b22a2a"/><g class="pl-wh"><circle cx="-10" cy="184" r="14" fill="none" stroke="#b22a2a" stroke-width="4"/><path d="M-24 184h28M-10 170v28M-20 174l20 20M0 174l-20 20" stroke="#b22a2a" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls4)"/>' + '<g class="pl-cl">' + cloud(90, 36, 1.3) + '</g><g class="pl-cl pl-cl2">' + cloud(40, 62, 0.9) + '</g>' +
      '<circle cx="330" cy="54" r="20" fill="#ffe9a8" opacity=".9"/>' +
      '<g fill="#5a6470"><rect x="300" y="128" width="60" height="16"/><rect x="0" y="132" width="70" height="12"/></g>' +
      '<rect x="0" y="144" width="400" height="20" fill="#7d8a5a"/><path d="M0 156h400" stroke="#4a4a4a" stroke-width="3"/><path d="M0 160h400" stroke="#4a4a4a" stroke-width="2"/>' +
      arch +
      '<rect x="0" y="164" width="400" height="96" fill="#6d6a4e"/>' +
      '<g class="pl-rip"><path d="M10 208h70M150 222h90M290 206h80M60 244h100" stroke="#a9a37c" stroke-width="2" stroke-linecap="round"/></g>' +
      '<g class="pl-rip pl-rip2"><path d="M100 200h40M240 238h70M330 226h50" stroke="#c4bf98" stroke-width="2" stroke-linecap="round"/></g>' +
      boat +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">CRESCENT PARK · BYWATER</text>',
      sky("pls4", "#7aa9d6", "#f6d8b8"));
  }

  /* 5. St Claude Av and St Roch Av */
  function plcorner() {
    const STEEL = "#6d7f8e";
    const span = (x0, w) => '<g stroke="' + STEEL + '" stroke-width="2.4" fill="none"><path d="M' + x0 + ' 100L' + (x0 + w * 0.3) + ' 56L' + (x0 + w * 0.5) + ' 80L' + (x0 + w * 0.7) + ' 56L' + (x0 + w) + ' 100"/>' +
      '<path d="M' + x0 + ' 100H' + (x0 + w) + '"/>' + Array.from({ length: 10 }, (_, i) => { const x = x0 + w * (i + 0.5) / 10; return '<path d="M' + x + ' 100V' + (i < 3 || i > 6 ? 100 - (i < 5 ? i : 9 - i) * 14 : 70) + '"/>'; }).join("") +
      '<path d="M' + (x0 + w * 0.3) + ' 56V112M' + (x0 + w * 0.7) + ' 56V112" stroke-width="4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pls5)"/>' +
      '<g fill="#2b2a4a"><rect x="0" y="90" width="40" height="40"/><rect x="40" y="70" width="18" height="60"/><rect x="62" y="80" width="24" height="50"/></g>' +
      span(90, 300) +
      '<rect x="0" y="122" width="400" height="102" fill="#e9d3a9"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (136 + i * 16) + 'h400" stroke="#d8bf92" stroke-width="1"/>').join("") +
      '<rect x="310" y="132" width="34" height="58" fill="#2f6b5e"/><rect x="314" y="136" width="12" height="50" fill="#3d8a79"/><rect x="328" y="136" width="12" height="50" fill="#3d8a79"/>' +
      tag("PELL", 26, 194, 62, GOLD, -6) + tag("PELL YEAH", 196, 170, 20, TEAL, -4) + tag("NOLA GROWN", 150, 212, 18, CORAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(232, 94, 156, "St Claude Av") + sign(262, 120, 126, "St Roch Av") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="pl-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="pl-sp"><circle cx="150" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="pl-sp pl-sp2"><circle cx="156" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<circle class="pl-bl" cx="210" cy="60" r="2" fill="#ff5a5a"/><circle class="pl-bl pl-bl2" cx="300" cy="60" r="2" fill="#ff5a5a"/>',
      sky("pls5", "#2e2a5e", "#f2a46e"));
  }

  window.SCENES = { plstation: plstation, plchapel: plchapel, plcafe: plcafe, plriver: plriver, plcorner: plcorner };
})();
