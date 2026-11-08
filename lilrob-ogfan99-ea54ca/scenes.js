/* lilrob scenes (Regions tab: Los Angeles + SoCal; Solana Beach / La Colonia de Eden Gardens, North County San Diego). CSS classes and ids prefixed lr- (the page's own anim-train is kept).
   1 Solana Beach station (COASTER + Pacific Surfliner): the station's arched barrel roof, a white bi-level COASTER train sliding in, palms and an evening sky.
   2 "My homeboys throwin' a backyard boogie": string lights over La Colonia Park, the DJ's record spinning, palms swaying.
   3 "Sittin' passenger in my rag Impala... I'm right next to the Pacific": a candy-paint rag top cruising the coast highway at sunset, waves rolling in.
   4 The Del Mar Fairgrounds next door: the white mission-style grandstand with red tile and the fair's wheel turning.
   5 Valley Ave and Lomas Santa Fe Dr by Eden Gardens, green signs, LIL ROB tagged on the stucco wall, the Pacific sunset over the bluffs behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lrflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lr-flk{animation:lrflick 2.4s infinite}.lr-flk2{animation-delay:.8s}' +
    '@keyframes lrsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lr-palm{transform-box:fill-box;transform-origin:50% 100%;animation:lrsway 3.5s ease-in-out infinite}.lr-palm2{animation-delay:-1.7s}' +
    '@keyframes lrspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lr-rec{transform-box:fill-box;transform-origin:50% 50%;animation:lrspin 1.8s linear infinite}.lr-wheel{transform-box:view-box;transform-origin:300px 96px;animation:lrspin 16s linear infinite}' +
    '@keyframes lrbulb{0%,100%{opacity:1}50%{opacity:.35}}.lr-b{animation:lrbulb 1.2s ease-in-out infinite}.lr-b2{animation-delay:.6s}' +
    '@keyframes lrcruise{0%{transform:translateX(-170px)}100%{transform:translateX(430px)}}.lr-car{animation:lrcruise 9s linear infinite}' +
    '@keyframes lrhop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.lr-hop{animation:lrhop .8s ease-in-out infinite}' +
    '@keyframes lrwave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.lr-wv{animation:lrwave 3.2s ease-in-out infinite}.lr-wv2{animation-delay:-1.6s}' +
    '@keyframes lrgull{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.lr-gull{animation:lrgull 11s linear infinite}.lr-gull2{animation-delay:-5.5s}' +
    '@keyframes lrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lr-sp{animation:lrspray 1.4s ease-out infinite}.lr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f4c542", SUN = "#e8562a", TEAL = "#3fb6c9", COASTER = "#0072ce", SURF = "#00508f", CANDY = "#7a1fa2";
  const palm = (x, base, h, c, cls) => {
    const tx = x + h * 0.08, ty = base - h;
    const fr = [[-34, 10], [-26, -6], [-10, -16], [10, -16], [26, -6], [34, 10], [-18, 16], [18, 16]].map(f =>
      '<path d="M' + tx + ' ' + ty + 'q' + (f[0] * 0.5) + ' ' + (f[1] * 0.5 - 10) + ' ' + f[0] + ' ' + f[1] + '" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/>').join("");
    return '<g class="lr-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'Q' + (x + h * 0.02) + ' ' + (base - h * 0.5) + ' ' + tx + ' ' + ty + '" stroke="' + c + '" stroke-width="5" fill="none"/>' + fr + '</g>';
  };
  const ocean = (y, c) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c + '"/>' +
    '<g class="lr-wv"><path d="M0 ' + (y + 12) + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe9f2" stroke-width="2" fill="none" opacity=".7"/></g>' +
    '<g class="lr-wv lr-wv2"><path d="M0 ' + (y + 30) + 'q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfe9f2" stroke-width="2" fill="none" opacity=".55"/></g>';

  /* 1. Solana Beach station */
  function lrstation() {
    const win = [40, 76, 112, 148, 220, 256, 292].map(x => '<rect x="' + x + '" y="118" width="26" height="14" rx="2" fill="#1b2630"/><rect x="' + x + '" y="140" width="26" height="14" rx="2" fill="#1b2630"/>').join("");
    const train = '<g class="anim-train">' +
      '<rect x="28" y="104" width="322" height="76" rx="8" fill="#f2f4f6" stroke="#9aa3ad" stroke-width="2"/>' + win +
      '<rect x="28" y="160" width="322" height="6" fill="' + COASTER + '"/><rect x="28" y="166" width="322" height="4" fill="#5cb85c"/><rect x="28" y="170" width="322" height="10" rx="3" fill="#4a4f57"/>' +
      '<rect x="184" y="114" width="16" height="50" fill="#d7dce1" stroke="#9aa3ad"/><rect x="187" y="118" width="10" height="20" fill="#1b2630"/>' +
      '<path d="M330 106h10a10 10 0 0 1 10 10v54h-20z" fill="' + COASTER + '"/><rect x="333" y="114" width="14" height="20" rx="3" fill="#1b2630"/><circle cx="340" cy="168" r="3.5" fill="#fff6c2"/>' +
      '<rect x="252" y="106" width="64" height="9" rx="2" fill="#111"/><text x="284" y="113.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">OCEANSIDE</text>' +
      '<circle cx="80" cy="182" r="7" fill="#222"/><circle cx="110" cy="182" r="7" fill="#222"/><circle cx="270" cy="182" r="7" fill="#222"/><circle cx="300" cy="182" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lrs1)"/><circle cx="74" cy="64" r="20" fill="#ffd27a" opacity=".85"/>' +
      /* the arched barrel roof of the station building */
      '<rect x="200" y="62" width="170" height="40" fill="#d9d2c3"/><path d="M196 66q89 -54 178 0z" fill="#b8c2c9" stroke="#7e8b94" stroke-width="2"/>' +
      [214, 236, 258, 280, 302, 324, 346, 362].map(x => { const t = (x - 285) / 89; return '<path d="M' + x + ' 66V' + (66 - 27 * (1 - t * t)).toFixed(1) + '" stroke="#7e8b94" stroke-width="1.2"/>'; }).join("") +
      '<rect x="226" y="74" width="118" height="20" fill="#7fb2d8" opacity=".7"/>' +
      palm(30, 104, 64, "#2c2a26") + palm(176, 104, 54, "#2c2a26", "lr-palm2") + palm(388, 104, 70, "#2c2a26") +
      '<rect x="0" y="100" width="400" height="88" fill="#6d6a66" opacity=".3"/>' +
      train +
      '<rect x="0" y="188" width="400" height="8" fill="#f2c200"/><rect x="0" y="196" width="400" height="64" fill="#c2b8a6"/><path d="M0 222h400" stroke="#ada29a" stroke-width="2"/>' +
      '<rect x="40" y="204" width="320" height="34" rx="3" fill="#111"/><text x="54" y="227" ' + font + ' font-size="16" fill="#fff">Solana Beach</text>' + badge(190, 221, "COASTER", COASTER) + badge(272, 221, "SURFLINER", SURF),
      sky("lrs1", "#2b3a6e", "#f5a65b"));
  }

  /* 2. Backyard boogie at La Colonia Park */
  function lrcolonia() {
    const bulbs = Array.from({ length: 21 }, (_, i) => { const x = 10 + i * 19, y = 60 + Math.sin(i / 20 * Math.PI) * 26; return '<circle class="lr-b' + (i % 2 ? " lr-b2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="4" fill="' + [GOLD, SUN, TEAL][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lrs2)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (10 + (i * 29) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      palm(40, 170, 110, "#1f2a24") + palm(360, 170, 120, "#1f2a24", "lr-palm2") +
      '<path d="M10 60q190 52 380 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bulbs +
      /* fence and grass */
      '<rect x="0" y="150" width="400" height="30" fill="#8a6a4a"/>' + Array.from({ length: 27 }, (_, i) => '<rect x="' + (i * 15) + '" y="146" width="11" height="34" fill="#9c7a55"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#3f6b33"/>' +
      /* DJ table */
      '<rect x="140" y="170" width="120" height="40" fill="#222" stroke="#444"/><rect x="146" y="164" width="108" height="8" fill="#333"/>' +
      '<g class="lr-rec"><circle cx="172" cy="160" r="14" fill="#111" stroke="#555" stroke-width="1.5"/><circle cx="172" cy="160" r="5" fill="' + SUN + '"/></g>' +
      '<g class="lr-rec"><circle cx="228" cy="160" r="14" fill="#111" stroke="#555" stroke-width="1.5"/><circle cx="228" cy="160" r="5" fill="' + TEAL + '"/></g>' +
      '<rect x="92" y="150" width="34" height="60" rx="3" fill="#1a1a1a"/><circle cx="109" cy="168" r="10" fill="#333"/><circle cx="109" cy="194" r="12" fill="#333"/>' +
      '<rect x="274" y="150" width="34" height="60" rx="3" fill="#1a1a1a"/><circle cx="291" cy="168" r="10" fill="#333"/><circle cx="291" cy="194" r="12" fill="#333"/>' +
      '<rect x="120" y="226" width="160" height="22" rx="3" fill="#2a2420"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">LA COLONIA PARK</text>',
      sky("lrs2", "#141a3a", "#4a2f5e"));
  }

  /* 3. Rag top on the coast highway */
  function lrimpala() {
    const car = '<g class="lr-car"><g class="lr-hop">' +
      '<path d="M8 186h168l-4 -16h-28l-20 -14h-70l-22 14h-22z" fill="' + CANDY + '" stroke="#3a0a52" stroke-width="2"/>' +
      '<path d="M58 156l10 -12h40l6 12z" fill="none" stroke="#ddd" stroke-width="2"/>' +
      '<path d="M12 174h162" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      '<g transform="translate(46 188)"><circle r="12" fill="#222"/><circle r="8" fill="' + GOLD + '"/><circle r="3" fill="#fff"/></g>' +
      '<g transform="translate(146 188)"><circle r="12" fill="#222"/><circle r="8" fill="' + GOLD + '"/><circle r="3" fill="#fff"/></g></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lrs3)"/><circle cx="300" cy="118" r="34" fill="#ffcf5a"/>' +
      '<g class="lr-gull"><path d="M30 70q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g><g class="lr-gull lr-gull2"><path d="M30 90q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/></g>' +
      ocean(130, "#2f7f99") + '<rect x="0" y="130" width="400" height="6" fill="#ffcf5a" opacity=".35"/>' +
      '<path d="M0 166h400v94H0z" fill="#d9c08f"/><rect x="0" y="176" width="400" height="84" fill="#4d4d52"/><path d="M0 222h400" stroke="#f2c200" stroke-width="3"/>' +
      palm(20, 178, 80, "#2c2a26") + palm(380, 178, 72, "#2c2a26", "lr-palm2") +
      car,
      sky("lrs3", "#5b3a7a", "#f59a52"));
  }

  /* 4. Del Mar Fairgrounds next door */
  function lrfair() {
    const spokes = Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M300 96L' + (300 + Math.cos(a) * 54).toFixed(1) + ' ' + (96 + Math.sin(a) * 54).toFixed(1) + '" stroke="#fff" stroke-width="1.5"/>' +
      '<circle cx="' + (300 + Math.cos(a) * 54).toFixed(1) + '" cy="' + (96 + Math.sin(a) * 54).toFixed(1) + '" r="5" fill="' + [SUN, GOLD, TEAL][i % 3] + '"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lrs4)"/>' +
      '<path d="M300 96l-28 70M300 96l28 70" stroke="#ccc" stroke-width="4"/><g class="lr-wheel"><circle cx="300" cy="96" r="54" fill="none" stroke="#fff" stroke-width="3"/>' + spokes + '</g><circle cx="300" cy="96" r="6" fill="#ddd"/>' +
      /* mission-style grandstand */
      '<rect x="20" y="110" width="230" height="70" fill="#f4efe4" stroke="#d6cbb4" stroke-width="1.5"/>' +
      '<path d="M14 112l120 -24 122 24z" fill="#b5532f"/>' +
      [34, 64, 94, 124, 154, 184, 214].map(x => '<path d="M' + x + ' 180v-34a10 10 0 0 1 20 0v34z" fill="#6b5640"/>').join("") +
      /* bell tower */
      '<rect x="112" y="60" width="44" height="52" fill="#f4efe4" stroke="#d6cbb4" stroke-width="1.5"/><path d="M106 62l28 -18 28 18z" fill="#b5532f"/>' +
      '<path d="M124 100v-20a10 10 0 0 1 20 0v20z" fill="#3a2f28"/><path d="M130 84h8l1 8h-10z" fill="#c9a24a"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#cdb894"/><path d="M0 180h400" stroke="#b39d77" stroke-width="2"/>' +
      palm(10, 186, 80, "#3d5a2e") + palm(260, 186, 90, "#3d5a2e", "lr-palm2") +
      '<rect x="110" y="222" width="180" height="24" rx="3" fill="#2a2420"/><text x="200" y="239" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">DEL MAR FAIRGROUNDS</text>',
      sky("lrs4", "#79c2ea", "#fbe3b8"));
  }

  /* 5. Valley Ave and Lomas Santa Fe Dr, Eden Gardens */
  function lrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lrs5)"/><circle cx="110" cy="112" r="30" fill="#ffcf5a"/>' +
      ocean(110, "#2a6f8a") +
      '<path d="M220 112l30 -26h60l40 14 50 -10v22z" fill="#a8835a"/>' +
      palm(250, 128, 50, "#2a2a3a") + palm(300, 128, 40, "#2a2a3a", "lr-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#ecd7b4"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (132 + (i * 37) % 88) + '" r="1.4" fill="#d3b98f"/>').join("") +
      '<rect x="0" y="126" width="400" height="5" fill="#b5532f"/>' +
      tag("LIL ROB", 18, 190, 50, GOLD, -6) + tag("1218", 172, 214, 24, SUN, -4) + tag("BROWN CROWD", 22, 216, 15, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(244, 98, 146, "Valley Ave") + sign(244, 124, 146, "Lomas Santa Fe Dr") +
      '<rect x="228" y="110" width="4" height="114" fill="#222"/><circle class="lr-flk" cx="230" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="lr-sp"><circle cx="200" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lr-sp lr-sp2"><circle cx="206" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lrs5", "#3a2a6a", "#f2894f"));
  }

  window.SCENES = { lrstation: lrstation, lrcolonia: lrcolonia, lrimpala: lrimpala, lrfair: lrfair, lrcorner: lrcorner };
})();
