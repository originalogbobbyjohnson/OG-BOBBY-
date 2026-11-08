/* Above the Law scenes (Regions tab: Los Angeles + SoCal; Pomona). CSS classes/ids prefixed atl- (the page's own anim-train is kept).
   1 Pomona North on the A Line (opened Sept 2025, shared with Metrolink): at-grade island platform, canopy, palms, a silver light-rail train sliding in.
   2 The Fox Theater on Garey Ave: the 1931 Art Deco tower and marquee, bulbs chasing (blade sign reads POMONA, no theater logo).
   3 The LA County Fair at Fairplex: the Ferris wheel turning over the midway, pennants waving.
   4 Holt Ave cruise ("Ballin'": Lorenzos on the Benzo, straight lowrider): a candy-red lowrider hopping under a neon motel sign.
   5 Garey Ave and Holt Ave: green signs, ABOVE THE LAW tagged on the stucco, the Fox tower and the San Gabriels behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes atlflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.atl-flk{animation:atlflick 2.2s infinite}.atl-flk2{animation-delay:.7s}' +
    '@keyframes atlchase{0%,100%{opacity:.25}50%{opacity:1}}.atl-bulb{animation:atlchase .9s ease-in-out infinite}.atl-b2{animation-delay:.3s}.atl-b3{animation-delay:.6s}' +
    '@keyframes atlspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.atl-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:atlspin 16s linear infinite}' +
    '@keyframes atlcab{from{transform:rotate(0)}to{transform:rotate(-360deg)}}.atl-cab{transform-box:fill-box;transform-origin:50% 0%;animation:atlcab 16s linear infinite}' +
    '@keyframes atlflag{0%,100%{transform:skewX(0)}50%{transform:skewX(8deg)}}.atl-flag{transform-box:fill-box;transform-origin:50% 0%;animation:atlflag 1.6s ease-in-out infinite}.atl-flag2{animation-delay:-.8s}' +
    '@keyframes atlhop{0%,60%,100%{transform:translateY(0)}20%{transform:translateY(-22px)}40%{transform:translateY(-6px)}}.atl-hop{animation:atlhop 1.8s ease-in-out infinite}' +
    '@keyframes atlcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.atl-car{animation:atlcar 7s linear infinite}' +
    '@keyframes atlsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.atl-palm{transform-box:fill-box;transform-origin:50% 100%;animation:atlsway 4s ease-in-out infinite}.atl-palm2{animation-delay:-2s}' +
    '@keyframes atlspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.atl-sp{animation:atlspray 1.4s ease-out infinite}.atl-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", RED = "#d62f2f", ABLUE = "#0072bc";
  const palm = (x, base, h, cls) => '<g class="atl-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + '" stroke="#3a2a1c" stroke-width="4" fill="none"/>' +
    [[-26, -6], [-18, 10], [0, -14], [18, 10], [26, -6]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 8) + ' ' + p[0] + ' ' + (p[1] + 6) + '" stroke="#1f3a22" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const mountains = (y, c, snow) => '<path d="M0 ' + y + 'L40 ' + (y - 26) + 'L80 ' + (y - 14) + 'L130 ' + (y - 44) + 'L170 ' + (y - 30) + 'L215 ' + (y - 58) + 'L260 ' + (y - 32) + 'L310 ' + (y - 46) + 'L360 ' + (y - 22) + 'L400 ' + (y - 30) + 'V' + (y + 20) + 'H0z" fill="' + c + '"/>' +
    (snow ? '<path d="M203 ' + (y - 50) + 'L215 ' + (y - 58) + 'L228 ' + (y - 49) + 'L220 ' + (y - 46) + 'L214 ' + (y - 50) + 'L208 ' + (y - 46) + 'z" fill="#f4f6fa"/>' : "");
  /* Fox Pomona style Art Deco tower (no logo; blade reads POMONA) */
  const tower = (x, base, s, col, blade) => {
    const w = 22 * s, h = 120 * s;
    let t = '<rect x="' + (x - w / 2) + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>' +
      '<rect x="' + (x - w / 2 - 6 * s) + '" y="' + (base - h * 0.55) + '" width="' + (w + 12 * s) + '" height="' + (h * 0.55) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - w / 2 + 4 * s) + '" y="' + (base - h - 16 * s) + '" width="' + (w - 8 * s) + '" height="' + (16 * s) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - 3 * s) + '" y="' + (base - h - 30 * s) + '" width="' + (6 * s) + '" height="' + (14 * s) + '" fill="' + col + '"/>';
    if (blade) t += '<rect x="' + (x - 8 * s) + '" y="' + (base - h + 8 * s) + '" width="' + (16 * s) + '" height="' + (h * 0.5) + '" rx="' + (3 * s) + '" fill="#1b1b22" stroke="' + GOLD + '" stroke-width="' + (1.5 * s) + '"/>' +
      'POMONA'.split("").map((ch, i) => '<text class="atl-flk" x="' + x + '" y="' + (base - h + 20 * s + i * 9.4 * s) + '" text-anchor="middle" ' + font + ' font-size="' + (9 * s) + '" fill="#ff5a4e">' + ch + '</text>').join("");
    return t;
  };

  /* 1. Pomona North, A Line */
  function atlstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="126" width="34" height="22" rx="3" fill="#1d2630"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="116" width="340" height="70" rx="10" fill="#d9dde1" stroke="#7b838b" stroke-width="2"/>' +
      '<rect x="22" y="122" width="340" height="30" fill="#2b3138"/>' + win +
      '<rect x="22" y="160" width="340" height="5" fill="' + ABLUE + '"/><rect x="190" y="116" width="6" height="70" fill="#9aa2aa"/>' +
      '<rect x="342" y="120" width="18" height="62" rx="5" fill="#b9c0c6"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="286" y="126" width="48" height="12" rx="2" fill="#111"/><text x="310" y="135" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">LONG BEACH</text>' +
      '<path d="M120 116l20 -20h30l20 20" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#atls1)"/>' + mountains(96, "#6f6a86", true) + mountains(108, "#4f4b63", false) +
      palm(28, 118, 70) + palm(372, 118, 76, "atl-palm2") +
      '<path d="M0 96h400" stroke="#3a3a3a" stroke-width="1.5"/>' + [40, 150, 260, 370].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="56" fill="#3a3a3a"/>').join("") +
      '<path d="M0 44h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="100" width="400" height="12" fill="#9a8d7a"/>' +
      train +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#b9ad9b"/><path d="M0 228h400" stroke="#a89c8a" stroke-width="2"/>' +
      '<rect x="40" y="70" width="320" height="8" fill="#e9e3d6"/><rect x="40" y="78" width="320" height="3" fill="#b8b0a2"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="80" width="6" height="36" fill="#8f877a"/>').join("") +
      '<g class="atl-flk"><rect x="90" y="81" width="40" height="3" fill="#fff3c4"/></g><g class="atl-flk atl-flk2"><rect x="270" y="81" width="40" height="3" fill="#fff3c4"/></g>' +
      '<rect x="96" y="204" width="208" height="38" rx="4" fill="#1f1f22"/><circle cx="118" cy="223" r="12" fill="' + ABLUE + '"/><text x="118" y="228.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">A</text>' +
      '<text x="138" y="229" ' + font + ' font-size="17" fill="#fff">Pomona North</text>',
      sky("atls1", "#f6b46a", "#f7dfb6"));
  }

  /* 2. Fox Theater, Garey Ave */
  function atlfox() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="atl-bulb atl-b' + (1 + i % 3) + '" cx="' + (96 + i * 9.6) + '" cy="150" r="2.4" fill="#ffe7a0"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="atl-bulb atl-b' + (1 + (i + 1) % 3) + '" cx="' + (96 + i * 9.6) + '" cy="184" r="2.4" fill="#ffe7a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#atls2)"/>' +
      '<g fill="#2a2440"><rect x="0" y="120" width="60" height="80"/><rect x="340" y="112" width="60" height="88"/></g>' +
      '<rect x="60" y="96" width="280" height="110" fill="#efe4cc"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (72 + i * 38) + '" y="100" width="6" height="40" fill="#d8c9a8"/>').join("") +
      '<g transform="translate(0,0)">' + tower(200, 140, 1, "#efe4cc", true) + '</g>' +
      
      '<rect x="88" y="142" width="224" height="50" fill="#1d1a2a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="164" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">ABOVE THE LAW</text>' +
      '<text x="200" y="179" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TONIGHT · GAREY AVE</text>' +
      '<rect x="110" y="192" width="180" height="16" fill="#3a2f22"/>' + [120, 160, 200, 240].map(x => '<rect x="' + x + '" y="194" width="30" height="14" fill="#7a5a2c"/>').join("") +
      '<rect x="0" y="208" width="400" height="16" fill="#c9c0ae"/><rect x="0" y="224" width="400" height="36" fill="#3f3f44"/><path d="M0 244h400" stroke="#e6e6e6" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="atl-car"><rect x="0" y="232" width="62" height="14" rx="5" fill="#1d1d1d"/><rect x="14" y="224" width="32" height="10" rx="3" fill="#1d1d1d"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#d9d9d9"/></g>',
      sky("atls2", "#1a1638", "#7b4a7a"));
  }

  /* 3. LA County Fair, Fairplex */
  function atlfair() {
    const cx = 250, cy = 108, R = 74;
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + cx + ' ' + cy + 'L' + (cx + R * Math.cos(a)).toFixed(1) + ' ' + (cy + R * Math.sin(a)).toFixed(1) + '" stroke="#e8e2d0" stroke-width="2"/>'; }).join("");
    const lights = Array.from({ length: 24 }, (_, i) => { const a = i * Math.PI / 12; return '<circle class="atl-bulb atl-b' + (1 + i % 3) + '" cx="' + (cx + R * Math.cos(a)).toFixed(1) + '" cy="' + (cy + R * Math.sin(a)).toFixed(1) + '" r="2.6" fill="#ffd36e"/>'; }).join("");
    const cabs = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      return '<g transform="translate(' + x.toFixed(1) + ',' + y.toFixed(1) + ')"><g class="atl-cab"><path d="M0 0v6" stroke="#ccc" stroke-width="1.5"/><rect x="-7" y="6" width="14" height="11" rx="3" fill="' + ["#d62f2f", "#f2c14e", "#2fa3d6"][i % 3] + '"/></g></g>'; }).join("");
    const flags = Array.from({ length: 12 }, (_, i) => '<path class="atl-flag ' + (i % 2 ? "atl-flag2" : "") + '" d="M' + (8 + i * 16) + ' 60l7 12l7 -12z" fill="' + ["#d62f2f", "#f2c14e", "#2fa3d6", "#3fae5a"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#atls3)"/>' + mountains(150, "#8d86a6", true) +
      '<path d="M0 58q100 14 200 0" stroke="#333" stroke-width="1.2" fill="none"/>' + flags +
      '<path d="M' + (cx - 40) + ' 214L' + cx + ' ' + cy + 'L' + (cx + 40) + ' 214" stroke="#cfc8b6" stroke-width="5" fill="none"/>' +
      '<g class="atl-wheel"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#e8e2d0" stroke-width="3"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R - 12) + '" fill="none" stroke="#e8e2d0" stroke-width="1.5"/>' + spokes + lights + '</g>' +
      '<g class="atl-wheel">' + cabs + '</g>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="7" fill="' + GOLD + '"/>' +
      '<g><rect x="20" y="150" width="110" height="64" fill="#e9dfc8"/><path d="M14 150l61 -26 61 26z" fill="#d62f2f"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (28 + i * 21) + '" y="166" width="12" height="48" fill="#c9bb9a"/>').join("") +
      '<text x="75" y="146" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">FAIRPLEX</text></g>' +
      '<rect x="0" y="214" width="400" height="46" fill="#c7a676"/><path d="M0 232h400" stroke="#b39360" stroke-width="2"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#3a2a14">THE FAIR · POMONA</text>',
      sky("atls3", "#5fb4e8", "#f6dcae"));
  }

  /* 4. Holt Ave lowrider */
  function atlholt() {
    const ride = '<g class="atl-hop"><path d="M62 190l10 -14h70l22 -18h82l22 18h60l10 14v14H62z" fill="#b3122a" stroke="#4a0610" stroke-width="2"/>' +
      '<path d="M170 160l-16 16h96l-16 -16z" fill="#2a2f3a"/><path d="M66 186h270" stroke="#f0d9a0" stroke-width="2"/><rect x="58" y="196" width="10" height="5" fill="#d8d8d8"/><rect x="334" y="196" width="10" height="5" fill="#d8d8d8"/>' +
      '<circle cx="112" cy="206" r="14" fill="#141414"/><circle cx="112" cy="206" r="8" fill="' + GOLD + '"/><circle cx="290" cy="206" r="14" fill="#141414"/><circle cx="290" cy="206" r="8" fill="' + GOLD + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M112 206l' + (8 * Math.cos(i)).toFixed(1) + ' ' + (8 * Math.sin(i)).toFixed(1) + 'M290 206l' + (8 * Math.cos(i)).toFixed(1) + ' ' + (8 * Math.sin(i)).toFixed(1) + '" stroke="#8a6a1e" stroke-width="1"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#atls4)"/>' + mountains(130, "#3c3456", false) +
      palm(40, 200, 120) + palm(350, 200, 110, "atl-palm2") +
      '<rect x="270" y="60" width="8" height="140" fill="#2a2a2a"/><rect x="236" y="40" width="96" height="50" rx="6" fill="#1b1b22" stroke="#2fa3d6" stroke-width="2"/>' +
      '<text class="atl-flk" x="284" y="62" text-anchor="middle" ' + font + ' font-size="13" fill="#ff5a4e">MOTEL</text><text class="atl-flk atl-flk2" x="284" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="#7fe3ff">HOLT AVE</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a40"/><path d="M0 236h400" stroke="#e2c84a" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<ellipse cx="200" cy="222" rx="140" ry="5" fill="#000" opacity=".35"/>' + ride,
      sky("atls4", "#241a3e", "#e2735a"));
  }

  /* 5. Garey Ave and Holt Ave */
  function atlcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#atls5)"/>' + mountains(110, "#5a5478", true) +
      '<g opacity=".9">' + tower(110, 128, 0.62, "#e9dcc0", true) + '</g>' +
      '<rect x="0" y="122" width="400" height="102" fill="#d8c3a0"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (136 + i * 16) + 'h400" stroke="#c9b28c" stroke-width="1"/>').join("") +
      tag("ABOVE THE LAW", 14, 184, 29, GOLD, -6) + tag("BLACK MAFIA", 40, 214, 18, "#ff6b5a", -4) + tag("BIG HUTCH", 196, 212, 17, "#7fd1ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524e"/><rect x="0" y="222" width="400" height="4" fill="#ece6da"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(250, 94, 140, "Garey Ave") + sign(266, 120, 112, "Holt Ave") +
      '<g class="atl-sp"><circle cx="232" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="atl-sp atl-sp2"><circle cx="238" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("atls5", "#f19a5a", "#f7d9a6"));
  }

  window.SCENES = { atlstation: atlstation, atlfox: atlfox, atlfair: atlfair, atlholt: atlholt, atlcorner: atlcorner };
})();
