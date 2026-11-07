/* dessa scenes (Regions tab: Minneapolis). CSS classes and ids prefixed ds- (the page's own anim-train is kept).
   1 East Bank station on the METRO Green Line, University of Minnesota (her philosophy degree): center platform on Washington Av, campus brick behind, the train sliding in, snow falling.
   2 The Weisman Art Museum on the East Bank bluff: the crumpled brushed-steel front over the Mississippi, the sun glinting off it, the river moving.
   3 Orchestra Hall ("Sound the Bells", live with the Minnesota Orchestra): the white acoustic cubes on the walls, music stands, the mic in the spotlight, the bells swinging.
   4 The Guthrie Theater on the riverfront at night: midnight-blue tower, the cantilevered Endless Bridge, the glowing amber window, the river below.
   5 W 47th St and Beard Av S by Southwest High in Linden Hills: green signs, DESSA tagged on the wall, the Lake Harriet Bandshell's red turrets behind on the lake. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dsflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ds-flk{animation:dsflick 2.2s infinite}.ds-flk2{animation-delay:.7s}' +
    '@keyframes dssnow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.ds-sn{animation:dssnow 6s linear infinite}.ds-sn2{animation-delay:-2s}.ds-sn3{animation-delay:-4s}' +
    '@keyframes dsflow{from{transform:translateX(0)}to{transform:translateX(-40px)}}.ds-fl{animation:dsflow 2.6s linear infinite}' +
    '@keyframes dsglint{0%,100%{opacity:0}50%{opacity:.9}}.ds-gli{animation:dsglint 2.4s ease-in-out infinite}.ds-gli2{animation-delay:.8s}.ds-gli3{animation-delay:1.6s}' +
    '@keyframes dsswing{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.ds-sw{transform-box:fill-box;transform-origin:50% 0;animation:dsswing 1.8s ease-in-out infinite}.ds-sw2{animation-delay:-.6s}.ds-sw3{animation-delay:-1.2s}' +
    '@keyframes dssweep{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.ds-swp{transform-box:fill-box;transform-origin:50% 0;animation:dssweep 3.4s ease-in-out infinite}' +
    '@keyframes dsblink{0%,100%{opacity:.25}50%{opacity:1}}.ds-bl{animation:dsblink 1.4s ease-in-out infinite}.ds-bl2{animation-delay:.45s}.ds-bl3{animation-delay:.9s}' +
    '@keyframes dssail{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.ds-sail{animation:dssail 16s linear infinite}.ds-sail2{animation-delay:-8s}' +
    '@keyframes dsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ds-sp{animation:dsspray 1.4s ease-out infinite}.ds-sp2{animation-delay:.45s}' +
    '@keyframes dsnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-50px);opacity:0}}.ds-nt{animation:dsnote 3s ease-out infinite}.ds-nt2{animation-delay:1s}.ds-nt3{animation-delay:2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* METRO light rail line badge */
  const line = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "ds-bl") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const snowfall = () => { let s = ""; for (let i = 0; i < 34; i++) s += '<circle class="ds-sn' + (i % 3 ? " ds-sn" + (1 + i % 3) : "") + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 240) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".85"/>'; return s; };
  const pole = (x, y1, y2) => '<rect x="' + (x - 3) + '" y="' + y1 + '" width="6" height="' + (y2 - y1) + '" fill="#2f2f2f"/>';
  /* METRO light rail car (white body, line-color band, dark windows, pantograph) */
  const lrv = (x, y, w, band) => '<g class="anim-train"><path d="M' + (x + w / 2 - 14) + ' ' + (y - 2) + 'l14 -14l14 14" stroke="#333" stroke-width="2" fill="none"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="54" rx="10" fill="#eceef0" stroke="#7a7e84" stroke-width="2"/>' +
    Array.from({ length: Math.floor((w - 20) / 44) }, (_, i) => '<rect x="' + (x + 12 + i * 44) + '" y="' + (y + 8) + '" width="34" height="20" rx="3" fill="#24313d"/>').join("") +
    '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="7" fill="' + band + '"/><rect x="' + x + '" y="' + (y + 42) + '" width="' + w + '" height="3" fill="#f2c200"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 48) + '" r="3" fill="#fff6c2"/></g>';
  const GLD = "#e8c872", TEAL = "#4fb3bf", RED = "#d9534f", GRN = "#00a651", CREAM = "#f4ecd8";

  /* 1. East Bank station, METRO Green Line, U of M */
  function eastbank() {
    let brick = "";
    for (let i = 0; i < 5; i++) { const x = 6 + i * 80; brick += '<rect x="' + x + '" y="' + (70 + (i % 2) * 14) + '" width="70" height="' + (110 - (i % 2) * 14) + '" fill="' + (i % 2 ? "#8e4a36" : "#a65a40") + '"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) brick += '<rect x="' + (x + 6 + c * 16) + '" y="' + (86 + (i % 2) * 14 + r * 24) + '" width="10" height="14" fill="#f3d79a" opacity=".75"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#ds1)"/>' + brick +
      '<rect x="0" y="178" width="400" height="82" fill="#8b8f96"/>' +
      '<path d="M24 62h352l-10 10H34z" fill="#cfd8de"/><rect x="24" y="58" width="352" height="6" fill="#7a8a96"/>' + [50, 200, 350].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="110" fill="#6d757e"/>').join("") +
      lrv(30, 124, 300, GRN) +
      '<rect x="0" y="178" width="400" height="6" fill="#f2c200"/><rect x="0" y="184" width="400" height="76" fill="#b9b3a6"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => '<path d="M' + (i * 44) + ' 184v76" stroke="#a8a294" stroke-width="1"/>').join("") +
      '<rect x="112" y="74" width="176" height="26" rx="3" fill="#111"/><text x="126" y="92" ' + font + ' font-size="14" fill="#fff">East Bank</text>' + line(216, 87, "Green", GRN) +
      snowfall(),
      sky("ds1", "#7f97b2", "#d9e3ec"));
  }

  /* 2. Weisman Art Museum: brushed steel over the river */
  function weisman() {
    return svg(
      '<rect width="400" height="260" fill="url(#ds2)"/><circle cx="330" cy="58" r="24" fill="#ffd27a"/>' +
      '<path d="M0 150q60 -14 120 -6t140 -4t140 2v30H0z" fill="#6b7f5a"/>' +
      '<rect x="60" y="88" width="250" height="70" fill="#b2573c"/>' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (80 + i * 36) + '" y="100" width="18" height="10" fill="#7a3a28"/>').join("") +
      '<path d="M70 158V98l18 -30l14 22l16 -36l20 30l12 -20l22 26l18 -34l16 28l14 -14v126z" fill="url(#ds2s)" stroke="#8d97a3" stroke-width="1.5"/>' +
      '<path d="M88 68l10 90M118 54l6 104M150 64l2 94M184 60l-2 98M218 74l-4 84" stroke="#e9eef3" stroke-width="2" opacity=".8"/>' +
      '<circle class="ds-gli" cx="110" cy="96" r="5" fill="#fff"/><circle class="ds-gli ds-gli2" cx="166" cy="84" r="4" fill="#fff"/><circle class="ds-gli ds-gli3" cx="206" cy="100" r="5" fill="#fff"/>' +
      '<rect x="0" y="158" width="400" height="10" fill="#5a6f4c"/>' +
      '<path d="M0 168h400v92H0z" fill="#3f6f8f"/>' +
      '<rect x="0" y="176" width="400" height="6" fill="#c9c2b4"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 4) + '" y="182" width="8" height="40" fill="#a8a092"/>').join("") +
      '<g class="ds-fl"><path d="M0 232h30M60 240h30M120 232h30M180 240h30M240 232h30M300 240h30M360 232h30M420 240h30" stroke="#a9cde6" stroke-width="2"/></g>',
      sky("ds2", "#f39a5c", "#fde1b0") + '<linearGradient id="ds2s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f7fa"/><stop offset=".5" stop-color="#b6c0cb"/><stop offset="1" stop-color="#e2e8ee"/></linearGradient>');
  }

  /* 3. Orchestra Hall: the cube wall, music stands, the mic, the bells */
  function orchestra() {
    let cubes = "";
    for (let i = 0; i < 46; i++) { const x = (i * 83) % 392, y = 10 + (i * 47) % 120, s = 8 + (i * 7) % 16;
      cubes += '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 4l' + s / 2 + ' -4l' + s / 2 + ' 4v' + s + 'l-' + s / 2 + ' 4l-' + s / 2 + ' -4z" fill="' + CREAM + '"/><path d="M0 4l' + s / 2 + ' 4l' + s / 2 + ' -4" stroke="#c9b99a" stroke-width="1" fill="none"/><path d="M' + s / 2 + ' 8v' + s + '" stroke="#d9cbb0" stroke-width="1"/></g>'; }
    let stands = "";
    for (let i = 0; i < 9; i++) { const x = 30 + i * 42, y = 196 + (i % 2) * 8; stands += '<path d="M' + x + ' ' + (y + 34) + 'v-24" stroke="#222" stroke-width="2"/><rect x="' + (x - 10) + '" y="' + (y - 2) + '" width="20" height="12" fill="#1c1c1c" transform="rotate(-8 ' + x + ' ' + y + ')"/>'; }
    const bell = (x, len, cls) => '<g class="ds-sw ' + cls + '"><rect x="' + (x - 1) + '" y="40" width="2" height="16" fill="#9a8a5a"/><rect x="' + (x - 5) + '" y="56" width="10" height="' + len + '" rx="1" fill="' + GLD + '" stroke="#9a7a2a" stroke-width="1.5"/><rect x="' + (x - 6) + '" y="56" width="12" height="4" fill="#c99a2a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#5a2c22"/>' + cubes +
      '<rect x="0" y="150" width="400" height="10" fill="#3a1c16"/><rect x="0" y="160" width="400" height="100" fill="#b07a48"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<path d="M' + (i * 56) + ' 160l-30 100" stroke="#9a6a3c" stroke-width="1.5"/>').join("") +
      '<path class="ds-swp" d="M200 0l-46 230h92z" fill="#fff6d0" opacity=".22"/>' +
      stands +
      '<rect x="198" y="168" width="4" height="62" fill="#222"/><ellipse cx="200" cy="230" rx="14" ry="3" fill="#111"/><rect x="194" y="154" width="12" height="18" rx="6" fill="#333"/><rect x="196" y="156" width="8" height="10" rx="4" fill="#777"/>' +
      '<rect x="296" y="36" width="80" height="6" rx="2" fill="#7a6a3a"/>' + bell(306, 60, "") + bell(322, 52, "ds-sw2") + bell(338, 44, "ds-sw3") + bell(354, 36, "") + bell(370, 30, "ds-sw2") +
      '<text class="ds-nt" x="150" y="140" font-size="18" fill="' + GLD + '">&#9834;</text><text class="ds-nt ds-nt2" x="244" y="132" font-size="16" fill="' + GLD + '">&#9835;</text><text class="ds-nt ds-nt3" x="96" y="128" font-size="15" fill="' + GLD + '">&#9834;</text>',
      "");
  }

  /* 4. The Guthrie Theater at night: blue tower, Endless Bridge, amber window */
  function guthrie() {
    return svg(
      '<rect width="400" height="260" fill="url(#ds4)"/>' + stars(26) + '<circle cx="62" cy="44" r="14" fill="#f6efd2"/>' +
      '<rect x="40" y="96" width="120" height="96" fill="#1f3a5c"/><rect x="40" y="96" width="120" height="96" fill="url(#ds4c)" opacity=".5"/>' +
      '<rect x="150" y="62" width="70" height="130" fill="#23436a"/><path d="M150 62h70v10h-70z" fill="#2c5480"/>' +
      '<rect x="220" y="110" width="120" height="82" fill="#1c3656"/>' +
      '<path d="M210 120h180v18H210z" fill="#2a5a8c"/><path d="M210 138h180v4H210z" fill="#173050"/>' + '<rect x="214" y="124" width="172" height="8" fill="#9fc6ea" opacity=".55"/>' +
      '<rect class="ds-flk" x="240" y="78" width="40" height="30" fill="#f5b51e"/><rect x="236" y="74" width="48" height="4" fill="#173050"/>' +
      [0, 1, 2, 3].map(i => '<rect class="ds-bl ds-bl' + (1 + i % 3) + '" x="' + (56 + i * 26) + '" y="150" width="14" height="10" fill="#ffe6a0" opacity=".8"/>').join("") +
      [0, 1, 2].map(i => '<rect x="' + (162 + i * 18) + '" y="' + (90 + i * 22) + '" width="10" height="12" fill="#ffe6a0" opacity=".7"/>').join("") +
      '<rect x="0" y="192" width="400" height="12" fill="#2a2f38"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#123050"/>' +
      '<path d="M210 210h180v4H210z" fill="#4a86c0" opacity=".45"/><rect x="240" y="216" width="40" height="10" fill="#f5b51e" opacity=".35"/>' +
      '<g class="ds-fl"><path d="M0 236h30M60 244h30M120 236h30M180 244h30M240 236h30M300 244h30M360 236h30M420 244h30" stroke="#5c8fbf" stroke-width="2"/></g>',
      sky("ds4", "#0a1428", "#2a3f6a") + '<linearGradient id="ds4c" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a5a80"/><stop offset="1" stop-color="#0f2038"/></linearGradient>');
  }

  /* 5. W 47th St and Beard Av S, Linden Hills: Lake Harriet Bandshell behind */
  function corner() {
    const turret = (x, w, h, base) => '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#e6d6b4"/><path d="M' + (x - 3) + ' ' + (base - h) + 'l' + (w / 2 + 3) + ' -' + (w * 1.3) + 'l' + (w / 2 + 3) + ' ' + (w * 1.3) + 'z" fill="#b8432e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ds5)"/>' +
      '<rect x="0" y="104" width="400" height="22" fill="#4f7fae"/><g class="ds-fl"><path d="M0 116h20M50 120h20M100 116h20M150 120h20M200 116h20M250 120h20M300 116h20M350 120h20M400 116h20" stroke="#a9cde6" stroke-width="1.5"/></g>' +
      '<g class="ds-sail"><path d="M20 112v-22l12 20z" fill="#fff"/><path d="M14 112h22l-3 4h-16z" fill="#333"/></g><g class="ds-sail ds-sail2"><path d="M20 112v-18l10 16z" fill="#f6e7c8"/><path d="M15 112h20l-3 3h-14z" fill="#333"/></g>' +
      '<g transform="translate(0 0)"><rect x="150" y="84" width="100" height="24" fill="#e6d6b4"/><path d="M168 108v-14q32 -22 64 0v14z" fill="#3a2a22"/>' +
      turret(140, 16, 30, 108) + turret(244, 16, 30, 108) + turret(192, 16, 40, 92) + turret(166, 12, 20, 92) + turret(222, 12, 20, 92) + '</g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7b5a4a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#6a4c3e" stroke-width="1"/>').join("") +
      tag("DESSA", 22, 184, 46, GLD, -6) + tag("DOOMTREE", 30, 214, 22, TEAL, -3) + tag("CHIME", 186, 212, 22, RED, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#bdb6a8"/>' +
      pole(339, 96, 224) + sign(282, 98, 114, "W 47th St") + sign(282, 124, 114, "Beard Av S") +
      '<g class="ds-sp"><circle cx="250" cy="196" r="3" fill="' + GLD + '" opacity=".7"/></g><g class="ds-sp ds-sp2"><circle cx="256" cy="192" r="2" fill="' + GLD + '" opacity=".6"/></g>',
      sky("ds5", "#4a78a8", "#f2c08a"));
  }

  window.SCENES = { eastbank: eastbank, weisman: weisman, orchestra: orchestra, guthrie: guthrie, corner: corner };
})();
