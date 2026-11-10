/* andymineo scenes (NYC map: Manhattan; Washington Heights by way of Syracuse). CSS classes prefixed am- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes amflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.am-flk{animation:amflick 2.6s infinite}.am-flk2{animation-delay:.9s}' +
    '@keyframes amglow{0%,100%{opacity:.45}50%{opacity:1}}.am-glow{animation:amglow 2.2s ease-in-out infinite}.am-g2{animation-delay:-1.1s}' +
    '@keyframes amsnow{0%{transform:translate(0,-20px)}100%{transform:translate(-24px,280px)}}.am-sn{animation:amsnow 7s linear infinite}.am-sn2{animation-delay:-2.3s}.am-sn3{animation-delay:-4.6s}' +
    '@keyframes amskate{0%{transform:translateX(0)}50%{transform:translateX(150px)}100%{transform:translateX(0)}}.am-sk{animation:amskate 8s ease-in-out infinite}.am-sk2{animation-delay:-3s;animation-duration:10s}' +
    '@keyframes amsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-22px);opacity:0}}.am-st{animation:amsteam 1.8s ease-out infinite}.am-st2{animation-delay:.6s}.am-st3{animation-delay:1.2s}' +
    '@keyframes amflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.am-fl{transform-box:fill-box;transform-origin:0 50%;animation:amflag 1.6s ease-in-out infinite}' +
    '@keyframes amspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.am-sp{animation:amspray 1.4s ease-out infinite}.am-sp2{animation-delay:.45s}' +
    '@keyframes amwalk{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.am-wk{animation:amwalk 14s linear infinite}.am-wk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const snow = n => Array.from({ length: n }, (_, i) => '<circle class="am-sn' + ["", " am-sn2", " am-sn3"][i % 3] + '" cx="' + ((i * 47) % 420) + '" cy="' + ((i * 31) % 60) + '" r="' + (i % 3 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>').join("");
  const GOLD = "#f2c14e", RED = "#e63946", BLUE = "#0039a6", ONE = "#ee352e", ICE = "#5ec8e5";

  /* 0. 168 St–Washington Heights, deep underground: the big vaulted ceiling, white tile with the dark-red band, the black sign with the blue A and C and the red 1, the train sliding in */
  function amstation() {
    const tr = '<g class="anim-train"><rect x="24" y="118" width="330" height="70" rx="8" fill="#c9cdd2" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (38 + i * 44) + '" y="128" width="30" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="24" y="160" width="330" height="5" fill="' + BLUE + '"/>' +
      '<rect x="334" y="122" width="20" height="62" rx="4" fill="#a3a9b0"/><circle cx="345" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="168" width="30" height="12" rx="2" fill="#111"/><text x="55" y="178" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">A</text></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1d22"/>' +
      /* the vault */
      '<path d="M0 110V60Q200 -40 400 60V110z" fill="#d9d3c4"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 110V' + (60 - Math.sin(i / 8 * Math.PI) * 38).toFixed(0) + '" stroke="#c4bca8" stroke-width="2"/>').join("") +
      '<path d="M0 60Q200 -40 400 60" stroke="#a89f88" stroke-width="3" fill="none"/><path d="M0 76Q200 -18 400 76" stroke="#c4bca8" stroke-width="1.5" fill="none"/>' +
      [80, 200, 320].map((x, i) => '<rect class="am-flk' + (i === 1 ? " am-flk2" : "") + '" x="' + (x - 24) + '" y="' + (i === 1 ? 18 : 34) + '" width="48" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="96" width="400" height="8" fill="#7a2a2a"/>' +
      '<rect x="0" y="104" width="400" height="90" fill="#24262c"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [20, 380].map(x => '<rect x="' + (x - 7) + '" y="60" width="14" height="130" fill="#3d4a56"/>').join("") +
      '<rect x="60" y="54" width="280" height="34" rx="3" fill="#111"/><text x="72" y="77" ' + font + ' font-size="13" fill="#fff">168 St–Washington Hts</text>' +
      bullet(258, 71, "A", BLUE) + bullet(282, 71, "C", BLUE) + bullet(306, 71, "1", ONE) +
      '<rect class="am-glow" x="140" y="212" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45"/>',
      "");
  }

  /* 1. Syracuse University's Hall of Languages (1873), where his first group Fat Camp signed to the campus label: cream limestone, the three mansard towers in dark slate, snow on the Quad */
  function amhall() {
    const win = (x, y) => '<path d="M' + x + ' ' + (y + 18) + 'v-12q5 -7 10 0v12z" fill="#2a3442"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#am1)"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#eef2f6"/><path d="M0 200h400" stroke="#cfd8e0" stroke-width="2"/>' +
      /* main block */
      '<rect x="70" y="96" width="260" height="104" fill="#e6dcc2" stroke="#b8aa86" stroke-width="2"/>' +
      '<path d="M66 96l14 -18h240l14 18z" fill="#4a4e58"/>' +
      [0, 1, 2].map(r => Array.from({ length: 11 }, (_, c) => (c === 5 ? "" : win(86 + c * 22, 108 + r * 30))).join("")).join("") +
      /* side towers */
      [44, 314].map(x => '<rect x="' + x + '" y="84" width="42" height="116" fill="#ece3cb" stroke="#b8aa86" stroke-width="2"/><path d="M' + (x - 4) + ' 84q25 -34 50 0z" fill="#4a4e58"/><rect x="' + (x + 18) + '" y="44" width="6" height="20" fill="#4a4e58"/>' + win(x + 16, 100) + win(x + 16, 134) + win(x + 16, 168)).join("") +
      /* centre tower */
      '<rect x="176" y="50" width="48" height="150" fill="#efe6ce" stroke="#b8aa86" stroke-width="2"/><path d="M170 52q30 -46 60 0z" fill="#3e424c"/><rect x="198" y="0" width="4" height="12" fill="#3e424c"/>' +
      '<circle cx="200" cy="70" r="9" fill="#fff" stroke="#3e424c" stroke-width="2"/><path d="M200 70v-6M200 70l4 2" stroke="#3e424c" stroke-width="1.5"/>' +
      win(195, 92) + win(195, 124) + '<path d="M186 200v-34q14 -16 28 0v34z" fill="#3a2a22"/>' +
      '<path d="M66 96h110M224 96h110M40 84h50M310 84h50" stroke="#fff" stroke-width="3" opacity=".9"/>' +
      '<path d="M0 214q100 -8 200 0t200 0" stroke="#cfd8e0" stroke-width="2" fill="none"/>' +
      '<g class="am-wk"><circle cx="0" cy="206" r="4" fill="#ff7a1a"/><rect x="-4" y="210" width="8" height="14" rx="3" fill="#ff7a1a"/></g>' +
      '<g class="am-wk am-wk2"><circle cx="0" cy="210" r="4" fill="#2a3a5a"/><rect x="-4" y="214" width="8" height="14" rx="3" fill="#2a3a5a"/></g>' +
      snow(26),
      sky("am1", "#8aa4c2", "#dfe6ee"));
  }

  /* 2. Clinton Square, downtown Syracuse, in winter: the ice rink, the tall granite Soldiers and Sailors Monument, the holiday tree, skaters gliding, snow falling */
  function amclinton() {
    return svg(
      '<rect width="400" height="260" fill="url(#am2)"/>' +
      '<g fill="#2c3348"><rect x="0" y="70" width="70" height="90"/><rect x="74" y="50" width="54" height="110"/><rect x="290" y="60" width="50" height="100"/><rect x="344" y="78" width="56" height="82"/></g>' +
      Array.from({ length: 20 }, (_, i) => '<rect class="' + (i % 3 ? "" : "am-glow") + '" x="' + [10, 30, 50, 84, 104, 300, 320, 354, 374][i % 9] + '" y="' + (84 + (i % 4) * 18) + '" width="7" height="9" fill="#ffd98a" opacity=".8"/>').join("") +
      /* monument */
      '<rect x="182" y="40" width="22" height="120" fill="#b8b4aa" stroke="#8a867e" stroke-width="2"/><path d="M180 40l13 -14l13 14z" fill="#8a867e"/><circle cx="193" cy="22" r="5" fill="#6a7a5a"/>' +
      '<rect x="168" y="150" width="50" height="14" fill="#a8a49a"/><rect x="176" y="120" width="34" height="30" fill="#a8a49a"/>' +
      /* tree */
      '<path d="M262 160l-26 0l26 -96l26 96z" fill="#1f6b3a"/><path d="M262 64l-4 -10l4 2l4 -2z" fill="' + GOLD + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="am-glow' + (i % 2 ? " am-g2" : "") + '" cx="' + (250 + (i * 7) % 26) + '" cy="' + (84 + i * 7) + '" r="2.4" fill="' + [RED, GOLD, ICE][i % 3] + '"/>').join("") +
      /* rink */
      '<rect x="0" y="164" width="400" height="96" fill="#cfeaf4"/><rect x="0" y="160" width="400" height="8" fill="#e8e4dc"/>' +
      '<path d="M20 200q180 -20 360 0M40 236q160 -16 320 0" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/>' +
      '<g class="am-sk"><g transform="translate(60 0)"><circle cx="0" cy="186" r="5" fill="#3a2a22"/><rect x="-5" y="191" width="10" height="16" rx="3" fill="' + RED + '"/><path d="M-3 207l-5 10M3 207l6 10" stroke="#222" stroke-width="2.5"/></g></g>' +
      '<g class="am-sk am-sk2"><g transform="translate(120 20)"><circle cx="0" cy="186" r="5" fill="#6a4a32"/><rect x="-5" y="191" width="10" height="16" rx="3" fill="' + ICE + '"/><path d="M-3 207l-6 10M3 207l4 10" stroke="#222" stroke-width="2.5"/></g></g>' +
      snow(30),
      sky("am2", "#1a2240", "#5a6a8c"));
  }

  /* 3. "Gotta stop at L&B's": the Spumoni Gardens on 86th St in Bensonhurst, Brooklyn: the low pizzeria, the walk-up window, picnic tables out front, a tray of square Sicilian slices and a tricolor spumoni cup */
  function amspumoni() {
    return svg(
      '<rect width="400" height="260" fill="url(#am3)"/>' +
      '<rect x="40" y="60" width="320" height="110" fill="#f2ece0" stroke="#c9bfa8" stroke-width="2"/>' +
      '<path d="M30 60h340l-10 26H40z" fill="#2f7a3a"/>' + Array.from({ length: 17 }, (_, i) => '<path d="M' + (40 + i * 20) + ' 60l-4 26h10l4 -26z" fill="#fff"/>').join("") +
      '<rect x="120" y="22" width="160" height="30" rx="3" fill="#fff" stroke="#2f7a3a" stroke-width="3"/><text x="200" y="43" text-anchor="middle" ' + font + ' font-size="15" fill="#c0392b">SPUMONI · 86 ST</text>' +
      '<rect x="70" y="100" width="110" height="50" rx="3" fill="#2a3442"/><rect x="76" y="106" width="98" height="38" fill="#ffd98a" class="am-glow"/>' +
      '<rect x="220" y="100" width="110" height="50" rx="3" fill="#2a3442"/><rect x="226" y="106" width="98" height="38" fill="#ffd98a" class="am-glow am-g2"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#9a958a"/>' +
      /* picnic tables */
      [40, 250].map(x => '<rect x="' + x + '" y="196" width="110" height="10" fill="#2f7a3a"/><path d="M' + (x + 14) + ' 206l-8 26M' + (x + 96) + ' 206l8 26" stroke="#2f7a3a" stroke-width="5"/><rect x="' + (x - 6) + '" y="220" width="122" height="6" fill="#2f7a3a"/>').join("") +
      /* square slices tray */
      '<rect x="60" y="182" width="66" height="16" rx="2" fill="#c9c4b8"/>' + [0, 1, 2].map(i => '<rect x="' + (64 + i * 20) + '" y="176" width="18" height="12" fill="#c0392b" stroke="#e8b86a" stroke-width="2"/>').join("") +
      '<g class="am-st"><path d="M80 170q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="am-st am-st2"><path d="M96 170q4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g><g class="am-st am-st3"><path d="M112 170q-4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* spumoni cup */
      '<path d="M286 196l-8 -20h40l-8 20z" fill="#fff" stroke="#bbb" stroke-width="1.5"/><path d="M278 176q20 -20 40 0z" fill="#f4a7b9"/><path d="M284 170q14 -10 28 0" stroke="#7fbf6a" stroke-width="5" fill="none"/><path d="M290 164q8 -5 16 0" stroke="#f7efd8" stroke-width="4" fill="none"/>',
      sky("am3", "#7ab8e8", "#f6dcb0"));
  }

  /* 4. "Down on 162": St Nicholas Av and W 162 St, Washington Heights: green signs, ANDY MINEO tagged on the wall, Sylvan Terrace's yellow wooden 1880s row houses up the stone steps behind */
  function amcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#am5)"/>' +
      /* Sylvan Terrace up the steps */
      '<path d="M120 120h180v-6H120z" fill="#8a7a62"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (120 + i * 26) + '" y="62" width="24" height="52" fill="#e9c75a" stroke="#7a5a2a" stroke-width="1.5"/><path d="M' + (118 + i * 26) + ' 62h28v-6h-28z" fill="#5a3e22"/>' +
        '<rect x="' + (125 + i * 26) + '" y="70" width="6" height="12" fill="#2a3442"/><rect x="' + (135 + i * 26) + '" y="70" width="6" height="12" fill="' + (i % 3 ? "#2a3442" : "#ffd98a") + '"/><rect x="' + (127 + i * 26) + '" y="92" width="10" height="22" fill="#3a5a3a"/>').join("") +
      '<path d="M190 120l-10 18h40l-10 -18z" fill="#a8a49a"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (182 + i * 2) + ' ' + (124 + i * 4) + 'h' + (36 - i * 4) + '" stroke="#7a766e" stroke-width="1.5"/>').join("") +
      '<g fill="#2a2e3e"><rect x="0" y="50" width="110" height="90"/><rect x="310" y="40" width="90" height="100"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="' + (i % 3 ? "" : "am-glow") + '" x="' + [12, 40, 70, 322, 352, 380][i % 6] + '" y="' + (62 + (i % 3) * 24) + '" width="10" height="12" fill="#ffd98a" opacity=".8"/>').join("") +
      /* the wall */
      '<rect x="0" y="138" width="400" height="88" fill="#6e4a3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (146 + i * 8) + 'h400" stroke="#5e3c2e" stroke-width="1"/>').join("") +
      tag("ANDY MINEO", 22, 196, 40, GOLD, -5) + tag("MINER LEAGUE", 40, 220, 20, ICE, -3) + tag("SIN IS WACK", 210, 220, 18, "#fff", -4) + tag("C-LITE", 16, 160, 20, RED, -6) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(296, 98, 104, "St Nicholas Av") + sign(306, 124, 86, "W 162 St") +
      '<g class="am-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="am-sp am-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("am5", "#141a34", "#d07a4a"));
  }

  window.SCENES = { amstation: amstation, amhall: amhall, amclinton: amclinton, amspumoni: amspumoni, amcorner: amcorner };
})();
