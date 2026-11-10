/* hozier scenes (Regions tab: UK + Europe, Bray, Co. Wicklow). CSS classes prefixed hz- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hzglow{0%,100%{opacity:.45}50%{opacity:1}}.hz-glow{animation:hzglow 2.4s ease-in-out infinite}.hz-g2{animation-delay:-1.2s}' +
    '@keyframes hzcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.hz-cl{animation:hzcloud 15s ease-in-out infinite alternate}' +
    '@keyframes hzwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.hz-wave{animation:hzwave 4s linear infinite}' +
    '@keyframes hzgull{0%{transform:translate(0,0)}50%{transform:translate(60px,-12px)}100%{transform:translate(120px,0)}}.hz-gull{animation:hzgull 7s ease-in-out infinite alternate}' +
    '@keyframes hznote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(22px,-62px);opacity:0}}.hz-nt{animation:hznote 3.2s ease-out infinite}.hz-nt2{animation-delay:-1.1s}.hz-nt3{animation-delay:-2.2s}' +
    '@keyframes hzflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.hz-flag{transform-box:fill-box;transform-origin:0% 50%;animation:hzflag 1.8s ease-in-out infinite}' +
    '@keyframes hzbird{0%{transform:translate(0,0)}100%{transform:translate(-80px,-30px)}}.hz-bird{animation:hzbird 6s ease-in-out infinite alternate}' +
    '@keyframes hzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hz-sp{animation:hzspray 1.4s ease-out infinite}.hz-sp2{animation-delay:.45s}' +
    '@keyframes hzrain{0%{transform:translateY(-20px);opacity:0}30%{opacity:.6}100%{transform:translateY(40px);opacity:0}}.hz-rn{animation:hzrain 1.6s linear infinite}.hz-rn2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const note = (x, y, c, cls) => '<g class="hz-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const gull = (x, y) => '<path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  /* Bray Head with its cross on top: shared by rooms 2 and 5 */
  const brayHead = (dx, sc, col) => '<g transform="translate(' + dx + ' 0) scale(' + sc + ' 1)"><path d="M0 170q40 -60 110 -84q30 -10 50 4q40 30 90 80z" fill="' + col + '"/><path d="M60 120q30 -14 50 -10" stroke="#5a7a3a" stroke-width="3" fill="none" opacity=".5"/></g>';
  const GREEN = "#2e8b57", LIME = "#9cc83c", GOLD = "#d9a441", SEA = "#3d6f8f", STONE = "#cfc8b8";

  /* 1. Bray Daly on the DART: the green commuter train pulling in, the station sign, Bray Head behind */
  function hzstation() {
    const train = '<g class="anim-train"><g transform="translate(40 128)">' +
      '<rect x="0" y="0" width="300" height="56" rx="8" fill="#1f7a45"/><rect x="0" y="34" width="300" height="10" fill="' + LIME + '"/>' +
      [16, 70, 124, 178, 232].map(x => '<rect x="' + x + '" y="10" width="40" height="18" rx="2" fill="#bfe0f0" stroke="#0f4a2a" stroke-width="1.5"/>').join("") +
      '<rect x="282" y="10" width="14" height="20" fill="#0f4a2a"/><rect x="286" y="40" width="10" height="5" fill="#fff6c0"/>' +
      '<rect x="100" y="8" width="2" height="40" fill="#0f4a2a"/><rect x="200" y="8" width="2" height="40" fill="#0f4a2a"/>' +
      '<rect x="0" y="56" width="300" height="6" fill="#222"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz1)"/>' +
      '<g class="hz-cl"><ellipse cx="80" cy="34" rx="40" ry="10" fill="#fff" opacity=".7"/><ellipse cx="300" cy="22" rx="46" ry="10" fill="#fff" opacity=".6"/></g>' +
      brayHead(220, 0.9, "#5f7d4a") + '<path d="M336 74v18M330 80h12" stroke="#f4f1e8" stroke-width="3"/>' +
      
      '<rect x="0" y="166" width="400" height="26" fill="#6f8a58"/><rect x="0" y="190" width="400" height="12" fill="#5a5048"/><path d="M0 194h400M0 199h400" stroke="#aaa" stroke-width="1.5"/>' +
      train +
      '<rect x="0" y="202" width="400" height="58" fill="#b8b2a6"/><rect x="0" y="202" width="400" height="5" fill="#f2d24a"/>' +
      '<rect x="128" y="214" width="4" height="40" fill="#555"/><rect x="268" y="214" width="4" height="40" fill="#555"/>' +
      '<rect x="100" y="210" width="200" height="34" rx="3" fill="#0f4a2a" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">Bray Daly</text>' +
      '<rect x="18" y="214" width="56" height="20" rx="3" fill="' + LIME + '"/><text x="46" y="228" text-anchor="middle" ' + font + ' font-size="12" fill="#0f2a14">DART</text>',
      sky("hz1", "#7fa8c8", "#dfe8ee"));
  }

  /* 2. Bray Head over the seafront: the cross on the summit, the Irish Sea rolling in, gulls on the wind */
  function hzhead() {
    let waves = "";
    for (let i = 0; i < 12; i++) waves += '<path d="M' + (i * 40) + ' 0q10 -6 20 0t20 0" stroke="#cfe3ee" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz2)"/>' +
      '<g class="hz-cl"><ellipse cx="90" cy="40" rx="42" ry="10" fill="#fff" opacity=".75"/><ellipse cx="250" cy="30" rx="36" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<path d="M150 170q50 -90 130 -120q30 -8 50 6q40 40 70 114z" fill="#5f7d4a"/><path d="M200 120q40 -30 80 -40" stroke="#7a9a5a" stroke-width="4" fill="none" opacity=".6"/>' +
      '<path d="M178 170q30 -30 60 -40" stroke="#8a7a5a" stroke-width="2" fill="none" opacity=".6"/>' +
      '<rect x="292" y="22" width="6" height="34" fill="#f4f1e8"/><rect x="284" y="30" width="22" height="6" fill="#f4f1e8"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="' + SEA + '"/>' +
      '<g class="hz-wave"><g transform="translate(0 176)">' + waves + '</g><g transform="translate(20 206)">' + waves + '</g><g transform="translate(0 236)">' + waves + '</g></g>' +
      '<path d="M0 150h170l-20 30h-150z" fill="#9a9488"/><path d="M0 168h160" stroke="#d8d2c4" stroke-width="3"/>' +
      [10, 50, 90, 130].map(x => '<rect x="' + x + '" y="142" width="3" height="18" fill="#2a3a4a"/><circle cx="' + (x + 1.5) + '" cy="140" r="4" fill="#f4e6a0" class="hz-glow"/>').join("") +
      '<g class="hz-gull">' + gull(60, 90) + gull(100, 76) + '</g>' +
      '<text x="380" y="250" text-anchor="end" ' + font + ' font-size="13" fill="#fff" opacity=".85">BRAY HEAD</text>',
      sky("hz2", "#6f97b8", "#d6e2ea"));
  }

  /* 3. The bandstand on Bray promenade: music drifting off the seafront, the sea behind */
  function hzband() {
    return svg(
      '<rect width="400" height="260" fill="url(#hz3)"/>' +
      '<g class="hz-cl"><ellipse cx="70" cy="34" rx="40" ry="9" fill="#fff" opacity=".7"/><ellipse cx="320" cy="40" rx="34" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="120" width="400" height="44" fill="' + SEA + '"/><path d="M0 128h400M0 140h400" stroke="#cfe3ee" stroke-width="1.5" opacity=".5"/>' +
      '<rect x="0" y="164" width="400" height="96" fill="#b8b2a6"/><path d="M0 164h400" stroke="#8a8478" stroke-width="4"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<rect x="' + (i * 42) + '" y="152" width="3" height="14" fill="#2a3a4a"/>').join("") + '<path d="M0 154h400" stroke="#2a3a4a" stroke-width="2"/>' +
      '<rect x="120" y="186" width="160" height="22" fill="#e8e4d8" stroke="#6a6458" stroke-width="2"/>' +
      [128, 166, 204, 242, 270].map(x => '<rect x="' + x + '" y="116" width="5" height="70" fill="#f4f1e8"/>').join("") +
      '<path d="M108 120l92 -52l92 52z" fill="#2e6b4a" stroke="#1a4a30" stroke-width="2"/><path d="M200 68v-14" stroke="#1a4a30" stroke-width="3"/><circle cx="200" cy="52" r="4" fill="' + GOLD + '"/>' +
      '<path d="M112 120h176" stroke="#f4f1e8" stroke-width="5"/>' +
      [140, 178, 216, 254].map(x => '<path d="M' + x + ' 124q9 10 18 0" stroke="#f4f1e8" stroke-width="2" fill="none"/>').join("") +
      '<rect x="182" y="150" width="4" height="36" fill="#333"/><path d="M176 150h16" stroke="#333" stroke-width="2"/>' +
      '<path d="M210 150q-4 18 2 30h10q6 -12 0 -30z" fill="#a8723a"/><rect x="214" y="132" width="3" height="20" fill="#3a2414"/>' +
      note(160, 108, GOLD) + note(230, 104, "#fff", "hz-nt2") + note(260, 112, GOLD, "hz-nt3") +
      '<text x="200" y="238" text-anchor="middle" ' + font + ' font-size="13" fill="#2a2a2a" opacity=".75">BRAY SEAFRONT</text>',
      sky("hz3", "#87a9c4", "#e2eaee"));
  }

  /* 4. Trinity College Dublin, where he studied music: the granite Campanile in Front Square, the soft Dublin rain */
  function hztrinity() {
    let rain = "";
    for (let i = 0; i < 16; i++) rain += '<path d="M' + (12 + i * 25) + ' ' + (20 + (i * 23) % 60) + 'l-3 10" stroke="#dfe8f0" stroke-width="1.4" class="hz-rn' + (i % 2 ? " hz-rn2" : "") + '"/>';
    const col = (x) => '<rect x="' + x + '" y="110" width="8" height="58" fill="' + STONE + '" stroke="#8a8478" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz4)"/>' + rain +
      '<rect x="0" y="96" width="120" height="90" fill="#bfb8a6"/><rect x="280" y="96" width="120" height="90" fill="#bfb8a6"/>' +
      [10, 40, 70, 300, 330, 360].map(x => '<rect x="' + x + '" y="110" width="16" height="24" fill="#3a4450"/><rect x="' + x + '" y="146" width="16" height="24" fill="#3a4450"/>').join("") +
      '<rect x="150" y="160" width="100" height="14" fill="' + STONE + '" stroke="#8a8478"/>' +
      '<rect x="160" y="104" width="80" height="58" fill="#b8b0a0"/>' + col(162) + col(186) + col(206) + col(230) +
      '<path d="M182 162v-34q18 -20 36 0v34z" fill="#5a5448"/>' +
      '<rect x="156" y="96" width="88" height="10" fill="' + STONE + '" stroke="#8a8478"/>' +
      '<rect x="170" y="60" width="60" height="36" fill="#c8c0b0" stroke="#8a8478"/>' +
      [176, 196, 216].map(x => '<rect x="' + x + '" y="66" width="8" height="24" rx="4" fill="#5a5448"/>').join("") +
      '<rect x="166" y="54" width="68" height="8" fill="' + STONE + '" stroke="#8a8478"/>' +
      '<path d="M178 54q22 -36 44 0z" fill="#a8b8a8" stroke="#6a7a6a"/><rect x="198" y="12" width="4" height="12" fill="#6a7a6a"/>' +
      '<g class="hz-bird"><path d="M320 60q5 -4 10 0q5 -4 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/><path d="M350 46q4 -3 8 0q4 -3 8 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="174" width="400" height="86" fill="#9a9488"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 174l-30 86" stroke="#7a7468" stroke-width="1.5"/>').join("") +
      '<path d="M0 200h400M0 230h400" stroke="#7a7468" stroke-width="1.5"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="13" fill="#fff" opacity=".85">TRINITY COLLEGE DUBLIN</text>',
      sky("hz4", "#7a8a9a", "#c8d0d8"));
  }

  /* 5. His corner: Main Street and Quinsboro Road in Bray, Bray Head and its cross over the rooftops, his name on the wall */
  function hzcorner() {
    const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + (x + w / 2) + '" y="' + (y + 14) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#111">' + txt + '</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#hz5)"/>' +
      '<g class="hz-cl"><ellipse cx="300" cy="30" rx="40" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<path d="M180 120q40 -70 110 -88q30 -6 50 8q30 30 60 80z" fill="#5f7d4a"/>' +
      '<rect x="300" y="8" width="5" height="26" fill="#f4f1e8"/><rect x="294" y="14" width="17" height="5" fill="#f4f1e8"/>' +
      '<rect x="160" y="90" width="80" height="110" fill="#c4a07a"/><rect x="240" y="80" width="90" height="120" fill="#7a9ab0"/><rect x="330" y="96" width="70" height="104" fill="#e8dcc4"/>' +
      [172, 204, 254, 290, 344, 372].map(x => '<rect x="' + x + '" y="104" width="18" height="24" fill="#2a3540" stroke="#f4f1e8" stroke-width="2"/><rect x="' + x + '" y="144" width="18" height="24" fill="#2a3540" stroke="#f4f1e8" stroke-width="2"/>').join("") +
      '<rect x="156" y="84" width="88" height="6" fill="#8a6a4a"/><rect x="236" y="74" width="98" height="6" fill="#4a6a80"/>' +
      bricks(0, 112, 158, 98, "#7a5a4a", "#4a3022") +
      tag("HOZIER", 14, 164, 34, GOLD, -8) + tag("BRAY", 40, 194, 18, LIME, -4) +
      '<g class="hz-sp"><circle cx="140" cy="146" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="hz-sp hz-sp2"><circle cx="146" cy="154" r="2" fill="' + LIME + '" opacity=".7"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#55585e"/><rect x="0" y="206" width="400" height="5" fill="#b8b2a6"/>' +
      sign(170, 176, 104, "MAIN STREET") + sign(280, 176, 116, "QUINSBORO ROAD") +
      '<g class="hz-gull">' + gull(40, 40) + gull(80, 28) + '</g>',
      sky("hz5", "#7fa2c0", "#e4ecf0"));
  }

  window.SCENES = { hzstation: hzstation, hzhead: hzhead, hzband: hzband, hztrinity: hztrinity, hzcorner: hzcorner };
})();
