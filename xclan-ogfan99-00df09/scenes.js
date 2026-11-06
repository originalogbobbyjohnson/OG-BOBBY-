/* X-Clan game (NYC map, Brooklyn: Flatbush, where Brother J came up). Group game: Brother J and Professor X.
   1. Cortelyou Rd (Q) down in the Brighton line open cut, 2. Prospect Park South: the Victorian mansions on Albemarle Rd's planted mall,
   3. the Temple of Dendur at the Met (ancient Egypt in New York, "back into time on the banks of Nile"), 4. Ocean Parkway with the pink Caddy cruising
   ("Pink Caddy driving, black boot stomping"), 5. Albemarle Rd and Buckingham Rd, the red-roofed Japanese House behind, their name on the wall.
   400 x 260 SVGs, no logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes xccar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.xc-car{animation:xccar 7s linear infinite}.xc-car2{animation-delay:-3.5s}' +
    '@keyframes xcblink{0%,100%{opacity:.25}50%{opacity:1}}.xc-bl{animation:xcblink 1.8s ease-in-out infinite}.xc-bl2{animation-delay:.6s}.xc-bl3{animation-delay:1.2s}' +
    '@keyframes xcflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.xc-flk{animation:xcflick 2.6s infinite}' +
    '@keyframes xcwave{0%,100%{transform:skewX(0)}50%{transform:skewX(-8deg)}}.xc-flag{transform-box:fill-box;transform-origin:0 50%;animation:xcwave 1.6s ease-in-out infinite}' +
    '@keyframes xcrip{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(14px);opacity:.9}}.xc-rip{animation:xcrip 3s ease-in-out infinite}.xc-rip2{animation-delay:-1.5s}' +
    '@keyframes xcbird{0%{transform:translate(0,0)}100%{transform:translate(460px,-30px)}}.xc-bird{animation:xcbird 9s linear infinite}.xc-bird2{animation-delay:-4.5s}' +
    '@keyframes xcpetal{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,150px) rotate(300deg)}}.xc-pet{transform-box:fill-box;transform-origin:50% 50%;animation:xcpetal 5.5s linear infinite}.xc-pet2{animation-delay:-1.8s}.xc-pet3{animation-delay:-3.6s}' +
    '@keyframes xcbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.xc-bnc{animation:xcbounce .4s ease-in-out infinite}' +
    '@keyframes xcsun{0%,100%{opacity:.18}50%{opacity:.34}}.xc-ray{animation:xcsun 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GREEN = "#2f9e4f", RED = "#d8312c", GOLD = "#f2c14e", CREAM = "#f4ead8", QY = "#fccc0a", PINK = "#f28cb8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const tree = (x, y, r, col) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (r * 2) + '" fill="#4a3426"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>';
  /* the red, black and green flag, waving */
  const flag = (x, y, s) => '<rect x="' + (x - 1) + '" y="' + y + '" width="2" height="' + (40 * s) + '" fill="#ddd"/><g class="xc-flag"><rect x="' + (x + 1) + '" y="' + y + '" width="' + (28 * s) + '" height="' + (6 * s) + '" fill="' + RED + '"/><rect x="' + (x + 1) + '" y="' + (y + 6 * s) + '" width="' + (28 * s) + '" height="' + (6 * s) + '" fill="#111"/><rect x="' + (x + 1) + '" y="' + (y + 12 * s) + '" width="' + (28 * s) + '" height="' + (6 * s) + '" fill="' + GREEN + '"/></g>';
  /* a Cadillac-style long pink sedan with fins (no badge) */
  const caddy = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 18h8l14-12h40l14 12h22l4 -6v14H0z" fill="' + PINK + '" stroke="#a24a72" stroke-width="1.5"/>' +
    '<path d="M26 8h16v10H18zM46 8h14l12 10H46z" fill="#cfe2f5"/><rect x="0" y="20" width="104" height="3" fill="#e9e9e9"/>' +
    '<circle cx="22" cy="26" r="6" fill="#111"/><circle cx="22" cy="26" r="2.5" fill="#ccc"/><circle cx="84" cy="26" r="6" fill="#111"/><circle cx="84" cy="26" r="2.5" fill="#ccc"/>' +
    '<circle cx="102" cy="16" r="2" fill="#fff6c2"/></g>';

  /* 1. Cortelyou Rd: the Brighton line open cut, stone retaining walls, the Cortelyou Rd bridge overhead, the Q sliding in */
  function cortelyou() {
    let stone = "";
    for (let y = 58; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) stone += '<rect x="' + x + '" y="' + y + '" width="26" height="8" rx="1" fill="#8d8478"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#xa)"/>' +
      /* trees and house tops at street level above the cut */
      tree(30, 28, 18, "#4f8f45") + tree(110, 24, 22, "#3f7d3a") + tree(300, 26, 20, "#4f8f45") + tree(370, 30, 16, "#3f7d3a") +
      '<rect x="0" y="50" width="400" height="104" fill="#a1978a"/>' + stone +
      /* the street bridge */
      '<rect x="150" y="40" width="250" height="18" fill="#5d5a55"/><rect x="150" y="36" width="250" height="5" fill="#2f3b33"/>' +
      [170, 200, 230, 260, 290, 320, 350, 380].map(x => '<rect x="' + x + '" y="26" width="3" height="11" fill="#2f3b33"/>').join("") +
      '<g clip-path="url(#xabr)"><g class="xc-car"><rect x="0" y="22" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="9" cy="35" r="3.5" fill="#111"/><circle cx="31" cy="35" r="3.5" fill="#111"/></g></g>' +
      /* station sign */
      '<rect x="40" y="66" width="250" height="30" rx="3" fill="#111"/><rect x="40" y="66" width="250" height="3" fill="#fff"/>' +
      '<text x="56" y="87" ' + font + ' font-size="15" fill="#fff">Cortelyou Rd</text>' + bullet(268, 81, "Q", QY, true) +
      /* the Q train */
      '<g class="anim-train">' +
        '<rect x="10" y="106" width="300" height="50" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="138" width="300" height="5" fill="' + QY + '"/>' +
        '<rect x="290" y="112" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "Q", QY, true) +
        '<circle cx="20" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="96" fill="#6a665f"/>' +
      [60, 200, 340].map((x, i) => '<rect x="' + (x - 3) + '" y="164" width="6" height="40" fill="#2f3b33"/><rect class="xc-flk" style="animation-delay:-' + i * 0.8 + 's" x="' + (x - 14) + '" y="200" width="28" height="4" rx="2" fill="#fff8d6"/>').join("") +
      txt("FLATBUSH · DOWN IN THE CUT", 200, 238, 11, CREAM, 'letter-spacing="3"'),
      sky("xa", "#7fb6e0", "#dfe7ea") + '<clipPath id="xabr"><rect x="150" y="0" width="250" height="40"/></clipPath>');
  }

  /* 2. Prospect Park South: Albemarle Rd's planted mall, the turreted yellow Victorian and the white columned one, petals drifting, the brick gate pier */
  function ppsouth() {
    const pet = [[60, 30], [170, 10], [260, 40], [340, 20], [120, 50]].map((p, i) => '<circle class="xc-pet xc-pet' + (i % 3 + 1) + '" cx="' + p[0] + '" cy="' + p[1] + '" r="2.6" fill="#f7c6d6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#xb)"/>' +
      '<g class="xc-bird"><path d="M-20 40q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="1.5" fill="none"/></g><g class="xc-bird xc-bird2"><path d="M-20 60q4-4 8 0q4-4 8 0" stroke="#333" stroke-width="1.5" fill="none"/></g>' +
      /* yellow Victorian with turret + wraparound porch */
      '<rect x="20" y="80" width="150" height="104" fill="#e9c65a"/><path d="M14 80l81 -38l81 38z" fill="#7a4a3a"/>' +
      '<rect x="128" y="58" width="44" height="126" fill="#e2b94a"/><path d="M124 58l26 -38l26 38z" fill="#5a3a2e"/>' +
      [36, 72, 108].map(x => '<rect x="' + x + '" y="94" width="18" height="26" fill="#3a5a6a"/><rect x="' + x + '" y="94" width="18" height="4" fill="#fff"/>').join("") +
      '<rect x="138" y="76" width="22" height="30" rx="2" fill="#3a5a6a"/>' +
      '<rect x="16" y="140" width="160" height="8" fill="#fff"/>' + [22, 50, 78, 106, 134, 166].map(x => '<rect x="' + x + '" y="148" width="5" height="36" fill="#fff"/>').join("") +
      '<rect x="84" y="152" width="22" height="32" fill="#5a3a2a"/>' +
      /* white colonial with columns */
      '<rect x="220" y="92" width="160" height="92" fill="#f2efe6"/><path d="M212 92l88 -36l88 36z" fill="#3c4a5a"/>' +
      '<path d="M262 92l38 -20l38 20z" fill="#e6e1d4" stroke="#bdb6a4"/>' + [266, 286, 314, 334].map(x => '<rect x="' + x + '" y="92" width="6" height="92" fill="#fff" stroke="#d0cabb"/>').join("") +
      [232, 352].map(x => '<rect x="' + x + '" y="104" width="18" height="26" fill="#3a4a5a"/><rect x="' + x + '" y="146" width="18" height="26" fill="#3a4a5a"/>').join("") +
      '<rect x="290" y="146" width="20" height="38" fill="#2a3a4a"/>' +
      /* brick gate pier */
      '<rect x="186" y="132" width="22" height="56" fill="#8a3b2a"/><rect x="183" y="128" width="28" height="6" fill="#d8ccb2"/><circle cx="197" cy="124" r="5" fill="#d8ccb2"/>' +
      /* the planted mall: grass strip + blossoms */
      '<rect x="0" y="184" width="400" height="14" fill="#9a958c"/><rect x="0" y="198" width="400" height="22" fill="#4b4d52"/>' +
      '<rect x="0" y="220" width="400" height="16" fill="#6aa04a"/>' + [40, 140, 260, 360].map(x => '<circle cx="' + x + '" cy="222" r="14" fill="#f2a7c3"/><rect x="' + (x - 2) + '" y="222" width="4" height="14" fill="#4a3426"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#4b4d52"/>' +
      '<g class="xc-car xc-car2"><rect x="0" y="242" width="44" height="13" rx="4" fill="#2d4a7a"/><circle cx="10" cy="255" r="3.5" fill="#111"/><circle cx="34" cy="255" r="3.5" fill="#111"/></g>' +
      pet + txt("PROSPECT PARK SOUTH", 300, 30, 11, "#2a2620", 'letter-spacing="3"'),
      sky("xb", "#9fd0ef", "#f3ecd8"));
  }

  /* 3. The Temple of Dendur: the sandstone gate and temple on its platform, the reflecting pool, the slanted glass wall with the park outside */
  function dendur() {
    let glass = "";
    for (let x = 0; x < 400; x += 26) glass += '<path d="M' + x + ' 0l' + (-30) + ' 150" stroke="#9fb4c4" stroke-width="1" opacity=".35"/>';
    let carve = "";
    for (let y = 104; y < 168; y += 9) carve += '<path d="M228 ' + y + 'h112" stroke="#b28a5a" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#xc)"/>' +
      /* park trees through the glass */
      tree(40, 70, 26, "#6a9a5a") + tree(120, 60, 30, "#5a8a4a") + tree(380, 64, 28, "#6a9a5a") + glass +
      '<path class="xc-ray" d="M0 0L170 0L60 150H0z" fill="#fff6c2"/>' +
      /* platform */
      '<rect x="20" y="168" width="360" height="16" fill="#d8c8a8"/><rect x="20" y="166" width="360" height="3" fill="#efe2c6"/>' +
      /* the gate */
      '<rect x="64" y="84" width="70" height="84" fill="#d9b27c"/><rect x="88" y="120" width="22" height="48" fill="#6a4a2a"/>' +
      '<rect x="60" y="78" width="78" height="8" fill="#c79a62"/><path d="M60 78q39 -14 78 0" fill="#d9b27c"/>' +
      '<path d="M84 92q15 -8 30 0" stroke="#7a5a32" stroke-width="2" fill="none"/><circle cx="99" cy="92" r="4" fill="#c79a62" stroke="#7a5a32"/>' +
      /* the temple */
      '<path d="M220 168l6 -76h120l6 76z" fill="#e0bc88"/>' + carve +
      '<rect x="218" y="86" width="136" height="8" fill="#c79a62"/>' +
      [244, 276, 308].map(x => '<rect x="' + x + '" y="112" width="12" height="56" fill="#c99a62"/><rect x="' + (x - 3) + '" y="108" width="18" height="6" fill="#b88a52"/>').join("") +
      '<path d="M268 98l18 -6l18 6" stroke="#7a5a32" stroke-width="2" fill="none"/>' +
      /* reflecting pool */
      '<rect x="0" y="184" width="400" height="56" fill="#2f5a6e"/>' +
      '<path class="xc-rip" d="M20 200h60M140 212h80M260 204h70M60 226h90" stroke="#a8d0e0" stroke-width="2" stroke-linecap="round"/>' +
      '<path class="xc-rip xc-rip2" d="M100 196h50M220 222h60M300 230h70" stroke="#d8eef6" stroke-width="1.5" stroke-linecap="round"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#cfc4ae"/>' +
      tag("BANKS OF NILE", 24, 30, 22, GOLD, -3) + txt("TEMPLE OF DENDUR · NEW YORK", 290, 254, 9, "#3a3020", 'letter-spacing="2"'),
      sky("xc", "#c9dbe6", "#efe7d6"));
  }

  /* 4. Ocean Parkway: the tree malls and benches, the bike path, the pink Caddy cruising with the red, black and green flying */
  function oceanpkwy() {
    let trees = "";
    for (let x = 10; x < 400; x += 48) trees += tree(x, 88, 22, x % 96 ? "#3f7d3a" : "#4f8f45");
    let benches = "";
    for (let x = 30; x < 400; x += 96) benches += '<rect x="' + x + '" y="150" width="30" height="5" fill="#6b4a2a"/><rect x="' + (x + 2) + '" y="155" width="3" height="8" fill="#333"/><rect x="' + (x + 25) + '" y="155" width="3" height="8" fill="#333"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#xd)"/>' +
      '<rect x="0" y="100" width="400" height="34" fill="#c9b8a0"/>' + [0, 70, 150, 230, 310].map(x => '<rect x="' + x + '" y="' + (70 + (x % 3) * 6) + '" width="64" height="64" fill="' + (x % 140 ? "#b9a68a" : "#a8927a") + '"/>').join("") +
      trees +
      /* service road, mall, bike path, main road */
      '<rect x="0" y="134" width="400" height="12" fill="#55575c"/>' +
      '<rect x="0" y="146" width="400" height="20" fill="#8a8a82"/>' + benches +
      '<rect x="0" y="166" width="400" height="12" fill="#7a5a4a"/><path d="M0 172h400" stroke="#f2efe6" stroke-width="1" stroke-dasharray="10 8"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#45474c"/>' +
      [0, 50, 100, 150, 200, 250, 300, 350].map(x => '<rect x="' + x + '" y="218" width="26" height="3" fill="#f2efe6"/>').join("") +
      /* the pink caddy with the flag */
      '<g class="xc-car"><g class="xc-bnc">' + caddy(0, 188) + flag(14, 160, 0.9) + '</g></g>' +
      '<g class="xc-car xc-car2"><rect x="0" y="234" width="44" height="13" rx="4" fill="#e8e8e8"/><circle cx="10" cy="247" r="3.5" fill="#111"/><circle cx="34" cy="247" r="3.5" fill="#111"/></g>' +
      tag("PINK CADDY", 230, 48, 26, PINK, -4) +
      '<rect x="12" y="20" width="140" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Ocean Pkwy", 82, 36, 12, "#fff"),
      sky("xd", "#f2a65a", "#f8dcb0"));
  }

  /* 5. Albemarle Rd and Buckingham Rd: the green signs, the wall with X-CLAN, the Japanese House's red pagoda roofs behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#xe)"/>' + stars(14) +
      /* the Japanese House */
      '<rect x="120" y="78" width="150" height="56" fill="#efe2c6"/>' +
      '<path d="M100 82q95 -26 190 0l-12 -10q-83 -20 -166 0z" fill="#b8322a"/><path d="M106 82h178" stroke="#7a1a14" stroke-width="3"/>' +
      '<rect x="156" y="46" width="78" height="28" fill="#efe2c6"/><path d="M140 50q55 -22 110 0l-8 -8q-47 -16 -94 0z" fill="#b8322a"/>' +
      [136, 168, 200, 232].map((x, i) => '<rect class="xc-bl xc-bl' + (i % 3 + 1) + '" x="' + x + '" y="92" width="18" height="20" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="176" y="54" width="14" height="14" fill="#ffd98a" opacity=".8"/><rect x="202" y="54" width="14" height="14" fill="#ffd98a" opacity=".6"/>' +
      txt("THE JAPANESE HOUSE", 195, 30, 8, CREAM, 'letter-spacing="2" opacity=".75"') +
      tree(40, 70, 26, "#1f3a26") + tree(330, 66, 24, "#1f3a26") +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      '<rect x="14" y="140" width="12" height="40" fill="' + RED + '"/><rect x="26" y="140" width="12" height="40" fill="#111"/><rect x="38" y="140" width="12" height="40" fill="' + GREEN + '"/>' +
      tag("X-CLAN", 56, 198, 50, GREEN, -5) + tag("BLACKWATCH", 26, 222, 18, RED, -3) + tag("TO THE EAST", 176, 220, 18, GOLD, -4) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="xc-car"><g transform="scale(.7) translate(0 330)">' + caddy(0, 0) + '</g></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="286" y="66" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Albemarle Rd", 341, 82, 12, "#fff") +
      '<rect x="286" y="92" width="110" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Buckingham Rd", 341, 108, 12, "#fff") +
      '<circle class="xc-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("xe", "#0a0c14", "#1f2a24"));
  }

  window.SCENES = { cortelyou: cortelyou, ppsouth: ppsouth, dendur: dendur, oceanpkwy: oceanpkwy, corner: corner };
})();
