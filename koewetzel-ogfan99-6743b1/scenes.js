/* koewetzel scenes (Regions: Houston + Texas / Genres: country; Stephenville TX - Tarleton State, Erath County square; Fort Worth). CSS classes prefixed kwz- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kwzglow{0%,100%{opacity:.45}50%{opacity:1}}.kwz-glow{animation:kwzglow 2.4s ease-in-out infinite}.kwz-g2{animation-delay:-1.2s}' +
    '@keyframes kwzcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.kwz-cl{animation:kwzcloud 14s ease-in-out infinite alternate}' +
    '@keyframes kwzwalk{0%{transform:translateX(-170px)}100%{transform:translateX(430px)}}.kwz-walk{animation:kwzwalk 16s linear infinite}.kwz-walk2{animation-delay:-8s}' +
    '@keyframes kwzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}.kwz-bob{animation:kwzbob .8s ease-in-out infinite}' +
    '@keyframes kwzball{0%{transform:translate(0,0)}50%{transform:translate(90px,-70px)}100%{transform:translate(180px,0)}}.kwz-ball{animation:kwzball 3.2s linear infinite}' +
    '@keyframes kwzspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.kwz-hand{transform-box:view-box;animation:kwzspin 12s linear infinite}' +
    '@keyframes kwzflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(6deg)}}.kwz-flag{transform-box:fill-box;transform-origin:0 50%;animation:kwzflag 1.6s ease-in-out infinite}' +
    '@keyframes kwzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kwz-sp{animation:kwzspray 1.4s ease-out infinite}.kwz-sp2{animation-delay:.45s}' +
    '@keyframes kwztwk{0%,100%{opacity:.2}50%{opacity:1}}.kwz-tw{animation:kwztwk 1.8s ease-in-out infinite}.kwz-tw2{animation-delay:-.9s}' +
    '@keyframes kwztail{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}.kwz-tail{transform-box:fill-box;transform-origin:50% 0;animation:kwztail 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#111">' + n + '</text>';
  const RED = "#d8453a", PURP = "#6b3fa8", GOLD = "#e8c170", CREAM = "#f3ead8";
  /* Erath County Courthouse (1892, J. Riely Gordon): cream limestone with red sandstone bands, arched porches, central clock tower */
  const courthouse = (cx, base, s) => {
    const L = "#ece2cc", R = "#b0503a", D = "#8a3a2a";
    const X = v => (cx + v * s).toFixed(1), Y = v => (base - v * s).toFixed(1), k = v => (v * s).toFixed(1);
    let o = '<rect x="' + X(-110) + '" y="' + Y(70) + '" width="' + k(220) + '" height="' + k(70) + '" fill="' + L + '"/>';
    [56, 40, 22].forEach(v => o += '<rect x="' + X(-110) + '" y="' + Y(v) + '" width="' + k(220) + '" height="' + k(4) + '" fill="' + R + '"/>');
    for (let i = -4; i <= 4; i++) if (i) o += '<rect x="' + X(i * 23 - 5) + '" y="' + Y(52) + '" width="' + k(10) + '" height="' + k(12) + '" fill="#4a5a6a"/><rect x="' + X(i * 23 - 5) + '" y="' + Y(34) + '" width="' + k(10) + '" height="' + k(12) + '" fill="#4a5a6a"/>';
    [-1, 1].forEach(sd => { o += '<path d="M' + X(sd * 110) + ' ' + Y(70) + 'L' + X(sd * 94) + ' ' + Y(92) + 'L' + X(sd * 78) + ' ' + Y(70) + 'z" fill="' + L + '" stroke="' + R + '" stroke-width="' + k(1.5) + '"/><rect x="' + X(sd * 104 - 5) + '" y="' + Y(100) + '" width="' + k(10) + '" height="' + k(14) + '" fill="' + L + '"/><path d="M' + X(sd * 104 - 6) + ' ' + Y(100) + 'L' + X(sd * 104) + ' ' + Y(110) + 'L' + X(sd * 104 + 6) + ' ' + Y(100) + 'z" fill="' + D + '"/>'; });
    /* center pavilion with arched porch */
    o += '<rect x="' + X(-30) + '" y="' + Y(84) + '" width="' + k(60) + '" height="' + k(84) + '" fill="' + L + '"/>';
    for (let i = -1; i <= 1; i++) o += '<path d="M' + X(i * 18 - 7) + ' ' + Y(0) + 'v-' + k(18) + 'a' + k(7) + ' ' + k(7) + ' 0 0 1 ' + k(14) + ' 0v' + k(18) + 'z" fill="#3a2a22"/>';
    o += '<rect x="' + X(-30) + '" y="' + Y(26) + '" width="' + k(60) + '" height="' + k(4) + '" fill="' + R + '"/><rect x="' + X(-30) + '" y="' + Y(62) + '" width="' + k(60) + '" height="' + k(4) + '" fill="' + R + '"/>';
    o += '<path d="M' + X(-34) + ' ' + Y(84) + 'L' + X(0) + ' ' + Y(100) + 'L' + X(34) + ' ' + Y(84) + 'z" fill="' + L + '" stroke="' + R + '" stroke-width="' + k(1.5) + '"/>';
    /* clock tower */
    o += '<rect x="' + X(-14) + '" y="' + Y(150) + '" width="' + k(28) + '" height="' + k(52) + '" fill="' + L + '"/><rect x="' + X(-14) + '" y="' + Y(112) + '" width="' + k(28) + '" height="' + k(3) + '" fill="' + R + '"/>';
    o += '<circle cx="' + X(0) + '" cy="' + Y(128) + '" r="' + k(9) + '" fill="#fff" stroke="' + D + '" stroke-width="' + k(1.5) + '"/>' +
      '<path d="M' + X(0) + ' ' + Y(128) + 'v-' + k(6) + '" stroke="#222" stroke-width="' + k(1.4) + '"/>' +
      '<g transform="translate(' + X(0) + ' ' + Y(128) + ')"><path class="kwz-hand" d="M0 0h' + k(7) + '" stroke="#222" stroke-width="' + k(1) + '"/></g>';
    o += '<path d="M' + X(-17) + ' ' + Y(150) + 'L' + X(0) + ' ' + Y(178) + 'L' + X(17) + ' ' + Y(150) + 'z" fill="' + D + '"/><rect x="' + X(-0.6) + '" y="' + Y(190) + '" width="' + k(1.2) + '" height="' + k(12) + '" fill="#555"/>';
    return '<g>' + o + '</g>';
  };
  /* a Holstein, standing */
  const cow = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-30" y="-22" width="58" height="26" rx="10" fill="#fafafa" stroke="#222" stroke-width="1.5"/>' +
    '<path d="M-20 -22q8 6 2 14q-8 2 -10 -8zM4 -18q10 -2 12 8q-6 8 -14 2zM14 -2q6 -4 10 2q-2 6 -10 2z" fill="#1a1a1a"/>' +
    '<rect x="-26" y="2" width="6" height="18" fill="#fafafa" stroke="#222" stroke-width="1.2"/><rect x="-14" y="2" width="6" height="18" fill="#fafafa" stroke="#222" stroke-width="1.2"/><rect x="12" y="2" width="6" height="18" fill="#fafafa" stroke="#222" stroke-width="1.2"/><rect x="20" y="2" width="6" height="18" fill="#fafafa" stroke="#222" stroke-width="1.2"/>' +
    '<rect x="-26" y="18" width="6" height="3" fill="#222"/><rect x="-14" y="18" width="6" height="3" fill="#222"/><rect x="12" y="18" width="6" height="3" fill="#222"/><rect x="20" y="18" width="6" height="3" fill="#222"/>' +
    '<ellipse cx="-2" cy="5" rx="6" ry="4" fill="#f2b8c0"/>' +
    '<path class="kwz-tail" d="M28 -18q6 10 2 24" stroke="#222" stroke-width="2" fill="none"/>' +
    '<path d="M-30 -20l-14 -4q-6 2 -6 10l2 12q4 4 10 2l8 -8z" fill="#1a1a1a"/><path d="M-50 -2q2 4 8 4q4 -2 4 -6z" fill="#f2b8c0"/><path d="M-36 -24l-6 -6M-44 -24l-2 -8" stroke="#d8cdb8" stroke-width="2"/></g>';
  /* a Texas longhorn, walking */
  const longhorn = (x, y, c, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><g class="kwz-bob">' +
    '<rect x="-26" y="-20" width="50" height="22" rx="9" fill="' + c + '"/><path d="M-6 -20q8 6 0 14q-8 -4 0 -14z" fill="#f2e6d0" opacity=".85"/>' +
    '<rect x="-22" y="0" width="5" height="16" fill="' + c + '"/><rect x="-12" y="0" width="5" height="16" fill="' + c + '"/><rect x="10" y="0" width="5" height="16" fill="' + c + '"/><rect x="18" y="0" width="5" height="16" fill="' + c + '"/>' +
    '<path d="M24 -16l12 -2q6 2 6 10l-2 10q-4 3 -8 1l-6 -8z" fill="' + c + '"/>' +
    '<path d="M34 -18q-16 -4 -24 -14M36 -18q16 -4 26 -14" stroke="#efe4c8" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
    '<path class="kwz-tail" d="M-26 -16q-4 10 -2 20" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';

  /* 1. US 377 into Stephenville: green guide sign, US 377 and US 281 shields, the Cross Timbers hills, a pickup rolling in */
  function kwzsign() {
    let oaks = "";
    [[18, 168, 18], [52, 166, 14], [344, 168, 16], [380, 166, 20], [300, 168, 12]].forEach(p => oaks += '<rect x="' + (p[0] - 2) + '" y="' + (p[1] - 6) + '" width="4" height="10" fill="#4a3a28"/><ellipse cx="' + p[0] + '" cy="' + (p[1] - p[2] / 2 - 4) + '" rx="' + p[2] + '" ry="' + (p[2] * .7) + '" fill="#4a6a34"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#kwz1)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#fff2c8" opacity=".9"/>' +
      '<g class="kwz-cl"><ellipse cx="70" cy="30" rx="36" ry="8" fill="#fff" opacity=".55"/><ellipse cx="240" cy="20" rx="30" ry="7" fill="#fff" opacity=".45"/></g>' +
      '<path d="M0 150q60 -26 130 -10t140 -14t130 8v42h-400z" fill="#7a8a52"/><rect x="0" y="150" width="400" height="26" fill="#a49a5e"/>' + oaks +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a4e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="132" y="104" width="6" height="72" fill="#9aa0a6"/><rect x="306" y="104" width="6" height="72" fill="#9aa0a6"/>' +
      '<rect x="114" y="18" width="214" height="90" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="221" y="54" text-anchor="middle" ' + font + ' font-size="25" fill="#fff">Stephenville</text>' +
      '<text x="221" y="76" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">TARLETON STATE UNIV</text>' +
      '<text x="221" y="96" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">WASHINGTON ST  NEXT RIGHT</text>' +
      usShield(36, 92, "377") + usShield(82, 92, "281") + '<rect x="54" y="122" width="4" height="54" fill="#9aa0a6"/><rect x="100" y="122" width="4" height="54" fill="#9aa0a6"/>' +
      '<g class="anim-train"><g transform="translate(150 0)"><rect x="0" y="196" width="76" height="20" rx="3" fill="' + PURP + '"/><path d="M10 196l8 -15h24l6 15z" fill="' + PURP + '"/><path d="M20 194l5 -10h14l4 10z" fill="#bfe2f0"/><rect x="50" y="190" width="26" height="6" fill="#4a2a78"/>' +
      '<rect x="-2" y="206" width="5" height="5" fill="#ffd27a" class="kwz-glow"/><circle cx="16" cy="218" r="7" fill="#111"/><circle cx="60" cy="218" r="7" fill="#111"/><circle cx="16" cy="218" r="3" fill="#bbb"/><circle cx="60" cy="218" r="3" fill="#bbb"/></g></g>',
      sky("kwz1", "#4f8fcf", "#f2d9a8"));
  }

  /* 2. Tarleton State, Stephenville: Memorial Stadium under the lights in purple and white, a football sailing through the uprights */
  function kwztarleton() {
    let stands = "", lights = "";
    for (let r = 0; r < 6; r++) stands += '<rect x="0" y="' + (96 + r * 9) + '" width="400" height="7" fill="' + (r % 2 ? "#4a2f78" : "#5a3a8e") + '"/>';
    for (let i = 0; i < 70; i++) stands += '<circle cx="' + (6 + (i * 37) % 396) + '" cy="' + (99 + (i % 6) * 9) + '" r="2" fill="' + ["#fff", "#c9b3e8", "#f2d0a0", "#8a6ac0"][i % 4] + '"/>';
    [[40, 22], [360, 22]].forEach(p => lights += '<rect x="' + (p[0] - 2) + '" y="' + p[1] + '" width="4" height="76" fill="#8a8f96"/><rect x="' + (p[0] - 18) + '" y="' + (p[1] - 14) + '" width="36" height="16" fill="#3a3a44"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (p[0] - 14 + (i % 4) * 9.3) + '" cy="' + (p[1] - 10 + Math.floor(i / 4) * 8) + '" r="3" fill="#fff8d8" class="kwz-glow' + (i % 2 ? " kwz-g2" : "") + '"/>').join(""));
    return svg(
      '<rect width="400" height="260" fill="url(#kwz2)"/>' +
      [[60, 30], [130, 14], [250, 26], [310, 12], [200, 40]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="kwz-tw' + (i % 2 ? " kwz-tw2" : "") + '"/>').join("") +
      lights +
      /* press box */
      '<rect x="130" y="64" width="140" height="30" fill="#ececf2"/><rect x="136" y="70" width="128" height="10" fill="#2a3a5a"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="10" fill="' + PURP + '" letter-spacing="2">TARLETON</text>' +
      stands +
      '<rect x="0" y="150" width="400" height="110" fill="#3f8a3a"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 150l' + (-20 + i * 5) + ' 110" stroke="#fff" stroke-width="1.5" opacity=".75"/>').join("") +
      '<rect x="0" y="150" width="400" height="10" fill="' + PURP + '"/><text x="200" y="158.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" letter-spacing="3">STEPHENVILLE TX</text>' +
      /* goalpost */
      '<rect x="318" y="150" width="4" height="70" fill="#f2d44a"/><rect x="290" y="150" width="60" height="4" fill="#f2d44a"/><rect x="290" y="96" width="4" height="56" fill="#f2d44a"/><rect x="346" y="96" width="4" height="56" fill="#f2d44a"/>' +
      '<g class="kwz-ball"><ellipse cx="140" cy="200" rx="8" ry="5" fill="#7a3e1e" transform="rotate(-25 140 200)"/><path d="M136 199l8 -1" stroke="#fff" stroke-width="1"/></g>',
      sky("kwz2", "#140e2a", "#3a2a5e"));
  }

  /* 3. The Erath County square: the 1892 red-and-cream courthouse with its clock tower, the big Holstein of the Cow Capital of Texas out front */
  function kwzsquare() {
    return svg(
      '<rect width="400" height="260" fill="url(#kwz3)"/>' +
      '<g class="kwz-cl"><ellipse cx="60" cy="34" rx="36" ry="8" fill="#fff" opacity=".6"/><ellipse cx="320" cy="26" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      courthouse(220, 176, 0.95) +
      /* flag */
      '<rect x="84" y="56" width="2.5" height="120" fill="#bbb"/><g class="kwz-flag"><rect x="86.5" y="58" width="34" height="22" fill="#fff"/><rect x="86.5" y="58" width="12" height="22" fill="#1f3a8a"/><rect x="98.5" y="69" width="22" height="11" fill="#c8202a"/><path d="M92.5 63.5l1.2 3.4h3.5l-2.8 2.1 1 3.4-2.9-2-2.9 2 1-3.4-2.8-2.1h3.5z" fill="#fff"/></g>' +
      '<rect x="0" y="176" width="400" height="24" fill="#6a9a48"/>' +
      Array.from({ length: 4 }, (_, i) => '<ellipse cx="' + (24 + i * 120) + '" cy="172" rx="22" ry="15" fill="#4f7a36"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#5a5a5e"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 16"/>' +
      /* the Holstein on her plinth */
      '<rect x="40" y="194" width="92" height="12" fill="#c8bca4"/>' + cow(92, 172, 1.05),
      sky("kwz3", "#5a9ad8", "#f3e2c0"));
  }

  /* 4. The Fort Worth Stockyards: the arched Stock Yards sign over Exchange Ave, brick buildings, longhorns on the cattle drive */
  function kwzstock() {
    let bldg = "";
    [[0, 70, 90, "#9a4a32"], [92, 86, 70, "#b8865a"], [250, 80, 72, "#8a3e2a"], [324, 66, 76, "#a8603a"]].forEach(b => {
      bldg += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (170 - b[1]) + '" fill="' + b[3] + '"/><rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="6" fill="#5a2a1a"/>';
      for (let i = 0; i < Math.floor(b[2] / 22); i++) bldg += '<rect x="' + (b[0] + 8 + i * 22) + '" y="' + (b[1] + 16) + '" width="10" height="16" rx="5" fill="#2a2a32"/><rect x="' + (b[0] + 8 + i * 22) + '" y="' + (b[1] + 44) + '" width="10" height="16" rx="5" fill="#2a2a32"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#kwz4)"/>' +
      '<g class="kwz-cl"><ellipse cx="200" cy="28" rx="40" ry="8" fill="#fff" opacity=".5"/></g>' +
      bldg +
      /* the arch sign */
      '<rect x="120" y="60" width="6" height="116" fill="#3a3a3e"/><rect x="274" y="60" width="6" height="116" fill="#3a3a3e"/>' +
      '<path d="M114 72q86 -46 172 0v18q-86 -40 -172 0z" fill="#f4efe2" stroke="#3a3a3e" stroke-width="3"/>' +
      '<path id="kwzarc" d="M118 84q82 -40 164 0" fill="none"/>' +
      '<text ' + font + ' font-size="9.6" fill="#8a1e1e" letter-spacing=".5"><textPath href="#kwzarc" startOffset="50%" text-anchor="middle">FORT WORTH STOCK YARDS</textPath></text>' +
      '<rect x="0" y="170" width="400" height="90" fill="#a07a52"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + (i % 2) * 4) + '" y="' + (176 + (i % 3) * 10) + '" width="12" height="4" fill="#8a6644" opacity=".7"/>').join("") +
      '<g class="kwz-walk">' + longhorn(40, 214, "#8a4a22") + longhorn(-40, 222, "#d8c8a8", 0.95) + longhorn(-110, 212, "#4a2e1e") + '</g>' +
      '<g class="kwz-walk kwz-walk2">' + longhorn(40, 238, "#c06a32", 1.05) + longhorn(-34, 230, "#2e2420", 0.9) + '</g>',
      sky("kwz4", "#5aa0e0", "#f6dcae"));
  }

  /* 5. His corner: Washington St and Graham St on the Stephenville square, a brick wall with his name tagged, the courthouse clock tower behind */
  function kwzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kwz5)"/>' +
      [[40, 24], [110, 40], [360, 30], [300, 16], [20, 60]].map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.4" fill="#fff" class="kwz-tw' + (i % 2 ? " kwz-tw2" : "") + '"/>').join("") +
      courthouse(250, 150, 0.75) +
      '<circle cx="250" cy="54" r="11" fill="#ffe08a" opacity=".18" class="kwz-glow"/>' +
      '<rect x="0" y="146" width="400" height="76" fill="#8a3a2a"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (146 + r * 7.6) + 'h400" stroke="#6a2a1e" stroke-width=".8" opacity=".6"/>').join("") +
      '<rect x="0" y="142" width="400" height="6" fill="#4a1e14"/>' +
      tag("KOE WETZEL", 12, 200, 31, GOLD, -5) + tag("KONVICTS", 222, 196, 17, "#b896e8", -4) + tag("HELL PASO", 228, 214, 13, RED, -3) +
      '<g class="kwz-sp"><circle cx="212" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kwz-sp kwz-sp2"><circle cx="218" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#3e3e42"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      /* street sign pole */
      '<rect x="350" y="60" width="5" height="162" fill="#8a9096"/>' +
      sign(282, 62, 112, "W Washington St") + sign(300, 88, 92, "N Graham St") +
      '<rect x="358" y="116" width="30" height="34" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="373" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#111">US</text><text x="373" y="144" text-anchor="middle" ' + font + ' font-size="13" fill="#111">377</text>',
      sky("kwz5", "#1a1530", "#7a3e4a"));
  }

  window.SCENES = { kwzsign: kwzsign, kwztarleton: kwztarleton, kwzsquare: kwzsquare, kwzstock: kwzstock, kwzcorner: kwzcorner };
})();
