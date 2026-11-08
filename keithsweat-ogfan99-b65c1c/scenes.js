/* keithsweat scenes (NYC map, Manhattan: Harlem, raised in the Grant Houses on W 125th St). 400 x 260 SVGs.
   CSS classes and ids prefixed kws- (the page's own anim-train is kept on the train).
   0 125 St on the 1 line: the elevated station up on the Manhattan Valley Viaduct, the big steel arch over Broadway, a silver 1 train pulling in.
   1 The Grant Houses: the tall red-brick towers between Broadway and Amsterdam on W 125th St, a kid singing in the courtyard, music notes rising.
   2 Wall Street: his job before the music (brokerage assistant), the columned exchange front, a ticker band scrolling, green Wall St / Broad St signs.
   3 The Sweat Hotel: his own late-night radio show, a hotel front with a plain neon vertical sign, ON AIR light blinking, radio waves.
   4 W 125 St and Amsterdam Av: green signs, KEITH SWEAT tagged on the wall, the Grant Houses towers and the 1 train crossing the viaduct arch behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#ffcf5a", RED = "#ee352e", LAV = "#c9a0ff", BRICK = "#9a4a35";
  const css = '<style>' +
    '@keyframes kwsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kws-flk{animation:kwsflick 2.6s infinite}.kws-flk2{animation-delay:.9s}' +
    '@keyframes kwsnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-70px);opacity:0}}.kws-note{animation:kwsnote 3s ease-out infinite}.kws-n2{animation-delay:-1s}.kws-n3{animation-delay:-2s}' +
    '@keyframes kwssway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kws-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kwssway 2.2s ease-in-out infinite}' +
    '@keyframes kwscar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.kws-car{animation:kwscar 7s linear infinite}.kws-car2{animation-delay:-3.5s}' +
    '@keyframes kwstick{from{transform:translateX(0)}to{transform:translateX(-400px)}}.kws-tick{animation:kwstick 9s linear infinite}' +
    '@keyframes kwsblink{0%,100%{opacity:1}50%{opacity:.25}}.kws-blink{animation:kwsblink 1.2s steps(1) infinite}' +
    '@keyframes kwswave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.kws-wave{transform-box:fill-box;transform-origin:50% 50%;animation:kwswave 2.4s ease-out infinite}.kws-w2{animation-delay:-.8s}.kws-w3{animation-delay:-1.6s}' +
    '@keyframes kwsglow{0%,100%{opacity:.55}50%{opacity:1}}.kws-glow{animation:kwsglow 2.4s ease-in-out infinite}' +
    '@keyframes kwsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.kws-sp{animation:kwsspray 1.4s ease-out infinite}.kws-spb{animation-delay:.5s}' +
    '@keyframes kwsrun{from{transform:translateX(-260px)}to{transform:translateX(420px)}}.kws-run{animation:kwsrun 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, r, txt, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><text x="' + x + '" y="' + (y + r * .42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const note = (cls, x, y, c) => '<g class="kws-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="4" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/><path d="M' + (x + 6) + ' ' + (y - 18) + 'q8 4 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  /* the Manhattan Valley Viaduct's big steel arch, drawn between x0 and x1 with its deck at y */
  const arch = (x0, x1, y, h, c) => {
    const mid = (x0 + x1) / 2;
    let ribs = "";
    for (let i = 1; i < 10; i++) { const x = x0 + (x1 - x0) * i / 10; const t = (x - mid) / ((x1 - x0) / 2); const ya = y + h * t * t; ribs += '<path d="M' + x + ' ' + y + 'V' + ya + '" stroke="' + c + '" stroke-width="2"/>'; }
    return '<path d="M' + x0 + ' ' + (y + h) + 'Q' + mid + ' ' + (y - h) + ' ' + x1 + ' ' + (y + h) + '" stroke="' + c + '" stroke-width="7" fill="none"/>' +
      '<path d="M' + (x0 + 8) + ' ' + (y + h) + 'Q' + mid + ' ' + (y - h + 12) + ' ' + (x1 - 8) + ' ' + (y + h) + '" stroke="' + c + '" stroke-width="3" fill="none"/>' + ribs +
      '<rect x="' + (x0 - 30) + '" y="' + (y - 8) + '" width="' + (x1 - x0 + 60) + '" height="10" fill="' + c + '"/>' +
      Array.from({ length: Math.floor((x1 - x0 + 60) / 14) }, (_, i) => '<path d="M' + (x0 - 30 + i * 14) + ' ' + (y - 8) + 'l7 10l7 -10" stroke="#2f3a38" stroke-width="1.2" fill="none"/>').join("");
  };
  const tower = (x, y, w, h, lit) => {
    let win = "";
    for (let r = 0; r < Math.floor((h - 8) / 9); r++) for (let c = 0; c < Math.floor((w - 6) / 8); c++) {
      const on = ((r * 7 + c * 3 + x) % 5) === 0;
      win += '<rect class="' + (on && lit ? "kws-flk" + ((r + c) % 2 ? " kws-flk2" : "") : "") + '" x="' + (x + 4 + c * 8) + '" y="' + (y + 6 + r * 9) + '" width="4" height="5" fill="' + (on ? "#ffd98a" : "#3a2420") + '"/>';
    }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + BRICK + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#6e3326"/>' + win;
  };

  /* 0. 125 St on the 1 line, up on the viaduct */
  function kwsstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 42) + '" y="78" width="26" height="18" rx="3" fill="#d8ecfa" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="14" y="68" width="326" height="52" rx="8" fill="#c7ccd3" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="14" y="102" width="326" height="4" fill="#8a9098"/>' + bullet(322, 86, 9, "1", RED) +
      '<rect x="150" y="72" width="22" height="46" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/><circle cx="334" cy="112" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kwss0)"/>' +
      '<g fill="#3b2c3e">' + [[0, 120, 50, 90], [44, 140, 40, 70], [300, 116, 46, 94], [350, 132, 50, 78]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '"/>').join("") + '</g>' +
      '<rect x="0" y="40" width="400" height="10" fill="#4d5a57"/>' + [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="44" width="6" height="80" fill="#4d5a57"/>').join("") +
      tr +
      '<rect x="0" y="120" width="400" height="8" fill="#f2c200"/><rect x="0" y="128" width="400" height="10" fill="#8a8680"/>' +
      arch(70, 330, 150, 60, "#5e6e6a") +
      '<rect x="0" y="210" width="400" height="50" fill="#3d3d42"/><path d="M0 236h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="kws-car"><rect x="0" y="222" width="54" height="13" rx="5" fill="#f2c200"/><rect x="12" y="214" width="30" height="10" rx="3" fill="#f2c200"/><circle cx="12" cy="236" r="4.5" fill="#111"/><circle cx="42" cy="236" r="4.5" fill="#111"/></g>' +
      '<g class="kws-car kws-car2"><rect x="0" y="240" width="60" height="13" rx="5" fill="' + LAV + '"/><circle cx="14" cy="254" r="4.5" fill="#111"/><circle cx="46" cy="254" r="4.5" fill="#111"/></g>' +
      '<rect x="96" y="6" width="208" height="30" rx="3" fill="#111"/><rect x="96" y="6" width="208" height="3" fill="#fff"/>' +
      '<text x="112" y="30" ' + font + ' font-size="20" fill="#fff">125 St</text>' + bullet(282, 21, 10, "1", RED) +
      '<text x="200" y="176" text-anchor="middle" ' + font + ' font-size="8" fill="#e8e2d0" letter-spacing="2">BROADWAY</text>',
      sky("kwss0", "#2a1f4a", "#c4708a"));
  }

  /* 1. The Grant Houses on W 125th St */
  function kwsgrant() {
    return svg(
      '<rect width="400" height="260" fill="url(#kwss1)"/>' +
      tower(20, 30, 70, 170, true) + tower(120, 14, 74, 186, true) + tower(226, 26, 70, 174, true) + tower(326, 40, 60, 160, true) +
      '<rect x="0" y="196" width="400" height="64" fill="#7d7a72"/><rect x="0" y="196" width="400" height="5" fill="#9a968c"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 48) + ' 201v59" stroke="#6b685f" stroke-width="1"/>').join("") +
      [60, 300].map(x => '<g><rect x="' + (x - 2) + '" y="170" width="5" height="30" fill="#5a3a22"/><circle cx="' + x + '" cy="164" r="16" fill="#2f6b3a"/><circle cx="' + (x - 10) + '" cy="170" r="10" fill="#3a7a44"/></g>').join("") +
      '<rect x="120" y="218" width="60" height="6" fill="#3b4a5a"/><rect x="124" y="224" width="4" height="12" fill="#3b4a5a"/><rect x="172" y="224" width="4" height="12" fill="#3b4a5a"/>' +
      '<g class="kws-sway"><circle cx="230" cy="196" r="8" fill="#5a3a26"/><rect x="222" y="204" width="16" height="24" rx="4" fill="' + LAV + '"/><rect x="236" y="198" width="3" height="20" fill="#222"/><circle cx="238" cy="196" r="3.5" fill="#444"/></g>' +
      note("", 254, 190, GOLD) + note("kws-n2", 214, 184, "#fff") + note("kws-n3", 270, 196, LAV) +
      '<rect x="110" y="236" width="180" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '" letter-spacing="2">GRANT HOUSES · W 125 ST</text>',
      sky("kwss1", "#1d1838", "#6a4a6a"));
  }

  /* 2. Wall Street, his job before the music */
  function kwswall() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (112 + i * 32) + '" y="88" width="14" height="102" fill="#ece6d8"/><rect x="' + (108 + i * 32) + '" y="84" width="22" height="6" fill="#d8d0bf"/>').join("");
    const tick = "WALL ST  ·  UP 25  ·  KEITH WAS A BROKERAGE ASSISTANT  ·  THEN HE MADE IT LAST FOREVER  ·  ";
    return svg(
      '<rect width="400" height="260" fill="url(#kwss2)"/>' +
      '<rect x="0" y="0" width="90" height="210" fill="#4a4740"/><rect x="310" y="0" width="90" height="210" fill="#4a4740"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (10 + (i % 3) * 26) + '" y="' + (10 + Math.floor(i / 3) * 36) + '" width="16" height="22" fill="#6a6658"/><rect x="' + (320 + (i % 3) * 26) + '" y="' + (10 + Math.floor(i / 3) * 36) + '" width="16" height="22" fill="#6a6658"/>').join("") +
      '<rect x="96" y="60" width="208" height="150" fill="#d8d0bf"/><path d="M96 62l104 -30 104 30z" fill="#e4dccb" stroke="#bfb6a2" stroke-width="2"/>' +
      '<rect x="96" y="62" width="208" height="20" fill="#cfc6b2"/>' + cols +
      '<rect x="96" y="190" width="208" height="20" fill="#bfb6a2"/>' +
      '<rect x="196" y="14" width="2" height="22" fill="#666"/><g class="kws-sway"><rect x="198" y="14" width="22" height="13" fill="#b22234"/><rect x="198" y="16" width="22" height="2" fill="#fff"/><rect x="198" y="20" width="22" height="2" fill="#fff"/><rect x="198" y="24" width="22" height="2" fill="#fff"/><rect x="198" y="14" width="9" height="7" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="210" width="400" height="22" fill="#111"/><g class="kws-tick"><text x="4" y="226" ' + font + ' font-size="12" fill="#39ff88">' + tick + tick + '</text></g>' +
      '<rect x="0" y="232" width="400" height="28" fill="#8f8b84"/>' +
      '<rect x="40" y="150" width="5" height="82" fill="#2f2f2f"/>' + sign(4, 152, 76, "Wall St") + sign(8, 178, 70, "Broad St") +
      '<g class="kws-run"><circle cx="0" cy="214" r="0" fill="none"/></g>',
      sky("kwss2", "#9fb8d6", "#e8dcc4"));
  }

  /* 3. The Sweat Hotel, his late-night radio show */
  function kwshotel() {
    const letters = "SWEAT".split("").map((ch, i) => '<text class="kws-glow" x="70" y="' + (64 + i * 24) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="' + LAV + '" style="animation-delay:' + (-i * .3) + 's">' + ch + '</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kwss3)"/>' +
      '<rect x="100" y="30" width="280" height="190" fill="#2b2033"/>' +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect class="' + ((r + c) % 3 ? "" : "kws-flk") + '" x="' + (118 + c * 42) + '" y="' + (44 + r * 32) + '" width="24" height="18" fill="' + ((r + c) % 3 ? "#4a3a52" : "#ffd98a") + '"/>').join("")).join("") +
      '<rect x="48" y="40" width="44" height="140" rx="6" fill="#140e1c" stroke="' + GOLD + '" stroke-width="2"/>' + letters +
      '<rect x="190" y="176" width="120" height="44" fill="#120c18" stroke="' + GOLD + '" stroke-width="2"/><text x="250" y="192" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="12" fill="' + GOLD + '" letter-spacing="3">HOTEL</text>' +
      '<rect class="kws-blink" x="208" y="200" width="84" height="16" rx="3" fill="' + RED + '"/><text x="250" y="212" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">ON AIR</text>' +
      '<g transform="translate(340 150)"><rect x="-4" y="0" width="8" height="58" fill="#333"/><rect x="-10" y="-26" width="20" height="30" rx="10" fill="#555" stroke="#999" stroke-width="2"/>' +
      '<circle class="kws-wave" cx="0" cy="-12" r="18" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="kws-wave kws-w2" cx="0" cy="-12" r="18" fill="none" stroke="' + LAV + '" stroke-width="2"/><circle class="kws-wave kws-w3" cx="0" cy="-12" r="18" fill="none" stroke="#fff" stroke-width="1.5"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#1c1820"/><rect x="180" y="220" width="140" height="8" fill="#7a1f3a"/>' +
      note("", 140, 214, GOLD) + note("kws-n2", 110, 206, "#fff"),
      sky("kwss3", "#0c0a1c", "#3a2050"));
  }

  /* 4. W 125 St and Amsterdam Av */
  function kwscorner() {
    const tr = '<g class="kws-run"><rect x="0" y="62" width="200" height="22" rx="5" fill="#c7ccd3"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (8 + i * 24) + '" y="66" width="14" height="9" fill="#d8ecfa"/>').join("") + bullet(190, 73, 6, "1", RED) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kwss4)"/>' +
      tower(10, 40, 56, 100, true) + tower(334, 30, 60, 110, true) +
      tr + arch(110, 290, 90, 34, "#5e6e6a") +
      '<rect x="0" y="126" width="400" height="98" fill="#b8a48a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#a8937a" stroke-width="1"/>').join("") +
      '<path d="M0 126h400" stroke="#6e5f4c" stroke-width="3"/>' +
      tag("KEITH SWEAT", 14, 188, 34, GOLD, -6) + tag("NEW JACK", 30, 214, 18, LAV, -4) + tag("MAKE IT LAST", 210, 212, 18, "#ff7a8a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5a60"/><rect x="0" y="222" width="400" height="4" fill="#9a9aa0"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 116, "W 125 St") + sign(258, 124, 136, "Amsterdam Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kws-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kws-sp"><circle cx="196" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kws-sp kws-spb"><circle cx="202" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kwss4", "#22163e", "#d97a6a"));
  }

  window.SCENES = { kwsstation: kwsstation, kwsgrant: kwsgrant, kwswall: kwswall, kwshotel: kwshotel, kwscorner: kwscorner };
})();
