/* trickdaddy scenes (Regions tab: South Florida; Liberty City, Miami). CSS classes and ids prefixed td- (the page's own anim-train is kept).
   1 Metrorail at Brownsville (NW 27 Av & NW 52 St), the elevated stop on the west side of Liberty City where the Green and Orange Lines share the tracks.
   2 Sunday's Eatery, Miami Gardens: his soul food spot, a Sunday dinner plate (collards, mac and cheese, cornbread) steaming under the awning.
   3 Hard Rock Stadium, Miami Gardens: the white canopy over the aqua seats, fireworks and the crowd on its feet (Let's Go, the stadium anthem).
   4 NW 7th Av in Liberty City: the long Liberty City history mural, a candy-apple-green Chevy on big rims rolling past (Represent, Dade County ride).
   5 NW 69 Ter and NW 18 Av: green signs plus the co-named "Trick Love the Kids St" sign, TRICK DADDY tagged on the stucco wall, Brickell's towers behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tdsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.td-palm{transform-box:fill-box;transform-origin:50% 100%;animation:tdsway 3.2s ease-in-out infinite}.td-palm2{animation-delay:-1.6s}' +
    '@keyframes tdcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.td-cloud{animation:tdcloud 26s linear infinite}.td-cloud2{animation-delay:-13s}' +
    '@keyframes tdsteam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-34px);opacity:0}}.td-st{animation:tdsteam 2.4s ease-out infinite}.td-st2{animation-delay:-.8s}.td-st3{animation-delay:-1.6s}' +
    '@keyframes tdfw{0%{transform:scale(.1);opacity:1}80%{opacity:1}100%{transform:scale(1);opacity:0}}.td-fw{transform-box:fill-box;transform-origin:50% 50%;animation:tdfw 1.8s ease-out infinite}.td-fw2{animation-delay:-.6s}.td-fw3{animation-delay:-1.2s}' +
    '@keyframes tdjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.td-cr{animation:tdjump .6s ease-in-out infinite}.td-cr2{animation-delay:-.3s}' +
    '@keyframes tdcar{from{transform:translateX(-260px)}to{transform:translateX(420px)}}.td-car{animation:tdcar 7s linear infinite;animation-delay:-3.5s}' +
    '@keyframes tdspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.td-rim{transform-box:fill-box;transform-origin:50% 50%;animation:tdspin .5s linear infinite}' +
    '@keyframes tdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.td-sp{animation:tdspray 1.4s ease-out infinite}.td-sp2{animation-delay:.45s}' +
    '@keyframes tdblink{0%,100%{opacity:.35}50%{opacity:1}}.td-bl{animation:tdblink 1.8s ease-in-out infinite}.td-bl2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const pill = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 13) + '" fill="#fff">' + txt + '</text>';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.6 - 12) + '" y="' + (y - 12) + '" width="' + (txt.length * 7.2 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => {
    const trunk = '<path d="M' + x + ' ' + base + 'q' + (h * 0.12) + ' ' + (-h * 0.5) + ' ' + (h * 0.04) + ' ' + (-h) + '" stroke="#8a6a48" stroke-width="' + (h * 0.07) + '" fill="none" stroke-linecap="round"/>';
    const tx = x + h * 0.04, ty = base - h;
    const fr = [[-1, -0.1], [-0.8, 0.35], [-0.3, -0.45], [0.3, -0.45], [0.8, 0.35], [1, -0.1]].map(f => '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * h * 0.3) + ' ' + (-h * 0.22 + f[1] * h * 0.1) + ' ' + (f[0] * h * 0.55) + ' ' + (f[1] * h * 0.35 + h * 0.05) + '" stroke="#2f7a3a" stroke-width="' + (h * 0.06) + '" fill="none" stroke-linecap="round"/>').join("");
    return '<g>' + trunk + '<g class="td-palm ' + (cls || "") + '">' + fr + '</g></g>';
  };
  const MRG = "#00a651", MRO = "#f7941d", CANDY = "#41d66b", GOLD = "#ffb627", RED = "#ff5a3c", AQUA = "#00b2a9";

  /* 1. Metrorail, Brownsville (elevated, Green + Orange) */
  function tdstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="98" width="30" height="20" rx="3" fill="#24323e"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="88" width="340" height="50" rx="8" fill="#d9dee3" stroke="#8a939c" stroke-width="2"/>' + win +
      '<rect x="24" y="122" width="340" height="5" fill="' + MRG + '"/><rect x="24" y="128" width="340" height="3" fill="' + MRO + '"/>' +
      '<rect x="340" y="94" width="20" height="30" rx="3" fill="#2b3640"/><circle cx="360" cy="130" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tds1)"/>' +
      '<circle cx="76" cy="48" r="20" fill="#fff1b8" opacity=".9"/>' +
      '<g class="td-cloud"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".7"/></g><g class="td-cloud td-cloud2"><ellipse cx="40" cy="62" rx="22" ry="6" fill="#fff" opacity=".55"/></g>' +
      '<g fill="#7a8fa6" opacity=".5"><rect x="150" y="56" width="40" height="44"/><rect x="196" y="66" width="30" height="34"/><rect x="250" y="50" width="46" height="50"/></g>' +
      palm(16, 150, 92) + palm(390, 150, 84, "td-palm2") +
      '<path d="M30 68h340" stroke="#d6d0c4" stroke-width="7"/><path d="M60 68v20M200 68v20M340 68v20" stroke="#bdb6aa" stroke-width="4"/>' +
      '<rect x="0" y="138" width="400" height="14" fill="#bdb6aa"/><rect x="0" y="150" width="400" height="5" fill="#8f897e"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 9) + '" y="155" width="18" height="70" fill="#cfc8bb"/><path d="M' + (x - 22) + ' 155h44l-13 12h-18z" fill="#bdb6aa"/>').join("") +
      train +
      '<rect x="0" y="225" width="400" height="35" fill="#6a6c70"/><path d="M0 242h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      '<rect x="92" y="164" width="216" height="50" rx="3" fill="#111"/><text x="104" y="184" ' + font + ' font-size="16" fill="#fff">Brownsville</text><text x="104" y="203" ' + font + ' font-size="10" fill="#cfd8e0">Metrorail · NW 27 Av</text>' +
      pill(222, 180, "GREEN", MRG) + pill(222, 201, "ORANGE", MRO),
      sky("tds1", "#2f8fd6", "#bfe6fb"));
  }

  /* 2. Sunday's Eatery, Miami Gardens: Sunday dinner */
  function tdeatery() {
    const awning = Array.from({ length: 10 }, (_, i) => '<path d="M' + (40 + i * 32) + ' 54h32v22q-16 10 -32 0z" fill="' + (i % 2 ? "#fff6e8" : RED) + '"/>').join("");
    const steam = [170, 200, 232].map((x, i) => '<path class="td-st' + (i ? " td-st" + (i + 1) : "") + '" d="M' + x + ' 182q-6 -10 0 -18q6 -8 0 -18" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>').join("");
    const plate = '<ellipse cx="200" cy="196" rx="96" ry="30" fill="#f4f1ea" stroke="#c9c2b4" stroke-width="2"/><ellipse cx="200" cy="194" rx="74" ry="21" fill="#fbf9f4"/>' +
      '<g>' + [[160, 186], [170, 196], [152, 196], [164, 204]].map(p => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="16" ry="8" fill="#2f6a2a"/>').join("") + '</g>' +
      '<g>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (196 + (i % 4) * 8) + '" y="' + (182 + Math.floor(i / 4) * 7) + '" width="8" height="5" rx="2.5" fill="#f2b632" stroke="#c98a12" stroke-width=".8"/>').join("") + '</g>' +
      '<path d="M236 184l26 -4 6 18 -28 6z" fill="#e8b04a" stroke="#a8742a" stroke-width="1.5"/><path d="M242 190l18 -3" stroke="#c98a2a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tds2)"/>' +
      '<rect x="30" y="40" width="340" height="140" fill="#f3d9a8"/><rect x="30" y="40" width="340" height="14" fill="#5a3a22"/>' + awning +
      '<text x="200" y="50" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe7b0" letter-spacing="3">SUNDAY DINNER</text>' +
      '<rect x="60" y="88" width="90" height="62" fill="#3a5a6e"/><rect x="250" y="88" width="90" height="62" fill="#3a5a6e"/><path d="M105 88v62M295 88v62" stroke="#f3d9a8" stroke-width="3"/>' +
      '<rect x="172" y="92" width="56" height="88" fill="#6a3f22"/><circle cx="218" cy="138" r="3" fill="' + GOLD + '"/>' +
      palm(18, 182, 100) + palm(384, 182, 92, "td-palm2") +
      '<rect x="0" y="170" width="400" height="90" fill="#7a4a2e"/><path d="M0 170h400" stroke="#5a3420" stroke-width="4"/>' +
      plate + steam +
      '<path d="M90 212l-6 -26h22l-6 26z" fill="#e9f3f7" opacity=".85"/><rect x="86" y="190" width="18" height="12" fill="#c8732a" opacity=".85"/>' +
      label("SUNDAY'S EATERY · MIAMI GARDENS", 252),
      sky("tds2", "#4fb3e8", "#d6f0fb"));
  }

  /* 3. Hard Rock Stadium, Miami Gardens: fireworks, crowd on its feet */
  function tdstadium() {
    let crowd = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 40; i++) crowd += '<circle class="td-cr' + ((i + r) % 2 ? " td-cr2" : "") + '" cx="' + (6 + i * 10 + (r % 2) * 5) + '" cy="' + (150 + r * 10) + '" r="3.6" fill="' + ((i * 3 + r) % 4 === 0 ? "#fff" : (i + r) % 3 ? AQUA : "#f58220") + '"/>';
    const fw = (x, y, c, cls) => '<g class="td-fw ' + cls + '"><g transform="translate(' + x + ' ' + y + ')">' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M0 0L' + (Math.cos(a) * 26).toFixed(1) + ' ' + (Math.sin(a) * 26).toFixed(1) + '" stroke="' + c + '" stroke-width="2.5" stroke-linecap="round"/>'; }).join("") + '</g></g>';
    const canopy = '<path d="M0 98q200 -40 400 0v10q-200 -36 -400 0z" fill="#f2f4f6" stroke="#c8ced6" stroke-width="1.5"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' ' + (98 - Math.sin((20 + i * 45) / 400 * Math.PI) * 30).toFixed(1) + 'l-6 -30M' + (20 + i * 45) + ' ' + (98 - Math.sin((20 + i * 45) / 400 * Math.PI) * 30).toFixed(1) + 'l6 -30" stroke="#dfe3e8" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tds3)"/>' +
      fw(90, 46, GOLD, "") + fw(200, 30, CANDY, "td-fw2") + fw(310, 50, "#ff6fb0", "td-fw3") +
      canopy +
      '<rect x="0" y="108" width="400" height="34" fill="#0f3a44"/>' +
      [60, 340].map(x => '<rect x="' + (x - 20) + '" y="112" width="40" height="20" fill="#1c1f26"/>' + [0, 1, 2, 3].map(i => '<circle class="td-bl' + (i % 2 ? " td-bl2" : "") + '" cx="' + (x - 14 + i * 9) + '" cy="122" r="3" fill="#fffbe0"/>').join("")).join("") +
      '<rect x="140" y="112" width="120" height="26" rx="2" fill="#111"/><text x="200" y="130" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" class="td-bl">LET&#8217;S GO!</text>' +
      '<rect x="0" y="142" width="400" height="44" fill="#0b2a32"/>' + crowd +
      '<rect x="0" y="186" width="400" height="74" fill="#2f8a3a"/><path d="M0 212h400M0 238h400" stroke="#fff" stroke-width="2" opacity=".55"/>' +
      label("HARD ROCK STADIUM · MIAMI GARDENS", 252),
      sky("tds3", "#0a0f2a", "#283a6e"));
  }

  /* 4. NW 7th Av, Liberty City: the history mural, a candy-paint Chevy rolling by */
  function tdmural() {
    const art = [
      i => '<circle cx="40" cy="34" r="16" fill="#fff3b0"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(k => '<path d="M40 34l' + (Math.cos(k * 0.785) * 24).toFixed(1) + ' ' + (Math.sin(k * 0.785) * 24).toFixed(1) + '" stroke="#fff3b0" stroke-width="3"/>').join(""),
      i => '<path d="M6 60q16 -16 34 0t34 0" stroke="#fff" stroke-width="4" fill="none" opacity=".8"/><path d="M6 46q16 -16 34 0t34 0" stroke="#bfe6fb" stroke-width="4" fill="none"/>',
      i => '<path d="M40 70q4 -30 0 -50" stroke="#5a3a22" stroke-width="5" fill="none"/><path d="M40 20q-16 -2 -24 10M40 20q16 -2 24 10M40 20q-8 -12 -20 -10M40 20q8 -12 20 -10" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>',
      i => '<path d="M40 14l7 15 17 2 -12 11 3 17 -15 -8 -15 8 3 -17 -12 -11 17 -2z" fill="#ffe08a"/>',
      i => '<rect x="12" y="30" width="56" height="30" rx="4" fill="#fff" opacity=".85"/><path d="M20 38h40M20 46h30M20 54h36" stroke="#8a4fc0" stroke-width="3"/>',
      i => '<path d="M40 64q-26 -18 -26 -32q0 -12 13 -12q9 0 13 9q4 -9 13 -9q13 0 13 12q0 14 -26 32z" fill="#fff" opacity=".85"/>'
    ];
    const panels = ["#f2b632", "#2f8fd6", "#e8573a", "#41a35a", "#8a4fc0", "#f07aa8"].map((c, i) => '<rect x="' + (10 + i * 64) + '" y="76" width="60" height="80" fill="' + c + '"/><g transform="translate(' + (10 + i * 64 - 10) + ' 82) scale(1)">' + art[i](i) + '</g>').join("");
    const rim = (x) => '<g><circle cx="' + x + '" cy="214" r="17" fill="#222"/><g class="td-rim"><circle cx="' + x + '" cy="214" r="12" fill="#e8e8e8"/>' + [0, 1, 2, 3, 4].map(i => '<path d="M' + x + ' 214l' + (Math.cos(i * 1.2566) * 11).toFixed(1) + ' ' + (Math.sin(i * 1.2566) * 11).toFixed(1) + '" stroke="#8a8f96" stroke-width="2.5"/>').join("") + '</g></g>';
    const car = '<g class="td-car"><path d="M0 206v-20q4 -6 20 -8l26 -2 22 -18h70l26 18 46 4q14 2 14 12v14z" fill="' + CANDY + '" stroke="#1d6a34" stroke-width="2"/>' +
      '<path d="M76 160h26v16h-44zM108 160h26l20 16h-46z" fill="#9fd8f0" stroke="#1d6a34" stroke-width="1.5"/><rect x="0" y="196" width="224" height="4" fill="#d8f5df" opacity=".7"/>' + rim(46) + rim(178) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tds4)"/>' +
      '<g class="td-cloud"><ellipse cx="80" cy="34" rx="40" ry="10" fill="#fff" opacity=".9"/></g>' +
      '<path d="M0 66h400" stroke="#9a958c" stroke-width="8"/><path d="M50 66v10M150 66v10M250 66v10M350 66v10" stroke="#9a958c" stroke-width="5"/>' +
      '<rect x="0" y="70" width="400" height="92" fill="#e7dcc6"/>' + panels +
      '<text x="200" y="174" text-anchor="middle" ' + font + ' font-size="10" fill="#5a4a3a" letter-spacing="4">LIBERTY CITY</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#5f6266"/><path d="M0 240h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      car + label("NW 7TH AVENUE · DADE COUNTY, REPRESENT", 254),
      sky("tds4", "#56b6ea", "#dff3fb"));
  }

  /* 5. NW 69 Ter & NW 18 Av, Liberty City; Brickell behind */
  function tdcorner() {
    const towers = '<g fill="#1f2a3a"><rect x="40" y="62" width="26" height="78"/><rect x="72" y="40" width="22" height="100"/><rect x="100" y="70" width="30" height="70"/><rect x="140" y="20" width="24" height="120"/><rect x="146" y="10" width="12" height="10"/><rect x="172" y="52" width="28" height="88"/><rect x="208" y="34" width="20" height="106"/><rect x="236" y="66" width="30" height="74"/></g>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="td-bl' + (i % 2 ? " td-bl2" : "") + '" x="' + [46, 78, 106, 146, 178, 212, 242][i % 7] + '" y="' + (74 + Math.floor(i / 7) * 22) + '" width="8" height="3" fill="#ffd27a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tds5)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#ffe6a0" opacity=".9"/>' + towers +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      palm(30, 140, 84) + palm(240, 140, 78, "td-palm2") +
      '<rect x="0" y="140" width="246" height="88" fill="#f0d9bd"/><rect x="0" y="140" width="246" height="6" fill="#d9bfa0"/>' +
      tag("TRICK DADDY", 12, 196, 36, CANDY, -5) + tag("LET&#8217;S GO", 96, 222, 18, GOLD, -3) +
      '<g class="td-sp"><circle cx="226" cy="172" r="3" fill="' + CANDY + '" opacity=".7"/></g><g class="td-sp td-sp2"><circle cx="232" cy="166" r="2" fill="' + CANDY + '" opacity=".7"/></g>' +
      '<rect x="258" y="82" width="5" height="146" fill="#5b6168"/>' + sign(268, 84, 124, "TRICK LOVE THE KIDS ST", 9) + sign(268, 110, 124, "NW 69 TER") + sign(268, 136, 124, "NW 18 AV") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">LIBERTY CITY</text>',
      sky("tds5", "#20305e", "#ff9a6a"));
  }

  window.SCENES = { tdstop, tdeatery, tdstadium, tdmural, tdcorner };
})();
