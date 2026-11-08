/* Freestyle Fellowship scenes (Regions tab: Los Angeles + SoCal; South Central LA). CSS classes/ids prefixed ff- (the page's own anim-train is kept).
   1 Expo/Western on the E Line: street-running platform in the Exposition Blvd median, a light-rail train sliding in, palms and the downtown towers far off.
   2 Crenshaw Swap Meet at MLK and Crenshaw, where the first tapes were sold hand to hand: a cassette stall, a boombox, tape reels turning.
   3 KXLU 88.9 at Loyola Marymount on the Westchester bluff (played "7th Seal" on its overnight show): the tower light blinking, ON AIR glowing, waves going out.
   4 Club Lingerie on Sunset Blvd in Hollywood, where they opened shows: the old club front with the marquee bulbs chasing.
   5 Crenshaw Blvd and Exposition Blvd (the old Good Life corner): green signs, FREESTYLE FELLOWSHIP tagged, the downtown skyline behind.
   Any 9 is drawn as a path with a straight stem (no font 9). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ffflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ff-flk{animation:ffflick 2.2s infinite}.ff-flk2{animation-delay:.7s}' +
    '@keyframes ffchase{0%,100%{opacity:.25}50%{opacity:1}}.ff-bulb{animation:ffchase .9s ease-in-out infinite}.ff-b2{animation-delay:.3s}.ff-b3{animation-delay:.6s}' +
    '@keyframes ffreel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ff-reel{transform-box:fill-box;transform-origin:50% 50%;animation:ffreel 1.6s linear infinite}' +
    '@keyframes ffwave{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.ff-wave{transform-box:fill-box;transform-origin:50% 50%;animation:ffwave 2.4s ease-out infinite}.ff-w2{animation-delay:.8s}.ff-w3{animation-delay:1.6s}' +
    '@keyframes ffblink{0%,100%{opacity:.2}50%{opacity:1}}.ff-bl{animation:ffblink 1.4s ease-in-out infinite}' +
    '@keyframes ffbump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.ff-bump{transform-box:fill-box;transform-origin:50% 50%;animation:ffbump .5s ease-in-out infinite}' +
    '@keyframes ffcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.ff-car{animation:ffcar 7s linear infinite}' +
    '@keyframes ffsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ff-palm{transform-box:fill-box;transform-origin:50% 100%;animation:ffsway 4s ease-in-out infinite}.ff-palm2{animation-delay:-2s}' +
    '@keyframes ffspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ff-sp{animation:ffspray 1.4s ease-out infinite}.ff-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem: x,y = left baseline, h = cap height */
  const nine = (x, y, h, col) => { const r = h * 0.27, cx = x + r + h * 0.04, cy = y - h + r + h * 0.02, sw = h * 0.14;
    return '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="' + sw.toFixed(1) + '"/><path d="M' + (cx + r).toFixed(1) + ' ' + cy.toFixed(1) + 'V' + y + '" stroke="' + col + '" stroke-width="' + sw.toFixed(1) + '"/>'; };
  const TEAL = "#7fd1c7", GOLD = "#ffb347", VIO = "#c77dff", EGOLD = "#fdb913";
  const palm = (x, base, h, cls) => '<g class="ff-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 2 -' + h + '" stroke="#3a2a1c" stroke-width="4" fill="none"/>' +
    [[-26, -6], [-18, 10], [0, -14], [18, 10], [26, -6]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 8) + ' ' + p[0] + ' ' + (p[1] + 6) + '" stroke="#1f3a22" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  /* downtown LA skyline, US Bank Tower crown in the middle */
  const skyline = (base, col) => '<g fill="' + col + '"><rect x="120" y="' + (base - 60) + '" width="26" height="60"/><rect x="150" y="' + (base - 84) + '" width="22" height="84"/><rect x="176" y="' + (base - 70) + '" width="18" height="70"/>' +
    '<rect x="198" y="' + (base - 112) + '" width="24" height="112"/><path d="M196 ' + (base - 112) + 'h28l-4 -8h-20z"/><rect x="226" y="' + (base - 92) + '" width="20" height="92"/><rect x="250" y="' + (base - 66) + '" width="26" height="66"/><rect x="280" y="' + (base - 50) + '" width="20" height="50"/></g>';

  /* 1. Expo/Western, E Line */
  function ffstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 46) + '" y="128" width="34" height="20" rx="3" fill="#1d2630"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="118" width="340" height="68" rx="10" fill="#dfe2e5" stroke="#7b838b" stroke-width="2"/>' +
      '<rect x="22" y="124" width="340" height="28" fill="#30363d"/>' + win + '<rect x="22" y="160" width="340" height="5" fill="' + EGOLD + '"/><rect x="190" y="118" width="6" height="68" fill="#9aa2aa"/>' +
      '<rect x="342" y="122" width="18" height="60" rx="5" fill="#b9c0c6"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/>' +
      '<rect x="282" y="128" width="54" height="12" rx="2" fill="#111"/><text x="309" y="137" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">SANTA MONICA</text>' +
      '<path d="M120 118l20 -22h30l20 22" stroke="#333" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ffs1)"/>' + skyline(112, "#5b5f7d") + palm(30, 118, 74) + palm(370, 118, 80, "ff-palm2") +
      '<path d="M0 94h400" stroke="#333" stroke-width="1.5"/>' + [70, 330].map(x => '<rect x="' + (x - 2) + '" y="88" width="4" height="30" fill="#3a3a3a"/>').join("") +
      '<rect x="0" y="108" width="400" height="10" fill="#8f8f8f"/>' + train +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#b3b0aa"/><path d="M0 230h400" stroke="#a09c95" stroke-width="2"/>' +
      '<rect x="50" y="70" width="300" height="7" fill="#e7e4dc"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="77" width="6" height="30" fill="#8f877a"/>').join("") +
      '<g class="ff-flk"><rect x="100" y="78" width="40" height="3" fill="#fff3c4"/></g><g class="ff-flk ff-flk2"><rect x="260" y="78" width="40" height="3" fill="#fff3c4"/></g>' +
      '<rect x="100" y="204" width="200" height="38" rx="4" fill="#1f1f22"/><circle cx="122" cy="223" r="12" fill="' + EGOLD + '"/><text x="122" y="228.5" text-anchor="middle" ' + font + ' font-size="15" fill="#111">E</text>' +
      '<text x="142" y="229" ' + font + ' font-size="17" fill="#fff">Expo/Western</text>',
      sky("ffs1", "#7ab8e6", "#f4d6a8"));
  }

  /* 2. Crenshaw Swap Meet */
  function ffswap() {
    const tapes = Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect x="' + (40 + c * 30) + '" y="' + (92 + r * 18) + '" width="26" height="14" rx="1.5" fill="' + ["#f2efe6", "#ffb347", "#7fd1c7", "#c77dff"][(r + c) % 4] + '" stroke="#333" stroke-width="1"/><rect x="' + (44 + c * 30) + '" y="' + (95 + r * 18) + '" width="18" height="5" fill="#333"/>').join("")).join("");
    const box = '<g class="ff-bump"><rect x="248" y="150" width="112" height="56" rx="6" fill="#2b2b30" stroke="#888" stroke-width="2"/><circle cx="276" cy="180" r="18" fill="#111" stroke="#999" stroke-width="2"/><circle cx="332" cy="180" r="18" fill="#111" stroke="#999" stroke-width="2"/><circle cx="276" cy="180" r="6" fill="#555"/><circle cx="332" cy="180" r="6" fill="#555"/></g>' +
      '<rect x="288" y="156" width="32" height="18" rx="2" fill="#3c3c44"/><circle class="ff-reel" cx="297" cy="165" r="4" fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3 2"/><circle class="ff-reel" cx="311" cy="165" r="4" fill="none" stroke="#ddd" stroke-width="1.5" stroke-dasharray="3 2"/>' +
      '<path d="M262 150q42 -26 84 0" stroke="#888" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ffs2)"/>' +
      '<rect x="0" y="30" width="400" height="34" fill="#c0392b"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="18" fill="#fff">CRENSHAW SWAP MEET</text>' +
      '<path d="M0 64h400l-10 12H10z" fill="#e8e0cf"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 64l20 12" stroke="#c0392b" stroke-width="6"/>').join("") +
      '<rect x="30" y="84" width="196" height="80" fill="#6b4a2c"/>' + tapes +
      '<rect x="20" y="164" width="360" height="12" fill="#8a6a44"/><rect x="20" y="176" width="360" height="40" fill="#5a3f26"/>' +
      '<rect x="40" y="186" width="90" height="22" rx="2" fill="#f2efe6"/><text x="85" y="201" text-anchor="middle" ' + font + ' font-size="9" fill="#222">LOCAL TAPES</text>' + box +
      '<rect x="0" y="216" width="400" height="44" fill="#a69d8f"/><path d="M0 238h400" stroke="#958c7e" stroke-width="2"/>',
      sky("ffs2", "#3a2f4f", "#8a6a84"));
  }

  /* 3. KXLU 88.9, Loyola Marymount bluff */
  function ffradio() {
    const lattice = Array.from({ length: 10 }, (_, i) => '<path d="M' + (300 - i * 1.6) + ' ' + (40 + i * 14) + 'L' + (320 + i * 1.6) + ' ' + (54 + i * 14) + 'M' + (320 + i * 1.6) + ' ' + (40 + i * 14) + 'L' + (300 - i * 1.6) + ' ' + (54 + i * 14) + '" stroke="#c9c9c9" stroke-width="1.2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ffs3)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 29) % 90 + 8) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 176q120 -30 260 -18t140 -4V260H0z" fill="#3b4a35"/>' +
      '<path d="M300 40L284 178M320 40L336 178" stroke="#d0d0d0" stroke-width="2.5"/>' + lattice +
      '<circle class="ff-bl" cx="310" cy="36" r="4" fill="#ff3b3b"/>' +
      '<circle class="ff-wave" cx="310" cy="36" r="22" fill="none" stroke="' + TEAL + '" stroke-width="2"/><circle class="ff-wave ff-w2" cx="310" cy="36" r="22" fill="none" stroke="' + TEAL + '" stroke-width="2"/><circle class="ff-wave ff-w3" cx="310" cy="36" r="22" fill="none" stroke="' + TEAL + '" stroke-width="2"/>' +
      '<rect x="40" y="120" width="190" height="80" fill="#e6dccb"/><path d="M34 120h202l-10 -16H44z" fill="#b5523b"/>' +
      '<rect x="56" y="134" width="100" height="50" fill="#1d2633"/><rect x="62" y="160" width="88" height="8" fill="#555"/><circle cx="90" cy="152" r="7" fill="#333"/><path d="M90 145v-6" stroke="#333" stroke-width="2"/>' +
      '<rect x="170" y="138" width="48" height="18" rx="3" fill="#2a0c0c"/><text class="ff-flk" x="194" y="151" text-anchor="middle" ' + font + ' font-size="10" fill="#ff4d4d">ON AIR</text>' +
      '<rect x="166" y="164" width="56" height="26" rx="3" fill="#1d2633"/><text x="173" y="183" ' + font + ' font-size="15" fill="' + GOLD + '">88.</text>' + nine(195.5, 183, 15, GOLD) +
      '<text x="135" y="216" text-anchor="middle" ' + font + ' font-size="12" fill="#f2efe6">KXLU · WESTCHESTER BLUFF</text>',
      sky("ffs3", "#0e1430", "#3a4a7a"));
  }

  /* 4. Club Lingerie, Sunset Blvd */
  function ffclub() {
    const bulbs = (y) => Array.from({ length: 24 }, (_, i) => '<circle class="ff-bulb ff-b' + (1 + i % 3) + '" cx="' + (84 + i * 10) + '" cy="' + y + '" r="2.4" fill="#ffe7a0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ffs4)"/>' +
      '<g fill="#1f1a33"><rect x="0" y="80" width="70" height="130"/><rect x="330" y="70" width="70" height="140"/></g>' +
      '<rect x="70" y="60" width="260" height="150" fill="#5a3b5e"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (86 + i * 50) + '" y="72" width="28" height="36" fill="#2b1d33" stroke="' + VIO + '" stroke-width="1"/>').join("") +
      '<rect x="78" y="118" width="244" height="52" fill="#141018" stroke="' + VIO + '" stroke-width="2"/>' + bulbs(124) + bulbs(164) +
      '<text class="ff-flk" x="200" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="' + VIO + '">CLUB LINGERIE</text>' +
      '<text x="200" y="157" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">FREESTYLE FELLOWSHIP</text>' +
      '<rect x="170" y="172" width="60" height="38" fill="#2b1d10"/><rect x="176" y="176" width="22" height="34" fill="#4a3018"/><rect x="202" y="176" width="22" height="34" fill="#4a3018"/>' +
      '<rect x="0" y="210" width="400" height="14" fill="#bfb6a6"/><rect x="0" y="224" width="400" height="36" fill="#38383e"/><path d="M0 244h400" stroke="#e6e6e6" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<text x="40" y="206" ' + font + ' font-size="9" fill="#d9d2c2">SUNSET BLVD</text>' +
      '<g class="ff-car"><rect x="0" y="232" width="62" height="14" rx="5" fill="#2fa3d6"/><rect x="14" y="224" width="32" height="10" rx="3" fill="#2fa3d6"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="48" cy="246" r="5" fill="#111"/></g>',
      sky("ffs4", "#120c24", "#4a2a5a"));
  }

  /* 5. Crenshaw Blvd and Exposition Blvd */
  function ffcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ffs5)"/>' + skyline(124, "#4b4f6e") + palm(26, 126, 70) +
      '<rect x="0" y="120" width="400" height="104" fill="#e3d7c3"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (134 + i * 16) + 'h400" stroke="#d2c4ab" stroke-width="1"/>').join("") +
      tag("FREESTYLE", 16, 170, 34, TEAL, -6) + tag("FELLOWSHIP", 40, 206, 34, GOLD, -5) + tag("BE ADVISED", 220, 214, 16, VIO, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524e"/><rect x="0" y="222" width="400" height="4" fill="#ece6da"/>' +
      '<rect x="356" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(232, 92, 160, "Crenshaw Blvd") + sign(240, 118, 150, "Exposition Blvd") +
      '<g class="ff-sp"><circle cx="196" cy="150" r="3" fill="' + TEAL + '" opacity=".7"/></g><g class="ff-sp ff-sp2"><circle cx="202" cy="144" r="2" fill="' + TEAL + '" opacity=".6"/></g>',
      sky("ffs5", "#e98a5c", "#f7d39e"));
  }

  window.SCENES = { ffstation: ffstation, ffswap: ffswap, ffradio: ffradio, ffclub: ffclub, ffcorner: ffcorner };
})();
