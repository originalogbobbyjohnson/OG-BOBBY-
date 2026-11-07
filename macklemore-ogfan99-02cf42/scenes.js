/* macklemore scenes (Regions tab: The Northwest; Capitol Hill, Seattle). CSS classes and ids prefixed mk- (the page's own anim-train slides the streetcar in).
   1 Broadway & Denny on the First Hill Streetcar: the curbside stop at the north end of the line by Cal Anderson Park, the hot-pink Capitol Hill car sliding in under the wire.
   2 A Capitol Hill thrift shop ("Thrift Shop", shot at the old Value Village on 11th Ave; no store name drawn): racks swinging, a fur coat, a leopard mink, plaid, a broken keyboard, price tags.
   3 Garfield High School in the Central District, where he started his first group: red brick, cream trim, the arched entry, a purple and gold banner, rain.
   4 The Seahawks' stadium (Lumen Field) where he performed at the 2014 NFC title game: the two arched roof trusses, the crowd flashing, the 12 flag going up.
   5 Broadway E and E John St on Capitol Hill: green signs, MACKLEMORE tagged, the old brick water tower in Volunteer Park up the hill behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mkrain{from{transform:translateY(-30px)}to{transform:translateY(30px)}}.mk-rain{animation:mkrain .7s linear infinite}' +
    '@keyframes mkflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.mk-flk{animation:mkflick 2.4s infinite}.mk-flk2{animation-delay:.8s}' +
    '@keyframes mkswing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.mk-sw{transform-box:fill-box;transform-origin:50% 0;animation:mkswing 1.8s ease-in-out infinite}.mk-sw2{animation-delay:-.9s}' +
    '@keyframes mkwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.mk-wv{transform-box:fill-box;transform-origin:0 50%;animation:mkwave 1.6s ease-in-out infinite}' +
    '@keyframes mkrise{0%{transform:translateY(40px)}60%,100%{transform:translateY(0)}}.mk-rise{animation:mkrise 4s ease-out infinite}' +
    '@keyframes mkblink{0%,100%{opacity:.2}50%{opacity:1}}.mk-bl{animation:mkblink 1.1s ease-in-out infinite}.mk-bl2{animation-delay:-.4s}.mk-bl3{animation-delay:-.8s}' +
    '@keyframes mkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mk-sp{animation:mkspray 1.4s ease-out infinite}.mk-sp2{animation-delay:.45s}' +
    '@keyframes mkspark{0%,80%,100%{opacity:0}85%{opacity:1}}.mk-spk{animation:mkspark 2s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const rain = (n, op) => '<g class="mk-rain" opacity="' + (op || .5) + '">' + Array.from({ length: n }, (_, i) => { const x = (i * 53) % 400, y = (i * 37) % 260; return '<path d="M' + x + ' ' + y + 'l-3 10" stroke="#cfe0f0" stroke-width="1.2"/>'; }).join("") + '</g>';
  const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + r + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (c || "#2f5a3a") + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + (r * .7) + '" fill="' + (c || "#2f5a3a") + '"/>';
  const PINK = "#e8338a", GREEN = "#69be28", GOLD = "#f2c14e", NAVY = "#0b2a4a";

  /* 1. Broadway & Denny: curbside streetcar stop, hot-pink car under the overhead wire, Cal Anderson trees */
  function mkstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="98" width="30" height="26" rx="3" fill="#1f2a33"/>').join("");
    const car = '<g class="anim-train"><path d="M30 92h300q24 0 30 20v32H30z" fill="' + PINK + '" stroke="#7a1a48" stroke-width="2"/><rect x="30" y="86" width="316" height="8" rx="3" fill="#f2f2f2"/>' + wins +
      '<rect x="30" y="130" width="330" height="6" fill="#f2f2f2"/><path d="M332 96q22 2 26 20h-26z" fill="#1f2a33"/>' +
      '<path d="M180 86l-16 -22h32z" fill="none" stroke="#3a3a3a" stroke-width="2.5"/><g class="mk-spk"><circle cx="180" cy="64" r="4" fill="#bfe6ff"/></g>' +
      '<rect x="104" y="100" width="4" height="40" fill="#7a1a48"/><rect x="244" y="100" width="4" height="40" fill="#7a1a48"/><circle cx="352" cy="138" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mks1)"/>' +
      tree(30, 70, 26, "#3a6a42") + tree(90, 60, 30, "#2f5a3a") + tree(320, 64, 30, "#3a6a42") + tree(378, 72, 24, "#2f5a3a") +
      '<path d="M0 64h400" stroke="#2a2a2a" stroke-width="1.5"/>' +
      car +
      '<rect x="0" y="144" width="400" height="10" fill="#9aa0a6"/><rect x="0" y="154" width="400" height="16" fill="#c9c6c0"/><rect x="0" y="152" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#3a3d42"/><path d="M0 216h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<path d="M0 182h400M0 188h400" stroke="#8a8f96" stroke-width="2"/>' +
      /* stop sign board */
      '<rect x="270" y="176" width="4" height="64" fill="#5a5a5a"/><rect x="226" y="176" width="92" height="34" rx="3" fill="#111"/>' +
      '<text x="272" y="191" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Broadway</text><text x="272" y="204" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">&amp; Denny</text>' +
      '<rect x="34" y="184" width="168" height="30" rx="3" fill="#111"/><text x="44" y="204" ' + font + ' font-size="14" fill="#fff">STREETCAR</text>' + badge(140, 199, "FH", PINK) +
      rain(30, .45) +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#f2f2f2">BROADWAY &amp; DENNY · CAPITOL HILL</text>',
      sky("mks1", "#5a6a7a", "#a8b4c0"));
  }

  /* 2. The thrift shop: racks, a fur coat, a leopard mink, plaid, a broken keyboard, swinging price tags */
  function mkthrift() {
    const hanger = (x, c, pat) => '<g class="mk-sw' + (x % 2 ? " mk-sw2" : "") + '" style="transform-origin:' + x + 'px 70px"><path d="M' + x + ' 70v6l-14 8h28l-14 -8" stroke="#8a8a8a" stroke-width="1.5" fill="none"/><path d="M' + (x - 16) + ' 84h32l4 66h-40z" fill="' + c + '"/>' + (pat || "") + '</g>';
    const leo = x => Array.from({ length: 8 }, (_, i) => '<circle cx="' + (x - 10 + (i % 3) * 10) + '" cy="' + (94 + Math.floor(i / 3) * 18) + '" r="3" fill="#3a2414"/>').join("");
    const plaid = x => '<path d="M' + (x - 12) + ' 84v66M' + (x) + ' 84v66M' + (x + 12) + ' 84v66M' + (x - 18) + ' 100h36M' + (x - 18) + ' 120h36M' + (x - 18) + ' 140h36" stroke="#1a2a4a" stroke-width="3" opacity=".6"/>';
    const fur = x => '<path d="M' + (x - 20) + ' 84q-6 30 -2 66h44q4 -36 -2 -66z" fill="#d8c8b0"/><path d="M' + (x - 16) + ' 100q4 4 0 8M' + (x + 8) + ' 96q4 4 0 8M' + (x - 4) + ' 124q4 4 0 8M' + (x + 12) + ' 132q4 4 0 8" stroke="#b8a488" stroke-width="2" fill="none"/>';
    const tagp = (x, y, t) => '<g class="mk-sw mk-sw2" style="transform-origin:' + x + 'px ' + y + 'px"><path d="M' + x + ' ' + y + 'v8" stroke="#555" stroke-width="1"/><rect x="' + (x - 9) + '" y="' + (y + 8) + '" width="18" height="11" rx="2" fill="#f7efe0" stroke="#8a7a5a"/><text x="' + x + '" y="' + (y + 17) + '" text-anchor="middle" ' + font + ' font-size="7" fill="#c94a3a">' + t + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mks2)"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#2a2420"/><g class="mk-flk"><rect x="40" y="36" width="80" height="4" fill="#fff3c4"/></g><g class="mk-flk mk-flk2"><rect x="260" y="36" width="80" height="4" fill="#fff3c4"/></g>' +
      '<text x="200" y="28" text-anchor="middle" ' + font + ' font-size="18" fill="' + GOLD + '" letter-spacing="6">THRIFT</text>' +
      '<rect x="14" y="68" width="372" height="4" fill="#a8a8a8"/>' +
      hanger(40, "#7a4a8a") + '<g>' + hanger(84, "#d8c8b0", fur(84)) + '</g>' + hanger(130, "#d8a85a", leo(130)) + hanger(176, "#c94a3a", plaid(176)) + hanger(222, "#3a6a8a") + hanger(268, "#8a5a3a") + hanger(314, PINK) + hanger(360, "#5a7a3a", plaid(360)) +
      tagp(130, 84, "$2") + tagp(268, 84, "$1") + tagp(360, 84, "$3") +
      /* counter with a broken keyboard */
      '<rect x="0" y="170" width="400" height="90" fill="#6a4a32"/><rect x="0" y="166" width="400" height="8" fill="#8a6442"/>' +
      '<g transform="rotate(-4 120 160)"><rect x="60" y="148" width="120" height="20" rx="2" fill="#2a2a2a"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (64 + i * 8) + '" y="150" width="6" height="14" fill="' + (i === 5 ? "#8a8a8a" : "#f2f2f2") + '"/>').join("") +
      '<path d="M120 148l6 8l-4 4l6 8" stroke="#c94a3a" stroke-width="1.5" fill="none"/></g>' +
      '<path d="M250 166l14 -24h44l14 24z" fill="#3a6a4a"/><rect x="252" y="150" width="68" height="6" fill="#d8c8b0"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#4a3424"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="11" fill="#d8c8b0" letter-spacing="3">CAPITOL HILL</text>',
      sky("mks2", "#3a2e2a", "#5a4a3e"));
  }

  /* 3. Garfield High School: red brick, cream trim, arched entry, purple and gold banner, rain */
  function mkgarfield() {
    const wins = (y) => Array.from({ length: 12 }, (_, i) => i === 5 || i === 6 ? "" : '<rect x="' + (46 + i * 27) + '" y="' + y + '" width="16" height="22" fill="#2b3a4a" stroke="#efe4c8" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks3)"/>' +
      '<rect x="30" y="54" width="340" height="150" fill="#9a3a2a"/>' +
      Array.from({ length: 11 }, (_, r) => '<path d="M30 ' + (64 + r * 13) + 'h340" stroke="#8a2e20" stroke-width="1"/>').join("") +
      '<rect x="24" y="46" width="352" height="10" fill="#efe4c8"/><rect x="30" y="98" width="340" height="5" fill="#efe4c8"/><rect x="30" y="144" width="340" height="5" fill="#efe4c8"/>' +
      wins(66) + wins(112) + wins(158) +
      /* center pavilion */
      '<rect x="168" y="36" width="64" height="168" fill="#a8442e"/><rect x="164" y="30" width="72" height="8" fill="#efe4c8"/>' +
      '<path d="M182 204v-40q18 -24 36 0v40z" fill="#2b3a4a" stroke="#efe4c8" stroke-width="3"/>' +
      '<rect x="176" y="70" width="48" height="16" fill="#efe4c8"/><text x="200" y="82" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2a1a">GARFIELD</text>' +
      [174, 226].map(x => '<rect x="' + (x - 3) + '" y="100" width="6" height="104" fill="#efe4c8"/>').join("") +
      /* banner */
      '<g class="mk-wv"><rect x="62" y="20" width="72" height="24" fill="#4a2a7a"/><rect x="62" y="20" width="72" height="5" fill="' + GOLD + '"/><text x="98" y="39" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">BULLDOGS</text></g><rect x="60" y="14" width="2" height="40" fill="#cfd4da"/>' +
      '<rect x="0" y="204" width="400" height="10" fill="#b8b4ac"/><rect x="0" y="214" width="400" height="46" fill="#3a3d42"/>' +
      '<path d="M140 214h120l10 10h-140z" fill="#a8a49c"/>' +
      rain(34, .5) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f2f2f2">23RD AVE · THE CENTRAL DISTRICT</text>',
      sky("mks3", "#5a6470", "#9aa6b2"));
  }

  /* 4. The stadium: two arched roof trusses, the crowd flashing, the 12 flag going up */
  function mklumen() {
    const crowd = Array.from({ length: 60 }, (_, i) => '<circle class="mk-bl' + (i % 3 === 1 ? " mk-bl2" : i % 3 === 2 ? " mk-bl3" : "") + '" cx="' + (12 + (i % 20) * 19.5) + '" cy="' + (150 + Math.floor(i / 20) * 12) + '" r="3" fill="' + [GREEN, "#f2f2f2", "#2a5a9a"][i % 3] + '"/>').join("");
    const truss = (x0, x1, y) => '<path d="M' + x0 + ' 140Q' + ((x0 + x1) / 2) + ' ' + y + ' ' + x1 + ' 140" stroke="#5a646e" stroke-width="7" fill="none"/><path d="M' + x0 + ' 140Q' + ((x0 + x1) / 2) + ' ' + (y + 18) + ' ' + x1 + ' 140" stroke="#5a646e" stroke-width="3" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const t = (i + 1) / 10, xx = x0 + (x1 - x0) * t, yy = 140 - (140 - y) * 4 * t * (1 - t) / 2 * 2; return '<path d="M' + xx.toFixed(1) + ' ' + (yy).toFixed(1) + 'v' + (9 + 0) + '" stroke="#5a646e" stroke-width="2"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks4)"/>' +
      truss(0, 200, 30) + truss(200, 400, 30) +
      '<path d="M0 140l40 -20h320l40 20z" fill="#3a4450"/>' +
      '<rect x="0" y="140" width="400" height="50" fill="#1a2a3a"/>' + crowd +
      '<rect x="0" y="190" width="400" height="70" fill="#2f7a3a"/><path d="M0 214h400M0 238h400" stroke="#f2f2f2" stroke-width="2" opacity=".7"/>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="#f2f2f2" opacity=".35">SEATTLE</text>' +
      /* the 12 flag rising on its pole */
      '<rect x="318" y="60" width="3" height="130" fill="#cfd4da"/><g class="mk-rise"><g class="mk-wv"><rect x="321" y="62" width="56" height="38" fill="' + NAVY + '"/><rect x="321" y="62" width="56" height="4" fill="' + GREEN + '"/><text x="349" y="92" text-anchor="middle" ' + font + ' font-size="24" fill="#f2f2f2">12</text></g></g>' +
      '<text x="200" y="18" text-anchor="middle" ' + font + ' font-size="10" fill="#f2f2f2">THE 12TH MAN · SODO</text>',
      sky("mks4", "#0b1a2e", "#2a4a6a"));
  }

  /* 5. Broadway E and E John St: green signs, MACKLEMORE tagged, the brick water tower in Volunteer Park behind */
  function mkcorner() {
    const arches = Array.from({ length: 6 }, (_, i) => '<path d="M' + (176 + i * 9) + ' 66v-10q3.5 -5 7 0v10z" fill="#f2d48a" class="mk-flk' + (i % 2 ? " mk-flk2" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mks5)"/>' +
      /* the hill and the tower */
      '<path d="M0 130q120 -60 240 -50t160 40v40H0z" fill="#2f4a36"/>' +
      tree(120, 92, 18, "#2a4430") + tree(300, 96, 18, "#2a4430") +
      '<rect x="172" y="48" width="58" height="80" fill="#8a3a2a"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M172 ' + (76 + r * 9) + 'h58" stroke="#7a2e20" stroke-width="1"/>').join("") +
      '<rect x="168" y="44" width="66" height="6" fill="#b8a07a"/><rect x="168" y="66" width="66" height="4" fill="#b8a07a"/>' + arches +
      '<path d="M170 44l31 -14l31 14z" fill="#3a4a3a"/>' +
      '<g fill="#2a2f3a"><rect x="0" y="110" width="80" height="40"/><rect x="330" y="104" width="70" height="46"/></g>' +
      /* the wall */
      '<rect x="0" y="140" width="290" height="88" fill="#4a5a64"/>' +
      Array.from({ length: 5 }, (_, r) => '<path d="M0 ' + (158 + r * 16) + 'h290" stroke="#3a4a54" stroke-width="1"/>').join("") +
      tag("MACKLEMORE", 10, 206, 34, GREEN, -6) + tag("THE HEIST", 170, 222, 16, GOLD, -4) + tag("POP SOME TAGS", 18, 164, 14, PINK, -4) +
      '<g class="mk-sp"><circle cx="270" cy="186" r="3" fill="' + GREEN + '"/></g><g class="mk-sp mk-sp2"><circle cx="276" cy="192" r="2.4" fill="' + PINK + '"/></g>' +
      '<rect x="268" y="190" width="10" height="20" rx="2" fill="#d8d8d8"/><rect x="270" y="184" width="6" height="7" fill="#3a3a3a"/>' +
      '<rect x="330" y="96" width="5" height="132" fill="#4a4a4a"/>' + sign(294, 96, 96, "Broadway E") + sign(302, 122, 80, "E John St") +
      '<rect x="0" y="228" width="400" height="32" fill="#3a3d42"/><rect x="0" y="226" width="400" height="4" fill="#cfc8b8"/>' +
      rain(28, .4) +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f2f2f2">BROADWAY E &amp; E JOHN ST · CAPITOL HILL</text>',
      sky("mks5", "#2a3444", "#6a7484"));
  }

  window.SCENES = { mkstation, mkthrift, mkgarfield, mklumen, mkcorner };
})();
