/* Chubb Rock game (NYC map, Brooklyn: Flatbush). Born in Kingston, Jamaica, raised in Flatbush with his cousin Hitman Howie Tee.
   1. Prospect Park on the Brighton line (B, Q and the Franklin Av Shuttle), down in the open cut at Flatbush Av & Empire Blvd.
   2. Devon House in Kingston, Jamaica (where he was born): the white Georgian mansion with its hipped roof and verandas, royal palms, a doctor bird.
   3. Brown University's Van Wickle Gates in Providence (he was a pre-med there before he left for music): black wrought-iron gates, brick piers, University Hall behind.
   4. Howard University's Founders Library in Washington (the "Treat 'Em Right" video was shot on the yard): red brick, white columns and the white clock tower.
   5. Empire Blvd & Flatbush Av: green street signs, the wall tagged CHUBB ROCK, the Brooklyn Botanic Garden's glass Palm House behind the trees.
   400 x 260 SVGs. No logos, no faces. All scene CSS classes are prefixed "cr". */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes crcars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.crcar{animation:crcars 7s linear infinite}.crcar2{animation-delay:-3.5s}' +
    '@keyframes crblink{0%,100%{opacity:.25}50%{opacity:1}}.crbl{animation:crblink 1.6s ease-in-out infinite}.crbl2{animation-delay:.5s}.crbl3{animation-delay:1s}' +
    '@keyframes crflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.crflk{animation:crflick 2.4s infinite}' +
    '@keyframes crsway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.crsway{transform-box:fill-box;transform-origin:50% 100%;animation:crsway 3s ease-in-out infinite}.crsway2{animation-delay:-1.5s}' +
    '@keyframes crhover{0%,100%{transform:translate(0,0)}25%{transform:translate(14px,-6px)}50%{transform:translate(26px,2px)}75%{transform:translate(10px,6px)}}.crbird{animation:crhover 4s ease-in-out infinite}' +
    '@keyframes crwing{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.crwing{transform-box:fill-box;transform-origin:50% 100%;animation:crwing .18s linear infinite}' +
    '@keyframes crfall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,200px) rotate(260deg);opacity:0}}.crlf{animation:crfall 6s linear infinite}.crlf2{animation-delay:-2s}.crlf3{animation-delay:-4s}' +
    '@keyframes crhand{to{transform:rotate(360deg)}}.crhand{transform-box:view-box;animation:crhand 8s linear infinite}.crhand2{animation-duration:48s}' +
    '@keyframes crflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.crflag{transform-box:fill-box;transform-origin:0 50%;animation:crflag 1.4s ease-in-out infinite}' +
    '@keyframes crwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.crwalk{animation:crwalk 14s linear infinite}.crwalk2{animation-delay:-7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, dark, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.48) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.3) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const BD = "#ff6319", NQ = "#fccc0a", SH = "#808183", GOLD = "#ffcf3f", GREEN = "#2fb35f", ORANGE = "#ff6b3d", CREAM = "#f4ead8", SIGN = "#0f6b3a";
  const blade = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c, cls) => '<g class="crsway ' + (cls || "") + '"><rect x="' + (x - 2 * s) + '" y="' + (y - 10 * s) + '" width="' + (4 * s) + '" height="' + (10 * s) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (y - 16 * s) + '" r="' + (11 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 11 * s) + '" r="' + (7 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 11 * s) + '" r="' + (7 * s) + '" fill="' + c + '"/></g>';
  const palm = (x, y, h, cls) => {
    let f = ""; [-70, -35, 0, 35, 70, 110, -110].forEach(a => { f += '<path d="M' + x + ' ' + (y - h) + 'q' + (Math.sin(a * Math.PI / 180) * 18) + ' -10 ' + (Math.sin(a * Math.PI / 180) * 34) + ' ' + (8 - Math.cos(a * Math.PI / 180) * 12) + '" stroke="#2f7a3a" stroke-width="5" fill="none" stroke-linecap="round"/>'; });
    return '<rect x="' + (x - 3) + '" y="' + (y - h) + '" width="6" height="' + h + '" fill="#b9ab94"/><g class="crsway ' + (cls || "") + '" style="transform-origin:' + x + 'px ' + (y - h) + 'px;transform-box:view-box">' + f + '</g>';
  };

  /* 1. Prospect Park (B/Q/S), down in the open cut: rough stone retaining walls, the street bridge overhead, the black sign with B, Q and the gray S, the Q sliding in */
  function prospect() {
    let stone = "";
    for (let y = 74; y < 176; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) stone += '<rect x="' + x + '" y="' + y + '" width="26" height="10" rx="2" fill="#8d8478" opacity=".55"/>';
    let win = "";
    for (let x = 24; x < 290; x += 34) win += '<rect x="' + x + '" y="134" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crs1)"/>' +
      tree(40, 70, 1.4, "#3f7d3a") + tree(120, 66, 1.2, "#4a8a3f", "crsway2") + tree(300, 70, 1.4, "#3f7d3a", "crsway2") + tree(370, 64, 1.1, "#4a8a3f") +
      '<rect x="0" y="70" width="400" height="110" fill="#6e665c"/>' + stone +
      /* street bridge over the cut */
      '<rect x="0" y="22" width="400" height="22" fill="#4b4f55"/><rect x="0" y="44" width="400" height="6" fill="#2f3237"/>' +
      '<g class="crcar"><rect x="0" y="12" width="40" height="12" rx="4" fill="' + GOLD + '"/></g><g class="crcar crcar2"><rect x="0" y="14" width="34" height="10" rx="4" fill="#3b6fb6"/></g>' +
      /* sign */
      '<rect x="64" y="80" width="270" height="30" rx="3" fill="#111"/><rect x="64" y="80" width="270" height="3" fill="#fff"/>' +
      '<text x="78" y="102" ' + font + ' font-size="15" fill="#fff">Prospect Park</text>' + bullet(250, 95, "B", BD) + bullet(276, 95, "Q", NQ, true) + bullet(302, 95, "S", SH) +
      /* the Q */
      '<g class="anim-train">' +
        '<rect x="6" y="124" width="300" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="6" y="160" width="300" height="4" fill="#8b929c"/>' + bullet(292, 168, "Q", NQ, true, 7) + '<circle cx="18" cy="168" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/><rect x="0" y="186" width="400" height="74" fill="#3b3f46"/>' +
      '<rect x="0" y="186" width="400" height="3" fill="#55595f"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 4) + '" y="110" width="8" height="66" fill="#2f5a3c"/>').join("") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#e8e3d8" letter-spacing="3">FLATBUSH AV · EMPIRE BLVD</text>',
      sky("crs1", "#7fb8e6", "#d8ecfa"));
  }

  /* 2. Devon House, Kingston: the white Georgian mansion, gray hipped roof, two tiers of verandas, royal palms, a doctor bird hovering */
  function devon() {
    let rail = "";
    for (let x = 96; x < 304; x += 8) rail += '<rect x="' + x + '" y="134" width="2" height="12" fill="#fff"/>';
    let wins = "";
    [110, 140, 230, 260].forEach(x => { wins += '<rect x="' + x + '" y="106" width="16" height="22" fill="#5b7c6a"/><rect x="' + x + '" y="160" width="16" height="26" fill="#5b7c6a"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#crs2)"/><circle cx="60" cy="40" r="20" fill="#fff3b0"/>' +
      '<path d="M0 150q100-30 200-10t200-14v40H0z" fill="#5f9e4a" opacity=".6"/>' +
      /* house */
      '<path d="M80 96L120 60h160l40 36z" fill="#8a8f96"/><rect x="186" y="44" width="28" height="16" fill="#f4f1ea"/><path d="M182 46l18-12 18 12z" fill="#8a8f96"/>' +
      '<rect x="88" y="96" width="224" height="98" fill="#f6f3ec"/>' + wins +
      '<path d="M172 96l28-22 28 22z" fill="#f6f3ec" stroke="#cfcac0" stroke-width="2"/>' +
      '<rect x="88" y="130" width="224" height="4" fill="#cfcac0"/>' + rail +
      [92, 130, 170, 230, 270, 308].map(x => '<rect x="' + (x - 2) + '" y="134" width="4" height="60" fill="#fff"/>').join("") +
      '<rect x="186" y="156" width="28" height="38" fill="#3e5a4a"/><path d="M186 156q14-12 28 0" fill="#3e5a4a"/>' +
      '<rect x="80" y="194" width="240" height="6" fill="#d8d2c5"/>' +
      /* lawn + path */
      '<rect x="0" y="200" width="400" height="60" fill="#4f9a3e"/><path d="M186 200l-30 60h88l-30-60z" fill="#e2d6bd"/>' +
      palm(36, 214, 120) + palm(364, 214, 130, "crsway2") +
      /* doctor bird (streamertail) */
      '<g transform="translate(318,104)"><g class="crbird"><path d="M0 0q8-4 14 0q-6 4-14 0z" fill="#1f8a4c"/><path d="M14 0l8-1" stroke="#c0392b" stroke-width="2"/><path d="M0 0q-14 6-26 22M0 1q-12 8-22 26" stroke="#111" stroke-width="1.5" fill="none"/><path class="crwing" d="M4 -1l4-10l4 9z" fill="#16683a"/></g></g>' +
      '<g transform="translate(330,40)"><rect x="0" y="0" width="2" height="40" fill="#555"/><g class="crflag"><rect x="2" y="0" width="30" height="20" fill="#009b3a"/><path d="M2 0L32 20M32 0L2 20" stroke="#fed100" stroke-width="4"/><path d="M2 0l15 10L2 20z" fill="#000"/><path d="M32 0L17 10l15 10z" fill="#000"/></g></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">KINGSTON, JAMAICA</text>',
      sky("crs2", "#56b4e9", "#cdeefc"));
  }

  /* 3. Brown University's Van Wickle Gates: black wrought-iron gates between red-brick piers with stone caps, University Hall (red brick, white cupola) behind, leaves falling */
  function brown() {
    let bars = "";
    for (let x = 136; x <= 264; x += 8) bars += '<path d="M' + x + ' 110v94" stroke="#141414" stroke-width="2.5"/><path d="M' + (x - 2) + ' 112l2-6 2 6" fill="#141414"/>';
    let uw = "";
    for (let r = 0; r < 3; r++) for (let x = 112; x < 290; x += 22) uw += '<rect x="' + x + '" y="' + (58 + r * 26) + '" width="10" height="16" fill="#f2efe6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crs3)"/>' +
      tree(40, 200, 2.2, "#c76b2a") + tree(360, 200, 2.2, "#d9902f", "crsway2") +
      /* University Hall */
      '<rect x="100" y="48" width="200" height="110" fill="#9c3d2c"/>' + uw +
      '<path d="M100 48l100-22 100 22z" fill="#5d5a55"/><rect x="190" y="10" width="20" height="18" fill="#f4f1ea"/><path d="M186 12l14-10 14 10z" fill="#5d5a55"/>' +
      /* brick wall and piers */
      '<rect x="0" y="150" width="400" height="56" fill="#a3462f"/>' +
      (() => { let b = ""; for (let y = 154; y < 206; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="#7c3322" stroke-width="1"/>'; return b; })() +
      '<rect x="98" y="88" width="34" height="118" fill="#a3462f" stroke="#7c3322" stroke-width="2"/><rect x="268" y="88" width="34" height="118" fill="#a3462f" stroke="#7c3322" stroke-width="2"/>' +
      '<rect x="94" y="80" width="42" height="10" fill="#d9d2c2"/><rect x="264" y="80" width="42" height="10" fill="#d9d2c2"/>' +
      '<path d="M106 80q9-16 18-16t18 16z" fill="#d9d2c2"/><path d="M270 80q9-16 18-16t18 16" fill="#d9d2c2"/>' +
      /* the gates */
      '<rect x="132" y="110" width="136" height="96" fill="#2c3a2a" opacity=".35"/>' + bars +
      '<path d="M132 112q68-40 136 0" stroke="#141414" stroke-width="4" fill="none"/><path d="M132 140h136M132 196h136" stroke="#141414" stroke-width="3"/>' +
      '<circle cx="200" cy="96" r="7" fill="none" stroke="#141414" stroke-width="3"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#6b6359"/><path d="M0 206h400" stroke="#8c8378" stroke-width="3"/>' +
      [[60, 30, ""], [180, 0, "crlf2"], [320, 20, "crlf3"], [250, 40, ""]].map(([x, y, c]) => '<path class="crlf ' + c + '" d="M' + x + ' ' + y + 'q6-6 12 0q-6 6-12 0z" fill="#e0892a"/>').join("") +
      '<text x="200" y="238" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="3">PROVIDENCE, R.I.</text>',
      sky("crs3", "#8fbbe0", "#f3e2c4"));
  }

  /* 4. Howard University's Founders Library: red-brick Georgian front, white columned portico, the white clock tower with its cupola, students crossing the yard */
  function howard() {
    let wins = "";
    [70, 100, 130, 250, 280, 310].forEach(x => { wins += '<rect x="' + x + '" y="128" width="14" height="24" fill="#f4f1ea"/><rect x="' + x + '" y="168" width="14" height="24" fill="#f4f1ea"/>'; });
    const walker = (x, c, cls) => '<g class="crwalk ' + cls + '" style="transform:translateX(' + x + 'px)"><rect x="0" y="216" width="8" height="16" rx="3" fill="' + c + '"/><circle cx="4" cy="211" r="4" fill="#2a1d14"/><path d="M2 232v8M6 232v8" stroke="#222" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#crs4)"/>' +
      /* tower */
      '<rect x="176" y="40" width="48" height="74" fill="#f6f3ec" stroke="#cfcac0" stroke-width="2"/>' +
      '<rect x="182" y="22" width="36" height="20" fill="#f6f3ec" stroke="#cfcac0" stroke-width="2"/><path d="M186 22q14-26 28 0z" fill="#f6f3ec" stroke="#cfcac0" stroke-width="2"/><path d="M200 0v-4" stroke="#999"/>' +
      '<path d="M200 -4v14" stroke="#c9a24a" stroke-width="2"/>' +
      '<circle cx="200" cy="74" r="15" fill="#fff" stroke="#333" stroke-width="2"/>' +
      '<path class="crhand" style="transform-origin:200px 74px" d="M200 74v-12" stroke="#111" stroke-width="2" stroke-linecap="round"/><path class="crhand crhand2" style="transform-origin:200px 74px" d="M200 74h8" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>' +
      /* main block */
      '<rect x="50" y="112" width="300" height="94" fill="#a8432e"/>' +
      (() => { let b = ""; for (let y = 118; y < 206; y += 8) b += '<path d="M50 ' + y + 'h300" stroke="#8a3524" stroke-width="1"/>'; return b; })() + wins +
      '<rect x="46" y="106" width="308" height="8" fill="#f2efe6"/>' +
      /* portico */
      '<path d="M156 118l44-22 44 22z" fill="#f6f3ec" stroke="#cfcac0" stroke-width="2"/><rect x="156" y="118" width="88" height="6" fill="#f2efe6"/>' +
      [162, 182, 212, 232].map(x => '<rect x="' + (x - 3) + '" y="124" width="7" height="82" fill="#fff"/>').join("") +
      '<rect x="190" y="166" width="20" height="40" fill="#3a2a22"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4f8f3e"/><path d="M150 206l-40 54h180l-40-54z" fill="#d9cdb5"/>' +
      walker(0, "#3b4d8f", "") + walker(0, "#c0392b", "crwalk2") +
      tree(26, 206, 1.6, "#3f7d3a") + tree(376, 206, 1.6, "#3f7d3a", "crsway2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="3">THE YARD · WASHINGTON, D.C.</text>',
      sky("crs4", "#5aa9e6", "#d6efff"));
  }

  /* 5. Empire Blvd & Flatbush Av: green street signs, the wall tagged CHUBB ROCK, the Brooklyn Botanic Garden's white glass Palm House behind the trees */
  function corner() {
    let panes = "";
    for (let x = 96; x < 310; x += 12) panes += '<path d="M' + x + ' 92v44" stroke="#9fb6c4" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#crs5)"/>' + stars(16) +
      /* Palm House */
      '<path d="M170 72q30-40 60 0z" fill="#d6e6ee" stroke="#f4f4f0" stroke-width="2"/><path d="M200 34v-8" stroke="#f4f4f0" stroke-width="2"/>' +
      '<rect x="90" y="72" width="220" height="64" fill="#cfe0e8" stroke="#f4f4f0" stroke-width="3"/>' + panes +
      '<path d="M90 92h220" stroke="#f4f4f0" stroke-width="3"/>' +
      '<rect x="176" y="72" width="48" height="64" fill="#efe9dc" stroke="#d6cfbf" stroke-width="2"/><path d="M188 136v-30q12-14 24 0v30" fill="#2c3a55"/>' +
      '<rect class="crbl" x="100" y="100" width="70" height="30" fill="#fff6c2" opacity=".35"/><rect class="crbl crbl2" x="232" y="100" width="70" height="30" fill="#fff6c2" opacity=".35"/>' +
      tree(70, 140, 1.6, "#2e5a2c") + tree(330, 140, 1.6, "#2e5a2c", "crsway2") +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#3b4a6b"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#2f3c58" stroke-width="1"/>'; return b; })() +
      tag("CHUBB ROCK", 14, 196, 40, GOLD, -5) + tag("CHUBBSTER", 196, 218, 22, GREEN, -3) + tag("HITMAN", 270, 172, 22, ORANGE, -8) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="crcar"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="crcar crcar2"><rect x="0" y="240" width="38" height="12" rx="4" fill="#e9e9e9"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="29" cy="252" r="4" fill="#111"/></g>' +
      '<rect x="358" y="58" width="5" height="170" fill="#3d4b3f"/>' +
      blade(296, 62, 100, "Empire Blvd") + blade(290, 88, 106, "Flatbush Av") +
      '<circle class="crflk" cx="360" cy="58" r="4" fill="#fff6c2"/>',
      sky("crs5", "#0b1024", "#33416a"));
  }

  window.SCENES = { prospect: prospect, devon: devon, brown: brown, howard: howard, corner: corner };
})();
