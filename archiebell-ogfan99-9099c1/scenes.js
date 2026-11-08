/* archiebell scenes (Regions tab: Houston + Texas; Fifth Ward, Houston). CSS classes prefixed abd- (the page's own anim-train is kept).
   1 METRO's 11 Almeda/Lyons bus pulling up to the Lyons Ave @ Jensen Dr stop in Fifth Ward (no rail in Fifth Ward).
   2 Club Matinee on Lyons Ave, the Fifth Ward club Archie snuck into as a teen and later played: neon sign, dancers in the windows.
   3 E.O. Smith Junior High, where Archie formed the Drells: red-brick school, flag waving, four singers (backs turned) on the steps.
   4 KCOH radio, where DJ Skipper Lee Frazier got the group on record: ON AIR light, the "Tighten Up" 45 spinning, the tower blinking.
   5 Lyons Ave and Jensen Dr: green signs, DRELLS tagged on the brick, the DeLuxe Theater's marquee lit up behind.
   No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes abdblink{0%,100%{opacity:.25}50%{opacity:1}}.abd-bl{animation:abdblink 1.4s ease-in-out infinite}.abd-bl2{animation-delay:-.7s}' +
    '@keyframes abdneon{0%,100%{opacity:1}45%{opacity:1}50%{opacity:.35}55%{opacity:1}}.abd-neon{animation:abdneon 2.6s linear infinite}' +
    '@keyframes abddance{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-3px) rotate(4deg)}}.abd-dance{animation:abddance .6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.abd-d2{animation-delay:-.3s}' +
    '@keyframes abdwave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.abd-flag{animation:abdwave 1.2s ease-in-out infinite;transform-box:fill-box;transform-origin:0 50%}' +
    '@keyframes abdnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(12px,-56px);opacity:0}}.abd-note{animation:abdnote 3s ease-out infinite}.abd-n2{animation-delay:-1s}.abd-n3{animation-delay:-2s}' +
    '@keyframes abdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.abd-spin{animation:abdspin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes abdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.abd-sway{animation:abdsway 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}.abd-s2{animation-delay:-.4s}.abd-s3{animation-delay:-.8s}.abd-s4{animation-delay:-1.2s}' +
    '@keyframes abdchase{0%,100%{opacity:1}50%{opacity:.2}}.abd-ch{animation:abdchase .8s steps(2) infinite}.abd-ch2{animation-delay:-.4s}' +
    '@keyframes abdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.abd-sp{animation:abdspray 1.4s ease-out infinite}.abd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "abd-bl" + (i % 2 ? " abd-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const oak = (x, base, s) => '<g><rect x="' + (x - 3 * s) + '" y="' + (base - 26 * s) + '" width="' + (6 * s) + '" height="' + (26 * s) + '" fill="#4a3526"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 34 * s) + '" rx="' + (30 * s) + '" ry="' + (16 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 14 * s) + '" cy="' + (base - 40 * s) + '" rx="' + (16 * s) + '" ry="' + (11 * s) + '" fill="#3a6b3e"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (base - 42 * s) + '" rx="' + (15 * s) + '" ry="' + (10 * s) + '" fill="#356340"/></g>';
  const GOLD = "#f5c542", RED = "#e5484d", TEAL = "#3fb6c8", CREAM = "#f3e6c8", BUS = "#1f5fa8";
  /* a singer seen from behind: suit, no face */
  const back = (x, base, suit, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (base - 44) + '" r="7" fill="#2a1a12"/>' +
    '<path d="M' + (x - 10) + ' ' + (base - 16) + 'l2 -20q8 -6 16 0l2 20z" fill="' + suit + '"/><rect x="' + (x - 8) + '" y="' + (base - 16) + '" width="6" height="16" fill="#1a1a22"/><rect x="' + (x + 2) + '" y="' + (base - 16) + '" width="6" height="16" fill="#1a1a22"/></g>';
  const note = (x, y, c, cls) => '<g class="abd-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="1.6" height="14" fill="' + c + '"/></g>';
  const brick = (x, y, w, h, base, line) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>' + Array.from({ length: Math.floor(h / 10) }, (_, r) => '<path d="M' + x + ' ' + (y + 10 + r * 10) + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>').join("");

  /* 1. METRO 11 Almeda/Lyons at Lyons Ave @ Jensen Dr */
  function abdstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 44) + '" y="122" width="34" height="26" rx="3" fill="#1c2630"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="108" width="320" height="76" rx="10" fill="#f2f4f6" stroke="#7b848c" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="320" height="8" fill="' + BUS + '"/><rect x="40" y="166" width="320" height="4" fill="' + RED + '"/>' +
      '<rect x="44" y="118" width="22" height="46" rx="3" fill="#24303a"/><path d="M44 141h22" stroke="#7b848c"/>' +
      '<rect x="300" y="112" width="56" height="12" rx="2" fill="#111"/><text x="328" y="121.5" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb84a">11 LYONS</text>' +
      '<circle cx="104" cy="186" r="13" fill="#222"/><circle cx="104" cy="186" r="5" fill="#999"/><circle cx="306" cy="186" r="13" fill="#222"/><circle cx="306" cy="186" r="5" fill="#999"/>' +
      '<circle cx="352" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abds1)"/>' + stars(12) +
      brick(0, 60, 120, 70, "#7b4a3a", "#5e3528") + brick(280, 70, 120, 60, "#8a5a40", "#6a4030") +
      '<rect x="14" y="76" width="34" height="22" fill="#ffd98a" opacity=".8"/><rect x="62" y="76" width="34" height="22" fill="#ffd98a" opacity=".5"/><rect x="296" y="84" width="40" height="22" fill="#ffd98a" opacity=".7"/>' +
      oak(150, 108, 1.1) + oak(250, 110, 0.9) +
      '<rect x="0" y="130" width="400" height="66" fill="#2c2e34"/><path d="M0 176h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#a8a196"/><path d="M0 200h400" stroke="#d8d2c6" stroke-width="3"/>' +
      '<rect x="370" y="100" width="5" height="110" fill="#8a9096"/><rect x="352" y="96" width="42" height="40" rx="3" fill="#fff" stroke="' + BUS + '" stroke-width="3"/><circle cx="373" cy="112" r="9" fill="' + BUS + '"/><text x="373" y="116" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">11</text><text x="373" y="131" text-anchor="middle" ' + font + ' font-size="6.5" fill="#222">BUS STOP</text>' +
      '<rect x="14" y="208" width="330" height="42" rx="3" fill="#111"/><circle cx="38" cy="229" r="13" fill="' + BUS + '"/><text x="38" y="234" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">11</text>' +
      '<text x="60" y="226" ' + font + ' font-size="15" fill="#fff">LYONS AVE @ JENSEN DR</text><text x="60" y="242" ' + font + ' font-size="10" fill="' + GOLD + '">ALMEDA / LYONS · FIFTH WARD</text>',
      sky("abds1", "#1a1440", "#d9785a"));
  }

  /* 2. Club Matinee on Lyons Ave */
  function abdmatinee() {
    const winD = (x, cls) => '<rect x="' + x + '" y="148" width="60" height="44" fill="#ffcf7a"/><g class="abd-dance ' + cls + '">' +
      '<circle cx="' + (x + 20) + '" cy="160" r="5" fill="#3a2418"/><path d="M' + (x + 14) + ' 192l3 -26h6l3 26z" fill="#3a2418"/></g><g class="abd-dance ' + (cls ? "" : "abd-d2") + '">' +
      '<circle cx="' + (x + 40) + '" cy="162" r="5" fill="#3a2418"/><path d="M' + (x + 33) + ' 192l4 -24h6l4 24z" fill="#5a2a3a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#abds2)"/>' + stars(16) +
      brick(40, 110, 320, 100, "#8a4a36", "#6a3426") +
      '<rect x="40" y="104" width="320" height="10" fill="#5e3022"/>' +
      '<rect x="110" y="34" width="180" height="58" rx="8" fill="#1a0e14" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text class="abd-neon" x="200" y="62" text-anchor="middle" font-family="Brush Script MT, cursive" font-style="italic" font-weight="700" font-size="30" fill="#ff5f8a" stroke="#ffd0dc" stroke-width=".8">Matinee</text>' +
      '<text x="200" y="82" text-anchor="middle" ' + font + ' font-size="10" fill="' + TEAL + '" letter-spacing="3">CLUB · LYONS AVE</text>' +
      '<rect x="196" y="92" width="8" height="14" fill="#555"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle class="abd-ch' + (i % 2 ? " abd-ch2" : "") + '" cx="' + (118 + i * 20.5) + '" cy="40" r="2.2" fill="' + GOLD + '"/>').join("") +
      winD(60, "") + winD(280, "abd-d2") +
      '<rect x="170" y="140" width="60" height="70" fill="#2a160e"/><rect x="176" y="146" width="22" height="64" fill="#3a2016"/><rect x="202" y="146" width="22" height="64" fill="#3a2016"/>' +
      '<path d="M160 136h80l-6 -10h-68z" fill="' + RED + '"/>' +
      '<rect x="132" y="116" width="136" height="18" rx="2" fill="#111"/><text x="200" y="129" text-anchor="middle" ' + font + ' font-size="9.5" fill="' + GOLD + '">TONIGHT · THE DRELLS</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3c42"/><path d="M0 214h400" stroke="#8a8478" stroke-width="5"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      note(84, 140, GOLD, "") + note(320, 138, TEAL, "abd-n2") + note(210, 112, "#ff8fb0", "abd-n3"),
      sky("abds2", "#0d0a24", "#4a2050"));
  }

  /* 3. E.O. Smith Junior High: the Drells formed here */
  function abdschool() {
    const wins = []; for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) if (!(r === 1 && (c === 3 || c === 4))) wins.push('<rect x="' + (58 + c * 37) + '" y="' + (84 + r * 44) + '" width="22" height="28" fill="#cfe3ef" stroke="#f3ead6" stroke-width="2"/><path d="M' + (69 + c * 37) + ' ' + (84 + r * 44) + 'v28" stroke="#f3ead6" stroke-width="1.5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#abds3)"/>' +
      '<circle cx="340" cy="40" r="18" fill="#fff3c4"/>' +
      brick(44, 70, 312, 132, "#9a4a32", "#7a3624") +
      '<rect x="40" y="62" width="320" height="10" fill="#e8dcc2"/><rect x="40" y="118" width="320" height="4" fill="#e8dcc2"/>' + wins.join("") +
      '<rect x="168" y="138" width="64" height="64" fill="#e8dcc2"/><rect x="178" y="148" width="20" height="54" fill="#5a3a26"/><rect x="202" y="148" width="20" height="54" fill="#5a3a26"/>' +
      '<rect x="120" y="44" width="160" height="18" rx="2" fill="#e8dcc2"/><text x="200" y="57" text-anchor="middle" ' + font + ' font-size="11" fill="#5e2a1a" letter-spacing="1">E. O. SMITH JR. HIGH</text>' +
      '<rect x="22" y="26" width="3" height="176" fill="#c8ccd0"/><g class="abd-flag"><rect x="25" y="28" width="44" height="26" fill="' + RED + '"/><rect x="25" y="28" width="16" height="13" fill="' + BUS + '"/><path d="M25 34h44M25 41h44M25 48h44" stroke="#fff" stroke-width="2"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#7aa35a"/><path d="M150 202h100l20 30h-140z" fill="#c9c2b4"/><path d="M150 210h104M144 220h116" stroke="#a8a090" stroke-width="2"/>' +
      back(168, 238, "#2e3a6a", "abd-sway") + back(190, 238, "#2e3a6a", "abd-sway abd-s2") + back(212, 238, "#2e3a6a", "abd-sway abd-s3") + back(234, 238, "#2e3a6a", "abd-sway abd-s4") +
      note(150, 186, GOLD, "") + note(252, 182, "#fff", "abd-n2") + note(200, 176, GOLD, "abd-n3") +
      '<rect x="294" y="214" width="96" height="30" rx="3" fill="#111"/><text x="342" y="227" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">WHERE THE</text><text x="342" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">DRELLS BEGAN</text>',
      sky("abds3", "#6fb2e8", "#f6dfae"));
  }

  /* 4. KCOH radio: the 45 that broke Tighten Up */
  function abdradio() {
    const grooves = [30, 25, 20].map(r => '<circle cx="250" cy="150" r="' + r + '" fill="none" stroke="#333" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2230"/>' +
      '<rect x="22" y="22" width="130" height="96" fill="url(#abds4)" stroke="#6a5a4a" stroke-width="6"/>' + stars(0) +
      '<path d="M86 112l10 -76l10 76z" fill="none" stroke="#c94a3a" stroke-width="2"/><path d="M90 84h12M92 64h8M88 100h16" stroke="#c94a3a" stroke-width="2"/><circle class="abd-bl" cx="96" cy="34" r="3.5" fill="#ff4d4d"/>' +
      '<rect x="230" y="22" width="110" height="26" rx="4" fill="#3a0a0a"/><text class="abd-bl" x="285" y="40" text-anchor="middle" ' + font + ' font-size="15" fill="#ff4d4d">ON AIR</text>' +
      '<rect x="176" y="60" width="196" height="30" rx="3" fill="#111"/><text x="274" y="80" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" letter-spacing="2">KCOH · 1430 AM</text>' +
      '<path d="M0 260l20 -84h360l20 84z" fill="#5a3a26"/><rect x="20" y="170" width="360" height="8" fill="#7a5236"/>' +
      '<rect x="196" y="112" width="110" height="70" rx="5" fill="#d8d0c0" stroke="#8a8270" stroke-width="2"/>' +
      '<g class="abd-spin"><circle cx="250" cy="150" r="34" fill="#151515"/>' + grooves + '<circle cx="250" cy="150" r="13" fill="' + RED + '"/><path d="M243 150h14" stroke="#fff" stroke-width="2"/><circle cx="250" cy="150" r="4" fill="#d8d0c0"/></g>' +
      '<path d="M296 120l-14 30" stroke="#8a8270" stroke-width="4" stroke-linecap="round"/><circle cx="296" cy="120" r="5" fill="#8a8270"/>' +
      '<rect x="88" y="190" width="6" height="40" fill="#777"/><rect x="74" y="140" width="34" height="52" rx="16" fill="#9aa0a8" stroke="#555" stroke-width="2"/><path d="M78 154h26M78 164h26M78 174h26" stroke="#555"/>' +
      '<rect x="320" y="190" width="58" height="34" rx="3" fill="#1a1a1a"/>' + [0, 1, 2, 3].map(i => '<rect x="' + (328 + i * 12) + '" y="196" width="6" height="22" fill="#333"/><rect x="' + (326 + i * 12) + '" y="' + (200 + (i % 2) * 8) + '" width="10" height="4" fill="' + GOLD + '"/>').join("") +
      '<rect x="128" y="196" width="120" height="30" rx="3" fill="#111"/><text x="188" y="215" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">TIGHTEN UP · 45</text>' +
      note(170, 120, GOLD, "") + note(330, 140, TEAL, "abd-n2") + note(140, 100, "#fff", "abd-n3"),
      sky("abds4", "#26306a", "#e08a5a"));
  }

  /* 5. Lyons Ave and Jensen Dr: the DeLuxe marquee behind */
  function abdcorner() {
    const bulbs = Array.from({ length: 12 }, (_, i) => '<circle class="abd-ch' + (i % 2 ? " abd-ch2" : "") + '" cx="' + (232 + i * 13) + '" cy="80" r="2" fill="' + GOLD + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#abds5)"/>' + stars(16) +
      '<rect x="220" y="64" width="170" height="90" fill="#d7c7a2"/><rect x="220" y="64" width="170" height="6" fill="#b8a47a"/>' +
      '<rect x="292" y="8" width="26" height="70" rx="3" fill="#1d2a5a" stroke="' + GOLD + '" stroke-width="2"/>' +
      ['D', 'E', 'L', 'U', 'X', 'E'].map((ch, i) => '<text class="abd-neon" x="305" y="' + (20 + i * 10.4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#ff6a6a">' + ch + '</text>').join("") +
      '<rect x="228" y="76" width="160" height="34" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="308" y="101" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">THE DRELLS</text>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2b2d33"/>' +
      brick(20, 108, 240, 112, "#7a3a30", "#5e2a22") +
      tag("DRELLS", 40, 164, 40, GOLD, -6) + tag("ARCHIE BELL", 50, 200, 24, RED, -4) + tag("TIGHTEN UP", 140, 214, 16, TEAL, -3) +
      '<circle class="abd-sp" cx="232" cy="188" r="3" fill="' + RED + '"/><circle class="abd-sp abd-sp2" cx="238" cy="194" r="2" fill="' + RED + '"/>' +
      '<rect x="318" y="118" width="6" height="118" fill="#8a9096"/>' + sign(270, 114, 104, "LYONS AVE") + sign(282, 140, 92, "JENSEN DR") +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3c42"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>',
      sky("abds5", "#0f1430", "#5a2a4e"));
  }

  window.SCENES = { abdstation, abdmatinee, abdschool, abdradio, abdcorner };
})();
