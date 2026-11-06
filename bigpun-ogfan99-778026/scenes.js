/* Big Pun game (NYC map, the Bronx: Soundview). The 6 at St Lawrence Av up on the el over Westchester Av, El Morro in Old San Juan
   ("From San Juan to Bayamon"), the Puerto Rican Day Parade on Fifth Avenue, album world Capital Punishment (the first solo Latino rap album
   to go platinum), and Watson Av & St Lawrence Av in Soundview with the 6 el and the Parkchester towers behind. 400 x 260 SVGs. No 9s anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.wv{animation:wave 3.2s ease-in-out infinite}.wv2{animation-delay:-1.6s}' +
    '@keyframes flap{0%,100%{transform:skewY(0deg) scaleY(1)}50%{transform:skewY(-5deg) scaleY(.94)}}.flag{transform-box:fill-box;transform-origin:0% 50%;animation:flap 1.3s ease-in-out infinite}.flag2{animation-delay:-.65s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.gull{animation:gull 11s linear infinite}' +
    '@keyframes fall{from{transform:translateY(-30px)}to{transform:translateY(280px)}}.cf{animation:fall 4s linear infinite}.cf2{animation-delay:-1.3s}.cf3{animation-delay:-2.6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
    '@keyframes floatx{from{transform:translateX(-170px)}to{transform:translateX(420px)}}.float{animation:floatx 16s linear infinite;animation-delay:-7s}' +
    '@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 3s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.beam{transform-box:view-box;transform-origin:200px 0px;animation:sweep 4s ease-in-out infinite}' +
    '@keyframes shine{0%,100%{opacity:0}50%{opacity:.9}}.sh{animation:shine 2.2s ease-in-out infinite}.sh2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#e8443a", BLUE = "#1f5fbf", GOLD = "#ffd23f", CREAM = "#f4ead8", SIX = "#00933c";
  /* the Puerto Rican flag: five stripes, the blue triangle, the white star (drawn, no text) */
  const prFlag = (x, y, w, cls) => {
    const h = w * 2 / 3, s = h / 5;
    let g = '<g transform="translate(' + x + ' ' + y + ')"><g class="flag ' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) g += '<rect x="0" y="' + (i * s) + '" width="' + w + '" height="' + s + '" fill="' + (i % 2 ? "#fff" : RED) + '"/>';
    const r = h * 0.17, cx = h * 0.3, cy = h / 2; let p = "";
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; p += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1); }
    return g + '<path d="M0 0L' + (h * 0.87).toFixed(1) + ' ' + (h / 2) + 'L0 ' + h + 'z" fill="' + BLUE + '"/><path d="' + p + 'z" fill="#fff"/></g></g>';
  };
  /* row of low Soundview row houses */
  const houses = (y, col) => { let g = ""; [[0, 46], [48, 40], [92, 50], [146, 42], [192, 48], [244, 44], [292, 52], [348, 52]].forEach(([x, w], i) => {
      const hh = 34 + (i * 7) % 14; g += '<rect x="' + x + '" y="' + (y - hh) + '" width="' + w + '" height="' + hh + '" fill="' + col + '"/>';
      for (let xx = x + 6; xx < x + w - 8; xx += 14) g += '<rect class="bl bl' + (i % 3 + 1) + '" x="' + xx + '" y="' + (y - hh + 8) + '" width="7" height="8" fill="#ffd98a" opacity=".75"/>'; }); return g; };
  /* the Parkchester towers: tall brick blocks with lit windows */
  const parkchester = (x0, col) => { let g = ""; [[0, 70, 40], [46, 54, 36], [88, 64, 42]].forEach(([dx, top, w], i) => {
      const x = x0 + dx; g += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (170 - top) + '" fill="' + col + '"/>';
      for (let yy = top + 8; yy < 160; yy += 12) for (let xx = x + 5; xx < x + w - 6; xx += 10) g += '<rect class="bl bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="5" height="6" fill="#ffcf7a" opacity=".7"/>'; }); return g; };

  /* 1. St Lawrence Av on the Pelham line: up on the el over Westchester Av in Soundview, the canopy, the black sign with the green 6, the train sliding in */
  function stlawrence() {
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(10) + parkchester(250, "#3b2a2a") + houses(170, "#2d2a3c") +
      /* canopy */
      '<path d="M0 44h400v10H0z" fill="#5b4632"/><rect x="0" y="54" width="400" height="4" fill="#8b7558"/>' +
      [34, 134, 234, 334].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="104" fill="#2f5a3c"/><path d="M' + (x - 14) + ' 58l14 12 14-12" stroke="#2f5a3c" stroke-width="3" fill="none"/>').join("") +
      /* sign */
      '<rect x="66" y="66" width="262" height="30" rx="3" fill="#111"/><rect x="66" y="66" width="262" height="3" fill="#fff"/>' +
      '<text x="80" y="88" ' + font + ' font-size="15" fill="#fff">St Lawrence Av</text>' + bullet(308, 81, "6", SIX) +
      /* train */
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="138" width="300" height="4" fill="#8a9099"/>' +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 148, "6", SIX) +
        '<circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge, the steel el, the avenue */
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="60" fill="#2f5a3c"/><path d="M' + (x + 12) + ' 188l60 0M' + (x + 12) + ' 200l30 -12" stroke="#2f5a3c" stroke-width="4"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#4a4a4f"/><path d="M0 249h400" stroke="#d8d2c0" stroke-width="1.5" stroke-dasharray="14 12"/>' +
      '<g class="car"><rect x="0" y="241" width="42" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="255" r="3.5" fill="#111"/><circle cx="32" cy="255" r="3.5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="241" width="42" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="255" r="3.5" fill="#111"/><circle cx="32" cy="255" r="3.5" fill="#111"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">WESTCHESTER AV</text>',
      sky("s1", "#16183a", "#c45a3c"));
  }

  /* 2. El Morro, Old San Juan: tan sandstone walls stepping down to the sea, the round garita sentry box on the corner, the flag flying, waves rolling, a gull */
  function morro() {
    let stones = "";
    for (let y = 132; y < 214; y += 10) stones += '<path d="M' + (62 + (y - 120) * 30 / 94).toFixed(1) + ' ' + y + 'H400" stroke="#b8925e" stroke-width="1" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<circle cx="74" cy="66" r="22" fill="#ffe08a" opacity=".9"/>' +
      /* sea */
      '<rect x="0" y="170" width="400" height="90" fill="#1f7fa8"/>' +
      '<g class="wv"><path d="M-20 196q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bfe9f5" stroke-width="3" fill="none"/></g>' +
      '<g class="wv wv2"><path d="M-20 222q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#e8fbff" stroke-width="3" fill="none"/></g>' +
      '<g class="wv"><path d="M-20 246q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bfe9f5" stroke-width="2.5" fill="none"/></g>' +
      /* the fortress: terraces stepping down */
      '<path d="M60 120h340v94H90z" fill="#d9b27a"/>' + stones +
      '<path d="M120 96h280v26H120z" fill="#e3c08a"/><path d="M120 96h280" stroke="#a87d48" stroke-width="3"/>' +
      '<path d="M190 74h210v24H190z" fill="#ecca95"/><path d="M190 74h210" stroke="#a87d48" stroke-width="3"/>' +
      '<path d="M60 120h340" stroke="#a87d48" stroke-width="3"/>' +
      /* embrasures */
      [140, 190, 240, 290, 340].map(x => '<rect x="' + x + '" y="104" width="12" height="10" fill="#8a6a40"/>').join("") +
      [230, 280, 330, 380].map(x => '<rect x="' + x + '" y="80" width="10" height="9" fill="#8a6a40"/>').join("") +
      /* the garita on the corner */
      '<path d="M66 120h40v-8H66z" fill="#c9a26b"/>' +
      '<rect x="72" y="70" width="28" height="42" fill="#efd3a0" stroke="#a87d48" stroke-width="2"/>' +
      '<rect x="82" y="84" width="8" height="16" rx="4" fill="#5a4026"/>' +
      '<path d="M68 70q18-26 36 0z" fill="#e6c48e" stroke="#a87d48" stroke-width="2"/><circle cx="86" cy="50" r="3" fill="#a87d48"/>' +
      '<path d="M70 112l-6 10h44l-6-10z" fill="#c9a26b"/>' +
      /* lawn on top */
      '<path d="M250 74q60-12 150-6v6z" fill="#5fa04e"/>' +
      /* flagpole and flag */
      '<rect x="318" y="20" width="3" height="56" fill="#ddd"/>' + prFlag(321, 22, 48) +
      /* gull */
      '<g class="gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>',
      sky("s2", "#3a8fd0", "#f6c98a"));
  }

  /* 3. The Puerto Rican Day Parade on Fifth Avenue: the flags waving from every window, the float rolling by, confetti, the crowd in silhouette */
  function parade() {
    let bld = "", conf = "";
    [[0, 30, 64, "#8a7a68"], [66, 14, 70, "#a08c72"], [138, 40, 56, "#7c6c5c"], [196, 20, 66, "#94826c"], [264, 34, 62, "#867462"], [328, 18, 72, "#9a8670"]].forEach(([x, y, w, c], i) => {
      bld += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 10; yy < 170; yy += 16) for (let xx = x + 6; xx < x + w - 8; xx += 14) bld += '<rect x="' + xx + '" y="' + yy + '" width="7" height="9" fill="#2a2620" opacity=".55"/>';
      bld += prFlag(x + 10, y + 34, 24, i % 2 ? "flag2" : "");
    });
    const cc = ["#ffd23f", RED, "#fff", BLUE, "#6cbe45"];
    for (let i = 0; i < 26; i++) conf += '<rect class="cf cf' + (i % 3 + 1) + '" x="' + ((i * 61) % 400) + '" y="' + ((i * 37) % 120) + '" width="4" height="6" fill="' + cc[i % 5] + '" transform="rotate(' + (i * 23) + ' ' + ((i * 61) % 400) + ' ' + ((i * 37) % 120) + ')"/>';
    let crowd = "";
    for (let x = 4; x < 400; x += 16) { const h = 10 + (x * 7) % 8; crowd += '<g class="bob ' + (x % 32 ? "bob2" : "") + '"><circle cx="' + x + '" cy="' + (232 - h) + '" r="6" fill="#1c1a24"/><rect x="' + (x - 7) + '" y="' + (236 - h) + '" width="14" height="' + (30 + h) + '" rx="5" fill="#1c1a24"/></g>'; }
    crowd += '<path d="M60 214v-22M180 210v-24M300 212v-22" stroke="#1c1a24" stroke-width="2"/>' + prFlag(60, 190, 18, "") + prFlag(180, 186, 18, "flag2") + prFlag(300, 190, 18, "");
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' + bld +
      '<rect x="0" y="196" width="400" height="64" fill="#5c5a60"/><path d="M0 200h400" stroke="#d8d2c0" stroke-width="2"/>' +
      /* the float */
      '<g class="float"><rect x="0" y="150" width="150" height="40" rx="6" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/>' +
        '<path d="M8 150q67-36 134 0" fill="' + RED + '"/>' +
        '<text x="75" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff" letter-spacing="2">BORICUA</text>' +
        '<circle cx="24" cy="194" r="7" fill="#222"/><circle cx="126" cy="194" r="7" fill="#222"/></g>' +
      crowd + conf,
      sky("s3", "#6db7ec", "#d9eefb"));
  }

  /* 4. Album world, Capital Punishment: the platinum record framed on the studio wall, the disc turning, spotlights sweeping, the console below */
  function platinum() {
    let grooves = "";
    for (let r = 14; r < 46; r += 5) grooves += '<circle cx="200" cy="104" r="' + r + '" fill="none" stroke="#c9ced6" stroke-width="1" opacity=".55"/>';
    let keys = "";
    for (let x = 60; x < 340; x += 14) keys += '<rect x="' + x + '" y="214" width="8" height="18" rx="2" fill="' + (x % 28 ? "#3a3f4a" : "#596070") + '"/><circle class="bl bl' + (x % 3 + 1) + '" cx="' + (x + 4) + '" cy="208" r="2" fill="' + (x % 42 ? "#6cbe45" : RED) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' +
      '<g class="beam"><path d="M200 0L150 260h100z" fill="#fff8d0" opacity=".08"/></g>' +
      /* wall panels */
      [0, 80, 160, 240, 320].map(x => '<rect x="' + (x + 4) + '" y="10" width="72" height="180" rx="3" fill="#2a1f2c" stroke="#3c2e40" stroke-width="2"/>').join("") +
      /* frame */
      '<rect x="120" y="36" width="160" height="150" rx="4" fill="#1a1a1f" stroke="#c9a24a" stroke-width="5"/>' +
      '<rect x="128" y="44" width="144" height="134" fill="#0d0d12"/>' +
      '<g class="spin"><circle cx="200" cy="104" r="48" fill="#e4e7ec"/>' + grooves + '<circle cx="200" cy="104" r="12" fill="' + RED + '"/><circle cx="200" cy="104" r="2.5" fill="#111"/>' +
        '<path d="M200 60a44 44 0 0 1 38 22" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<rect x="140" y="158" width="120" height="14" rx="2" fill="#c9a24a"/>' +
      '<text x="200" y="169" text-anchor="middle" ' + font + ' font-size="9" fill="#1a1206" letter-spacing="1">CAPITAL PUNISHMENT</text>' +
      '<path class="sh" d="M150 54l6 6m0-6l-6 6" stroke="#fff" stroke-width="2"/><path class="sh sh2" d="M252 140l6 6m0-6l-6 6" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#e4e7ec" letter-spacing="6">PLATINUM</text>' +
      /* console */
      '<path d="M30 200h340l20 60H10z" fill="#1d2129"/>' + keys,
      sky("s4", "#1b1220", "#3a1f2a"));
  }

  /* 5. Watson Av & St Lawrence Av: the green street signs, the light, the tag wall; the 6 el on Westchester Av and the Parkchester towers behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(14) + parkchester(150, "#4a2e26") +
      /* the 6 el a block up */
      '<rect x="0" y="96" width="400" height="10" fill="#2f5a3c"/>' + [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="106" width="7" height="36" fill="#2f5a3c"/>').join("") +
      '<g class="anim-train"><rect x="30" y="78" width="230" height="18" rx="3" fill="#c9ced6"/>' + [40, 70, 100, 130, 160, 190, 220].map(x => '<rect x="' + x + '" y="81" width="16" height="8" rx="1" fill="#ffe7a6"/>').join("") + bullet(250, 87, "6", SIX) + '</g>' +
      /* wall */
      '<rect x="0" y="132" width="400" height="94" fill="#6a3b2c"/>' +
      (() => { let b = ""; for (let y = 138; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#55301f" stroke-width="1"/>'; return b; })() +
      prFlag(20, 142, 54) +
      tag("BIG PUN", 88, 196, 44, GOLD, -5) + tag("PUERTO ROCK", 30, 218, 18, CREAM, -3) + tag("BORICUA", 214, 220, 20, RED, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      /* signpost */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="344" y="82" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Watson Av</text>' +
      '<rect x="282" y="92" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="339" y="108" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">St Lawrence Av</text>' +
      '<path d="M360 62q0-14 14-14h8" stroke="#3d4b3f" stroke-width="4" fill="none"/><ellipse class="flk" cx="384" cy="50" rx="7" ry="3.5" fill="#fff6c2"/>',
      sky("s5", "#0a0c1a", "#3a2c54"));
  }

  window.SCENES = { stlawrence: stlawrence, morro: morro, parade: parade, platinum: platinum, corner: corner };
})();
