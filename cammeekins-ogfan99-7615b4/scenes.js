/* cammeekins scenes (Regions tab: Boston + New England; Wellesley, MA). CSS classes prefixed cm- (the page's own anim-train is kept).
   1 Wellesley Square on the MBTA Commuter Rail (Framingham/Worcester Line): open-air platform under the trees, a silver coach with the purple stripe sliding in, black station sign with the purple CR pill.
   2 Galen Stone Tower at Wellesley College over Lake Waban: the tall red-brick Gothic tower with its stone trim and pinnacles above the trees, the lake below, a swan gliding.
   3 Wellesley High School on Rice St, where he was a senior when the town paper first wrote him up: the long modern brick-and-glass front, a yellow school bus rolling past.
   4 The Boston Marathon through Wellesley (the course runs right through town on Central St): the halfway banner, runners going by, the crowd's signs bouncing.
   5 Central St and Washington St in Wellesley Square: green signs, CAM tagged on the brick, the stone Town Hall with its steep slate roofs and round turret behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cm-flk{animation:cmflick 2.2s infinite}.cm-flk2{animation-delay:.7s}' +
    '@keyframes cmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.cm-car{animation:cmcar 7s linear infinite}' +
    '@keyframes cmbus{from{transform:translateX(-220px)}to{transform:translateX(520px)}}.cm-bus{animation:cmbus 9s linear infinite}' +
    '@keyframes cmswan{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.cm-swan{animation:cmswan 9s ease-in-out infinite}' +
    '@keyframes cmrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.cm-rip{animation:cmrip 3s ease-in-out infinite}.cm-rip2{animation-delay:-1.5s}' +
    '@keyframes cmrun{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.cm-run{animation:cmrun 6s linear infinite}.cm-run2{animation-delay:-2s}.cm-run3{animation-delay:-4s}' +
    '@keyframes cmleg{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.cm-leg{transform-box:fill-box;transform-origin:50% 0%;animation:cmleg .5s linear infinite}.cm-leg2{animation-delay:-.25s}' +
    '@keyframes cmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.cm-bob{animation:cmbob .9s ease-in-out infinite}.cm-bob2{animation-delay:-.45s}' +
    '@keyframes cmleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,120px) rotate(200deg);opacity:0}}.cm-leaf{animation:cmleaf 5s linear infinite}.cm-leaf2{animation-delay:-2.5s}' +
    '@keyframes cmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cm-sp{animation:cmspray 1.4s ease-out infinite}.cm-sp2{animation-delay:.45s}' +
    '@keyframes cmglow{0%,100%{opacity:.55}50%{opacity:1}}.cm-glow{animation:cmglow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r * 1.4) + '" fill="#5a3d26"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/>';
  const PURPLE = "#80276c", LAMP = "#ffd27a", BLUE = "#6fb7ff";

  /* 1. Wellesley Square, Commuter Rail */
  function cmstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="112" width="30" height="20" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="100" width="330" height="80" rx="6" fill="#c9ced3" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="140" width="330" height="10" fill="' + PURPLE + '"/><rect x="24" y="152" width="330" height="3" fill="' + PURPLE + '"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (30 + i * 30) + ' 158v18" stroke="#b3b9bf" stroke-width="2"/>').join("") +
      '<rect x="164" y="108" width="22" height="40" fill="#9aa1a8"/><circle cx="344" cy="170" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms1)"/>' +
      tree(30, 60, 34, "#4f7f3c") + tree(100, 50, 30, "#5d8f44") + tree(310, 56, 36, "#4a7a38") + tree(380, 48, 30, "#5d8f44") + tree(200, 64, 26, "#c9752e") +
      '<g class="cm-leaf"><path d="M210 50l5 3-5 3-5-3z" fill="#e0902e"/></g><g class="cm-leaf cm-leaf2"><path d="M320 40l5 3-5 3-5-3z" fill="#d4562a"/></g>' +
      '<rect x="0" y="92" width="400" height="92" fill="#3b3a36"/>' + train +
      '<rect x="0" y="182" width="400" height="6" fill="#f2c200"/><rect x="0" y="188" width="400" height="72" fill="#a39d92"/>' +
      '<rect x="40" y="196" width="4" height="56" fill="#333"/><rect x="216" y="196" width="4" height="56" fill="#333"/>' +
      '<rect x="26" y="196" width="210" height="30" rx="3" fill="#111"/><text x="38" y="216" ' + font + ' font-size="15" fill="#fff">Wellesley Square</text>' + badge(184, 211, "CR", PURPLE) +
      '<rect x="290" y="196" width="80" height="44" fill="#8a4b3a"/><path d="M284 196h92l-8 -10h-76z" fill="#3a3a3a"/><rect x="300" y="206" width="22" height="20" fill="#f6dfa3" class="cm-glow"/><rect x="336" y="206" width="22" height="34" fill="#4a2c22"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">FRAMINGHAM/WORCESTER LINE · WELLESLEY</text>',
      sky("cms1", "#8ec5ee", "#f4ecd8"));
  }

  /* 2. Galen Stone Tower over Lake Waban */
  function cmtower() {
    const BR = "#9a4a32", ST = "#e2d9c4";
    return svg(
      '<rect width="400" height="260" fill="url(#cms2)"/>' +
      '<rect x="170" y="44" width="60" height="120" fill="' + BR + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M170 ' + (52 + i * 10) + 'h60" stroke="#87402b" stroke-width="1"/>').join("") +
      '<rect x="166" y="40" width="68" height="8" fill="' + ST + '"/><rect x="166" y="96" width="68" height="5" fill="' + ST + '"/>' +
      '<path d="M182 92v-30a8 8 0 0 1 16 0v30zM202 92v-30a8 8 0 0 1 16 0v30z" fill="#2c2a35"/><path d="M190 140v-20a10 10 0 0 1 20 0v20z" fill="#2c2a35"/>' +
      '<path d="M166 40l6 -22 6 22zM222 40l6 -22 6 22zM190 40l10 -30 10 30z" fill="' + ST + '"/><path d="M178 40h44l-22 -18z" fill="#6b6a75"/>' +
      '<rect x="120" y="120" width="160" height="44" fill="' + BR + '"/><path d="M116 120l20 -14h128l20 14z" fill="#5e5d68"/>' + [132, 152, 248, 264].map(x => '<rect x="' + x + '" y="130" width="10" height="18" fill="#2c2a35"/>').join("") +
      tree(40, 140, 34, "#d9802e") + tree(90, 148, 28, "#c9452c") + tree(320, 142, 34, "#e3a33a") + tree(370, 150, 26, "#b8402a") + tree(110, 162, 18, "#4e7d3a") + tree(296, 164, 18, "#4e7d3a") +
      '<rect x="0" y="168" width="400" height="92" fill="#3f6f8f"/>' +
      '<g opacity=".18"><rect x="176" y="172" width="48" height="50" fill="' + BR + '"/></g>' +
      '<g class="cm-rip"><path d="M10 190h60M120 204h80M260 186h70M40 226h90M240 236h120" stroke="#a8cdea" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="cm-rip cm-rip2"><path d="M80 214h50M300 212h60M150 248h70" stroke="#d2e6f6" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="cm-swan"><path d="M60 220q10 -12 30 0q-6 8 -24 6z" fill="#fff"/><path d="M84 214q2 -16 -6 -18q-4 0 -2 6" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M76 198l-5 2" stroke="#f08a24" stroke-width="3"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="#eaf2fb">LAKE WABAN · WELLESLEY</text>',
      sky("cms2", "#7fb4e0", "#f6e8d0"));
  }

  /* 3. Wellesley High School, Rice St */
  function cmschool() {
    const bus = '<g class="cm-bus"><rect x="0" y="196" width="150" height="36" rx="6" fill="#f2b705"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 22) + '" y="202" width="16" height="12" fill="#bfe3ff"/>').join("") +
      '<rect x="0" y="220" width="150" height="3" fill="#222"/><circle cx="28" cy="234" r="7" fill="#111"/><circle cx="120" cy="234" r="7" fill="#111"/><rect x="142" y="204" width="8" height="6" fill="#ffefb0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms3)"/>' +
      tree(20, 100, 30, "#5d8f44") + tree(380, 96, 30, "#4f7f3c") +
      '<rect x="40" y="80" width="320" height="110" fill="#a5553d"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M40 ' + (86 + i * 8) + 'h320" stroke="#934a35" stroke-width="1"/>').join("") +
      '<rect x="150" y="60" width="110" height="130" fill="#cfe2ee"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (150 + i * 22) + ' 60v130" stroke="#7d93a3" stroke-width="2"/>').join("") + Array.from({ length: 6 }, (_, i) => '<path d="M150 ' + (60 + i * 26) + 'h110" stroke="#7d93a3" stroke-width="2"/>').join("") +
      '<rect x="146" y="54" width="118" height="8" fill="#e8e6e0"/>' +
      [60, 96, 284, 320].map(x => '<rect x="' + x + '" y="100" width="24" height="26" fill="#2c3a48"/><rect x="' + x + '" y="140" width="24" height="26" fill="#2c3a48"/>').join("") +
      '<rect x="180" y="160" width="50" height="30" fill="#2c3a48"/><rect x="40" y="76" width="110" height="6" fill="#e8e6e0"/><rect x="260" y="76" width="100" height="6" fill="#e8e6e0"/>' +
      '<rect x="360" y="40" width="3" height="150" fill="#ddd"/><rect x="363" y="42" width="26" height="16" fill="#1f3a6e"/>' +
      '<rect x="0" y="190" width="400" height="10" fill="#c7c1b5"/><rect x="0" y="200" width="400" height="60" fill="#4a4a4f"/><path d="M0 246h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<text x="205" y="61" text-anchor="middle" ' + font + ' font-size="7" fill="#2c3a48">WELLESLEY HIGH SCHOOL</text>',
      sky("cms3", "#9bcbef", "#eef4f8"));
  }

  /* 4. The Marathon through Wellesley */
  function cmmarathon() {
    const runner = (cls, x, shirt) => '<g class="cm-run ' + cls + '"><circle cx="' + x + '" cy="160" r="6" fill="#c98f6b"/><rect x="' + (x - 6) + '" y="166" width="12" height="20" rx="3" fill="' + shirt + '"/><rect x="' + (x - 4) + '" y="172" width="8" height="6" fill="#fff"/>' +
      '<g class="cm-leg"><rect x="' + (x - 4) + '" y="186" width="4" height="18" fill="#2a2a2a"/></g><g class="cm-leg cm-leg2"><rect x="' + x + '" y="186" width="4" height="18" fill="#2a2a2a"/></g></g>';
    const fan = (x, c, cls, txt) => '<g class="cm-bob ' + cls + '"><circle cx="' + x + '" cy="108" r="7" fill="#d9a07a"/><rect x="' + (x - 8) + '" y="115" width="16" height="22" rx="3" fill="' + c + '"/>' +
      (txt ? '<rect x="' + (x - Math.max(18, txt.length * 3.6)) + '" y="80" width="' + Math.max(36, txt.length * 7.2) + '" height="20" fill="#fff" stroke="#333"/><text x="' + x + '" y="94" text-anchor="middle" ' + font + ' font-size="9" fill="' + PURPLE + '">' + txt + '</text><path d="M' + x + ' 100v10" stroke="#333" stroke-width="2"/>' : '') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms4)"/>' +
      tree(30, 50, 30, "#5d8f44") + tree(370, 46, 30, "#4f7f3c") +
      '<rect x="60" y="28" width="4" height="110" fill="#555"/><rect x="336" y="28" width="4" height="110" fill="#555"/><rect x="60" y="30" width="280" height="30" rx="3" fill="#1f3a6e"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="16" fill="' + LAMP + '">HALFWAY · 13.1</text>' +
      fan(40, "#c0392b", "", "GO!") + fan(80, "#2b6cb0", "cm-bob2", "") + fan(120, PURPLE, "", "CAM") + fan(160, "#2f855a", "cm-bob2", "") + fan(240, "#d69e2e", "", "") + fan(280, "#c0392b", "cm-bob2", "WELLESLEY") + fan(330, "#2b6cb0", "", "") + fan(370, PURPLE, "cm-bob2", "") +
      '<rect x="0" y="138" width="400" height="8" fill="#ddd"/><path d="M0 142h400" stroke="#c0392b" stroke-width="2" stroke-dasharray="10 10"/>' +
      '<rect x="0" y="146" width="400" height="114" fill="#55565b"/><path d="M0 214h400" stroke="#f2c200" stroke-width="3"/>' +
      runner("", 40, "#e53e3e") + runner("cm-run2", 40, "#3182ce") + runner("cm-run3", 40, "#38a169") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">CENTRAL ST · WELLESLEY · MARATHON MONDAY</text>',
      sky("cms4", "#8ec5ee", "#f6efe2"));
  }

  /* 5. Central St and Washington St, Wellesley Square */
  function cmcorner() {
    const ST = "#c9b99a", SL = "#4b5563";
    const hall = '<g><rect x="120" y="58" width="160" height="70" fill="' + ST + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M120 ' + (64 + i * 8) + 'h160" stroke="#b3a383" stroke-width="1"/>').join("") +
      '<path d="M114 60l36 -40 36 40zM214 60l36 -40 36 40z" fill="' + SL + '"/><path d="M170 60l30 -28 30 28z" fill="' + SL + '"/>' +
      '<rect x="88" y="40" width="34" height="88" fill="' + ST + '"/><path d="M84 42l21 -36 21 36z" fill="' + SL + '"/><rect x="98" y="58" width="12" height="16" rx="6" fill="#2c3a48"/>' +
      [134, 158, 230, 254].map(x => '<rect x="' + x + '" y="70" width="12" height="18" rx="6" fill="#2c3a48"/>').join("") + '<rect x="190" y="74" width="20" height="30" rx="10" fill="#2c3a48"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms5)"/>' +
      tree(40, 90, 30, "#4f7f3c") + hall + tree(320, 92, 28, "#3f6f34") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("CAM", 30, 196, 64, LAMP, -6) + tag("LAMP CITY", 34, 218, 18, BLUE, -3) + tag("1993", 170, 214, 20, "#ff7aa8", -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 150, "Central St") + sign(254, 124, 130, "Washington St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="cm-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="cm-sp"><circle cx="150" cy="160" r="3" fill="' + LAMP + '" opacity=".7"/></g><g class="cm-sp cm-sp2"><circle cx="156" cy="154" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("cms5", "#2b2f5c", "#f0a070"));
  }

  window.SCENES = { cmstation: cmstation, cmtower: cmtower, cmschool: cmschool, cmmarathon: cmmarathon, cmcorner: cmcorner };
})();
