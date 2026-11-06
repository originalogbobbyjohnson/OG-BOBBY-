/* UTFO game (NYC map, Brooklyn: East Flatbush, where Utica Av split the 40s and the 50s - Kangol Kid, Doctor Ice, the Educated Rapper, Mix Master Ice).
   The L at E 105 St (at grade, the crossing gate blinking), the grand opening of a chicken spot where Kangol and Doc won their first dance contest,
   the beat for "Roxanne, Roxanne" coming together at Howie Tee's house, Roxanne walking down the block past the two-family houses,
   and Utica Av & Avenue D with Tilden High's tower behind. 400 x 260 SVGs. Classes prefixed ut-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes utcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ut-car{animation:utcar 7s linear infinite}' +
    '@keyframes utblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.ut-bl{animation:utblink 1s steps(1) infinite}.ut-bl2{animation-delay:.5s}' +
    '@keyframes utglow{0%,100%{opacity:.3}50%{opacity:1}}.ut-gl{animation:utglow 1.4s ease-in-out infinite}.ut-gl2{animation-delay:.45s}.ut-gl3{animation-delay:.9s}' +
    '@keyframes utspin{to{transform:rotate(360deg)}}.ut-spin{transform-box:fill-box;transform-origin:50% 50%;animation:utspin 1.3s linear infinite}.ut-spin2{animation-duration:2.2s}' +
    '@keyframes utfloat{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.ut-ht{animation:utfloat 3s ease-out infinite}.ut-ht2{animation-delay:1s}.ut-ht3{animation-delay:2s}' +
    '@keyframes utsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.ut-sway{transform-box:fill-box;transform-origin:50% 100%;animation:utsway 1.8s ease-in-out infinite}.ut-sway2{animation-delay:-.9s}' +
    '@keyframes utwalk{from{transform:translateX(0)}to{transform:translateX(200px)}}.ut-walk{animation:utwalk 9s linear infinite}' +
    '@keyframes utbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ut-bob{animation:utbob .5s ease-in-out infinite}.ut-bob2{animation-delay:.25s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff3d7f", TEAL = "#36d1c4", GOLD = "#ffd23f", CREAM = "#f4ead8", LGRAY = "#a7a9ac";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* the bucket hat, Kangol's signature look */
  const hat = (x, y, col) => '<path d="M' + (x - 14) + ' ' + (y + 8) + 'q14 6 28 0l-4-4q-10 3-20 0z" fill="' + col + '"/><path d="M' + (x - 9) + ' ' + (y + 5) + 'q0-13 9-13q9 0 9 13q-9 3-18 0z" fill="' + col + '"/>';

  /* 1. E 105 St on the Canarsie line, out in the open at grade: the low platform canopy, the black sign with the L, the crossing gate blinking, the L rolling in */
  function e105() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="22" height="18" rx="2" fill="#dfeaf5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ue)"/>' +
      '<circle cx="66" cy="44" r="18" fill="#ffd9a0" opacity=".8"/>' +
      /* low houses behind */
      [[0, 96, 70], [74, 104, 60], [140, 98, 66], [210, 106, 56], [270, 100, 70], [344, 96, 56]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" fill="#8a5a46"/><rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#5a3a2c"/>').join("") +
      /* canopy */
      '<rect x="0" y="60" width="400" height="8" fill="#5f6b5f"/>' + [40, 140, 240, 340].map(x => '<rect x="' + (x - 3) + '" y="68" width="6" height="56" fill="#5f6b5f"/>').join("") +
      '<rect x="90" y="74" width="220" height="28" rx="3" fill="#111"/><rect x="90" y="74" width="220" height="3" fill="#fff"/>' +
      '<text x="104" y="94" ' + font + ' font-size="15" fill="#fff">E 105 St</text>' + bullet(288, 89, "L", LGRAY) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="124" width="300" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="132" width="16" height="22" rx="2" fill="#dfeaf5"/>' + bullet(298, 166, "L", LGRAY) +
        '<rect x="10" y="158" width="280" height="4" fill="#8a8c90"/><circle cx="22" cy="168" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* rails + ballast */
      '<rect x="0" y="176" width="400" height="16" fill="#6e655b"/><rect x="0" y="178" width="400" height="3" fill="#b7b1a8"/><rect x="0" y="186" width="400" height="3" fill="#b7b1a8"/>' +
      /* the crossing */
      '<rect x="356" y="110" width="5" height="90" fill="#ddd"/><path d="M342 112l32 16M342 128l32-16" stroke="#fff" stroke-width="5"/><path d="M342 112l32 16M342 128l32-16" stroke="#111" stroke-width="2" stroke-dasharray="4 4"/>' +
      '<rect x="344" y="138" width="30" height="12" rx="3" fill="#222"/><circle class="ut-bl" cx="351" cy="144" r="4.5" fill="#ff3b30"/><circle class="ut-bl ut-bl2" cx="367" cy="144" r="4.5" fill="#ff3b30"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#8a8580"/><rect x="0" y="192" width="400" height="6" fill="#eab308"/>' +
      person(60, 208, "#1d1d1d") + person(84, 212, "#2b2b2b") +
      txt("CANARSIE LINE", 210, 240, 12, "#fff", 'letter-spacing="4"'),
      sky("ue", "#f6a26b", "#f8dcae"));
  }

  /* 2. The grand opening on the avenue: a chicken spot's first day, balloons and the banner, two dancers on the cardboard (the dance contest
        Kangol and Doc won before they ever rapped), the crowd bouncing */
  function opening() {
    const crowd = [];
    for (let x = 12; x < 400; x += 24) crowd.push('<g class="ut-bob' + (x % 48 ? " ut-bob2" : "") + '"><circle cx="' + x + '" cy="238" r="8" fill="#14141a"/><rect x="' + (x - 9) + '" y="246" width="18" height="18" rx="6" fill="#14141a"/></g>');
    const balloons = [[34, 60, PINK], [52, 50, GOLD], [70, 62, TEAL], [330, 58, GOLD], [348, 48, PINK], [366, 60, TEAL]].map(([x, y, c], i) => '<g class="ut-sway' + (i % 2 ? " ut-sway2" : "") + '"><path d="M' + x + ' ' + (y + 12) + 'q-4 30 ' + (x < 200 ? 16 : -16) + ' 54" stroke="#ddd" stroke-width="1" fill="none"/><ellipse cx="' + x + '" cy="' + y + '" rx="10" ry="12" fill="' + c + '"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#uo)"/>' +
      '<rect x="20" y="40" width="360" height="160" fill="#f1e2c4"/><rect x="20" y="40" width="360" height="10" fill="#c0392b"/>' +
      '<rect x="60" y="62" width="280" height="30" rx="3" fill="#c0392b"/>' + txt("GRAND OPENING", 200, 84, 20, "#fff", 'letter-spacing="3"') +
      '<rect x="80" y="104" width="240" height="70" fill="#2b1d14" stroke="#c0392b" stroke-width="4"/>' +
      '<rect x="88" y="112" width="104" height="54" fill="#ffd98a" opacity=".3"/><rect x="208" y="112" width="104" height="54" fill="#ffd98a" opacity=".3"/>' +
      txt("CHICKEN", 140, 144, 15, GOLD) + txt("BISCUITS", 260, 144, 15, GOLD) +
      balloons +
      /* the cardboard + the two dancers */
      '<rect x="110" y="196" width="180" height="16" fill="#b58b56"/><path d="M110 204h180" stroke="#8e6a3e"/>' +
      '<g class="ut-spin ut-spin2"><g><circle cx="160" cy="186" r="6" fill="#0b0b0f"/><path d="M160 192v-14M160 184l-12 -8M160 184l12 -8M160 192l-8 12M160 192l8 12" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g></g>' +
      '<g class="ut-bob"><circle cx="240" cy="168" r="6" fill="#0b0b0f"/>' + hat(240, 156, PINK) + '<rect x="234" y="175" width="12" height="18" rx="5" fill="#0b0b0f"/><path d="M234 180l-12 -8M246 180l12 -8M236 193l-6 12M244 193l6 12" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      crowd.join(""),
      sky("uo", "#2a5f9e", "#8fc0e8"));
  }

  /* 3. The beat for "Roxanne, Roxanne" coming together at Howie Tee's house: the drum machine pads lighting up, the reels turning,
        a keyboard, the mic stand with a hat hung on it */
  function beat() {
    let pads = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) pads += '<rect class="ut-gl ut-gl' + ((r + c) % 3 + 1) + '" x="' + (52 + c * 22) + '" y="' + (130 + r * 18) + '" width="16" height="12" rx="2" fill="' + [PINK, TEAL, GOLD][(r * 4 + c) % 3] + '"/>';
    let keys = "";
    for (let i = 0; i < 18; i++) keys += '<rect x="' + (186 + i * 10) + '" y="190" width="9" height="30" fill="#f5f5f5"/>';
    for (let i = 0; i < 18; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (192 + i * 10) + '" y="190" width="6" height="18" fill="#111"/>';
    const reel = (cx) => '<g class="ut-spin"><circle cx="' + cx + '" cy="62" r="20" fill="#3a3a40" stroke="#999" stroke-width="2"/><circle cx="' + cx + '" cy="62" r="5" fill="#ccc"/>' +
      [0, 120, 240].map(a => '<circle cx="' + (cx + Math.cos(a * Math.PI / 180) * 12).toFixed(1) + '" cy="' + (62 + Math.sin(a * Math.PI / 180) * 12).toFixed(1) + '" r="4" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2a2030"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#3b2c40"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 30) + '" y="8" width="60" height="100" fill="#46344c" opacity=".6"/>').join("") +
      /* reel-to-reel */
      '<rect x="230" y="30" width="140" height="70" rx="5" fill="#1e1e22" stroke="#666" stroke-width="2"/>' + reel(270) + reel(330) +
      '<path d="M270 82h60" stroke="#6b4a2a" stroke-width="2"/><rect x="262" y="88" width="76" height="8" rx="2" fill="' + CREAM + '"/>' +
      '<text x="300" y="94.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#333">ROXANNE, ROXANNE \'84</text>' +
      /* table */
      '<rect x="0" y="178" width="400" height="82" fill="#5a3a2a"/><rect x="0" y="174" width="400" height="6" fill="#7a5038"/>' +
      /* drum machine */
      '<rect x="40" y="118" width="110" height="72" rx="4" fill="#26262c" stroke="#777" stroke-width="2"/>' + pads +
      '<rect x="52" y="122" width="84" height="5" fill="#76e0a0" opacity=".7"/>' +
      /* keyboard */
      '<rect x="178" y="184" width="196" height="40" rx="3" fill="#1b1b1f"/>' + keys +
      /* mic stand with the hat */
      '<rect x="168" y="80" width="4" height="98" fill="#999"/><path d="M150 178h40" stroke="#999" stroke-width="4"/>' +
      '<rect x="162" y="62" width="16" height="26" rx="8" fill="#c9ced6" stroke="#666"/>' + hat(170, 46, TEAL) +
      tag("ROXANNE", 206, 160, 30, PINK, -6),
      "");
  }

  /* 4. Roxanne walking down the block: East Flatbush two-family brick houses with awnings and stoops, hearts floating up, the boys on the stoop */
  function block() {
    const house = (x, col, aw) => '<rect x="' + x + '" y="70" width="90" height="120" fill="' + col + '"/><rect x="' + x + '" y="66" width="90" height="6" fill="#4a2e22"/>' +
      [0, 1].map(r => [0, 1].map(c => '<rect x="' + (x + 12 + c * 40) + '" y="' + (84 + r * 40) + '" width="26" height="24" fill="#ffe2a0" opacity=".75"/><path d="M' + (x + 8 + c * 40) + ' ' + (82 + r * 40) + 'h34l-4 8h-26z" fill="' + aw + '"/>').join("")).join("") +
      '<path d="M' + (x + 60) + ' 190v-14h22v14z" fill="#9a958e"/><path d="M' + (x + 60) + ' 182h22M' + (x + 60) + ' 186h22" stroke="#7a756e"/>';
    const hearts = [[70, 120], [96, 108], [118, 124]].map(([x, y], i) => '<path class="ut-ht ut-ht' + (i + 1) + '" d="M' + x + ' ' + y + 'c-6-8 -16 0 -8 8l8 8l8-8c8-8 -2-16 -8-8z" fill="' + PINK + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ub)"/>' + stars(10) +
      house(0, "#9b4a36", "#2d7d5a") + house(96, "#b5674a", "#c0392b") + house(192, "#8e5240", "#1f5fa8") + house(288, "#a8583e", "#2d7d5a") + '<rect x="378" y="70" width="22" height="120" fill="#7a4232"/>' +
      '<rect x="0" y="190" width="400" height="34" fill="#9a968f"/><path d="M0 224h400" stroke="#6e6a64" stroke-width="3"/>' + [60, 160, 260, 360].map(x => '<path d="M' + x + ' 190v34" stroke="#86827c"/>').join("") +
      '<rect x="0" y="224" width="400" height="36" fill="#4a4c51"/>' +
      /* the boys on the stoop: three hats */
      person(156, 160, "#151515") + hat(156, 146, PINK) + person(176, 162, "#151515") + hat(176, 148, TEAL) + person(254, 160, "#151515") + hat(254, 146, GOLD) +
      /* Roxanne walking by (a silhouette, ponytail) */
      '<g class="ut-walk"><g><circle cx="20" cy="184" r="6" fill="#1a0c14"/><path d="M14 182q-6 4-4 10" stroke="#1a0c14" stroke-width="3" fill="none"/><path d="M14 192h12l4 20h-20z" fill="' + PINK + '"/><path d="M17 212v10M23 212v10" stroke="#1a0c14" stroke-width="3"/></g></g>' +
      hearts +
      tag("ROXANNE, ROXANNE", 70, 250, 20, CREAM, -3),
      sky("ub", "#1c1636", "#5a3a6e"));
  }

  /* 5. Utica Av & Avenue D: green street signs, the wall tagged UTFO, Tilden High's brick tower over the rooftops */
  function corner() {
    let tw = '<rect x="170" y="46" width="70" height="94" fill="#8f3e2c"/><rect x="166" y="40" width="78" height="8" fill="#d8ccb0"/><rect x="180" y="18" width="50" height="24" fill="#8f3e2c"/><rect x="176" y="14" width="58" height="6" fill="#d8ccb0"/>' +
      '<path d="M186 14l19-10l19 10z" fill="#6f6a60"/><circle cx="205" cy="30" r="7" fill="#f4ead8" stroke="#555"/><path d="M205 30v-4M205 30l3 2" stroke="#222" stroke-width="1.4"/>';
    for (let y = 56; y < 132; y += 16) for (let x = 178; x < 236; x += 14) tw += '<rect x="' + x + '" y="' + y + '" width="8" height="10" fill="#ffd98a" opacity=".5"/>';
    tw += '<rect x="100" y="80" width="70" height="60" fill="#8f3e2c"/><rect x="240" y="80" width="70" height="60" fill="#8f3e2c"/><rect x="100" y="78" width="210" height="4" fill="#d8ccb0"/>';
    for (let x = 106; x < 306; x += 14) if (x < 168 || x > 242) tw += '<rect class="ut-gl ut-gl' + (x % 3 + 1) + '" x="' + x + '" y="92" width="8" height="10" fill="#ffd98a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#uc)"/>' + stars(14) + tw +
      txt("TILDEN HIGH", 128, 70, 8, CREAM, 'letter-spacing="2" opacity=".85"') +
      '<rect x="0" y="120" width="96" height="20" fill="#5a3a2c"/><rect x="316" y="114" width="84" height="26" fill="#5a3a2c"/>' +
      '<rect x="0" y="136" width="400" height="90" fill="#3e3a44"/>' +
      (() => { let b = ""; for (let y = 146; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#34303a" stroke-width="1"/>'; return b; })() +
      tag("UTFO", 22, 206, 60, PINK, -5) + tag("MO' BASS", 186, 218, 20, TEAL, -4) + tag("DR. ICE", 200, 186, 16, GOLD, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ut-car"><rect x="0" y="238" width="48" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="300" y="66" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Utica Av", 348, 82, 12, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Avenue D", 348, 108, 12, "#fff") +
      '<circle class="ut-bl" cx="358" cy="60" r="4" fill="#fff6c2" style="animation-duration:2.4s"/>',
      sky("uc", "#0b0a1c", "#2e2448"));
  }

  window.SCENES = { e105: e105, opening: opening, beat: beat, block: block, corner: corner };
})();
