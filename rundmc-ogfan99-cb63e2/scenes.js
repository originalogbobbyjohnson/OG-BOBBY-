/* Run-DMC (Hollis, Queens) opening scenes. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes up{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}' +
    '.up{animation:up 1.1s ease-in-out infinite}.up2{animation-delay:.35s}.up3{animation-delay:.7s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.sw{transform-origin:200px 0;animation:sweep 4s ease-in-out infinite}.sw2{animation-delay:-2s}' +
    '@keyframes snow{0%{transform:translateY(-20px)}100%{transform:translateY(280px)}}' +
    '.sn{animation:snow 7s linear infinite}.sn2{animation-delay:-2.3s}.sn3{animation-delay:-4.6s}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bl1{animation:blink 1s infinite}.bl2{animation:blink 1s infinite .5s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.wv{transform-box:fill-box;transform-origin:0 0;animation:wave 2s ease-in-out infinite}.wv2{animation-delay:-1s}' +
    '@keyframes drift{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}' +
    '.dr{animation:drift 26s linear infinite}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 3s linear infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  /* a 9 drawn by hand: round head + straight stem. x = left edge, y = baseline, sz = font size */
  const nine = (x, y, sz, c) => { const r = sz * 0.24, w = sz * 0.16; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const RED = "#e63946", WHITE = "#f7f3ea", GOLD = "#f2c14e";
  const street = (x, y, w, txt) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  /* plain white sneaker with a shell toe, no stripes or marks */
  const kick = (x, y, s) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')">' +
    '<path d="M0 0h22q4 0 8 4l10 4q4 2 4 6v4H0z" fill="#fafafa" stroke="#222" stroke-width="1.4"/>' +
    '<path d="M30 6q10 0 14 8h-14z" fill="#e8e2d0" stroke="#222" stroke-width="1"/>' +
    '<rect x="0" y="15" width="44" height="4" fill="#ddd" stroke="#222" stroke-width="1"/></g>';

  /* 1. The F pulling into 169 St, underground under Hillside Av: the last stop before the end of the line, the way down to Hollis */
  function station() {
    let tiles = "";
    for (let y = 0; y < 118; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ecdf"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="130" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let cols = "";
    [30, 370].forEach(x => cols += '<rect x="' + (x - 4) + '" y="0" width="8" height="190" fill="#1e2a3a"/><rect x="' + (x - 7) + '" y="0" width="14" height="5" fill="#141c28"/>');
    return svg(
      '<rect width="400" height="260" fill="#dcd4c0"/>' + tiles +
      /* violet tile band and the name tablets */
      '<rect x="0" y="30" width="400" height="14" fill="#5b3f8c"/><rect x="0" y="28" width="400" height="2" fill="#2e1f4a"/><rect x="0" y="44" width="400" height="2" fill="#2e1f4a"/>' +
      '<rect class="flk" x="0" y="0" width="400" height="5" fill="#fffbe0" opacity=".8"/>' +
      /* black station sign */
      '<rect x="96" y="60" width="208" height="34" rx="4" fill="#111"/><rect x="96" y="60" width="208" height="4" fill="#fff"/>' +
      '<text x="112" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">16</text>' + nine(131.5, 85, 16.5, "#fff") + '<text x="148" y="85" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">St</text>' +
      bullet(282, 78, "F", "#ff6319") +
      '<text x="200" y="110" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="#3a3326">HILLSIDE AV · BUS TO HOLLIS →</text>' +
      /* the train slides in */
      '<g class="anim-train">' +
        '<rect x="10" y="120" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="160" width="300" height="5" fill="#ff6319"/>' + windows +
        '<circle cx="302" cy="172" r="4" fill="#fff6c2"/>' + bullet(296, 140, "F", "#ff6319") +
      '</g>' + cols +
      '<rect x="0" y="182" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#55524b"/><path d="M0 216h400" stroke="#46433d" stroke-width="2"/>' +
      tag("RUN-DMC", 22, 246, 32, RED, -4) + tag("JMJ", 300, 244, 30, WHITE, -8));
  }

  /* 2. Madison Square Garden, summer 1986: the arena dark, spotlights sweeping, and the whole crowd holding their sneakers up in the air */
  function garden() {
    let crowd = "";
    for (let i = 0; i < 22; i++) {
      const x = i * 19 - 4, y = 196 + (i % 3) * 6;
      crowd += '<circle cx="' + (x + 9) + '" cy="' + y + '" r="8" fill="#0b0b10"/><rect x="' + x + '" y="' + (y + 6) + '" width="18" height="60" rx="6" fill="#0b0b10"/>';
    }
    let kicks = "";
    [[20, 150, ""], [74, 140, "up2"], [130, 154, "up3"], [236, 146, ""], [292, 138, "up2"], [346, 152, "up3"]].forEach(k =>
      kicks += '<g class="up ' + k[2] + '"><path d="M' + (k[0] + 14) + ' ' + (k[1] + 20) + 'l4 30" stroke="#0b0b10" stroke-width="6" stroke-linecap="round"/>' + kick(k[0], k[1], 0.9) + '</g>');
    let seats = "";
    for (let r = 0; r < 4; r++) seats += '<path d="M0 ' + (96 + r * 14) + 'Q200 ' + (70 + r * 14) + ' 400 ' + (96 + r * 14) + '" stroke="#2a1e3a" stroke-width="7" fill="none" opacity=".8"/>';
    let dots = "";
    for (let i = 0; i < 40; i++) dots += '<circle class="' + (i % 2 ? "bl1" : "bl2") + '" cx="' + ((i * 37) % 400) + '" cy="' + (88 + (i * 13) % 50) + '" r="1.2" fill="#fff" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the round ceiling ring */
      '<ellipse cx="200" cy="0" rx="260" ry="70" fill="#1a1426"/><ellipse cx="200" cy="-4" rx="200" ry="50" fill="#120e1c"/>' +
      (function () { let s = ""; for (let i = -9; i <= 9; i++) s += '<path d="M200 -4L' + (200 + i * 26) + ' 66" stroke="#2c2340" stroke-width="2"/>'; return s; })() +
      seats + dots +
      '<g class="sw" opacity=".22"><path d="M196 0h8l70 200h-148z" fill="#fff6c2"/></g>' +
      '<g class="sw sw2" opacity=".18"><path d="M196 0h8l70 200h-148z" fill="#ffd0d4"/></g>' +
      /* the stage at the far end */
      '<rect x="140" y="132" width="120" height="16" fill="#2b2b33"/><rect x="146" y="118" width="22" height="14" fill="#111"/><rect x="232" y="118" width="22" height="14" fill="#111"/>' +
      '<rect x="186" y="124" width="28" height="8" fill="#444"/><circle class="spin" cx="194" cy="124" r="4" fill="#111" stroke="#666"/><circle class="spin" cx="206" cy="124" r="4" fill="#111" stroke="#666"/>' +
      kicks + crowd +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="2" fill="' + WHITE + '">THE GARDEN · SUMMER OF &#39;86</text>' +
      '<text x="200" y="58" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + GOLD + '">EVERYBODY, KICKS IN THE AIR</text>',
      sky("g2", "#07060c", "#3a1e3f"));
  }

  /* 3. Christmas in Hollis: a two-story frame house on 197th St with maroon shutters, the lights blinking on the porch, snow coming down */
  function christmas() {
    let flakes = "";
    for (let i = 0; i < 36; i++) flakes += '<circle class="sn ' + ["", "sn2", "sn3"][i % 3] + '" cx="' + ((i * 47) % 400) + '" cy="' + ((i * 29) % 120) + '" r="' + (i % 4 ? 1.6 : 2.4) + '" fill="#fff" opacity=".9"/>';
    let bulbs = "";
    const cs = ["#e63946", "#2a9d8f", GOLD, "#4ea8de"];
    for (let i = 0; i < 16; i++) bulbs += '<circle class="' + (i % 2 ? "bl1" : "bl2") + '" cx="' + (116 + i * 11) + '" cy="' + (94 + Math.abs(8 - i) * 0) + '" r="3" fill="' + cs[i % 4] + '"/>';
    let porch = "";
    for (let i = 0; i < 14; i++) porch += '<circle class="' + (i % 2 ? "bl2" : "bl1") + '" cx="' + (120 + i * 12) + '" cy="152" r="2.6" fill="' + cs[(i + 1) % 4] + '"/>';
    const win = (x, y) => '<rect x="' + (x - 9) + '" y="' + y + '" width="7" height="26" fill="#6b1d24"/><rect x="' + x + '" y="' + y + '" width="22" height="26" fill="#ffe7a8"/><path d="M' + (x + 11) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h22" stroke="#7a5a3a" stroke-width="2"/><rect x="' + (x + 24) + '" y="' + y + '" width="7" height="26" fill="#6b1d24"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(16) +
      '<circle cx="330" cy="40" r="16" fill="#f4f1e0" opacity=".9"/>' +
      /* the house */
      '<path d="M100 96l100-56 100 56z" fill="#3b3f4a"/><path d="M96 98l104-60 104 60" stroke="#fff" stroke-width="5" fill="none"/>' +
      '<rect x="110" y="96" width="180" height="104" fill="#d9c8a8"/>' +
      (function () { let s = ""; for (let y = 104; y < 200; y += 8) s += '<path d="M110 ' + y + 'h180" stroke="#c4b18e" stroke-width="1.5"/>'; return s; })() +
      win(132, 104) + win(246, 104) + win(132, 162) + win(246, 162) +
      '<rect x="186" y="150" width="28" height="50" fill="#5a1f22"/><circle cx="208" cy="176" r="2" fill="' + GOLD + '"/>' +
      '<circle cx="200" cy="140" r="11" fill="none" stroke="#2f6b3a" stroke-width="5"/><path d="M196 150l4 4 4-4" fill="' + RED + '"/>' +
      '<rect x="108" y="148" width="184" height="4" fill="#3b3f4a"/>' + bulbs + porch +
      /* the tree in the window glow */
      '<path d="M60 200l20-56 20 56z" fill="#1f5a34"/><path d="M80 138l3 6h-6z" fill="' + GOLD + '"/><circle class="bl1" cx="74" cy="176" r="2.4" fill="' + RED + '"/><circle class="bl2" cx="86" cy="186" r="2.4" fill="' + GOLD + '"/><circle class="bl2" cx="80" cy="164" r="2.4" fill="#4ea8de"/>' +
      /* snow on the ground + sidewalk */
      '<path d="M0 200q100-10 200 0t200 0v60H0z" fill="#f4f6fb"/><rect x="0" y="232" width="400" height="28" fill="#2b2d33"/><path d="M0 232h400" stroke="#dfe4ee" stroke-width="3"/>' +
      flakes +
      '<text x="200" y="24" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="2" fill="' + WHITE + '">CHRISTMAS IN HOLLIS</text>',
      sky("g3", "#0c1530", "#2c3e6b"));
  }

  /* 4. The Rock and Roll Hall of Fame on Lake Erie, Cleveland, 2009: the glass pyramid, the white tower and the round drum, banners waving */
  function rockhall() {
    let glass = "";
    for (let i = 1; i < 10; i++) glass += '<path d="M' + (120 + i * 16) + ' 200L200 ' + (70 + i * 0) + '" stroke="#9fc3d6" stroke-width="1" opacity=".6"/>';
    for (let y = 90; y < 200; y += 14) { const half = (y - 70) * 0.62; glass += '<path d="M' + (200 - half) + ' ' + y + 'H' + (200 + half) + '" stroke="#9fc3d6" stroke-width="1" opacity=".6"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<g class="dr"><path d="M0 40q10-10 20 0q8-8 18 0z" fill="#fff" opacity=".7"/></g>' +
      /* lake */
      '<rect x="0" y="200" width="400" height="60" fill="#3d6b8c"/>' +
      (function () { let s = ""; for (let i = 0; i < 8; i++) s += '<path class="' + (i % 2 ? "bl1" : "bl2") + '" d="M' + (i * 52) + ' ' + (220 + (i % 3) * 10) + 'q8-4 16 0" stroke="#cfe6ff" stroke-width="2" fill="none" opacity=".6"/>'; return s; })() +
      /* the tower on the right, the drum at its foot */
      '<rect x="280" y="54" width="34" height="146" fill="#f2f2ee"/><rect x="276" y="50" width="42" height="8" fill="#dcdcd4"/>' +
      '<path d="M292 54v146" stroke="#cfcfc6" stroke-width="2"/>' +
      '<ellipse cx="336" cy="170" rx="34" ry="10" fill="#e6e6df"/><rect x="302" y="150" width="68" height="20" fill="#f2f2ee"/><ellipse cx="336" cy="150" rx="34" ry="10" fill="#fafaf6"/>' +
      /* the slab cantilever on the left */
      '<path d="M40 150h90v14H60z" fill="#ececE6"/><rect x="70" y="164" width="12" height="36" fill="#d6d6cf"/>' +
      /* the glass pyramid */
      '<path d="M120 200L200 70L280 200z" fill="#bfe0ee" opacity=".85"/>' + glass +
      '<path d="M120 200L200 70L280 200" stroke="#e9f3f8" stroke-width="3" fill="none"/>' +
      '<rect x="110" y="196" width="190" height="8" fill="#e2e2da"/>' +
      /* banners */
      '<rect x="62" y="86" width="3" height="64" fill="#555"/><rect class="wv" x="65" y="88" width="22" height="34" fill="' + RED + '"/>' +
      '<rect x="340" y="86" width="3" height="64" fill="#555"/><rect class="wv wv2" x="343" y="88" width="22" height="34" fill="' + GOLD + '"/>' +
      '<text x="200" y="232" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="2" fill="' + WHITE + '">HALL OF FAME · LAKE ERIE</text>',
      sky("g4", "#5fa3d4", "#dff0fa"));
  }

  /* 5. Hollis Av and 203 St: green signs, the RUN-DMC wall, the little burger spot on the corner that holds the Hollis hip hop museum, gold records in its window */
  function corner() {
    let recs = "";
    [262, 296, 330].forEach((x, i) => recs += '<rect x="' + (x - 14) + '" y="118" width="28" height="34" fill="#2a2a2a" stroke="' + GOLD + '" stroke-width="2"/><circle class="spin" cx="' + x + '" cy="133" r="10" fill="' + GOLD + '"/><circle cx="' + x + '" cy="133" r="3" fill="#2a2a2a"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      /* the corner spot */
      '<rect x="226" y="80" width="174" height="140" fill="#6e2a1e"/>' +
      (function () { let b = ""; for (let y = 84; y < 220; y += 10) for (let x = (y / 10) % 2 ? 222 : 230; x < 400; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#7f3424"/>'; return b; })() +
      '<rect x="226" y="80" width="174" height="22" fill="#111"/><text x="313" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="1" fill="' + GOLD + '">HIP HOP MUSEUM</text>' +
      '<rect x="240" y="110" width="110" height="50" fill="#ffe7a8" opacity=".95"/>' + recs +
      '<rect x="360" y="150" width="26" height="70" fill="#3a1a12"/><path class="flk" d="M226 102h174" stroke="' + RED + '" stroke-width="3"/>' +
      /* the tag wall */
      '<rect x="8" y="70" width="200" height="150" fill="#3a3f47"/>' +
      (function () { let b = ""; for (let y = 70; y < 220; y += 14) b += '<path d="M8 ' + y + 'h200" stroke="#2f343b" stroke-width="2"/>'; return b; })() +
      tag("TRICKY", 30, 104, 20, RED, -5) + tag("RUN-DMC", 18, 160, 42, WHITE, -7) + tag("JAM MASTER", 30, 206, 24, GOLD, -3) +
      /* sign pole */
      '<rect x="214" y="20" width="5" height="200" fill="#1d2329"/>' +
      street(174, 22, 84, "Hollis Av") + street(180, 44, 72, "203 St") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#2a3d5f"));
  }

  window.SCENES = { station, garden, christmas, rockhall, corner };
})();
