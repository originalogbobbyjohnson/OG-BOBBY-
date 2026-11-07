/* dee1 scenes (Regions tab: New Orleans; New Orleans East, where Dee-1 grew up). CSS classes and ids prefixed d1- (the page's own anim-train is kept).
   1 Canal St / Carondelet St on the Canal streetcar (line 47): the red car rolls in on the palm-lined neutral ground ("I was walking on Canal" - 3's Up).
   2 The LSU Quad in Baton Rouge, where he graduated in 2008: tan stucco and red tile roofs under live oaks, purple and gold banners waving.
   3 His middle-school math classroom (he taught before rapping full time; Sallie Mae Back): chalkboard algebra, a ceiling fan turning, a PAID IN FULL letter.
   4 Congo Square in Treme, where he played the Congo Square Rhythms Festival: brick circles under live oaks, drums, music notes rising.
   5 Read Blvd and Lake Forest Blvd in New Orleans East: green signs, DEE-1 tagged on the wall, the I-10 High Rise bridge behind. Every 9 avoided / straight-stemmed. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes d1flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.d1-flk{animation:d1flick 2.2s infinite}.d1-flk2{animation-delay:.7s}' +
    '@keyframes d1sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.d1-sway{transform-box:fill-box;transform-origin:50% 0%;animation:d1sway 3s ease-in-out infinite}.d1-sway2{animation-delay:-1.5s}' +
    '@keyframes d1fan{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.d1-fan{transform-box:fill-box;transform-origin:50% 50%;animation:d1fan 1.6s linear infinite}' +
    '@keyframes d1note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-80px);opacity:0}}.d1-note{animation:d1note 3.2s ease-out infinite}.d1-n2{animation-delay:-1.1s}.d1-n3{animation-delay:-2.2s}' +
    '@keyframes d1drum{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.d1-drum{animation:d1drum .5s ease-in-out infinite}.d1-drum2{animation-delay:-.25s}' +
    '@keyframes d1sp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.d1-sp{animation:d1sp 1.4s ease-out infinite}.d1-sp2{animation-delay:.45s}' +
    '@keyframes d1car{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.d1-car{animation:d1car 6s linear infinite}' +
    '@keyframes d1blink{0%,100%{opacity:.3}50%{opacity:1}}.d1-bl{animation:d1blink 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h) => '<path d="M' + x + ' ' + y + 'q-3 -' + (h / 2) + ' 2 -' + h + '" stroke="#6b5232" stroke-width="5" fill="none"/>' +
    '<g class="d1-sway" fill="#2f6b3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q14 -12 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-14 -12 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -24 -16q16 2 24 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 24 -16q-16 2 -24 16z"/></g>';
  const oak = (x, y, r) => '<rect x="' + (x - 6) + '" y="' + (y - 4) + '" width="12" height="' + (r * 1.1) + '" fill="#4a3826"/><g fill="#355c33"><circle cx="' + x + '" cy="' + (y - r * .3) + '" r="' + r + '"/><circle cx="' + (x - r * .8) + '" cy="' + y + '" r="' + (r * .7) + '"/><circle cx="' + (x + r * .8) + '" cy="' + y + '" r="' + (r * .7) + '"/></g>' +
    '<g class="d1-sway d1-sway2" stroke="#9aa58a" stroke-width="2" opacity=".85">' + [-.6, -.2, .3, .7].map(k => '<path d="M' + (x + r * k) + ' ' + (y + r * .3) + 'v' + (r * .5) + '"/>').join("") + '</g>';

  /* 1. Canal streetcar at Carondelet */
  function d1station() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (58 + i * 38) + '" y="122" width="28" height="26" rx="3" fill="#2a1a1a"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="112" width="310" height="74" rx="8" fill="#c62828" stroke="#7a1414" stroke-width="2"/>' + win +
      '<rect x="40" y="152" width="310" height="5" fill="#f2d16b"/><path d="M48 112q147 -16 294 0" fill="#9c1c1c"/><path d="M195 98v-30" stroke="#333" stroke-width="2"/><path d="M180 68h30" stroke="#333" stroke-width="2"/>' +
      '<rect x="300" y="116" width="40" height="10" rx="2" fill="#111"/><text x="320" y="124" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">CANAL</text>' +
      '<circle cx="346" cy="170" r="3.5" fill="#fff6c2"/><circle cx="90" cy="188" r="8" fill="#222"/><circle cx="300" cy="188" r="8" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d1s1)"/>' +
      '<path d="M0 40h400" stroke="#333" stroke-width="1.5"/>' +
      '<g fill="#6e5a7a">' + [[0, 70, 90], [96, 54, 70], [290, 60, 60], [350, 80, 50]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="110"/>').join("") + '</g>' +
      '<g stroke="#2b2230" stroke-width="2" fill="none"><path d="M0 98h96M96 86h70M290 92h60"/></g>' +
      '<g class="d1-flk"><rect x="14" y="80" width="8" height="10" fill="#ffd27a"/><rect x="300" y="72" width="8" height="10" fill="#ffd27a"/></g><g class="d1-flk d1-flk2"><rect x="120" y="64" width="8" height="10" fill="#ffd27a"/><rect x="364" y="94" width="8" height="10" fill="#ffd27a"/></g>' +
      palm(20, 190, 90) + palm(378, 190, 84) +
      car +
      '<rect x="0" y="188" width="400" height="6" fill="#8a8578"/><rect x="0" y="194" width="400" height="66" fill="#6f8a5a"/><path d="M0 204h400M0 214h400" stroke="#5a5550" stroke-width="3"/>' +
      '<rect x="104" y="220" width="192" height="32" rx="3" fill="#111"/><rect x="114" y="226" width="26" height="20" rx="4" fill="#c62828"/><text x="127" y="241" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">47</text>' +
      '<text x="148" y="235" ' + font + ' font-size="11" fill="#fff">Canal at Carondelet</text><text x="148" y="247" ' + font + ' font-size="8" fill="#cfd8dc">Canal Streetcar</text>',
      sky("d1s1", "#20234a", "#e88e5a"));
  }

  /* 2. LSU Quad */
  function d1lsu() {
    const bld = (x, w) => '<rect x="' + x + '" y="110" width="' + w + '" height="90" fill="#e2c99a"/><path d="M' + (x - 6) + ' 112L' + (x + w / 2) + ' 86 ' + (x + w + 6) + ' 112z" fill="#b5502e"/>' +
      Array.from({ length: Math.floor(w / 22) }, (_, i) => '<path d="M' + (x + 8 + i * 22) + ' 186v-26q6 -10 12 0v26z" fill="#6b4b2e"/>').join("");
    const banner = (x, c, cls) => '<path d="M' + x + ' 60v80" stroke="#333" stroke-width="2"/><g class="d1-sway ' + cls + '"><rect x="' + (x + 1) + '" y="62" width="16" height="34" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d1s2)"/>' +
      bld(20, 130) + bld(250, 130) +
      '<rect x="160" y="90" width="80" height="110" fill="#e8d2a6"/><path d="M152 92L200 60 248 92z" fill="#b5502e"/><path d="M186 200v-40q14 -18 28 0v40z" fill="#5a3e26"/>' +
      [170, 222].map(x => '<rect x="' + x + '" y="112" width="10" height="20" fill="#6b4b2e"/>').join("") +
      banner(150, "#461d7c", "") + banner(236, "#fdd023", "d1-sway2") +
      oak(60, 200, 34) + oak(340, 204, 30) +
      '<rect x="0" y="210" width="400" height="50" fill="#6f9a4a"/><path d="M150 260l30 -50h40l30 50z" fill="#cfc2a6"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#461d7c">LSU · BATON ROUGE</text>',
      sky("d1s2", "#3a2a6a", "#f6b56b"));
  }

  /* 3. The math classroom */
  function d1class() {
    const desk = (x, y) => '<rect x="' + x + '" y="' + y + '" width="54" height="8" fill="#b07a44"/><path d="M' + (x + 6) + ' ' + (y + 8) + 'v22M' + (x + 48) + ' ' + (y + 8) + 'v22" stroke="#555" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="#e6dcc0"/><rect x="0" y="190" width="400" height="70" fill="#a98b62"/>' +
      '<rect x="40" y="40" width="250" height="120" fill="#2f4a3a" stroke="#8a6a44" stroke-width="6"/>' +
      '<text x="60" y="78" font-family="Permanent Marker, cursive" font-size="20" fill="#f4f1e6">2x + 6 = 14</text>' +
      '<text x="60" y="108" font-family="Permanent Marker, cursive" font-size="20" fill="#f4f1e6">x = 4</text>' +
      '<text x="60" y="142" textLength="220" lengthAdjust="spacingAndGlyphs" font-family="Permanent Marker, cursive" font-size="13" fill="#fdd023">BE REAL · BE RIGHTEOUS · BE RELEVANT</text>' +
      '<rect x="60" y="160" width="40" height="4" fill="#fff"/>' +
      '<g transform="translate(300 18)"><circle cx="40" cy="12" r="4" fill="#555"/><g class="d1-fan"><path d="M40 12l-34 4 0 -6zM40 12l34 -4 0 6z" fill="#7a5a3a"/></g></g>' +
      '<rect x="306" y="58" width="76" height="96" fill="#fdfcf6" stroke="#bbb" stroke-width="2"/><path d="M316 76h56M316 88h48M316 100h52" stroke="#9aa" stroke-width="2"/>' +
      '<g class="d1-bl"><rect x="312" y="113" width="64" height="20" rx="3" fill="none" stroke="#c62828" stroke-width="3" transform="rotate(-10 344 123)"/><text x="344" y="127" text-anchor="middle" transform="rotate(-10 344 123)" ' + font + ' font-size="8.5" fill="#c62828">PAID IN FULL</text></g>' +
      desk(40, 200) + desk(130, 206) + desk(230, 200) + desk(320, 206) +
      '<circle cx="268" cy="196" r="7" fill="#c62828"/><path d="M268 189v-4" stroke="#4a3826" stroke-width="2"/>',
      "");
  }

  /* 4. Congo Square */
  function d1congo() {
    const drum = (x, cls) => '<g class="d1-drum ' + cls + '"><path d="M' + (x - 12) + ' 190l4 34h16l4 -34z" fill="#8a4a24" stroke="#4a2410" stroke-width="2"/><ellipse cx="' + x + '" cy="190" rx="12" ry="4" fill="#e9d8b4" stroke="#4a2410" stroke-width="1.5"/></g>';
    const note = (x, cls) => '<g class="d1-note ' + cls + '"><circle cx="' + x + '" cy="180" r="4" fill="#fdd023"/><path d="M' + (x + 4) + ' 180v-16l8 4" stroke="#fdd023" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d1s4)"/>' +
      oak(70, 150, 60) + oak(330, 146, 64) +
      '<rect x="0" y="180" width="400" height="80" fill="#a8553a"/>' +
      '<ellipse cx="200" cy="222" rx="170" ry="34" fill="none" stroke="#8a3e28" stroke-width="4"/><ellipse cx="200" cy="222" rx="110" ry="22" fill="none" stroke="#8a3e28" stroke-width="4"/><ellipse cx="200" cy="222" rx="50" ry="10" fill="#c46a4a" stroke="#8a3e28" stroke-width="3"/>' +
      drum(140, "") + drum(200, "d1-drum2") + drum(260, "") +
      note(150, "") + note(210, "d1-n2") + note(270, "d1-n3") +
      '<rect x="146" y="232" width="108" height="20" rx="3" fill="#1d1d1d"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fdd023">CONGO SQUARE</text>',
      sky("d1s4", "#2b3f6a", "#f2a65e"));
  }

  /* 5. Read Blvd and Lake Forest Blvd, the High Rise behind */
  function d1corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#d1s5)"/>' +
      '<path d="M150 150Q290 40 430 150" stroke="#cfd4da" stroke-width="10" fill="none"/><path d="M150 150Q290 40 430 150" stroke="#8a929b" stroke-width="2" fill="none" transform="translate(0 6)"/>' +
      Array.from({ length: 8 }, (_, i) => { const x = 180 + i * 30, t = (x + 3 - 150) / 280, y = 150 - 220 * t * (1 - t) + 6; return '<rect x="' + x + '" y="' + y.toFixed(1) + '" width="6" height="' + (220 - y).toFixed(1) + '" fill="#9aa2aa"/>'; }).join("") +
      '<g class="d1-car"><rect x="0" y="0" width="30" height="10" rx="3" fill="#fdd023" transform="translate(150 140)"/></g>' +
      '<rect x="0" y="100" width="200" height="120" fill="#e9e2d0"/><rect x="0" y="100" width="200" height="8" fill="#c9bfa8"/>' +
      tag("DEE-1", 24, 176, 54, "#fdd023", -6) + tag("3'S UP", 120, 206, 22, "#8f5ad8", -4) +
      '<g class="d1-sp"><circle cx="186" cy="150" r="3" fill="#fdd023"/></g><g class="d1-sp d1-sp2"><circle cx="180" cy="140" r="2" fill="#fdd023"/></g>' +
      '<rect x="222" y="60" width="5" height="160" fill="#3b4148"/>' + sign(166, 66, 120, "Read Blvd") + sign(166, 92, 120, "Lake Forest Blvd") +
      palm(380, 220, 90) +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4d52"/><rect x="0" y="216" width="400" height="6" fill="#b4ada2"/>',
      sky("d1s5", "#2a1f55", "#f4936a"));
  }

  window.SCENES = { d1station, d1lsu, d1class, d1congo, d1corner };
})();
