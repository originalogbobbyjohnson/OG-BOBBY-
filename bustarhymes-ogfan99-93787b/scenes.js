/* Uniondale / Hempstead, Long Island opening scenes for the Busta Rhymes game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 1.6s infinite}.flk2{animation-delay:-.7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}' +
    '.bob{animation:bob .8s ease-in-out infinite}.bob2{animation-delay:-.4s}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 100%;animation:beam 3.2s ease-in-out infinite}.beam2{animation-delay:-1.6s}' +
    '@keyframes fire{0%,100%{transform:scaleX(1);opacity:1}50%{transform:scaleX(1.18);opacity:.8}}' +
    '.fire{transform-box:fill-box;transform-origin:0% 50%;animation:fire .5s ease-in-out infinite}' +
    '@keyframes wing{0%,100%{transform:rotate(0)}50%{transform:rotate(-14deg)}}' +
    '.wing{transform-box:fill-box;transform-origin:20% 100%;animation:wing 1.1s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}' +
    '.gull{animation:gull 11s linear infinite}.gull2{animation-delay:-5s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-90px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcc00", RED = "#e8322b", GREEN = "#2fbf71";

  /* 1. Hempstead LIRR terminal: street-level platform under a long canopy, the silver train with its blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="122" width="28" height="20" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + x + '" y="38" width="6" height="66" fill="#7a2e22"/>';
    let bricks = "";
    for (let y = 196; y < 260; y += 10) bricks += '<path d="M0 ' + y + 'h400" stroke="#6a2a1c" stroke-width="1" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* canopy */
      '<path d="M0 26h400v12H0z" fill="#3d4652"/><path d="M0 38h400" stroke="#1d232b" stroke-width="2"/>' + posts +
      /* station sign */
      '<rect x="40" y="50" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="77" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Hempstead</text>' +
      badge(160, 70, 50, "LIRR", "#0039a6") +
      '<text x="224" y="67" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">HEMPSTEAD BRANCH</text>' +
      '<text x="224" y="81" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">TO PENN STATION</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="110" width="300" height="56" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="148" width="300" height="6" fill="#0039a6"/><rect x="8" y="154" width="300" height="3" fill="#6a5acd"/>' + windows +
        '<rect x="284" y="122" width="16" height="20" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="160" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* low street-level platform + brick wall */
      '<rect x="0" y="166" width="400" height="8" fill="#eab308"/><rect x="0" y="174" width="400" height="16" fill="#9c968a"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#8a3a28"/>' + bricks +
      tag("BUSTA", 30, 236, 32, GOLD, -5) + tag("FLIPMODE", 220, 232, 28, RED, -4),
      sky("gs", "#f0a35a", "#ffe0a8"));
  }

  /* 2. Nassau Coliseum in Uniondale: the round arena wrapped in silver aluminum fins, glass lobby glowing, spotlights sweeping */
  function coliseum() {
    let fins = "";
    for (let x = 40; x <= 360; x += 10) { const h = 70 - Math.pow((x - 200) / 26, 2); fins += '<rect x="' + x + '" y="' + (110 - Math.max(h, 20)) + '" width="5" height="' + (Math.max(h, 20) + 40) + '" fill="' + ((x / 10) % 2 ? "#d9dde2" : "#b7bdc5") + '"/>'; }
    let fans = "";
    for (let i = 0; i < 13; i++) { const x = 14 + i * 31, c = [GOLD, RED, GREEN, "#e8e8e8"][i % 4];
      fans += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="214" r="9" fill="#1b1b22"/><path d="M' + (x - 13) + ' 260v-32q13-14 26 0v32z" fill="' + c + '"/><path d="M' + (x + 6) + ' 222l8-18" stroke="#1b1b22" stroke-width="4" stroke-linecap="round"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(14) +
      '<path class="beam" d="M110 150L90 0h40z" fill="#fff6c2" opacity=".18"/><path class="beam beam2" d="M290 150L270 0h40z" fill="#fff6c2" opacity=".18"/>' +
      '<ellipse cx="200" cy="150" rx="176" ry="22" fill="#5b6370"/>' + fins +
      '<rect x="30" y="150" width="340" height="30" fill="#1d2a3a"/>' +
      '<rect x="40" y="154" width="320" height="22" fill="#ffd27a" opacity=".55"/>' +
      (function () { let s = ""; for (let x = 40; x < 360; x += 20) s += '<path d="M' + x + ' 154v22" stroke="#1d2a3a" stroke-width="2"/>'; return s; })() +
      '<rect x="150" y="122" width="100" height="22" rx="3" fill="#111"/><text x="200" y="138" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + GOLD + '" letter-spacing="2">BUSTA LIVE</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#22252c"/>' + fans +
      '<text x="200" y="198" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#e9dcc4" letter-spacing="3">NASSAU COLISEUM · UNIONDALE</text>',
      sky("gc", "#0d1430", "#3a3f78"));
  }

  /* 3. The Dungeon Dragon: a stone dungeon, torches flickering, the green dragon breathing fire */
  function dragon() {
    let stones = "";
    for (let y = 0; y < 200; y += 20) for (let x = (y / 20) % 2 ? -20 : 0; x < 400; x += 40) stones += '<rect x="' + x + '" y="' + y + '" width="38" height="18" rx="2" fill="#3a3540"/>';
    const torch = x => '<rect x="' + (x - 3) + '" y="70" width="6" height="26" fill="#6b4a2a"/><path class="flk" d="M' + (x - 8) + ' 70q8-26 16 0z" fill="#ffb238"/><path class="flk flk2" d="M' + (x - 4) + ' 70q4-14 8 0z" fill="#fff2a8"/>' +
      '<circle cx="' + x + '" cy="62" r="26" fill="#ffb238" opacity=".12"/>';
    return svg(
      '<rect width="400" height="260" fill="#25212b"/>' + stones +
      torch(40) + torch(360) +
      '<path d="M120 200q0-90 80-90t80 90z" fill="#120f16"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2d2832"/>' +
      /* dragon */
      '<path class="wing" d="M190 150l40-58 6 40 24-26-4 50z" fill="#1f8a50" stroke="#0e4a2a" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M140 200q10-50 60-56t70 20q10 30-10 36z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M120 204q-30-6-40-30 20 14 46 14z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M240 160q10-34 40-40t28 24q-6 14-30 14z" fill="' + GREEN + '" stroke="#0e4a2a" stroke-width="2"/>' +
      '<path d="M278 122l6-16 6 14M292 124l10-12 2 16" fill="' + GOLD + '" stroke="#7a5a10" stroke-width="1"/>' +
      '<circle cx="292" cy="136" r="4" fill="' + GOLD + '"/><circle cx="293" cy="136" r="1.8" fill="#111"/>' +
      '<path d="M200 168q10 6 20 0M178 176q10 6 20 0" stroke="#bfe8cc" stroke-width="2" fill="none"/>' +
      '<g class="fire"><path d="M306 146q40-18 80-4 -24 6-40 4 20 10 40 22-40-4-80-10z" fill="' + RED + '"/><path d="M308 148q26-8 52 0-26 6-52 6z" fill="' + GOLD + '"/></g>' +
      '<text x="200" y="240" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" fill="#e9dcc4" letter-spacing="3">THE DUNGEON DRAGON</text>');
  }

  /* 4. Jones Beach: the tall brick water tower with its green copper cap over the boardwalk, waves rolling in */
  function beach() {
    let boards = "";
    for (let x = 0; x < 400; x += 16) boards += '<path d="M' + x + ' 178v18" stroke="#8a6a44" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' +
      '<circle cx="330" cy="54" r="24" fill="#fff3b0"/>' +
      '<rect x="96" y="40" width="48" height="140" fill="#b0603a"/><rect x="96" y="40" width="6" height="140" fill="#8f4a2c"/>' +
      '<rect x="92" y="68" width="56" height="8" fill="#c97a4e"/><rect x="92" y="120" width="56" height="6" fill="#c97a4e"/>' +
      '<rect x="108" y="84" width="8" height="26" fill="#3a2418"/><rect x="124" y="84" width="8" height="26" fill="#3a2418"/>' +
      '<rect x="100" y="30" width="40" height="12" fill="#c97a4e"/>' +
      '<path d="M102 30l18-26 18 26z" fill="#4fa38a"/>' +
      '<rect x="0" y="176" width="400" height="22" fill="#b98d5c"/>' + boards +
      '<rect x="0" y="198" width="400" height="22" fill="#f1dca8"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2d82b7"/>' +
      '<path class="wave" d="M-20 222q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#fff" stroke-width="3" fill="none" opacity=".85"/>' +
      '<path class="wave wave2" d="M-20 240q20-8 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#bfe6fa" stroke-width="2" fill="none" opacity=".7"/>' +
      '<g class="gull"><path d="M0 90q8-8 14 0q6-8 14 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      '<g class="gull gull2"><path d="M0 120q6-6 10 0q4-6 10 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      /* beach umbrella in his colors */
      '<path d="M250 176v-40" stroke="#555" stroke-width="2"/><path d="M220 140q30-26 60 0z" fill="' + RED + '"/><path d="M240 140q10-24 20 0z" fill="' + GOLD + '"/>' +
      '<text x="330" y="166" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#18405e" letter-spacing="3">JONES BEACH</text>',
      sky("gj", "#7cc6f0", "#e6f5fb"));
  }

  /* 5. The corner: Front St and Uniondale Ave, green signs, his name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#5a4a3e"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#3a2e26"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#4a3c32" stroke-width="1"/>'; return s; })() +
      tag("BUSTA RHYMES", 120, 158, 34, GOLD, -5) +
      tag("WOO-HAH!", 210, 198, 26, RED, -3) +
      tag("FLIPMODE", 170, 110, 18, GREEN, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Front St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Uniondale Ave</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + RED + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#f7c9c4"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e9dcc4" letter-spacing="2">UNIONDALE, LONG ISLAND</text>',
      sky("gk", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, coliseum, dragon, beach, corner };
})();
