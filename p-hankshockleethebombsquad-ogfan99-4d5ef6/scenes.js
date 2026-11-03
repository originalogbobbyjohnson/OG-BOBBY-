/* Hank Shocklee and the Bomb Squad producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const RED = "#ff3b30", YEL = "#ffd23f", BLU = "#3a86ff", LIRRB = "#0039a6";
  const X = '<style>@keyframes wave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.9);opacity:0}}.wv{transform-box:fill-box;transform-origin:50% 50%;animation:wave 1.4s ease-out infinite}.wv2{animation-delay:.7s}' +
    '@keyframes heat{0%,100%{transform:translateY(0);opacity:.35}50%{transform:translateY(-6px);opacity:.7}}.ht{animation:heat 2.2s ease-in-out infinite}.ht2{animation-delay:1.1s}' +
    '@keyframes push{0%,100%{transform:translateX(0)}50%{transform:translateX(18px)}}.pu{animation:push 3s ease-in-out infinite}' +
    '@keyframes siren{0%,49%{fill:#ff3b30}50%,100%{fill:#3a86ff}}.sn{animation:siren .8s steps(1) infinite}' +
    '@keyframes reel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rl{transform-box:fill-box;transform-origin:50% 50%;animation:reel 2.4s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:1}100%{transform:translate(26px,-46px);opacity:0}}.nt{animation:note 2.4s ease-out infinite}</style>';
  const spk = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#161616" stroke="#555"/><circle class="th" cx="' + (x + w / 2) + '" cy="' + (y + h * 0.3) + '" r="' + (w * 0.24) + '" fill="#333" stroke="#888"/><circle class="th" cx="' + (x + w / 2) + '" cy="' + (y + h * 0.7) + '" r="' + (w * 0.32) + '" fill="#333" stroke="#888"/>';

  /* 1. LIRR Hempstead Branch pulling into Hempstead, the end of the line: low platform canopy, the station sign, the train sliding in */
  function station() {
    let win = ""; for (let i = 0; i < 6; i++) win += '<rect x="' + (14 + i * 56) + '" y="118" width="38" height="20" rx="3" fill="#dfe8f2"/>';
    let bld = ""; [[0, 70, 70], [80, 84, 60], [300, 64, 100]].forEach(([x, y, w]) => { bld += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (110 - y) + '" fill="#7a6a5e"/>'; for (let c = x + 6; c < x + w - 6; c += 14) bld += '<rect x="' + c + '" y="' + (y + 8) + '" width="7" height="9" fill="#e8d8a8"/>'; });
    return svg(X +
      '<rect width="400" height="260" fill="url(#h1)"/>' + bld +
      '<g class="anim-train"><rect x="0" y="104" width="350" height="68" rx="6" fill="#c9ccd1" stroke="#6a6e74" stroke-width="2"/>' + win +
      '<rect x="0" y="148" width="350" height="6" fill="' + LIRRB + '"/><rect x="326" y="112" width="18" height="30" rx="2" fill="#2c3036"/><circle cx="340" cy="164" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="172" width="400" height="10" fill="#f2d21c"/><rect x="0" y="182" width="400" height="78" fill="#a9a59c"/>' +
      '<path d="M0 20h400v12H0z" fill="#3c3f44"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="32" width="6" height="150" fill="#3c3f44"/>').join("") +
      '<rect x="104" y="44" width="192" height="30" rx="3" fill="#111"/><text x="168" y="65" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">Hempstead</text>' +
      '<rect x="240" y="50" width="48" height="18" rx="9" fill="' + LIRRB + '"/><text x="264" y="63" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">LIRR</text>' +
      '<text x="200" y="216" text-anchor="middle" ' + font + ' font-size="9" fill="#333" letter-spacing="2">HEMPSTEAD BRANCH - END OF THE LINE</text>',
      sky("h1", "#5a7fb0", "#e8c89a"));
  }

  /* 2. Spectrum City, Hempstead: the Shocklees' mobile DJ crew and studio, the box truck being loaded with the giant speaker stacks */
  function spectrum() {
    return svg(X +
      '<rect width="400" height="260" fill="url(#h2)"/>' + stars(14) +
      brick(40, 70, 230, 130, "#6a4a3a", "#4e3428") +
      '<rect x="58" y="80" width="194" height="28" fill="#111" stroke="' + YEL + '" stroke-width="2"/><text x="155" y="100" text-anchor="middle" ' + font + ' font-size="15" fill="' + YEL + '" letter-spacing="3">SPECTRUM CITY</text>' +
      '<rect x="64" y="122" width="70" height="56" fill="#ffcf7a"/><rect x="150" y="128" width="40" height="72" fill="#3a2a22"/><rect x="200" y="122" width="56" height="56" fill="#ffcf7a"/>' +
      '<g transform="translate(70 140)"><rect class="mt" x="4" y="6" width="6" height="30" fill="' + RED + '"/><rect class="mt mt2" x="14" y="6" width="6" height="30" fill="' + RED + '"/><rect class="mt mt3" x="24" y="6" width="6" height="30" fill="' + RED + '"/><rect class="mt mt4" x="34" y="6" width="6" height="30" fill="' + RED + '"/><rect class="mt mt5" x="44" y="6" width="6" height="30" fill="' + RED + '"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/>' +
      '<rect x="270" y="110" width="120" height="96" fill="#e8e8e8" stroke="#888"/><rect x="276" y="116" width="108" height="84" fill="#222"/>' + spk(282, 122, 30, 72) + spk(318, 122, 30, 72) +
      '<g class="pu">' + spk(220, 150, 26, 50) + '</g>' +
      '<circle cx="296" cy="212" r="10" fill="#111"/><circle cx="370" cy="212" r="10" fill="#111"/>' +
      '<circle class="wv" cx="335" cy="160" r="30" fill="none" stroke="' + YEL + '" stroke-width="2"/><circle class="wv wv2" cx="335" cy="160" r="30" fill="none" stroke="' + YEL + '" stroke-width="2"/>',
      sky("h2", "#141838", "#6a3a4a"));
  }

  /* 3. Greene St. Recording, SoHo: the cast-iron loft where the Bomb Squad stacked the samples, tall windows, the board glowing, a cab rolling over the Belgian blocks */
  function greene() {
    let cols = ""; for (let fl = 0; fl < 4; fl++) for (let i = 0; i < 6; i++) { const x = 46 + i * 52, y = 30 + fl * 44; cols += '<rect x="' + x + '" y="' + y + '" width="36" height="34" fill="' + (fl === 3 && i > 1 && i < 4 ? "#ffcf7a" : "#2a3446") + '"/><rect x="' + (x - 8) + '" y="' + y + '" width="6" height="40" fill="#efe6d2"/>'; }
    let blocks = ""; for (let x = 0; x < 400; x += 18) for (let y = 216; y < 260; y += 10) blocks += '<rect x="' + (x + (y / 10 % 2) * 9) + '" y="' + y + '" width="16" height="8" rx="1" fill="#6a6660"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#h3)"/>' +
      '<rect x="30" y="18" width="340" height="190" fill="#e2d8c2"/><rect x="26" y="12" width="348" height="10" fill="#cfc4aa"/>' + cols +
      '<path d="M120 116h160M120 160h160" stroke="#222" stroke-width="2"/><path d="M120 116v44M280 116v44" stroke="#222" stroke-width="1"/>' +
      '<g transform="translate(166 164)"><circle class="rl" cx="10" cy="12" r="9" fill="none" stroke="#333" stroke-width="3" stroke-dasharray="6 4"/><circle class="rl" cx="58" cy="12" r="9" fill="none" stroke="#333" stroke-width="3" stroke-dasharray="6 4"/></g>' +
      '<rect x="0" y="208" width="400" height="8" fill="#a8a296"/><rect x="0" y="216" width="400" height="44" fill="#4e4a46"/>' + blocks +
      '<g class="car"><rect x="0" y="226" width="62" height="18" rx="4" fill="' + YEL + '"/><path d="M12 226l8-9h24l8 9z" fill="' + YEL + '"/><rect x="26" y="213" width="12" height="5" fill="#222"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="150" y="186" width="100" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="199" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Greene St</text>',
      sky("h3", "#7fa8d0", "#d8e2ea"));
  }

  /* 4. Do the Right Thing, 1989: Stuyvesant Av in Bed-Stuy on the hottest day of the summer, brownstone stoops, the boombox playing Fight the Power, heat rising off the street */
  function stuyvesant() {
    let rows = ""; for (let i = 0; i < 5; i++) { const x = i * 82; rows += '<rect x="' + x + '" y="60" width="80" height="128" fill="' + (i % 2 ? "#7a4a32" : "#8a5a3e") + '"/>' + [0, 1].map(fl => [0, 1, 2].map(c => '<rect x="' + (x + 10 + c * 22) + '" y="' + (74 + fl * 38) + '" width="14" height="24" fill="#2a2a38" stroke="#e8dcc4" stroke-width="1.5"/>').join("")).join("") + '<path d="M' + (x + 52) + ' 188l14-28h10v28z" fill="#6a3a26"/>'; }
    return svg(X +
      '<rect width="400" height="260" fill="url(#h4)"/><circle cx="330" cy="30" r="22" fill="#fff4b0"/><circle class="th" cx="330" cy="30" r="30" fill="#ffd23f" opacity=".3"/>' + rows +
      '<rect x="0" y="54" width="400" height="8" fill="#5a3424"/><rect x="0" y="188" width="400" height="14" fill="#c8bca8"/><rect x="0" y="202" width="400" height="58" fill="#4a4646"/>' +
      '<path class="ht" d="M30 214q10-8 20 0t20 0t20 0" stroke="#ffd9a0" stroke-width="2" fill="none"/><path class="ht ht2" d="M240 222q10-8 20 0t20 0t20 0" stroke="#ffd9a0" stroke-width="2" fill="none"/>' +
      '<g class="th"><rect x="150" y="160" width="90" height="34" rx="4" fill="#1e1e1e" stroke="#bbb" stroke-width="2"/><circle cx="170" cy="177" r="12" fill="#444" stroke="#999"/><circle cx="220" cy="177" r="12" fill="#444" stroke="#999"/><rect x="186" y="166" width="18" height="8" fill="' + RED + '"/><path d="M160 160v-8h70v8" stroke="#bbb" stroke-width="3" fill="none"/></g>' +
      '<text class="nt" x="250" y="160" font-size="16" fill="' + YEL + '">&#9835;</text>' +
      '<rect x="360" y="120" width="4" height="82" fill="#555"/>' + sign(300, 112, 96, "Stuyvesant Av"),
      sky("h4", "#f2a24a", "#fff0b0"));
  }

  /* 5. The corner: Main St & Fulton Av in downtown Hempstead, BOMB SQUAD tag, the Nassau Coliseum's ribbed white bowl behind, siren light spinning */
  function corner() {
    let ribs = ""; for (let x = 104; x <= 296; x += 12) ribs += '<path d="M' + x + ' 70v56" stroke="#c8c8c8" stroke-width="3"/>';
    return svg(X +
      '<rect width="400" height="260" fill="url(#h5)"/>' +
      '<ellipse cx="200" cy="70" rx="110" ry="14" fill="#e8e8e8"/><rect x="90" y="70" width="220" height="56" fill="#f2f2f2"/>' + ribs + '<rect x="90" y="120" width="220" height="8" fill="#9a9a9a"/>' +
      brick(0, 126, 400, 98, "#5a2a2a", "#3e1c1c") +
      tag("BOMB SQUAD", 30, 190, 46, RED, -5) + tag("BRING THE NOISE", 120, 214, 16, YEL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#9a958c"/>' +
      '<rect x="326" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 98, 66, "Main St") + sign(300, 124, 82, "Fulton Av") +
      '<rect x="384" y="110" width="4" height="114" fill="#222"/><circle class="sn" cx="386" cy="106" r="7"/>',
      sky("h5", "#2a3a6a", "#e8a07a"));
  }

  window.SCENES = { station: station, spectrum: spectrum, greene: greene, stuyvesant: stuyvesant, corner: corner };
})();
