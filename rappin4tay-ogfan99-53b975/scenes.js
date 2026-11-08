/* rappin4tay scenes (Regions tab: The Bay Area; the Fillmore, San Francisco). CSS classes and ids prefixed rt- (the page's own anim-train is kept).
   1 McAllister St & Fillmore St: the Muni 5 Fulton trolley bus rolling in under its overhead wires, Victorians on both sides.
   2 The Playaz Club: a velvet-rope lounge, the pool and the bubbling tub, champagne on ice, dominoes on the table, the neon sign flickering.
   3 Rag Top Records: the studio at night, reel-to-reel tape spinning, drum machine pads blinking, meters jumping.
   4 Frisco hills: a cable car climbing Hyde St, the bay and Alcatraz island below, fog rolling.
   5 Fillmore St and Turk St: green signs, RAPPIN 4-TAY tagged, Coit Tower white on Telegraph Hill behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rtflick{0%,100%{opacity:1}44%{opacity:.85}48%{opacity:.25}52%{opacity:.95}70%{opacity:.6}}.rt-flk{animation:rtflick 2.6s infinite}.rt-flk2{animation-delay:1.1s}' +
    '@keyframes rtcarR{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.rt-car{animation:rtcarR 6s linear infinite}' +
    '@keyframes rtcarL{from{transform:translateX(540px)}to{transform:translateX(-160px)}}.rt-carL{animation:rtcarL 7.5s linear infinite}' +
    '@keyframes rtbub{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-22px);opacity:0}}.rt-bub{animation:rtbub 1.8s ease-out infinite}.rt-b2{animation-delay:-.6s}.rt-b3{animation-delay:-1.2s}' +
    '@keyframes rtwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.rt-wave{animation:rtwave 3s ease-in-out infinite}' +
    '@keyframes rtspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.rt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:rtspin 2.4s linear infinite}' +
    '@keyframes rtmeter{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.rt-mtr{transform-box:fill-box;transform-origin:50% 100%;animation:rtmeter .9s ease-in-out infinite}.rt-m2{animation-delay:-.3s}.rt-m3{animation-delay:-.6s}' +
    '@keyframes rtblink{0%,100%{opacity:.25}50%{opacity:1}}.rt-bl{animation:rtblink 1.2s ease-in-out infinite}.rt-bl2{animation-delay:-.4s}.rt-bl3{animation-delay:-.8s}' +
    '@keyframes rtclimb{0%{transform:translate(0,0)}100%{transform:translate(-150px,-62px)}}.rt-cable{animation:rtclimb 9s linear infinite}' +
    '@keyframes rtfog{0%,100%{transform:translateX(0)}50%{transform:translateX(-40px)}}.rt-fog{animation:rtfog 9s ease-in-out infinite}.rt-fog2{animation-delay:-4.5s}' +
    '@keyframes rtbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.rt-beam{transform-box:fill-box;transform-origin:50% 100%;animation:rtbeam 5s ease-in-out infinite}' +
    '@keyframes rtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rt-sp{animation:rtspray 1.4s ease-out infinite}.rt-sp2{animation-delay:.45s}.rt-sp3{animation-delay:.9s}' +
    '@keyframes rtwire{0%,100%{transform:translateY(0)}50%{transform:translateY(1.5px)}}.rt-wire{animation:rtwire 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* a Victorian row house: body, trim, roof colour, with a bay window */
  const vic = (x, y, w, h, body, trim, roof) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + body + '"/>' +
      '<path d="M' + (x - 3) + ' ' + y + 'L' + (x + w / 2) + ' ' + (y - w * 0.5) + 'L' + (x + w + 3) + ' ' + y + 'z" fill="' + roof + '" stroke="' + trim + '" stroke-width="2"/>';
    for (let r = 0; r < 2; r++) s += '<rect x="' + (x + w * 0.2) + '" y="' + (y + 10 + r * (h / 2.2)) + '" width="' + (w * 0.6) + '" height="' + (h / 4) + '" fill="#2b2f3a" stroke="' + trim + '" stroke-width="2"/>' +
      '<path d="M' + (x + w / 2) + ' ' + (y + 10 + r * (h / 2.2)) + 'v' + (h / 4) + '" stroke="' + trim + '" stroke-width="1.5"/>';
    return s;
  };
  const RED = "#ff5a36", GOLD = "#ffd23f", BLUE = "#3fc1ff", MUNI = "#d31245";

  /* 1. McAllister St & Fillmore St: the 5 Fulton trolley bus */
  function rtstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 42) + '" y="106" width="30" height="24" rx="3" fill="#24303a"/>').join("");
    const bus = '<g class="anim-train">' +
      '<path d="M122 100L102 58M152 100L132 58" stroke="#3a3f45" stroke-width="3"/><circle cx="102" cy="58" r="2.5" fill="#3a3f45"/><circle cx="132" cy="58" r="2.5" fill="#3a3f45"/>' +
      '<rect x="44" y="96" width="292" height="8" rx="4" fill="#c4c9cd"/>' +
      '<path d="M40 102h284q20 0 22 22v26H40z" fill="#f2f3f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<rect x="40" y="134" width="306" height="9" fill="' + MUNI + '"/><rect x="40" y="143" width="306" height="4" fill="#3a3f45"/>' +
      '<path d="M312 106h26q4 2 5 20h-31z" fill="#24303a"/><rect x="300" y="106" width="8" height="36" fill="#c9ced3"/>' +
      '<rect x="300" y="94" width="44" height="11" rx="2" fill="#111"/><text x="322" y="102.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">5 FULTON</text>' +
      '<circle cx="84" cy="150" r="10" fill="#111"/><circle cx="84" cy="150" r="4" fill="#888"/><circle cx="290" cy="150" r="10" fill="#111"/><circle cx="290" cy="150" r="4" fill="#888"/>' +
      '<circle cx="342" cy="138" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rts1)"/>' +
      vic(8, 78, 48, 76, "#e9b8a8", "#fff", "#7a3b3b") + vic(62, 84, 40, 70, "#cfe0c3", "#fff", "#4b6b45") +
      vic(298, 80, 44, 74, "#f3dc9a", "#fff", "#8a6a2a") + vic(348, 72, 48, 82, "#a9c6dc", "#fff", "#3e5a72") +
      '<g class="rt-wire"><path d="M0 56q200 8 400 0" stroke="#222" stroke-width="1.5" fill="none"/><path d="M0 60q200 8 400 0" stroke="#222" stroke-width="1.5" fill="none"/></g>' +
      bus +
      '<rect x="0" y="158" width="400" height="10" fill="#bdb6a8"/><rect x="0" y="168" width="400" height="12" fill="#8c877e"/>' +
      '<path d="M0 180h400v80H0z" fill="#3e3f45"/><path d="M0 218h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="14 10"/>' +
      car("rt-car", 0, 240, RED) + car("rt-carL", 0, 204, "#7fb0d6") +
      '<rect x="370" y="150" width="6" height="30" fill="#5a6066"/><rect x="360" y="136" width="26" height="16" rx="2" fill="' + MUNI + '"/><text x="373" y="148" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">5</text>' +
      '<rect x="90" y="14" width="220" height="36" rx="3" fill="#111"/><text x="100" y="32" ' + font + ' font-size="13" fill="#fff">McAllister St &amp; Fillmore St</text>' +
      '<text x="100" y="44" ' + font + ' font-size="7.5" fill="#cfd6dd">MUNI · 5 FULTON · THE FILLMORE</text>' +
      '<circle cx="292" cy="32" r="10" fill="' + MUNI + '"/><text x="292" y="36" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">5</text>',
      sky("rts1", "#ffb07a", "#5a3a6e"));
  }

  /* 2. The Playaz Club: pool, tub, champagne, dominoes, velvet rope */
  function rtclub() {
    const bubbles = [0, 1, 2, 3, 4].map(i => '<circle class="rt-bub ' + (["", "rt-b2", "rt-b3"][i % 3]) + '" cx="' + (298 + i * 14) + '" cy="196" r="3" fill="#dff6ff" opacity=".9"/>').join("");
    const dom = (x, y, a, b) => '<g><rect x="' + x + '" y="' + y + '" width="12" height="22" rx="2" fill="#f7f3ea" stroke="#222" stroke-width="1"/><path d="M' + x + ' ' + (y + 11) + 'h12" stroke="#222" stroke-width="1"/>' +
      Array.from({ length: a }, (_, i) => '<circle cx="' + (x + 3 + (i % 2) * 6) + '" cy="' + (y + 3 + Math.floor(i / 2) * 3) + '" r="1.2" fill="#222"/>').join("") +
      Array.from({ length: b }, (_, i) => '<circle cx="' + (x + 3 + (i % 2) * 6) + '" cy="' + (y + 14 + Math.floor(i / 2) * 3) + '" r="1.2" fill="#222"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rts2)"/>' +
      /* back wall panels */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50 + 4) + '" y="64" width="42" height="80" rx="3" fill="#2a1424" stroke="#5a2a48" stroke-width="2"/>').join("") +
      /* neon sign */
      '<rect x="96" y="14" width="208" height="44" rx="8" fill="#14070f" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g class="rt-flk"><text x="200" y="45" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="27" fill="#ff5fb0" stroke="#ffd1ea" stroke-width=".8" letter-spacing="2">PLAYAZ CLUB</text></g>' +
      /* floor */
      '<path d="M0 144h400v116H0z" fill="#3a1630"/>' +
      /* pool */
      '<path d="M18 176h200l18 50H0z" fill="#1aa7d8" stroke="#e8e2d0" stroke-width="5"/>' +
      '<g class="rt-wave"><path d="M20 192q14 -6 28 0t28 0t28 0t28 0t28 0t28 0t28 0" stroke="#bdf0ff" stroke-width="2" fill="none"/><path d="M14 210q14 -6 28 0t28 0t28 0t28 0t28 0t28 0t28 0t28 0" stroke="#bdf0ff" stroke-width="2" fill="none"/></g>' +
      '<path d="M40 176v-14M52 176v-14M40 166h12" stroke="#d8dde0" stroke-width="2.5"/>' +
      /* hot tub */
      '<ellipse cx="326" cy="204" rx="56" ry="20" fill="#e8e2d0"/><ellipse cx="326" cy="202" rx="48" ry="14" fill="#36c3e0"/>' + bubbles +
      /* velvet rope */
      '<rect x="248" y="150" width="6" height="40" fill="' + GOLD + '"/><circle cx="251" cy="148" r="5" fill="' + GOLD + '"/><rect x="384" y="150" width="6" height="40" fill="' + GOLD + '"/><circle cx="387" cy="148" r="5" fill="' + GOLD + '"/>' +
      '<path d="M254 156q66 26 130 0" stroke="#b0123a" stroke-width="5" fill="none"/>' +
      /* table with dominoes and champagne */
      '<ellipse cx="150" cy="246" rx="70" ry="10" fill="#1b0b16"/><rect x="88" y="232" width="124" height="10" rx="4" fill="#6b3a1e"/>' +
      dom(98, 210, 3, 5) + dom(114, 212, 6, 2) + dom(130, 210, 4, 4) +
      '<path d="M178 230l-4 -10h22l-4 10z" fill="#c9ced3"/><rect x="180" y="190" width="10" height="30" rx="4" fill="#1f5a2a"/><rect x="182" y="180" width="6" height="12" fill="' + GOLD + '"/>' +
      '<path d="M200 230v-10M196 214q4 8 8 0z" stroke="#e8e2d0" stroke-width="1.5" fill="#ffe58a"/>',
      sky("rts2", "#1a0816", "#3a1530"));
  }

  /* 3. Rag Top Records studio */
  function rtstudio() {
    const reel = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="#2e2e33" stroke="#9aa0a6" stroke-width="2"/>' +
      '<g class="rt-spin"><circle cx="' + cx + '" cy="' + cy + '" r="22" fill="none" stroke="#5b4636" stroke-width="10"/>' +
      [0, 120, 240].map(a => '<rect x="' + (cx - 3) + '" y="' + (cy - 20) + '" width="6" height="14" rx="2" fill="#c9ced3" transform="rotate(' + a + ' ' + cx + ' ' + cy + ')"/>').join("") +
      '<circle cx="' + cx + '" cy="' + cy + '" r="5" fill="#c9ced3"/></g>';
    const pads = Array.from({ length: 8 }, (_, i) => '<rect class="rt-bl ' + (["", "rt-bl2", "rt-bl3"][i % 3]) + '" x="' + (256 + (i % 4) * 26) + '" y="' + (176 + Math.floor(i / 4) * 24) + '" width="20" height="18" rx="3" fill="' + [RED, GOLD, BLUE, "#7ee06a"][i % 4] + '"/>').join("");
    const meters = [0, 1, 2, 3, 4, 5].map(i => '<rect class="rt-mtr ' + (["", "rt-m2", "rt-m3"][i % 3]) + '" x="' + (64 + i * 14) + '" y="200" width="8" height="30" fill="' + (i < 4 ? "#7ee06a" : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rts3)"/>' +
      /* foam wall */
      Array.from({ length: 40 }, (_, i) => '<rect x="' + ((i % 10) * 40 + 2) + '" y="' + (Math.floor(i / 10) * 36 + 4) + '" width="36" height="32" rx="2" fill="' + (i % 2 ? "#1d1f2a" : "#23263a") + '"/>').join("") +
      '<rect x="90" y="14" width="220" height="26" rx="4" fill="#0e0f16" stroke="' + RED + '" stroke-width="2"/><text x="200" y="33" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="' + GOLD + '" letter-spacing="2">RAG TOP RECORDS</text>' +
      /* reel to reel machine */
      '<rect x="40" y="52" width="150" height="104" rx="6" fill="#585e66" stroke="#2a2d33" stroke-width="3"/>' + reel(80, 92) + reel(150, 92) +
      '<path d="M80 116h70" stroke="#5b4636" stroke-width="2"/><rect x="100" y="126" width="30" height="10" rx="2" fill="#2a2d33"/>' +
      '<circle cx="60" cy="144" r="4" fill="' + RED + '"/><circle cx="74" cy="144" r="4" fill="#c9ced3"/><circle cx="88" cy="144" r="4" fill="#c9ced3"/>' +
      /* speaker */
      '<rect x="318" y="52" width="60" height="100" rx="5" fill="#15161c" stroke="#3a3d46" stroke-width="2"/><circle cx="348" cy="80" r="13" fill="#2a2d36" stroke="#5a5e6a" stroke-width="2"/><circle cx="348" cy="122" r="20" fill="#2a2d36" stroke="#5a5e6a" stroke-width="2"/><circle cx="348" cy="122" r="7" fill="#444"/>' +
      /* desk */
      '<path d="M0 160h400v100H0z" fill="#3b2a20"/><rect x="0" y="160" width="400" height="8" fill="#5b4030"/>' +
      /* mixing board */
      '<rect x="40" y="176" width="170" height="64" rx="5" fill="#2a2d33" stroke="#11131a" stroke-width="2"/>' + meters +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (160 + i * 9) + '" y="186" width="3" height="44" fill="#11131a"/><rect x="' + (156 + i * 9) + '" y="' + (196 + (i * 7) % 24) + '" width="11" height="6" rx="1" fill="#c9ced3"/>').join("") +
      /* drum machine */
      '<rect x="246" y="168" width="114" height="60" rx="5" fill="#bfb8a8" stroke="#555" stroke-width="2"/>' + pads,
      sky("rts3", "#141522", "#24263a"));
  }

  /* 4. Cable car up Hyde St, the bay and Alcatraz */
  function rtcable() {
    return svg(
      '<rect width="400" height="260" fill="url(#rts4)"/>' +
      /* bay */
      '<path d="M0 96h400v70H0z" fill="#2f7fb0"/><path d="M0 110q50 -4 100 0t100 0t100 0t100 0" stroke="#7fc6ec" stroke-width="1.5" fill="none" opacity=".7"/>' +
      /* Alcatraz island */
      /* Marin hills */
      '<path d="M0 96q40 -30 90 -18q50 -28 110 -6q60 -22 110 0q50 -18 90 -4v24H0z" fill="#5a7a4a"/>' +
      '<path d="M196 112q24 -16 70 -14q20 2 30 14z" fill="#6b6a5a"/><rect x="226" y="94" width="40" height="12" fill="#d8d2c0"/><rect x="232" y="88" width="26" height="6" fill="#c8c2b0"/><rect x="262" y="76" width="4" height="20" fill="#e8e2d0"/>' +
      '<g class="rt-fog"><ellipse cx="80" cy="84" rx="70" ry="9" fill="#fff" opacity=".55"/></g><g class="rt-fog rt-fog2"><ellipse cx="330" cy="80" rx="80" ry="10" fill="#fff" opacity=".5"/></g>' +
      /* steep street */
      '<path d="M0 260L0 214L400 120L400 260z" fill="#8d8a84"/>' +
      '<path d="M0 232L400 140" stroke="#5a5650" stroke-width="3"/><path d="M0 246L400 154" stroke="#5a5650" stroke-width="3"/><path d="M0 239L400 147" stroke="#3a3836" stroke-width="1.5" stroke-dasharray="6 6"/>' +
      /* houses up the hill */
      vic(300, 104, 40, 40, "#f0d7a8", "#fff", "#8a4a3a") + vic(350, 92, 44, 44, "#c7d9e8", "#fff", "#4a5a7a") +
      /* the cable car */
      '<g class="rt-cable"><g transform="translate(250 176) rotate(-13)">' +
      '<rect x="0" y="-40" width="110" height="40" rx="4" fill="#b8312f" stroke="#5a1a18" stroke-width="2"/>' +
      '<rect x="-4" y="-46" width="118" height="8" rx="3" fill="#e8d8b0" stroke="#5a1a18" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 20) + '" y="-36" width="14" height="16" rx="2" fill="#f8e8b8" stroke="#5a1a18" stroke-width="1"/>').join("") +
      '<rect x="0" y="-16" width="110" height="5" fill="#e8d8b0"/><rect x="-6" y="-2" width="122" height="5" fill="#3a2a20"/>' +
      '<circle cx="22" cy="6" r="6" fill="#111"/><circle cx="88" cy="6" r="6" fill="#111"/>' +
      '<rect x="44" y="-58" width="22" height="12" rx="2" fill="#111"/><text x="55" y="-49" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">HYDE</text></g></g>' +
      '<rect x="14" y="20" width="170" height="26" rx="3" fill="#111"/><text x="99" y="38" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">HYDE ST · FRISCO</text>',
      sky("rts4", "#8fc4e8", "#e7d8b8"));
  }

  /* 5. Fillmore St and Turk St, Coit Tower behind */
  function rtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rts5)"/>' +
      /* Telegraph Hill with Coit Tower */
      '<path d="M190 120q60 -40 130 -30q40 6 80 30v20H190z" fill="#3a4a3a"/>' +
      '<g class="rt-beam"><path d="M278 40l-26 -60h52z" fill="#fff6c2" opacity=".18"/></g>' +
      '<rect x="270" y="40" width="16" height="66" fill="#efe9dc"/>' + [272, 276, 280, 284].map(x => '<path d="M' + x + ' 44v60" stroke="#c9c2b2" stroke-width="1"/>').join("") +
      '<rect x="266" y="34" width="24" height="8" fill="#e2dccd"/><rect x="270" y="28" width="16" height="7" fill="#efe9dc"/>' +
      [0, 1, 2].map(i => '<rect x="' + (272 + i * 5) + '" y="30" width="2.5" height="4" fill="#3a3a48"/>').join("") +
      '<rect x="262" y="104" width="32" height="8" fill="#d8d2c2"/>' +
      /* skyline lights */
      '<rect x="0" y="112" width="400" height="30" fill="#2a2440"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (8 + i * 28) + '" y="' + (98 + (i * 13) % 18) + '" width="20" height="' + (44 - (i * 13) % 18) + '" fill="#352e52"/><rect x="' + (12 + i * 28) + '" y="' + (104 + (i * 13) % 18) + '" width="3" height="3" fill="#ffd27a"/>').join("") +
      /* wall */
      '<rect x="0" y="142" width="400" height="80" fill="#7a4a3a"/>' +
      Array.from({ length: 4 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 38 + (r % 2) * 19 - 10) + '" y="' + (144 + r * 19) + '" width="36" height="17" fill="#8a5644"/>').join("")).join("") +
      tag("RAPPIN 4-TAY", 42, 200, 34, RED, -6) + tag("FO", 300, 196, 26, GOLD, 8) +
      '<g class="rt-sp"><circle cx="352" cy="176" r="3" fill="' + RED + '" opacity=".8"/></g><g class="rt-sp rt-sp2"><circle cx="358" cy="166" r="2.5" fill="' + GOLD + '" opacity=".8"/></g><g class="rt-sp rt-sp3"><circle cx="346" cy="184" r="2" fill="' + BLUE + '" opacity=".8"/></g>' +
      '<path d="M348 200l10 -24l6 2l-8 24z" fill="#ddd" stroke="#333" stroke-width="1"/><rect x="356" y="170" width="8" height="8" rx="2" fill="' + RED + '"/>' +
      /* sidewalk + street */
      '<rect x="0" y="222" width="400" height="14" fill="#a8a296"/><rect x="0" y="236" width="400" height="24" fill="#3e3f45"/>' +
      /* sign pole */
      '<rect x="12" y="30" width="6" height="196" fill="#3a4a3a"/>' + sign(18, 34, 130, "Fillmore St") + sign(18, 60, 100, "Turk St"),
      sky("rts5", "#ffb27a", "#6a4a8a"));
  }

  window.SCENES = { rtstation: rtstation, rtclub: rtclub, rtstudio: rtstudio, rtcable: rtcable, rtcorner: rtcorner };
})();
