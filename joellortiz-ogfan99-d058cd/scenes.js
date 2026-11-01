/* East Williamsburg opening scenes for Joell Ortiz's game. Each one is a small animated SVG, 400 x 260. */
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
  const LILAC = "#c9a4ff", GOLD = "#ffd34d", PRRED = "#e0263a", PRBLUE = "#2a6fd6";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, t, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="14" fill="' + (tc || "#fff") + '">' + t + '</text>';
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + mortar + '"/>'; for (let yy = y + 1; yy < y + h - 2; yy += 8) for (let xx = x + (((yy - y) / 8) % 2 ? -6 : 0); xx < x + w; xx += 16) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(14, x + w - Math.max(x, xx)) + '" height="6" fill="' + base + '"/>'; return b; };
  /* the Puerto Rican flag, w wide at x,y */
  const prFlag = (x, y, w, cls) => { const h = w * 2 / 3, st = h / 5; let f = '<g' + (cls ? ' class="' + cls + '"' : '') + '>'; for (let i = 0; i < 5; i++) f += '<rect x="' + x + '" y="' + (y + i * st) + '" width="' + w + '" height="' + st + '" fill="' + (i % 2 ? "#fff" : PRRED) + '"/>';
    f += '<path d="M' + x + ' ' + y + 'l' + (w * 0.45) + ' ' + (h / 2) + 'l-' + (w * 0.45) + ' ' + (h / 2) + 'z" fill="' + PRBLUE + '"/><circle cx="' + (x + w * 0.15) + '" cy="' + (y + h / 2) + '" r="' + (h * 0.09) + '" fill="#fff"/></g>'; return f; };

  /* 1. Graham Av on the L: underground, cream tile with the green trim band, the gray L rolling in */
  function station() {
    let tile = "";
    for (let y = 0; y < 120; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tile += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efe9d8"/>';
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#fff4c9" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#c8c0aa"/>' + tile +
      '<rect x="0" y="0" width="400" height="10" fill="#3a3a3a"/><rect class="flk" x="60" y="10" width="60" height="4" fill="#fffbe6"/><rect class="flk flk2" x="270" y="10" width="60" height="4" fill="#fffbe6"/>' +
      '<rect x="0" y="22" width="400" height="8" fill="#2f6a4a"/><rect x="0" y="30" width="400" height="2" fill="#c9a24a"/>' +
      '<rect x="110" y="46" width="180" height="32" rx="4" fill="#111"/><rect x="110" y="46" width="180" height="4" fill="#fff"/>' +
      '<text x="124" y="70" ' + FONT + ' font-size="16" fill="#fff">Graham Av</text>' + bullet(266, 63, "L", "#a7a9ac") +
      '<rect x="20" y="32" width="8" height="90" fill="#3a5a8a"/><rect x="372" y="32" width="8" height="90" fill="#3a5a8a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="6" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        windows + '<rect x="276" y="128" width="26" height="30" rx="3" fill="#1d2329"/>' + bullet(289, 143, "L", "#a7a9ac") +
        '<rect x="8" y="164" width="300" height="4" fill="#3a6aa8"/><circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2a2e"/>' +
      tag("YAOWA!", 18, 242, 32, LILAC, -5) + tag("BK", 330, 244, 34, GOLD, -8),
      "");
  }

  /* 2. Graham Avenue, the Avenue of Puerto Rico: the co-named street sign, flags strung across the block, a flag waving off the fire escape */
  function avenue() {
    let bunting = "";
    for (let x = 0; x < 400; x += 20) bunting += '<path d="M' + x + ' 40l10 12 10-12z" fill="' + [PRRED, "#fff", PRBLUE][(x / 20) % 3] + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      brick(0, 50, 140, 150, "#9a5a3a", "#6a3a24") + brick(260, 40, 140, 160, "#7a4a3a", "#5a3020") +
      (function () { let w = ""; for (let y = 66; y < 170; y += 30) { [14, 54, 94].forEach(x => w += '<rect x="' + x + '" y="' + y + '" width="22" height="20" fill="#ffe7a8"/>'); [276, 316, 356].forEach(x => w += '<rect x="' + x + '" y="' + (y - 6) + '" width="22" height="20" fill="#ffe7a8"/>'); } return w; })() +
      /* fire escape with a flag */
      '<path d="M270 100h70M270 130h70" stroke="#1d1d1d" stroke-width="3"/><path d="M275 100l60 30" stroke="#1d1d1d" stroke-width="2"/>' +
      '<path d="M340 100v-30" stroke="#ddd" stroke-width="2"/>' + prFlag(341, 70, 36, "flag") +
      '<path d="M0 36q200 30 400 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bunting +
      /* the street and the co-name sign */
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a2e"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="196" y="90" width="5" height="110" fill="#1d2329"/>' +
      '<rect x="150" y="96" width="98" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="199" y="108" text-anchor="middle" ' + FONT + ' font-size="10" fill="#fff">Graham Av</text>' +
      '<rect x="138" y="116" width="122" height="16" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="199" y="128" text-anchor="middle" ' + FONT + ' font-size="9" fill="#fff">Avenue of Puerto Rico</text>' +
      '<g class="sail"><rect x="0" y="206" width="50" height="18" rx="4" fill="#e94b6a"/><circle cx="12" cy="226" r="5" fill="#111"/><circle cx="38" cy="226" r="5" fill="#111"/></g>' +
      tag("BORICUA", 18, 254, 26, LILAC, -3),
      sky("g2", "#7ab8e8", "#fde2b8"));
  }

  /* 3. Cooper Park: the old trees and the lawn, the seven-story brick Cooper Park Houses behind, a ball going up at the court */
  function cooper() {
    let blocks = "";
    [[10, 70], [104, 64], [210, 70], [304, 66]].forEach(b => { blocks += brick(b[0], b[1], 86, 110, "#9a4a32", "#6e321f"); for (let y = b[1] + 10; y < b[1] + 100; y += 15) for (let x = b[0] + 8; x < b[0] + 80; x += 18) blocks += '<rect x="' + x + '" y="' + y + '" width="10" height="9" fill="' + ((x + y) % 3 ? "#ffe7a8" : "#3a2a24") + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + blocks +
      '<rect x="0" y="176" width="400" height="84" fill="#5c9a46"/>' +
      '<circle cx="60" cy="170" r="34" fill="#3f7a35"/><circle cx="340" cy="166" r="38" fill="#3f7a35"/><circle cx="200" cy="176" r="26" fill="#4a8a3a"/>' +
      '<rect x="57" y="190" width="6" height="30" fill="#5a3a22"/><rect x="337" y="190" width="6" height="32" fill="#5a3a22"/>' +
      /* the court and hoop */
      '<rect x="230" y="214" width="170" height="46" fill="#3a6aa8"/><rect x="376" y="186" width="4" height="34" fill="#ddd"/><rect x="366" y="182" width="24" height="16" fill="#fff" stroke="#999"/><path d="M370 198h12" stroke="#ff7a1a" stroke-width="2"/>' +
      '<circle class="bob" cx="330" cy="196" r="5" fill="#ff7a1a"/>' +
      '<path d="M0 224h230" stroke="#1d1d1d" stroke-width="2"/>' +
      tag("COOPER PARK", 14, 254, 26, GOLD, -3),
      sky("g3", "#6aa8e0", "#f7dcb0"));
  }

  /* 4. The Brick: the corner bodega at night, the awning, the OPEN sign flickering, the cat in the window, house slippers by the door */
  function bodega() {
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(12) +
      brick(20, 30, 360, 190, "#7a3a2a", "#4e2418") +
      /* the awning */
      '<path d="M30 90h340l-14 26H44z" fill="#e0263a"/><path d="M30 90h340" stroke="#fff" stroke-width="3"/>' +
      (function () { let s = ""; for (let x = 40; x < 360; x += 28) s += '<path d="M' + x + ' 90l-4 26h14l4-26z" fill="#fff" opacity=".9"/>'; return s; })() +
      '<text x="200" y="80" text-anchor="middle" ' + FONT + ' font-size="20" fill="' + GOLD + '" stroke="#000" stroke-width="3" paint-order="stroke">DELI GROCERY</text>' +
      /* windows and goods */
      '<rect x="40" y="120" width="140" height="80" fill="#ffe9a8"/><rect x="240" y="120" width="120" height="80" fill="#ffe9a8"/>' +
      (function () { let g = ""; for (let i = 0; i < 9; i++) g += '<rect x="' + (46 + i * 14) + '" y="' + (150 + (i % 2) * 4) + '" width="10" height="' + (16 - (i % 2) * 4) + '" fill="' + ["#e0263a", "#2a6fd6", "#ffd34d", "#3d9a4a"][i % 4] + '"/>'; return g; })() +
      '<path d="M40 170h140" stroke="#8a6a3a" stroke-width="3"/>' +
      '<rect class="flk" x="260" y="130" width="52" height="20" rx="4" fill="#1a0a14" stroke="#ff4f9a" stroke-width="2"/><text class="flk" x="286" y="145" text-anchor="middle" ' + FONT + ' font-size="12" fill="#ff4f9a">OPEN</text>' +
      /* the cat */
      '<g class="bob"><ellipse cx="130" cy="192" rx="16" ry="9" fill="#2b2b2b"/><circle cx="146" cy="184" r="7" fill="#2b2b2b"/><path d="M141 179l2-6 3 5M148 178l3-5 1 6" fill="#2b2b2b"/><circle cx="148" cy="183" r="1.4" fill="#9cff6a"/><path d="M114 190q-10-6-6-16" stroke="#2b2b2b" stroke-width="3" fill="none"/></g>' +
      /* door */
      '<rect x="186" y="120" width="48" height="100" fill="#3a2a24"/><rect x="192" y="126" width="36" height="60" fill="#ffe9a8" opacity=".7"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2a2e"/>' +
      /* house slippers on the step */
      '<ellipse cx="200" cy="226" rx="8" ry="3.5" fill="' + LILAC + '"/><ellipse cx="218" cy="227" rx="8" ry="3.5" fill="' + LILAC + '"/>' +
      tag("THE BRICK", 18, 252, 26, GOLD, -3),
      sky("g4", "#0d1022", "#2a1a3a"));
  }

  /* 5. Maspeth Av and Morgan Av, by the Cooper Park Houses: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#2e2a3a"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 16 : 26; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#3a3448"/>'; return b; })() +
      tag("JOELL", 30, 128, 50, LILAC, -7) + tag("ORTIZ", 70, 172, 40, GOLD, -4) + tag("YAOWA!", 40, 210, 26, "#f4f0e6", -2) +
      '<rect class="drip" x="64" y="130" width="3" height="16" fill="' + LILAC + '"/><rect class="drip" x="170" y="174" width="3" height="10" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="266" y="88" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Maspeth Av</text>' +
      '<rect x="266" y="110" width="76" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Morgan Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a1a30"));
  }

  window.SCENES = { station, avenue, cooper, bodega, corner };
})();
