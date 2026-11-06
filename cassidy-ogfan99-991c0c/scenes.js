/* cassidy scenes (Regions tab: Philadelphia; North Philly). CSS classes prefixed cs- (the page's own anim-train is kept).
   1 Susquehanna-Dauphin on the Broad Street Line, under North Broad.
   2 The Liacouras Center on North Broad at Temple: the hometown arena, glass front, marquee chasing.
   3 The Strawberry Mansion Bridge: the green steel arch over the Schuylkill, a car with the doors up rolling across ("the doors go up in the air").
   4 The Met Philadelphia on North Broad: the cream terracotta opera house front, tall arched windows, the marquee lit for a hometown show.
   5 N Broad St and W Susquehanna Ave: green signs, CASSIDY tagged on the wall, Temple's Bell Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes csflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.cs-flk{animation:csflick 2.4s infinite}.cs-flk2{animation-delay:.8s}' +
    '@keyframes cschase{0%,100%{opacity:.25}50%{opacity:1}}.cs-ch{animation:cschase 1s ease-in-out infinite}.cs-ch2{animation-delay:-.33s}.cs-ch3{animation-delay:-.66s}' +
    '@keyframes cssweep{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.cs-sw{transform-box:fill-box;transform-origin:50% 100%;animation:cssweep 3.8s ease-in-out infinite}.cs-sw2{animation-delay:-1.9s}' +
    '@keyframes cscar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.cs-car{animation:cscar 8s linear infinite}' +
    '@keyframes csdoor{0%,100%{transform:rotate(0)}50%{transform:rotate(-38deg)}}.cs-door{transform-box:fill-box;transform-origin:0% 100%;animation:csdoor 2s ease-in-out infinite}' +
    '@keyframes csripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.cs-rip{animation:csripple 3s ease-in-out infinite}.cs-rip2{animation-delay:-1.5s}' +
    '@keyframes csbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.cs-bob{animation:csbob .9s ease-in-out infinite}.cs-bob2{animation-delay:-.45s}' +
    '@keyframes csspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cs-sp{animation:csspray 1.4s ease-out infinite}.cs-sp2{animation-delay:.45s}' +
    '@keyframes csglow{0%,100%{opacity:.5}50%{opacity:1}}.cs-glow{animation:csglow 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cs-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e63b2e", GOLD = "#f4c542", BLUE = "#4fb3ff", BSL = "#f58220", CHERRY = "#9d2235";
  const crowd = (x0, n, y) => Array.from({ length: n }, (_, i) => '<g class="cs-bob' + (i % 2 ? " cs-bob2" : "") + '"><rect x="' + (x0 + i * 20) + '" y="' + (y + 6) + '" width="12" height="20" rx="5" fill="' + [RED, "#2b2b33", GOLD, BLUE, "#e8e8e8"][i % 5] + '"/><circle cx="' + (x0 + 6 + i * 20) + '" cy="' + y + '" r="6" fill="' + ["#5a3a28", "#8a5a3a", "#3e2a1e"][i % 3] + '"/></g>').join("");

  /* 1. Susquehanna-Dauphin on the Broad Street Line: under North Broad, cream tile walls, the orange band, the black sign with the BSL bullet, the orange-striped train sliding in */
  function csstation() {
    const tr = '<g class="anim-train"><rect x="24" y="104" width="326" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 43) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="150" width="326" height="5" fill="' + BSL + '"/><rect x="24" y="158" width="326" height="3" fill="' + BSL + '"/>' +
      '<rect x="330" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><circle cx="342" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e9dfc6"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v68" stroke="#d8cdb2" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (22 + i * 11) + 'h400" stroke="#d8cdb2" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/><rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/>' +
      '<rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8e8a84"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#7a4a2e"/><rect x="' + (x - 9) + '" y="16" width="18" height="6" fill="#5a341e"/>').join("") +
      '<rect x="60" y="30" width="280" height="32" rx="3" fill="#111"/><text x="74" y="52" ' + font + ' font-size="16" fill="#fff">Susquehanna-Dauphin</text>' + badge(272, 46, "BSL", BSL) +
      '<rect class="cs-flk" x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".55"/><rect class="cs-flk cs-flk2" x="20" y="212" width="80" height="6" rx="3" fill="#fff6c2" opacity=".45"/>',
      "");
  }

  /* 2. The Liacouras Center on North Broad: the tall glass front, beige precast wings, the cherry trim, the curved roof, marquee lights chasing, a line of fans at the doors */
  function csliacouras() {
    return svg(
      '<rect width="400" height="260" fill="url(#cs-s2)"/>' + stars(10) +
      '<rect x="0" y="120" width="56" height="90" fill="#6d4a3a"/><rect x="344" y="108" width="56" height="102" fill="#5e4034"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (8 + (i % 2) * 24) + '" y="' + (130 + Math.floor(i / 2) * 26) + '" width="14" height="14" fill="#ffd98a" opacity=".6"/>').join("") +
      '<path d="M60 92q140 -40 280 0v118H60z" fill="#d9ccb4"/><path d="M60 92q140 -40 280 0" fill="none" stroke="' + CHERRY + '" stroke-width="6"/>' +
      '<rect x="60" y="96" width="70" height="114" fill="#c9b99c"/><rect x="270" y="96" width="70" height="114" fill="#c9b99c"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M60 ' + (110 + i * 20) + 'h70M270 ' + (110 + i * 20) + 'h70" stroke="#b5a586" stroke-width="2"/>').join("") +
      '<path d="M130 80q70 -20 140 0v130H130z" fill="#2a4a66"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (140 + i * 20) + ' ' + (76 - (i < 4 ? i : 6 - i) * 2) + 'V210" stroke="#9fb8cc" stroke-width="1.5"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M130 ' + (100 + i * 18) + 'h140" stroke="#9fb8cc" stroke-width="1.2"/>').join("") +
      '<rect class="cs-glow" x="132" y="96" width="136" height="60" fill="#ffe7a8" opacity=".35"/>' +
      '<rect x="138" y="160" width="124" height="26" rx="3" fill="#141414"/><text x="200" y="177" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">LIACOURAS CENTER</text>' +
      Array.from({ length: 13 }, (_, i) => '<circle class="cs-ch' + (i % 3 === 1 ? " cs-ch2" : i % 3 === 2 ? " cs-ch3" : "") + '" cx="' + (150 + i * 8.3) + '" cy="190" r="2" fill="#fff2b0"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5651"/><rect x="0" y="208" width="400" height="4" fill="#bdb6aa"/>' + crowd(60, 14, 222),
      sky("cs-s2", "#141a3a", "#6a3a5a"));
  }

  /* 3. The Strawberry Mansion Bridge: the green steel arch over the Schuylkill, trees on both banks, the river rippling, a car with the doors up crossing */
  function csbridge() {
    const car = '<g class="cs-car"><rect x="0" y="122" width="70" height="14" rx="6" fill="' + RED + '"/><path d="M14 122l10 -9h22l10 9z" fill="' + RED + '"/>' +
      '<g class="cs-door"><path d="M28 122l-2 -10h18v10z" fill="#c42a20"/></g><circle cx="14" cy="137" r="5" fill="#111"/><circle cx="56" cy="137" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cs-s3)"/>' +
      '<path d="M0 150q40 -30 80 -10q30 -24 70 0v20H0z" fill="#3f7a3a"/><path d="M250 150q40 -30 80 -12q36 -20 70 2v20H250z" fill="#356c32"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#4a7d92"/>' +
      '<g class="cs-rip"><path d="M20 190h60M150 206h80M290 196h70M60 230h90M240 238h100" stroke="#a9d3e2" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="cs-rip cs-rip2"><path d="M100 220h50M300 222h60M10 248h50" stroke="#cfe8f0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/></g>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="138" width="18" height="70" fill="#9a958c"/><rect x="' + (x - 11) + '" y="204" width="22" height="8" fill="#7d786f"/>').join("") +
      '<path d="M70 140Q135 60 200 140Q265 60 330 140" fill="none" stroke="#2f7d4a" stroke-width="8"/>' +
      '<path d="M70 140Q135 74 200 140Q265 74 330 140" fill="none" stroke="#2f7d4a" stroke-width="3"/>' +
      Array.from({ length: 13 }, (_, i) => { const x = 80 + i * 20; if (x > 196 && x < 204) return ""; const local = x < 200 ? (x - 70) / 130 : (x - 200) / 130; const y = 140 - 160 * local * (1 - local); return '<path d="M' + x + ' ' + y.toFixed(1) + 'V138" stroke="#2f7d4a" stroke-width="2.5"/>'; }).join("") +
      '<rect x="40" y="136" width="320" height="6" fill="#3a3a3a"/><rect x="40" y="134" width="320" height="2" fill="#2f7d4a"/>' + car +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="12" fill="#1c3a2a" opacity=".8">STRAWBERRY MANSION BRIDGE</text>',
      sky("cs-s3", "#9fd4f4", "#f6e6c8"));
  }

  /* 4. The Met Philadelphia on North Broad: the cream terracotta front, the tall arched windows, the red marquee chasing, spotlights sweeping the night */
  function csmet() {
    return svg(
      '<rect width="400" height="260" fill="url(#cs-s4)"/>' + stars(16) +
      '<g opacity=".6"><path class="cs-sw" d="M110 210L90 40h40z" fill="#fff4c4" opacity=".25"/><path class="cs-sw cs-sw2" d="M290 210L270 40h40z" fill="#fff4c4" opacity=".25"/></g>' +
      '<rect x="40" y="70" width="320" height="140" fill="#e6d8bb"/><rect x="40" y="62" width="320" height="12" fill="#d4c29e"/><rect x="34" y="56" width="332" height="8" fill="#c8b48c"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (66 + i * 60) + ' 168V104a20 20 0 0 1 40 0V168z" fill="#2c3a4a"/><path d="M' + (86 + i * 60) + ' 84V168M' + (66 + i * 60) + ' 124h40" stroke="#c9b48a" stroke-width="2"/>' +
        '<path class="cs-glow" d="M' + (70 + i * 60) + ' 166V106a16 16 0 0 1 32 0V166z" fill="#ffd98a" opacity=".35"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 60) + '" y="78" width="8" height="132" fill="#d8c6a2"/>').join("") +
      '<rect x="100" y="172" width="200" height="24" fill="' + RED + '"/><text x="200" y="189" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">THE MET</text>' +
      Array.from({ length: 24 }, (_, i) => '<circle class="cs-ch' + (i % 3 === 1 ? " cs-ch2" : i % 3 === 2 ? " cs-ch3" : "") + '" cx="' + (104 + i * 8.3) + '" cy="199" r="1.8" fill="#fff2b0"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#4f4c48"/><rect x="0" y="208" width="400" height="4" fill="#bdb6aa"/>' + crowd(110, 10, 224),
      sky("cs-s4", "#0e1030", "#3a2448"));
  }

  /* 5. N Broad St and W Susquehanna Ave: green signs, CASSIDY tagged on the rowhouse wall, Temple's Bell Tower lit up behind */
  function cscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cs-s5)"/>' + stars(14) +
      '<g fill="#2b2a3e"><rect x="0" y="80" width="70" height="60"/><rect x="300" y="70" width="100" height="70"/></g>' +
      '<rect x="180" y="14" width="12" height="126" fill="#e4e0d8"/><rect x="208" y="14" width="12" height="126" fill="#e4e0d8"/><rect x="178" y="10" width="44" height="8" fill="#d4cfc4"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="192" y="' + (26 + i * 16) + '" width="16" height="3" fill="#d4cfc4"/>').join("") +
      '<rect class="cs-glow" x="192" y="18" width="16" height="8" fill="#fff2b0" opacity=".7"/>' +
      '<rect x="0" y="136" width="400" height="88" fill="#7a3f2e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#6a3426" stroke-width="1"/>').join("") +
      tag("CASSIDY", 22, 194, 50, RED, -6) + tag("LARSINY", 236, 188, 26, GOLD, -4) + tag("THE PROBLEM", 28, 218, 18, "#fff", -3) + tag("MAYHEM", 196, 216, 18, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="cs-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GOLD + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="346" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(300, 100, 96, "N Broad St") + sign(272, 126, 126, "W Susquehanna Av") +
      '<g class="cs-sp"><circle cx="196" cy="166" r="3" fill="' + RED + '" opacity=".7"/></g><g class="cs-sp cs-sp2"><circle cx="202" cy="160" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("cs-s5", "#160e2a", "#c4483a"));
  }

  window.SCENES = { csstation: csstation, csliacouras: csliacouras, csbridge: csbridge, csmet: csmet, cscorner: cscorner };
})();
