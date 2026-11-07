/* bubbasparxxx scenes (Regions tab: More of the South; LaGrange, Georgia). CSS classes and ids prefixed bs- (the page's own anim-train is kept).
   1 The LaGrange Greyhound stop, 101 Hoffman Dr: the coach pulling in under a plain gas-station canopy (no brand drawn), pines behind.
   2 Callaway Memorial Tower (1929, Truitt St & 4th Ave), the red-brick campanile modeled on St. Mark's in Venice, the clock hands turning.
   3 Back in the Mud: a red-clay mud pit in the Troup County woods, a jacked-up truck spinning and slinging mud.
   4 West Point Lake where McCosh Mill Road dead-ends (the farm road he grew up on): a bonfire on the bank, a fishing pole and bobber.
   5 Vernon St & Lafayette Sq, downtown LaGrange: green signs, BUBBA tagged on the brick, the LaFayette fountain and statue (seen from far, no face) behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bscloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.bs-cloud{animation:bscloud 26s linear infinite}.bs-cloud2{animation-delay:-13s}' +
    '@keyframes bsspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bs-min{transform-origin:200px 74px;animation:bsspin 6s linear infinite}.bs-hr{transform-origin:200px 74px;animation:bsspin 72s linear infinite}' +
    '.bs-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:bsspin .35s linear infinite}' +
    '@keyframes bsshake{0%,100%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}75%{transform:translate(-1px,1px)}}.bs-truck{animation:bsshake .25s linear infinite}' +
    '@keyframes bsmud{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-60px,-50px);opacity:0}}.bs-mud{animation:bsmud .9s ease-out infinite}.bs-mud2{animation-delay:.3s}.bs-mud3{animation-delay:.6s}' +
    '@keyframes bsfire{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.18)}}.bs-fire{transform-box:fill-box;transform-origin:50% 100%;animation:bsfire .5s ease-in-out infinite}' +
    '@keyframes bsspark{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}.bs-spark{animation:bsspark 1.6s ease-out infinite}.bs-spark2{animation-delay:.8s}' +
    '@keyframes bsbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.bs-bob{animation:bsbob 1.8s ease-in-out infinite}' +
    '@keyframes bsripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.bs-rip{transform-origin:280px 160px;animation:bsripple 2.4s ease-out infinite}' +
    '@keyframes bsjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.82)}}.bs-jet{transform-box:fill-box;transform-origin:50% 100%;animation:bsjet 1s ease-in-out infinite}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-sp2{animation-delay:.45s}' +
    '@keyframes bsblink{0%,100%{opacity:.35}50%{opacity:1}}.bs-led{animation:bsblink 1s steps(2) infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width="1"/>'; for (let k = (r % 2) * 10; k < w; k += 20) s += '<path d="M' + (x + k) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width="1"/>'; } return s; };
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 46 * s) + 'l' + (14 * s) + ' ' + (20 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (16 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (14 * s) + 'h' + (-52 * s) + 'l' + (12 * s) + ' ' + (-14 * s) + 'h' + (-6 * s) + 'l' + (12 * s) + ' ' + (-16 * s) + 'h' + (-6 * s) + 'z" fill="' + (c || "#2f5a34") + '"/><rect x="' + (x - 2 * s) + '" y="' + y + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#5a3a22"/>';
  const CLAY = "#e07a2a", PINE = "#6b8e3a", MUD = "#7a4a2a", GBLUE = "#2a5aa8";
  const cloud = (cls, x, y, rx) => '<g class="bs-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + (rx / 4) + '" fill="#fff" opacity=".75"/></g>';

  /* 1. Greyhound stop, 101 Hoffman Dr */
  function bsstop() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (52 + i * 36) + '" y="134" width="28" height="22" rx="3" fill="#24323e"/>').join("");
    const bus = '<g class="anim-train"><rect x="30" y="124" width="330" height="70" rx="10" fill="#cfd4da" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="30" y="164" width="330" height="9" fill="' + GBLUE + '"/><rect x="30" y="173" width="330" height="3" fill="#fff"/>' +
      '<path d="M360 128q18 4 20 26v34h-20z" fill="#9cc6e8" stroke="#7d868f" stroke-width="2"/><rect x="360" y="166" width="20" height="22" fill="#cfd4da" stroke="#7d868f" stroke-width="2"/><circle cx="374" cy="182" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="136" width="6" height="40" fill="#24323e"/>' +
      '<circle cx="90" cy="196" r="13" fill="#222"/><circle cx="90" cy="196" r="6" fill="#aab"/><circle cx="300" cy="196" r="13" fill="#222"/><circle cx="300" cy="196" r="6" fill="#aab"/><circle cx="330" cy="196" r="13" fill="#222"/><circle cx="330" cy="196" r="6" fill="#aab"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss1)"/>' + cloud("", 80, 24, 32) + cloud("bs-cloud2", 60, 44, 22) +
      pine(24, 104, 1.1) + pine(60, 106, .8, "#3a6a3e") + pine(372, 104, 1.2) + pine(340, 108, .8, "#3a6a3e") +
      '<rect x="90" y="54" width="230" height="14" fill="#f2f2ee" stroke="#9aa0a6" stroke-width="2"/><rect x="90" y="66" width="230" height="4" fill="' + CLAY + '"/>' +
      [120, 205, 290].map(x => '<rect x="' + (x - 4) + '" y="70" width="8" height="46" fill="#d8dadc"/>').join("") +
      [150, 260].map(x => '<rect x="' + (x - 10) + '" y="88" width="20" height="28" rx="2" fill="#e8e8e4" stroke="#7d868f"/><rect x="' + (x - 6) + '" y="92" width="12" height="8" fill="#24323e"/>').join("") +
      '<rect x="0" y="116" width="400" height="8" fill="#bdb6a8"/>' + bus +
      '<rect x="0" y="210" width="400" height="50" fill="#55565a"/><path d="M0 214h400" stroke="#d8c060" stroke-width="3"/>' +
      '<rect x="22" y="146" width="4" height="66" fill="#5b6168"/><rect x="2" y="132" width="104" height="36" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="54" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS STOP</text><text x="54" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#9cc6e8">LAGRANGE, GA</text>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">101 HOFFMAN DR · LAGRANGE</text>',
      sky("bss1", "#86bde8", "#e0f0fa"));
  }

  /* 2. Callaway Memorial Tower */
  function bstower() {
    let rows = ""; for (let y = 104; y < 196; y += 8) rows += '<path d="M178 ' + y + 'h44" stroke="#7a3524" stroke-width="1"/>';
    const ticks = Array.from({ length: 12 }, (_, i) => '<path d="M200 63v4" stroke="#2a2a2a" stroke-width="2" transform="rotate(' + (i * 30) + ' 200 74)"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bss2)"/>' + cloud("", 90, 30, 34) + cloud("bs-cloud2", 70, 52, 22) +
      pine(30, 196, 1.2) + pine(70, 200, .9, "#3a6a3e") + pine(340, 196, 1.3) + pine(372, 200, .9, "#3a6a3e") +
      '<path d="M186 26l14 -20l14 20z" fill="#5f9e8a" stroke="#3e7464" stroke-width="1.5"/><rect x="198" y="0" width="4" height="8" fill="#c9a24a"/>' +
      '<rect x="182" y="26" width="36" height="28" fill="#e9dcc0" stroke="#b9ac8c" stroke-width="1.5"/>' +
      [188, 198, 208].map(x => '<path d="M' + x + ' 52v-14q3 -6 6 0v14z" fill="#3a2a22"/>').join("") +
      '<rect x="178" y="54" width="44" height="142" fill="#a8483a" stroke="#7a3524" stroke-width="2"/>' + rows +
      '<path d="M178 96h44" stroke="#e9dcc0" stroke-width="3"/>' +
      '<circle cx="200" cy="74" r="14" fill="#fbf7ee" stroke="#e9dcc0" stroke-width="3"/>' + ticks +
      '<path class="bs-hr" d="M200 74v-7" stroke="#2a2a2a" stroke-width="2.5" stroke-linecap="round"/><path class="bs-min" d="M200 74v-11" stroke="#2a2a2a" stroke-width="1.6" stroke-linecap="round"/><circle cx="200" cy="74" r="1.6" fill="#2a2a2a"/>' +
      '<rect x="172" y="190" width="56" height="10" fill="#e9dcc0"/><path d="M194 200v-18q6 -8 12 0v18z" fill="#3a2a22"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a8a3c"/><path d="M150 260l40 -60h20l40 60z" fill="#cfc6b2"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">CALLAWAY MEMORIAL TOWER</text>',
      sky("bss2", "#5f9ee0", "#dcefff"));
  }

  /* 3. Back in the Mud */
  function bsmud() {
    const wheel = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="20" fill="#1c1c1c"/><g class="bs-wheel"><circle cx="' + cx + '" cy="' + cy + '" r="10" fill="#9aa0a6"/><path d="M' + (cx - 10) + ' ' + cy + 'h20M' + cx + ' ' + (cy - 10) + 'v20" stroke="#5b6168" stroke-width="3"/></g>';
    const blobs = [0, 1, 2].map(i => '<g class="bs-mud' + (i ? ' bs-mud' + (i + 1) : '') + '"><circle cx="' + (96 + i * 6) + '" cy="' + (192 - i * 4) + '" r="' + (5 - i) + '" fill="' + MUD + '"/><circle cx="' + (260 + i * 6) + '" cy="' + (194 - i * 3) + '" r="' + (4 - i) + '" fill="' + MUD + '"/></g>').join("");
    const truck = '<g class="bs-truck"><path d="M70 176v-30h70l14 -26h70l16 26h40q10 0 10 12v18z" fill="' + CLAY + '" stroke="#5a2a10" stroke-width="2"/><path d="M160 146l10 -20h46l12 20z" fill="#9cc6e8"/>' +
      '<rect x="70" y="150" width="70" height="4" fill="#5a2a10" opacity=".5"/><rect x="286" y="156" width="8" height="8" fill="#fff6c2"/><path d="M70 176h220" stroke="#2a2a2a" stroke-width="6"/>' +
      '<path d="M90 176q20 10 50 4M200 178q30 10 70 2" stroke="' + MUD + '" stroke-width="5" fill="none"/>' + wheel(110, 192) + wheel(250, 192) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss3)"/>' + cloud("", 70, 28, 30) +
      pine(20, 140, 1.4) + pine(70, 142, 1.1, "#3a6a3e") + pine(120, 140, 1.3) + pine(300, 140, 1.2, "#3a6a3e") + pine(350, 138, 1.5) + pine(392, 142, 1.1) +
      '<rect x="0" y="146" width="400" height="114" fill="#b4542a"/><ellipse cx="190" cy="214" rx="190" ry="34" fill="' + MUD + '"/><ellipse cx="190" cy="214" rx="150" ry="22" fill="#5e3a22"/>' +
      [[60, 230], [320, 236], [210, 244]].map(p => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="16" ry="3" fill="#8a5a3a" opacity=".7"/>').join("") +
      truck + blobs +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">BACK IN THE MUD · TROUP COUNTY</text>',
      sky("bss3", "#9ccbe8", "#f0e6c8"));
  }

  /* 4. West Point Lake, the end of McCosh Mill Road */
  function bslake() {
    return svg(
      '<rect width="400" height="260" fill="url(#bss4)"/>' +
      [[40, 20], [110, 34], [180, 14], [250, 28], [330, 18], [370, 40]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.2" fill="#fff"/>').join("") +
      '<circle cx="320" cy="44" r="14" fill="#fff3c8"/>' +
      pine(20, 112, 1, "#1e3a26") + pine(60, 114, .8, "#24452c") + pine(250, 112, .9, "#1e3a26") + pine(290, 114, 1.1, "#24452c") + pine(340, 112, .9, "#1e3a26") + pine(385, 114, 1, "#24452c") +
      '<rect x="0" y="114" width="400" height="80" fill="#2a4a6a"/><path d="M300 120q20 30 0 60" stroke="#fff3c8" stroke-width="3" opacity=".25" fill="none"/>' +
      '<g class="bs-rip"><ellipse cx="280" cy="160" rx="10" ry="3" fill="none" stroke="#9cc6e8" stroke-width="1.5"/></g>' +
      '<g class="bs-bob"><circle cx="280" cy="158" r="4" fill="#e2392e"/><circle cx="280" cy="155" r="2.5" fill="#fff"/></g>' +
      '<path d="M120 196L276 92" stroke="#6a4a2a" stroke-width="3"/><path d="M276 92Q284 120 280 154" stroke="#ddd" stroke-width="1" fill="none"/>' +
      '<path d="M0 186q100 -10 200 4t200 -6v76H0z" fill="#6a5a3a"/><path d="M0 196q120 -6 240 6t160 -4v62H0z" fill="#4a6a32"/>' +
      '<rect x="20" y="150" width="34" height="40" fill="#6a5a4a"/><path d="M16 150l21 -16l21 16z" fill="#4a3a2a"/><text x="37" y="176" text-anchor="middle" ' + font + ' font-size="6" fill="#d8ccb0">OLD MILL</text>' +
      '<path d="M70 222h40M74 214l32 14M106 214l-32 14" stroke="#5a3a22" stroke-width="5" stroke-linecap="round"/>' +
      '<g class="bs-fire"><path d="M90 216q-14 -20 0 -40q4 14 10 6q6 18 -10 34z" fill="#ff8a1a"/><path d="M90 216q-6 -12 0 -22q4 8 6 4q2 10 -6 18z" fill="#ffe14a"/></g>' +
      '<g class="bs-spark"><circle cx="94" cy="172" r="1.5" fill="#ffd27a"/></g><g class="bs-spark bs-spark2"><circle cx="86" cy="168" r="1.2" fill="#ffd27a"/></g>' +
      '<text x="250" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">WEST POINT LAKE · McCOSH MILL RD</text>',
      sky("bss4", "#0e1630", "#2e3e6a"));
  }

  /* 5. Vernon St & Lafayette Sq, downtown LaGrange */
  function bscorner() {
    const statue = '<rect x="296" y="66" width="20" height="40" fill="#cfc6b2"/><rect x="292" y="104" width="28" height="6" fill="#bdb4a0"/>' +
      '<path d="M306 30q-6 0 -6 7v4h12v-4q0 -7 -6 -7z" fill="#4a6a5a"/><path d="M300 40h12l3 26h-18z" fill="#4a6a5a"/><path d="M312 44l10 -10" stroke="#4a6a5a" stroke-width="4" stroke-linecap="round"/><path d="M300 46l-8 8" stroke="#4a6a5a" stroke-width="4" stroke-linecap="round"/>';
    const fountain = '<path d="M250 136q56 -14 112 0v10h-112z" fill="#cfc6b2" stroke="#9e9682"/><rect x="250" y="126" width="112" height="12" fill="#8fc0e0" opacity=".8"/>' +
      '<g class="bs-jet"><path d="M270 126q4 -18 8 0M334 126q4 -18 8 0" stroke="#bfe2f6" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss5)"/>' + cloud("", 120, 26, 30) +
      '<g opacity=".9">' + bricks(240, 70, 160, 60, "#9a6a4a", "#7a5238") + '</g>' + statue + fountain +
      bricks(0, 112, 236, 116, "#8c3f2c", "#6a2c1e") +
      tag("BUBBA", 20, 180, 48, CLAY, -5) + tag("NEW SOUTH", 30, 212, 20, "#8fd06a", -3) + tag("GET UGLY", 150, 138, 16, "#f2e2b0", -4) +
      '<g class="bs-sp"><circle cx="222" cy="164" r="3" fill="' + CLAY + '" opacity=".7"/></g><g class="bs-sp bs-sp2"><circle cx="228" cy="158" r="2" fill="' + CLAY + '" opacity=".7"/></g>' +
      '<rect x="250" y="146" width="150" height="82" fill="#7a8a5a"/>' +
      '<rect x="262" y="104" width="5" height="124" fill="#5b6168"/>' + sign(272, 160, 120, "VERNON ST") + sign(272, 186, 120, "LAFAYETTE SQ") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">LAGRANGE, GA</text>',
      sky("bss5", "#ffae7a", "#ffe4bc"));
  }

  window.SCENES = { bsstop, bstower, bsmud, bslake, bscorner };
})();
