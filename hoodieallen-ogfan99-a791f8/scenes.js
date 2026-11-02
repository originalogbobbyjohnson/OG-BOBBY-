/* Plainview / Huntington, Long Island opening scenes for the Hoodie Allen game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:0% 50%;animation:sweep 4s ease-in-out infinite}' +
    '@keyframes sail{from{transform:translateX(-90px)}to{transform:translateX(470px)}}' +
    '.sail{animation:sail 14s linear infinite}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .8s infinite}.bulb2{animation-delay:-.4s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.bob{animation:bob .9s ease-in-out infinite}.bob2{animation-delay:-.45s}' +
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
  const ORANGE = "#ffb238", BLUE = "#3fa9f5", CORAL = "#ff5d73";

  /* 1. Hicksville LIRR station: the elevated concrete platform over the street, a silver train with its blue stripe pulling in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="112" width="28" height="20" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + x + '" y="28" width="6" height="66" fill="#8a8f96"/>';
    let piers = "";
    for (let x = 40; x < 400; x += 110) piers += '<rect x="' + x + '" y="180" width="26" height="80" fill="#b9b3a6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* street below the viaduct */
      '<rect x="0" y="226" width="400" height="34" fill="#3a3d44"/><path d="M0 243h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' + piers +
      /* canopy */
      '<path d="M0 20h400v10H0z" fill="#5b6470"/><path d="M0 30h400" stroke="#2d3238" stroke-width="2"/>' + posts +
      /* station sign */
      '<rect x="40" y="40" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="67" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Hicksville</text>' +
      badge(160, 60, 50, "LIRR", "#0039a6") +
      '<text x="224" y="57" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">PORT JEFFERSON</text>' +
      '<text x="224" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">RONKONKOMA</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="300" height="56" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="138" width="300" height="6" fill="#0039a6"/><rect x="8" y="144" width="300" height="3" fill="#6a5acd"/>' + windows +
        '<rect x="284" y="112" width="16" height="20" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="150" r="4" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge and viaduct deck */
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="18" fill="#9c968a"/>' +
      tag("HOODIE", 26, 218, 30, ORANGE, -5) + tag("ALLEN", 240, 214, 30, BLUE, -4),
      sky("gs", "#7fb6e6", "#d7e9f6"));
  }

  /* 2. Huntington Harbor Lighthouse: the pale concrete Beaux-Arts tower on its square base out in the harbor, beam sweeping, a sailboat going by */
  function lighthouse() {
    let ripples = "";
    for (let i = 0; i < 7; i++) ripples += '<path class="wave' + (i % 2 ? " wave2" : "") + '" d="M' + (i * 60 - 10) + ' ' + (200 + (i % 3) * 16) + 'q15-5 30 0" stroke="#bfe0f2" stroke-width="2" fill="none" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gl)"/>' + stars(8) +
      '<circle cx="320" cy="150" r="30" fill="#ffcf7a" opacity=".85"/>' +
      '<path d="M0 160q60-14 120-4t140-6 140 4v20H0z" fill="#2f4a3a"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#2a5f86"/>' + ripples +
      /* caisson + base + tower */
      '<rect x="104" y="160" width="112" height="20" fill="#9a9488"/>' +
      '<rect x="112" y="112" width="96" height="50" fill="#d8d1c2"/><rect x="112" y="112" width="96" height="6" fill="#bdb5a4"/>' +
      '<rect x="126" y="128" width="12" height="18" fill="#3a3a44"/><rect x="154" y="128" width="12" height="18" fill="#3a3a44"/><rect x="182" y="128" width="12" height="18" fill="#3a3a44"/>' +
      '<rect x="138" y="58" width="44" height="56" fill="#e2dccd"/><rect x="134" y="54" width="52" height="6" fill="#bdb5a4"/>' +
      '<rect x="152" y="74" width="16" height="22" rx="7" fill="#3a3a44"/>' +
      /* lantern */
      '<rect x="146" y="38" width="28" height="16" fill="#1d1f24"/><rect class="flk" x="150" y="40" width="20" height="12" fill="#fff2a8"/>' +
      '<path d="M144 38l16-12 16 12z" fill="#1d1f24"/>' +
      '<path class="beam" d="M170 46L400 18v56z" fill="#fff2a8" opacity=".28"/>' +
      /* sailboat */
      '<g class="sail"><path d="M0 214h46l-8 10H8z" fill="#f2efe8"/><path d="M22 212V170l22 40z" fill="#fff"/><path d="M20 212V180l-14 30z" fill="' + CORAL + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#e6f1fa" letter-spacing="3">HUNTINGTON HARBOR</text>',
      sky("gl", "#2b2a5a", "#f29b6b"));
  }

  /* 3. New York Avenue in Huntington village: the theater marquee lit up, bulbs chasing, the line out front bouncing */
  function marquee() {
    let bulbs = "";
    for (let x = 64; x <= 336; x += 14) bulbs += '<circle class="bulb' + ((x / 14) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="96" r="3" fill="#ffe08a"/><circle class="bulb' + ((x / 14) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="152" r="3" fill="#ffe08a"/>';
    let bricks = "";
    for (let y = 10; y < 210; y += 12) bricks += '<path d="M0 ' + y + 'h400" stroke="#6e3a2a" stroke-width="1" opacity=".5"/>';
    let fans = "";
    for (let i = 0; i < 12; i++) { const x = 18 + i * 32, c = [ORANGE, BLUE, CORAL, "#e8e8e8"][i % 4];
      fans += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="206" r="9" fill="#1b1b22"/><path d="M' + (x - 13) + ' 260v-34q13-14 26 0v34z" fill="' + c + '"/><path d="M' + (x - 9) + ' 206a9 9 0 0 1 18 0" fill="' + c + '"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="#8a4532"/>' + bricks +
      '<rect x="0" y="0" width="400" height="14" fill="#5a2a1e"/>' +
      '<rect x="150" y="18" width="100" height="60" fill="#2a2030"/><rect x="156" y="24" width="88" height="48" fill="#ffd27a" opacity=".25"/>' +
      '<rect x="56" y="88" width="288" height="72" rx="4" fill="#15131c" stroke="#c9a24a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="118" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="2">TONIGHT</text>' +
      '<text x="200" y="142" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + ORANGE + '" letter-spacing="3">HOODIE ALLEN</text>' +
      '<rect x="0" y="160" width="400" height="100" fill="#22202a"/><rect x="120" y="170" width="160" height="40" fill="#3a2a20"/>' +
      fans +
      '<text x="200" y="186" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#e9dcc4" letter-spacing="2">NEW YORK AVE · HUNTINGTON</text>');
  }

  /* 4. Old Bethpage Village Restoration, a couple of miles from his Plainview corner: the 1800s farm village, the white clapboard church with its steeple, red barns, a horse cart on the dirt lane */
  function beach() {
    let fence = "";
    for (let x = 0; x < 400; x += 20) fence += '<path d="M' + x + ' 196v-16" stroke="#8a6a44" stroke-width="3"/>';
    let clap = "";
    for (let y = 116; y < 186; y += 6) clap += '<path d="M150 ' + y + 'h100" stroke="#d8d4c8" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gj)"/>' + '<circle cx="340" cy="44" r="20" fill="#fff3b0"/>' +
      '<path d="M0 150q100-30 200-10t200-6v30H0z" fill="#6aa04a"/>' +
      /* red barn */
      '<rect x="18" y="120" width="100" height="70" fill="#a8322a"/><path d="M10 122l58-40 58 40z" fill="#6a2018"/><path d="M48 190v-44h40v44z" fill="#7a2420"/><path d="M48 146l40 44M88 146l-40 44" stroke="#f6f3ea" stroke-width="3"/>' +
      '<rect x="58" y="100" width="20" height="14" fill="#f6f3ea"/>' +
      /* the white clapboard church */
      '<rect x="150" y="112" width="100" height="78" fill="#f6f3ea"/>' + clap + '<path d="M142 114l58-34 58 34z" fill="#4a4a4a"/>' +
      '<rect x="186" y="54" width="28" height="40" fill="#f6f3ea" stroke="#d8d4c8"/><path d="M182 54l18-40 18 40z" fill="#4a4a4a"/><path d="M200 14v-10" stroke="#4a4a4a" stroke-width="2"/>' +
      '<path d="M194 92v-18a6 6 0 0 1 12 0v18z" fill="#2a3a4a"/>' + [162, 226].map(x => '<path d="M' + x + ' 170v-30a6 6 0 0 1 12 0v30z" fill="#2a3a4a"/>').join("") + '<path d="M190 190v-28h20v28z" fill="#3a2a1e"/>' +
      /* farmhouse */
      '<rect x="290" y="128" width="90" height="62" fill="#e8dcb8"/><path d="M282 130l53-30 53 30z" fill="#5a4a3a"/>' + [300, 330, 356].map(x => '<rect x="' + x + '" y="144" width="12" height="16" fill="#2a3a4a"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#5f9a3a"/><path d="M0 222q200-14 400 0v18q-200-14-400 0z" fill="#b89a6a"/>' + fence +
      /* horse and cart on the lane */
      '<g class="sail" style="animation-duration:20s"><g transform="translate(0 196)"><path d="M10 22h40v-14h-40z" fill="#8a5a2a"/><circle cx="18" cy="26" r="8" fill="none" stroke="#3a2418" stroke-width="3"/><circle cx="44" cy="26" r="8" fill="none" stroke="#3a2418" stroke-width="3"/>' +
      '<g class="bob"><path d="M54 12h30v10h-30z" fill="#6a4426"/><path d="M82 12l8-10 4 4-6 8z" fill="#6a4426"/><path d="M58 22v12M80 22v12" stroke="#6a4426" stroke-width="3"/></g></g></g>' +
      '<g class="gull"><path d="M0 70q8-8 14 0q6-8 14 0" stroke="#1d2a33" stroke-width="2" fill="none"/></g>' +
      '<rect x="10" y="10" width="140" height="34" rx="3" fill="#1f7a3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="80" y="25" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">OLD BETHPAGE</text><text x="80" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#fff">VILLAGE RESTORATION</text>' +
      tag("HOODIE", 260, 252, 26, ORANGE, -5),
      sky("gj", "#7cc6f0", "#e6f5fb"));
  }

  /* 5. The corner: Old Country Rd and Manetto Hill Rd in Plainview, green signs, his name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a5568"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#2d3748"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#3b4556" stroke-width="1"/>'; return s; })() +
      tag("HOODIE ALLEN", 112, 156, 34, ORANGE, -5) +
      tag("HOODIE MOB", 196, 196, 24, BLUE, -3) +
      tag("HAPPY CAMPER", 150, 108, 16, CORAL, -4) +
      /* sign post */
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Old Country Rd</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Manetto Hill Rd</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + BLUE + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#9fd0f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#cbd5e0" letter-spacing="2">PLAINVIEW, LONG ISLAND</text>',
      sky("gc", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, lighthouse, marquee, beach, corner };
})();
