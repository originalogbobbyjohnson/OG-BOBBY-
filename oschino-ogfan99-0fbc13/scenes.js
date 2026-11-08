/* oschino scenes (Regions tab: Philadelphia; North Philly, the 'Beirut' blocks he grew up on). CSS classes prefixed os- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes osflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.os-flk{animation:osflick 2.6s infinite}.os-flk2{animation-delay:.9s}' +
    '@keyframes osglow{0%,100%{opacity:.45}50%{opacity:1}}.os-glow{animation:osglow 2.2s ease-in-out infinite}.os-g2{animation-delay:-1.1s}' +
    '@keyframes osblink{0%,49%{opacity:1}50%,100%{opacity:0}}.os-rec{animation:osblink 1.2s steps(1) infinite}' +
    '@keyframes osletter{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(70px,-120px) rotate(24deg);opacity:0}}.os-lt{transform-box:fill-box;animation:osletter 6s linear infinite}.os-lt2{animation-delay:-2s}.os-lt3{animation-delay:-4s}' +
    '@keyframes ossweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.os-sw{transform-box:fill-box;transform-origin:50% 0%;animation:ossweep 3.6s ease-in-out infinite}.os-sw2{animation-delay:-1.8s}' +
    '@keyframes osbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.os-bob{animation:osbob .8s ease-in-out infinite}.os-bob2{animation-delay:-.4s}' +
    '@keyframes osspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.os-sp{animation:osspray 1.4s ease-out infinite}.os-sp2{animation-delay:.45s}' +
    '@keyframes oswalk{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}.os-walk{animation:oswalk 14s linear infinite}' +
    '@keyframes oscar{0%{transform:translateX(460px)}100%{transform:translateX(-200px)}}.os-car{animation:oscar 9s linear infinite}' +
    '@keyframes oseltrain{0%{transform:translateX(-420px)}55%,100%{transform:translateX(460px)}}.os-el{animation:oseltrain 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "os-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e0b24a", RED = "#c8412f", BLUE = "#6fb3e0", MFL = "#0f75bc";
  /* a row of North Philly rowhomes: brick fronts, cornices, windows, stoops */
  const rows = (y, h, cols) => cols.map((c, i) => '<rect x="' + (i * 50) + '" y="' + y + '" width="50" height="' + h + '" fill="' + c + '"/><rect x="' + (i * 50) + '" y="' + (y - 5) + '" width="50" height="6" fill="#3a2e28"/>' +
    '<rect x="' + (i * 50 + 8) + '" y="' + (y + 10) + '" width="13" height="16" fill="' + (i % 3 === 1 ? "#ffd98a" : "#2a3442") + '"/><rect x="' + (i * 50 + 29) + '" y="' + (y + 10) + '" width="13" height="16" fill="#2a3442"/>' +
    '<rect x="' + (i * 50 + 8) + '" y="' + (y + h - 30) + '" width="12" height="30" fill="#4a2e22"/><rect x="' + (i * 50 + 27) + '" y="' + (y + h - 28) + '" width="15" height="14" fill="#2a3442"/>').join("");

  /* 1. York-Dauphin on the Market-Frankford El, up over Front St: the steel platform and canopy, the black sign with the MFL bullet, the blue-striped train sliding in, North Philly rooftops below */
  function osstation() {
    const tr = '<g class="anim-train"><rect x="22" y="106" width="330" height="72" rx="8" fill="#d6dade" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 44) + '" y="118" width="30" height="24" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="22" y="150" width="330" height="7" fill="' + MFL + '"/><rect x="22" y="160" width="330" height="2" fill="' + MFL + '"/>' +
      '<rect x="332" y="110" width="20" height="66" rx="4" fill="#a3a9b0"/><circle cx="344" cy="166" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#os1)"/>' + stars(10) +
      /* rooftops far below the El */
      '<g opacity=".8">' + [0, 44, 88, 132, 176, 220, 264, 308, 352].map((x, i) => '<rect x="' + x + '" y="' + (78 + (i % 3) * 4) + '" width="44" height="40" fill="' + ["#5a3a30", "#4a3a34", "#62402f"][i % 3] + '"/>').join("") + '</g>' +
      /* canopy and its columns */
      '<path d="M0 0h400v22l-200 8l-200 -8z" fill="#3c4650"/><rect x="0" y="22" width="400" height="4" fill="' + MFL + '"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 5) + '" y="24" width="10" height="168" fill="#56616c"/>').join("") +
      [100, 300].map((x, i) => '<rect class="os-flk' + (i ? " os-flk2" : "") + '" x="' + (x - 26) + '" y="30" width="52" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="98" width="400" height="92" fill="#22282e" opacity=".6"/>' + tr +
      '<rect x="0" y="190" width="400" height="7" fill="#f2c200"/><rect x="0" y="197" width="400" height="63" fill="#7c7c78"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 197v63" stroke="#6c6c68" stroke-width="1"/>').join("") +
      '<rect x="70" y="42" width="260" height="36" rx="3" fill="#111"/><text x="84" y="66" ' + font + ' font-size="16" fill="#fff">York-Dauphin</text>' + badge(258, 60, "MFL", MFL) +
      '<rect x="160" y="214" width="90" height="6" rx="3" fill="#fff6c2" opacity=".4" class="os-flk"/>',
      sky("os1", "#1a2440", "#d0805a"));
  }

  /* 2. State Road in the Northeast, where the city jails line the road: the long low cellblocks, the double fence and razor wire, the green State Rd sign, letters drifting up out of a cell window (Jail Letters) */
  function osstateroad() {
    const env = (x, y, cls) => '<g class="os-lt ' + cls + '"><rect x="' + x + '" y="' + y + '" width="22" height="14" rx="1" fill="#f6f0dc" stroke="#9a8e70" stroke-width="1"/><path d="M' + x + ' ' + y + 'l11 8l11 -8" stroke="#9a8e70" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#os2)"/>' +
      '<rect x="0" y="150" width="400" height="10" fill="#3c5a3a"/>' +
      /* cellblocks: tan concrete, slit windows */
      '<rect x="20" y="86" width="250" height="68" fill="#c9b99a"/><rect x="20" y="80" width="250" height="8" fill="#a8987a"/><rect x="270" y="104" width="110" height="50" fill="#bcac8e"/><rect x="270" y="98" width="110" height="8" fill="#a0907a"/>' +
      Array.from({ length: 16 }, (_, i) => '<rect x="' + (30 + i * 15) + '" y="98" width="4" height="18" fill="#4a4438"/><rect x="' + (30 + i * 15) + '" y="124" width="4" height="18" fill="#4a4438"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (280 + i * 15) + '" y="114" width="4" height="16" fill="#4a4438"/>').join("") +
      '<rect class="os-glow" x="135" y="124" width="4" height="18" fill="#ffd98a"/>' +
      env(126, 112, "") + env(140, 104, "os-lt2") + env(120, 118, "os-lt3") +
      /* the double fence with razor wire */
      '<rect x="0" y="160" width="400" height="44" fill="#6a8a5a"/>' +
      '<g stroke="#9aa3ab" stroke-width="1" opacity=".85">' + Array.from({ length: 41 }, (_, i) => '<path d="M' + (i * 10) + ' 150v58"/>').join("") + '<path d="M0 156h400M0 206h400"/></g>' +
      '<g fill="none" stroke="#c9d0d6" stroke-width="1.6">' + Array.from({ length: 20 }, (_, i) => '<circle cx="' + (10 + i * 20) + '" cy="146" r="8"/>').join("") + '</g>' +
      /* State Road itself */
      '<rect x="0" y="208" width="400" height="52" fill="#4e4e54"/><path d="M0 236h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<g class="os-car"><rect x="0" y="214" width="70" height="20" rx="6" fill="#2a3a5a"/><rect x="12" y="206" width="40" height="12" rx="4" fill="#2a3a5a"/><rect x="16" y="208" width="14" height="8" fill="#9ab8d0"/><rect x="34" y="208" width="14" height="8" fill="#9ab8d0"/><circle cx="16" cy="236" r="6" fill="#111"/><circle cx="54" cy="236" r="6" fill="#111"/></g>' +
      '<rect x="356" y="150" width="5" height="62" fill="#4a4e54"/>' + sign(316, 128, 84, "State Rd"),
      sky("os2", "#8aa8c8", "#e8dcc8"));
  }

  /* 3. Harold St, North Philly: the phone on the gimbal rolling for his YouTube hood tours, REC blinking, the rowhome block behind, a neighbor walking past */
  function osvlog() {
    return svg(
      '<rect width="400" height="260" fill="url(#os3)"/>' +
      rows(70, 110, ["#8a4a34", "#7a5a4a", "#93503a", "#6e4e40", "#8a4a34", "#7a5a4a", "#93503a", "#6e4e40"]) +
      '<rect x="0" y="180" width="400" height="22" fill="#bdb8ae"/><rect x="0" y="202" width="400" height="58" fill="#4e4e54"/>' +
      '<rect x="300" y="110" width="5" height="70" fill="#4a4e54"/>' + sign(262, 92, 84, "Harold St") +
      '<g class="os-walk"><circle cx="20" cy="150" r="7" fill="#1a1a20"/><rect x="13" y="157" width="14" height="22" rx="4" fill="#1a1a20"/><path d="M16 179l-3 12M24 179l3 12" stroke="#1a1a20" stroke-width="4"/></g>' +
      /* the phone on a gimbal, screen showing the same block */
      '<path d="M150 260v-56" stroke="#222" stroke-width="7"/><rect x="138" y="196" width="24" height="12" rx="3" fill="#2a2a2e"/>' +
      '<rect x="96" y="106" width="108" height="92" rx="10" fill="#111" stroke="#3a3a3e" stroke-width="3"/><rect x="104" y="114" width="92" height="76" rx="4" fill="#33465a"/>' +
      '<rect x="104" y="142" width="92" height="48" fill="#7a4a3a"/><rect x="110" y="150" width="10" height="12" fill="#ffd98a"/><rect x="136" y="150" width="10" height="12" fill="#2a3442"/><rect x="162" y="150" width="10" height="12" fill="#ffd98a"/>' +
      '<circle class="os-rec" cx="114" cy="122" r="4" fill="#e23b2e"/><text x="122" y="126" ' + font + ' font-size="9" fill="#fff">REC</text><text x="190" y="126" text-anchor="end" ' + font + ' font-size="8" fill="#fff">LIVE</text>',
      sky("os3", "#9cc4e4", "#f2e0c4"));
  }

  /* 4. The Real Is Back show: his name on the banner, two mics, the lights sweeping, the crowd bouncing */
  function osstage() {
    const mic = (x, y) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 0v74M-16 74h32" stroke="#2a2a2e" stroke-width="4"/><rect x="-6" y="-22" width="12" height="22" rx="6" fill="#c9ced6" stroke="#555" stroke-width="1.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0b0a10"/>' +
      '<rect x="40" y="26" width="320" height="38" rx="3" fill="#1c1a22" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="52" text-anchor="middle" ' + font + ' font-size="20" fill="' + GOLD + '" letter-spacing="3">THE REAL IS BACK</text>' +
      '<path class="os-sw" d="M90 0l-60 210h120z" fill="#fff6c8" opacity=".14"/><path class="os-sw os-sw2" d="M310 0l-60 210h120z" fill="' + RED + '" opacity=".18"/>' +
      '<rect x="80" y="0" width="20" height="10" fill="#333"/><rect x="300" y="0" width="20" height="10" fill="#333"/>' +
      '<rect x="20" y="170" width="360" height="16" fill="#2a2630"/><rect x="20" y="168" width="360" height="3" fill="' + GOLD + '"/>' +
      mic(160, 100) + mic(240, 100) +
      '<rect x="40" y="132" width="40" height="38" rx="3" fill="#15171c" stroke="#3a3e46" stroke-width="2"/><circle cx="60" cy="152" r="10" fill="#2a2f3a"/><rect x="320" y="132" width="40" height="38" rx="3" fill="#15171c" stroke="#3a3e46" stroke-width="2"/><circle cx="340" cy="152" r="10" fill="#2a2f3a"/>' +
      '<g>' + Array.from({ length: 14 }, (_, i) => '<g class="os-bob' + (i % 2 ? " os-bob2" : "") + '"><circle cx="' + (10 + i * 29) + '" cy="214" r="9" fill="#05060a"/><rect x="' + (i * 29) + '" y="222" width="20" height="40" rx="6" fill="#05060a"/>' +
        (i % 4 === 1 ? '<path d="M' + (16 + i * 29) + ' 222l8 -26" stroke="#05060a" stroke-width="5"/><rect class="os-glow" x="' + (21 + i * 29) + '" y="190" width="6" height="10" rx="1" fill="' + BLUE + '"/>' : '') + '</g>').join("") + '</g>',
      "");
  }

  /* 5. N Front St and W York St, right under the York-Dauphin El: green signs, OSCHINO tagged on the brick wall, the El's steel bents and a train rolling across, Center City glowing down Front St behind */
  function oscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#os5)"/>' + stars(14) +
      /* Center City skyline far down Front St */
      '<g fill="#2a2c44">' + '<rect x="130" y="58" width="22" height="60"/><path d="M152 118v-74l12 -14l12 14v74z"/><rect x="180" y="50" width="24" height="68"/><rect x="208" y="64" width="18" height="54"/><rect x="230" y="40" width="20" height="78"/><path d="M230 40l10 -16l10 16z"/>' + '</g>' +
      '<rect class="os-glow" x="236" y="48" width="8" height="3" fill="#ffd98a"/><rect class="os-glow os-g2" x="186" y="60" width="10" height="3" fill="#ffd98a"/>' +
      /* the El: deck, steel bents, a train passing */
      '<rect x="0" y="92" width="400" height="12" fill="#3e4650"/><rect x="0" y="104" width="400" height="5" fill="#2a3038"/>' +
      '<g class="os-el"><rect x="0" y="70" width="190" height="22" rx="4" fill="#d6dade"/><rect x="0" y="84" width="190" height="3" fill="' + MFL + '"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 30) + '" y="74" width="18" height="8" fill="#1d262e"/>').join("") + '</g>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 5) + '" y="104" width="10" height="120" fill="#3e4650"/><path d="M' + (x - 22) + ' 109l17 18M' + (x + 22) + ' 109l-17 18" stroke="#3e4650" stroke-width="4"/>').join("") +
      /* brick wall with the tags */
      '<rect x="0" y="132" width="300" height="92" fill="#7a4232"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h300" stroke="#6a3628" stroke-width="1"/>').join("") +
      tag("OSCHINO", 14, 192, 44, GOLD, -6) + tag("CHAIN GANG", 34, 216, 18, "#fff", -3) + tag("REAL IS BACK", 160, 214, 18, RED, -3) + tag("VASQUEZ", 206, 160, 17, BLUE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="346" y="120" width="6" height="104" fill="#2f2f2f"/>' + sign(306, 120, 86, "N Front St") + sign(306, 146, 86, "York St") +
      '<g class="os-sp"><circle cx="150" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="os-sp os-sp2"><circle cx="156" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("os5", "#121a36", "#c86a4a"));
  }

  window.SCENES = { osstation: osstation, osstateroad: osstateroad, osvlog: osvlog, osstage: osstage, oscorner: oscorner };
})();
