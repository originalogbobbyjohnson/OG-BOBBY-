/* T.I. scenes (Regions tab: Atlanta; Bankhead / Center Hill, West Atlanta). CSS classes and ids prefixed ti- (the page's own anim-train is kept).
   1 Bankhead station, the elevated end of MARTA's Green line: concrete deck up on columns over Donald Lee Hollowell Pkwy, a short silver two-car train sliding in.
   2 Frederick Douglass High School (his school, Collier Heights / Center Hill line): red-brick front, black + old-gold ASTROS banner, the Marching Astros' plumes bobbing.
   3 Westside Park at Bellwood Quarry, right by Bankhead: grey granite quarry walls around the green reservoir, the overlook rail, downtown far off, birds over the water.
   4 Cascade skating rink, where he starred in the movie "ATL" (2006): the low rink building at night, neon roller skate blinking, SKATE sign.
   5 Donald Lee Hollowell Pkwy (old Bankhead Hwy) and Hamilton E Holmes Dr in Center Hill: green signs, T.I. tagged with a crown, the stadium's pinwheel roof and downtown behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tiblink{0%,100%{opacity:1}50%{opacity:.2}}.ti-blink{animation:tiblink 1.1s infinite}.ti-blink2{animation-delay:-.55s}' +
    '@keyframes tibob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ti-bob{animation:tibob .6s ease-in-out infinite}.ti-bob2{animation-delay:-.3s}' +
    '@keyframes tiflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.ti-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tiflag 1.4s ease-in-out infinite}' +
    '@keyframes tibird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.ti-bird{animation:tibird 11s linear infinite}.ti-bird2{animation-delay:-5.5s}' +
    '@keyframes tiripple{0%,100%{transform:translateX(0);opacity:.35}50%{transform:translateX(10px);opacity:.8}}.ti-rip{animation:tiripple 3s ease-in-out infinite}.ti-rip2{animation-delay:-1.5s}' +
    '@keyframes tiroll{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.ti-roll{animation:tiroll 6s linear infinite}' +
    '@keyframes tirolll{from{transform:translateX(460px)}to{transform:translateX(-140px)}}.ti-rolll{animation:tirolll 7.5s linear infinite;animation-delay:-3s}' +
    '@keyframes tispray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.ti-sp{animation:tispray 1.4s ease-out infinite}.ti-sp2{animation-delay:.5s}' +
    '@keyframes titw{0%,100%{opacity:.25}50%{opacity:1}}.ti-tw{animation:titw 1.8s ease-in-out infinite}.ti-tw2{animation-delay:-.9s}' +
    '@keyframes tispin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.ti-wheel{transform-box:fill-box;transform-origin:center;animation:tispin .6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "ti-tw" + (i % 8 ? "" : " ti-tw2")) + '" cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const GOLD = "#e8c547", OLDGOLD = "#c9a227", GREEN = "#009d4b", PLAT = "#e3e8ec", BRICK = "#9b3f2c";

  /* 1. Bankhead station, elevated end of the Green line */
  function tistation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 50) + '" y="76" width="34" height="20" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="50" y="68" width="300" height="56" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="50" y="102" width="300" height="6" fill="#f08a24"/><rect x="50" y="110" width="300" height="4" fill="#1f5fa8"/>' +
      '<path d="M198 70v52" stroke="#6d757c" stroke-width="2"/>' +
      '<rect x="330" y="72" width="18" height="46" rx="4" fill="#aeb4ba"/><circle cx="340" cy="116" r="3.5" fill="#fff6c2"/>' +
      '<rect x="258" y="70" width="68" height="11" rx="2" fill="#111"/><text x="292" y="78.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">BANKHEAD</text></g>';
    const cols = [40, 130, 220, 310].map(x => '<rect x="' + x + '" y="140" width="16" height="70" fill="#a7a49c"/><rect x="' + (x - 4) + '" y="134" width="24" height="8" fill="#8d8a82"/>').join("");
    const cars = '<g class="ti-roll"><rect x="0" y="222" width="44" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="236" r="4" fill="#111"/><circle cx="34" cy="236" r="4" fill="#111"/></g>' +
      '<g class="ti-rolll"><rect x="0" y="240" width="48" height="13" rx="4" fill="#d9d2c3"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="38" cy="254" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tis1)"/>' +
      '<g fill="#2f5235">' + [8, 60, 352].map((x, i) => '<path d="M' + x + ' 130l18 -54l18 54z"/>').join("") + '</g>' +
      /* platform canopy on the deck */
      '<path d="M20 36h360l-12 10H32z" fill="#9aa5b0"/><rect x="32" y="46" width="336" height="4" fill="#5d6772"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 3) + '" y="50" width="6" height="18" fill="#5d6772"/>').join("") +
      '<rect class="ti-blink" x="110" y="51" width="40" height="3" fill="#fff3c4"/><rect class="ti-blink ti-blink2" x="250" y="51" width="40" height="3" fill="#fff3c4"/>' +
      train +
      /* concrete deck + columns */
      '<rect x="0" y="124" width="400" height="12" fill="#bdb9b0"/><rect x="0" y="122" width="400" height="3" fill="#f2c200"/>' + cols +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a3e"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' + cars +
      /* black station sign hanging under the deck */
      '<rect x="120" y="150" width="182" height="34" rx="3" fill="#111"/><text x="132" y="173" ' + font + ' font-size="17" fill="#fff">Bankhead</text>' + badge(222, 167, "GREEN", GREEN) +
      '<text x="210" y="204" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" opacity=".85">DONALD LEE HOLLOWELL PKWY</text>',
      sky("tis1", "#5b97d1", "#f6d9a2"));
  }

  /* 2. Frederick Douglass High School, the Marching Astros out front */
  function tidouglass() {
    const wins = Array.from({ length: 2 }, (_, r) => Array.from({ length: 8 }, (_, c) => '<rect x="' + (44 + c * 40) + '" y="' + (64 + r * 36) + '" width="22" height="22" fill="#dfe9ee" stroke="#5a2a1f" stroke-width="2"/>').join("")).join("");
    const player = (x, i) => '<g class="ti-bob' + (i % 2 ? " ti-bob2" : "") + '"><path d="M' + (x - 2) + ' 162l2 -16l2 16z" fill="' + GOLD + '"/><rect x="' + (x - 7) + '" y="164" width="14" height="10" rx="3" fill="#111"/>' +
      '<rect x="' + (x - 8) + '" y="174" width="16" height="26" rx="3" fill="#111"/><path d="M' + (x - 8) + ' 180h16" stroke="' + OLDGOLD + '" stroke-width="3"/>' +
      '<rect x="' + (x - 7) + '" y="200" width="5" height="16" fill="#f4f1ea"/><rect x="' + (x + 2) + '" y="200" width="5" height="16" fill="#f4f1ea"/>' +
      (i % 2 ? '<circle cx="' + (x + 11) + '" cy="186" r="7" fill="' + OLDGOLD + '" stroke="#111" stroke-width="1.5"/>' : '<path d="M' + (x + 8) + ' 182l12 -6v14z" fill="' + GOLD + '" stroke="#111" stroke-width="1"/>') + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tis2)"/>' +
      '<rect x="24" y="44" width="352" height="124" fill="' + BRICK + '"/>' +
      '<g stroke="#86351f" stroke-width="1">' + Array.from({ length: 12 }, (_, i) => '<path d="M24 ' + (52 + i * 10) + 'h352"/>').join("") + '</g>' + wins +
      '<rect x="20" y="36" width="360" height="10" fill="#d8cfc0"/>' +
      '<rect x="168" y="118" width="64" height="50" fill="#d8cfc0"/><rect x="180" y="128" width="40" height="40" fill="#4a3b2a"/>' +
      '<text x="200" y="30" text-anchor="middle" ' + font + ' font-size="13" fill="#2a1a10">FREDERICK DOUGLASS HIGH SCHOOL</text>' +
      /* flagpole + black/gold banner */
      '<rect x="356" y="10" width="3" height="160" fill="#888"/><g class="ti-flag"><rect x="359" y="12" width="30" height="20" fill="' + OLDGOLD + '"/><rect x="359" y="22" width="30" height="10" fill="#111"/></g>' +
      '<rect x="88" y="120" width="70" height="30" fill="#111" stroke="' + OLDGOLD + '" stroke-width="2"/><text x="123" y="140" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">ASTROS</text>' +
      '<path d="M268 126l4 10h10l-8 6 3 10-9 -6-9 6 3 -10-8 -6h10z" fill="' + GOLD + '"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#6f8f4e"/><rect x="0" y="210" width="400" height="50" fill="#8b8274"/>' +
      [70, 120, 170, 230, 280, 330].map(player).join("") + label(110, 180, "THE MARCHING ASTROS · WESTSIDE"),
      sky("tis2", "#79b4e3", "#e6f1f7"));
  }

  /* 3. Westside Park at Bellwood Quarry */
  function tiquarry() {
    const bird = (cls, y) => '<g class="' + cls + '"><path d="M0 ' + y + 'q6 -6 12 0q6 -6 12 0" fill="none" stroke="#2b2b2b" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tis3)"/>' +
      /* downtown far off */
      '<g fill="#8fa3b5" opacity=".8"><rect x="230" y="70" width="14" height="40"/><rect x="248" y="56" width="12" height="54"/><path d="M262 110V50l7 -14l7 14v60z"/><rect x="280" y="64" width="16" height="46"/><rect x="300" y="78" width="12" height="32"/></g>' +
      '<path d="M0 110h400v20H0z" fill="#4f7a3f"/>' +
      /* the pit: back wall of the quarry */
      '<path d="M60 122h250l-20 74H110z" fill="#6f706d"/><path d="M90 140h200M100 160h180M106 180h170" stroke="#5f605d" stroke-width="2"/>' +
      /* granite quarry walls */
      '<path d="M0 118l60 4 40 18 30 56H0z" fill="#8c8d8a"/><path d="M400 118l-70 6-40 20-26 52h136z" fill="#7f807d"/>' +
      '<path d="M0 140l70 6M0 162l92 4M0 184l110 2M400 146l-90 6M400 168l-110 4" stroke="#6b6c69" stroke-width="2"/>' +
      '<path d="M60 122l12 -6 20 6 14 -8 24 10z" fill="#5d8b47"/><path d="M290 126l18 -8 18 6 20 -10 20 8z" fill="#5d8b47"/>' +
      /* reservoir water */
      '<path d="M120 196q80 -14 160 0v64H120z" fill="#2f7f86"/><rect x="0" y="196" width="400" height="64" fill="#2c7680"/>' +
      '<g fill="#bfe7ea"><rect class="ti-rip" x="60" y="214" width="40" height="2" rx="1"/><rect class="ti-rip ti-rip2" x="190" y="226" width="56" height="2" rx="1"/><rect class="ti-rip" x="300" y="208" width="36" height="2" rx="1"/><rect class="ti-rip ti-rip2" x="110" y="244" width="48" height="2" rx="1"/></g>' +
      /* overlook rail */
      '<path d="M0 188h400" stroke="#5a5a5a" stroke-width="3"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="180" width="3" height="10" fill="#5a5a5a"/>').join("") +
      bird("ti-bird", 60) + bird("ti-bird ti-bird2", 84) + label(110, 180, "WESTSIDE PARK · BELLWOOD QUARRY"),
      sky("tis3", "#8cc4ea", "#f3f0dc"));
  }

  /* 4. Cascade skating rink, the "ATL" movie spot */
  function tirink() {
    const skate = '<g class="ti-blink"><path d="M150 50h30v26h26q10 0 10 10v6h-66z" fill="none" stroke="#ff4fb3" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="160" cy="100" r="6" fill="none" stroke="#ff4fb3" stroke-width="3"/><circle cx="200" cy="100" r="6" fill="none" stroke="#ff4fb3" stroke-width="3"/></g>';
    const car = '<g class="ti-roll"><path d="M0 222h110l-6 -14h-22l-12 -12h-46l-12 12h-12z" fill="#6a2fa0" stroke="#2a1440" stroke-width="2"/><g class="ti-wheel"><circle cx="24" cy="224" r="9" fill="#111"/><circle cx="24" cy="224" r="4" fill="#cfd5db"/><path d="M24 220v8" stroke="#555"/></g><g class="ti-wheel"><circle cx="88" cy="224" r="9" fill="#111"/><circle cx="88" cy="224" r="4" fill="#cfd5db"/><path d="M88 220v8" stroke="#555"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tis4)"/>' + stars(30) +
      /* low rink building */
      '<rect x="30" y="112" width="340" height="92" fill="#3b3550"/><rect x="24" y="104" width="352" height="10" fill="#2a2540"/>' +
      '<rect x="160" y="150" width="80" height="54" fill="#f6d27a" opacity=".85"/><path d="M200 150v54" stroke="#3b3550" stroke-width="3"/>' +
      '<rect x="56" y="140" width="70" height="30" fill="#2c6fb5" opacity=".7"/><rect x="274" y="140" width="70" height="30" fill="#2c6fb5" opacity=".7"/>' +
      /* sign */
      '<rect x="230" y="40" width="130" height="50" rx="6" fill="#141020" stroke="#22e3ff" stroke-width="3"/>' +
      '<text class="ti-blink ti-blink2" x="295" y="74" text-anchor="middle" ' + font + ' font-size="26" fill="#22e3ff">SKATE</text>' +
      '<rect x="292" y="90" width="6" height="14" fill="#555"/>' + skate +
      '<rect x="0" y="204" width="400" height="56" fill="#2b2b30"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 12"/>' + car +
      label(100, 200, "CASCADE RINK · FROM THE MOVIE ATL"),
      sky("tis4", "#1a1240", "#5a3a7a"));
  }

  /* 5. D L Hollowell Pkwy and Hamilton E Holmes Dr, the stadium behind */
  function ticorner() {
    const petals = Array.from({ length: 8 }, (_, i) => '<path d="M180 70l' + (Math.cos(i * Math.PI / 4) * 26).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 4) * 8).toFixed(1) + 'l' + (Math.cos(i * Math.PI / 4 + 1) * 10).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 4 + 1) * 4).toFixed(1) + 'z" fill="#cfd8de" stroke="#7d8790" stroke-width="1"/>').join("");
    const crown = '<path d="M40 136l8 -20 10 12 10 -18 10 18 10 -12 8 20z" fill="' + GOLD + '" stroke="#000" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tis5)"/>' +
      /* skyline + the stadium's pinwheel roof */
      '<g fill="#3e3550"><rect x="300" y="52" width="16" height="52"/><path d="M340 104V30l8 -16l8 16v74z"/><rect x="364" y="58" width="16" height="46"/></g>' +
      '<path d="M120 102l12 -32h96l12 32z" fill="#5b6872"/><path d="M132 70h96" stroke="#9fb2bf" stroke-width="2"/>' + petals +
      '<path d="M128 88h104" stroke="#2f3a42" stroke-width="2"/>' +
      /* wall */
      '<rect x="0" y="100" width="260" height="104" fill="#6d6457"/>' + '<g stroke="#5c5448" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (110 + i * 10) + 'h260"/>').join("") + '</g>' +
      crown + tag("T.I.", 30, 176, 54, GOLD, -6) + tag("KING", 150, 190, 26, PLAT, 4) + tag("WESTSIDE", 150, 128, 18, "#3fd47a", -4) +
      '<g fill="' + GOLD + '"><circle class="ti-sp" cx="232" cy="164" r="3"/><circle class="ti-sp ti-sp2" cx="224" cy="172" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="326" y="104" width="6" height="104" fill="#6b6b6b"/>' + sign(266, 108, 128, "D L Hollowell Pkwy", 10.5) + sign(262, 134, 134, "Hamilton E Holmes Dr", 10.5) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("tis5", "#f08c5a", "#ffd9a8"));
  }

  window.SCENES = { tistation, tidouglass, tiquarry, tirink, ticorner };
})();
