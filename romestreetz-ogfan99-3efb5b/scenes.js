/* romestreetz scenes (NYC map: Jamaica, Queens). CSS classes prefixed rs- (the page's own anim-train is kept). No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rsflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.rs-flk{animation:rsflick 2.6s infinite}.rs-flk2{animation-delay:.9s}' +
    '@keyframes rsglow{0%,100%{opacity:.45}50%{opacity:1}}.rs-glow{animation:rsglow 2.2s ease-in-out infinite}.rs-g2{animation-delay:-1.1s}.rs-g3{animation-delay:-.5s}' +
    '@keyframes rspass{0%{transform:translateX(0)}100%{transform:translateX(-400px)}}.rs-pass{animation:rspass 3.2s linear infinite}' +
    '@keyframes rsbus{0%{transform:translateX(-470px)}40%,100%{transform:translateX(0)}}.rs-dd{animation:rsbus 8s ease-out infinite;animation-delay:-2s}' +
    '@keyframes rsrain{0%{transform:translate(0,-30px)}100%{transform:translate(-14px,260px)}}.rs-rn{animation:rsrain 1.1s linear infinite}.rs-rn2{animation-delay:-.37s}.rs-rn3{animation-delay:-.74s}' +
    '@keyframes rssway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rs-sw{transform-box:fill-box;transform-origin:50% 0%;animation:rssway 1.6s ease-in-out infinite}' +
    '@keyframes rspen{0%,100%{transform:translate(0,0)}25%{transform:translate(6px,1px)}50%{transform:translate(12px,0)}75%{transform:translate(6px,-1px)}}.rs-pen{animation:rspen 1.2s ease-in-out infinite}' +
    '@keyframes rsflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.rs-fl{transform-box:fill-box;transform-origin:0% 50%;animation:rsflag 1.4s ease-in-out infinite}' +
    '@keyframes rsspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rs-sp{animation:rsspray 1.4s ease-out infinite}.rs-sp2{animation-delay:.45s}' +
    '@keyframes rstwk{0%,100%{transform:scale(.4);opacity:.2}50%{transform:scale(1);opacity:1}}.rs-tw{transform-box:fill-box;transform-origin:50% 50%;animation:rstwk 1.8s ease-in-out infinite}.rs-tw2{animation-delay:-.6s}.rs-tw3{animation-delay:-1.2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, letter, color, dark) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.38) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.15) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rs-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd166", RED = "#d7263d", BLUE = "#2e86ab", MTA = "#0039a6", JZ = "#996633";

  /* 0. Jamaica Av & 168 St, Queens, at night: the Q110 local pulling up to the blue MTA bus-stop flag, the avenue's shop fronts with roll-down gates */
  function rsstop() {
    const bus = '<g class="anim-train"><rect x="30" y="118" width="300" height="84" rx="10" fill="#f2f3f1" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="130" width="34" height="32" rx="3" fill="#1d2a36"/>').join("") +
      '<rect x="36" y="130" width="30" height="62" rx="2" fill="#1d2a36"/><rect x="30" y="168" width="300" height="7" fill="' + MTA + '"/>' +
      '<rect x="262" y="120" width="64" height="10" rx="2" fill="#111"/><text x="294" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">Q110 JAMAICA</text>' +
      '<circle cx="84" cy="203" r="13" fill="#222"/><circle cx="84" cy="203" r="5" fill="#9aa1a8"/><circle cx="270" cy="203" r="13" fill="#222"/><circle cx="270" cy="203" r="5" fill="#9aa1a8"/>' +
      '<circle cx="325" cy="190" r="4" fill="#fff6c2"/><rect x="34" y="186" width="6" height="8" fill="' + RED + '"/></g>';
    const shops = [["#7a3b2e", 0], ["#4b5563", 80], ["#8a6a3a", 160], ["#3f4d63", 240], ["#6b3a4a", 320]].map(([c, x], i) =>
      '<rect x="' + x + '" y="40" width="80" height="78" fill="' + c + '"/>' +
      [0, 1, 2].map(k => '<rect class="' + ((i + k) % 3 ? "" : "rs-glow") + '" x="' + (x + 8 + k * 24) + '" y="50" width="16" height="16" fill="#ffd98a" opacity=".8"/>').join("") +
      '<rect x="' + (x + 4) + '" y="84" width="72" height="12" fill="#151515"/><rect x="' + (x + 4) + '" y="96" width="72" height="22" fill="#9aa0a6"/>' +
      Array.from({ length: 5 }, (_, k) => '<path d="M' + (x + 4) + ' ' + (99 + k * 4) + 'h72" stroke="#7d838a" stroke-width="1"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rs0)"/>' + stars(16) + shops +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3a3e"/><rect x="0" y="198" width="400" height="4" fill="#bdbab2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54) + '" y="232" width="30" height="4" fill="#e8e1c8" opacity=".6"/>').join("") +
      bus +
      '<rect x="354" y="70" width="5" height="132" fill="#6b7178"/><rect x="340" y="70" width="34" height="58" rx="3" fill="' + MTA + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="357" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text><text x="357" y="97" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">STOP</text>' +
      '<rect x="344" y="104" width="26" height="14" rx="2" fill="#fff"/><text x="357" y="114.5" text-anchor="middle" ' + font + ' font-size="9" fill="' + MTA + '">Q110</text>' +
      '<rect x="44" y="8" width="312" height="26" rx="3" fill="#111"/><text x="56" y="26" ' + font + ' font-size="13" fill="#fff">Jamaica Av / 168 St</text>' +
      '<rect x="258" y="13" width="44" height="16" rx="8" fill="' + MTA + '"/><text x="280" y="25" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">Q110</text>',
      sky("rs0", "#0d1430", "#3a2d4a"));
  }

  /* 1. Writing on the J: inside the J train on the Broadway el through Bed-Stuy, the notebook open on his knee, the pen moving, brownstone rooftops sliding past the windows */
  function rsjtrain() {
    const roofs = '<g class="rs-pass">' + [0, 400].map(o => Array.from({ length: 8 }, (_, i) => {
      const x = o + i * 50, h = 30 + (i * 17) % 26, c = ["#7a4a36", "#8c5a40", "#6a3e30", "#9a6a4a"][i % 4];
      return '<rect x="' + x + '" y="' + (120 - h) + '" width="48" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (118 - h) + '" width="48" height="4" fill="#3a2a22"/>' +
        '<rect x="' + (x + 8) + '" y="' + (128 - h) + '" width="8" height="10" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 28) + '" y="' + (128 - h) + '" width="8" height="10" fill="#ffd98a" opacity=".5"/>';
    }).join("")).join("") + '</g>';
    const win = x => '<rect x="' + x + '" y="40" width="110" height="80" rx="10" fill="#1a2a40"/>';
    return svg(
      '<rect width="400" height="260" fill="#c9ccd1"/>' +
      '<clipPath id="rsw"><rect x="24" y="40" width="110" height="80" rx="10"/><rect x="145" y="40" width="110" height="80" rx="10"/><rect x="266" y="40" width="110" height="80" rx="10"/></clipPath>' +
      win(24) + win(145) + win(266) +
      '<g clip-path="url(#rsw)"><rect x="0" y="40" width="400" height="80" fill="url(#rs1)"/>' + roofs + '</g>' +
      [24, 145, 266].map(x => '<rect x="' + x + '" y="40" width="110" height="80" rx="10" fill="none" stroke="#8a9097" stroke-width="4"/>').join("") +
      '<rect x="0" y="0" width="400" height="30" fill="#e6e8eb"/><rect x="0" y="24" width="400" height="6" fill="#b4b9bf"/>' +
      '<rect x="0" y="6" width="400" height="10" fill="#f6f2e0" class="rs-flk" opacity=".9"/>' +
      '<rect x="200" y="0" width="5" height="40" fill="#9aa0a6"/><path d="M60 30v14M340 30v14" stroke="#8a9097" stroke-width="4"/>' +
      '<g class="rs-sw"><rect x="57" y="44" width="6" height="20" fill="#d6d9dd"/><circle cx="60" cy="68" r="6" fill="none" stroke="#d6d9dd" stroke-width="3"/></g>' +
      '<rect x="0" y="150" width="400" height="56" fill="#f0a830"/><rect x="0" y="150" width="400" height="6" fill="#c98a20"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (i * 60) + ' 156v50" stroke="#c98a20" stroke-width="2"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#5a5f66"/>' +
      '<g transform="translate(150 168) rotate(-4)"><rect x="0" y="0" width="110" height="70" rx="3" fill="#fbfaf4" stroke="#999" stroke-width="1"/><path d="M55 0v70" stroke="#c9c4b4" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M6 ' + (12 + i * 9) + 'h44M60 ' + (12 + i * 9) + 'h44" stroke="#9fc4e6" stroke-width="1"/>').join("") +
      '<path d="M8 10q6 -3 12 0t12 0t14 0M8 19q8 -3 16 0t16 0M8 28q5 -3 10 0t12 0t16 0M8 37q8 -3 18 0t14 0M62 10q6 -3 12 0t14 0M62 19q8 -3 12 0" stroke="#223" stroke-width="1.3" fill="none"/>' +
      '<g class="rs-pen"><path d="M78 16l14 -14l4 4l-14 14z" fill="' + GOLD + '"/><path d="M78 16l-3 7l7 -3z" fill="#222"/></g></g>' +
      '<rect x="22" y="128" width="356" height="18" rx="3" fill="#111"/><text x="34" y="141" ' + font + ' font-size="11" fill="#fff">J  Broadway el, Bed-Stuy, toward Jamaica Center</text>' + bullet(372, 137, 7, "J", JZ),
      sky("rs1", "#f0b46a", "#5a4a7a"));
  }

  /* 2. Hatton Garden, London (born there; the "Hatton Garden Holdup" album): the jewellers' row of Victorian brick fronts with gold-lettered windows, diamonds twinkling, a red double-decker easing past */
  function rshatton() {
    const fronts = [["#8a4a32", 0], ["#6e3a2a", 100], ["#9a5a3a", 200], ["#7a4232", 300]].map(([c, x], i) =>
      '<rect x="' + x + '" y="20" width="100" height="150" fill="' + c + '"/>' +
      [0, 1, 2].map(k => '<rect x="' + (x + 12 + k * 28) + '" y="34" width="18" height="30" fill="#2a3442"/><rect x="' + (x + 10 + k * 28) + '" y="32" width="22" height="4" fill="#e8dcc6"/>').join("") +
      [0, 1, 2].map(k => '<rect x="' + (x + 12 + k * 28) + '" y="74" width="18" height="26" fill="#2a3442"/>').join("") +
      '<rect x="' + (x + 6) + '" y="108" width="88" height="14" fill="#141a1f"/><text x="' + (x + 50) + '" y="118.5" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="' + GOLD + '">' + ["JEWELLERS", "FINE GOLD", "DIAMONDS", "WATCHES"][i] + '</text>' +
      '<rect x="' + (x + 8) + '" y="124" width="62" height="44" fill="#ffe9b0" opacity=".85"/><rect x="' + (x + 74) + '" y="124" width="18" height="46" fill="#1c3a2a"/>' +
      [0, 1, 2].map(k => '<path class="rs-tw' + (k ? " rs-tw" + (k + 1) : "") + '" d="M' + (x + 20 + k * 18) + ' ' + (140 + (k % 2) * 10) + 'l4 -6l4 6l-4 6z" fill="#e6f7ff" stroke="#7fb6d6" stroke-width=".8"/>').join("")).join("");
    const dd = '<g class="rs-dd"><rect x="40" y="132" width="200" height="86" rx="8" fill="' + RED + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (52 + i * 36) + '" y="140" width="28" height="22" rx="2" fill="#20262c"/><rect x="' + (52 + i * 36) + '" y="174" width="28" height="22" rx="2" fill="#20262c"/>').join("") +
      '<rect x="40" y="166" width="200" height="4" fill="#f2f2f2"/><rect x="200" y="134" width="36" height="10" fill="#111"/><text x="218" y="142" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a">EC1</text>' +
      '<circle cx="80" cy="220" r="12" fill="#222"/><circle cx="80" cy="220" r="5" fill="#999"/><circle cx="206" cy="220" r="12" fill="#222"/><circle cx="206" cy="220" r="5" fill="#999"/><circle cx="236" cy="206" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rs2)"/>' + fronts +
      '<rect x="0" y="170" width="400" height="12" fill="#a09a90"/><rect x="0" y="182" width="400" height="78" fill="#3d4044"/>' +
      '<rect x="372" y="112" width="24" height="60" rx="3" fill="' + RED + '"/><rect x="376" y="120" width="16" height="40" fill="#2a3036"/><rect x="372" y="108" width="24" height="6" rx="2" fill="#b01e30"/>' +
      dd + '<rect x="0" y="0" width="400" height="20" fill="#cfd6dc" opacity=".6"/>' +
      '<rect x="120" y="234" width="160" height="20" rx="3" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HATTON GARDEN · LONDON EC1</text>',
      sky("rs2", "#9fb3c4", "#d9dfe3"));
  }

  /* 3. Shoreditch, East London, in the rain (his teen years over there; "Lobsters in Shoreditch"): the railway arch, brick warehouses with bold abstract murals, a black cab rolling by */
  function rsshore() {
    const rain = Array.from({ length: 36 }, (_, i) => '<path class="rs-rn' + ["", " rs-rn2", " rs-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 100) + 'l-3 12" stroke="#cfe3ff" stroke-width="1.2" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rs3)"/>' +
      '<rect x="0" y="30" width="150" height="150" fill="#7a4a3a"/><rect x="250" y="40" width="150" height="140" fill="#6a3e32"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (36 + i * 10) + 'h150M250 ' + (46 + i * 10) + 'h150" stroke="#5a342a" stroke-width="1"/>').join("") +
      '<rect x="10" y="80" width="130" height="90" fill="#1f2b4a"/><circle cx="50" cy="120" r="30" fill="' + GOLD + '"/><path d="M80 90l50 40l-50 40z" fill="' + RED + '"/><rect x="20" y="150" width="60" height="16" fill="' + BLUE + '"/><path d="M14 100q30 -30 60 0t60 0" stroke="#7cf29a" stroke-width="6" fill="none"/>' +
      '<rect x="262" y="70" width="126" height="100" fill="#f2efe6"/><circle cx="300" cy="110" r="22" fill="none" stroke="#111" stroke-width="7"/><rect x="330" y="84" width="46" height="46" fill="' + BLUE + '"/><path d="M270 160l40 -30l40 30l30 -24" stroke="' + RED + '" stroke-width="7" fill="none"/>' +
      '<path d="M120 0h160v180h-24v-30q0 -60 -56 -60t-56 60v30h-24z" fill="#4a3a34"/><path d="M120 18h160" stroke="#2e2420" stroke-width="6"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (124 + i * 20) + ' 24v12" stroke="#2e2420" stroke-width="2"/>').join("") +
      '<path d="M144 180v-30q0 -54 56 -54t56 54v30z" fill="#14181f"/><circle class="rs-glow" cx="200" cy="112" r="5" fill="#ffd98a"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#2b2f36"/><rect x="0" y="178" width="400" height="4" fill="#8f949b"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 70 + 10) + '" y="222" width="40" height="3" fill="#ffd98a" opacity=".35"/>').join("") +
      '<g class="anim-train"><g transform="translate(150 0)"><path d="M10 214v-24q4 -18 26 -20h70q22 2 26 20v24z" fill="#111417"/><rect x="40" y="176" width="30" height="16" rx="2" fill="#3c4a5a"/><rect x="76" y="176" width="30" height="16" rx="2" fill="#3c4a5a"/>' +
      '<rect x="62" y="166" width="22" height="7" rx="2" fill="#f2b630"/><circle cx="38" cy="216" r="11" fill="#222"/><circle cx="38" cy="216" r="4.5" fill="#999"/><circle cx="108" cy="216" r="11" fill="#222"/><circle cx="108" cy="216" r="4.5" fill="#999"/><circle cx="133" cy="200" r="3.5" fill="#fff6c2"/></g></g>' +
      rain + '<rect x="120" y="234" width="160" height="20" rx="3" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SHOREDITCH · EAST LONDON</text>',
      sky("rs3", "#2c3448", "#6a7488"));
  }

  /* 4. His corner: Jamaica Av and 168 St, Queens. A brick wall with ROME STREETZ tagged on it, green street signs, and down 168 St behind it the Jamaica Armory (1936), the red-brick castle with its crenellated towers and a flag */
  function rscorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rs4)"/>' + stars(18) +
      '<g fill="#8e3e2c" stroke="#5e2618" stroke-width="1"><rect x="120" y="58" width="170" height="78"/><rect x="104" y="40" width="40" height="96"/><rect x="266" y="40" width="40" height="96"/><rect x="180" y="30" width="50" height="106"/></g>' +
      [104, 266].map(x => [0, 1, 2, 3].map(k => '<rect x="' + (x + k * 11) + '" y="34" width="7" height="8" fill="#8e3e2c"/>').join("")).join("") +
      [0, 1, 2, 3, 4].map(k => '<rect x="' + (180 + k * 11) + '" y="24" width="7" height="8" fill="#8e3e2c"/>').join("") +
      '<path d="M190 136v-24q15 -16 30 0v24z" fill="#2a1a14"/><rect x="112" y="60" width="8" height="18" fill="#ffd98a" class="rs-glow"/><rect x="274" y="60" width="8" height="18" fill="#ffd98a" class="rs-glow rs-g2"/>' +
      '<rect x="196" y="48" width="18" height="12" fill="#ffd98a" class="rs-glow rs-g3"/><rect x="143" y="76" width="10" height="14" fill="#ffd98a" opacity=".6"/><rect x="257" y="76" width="10" height="14" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="204" y="0" width="2" height="26" fill="#ccc"/><g class="rs-fl"><rect x="206" y="2" width="22" height="13" fill="#e9ecef"/><rect x="206" y="2" width="22" height="3" fill="' + RED + '"/><rect x="206" y="8" width="22" height="2" fill="' + RED + '"/><rect x="206" y="2" width="9" height="7" fill="' + MTA + '"/></g>' +
      '<rect x="0" y="136" width="400" height="90" fill="#6e3a2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5a2e22" stroke-width="1"/>').join("") +
      tag("ROME STREETZ", 18, 196, 40, GOLD, -6) + tag("NOISE KANDY", 40, 218, 18, "#fff", -3) + tag("STAY WOKE", 200, 220, 18, RED, -3) + tag("LORD STREETZ", 24, 152, 13, BLUE, -2) +
      '<rect x="0" y="226" width="400" height="34" fill="#55524c"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(300, 98, 94, "Jamaica Av") + sign(308, 124, 78, "168 St") +
      '<g class="rs-sp"><circle cx="210" cy="176" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="rs-sp rs-sp2"><circle cx="216" cy="170" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("rs4", "#0e1430", "#7a4a5a"));
  }

  window.SCENES = { rsstop: rsstop, rsjtrain: rsjtrain, rshatton: rshatton, rsshore: rsshore, rscorner: rscorner };
})();
