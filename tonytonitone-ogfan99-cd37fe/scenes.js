/* tonytonitone scenes (Regions tab: The Bay Area; East Oakland). CSS classes prefixed tt- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ttflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tt-flk{animation:ttflick 2.6s infinite}.tt-flk2{animation-delay:.9s}' +
    '@keyframes ttglow{0%,100%{opacity:.4}50%{opacity:1}}.tt-glow{animation:ttglow 2.2s ease-in-out infinite}.tt-g2{animation-delay:-1.1s}' +
    '@keyframes ttsway{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}.tt-sw{animation:ttsway 1.8s ease-in-out infinite}.tt-sw2{animation-delay:-.9s}' +
    '@keyframes ttnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-46px);opacity:0}}.tt-note{animation:ttnote 3s linear infinite}.tt-n2{animation-delay:-1s}.tt-n3{animation-delay:-2s}' +
    '@keyframes ttlvl{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.tt-lv{transform-box:fill-box;transform-origin:50% 100%;animation:ttlvl .8s ease-in-out infinite}.tt-lv2{animation-delay:-.3s}.tt-lv3{animation-delay:-.55s}' +
    '@keyframes ttpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.tt-palm{transform-box:fill-box;transform-origin:50% 100%;animation:ttpalm 3.4s ease-in-out infinite}' +
    '@keyframes ttball{0%,100%{transform:translateY(0)}50%{transform:translateY(-28px)}}.tt-ball{animation:ttball 1s ease-in-out infinite}' +
    '@keyframes ttspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tt-sp{animation:ttspray 1.4s ease-out infinite}.tt-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h) => '<g class="tt-palm"><path d="M' + x + ' ' + y + 'q-3 -' + (h / 2) + ' 2 -' + h + '" stroke="#6a4a2a" stroke-width="5" fill="none"/>' +
    [[-26, -6], [-18, -18], [0, -24], [18, -18], [26, -6]].map(d => '<path d="M' + (x + 2) + ' ' + (y - h) + 'q' + (d[0] / 2) + ' ' + (d[1] - 6) + ' ' + d[0] + ' ' + (d[1] + 10) + '" stroke="#2f6a34" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "tt-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#d9482b", TEAL = "#4fb0c6", ACG = "#00843d", ACB = "#0072bc";

  /* 1. The AC Transit 57 pulling up on MacArthur Blvd at 86th Ave, Castlemont High's long low school buildings and palms behind, late afternoon */
  function ttstop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="114" width="32" height="24" rx="2" fill="#24384a"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="104" width="320" height="72" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 150h320v8h-320z" fill="' + ACG + '"/><path d="M40 158h320v5h-320z" fill="' + ACB + '"/>' +
      '<rect x="326" y="114" width="30" height="44" rx="3" fill="#24384a"/><rect x="322" y="106" width="36" height="8" rx="2" fill="#111"/><text x="340" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">57</text>' +
      '<circle cx="356" cy="168" r="3.5" fill="#fff6c2"/><circle cx="92" cy="178" r="12" fill="#111"/><circle cx="92" cy="178" r="5" fill="#777"/><circle cx="300" cy="178" r="12" fill="#111"/><circle cx="300" cy="178" r="5" fill="#777"/></g>';
    const school = '<rect x="20" y="58" width="360" height="46" fill="#d9c7a2"/><rect x="20" y="52" width="360" height="8" fill="#9c3a24"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (30 + i * 25) + '" y="66" width="16" height="22" fill="#5a6e7a"/>').join("") +
      '<rect x="150" y="38" width="100" height="22" fill="#d9c7a2"/><rect x="150" y="34" width="100" height="6" fill="#9c3a24"/><text x="200" y="54" text-anchor="middle" ' + font + ' font-size="12" fill="#3a2a1a" letter-spacing="2">CASTLEMONT</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt1)"/>' +
      '<path d="M0 60q70 -34 150 -18t140 -14t110 8v40H0z" fill="#7a8a6a"/>' + school +
      palm(14, 104, 70) + palm(382, 104, 78) +
      '<rect x="0" y="176" width="400" height="84" fill="#46474b"/><rect x="0" y="176" width="400" height="5" fill="#cfc8b4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 6) + '" y="222" width="30" height="4" fill="#f0d24a"/>').join("") +
      bus +
      '<rect x="16" y="120" width="4" height="58" fill="#7a7f86"/><rect x="2" y="104" width="34" height="22" rx="3" fill="#fff" stroke="' + ACG + '" stroke-width="2.5"/>' +
      '<text x="19" y="113" text-anchor="middle" ' + font + ' font-size="5" fill="' + ACG + '">AC TRANSIT</text><text x="19" y="123" text-anchor="middle" ' + font + ' font-size="9" fill="#111">57</text>' +
      sign(228, 8, 140, "MacArthur Blvd") + sign(262, 32, 72, "86th Av") + '<rect x="296" y="54" width="4" height="50" fill="#2a2a2a"/>',
      sky("tt1", "#7fb6e0", "#f6d6a6"));
  }

  /* 2. The Castlemont auditorium: the Castleers chorus on the risers in robes, the piano, notes floating up */
  function ttchoir() {
    const robe = (x, y, c, i) => '<g class="tt-sw' + (i % 2 ? " tt-sw2" : "") + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="#6a4632"/><path d="M' + (x - 10) + ' ' + (y + 30) + 'l3 -22h14l3 22z" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y + 8) + 'l3 12l3 -12" stroke="' + GOLD + '" stroke-width="2" fill="none"/></g>';
    let choir = "";
    for (let r = 0; r < 3; r++) for (let i = 0; i < 8 - r; i++) choir += robe(108 + r * 13 + i * 26, 80 + r * 38, r % 2 ? "#4a2a7a" : "#3a2266", i + r);
    const notes = [62, 334, 76, 318, 70].map((x, i) => '<text class="tt-note ' + ["", "tt-n2", "tt-n3"][i % 3] + '" x="' + x + '" y="' + (120 + (i % 2) * 30) + '" ' + font + ' font-size="16" fill="' + GOLD + '">&#9834;</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1c1016"/>' +
      '<path d="M0 0h400v24q-200 16 -400 0z" fill="#7a1c22"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 24q10 12 20 0" fill="#962430"/>').join("") +
      '<path d="M0 24h46v190H0zM354 24h46v190h-46z" fill="#8a1e28"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M' + (8 + i * 10) + ' 28v184M' + (362 + i * 10) + ' 28v184" stroke="#5e1218" stroke-width="3"/>').join("") +
      '<rect x="116" y="36" width="168" height="22" rx="3" fill="#2a2244" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="52" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '" letter-spacing="3">CASTLEERS</text>' +
      '<rect x="86" y="110" width="236" height="8" fill="#6a4a2a"/><rect x="96" y="148" width="216" height="8" fill="#5a3e22"/><rect x="106" y="186" width="196" height="10" fill="#4a3220"/>' +
      choir +
      '<rect x="0" y="196" width="400" height="64" fill="#5a3a22"/><rect x="0" y="196" width="400" height="5" fill="#8a5a32"/>' +
      '<path d="M20 196v-30h60l10 30z" fill="#0e0c0c"/><rect x="24" y="170" width="52" height="6" fill="#f4f0e6"/>' + Array.from({ length: 7 }, (_, i) => '<rect x="' + (26 + i * 7) + '" y="170" width="3" height="4" fill="#111"/>').join("") +
      notes,
      "");
  }

  /* 3. The House of Music studio in West Oakland: the guitar, the bass and the drum kit set up for the three of them, meters jumping, gold records on the wall */
  function ttstudio() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect class="tt-lv ' + ["", "tt-lv2", "tt-lv3"][i % 3] + '" x="' + (150 + i * 9) + '" y="40" width="6" height="26" fill="' + (i < 7 ? "#4ad66a" : i < 10 ? "#f5d03a" : "#ff5a4a") + '"/>').join("");
    const rec = (x, y) => '<rect x="' + (x - 22) + '" y="' + (y - 22) + '" width="44" height="44" fill="#2a2018" stroke="#8a6a3a" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="16" fill="' + GOLD + '"/><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + RED + '"/>';
    const guitar = (x, body) => '<rect x="' + (x - 2) + '" y="86" width="5" height="64" fill="#5a3a1a"/><rect x="' + (x - 4) + '" y="80" width="9" height="10" rx="2" fill="#2a1a0a"/>' +
      '<path d="M' + x + ' 146c-16 0 -22 9 -18 18c-7 7 -2 22 18 22c20 0 25 -15 18 -22c4 -9 -2 -18 -18 -18z" fill="' + body + '" stroke="#2a1008" stroke-width="2"/><circle cx="' + x + '" cy="166" r="5" fill="#111"/><path d="M' + (x - 14) + ' 204l14 -18l14 18" stroke="#666" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="#20160f"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="36" height="200" fill="#2a1e14"/>').join("") +
      rec(40, 50) + rec(96, 50) + rec(304, 50) + rec(360, 50) +
      '<rect x="138" y="28" width="124" height="46" rx="4" fill="#0e0e10" stroke="#555" stroke-width="2"/>' + meters +
      '<g class="tt-flk"><rect x="146" y="82" width="108" height="20" rx="10" fill="none" stroke="' + RED + '" stroke-width="2.5"/><text x="200" y="97" text-anchor="middle" ' + font + ' font-size="11" fill="#ff9a7a">HOUSE OF MUSIC</text></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a2a1c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46) + ' 200v60" stroke="#2a1e12" stroke-width="2"/>').join("") +
      guitar(70, RED) + guitar(120, "#e8b04a") +
      '<ellipse cx="290" cy="186" rx="40" ry="26" fill="#f4ecdc" stroke="#555" stroke-width="3"/><text x="290" y="192" text-anchor="middle" ' + font + ' font-size="14" fill="' + RED + '">3T</text>' +
      '<ellipse cx="240" cy="150" rx="18" ry="6" fill="#b89a3a"/><rect x="238" y="150" width="4" height="48" fill="#888"/><ellipse cx="346" cy="140" rx="22" ry="6" fill="#c8aa4a" class="tt-flk tt-flk2"/><rect x="344" y="140" width="4" height="58" fill="#888"/>' +
      '<rect x="244" y="160" width="26" height="22" rx="4" fill="' + TEAL + '" stroke="#235a66" stroke-width="2"/><rect x="314" y="158" width="28" height="24" rx="4" fill="' + TEAL + '" stroke="#235a66" stroke-width="2"/>',
      "");
  }

  /* 4. Youth UpRising on MacArthur, next to Castlemont, where D'wayne Wiggins worked with East Oakland kids: the bright mural wall, kids on the court out front */
  function ttyouth() {
    const kids = [150, 196, 242].map((x, i) => '<g class="tt-sw' + (i % 2 ? " tt-sw2" : "") + '"><circle cx="' + x + '" cy="186" r="7" fill="#1a1012"/><path d="M' + (x - 8) + ' 224l3 -30h10l3 30z" fill="' + [RED, TEAL, GOLD][i] + '"/></g>').join("");
    const mural = '<rect x="40" y="70" width="320" height="90" fill="#f0e6d0"/>' +
      '<path d="M40 160q60 -70 120 -30t110 -40t90 20v50z" fill="' + TEAL + '"/><path d="M40 160q50 -40 110 -10t120 -30t90 30v10z" fill="' + RED + '" opacity=".85"/>' +
      '<circle cx="300" cy="96" r="18" fill="' + GOLD + '"/>' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M' + (300 + Math.cos(a) * 22) + ' ' + (96 + Math.sin(a) * 22) + 'L' + (300 + Math.cos(a) * 30) + ' ' + (96 + Math.sin(a) * 30) + '" stroke="' + GOLD + '" stroke-width="3"/>'; }).join("") +
      '<text x="120" y="104" text-anchor="middle" ' + font + ' font-size="15" fill="#2a1a3a">YOUTH</text><text x="120" y="122" text-anchor="middle" ' + font + ' font-size="15" fill="#2a1a3a">UPRISING</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt4)"/>' +
      '<rect x="30" y="40" width="340" height="132" fill="#6a5a7a"/><rect x="30" y="34" width="340" height="8" fill="#3a2e48"/>' + mural +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (48 + i * 54) + '" y="46" width="40" height="18" fill="#9ed0e6" class="' + (i % 2 ? "tt-glow tt-g2" : "") + '"/>').join("") +
      '<rect x="0" y="172" width="400" height="88" fill="#8a7a6a"/><rect x="60" y="182" width="280" height="70" fill="#3a6a8a"/><path d="M200 182v70M60 217h280" stroke="#fff" stroke-width="2"/><circle cx="200" cy="217" r="14" fill="none" stroke="#fff" stroke-width="2"/>' +
      kids + '<circle class="tt-ball" cx="216" cy="190" r="5" fill="#e8742a"/>' +
      palm(14, 172, 80),
      sky("tt4", "#86c0ea", "#f2e2c0"));
  }

  /* 5. Foothill Blvd and 86th Ave out back of Castlemont: TONY! TONI! TONÉ! tagged on the wall, downtown Oakland behind with the Dellums Federal Building's twin towers and their glass arch lit up */
  function ttcorner() {
    const towers = '<g fill="#3a3550"><rect x="96" y="40" width="34" height="84"/><rect x="170" y="40" width="34" height="84"/></g>' +
      '<path d="M128 70q22 -26 44 0v8h-44z" fill="#8ab4d0" opacity=".85"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect class="tt-glow' + (i % 2 ? " tt-g2" : "") + '" x="' + (100 + (i % 3) * 10 + (i > 5 ? 74 : 0)) + '" y="' + (50 + Math.floor((i % 6) / 3) * 30) + '" width="5" height="5" fill="#ffd98a"/>').join("") +
      '<g fill="#2e2a44"><rect x="20" y="86" width="26" height="38"/><rect x="50" y="76" width="20" height="48"/><rect x="230" y="70" width="22" height="54"/><rect x="258" y="88" width="30" height="36"/><rect x="292" y="80" width="18" height="44"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tt5)"/>' + stars(12) + towers +
      '<rect x="0" y="122" width="400" height="12" fill="#2a3a4a"/>' +
      '<rect x="0" y="132" width="400" height="92" fill="#6a4a3a"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#5a3e30" stroke-width="1"/>').join("") +
      tag("TONY! TONI! TONÉ!", 12, 190, 34, GOLD, -5) + tag("SONS OF SOUL", 30, 216, 16, TEAL, -3) + tag("FEELS GOOD", 176, 214, 18, RED, -4) + tag("3T", 300, 214, 22, "#fff", -8) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 98, "Foothill Blvd") + sign(316, 124, 74, "86th Av") +
      '<g class="tt-sp"><circle cx="120" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tt-sp tt-sp2"><circle cx="126" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tt5", "#1c1838", "#e0805a"));
  }

  window.SCENES = { ttstop: ttstop, ttchoir: ttchoir, ttstudio: ttstudio, ttyouth: ttyouth, ttcorner: ttcorner };
})();
