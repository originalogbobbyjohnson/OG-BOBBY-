/* Fearless Four game (NYC map, Manhattan: Harlem - The Great Peso, DLB, Mighty Mike C, Tito, Krazy Eddie, Master OC).
   1. W 125 St & Frederick Douglass Blvd: the M100 pulling in at the bus stop on 125th, a block from where Enjoy Records was (every nearby subway stop is taken on the map).
   2. Elektra Records, 1983: the first rap group signed to a major label - the contract on the desk, a gold record on the wall, Midtown out the window.
   3. The Joe Franklin Show set, 1983: first rap group on the show - the famous desk buried in papers and records, TV cameras with tally lights, four mics.
   4. Style Wars, 1983: "Rockin' It" plays in the film - a whole car painted top to bottom rolling across the el at dusk (Peso was a graffiti writer).
   5. Malcolm X Blvd (Lenox Av) & W 135 St, the Countee Cullen Library behind. 400 x 260 SVGs. No digit nine is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ffcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ff4-car{animation:ffcar 7s linear infinite}.ff4-car2{animation-delay:-3.5s}' +
    '@keyframes ffel{from{transform:translateX(420px)}to{transform:translateX(-420px)}}.ff4-el{animation:ffel 7s linear infinite;animation-delay:-3.2s}' +
    '@keyframes ffblink{0%,100%{opacity:.25}50%{opacity:1}}.ff4-bl{animation:ffblink 1.6s ease-in-out infinite}.ff4-bl2{animation-delay:.5s}.ff4-bl3{animation-delay:1s}' +
    '@keyframes ffflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.ff4-flk{animation:ffflick 2.4s infinite}' +
    '@keyframes ffspin{to{transform:rotate(360deg)}}.ff4-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ffspin 1.4s linear infinite}' +
    '@keyframes ffmeter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.ff4-mt{transform-box:fill-box;transform-origin:50% 100%;animation:ffmeter .6s ease-in-out infinite}.ff4-mt2{animation-delay:.2s}.ff4-mt3{animation-delay:.4s}' +
    '@keyframes ffbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ff4-bob{animation:ffbob .5s ease-in-out infinite}.ff4-bob2{animation-delay:.25s}' +
    '@keyframes fftally{0%,49%{fill:#ff2a2a}50%,100%{fill:#5a1010}}.ff4-tally{animation:fftally 1.2s steps(1) infinite}' +
    '@keyframes ffspark{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}.ff4-spk{transform-box:fill-box;transform-origin:50% 50%;animation:ffspark 1.4s ease-in-out infinite}.ff4-spk2{animation-delay:.45s}.ff4-spk3{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PURP = "#b388ff", GOLD = "#ffd23f", CYAN = "#38e8ff", CREAM = "#f4ead8", RED = "#e63946", BUSBLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const record = (cx, cy, r, label) => '<g class="ff4-spin"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.72) + '" fill="none" stroke="#2c2c2c"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.36) + '" fill="' + label + '"/><rect x="' + (cx - 1) + '" y="' + (cy - r * 0.34) + '" width="2" height="' + (r * 0.2) + '" fill="#fff" opacity=".8"/></g>';
  const mic = (x, y) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="46" fill="#888"/><rect x="' + (x - 4) + '" y="' + (y - 10) + '" width="8" height="12" rx="4" fill="#c9ced6"/><path d="M' + (x - 10) + ' ' + (y + 46) + 'h20" stroke="#888" stroke-width="3"/>';

  /* 1. W 125 St & Frederick Douglass Blvd: the blue-and-white M100 pulling in, the bus stop pole with its route plates, 125th St storefronts */
  function bus() {
    let fronts = "";
    const cols = ["#8a4a3a", "#6e5a8a", "#4a6e5a", "#8a6a3a", "#5a4a6e"];
    for (let i = 0; i < 5; i++) {
      const x = i * 82;
      fronts += '<rect x="' + x + '" y="40" width="80" height="130" fill="' + cols[i] + '"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) fronts += '<rect class="' + ((r + c + i) % 3 ? "" : "ff4-bl ff4-bl" + (c + 1)) + '" x="' + (x + 8 + c * 24) + '" y="' + (50 + r * 26) + '" width="14" height="16" fill="#ffd98a" opacity="' + ((r + c + i) % 3 ? ".35" : ".8") + '"/>';
      fronts += '<rect x="' + (x + 4) + '" y="128" width="72" height="12" fill="' + (i % 2 ? GOLD : CYAN) + '" opacity=".85"/><rect x="' + (x + 8) + '" y="142" width="64" height="28" fill="#1d2230"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#bs)"/>' + stars(12) + fronts +
      '<rect x="0" y="170" width="400" height="18" fill="#8a8c90"/><rect x="0" y="188" width="400" height="72" fill="#4c4e54"/>' +
      '<path d="M0 226 h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="anim-train">' +
        '<rect x="20" y="150" width="250" height="62" rx="8" fill="#f2f4f6" stroke="#8a8f98" stroke-width="2"/>' +
        '<rect x="20" y="186" width="250" height="10" fill="' + BUSBLUE + '"/>' +
        [34, 76, 118, 160, 202].map(x => '<rect x="' + x + '" y="160" width="34" height="22" rx="2" fill="#2a3a52"/>').join("") +
        '<rect x="244" y="158" width="22" height="26" rx="3" fill="#2a3a52"/><rect x="236" y="152" width="30" height="7" rx="2" fill="#111"/><text x="251" y="158" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">M100</text>' +
        '<circle cx="60" cy="214" r="10" fill="#111"/><circle cx="230" cy="214" r="10" fill="#111"/><circle cx="264" cy="202" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="330" y="70" width="4" height="118" fill="#9aa0a8"/>' +
      '<rect x="306" y="70" width="52" height="34" rx="2" fill="' + BUSBLUE + '"/><rect x="312" y="74" width="40" height="10" rx="1" fill="#fff"/>' + txt("BUS", 332, 82, 8, BUSBLUE) +
      '<rect x="312" y="88" width="19" height="12" fill="#fff"/><rect x="333" y="88" width="19" height="12" fill="#fff"/>' + txt("M100", 321.5, 97, 6.5, BUSBLUE) + txt("M101", 342.5, 97, 6.5, BUSBLUE) +
      person(352, 156, "#1b1b1b") + person(374, 160, "#2a2a2a", "ff4-bob") +
      '<rect x="20" y="10" width="200" height="22" rx="3" fill="#111"/>' + txt("W 125 ST &amp; FREDERICK DOUGLASS", 120, 25, 9, CREAM, 'letter-spacing="1"'),
      sky("bs", "#0e0b22", "#3a2a5a"));
  }

  /* 2. Elektra Records, 1983: the label office where they became the first rap group signed to a major - Midtown out the window,
     the contract on the desk with the pen moving, a framed gold record, a turntable playing the test pressing */
  function elektra() {
    let city = "";
    for (let i = 0; i < 9; i++) { const x = 34 + i * 18, h = 30 + (i * 23) % 50; city += '<rect x="' + x + '" y="' + (120 - h) + '" width="14" height="' + h + '" fill="#1e2440"/>';
      for (let y = 124 - h; y < 116; y += 8) city += '<rect class="ff4-bl ff4-bl' + (i % 3 + 1) + '" x="' + (x + 3) + '" y="' + y + '" width="3" height="3" fill="#ffd98a" opacity=".7"/>'; }
    return svg(
      '<rect width="400" height="260" fill="#2a2236"/>' +
      '<rect x="24" y="20" width="180" height="104" fill="url(#ek)" stroke="#5a4e6a" stroke-width="4"/>' + city + '<path d="M114 20 v104 M24 72 h180" stroke="#5a4e6a" stroke-width="3"/>' +
      '<rect x="236" y="22" width="120" height="84" rx="3" fill="#3a2a14" stroke="' + GOLD + '" stroke-width="3"/><circle cx="296" cy="58" r="26" fill="' + GOLD + '"/><circle cx="296" cy="58" r="8" fill="#8a6a00"/><circle cx="296" cy="58" r="2" fill="#3a2a14"/>' +
      txt("FIRST RAP GROUP", 296, 96, 7, CREAM, 'letter-spacing="1"') +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2e28"/>' +
      '<rect x="40" y="140" width="320" height="16" fill="#6a4a2e"/><rect x="50" y="156" width="300" height="70" fill="#5a3a24"/>' +
      '<rect x="120" y="118" width="96" height="24" fill="#f4ead8" transform="rotate(-4 168 130)"/>' +
      [124, 129, 134].map(y => '<path d="M128 ' + y + ' h70" stroke="#8a8a8a" stroke-width="1.5" transform="rotate(-4 168 130)"/>').join("") +
      '<g class="ff4-bob"><path d="M196 136 l22 -20" stroke="#111" stroke-width="4" stroke-linecap="round"/><path d="M194 138 l4 -2" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      '<rect x="250" y="112" width="84" height="30" rx="3" fill="#222"/>' + record(286, 126, 12, PURP) + '<path d="M322 116 l-10 12" stroke="#ddd" stroke-width="2.5" stroke-linecap="round"/>' +
      '<rect x="64" y="124" width="34" height="18" rx="4" fill="#111"/><path d="M68 124 q13 -12 26 0" stroke="#111" stroke-width="5" fill="none"/>' +
      '<rect x="130" y="190" width="140" height="24" rx="3" fill="#111" stroke="' + PURP + '"/>' + txt("ELEKTRA RECORDS", 200, 207, 12, PURP, 'letter-spacing="2"') +
      '<g class="ff4-spk"><path d="M226 30 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="' + CYAN + '"/></g><g class="ff4-spk ff4-spk2"><path d="M370 100 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="' + GOLD + '"/></g>',
      sky("ek", "#0e0b22", "#5a3a6a"));
  }

  /* 3. The Joe Franklin Show set, 1983: the famous desk buried under papers, records and photos, the backdrop, TV cameras with blinking tally lights, four mics for the four MCs */
  function franklin() {
    let piles = "";
    const pc = ["#f4ead8", "#e8dcc0", "#d8c8a2", "#fff", "#c9b48a"];
    for (let i = 0; i < 14; i++) { const x = 92 + (i * 37) % 210, h = 6 + (i * 7) % 18; piles += '<rect x="' + x + '" y="' + (150 - h) + '" width="' + (16 + (i % 3) * 6) + '" height="' + h + '" fill="' + pc[i % 5] + '" transform="rotate(' + ((i % 5) - 2) * 3 + ' ' + x + ' 150)"/>'; }
    piles += record(260, 140, 12, RED) + '<rect x="110" y="128" width="20" height="16" fill="#555" stroke="#ddd"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d2a3a"/>' +
      '<rect x="40" y="10" width="320" height="110" fill="#2e4560"/>' +
      (() => { let c = ""; for (let x = 50; x < 360; x += 28) c += '<rect x="' + x + '" y="10" width="14" height="110" fill="#365273"/>'; return c; })() +
      '<rect x="110" y="22" width="180" height="26" rx="3" fill="#111" stroke="' + GOLD + '"/>' + txt("THE JOE FRANKLIN SHOW", 200, 40, 11, GOLD, 'letter-spacing="1"') +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2e28"/>' +
      '<rect x="80" y="150" width="240" height="52" fill="#5a3a24" stroke="#2a1a10" stroke-width="2"/>' + piles +
      [44, 70, 330, 356].map((x, i) => mic(x, 128) + person(x, 92, ["#1b1b1b", "#262626", "#1f1f1f", "#2b2b2b"][i], i % 2 ? "ff4-bob ff4-bob2" : "ff4-bob")).join("") +
      '<g transform="translate(14 190)"><rect x="0" y="0" width="70" height="40" rx="4" fill="#4a4e58"/><rect x="66" y="10" width="18" height="20" rx="3" fill="#2a2e38"/><circle class="ff4-tally" cx="10" cy="8" r="4"/><rect x="28" y="40" width="10" height="24" fill="#333"/></g>' +
      '<g transform="translate(386 190) scale(-1 1)"><rect x="0" y="0" width="70" height="40" rx="4" fill="#4a4e58"/><rect x="66" y="10" width="18" height="20" rx="3" fill="#2a2e38"/><circle class="ff4-tally" style="animation-delay:-.6s" cx="10" cy="8" r="4"/><rect x="28" y="40" width="10" height="24" fill="#333"/></g>' +
      '<rect x="150" y="226" width="100" height="20" rx="3" fill="#111"/>' + txt("WOR-TV", 200, 240, 10, CREAM, 'letter-spacing="1"'));
  }

  /* 4. Style Wars, 1983: a whole car rolling across the el at dusk, painted top to bottom - the window-down pieces, the el structure, a Harlem rooftop line */
  function stylewars() {
    const car = (x, a, b) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="92" width="190" height="56" rx="5" fill="#b8bec8" stroke="#6b7280" stroke-width="2"/>' +
      '<path d="M4 140 Q30 96 62 128 T120 112 T186 130 V146 H4 Z" fill="' + a + '"/>' +
      '<path d="M6 104 q20 -10 40 4 t50 -2 t50 6 t40 -4 v18 h-180 z" fill="' + b + '" opacity=".9"/>' +
      [16, 52, 88, 124, 160].map(wx => '<rect x="' + wx + '" y="100" width="20" height="14" rx="2" fill="#2a3a52" opacity=".85"/>').join("") +
      '<circle cx="24" cy="150" r="5" fill="#111"/><circle cx="166" cy="150" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sw)"/>' + stars(8) +
      '<path d="M0 74 h40 v-14 h30 v20 h50 v-26 h40 v30 h60 v-18 h50 v22 h50 v-12 h80 v80 H0 Z" fill="#2a1f33"/>' +
      '<g class="ff4-el">' + car(0, PURP, GOLD) + car(196, CYAN, RED) + '</g>' +
      '<rect x="0" y="154" width="400" height="10" fill="#3a3a40"/>' +
      [20, 100, 180, 260, 340].map(x => '<path d="M' + x + ' 164 v70 M' + (x + 40) + ' 164 v70 M' + x + ' 170 l40 30 M' + (x + 40) + ' 170 l-40 30" stroke="#4a4a52" stroke-width="5"/>').join("") +
      '<rect x="0" y="234" width="400" height="26" fill="#2a2a30"/>' +
      '<rect x="128" y="10" width="144" height="26" rx="3" fill="#111" stroke="' + PURP + '"/>' + txt("STYLE WARS '83", 200, 28, 13, PURP, 'letter-spacing="2"') +
      '<g class="ff4-spk"><path d="M60 40 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="' + GOLD + '"/></g><g class="ff4-spk ff4-spk3"><path d="M330 50 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="' + CYAN + '"/></g>',
      sky("sw", "#1c1236", "#e0784a"));
  }

  /* 5. Malcolm X Blvd & W 135 St: green signs, the Countee Cullen Library behind, the tag wall */
  function corner() {
    let lib = '<rect x="96" y="44" width="110" height="92" fill="#d8ccb2"/><rect x="96" y="40" width="110" height="6" fill="#bfae8a"/>';
    for (let c = 0; c < 4; c++) for (let r = 0; r < 3; r++) lib += '<path d="M' + (106 + c * 25) + ' ' + (82 + r * 18) + ' v-10 a6 6 0 0 1 12 0 v10 z" class="' + ((c + r) % 3 ? "" : "ff4-bl ff4-bl" + (c % 3 + 1)) + '" fill="#ffd98a" opacity="' + ((c + r) % 3 ? ".35" : ".85") + '"/>';
    let brick = '<rect x="210" y="56" width="96" height="80" fill="#8a3e2c"/>';
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) brick += '<rect x="' + (218 + c * 22) + '" y="' + (64 + r * 17) + '" width="12" height="9" fill="#ffd98a" opacity="' + ((c * r) % 3 ? ".3" : ".7") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fc)"/>' + stars(14) +
      '<rect x="0" y="70" width="92" height="66" fill="#3a2c3e"/><rect x="310" y="62" width="90" height="74" fill="#33283a"/>' +
      lib + brick + txt("COUNTEE CULLEN LIBRARY", 200, 32, 9, CREAM, 'letter-spacing="3" opacity=".8"') +
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("FEARLESS FOUR", 12, 192, 36, PURP, -5) + tag("IT'S MAGIC", 206, 218, 19, GOLD, -4) + tag("HOUSEROCKERS", 20, 220, 14, CYAN, -3) + tag("F-4000", 304, 148, 14, CREAM, -6) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ff4-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="ff4-car ff4-car2"><rect x="0" y="240" width="40" height="12" rx="4" fill="' + PURP + '"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="290" y="66" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Malcolm X Blvd", 343, 82, 11, "#fff") +
      '<rect x="300" y="92" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("W 135 St", 348, 108, 12, "#fff") +
      '<circle class="ff4-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("fc", "#0a0c1a", "#3a2444"));
  }

  window.SCENES = { bus: bus, elektra: elektra, franklin: franklin, stylewars: stylewars, corner: corner };
})();
