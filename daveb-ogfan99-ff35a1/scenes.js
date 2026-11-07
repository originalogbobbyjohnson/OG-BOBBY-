/* daveb scenes (Regions tab: The Northwest; Renton, WA, where he grew up). CSS classes prefixed db- (the page's own anim-train is kept).
   1 Rainier Beach Station on the 1 Line ("Next stop, Rainier Beach Station" ends "Help Me Find a Way"): at-grade island platform in the median of MLK Jr Way S, the white Link train sliding in, the green 1 bullet.
   2 Gene Coulon Memorial Beach Park in Renton: the white-roofed pavilion on the Lake Washington shore, a sailboat drifting, ducks on the water.
   3 A King County Metro RapidRide F Line bus pulling into The Landing in Renton, red and yellow, rain on the glass.
   4 "Outside": an outdoor court at Liberty Park in Renton in the rain, kids waiting to get picked, a ball swishing.
   5 S 3rd St and Logan Ave S in downtown Renton: green signs, DAVE B tagged on the wall, a jet climbing out of Renton airport over the lake. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.db-flk{animation:dbflick 2.4s infinite}.db-flk2{animation-delay:.8s}' +
    '@keyframes dbrain{0%{transform:translate(0,-40px)}100%{transform:translate(-12px,280px)}}.db-rn{animation:dbrain 1.1s linear infinite}.db-rn2{animation-delay:-.37s}.db-rn3{animation-delay:-.74s}' +
    '@keyframes dbsail{0%,100%{transform:translateX(-30px)}50%{transform:translateX(30px)}}.db-sail{animation:dbsail 9s ease-in-out infinite}' +
    '@keyframes dbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.db-bob{animation:dbbob 1.6s ease-in-out infinite}.db-bob2{animation-delay:-.8s}' +
    '@keyframes dbbus{0%{transform:translateX(-420px)}45%,100%{transform:translateX(0)}}.db-bus{animation:dbbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes dbshot{0%{transform:translate(-60px,50px)}50%{transform:translate(-20px,-30px)}75%,100%{transform:translate(0,6px)}}.db-ball{animation:dbshot 2.2s ease-in infinite}' +
    '@keyframes dbjet{0%{transform:translate(-80px,60px) rotate(-12deg)}100%{transform:translate(460px,-60px) rotate(-12deg)}}.db-jet{animation:dbjet 9s linear infinite}' +
    '@keyframes dbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.db-sp{animation:dbspray 1.4s ease-out infinite}.db-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => Array.from({ length: n }, (_, i) => '<path class="db-rn db-rn' + (1 + i % 3) + '" d="M' + ((i * 37) % 410) + ' ' + ((i * 23) % 90 - 30) + 'l-3 12" stroke="' + (col || "#cfe3f0") + '" stroke-width="1.2" opacity=".55"/>').join("");
  const SUN = "#ff9e5e", TEAL = "#2fb39a", GOLD = "#ffd166", LINK = "#28813f";

  /* 1. Rainier Beach Station, 1 Line, at grade in the MLK Jr Way S median */
  function dbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (68 + i * 44) + '" y="104" width="34" height="26" rx="4" fill="#1d2a36"/>').join("");
    const train = '<g class="anim-train"><path d="M40 160V104q0 -14 16 -16h306q18 2 18 18v54z" fill="#f4f6f7" stroke="#9aa3a8" stroke-width="2"/>' + win +
      '<rect x="40" y="138" width="340" height="6" fill="#1f5fae"/><rect x="40" y="146" width="340" height="3" fill="' + LINK + '"/>' +
      '<rect x="46" y="100" width="16" height="54" rx="2" fill="#1d2a36"/><rect x="328" y="94" width="44" height="9" rx="2" fill="#111"/><text x="350" y="101.2" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb347">ANGLE LAKE</text>' +
      '<circle class="db-flk" cx="374" cy="152" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs1)"/>' +
      '<g fill="#2e3f45"><path d="M0 90q60 -36 130 -10t140 -6t130 4v30H0z"/></g>' +
      '<g fill="#3b4a4f"><rect x="0" y="86" width="60" height="34"/><rect x="334" y="80" width="66" height="40"/></g>' +
      /* overhead wire + poles */
      '<path d="M0 74h400" stroke="#222" stroke-width="1.5"/><rect x="30" y="70" width="4" height="96" fill="#555"/><rect x="366" y="70" width="4" height="96" fill="#555"/>' +
      /* road lanes on both sides of the median */
      '<rect x="0" y="160" width="400" height="100" fill="#4a4c52"/><path d="M0 214h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      train +
      /* island platform with canopy */
      '<rect x="0" y="166" width="400" height="16" fill="#b8b4aa"/><rect x="0" y="166" width="400" height="3" fill="#f2c200"/>' +
      '<path d="M90 62h220l-10 8H100z" fill="' + TEAL + '" opacity=".9"/>' +
      /* sign */
      '<rect x="96" y="190" width="208" height="40" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="186" y="216" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">Rainier Beach</text>' +
      '<circle cx="282" cy="210" r="13" fill="' + LINK + '"/><text x="282" y="215.5" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">1</text>' +
      rain(26) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#e6efe9" letter-spacing="2">MLK JR WAY S · S HENDERSON ST</text>',
      sky("dbs1", "#5d6f7a", "#a9b6b8"));
  }

  /* 2. Gene Coulon Memorial Beach Park on Lake Washington */
  function dbcoulon() {
    return svg(
      '<rect width="400" height="260" fill="url(#dbs2)"/>' +
      '<path d="M0 108q80 -30 170 -8t230 -6v20H0z" fill="#3f5d55"/><path d="M0 116h400v8H0z" fill="#2f4a44"/>' +
      '<rect x="0" y="122" width="400" height="80" fill="#4f7e95"/>' +
      Array.from({ length: 9 }, (_, i) => '<path class="db-bob' + (i % 2 ? " db-bob2" : "") + '" d="M' + (i * 46 + 6) + ' ' + (136 + (i % 3) * 18) + 'q10 -4 20 0" stroke="#cfe6ef" stroke-width="1.6" fill="none" opacity=".7"/>').join("") +
      '<g class="db-sail"><path d="M246 150h44l-6 8h-32z" fill="#f4f1ea"/><path d="M268 148v-40l20 38z" fill="#fff"/><path d="M266 148v-30l-14 28z" fill="' + SUN + '"/></g>' +
      /* pavilion: white tented roof on posts */
      '<path d="M40 128l40 -34l40 34l40 -34l40 34z" fill="#f2f2ee" stroke="#9aa3a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (44 + i * 38) + '" y="128" width="4" height="40" fill="#7a6a58"/>').join("") +
      '<rect x="30" y="166" width="190" height="8" fill="#a3866a"/>' +
      /* boardwalk + shore */
      '<path d="M0 200h400v60H0z" fill="#c9b48a"/><path d="M0 200h400" stroke="#a88f64" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 200v60" stroke="#b39c72" stroke-width="1"/>').join("") +
      '<g class="db-bob"><ellipse cx="330" cy="186" rx="7" ry="3.5" fill="#5a4a3a"/><circle cx="336" cy="181" r="3" fill="#2f6b3a"/></g><g class="db-bob db-bob2"><ellipse cx="352" cy="190" rx="6" ry="3" fill="#5a4a3a"/><circle cx="357" cy="186" r="2.6" fill="#5a4a3a"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#3a2f22" letter-spacing="2">COULON PARK · LAKE WASHINGTON · RENTON</text>',
      sky("dbs2", "#7fa6c2", "#f2c79a"));
  }

  /* 3. RapidRide F Line at The Landing */
  function dbbus() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (80 + i * 42) + '" y="118" width="34" height="28" rx="3" fill="#24323e"/>').join("");
    const bus = '<g class="db-bus"><rect x="50" y="106" width="320" height="86" rx="10" fill="#c8102e" stroke="#7a0a1c" stroke-width="2"/>' + win +
      '<rect x="50" y="154" width="320" height="12" fill="' + GOLD + '"/><rect x="50" y="168" width="320" height="4" fill="#8a8a8a"/>' +
      '<rect x="54" y="116" width="20" height="58" rx="2" fill="#24323e"/><rect x="314" y="110" width="52" height="12" rx="2" fill="#111"/><text x="340" y="119.4" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">F LINE</text>' +
      '<circle cx="110" cy="194" r="15" fill="#1b1b1b"/><circle cx="110" cy="194" r="6" fill="#9aa1a6"/><circle cx="318" cy="194" r="15" fill="#1b1b1b"/><circle cx="318" cy="194" r="6" fill="#9aa1a6"/>' +
      '<circle class="db-flk" cx="364" cy="180" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs3)"/>' +
      '<g fill="#6a5a66"><rect x="0" y="50" width="120" height="70"/><rect x="130" y="40" width="90" height="80"/><rect x="230" y="56" width="80" height="64"/><rect x="316" y="46" width="84" height="74"/></g>' +
      '<g fill="#ffe2a8" opacity=".75">' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (14 + i * 40) + '" y="66" width="16" height="12"/>').join("") + '</g>' +
      '<rect x="0" y="192" width="400" height="10" fill="#cfcac0"/><rect x="0" y="202" width="400" height="58" fill="#55565b"/><path d="M0 234h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="22 14"/>' +
      /* RapidRide station pole */
      '<rect x="18" y="60" width="6" height="134" fill="#333"/><rect x="6" y="56" width="30" height="40" rx="3" fill="#c8102e"/><text x="21" y="82" text-anchor="middle" ' + font + ' font-size="18" fill="' + GOLD + '">F</text>' +
      bus + rain(30) +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e3c3" letter-spacing="2">RAPIDRIDE F · THE LANDING · RENTON</text>',
      sky("dbs3", "#3a4458", "#8a7a8e"));
  }

  /* 4. Outside: Liberty Park court in the rain */
  function dbcourt() {
    const kids = Array.from({ length: 4 }, (_, i) => '<g class="db-bob' + (i % 2 ? " db-bob2" : "") + '"><rect x="' + (30 + i * 22) + '" y="150" width="12" height="26" rx="4" fill="' + [SUN, TEAL, GOLD, "#8a8fd6"][i] + '"/><circle cx="' + (36 + i * 22) + '" cy="143" r="6" fill="#4a3226"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dbs4)"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 64) + ' 120l20 -60l20 60z" fill="#2c5a3e"/>').join("") +
      '<path d="M0 120h400" stroke="#8a8f94" stroke-width="2"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 96v24" stroke="#8a8f94" stroke-width="1"/>').join("") + '<path d="M0 96h400" stroke="#8a8f94" stroke-width="1"/>' +
      '<rect x="0" y="120" width="400" height="140" fill="#3f6f8a"/><path d="M60 260L130 136h140l70 124" fill="none" stroke="#f4f1ea" stroke-width="2"/><ellipse cx="200" cy="200" rx="40" ry="14" fill="none" stroke="#f4f1ea" stroke-width="2"/>' +
      '<rect x="196" y="70" width="8" height="70" fill="#444"/><rect x="176" y="50" width="48" height="30" fill="#e8ecef" stroke="#333" stroke-width="2"/><rect x="188" y="78" width="24" height="3" fill="' + SUN + '"/>' +
      '<path d="M190 81l4 12h12l4 -12" stroke="#ddd" stroke-width="1" fill="none"/>' +
      '<g class="db-ball"><circle cx="200" cy="74" r="7" fill="#e8762c" stroke="#5a2a0a" stroke-width="1.2"/></g>' +
      kids + rain(40) +
      '<g opacity=".55"><ellipse cx="300" cy="230" rx="40" ry="5" fill="#6f9ab3"/><ellipse cx="110" cy="244" rx="28" ry="4" fill="#6f9ab3"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#e6efe9" letter-spacing="2">LIBERTY PARK · RENTON · COME OUTSIDE</text>',
      sky("dbs4", "#5b6873", "#9aa8ae"));
  }

  /* 5. S 3rd St and Logan Ave S, downtown Renton */
  function dbcorner() {
    const jet = '<g class="db-jet"><path d="M0 40h60q8 0 10 4q-2 4 -10 4H0z" fill="#f4f6f7" stroke="#8a9399" stroke-width="1"/><path d="M26 44l-12 18h8l18 -18zM26 44l-8 -14h6l14 14z" fill="#c9d0d4"/><path d="M0 40l-6 -12h6l8 12z" fill="' + TEAL + '"/><circle class="db-flk" cx="66" cy="44" r="1.6" fill="#ff4a4a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs5)"/>' +
      '<path d="M0 110q100 -24 200 -6t200 -8v30H0z" fill="#3c4f5e"/>' +
      /* the long factory hangar by the lake */
      '<rect x="190" y="88" width="210" height="40" fill="#8f9aa3"/><path d="M190 88q105 -26 210 0" fill="#a7b1b8"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (198 + i * 22) + '" y="100" width="14" height="26" fill="#6c7880"/>').join("") +
      jet +
      '<rect x="0" y="126" width="400" height="98" fill="#6d4a3a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5a3c2f" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#5a3c2f" stroke-width="1"/>').join("")).join("") +
      tag("DAVE B", 20, 192, 50, SUN, -6) + tag("COME OUTSIDE", 30, 216, 16, TEAL, -3) + tag("RENTON", 160, 214, 18, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(268, 98, 116, "S 3rd St") + sign(260, 124, 132, "Logan Ave S") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="db-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="db-sp"><circle cx="246" cy="168" r="3" fill="' + SUN + '" opacity=".7"/></g><g class="db-sp db-sp2"><circle cx="252" cy="162" r="2" fill="' + SUN + '" opacity=".6"/></g>',
      sky("dbs5", "#2a3a5a", "#e09a72"));
  }

  window.SCENES = { dbstation: dbstation, dbcoulon: dbcoulon, dbbus: dbbus, dbcourt: dbcourt, dbcorner: dbcorner };
})();
