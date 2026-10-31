/* East Harlem (El Barrio, Lexington Av / 110th St) opening scenes for the Bodega Bamz game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes mnr{from{transform:translateX(-260px)}to{transform:translateX(460px)}}' +
    '.mnr{animation:mnr 8s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}.fl2{animation-delay:.5s}' +
    '@keyframes rip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rip{animation:rip 2.4s ease-in-out infinite}.rp2{animation-delay:1.2s}' +
    '@keyframes splash{0%{opacity:.9;transform:scale(.3)}100%{opacity:0;transform:scale(1.6)}}' +
    '.spl{transform-box:fill-box;transform-origin:50% 50%;animation:splash 1.6s ease-out infinite}.sp2{animation-delay:.8s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.sun{transform-box:fill-box;transform-origin:50% 50%;animation:spin 24s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
    '@keyframes spray{0%,100%{opacity:.1}50%{opacity:.9}}' +
    '.spr{animation:spray 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  /* Puerto Rican flag: five red/white stripes, blue triangle, white star */
  const prFlag = (x, y, w, cls) => {
    const h = w * 2 / 3, sh = h / 5; let s = '<g class="flag' + (cls || "") + '">';
    for (let i = 0; i < 5; i++) s += '<rect x="' + x + '" y="' + (y + i * sh) + '" width="' + w + '" height="' + sh + '" fill="' + (i % 2 ? "#fff" : "#ed0000") + '"/>';
    s += '<path d="M' + x + ' ' + y + 'l' + (w * 0.45) + ' ' + (h / 2) + 'l-' + (w * 0.45) + ' ' + (h / 2) + 'z" fill="#0050f0"/>';
    s += '<circle cx="' + (x + w * 0.15) + '" cy="' + (y + h / 2) + '" r="' + (h * 0.09) + '" fill="#fff"/></g>';
    return s;
  };
  /* a simple faceless painted figure for the mural */
  const fig = (x, y, s, shirt, skin) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="0" cy="-30" r="7" fill="' + skin + '"/><path d="M-10 -22h20l3 24h-26z" fill="' + shirt + '"/><rect x="-8" y="2" width="6" height="16" fill="#2a2a3a"/><rect x="2" y="2" width="6" height="16" fill="#2a2a3a"/></g>';
  const GREEN = "#00933c", MINT = "#7cf29a", RED = "#ed2939", BLUE = "#3a6bff", GOLD = "#f2c14e";

  /* 1. The 6 pulling into 110 St on Lexington Av, underground: white tile, a blue-and-gold mosaic band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d4cfc2" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d4cfc2" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 18) band += '<rect x="' + x + '" y="30" width="9" height="9" fill="#2b4f8a"/><rect x="' + (x + 9) + '" y="30" width="9" height="9" fill="#d9b45a"/>';
    let cols = "";
    [24, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#efeadf"/>' + tiles + band +
      '<rect x="70" y="54" width="260" height="36" rx="4" fill="#111"/><rect x="70" y="54" width="260" height="4" fill="#fff"/>' +
      '<text x="84" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">110 St</text>' +
      '<text x="148" y="79" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#ccc">Lexington Av</text>' + bullet(306, 73, "6", GREEN) +
      '<g class="flk"><rect x="150" y="10" width="100" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "6", GREEN) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("BAMZ", 24, 242, 34, MINT, -5) + tag("EL BARRIO", 236, 240, 26, RED, -7));
  }

  /* 2. "The Spirit of East Harlem" mural on the side of the tenement at Lexington Av and 104th: a whole wall of neighbors painted
        big — families, a domino table, the flag — over a sky-blue ground, a kid on a bike rolling past */
  function spirit() {
    let figs = "";
    const skins = ["#8a5a3a", "#c9905e", "#5a3a26", "#e0b48a", "#a8714a"];
    const shirts = [RED, "#f7f3ea", GOLD, "#2e8b57", BLUE, "#e07a3a", "#9b6bd8", "#f7f3ea"];
    for (let i = 0; i < 8; i++) figs += fig(118 + i * 24, 100, 1, shirts[i], skins[i % 5]);
    for (let i = 0; i < 7; i++) figs += fig(128 + i * 26, 174, 1.15, shirts[(i + 3) % 8], skins[(i + 2) % 5]);
    return svg(
      '<rect width="400" height="260" fill="url(#skyM)"/>' +
      /* neighbouring tenement with fire escapes */
      '<rect x="0" y="40" width="90" height="170" fill="#8a4a32"/>' +
      [60, 96, 132, 168].map(y => '<rect x="12" y="' + y + '" width="18" height="22" fill="#2a2a30"/><rect x="52" y="' + y + '" width="18" height="22" fill="#2a2a30"/><path d="M6 ' + (y + 24) + 'h74" stroke="#1a1a1a" stroke-width="3"/>').join("") +
      /* the mural wall */
      '<rect x="96" y="22" width="304" height="188" fill="#d8c8a8"/>' +
      '<rect x="104" y="30" width="288" height="172" fill="#8fc8e8"/>' +
      '<rect x="104" y="150" width="288" height="52" fill="#b98a5a"/>' +
      '<circle cx="360" cy="54" r="14" fill="' + GOLD + '"/>' + prFlag(124, 40, 44) +
      '<text x="250" y="58" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="13" fill="#1a3a6a">The Spirit of East Harlem</text>' +
      figs +
      /* domino table in front */
      '<rect x="216" y="184" width="70" height="8" fill="#5a3a20"/><rect x="222" y="192" width="4" height="10" fill="#5a3a20"/><rect x="276" y="192" width="4" height="10" fill="#5a3a20"/>' +
      [226, 238, 250, 262].map(x => '<rect x="' + x + '" y="179" width="8" height="5" fill="#f7f3ea" stroke="#222" stroke-width=".6"/>').join("") +
      '<rect x="0" y="210" width="400" height="12" fill="#a8a8a8"/><rect x="0" y="222" width="400" height="38" fill="#2b2d31"/>' +
      '<g class="mnr"><circle cx="20" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/><circle cx="50" cy="248" r="8" fill="none" stroke="#111" stroke-width="2.5"/>' +
        '<path d="M20 248l12-12h14l4 12M32 236l-4-6" stroke="' + RED + '" stroke-width="3" fill="none"/>' +
        '<circle cx="34" cy="216" r="5" fill="#8a5a3a"/><path d="M34 221l2 12" stroke="' + MINT + '" stroke-width="6"/></g>',
      sky("skyM", "#3d78c4", "#cfe6f5"));
  }

  /* 3. Thomas Jefferson Park pool at 112th and the FDR: the big 1936 outdoor pool, the red-brick bathhouse with its arches, swimmers splashing */
  function pool() {
    let arches = "";
    for (let x = 60; x < 350; x += 36) arches += '<path d="M' + x + ' 116v-22a10 10 0 0 1 20 0v22z" fill="#3a2a22"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skyP)"/>' +
      '<g class="sun"><circle cx="352" cy="40" r="18" fill="' + GOLD + '"/>' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<rect x="350" y="12" width="4" height="10" fill="' + GOLD + '" transform="rotate(' + a + ' 352 40)"/>').join("") + '</g>' +
      /* trees */
      '<circle cx="18" cy="74" r="26" fill="#3f8a3a"/><circle cx="380" cy="86" r="24" fill="#3f8a3a"/>' +
      /* bathhouse */
      '<rect x="40" y="70" width="320" height="50" fill="#b04a30"/><rect x="36" y="64" width="328" height="8" fill="#e8dcc0"/>' +
      '<rect x="176" y="50" width="48" height="20" fill="#b04a30"/><rect x="172" y="46" width="56" height="6" fill="#e8dcc0"/>' + arches +
      '<rect x="40" y="116" width="320" height="6" fill="#e8dcc0"/>' +
      /* deck and pool */
      '<rect x="0" y="122" width="400" height="138" fill="#d9d4c8"/>' +
      '<rect x="24" y="138" width="352" height="104" rx="4" fill="#3fb6e0" stroke="#f7f3ea" stroke-width="4"/>' +
      [60, 110, 160, 210, 260, 310].map(x => '<path d="M' + x + ' 142v96" stroke="#2a8fbf" stroke-width="2" stroke-dasharray="6 6"/>').join("") +
      '<g class="rip"><path d="M40 160h40M150 186h50M270 170h40M90 220h40" stroke="#bfefff" stroke-width="2"/></g>' +
      '<g class="rip rp2"><path d="M200 154h30M310 210h40M50 196h30" stroke="#bfefff" stroke-width="2"/></g>' +
      '<circle class="spl" cx="130" cy="200" r="10" fill="none" stroke="#fff" stroke-width="2"/><circle class="spl sp2" cx="290" cy="186" r="10" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<g class="bob"><circle cx="130" cy="198" r="5" fill="#8a5a3a"/><circle cx="290" cy="184" r="5" fill="#c9905e"/><circle cx="210" cy="214" r="5" fill="#5a3a26"/></g>' +
      /* lifeguard chair */
      '<path d="M368 238l6-40M388 238l-6-40M370 214h16" stroke="#f7f3ea" stroke-width="3"/><rect x="368" y="192" width="20" height="6" fill="' + RED + '"/>' +
      '<rect x="370" y="168" width="2" height="24" fill="#555"/>' + prFlag(372, 168, 20, " fl2"),
      sky("skyP", "#2f8ad8", "#bfe4f7"));
  }

  /* 4. A Nuyorican casita in a community garden: the little wooden house on stilts with a porch, flags waving, a piragua cart out front */
  function casita() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<rect x="' + x + '" y="170" width="6" height="30" fill="#e8e2d0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skyK)"/>' +
      /* tenements behind */
      '<rect x="0" y="40" width="110" height="140" fill="#9a5a3a"/><rect x="290" y="30" width="110" height="150" fill="#7a4a3a"/>' +
      [56, 90, 124].map(y => '<rect x="14" y="' + y + '" width="16" height="20" fill="#2a2a30"/><rect x="62" y="' + y + '" width="16" height="20" fill="#2a2a30"/><rect x="304" y="' + y + '" width="16" height="20" fill="#2a2a30"/><rect x="356" y="' + y + '" width="16" height="20" fill="#2a2a30"/>').join("") +
      /* garden */
      '<rect x="0" y="178" width="400" height="32" fill="#4f8a3a"/>' +
      '<circle cx="60" cy="176" r="14" fill="#3f7a2f"/><circle cx="330" cy="172" r="18" fill="#3f7a2f"/><circle cx="50" cy="170" r="3" fill="' + RED + '"/><circle cx="324" cy="164" r="3" fill="' + GOLD + '"/>' +
      /* casita */
      '<rect x="140" y="160" width="6" height="24" fill="#5a3a20"/><rect x="250" y="160" width="6" height="24" fill="#5a3a20"/>' +
      '<rect x="128" y="104" width="140" height="58" fill="#3fc1b0" stroke="#1a6a60" stroke-width="2"/>' +
      '<path d="M118 106l80-40 80 40z" fill="' + RED + '" stroke="#7a1010" stroke-width="2"/>' +
      '<rect x="150" y="118" width="24" height="20" fill="#fff1c9" stroke="' + GOLD + '" stroke-width="3"/><rect x="222" y="118" width="24" height="20" fill="#fff1c9" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="186" y="120" width="24" height="42" fill="' + GOLD + '"/>' +
      '<rect x="120" y="160" width="156" height="6" fill="#8a5a30"/>' + [124, 140, 156, 172, 224, 240, 256, 272].map(x => '<rect x="' + x + '" y="148" width="3" height="12" fill="#f7f3ea"/>').join("") +
      '<path d="M120 148h56M222 148h54" stroke="#f7f3ea" stroke-width="3"/>' +
      '<rect x="270" y="56" width="3" height="110" fill="#555"/>' + prFlag(273, 56, 42) +
      '<rect x="122" y="70" width="2" height="40" fill="#555"/>' + prFlag(124, 70, 26, " fl2") +
      '<rect x="0" y="200" width="400" height="0"/>' + fence +
      /* piragua cart */
      '<rect x="0" y="210" width="400" height="12" fill="#a8a8a8"/><rect x="0" y="222" width="400" height="38" fill="#2b2d31"/>' +
      '<g class="bob"><path d="M300 166q30-22 60 0z" fill="#f7f3ea" stroke="' + RED + '" stroke-width="2"/><rect x="329" y="166" width="2" height="30" fill="#555"/></g>' +
      '<rect x="306" y="196" width="50" height="22" rx="3" fill="' + BLUE + '"/>' +
      [[310, RED], [318, GOLD], [326, "#2e8b57"], [334, "#9b6bd8"], [342, "#ff7fb0"]].map(([x, c]) => '<rect x="' + x + '" y="184" width="6" height="12" rx="2" fill="' + c + '"/>').join("") +
      '<text x="331" y="211" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">PIRAGUAS</text>' +
      '<circle cx="314" cy="222" r="5" fill="#111"/><circle cx="348" cy="222" r="5" fill="#111"/>',
      sky("skyK", "#ff9a5a", "#ffe0b0"));
  }

  /* 5. The corner: Lexington Av and E 110 St, co-named Tito Puente Way — green street signs, a wall with his name sprayed on it */
  function corner() {
    let brick = "";
    for (let y = 40; y < 200; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#7a3a2c"/>';
    return svg(
      '<rect width="400" height="260" fill="#160d10"/>' +
      '<rect x="0" y="40" width="400" height="160" fill="#5a2a22"/>' + brick +
      '<rect x="0" y="0" width="400" height="40" fill="url(#skyC)"/>' +
      tag("BAMZ", 130, 128, 60, MINT, -8) +
      '<g class="drip"><rect x="158" y="124" width="4" height="22" fill="' + MINT + '"/><rect x="226" y="118" width="4" height="30" fill="' + MINT + '"/></g>' +
      tag("TANBOYS", 262, 166, 24, GOLD, -4) + tag("100 KEEP IT", 130, 190, 22, RED, 4) +
      '<circle class="spr" cx="360" cy="92" r="14" fill="' + MINT + '" opacity=".4"/>' +
      prFlag(330, 52, 48) +
      '<rect x="42" y="30" width="6" height="190" fill="#4a5a4a"/>' +
      '<rect x="-4" y="30" width="104" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="47" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Lexington Av</text>' +
      '<rect x="4" y="58" width="84" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="46" y="74" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">E 110 St</text>' +
      '<rect x="0" y="82" width="92" height="16" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="46" y="94" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8.5" fill="#fff">Tito Puente Way</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a9a"/><rect x="0" y="214" width="400" height="46" fill="#2b2d31"/>',
      sky("skyC", "#0f1a33", "#3a2a5a"));
  }

  window.SCENES = { train, spirit, pool, casita, corner };
})();
