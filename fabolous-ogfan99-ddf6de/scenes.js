/* Fabolous game (NYC map, Brooklyn: Bed-Stuy). The C pulling into Ralph Av under Fulton St (Tuscan red tile band, maroon border, no columns),
   the Breevort Houses courtyard (seven-story red-brick buildings between Fulton St, Bainbridge St, Ralph Av and Patchen Av), the radio booth
   where he freestyled live on DJ Clue's show in 1998, the High School of Art & Design on Second Ave where he went to school,
   and Patchen Av & Bainbridge St with the Breevort behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ball{animation:bounce .9s ease-in-out infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes onair{0%,100%{opacity:1}50%{opacity:.35}}.onair{animation:onair 1s steps(2) infinite}' +
    '@keyframes eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.eq{transform-box:fill-box;transform-origin:50% 100%;animation:eq .6s ease-in-out infinite}.eq2{animation-delay:-.2s}.eq3{animation-delay:-.4s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drip{animation:drip 2s ease-in infinite}.drip2{animation-delay:-1s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sway{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const BLUE = "#0039a6", GOLD = "#e8c46a", RED = "#c8102e", ROYAL = "#2f63c9", CREAM = "#f4ead8", BRICK = "#9c4a33";
  /* a seven-story red-brick Breevort building: x, y top, width, lit windows */
  const project = (x, y, w, lit) => {
    let g = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (H - y) + '" fill="' + BRICK + '"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#6e3020"/>';
    for (let r = 0; r < 7; r++) for (let xx = x + 6; xx < x + w - 10; xx += 14) {
      const yy = y + 10 + r * 15;
      if (yy > 236) continue;
      const on = lit && ((xx * 7 + r * 13) % 5 === 0);
      g += '<rect ' + (on ? 'class="bl bl' + (r % 3 + 1) + '" ' : '') + 'x="' + xx + '" y="' + yy + '" width="8" height="9" fill="' + (on ? "#ffd98a" : "#2b2a35") + '"/>';
    }
    return g;
  };

  /* 1. Ralph Av on the Fulton St line: underground local stop, no columns, Tuscan red band with a maroon border, the C pulling in */
  function ralph() {
    let tile = "", win = "";
    for (let x = 0; x < 400; x += 10) tile += '<path d="M' + x + ' 30v118" stroke="#d9d4c7" stroke-width="1"/>';
    for (let x = 28; x < 290; x += 34) win += '<rect x="' + x + '" y="120" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ece7da"/>' + tile +
      '<rect x="0" y="0" width="400" height="30" fill="#3a3a3e"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 24) + '" y="10" width="48" height="5" rx="2" fill="#fffbe6" class="flk"/>').join("") +
      /* tile band and name tablets */
      '<rect x="0" y="44" width="400" height="22" fill="#7a2a22"/><rect x="0" y="48" width="400" height="14" fill="#a8432f"/>' +
      [20, 300].map(x => '<rect x="' + x + '" y="40" width="80" height="30" fill="#5a1414"/><text x="' + (x + 40) + '" y="61" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">RALPH</text>').join("") +
      /* black station sign */
      '<rect x="120" y="76" width="160" height="30" rx="3" fill="#111"/><rect x="120" y="76" width="160" height="3" fill="#fff"/>' +
      '<text x="134" y="98" ' + font + ' font-size="15" fill="#fff">Ralph Av</text>' + bullet(258, 91, "C", BLUE) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="112" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="118" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(298, 154, "C", BLUE) +
        '<rect x="10" y="146" width="300" height="5" fill="' + BLUE + '" opacity=".7"/>' +
        '<circle cx="22" cy="158" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="170" width="400" height="10" fill="#eab308"/><rect x="0" y="180" width="400" height="80" fill="#8d8a84"/>' +
      '<path d="M0 214h400" stroke="#76736d" stroke-width="2"/>' +
      '<rect x="330" y="186" width="56" height="18" rx="2" fill="#0f6b3a"/><text x="358" y="199" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">FULTON ST</text>',
      "");
  }

  /* 2. The Breevort Houses: red-brick seven-story buildings around the courtyard, benches, the court with a ball bouncing */
  function breevort() {
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#ffe08a"/>' +
      project(0, 70, 120, false) + project(140, 56, 120, false) + project(282, 78, 118, false) +
      '<rect x="0" y="180" width="400" height="80" fill="#6c8f4e"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#8b8f96"/>' +
      /* trees */
      [40, 360].map(x => '<g class="sway"><rect x="' + (x - 3) + '" y="160" width="6" height="40" fill="#5a3d26"/><circle cx="' + x + '" cy="150" r="22" fill="#3f7a3a"/><circle cx="' + (x - 12) + '" cy="160" r="14" fill="#4c8b44"/></g>').join("") +
      /* basketball hoop and the ball */
      '<rect x="248" y="150" width="5" height="70" fill="#4a4a4a"/><rect x="232" y="138" width="38" height="24" fill="#f4f4f4" stroke="#333" stroke-width="2"/>' +
      '<rect x="244" y="148" width="14" height="10" fill="none" stroke="' + RED + '" stroke-width="2"/><path d="M240 162h22" stroke="#e86a1a" stroke-width="3"/>' +
      '<path d="M241 163l3 12M246 163l2 12M251 163v12M256 163l-2 12M261 163l-3 12" stroke="#fff" stroke-width="1"/>' +
      '<g class="ball"><circle cx="210" cy="222" r="8" fill="#e8742c" stroke="#7a3410" stroke-width="1.5"/><path d="M202 222h16M210 214v16" stroke="#7a3410" stroke-width="1"/></g>' +
      /* benches */
      '<rect x="80" y="214" width="60" height="6" fill="#2f5a3c"/><rect x="84" y="220" width="4" height="12" fill="#2f5a3c"/><rect x="132" y="220" width="4" height="12" fill="#2f5a3c"/>' +
      '<rect x="300" y="226" width="60" height="6" fill="#2f5a3c"/><rect x="304" y="232" width="4" height="12" fill="#2f5a3c"/><rect x="352" y="232" width="4" height="12" fill="#2f5a3c"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="4">BREEVORT HOUSES</text>',
      sky("s2", "#5aa7e8", "#cfe8ff"));
  }

  /* 3. The radio booth: the ON AIR light, the mic on its arm, two turntables spinning, the level meters jumping, the city at night outside */
  function booth() {
    const deck = (x) => '<rect x="' + x + '" y="186" width="96" height="44" rx="4" fill="#2b2b30" stroke="#55555c" stroke-width="2"/>' +
      '<g class="spin"><circle cx="' + (x + 38) + '" cy="208" r="18" fill="#111"/><circle cx="' + (x + 38) + '" cy="208" r="6" fill="' + RED + '"/><path d="M' + (x + 38) + ' 192v6" stroke="#666" stroke-width="2"/></g>' +
      '<path d="M' + (x + 84) + ' 192l-14 18" stroke="#c9ced6" stroke-width="3" stroke-linecap="round"/>';
    let eq = "";
    for (let i = 0; i < 8; i++) eq += '<rect class="eq eq' + (i % 3 + 1) + '" x="' + (176 + i * 6) + '" y="196" width="4" height="26" fill="' + (i < 5 ? "#6cbe45" : i < 7 ? GOLD : RED) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a24"/>' +
      /* foam wall */
      (() => { let f = ""; for (let y = 0; y < 180; y += 20) for (let x = (y / 20) % 2 ? 10 : 0; x < 400; x += 20) f += '<path d="M' + x + ' ' + y + 'l10 10l-10 10l-10-10z" fill="#26222e"/>'; return f; })() +
      /* window to the city */
      '<rect x="230" y="30" width="150" height="100" rx="4" fill="url(#s3)" stroke="#55555c" stroke-width="4"/>' +
      '<g>' + [[240, 80], [262, 64], [290, 90], [312, 56], [340, 76], [360, 94]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="18" height="' + (130 - y) + '" fill="#0f1220"/>' +
        '<rect class="bl bl' + (x % 3 + 1) + '" x="' + (x + 5) + '" y="' + (y + 8) + '" width="4" height="4" fill="#ffd98a"/>').join("") + '</g>' +
      /* on air light */
      '<rect x="40" y="26" width="120" height="34" rx="6" fill="#3a0b0b" stroke="#000" stroke-width="2"/>' +
      '<text class="onair" x="100" y="51" text-anchor="middle" ' + font + ' font-size="20" fill="#ff3b3b" letter-spacing="3">ON AIR</text>' +
      /* mic on boom arm */
      '<path d="M40 182L84 110L130 120" stroke="#8a8f99" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<g transform="rotate(20 136 124)"><rect x="126" y="104" width="20" height="40" rx="10" fill="#3b3f46" stroke="#c9ced6" stroke-width="2"/><path d="M128 114h16M128 122h16M128 130h16" stroke="#8a8f99" stroke-width="1.5"/></g>' +
      /* headphones */
      '<path d="M178 168q22-30 44 0" stroke="#111" stroke-width="5" fill="none"/><rect x="172" y="164" width="12" height="18" rx="4" fill="' + RED + '"/><rect x="216" y="164" width="12" height="18" rx="4" fill="' + RED + '"/>' +
      /* desk */
      '<rect x="0" y="182" width="400" height="78" fill="#3a2a20"/><rect x="0" y="182" width="400" height="5" fill="#5a4030"/>' +
      deck(40) + deck(264) + '<rect x="168" y="190" width="64" height="38" rx="3" fill="#202024" stroke="#55555c" stroke-width="2"/>' + eq +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="3">LIVE FREESTYLE</text>',
      sky("s3", "#0b1030", "#3a2f6a"));
  }

  /* 4. The High School of Art & Design on Second Ave: the long mid-century school, ribbon windows, a mural going up on the wall, paint dripping */
  function artschool() {
    let win = "";
    for (let r = 0; r < 4; r++) win += '<rect x="44" y="' + (64 + r * 26) + '" width="312" height="14" fill="#8fb6d6"/>' +
      (() => { let m = ""; for (let x = 44; x <= 356; x += 24) m += '<path d="M' + x + ' ' + (64 + r * 26) + 'v14" stroke="#e8e4da" stroke-width="2"/>'; return m; })();
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<rect x="0" y="90" width="40" height="120" fill="#6a6f7a"/><rect x="360" y="70" width="40" height="140" fill="#5b606b"/>' +
      '<rect x="36" y="46" width="328" height="164" fill="#d8d2c4" stroke="#a9a293" stroke-width="2"/>' + win +
      '<rect x="36" y="46" width="328" height="10" fill="#a9a293"/>' +
      '<text x="200" y="174" text-anchor="middle" ' + font + ' font-size="13" fill="#3a3a3e" letter-spacing="2">HIGH SCHOOL OF ART &amp; DESIGN</text>' +
      /* mural panel */
      '<rect x="60" y="180" width="280" height="30" fill="#f4f1ea"/>' +
      '<rect x="60" y="180" width="70" height="30" fill="' + ROYAL + '"/><rect x="130" y="180" width="70" height="30" fill="' + GOLD + '"/><rect x="200" y="180" width="70" height="30" fill="' + RED + '"/><rect x="270" y="180" width="70" height="30" fill="#6cbe45"/>' +
      tag("STREET DREAMS", 92, 205, 18, "#fff", -2) +
      '<circle class="drip" cx="150" cy="210" r="2.5" fill="' + GOLD + '"/><circle class="drip drip2" cx="230" cy="210" r="2.5" fill="' + RED + '"/>' +
      /* the doors and steps */
      '<rect x="0" y="210" width="400" height="50" fill="#55575c"/><rect x="0" y="210" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="230" width="46" height="14" rx="4" fill="#f2c500"/><rect x="10" y="224" width="24" height="8" rx="2" fill="#f2c500"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      '<rect x="372" y="150" width="4" height="64" fill="#3d4b3f"/><rect x="346" y="140" width="52" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="372" y="150.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">2 Av</text>',
      sky("s4", "#7fb2e6", "#e6eef6"));
  }

  /* 5. Patchen Av & Bainbridge St: green street signs, the tag wall, the Breevort buildings behind with their windows lit */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      project(0, 40, 130, true) + project(150, 30, 120, true) + project(290, 46, 110, true) +
      /* wall */
      '<rect x="0" y="140" width="400" height="88" fill="#4b4d55"/>' +
      (() => { let b = ""; for (let y = 146; y < 228; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#3f4148" stroke-width="1"/>'; return b; })() +
      tag("FABOLOUS", 18, 200, 44, GOLD, -5) + tag("STREET FAM", 200, 222, 20, CREAM, -3) + tag("LOSO", 286, 190, 26, RED, -8) +
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="240" width="40" height="13" rx="4" fill="' + ROYAL + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="30" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="356" y="70" width="5" height="160" fill="#3d4b3f"/>' +
      '<rect x="290" y="74" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="343" y="90" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Patchen Av</text>' +
      '<rect x="282" y="100" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="339" y="116" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Bainbridge St</text>' +
      '<circle class="flk" cx="358" cy="68" r="4" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#2c3554"));
  }

  window.SCENES = { ralph: ralph, breevort: breevort, booth: booth, artschool: artschool, corner: corner };
})();
