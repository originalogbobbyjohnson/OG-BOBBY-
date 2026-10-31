/* Brownsville opening scenes for the Masta Ace game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes rope{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}' +
    '.rope{transform-box:fill-box;transform-origin:50% 0;animation:rope .8s ease-in-out infinite}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}' +
    '.hop{animation:hop .8s ease-in-out infinite}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}60%{transform:translateY(2px)}}' +
    '.bounce{animation:bounce 1.2s ease-in-out infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1s linear infinite}' +
    '@keyframes swing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}' +
    '.swing{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.8s ease-in-out infinite}' +
    '@keyframes ltrain{from{transform:translateX(420px)}to{transform:translateX(-380px)}}' +
    '.ltrain{animation:ltrain 8s linear infinite}' +
    '@keyframes drift{0%{transform:translateX(-60px)}100%{transform:translateX(460px)}}' +
    '.cloud{animation:drift 26s linear infinite}.cloud2{animation-delay:-13s}' +
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
  const YEL = "#ffd34d", CHROME = "#c9d3dc", ORG = "#ff6a3d", RED3 = "#ee352e";
  const rim = (cx, cy, r) =>
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.62) + '" fill="#e9eef2" stroke="#8a96a3" stroke-width="1.5"/>' +
    '<g class="spin"><path d="M' + cx + ' ' + (cy - r * 0.55) + 'V' + (cy + r * 0.55) + 'M' + (cx - r * 0.55) + ' ' + cy + 'H' + (cx + r * 0.55) + 'M' + (cx - r * 0.4) + ' ' + (cy - r * 0.4) + 'L' + (cx + r * 0.4) + ' ' + (cy + r * 0.4) + 'M' + (cx + r * 0.4) + ' ' + (cy - r * 0.4) + 'L' + (cx - r * 0.4) + ' ' + (cy + r * 0.4) + '" stroke="#8a96a3" stroke-width="2"/></g>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.15) + '" fill="#fff"/>';

  /* 1. The 3 train pulling into Sutter Av-Rutland Rd, up on the el over Livonia Av, the steel trestle and the low rooftops of East Brownsville */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 40) girders += '<rect x="' + (x - 3) + '" y="190" width="6" height="70" fill="#3d4a3f"/>';
    let lattice = "";
    for (let x = 0; x < W; x += 20) lattice += '<path d="M' + x + ' 192l10 10 10-10" stroke="#3d4a3f" stroke-width="2" fill="none"/>';
    let windows = "";
    for (let x = 70; x < 330; x += 46) windows += '<rect x="' + x + '" y="126" width="30" height="22" rx="3" fill="#fff0c4" opacity=".9"/>';
    let roofs = "";
    [[0, 96, 70], [74, 110, 60], [140, 88, 50], [196, 104, 80], [282, 92, 56], [342, 106, 58]].forEach(([x, y, w]) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (190 - y) + '" fill="#4a2c2a"/>';
      for (let xx = x + 6; xx < x + w - 8; xx += 14) roofs += '<rect x="' + xx + '" y="' + (y + 8) + '" width="7" height="9" fill="' + ((xx + y) % 3 ? "#2a1a1a" : "#ffcf7a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) +
      '<circle cx="330" cy="40" r="16" fill="#ffb86b" opacity=".85"/>' + roofs +
      /* canopy + station sign on the platform */
      '<rect x="0" y="54" width="400" height="8" fill="#2f3a31"/>' +
      '<rect x="40" y="62" width="4" height="54" fill="#2f3a31"/><rect x="356" y="62" width="4" height="54" fill="#2f3a31"/>' +
      '<rect x="52" y="70" width="260" height="34" rx="4" fill="#111"/><rect x="52" y="70" width="260" height="4" fill="#fff"/>' +
      '<text x="64" y="95" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Sutter Av–Rutland Rd</text>' +
      bullet(290, 88, "3", RED3) +
      '<g class="anim-train">' +
        '<rect x="56" y="114" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="56" y="156" width="300" height="5" fill="' + RED3 + '"/>' + windows +
        '<circle cx="350" cy="168" r="4" fill="#fff6c2"/>' + bullet(340, 134, "3", RED3) +
      '</g>' +
      '<rect x="0" y="176" width="400" height="8" fill="#eab308"/><rect x="0" y="184" width="400" height="8" fill="#3d4a3f"/>' + lattice + girders +
      '<rect x="0" y="230" width="400" height="30" fill="#2b2b30"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#9aa3ad">LIVONIA AV · BROWNSVILLE</text>' +
      tag("THE I.N.C.", 14, 226, 24, YEL, -4) + tag("ACE", 318, 226, 26, ORG, -8),
      sky("g1", "#16122c", "#d8784a"));
  }

  /* 2. Brownsville Houses: the six-story red-brick towers around the courtyard, benches, a double-dutch game going */
  function houses() {
    let b = "";
    [[10, 40, 110], [140, 60, 120], [280, 36, 110]].forEach(([x, y, w]) => {
      b += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (190 - y) + '" fill="#a4473a"/>';
      for (let yy = y + 10; yy < 180; yy += 22) for (let xx = x + 8; xx < x + w - 10; xx += 20) b += '<rect x="' + xx + '" y="' + yy + '" width="11" height="13" fill="' + ((xx * 3 + yy) % 7 ? "#cfe3ee" : "#ffe08a") + '" stroke="#e8e1d0" stroke-width="1.2"/>';
      b += '<rect x="' + x + '" y="' + (y - 4) + '" width="' + w + '" height="5" fill="#7a3328"/>';
      b += '<rect x="' + (x + w / 2 - 10) + '" y="168" width="20" height="22" fill="#3b2c26"/><rect x="' + (x + w / 2 - 14) + '" y="164" width="28" height="4" fill="#d8d0bb"/>';
    });
    const kid = (x, y, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="5" fill="#5a3a26"/><rect x="' + (x - 4) + '" y="' + (y - 13) + '" width="8" height="12" rx="2" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y - 1) + 'l-2 9M' + (x + 3) + ' ' + (y - 1) + 'l2 9" stroke="#333" stroke-width="2.5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="cloud"><ellipse cx="0" cy="22" rx="26" ry="8" fill="#fff" opacity=".8"/><ellipse cx="18" cy="18" rx="16" ry="7" fill="#fff" opacity=".8"/></g>' +
      b +
      '<rect x="0" y="190" width="400" height="70" fill="#b8b2a6"/>' +
      '<path d="M0 200h400" stroke="#9a9488" stroke-width="2"/>' +
      /* courtyard trees + benches */
      '<rect x="20" y="160" width="5" height="34" fill="#5a3a26"/><circle cx="22" cy="152" r="16" fill="#3f8a46"/>' +
      '<rect x="376" y="160" width="5" height="34" fill="#5a3a26"/><circle cx="378" cy="152" r="16" fill="#3f8a46"/>' +
      '<rect x="40" y="212" width="54" height="5" fill="#2f6b3a"/><rect x="44" y="217" width="4" height="10" fill="#333"/><rect x="86" y="217" width="4" height="10" fill="#333"/>' +
      /* double dutch: two turners and a jumper */
      kid(176, 240, "#ffd34d", "") + kid(264, 240, "#38a3ff", "") + kid(220, 240, "#ff6a3d", "hop") +
      '<g class="rope"><path d="M180 226q40 26 80 0" fill="none" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="rope" style="animation-delay:.4s"><path d="M180 226q40 -26 80 0" fill="none" stroke="#ffd34d" stroke-width="2"/></g>' +
      tag("BVILLE", 300, 236, 22, YEL, -6),
      sky("g2", "#6db6e6", "#f7e1b8"));
  }

  /* 3. The Belmont Av pushcart market: striped awnings, produce stands, a hanging scale swinging */
  function belmont() {
    let shops = "";
    const aw = [["#c8102e", "#fff"], ["#1f6b45", "#fff"], ["#1d4e9e", "#ffd34d"], ["#e77f24", "#fff"]];
    for (let i = 0; i < 4; i++) {
      const x = i * 100;
      shops += '<rect x="' + x + '" y="40" width="100" height="120" fill="' + (i % 2 ? "#7a4a3a" : "#8a5a42") + '"/>';
      for (let yy = 50; yy < 96; yy += 22) for (let xx = x + 12; xx < x + 90; xx += 26) shops += '<rect x="' + xx + '" y="' + yy + '" width="14" height="16" fill="#2a2226"/>';
      let st = "";
      for (let k = 0; k < 10; k++) st += '<rect x="' + (x + k * 10) + '" y="104" width="10" height="16" fill="' + aw[i][k % 2] + '"/>';
      shops += st + '<path d="M' + x + ' 120h100v4h-100z" fill="#2a2a2a"/>';
      for (let k = 0; k < 10; k++) shops += '<path d="M' + (x + k * 10) + ' 124q5 6 10 0" fill="' + aw[i][k % 2] + '"/>';
    }
    const cart = (x, fruit) => {
      let f = "";
      for (let k = 0; k < 7; k++) f += '<circle cx="' + (x + 8 + k * 8) + '" cy="' + (176 - (k % 2) * 4) + '" r="5" fill="' + fruit[k % fruit.length] + '"/>';
      return '<rect x="' + x + '" y="178" width="66" height="18" fill="#8a5a2a" stroke="#4a2a12" stroke-width="2"/>' + f +
        '<circle cx="' + (x + 12) + '" cy="204" r="8" fill="#3a2a1a" stroke="#222" stroke-width="2"/><circle cx="' + (x + 54) + '" cy="204" r="8" fill="#3a2a1a" stroke="#222" stroke-width="2"/>' +
        '<path d="M' + (x + 66) + ' 182l14-8" stroke="#4a2a12" stroke-width="3"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + shops +
      '<rect x="0" y="160" width="400" height="52" fill="#a8a196"/>' +
      cart(20, ["#e63946", "#f4a261", "#2a9d8f"]) + cart(150, ["#ffd34d", "#8ac926", "#ff924c"]) + cart(282, ["#6a4c93", "#e63946", "#8ac926"]) +
      /* hanging scale swinging over the middle cart */
      '<g class="swing"><path d="M183 126v30" stroke="#333" stroke-width="2"/><circle cx="183" cy="160" r="7" fill="#e9eef2" stroke="#555" stroke-width="2"/><path d="M183 167l-10 10h20z" fill="none" stroke="#555" stroke-width="1.5"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#3a3a40"/>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#cfd4da">BELMONT AV · PUSHCART MARKET</text>',
      sky("g3", "#79b8e8", "#f9e7c4"));
  }

  /* 4. Sittin' on chrome under the L at Sutter Av: a gray L train rolls overhead on the el, a car on chrome rims bouncing below */
  function chrome() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 4) + '" y="96" width="8" height="114" fill="#4a4f57"/><path d="M' + (x + 4) + ' 100L' + (x + 46) + ' 120M' + (x + 46) + ' 100L' + (x + 4) + ' 120" stroke="#4a4f57" stroke-width="2"/>';
    let lwin = "";
    for (let x = 8; x < 360; x += 32) lwin += '<rect x="' + x + '" y="62" width="20" height="14" rx="2" fill="#fff4cc" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(12) +
      '<rect x="0" y="88" width="400" height="10" fill="#4a4f57"/>' + girders +
      '<rect x="138" y="20" width="124" height="26" rx="3" fill="#111"/><rect x="138" y="20" width="124" height="3" fill="#fff"/>' +
      '<text x="148" y="39" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">Sutter Av</text>' + bullet(244, 33, "L", "#a7a9ac") +
      '<g class="ltrain"><rect x="0" y="54" width="360" height="34" rx="5" fill="#b9c0c8" stroke="#6b7280" stroke-width="1.5"/>' + lwin + '<rect x="0" y="80" width="360" height="3" fill="#a7a9ac"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2b2b30"/><path d="M0 236h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* the car: long, low, candy paint, chrome rims, bouncing */
      '<g class="bounce">' +
        '<path d="M80 196v-22q10-4 40-6l26-22h96l30 22q38 2 48 8v20z" fill="' + YEL + '" stroke="#7a5a00" stroke-width="2"/>' +
        '<path d="M152 168l20-18h30v18zM208 150h30l24 18h-54z" fill="#1d2a3a" stroke="#c9d3dc" stroke-width="1.5"/>' +
        '<path d="M80 184h240" stroke="' + ORG + '" stroke-width="3"/><path d="M80 194h240" stroke="#c9d3dc" stroke-width="3"/>' +
        '<rect x="312" y="176" width="10" height="6" fill="#fff6c2"/><rect x="80" y="178" width="6" height="6" fill="#e63946"/>' +
      '</g>' +
      rim(124, 200, 15) + rim(282, 200, 15) +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#9aa3ad">BORN TO ROLL</text>',
      sky("g4", "#1a1430", "#6a3a5a"));
  }

  /* 5. Sutter Av and Rockaway Av: green street signs, a streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 210; y += 10) for (let x = ((y / 10) % 2) * 12; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#6a3a2c" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="200" cy="32" r="12" fill="#fff1c7" opacity=".9"/>' +
      '<rect x="0" y="66" width="400" height="144" fill="#7d4433"/>' + bricks +
      tag("MASTA ACE", 70, 146, 44, YEL, -5) +
      tag("BORN TO ROLL", 150, 190, 24, CHROME, -3) +
      tag("THE I.N.C.", 40, 198, 18, ORG, -8) +
      '<rect x="384" y="20" width="6" height="190" fill="#5b6067"/>' +
      '<rect x="262" y="14" width="130" height="22" rx="3" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="327" y="30" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Sutter Av</text>' +
      '<rect x="250" y="40" width="142" height="22" rx="3" fill="#0d6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="321" y="56" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Rockaway Av</text>' +
      '<rect x="20" y="20" width="5" height="190" fill="#4b5058"/><path d="M22 22h34" stroke="#4b5058" stroke-width="4"/>' +
      '<rect class="flk" x="48" y="22" width="16" height="6" rx="2" fill="#ffe7a0"/>' +
      '<path class="flk" d="M48 28l-14 60h44l-14-60z" fill="#ffe7a0" opacity=".12"/>' +
      '<rect x="0" y="210" width="400" height="12" fill="#9b968e"/><rect x="0" y="222" width="400" height="38" fill="#2b2b30"/>' +
      '<text x="200" y="248" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#8d939b">BROWNSVILLE · BROOKLYN</text>',
      sky("g5", "#0c0a1c", "#2a2a50"));
  }

  window.SCENES = { train, houses, belmont, chrome, corner };
})();
