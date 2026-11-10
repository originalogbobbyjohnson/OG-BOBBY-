/* chrisstapleton scenes (Regions: More of the South / Genres: country; Staffordsville, Johnson County KY). CSS classes prefixed cst- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cstglow{0%,100%{opacity:.45}50%{opacity:1}}.cst-glow{animation:cstglow 2.4s ease-in-out infinite}.cst-g2{animation-delay:-1.2s}' +
    '@keyframes cstnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(20px,-60px);opacity:0}}.cst-nt{animation:cstnote 3.2s ease-out infinite}.cst-nt2{animation-delay:-1.1s}.cst-nt3{animation-delay:-2.2s}' +
    '@keyframes cstsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.cst-sw{transform-box:fill-box;transform-origin:50% 100%;animation:cstsway 3.2s ease-in-out infinite}' +
    '@keyframes cstcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.cst-cl{animation:cstcloud 14s ease-in-out infinite alternate}' +
    '@keyframes cstroll{0%{transform:translateX(0)}100%{transform:translateX(-200px)}}.cst-roll{animation:cstroll 7s linear infinite}' +
    '@keyframes cstflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.cst-flag{transform-box:fill-box;transform-origin:0% 50%;animation:cstflag 1.8s ease-in-out infinite}' +
    '@keyframes cstripple{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.cst-rip{animation:cstripple 3s linear infinite}' +
    '@keyframes cstboat{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,2px)}}.cst-boat{animation:cstboat 8s ease-in-out infinite}' +
    '@keyframes cstspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cst-sp{animation:cstspray 1.4s ease-out infinite}.cst-sp2{animation-delay:.45s}' +
    '@keyframes csttwk{0%,100%{opacity:.2}50%{opacity:1}}.cst-tw{animation:csttwk 1.8s ease-in-out infinite}.cst-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="cst-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const pine = (x, base, h, c) => '<g class="cst-sw"><rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3322"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.32) + ' ' + (h * 0.55) + 'h-' + (h * 0.14) + 'l' + (h * 0.2) + ' ' + (h * 0.37) + 'h-' + (h * 0.76) + 'l' + (h * 0.2) + ' -' + (h * 0.37) + 'h-' + (h * 0.14) + 'z" fill="' + (c || "#2c5230") + '"/></g>';
  const ridges = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -40 100 -18t110 -26t100 18t90 -20v' + (H - y + 40) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 20) + 'q60 -30 130 -8t140 -18t130 14v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".7" opacity=".6"/>'; return s; };
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="17" fill="#111">' + n + '</text>';
  const AMBER = "#e8a33d", RUST = "#c0492f", DENIM = "#6fa0c8", CREAM = "#f4ead6", GOLD = "#f2c14e";

  /* 1. US 23, the Country Music Highway: the brown byway sign with his name at the Johnson County line, a pickup rolling north, Appalachian ridges behind */
  function cstsign() {
    let trees = "";
    for (let i = 0; i < 10; i++) trees += pine(10 + i * 43, 172, 30 + (i * 7) % 14, i % 2 ? "#2c5230" : "#3a6438");
    return svg(
      '<rect width="400" height="260" fill="url(#cst1)"/>' +
      '<g class="cst-cl"><ellipse cx="70" cy="34" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="42" ry="10" fill="#fff" opacity=".5"/></g>' +
      ridges(118, "#5d7a8c", "#4a6b4a") + trees +
      '<rect x="0" y="172" width="400" height="88" fill="#46494e"/><rect x="0" y="170" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="' + GOLD + '" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* brown scenic-byway sign on two posts */
      '<rect x="176" y="100" width="6" height="72" fill="#9aa0a6"/><rect x="334" y="100" width="6" height="72" fill="#9aa0a6"/>' +
      '<rect x="148" y="14" width="220" height="92" rx="6" fill="#5a3a22" stroke="#f4ead6" stroke-width="3"/>' +
      '<text x="258" y="34" text-anchor="middle" ' + font + ' font-size="11" fill="#f4ead6" letter-spacing="1.5">COUNTRY MUSIC HIGHWAY</text>' +
      '<path d="M162 40h192" stroke="#f4ead6" stroke-width="1" opacity=".6"/>' +
      '<text x="258" y="64" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Chris Stapleton</text>' +
      '<text x="258" y="86" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">JOHNSON COUNTY</text>' +
      note(330, 70, GOLD, "") + note(170, 76, GOLD, "cst-nt2") +
      usShield(70, 86, "23") + '<rect x="66" y="134" width="48" height="14" fill="#fff" stroke="#111"/><text x="90" y="145" text-anchor="middle" ' + font + ' font-size="10" fill="#111">NORTH</text><rect x="87" y="148" width="5" height="24" fill="#9aa0a6"/>' +
      /* pickup rolling in */
      '<g class="anim-train"><g transform="translate(210 178)"><rect x="0" y="12" width="112" height="24" rx="5" fill="' + RUST + '"/><path d="M8 12l12 -16h34l10 16z" fill="' + RUST + '"/><path d="M22 10l8 -11h12v11z" fill="#bfe6ff"/><path d="M46 10v-11h6l7 11z" fill="#bfe6ff"/><rect x="64" y="6" width="48" height="8" fill="#8e3320"/>' +
      '<rect x="70" y="-2" width="30" height="8" rx="2" fill="#6b4a2a"/><circle cx="24" cy="38" r="9" fill="#222"/><circle cx="24" cy="38" r="4" fill="#bbb"/><circle cx="92" cy="38" r="9" fill="#222"/><circle cx="92" cy="38" r="4" fill="#bbb"/><rect x="-2" y="18" width="6" height="5" fill="#fff6c0"/></g></g>',
      sky("cst1", "#4f93cf", "#d6ecf7"));
  }

  /* 2. Johnson Central High in Paintsville: the red-brick school, the Golden Eagles banner flapping, Friday-night lights over the field */
  function cstschool() {
    let wins = "";
    for (let r = 0; r < 2; r++) for (let i = 0; i < 8; i++) if (!(r === 1 && (i === 3 || i === 4))) wins += '<rect x="' + (62 + i * 36) + '" y="' + (86 + r * 34) + '" width="20" height="20" fill="#2a3a4a" stroke="#efe6d2" stroke-width="1.5"' + ((i + r) % 3 === 0 ? ' class="cst-glow"' : '') + '/>';
    let lights = "";
    [24, 376].forEach(x => { lights += '<rect x="' + (x - 2) + '" y="30" width="4" height="140" fill="#888"/><rect x="' + (x - 16) + '" y="20" width="32" height="14" fill="#555"/>'; for (let i = 0; i < 3; i++) lights += '<circle cx="' + (x - 10 + i * 10) + '" cy="27" r="3.5" fill="#fff8d0" class="cst-glow' + (i % 2 ? " cst-g2" : "") + '"/>'; });
    const eagle = (cx, cy) => '<path d="M' + cx + ' ' + cy + 'q-22 -16 -34 -6q14 0 18 6q-10 0 -14 6q12 -2 18 2q-4 4 -2 10l14 -8l14 8q2 -6 -2 -10q6 -4 18 -2q-4 -6 -14 -6q4 -6 18 -6q-12 -10 -34 6z" fill="' + GOLD + '" stroke="#5a3a10" stroke-width="1.2"/><circle cx="' + cx + '" cy="' + (cy - 4) + '" r="4" fill="#fff"/><path d="M' + (cx + 3) + ' ' + (cy - 4) + 'l5 2l-5 1z" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cst2)"/>' +
      star(60, 24, 2, "#fff", "cst-tw") + star(200, 14, 2.2, "#fff", "cst-tw cst-tw2") + star(330, 30, 2, "#fff", "cst-tw") +
      ridges(90, "#26304a", "#1e2a3a") + lights +
      bricks(48, 70, 304, 110, "#a2442f", "#6e2a1c") + '<rect x="42" y="64" width="316" height="8" fill="#e4dcc6"/>' +
      '<rect x="170" y="44" width="60" height="26" fill="#a2442f"/><rect x="166" y="40" width="68" height="6" fill="#e4dcc6"/>' + wins +
      '<rect x="176" y="126" width="48" height="54" fill="#3a2016" stroke="#e4dcc6" stroke-width="2"/><path d="M200 126v54" stroke="#e4dcc6" stroke-width="1.5"/>' +
      '<rect x="120" y="50" width="2" height="24" fill="#ccc"/>' +
      '<g class="cst-flag"><rect x="122" y="50" width="34" height="18" fill="#141414"/><path d="M122 59h34" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      /* banner across the front */
      '<g class="cst-flag"><rect x="246" y="130" width="96" height="40" rx="3" fill="#141414" stroke="' + GOLD + '" stroke-width="2"/>' + eagle(294, 152) + '</g>' +
      '<text x="200" y="60" text-anchor="middle" ' + font + ' font-size="0" fill="#fff"></text>' +
      '<rect x="58" y="134" width="104" height="30" rx="3" fill="#141414" stroke="' + GOLD + '" stroke-width="2"/><text x="110" y="148" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">JOHNSON CENTRAL</text><text x="110" y="160" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GOLDEN EAGLES</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2f6a34"/><path d="M0 200h400M0 226h400M0 252h400" stroke="#fff" stroke-width="2" opacity=".7"/>' +
      '<path d="M40 180v-30M40 150h-14M40 150h14M26 150v-16M54 150v-16" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      '<g class="cst-roll"><ellipse cx="330" cy="214" rx="9" ry="5.5" fill="#7a3d1a" transform="rotate(-20 330 214)"/><path d="M325 214h10" stroke="#fff" stroke-width="1"/></g>',
      sky("cst2", "#0e1630", "#3a3a5a"));
  }

  /* 3. The coal camp at Van Lear, up the road: the old tipple, loaded coal cars rolling under it, the mine portal in the hillside */
  function cstcoal() {
    let cars = "";
    for (let i = 0; i < 6; i++) cars += '<g transform="translate(' + (i * 70) + ' 0)"><path d="M10 178h56l-6 26h-44z" fill="#3a3a3e" stroke="#1a1a1a" stroke-width="1.5"/><path d="M12 178q14 -12 26 -4q12 -10 26 4z" fill="#111"/><circle cx="22" cy="206" r="5" fill="#222"/><circle cx="54" cy="206" r="5" fill="#222"/></g>';
    let trees = "";
    for (let i = 0; i < 8; i++) trees += pine(240 + i * 22, 140, 22 + (i * 5) % 10, "#2f4f2c");
    return svg(
      '<rect width="400" height="260" fill="url(#cst3)"/>' +
      '<g class="cst-cl"><ellipse cx="90" cy="30" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M200 140q40 -90 110 -96t90 40v56z" fill="#4c6a40"/>' + trees +
      '<path d="M0 150q60 -60 140 -50t100 50z" fill="#566e48"/>' +
      /* mine portal in the hill */
      '<path d="M300 140v-28q16 -16 32 0v28z" fill="#111" stroke="#8a6a44" stroke-width="5"/><text x="316" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="' + CREAM + '">No. 5</text>' +
      /* wooden tipple */
      '<rect x="40" y="70" width="150" height="54" fill="#6b4a2e" stroke="#3a2614" stroke-width="2"/><path d="M36 70l20 -18h110l28 18z" fill="#4a3a30"/>' +
      '<rect x="60" y="84" width="16" height="14" fill="#2a2a2a"/><rect x="96" y="84" width="16" height="14" fill="#2a2a2a"/><rect x="132" y="84" width="16" height="14" fill="#2a2a2a"/>' +
      '<path d="M50 124v52M90 124v52M140 124v52M180 124v52M50 150l40 26M90 150l-40 26M140 150l40 26M180 150l-40 26" stroke="#3a2614" stroke-width="4"/>' +
      '<path d="M190 96l100 34" stroke="#5a3d24" stroke-width="10"/><path d="M190 90l100 34" stroke="#3a2614" stroke-width="2"/>' +
      '<rect x="80" y="40" width="10" height="16" fill="#555"/><g class="cst-nt cst-nt2"><circle cx="85" cy="36" r="6" fill="#ccc" opacity=".5"/></g>' +
      '<text x="115" y="118" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="2">VAN LEAR</text>' +
      '<rect x="0" y="208" width="400" height="52" fill="#3c3a36"/><path d="M0 212h400M0 222h400" stroke="#8a8a8a" stroke-width="2"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 4) + '" y="210" width="6" height="14" fill="#5a3d24"/>').join("") +
      '<g class="cst-roll">' + cars + '</g>',
      sky("cst3", "#9cc4de", "#efe2c8"));
  }

  /* 4. The US 23 Country Music Highway Museum in Paintsville: the hall of the region's stars, a big acoustic guitar on the lawn, notes drifting */
  function cstmuseum() {
    const guitar = '<g transform="translate(300 120) rotate(-12)"><rect x="-4" y="-80" width="8" height="70" fill="#5a3a1a"/><rect x="-7" y="-96" width="14" height="18" rx="3" fill="#3a2410"/>' +
      '<path d="M0 -14q-30 0 -28 26q2 14 -6 26q-6 26 34 28q40 -2 34 -28q-8 -12 -6 -26q2 -26 -28 -26z" fill="' + AMBER + '" stroke="#5a3a10" stroke-width="2"/><circle cx="0" cy="26" r="9" fill="#2a1a0a"/><rect x="-10" y="44" width="20" height="5" fill="#3a2410"/>' +
      '<path d="M-2 -94v140M2 -94v140" stroke="#eee" stroke-width=".6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cst4)"/>' +
      '<g class="cst-cl"><ellipse cx="300" cy="30" rx="40" ry="9" fill="#fff" opacity=".6"/></g>' +
      ridges(110, "#7a93a6", "#5d7f58") +
      /* museum building */
      '<rect x="30" y="90" width="210" height="100" fill="' + CREAM + '" stroke="#8a7a5a" stroke-width="2"/><path d="M22 92l113 -36l113 36z" fill="#6b3a2a"/>' +
      '<rect x="44" y="104" width="182" height="22" fill="#5a3a22"/><text x="135" y="113" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '" letter-spacing="1">US 23 COUNTRY MUSIC</text><text x="135" y="123" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '" letter-spacing="1">HIGHWAY MUSEUM</text>' +
      '<rect x="56" y="136" width="30" height="34" fill="#2a3a4a" class="cst-glow"/><rect x="184" y="136" width="30" height="34" fill="#2a3a4a" class="cst-glow cst-g2"/><rect x="116" y="136" width="38" height="54" fill="#4a2a1a"/><path d="M135 136v54" stroke="' + CREAM + '" stroke-width="1.5"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5e8a46"/><path d="M110 260l20 -70h10l20 70z" fill="#c8c0aa"/>' +
      guitar + note(250, 90, GOLD, "") + note(350, 80, "#fff", "cst-nt2") + note(280, 60, GOLD, "cst-nt3") +
      star(70, 202, 6, GOLD, "cst-tw") + star(200, 210, 6, GOLD, "cst-tw cst-tw2"),
      sky("cst4", "#5aa0d8", "#dceef8"));
  }

  /* 5. His corner in Staffordsville: KY 40 and KY 172, a block wall tagged STAPLETON, Paintsville Lake and the Johnson County hills behind */
  function cstcorner() {
    let trees = "";
    for (let i = 0; i < 12; i++) trees += pine(8 + i * 35, 128, 22 + (i * 9) % 12, i % 2 ? "#1f3a26" : "#284a2e");
    return svg(
      '<rect width="400" height="260" fill="url(#cst5)"/>' +
      star(40, 26, 2.2, "#fff", "cst-tw") + star(160, 16, 2, "#fff", "cst-tw cst-tw2") + star(300, 30, 2.4, "#fff", "cst-tw") +
      '<circle cx="330" cy="40" r="12" fill="#fff4d0" opacity=".9"/>' +
      '<path d="M0 120q50 -50 110 -36t110 -30t110 26t70 -6v60h-400z" fill="#2c3a52"/>' + trees +
      /* the lake */
      '<rect x="0" y="128" width="400" height="34" fill="#3b5f86"/>' +
      '<g class="cst-rip"><path d="M0 138h30M50 146h40M120 136h30M180 150h50M260 140h30M320 148h40M380 136h40" stroke="#9cc4e4" stroke-width="1.5" opacity=".6"/></g>' +
      '<g class="cst-boat"><path d="M60 140h28l-4 6h-20z" fill="#e8e0d0"/><rect x="72" y="132" width="2" height="8" fill="#e8e0d0"/></g>' +
      /* block wall with the tags */
      '<rect x="0" y="162" width="400" height="60" fill="#8c8478"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (172 + i * 10) + 'h400" stroke="#6a6258" stroke-width="1"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + ((i % 2) * 10)) + ' 162v60" stroke="#6a6258" stroke-width=".7" opacity=".6"/>').join("") +
      '<rect x="0" y="158" width="400" height="5" fill="#d8d0c0"/>' +
      tag("STAPLETON", 14, 206, 32, AMBER, -5) + tag("TRAVELLER", 214, 196, 18, DENIM, -4) + tag("KY", 330, 212, 20, CREAM, -3) +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="362" y="70" width="6" height="152" fill="#2f2f2f"/>' + sign(316, 70, 80, "KY 40") + sign(312, 96, 86, "KY 172") +
      '<g class="cst-sp"><circle cx="150" cy="186" r="3" fill="' + AMBER + '" opacity=".7"/></g><g class="cst-sp cst-sp2"><circle cx="156" cy="180" r="2" fill="' + AMBER + '" opacity=".6"/></g>',
      sky("cst5", "#0f1838", "#c8704a"));
  }

  window.SCENES = { cstsign: cstsign, cstschool: cstschool, cstcoal: cstcoal, cstmuseum: cstmuseum, cstcorner: cstcorner };
})();
