/* East Orange, New Jersey ("Illtown") opening scenes for the Naughty by Nature game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes swing{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bell{transform-box:fill-box;transform-origin:50% 0;animation:swing 1.6s ease-in-out infinite}' +
    '@keyframes wave{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}' +
    '.arm{transform-box:fill-box;transform-origin:50% 100%;animation:wave 1.1s ease-in-out infinite}.arm2{animation-delay:-.55s}' +
    '@keyframes sweep{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}' +
    '.beam{transform-box:fill-box;transform-origin:50% 0;animation:sweep 3.4s ease-in-out infinite}.beam2{animation-delay:-1.7s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes twk{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.twk{animation:twk 1.4s infinite}.twk2{animation-delay:-.7s}' +
    '@keyframes car{from{transform:translateX(420px)}to{transform:translateX(-80px)}}' +
    '.car{animation:car 6s linear infinite}' +
    '@keyframes fly{from{transform:translateX(-40px)}to{transform:translateX(440px)}}' +
    '.bird{animation:fly 9s linear infinite}' +
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
  const GOLD = "#ffb21f", RED = "#e8452c", BLUE = "#4fc3ff";

  /* 1. Brick Church station, up on the embankment over Main St: a silver NJ Transit train on the Morris & Essex line pulls in */
  function train() {
    let windows = "";
    for (let x = 22; x < 270; x += 46) windows += '<rect x="' + x + '" y="98" width="30" height="20" rx="3" fill="#e6f0ff" opacity=".85"/>';
    let rail = "";
    for (let x = 0; x <= 400; x += 16) rail += '<rect x="' + x + '" y="148" width="3" height="18" fill="#3a3f48"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(16) +
      '<circle cx="340" cy="34" r="14" fill="#fff7dd" opacity=".9"/>' +
      /* station sign on two posts */
      '<rect x="40" y="20" width="4" height="40" fill="#555"/><rect x="236" y="20" width="4" height="40" fill="#555"/>' +
      '<rect x="24" y="14" width="232" height="30" rx="3" fill="#111"/>' +
      '<text x="36" y="35" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Brick Church</text>' +
      badge(160, 29, 44, "NJT", "#0039a6") +
      '<text x="212" y="33" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="8" fill="#ff7a1a">M&amp;E</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="84" width="300" height="60" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="300" height="4" fill="#0039a6"/><rect x="8" y="129" width="300" height="3" fill="#ff7a1a"/><rect x="8" y="133" width="300" height="3" fill="#b0237a"/>' + windows +
        '<rect x="282" y="96" width="20" height="22" rx="3" fill="#1a1a1a"/><circle cx="300" cy="138" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="144" width="400" height="6" fill="#eab308"/>' + rail +
      /* embankment wall over the street */
      '<rect x="0" y="166" width="400" height="44" fill="#7a5a48"/>' +
      (function () { let b = ""; for (let y = 168; y < 208; y += 10) for (let x = (y / 10) % 2 ? 0 : 12; x < 400; x += 24) b += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#8a6a56"/>'; return b; })() +
      '<rect x="0" y="210" width="400" height="50" fill="#1c1f26"/>' +
      tag("NAUGHTY", 24, 248, 30, GOLD, -5) + tag("ILLTOWN", 230, 244, 26, RED, -3),
      sky("g1", "#10142a", "#3a3a6a"));
  }

  /* 2. The old red-brick Brick Church that gave the neighborhood its name: white steeple, bell swinging, birds over the trees */
  function church() {
    let bricks = "";
    for (let y = 120; y < 214; y += 9) for (let x = (y / 9) % 2 ? 120 : 128; x < 280; x += 16) bricks += '<rect x="' + x + '" y="' + y + '" width="14" height="7" fill="#a8432e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' +
      '<g class="bird"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<g class="bird" style="animation-delay:-4s"><path d="M0 62q5-5 10 0q5-5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* trees */
      '<circle cx="50" cy="170" r="44" fill="#3f8a3a"/><circle cx="350" cy="166" r="46" fill="#3f8a3a"/><circle cx="20" cy="190" r="30" fill="#4a9a44"/><circle cx="384" cy="190" r="30" fill="#4a9a44"/>' +
      /* white steeple */
      '<rect x="178" y="70" width="44" height="50" fill="#f5f2ea" stroke="#cfc8b8" stroke-width="2"/>' +
      '<path d="M178 70l22-56 22 56z" fill="#f5f2ea" stroke="#cfc8b8" stroke-width="2"/><rect x="198" y="4" width="4" height="12" fill="#d9b25a"/>' +
      '<path d="M190 112v-28a10 10 0 0 1 20 0v28z" fill="#2a2a34"/>' +
      '<g class="bell"><path d="M194 88q6-8 12 0l2 14h-16z" fill="#c9a24a"/></g>' +
      /* red brick body */
      '<rect x="120" y="120" width="160" height="94" fill="#b8503a"/>' + bricks +
      '<path d="M112 122l88-18 88 18z" fill="#8a3424"/>' +
      '<path d="M140 190v-40a12 12 0 0 1 24 0v40zM236 190v-40a12 12 0 0 1 24 0v40z" fill="#f5f2ea" stroke="#fff" stroke-width="2"/>' +
      '<path d="M144 188v-36M260 188v-36" stroke="#9fb6d0" stroke-width="16" opacity=".5"/>' +
      '<path d="M184 214v-40a16 16 0 0 1 32 0v40z" fill="#f5f2ea"/><path d="M188 214v-38h24v38z" fill="#5a2a1a"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3f48"/><rect x="0" y="214" width="400" height="6" fill="#bdb6a6"/>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#eee" letter-spacing="3">BRICK CHURCH · EAST ORANGE</text>',
      sky("gc", "#8fcdf2", "#e9f6ff"));
  }

  /* 3. Hip Hop Hooray: the whole crowd with their arms up, waving side to side under the lights */
  function hooray() {
    let crowd = "";
    for (let i = 0; i < 14; i++) {
      const x = 14 + i * 28, y = 196 + (i % 2) * 8, c = ["#2a2230", "#33293a", "#241e2a"][i % 3];
      crowd += '<g class="arm' + (i % 2 ? " arm2" : "") + '"><path d="M' + (x - 6) + ' ' + (y - 4) + 'l-4-40M' + (x + 6) + ' ' + (y - 4) + 'l4-40" stroke="' + c + '" stroke-width="6" stroke-linecap="round"/></g>' +
        '<circle cx="' + x + '" cy="' + (y - 8) + '" r="10" fill="' + c + '"/><rect x="' + (x - 13) + '" y="' + y + '" width="26" height="70" rx="8" fill="' + c + '"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="#120e1c"/>' +
      '<g class="beam"><path d="M90 0l-60 200h120z" fill="' + GOLD + '" opacity=".2"/></g><g class="beam beam2"><path d="M310 0l-60 200h120z" fill="' + BLUE + '" opacity=".2"/></g>' +
      '<rect x="60" y="30" width="280" height="56" rx="6" fill="#1a1422" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="26" textLength="240" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">HIP HOP HOORAY</text>' +
      '<circle class="twk" cx="74" cy="44" r="3" fill="' + RED + '"/><circle class="twk twk2" cx="326" cy="44" r="3" fill="' + RED + '"/><circle class="twk twk2" cx="74" cy="72" r="3" fill="' + RED + '"/><circle class="twk" cx="326" cy="72" r="3" fill="' + RED + '"/>' +
      '<text x="200" y="112" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff" letter-spacing="4">HO · HEY · HO</text>' +
      crowd);
  }

  /* 4. Album world, Poverty's Paradise (1995): Illtown rooftops at sunset, palm trees swaying where palm trees shouldn't be, dollar bills blowing past */
  function stage() {
    let roofs = "";
    [[0, 150, 70, "#6a3a2a"], [74, 166, 60, "#5a4a5a"], [138, 140, 80, "#7a4a32"], [222, 160, 64, "#5a3a3a"], [290, 146, 110, "#6a4a3a"]].forEach(([x, y, w, c]) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (260 - y) + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="' + (w + 4) + '" height="5" fill="#2a1a14"/>';
      for (let yy = y + 12; yy < 250; yy += 20) for (let xx = x + 8; xx < x + w - 10; xx += 18) roofs += '<rect' + ((xx + yy) % 5 === 0 ? ' class="twk"' : '') + ' x="' + xx + '" y="' + yy + '" width="9" height="11" fill="' + ((xx + yy) % 3 ? "#2a1e24" : "#ffd98a") + '"/>';
    });
    const palm = (x, y, cls) => '<path d="M' + x + ' 260q-4 -50 4 -' + (260 - y) + '" stroke="#5a3a22" stroke-width="7" fill="none"/>' +
      '<g class="' + cls + '"><path d="M' + (x + 4) + ' ' + y + 'q-30 -10 -44 10M' + (x + 4) + ' ' + y + 'q30 -14 46 6M' + (x + 4) + ' ' + y + 'q-20 -24 -40 -20M' + (x + 4) + ' ' + y + 'q22 -26 40 -18M' + (x + 4) + ' ' + y + 'q2 -26 -4 -36" stroke="#2f7a3a" stroke-width="6" fill="none" stroke-linecap="round"/></g>';
    const bill = (x, y, d) => '<g style="animation:billfly 6s linear infinite;animation-delay:' + d + 's"><g transform="translate(' + x + ' ' + y + ')"><g class="spin" style="animation-duration:2.4s"><rect x="-10" y="-5" width="20" height="10" fill="#8fbf6a" stroke="#3a6a2a" stroke-width="1"/><circle cx="0" cy="0" r="2.5" fill="none" stroke="#3a6a2a"/></g></g></g>';
    return svg(
      '<style>@keyframes billfly{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-60px)}}</style>' +
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="300" cy="100" r="34" fill="#ffd36a" opacity=".9"/>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff" stroke="#2a1a14" stroke-width="2" paint-order="stroke">POVERTY\'S PARADISE</text>' +
      roofs + palm(110, 120, "arm") + palm(330, 110, "arm arm2") +
      bill(0, 100, 0) + bill(0, 130, -2) + bill(0, 76, -4) + bill(0, 150, -3) +
      tag("ILLTOWN", 14, 238, 30, GOLD, -5) + tag("NAUGHTY", 250, 242, 26, RED, -6),
      sky("g4", "#3a2a6a", "#ff9a5a"));
  }

  /* 5. Main St and Halsted St by the station: the wall with their name tagged, the green street signs, cars going by */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' + stars(16) +
      '<rect x="0" y="40" width="70" height="180" fill="#1d1a24"/><rect x="330" y="60" width="70" height="160" fill="#1d1a24"/>' +
      '<rect x="20" y="70" width="250" height="150" fill="#4a3a32"/>' +
      (function () { let b = ""; for (let y = 74; y < 218; y += 12) for (let x = (y / 12) % 2 ? 14 : 24; x < 266; x += 22) b += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#57463c"/>'; return b; })() +
      tag("NAUGHTY", 40, 132, 34, GOLD, -7) + tag("BY NATURE", 54, 172, 24, RED, -5) + tag("HOORAY", 120, 208, 20, BLUE, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Main St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Halsted St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="54" height="16" rx="4" fill="' + GOLD + '"/><rect x="10" y="218" width="30" height="10" rx="3" fill="#b07a10"/><circle cx="12" cy="244" r="5" fill="#111"/><circle cx="42" cy="244" r="5" fill="#111"/></g>',
      sky("gk", "#140d1e", "#3a2a3a"));
  }

  window.SCENES = { train, church, hooray, stage, corner };
})();
