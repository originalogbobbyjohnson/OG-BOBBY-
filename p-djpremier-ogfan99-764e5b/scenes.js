/* DJ Premier producer game: Midtown Manhattan. 34 St-Penn Station (A), D&D Studios on W 37th St in the Garment District,
   a 7th Ave record shop, the HeadQCourterz radio booth, and the corner of W 37th St & 8th Ave under the Empire State Building. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes rack{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.rack{animation:rack 11s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes scr{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.scr{transform-box:fill-box;transform-origin:50% 50%;animation:scr .5s ease-in-out infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:.6}100%{transform:translateY(-40px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcc33", RED = "#e23b3b", BLUE = "#9ad1ff", ACE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cab = (x, y) => '<g><rect x="' + x + '" y="' + (y + 8) + '" width="62" height="16" rx="4" fill="#f6c21c"/><path d="M' + (x + 12) + ' ' + (y + 8) + 'l8-10h22l8 10z" fill="#f6c21c"/><rect x="' + (x + 22) + '" y="' + (y + 1) + '" width="8" height="7" fill="#bfe3ff"/><rect x="' + (x + 33) + '" y="' + (y + 1) + '" width="8" height="7" fill="#bfe3ff"/><rect x="' + (x + 26) + '" y="' + (y - 5) + '" width="10" height="4" fill="#fff"/><circle cx="' + (x + 14) + '" cy="' + (y + 25) + '" r="5" fill="#111"/><circle cx="' + (x + 48) + '" cy="' + (y + 25) + '" r="5" fill="#111"/></g>';

  /* Empire State Building: limestone setbacks, mast, lit crown */
  const esb = (cx, base, s, op) => {
    const k = s || 1, o = op || 1;
    const r = (w, h, y) => '<rect x="' + (cx - w * k / 2) + '" y="' + (base - y * k) + '" width="' + (w * k) + '" height="' + (h * k) + '" fill="#b9b2a2"/>';
    let g = '<g opacity="' + o + '">' + r(70, 90, 90) + r(52, 70, 160) + r(40, 30, 190) + r(30, 18, 208) + r(22, 14, 222) + r(14, 10, 232);
    g += '<rect x="' + (cx - 2 * k) + '" y="' + (base - 270 * k) + '" width="' + (4 * k) + '" height="' + (38 * k) + '" fill="#9d9688"/>';
    g += '<rect class="flk" x="' + (cx - 11 * k) + '" y="' + (base - 222 * k) + '" width="' + (22 * k) + '" height="' + (14 * k) + '" fill="' + RED + '" opacity=".85"/>';
    g += '<rect class="flk flk2" x="' + (cx - 7 * k) + '" y="' + (base - 232 * k) + '" width="' + (14 * k) + '" height="' + (10 * k) + '" fill="#fff" opacity=".9"/>';
    for (let i = -3; i <= 3; i++) g += '<path d="M' + (cx + i * 8 * k) + ' ' + (base - 160 * k) + 'v' + (160 * k) + '" stroke="#8d8676" stroke-width="' + (1.2 * k) + '"/>';
    g += '<circle class="bl" cx="' + cx + '" cy="' + (base - 272 * k) + '" r="' + (2.5 * k) + '" fill="' + RED + '"/>';
    return g + '</g>';
  };

  /* 1. A train into 34 St-Penn Station, underground */
  function station() {
    let tiles = "";
    for (let y = 0; y < 176; y += 12) tiles += '<path d="M0 ' + y + 'h400" stroke="#cfd3cc" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 24) tiles += '<path d="M' + x + ' 0v176" stroke="#cfd3cc" stroke-width="1"/>';
    let win = "";
    for (let x = 22; x < 300; x += 46) win += '<rect x="' + x + '" y="124" width="30" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#e9ebe4"/>' + tiles +
      '<rect x="0" y="20" width="400" height="16" fill="#7a2f2a"/><rect x="0" y="36" width="400" height="4" fill="#c79b3b"/>' +
      '<rect x="40" y="52" width="320" height="40" rx="3" fill="#111"/>' +
      '<text x="58" y="79" ' + font + ' font-size="19" fill="#fff">34 St - Penn Station</text>' +
      bullet(288, 72, "A", ACE) + bullet(314, 72, "C", ACE) + bullet(340, 72, "E", ACE) +
      '<g class="anim-train"><rect x="0" y="108" width="340" height="68" rx="6" fill="#a9adb3" stroke="#6a6e74" stroke-width="2"/>' +
      '<rect x="0" y="150" width="340" height="6" fill="#5b5f66"/>' + win +
      '<rect x="318" y="118" width="16" height="30" rx="2" fill="#2c3036"/>' + bullet(326, 166, "A", ACE) + '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#f2d21c"/><rect x="0" y="186" width="400" height="74" fill="#6b6a66"/>' +
      '<path d="M0 186h400" stroke="#4d4c48" stroke-width="2"/>' +
      '<g class="bl"><circle cx="370" cy="148" r="6" fill="#7cf08a"/></g>');
  }

  /* 2. D&D Studios: the tan loft building at 320 W 37th St, Garment District, a clothing rack rolling past */
  function dnd() {
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const lit = (r * 7 + c * 3) % 5 === 0;
      wins += '<rect ' + (lit ? 'class="flk' + (c % 2 ? ' flk2' : '') + '" ' : '') + 'x="' + (78 + c * 42) + '" y="' + (24 + r * 34) + '" width="28" height="22" fill="' + (lit ? GOLD : "#2c3340") + '" stroke="#7d7464" stroke-width="2"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(8) +
      '<rect x="0" y="40" width="60" height="150" fill="#3b3f4a"/><rect x="340" y="30" width="60" height="160" fill="#3b3f4a"/>' +
      '<rect x="64" y="10" width="272" height="180" fill="#c9b99a"/><rect x="64" y="10" width="272" height="8" fill="#a8977a"/>' + wins +
      '<rect x="64" y="160" width="272" height="30" fill="#8a7a62"/>' +
      '<rect x="176" y="148" width="48" height="42" fill="#2a2420" stroke="#c9b99a" stroke-width="3"/>' +
      '<rect x="188" y="134" width="24" height="12" fill="#1a1416"/><text x="200" y="144" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">320</text>' +
      '<rect x="234" y="160" width="40" height="16" rx="2" fill="#1a1416" stroke="' + GOLD + '" stroke-width="1"/><text x="254" y="172" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">D&amp;D</text>' +
      '<rect x="0" y="190" width="400" height="16" fill="#8b8d91"/><rect x="0" y="206" width="400" height="54" fill="#35373c"/>' +
      '<path d="M0 232h400" stroke="#f2d21c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="rack"><path d="M0 150h60M4 150v40M56 150v40" stroke="#bbb" stroke-width="2.5"/><rect x="8" y="154" width="10" height="28" fill="' + RED + '"/><rect x="20" y="154" width="10" height="30" fill="#4a6fa5"/><rect x="32" y="154" width="10" height="26" fill="' + GOLD + '"/><rect x="44" y="154" width="10" height="29" fill="#2e8b57"/><circle cx="4" cy="192" r="3" fill="#222"/><circle cx="56" cy="192" r="3" fill="#222"/></g>' +
      '<g class="car">' + cab(0, 214) + '</g>',
      sky("s2", "#0b1026", "#3a3360"));
  }

  /* 3. 7th Ave record shop: red awning, records spinning in the window, crates on the sidewalk */
  function recordshop() {
    const rec = (x, y, c) => '<g class="vn"><circle cx="' + x + '" cy="' + y + '" r="22" fill="#0b0b0b"/><circle cx="' + x + '" cy="' + y + '" r="15" fill="none" stroke="#2c2c2c"/><circle cx="' + x + '" cy="' + y + '" r="7" fill="' + c + '"/><rect x="' + (x - 1) + '" y="' + (y - 7) + '" width="2" height="5" fill="#fff"/></g>';
    let crates = "";
    [40, 110, 250, 320].forEach((x, i) => {
      crates += '<rect x="' + x + '" y="196" width="50" height="34" fill="#9a6b3a" stroke="#5c3e1f" stroke-width="2"/>';
      for (let k = 0; k < 5; k++) crates += '<rect x="' + (x + 4 + k * 9) + '" y="' + (184 + (k + i) % 3 * 3) + '" width="7" height="14" fill="' + [RED, GOLD, BLUE, "#2e8b57", "#f2f2f2"][(k + i) % 5] + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="#2b2a33"/>' +
      '<rect x="0" y="0" width="400" height="28" fill="#4a4652"/>' +
      '<rect x="20" y="30" width="360" height="30" fill="#0e0d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="52" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + GOLD + '" letter-spacing="2">RECORDS  -  DJ GEAR</text>' +
      '<path d="M10 62h380l-16 26H26z" fill="' + RED + '"/><path d="M10 62h380" stroke="#fff" stroke-width="2"/>' +
      (() => { let s = ""; for (let x = 26; x < 380; x += 32) s += '<path d="M' + x + ' 62l-6 26" stroke="#b72c2c" stroke-width="10"/>'; return s; })() +
      '<rect x="30" y="92" width="200" height="92" fill="#16151b" stroke="#777" stroke-width="3"/>' +
      rec(78, 136, GOLD) + rec(140, 136, RED) + rec(196, 136, BLUE) +
      '<rect x="250" y="92" width="110" height="104" fill="#3a2a20" stroke="#777" stroke-width="3"/><circle cx="342" cy="146" r="3" fill="' + GOLD + '"/>' +
      '<text x="305" y="120" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">OPEN</text><circle class="bl" cx="305" cy="134" r="4" fill="#7cf08a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#7d7f83"/>' + crates +
      '<path d="M0 232h400" stroke="#5f6165" stroke-width="2"/>');
  }

  /* 4. The HeadQCourterz radio booth: ON AIR light, mic, two decks scratching, meters */
  function headq() {
    const deck = (x) => '<rect x="' + x + '" y="160" width="120" height="70" rx="4" fill="#2a2a2e" stroke="#111" stroke-width="2"/>' +
      '<g class="scr"><circle cx="' + (x + 50) + '" cy="195" r="28" fill="#0b0b0b"/><circle cx="' + (x + 50) + '" cy="195" r="18" fill="none" stroke="#333"/><circle cx="' + (x + 50) + '" cy="195" r="8" fill="' + GOLD + '"/><rect x="' + (x + 48) + '" y="168" width="4" height="10" fill="#fff"/></g>' +
      '<path d="M' + (x + 108) + ' 168l-14 24" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1a22"/>' +
      (() => { let s = ""; for (let x = 0; x < 400; x += 20) for (let y = 0; y < 150; y += 20) s += '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="16" height="16" fill="#25242d"/>'; return s; })() +
      '<rect class="flk" x="150" y="14" width="100" height="28" rx="4" fill="' + RED + '"/><text x="200" y="34" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">ON AIR</text>' +
      '<rect x="40" y="56" width="320" height="34" rx="3" fill="#0e0d12" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '" textLength="290" lengthAdjust="spacingAndGlyphs">LIVE FROM THE HEADQCOURTERZ</text>' +
      '<path d="M200 96v40" stroke="#888" stroke-width="3"/><rect x="190" y="98" width="20" height="30" rx="10" fill="#555" stroke="#222" stroke-width="2"/>' +
      '<rect x="230" y="104" width="120" height="44" rx="3" fill="#111"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<rect class="mt mt' + (i % 4 + 1) + '" x="' + (238 + i * 14) + '" y="110" width="9" height="32" fill="' + (i > 5 ? RED : i > 3 ? GOLD : "#7cf08a") + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#3b2b22"/><rect x="0" y="150" width="400" height="6" fill="#53402f"/>' +
      deck(20) + deck(260) +
      '<rect x="156" y="170" width="88" height="56" rx="4" fill="#38383e" stroke="#111" stroke-width="2"/><rect x="166" y="210" width="68" height="6" rx="2" fill="#111"/><rect class="scr" x="196" y="204" width="8" height="18" rx="2" fill="' + RED + '"/>' +
      '<circle cx="176" cy="186" r="5" fill="#777"/><circle cx="200" cy="186" r="5" fill="#777"/><circle cx="224" cy="186" r="5" fill="#777"/>');
  }

  /* 5. The corner: W 37th St & 8th Ave, green signs, DJ PREMIER tag, the Empire State Building behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(12) +
      esb(230, 130, .62, 1) +
      '<rect x="0" y="80" width="70" height="50" fill="#2e3140"/><rect x="300" y="70" width="100" height="60" fill="#2e3140"/>' +
      '<rect x="0" y="122" width="400" height="104" fill="#8e4a36"/>' +
      (() => { let b = ""; for (let y = 128; y < 226; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#6f3627" stroke-width="1"/>'; return b; })() +
      tag("DJ PREMIER", 18, 192, 40, GOLD, -5) + tag("GANG STARR", 150, 218, 20, RED, -4) + tag("D&amp;D", 238, 168, 22, BLUE, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<rect x="336" y="40" width="5" height="190" fill="#3d4b3f"/>' +
      '<rect x="272" y="44" width="122" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">W 37 St</text>' +
      '<rect x="300" y="70" width="72" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="336" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">8 Av</text>' +
      '<g class="stm"><circle cx="110" cy="232" r="8" fill="#ddd" opacity=".5"/></g><g class="stm stm2"><circle cx="118" cy="232" r="10" fill="#ddd" opacity=".5"/></g>' +
      '<circle class="bl" cx="339" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#4a2f5a"));
  }

  window.SCENES = { station: station, dnd: dnd, recordshop: recordshop, headq: headq, corner: corner };
})();
