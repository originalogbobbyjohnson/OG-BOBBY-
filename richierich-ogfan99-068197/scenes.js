/* richierich scenes (Regions tab: The Bay Area; Las Palmas, East Oakland 94603). CSS classes prefixed rch- (the page's own anim-train is kept). Every 9 is drawn by nine() with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes rchflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.rch-flk{animation:rchflick 2.6s infinite}.rch-flk2{animation-delay:.9s}' +
    '@keyframes rchglow{0%,100%{opacity:.4}50%{opacity:1}}.rch-glow{animation:rchglow 2.2s ease-in-out infinite}.rch-g2{animation-delay:-1.1s}' +
    '@keyframes rchsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.rch-sw{transform-box:fill-box;transform-origin:50% 100%;animation:rchsway 3s ease-in-out infinite}.rch-sw2{animation-delay:-1.5s}' +
    '@keyframes rchdonut{to{transform:rotate(360deg)}}.rch-donut{transform-origin:200px 186px;animation:rchdonut 2.2s linear infinite}' +
    '@keyframes rchsmoke{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.6);opacity:0}}.rch-sm{transform-box:fill-box;transform-origin:50% 50%;animation:rchsmoke 1.8s ease-out infinite}.rch-sm2{animation-delay:-.6s}.rch-sm3{animation-delay:-1.2s}' +
    '@keyframes rchjump{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.rch-j{animation:rchjump .6s ease-in-out infinite}.rch-j2{animation-delay:-.2s}.rch-j3{animation-delay:-.4s}' +
    '@keyframes rchbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.rch-bm{transform-box:fill-box;transform-origin:50% 0%;animation:rchbeam 3.4s ease-in-out infinite}.rch-bm2{animation-delay:-1.7s}' +
    '@keyframes rchcarL{0%{transform:translateX(480px)}100%{transform:translateX(-160px)}}.rch-cl{animation:rchcarL 5s linear infinite}' +
    '@keyframes rchspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.rch-sp{animation:rchspray 1.4s ease-out infinite}.rch-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* a 9 with a straight stem: bowl + straight vertical line; (x, y) = left of the glyph on the baseline, s = font size */
  const nine = (x, y, s, fill) => { const r = s * 0.23, cx = x + s * 0.3, cy = y - s * 0.48; return '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + r.toFixed(1) + '" fill="none" stroke="' + fill + '" stroke-width="' + (s * 0.14).toFixed(1) + '"/><path d="M' + (cx + r).toFixed(1) + ' ' + (cy - r * 0.3).toFixed(1) + 'V' + y + '" stroke="' + fill + '" stroke-width="' + (s * 0.14).toFixed(1) + '"/>'; };
  const badge = (x, y, txt, color, ink) => '<circle cx="' + x + '" cy="' + y + '" r="12" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const pill = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="52" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + 26) + '" y="' + (y + 4) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  /* green street sign; if nineFirst, the label starts with a drawn 9 */
  const sign = (x, y, w, txt, nineFirst) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
    (nineFirst ? nine(x + 9, y + 16, 13, "#fff") + '<text x="' + (x + 18) + '" y="' + (y + 16) + '" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>'
      : '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>');
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "rch-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s, k) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -60 4 -120" stroke="#4a3a2c" stroke-width="6" fill="none"/><g transform="translate(4 -120)"><g class="rch-sw' + (k ? " rch-sw2" : "") + '">' +
    [-70, -30, 10, 50, 90, 130, 170, 210].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * 20).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 20 - 8).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 38).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 38 + 8).toFixed(1) + '" stroke="#2a5a34" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g></g></g>';
  const GREEN = "#3ddc97", GOLD = "#ffd166", PINK = "#ef476f", TEMPO = "#00843d", ACB = "#1d4f8e";
  const cutlass = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 20q2 -14 18 -16l18 -14h52l18 14q18 2 20 16v6H0z" fill="' + c + '"/><path d="M40 -6h22v10H32zM66 -6h22l10 10H66z" fill="#22303c"/><rect x="0" y="22" width="126" height="4" fill="#d0d0d8"/><circle cx="26" cy="28" r="10" fill="#111"/><circle cx="26" cy="28" r="5" fill="#e0c060"/><circle cx="100" cy="28" r="10" fill="#111"/><circle cx="100" cy="28" r="5" fill="#e0c060"/></g>';

  /* 1. Tempo 98th Avenue: the median platform on International Blvd at 98th Ave, glass canopy, ticket machine, the green Tempo 1T bus sliding in at dusk, palms on the sidewalk */
  function rchstation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 38) + '" y="108" width="28" height="22" rx="2" fill="#1f2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="316" height="50" rx="8" fill="#f4f6f4" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="40" y="134" width="316" height="6" fill="' + TEMPO + '"/><rect x="40" y="140" width="316" height="3" fill="' + ACB + '"/>' +
      '<rect x="44" y="104" width="16" height="42" fill="#1f2a33"/><rect x="216" y="102" width="8" height="46" fill="#3a3e46"/>' +
      '<path d="M342 102q14 2 14 18v20h-16z" fill="#1f2a33"/><rect x="344" y="106" width="10" height="8" rx="1" fill="#111"/><text x="349" y="113" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb84a">1T</text>' +
      '<circle cx="90" cy="152" r="8" fill="#111"/><circle cx="180" cy="152" r="8" fill="#111"/><circle cx="310" cy="152" r="8" fill="#111"/><circle cx="352" cy="140" r="3" fill="#fff6c2" class="rch-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rch1)"/>' + stars(6) +
      '<path d="M0 76l70 -24l60 12l80 -28l70 20l60 -10l60 22v20H0z" fill="#3e4a3a" opacity=".85"/>' +
      palm(24, 160, .8, 0) + palm(380, 160, .9, 1) +
      /* glass canopy over the median platform */
      '<rect x="50" y="62" width="300" height="8" fill="#a8c0cc"/><rect x="50" y="70" width="300" height="3" fill="#5a6a74"/>' +
      [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="72" width="6" height="86" fill="#5a6a74"/>').join("") +
      '<rect class="rch-flk" x="110" y="73" width="40" height="3" fill="#fff3c4"/><rect class="rch-flk rch-flk2" x="250" y="73" width="40" height="3" fill="#fff3c4"/>' +
      /* ticket machine */
      '<rect x="356" y="112" width="20" height="44" rx="2" fill="' + TEMPO + '"/><rect x="360" y="118" width="12" height="10" fill="#cfe8da"/><rect x="361" y="134" width="10" height="3" fill="#111"/>' +
      bus +
      '<rect x="0" y="158" width="400" height="8" fill="#c9c3b6"/><rect x="0" y="156" width="400" height="3" fill="#f2c200"/>' +
      /* International Blvd */
      '<rect x="0" y="166" width="400" height="94" fill="#36373c"/><rect x="0" y="166" width="400" height="20" fill="#a8322a"/>' +
      '<text x="60" y="181" ' + font + ' font-size="10" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text><text x="250" y="181" ' + font + ' font-size="10" fill="#f2e6d8" letter-spacing="4">BUS ONLY</text>' +
      '<path d="M0 222h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="rch-cl">' + cutlass(0, 210, "#5a2a7a") + '</g>' +
      /* station sign: 98th Avenue */
      '<rect x="94" y="12" width="212" height="34" rx="3" fill="#111"/>' + nine(105, 36, 18, "#fff") + '<text x="117" y="36" ' + font + ' font-size="18" fill="#fff">8th Avenue</text>' +
      badge(238, 29, "1T", TEMPO) + pill(254, 29, "TEMPO", ACB),
      sky("rch1", "#24305a", "#f0a464"));
  }

  /* 2. Las Palmas, East Oakland 94603: the flats he came up in, a row of pastel stucco bungalows under tall palms, a candy Cutlass parked out front */
  function rchpalmas() {
    const house = (x, c, roof) => '<g><rect x="' + x + '" y="118" width="86" height="62" fill="' + c + '"/><path d="M' + (x - 6) + ' 120l49 -26l49 26z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 10) + '" y="132" width="26" height="20" fill="#ffe28a" class="rch-glow"/><path d="M' + (x + 10) + ' 142h26M' + (x + 23) + ' 132v20" stroke="#8a6a3a" stroke-width="1.5"/>' +
      '<rect x="' + (x + 54) + '" y="140" width="20" height="40" fill="#5a3a2a"/><rect x="' + (x + 4) + '" y="168" width="40" height="12" fill="none" stroke="#eee" stroke-width="2"/>' + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#rch2)"/>' +
      '<circle cx="320" cy="60" r="26" fill="#ffcf7a" opacity=".85"/>' +
      '<path d="M0 104q90 -30 200 -10q100 -24 200 2V120H0z" fill="#6a7a5a" opacity=".7"/>' +
      house(6, "#f2c6a0", "#a8553a") + house(110, "#c8e0d0", "#7a4a3a") + house(214, "#f4e2a8", "#9a5a3a") + house(318, "#d8c8ec", "#8a4a3a") +
      palm(98, 196, 1.05, 0) + palm(304, 196, 1.15, 1) + palm(206, 196, .8, 1) +
      '<rect x="0" y="180" width="400" height="16" fill="#cfc9bc"/><rect x="0" y="196" width="400" height="64" fill="#3c3d42"/><path d="M0 232h400" stroke="#d8c66a" stroke-width="2" stroke-dasharray="18 14"/>' +
      cutlass(140, 186, "#1f8a5a") +
      '<rect x="8" y="150" width="34" height="14" rx="2" fill="#fff" stroke="#333" stroke-width="1"/>' + nine(11, 161, 9, "#333") + '<text x="16" y="161" ' + font + ' font-size="9" fill="#333">4603</text>',
      sky("rch2", "#f29a64", "#ffd9a8"));
  }

  /* 3. The sideshow: 415's "Side Show" (1989) was the first record about Oakland sideshows. Night intersection, a Cutlass spinning donuts, tire smoke, the crowd's phones up on the corners, streetlights */
  function rchsideshow() {
    const crowd = (x0, n) => Array.from({ length: n }, (_, i) => { const x = x0 + i * 16, h = 26 + (i * 7) % 10; return '<g class="rch-j' + ["", " rch-j2", " rch-j3"][i % 3] + '"><rect x="' + (x - 5) + '" y="' + (150 - h) + '" width="10" height="' + h + '" rx="4" fill="#15131c"/><circle cx="' + x + '" cy="' + (144 - h) + '" r="5" fill="#15131c"/>' + (i % 2 ? '<rect x="' + (x + 3) + '" y="' + (128 - h) + '" width="4" height="7" fill="#bfe4ff" class="rch-glow"/>' : '') + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#rch3)"/>' + stars(14) +
      /* streetlights */
      [40, 360].map(x => '<path d="M' + x + ' 150V54q0 -8 14 -8" stroke="#3a3a44" stroke-width="4" fill="none"/><ellipse class="rch-glow" cx="' + (x + 16) + '" cy="50" rx="9" ry="4" fill="#ffd98a"/>').join("") +
      /* buildings */
      '<rect x="70" y="78" width="80" height="72" fill="#2a2636"/><rect x="250" y="70" width="90" height="80" fill="#2e2a3c"/>' +
      [[80, 90], [104, 90], [128, 90], [262, 84], [290, 84], [318, 84]].map(([x, y], i) => '<rect class="' + (i % 2 ? "rch-glow" : "") + '" x="' + x + '" y="' + y + '" width="14" height="12" fill="#ffd98a" opacity=".8"/>').join("") +
      /* intersection */
      '<rect x="0" y="150" width="400" height="110" fill="#2c2d33"/>' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (20 + i * 12) + '" y="160" width="6" height="22" fill="#d8d8d8" opacity=".5"/>').join("") +
      crowd(18, 4) + crowd(312, 5) +
      /* tire marks */
      '<ellipse cx="200" cy="196" rx="92" ry="34" fill="none" stroke="#111" stroke-width="5" opacity=".7"/><ellipse cx="200" cy="196" rx="70" ry="24" fill="none" stroke="#111" stroke-width="4" opacity=".6"/>' +
      /* smoke */
      [[120, 190], [150, 216], [262, 180], [284, 206]].map(([x, y], i) => '<circle class="rch-sm' + ["", " rch-sm2", " rch-sm3", " rch-sm2"][i] + '" cx="' + x + '" cy="' + y + '" r="18" fill="#d8d8e0" opacity=".5"/>').join("") +
      /* spinning car seen from above */
      '<g class="rch-donut"><g transform="translate(218 175)"><rect x="0" y="0" width="46" height="22" rx="6" fill="#c0283a"/><rect x="13" y="3" width="19" height="16" rx="3" fill="#22303c"/><rect x="2" y="2" width="5" height="5" fill="#fff6c2"/><rect x="2" y="15" width="5" height="5" fill="#fff6c2"/></g></g>' +
      '<rect x="14" y="10" width="80" height="18" rx="3" fill="#111"/><text x="54" y="23" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">SIDE SHOW</text>',
      sky("rch3", "#0a0a1a", "#2a1c3a"));
  }

  /* 4. Jack London Square, Oakland: the jazz-club stage by the water where he still runs "Let's Ride" live. Warm stage, a mic stand, beams sweeping, hands up in the crowd */
  function rchstage() {
    return svg(
      '<rect width="400" height="260" fill="#140c10"/>' +
      /* back wall wood slats */
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="0" width="18" height="150" fill="' + (i % 2 ? "#4a2a1c" : "#55311f") + '"/>').join("") +
      /* paper lanterns */
      [60, 140, 260, 340].map((x, i) => '<path d="M' + x + ' 0v20" stroke="#222" stroke-width="1.5"/><ellipse class="rch-glow' + (i % 2 ? " rch-g2" : "") + '" cx="' + x + '" cy="32" rx="12" ry="14" fill="#ffb060"/><path d="M' + (x - 12) + ' 28h24M' + (x - 11) + ' 36h22" stroke="#c07030" stroke-width="1"/>').join("") +
      /* beams */
      '<g class="rch-bm"><path d="M120 0l-40 150h70z" fill="#fff2c0" opacity=".14"/></g><g class="rch-bm rch-bm2"><path d="M280 0l-30 150h70z" fill="#ffd1e0" opacity=".14"/></g>' +
      /* stage */
      '<rect x="40" y="150" width="320" height="16" fill="#2a1a12"/><rect x="40" y="146" width="320" height="6" fill="#7a4a2a"/>' +
      '<path d="M200 146V96" stroke="#bbb" stroke-width="3"/><path d="M188 146h24" stroke="#bbb" stroke-width="3"/><rect x="194" y="84" width="12" height="16" rx="6" fill="#ccc"/>' +
      '<rect x="64" y="110" width="40" height="36" rx="3" fill="#1a1a1a"/><circle cx="84" cy="128" r="12" fill="#333"/><circle cx="84" cy="128" r="5" fill="#555"/>' +
      '<rect x="296" y="110" width="40" height="36" rx="3" fill="#1a1a1a"/><circle cx="316" cy="128" r="12" fill="#333"/><circle cx="316" cy="128" r="5" fill="#555"/>' +
      /* crowd with hands up */
      '<rect x="0" y="166" width="400" height="94" fill="#0e0a0c"/>' +
      Array.from({ length: 13 }, (_, i) => { const x = 16 + i * 30, y = 196 + (i % 3) * 8; return '<g class="rch-j' + ["", " rch-j2", " rch-j3"][i % 3] + '"><circle cx="' + x + '" cy="' + y + '" r="11" fill="#24181c"/><rect x="' + (x - 14) + '" y="' + (y + 8) + '" width="28" height="60" rx="8" fill="#24181c"/>' +
        (i % 2 ? '<path d="M' + (x - 10) + ' ' + (y + 10) + 'l-8 -30M' + (x + 10) + ' ' + (y + 10) + 'l8 -30" stroke="#24181c" stroke-width="6" stroke-linecap="round"/>' : '') + '</g>'; }).join("") +
      '<text x="200" y="34" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '" class="rch-flk">LET\'S RIDE</text>');
  }

  /* 5. The corner: 98th Ave and Bancroft Ave in East Oakland, RICHIE RICH tagged, Oakland City Hall's white tower lit up downtown behind */
  function rchcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#rch5)"/>' + stars(10) +
      /* downtown skyline far off with City Hall */
      '<path d="M0 124h400v14H0z" fill="#2c2a40"/>' +
      [[60, 100, 22], [86, 92, 18], [250, 96, 24], [280, 104, 20], [310, 88, 16]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (138 - y) + '" fill="#2c2a40"/>').join("") +
      '<g><rect x="168" y="96" width="50" height="40" fill="#e8e6dc"/><rect x="176" y="70" width="34" height="26" fill="#efede4"/><rect x="182" y="50" width="22" height="20" fill="#f2f0e8"/><path d="M182 50q11 -18 22 0z" fill="#f2f0e8"/><path d="M193 32v-6" stroke="#f2f0e8" stroke-width="2"/>' +
      [100, 110, 120].map(y => '<rect x="172" y="' + y + '" width="42" height="3" fill="#ffd98a" class="rch-glow"/>').join("") + '<circle cx="193" cy="60" r="4" fill="#ffd98a" class="rch-glow rch-g2"/></g>' +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#c9a07a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 136v90" stroke="#b48a66" stroke-width="2"/>').join("") +
      tag("RICHIE RICH", 12, 200, 40, GREEN, -6) + tag("415", 24, 156, 22, GOLD, -4) + tag("TEN-SIX", 236, 148, 13, PINK, -4) + tag("DOUBLE R", 168, 220, 15, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(314, 94, 80, "8th Ave", true) + sign(300, 120, 100, "Bancroft Ave") +
      '<g class="rch-sp"><circle cx="128" cy="168" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="rch-sp rch-sp2"><circle cx="134" cy="162" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("rch5", "#120f30", "#c96a4a"));
  }

  window.SCENES = { rchstation: rchstation, rchpalmas: rchpalmas, rchsideshow: rchsideshow, rchstage: rchstage, rchcorner: rchcorner };
})();
