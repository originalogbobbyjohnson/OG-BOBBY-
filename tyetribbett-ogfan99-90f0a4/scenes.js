/* tyetribbett scenes (REGIONS tab: PHILADELPHIA region, across the river in Camden, NJ - born and raised in Camden, raised in the Apostolic Pentecostal El Bethel Church of Christ on Pine St, where his father began his ministry on the organ; Tye Tribbett & G.A. (Greater Anointing)). CSS classes and ids prefixed tt- (the page's own anim-train is kept).
   1 PATCO pulling into Broadway, under the Walter Rand Transportation Center in downtown Camden.
   2 El Bethel Church of Christ on Pine St: the brick church, the organ's notes floating out the door.
   3 Tye Tribbett & G.A. on the risers: choir in black and white swaying, VICTORY lights, confetti.
   4 The Camden waterfront: the grey Battleship New Jersey, signal flags waving, the river rippling.
   5 Pine St and S 3rd St: green signs, TYE tagged on the brick, Camden City Hall's stepped tower behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ttblink{0%,100%{opacity:.3}50%{opacity:1}}.tt-bl{animation:ttblink 1.5s ease-in-out infinite}.tt-bl2{animation-delay:-.75s}' +
    '@keyframes ttsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tt-sway{animation:ttsway 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.tt-s2{animation-delay:-.3s}.tt-s3{animation-delay:-.6s}.tt-s4{animation-delay:-.9s}' +
    '@keyframes ttnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-60px);opacity:0}}.tt-note{animation:ttnote 3s ease-out infinite}.tt-n2{animation-delay:-1s}.tt-n3{animation-delay:-2s}' +
    '@keyframes ttconf{0%{transform:translateY(-20px) rotate(0)}100%{transform:translateY(200px) rotate(360deg)}}.tt-cf{animation:ttconf 3.4s linear infinite;transform-box:fill-box;transform-origin:50% 50%}.tt-c2{animation-delay:-1.1s}.tt-c3{animation-delay:-2.2s}' +
    '@keyframes ttspot{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.tt-spot{animation:ttspot 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 0%}.tt-spot2{animation-delay:-1.4s}' +
    '@keyframes ttflag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.tt-flag{animation:ttflag 1.3s ease-in-out infinite;transform-box:fill-box;transform-origin:0% 50%}.tt-f2{animation-delay:-.4s}.tt-f3{animation-delay:-.8s}' +
    '@keyframes ttrip{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(10px);opacity:1}}.tt-rip{animation:ttrip 2.6s ease-in-out infinite}.tt-rip2{animation-delay:-1.3s}' +
    '@keyframes ttgull{0%{transform:translate(-40px,0)}100%{transform:translate(440px,-20px)}}.tt-gull{animation:ttgull 9s linear infinite}' +
    '@keyframes ttspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tt-sp{animation:ttspray 1.4s ease-out infinite}.tt-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const RED = "#ff5a3c", CYAN = "#4fd1ff", YEL = "#ffd23f", PATCO = "#c8102e";
  const note = (x, y, c, cls) => '<g class="tt-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 17) + '" width="1.8" height="17" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 17) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const singer = (x, base, c, cls) => '<g class="tt-sway ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 28) + '" r="5" fill="#2a1a12"/>' +
    '<path d="M' + (x - 8) + ' ' + base + 'l2 -20q6 -5 12 0l2 20z" fill="' + c + '"/><path d="M' + (x - 2) + ' ' + (base - 21) + 'v10" stroke="#fff" stroke-width="2"/></g>';
  const philly = (y, c) => '<g fill="' + c + '"><rect x="10" y="' + (y - 30) + '" width="26" height="30"/><rect x="40" y="' + (y - 52) + '" width="22" height="52"/><path d="M70 ' + y + 'v-74l12 -14 12 14v74z"/>' +
    '<rect x="102" y="' + (y - 60) + '" width="24" height="60"/><path d="M134 ' + y + 'v-86l10 -18 10 18v86z"/><rect x="162" y="' + (y - 44) + '" width="30" height="44"/><rect x="200" y="' + (y - 66) + '" width="20" height="66"/>' +
    '<rect x="228" y="' + (y - 38) + '" width="34" height="38"/><rect x="270" y="' + (y - 54) + '" width="24" height="54"/><rect x="302" y="' + (y - 34) + '" width="40" height="34"/><rect x="350" y="' + (y - 46) + '" width="40" height="46"/></g>';

  /* 1. PATCO at Broadway (Walter Rand Transportation Center) */
  function ttstation() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (74 + i * 46) + '" y="112" width="34" height="26" rx="2" fill="#20303c"/><rect x="' + (76 + i * 46) + '" y="114" width="10" height="22" fill="#6a8aa4" opacity=".5"/>';
    const train = '<g class="anim-train"><rect x="40" y="100" width="330" height="80" rx="6" fill="#c7ccd1" stroke="#7d858c" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (50 + i * 20) + ' 146v32" stroke="#aeb4ba" stroke-width="1"/>').join("") + win +
      '<rect x="40" y="142" width="330" height="6" fill="' + PATCO + '"/><rect x="40" y="150" width="330" height="3" fill="#1d3f8f"/>' +
      '<rect x="46" y="110" width="22" height="50" rx="2" fill="#20303c"/><rect x="290" y="103" width="74" height="8" rx="2" fill="#111"/><text x="327" y="109.6" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb020">PHILADELPHIA</text>' +
      '<circle class="tt-bl" cx="365" cy="168" r="3" fill="#ffdc7a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts1)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#3a3f46"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (12 + i * 50) + '" y="22" width="24" height="5" fill="#fff6c2" class="tt-bl' + (i % 2 ? " tt-bl2" : "") + '"/>').join("") +
      '<rect x="0" y="27" width="400" height="73" fill="#d8d4ca"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="27" width="2" height="73" fill="#bfb9ac"/>').join("") +
      '<rect x="0" y="40" width="400" height="12" fill="' + PATCO + '" opacity=".9"/>' +
      '<rect x="0" y="180" width="400" height="10" fill="#4a4a4a"/><rect x="0" y="190" width="400" height="70" fill="#a8a59c"/><rect x="0" y="190" width="400" height="5" fill="' + YEL + '"/>' +
      train +
      '<rect x="40" y="204" width="320" height="44" rx="3" fill="#111"/><text x="56" y="224" ' + font + ' font-size="17" fill="#fff">Broadway</text>' +
      '<text x="56" y="240" ' + font + ' font-size="9.5" fill="#cfd8e0">Walter Rand Transportation Center</text>' +
      '<rect x="268" y="214" width="78" height="22" rx="11" fill="' + PATCO + '"/><text x="307" y="229" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">PATCO</text>',
      sky("tts1", "#3a3f46", "#a8a59c"));
  }

  /* 2. El Bethel Church of Christ on Pine St */
  function ttchurch() {
    return svg(
      '<rect width="400" height="260" fill="url(#tts2)"/>' +
      '<rect x="0" y="70" width="70" height="140" fill="#7a5a4a"/><rect x="330" y="80" width="70" height="130" fill="#6a5a52"/>' +
      [12, 40].map(x => '<rect x="' + x + '" y="90" width="16" height="20" fill="#ffd98a" class="tt-bl"/>').join("") + '<rect x="350" y="100" width="16" height="20" fill="#3a4a5a"/>' +
      /* brick church front */
      '<rect x="90" y="70" width="220" height="140" fill="#9a4a36"/>' + Array.from({ length: 13 }, (_, r) => '<path d="M90 ' + (80 + r * 10) + 'h220" stroke="#7a3a2a" stroke-width="1"/>').join("") +
      '<path d="M80 72h240l-120 -50z" fill="#4a3a36"/><path d="M200 34v-26M190 18h20" stroke="#f3efe6" stroke-width="4"/>' +
      '<path d="M168 150v-52q32 -36 64 0v52z" fill="url(#ttglass)" stroke="#f3efe6" stroke-width="3"/><path d="M200 80v70M168 112h64" stroke="#f3efe6" stroke-width="2"/>' +
      '<path d="M120 140v-34q12 -14 24 0v34zM256 140v-34q12 -14 24 0v34z" fill="#5a7ab8" stroke="#f3efe6" stroke-width="2"/>' +
      '<rect x="176" y="164" width="48" height="46" fill="#3a2418"/><rect x="178" y="166" width="44" height="44" fill="#ffd98a" opacity=".85" class="tt-bl tt-bl2"/>' +
      '<rect x="120" y="156" width="40" height="14" rx="2" fill="#f3efe6"/><text x="140" y="166" text-anchor="middle" ' + font + ' font-size="6.5" fill="#3a2418">EL BETHEL</text>' +
      note(196, 178, YEL, "") + note(210, 172, CYAN, "tt-n2") + note(186, 168, RED, "tt-n3") +
      '<rect x="0" y="210" width="400" height="14" fill="#bdb6aa"/><rect x="0" y="224" width="400" height="36" fill="#4a4e54"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + YEL + '">EL BETHEL CHURCH OF CHRIST · PINE ST · CAMDEN</text>',
      sky("tts2", "#f6a65a", "#ffe0b0") + '<linearGradient id="ttglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d84a3a"/><stop offset=".5" stop-color="#ffd23f"/><stop offset="1" stop-color="#3a7ad8"/></linearGradient>');
  }

  /* 3. Tye Tribbett & G.A. on the risers */
  function ttga() {
    const row1 = [70, 102, 134, 166, 234, 266, 298, 330].map((x, i) => singer(x, 128, i % 2 ? "#f3efe6" : "#1a1a1a", ["", "tt-s2", "tt-s3", "tt-s4"][i % 4])).join("");
    const row2 = [54, 86, 118, 150, 250, 282, 314, 346].map((x, i) => singer(x, 148, i % 2 ? "#1a1a1a" : "#f3efe6", ["tt-s3", "tt-s4", "", "tt-s2"][i % 4])).join("");
    const conf = Array.from({ length: 18 }, (_, i) => '<rect class="tt-cf ' + ["", "tt-c2", "tt-c3"][i % 3] + '" x="' + (10 + i * 22) + '" y="' + ((i * 17) % 40) + '" width="5" height="8" fill="' + [RED, CYAN, YEL][i % 3] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tts3)"/>' +
      '<g class="tt-spot" opacity=".3"><path d="M90 0l-46 190h92z" fill="' + CYAN + '"/></g><g class="tt-spot tt-spot2" opacity=".3"><path d="M310 0l-46 190h92z" fill="' + RED + '"/></g>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="40" fill="' + YEL + '" letter-spacing="3" class="tt-bl">VICTORY</text>' +
      '<rect x="30" y="128" width="340" height="12" fill="#3a3a44"/><rect x="20" y="148" width="360" height="12" fill="#4a4a54"/>' +
      row1 + row2 +
      /* Tye out front, jumping */
      '<g class="tt-sway tt-s2"><circle cx="200" cy="120" r="7" fill="#2a1a12"/><path d="M188 158l4 -30q8 -7 16 0l4 30z" fill="' + RED + '"/><path d="M190 132l-12 -14M210 132l12 -14" stroke="' + RED + '" stroke-width="5" stroke-linecap="round"/></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#0e0e16"/>' + conf +
      '<text x="200" y="230" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff" letter-spacing="2">TYE TRIBBETT &amp; G.A.</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CYAN + '">GREATER ANOINTING</text>',
      sky("tts3", "#0e0e16", "#2a2440"));
  }

  /* 4. Battleship New Jersey on the Camden waterfront */
  function ttship() {
    return svg(
      '<rect width="400" height="260" fill="url(#tts4)"/>' +
      philly(130, "#7a8aa0") +
      '<g class="tt-gull"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="130" width="400" height="130" fill="#2a4a6a"/>' +
      /* hull */
      '<path d="M20 150h340l-24 40h-300z" fill="#6b7178"/><path d="M20 150h340" stroke="#8a9098" stroke-width="3"/>' +
      '<path d="M24 178h330" stroke="#2c3036" stroke-width="5"/>' +
      /* superstructure */
      '<rect x="150" y="104" width="80" height="46" fill="#7d838a"/><rect x="170" y="78" width="40" height="26" fill="#868c93"/><rect x="184" y="52" width="12" height="26" fill="#6b7178"/>' +
      '<path d="M190 52v-28M178 34h24" stroke="#4a4e54" stroke-width="2.5"/><rect x="240" y="112" width="20" height="38" fill="#6b7178"/>' +
      /* gun turrets */
      '<rect x="74" y="138" width="44" height="14" rx="3" fill="#7d838a"/><path d="M80 142l-34 -6M80 146l-34 -2" stroke="#5a5e66" stroke-width="3.5"/>' +
      '<rect x="270" y="138" width="44" height="14" rx="3" fill="#7d838a"/><path d="M308 142l34 -6M308 146l34 -2" stroke="#5a5e66" stroke-width="3.5"/>' +
      [158, 172, 186, 200, 214].map(x => '<rect x="' + x + '" y="114" width="8" height="6" fill="#2c3036"/>').join("") +
      /* signal flags */
      '<path d="M190 26L60 140M190 26L330 140" stroke="#aeb4ba" stroke-width="1"/>' +
      [[100, 'tt-flag', RED], [124, 'tt-flag tt-f2', YEL], [148, 'tt-flag tt-f3', CYAN], [232, 'tt-flag', YEL], [256, 'tt-flag tt-f2', RED], [280, 'tt-flag tt-f3', "#f3efe6"]].map(f => {
        const x = f[0], y = x < 190 ? 140 - (x - 60) * 114 / 130 : 26 + (x - 190) * 114 / 140; return '<rect class="' + f[1] + '" x="' + x + '" y="' + (y + 2) + '" width="10" height="8" fill="' + f[2] + '"/>'; }).join("") +
      '<g class="tt-rip"><path d="M20 206h70M180 222h90M80 240h60M290 232h70" stroke="#7fc4ff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="tt-rip tt-rip2"><path d="M130 212h50M250 210h60M20 232h50M330 246h50" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">BATTLESHIP NEW JERSEY · CAMDEN WATERFRONT</text>',
      sky("tts4", "#f4a66a", "#ffe4c0"));
  }

  /* 5. Pine St and S 3rd St, Camden City Hall's tower behind */
  function ttcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tts5)"/>' +
      /* Camden City Hall: stepped limestone tower */
      '<g fill="#d9cdb4"><rect x="130" y="96" width="140" height="40"/><rect x="160" y="60" width="80" height="40"/><rect x="176" y="34" width="48" height="30"/><rect x="188" y="16" width="24" height="20"/><rect x="196" y="6" width="8" height="12"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (168 + i * 13) + ' 64v32" stroke="#b9ab90" stroke-width="2"/>').join("") +
      Array.from({ length: 3 }, (_, i) => '<path d="M' + (184 + i * 16) + ' 38v24" stroke="#b9ab90" stroke-width="2"/>').join("") +
      '<rect x="190" y="24" width="20" height="5" fill="#ffd98a" class="tt-bl"/>' +
      '<rect x="0" y="122" width="400" height="98" fill="#8e4a3a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (132 + r * 10) + 'h400" stroke="#6e3a2c" stroke-width="1"/>').join("") +
      tag("TYE", 40, 196, 62, RED, -5) + tag("G.A.", 176, 168, 26, CYAN, -7) + tag("TRIBB", 184, 206, 22, YEL, -4) +
      '<g class="tt-sp"><circle cx="160" cy="150" r="2" fill="' + RED + '"/><circle cx="166" cy="144" r="1.5" fill="' + RED + '"/></g><g class="tt-sp tt-sp2"><circle cx="164" cy="158" r="1.6" fill="' + CYAN + '"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4e54"/><path d="M0 238h400" stroke="#e8d070" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="352" y="84" width="5" height="136" fill="#6a6a70"/>' + sign(290, 86, 104, "Pine St") + sign(290, 110, 104, "S 3rd St"),
      sky("tts5", "#5a7ac8", "#f8c49a"));
  }

  window.SCENES = { ttstation: ttstation, ttchurch: ttchurch, ttga: ttga, ttship: ttship, ttcorner: ttcorner };
})();
