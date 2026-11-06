/* mightymightybosstones scenes (Regions tab: Boston + New England; Norwood, MA, where Dicky Barrett went to junior high and high school). CSS classes and ids prefixed mb- (the page's own anim-train is kept).
   1 Norwood Central on the Commuter Rail Franklin Line: the open low platform with its little shelter, the black sign with the purple CR badge, a silver coach with the purple band sliding in behind the locomotive.
   2 Bunker Hill Community College in Charlestown, where Dicky Barrett met drummer Joe Sirois: the long concrete-and-brick campus building, the college name on the front, a flag waving, students crossing.
   3 The Curley House on the Jamaicaway ("The Rascal King" is about Mayor James Michael Curley): the red-brick Georgian house with white trim and portico, the shutters with shamrock cut-outs, a car rolling by.
   4 Hampton Beach, New Hampshire, a stop on their 2000s summer tours: the long white Casino Ballroom on the boardwalk, the marquee, waves rolling in, gulls.
   5 Washington St and Nahatan St in Norwood Center: green signs, BOSSTONES tagged on the brick, the gray granite Gothic carillon tower of the Memorial Municipal Building behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mb-flag{transform-box:fill-box;transform-origin:0 50%;animation:mbflag 1.4s ease-in-out infinite}' +
    '@keyframes mbwalk{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.mb-walk{animation:mbwalk 11s linear infinite}.mb-w2{animation-delay:-4s;animation-duration:13s}.mb-w3{animation-delay:-8s}' +
    '@keyframes mbcar{from{transform:translateX(460px)}to{transform:translateX(-160px)}}.mb-car{animation:mbcar 6s linear infinite}' +
    '@keyframes mbwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.mb-wave{animation:mbwave 3s linear infinite}.mb-wv2{animation-duration:4.2s}' +
    '@keyframes mbgull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-30px)}}.mb-gull{animation:mbgull 10s linear infinite}.mb-g2{animation-delay:-5s;animation-duration:12s}' +
    '@keyframes mbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:1}}.mb-flk{animation:mbflick 2.2s infinite}' +
    '@keyframes mbbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mb-bell{transform-box:fill-box;transform-origin:50% 0;animation:mbbell 1.6s ease-in-out infinite}' +
    '@keyframes mbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-60px);opacity:0}}.mb-note{animation:mbnote 2.8s ease-out infinite}.mb-n2{animation-delay:-1.4s}' +
    '@keyframes mbleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-30px,280px) rotate(300deg)}}.mb-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:mbleaf 7s linear infinite}.mb-l2{animation-delay:-3s}' +
    '@keyframes mbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mb-sp{animation:mbspray 1.4s ease-out infinite}.mb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (cls, x, c) => '<g class="mb-walk ' + cls + '"><circle cx="' + x + '" cy="186" r="6" fill="#222"/><rect x="' + (x - 6) + '" y="192" width="12" height="20" rx="4" fill="' + c + '"/><path d="M' + (x - 3) + ' 212v12M' + (x + 3) + ' 212v12" stroke="#222" stroke-width="3"/></g>';
  const PURPLE = "#80276c", YEL = "#f2d03b", RED = "#d7263d", BLUE = "#2e86ab", CREAM = "#f4ead8";

  /* 1. Norwood Central, Franklin Line */
  function mbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 40) + '" y="120" width="28" height="18" rx="2" fill="#2a3440"/>').join("");
    const train = '<g class="anim-train">' +
      '<rect x="20" y="104" width="100" height="84" rx="6" fill="#3a3f45"/><rect x="26" y="112" width="40" height="24" rx="3" fill="#1e2a33"/><rect x="20" y="150" width="100" height="10" fill="' + PURPLE + '"/><rect x="20" y="162" width="100" height="5" fill="' + YEL + '"/>' +
      '<circle cx="34" cy="176" r="4" fill="#fff6c2"/><circle cx="104" cy="176" r="4" fill="#fff6c2"/>' +
      '<rect x="122" y="108" width="258" height="80" rx="4" fill="#cfd4d8" stroke="#7d858c" stroke-width="2"/>' + win +
      '<rect x="122" y="150" width="258" height="10" fill="' + PURPLE + '"/><rect x="122" y="162" width="258" height="4" fill="' + PURPLE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs1)"/>' +
      '<circle cx="40" cy="80" r="26" fill="#3f6b3a"/><circle cx="360" cy="76" r="30" fill="#3f6b3a"/><rect x="140" y="62" width="120" height="40" fill="#8a4d33"/><path d="M134 64l66 -24 66 24z" fill="#4a4a52"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (152 + i * 28) + '" y="74" width="14" height="18" fill="#f3dfb0" opacity=".8"/>').join("") +
      '<rect x="0" y="100" width="400" height="92" fill="#7a7468"/>' +
      train +
      '<path d="M0 190h400" stroke="#4a3a2a" stroke-width="4"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#9c968c"/><rect x="0" y="192" width="400" height="5" fill="#f2c200"/>' +
      '<rect x="292" y="202" width="96" height="6" fill="#555"/><rect x="296" y="206" width="4" height="40" fill="#555"/><rect x="380" y="206" width="4" height="40" fill="#555"/><path d="M286 202l50 -12 58 12z" fill="#2f3a42"/>' +
      '<rect x="40" y="200" width="6" height="56" fill="#333"/><rect x="14" y="200" width="196" height="30" rx="3" fill="#111"/>' +
      '<text x="26" y="221" ' + font + ' font-size="15" fill="#fff">Norwood Central</text>' + badge(168, 215, "CR", PURPLE) +
      '<text x="250" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#222">FRANKLIN LINE · NORWOOD</text>',
      sky("mbs1", "#9cc6e8", "#f6e6c4"));
  }

  /* 2. Bunker Hill Community College, Charlestown */
  function mbbhcc() {
    return svg(
      '<rect width="400" height="260" fill="url(#mbs2)"/>' +
      '<rect x="0" y="118" width="400" height="10" fill="#8a8f96"/>' +
      /* long concrete and brick building */
      '<rect x="20" y="70" width="360" height="110" fill="#c8c2b6"/><rect x="20" y="70" width="360" height="14" fill="#a9a296"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (30 + i * 44) + '" y="94" width="34" height="30" fill="#33414d"/><rect x="' + (30 + i * 44) + '" y="132" width="34" height="30" fill="#33414d"/>').join("") +
      '<rect x="20" y="168" width="360" height="12" fill="#8a4d33"/>' +
      '<rect x="60" y="40" width="280" height="24" rx="2" fill="#f4ead8"/><text x="200" y="57" text-anchor="middle" ' + font + ' font-size="12" fill="#1f3b5a">BUNKER HILL COMMUNITY COLLEGE</text>' +
      /* flag */
      '<rect x="372" y="10" width="3" height="60" fill="#999"/><g class="mb-flag"><rect x="375" y="12" width="22" height="14" fill="' + RED + '"/><rect x="375" y="16" width="22" height="3" fill="#fff"/><rect x="375" y="22" width="22" height="3" fill="#fff"/><rect x="375" y="12" width="9" height="7" fill="#1f3b8a"/></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#a8a296"/><rect x="0" y="178" width="400" height="4" fill="#e8e4dc"/>' +
      person("", 0, RED) + person("mb-w2", 0, BLUE) + person("mb-w3", 0, YEL) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#222">CHARLESTOWN · WHERE DICKY MET JOE SIROIS</text>',
      sky("mbs2", "#8fb8de", "#e8eef2"));
  }

  /* 3. The Curley House, Jamaicaway: shamrock shutters */
  function mbcurley() {
    const shutterWin = (x, y) => '<rect x="' + (x - 12) + '" y="' + y + '" width="10" height="30" fill="#1f4a2a"/><path d="M' + (x - 7) + ' ' + (y + 12) + 'm-3 0a2 2 0 1 1 3 -2a2 2 0 1 1 3 2a2 2 0 1 1 -3 3a2 2 0 1 1 -3 -3z" fill="#e8f0d8"/>' +
      '<rect x="' + x + '" y="' + y + '" width="20" height="30" fill="#f6f1e2" stroke="#fff" stroke-width="2"/><path d="M' + (x + 10) + ' ' + y + 'v30M' + x + ' ' + (y + 15) + 'h20" stroke="#d8d0be"/>' +
      '<rect x="' + (x + 22) + '" y="' + y + '" width="10" height="30" fill="#1f4a2a"/><path d="M' + (x + 27) + ' ' + (y + 12) + 'm-3 0a2 2 0 1 1 3 -2a2 2 0 1 1 3 2a2 2 0 1 1 -3 3a2 2 0 1 1 -3 -3z" fill="#e8f0d8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs3)"/>' +
      '<circle cx="34" cy="100" r="34" fill="#3f6b3a"/><circle cx="370" cy="96" r="36" fill="#3f6b3a"/>' +
      '<path d="M80 70l120 -40 120 40z" fill="#3a3a40"/><rect x="186" y="24" width="10" height="20" fill="#7a3a2a"/><rect x="226" y="34" width="10" height="16" fill="#7a3a2a"/>' +
      '<rect x="84" y="70" width="232" height="120" fill="#a24a34"/><rect x="84" y="68" width="232" height="6" fill="#f6f1e2"/>' +
      shutterWin(112, 84) + shutterWin(268, 84) + shutterWin(112, 140) + shutterWin(268, 140) + shutterWin(190, 84) +
      /* portico */
      '<path d="M170 136l30 -14 30 14z" fill="#f6f1e2"/><rect x="172" y="136" width="56" height="6" fill="#f6f1e2"/><rect x="176" y="142" width="6" height="48" fill="#f6f1e2"/><rect x="218" y="142" width="6" height="48" fill="#f6f1e2"/>' +
      '<rect x="190" y="148" width="20" height="42" fill="#1f4a2a"/><circle cx="206" cy="170" r="1.6" fill="' + YEL + '"/>' +
      '<rect x="0" y="190" width="400" height="24" fill="#4f7a3a"/><rect x="0" y="214" width="400" height="46" fill="#55565a"/><path d="M0 237h400" stroke="#e8e0a0" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="mb-car"><rect x="0" y="216" width="70" height="18" rx="6" fill="' + BLUE + '"/><rect x="12" y="206" width="40" height="14" rx="5" fill="#1f5a7a"/><circle cx="16" cy="236" r="6" fill="#222"/><circle cx="54" cy="236" r="6" fill="#222"/></g>' +
      '<path class="mb-leaf" d="M60 0q6 -6 12 0q-6 6 -12 0z" fill="#d9822b"/><path class="mb-leaf mb-l2" d="M330 0q6 -6 12 0q-6 6 -12 0z" fill="#c0392b"/>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">THE JAMAICAWAY · THE RASCAL KING\'S HOUSE</text>',
      sky("mbs3", "#9cc6e8", "#f2e2c0"));
  }

  /* 4. Hampton Beach, NH: Casino Ballroom on the boardwalk */
  function mbhampton() {
    const waves = (y, c, cls) => '<g class="mb-wave ' + cls + '"><path d="M0 ' + y + Array.from({ length: 12 }, () => 'q10 -6 20 0t20 0').join("") + '" stroke="' + c + '" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs4)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffd27a"/>' +
      /* Casino Ballroom: long white building with green trim */
      '<rect x="40" y="70" width="320" height="80" fill="#f6f4ee"/><rect x="40" y="62" width="320" height="10" fill="#2f6b4a"/><path d="M160 62l40 -22 40 22z" fill="#f6f4ee" stroke="#2f6b4a" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="96" width="26" height="30" rx="12" fill="#3a5a6a"/>').join("") +
      '<g class="mb-flk"><rect x="120" y="74" width="160" height="18" fill="#111"/><text x="200" y="87" text-anchor="middle" ' + font + ' font-size="11" fill="' + YEL + '">CASINO BALLROOM</text></g>' +
      '<rect x="148" y="128" width="104" height="18" fill="' + CREAM + '"/><text x="200" y="141" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '">TONIGHT · BOSSTONES</text>' +
      '<g class="mb-note"><text x="300" y="120" font-size="16" fill="' + YEL + '">&#9834;</text></g><g class="mb-note mb-n2"><text x="90" y="120" font-size="16" fill="' + BLUE + '">&#9835;</text></g>' +
      /* boardwalk and beach */
      '<rect x="0" y="150" width="400" height="14" fill="#b08a5a"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 150v14" stroke="#8a6a42"/>').join("") +
      '<rect x="0" y="164" width="400" height="34" fill="#e8d4a2"/><rect x="0" y="198" width="400" height="62" fill="#2e7fa8"/>' +
      waves(208, "#bfe6f2", "") + waves(226, "#9fd4e8", "mb-wv2") + waves(244, "#bfe6f2", "") +
      '<g class="mb-gull"><path d="M20 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="mb-gull mb-g2"><path d="M20 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>',
      sky("mbs4", "#6fb2e0", "#f6e2b8"));
  }

  /* 5. Washington St and Nahatan St, Norwood Center: the carillon tower behind */
  function mbcorner() {
    const tower = '<g><rect x="160" y="20" width="56" height="110" fill="#8e8a82"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (162 + (i % 3) * 18) + '" y="' + (24 + Math.floor(i / 3) * 24) + '" width="16" height="10" fill="' + ["#a39c90", "#7d7a72", "#9a8a76"][i % 3] + '"/>').join("") +
      '<rect x="172" y="34" width="10" height="28" rx="5" fill="#2b2f3a"/><rect x="194" y="34" width="10" height="28" rx="5" fill="#2b2f3a"/>' +
      '<g class="mb-bell"><path d="M183 40h10l2 10h-14z" fill="#c9a24a"/></g>' +
      '<path d="M156 20l6 -18 6 18zM208 20l6 -18 6 18z" fill="#8e8a82"/><path d="M174 20l14 -14 14 14z" fill="#8e8a82"/>' +
      '<rect x="216" y="80" width="90" height="50" fill="#8e8a82"/><path d="M216 80l45 -16 45 16z" fill="#6e6a62"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mbs5)"/>' +
      '<circle cx="70" cy="100" r="30" fill="#2f5a3a"/><circle cx="330" cy="96" r="30" fill="#2f5a3a"/>' + tower +
      '<rect x="0" y="118" width="400" height="106" fill="#7a3f2c"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("BOSSTONES", 24, 186, 38, YEL, -6) + tag("SKA-CORE", 26, 214, 18, RED, -3) + tag("HOMETOWN", 196, 212, 17, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 132, "Washington St") + sign(282, 124, 104, "Nahatan St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mb-sp"><circle cx="246" cy="166" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="mb-sp mb-sp2"><circle cx="252" cy="160" r="2" fill="' + YEL + '" opacity=".6"/></g>',
      sky("mbs5", "#23284e", "#d88a5a"));
  }

  window.SCENES = { mbstation: mbstation, mbbhcc: mbbhcc, mbcurley: mbcurley, mbhampton: mbhampton, mbcorner: mbcorner };
})();
