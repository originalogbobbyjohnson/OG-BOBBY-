/* Baychester opening scenes for the Slick Rick game: The Ruler, hip-hop's greatest storyteller.
   Baychester Av up on the Dyre Avenue embankment, the Co-op City towers over the Hutchinson River, the Bartow-Pell Mansion in
   Pelham Bay Park, the Ruler's storybook (crown, eye patch, gold), and the corner of Baychester and Tillotson. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.cld{animation:drift 26s linear infinite}.cld2{animation-delay:-13s}' +
    '@keyframes ripple{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}' +
    '.rip{animation:ripple 3s ease-in-out infinite}.rip2{animation-delay:-1.5s}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(460px,-30px)}}' +
    '.bird{animation:fly 11s linear infinite}.bird2{animation-delay:-5.5s}' +
    '@keyframes jet{0%{transform:scaleY(.7);opacity:.6}50%{transform:scaleY(1);opacity:1}100%{transform:scaleY(.7);opacity:.6}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.2s ease-in-out infinite}' +
    '@keyframes drop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drop 1s linear infinite}.drp2{animation-delay:-.5s}' +
    '@keyframes twinkle{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1)}}' +
    '.tw{transform-box:fill-box;transform-origin:center;animation:twinkle 1.8s ease-in-out infinite}.tw2{animation-delay:-.6s}.tw3{animation-delay:-1.2s}' +
    '@keyframes page{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-.2)}}' +
    '.pg{transform-box:fill-box;transform-origin:0 50%;animation:page 4s ease-in-out infinite}' +
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
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const cloud = (cls, x, y) => '<g class="cld ' + cls + '"><g transform="translate(' + x + ' ' + y + ')" fill="#fff" opacity=".8"><ellipse cx="0" cy="0" rx="26" ry="9"/><ellipse cx="14" cy="-6" rx="16" ry="9"/></g></g>';
  const WHITE = "#ffffff", GOLD = "#e8b84a", RED = "#c8102e", GREEN = "#00933c";

  /* 1. The 5 pulling into Baychester Av, up on the Dyre Avenue embankment in the open air; Baychester Av passes underneath */
  function train() {
    let windows = "";
    for (let x = 18; x < 260; x += 46) windows += '<rect x="' + x + '" y="104" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let posts = "";
    for (let x = 20; x < 400; x += 60) posts += '<rect x="' + (x - 2) + '" y="40" width="4" height="54" fill="#2f4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + cloud("", 40, 30) + cloud("cld2", 220, 22) +
      /* platform canopy */
      '<path d="M0 34h400v8H0z" fill="#3c5a48"/>' + posts +
      /* station sign hanging from the canopy */
      '<rect x="88" y="46" width="224" height="34" rx="4" fill="#111"/><rect x="88" y="46" width="224" height="4" fill="#fff"/>' +
      '<text x="102" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Baychester Av</text>' +
      bullet(290, 64, "5", GREEN) +
      /* the 5 slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="94" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="134" width="300" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="300" cy="146" r="4" fill="#fff6c2"/>' + bullet(292, 115, "5", GREEN) +
      '</g>' +
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/>' +
      /* the embankment, with Baychester Av running under it */
      '<path d="M0 164h400v40H0z" fill="#6f6658"/>' +
      '<rect x="150" y="164" width="100" height="8" fill="#5a5247"/><rect x="156" y="172" width="88" height="40" fill="#1d1f24"/>' +
      '<path d="M0 204q60-8 150 0M250 204q80-10 150 0" stroke="#4d7a3f" stroke-width="10" fill="none"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#2a2d33"/><path d="M0 236h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("THE RULER", 20, 250, 26, GOLD, -4) + tag("BAYCHESTER", 250, 252, 22, WHITE, -5),
      sky("g1", "#f2a65a", "#ffd9a0"));
  }

  /* 2. Co-op City: the tall brick towers over the Hutchinson River, windows lighting up at dusk, birds crossing */
  function coop() {
    let towers = "";
    [[18, 50, 52], [84, 34, 58], [156, 60, 50], [218, 40, 56], [288, 54, 50], [344, 70, 48]].forEach(([x, y, w], k) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (190 - y) + '" fill="' + (k % 2 ? "#a4543a" : "#b8664a") + '"/>' +
        '<rect x="' + (x + w / 2 - 3) + '" y="' + y + '" width="6" height="' + (190 - y) + '" fill="#8e4630"/>';
      for (let yy = y + 8; yy < 184; yy += 10) for (let xx = x + 5; xx < x + w - 6; xx += 9) {
        if (Math.abs(xx - (x + w / 2)) < 6) continue;
        const lit = (xx * 7 + yy * 3 + k) % 5 === 0;
        towers += '<rect ' + (lit ? 'class="flk' + ((xx + yy) % 3 ? "" : " flk2") + '" ' : '') + 'x="' + xx + '" y="' + yy + '" width="5" height="5" fill="' + (lit ? "#ffe39a" : "#5a2f22") + '"/>';
      }
    });
    const bird = cls => '<g class="bird ' + cls + '"><path d="M40 60q6-6 12 0q6-6 12 0" stroke="#1d1d24" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      towers +
      '<rect x="0" y="186" width="400" height="10" fill="#3d5a3a"/>' +
      /* the Hutchinson River */
      '<rect x="0" y="196" width="400" height="64" fill="#2c4f6e"/>' +
      '<g class="rip"><path d="M10 212h40M90 222h50M180 210h36M260 226h44M330 214h40" stroke="#a9cbe6" stroke-width="2" opacity=".6"/></g>' +
      '<g class="rip rip2"><path d="M40 238h50M150 244h40M230 236h50M320 246h36" stroke="#ffd59a" stroke-width="2" opacity=".5"/></g>' +
      bird("") + bird("bird2") +
      '<rect x="128" y="8" width="144" height="22" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<text x="200" y="24" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="' + GOLD + '">CO-OP CITY</text>',
      sky("g2", "#2b2350", "#e98a5c"));
  }

  /* 3. Pelham Bay Park: the Bartow-Pell Mansion (1842), grey stone Greek Revival house, the fountain in the formal garden */
  function bartow() {
    let wins = "";
    [96, 140, 248, 292].forEach(x => { wins += '<rect x="' + x + '" y="92" width="18" height="28" fill="#2b3640" stroke="#f1ede4" stroke-width="2"/><rect x="' + x + '" y="136" width="18" height="32" fill="#2b3640" stroke="#f1ede4" stroke-width="2"/>'; });
    let hedge = "";
    for (let x = 0; x < 400; x += 26) hedge += '<ellipse cx="' + (x + 13) + '" cy="196" rx="15" ry="10" fill="#2e6b3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + cloud("", 60, 34) + cloud("cld2", 260, 26) +
      /* the house: grey ashlar stone, low hipped roof, cornice */
      '<path d="M70 72h260l-14-18H84z" fill="#5d6166"/>' +
      '<rect x="66" y="70" width="268" height="8" fill="#e9e6df"/>' +
      '<rect x="72" y="78" width="256" height="104" fill="#a7a69f"/>' +
      '<path d="M72 98h256M72 118h256M72 138h256M72 158h256" stroke="#94938c" stroke-width="1"/>' +
      wins +
      /* entrance with fanlight + columns */
      '<rect x="182" y="124" width="36" height="58" fill="#3b2b20"/><path d="M182 124a18 12 0 0 1 36 0z" fill="#e9e6df"/>' +
      '<rect x="174" y="118" width="6" height="64" fill="#f1ede4"/><rect x="220" y="118" width="6" height="64" fill="#f1ede4"/><rect x="170" y="114" width="60" height="6" fill="#f1ede4"/>' +
      '<rect x="190" y="88" width="20" height="20" fill="#2b3640" stroke="#f1ede4" stroke-width="2"/>' +
      '<path d="M84 54v-12h10v12M306 54v-12h10v12" fill="#7a6d62"/>' +
      hedge +
      /* garden fountain */
      '<rect x="0" y="204" width="400" height="56" fill="#6f9a52"/>' +
      '<ellipse cx="200" cy="232" rx="56" ry="12" fill="#c9c6bc"/><ellipse cx="200" cy="230" rx="48" ry="8" fill="#6fb3d6"/>' +
      '<rect x="196" y="206" width="8" height="24" fill="#c9c6bc"/><ellipse cx="200" cy="206" rx="16" ry="4" fill="#c9c6bc"/>' +
      '<path class="jet" d="M200 204q-2-14 0-22q2 8 0 22z" fill="#bfe6ff"/>' +
      '<circle class="drp" cx="190" cy="206" r="1.6" fill="#bfe6ff"/><circle class="drp drp2" cx="210" cy="206" r="1.6" fill="#bfe6ff"/>' +
      '<rect x="120" y="8" width="160" height="22" rx="3" fill="#1f3d2a" stroke="#e9e6df" stroke-width="1.5"/>' +
      '<text x="200" y="23" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">PELHAM BAY PARK</text>',
      sky("g3", "#7fb8e6", "#e2f1fb"));
  }

  /* 4. The Ruler's storybook: "Once upon a time...", the crown and the eye patch on a red velvet pillow, gold ropes, sparkle */
  function story() {
    const spark = (cls, x, y) => '<path class="tw ' + cls + '" d="M' + x + ' ' + (y - 7) + 'l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff6c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* curtain swags */
      '<path d="M0 0h400v18q-50 22-100 0q-50 22-100 0q-50 22-100 0q-50 22-100 0z" fill="' + RED + '"/>' +
      '<path d="M0 18q50 22 100 0q50 22 100 0q50 22 100 0q50 22 100 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      /* open storybook */
      '<path d="M30 200l10-110q70-12 120 8v110q-60-18-130-8z" fill="#f6efdc" stroke="#7a5512" stroke-width="2"/>' +
      '<path d="M160 98q50-20 120-8l10 110q-70-10-130 8z" fill="#f6efdc" stroke="#7a5512" stroke-width="2"/>' +
      '<text x="62" y="124" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#3a2a14">Once upon</text>' +
      '<text x="62" y="140" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#3a2a14">a time,</text>' +
      '<text x="62" y="156" font-family="Georgia, serif" font-style="italic" font-size="12" fill="#3a2a14">not long ago...</text>' +
      '<path d="M182 120h80M182 134h86M182 148h76M182 162h84M182 176h60" stroke="#b9ac8e" stroke-width="2"/>' +
      '<path class="pg" d="M160 104q40-14 90-6v96q-50-6-90 8z" fill="#fffaf0" stroke="#c9b48a" stroke-width="1.5" opacity=".9"/>' +
      /* velvet pillow with the crown + eye patch */
      '<path d="M296 196q-8-30 10-38h70q16 8 8 38z" fill="#8e0c22"/><circle cx="300" cy="160" r="4" fill="' + GOLD + '"/><circle cx="382" cy="160" r="4" fill="' + GOLD + '"/>' +
      '<path d="M310 150l6-34 12 16 14-24 14 24 12-16 6 34z" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="342" cy="140" r="4" fill="#3a6fe0"/><circle cx="324" cy="142" r="3" fill="#d8262e"/><circle cx="360" cy="142" r="3" fill="#d8262e"/>' +
      '<path d="M306 182q36-14 72 0" stroke="#111" stroke-width="2" fill="none"/><ellipse cx="342" cy="178" rx="12" ry="9" fill="#111"/>' +
      /* gold rope chains */
      '<path d="M40 228q80 30 160 0q80 30 160 0" stroke="' + GOLD + '" stroke-width="5" fill="none" stroke-dasharray="6 3"/>' +
      '<circle cx="200" cy="232" r="9" fill="' + GOLD + '" stroke="#7a5512" stroke-width="2"/>' +
      spark("", 326, 112) + spark("tw2", 372, 132) + spark("tw3", 210, 226) + spark("tw2", 70, 90),
      sky("g4", "#1a0a14", "#3a1424"));
  }

  /* 5. Baychester Av and Tillotson Av, by the station: street signs, streetlight, the tag wall */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#4a3a52"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="4" y="60" width="250" height="160" fill="#3a2c40"/>' + brick +
      tag("SLICK RICK", 18, 132, 38, WHITE, -7) + tag("THE RULER", 30, 184, 28, GOLD, -4) + tag("HERE WE GO", 140, 208, 18, "#ff6b7a", -5) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      sign(262, 88, 92, "Baychester Av") + sign(266, 110, 84, "Tillotson Av") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d0a1a", "#2e2448"));
  }

  window.SCENES = { train, coop, bartow, story, corner };
})();
