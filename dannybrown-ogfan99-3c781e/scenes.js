/* dannybrown scenes (Regions tab: Detroit; Linwood / Dexter-Linwood, west side). CSS classes prefixed db- (the page's own anim-train is kept).
   1 DDOT Route 29 Linwood pulling up to the Joy & Linwood stop, two-flats and a corner church on Linwood St at dusk.
   2 Hamtramck Disneyland (Dmytro Szylak's backyard folk-art tower in Hamtramck, where Danny lived when XXX broke): painted towers, spinning whirligigs, little planes, flags.
   3 The Majestic Theatre on Woodward (home of Bruiser Thanksgiving): cream Art Deco enamel-panel front, chasing marquee bulbs, crowd bobbing.
   4 The Bruiser Brigade house: a tall Detroit brick house that is home and studio at once, upstairs studio window glowing, speaker pulsing.
   5 Linwood St and W Chicago Blvd: green signs, DANNY BROWN tagged, Sacred Heart Major Seminary's brick Gothic tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dbflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.db-flk{animation:dbflick 2.4s infinite}.db-flk2{animation-delay:.8s}' +
    '@keyframes dbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.db-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dbspin 1.6s linear infinite}.db-spin2{animation-duration:1.1s;animation-direction:reverse}.db-spin3{animation-duration:2.2s}' +
    '@keyframes dbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.db-flag{transform-box:fill-box;transform-origin:0 50%;animation:dbflag 1.4s ease-in-out infinite}' +
    '@keyframes dbbulb{0%,100%{opacity:1}50%{opacity:.25}}.db-b{animation:dbbulb .8s steps(1) infinite}.db-b2{animation-delay:-.4s}' +
    '@keyframes dbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.db-bob{animation:dbbob .7s ease-in-out infinite}.db-bob2{animation-delay:-.35s}' +
    '@keyframes dbpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.db-pulse{transform-box:fill-box;transform-origin:50% 50%;animation:dbpulse .5s ease-in-out infinite}' +
    '@keyframes dbwave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.8);opacity:0}}.db-wave{transform-box:fill-box;transform-origin:50% 50%;animation:dbwave 1.4s ease-out infinite}.db-wave2{animation-delay:-.7s}' +
    '@keyframes dbcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.db-car{animation:dbcar 6s linear infinite}.db-car2{animation-delay:-3s}' +
    '@keyframes dbsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.db-sp{animation:dbsp 1.3s ease-out infinite}.db-sp2{animation-delay:-.6s}' +
    '@keyframes dbtw{0%,100%{opacity:.25}50%{opacity:1}}.db-tw{animation:dbtw 1.6s ease-in-out infinite}.db-tw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", GOLD = "#ffcc33", PINK = "#ff4f6d", TEAL = "#5ad1c8";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';

  /* 1. DDOT 29 Linwood at Joy & Linwood */
  function dbstation() {
    const flat = (x, c) => '<rect x="' + x + '" y="58" width="84" height="88" fill="' + c + '"/><path d="M' + (x - 4) + ' 58h92l-46 -24z" fill="#3a2e2a"/>' +
      win(x + 10, 70, 22, 22, true) + win(x + 52, 70, 22, 22, false) + win(x + 10, 104, 22, 22, false) + win(x + 52, 104, 22, 22, true) +
      '<rect x="' + (x - 2) + '" y="96" width="88" height="5" fill="#e8e0cc"/>';
    const church = '<rect x="292" y="40" width="108" height="106" fill="#9a4a36"/><rect x="318" y="8" width="34" height="138" fill="#8a3e2c"/><path d="M318 8l17 -20l17 20z" fill="#5a2a20"/>' +
      '<path d="M327 50q8 -14 16 0v26h-16z" fill="#c9a24a" class="db-flk"/><path d="M302 70q10 -16 20 0v36h-20zM366 70q10 -16 20 0v36h-20z" fill="#7a5aa8" opacity=".85"/>' +
      '<path d="M335 16v18M328 23h14" stroke="#e8e0cc" stroke-width="2.5"/>';
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="' + GOLD + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="56" height="8" rx="2" fill="#111"/><text x="66" y="112.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">29 LINWOOD</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs1)"/>' +
      '<circle cx="60" cy="30" r="1.4" fill="#fff" class="db-tw"/><circle cx="150" cy="18" r="1.2" fill="#fff" class="db-tw db-tw2"/><circle cx="250" cy="26" r="1.3" fill="#fff" class="db-tw"/>' +
      flat(4, "#7a5a48") + flat(96, "#8c6e5a") + flat(188, "#6e5240") + church +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("db-car", 0, 238, PINK) + car("db-car db-car2", 0, 238, "#d6d6d6") +
      '<rect x="306" y="100" width="5" height="92" fill="#555"/><rect x="290" y="88" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="103" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="296" y="114" width="26" height="14" rx="3" fill="' + GOLD + '"/><text x="309" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#111">29</text>' +
      '<rect x="230" y="200" width="160" height="26" rx="3" fill="#111"/><text x="242" y="218" ' + font + ' font-size="14" fill="#fff">Joy &amp; Linwood</text>' +
      '<rect x="356" y="205" width="26" height="16" rx="3" fill="' + DDOT + '"/><text x="369" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">29</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 29 · LINWOOD · WEST SIDE</text>',
      sky("dbs1", "#20163e", "#d9707a"));
  }

  /* 2. Hamtramck Disneyland, folk-art towers in a Hamtramck backyard */
  function dbdisney() {
    const prop = (cx, cy, r, c, cls) => '<g class="db-spin ' + (cls || "") + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none"/>' +
      [0, 90, 180, 270].map(a => '<path d="M' + cx + ' ' + cy + 'l' + (r * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (r * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>').join("") +
      '<circle cx="' + cx + '" cy="' + cy + '" r="2.5" fill="#fff"/></g>';
    const plane = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="30" height="7" rx="3" fill="' + c + '"/><rect x="' + (x + 10) + '" y="' + (y - 6) + '" width="7" height="19" rx="2" fill="#fff"/><path d="M' + x + ' ' + (y + 3) + 'l-6 -6v12z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs2)"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5f8a4a"/><rect x="0" y="146" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="12" y="96" width="70" height="56" fill="#c9b8a0"/><path d="M8 96h78l-39 -26z" fill="#6e5a4a"/>' + win(30, 110, 18, 18, false) +
      '<rect x="320" y="104" width="76" height="48" fill="#b9a890"/><path d="M316 104h84l-42 -22z" fill="#5a4a3a"/>' +
      /* garage-roof platform and painted towers */
      '<rect x="96" y="120" width="210" height="32" fill="#e8e0cc"/><rect x="96" y="114" width="210" height="8" fill="#1f5fae"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (100 + i * 21) + '" y="126" width="12" height="20" fill="' + ["#e8402a", "#ffcc33", "#1f5fae", "#3aa655"][i % 4] + '"/>').join("") +
      '<rect x="120" y="56" width="10" height="58" fill="#ffcc33"/><rect x="176" y="34" width="12" height="80" fill="#e8402a"/><rect x="238" y="60" width="10" height="54" fill="#1f5fae"/><rect x="276" y="76" width="8" height="38" fill="#3aa655"/>' +
      '<path d="M120 56h10M176 34h12" stroke="#fff" stroke-width="3"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (176) + '" y="' + (42 + i * 12) + '" width="12" height="4" fill="#fff"/>').join("") +
      '<path d="M110 84h130M150 64h60M226 92h66" stroke="#fff" stroke-width="2.5"/>' +
      prop(125, 50, 14, "#e8402a") + prop(182, 26, 16, "#1f5fae", "db-spin2") + prop(243, 54, 13, "#ffcc33", "db-spin3") + prop(280, 70, 10, "#ff4f6d", "db-spin2") +
      plane(140, 78, "#1f5fae") + plane(200, 60, "#3aa655") + plane(250, 86, "#e8402a") +
      '<g class="db-flag"><rect x="188" y="92" width="22" height="7" fill="#0057b7"/><rect x="188" y="99" width="22" height="7" fill="#ffd700"/></g><path d="M188 90v28" stroke="#555" stroke-width="2"/>' +
      '<g class="db-flag"><rect x="132" y="96" width="22" height="14" fill="#fff"/><rect x="132" y="96" width="9" height="7" fill="#1f3a8a"/><path d="M141 98h13M141 101h13M132 105h22M132 108h22" stroke="#c8202a" stroke-width="1.4"/></g><path d="M132 94v24" stroke="#555" stroke-width="2"/>' +
      '<rect x="80" y="152" width="250" height="4" fill="#7a5a3a"/>' + Array.from({ length: 14 }, (_, i) => '<rect x="' + (82 + i * 18) + '" y="146" width="6" height="22" fill="#9a7a5a"/>').join("") +
      '<rect x="110" y="200" width="180" height="26" rx="3" fill="#111"/><text x="200" y="218" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">HAMTRAMCK DISNEYLAND</text>',
      sky("dbs2", "#5ab0e8", "#cfeaf7"));
  }

  /* 3. The Majestic Theatre on Woodward, Bruiser Thanksgiving night */
  function dbmajestic() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle class="db-b' + (i % 2 ? " db-b2" : "") + '" cx="' + (92 + i * 10.4) + '" cy="120" r="2.6" fill="#fff3b0"/>').join("") +
      Array.from({ length: 22 }, (_, i) => '<circle class="db-b' + (i % 2 ? "" : " db-b2") + '" cx="' + (92 + i * 10.4) + '" cy="158" r="2.6" fill="#fff3b0"/>').join("");
    const fan = (x, c, cls) => '<g class="db-bob ' + (cls || "") + '"><circle cx="' + x + '" cy="210" r="7" fill="' + c + '"/><rect x="' + (x - 8) + '" y="217" width="16" height="22" rx="5" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs3)"/>' +
      '<rect x="40" y="30" width="320" height="170" fill="#efe6cf"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (52 + i * 36) + '" y="36" width="10" height="70" fill="#d8ccae"/>').join("") +
      '<path d="M40 30h320" stroke="#1d6b66" stroke-width="6"/><path d="M40 108h320" stroke="#1d6b66" stroke-width="4"/>' +
      '<path d="M170 30l30 -16l30 16z" fill="#1d6b66"/><path d="M186 30l14 -8l14 8z" fill="' + GOLD + '"/>' +
      '<rect x="330" y="20" width="22" height="96" rx="3" fill="#b8282e"/>' + "MAJESTIC".split("").map((ch, i) => '<text x="341" y="' + (33 + i * 11) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3b0" class="db-flk">' + ch + '</text>').join("") +
      '<rect x="84" y="114" width="232" height="50" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="137" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">BRUISER THANKSGIVING</text>' +
      '<text x="200" y="152" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TONIGHT · SOLD OUT</text>' +
      '<rect x="110" y="168" width="40" height="32" fill="#2a1e1a"/><rect x="180" y="168" width="40" height="32" fill="#2a1e1a"/><rect x="250" y="168" width="40" height="32" fill="#2a1e1a"/>' +
      '<rect x="114" y="172" width="32" height="26" fill="#ffd98a" opacity=".55" class="db-flk"/><rect x="184" y="172" width="32" height="26" fill="#ffd98a" opacity=".55" class="db-flk db-flk2"/><rect x="254" y="172" width="32" height="26" fill="#ffd98a" opacity=".55" class="db-flk"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55534d"/>' +
      fan(70, "#2a2440") + fan(98, "#3a2a2a", "db-bob2") + fan(126, "#1f2a3a") + fan(154, "#3a3a2a", "db-bob2") + fan(246, "#2a2440") + fan(274, "#3a2a3a", "db-bob2") + fan(302, "#1f3a2a") + fan(330, "#2a2a3a", "db-bob2") +
      '<rect x="120" y="242" width="160" height="16" rx="3" fill="#111"/><text x="200" y="253.5" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">WOODWARD AVE · MIDTOWN</text>',
      sky("dbs3", "#0e1030", "#4a2a5a"));
  }

  /* 4. The Bruiser Brigade house: home and studio in one */
  function dbhouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#dbs4)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#f4eccf"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3a5a32"/><rect x="0" y="232" width="400" height="28" fill="#5d5a55"/>' +
      '<rect x="100" y="70" width="200" height="130" fill="#8a3e2c"/><path d="M92 72l108 -52l108 52z" fill="#3a2e2a"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M100 ' + (78 + i * 8) + 'h200" stroke="#6e2e20" stroke-width="1"/>').join("") +
      '<rect x="180" y="34" width="40" height="30" fill="#ffd98a" stroke="#e8e0cc" stroke-width="2" class="db-flk"/>' +
      /* studio window upstairs: mic + monitor + waveform */
      '<rect x="120" y="84" width="76" height="46" fill="#1a2440" stroke="#e8e0cc" stroke-width="2"/>' +
      '<path d="M140 96v18" stroke="#ccc" stroke-width="2"/><rect x="136" y="90" width="8" height="10" rx="4" fill="#ddd"/><path d="M132 114h16" stroke="#ccc" stroke-width="2"/>' +
      '<g transform="translate(166 108)">' + [6, 12, 18, 10, 14, 7].map((h, i) => '<rect x="' + (i * 4 - 12) + '" y="' + (-h / 2) + '" width="2.5" height="' + h + '" fill="' + TEAL + '" class="db-pulse"/>').join("") + '</g>' +
      '<rect x="210" y="84" width="70" height="46" fill="#ffd98a" stroke="#e8e0cc" stroke-width="2" opacity=".9"/><path d="M245 84v46M210 107h70" stroke="#e8e0cc" stroke-width="1.5"/>' +
      '<rect x="210" y="140" width="34" height="46" fill="#ffd98a" stroke="#e8e0cc" stroke-width="2" opacity=".75"/><rect x="254" y="140" width="32" height="56" fill="#3a2a20"/><circle cx="280" cy="170" r="2" fill="' + GOLD + '"/>' +
      '<rect x="88" y="186" width="224" height="10" fill="#d8d4cb"/><rect x="88" y="132" width="8" height="58" fill="#e8e0cc"/><rect x="304" y="132" width="8" height="58" fill="#e8e0cc"/><rect x="84" y="128" width="232" height="8" fill="#e8e0cc"/>' +
      /* banner + speaker on the porch */
      '<rect x="112" y="142" width="88" height="34" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="156" y="156" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">BRUISER</text><text x="156" y="170" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">BRIGADE</text>' +
      '<rect x="40" y="150" width="34" height="46" rx="3" fill="#1a1a1a"/><circle cx="57" cy="182" r="9" fill="#333" class="db-pulse"/><circle cx="57" cy="162" r="5" fill="#333"/>' +
      '<circle cx="57" cy="182" r="12" fill="none" stroke="' + TEAL + '" stroke-width="2" class="db-wave"/><circle cx="57" cy="182" r="12" fill="none" stroke="' + TEAL + '" stroke-width="2" class="db-wave db-wave2"/>' +
      '<rect x="110" y="214" width="180" height="22" rx="3" fill="#111"/><text x="200" y="229" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">WE LIVE AT THE STUDIO</text>',
      sky("dbs4", "#141a3a", "#4a3a6a"));
  }

  /* 5. Linwood St and W Chicago Blvd, the seminary tower behind */
  function dbcorner() {
    const sem = '<g opacity=".95"><rect x="150" y="60" width="200" height="70" fill="#8a3e2c"/><rect x="226" y="10" width="48" height="120" fill="#7e3828"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (226 + i * 8) + '" y="2" width="5" height="10" fill="#c9bfa6"/>').join("") +
      '<rect x="222" y="0" width="5" height="18" fill="#c9bfa6"/><rect x="273" y="0" width="5" height="18" fill="#c9bfa6"/>' +
      '<path d="M240 40q10 -16 20 0v40h-20z" fill="#e8d8a0" class="db-flk"/><path d="M226 30h48M226 92h48" stroke="#c9bfa6" stroke-width="3"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M' + (160 + i * 14) + ' 80q5 -8 10 0v24h-10z" fill="#e8d8a0" opacity=".8"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (288 + i * 14) + ' 80q5 -8 10 0v24h-10z" fill="#e8d8a0" opacity=".8"/>').join("") +
      '<path d="M150 60h76M274 60h76" stroke="#c9bfa6" stroke-width="3"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs5)"/>' + sem +
      '<rect x="0" y="130" width="400" height="94" fill="#5a4a6a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#463a54" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#463a54" stroke-width="1"/>').join("")).join("") +
      tag("DANNY BROWN", 22, 184, 30, GOLD, -6) + tag("BRUISER BRIGADE", 22, 214, 16, PINK, -3) + tag("THE HYBRID", 168, 216, 16, TEAL, -4) +
      '<g class="db-sp"><circle cx="232" cy="164" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="db-sp db-sp2"><circle cx="238" cy="156" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(286, 112, 112, "Linwood St") + sign(268, 138, 130, "W Chicago Blvd") +
      '<rect x="392" y="200" width="4" height="24" fill="#222"/>',
      sky("dbs5", "#1e1440", "#e2788a"));
  }

  window.SCENES = { dbstation: dbstation, dbdisney: dbdisney, dbmajestic: dbmajestic, dbhouse: dbhouse, dbcorner: dbcorner };
})();
