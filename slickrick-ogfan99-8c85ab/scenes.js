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

/* ---- YANKEE STADIUM BACKDROP ---- */
/* Yankee Stadium, the Bronx's shared landmark, in the sky behind the last corner, seen from this corner: a speck far off to the southwest past the 5 train el at Baychester, the 5 rolling across in front */
(function () {
  /* Y: little kit for drawing the stadium into the corner's sky. Every piece is plain SVG in the 400 x 260 frame. */
  const Y = (function () {
    const css = '<style>' +
      '@keyframes ysP{0%,100%{opacity:1}50%{opacity:.5}}.ysP{animation:ysP 1.8s ease-in-out infinite}' +
      '@keyframes ysF{0%{transform:scale(.1);opacity:0}12%{opacity:1}100%{transform:scale(1);opacity:0}}.ysF{transform-box:fill-box;transform-origin:50% 50%;animation:ysF 2.6s ease-out infinite}' +
      '@keyframes ysB{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.ysB{transform-box:fill-box;transform-origin:50% 100%;animation:ysB 5s ease-in-out infinite}' +
      '@keyframes ysX{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ysX{animation:ysX 16s linear infinite}' +
      '@keyframes ysW{0%,100%{transform:skewY(0)}50%{transform:skewY(-14deg)}}.ysW{transform-box:fill-box;transform-origin:0 50%;animation:ysW 1.1s ease-in-out infinite}' +
      '@keyframes ysD{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.ysD{animation:ysD 9s ease-in-out infinite}' +
      '@keyframes ysS{from{transform:translateY(0)}to{transform:translateY(60px)}}.ysS{animation:ysS 3s linear infinite}.ysR{animation-duration:.7s}' +
      '@keyframes ysK{0%,100%{opacity:1}50%{opacity:.2}}.ysK{animation:ysK 1s steps(1) infinite}' +
      '</style>';
    const g = (x, y, s, inner) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + inner + '</g>';
    /* the white frieze: top rail, posts, and the arched openings hanging under it */
    const frieze = (x0, x1, y, k, c) => {
      let p = 'M' + x0 + ' ' + y + 'H' + x1;
      for (let x = x0; x < x1 - 0.1; x += k) p += 'M' + x + ' ' + y + 'v6M' + x + ' ' + (y + 4.5) + 'q' + (k / 2) + ' -5 ' + k + ' 0';
      return '<path d="' + p + 'M' + x1 + ' ' + y + 'v6" fill="none" stroke="' + (c || "#f4f1e8") + '" stroke-width="1.4"/>';
    };
    /* light banks on poles, with a soft glow */
    const lights = (xs, y, off) => xs.map((p, i) => { const x = p.length ? p[0] : p, yy = p.length ? p[1] : y;
      return '<g' + (off ? ' class="ysK" style="animation-duration:' + (2 + i * .7) + 's"' : '') + '><ellipse class="ysP" cx="' + x + '" cy="' + (yy - 11) + '" rx="11" ry="6" fill="#fff4c8" opacity=".24"/>' +
      '<path d="M' + x + ' ' + yy + 'v-8" stroke="#3a3f48" stroke-width="1.2"/><rect x="' + (x - 6) + '" y="' + (yy - 13) + '" width="12" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>' +
      '<path d="M' + (x - 2) + ' ' + (yy - 13) + 'v5M' + (x + 2) + ' ' + (yy - 13) + 'v5" stroke="#c9c3a8" stroke-width=".5"/></g>'; }).join("");
    /* the limestone face: tall arches either side of the big gate, a gold band over the gate (no lettering) */
    const face = (w, lit) => {
      const n = Math.max(2, Math.round((w - 36) / 2 / 20)), step = (w / 2 - 22) / n, aw = step * 0.6, gx = w / 2;
      let a = '<rect x="0" y="-58" width="' + w + '" height="58" fill="' + (lit ? "#e9dcb8" : "#d8cfba") + '"/>' +
        '<rect x="-2" y="-62" width="' + (w + 4) + '" height="5" fill="#f1ead8"/><rect x="0" y="-8" width="' + w + '" height="8" fill="#a99f8a"/>';
      for (let i = 0; i < n; i++) [6 + i * step, w - 6 - i * step - aw].forEach(x =>
        a += '<path d="M' + x.toFixed(1) + ' -8V-42a' + (aw / 2).toFixed(1) + ' ' + (aw / 2).toFixed(1) + ' 0 0 1 ' + aw.toFixed(1) + ' 0V-8z" fill="' + (lit ? "#ffcf78" : "#4a4652") + '"' + (lit ? ' opacity=".9"' : '') + '/>');
      a += '<path d="M' + (gx - 15) + ' -8V-38a15 15 0 0 1 30 0V-8z" fill="' + (lit ? "#ffe2a0" : "#3a3640") + '" stroke="#b8ad94" stroke-width="2"/>' +
        '<rect x="' + (gx - 20) + '" y="-56" width="40" height="5" fill="#c9a24a"/>';
      return a;
    };
    /* the upper deck behind the face, with the frieze riding on top and light banks above it */
    const deck = (w, lit, banks) => '<path d="M-4 -60L6 -74H' + (w - 6) + 'L' + (w + 4) + ' -60z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, w - 6, -80, 7) +
      '<path d="M6 -80H' + (w - 6) + '" stroke="#f4f1e8" stroke-width="2"/>' + lights(banks || [w * 0.2, w * 0.5, w * 0.8], -80);
    const halo = (c) => '<radialGradient id="ysH"><stop offset="0" stop-color="' + (c || "#ffe9b0") + '" stop-opacity=".55"/><stop offset="1" stop-color="' + (c || "#ffe9b0") + '" stop-opacity="0"/></radialGradient>';
    return {
      css,
      /* straight-on front: face + deck */
      front: (x, y, s, o) => g(x, y, s, deck(o.w || 200, o.lit, o.banks) + face(o.w || 200, o.lit)),
      /* three-quarter view: front face plus the long side running away to the right */
      corner3q: (x, y, s, o) => {
        const lit = o.lit;
        let side = '<path d="M120 -62L200 -50V-4L120 0z" fill="' + (lit ? "#cbbd99" : "#bdb4a0") + '"/><path d="M120 -62L200 -50" stroke="#f1ead8" stroke-width="4"/>';
        for (let i = 0; i < 5; i++) { const x0 = 128 + i * 15, x1 = x0 + 8, t0 = -55 + (x0 - 120) * 0.15, t1 = -55 + (x1 - 120) * 0.15, b0 = -8 + (x0 - 120) * 0.05;
          side += '<path d="M' + x0 + ' ' + b0 + 'V' + (t0 + 10) + 'Q' + ((x0 + x1) / 2) + ' ' + (t0 + 2) + ' ' + x1 + ' ' + (t1 + 10) + 'V' + (b0 - 0.4) + 'z" fill="' + (lit ? "#ffc865" : "#4a4652") + '"' + (lit ? ' opacity=".85"' : '') + '/>'; }
        const top = '<path d="M-4 -60L6 -74H120L200 -62V-50z" fill="' + (lit ? "#4c5568" : "#6b7280") + '"/>' + frieze(6, 118, -80, 7) +
          '<path d="M118 -80L198 -68" stroke="#f4f1e8" stroke-width="2"/><path d="M118 -80L198 -68M126 -79v5M138 -77v5M150 -75v5M162 -74v5M174 -72v5M186 -70v5M198 -68v5" fill="none" stroke="#f4f1e8" stroke-width="1.2"/>' +
          '<path d="M6 -80H118" stroke="#f4f1e8" stroke-width="2"/>' + lights([30, 90, 150, 190], -78);
        return g(x, y, s, top + side + face(120, lit));
      },
      /* far off: a low dark mass, the frieze a thin bright lace on top, the lights glowing */
      far: (x, y, s, o) => { let ar = ""; for (let i = 0; i < 15; i++) ar += '<path d="M' + (16 + i * 11.6) + ' -3V-14a3 3 0 0 1 6 0V-3z" fill="' + (o.win ? "#ffcf78" : "#4a4652") + '"/>';
        return halo(o.hc) + g(x, y, s,
        '<ellipse class="ysP" cx="100" cy="-34" rx="' + (o.halo || 120) + '" ry="' + ((o.halo || 120) / 3) + '" fill="url(#ysH)"/>' +
        '<path d="M2 -18V-22Q100 -44 198 -22V-18z" fill="' + (o.c || "#2c3040") + '"/>' +
        '<path d="M6 -27Q100 -48 194 -27" fill="none" stroke="#f4f1e8" stroke-width="1.6"/><path d="M6 -24.5Q100 -45.5 194 -24.5" fill="none" stroke="#f4f1e8" stroke-width="4" stroke-dasharray="1.4 2.2" opacity=".85"/>' +
        lights([[30, -33], [72, -40], [128, -40], [170, -33]], 0, o.off) +
        '<rect x="8" y="-20" width="184" height="20" fill="' + (o.lime || "#c9c0aa") + '"/><rect x="6" y="-22" width="188" height="3" fill="#ece5d2"/>' + ar +
        '<path d="M92 -3V-15a8 8 0 0 1 16 0V-3z" fill="' + (o.win ? "#ffe2a0" : "#3a3640") + '"/><rect x="88" y="-19" width="24" height="3" fill="#c9a24a"/>'); },
      /* the city spread out below a high corner, for the views looking down */
      valley: (y0, c, w) => { let d = '<rect x="0" y="' + y0 + '" width="400" height="' + (226 - y0) + '" fill="' + c + '"/>'; for (let i = 0; i < 70; i++) d += '<rect x="' + ((i * 53) % 400) + '" y="' + (y0 + 4 + (i * 29) % (222 - y0)) + '" width="2" height="2" fill="' + (w || "#ffd98a") + '" opacity=".6"/>'; return d; },
      /* from up on the Highbridge bluff: down into the bowl */
      bowl: (cx, cy, s, o) => {
        let b = '<ellipse rx="100" ry="36" fill="#d8cfba"/><ellipse rx="93" ry="32" fill="#2c4470"/><ellipse rx="80" ry="27" cy="2" fill="#3b5d96"/>' +
          '<ellipse rx="66" ry="21" cy="4" fill="' + (o.day ? "#3fa34a" : "#2f9a3e") + '"/><ellipse rx="54" ry="16" cy="5" fill="none" stroke="#4fb85a" stroke-width="5" opacity=".6"/>' +
          '<path d="M0 22L18 13L0 6L-18 13z" fill="#c08850"/><path d="M0 18L11 13L0 9L-11 13z" fill="#3fa34a"/>' +
          '<rect x="-1.5" y="20.5" width="3" height="3" fill="#fff"/><rect x="16.5" y="11.5" width="3" height="3" fill="#fff"/><rect x="-1.5" y="4.5" width="3" height="3" fill="#fff"/><rect x="-19.5" y="11.5" width="3" height="3" fill="#fff"/>' +
          '<ellipse rx="97" ry="34" fill="none" stroke="#f4f1e8" stroke-width="3" stroke-dasharray="1.4 1.8"/><ellipse rx="98" ry="35" fill="none" stroke="#f4f1e8" stroke-width="1"/>' +
          '<rect x="-20" y="-38" width="40" height="12" fill="#14161c"/><g class="ysK"><path d="M-16 -34h14M2 -34h14M-16 -30h26" stroke="#7fd4ff" stroke-width="1.6"/></g>';
        [[-90, -12], [-50, -32], [50, -32], [90, -12], [-80, 20], [80, 20]].forEach(p => b += '<circle class="ysP" cx="' + p[0] + '" cy="' + (p[1] - 6) + '" r="9" fill="#fff4c8" opacity=".3"/><rect x="' + (p[0] - 5) + '" y="' + (p[1] - 9) + '" width="10" height="5" fill="#fffbe6" stroke="#3a3f48" stroke-width=".8"/>');
        return g(cx, cy, s, b);
      },
      /* light in the sky: the horizon tint for dusk, dawn, golden afternoon */
      tint: (top, bottom, y0) => '<linearGradient id="ysT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '" stop-opacity="0"/><stop offset="1" stop-color="' + bottom + '" stop-opacity=".85"/></linearGradient>' +
        '<rect x="0" y="' + (y0 || 0) + '" width="400" height="' + (226 - (y0 || 0)) + '" fill="url(#ysT)"/>',
      halo,
      clouds: (list, c) => list.map((p, i) => '<g class="ysD" style="animation-delay:-' + (i * 3) + 's"><ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + p[2] + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/><ellipse cx="' + (p[0] + p[2] * .3) + '" cy="' + (p[1] - p[2] / 6) + '" rx="' + (p[2] * .5) + '" ry="' + (p[2] / 4) + '" fill="' + c + '"/></g>').join(""),
      plane: (y, dur) => '<g class="ysX" style="animation-duration:' + (dur || 16) + 's"><path d="M0 ' + y + 'h16l4 -2h-6l-5 -5h-3l3 5h-9z" fill="#2a2d36"/><circle class="ysK" cx="2" cy="' + y + '" r="1.6" fill="#ff4a4a"/><circle cx="17" cy="' + y + '" r="1.2" fill="#fff"/></g>',
      blimp: (x, y) => '<g class="ysD"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9" fill="#d9dde3" stroke="#6b7280" stroke-width="1"/><path d="M' + (x + 22) + ' ' + y + 'l10 -8v16z" fill="#9aa1aa"/><rect x="' + (x - 6) + '" y="' + (y + 8) + '" width="12" height="4" rx="1" fill="#3a3f48"/>' +
        '<rect class="ysK" x="' + (x - 16) + '" y="' + (y - 2) + '" width="28" height="4" rx="2" fill="#ffd66b"/></g>',
      fireworks: (list) => list.map((p, i) => { let r = ""; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; r += 'M' + p[0] + ' ' + p[1] + 'l' + (Math.cos(a) * p[2]).toFixed(1) + ' ' + (Math.sin(a) * p[2]).toFixed(1); }
        return '<path class="ysF" style="animation-delay:-' + (i * 0.9) + 's" d="' + r + '" stroke="' + p[3] + '" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>'; }).join(""),
      beams: (list) => list.map((p, i) => '<path class="ysB" style="animation-delay:-' + (i * 2.4) + 's" d="M' + p[0] + ' ' + p[1] + 'l-9 -' + p[2] + 'h18z" fill="#fff6d8" opacity=".16"/>').join(""),
      birds: (x, y) => '<g class="ysX" style="animation-duration:22s"><path d="M' + x + ' ' + y + 'q3 -3 6 0q3 -3 6 0M' + (x + 14) + ' ' + (y - 6) + 'q2 -2 4 0q2 -2 4 0M' + (x - 10) + ' ' + (y - 4) + 'q2 -2 4 0q2 -2 4 0" fill="none" stroke="#22252e" stroke-width="1.3"/></g>',
      flags: (list) => list.map((p, i) => '<path d="M' + p[0] + ' ' + p[1] + 'v-' + p[2] + '" stroke="#e6e6e6" stroke-width="1"/><g class="ysW" style="animation-delay:-' + (i * 0.3) + 's"><rect x="' + p[0] + '" y="' + (p[1] - p[2]) + '" width="' + (p[2] * .6) + '" height="' + (p[2] * .38) + '" fill="' + (i % 2 ? "#1f3a8a" : "#e8303a") + '"/><path d="M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .13) + 'h' + (p[2] * .6) + 'M' + p[0] + ' ' + (p[1] - p[2] + p[2] * .26) + 'h' + (p[2] * .6) + '" stroke="#fff" stroke-width=".8"/></g>').join(""),
      /* an el: girder, posts, and a 4 (or 5) train rolling across it */
      el: (x0, x1, y, s, n) => {
        let p = '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + (4 * s) + '" fill="#2f3a33"/>';
        for (let x = x0 + 6; x < x1; x += 26 * s) p += '<rect x="' + x + '" y="' + y + '" width="' + (2 * s) + '" height="' + (40 * s) + '" fill="#2f3a33"/>';
        let cars = ""; for (let c = 0; c < 3; c++) cars += '<rect x="' + (c * 34 * s) + '" y="' + (y - 11 * s) + '" width="' + (32 * s) + '" height="' + (11 * s) + '" rx="' + (2 * s) + '" fill="#c3c8cf" stroke="#6b7280" stroke-width=".8"/><path d="M' + (c * 34 * s + 4 * s) + ' ' + (y - 7 * s) + 'h' + (24 * s) + '" stroke="#ffe9b0" stroke-width="' + (3 * s) + '" stroke-dasharray="' + (4 * s) + ' ' + (2 * s) + '"/>';
        return p + '<g class="ysX" style="animation-duration:11s">' + cars + '<circle cx="' + (96 * s) + '" cy="' + (y - 5.5 * s) + '" r="' + (4.5 * s) + '" fill="#00933c"/><text x="' + (96 * s) + '" y="' + (y - 3.3 * s) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (6 * s) + '" fill="#fff">' + (n || "4") + '</text></g>';
      },
      /* falling weather, looped in a box: rain streaks or snow */
      weather: (x, y, w, h, kind) => { let d = ""; for (let i = 0; i < Math.round(w * 60 / 300); i++) { const px = x + (i * 37) % w, py0 = (i * 23) % 60;
        for (let py = y - 60 + py0; py < y + h; py += 60) d += kind === "snow" ? '<circle cx="' + px + '" cy="' + py + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff" opacity=".85"/>' : '<path d="M' + px + ' ' + py + 'l-2 9" stroke="#b9c8dc" stroke-width="1" opacity=".6"/>'; }
        return '<clipPath id="ysC"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/></clipPath><g clip-path="url(#ysC)"><g class="ysS' + (kind === "snow" ? "" : " ysR") + '">' + d + '</g></g>'; },
      fog: (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '" opacity=".38"/><g class="ysD"><ellipse cx="' + (x + w * .3) + '" cy="' + (y + h * .55) + '" rx="' + (w * .4) + '" ry="' + (h * .18) + '" fill="' + c + '" opacity=".45"/><ellipse cx="' + (x + w * .75) + '" cy="' + (y + h * .35) + '" rx="' + (w * .35) + '" ry="' + (h * .14) + '" fill="' + c + '" opacity=".4"/></g>',
      moon: (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r + 8) + '" fill="#fff1d6" opacity=".12"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff1d6"/><circle cx="' + (x - r * .3) + '" cy="' + (y - r * .2) + '" r="' + (r * .2) + '" fill="#e8dcc0"/><circle cx="' + (x + r * .35) + '" cy="' + (y + r * .3) + '" r="' + (r * .14) + '" fill="#e8dcc0"/>',
      river: (x0, x1, y, h) => '<rect x="' + x0 + '" y="' + y + '" width="' + (x1 - x0) + '" height="' + h + '" fill="#1c2a44"/><g class="ysD"><path d="M' + (x0 + 10) + ' ' + (y + 3) + 'h30M' + (x0 + 70) + ' ' + (y + 6) + 'h22M' + (x0 + 130) + ' ' + (y + 4) + 'h26" stroke="#ffcf78" stroke-width="1.4" opacity=".7"/></g>'
    };
  })();
  const base = window.SCENES.corner;
  window.SCENES.corner = function () {
    const art = '<g>' + Y.css +
      Y.far(300, 200, .4, { halo: 70, win: true }) + Y.el(258, 400, 198, .8, "5") + '</g>';
    /* slot it in right behind everything: after the sky, its stars and moon */
    return base.apply(this, arguments).replace(/<rect width="400" height="260" fill="url\(#[\w-]+\)"\/>(?:<circle[^>]*\/>)*/, m => m + art);
  };
})();
