/* 2chainz scenes (Regions tab: Atlanta; College Park - North Clayton High, Riverdale Rd). CSS classes and ids prefixed tc- (the page's own anim-train is kept).
   1 MARTA Route 196 (Upper Riverdale) rolling down Riverdale Rd in College Park, past Norman Dr: white MARTA bus with blue + orange bands, the stop flag, pines and a low strip behind.
   2 The Pink Trap House on Howell Mill Rd NW (his 2017 pop-up for Pretty Girls Like Trap Music): the whole house painted pink, a pink car out front, the line out the door, flashes going off.
   3 North Clayton High School gym, College Park (where he was a basketball star before Alabama State): blue + white Eagles court, the hoop, a ball dropping through.
   4 Castleberry Hill (his restaurant on Nelson St SW): old red-brick warehouse lofts, string lights, a plain awning, the Nelson St bridge rail.
   5 Riverdale Rd and Norman Dr in College Park: green signs, 2 CHAINZ tagged with TRU and TELL EM, a jet climbing out of Hartsfield-Jackson and downtown far off.
   400 x 260 SVGs. No logos, no faces. Every 9 is drawn by hand with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tcbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.tc-bus{animation:tcbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes tcglow{0%,100%{opacity:.45}50%{opacity:1}}.tc-glow{animation:tcglow 2.2s ease-in-out infinite}.tc-g2{animation-delay:-1.1s}' +
    '@keyframes tcflash{0%,80%,100%{opacity:0}85%{opacity:1}}.tc-fl{animation:tcflash 2.6s infinite}.tc-fl2{animation-delay:-.9s}.tc-fl3{animation-delay:-1.7s}' +
    '@keyframes tcball{0%{transform:translateY(-34px)}55%{transform:translateY(22px)}70%{transform:translateY(14px)}100%{transform:translateY(22px)}}.tc-ball{animation:tcball 2.4s ease-in infinite}' +
    '@keyframes tcnet{0%,50%,100%{transform:scaleY(1)}60%{transform:scaleY(1.25)}}.tc-net{transform-box:fill-box;transform-origin:50% 0%;animation:tcnet 2.4s ease-in infinite}' +
    '@keyframes tcbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tc-bob{animation:tcbob .9s ease-in-out infinite}.tc-bob2{animation-delay:-.45s}' +
    '@keyframes tcsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tc-sp{animation:tcsp 1.4s ease-out infinite}.tc-sp2{animation-delay:.45s}' +
    '@keyframes tcjet{from{transform:translate(-80px,40px)}to{transform:translate(460px,-60px)}}.tc-jet{animation:tcjet 9s linear infinite}' +
    '@keyframes tccar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.tc-car{animation:tccar 6s linear infinite}' +
    '@keyframes tctw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.tc-tw{transform-box:fill-box;transform-origin:50% 50%;animation:tctw 1.8s ease-in-out infinite}.tc-tw2{animation-delay:-.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.2, w = sz * 0.13; return '<circle cx="' + (x + r + w / 2 + sz * 0.04) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2 + sz * 0.04) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  /* "196" with the hand-drawn 9, centred on cx */
  const r196 = (cx, y, sz, c) => { const d = sz * 0.56, x0 = cx - 1.5 * d; return '<text x="' + (x0 + d / 2) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">1</text>' + nine(x0 + d, y, sz, c) + '<text x="' + (x0 + 2.5 * d) + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + sz + '" fill="' + c + '">6</text>'; };
  const PINK = "#ff6fb0", HOT = "#ff2f8e", GOLD = "#f5c542", BLUE = "#2f6fd1", BUS = "#1f4e79", ORANGE = "#f7941d";
  const pine = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#5a3e2a"/><path d="M0 -60l14 26h-6l12 22h-40l12 -22h-6z" fill="#2f5a34"/></g>';

  /* 1. MARTA Route 196 down Riverdale Rd in College Park */
  function tcbus() {
    const bus = '<g class="tc-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="112" height="11" rx="2" fill="#111"/><text x="100" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">UPPER RIVERDALE</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tc1)"/>' +
      '<circle cx="64" cy="40" r="17" fill="#ffe9a8" opacity=".85"/>' +
      pine(20, 120, 1) + pine(60, 118, .8) + pine(250, 120, .9) + pine(300, 122, 1.1) + pine(388, 120, .9) +
      /* low strip of shops behind, plain */
      '<rect x="96" y="96" width="150" height="46" fill="#d8cdb8"/><rect x="96" y="92" width="150" height="6" fill="#8a7a62"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (104 + i * 28) + '" y="106" width="20" height="24" fill="#2a3442"/>').join("") +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="314" y="62" width="50" height="40" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="76" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text>' + r196(339, 96, 14, "#fff") +
      '<rect x="270" y="106" width="126" height="14" rx="2" fill="#111"/><text x="333" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">RIVERDALE RD · NORMAN DR</text>',
      sky("tc1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. The Pink Trap House on Howell Mill Rd: all pink, pink car, the line out front, flashes */
  function tctraphouse() {
    const person = (x, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="178" r="5" fill="#2a1a14"/><rect x="' + (x - 6) + '" y="184" width="12" height="20" rx="4" fill="' + c + '"/><rect x="' + (x - 5) + '" y="204" width="4" height="12" fill="#222"/><rect x="' + (x + 1) + '" y="204" width="4" height="12" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tc2)"/>' +
      '<g fill="#3c6b3a"><ellipse cx="24" cy="120" rx="40" ry="36"/><ellipse cx="380" cy="116" rx="40" ry="38"/></g>' +
      /* the house */
      '<path d="M78 92l122 -58l122 58z" fill="' + HOT + '"/><rect x="92" y="90" width="216" height="104" fill="' + PINK + '"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M92 ' + (98 + i * 10) + 'h216" stroke="#f05aa0" stroke-width="1"/>').join("") +
      [108, 148, 236, 276].map(x => '<rect x="' + x + '" y="108" width="24" height="30" fill="#ffd1e6" stroke="#fff" stroke-width="2"/><path d="M' + (x + 12) + ' 108v30M' + x + ' 123h24" stroke="#fff" stroke-width="1.5"/>').join("") +
      '<rect x="186" y="138" width="28" height="56" fill="' + HOT + '" stroke="#fff" stroke-width="2"/><circle cx="208" cy="168" r="2" fill="#fff"/>' +
      '<rect x="84" y="142" width="232" height="6" fill="#fff"/>' + [96, 140, 260, 304].map(x => '<rect x="' + x + '" y="148" width="5" height="46" fill="#fff"/>').join("") +
      '<rect x="150" y="56" width="100" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="71" text-anchor="middle" ' + font + ' font-size="10" fill="' + PINK + '" letter-spacing="1">TRAP HOUSE</text>' +
      '<rect x="0" y="194" width="400" height="66" fill="#6aa84f"/><rect x="0" y="222" width="400" height="38" fill="#7a7a80"/>' +
      /* the line out front */
      person(40, "#2d2d2d", "tc-bob") + person(58, GOLD, "tc-bob tc-bob2") + person(76, "#4fb3ff", "tc-bob") + person(330, "#fff", "tc-bob tc-bob2") + person(348, "#2d2d2d", "tc-bob") + person(366, HOT, "tc-bob tc-bob2") +
      /* pink car */
      '<g transform="translate(150 214)"><rect x="0" y="10" width="110" height="22" rx="8" fill="' + PINK + '" stroke="#c23d7d" stroke-width="2"/><path d="M20 10l12 -14h44l14 14z" fill="' + HOT + '"/><rect x="36" y="-1" width="18" height="10" fill="#2a3442"/><rect x="58" y="-1" width="18" height="10" fill="#2a3442"/>' +
      '<circle cx="24" cy="32" r="8" fill="#222"/><circle cx="24" cy="32" r="3" fill="#ddd"/><circle cx="88" cy="32" r="8" fill="#222"/><circle cx="88" cy="32" r="3" fill="#ddd"/></g>' +
      /* camera flashes */
      '<g class="tc-fl"><path d="M70 160l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="#fff"/></g><g class="tc-fl tc-fl2"><path d="M340 160l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="#fff"/></g><g class="tc-fl tc-fl3"><path d="M120 200l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="270" y="236" width="122" height="16" rx="2" fill="#111"/><text x="331" y="247.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + PINK + '">HOWELL MILL RD NW</text>',
      sky("tc2", "#9fd3f4", "#ffe4ef"));
  }

  /* 3. North Clayton High gym: blue + white Eagles court, ball through the hoop */
  function tcgym() {
    return svg(
      '<rect width="400" height="260" fill="#1d2a44"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 52) + '" y="0" width="46" height="110" fill="#22324f"/>').join("") +
      /* bleachers */
      Array.from({ length: 5 }, (_, r) => '<rect x="0" y="' + (66 + r * 10) + '" width="400" height="7" fill="' + (r % 2 ? "#3a4a66" : "#46587a") + '"/>').join("") +
      /* banner */
      '<rect x="36" y="14" width="120" height="40" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="2"/><text x="96" y="31" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">NORTH CLAYTON</text><text x="96" y="46" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="2">EAGLES</text>' +
      '<path d="M178 30l20 -8l20 8l-20 4z" fill="#fff" class="tc-glow"/>' +
      /* lights */
      [250, 310, 370].map(x => '<rect class="tc-glow" x="' + (x - 14) + '" y="8" width="28" height="6" rx="2" fill="#fff6c2"/>').join("") +
      /* floor */
      '<path d="M0 150h400v110H0z" fill="#d9a35a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (154 + i * 9) + 'h400" stroke="#c48c48" stroke-width="1"/>').join("") +
      '<path d="M0 150h400" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="214" rx="54" ry="20" fill="none" stroke="#fff" stroke-width="3"/><ellipse cx="200" cy="214" rx="20" ry="8" fill="' + BLUE + '"/>' +
      '<path d="M200 150v110" stroke="#fff" stroke-width="3"/><rect x="300" y="150" width="100" height="52" fill="' + BLUE + '" opacity=".75"/><path d="M300 150v52h100" stroke="#fff" stroke-width="3" fill="none"/>' +
      /* hoop */
      '<rect x="344" y="62" width="6" height="88" fill="#9aa1a8"/><rect x="310" y="54" width="70" height="44" rx="2" fill="#fff" stroke="#9aa1a8" stroke-width="2"/><rect x="332" y="70" width="26" height="18" fill="none" stroke="' + BLUE + '" stroke-width="2.5"/>' +
      '<path d="M330 98h30" stroke="#ff5a1f" stroke-width="3"/><path class="tc-net" d="M330 98l5 16h20l5 -16M337 98l3 16M345 98v16M353 98l-3 16" stroke="#fff" stroke-width="1.2" fill="none"/>' +
      '<g class="tc-ball"><circle cx="345" cy="88" r="8" fill="#e07a2a" stroke="#5a2a0a" stroke-width="1.5"/><path d="M337 88h16M345 80v16" stroke="#5a2a0a" stroke-width="1.2"/></g>' +
      '<rect x="20" y="232" width="150" height="18" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/><text x="95" y="245" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">HOME OF THE EAGLES</text>',
      "");
  }

  /* 4. Castleberry Hill: red-brick warehouse lofts on Nelson St SW, string lights, a plain awning */
  function tccastleberry() {
    const bulbs = Array.from({ length: 16 }, (_, i) => { const x = 20 + i * 24, y = 104 + Math.sin(i * 0.8) * 3 + (i % 2) * 4; return '<circle class="tc-glow' + (i % 2 ? ' tc-g2' : '') + '" cx="' + x + '" cy="' + y + '" r="3" fill="#ffd98a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tc4)"/>' +
      '<g fill="#232634"><rect x="250" y="20" width="34" height="80"/><rect x="290" y="38" width="28" height="62"/><rect x="326" y="10" width="26" height="90"/></g>' +
      /* lofts */
      '<rect x="0" y="40" width="230" height="160" fill="#8e3b2a"/><rect x="230" y="70" width="170" height="130" fill="#a14a34"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M0 ' + (46 + i * 10) + 'h230" stroke="#7a3122" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => '<path d="M230 ' + (76 + i * 10) + 'h170" stroke="#8a3d2a" stroke-width="1"/>').join("") +
      '<rect x="0" y="36" width="230" height="6" fill="#5e2a1e"/><rect x="230" y="66" width="170" height="6" fill="#6e3424"/>' +
      [16, 70, 124, 178].map(x => '<rect x="' + x + '" y="54" width="34" height="38" fill="#2a3442" stroke="#d9cbb0" stroke-width="2"/><path d="M' + (x + 17) + ' 54v38M' + x + ' 73h34" stroke="#d9cbb0" stroke-width="1"/>').join("") +
      [250, 300, 350].map(x => '<rect x="' + x + '" y="84" width="30" height="34" fill="#ffd98a" opacity=".55" stroke="#d9cbb0" stroke-width="2"/>').join("") +
      /* awning + door */
      '<path d="M40 140h150l-10 16H50z" fill="#1a1a1a"/><rect x="58" y="156" width="114" height="44" fill="#2a1e18"/><rect x="96" y="160" width="38" height="40" fill="#ffd98a" opacity=".7"/>' +
      '<rect x="250" y="150" width="120" height="50" fill="#2a1e18"/><rect x="262" y="158" width="44" height="42" fill="#ffd98a" opacity=".5"/><rect x="316" y="158" width="44" height="42" fill="#ffd98a" opacity=".5"/>' +
      '<path d="M0 100q200 18 400 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      '<rect x="0" y="200" width="400" height="60" fill="#5d5a55"/><path d="M0 214h400" stroke="#4a4844" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="200" width="3" height="14" fill="#2b2b2b"/>').join("") + '<rect x="0" y="198" width="400" height="4" fill="#2b2b2b"/>' +
      '<g class="tc-car"><rect x="0" y="230" width="70" height="16" rx="6" fill="#1a1a1e"/><rect x="12" y="224" width="40" height="10" rx="4" fill="#2a2a32"/><circle cx="14" cy="247" r="5" fill="#111"/><circle cx="56" cy="247" r="5" fill="#111"/><circle cx="68" cy="236" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="244" y="22" width="150" height="16" rx="2" fill="#111" stroke="' + GOLD + '" stroke-width="1.2"/><text x="319" y="33.5" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CASTLEBERRY HILL</text>',
      sky("tc4", "#1b1f3e", "#d9774a"));
  }

  /* 5. Riverdale Rd and Norman Dr: green signs, 2 CHAINZ tagged, a jet climbing out of the airport, downtown far off */
  function tccorner() {
    const city = '<g fill="#232634">' + [[150, 96, 16], [168, 84, 12], [182, 90, 18], [202, 78, 10], [214, 92, 16]].map(b => '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (134 - b[1]) + '"/>').join("") + '</g>';
    const jet = '<g class="tc-jet"><g transform="translate(60 70) rotate(-12)"><rect x="0" y="0" width="56" height="9" rx="4.5" fill="#e8ecf2"/><path d="M20 4l14 -18h6l-6 18zM20 5l14 18h6l-6 -18z" fill="#c9d0da"/><path d="M2 4l-4 -12h6l6 12z" fill="#c9d0da"/>' +
      '<circle class="tc-glow" cx="56" cy="4.5" r="2" fill="#ff4a4a"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tc5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle class="' + (i % 3 ? "" : "tc-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      city + jet +
      '<rect x="0" y="134" width="400" height="90" fill="#e9e3d6"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#d6cfbf" stroke-width="1"/>').join("") +
      tag("TRU", 24, 166, 26, GOLD, -4) + tag("2 CHAINZ", 16, 208, 42, PINK, -5) + tag("TELL EM", 214, 156, 20, BLUE, -6) + tag("COLLEGE PARK", 168, 216, 14, "#222", -3) +
      '<g class="tc-tw"><path d="M290 150l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + GOLD + '"/></g><g class="tc-tw tc-tw2"><path d="M258 188l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="' + PINK + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="tc-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + PINK + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="' + HOT + '"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(284, 98, 112, "Riverdale Rd") + sign(296, 124, 92, "Norman Dr") +
      '<g class="tc-sp"><circle cx="196" cy="180" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="tc-sp tc-sp2"><circle cx="202" cy="174" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("tc5", "#141a3a", "#e0864a"));
  }

  window.SCENES = { tcbus: tcbus, tctraphouse: tctraphouse, tcgym: tcgym, tccastleberry: tccastleberry, tccorner: tccorner };
})();
