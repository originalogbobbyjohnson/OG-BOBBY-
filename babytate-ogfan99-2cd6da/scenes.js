/* babytate scenes (Regions tab: Atlanta; Decatur, DeKalb County). CSS classes and ids prefixed bt- (the page's own anim-train is kept).
   1 Decatur station on MARTA's Blue line: underground platform below Decatur Square, a silver train sliding in toward Indian Creek.
   2 The Golden Glide skating rink (Wesley Chapel Rd, Decatur side of DeKalb): wood floor, spinning mirror ball, colored lights, skaters gliding.
   3 DeKalb School of the Arts (her high school, vocal then drama): the stage, red curtains, a sweeping spotlight, a mic stand, notes floating.
   4 Decatur Square on a summer concert night: the white bandstand gazebo, string lights, the crowd bobbing, oaks around.
   5 E Ponce de Leon Ave and N McDonough St on Decatur Square: green signs, BABY TATE tagged, the old granite DeKalb courthouse behind, a rainbow Cadillac rolling by.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes btflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.bt-flk{animation:btflick 2.2s infinite}.bt-flk2{animation-delay:.7s}' +
    '@keyframes btspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.bt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:btspin 6s linear infinite}' +
    '@keyframes btsweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.bt-beam{transform-box:fill-box;transform-origin:50% 0%;animation:btsweep 3.4s ease-in-out infinite}.bt-beam2{animation-delay:-1.7s}' +
    '@keyframes btskate{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.bt-sk{animation:btskate 6s linear infinite}.bt-sk2{animation-delay:-2s}.bt-sk3{animation-delay:-4s}' +
    '@keyframes btbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bt-bob{animation:btbob .6s ease-in-out infinite}.bt-bob2{animation-delay:-.3s}' +
    '@keyframes btnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.bt-note{animation:btnote 3s ease-out infinite}.bt-note2{animation-delay:-1s}.bt-note3{animation-delay:-2s}' +
    '@keyframes bttw{0%,100%{opacity:.35}50%{opacity:1}}.bt-tw{animation:bttw 1.6s ease-in-out infinite}.bt-tw2{animation-delay:-.8s}' +
    '@keyframes btcar{from{transform:translateX(440px)}to{transform:translateX(-140px)}}.bt-car{animation:btcar 7s linear infinite}' +
    '@keyframes btspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bt-sp{animation:btspray 1.4s ease-out infinite}.bt-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const BL = "#0075b2", PINK = "#ff4fa3", SUN = "#ffd23f", TEAL = "#38d6c5";
  const RAINBOW = ["#e63946", "#f58b2a", "#ffd23f", "#4cc36a", "#3a8fe0", "#9b5de5"];

  /* 1. Decatur station, MARTA Blue line, underground below the square */
  function btstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 48) + '" y="110" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="100" width="330" height="66" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="24" y="138" width="330" height="6" fill="#f08a24"/><rect x="24" y="146" width="330" height="4" fill="' + BL + '"/>' +
      '<rect x="334" y="104" width="18" height="56" rx="4" fill="#aeb4ba"/><circle cx="344" cy="154" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="104" width="68" height="12" rx="2" fill="#111"/><text x="296" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">INDIAN CREEK</text></g>';
    const tiles = Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (12 + i * 11) + 'h400" stroke="#9a8f80" stroke-width="1"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 22) + ' 0v96" stroke="#9a8f80" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2b2622"/>' +
      '<rect x="0" y="0" width="400" height="96" fill="#bfb3a1"/>' + tiles +
      '<rect x="0" y="0" width="400" height="10" fill="#4a423a"/>' +
      '<g class="bt-flk"><rect x="40" y="10" width="60" height="4" fill="#fff3c4"/></g><g class="bt-flk bt-flk2"><rect x="170" y="10" width="60" height="4" fill="#fff3c4"/></g><g class="bt-flk"><rect x="300" y="10" width="60" height="4" fill="#fff3c4"/></g>' +
      '<rect x="0" y="80" width="400" height="16" fill="#14110f"/>' +
      train +
      '<rect x="0" y="166" width="400" height="8" fill="#f2c200"/><rect x="0" y="174" width="400" height="86" fill="#8f877c"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 174l-20 86" stroke="#7e766b" stroke-width="1"/>').join("") +
      '<rect x="74" y="190" width="252" height="40" rx="3" fill="#111"/><text x="90" y="216" ' + font + ' font-size="19" fill="#fff">Decatur</text>' + badge(186, 210, "BLUE", BL) +
      '<text x="250" y="206" ' + font + ' font-size="8" fill="#cfd6dc">DOWNTOWN</text><text x="250" y="218" ' + font + ' font-size="8" fill="#cfd6dc">DECATUR SQ</text>',
      "");
  }

  /* 2. Golden Glide skating rink */
  function btrink() {
    const lights = RAINBOW.map((c, i) => '<circle class="bt-tw' + (i % 2 ? " bt-tw2" : "") + '" cx="' + (30 + i * 68) + '" cy="40" r="5" fill="' + c + '"/>').join("");
    const skater = (cls, y, c) => '<g class="bt-sk ' + cls + '"><rect x="0" y="' + y + '" width="12" height="22" rx="5" fill="' + c + '"/><circle cx="6" cy="' + (y - 7) + '" r="6" fill="#5a3a2a"/>' +
      '<rect x="1" y="' + (y + 22) + '" width="4" height="12" fill="#2a2a2a"/><rect x="7" y="' + (y + 22) + '" width="4" height="12" fill="#2a2a2a"/>' +
      '<rect x="-2" y="' + (y + 33) + '" width="8" height="4" rx="1" fill="#fff"/><rect x="6" y="' + (y + 33) + '" width="8" height="4" rx="1" fill="#fff"/>' +
      '<circle cx="0" cy="' + (y + 39) + '" r="1.8" fill="' + SUN + '"/><circle cx="5" cy="' + (y + 39) + '" r="1.8" fill="' + SUN + '"/><circle cx="8" cy="' + (y + 39) + '" r="1.8" fill="' + SUN + '"/><circle cx="13" cy="' + (y + 39) + '" r="1.8" fill="' + SUN + '"/></g>';
    const facets = Array.from({ length: 5 }, (_, i) => '<path d="M' + (186 + i * 7) + ' 52v40" stroke="#8a8f99" stroke-width="1"/>').join("") + Array.from({ length: 5 }, (_, i) => '<path d="M180 ' + (58 + i * 7) + 'h40" stroke="#8a8f99" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bts2)"/>' +
      '<path d="M0 30h400" stroke="#3a2a55" stroke-width="2"/>' + lights +
      '<g class="bt-beam"><path d="M200 74l-110 120h40z" fill="' + PINK + '" opacity=".22"/></g><g class="bt-beam bt-beam2"><path d="M200 74l110 120h-40z" fill="' + TEAL + '" opacity=".22"/></g>' +
      '<path d="M200 0v52" stroke="#777" stroke-width="2"/><g class="bt-spin"><circle cx="200" cy="72" r="20" fill="#cdd3dc"/>' + facets + '</g><circle cx="200" cy="72" r="20" fill="none" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#b5793e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (156 + i * 11) + 'h400" stroke="#9a6431" stroke-width="1.2"/>').join("") +
      '<rect x="0" y="140" width="400" height="12" fill="#2a1a3a"/><rect x="0" y="138" width="400" height="3" fill="' + SUN + '"/>' +
      skater("", 166, PINK) + skater("bt-sk2", 176, TEAL) + skater("bt-sk3", 170, SUN) +
      '<rect x="120" y="96" width="160" height="30" rx="4" fill="#1a1030" stroke="' + SUN + '" stroke-width="2"/><text x="200" y="117" text-anchor="middle" ' + font + ' font-size="16" fill="' + SUN + '">GOLDEN GLIDE</text>' +
      label(132, 136, "SKATE NIGHT, DECATUR"),
      sky("bts2", "#120a24", "#3b1a4f"));
  }

  /* 3. DeKalb School of the Arts stage */
  function btdsa() {
    const notes = ['<g class="bt-note"><text x="150" y="150" font-size="22" fill="' + SUN + '">&#9834;</text></g>', '<g class="bt-note bt-note2"><text x="240" y="140" font-size="20" fill="' + PINK + '">&#9835;</text></g>', '<g class="bt-note bt-note3"><text x="200" y="160" font-size="18" fill="' + TEAL + '">&#9834;</text></g>'].join("");
    const folds = (x0, n) => Array.from({ length: n }, (_, i) => '<path d="M' + (x0 + i * 14) + ' 20v170" stroke="#7a0f1e" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#120a10"/>' +
      '<rect x="0" y="0" width="400" height="24" fill="#5e0b18"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 24q10 10 20 0" fill="#5e0b18"/>').join("") +
      '<rect x="0" y="20" width="96" height="170" fill="#a3172b"/>' + folds(8, 6) + '<rect x="304" y="20" width="96" height="170" fill="#a3172b"/>' + folds(312, 6) +
      '<g class="bt-beam"><path d="M200 0l-50 190h100z" fill="#fff6d0" opacity=".2"/></g>' +
      '<ellipse cx="200" cy="190" rx="70" ry="12" fill="#fff6d0" opacity=".3"/>' +
      '<path d="M200 120v68" stroke="#222" stroke-width="3"/><path d="M186 190h28" stroke="#222" stroke-width="4"/><rect x="194" y="108" width="12" height="16" rx="6" fill="#333"/><rect x="196" y="110" width="8" height="10" rx="4" fill="#888"/>' +
      notes +
      '<rect x="0" y="190" width="400" height="20" fill="#5a3a22"/><rect x="0" y="190" width="400" height="3" fill="#8a5a32"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#1a1216"/>' + Array.from({ length: 14 }, (_, i) => '<circle class="bt-bob' + (i % 2 ? " bt-bob2" : "") + '" cx="' + (14 + i * 29) + '" cy="' + (226 + (i % 3) * 3) + '" r="9" fill="#2c2228"/>').join("") +
      label(122, 156, "DEKALB SCHOOL OF THE ARTS"),
      "");
  }

  /* 4. Decatur Square bandstand on a summer concert night */
  function btsquare() {
    const bulbs = Array.from({ length: 18 }, (_, i) => { const x = 10 + i * 22, y = 40 + Math.sin(i / 17 * Math.PI) * 18; return '<circle class="bt-tw' + (i % 2 ? " bt-tw2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="2.6" fill="#ffe9a8"/>'; }).join("");
    const crowd = Array.from({ length: 16 }, (_, i) => '<g class="bt-bob' + (i % 2 ? " bt-bob2" : "") + '"><circle cx="' + (12 + i * 25) + '" cy="' + (214 + (i % 3) * 4) + '" r="9" fill="#241c2c"/><rect x="' + (3 + i * 25) + '" y="' + (222 + (i % 3) * 4) + '" width="18" height="30" rx="6" fill="' + ["#3a2a4a", "#2a3a4a", "#4a2a3a"][i % 3] + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bts4)"/>' +
      '<g fill="#1f3a26"><circle cx="30" cy="110" r="44"/><circle cx="90" cy="96" r="36"/><circle cx="320" cy="98" r="38"/><circle cx="380" cy="112" r="40"/></g>' +
      '<path d="M0 40q200 40 400 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      /* white octagonal bandstand */
      '<path d="M130 92l70 -40l70 40z" fill="#f2efe6" stroke="#9a968c" stroke-width="2"/><rect x="194" y="40" width="12" height="14" fill="#f2efe6"/><path d="M190 40l10 -10l10 10z" fill="#9a968c"/>' +
      '<rect x="126" y="92" width="148" height="8" fill="#e4e0d4"/>' + [134, 170, 200, 230, 266].map(x => '<rect x="' + (x - 3) + '" y="100" width="6" height="56" fill="#f2efe6"/>').join("") +
      '<rect x="120" y="156" width="160" height="16" fill="#e4e0d4" stroke="#9a968c" stroke-width="1"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (126 + i * 15) + ' 136v20" stroke="#f2efe6" stroke-width="2"/>').join("") + '<path d="M126 136h148" stroke="#f2efe6" stroke-width="3"/>' +
      '<rect x="160" y="118" width="12" height="18" rx="3" fill="' + PINK + '"/><rect x="226" y="118" width="12" height="18" rx="3" fill="' + TEAL + '"/>' +
      '<g class="bt-note"><text x="186" y="120" font-size="18" fill="' + SUN + '">&#9835;</text></g>' +
      '<rect x="0" y="172" width="400" height="88" fill="#3c4a30"/>' + crowd +
      label(140, 120, "DECATUR SQUARE"),
      sky("bts4", "#1a1640", "#d0705a"));
  }

  /* 5. E Ponce de Leon Ave and N McDonough St, the old granite courthouse behind */
  function btcorner() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (142 + i * 22) + '" y="62" width="8" height="58" fill="#d8d6d0"/>').join("");
    const car = '<g class="bt-car">' + RAINBOW.map((c, i) => '<rect x="0" y="' + (230 + i * 3) + '" width="92" height="3" fill="' + c + '"/>').join("") +
      '<path d="M18 230l10 -12h34l12 12z" fill="#ff8fc8"/><rect x="30" y="220" width="14" height="9" fill="#bfe6fb"/><rect x="48" y="220" width="12" height="9" fill="#bfe6fb"/>' +
      '<circle cx="20" cy="250" r="6" fill="#111"/><circle cx="72" cy="250" r="6" fill="#111"/><circle cx="20" cy="250" r="2.5" fill="#ccc"/><circle cx="72" cy="250" r="2.5" fill="#ccc"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bts5)"/>' +
      /* old DeKalb courthouse: gray granite, portico of columns, pediment, small cupola */
      '<rect x="110" y="56" width="180" height="70" fill="#a9a6a0"/><path d="M132 56l68 -26l68 26z" fill="#bdbab3" stroke="#8a877f" stroke-width="2"/><rect x="132" y="56" width="136" height="6" fill="#bdbab3"/>' + cols +
      '<rect x="190" y="12" width="20" height="20" fill="#bdbab3"/><path d="M186 12l14 -10l14 10z" fill="#7d8a86"/>' +
      '<g fill="#2f4a33"><circle cx="70" cy="100" r="30"/><circle cx="340" cy="96" r="32"/></g>' +
      '<rect x="0" y="122" width="400" height="102" fill="#7a4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#653b2e" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#653b2e" stroke-width="1"/>').join("")).join("") +
      tag("BABY TATE", 16, 192, 38, PINK, -6) + tag("YBT", 36, 150, 22, SUN, -4) + tag("I AM", 196, 212, 20, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      car +
      '<rect x="338" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 154, "E Ponce de Leon Ave") + sign(276, 124, 122, "N McDonough St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bt-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bt-sp"><circle cx="236" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="bt-sp bt-sp2"><circle cx="242" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("bts5", "#3a2a66", "#f2a07a"));
  }

  window.SCENES = { btstation: btstation, btrink: btrink, btdsa: btdsa, btsquare: btsquare, btcorner: btcorner };
})();
