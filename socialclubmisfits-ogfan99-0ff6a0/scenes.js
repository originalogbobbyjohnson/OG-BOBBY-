/* socialclubmisfits scenes (Regions tab: South Florida; Miami. Marty + Fern). CSS classes prefixed sc- (the page's own anim-train is kept).
   1 Metrorail at Historic Overtown/Lyric Theatre (NW 1 Av & NW 8 St), the elevated stop where the Green and Orange Lines share the tracks; Marty preached to kids down in Overtown ("Lucky").
   2 The Lyric Theater, 819 NW 2nd Av, Overtown: the 1913 cream stucco theater with its tall vertical LYRIC sign and marquee, lights chasing.
   3 The tour bus rolling over the MacArthur Causeway at night, Miami's skyline lit behind ("until they saw that bus", Into the Night tour).
   4 El Morro (Castillo San Felipe del Morro), Old San Juan: Fern is from the island of PR. Sandstone walls, the round garita sentry box, kites over the lawn.
   5 NW 2 Av and NW 8 St in Overtown: green signs, SOCIAL CLUB tagged on the wall, the Freedom Tower and downtown towers behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes scsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.sc-palm{transform-box:fill-box;transform-origin:50% 100%;animation:scsway 3.2s ease-in-out infinite}.sc-palm2{animation-delay:-1.6s}' +
    '@keyframes sccloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.sc-cloud{animation:sccloud 26s linear infinite}.sc-cloud2{animation-delay:-13s}' +
    '@keyframes scblink{0%,100%{opacity:.25}50%{opacity:1}}.sc-bl{animation:scblink 1.2s ease-in-out infinite}.sc-bl2{animation-delay:-.4s}.sc-bl3{animation-delay:-.8s}' +
    '@keyframes scbus{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.sc-bus{animation:scbus 9s linear infinite;animation-delay:-4.5s}' +
    '@keyframes scspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sc-rim{transform-box:fill-box;transform-origin:50% 50%;animation:scspin .6s linear infinite}' +
    '@keyframes sckite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(6px,-8px) rotate(6deg)}}.sc-kite{transform-box:fill-box;transform-origin:50% 100%;animation:sckite 2.6s ease-in-out infinite}.sc-kite2{animation-delay:-1.3s}' +
    '@keyframes scwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.sc-wave{animation:scwave 3s ease-in-out infinite}' +
    '@keyframes scspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sc-sp{animation:scspray 1.4s ease-out infinite}.sc-sp2{animation-delay:.45s}' +
    '@keyframes sctw{0%,100%{opacity:.2}50%{opacity:1}}.sc-tw{animation:sctw 2s ease-in-out infinite}.sc-tw2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const pill = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 13) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="sc-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const MRG = "#00a651", MRO = "#f7941d", TEAL = "#38e0c8", PINK = "#ff4fa3", GOLD = "#ffd34d";
  const skyline = (y, fill, op) => '<g fill="' + fill + '" opacity="' + (op || 1) + '">' +
    [[40, 40, 70], [84, 26, 96], [114, 34, 60], [152, 22, 120], [178, 36, 84], [218, 28, 108], [250, 40, 74], [294, 24, 128], [322, 34, 90], [360, 30, 66]]
      .map(b => '<rect x="' + b[0] + '" y="' + (y - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") + '</g>';

  /* 1. Metrorail, Historic Overtown/Lyric Theatre (elevated, Green + Orange) */
  function scstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="98" width="30" height="20" rx="3" fill="#24323e"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="88" width="340" height="50" rx="8" fill="#d9dee3" stroke="#8a939c" stroke-width="2"/>' + win +
      '<rect x="24" y="122" width="340" height="5" fill="' + MRG + '"/><rect x="24" y="128" width="340" height="3" fill="' + MRO + '"/>' +
      '<rect x="340" y="94" width="20" height="30" rx="3" fill="#2b3640"/><circle cx="360" cy="130" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#scs1)"/>' +
      '<circle cx="330" cy="44" r="18" fill="#fff1b8" opacity=".9"/>' +
      '<g class="sc-cloud"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".7"/></g><g class="sc-cloud sc-cloud2"><ellipse cx="40" cy="58" rx="22" ry="6" fill="#fff" opacity=".55"/></g>' +
      skyline(100, "#6d84a3", 0.55) +
      palm(16, 150, 92) + palm(390, 150, 84, "sc-palm2") +
      '<path d="M30 68h340" stroke="#d6d0c4" stroke-width="7"/><path d="M60 68v20M200 68v20M340 68v20" stroke="#bdb6aa" stroke-width="4"/>' +
      '<rect x="0" y="138" width="400" height="14" fill="#bdb6aa"/><rect x="0" y="150" width="400" height="5" fill="#8f897e"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="155" width="18" height="70" fill="#cfc8bb"/><path d="M' + (x - 22) + ' 155h44l-13 12h-18z" fill="#bdb6aa"/>').join("") +
      train +
      '<rect x="0" y="225" width="400" height="35" fill="#6a6c70"/><path d="M0 242h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      '<rect x="60" y="162" width="280" height="56" rx="3" fill="#111"/><text x="72" y="182" ' + font + ' font-size="14" fill="#fff">Historic Overtown/</text><text x="72" y="199" ' + font + ' font-size="14" fill="#fff">Lyric Theatre</text>' +
      '<text x="72" y="212" ' + font + ' font-size="8" fill="#cfd8e0">Metrorail · NW 1 Av &amp; NW 8 St</text>' +
      pill(250, 180, "GREEN", MRG) + pill(250, 202, "ORANGE", MRO),
      sky("scs1", "#2f8fd6", "#bfe6fb"));
  }

  /* 2. The Lyric Theater, Overtown */
  function sclyric() {
    const bulbs = Array.from({ length: 13 }, (_, i) => '<circle class="sc-bl' + (i % 3 ? " sc-bl" + (i % 3 + 1) : "") + '" cx="' + (128 + i * 12) + '" cy="150" r="2.6" fill="#ffe27a"/>').join("") +
      Array.from({ length: 13 }, (_, i) => '<circle class="sc-bl' + ((i + 1) % 3 ? " sc-bl" + ((i + 1) % 3 + 1) : "") + '" cx="' + (128 + i * 12) + '" cy="178" r="2.6" fill="#ffe27a"/>').join("");
    const letters = ["L", "Y", "R", "I", "C"].map((l, i) => '<text class="sc-bl' + (i % 3 ? " sc-bl" + (i % 3 + 1) : "") + '" x="200" y="' + (70 + i * 15) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#ff5a6e">' + l + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#scs2)"/>' +
      '<g class="sc-cloud"><ellipse cx="60" cy="34" rx="34" ry="8" fill="#fff" opacity=".6"/></g>' +
      palm(40, 214, 110) + palm(368, 214, 100, "sc-palm2") +
      '<rect x="96" y="96" width="208" height="122" fill="#f2e6cf" stroke="#c9b48e" stroke-width="2"/>' +
      '<path d="M90 96h220v-8h-220z" fill="#e2d1ae"/><rect x="96" y="104" width="208" height="6" fill="#d9c49c"/>' +
      [112, 152, 248, 288].map(x => '<rect x="' + (x - 8) + '" y="114" width="16" height="22" rx="8" fill="#6b8fa8"/>').join("") +
      '<rect x="186" y="54" width="28" height="84" rx="3" fill="#1f2433" stroke="#c9b48e" stroke-width="2"/>' + letters +
      '<rect x="118" y="142" width="164" height="44" fill="#1f2433"/>' + bulbs +
      '<text x="200" y="168" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">OVERTOWN · SOCIAL CLUB</text>' +
      '<rect x="160" y="190" width="80" height="28" fill="#7a3a2a"/><path d="M200 190v28" stroke="#4a2218" stroke-width="2"/>' +
      [100, 300].map(x => '<rect x="' + (x - 4) + '" y="96" width="8" height="122" fill="#e9dcc0"/>').join("") +
      '<rect x="0" y="218" width="400" height="42" fill="#8d8f93"/><rect x="0" y="218" width="400" height="6" fill="#b9b4aa"/>',
      sky("scs2", "#1d6fb8", "#ffcf9a"));
  }

  /* 3. Tour bus on the MacArthur Causeway at night */
  function scbus() {
    const stars = Array.from({ length: 16 }, (_, i) => '<circle class="sc-tw' + (i % 2 ? " sc-tw2" : "") + '" cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 29) % 60) + '" r="1.3" fill="#fff"/>').join("");
    const lit = Array.from({ length: 40 }, (_, i) => '<rect x="' + (44 + (i * 37) % 330) + '" y="' + (60 + (i * 17) % 70) + '" width="4" height="3" fill="#ffe08a" opacity=".85"/>').join("");
    const bus = '<g class="sc-bus"><rect x="0" y="150" width="150" height="46" rx="6" fill="#141414" stroke="#3a3a3a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 20) + '" y="157" width="15" height="14" rx="2" fill="#2f4660"/>').join("") +
      '<rect x="128" y="155" width="18" height="22" rx="3" fill="#3d5a78"/><path d="M8 186h120" stroke="' + TEAL + '" stroke-width="3"/>' +
      '<text x="64" y="184" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="11" fill="' + PINK + '">into the night</text>' +
      '<circle cx="148" cy="190" r="3" fill="#fff6c2"/>' +
      '<g class="sc-rim"><circle cx="30" cy="198" r="9" fill="#222"/><path d="M30 191v14M23 198h14" stroke="#888" stroke-width="2"/></g>' +
      '<g class="sc-rim"><circle cx="118" cy="198" r="9" fill="#222"/><path d="M118 191v14M111 198h14" stroke="#888" stroke-width="2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#scs3)"/>' + stars +
      '<circle cx="62" cy="40" r="14" fill="#fff4cf"/>' +
      skyline(140, "#1c2440") + lit +
      '<rect x="0" y="140" width="400" height="120" fill="#0d3550"/><path d="M0 160h400M0 176h400" stroke="#ffe08a" stroke-width="1" stroke-dasharray="3 14" opacity=".5"/>' +
      '<g class="sc-wave"><path d="M-20 214q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v50h-460z" fill="#0d3550"/></g>' +
      '<rect x="0" y="196" width="400" height="10" fill="#9da3aa"/><path d="M0 196h400" stroke="#d7dbe0" stroke-width="2"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="206" width="12" height="54" fill="#7d838a"/>').join("") +
      '<path d="M0 190h400" stroke="#d7dbe0" stroke-width="2" stroke-dasharray="4 8"/>' +
      bus +
      '<rect x="270" y="20" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="330" y="35" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MacARTHUR CSWY</text>',
      sky("scs3", "#0a0f2a", "#4a2a6a"));
  }

  /* 4. El Morro, Old San Juan (Fern: "from the beautiful island of PR") */
  function scmorro() {
    const kite = (x, y, c, cls) => '<g class="sc-kite ' + cls + '"><path d="M' + x + ' ' + y + 'l10 -14l10 14l-10 16z" fill="' + c + '" stroke="#333" stroke-width="1"/><path d="M' + (x + 10) + ' ' + (y + 16) + 'q4 14 -4 26q6 10 2 20" stroke="#333" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#scs4)"/>' +
      '<g class="sc-cloud"><ellipse cx="80" cy="36" rx="38" ry="9" fill="#fff" opacity=".8"/></g><g class="sc-cloud sc-cloud2"><ellipse cx="40" cy="66" rx="26" ry="7" fill="#fff" opacity=".6"/></g>' +
      '<g class="sc-wave"><path d="M-20 150q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0v20h-460z" fill="#1f8fc4"/></g>' +
      '<rect x="0" y="150" width="400" height="20" fill="#1a7fb0"/>' +
      '<path d="M120 170l26 -56h220l14 56z" fill="#c9a77a"/><path d="M146 114h220v-10h-220z" fill="#b8956a"/>' +
      '<path d="M130 170l22 -44" stroke="#a88660" stroke-width="2"/>' + [170, 210, 250, 290, 330].map(x => '<rect x="' + x + '" y="98" width="14" height="8" fill="#b8956a"/>').join("") +
      '<rect x="292" y="66" width="12" height="38" fill="#d8d2c4"/><path d="M286 66h24l-12 -14z" fill="#9a2c2c"/>' +
      '<g><rect x="128" y="78" width="26" height="36" rx="2" fill="#d4b48a"/><path d="M124 78q17 -26 34 0z" fill="#c9a77a"/><circle cx="141" cy="56" r="4" fill="#c9a77a"/><rect x="136" y="88" width="10" height="14" rx="5" fill="#3a2a1a"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#5fae4a"/><path d="M0 170q200 -12 400 0" fill="#6cbf55"/>' +
      kite(60, 110, PINK, "") + kite(220, 70, GOLD, "sc-kite2") + kite(340, 120, TEAL, "") +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" stroke="#1f4a1a" stroke-width="3" paint-order="stroke">EL MORRO · SAN JUAN, PR</text>',
      sky("scs4", "#3aa2e8", "#d4f0ff"));
  }

  /* 5. NW 2 Av & NW 8 St, Overtown */
  function sccorner() {
    const towers = '<g fill="#8fa3be">' + [[20, 30, 80], [60, 24, 110], [92, 36, 70], [140, 26, 120], [206, 30, 96]].map(b => '<rect x="' + b[0] + '" y="' + (136 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") + '</g>';
    const freedom = '<g><rect x="168" y="60" width="30" height="76" fill="#f1e2c4" stroke="#c9b08a" stroke-width="1.5"/><rect x="172" y="44" width="22" height="16" fill="#efdcb8"/><path d="M170 44h26l-13 -12z" fill="#c9a24a"/><rect x="181" y="22" width="4" height="10" fill="#c9a24a"/>' +
      [68, 82, 96, 110].map(y => '<rect x="174" y="' + y + '" width="6" height="8" fill="#9db3c8"/><rect x="186" y="' + y + '" width="6" height="8" fill="#9db3c8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#scs5)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#ffe6a0" opacity=".9"/>' + towers + freedom +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      palm(30, 140, 84) + palm(240, 140, 78, "sc-palm2") +
      '<rect x="0" y="140" width="252" height="88" fill="#1b1b22"/><rect x="0" y="140" width="252" height="6" fill="#33333d"/>' +
      tag("SOCIAL CLUB", 12, 192, 34, TEAL, -5) + tag("MISFITS", 70, 220, 22, PINK, -3) +
      '<g class="sc-sp"><circle cx="232" cy="172" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="sc-sp sc-sp2"><circle cx="238" cy="166" r="2" fill="' + TEAL + '" opacity=".7"/></g>' +
      '<rect x="264" y="82" width="5" height="146" fill="#5b6168"/>' + sign(274, 92, 110, "NW 2 AV") + sign(274, 118, 110, "NW 8 ST") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">OVERTOWN</text>',
      sky("scs5", "#20305e", "#ff9a6a"));
  }

  window.SCENES = { scstop, sclyric, scbus, scmorro, sccorner };
})();
