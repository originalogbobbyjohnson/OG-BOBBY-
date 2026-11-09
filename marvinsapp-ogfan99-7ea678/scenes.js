/* marvinsapp scenes (Regions tab: DETROIT region / Michigan; Grand Rapids, southeast side - born and raised in Grand Rapids in 1967, singing in church from age four; he and his wife MaLinda founded Lighthouse Full Life Center Church on Madison Ave SE in 2003; "Here I Am" recorded live in Wyoming, MI). CSS classes and ids prefixed ms- (the page's own anim-train is kept).
   1 The Rapid's Route 3 Madison bus pulling up to the Burton & Madison stop on the southeast side, light snow falling.
   2 Lighthouse Full Life Center Church on Madison Ave SE: brick church, LIGHTHOUSE sign, a lighthouse beam sweeping the night sky.
   3 Resurrection Life Church in Wyoming, MI, Oct 16 2009, recording "Here I Am" live: choir on the risers, stage lights sweeping, the red REC light.
   4 The Blue Bridge over the Grand River downtown: the blue steel truss lit at night, the river rippling, the towers behind.
   5 Madison Ave SE and Burton St SE: green signs, SAPP tagged on the brick, the downtown Grand Rapids towers on the skyline behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes msblink{0%,100%{opacity:.3}50%{opacity:1}}.ms-bl{animation:msblink 1.5s ease-in-out infinite}.ms-bl2{animation-delay:-.75s}' +
    '@keyframes mssnow{0%{transform:translateY(-12px)}100%{transform:translateY(272px)}}.ms-snow{animation:mssnow 7s linear infinite}.ms-sn2{animation-delay:-2.3s}.ms-sn3{animation-delay:-4.6s}' +
    '@keyframes msbeam{0%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}100%{transform:rotate(-38deg)}}.ms-beam{animation:msbeam 5s ease-in-out infinite;transform-origin:318px 58px}' +
    '@keyframes msspot{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.ms-spot{animation:msspot 3.4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0%}.ms-spot2{animation-delay:-1.7s}' +
    '@keyframes mssway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ms-sway{animation:mssway 1.7s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.ms-s2{animation-delay:-.42s}.ms-s3{animation-delay:-.85s}.ms-s4{animation-delay:-1.27s}' +
    '@keyframes msnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.ms-note{animation:msnote 3s ease-out infinite}.ms-n2{animation-delay:-1s}.ms-n3{animation-delay:-2s}' +
    '@keyframes msrip{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(10px);opacity:1}}.ms-rip{animation:msrip 2.8s ease-in-out infinite}.ms-rip2{animation-delay:-1.4s}' +
    '@keyframes msspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ms-sp{animation:msspray 1.4s ease-out infinite}.ms-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const badge = (cx, cy, t, c) => '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="' + c + '"/><text x="' + cx + '" y="' + (cy + 4.5) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + t + '</text>';
  const BLUE = "#7fc4ff", GOLD = "#f2c14e", CORAL = "#ff8a6a", RAPID = "#0067b1";
  const snow = () => { let s = ""; for (let i = 0; i < 24; i++) s += '<circle class="ms-snow ' + ["", "ms-sn2", "ms-sn3"][i % 3] + '" cx="' + ((i * 67) % 400) + '" cy="' + ((i * 31) % 110 - 20) + '" r="' + (i % 2 ? 1.3 : 1.9) + '" fill="#fff" opacity=".85"/>'; return s; };
  const note = (x, y, c, cls) => '<g class="ms-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const robe = (x, base, c, cls) => '<g class="ms-sway ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 28) + '" r="5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 8) + ' ' + base + 'l2 -20q6 -5 12 0l2 20z" fill="' + c + '"/><path d="M' + (x - 4) + ' ' + (base - 21) + 'q4 3 8 0" stroke="' + GOLD + '" stroke-width="1.6" fill="none"/></g>';
  const skyline = (y, c, lit) => '<g fill="' + c + '"><rect x="20" y="' + (y - 40) + '" width="34" height="40"/><rect x="60" y="' + (y - 64) + '" width="30" height="64"/><rect x="96" y="' + (y - 50) + '" width="40" height="50"/>' +
    '<rect x="146" y="' + (y - 96) + '" width="38" height="96"/><rect x="152" y="' + (y - 104) + '" width="26" height="8"/><rect x="192" y="' + (y - 72) + '" width="34" height="72"/><rect x="234" y="' + (y - 56) + '" width="44" height="56"/>' +
    '<path d="M288 ' + y + 'v-84l26 -10 26 10v84z"/><rect x="348" y="' + (y - 46) + '" width="40" height="46"/></g>' +
    (lit ? [[66, y - 56], [74, y - 44], [158, y - 86], [168, y - 70], [158, y - 54], [200, y - 60], [210, y - 42], [298, y - 70], [320, y - 56], [304, y - 40], [244, y - 44], [358, y - 34], [106, y - 36]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="5" height="6" fill="#ffd98a"' + (i % 3 ? "" : ' class="ms-bl' + (i % 2 ? " ms-bl2" : "") + '"') + '/>').join("") : "");

  /* 1. The Rapid Route 3 Madison at Burton & Madison */
  function msstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (78 + i * 44) + '" y="118" width="36" height="28" rx="3" fill="#2d3e4e"/><rect x="' + (80 + i * 44) + '" y="120" width="10" height="24" fill="#5a7590" opacity=".5"/>';
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="80" rx="10" fill="#f3f5f2" stroke="#7b848c" stroke-width="2"/>' +
      '<rect x="40" y="150" width="320" height="12" fill="' + RAPID + '"/><path d="M40 166h320" stroke="#7ac043" stroke-width="4"/>' + win +
      '<rect x="44" y="114" width="28" height="44" rx="3" fill="#2d3e4e"/><rect x="40" y="104" width="320" height="10" rx="5" fill="#d9ded9"/>' +
      '<rect x="270" y="107" width="86" height="9" rx="2" fill="#111"/><text x="313" y="114.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb020">3 MADISON</text>' +
      '<circle cx="96" cy="186" r="15" fill="#1b1b1b"/><circle cx="96" cy="186" r="6" fill="#888"/><circle cx="304" cy="186" r="15" fill="#1b1b1b"/><circle cx="304" cy="186" r="6" fill="#888"/>' +
      '<circle class="ms-bl" cx="355" cy="172" r="3" fill="#ffdc7a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss1)"/>' +
      /* southeast-side houses behind */
      '<g><rect x="10" y="60" width="80" height="50" fill="#b8a48a"/><path d="M4 60h92l-46 -26z" fill="#5a4a3e"/><rect x="24" y="72" width="14" height="16" fill="#ffd98a" class="ms-bl"/><rect x="60" y="72" width="14" height="16" fill="#3a4a5a"/></g>' +
      '<g><rect x="300" y="56" width="90" height="54" fill="#8aa0b0"/><path d="M294 56h102l-51 -28z" fill="#4a4e5a"/><rect x="316" y="70" width="14" height="16" fill="#3a4a5a"/><rect x="356" y="70" width="14" height="16" fill="#ffd98a" class="ms-bl ms-bl2"/></g>' +
      '<g><rect x="120" y="66" width="70" height="44" fill="#c8b8a0"/><path d="M114 66h82l-41 -22z" fill="#6a5242"/><rect x="200" y="70" width="80" height="40" fill="#9a7a6a"/><path d="M196 70h88l-44 -20z" fill="#4a3a32"/></g>' +
      '<rect x="0" y="110" width="400" height="10" fill="#e8ecef"/>' +
      '<rect x="0" y="184" width="400" height="20" fill="#6a6e72"/><rect x="0" y="198" width="400" height="62" fill="#e8ecef"/>' +
      bus +
      '<rect x="40" y="208" width="320" height="42" rx="3" fill="#111"/><text x="54" y="226" ' + font + ' font-size="15" fill="#fff">Burton St SE /</text><text x="54" y="243" ' + font + ' font-size="15" fill="#fff">Madison Ave SE</text>' +
      badge(240, 228, "3", RAPID) + '<text x="258" y="225" ' + font + ' font-size="8.5" fill="#cfd8e0">THE RAPID</text><text x="258" y="237" ' + font + ' font-size="8.5" fill="' + GOLD + '">GRAND RAPIDS</text>' +
      snow(),
      sky("mss1", "#6a86a8", "#d8e0e8"));
  }

  /* 2. Lighthouse Full Life Center Church, Madison Ave SE */
  function mschurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#mss2)"/>' +
      '<circle cx="40" cy="30" r="1.4" fill="#fff" class="ms-bl"/><circle cx="120" cy="18" r="1.2" fill="#fff" class="ms-bl ms-bl2"/><circle cx="220" cy="34" r="1.5" fill="#fff"/><circle cx="380" cy="20" r="1.3" fill="#fff" class="ms-bl"/>' +
      /* sweeping beam from the lighthouse */
      '<g class="ms-beam"><path d="M318 58L120 -10L120 40z" fill="#fff6c2" opacity=".28"/></g>' +
      /* lighthouse tower */
      '<path d="M304 214l6 -146h16l6 146z" fill="#f3efe6"/>' + [96, 132, 168].map(y => '<path d="M' + (310 - (y - 68) * 0.04) + ' ' + y + 'h' + (16 + (y - 68) * 0.08) + 'v14h-' + (16 + (y - 68) * 0.08) + 'z" fill="#c8322a"/>').join("") +
      '<rect x="306" y="50" width="24" height="18" fill="#ffe89a" class="ms-bl"/><path d="M302 50l16 -14 16 14z" fill="#2a2a2a"/><rect x="302" y="66" width="32" height="4" fill="#2a2a2a"/>' +
      /* brick church */
      '<rect x="40" y="110" width="240" height="104" fill="#8a4a36"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M40 ' + (120 + r * 10) + 'h240" stroke="#6e3a2a" stroke-width="1"/>').join("") +
      '<path d="M30 112l130 -40 130 40z" fill="#3a3a40"/>' +
      [62, 102, 202, 242].map(x => '<rect x="' + x + '" y="134" width="20" height="40" rx="10" fill="#ffd98a" opacity=".85"/>').join("") +
      '<path d="M138 214v-60q22 -22 44 0v60z" fill="#3a2a22" stroke="#f3efe6" stroke-width="3"/><path d="M160 154v60" stroke="#f3efe6" stroke-width="2"/>' +
      '<rect x="100" y="86" width="120" height="22" rx="3" fill="#f3efe6" stroke="#c8b89a"/><text x="160" y="96" text-anchor="middle" ' + font + ' font-size="8" fill="#1a3a6a">LIGHTHOUSE</text><text x="160" y="105" text-anchor="middle" ' + font + ' font-size="6.4" fill="#1a3a6a">FULL LIFE CENTER CHURCH</text>' +
      note(200, 130, GOLD) + note(90, 128, BLUE, "ms-n2") + note(150, 120, "#fff", "ms-n3") +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3e44"/><path d="M0 236h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="20" y="240" width="120" height="16" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.2"/><text x="80" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">Madison Ave SE</text>',
      sky("mss2", "#0c1430", "#3a4a7a"));
  }

  /* 3. Resurrection Life Church, Wyoming MI: recording "Here I Am" live */
  function msrecord() {
    const choir = [60, 84, 108, 132, 156, 180, 204, 228, 252, 276, 300, 324].map((x, i) => robe(x + 10, 130 + (i % 2) * 2, i % 3 ? "#1f4a8a" : "#c8a24a", ["", "ms-s2", "ms-s3", "ms-s4"][i % 4])).join("") +
      [72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312].map((x, i) => robe(x + 10, 102, i % 2 ? "#1f4a8a" : "#c8a24a", ["ms-s3", "", "ms-s4", "ms-s2"][i % 4])).join("");
    const hands = Array.from({ length: 16 }, (_, i) => '<path class="ms-sway ' + ["", "ms-s2", "ms-s3", "ms-s4"][i % 4] + '" d="M' + (14 + i * 25) + ' 260v-30q2 -10 6 -14" stroke="#120c1a" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") +
      Array.from({ length: 17 }, (_, i) => '<circle cx="' + (i * 25) + '" cy="' + (246 - (i % 2) * 4) + '" r="11" fill="#120c1a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mss3)"/>' +
      '<g class="ms-spot"><path d="M90 0l-50 180h100z" fill="#7fc4ff" opacity=".18"/></g><g class="ms-spot ms-spot2"><path d="M310 0l-50 180h100z" fill="#f2c14e" opacity=".18"/></g><g class="ms-spot ms-spot2"><path d="M200 0l-40 180h80z" fill="#fff" opacity=".12"/></g>' +
      '<rect x="0" y="0" width="400" height="10" fill="#1a1a22"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 6) + '" y="8" width="12" height="10" fill="#2a2a32"/><circle cx="' + x + '" cy="19" r="3" fill="#ffe8b0"/>').join("") +
      '<rect x="40" y="104" width="320" height="8" fill="#2a2234"/><rect x="40" y="134" width="320" height="8" fill="#2a2234"/>' +
      choir +
      '<rect x="0" y="150" width="400" height="40" fill="#3a2e44"/><rect x="0" y="150" width="400" height="4" fill="' + GOLD + '"/>' +
      '<path d="M196 190v-34" stroke="#888" stroke-width="2"/><ellipse cx="196" cy="154" rx="3" ry="5" fill="#333"/>' +
      '<rect x="20" y="40" width="56" height="18" rx="3" fill="#111"/><circle cx="32" cy="49" r="4.5" fill="#e33" class="ms-bl"/><text x="58" y="53" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">REC</text>' +
      '<rect x="300" y="40" width="88" height="30" rx="3" fill="#111" opacity=".8"/><text x="344" y="52" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">HERE I AM</text><text x="344" y="64" text-anchor="middle" ' + font + ' font-size="7" fill="#cfd8e0">LIVE · WYOMING, MI</text>' +
      note(150, 90, GOLD) + note(250, 86, BLUE, "ms-n2") + note(200, 70, "#fff", "ms-n3") +
      '<rect x="0" y="190" width="400" height="70" fill="#1a1424"/>' + hands,
      sky("mss3", "#1a1030", "#4a2a5a"));
  }

  /* 4. The Blue Bridge over the Grand River */
  function msbridge() {
    let truss = ""; for (let x = 20; x < 380; x += 20) truss += '<path d="M' + x + ' 150L' + (x + 10) + ' 122L' + (x + 20) + ' 150" stroke="#2f7fd6" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mss4)"/>' +
      '<circle cx="340" cy="34" r="12" fill="#f2efe0" opacity=".9"/>' +
      skyline(132, "#1a2238", true) +
      /* bridge */
      '<rect x="0" y="148" width="400" height="6" fill="#2f7fd6"/><rect x="0" y="120" width="400" height="4" fill="#2f7fd6"/>' + truss +
      [60, 200, 340].map(x => '<rect x="' + (x - 6) + '" y="154" width="12" height="40" fill="#5a5e66"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="146" r="2.4" fill="#fff6c2"' + (i % 2 ? ' class="ms-bl"' : ' class="ms-bl ms-bl2"') + '/>').join("") +
      /* river */
      '<rect x="0" y="170" width="400" height="90" fill="#16324a"/>' +
      '<rect x="0" y="174" width="400" height="20" fill="#2f7fd6" opacity=".18"/>' +
      '<g class="ms-rip"><path d="M30 196h70M200 212h90M90 232h60M300 240h70" stroke="#7fc4ff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="ms-rip ms-rip2"><path d="M140 202h50M260 224h60M20 246h50M330 206h50" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + BLUE + '">THE BLUE BRIDGE · GRAND RIVER</text>',
      sky("mss4", "#0a1226", "#2a3a6a"));
  }

  /* 5. Madison Ave SE and Burton St SE, downtown towers behind */
  function mscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mss5)"/>' +
      skyline(132, "#3a4a6a", false) +
      '<rect x="146" y="36" width="38" height="96" fill="#3d6fa8"/><rect x="152" y="28" width="26" height="8" fill="#3d6fa8"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M146 ' + (44 + i * 11) + 'h38" stroke="#7fb0e0" stroke-width="1.2"/>').join("") +
      '<rect x="0" y="132" width="400" height="88" fill="#9a5a42"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (142 + r * 10) + 'h400" stroke="#7a4632" stroke-width="1"/>').join("") +
      tag("SAPP", 34, 198, 50, BLUE, -5) + tag("I MADE IT", 190, 178, 22, GOLD, -7) + tag("LIGHTHOUSE", 176, 208, 16, CORAL, -4) +
      '<g class="ms-sp"><circle cx="150" cy="160" r="2" fill="' + BLUE + '"/><circle cx="156" cy="154" r="1.5" fill="' + BLUE + '"/></g><g class="ms-sp ms-sp2"><circle cx="154" cy="166" r="1.6" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4e54"/><path d="M0 238h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="352" y="90" width="5" height="130" fill="#6a6a70"/>' + sign(286, 92, 110, "Madison Ave SE") + sign(286, 116, 110, "Burton St SE") +
      snow(),
      sky("mss5", "#5a7aa8", "#f0c8a0"));
  }

  window.SCENES = { msstation: msstation, mschurch: mschurch, msrecord: msrecord, msbridge: msbridge, mscorner: mscorner };
})();
