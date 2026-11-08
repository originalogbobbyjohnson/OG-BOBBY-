/* spinners scenes (Regions tab: Detroit; Ferndale, where the five friends started at Ferndale High as the Domingoes; they lived in Detroit's Herman Gardens). CSS classes prefixed sp- (the page's own anim-train is kept, used on the bus). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes spglow{0%,100%{opacity:.45}50%{opacity:1}}.sp-glow{animation:spglow 2.4s ease-in-out infinite}.sp-g2{animation-delay:-1.2s}' +
    '@keyframes spnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-70px);opacity:0}}.sp-nt{animation:spnote 3.4s ease-out infinite}.sp-nt2{animation-delay:-1.1s}.sp-nt3{animation-delay:-2.3s}' +
    '@keyframes spsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.sp-sw{animation:spsway 1.6s ease-in-out infinite}.sp-sw2{animation-delay:-.8s}' +
    '@keyframes spspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sp-spin{transform-box:fill-box;transform-origin:50% 50%;animation:spspin 2.2s linear infinite}' +
    '@keyframes spband{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.35)}}.sp-band{transform-box:fill-box;transform-origin:50% 50%;animation:spband 1.2s ease-in-out infinite}' +
    '@keyframes spbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sp-bm{transform-box:fill-box;transform-origin:50% 0%;animation:spbeam 4s ease-in-out infinite}.sp-bm2{animation-delay:-2s}' +
    '@keyframes spflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.sp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:spflag 1.4s ease-in-out infinite}' +
    '@keyframes spcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.sp-car{animation:spcar 9s linear infinite}' +
    '@keyframes spspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sp-sp{animation:spspray 1.4s ease-out infinite}.sp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  /* text where every 9 gets a straight stem (fixed advance per char so the drawn 9 lines up) */
  const t9 = (str, x, y, size, col) => { const cw = size * 0.6; let o = "", run = "", rx = x; const flush = () => { if (run) { o += '<text x="' + rx + '" y="' + y + '" ' + font + ' font-size="' + size + '" fill="' + col + '" textLength="' + (run.length * cw).toFixed(1) + '" lengthAdjust="spacingAndGlyphs">' + run.replace(/&/g, "&amp;").replace(/ /g, "\u00a0") + '</text>'; rx += run.length * cw; run = ""; } };
    for (const ch of str) { if (ch === "9") { flush(); o += nine(rx + size * 0.04, y, size * 0.74, col); rx += cw; } else run += ch; } flush(); return o; };
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + t9(txt, x + 8, y + 16, 12, "#fff");
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "sp-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="sp-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  /* a singer in silhouette (no face): head, suit, arm out */
  const singer = (x, y, c, cls, arm) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="7" fill="#0a0a12"/><path d="M' + (x - 9) + ' ' + (y - 26) + 'h18l3 28h-24z" fill="' + c + '"/><rect x="' + (x - 8) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="6" height="18" fill="#0a0a12"/>' +
    (arm ? '<path d="M' + (x + 8) + ' ' + (y - 22) + 'l14 -8" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/>' : '') + '</g>';
  const GOLD = "#ffcf4a", PINK = "#ff5a8a", SKYB = "#4fd1ff", CREAM = "#f6efdc", SMART = "#c8102e";

  /* 1. A SMART FAST Woodward bus pulling up to the 9 Mile & Woodward stop in downtown Ferndale: low brick storefronts, the black stop sign with the red FAST badge */
  function spstation() {
    let win = "";
    for (let x = 36; x < 270; x += 34) win += '<rect x="' + x + '" y="126" width="26" height="22" rx="2" fill="#1d2b3a"/><rect x="' + (x + 3) + '" y="128" width="6" height="18" fill="#fff" opacity=".3"/>';
    const shop = (x, w, top, c, awn) => '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (180 - top) + '" fill="' + c + '"/>' +
      '<rect class="sp-glow" x="' + (x + 6) + '" y="' + (top + 10) + '" width="' + (w - 12) + '" height="12" fill="#ffd98a" opacity=".5"/>' +
      '<path d="M' + x + ' ' + (top + 34) + 'h' + w + 'l-6 12h-' + (w - 12) + 'z" fill="' + awn + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sp1)"/>' + stars(10) +
      shop(0, 80, 74, "#7a3e30", "#2f6f8f") + shop(84, 70, 88, "#a0643e", PINK) + shop(158, 90, 70, "#5b3a42", "#e8a33a") + shop(252, 64, 92, "#8a5a3a", "#3d8b5a") + shop(320, 80, 78, "#6a3a3a", SKYB) +
      '<rect x="0" y="180" width="400" height="80" fill="#3a3a42"/><rect x="0" y="180" width="400" height="8" fill="#a8a49a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52 + 10) + '" y="226" width="26" height="4" fill="#f2d24b"/>').join("") +
      '<g class="anim-train"><rect x="20" y="114" width="270" height="70" rx="10" fill="#f2f2f0" stroke="#55555c" stroke-width="2"/>' +
      '<rect x="20" y="160" width="270" height="8" fill="' + SMART + '"/><rect x="20" y="168" width="270" height="3" fill="#111"/>' + win +
      '<rect x="262" y="120" width="26" height="40" rx="3" fill="#1d2b3a"/><rect x="40" y="117" width="120" height="7" rx="2" fill="#111"/><text x="100" y="123.2" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">FAST WOODWARD</text>' +
      '<circle class="sp-glow" cx="284" cy="172" r="4" fill="#fff6c2"/>' + [70, 240].map(x => '<circle cx="' + x + '" cy="186" r="11" fill="#1a1a1a"/><circle cx="' + x + '" cy="186" r="4" fill="#888"/>').join("") + '</g>' +
      '<rect x="322" y="96" width="5" height="90" fill="#2f2f2f"/>' +
      '<rect x="138" y="16" width="250" height="36" rx="3" fill="#111"/>' + t9("9 Mile & Woodward", 150, 40, 17, "#fff") + badge(326, 34, "FAST", SMART) +
      '<text x="390" y="250" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".85">DOWNTOWN FERNDALE · SMART</text>',
      sky("sp1", "#1b1840", "#d98a5a"));
  }

  /* 2. Ferndale High School, where the five friends started singing together as the Domingoes: brick school, tall windows, flag waving, five singers in sharp suits harmonizing on the front steps */
  function spschool() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 9; c++) wins += '<rect class="' + ((r + c) % 4 ? "" : "sp-glow") + '" x="' + (50 + c * 34) + '" y="' + (78 + r * 38) + '" width="20" height="26" fill="#ffe2a0" opacity=".55" stroke="' + CREAM + '" stroke-width="2"/>';
    const bricks = Array.from({ length: 16 }, (_, i) => '<path d="M40 ' + (70 + i * 7) + 'h320" stroke="#7a3a26" stroke-width=".7" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sp2)"/>' + stars(8) +
      '<rect x="40" y="64" width="320" height="120" fill="#a24f34"/>' + bricks + wins +
      '<rect x="36" y="58" width="328" height="8" fill="' + CREAM + '"/><rect x="36" y="110" width="328" height="3" fill="#e8b84a" opacity=".8"/>' +
      '<rect x="150" y="40" width="100" height="24" fill="#a24f34"/><rect x="146" y="36" width="108" height="6" fill="' + CREAM + '"/>' +
      '<text x="200" y="57" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '">FERNDALE HIGH</text>' +
      '<rect x="62" y="6" width="3" height="58" fill="#ccc"/><g class="sp-flag"><rect x="65" y="8" width="30" height="18" fill="#c8102e"/><rect x="65" y="8" width="12" height="9" fill="#1f4e9a"/><rect x="77" y="13" width="18" height="3" fill="#fff"/><rect x="65" y="19" width="30" height="3" fill="#fff"/></g>' +
      '<rect x="176" y="142" width="48" height="42" fill="#3a2418"/><rect x="198" y="142" width="4" height="42" fill="#6a4a30"/>' +
      '<rect x="110" y="184" width="180" height="8" fill="#c9c2b2"/><rect x="96" y="192" width="208" height="8" fill="#b8b0a0"/><rect x="82" y="200" width="236" height="8" fill="#a8a090"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#3e5a32"/><rect x="0" y="236" width="400" height="24" fill="#4a4a50"/>' +
      singer(120, 216, "#1f3f8a", "sp-sw") + singer(160, 216, "#1f3f8a", "sp-sw sp-sw2") + singer(200, 216, "#1f3f8a", "sp-sw", 1) + singer(240, 216, "#1f3f8a", "sp-sw sp-sw2") + singer(280, 216, "#1f3f8a", "sp-sw") +
      note(140, 160, GOLD) + note(250, 156, SKYB, "sp-nt2") + note(200, 150, PINK, "sp-nt3") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">FIVE FRIENDS · THE DOMINGOES</text>',
      sky("sp2", "#1c2a5a", "#e0a070"));
  }

  /* 3. Herman Gardens on Detroit's west side, the brick row houses where the group lived: two-story townhouse rows, porch lights, a streetlight where they rehearsed, a 45 spinning on a record player in a window */
  function spgardens() {
    const row = (x0, y0, n, c) => { let s = ""; for (let i = 0; i < n; i++) { const x = x0 + i * 56; s += '<rect x="' + x + '" y="' + y0 + '" width="52" height="' + (196 - y0) + '" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + y0 + 'h56v-8h-56z" fill="#4a3a34"/>' +
      '<rect class="' + (i % 2 ? "sp-glow sp-g2" : "sp-glow") + '" x="' + (x + 8) + '" y="' + (y0 + 10) + '" width="14" height="16" fill="#ffd98a" opacity=".6"/><rect x="' + (x + 30) + '" y="' + (y0 + 10) + '" width="14" height="16" fill="#2a3540"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y0 + 40) + '" width="14" height="16" fill="#2a3540"/><rect x="' + (x + 30) + '" y="' + (y0 + 36) + '" width="14" height="' + (160 - y0) + '" fill="#3a2a20"/><rect x="' + (x + 26) + '" y="' + (y0 + 32) + '" width="22" height="4" fill="#c9c2b2"/>' +
      '<circle class="sp-glow" cx="' + (x + 37) + '" cy="' + (y0 + 30) + '" r="2" fill="#fff3b0"/>'; } return s; };
    return svg(
      '<rect width="400" height="260" fill="url(#sp3)"/>' + stars(14) +
      '<circle cx="330" cy="40" r="18" fill="#f6efdc" opacity=".85"/>' +
      row(-10, 110, 8, "#8a4a36") +
      '<rect x="0" y="196" width="400" height="64" fill="#3a3a42"/><rect x="0" y="196" width="400" height="6" fill="#9a968e"/>' +
      '<rect x="200" y="96" width="5" height="104" fill="#2f2f2f"/><path d="M202 96h22" stroke="#2f2f2f" stroke-width="4"/><path class="sp-glow" d="M214 100l-26 100h56z" fill="#fff3b0" opacity=".14"/><circle cx="222" cy="100" r="5" fill="#fff3b0"/>' +
      '<g transform="translate(-6 0)"><rect x="66" y="122" width="22" height="12" fill="#2a1a14"/><g class="sp-spin"><circle cx="77" cy="121" r="7" fill="#111"/><circle cx="77" cy="121" r="2.4" fill="' + GOLD + '"/></g></g>' +
      singer(176, 222, "#3a2a5a", "sp-sw") + singer(212, 222, "#3a2a5a", "sp-sw sp-sw2", 1) + singer(248, 222, "#3a2a5a", "sp-sw") +
      note(230, 178, GOLD, "sp-nt2") + note(190, 172, CREAM) +
      '<text x="390" y="250" text-anchor="end" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">HERMAN GARDENS · WEST SIDE</text>',
      sky("sp4", "#0d1030", "#3a2a5a") + sky("sp3", "#0d1030", "#4a3060"));
  }

  /* 4. The TV soul stage where they did "The Rubberband Man": five in matching suits under sweeping lights, a giant rubber band stretching across the backdrop */
  function spstage() {
    const crowd = Array.from({ length: 22 }, (_, i) => '<g class="sp-sw' + (i % 2 ? " sp-sw2" : "") + '"><circle cx="' + (8 + i * 18.5) + '" cy="234" r="7" fill="#07070c"/><rect x="' + (i * 18.5 + 1) + '" y="240" width="15" height="24" rx="5" fill="#07070c"/></g>').join("");
    const bulbs = Array.from({ length: 14 }, (_, i) => '<circle class="sp-glow' + (i % 2 ? " sp-g2" : "") + '" cx="' + (60 + i * 21.5) + '" cy="30" r="3" fill="' + (i % 3 ? GOLD : PINK) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sp5)"/>' +
      '<rect x="40" y="22" width="320" height="150" rx="6" fill="#1a0f2a" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<g class="sp-band"><ellipse cx="200" cy="90" rx="110" ry="26" fill="none" stroke="#e8a33a" stroke-width="10"/><ellipse cx="200" cy="90" rx="110" ry="26" fill="none" stroke="#ffcf7a" stroke-width="3"/></g>' +
      '<path class="sp-bm" d="M110 22l-50 150h100z" fill="' + GOLD + '" opacity=".14"/><path class="sp-bm sp-bm2" d="M290 22l-50 150h100z" fill="' + SKYB + '" opacity=".16"/>' +
      '<rect x="20" y="172" width="360" height="18" fill="#3a2a1a"/><rect x="20" y="170" width="360" height="4" fill="' + GOLD + '"/>' +
      singer(120, 160, "#e8e0c8", "sp-sw") + singer(160, 160, "#e8e0c8", "sp-sw sp-sw2", 1) + singer(200, 160, "#e8e0c8", "sp-sw", 1) + singer(240, 160, "#e8e0c8", "sp-sw sp-sw2", 1) + singer(280, 160, "#e8e0c8", "sp-sw") +
      [106, 294].map(x => '<rect x="' + (x - 1) + '" y="132" width="2" height="38" fill="#bbb"/><circle cx="' + x + '" cy="130" r="3" fill="#bbb"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#14101e"/>' + crowd +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" opacity=".9">PREPARE YOURSELF FOR THE RUBBERBAND MAN</text>',
      sky("sp5", "#0a0618", "#2a1440"));
  }

  /* 5. W 9 Mile Rd and Livernois Ave in Ferndale, where the old Ferndale High stood when they started, the Detroit Zoo's tall water tower up Woodward behind, SPINNERS tagged on the wall */
  function spcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sp6)"/>' + stars(10) +
      '<g><rect x="240" y="20" width="62" height="40" rx="18" fill="#eef0ea" stroke="#b8bcb2" stroke-width="2"/><path d="M240 40h62" stroke="#c9ccc4" stroke-width="1"/>' +
      '<text x="271" y="36" text-anchor="middle" ' + font + ' font-size="8" fill="#2f6f3a">DETROIT</text><text x="271" y="50" text-anchor="middle" ' + font + ' font-size="10" fill="#2f6f3a">ZOO</text>' +
      '<path d="M248 60l-8 70M294 60l8 70M262 60l-2 70M280 60l2 70M246 80h50M243 104h56" stroke="#9aa094" stroke-width="2.5" fill="none"/>' +
      '<circle class="sp-glow" cx="271" cy="16" r="2.5" fill="#ff4a4a"/></g>' +
      '<path d="M0 132q60 -24 120 -8q50 -20 100 0v8h-220z" fill="#1e3a24"/><path d="M300 128q50 -22 100 -6v10h-100z" fill="#1e3a24"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="#5a3a5a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#4a2e4a" stroke-width="1"/>').join("") +
      tag("SPINNERS", 14, 188, 54, GOLD, -6) + tag("DOMINGOES", 18, 214, 16, SKYB, -3) + tag("RUBBERBAND MAN", 146, 216, 15, CREAM, -3) + tag("MISTER 12:45", 246, 194, 15, PINK, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="sp-car"><rect x="0" y="234" width="64" height="14" rx="4" fill="#3d7ab8"/><rect x="12" y="226" width="36" height="10" rx="3" fill="#3d7ab8"/><circle cx="14" cy="249" r="4" fill="#111"/><circle cx="50" cy="249" r="4" fill="#111"/><circle class="sp-glow" cx="62" cy="238" r="2" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(274, 98, 124, "W 9 Mile Rd") + sign(274, 124, 124, "Livernois Ave") +
      '<g class="sp-sp"><circle cx="186" cy="156" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sp-sp sp-sp2"><circle cx="192" cy="150" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sp6", "#141a38", "#c07a52"));
  }

  window.SCENES = { spstation: spstation, spschool: spschool, spgardens: spgardens, spstage: spstage, spcorner: spcorner };
})();
