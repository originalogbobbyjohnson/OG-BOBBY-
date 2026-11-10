/* 03 Greedo scenes (Regions tab: Los Angeles + SoCal; Jordan Downs, Watts). CSS classes prefixed gd- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.gd-flk{animation:gdflick 2.6s infinite}.gd-flk2{animation-delay:.9s}' +
    '@keyframes gdglow{0%,100%{opacity:.4}50%{opacity:1}}.gd-glow{animation:gdglow 2.4s ease-in-out infinite}.gd-g2{animation-delay:-1.2s}' +
    '@keyframes gdcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.gd-car{animation:gdcar 6s linear infinite}' +
    '@keyframes gdcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.gd-carL{animation:gdcarL 7s linear infinite}' +
    '@keyframes gdpad{0%,100%{opacity:.35}50%{opacity:1}}.gd-pad{animation:gdpad .6s ease-in-out infinite}.gd-p2{animation-delay:.15s}.gd-p3{animation-delay:.3s}.gd-p4{animation-delay:.45s}' +
    '@keyframes gdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-22px);opacity:0}}.gd-sp{animation:gdspray 1.2s ease-out infinite}.gd-sp2{animation-delay:.4s}.gd-sp3{animation-delay:.8s}' +
    '@keyframes gdsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.gd-sway{transform-box:fill-box;transform-origin:50% 100%;animation:gdsway 3.2s ease-in-out infinite}' +
    '@keyframes gdhowl{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.gd-howl{animation:gdhowl 2s ease-in-out infinite}' +
    '@keyframes gdstick{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(10deg)}}.gd-stick{transform-box:fill-box;transform-origin:0% 100%;animation:gdstick .5s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "gd-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, h, c) => '<g class="gd-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#2a201a" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#1f3a2a") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><path d="M0 14q2 -10 14 -12l12 -8h26l14 8q14 2 14 12z" fill="' + body + '"/><rect x="0" y="12" width="80" height="6" rx="2" fill="' + body + '"/>' +
    '<path d="M28 -4h22l10 8h-38z" fill="#9fc3e0" opacity=".8"/><circle cx="18" cy="19" r="6" fill="#111"/><circle cx="62" cy="19" r="6" fill="#111"/><circle cx="18" cy="19" r="2.5" fill="#bbb"/><circle cx="62" cy="19" r="2.5" fill="#bbb"/><rect x="76" y="10" width="4" height="3" fill="#fff6c2"/></g></g>';
  const PURP = "#a66bff", GOLD = "#f2c14e", ALINE = "#0072bc";
  /* two-story stucco project building with a flat roof */
  const projects = (x, y, w, c) => { let win = ""; for (let i = 0; i < Math.floor(w / 26); i++) { win += '<rect x="' + (x + 8 + i * 26) + '" y="' + (y + 10) + '" width="14" height="12" fill="#ffd77a" class="' + (i % 3 ? "" : "gd-glow") + '"/><rect x="' + (x + 8 + i * 26) + '" y="' + (y + 36) + '" width="14" height="12" fill="' + (i % 2 ? "#ffd77a" : "#3a2a4a") + '"/>'; }
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="' + (w + 6) + '" height="6" fill="#5a4a5a"/>' + win; };

  /* 1. Firestone station on the Metro A Line, up on the aerial deck over Firestone Blvd at the north edge of Watts: blue A bullet, the light rail car sliding in */
  function gdstation() {
    let win = ""; for (let x = 30; x < 300; x += 40) win += '<rect x="' + x + '" y="94" width="28" height="22" rx="3" fill="#cfe7f7" opacity=".9"/>';
    const train = '<g class="anim-train"><rect x="12" y="82" width="310" height="62" rx="14" fill="#d9dde2" stroke="#7a8088" stroke-width="2"/>' + win +
      '<rect x="12" y="122" width="310" height="7" fill="' + ALINE + '"/><rect x="300" y="88" width="18" height="50" rx="5" fill="#b9bec5"/><circle cx="310" cy="134" r="4" fill="#fff6c2"/>' + bullet(270, 105, "A", ALINE) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gd1)"/>' + stars(18) +
      palm(40, 190, 120) + palm(360, 196, 110) +
      /* aerial deck on columns */
      '<rect x="0" y="144" width="400" height="12" fill="#b8b2a8"/><rect x="0" y="156" width="400" height="6" fill="#8d877d"/>' + [30, 140, 260, 370].map(x => '<rect x="' + (x - 10) + '" y="162" width="20" height="56" fill="#a49e94"/>').join("") +
      '<rect x="0" y="140" width="400" height="5" fill="#eab308"/>' +
      /* canopy and sign */
      '<path d="M0 40h400v8h-400z" fill="#d8dde2"/>' + [60, 200, 340].map(x => '<rect x="' + x + '" y="48" width="5" height="92" fill="#8d959c"/>').join("") +
      '<rect x="110" y="52" width="180" height="26" rx="3" fill="#111"/><text x="190" y="70" text-anchor="middle" ' + font + ' font-size="14" fill="#fff" letter-spacing="1">FIRESTONE</text>' + bullet(272, 65, "A", ALINE) +
      train +
      '<rect x="0" y="218" width="400" height="42" fill="#3a3b40"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="238" width="24" height="3" fill="#e8e4dc"/>').join("") +
      car(0, 222, "#6a2a9a", "gd-car") + car(0, 222, "#d9d4c8", "gd-carL"),
      sky("gd1", "#160a2e", "#5a3a7a"));
  }

  /* 2. Purple Summer in the projects: the two-story garden apartments of Jordan Downs, a purple summer sunset, the fire hydrant spraying */
  function gdsummer() {
    return svg(
      '<rect width="400" height="260" fill="url(#gd2)"/>' +
      '<circle cx="300" cy="96" r="30" fill="#ffb36a" opacity=".9"/>' +
      palm(30, 160, 100, "#2a1a3a") + palm(380, 160, 90, "#2a1a3a") +
      projects(50, 104, 140, "#d9c3a5") + projects(214, 108, 140, "#cdb391") +
      '<rect x="0" y="164" width="400" height="20" fill="#3a5a32"/><rect x="0" y="184" width="400" height="10" fill="#c9c4ba"/><rect x="0" y="194" width="400" height="66" fill="#3a3b40"/>' +
      /* hydrant + spray */
      '<rect x="190" y="166" width="16" height="22" rx="3" fill="#d23a2a"/><rect x="186" y="162" width="24" height="6" rx="3" fill="#d23a2a"/><rect x="204" y="172" width="8" height="6" fill="#d23a2a"/>' +
      [0, 1, 2].map(i => '<g class="gd-sp' + (i ? " gd-sp" + (i + 1) : "") + '"><path d="M212 175q30 -20 60 6" stroke="#9fd3ff" stroke-width="3" fill="none" opacity=".8"/><circle cx="' + (240 + i * 10) + '" cy="168" r="2.5" fill="#9fd3ff"/></g>').join("") +
      tag("PURPLE SUMMER", 150, 242, 24, PURP, -4),
      sky("gd2", "#3a1a6a", "#e07a8a"));
  }

  /* 3. Drummer Gang in the studio: drum machine pads lighting up, a snare and a stick, the booth light on */
  function gdstudio() {
    let pads = ""; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="gd-pad gd-p' + (((r + c) % 4) + 1) + '" x="' + (150 + c * 26) + '" y="' + (120 + r * 22) + '" width="22" height="18" rx="3" fill="' + ((r + c) % 3 ? PURP : GOLD) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#120a1e"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="96" fill="#1c1230" stroke="#24183a" stroke-width="2"/>').join("") +
      '<rect x="20" y="20" width="110" height="70" rx="4" fill="#0a0612" stroke="#3a2a5a" stroke-width="3"/><rect x="26" y="26" width="98" height="58" fill="#2a1a4a" opacity=".6"/>' +
      '<circle cx="104" cy="36" r="5" fill="#e23a3a" class="gd-flk"/><text x="74" y="62" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e4dc">BOOTH</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a1a12"/>' +
      /* desk + drum machine */
      '<rect x="120" y="104" width="160" height="104" rx="6" fill="#1a1a1a" stroke="#555" stroke-width="2"/>' + pads +
      /* snare */
      '<ellipse cx="320" cy="170" rx="44" ry="12" fill="#e8e4dc"/><rect x="276" y="170" width="88" height="30" fill="#a9b2bc"/><ellipse cx="320" cy="200" rx="44" ry="12" fill="#7a828c"/>' +
      '<g class="gd-stick"><rect x="320" y="120" width="5" height="48" rx="2" fill="#d9b382" transform="rotate(30 322 168)"/></g>' +
      /* speaker */
      '<rect x="20" y="120" width="70" height="88" rx="4" fill="#151515"/><circle cx="55" cy="150" r="16" fill="#2a2a2a" class="gd-pad"/><circle cx="55" cy="188" r="10" fill="#2a2a2a" class="gd-pad gd-p3"/>' +
      tag("DRUMMER GANG", 140, 248, 26, GOLD, -3),
      "");
  }

  /* 4. God Level: a little Watts storefront church at dusk, the cross on top, stained glass glowing ("Praying to God") */
  function gdchurch() {
    const glass = (x) => '<path d="M' + x + ' 160v-36q14 -18 28 0v36z" fill="url(#gdsg)" class="gd-glow"/><path d="M' + (x + 14) + ' 112v48M' + x + ' 140h28" stroke="#3a2a1a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gd4)"/>' + stars(14) +
      palm(36, 190, 110) + palm(364, 190, 100) +
      '<rect x="110" y="96" width="180" height="96" fill="#efe6d2"/><path d="M100 98l100 -36l100 36z" fill="#6a4a3a"/>' +
      '<rect x="196" y="22" width="8" height="40" fill="#e8e4dc"/><rect x="184" y="32" width="32" height="8" fill="#e8e4dc"/>' +
      '<circle cx="200" cy="36" r="22" fill="#fff3b0" opacity=".15" class="gd-glow"/>' +
      glass(126) + glass(246) +
      '<path d="M182 192v-50q18 -20 36 0v50z" fill="#5a3a24"/><circle cx="210" cy="170" r="2" fill="' + GOLD + '"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="11" fill="#f2c14e" letter-spacing="2">GOD LEVEL</text>' +
      '<rect x="0" y="192" width="400" height="10" fill="#c9c4ba"/><rect x="0" y="202" width="400" height="58" fill="#3a3b40"/>' +
      car(0, 222, "#2a2a2a", "gd-car"),
      sky("gd4", "#1a1040", "#b0607a") + '<linearGradient id="gdsg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + PURP + '"/><stop offset=".5" stop-color="' + GOLD + '"/><stop offset="1" stop-color="#3a8adf"/></linearGradient>');
  }

  /* 5. His corner: E 97th St and Grape St at Jordan Downs, green street signs, 03 GREEDO tagged with a wolf, the old Watts Station Red Car depot down the line behind */
  function gdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gd5)"/>' + stars(20) +
      '<circle cx="70" cy="42" r="20" fill="#f4efd8"/>' +
      /* Watts Station depot: low wooden station, cream walls, brown trim, hipped roof */
      '<rect x="150" y="102" width="150" height="34" fill="#e9dcc0"/><path d="M140 104l20 -20h130l20 20z" fill="#7a4a2a"/><rect x="150" y="100" width="150" height="5" fill="#7a4a2a"/>' +
      [164, 192, 254, 282].map(x => '<rect x="' + x + '" y="110" width="12" height="18" fill="#ffd77a" class="gd-glow"/>').join("") + '<rect x="218" y="110" width="18" height="26" fill="#7a4a2a"/>' +
      palm(120, 136, 70) + palm(330, 136, 80) +
      '<rect x="0" y="136" width="400" height="90" fill="#cbb79a"/><rect x="0" y="136" width="400" height="6" fill="#a8946f"/>' +
      /* wolf howling */
      tag("03", 24, 206, 74, PURP, -6) + tag("GREEDO", 118, 196, 46, GOLD, -5) + tag("DRUMMER GANG", 120, 218, 18, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#4e4e54"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="370" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(312, 98, 84, "Grape St", 12) + sign(306, 124, 92, "E 97th St", 12),
      sky("gd5", "#140a30", "#6a3a6a"));
  }

  window.SCENES = { gdstation: gdstation, gdsummer: gdsummer, gdstudio: gdstudio, gdchurch: gdchurch, gdcorner: gdcorner };
})();
