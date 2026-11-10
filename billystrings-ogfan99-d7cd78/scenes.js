/* billystrings scenes (Regions: Detroit [Michigan] / Genres: bluegrass-country; Muir + Ionia, Ionia County MI; Traverse City). CSS classes prefixed bsx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bsxglow{0%,100%{opacity:.45}50%{opacity:1}}.bsx-glow{animation:bsxglow 2.4s ease-in-out infinite}.bsx-g2{animation-delay:-1.2s}' +
    '@keyframes bsxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.bsx-nt{animation:bsxnote 3.2s ease-out infinite}.bsx-nt2{animation-delay:-1.1s}.bsx-nt3{animation-delay:-2.2s}' +
    '@keyframes bsxcloud{0%{transform:translateX(0)}100%{transform:translateX(46px)}}.bsx-cl{animation:bsxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes bsxripple{0%{transform:translateX(0)}100%{transform:translateX(-30px)}}.bsx-rip{animation:bsxripple 2.4s linear infinite}' +
    '@keyframes bsxspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.bsx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bsxspin 12s linear infinite}' +
    '@keyframes bsxblink{0%,60%,100%{opacity:1}70%,90%{opacity:.15}}.bsx-blink{animation:bsxblink 1.6s steps(1) infinite}' +
    '@keyframes bsxsail{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.bsx-sail{animation:bsxsail 9s ease-in-out infinite}' +
    '@keyframes bsxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bsx-sp{animation:bsxspray 1.4s ease-out infinite}.bsx-sp2{animation-delay:.45s}' +
    '@keyframes bsxtwk{0%,100%{opacity:.2}50%{opacity:1}}.bsx-tw{animation:bsxtwk 1.8s ease-in-out infinite}.bsx-tw2{animation-delay:-.9s}' +
    '@keyframes bsxdrive{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.bsx-car{animation:bsxdrive 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="bsx-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const star = (x, y, r, c, cls) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return '<path d="' + p + 'z" fill="' + c + '" class="' + (cls || "") + '"/>'; };
  const tree = (x, base, h, c) => '<rect x="' + (x - 2) + '" y="' + (base - 8) + '" width="4" height="8" fill="#4a3322"/><path d="M' + x + ' ' + (base - h) + 'l' + (h * 0.32) + ' ' + (h * 0.55) + 'h-' + (h * 0.14) + 'l' + (h * 0.2) + ' ' + (h * 0.37) + 'h-' + (h * 0.76) + 'l' + (h * 0.2) + ' -' + (h * 0.37) + 'h-' + (h * 0.14) + 'z" fill="' + (c || "#2c5230") + '"/>';
  const oak = (x, base, r, c) => '<rect x="' + (x - 3) + '" y="' + (base - r) + '" width="6" height="' + r + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (base - r * 1.4) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * 0.6) + '" cy="' + (base - r) + '" r="' + (r * 0.7) + '" fill="' + c + '"/><circle cx="' + (x + r * 0.6) + '" cy="' + (base - r) + '" r="' + (r * 0.7) + '" fill="' + c + '"/>';
  const bricks = (x, y, w, h, base, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 7; yy < y + h; yy += 7) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width=".8" opacity=".55"/>'; return s; };
  const miShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40v4l-4 4v22l-16 8l-16 -8v-22l-4 -4z" fill="#fff" stroke="#111" stroke-width="2"/><text x="' + (x + 20) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="9" fill="#111">M</text><text x="' + (x + 20) + '" y="' + (y + 29) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#111">' + n + '</text>';
  const GOLD = "#e8b84a", RUST = "#c0582a", BLUE = "#4a8ac8", CREAM = "#f2ead8";

  /* 1. M-21 along the Grand River into Muir, Ionia County: the green guide sign, a pickup rolling by, farm fields and woods */
  function bsxsign() {
    let trees = "";
    for (let i = 0; i < 12; i++) trees += oak(10 + i * 36, 160, 10 + (i * 5) % 7, i % 2 ? "#3a6a34" : "#467a3c");
    return svg(
      '<rect width="400" height="260" fill="url(#bsx1)"/>' +
      '<g class="bsx-cl"><ellipse cx="70" cy="30" rx="36" ry="9" fill="#fff" opacity=".6"/><ellipse cx="290" cy="22" rx="40" ry="9" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 140q100 -14 200 -4t200 -6v40h-400z" fill="#8aa85a"/>' + trees +
      Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (164 + i * 2) + 'h400" stroke="#a8b86a" stroke-width=".6" opacity=".5"/>').join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#46494e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* pickup rolling */
      '<g class="anim-train"><g class="bsx-car"><path d="M0 230v-16h30l10 -12h26l8 12h16v16z" fill="' + RUST + '" stroke="#2a1208" stroke-width="1.5"/><rect x="44" y="205" width="18" height="8" fill="#bfe2f0"/><circle cx="20" cy="232" r="7" fill="#111"/><circle cx="74" cy="232" r="7" fill="#111"/></g></g>' +
      /* green guide sign */
      '<rect x="176" y="96" width="6" height="80" fill="#9aa0a6"/><rect x="330" y="96" width="6" height="80" fill="#9aa0a6"/>' +
      '<rect x="146" y="18" width="222" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="257" y="50" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Muir</text>' +
      '<text x="257" y="72" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Grand River</text>' +
      '<text x="257" y="92" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="1">IONIA COUNTY</text>' +
      miShield(60, 100, "21") + '<rect x="78" y="138" width="4" height="38" fill="#9aa0a6"/>',
      sky("bsx1", "#6fa8d8", "#eef0e0"));
  }

  /* 2. The Grand River at Muir, the old mill-town dam spilling over, the bridge, a banjo on the bank */
  function bsxriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#bsx2)"/>' +
      '<circle cx="320" cy="44" r="18" fill="#fff4c8" opacity=".9"/>' +
      '<path d="M0 110q80 -30 160 -10t140 -16t100 10v40h-400z" fill="#5a7a4a"/>' +
      Array.from({ length: 10 }, (_, i) => tree(14 + i * 42, 132, 26 + (i * 7) % 12, i % 2 ? "#2c5230" : "#365e34")).join("") +
      '<rect x="0" y="130" width="400" height="130" fill="#3b6286"/>' +
      /* dam spillway */
      '<rect x="0" y="150" width="400" height="10" fill="#8a8a82"/>' +
      '<g class="bsx-rip"><path d="M0 162h30M40 166h40M100 162h30M150 168h40M210 162h30M260 166h50M330 162h30M380 166h40" stroke="#e8f4ff" stroke-width="3" opacity=".8"/></g>' +
      '<g class="bsx-rip"><path d="M10 190h40M80 200h50M170 186h40M240 206h60M320 194h50M30 226h60M150 236h50M280 230h60" stroke="#9cc4e4" stroke-width="1.5" opacity=".6"/></g>' +
      /* steel bridge */
      '<rect x="0" y="116" width="400" height="6" fill="#5a6a7a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 116l20 -20l20 20" stroke="#5a6a7a" stroke-width="2.5" fill="none"/>').join("") + '<path d="M0 96h400" stroke="#5a6a7a" stroke-width="2.5"/>' +
      '<rect x="20" y="122" width="8" height="30" fill="#6a6a62"/><rect x="200" y="122" width="8" height="30" fill="#6a6a62"/><rect x="372" y="122" width="8" height="30" fill="#6a6a62"/>' +
      /* bank with banjo */
      '<path d="M0 260v-30q60 -10 130 4v26z" fill="#6a5a3a"/>' +
      '<g transform="rotate(-30 70 236)"><circle cx="70" cy="236" r="15" fill="' + CREAM + '" stroke="#5a3418" stroke-width="3"/><circle cx="70" cy="236" r="5" fill="none" stroke="#a88a5a" stroke-width="1"/><rect x="68" y="176" width="4" height="46" fill="#4a2e18"/><rect x="66" y="170" width="8" height="10" rx="2" fill="#2a1a10"/></g>' +
      note(140, 120, GOLD, "") + note(260, 90, "#fff", "bsx-nt2") + note(340, 140, GOLD, "bsx-nt3"),
      sky("bsx2", "#5a94cc", "#f2d8b0"));
  }

  /* 3. The Ionia Free Fair grounds, where he threw his hometown Freak Fair: the Ferris wheel turning, the midway lights, the grandstand */
  function bsxfair() {
    let spokes = "", cars = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; spokes += '<path d="M0 0L' + (70 * Math.cos(a)).toFixed(1) + ' ' + (70 * Math.sin(a)).toFixed(1) + '" stroke="#e8e4dc" stroke-width="2"/>'; cars += '<circle cx="' + (70 * Math.cos(a)).toFixed(1) + '" cy="' + (70 * Math.sin(a)).toFixed(1) + '" r="5" fill="' + [RUST, GOLD, BLUE][i % 3] + '"/>'; }
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle cx="' + (10 + i * 22) + '" cy="' + (176 + (i % 2) * 3) + '" r="2.5" fill="#ffd27a" class="bsx-glow' + (i % 2 ? " bsx-g2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bsx3)"/>' +
      star(40, 22, 2, "#fff", "bsx-tw") + star(200, 14, 2, "#fff", "bsx-tw bsx-tw2") + star(360, 28, 2.2, "#fff", "bsx-tw") +
      '<g transform="translate(110 100)"><g class="bsx-spin"><circle r="70" fill="none" stroke="#e8e4dc" stroke-width="3"/><circle r="40" fill="none" stroke="#e8e4dc" stroke-width="1.5"/>' + spokes + cars + '</g><circle r="6" fill="' + GOLD + '"/></g>' +
      '<path d="M110 100l-40 80M110 100l40 80" stroke="#cfc8bc" stroke-width="4"/>' +
      /* grandstand */
      '<path d="M220 180v-60l160 -20v80z" fill="#6a6a72"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M222 ' + (128 + i * 9) + 'l156 ' + (-18 + i * 2) + '" stroke="#4a4a52" stroke-width="2"/>').join("") +
      '<path d="M214 120l170 -24v-8l-170 22z" fill="' + RUST + '"/>' +
      '<rect x="236" y="62" width="128" height="22" rx="3" fill="#1a1210"/><text x="300" y="78" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" class="bsx-blink">FREAK FAIR</text>' +
      '<rect x="296" y="84" width="4" height="12" fill="#6a6a72"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#4a5a3a"/>' + bulbs +
      /* midway tents */
      '<path d="M20 214l26 -24l26 24z" fill="' + CREAM + '"/><path d="M33 214l13 -24l13 24z" fill="' + RUST + '"/><rect x="20" y="214" width="52" height="16" fill="' + CREAM + '"/>' +
      '<path d="M320 222l30 -26l30 26z" fill="' + CREAM + '"/><path d="M335 222l15 -26l15 26z" fill="' + BLUE + '"/><rect x="320" y="222" width="60" height="16" fill="' + CREAM + '"/>' +
      note(180, 150, GOLD, "") + note(240, 200, "#fff", "bsx-nt2") + note(60, 170, GOLD, "bsx-nt3"),
      sky("bsx3", "#141a3a", "#5a4a6a"));
  }

  /* 4. Traverse City, where he and Don Julin picked as a duo: Grand Traverse Bay, the lighthouse on the point, a sailboat, cherry trees */
  function bsxbay() {
    const cherry = (x, b) => '<rect x="' + (x - 2) + '" y="' + (b - 14) + '" width="4" height="14" fill="#4a3322"/><circle cx="' + x + '" cy="' + (b - 22) + '" r="12" fill="#3a7a3a"/>' + [[-6, -24], [4, -28], [7, -18], [-3, -16], [0, -22]].map(p => '<circle cx="' + (x + p[0]) + '" cy="' + (b + p[1]) + '" r="2" fill="#c0202a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bsx4)"/>' +
      '<g class="bsx-cl"><ellipse cx="90" cy="30" rx="40" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="40" rx="36" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 110q60 -10 120 -4t120 -8t160 6v10h-400z" fill="#5a7a6a"/>' +
      '<rect x="0" y="112" width="400" height="90" fill="#2f74b0"/>' +
      '<g class="bsx-rip"><path d="M0 130h40M60 140h50M150 128h40M230 150h60M310 136h50M20 170h60M140 180h50M260 176h60" stroke="#bfe0f4" stroke-width="1.5" opacity=".6"/></g>' +
      /* point with lighthouse */
      '<path d="M290 132q40 -14 110 -10v14z" fill="#c8b88a"/>' +
      '<path d="M336 124l4 -46h12l4 46z" fill="#f2f2ee" stroke="#8a8a82" stroke-width="1"/><rect x="336" y="70" width="20" height="10" fill="#c0302a"/><rect x="339" y="72" width="14" height="6" fill="#ffe8a0" class="bsx-glow"/><path d="M334 70l12 -8l12 8z" fill="#c0302a"/>' +
      /* sailboat */
      '<g class="bsx-sail"><path d="M90 150h50l-6 8h-38z" fill="#f2f2ee"/><rect x="113" y="104" width="2" height="46" fill="#5a3a20"/><path d="M115 106l22 40h-22z" fill="' + CREAM + '"/><path d="M112 112l-16 34h16z" fill="' + RUST + '"/></g>' +
      /* beach and cherry orchard */
      '<path d="M0 202q100 -12 200 -4t200 -4v66h-400z" fill="#e8d8a8"/>' +
      cherry(40, 238) + cherry(90, 244) + cherry(310, 242) + cherry(360, 236) +
      '<rect x="150" y="214" width="96" height="20" rx="2" fill="#5a3a20"/><text x="198" y="228" text-anchor="middle" ' + font + ' font-size="9" fill="' + CREAM + '">TRAVERSE CITY</text><rect x="160" y="234" width="4" height="16" fill="#5a3a20"/><rect x="232" y="234" width="4" height="16" fill="#5a3a20"/>' +
      note(200, 90, "#fff", "") + note(60, 120, GOLD, "bsx-nt2"),
      sky("bsx4", "#5aa0d8", "#e8f0f0"));
  }

  /* 5. His corner in Ionia: Main St and Dexter St, a brick wall tagged BILLY STRINGS, the Ionia County Courthouse dome behind */
  function bsxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bsx5)"/>' +
      '<circle cx="80" cy="40" r="16" fill="#ffe0a0" opacity=".9"/>' +
      /* courthouse: red-brown sandstone, columns, dome */
      '<g transform="translate(130 0)"><rect x="0" y="96" width="140" height="56" fill="#a8604a"/><path d="M-4 96h148" stroke="#7a3a2a" stroke-width="3"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 22) + '" y="104" width="6" height="44" fill="#c8846a"/>').join("") +
      '<path d="M30 96l40 -18l40 18z" fill="#a8604a" stroke="#7a3a2a" stroke-width="2"/>' +
      '<rect x="48" y="58" width="44" height="22" fill="#a8604a"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (52 + i * 8) + '" y="62" width="3" height="16" fill="#7a3a2a"/>').join("") +
      '<path d="M46 58q0 -30 24 -32q24 2 24 32z" fill="#5a8a7a"/><rect x="66" y="16" width="8" height="10" fill="#a8604a"/><path d="M64 16q6 -8 12 0z" fill="#5a8a7a"/><rect x="69" y="4" width="2" height="6" fill="' + GOLD + '"/>' +
      '<circle cx="70" cy="70" r="5" fill="#f2ead8" class="bsx-glow"/></g>' +
      '<g fill="#5a6470"><rect x="20" y="104" width="50" height="48"/><rect x="300" y="96" width="60" height="56"/></g>' +
      bricks(0, 152, 400, 70, "#8a4a34", "#4a2418") +
      '<rect x="0" y="148" width="400" height="5" fill="#d8d0c0"/>' +
      tag("BILLY STRINGS", 14, 196, 28, GOLD, -5) + tag("BILLY GOATS", 30, 216, 13, CREAM, -3) + tag("MUIR MI", 190, 214, 13, BLUE, -4) +
      '<g class="bsx-sp"><circle cx="254" cy="196" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bsx-sp bsx-sp2"><circle cx="260" cy="190" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="64" width="6" height="158" fill="#2f2f2f"/>' + sign(296, 64, 102, "MAIN ST") + sign(296, 90, 102, "DEXTER ST"),
      sky("bsx5", "#1a2448", "#d88a5a"));
  }

  window.SCENES = { bsxsign: bsxsign, bsxriver: bsxriver, bsxfair: bsxfair, bsxbay: bsxbay, bsxcorner: bsxcorner };
})();
