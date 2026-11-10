/* Dave scenes (Regions tab: UK + EUROPE; Streatham, South London SW16 - David Omoregie, born in Brixton 1998, moved to Streatham at seven,
   grew up in Streatham Vale ("I'm from Streatham Vale"); St Mark's Academy, Mitcham; self-taught on piano; Psychodrama won the 2019 Mercury Prize).
   1 Streatham station: open-air platform under a canopy, a white-and-green Southern train pulling in, Southern green + Thameslink pink bands.
   2 Streatham Common: the long green slope up to the Rookery gardens, a kite in the sky, the 109 bus along the bottom.
   3 St Leonard's Church at the top of Mitcham Lane ("Mitcham Lane, that's Streatham and Tooting"): flint-and-stone tower with its slim spire, a clock.
   4 Streatham Hill Theatre: the big cream Art Deco front with its tall centre fin and windows lit, a grand piano in front for Dave's keys.
   5 Streatham Vale at Greyhound Lane, SW16: London street plates, DAVE tagged, the trees of Streatham Common up the hill behind.
   Kojey Radical's kit has Brixton Academy, so Brixton stays out. CSS classes prefixed "dvx" (the page's own anim-train is kept).
   No logos (no Southern/Thameslink marks, no roundel), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dvxCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.dvxCloud{animation:dvxCloud 30s linear infinite}.dvxC2{animation-delay:-15s}' +
    '@keyframes dvxWin{0%,100%{opacity:.2}50%{opacity:1}}.dvxW{animation:dvxWin 3s steps(1) infinite}.dvxW2{animation-delay:-1s}.dvxW3{animation-delay:-2s}' +
    '@keyframes dvxKite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(16px,-10px) rotate(6deg)}}.dvxKite{transform-box:fill-box;transform-origin:50% 100%;animation:dvxKite 3s ease-in-out infinite}' +
    '@keyframes dvxBus{0%{transform:translateX(-220px)}100%{transform:translateX(560px)}}.dvxBus{animation:dvxBus 11s linear infinite}' +
    '@keyframes dvxBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-24px)}}.dvxBird{animation:dvxBird 13s linear infinite}' +
    '@keyframes dvxHand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.dvxHand{transform-box:view-box;transform-origin:200px 112px;animation:dvxHand 18s linear infinite}' +
    '@keyframes dvxNote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-60px);opacity:0}}.dvxNote{animation:dvxNote 3s ease-out infinite}.dvxN2{animation-delay:1s}.dvxN3{animation-delay:2s}' +
    '@keyframes dvxBeam{0%,100%{opacity:.15}50%{opacity:.45}}.dvxBeam{animation:dvxBeam 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const SN = "#8cc63e", TL = "#e9438d", GOLD = "#d4af37";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="dvxCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="dvxCloud dvxC2"><ellipse cx="40" cy="62" rx="28" ry="8"/><ellipse cx="56" cy="56" rx="16" ry="8"/></g></g>';
  const bus = (y) => '<g class="dvxBus"><rect x="0" y="' + y + '" width="120" height="44" rx="6" fill="#d0202a"/><g fill="#1d2a33"><rect x="8" y="' + (y + 6) + '" width="20" height="12"/><rect x="34" y="' + (y + 6) + '" width="20" height="12"/><rect x="60" y="' + (y + 6) + '" width="20" height="12"/><rect x="86" y="' + (y + 6) + '" width="20" height="12"/>' +
    '<rect x="8" y="' + (y + 24) + '" width="20" height="10"/><rect x="34" y="' + (y + 24) + '" width="20" height="10"/><rect x="60" y="' + (y + 24) + '" width="20" height="10"/></g><circle cx="24" cy="' + (y + 46) + '" r="7" fill="#111"/><circle cx="98" cy="' + (y + 46) + '" r="7" fill="#111"/></g>';

  /* 1. Streatham station - Southern train pulling in */
  function dvxstation() {
    let wins = "";
    for (const x of [34, 70, 150, 186, 262]) wins += '<rect x="' + x + '" y="148" width="26" height="18" rx="2" fill="#1d2a33"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 138h296q30 0 34 28v32H10z" fill="#f2f3f0" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<g fill="' + SN + '"><rect x="112" y="146" width="22" height="50"/><rect x="226" y="146" width="22" height="50"/></g>' +
      '<rect x="10" y="176" width="330" height="10" fill="#1f5f2a"/><path d="M306 138q30 0 34 28h-34z" fill="#f2c14e"/><path d="M310 150h20q6 6 8 16h-28z" fill="#1d2a33"/>' +
      '<g fill="#161616"><circle cx="50" cy="201" r="6"/><circle cx="74" cy="201" r="6"/><circle cx="270" cy="201" r="6"/><circle cx="294" cy="201" r="6"/></g></g>';
    let posts = "";
    for (let x = 30; x < 400; x += 70) posts += '<rect x="' + x + '" y="44" width="5" height="90" fill="#2d3a4d"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvxs1)"/>' + clouds(.55) +
      '<g fill="#8a6a5a"><rect x="0" y="80" width="60" height="54"/><rect x="330" y="72" width="70" height="62"/></g><g fill="#e8e1d3"><path d="M0 80l30 -16l30 16z"/><path d="M330 72l35 -16l35 16z"/></g>' +
      '<g fill="#ffe28a"><rect class="dvxW" x="14" y="96" width="9" height="10"/><rect class="dvxW dvxW2" x="36" y="110" width="9" height="10"/><rect class="dvxW dvxW3" x="348" y="90" width="9" height="10"/><rect class="dvxW" x="376" y="108" width="9" height="10"/></g>' +
      '<path d="M0 32h400v12H0z" fill="#d9dde3"/><path d="M0 44h400v4H0z" fill="#8f949c"/>' + posts +
      '<rect x="0" y="128" width="400" height="10" fill="#4a4d55"/>' +
      '<path d="M0 138h400v68H0z" fill="#2a2c31"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#6b6e75"/><rect x="0" y="206" width="400" height="6" fill="#f2f2f2"/>' +
      '<g transform="translate(102 58)"><rect width="196" height="44" rx="4" fill="#0f2a1a" stroke="#fff" stroke-width="2"/>' +
      '<text x="98" y="23" text-anchor="middle" ' + F + ' font-size="17" fill="#fff" letter-spacing="2">STREATHAM</text>' +
      '<rect x="18" y="30" width="78" height="8" rx="2" fill="' + SN + '"/><rect x="100" y="30" width="78" height="8" rx="2" fill="' + TL + '"/></g>' +
      '<g transform="translate(18 220)"><rect width="134" height="22" rx="3" fill="#111"/><text x="67" y="15" text-anchor="middle" ' + F + ' font-size="9" fill="#fff">SOUTHERN · THAMESLINK</text></g>',
      sky("dvxs1", "#7f9cc4", "#e2cfa8"));
  }

  /* 2. Streatham Common - the slope up to the Rookery, a kite, the 109 */
  function dvxcommon() {
    let trees = "";
    for (const [x, y, r] of [[250, 70, 26], [290, 62, 30], [334, 66, 28], [372, 60, 30], [214, 82, 20]]) trees += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="30" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + (x % 2 ? '#3f7d3a' : '#2f6a2e') + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvxs2)"/>' + clouds(.7) + trees +
      '<path d="M0 200Q160 170 240 110T400 84V260H0z" fill="#6aa555"/><path d="M0 214Q170 190 400 150V260H0z" fill="#5a9446"/>' +
      '<g transform="translate(316 98)"><rect x="-26" y="0" width="52" height="16" fill="#c9a77a" stroke="#8a6a44" stroke-width="2"/><g fill="#e05a8a"><circle cx="-16" cy="-2" r="4"/><circle cx="-4" cy="-3" r="4" fill="#f2c14e"/><circle cx="8" cy="-2" r="4"/><circle cx="18" cy="-3" r="4" fill="#f2c14e"/></g>' +
      '<text x="0" y="12" text-anchor="middle" ' + F + ' font-size="7" fill="#3a2a1a">THE ROOKERY</text></g>' +
      '<g class="dvxKite"><path d="M110 40l18 22l-18 22l-18 -22z" fill="' + SN + '" stroke="#fff" stroke-width="2"/><path d="M110 40v44M92 62h36" stroke="#fff" stroke-width="1.5"/></g>' +
      '<path d="M110 84Q100 140 140 196" fill="none" stroke="#f7f3ea" stroke-width="1.2"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3a3d46"/>' + bus(190) +
      '<text x="390" y="250" text-anchor="end" ' + F + ' font-size="11" fill="#f7f3ea" letter-spacing="2">STREATHAM COMMON</text>',
      sky("dvxs2", "#86b4e0", "#f2e2bc"));
  }

  /* 3. St Leonard's Church at Mitcham Lane */
  function dvxchurch() {
    let ticks = "";
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; ticks += '<path d="M' + (200 + Math.sin(a) * 9).toFixed(1) + ' ' + (112 - Math.cos(a) * 9).toFixed(1) + 'L' + (200 + Math.sin(a) * 12).toFixed(1) + ' ' + (112 - Math.cos(a) * 12).toFixed(1) + '" stroke="#111" stroke-width="1.2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dvxs3)"/>' + clouds(.7) +
      '<g class="dvxBird" fill="none" stroke="#333" stroke-width="2"><path d="M20 60q6 -6 12 0q6 -6 12 0"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#4f8a44"/><rect x="0" y="226" width="400" height="34" fill="#3a3d46"/>' +
      /* nave */
      '<rect x="230" y="138" width="150" height="60" fill="#c9bfa8" stroke="#8a826e" stroke-width="2"/><path d="M226 140l79 -40l79 40z" fill="#6d7680"/>' +
      '<g fill="#3b4a5a">' + [246, 282, 318, 354].map(x => '<path d="M' + x + ' 186v-26q8 -12 16 0v26z"/>').join("") + '</g>' +
      /* tower + spire */
      '<rect x="176" y="96" width="48" height="104" fill="#8f8a80" stroke="#5f5a50" stroke-width="2"/>' +
      '<g fill="#a7a194">' + [104, 124, 144, 164, 184].map(y => '<rect x="178" y="' + y + '" width="44" height="2"/>').join("") + '</g>' +
      '<path d="M176 96l24 -84l24 84z" fill="#6d7680" stroke="#4d555e" stroke-width="2"/><rect x="198" y="2" width="4" height="12" fill="#c9a24a"/><rect x="194" y="6" width="12" height="3" fill="#c9a24a"/>' +
      '<circle cx="200" cy="112" r="13" fill="#f7f3ea" stroke="#c9a24a" stroke-width="2"/>' + ticks + '<path d="M200 112v-7" stroke="#111" stroke-width="2"/><g class="dvxHand"><path d="M200 112v-10" stroke="#c4202e" stroke-width="1.5"/></g>' +
      '<path d="M190 200v-28q10 -14 20 0v28z" fill="#3b2418"/>' +
      '<g fill="#5a3d26"><rect x="54" y="150" width="7" height="48"/></g><circle cx="58" cy="140" r="34" fill="#3f7d3a"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + F + ' font-size="11" fill="#f7f3ea" letter-spacing="2">ST LEONARD\'S · MITCHAM LANE</text>',
      sky("dvxs3", "#9ab9dc", "#f4e4c4"));
  }

  /* 4. Streatham Hill Theatre - Art Deco front at night, a grand piano */
  function dvxtheatre() {
    let wins = "";
    for (const x of [72, 100, 128, 252, 280, 308]) for (const y of [86, 120]) wins += '<rect class="dvxW' + ((x + y) % 3 ? ' dvxW' + ((x + y) % 3 + 1) : '') + '" x="' + x + '" y="' + y + '" width="18" height="24" fill="#ffd98a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dvxs4)"/>' +
      '<g fill="#fff"><circle cx="40" cy="30" r="1.5"/><circle cx="120" cy="18" r="1.2"/><circle cx="330" cy="26" r="1.5"/><circle cx="370" cy="54" r="1.2"/><circle cx="260" cy="14" r="1.2"/></g>' +
      '<path class="dvxBeam" d="M200 60L120 0h160z" fill="#fff6d0"/>' +
      '<rect x="56" y="70" width="288" height="126" fill="#efe6cf" stroke="#b8ac8c" stroke-width="2"/>' +
      '<rect x="168" y="40" width="64" height="156" fill="#f6efdb" stroke="#b8ac8c" stroke-width="2"/><path d="M168 40h64l-6 -10h-52z" fill="#d8ccab"/>' +
      '<g stroke="#b8ac8c" stroke-width="2">' + [184, 200, 216].map(x => '<path d="M' + x + ' 46v100"/>').join("") + '</g>' + wins +
      '<rect x="56" y="158" width="288" height="10" fill="#7a1f2b"/><text x="200" y="166" text-anchor="middle" ' + F + ' font-size="8" fill="#f6efdb" letter-spacing="3">STREATHAM HILL THEATRE</text>' +
      '<rect x="176" y="168" width="48" height="28" fill="#3b2418"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2a2c31"/>' +
      /* grand piano */
      '<g transform="translate(318 240) scale(.62)"><path d="M0 0h70q30 0 30 -14q0 -20 -40 -24h-60z" fill="#111" stroke="#d4af37" stroke-width="1.5"/>' +
      '<path d="M0 -38l60 -26" stroke="#111" stroke-width="3"/><rect x="0" y="-4" width="70" height="6" fill="#f7f3ea"/><g fill="#111">' + [6, 14, 26, 34, 42, 54, 62].map(x => '<rect x="' + x + '" y="-4" width="4" height="4"/>').join("") + '</g>' +
      '<rect x="8" y="2" width="4" height="30" fill="#111"/><rect x="88" y="-10" width="4" height="42" fill="#111"/></g>' +
      '<g fill="' + GOLD + '" ' + F + ' font-size="20"><text class="dvxNote" x="350" y="206">♪</text><text class="dvxNote dvxN2" x="372" y="206">♫</text><text class="dvxNote dvxN3" x="330" y="206">♪</text></g>',
      sky("dvxs4", "#0e1a33", "#3b2f55"));
  }

  /* 5. Streatham Vale at Greyhound Lane - the corner */
  function dvxcorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="138" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="69" y="20" text-anchor="middle" ' + F + ' font-size="11.5" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="138" height="9" fill="#c4202e"/><text x="69" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    let trees = "";
    for (let i = 0; i < 8; i++) { const x = 20 + i * 54, r = 26 + (i % 3) * 3; trees += '<rect x="' + (x - 3) + '" y="70" width="6" height="50" fill="#5a3d26"/><circle cx="' + x + '" cy="' + (64 - (i % 2) * 8) + '" r="' + r + '" fill="' + (i % 2 ? '#3f7d3a' : '#4a8c42') + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#dvxs5)"/>' + clouds(.6) +
      '<path d="M0 110Q200 40 400 96V120H0z" fill="#5a9446"/>' + trees +
      '<rect x="0" y="116" width="400" height="94" fill="#3a3d46"/>' +
      '<g stroke="#2e3038" stroke-width="1">' + [128, 144, 160, 176, 192].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      tag("DAVE", 22, 178, 46, "#f2f2f2", -6) + tag("SANTAN", 134, 200, 20, GOLD, -4) + tag("SW16", 24, 204, 16, SN, -3) +
      bus(196) +
      '<rect x="0" y="244" width="400" height="16" fill="#2a2a30"/>' +
      '<rect x="384" y="130" width="6" height="116" fill="#2a2a2a"/>' +
      plate(244, 134, "STREATHAM VALE", "SW16 · LAMBETH") + plate(244, 170, "GREYHOUND LANE", "SW16 · LAMBETH"),
      sky("dvxs5", "#5f7fae", "#e8b98a"));
  }

  window.SCENES = { dvxstation, dvxcommon, dvxchurch, dvxtheatre, dvxcorner };
})();
