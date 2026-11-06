/* Monie Love game (NYC map, Brooklyn: Flatbush. Simone Wilson came over from London in 1988 and her family lived on East 28th St off
   Clarendon Rd; she did a stint at the local high school (Questlove Supreme interview)).
   The B44 pulling up at Nostrand Av & Clarendon Rd, the four white chimneys at Battersea on the Thames (the South London she was born in),
   the canal lock in North London where she met the Jungle Brothers at Dingwalls in 1988 (her way into the Native Tongues),
   Paisley Park in Chanhassen, Minnesota (Prince produced "Born 2 B.R.E.E.D." and "In a Word or 2" with her),
   and E 28 St & Clarendon Rd with the bell tower of St. Jerome's on Nostrand Av behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mlcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ml-car{animation:mlcar 7s linear infinite}.ml-car2{animation-delay:-3.5s}' +
    '@keyframes mlblink{0%,100%{opacity:.25}50%{opacity:1}}.ml-bl{animation:mlblink 1.6s ease-in-out infinite}.ml-bl2{animation-delay:.5s}.ml-bl3{animation-delay:1s}' +
    '@keyframes mlflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.ml-flk{animation:mlflick 2.4s infinite}' +
    '@keyframes mlsteam{0%{transform:translate(0,0) scale(.6);opacity:.0}20%{opacity:.75}100%{transform:translate(26px,-46px) scale(1.6);opacity:0}}.ml-st{transform-box:fill-box;transform-origin:50% 100%;animation:mlsteam 4s ease-out infinite}.ml-st2{animation-delay:-1s}.ml-st3{animation-delay:-2s}.ml-st4{animation-delay:-3s}' +
    '@keyframes mlripple{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.ml-rip{animation:mlripple 3s ease-in-out infinite}.ml-rip2{animation-delay:-1.5s}' +
    '@keyframes mlboat{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.ml-boat{animation:mlboat 14s linear infinite}' +
    '@keyframes mlsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.ml-beam{transform-box:fill-box;transform-origin:50% 100%;animation:mlsweep 3.4s ease-in-out infinite}.ml-beam2{animation-delay:-1.7s}' +
    '@keyframes mltw{0%,100%{opacity:.2}50%{opacity:1}}.ml-tw{animation:mltw 2s ease-in-out infinite}.ml-tw2{animation-delay:.7s}.ml-tw3{animation-delay:1.4s}' +
    '@keyframes mlnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.ml-note{animation:mlnote 3s ease-out infinite}.ml-note2{animation-delay:-1s}.ml-note3{animation-delay:-2s}' +
    '@keyframes mlswing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.ml-bell{transform-box:fill-box;transform-origin:50% 0%;animation:mlswing 1.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ml-tw ml-tw' + (i % 3 + 1) + '" cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcf3f", PINK = "#ff5fa2", TEAL = "#3fd0c9", CREAM = "#f4ead8", BUS = "#0039a6", PURPLE = "#8a4dff";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a little silhouette person (no face) */
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const tree = (x, y, s) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (44 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="' + (18 * s) + '" fill="#2f5a34"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 4) + '" r="' + (12 * s) + '" fill="#386b3d"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 2) + '" r="' + (12 * s) + '" fill="#2a5230"/>';

  /* 1. Nostrand Av & Clarendon Rd, Flatbush: the B44 pulling up, the blue bus-stop sign, two-family brick houses with stoops and awnings */
  function b44() {
    let win = "";
    for (let x = 52; x < 250; x += 30) win += '<rect x="' + x + '" y="148" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    const house = (x, w, h, col, aw) => { let g = '<rect x="' + x + '" y="' + (170 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + (x - 3) + '" y="' + (166 - h) + '" width="' + (w + 6) + '" height="6" fill="#2e2320"/>';
      for (let yy = 180 - h; yy < 146; yy += 22) for (let xx = x + 10; xx < x + w - 12; xx += 22) g += '<rect class="ml-bl ml-bl' + ((xx + yy) % 3 + 1) + '" x="' + xx + '" y="' + yy + '" width="11" height="13" fill="#ffd98a" opacity=".8"/>';
      g += '<path d="M' + (x + 8) + ' ' + (150) + 'h' + (w - 16) + 'l-6 8h-' + (w - 28) + 'z" fill="' + aw + '"/>';
      return g; };
    return svg(
      '<rect width="400" height="260" fill="url(#mlb)"/>' + stars(10) +
      house(0, 92, 108, "#9a5a3e", TEAL) + house(98, 84, 94, "#b8835a", PINK) + house(188, 104, 116, "#7e4636", GOLD) + house(298, 102, 100, "#a56b4c", TEAL) +
      tree(96, 124, 1) + tree(296, 120, 0.9) +
      '<rect x="34" y="16" width="282" height="30" rx="3" fill="#111"/><rect x="34" y="16" width="282" height="3" fill="#fff"/>' +
      '<text x="46" y="37" ' + font + ' font-size="14" fill="#fff">Nostrand Av &amp; Clarendon Rd</text>' +
      '<rect x="0" y="170" width="400" height="16" fill="#8a8c90"/><rect x="0" y="186" width="400" height="74" fill="#3f4146"/>' +
      '<path d="M0 226h40M70 226h40M140 226h40M210 226h40M280 226h40M350 226h40" stroke="#e8d36a" stroke-width="3"/>' +
      /* the B44 */
      '<g class="anim-train">' +
        '<rect x="40" y="136" width="250" height="62" rx="8" fill="#f2f4f7" stroke="#8b939e" stroke-width="2"/>' + win +
        '<rect x="40" y="174" width="250" height="7" fill="' + BUS + '"/>' +
        '<rect x="262" y="142" width="24" height="30" rx="3" fill="#cfe2f5"/>' +
        '<rect x="214" y="136" width="74" height="10" rx="2" fill="#111"/><text x="251" y="144.3" text-anchor="middle" ' + font + ' font-size="6.8" fill="#ffb000">B44 NOSTRAND AV</text>' +
        '<circle cx="80" cy="198" r="10" fill="#1b1b1f"/><circle cx="80" cy="198" r="4" fill="#777"/><circle cx="246" cy="198" r="10" fill="#1b1b1f"/><circle cx="246" cy="198" r="4" fill="#777"/>' +
        '<circle class="ml-flk" cx="286" cy="186" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="340" y="104" width="4" height="82" fill="#7d858f"/>' +
      '<rect x="314" y="86" width="56" height="40" rx="4" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS STOP</text>' +
      '<rect x="322" y="107" width="40" height="13" rx="3" fill="#fff"/><text x="342" y="117.5" text-anchor="middle" ' + font + ' font-size="10.5" fill="' + BUS + '">B44</text>' +
      person(376, 152, "#1d1d22") +
      txt("FLATBUSH · BROOKLYN", 165, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("mlb", "#14122a", "#6a3a62"));
  }

  /* 2. Battersea, South London: the big brick building with its four white fluted chimneys, steam drifting off, the Thames rippling in front */
  function battersea() {
    const chimney = (x) => '<path d="M' + (x - 9) + ' 120L' + (x - 7) + ' 36h14L' + (x + 9) + ' 120z" fill="#f1efe8" stroke="#b9b4a8" stroke-width="1"/>' +
      '<path d="M' + (x - 3) + ' 40v78M' + (x + 3) + ' 40v78" stroke="#cfcabd" stroke-width="1.2"/>' +
      '<rect x="' + (x - 8) + '" y="34" width="16" height="5" fill="#d8d3c6"/>';
    const puff = (x, cls) => '<circle class="ml-st ' + cls + '" cx="' + x + '" cy="30" r="7" fill="#e9e6ef" opacity=".7"/>';
    let brick = "";
    for (let y = 104; y < 176; y += 7) brick += '<path d="M70 ' + y + 'h260" stroke="#7a3d2a" stroke-width=".8" opacity=".55"/>';
    let ribs = "";
    for (let x = 84; x < 320; x += 12) ribs += '<rect x="' + x + '" y="108" width="3" height="66" fill="#8d4a33" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mlbt)"/>' +
      '<circle cx="330" cy="40" r="18" fill="#ffd9a0" opacity=".85"/>' +
      puff(100, "") + puff(100, "ml-st2") + puff(300, "ml-st3") + puff(300, "ml-st4") + puff(130, "ml-st3") + puff(270, "ml-st2") +
      /* main block with the corner towers */
      '<rect x="70" y="100" width="260" height="76" fill="#a2563b"/>' + brick + ribs +
      '<rect x="80" y="112" width="36" height="64" fill="#94492f"/><rect x="284" y="112" width="36" height="64" fill="#94492f"/>' +
      '<rect x="150" y="84" width="100" height="92" fill="#ad5f42"/>' +
      (() => { let w = ""; for (let x = 160; x < 240; x += 16) w += '<rect x="' + x + '" y="96" width="8" height="66" fill="#6d2f1f"/>'; return w; })() +
      chimney(100) + chimney(130) + chimney(270) + chimney(300) +
      /* river wall and the Thames */
      '<rect x="0" y="176" width="400" height="10" fill="#6f6a62"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3e5468"/>' +
      '<g class="ml-rip"><path d="M10 204h50M110 212h60M220 202h46M320 214h54M40 232h70M180 240h60M300 236h70" stroke="#9bb7cc" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="ml-rip ml-rip2"><path d="M70 222h40M250 226h40M150 250h50" stroke="#c8dbe8" stroke-width="2" stroke-linecap="round" opacity=".5"/></g>' +
      txt("BATTERSEA · SOUTH LONDON", 200, 250, 11, CREAM, 'letter-spacing="3"'),
      sky("mlbt", "#2b3550", "#d68a6a"));
  }

  /* 3. The canal lock in North London, '88: black-and-white lock-gate beams, the old brick warehouse with the music hall in it,
        a narrowboat sliding along the water. Monie met the Jungle Brothers at a show in there. */
  function lock() {
    let brick = "";
    for (let y = 70; y < 160; y += 8) brick += '<path d="M150 ' + y + 'h240" stroke="#5e2f22" stroke-width=".8" opacity=".6"/>';
    let arches = "";
    for (let x = 166; x < 380; x += 44) arches += '<path d="M' + x + ' 150v-28a14 14 0 0 1 28 0v28z" fill="#ffcf7a" class="ml-bl ml-bl' + (x % 3 + 1) + '"/><path d="M' + (x + 14) + ' 108v42" stroke="#5e2f22" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mllk)"/>' + stars(14) +
      /* the warehouse */
      '<rect x="150" y="60" width="240" height="100" fill="#8a4630"/>' + brick + arches +
      '<rect x="150" y="56" width="240" height="6" fill="#3b2218"/>' +
      '<rect x="196" y="70" width="148" height="20" rx="2" fill="#111"/>' +
      txt("DINGWALLS", 270, 85, 13, PINK, 'letter-spacing="4" class="ml-flk"') +
      /* towpath + water */
      '<rect x="0" y="160" width="400" height="12" fill="#6b6460"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#22343a"/>' +
      '<g class="ml-rip"><path d="M20 196h40M150 206h50M260 194h40M330 214h50M60 238h60" stroke="#6e8f96" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      /* the narrowboat */
      '<g class="ml-boat"><path d="M0 214h150l10-10v14l-10 6h-146z" fill="#1d4d2e"/><rect x="18" y="196" width="112" height="18" fill="#c0392b"/>' +
      (() => { let w = ""; for (let x = 26; x < 124; x += 18) w += '<rect x="' + x + '" y="200" width="10" height="8" rx="1" fill="#ffe59a"/>'; return w; })() +
      '<rect x="18" y="194" width="112" height="3" fill="' + GOLD + '"/></g>' +
      /* the lock gates: black beams with white tips */
      '<rect x="0" y="120" width="146" height="52" fill="#4b4642"/>' +
      '<path d="M8 160L120 132" stroke="#111" stroke-width="9" stroke-linecap="round"/><path d="M104 136L124 131" stroke="#f4f4f4" stroke-width="9" stroke-linecap="round"/>' +
      '<path d="M30 172L136 148" stroke="#111" stroke-width="9" stroke-linecap="round"/><path d="M118 152L138 147" stroke="#f4f4f4" stroke-width="9" stroke-linecap="round"/>' +
      '<rect x="56" y="124" width="8" height="40" fill="#111"/><rect x="56" y="124" width="8" height="8" fill="#f4f4f4"/>' +
      person(24, 96, "#1d1d22") + person(118, 92, "#2a2a30") +
      '<g class="ml-note"><text x="336" y="50" font-size="16" fill="' + GOLD + '">♪</text></g><g class="ml-note ml-note2"><text x="358" y="52" font-size="14" fill="' + TEAL + '">♫</text></g><g class="ml-note ml-note3"><text x="380" y="48" font-size="13" fill="' + PINK + '">♪</text></g>' +
      txt("THE LOCK · NORTH LONDON '88", 200, 24, 11, CREAM, 'letter-spacing="2"'),
      sky("mllk", "#0d1022", "#3a2a4a"));
  }

  /* 4. Paisley Park, Chanhassen, Minnesota: the long pale studio complex with its glass pyramid skylights, purple light sweeping the night */
  function paisley() {
    return svg(
      '<rect width="400" height="260" fill="url(#mlpp)"/>' + stars(22) +
      '<path class="ml-beam" d="M120 176L96 20h48z" fill="' + PURPLE + '" opacity=".28"/>' +
      '<path class="ml-beam ml-beam2" d="M280 176L256 20h48z" fill="' + PURPLE + '" opacity=".28"/>' +
      /* snowy ground */
      '<rect x="0" y="176" width="400" height="84" fill="#dfe4f0"/><path d="M0 190q100-10 200 0t200 0v70H0z" fill="#c9d0e2"/>' +
      /* building blocks */
      '<rect x="40" y="110" width="120" height="70" fill="#eef0f4" stroke="#aab1c2" stroke-width="1.5"/>' +
      '<rect x="160" y="96" width="110" height="84" fill="#f6f7fa" stroke="#aab1c2" stroke-width="1.5"/>' +
      '<rect x="270" y="118" width="96" height="62" fill="#e6e9f0" stroke="#aab1c2" stroke-width="1.5"/>' +
      (() => { let p = ""; for (let x = 50; x < 360; x += 24) p += '<path d="M' + x + ' ' + (x < 160 ? 110 : x < 270 ? 96 : 118) + 'v' + (x < 160 ? 70 : x < 270 ? 84 : 62) + '" stroke="#d3d8e3" stroke-width="1"/>'; return p; })() +
      /* glass pyramids on the roof */
      '<path d="M70 110l18-22l18 22z" fill="#7fb4e8" stroke="#5a7fa8"/><path d="M196 96l20-26l20 26z" fill="#a98cff" stroke="#6b55b5"/><path d="M300 118l16-20l16 20z" fill="#7fb4e8" stroke="#5a7fa8"/>' +
      /* glass entry + purple glow */
      '<rect x="196" y="140" width="40" height="40" fill="#2a1f4a"/><rect x="200" y="144" width="32" height="36" fill="' + PURPLE + '" opacity=".55" class="ml-flk"/>' +
      '<rect x="60" y="140" width="80" height="10" fill="#c3c9d8"/><rect x="290" y="142" width="60" height="10" fill="#c3c9d8"/>' +
      txt("PAISLEY PARK", 200, 30, 15, "#e7dcff", 'letter-spacing="5"') +
      txt("CHANHASSEN · MINNESOTA", 200, 46, 9, CREAM, 'letter-spacing="3" opacity=".85"') +
      '<g class="ml-car"><rect x="0" y="214" width="46" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="227" r="4" fill="#111"/><circle cx="36" cy="227" r="4" fill="#111"/></g>',
      sky("mlpp", "#0a0820", "#3b1f63"));
  }

  /* 5. E 28 St & Clarendon Rd, Flatbush: green street signs, the wall tagged MONIE LOVE, St. Jerome's bell tower on Nostrand Av behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mlc)"/>' + stars(16) +
      /* the church: tan brick nave + square bell tower */
      '<rect x="60" y="78" width="150" height="70" fill="#b98f62"/><path d="M60 78l75-30l75 30z" fill="#7a5a3c"/>' +
      '<circle cx="135" cy="98" r="14" fill="#2a2440" stroke="#e0c08a" stroke-width="3"/><circle cx="135" cy="98" r="5" fill="' + GOLD + '" opacity=".7"/>' +
      '<rect x="212" y="30" width="44" height="118" fill="#c49c6c"/><path d="M208 30l26-24l26 24z" fill="#6f5236"/>' +
      '<rect x="224" y="46" width="20" height="26" rx="10" fill="#1d1a2c"/>' +
      '<g class="ml-bell"><path d="M228 52h12l3 12h-18z" fill="' + GOLD + '"/></g>' +
      '<rect x="226" y="86" width="16" height="22" rx="8" fill="#ffd98a" class="ml-bl ml-bl2"/>' +
      '<path d="M234 4v-2" stroke="#e0c08a" stroke-width="2"/><path d="M231 4h6M234 1v8" stroke="#e0c08a" stroke-width="2"/>' +
      txt("ST. JEROME'S", 234, 160, 8, CREAM, 'letter-spacing="2" opacity=".85"') +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("MONIE LOVE", 16, 196, 44, PINK, -5) + tag("GO MON MON", 214, 218, 18, GOLD, -4) + tag("SIMONE", 30, 222, 15, TEAL, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ml-car ml-car2"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + TEAL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 28 St", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Clarendon Rd", 346, 108, 12, "#fff") +
      '<circle class="ml-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("mlc", "#0a0c1a", "#3a2a48"));
  }

  window.SCENES = { b44, battersea, lock, paisley, corner };
})();
