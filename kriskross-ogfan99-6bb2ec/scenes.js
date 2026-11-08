/* kriskross scenes (Regions tab: Atlanta; Greenbriar, Southwest Atlanta). CSS classes and ids prefixed kk- (the page's own anim-train is kept).
   1 MARTA Route 83 (Campbellton Rd) pulling up at Greenbriar Mall: white MARTA bus with blue + orange bands, the stop flag.
   2 Greenbriar Mall, where Jermaine Dupri spotted the two Chrises: the mall court, a fountain, a rack of jeans hung backwards.
   3 Woodward Academy in College Park, where both went to school (drawn generic): red brick, white columns, cupola, the flag waving.
   4 "I Missed the Bus": the yellow school bus pulling off from the corner stop, a book bag and lunch money left behind.
   5 Greenbriar Pkwy SW and Campbellton Rd SW: green signs, KRIS KROSS tagged with MAC DADDY / DADDY MAC, Greenbriar Mall behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kkbus{0%{transform:translateX(430px)}45%,100%{transform:translateX(0)}}.kk-bus{animation:kkbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes kkgo{0%,30%{transform:translateX(0)}100%{transform:translateX(-470px)}}.kk-go{animation:kkgo 5s ease-in infinite}' +
    '@keyframes kkflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.92)}}.kk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:kkflag 1.6s ease-in-out infinite}' +
    '@keyframes kkjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}.kk-jump{animation:kkjump .9s ease-in-out infinite}.kk-j2{animation-delay:-.45s}' +
    '@keyframes kkspout{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1.1)}}.kk-sp{transform-box:fill-box;transform-origin:50% 100%;animation:kkspout 1.2s ease-in-out infinite}' +
    '@keyframes kktw{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.1)}}.kk-tw{transform-box:fill-box;transform-origin:50% 50%;animation:kktw 1.8s ease-in-out infinite}.kk-tw2{animation-delay:-.6s}' +
    '@keyframes kkcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.kk-car{animation:kkcar 6s linear infinite}' +
    '@keyframes kkdust{0%{opacity:.8;transform:translateX(0)}100%{opacity:0;transform:translateX(40px)}}.kk-dust{animation:kkdust 1.2s ease-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const YEL = "#ffd400", BLUE = "#1e90ff", RED = "#ff3b30", BUS = "#1f4e79", ORANGE = "#f7941d";
  /* a pair of jeans; flip=true draws the back pockets in front (worn backwards) */
  const jeans = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0h30l2 50h-12l-5 -34l-5 34h-12z" fill="' + c + '" stroke="#16325c" stroke-width="1.5"/>' +
    '<rect x="0" y="0" width="30" height="5" fill="#16325c"/><path d="M4 9h8v8l-4 3l-4 -3zM18 9h8v8l-4 3l-4 -3z" fill="none" stroke="' + YEL + '" stroke-width="1.2"/></g>';
  /* the Greenbriar Mall front: low tan box, glass entry, the name in plain letters */
  const mall = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="0" y="-60" width="260" height="60" fill="#d8c7a6"/><rect x="0" y="-66" width="260" height="8" fill="#b89f78"/>' +
    '<rect x="96" y="-80" width="68" height="80" fill="#c9b48e"/><rect x="104" y="-50" width="52" height="50" fill="#5f8fb0"/><path d="M130 -50v50M104 -26h52" stroke="#e8e2d6" stroke-width="2"/>' +
    '<text x="130" y="-62" text-anchor="middle" ' + font + ' font-size="11" fill="#5a3a22">GREENBRIAR</text>' +
    '<rect x="14" y="-44" width="60" height="24" fill="#a88f68"/><rect x="186" y="-44" width="60" height="24" fill="#a88f68"/></g>';

  /* 1. MARTA Route 83 Campbellton Rd at Greenbriar Mall */
  function kkbus() {
    const bus = '<g class="kk-bus"><rect x="40" y="122" width="236" height="82" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="136" width="32" height="30" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="136" width="28" height="58" rx="2" fill="#24323e"/><rect x="40" y="172" width="236" height="7" fill="' + BUS + '"/><rect x="40" y="181" width="236" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="44" y="124" width="104" height="11" rx="2" fill="#111"/><text x="96" y="132.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">83 CAMPBELLTON RD</text>' +
      '<circle cx="88" cy="204" r="12" fill="#222"/><circle cx="88" cy="204" r="5" fill="#9aa1a8"/><circle cx="234" cy="204" r="12" fill="#222"/><circle cx="234" cy="204" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="190" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kk1)"/>' +
      '<circle cx="60" cy="40" r="18" fill="#ffe9a8" opacity=".8"/>' +
      mall(70, 142, 1) +
      '<g fill="#3c6b3a"><ellipse cx="30" cy="120" rx="30" ry="22"/><ellipse cx="370" cy="118" rx="32" ry="24"/></g>' +
      '<rect x="0" y="142" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="162" width="400" height="98" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="84" width="5" height="80" fill="#6b7178"/><rect x="318" y="66" width="42" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="339" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MARTA</text><text x="339" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">83</text>' +
      '<rect x="290" y="106" width="104" height="14" rx="2" fill="#111"/><text x="342" y="116" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GREENBRIAR MALL</text>',
      sky("kk1", "#8ec8ef", "#f6e6c4"));
  }

  /* 2. Inside Greenbriar Mall: the court, the fountain, jeans hung backwards in a window */
  function kkmall() {
    return svg(
      '<rect width="400" height="260" fill="url(#kk2)"/>' +
      /* skylight */
      '<path d="M60 0l40 50h200l40 -50z" fill="#bfe1f2"/><path d="M100 50l-40 -50M300 50l40 -50M150 50l-10 -50M250 50l10 -50M200 50v-50" stroke="#e8e2d6" stroke-width="3"/>' +
      '<rect x="0" y="50" width="400" height="10" fill="#e8e2d6"/>' +
      /* storefronts */
      '<rect x="10" y="70" width="150" height="110" fill="#efe6d4" stroke="#c9b48e" stroke-width="3"/><rect x="20" y="92" width="130" height="80" fill="#cfe4f0"/>' +
      '<rect x="20" y="76" width="130" height="12" fill="' + BLUE + '"/><text x="85" y="85.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BACKWARDS DENIM</text>' +
      '<path d="M26 98h118" stroke="#777" stroke-width="2"/>' + jeans(34, 100, "#3d6fb6") + jeans(72, 100, "#2f5c9a") + jeans(110, 100, "#4a7cc4") +
      '<rect x="240" y="70" width="150" height="110" fill="#efe6d4" stroke="#c9b48e" stroke-width="3"/><rect x="250" y="92" width="130" height="80" fill="#cfe4f0"/>' +
      '<rect x="250" y="76" width="130" height="12" fill="' + RED + '"/><text x="315" y="85.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">RECORDS · TAPES</text>' +
      Array.from({ length: 4 }, (_, i) => '<circle cx="' + (272 + i * 30) + '" cy="132" r="12" fill="#111"/><circle cx="' + (272 + i * 30) + '" cy="132" r="4" fill="' + (i % 2 ? YEL : RED) + '"/>').join("") +
      /* floor + fountain */
      '<rect x="0" y="180" width="400" height="80" fill="#d9cdb4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 60 - 40) + ' 260l60 -80" stroke="#c9bb9e" stroke-width="2"/>').join("") +
      '<ellipse cx="200" cy="212" rx="56" ry="14" fill="#8fb4d0" stroke="#b89f78" stroke-width="5"/>' +
      '<g class="kk-sp"><path d="M200 210q-6 -30 0 -50q6 20 0 50z" fill="#cfe9f8" opacity=".85"/><path d="M190 212q-14 -20 -6 -34M210 212q14 -20 6 -34" stroke="#cfe9f8" stroke-width="3" fill="none"/></g>' +
      '<rect x="110" y="232" width="180" height="20" rx="3" fill="#111" stroke="' + YEL + '" stroke-width="2"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GREENBRIAR MALL · WHERE IT STARTED</text>',
      sky("kk2", "#f4ead6", "#e6d6b8"));
  }

  /* 3. Woodward Academy, College Park: red brick, white columns, cupola, the flag */
  function kkwoodward() {
    return svg(
      '<rect width="400" height="260" fill="url(#kk3)"/>' +
      '<g fill="#3c6b3a"><ellipse cx="24" cy="150" rx="34" ry="40"/><ellipse cx="380" cy="146" rx="34" ry="44"/></g>' +
      '<rect x="50" y="80" width="300" height="110" fill="#a3432e"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M50 ' + (88 + i * 10) + 'h300" stroke="#8c3825" stroke-width="1"/>').join("") +
      [64, 100, 274, 310].map(x => Array.from({ length: 3 }, (_, r) => '<rect x="' + x + '" y="' + (92 + r * 32) + '" width="20" height="22" fill="#2a3442" stroke="#f2efe6" stroke-width="2"/>').join("")).join("") +
      /* cupola */
      '<rect x="186" y="30" width="28" height="22" fill="#f6f4ee"/><path d="M182 30l18 -18l18 18z" fill="#4a6a5a"/><rect x="198" y="2" width="4" height="12" fill="#c9a24a"/><rect x="194" y="36" width="12" height="12" fill="#2a3442"/>' +
      /* portico */
      '<path d="M134 80l66 -30l66 30z" fill="#f2efe6"/><rect x="130" y="78" width="140" height="10" fill="#f6f4ee"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (140 + i * 23) + '" y="88" width="8" height="96" fill="#f6f4ee"/>').join("") +
      '<rect x="184" y="134" width="32" height="50" fill="#4a2a1e"/>' +
      '<rect x="120" y="184" width="160" height="8" fill="#d9d4c6"/>' +
      '<rect x="372" y="50" width="3" height="140" fill="#9aa1a8"/><g class="kk-flag"><rect x="375" y="52" width="22" height="14" fill="' + BLUE + '"/><rect x="375" y="58" width="22" height="3" fill="#fff"/></g>' +
      '<rect x="0" y="192" width="400" height="68" fill="#6aa84f"/><path d="M200 192l-30 68h60z" fill="#c9c3b6"/>' +
      '<rect x="56" y="214" width="110" height="30" rx="3" fill="#1d3f8f" stroke="' + YEL + '" stroke-width="2"/>' +
      '<text x="111" y="227" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">WOODWARD ACADEMY</text><text x="111" y="238" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + YEL + '">COLLEGE PARK</text>',
      sky("kk3", "#8fc6ec", "#f2ead6"));
  }

  /* 4. "I Missed the Bus": the yellow school bus pulling off, book bag + lunch money left at the stop */
  function kkmissed() {
    const sb = '<g class="kk-go"><rect x="150" y="126" width="210" height="70" rx="8" fill="' + YEL + '" stroke="#b38f00" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (160 + i * 34) + '" y="136" width="26" height="22" rx="2" fill="#26323c"/>').join("") +
      '<rect x="150" y="168" width="210" height="4" fill="#111"/><rect x="150" y="178" width="210" height="3" fill="#111"/>' +
      '<rect x="326" y="128" width="30" height="30" rx="2" fill="#26323c"/><circle cx="356" cy="186" r="3" fill="#fff6c2"/>' +
      '<rect x="230" y="118" width="60" height="9" rx="2" fill="#111"/><text x="260" y="125" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + YEL + '">SCHOOL BUS</text>' +
      '<circle cx="190" cy="198" r="12" fill="#222"/><circle cx="190" cy="198" r="5" fill="#9aa1a8"/><circle cx="320" cy="198" r="12" fill="#222"/><circle cx="320" cy="198" r="5" fill="#9aa1a8"/>' +
      '<g class="kk-dust" fill="#c9c3b6"><circle cx="372" cy="196" r="6"/><circle cx="384" cy="190" r="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kk4)"/>' +
      '<circle cx="340" cy="44" r="16" fill="#ffd77a"/>' +
      '<g fill="#7a8c9a" opacity=".7"><rect x="0" y="90" width="60" height="60"/><rect x="66" y="74" width="40" height="76"/><rect x="300" y="84" width="56" height="66"/></g>' +
      '<rect x="0" y="150" width="400" height="20" fill="#c9c3b6"/><rect x="0" y="170" width="400" height="90" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      sb +
      /* the stop sign post + book bag + lunch money */
      '<rect x="46" y="96" width="4" height="64" fill="#6b7178"/><rect x="30" y="76" width="36" height="24" rx="3" fill="' + YEL + '" stroke="#111" stroke-width="1.5"/><text x="48" y="91" text-anchor="middle" ' + font + ' font-size="7" fill="#111">BUS STOP</text>' +
      '<rect x="70" y="138" width="24" height="18" rx="4" fill="' + RED + '" stroke="#111" stroke-width="1.5"/><path d="M76 138q6 -8 12 0" stroke="#111" stroke-width="2" fill="none"/><path d="M82 140v14" stroke="#111" stroke-width="1"/>' +
      '<rect x="100" y="152" width="18" height="8" fill="#8fbf7a" stroke="#3e6b34" stroke-width="1" transform="rotate(-10 109 156)"/>' +
      '<g class="kk-jump"><path d="M120 150q0 -8 8 -8h8q6 0 8 4l4 4z" fill="#fff" stroke="#111" stroke-width="1.5"/></g><g class="kk-jump kk-j2"><path d="M138 152q0 -8 8 -8h8q6 0 8 4l4 4z" fill="#fff" stroke="#111" stroke-width="1.5"/></g>' +
      '<rect x="20" y="226" width="200" height="22" rx="3" fill="#111" stroke="' + YEL + '" stroke-width="2"/>' +
      '<text x="120" y="241" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">A QUARTER TO 8:00 · I MISSED THE BUS</text>',
      sky("kk4", "#9fd0ee", "#fbe8c6"));
  }

  /* 5. Greenbriar Pkwy SW and Campbellton Rd SW: Greenbriar Mall behind */
  function kkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kk5)"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 37) % 36) + '" r="1.1" fill="#fff" opacity=".7"/>').join("") +
      mall(70, 134, 1) +
      '<rect x="0" y="134" width="400" height="90" fill="#3d4a7a"/>' + Array.from({ length: 9 }, (_, r) => '<path d="M0 ' + (134 + r * 10) + 'h400" stroke="#33406c" stroke-width="1"/>').join("") +
      tag("KRIS KROSS", 18, 192, 42, YEL, -5) + tag("MAC DADDY", 24, 156, 18, BLUE, -4) + tag("DADDY MAC", 186, 218, 18, RED, -4) + tag("JUMP JUMP", 30, 220, 14, "#fff", -3) +
      '<g class="kk-tw"><path d="M300 180l3 7l7 3l-7 3l-3 7l-3 -7l-7 -3l7 -3z" fill="' + YEL + '"/></g><g class="kk-tw kk-tw2"><path d="M150 206l2 5l5 2l-5 2l-2 5l-2 -5l-5 -2l5 -2z" fill="#fff"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="kk-car"><rect x="0" y="232" width="70" height="16" rx="6" fill="' + BLUE + '"/><rect x="12" y="226" width="40" height="10" rx="4" fill="#1462b0"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><circle cx="68" cy="238" r="2.5" fill="#fff6c2"/></g>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 124, "Greenbriar Pkwy SW") + sign(266, 124, 128, "Campbellton Rd SW"),
      sky("kk5", "#1a2050", "#e08a4a"));
  }

  window.SCENES = { kkbus: kkbus, kkmall: kkmall, kkwoodward: kkwoodward, kkmissed: kkmissed, kkcorner: kkcorner };
})();
