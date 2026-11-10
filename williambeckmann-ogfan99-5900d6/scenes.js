/* williambeckmann scenes (Regions: HOUSTON + TEXAS / Genres: country; Del Rio, Texas, on the border). CSS classes prefixed wbdr- (the page's own anim-train is kept).
   Sources: Wikipedia "William Beckmann" (born Del Rio 1995, raised on his parents' cattle ranch, both sides of the border, grandparents from Chihuahua; Live from Cheatham Street 2023; Warner Music Nashville 2024);
   Wikipedia "Del Rio station" (Amtrak Sunset Limited + Texas Eagle; old Southern Pacific depot at 100 N Main St / 101 W Ogden St, five round-arched windows, Spanish red-tile hipped roof, "DEL RIO" panel; 29.3624N 100.9026W);
   HMDB / Texas Escapes "Val Verde County Courthouse" (400 block of Pecan St; limestone, octagonal corner turrets, silver dome added 1915); Del Rio-Ciudad Acuna International Bridge over the Rio Grande;
   YouTube "William Beckmann - The Road To Acuna (Official Documentary)"; Cheatham Street Warehouse, San Marcos (tin-roof honky-tonk).
   No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8c26a", TEAL = "#3fa7b5", RUST = "#c0553a", SAND = "#e8d4a8", STONE = "#e6dcc6";
  const css = '<style>' +
    '@keyframes wbdrglow{0%,100%{opacity:.4}50%{opacity:1}}.wbdr-glow{animation:wbdrglow 2.2s ease-in-out infinite}.wbdr-g2{animation-delay:-1.1s}' +
    '@keyframes wbdrnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(16px,-56px);opacity:0}}.wbdr-nt{animation:wbdrnote 3.2s ease-out infinite}.wbdr-nt2{animation-delay:-1.1s}.wbdr-nt3{animation-delay:-2.2s}' +
    '@keyframes wbdrcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.wbdr-cl{animation:wbdrcloud 14s ease-in-out infinite alternate}' +
    '@keyframes wbdrcar{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.wbdr-car{animation:wbdrcar 5s linear infinite}.wbdr-c2{animation-delay:-2.5s}' +
    '@keyframes wbdrcarb{0%{transform:translateX(480px)}100%{transform:translateX(-80px)}}.wbdr-carb{animation:wbdrcarb 6s linear infinite}' +
    '@keyframes wbdrspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.wbdr-mill{transform-box:fill-box;transform-origin:50% 50%;animation:wbdrspin 3s linear infinite}' +
    '@keyframes wbdrflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.wbdr-flag{transform-box:fill-box;transform-origin:0 50%;animation:wbdrflag 1.6s ease-in-out infinite}' +
    '@keyframes wbdrwave{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.wbdr-wave{animation:wbdrwave 3s linear infinite alternate}' +
    '@keyframes wbdrcow{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.wbdr-cow{animation:wbdrcow 2s ease-in-out infinite}.wbdr-cow2{animation-delay:-1s}' +
    '@keyframes wbdrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wbdr-sp{animation:wbdrspray 1.4s ease-out infinite}.wbdr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="wbdr-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const mesquite = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-2 -14 -10 -22M0 0q2 -12 10 -20M0 0v-16" stroke="#5a4430" stroke-width="3" fill="none"/><ellipse cx="-12" cy="-26" rx="14" ry="7" fill="#6a7a3a"/><ellipse cx="12" cy="-24" rx="14" ry="7" fill="#7a8a44"/><ellipse cx="0" cy="-32" rx="12" ry="6" fill="#6a7a3a"/></g>';
  const cactus = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#4a7a4a"><rect x="-4" y="-34" width="8" height="34" rx="4"/><rect x="-14" y="-24" width="6" height="14" rx="3"/><rect x="8" y="-28" width="6" height="12" rx="3"/><rect x="-12" y="-14" width="8" height="4"/><rect x="4" y="-18" width="8" height="4"/></g>';
  /* Val Verde County Courthouse: limestone, octagonal corner turrets, silver dome */
  const courthouse = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-60" y="-60" width="120" height="60" fill="' + STONE + '"/>' + [-50, -30, -10, 10, 30].map(wx => '<rect x="' + (wx + 4) + '" y="-50" width="10" height="16" fill="#3a3a48"/><rect x="' + (wx + 4) + '" y="-26" width="10" height="16" fill="#3a3a48"/>').join("") +
    [-66, 54].map(tx => '<rect x="' + tx + '" y="-74" width="12" height="74" fill="#d8cdb4"/><path d="M' + (tx - 1) + ' -74l7 -14 7 14z" fill="#9aa0a8"/>').join("") +
    '<rect x="-64" y="-64" width="128" height="5" fill="#cbbfa4"/>' +
    '<rect x="-22" y="-80" width="44" height="18" fill="#d8cdb4"/><path d="M-24 -80q24 -36 48 0z" fill="#c8ccd2" stroke="#9aa0a8" stroke-width="1.5"/><rect x="-2" y="-118" width="4" height="8" fill="#9aa0a8"/>' +
    '<rect x="-10" y="-16" width="20" height="16" fill="#5a4430"/></g>';

  /* ROOM 0: Amtrak at the old Southern Pacific depot on Main St, Del Rio: red-tile roof, five round arches, the silver train pulling in */
  function wbdrtrain() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbdr1)"/>' +
      '<g class="wbdr-cl"><ellipse cx="80" cy="28" rx="40" ry="7" fill="#fff" opacity=".55"/><ellipse cx="300" cy="20" rx="46" ry="7" fill="#fff" opacity=".45"/></g>' +
      mesquite(20, 140, 1) + mesquite(380, 140, 1.1) + cactus(360, 142, .8) +
      /* the depot */
      '<rect x="90" y="70" width="220" height="74" fill="#efe2c4"/><rect x="60" y="92" width="34" height="52" fill="#e8d8b4"/><rect x="306" y="92" width="34" height="52" fill="#e8d8b4"/>' +
      '<path d="M80 72l24 -26h192l24 26z" fill="#b8502e"/><path d="M52 94l12 -12h28v12zM308 94v-12h28l12 12z" fill="#b8502e"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (108 + i * 16) + ' 48l-6 22" stroke="#8a3a20" stroke-width="1"/>').join("") +
      '<rect x="86" y="70" width="228" height="6" fill="#d8c8a4"/>' + Array.from({ length: 28 }, (_, i) => '<rect x="' + (88 + i * 8) + '" y="76" width="4" height="3" fill="#c8b894"/>').join("") +
      '<rect x="168" y="80" width="64" height="12" fill="#f7efdc" stroke="#b8a884"/><text x="200" y="90" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4430">DEL RIO</text>' +
      [104, 144, 184, 224, 264].map(x => '<path d="M' + x + ' 140v-32q16 -16 32 0v32z" fill="#3a3a48" stroke="#f7efdc" stroke-width="2"/><path d="M' + (x + 14) + ' 94h4v6h-4z" fill="#f7efdc"/>').join("") +
      /* platform */
      '<rect x="0" y="144" width="400" height="14" fill="#c8c4bc"/><path d="M0 158h400" stroke="#f3d34a" stroke-width="3"/>' +
      /* station sign */
      '<rect x="16" y="64" width="64" height="40" rx="3" fill="#111"/><text x="48" y="79" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">DEL RIO</text>' +
      '<rect x="20" y="85" width="56" height="7" rx="2" fill="#c8102e"/><text x="48" y="91" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">SUNSET LIMITED</text>' +
      '<rect x="20" y="94" width="56" height="7" rx="2" fill="#0b4ea2"/><text x="48" y="100" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">TEXAS EAGLE</text>' +
      /* tracks */
      '<rect x="0" y="206" width="400" height="6" fill="#6a5a4a"/>' + Array.from({ length: 34 }, (_, i) => '<rect x="' + (i * 12) + '" y="204" width="6" height="12" fill="#5a4430"/>').join("") + '<path d="M0 206h400M0 212h400" stroke="#9aa" stroke-width="2"/>' +
      /* the silver double-decker train */
      '<g class="anim-train"><g transform="translate(40 158)">' +
      '<path d="M0 4q0 -8 12 -8h300v50H0z" fill="#d4d8de"/><rect x="0" y="22" width="312" height="4" fill="#c8102e"/><rect x="0" y="27" width="312" height="3" fill="#0b4ea2"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (20 + i * 22) + '" y="2" width="16" height="9" rx="2" fill="#2a3a4a"/><rect x="' + (20 + i * 22) + '" y="33" width="16" height="7" rx="2" fill="#2a3a4a"/>').join("") +
      '<rect x="-6" y="0" width="12" height="40" rx="5" fill="#9aa0a8"/><circle cx="0" cy="34" r="2.5" fill="#ffe9a0" class="wbdr-glow"/><circle cx="60" cy="48" r="5" fill="#333"/><circle cx="250" cy="48" r="5" fill="#333"/></g></g>',
      sky("wbdr1", "#6ab0e0", "#f7e0b0"));
  }

  /* ROOM 1: the family cattle ranch outside Del Rio: windmill turning, mesquite, cattle, a pickup on the caliche road */
  function wbdrranch() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbdr2)"/>' +
      '<circle cx="80" cy="66" r="24" fill="#ffd27a" class="wbdr-glow"/>' +
      '<path d="M0 150q80 -24 160 -8t240 -10v128H0z" fill="#b8a46a"/><path d="M0 170q120 -20 400 0v90H0z" fill="#a8945a"/>' +
      mesquite(30, 160, 1.2) + mesquite(150, 156, .9) + mesquite(372, 160, 1.3) + cactus(110, 196, .9) + cactus(330, 210, 1) +
      /* windmill */
      '<path d="M262 160l10 -90h4l10 90z" fill="none" stroke="#5a5e66" stroke-width="2.5"/><path d="M266 130h18M268 100h14" stroke="#5a5e66" stroke-width="1.5"/>' +
      '<g class="wbdr-mill">' + Array.from({ length: 12 }, (_, i) => '<path d="M274 70l' + (Math.cos(i * Math.PI / 6) * 22).toFixed(1) + ' ' + (Math.sin(i * Math.PI / 6) * 22).toFixed(1) + '" stroke="#8a8e94" stroke-width="3"/>').join("") + '<circle cx="274" cy="70" r="4" fill="#5a5e66"/></g>' +
      '<path d="M278 70h20l6 -6v12z" fill="#8a8e94"/><rect x="240" y="150" width="50" height="12" fill="#8a8e94" rx="2"/>' +
      /* cattle */
      [[170, 196, "#6a3a24", ""], [214, 206, "#2a2a2a", "wbdr-cow2"], [60, 214, "#8a5a34", ""]].map(c => '<g class="wbdr-cow ' + c[3] + '"><g transform="translate(' + c[0] + ' ' + c[1] + ')"><rect x="0" y="0" width="30" height="14" rx="6" fill="' + c[2] + '"/><rect x="26" y="-6" width="10" height="9" rx="3" fill="' + c[2] + '"/><path d="M28 -6l-3 -4M34 -6l3 -4" stroke="#e8dcc4" stroke-width="1.5"/>' +
        '<rect x="3" y="12" width="3" height="10" fill="' + c[2] + '"/><rect x="22" y="12" width="3" height="10" fill="' + c[2] + '"/><rect x="10" y="3" width="8" height="6" rx="3" fill="#fff" opacity=".6"/></g></g>').join("") +
      /* ranch gate */
      '<rect x="300" y="200" width="6" height="40" fill="#5a4430"/><rect x="382" y="200" width="6" height="40" fill="#5a4430"/><rect x="296" y="196" width="96" height="6" fill="#5a4430"/>' +
      '<path d="M306 210h76M306 222h76" stroke="#7a6a4a" stroke-width="2"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">THE RANCH, VAL VERDE COUNTY</text>',
      sky("wbdr2", "#f0905a", "#ffd9a0"));
  }

  /* ROOM 2: the International Bridge over the Rio Grande to Ciudad Acuna, both flags, cars both ways */
  function wbdrbridge() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbdr3)"/>' +
      '<g class="wbdr-cl"><ellipse cx="90" cy="30" rx="40" ry="7" fill="#fff" opacity=".55"/><ellipse cx="310" cy="24" rx="44" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 120q60 -12 120 -4t160 -6 120 4v30H0z" fill="#c8b48a"/>' + mesquite(30, 124, .9) + mesquite(360, 120, 1) +
      /* the river */
      '<rect x="0" y="170" width="400" height="90" fill="' + TEAL + '"/><g class="wbdr-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 46) + ' ' + (190 + (i % 3) * 18) + 'q10 -4 20 0" stroke="#bfe8ee" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<path d="M0 166h400v6H0z" fill="#8a7a5a"/>' +
      /* bridge deck and piers */
      '<rect x="0" y="130" width="400" height="12" fill="#c8c4bc"/><rect x="0" y="142" width="400" height="4" fill="#8a8e94"/>' +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 6) + '" y="146" width="12" height="40" fill="#b0aca4"/>').join("") +
      '<path d="M0 126h400" stroke="#8a8e94" stroke-width="2"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10) + ' 126v4" stroke="#8a8e94" stroke-width="1"/>').join("") +
      /* boundary marker mid-bridge */
      '<rect x="196" y="104" width="8" height="22" fill="#f7f3ea"/>' +
      /* US flag left */
      '<rect x="120" y="60" width="3" height="66" fill="#888"/><g class="wbdr-flag"><g transform="translate(123 62)">' + Array.from({ length: 7 }, (_, i) => '<rect x="0" y="' + (i * 4) + '" width="40" height="2" fill="#b22234"/>').join("") + '<rect x="0" y="2" width="40" height="2" fill="#fff"/><rect x="0" y="6" width="40" height="2" fill="#fff"/><rect x="0" y="10" width="40" height="2" fill="#fff"/><rect x="0" y="14" width="40" height="2" fill="#fff"/><rect x="0" y="18" width="40" height="2" fill="#fff"/><rect x="0" y="22" width="40" height="2" fill="#fff"/><rect x="0" y="0" width="16" height="14" fill="#3c3b6e"/></g></g>' +
      /* Mexico flag right */
      '<rect x="277" y="60" width="3" height="66" fill="#888"/><g class="wbdr-flag"><g transform="translate(280 62)"><rect x="0" y="0" width="14" height="26" fill="#006847"/><rect x="14" y="0" width="14" height="26" fill="#fff"/><rect x="28" y="0" width="14" height="26" fill="#ce1126"/><circle cx="21" cy="13" r="3" fill="#8a6a3a"/></g></g>' +
      '<g class="wbdr-car"><rect x="0" y="120" width="26" height="10" rx="3" fill="' + RUST + '"/><circle cx="6" cy="131" r="3" fill="#222"/><circle cx="20" cy="131" r="3" fill="#222"/></g>' +
      '<g class="wbdr-carb"><rect x="0" y="118" width="34" height="12" rx="3" fill="#e8e8ec"/><circle cx="8" cy="131" r="3" fill="#222"/><circle cx="26" cy="131" r="3" fill="#222"/></g>' +
      '<text x="70" y="100" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">DEL RIO</text><text x="330" y="100" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">CD. ACUNA</text>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">RIO GRANDE</text>',
      sky("wbdr3", "#5aa8e0", "#f3e0b4"));
  }

  /* ROOM 3: Cheatham Street Warehouse in San Marcos, the tin-roof honky-tonk where he cut his live record; neon, string lights */
  function wbdrcheatham() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbdr4)"/>' +
      Array.from({ length: 24 }, (_, i) => '<circle cx="' + (12 + i * 17) + '" cy="' + (12 + (i % 5) * 9) + '" r="1" fill="#fff" class="wbdr-glow ' + (i % 2 ? "wbdr-g2" : "") + '"/>').join("") +
      mesquite(30, 176, 1.3) + mesquite(372, 176, 1.2) +
      /* the warehouse: rusty corrugated tin */
      '<rect x="80" y="86" width="240" height="94" fill="#8a6a4a"/>' + Array.from({ length: 30 }, (_, i) => '<path d="M' + (82 + i * 8) + ' 86v94" stroke="#6a4e34" stroke-width="2"/>').join("") +
      '<path d="M70 90l130 -36 130 36z" fill="#9a9ea4"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (86 + i * 16) + ' 88l' + (i < 8 ? 6 : -6) + ' -10" stroke="#7a7e84" stroke-width="1"/>').join("") +
      '<rect x="120" y="96" width="160" height="22" rx="3" fill="#1a1a22" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="112" text-anchor="middle" ' + font + ' font-size="11" fill="#ff8a5a" class="wbdr-glow">CHEATHAM STREET</text>' +
      '<rect x="170" y="130" width="60" height="50" fill="#2a1a12"/><rect x="176" y="136" width="48" height="44" fill="#ffcf7a" opacity=".55" class="wbdr-glow wbdr-g2"/>' +
      '<rect x="100" y="132" width="40" height="22" fill="#ffcf7a" opacity=".5"/><rect x="260" y="132" width="40" height="22" fill="#ffcf7a" opacity=".5"/>' +
      /* string lights */
      '<path d="M60 70q70 26 140 0t140 0" stroke="#333" stroke-width="1" fill="none"/>' + Array.from({ length: 15 }, (_, i) => { const x = 66 + i * 19; const t = (x - 60) / 140; const y = x < 200 ? 70 + 26 * 2 * t * (1 - t) * 2 / 2 : 70 + 26 * 2 * ((x - 200) / 140) * (1 - (x - 200) / 140); return '<circle cx="' + x + '" cy="' + (y + 3).toFixed(1) + '" r="2.4" fill="#ffe9a0" class="wbdr-glow ' + (i % 2 ? "wbdr-g2" : "") + '"/>'; }).join("") +
      '<path d="M0 180h400v80H0z" fill="#6a5a44"/>' +
      note(140, 160, GOLD) + note(258, 150, "#fff", "wbdr-nt2") + note(300, 170, GOLD, "wbdr-nt3") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">LIVE FROM SAN MARCOS, TEXAS</text>',
      sky("wbdr4", "#0e1430", "#3a2a4a"));
  }

  /* ROOM 4: his corner in Del Rio, N Main St and W Ogden St by the old depot, adobe wall with his name, the courthouse's silver dome behind */
  function wbdrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wbdr5)"/>' +
      courthouse(300, 172, 1) + mesquite(220, 172, 1) + cactus(392, 176, .8) +
      '<path d="M0 172h400v88H0z" fill="#9a968e"/><path d="M0 204h400" stroke="#f3d34a" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* adobe wall */
      '<rect x="0" y="96" width="156" height="124" fill="' + SAND + '"/><path d="M0 96h156" stroke="#c8b48a" stroke-width="4"/>' + [[20, 130], [70, 200], [120, 150], [40, 210]].map(p => '<path d="M' + p[0] + ' ' + p[1] + 'q8 -4 16 2" stroke="#c8b48a" stroke-width="1.5" fill="none"/>').join("") +
      tag("WILLIAM", 10, 146, 26, TEAL, -7) + tag("BECKMANN", 6, 190, 24, RUST, -5) +
      '<g class="wbdr-sp"><circle cx="138" cy="150" r="3" fill="' + TEAL + '"/></g><g class="wbdr-sp wbdr-sp2"><circle cx="144" cy="160" r="2.5" fill="' + RUST + '"/></g>' +
      '<rect x="178" y="60" width="5" height="160" fill="#556"/>' + sign(150, 66, 96, "N Main St") + sign(160, 92, 100, "W Ogden St") +
      '<text x="290" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">DEL RIO, TEXAS</text>',
      sky("wbdr5", "#f08a5a", "#6ab0e0"));
  }

  window.SCENES = { wbdrtrain, wbdrranch, wbdrbridge, wbdrcheatham, wbdrcorner };
})();
