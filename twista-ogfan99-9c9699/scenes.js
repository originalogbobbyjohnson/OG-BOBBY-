/* twista scenes (Regions tab: Chicago; K-Town, West Garfield Park, West Side). CSS classes and ids prefixed tw- (the page's own anim-train is kept).
   1 Pulaski on the CTA Blue Line (Forest Park branch): the station down in the middle of the Eisenhower Expressway, traffic on both sides, the Pulaski Rd bridge overhead, a silver Blue Line train sliding in.
   2 The Garfield Park Gold Dome fieldhouse: cream terracotta Spanish Baroque front under the gold-leaf dome, flags flying, the sun glinting off the gold.
   3 The fastest tongue (Tung Twista, the 1992 world speed record for rapping): a booth mic, a big stopwatch hand racing, words flying out of the speaker.
   4 Right off Madison ("Still Feels So Good": "right off Madison to the manor"): a drop-top rolling down W Madison St, chrome rims spinning, storefronts behind.
   5 S Kildare Ave and W Jackson Blvd in K-Town: green signs, TWISTA tagged, the old Sears brick tower at Homan Square behind at dusk.
   No logos, no faces; no 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes twcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tw-car{animation:twcar 5s linear infinite}.tw-car2{animation-delay:-2.5s}' +
    '@keyframes twcarl{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.tw-carl{animation:twcarl 6s linear infinite}.tw-carl2{animation-delay:-3s}' +
    '@keyframes twflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.tw-flag{animation:twflag 1.5s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes twglint{0%,70%,100%{opacity:0}80%{opacity:1}}.tw-glint{animation:twglint 3s ease-in-out infinite}' +
    '@keyframes twspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tw-hand{animation:twspin .9s linear infinite}.tw-rim{animation:twspin .5s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes twword{0%{transform:translate(0,0);opacity:0}10%{opacity:1}100%{transform:translate(220px,-40px);opacity:0}}.tw-w{animation:twword 2.4s linear infinite}.tw-w2{animation-delay:-.6s}.tw-w3{animation-delay:-1.2s}.tw-w4{animation-delay:-1.8s}' +
    '@keyframes twvu{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.tw-vu{animation:twvu .35s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.tw-vu2{animation-delay:-.12s}.tw-vu3{animation-delay:-.24s}' +
    '@keyframes twcruise{0%{transform:translateX(-170px)}100%{transform:translateX(430px)}}.tw-cruise{animation:twcruise 7s linear infinite}' +
    '@keyframes twbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-18px)}}.tw-bird{animation:twbird 12s linear infinite}.tw-bird2{animation-delay:-6s}' +
    '@keyframes twblink{0%,100%{opacity:.3}50%{opacity:1}}.tw-bl{animation:twblink 1.4s ease-in-out infinite}.tw-bl2{animation-delay:-.7s}' +
    '@keyframes twspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tw-sp{animation:twspray 1.4s ease-out infinite}.tw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "tw-bl" + (i % 2 ? " tw-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const car = (x, y, c, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="46" height="13" rx="4" fill="' + c + '"/><path d="M' + (x + 9) + ' ' + y + 'l6 -8h16l6 8z" fill="' + c + '"/><path d="M' + (x + 16) + ' ' + (y - 1) + 'l3 -5h10l3 5z" fill="#cfe3f0"/><circle cx="' + (x + 10) + '" cy="' + (y + 13) + '" r="4" fill="#111"/><circle cx="' + (x + 36) + '" cy="' + (y + 13) + '" r="4" fill="#111"/></g>';
  const GOLD = "#ffc83d", RED = "#e8402f", BLUE = "#00a1de";

  /* 1. Pulaski on the Blue Line, in the median of the Eisenhower */
  function twstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="128" width="28" height="20" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="118" width="332" height="50" rx="8" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="152" width="332" height="5" fill="' + BLUE + '"/><rect x="330" y="124" width="30" height="24" rx="3" fill="#1c2630"/>' +
      '<rect x="296" y="120" width="30" height="7" rx="1" fill="#111"/><text x="311" y="126" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb84a">FOREST PK</text>' +
      '<circle cx="358" cy="160" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tws1)"/>' +
      '<g fill="#7d8b99" opacity=".6"><rect x="250" y="22" width="22" height="44"/><rect x="276" y="10" width="16" height="56"/><rect x="296" y="30" width="20" height="36"/><rect x="330" y="18" width="12" height="48"/><rect x="345" y="38" width="30" height="28"/></g>' +
      '<g class="tw-bird"><path d="M20 20q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* Pulaski Rd bridge over the expressway */
      '<rect x="0" y="58" width="400" height="16" fill="#9a958a"/><rect x="0" y="54" width="400" height="5" fill="#bdb6a8"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="46" width="2" height="9" fill="#6f6a60"/>').join("") + '<rect x="0" y="46" width="400" height="2" fill="#6f6a60"/>' +
      '<rect x="0" y="74" width="400" height="10" fill="#45484d" opacity=".6"/>' +
      /* eastbound lanes */
      '<rect x="0" y="84" width="400" height="30" fill="#5c5f63"/><path d="M0 99h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="16 12"/>' +
      car(0, 86, "#c0392b", "tw-car") + car(0, 100, "#f5f5f5", "tw-car tw-car2") +
      '<rect x="0" y="114" width="400" height="4" fill="#9aa3ab"/>' +
      train +
      /* platform */
      '<rect x="0" y="168" width="400" height="22" fill="#a8a296"/><rect x="0" y="168" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="20" y="148" width="4" height="22" fill="#5a6168"/><rect x="376" y="148" width="4" height="22" fill="#5a6168"/>' +
      /* westbound lanes */
      '<rect x="0" y="190" width="400" height="30" fill="#5c5f63"/><path d="M0 205h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="16 12"/>' +
      car(0, 192, "#2c6fb0", "tw-carl") + car(0, 206, "#e3b23c", "tw-carl tw-carl2") +
      /* station sign */
      '<rect x="0" y="220" width="400" height="40" fill="#3d4046"/>' +
      '<rect x="60" y="224" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="224" width="280" height="5" fill="' + BLUE + '"/>' +
      '<text x="76" y="250" ' + font + ' font-size="17" fill="#fff">Pulaski</text>' +
      '<rect x="248" y="233" width="80" height="18" rx="9" fill="' + BLUE + '"/><text x="288" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">BLUE</text>',
      sky("tws1", "#8cc2ea", "#f3dcc0"));
  }

  /* 2. Garfield Park Gold Dome fieldhouse */
  function twdome() {
    const TC = "#efe1c2", TCd = "#cdb88f";
    const wins = Array.from({ length: 6 }, (_, i) => { const x = i < 3 ? 70 + i * 26 : 262 + (i - 3) * 26; return '<path d="M' + x + ' 170v-30q8 -10 16 0v30z" fill="#4a5a66"/><rect x="' + x + '" y="112" width="16" height="16" fill="#4a5a66"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tws2)"/>' +
      '<g class="tw-bird"><path d="M30 30q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="tw-bird tw-bird2"><path d="M70 46q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="56" y="100" width="288" height="80" fill="' + TC + '" stroke="' + TCd + '" stroke-width="2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M56 ' + (108 + i * 8) + 'h288" stroke="' + TCd + '" stroke-width=".8"/>').join("") +
      '<rect x="52" y="94" width="296" height="8" fill="' + TCd + '"/>' + wins +
      /* center pavilion */
      '<rect x="150" y="76" width="100" height="104" fill="' + TC + '" stroke="' + TCd + '" stroke-width="2"/><path d="M146 80h108l-6 -10h-96z" fill="' + TCd + '"/>' +
      '<path d="M178 180v-46q22 -24 44 0v46z" fill="#3a4650"/><path d="M174 134q26 -30 52 0" stroke="#b8975a" stroke-width="3" fill="none"/>' +
      '<rect x="162" y="90" width="12" height="20" fill="#4a5a66"/><rect x="226" y="90" width="12" height="20" fill="#4a5a66"/>' +
      '<path d="M160 122q-8 -10 0 -18M240 122q8 -10 0 -18" stroke="#b8975a" stroke-width="2.5" fill="none"/>' +
      /* drum + gold dome + lantern */
      '<rect x="164" y="56" width="72" height="22" fill="' + TC + '" stroke="' + TCd + '" stroke-width="1.5"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (170 + i * 13) + '" y="60" width="7" height="13" rx="3" fill="#4a5a66"/>').join("") +
      '<path d="M160 58q40 -62 80 0z" fill="#e2b13c" stroke="#9c7420" stroke-width="2"/><path d="M178 56q22 -46 44 0" stroke="#f6d77a" stroke-width="2" fill="none" opacity=".8"/><path d="M200 8v48" stroke="#b78a2a" stroke-width="1.5"/>' +
      '<rect x="194" y="2" width="12" height="10" fill="#e2b13c" stroke="#9c7420" stroke-width="1.2"/>' +
      '<g class="tw-glint"><path d="M186 26l3 -7l3 7l-3 7z" fill="#fffbe6"/><path d="M181 26h16" stroke="#fffbe6" stroke-width="1.2"/></g>' +
      /* flags */
      '<rect x="98" y="62" width="2" height="38" fill="#666"/><g class="tw-flag"><rect x="100" y="64" width="22" height="13" fill="#fff"/><path d="M100 67h22M100 74h22" stroke="#7fc3ee" stroke-width="2.5"/><g fill="#d7262e"><circle cx="106" cy="70.5" r="1.4"/><circle cx="111" cy="70.5" r="1.4"/><circle cx="116" cy="70.5" r="1.4"/></g></g>' +
      '<rect x="300" y="62" width="2" height="38" fill="#666"/><g class="tw-flag"><rect x="302" y="64" width="22" height="13" fill="#fff"/><path d="M302 67h22M302 74h22" stroke="#7fc3ee" stroke-width="2.5"/><g fill="#d7262e"><circle cx="308" cy="70.5" r="1.4"/><circle cx="313" cy="70.5" r="1.4"/><circle cx="318" cy="70.5" r="1.4"/></g></g>' +
      '<rect x="0" y="180" width="400" height="80" fill="#6fa356"/>' +
      '<path d="M178 180l-40 80h124l-40 -80z" fill="#d9d2c2"/>' +
      '<g fill="#3d6f34"><ellipse cx="22" cy="168" rx="26" ry="30"/><ellipse cx="378" cy="168" rx="26" ry="30"/></g>' +
      '<rect x="110" y="236" width="180" height="18" rx="9" fill="#2c2410" opacity=".85"/>' +
      '<text x="200" y="249" text-anchor="middle" ' + font + ' font-size="11" fill="#ffe7a3">GARFIELD PARK GOLD DOME</text>',
      sky("tws2", "#7fbbe8", "#f6ecd4"));
  }

  /* 3. The fastest tongue: speed-record booth */
  function twrecord() {
    const words = ["TWISTA", "RAPID", "FIRE", "FLOW"].map((w, i) => '<g class="tw-w' + (i ? " tw-w" + (i + 1) : "") + '"><text x="150" y="' + (118 + i * 14) + '" ' + font + ' font-size="13" fill="' + [GOLD, "#fff", RED, BLUE][i] + '">' + w + '</text></g>').join("");
    const ticks = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M' + (300 + Math.sin(a) * 40) + ' ' + (120 - Math.cos(a) * 40) + 'L' + (300 + Math.sin(a) * 47) + ' ' + (120 - Math.cos(a) * 47) + '" stroke="#222" stroke-width="2.5"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#16100c"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="200" fill="' + (i % 2 ? "#2a1d15" : "#25190f") + '"/>').join("") +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + ((i % 10) * 40 + 8) + ' ' + (20 + Math.floor(i / 10) * 60) + 'l12 12l12 -12l-12 -12z" fill="#3a2a1e"/>').join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3b2a1f"/>' +
      /* mic stand */
      '<rect x="88" y="128" width="4" height="96" fill="#888"/><path d="M70 224h40" stroke="#888" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M90 130l26 -18" stroke="#888" stroke-width="4"/><rect x="108" y="86" width="22" height="36" rx="11" fill="#c9cdd2" stroke="#555" stroke-width="2" transform="rotate(-34 119 104)"/>' +
      '<circle cx="128" cy="96" r="22" fill="none" stroke="#666" stroke-width="2" opacity=".7"/>' +
      words +
      /* stopwatch */
      '<rect x="292" y="62" width="16" height="12" rx="2" fill="#aab"/><rect x="286" y="56" width="28" height="8" rx="3" fill="' + GOLD + '"/>' +
      '<circle cx="300" cy="120" r="54" fill="' + GOLD + '" stroke="#7a5512" stroke-width="3"/><circle cx="300" cy="120" r="48" fill="#fffaf0"/>' + ticks +
      '<g class="tw-hand" style="transform-origin:300px 120px"><path d="M300 124V80" stroke="' + RED + '" stroke-width="3" stroke-linecap="round"/></g><circle cx="300" cy="120" r="5" fill="#222"/>' +
      /* VU meter */
      '<g transform="translate(160 176)">' + [0, 1, 2, 3, 4, 5].map(i => '<rect class="tw-vu' + (i % 3 ? " tw-vu" + (i % 3 + 1) : "") + '" x="' + (i * 12) + '" y="0" width="8" height="22" fill="' + (i > 3 ? RED : "#4cd964") + '"/>').join("") + '</g>' +
      '<rect x="80" y="232" width="240" height="20" rx="10" fill="#000" opacity=".6"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">TUNG TWISTA · THE FASTEST TONGUE</text>');
  }

  /* 4. Right off Madison: a drop-top cruising W Madison St */
  function twmadison() {
    const shops = [["#8a4b3a", 0, "#ffd36b"], ["#5d6f86", 80, "#ff7a6b"], ["#a8754f", 160, "#8fe3ff"], ["#6b5a7a", 240, "#ffd36b"], ["#7d5e45", 320, "#a8ff8f"]].map(s =>
      '<rect x="' + s[1] + '" y="56" width="78" height="96" fill="' + s[0] + '"/><rect x="' + s[1] + '" y="56" width="78" height="6" fill="#2c2420"/>' +
      '<rect x="' + (s[1] + 8) + '" y="70" width="18" height="18" fill="#cfe3f0" opacity=".6"/><rect x="' + (s[1] + 32) + '" y="70" width="18" height="18" fill="#cfe3f0" opacity=".6"/><rect x="' + (s[1] + 56) + '" y="70" width="16" height="18" fill="#cfe3f0" opacity=".6"/>' +
      '<rect x="' + (s[1] + 4) + '" y="102" width="70" height="12" fill="#222"/><rect class="tw-bl" x="' + (s[1] + 10) + '" y="105" width="58" height="6" fill="' + s[2] + '" opacity=".8"/>' +
      '<rect x="' + (s[1] + 6) + '" y="118" width="40" height="34" fill="#2e3b46"/><rect x="' + (s[1] + 52) + '" y="118" width="20" height="34" fill="#3a2a22"/>').join("");
    const rim = (cx) => '<circle cx="' + cx + '" cy="206" r="15" fill="#111"/><circle cx="' + cx + '" cy="206" r="10" fill="#d9dee3"/><g class="tw-rim">' +
      Array.from({ length: 6 }, (_, i) => { const a = i * Math.PI / 3; return '<path d="M' + cx + ' 206L' + (cx + Math.cos(a) * 9) + ' ' + (206 + Math.sin(a) * 9) + '" stroke="#7d868f" stroke-width="2"/>'; }).join("") + '</g><circle cx="' + cx + '" cy="206" r="2.5" fill="#555"/>';
    const ride = '<g class="tw-cruise"><path d="M10 196q4 -22 30 -24h44l20 -16h40l18 16h22q14 2 16 24z" fill="' + RED + '" stroke="#6e1a12" stroke-width="2"/>' +
      '<path d="M108 158l-12 14h50l-6 -14z" fill="#cfe3f0" opacity=".7"/><rect x="60" y="176" width="70" height="4" fill="#6e1a12"/>' +
      '<rect x="14" y="184" width="8" height="5" fill="#ffd36b"/><rect x="186" y="184" width="8" height="5" fill="#ff5a4a"/>' + rim(48) + rim(160) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tws4)"/>' +
      '<g class="tw-bird"><path d="M20 22q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      shops +
      '<rect x="0" y="152" width="400" height="10" fill="#cfc8b8"/><rect x="0" y="162" width="400" height="98" fill="#4f5257"/><path d="M0 228h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="356" y="60" width="4" height="96" fill="#2f2f2f"/>' + sign(298, 64, 98, "W Madison St") +
      ride +
      '<rect x="110" y="236" width="180" height="18" rx="9" fill="#000" opacity=".55"/>' +
      '<text x="200" y="249" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">RIGHT OFF MADISON</text>',
      sky("tws4", "#ffb36b", "#ffe2b8"));
  }

  /* 5. S Kildare Ave and W Jackson Blvd in K-Town, the Sears tower at Homan Square behind */
  function twcorner() {
    const BR = "#8e4a32", BRd = "#6e3624";
    const tower = '<g><rect x="232" y="20" width="56" height="110" fill="' + BR + '"/>' +
      Array.from({ length: 9 }, (_, r) => [0, 1, 2].map(c => '<rect x="' + (240 + c * 16) + '" y="' + (30 + r * 11) + '" width="8" height="7" fill="' + (r % 3 === 1 && c === 1 ? "#ffd98a" : "#3a2a24") + '"/>').join("")).join("") +
      '<rect x="228" y="16" width="64" height="6" fill="#d9c7a3"/><rect x="238" y="0" width="44" height="16" fill="' + BRd + '"/>' +
      '<path d="M240 16v-8q20 -12 40 0v8z" fill="#3f5f55"/><rect x="258" y="-6" width="4" height="8" fill="#3f5f55"/>' +
      '<rect x="180" y="96" width="160" height="34" fill="' + BRd + '"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (186 + i * 19) + '" y="104" width="10" height="16" fill="' + (i % 3 ? "#3a2a24" : "#ffd98a") + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tws5)"/>' + stars(16) + tower +
      '<rect x="0" y="128" width="400" height="96" fill="#d8d2c4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#c4bdae" stroke-width="1"/>').join("") +
      tag("TWISTA", 18, 196, 62, GOLD, -6) + tag("K-TOWN", 250, 214, 22, BLUE, -4) + tag("SPEEDKNOT", 24, 216, 15, RED, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="344" y="98" width="6" height="126" fill="#2f2f2f"/>' +
      sign(262, 100, 136, "S Kildare Ave") + sign(270, 126, 120, "W Jackson Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="tw-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="tw-sp"><circle cx="196" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tw-sp tw-sp2"><circle cx="202" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tws5", "#1a1530", "#e0874f"));
  }

  window.SCENES = { twstation: twstation, twdome: twdome, twrecord: twrecord, twmadison: twmadison, twcorner: twcorner };
})();
