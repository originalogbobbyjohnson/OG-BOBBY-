/* goldlink scenes (Regions tab: THE DMV; born Washington D.C., raised Bowie MD then Northern Virginia, Hayfield Secondary in Alexandria). CSS classes prefixed gl- (the page's own anim-train is kept).
   1 Franconia-Springfield (Blue Line), the end of the line by Hayfield: at-grade platform under the long white canopy, a Blue Line train sliding in.
   2 Hayfield Secondary School, Telegraph Rd (his high school): low brick school, orange Hawks trim, the planetarium dome, a hawk circling.
   3 The Howard Theatre in Shaw, D.C.: cream facade with tall arched windows and a blinking marquee; go-go night ("Your favorite band was Backyard").
   4 The Woodrow Wilson Bridge over the Potomac at dusk, Virginia to Maryland: the V-shaped piers, cars crossing, the drawspan lights.
   5 Telegraph Rd and Hayfield Rd: green signs, GOLDLINK tagged, the George Washington Masonic Memorial tower on the hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes glflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.gl-flk{animation:glflick 2.4s infinite}.gl-flk2{animation-delay:.8s}' +
    '@keyframes glblink{0%,100%{opacity:.25}50%{opacity:1}}.gl-bl{animation:glblink 1.2s ease-in-out infinite}.gl-bl2{animation-delay:-.6s}' +
    '@keyframes glwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.gl-walk{animation:glwalk 11s linear infinite}.gl-walk2{animation-delay:-3.6s}.gl-walk3{animation-delay:-7.2s}' +
    '@keyframes glwalkb{from{transform:translateX(440px)}to{transform:translateX(-40px)}}.gl-walkb{animation:glwalkb 13s linear infinite}.gl-walkb2{animation-delay:-6.5s}' +
    '@keyframes glhawk{0%{transform:translate(60px,60px)}25%{transform:translate(200px,30px)}50%{transform:translate(330px,62px)}75%{transform:translate(200px,86px)}100%{transform:translate(60px,60px)}}.gl-hawk{animation:glhawk 12s ease-in-out infinite}' +
    '@keyframes glcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.gl-car{animation:glcar 5s linear infinite}.gl-car2{animation-delay:-2.5s}' +
    '@keyframes glcarb{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.gl-carb{animation:glcarb 6s linear infinite}.gl-carb2{animation-delay:-3s}' +
    '@keyframes glwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.gl-wave{animation:glwave 4s ease-in-out infinite}.gl-wave2{animation-delay:-2s}' +
    '@keyframes glbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.gl-bo{animation:glbounce .5s ease-in-out infinite}.gl-bo2{animation-delay:-.25s}' +
    '@keyframes glspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gl-sp{animation:glspray 1.4s ease-out infinite}.gl-sp2{animation-delay:.45s}' +
    '@keyframes glstar{0%,100%{opacity:.2}50%{opacity:1}}.gl-st{animation:glstar 2s ease-in-out infinite}.gl-st2{animation-delay:-1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const dot = (x, y, c, txt) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (cls, x, y, c, c2) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="4.5" fill="#2a1a1a"/><rect x="' + (x - 5) + '" y="' + (y - 17) + '" width="10" height="14" rx="3" fill="' + c + '"/><rect x="' + (x - 4) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/><rect x="' + (x + 0.5) + '" y="' + (y - 3) + '" width="3.5" height="11" fill="' + c2 + '"/></g>';
  const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="52" height="12" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="28" height="9" rx="3" fill="' + c + '"/><rect x="13" y="' + (y - 5) + '" width="10" height="5" fill="#cfe8ff"/><rect x="26" y="' + (y - 5) + '" width="10" height="5" fill="#cfe8ff"/><circle cx="12" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="40" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="51" cy="' + (y + 4) + '" r="2" fill="#fff3b0"/></g>';
  const BL = "#0078ae", GOLD = "#f2c14e", ORNG = "#ff7a2f", TEAL = "#4fd1c5";

  /* 1. Franconia-Springfield, at grade, end of the Blue Line */
  function glstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (44 + i * 46) + '" y="112" width="30" height="20" rx="3" fill="#1d2833"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="102" width="330" height="58" rx="8" fill="#d9dde1" stroke="#7d858d" stroke-width="2"/>' + win +
      '<rect x="24" y="138" width="330" height="4" fill="' + BL + '"/><rect x="24" y="142" width="330" height="3" fill="#bf0d3e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (68 + i * 60) + '" y="136" width="20" height="22" fill="#c4c9ce" stroke="#9aa1a8"/>').join("") +
      '<rect x="332" y="106" width="20" height="50" rx="5" fill="#bfc4c9"/><circle cx="342" cy="152" r="3.5" fill="#fff6c2"/>' +
      '<rect x="246" y="104" width="84" height="12" rx="2" fill="#111"/><text x="288" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb03c">DOWNTOWN LARGO</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls1)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#ffe7b0" opacity=".85"/>' +
      /* treeline behind the yard */
      '<g fill="#2f4a3a"><ellipse cx="30" cy="104" rx="50" ry="22"/><ellipse cx="120" cy="100" rx="60" ry="20"/><ellipse cx="250" cy="102" rx="70" ry="22"/><ellipse cx="370" cy="100" rx="50" ry="24"/></g>' +
      /* the long white canopy over the platform */
      '<path d="M0 60L200 44L400 60V70L200 54L0 70z" fill="#eef0f2" stroke="#9aa3ab" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (18 + i * 74) + '" y="66" width="6" height="96" fill="#8f99a3"/>').join("") +
      '<g class="gl-flk"><rect x="70" y="66" width="44" height="3" fill="#fff3c4"/></g><g class="gl-flk gl-flk2"><rect x="270" y="66" width="44" height="3" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="162" width="400" height="6" fill="#e9d36a"/><rect x="0" y="168" width="400" height="30" fill="#b9b2a6"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="165" r="1.6" fill="#fff" class="gl-bl' + (i % 2 ? " gl-bl2" : "") + '"/>').join("") +
      /* the hexagon floor tiles of a Metro platform */
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 26) + ' 182l8 -6h10l8 6l-8 6h-10z" fill="#a39b8e"/>').join("") +
      '<rect x="0" y="198" width="400" height="62" fill="#3a3842"/><path d="M0 214h400M0 236h400" stroke="#6b6a72" stroke-width="3"/>' +
      '<rect x="40" y="206" width="250" height="30" rx="3" fill="#111"/><text x="54" y="227" ' + font + ' font-size="15" fill="#fff">Franconia-Springfield</text>' + dot(268, 221, BL, "BL") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff8e8">END OF THE BLUE LINE · SPRINGFIELD, VA</text>',
      sky("gls1", "#28305e", "#f0a070"));
  }

  /* 2. Hayfield Secondary School, Telegraph Rd, Alexandria */
  function glhayfield() {
    const bricks = (x, y, w, h) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (y + 8 + i * 8) + 'h' + w + '" stroke="#7d4a36" stroke-width="1"/>').join("");
    const winrow = (x, y, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x + i * 24) + '" y="' + y + '" width="16" height="14" fill="#a9d4ec" stroke="#e6e2da" stroke-width="2"/>').join("");
    const hawk = '<g class="gl-hawk"><path d="M-14 0q7 -8 14 0q7 -8 14 0" stroke="#5a3a22" stroke-width="3" fill="none"/><circle cx="0" cy="1" r="2" fill="#5a3a22"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls2)"/>' + hawk +
      /* planetarium dome */
      '<path d="M236 112q0 -50 50 -50t50 50z" fill="#d8dde2" stroke="#9aa3ab" stroke-width="2"/><path d="M250 112q0 -36 36 -42M322 112q0 -36 -36 -42" stroke="#b5bcc4" stroke-width="1.5" fill="none"/><rect x="232" y="110" width="108" height="8" fill="#b5bcc4"/>' +
      '<rect x="10" y="112" width="380" height="80" fill="#a45a3e"/>' + bricks(10, 112, 380, 80) +
      '<rect x="6" y="104" width="388" height="10" fill="' + ORNG + '"/><rect x="6" y="114" width="388" height="3" fill="#fff"/>' +
      winrow(24, 128, 6) + winrow(250, 128, 6) + winrow(24, 160, 6) + winrow(250, 160, 6) +
      /* glass entrance */
      '<rect x="170" y="118" width="60" height="74" fill="#7fb6d6" stroke="#e6e2da" stroke-width="3"/><path d="M190 118v74M210 118v74M170 146h60" stroke="#e6e2da" stroke-width="2"/>' +
      '<rect x="150" y="90" width="100" height="20" rx="2" fill="#8a8f96"/><text x="200" y="104" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HAYFIELD</text>' +
      '<rect x="0" y="192" width="400" height="68" fill="#6f9a50"/><path d="M170 192l-30 68h120l-30 -68z" fill="#c9c2b4"/>' +
      '<rect x="20" y="204" width="128" height="34" rx="3" fill="#5c6168" stroke="' + ORNG + '" stroke-width="3"/><text x="84" y="218" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HAYFIELD SECONDARY</text><text x="84" y="231" text-anchor="middle" ' + font + ' font-size="9" fill="' + ORNG + '">HOME OF THE HAWKS</text>' +
      person("gl-walk", 0, 254, ORNG, "#333") + person("gl-walk gl-walk2", 0, 255, "#e6e2da", "#444") + person("gl-walkb", 0, 253, "#8a8f96", "#222") +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a1a">TELEGRAPH RD · ALEXANDRIA, VA · CLASS OF THE LINK</text>',
      sky("gls2", "#8fd0f0", "#fdeede"));
  }

  /* 3. The Howard Theatre, Shaw, D.C. — go-go night */
  function glgogo() {
    const arch = (x) => '<path d="M' + x + ' 150v-56q0 -18 18 -18t18 18v56z" fill="#3a2a4a" stroke="#cbbfa6" stroke-width="2"/><path d="M' + (x + 18) + ' 76v74M' + x + ' 112h36" stroke="#cbbfa6" stroke-width="1.5"/><path d="M' + (x + 4) + ' 146v-50q0 -14 14 -14t14 14v50z" fill="' + GOLD + '" opacity=".35" class="gl-bl"/>';
    const bulbs = Array.from({ length: 24 }, (_, i) => '<circle cx="' + (96 + i * 9) + '" cy="164" r="2.2" fill="#ffe8a8" class="gl-bl' + (i % 2 ? " gl-bl2" : "") + '"/>').join("") +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (96 + i * 9) + '" cy="194" r="2.2" fill="#ffe8a8" class="gl-bl' + (i % 2 ? "" : " gl-bl2") + '"/>').join("");
    const conga = (x, cls) => '<g class="' + cls + '"><path d="M' + (x - 9) + ' 236l3 -26h12l3 26z" fill="#b5542a" stroke="#5a2a14" stroke-width="1.5"/><ellipse cx="' + x + '" cy="210" rx="6" ry="2" fill="#f4e6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls3)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + ((i * 23) % 40 + 8) + '" r="1" fill="#fff" class="gl-st' + (i % 2 ? " gl-st2" : "") + '"/>').join("") +
      '<rect x="0" y="120" width="70" height="90" fill="#2a2238"/><rect x="330" y="110" width="70" height="100" fill="#2a2238"/>' +
      /* cream facade, cornice, tall arches */
      '<rect x="70" y="58" width="260" height="152" fill="#e8dcc0"/><rect x="64" y="52" width="272" height="10" fill="#d4c6a6"/><path d="M64 52l136 -18l136 18z" fill="#d4c6a6"/>' +
      arch(92) + arch(146) + arch(218) + arch(272) +
      /* marquee */
      '<rect x="88" y="156" width="224" height="44" rx="3" fill="#1a1424" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="185" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '">HOWARD THEATRE</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3540"/><rect x="0" y="210" width="400" height="6" fill="#8a8292"/>' +
      conga(40, "gl-bo") + conga(58, "gl-bo gl-bo2") + conga(354, "gl-bo gl-bo2") + conga(372, "gl-bo") +
      person("gl-walk", 0, 236, GOLD, "#222") + person("gl-walk gl-walk2", 0, 237, TEAL, "#333") + person("gl-walkb", 0, 238, ORNG, "#222") +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#ffeacc">SHAW, D.C. · GO-GO NIGHT · BACKYARD ON THE BILL</text>',
      sky("gls3", "#0f0a20", "#4a2a5e"));
  }

  /* 4. The Woodrow Wilson Bridge over the Potomac, Virginia to Maryland */
  function glbridge() {
    const vpier = (x) => '<path d="M' + (x - 22) + ' 118l18 22v56h8v-56l18 -22h-8l-14 16l-14 -16z" fill="#cfd3d6" stroke="#8e969c" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls4)"/>' +
      '<circle cx="70" cy="70" r="22" fill="#ffd08a" opacity=".9"/>' +
      '<g fill="#2e3a4a"><path d="M0 150q40 -20 90 -8v20H0z"/><path d="M310 146q50 -16 90 0v18H310z"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2a4a6a"/>' +
      '<g class="gl-wave"><path d="M0 200q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#4f7ea6" stroke-width="2" fill="none"/></g>' +
      '<g class="gl-wave gl-wave2"><path d="M0 226q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#4f7ea6" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="210" width="400" height="10" fill="#ffd08a" opacity=".15"/>' +
      vpier(50) + vpier(130) + vpier(270) + vpier(350) +
      /* the drawspan in the middle, raised a touch, with its lights */
      '<rect x="160" y="108" width="40" height="10" fill="#bfc4c8" stroke="#8e969c" stroke-width="1.5" transform="rotate(-24 160 113)"/><rect x="200" y="108" width="40" height="10" fill="#bfc4c8" stroke="#8e969c" stroke-width="1.5" transform="rotate(24 240 113)"/>' +
      '<rect x="176" y="106" width="10" height="90" fill="#aab0b5"/><rect x="214" y="106" width="10" height="90" fill="#aab0b5"/>' +
      '<circle cx="181" cy="104" r="3" fill="#ff4a4a" class="gl-bl"/><circle cx="219" cy="104" r="3" fill="#ff4a4a" class="gl-bl gl-bl2"/>' +
      '<rect x="0" y="108" width="160" height="12" fill="#d6dadd" stroke="#8e969c" stroke-width="1.5"/><rect x="240" y="108" width="160" height="12" fill="#d6dadd" stroke="#8e969c" stroke-width="1.5"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (8 + i * 40) + '" y="98" width="2" height="10" fill="#8e969c"/><circle cx="' + (9 + i * 40) + '" cy="97" r="2" fill="#ffe8a8" class="gl-bl' + (i % 2 ? " gl-bl2" : "") + '"/>').join("") +
      car("gl-car", 96, "#c8102e") + car("gl-car gl-car2", 96, "#f7f3ea") + car("gl-carb", 96, GOLD) + car("gl-carb gl-carb2", 96, "#3a6ea5") +
      '<text x="24" y="146" ' + font + ' font-size="10" fill="#e8eef4">VA</text><text x="360" y="142" ' + font + ' font-size="10" fill="#e8eef4">MD</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#e8eef4">WOODROW WILSON BRIDGE · THE POTOMAC · THE DMV</text>',
      sky("gls4", "#3a2f66", "#ff9a6a"));
  }

  /* 5. Telegraph Rd and Hayfield Rd; the Masonic Memorial tower behind */
  function glcorner() {
    const tower = '<g fill="#b9b4aa" stroke="#8a857c" stroke-width="1.5">' +
      '<rect x="216" y="94" width="96" height="40"/><rect x="230" y="66" width="68" height="30"/><rect x="242" y="44" width="44" height="24"/><rect x="250" y="30" width="28" height="16"/><path d="M250 30l14 -18l14 18z"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (222 + i * 15) + '" y="100" width="6" height="30" fill="#8a857c"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (236 + i * 16) + '" y="72" width="5" height="20" fill="#8a857c"/>').join("") +
      '<rect x="256" y="50" width="4" height="14" fill="#8a857c"/><rect x="268" y="50" width="4" height="14" fill="#8a857c"/>' +
      '<g class="gl-st"><circle cx="264" cy="10" r="2" fill="#ffe8a8"/></g>' +
      '<path d="M150 134q114 -20 228 0z" fill="#3e5a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gls5)"/>' +
      '<g fill="#2e4a34"><ellipse cx="60" cy="134" rx="80" ry="18"/><ellipse cx="380" cy="132" rx="60" ry="16"/></g>' + tower +
      '<rect x="0" y="132" width="400" height="92" fill="#4a3a36"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#3a2c29" stroke-width="1"/>').join("") +
      tag("GOLDLINK", 16, 194, 44, GOLD, -6) + tag("FUTURE BOUNCE", 110, 216, 16, ORNG, -3) + tag("DMV", 276, 212, 24, TEAL, -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#55505a"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("gl-car", 238, "#3a6ea5") + car("gl-carb", 244, ORNG) +
      '<rect x="350" y="102" width="6" height="122" fill="#2f2f2f"/>' + sign(286, 104, 108, "Telegraph Rd") + sign(276, 130, 118, "Hayfield Rd") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="gl-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="gl-sp"><circle cx="270" cy="178" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gl-sp gl-sp2"><circle cx="276" cy="172" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<text x="120" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff5e8">HAYFIELD · FAIRFAX COUNTY, VA</text>',
      sky("gls5", "#1c1838", "#f08a5a"));
  }

  window.SCENES = { glstation: glstation, glhayfield: glhayfield, glgogo: glgogo, glbridge: glbridge, glcorner: glcorner };
})();
