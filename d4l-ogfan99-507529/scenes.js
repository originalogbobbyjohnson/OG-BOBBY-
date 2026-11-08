/* D4L scenes (Regions tab: Atlanta; Bowen Homes on Bankhead - Shawty Lo's home projects on the old Bankhead Highway, now Donald Lee Hollowell Pkwy).
   CSS classes and ids prefixed d4- (the page's own anim-train is kept on the bus).
   1 MARTA Route 2 (Donald Lee Hollowell Pkwy) pulling up on Hollowell: white MARTA bus with the blue + orange bands, the stop flag,
     a little strip of shops and pines along the parkway.
   2 Bowen Homes (1964, 104 two-story brick buildings, torn down later): rows of red-brick two-story units with white doors, clotheslines,
     kids' bikes, a streetlight blinking.
   3 "Bankhead - read it in the headlines" (Bankhead): a newspaper box on the parkway with a front page shouting BANKHEAD, pages blowing.
   4 The Candy Store ("this ain't a dance floor, this a candy store" - Laffy Taffy): a club floor with taffy-colored lights, dancers
     leaning and rocking, DO THE FABO on the wall, candies falling.
   5 James Jackson Pkwy NW and Donald Lee Hollowell Pkwy NW, by the old Bowen Homes site: green signs, D4L tagged with DOWN 4 LIFE and
     DO THE FABO, downtown Atlanta far off with the gold-topped spire of Bank of America Plaza (Atlanta's tallest).
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const PINK = "#ff3b8d", GOLD = "#ffd23f", BLUE = "#3ec1ff", MBLUE = "#0a6fb4", MORANGE = "#f58220";
  const css = '<style>' +
    '@keyframes d4blink{0%,100%{opacity:1}50%{opacity:.2}}.d4-blink{animation:d4blink 1.1s infinite}.d4-blink2{animation-delay:-.55s}' +
    '@keyframes d4bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.d4-bob{animation:d4bob .5s ease-in-out infinite}.d4-bob2{animation-delay:-.25s}' +
    '@keyframes d4lean{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.d4-lean{transform-box:fill-box;transform-origin:50% 100%;animation:d4lean .9s ease-in-out infinite}.d4-lean2{animation-delay:-.45s}' +
    '@keyframes d4fall{0%{transform:translateY(-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translateY(200px) rotate(200deg);opacity:0}}.d4-fall{transform-box:fill-box;transform-origin:50% 50%;animation:d4fall 3s linear infinite}.d4-fall2{animation-delay:-1s}.d4-fall3{animation-delay:-2s}' +
    '@keyframes d4beam{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.d4-beam{transform-box:fill-box;transform-origin:50% 0%;animation:d4beam 2.4s ease-in-out infinite}.d4-beam2{animation-delay:-1.2s}' +
    '@keyframes d4page{0%{transform:translate(0,0) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(220px,-60px) rotate(260deg);opacity:0}}.d4-page{transform-box:fill-box;transform-origin:50% 50%;animation:d4page 4s ease-out infinite}.d4-page2{animation-delay:-2s}' +
    '@keyframes d4flap{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.d4-flap{transform-box:fill-box;transform-origin:50% 0%;animation:d4flap 1.6s ease-in-out infinite}' +
    '@keyframes d4spray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.d4-sp{animation:d4spray 1.4s ease-out infinite}.d4-sp2{animation-delay:.5s}' +
    '@keyframes d4tw{0%,100%{opacity:.25}50%{opacity:1}}.d4-tw{animation:d4tw 1.8s ease-in-out infinite}.d4-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="d4-tw' + (i % 2 ? " d4-tw2" : "") + '" cx="' + ((i * 83 + 17) % 400) + '" cy="' + ((i * 37 + 11) % 90) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  const pine = (x, base, h) => '<path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.3) + ' ' + h + 'h' + (-h * 0.6) + 'z" fill="#2e5a2a"/>';

  /* 1. MARTA Route 2 on Donald Lee Hollowell Pkwy */
  function d4lbus() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (110 + i * 42) + '" y="152" width="32" height="22" rx="2" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="90" y="140" width="250" height="70" rx="10" fill="#f4f4f2" stroke="#9aa0a6" stroke-width="2"/>' + win +
      '<rect x="90" y="182" width="250" height="6" fill="' + MBLUE + '"/><rect x="90" y="190" width="250" height="4" fill="' + MORANGE + '"/>' +
      '<rect x="318" y="150" width="20" height="44" rx="2" fill="#1e2a33"/><rect x="236" y="142" width="80" height="10" rx="2" fill="#111"/>' +
      '<text x="276" y="150" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">2 HOLLOWELL PKWY</text>' +
      '<circle cx="130" cy="212" r="12" fill="#222"/><circle cx="130" cy="212" r="5" fill="#888"/><circle cx="300" cy="212" r="12" fill="#222"/><circle cx="300" cy="212" r="5" fill="#888"/>' +
      '<circle class="d4-blink" cx="336" cy="200" r="3" fill="#ffd36b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d4s1)"/>' +
      pine(30, 130, 70) + pine(60, 130, 90) + pine(330, 130, 80) + pine(370, 130, 64) +
      /* low strip of shops */
      '<rect x="96" y="96" width="210" height="72" fill="#c9b08a"/><rect x="96" y="90" width="210" height="10" fill="#8a6a4a"/>' +
      '<g fill="#2a3540">' + [106, 156, 206, 256].map(x => '<rect x="' + x + '" y="112" width="38" height="40"/>').join("") + '</g>' +
      '<g>' + [106, 156, 206, 256].map((x, i) => '<rect x="' + x + '" y="102" width="38" height="8" fill="' + [PINK, GOLD, BLUE, MORANGE][i] + '"/>').join("") + '</g>' +
      '<rect x="0" y="130" width="96" height="40" fill="#7aa35a"/><rect x="306" y="130" width="94" height="40" fill="#7aa35a"/>' +
      '<rect x="0" y="168" width="400" height="10" fill="#cfcac0"/>' +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a3e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="370" y="96" width="4" height="82" fill="#6b6b6b"/><rect x="356" y="96" width="32" height="26" rx="3" fill="' + MBLUE + '"/><text x="372" y="114" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">2</text>' +
      bus + label(70, 260, "DONALD LEE HOLLOWELL PKWY · THE OLD BANKHEAD HWY"),
      sky("d4s1", "#6aa5da", "#f6d9a2"));
  }

  /* 2. Bowen Homes: two-story red-brick rows */
  function d4lbowen() {
    const row = (x, y, w, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" fill="' + c + '"/><rect x="' + (x - 4) + '" y="' + (y - 6) + '" width="' + (w + 8) + '" height="8" fill="#5a4a40"/>' +
      Array.from({ length: Math.floor(w / 34) }, (_, i) => '<rect x="' + (x + 8 + i * 34) + '" y="' + (y + 8) + '" width="14" height="14" fill="#2a3540"/><rect x="' + (x + 8 + i * 34) + '" y="' + (y + 34) + '" width="12" height="28" fill="#f2efe6"/><rect x="' + (x + 6 + i * 34) + '" y="' + (y + 30) + '" width="16" height="3" fill="#8a8a8a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#d4s2)"/>' +
      row(14, 70, 170, "#9a4a32") + row(214, 70, 172, "#a8553a") +
      '<rect x="0" y="132" width="400" height="128" fill="#7a9a4a"/>' +
      row(-10, 140, 200, "#b05a3e") + row(220, 140, 200, "#9a4a32") +
      /* clothesline */
      '<path d="M190 120q14 10 28 0" stroke="#ddd" stroke-width="1" fill="none"/><g class="d4-flap"><rect x="196" y="122" width="8" height="10" fill="' + PINK + '"/><rect x="208" y="122" width="8" height="10" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="202" width="400" height="58" fill="#3a3a3e"/><path d="M0 232h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="196" y="150" width="4" height="54" fill="#6b6b6b"/><path d="M198 150h14" stroke="#6b6b6b" stroke-width="3"/><circle class="d4-blink" cx="212" cy="154" r="4" fill="#fff6c2"/>' +
      label(110, 180, "BOWEN HOMES · BANKHEAD"),
      sky("d4s2", "#ffb07a", "#ffe6b8"));
  }

  /* 3. Bankhead - read it in the headlines */
  function d4lheadlines() {
    return svg(
      '<rect width="400" height="260" fill="url(#d4s3)"/>' +
      '<g fill="#3a3550"><rect x="0" y="60" width="70" height="120"/><rect x="74" y="86" width="56" height="94"/><rect x="300" y="70" width="44" height="110"/><rect x="348" y="50" width="52" height="130"/></g>' +
      '<g fill="#ffe08a" opacity=".7">' + [12, 34, 84, 104, 310, 360, 380].map((x, i) => '<rect class="d4-blink' + (i % 2 ? " d4-blink2" : "") + '" x="' + x + '" y="' + (80 + (i % 3) * 22) + '" width="10" height="10"/>').join("") + '</g>' +
      '<rect x="0" y="178" width="400" height="82" fill="#4a4a50"/><rect x="0" y="178" width="400" height="8" fill="#9a9a9a"/>' +
      /* newspaper box */
      '<rect x="140" y="98" width="120" height="112" rx="4" fill="' + MBLUE + '" stroke="#0a3a5a" stroke-width="3"/><rect x="152" y="108" width="96" height="72" fill="#e8f0f6" stroke="#0a3a5a" stroke-width="2"/>' +
      '<rect x="158" y="114" width="84" height="60" fill="#f6f2e6"/><rect x="162" y="118" width="76" height="4" fill="#333"/>' +
      '<text x="200" y="142" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="17" fill="#111">BANKHEAD</text>' +
      '<g fill="#999">' + [148, 154, 160, 166].map(y => '<rect x="164" y="' + y + '" width="' + (y % 12 ? 72 : 56) + '" height="2"/>').join("") + '</g>' +
      '<rect x="176" y="188" width="48" height="8" rx="2" fill="#0a3a5a"/><rect x="150" y="210" width="10" height="20" fill="#333"/><rect x="240" y="210" width="10" height="20" fill="#333"/>' +
      '<g class="d4-page"><rect x="60" y="200" width="22" height="16" fill="#f6f2e6" stroke="#999"/><path d="M63 205h16M63 209h12" stroke="#999"/></g>' +
      '<g class="d4-page d4-page2"><rect x="30" y="214" width="18" height="13" fill="#f6f2e6" stroke="#999"/></g>' +
      label(100, 200, "BANKHEAD · READ IT IN THE HEADLINES"),
      sky("d4s3", "#1b1f4a", "#7a4a6a"));
  }

  /* 4. The Candy Store: the dance floor */
  function d4lcandy() {
    const dancer = (x, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="146" r="10" fill="#111"/><path d="M' + (x - 12) + ' 206v-36q0 -14 12 -14t12 14v36z" fill="' + c + '"/>' +
      '<path d="M' + (x + 10) + ' 166l16 -18" stroke="#111" stroke-width="6" stroke-linecap="round"/><rect x="' + (x - 10) + '" y="204" width="8" height="24" fill="#111"/><rect x="' + (x + 2) + '" y="204" width="8" height="24" fill="#111"/></g>';
    const candy = (x, c, cls) => '<g class="' + cls + '"><path d="M' + (x - 14) + ' 10l6 4v8l-6 4z" fill="' + c + '"/><path d="M' + (x + 14) + ' 10l-6 4v8l6 4z" fill="' + c + '"/><rect x="' + (x - 9) + '" y="11" width="18" height="14" rx="6" fill="' + c + '" stroke="#fff" stroke-width="1"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d4s4)"/>' +
      '<path class="d4-beam" d="M80 0l-40 200h80z" fill="' + PINK + '" opacity=".22"/><path class="d4-beam d4-beam2" d="M200 0l-40 200h80z" fill="' + BLUE + '" opacity=".22"/><path class="d4-beam" d="M320 0l-40 200h80z" fill="' + GOLD + '" opacity=".22"/>' +
      tag("DO THE FABO", 108, 70, 30, GOLD, -4) +
      candy(60, PINK, "d4-fall") + candy(150, BLUE, "d4-fall d4-fall2") + candy(250, GOLD, "d4-fall d4-fall3") + candy(340, PINK, "d4-fall d4-fall2") +
      /* checkered floor */
      '<rect x="0" y="200" width="400" height="60" fill="#2a1022"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="' + (200 + (i % 2) * 15) + '" width="20" height="15" fill="' + [PINK, BLUE, GOLD][i % 3] + '" opacity=".45"/>').join("") +
      dancer(90, PINK, "d4-lean") + dancer(170, BLUE, "d4-lean d4-lean2") + dancer(250, GOLD, "d4-lean") + dancer(320, "#fff", "d4-lean d4-lean2") +
      label(90, 220, "THE CANDY STORE · LEAN WIT IT, ROCK WIT IT"),
      sky("d4s4", "#1a0712", "#4a1038"));
  }

  /* 5. James Jackson Pkwy and Donald Lee Hollowell Pkwy, downtown's gold spire far behind */
  function d4lcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#d4s5)"/>' + stars(18) +
      /* far skyline, Bank of America Plaza: red-granite tower with gold pyramid + spire */
      '<g fill="#3a3550"><rect x="230" y="64" width="20" height="44"/><rect x="254" y="54" width="18" height="54"/><rect x="314" y="60" width="22" height="48"/><rect x="340" y="72" width="18" height="36"/><rect x="362" y="58" width="16" height="50"/></g>' +
      '<rect x="280" y="36" width="28" height="72" fill="#7a3a3a"/><g stroke="#5a2a2a" stroke-width="1">' + [46, 58, 70, 82, 94].map(y => '<path d="M280 ' + y + 'h28"/>').join("") + '</g>' +
      '<path d="M278 36l16 -16l16 16z" fill="' + GOLD + '"/><rect x="292.5" y="2" width="3" height="20" fill="' + GOLD + '"/><circle class="d4-blink" cx="294" cy="2" r="2.5" fill="#ff5a5a"/>' +
      /* wall */
      '<rect x="0" y="104" width="262" height="100" fill="#5b4a3a"/><g stroke="#4a3b2e" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h262"/>').join("") + '</g>' +
      tag("DOWN 4 LIFE", 22, 134, 18, BLUE, -3) +
      tag("D4L", 30, 190, 62, PINK, -6) + tag("DO THE FABO", 150, 186, 16, GOLD, -3) +
      '<g fill="' + PINK + '"><circle class="d4-sp" cx="236" cy="166" r="3"/><circle class="d4-sp d4-sp2" cx="228" cy="174" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="346" y="110" width="6" height="96" fill="#6b6b6b"/>' + sign(272, 112, 128, "James Jackson Pkwy", 10.5) + sign(266, 138, 134, "D L Hollowell Pkwy", 10.5) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("d4s5", "#1b1f4a", "#c0703a"));
  }

  window.SCENES = { d4lbus, d4lbowen, d4lheadlines, d4lcandy, d4lcorner };
})();
