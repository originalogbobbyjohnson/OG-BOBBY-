/* Junglepussy game (NYC map, Brooklyn: East New York, where Shayna McHayle grew up).
   The J up on the Jamaica Av el at Cleveland St, the Fashion Institute of Technology on 7th Av (she went to FIT), Westway on the
   far West Side (her late-night shows), Afropunk Brooklyn in Commodore Barry Park (she played the 2019 festival), and
   Cleveland St & New Lots Av with the East New York Farms garden up the block. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jpcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.jp-car{animation:jpcar 6.5s linear infinite}.jp-car2{animation-delay:-3.2s}' +
    '@keyframes jprack{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.jp-rack{animation:jprack 8s linear infinite}' +
    '@keyframes jpblink{0%,100%{opacity:.3}50%{opacity:1}}.jp-bl{animation:jpblink 1.6s ease-in-out infinite}.jp-bl2{animation-delay:.5s}.jp-bl3{animation-delay:1s}' +
    '@keyframes jpflick{0%,100%{opacity:1}46%{opacity:.85}50%{opacity:.3}54%{opacity:.95}}.jp-flk{animation:jpflick 2.6s infinite}' +
    '@keyframes jpbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.jp-bob{animation:jpbob .5s ease-in-out infinite}.jp-bob2{animation-delay:.25s}' +
    '@keyframes jpsweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.jp-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jpsweep 3s ease-in-out infinite}.jp-beam2{animation-delay:-1.5s}' +
    '@keyframes jpsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.jp-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jpsway 2.6s ease-in-out infinite}.jp-sway2{animation-delay:-1.3s}' +
    '@keyframes jpbug{0%{transform:translate(0,0)}25%{transform:translate(40px,-14px)}50%{transform:translate(80px,0)}75%{transform:translate(40px,12px)}100%{transform:translate(0,0)}}.jp-bug{animation:jpbug 6s ease-in-out infinite}' +
    '@keyframes jpconf{0%{transform:translateY(-20px);opacity:0}15%{opacity:1}100%{transform:translateY(120px);opacity:0}}.jp-cf{animation:jpconf 3s linear infinite}.jp-cf2{animation-delay:-1s}.jp-cf3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 89) % 400) + '" cy="' + (6 + (i * 47) % 46) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const PINK = "#ff5fa2", GREEN = "#7ed957", GOLD = "#ffd23f", CREAM = "#f6ecd9", JZ = "#996633";

  /* 1. Cleveland St, up on the Jamaica Av el: the platform with its canopy, the black sign with the J, the J pulling in, Jamaica Av underneath */
  function cleveland() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="20" rx="2" fill="#ffe7a8" opacity=".9"/>';
    let rail = "";
    for (let x = 0; x < 400; x += 10) rail += '<rect x="' + x + '" y="184" width="2" height="18" fill="#2e2a24"/>';
    let row = "";
    [[0, 120, "#8a5a44"], [64, 130, "#a8735a"], [250, 116, "#7d5a48"], [330, 126, "#946450"]].forEach(b => { row += '<rect x="' + b[0] + '" y="' + b[1] + '" width="70" height="' + (230 - b[1]) + '" fill="' + b[2] + '" opacity=".5"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#jpc)"/>' + row +
      '<path d="M0 26h400v12H0z" fill="#6b5a3a"/><path d="M0 38h400l-12 8H12z" fill="#4f4229"/>' +
      [36, 200, 364].map(x => '<rect x="' + (x - 4) + '" y="46" width="8" height="126" fill="#6b5a3a"/>').join("") +
      /* sign */
      '<rect x="72" y="56" width="256" height="32" rx="3" fill="#111"/><rect x="72" y="56" width="256" height="3" fill="#fff"/>' +
      '<text x="86" y="78" ' + font + ' font-size="15" fill="#fff">Cleveland St</text>' + bullet(304, 72, "J", JZ) +
      /* the J train */
      '<g class="anim-train">' +
        '<rect x="10" y="100" width="300" height="62" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="108" width="16" height="26" rx="2" fill="#ffe7a8"/>' + bullet(298, 148, "J", JZ) +
        '<rect x="10" y="140" width="280" height="4" fill="' + JZ + '"/><circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="162" width="400" height="10" fill="#eab308"/><rect x="0" y="172" width="400" height="12" fill="#7a6a58"/>' + rail +
      '<rect x="0" y="182" width="400" height="3" fill="#2e2a24"/><rect x="0" y="200" width="400" height="10" fill="#4a3f30"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 5) + '" y="210" width="10" height="24" fill="#4a3f30"/>').join("") +
      '<rect x="0" y="234" width="400" height="26" fill="#2b2b30"/>' +
      '<g class="jp-car"><rect x="0" y="240" width="46" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      '<g class="jp-car jp-car2"><rect x="0" y="242" width="40" height="11" rx="4" fill="' + GREEN + '"/><circle cx="9" cy="253" r="4" fill="#111"/><circle cx="31" cy="253" r="4" fill="#111"/></g>' +
      person(334, 136, "#2a1a24") + person(358, 140, "#3a2432") +
      '<rect x="74" y="214" width="252" height="15" rx="3" fill="#2a1a24" opacity=".85"/>' + txt("EAST NEW YORK · JAMAICA AV EL", 200, 225, 9, CREAM, 'letter-spacing="2.5"'),
      sky("jpc", "#ffb88a", "#ffe2c0"));
  }

  /* 2. The Fashion Institute of Technology on 7th Av: modern towers, dress forms in the windows, a garment rack rolling down the block */
  function fit() {
    let grid = "";
    for (let y = 70; y < 196; y += 14) for (let x = 24; x < 150; x += 16) grid += '<rect x="' + x + '" y="' + y + '" width="11" height="9" fill="#cfe2f5" opacity=".75"/>';
    for (let y = 46; y < 196; y += 14) for (let x = 262; x < 380; x += 16) grid += '<rect x="' + x + '" y="' + y + '" width="11" height="9" fill="#cfe2f5" opacity=".7"/>';
    const form = x => '<g><path d="M' + (x - 11) + ' 138q11 -8 22 0l-4 14q5 6 3 20h-20q-2 -14 3 -20z" fill="' + PINK + '"/><rect x="' + (x - 2) + '" y="130" width="4" height="6" fill="#333"/><rect x="' + (x - 1) + '" y="162" width="2" height="16" fill="#333"/><path d="M' + (x - 8) + ' 178h16" stroke="#333" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jpf)"/>' +
      '<rect x="14" y="60" width="146" height="140" fill="#9a8f84"/><rect x="252" y="36" width="136" height="164" fill="#857b72"/>' + grid +
      /* the lower glass front with dress forms */
      '<rect x="150" y="96" width="112" height="104" fill="#6f665e"/>' +
      '<rect x="158" y="126" width="96" height="62" fill="#1f2a3a"/>' + form(176) + form(206) + form(236) +
      '<rect x="150" y="100" width="112" height="20" fill="#1b1b1b"/>' +
      txt("FASHION INSTITUTE", 206, 109, 8.5, "#fff", 'letter-spacing="1.2"') + txt("OF TECHNOLOGY", 206, 118, 7.5, GOLD, 'letter-spacing="1.5"') +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="16" fill="#c9c1b4"/><rect x="0" y="216" width="400" height="44" fill="#45454c"/>' +
      '<path d="M0 238h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 12"/>' +
      /* rolling garment rack */
      '<g class="jp-rack"><path d="M0 162h70M4 162v38M66 162v38" stroke="#c9ced6" stroke-width="3"/>' +
        [[8, PINK], [20, GREEN], [32, GOLD], [44, "#8e7cc3"], [56, "#ff8a3d"]].map(c => '<path d="M' + (c[0] + 3) + ' 164l-6 30h14z" fill="' + c[1] + '"/>').join("") +
        '<circle cx="4" cy="202" r="3" fill="#222"/><circle cx="66" cy="202" r="3" fill="#222"/></g>' +
      '<g class="jp-car"><rect x="0" y="242" width="44" height="13" rx="4" fill="#f5c518"/><circle cx="10" cy="255" r="4" fill="#111"/><circle cx="34" cy="255" r="4" fill="#111"/></g>' +
      txt("7TH AV · W 27TH ST", 86, 40, 10, "#3a2433", 'letter-spacing="2"'),
      sky("jpf", "#9fd0f0", "#f4e7d6"));
  }

  /* 3. Westway on the far West Side: the low old diner front with its neon sign, a late line outside, cars on the West Side Highway */
  function westway() {
    let brick = "";
    for (let y = 120; y < 206; y += 8) for (let x = (y / 8) % 2 ? 60 : 52; x < 348; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#4a2a2a"/>';
    const line = [100, 122, 144, 166, 188].map((x, i) => person(x, 182, i % 2 ? "#181018" : "#26182a", "jp-bob" + (i % 2 ? " jp-bob2" : ""))).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jpw)"/>' + stars(16) +
      '<rect x="0" y="96" width="400" height="20" fill="#16121e"/>' +
      '<rect x="52" y="112" width="296" height="94" fill="#5a3232"/>' + brick +
      '<rect x="48" y="106" width="304" height="8" fill="#2a1a1a"/>' +
      /* neon sign */
      '<rect x="110" y="56" width="180" height="40" rx="6" fill="#120a14" stroke="' + PINK + '" stroke-width="2"/>' +
      '<rect x="196" y="96" width="8" height="14" fill="#333"/>' +
      '<text class="jp-flk" x="200" y="85" text-anchor="middle" font-family="Brush Script MT, Sedgwick Ave Display, cursive" font-style="italic" font-weight="700" font-size="28" fill="#ff8ac0" stroke="' + PINK + '" stroke-width=".6">Westway</text>' +
      '<rect x="230" y="134" width="90" height="46" fill="#2a1430" stroke="#2a1a1a" stroke-width="3"/>' +
      '<rect class="jp-bl" x="240" y="142" width="18" height="10" fill="' + PINK + '" opacity=".8"/><rect class="jp-bl jp-bl2" x="266" y="150" width="18" height="10" fill="' + GREEN + '" opacity=".8"/><rect class="jp-bl jp-bl3" x="292" y="142" width="18" height="10" fill="' + GOLD + '" opacity=".8"/>' +
      '<rect x="70" y="150" width="20" height="56" fill="#1b0f12"/>' + line +
      '<rect x="0" y="206" width="400" height="10" fill="#8a8580"/><rect x="0" y="216" width="400" height="44" fill="#26262c"/>' +
      '<path d="M0 238h400" stroke="#ddd" stroke-width="2" stroke-dasharray="14 12"/>' +
      '<g class="jp-car"><rect x="0" y="222" width="46" height="13" rx="4" fill="#d9d9d9"/><circle cx="10" cy="235" r="4" fill="#111"/><circle cx="36" cy="235" r="4" fill="#111"/><rect x="40" y="225" width="5" height="3" fill="#fff3b0"/></g>' +
      '<g class="jp-car jp-car2"><rect x="0" y="244" width="40" height="11" rx="4" fill="' + PINK + '"/><circle cx="9" cy="255" r="4" fill="#111"/><circle cx="31" cy="255" r="4" fill="#111"/></g>' +
      txt("WEST SIDE HWY · LATE SHOW", 200, 28, 10, CREAM, 'letter-spacing="2.5" opacity=".9"'),
      sky("jpw", "#0b0716", "#2c1a3c"));
  }

  /* 4. Afropunk Brooklyn in Commodore Barry Park: the big festival stage with sweeping lights, confetti, the crowd bouncing, Fort Greene trees */
  function afropunk() {
    const crowd = [];
    for (let i = 0; i < 16; i++) crowd.push(person(14 + i * 25, 214 + (i % 3) * 4, ["#1c1220", "#2a1830", "#14101a"][i % 3], "jp-bob" + (i % 2 ? " jp-bob2" : "")));
    return svg(
      '<rect width="400" height="260" fill="url(#jpa)"/>' + stars(12) +
      [20, 60, 340, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (150 + (i % 2) * 8) + '" r="30" fill="#1f3a26"/>').join("") +
      /* stage */
      '<rect x="70" y="58" width="260" height="14" fill="#222"/><rect x="76" y="72" width="10" height="120" fill="#333"/><rect x="314" y="72" width="10" height="120" fill="#333"/>' +
      '<rect x="86" y="80" width="228" height="96" fill="#1a1020"/>' +
      '<path class="jp-beam" d="M120 72l-30 110h60z" fill="' + PINK + '" opacity=".35"/><path class="jp-beam jp-beam2" d="M280 72l-30 110h60z" fill="' + GREEN + '" opacity=".35"/><path class="jp-beam" d="M200 72l-26 110h52z" fill="' + GOLD + '" opacity=".3"/>' +
      [100, 140, 180, 220, 260, 300].map((x, i) => '<circle class="jp-bl jp-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="66" r="3.5" fill="#fff6d0"/>').join("") +
      '<rect x="80" y="176" width="240" height="18" fill="#2a2a2a"/>' +
      /* performer silhouette with mic stand (no face) */
      '<g class="jp-bob"><circle cx="200" cy="128" r="8" fill="#0a0a0a"/><path d="M190 138h20l6 38h-32z" fill="#0a0a0a"/></g><path d="M222 176v-40l-6 -4" stroke="#888" stroke-width="2"/>' +
      [[120, PINK, ""], [200, GREEN, " jp-cf2"], [270, GOLD, " jp-cf3"], [160, "#8e7cc3", " jp-cf2"], [240, "#ff8a3d", ""]].map(c => '<rect class="jp-cf' + c[2] + '" x="' + c[0] + '" y="80" width="4" height="6" fill="' + c[1] + '"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#2a3a24"/>' + crowd.join("") +
      txt("COMMODORE BARRY PARK · FORT GREENE", 200, 26, 10, CREAM, 'letter-spacing="2"'),
      sky("jpa", "#1a0f2e", "#5a2a5a"));
  }

  /* 5. Cleveland St & New Lots Av, East New York: the farm garden up the block (raised beds, sunflowers, a ladybug), the wall tagged JUNGLEPUSSY */
  function corner() {
    const flower = (x, y, cls) => '<g class="jp-sway ' + (cls || "") + '"><path d="M' + x + ' 150v-' + (150 - y) + '" stroke="#3f7a2a" stroke-width="3"/>' +
      [0, 60, 120, 180, 240, 300].map(a => '<ellipse cx="' + (x + 8 * Math.cos(a * Math.PI / 180)) + '" cy="' + (y + 8 * Math.sin(a * Math.PI / 180)) + '" rx="5" ry="3" transform="rotate(' + a + ' ' + (x + 8 * Math.cos(a * Math.PI / 180)) + ' ' + (y + 8 * Math.sin(a * Math.PI / 180)) + ')" fill="' + GOLD + '"/>').join("") +
      '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#6a3b1a"/></g>';
    let fence = "";
    for (let x = 0; x < 290; x += 10) fence += '<path d="M' + x + ' 126l5 -8l5 8" stroke="#9aa0a6" stroke-width="1.2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jpk)"/>' +
      '<circle cx="340" cy="34" r="18" fill="#fff1a8"/>' +
      /* houses behind */
      [[0, 60, "#c98f6a"], [74, 70, "#e0c9a6"], [150, 56, "#b98a76"], [226, 66, "#d8b48c"]].map(h => '<rect x="' + h[0] + '" y="' + h[1] + '" width="70" height="' + (150 - h[1]) + '" fill="' + h[2] + '"/><path d="M' + h[0] + ' ' + h[1] + 'l35 -16l35 16z" fill="#6b4a3a"/>' +
        '<rect x="' + (h[0] + 12) + '" y="' + (h[1] + 14) + '" width="12" height="14" fill="#fff" opacity=".8"/><rect x="' + (h[0] + 44) + '" y="' + (h[1] + 14) + '" width="12" height="14" fill="#fff" opacity=".8"/>').join("") +
      /* farm: fence, raised beds, sunflowers */
      '<rect x="0" y="118" width="290" height="32" fill="#5d8a3a"/>' + fence +
      '<rect x="10" y="134" width="70" height="14" fill="#7a5233"/><rect x="96" y="134" width="70" height="14" fill="#7a5233"/><rect x="182" y="134" width="70" height="14" fill="#7a5233"/>' +
      [20, 34, 48, 62, 106, 120, 134, 148, 192, 206, 220, 234].map(x => '<circle cx="' + x + '" cy="132" r="5" fill="#3f8a2a"/>').join("") +
      flower(84, 96) + flower(172, 90, "jp-sway2") + flower(262, 100) +
      '<g class="jp-bug"><circle cx="120" cy="104" r="5" fill="#e63946"/><path d="M120 99v10" stroke="#111" stroke-width="1"/><circle cx="118" cy="103" r="1" fill="#111"/><circle cx="122" cy="106" r="1" fill="#111"/><circle cx="120" cy="99" r="2" fill="#111"/></g>' +
      txt("EAST NEW YORK FARMS", 145, 30, 10, "#3a2433", 'letter-spacing="2"') +
      /* the wall */
      '<rect x="0" y="150" width="400" height="76" fill="#3a2e3a"/>' +
      (() => { let b = ""; for (let y = 160; y < 226; y += 11) b += '<path d="M0 ' + y + 'h400" stroke="#302630" stroke-width="1"/>'; return b; })() +
      tag("JUNGLEPUSSY", 12, 200, 40, PINK, -5) + tag("CREAM TEAM", 26, 222, 15, CREAM, -3) + tag("NAH", 148, 222, 22, GOLD, -6) + tag("JUNGLE", 226, 218, 18, GREEN, -6) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="jp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + GREEN + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="298" y="66" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Cleveland St", 347, 82, 12, "#fff") +
      '<rect x="298" y="92" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("New Lots Av", 347, 108, 12, "#fff"),
      sky("jpk", "#8fd0f5", "#fbe7c8"));
  }

  window.SCENES = { cleveland: cleveland, fit: fit, westway: westway, afropunk: afropunk, corner: corner };
})();
