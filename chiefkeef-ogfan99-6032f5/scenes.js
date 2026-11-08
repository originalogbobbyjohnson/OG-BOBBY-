/* chiefkeef scenes (Regions tab: Chicago; Parkway Gardens, Washington Park, South Side). CSS classes prefixed ck- (the page's own anim-train is kept).
   1 63rd on the CTA Red Line: the platform down in the middle of the Dan Ryan, expressway traffic both sides, the 63rd St bridge overhead, a silver train sliding in.
   2 Dyett High School on E 51st St in Washington Park, where he went: low brown-brick building with long window bands, a yellow school bus rolling by (his grandma drove one).
   3 Grandma's house on the South Side, where the 2012 verses were cut: front room, couch, mic on a stand, laptop, camcorder light blinking.
   4 Glo Gang, his own label: gold GLO GANG lights over a stage, light beams sweeping, a crowd of faceless silhouettes bouncing.
   5 E 64th St and S Calumet Ave by Parkway Gardens: green signs, CHIEF KEEF tagged on brick, the downtown skyline far up King Drive behind.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ckflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.ck-flk{animation:ckflick 2.4s infinite}' +
    '@keyframes ckcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ck-car{animation:ckcar 5s linear infinite}.ck-car2{animation-delay:-2.5s}' +
    '@keyframes ckcarb{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.ck-carb{animation:ckcarb 4.4s linear infinite}.ck-carb2{animation-delay:-2.2s}' +
    '@keyframes ckcloud{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.ck-cloud{animation:ckcloud 24s linear infinite}.ck-cloud2{animation-delay:-12s}' +
    '@keyframes ckglow{0%,100%{opacity:.35}50%{opacity:1}}.ck-glow{animation:ckglow 2.6s ease-in-out infinite}.ck-glow2{animation-delay:-1.3s}' +
    '@keyframes ckbus{from{transform:translateX(-180px)}to{transform:translateX(520px)}}.ck-bus{animation:ckbus 9s linear infinite}' +
    '@keyframes ckflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.ck-flag{transform-box:fill-box;transform-origin:0 50%;animation:ckflag 1.4s ease-in-out infinite}' +
    '@keyframes ckrec{0%,49%{opacity:1}50%,100%{opacity:.15}}.ck-rec{animation:ckrec 1s step-end infinite}' +
    '@keyframes ckwave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.ck-wv{transform-box:fill-box;transform-origin:50% 50%;animation:ckwave .7s ease-in-out infinite}' +
    '@keyframes ckbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ck-beam{transform-box:fill-box;transform-origin:50% 0;animation:ckbeam 3.2s ease-in-out infinite}.ck-beam2{animation-delay:-1.6s}' +
    '@keyframes ckhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ck-hop{animation:ckhop .55s ease-in-out infinite}.ck-hop2{animation-delay:-.27s}' +
    '@keyframes cksp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(18px,-26px);opacity:0}}.ck-sp{animation:cksp 1.3s ease-out infinite}.ck-sp2{animation-delay:-.6s}' +
    '@keyframes ckl{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.ck-ltrain{animation:ckl 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#c60c30", GOLD = "#f6c544", BLUE = "#58c8ff", BRICK = "#8d4a32";
  const brick = (x, y, w, h, c, m) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (c || BRICK) + '"/>' +
    Array.from({ length: Math.floor(h / 6) }, (_, i) => '<path d="M' + x + ' ' + (y + 6 + i * 6) + 'h' + w + '" stroke="' + (m || "#6e3725") + '" stroke-width=".7"/>').join("");
  /* a silver CTA car with the blue/red belt */
  const lcar = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="5" fill="#cfd4d8" stroke="#7d858d" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 16) / 24) }, (_, i) => '<rect x="' + (x + 10 + i * 24) + '" y="' + (y + 8) + '" width="16" height="16" rx="2" fill="#26323c"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 31) + '" width="' + w + '" height="3" fill="#1d4ea8"/><rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="3" fill="' + RED + '"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="3" fill="#8f979e"/>';
  /* faint downtown skyline far to the north */
  const skyline = (y, c, o) => '<g fill="' + c + '" opacity="' + o + '">' +
    [[120, 34], [134, 52], [146, 40], [156, 70], [168, 46], [180, 58], [192, 38], [204, 64], [216, 44], [228, 50], [240, 30]].map(([x, h]) => '<rect x="' + x + '" y="' + (y - h) + '" width="11" height="' + h + '"/>').join("") +
    '<rect x="160" y="' + (y - 80) + '" width="2" height="10"/><rect x="164" y="' + (y - 80) + '" width="2" height="10"/></g>';

  /* 1. 63rd on the Red Line, in the middle of the Dan Ryan */
  function ckstation() {
    const train = '<g class="anim-train">' + lcar(18, 112, 168) + lcar(190, 112, 168) +
      '<rect x="336" y="116" width="20" height="42" rx="3" fill="#b6bcc2"/><circle cx="346" cy="152" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="100" width="84" height="10" rx="2" fill="#111"/><text x="312" y="108" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">HOWARD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cks1)"/>' +
      '<g class="ck-cloud"><ellipse cx="40" cy="22" rx="30" ry="8" fill="#fff" opacity=".55"/></g>' +
      skyline(64, "#7e8ea3", .55) +
      /* the 63rd St bridge over the expressway */
      '<rect x="0" y="64" width="400" height="18" fill="#a8a59c"/><rect x="0" y="60" width="400" height="5" fill="#d7d3c8"/>' +
      Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10 + 2) + '" y="52" width="2" height="8" fill="#8c8a83"/>').join("") + '<rect x="0" y="51" width="400" height="2" fill="#8c8a83"/>' +
      car("ck-car", 0, 40, GOLD) +
      '<rect x="0" y="82" width="400" height="10" fill="#6d6b66" opacity=".7"/>' +
      /* outbound expressway lanes (top) */
      '<rect x="0" y="92" width="400" height="18" fill="#55565b"/>' + car("ck-carb", 0, 96, "#e6e6e6") + car("ck-carb ck-carb2", 0, 96, "#3a6fb0") +
      '<rect x="0" y="108" width="400" height="4" fill="#c9c6bd"/>' +
      /* island platform with canopy posts */
      '<rect x="0" y="162" width="400" height="10" fill="#c9c4b8"/><rect x="0" y="162" width="400" height="3" fill="#f2d03b"/>' +
      train +
      /* inbound expressway lanes (bottom) */
      '<rect x="0" y="172" width="400" height="6" fill="#bdb9ae"/><rect x="0" y="178" width="400" height="58" fill="#4a4c55"/><path d="M0 206h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      car("ck-car", 0, 192, "#d94b3a") + car("ck-car ck-car2", 0, 216, "#e6e6e6") +
      '<rect x="0" y="236" width="400" height="24" fill="#b7b2a6"/>' +
      '<rect x="120" y="238" width="160" height="20" rx="3" fill="#111"/><text x="140" y="253" ' + font + ' font-size="14" fill="#fff">63rd</text>' + badge(226, 248, "RED", RED) +
      '<rect x="60" y="6" width="280" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="19" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">CTA RED LINE · 63RD ST · IN THE MIDDLE OF THE DAN RYAN</text>',
      sky("cks1", "#9fcbea", "#f6e3c6"));
  }

  /* 2. Dyett High School, E 51st St, Washington Park */
  function ckdyett() {
    const bus = '<g class="ck-bus"><rect x="0" y="206" width="120" height="30" rx="5" fill="#f5b800"/><rect x="0" y="228" width="120" height="3" fill="#111"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (8 + i * 16) + '" y="211" width="12" height="9" fill="#26323c"/>').join("") +
      '<rect x="104" y="211" width="12" height="14" fill="#26323c"/><circle cx="22" cy="237" r="6" fill="#111"/><circle cx="96" cy="237" r="6" fill="#111"/>' +
      '<text x="56" y="228" text-anchor="middle" ' + font + ' font-size="7" fill="#111">SCHOOL BUS</text></g>';
    const win = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="14" fill="#2c3a46"/>' + Array.from({ length: Math.floor(w / 14) }, (_, i) => '<rect x="' + (x + i * 14) + '" y="' + y + '" width="2" height="14" fill="#c9c2b2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cks2)"/>' +
      '<g class="ck-cloud"><ellipse cx="60" cy="30" rx="34" ry="9" fill="#fff" opacity=".6"/></g><g class="ck-cloud ck-cloud2"><ellipse cx="60" cy="50" rx="24" ry="7" fill="#fff" opacity=".45"/></g>' +
      '<g fill="#4f7f3e"><circle cx="18" cy="140" r="30"/><circle cx="388" cy="134" r="32"/></g>' +
      /* long, low modern brick school */
      brick(30, 96, 340, 104, "#7a4a34", "#5f3828") + brick(150, 74, 120, 24, "#7a4a34", "#5f3828") +
      '<rect x="26" y="92" width="348" height="6" fill="#d9d1bf"/><rect x="146" y="70" width="128" height="6" fill="#d9d1bf"/>' +
      win(44, 112, 98) + win(258, 112, 98) + win(44, 150, 98) + win(258, 150, 98) + win(164, 80, 92) +
      '<rect x="170" y="150" width="60" height="50" fill="#2a2f35"/><rect x="198" y="150" width="4" height="50" fill="#8a8f96"/><rect x="162" y="144" width="76" height="6" fill="#d9d1bf"/>' +
      '<rect x="150" y="104" width="100" height="20" rx="2" fill="#f2ede2"/><text x="200" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="#5f3828">DYETT HIGH</text>' +
      /* flag pole */
      '<rect x="356" y="40" width="3" height="160" fill="#c9ccd1"/><g class="ck-flag"><rect x="359" y="42" width="32" height="20" fill="#fff" stroke="#ccc" stroke-width=".5"/><rect x="359" y="45" width="32" height="3" fill="#41b6e6"/><rect x="359" y="56" width="32" height="3" fill="#41b6e6"/>' + [365, 371, 377, 383].map(x => '<circle cx="' + x + '" cy="52" r="1.6" fill="#e4002b"/>').join("") + '</g>' +
      '<rect x="0" y="200" width="400" height="8" fill="#c9c4b8"/><rect x="0" y="208" width="400" height="52" fill="#4a4c55"/><path d="M0 248h400" stroke="#ddd" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      bus +
      '<rect x="88" y="6" width="224" height="18" rx="3" fill="#111" opacity=".75"/><text x="200" y="19" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DYETT HIGH · E 51ST ST · WASHINGTON PARK</text>',
      sky("cks2", "#86b8e0", "#f2dcc0"));
  }

  /* 3. Grandma's house, the front room where the 2012 verses were cut */
  function ckgrandma() {
    return svg(
      '<rect width="400" height="260" fill="#3b2f2a"/>' +
      /* wallpaper stripes */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="10" height="180" fill="#463830"/>').join("") +
      /* window onto a South Side street of two-flats */
      '<rect x="230" y="30" width="140" height="100" fill="url(#cks3)" stroke="#e8dcc6" stroke-width="6"/>' +
      '<g>' + brick(236, 74, 40, 56, "#9a5a3c", "#7a4430") + brick(282, 66, 44, 64, "#b3784e", "#8f5c3a") + brick(330, 78, 40, 52, "#9a5a3c", "#7a4430") + '</g>' +
      '<rect x="244" y="86" width="10" height="12" fill="#ffd98a" class="ck-glow"/><rect x="296" y="80" width="10" height="12" fill="#ffd98a" class="ck-glow ck-glow2"/><rect x="342" y="90" width="10" height="12" fill="#ffd98a" class="ck-glow"/>' +
      '<path d="M300 30v100M230 80h140" stroke="#e8dcc6" stroke-width="4"/>' +
      /* curtains */
      '<path d="M222 24h16v112q-10 -50 -16 0z" fill="#a8473a"/><path d="M362 24h16v112q-8 -50 -16 0z" fill="#a8473a"/><rect x="218" y="20" width="164" height="6" fill="#6e4a2a"/>' +
      /* family photos */
      '<rect x="30" y="34" width="34" height="42" fill="#c9a24a"/><rect x="34" y="38" width="26" height="34" fill="#6b7f8f"/><rect x="74" y="44" width="28" height="34" fill="#c9a24a"/><rect x="78" y="48" width="20" height="26" fill="#8f7a5a"/>' +
      /* couch */
      '<rect x="20" y="150" width="190" height="50" rx="10" fill="#6b3f5a"/><rect x="20" y="130" width="190" height="34" rx="12" fill="#7d4d6b"/><rect x="12" y="140" width="24" height="60" rx="8" fill="#6b3f5a"/><rect x="194" y="140" width="24" height="60" rx="8" fill="#6b3f5a"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5a4030"/><rect x="0" y="200" width="400" height="3" fill="#3a2a20"/><ellipse cx="200" cy="232" rx="150" ry="18" fill="#8a3a32" opacity=".7"/>' +
      /* home recording: laptop on a table, mic on a stand */
      '<rect x="236" y="176" width="120" height="8" fill="#6e4a2a"/><rect x="244" y="184" width="6" height="30" fill="#6e4a2a"/><rect x="342" y="184" width="6" height="30" fill="#6e4a2a"/>' +
      '<rect x="262" y="150" width="54" height="28" rx="2" fill="#2a2f35"/><rect x="266" y="154" width="46" height="20" fill="#1d4ea8"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="ck-wv" style="animation-delay:-' + (i * 0.12) + 's" x="' + (270 + i * 7) + '" y="' + (158 - (i % 3) * 2) + '" width="3" height="' + (8 + (i % 3) * 4) + '" fill="' + GOLD + '"/>').join("") +
      '<rect x="256" y="176" width="66" height="4" fill="#3a3f45"/>' +
      '<path d="M200 214V150" stroke="#8a8f96" stroke-width="4"/><path d="M184 214h32" stroke="#8a8f96" stroke-width="4"/><rect x="190" y="124" width="20" height="30" rx="10" fill="#c9ccd1" stroke="#6e737b" stroke-width="2"/>' +
      /* camcorder on a tripod, red light blinking */
      '<path d="M372 214l-10 -46M372 214l10 -46M372 214v-46" stroke="#2b2b2b" stroke-width="2.5"/><rect x="354" y="150" width="36" height="20" rx="3" fill="#222"/><circle cx="352" cy="160" r="6" fill="#444"/><circle class="ck-rec" cx="384" cy="155" r="3" fill="#ff3b3b"/>' +
      '<rect x="20" y="6" width="290" height="18" rx="3" fill="#111" opacity=".85"/><text x="165" y="19" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">GRANDMA&#39;S HOUSE · SOUTH SIDE · 2012 · HOME RECORDING</text>',
      sky("cks3", "#9fcbea", "#e8d6b8"));
  }

  /* 4. Glo Gang, his own label: the gold sign over the stage */
  function ckglo() {
    const crowd = Array.from({ length: 22 }, (_, i) => {
      const x = 8 + i * 18, y = 214 + (i % 3) * 4;
      return '<g class="ck-hop' + (i % 2 ? " ck-hop2" : "") + '"><circle cx="' + x + '" cy="' + (y - 14) + '" r="8" fill="#0b0805"/><rect x="' + (x - 10) + '" y="' + (y - 6) + '" width="20" height="40" rx="7" fill="#0b0805"/></g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="#0f0a04"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="url(#cks4)"/>' +
      /* light beams */
      '<g opacity=".35"><path class="ck-beam" d="M70 0l-34 200h68z" fill="' + GOLD + '"/><path class="ck-beam ck-beam2" d="M200 0l-34 200h68z" fill="#fff3c4"/><path class="ck-beam" d="M330 0l-34 200h68z" fill="' + GOLD + '"/></g>' +
      /* truss with lamps */
      '<rect x="0" y="12" width="400" height="8" fill="#2b2b2b"/>' + Array.from({ length: 10 }, (_, i) => '<circle class="ck-glow' + (i % 2 ? " ck-glow2" : "") + '" cx="' + (20 + i * 40) + '" cy="24" r="5" fill="#ffe08a"/>').join("") +
      /* the sign: marquee bulbs around gold letters */
      '<rect x="64" y="46" width="272" height="76" rx="8" fill="#1a1208" stroke="' + GOLD + '" stroke-width="4"/>' +
      Array.from({ length: 17 }, (_, i) => '<circle class="ck-glow' + (i % 2 ? " ck-glow2" : "") + '" cx="' + (72 + i * 16) + '" cy="52" r="2.6" fill="#fff3c4"/><circle class="ck-glow' + (i % 2 ? "" : " ck-glow2") + '" cx="' + (72 + i * 16) + '" cy="116" r="2.6" fill="#fff3c4"/>').join("") +
      '<text x="200" y="102" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="44" fill="' + GOLD + '" stroke="#7a5200" stroke-width="1.5" letter-spacing="3">GLO GANG</text>' +
      /* stage */
      '<rect x="0" y="170" width="400" height="20" fill="#2a1d0e"/><rect x="0" y="168" width="400" height="4" fill="' + GOLD + '"/>' +
      '<rect x="30" y="132" width="30" height="38" fill="#1b1b1b"/><circle cx="45" cy="146" r="9" fill="#333"/><circle cx="45" cy="162" r="5" fill="#333"/>' +
      '<rect x="340" y="132" width="30" height="38" fill="#1b1b1b"/><circle cx="355" cy="146" r="9" fill="#333"/><circle cx="355" cy="162" r="5" fill="#333"/>' +
      '<path d="M200 168v-30" stroke="#8a8f96" stroke-width="3"/><rect x="195" y="128" width="10" height="14" rx="5" fill="#c9ccd1"/>' +
      crowd +
      '<rect x="110" y="236" width="180" height="18" rx="3" fill="#111" opacity=".85"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">GLO GANG · HIS OWN LABEL</text>',
      sky("cks4", "#2a1a08", "#5a3a10"));
  }

  /* 5. E 64th St and S Calumet Ave, by Parkway Gardens */
  function ckcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cks5)"/>' +
      skyline(118, "#2c2a4a", .9) +
      Array.from({ length: 6 }, (_, i) => '<rect class="ck-glow' + (i % 2 ? " ck-glow2" : "") + '" x="' + (138 + i * 18) + '" y="' + (84 + (i % 3) * 8) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      '<rect x="0" y="118" width="400" height="106" fill="#8a4c36"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#6e3a28" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#6e3a28" stroke-width="1"/>').join("")).join("") +
      tag("CHIEF KEEF", 12, 186, 44, GOLD, -6) + tag("GLO GANG", 30, 214, 22, "#fff", -3) + tag("SOSA", 186, 216, 26, RED, -4) + tag("ALMIGHTY SO", 262, 200, 13, BLUE, -5) +
      '<g class="ck-sp"><circle cx="262" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ck-sp ck-sp2"><circle cx="268" cy="158" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car("ck-car", 0, 240, "#e6e6e6") + car("ck-car ck-car2", 0, 240, GOLD) +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(282, 108, 110, "E 64th St") + sign(258, 134, 134, "S Calumet Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="ck-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>',
      sky("cks5", "#1e1a3c", "#e0805a"));
  }

  window.SCENES = { ckstation: ckstation, ckdyett: ckdyett, ckgrandma: ckgrandma, ckglo: ckglo, ckcorner: ckcorner };
})();
