/* mavi scenes (Regions tab: The Carolinas; West Charlotte, Charlotte NC). CSS classes and ids prefixed mv- (the page's own anim-train is kept).
   1 French Street, the CityLYNX Gold Line's west end on Beatties Ford Rd: the white-and-gold streetcar slides in under the overhead wire.
   2 West Charlotte High: the Mighty Lions marching band (maroon and gold) on the field, a middle-brass horn up front, the new school behind.
   3 Howard University: Founders Library's red brick and white clock tower, the bell ringing, leaves falling (where he studied).
   4 The garage studio: the family garage door rolled up, the mixing board and mic, the sun coming up (Let the Sun Talk).
   5 Beatties Ford Rd and Senior Dr: green signs, MAVI tagged on the brick, the Excelsior Club's stepped Art Deco front behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mvflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mv-flk{animation:mvflick 2.4s infinite}.mv-flk2{animation-delay:.8s}' +
    '@keyframes mvspark{0%,100%{opacity:0}50%{opacity:1}}.mv-spark{animation:mvspark .9s ease-in-out infinite}' +
    '@keyframes mvmarch{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.mv-m{animation:mvmarch .5s ease-in-out infinite}.mv-m2{animation-delay:-.25s}' +
    '@keyframes mvflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mv-flag{transform-box:fill-box;transform-origin:0 50%;animation:mvflag 1.2s ease-in-out infinite}' +
    '@keyframes mvnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}.mv-note{animation:mvnote 2.4s linear infinite}.mv-n2{animation-delay:-.8s}.mv-n3{animation-delay:-1.6s}' +
    '@keyframes mvleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-40px,240px) rotate(300deg)}}.mv-leaf{animation:mvleaf 6s linear infinite}.mv-l2{animation-delay:-2s}.mv-l3{animation-delay:-4s}' +
    '@keyframes mvswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mv-bell{transform-box:fill-box;transform-origin:50% 0;animation:mvswing 1.6s ease-in-out infinite}' +
    '@keyframes mvsun{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.mv-sun{animation:mvsun 5s ease-in-out infinite}' +
    '@keyframes mvray{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mv-ray{transform-box:fill-box;transform-origin:center;animation:mvray 30s linear infinite}' +
    '@keyframes mvlvl{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.mv-lv{transform-box:fill-box;transform-origin:50% 100%;animation:mvlvl .7s ease-in-out infinite}.mv-lv2{animation-delay:-.2s}.mv-lv3{animation-delay:-.45s}.mv-lv4{animation-delay:-.1s}' +
    '@keyframes mvcar{from{transform:translateX(-160px)}to{transform:translateX(560px)}}.mv-car{animation:mvcar 8s linear infinite}' +
    '@keyframes mvsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mv-sp{animation:mvsp 1.4s ease-out infinite}.mv-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, base, line) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>';
    for (let r = 0; r * 7 < h; r++) {
      s += '<path d="M' + x + ' ' + (y + r * 7) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>';
      for (let c = 0; c * 22 < w; c++) { const bx = x + c * 22 + (r % 2) * 11; if (bx < x + w) s += '<path d="M' + bx + ' ' + (y + r * 7) + 'v7" stroke="' + line + '" stroke-width="1"/>'; }
    }
    return s;
  };

  /* 1. French Street, CityLYNX Gold Line */
  function mvstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 38) + '" y="124" width="28" height="26" rx="3" fill="#1b2633"/>').join("");
    const car = '<g class="anim-train">' +
      '<path d="M28 186V128q0 -14 16 -16h300q22 2 30 22v52z" fill="#f4f4f1" stroke="#7d848b" stroke-width="2"/>' + win +
      '<rect x="28" y="156" width="346" height="7" fill="#d9a520"/><rect x="28" y="165" width="346" height="3" fill="#8a7a5a"/>' +
      '<path d="M344 120q20 4 26 26h-26z" fill="#1b2633"/>' +
      '<rect x="276" y="113" width="66" height="9" rx="2" fill="#111"/><text x="309" y="120.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">FRENCH ST</text>' +
      '<path d="M190 112l-14 -22h48l-14 22" fill="none" stroke="#3a3f45" stroke-width="2.5"/>' +
      '<g class="mv-spark"><circle cx="200" cy="88" r="3" fill="#bfe8ff"/><path d="M196 84l-5 -4M204 84l5 -4" stroke="#bfe8ff" stroke-width="1.5"/></g>' +
      '<circle cx="80" cy="188" r="10" fill="#222"/><circle cx="80" cy="188" r="4" fill="#888"/><circle cx="320" cy="188" r="10" fill="#222"/><circle cx="320" cy="188" r="4" fill="#888"/>' +
      '<circle cx="368" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mvs1)"/>' +
      '<g fill="#2d2a3a">' + [[0, 58, 60], [64, 70, 50], [300, 54, 46], [350, 66, 50]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="40"/>').join("") + '</g>' +
      '<g class="mv-flk"><rect x="14" y="70" width="7" height="7" fill="#ffd27a"/><rect x="320" y="66" width="7" height="7" fill="#ffd27a"/></g><g class="mv-flk mv-flk2"><rect x="80" y="82" width="7" height="7" fill="#ffd27a"/><rect x="370" y="78" width="7" height="7" fill="#ffd27a"/></g>' +
      '<path d="M0 88h400" stroke="#2a2d33" stroke-width="2"/>' +
      [30, 370].map(x => '<rect x="' + (x - 3) + '" y="80" width="6" height="120" fill="#4a4f57"/><path d="M' + x + ' 88h' + (x < 200 ? 20 : -20) + '" stroke="#4a4f57" stroke-width="3"/>').join("") +
      car +
      '<rect x="0" y="198" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="198" width="400" height="3" fill="#e9d27a"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4e5257"/><path d="M0 236h400" stroke="#d9d9d9" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="98" y="212" width="204" height="40" rx="3" fill="#111"/>' +
      '<rect x="108" y="220" width="34" height="24" rx="4" fill="#d9a520"/><text x="125" y="236" text-anchor="middle" ' + font + ' font-size="9" fill="#111">GOLD</text>' +
      '<text x="150" y="231" ' + font + ' font-size="13" fill="#fff">French Street</text><text x="150" y="245" ' + font + ' font-size="8.5" fill="#cfd8dc">CityLYNX · Beatties Ford Rd</text>',
      sky("mvs1", "#1a1d3a", "#e8946a"));
  }

  /* 2. West Charlotte High, the marching band */
  function mvband() {
    const player = (x, y, cls, horn) => '<g class="mv-m ' + cls + '">' +
      '<rect x="' + (x - 6) + '" y="' + (y - 34) + '" width="12" height="9" rx="2" fill="#f2c14e"/><path d="M' + (x - 2) + ' ' + (y - 34) + 'v-8" stroke="#fff" stroke-width="3"/>' +
      '<circle cx="' + x + '" cy="' + (y - 21) + '" r="5" fill="#6b4a3a"/>' +
      '<rect x="' + (x - 7) + '" y="' + (y - 16) + '" width="14" height="18" rx="2" fill="#7a1f2b"/><path d="M' + (x - 7) + ' ' + (y - 10) + 'l7 6l7 -6" stroke="#f2c14e" stroke-width="2" fill="none"/>' +
      '<rect x="' + (x - 6) + '" y="' + (y + 2) + '" width="5" height="14" fill="#f4f1ea"/><rect x="' + (x + 1) + '" y="' + (y + 2) + '" width="5" height="14" fill="#f4f1ea"/>' +
      (horn ? '<path d="M' + (x + 5) + ' ' + (y - 12) + 'h10q4 -10 12 -12v18q-8 -2 -12 -6h-10z" fill="#e8c04a" stroke="#8a6a1a" stroke-width="1"/>' : '<rect x="' + (x + 4) + '" y="' + (y - 14) + '" width="14" height="4" fill="#d8b23e"/>') + '</g>';
    let band = '';
    [[60, 196], [110, 196], [160, 196], [210, 196], [260, 196], [310, 196]].forEach((p, i) => band += player(p[0], p[1], i % 2 ? "mv-m2" : "", i % 2 === 0));
    [[86, 228], [136, 228], [186, 228], [236, 228], [286, 228], [336, 228]].forEach((p, i) => band += player(p[0], p[1], i % 2 ? "" : "mv-m2", i % 2 === 1));
    return svg(
      '<rect width="400" height="260" fill="url(#mvs2)"/>' +
      '<rect x="40" y="82" width="320" height="70" fill="#d8cbb4"/><rect x="40" y="82" width="320" height="10" fill="#7a1f2b"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (54 + i * 34) + '" y="100" width="22" height="34" fill="#3d5266"/>').join("") +
      '<rect x="170" y="118" width="60" height="34" fill="#2b3a48"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c14e">WEST CHARLOTTE HIGH</text>' +
      '<g class="mv-flag"><rect x="8" y="58" width="50" height="30" fill="#7a1f2b"/><text x="33" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="#f2c14e">LIONS</text></g><rect x="4" y="54" width="4" height="100" fill="#cfcfcf"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3f8a3a"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 150v110" stroke="#e8f2e4" stroke-width="2" opacity=".7"/>').join("") +
      band +
      '<g class="mv-note"><text x="300" y="160" font-size="16" fill="#f2c14e">♪</text></g><g class="mv-note mv-n2"><text x="120" y="160" font-size="14" fill="#fff">♫</text></g>',
      sky("mvs2", "#26305a", "#f2a65e"));
  }

  /* 3. Howard University, Founders Library */
  function mvhoward() {
    const wins = [];
    for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) { const x = (c < 3 ? 62 + c * 30 : 252 + (c - 3) * 30); wins.push('<rect x="' + x + '" y="' + (148 + r * 30) + '" width="16" height="22" fill="#2a3448" stroke="#f4f1ea" stroke-width="2"/>'); }
    return svg(
      '<rect width="400" height="260" fill="url(#mvs3)"/>' +
      bricks(48, 132, 304, 92, "#a8452f", "#843424") +
      '<path d="M44 134L200 112 356 134z" fill="#f4f1ea"/><rect x="44" y="132" width="312" height="5" fill="#f4f1ea"/>' +
      '<rect x="170" y="96" width="60" height="128" fill="#a8452f"/>' + bricks(170, 96, 60, 128, "#a8452f", "#843424") +
      '<rect x="166" y="92" width="68" height="6" fill="#f4f1ea"/>' +
      '<rect x="176" y="56" width="48" height="38" fill="#f4f1ea"/><circle cx="200" cy="75" r="13" fill="#fdfbf4" stroke="#3a3a3a" stroke-width="1.5"/><path d="M200 75v-8M200 75l6 3" stroke="#222" stroke-width="1.8"/>' +
      '<rect x="182" y="30" width="36" height="26" fill="#f4f1ea"/><path d="M190 52v-14q10 -10 20 0v14" fill="#4a4436"/>' +
      '<g class="mv-bell"><path d="M194 42q6 -8 12 0v8h-12z" fill="#c9a24a"/></g>' +
      '<path d="M186 30L200 6 214 30z" fill="#f4f1ea"/><path d="M200 6v-6" stroke="#c9a24a" stroke-width="2"/>' +
      wins.join("") +
      '<path d="M184 224v-40q16 -18 32 0v40z" fill="#3a2a22"/>' + [180, 194, 206, 220].map(x => '<rect x="' + (x - 2) + '" y="176" width="4" height="48" fill="#f4f1ea"/>').join("") +
      '<g fill="#3f6b38"><circle cx="20" cy="212" r="30"/><circle cx="380" cy="208" r="32"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#7f8a70"/><path d="M150 260l30 -36h40l30 36z" fill="#cfc6b2"/>' +
      '<g class="mv-leaf"><path d="M330 0q6 -6 12 0q-6 6 -12 0z" fill="#e8a23a"/></g><g class="mv-leaf mv-l2"><path d="M90 0q6 -6 12 0q-6 6 -12 0z" fill="#d0552e"/></g><g class="mv-leaf mv-l3"><path d="M250 0q6 -6 12 0q-6 6 -12 0z" fill="#f2c14e"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#2a2a22">FOUNDERS LIBRARY · WASHINGTON, D.C.</text>',
      sky("mvs3", "#3a5f9a", "#f6d6a0"));
  }

  /* 4. The garage studio, the sun coming up */
  function mvgarage() {
    const knobs = Array.from({ length: 8 }, (_, i) => '<circle cx="' + (156 + i * 12) + '" cy="178" r="3" fill="#f2c14e"/><rect x="' + (154 + i * 12) + '" y="184" width="4" height="12" fill="#555"/>').join("");
    const lv = [0, 1, 2, 3].map(i => '<rect class="mv-lv mv-lv' + (i + 1) + '" x="' + (262 + i * 8) + '" y="148" width="5" height="22" fill="' + (i < 2 ? "#5be37d" : "#f2c14e") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mvs4)"/>' +
      '<g class="mv-sun"><g class="mv-ray">' + Array.from({ length: 12 }, (_, i) => '<path d="M330 70l' + (Math.cos(i * Math.PI / 6) * 46).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 6) * 46).toFixed(1) + '" stroke="#ffd36b" stroke-width="3" opacity=".7"/>').join("") + '</g><circle cx="330" cy="70" r="26" fill="#ffc145"/></g>' +
      '<path d="M40 108L170 56 300 108z" fill="#5a4a46"/>' +
      '<rect x="50" y="106" width="240" height="122" fill="#e9dcc6"/>' +
      '<rect x="80" y="122" width="180" height="106" fill="#2a2430"/>' +
      '<rect x="80" y="114" width="180" height="8" fill="#f4efe6" stroke="#bdb3a3" stroke-width="1"/><rect x="80" y="122" width="180" height="4" fill="#bdb3a3"/>' +
      '<path d="M90 126l4 6h152l4 -6" fill="#3a3340"/><circle cx="170" cy="128" r="3" fill="#ffd36b" class="mv-flk"/>' +
      '<rect x="146" y="170" width="104" height="30" rx="3" fill="#3a3a42"/>' + knobs +
      '<rect x="142" y="200" width="112" height="28" fill="#4a3a2e"/>' +
      '<rect x="256" y="144" width="40" height="30" rx="3" fill="#1b1b1f"/>' + lv +
      '<path d="M112 228v-54" stroke="#888" stroke-width="3"/><path d="M112 174l-10 -16" stroke="#888" stroke-width="3"/><rect x="94" y="146" width="14" height="20" rx="7" fill="#c9c9c9" transform="rotate(-30 101 156)"/>' +
      '<rect x="88" y="132" width="40" height="28" fill="#1b1b1f"/><circle cx="108" cy="146" r="9" fill="#333"/><circle cx="108" cy="146" r="4" fill="#666"/>' +
      '<g class="mv-note"><text x="120" y="150" font-size="14" fill="#ffc145">♪</text></g><g class="mv-note mv-n3"><text x="200" y="160" font-size="12" fill="#fff">♫</text></g>' +
      '<rect x="0" y="228" width="400" height="32" fill="#8a8478"/><path d="M80 260l10 -32h160l10 32z" fill="#a49d90"/>' +
      '<g fill="#3d6b3a"><circle cx="20" cy="216" r="22"/><circle cx="380" cy="214" r="24"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#1f1c18">THE GARAGE STUDIO · LET THE SUN TALK</text>',
      sky("mvs4", "#f08a5d", "#ffe0a3"));
  }

  /* 5. Beatties Ford Rd and Senior Dr, the Excelsior Club behind */
  function mvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mvs5)"/>' +
      /* the Excelsior Club: stepped white Art Deco front */
      '<g transform="translate(190 0)">' +
      '<rect x="0" y="96" width="190" height="80" fill="#efece4"/><rect x="20" y="78" width="150" height="20" fill="#efece4"/><rect x="50" y="60" width="90" height="20" fill="#efece4"/><rect x="80" y="42" width="30" height="20" fill="#efece4"/>' +
      '<path d="M0 96h190M20 78h150M50 60h90" stroke="#bdb6a6" stroke-width="2"/>' +
      '<rect x="90" y="44" width="10" height="132" fill="#d9d3c4"/>' +
      [12, 40, 128, 156].map(x => '<rect x="' + x + '" y="110" width="22" height="30" fill="#6fa3b8" stroke="#bdb6a6" stroke-width="2"/>').join("") +
      '<rect x="70" y="128" width="50" height="48" fill="#3a3a44"/><rect x="64" y="122" width="62" height="6" fill="#bdb6a6"/>' +
      '<g class="mv-flk"><rect x="60" y="100" width="70" height="12" rx="2" fill="#f2c14e" opacity=".85"/></g>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4e5257"/><path d="M0 214h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="mv-car"><rect x="0" y="196" width="70" height="20" rx="6" fill="#7a1f2b"/><rect x="12" y="186" width="42" height="14" rx="5" fill="#9b3040"/><circle cx="16" cy="218" r="6" fill="#222"/><circle cx="56" cy="218" r="6" fill="#222"/></g>' +
      bricks(0, 70, 176, 106, "#8f4a36", "#6f3626") +
      tag("MAVI", 26, 140, 46, "#ffc145", -8) +
      tag("4 MAYOR", 40, 166, 18, "#7fd4c1", -6) +
      '<g class="mv-sp"><circle cx="150" cy="118" r="2" fill="#ffc145"/></g><g class="mv-sp mv-sp2"><circle cx="158" cy="126" r="2" fill="#7fd4c1"/></g>' +
      '<rect x="178" y="40" width="5" height="160" fill="#4a4f57"/>' +
      sign(118, 40, 120, "Beatties Ford Rd") + sign(130, 66, 96, "Senior Dr"),
      sky("mvs5", "#1c1f44", "#e88d6a"));
  }

  window.SCENES = { mvstation, mvband, mvhoward, mvgarage, mvcorner };
})();
