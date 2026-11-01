/* Harlem opening scenes for Smoke DZA's game. Each one is a small animated SVG, 400 x 260. */
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
  const GREEN = "#7cf29a", PURPLE = "#b07cff", GOLD = "#ffd34d";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, t, c, tc) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + FONT + ' font-size="14" fill="' + (tc || "#fff") + '">' + t + '</text>';
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + mortar + '"/>'; for (let yy = y + 1; yy < y + h - 2; yy += 8) for (let xx = x + (((yy - y) / 8) % 2 ? -6 : 0); xx < x + w; xx += 16) b += '<rect x="' + Math.max(x, xx) + '" y="' + yy + '" width="' + Math.min(14, x + w - Math.max(x, xx)) + '" height="6" fill="' + base + '"/>'; return b; };

  /* 1. 145 St on Lenox: underground, white tile walls with the band of trim, the red 3 pulling in */
  function station() {
    let tile = "";
    for (let y = 0; y < 120; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tile += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1eee4"/>';
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="134" width="28" height="20" rx="3" fill="#fff4c9" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfcabc"/>' + tile +
      '<rect x="0" y="18" width="400" height="8" fill="#7a2a2a"/><rect x="0" y="26" width="400" height="3" fill="#c9a24a"/>' +
      '<rect x="0" y="0" width="400" height="10" fill="#3a3a3a"/>' +
      '<rect class="flk" x="40" y="10" width="60" height="4" fill="#fffbe6"/><rect class="flk flk2" x="250" y="10" width="60" height="4" fill="#fffbe6"/>' +
      /* black station sign */
      '<rect x="110" y="44" width="180" height="32" rx="4" fill="#111"/><rect x="110" y="44" width="180" height="4" fill="#fff"/>' +
      '<text x="124" y="68" ' + FONT + ' font-size="16" fill="#fff">145 St</text>' + bullet(266, 61, "3", "#ee352e") +
      /* steel columns */
      '<rect x="20" y="29" width="8" height="93" fill="#3a5a8a"/><rect x="372" y="29" width="8" height="93" fill="#3a5a8a"/>' +
      /* the 3 train: stainless, red bullet in the window */
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="58" rx="6" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        windows + '<rect x="276" y="128" width="26" height="30" rx="3" fill="#1d2329"/>' + bullet(289, 143, "3", "#ee352e") +
        '<rect x="8" y="164" width="300" height="3" fill="#8a8f97"/><circle cx="300" cy="172" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2a2e"/>' +
      tag("HARLEM", 18, 240, 30, GREEN, -4) + tag("RFC", 300, 244, 34, PURPLE, -8),
      "");
  }

  /* 2. The 369th Regiment Armory on Fifth Av at 142nd: dark red brick Art Deco, the tall center tower with its ribbed piers, a flag flying */
  function armory() {
    let piers = "";
    for (let x = 166; x <= 228; x += 12) piers += '<rect x="' + x + '" y="40" width="5" height="130" fill="#6a2418"/>';
    let side = "";
    [[30, 110], [260, 110]].forEach(s => { for (let x = s[0] + 10; x < s[0] + s[1] - 8; x += 20) side += '<rect x="' + x + '" y="112" width="8" height="40" fill="#3a1a14"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* the drill shed roof behind */
      '<path d="M20 100q180-50 360 0v12H20z" fill="#5a5a60"/>' +
      brick(30, 96, 110, 80, "#8a3424", "#5e2216") + brick(260, 96, 110, 80, "#8a3424", "#5e2216") + side +
      '<rect x="30" y="92" width="110" height="6" fill="#5e2216"/><rect x="260" y="92" width="110" height="6" fill="#5e2216"/>' +
      /* the tower */
      brick(150, 30, 100, 146, "#8a3424", "#5e2216") + piers +
      '<path d="M150 30l10-10h80l10 10z" fill="#5e2216"/><rect x="176" y="12" width="48" height="10" fill="#6a2418"/>' +
      '<path d="M182 176v-46a18 18 0 0 1 36 0v46z" fill="#2a1410" stroke="#c9b48a" stroke-width="3"/>' +
      '<rect x="178" y="92" width="44" height="14" fill="#5e2216"/><text x="200" y="103" text-anchor="middle" ' + FONT + ' font-size="9" fill="#e6dccb">369TH</text>' +
      '<path d="M200 12v-10" stroke="#ddd" stroke-width="2"/><path class="flag" d="M201 2h18v9h-18z" fill="#2a5aa8"/>' +
      '<rect x="0" y="176" width="400" height="12" fill="#bdb6a6"/><rect x="0" y="188" width="400" height="72" fill="#2a2a2e"/>' +
      '<g class="sail"><rect x="0" y="196" width="46" height="18" rx="4" fill="#ffd34d"/><circle cx="10" cy="216" r="5" fill="#111"/><circle cx="36" cy="216" r="5" fill="#111"/></g>' +
      tag("FIFTH AV", 18, 248, 26, GREEN, -3),
      sky("g2", "#7aa8d8", "#f2d9b0"));
  }

  /* 3. Ringside: a wrestling ring under the lights, the crowd flashing, a high-flyer coming off the top rope */
  function ringside() {
    let crowd = "";
    for (let x = 4; x < 400; x += 10) crowd += '<circle cx="' + x + '" cy="' + (96 + (x * 7) % 14) + '" r="4" fill="#2a2440"/>';
    let flashes = "";
    [[40, 92], [120, 100], [260, 94], [350, 102]].forEach((f, i) => flashes += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + f[0] + '" cy="' + f[1] + '" r="3" fill="#fff"/>');
    return svg(
      '<rect width="400" height="260" fill="#0c0a16"/>' +
      '<g opacity=".2"><path d="M120 0l-40 200h80z" fill="#fff8d6"/><path d="M280 0l-40 200h80z" fill="#fff8d6"/></g>' +
      crowd + flashes +
      /* ring apron and mat */
      '<path d="M60 150h280l30 40H30z" fill="#e8e4dc"/><rect x="30" y="190" width="340" height="40" fill="' + PURPLE + '"/>' +
      '<text x="200" y="216" text-anchor="middle" ' + FONT + ' font-size="14" fill="#fff">RINGSIDE</text>' +
      /* posts and ropes */
      '<rect x="56" y="106" width="8" height="48" fill="#cfcfcf"/><rect x="336" y="106" width="8" height="48" fill="#cfcfcf"/>' +
      '<rect x="26" y="140" width="8" height="54" fill="#cfcfcf"/><rect x="366" y="140" width="8" height="54" fill="#cfcfcf"/>' +
      '<path d="M60 112h280M60 124h280M60 136h280" stroke="#e0263a" stroke-width="3"/>' +
      '<path d="M30 148h340M30 162h340M30 176h340" stroke="#e0263a" stroke-width="3"/>' +
      /* the high-flyer */
      '<g class="bob"><g transform="translate(300 60) rotate(-20)"><circle cx="0" cy="0" r="7" fill="#7a4a2a"/><rect x="-6" y="7" width="12" height="20" rx="3" fill="#111"/>' +
      '<path d="M-6 12l-16-10M6 12l16-10" stroke="#7a4a2a" stroke-width="4" stroke-linecap="round"/><path d="M-3 27l-6 16M3 27l6 16" stroke="#111" stroke-width="5" stroke-linecap="round"/></g></g>' +
      tag("BELL TO BELL", 250, 254, 20, GREEN, -3),
      "");
  }

  /* 4. Homegrown: a Harlem community garden behind the iron fence, sunflowers and tomato vines, the little casita, a watering can going */
  function garden() {
    let fence = "";
    for (let x = 0; x < 400; x += 10) fence += '<path d="M' + x + ' 196v-34l2-4 2 4v34" stroke="#1d1d1d" stroke-width="2" fill="none"/>';
    let sun = "";
    [[60, 104], [96, 92], [300, 98], [340, 110]].forEach((f, i) => sun += '<path d="M' + f[0] + ' 196V' + f[1] + '" stroke="#3d7a2c" stroke-width="3"/><g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + f[0] + '" cy="' + f[1] + '" r="12" fill="#ffcf2a"/><circle cx="' + f[0] + '" cy="' + f[1] + '" r="5" fill="#6a3a1a"/></g>');
    let drops = "";
    for (let i = 0; i < 4; i++) drops += '<circle class="flk' + (i % 2 ? " flk2" : "") + '" cx="' + (218 + i * 6) + '" cy="' + (150 + i * 8) + '" r="2" fill="#9ad8ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* brownstones behind */
      '<rect x="0" y="30" width="130" height="130" fill="#7a4a36"/><rect x="270" y="20" width="130" height="140" fill="#8a5a42"/>' +
      (function () { let w = ""; for (let y = 44; y < 150; y += 28) { [16, 50, 84].forEach(x => w += '<rect x="' + x + '" y="' + y + '" width="18" height="18" fill="#ffe7a8" opacity=".85"/>'); [286, 320, 354].forEach(x => w += '<rect x="' + x + '" y="' + (y - 8) + '" width="18" height="18" fill="#ffe7a8" opacity=".85"/>'); } return w; })() +
      /* a water tower up top */
      '<path d="M300 20v-14h24v14" fill="#6a4a2a"/><path d="M296 8l16-8 16 8z" fill="#4a3a2a"/>' +
      /* casita */
      '<rect x="150" y="120" width="70" height="56" fill="#e94b6a"/><path d="M144 122l41-26 41 26z" fill="#ffd34d"/><rect x="176" y="146" width="18" height="30" fill="#5a2a2a"/>' +
      '<rect x="160" y="132" width="12" height="10" fill="#9ad8ff"/><rect x="198" y="132" width="12" height="10" fill="#9ad8ff"/>' +
      /* beds */
      '<rect x="0" y="176" width="400" height="84" fill="#5a3a22"/>' +
      '<rect x="20" y="184" width="120" height="16" fill="#6a4a2a"/><rect x="250" y="184" width="130" height="16" fill="#6a4a2a"/>' +
      (function () { let t = ""; for (let x = 30; x < 140; x += 18) t += '<path d="M' + x + ' 184v-22" stroke="#3d7a2c" stroke-width="3"/><circle cx="' + (x + 4) + '" cy="170" r="4" fill="#e0402a"/>'; return t; })() +
      sun + '<path d="M222 140l-12-6v-10h18v10z" fill="#9aa3ad"/>' + drops + fence +
      tag("HOMEGROWN", 18, 246, 30, GREEN, -3),
      sky("g4", "#86c4f0", "#fde6c0"));
  }

  /* 5. Lenox Av and W 119 St, his block: green signs, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#3a2420"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 16 : 26; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a2e28"/>'; return b; })() +
      tag("SMOKE DZA", 24, 124, 40, GREEN, -7) + tag("GEORGE KUSH", 36, 170, 28, GOLD, -3) + tag("RFC", 60, 208, 30, PURPLE, -2) +
      '<rect class="drip" x="56" y="126" width="3" height="16" fill="' + GREEN + '"/><rect class="drip" x="190" y="170" width="3" height="12" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Lenox Av</text>' +
      '<rect x="270" y="110" width="68" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="304" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">W 119 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#2a1a2a"));
  }

  window.SCENES = { station, armory, ringside, garden, corner };
})();
