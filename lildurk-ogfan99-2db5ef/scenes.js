/* lildurk scenes (Regions tab: Chicago; Parkway Gardens, South King Drive at 63rd-66th, South Side). CSS classes prefixed ld- (the page's own anim-train is kept).
   1 King Drive on the CTA Green Line (East 63rd branch): the station up on the steel 'L' over 63rd St, a silver train sliding in.
   2 Parkway Gardens (6330 S King Dr), where he came up: red-brick mid-rise blocks with white concrete floor bands, courtyard trees, windows lighting up.
   3 The Fountain of Time in Washington Park, a few blocks north-west: the long pale-grey concrete wave of figures over the reflecting pool, ducks gliding.
   4 The booth: "The Voice" at the mic, his Only The Family crew's studio, meters jumping, plaques on the wall (no logos).
   5 S King Dr and E 64th St: green signs, LIL DURK tagged, the Green Line 'L' over 63rd and the Parkway Gardens towers behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ldflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ld-flk{animation:ldflick 2.4s infinite}' +
    '@keyframes ldcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ld-car{animation:ldcar 5.5s linear infinite}.ld-car2{animation-delay:-2.7s}' +
    '@keyframes ldcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.ld-cloud{animation:ldcloud 24s linear infinite}.ld-cloud2{animation-delay:-12s}' +
    '@keyframes ldglow{0%,100%{opacity:.3}50%{opacity:1}}.ld-glow{animation:ldglow 2.8s ease-in-out infinite}.ld-glow2{animation-delay:-1.4s}' +
    '@keyframes ldbird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,0)}}.ld-bird{animation:ldbird 10s linear infinite}' +
    '@keyframes ldduck{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.ld-duck{animation:ldduck 9s ease-in-out infinite}.ld-duck2{animation-delay:-4.5s}' +
    '@keyframes ldripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.ld-rip{animation:ldripple 3s ease-in-out infinite}.ld-rip2{animation-delay:-1.5s}' +
    '@keyframes ldmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.ld-mtr{transform-box:fill-box;transform-origin:50% 100%;animation:ldmeter .9s ease-in-out infinite}' +
    '.ld-m2{animation-delay:-.3s}.ld-m3{animation-delay:-.6s}.ld-m4{animation-delay:-.15s}.ld-m5{animation-delay:-.45s}' +
    '@keyframes ldwave{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}.ld-wv{transform-box:fill-box;transform-origin:50% 50%;animation:ldwave .7s ease-in-out infinite}' +
    '@keyframes ldsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.ld-sp{animation:ldsp 1.3s ease-out infinite}.ld-sp2{animation-delay:-.6s}' +
    '@keyframes ldl{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.ld-ltrain{animation:ldl 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const GRN = "#009b3a", ORANGE = "#ff6b35", GOLD = "#ffd23f", BLUE = "#2ec4ff", BRICK = "#9a4430";
  const brick = (x, y, w, h, c, m) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (c || BRICK) + '"/>' +
    Array.from({ length: Math.floor(h / 5) }, (_, i) => '<path d="M' + x + ' ' + (y + 5 + i * 5) + 'h' + w + '" stroke="' + (m || "#7a3122") + '" stroke-width=".7"/>').join("");
  /* a silver CTA 'L' car with the blue/red belt */
  const lcar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="5" fill="#cfd4d8" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 16) / 24) }, (_, i) => '<rect x="' + (x + 10 + i * 24) + '" y="' + (y + 8) + '" width="16" height="16" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 31) + '" width="' + w + '" height="3" fill="#1d4ea8"/><rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="3" fill="#c8102e"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="3" fill="#8f979e"/>';
  /* the steel 'L' structure: deck girder + lattice + columns */
  const elevated = (y, cols, col) => '<rect x="0" y="' + y + '" width="400" height="12" fill="' + (col || "#4b5157") + '"/>' +
    Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' ' + y + 'l10 12l10 -12" stroke="#383d42" stroke-width="2" fill="none"/>').join("") +
    cols.map(x => '<rect x="' + (x - 5) + '" y="' + (y + 12) + '" width="10" height="' + (236 - y - 12) + '" fill="' + (col || "#4b5157") + '"/><path d="M' + (x - 14) + ' ' + (y + 12) + 'l9 12M' + (x + 14) + ' ' + (y + 12) + 'l-9 12" stroke="' + (col || "#4b5157") + '" stroke-width="4"/>').join("");
  /* a Parkway Gardens block: red brick with white concrete floor bands */
  const pgblock = (x, y, w, h, cols) => brick(x, y, w, h) +
    Array.from({ length: Math.floor(h / 22) + 1 }, (_, r) => '<rect x="' + (x - 2) + '" y="' + (y + r * 22 - 2) + '" width="' + (w + 4) + '" height="4" fill="#ece6d6"/>').join("") +
    Array.from({ length: Math.floor((h - 8) / 22) }, (_, r) => Array.from({ length: cols }, (_, c) => {
      const lit = (r * 3 + c * 5 + x) % 7 === 0;
      return '<rect class="' + (lit ? ((r + c) % 2 ? "ld-glow" : "ld-glow ld-glow2") : "") + '" x="' + (x + 6 + c * ((w - 12) / cols)) + '" y="' + (y + 7 + r * 22) + '" width="' + ((w - 12) / cols - 7) + '" height="11" fill="' + (lit ? "#ffd98a" : "#36414c") + '"/>';
    }).join("")).join("");

  /* 1. King Drive, CTA Green Line, up on the 'L' over 63rd St */
  function ldstation() {
    const train = '<g class="anim-train">' + lcar(16, 96, 170) + lcar(190, 96, 170) +
      '<rect x="338" y="100" width="20" height="42" rx="3" fill="#b6bcc2"/><circle cx="348" cy="136" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="84" width="84" height="10" rx="2" fill="#111"/><text x="312" y="92" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">HARLEM/LAKE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lds1)"/>' +
      '<g class="ld-cloud"><ellipse cx="40" cy="30" rx="30" ry="9" fill="#fff" opacity=".5"/></g><g class="ld-cloud ld-cloud2"><ellipse cx="40" cy="52" rx="22" ry="7" fill="#fff" opacity=".4"/></g>' +
      /* Parkway Gardens peeking behind the platform */
      '<g opacity=".75">' + pgblock(0, 58, 70, 92, 3) + pgblock(334, 46, 66, 104, 3) + '</g>' +
      /* platform canopy */
      '<rect x="0" y="66" width="400" height="8" fill="#3d4247"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="74" width="5" height="76" fill="#3d4247"/>').join("") +
      '<rect x="0" y="146" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="146" width="400" height="3" fill="#f2d03b"/>' +
      train +
      elevated(162, [30, 140, 260, 370]) +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4c55"/><path d="M0 248h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("ld-car", 0, 240, "#e6e6e6") + car("ld-car ld-car2", 0, 240, ORANGE) +
      '<rect x="102" y="184" width="196" height="28" rx="3" fill="#111"/><text x="114" y="204" ' + font + ' font-size="16" fill="#fff">King Drive</text>' + badge(226, 198, "GRN", GRN) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2440">CTA GREEN LINE · UP ON THE L · E 63RD ST</text>',
      sky("lds1", "#9fcbea", "#f6e3c6"));
  }

  /* 2. Parkway Gardens, S King Dr */
  function ldgardens() {
    return svg(
      '<rect width="400" height="260" fill="url(#lds2)"/>' +
      '<g class="ld-cloud"><ellipse cx="60" cy="30" rx="34" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<g fill="#8a95a3" opacity=".6"><rect x="150" y="40" width="16" height="40"/><rect x="170" y="28" width="12" height="52"/><rect x="186" y="46" width="18" height="34"/><rect x="212" y="36" width="14" height="44"/></g>' +
      pgblock(10, 50, 120, 160, 5) + pgblock(272, 50, 120, 160, 5) + pgblock(140, 96, 122, 114, 5) +
      /* entry canopies */
      '<rect x="56" y="186" width="30" height="24" fill="#2a2f35"/><rect x="50" y="182" width="42" height="5" fill="#ece6d6"/>' +
      '<rect x="318" y="186" width="30" height="24" fill="#2a2f35"/><rect x="312" y="182" width="42" height="5" fill="#ece6d6"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#4a4c55"/><path d="M0 240h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      '<g fill="#3f6b3a"><circle cx="140" cy="196" r="18"/><circle cx="262" cy="196" r="18"/><circle cx="200" cy="200" r="12"/></g>' +
      '<rect x="138" y="198" width="4" height="12" fill="#4a3a2a"/><rect x="260" y="198" width="4" height="12" fill="#4a3a2a"/>' +
      car("ld-car", 0, 232, GOLD) +
      '<g class="ld-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="78" y="8" width="244" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PARKWAY GARDENS · S KING DR · SOUTH SIDE</text>',
      sky("lds2", "#86b8e0", "#f2dcc0"));
  }

  /* 3. Fountain of Time, Washington Park */
  function ldfountain() {
    /* a rolling wave of hooded, faceless figures in pale pebbled concrete */
    let fig = "";
    for (let i = 0; i < 34; i++) {
      const x = 30 + i * 10.2, top = 128 - Math.round(16 * Math.sin(i / 33 * Math.PI)) - (i % 3) * 3;
      fig += '<path d="M' + (x - 6) + ' 170V' + (top + 10) + 'q6 -12 12 0V170z" fill="' + (i % 2 ? "#cfcac0" : "#bdb7ab") + '"/>';
    }
    /* a lower front row, leaning forward like a crowd walking past */
    for (let i = 0; i < 30; i++) {
      const x = 44 + i * 10.8, top = 146 - Math.round(10 * Math.sin(i / 29 * Math.PI)) + (i % 4) * 2;
      fig += '<path d="M' + (x - 5) + ' 170L' + (x - 3) + ' ' + (top + 8) + 'q5 -12 11 -2L' + (x + 6) + ' 170z" fill="' + (i % 3 ? "#e0dbd0" : "#c8c2b6") + '" stroke="#a9a395" stroke-width=".6"/>';
    }
    /* Father Time, hooded and faceless, alone across the pool */
    fig += '<path d="M362 170v-34q6 -14 14 -4l2 38z" fill="#b5af a3"/>'.replace("#b5af a3", "#b5afa3");
    return svg(
      '<rect width="400" height="260" fill="url(#lds3)"/>' +
      '<g class="ld-cloud"><ellipse cx="40" cy="26" rx="30" ry="8" fill="#fff" opacity=".7"/></g>' +
      '<g fill="#4f7f3e"><circle cx="20" cy="110" r="34"/><circle cx="70" cy="100" r="30"/><circle cx="330" cy="104" r="32"/><circle cx="384" cy="112" r="30"/><circle cx="200" cy="96" r="26" opacity=".7"/></g>' +
      /* plinth and the long sculpture */
      '<rect x="18" y="168" width="364" height="14" fill="#a9a395"/><rect x="18" y="166" width="364" height="4" fill="#d7d2c6"/>' + fig +
      '<path d="M24 170q176 -66 352 0" stroke="#e2ddd2" stroke-width="2" fill="none" opacity=".6"/>' +
      /* reflecting pool */
      '<rect x="0" y="182" width="400" height="50" fill="#5b87a3"/>' +
      '<g class="ld-rip"><path d="M-20 196q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#a9cde2" stroke-width="1.6" fill="none"/></g>' +
      '<g class="ld-rip ld-rip2"><path d="M-20 214q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#c4e0ee" stroke-width="1.6" fill="none"/></g>' +
      '<g class="ld-duck"><ellipse cx="90" cy="206" rx="9" ry="4" fill="#6b4f2e"/><circle cx="98" cy="201" r="3.5" fill="#2f6b3a"/><path d="M101 201l4 1l-4 1z" fill="#f2b03b"/></g>' +
      '<g class="ld-duck ld-duck2"><ellipse cx="240" cy="222" rx="8" ry="3.5" fill="#7a5a36"/><circle cx="247" cy="218" r="3" fill="#7a5a36"/><path d="M250 218l4 1l-4 1z" fill="#f2b03b"/></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#7aa35a"/><path d="M0 232h400" stroke="#cfcac0" stroke-width="3"/>' +
      '<g class="ld-bird"><path d="M0 50q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="80" y="6" width="240" height="20" rx="3" fill="#111" opacity=".75"/><text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">FOUNTAIN OF TIME · WASHINGTON PARK</text>',
      sky("lds3", "#9ccbe8", "#f4e6cf"));
  }

  /* 4. The booth: The Voice at the mic */
  function ldstudio() {
    const plaque = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="40" height="52" rx="2" fill="#1a1410" stroke="#b08a3a" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="' + (y + 22) + '" r="13" fill="' + c + '"/><circle cx="' + (x + 20) + '" cy="' + (y + 22) + '" r="3" fill="#1a1410"/><rect x="' + (x + 8) + '" y="' + (y + 40) + '" width="24" height="5" fill="#b08a3a"/>';
    const meters = [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="ld-mtr ld-m' + (i % 5 + 1) + '" x="' + (250 + i * 16) + '" y="176" width="10" height="34" fill="' + (i < 5 ? GRN : i < 7 ? GOLD : "#e2463a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1b1512"/>' +
      /* foam wall */
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect x="' + (12 + c * 30) + '" y="' + (40 + r * 18) + '" width="26" height="14" rx="3" fill="' + ((r + c) % 2 ? "#2b2320" : "#332a26") + '"/>').join("")).join("") +
      plaque(218, 34, GOLD) + plaque(268, 34, "#d9dde2") + plaque(318, 34, GOLD) +
      /* booth glass with the mic inside */
      '<rect x="20" y="36" width="180" height="150" rx="4" fill="none" stroke="#6e5a4a" stroke-width="4"/>' +
      '<path d="M110 186V120" stroke="#8a8f96" stroke-width="4"/><path d="M90 186h40" stroke="#8a8f96" stroke-width="4"/>' +
      '<rect x="96" y="80" width="28" height="44" rx="14" fill="#c9ccd1" stroke="#6e737b" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M100 ' + (88 + i * 7) + 'h20" stroke="#8a8f96" stroke-width="1.5"/>').join("") +
      '<circle cx="150" cy="96" r="20" fill="none" stroke="#444" stroke-width="3"/><circle cx="150" cy="96" r="17" fill="#2a2a2a" opacity=".55"/>' +
      '<path d="M66 70q44 -40 88 0" stroke="#222" stroke-width="6" fill="none"/><rect x="58" y="66" width="14" height="22" rx="5" fill="#222"/><rect x="148" y="66" width="14" height="22" rx="5" fill="#222"/>' +
      /* the voice: sound waves leaving the mic */
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="ld-wv" style="animation-delay:-' + (i * 0.12) + 's" x="' + (34 + i * 8) + '" y="' + (92 - (i % 3) * 6) + '" width="4" height="' + (20 + (i % 3) * 12) + '" rx="2" fill="' + ORANGE + '"/>').join("") +
      /* desk */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2c22"/><rect x="230" y="168" width="160" height="48" rx="3" fill="#15110e" stroke="#4a3a2e" stroke-width="2"/>' + meters +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (24 + i * 16) + '" cy="226" r="4" fill="#6e737b"/><rect x="' + (22 + i * 16) + '" y="234" width="4" height="16" fill="#555"/>').join("") +
      '<circle class="ld-flk" cx="372" cy="16" r="6" fill="#e2463a"/><text x="340" y="20" text-anchor="end" ' + font + ' font-size="10" fill="#e2463a">ON AIR</text>' +
      '<rect x="20" y="6" width="210" height="20" rx="3" fill="#111" opacity=".85"/><text x="125" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">THE VOICE · IN THE BOOTH · OTF</text>');
  }

  /* 5. S King Dr and E 64th St */
  function ldcorner() {
    const lback = '<g opacity=".9"><rect x="0" y="84" width="400" height="10" fill="#3a3f45"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 84l10 10l10 -10" stroke="#2b2f34" stroke-width="2" fill="none"/>').join("") +
      '<g class="ld-ltrain"><rect x="0" y="60" width="110" height="24" rx="4" fill="#cfd4d8"/><rect x="114" y="60" width="110" height="24" rx="4" fill="#cfd4d8"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (8 + i * 27) + '" y="65" width="16" height="9" fill="#26323c"/>').join("") + '<rect x="0" y="77" width="224" height="2" fill="#1d4ea8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lds5)"/>' +
      '<g opacity=".8">' + pgblock(250, 34, 70, 100, 3) + pgblock(326, 22, 74, 112, 3) + '</g>' + lback +
      '<rect x="0" y="120" width="400" height="104" fill="#7d5a48"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#644637" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (120 + i * 8) + 'v8" stroke="#644637" stroke-width="1"/>').join("")).join("") +
      tag("LIL DURK", 14, 190, 50, ORANGE, -6) + tag("OTF", 210, 212, 26, GOLD, -4) + tag("SMURK", 24, 218, 18, "#fff", -3) + tag("DURKIO", 120, 220, 16, BLUE, -5) +
      '<g class="ld-sp"><circle cx="262" cy="166" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="ld-sp ld-sp2"><circle cx="268" cy="158" r="2" fill="' + ORANGE + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("ld-car", 0, 240, "#e6e6e6") +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 112, 110, "S King Dr") + sign(266, 138, 126, "E 64th St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ld-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("lds5", "#1e1a3c", "#e0805a"));
  }

  window.SCENES = { ldstation: ldstation, ldgardens: ldgardens, ldfountain: ldfountain, ldstudio: ldstudio, ldcorner: ldcorner };
})();
