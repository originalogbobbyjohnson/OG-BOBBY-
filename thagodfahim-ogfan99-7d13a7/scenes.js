/* thagodfahim scenes (Regions tab: Atlanta; downtown / South Downtown). CSS classes prefixed tf- (the page's own anim-train is kept).
   1 Garnett station on MARTA's Red + Gold lines, the open-air island platform just south of the downtown tunnel portal, next to the bus terminal
   2 Krog Street Tunnel (Cabbagetown / Inman Park): the concrete underpass covered wall to wall in paint, a freight rolling over the top
   3 Little Five Points: the painted storefronts at Euclid and Moreland, a record shop window with vinyl spinning (the vinyl world his tapes live in)
   4 Mercedes-Benz Stadium downtown: the silver wedge panels, the big glass window wall and the eight-petal roof opening
   5 Peachtree St SW and Mitchell St SW, by Garnett: green signs, FAHIM tagged on the brick, Atlanta City Hall's cream Art Deco tower behind
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tfflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.tf-flk{animation:tfflick 2.6s infinite}.tf-flk2{animation-delay:1.1s}' +
    '@keyframes tfglow{0%,100%{opacity:.5}50%{opacity:1}}.tf-glow{animation:tfglow 2.4s ease-in-out infinite}.tf-g2{animation-delay:-1.2s}' +
    '@keyframes tfbike{0%{transform:translateX(-80px)}100%{transform:translateX(480px)}}.tf-bike{animation:tfbike 7s linear infinite}' +
    '@keyframes tffreight{0%{transform:translateX(420px)}100%{transform:translateX(-620px)}}.tf-fr{animation:tffreight 12s linear infinite}' +
    '@keyframes tfspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tf-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tfspin 1.8s linear infinite}' +
    '@keyframes tfpetal{0%,20%{transform:translate(0,0)}50%,70%{transform:translate(var(--dx),var(--dy))}100%{transform:translate(0,0)}}.tf-pt{animation:tfpetal 8s ease-in-out infinite}' +
    '@keyframes tfspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tf-sp{animation:tfspray 1.4s ease-out infinite}.tf-sp2{animation-delay:.45s}' +
    '@keyframes tfcar{0%{transform:translateX(-140px)}100%{transform:translateX(540px)}}.tf-car{animation:tfcar 9s linear infinite}.tf-car2{animation-delay:-4.5s;animation-duration:11s}' +
    '@keyframes tfbeam{0%,100%{opacity:.15}50%{opacity:.45}}.tf-beam{animation:tfbeam 3s ease-in-out infinite}.tf-b2{animation-delay:-1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const pill = (x, y, txt, bg, fg) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + bg + '" stroke="#fff" stroke-width="1.2"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + fg + '">' + txt + '</text>';
  const GOLD = "#e8c15a", RED = "#c8323a", STEEL = "#9fb4c8", MRED = "#ce242b", MGOLD = "#d4a723", MBLUE = "#0075b2", MORANGE = "#f47b20";
  const towers = (fill, lit) => '<g fill="' + fill + '">' +
    '<rect x="8" y="70" width="30" height="80"/><rect x="44" y="50" width="22" height="100"/><rect x="72" y="82" width="34" height="68"/>' +
    '<rect x="118" y="36" width="26" height="114"/><path d="M118 36l13 -14l13 14z"/><rect x="150" y="64" width="30" height="86"/>' +
    '<rect x="232" y="44" width="28" height="106"/><rect x="266" y="74" width="40" height="76"/><rect x="312" y="56" width="24" height="94"/><rect x="342" y="80" width="50" height="70"/></g>' +
    (lit ? Array.from({ length: 34 }, (_, i) => { const xs = [14, 26, 48, 58, 78, 92, 122, 134, 156, 168, 238, 250, 272, 290, 318, 328, 350, 372]; const x = xs[i % xs.length], y = 60 + ((i * 23) % 80); return '<rect class="' + (i % 4 ? "" : "tf-glow") + '" x="' + x + '" y="' + y + '" width="5" height="4" fill="#ffd98a" opacity=".8"/>'; }).join("") : "");

  /* 1. Garnett station: open-air island platform south of the downtown tunnel, Red + Gold bullets, a silver MARTA car pulling in */
  function tfstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (36 + i * 42) + '" y="140" width="28" height="22" rx="3" fill="#cfe6f7" opacity=".9"/>').join("");
    const tr = '<g class="anim-train"><rect x="14" y="128" width="330" height="70" rx="9" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="14" y="170" width="330" height="7" fill="' + MBLUE + '"/><rect x="14" y="179" width="330" height="3" fill="' + MORANGE + '"/>' +
      '<rect x="322" y="136" width="18" height="30" rx="3" fill="#2b3340"/><circle cx="336" cy="188" r="4" fill="#fff6c2"/>' +
      '<rect x="160" y="132" width="24" height="60" rx="2" fill="none" stroke="#6b7280" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tf1)"/>' + towers("#2a2f45", true) +
      /* tunnel portal on the left, the bus terminal roof on the right */
      '<path d="M0 104h70v96H0z" fill="#5b5d63"/><path d="M8 200v-60q27 -30 54 0v60z" fill="#0b0c10"/>' +
      '<rect x="318" y="96" width="82" height="30" fill="#4b5060"/><rect x="318" y="92" width="82" height="6" fill="#6f7686"/>' +
      '<text x="349" y="115" text-anchor="middle" ' + font + ' font-size="8" fill="#d8dde6">BUS TERMINAL</text>' +
      /* canopy and columns */
      '<rect x="0" y="82" width="400" height="10" fill="#7b828f"/><rect x="0" y="92" width="400" height="4" fill="#4c525d"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 70) + '" y="96" width="7" height="104" fill="#8b919c"/>').join("") +
      '<rect class="tf-flk" x="60" y="96" width="60" height="3" fill="#fff5c8" opacity=".8"/><rect class="tf-flk tf-flk2" x="250" y="96" width="60" height="3" fill="#fff5c8" opacity=".8"/>' +
      '<path d="M0 198h400v8H0z" fill="#3a3d44"/>' + tr +
      '<rect x="0" y="206" width="400" height="54" fill="#a7a49c"/><rect x="0" y="206" width="400" height="6" fill="' + MGOLD + '"/>' +
      /* the black station sign */
      '<rect x="92" y="102" width="216" height="28" rx="3" fill="#111" stroke="#e6e6e6" stroke-width="1.5"/>' +
      '<text x="150" y="122" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">GARNETT</text>' +
      pill(210, 116, "RED", MRED, "#fff") + pill(254, 116, "GOLD", MGOLD, "#111") +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#3a3a3a">SOUTH DOWNTOWN  ·  PEACHTREE ST SW</text>',
      sky("tf1", "#141a36", "#6a4a5e"));
  }

  /* 2. Krog Street Tunnel: concrete underpass, every inch painted, a freight rolling over the top, a bike rolling through */
  function tfkrog() {
    const cols = ["#e84a5f", "#f7b538", "#3fb8af", "#7d5ba6", "#f26b38", "#5ec4ff", "#9be15d", "#ff8fc7"];
    const blobs = Array.from({ length: 40 }, (_, i) => { const x = (i * 53) % 400, y = 96 + ((i * 29) % 110), w = 28 + (i * 13) % 40, h = 12 + (i * 7) % 22; return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (h / 2) + '" fill="' + cols[i % cols.length] + '" opacity=".85" transform="rotate(' + ((i % 5) - 2) * 4 + ' ' + x + ' ' + y + ')"/>'; }).join("");
    const lights = [60, 140, 220, 300].map((x, i) => '<rect class="tf-flk' + (i % 2 ? " tf-flk2" : "") + '" x="' + x + '" y="88" width="40" height="4" fill="#ffd27a"/>').join("");
    const fr = '<g class="tf-fr">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (i * 104) + '" y="22" width="98" height="40" fill="' + ["#6b3a2a", "#3d4a5c", "#6b3a2a", "#59604a", "#3d4a5c", "#6b3a2a"][i] + '" stroke="#111" stroke-width="2"/><circle cx="' + (i * 104 + 20) + '" cy="64" r="5" fill="#111"/><circle cx="' + (i * 104 + 78) + '" cy="64" r="5" fill="#111"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tf2)"/>' + fr +
      '<rect x="0" y="68" width="400" height="14" fill="#6d6a64"/><rect x="0" y="66" width="400" height="3" fill="#2a2a2a"/>' +
      '<rect x="0" y="82" width="400" height="128" fill="#8c8a84"/>' + blobs + lights +
      /* tunnel mouth glow at the far end */
      '<rect x="150" y="110" width="100" height="90" fill="#24242c"/><rect x="170" y="126" width="60" height="74" fill="#f2c879" opacity=".55"/>' +
      tag("DUMP GAWD", 18, 136, 30, GOLD, -5) + tag("100 TAPES", 266, 132, 22, "#fff", -4) + tag("SHOGUNN", 270, 186, 24, RED, -3) + tag("ATL", 40, 190, 30, "#5ec4ff", 4) +
      '<rect x="0" y="210" width="400" height="50" fill="#3b3b40"/><path d="M0 232h400" stroke="#d8c46a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tf-bike"><circle cx="20" cy="236" r="10" fill="none" stroke="#111" stroke-width="3"/><circle cx="52" cy="236" r="10" fill="none" stroke="#111" stroke-width="3"/>' +
      '<path d="M20 236l14 -16h14l4 16M34 220l-4 -8h-6M48 220l2 -6h6" stroke="#111" stroke-width="3" fill="none" stroke-linejoin="round"/></g>',
      sky("tf2", "#1d2448", "#c86b4a"));
  }

  /* 3. Little Five Points: painted storefronts, a record shop window with a turntable spinning, crates out front */
  function tfrecords() {
    const bins = Array.from({ length: 12 }, (_, i) => '<rect x="' + (136 + (i % 6) * 22) + '" y="' + (196 + Math.floor(i / 6) * 0) + '" width="4" height="22" fill="' + ["#e84a5f", "#3fb8af", "#f7b538", "#111", "#7d5ba6", "#f26b38"][i % 6] + '" transform="rotate(' + (i % 2 ? -8 : 6) + ' ' + (138 + (i % 6) * 22) + ' 218)"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tf3)"/>' +
      /* left building: purple, right building: teal, middle: the record shop */
      '<rect x="0" y="60" width="120" height="170" fill="#6a3d8f"/><rect x="0" y="60" width="120" height="10" fill="#f7b538"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (12 + i * 36) + '" y="84" width="24" height="34" fill="#2b1c3a"/><rect class="tf-glow' + (i % 2 ? " tf-g2" : "") + '" x="' + (14 + i * 36) + '" y="86" width="20" height="30" fill="#ffd98a" opacity=".35"/>').join("") +
      '<rect x="280" y="70" width="120" height="160" fill="#2f8f88"/><rect x="280" y="70" width="120" height="10" fill="#e84a5f"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (292 + i * 36) + '" y="92" width="24" height="34" fill="#163f3c"/>').join("") +
      '<rect x="120" y="50" width="160" height="180" fill="#d9573a"/><rect x="120" y="50" width="160" height="12" fill="#111"/>' +
      '<rect x="134" y="72" width="132" height="26" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="16" fill="' + GOLD + '" letter-spacing="3">RECORDS</text>' +
      /* window with turntable and wall of sleeves */
      '<rect x="132" y="108" width="136" height="80" fill="#1a1a22" stroke="#111" stroke-width="3"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (138 + i * 26) + '" y="114" width="22" height="22" fill="' + ["#3fb8af", "#f7b538", "#7d5ba6", "#e84a5f", "#5ec4ff"][i] + '"/>').join("") +
      '<rect x="160" y="150" width="80" height="34" rx="3" fill="#3a3a44"/>' +
      '<g class="tf-spin"><circle cx="190" cy="166" r="15" fill="#0c0c0c"/><circle cx="190" cy="166" r="10" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="190" cy="166" r="5" fill="' + RED + '"/><path d="M190 152v6" stroke="#666" stroke-width="1.5"/></g>' +
      '<path d="M226 154l-8 14" stroke="#c9ced6" stroke-width="3" stroke-linecap="round"/><circle cx="226" cy="154" r="3" fill="#c9ced6"/>' +
      /* crates on the sidewalk */
      '<rect x="0" y="228" width="400" height="32" fill="#8a8680"/><rect x="0" y="226" width="400" height="4" fill="#cfcac2"/>' +
      '<rect x="132" y="210" width="136" height="20" fill="#9a6b3c" stroke="#5a3c1e" stroke-width="2"/>' + bins +
      sign(20, 30, 70, "Euclid Av") + '<rect x="52" y="52" width="5" height="176" fill="#2f2f2f"/>' + sign(4, 54, 96, "Moreland Av"),
      sky("tf3", "#3a6fb0", "#f2c37a"));
  }

  /* 4. Mercedes-Benz Stadium: silver wedge panels, the glass window wall, the eight-petal roof sliding open */
  function tfstadium() {
    const petals = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4, cx = 200, cy = 66, dx = Math.cos(a) * 10, dy = Math.sin(a) * 4; return '<path class="tf-pt" style="--dx:' + dx.toFixed(1) + 'px;--dy:' + dy.toFixed(1) + 'px" d="M' + cx + ' ' + cy + 'L' + (cx + Math.cos(a - 0.38) * 62).toFixed(1) + ' ' + (cy + Math.sin(a - 0.38) * 20).toFixed(1) + 'L' + (cx + Math.cos(a + 0.38) * 62).toFixed(1) + ' ' + (cy + Math.sin(a + 0.38) * 20).toFixed(1) + 'z" fill="' + (i % 2 ? "#b9c2cc" : "#d7dde4") + '" stroke="#7a8592" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#tf4)"/>' +
      '<path class="tf-beam" d="M120 70L60 0h30z" fill="#fff8d0"/><path class="tf-beam tf-b2" d="M280 70L340 0h-30z" fill="#fff8d0"/>' +
      /* stadium body: angular wedges */
      '<path d="M20 200L70 90L200 50L330 90L380 200z" fill="#8f99a5"/>' +
      '<path d="M20 200L70 90L130 72L110 200z" fill="#a9b3be"/><path d="M110 200L130 72L200 50L190 200z" fill="#c3cbd4"/>' +
      '<path d="M190 200L200 50L270 72L292 200z" fill="#7f8995"/><path d="M292 200L270 72L330 90L380 200z" fill="#9aa4b0"/>' +
      /* glass window wall */
      '<path d="M120 200L140 110L260 110L280 200z" fill="#1c2c44"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (140 + i * 20) + ' 110L' + (120 + i * 26.7).toFixed(1) + ' 200" stroke="#5f7da3" stroke-width="1.5"/>').join("") +
      '<path d="M135 132H265M130 156H270M125 180H275" stroke="#5f7da3" stroke-width="1.5"/>' +
      '<rect class="tf-glow" x="150" y="140" width="100" height="40" fill="#ffd98a" opacity=".25"/>' +
      /* roof: ring and petals */
      '<ellipse cx="200" cy="66" rx="92" ry="28" fill="#5a6472"/><ellipse cx="200" cy="66" rx="70" ry="22" fill="#2a3442"/>' + petals +
      '<rect x="0" y="200" width="400" height="60" fill="#3b3f46"/><path d="M0 226h400" stroke="#e8c15a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tf-car"><rect x="0" y="232" width="56" height="16" rx="5" fill="' + RED + '"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="44" cy="250" r="5" fill="#111"/></g>' +
      '<g class="tf-car tf-car2"><rect x="0" y="206" width="56" height="14" rx="5" fill="#e8e4dc"/><circle cx="12" cy="222" r="4.5" fill="#111"/><circle cx="44" cy="222" r="4.5" fill="#111"/></g>',
      sky("tf4", "#0d1430", "#3b4a7a"));
  }

  /* 5. Peachtree St SW and Mitchell St SW: green signs, FAHIM tagged on the brick, City Hall's cream Art Deco tower behind */
  function tfcorner() {
    const hall = '<g>' +
      '<rect x="150" y="70" width="100" height="80" fill="#e6dcc4"/>' +
      '<rect x="166" y="40" width="68" height="32" fill="#ece3cc"/><rect x="178" y="20" width="44" height="22" fill="#f1e9d4"/><rect x="190" y="6" width="20" height="16" fill="#f3ecd9"/><rect x="197" y="0" width="6" height="8" fill="#f3ecd9"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (156 + i * 16) + '" y="74" width="4" height="76" fill="#cfc3a6"/>').join("") +
      Array.from({ length: 5 }, (_, c) => Array.from({ length: 5 }, (_, r) => '<rect class="' + ((r + c) % 3 ? "" : "tf-glow") + '" x="' + (162 + c * 16) + '" y="' + (80 + r * 13) + '" width="7" height="8" fill="' + ((r + c) % 3 ? "#6a6458" : "#ffe3a0") + '"/>').join("")).join("") +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (176 + i * 16) + '" y="46" width="6" height="20" fill="#8c8270"/>').join("") +
      '<circle class="tf-glow" cx="200" cy="12" r="3" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tf5)"/>' +
      '<g fill="#272c40"><rect x="40" y="90" width="40" height="60"/><rect x="86" y="70" width="34" height="80"/><rect x="270" y="80" width="40" height="70"/><rect x="316" y="96" width="50" height="54"/></g>' + hall +
      '<rect x="0" y="140" width="400" height="86" fill="#7a3a2c"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6a3024" stroke-width="1"/>').join("") +
      tag("FAHIM", 22, 206, 62, GOLD, -6) + tag("DUMP GAWD", 196, 170, 22, RED, -4) + tag("100 TAPES", 26, 222, 16, "#fff", -3) + tag("SHOGUNN", 196, 214, 20, STEEL, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55534e"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="340" y="98" width="6" height="128" fill="#2f2f2f"/>' + sign(298, 100, 98, "Peachtree St SW") + sign(302, 126, 90, "Mitchell St SW") +
      '<g class="tf-sp"><circle cx="182" cy="152" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tf-sp tf-sp2"><circle cx="188" cy="146" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("tf5", "#0e1230", "#7a3f4e"));
  }

  window.SCENES = { tfstation: tfstation, tfkrog: tfkrog, tfrecords: tfrecords, tfstadium: tfstadium, tfcorner: tfcorner };
})();
