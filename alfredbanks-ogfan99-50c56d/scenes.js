/* alfredbanks scenes (Regions tab: New Orleans; Uptown, where Alfred Banks grew up). CSS classes and ids prefixed ab- (the page's own anim-train is kept).
   1 St. Charles Av / Napoleon Av on the St. Charles streetcar (line 12): the olive-green car rolls in on the neutral ground under the live oaks.
   2 The Tree of Life in Audubon Park: the giant live oak with Spanish moss swaying, an egret gliding over the lagoon.
   3 A Magazine Street sneaker boutique ("Got These?"): a wall of kicks and stacked boxes, a lid popping open.
   4 An Uptown music hall at Napoleon Av and Tchoupitoulas (he plays live with a sax, Sax Kix Ave): yellow stucco, LIVE TONIGHT, notes floating out.
   5 St Charles Av and Calhoun St, by Loyola (where he started rapping): green signs, BANKS tagged on the brick, Holy Name of Jesus's Gothic spire behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes abflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ab-flk{animation:abflick 2.2s infinite}.ab-flk2{animation-delay:.7s}' +
    '@keyframes abmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.ab-moss{transform-box:fill-box;transform-origin:50% 0%;animation:abmoss 3.2s ease-in-out infinite}.ab-moss2{animation-delay:-1.6s}' +
    '@keyframes abegret{from{transform:translate(-60px,10px)}to{transform:translate(460px,-20px)}}.ab-egret{animation:abegret 12s linear infinite;animation-delay:-5s}' +
    '@keyframes abwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}.ab-wing{transform-box:fill-box;transform-origin:50% 100%;animation:abwing .7s ease-in-out infinite}' +
    '@keyframes abrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.ab-rip{animation:abrip 3s ease-in-out infinite}.ab-rip2{animation-delay:-1.5s}' +
    '@keyframes ablid{0%,40%,100%{transform:rotate(0)}55%,85%{transform:rotate(-28deg)}}.ab-lid{transform-box:fill-box;transform-origin:0% 100%;animation:ablid 2.6s ease-in-out infinite}' +
    '@keyframes abnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.ab-note{animation:abnote 2.8s ease-out infinite}.ab-note2{animation-delay:-.9s}.ab-note3{animation-delay:-1.8s}' +
    '@keyframes abblink{0%,100%{opacity:.3}50%{opacity:1}}.ab-bl{animation:abblink 1.2s ease-in-out infinite}.ab-bl2{animation-delay:-.6s}' +
    '@keyframes abbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ab-bob{animation:abbob .6s ease-in-out infinite}.ab-bob2{animation-delay:-.3s}' +
    '@keyframes abspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ab-sp{animation:abspray 1.4s ease-out infinite}.ab-sp2{animation-delay:.45s}' +
    '@keyframes ableaf{0%{transform:translate(0,-10px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.ab-leaf{animation:ableaf 5s linear infinite}.ab-leaf2{animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 14) + '" height="20" rx="10" fill="' + color + '"/><text x="' + (x + (txt.length * 9 + 14) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ORANGE = "#ff8a3d", BLUE = "#4fa3ff", PURPLE = "#b07cff", SCG = "#2e7d32";
  /* a live-oak canopy blob with hanging moss */
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.6, -0.25, 0.1, 0.45, 0.75].map((k, i) => '<path class="ab-moss' + (i % 2 ? " ab-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 14 1 26q-2 8 0 14" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 1. St. Charles Av / Napoleon Av streetcar stop */
  function abstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="122" width="24" height="24" rx="2" fill="#2a2a22" stroke="#e9d38a" stroke-width="2.5"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="104" width="292" height="12" rx="6" fill="#6a6f68"/><rect x="40" y="114" width="292" height="72" rx="6" fill="#3f6a3a" stroke="#203a1e" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="292" height="5" fill="#e9d38a"/><rect x="40" y="170" width="292" height="16" fill="#7a2a22"/>' +
      '<rect x="300" y="122" width="26" height="46" rx="2" fill="#e9d38a"/><rect x="304" y="126" width="18" height="38" fill="#2a2a22"/>' +
      '<rect x="46" y="106" width="70" height="10" rx="2" fill="#111"/><text x="81" y="114" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">ST. CHARLES</text>' +
      '<path d="M190 104l60 -46" stroke="#222" stroke-width="2.5"/><circle cx="250" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="188" r="9" fill="#1c1c1c"/><circle cx="130" cy="188" r="9" fill="#1c1c1c"/><circle cx="250" cy="188" r="9" fill="#1c1c1c"/><circle cx="290" cy="188" r="9" fill="#1c1c1c"/>' +
      '<circle class="ab-flk" cx="336" cy="140" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs1)"/>' +
      /* raised-cottage mansion behind */
      '<g><rect x="250" y="40" width="150" height="80" fill="#f2ece0"/><path d="M244 40h162l-8 -12H252z" fill="#c9c2b2"/>' + [262, 296, 330, 364].map(x => '<rect x="' + x + '" y="46" width="6" height="74" fill="#fff"/>').join("") + '<rect x="250" y="76" width="150" height="5" fill="#fff"/>' + [272, 306, 340, 374].map(x => '<rect x="' + x + '" y="54" width="14" height="18" fill="#3a4a5a"/>').join("") + '</g>' +
      oak(60, 40, 90, "#2f5a34") + oak(330, 22, 80, "#2a5230") +
      '<path d="M0 58H400" stroke="#333" stroke-width="1.2"/>' +
      '<rect x="0" y="186" width="400" height="10" fill="#7a6a52"/><path d="M0 190h400M0 194h400" stroke="#4a4038" stroke-width="2"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6f9a52"/>' +
      car +
      '<rect x="54" y="208" width="292" height="40" rx="3" fill="#111"/><text x="68" y="226" ' + font + ' font-size="15" fill="#fff">St. Charles Av /</text><text x="68" y="242" ' + font + ' font-size="15" fill="#fff">Napoleon Av</text>' +
      badge(240, 228, "12", SCG) + '<text x="280" y="232" ' + font + ' font-size="9" fill="#cfd8e0">STREETCAR</text>',
      sky("abs1", "#7fb6e0", "#f6e6c4"));
  }

  /* 2. Tree of Life, Audubon Park */
  function abtree() {
    const limb = (d, w) => '<path d="' + d + '" stroke="#4a3a2c" stroke-width="' + w + '" fill="none" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs2)"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#7fae5a"/>' +
      '<ellipse cx="200" cy="230" rx="210" ry="22" fill="#5f8fa0"/><g class="ab-rip"><path d="M60 228h50M220 236h70" stroke="#a9cfd8" stroke-width="2" stroke-linecap="round"/></g><g class="ab-rip ab-rip2"><path d="M140 222h40M300 226h50" stroke="#c9e4ea" stroke-width="2" stroke-linecap="round"/></g>' +
      '<path d="M186 196q-6 -60 6 -100h24q10 40 6 100z" fill="#4a3a2c"/>' +
      limb("M196 120q-60 -10 -110 30q-30 24 -70 30", 16) + limb("M212 116q70 -6 120 34q20 18 64 22", 16) + limb("M200 100q-30 -40 -90 -50", 11) + limb("M210 100q40 -40 100 -46", 11) + limb("M196 140q-40 10 -60 40", 10) +
      oak(200, 46, 150, "#3a6a36") + oak(80, 92, 70, "#33602f") + oak(330, 90, 70, "#33602f") +
      '<g class="ab-egret"><path class="ab-wing" d="M40 70q10 -10 20 0q10 -10 20 0" stroke="#fff" stroke-width="3.5" fill="none"/><path d="M58 70l4 3" stroke="#f2c94c" stroke-width="2"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#1d3320">TREE OF LIFE · AUDUBON PARK</text>',
      sky("abs2", "#a8d2ef", "#f4f0dc"));
  }

  /* 3. Magazine Street sneaker boutique */
  function abkicks() {
    const kick = (x, y, c, s) => '<g><path d="M' + x + ' ' + (y + 12) + 'h34q4 0 4 -4q0 -4 -6 -5l-12 -3l-6 -8h-10q-4 0 -4 6z" fill="' + c + '" stroke="#1a1a1a" stroke-width="1.5"/><rect x="' + x + '" y="' + (y + 10) + '" width="38" height="4" rx="2" fill="' + s + '"/><path d="M' + (x + 12) + ' ' + (y + 2) + 'l3 4M' + (x + 16) + ' ' + y + 'l3 4" stroke="#fff" stroke-width="1.2"/></g>';
    const colors = [[ORANGE, "#fff"], [BLUE, "#fff"], ["#f4f4f4", "#e23b3b"], [PURPLE, "#111"], ["#2fb36b", "#fff"], ["#111", "#f2c94c"], ["#e23b3b", "#fff"], ["#f2c94c", "#111"]];
    let shelves = "";
    for (let r = 0; r < 3; r++) { shelves += '<rect x="20" y="' + (66 + r * 40) + '" width="220" height="5" fill="#c9a77a"/>'; for (let c = 0; c < 5; c++) { const k = colors[(r * 5 + c) % colors.length]; shelves += kick(26 + c * 43, 46 + r * 40, k[0], k[1]); } }
    let boxes = "";
    const bc = ["#e86a2c", "#2a2a2a", "#f2f2f2", "#d9342b", "#2f6fd6"];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) boxes += '<rect x="' + (262 + c * 44) + '" y="' + (184 - r * 24) + '" width="40" height="22" fill="' + bc[(r + c) % 5] + '" stroke="#111" stroke-width="1"/><rect x="' + (262 + c * 44) + '" y="' + (184 - r * 24) + '" width="40" height="5" fill="#000" opacity=".2"/>';
    return svg(
      '<rect width="400" height="260" fill="#e9e1d2"/><rect x="0" y="0" width="400" height="24" fill="#2a2a2a"/>' + [60, 200, 340].map(x => '<circle class="ab-flk' + (x === 200 ? " ab-flk2" : "") + '" cx="' + x + '" cy="22" r="5" fill="#fff3c4"/>').join("") +
      shelves + boxes +
      '<rect x="0" y="206" width="400" height="54" fill="#8a6a4a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 206v54" stroke="#7a5a3a" stroke-width="2"/>').join("") +
      '<rect x="150" y="196" width="60" height="26" fill="#e86a2c" stroke="#111"/>' + kick(154, 186, "#f4f4f4", ORANGE) +
      '<g class="ab-lid"><rect x="150" y="188" width="60" height="9" fill="#c9561f" stroke="#111"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">MAGAZINE ST · UPTOWN</text>');
  }

  /* 4. Uptown music hall */
  function abclub() {
    const head = (x, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="214" r="9" fill="#1a1420"/><rect x="' + (x - 12) + '" y="222" width="24" height="40" rx="8" fill="#1a1420"/></g>';
    const note = (x, y, cls) => '<g class="ab-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="#ffd36a"/><path d="M' + (x + 4) + ' ' + y + 'v-14l7 3" stroke="#ffd36a" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs4)"/>' +
      '<rect x="40" y="56" width="320" height="150" fill="#f2c53d"/><rect x="40" y="56" width="320" height="10" fill="#d9a91f"/>' +
      [70, 130, 250, 310].map(x => '<rect x="' + x + '" y="80" width="30" height="40" fill="#3a2a4a"/><rect x="' + x + '" y="80" width="30" height="40" fill="#ffb84a" opacity=".35" class="ab-flk"/>').join("") +
      '<rect x="150" y="122" width="100" height="84" fill="#2a1a2e"/><rect x="156" y="128" width="88" height="78" fill="#4a2a4a"/>' +
      '<rect x="120" y="70" width="160" height="34" rx="3" fill="#1a1a1a" stroke="#ffd36a" stroke-width="2"/><text x="200" y="93" text-anchor="middle" ' + font + ' font-size="16" fill="#ffd36a">LIVE TONIGHT</text>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="ab-bl' + (i % 2 ? " ab-bl2" : "") + '" cx="' + (128 + i * 16) + '" cy="66" r="2.5" fill="#fff3c4"/>').join("") +
      /* a sax in the doorway light */
      '<g transform="translate(186 140)"><path d="M10 0v34q0 12 10 12q10 0 10 -10" stroke="#e8b84a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M26 34l8 -6" stroke="#e8b84a" stroke-width="9" stroke-linecap="round"/><path d="M10 0l-6 -6" stroke="#333" stroke-width="3"/></g>' +
      note(214, 130, "") + note(230, 120, "ab-note2") + note(200, 116, "ab-note3") +
      '<rect x="0" y="206" width="400" height="54" fill="#3a3a40"/>' +
      head(40, "ab-bob") + head(74, "ab-bob ab-bob2") + head(110, "ab-bob") + head(290, "ab-bob ab-bob2") + head(326, "ab-bob") + head(362, "ab-bob ab-bob2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efe0">NAPOLEON AV · TCHOUPITOULAS ST</text>',
      sky("abs4", "#1d1838", "#6a3a6a"));
  }

  /* 5. St Charles Av and Calhoun St */
  function abcorner() {
    const STONE = "#d8c8a8", DARK = "#b8a482";
    const church = '<g><rect x="150" y="60" width="64" height="70" fill="' + STONE + '"/><path d="M146 62l36 -26l36 26z" fill="' + DARK + '"/>' +
      '<rect x="170" y="36" width="24" height="34" fill="' + STONE + '"/><path d="M166 38l16 -32l16 32z" fill="' + DARK + '"/><path d="M182 6v-6M179 2h6" stroke="' + DARK + '" stroke-width="2"/>' +
      '<path d="M176 58v-10q6 -8 12 0v10z" fill="#4a4a5a"/><circle cx="182" cy="76" r="9" fill="#7a5aa0" stroke="' + DARK + '" stroke-width="2"/>' +
      '<rect x="120" y="76" width="30" height="54" fill="' + STONE + '"/><rect x="214" y="76" width="30" height="54" fill="' + STONE + '"/><path d="M118 78l17 -14l17 14z M212 78l17 -14l17 14z" fill="' + DARK + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abs5)"/>' + church +
      oak(40, 92, 70, "#2a4a30") + oak(360, 96, 60, "#2a4a30") +
      '<rect x="0" y="122" width="400" height="102" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("BANKS", 20, 192, 58, ORANGE, -6) + tag("UNDERDOG CENTRAL", 60, 218, 17, BLUE, -4) + tag("LONE WOLF", 236, 192, 18, PURPLE, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="370" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(226, 94, 162, "St Charles Av") + sign(262, 120, 126, "Calhoun St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="ab-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="ab-sp"><circle cx="190" cy="170" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="ab-sp ab-sp2"><circle cx="196" cy="164" r="2" fill="' + ORANGE + '" opacity=".6"/></g>' +
      '<g class="ab-leaf"><ellipse cx="330" cy="60" rx="4" ry="2" fill="#5a7a3a"/></g><g class="ab-leaf ab-leaf2"><ellipse cx="80" cy="50" rx="4" ry="2" fill="#6a8a3a"/></g>',
      sky("abs5", "#2b3a6a", "#f0a874"));
  }

  window.SCENES = { abstation: abstation, abtree: abtree, abkicks: abkicks, abclub: abclub, abcorner: abcorner };
})();
