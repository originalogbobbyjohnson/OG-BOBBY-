/* beyonce scenes (Regions tab: Houston + Texas; Third Ward, Houston). CSS classes prefixed byc- (the page's own anim-train is kept).
   1 UH South/University Oaks on the METRORail Purple Line (4455 Wheeler Ave, at-grade side platforms on the south edge of the UH campus): the white light-rail car gliding in, live oaks and campus brick behind.
   2 Parker Elementary, the Houston music magnet school where she sang with the school choir: low red-brick school, a choir on the risers swaying, notes floating up, the school bell swinging.
   3 HSPVA's old Montrose campus (4001 Stanford St, the former Montrose Elementary building, where she studied): tan brick with white trim, dancers leaping on the lawn, spotlights sweeping.
   4 The Scott St chicken spot in Third Ward her family loved: a low storefront with a striped awning, a FRIED CHICKEN sign blinking, a steaming box on the counter, cars rolling by.
   5 Scott St and Blodgett St in Third Ward: green signs, BEYONCÉ tagged on the brick, the downtown skyline lit up behind. No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bycblink{0%,100%{opacity:.3}50%{opacity:1}}.byc-bl{animation:bycblink 1.6s ease-in-out infinite}.byc-bl2{animation-delay:-.8s}' +
    '@keyframes bycsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.byc-sway{animation:bycsway 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.byc-s2{animation-delay:-.6s}.byc-s3{animation-delay:-1.2s}' +
    '@keyframes bycnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-60px);opacity:0}}.byc-note{animation:bycnote 3s ease-out infinite}.byc-n2{animation-delay:-1s}.byc-n3{animation-delay:-2s}' +
    '@keyframes bycbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.byc-bell{animation:bycbell 1.1s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0}' +
    '@keyframes bycleap{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}.byc-leap{animation:bycleap 1.4s ease-in-out infinite}.byc-l2{animation-delay:-.7s}' +
    '@keyframes bycbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.byc-beam{animation:bycbeam 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.byc-b2{animation-delay:-2s}' +
    '@keyframes bycsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}.byc-st{animation:bycsteam 2s ease-out infinite}.byc-st2{animation-delay:-.7s}.byc-st3{animation-delay:-1.4s}' +
    '@keyframes byccar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.byc-car{animation:byccar 6s linear infinite}' +
    '@keyframes byccar2{from{transform:translateX(540px)}to{transform:translateX(-140px)}}.byc-car2{animation:byccar2 8s linear infinite}' +
    '@keyframes bycspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.byc-sp{animation:bycspray 1.4s ease-out infinite}.byc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, y, w, txt, color) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#111" opacity=".85"/><text x="' + (x + w / 2) + '" y="' + (y + 15) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + color + '">' + txt + '</text>';
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "byc-bl" + (i % 2 ? " byc-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GOLD = "#f2c45a", ORANGE = "#e86a3a", SKY = "#8fd3ff", PURP = "#7a2c8e";
  /* a figure in silhouette: no faces */
  const kid = (x, base, robe, cls, sc) => { const s = sc || 1; return '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 34 * s) + '" r="' + (6 * s) + '" fill="#4a2e20"/><path d="M' + (x - 9 * s) + ' ' + base + 'q0 -' + (26 * s) + ' ' + (9 * s) + ' -' + (27 * s) + 'q' + (9 * s) + ' ' + (1 * s) + ' ' + (9 * s) + ' ' + (27 * s) + 'z" fill="' + robe + '"/></g>'; };
  const dancer = (x, base, dress, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (base - 40) + '" r="6" fill="#3a2418"/><path d="M' + (x - 2) + ' ' + (base - 34) + 'l-16 -10M' + (x + 2) + ' ' + (base - 34) + 'l16 -12" stroke="#3a2418" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M' + (x - 6) + ' ' + (base - 34) + 'h12l6 18h-24z" fill="' + dress + '"/><path d="M' + (x - 3) + ' ' + (base - 16) + 'l-14 14M' + (x + 3) + ' ' + (base - 16) + 'l14 10" stroke="#3a2418" stroke-width="3" stroke-linecap="round"/></g>';

  /* downtown Houston skyline (generic towers) */
  const skyline = (base, lit) => {
    const w = (x, y, ww, hh) => { let s = ""; for (let r = y + 6; r < base - 4; r += 9) for (let c = x + 3; c < x + ww - 3; c += 6) s += '<rect x="' + c + '" y="' + r + '" width="3" height="4" fill="' + (((r * 7 + c * 3) % 5) ? "#2c3550" : lit) + '"/>'; return s; };
    return '<g>' +
      '<rect x="14" y="' + (base - 62) + '" width="36" height="62" fill="#1d2338"/>' + w(14, base - 62, 36, 62) +
      '<path d="M60 ' + base + 'v-104l12 -12l12 12v104z" fill="#22293f"/>' + w(60, base - 104, 24, 104) +
      '<rect x="94" y="' + (base - 138) + '" width="30" height="138" fill="#1b2a3a"/>' + w(94, base - 138, 30, 138) +
      '<path d="M134 ' + base + 'v-118q18 -12 36 0v118z" fill="#20364a"/>' + w(134, base - 112, 36, 112) +
      '<rect x="182" y="' + (base - 90) + '" width="28" height="90" fill="#262b40"/>' + w(182, base - 90, 28, 90) +
      '<path d="M222 ' + base + 'v-76l10 -10l10 10v76z" fill="#1f2539"/>' + w(222, base - 76, 20, 76) +
      '<rect x="254" y="' + (base - 56) + '" width="40" height="56" fill="#232a3e"/>' + w(254, base - 56, 40, 56) +
      '<rect x="306" y="' + (base - 84) + '" width="24" height="84" fill="#1d2338"/>' + w(306, base - 84, 24, 84) +
      '<rect x="342" y="' + (base - 46) + '" width="44" height="46" fill="#20283c"/>' + w(342, base - 46, 44, 46) +
      '<circle class="byc-bl" cx="109" cy="' + (base - 144) + '" r="2" fill="#ff4d4d"/></g>';
  };

  /* 1. UH South/University Oaks: at-grade side platforms on Wheeler Ave, UH campus behind */
  function bycstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="126" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 186V124q0 -12 14 -12h300q24 0 30 30v44z" fill="#e9ecef" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="158" width="344" height="7" fill="' + PURP + '"/><rect x="24" y="167" width="344" height="3" fill="#1f3c88"/>' +
      '<path d="M340 116q22 4 26 30h-26z" fill="#1c2630"/><circle cx="356" cy="178" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="102" width="70" height="10" fill="#8a939b"/><path d="M210 102l25 -26l25 26" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="114" width="96" height="10" rx="2" fill="#111"/><text x="88" y="122" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">PURPLE · PALM CENTER</text></g>';
    const campus = '<rect x="0" y="108" width="400" height="82" fill="#c9b79a"/>' +
      '<rect x="40" y="88" width="120" height="100" fill="#b5654a"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (50 + i * 22) + '" y="98" width="12" height="18" fill="#f3e2b0" opacity=".85"/>').join("") +
      '<rect x="250" y="80" width="110" height="110" fill="#d8c8a8"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (262 + i * 24) + '" y="92" width="12" height="20" fill="#2c3550"/>').join("") +
      oak(20, 116, 0.9) + oak(200, 112, 1.1) + oak(380, 116, 0.9);
    return svg(
      '<rect width="400" height="260" fill="url(#bycs1)"/>' + campus +
      '<path d="M0 70h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="66" width="6" height="124" fill="#7a8088"/>').join("") +
      '<path d="M0 56h130v12h-130z" fill="#c9cdd2"/><rect x="0" y="66" width="130" height="3" fill="' + PURP + '"/><path d="M270 56h130v12h-130z" fill="#c9cdd2"/><rect x="270" y="66" width="130" height="3" fill="' + PURP + '"/>' +
      train +
      '<rect x="0" y="190" width="400" height="8" fill="#f2c200"/><rect x="0" y="198" width="400" height="62" fill="#b3ada2"/><path d="M0 228h400" stroke="#9a948a" stroke-width="2"/>' +
      '<rect x="18" y="204" width="364" height="40" rx="3" fill="#111"/><text x="30" y="229" ' + font + ' font-size="15" fill="#fff">UH South/University Oaks</text>' + badge(300, 224, "PURPLE", PURP),
      sky("bycs1", "#7fb6e6", "#f4d9a6"));
  }

  /* 2. Parker Elementary, the music magnet school: choir on the risers, the school bell */
  function bycparker() {
    const bricks = Array.from({ length: 7 }, (_, r) => '<path d="M40 ' + (70 + r * 12) + 'h320" stroke="#7a3424" stroke-width="1"/>').join("");
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (56 + i * 50) + '" y="82" width="30" height="30" fill="#2a3a5a" stroke="#efe6d2" stroke-width="2"/><path d="M' + (71 + i * 50) + ' 82v30M' + (56 + i * 50) + ' 97h30" stroke="#efe6d2" stroke-width="1.5"/>').join("");
    const robes = [0, 1, 2, 3, 4, 5, 6, 7].map(i => kid(70 + i * 37, (i % 2 ? 222 : 210) + 20, i % 2 ? ORANGE : GOLD, "byc-sway" + (i % 3 ? " byc-s" + (i % 3 + 1) : ""), 0.95)).join("");
    const notes = [0, 1, 2].map(i => '<text class="byc-note' + (i ? " byc-n" + (i + 1) : "") + '" x="' + (110 + i * 90) + '" y="184" font-size="18" fill="' + [GOLD, ORANGE, SKY][i] + '">' + ["&#9834;", "&#9835;", "&#9834;"][i] + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bycs2)"/>' + oak(14, 150, 1.2) + oak(392, 150, 1.2) +
      '<rect x="40" y="62" width="320" height="88" fill="#a5452f"/>' + bricks + wins +
      '<path d="M34 62h332v-10h-332z" fill="#efe6d2"/>' +
      '<rect x="182" y="112" width="36" height="38" fill="#3a1e14" stroke="#efe6d2" stroke-width="2"/>' +
      '<rect x="290" y="26" width="20" height="26" fill="#efe6d2"/><path d="M286 26l14 -12l14 12z" fill="#7a3424"/><g class="byc-bell"><path d="M294 34q6 -8 12 0l2 12h-16z" fill="' + GOLD + '"/><circle cx="300" cy="48" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6aa653"/>' +
      '<path d="M40 252h320v-12h-320zM50 240h300v-12h-300zM60 228h280v-12h-280z" fill="#c9cdd2" stroke="#8a9096" stroke-width="1"/>' + robes + notes +
      label(8, 8, 196, "PARKER ELEMENTARY · MUSIC", GOLD),
      sky("bycs2", "#6fb2e8", "#f3d9a4"));
  }

  /* 3. HSPVA's old Montrose campus on Stanford St: tan brick, white trim, dancers on the lawn, spotlights */
  function bychspva() {
    const wins = (y) => Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="' + y + '" width="22" height="26" fill="#1e2a44" stroke="#f4efe4" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bycs3)"/>' + stars(12) +
      '<path class="byc-beam" d="M70 180l-40 -170h30z" fill="' + GOLD + '" opacity=".22"/><path class="byc-beam byc-b2" d="M330 180l10 -170h30z" fill="' + SKY + '" opacity=".22"/>' +
      '<rect x="50" y="64" width="300" height="116" fill="#d2b48a"/><rect x="50" y="64" width="300" height="8" fill="#f4efe4"/><rect x="50" y="118" width="300" height="4" fill="#f4efe4"/>' +
      wins(80) + wins(130) +
      '<path d="M170 64v-16h60v16z" fill="#c9a57a"/><path d="M164 48h72l-36 -18z" fill="#f4efe4"/>' +
      '<rect x="182" y="140" width="36" height="40" fill="#5a2a1e" stroke="#f4efe4" stroke-width="2"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#4f8a44"/><path d="M0 196h400" stroke="#5e9a52" stroke-width="2"/>' +
      dancer(110, 236, ORANGE, "byc-leap") + dancer(200, 240, GOLD, "byc-leap byc-l2") + dancer(290, 236, SKY, "byc-leap") +
      label(8, 8, 196, "HSPVA · STANFORD ST · MONTROSE", GOLD),
      sky("bycs3", "#141a3a", "#5a3a6e"));
  }

  /* 4. The Scott St chicken spot: striped awning, blinking sign, steaming box, cars rolling by */
  function bycchicken() {
    const stripes = Array.from({ length: 12 }, (_, i) => '<path d="M' + (60 + i * 24) + ' 96h24l-4 22h-24z" fill="' + (i % 2 ? "#f7f3ea" : "#c8352a") + '"/>').join("");
    const car = (cls, col, y) => '<g class="' + cls + '"><path d="M0 ' + y + 'h90v-14l-16 -12h-46l-16 12h-12z" fill="' + col + '"/><rect x="34" y="' + (y - 24) + '" width="16" height="10" fill="#9fc8e6"/><rect x="54" y="' + (y - 24) + '" width="16" height="10" fill="#9fc8e6"/><circle cx="20" cy="' + y + '" r="7" fill="#111"/><circle cx="72" cy="' + y + '" r="7" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bycs4)"/>' + oak(26, 150, 1) + oak(380, 150, 1) +
      '<rect x="60" y="60" width="290" height="132" fill="#e9dcc0"/><rect x="60" y="60" width="290" height="10" fill="#c8352a"/>' +
      '<rect x="120" y="70" width="170" height="24" rx="3" fill="#111"/><text class="byc-bl" x="205" y="87" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">FRIED CHICKEN</text>' +
      stripes +
      '<rect x="80" y="124" width="150" height="60" fill="#2a3a4a" stroke="#c8352a" stroke-width="3"/><rect x="250" y="124" width="40" height="68" fill="#3a2418" stroke="#c8352a" stroke-width="3"/>' +
      '<rect x="80" y="166" width="150" height="18" fill="#7a4a2a"/><path d="M120 166l6 -18h40l6 18z" fill="#f7f3ea" stroke="#c8352a" stroke-width="2"/>' +
      '<ellipse cx="136" cy="156" rx="7" ry="5" fill="#c9852e"/><ellipse cx="150" cy="154" rx="8" ry="5" fill="#b8761f"/><ellipse cx="160" cy="158" rx="6" ry="4" fill="#c9852e"/>' +
      '<path class="byc-st" d="M140 146q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><path class="byc-st byc-st2" d="M150 146q4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><path class="byc-st byc-st3" d="M160 146q-4 -8 0 -16" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#3a3c42"/><path d="M0 226h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("byc-car", "#d9a23a", 214) + car("byc-car2", "#6a8fbf", 250) +
      label(8, 8, 158, "SCOTT ST · THIRD WARD", GOLD),
      sky("bycs4", "#f2a65a", "#f7e0b0"));
  }

  /* 5. Scott St and Blodgett St: green signs, the wall tag, downtown behind */
  function byccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bycs5)"/>' + stars(14) + skyline(150, GOLD) +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/>' +
      '<rect x="24" y="108" width="262" height="114" fill="#7a3a30"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M24 ' + (120 + r * 11) + 'h262" stroke="#5e2a22" stroke-width="1"/>').join("") +
      tag("BEYONCÉ", 44, 172, 44, GOLD, -6) + tag("QUEEN BEY", 50, 210, 24, ORANGE, -3) + tag("BEYHIVE", 198, 212, 16, SKY, -4) +
      '<circle class="byc-sp" cx="262" cy="196" r="3" fill="' + ORANGE + '"/><circle class="byc-sp byc-sp2" cx="268" cy="202" r="2" fill="' + ORANGE + '"/>' +
      '<rect x="330" y="96" width="6" height="140" fill="#8a9096"/>' + sign(290, 92, 96, "SCOTT ST") + sign(296, 118, 102, "BLODGETT ST") +
      '<rect x="0" y="222" width="400" height="38" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("bycs5", "#0f1430", "#6a3a1e"));
  }

  window.SCENES = { bycstation, bycparker, bychspva, bycchicken, byccorner };
})();
