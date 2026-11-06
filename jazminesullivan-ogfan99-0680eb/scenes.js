/* jazminesullivan scenes (Regions tab: Philadelphia; Strawberry Mansion, she grew up inside Historic Strawberry Mansion in East Fairmount Park, where her father was curator). CSS classes prefixed jz- (the page's own anim-train is kept).
   1 Ridge Av & Dauphin St on SEPTA's Route 61 bus: the park's stone wall and big trees on Ridge Ave, a white SEPTA bus with red and blue stripes sliding in.
   2 The Dell Music Center at 33rd & Dauphin, up the road from the mansion: the covered summer stage, rows of seats, stage lights sweeping.
   3 Philadelphia International Records at 309 S Broad St, the label her mother sang backup for: the narrow stone front, 309 over the door, a gold record spinning in the window.
   4 Super Bowl LV at Raymond James Stadium in Tampa, where she sang the anthem: the pirate ship in the end zone, the big flag on the field, fireworks.
   5 N 33rd St and W Dauphin St: green signs, JAZMINE tagged on the wall, Historic Strawberry Mansion on the hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jzglow{0%,100%{opacity:.45}50%{opacity:1}}.jz-glow{animation:jzglow 2.4s ease-in-out infinite}.jz-glow2{animation-delay:-1.2s}' +
    '@keyframes jzbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jz-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jzbeam 3s ease-in-out infinite}.jz-beam2{animation-delay:-1.5s}' +
    '@keyframes jzspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.jz-spin{transform-box:fill-box;transform-origin:50% 50%;animation:jzspin 2.4s linear infinite}' +
    '@keyframes jzburst{0%{transform:scale(.2);opacity:1}100%{transform:scale(1.4);opacity:0}}.jz-fw{transform-box:fill-box;transform-origin:50% 50%;animation:jzburst 2s ease-out infinite}.jz-fw2{animation-delay:-.7s}.jz-fw3{animation-delay:-1.4s}' +
    '@keyframes jzflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-3deg)}}.jz-flag{transform-box:fill-box;transform-origin:50% 50%;animation:jzflag 2s ease-in-out infinite}' +
    '@keyframes jzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.jz-bob{animation:jzbob .9s ease-in-out infinite}.jz-bob2{animation-delay:-.45s}' +
    '@keyframes jzcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jz-car{animation:jzcar 7.5s linear infinite}' +
    '@keyframes jzleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,120px) rotate(220deg);opacity:0}}.jz-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:jzleaf 4.4s linear infinite}.jz-l2{animation-delay:-1.5s}.jz-l3{animation-delay:-2.9s}' +
    '@keyframes jzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jz-sp{animation:jzspray 1.4s ease-out infinite}.jz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "jz-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#5a3e28"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const ROSE = "#e8a0bf", GOLD = "#c9a227", BLUE = "#7ec8e3", BUS = "#1f4e79";
  const leaves = cols => cols.map((c, i) => '<g class="jz-leaf' + (i % 3 === 1 ? " jz-l2" : i % 3 === 2 ? " jz-l3" : "") + '"><ellipse cx="' + (50 + i * 80) + '" cy="' + (20 + (i * 37) % 50) + '" rx="4" ry="2" fill="' + c + '"/></g>').join("");
  const schist = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#8a857a"/>'; for (let r = 0; r * 8 < h; r++) for (let c = 0; c * 16 < w; c++) { const sx = x + c * 16 + (r % 2) * 8, sy = y + r * 8; if (sx + 13 <= x + w && sy + 6 <= y + h) s += '<rect x="' + sx + '" y="' + sy + '" width="13" height="6" rx="2" fill="none" stroke="#6c685f" stroke-width=".7"/>'; } return s; };

  /* 1. Ridge Av & Dauphin St, Route 61 bus */
  function jzstation() {
    const bus = '<g class="anim-train"><rect x="40" y="130" width="300" height="72" rx="12" fill="#f2f3f5" stroke="#7a8088" stroke-width="2"/>' +
      '<rect x="298" y="136" width="38" height="40" rx="5" fill="#1f2830"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="140" width="32" height="26" rx="4" fill="#1f2830"/>').join("") +
      '<rect x="40" y="174" width="300" height="5" fill="#c8102e"/><rect x="40" y="180" width="300" height="5" fill="#1f4e9a"/>' +
      '<rect x="300" y="124" width="36" height="10" rx="2" fill="#111"/><text x="318" y="132" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">61</text>' +
      '<circle cx="332" cy="192" r="4" fill="#fff6c2"/>' +
      '<circle cx="96" cy="203" r="10" fill="#2a2a2a"/><circle cx="96" cy="203" r="4" fill="#9a9a9a"/><circle cx="286" cy="203" r="10" fill="#2a2a2a"/><circle cx="286" cy="203" r="4" fill="#9a9a9a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jz-s1)"/>' +
      tree(30, 92, 2.4, "#3f7a3a") + tree(110, 88, 2.0, "#4a8a3e") + tree(200, 94, 2.4, "#356c32") + tree(290, 88, 2.1, "#4a8a3e") + tree(372, 92, 2.3, "#3f7a3a") +
      schist(0, 100, 400, 26) + '<rect x="0" y="98" width="400" height="4" fill="#a8a294"/>' +
      '<rect x="0" y="126" width="400" height="88" fill="#5a5856"/><path d="M0 170h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="212" width="400" height="48" fill="#a8a29a"/><rect x="0" y="212" width="400" height="3" fill="#d8d2c6"/>' +
      '<rect x="370" y="140" width="5" height="90" fill="#2f2f2f"/><rect x="358" y="140" width="30" height="34" rx="2" fill="#fff" stroke="' + BUS + '" stroke-width="2"/><rect x="358" y="140" width="30" height="10" fill="' + BUS + '"/>' +
      '<text x="373" y="148" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS</text><text x="373" y="166" text-anchor="middle" ' + font + ' font-size="13" fill="' + BUS + '">61</text>' +
      '<rect x="40" y="222" width="300" height="30" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' + badge(52, 237, "61", BUS) +
      '<text x="208" y="243" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Ridge Av &amp; Dauphin St</text>' +
      leaves(["#7aa63a", "#e8a33a", "#9ac24a", "#d2692a"]),
      sky("jz-s1", "#9fd0f2", "#eef4e2"));
  }

  /* 2. Dell Music Center */
  function jzdell() {
    return svg(
      '<rect width="400" height="260" fill="url(#jz-s2)"/>' + stars(16) +
      tree(20, 120, 2.2, "#1f3a26") + tree(380, 120, 2.2, "#1f3a26") + tree(70, 112, 1.6, "#244a2c") + tree(330, 112, 1.6, "#244a2c") +
      '<path d="M70 62q130 -40 260 0l-10 14h-240z" fill="#e8e6e0"/><path d="M80 76h240" stroke="#b8b4aa" stroke-width="2"/>' +
      [90, 150, 250, 310].map(x => '<rect x="' + (x - 2) + '" y="74" width="4" height="62" fill="#9a968c"/>').join("") +
      '<rect x="88" y="104" width="224" height="40" fill="#1a1622"/><rect x="80" y="136" width="240" height="10" fill="#3a3440"/>' +
      '<g class="jz-beam"><path d="M140 78l-18 64h36z" fill="' + ROSE + '" opacity=".35"/></g><g class="jz-beam jz-beam2"><path d="M260 78l-18 64h36z" fill="' + BLUE + '" opacity=".35"/></g>' +
      '<rect x="196" y="112" width="3" height="24" fill="#bbb"/><circle cx="197.5" cy="111" r="3" fill="#ddd"/>' +
      '<ellipse cx="197" cy="138" rx="30" ry="6" fill="#fff2c2" opacity=".18"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M' + (60 - r * 10) + ' ' + (160 + r * 16) + 'h' + (280 + r * 20) + '" stroke="#5a5060" stroke-width="7"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<g class="jz-bob' + (i % 2 ? " jz-bob2" : "") + '"><circle cx="' + (40 + i * 25) + '" cy="' + (190 + (i % 3) * 18) + '" r="6" fill="#1a1420"/><rect x="' + (34 + i * 25) + '" y="' + (196 + (i % 3) * 18) + '" width="12" height="14" rx="4" fill="#1a1420"/></g>').join("") +
      '<rect x="0" y="246" width="400" height="14" fill="#2a3a22"/>',
      sky("jz-s2", "#1a1440", "#7a4a7a"));
  }

  /* 3. Philadelphia International Records, 309 S Broad St */
  function jzpir() {
    return svg(
      '<rect width="400" height="260" fill="url(#jz-s3)"/>' +
      '<rect x="20" y="70" width="90" height="120" fill="#7a4a3a"/><rect x="290" y="56" width="100" height="134" fill="#8a7e70"/>' +
      [34, 64].map(x => [84, 120, 156].map(y => '<rect x="' + x + '" y="' + y + '" width="18" height="24" fill="#2c3440"/>').join("")).join("") +
      [304, 340].map(x => [70, 106, 142].map(y => '<rect x="' + x + '" y="' + y + '" width="28" height="22" fill="#2c3440"/>').join("")).join("") +
      '<rect x="120" y="40" width="160" height="150" fill="#d8ccb4"/><rect x="116" y="34" width="168" height="8" fill="#ebe2cc"/>' +
      [140, 186, 232].map(x => [52, 92].map(y => '<rect x="' + x + '" y="' + y + '" width="28" height="30" fill="#2c3440" stroke="#ebe2cc" stroke-width="3"/>').join("")).join("") +
      '<rect x="136" y="130" width="62" height="54" fill="#1f2630" stroke="#ebe2cc" stroke-width="3"/>' +
      '<g class="jz-spin"><circle cx="167" cy="157" r="20" fill="#d4af37" stroke="#8a6a10" stroke-width="2"/><circle cx="167" cy="157" r="14" fill="none" stroke="#b8941e" stroke-width="1"/><circle cx="167" cy="157" r="6" fill="' + ROSE + '"/><circle cx="167" cy="157" r="1.5" fill="#111"/><path d="M167 139v6" stroke="#fff6c2" stroke-width="2"/></g>' +
      '<rect x="214" y="138" width="44" height="52" fill="#3a2418"/><path d="M214 138q22 -14 44 0" fill="#ebe2cc"/><text x="236" y="134" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a20">309</text>' +
      '<rect class="jz-glow" x="218" y="146" width="36" height="6" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="0" y="190" width="400" height="20" fill="#bfb8aa"/><rect x="0" y="210" width="400" height="50" fill="#4e4c4a"/><path d="M0 236h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="jz-car"><rect x="0" y="218" width="58" height="14" rx="5" fill="' + BLUE + '"/><rect x="12" y="210" width="32" height="10" rx="3" fill="' + BLUE + '"/><circle cx="12" cy="233" r="4" fill="#111"/><circle cx="46" cy="233" r="4" fill="#111"/></g>' +
      '<rect x="300" y="194" width="94" height="14" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="347" y="204.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">S Broad St</text>',
      sky("jz-s3", "#a9d6f2", "#f6ead6"));
  }

  /* 4. Super Bowl LV, Raymond James Stadium, Tampa */
  function jzsuperbowl() {
    const fw = (x, y, c, cls) => '<g class="jz-fw ' + cls + '">' + Array.from({ length: 10 }, (_, i) => { const a = i * Math.PI / 5; return '<path d="M' + x + ' ' + y + 'L' + (x + Math.cos(a) * 18).toFixed(1) + ' ' + (y + Math.sin(a) * 18).toFixed(1) + '" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jz-s4)"/>' + stars(18) +
      fw(70, 40, ROSE, "") + fw(200, 26, "#ffd36e", "jz-fw2") + fw(330, 44, BLUE, "jz-fw3") +
      '<path d="M0 120q200 -50 400 0v20H0z" fill="#3a3a4a"/>' + Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (106 + r * 8) + 'q200 -50 400 0" fill="none" stroke="#5a5a6a" stroke-width="2"/>').join("") +
      [40, 360].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="70" fill="#5a5a6a"/><rect x="' + (x - 14) + '" y="24" width="28" height="10" fill="#fff6d8" class="jz-glow"/>').join("") +
      '<rect x="0" y="140" width="400" height="120" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 140l' + ((i - 4) * 10) + ' 120" stroke="#e8f0e8" stroke-width="1.5" opacity=".7"/>').join("") +
      /* pirate ship in the end zone */
      '<path d="M300 132h86l-10 18h-66z" fill="#5a3a22" stroke="#3a2412" stroke-width="2"/><rect x="340" y="94" width="3" height="38" fill="#3a2412"/><path d="M343 98h22l-4 26h-18z" fill="#efe6d2"/><path d="M340 100h-20l4 22h16z" fill="#efe6d2"/><path d="M343 94l12 -6v8z" fill="#c8102e"/>' +
      /* big flag on the field */
      '<g class="jz-flag"><rect x="70" y="160" width="160" height="70" fill="#fff"/>' + [0, 2, 4, 6, 8, 10, 12].map(i => '<rect x="70" y="' + (160 + i * 5.4) + '" width="160" height="5.4" fill="#b22234"/>').join("") + '<rect x="70" y="160" width="64" height="38" fill="#3c3b6e"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (78 + (i % 6) * 10) + '" cy="' + (168 + Math.floor(i / 6) * 14) + '" r="1.6" fill="#fff"/>').join("") + '</g>' +
      '<rect x="268" y="196" width="3" height="40" fill="#cfcfcf"/><circle cx="269.5" cy="194" r="4" fill="#eee"/><ellipse cx="270" cy="237" rx="18" ry="5" fill="#fff6d8" opacity=".3"/>',
      sky("jz-s4", "#0e1030", "#3a2a5a"));
  }

  /* 5. N 33rd St & W Dauphin St, Historic Strawberry Mansion behind */
  function jzcorner() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="12" height="16" fill="#2c3440" stroke="#fff" stroke-width="1.5"/><rect x="' + (x - 5) + '" y="' + y + '" width="4" height="16" fill="#3f5a4a"/><rect x="' + (x + 13) + '" y="' + y + '" width="4" height="16" fill="#3f5a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jz-s5)"/>' + stars(10) +
      '<path d="M0 118q200 -40 400 0v10H0z" fill="#3f6a34"/>' +
      tree(60, 100, 1.6, "#2f5a2a") + tree(340, 100, 1.6, "#2f5a2a") +
      /* Historic Strawberry Mansion: center block with two lower wings */
      '<rect x="160" y="54" width="80" height="56" fill="#ece4cc"/><path d="M154 54h92l-14 -16h-64z" fill="#5a5048"/>' +
      '<rect x="112" y="72" width="48" height="38" fill="#e2d8bc"/><path d="M108 72h56l-8 -10h-40z" fill="#5a5048"/><rect x="240" y="72" width="48" height="38" fill="#e2d8bc"/><path d="M236 72h56l-8 -10h-40z" fill="#5a5048"/>' +
      win(172, 62) + win(194, 62) + win(216, 62) + win(124, 82) + win(144, 82) + win(252, 82) + win(272, 82) +
      '<rect x="192" y="88" width="16" height="22" fill="#4a2e20"/><path d="M188 88h24l-12 -8z" fill="#fff"/>' +
      '<rect x="190" y="30" width="6" height="10" fill="#7a5a48"/><rect x="206" y="30" width="6" height="10" fill="#7a5a48"/>' +
      '<rect class="jz-glow" x="174" y="64" width="8" height="12" fill="#ffd98a" opacity=".5"/><rect class="jz-glow jz-glow2" x="218" y="64" width="8" height="12" fill="#ffd98a" opacity=".5"/>' +
      '<rect x="0" y="120" width="400" height="104" fill="#5e4a6a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#524060" stroke-width="1"/>').join("") +
      '<rect x="0" y="116" width="400" height="6" fill="#3a2e40"/>' +
      tag("JAZMINE", 20, 186, 46, ROSE, -6) + tag("SULLIVAN", 34, 214, 22, "#fff", -3) + tag("FEARLESS", 230, 172, 22, GOLD, -4) + tag("LET IT BURN", 196, 212, 18, BLUE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="jz-car"><rect x="0" y="236" width="58" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="32" height="10" rx="3" fill="' + GOLD + '"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="46" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(298, 100, 100, "N 33rd St") + sign(290, 126, 108, "W Dauphin St") +
      '<g class="jz-sp"><circle cx="196" cy="160" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="jz-sp jz-sp2"><circle cx="202" cy="154" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("jz-s5", "#1a1a44", "#c86a7a"));
  }

  window.SCENES = { jzstation: jzstation, jzdell: jzdell, jzpir: jzpir, jzsuperbowl: jzsuperbowl, jzcorner: jzcorner };
})();
