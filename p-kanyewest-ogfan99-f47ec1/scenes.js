/* Chicago opening scenes for the Kanye West PRODUCER game: chipmunk soul, the Roc, the South Side.
   The Red Line pulling into 79th in the middle of the Dan Ryan, the Manhattan studio block where he cooked up the Roc beats,
   the Loop L rattling past the big vertical CHICAGO marquee, Buckingham Fountain with fireworks over Lake Michigan
   ("Homecoming"), and his South Shore corner (South Shore Dr and E 78th St) with the Willis Tower behind. 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes carR{from{transform:translateX(-140px)}to{transform:translateX(540px)}}' +
    '@keyframes carL{from{transform:translateX(540px)}to{transform:translateX(-140px)}}' +
    '.carR{animation:carR 5s linear infinite}.carL{animation:carL 6s linear infinite}.d2{animation-delay:-2.5s}.d3{animation-delay:-3.7s}' +
    '@keyframes Ltrain{from{transform:translateX(-420px)}to{transform:translateX(440px)}}' +
    '.ltrain{animation:Ltrain 7s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.4s ease-in-out infinite}.b2{animation-delay:-.45s}.b3{animation-delay:-.9s}' +
    '@keyframes jet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.82)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.6s ease-in-out infinite}.j2{animation-delay:-.8s}' +
    '@keyframes boom{0%{transform:scale(.1);opacity:0}15%{opacity:1}70%{opacity:.9}100%{transform:scale(1);opacity:0}}' +
    '.fw{transform-box:fill-box;transform-origin:50% 50%;animation:boom 2.8s ease-out infinite}.f2{animation-delay:-1s}.f3{animation-delay:-1.9s}' +
    '@keyframes cloud{from{transform:translateX(-90px)}to{transform:translateX(490px)}}' +
    '.cld{animation:cloud 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 2.4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round head, straight stem (no hooked tail) */
  const nine = (x, y, h, c) => { const r = h * 0.27; return '<circle cx="' + (x + r + 1) + '" cy="' + (y - h + r + 1) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + (h * 0.15) + '"/>' +
    '<path d="M' + (x + 2 * r + 1) + ' ' + (y - h + r + 1) + 'V' + y + '" stroke="' + c + '" stroke-width="' + (h * 0.15) + '"/>'; };
  const car = (cls, y, c, flip) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><rect x="9" y="' + (y - 7) + '" width="26" height="9" rx="3" fill="' + c + '"/>' +
    '<rect x="12" y="' + (y - 5) + '" width="9" height="6" fill="#bcd3e6"/><rect x="24" y="' + (y - 5) + '" width="9" height="6" fill="#bcd3e6"/>' +
    '<circle cx="11" cy="' + (y + 13) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 13) + '" r="4" fill="#111"/>' +
    '<circle cx="' + (flip ? 2 : 44) + '" cy="' + (y + 6) + '" r="2.5" fill="' + (flip ? "#ff4a4a" : "#fff6c2") + '"/></g>';
  const RED = "#c60c30", GOLD = "#f2c14e", MAROON = "#7a2331", CREAM = "#f7f3ea", SKY = "#8ecae6";

  /* 1. The Red Line pulling into 79th, the station sitting in the median of the Dan Ryan with traffic on both sides */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 42) windows += '<rect x="' + x + '" y="128" width="28" height="22" rx="3" fill="#ffe9b0" opacity=".9"/>';
    let posts = "";
    for (let x = 20; x < 400; x += 76) posts += '<rect x="' + x + '" y="76" width="5" height="102" fill="#2b2f36"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k1)"/>' + stars(18) +
      /* South Side skyline glow behind the expressway */
      '<g fill="#1b1e2c"><rect x="0" y="90" width="60" height="40"/><rect x="66" y="74" width="34" height="56"/><rect x="108" y="96" width="70" height="34"/><rect x="190" y="80" width="40" height="50"/><rect x="240" y="100" width="90" height="30"/><rect x="336" y="70" width="64" height="60"/></g>' +
      /* far lanes of the Dan Ryan */
      '<rect x="0" y="112" width="400" height="24" fill="#2a2c33"/><path d="M0 124h400" stroke="#eab308" stroke-width="1.5" stroke-dasharray="16 12"/>' +
      car("carL", 114, "#5b6b7a", true) + car("carL d3", 114, "#8a2a2a", true) +
      /* canopy with the station sign */
      '<rect x="0" y="62" width="400" height="14" fill="#3a3f47"/>' + posts +
      '<rect x="110" y="18" width="180" height="44" rx="3" fill="#111"/><rect x="110" y="18" width="180" height="7" fill="' + RED + '"/>' +
      '<text x="130" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="22" fill="#fff">7</text>' + nine(143, 52, 16, "#fff") +
      '<text x="157" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="22" fill="#fff">th</text>' +
      '<rect x="206" y="34" width="70" height="20" rx="10" fill="' + RED + '"/><text x="241" y="48" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Red Line</text>' +
      /* the train: stainless car, red route sign */
      '<g class="anim-train">' +
        '<rect x="10" y="118" width="296" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="158" width="296" height="4" fill="#8b929c"/>' + windows +
        '<rect x="258" y="122" width="40" height="12" rx="2" fill="#111"/><text x="278" y="131" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="' + RED + '">HOWARD</text>' +
        '<rect x="286" y="140" width="16" height="20" fill="' + RED + '"/><circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="178" width="400" height="8" fill="#e8c547"/><rect x="0" y="186" width="400" height="16" fill="#5a5f66"/>' +
      /* near lanes: traffic heading downtown */
      '<rect x="0" y="202" width="400" height="58" fill="#24262c"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="1.5" stroke-dasharray="18 14"/>' +
      car("carR", 210, "#f2c14e") + car("carR d2", 236, "#2f6db5") + car("carR d3", 210, "#e7e7e7"),
      sky("k1", "#0b1026", "#5a2b4a"));
  }

  /* 2. The Manhattan studio block where the soul-sample beats were cooked up for the Roc: brick walk-up, studio glow, cab rolling by */
  function studio() {
    let brick = "";
    for (let y = 70; y < 206; y += 10) for (let x = (y / 10) % 2 ? 60 : 72; x < 300; x += 24) brick += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#8a3b28"/>';
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="blk ' + ["", "b2", "b3"][(r + c) % 3] + '" x="' + (176 + c * 11) + '" y="' + (128 + r * 9) + '" width="9" height="7" rx="1.5" fill="' + ((r + c) % 2 ? GOLD : "#ff8a5b") + '"/>';
    let win = "";
    [[78, 84], [244, 84], [78, 150], [244, 150]].forEach(([x, y], i) => win += '<rect x="' + x + '" y="' + y + '" width="36" height="40" fill="#1a1410" stroke="#e6d6b8" stroke-width="3"/><rect class="' + (i % 2 ? "flk" : "") + '" x="' + (x + 3) + '" y="' + (y + 3) + '" width="30" height="34" fill="' + (i % 3 ? "#3b2d22" : "#ffcf7a") + '" opacity=".85"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#k2)"/>' + stars(22) +
      /* Empire State Building lit up behind the block */
      '<g fill="#2a2f45"><rect x="330" y="70" width="44" height="140"/><rect x="338" y="44" width="28" height="30"/><rect x="344" y="26" width="16" height="20"/><rect x="350" y="6" width="4" height="22"/></g>' +
      '<rect class="flk" x="338" y="44" width="28" height="6" fill="' + GOLD + '" opacity=".7"/><rect x="344" y="26" width="16" height="4" fill="#ffd27a" opacity=".8"/>' +
      '<rect x="0" y="100" width="56" height="110" fill="#22263a"/><rect x="304" y="120" width="26" height="90" fill="#22263a"/>' +
      '<rect x="56" y="62" width="248" height="148" fill="#6e2e1f"/>' + brick + win +
      '<path d="M56 62h248v8H56z" fill="#3d1c13"/>' +
      /* the studio window: MPC pads blinking, a turntable spinning */
      '<rect x="128" y="104" width="104" height="72" fill="#0f0b08" stroke="#e6d6b8" stroke-width="4"/>' +
      '<rect x="168" y="122" width="54" height="46" rx="4" fill="#4b4f56" stroke="#222" stroke-width="2"/>' + pads +
      '<circle class="spin" cx="148" cy="148" r="15" fill="#111" stroke="#333" stroke-width="2"/><circle cx="148" cy="148" r="5" fill="' + MAROON + '"/><rect x="146" y="133" width="4" height="4" fill="#ddd"/>' +
      '<text x="180" y="118" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="' + GOLD + '">STUDIO</text>' +
      /* stoop + door */
      '<rect x="164" y="182" width="32" height="28" fill="#2a1a10"/><rect x="152" y="206" width="56" height="6" fill="#9b8f80"/>' +
      '<rect x="0" y="210" width="400" height="10" fill="#8f8a84"/><rect x="0" y="220" width="400" height="40" fill="#1d1f24"/>' +
      '<g class="carR"><rect x="0" y="226" width="56" height="16" rx="4" fill="#f7c600"/><rect x="12" y="218" width="30" height="10" rx="3" fill="#f7c600"/>' +
      '<rect x="15" y="220" width="10" height="7" fill="#bcd3e6"/><rect x="28" y="220" width="10" height="7" fill="#bcd3e6"/><rect x="22" y="214" width="12" height="4" fill="#fff"/>' +
      '<circle cx="12" cy="242" r="5" fill="#111"/><circle cx="44" cy="242" r="5" fill="#111"/><circle cx="54" cy="232" r="2.5" fill="#fff6c2"/></g>',
      sky("k2", "#0a0f22", "#3a2140"));
  }

  /* 3. The Loop: the L rattling by on its green steel, the big vertical CHICAGO marquee flashing on State Street */
  function loop() {
    let bulbs = "";
    for (let y = 64; y < 196; y += 8) bulbs += '<circle class="blk ' + ["", "b2", "b3"][(y / 8) % 3 | 0] + '" cx="146" cy="' + y + '" r="2" fill="#ffe08a"/><circle class="blk ' + ["b3", "", "b2"][(y / 8) % 3 | 0] + '" cx="186" cy="' + y + '" r="2" fill="#ffe08a"/>';
    const letters = "CHICAGO".split("").map((ch, i) => '<text x="166" y="' + (82 + i * 17) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="#fff">' + ch + '</text>').join("");
    let girders = "";
    for (let x = 0; x <= W; x += 40) girders += '<rect x="' + (x - 3) + '" y="64" width="6" height="150" fill="#2e5e3e"/><path d="M' + x + ' 72l18 18M' + x + ' 72l-18 18" stroke="#2e5e3e" stroke-width="3"/>';
    let carWin = "";
    for (let x = 8; x < 380; x += 26) carWin += '<rect x="' + x + '" y="30" width="16" height="12" rx="2" fill="#ffe9b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k3)"/>' + stars(14) +
      '<g fill="#232845"><rect x="0" y="40" width="70" height="180"/><rect x="250" y="26" width="60" height="194"/><rect x="316" y="56" width="84" height="164"/></g>' +
      /* the L steel runs behind the theatre */
      girders + '<rect x="0" y="48" width="400" height="16" fill="#3d7a52"/><rect x="0" y="44" width="400" height="5" fill="#2a2a2a"/>' +
      /* the theatre front: arch window + marquee */
      '<rect x="96" y="70" width="140" height="150" fill="#c9a77a"/><path d="M126 196v-60a40 40 0 0 1 80 0v60z" fill="#5b3a26"/><path d="M136 196v-56a30 30 0 0 1 60 0v56z" fill="#ffcf7a" opacity=".35"/>' +
      '<rect x="138" y="56" width="56" height="142" rx="4" fill="' + RED + '" stroke="#ffe08a" stroke-width="2"/>' + bulbs + letters +
      '<rect x="96" y="196" width="140" height="14" fill="#1a1a1a"/><rect class="flk" x="100" y="198" width="132" height="10" fill="#ffe08a" opacity=".85"/>' +
      /* the L structure across the top with a train sliding over */
      '<g class="ltrain"><rect x="0" y="22" width="380" height="24" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' + carWin +
      '<rect x="0" y="40" width="380" height="3" fill="#62361b"/><rect x="370" y="26" width="8" height="12" fill="#e27ea6"/></g>' +
      '<rect x="0" y="214" width="400" height="8" fill="#8f8a84"/><rect x="0" y="222" width="400" height="38" fill="#1d1f24"/>' +
      car("carL", 232, "#c0392b", true) + car("carR d2", 236, "#ecf0f1"),
      sky("k3", "#0b0f2a", "#4a1f3a"));
  }

  /* 4. Buckingham Fountain in Grant Park (pink marble tiers), fireworks over Lake Michigan, the skyline lit behind */
  function fountain() {
    const fw = (x, y, c, cls) => { let s = '<g class="fw ' + cls + '">'; for (let a = 0; a < 12; a++) { const t = a * Math.PI / 6; s += '<path d="M' + x + ' ' + y + 'L' + (x + Math.cos(t) * 26).toFixed(1) + ' ' + (y + Math.sin(t) * 26).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; } return s + '</g>'; };
    return svg(
      '<rect width="400" height="260" fill="url(#k4)"/>' + stars(16) +
      fw(70, 50, GOLD, "") + fw(330, 40, "#ff6fa8", "f2") + fw(210, 30, SKY, "f3") +
      /* skyline */
      '<g fill="#1b2040"><rect x="0" y="96" width="40" height="70"/><rect x="44" y="70" width="30" height="96"/><rect x="80" y="86" width="44" height="80"/><rect x="128" y="60" width="24" height="106"/>' +
      '<rect x="246" y="66" width="30" height="100"/><rect x="282" y="84" width="40" height="82"/><rect x="326" y="58" width="30" height="108"/><rect x="360" y="90" width="40" height="76"/></g>' +
      '<g fill="#ffd98a" opacity=".6"><rect x="50" y="80" width="3" height="3"/><rect x="60" y="96" width="3" height="3"/><rect x="134" y="74" width="3" height="3"/><rect x="290" y="96" width="3" height="3"/><rect x="334" y="70" width="3" height="3"/><rect x="340" y="90" width="3" height="3"/></g>' +
      '<rect x="0" y="166" width="400" height="94" fill="#16243a"/>' +
      /* the fountain: three pink tiers, jets */
      '<ellipse cx="200" cy="222" rx="170" ry="22" fill="#e8b4a8"/><ellipse cx="200" cy="220" rx="160" ry="16" fill="#3b7fb5"/>' +
      '<g class="jet"><path d="M200 210V70" stroke="#d9f1ff" stroke-width="7" stroke-linecap="round" opacity=".9"/></g>' +
      '<g class="jet j2"><path d="M150 214q-20-60-40-20M250 214q20-60 40-20" stroke="#d9f1ff" stroke-width="3" fill="none" opacity=".8"/></g>' +
      '<g class="jet"><path d="M120 216q-30-40-60-6M280 216q30-40 60-6" stroke="#d9f1ff" stroke-width="3" fill="none" opacity=".7"/></g>' +
      '<rect x="146" y="186" width="108" height="20" rx="4" fill="#e4a99a"/><ellipse cx="200" cy="186" rx="58" ry="8" fill="#f0c2b5"/>' +
      '<rect x="170" y="160" width="60" height="18" rx="3" fill="#e4a99a"/><ellipse cx="200" cy="160" rx="34" ry="6" fill="#f0c2b5"/>' +
      '<rect x="186" y="140" width="28" height="14" rx="3" fill="#e4a99a"/><ellipse cx="200" cy="140" rx="18" ry="4" fill="#f0c2b5"/>' +
      '<g class="jet j2"><path d="M180 186q-6-14 0-22M220 186q6-14 0-22" stroke="#d9f1ff" stroke-width="2" fill="none"/></g>',
      sky("k4", "#070b22", "#2d2a5e"));
  }

  /* 5. His South Shore corner: green signs at S South Shore Dr and E 78th St, KANYE on the wall, the Willis Tower downtown */
  function corner() {
    let brick = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#6b3b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#k5)"/>' + stars(16) +
      '<g class="cld"><ellipse cx="40" cy="30" rx="30" ry="7" fill="#fff" opacity=".25"/></g><g class="cld cld2"><ellipse cx="40" cy="52" rx="22" ry="6" fill="#fff" opacity=".2"/></g>' +
      /* Willis Tower: black stepped tubes, two white antennas with red lights */
      '<g fill="#14161c"><rect x="284" y="40" width="70" height="180"/><rect x="292" y="22" width="46" height="20"/><rect x="300" y="12" width="26" height="12"/></g>' +
      '<rect x="304" y="-10" width="3" height="24" fill="#ddd"/><rect x="320" y="-6" width="3" height="20" fill="#ddd"/>' +
      '<circle class="blk" cx="305.5" cy="-8" r="2.5" fill="#ff3b3b"/><circle class="blk b2" cx="321.5" cy="-4" r="2.5" fill="#ff3b3b"/>' +
      '<g fill="#ffd98a" opacity=".5"><rect x="292" y="60" width="54" height="2"/><rect x="292" y="90" width="54" height="2"/><rect x="292" y="120" width="54" height="2"/><rect x="292" y="150" width="54" height="2"/></g>' +
      '<rect x="358" y="90" width="42" height="130" fill="#1e2233"/><rect x="254" y="110" width="28" height="110" fill="#1e2233"/>' +
      '<rect x="4" y="70" width="250" height="150" fill="#55301f"/>' + brick +
      tag("KANYE", 22, 134, 42, GOLD, -7) + tag("CHI-TOWN", 34, 186, 28, "#ff6fa8", -4) + tag("YE", 190, 206, 26, SKY, -8) +
      '<rect x="368" y="60" width="5" height="160" fill="#1d2329"/><path d="M370 62h-26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M330 64h26l-6 8h-14z" fill="#ffe7a8"/>' +
      sign(258, 92, 124, "S South Shore Dr") + sign(282, 114, 84, "E 78th St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("carR", 228, MAROON),
      sky("k5", "#0b1020", "#3a2a5a"));
  }

  window.SCENES = { station, studio, loop, fountain, corner };
})();
