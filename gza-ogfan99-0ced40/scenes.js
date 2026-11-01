/* Tompkinsville, Staten Island opening scenes for GZA's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1s steps(1) infinite}.b2{animation-delay:-.25s}.b3{animation-delay:-.5s}.b4{animation-delay:-.75s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.sway{animation:sway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:top center}.sw2{animation-delay:-1.5s}' +
    '@keyframes rise{0%{transform:translateY(0);opacity:.0}20%{opacity:.6}100%{transform:translateY(-60px);opacity:0}}.rise{animation:rise 4s linear infinite}.r2{animation-delay:-1.3s}.r3{animation-delay:-2.6s}' +
    '@keyframes slide{from{transform:translateX(-140px)}to{transform:translateX(480px)}}.slide{animation:slide 20s linear infinite;animation-delay:-6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.lift{animation:lift 1.6s ease-in-out infinite}' +
    '@keyframes shoot{0%{transform:translate(0,0);opacity:0}10%{opacity:1}40%{transform:translate(-160px,70px);opacity:0}100%{opacity:0;transform:translate(-160px,70px)}}.shoot{animation:shoot 5s ease-out infinite}' +
    '@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}.pls{animation:pulse 2.4s ease-in-out infinite}.p2{animation-delay:-1.2s}' +
    '@keyframes run{from{transform:translateX(0)}to{transform:translateX(300px)}}.run{animation:run 5s linear infinite}.rn2{animation-delay:-2.5s}' +
    '@keyframes splash{0%,100%{transform:scale(.6);opacity:0}40%{transform:scale(1);opacity:.9}}.spl{animation:splash 1.6s ease-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes pop{0%,100%{transform:scale(.85)}50%{transform:scale(1.08)}}.pop{animation:pop 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes rain{from{transform:translate(0,-40px)}to{transform:translate(-20px,260px)}}.rain{animation:rain .9s linear infinite}.rn3{animation-delay:-.45s}' +
    '@keyframes hop{0%,40%,100%{transform:translate(0,0)}20%{transform:translate(0,-14px)}}.hop{animation:hop 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) => '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* the SIR car: stainless with the blue band, w long, top-left at x,y */
  const sirCar = (x, y, w) => { let win = ""; for (let i = x + 16; i < x + w - 76; i += 42) win += '<rect x="' + i + '" y="' + (y + 10) + '" width="28" height="19" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 35) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 46) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 46, y + 20); };
  /* black station sign */
  const stSign = (x, y, w, name) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="32" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 12) + '" y="' + (y + 24) + '" ' + FONT + ' font-size="16" fill="#fff">' + name + '</text>' + sir(x + w - 24, y + 17);
  /* green NYC street sign blade */
  const blade = (cx, y, txt) => { const w = txt.length * 7 + 18; return '<rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + cx + '" y="' + (y + 13) + '" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + txt + '</text>'; };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h - 4; yy += 12) for (let xx = x + (((yy - y) / 12) % 2 ? -8 : 2); xx < x + w - 6; xx += 30) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(28, x + w - Math.max(x, xx)) + '" height="10" fill="' + mortar + '"/>'; return b; };
  /* street corner: wall with tags, streetlight, two street blades */
  const corner = (g, s1, s2, tags, accent) => svg(
    '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) + '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
    brick(16, 60, 240, 160, "#4a2a24", "#5a3229") + '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' + tags +
    '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + accent + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + accent + '" style="animation-delay:-1s"/>' +
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    blade(302, 88, s1) + blade(302, 110, s2) +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
    sky("g5", g[0], g[1]));
  const GOLD = "#f2c14e", RED = "#c8302c", STEEL = "#cfd6de";

  /* 1. Tompkinsville: the open-air platform on the harbor at night, lower Manhattan lit up across the water, the train rolling in */
  function station() {
    let city = "";
    [[20, 40], [40, 62], [64, 50], [90, 34], [118, 56], [146, 44], [170, 66], [196, 30], [224, 52], [250, 46]].forEach((b, i) => {
      city += '<rect x="' + (60 + b[0]) + '" y="' + (120 - b[1]) + '" width="22" height="' + b[1] + '" fill="#1c2240"/>';
      for (let y = 124 - b[1]; y < 116; y += 8) city += '<rect x="' + (64 + b[0]) + '" y="' + y + '" width="3" height="3" fill="#ffd98a" opacity="' + (0.4 + (i % 3) * 0.2) + '"/><rect x="' + (72 + b[0]) + '" y="' + (y + 4) + '" width="3" height="3" fill="#cfe6ff" opacity=".5"/>';
    });
    return svg('<rect width="400" height="260" fill="url(#g1)"/>' + stars(18) + city +
      '<rect x="0" y="120" width="400" height="30" fill="#14244a"/><path class="pls" d="M70 128h60M150 136h80M250 130h70" stroke="#ffd98a" stroke-width="2" opacity=".5"/>' +
      /* the flat platform canopy */
      '<rect x="0" y="12" width="400" height="7" fill="#3a4250"/><rect x="60" y="19" width="5" height="60" fill="#59616e"/><rect x="335" y="19" width="5" height="60" fill="#59616e"/>' +
      '<circle class="flk" cx="140" cy="24" r="3" fill="#fff4c8"/><circle class="flk flk2" cx="260" cy="24" r="3" fill="#fff4c8"/>' +
      stSign(100, 30, 200, "Tompkinsville") +
      '<g class="anim-train">' + sirCar(10, 130, 300) + '</g>' +
      '<rect x="0" y="184" width="400" height="7" fill="#eab308"/><rect x="0" y="191" width="400" height="69" fill="#3a3f48"/>' +
      '<rect x="0" y="191" width="400" height="4" fill="#2a2e36"/><path d="M40 260l10-50h6l-10 50zM360 260l-10-50h-6l10 50z" fill="#2a2e36"/>' +
      tag("THE GENIUS", 120, 240, 28, GOLD, -4),
      sky("g1", "#070a1c", "#24305a"));
  }

  /* 2. Lyons Pool on Victory Blvd: the red brick Art Moderne bathhouse, the round lobby with its two arches, the half-round smokestack, a big splash */
  function pool() {
    let rail = "";
    for (let x = 20; x < 380; x += 12) rail += '<rect x="' + x + '" y="62" width="2" height="12" fill="#5a6470"/>';
    return svg('<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="340" cy="34" r="16" fill="#fff3c4"/>' +
      /* the smokestack */
      brick(176, 14, 26, 80, "#a8432e", "#b85038") + '<rect x="174" y="12" width="30" height="5" fill="#8a8f96"/>' +
      /* the bathhouse wings */
      brick(10, 74, 380, 70, "#a8432e", "#b85038") + '<rect x="10" y="72" width="380" height="5" fill="#8a8f96"/>' +
      '<path d="M10 62h380" stroke="#5a6470" stroke-width="2"/>' + rail +
      '<rect x="40" y="96" width="40" height="14" fill="#2c3a4a"/><rect x="100" y="96" width="40" height="14" fill="#2c3a4a"/><rect x="240" y="96" width="40" height="14" fill="#2c3a4a"/><rect x="300" y="96" width="40" height="14" fill="#2c3a4a"/>' +
      /* the round lobby with the two arched doors */
      '<path d="M140 144V62q50-20 100 0v82z" fill="#b04a33" stroke="#8a2e1e" stroke-width="2"/><rect x="138" y="58" width="104" height="6" fill="#8a8f96"/>' +
      '<path d="M156 144v-40a16 16 0 0 1 32 0v40zM192 144v-40a16 16 0 0 1 32 0v40z" fill="#2c3a4a" stroke="#e8dcc0" stroke-width="2"/>' +
      /* the deck and the pool */
      '<rect x="0" y="144" width="400" height="20" fill="#d8d2c4"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#3fa9d8"/><path d="M0 190h400M0 214h400M0 238h400" stroke="#fff" stroke-width="2" stroke-dasharray="6 10" opacity=".7"/>' +
      '<path class="pls" d="M30 176q20-6 40 0t40 0M220 200q20-6 40 0t40 0M120 230q20-6 40 0t40 0" stroke="#bfe9ff" stroke-width="2" fill="none"/>' +
      /* the lifeguard chair */
      '<path d="M340 164l10-40h20l10 40" stroke="#f6efdc" stroke-width="4" fill="none"/><rect x="346" y="118" width="28" height="6" fill="' + RED + '"/>' +
      /* the splash */
      '<g class="spl"><path d="M200 200q-14-30-4-46M200 200q0-34 6-50M200 200q14-28 22-40" stroke="#e8f8ff" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="196" cy="152" r="4" fill="#e8f8ff"/><circle cx="222" cy="158" r="3" fill="#e8f8ff"/></g>' +
      '<ellipse cx="200" cy="202" rx="26" ry="5" fill="#e8f8ff" opacity=".8"/>' +
      tag("LYONS POOL", 16, 250, 24, GOLD, -3),
      sky("g2", "#5fb4ec", "#cfeeff"));
  }

  /* 3. Tompkinsville Park: chess on the stone table under the big tree, a knight jumping, the swords on the bench glinting */
  function chess() {
    let board = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) board += '<rect x="' + (136 + c * 16) + '" y="' + (158 + r * 9) + '" width="16" height="9" fill="' + ((r + c) % 2 ? "#3a3a3a" : "#e8e2d2") + '"/>';
    let leaves = "";
    for (let i = 0; i < 14; i++) leaves += '<circle cx="' + (40 + (i * 53) % 330) + '" cy="' + (30 + (i * 29) % 60) + '" r="' + (26 + (i % 3) * 6) + '" fill="' + ["#3d7a33", "#4f8f3a", "#2f6a2a"][i % 3] + '"/>';
    return svg('<rect width="400" height="260" fill="url(#g3)"/>' +
      /* storefronts behind the park */
      '<rect x="0" y="80" width="400" height="70" fill="#8a7a6a"/><rect x="20" y="96" width="50" height="30" fill="#ffe6a8" opacity=".6"/><rect x="170" y="96" width="50" height="30" fill="#ffe6a8" opacity=".6"/><rect x="320" y="96" width="50" height="30" fill="#ffe6a8" opacity=".6"/>' +
      '<rect x="60" y="60" width="16" height="140" fill="#5a3e2a"/><rect x="320" y="60" width="16" height="140" fill="#5a3e2a"/>' + leaves +
      '<rect x="0" y="196" width="400" height="64" fill="#9a958a"/><path d="M0 220h400" stroke="#86817a" stroke-width="2"/>' +
      /* the stone chess table */
      '<rect x="190" y="194" width="20" height="40" fill="#8a8578"/><rect x="124" y="150" width="152" height="46" rx="3" fill="#bcb6a8" stroke="#7a756a" stroke-width="2"/>' + board +
      '<path d="M150 166v-12h8v12zM230 170v-10h8v10z" fill="#f6efdc" stroke="#555" stroke-width="1"/><circle cx="154" cy="152" r="4" fill="#f6efdc" stroke="#555"/>' +
      '<path d="M182 172v-12h8v12z" fill="#1a1a1a"/><circle cx="186" cy="157" r="4" fill="#1a1a1a"/>' +
      /* the knight, jumping */
      '<g class="hop"><path d="M248 170v-6q-2-10 4-16 6-4 10 0l-4 4 4 4-6 2v12z" fill="#1a1a1a" stroke="#555" stroke-width="1"/></g>' +
      /* benches with the swords */
      '<rect x="20" y="200" width="80" height="6" fill="#2f5a3a"/><rect x="24" y="206" width="4" height="14" fill="#222"/><rect x="92" y="206" width="4" height="14" fill="#222"/>' +
      '<path d="M310 214l60-18M318 196l52 22" stroke="' + STEEL + '" stroke-width="3" stroke-linecap="round"/><path class="pls" d="M352 198l6-6M358 210l8 0" stroke="#fff" stroke-width="2"/>' +
      tag("LIQUID SWORDS", 20, 250, 24, GOLD, -3),
      sky("g3", "#8ec5e8", "#e8d8b8"));
  }

  /* 4. Silver Lake Park at night: the reservoir, a telescope pointed at the planets, a shooting star (dark matter, deep space) */
  function cosmos() {
    return svg('<rect width="400" height="260" fill="url(#g4)"/>' + stars(40) +
      '<circle cx="90" cy="60" r="20" fill="#d9a066"/><ellipse cx="90" cy="60" rx="34" ry="7" fill="none" stroke="#e8d2a0" stroke-width="3" transform="rotate(-18 90 60)"/>' +
      '<circle cx="300" cy="40" r="10" fill="#c8302c"/><circle cx="240" cy="90" r="5" fill="#9fe3ff"/>' +
      '<g class="shoot"><path d="M380 20l-30 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="380" cy="20" r="2.5" fill="#fff"/></g>' +
      /* trees on the far bank */
      '<path d="M0 150q30-30 60 0 30-36 70 0 40-30 80 0 30-24 70 0 40-30 70 0 30-20 50 0v6H0z" fill="#0f2a1e"/>' +
      /* the reservoir with the moon on it */
      '<rect x="0" y="154" width="400" height="56" fill="#13284a"/><path class="pls" d="M80 168h40M70 180h60M90 192h30M250 172h50M240 186h70" stroke="#e8d2a0" stroke-width="2" opacity=".6"/>' +
      '<path class="pls p2" d="M0 158q100-6 200 0t200 0" stroke="#4a6a9a" stroke-width="2" fill="none"/>' +
      /* the lawn and the telescope */
      '<path d="M0 210q200-16 400 0v50H0z" fill="#1d3a28"/>' +
      '<path d="M300 236l18-44 18 44M318 192v44" stroke="#bbb" stroke-width="3" fill="none"/>' +
      '<g transform="rotate(-36 318 190)"><rect x="298" y="182" width="64" height="14" rx="3" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/><rect x="290" y="184" width="10" height="10" fill="#333"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#122218"/>' +
      tag("DARK MATTER", 24, 250, 24, GOLD, -3),
      sky("g4", "#05061a", "#1d2a52"));
  }

  /* 5. Victory Blvd and Jersey St, up the hill from the Tompkinsville stop */
  function block() {
    return corner(["#0d1022", "#2a2a3a"], "Victory Blvd", "Jersey St",
      tag("GZA", 26, 128, 56, GOLD, -7) + tag("GENIUS", 150, 120, 26, STEEL, -5) + tag("SHADOWBOXIN", 30, 180, 26, RED, -3) + tag("WU-TANG", 60, 212, 24, "#f6efdc", -2), GOLD);
  }

  window.SCENES = { station, pool, chess, cosmos, block };
})();
