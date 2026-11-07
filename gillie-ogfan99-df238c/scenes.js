/* gillie scenes (Regions tab: Philadelphia; North Philly, Erie Ave). CSS classes prefixed gi- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes giflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.gi-flk{animation:giflick 2.4s infinite}.gi-flk2{animation-delay:.8s}' +
    '@keyframes giglow{0%,100%{opacity:.45}50%{opacity:1}}.gi-glow{animation:giglow 2.2s ease-in-out infinite}.gi-g2{animation-delay:-1.1s}' +
    '@keyframes giflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.gi-flag{transform-box:fill-box;transform-origin:0 50%;animation:giflag 1.6s ease-in-out infinite}' +
    '@keyframes gishot{0%{transform:translate(0,0)}45%{transform:translate(70px,-92px)}70%{transform:translate(106px,-60px)}100%{transform:translate(110px,30px)}}.gi-ball{animation:gishot 2.6s ease-in infinite}' +
    '@keyframes gibounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.gi-bnc{animation:gibounce .9s ease-in-out infinite}' +
    '@keyframes giwave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.gi-wv{transform-box:fill-box;transform-origin:50% 100%;animation:giwave .7s ease-in-out infinite}' +
    '@keyframes gispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gi-sp{animation:gispray 1.4s ease-out infinite}.gi-sp2{animation-delay:.45s}' +
    '@keyframes girun{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.gi-run{animation:girun 5s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "gi-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", TEAL = "#2bb3a3", RED = "#e0533d", BSL = "#f58220";

  /* 1. Erie on the Broad Street Line, under N Broad St at Erie Ave (an express stop): cream tile walls, the orange band, the EXPRESS / LOCAL signs, the black station sign with the BSL bullet, the orange-striped train sliding in */
  function gistation() {
    const tr = '<g class="anim-train"><rect x="22" y="104" width="330" height="76" rx="8" fill="#cfd3d8" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="116" width="30" height="26" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="6" fill="' + BSL + '"/><rect x="22" y="160" width="330" height="2" fill="' + BSL + '"/>' +
      '<rect x="332" y="108" width="20" height="70" rx="4" fill="#a3a9b0"/><rect x="334" y="112" width="16" height="12" rx="2" fill="#111"/><text x="342" y="121" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">EXP</text><circle cx="344" cy="168" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#efe6cf"/>' + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 16v68" stroke="#ddd0b2" stroke-width="1"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (24 + i * 10) + 'h400" stroke="#ddd0b2" stroke-width="1"/>').join("") +
      '<rect x="0" y="0" width="400" height="16" fill="#2e2e30"/>' + [50, 170, 290].map((x, i) => '<rect class="gi-flk' + (i === 1 ? " gi-flk2" : "") + '" x="' + x + '" y="6" width="60" height="5" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="84" width="400" height="10" fill="' + BSL + '"/><rect x="0" y="94" width="400" height="96" fill="#26262a"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#8a8680"/>' +
      [30, 370].map(x => '<rect x="' + (x - 7) + '" y="16" width="14" height="174" fill="#3d4a56"/>').join("") +
      '<rect x="88" y="22" width="224" height="38" rx="3" fill="#111"/><text x="104" y="48" ' + font + ' font-size="20" fill="#fff">Erie</text>' + badge(250, 41, "BSL", BSL) +
      '<rect x="160" y="30" width="72" height="18" rx="2" fill="#2a2a2c"/><text x="196" y="43" text-anchor="middle" ' + font + ' font-size="10" fill="' + BSL + '">EXPRESS</text>' +
      '<rect x="44" y="204" width="80" height="16" rx="2" fill="#111"/><text x="84" y="216" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ERIE AVE EXIT</text>' +
      '<rect x="160" y="226" width="120" height="6" rx="3" fill="#fff6c2" opacity=".45" class="gi-flk"/>',
      "");
  }

  /* 2. Benjamin Franklin High School at Broad and Spring Garden, where he graduated: the long 1950s modernist building, buff brick with long ribbon windows, the tall entrance block, the flag out front, a kid bouncing a ball on the sidewalk */
  function gifranklin() {
    const win = (y) => Array.from({ length: 13 }, (_, i) => '<rect x="' + (34 + i * 26) + '" y="' + y + '" width="20" height="14" fill="' + ((i + y) % 5 === 0 ? "#ffd98a" : "#3a4a5a") + '"' + ((i + y) % 5 === 0 ? ' class="gi-glow"' : "") + '/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#gi2)"/>' +
      '<rect x="20" y="70" width="360" height="110" fill="#d9c7a0" stroke="#a8946a" stroke-width="2"/>' +
      '<rect x="20" y="70" width="360" height="8" fill="#c2ae84"/>' + win(88) + win(114) + win(140) +
      '<path d="M20 108h360M20 134h360" stroke="#c2ae84" stroke-width="3"/>' +
      '<rect x="150" y="40" width="100" height="140" fill="#e4d5b2" stroke="#a8946a" stroke-width="2"/><rect x="150" y="40" width="100" height="10" fill="#c2ae84"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (162 + i * 22) + '" y="58" width="14" height="70" fill="#3a4a5a"/>').join("") +
      '<rect x="168" y="146" width="64" height="34" fill="#2a3442"/><path d="M200 146v34" stroke="#9aa1a8" stroke-width="2"/>' +
      '<text x="200" y="140" text-anchor="middle" ' + font + ' font-size="8" fill="#5a4a2a" letter-spacing="1">BENJAMIN FRANKLIN HIGH</text>' +
      '<rect x="0" y="180" width="400" height="18" fill="#bdb8ae"/><rect x="0" y="198" width="400" height="62" fill="#4e4e54"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<path d="M84 180v-96" stroke="#9aa1a8" stroke-width="3"/><g class="gi-flag"><rect x="86" y="84" width="34" height="20" fill="#b22234"/>' + Array.from({ length: 3 }, (_, i) => '<rect x="86" y="' + (87 + i * 6) + '" width="34" height="3" fill="#fff"/>').join("") + '<rect x="86" y="84" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<g transform="translate(320 0)"><circle class="gi-bnc" cx="0" cy="180" r="8" fill="#e0702a" stroke="#6a2a0a" stroke-width="1.5"/></g>' +
      '<rect x="306" y="190" width="28" height="4" rx="2" fill="#000" opacity=".25"/>',
      sky("gi2", "#8ec2ea", "#f2e2c8"));
  }

  /* 3. Cabrini College in Radnor, where he played four years of ball and ran track: the gym floor, the hoop and backboard, the ball arcing in, the bleachers, a runner flying around the track lane */
  function gicabrini() {
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="110" fill="#3a3a44"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (20 + i * 14) + '" width="400" height="10" fill="' + (i % 2 ? "#4a4a56" : "#42424c") + '"/>').join("") +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + (12 + i * 22) + '" cy="' + (34 + (i % 3) * 28) + '" r="5" fill="#1a1a20"/>').join("") +
      '<rect x="0" y="110" width="400" height="150" fill="#d8a868"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 110v150" stroke="#c9985a" stroke-width="1"/>').join("") +
      '<path d="M0 150h400" stroke="#2a4a8a" stroke-width="3"/><ellipse cx="320" cy="200" rx="70" ry="26" fill="none" stroke="#2a4a8a" stroke-width="3"/>' +
      '<rect x="0" y="228" width="400" height="18" fill="#b0563a"/><path d="M0 237h400" stroke="#fff" stroke-width="1.5" stroke-dasharray="14 8"/>' +
      '<g class="gi-run"><circle cx="0" cy="222" r="5" fill="#1a1a20"/><path d="M0 227l-4 12M0 227l5 11M0 229l-7 -3M0 229l7 -5" stroke="#1a1a20" stroke-width="3" stroke-linecap="round"/></g>' +
      '<path d="M372 60v118" stroke="#6b7178" stroke-width="6"/><path d="M372 78h-30" stroke="#6b7178" stroke-width="5"/>' +
      '<rect x="306" y="46" width="44" height="34" fill="#f4f4f2" stroke="#3a3e46" stroke-width="2"/><rect x="318" y="58" width="20" height="14" fill="none" stroke="' + RED + '" stroke-width="2"/>' +
      '<ellipse cx="324" cy="84" rx="16" ry="4" fill="none" stroke="' + RED + '" stroke-width="3"/><path d="M310 84l6 16M324 88v14M338 84l-6 16" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="gi-ball"><circle cx="210" cy="176" r="9" fill="#e0702a" stroke="#6a2a0a" stroke-width="1.5"/><path d="M201 176h18M210 167v18" stroke="#6a2a0a" stroke-width="1"/></g>' +
      '<rect x="16" y="14" width="150" height="26" rx="3" fill="#111"/><text x="91" y="32" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="1">HOME 4 YEARS</text>',
      "");
  }

  /* 4. The podcast set where he and his cousin talk game every week: two mics on boom arms over the table, the ON AIR light, the gold money-stack wall, the camera's red light blinking, the levels bouncing */
  function gipodcast() {
    const mic = (x, flip) => '<path d="M' + x + ' 30l' + (flip ? -30 : 30) + ' 50l' + (flip ? 10 : -10) + ' 40" stroke="#2a2a2e" stroke-width="5" fill="none"/><rect x="' + (x + (flip ? -30 : 20) - 8) + '" y="118" width="20" height="34" rx="10" fill="#c9ced6" stroke="#555" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#14161c"/>' +
      Array.from({ length: 5 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<rect x="' + (10 + c * 38) + '" y="' + (16 + r * 24) + '" width="32" height="18" rx="2" fill="' + ((r + c) % 3 ? "#3a6a3a" : "#4a7a42") + '" stroke="' + GOLD + '" stroke-width="1"/>').join("")).join("") +
      '<rect x="0" y="136" width="400" height="10" fill="#0e1014"/>' +
      '<rect x="140" y="24" width="120" height="30" rx="4" fill="' + RED + '" class="gi-glow"/><text x="200" y="45" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="3">ON AIR</text>' +
      mic(70, false) + mic(330, true) +
      '<rect x="30" y="160" width="340" height="18" rx="4" fill="#3a2a22"/><rect x="50" y="178" width="300" height="82" fill="#2a1e18"/>' +
      '<rect x="160" y="146" width="80" height="16" rx="2" fill="#1a1a1c"/>' + Array.from({ length: 12 }, (_, i) => '<rect class="gi-wv" style="animation-delay:-' + ((i * 0.13) % 0.7).toFixed(2) + 's" x="' + (164 + i * 6) + '" y="148" width="4" height="12" fill="' + (i > 8 ? RED : TEAL) + '"/>').join("") +
      '<rect x="66" y="152" width="22" height="10" rx="2" fill="' + GOLD + '"/><rect x="314" y="152" width="22" height="10" rx="2" fill="' + GOLD + '"/>' +
      '<path d="M200 260l-20 -50h40z" fill="#22252c"/><rect x="180" y="196" width="40" height="22" rx="3" fill="#2a2d34"/><circle cx="200" cy="207" r="7" fill="#5a7a9a"/><circle class="gi-glow" cx="214" cy="200" r="2.5" fill="' + RED + '"/>',
      "");
  }

  /* 5. N 3rd St and Callowhill St: green signs, GILLIE tagged big on the brick wall of the Batcave, FIGGA GANG and KING OF PHILLY under it, Christ Church's white steeple rising over Old City behind */
  function gicorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gi5)"/>' + stars(14) +
      /* Christ Church steeple: brick tower, white stages, octagon, spire */
      '<rect x="168" y="78" width="40" height="60" fill="#8a4a34"/><rect x="170" y="62" width="36" height="16" fill="#f4f1ea"/><rect x="174" y="46" width="28" height="16" fill="#f4f1ea"/>' +
      '<path d="M178 46l10 -12l10 12z" fill="#f4f1ea"/><rect x="183" y="20" width="10" height="14" fill="#f4f1ea"/><path d="M188 2l4 18h-8z" fill="#f4f1ea"/><circle cx="188" cy="54" r="4" fill="#2a3442"/><path class="gi-glow" d="M182 120v-12q6 -8 12 0v12z" fill="#ffd98a"/>' +
      '<g fill="#22263a"><rect x="0" y="92" width="80" height="46"/><rect x="88" y="104" width="64" height="34"/><rect x="222" y="98" width="60" height="40"/><rect x="290" y="88" width="110" height="50"/></g>' +
      Array.from({ length: 6 }, (_, i) => '<rect class="gi-glow' + (i % 2 ? " gi-g2" : "") + '" x="' + (12 + i * 68) + '" y="108" width="8" height="8" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="0" y="132" width="400" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("GILLIE", 20, 196, 54, GOLD, -6) + tag("FIGGA GANG", 206, 176, 24, TEAL, -4) + tag("KING OF PHILLY", 24, 218, 17, "#fff", -3) + tag("GILLADELPHIA", 184, 212, 16, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="352" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(312, 96, 84, "N 3rd St") + sign(300, 122, 98, "Callowhill St") +
      '<g class="gi-sp"><circle cx="146" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gi-sp gi-sp2"><circle cx="152" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("gi5", "#121a36", "#c86a4a"));
  }

  window.SCENES = { gistation: gistation, gifranklin: gifranklin, gicabrini: gicabrini, gipodcast: gipodcast, gicorner: gicorner };
})();
