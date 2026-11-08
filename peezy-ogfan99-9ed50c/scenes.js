/* peezy scenes (Regions tab: Detroit; east side, Six Mile & Cedargrove). CSS classes and ids prefixed pz- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 6 Gratiot pulling up to the Gratiot & McNichols stop on the east side (McNichols = Six Mile), a block up from Cedargrove St.
   2 Cooley High School on the west side (he moved in with his dad and went to high school there): buff brick, red clay tile roofs, the arched bell tower; a hoop out front ("Shootin' jump shots before I ball").
   3 The Garden Theater on Woodward in Midtown, a show night: cream terra cotta front, the tall blade sign, marquee bulbs chasing.
   4 The Erma Henderson Marina on E Jefferson, east side riverfront ("At the marina on the yacht"): a white yacht bobbing on the Detroit River, dock lights, foreigns parked back-to-back.
   5 Gratiot Ave and Cedargrove St: green signs, PEEZY tagged with TEAM EASTSIDE and 6 MILE on the brick, the new Hudson's tower far down Gratiot behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pzflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.pz-flk{animation:pzflick 2.3s infinite}.pz-flk2{animation-delay:.8s}' +
    '@keyframes pzchase{0%,100%{opacity:.25}50%{opacity:1}}.pz-ch{animation:pzchase .8s steps(1) infinite}.pz-ch2{animation-delay:.4s}' +
    '@keyframes pzglow{0%,100%{opacity:.35}50%{opacity:1}}.pz-gl{animation:pzglow 2s ease-in-out infinite}.pz-gl2{animation-delay:-1s}' +
    '@keyframes pzball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.pz-ball{animation:pzball 1.1s ease-in-out infinite}' +
    '@keyframes pzbob{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(3px) rotate(-1deg)}}.pz-bob{transform-box:fill-box;transform-origin:50% 100%;animation:pzbob 3s ease-in-out infinite}' +
    '@keyframes pzrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.pz-rip{animation:pzrip 3.2s ease-in-out infinite}.pz-rip2{animation-delay:-1.6s}' +
    '@keyframes pzcar{from{transform:translateX(-130px)}to{transform:translateX(520px)}}.pz-car{animation:pzcar 7s linear infinite}.pz-car2{animation-delay:-3.5s}' +
    '@keyframes pzsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(14px,-24px);opacity:0}}.pz-sp{animation:pzsp 1.3s ease-out infinite}.pz-sp2{animation-delay:-.6s}' +
    '@keyframes pzbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.pz-beam{transform-box:fill-box;transform-origin:50% 100%;animation:pzbeam 3.6s ease-in-out infinite}.pz-beam2{animation-delay:-1.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#9be15d", GOLD = "#f2c14e", RED = "#e2574c", DDOT = "#0b6e4f";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 53 + 11) % 400) + '" cy="' + ((i * 29) % 70 + 6) + '" r="1.1" fill="#fff" opacity=".7"/>').join("");
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 56) + '" cy="' + (y + 5) + '" r="2" fill="#fff6c2"/></g>';
  const coupe = (x, y, c) => '<g><path d="M' + x + ' ' + (y + 14) + 'v-7q0 -5 8 -6l10 -7h22l12 7q10 1 10 6v7z" fill="' + c + '"/><path d="M' + (x + 20) + ' ' + (y - 4) + 'h18l8 6h-30z" fill="#bfe3ff" opacity=".8"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 47) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="2" fill="#bbb"/><circle cx="' + (x + 47) + '" cy="' + (y + 14) + '" r="2" fill="#bbb"/></g>';
  const bricks = (y0, h, col) => Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M0 ' + (y0 + i * 8) + 'h400" stroke="' + col + '" stroke-width="1"/>' +
    Array.from({ length: 10 }, (_, j) => '<path d="M' + (j * 44 + (i % 2) * 22) + ' ' + (y0 + i * 8) + 'v8" stroke="' + col + '" stroke-width="1"/>').join("")).join("");
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';

  /* 1. DDOT 6 Gratiot at the Gratiot & McNichols stop */
  function pzstation() {
    const flat = (x, c, l1, l2) => '<rect x="' + x + '" y="70" width="80" height="80" fill="' + c + '"/><rect x="' + (x - 3) + '" y="66" width="86" height="6" fill="#3a2e2a"/>' +
      win(x + 10, 80, 22, 22, l1) + win(x + 48, 80, 22, 22, l2) + win(x + 10, 114, 22, 22, l2) + win(x + 48, 114, 22, 22, l1);
    const store = '<rect x="250" y="76" width="150" height="74" fill="#cfc6b0"/><rect x="250" y="72" width="150" height="8" fill="#7a2a1a"/>' +
      '<rect x="262" y="86" width="84" height="18" fill="#111"/><text x="304" y="99" text-anchor="middle" ' + font + ' font-size="9" fill="' + GREEN + '" class="pz-flk">BEER WINE LOTTO</text>' +
      '<rect x="300" y="116" width="40" height="34" fill="#3a2a20"/><rect x="262" y="110" width="34" height="40" fill="#ffd98a" opacity=".75"/>';
    const bus = '<g class="anim-train"><rect x="30" y="110" width="250" height="76" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="30" y="160" width="250" height="14" fill="' + DDOT + '"/><rect x="30" y="156" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (72 + i * 40) + '" y="120" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="34" y="118" width="32" height="56" rx="3" fill="#2c3a44"/><path d="M50 118v56" stroke="#8a9096"/>' +
      '<rect x="74" y="112" width="160" height="7" rx="2" fill="#111"/><text x="154" y="117.6" text-anchor="middle" ' + font + ' font-size="5.4" fill="#ffb347">6 GRATIOT</text>' +
      '<text x="240" y="171" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DDOT</text>' +
      '<circle cx="86" cy="188" r="14" fill="#1b1b1b"/><circle cx="86" cy="188" r="5" fill="#9aa1a6"/><circle cx="234" cy="188" r="14" fill="#1b1b1b"/><circle cx="234" cy="188" r="5" fill="#9aa1a6"/>' +
      '<circle class="pz-flk" cx="276" cy="176" r="4" fill="#fff6c2"/></g>';
    const pole = '<rect x="374" y="96" width="4" height="110" fill="#666"/><rect x="356" y="78" width="40" height="34" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="376" y="91" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DDOT</text><circle cx="376" cy="102" r="7" fill="#fff"/><text x="376" y="105.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + DDOT + '">6</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#pzs1)"/>' + stars(12) +
      flat(0, "#7a5a48", true, false) + flat(86, "#8a4a3a", false, true) + flat(172, "#6a5a50", true, true) + store +
      '<rect x="0" y="150" width="400" height="56" fill="#55575c"/><rect x="0" y="200" width="400" height="60" fill="#3d4046"/><rect x="0" y="198" width="400" height="4" fill="#c9cdd2"/>' +
      bus + pole +
      '<rect x="62" y="14" width="276" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="31" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">GRATIOT &amp; McNICHOLS</text>' +
      '<rect x="112" y="37" width="34" height="12" rx="6" fill="' + DDOT + '"/><text x="129" y="46" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DDOT</text>' +
      '<rect x="150" y="37" width="14" height="12" rx="6" fill="' + DDOT + '"/><text x="157" y="46" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">6</text>' +
      '<text x="170" y="46" ' + font + ' font-size="8" fill="#cfd3d8">SIX MILE · EAST SIDE · DETROIT</text>',
      sky("pzs1", "#0d1022", "#5a3a5a"));
  }

  /* 2. Cooley High School: buff brick, red tile roofs, the arched tower, a hoop out front */
  function pzcooley() {
    const TILE = "#b8462e", BUFF = "#e2c99a", TRIM = "#c9a06a";
    const roof = (x, y, w) => '<path d="M' + (x - 6) + ' ' + (y + 12) + 'L' + (x + 10) + ' ' + y + 'H' + (x + w - 10) + 'L' + (x + w + 6) + ' ' + (y + 12) + 'z" fill="' + TILE + '"/>' +
      Array.from({ length: Math.floor(w / 8) }, (_, i) => '<path d="M' + (x + 4 + i * 8) + ' ' + (y + 2) + 'v9" stroke="#8a2f1c" stroke-width="1"/>').join("");
    const arch = (x, y, w, h, lit) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'A' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + (x + w) + ' ' + (y + w / 2) + 'V' + (y + h) + 'z" fill="' + (lit ? "#ffd98a" : "#3a3446") + '" stroke="' + TRIM + '" stroke-width="2"/>';
    const wing = (x, w) => '<rect x="' + x + '" y="104" width="' + w + '" height="78" fill="' + BUFF + '"/>' + roof(x, 92, w) +
      Array.from({ length: Math.floor((w - 10) / 26) }, (_, i) => arch(x + 10 + i * 26, 116, 16, 26, i % 2 === 0) + arch(x + 10 + i * 26, 150, 16, 24, i % 2 === 1)).join("");
    const tower = '<rect x="176" y="40" width="48" height="142" fill="' + BUFF + '"/>' +
      '<path d="M170 44L200 18L230 44z" fill="' + TILE + '"/><rect x="170" y="42" width="60" height="6" fill="' + TRIM + '"/>' +
      arch(184, 56, 14, 28, false) + arch(202, 56, 14, 28, false) +
      '<circle class="pz-gl" cx="200" cy="100" r="9" fill="#fff6d8" stroke="' + TRIM + '" stroke-width="2"/><path d="M200 100v-6M200 100l4 2" stroke="#3a3446" stroke-width="1.5"/>' +
      '<path d="M186 182V136A14 14 0 0 1 214 136V182z" fill="#5a3a24" stroke="' + TRIM + '" stroke-width="2"/>' +
      '<rect x="168" y="118" width="64" height="9" fill="#3a3446"/><text x="200" y="125.6" text-anchor="middle" ' + font + ' font-size="6.4" fill="' + GOLD + '">COOLEY HIGH</text>';
    const hoop = '<rect x="330" y="150" width="4" height="74" fill="#777"/><rect x="314" y="136" width="36" height="24" fill="#f4f4f4" stroke="#333" stroke-width="1.5"/><rect x="325" y="145" width="14" height="10" fill="none" stroke="' + RED + '" stroke-width="1.5"/>' +
      '<path d="M322 160h20l-3 12h-14z" fill="none" stroke="#eee" stroke-width="1"/><path d="M320 160h24" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<g class="pz-ball"><circle cx="300" cy="214" r="8" fill="#e07a2a" stroke="#5a2a0a" stroke-width="1.2"/><path d="M292 214h16M300 206v16" stroke="#5a2a0a" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pzs2)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#fff2c4" opacity=".85"/>' +
      '<g fill="#2e5a2e"><circle cx="20" cy="176" r="22"/><circle cx="384" cy="178" r="20"/></g>' +
      wing(26, 150) + wing(224, 150) + tower +
      '<rect x="0" y="182" width="400" height="10" fill="#7aa05a"/><rect x="0" y="192" width="400" height="68" fill="#4a4d52"/>' +
      '<path d="M0 226h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="14 10"/>' + hoop +
      '<rect x="20" y="228" width="210" height="20" rx="3" fill="#111" opacity=".7"/><text x="125" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="' + GREEN + '">JUMP SHOTS BEFORE I BALL</text>',
      sky("pzs2", "#3a6ab0", "#f2b37a"));
  }

  /* 3. The Garden Theater on Woodward, show night */
  function pzgarden() {
    const CREAM = "#efe3c8", TRIM = "#c8b48a";
    const bulbs = (x0, y, n, step) => Array.from({ length: n }, (_, i) => '<circle class="pz-ch' + (i % 2 ? " pz-ch2" : "") + '" cx="' + (x0 + i * step) + '" cy="' + y + '" r="2.2" fill="#fff4c2"/>').join("");
    const facade = '<rect x="70" y="50" width="260" height="150" fill="' + CREAM + '"/><rect x="64" y="44" width="272" height="10" fill="' + TRIM + '"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (68 + i * 20.5) + '" y="38" width="10" height="7" fill="' + TRIM + '"/>').join("") +
      [90, 150, 222, 282].map(x => '<path d="M' + x + ' 128V78A14 14 0 0 1 ' + (x + 28) + ' 78V128z" fill="#3a3040" stroke="' + TRIM + '" stroke-width="2"/><path d="M' + (x + 14) + ' 66V128M' + x + ' 98H' + (x + 28) + '" stroke="' + TRIM + '" stroke-width="1.2"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 32) + '" y="56" width="6" height="146" fill="' + TRIM + '" opacity=".35"/>').join("");
    const blade = '<rect x="188" y="14" width="24" height="112" rx="3" fill="#7a1f2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      'GARDEN'.split("").map((ch, i) => '<text class="pz-flk' + (i % 2 ? " pz-flk2" : "") + '" x="200" y="' + (34 + i * 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">' + ch + '</text>').join("");
    const marquee = '<path d="M84 132H316L306 158H94z" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="146" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TONIGHT · PEEZY</text><text x="200" y="155.5" text-anchor="middle" ' + font + ' font-size="7" fill="' + GREEN + '">STILL GHETTO</text>' +
      bulbs(90, 132, 23, 10) + bulbs(98, 160, 21, 10);
    const doors = '<rect x="110" y="166" width="180" height="34" fill="#2a2230"/>' + [116, 160, 204, 248].map(x => '<rect x="' + x + '" y="170" width="36" height="30" fill="#ffd98a" opacity=".55"/>').join("");
    const crowd = Array.from({ length: 16 }, (_, i) => '<circle class="pz-gl' + (i % 2 ? " pz-gl2" : "") + '" cx="' + (14 + i * 25) + '" cy="' + (214 + (i % 3) * 3) + '" r="7" fill="#1a1a22"/><rect x="' + (8 + i * 25) + '" y="' + (220 + (i % 3) * 3) + '" width="12" height="20" rx="4" fill="#1a1a22"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pzs3)"/>' + stars(18) +
      '<g fill="#22263a"><rect x="0" y="70" width="64" height="130"/><rect x="336" y="60" width="64" height="140"/></g>' +
      facade + blade + marquee + doors +
      '<rect x="0" y="200" width="400" height="60" fill="#3d4046"/><rect x="0" y="198" width="400" height="4" fill="#c9cdd2"/>' + crowd +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="8" fill="#cfd3d8">WOODWARD AVE · MIDTOWN</text>',
      sky("pzs3", "#0a0d1e", "#3a2a5a"));
  }

  /* 4. Erma Henderson Marina on the east riverfront: the yacht bobbing, foreigns back-to-back */
  function pzmarina() {
    const yacht = '<g class="pz-bob"><path d="M120 150H300L284 172H138z" fill="#f8f8f6" stroke="#9aa4ae" stroke-width="1.5"/><path d="M138 172H284" stroke="#1f4e79" stroke-width="3"/>' +
      '<path d="M150 150V134H262L276 150z" fill="#f0f0ee" stroke="#9aa4ae" stroke-width="1.2"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (158 + i * 20) + '" y="138" width="14" height="8" rx="2" fill="#1a2a3a"/>').join("") +
      '<path d="M176 134V120H240L250 134z" fill="#eaeaea" stroke="#9aa4ae" stroke-width="1"/><rect x="186" y="123" width="46" height="7" rx="2" fill="#1a2a3a"/>' +
      '<path d="M212 120V100M212 104h12" stroke="#ccc" stroke-width="1.5"/><circle class="pz-flk" cx="212" cy="99" r="2.5" fill="' + RED + '"/>' +
      '<text x="246" y="166" text-anchor="middle" ' + font + ' font-size="7" fill="#1f4e79">STILL GHETTO</text></g>';
    const water = '<rect x="0" y="150" width="400" height="60" fill="#1a3a5a"/>' +
      [158, 172, 186, 200].map((y, i) => '<path class="pz-rip' + (i % 2 ? " pz-rip2" : "") + '" d="M-20 ' + y + 'q15 -4 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0" stroke="#6aa0d0" stroke-width="1.2" fill="none" opacity=".6"/>').join("");
    const dock = '<rect x="0" y="176" width="110" height="8" fill="#8a6a4a"/>' + [10, 40, 70, 100].map(x => '<rect x="' + x + '" y="166" width="6" height="30" fill="#6a4a30"/><circle class="pz-gl" cx="' + (x + 3) + '" cy="164" r="3" fill="#fff3c4"/>').join("");
    const lot = '<rect x="0" y="210" width="400" height="50" fill="#3d4046"/><rect x="0" y="208" width="400" height="4" fill="#c9cdd2"/>' +
      coupe(20, 224, "#e8e8e8") + coupe(88, 224, "#111") + coupe(156, 224, RED) + coupe(224, 224, "#f2c14e") + coupe(292, 224, "#5a7ab0") + coupe(360, 224, "#2a2a2a");
    const shore = '<g fill="#1e2438"><rect x="0" y="118" width="40" height="32"/><rect x="44" y="104" width="22" height="46"/><rect x="70" y="124" width="60" height="26"/><rect x="300" y="122" width="40" height="28"/><rect x="344" y="110" width="22" height="40"/><rect x="370" y="126" width="30" height="24"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (4 + (i * 29) % 390) + '" y="' + (114 + (i * 7) % 26) + '" width="3" height="3" fill="#ffd98a" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#pzs4)"/>' + '<circle cx="80" cy="60" r="22" fill="#ffcf8a" opacity=".9"/>' +
      shore + water + yacht + dock + lot +
      '<rect x="234" y="14" width="156" height="22" rx="3" fill="#111" opacity=".75"/><text x="312" y="29" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">E JEFFERSON · MARINA</text>',
      sky("pzs4", "#2a2a5a", "#f08a5a"));
  }

  /* 5. Gratiot Ave and Cedargrove St, the Hudson's tower far down Gratiot */
  function pzcorner() {
    const hudson = '<g><path d="M186 132V30L194 22H206L214 30V132z" fill="#3a4e6a"/><path d="M194 22V132M206 22V132" stroke="#5a7090" stroke-width="1"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M188 ' + (36 + i * 8) + 'H212" stroke="#7fa0c8" stroke-width="1" opacity=".6"/>').join("") +
      '<path d="M228 132V70H270V132z" fill="#2e3e56"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M230 ' + (78 + i * 9) + 'H268" stroke="#7fa0c8" stroke-width="1" opacity=".5"/>').join("") +
      '<circle class="pz-flk" cx="200" cy="20" r="3" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#pzs5)"/>' + stars(16) +
      '<g fill="#252838"><rect x="96" y="98" width="40" height="34"/><rect x="140" y="88" width="34" height="44"/><rect x="282" y="94" width="44" height="38"/></g>' + hudson +
      '<rect x="0" y="126" width="400" height="98" fill="#7a4232"/>' + bricks(126, 98, "#643526") +
      tag("PEEZY", 22, 190, 54, GREEN, -6) + tag("TEAM EASTSIDE", 30, 214, 18, GOLD, -3) + tag("6 MILE", 214, 212, 22, RED, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="338" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 128, "Gratiot Ave") + sign(270, 124, 128, "Cedargrove St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="pz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="pz-sp"><circle cx="252" cy="176" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="pz-sp pz-sp2"><circle cx="258" cy="170" r="2" fill="' + GREEN + '" opacity=".6"/></g>' +
      car("pz-car", 0, 240, "#1a1a1a") + car("pz-car pz-car2", 0, 240, "#e8e8e8"),
      sky("pzs5", "#0b1020", "#3a4a7a"));
  }

  window.SCENES = { pzstation: pzstation, pzcooley: pzcooley, pzgarden: pzgarden, pzmarina: pzmarina, pzcorner: pzcorner };
})();
