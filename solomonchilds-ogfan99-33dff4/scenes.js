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

  /* 1. Tompkinsville: the SIR rolling into the open-air platform by the harbor, the ferry terminal lights up the line */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(12) +
      '<rect x="0" y="92" width="400" height="22" fill="#1d3550"/>' + skyline(94, "#2c3550") +
      '<path class="shim" d="M20 104h40M250 108h60" stroke="' + PINK + '" stroke-width="2"/>' +
      /* fare-control house and canopy */
      '<rect x="330" y="40" width="70" height="70" fill="#b7a58a"/><rect x="340" y="54" width="18" height="24" fill="#ffe7a8" class="flk"/><rect x="368" y="54" width="18" height="24" fill="#ffe7a8"/>' +
      '<rect x="0" y="46" width="330" height="7" fill="#c6ccd4"/><rect x="0" y="53" width="330" height="3" fill="#0039a6"/>' +
      '<rect x="60" y="56" width="5" height="66" fill="#7b8794"/><rect x="250" y="56" width="5" height="66" fill="#7b8794"/>' +
      /* black station sign */
      '<rect x="86" y="62" width="216" height="32" rx="4" fill="#111"/><rect x="86" y="62" width="216" height="4" fill="#fff"/>' +
      '<text x="98" y="86" ' + FONT + ' font-size="15" fill="#fff">Tompkinsville</text>' + sir(274, 79) +
      /* the SIR car */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="172" r="4" fill="#fff6c2"/>' + sir(262, 172) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c232c"/>' +
      tag("SHAOLIN", 18, 240, 28, PINK, -4) + tag("CHILD FAMOUS", 196, 242, 26, GOLD, -6),
      sky("g1", "#0e1430", "#3a2a4a"));
  }

  /* 2. Lyons Pool on Victory Blvd: the 1936 red-brick bathhouse with its arched entry and stone trim, the big pool, kids splashing */
  function pool() {
    let splash = "";
    [[80, 196], [170, 210], [260, 200], [330, 214]].forEach((p, i) => splash += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#7a4a2a"/><path d="M' + (p[0] - 12) + ' ' + (p[1] + 6) + 'q12-10 24 0" stroke="#fff" stroke-width="2" fill="none"/></g>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the bathhouse */
      brick(40, 70, 320, 100, "#a5452f", "#7a3020") +
      '<rect x="40" y="62" width="320" height="10" fill="#e6dccb"/><rect x="40" y="164" width="320" height="8" fill="#e6dccb"/>' +
      '<rect x="160" y="40" width="80" height="132" fill="#9a3f2b"/><rect x="156" y="34" width="88" height="8" fill="#e6dccb"/>' +
      '<path d="M176 172v-64a24 24 0 0 1 48 0v64z" fill="#2a2030" stroke="#e6dccb" stroke-width="4"/>' +
      '<rect x="168" y="48" width="64" height="12" fill="#e6dccb"/><text x="200" y="58" text-anchor="middle" ' + FONT + ' font-size="8" fill="#7a3020">LYONS POOL</text>' +
      (function () { let w = ""; [58, 96, 254, 292, 330].forEach(x => w += '<path d="M' + x + ' 150v-40a10 10 0 0 1 20 0v40z" fill="#3a5a6a" stroke="#e6dccb" stroke-width="2"/>'); return w; })() +
      '<path class="flag" d="M200 34v-24" stroke="#ddd" stroke-width="2"/><path class="flag" d="M201 10h20v12h-20z" fill="#2a5aa8"/>' +
      /* deck and pool */
      '<rect x="0" y="172" width="400" height="14" fill="#d8d2c4"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2fa6d8"/>' +
      '<path class="shim" d="M10 200h60M120 220h80M260 236h70" stroke="#c9f1ff" stroke-width="3"/>' +
      '<path d="M0 230h400" stroke="#1f7aa8" stroke-width="2" stroke-dasharray="10 8"/>' + splash +
      tag("VICTORY BLVD", 18, 252, 24, PINK, -3),
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

  /* 4. Killa Bee Radio: the late-night booth, the ON AIR light flickering, the meters jumping */
  function radio() {
    let meters = "";
    for (let i = 0; i < 10; i++) meters += '<rect class="bob' + (i % 2 ? " bob2" : "") + '" x="' + (238 + i * 12) + '" y="' + (150 - (i * 13) % 34) + '" width="8" height="' + (30 + (i * 13) % 34) + '" fill="' + (i > 7 ? "#ff5a5a" : i > 5 ? GOLD : "#7cf29a") + '"/>';
    let foam = "";
    for (let y = 20; y < 120; y += 20) for (let x = 0; x < 400; x += 20) foam += '<path d="M' + x + ' ' + y + 'l10 10-10 10M' + (x + 10) + ' ' + y + 'l10 10-10 10" stroke="#241a30" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1222"/>' + foam +
      /* on air sign */
      '<rect x="150" y="18" width="100" height="28" rx="4" fill="#2a0a12" stroke="#555" stroke-width="2"/><text class="flk" x="200" y="38" text-anchor="middle" ' + FONT + ' font-size="16" fill="#ff3b4a">ON AIR</text>' +
      /* the mic on its boom */
      '<path d="M60 40l60 50" stroke="#555" stroke-width="5"/><rect x="108" y="78" width="26" height="46" rx="13" fill="#2b2b2b" stroke="#888" stroke-width="2"/>' +
      '<circle cx="121" cy="100" r="22" fill="none" stroke="#666" stroke-width="2" opacity=".7"/>' +
      /* the desk and mixer */
      '<path d="M0 170h400v90H0z" fill="#2a1d14"/><rect x="0" y="164" width="400" height="8" fill="#4a3426"/>' +
      '<rect x="40" y="176" width="150" height="50" rx="4" fill="#222" stroke="#444"/>' +
      (function () { let k = ""; for (let i = 0; i < 8; i++) k += '<rect x="' + (50 + i * 17) + '" y="184" width="4" height="34" fill="#111"/><rect x="' + (46 + i * 17) + '" y="' + (190 + (i * 7) % 20) + '" width="12" height="6" fill="' + (i % 2 ? PINK : CYAN) + '"/>'; return k; })() +
      '<rect x="230" y="110" width="132" height="76" rx="4" fill="#0e0e14" stroke="#444"/>' + meters +
      tag("KILLA BEE RADIO", 20, 248, 26, PINK, -3),
      "");
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
