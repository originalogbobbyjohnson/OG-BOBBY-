/* slimthug scenes (Regions tab: Houston + Texas; Homestead and Acres Homes, the Northside). CSS classes and ids prefixed st- (the page's own anim-train is kept).
   1 Northline Transit Center/HCC, the north end of the METRORail Red Line (the closest rail stop to the Northside): at-grade island platform under the canopy, the white light-rail car gliding in, the low college building behind.
   2 Acres Homes (his company restores abandoned homes there): a row of small frame houses under tall pines, the middle one freshly painted with a paint roller rolling, a FOR RENT sign swinging.
   3 The executive suite ("I stay on the top floor, got the executive suite / sit in the corner chair"): a dark top-floor office, the big corner chair, city lights through the glass, a jet cruising above the clouds.
   4 "Peaceful" ("at the crib with my kids and my momma ... my home, my place of peace"): a quiet brick house at dusk, the porch swing rocking, the moon, fireflies blinking.
   5 Homestead Rd and Tidwell Rd on the Northside: green signs, SLIM THUG tagged on the wall, the tallest downtown tower (dark granite, five-sided) far off behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes stflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.st-flk{animation:stflick 2.2s infinite}.st-flk2{animation-delay:.8s}' +
    '@keyframes stroll{0%,100%{transform:translateY(0)}50%{transform:translateY(34px)}}.st-roll{animation:stroll 2.4s ease-in-out infinite}' +
    '@keyframes stswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.st-sw{transform-box:fill-box;transform-origin:50% 0%;animation:stswing 2.6s ease-in-out infinite}' +
    '@keyframes stjet{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.st-jet{animation:stjet 12s linear infinite}' +
    '@keyframes stcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}.st-cl{animation:stcloud 7s ease-in-out infinite}.st-cl2{animation-delay:-3.5s}' +
    '@keyframes stfly{0%,100%{opacity:0}40%,60%{opacity:1}}.st-ff{animation:stfly 2.4s ease-in-out infinite}.st-ff2{animation-delay:-.8s}.st-ff3{animation-delay:-1.6s}' +
    '@keyframes stspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.st-sp{animation:stspray 1.4s ease-out infinite}.st-sp2{animation-delay:.45s}' +
    '@keyframes stbird{0%{transform:translate(0,0)}100%{transform:translate(-470px,-24px)}}.st-bird{animation:stbird 11s linear infinite}' +
    '@keyframes stwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.st-wing{transform-box:fill-box;transform-origin:50% 100%;animation:stwing .5s ease-in-out infinite}' +
    '@keyframes stcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.st-car{animation:stcar 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 7.5 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 7.5 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const RED = "#c8102e", GOLD = "#ffc93c", GREEN = "#3ccf6e", ORANGE = "#ff7a3c";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="0" width="6" height="40" fill="#5b4632"/><path d="M0 -60l16 26h-8l14 22h-10l12 20h-48l12 -20h-10l14 -22h-8z" fill="#2f5a34"/></g>';

  /* 1. Northline Transit Center/HCC, METRORail Red Line */
  function ststation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 36) + '" y="140" width="28" height="24" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><path d="M24 132h330q14 0 20 14v48h-356v-44q0 -18 6 -18z" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<path d="M354 136q12 4 18 20h-26v-20z" fill="#1d2833"/><rect x="18" y="170" width="356" height="7" fill="' + RED + '"/><rect x="18" y="179" width="356" height="3" fill="#1f4e79"/>' +
      '<rect x="30" y="140" width="24" height="44" rx="2" fill="#1d2833"/><rect x="30" y="122" width="300" height="4" fill="#555"/><path d="M200 122l-10 -24h20z" fill="none" stroke="#555" stroke-width="2"/>' +
      '<rect x="248" y="146" width="88" height="10" rx="2" fill="#111"/><text x="292" y="154" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">RED · FANNIN SOUTH</text>' +
      '<circle cx="368" cy="186" r="3.5" fill="#fff6c2"/></g>';
    const college = '<rect x="0" y="60" width="400" height="44" fill="#c9b79a"/><rect x="0" y="56" width="400" height="6" fill="#a8977a"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (12 + i * 33) + '" y="70" width="20" height="22" fill="#5d6b78"/>').join("") +
      '<rect x="150" y="40" width="100" height="22" fill="#b3a283"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">COLLEGE</text>';
    const canopy = '<path d="M0 104h400v6h-400z" fill="#d9dde0"/><path d="M0 104q200 -22 400 0" fill="#e9eef2" stroke="#a6b0b8" stroke-width="1.5"/>' +
      [40, 140, 240, 340].map((x, i) => '<rect x="' + x + '" y="108" width="5" height="26" fill="#7d8a96"/><rect class="st-flk' + (i % 2 ? " st-flk2" : "") + '" x="' + (x - 16) + '" y="110" width="36" height="3" rx="1" fill="#fff6c2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sts1)"/>' + college + pine(30, 60, .55) + pine(380, 60, .6) + canopy +
      '<rect x="0" y="130" width="400" height="80" fill="#6a6b70"/>' + train +
      '<rect x="0" y="194" width="400" height="66" fill="#c9c3b6"/><rect x="0" y="194" width="400" height="5" fill="#f2c200"/>' +
      '<rect x="20" y="214" width="300" height="36" rx="3" fill="#111"/><text x="30" y="237" ' + font + ' font-size="12.5" fill="#fff">Northline Transit Center/HCC</text>' + badge(254, 232, "RED", RED) +
      '<rect x="356" y="150" width="5" height="70" fill="#6b7178"/><rect x="336" y="136" width="46" height="26" rx="3" fill="#1f4e79" stroke="#fff" stroke-width="1.5"/><text x="359" y="148" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><text x="359" y="158" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RAIL</text>',
      sky("sts1", "#7fb7e6", "#f6e3bf"));
  }

  /* 2. Acres Homes: restored houses */
  function stacres() {
    const house = (x, body, roof, trim, shabby) => '<g transform="translate(' + x + ' 0)"><path d="M0 120l50 -36l50 36z" fill="' + roof + '"/><rect x="6" y="120" width="88" height="66" fill="' + body + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M6 ' + (128 + i * 10) + 'h88" stroke="' + (shabby ? "#8a7d6a" : "rgba(0,0,0,.08)") + '" stroke-width="1"/>').join("") +
      '<rect x="16" y="134" width="22" height="22" fill="' + (shabby ? "#5a5248" : "#9ad1f0") + '" stroke="' + trim + '" stroke-width="3"/><rect x="58" y="146" width="22" height="40" fill="' + (shabby ? "#4a3a2a" : trim) + '"/>' +
      '<rect x="0" y="186" width="100" height="6" fill="#8a8f96"/>' + (shabby ? '<path d="M20 136l14 16M34 136l-14 16" stroke="#3a3228" stroke-width="2"/>' : '') + '</g>';
    const roller = '<g class="st-roll"><rect x="226" y="104" width="4" height="40" fill="#555"/><rect x="214" y="96" width="28" height="10" rx="4" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="1.5"/></g>';
    const ladder = '<path d="M176 192l26 -80M196 192l26 -80" stroke="#c9a24a" stroke-width="3"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (178 + i * 3.6) + ' ' + (184 - i * 11) + 'h20" stroke="#c9a24a" stroke-width="2"/>').join("");
    const rent = '<g transform="translate(330 150)"><rect x="-2" y="0" width="4" height="46" fill="#6b4a2a"/><rect x="-20" y="0" width="40" height="3" fill="#6b4a2a"/><g class="st-sw"><rect x="-18" y="4" width="36" height="22" fill="#fff" stroke="' + RED + '" stroke-width="2"/><text x="0" y="13" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + RED + '">FOR</text><text x="0" y="22" text-anchor="middle" ' + font + ' font-size="7" fill="' + RED + '">RENT</text></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sts2)"/>' + pine(24, 74, 1) + pine(370, 70, 1.05) + pine(200, 60, .8) +
      '<rect x="0" y="150" width="400" height="110" fill="#6a9a4a"/>' +
      house(10, "#b9ab94", "#5a4a3a", "#7a6a56", true) + house(150, "#f2f0e6", "#2f3b4a", "#2e7d4f", false) + house(290, "#cbb48e", "#4a3a2e", "#8a6a3e", true) +
      ladder + roller + '<path d="M150 120h100" stroke="' + GOLD + '" stroke-width="0"/>' + rent +
      '<rect x="0" y="210" width="400" height="50" fill="#55565c"/><path d="M0 236h400" stroke="#e6e6e6" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="120" y="216" width="160" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ACRES HOMES</text>',
      sky("sts2", "#8cc4ee", "#f3ead2"));
  }

  /* 3. The executive suite */
  function stsuite() {
    const towers = Array.from({ length: 14 }, (_, i) => { const x = i * 30, h = 40 + (i * 37) % 70; return '<rect x="' + x + '" y="' + (190 - h) + '" width="24" height="' + h + '" fill="#1b2433"/>' +
      Array.from({ length: Math.floor(h / 12) }, (_, r) => '<rect class="st-flk' + ((i + r) % 2 ? " st-flk2" : "") + '" x="' + (x + 5) + '" y="' + (196 - h + r * 12) + '" width="4" height="4" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 14) + '" y="' + (196 - h + r * 12) + '" width="4" height="4" fill="#ffd98a" opacity=".5"/>').join(""); }).join("");
    const clouds = '<g class="st-cl"><ellipse cx="90" cy="60" rx="46" ry="12" fill="#3a4a66" opacity=".8"/><ellipse cx="120" cy="54" rx="30" ry="10" fill="#45577a" opacity=".8"/></g><g class="st-cl st-cl2"><ellipse cx="300" cy="44" rx="50" ry="12" fill="#3a4a66" opacity=".8"/></g>';
    const jet = '<g class="st-jet"><g transform="translate(0 36)"><path d="M0 6h46l10 -4h4l-6 8h-54z" fill="#e8ecf0"/><path d="M20 6l10 -10h6l-6 10z" fill="#c9d0d6"/><path d="M22 10l10 8h6l-6 -8z" fill="#c9d0d6"/><circle cx="58" cy="6" r="1.5" fill="#ff4f4f" class="st-flk"/></g></g>';
    const window_ = '<rect x="20" y="16" width="360" height="176" fill="url(#sts3)"/>' + stars(26) + clouds + jet + towers +
      [20, 110, 200, 290, 380].map(x => '<rect x="' + (x - 3) + '" y="16" width="6" height="176" fill="#2a2a2e"/>').join("") + '<rect x="17" y="12" width="366" height="6" fill="#2a2a2e"/>';
    const desk = '<path d="M60 206h200l14 20h-228z" fill="#3b2418"/><rect x="50" y="226" width="236" height="10" fill="#2a170f"/><rect x="70" y="236" width="12" height="24" fill="#2a170f"/><rect x="254" y="236" width="12" height="24" fill="#2a170f"/>' +
      '<rect x="110" y="196" width="40" height="10" rx="2" fill="#c9a24a"/><rect x="190" y="194" width="30" height="12" rx="2" fill="#222"/>';
    const chair = '<g><rect x="300" y="120" width="70" height="96" rx="16" fill="#151515" stroke="' + GOLD + '" stroke-width="2"/><path d="M312 136h46M312 156h46M312 176h46" stroke="#2e2e2e" stroke-width="3"/><rect x="292" y="196" width="86" height="24" rx="8" fill="#151515"/><rect x="330" y="220" width="10" height="24" fill="#333"/><path d="M308 252l27 -10l27 10" stroke="#333" stroke-width="5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#120d0a"/>' + window_ +
      '<rect x="0" y="192" width="400" height="68" fill="#2a1d14"/>' + desk + chair +
      '<rect x="120" y="244" width="140" height="14" rx="3" fill="#111" opacity=".9"/><text x="190" y="254" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">EXECUTIVE SUITE · TOP FLOOR</text>',
      sky("sts3", "#0b1430", "#2c3d66"));
  }

  /* 4. Peaceful: the crib at dusk */
  function stpeace() {
    const brick = '<rect x="80" y="104" width="240" height="96" fill="#9a5a3e"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M80 ' + (112 + r * 10) + 'h240" stroke="#7d4630" stroke-width="1"/>').join("") +
      '<path d="M66 106l134 -54l134 54z" fill="#3a3a44"/><rect x="66" y="104" width="268" height="6" fill="#2a2a32"/>' +
      '<rect x="104" y="122" width="40" height="34" fill="#ffd98a" class="st-flk"/><path d="M124 122v34M104 139h40" stroke="#f2f0e6" stroke-width="3"/><rect x="256" y="122" width="40" height="34" fill="#ffd98a"/><path d="M276 122v34M256 139h40" stroke="#f2f0e6" stroke-width="3"/>' +
      '<rect x="182" y="132" width="36" height="68" fill="#4a2e1e"/><circle cx="212" cy="168" r="2.5" fill="' + GOLD + '"/>';
    const porch = '<rect x="70" y="200" width="260" height="8" fill="#d8d2c4"/><rect x="60" y="208" width="280" height="10" fill="#bfb7a6"/>';
    const swing = '<g transform="translate(250 162)"><path d="M0 0v18M48 0v18" stroke="#888" stroke-width="1.5"/><g class="st-sw"><path d="M0 0v20M48 0v20" stroke="#aaa" stroke-width="1.5"/><rect x="-4" y="20" width="56" height="8" rx="2" fill="#f2f0e6"/><rect x="-4" y="10" width="56" height="4" rx="2" fill="#f2f0e6"/></g></g>';
    const moon = '<circle cx="330" cy="42" r="20" fill="#fff4cc"/><circle cx="338" cy="36" r="20" fill="#2a2f55"/>';
    const ff = (x, y, c) => '<circle class="st-ff ' + c + '" cx="' + x + '" cy="' + y + '" r="2.2" fill="#e8ff7a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sts4)"/>' + stars(18) + moon + pine(30, 120, 1.1) + pine(372, 116, 1.15) + brick + porch + swing +
      '<rect x="0" y="218" width="400" height="42" fill="#3f6b35"/><path d="M180 218l-20 42h80l-20 -42z" fill="#8a8f96"/>' +
      ff(40, 200, "") + ff(90, 228, "st-ff2") + ff(350, 210, "st-ff3") + ff(320, 236, "") + ff(150, 240, "st-ff3") + ff(240, 92, "st-ff2") +
      '<rect x="20" y="236" width="128" height="18" rx="3" fill="#111" opacity=".85"/><text x="84" y="249" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">PEACEFUL</text>',
      sky("sts4", "#2a2f55", "#d98a5a"));
  }

  /* 5. Homestead Rd and Tidwell Rd */
  function stcorner() {
    const tower = '<g opacity=".95"><path d="M300 150v-118l14 -10l14 10v118z" fill="#3e3e46"/><path d="M314 22l14 10v118h-14z" fill="#2c2c33"/>' +
      Array.from({ length: 14 }, (_, r) => '<path d="M302 ' + (40 + r * 8) + 'h24" stroke="#5a5a64" stroke-width="1"/>').join("") +
      '<path d="M270 150v-56h18v56z" fill="#55606c"/><path d="M340 150v-70h16v70z" fill="#4a5560"/><path d="M240 150v-36h20v36z" fill="#606a74"/></g>';
    const bird = '<g class="st-bird"><g transform="translate(420 40)"><path class="st-wing" d="M0 6q8 -10 16 0q8 -10 16 0" stroke="#2a2438" stroke-width="3" fill="none"/></g></g>';
    const wall = '<rect x="0" y="118" width="230" height="102" fill="#7d8a7a"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (126 + r * 10) + 'h230" stroke="#6a7568" stroke-width="1"/>').join("") +
      tag("SLIM THUG", 14, 176, 38, GOLD, -6) + tag("BOSS HOGG", 70, 206, 16, GREEN, -4) +
      '<circle class="st-sp" cx="212" cy="146" r="3" fill="' + GOLD + '"/><circle class="st-sp st-sp2" cx="220" cy="154" r="2.5" fill="' + GOLD + '"/>';
    const car = '<g class="st-car"><g transform="translate(0 204)"><rect x="0" y="10" width="110" height="20" rx="6" fill="' + GREEN + '"/><path d="M20 10l12 -12h44l14 12z" fill="' + GREEN + '"/><path d="M36 0h36l8 8h-50z" fill="#cfe9ff" opacity=".7"/>' +
      '<circle cx="24" cy="32" r="9" fill="#cfd5db" stroke="#222" stroke-width="3"/><circle cx="88" cy="32" r="9" fill="#cfd5db" stroke="#222" stroke-width="3"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sts5)"/>' + tower + bird +
      '<rect x="0" y="150" width="400" height="50" fill="#6a9a4a"/>' + pine(380, 112, .7) + wall +
      '<rect x="0" y="220" width="400" height="40" fill="#4e4f55"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="20 14"/>' +
      '<rect x="300" y="84" width="6" height="140" fill="#6b7178"/>' + sign(236, 86, 132, "HOMESTEAD RD") + sign(246, 112, 116, "TIDWELL RD") + car,
      sky("sts5", "#79b8ea", "#f8e2c0"));
  }

  window.SCENES = { ststation: ststation, stacres: stacres, stsuite: stsuite, stpeace: stpeace, stcorner: stcorner };
})();
