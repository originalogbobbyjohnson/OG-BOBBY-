/* bobbysessions scenes (Regions tab: Houston + Texas; Pleasant Grove, Dallas). CSS classes and ids prefixed bs- (the page's own anim-train is kept).
   1 Lake June on the DART Green Line, Pleasant Grove: at-grade side platforms, the light-rail car pulling in under the overhead wire.
   2 Fair Park, State Fair of Texas ("Pull up to the State Fair"): the big cowboy statue waving, the Texas Star Ferris wheel turning.
   3 Deep Ellum, Malcolm X Blvd ("Intellect on Malcolm X"): brick walls covered in murals, string lights, music drifting out.
   4 The Margaret Hunt Hill Bridge over the Trinity at sunset: the white arch and cables, cars crossing, the red flying horse lit on top of downtown.
   5 Buckner Blvd and Lake June Rd in Pleasant Grove: green signs, BOBBY SESSIONS tagged on the wall, Reunion Tower's ball glowing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bsspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bs-spin{transform-box:view-box;transform-origin:290px 120px;animation:bsspin 18s linear infinite}' +
    '@keyframes bsseat{from{transform:rotate(0)}to{transform:rotate(-360deg)}}' +
    '@keyframes bswave{0%,100%{transform:rotate(0)}50%{transform:rotate(-18deg)}}.bs-wave{transform-box:view-box;transform-origin:118px 118px;animation:bswave 2.4s ease-in-out infinite}' +
    '@keyframes bsblink{0%,100%{opacity:.25}50%{opacity:1}}.bs-bl{animation:bsblink 1.4s ease-in-out infinite}.bs-bl2{animation-delay:-.7s}.bs-bl3{animation-delay:-.35s}' +
    '@keyframes bsnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,-64px);opacity:0}}.bs-note{animation:bsnote 2.6s ease-out infinite}.bs-n2{animation-delay:-.9s}.bs-n3{animation-delay:-1.7s}' +
    '@keyframes bscarR{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bs-carR{animation:bscarR 7s linear infinite}.bs-carR2{animation-delay:-3.5s}' +
    '@keyframes bscarL{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.bs-carL{animation:bscarL 8s linear infinite}' +
    '@keyframes bsrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.bs-rip{animation:bsrip 3.2s ease-in-out infinite}.bs-rip2{animation-delay:-1.6s}' +
    '@keyframes bsglow{0%,100%{opacity:.55}50%{opacity:1}}.bs-glow{animation:bsglow 2.2s ease-in-out infinite}' +
    '@keyframes bsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bs-sp{animation:bsspray 1.4s ease-out infinite}.bs-sp2{animation-delay:.45s}' +
    '@keyframes bsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bs-flk{animation:bsflick 2.2s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 16) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 16) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "bs-bl" + (i % 2 ? " bs-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 80) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const GREEN = "#009b3a", GOLD = "#f5c542", RED = "#ff5a5f", TEAL = "#58d3c4";
  /* Reunion Tower: three-legged shaft + the lattice ball */
  const reunion = (x, base, s, lit) => {
    const top = base - 150 * s, r = 17 * s;
    let dots = "";
    for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2, rr = r * (0.45 + (i % 3) * 0.2); dots += '<circle class="' + (lit ? "bs-bl" + (i % 3 ? (i % 3 === 1 ? " bs-bl2" : " bs-bl3") : "") : "") + '" cx="' + (x + Math.cos(a) * rr).toFixed(1) + '" cy="' + (top + Math.sin(a) * rr * 0.9).toFixed(1) + '" r="' + (1.4 * s + 0.4).toFixed(1) + '" fill="#fff6d0"/>'; }
    return '<g><path d="M' + (x - 5 * s) + ' ' + base + 'L' + (x - 3 * s) + ' ' + (top + r) + 'h' + (6 * s) + 'L' + (x + 5 * s) + ' ' + base + 'z" fill="#c9ccd2" stroke="#7e838c" stroke-width="1"/>' +
      '<circle cx="' + x + '" cy="' + top + '" r="' + r + '" fill="' + (lit ? "#2a2f45" : "#9aa0aa") + '" stroke="#d8dbe0" stroke-width="' + (1.4 * s) + '"/>' +
      '<path d="M' + (x - r) + ' ' + top + 'h' + (2 * r) + 'M' + x + ' ' + (top - r) + 'v' + (2 * r) + 'M' + (x - r * 0.7) + ' ' + (top - r * 0.7) + 'L' + (x + r * 0.7) + ' ' + (top + r * 0.7) + 'M' + (x + r * 0.7) + ' ' + (top - r * 0.7) + 'L' + (x - r * 0.7) + ' ' + (top + r * 0.7) + '" stroke="#d8dbe0" stroke-width=".8" opacity=".7"/>' +
      dots + '<rect x="' + (x - 1) + '" y="' + (top - r - 8 * s) + '" width="2" height="' + (8 * s) + '" fill="#c9ccd2"/></g>';
  };

  /* 1. Lake June station, DART Green Line (at grade) */
  function bsstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="122" width="36" height="24" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 182V122q0 -14 14 -14h300q24 0 30 30v44z" fill="#eceef0" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="24" y="152" width="344" height="7" fill="' + GREEN + '"/><rect x="24" y="161" width="344" height="3" fill="#c9cdd2"/><rect x="24" y="166" width="344" height="4" fill="#5d646b"/>' +
      '<path d="M340 112q22 4 26 30h-26z" fill="#1c2630"/><circle cx="358" cy="174" r="3.5" fill="#fff6c2"/>' +
      '<rect x="200" y="98" width="70" height="10" fill="#8a939b"/><path d="M210 98l25 -24l25 24" stroke="#555" stroke-width="2" fill="none"/>' +
      '<rect x="40" y="111" width="86" height="10" rx="2" fill="#111"/><text x="83" y="119" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">GREEN · BUCKNER</text>' +
      '<circle cx="96" cy="184" r="7" fill="#222"/><circle cx="296" cy="184" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss1)"/>' +
      '<path d="M0 132q60 -14 120 -6t140 -10t140 8v60H0z" fill="#9cbf7a" opacity=".7"/>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="120" fill="#7a8088"/><path d="M' + (x - 22) + ' 72h44" stroke="#7a8088" stroke-width="3"/>').join("") +
      [70, 330].map(x => '<path d="M' + (x - 56) + ' 92l56 -18l56 18z" fill="#c7cbd0" stroke="#8a9096" stroke-width="1.5"/><rect x="' + (x - 3) + '" y="92" width="6" height="94" fill="#8a9096"/>').join("") +
      train +
      '<rect x="0" y="186" width="400" height="8" fill="#f2c200"/><rect x="0" y="194" width="400" height="66" fill="#b0aaa0"/><path d="M0 226h400" stroke="#9c958a" stroke-width="2"/>' +
      '<rect x="60" y="204" width="280" height="38" rx="3" fill="#111"/><text x="78" y="229" ' + font + ' font-size="18" fill="#fff">Lake June</text>' + badge(250, 223, "GREEN", GREEN),
      sky("bss1", "#78b6e6", "#f8e2b8"));
  }

  /* 2. Fair Park: the State Fair, the big cowboy and the Texas Star */
  function bsfair() {
    const cx = 290, cy = 120, R = 82;
    let spokes = "", cars = "";
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      spokes += '<path d="M' + cx + ' ' + cy + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e9eef5" stroke-width="1.4"/>';
      cars += '<g style="transform-box:view-box;transform-origin:' + x.toFixed(1) + 'px ' + y.toFixed(1) + 'px;animation:bsseat 18s linear infinite"><rect x="' + (x - 5).toFixed(1) + '" y="' + (y + 1).toFixed(1) + '" width="10" height="9" rx="2" fill="' + ["#e8423a", "#f5c542", "#2f7de1", "#3fbf6a"][i % 4] + '"/></g>';
    }
    const star = '<path d="M290 104l4.7 10.5 11.3 .9 -8.6 7.4 2.6 11.2 -10 -6 -10 6 2.6 -11.2 -8.6 -7.4 11.3 -.9z" fill="' + GOLD + '" stroke="#8a6a10" stroke-width="1"/>';
    const wheel = '<g class="bs-spin"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#f2f5fa" stroke-width="3"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R - 8) + '" fill="none" stroke="#d6dde8" stroke-width="1.5"/>' + spokes + cars + '</g>' +
      '<path d="M266 248L290 120L314 248" stroke="#d6dde8" stroke-width="5" fill="none"/><circle cx="' + cx + '" cy="' + cy + '" r="16" fill="#c3cbd6"/>' + star;
    /* the big cowboy statue: hat, plaid shirt, jeans, boots (no face detail) */
    const tex = '<g>' +
      '<rect x="66" y="176" width="16" height="58" fill="#2f4f8a"/><rect x="88" y="176" width="16" height="58" fill="#2f4f8a"/><path d="M62 234h24v8H58zM86 234h24l4 8H86z" fill="#5a3a22"/>' +
      '<rect x="62" y="110" width="46" height="70" rx="6" fill="url(#bsplaid)"/>' +
      '<path d="M62 116l-14 52" stroke="url(#bsplaid)" stroke-width="12" stroke-linecap="round"/><circle cx="47" cy="172" r="6" fill="#e0b48a"/>' +
      '<g class="bs-wave"><path d="M108 118l18 -30" stroke="url(#bsplaid)" stroke-width="12" stroke-linecap="round"/><circle cx="128" cy="84" r="6.5" fill="#e0b48a"/></g>' +
      '<rect x="80" y="100" width="10" height="12" fill="#e0b48a"/><ellipse cx="85" cy="90" rx="13" ry="15" fill="#e0b48a"/>' +
      '<path d="M58 78q27 8 54 0q-6 6 -10 7h-34q-4 -1 -10 -7z" fill="#f3ead2" stroke="#b8a986" stroke-width="1"/><path d="M70 78q0 -20 15 -20q15 0 15 20z" fill="#f3ead2" stroke="#b8a986" stroke-width="1"/><rect x="70" y="72" width="30" height="4" fill="#8a5a36"/>' +
      '<rect x="62" y="172" width="46" height="6" fill="#5a3a22"/><rect x="80" y="171" width="10" height="8" rx="1" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss2)"/>' +
      '<g class="bs-bl"><circle cx="40" cy="40" r="1.2" fill="#fff"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#d9c7a0"/><rect x="0" y="206" width="400" height="5" fill="#bda77a"/>' +
      wheel +
      '<rect x="150" y="188" width="70" height="40" fill="#f4f0e6" stroke="#9a948a" stroke-width="2"/><path d="M146 188h78l-6 -14h-66z" fill="#e8423a"/><path d="M152 174h11l-3 14h-8zM174 174h11l-1 14h-9zM196 174h11l1 14h-9z" fill="#fff"/>' +
      '<text x="185" y="206" text-anchor="middle" ' + font + ' font-size="9" fill="#8a2a22">CORNY DOGS</text><path d="M168 216h34" stroke="#c9a24a" stroke-width="5" stroke-linecap="round"/><path d="M164 216h6" stroke="#8a6a3a" stroke-width="2"/>' +
      tex +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#5a3f17">FAIR PARK · PULL UP TO THE STATE FAIR</text>',
      sky("bss2", "#5fb0f0", "#fbe6b8") + '<pattern id="bsplaid" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#c43a3a"/><rect width="10" height="3" fill="#2d4f8f" opacity=".8"/><rect width="3" height="10" fill="#f0e6c8" opacity=".55"/></pattern>');
  }

  /* 3. Deep Ellum, Malcolm X Blvd: murals and string lights */
  function bsellum() {
    const bulbs = Array.from({ length: 15 }, (_, i) => { const x = 14 + i * 26, y = 44 + Math.sin(i / 14 * Math.PI) * 18; return '<circle class="bs-bl' + (i % 2 ? " bs-bl2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="3" fill="#ffe08a"/>'; }).join("");
    const notes = [0, 1, 2].map(i => '<g class="bs-note' + (i ? " bs-n" + (i + 1) : "") + '"><text x="' + (352 + i * 12) + '" y="170" ' + font + ' font-size="18" fill="' + [GOLD, TEAL, RED][i] + '">' + ["♪", "♫", "♪"][i] + '</text></g>').join("");
    const bricks = (x, w) => Array.from({ length: 16 }, (_, i) => '<path d="M' + x + ' ' + (70 + i * 9) + 'h' + w + '" stroke="#6e3524" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bss3)"/>' + stars(14) +
      '<rect x="0" y="62" width="250" height="150" fill="#8a4430"/>' + bricks(0, 250) +
      '<rect x="250" y="80" width="150" height="132" fill="#3b3550"/><rect x="250" y="80" width="150" height="10" fill="#2a2540"/>' +
      /* mural panel 1: sunburst + waves */
      '<rect x="12" y="78" width="110" height="96" fill="#1f6f8b"/><circle cx="67" cy="140" r="30" fill="' + GOLD + '"/>' + Array.from({ length: 10 }, (_, i) => { const a = Math.PI + i / 9 * Math.PI; return '<path d="M67 140L' + (67 + Math.cos(a) * 52).toFixed(1) + ' ' + (140 + Math.sin(a) * 52).toFixed(1) + '" stroke="#ffd98a" stroke-width="3"/>'; }).join("") +
      '<path d="M12 156q14 -8 28 0t28 0t28 0t26 0v18H12z" fill="#ff6f61"/><path d="M12 166q14 -8 28 0t28 0t28 0t26 0v8H12z" fill="#7d3c98"/>' +
      /* mural panel 2: gold crown + stripes */
      '<rect x="132" y="78" width="108" height="96" fill="#2c2c2c"/><path d="M156 128l-4 -30l14 12l20 -24l20 24l14 -12l-4 30z" fill="' + GOLD + '" stroke="#8a6a10" stroke-width="2"/><circle cx="186" cy="114" r="4" fill="' + RED + '"/>' +
      '<path d="M146 166h80" stroke="' + TEAL + '" stroke-width="5"/><path d="M146 174h80" stroke="' + RED + '" stroke-width="3"/>' +
      tag("DEEP ELLUM", 140, 154, 16, "#fff", -4) +
      /* club door with light */
      '<rect x="284" y="130" width="44" height="82" fill="#161320"/><rect x="284" y="130" width="44" height="82" fill="#ffcf6a" opacity=".22" class="bs-glow"/><rect x="266" y="112" width="80" height="14" rx="2" fill="#111"/><text x="306" y="123" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '" class="bs-glow">LIVE TONIGHT</text>' +
      '<rect x="346" y="100" width="40" height="30" fill="#ffd98a" opacity=".6"/><rect x="346" y="100" width="40" height="30" fill="none" stroke="#111" stroke-width="3"/>' +
      notes +
      '<path d="M0 40q200 40 400 0" stroke="#222" stroke-width="1.2" fill="none"/>' + bulbs +
      '<rect x="0" y="212" width="400" height="48" fill="#4a4852"/><rect x="0" y="210" width="400" height="4" fill="#c9c6bd"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2.5" stroke-dasharray="18 14"/>' +
      '<rect x="248" y="182" width="5" height="30" fill="#2f2f2f"/>' + sign(176, 182, 150, "Malcolm X Blvd"),
      sky("bss3", "#120f2a", "#4a2d5e"));
  }

  /* 4. Margaret Hunt Hill Bridge over the Trinity, red flying horse on downtown behind */
  function bsbridge() {
    let cables = "";
    for (let i = 0; i <= 14; i++) { const t = i / 14, ax = 200 + Math.cos(Math.PI * (1 - t)) * 150, ay = 176 - Math.sin(Math.PI * t) * 130; const dx = 60 + t * 280; cables += '<path d="M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + 'L' + dx.toFixed(1) + ' 176" stroke="#f4f4f4" stroke-width="1" opacity=".85"/>'; }
    const skyline = '<g fill="#3a2a4a">' +
      '<rect x="40" y="88" width="22" height="88"/><rect x="66" y="70" width="18" height="106"/><path d="M88 176V58l14 -10l14 10v118z"/><rect x="120" y="96" width="26" height="80"/>' +
      '<rect x="150" y="54" width="28" height="122"/><rect x="182" y="82" width="20" height="94"/><rect x="290" y="74" width="24" height="102"/><rect x="318" y="94" width="30" height="82"/></g>' +
      '<path d="M150 54h28M150 54v122M178 54v122" stroke="#5aff9a" stroke-width="1.4" opacity=".7"/>' +
      /* the flying horse on the old Magnolia building */
      '<g transform="translate(140 40)"><rect x="226" y="66" width="34" height="110" fill="#4a3456"/><rect x="236" y="56" width="14" height="10" fill="#4a3456"/><rect x="242" y="44" width="2" height="12" fill="#4a3456"/>' +
      '<g class="bs-glow"><path d="M232 40q4 -6 10 -4l4 -4q2 4 -1 6l6 2q-2 -6 6 -10q-2 6 -4 10q4 2 0 6l-4 0l-1 6h-2l0 -6l-8 0l-2 6h-2l0 -6q-4 -2 -2 -6z" fill="#ff2a2a" stroke="#ff7a7a" stroke-width=".6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bss4)"/>' +
      '<circle cx="300" cy="150" r="26" fill="#ffd27a" opacity=".55"/>' + skyline +
      '<rect x="0" y="186" width="400" height="74" fill="#4f6f86"/><g class="bs-rip"><path d="M30 206h50M170 214h60M300 204h50" stroke="#d6e6f0" stroke-width="2" stroke-linecap="round"/></g><g class="bs-rip bs-rip2"><path d="M90 230h40M240 236h60" stroke="#d6e6f0" stroke-width="2" stroke-linecap="round"/></g>' +
      '<path d="M50 176A150 130 0 0 1 350 176" stroke="#ffffff" stroke-width="7" fill="none"/>' + cables +
      '<rect x="0" y="176" width="400" height="10" fill="#e8e6e1"/><rect x="0" y="186" width="400" height="4" fill="#9a9690"/>' + [40, 140, 260, 360].map(x => '<rect x="' + (x - 5) + '" y="190" width="10" height="24" fill="#b8b4ad"/>').join("") +
      '<g class="bs-carR"><rect x="0" y="168" width="26" height="9" rx="3" fill="' + RED + '"/><circle cx="25" cy="172" r="1.6" fill="#fff6c2"/></g><g class="bs-carR bs-carR2"><rect x="0" y="168" width="22" height="9" rx="3" fill="' + GOLD + '"/></g>' +
      '<g class="bs-carL"><rect x="0" y="168" width="24" height="9" rx="3" fill="#e9eef5"/><circle cx="1" cy="172" r="1.6" fill="#fff6c2"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#eef3f7">THE TRINITY AT SUNDOWN · PALACE HERE IN DALLAS</text>',
      sky("bss4", "#2b2a5e", "#ff9a5a"));
  }

  /* 5. Buckner Blvd and Lake June Rd, Pleasant Grove */
  function bscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bss5)"/>' + stars(18) +
      '<g fill="#2a2440"><rect x="20" y="96" width="22" height="34"/><rect x="46" y="88" width="18" height="42"/><rect x="290" y="92" width="26" height="38"/><rect x="320" y="100" width="20" height="30"/><rect x="346" y="84" width="16" height="46"/></g>' +
      reunion(200, 130, 0.62, true) +
      '<rect x="0" y="126" width="400" height="98" fill="#d8cdb6"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#c2b69c" stroke-width="1"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="#9c8f74"/>' +
      tag("BOBBY", 22, 182, 50, GOLD, -6) + tag("SESSIONS", 40, 214, 34, TEAL, -5) + tag("PLEASANT GROVE", 214, 210, 16, RED, -4) + tag("YOUNG LEGEND", 214, 182, 15, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(236, 98, 162, "Buckner Blvd") + sign(250, 124, 132, "Lake June Rd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bs-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bs-sp"><circle cx="196" cy="168" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="bs-sp bs-sp2"><circle cx="202" cy="162" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("bss5", "#16123a", "#d9765a"));
  }

  window.SCENES = { bsstation: bsstation, bsfair: bsfair, bsellum: bsellum, bsbridge: bsbridge, bscorner: bscorner };
})();
