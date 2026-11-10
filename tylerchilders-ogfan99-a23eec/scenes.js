/* tylerchilders scenes (Regions: More of the South / Genres: country; Louisa, Lawrence County KY). CSS classes prefixed tcy- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tcyglow{0%,100%{opacity:.45}50%{opacity:1}}.tcy-glow{animation:tcyglow 2.4s ease-in-out infinite}.tcy-g2{animation-delay:-1.2s}' +
    '@keyframes tcynote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.tcy-nt{animation:tcynote 3.2s ease-out infinite}.tcy-nt2{animation-delay:-1.1s}.tcy-nt3{animation-delay:-2.2s}' +
    '@keyframes tcysway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.tcy-sw{transform-box:fill-box;transform-origin:50% 100%;animation:tcysway 3.2s ease-in-out infinite}' +
    '@keyframes tcycloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.tcy-cl{animation:tcycloud 14s ease-in-out infinite alternate}' +
    '@keyframes tcycoal{0%{transform:translateX(420px)}100%{transform:translateX(-560px)}}.tcy-coal{animation:tcycoal 10s linear infinite}' +
    '@keyframes tcyripple{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.tcy-rip{animation:tcyripple 3s linear infinite}' +
    '@keyframes tcysnow{0%{transform:translateY(-10px);opacity:0}20%{opacity:1}100%{transform:translateY(70px);opacity:0}}.tcy-sn{animation:tcysnow 4s linear infinite}.tcy-sn2{animation-delay:-1.3s}.tcy-sn3{animation-delay:-2.6s}' +
    '@keyframes tcyblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.tcy-blink{animation:tcyblink 1.6s steps(1) infinite}' +
    '@keyframes tcywave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.6);opacity:0}}.tcy-wave{transform-box:fill-box;transform-origin:50% 50%;animation:tcywave 2s ease-out infinite}.tcy-wave2{animation-delay:-1s}' +
    '@keyframes tcyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tcy-sp{animation:tcyspray 1.4s ease-out infinite}.tcy-sp2{animation-delay:.45s}' +
    '@keyframes tcytwk{0%,100%{opacity:.2}50%{opacity:1}}.tcy-tw{animation:tcytwk 1.8s ease-in-out infinite}.tcy-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="tcy-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const tree = (x, base, h, c) => '<g class="tcy-sw"><rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3322"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.32) + ' ' + (h * 0.55) + 'h-' + (h * 0.14) + 'l' + (h * 0.2) + ' ' + (h * 0.37) + 'h-' + (h * 0.76) + 'l' + (h * 0.2) + ' -' + (h * 0.37) + 'h-' + (h * 0.14) + 'z" fill="' + (c || "#2c5230") + '"/></g>';
  const hills = (y, c1, c2) => '<path d="M0 ' + y + 'q60 -46 120 -20t100 -24t100 20t80 -18v' + (H - y + 40) + 'h-400z" fill="' + c1 + '"/><path d="M0 ' + (y + 22) + 'q70 -30 140 -6t130 -18t130 12v' + (H - y) + 'h-400z" fill="' + c2 + '"/>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  const kyShield = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="44" height="34" rx="4" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 22) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="7" fill="#111">KENTUCKY</text><text x="' + (x + 22) + '" y="' + (y + 30) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#111">' + n + '</text>';
  const GOLD = "#e0b34a", BARN = "#b5432f", FROST = "#7fb3c9", CREAM = "#f2ead8";

  /* 1. KY 32 into Louisa: the green Lawrence County sign, a coal train rolling down the Big Sandy line, eastern Kentucky ridges */
  function tcysign() {
    let trees = "";
    for (let i = 0; i < 11; i++) trees += tree(8 + i * 38, 176, 26 + (i * 7) % 14, i % 2 ? "#2c5230" : "#3a6438");
    let cars = "";
    for (let i = 0; i < 6; i++) cars += '<g transform="translate(' + (90 + i * 76) + ' 0)"><path d="M0 120h70l-6 26h-58z" fill="#2a2a2e"/><path d="M4 120q31 -14 62 0z" fill="#111"/><circle cx="14" cy="148" r="5" fill="#111"/><circle cx="56" cy="148" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tcy1)"/>' +
      '<g class="tcy-cl"><ellipse cx="70" cy="30" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="280" cy="20" rx="40" ry="9" fill="#fff" opacity=".5"/></g>' +
      hills(96, "#5d7a8c", "#4a6b4a") +
      /* rail line and coal train */
      '<rect x="0" y="150" width="400" height="6" fill="#5a4a3a"/><path d="M0 153h400" stroke="#8a8f96" stroke-width="2"/>' +
      '<g class="tcy-coal"><rect x="0" y="116" width="84" height="32" rx="3" fill="#2a4a7a"/><rect x="56" y="104" width="24" height="16" fill="#2a4a7a"/><rect x="60" y="108" width="16" height="8" fill="#bfe2f0"/><rect x="0" y="134" width="84" height="4" fill="' + GOLD + '"/><circle cx="14" cy="148" r="5" fill="#111"/><circle cx="70" cy="148" r="5" fill="#111"/>' + cars + '</g>' +
      trees +
      '<rect x="0" y="176" width="400" height="84" fill="#46494e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* green guide sign on two posts */
      '<rect x="176" y="96" width="6" height="80" fill="#9aa0a6"/><rect x="330" y="96" width="6" height="80" fill="#9aa0a6"/>' +
      '<rect x="150" y="20" width="214" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="257" y="56" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">Louisa</text>' +
      '<text x="257" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="1">LAWRENCE COUNTY</text>' +
      kyShield(64, 110, "32") + '<rect x="84" y="144" width="4" height="32" fill="#9aa0a6"/>',
      sky("tcy1", "#6fa8d8", "#e8eef0"));
  }

  /* 2. Red Barn Radio, Lexington: the red barn with white trim, an ON AIR light and a radio mast, a banjo and fiddle on hay bales */
  function tcybarn() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcy2)"/>' +
      star(40, 26, 2.2, "#fff", "tcy-tw") + star(330, 18, 2, "#fff", "tcy-tw tcy-tw2") + star(260, 34, 1.8, "#fff", "tcy-tw") +
      '<path d="M0 170q100 -26 200 -6t200 -10v106h-400z" fill="#3a5a2a"/>' +
      /* white plank fence */
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="182" width="5" height="34" fill="#f2f2ee"/>').join("") + '<rect x="0" y="188" width="400" height="5" fill="#f2f2ee"/><rect x="0" y="202" width="400" height="5" fill="#f2f2ee"/>' +
      /* radio mast */
      '<path d="M330 170l12 -130l12 130z" fill="none" stroke="#9aa0a6" stroke-width="2"/><path d="M334 140h16M337 110h10M339 80h6" stroke="#9aa0a6" stroke-width="1.5"/><circle cx="342" cy="38" r="4" fill="#e04040" class="tcy-blink"/>' +
      '<circle cx="342" cy="38" r="10" fill="none" stroke="' + FROST + '" stroke-width="2" class="tcy-wave"/><circle cx="342" cy="38" r="10" fill="none" stroke="' + FROST + '" stroke-width="2" class="tcy-wave tcy-wave2"/>' +
      /* barn */
      '<path d="M90 190v-86l30 -40h120l30 40v86z" fill="' + BARN + '"/><path d="M90 104l30 -40h120l30 40" stroke="#f2f2ee" stroke-width="5" fill="none"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (100 + i * 16) + ' 106v84" stroke="#8a2e20" stroke-width="1.2" opacity=".6"/>').join("") +
      '<rect x="146" y="130" width="68" height="60" fill="#7a2418" stroke="#f2f2ee" stroke-width="4"/><path d="M146 130l68 60M214 130l-68 60" stroke="#f2f2ee" stroke-width="3"/>' +
      '<rect x="160" y="78" width="40" height="22" fill="#2a1a10" stroke="#f2f2ee" stroke-width="3"/><path class="tcy-glow" d="M164 82h32v14h-32z" fill="' + GOLD + '" opacity=".8"/>' +
      '<rect x="124" y="108" width="112" height="16" rx="2" fill="#1a1210"/><text x="180" y="120" text-anchor="middle" ' + font + ' font-size="10" fill="#e04040" class="tcy-blink">ON AIR</text>' +
      /* hay bales with banjo and fiddle */
      '<rect x="20" y="210" width="70" height="30" rx="4" fill="#d8b44a"/><path d="M24 218h62M24 226h62M24 234h62" stroke="#b8942a" stroke-width="1.5"/>' +
      '<g transform="rotate(-20 52 204)"><circle cx="52" cy="210" r="13" fill="#f2ead8" stroke="#5a3418" stroke-width="3"/><rect x="50" y="160" width="4" height="40" fill="#4a2e18"/></g>' +
      '<rect x="300" y="214" width="70" height="28" rx="4" fill="#d8b44a"/><path d="M304 222h62M304 230h62" stroke="#b8942a" stroke-width="1.5"/>' +
      '<g transform="rotate(30 334 206)"><path d="M326 214q-8 -6 -2 -12q-4 -6 4 -10q8 -2 10 6q6 4 0 10q4 8 -6 10q-4 0 -6 -4z" fill="#a8562a" stroke="#4a2410" stroke-width="2"/><rect x="332" y="170" width="3" height="24" fill="#2a1a10"/></g>' +
      note(240, 70, GOLD, "") + note(70, 150, "#fff", "tcy-nt2") + note(290, 120, FROST, "tcy-nt3"),
      sky("tcy2", "#141c38", "#5a4a6a"));
  }

  /* 3. Huntington, WV, where he came up playing: Heritage Station, the red-brick B&O depot, a red caboose on the siding */
  function tcydepot() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcy3)"/>' +
      '<g class="tcy-cl"><ellipse cx="100" cy="32" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="34" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<g fill="#7a8a9a"><rect x="0" y="90" width="40" height="70"/><rect x="44" y="70" width="30" height="90"/><rect x="330" y="80" width="34" height="80"/><rect x="368" y="96" width="32" height="64"/></g>' +
      bricks(80, 96, 240, 84, "#9a3a28", "#5a1e14") +
      '<path d="M70 98l40 -28h180l40 28z" fill="#5a3a2a"/><path d="M66 98h268" stroke="#e8dcc8" stroke-width="4"/>' +
      '<path d="M176 70v-16h48v16z" fill="#5a3a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (96 + i * 38) + ' 172v-44q11 -14 22 0v44z" fill="#2a1a1a"/><path class="tcy-glow ' + (i % 2 ? "tcy-g2" : "") + '" d="M' + (99 + i * 38) + ' 168v-38q8 -10 16 0v38z" fill="' + GOLD + '" opacity=".6"/>').join("") +
      '<rect x="120" y="104" width="160" height="16" fill="#e8dcc8"/><text x="200" y="116" text-anchor="middle" ' + font + ' font-size="10" fill="#5a1e14" letter-spacing="2">HERITAGE STATION</text>' +
      /* platform, track and caboose */
      '<rect x="0" y="180" width="400" height="14" fill="#9a948a"/><rect x="0" y="194" width="400" height="66" fill="#5a5048"/>' +
      '<path d="M0 222h400M0 232h400" stroke="#8a8f96" stroke-width="3"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="218" width="8" height="18" fill="#4a3a2a"/>').join("") +
      '<g transform="translate(220 0)"><rect x="0" y="182" width="120" height="34" rx="2" fill="#c0302a"/><rect x="40" y="166" width="40" height="18" fill="#c0302a"/><rect x="46" y="170" width="12" height="9" fill="#ffe8a0" class="tcy-glow"/><rect x="62" y="170" width="12" height="9" fill="#ffe8a0" class="tcy-glow tcy-g2"/>' +
      '<rect x="12" y="190" width="14" height="14" fill="#ffe8a0"/><rect x="94" y="190" width="14" height="14" fill="#ffe8a0"/><path d="M0 182h120" stroke="#f2ead8" stroke-width="2"/><circle cx="24" cy="222" r="8" fill="#111"/><circle cx="96" cy="222" r="8" fill="#111"/></g>' +
      note(60, 170, GOLD, "") + note(170, 70, "#fff", "tcy-nt2"),
      sky("tcy3", "#5a9ad0", "#f0dcc0"));
  }

  /* 4. Mountain Arts Center, Prestonsburg: the stone-and-glass hall in the hills, the marquee lit, snow falling (shake the frost) */
  function tcymac() {
    let trees = "";
    for (let i = 0; i < 12; i++) trees += tree(6 + i * 35, 122, 22 + (i * 9) % 12, i % 2 ? "#1f3a26" : "#284a2e");
    return svg(
      '<rect width="400" height="260" fill="url(#tcy4)"/>' +
      star(40, 26, 2.2, "#fff", "tcy-tw") + star(170, 16, 2, "#fff", "tcy-tw tcy-tw2") + star(360, 30, 2.4, "#fff", "tcy-tw") +
      '<path d="M0 120q60 -54 130 -36t120 -30t150 30v40h-400z" fill="#2c3a52"/>' + trees +
      /* stone base, glass atrium */
      '<rect x="60" y="122" width="280" height="80" fill="#8c8478"/>' + Array.from({ length: 5 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (62 + c * 20 + (r % 2) * 10) + '" y="' + (124 + r * 16) + '" width="18" height="14" rx="2" fill="#a09888"/>').join("")).join("") +
      '<path d="M140 202v-104l60 -26l60 26v104z" fill="#1a2a3a" stroke="#cfd6dc" stroke-width="3"/>' +
      '<path class="tcy-glow" d="M146 200v-98l54 -22l54 22v98z" fill="' + GOLD + '" opacity=".55"/>' +
      '<path d="M200 80v120M146 130h108M146 160h108M173 92v108M227 92v108" stroke="#1a2a3a" stroke-width="2"/>' +
      '<rect x="80" y="104" width="54" height="16" rx="2" fill="#1a1210"/><text x="107" y="115" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '">MOUNTAIN ARTS</text>' +
      '<rect x="266" y="104" width="54" height="16" rx="2" fill="#1a1210"/><text x="293" y="115" text-anchor="middle" ' + font + ' font-size="6.5" fill="' + GOLD + '" class="tcy-glow">TONIGHT</text>' +
      '<rect x="0" y="202" width="400" height="58" fill="#e8eef2"/><rect x="0" y="200" width="400" height="4" fill="#fff"/>' +
      '<path d="M0 230q100 -6 200 0t200 0" stroke="#cfd8de" stroke-width="2" fill="none"/>' +
      [[40, 0], [110, 1], [180, 2], [250, 0], [320, 1], [370, 2], [80, 2], [290, 0]].map(p => '<circle cx="' + p[0] + '" cy="' + (60 + (p[0] % 50)) + '" r="2.2" fill="#fff" class="tcy-sn ' + ["", "tcy-sn2", "tcy-sn3"][p[1]] + '"/>').join(""),
      sky("tcy4", "#0f1838", "#4a5a7a"));
  }

  /* 5. His corner in Louisa: Main Cross St and Main St by the courthouse, a block wall tagged CHILDERS, the Point where the Levisa and Tug Forks make the Big Sandy, the bridge to Fort Gay */
  function tcycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tcy5)"/>' +
      '<circle cx="110" cy="40" r="16" fill="#ffe0a0" opacity=".9"/>' +
      '<path d="M0 110q50 -40 110 -26t110 -24t110 22t70 -6v60h-400z" fill="#3a4a5a"/><path d="M0 124q70 -24 150 -6t140 -14t110 8v40h-400z" fill="#2f4a36"/>' +
      /* rivers meeting at the Point */
      '<path d="M0 132h400v30h-400z" fill="#3b5f86"/><path d="M190 132l40 -12h170v12z" fill="#4a6f96"/><path d="M200 162l-30 -30" stroke="#2f4a36" stroke-width="10"/>' +
      '<g class="tcy-rip"><path d="M0 142h30M50 150h40M120 140h30M240 146h50M300 154h40M380 140h40" stroke="#9cc4e4" stroke-width="1.5" opacity=".6"/></g>' +
      /* steel truss bridge */
      '<path d="M250 120h150" stroke="#5a6a7a" stroke-width="3"/><path d="M250 120l15 -16l15 16l15 -16l15 16l15 -16l15 16l15 -16l15 16l15 -16l15 16" stroke="#5a6a7a" stroke-width="2" fill="none"/><path d="M265 104h135" stroke="#5a6a7a" stroke-width="2"/>' +
      /* block wall */
      '<rect x="0" y="162" width="400" height="60" fill="#8c8478"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (172 + i * 10) + 'h400" stroke="#6a6258" stroke-width="1"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20 + ((i % 2) * 10)) + ' 162v60" stroke="#6a6258" stroke-width=".7" opacity=".6"/>').join("") +
      '<rect x="0" y="158" width="400" height="5" fill="#d8d0c0"/>' +
      tag("CHILDERS", 14, 206, 32, GOLD, -5) + tag("HICKMAN HOLLER", 196, 194, 15, FROST, -4) + tag("KY", 214, 214, 16, CREAM, -3) +
      '<g class="tcy-sp"><circle cx="164" cy="188" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tcy-sp tcy-sp2"><circle cx="170" cy="182" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="66" width="6" height="156" fill="#2f2f2f"/>' + sign(278, 66, 118, "MAIN CROSS ST") + sign(298, 92, 98, "MAIN ST"),
      sky("tcy5", "#1a2448", "#d88a5a"));
  }

  window.SCENES = { tcysign: tcysign, tcybarn: tcybarn, tcydepot: tcydepot, tcymac: tcymac, tcycorner: tcycorner };
})();
