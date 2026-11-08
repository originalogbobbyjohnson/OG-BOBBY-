/* ohioplayers scenes (Regions tab: St. Louis + Ohio; Dayton, Ohio). CSS classes and ids prefixed op- (the page's own anim-train is kept on the trolleybus).
   1 Greater Dayton RTA electric trolleybus, Route 8 (Salem / Lakeview), green-and-silver, poles up on the wires, at Salem Ave and Hillcrest Ave.
   2 Levitt Pavilion Dayton downtown: the curved white shell stage, free homecoming show, crowd from behind, horns in the air.
   3 The Dayton funk museum: wall of gold records, neon FUNK, a glowing platform shoe for Sugarfoot.
   4 The Wright Cycle Company brick shop on West Third St (Wright-Dunbar), a bike rolling by, the Flyer overhead.
   5 Salem Ave and Hillcrest Ave (Ohio Players Way, where they rehearsed Fire and Skin Tight): green signs, the brown honor sign, OHIO PLAYERS tagged, Kettering Tower downtown behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes opflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.op-flk{animation:opflick 2.3s infinite}.op-flk2{animation-delay:.9s}' +
    '@keyframes opspark{0%,100%{opacity:0}40%,60%{opacity:1}}.op-spark{animation:opspark 1.3s infinite}' +
    '@keyframes opnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-80px);opacity:0}}.op-note{animation:opnote 3.6s linear infinite}.op-n2{animation-delay:-1.2s}.op-n3{animation-delay:-2.4s}' +
    '@keyframes opsway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.op-sway{transform-box:fill-box;transform-origin:50% 100%;animation:opsway 1.8s ease-in-out infinite}.op-sw2{animation-delay:-.9s}' +
    '@keyframes opbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.op-beam{transform-box:fill-box;transform-origin:50% 0;animation:opbeam 3s ease-in-out infinite}.op-bm2{animation-delay:-1.5s}' +
    '@keyframes opglow{0%,100%{opacity:.55}50%{opacity:1}}.op-glow{animation:opglow 2.4s ease-in-out infinite}' +
    '@keyframes opbike{0%{transform:translateX(-90px)}100%{transform:translateX(470px)}}.op-bike{animation:opbike 7s linear infinite}' +
    '@keyframes opspin{to{transform:rotate(360deg)}}.op-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:opspin .8s linear infinite}' +
    '@keyframes opfly{0%{transform:translate(-120px,20px)}100%{transform:translate(480px,-20px)}}.op-fly{animation:opfly 11s linear infinite}' +
    '@keyframes opspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.op-sp{animation:opspray 1.4s ease-out infinite}.op-sp2{animation-delay:.45s}' +
    '@keyframes opcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.op-cl{animation:opcloud 8s ease-in-out infinite}' +
    '@keyframes opspinrec{to{transform:rotate(360deg)}}.op-rec{transform-box:fill-box;transform-origin:50% 50%;animation:opspinrec 4s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const RED = "#ff3b1f", GOLD = "#ffb020", PURP = "#9b5de5", RTA = "#00843d", SIGN = "#0f6b3a";
  const note = (x, y, c, cls) => '<g class="op-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9835;</text></g>';
  const house = (x, y, w, body, roof) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (w * 0.62) + '" fill="' + body + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -' + (w * 0.4) + 'l' + (w / 2 + 4) + ' ' + (w * 0.4) + 'z" fill="' + roof + '"/>' +
    '<rect x="' + (x + w * 0.14) + '" y="' + (y + w * 0.16) + '" width="' + (w * 0.24) + '" height="' + (w * 0.2) + '" fill="#ffd98a" class="op-flk"/><rect x="' + (x + w * 0.6) + '" y="' + (y + w * 0.24) + '" width="' + (w * 0.2) + '" height="' + (w * 0.38) + '" fill="#3a2a22"/>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="8" fill="' + c + '"/><path d="M' + (x - 11) + ' ' + y + 'q0 -14 11 -14q11 0 11 14z" fill="' + c + '"/></g>';

  /* 1. RTA trolleybus Route 8 on Salem Ave at Hillcrest Ave */
  function opstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="102" width="36" height="28" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train">' +
      '<path d="M300 86L238 22M330 86L268 22" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/><circle class="op-spark" cx="238" cy="22" r="3" fill="#bfe9ff"/>' +
      '<rect x="230" y="80" width="110" height="8" rx="2" fill="#9aa3ab"/>' +
      '<rect x="60" y="88" width="320" height="84" rx="10" fill="#d9dde1" stroke="#8a939b" stroke-width="2"/>' + win +
      '<path d="M60 138h320v20h-320z" fill="' + RTA + '"/><path d="M60 158h320" stroke="#b7f0c9" stroke-width="2"/>' +
      '<rect x="64" y="100" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="91" width="104" height="10" rx="2" fill="#111"/><text x="118" y="99" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">8 SALEM AV</text>' +
      '<circle class="op-flk" cx="66" cy="164" r="3.5" fill="#fff6c2"/><circle cx="120" cy="174" r="12" fill="#222"/><circle cx="120" cy="174" r="5" fill="#777"/><circle cx="320" cy="174" r="12" fill="#222"/><circle cx="320" cy="174" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ops1)"/>' +
      '<g class="op-cl"><ellipse cx="70" cy="44" rx="34" ry="8" fill="#fff" opacity=".3"/><ellipse cx="330" cy="54" rx="40" ry="8" fill="#fff" opacity=".25"/></g>' +
      '<path d="M0 20L400 20M0 28L400 28" stroke="#222" stroke-width="1.5"/>' +
      '<circle cx="34" cy="98" r="24" fill="#2f5a2a"/><rect x="31" y="108" width="6" height="30" fill="#4a3424"/>' +
      house(6, 110, 54, "#e8e2d2", "#5a3a2a") + house(160, 104, 58, "#b9c6d2", "#3b3f52") + house(300, 108, 56, "#d6b48c", "#6b3b2b") +
      '<rect x="0" y="180" width="400" height="80" fill="#3b3e44"/><path d="M0 220h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="176" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="104" width="4" height="76" fill="#555"/><rect x="372" y="82" width="26" height="22" rx="3" fill="' + RTA + '" stroke="#fff" stroke-width="1.5"/><text x="385" y="97" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RTA</text>' +
      '<rect x="62" y="196" width="276" height="52" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="78" y="218" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">SALEM AV &amp;</text>' +
      '<text x="78" y="238" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">HILLCREST AV</text>' +
      '<circle cx="310" cy="222" r="17" fill="' + RTA + '"/><text x="310" y="229" text-anchor="middle" ' + font + ' font-size="19" fill="#fff">8</text>',
      sky("ops1", "#1a2a52", "#f08a4b"));
  }

  /* 2. Levitt Pavilion Dayton: the white shell, a free homecoming show */
  function oplevitt() {
    const crowd = Array.from({ length: 13 }, (_, i) => person(16 + i * 31, 258 - (i % 2) * 4, i % 3 ? "#1b1210" : "#2a1a14", i % 2 ? "op-sway" : "op-sway op-sw2")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ops2)"/>' +
      /* downtown behind */
      '<g fill="#2a2540"><rect x="0" y="70" width="46" height="110"/><rect x="50" y="40" width="40" height="140"/><rect x="306" y="56" width="44" height="124"/><rect x="354" y="30" width="46" height="150"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="58" y="52" width="6" height="6" class="op-flk"/><rect x="74" y="72" width="6" height="6"/><rect x="314" y="70" width="6" height="6" class="op-flk op-flk2"/><rect x="364" y="46" width="6" height="6"/><rect x="380" y="90" width="6" height="6" class="op-flk"/></g>' +
      /* light beams */
      '<path class="op-beam" d="M150 56l-40 150h40z" fill="' + GOLD + '" opacity=".22"/><path class="op-beam op-bm2" d="M250 56l40 150h-40z" fill="' + RED + '" opacity=".22"/>' +
      /* the shell */
      '<path d="M84 196q0 -150 116 -150q116 0 116 150z" fill="#f4f1ea" stroke="#bdb6a6" stroke-width="2"/>' +
      '<path d="M108 196q0 -122 92 -122q92 0 92 122z" fill="#3a1e30"/>' +
      '<path d="M124 196q0 -100 76 -100q76 0 76 100" fill="none" stroke="#5a2f48" stroke-width="2"/>' +
      '<rect x="96" y="190" width="208" height="14" fill="#2a2420"/>' +
      /* band gear on stage: horns, drums, keys */
      '<circle cx="200" cy="176" r="12" fill="' + RED + '" stroke="#ffd" stroke-width="2"/><rect x="186" y="186" width="28" height="4" fill="#888"/>' +
      '<rect x="138" y="168" width="34" height="8" fill="#111"/><rect x="140" y="176" width="3" height="14" fill="#555"/><rect x="167" y="176" width="3" height="14" fill="#555"/>' +
      '<path d="M236 186l14 -30l6 3l-12 28z" fill="' + GOLD + '"/><circle cx="252" cy="154" r="6" fill="' + GOLD + '"/>' +
      '<path d="M266 186l10 -26l6 2l-8 25z" fill="#d9d9d9"/><circle cx="279" cy="158" r="5" fill="#d9d9d9"/>' +
      note(150, 120, GOLD, "") + note(220, 110, "#fff", "op-n2") + note(255, 128, RED, "op-n3") +
      /* lawn + crowd */
      '<rect x="0" y="204" width="400" height="56" fill="#24361f"/>' + crowd,
      sky("ops2", "#0d0a24", "#5c2a4a"));
  }

  /* 3. The Dayton funk museum: gold records, neon FUNK, a glowing platform shoe */
  function opfunk() {
    const rec = (x, y, r) => '<g><rect x="' + (x - r - 6) + '" y="' + (y - r - 6) + '" width="' + (2 * r + 12) + '" height="' + (2 * r + 12) + '" fill="#2a1a10" stroke="#7a5a2a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + GOLD + '"/><circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.62) + '" fill="none" stroke="#c98a10" stroke-width="1"/><circle cx="' + x + '" cy="' + y + '" r="' + (r * 0.25) + '" fill="#fff4c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1430"/>' +
      '<rect x="0" y="0" width="400" height="170" fill="url(#ops3)"/>' +
      '<path d="M0 170h400" stroke="#120812" stroke-width="4"/>' +
      rec(46, 58, 22) + rec(46, 124, 22) + rec(354, 58, 22) + rec(354, 124, 22) +
      /* neon sign */
      '<rect x="112" y="26" width="176" height="64" rx="10" fill="#140a18" stroke="#4a2a50" stroke-width="2"/>' +
      '<text class="op-glow" x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="44" fill="none" stroke="#ff4fd8" stroke-width="3" letter-spacing="6">FUNK</text>' +
      '<text x="200" y="74" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="44" fill="#ffd1f4" opacity=".35" letter-spacing="6">FUNK</text>' +
      /* spinning record on a turntable */
      '<rect x="112" y="112" width="70" height="44" rx="4" fill="#3a2a22" stroke="#1a100c" stroke-width="2"/><g class="op-rec"><circle cx="147" cy="134" r="19" fill="#111"/><circle cx="147" cy="134" r="12" fill="none" stroke="#333"/><circle cx="147" cy="134" r="6" fill="' + RED + '"/><rect x="146" y="117" width="2" height="6" fill="#777"/></g>' +
      /* glass case with a platform shoe */
      '<rect x="220" y="98" width="86" height="72" fill="#9ccbe0" opacity=".18" stroke="#cfefff" stroke-width="2"/>' +
      '<g class="op-glow"><path d="M232 158h28l6 -24q4 -10 14 -10h8q8 0 8 8v10q0 6 -6 8l-20 6v2h-38z" fill="' + PURP + '" stroke="#ffd" stroke-width="1.5"/><rect x="232" y="158" width="32" height="10" fill="' + GOLD + '"/><rect x="284" y="148" width="10" height="20" fill="' + GOLD + '"/></g>' +
      '<rect x="216" y="170" width="94" height="20" fill="#1a0e16"/>' +
      note(80, 196, GOLD, "") + note(190, 200, "#ff4fd8", "op-n2") + note(330, 196, "#fff", "op-n3") +
      '<path d="M0 230h400" stroke="#4a2a50" stroke-width="2"/>' +
      '<rect x="120" y="236" width="160" height="16" rx="3" fill="#120812" stroke="' + GOLD + '"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" letter-spacing="2">LAND OF FUNK</text>',
      '<linearGradient id="ops3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1c44"/><stop offset="1" stop-color="#5a2438"/></linearGradient>');
  }

  /* 4. Wright Cycle Company, West Third St: red brick, a bike rolling by, the Flyer overhead */
  function opwright() {
    const winTop = [128, 168, 208, 248].map(x => '<rect x="' + x + '" y="76" width="24" height="34" fill="#2a3a4a" stroke="#f1ece0" stroke-width="3"/><path d="M' + (x - 3) + ' 74h30" stroke="#f1ece0" stroke-width="4"/>').join("");
    const bike = '<g class="op-bike"><g transform="translate(0 214)"><g class="op-wheel"><circle cx="0" cy="0" r="12" fill="none" stroke="#222" stroke-width="2.5"/><path d="M-12 0h24M0 -12v24M-8 -8l16 16M8 -8l-16 16" stroke="#555" stroke-width="1"/></g>' +
      '<g class="op-wheel" transform="translate(34 0)"><circle cx="0" cy="0" r="12" fill="none" stroke="#222" stroke-width="2.5"/><path d="M-12 0h24M0 -12v24M-8 -8l16 16M8 -8l-16 16" stroke="#555" stroke-width="1"/></g>' +
      '<path d="M0 0l12 -18h18l4 18M12 -18l8 18l14 -18M10 -24h8M30 -18l2 -8h6" fill="none" stroke="' + RED + '" stroke-width="3" stroke-linejoin="round"/></g></g>';
    const flyer = '<g class="op-fly"><g transform="translate(0 40)"><rect x="0" y="0" width="70" height="4" fill="#f1e6c8" stroke="#8a7a5a" stroke-width=".8"/><rect x="0" y="14" width="70" height="4" fill="#f1e6c8" stroke="#8a7a5a" stroke-width=".8"/>' +
      '<path d="M8 4v10M24 4v10M46 4v10M62 4v10" stroke="#6a5a3a" stroke-width="1"/><rect x="76" y="6" width="14" height="6" fill="#f1e6c8" stroke="#8a7a5a" stroke-width=".8"/><path d="M70 9h6M-14 6v8M-14 10h14" stroke="#6a5a3a" stroke-width="1"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ops4)"/>' + flyer +
      /* brick building */
      '<rect x="108" y="64" width="190" height="136" fill="#9a3d2a" stroke="#5a2216" stroke-width="2"/>' +
      Array.from({ length: 14 }, (_, r) => '<path d="M108 ' + (72 + r * 9) + 'h190" stroke="#6e2a1c" stroke-width="1" opacity=".55"/>').join("") +
      '<rect x="102" y="56" width="202" height="10" fill="#f1ece0"/><rect x="104" y="116" width="198" height="6" fill="#f1ece0"/>' + winTop +
      /* storefront */
      '<rect x="122" y="130" width="70" height="58" fill="#2a3a4a" stroke="#f1ece0" stroke-width="3"/><rect x="214" y="130" width="70" height="58" fill="#2a3a4a" stroke="#f1ece0" stroke-width="3"/>' +
      '<rect x="194" y="134" width="18" height="54" fill="#5a3020" stroke="#f1ece0" stroke-width="2"/>' +
      '<rect x="140" y="122" width="126" height="10" fill="#1c140f"/><text x="203" y="130" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '" letter-spacing="1.5">WRIGHT CYCLE CO.</text>' +
      '<circle cx="157" cy="166" r="10" fill="none" stroke="#c9b48a" stroke-width="2"/><circle cx="177" cy="166" r="10" fill="none" stroke="#c9b48a" stroke-width="2"/><path d="M157 166l8 -12h10l2 12" fill="none" stroke="#c9b48a" stroke-width="2"/>' +
      /* neighbors + street */
      '<rect x="0" y="96" width="104" height="104" fill="#6b5a4a"/><rect x="302" y="88" width="98" height="112" fill="#7a6a58"/>' +
      '<rect x="16" y="116" width="20" height="26" fill="#ffd98a" class="op-flk"/><rect x="60" y="116" width="20" height="26" fill="#2a3a4a"/><rect x="320" y="110" width="20" height="26" fill="#2a3a4a"/><rect x="360" y="110" width="20" height="26" fill="#ffd98a" class="op-flk op-flk2"/>' +
      '<rect x="0" y="200" width="400" height="12" fill="#a9a59c"/><rect x="0" y="212" width="400" height="48" fill="#3b3e44"/><path d="M0 244h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      bike +
      '<rect x="20" y="168" width="4" height="34" fill="#555"/><rect x="0" y="160" width="60" height="12" rx="2" fill="' + SIGN + '" stroke="#fff"/><text x="30" y="169" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">W THIRD ST</text>',
      sky("ops4", "#7fb6e0", "#f6dcb0"));
  }

  /* 5. Salem Ave and Hillcrest Ave (Ohio Players Way): signs, the tag, Kettering Tower behind */
  function opcorner() {
    const bricks = Array.from({ length: 13 }, (_, r) => '<path d="M0 ' + (132 + r * 9) + 'h246" stroke="#bdb8ac" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ops5)"/>' +
      /* downtown Dayton skyline: Kettering Tower tallest */
      '<g fill="#2b2a48"><rect x="150" y="96" width="34" height="60"/><rect x="190" y="70" width="28" height="86"/><rect x="264" y="40" width="44" height="116"/><rect x="314" y="84" width="34" height="72"/><rect x="354" y="104" width="46" height="52"/></g>' +
      '<g fill="#ffcf7a"><rect x="272" y="52" width="4" height="4" class="op-flk"/><rect x="284" y="66" width="4" height="4"/><rect x="296" y="80" width="4" height="4" class="op-flk op-flk2"/><rect x="278" y="96" width="4" height="4"/><rect x="196" y="82" width="4" height="4" class="op-flk"/></g>' +
      '<rect x="283" y="28" width="6" height="12" fill="#2b2a48"/><circle cx="286" cy="26" r="2.5" fill="#ff4a4a" class="op-flk"/>' +
      /* the white rehearsal building wall + tag */
      '<rect x="0" y="126" width="246" height="134" fill="#ece8df"/>' + bricks +
      tag("OHIO", 18, 186, 50, RED, -7) + tag("PLAYERS", 30, 230, 36, GOLD, -5) + tag("FIRE", 170, 160, 20, PURP, -10) +
      '<g class="op-sp"><circle cx="212" cy="196" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="op-sp op-sp2"><circle cx="220" cy="200" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* street */
      '<rect x="246" y="156" width="154" height="84" fill="#3b3e44"/><path d="M246 200h154" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/><rect x="0" y="240" width="400" height="20" fill="#9c978d"/>' +
      /* sign pole */
      '<rect x="306" y="98" width="5" height="142" fill="#5a5a5a"/>' +
      '<rect x="262" y="88" width="94" height="18" rx="2" fill="#6b3f1f" stroke="#fff" stroke-width="1.5"/><text x="309" y="100" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">OHIO PLAYERS WAY</text>' +
      '<rect x="258" y="110" width="102" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="123" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">HILLCREST AV</text>' +
      '<rect x="266" y="132" width="86" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="145" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SALEM AV</text>',
      sky("ops5", "#0f1236", "#e0703f"));
  }

  window.SCENES = { opstation: opstation, oplevitt: oplevitt, opfunk: opfunk, opwright: opwright, opcorner: opcorner };
})();
