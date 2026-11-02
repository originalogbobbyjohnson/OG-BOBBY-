/* Tompkinsville / Stapleton, Staten Island opening scenes for Solomon Childs' game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 18s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob 1.4s ease-in-out infinite}.bob2{animation-delay:-.7s}' +
    '@keyframes spin{from{transform:translateX(0)}to{transform:translateX(-120px)}}' +
    '.ride{animation:spin 4s linear infinite}' +
    '@keyframes buzz{0%{transform:translate(0,0)}25%{transform:translate(14px,-10px)}50%{transform:translate(26px,4px)}75%{transform:translate(10px,12px)}100%{transform:translate(0,0)}}' +
    '.bee{animation:buzz 2.4s ease-in-out infinite}.b2{animation-delay:-.6s;animation-duration:2s}.b3{animation-delay:-1.2s;animation-duration:2.8s}.b4{animation-delay:-1.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-12deg)}}' +
    '.flag{animation:wave 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{animation:drip 3s ease-out infinite;transform-box:fill-box;transform-origin:top}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const PINK = "#ff6fb5", GOLD = "#ffd34d", CYAN = "#38e8ff";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const skyline = (y, col) => {
    let s = "";
    [[0, 14, 30], [16, 10, 44], [28, 16, 26], [46, 12, 58], [60, 18, 36], [80, 10, 50], [92, 14, 30], [108, 20, 40]].forEach(b =>
      s += '<rect x="' + (140 + b[0]) + '" y="' + (y - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="' + col + '"/>');
    return s;
  };
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + mortar + '"/>'; for (let yy = y + 1; yy < y + h - 2; yy += 8) for (let xx = x + (((yy - y) / 8) % 2 ? -6 : 0); xx < x + w; xx += 16) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(14, x + w - Math.max(x, xx)) + '" height="6" fill="' + base + '"/>'; return b; };

  /* 1. Tompkinsville from the Victory Blvd side: the SIR rolling in under the canopy, Victory Blvd climbing the hill behind toward Hero Park, Theodore Unit tagged on the canopy */
  function station() {
    let windows = "";
    for (let x = 22; x < 230; x += 40) windows += '<rect x="' + x + '" y="148" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let houses = "";
    [[214, 112, "#d8c8a8"], [250, 96, "#a8b8c8"], [286, 80, "#e0d0b0"], [322, 64, "#c8a888"], [358, 50, "#b8c8b0"]].forEach(h => houses += '<rect x="' + h[0] + '" y="' + h[1] + '" width="30" height="26" fill="' + h[2] + '"/><path d="M' + (h[0] - 3) + ' ' + h[1] + 'l18-12 18 12z" fill="#6a4a3a"/><rect class="flk" x="' + (h[0] + 10) + '" y="' + (h[1] + 8) + '" width="8" height="9" fill="#ffe7a8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) + '<circle cx="60" cy="36" r="12" fill="#fff1d6"/>' +
      /* the hill with Victory Blvd climbing it, Hero Park trees on top */
      '<path d="M120 140L400 30V140z" fill="#2f4a32"/>' + houses +
      '<path d="M150 140L400 44" stroke="#3a3f47" stroke-width="10"/><path d="M150 140L400 44" stroke="#eab308" stroke-width="1" stroke-dasharray="8 8"/>' +
      [360, 384].map(x => '<circle class="bob" cx="' + x + '" cy="30" r="14" fill="#3f7a3a"/>').join("") +
      '<rect x="318" y="6" width="78" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1"/><text x="357" y="18" text-anchor="middle" ' + FONT + ' font-size="9" fill="#fff">HERO PARK ↑</text>' +
      '<rect x="248" y="104" width="90" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1" transform="rotate(-21 293 112)"/><text x="293" y="116" text-anchor="middle" ' + FONT + ' font-size="9" fill="#fff" transform="rotate(-21 293 112)">Victory Blvd</text>' +
      /* the canopy with the tag on its fascia, the sign, the train */
      '<rect x="0" y="92" width="250" height="16" fill="#c6ccd4"/><rect x="0" y="108" width="250" height="3" fill="#0039a6"/>' + tag("THEODORE UNIT", 8, 106, 14, PINK, -2) +
      '<rect x="30" y="111" width="5" height="40" fill="#7b8794"/><rect x="210" y="111" width="5" height="40" fill="#7b8794"/>' +
      '<rect x="56" y="114" width="150" height="26" rx="3" fill="#111"/><rect x="56" y="114" width="150" height="3" fill="#fff"/><text x="64" y="133" ' + FONT + ' font-size="13" fill="#fff">Tompkinsville</text>' + sir(182, 128) +
      '<g class="anim-train"><rect x="8" y="140" width="240" height="46" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="8" y="172" width="240" height="5" fill="#0039a6"/>' + windows + '<circle cx="240" cy="180" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="186" width="400" height="8" fill="#eab308"/><rect x="0" y="194" width="400" height="66" fill="#1c232c"/>' +
      '<g class="sail"><rect x="0" y="232" width="46" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="248" r="4" fill="#111"/><circle cx="36" cy="248" r="4" fill="#111"/></g>' +
      tag("SOLOMON CHILDS", 150, 226, 24, GOLD, -4) + tag("SHAOLIN", 14, 230, 20, CYAN, -4),
      sky("g1", "#0e1430", "#5a3a5a"));
  }

  /* 2. Hero Park on Victory Blvd at Louis St (Grymes Hill): the giant Sugar Loaf boulder with its bronze WWI plaque under the oaks, a few blocks up from his Cebra Av corner */
  function pool() {
    const oak = (x, y, r, c) => '<rect x="' + (x - 4) + '" y="' + y + '" width="8" height="' + (r * 2) + '" fill="#4a3426"/><g class="bob"><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y + 8) + '" r="' + (r * .7) + '" fill="' + c + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y + 6) + '" r="' + (r * .7) + '" fill="' + c + '"/></g>';
    let leaves = "";
    for (let i = 0; i < 6; i++) leaves += '<ellipse class="shim' + (i % 2 ? " shim2" : "") + '" cx="' + (40 + i * 64) + '" cy="' + (60 + (i * 31) % 80) + '" rx="3" ry="2" fill="#8ac04a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      oak(50, 70, 40, "#3f7a3a") + oak(350, 64, 44, "#2f6a34") + oak(200, 40, 30, "#4a8a3e") +
      '<rect x="0" y="180" width="400" height="80" fill="#5a9a40"/><path d="M0 222C120 210 280 236 400 216V260H0z" fill="#c8b890"/>' +
      /* the Sugar Loaf boulder */
      '<path d="M110 196q-6-70 60-96q60-12 100 30q30 40 18 66z" fill="#8a8a86"/><path d="M130 160q30-40 80-44M240 120q30 20 36 50" stroke="#6a6a66" stroke-width="3" fill="none"/>' +
      '<path d="M150 110q20-10 40-8" stroke="#b0b0aa" stroke-width="4" fill="none"/>' +
      /* bronze plaque */
      '<rect x="176" y="140" width="56" height="38" rx="2" fill="#8a6a2a" stroke="#5a4418" stroke-width="2"/><text x="204" y="156" text-anchor="middle" ' + FONT + ' font-size="7" fill="#f2d68a">HERO PARK</text><text x="204" y="168" text-anchor="middle" ' + FONT + ' font-size="6" fill="#f2d68a">1917 · 1918</text>' +
      leaves +
      '<rect x="10" y="10" width="140" height="22" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="80" y="25" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">Victory Blvd · Louis St</text>' +
      tag("SUGAR LOAF", 238, 40, 22, GOLD, -5) + tag("SOLOMON", 18, 252, 22, PINK, -3),
      sky("g2", "#69b8f0", "#d8f0ff"));
  }

  /* 3. King Kong of New York: the harbor at night from the Tompkinsville shore, the lady with the torch out on the water, Manhattan lit up, a giant shadow up the tallest tower, searchlights sweeping */
  function kong() {
    let lit = "";
    for (let i = 0; i < 40; i++) lit += '<rect x="' + (150 + (i * 37) % 130) + '" y="' + (70 + (i * 23) % 50) + '" width="2" height="2" fill="#ffe7a8" class="' + (i % 3 ? "" : "flk") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(18) +
      /* searchlights */
      '<g opacity=".18"><path class="shim" d="M200 130L140 0h20z" fill="#fff"/><path class="shim shim2" d="M250 130L320 0h20z" fill="#fff"/></g>' +
      /* Manhattan */
      '<rect x="140" y="80" width="18" height="50" fill="#1b2240"/><rect x="160" y="64" width="14" height="66" fill="#1b2240"/><rect x="176" y="90" width="20" height="40" fill="#1b2240"/>' +
      '<path d="M203 130V42l10-16 10 16v88z" fill="#3a4672"/><rect x="212" y="10" width="2" height="20" fill="#20284a"/>' +
      '<rect x="224" y="72" width="16" height="58" fill="#1b2240"/><rect x="242" y="84" width="22" height="46" fill="#1b2240"/><rect x="266" y="96" width="16" height="34" fill="#1b2240"/>' + lit +
      /* the giant shadow halfway up the tallest tower */
      '<circle cx="213" cy="58" r="20" fill="#ffe7a8" opacity=".18" class="flk"/>' +
      '<g class="bob"><ellipse cx="213" cy="66" rx="9" ry="12" fill="#06070f"/><circle cx="213" cy="50" r="6" fill="#06070f"/>' +
      '<path d="M205 60l-10-16M221 60l10-18" stroke="#06070f" stroke-width="5" stroke-linecap="round"/><path d="M207 76l-4 12M219 76l4 12" stroke="#06070f" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="211" cy="49" r="1" fill="#ff5a5a"/><circle cx="215" cy="49" r="1" fill="#ff5a5a"/></g>' +
      /* the harbor */
      '<rect x="0" y="130" width="400" height="80" fill="#0f2238"/>' +
      '<path class="shim" d="M150 140h120M60 160h80M240 176h90" stroke="#ffe7a8" stroke-width="2" opacity=".6"/>' +
      /* the statue on her island, copper green */
      '<rect x="64" y="122" width="40" height="8" fill="#5a6a6a"/><rect x="74" y="104" width="20" height="18" fill="#6a7a7a"/>' +
      '<path d="M78 104l4-34h6l4 34z" fill="#6fb5a0"/><circle cx="85" cy="66" r="5" fill="#6fb5a0"/><path d="M80 62l5-6 5 6" stroke="#6fb5a0" stroke-width="2" fill="none"/>' +
      '<path d="M89 74l8-22" stroke="#6fb5a0" stroke-width="3"/><path class="flk" d="M96 50l3-6 3 6z" fill="#ffcf4d"/>' +
      /* shore */
      '<rect x="0" y="210" width="400" height="50" fill="#1a1a22"/><path d="M0 210h400" stroke="#55606c" stroke-width="3"/>' +
      tag("KING KONG OF NEW YORK", 14, 246, 22, GOLD, -3),
      sky("g3", "#05081a", "#2a1a40"));
  }

  /* 4. Hamilton Park Cottages in New Brighton: the 1850s Italianate villas on the hill above the North Shore, cream stucco, dark trim, the bracketed eaves, the harbor showing between them */
  function radio() {
    const villa = (x, y, w, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (200 - y) + '" fill="' + c + '"/><path d="M' + (x - 8) + ' ' + y + 'h' + (w + 16) + 'l-' + (w / 2 + 8) + ' -18z" fill="#3a3a3a"/>' +
      (function () { let b = ""; for (let i = x - 4; i < x + w + 4; i += 10) b += '<rect x="' + i + '" y="' + y + '" width="3" height="6" fill="#3a3a3a"/>'; return b; })() +
      '<rect x="' + (x + w / 2 - 12) + '" y="' + (y - 34) + '" width="24" height="22" fill="' + c + '"/><path d="M' + (x + w / 2 - 16) + ' ' + (y - 34) + 'h32l-16-10z" fill="#3a3a3a"/><rect class="flk" x="' + (x + w / 2 - 5) + '" y="' + (y - 30) + '" width="10" height="14" rx="5" fill="#ffe7a8"/>' +
      [x + 12, x + w - 26].map(wx => '<rect x="' + wx + '" y="' + (y + 16) + '" width="14" height="24" rx="7" fill="#2a3040"/><rect x="' + wx + '" y="' + (y + 56) + '" width="14" height="24" rx="7" fill="#2a3040"/>').join("") +
      '<rect x="' + (x - 6) + '" y="' + (200 - 40) + '" width="' + (w + 12) + '" height="6" fill="#3a3a3a"/><path d="M' + (x + w / 2 - 8) + ' 200v-24h16v24z" fill="#4a3426"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<rect x="0" y="150" width="400" height="40" fill="#3a6a8a"/><path class="shim" d="M20 162h40M180 170h50M320 160h40" stroke="#cfe6ff" stroke-width="2"/>' +
      '<g class="sail"><path d="M0 160h44l-6 8H6z" fill="#e6a23c"/><rect x="12" y="150" width="20" height="10" fill="#e6a23c"/></g>' +
      villa(30, 104, 110, "#efe4c8") + villa(250, 96, 120, "#e8d9b4") +
      '<rect x="0" y="200" width="400" height="60" fill="#4a7a3a"/><path d="M150 260l40-60h20l40 60z" fill="#b8a888"/>' +
      '<g class="bob"><circle cx="186" cy="130" r="16" fill="#3f7a3a"/><rect x="183" y="140" width="6" height="60" fill="#4a3426"/></g>' +
      '<rect x="120" y="10" width="160" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="25" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">HAMILTON PARK</text><text x="200" y="38" text-anchor="middle" ' + FONT + ' font-size="8" fill="#fff">NEW BRIGHTON · 1850s</text>' +
      tag("THEODORE UNIT", 18, 248, 22, PINK, -3),
      sky("g4", "#f2a65a", "#8fc3ea"));
  }

  /* 5. Victory Blvd and Cebra Av, up the hill from the Tompkinsville stop: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e2a3a"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 16 : 26; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3a3448"/>'; return b; })() +
      tag("SOLOMON", 26, 126, 44, PINK, -7) + tag("CHILDS", 60, 170, 36, GOLD, -4) + tag("THEODORE UNIT", 30, 206, 20, CYAN, -2) +
      '<rect class="drip" x="60" y="128" width="3" height="16" fill="' + PINK + '"/><rect class="drip" x="140" y="172" width="3" height="10" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="262" y="88" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Victory Blvd</text>' +
      '<rect x="270" y="110" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Cebra Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a1a30"));
  }

  window.SCENES = { station, pool, kong, radio, corner };
})();
