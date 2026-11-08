/* Trinidad James scenes (Regions tab: Atlanta; Downtown ATL - raised in Atlanta from eighth grade, born in Port of Spain, Trinidad).
   CSS classes and ids prefixed tj- (the page's own anim-train is kept).
   1 Georgia State station, MARTA Blue + Green lines: the elevated side platforms built into the James H. Floyd state office building's
     concrete base (the twin towers rising above), a silver MARTA train sliding in.
   2 Port of Spain, Trinidad (where he was born): the old white Port of Spain lighthouse on Wrightson Rd by the harbour, a cargo ship
     gliding, palms, the red-black-white flag flying.
   3 MJQ Concourse on Ponce de Leon Ave (he called it his craziest Atlanta show): the club down in an old parking deck, low concrete
     ceiling and pillars, the DJ booth, crowd silhouettes jumping, lights sweeping.
   4 Clayton County, where the "All Gold Everything" video was shot: red Georgia clay, pines, a gold car rolling, a gold Au tile sign.
   5 Pryor St SW and Upper Alabama St downtown (his Hommewrk shop, and Ginza where he wrote All Gold Everything): green signs,
     TRINIDAD JAMES tagged with GOLD GANG and JUST WATCH, the white tower of Atlanta City Hall behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tjblink{0%,100%{opacity:1}50%{opacity:.2}}.tj-blink{animation:tjblink 1.1s infinite}.tj-blink2{animation-delay:-.55s}' +
    '@keyframes tjbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.tj-bob{animation:tjbob .5s ease-in-out infinite}.tj-bob2{animation-delay:-.25s}' +
    '@keyframes tjflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.tj-flag{transform-box:fill-box;transform-origin:0% 50%;animation:tjflag 1.4s ease-in-out infinite}' +
    '@keyframes tjship{from{transform:translateX(-160px)}to{transform:translateX(440px)}}.tj-ship{animation:tjship 22s linear infinite}' +
    '@keyframes tjwave{0%,100%{transform:translateX(0);opacity:.4}50%{transform:translateX(10px);opacity:.85}}.tj-wave{animation:tjwave 3s ease-in-out infinite}.tj-wave2{animation-delay:-1.5s}' +
    '@keyframes tjbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.tj-beam{transform-box:fill-box;transform-origin:50% 0%;animation:tjbeam 2.6s ease-in-out infinite}.tj-beam2{animation-delay:-1.3s}' +
    '@keyframes tjroll{from{transform:translateX(-150px)}to{transform:translateX(470px)}}.tj-roll{animation:tjroll 6s linear infinite}' +
    '@keyframes tjrolll{from{transform:translateX(460px)}to{transform:translateX(-140px)}}.tj-rolll{animation:tjrolll 7.5s linear infinite;animation-delay:-3s}' +
    '@keyframes tjspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.tj-sp{animation:tjspray 1.4s ease-out infinite}.tj-sp2{animation-delay:.5s}' +
    '@keyframes tjtw{0%,100%{opacity:.25}50%{opacity:1}}.tj-tw{animation:tjtw 1.8s ease-in-out infinite}.tj-tw2{animation-delay:-.9s}' +
    '@keyframes tjsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tj-sway{transform-box:fill-box;transform-origin:50% 100%;animation:tjsway 2.4s ease-in-out infinite}' +
    '@keyframes tjshine{0%,100%{opacity:0}50%{opacity:.9}}.tj-shine{animation:tjshine 1.6s ease-in-out infinite}.tj-shine2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "tj-tw" + (i % 8 ? "" : " tj-tw2")) + '" cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const GOLD = "#f2c230", DGOLD = "#b8860b", RED = "#e4002b", BLUE = "#0075b2", GREEN = "#009d4b";
  const flag = (x, y, w) => { const h = w * 0.6; return '<rect x="' + (x - 2) + '" y="' + y + '" width="3" height="' + (h + 46) + '" fill="#7a7a7a"/><g class="tj-flag"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + RED + '"/>' +
    '<path d="M' + x + ' ' + y + 'l' + (w * 0.18) + ' 0L' + (x + w) + ' ' + (y + h * 0.82) + 'v' + (h * 0.18) + 'h-' + (w * 0.18) + 'L' + x + ' ' + (y + h * 0.18) + 'z" fill="#fff"/>' +
    '<path d="M' + (x + w * 0.06) + ' ' + y + 'h' + (w * 0.08) + 'L' + (x + w) + ' ' + (y + h * 0.88) + 'v' + (h * 0.12) + 'h-' + (w * 0.08) + 'L' + x + ' ' + (y + h * 0.1) + 'v-' + (h * 0.1) + 'z" fill="#111"/></g>'; };

  /* 1. Georgia State station, elevated, inside the Floyd state office building */
  function tjstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 50) + '" y="134" width="34" height="18" rx="3" fill="#1e2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="50" y="126" width="300" height="52" rx="8" fill="#d3d8dc" stroke="#6d757c" stroke-width="2"/>' + win +
      '<rect x="50" y="158" width="300" height="5" fill="#f08a24"/><rect x="50" y="165" width="300" height="4" fill="#1f5fa8"/>' +
      '<path d="M198 128v48" stroke="#6d757c" stroke-width="2"/>' +
      '<rect x="330" y="130" width="18" height="42" rx="4" fill="#aeb4ba"/><circle cx="340" cy="168" r="3.5" fill="#fff6c2"/>' +
      '<rect x="256" y="128" width="72" height="11" rx="2" fill="#111"/><text x="292" y="136.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">INDIAN CREEK</text></g>';
    const tower = (x) => '<rect x="' + x + '" y="14" width="96" height="70" fill="#c9c2b4"/>' + Array.from({ length: 6 }, (_, r) => Array.from({ length: 8 }, (_, c) =>
      '<rect x="' + (x + 6 + c * 11) + '" y="' + (20 + r * 10) + '" width="7" height="5" fill="' + ((r + c) % 5 ? "#5a6b78" : "#f7e3a3") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tjs1)"/>' +
      /* the twin state office towers above the station */
      tower(40) + tower(264) + '<rect x="136" y="44" width="128" height="40" fill="#bdb6a8"/>' +
      Array.from({ length: 10 }, (_, c) => '<rect x="' + (142 + c * 12) + '" y="52" width="8" height="5" fill="#5a6b78"/>').join("") +
      /* concrete base the platforms run through */
      '<rect x="0" y="84" width="400" height="22" fill="#a9a293"/><rect x="0" y="104" width="400" height="4" fill="#7d776b"/>' +
      '<rect x="0" y="108" width="400" height="80" fill="#2a2c30"/>' +
      [30, 140, 250, 360].map(x => '<rect x="' + x + '" y="108" width="10" height="80" fill="#8f897c"/>').join("") +
      '<rect class="tj-blink" x="70" y="110" width="50" height="3" fill="#fff3c4"/><rect class="tj-blink tj-blink2" x="280" y="110" width="50" height="3" fill="#fff3c4"/>' +
      train +
      /* side platform edge */
      '<rect x="0" y="178" width="400" height="10" fill="#bdb9b0"/><rect x="0" y="176" width="400" height="3" fill="#f2c200"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="tj-roll"><rect x="0" y="222" width="44" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="236" r="4" fill="#111"/><circle cx="34" cy="236" r="4" fill="#111"/></g>' +
      '<g class="tj-rolll"><rect x="0" y="240" width="48" height="13" rx="4" fill="#d9d2c3"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="38" cy="254" r="4" fill="#111"/></g>' +
      /* black station sign */
      '<rect x="96" y="192" width="214" height="32" rx="3" fill="#111"/><text x="106" y="214" ' + font + ' font-size="16" fill="#fff">Georgia State</text>' +
      badge(218, 201, "BLUE", BLUE) + badge(218, 216, "GREEN", GREEN),
      sky("tjs1", "#6aa5da", "#f7dca8"));
  }

  /* 2. Port of Spain lighthouse by the harbour */
  function tjlighthouse() {
    const palm = (x, s) => '<g class="tj-sway"><path d="M' + x + ' 200q' + (4 * s) + ' -40 ' + (2 * s) + ' -78" stroke="#6b4a2a" stroke-width="5" fill="none"/>' +
      [-60, -25, 15, 50, 85].map(a => '<path d="M' + (x + 2 * s) + ' 122q' + (Math.cos(a * Math.PI / 180) * 22).toFixed(1) + ' ' + (-14 + Math.sin(a * Math.PI / 180) * 10).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 40).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 18).toFixed(1) + '" stroke="#2f8a3e" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tjs2)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#fff2b0" opacity=".85"/>' +
      /* Northern Range hills */
      '<path d="M0 120q60 -40 120 -20t130 -14t150 10v44H0z" fill="#3f7a4a"/>' +
      /* harbour */
      '<rect x="0" y="150" width="400" height="58" fill="#1f7fa8"/>' +
      '<path class="tj-wave" d="M20 170h40M120 184h50M240 166h40M320 190h50" stroke="#bfe8f5" stroke-width="2"/><path class="tj-wave tj-wave2" d="M60 196h30M180 172h40M290 200h40" stroke="#bfe8f5" stroke-width="2"/>' +
      '<g class="tj-ship"><path d="M0 156h110l-10 14H10z" fill="#2c3440"/><rect x="18" y="140" width="22" height="16" fill="#d8573a"/><rect x="42" y="144" width="22" height="12" fill="#3b7bd1"/><rect x="66" y="140" width="22" height="16" fill="#e8c547"/><rect x="92" y="132" width="10" height="24" fill="#f4f1ea"/></g>' +
      /* quay */
      '<rect x="0" y="206" width="400" height="54" fill="#8a8578"/><rect x="0" y="204" width="400" height="4" fill="#5c574d"/>' +
      /* the lighthouse: white octagonal tower, dark lantern */
      '<path d="M176 206l8 -128h32l8 128z" fill="#f4f2ec" stroke="#b9b4a8" stroke-width="2"/>' +
      '<path d="M190 206l3 -128M210 206l-3 -128" stroke="#dcd7cb" stroke-width="2"/>' +
      '<rect x="178" y="72" width="44" height="8" fill="#2a2a2a"/><rect x="186" y="50" width="28" height="22" fill="#20303a" stroke="#2a2a2a" stroke-width="2"/>' +
      '<path d="M182 50l18 -14l18 14z" fill="#2a2a2a"/><circle class="tj-blink" cx="200" cy="61" r="7" fill="#fff6b8"/>' +
      '<rect x="196" y="120" width="8" height="12" fill="#2a2a2a"/><rect x="194" y="176" width="12" height="30" rx="2" fill="#5a3a24"/>' +
      palm(70, 1) + palm(330, -1) + flag(250, 120, 46) +
      label(66, 268, "PORT OF SPAIN, TRINIDAD · WHERE HE WAS BORN"),
      sky("tjs2", "#4fb3e8", "#fde7b8"));
  }

  /* 3. MJQ Concourse on Ponce de Leon Ave: the club in the old parking deck */
  function tjmjq() {
    const dancer = (x, i, c) => '<g class="tj-bob' + (i % 2 ? " tj-bob2" : "") + '"><circle cx="' + x + '" cy="168" r="9" fill="' + c + '"/><path d="M' + (x - 11) + ' 214l3 -36h16l3 36z" fill="' + c + '"/>' +
      '<path d="M' + (x - 9) + ' 184l-10 -22M' + (x + 9) + ' 184l10 -22" stroke="' + c + '" stroke-width="5" stroke-linecap="round"/></g>';
    const beam = (x, c, d) => '<path class="tj-beam' + (d ? " tj-beam2" : "") + '" d="M' + x + ' 44l-34 150h68z" fill="' + c + '" opacity=".22"/>';
    return svg(
      '<rect width="400" height="260" fill="#0d0c12"/>' +
      /* concrete deck ceiling + parking stripes on the floor */
      '<rect x="0" y="0" width="400" height="40" fill="#4a4a50"/>' + [0, 80, 160, 240, 320].map(x => '<rect x="' + x + '" y="36" width="80" height="8" fill="#3a3a40"/>').join("") +
      '<path d="M0 44h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      [40, 360].map(x => '<rect x="' + (x - 10) + '" y="44" width="20" height="170" fill="#55555c"/>').join("") +
      beam(120, GOLD) + beam(200, "#e4002b", 1) + beam(280, "#7bd3ff") +
      '<circle class="tj-blink" cx="120" cy="48" r="5" fill="' + GOLD + '"/><circle class="tj-blink tj-blink2" cx="200" cy="48" r="5" fill="#ff5a6e"/><circle class="tj-blink" cx="280" cy="48" r="5" fill="#7bd3ff"/>' +
      /* DJ booth */
      '<rect x="150" y="108" width="100" height="34" rx="3" fill="#1b1b22" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<circle cx="176" cy="122" r="9" fill="#333" stroke="#777"/><circle cx="224" cy="122" r="9" fill="#333" stroke="#777"/>' +
      '<g class="tj-shine"><rect x="194" y="114" width="12" height="4" fill="' + GOLD + '"/></g>' +
      dancer(80, 0, "#1f1d2a") + dancer(120, 1, "#262333") + dancer(165, 0, "#1f1d2a") + dancer(240, 1, "#262333") + dancer(285, 0, "#1f1d2a") + dancer(325, 1, "#262333") +
      '<rect x="0" y="214" width="400" height="46" fill="#26262c"/><path d="M60 214l-20 46M140 214l-10 46M260 214l10 46M340 214l20 46" stroke="#f4f1ea" stroke-width="2" opacity=".35"/>' +
      label(80, 240, "MJQ CONCOURSE, PONCE DE LEON AVE · HIS CRAZIEST ATL SHOW"),
      "");
  }

  /* 4. Clayton County, where the All Gold Everything video was shot */
  function tjclayton() {
    const pine = (x, h) => '<path d="M' + x + ' ' + (150 - h) + 'l14 ' + h * 0.45 + 'h-7l12 ' + h * 0.35 + 'h-8l11 ' + h * 0.3 + 'h-44l11 -' + h * 0.3 + 'h-8l12 -' + h * 0.35 + 'h-7z" fill="#24502e"/>';
    const car = '<g class="tj-roll"><path d="M8 208l14 -20h62l18 20h18v16H0v-16z" fill="' + GOLD + '" stroke="' + DGOLD + '" stroke-width="2"/>' +
      '<path d="M28 190h22v16H18zM56 190h24l14 16H56z" fill="#2a3540"/><circle cx="26" cy="226" r="9" fill="#111" stroke="' + GOLD + '" stroke-width="3"/><circle cx="98" cy="226" r="9" fill="#111" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect class="tj-shine" x="70" y="200" width="16" height="3" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tjs4)"/>' +
      '<circle cx="70" cy="50" r="24" fill="#fff4c2"/>' +
      [10, 44, 78, 300, 334, 368].map((x, i) => pine(x, 70 + (i % 3) * 12)).join("") +
      '<rect x="0" y="148" width="400" height="34" fill="#b4472a"/><path d="M0 150q100 8 200 0t200 2" stroke="#8f3720" stroke-width="3" fill="none"/>' +
      /* gold Au tile sign */
      '<rect x="168" y="38" width="6" height="110" fill="#6b6b6b"/><rect x="226" y="38" width="6" height="110" fill="#6b6b6b"/>' +
      '<rect x="150" y="26" width="100" height="84" rx="4" fill="' + GOLD + '" stroke="' + DGOLD + '" stroke-width="4"/>' +
      '<text x="200" y="84" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="46" fill="#3a2a00">Au</text>' +
      '<text x="200" y="102" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a00">GOLD</text>' +
      '<rect class="tj-shine" x="160" y="32" width="20" height="4" fill="#fff"/><rect class="tj-shine tj-shine2" x="220" y="96" width="20" height="4" fill="#fff"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#3a3a3e"/><path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' + car +
      label(80, 240, "CLAYTON COUNTY · WHERE ALL GOLD EVERYTHING WAS SHOT"),
      sky("tjs4", "#5fa8e0", "#ffe2a8"));
  }

  /* 5. Pryor St SW and Upper Alabama St downtown, Atlanta City Hall's white tower behind */
  function tjcorner() {
    const chain = Array.from({ length: 9 }, (_, i) => '<ellipse cx="' + (150 + i * 12) + '" cy="' + (114 + Math.sin(i / 8 * Math.PI) * 12).toFixed(1) + '" rx="6" ry="4" fill="none" stroke="' + GOLD + '" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tjs5)"/>' + stars(20) +
      /* Atlanta City Hall: white Gothic tower, stepped top */
      '<g fill="#f2efe6"><rect x="276" y="40" width="56" height="70"/><rect x="284" y="24" width="40" height="18"/><rect x="292" y="12" width="24" height="14"/><path d="M296 12l8 -10l8 10z"/>' +
      '<rect x="256" y="70" width="96" height="40"/></g>' +
      '<g stroke="#c8c2b2" stroke-width="2">' + [284, 294, 304, 314, 324].map(x => '<path d="M' + x + ' 44v64"/>').join("") + '</g>' +
      '<rect class="tj-blink" x="300" y="18" width="8" height="5" fill="#ffe08a"/>' +
      '<g fill="#3a3550"><rect x="350" y="56" width="22" height="54"/><rect x="374" y="74" width="26" height="36"/><rect x="226" y="66" width="26" height="44"/></g>' +
      /* wall */
      '<rect x="0" y="104" width="262" height="100" fill="#5b4a3a"/><g stroke="#4a3b2e" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h262"/>').join("") + '</g>' +
      tag("GOLD GANG", 22, 132, 18, RED, -3) + chain +
      tag("TRINIDAD", 16, 172, 40, GOLD, -6) + tag("JAMES", 56, 200, 30, "#fff", -4) + tag("JUST WATCH", 170, 200, 14, GOLD, -2) +
      '<g fill="' + GOLD + '"><circle class="tj-sp" cx="236" cy="166" r="3"/><circle class="tj-sp tj-sp2" cx="228" cy="174" r="2.5"/></g>' +
      /* sign pole */
      '<rect x="326" y="110" width="6" height="96" fill="#6b6b6b"/>' + sign(268, 112, 122, "Pryor St SW", 11) + sign(260, 138, 138, "Upper Alabama St", 10.5) +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>',
      sky("tjs5", "#1b1f4a", "#c0703a"));
  }

  window.SCENES = { tjstation, tjlighthouse, tjmjq, tjclayton, tjcorner };
})();
