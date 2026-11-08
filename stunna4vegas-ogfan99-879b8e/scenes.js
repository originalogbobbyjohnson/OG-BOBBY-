/* stunna4vegas scenes (Regions tab: The Carolinas; Salisbury, NC). CSS classes prefixed sv- (the page's own anim-train slides the bus in).
   1 Salisbury Transit bus pulling into the Depot Street transfer site, the 1908 Mission Revival Salisbury Station behind.
   2 Livingstone College in the West End: red-brick hall, blue and black banners, students crossing the quad.
   3 Bell Tower Green downtown: the old brick bell tower over the lawn, string lights and the splash fountain.
   4 The N.C. Transportation Museum roundhouse in Spencer: brick stalls, the turntable turning a locomotive.
   5 W Innes St and S Main St on the Square: green signs, STUNNA 4 VEGAS tagged, the Plaza building behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#ffd23f", RED = "#c8102e", ICE = "#38d1e0", INK = "#120a10";
  const css = '<style>' +
    '@keyframes svcar{from{transform:translateX(-140px)}to{transform:translateX(470px)}}.sv-car{animation:svcar 7s linear infinite}.sv-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes svwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.sv-walk{animation:svwalk 16s linear infinite}.sv-walk2{animation-duration:20s;animation-delay:-8s}.sv-walk3{animation-duration:18s;animation-delay:-13s}' +
    '@keyframes svflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.sv-flag{transform-box:fill-box;transform-origin:0 50%;animation:svflag 1.6s ease-in-out infinite}.sv-flag2{animation-delay:-.8s}' +
    '@keyframes svbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.sv-bell{transform-box:fill-box;transform-origin:50% 0;animation:svbell 2s ease-in-out infinite}' +
    '@keyframes svglow{0%,100%{opacity:.35}50%{opacity:1}}.sv-glow{animation:svglow 1.4s ease-in-out infinite}.sv-glow2{animation-delay:-.7s}' +
    '@keyframes svjet{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1.1)}}.sv-jet{transform-box:fill-box;transform-origin:50% 100%;animation:svjet 1.2s ease-in-out infinite}.sv-jet2{animation-delay:-.6s}' +
    '@keyframes svspin{from{transform:rotate(-14deg)}to{transform:rotate(14deg)}}.sv-spin{transform-box:view-box;transform-origin:200px 206px;animation:svspin 6s ease-in-out infinite alternate}' +
    '@keyframes svsmoke{0%{transform:translateY(0) scale(.6);opacity:.8}100%{transform:translateY(-40px) scale(1.4);opacity:0}}.sv-smoke{transform-box:fill-box;transform-origin:50% 50%;animation:svsmoke 2.4s ease-out infinite}.sv-smoke2{animation-delay:-1.2s}' +
    '@keyframes svspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.sv-sp{animation:svspray 1.4s ease-out infinite}.sv-sp2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="20" rx="3" fill="#000" opacity=".6"/><text x="' + (x + w / 2) + '" y="246" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, n, col) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + col + '"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + n + '</text>';
  const tree = (x, base, s, col) => '<g><rect x="' + (x - 2 * s) + '" y="' + (base - 14 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3526"/><circle cx="' + x + '" cy="' + (base - 22 * s) + '" r="' + (12 * s) + '" fill="' + (col || "#2f6a3a") + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (base - 16 * s) + '" r="' + (8 * s) + '" fill="' + (col || "#2f6a3a") + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (base - 16 * s) + '" r="' + (8 * s) + '" fill="' + (col || "#2f6a3a") + '"/></g>';
  const person = (x, base, shirt) => '<g><circle cx="' + x + '" cy="' + (base - 22) + '" r="3.6" fill="#3b2a22"/><rect x="' + (x - 3.5) + '" y="' + (base - 18) + '" width="7" height="10" rx="2" fill="' + shirt + '"/><rect x="' + (x - 3) + '" y="' + (base - 8) + '" width="2.4" height="8" fill="#1d1d26"/><rect x="' + (x + .6) + '" y="' + (base - 8) + '" width="2.4" height="8" fill="#1d1d26"/></g>';

  /* 1. Salisbury Transit at the Depot Street transfer site, Salisbury Station behind */
  function svstation() {
    const STUC = "#e2c78f", TILE = "#b5482c", TRIM = "#f3e6c4";
    const arch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0V' + (y + h) + 'z" fill="#3a2a22" stroke="' + TRIM + '" stroke-width="2"/>';
    /* Mission parapet: curved gable */
    const gable = (x, y, w) => '<path d="M' + x + ' ' + (y + 30) + 'V' + (y + 14) + 'q' + (w * .18) + ' 0 ' + (w * .25) + ' -10q' + (w * .25) + ' -10 ' + (w * .5) + ' 0q' + (w * .07) + ' 10 ' + (w * .25) + ' 10V' + (y + 30) + 'z" fill="' + STUC + '" stroke="#b89a5e" stroke-width="2"/>';
    const tower = (x) => '<rect x="' + x + '" y="40" width="34" height="76" fill="' + STUC + '" stroke="#b89a5e" stroke-width="2"/><path d="M' + (x - 4) + ' 42l21 -18l21 18z" fill="' + TILE + '"/>' + arch(x + 9, 54, 16, 26) + '<rect x="' + (x - 2) + '" y="80" width="38" height="4" fill="' + TRIM + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv1)"/>' +
      '<g class="sv-glow" opacity=".7"><circle cx="330" cy="34" r="2" fill="#fff"/><circle cx="60" cy="24" r="1.5" fill="#fff"/></g>' +
      /* station */
      '<rect x="70" y="72" width="260" height="70" fill="' + STUC + '" stroke="#b89a5e" stroke-width="2"/>' +
      '<path d="M62 76h276l-12 -16H74z" fill="' + TILE + '"/>' +
      gable(150, 44, 100) + '<circle cx="200" cy="58" r="6" fill="' + TRIM + '" stroke="#b89a5e" stroke-width="1.5"/>' +
      tower(56) + tower(310) +
      arch(92, 92, 22, 46) + arch(126, 92, 22, 46) + arch(160, 92, 22, 46) + arch(218, 92, 22, 46) + arch(252, 92, 22, 46) + arch(286, 92, 22, 46) +
      '<rect x="186" y="98" width="28" height="44" fill="#2b1e18" stroke="' + TRIM + '" stroke-width="2"/>' +
      '<g class="sv-glow2">' + [103, 137, 171, 229, 263, 297].map(x => '<rect x="' + (x - 7) + '" y="108" width="14" height="20" fill="#ffcf7a" opacity=".55"/>').join("") + '</g>' +
      /* canopy + platform */
      '<rect x="0" y="142" width="400" height="8" fill="#6d5a4a"/>' +
      '<rect x="0" y="150" width="400" height="80" fill="#4b4a50"/><rect x="0" y="196" width="400" height="3" fill="#f2d14a" opacity=".8"/>' +
      /* transfer site shelter */
      '<rect x="14" y="152" width="74" height="6" fill="#2b2f3a"/><rect x="18" y="158" width="4" height="34" fill="#2b2f3a"/><rect x="80" y="158" width="4" height="34" fill="#2b2f3a"/>' +
      /* black station sign with route bullets */
      '<rect x="116" y="156" width="210" height="34" rx="3" fill="#111"/><text x="126" y="171" ' + font + ' font-size="11" fill="#fff">SALISBURY TRANSIT</text><text x="126" y="184" ' + font + ' font-size="9" fill="#cfcfcf">DEPOT ST TRANSFER SITE</text>' +
      bullet(268, 173, "1", "#2e9e4f") + bullet(290, 173, "2", "#d6322f") + bullet(312, 173, "3", "#2d6cc0") +
      /* the bus pulling in */
      '<g class="anim-train"><rect x="40" y="198" width="190" height="34" rx="6" fill="#f4f4f0" stroke="#2b2f3a" stroke-width="2"/>' +
      '<rect x="40" y="220" width="190" height="6" fill="#2e7d4a"/><rect x="40" y="214" width="190" height="4" fill="#c8102e"/>' +
      [52, 82, 112, 142, 172].map(x => '<rect x="' + x + '" y="203" width="24" height="10" rx="1.5" fill="#24303c"/>').join("") +
      '<rect x="204" y="202" width="22" height="16" rx="2" fill="#24303c"/><rect x="198" y="202" width="5" height="24" fill="#3a4250"/>' +
      '<rect x="206" y="199" width="20" height="5" fill="#111"/><text x="216" y="203.5" text-anchor="middle" ' + font + ' font-size="4.5" fill="' + GOLD + '">2 RED</text>' +
      '<circle cx="74" cy="233" r="7" fill="#1b1b1f"/><circle cx="196" cy="233" r="7" fill="#1b1b1f"/><circle cx="74" cy="233" r="3" fill="#777"/><circle cx="196" cy="233" r="3" fill="#777"/>' +
      '<circle cx="228" cy="222" r="2.5" fill="#ffe7a0"/></g>' +
      '<rect x="0" y="238" width="400" height="22" fill="#35343a"/>' +
      label(236, 156, "SALISBURY STATION · 1908"),
      sky("sv1", "#141a3a", "#d98a5a"));
  }

  /* 2. Livingstone College, West End */
  function svcollege() {
    const BRICK = "#9a3b2c", STONE = "#e6dccb", BLUE = "#6fa8dc";
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="12" height="18" fill="#2b2a3a" stroke="' + STONE + '" stroke-width="2"/><rect x="' + x + '" y="' + (y + 8) + '" width="12" height="2" fill="' + STONE + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv2)"/>' +
      tree(24, 150, 1.2) + tree(378, 150, 1.2) +
      /* main hall */
      '<rect x="60" y="66" width="280" height="96" fill="' + BRICK + '"/>' +
      '<path d="M52 70h296l-20 -22H72z" fill="#4b3a36"/>' +
      /* central pavilion with pediment */
      '<rect x="160" y="40" width="80" height="122" fill="#a8432f"/><path d="M152 44h96l-48 -26z" fill="' + STONE + '"/><path d="M168 42h64l-32 -16z" fill="#a8432f"/>' +
      '<circle cx="200" cy="58" r="10" fill="' + STONE + '"/><circle cx="200" cy="58" r="7" fill="#f7f3ea"/><path d="M200 58v-5M200 58h4" stroke="#333" stroke-width="1.5"/>' +
      [172, 188, 204, 220].map(x => '<rect x="' + x + '" y="96" width="8" height="66" fill="' + STONE + '"/>').join("") +
      '<rect x="166" y="92" width="68" height="6" fill="' + STONE + '"/>' +
      [76, 100, 124, 262, 286, 310].map(x => win(x, 82) + win(x, 122)).join("") +
      '<rect x="60" y="112" width="100" height="4" fill="' + STONE + '"/><rect x="240" y="112" width="100" height="4" fill="' + STONE + '"/>' +
      /* banners: Livingstone blue + black */
      '<g class="sv-flag"><rect x="90" y="150" width="2" height="0" fill="#000"/></g>' +
      '<rect x="146" y="64" width="2" height="40" fill="#333"/><g class="sv-flag"><rect x="148" y="66" width="12" height="30" fill="' + BLUE + '"/><rect x="148" y="86" width="12" height="10" fill="#111"/></g>' +
      '<rect x="252" y="64" width="2" height="40" fill="#333"/><g class="sv-flag sv-flag2"><rect x="254" y="66" width="12" height="30" fill="#111"/><rect x="254" y="86" width="12" height="10" fill="' + BLUE + '"/></g>' +
      /* steps + quad */
      '<rect x="170" y="162" width="60" height="6" fill="' + STONE + '"/><rect x="164" y="168" width="72" height="6" fill="#d6ccbb"/>' +
      '<rect x="0" y="162" width="400" height="98" fill="#4f8a3e"/><path d="M178 174h44l40 86H138z" fill="#cbbfa8"/><rect x="0" y="226" width="400" height="34" fill="#5c8f45"/>' +
      tree(70, 214, 1) + tree(330, 214, 1) +
      '<g class="sv-walk">' + person(0, 214, BLUE) + '</g><g class="sv-walk sv-walk2">' + person(0, 222, "#111") + '</g><g class="sv-walk sv-walk3">' + person(0, 206, "#f7f3ea") + '</g>' +
      label(110, 180, "LIVINGSTONE COLLEGE · WEST END"),
      sky("sv2", "#6fb4e8", "#f3e2c0"));
  }

  /* 3. Bell Tower Green */
  function svtower() {
    const BR = "#8c3a2b", BR2 = "#a24a36";
    const bulbs = (y0) => Array.from({ length: 20 }, (_, i) => { const x = 10 + i * 20; const y = y0 + 10 * Math.sin(i / 19 * Math.PI); return '<circle cx="' + x + '" cy="' + y + '" r="2.2" fill="#ffe08a" class="sv-glow' + (i % 2 ? '2' : '') + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sv3)"/>' +
      /* downtown behind */
      '<g fill="#2a2440"><rect x="0" y="120" width="70" height="40"/><rect x="76" y="104" width="40" height="56"/><rect x="290" y="96" width="44" height="64"/><rect x="340" y="112" width="60" height="48"/></g>' +
      '<g fill="#ffd27a" opacity=".5">' + [86, 98, 300, 314, 352, 370].map((x, i) => '<rect x="' + x + '" y="' + (116 + (i % 2) * 14) + '" width="6" height="7"/>').join("") + '</g>' +
      /* the bell tower */
      '<rect x="168" y="62" width="64" height="104" fill="' + BR + '"/><rect x="164" y="160" width="72" height="8" fill="#6e2c22"/>' +
      '<path d="M162 64l38 -46l38 46z" fill="#3a3f4a"/><rect x="196" y="10" width="8" height="10" fill="#3a3f4a"/>' +
      '<rect x="162" y="62" width="76" height="6" fill="#d9c7a6"/>' +
      '<path d="M178 112V84a10 10 0 0 1 20 0V112zM202 112V84a10 10 0 0 1 20 0V112z" fill="#1c1622" stroke="#d9c7a6" stroke-width="2"/>' +
      '<g class="sv-bell"><path d="M186 86h6l2 12h-10z" fill="#c9a24a"/></g><g class="sv-bell"><path d="M210 86h6l2 12h-10z" fill="#c9a24a"/></g>' +
      '<rect x="184" y="126" width="32" height="40" fill="' + BR2 + '"/><path d="M190 166V140a10 10 0 0 1 20 0V166z" fill="#1c1622"/>' +
      Array.from({ length: 6 }, (_, r) => '<path d="M168 ' + (122 + r * 7) + 'h64" stroke="#7a3226" stroke-width="1"/>').join("") +
      /* string lights */
      '<path d="M0 72Q200 120 400 72" stroke="#555" stroke-width="1" fill="none"/>' + bulbs(76) +
      /* lawn + walkway + splash pad */
      '<rect x="0" y="166" width="400" height="94" fill="#3f7a3a"/><path d="M160 166h80l70 94H90z" fill="#c9bda6"/>' +
      '<ellipse cx="200" cy="214" rx="54" ry="12" fill="#8fc6d8"/>' +
      [176, 192, 208, 224].map((x, i) => '<rect class="sv-jet' + (i % 2 ? ' sv-jet2' : '') + '" x="' + (x - 1.5) + '" y="192" width="3" height="20" rx="1.5" fill="#d8f2fb"/>').join("") +
      tree(40, 200, 1.2, "#2c5f32") + tree(360, 200, 1.2, "#2c5f32") + tree(110, 188, .8, "#2c5f32") + tree(292, 188, .8, "#2c5f32") +
      '<g class="sv-walk">' + person(0, 240, GOLD) + '</g><g class="sv-walk sv-walk2">' + person(0, 248, RED) + '</g>' +
      label(130, 140, "BELL TOWER GREEN"),
      sky("sv3", "#0f1430", "#5a3a66"));
  }

  /* 4. N.C. Transportation Museum roundhouse, Spencer */
  function svround() {
    const BR = "#93412f";
    const stall = (x) => '<rect x="' + x + '" y="92" width="44" height="66" fill="' + BR + '" stroke="#6e2c22" stroke-width="2"/><path d="M' + (x + 6) + ' 158V118a16 16 0 0 1 32 0V158z" fill="#1d1a1c"/>' +
      '<rect x="' + (x + 8) + '" y="98" width="28" height="10" fill="#c9d6dc" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sv4)"/>' +
      '<path d="M0 92h400v-14l-20 -10H20L0 78z" fill="#4a3f3a"/>' +
      [0, 44, 88, 132, 176, 220, 264, 308, 352].map(stall).join("") +
      '<rect x="0" y="86" width="400" height="6" fill="#d6c6a6"/>' +
      '<g class="sv-smoke"><circle cx="66" cy="78" r="8" fill="#d8d8d8"/></g><g class="sv-smoke sv-smoke2"><circle cx="70" cy="70" r="6" fill="#e6e6e6"/></g>' +
      /* yard */
      '<rect x="0" y="158" width="400" height="102" fill="#6a5d4e"/>' +
      [-60, -30, 0, 30, 60].map(a => '<path transform="rotate(' + a + ' 200 214)" d="M200 214V150" stroke="#3a3530" stroke-width="5"/>').join("") +
      /* the turntable pit */
      '<ellipse cx="200" cy="214" rx="120" ry="36" fill="#3d3833"/><ellipse cx="200" cy="214" rx="112" ry="31" fill="#2c2825"/>' +
      '<g class="sv-spin"><rect x="98" y="210" width="204" height="8" fill="#55504a"/><rect x="98" y="208" width="204" height="2" fill="#a0a0a0"/><rect x="98" y="218" width="204" height="2" fill="#a0a0a0"/>' +
      /* locomotive on the table (stays level) */
      '<g><rect x="140" y="180" width="96" height="24" rx="3" fill="#1d1f24"/><rect x="214" y="164" width="22" height="22" fill="#1d1f24"/><rect x="146" y="168" width="10" height="12" fill="#1d1f24"/>' +
      '<rect x="150" y="160" width="4" height="8" fill="#1d1f24"/><rect x="216" y="168" width="10" height="8" fill="#ffd27a"/><rect x="140" y="194" width="96" height="3" fill="' + RED + '"/>' +
      [154, 176, 198, 220].map(x => '<circle cx="' + x + '" cy="206" r="7" fill="#2a2c32" stroke="#888" stroke-width="2"/>').join("") +
      '<path d="M134 204l6 -14h4v14z" fill="#555"/></g></g>' +
      '<g class="sv-smoke"><circle cx="152" cy="152" r="7" fill="#cfcfcf"/></g><g class="sv-smoke sv-smoke2"><circle cx="156" cy="144" r="5" fill="#dedede"/></g>' +
      label(60, 280, "SPENCER ROUNDHOUSE · NC TRANSPORTATION MUSEUM"),
      sky("sv4", "#7cb6e0", "#f0dcb8"));
  }

  /* 5. W Innes St and S Main St on the Square */
  function svcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sv5)"/>' +
      /* the Plaza building rising over the Square */
      '<rect x="210" y="22" width="84" height="116" fill="#a4553e"/><rect x="206" y="18" width="92" height="8" fill="#efe4cf"/>' +
      Array.from({ length: 7 }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect x="' + (218 + c * 15) + '" y="' + (32 + r * 15) + '" width="9" height="10" fill="' + ((r * 5 + c) % 3 ? "#ffd98a" : "#3a2e3a") + '"/>').join("")).join("") +
      '<g fill="#3a2a44"><rect x="0" y="96" width="86" height="42"/><rect x="92" y="84" width="60" height="54"/><rect x="156" y="102" width="50" height="36"/><rect x="300" y="92" width="44" height="46"/><rect x="348" y="104" width="52" height="34"/></g>' +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#bdb3a4"/>' + Array.from({ length: 6 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 40 + (r % 2) * 20 - 20) + '" y="' + (136 + r * 15) + '" width="38" height="13" fill="none" stroke="#a69c8e" stroke-width="1.2"/>').join("")).join("") +
      tag("BDB", 20, 160, 20, ICE, -5) + tag("RICH YOUNGIN", 120, 158, 17, "#fff", -4) + tag("STUNNA 4 VEGAS", 14, 200, 32, GOLD, -5) + tag("4 TIMES", 200, 222, 17, RED, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#56534d"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="94" width="6" height="132" fill="#2f2f2f"/>' + sign(296, 96, 102, "W Innes St") + sign(300, 122, 94, "S Main St") +
      '<g class="sv-car"><rect x="0" y="232" width="60" height="16" rx="5" fill="' + RED + '"/><rect x="10" y="226" width="34" height="10" rx="3" fill="#7a0a1c"/><circle cx="14" cy="250" r="5" fill="#111"/><circle cx="48" cy="250" r="5" fill="#111"/></g>' +
      '<g class="sv-sp"><circle cx="190" cy="196" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="sv-sp sv-sp2"><circle cx="196" cy="190" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("sv5", "#1a1030", "#e07a4a"));
  }

  window.SCENES = { svstation: svstation, svcollege: svcollege, svtower: svtower, svround: svround, svcorner: svcorner };
})();
