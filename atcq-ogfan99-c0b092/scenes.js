/* A Tribe Called Quest game (NYC map, Queens: St. Albans). Q-Tip, Phife Dawg, Ali Shaheed Muhammad and Jarobi.
   Rooms: the Q4 pulling up at Linden Blvd & 196 St, the summer '94 main stage at Downing Stadium on Randalls Island (their Lollapalooza tour stop),
   Q-Tip's home studio in Englewood Cliffs NJ where the last album got made (2016), the Los Angeles awards-show stage where they did "We the People...."
   in Feb 2017, and Linden Blvd & 196 St with the old red-brick firehouse of Engine 317 down the block. 400 x 260 SVGs. CSS classes prefixed "tq-". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tqcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.tq-car{animation:tqcar 7.5s linear infinite}.tq-car2{animation-delay:-3.7s}' +
    '@keyframes tqblink{0%,100%{opacity:.25}50%{opacity:1}}.tq-bl{animation:tqblink 1.6s ease-in-out infinite}.tq-bl2{animation-delay:.5s}.tq-bl3{animation-delay:1s}' +
    '@keyframes tqflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.tq-flk{animation:tqflick 2.6s infinite}' +
    '@keyframes tqplane{from{transform:translate(-60px,20px)}to{transform:translate(460px,-30px)}}.tq-plane{animation:tqplane 9s linear infinite}' +
    '@keyframes tqspin{to{transform:rotate(360deg)}}.tq-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tqspin 1.6s linear infinite}' +
    '@keyframes tqsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.tq-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tqsweep 3.2s ease-in-out infinite}.tq-beam2{animation-delay:-1.6s}' +
    '@keyframes tqbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.tq-bob{animation:tqbob .5s ease-in-out infinite}.tq-bob2{animation-delay:.25s}' +
    '@keyframes tqeq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.tq-eq{transform-box:fill-box;transform-origin:50% 100%;animation:tqeq .7s ease-in-out infinite}.tq-eq2{animation-delay:.2s}.tq-eq3{animation-delay:.45s}' +
    '@keyframes tqsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.tq-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tqsway 3s ease-in-out infinite}' +
    '@keyframes tqwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.tq-wave{animation:tqwave 3s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GRN = "#7ee081", RED = "#ff5a4e", GOLD = "#ffd166", CREAM = "#f4ead8", BLUE = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const plane = '<g class="tq-plane"><path d="M20 40l36 -6l10 -8l4 2l-6 8l14 -2l4 -4l3 1l-3 6l-58 10z" fill="#e8ecf2"/><circle class="tq-bl" cx="22" cy="40" r="1.6" fill="#ff5a4e"/></g>';
  /* a St. Albans house: two stories, peaked roof, porch, lawn */
  const house = (x, col, roof) => '<rect x="' + x + '" y="104" width="76" height="66" fill="' + col + '"/><path d="M' + (x - 6) + ' 106l44 -34l44 34z" fill="' + roof + '"/>' +
    '<rect x="' + (x + 10) + '" y="116" width="14" height="16" fill="#ffd98a" class="tq-bl tq-bl' + (x % 3 + 1) + '"/><rect x="' + (x + 50) + '" y="116" width="14" height="16" fill="#ffd98a" opacity=".6"/>' +
    '<rect x="' + (x + 30) + '" y="142" width="16" height="28" fill="#3a2a20"/><rect x="' + (x - 2) + '" y="140" width="80" height="4" fill="#e8e2d0"/>';
  const tree = (x, y, s) => '<g class="tq-sway"><rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (40 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + y + '" r="' + (20 * s) + '" fill="#2f6b3a"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 8) + '" r="' + (14 * s) + '" fill="#2a5e33"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 6) + '" r="' + (14 * s) + '" fill="#367a42"/></g>';

  /* 1. Linden Blvd & 196 St, St. Albans: the blue Q4 stop sign, the bus pulling in, houses and trees behind, a jet coming down toward JFK */
  function q4() {
    let win = "";
    for (let x = 40; x < 250; x += 30) win += '<rect x="' + x + '" y="126" width="22" height="22" rx="2" fill="#bcd8f0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tq1)"/>' + stars(8) + plane +
      tree(20, 96, 1.1) + house(40, "#c9b79a", "#5a3a2a") + tree(136, 100, 1) + house(150, "#9fb3c8", "#3a3a4a") + tree(246, 96, 1.2) + house(262, "#d8c8a8", "#6a2a22") + tree(370, 100, 1) +
      '<rect x="0" y="170" width="400" height="20" fill="#7d7f84"/><rect x="0" y="170" width="400" height="3" fill="#a5a7ab"/><rect x="0" y="190" width="400" height="70" fill="#3e4045"/>' +
      '<path d="M0 226h400" stroke="#e9c46a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="anim-train">' +
        '<rect x="20" y="112" width="270" height="92" rx="8" fill="#f2f2ee" stroke="#9aa0a6" stroke-width="2"/>' +
        '<rect x="20" y="160" width="270" height="10" fill="' + BLUE + '"/><rect x="20" y="172" width="270" height="4" fill="#ffc72c"/>' + win +
        '<rect x="262" y="124" width="24" height="44" rx="3" fill="#bcd8f0"/>' +
        '<rect x="70" y="114" width="170" height="10" rx="2" fill="#111"/>' + '<text x="155" y="122" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="8" fill="#ffb000">Q4 CAMBRIA HTS LINDEN BL</text>' +
        '<circle cx="60" cy="204" r="13" fill="#1a1a1a"/><circle cx="60" cy="204" r="5" fill="#777"/><circle cx="246" cy="204" r="13" fill="#1a1a1a"/><circle cx="246" cy="204" r="5" fill="#777"/>' +
        '<circle cx="284" cy="190" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="336" y="96" width="4" height="96" fill="#5a6068"/>' +
      '<rect x="314" y="70" width="50" height="58" rx="4" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/>' +
      txt("BUS", 339, 86, 11, "#fff") + txt("STOP", 339, 98, 11, "#fff") +
      '<rect x="326" y="104" width="26" height="13" rx="2" fill="#fff"/><text x="339" y="114" text-anchor="middle" ' + font + ' font-size="9" fill="' + BLUE + '">Q4</text>' +
      person(372, 160, "#151515") + person(352, 164, "#222") +
      txt("LINDEN BLVD · 196 ST · ST. ALBANS", 200, 246, 10, CREAM, 'letter-spacing="2"'),
      sky("tq1", "#1a1440", "#ff8a5b"));
  }

  /* 2. Summer '94, Downing Stadium on Randalls Island: the concrete stands and light towers, the big outdoor main stage, beams sweeping, the crowd jumping */
  function randalls() {
    const crowd = [];
    for (let x = 6; x < 400; x += 18) crowd.push('<g class="tq-bob' + (x % 36 ? " tq-bob2" : "") + '"><circle cx="' + x + '" cy="234" r="7" fill="#101418"/><rect x="' + (x - 8) + '" y="241" width="16" height="22" rx="6" fill="#101418"/></g>');
    let stands = "";
    for (let i = 0; i < 6; i++) stands += '<path d="M0 ' + (96 + i * 8) + 'h400" stroke="#9a9a96" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tq2)"/>' +
      /* stadium bowl + light towers */
      '<path d="M0 88h400v80h-400z" fill="#b7b4ad"/>' + stands +
      [18, 382].map(x => '<rect x="' + (x - 3) + '" y="20" width="6" height="70" fill="#6b6b70"/><rect x="' + (x - 16) + '" y="12" width="32" height="14" fill="#4b4b50"/>' +
        [0, 1, 2, 3].map(i => '<circle class="tq-bl tq-bl' + (i % 3 + 1) + '" cx="' + (x - 12 + i * 8) + '" cy="19" r="3" fill="#fffbe0"/>').join("")).join("") +
      /* the stage */
      '<rect x="60" y="40" width="280" height="10" fill="#2a2a30"/>' + [64, 336].map(x => '<rect x="' + (x - 4) + '" y="40" width="8" height="140" fill="#2a2a30"/>').join("") +
      '<g class="tq-beam"><path d="M120 50l-50 150h100z" fill="#fff6c2" opacity=".18"/></g><g class="tq-beam tq-beam2"><path d="M280 50l-50 150h100z" fill="' + GRN + '" opacity=".18"/></g>' +
      '<rect x="68" y="50" width="264" height="102" fill="#14121c"/>' +
      '<rect x="100" y="62" width="200" height="28" rx="3" fill="#000" stroke="' + GOLD + '" stroke-width="2"/>' + txt("MAIN STAGE", 200, 82, 16, GOLD, 'letter-spacing="3"') +
      /* the decks + three silhouettes with mics */
      '<rect x="170" y="118" width="60" height="22" fill="#26262e" stroke="#555"/><g class="tq-spin"><circle cx="186" cy="124" r="7" fill="#111" stroke="#666"/></g><g class="tq-spin"><circle cx="214" cy="124" r="7" fill="#111" stroke="#666"/></g>' +
      '<g class="tq-bob"><circle cx="122" cy="112" r="8" fill="#0b0b0f"/><rect x="113" y="121" width="18" height="30" rx="7" fill="#0b0b0f"/><path d="M131 126l10-10" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g class="tq-bob tq-bob2"><circle cx="278" cy="114" r="7" fill="#0b0b0f"/><rect x="270" y="122" width="16" height="28" rx="6" fill="#0b0b0f"/><path d="M270 127l-10-10" stroke="#0b0b0f" stroke-width="4" stroke-linecap="round"/></g>' +
      '<rect x="60" y="150" width="280" height="30" fill="#2a2a30"/><rect x="60" y="148" width="280" height="5" fill="' + GRN + '"/>' +
      /* speaker stacks */
      [28, 352].map(x => '<rect x="' + x + '" y="100" width="22" height="80" fill="#1b1b1f"/>' + [110, 130, 150, 170].map(y => '<circle cx="' + (x + 11) + '" cy="' + y + '" r="7" fill="#333"/>').join("")).join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#3a5a30"/>' + crowd.join("") +
      txt("RANDALLS ISLAND · SUMMER '94", 200, 30, 11, CREAM, 'letter-spacing="2"'),
      sky("tq2", "#2b5c8a", "#f2b880"));
  }

  /* 3. The home studio in Englewood Cliffs, NJ (2016): a big window on the Palisades trees, crates, keys, the sampler pads lit, a mic, a turntable turning */
  function cliffs() {
    let crate = "";
    [[24, 196], [70, 196], [24, 160]].forEach(([x, y], i) => {
      crate += '<rect x="' + x + '" y="' + y + '" width="42" height="34" fill="' + [GRN, RED, GOLD][i] + '"/>';
      for (let k = 0; k < 6; k++) crate += '<rect x="' + (x + 4 + k * 6) + '" y="' + (y - 8) + '" width="4" height="30" fill="#141414"/>';
    });
    let keys = "";
    for (let i = 0; i < 20; i++) keys += '<rect x="' + (150 + i * 8) + '" y="170" width="7" height="22" fill="#f4f1e8"/>';
    for (let i = 0; i < 20; i++) if ([0, 1, 3, 4, 5].includes(i % 7)) keys += '<rect x="' + (155 + i * 8) + '" y="170" width="5" height="13" fill="#111"/>';
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="tq-bl tq-bl' + ((r + c) % 3 + 1) + '" x="' + (318 + c * 12) + '" y="' + (150 + r * 10) + '" width="9" height="7" rx="1" fill="' + ((r + c) % 2 ? GRN : RED) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2420"/>' +
      '<rect x="0" y="0" width="400" height="140" fill="#3a2f28"/>' +
      /* window on the cliffs */
      '<rect x="40" y="16" width="230" height="108" fill="url(#tq3)" stroke="#1a1410" stroke-width="6"/>' +
      '<path d="M40 96q30-20 60-8t70-6t100 2v40h-230z" fill="#1d3a2a"/>' + tree(70, 78, .8) + tree(130, 82, .9) + tree(220, 76, .8) +
      '<rect x="40" y="110" width="230" height="14" fill="#2c4a6a" opacity=".8"/>' +
      '<path d="M155 16v108M40 70h230" stroke="#1a1410" stroke-width="4"/>' + '<circle cx="80" cy="30" r="1.2" fill="#fff"/><circle cx="190" cy="26" r="1.2" fill="#fff"/><circle cx="240" cy="40" r="1" fill="#fff"/>' +
      /* gold records on the wall, no labels */
      [300, 350].map(x => '<rect x="' + (x - 20) + '" y="22" width="40" height="48" fill="#1a1410" stroke="' + GOLD + '" stroke-width="2"/><circle cx="' + x + '" cy="44" r="14" fill="' + GOLD + '"/><circle cx="' + x + '" cy="44" r="4" fill="#1a1410"/>').join("") +
      /* desk */
      '<rect x="130" y="192" width="270" height="10" fill="#6b4a2a"/><rect x="140" y="202" width="8" height="58" fill="#4a321c"/><rect x="384" y="202" width="8" height="58" fill="#4a321c"/>' +
      '<rect x="146" y="166" width="168" height="28" rx="2" fill="#2b2b30"/>' + keys +
      '<rect x="312" y="144" width="60" height="48" rx="3" fill="#cfc8b6" stroke="#7a7466"/>' + pads +
      /* turntable */
      '<rect x="300" y="108" width="80" height="30" rx="2" fill="#1b1b1f"/><g class="tq-spin"><circle cx="330" cy="123" r="12" fill="#111" stroke="#555"/><circle cx="330" cy="123" r="4" fill="' + RED + '"/></g><path d="M366 112l-12 16" stroke="#bbb" stroke-width="2"/>' +
      /* mic */
      '<path d="M110 260v-110" stroke="#888" stroke-width="3"/><rect x="102" y="128" width="16" height="26" rx="8" fill="#c9ced6"/><circle cx="110" cy="141" r="16" fill="none" stroke="#555" stroke-width="2"/>' +
      crate +
      txt("ENGLEWOOD CLIFFS, NJ · THE LAST ALBUM", 260, 248, 9, CREAM, 'letter-spacing="2"'),
      sky("tq3", "#0d1530", "#2c3a5a"));
  }

  /* 4. Los Angeles, Feb 2017: the awards-show stage, LED wall flashing, beams, the four of them in silhouette, the crowd up front */
  function awards() {
    let led = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 20; c++) led += '<rect class="tq-bl tq-bl' + ((r * 3 + c) % 3 + 1) + '" x="' + (40 + c * 16) + '" y="' + (30 + r * 14) + '" width="14" height="12" fill="' + [RED, GRN, GOLD, "#3fa7d6"][(r + c) % 4] + '" opacity=".55"/>';
    const crowd = [];
    for (let x = 6; x < 400; x += 20) crowd.push('<g class="tq-bob' + (x % 40 ? " tq-bob2" : "") + '"><circle cx="' + x + '" cy="236" r="8" fill="#121018"/><rect x="' + (x - 9) + '" y="244" width="18" height="20" rx="6" fill="#121018"/></g>');
    const mc = (x, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="148" r="8" fill="#050508"/><rect x="' + (x - 9) + '" y="157" width="18" height="34" rx="7" fill="#050508"/><path d="M' + (x + 9) + ' 162l9-12" stroke="#050508" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#07060c"/><rect x="0" y="206" width="400" height="54" fill="url(#tq4)"/>' +
      '<rect x="34" y="24" width="332" height="96" fill="#111"/>' + led +
      '<rect x="110" y="56" width="180" height="30" rx="3" fill="#000" opacity=".85"/>' + txt("WE THE PEOPLE", 200, 77, 17, CREAM, 'letter-spacing="3"') +
      '<g class="tq-beam"><path d="M70 0l-40 200h80z" fill="#fff6c2" opacity=".12"/></g><g class="tq-beam tq-beam2"><path d="M330 0l-40 200h80z" fill="' + RED + '" opacity=".14"/></g>' +
      '<rect x="0" y="190" width="400" height="20" fill="#1c1c24"/><rect x="0" y="188" width="400" height="4" fill="' + GOLD + '"/>' +
      mc(120, "tq-bob") + mc(170, "tq-bob tq-bob2") + mc(240, "tq-bob") +
      '<rect x="276" y="168" width="54" height="20" fill="#26262e" stroke="#555"/><g class="tq-spin"><circle cx="292" cy="174" r="6" fill="#111" stroke="#666"/></g><g class="tq-spin"><circle cx="314" cy="174" r="6" fill="#111" stroke="#666"/></g>' +
      '<circle cx="303" cy="150" r="8" fill="#050508"/><rect x="294" y="158" width="18" height="12" rx="5" fill="#050508"/>' +
      crowd.join("") +
      txt("LOS ANGELES · FEB 2017", 200, 16, 10, CREAM, 'letter-spacing="3"'), sky("tq4", "#5a2a6a", "#ff8a5b"));
  }

  /* 5. Linden Blvd & 196 St: green street signs, the wall tagged A TRIBE CALLED QUEST, the red-brick Engine 317 firehouse down the block */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tq5)"/>' + stars(12) + plane +
      /* the firehouse */
      '<rect x="120" y="44" width="150" height="98" fill="#9a3a2a"/><rect x="114" y="38" width="162" height="10" fill="#d8cfc0"/>' +
      '<rect x="120" y="70" width="150" height="5" fill="#d8cfc0"/>' +
      [136, 176, 216, 250].map(x => '<rect x="' + x + '" y="52" width="14" height="14" fill="#ffd98a" class="tq-bl tq-bl' + (x % 3 + 1) + '"/>').join("") +
      '<rect x="140" y="82" width="70" height="60" fill="#c8102e"/>' + [96, 110, 124].map(y => '<path d="M140 ' + y + 'h70" stroke="#8a0c20" stroke-width="2"/>').join("") +
      [148, 164, 180, 196].map(x => '<rect x="' + x + '" y="86" width="12" height="8" fill="#bcd8f0"/>').join("") +
      '<rect x="218" y="96" width="24" height="46" fill="#3a2a20"/>' +
      '<rect x="150" y="74" width="90" height="0" fill="none"/>' + txt("ENGINE 317", 195, 66, 9, "#2a1a14") +
      tree(60, 90, 1.2) + tree(320, 88, 1.1) +
      /* wall */
      '<rect x="0" y="136" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 146; y < 228; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("A TRIBE", 16, 180, 36, GRN, -5) + tag("CALLED QUEST", 24, 216, 30, GRN, -4) + tag("YES YOU CAN", 246, 172, 15, RED, -4) + tag("QUEENS", 290, 222, 15, GOLD, -3) +
      '<rect x="0" y="228" width="400" height="32" fill="#55575c"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="tq-car"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>' +
      '<rect x="358" y="66" width="5" height="164" fill="#3d4b3f"/>' +
      '<rect x="296" y="70" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Linden Blvd", 346, 86, 12, "#fff") +
      '<rect x="296" y="96" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("196 St", 346, 112, 12, "#fff") +
      '<circle class="tq-flk" cx="360" cy="62" r="4" fill="#fff6c2"/>',
      sky("tq5", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { q4: q4, randalls: randalls, cliffs: cliffs, awards: awards, corner: corner };
})();
