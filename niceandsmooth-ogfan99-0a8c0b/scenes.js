/* Nice & Smooth game (NYC map, the Bronx). Greg Nice is a South Bronx native; the rooms come from their own lines:
   the 6 at Whitlock Av up on the el, the Bay Plaza movie theater ("I go to Bay Plaza and catch a flick"), the tavern in
   Central Park with the lit-up trees ("Go to Tavern on the Green, have a glass of wine"), the TV studio at 1515 Broadway
   ("You seen us on MTV"), and Westchester Av & Whitlock Av under the el. 400 x 260 SVGs. Classes prefixed nsm-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nsmcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.nsm-car{animation:nsmcar 6.5s linear infinite}' +
    '@keyframes nsmblink{0%,100%{opacity:.25}50%{opacity:1}}.nsm-bl{animation:nsmblink 1.6s ease-in-out infinite}.nsm-bl2{animation-delay:.5s}.nsm-bl3{animation-delay:1s}' +
    '@keyframes nsmchase{0%,100%{opacity:1}50%{opacity:.15}}.nsm-ch{animation:nsmchase .7s linear infinite}.nsm-ch2{animation-delay:.35s}' +
    '@keyframes nsmtw{0%,100%{opacity:.35}50%{opacity:1}}.nsm-tw{animation:nsmtw 2.2s ease-in-out infinite}.nsm-tw2{animation-delay:.7s}.nsm-tw3{animation-delay:1.4s}' +
    '@keyframes nsmspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.nsm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:nsmspin 1.8s linear infinite}' +
    '@keyframes nsmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.nsm-bob{animation:nsmbob .55s ease-in-out infinite}.nsm-bob2{animation-delay:.18s}.nsm-bob3{animation-delay:.36s}' +
    '@keyframes nsmthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.nsm-thump{transform-box:fill-box;transform-origin:50% 50%;animation:nsmthump .55s ease-in-out infinite}' +
    '@keyframes nsmnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.nsm-note{animation:nsmnote 2.4s ease-out infinite}.nsm-note2{animation-delay:.8s}.nsm-note3{animation-delay:1.6s}' +
    '@keyframes nsmtrot{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.nsm-trot{animation:nsmtrot .4s ease-in-out infinite}' +
    '@keyframes nsmride{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.nsm-ride{animation:nsmride 14s linear infinite}' +
    '@keyframes nsmflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.25}55%{opacity:.9}}.nsm-flk{animation:nsmflick 2.4s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const G6 = "#00933c", GOLD = "#ffd23f", BLUE = "#3fb6e6", CREAM = "#f6eedc", RED = "#e0483e", GREEN = "#0f6b3a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const el = (y, col) => '<rect x="0" y="' + y + '" width="400" height="12" fill="' + col + '"/><rect x="0" y="' + (y + 12) + '" width="400" height="4" fill="#2c3a2f"/>' +
    (() => { let s = ""; for (let x = 0; x < 400; x += 20) s += '<path d="M' + x + ' ' + y + 'l10 12l10 -12" stroke="#2c3a2f" stroke-width="1.5" fill="none"/>'; return s; })();

  /* 1. Whitlock Av, up on the Pelham line el over Westchester Av: black sign with the green 6, the train pulling in */
  function whitlock() {
    let win = "";
    for (let x = 22; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ns1)"/>' + stars(12) +
      [[0, 66], [54, 80], [110, 60], [176, 76], [236, 58], [300, 72], [356, 64]].map(([x, y], i) => '<rect x="' + x + '" y="' + y + '" width="58" height="' + (110 - y) + '" fill="#2a2e40"/>' +
        '<rect class="nsm-bl nsm-bl' + (i % 3 + 1) + '" x="' + (x + 10) + '" y="' + (y + 10) + '" width="7" height="8" fill="#ffd98a" opacity=".8"/><rect class="nsm-bl nsm-bl' + ((i + 1) % 3 + 1) + '" x="' + (x + 34) + '" y="' + (y + 24) + '" width="7" height="8" fill="#ffd98a" opacity=".8"/>').join("") +
      '<path d="M0 44h400v10H0z" fill="#3c4a3a"/><rect x="0" y="54" width="400" height="4" fill="#6f7f66"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="58" width="6" height="104" fill="#55684e"/>').join("") +
      '<rect x="84" y="64" width="232" height="30" rx="3" fill="#111"/><rect x="84" y="64" width="232" height="3" fill="#fff"/>' +
      '<text x="98" y="86" ' + font + ' font-size="15" fill="#fff">Whitlock Av</text>' + bullet(292, 79, "6", G6) +
      '<g class="anim-train">' +
        '<rect x="6" y="102" width="300" height="56" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="286" y="110" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 146, "6", G6) +
        '<rect x="6" y="138" width="300" height="3" fill="' + G6 + '" opacity=".8"/><circle cx="18" cy="150" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="158" width="400" height="10" fill="#eab308"/><rect x="0" y="168" width="400" height="14" fill="#3b3f46"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="182" width="12" height="56" fill="#55684e"/>').join("") +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4a4f"/><path d="M0 243h400" stroke="#d9d4c3" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="nsm-car"><rect x="0" y="232" width="42" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="245" r="4" fill="#111"/><circle cx="32" cy="245" r="4" fill="#111"/></g>' +
      '<text x="200" y="220" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e3d8" letter-spacing="3">WESTCHESTER AV</text>',
      sky("ns1", "#121731", "#5c4f80"));
  }

  /* 2. The Bay Plaza movie theater: big glass-and-steel front, a marquee of chasing bulbs, NOW SHOWING, people lining up */
  function bayplaza() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 12) bulbs += '<circle class="nsm-ch' + (x % 24 ? " nsm-ch2" : "") + '" cx="' + x + '" cy="98" r="3" fill="#fff3b0"/><circle class="nsm-ch' + (x % 24 ? "" : " nsm-ch2") + '" cx="' + x + '" cy="142" r="3" fill="#fff3b0"/>';
    let glass = "";
    for (let x = 40; x < 360; x += 32) glass += '<rect x="' + x + '" y="154" width="28" height="56" fill="#7fb6d9" opacity=".55"/>';
    const person = (x, c) => '<g><circle cx="' + x + '" cy="196" r="6" fill="#1d1d1d"/><rect x="' + (x - 6) + '" y="203" width="12" height="22" rx="4" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ns2)"/>' + stars(10) +
      '<rect x="20" y="46" width="360" height="170" fill="#3a4152"/><rect x="20" y="40" width="360" height="8" fill="#8b93a6"/>' +
      '<rect x="56" y="92" width="288" height="56" rx="4" fill="#141414" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="117" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="4">NOW SHOWING</text>' +
      '<text x="200" y="135" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">CATCH A FLICK  ·  ALL SHOWS</text>' +
      '<text x="200" y="76" text-anchor="middle" ' + font + ' font-size="14" fill="' + CREAM + '" letter-spacing="6">BAY PLAZA</text>' +
      glass + '<rect x="180" y="170" width="40" height="46" fill="#22303d"/><rect x="198" y="170" width="4" height="46" fill="#8b93a6"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#55575c"/><rect x="0" y="216" width="400" height="5" fill="#9a9ca0"/>' +
      person(84, RED) + person(104, BLUE) + person(124, GOLD) + person(290, G6) + person(312, "#c06bd6") +
      '<g class="nsm-trot"><path d="M140 210l8 -18h16l8 18z" fill="#e8e3d8"/><path d="M142 206h28" stroke="' + RED + '" stroke-width="3"/><circle cx="150" cy="190" r="4" fill="#fff6c2"/><circle cx="158" cy="188" r="4" fill="#fff6c2"/><circle cx="164" cy="191" r="4" fill="#fff6c2"/></g>',
      sky("ns2", "#1a1b3a", "#7a4f7e"));
  }

  /* 3. The tavern in Central Park: the low Victorian building with steep slate gables, green awning, the trees strung with lights, a carriage going by */
  function tavern() {
    let lights = "";
    [[40, 70], [100, 60], [300, 62], [362, 72]].forEach(([cx, cy], k) => { for (let i = 0; i < 14; i++) { const a = i * 2.4, r = 10 + (i * 7) % 26; lights += '<circle class="nsm-tw nsm-tw' + ((i + k) % 3 + 1) + '" cx="' + (cx + Math.cos(a) * r).toFixed(1) + '" cy="' + (cy + Math.sin(a) * r * .8).toFixed(1) + '" r="1.8" fill="#fff4c2"/>'; } });
    let win = ""; for (let x = 96; x < 304; x += 26) win += '<rect x="' + x + '" y="150" width="14" height="22" rx="7" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ns3)"/>' + stars(14) +
      [[40, 70], [100, 60], [300, 62], [362, 72]].map(([x, y]) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (190 - y) + '" fill="#3a2a1e"/><ellipse cx="' + x + '" cy="' + y + '" rx="40" ry="32" fill="#1f3a2a"/>').join("") + lights +
      /* building: brick body, slate gables */
      '<rect x="80" y="130" width="240" height="66" fill="#8a5a3c"/>' +
      '<path d="M80 130l30 -40l30 40zM170 130l30 -48l30 48zM260 130l30 -40l30 40z" fill="#3e4652"/>' +
      '<path d="M110 90v-8M200 82v-8M290 90v-8" stroke="#3e4652" stroke-width="3"/>' +
      '<rect x="100" y="104" width="20" height="18" fill="#ffd98a"/><rect x="190" y="98" width="20" height="22" fill="#ffd98a"/><rect x="280" y="104" width="20" height="18" fill="#ffd98a"/>' +
      win + '<path d="M84 140h232l-8 8H92z" fill="' + GREEN + '"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2c4a33"/><path d="M0 222h400" stroke="#b9a98a" stroke-width="10"/>' +
      '<g class="nsm-ride"><g class="nsm-trot"><path d="M10 212h22l4 -14l6 2l-2 14h-4l-2 10M14 212l-2 12M26 212l2 12" fill="#e9e4da" stroke="#e9e4da" stroke-width="2"/></g>' +
        '<path d="M44 204h46v14H44z" fill="#20202a"/><path d="M50 204q20 -22 40 0" fill="#20202a"/><circle cx="56" cy="222" r="8" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle cx="84" cy="222" r="8" fill="none" stroke="' + GOLD + '" stroke-width="2"/><path d="M32 208h12" stroke="#555" stroke-width="2"/></g>' +
      tag("GLASS OF WINE", 120, 252, 18, GOLD, -2) +
      '<text x="200" y="32" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="5">W 67 ST · BY THE PARK</text>',
      sky("ns3", "#0d1430", "#3a3364"));
  }

  /* 4. On TV at 1515 Broadway ("You seen us on MTV"): a studio set with a graffiti backdrop, the ON AIR light, cameras on tripods,
     turntables spinning, speakers thumping, the studio crowd bobbing */
  function studio() {
    const crowd = (x, c, cls) => '<g class="nsm-bob ' + cls + '"><circle cx="' + x + '" cy="214" r="7" fill="#0d0d0d"/><rect x="' + (x - 7) + '" y="222" width="14" height="26" rx="5" fill="' + c + '"/><path d="M' + (x - 7) + ' 226l-8 -14M' + (x + 7) + ' 226l8 -14" stroke="#0d0d0d" stroke-width="3" stroke-linecap="round"/></g>';
    const spk = (x) => '<rect x="' + x + '" y="108" width="44" height="90" rx="3" fill="#1c1c1c" stroke="#555" stroke-width="2"/><circle class="nsm-thump" cx="' + (x + 22) + '" cy="132" r="12" fill="#333" stroke="#777" stroke-width="2"/><circle class="nsm-thump" cx="' + (x + 22) + '" cy="170" r="16" fill="#333" stroke="#777" stroke-width="2"/>';
    const cam = (x, flip) => '<g transform="translate(' + x + ',0)' + (flip ? ' scale(-1,1)' : '') + '"><rect x="-14" y="150" width="30" height="20" rx="3" fill="#2d2d33" stroke="#888" stroke-width="1.5"/><rect x="16" y="154" width="10" height="12" fill="#444"/><circle cx="26" cy="160" r="5" fill="#7fb6d9"/><path d="M0 170l-12 40M0 170v40M0 170l12 40" stroke="#888" stroke-width="2.5"/></g>';
    let back = ""; for (let x = 0; x < 400; x += 40) back += '<rect x="' + x + '" y="40" width="38" height="120" fill="' + (x % 80 ? "#2b2440" : "#251f38") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#120f1c"/>' + back +
      tag("FUNKY FOR YOU", 56, 80, 28, GOLD, -4) + tag("OLD TO THE NEW", 208, 108, 16, BLUE, -3) +
      '<rect x="0" y="22" width="400" height="10" fill="#333"/>' + [60, 150, 250, 340].map(x => '<path d="M' + x + ' 32l-10 12h20z" fill="#555"/><path d="M' + (x - 10) + ' 44l-24 120h68l-24 -120z" fill="#fff6c2" opacity=".07"/>').join("") +
      '<rect x="160" y="2" width="80" height="18" rx="3" fill="#2a0e0e"/><text class="nsm-flk" x="200" y="15" text-anchor="middle" ' + font + ' font-size="11" fill="#ff4d4d" letter-spacing="3">ON AIR</text>' +
      spk(14) + spk(342) +
      '<rect x="120" y="152" width="160" height="16" fill="#3a3a44"/><rect x="128" y="168" width="144" height="34" fill="#2a2a32"/>' +
      '<rect x="132" y="140" width="56" height="12" rx="2" fill="#2b2b2b"/><rect x="212" y="140" width="56" height="12" rx="2" fill="#2b2b2b"/>' +
      '<g class="nsm-spin"><circle cx="160" cy="140" r="18" fill="#111"/><circle cx="160" cy="140" r="6" fill="' + GOLD + '"/><path d="M160 124v6" stroke="#666" stroke-width="2"/></g>' +
      '<g class="nsm-spin"><circle cx="240" cy="140" r="18" fill="#111"/><circle cx="240" cy="140" r="6" fill="' + RED + '"/><path d="M240 124v6" stroke="#666" stroke-width="2"/></g>' +
      '<text class="nsm-note" x="176" y="118" font-size="18" fill="#fff">&#9835;</text><text class="nsm-note nsm-note2" x="214" y="112" font-size="16" fill="' + GOLD + '">&#9834;</text>' +
      cam(84, false) + cam(316, true) +
      '<rect x="0" y="204" width="400" height="56" fill="#1d1a26"/>' +
      crowd(40, RED, "") + crowd(76, BLUE, "nsm-bob2") + crowd(112, GOLD, "nsm-bob3") + crowd(288, G6, "") + crowd(324, "#c06bd6", "nsm-bob2") + crowd(360, RED, "nsm-bob3") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="4">1515 BROADWAY</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#bbb" letter-spacing="3">YOU SEEN US ON TV</text>',
      "");
  }

  /* 5. Westchester Av & Whitlock Av under the 6 el: green street signs, the wall tagged NICE & SMOOTH, the el and the train behind */
  function corner() {
    let brick = ""; for (let y = 106; y < 226; y += 8) brick += '<path d="M0 ' + y + 'h400" stroke="#3d2a1f" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ns5)"/>' + stars(16) +
      '<g class="nsm-ride"><rect x="0" y="40" width="200" height="22" rx="3" fill="#c9ced6"/>' + [10, 44, 78, 112, 146].map(x => '<rect x="' + x + '" y="45" width="22" height="10" fill="#cfe2f5"/>').join("") + bullet(186, 51, "6", G6) + '</g>' +
      el(62, "#55684e") + [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="78" width="10" height="20" fill="#55684e"/>').join("") +
      '<rect x="0" y="98" width="400" height="128" fill="#6b4a3a"/>' + brick +
      tag("NICE &amp; SMOOTH", 12, 168, 30, GOLD, -5) + tag("HIP HOP JUNKIES", 18, 206, 18, BLUE, -3) + tag("GREG N-I-C-E", 176, 212, 16, CREAM, -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="nsm-car"><rect x="0" y="238" width="40" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="30" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="100" width="5" height="128" fill="#3d4b3f"/>' +
      '<rect x="276" y="104" width="120" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="336" y="120" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Westchester Av</text>' +
      '<rect x="296" y="130" width="100" height="22" rx="2" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="346" y="146" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Whitlock Av</text>' +
      '<circle class="nsm-flk" cx="358" cy="100" r="4" fill="#fff6c2"/>',
      sky("ns5", "#0a0c1a", "#30365a"));
  }

  window.SCENES = { whitlock: whitlock, bayplaza: bayplaza, tavern: tavern, studio: studio, corner: corner };
})();
