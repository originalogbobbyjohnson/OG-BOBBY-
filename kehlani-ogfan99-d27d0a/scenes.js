/* kehlani scenes (Regions tab: The Bay Area; North Oakland). CSS classes prefixed kh- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes khflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.kh-flk{animation:khflick 2.6s infinite}.kh-flk2{animation-delay:.9s}' +
    '@keyframes khglow{0%,100%{opacity:.4}50%{opacity:1}}.kh-glow{animation:khglow 2.2s ease-in-out infinite}.kh-g2{animation-delay:-1.1s}' +
    '@keyframes khsway{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}.kh-sw{animation:khsway 1.6s ease-in-out infinite}.kh-sw2{animation-delay:-.8s}' +
    '@keyframes khspin{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.kh-spin{transform-box:fill-box;transform-origin:50% 100%;animation:khspin 1.4s ease-in-out infinite}.kh-spin2{animation-delay:-.7s}' +
    '@keyframes khwave{0%{transform:translateX(0)}100%{transform:translateX(-80px)}}.kh-wave{animation:khwave 3s linear infinite}.kh-wave2{animation-duration:4.4s}' +
    '@keyframes khbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.kh-bm{transform-box:fill-box;transform-origin:50% 0%;animation:khbeam 3.6s ease-in-out infinite}.kh-bm2{animation-delay:-1.8s}' +
    '@keyframes khleaf{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.kh-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:khleaf 3s ease-in-out infinite}' +
    '@keyframes khspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kh-sp{animation:khspray 1.4s ease-out infinite}.kh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "kh-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const oak = (x, y, s) => '<g class="kh-leaf"><path d="M' + x + ' ' + y + 'v-' + (40 * s) + '" stroke="#3a2a1c" stroke-width="' + (8 * s) + '"/>' +
    [[-26, -46, 24], [0, -62, 28], [26, -46, 24], [-12, -36, 20], [14, -34, 20]].map(c => '<circle cx="' + (x + c[0] * s) + '" cy="' + (y + c[1] * s) + '" r="' + (c[2] * s) + '" fill="#2c5a34"/>').join("") + '</g>';
  const SKY = "#7fd3ff", PINK = "#ff8fb1", GOLD = "#f6d365", ACG = "#00843d", ACB = "#0072bc";

  /* 1. The AC Transit 6 pulling up on Telegraph Ave at 51st St in Temescal: the low row of shop awnings and string lights, evening */
  function khstop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="114" width="32" height="24" rx="2" fill="#20324a"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="72" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 150h320v8h-320z" fill="' + ACG + '"/><path d="M40 158h320v5h-320z" fill="' + ACB + '"/>' +
      '<rect x="326" y="114" width="30" height="44" rx="3" fill="#20324a"/><rect x="322" y="106" width="36" height="8" rx="2" fill="#111"/><text x="340" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">6</text>' +
      '<circle cx="356" cy="168" r="3.5" fill="#fff6c2"/><circle cx="92" cy="178" r="12" fill="#111"/><circle cx="92" cy="178" r="5" fill="#777"/><circle cx="300" cy="178" r="12" fill="#111"/><circle cx="300" cy="178" r="5" fill="#777"/></g>';
    const shops = [["#b85a4a", 0, 70], ["#4a7a8a", 74, 64], ["#c8a24a", 142, 80], ["#6a4a8a", 226, 70], ["#4a8a5a", 300, 100]].map(s =>
      '<rect x="' + s[1] + '" y="44" width="' + s[2] + '" height="62" fill="#e8dcc4" stroke="#b8ac94" stroke-width="1"/><path d="M' + s[1] + ' 62h' + s[2] + 'l-6 14h-' + (s[2] - 12) + 'z" fill="' + s[0] + '"/>' +
      '<rect x="' + (s[1] + 8) + '" y="80" width="' + (s[2] - 16) + '" height="22" fill="#ffd98a" opacity=".55" class="kh-glow"/>').join("");
    const lights = Array.from({ length: 20 }, (_, i) => '<circle class="kh-glow' + (i % 2 ? " kh-g2" : "") + '" cx="' + (10 + i * 20) + '" cy="' + (38 + Math.sin(i / 1.6) * 4) + '" r="2" fill="#ffe08a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kh1)"/>' + stars(8) + shops +
      '<path d="M0 36q100 10 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + lights +
      '<rect x="0" y="176" width="400" height="84" fill="#3c3e44"/><rect x="0" y="176" width="400" height="5" fill="#c9c4b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="222" width="30" height="4" fill="#f0d24a"/>').join("") +
      bus +
      '<rect x="16" y="120" width="4" height="58" fill="#7a7f86"/><rect x="2" y="104" width="34" height="22" rx="3" fill="#fff" stroke="' + ACG + '" stroke-width="2.5"/>' +
      '<text x="19" y="113" text-anchor="middle" ' + font + ' font-size="5" fill="' + ACG + '">AC TRANSIT</text><text x="19" y="123" text-anchor="middle" ' + font + ' font-size="9" fill="#111">6</text>' +
      '<rect x="330" y="50" width="4" height="56" fill="#2a2a2a"/>' + sign(280, 4, 104, "Telegraph Av") + sign(300, 28, 64, "51st St"),
      sky("kh1", "#20284e", "#c87a8a"));
  }

  /* 2. The dance studio at Oakland School for the Arts, where she switched from dance to singing: mirrors, the barre, dancers turning, a mic stand waiting in the corner */
  function khosa() {
    const dancer = (x, c, k) => '<g class="kh-spin' + (k ? " kh-spin2" : "") + '"><circle cx="' + x + '" cy="132" r="8" fill="#2a1a22"/><path d="M' + (x - 9) + ' 186l5 -44h8l5 44z" fill="' + c + '"/><path d="M' + (x - 4) + ' 146l-18 -16M' + (x + 4) + ' 146l18 -16" stroke="#2a1a22" stroke-width="4" stroke-linecap="round"/><path d="M' + (x - 3) + ' 186l-6 26M' + (x + 3) + ' 186l6 26" stroke="#2a1a22" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e8e0d4"/>' +
      '<rect x="0" y="0" width="400" height="26" fill="#2a3a5a"/><text x="200" y="18" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">OAKLAND SCHOOL FOR THE ARTS</text>' +
      '<rect x="20" y="40" width="360" height="150" fill="#bcd6e4" stroke="#8aa0ae" stroke-width="3"/>' + [110, 200, 290].map(x => '<path d="M' + x + ' 40v150" stroke="#8aa0ae" stroke-width="2"/>').join("") +
      '<path d="M30 60l40 120M150 50l30 130M250 60l30 120" stroke="#fff" stroke-width="6" opacity=".35"/>' +
      '<rect x="20" y="150" width="360" height="5" fill="#9a7a5a"/>' + [40, 140, 240, 340].map(x => '<rect x="' + x + '" y="150" width="4" height="40" fill="#9a7a5a"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#c8945a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 190l-20 70" stroke="#a87444" stroke-width="2"/>').join("") +
      dancer(130, PINK, 0) + dancer(210, SKY, 1) + dancer(290, GOLD, 0) +
      '<rect x="356" y="120" width="3" height="76" fill="#555"/><rect x="346" y="194" width="22" height="4" rx="2" fill="#555"/><rect x="351" y="104" width="12" height="18" rx="6" fill="#c9ccd2" stroke="#555" stroke-width="1.5" class="kh-flk"/>',
      "");
  }

  /* 3. Her aunt's two-door duplex in North Oakland: the shingled front, the twin stairs, the bay window lit, a lemon tree by the steps */
  function khduplex() {
    const lemons = [[52, 150], [66, 140], [44, 166], [74, 160], [58, 172]].map((p, i) => '<circle class="kh-glow' + (i % 2 ? " kh-g2" : "") + '" cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#f4dc3a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kh3)"/>' +
      '<path d="M100 70l100 -46l100 46z" fill="#5a4a62"/><rect x="104" y="70" width="192" height="130" fill="#8ab0c0"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M104 ' + (78 + i * 10) + 'h192" stroke="#7a9eae" stroke-width="2"/>').join("") +
      '<path d="M170 96h60v40h-60z" fill="#f4eee0"/><path d="M164 92h72l-8 -10h-56z" fill="#5a4a62"/>' +
      '<rect class="kh-glow" x="176" y="102" width="48" height="30" fill="#ffd98a"/><path d="M200 102v30M176 117h48" stroke="#f4eee0" stroke-width="3"/>' +
      '<rect x="116" y="96" width="34" height="34" fill="#2a3a4a"/><rect x="250" y="96" width="34" height="34" fill="#2a3a4a"/>' +
      '<rect x="120" y="150" width="26" height="50" fill="#9a3a3a"/><rect x="254" y="150" width="26" height="50" fill="#3a5a9a"/>' +
      '<circle cx="141" cy="176" r="2" fill="' + GOLD + '"/><circle cx="259" cy="176" r="2" fill="' + GOLD + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (112 - i * 4) + '" y="' + (200 + i * 10) + '" width="' + (42 + i * 8) + '" height="10" fill="#c8c0b0" stroke="#a8a090"/><rect x="' + (246 - i * 4) + '" y="' + (200 + i * 10) + '" width="' + (42 + i * 8) + '" height="10" fill="#c8c0b0" stroke="#a8a090"/>').join("") +
            '<g class="kh-leaf"><path d="M60 250v-70" stroke="#5a3a1a" stroke-width="6"/><circle cx="60" cy="158" r="30" fill="#3a7a3a"/>' + lemons + '</g>' +
      '<rect x="0" y="250" width="400" height="10" fill="#8a8478"/>' +
      '<g class="kh-sw"><path d="M330 250v-26" stroke="#555" stroke-width="3"/><rect x="318" y="210" width="26" height="16" rx="7" fill="#3a5a9a"/><rect class="kh-flk" x="340" y="204" width="3" height="10" fill="#d33"/></g>',
      sky("kh3", "#9ed2f0", "#f4e0c8"));
  }

  /* 4. A Tsunami Mob show: the big blue wave rolling across the LED wall, beams swinging, the crowd's phones up */
  function khstage() {
    const crowd = Array.from({ length: 24 }, (_, i) => '<g class="kh-sw' + (i % 2 ? " kh-sw2" : "") + '"><circle cx="' + (6 + i * 17) + '" cy="228" r="7" fill="#1e2a44"/><rect x="' + (i * 17 - 1) + '" y="234" width="14" height="28" rx="5" fill="#1e2a44"/>' +
      (i % 3 === 0 ? '<rect class="kh-glow" x="' + (8 + i * 17) + '" y="204" width="6" height="10" rx="1" fill="#cfe8ff"/>' : "") + '</g>').join("");
    const wave = (cls, y, c, o) => '<g class="' + cls + '"><path d="M0 ' + y + Array.from({ length: 8 }, () => 'q20 -18 40 0t40 0').join("") + 'v' + (160 - y) + 'h-640z" fill="' + c + '" opacity="' + o + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#050a14"/>' +
      '<rect x="40" y="20" width="320" height="140" fill="#0a1e3a" stroke="#333" stroke-width="3"/>' +
      '<svg x="40" y="20" width="320" height="140" viewBox="0 0 320 140">' + wave("kh-wave", 70, "#2a7ac0", ".9") + wave("kh-wave kh-wave2", 92, SKY, ".8") + wave("kh-wave", 116, "#e8f6ff", ".6") + '</svg>' +
      '<text x="200" y="52" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" fill="#fff" letter-spacing="3">TSUNAMI MOB</text>' +
      '<path class="kh-bm" d="M70 0l-50 200h100z" fill="' + PINK + '" opacity=".2"/><path class="kh-bm kh-bm2" d="M330 0l-50 200h100z" fill="' + SKY + '" opacity=".2"/>' +
      '<rect x="20" y="160" width="360" height="30" fill="#1a1a22"/><rect x="20" y="160" width="360" height="4" fill="' + PINK + '"/>' +
      '<g class="kh-sw"><circle cx="200" cy="136" r="7" fill="#111"/><path d="M192 160l3 -18h10l3 18z" fill="' + SKY + '"/><rect x="211" y="134" width="2" height="26" fill="#999"/></g>' +
      crowd,
      "");
  }

  /* 5. Telegraph Ave and MacArthur Blvd at Mosswood Park: KEHLANI tagged on the wall, the park's big oaks and the old white Gothic Moss House peeking out behind */
  function khcorner() {
    const house = '<rect x="150" y="62" width="86" height="56" fill="#f0ece2"/><path d="M144 64l49 -40l49 40z" fill="#f0ece2" stroke="#c8c2b4" stroke-width="2"/>' +
      '<path d="M178 64l15 -14l15 14z" fill="#e2dccc"/><rect x="186" y="48" width="14" height="14" fill="#2a3a4a"/>' +
      [160, 214].map(x => '<path d="M' + x + ' 104v-24q6 -8 12 0v24z" fill="#2a3a4a"/>').join("") + '<rect class="kh-glow" x="188" y="82" width="10" height="22" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kh5)"/>' + stars(10) + house +
      oak(70, 124, 1) + oak(330, 124, 1.1) + oak(120, 124, 0.7) + oak(270, 124, 0.6) +
      '<rect x="0" y="120" width="400" height="12" fill="#2a4a3a"/>' +
      '<rect x="0" y="130" width="400" height="94" fill="#3a4a6a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#33405e" stroke-width="1"/>').join("") +
      tag("KEHLANI", 16, 192, 50, SKY, -6) + tag("TSUNAMI MOB", 30, 216, 17, PINK, -3) + tag("GLO UP", 196, 212, 20, GOLD, -4) + tag("LANI", 296, 214, 20, "#fff", -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#56544f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 98, "Telegraph Av") + sign(296, 124, 104, "MacArthur Blvd") +
      '<g class="kh-sp"><circle cx="150" cy="158" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="kh-sp kh-sp2"><circle cx="156" cy="152" r="2" fill="' + SKY + '" opacity=".6"/></g>',
      sky("kh5", "#141c3c", "#d88a7a"));
  }

  window.SCENES = { khstop: khstop, khosa: khosa, khduplex: khduplex, khstage: khstage, khcorner: khcorner };
})();
