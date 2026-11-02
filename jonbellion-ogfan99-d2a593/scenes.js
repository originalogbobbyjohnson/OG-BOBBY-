/* Smithtown / Lake Ronkonkoma, Long Island opening scenes for the Jon Bellion game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes car{from{transform:translateX(440px)}to{transform:translateX(-110px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes sail{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}' +
    '.sail{animation:sail 9s ease-in-out infinite}.sail2{animation-duration:12s;animation-delay:-5s}' +
    '@keyframes wave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}' +
    '.wave{animation:wave 3s ease-in-out infinite}.wave2{animation-delay:-1.5s}' +
    '@keyframes beam{0%,100%{opacity:.15}50%{opacity:.5}}' +
    '.beam{animation:beam 2s ease-in-out infinite}.beam2{animation-delay:-1s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-70px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,140px) rotate(200deg)}}' +
    '.leaf{animation:leaf 6s linear infinite}.leaf2{animation-delay:-2s}.leaf3{animation-delay:-4s}' +
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
  const GOLD = "#f2c14e", BLUE = "#4fa3e0", RED = "#e8574a";

  /* 1. Smithtown LIRR station: a ground-level platform on the Port Jefferson Branch, low brick depot, a silver diesel train rolling in */
  function train() {
    let windows = "";
    for (let x = 30; x < 280; x += 40) windows += '<rect x="' + x + '" y="124" width="26" height="18" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="186" width="8" height="6" fill="#4a3a2c"/>';
    let trees = "";
    for (let x = -10; x < 420; x += 46) trees += '<circle cx="' + x + '" cy="' + (98 + (x % 3) * 4) + '" r="26" fill="#2f6b3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' + trees +
      /* brick depot with a slate roof behind the platform */
      '<rect x="250" y="76" width="130" height="44" fill="#9a4b34"/><path d="M240 78l75-26 75 26z" fill="#4a4f57"/>' +
      '<rect x="270" y="90" width="16" height="22" fill="#f4d58d" class="flk"/><rect x="300" y="90" width="16" height="22" fill="#f4d58d"/><rect x="330" y="90" width="16" height="22" fill="#f4d58d" class="flk"/>' +
      /* station sign on two posts */
      '<rect x="64" y="62" width="4" height="56" fill="#555"/><rect x="214" y="62" width="4" height="56" fill="#555"/>' +
      '<rect x="40" y="40" width="200" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="66" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Smithtown</text>' +
      badge(150, 60, 50, "LIRR", "#0039a6") +
      '<text x="140" y="92" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff" letter-spacing="1">PORT JEFFERSON BRANCH</text>' +
      '<g class="anim-train">' +
        '<rect x="10" y="112" width="290" height="52" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="10" y="148" width="290" height="6" fill="#0039a6"/>' + windows +
        '<rect x="282" y="124" width="12" height="18" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="294" cy="158" r="4" fill="#fff6c2"/>' +
        '<circle cx="50" cy="168" r="7" fill="#222"/><circle cx="90" cy="168" r="7" fill="#222"/><circle cx="220" cy="168" r="7" fill="#222"/><circle cx="260" cy="168" r="7" fill="#222"/>' +
      '</g>' +
      /* rails and a low platform in front */
      '<rect x="0" y="176" width="400" height="20" fill="#6b5a48"/>' + ties +
      '<path d="M0 184h400M0 194h400" stroke="#9aa0a6" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8d8f93"/><rect x="0" y="200" width="400" height="6" fill="#eab308"/>' +
      '<text x="390" y="250" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f7f3ea" letter-spacing="2">SMITHTOWN, LONG ISLAND</text>',
      sky("gs", "#f7b267", "#ffe4b5"));
  }

  /* 2. The Smithtown Bull: the big bronze bull on its grassy triangle where Route 25 meets 25A, cars going round it */
  function bull() {
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' +
      '<circle cx="330" cy="54" r="20" fill="#fff3b0"/>' +
      '<path d="M0 150q100-30 200-10t200 0v30H0z" fill="#3f7d3a"/>' +
      /* grassy island with a low stone base */
      '<path d="M40 186l160-34 160 34z" fill="#5aa04e"/>' +
      '<rect x="130" y="158" width="140" height="14" rx="3" fill="#b9b1a2"/><rect x="138" y="152" width="124" height="8" rx="2" fill="#cfc8ba"/>' +
      /* the bull */
      '<g fill="#5b3a1e" stroke="#2e1c0c" stroke-width="2" stroke-linejoin="round">' +
        '<path d="M150 112q6-22 40-24h44q22 0 30 14l8 4q8 4 6 12l-8 6q-6 4-12 0l-8 6v24h-10l-2-20q-24 6-48 0l-4 20h-10l-2-22q-10-4-14-12l-4 12-6 22h-9l4-26q-4-8-2-16z"/>' +
        '<path d="M258 100q6-10 18-10M262 102q-2-10 6-18" fill="none" stroke="#e8d7a8" stroke-width="3"/>' +
        '<path d="M150 112q-14 6-16 22" fill="none"/>' +
      '</g>' +
      '<path d="M178 96q20-6 40-2" stroke="#8a6238" stroke-width="3" fill="none" opacity=".8"/>' +
      '<circle cx="268" cy="108" r="2" fill="#111"/>' +
      /* road around it */
      '<rect x="0" y="196" width="400" height="64" fill="#3a3d44"/><path d="M0 228h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car"><rect x="0" y="204" width="66" height="18" rx="6" fill="' + RED + '"/><rect x="12" y="197" width="36" height="10" rx="4" fill="#bfe1f5"/><circle cx="14" cy="223" r="5" fill="#111"/><circle cx="52" cy="223" r="5" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="234" width="70" height="18" rx="6" fill="' + BLUE + '"/><rect x="14" y="227" width="38" height="10" rx="4" fill="#bfe1f5"/><circle cx="16" cy="253" r="5" fill="#111"/><circle cx="56" cy="253" r="5" fill="#111"/></g>' +
      '<text x="20" y="30" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#14324a" letter-spacing="3">THE SMITHTOWN BULL · ROUTE 25 &amp; 25A</text>',
      sky("gb", "#6fb7e8", "#d8eefa"));
  }

  /* 3. Lake Ronkonkoma: the big round lake he grew up next to, sailboats drifting, the pier and trees on the far shore */
  function lake() {
    let trees = "";
    for (let x = 0; x < 420; x += 22) trees += '<path d="M' + x + ' 130l11-' + (26 + (x % 5) * 4) + ' 11 ' + (26 + (x % 5) * 4) + 'z" fill="#2c5e34"/>';
    let planks = "";
    for (let x = 40; x < 170; x += 10) planks += '<path d="M' + x + ' 196v10" stroke="#6b4a2a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gl)"/>' +
      '<circle cx="90" cy="60" r="24" fill="#ffd27a" opacity=".95"/>' + trees +
      '<rect x="0" y="130" width="400" height="130" fill="#2f6f9e"/>' +
      '<path class="wave" d="M-20 150q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fd0f0" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path class="wave wave2" d="M-20 172q20-6 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#cfe8f8" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path d="M60 140l30-16" stroke="#ffd27a" stroke-width="3" opacity=".4"/>' +
      '<g class="sail"><path d="M200 150h44l-6 10h-32z" fill="#f7f3ea"/><path d="M222 148v-46l20 44z" fill="#fff"/><path d="M220 148v-36l-16 34z" fill="' + RED + '"/></g>' +
      '<g class="sail sail2"><path d="M290 132h30l-4 7h-22z" fill="#f7f3ea"/><path d="M305 130v-30l14 28z" fill="' + GOLD + '"/></g>' +
      /* wooden pier */
      '<rect x="30" y="190" width="150" height="10" fill="#a0784c"/>' + planks +
      '<rect x="40" y="200" width="5" height="40" fill="#6b4a2a"/><rect x="100" y="200" width="5" height="40" fill="#6b4a2a"/><rect x="160" y="200" width="5" height="40" fill="#6b4a2a"/>' +
      '<rect x="0" y="236" width="400" height="24" fill="#d9c49a"/>' +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#3a2a14" letter-spacing="3">LAKE RONKONKOMA</text>',
      sky("gl", "#ff9e7a", "#ffe0b8"));
  }

  /* 4. Sunken Meadow State Park (Kings Park, next to Smithtown): the long gray boardwalk, the sandy bluffs, Long Island Sound with the Connecticut shore in the haze */
  function stage() {
    let boards = "";
    for (let i = 0; i < 16; i++) { const y = 196 + i * 4; boards += '<path d="M0 ' + y + 'H400" stroke="#7a7670" stroke-width="' + (0.6 + i * .08) + '"/>'; }
    let rail = ""; for (let x = 0; x < 400; x += 24) rail += '<rect x="' + x + '" y="178" width="3" height="18" fill="#8a8680"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      '<circle cx="320" cy="44" r="20" fill="#fff3c4" opacity=".9"/>' +
      /* Connecticut in the haze */
      '<path d="M0 104q60-8 120-4t140-6 140 4v8H0z" fill="#a8b8c8" opacity=".7"/>' +
      '<rect x="0" y="106" width="400" height="56" fill="#3f7fb0"/>' +
      '<path class="wave" d="M-20 124q20-5 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#cfe8f8" stroke-width="2" fill="none" opacity=".6"/>' +
      '<path class="wave wave2" d="M-20 142q20-5 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#cfe8f8" stroke-width="2" fill="none" opacity=".5"/>' +
      '<g class="sail"><path d="M120 120h30l-4 7h-22z" fill="#f7f3ea"/><path d="M135 118v-30l14 28z" fill="#fff"/><path d="M133 118v-22l-10 20z" fill="' + BLUE + '"/></g>' +
      /* the sandy bluff on the left, beach grass */
      '<path d="M0 100Q50 90 80 120T140 162H0z" fill="#d9c08a"/><path d="M0 100Q40 92 70 108" stroke="#5a8a3a" stroke-width="6" fill="none"/>' +
      '<rect x="0" y="160" width="400" height="34" fill="#e8d6a8"/>' +
      (function () { let g = ""; for (let x = 160; x < 400; x += 18) g += '<path d="M' + x + ' 178q2-12 5-16M' + (x + 4) + ' 178q0-10-3-14" stroke="#7a9a4a" stroke-width="2" fill="none"/>'; return g; })() +
      /* the boardwalk */
      rail + '<rect x="0" y="176" width="400" height="4" fill="#8a8680"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#a8a49c"/>' + boards +
      '<g class="note"><path d="M220 70q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="car" style="animation-duration:14s"><circle cx="0" cy="214" r="5" fill="#3a2a20"/><path d="M-6 236v-16q6-5 12 0v16z" fill="' + RED + '"/></g>' +
      tag("BELLION", 20, 250, 24, GOLD, -4) +
      '<text x="390" y="252" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#2a2a24" letter-spacing="2">SUNKEN MEADOW · KINGS PARK</text>',
      sky("gs", "#7fb8e8", "#e8f0f6"));
  }
  /* 5. The corner: East Main St and Landing Ave in Smithtown, green signs, his name sprayed on the wall, leaves blowing */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#7a3e2c"/>' +
      (function () { let s = ""; for (let y = 78; y < 216; y += 10) s += '<path d="M20 ' + y + 'h380" stroke="#5e2f20" stroke-width="1"/>'; for (let y = 78, r = 0; y < 216; y += 10, r++) for (let x = 20 + (r % 2) * 14; x < 400; x += 28) s += '<path d="M' + x + ' ' + y + 'v10" stroke="#5e2f20" stroke-width="1"/>'; return s; })() +
      tag("JON BELLION", 120, 156, 34, GOLD, -5) +
      tag("BEAUTIFUL MIND", 186, 198, 22, BLUE, -3) +
      tag("SIMMER DOWN", 160, 106, 16, RED, -4) +
      /* sign post */
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">E Main St</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Landing Ave</text>' +
      '<g class="leaf"><path d="M360 10q6-6 12 0q-6 6-12 0z" fill="#e0892a"/></g>' +
      '<g class="leaf leaf2"><path d="M300 0q6-6 12 0q-6 6-12 0z" fill="#c9502a"/></g>' +
      '<g class="leaf leaf3"><path d="M240 20q6-6 12 0q-6 6-12 0z" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + BLUE + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#9fd0f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f7f3ea" letter-spacing="2">SMITHTOWN, LONG ISLAND</text>',
      sky("gc", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, bull, lake, stage, corner };
})();
